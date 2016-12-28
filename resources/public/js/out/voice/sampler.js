// Compiled by ClojureScript 1.9.293 {}
goog.provide('voice.sampler');
goog.require('cljs.core');
goog.require('jayq.core');
goog.require('ajax.core');
voice.sampler.script = null;
voice.sampler.sampler_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cur-script-index","cur-script-index",434373398),(0),new cljs.core.Keyword(null,"script","script",-1304443801),null], null));
voice.sampler.request_script = (function voice$sampler$request_script(id){
return jayq.core.ajax.call(null,"sample-script",new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),id], null),new cljs.core.Keyword(null,"method","method",55703592),"GET",new cljs.core.Keyword(null,"dataType","dataType",1069893619),"json",new cljs.core.Keyword(null,"error","error",-978969032),(function (){
return console.log("an error occured");
})], null));
});
voice.sampler.change_script_box = (function voice$sampler$change_script_box(script_segment){
return jayq.core.append.call(null,jayq.core.empty.call(null,jayq.core.find.call(null,jayq.core.$.call(null,new cljs.core.Keyword(null,"#script-box","#script-box",1934243072)),new cljs.core.Keyword(null,".script",".script",-1831194787))),script_segment);
});
voice.sampler.update_total_samples = (function voice$sampler$update_total_samples(tot){
jayq.core.html.call(null,jayq.core.find.call(null,jayq.core.$.call(null,new cljs.core.Keyword(null,"#samples-progress","#samples-progress",831980063)),new cljs.core.Keyword(null,".denomenator",".denomenator",554296977)),[cljs.core.str(tot)].join(''));

return jayq.core.attr.call(null,jayq.core.find.call(null,jayq.core.$.call(null,new cljs.core.Keyword(null,"#samples-progress","#samples-progress",831980063)),new cljs.core.Keyword(null,".progress-bar",".progress-bar",-701697842)),new cljs.core.Keyword(null,"aria-valuemax","aria-valuemax",-1167670164),tot);
});
voice.sampler.update_cur_samples = (function voice$sampler$update_cur_samples(cur){
var numerator = jayq.core.find.call(null,jayq.core.$.call(null,new cljs.core.Keyword(null,"#samples-progress","#samples-progress",831980063)),new cljs.core.Keyword(null,".numerator",".numerator",-81091889));
var progress_bar = jayq.core.find.call(null,jayq.core.$.call(null,new cljs.core.Keyword(null,"#samples-progress","#samples-progress",831980063)),new cljs.core.Keyword(null,".progress-bar",".progress-bar",-701697842));
var cur_denom = jayq.core.attr.call(null,progress_bar,new cljs.core.Keyword(null,"aria-valuemax","aria-valuemax",-1167670164));
jayq.core.html.call(null,numerator,[cljs.core.str(cur)].join(''));

jayq.core.attr.call(null,progress_bar,new cljs.core.Keyword(null,"aria-valuenow","aria-valuenow",-773142658),cur);

return jayq.core.attr.call(null,progress_bar,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("width:"),cljs.core.str(((100) * (cur / cur_denom))),cljs.core.str("%;")].join(''));
});
voice.sampler.gen_multi_keypress_handler = (function voice$sampler$gen_multi_keypress_handler(key_fn_map){
return (function (p1__75374_SHARP_){
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (v){
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,v),p1__75374_SHARP_.charCode)){
return cljs.core.second.call(null,v).call(null);
} else {
return null;
}
}),key_fn_map));
});
});
/**
 * Takes an argument of a map that contains the charCode & functions to execute when keys are pressed
 */
