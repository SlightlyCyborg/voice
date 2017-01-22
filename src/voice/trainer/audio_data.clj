;;;; by slightlycyborg
;;;; audio data utils; mainly loading PCM data into arrays

(ns voice.trainer.audio-data
  (:import org.apache.commons.io.FilenameUtils
           javax.sound.sampled.AudioInputStream
           java.io.File
           javax.sound.sampled.AudioFormat
           javax.sound.sampled.AudioFormat$Encoding
           javax.sound.sampled.AudioSystem))

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

(defn byte-array-to-doubles [b type]
  (case type
   :mp3 (double-array (bytes-to-short b))))

(defn make-decode-format [base-format]
   (AudioFormat.
    AudioFormat$Encoding/PCM_SIGNED
    (.getSampleRate base-format)
    16
    (.getChannels base-format)
    (* 2 (.getChannels base-format))
    (.getSampleRate base-format)
    false))

(defn grab-data-from-file [filename]
  (try
    (let [in  (AudioSystem/getAudioInputStream (File. filename))
          decodedFormat (make-decode-format (.getFormat in))]
      (-> (AudioSystem/getAudioInputStream decodedFormat in)
         (slurp-bytes)))
    (catch Exception e (print e))))

(defn grab-double-data-from-mp3-file [filename]
  (->  filename
       grab-data-from-file
       (byte-array-to-doubles :mp3)))


