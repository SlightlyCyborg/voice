(defproject voice "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.8.0"]

                 ;for the trainer
                 [org.deeplearning4j/deeplearning4j-core "0.7.1"]
                 [org.deeplearning4j/deeplearning4j-ui_2.10 "0.7.1"]
                 ;[org.nd4j/nd4j-cuda-7.5 "0.7.1"] ;for cuda
                 [org.nd4j/nd4j-native "0.7.1"]

                 ;for the sampler
                 [clojure-opennlp "0.3.3"]
                 [compojure "1.5.1"]
                 [hiccup "1.0.5"]
                 [http-kit "2.2.0"]
                 [garden "1.3.2"]
                 [org.clojure/data.json "0.2.6"]]
  :profiles {:dev {:dependencies [[alembic "0.3.2"]]}})
