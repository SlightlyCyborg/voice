(ns voice.sampler
  (:use [jayq.core :only [$ css html ajax]])
  (:require [jayq.core :as jq]
            [ajax.core :refer [GET POST]]))

(def script nil)

(def sampler-state (atom {:cur-script-index 0 :script nil}))

;;Script functions------------------

(defn request-script [id]
  (ajax "sample-script"
         {:data {:id id}
          :method "GET"
          :dataType "json"
          :error #(.log js/console "an error occured")}))

(defn change-script-box [script-segment]
  (-> ($ :#script-box)
      (jq/find :span)
      (jq/empty)
      (jq/append script-segment)))

;Samples functions------------------

(defn update-total-samples [tot]
  (-> ($ :#samples-progress)
      (jq/find :.denomenator)
      (jq/html (str tot)))
  (-> ($ :#samples-progress)
      (jq/find :.progress-bar)
      (jq/attr :aria-valuemax tot)))

(defn update-cur-samples [cur]
  (let [numerator (-> ($ :#samples-progress)
                      (jq/find :.numerator))

        progress-bar (-> ($ :#samples-progress)
                         (jq/find :.progress-bar))

        cur-denom (jq/attr progress-bar :aria-valuemax)]
   
       (jq/html numerator (str cur))
       (jq/attr progress-bar :aria-valuenow cur)
       (jq/attr progress-bar :style (str "width:"
                            (* 100 (/ cur cur-denom))
                            "%;"))))


;Handle functions------------------

(defn handle-spacebar [ev]
  (let [next-index (+ 1 (@sampler-state :cur-script-index))
        script (@sampler-state :script)]
   (if (< next-index (count script))
     (do (change-script-box (nth script next-index))
         (update-cur-samples next-index)
         (swap! sampler-state assoc :cur-script-index next-index)))))


(defn gen-multi-keypress-handler [key-fn-map]
  #(doall
    (map
     (fn [v]
       (if (= (first v) 
              (.-charCode %))
         ((second v))))
     key-fn-map)))

(defn turn-on-keypress-handler
  "Takes an argument of a map that contains the charCode & functions to execute when keys are pressed"
  [key-fn-map]
  (jq/on ($ :html)
         :keypress
         (gen-multi-keypress-handler
          key-fn-map)))

(defn turn-off-keypress-handler []
  (jq/off ($ :html) :keypress))

(defn reset-keypress-handler [key-fn-map]
  (let [script (@sampler-state :script)]
   (turn-off-keypress-handler)
   (turn-on-keypress-handler key-fn-map)))

;;init functions------------------

(defn begin-sampling []
  (let [s (@sampler-state :script)]
    (change-script-box (first s))
    (swap! sampler-state assoc :cur-script-index 0)
    (reset-keypress-handler {32 handle-spacebar})
    (update-total-samples (count s))
    (update-cur-samples 0)))

(defn initfn []
  (jq/done
   (request-script 1)

   ;; do this fn once script has been recieved
   (fn [script]
     (swap! sampler-state assoc :script script)
     (change-script-box "Press Spacebar to Begin!")
     (turn-on-keypress-handler {32 begin-sampling}))))

(initfn)

(.log js/console "cljs loaded")


