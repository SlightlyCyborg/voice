(ns voice.sampler.script
  (:require [clojure.string :as str]
            [clojure.data.json :as json]
            [opennlp.nlp :refer [make-sentence-detector]]))

(def hhgttg (str/replace (slurp "resources/scripts/hhgttg.txt") #"\n" " "))

(def get-sentences (make-sentence-detector "resources/en-sent.bin"))

(def sentences (get-sentences hhgttg))

(def scripts (vec (partition 20 sentences)))

(defn http-get [req]
  {:status 200
   :headers {"Content-Type" "text/json"}
   :body (json/write-str (get scripts
                          (-> req
                              (:params)
                              (:id)
                              (Integer/parseInt))
                          ;default value if script id doesn't exist
                          {:error :id-not-valid}))})




















