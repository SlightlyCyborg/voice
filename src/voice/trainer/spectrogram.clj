;;;; voice.trainer.spectrogram
;;;; by slightlycyborg
;;;;
;;;; Grabs audio from audio files and generates frequency data needed for spectrograms

(ns voice.trainer.spectrogram
  (:require [voice.trainer.spectrogram-graphics :as g]
            [voice.trainer.audio-data :as a])
  (:import org.jtransforms.fft.DoubleFFT_1D
           org.apache.commons.io.FilenameUtils
           javax.sound.sampled.AudioInputStream
           java.io.File
           javax.sound.sampled.AudioFormat
           javax.sound.sampled.AudioFormat$Encoding
           javax.sound.sampled.AudioSystem)
  (:use [incanter core stats charts io]))


(def filename-path "resources/ipa-samples/")
(def max-fq 8000)
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

;; Data manipulation
(def hanning-cos-cache (atom {}))

(defn in-cos-cache? [n]
  (if (not (nil? (get @hanning-cos-cache n)))
    true
    false))

(defn hanning-cos [data n]
  (* 0.5 (- 1 (cos (/ (* 2 pi n) (- (count data) 1))))))

(defn hanning [data]
  (map-indexed
   (fn [n d]
     (if (in-cos-cache? n)
      (* d (@hanning-cos-cache n))
      (-> (hanning-cos data n)
          (#(do (swap! hanning-cos-cache assoc n %)
                (* d %))))))
   data))

(defn normalize-data [spectrogram-data]
  (let [max (reduce max 0 (flatten spectrogram-data))]
    (mapv #(mapv
            (fn [d] (/ d (+ 0.00001 max)))
            %) spectrogram-data)))

(defn normalize-chunk [chunk]
  (let [max (reduce max 0 (flatten chunk))]
     (mapv
       (fn [d] (/ d (+ 0.000001 max)))
       chunk)))

;;; MAIN FUNCTIONS

(defn fft-rv-to-magnitudes [fft-rv]
  ;(println "count: " (count fft-rv))
  (->> (into [] fft-rv)
       (partition 2)
   (mapv #(sqrt (+ (* (first %) (first %)) (* (second %) (second %)))))))

(defn run-fft!! [transformer data]
  (-> transformer
      (.realForward data)))

(defn process-fft-result [result n]
(-> result
        ((partial mapv #(identity %)))
        (subvec 0 n)
        fft-rv-to-magnitudes
        normalize-chunk
        ((partial mapv #(/ 1 (+ 1.0 (exp (* -5.0 (- % 0.5)))))))
        (subvec 0 (int (/ max-fq (/ 44100 n))))))

(defn audio-fft
  [data n]
  (let [transformer  (DoubleFFT_1D. n)]
    (run-fft!! transformer data)
    (process-fft-result data n)))

(defn get-data [filename]
  (case (a/get-filetype filename)
    :mp3 (a/grab-double-data-from-mp3-file filename)))

(defn catch-fft-errors
  [num-of-fq-bins window-size]
  (if (not (<= num-of-fq-bins (/ window-size 2)))
    (throw (Exception. "num-of-fq-bins must be <= n/2"))))

(defn chunk-data [f window-size]
  (partition window-size
             (int (* (- 1 window-overlap) window-size))
             f))

(defn spectrogram-from-file
  [filename num-of-fq-bins window-size draw?]

  (catch-fft-errors num-of-fq-bins window-size)
  (-> (get-data filename)
      (chunk-data  window-size)
      ((partial mapv
            #(audio-fft (double-array (hanning %)) num-of-fq-bins)))
    (#(if draw? (g/draw-spectrogram %)))) :done)


;(spectrogram-from-file (first ipa-filenames) 256 512)


;(apply max (flatten (spectrogram-from-file-data (first ipa-filenames) 256 512)))



;(view-audio-plot (grab-double-data-from-mp3-file (second ipa-filenames)) 1000 6000)

















