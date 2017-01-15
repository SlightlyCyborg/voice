(ns voice.trainer.spectrogram
  (:import org.jtransforms.fft.DoubleFFT_1D
           org.apache.commons.io.FilenameUtils
           javax.sound.sampled.AudioInputStream
           java.io.File
           javax.sound.sampled.AudioFormat
           javax.sound.sampled.AudioFormat$Encoding
           javax.sound.sampled.AudioSystem)
  (:use [incanter core stats charts io]))


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
    ".wav" :wav
    ".mp3" :mp3))

(defn byte-array-to-doubles [b]
  (into []
        (map
         #(- (bit-and (int %) 0xff) 0x7f)
         b)))

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

(defn make-from-file [filename num-of-fq-bins]
  (let [data         (slurp-bytes filename)
        transformer  (DoubleFFT_1D. num-of-fq-bins)]
    (case (get-filetype filename)
      :wav (-> transformer
               (.complexForward (grab-single-channel-in-doubles data :wav))))))


(defn view-audio-plot [audio-data start-index stop-index]
  (-> (xy-plot
       (range)
       (subvec
        (into [] (take 650000
                       (map
                        #(- (bit-and (int %) 0xff) 0x7f)
                        audio-data)))
        start-index stop-index))
      (view)))

















