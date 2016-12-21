(ns voice.sampler.templates.progress-bar
  (:use hiccup.core)
  (:require [garden.core :refer [css]]))

(defn render [obj-id]
 [:div {:id obj-id}
  [:span {:class "numerator"} "0"]
  "/"
  [:span {:class "denomenator"} "0"] 
  " samples taken"
  [:div {:class "progress active"}
   [:div {:class "progress-bar"
          :role "progressbar"
          :aria-valuenow 0 
          :aria-valuemin 0
          :aria-valuemax 0 
          :style  "width:0%;"}]]])




















