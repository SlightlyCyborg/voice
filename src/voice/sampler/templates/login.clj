(ns voice.sampler.templates.login
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
      [:form {:method "post" :action "login"}
       [:span "Username: "
        [:input {:name "username" :class "form-control"}]]
       [:span "Password: "
        [:input {:name "password" :class "form-control"}]]
       [:button {:type "submit"
                 :class "btn btn-primary"
                 :style "margin-top:10px"}
        "Log In"]]]]]))


















