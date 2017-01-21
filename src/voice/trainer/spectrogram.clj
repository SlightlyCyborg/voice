;;;; voice.trainer.spectrogram
;;;; by slightlycyborg
;;;;
;;;; Grabs audio from audio files and generates frequency data needed for spectrograms

(ns voice.trainer.spectrogram
  (:require [voice.trainer.spectrogram-graphics :as g])
  (:import org.jtransforms.fft.DoubleFFT_1D
           org.apache.commons.io.FilenameUtils
           javax.sound.sampled.AudioInputStream
           java.io.File
           javax.sound.sampled.AudioFormat
           javax.sound.sampled.AudioFormat$Encoding
           javax.sound.sampled.AudioSystem)
  (:use [incanter core stats charts io]))


(def filename-path "resources/ipa-samples/")
(def max-fq-for-spectrogram 8000)
(def hamming-alpha 0.54)
(def hamming-beta  0.46)
(def window-overlap 0.5)
(def mp3-bitdepth 441000)
(def pi 3.1415)

(defn get-filenames [path] 
  (-> (File. path)
      (.listFiles)
      ((partial filter #(.isFile %)))
      ((partial map #(.getName %)))))

(def ipa-filenames (map
                    #(str filename-path %)
                    (get-filenames filename-path)))

(def header-offsets
  {:wav 44})

(defn slurp-bytes
  "Slurp the bytes from a slurpable thing"
  [x]
  (with-open [out (java.io.ByteArrayOutputStream.)]
    (clojure.java.io/copy (clojure.java.io/input-stream x) out)
    (.toByteArray out)))


(defn get-filetype [filename]
  (case (FilenameUtils/getExtension filename)
    "wav" :wav
    "mp3" :mp3))


(defn bytes-to-short [bytes]
  (let [shorts (short-array (/ (count bytes) 2))]
    (-> (java.nio.ByteBuffer/wrap bytes)
        (.order java.nio.ByteOrder/LITTLE_ENDIAN)
        (.asShortBuffer)
        (.get shorts))
    shorts))

(defn byte-array-to-doubles [b]
   (double-array (bytes-to-short b)))

(defn parse-wav-header [b]
  (-> (map
       #(- (bit-and (int %) 0xff) 0x7f)
       b)
     (#(print (subvec % 0 44)))))

(defn grab-data-from-mp3 [filename]
  (try
    (let [f   (File. filename)
         in (AudioSystem/getAudioInputStream f)
         din nil 
         base-format (.getFormat in)
         decodedFormat (AudioFormat.
                        AudioFormat$Encoding/PCM_SIGNED
                        (.getSampleRate base-format)
                        16
                        (.getChannels base-format)
                        (* 2 (.getChannels base-format))
                        (.getSampleRate base-format)
                        false)]
     (-> (AudioSystem/getAudioInputStream decodedFormat in)
         (slurp-bytes)))
    (catch Exception e (print e))))

(defn fft-rv-to-magnitudes [fft-rv]
  ;(println "count: " (count fft-rv))
  (->> (into [] fft-rv)
       (partition 2)
   (mapv #(sqrt (+ (* (first %) (first %)) (* (second %) (second %)))))))


(defn grab-double-data-from-mp3-file [filename]
  (->  filename
       grab-data-from-mp3
       byte-array-to-doubles))

(defn view-audio-plot [audio-data start-index stop-index]
  (-> (xy-plot
       (range)
       (subvec
        (into [] audio-data) start-index stop-index))
      (view)))

(defn view-fq-plot [bitrate bins audio-data max-fq]
  (-> (xy-plot
       (map #(* % (/ bitrate bins)) (range))
       (subvec
        (into [] audio-data) 0 (int (/ max-fq (/ bitrate bins)))))
      (view)))


(defn hamming [data]
  (map-indexed
   (fn [n d]
     (* d
      (- hamming-alpha
        (* hamming-beta
           (cos
            (/ (* 2 pi n)
               (- (count data) 1)))))))
   data))

(defn hanning [data]
  (map-indexed
   (fn [n d]
     (* d 0.5 
        (- 1
           (cos
            (/ (* 2 pi n)
               (- (count data) 1))))))
   data))

(defn normalize-data [spectrogram-data]
  (let [max (reduce max 0 (flatten spectrogram-data))]
    (mapv
     #(mapv
       (fn [d] (/ d (+ 0.00001 max)))
       %)
     spectrogram-data)))



(defn normalize-chunk [chunk]
  (let [max (reduce max 0 (flatten chunk))]
     (mapv
       (fn [d] (/ d (+ 0.000001 max)))
       chunk)))

(defn threshold [chunk]
  (let [min (reduce min 0 (flatten chunk))
        avg (/ (reduce + 0 (flatten chunk))
               (count (flatten chunk)))]
    (mapv
     #(if ( < % ( + min (- avg min)))
       (* 0.2 %) 
        %)
     (flatten chunk))))

(defn fft-graph [n data]
  (view-fq-plot
   44100 n
   (let [d (fft-rv-to-magnitudes data)
         max (reduce max 0 (flatten d))]
     (mapv (fn [d] (/ d max)) d))
   max-fq-for-spectrogram))

(defn audio-fft
  
  [data n
   {audio-waveform? :audio-waveform? fq-graph? :fq-graph? no-rv? :no-rv?}]

  ;(println "\n\nnew-fft")
  ;(println "count-orig: " (count data))
  (let [transformer  (DoubleFFT_1D. n)]
    (if audio-waveform? (view-audio-plot data 0 (count data)))
    (-> transformer
        (.realForward data))
    (if fq-graph?
      (fft-graph n data))
    ;(println "count-afterfft" (count data))
    (if (not no-rv?)
      (-> data
          ((partial mapv #(identity %)))
          (subvec 0 n)
          fft-rv-to-magnitudes
          normalize-chunk
          ((partial mapv #(/ 1 (+ 1.0 (exp (* -5.0 (- % 0.5)))))))
          (subvec 0 (int (/ 8000 (/ 44100 n))))))))


(defn get-data [filename]
  (case (get-filetype filename)
    :mp3 (grab-double-data-from-mp3-file filename)))



(defn spectrogram-from-file
  [filename num-of-fq-bins window-size]

  (if (not (<= num-of-fq-bins (/ window-size 2)))
    (throw (Exception. "num-of-fq-bins must be <= n/2")))
  (g/draw-spectrogram 
   
    (map
      #(do
         (audio-fft
          (double-array  %) num-of-fq-bins 
          {:audio-waveform? false 
           :fq-graph? false 
           :no-rv? false}))
      (partition window-size
                 (int (* (- 1 window-overlap) window-size))
                 (get-data filename)))
    0 0) :done)





;(spectrogram-from-file (first ipa-filenames) 256 512)


;(apply max (flatten (spectrogram-from-file-data (first ipa-filenames) 256 512)))



;(view-audio-plot (grab-double-data-from-mp3-file (second ipa-filenames)) 1000 6000)

















