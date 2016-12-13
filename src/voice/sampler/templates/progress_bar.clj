(ns voice.sampler.templates.progress-bar
  (:use hiccup.core)
  (:require [garden.core :refer [css]]))

(defn render [n tot]
 [:div {:id "progress-stuff"}
  [:span
   (str n
        "/"
        tot 
        " samples taken")]
  [:div {:class "progress active"}
   [:div {:class "progress-bar"
          :role "progressbar"
          :aria-valuenow n 
          :aria-valuemin 0
          :aria-valuemax tot 
          :style (str
                  "width:"
                  (* 100 (/ n tot))
                  "%;")}]]])




















