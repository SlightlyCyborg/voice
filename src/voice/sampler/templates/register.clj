(ns voice.sampler.templates.register
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
      [:h1 "Register User"]
      [:form
       [:span "Username: "
        [:input {:name "username" :class "form-control"}]]
       [:span "Password: "
        [:input {:name "password" :class "form-control"}]]
       [:span "Email: "
        [:input {:name "email" :class "form-control"}]]
       [:button {:type "submit"
                 :class "btn btn-primary"
                 :style "margin-top:10px"}
        "Register"]]]]]))











