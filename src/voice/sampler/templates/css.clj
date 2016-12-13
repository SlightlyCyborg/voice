(ns voice.sampler.templates.css
  (:require [garden.core :refer [css]]))



(def bootstrap
  [:link {:rel :stylesheet :href "bootstrap/css/bootstrap.css"}])

(def global
  [:style
   (css
    [:#centered
     {:width :50%
      :margin "0 auto"
      :text-align :center}]
    [:#main-content
     {:width :100%
      :margin "0 auto"}]
    [:#menu
     [:a 
      {:width :50%
       :margin "0 auto"
       :display :block}]])])



