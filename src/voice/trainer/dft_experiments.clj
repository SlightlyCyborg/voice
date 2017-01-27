(ns voice.trainer.dft-experiments
  (:use [incanter core stats charts io])
  (:import org.jtransforms.fft.DoubleFFT_1D
           java.io.DataOutputStream
           java.io.FileOutputStream
           com.google.common.io.LittleEndianDataOutputStream)
  (:require [voice.trainer.spectrogram :as s]))

(def pi 3.14159265359)

;; Usage
;; (sample-sin 0 1 1/8)
(defn sample-sin
  [start end step]
  (map
   #(vector % (sin (* 2000 pi %)))
   (range start end step)))



(def simple-sin (s/chunk-data (sample-sin 0 20 1/8) 60 0))
simple-sin

(defn overlap-reducer [overlapped-samples l chunk]
  (let [chunk (into [] chunk)
        splice-index (int (- (count l) overlapped-samples))]
   (if (empty? l)
     (into [] chunk)
     (-> l
      (subvec 0 splice-index)
      (concat (map + (subvec l splice-index) (subvec chunk 0 overlapped-samples)))
      (concat (subvec chunk overlapped-samples))
      ((partial into []))))))

(defn stitch-together-chunks [chunks overlap]
  (let [overlapped-samples (* overlap (count (first chunks)))]
    (reduce
     (partial overlap-reducer overlapped-samples)
     []
     chunks)))

(defn get-fft-of-data [d]
  (let [transformer (DoubleFFT_1D. (count d))
        data (double-array d)]
    (s/run-fft!! transformer data)
    (-> data
        ((partial mapv #(identity %)))
        (subvec 0 (/ (count d) 2))
        ((fn [fft-rv]
           {:magnitudes (s/fft-rv-to-magnitudes fft-rv)
            :phase-angles (s/fft-rv-to-phase-angle fft-rv)})))))


(count simple-sin)
simple-sin



(map
 #(view (-> (xy-plot (range 0 40 (/ (* 8) (count %)))
                    (:magnitudes (get-fft-of-data (map second %))))
           (set-x-label "frequency (hz)")
           (set-y-label "Amplitude")
           (add-points (range 0 40 (/ (* 8) (count %)))
                       (:phase-angles (get-fft-of-data (map second %))))))
 simple-sin)

(defn view-total-data [chunks]
  (let [total-data (stitch-together-chunks chunks)]
    (view (xy-plot (map first total-data) (map second total-data)))))

(view (xy-plot (map first simple-sin) (map second simple-sin)))


(defn write-short-le [o val]
  (.writeByte o (bit-and val 0xFF))
  (.writeByte o (-> val (bit-shift-right 8) (bit-and 0xFF))))

(defn save-wav-from-pcm [data filename]
  (let [o (LittleEndianDataOutputStream. (FileOutputStream. filename))]
    (.writeBytes o "RIFF")
    (.writeInt o (* 2 (+ 36 (count data))))
    (.writeBytes o "WAVE")
    (.writeBytes o "fmt ")
    (.writeInt o (int 16))
    (.writeShort o (short 1))
    (.writeShort o (short 1))
    (.writeInt o (int 16000))
    (.writeInt o (int (* 2 16000)))
    (.writeShort o (short 2))
    (.writeShort o (short 16))
    (.writeBytes o "data")
    (.writeInt o (int (* 2 (count data))))
    (doall
     (map #(.writeShort o %) data))))


(defn test-wave-writing []
  (let [a (sample-sin 0 1 1/16000)]
    (print (type a))
    (save-wav-from-pcm  (map (comp short (partial * 16383))
                             (map second a))
                        "sin.wav"))
  :done)


(defn test-hanning-restitch []
  (let [a (sample-sin 0 1 1/16000)]
    (save-wav-from-pcm 
     (stitch-together-chunks
      (map s/hanning (s/chunk-data
                      (map (comp short (partial * 16383) second) a) 512 0.5))
      0.5)
     "hanning-stitch.wav"))
  :done)

(defn alter-phase-angles [ffts]
  (let [magnitude-chunks (map s/fft-rv-to-magnitudes ffts)
        phase-chunks     (map s/fft-rv-to-phase-angle ffts)]
    (map
     (fn [magnitudes phases]
       (map
        #(let [change-phase? (if (< (rand) 0.3) true false)]
           {:magnitude %1 :phase (if change-phase?
                                   (* %2 (rand 10))
                                   %2)})
        magnitudes phases))
     magnitude-chunks phase-chunks)))

(defn polar-to-rectangular [ffts]
  (map
   (fn [chunk-bins]
     (map
      (fn [fq-bin] [(* (:magnitude fq-bin) (cos (:phase fq-bin)))
                    (* (:magnitude fq-bin) (sin (:phase fq-bin)))])
      chunk-bins))
   ffts))


(defn inverse-fft
  [ffts n]
  (let [transformer  (DoubleFFT_1D. (/ (count (first ffts)) 2))]
    (doall
     (map
      #(let [data (double-array (flatten %))]
         (-> transformer (.realForward data))
         (into [] data))
      ffts))))


(defn test-sin-phase-changes []
  (let [a (sample-sin 0 2 1/16000)]
    (-> (map s/hanning (s/chunk-data
                        (map (comp short (partial * 16383) second) a) 512 0.5))
        ((partial map #(s/audio-fft (double-array %) 256)))
        alter-phase-angles
        polar-to-rectangular
        (inverse-fft 512)
        (stitch-together-chunks 0.5)
        (save-wav-from-pcm "phase-changes.wav"))))


(type s/hanning)
















