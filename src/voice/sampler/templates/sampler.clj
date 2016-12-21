(ns voice.sampler.templates.sampler
  (:use hiccup.core)
  (:require [garden.core :refer [css]]
            [voice.sampler.templates.js :as js]
            [voice.sampler.templates.progress-bar :as progress-bar]
            [voice.sampler.templates.css :as css]))

(def page-css
  (css
   [:#script-box
    {:border "2px solid #73AD21"
     :border-radius "15px"
     :padding "12px"
     :margin-bottom "15px"}]))

(defn render [req data]
  (html
   [:html
    css/bootstrap
    css/global
    [:style page-css]
    [:head]
    [:body
     [:div {:id "centered"}
      [:h1 "Voice Sampler"]
      [:div {:id :main-content}
       [:div {:id :instructions}]
       [:div {:id :script-box}
        [:span "Loading Script..."]]
       (progress-bar/render "samples-progress")]]
     js/jquery
     js/bootstrap
     js/cljs]]))
















