(ns voice.trainer.parse-ipa-chart
  (:require [clj-http.client :as client]
            [hickory.select :as s]
            [clojure.string :as string])
  (:use hickory.core
        [clojure.java.shell :only [sh]]))

(defn bash [text & [dir]]
  (print (:out (sh "bash" "-c" text :dir dir))))

(def root-url "http://www.ipachart.com/")
(def mp3-url (str root-url "mp3/"))
(def ipa-chart-tree (-> (client/get root-url)
                        :body
                        parse
                        as-hickory))

(defn write-to-file [content path]
  (try
    (with-open [w (java.io.FileOutputStream. path)]
      (.write w content))
    true
    (catch Exception e false)))



(defn filter-onclick [onclick]
  (second (re-find #"\'(.*)\'" onclick)))

(defn get-vowels []
 (->> (s/select
       (s/descendant
        (s/class :vowels)
        (s/class :v)
        (s/class :interactive))
       ipa-chart-tree)
      (map
       (fn [span]
         {:filename (str (-> span (get-in  [:attrs :onclick]) filter-onclick) ".mp3")
          :ipa-symbol (span :content)}))))

(defn download-files [dl-prefix url-prefix sound-structs]
  (doall
   (map
    #(sh "wget" (str url-prefix (% :filename)) :dir dl-prefix)
    sound-structs)))

(defn write-index-file [dl-prefix file-name sound-structs]
    (spit (str dl-prefix file-name) (pr-str sound-structs)))




;(def vowels (get-vowels))
;(def mp3s (download-files "resources/ipa-samples/" mp3-url vowels))

















