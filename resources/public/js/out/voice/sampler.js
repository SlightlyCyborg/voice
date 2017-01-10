// Compiled by ClojureScript 1.9.293 {}
goog.provide('voice.sampler');
goog.require('cljs.core');
goog.require('jayq.core');
goog.require('ajax.core');
voice.sampler.script = null;
voice.sampler.script_id = (1);
voice.sampler.sampler_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"cur-script-index","cur-script-index",434373398),(0),new cljs.core.Keyword(null,"script","script",-1304443801),null,new cljs.core.Keyword(null,"audio-blobs","audio-blobs",-703458996),cljs.core.PersistentArrayMap.EMPTY], null));
voice.sampler.util_sleep = (function voice$sampler$util_sleep(ms,resolve){
return setTimeout(resolve,ms);
});
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
return (function (p1__52672_SHARP_){
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (v){
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,v),p1__52672_SHARP_.charCode)){
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
voice.sampler.activate_button = (function voice$sampler$activate_button(elem){
return jayq.core.add_class.call(null,jayq.core.remove_class.call(null,jayq.core.$.call(null,elem),"unpressable-button"),"activated");
});
voice.sampler.deactivate_button = (function voice$sampler$deactivate_button(elem){
return jayq.core.remove_class.call(null,jayq.core.add_class.call(null,jayq.core.$.call(null,elem),"unpressable-button"),"activated");
});
voice.sampler.save_recorder = (function voice$sampler$save_recorder(audio_context){
return (function (media_stream){
console.log(cljs.core.type.call(null,audio_context));

return cljs.core.swap_BANG_.call(null,voice.sampler.sampler_state,cljs.core.assoc,new cljs.core.Keyword(null,"recorder","recorder",263166645),(new Recorder((new audio_context()).createMediaStreamSource(media_stream))));
});
});
voice.sampler.recorder_init = (function voice$sampler$recorder_init(){
var audio_context = (function (){var or__17415__auto__ = window.AudioContext;
if(cljs.core.truth_(or__17415__auto__)){
return or__17415__auto__;
} else {
return window.webkitAudioContext;
}
})();
return navigator.mediaDevices.getUserMedia(({"audio": true})).then(voice.sampler.save_recorder.call(null,audio_context),((function (audio_context){
return (function (rejected){
return cljs.core.print.call(null,"rejected");
});})(audio_context))
).catch(((function (audio_context){
return (function (err){
return cljs.core.print.call(null,err);
});})(audio_context))
);
});
voice.sampler.send_audio_blob_to_server = (function voice$sampler$send_audio_blob_to_server(blob,index){
cljs.core.println.call(null,"sending data to server");

var data = (new FormData());
data.append("blob-data",blob);

data.append("blob-index",index);

data.append("sample-id",voice.sampler.script_id);

return jayq.core.ajax.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"url","url",276297046),"/sampler",new cljs.core.Keyword(null,"data","data",-232669377),data,new cljs.core.Keyword(null,"contentType","contentType",-1462509576),false,new cljs.core.Keyword(null,"processData","processData",-761924375),false,new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"error","error",-978969032),((function (data){
return (function (){
return console.log("an error occured");
});})(data))
], null));
});
voice.sampler.play_audio_blob = (function voice$sampler$play_audio_blob(blob){
cljs.core.print.call(null,blob.size);

var blob_url = URL.createObjectURL(blob);
cljs.core.print.call(null,blob_url);

var a = (new Audio(blob_url));
a.load();

return a.play();
});
voice.sampler.handle_audio_blob = (function voice$sampler$handle_audio_blob(blob){
var cur_index_52673 = cljs.core.deref.call(null,voice.sampler.sampler_state).call(null,new cljs.core.Keyword(null,"cur-script-index","cur-script-index",434373398));
cljs.core.swap_BANG_.call(null,voice.sampler.sampler_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"audio-blobs","audio-blobs",-703458996),cur_index_52673], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"blob","blob",1636965233),blob,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"not-saved","not-saved",-1272042047)], null));

