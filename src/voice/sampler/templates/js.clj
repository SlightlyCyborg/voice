(ns voice.sampler.templates.js
  (:use hiccup.core)
  (:require [garden.core :refer [css]]))

(def jquery
 [:script {:src "js/jquery-3.1.1.js"}])

(def bootstrap
  [:script {:src "bootstrap/js/bootstrap.min.js"}])

(def cljs
  [:script {:src "js/main.js" :type "text/javascript"}])

(def goog
  [:script {:src "js/out/goog/base.js"}])

(def recorder
  [:script {:src "js/libs/recorder.js"}])




















