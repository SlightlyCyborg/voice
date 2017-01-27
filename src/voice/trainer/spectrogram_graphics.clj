;;;; Spectrogram-graphics
;;;; by slightlycyborg
;;;;
;;;; Will plot spectrogram data that is scaled to window size

(ns voice.trainer.spectrogram-graphics
  (:require [quil.core :as q]
            [quil.middleware :as m]))


(def size [1000 600])

(defn gen-fake-data [length bins]
  (into []
        (map
         (fn [time-slice]
           (into [] (map (fn [bin] (/ time-slice  length ))) (range bins))))
         (range length)))

;;;; START HEAT MAP ------------------------------
;;;;
;;;;

(defn blue-thru-cyan [data-point]
  [0 (int (* 4 255 data-point)) 255])

(defn cyan-thru-green [data-point]
  [0 255 (int (- 255 (* 4 255 (- data-point 1/4))))])

(defn green-thru-yellow [data-point]
  [(int (* 4 255 (- data-point 2/4))) 255 0])

(defn yellow-thru-red [data-point]
  [255 (int (- 255 (* 4 255 (- data-point 3/4)))) 0])

(defn select-color-range [data-point]
  (cond 
    (<= data-point 1/4) (blue-thru-cyan    data-point)
    (<= data-point 2/4) (cyan-thru-green   data-point)
    (<= data-point 3/4) (green-thru-yellow data-point)
    (<= data-point 4/4) (yellow-thru-red   data-point)
    :else [0 0 0]))

(defn data->heat [data]
  (mapv #(mapv select-color-range %) data))

;;;;
;;;;
;;;; STOP HEAT MAP -------------------------------


;;;; START DATA-GRAPHICS MAPPING -----------------

(defn invert-y [y size]
  (- (second size) y 1))

(defn gen-scaling-factor [display-size data-size]
  (map
   #(/ %1 %2)
   data-size
   display-size))

(def maxy 0)

(defn apply-scaling-factor [x y scaling-factor]
  [(int (* x (first scaling-factor)))
   (int (* y (second scaling-factor)))])

(defn pixel-ind->data-ind [x y display-size data-size]
  ;;First invert because graphics stupidly uses quadrant 4
  (let [y (invert-y y display-size)]
   ;;Scale, to move pixel domain into data domain
    (let
        [ind
         (apply-scaling-factor
          x y 
          (gen-scaling-factor display-size data-size))]
      (if (> (second ind) maxy) (def maxy (second ind)))
      ind)))

(defn data-size [data]
  [(count data) (count (first data))])

(defn pixel-ind->data-point [data pixel-x pixel-y]
  (get-in
   data
   (pixel-ind->data-ind
    pixel-x pixel-y size (data-size data))))

;;;; STOP  DATA-GRAPHICS MAPPING -----------------


;;;: START DRAWING -------------------------------
(def broken-pixels (atom #{}))

(defn set-pixel [pixel-x pixel-y data]
  (let [pixel (pixel-ind->data-point data pixel-x pixel-y)]
    (if (not (nil? pixel))
      (q/set-pixel
       pixel-x pixel-y 
       (apply q/color pixel))
      (swap! broken-pixels conj {:coors [pixel-x pixel-y]
                                 :data-coors
                                 (pixel-ind->data-ind pixel-x pixel-y size (data-size data))}))))

(defn draw [data]
  (let [data (data->heat (:data data))]
    (doseq [pixel-x (range (first size)) pixel-y (range (second size))]
      (set-pixel pixel-x pixel-y data))))

;;;: STOP  DRAWING -------------------------------

(defn clean-data [data]
  (mapv #(mapv (fn [d] d) %) data))


;;;; START ENTRY-POINT----------------------------

(defn draw-spectrogram
  [data]

  (defn setup []
    (q/frame-rate 0.1)
    {:data (clean-data data)})

 (q/defsketch example ;; Define a new sketch named example
   :title "Spectrogram" ;; Set the title of the sketch
   :settings #(q/smooth 2)          ;; Turn on anti-aliasing
   :setup setup                     ;; Specify the setup fn
   :draw draw                       ;; Specify the draw fn
   :size size                       ;; I struggle to beat the golden ratio
   :middleware [m/fun-mode]
   :features [:no-safe-fns])

  (defn stop []
    (.stop example)
    (ns-unmap *ns* 'example)
    (System/gc))

  (defn restart []
    (stop) 
    (draw-spectrogram data)))


;;;; STOP  ENTRY-POINT----------------------------
