voice.sampler.turn_on_keypress_handler = (function voice$sampler$turn_on_keypress_handler(key_fn_map){
return jayq.core.on.call(null,jayq.core.$.call(null,new cljs.core.Keyword(null,"html","html",-998796897)),new cljs.core.Keyword(null,"keypress","keypress",1625181642),voice.sampler.gen_multi_keypress_handler.call(null,key_fn_map));
});
voice.sampler.turn_off_keypress_handler = (function voice$sampler$turn_off_keypress_handler(){
return jayq.core.off.call(null,jayq.core.$.call(null,new cljs.core.Keyword(null,"html","html",-998796897)),new cljs.core.Keyword(null,"keypress","keypress",1625181642));
});
voice.sampler.reset_keypress_handler = (function voice$sampler$reset_keypress_handler(key_fn_map){
var script = cljs.core.deref.call(null,voice.sampler.sampler_state).call(null,new cljs.core.Keyword(null,"script","script",-1304443801));
voice.sampler.turn_off_keypress_handler.call(null);

return voice.sampler.turn_on_keypress_handler.call(null,key_fn_map);
});
voice.sampler.turn_on_button_handler = (function voice$sampler$turn_on_button_handler(elem,handler){
return jayq.core.on.call(null,jayq.core.$.call(null,elem),new cljs.core.Keyword(null,"click","click",1912301393),handler);
});
voice.sampler.reset_button_handler = (function voice$sampler$reset_button_handler(elem,handler){
jayq.core.off.call(null,jayq.core.$.call(null,elem),new cljs.core.Keyword(null,"click","click",1912301393));

return voice.sampler.turn_on_button_handler.call(null,elem,handler);
});
voice.sampler.recorder_init = (function voice$sampler$recorder_init(){
var audio_context = (function (){var or__17415__auto__ = window.AudioContext;
if(cljs.core.truth_(or__17415__auto__)){
return or__17415__auto__;
} else {
return window.webkitAudioContext;
}
})();
return navigator.mediaDevices.getUserMedia(({"audio": true})).then(((function (audio_context){
return (function (p1__75375_SHARP_){
console.log(cljs.core.type.call(null,audio_context));

return cljs.core.swap_BANG_.call(null,voice.sampler.sampler_state,cljs.core.assoc,new cljs.core.Keyword(null,"recorder","recorder",263166645),(new Recorder((new audio_context()).createMediaStreamSource(p1__75375_SHARP_))));
});})(audio_context))
);
});
voice.sampler.activate_button = (function voice$sampler$activate_button(elem){
return jayq.core.add_class.call(null,jayq.core.remove_class.call(null,jayq.core.$.call(null,elem),"unpressable-button"),"activated");
});
voice.sampler.deactivate_button = (function voice$sampler$deactivate_button(elem){
return jayq.core.remove_class.call(null,jayq.core.add_class.call(null,jayq.core.$.call(null,elem),"unpressable-button"),"activated");
});
voice.sampler.handle_forward = (function voice$sampler$handle_forward(ev){
var next_index_75376 = ((1) + cljs.core.deref.call(null,voice.sampler.sampler_state).call(null,new cljs.core.Keyword(null,"cur-script-index","cur-script-index",434373398)));
var script_75377 = cljs.core.deref.call(null,voice.sampler.sampler_state).call(null,new cljs.core.Keyword(null,"script","script",-1304443801));
if((next_index_75376 < cljs.core.count.call(null,script_75377))){
voice.sampler.change_script_box.call(null,cljs.core.nth.call(null,script_75377,next_index_75376));

voice.sampler.update_cur_samples.call(null,next_index_75376);

cljs.core.swap_BANG_.call(null,voice.sampler.sampler_state,cljs.core.assoc,new cljs.core.Keyword(null,"cur-script-index","cur-script-index",434373398),next_index_75376);
} else {
}

voice.sampler.activate_button.call(null,new cljs.core.Keyword(null,"#record-button","#record-button",-576345572));

return voice.sampler.activate_button.call(null,new cljs.core.Keyword(null,"#backward-button","#backward-button",-1270284767));
});
voice.sampler.handle_backward = (function voice$sampler$handle_backward(ev){
var previous_index_75378 = (cljs.core.deref.call(null,voice.sampler.sampler_state).call(null,new cljs.core.Keyword(null,"cur-script-index","cur-script-index",434373398)) - (1));
var script_75379 = cljs.core.deref.call(null,voice.sampler.sampler_state).call(null,new cljs.core.Keyword(null,"script","script",-1304443801));
if((previous_index_75378 >= (0))){
voice.sampler.change_script_box.call(null,cljs.core.nth.call(null,script_75379,previous_index_75378));

voice.sampler.update_cur_samples.call(null,previous_index_75378);

cljs.core.swap_BANG_.call(null,voice.sampler.sampler_state,cljs.core.assoc,new cljs.core.Keyword(null,"cur-script-index","cur-script-index",434373398),previous_index_75378);
} else {
}

return voice.sampler.activate_button.call(null,new cljs.core.Keyword(null,"#record-button","#record-button",-576345572));
});
voice.sampler.handle_record = (function voice$sampler$handle_record(ev){
return jayq.core.attr.call(null,jayq.core.$.call(null,new cljs.core.Keyword(null,"#record-button","#record-button",-576345572)),new cljs.core.Keyword(null,"src","src",-1651076051),"imgs/mic-recording.png");
});
voice.sampler.handle_stop_recording = (function voice$sampler$handle_stop_recording(ev){
return jayq.core.attr.call(null,jayq.core.$.call(null,new cljs.core.Keyword(null,"#record-button","#record-button",-576345572)),new cljs.core.Keyword(null,"src","src",-1651076051),"imgs/mic-not-recording.png");
});
voice.sampler.begin_sampling = (function voice$sampler$begin_sampling(){
var s = cljs.core.deref.call(null,voice.sampler.sampler_state).call(null,new cljs.core.Keyword(null,"script","script",-1304443801));
voice.sampler.change_script_box.call(null,cljs.core.first.call(null,s));

cljs.core.swap_BANG_.call(null,voice.sampler.sampler_state,cljs.core.assoc,new cljs.core.Keyword(null,"cur-script-index","cur-script-index",434373398),(0));

voice.sampler.reset_keypress_handler.call(null,new cljs.core.PersistentArrayMap(null, 1, [(32),voice.sampler.handle_forward], null));

voice.sampler.reset_button_handler.call(null,new cljs.core.Keyword(null,"#forward-button","#forward-button",-361503930),voice.sampler.handle_forward);

voice.sampler.reset_button_handler.call(null,new cljs.core.Keyword(null,"#backward-button","#backward-button",-1270284767),voice.sampler.handle_backward);

jayq.core.on.call(null,jayq.core.$.call(null,new cljs.core.Keyword(null,"#record-button","#record-button",-576345572)),new cljs.core.Keyword(null,"mousedown","mousedown",1391242074),voice.sampler.handle_record);

jayq.core.on.call(null,jayq.core.$.call(null,new cljs.core.Keyword(null,"#record-button","#record-button",-576345572)),new cljs.core.Keyword(null,"mouseup","mouseup",350619456),voice.sampler.handle_stop_recording);

voice.sampler.update_total_samples.call(null,cljs.core.count.call(null,s));

return voice.sampler.update_cur_samples.call(null,(0));
});
voice.sampler.initfn = (function voice$sampler$initfn(){
return jayq.core.done.call(null,voice.sampler.request_script.call(null,(1)),(function (script){
cljs.core.swap_BANG_.call(null,voice.sampler.sampler_state,cljs.core.assoc,new cljs.core.Keyword(null,"script","script",-1304443801),script);

voice.sampler.change_script_box.call(null,"Press forward button to begin!");

voice.sampler.turn_on_keypress_handler.call(null,new cljs.core.PersistentArrayMap(null, 1, [(32),voice.sampler.begin_sampling], null));

voice.sampler.turn_on_button_handler.call(null,new cljs.core.Keyword(null,"#forward-button","#forward-button",-361503930),voice.sampler.begin_sampling);

return jayq.core.remove_class.call(null,jayq.core.$.call(null,new cljs.core.Keyword(null,"#forward-button","#forward-button",-361503930)),"unpressable-button");
}));
});
voice.sampler.initfn.call(null);
console.log("cljs loaded");

//# sourceMappingURL=sampler.js.map?rel=1482883481724