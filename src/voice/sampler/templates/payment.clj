(ns voice.sampler.templates.payment
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
      [:h1 "Payment"]
      [:p "One model costs 50$ or enter Kickstarter Code"]
      [:form {:action "/charge" :method "POST"}
       [:script
        {:src "https://checkout.stripe.com/checkout.js"
         :class "stripe-button"
         :data-key "pk_test_6pRNASCoBOKtIshFeQd4XMUh"
         :data-image "/square-image.png"
         :data-name "Demo Site"
         :data-description "2 widgets ($20.00)"
         :data-amount "2000"}]]
      [:button {:class "stripe-button-el"}
       [:span
        {:style "display:block; min-height: 30px;"}
        "Enter Kickstarter Code"]]]]]))













