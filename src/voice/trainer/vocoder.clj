(ns voice.trainer.vocoder
  (:require [voice.trainer.audio-data :as d]
            [voice.trainer.spectrogram :as s]
            [voice.trainer.trig :as trig]
            [voice.trainer.pipeline-analyzer :as a]
            [voice.trainer.vocoder-data :as v-d])
  (:import
   [org.nd4j.linalg.factory Nd4j]
   [org.nd4j.linalg.dataset DataSet ViewIterator]
   [org.nd4j.linalg.indexing NDArrayIndex]
   [org.deeplearning4j.datasets DataSets]
   [org.deeplearning4j.util ModelSerializer] 
   org.nd4j.linalg.ops.transforms.Transforms
   org.deeplearning4j.datasets.iterator.impl.MnistDataSetIterator
   org.deeplearning4j.nn.conf.NeuralNetConfiguration$Builder
   org.deeplearning4j.nn.api.OptimizationAlgorithm
   org.deeplearning4j.nn.conf.Updater
   org.deeplearning4j.nn.conf.layers.DenseLayer$Builder
   org.deeplearning4j.nn.weights.WeightInit
   org.deeplearning4j.nn.conf.layers.OutputLayer$Builder
   org.nd4j.linalg.lossfunctions.LossFunctions$LossFunction
   org.deeplearning4j.nn.multilayer.MultiLayerNetwork
   org.deeplearning4j.optimize.listeners.ScoreIterationListener
   org.deeplearning4j.ui.api.UIServer
   org.deeplearning4j.ui.storage.InMemoryStatsStorage
   org.deeplearning4j.ui.stats.StatsListener
   org.deeplearning4j.api.storage.listener.RoutingIterationListener
   org.deeplearning4j.optimize.api.TrainingListener
   org.deeplearning4j.eval.Evaluation))




(def numRows 28)
(def numColumns 28)
(def outputNum 10)
(def batchSize 128)
(def rndSeed 123) ;random seed for reproducibility
(def numEpochs 15)

(def audio-list ["vocoder.wav"])


(defn build-model [pipeline-data]
  (let [n-in (pipeline-data :n-in)
        n-out (pipeline-data :n-out)]
   (assoc
    pipeline-data
    :model
    (-> (NeuralNetConfiguration$Builder.)
        (.seed rndSeed)
        (.optimizationAlgo (OptimizationAlgorithm/STOCHASTIC_GRADIENT_DESCENT))
        (.iterations 1)
        (.learningRate 1e-5)
        (-> (.updater Updater/NESTEROVS) (.momentum 0.9))
        (-> (.regularization true) (.l2 1e-2))
        (.list)
        (.layer 0 (-> (DenseLayer$Builder.)
                      (.nIn n-in)
                      (.nOut 400)
                      (.activation "relu")
                      (.weightInit WeightInit/XAVIER)
                      (.build)))
        (.layer 1 (-> (DenseLayer$Builder.)
                      (.nIn 400)
                      (.nOut 200)
                      (.activation "relu")
                      (.weightInit WeightInit/XAVIER)
                      (.build)))

        (.layer 2 (-> (OutputLayer$Builder. (LossFunctions$LossFunction/MSE))
                      (.nIn 200)
                      (.nOut n-out)
                      (.activation "tanh")
                      (.weightInit WeightInit/XAVIER)
                      (.build)))
        (.pretrain false)
        (.backprop true)
        (.build)
        (MultiLayerNetwork.)))))

(defn init-model [pipeline-data]
  (.init (pipeline-data :model))
  pipeline-data)

(defn set-up-listeners [pipeline-data]
  (let [model (pipeline-data :model)
        ;uiserver (UIServer/getInstance)
        l (ScoreIterationListener.)]
    (.setListeners model [l]))
  pipeline-data)

(defn run-fit [pipeline-data]
   (.fit (pipeline-data :model)
         (ViewIterator.
          (pipeline-data :nd4j-dataset-train)
          50))
  pipeline-data)

(defn train []
  (-> audio-list
      v-d/load-dataset
      build-model
      init-model
      set-up-listeners
      run-fit
      run-fit
      run-fit
      run-fit))

(defn vector->nd4j-array
  [v & {:keys [length] :or {length nil}}]
  (if (nil? v)
    (if (= nil length)
      (throw (Exception. "Provide a length or a non-nil-vector"))
      (Nd4j/zeros length))
    (Nd4j/create (double-array v))))

(defn splice-into-nd4j-array
  "input: model MultiLayerNetwork, start int, new-section ND4j array, whole ND4j array "
  [start new-section whole]
  ;;Mutation
  (-> whole
      (.get (into-array [(NDArrayIndex/interval start (+ start (.length new-section)))]))
      (.assign new-section))
  ;;RV
  whole)

(def past-phase-index 256)

(defn nd-mod [n data]
  (.sub data
        (-> data
            (.div n)
            (Transforms/floor)
            (.mul n))))

(defn generative-forward-pass
  "Returns an nd4j array"
  [model generated-output next-nd4j-input]
  (nd-mod 1
   (.add (last generated-output)
         (.addi
          (.divi
           (.output model (splice-into-nd4j-array
                           past-phase-index
                           (last generated-output)
                           next-nd4j-input))
           2)
          0.5))))


(defn first-generative-forward-pass [model whole]
  (generative-forward-pass
   model
   [(vector->nd4j-array nil :length 256)]
   whole))


(defn forward-pass-reducer [model output-list next-nd4j-input]
  (if (= (count output-list) 0)
    [(first-generative-forward-pass model next-nd4j-input)]
    (conj output-list (generative-forward-pass model output-list next-nd4j-input))))

(defn generate-outputs [pipeline-data model]
  (assoc
   pipeline-data
   :outputs
   (reduce
    (partial forward-pass-reducer model)
    []
    (pipeline-data :nd4j-input-arrays))))

(defn intern-to-analyze [pipeline new-name]
  (intern 'voice.trainer.pipeline-analyzer new-name pipeline))


(defn reconstruct-file
  "This is a vocoder test/demo. It will load a file, get the FFT magnitudes, discard the phases, use the model to generate the phases, run an inverse fft on the chunks and then finally stitch together chunks to generate audio."
  [filenames model]
  (-> filenames
      v-d/load-dataset
      (generate-outputs model)
      v-d/reconstruct-phase-and-magnitudes
      v-d/reconstruct-fft-double-arrays
      ;(v-d/inverse-fft 512)
      ;v-d/reconstruct-audio-chunks
      ;v-d/dechunk
      ))


(defn train-&-save-test-model []
  (let [model (train)
        f (java.io.File. "resources/vocoder-test.model.zip")]
    (ModelSerializer/writeModel (model :model) f true)))











