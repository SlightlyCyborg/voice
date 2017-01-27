(ns voice.trainer.diagnostics)


(def wavenet {:sample-rate 16000})


(defn print-wavenet []
  (println "sample-rate: " (wavenet :sample-rate))
  (println "forward-passes-per-s: " (* 1 (wavenet :sample-rate))))

(def collin-net {:sample-rate 16000
                 :chunk-size-in-ms  20})

(defn print-collin-net []
  (println "sample-rate: " (wavenet :sample-rate))
  (println "forward-passes-per-s: " (/ 1000 20))
  (println "an unsolved question: how would I use a previouse prediction to compute a current predition of phase angle?"))
