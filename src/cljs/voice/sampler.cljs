(ns voice.sampler
  (:use [jayq.core :only [$ css html ajax]])
  (:require [jayq.core :as jq]
            [ajax.core :refer [GET POST]]))

(def script nil)
(def script-id 1)
(def debug false)


(def sampler-state (atom {:cur-script-index 0 :script nil :audio-blobs {}}))


;;Utility functions-----------------
(defn util-sleep [ms resolve]
     (js/setTimeout resolve ms))

;;Script functions------------------

(defn request-script [id]
  (ajax "sample-script"
         {:data {:id id}
          :method "GET"
          :dataType "json"
          :error #(.log js/console "an error occured")}))

(defn change-script-box [script-segment]
  (-> ($ :#script-box)
      (jq/find :.script)
      (jq/empty)
      (jq/append script-segment)))

;Samples functions------------------

(defn update-total-samples [tot]
  (-> ($ :#samples-progress)
      (jq/find :.denomenator)
      (jq/html (str tot)))
  (-> ($ :#samples-progress)
      (jq/find :.progress-bar)
      (jq/attr :aria-valuemax tot)))

(defn update-cur-samples [cur]
  (let [numerator (-> ($ :#samples-progress)
                      (jq/find :.numerator))

        progress-bar (-> ($ :#samples-progress)
                         (jq/find :.progress-bar))

        cur-denom (jq/attr progress-bar :aria-valuemax)]
   
       (jq/html numerator (str cur))
       (jq/attr progress-bar :aria-valuenow cur)
       (jq/attr progress-bar :style (str "width:"
                            (* 100 (/ cur cur-denom))
                            "%;"))))


;Handle functions------------------

(defn gen-multi-keypress-handler [key-fn-map]
  #(doall
    (map
     (fn [v]
       (if (= (first v) 
              (.-charCode %))
         ((second v))))
     key-fn-map)))

(defn turn-on-keypress-handler
  "Takes an argument of a map that contains the charCode & functions to execute when keys are pressed"
  [key-fn-map]
  (jq/on ($ :html)
         :keypress
         (gen-multi-keypress-handler
          key-fn-map)))

(defn turn-off-keypress-handler []
  (jq/off ($ :html) :keypress))

(defn reset-keypress-handler [key-fn-map]
  (let [script (@sampler-state :script)]
   (turn-off-keypress-handler)
   (turn-on-keypress-handler key-fn-map)))


(defn turn-on-button-handler [elem handler]
  (jq/on ($ elem) :click handler))

(defn reset-button-handler [elem handler]
  (jq/off ($ elem) :click)
  (turn-on-button-handler elem handler))


;;button fns & handlers-----------
(defn activate-button [elem]
  (-> ($ elem)
      (jq/remove-class "unpressable-button")
      (jq/add-class "activated")))

(defn deactivate-button [elem]
  (-> ($ elem)
      (jq/add-class "unpressable-button")
      (jq/remove-class "activated")))

(defn button-active? [elem]
  (-> ($ elem)
      (jq/has-class "activated")))


;;voice recording functions-----


(defn save-recorder [audio-context]
  (fn [media-stream]
    (.log js/console (type audio-context))
    (swap!
     sampler-state assoc :recorder
     (js/Recorder. (.createMediaStreamSource (audio-context.) media-stream)))))

(defn recorder-init []
  (let [audio-context (or (.-AudioContext js/window) (.-webkitAudioContext js/window))]
   (-> (.-mediaDevices js/navigator)
       (.getUserMedia #js {:audio true})
       (.then
        (save-recorder audio-context)
        (fn [rejected] (print "rejected")))
       (.catch (fn [err] (print err))))))

(defn send-audio-blob-to-server [blob index]
  (println "sending data to server")
  (let [data (js/FormData.)]
    (.append data "blob-data" blob)
    (.append data "blob-index" index)
    (.append data "sample-id" script-id)
    (ajax 
     {:url "/sampler"
      :data data
      :contentType false
      :processData false
      :method "POST"
      :success #(do
                  (.log js/console "audio has been successfully saved to server")
                  ;; Mark the successful save in the blob cache
                  (swap! sampler-state assoc-in [:audio-blobs index :status] :saved))
      :error #(.log js/console "an error occured")})))

(defn play-audio-blob [blob]
  ;blobURL = window.URL.createObjectURL (blob
  ;(send-audio-blob-to-server blob)
  (print (.-size blob))
  (let [blob-url (-> js/URL (.createObjectURL blob))]
    (print blob-url)
    (let [a (js/Audio. blob-url)]
      (.load a)
      (.play a))))


(defn handle-audio-blob [blob]
  (let [cur-index (@sampler-state :cur-script-index)]
   (swap! sampler-state assoc-in [:audio-blobs cur-index] {:blob blob :status :not-saved}))
  (activate-button :#play-button))


(defn get-blob-promise [recorder]
  (print "getting promise")
  (js/Promise.
   (fn [resolve reject]
     (.exportWAV recorder
                 #(resolve %)))))

;;specific handlers--------------

(defn handle-play [ev]
  (let [cur-index (@sampler-state :cur-script-index)]
   (if (jq/has-class ($ :#play-button) :activated)
     (do
       (play-audio-blob (get-in @sampler-state [:audio-blobs cur-index :blob]))))))

(defn handle-movement
  "A handler that gets called every time a script movement takes place"
  []
  (let [cur-index (@sampler-state :cur-script-index)
        cur-blob (get-in @sampler-state [:audio-blobs cur-index :blob])
        cur-blob-status (get-in @sampler-state [:audio-blobs cur-index :status])]

    ;; Check to see that audio has been recorded & check to see that the current blob hasn't been already saved
    (if (and (not (nil? cur-blob)) (= cur-blob-status :not-saved))
      (do
        (send-audio-blob-to-server cur-blob cur-index)))))

(defn handle-last-sample [next-index]
  (change-script-box "You have finished this sampling session. <a href=\"/\">Click Here for Dashboard</a>")
  (update-cur-samples next-index)
  (deactivate-button :#record-button)
  (deactivate-button :#forward-button)
  (deactivate-button :#backward-button))

(defn handle-forward [ev]
  (let [next-index (+ 1 (@sampler-state :cur-script-index))
        script (@sampler-state :script)
        next-audio-blob (get-in @sampler-state [:audio-blobs next-index :blob])]

    ;;Do things only if the button is active
    (if (button-active? :#forward-button)
     (do 
       (handle-movement)
       ;; Handle switch to next sample & send the recorded sample
       (if (< next-index (count script))
         (do (change-script-box (nth script next-index))
             (update-cur-samples next-index)
             (swap! sampler-state assoc :cur-script-index next-index)
             (activate-button :#record-button)
             (activate-button :#backward-button)
             (deactivate-button :#forward-button))
         ;;Handle last sample. Update the script box with "You have finished".
         (if (= next-index (count script))
           (handle-last-sample next-index)))
       (if (not (nil? next-audio-blob))
         (do
           (activate-button :#play-button)
           (activate-button :#forward-button))
         (deactivate-button :#play-button))))))

(defn handle-backward [ev]
  (let [previous-index (- (@sampler-state :cur-script-index) 1)
        script (@sampler-state :script)
        prev-audio-blob (get-in @sampler-state [:audio-blobs previous-index :blob])]
    ;;Do things only if button is activated
    (if (button-active? :#backward-button)
     (do
       (handle-movement)
       (if (>= previous-index 0)
         (do (change-script-box (nth script previous-index))
             (update-cur-samples previous-index)
             (swap! sampler-state assoc :cur-script-index previous-index)
             ;;If we are going to the begining, make sure we can't go 'before the begining'
             (if (= previous-index 0)
               (deactivate-button :#backward-button))))

       (if (not (nil? prev-audio-blob))
         (do
           (activate-button :#play-button)
           (activate-button :#forward-button))
         (deactivate-button :#play-button))))
    (activate-button :#record-button)))

(defn handle-record [ev]
  (-> ($ :#record-button)
      (jq/attr :src "imgs/mic-recording.png"))
  (let [recorder (@sampler-state :recorder)]
    (if (not (nil? recorder))
      (do (.clear recorder)
          (.record recorder)))))

(defn handle-stop-recording [ev]
  (print "stopping-recording")
  (-> ($ :#record-button)
      (jq/attr :src "imgs/mic-not-recording.png"))

  ;;sleep for latency
  (util-sleep
   300
   (fn []
     (let [recorder (@sampler-state :recorder)]
       (if (not (nil? recorder))
         (do
           (.stop recorder)
           (-> recorder
               (get-blob-promise)
               (.then #(handle-audio-blob %))
               (.then #(activate-button :#forward-button)))))))))


;;init functions------------------

(defn init-button-handlers []
  (jq/on ($ :#record-button) :mousedown handle-record)
  (jq/on ($ :#record-button) :mouseup handle-stop-recording)
  (jq/on ($ :#play-button) :click handle-play))

(defn begin-sampling []
  (let [s (@sampler-state :script)]
    (change-script-box (first s))
    (swap! sampler-state assoc :cur-script-index 0)
    (reset-keypress-handler {32 handle-forward})
    (activate-button :#record-button)
    (deactivate-button :#forward-button)
    (reset-button-handler :#forward-button handle-forward)
    (reset-button-handler :#backward-button handle-backward)
    (recorder-init)
    (init-button-handlers)
    (update-total-samples (count s))
    (update-cur-samples 0)))

(defn initfn []
  (jq/done
   (request-script script-id)

   ;; do this fn once script has been recieved
   (fn [script]
     (swap! sampler-state assoc :script script)
     (change-script-box "Press forward button to begin!")
     (turn-on-keypress-handler {32 begin-sampling})
     (turn-on-button-handler :#forward-button begin-sampling)
     (jq/remove-class ($ :#forward-button) "unpressable-button"))))

(initfn)



