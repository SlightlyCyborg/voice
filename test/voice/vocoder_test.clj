(ns voice.vocoder-test
  (:require [voice.trainer.vocoder :as v]
            [voice.trainer.vocoder-data :as v-d]
            [clojure.data.json :as json]
            [clojure.spec :as s])
  (:use clojure.test)
  (:import [org.deeplearning4j.util ModelSerializer]
           [org.nd4j.linalg.factory Nd4j]
           [org.nd4j.linalg.indexing NDArrayIndex INDArrayIndex]))

(def test-model-filename "resources/vocoder-test.model.zip")

(def model (ModelSerializer/restoreMultiLayerNetwork (java.io.File. test-model-filename) true))


(deftest t-gen-nd-array
  (let [nd-array (v/vector->nd4j-array [1 2 3 4])
        nd-array-empty (v/vector->nd4j-array nil :length 4)]
    (is (= (.length nd-array) 4))
    (is (= (.length nd-array-empty) 4))))

(def test-input-data
  (Nd4j/create (double-array (json/read-str (slurp "resources/vocoder-test-input.json")))))

(deftest t-splice-into-nd4j-array
  (let [input-data (.dup test-input-data)
        data-to-splice (Nd4j/create (double-array (take 256 (repeatedly #(* (- (rand) 1/2) 2)))))
        a    (v/splice-into-nd4j-array 256 data-to-splice input-data)]
    (is (= 768 (.length a)))
    ;;Ensure that the equality works
    (is (not (= (.get a (into-array [(NDArrayIndex/point 257)]))
                (.get test-input-data (into-array [(NDArrayIndex/point 257)])))))))

(deftest vector->nd4j-array
  (is (= 1.0 (.getDouble (v/vector->nd4j-array [1 2 3 4]) 0)))
  (is (= 0.0 (.getDouble (v/vector->nd4j-array nil :length 4) 1)))
  (is (= 4 (.length (v/vector->nd4j-array nil :length 4))))
  (is (thrown? Exception (v/vector->nd4j-array nil))))


(def phase-data
  (.get test-input-data
        (into-array [(NDArrayIndex/interval 256 512)])))

(deftest generative-forward-pass
  (let [in1 (.dup test-input-data)
        output1 (v/generative-forward-pass
                 model
                 [phase-data] test-input-data)
        in2 (.dup test-input-data)
        output2 (v/generative-forward-pass
                 model
                 [(Nd4j/create (double-array (take 256 (repeatedly #(* (- (rand) 1/2) 2)))))]
                 test-input-data)]
    (is (= 256 (.length output1)))
    (is (not (and (= (.getDouble output1 0)
                     (.getDouble output2 0))
                  (= (.getDouble output1 5)
                     (.getDouble output2 5)))))))


(deftest forward-pass-reducer
  (let [in1 (.dup test-input-data)
        output1 (v/forward-pass-reducer model [] in1)
        in2 (.dup test-input-data)
        output2 (v/forward-pass-reducer model output1 in2)]

    (is (= 1 (count output1)))
    (is (= 2 (count output2)))))


(deftest assoc-in-forward-pass-results
  (let [data-set (-> v/audio-list v-d/load-dataset)
        rv (v/generate-outputs data-set model)]

    (is (= (count (rv :outputs))
           (count (data-set :nd4j-input-arrays))))))




(deftest nd-mod
  (let [test (v/nd-mod 1
              (Nd4j/create (double-array [0 0.5 1 1.5 2 2.245])))]
    (is (<= (.getDouble (.max test (int-array 0)) 0) 1.0))))



















