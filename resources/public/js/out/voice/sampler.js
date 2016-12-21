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
return jayq.core.append.call(null,jayq.core.empty.call(null,jayq.core.find.call(null,jayq.core.$.call(null,new cljs.core.Keyword(null,"#script-box","#script-box",1934243072)),new cljs.core.Keyword(null,"span","span",1394872991))),script_segment);
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
voice.sampler.handle_spacebar = (function voice$sampler$handle_spacebar(ev){
var next_index = ((1) + cljs.core.deref.call(null,voice.sampler.sampler_state).call(null,new cljs.core.Keyword(null,"cur-script-index","cur-script-index",434373398)));
var script = cljs.core.deref.call(null,voice.sampler.sampler_state).call(null,new cljs.core.Keyword(null,"script","script",-1304443801));
if((next_index < cljs.core.count.call(null,script))){
voice.sampler.change_script_box.call(null,cljs.core.nth.call(null,script,next_index));

voice.sampler.update_cur_samples.call(null,next_index);

return cljs.core.swap_BANG_.call(null,voice.sampler.sampler_state,cljs.core.assoc,new cljs.core.Keyword(null,"cur-script-index","cur-script-index",434373398),next_index);
} else {
return null;
}
});
voice.sampler.keypress_handler = (function voice$sampler$keypress_handler(ev){
if(cljs.core._EQ_.call(null,(32),ev.charCode)){
return voice.sampler.handle_spacebar.call(null,ev);
} else {
return null;
}
});
voice.sampler.turn_on_keypress_handler = (function voice$sampler$turn_on_keypress_handler(){
return jayq.core.on.call(null,jayq.core.$.call(null,new cljs.core.Keyword(null,"html","html",-998796897)),new cljs.core.Keyword(null,"keypress","keypress",1625181642),voice.sampler.keypress_handler);
});
voice.sampler.turn_off_keypress_handler = (function voice$sampler$turn_off_keypress_handler(){
return jayq.core.off.call(null,jayq.core.$.call(null,new cljs.core.Keyword(null,"html","html",-998796897)),new cljs.core.Keyword(null,"keypress","keypress",1625181642));
});
voice.sampler.reset_keypress_handler = (function voice$sampler$reset_keypress_handler(){
var script = cljs.core.deref.call(null,voice.sampler.sampler_state).call(null,new cljs.core.Keyword(null,"script","script",-1304443801));
voice.sampler.turn_off_keypress_handler.call(null);

voice.sampler.turn_on_keypress_handler.call(null);

voice.sampler.change_script_box.call(null,cljs.core.first.call(null,script));

return cljs.core.swap_BANG_.call(null,voice.sampler.sampler_state,cljs.core.assoc,new cljs.core.Keyword(null,"cur-script-index","cur-script-index",434373398),(0));
});
voice.sampler.begin_sampling = (function voice$sampler$begin_sampling(){
var s = cljs.core.deref.call(null,voice.sampler.sampler_state).call(null,new cljs.core.Keyword(null,"script","script",-1304443801));
voice.sampler.reset_keypress_handler.call(null);

voice.sampler.update_total_samples.call(null,cljs.core.count.call(null,s));

return voice.sampler.update_cur_samples.call(null,(0));
});
voice.sampler.initfn = (function voice$sampler$initfn(){
return jayq.core.done.call(null,voice.sampler.request_script.call(null,(1)),(function (script){
cljs.core.swap_BANG_.call(null,voice.sampler.sampler_state,cljs.core.assoc,new cljs.core.Keyword(null,"script","script",-1304443801),script);

voice.sampler.change_script_box.call(null,"Press Spacebar to Begin!");

return jayq.core.on.call(null,jayq.core.$.call(null,new cljs.core.Keyword(null,"html","html",-998796897)),new cljs.core.Keyword(null,"keypress","keypress",1625181642),(function (p1__9076_SHARP_){
if(cljs.core._EQ_.call(null,(32),p1__9076_SHARP_.charCode)){
return voice.sampler.begin_sampling.call(null);
} else {
return null;
}
}));
}));
});
voice.sampler.initfn.call(null);
consol.log("js loaded");

//# sourceMappingURL=sampler.js.map