return voice.sampler.activate_button.call(null,new cljs.core.Keyword(null,"#play-button","#play-button",-1646784312));
});
voice.sampler.get_blob_promise = (function voice$sampler$get_blob_promise(recorder){
cljs.core.print.call(null,"getting promise");

return (new Promise((function (resolve,reject){
return recorder.exportWAV((function (p1__52674_SHARP_){
return resolve.call(null,p1__52674_SHARP_);
}));
})));
});
voice.sampler.handle_play = (function voice$sampler$handle_play(ev){
var cur_index = cljs.core.deref.call(null,voice.sampler.sampler_state).call(null,new cljs.core.Keyword(null,"cur-script-index","cur-script-index",434373398));
if(cljs.core.truth_(jayq.core.has_class.call(null,jayq.core.$.call(null,new cljs.core.Keyword(null,"#play-button","#play-button",-1646784312)),new cljs.core.Keyword(null,"activated","activated",217445300)))){
return voice.sampler.play_audio_blob.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,voice.sampler.sampler_state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"audio-blobs","audio-blobs",-703458996),cur_index,new cljs.core.Keyword(null,"blob","blob",1636965233)], null)));
} else {
return null;
}
});
voice.sampler.handle_movement = (function voice$sampler$handle_movement(){
var cur_index = cljs.core.deref.call(null,voice.sampler.sampler_state).call(null,new cljs.core.Keyword(null,"cur-script-index","cur-script-index",434373398));
var cur_blob = cljs.core.get_in.call(null,cljs.core.deref.call(null,voice.sampler.sampler_state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"audio-blobs","audio-blobs",-703458996),cur_index,new cljs.core.Keyword(null,"blob","blob",1636965233)], null));
if(!((cur_blob == null))){
return voice.sampler.send_audio_blob_to_server.call(null,cur_blob,cur_index);
} else {
return null;
}
});
voice.sampler.handle_forward = (function voice$sampler$handle_forward(ev){
var next_index_52675 = ((1) + cljs.core.deref.call(null,voice.sampler.sampler_state).call(null,new cljs.core.Keyword(null,"cur-script-index","cur-script-index",434373398)));
var script_52676 = cljs.core.deref.call(null,voice.sampler.sampler_state).call(null,new cljs.core.Keyword(null,"script","script",-1304443801));
var next_audio_blob_52677 = cljs.core.get_in.call(null,cljs.core.deref.call(null,voice.sampler.sampler_state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"audio-blobs","audio-blobs",-703458996),next_index_52675,new cljs.core.Keyword(null,"blob","blob",1636965233)], null));
voice.sampler.handle_movement.call(null);

if((next_index_52675 < cljs.core.count.call(null,script_52676))){
voice.sampler.change_script_box.call(null,cljs.core.nth.call(null,script_52676,next_index_52675));

voice.sampler.update_cur_samples.call(null,next_index_52675);

cljs.core.swap_BANG_.call(null,voice.sampler.sampler_state,cljs.core.assoc,new cljs.core.Keyword(null,"cur-script-index","cur-script-index",434373398),next_index_52675);
} else {
}

if(!((next_audio_blob_52677 == null))){
voice.sampler.activate_button.call(null,new cljs.core.Keyword(null,"#play-button","#play-button",-1646784312));
} else {
voice.sampler.deactivate_button.call(null,new cljs.core.Keyword(null,"#play-button","#play-button",-1646784312));
}

voice.sampler.activate_button.call(null,new cljs.core.Keyword(null,"#record-button","#record-button",-576345572));

return voice.sampler.activate_button.call(null,new cljs.core.Keyword(null,"#backward-button","#backward-button",-1270284767));
});
voice.sampler.handle_backward = (function voice$sampler$handle_backward(ev){
var previous_index_52678 = (cljs.core.deref.call(null,voice.sampler.sampler_state).call(null,new cljs.core.Keyword(null,"cur-script-index","cur-script-index",434373398)) - (1));
var script_52679 = cljs.core.deref.call(null,voice.sampler.sampler_state).call(null,new cljs.core.Keyword(null,"script","script",-1304443801));
var prev_audio_blob_52680 = cljs.core.get_in.call(null,cljs.core.deref.call(null,voice.sampler.sampler_state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"audio-blobs","audio-blobs",-703458996),previous_index_52678,new cljs.core.Keyword(null,"blob","blob",1636965233)], null));
voice.sampler.handle_movement.call(null);

if((previous_index_52678 >= (0))){
voice.sampler.change_script_box.call(null,cljs.core.nth.call(null,script_52679,previous_index_52678));

voice.sampler.update_cur_samples.call(null,previous_index_52678);

cljs.core.swap_BANG_.call(null,voice.sampler.sampler_state,cljs.core.assoc,new cljs.core.Keyword(null,"cur-script-index","cur-script-index",434373398),previous_index_52678);
} else {
}

if(!((prev_audio_blob_52680 == null))){
voice.sampler.activate_button.call(null,new cljs.core.Keyword(null,"#play-button","#play-button",-1646784312));
} else {
voice.sampler.deactivate_button.call(null,new cljs.core.Keyword(null,"#play-button","#play-button",-1646784312));
}

