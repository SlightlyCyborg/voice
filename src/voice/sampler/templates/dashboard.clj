(ns voice.sampler.templates.dashboard
  (:use hiccup.core)
  (:require [garden.core :refer [css]]
            [voice.sampler.templates.js :as js]
            [voice.sampler.templates.progress-bar :as progress-bar]
            [voice.sampler.templates.css :as css]))




(defn render [req data]
  (html
   [:html
    [:head
     css/bootstrap
     css/global]
    [:body
     [:div {:id "centered"}
      [:h1 "Welcome to your voice dashboard"]
      [:div {:id "main-content"}
       (progress-bar/render
        (data :samples-completed) (data :samples-total))
       [:div {:id "menu"}
        [:a {:href "sampler" :class "btn btn-info" :role "button"} "Start Next Sample"]
        [:br]
        [:a {:href "test-model" :class "btn btn-info" :role "button"} "Test Model"]]]]
     js/jquery
     js/bootstrap]]))




















