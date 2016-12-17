(ns voice.sampler.templates.js
  (:use hiccup.core)
  (:require [garden.core :refer [css]]))

(def jquery
 [:script {:src "https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"}])

(def bootstrap
  [:script {:src "bootstrap/js/bootstrap.min.js"}])
