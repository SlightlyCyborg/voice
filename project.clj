(defproject voice "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :plugins [[lein-cljsbuild "1.1.5"]
            [lein-figwheel "0.5.8"]]
  :dependencies [[org.clojure/clojure "1.8.0"]

                 ;browser repl
                 [org.clojure/clojurescript "1.9.293"]
                 [lein-figwheel "0.5.8"]
                 [figwheel-sidecar "0.5.8"]

                 ;explicitly get the right version
                 [instaparse "1.4.0"]

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

                 ;;for the sampler client
                 [jayq "2.5.4"]
                 [cljs-ajax "0.5.8"]
                 

                 ;for the database
                 [korma "0.4.3"]
                 [org.postgresql/postgresql "9.4.1212"]


                 [org.clojure/data.json "0.2.6"]]
  :profiles {:dev {:dependencies [[alembic "0.3.2"]
                                  [org.clojure/tools.nrepl "0.2.10"]
                                  [com.cemerick/piggieback "0.2.1"]]}}
  :repl-options {:nrepl-middleware [cemerick.piggieback/wrap-cljs-repl]}

  :cljsbuild {
              :builds [{
                        :source-paths ["src/cljs/"]
                        :id "dev"
                        :figwheel {:websocket-host "192.168.254.33"}
                        :compiler {
                                   :main "voice.sampler"
                                   :asset-path "js/out"
                                   :output-to "resources/public/js/main.js"
                                   :output-dir "resources/public/js/out"}}]})



















