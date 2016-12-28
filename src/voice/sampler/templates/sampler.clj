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
     :margin-bottom "15px"}]
   [:#control-buttons
    {:position :relative
     :left "-100px"
     :display :inline}]
   [:#arrow-buttons
    {:display :inline
     :position :relative
     :left "100px"}]
   [:.unpressable-button
    {:opacity "0.3"}]))

(def button-size 72)

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
      (progress-bar/render "samples-progress")
      [:div {:id :main-content}
       [:div {:id :instructions}]
       [:div {:id :script-box}
        [:span {:class :script} "Loading Script..."]]
       [:div {:id :control-buttons}
        [:img {:id :record-button :src "imgs/mic-not-recording.png"
               :height (str button-size " px") :width (str button-size " px")
               :class "unpressable-button"}]
        [:img {:id :play-button :src "imgs/play-button.png"
               :height (str button-size " px") :width (str button-size " px")
               :class "unpressable-button"}]]
       [:div {:id :arrow-buttons}
        [:img {:id :backward-button :src "imgs/arrow-left.png"
               :height (str button-size " px") :width  (str button-size " px")
               :class "unpressable-button"}]
        [:img {:id :forward-button :src "imgs/arrow-right.png"
               :height (str button-size " px") :width  (str button-size " px")
               :class "unpressable-button"}]]]]
     js/jquery
     js/bootstrap
     js/recorder
     js/cljs]]))
