return voice.sampler.activate_button.call(null,new cljs.core.Keyword(null,"#record-button","#record-button",-576345572));
});
voice.sampler.handle_record = (function voice$sampler$handle_record(ev){
jayq.core.attr.call(null,jayq.core.$.call(null,new cljs.core.Keyword(null,"#record-button","#record-button",-576345572)),new cljs.core.Keyword(null,"src","src",-1651076051),"imgs/mic-recording.png");

var recorder = cljs.core.deref.call(null,voice.sampler.sampler_state).call(null,new cljs.core.Keyword(null,"recorder","recorder",263166645));
if(!((recorder == null))){
recorder.clear();

return recorder.record();
} else {
return null;
}
});
voice.sampler.handle_stop_recording = (function voice$sampler$handle_stop_recording(ev){
cljs.core.print.call(null,"stopping-recording");

jayq.core.attr.call(null,jayq.core.$.call(null,new cljs.core.Keyword(null,"#record-button","#record-button",-576345572)),new cljs.core.Keyword(null,"src","src",-1651076051),"imgs/mic-not-recording.png");

return voice.sampler.util_sleep.call(null,(300),(function (){
var recorder = cljs.core.deref.call(null,voice.sampler.sampler_state).call(null,new cljs.core.Keyword(null,"recorder","recorder",263166645));
if(!((recorder == null))){
recorder.stop();

return voice.sampler.get_blob_promise.call(null,recorder).then(((function (recorder){
return (function (p1__52681_SHARP_){
return voice.sampler.handle_audio_blob.call(null,p1__52681_SHARP_);
});})(recorder))
);
} else {
return null;
}
}));
});
voice.sampler.init_button_handlers = (function voice$sampler$init_button_handlers(){
jayq.core.on.call(null,jayq.core.$.call(null,new cljs.core.Keyword(null,"#record-button","#record-button",-576345572)),new cljs.core.Keyword(null,"mousedown","mousedown",1391242074),voice.sampler.handle_record);

jayq.core.on.call(null,jayq.core.$.call(null,new cljs.core.Keyword(null,"#record-button","#record-button",-576345572)),new cljs.core.Keyword(null,"mouseup","mouseup",350619456),voice.sampler.handle_stop_recording);

return jayq.core.on.call(null,jayq.core.$.call(null,new cljs.core.Keyword(null,"#play-button","#play-button",-1646784312)),new cljs.core.Keyword(null,"click","click",1912301393),voice.sampler.handle_play);
});
voice.sampler.begin_sampling = (function voice$sampler$begin_sampling(){
var s = cljs.core.deref.call(null,voice.sampler.sampler_state).call(null,new cljs.core.Keyword(null,"script","script",-1304443801));
voice.sampler.change_script_box.call(null,cljs.core.first.call(null,s));

cljs.core.swap_BANG_.call(null,voice.sampler.sampler_state,cljs.core.assoc,new cljs.core.Keyword(null,"cur-script-index","cur-script-index",434373398),(0));

voice.sampler.reset_keypress_handler.call(null,new cljs.core.PersistentArrayMap(null, 1, [(32),voice.sampler.handle_forward], null));

voice.sampler.activate_button.call(null,new cljs.core.Keyword(null,"#record-button","#record-button",-576345572));

voice.sampler.reset_button_handler.call(null,new cljs.core.Keyword(null,"#forward-button","#forward-button",-361503930),voice.sampler.handle_forward);

voice.sampler.reset_button_handler.call(null,new cljs.core.Keyword(null,"#backward-button","#backward-button",-1270284767),voice.sampler.handle_backward);

voice.sampler.recorder_init.call(null);

voice.sampler.init_button_handlers.call(null);

voice.sampler.update_total_samples.call(null,cljs.core.count.call(null,s));

return voice.sampler.update_cur_samples.call(null,(0));
});
voice.sampler.initfn = (function voice$sampler$initfn(){
return jayq.core.done.call(null,voice.sampler.request_script.call(null,voice.sampler.script_id),(function (script){
cljs.core.swap_BANG_.call(null,voice.sampler.sampler_state,cljs.core.assoc,new cljs.core.Keyword(null,"script","script",-1304443801),script);

voice.sampler.change_script_box.call(null,"Press forward button to begin!");

voice.sampler.turn_on_keypress_handler.call(null,new cljs.core.PersistentArrayMap(null, 1, [(32),voice.sampler.begin_sampling], null));

voice.sampler.turn_on_button_handler.call(null,new cljs.core.Keyword(null,"#forward-button","#forward-button",-361503930),voice.sampler.begin_sampling);

return jayq.core.remove_class.call(null,jayq.core.$.call(null,new cljs.core.Keyword(null,"#forward-button","#forward-button",-361503930)),"unpressable-button");
}));
});
voice.sampler.initfn.call(null);

//# sourceMappingURL=sampler.js.map?rel=1484020930108