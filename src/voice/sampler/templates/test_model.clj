(ns voice.sampler.templates.test-model
  (:use hiccup.core)
  (:require [voice.sampler.templates.js :as js]
            [voice.sampler.templates.css :as css]))


(defn render [req]
  (html
   [:html
    [:head
     css/bootstrap
     css/global]
    [:body
     [:div {:id "centered"}
      [:h1 "Log In"]
      [:form
       [:span "Text to speak: "
        [:textarea {:name "text" :class "form-control"}]]
       [:button {:type "submit"
                 :class "btn btn-primary"
                 :style "margin-top:10px"}
        "Speak"]]]]]))


















