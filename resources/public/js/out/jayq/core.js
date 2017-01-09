// Compiled by ClojureScript 1.9.293 {}
goog.provide('jayq.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('cljs.reader');
jayq.core.crate_meta = (function jayq$core$crate_meta(func){
return func.prototype._crateGroup;
});
jayq.core.__GT_selector = (function jayq$core$__GT_selector(sel){
if(typeof sel === 'string'){
return sel;
} else {
if(cljs.core.fn_QMARK_.call(null,sel)){
var temp__4655__auto__ = jayq.core.crate_meta.call(null,sel);
if(cljs.core.truth_(temp__4655__auto__)){
var cm = temp__4655__auto__;
return [cljs.core.str("[crateGroup="),cljs.core.str(cm),cljs.core.str("]")].join('');
} else {
return sel;
}
} else {
if((sel instanceof cljs.core.Keyword)){
return cljs.core.name.call(null,sel);
} else {
return sel;

}
}
}
});
jayq.core.$ = (function jayq$core$$(var_args){
var args52149 = [];
var len__18523__auto___52152 = arguments.length;
var i__18524__auto___52153 = (0);
while(true){
if((i__18524__auto___52153 < len__18523__auto___52152)){
args52149.push((arguments[i__18524__auto___52153]));

var G__52154 = (i__18524__auto___52153 + (1));
i__18524__auto___52153 = G__52154;
continue;
} else {
}
break;
}

var G__52151 = args52149.length;
switch (G__52151) {
case 1:
return jayq.core.$.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.$.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args52149.length)].join('')));

}
});

jayq.core.$.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return jQuery(jayq.core.__GT_selector.call(null,sel));
});

jayq.core.$.cljs$core$IFn$_invoke$arity$2 = (function (sel,context){
return jQuery(jayq.core.__GT_selector.call(null,sel),context);
});

jayq.core.$.cljs$lang$maxFixedArity = 2;

jQuery.prototype.cljs$core$ISeqable$ = cljs.core.PROTOCOL_SENTINEL;

jQuery.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this$__$1 = this;
if(cljs.core.truth_(this$__$1.get((0)))){
return this$__$1;
} else {
return null;
}
});

jQuery.prototype.cljs$core$ISeq$ = cljs.core.PROTOCOL_SENTINEL;

jQuery.prototype.cljs$core$ISeq$_first$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.get((0));
});

jQuery.prototype.cljs$core$ISeq$_rest$arity$1 = (function (this$){
var this$__$1 = this;
if((cljs.core.count.call(null,this$__$1) > (1))){
return this$__$1.slice((1));
} else {
return cljs.core.List.EMPTY;
}
});

jQuery.prototype.cljs$core$ICounted$ = cljs.core.PROTOCOL_SENTINEL;

jQuery.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.length;
});

jQuery.prototype.cljs$core$IIndexed$ = cljs.core.PROTOCOL_SENTINEL;

jQuery.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var this$__$1 = this;
if((n < cljs.core.count.call(null,this$__$1))){
return this$__$1.slice(n,(n + (1)));
} else {
return null;
}
});

jQuery.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var this$__$1 = this;
if((n < cljs.core.count.call(null,this$__$1))){
return this$__$1.slice(n,(n + (1)));
} else {
if((void 0 === not_found)){
return null;
} else {
return not_found;
}
}
});

jQuery.prototype.cljs$core$ISequential$ = cljs.core.PROTOCOL_SENTINEL;

jQuery.prototype.cljs$core$ILookup$ = cljs.core.PROTOCOL_SENTINEL;

jQuery.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,k){
var this$__$1 = this;
var or__17415__auto__ = this$__$1.slice(k,(k + (1)));
if(cljs.core.truth_(or__17415__auto__)){
return or__17415__auto__;
} else {
return null;
}
});

jQuery.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,k,not_found){
var this$__$1 = this;
return cljs.core._nth.call(null,this$__$1,k,not_found);
});

jQuery.prototype.cljs$core$IReduce$ = cljs.core.PROTOCOL_SENTINEL;

jQuery.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (this$,f){
var this$__$1 = this;
return cljs.core.ci_reduce.call(null,this$__$1,f);
});

jQuery.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (this$,f,start){
var this$__$1 = this;
return cljs.core.ci_reduce.call(null,this$__$1,f,start);
});

jQuery.prototype.cljs$core$IFn$ = cljs.core.PROTOCOL_SENTINEL;

jQuery.prototype.call = (function() {
var G__52157 = null;
var G__52157__2 = (function (self__,k){
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,k);
});
var G__52157__3 = (function (self__,k,not_found){
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,k,not_found);
});
G__52157 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__52157__2.call(this,self__,k);
case 3:
return G__52157__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__52157.cljs$core$IFn$_invoke$arity$2 = G__52157__2;
G__52157.cljs$core$IFn$_invoke$arity$3 = G__52157__3;
return G__52157;
})()
;

jQuery.prototype.apply = (function (self__,args52156){
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args52156)));
});

jQuery.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var this$ = this;
return cljs.core._lookup.call(null,this$,k);
});

jQuery.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var this$ = this;
return cljs.core._lookup.call(null,this$,k,not_found);
});
jayq.core.anim = (function jayq$core$anim(var_args){
var args__18530__auto__ = [];
var len__18523__auto___52165 = arguments.length;
var i__18524__auto___52166 = (0);
while(true){
if((i__18524__auto___52166 < len__18523__auto___52165)){
args__18530__auto__.push((arguments[i__18524__auto___52166]));

var G__52167 = (i__18524__auto___52166 + (1));
i__18524__auto___52166 = G__52167;
continue;
} else {
}
break;
}

var argseq__18531__auto__ = ((((2) < args__18530__auto__.length))?(new cljs.core.IndexedSeq(args__18530__auto__.slice((2)),(0),null)):null);
return jayq.core.anim.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__18531__auto__);
});

jayq.core.anim.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,props,p__52161){
var vec__52162 = p__52161;
var speed = cljs.core.nth.call(null,vec__52162,(0),null);
var on_finish = cljs.core.nth.call(null,vec__52162,(1),null);
return $elem.animate(cljs.core.clj__GT_js.call(null,props),speed,on_finish);
});

jayq.core.anim.cljs$lang$maxFixedArity = (2);

jayq.core.anim.cljs$lang$applyTo = (function (seq52158){
var G__52159 = cljs.core.first.call(null,seq52158);
var seq52158__$1 = cljs.core.next.call(null,seq52158);
var G__52160 = cljs.core.first.call(null,seq52158__$1);
var seq52158__$2 = cljs.core.next.call(null,seq52158__$1);
return jayq.core.anim.cljs$core$IFn$_invoke$arity$variadic(G__52159,G__52160,seq52158__$2);
});

jayq.core.text = (function jayq$core$text(var_args){
var args52168 = [];
var len__18523__auto___52171 = arguments.length;
var i__18524__auto___52172 = (0);
while(true){
if((i__18524__auto___52172 < len__18523__auto___52171)){
args52168.push((arguments[i__18524__auto___52172]));

var G__52173 = (i__18524__auto___52172 + (1));
i__18524__auto___52172 = G__52173;
continue;
} else {
}
break;
}

var G__52170 = args52168.length;
switch (G__52170) {
case 1:
return jayq.core.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args52168.length)].join('')));

}
});

jayq.core.text.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.text();
});

jayq.core.text.cljs$core$IFn$_invoke$arity$2 = (function ($elem,txt){
return $elem.text(txt);
});

jayq.core.text.cljs$lang$maxFixedArity = 2;

jayq.core.css = (function jayq$core$css(var_args){
var args52175 = [];
var len__18523__auto___52178 = arguments.length;
var i__18524__auto___52179 = (0);
while(true){
if((i__18524__auto___52179 < len__18523__auto___52178)){
args52175.push((arguments[i__18524__auto___52179]));

var G__52180 = (i__18524__auto___52179 + (1));
i__18524__auto___52179 = G__52180;
continue;
} else {
}
break;
}

var G__52177 = args52175.length;
switch (G__52177) {
case 2:
return jayq.core.css.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return jayq.core.css.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args52175.length)].join('')));

}
});

jayq.core.css.cljs$core$IFn$_invoke$arity$2 = (function ($elem,opts){
return $elem.css(cljs.core.clj__GT_js.call(null,opts));
});

jayq.core.css.cljs$core$IFn$_invoke$arity$3 = (function ($elem,p,v){
return $elem.css(cljs.core.name.call(null,p),v);
});

jayq.core.css.cljs$lang$maxFixedArity = 3;

jayq.core.attr = (function jayq$core$attr(var_args){
var args52182 = [];
var len__18523__auto___52185 = arguments.length;
var i__18524__auto___52186 = (0);
while(true){
if((i__18524__auto___52186 < len__18523__auto___52185)){
args52182.push((arguments[i__18524__auto___52186]));

var G__52187 = (i__18524__auto___52186 + (1));
i__18524__auto___52186 = G__52187;
continue;
} else {
}
break;
}

var G__52184 = args52182.length;
switch (G__52184) {
case 3:
return jayq.core.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return jayq.core.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args52182.length)].join('')));

}
});

jayq.core.attr.cljs$core$IFn$_invoke$arity$3 = (function ($elem,n,v){
return $elem.attr(cljs.core.name.call(null,n),v);
});

jayq.core.attr.cljs$core$IFn$_invoke$arity$2 = (function ($elem,x){
return $elem.attr(cljs.core.clj__GT_js.call(null,x));
});

jayq.core.attr.cljs$lang$maxFixedArity = 3;

jayq.core.prop = (function jayq$core$prop(var_args){
var args52189 = [];
var len__18523__auto___52192 = arguments.length;
var i__18524__auto___52193 = (0);
while(true){
if((i__18524__auto___52193 < len__18523__auto___52192)){
args52189.push((arguments[i__18524__auto___52193]));

var G__52194 = (i__18524__auto___52193 + (1));
i__18524__auto___52193 = G__52194;
continue;
} else {
}
break;
}

var G__52191 = args52189.length;
switch (G__52191) {
case 3:
return jayq.core.prop.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return jayq.core.prop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args52189.length)].join('')));

}
});

jayq.core.prop.cljs$core$IFn$_invoke$arity$3 = (function ($elem,n,v){
return $elem.prop(cljs.core.name.call(null,n),v);
});

jayq.core.prop.cljs$core$IFn$_invoke$arity$2 = (function ($elem,x){
return $elem.prop(cljs.core.clj__GT_js.call(null,x));
});

jayq.core.prop.cljs$lang$maxFixedArity = 3;

jayq.core.remove_attr = (function jayq$core$remove_attr($elem,a){
return $elem.removeAttr(cljs.core.name.call(null,a));
});
jayq.core.remove_prop = (function jayq$core$remove_prop($elem,a){
return $elem.removeProp(cljs.core.name.call(null,a));
});
jayq.core.data = (function jayq$core$data(var_args){
var args52196 = [];
var len__18523__auto___52199 = arguments.length;
var i__18524__auto___52200 = (0);
while(true){
if((i__18524__auto___52200 < len__18523__auto___52199)){
args52196.push((arguments[i__18524__auto___52200]));

var G__52201 = (i__18524__auto___52200 + (1));
i__18524__auto___52200 = G__52201;
continue;
} else {
}
break;
}

var G__52198 = args52196.length;
switch (G__52198) {
case 1:
return jayq.core.data.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.data.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return jayq.core.data.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args52196.length)].join('')));

}
});

jayq.core.data.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.data();
});

jayq.core.data.cljs$core$IFn$_invoke$arity$2 = (function ($elem,k){
return $elem.data(cljs.core.clj__GT_js.call(null,k));
});

jayq.core.data.cljs$core$IFn$_invoke$arity$3 = (function ($elem,k,v){
return $elem.data(cljs.core.name.call(null,k),cljs.core.clj__GT_js.call(null,v));
});

jayq.core.data.cljs$lang$maxFixedArity = 3;

jayq.core.add_class = (function jayq$core$add_class($elem,cl){
return $elem.addClass(cljs.core.name.call(null,cl));
});
jayq.core.remove_class = (function jayq$core$remove_class(var_args){
var args52203 = [];
var len__18523__auto___52206 = arguments.length;
var i__18524__auto___52207 = (0);
while(true){
if((i__18524__auto___52207 < len__18523__auto___52206)){
args52203.push((arguments[i__18524__auto___52207]));

var G__52208 = (i__18524__auto___52207 + (1));
i__18524__auto___52207 = G__52208;
continue;
} else {
}
break;
}

var G__52205 = args52203.length;
switch (G__52205) {
case 1:
return jayq.core.remove_class.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.remove_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args52203.length)].join('')));

}
});

jayq.core.remove_class.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.removeClass();
});

jayq.core.remove_class.cljs$core$IFn$_invoke$arity$2 = (function ($elem,cl){
return $elem.removeClass(cljs.core.name.call(null,cl));
});

jayq.core.remove_class.cljs$lang$maxFixedArity = 2;

jayq.core.toggle_class = (function jayq$core$toggle_class(var_args){
var args52210 = [];
var len__18523__auto___52213 = arguments.length;
var i__18524__auto___52214 = (0);
while(true){
if((i__18524__auto___52214 < len__18523__auto___52213)){
args52210.push((arguments[i__18524__auto___52214]));

var G__52215 = (i__18524__auto___52214 + (1));
i__18524__auto___52214 = G__52215;
continue;
} else {
}
break;
}

var G__52212 = args52210.length;
switch (G__52212) {
case 2:
return jayq.core.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return jayq.core.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args52210.length)].join('')));

}
});

jayq.core.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function ($elem,cl){
return $elem.toggleClass(cljs.core.name.call(null,cl));
});

jayq.core.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function ($elem,cl,switch$){
return $elem.toggleClass(cljs.core.name.call(null,cl),cljs.core.boolean$.call(null,switch$));
});

jayq.core.toggle_class.cljs$lang$maxFixedArity = 3;

jayq.core.has_class = (function jayq$core$has_class($elem,cl){
return $elem.hasClass(cljs.core.name.call(null,cl));
});
jayq.core.is = (function jayq$core$is($elem,selector){
return $elem.is(jayq.core.__GT_selector.call(null,selector));
});
jayq.core.after = (function jayq$core$after($elem,content){
return $elem.after(content);
});
jayq.core.before = (function jayq$core$before($elem,content){
return $elem.before(content);
});
jayq.core.append = (function jayq$core$append($elem,content){
return $elem.append(content);
});
jayq.core.prepend = (function jayq$core$prepend($elem,content){
return $elem.prepend(content);
});
jayq.core.append_to = (function jayq$core$append_to($elem,target){
return $elem.appendTo(jayq.core.__GT_selector.call(null,target));
});
jayq.core.prepend_to = (function jayq$core$prepend_to($elem,target){
return $elem.prependTo(jayq.core.__GT_selector.call(null,target));
});
jayq.core.insert_before = (function jayq$core$insert_before($elem,target){
return $elem.insertBefore(jayq.core.__GT_selector.call(null,target));
});
jayq.core.insert_after = (function jayq$core$insert_after($elem,target){
return $elem.insertAfter(jayq.core.__GT_selector.call(null,target));
});
jayq.core.replace_with = (function jayq$core$replace_with($elem,content){
return $elem.replaceWith(content);
});
jayq.core.remove = (function jayq$core$remove($elem){
return $elem.remove();
});
jayq.core.hide = (function jayq$core$hide(var_args){
var args__18530__auto__ = [];
var len__18523__auto___52223 = arguments.length;
var i__18524__auto___52224 = (0);
while(true){
if((i__18524__auto___52224 < len__18523__auto___52223)){
args__18530__auto__.push((arguments[i__18524__auto___52224]));

var G__52225 = (i__18524__auto___52224 + (1));
i__18524__auto___52224 = G__52225;
continue;
} else {
}
break;
}

var argseq__18531__auto__ = ((((1) < args__18530__auto__.length))?(new cljs.core.IndexedSeq(args__18530__auto__.slice((1)),(0),null)):null);
return jayq.core.hide.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__18531__auto__);
});

jayq.core.hide.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,p__52219){
var vec__52220 = p__52219;
var speed = cljs.core.nth.call(null,vec__52220,(0),null);
var on_finish = cljs.core.nth.call(null,vec__52220,(1),null);
return $elem.hide(speed,on_finish);
});

jayq.core.hide.cljs$lang$maxFixedArity = (1);

jayq.core.hide.cljs$lang$applyTo = (function (seq52217){
var G__52218 = cljs.core.first.call(null,seq52217);
var seq52217__$1 = cljs.core.next.call(null,seq52217);
return jayq.core.hide.cljs$core$IFn$_invoke$arity$variadic(G__52218,seq52217__$1);
});

jayq.core.show = (function jayq$core$show(var_args){
var args__18530__auto__ = [];
var len__18523__auto___52232 = arguments.length;
var i__18524__auto___52233 = (0);
while(true){
if((i__18524__auto___52233 < len__18523__auto___52232)){
args__18530__auto__.push((arguments[i__18524__auto___52233]));

var G__52234 = (i__18524__auto___52233 + (1));
i__18524__auto___52233 = G__52234;
continue;
} else {
}
break;
}

var argseq__18531__auto__ = ((((1) < args__18530__auto__.length))?(new cljs.core.IndexedSeq(args__18530__auto__.slice((1)),(0),null)):null);
return jayq.core.show.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__18531__auto__);
});

jayq.core.show.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,p__52228){
var vec__52229 = p__52228;
var speed = cljs.core.nth.call(null,vec__52229,(0),null);
var on_finish = cljs.core.nth.call(null,vec__52229,(1),null);
return $elem.show(speed,on_finish);
});

jayq.core.show.cljs$lang$maxFixedArity = (1);

jayq.core.show.cljs$lang$applyTo = (function (seq52226){
var G__52227 = cljs.core.first.call(null,seq52226);
var seq52226__$1 = cljs.core.next.call(null,seq52226);
return jayq.core.show.cljs$core$IFn$_invoke$arity$variadic(G__52227,seq52226__$1);
});

jayq.core.toggle = (function jayq$core$toggle(var_args){
var args__18530__auto__ = [];
var len__18523__auto___52241 = arguments.length;
var i__18524__auto___52242 = (0);
while(true){
if((i__18524__auto___52242 < len__18523__auto___52241)){
args__18530__auto__.push((arguments[i__18524__auto___52242]));

var G__52243 = (i__18524__auto___52242 + (1));
i__18524__auto___52242 = G__52243;
continue;
} else {
}
break;
}

var argseq__18531__auto__ = ((((1) < args__18530__auto__.length))?(new cljs.core.IndexedSeq(args__18530__auto__.slice((1)),(0),null)):null);
return jayq.core.toggle.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__18531__auto__);
});

jayq.core.toggle.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,p__52237){
var vec__52238 = p__52237;
var speed = cljs.core.nth.call(null,vec__52238,(0),null);
var on_finish = cljs.core.nth.call(null,vec__52238,(1),null);
return $elem.toggle(speed,on_finish);
});

jayq.core.toggle.cljs$lang$maxFixedArity = (1);

jayq.core.toggle.cljs$lang$applyTo = (function (seq52235){
var G__52236 = cljs.core.first.call(null,seq52235);
var seq52235__$1 = cljs.core.next.call(null,seq52235);
return jayq.core.toggle.cljs$core$IFn$_invoke$arity$variadic(G__52236,seq52235__$1);
});

jayq.core.fade_out = (function jayq$core$fade_out(var_args){
var args__18530__auto__ = [];
var len__18523__auto___52250 = arguments.length;
var i__18524__auto___52251 = (0);
while(true){
if((i__18524__auto___52251 < len__18523__auto___52250)){
args__18530__auto__.push((arguments[i__18524__auto___52251]));

var G__52252 = (i__18524__auto___52251 + (1));
i__18524__auto___52251 = G__52252;
continue;
} else {
}
break;
}

var argseq__18531__auto__ = ((((1) < args__18530__auto__.length))?(new cljs.core.IndexedSeq(args__18530__auto__.slice((1)),(0),null)):null);
return jayq.core.fade_out.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__18531__auto__);
});

jayq.core.fade_out.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,p__52246){
var vec__52247 = p__52246;
var speed = cljs.core.nth.call(null,vec__52247,(0),null);
var on_finish = cljs.core.nth.call(null,vec__52247,(1),null);
return $elem.fadeOut(speed,on_finish);
});

jayq.core.fade_out.cljs$lang$maxFixedArity = (1);

jayq.core.fade_out.cljs$lang$applyTo = (function (seq52244){
var G__52245 = cljs.core.first.call(null,seq52244);
var seq52244__$1 = cljs.core.next.call(null,seq52244);
return jayq.core.fade_out.cljs$core$IFn$_invoke$arity$variadic(G__52245,seq52244__$1);
});

jayq.core.fade_in = (function jayq$core$fade_in(var_args){
var args__18530__auto__ = [];
var len__18523__auto___52259 = arguments.length;
var i__18524__auto___52260 = (0);
while(true){
if((i__18524__auto___52260 < len__18523__auto___52259)){
args__18530__auto__.push((arguments[i__18524__auto___52260]));

var G__52261 = (i__18524__auto___52260 + (1));
i__18524__auto___52260 = G__52261;
continue;
} else {
}
break;
}

var argseq__18531__auto__ = ((((1) < args__18530__auto__.length))?(new cljs.core.IndexedSeq(args__18530__auto__.slice((1)),(0),null)):null);
return jayq.core.fade_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__18531__auto__);
});

jayq.core.fade_in.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,p__52255){
var vec__52256 = p__52255;
var speed = cljs.core.nth.call(null,vec__52256,(0),null);
var on_finish = cljs.core.nth.call(null,vec__52256,(1),null);
return $elem.fadeIn(speed,on_finish);
});

jayq.core.fade_in.cljs$lang$maxFixedArity = (1);

jayq.core.fade_in.cljs$lang$applyTo = (function (seq52253){
var G__52254 = cljs.core.first.call(null,seq52253);
var seq52253__$1 = cljs.core.next.call(null,seq52253);
return jayq.core.fade_in.cljs$core$IFn$_invoke$arity$variadic(G__52254,seq52253__$1);
});

jayq.core.slide_up = (function jayq$core$slide_up(var_args){
var args__18530__auto__ = [];
var len__18523__auto___52268 = arguments.length;
var i__18524__auto___52269 = (0);
while(true){
if((i__18524__auto___52269 < len__18523__auto___52268)){
args__18530__auto__.push((arguments[i__18524__auto___52269]));

var G__52270 = (i__18524__auto___52269 + (1));
i__18524__auto___52269 = G__52270;
continue;
} else {
}
break;
}

var argseq__18531__auto__ = ((((1) < args__18530__auto__.length))?(new cljs.core.IndexedSeq(args__18530__auto__.slice((1)),(0),null)):null);
return jayq.core.slide_up.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__18531__auto__);
});

jayq.core.slide_up.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,p__52264){
var vec__52265 = p__52264;
var speed = cljs.core.nth.call(null,vec__52265,(0),null);
var on_finish = cljs.core.nth.call(null,vec__52265,(1),null);
return $elem.slideUp(speed,on_finish);
});

jayq.core.slide_up.cljs$lang$maxFixedArity = (1);

jayq.core.slide_up.cljs$lang$applyTo = (function (seq52262){
var G__52263 = cljs.core.first.call(null,seq52262);
var seq52262__$1 = cljs.core.next.call(null,seq52262);
return jayq.core.slide_up.cljs$core$IFn$_invoke$arity$variadic(G__52263,seq52262__$1);
});

jayq.core.slide_down = (function jayq$core$slide_down(var_args){
var args__18530__auto__ = [];
var len__18523__auto___52277 = arguments.length;
var i__18524__auto___52278 = (0);
while(true){
if((i__18524__auto___52278 < len__18523__auto___52277)){
args__18530__auto__.push((arguments[i__18524__auto___52278]));

var G__52279 = (i__18524__auto___52278 + (1));
i__18524__auto___52278 = G__52279;
continue;
} else {
}
break;
}

var argseq__18531__auto__ = ((((1) < args__18530__auto__.length))?(new cljs.core.IndexedSeq(args__18530__auto__.slice((1)),(0),null)):null);
return jayq.core.slide_down.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__18531__auto__);
});

jayq.core.slide_down.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,p__52273){
var vec__52274 = p__52273;
var speed = cljs.core.nth.call(null,vec__52274,(0),null);
var on_finish = cljs.core.nth.call(null,vec__52274,(1),null);
return $elem.slideDown(speed,on_finish);
});

jayq.core.slide_down.cljs$lang$maxFixedArity = (1);

jayq.core.slide_down.cljs$lang$applyTo = (function (seq52271){
var G__52272 = cljs.core.first.call(null,seq52271);
var seq52271__$1 = cljs.core.next.call(null,seq52271);
return jayq.core.slide_down.cljs$core$IFn$_invoke$arity$variadic(G__52272,seq52271__$1);
});

jayq.core.siblings = (function jayq$core$siblings(var_args){
var args52280 = [];
var len__18523__auto___52283 = arguments.length;
var i__18524__auto___52284 = (0);
while(true){
if((i__18524__auto___52284 < len__18523__auto___52283)){
args52280.push((arguments[i__18524__auto___52284]));

var G__52285 = (i__18524__auto___52284 + (1));
i__18524__auto___52284 = G__52285;
continue;
} else {
}
break;
}

var G__52282 = args52280.length;
switch (G__52282) {
case 1:
return jayq.core.siblings.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.siblings.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args52280.length)].join('')));

}
});

jayq.core.siblings.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.siblings();
});

jayq.core.siblings.cljs$core$IFn$_invoke$arity$2 = (function ($elem,selector){
return $elem.siblings(cljs.core.name.call(null,selector));
});

jayq.core.siblings.cljs$lang$maxFixedArity = 2;

jayq.core.parent = (function jayq$core$parent($elem){
return $elem.parent();
});
jayq.core.parents = (function jayq$core$parents(var_args){
var args52287 = [];
var len__18523__auto___52290 = arguments.length;
var i__18524__auto___52291 = (0);
while(true){
if((i__18524__auto___52291 < len__18523__auto___52290)){
args52287.push((arguments[i__18524__auto___52291]));

var G__52292 = (i__18524__auto___52291 + (1));
i__18524__auto___52291 = G__52292;
continue;
} else {
}
break;
}

var G__52289 = args52287.length;
switch (G__52289) {
case 1:
return jayq.core.parents.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.parents.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args52287.length)].join('')));

}
});

jayq.core.parents.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.parents();
});

jayq.core.parents.cljs$core$IFn$_invoke$arity$2 = (function ($elem,selector){
return $elem.parents(cljs.core.name.call(null,selector));
});

jayq.core.parents.cljs$lang$maxFixedArity = 2;

jayq.core.parents_until = (function jayq$core$parents_until(var_args){
var args52294 = [];
var len__18523__auto___52297 = arguments.length;
var i__18524__auto___52298 = (0);
while(true){
if((i__18524__auto___52298 < len__18523__auto___52297)){
args52294.push((arguments[i__18524__auto___52298]));

var G__52299 = (i__18524__auto___52298 + (1));
i__18524__auto___52298 = G__52299;
continue;
} else {
}
break;
}

var G__52296 = args52294.length;
switch (G__52296) {
case 1:
return jayq.core.parents_until.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.parents_until.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return jayq.core.parents_until.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args52294.length)].join('')));

}
});

jayq.core.parents_until.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.parentsUntil();
});

jayq.core.parents_until.cljs$core$IFn$_invoke$arity$2 = (function ($elem,selector){
return $elem.parentsUntil(jayq.core.__GT_selector.call(null,selector));
});

jayq.core.parents_until.cljs$core$IFn$_invoke$arity$3 = (function ($elem,selector,filtr){
return $elem.parentsUntil(jayq.core.__GT_selector.call(null,selector),cljs.core.name.call(null,filtr));
});

jayq.core.parents_until.cljs$lang$maxFixedArity = 3;

jayq.core.children = (function jayq$core$children(var_args){
var args52301 = [];
var len__18523__auto___52304 = arguments.length;
var i__18524__auto___52305 = (0);
while(true){
if((i__18524__auto___52305 < len__18523__auto___52304)){
args52301.push((arguments[i__18524__auto___52305]));

var G__52306 = (i__18524__auto___52305 + (1));
i__18524__auto___52305 = G__52306;
continue;
} else {
}
break;
}

var G__52303 = args52301.length;
switch (G__52303) {
case 2:
return jayq.core.children.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.children.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args52301.length)].join('')));

}
});

jayq.core.children.cljs$core$IFn$_invoke$arity$2 = (function ($elem,selector){
return $elem.children(cljs.core.name.call(null,selector));
});

jayq.core.children.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.children();
});

jayq.core.children.cljs$lang$maxFixedArity = 2;

jayq.core.next = (function jayq$core$next(var_args){
var args52308 = [];
var len__18523__auto___52311 = arguments.length;
var i__18524__auto___52312 = (0);
while(true){
if((i__18524__auto___52312 < len__18523__auto___52311)){
args52308.push((arguments[i__18524__auto___52312]));

var G__52313 = (i__18524__auto___52312 + (1));
i__18524__auto___52312 = G__52313;
continue;
} else {
}
break;
}

var G__52310 = args52308.length;
switch (G__52310) {
case 1:
return jayq.core.next.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.next.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args52308.length)].join('')));

}
});

jayq.core.next.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.next();
});

jayq.core.next.cljs$core$IFn$_invoke$arity$2 = (function ($elem,selector){
return $elem.next(cljs.core.name.call(null,selector));
});

jayq.core.next.cljs$lang$maxFixedArity = 2;

jayq.core.prev = (function jayq$core$prev(var_args){
var args52315 = [];
var len__18523__auto___52318 = arguments.length;
var i__18524__auto___52319 = (0);
while(true){
if((i__18524__auto___52319 < len__18523__auto___52318)){
args52315.push((arguments[i__18524__auto___52319]));

var G__52320 = (i__18524__auto___52319 + (1));
i__18524__auto___52319 = G__52320;
continue;
} else {
}
break;
}

var G__52317 = args52315.length;
switch (G__52317) {
case 1:
return jayq.core.prev.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.prev.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args52315.length)].join('')));

}
});

jayq.core.prev.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.prev();
});

jayq.core.prev.cljs$core$IFn$_invoke$arity$2 = (function ($elem,selector){
return $elem.prev(cljs.core.name.call(null,selector));
});

jayq.core.prev.cljs$lang$maxFixedArity = 2;

jayq.core.next_all = (function jayq$core$next_all(var_args){
var args52322 = [];
var len__18523__auto___52325 = arguments.length;
var i__18524__auto___52326 = (0);
while(true){
if((i__18524__auto___52326 < len__18523__auto___52325)){
args52322.push((arguments[i__18524__auto___52326]));

var G__52327 = (i__18524__auto___52326 + (1));
i__18524__auto___52326 = G__52327;
continue;
} else {
}
break;
}

var G__52324 = args52322.length;
switch (G__52324) {
case 1:
return jayq.core.next_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.next_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args52322.length)].join('')));

}
});

jayq.core.next_all.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.nextAll();
});

jayq.core.next_all.cljs$core$IFn$_invoke$arity$2 = (function ($elem,selector){
return $elem.nextAll(cljs.core.name.call(null,selector));
});

jayq.core.next_all.cljs$lang$maxFixedArity = 2;

jayq.core.prev_all = (function jayq$core$prev_all(var_args){
var args52329 = [];
var len__18523__auto___52332 = arguments.length;
var i__18524__auto___52333 = (0);
while(true){
if((i__18524__auto___52333 < len__18523__auto___52332)){
args52329.push((arguments[i__18524__auto___52333]));

var G__52334 = (i__18524__auto___52333 + (1));
i__18524__auto___52333 = G__52334;
continue;
} else {
}
break;
}

var G__52331 = args52329.length;
switch (G__52331) {
case 1:
return jayq.core.prev_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.prev_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args52329.length)].join('')));

}
});

jayq.core.prev_all.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.prevAll();
});

jayq.core.prev_all.cljs$core$IFn$_invoke$arity$2 = (function ($elem,selector){
return $elem.prevAll(cljs.core.name.call(null,selector));
});

jayq.core.prev_all.cljs$lang$maxFixedArity = 2;

jayq.core.next_until = (function jayq$core$next_until(var_args){
var args52336 = [];
var len__18523__auto___52339 = arguments.length;
var i__18524__auto___52340 = (0);
while(true){
if((i__18524__auto___52340 < len__18523__auto___52339)){
args52336.push((arguments[i__18524__auto___52340]));

var G__52341 = (i__18524__auto___52340 + (1));
i__18524__auto___52340 = G__52341;
continue;
} else {
}
break;
}

var G__52338 = args52336.length;
switch (G__52338) {
case 1:
return jayq.core.next_until.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.next_until.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return jayq.core.next_until.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args52336.length)].join('')));

}
});

jayq.core.next_until.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.nextUntil();
});

jayq.core.next_until.cljs$core$IFn$_invoke$arity$2 = (function ($elem,selector){
return $elem.nextUntil(jayq.core.__GT_selector.call(null,selector));
});

jayq.core.next_until.cljs$core$IFn$_invoke$arity$3 = (function ($elem,selector,filtr){
return $elem.nextUntil(jayq.core.__GT_selector.call(null,selector),cljs.core.name.call(null,filtr));
});

jayq.core.next_until.cljs$lang$maxFixedArity = 3;

jayq.core.prev_until = (function jayq$core$prev_until(var_args){
var args52343 = [];
var len__18523__auto___52346 = arguments.length;
var i__18524__auto___52347 = (0);
while(true){
if((i__18524__auto___52347 < len__18523__auto___52346)){
args52343.push((arguments[i__18524__auto___52347]));

var G__52348 = (i__18524__auto___52347 + (1));
i__18524__auto___52347 = G__52348;
continue;
} else {
}
break;
}

var G__52345 = args52343.length;
switch (G__52345) {
case 1:
return jayq.core.prev_until.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.prev_until.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return jayq.core.prev_until.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args52343.length)].join('')));

}
});

jayq.core.prev_until.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.prevUntil();
});

jayq.core.prev_until.cljs$core$IFn$_invoke$arity$2 = (function ($elem,selector){
return $elem.prevUntil(jayq.core.__GT_selector.call(null,selector));
});

jayq.core.prev_until.cljs$core$IFn$_invoke$arity$3 = (function ($elem,selector,filtr){
return $elem.prevUntil(jayq.core.__GT_selector.call(null,selector),cljs.core.name.call(null,filtr));
});

jayq.core.prev_until.cljs$lang$maxFixedArity = 3;

jayq.core.find = (function jayq$core$find($elem,selector){
return $elem.find(cljs.core.name.call(null,selector));
});
jayq.core.closest = (function jayq$core$closest(var_args){
var args__18530__auto__ = [];
var len__18523__auto___52357 = arguments.length;
var i__18524__auto___52358 = (0);
while(true){
if((i__18524__auto___52358 < len__18523__auto___52357)){
args__18530__auto__.push((arguments[i__18524__auto___52358]));

var G__52359 = (i__18524__auto___52358 + (1));
i__18524__auto___52358 = G__52359;
continue;
} else {
}
break;
}

var argseq__18531__auto__ = ((((2) < args__18530__auto__.length))?(new cljs.core.IndexedSeq(args__18530__auto__.slice((2)),(0),null)):null);
return jayq.core.closest.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__18531__auto__);
});

jayq.core.closest.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,selector,p__52353){
var vec__52354 = p__52353;
var context = cljs.core.nth.call(null,vec__52354,(0),null);
return $elem.closest(jayq.core.__GT_selector.call(null,selector),context);
});

jayq.core.closest.cljs$lang$maxFixedArity = (2);

jayq.core.closest.cljs$lang$applyTo = (function (seq52350){
var G__52351 = cljs.core.first.call(null,seq52350);
var seq52350__$1 = cljs.core.next.call(null,seq52350);
var G__52352 = cljs.core.first.call(null,seq52350__$1);
var seq52350__$2 = cljs.core.next.call(null,seq52350__$1);
return jayq.core.closest.cljs$core$IFn$_invoke$arity$variadic(G__52351,G__52352,seq52350__$2);
});

jayq.core.clone = (function jayq$core$clone($elem){
return $elem.clone();
});
jayq.core.html = (function jayq$core$html(var_args){
var args52360 = [];
var len__18523__auto___52363 = arguments.length;
var i__18524__auto___52364 = (0);
while(true){
if((i__18524__auto___52364 < len__18523__auto___52363)){
args52360.push((arguments[i__18524__auto___52364]));

var G__52365 = (i__18524__auto___52364 + (1));
i__18524__auto___52364 = G__52365;
continue;
} else {
}
break;
}

var G__52362 = args52360.length;
switch (G__52362) {
case 2:
return jayq.core.html.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.html.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args52360.length)].join('')));

}
});

jayq.core.html.cljs$core$IFn$_invoke$arity$2 = (function ($elem,v){
return $elem.html(v);
});

jayq.core.html.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.html();
});

jayq.core.html.cljs$lang$maxFixedArity = 2;

jayq.core.inner = jayq.core.html;
jayq.core.empty = (function jayq$core$empty($elem){
return $elem.empty();
});
jayq.core.val = (function jayq$core$val(var_args){
var args52367 = [];
var len__18523__auto___52370 = arguments.length;
var i__18524__auto___52371 = (0);
while(true){
if((i__18524__auto___52371 < len__18523__auto___52370)){
args52367.push((arguments[i__18524__auto___52371]));

var G__52372 = (i__18524__auto___52371 + (1));
i__18524__auto___52371 = G__52372;
continue;
} else {
}
break;
}

var G__52369 = args52367.length;
switch (G__52369) {
case 2:
return jayq.core.val.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.val.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args52367.length)].join('')));

}
});

jayq.core.val.cljs$core$IFn$_invoke$arity$2 = (function ($elem,v){
return $elem.val(v);
});

jayq.core.val.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.val();
});

jayq.core.val.cljs$lang$maxFixedArity = 2;

jayq.core.serialize = (function jayq$core$serialize($elem){
return $elem.serialize();
});
jayq.core.queue = (function jayq$core$queue(var_args){
var args52374 = [];
var len__18523__auto___52377 = arguments.length;
var i__18524__auto___52378 = (0);
while(true){
if((i__18524__auto___52378 < len__18523__auto___52377)){
args52374.push((arguments[i__18524__auto___52378]));

var G__52379 = (i__18524__auto___52378 + (1));
i__18524__auto___52378 = G__52379;
continue;
} else {
}
break;
}

var G__52376 = args52374.length;
switch (G__52376) {
case 3:
return jayq.core.queue.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return jayq.core.queue.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.queue.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args52374.length)].join('')));

}
});

jayq.core.queue.cljs$core$IFn$_invoke$arity$3 = (function ($elem,x,y){
return $elem.queue(x,y);
});

jayq.core.queue.cljs$core$IFn$_invoke$arity$2 = (function ($elem,x){
return $elem.queue(x);
});

jayq.core.queue.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.queue();
});

jayq.core.queue.cljs$lang$maxFixedArity = 3;

jayq.core.dequeue = (function jayq$core$dequeue(var_args){
var args52381 = [];
var len__18523__auto___52384 = arguments.length;
var i__18524__auto___52385 = (0);
while(true){
if((i__18524__auto___52385 < len__18523__auto___52384)){
args52381.push((arguments[i__18524__auto___52385]));

var G__52386 = (i__18524__auto___52385 + (1));
i__18524__auto___52385 = G__52386;
continue;
} else {
}
break;
}

var G__52383 = args52381.length;
switch (G__52383) {
case 2:
return jayq.core.dequeue.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.dequeue.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args52381.length)].join('')));

}
});

jayq.core.dequeue.cljs$core$IFn$_invoke$arity$2 = (function ($elem,queue_name){
return $elem.dequeue(queue_name);
});

jayq.core.dequeue.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.dequeue();
});

jayq.core.dequeue.cljs$lang$maxFixedArity = 2;

jayq.core.document_ready = (function jayq$core$document_ready(func){
return jayq.core.$.call(null,document).ready(func);
});
jayq.core.mimetype_converter = (function jayq$core$mimetype_converter(s){
return cljs.reader.read_string.call(null,[cljs.core.str(s)].join(''));
});
jQuery.ajaxSetup(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"accepts","accepts",1429714104),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"edn","edn",1317840885),"application/edn, text/edn",new cljs.core.Keyword(null,"clojure","clojure",438975815),"application/clojure, text/clojure"], null),new cljs.core.Keyword(null,"contents","contents",-1567174023),new cljs.core.PersistentArrayMap(null, 1, ["clojure",/edn|clojure/], null),new cljs.core.Keyword(null,"converters","converters",195533259),new cljs.core.PersistentArrayMap(null, 2, ["text edn",jayq.core.mimetype_converter,"text clojure",jayq.core.mimetype_converter], null)], null)));
jayq.core.clj_content_type_QMARK_ = (function jayq$core$clj_content_type_QMARK_(x){
return cljs.core.re_find.call(null,/^(text|application)\/(clojure|edn)/,x);
});
jayq.core.__GT_content_type = (function jayq$core$__GT_content_type(ct){
if(typeof ct === 'string'){
return ct;
} else {
if((ct instanceof cljs.core.Keyword)){
return cljs.core.subs.call(null,[cljs.core.str(ct)].join(''),(1));
} else {
return null;
}
}
});
jayq.core.preprocess_request = (function jayq$core$preprocess_request(p__52390){
var map__52393 = p__52390;
var map__52393__$1 = ((((!((map__52393 == null)))?((((map__52393.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52393.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52393):map__52393);
var request = map__52393__$1;
var data = cljs.core.get.call(null,map__52393__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var contentType = cljs.core.get.call(null,map__52393__$1,new cljs.core.Keyword(null,"contentType","contentType",-1462509576));
var ct = jayq.core.__GT_content_type.call(null,contentType);
return ((function (ct,map__52393,map__52393__$1,request,data,contentType){
return (function (p1__52389_SHARP_){
if(cljs.core.truth_((function (){var and__17403__auto__ = ct;
if(cljs.core.truth_(and__17403__auto__)){
return jayq.core.clj_content_type_QMARK_.call(null,ct);
} else {
return and__17403__auto__;
}
})())){
return cljs.core.assoc.call(null,p1__52389_SHARP_,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.pr_str.call(null,data));
} else {
return p1__52389_SHARP_;
}
});})(ct,map__52393,map__52393__$1,request,data,contentType))
.call(null,((function (ct,map__52393,map__52393__$1,request,data,contentType){
return (function (p1__52388_SHARP_){
if(cljs.core.truth_(ct)){
return cljs.core.assoc.call(null,p1__52388_SHARP_,new cljs.core.Keyword(null,"contentType","contentType",-1462509576),ct);
} else {
return p1__52388_SHARP_;
}
});})(ct,map__52393,map__52393__$1,request,data,contentType))
.call(null,request));
});
jayq.core.__GT_ajax_settings = (function jayq$core$__GT_ajax_settings(request){
return cljs.core.clj__GT_js.call(null,jayq.core.preprocess_request.call(null,request));
});
jayq.core.ajax = (function jayq$core$ajax(var_args){
var args52395 = [];
var len__18523__auto___52398 = arguments.length;
var i__18524__auto___52399 = (0);
while(true){
if((i__18524__auto___52399 < len__18523__auto___52398)){
args52395.push((arguments[i__18524__auto___52399]));

var G__52400 = (i__18524__auto___52399 + (1));
i__18524__auto___52399 = G__52400;
continue;
} else {
}
break;
}

var G__52397 = args52395.length;
switch (G__52397) {
case 2:
return jayq.core.ajax.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.ajax.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args52395.length)].join('')));

}
});

jayq.core.ajax.cljs$core$IFn$_invoke$arity$2 = (function (url,settings){
return jQuery.ajax(url,jayq.core.__GT_ajax_settings.call(null,settings));
});

jayq.core.ajax.cljs$core$IFn$_invoke$arity$1 = (function (settings){
return jQuery.ajax(jayq.core.__GT_ajax_settings.call(null,settings));
});

jayq.core.ajax.cljs$lang$maxFixedArity = 2;

jayq.core.xhr = (function jayq$core$xhr(p__52402,content,callback){
var vec__52406 = p__52402;
var method = cljs.core.nth.call(null,vec__52406,(0),null);
var uri = cljs.core.nth.call(null,vec__52406,(1),null);
var params = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),clojure.string.upper_case.call(null,cljs.core.name.call(null,method)),new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.clj__GT_js.call(null,content),new cljs.core.Keyword(null,"success","success",1890645906),callback], null));
return jQuery.ajax(uri,params);
});
/**
 * Reads clojure data from element content (preferably a script tag with type=edn/clojure)
 */
jayq.core.read = (function jayq$core$read($elem){
return cljs.reader.read_string.call(null,jayq.core.html.call(null,$elem));
});
jayq.core.$contains = jQuery.contains;
jayq.core.bind = (function jayq$core$bind($elem,ev,func){
return $elem.bind(cljs.core.name.call(null,ev),func);
});
jayq.core.unbind = (function jayq$core$unbind(var_args){
var args__18530__auto__ = [];
var len__18523__auto___52416 = arguments.length;
var i__18524__auto___52417 = (0);
while(true){
if((i__18524__auto___52417 < len__18523__auto___52416)){
args__18530__auto__.push((arguments[i__18524__auto___52417]));

var G__52418 = (i__18524__auto___52417 + (1));
i__18524__auto___52417 = G__52418;
continue;
} else {
}
break;
}

var argseq__18531__auto__ = ((((2) < args__18530__auto__.length))?(new cljs.core.IndexedSeq(args__18530__auto__.slice((2)),(0),null)):null);
return jayq.core.unbind.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__18531__auto__);
});

jayq.core.unbind.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,ev,p__52412){
var vec__52413 = p__52412;
var func = cljs.core.nth.call(null,vec__52413,(0),null);
return $elem.unbind(cljs.core.name.call(null,ev),func);
});

jayq.core.unbind.cljs$lang$maxFixedArity = (2);

jayq.core.unbind.cljs$lang$applyTo = (function (seq52409){
var G__52410 = cljs.core.first.call(null,seq52409);
var seq52409__$1 = cljs.core.next.call(null,seq52409);
var G__52411 = cljs.core.first.call(null,seq52409__$1);
var seq52409__$2 = cljs.core.next.call(null,seq52409__$1);
return jayq.core.unbind.cljs$core$IFn$_invoke$arity$variadic(G__52410,G__52411,seq52409__$2);
});

jayq.core.trigger = (function jayq$core$trigger($elem,ev){
return $elem.trigger(cljs.core.name.call(null,ev));
});
jayq.core.delegate = (function jayq$core$delegate($elem,sel,ev,func){
return $elem.delegate(jayq.core.__GT_selector.call(null,sel),cljs.core.name.call(null,ev),func);
});
jayq.core.__GT_event = (function jayq$core$__GT_event(e){
if(cljs.core.coll_QMARK_.call(null,e)){
return clojure.string.join.call(null," ",cljs.core.map.call(null,cljs.core.name,e));
} else {
return cljs.core.clj__GT_js.call(null,e);
}
});
jayq.core.on = (function jayq$core$on(var_args){
var args__18530__auto__ = [];
var len__18523__auto___52426 = arguments.length;
var i__18524__auto___52427 = (0);
while(true){
if((i__18524__auto___52427 < len__18523__auto___52426)){
args__18530__auto__.push((arguments[i__18524__auto___52427]));

var G__52428 = (i__18524__auto___52427 + (1));
i__18524__auto___52427 = G__52428;
continue;
} else {
}
break;
}

var argseq__18531__auto__ = ((((2) < args__18530__auto__.length))?(new cljs.core.IndexedSeq(args__18530__auto__.slice((2)),(0),null)):null);
return jayq.core.on.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__18531__auto__);
});

jayq.core.on.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,events,p__52422){
var vec__52423 = p__52422;
var sel = cljs.core.nth.call(null,vec__52423,(0),null);
var data = cljs.core.nth.call(null,vec__52423,(1),null);
var handler = cljs.core.nth.call(null,vec__52423,(2),null);
return $elem.on(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel),data,handler);
});

jayq.core.on.cljs$lang$maxFixedArity = (2);

jayq.core.on.cljs$lang$applyTo = (function (seq52419){
var G__52420 = cljs.core.first.call(null,seq52419);
var seq52419__$1 = cljs.core.next.call(null,seq52419);
var G__52421 = cljs.core.first.call(null,seq52419__$1);
var seq52419__$2 = cljs.core.next.call(null,seq52419__$1);
return jayq.core.on.cljs$core$IFn$_invoke$arity$variadic(G__52420,G__52421,seq52419__$2);
});

jayq.core.one = (function jayq$core$one(var_args){
var args__18530__auto__ = [];
var len__18523__auto___52436 = arguments.length;
var i__18524__auto___52437 = (0);
while(true){
if((i__18524__auto___52437 < len__18523__auto___52436)){
args__18530__auto__.push((arguments[i__18524__auto___52437]));

var G__52438 = (i__18524__auto___52437 + (1));
i__18524__auto___52437 = G__52438;
continue;
} else {
}
break;
}

var argseq__18531__auto__ = ((((2) < args__18530__auto__.length))?(new cljs.core.IndexedSeq(args__18530__auto__.slice((2)),(0),null)):null);
return jayq.core.one.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__18531__auto__);
});

jayq.core.one.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,events,p__52432){
var vec__52433 = p__52432;
var sel = cljs.core.nth.call(null,vec__52433,(0),null);
var data = cljs.core.nth.call(null,vec__52433,(1),null);
var handler = cljs.core.nth.call(null,vec__52433,(2),null);
return $elem.one(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel),data,handler);
});

jayq.core.one.cljs$lang$maxFixedArity = (2);

jayq.core.one.cljs$lang$applyTo = (function (seq52429){
var G__52430 = cljs.core.first.call(null,seq52429);
var seq52429__$1 = cljs.core.next.call(null,seq52429);
var G__52431 = cljs.core.first.call(null,seq52429__$1);
var seq52429__$2 = cljs.core.next.call(null,seq52429__$1);
return jayq.core.one.cljs$core$IFn$_invoke$arity$variadic(G__52430,G__52431,seq52429__$2);
});

jayq.core.off = (function jayq$core$off(var_args){
var args__18530__auto__ = [];
var len__18523__auto___52446 = arguments.length;
var i__18524__auto___52447 = (0);
while(true){
if((i__18524__auto___52447 < len__18523__auto___52446)){
args__18530__auto__.push((arguments[i__18524__auto___52447]));

var G__52448 = (i__18524__auto___52447 + (1));
i__18524__auto___52447 = G__52448;
continue;
} else {
}
break;
}

var argseq__18531__auto__ = ((((2) < args__18530__auto__.length))?(new cljs.core.IndexedSeq(args__18530__auto__.slice((2)),(0),null)):null);
return jayq.core.off.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__18531__auto__);
});

jayq.core.off.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,events,p__52442){
var vec__52443 = p__52442;
var sel = cljs.core.nth.call(null,vec__52443,(0),null);
var handler = cljs.core.nth.call(null,vec__52443,(1),null);
return $elem.off(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel),handler);
});

jayq.core.off.cljs$lang$maxFixedArity = (2);

jayq.core.off.cljs$lang$applyTo = (function (seq52439){
var G__52440 = cljs.core.first.call(null,seq52439);
var seq52439__$1 = cljs.core.next.call(null,seq52439);
var G__52441 = cljs.core.first.call(null,seq52439__$1);
var seq52439__$2 = cljs.core.next.call(null,seq52439__$1);
return jayq.core.off.cljs$core$IFn$_invoke$arity$variadic(G__52440,G__52441,seq52439__$2);
});

jayq.core.prevent = (function jayq$core$prevent(e){
return e.preventDefault();
});
jayq.core.height = (function jayq$core$height(var_args){
var args52449 = [];
var len__18523__auto___52452 = arguments.length;
var i__18524__auto___52453 = (0);
while(true){
if((i__18524__auto___52453 < len__18523__auto___52452)){
args52449.push((arguments[i__18524__auto___52453]));

var G__52454 = (i__18524__auto___52453 + (1));
i__18524__auto___52453 = G__52454;
continue;
} else {
}
break;
}

var G__52451 = args52449.length;
switch (G__52451) {
case 2:
return jayq.core.height.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.height.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args52449.length)].join('')));

}
});

jayq.core.height.cljs$core$IFn$_invoke$arity$2 = (function ($elem,x){
return $elem.height(x);
});

jayq.core.height.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.height();
});

jayq.core.height.cljs$lang$maxFixedArity = 2;

jayq.core.width = (function jayq$core$width(var_args){
var args52456 = [];
var len__18523__auto___52459 = arguments.length;
var i__18524__auto___52460 = (0);
while(true){
if((i__18524__auto___52460 < len__18523__auto___52459)){
args52456.push((arguments[i__18524__auto___52460]));

var G__52461 = (i__18524__auto___52460 + (1));
i__18524__auto___52460 = G__52461;
continue;
} else {
}
break;
}

var G__52458 = args52456.length;
switch (G__52458) {
case 2:
return jayq.core.width.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.width.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args52456.length)].join('')));

}
});

jayq.core.width.cljs$core$IFn$_invoke$arity$2 = (function ($elem,x){
return $elem.width(x);
});

jayq.core.width.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.width();
});

jayq.core.width.cljs$lang$maxFixedArity = 2;

jayq.core.inner_height = (function jayq$core$inner_height($elem){
return $elem.innerHeight();
});
jayq.core.inner_width = (function jayq$core$inner_width($elem){
return $elem.innerWidth();
});
jayq.core.outer_height = (function jayq$core$outer_height($elem){
return $elem.outerHeight();
});
jayq.core.outer_width = (function jayq$core$outer_width($elem){
return $elem.outerWidth();
});
jayq.core.offset = (function jayq$core$offset(var_args){
var args52463 = [];
var len__18523__auto___52466 = arguments.length;
var i__18524__auto___52467 = (0);
while(true){
if((i__18524__auto___52467 < len__18523__auto___52466)){
args52463.push((arguments[i__18524__auto___52467]));

var G__52468 = (i__18524__auto___52467 + (1));
i__18524__auto___52467 = G__52468;
continue;
} else {
}
break;
}

var G__52465 = args52463.length;
switch (G__52465) {
case 2:
return jayq.core.offset.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.offset.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args52463.length)].join('')));

}
});

jayq.core.offset.cljs$core$IFn$_invoke$arity$2 = (function ($elem,coords){
return cljs.core.clj__GT_js.call(null,coords).offset();
});

jayq.core.offset.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return cljs.core.js__GT_clj.call(null,$elem.offset(),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
});

jayq.core.offset.cljs$lang$maxFixedArity = 2;

jayq.core.offset_parent = (function jayq$core$offset_parent($elem){
return $elem.offsetParent();
});
jayq.core.position = (function jayq$core$position($elem){
return cljs.core.js__GT_clj.call(null,$elem.position(),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
});
jayq.core.scroll_left = (function jayq$core$scroll_left(var_args){
var args52470 = [];
var len__18523__auto___52473 = arguments.length;
var i__18524__auto___52474 = (0);
while(true){
if((i__18524__auto___52474 < len__18523__auto___52473)){
args52470.push((arguments[i__18524__auto___52474]));

var G__52475 = (i__18524__auto___52474 + (1));
i__18524__auto___52474 = G__52475;
continue;
} else {
}
break;
}

var G__52472 = args52470.length;
switch (G__52472) {
case 1:
return jayq.core.scroll_left.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.scroll_left.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args52470.length)].join('')));

}
});

jayq.core.scroll_left.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.scrollLeft();
});

jayq.core.scroll_left.cljs$core$IFn$_invoke$arity$2 = (function ($elem,x){
return $elem.scrollLeft(x);
});

jayq.core.scroll_left.cljs$lang$maxFixedArity = 2;

jayq.core.scroll_top = (function jayq$core$scroll_top(var_args){
var args52477 = [];
var len__18523__auto___52480 = arguments.length;
var i__18524__auto___52481 = (0);
while(true){
if((i__18524__auto___52481 < len__18523__auto___52480)){
args52477.push((arguments[i__18524__auto___52481]));

var G__52482 = (i__18524__auto___52481 + (1));
i__18524__auto___52481 = G__52482;
continue;
} else {
}
break;
}

var G__52479 = args52477.length;
switch (G__52479) {
case 1:
return jayq.core.scroll_top.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.scroll_top.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args52477.length)].join('')));

}
});

jayq.core.scroll_top.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.scrollTop();
});

jayq.core.scroll_top.cljs$core$IFn$_invoke$arity$2 = (function ($elem,x){
return $elem.scrollTop(x);
});

jayq.core.scroll_top.cljs$lang$maxFixedArity = 2;

jayq.core.$deferred = jQuery.Deferred;
jayq.core.$when = jQuery.when;
jayq.core.then = (function jayq$core$then(var_args){
var args52484 = [];
var len__18523__auto___52487 = arguments.length;
var i__18524__auto___52488 = (0);
while(true){
if((i__18524__auto___52488 < len__18523__auto___52487)){
args52484.push((arguments[i__18524__auto___52488]));

var G__52489 = (i__18524__auto___52488 + (1));
i__18524__auto___52488 = G__52489;
continue;
} else {
}
break;
}

var G__52486 = args52484.length;
switch (G__52486) {
case 3:
return jayq.core.then.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return jayq.core.then.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args52484.length)].join('')));

}
});

jayq.core.then.cljs$core$IFn$_invoke$arity$3 = (function (deferred,done_fn,fail_fn){
return deferred.then(cljs.core.clj__GT_js.call(null,done_fn),cljs.core.clj__GT_js.call(null,fail_fn));
});

jayq.core.then.cljs$core$IFn$_invoke$arity$4 = (function (deferred,done_fn,fail_fn,progress_fn){
return deferred.then(cljs.core.clj__GT_js.call(null,done_fn),cljs.core.clj__GT_js.call(null,fail_fn),cljs.core.clj__GT_js.call(null,progress_fn));
});

jayq.core.then.cljs$lang$maxFixedArity = 4;

jayq.core.done = (function jayq$core$done(var_args){
var args__18530__auto__ = [];
var len__18523__auto___52493 = arguments.length;
var i__18524__auto___52494 = (0);
while(true){
if((i__18524__auto___52494 < len__18523__auto___52493)){
args__18530__auto__.push((arguments[i__18524__auto___52494]));

var G__52495 = (i__18524__auto___52494 + (1));
i__18524__auto___52494 = G__52495;
continue;
} else {
}
break;
}

var argseq__18531__auto__ = ((((1) < args__18530__auto__.length))?(new cljs.core.IndexedSeq(args__18530__auto__.slice((1)),(0),null)):null);
return jayq.core.done.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__18531__auto__);
});

jayq.core.done.cljs$core$IFn$_invoke$arity$variadic = (function (deferred,fns_args){
return deferred.done.apply(deferred,cljs.core.clj__GT_js.call(null,fns_args));
});

jayq.core.done.cljs$lang$maxFixedArity = (1);

jayq.core.done.cljs$lang$applyTo = (function (seq52491){
var G__52492 = cljs.core.first.call(null,seq52491);
var seq52491__$1 = cljs.core.next.call(null,seq52491);
return jayq.core.done.cljs$core$IFn$_invoke$arity$variadic(G__52492,seq52491__$1);
});

jayq.core.fail = (function jayq$core$fail(var_args){
var args__18530__auto__ = [];
var len__18523__auto___52498 = arguments.length;
var i__18524__auto___52499 = (0);
while(true){
if((i__18524__auto___52499 < len__18523__auto___52498)){
args__18530__auto__.push((arguments[i__18524__auto___52499]));

var G__52500 = (i__18524__auto___52499 + (1));
i__18524__auto___52499 = G__52500;
continue;
} else {
}
break;
}

var argseq__18531__auto__ = ((((1) < args__18530__auto__.length))?(new cljs.core.IndexedSeq(args__18530__auto__.slice((1)),(0),null)):null);
return jayq.core.fail.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__18531__auto__);
});

jayq.core.fail.cljs$core$IFn$_invoke$arity$variadic = (function (deferred,fns_args){
return deferred.fail.apply(deferred,cljs.core.clj__GT_js.call(null,fns_args));
});

jayq.core.fail.cljs$lang$maxFixedArity = (1);

jayq.core.fail.cljs$lang$applyTo = (function (seq52496){
var G__52497 = cljs.core.first.call(null,seq52496);
var seq52496__$1 = cljs.core.next.call(null,seq52496);
return jayq.core.fail.cljs$core$IFn$_invoke$arity$variadic(G__52497,seq52496__$1);
});

jayq.core.progress = (function jayq$core$progress(deferred,fns_args){
return deferred.progress(cljs.core.clj__GT_js.call(null,fns_args));
});
jayq.core.promise = (function jayq$core$promise(var_args){
var args52501 = [];
var len__18523__auto___52504 = arguments.length;
var i__18524__auto___52505 = (0);
while(true){
if((i__18524__auto___52505 < len__18523__auto___52504)){
args52501.push((arguments[i__18524__auto___52505]));

var G__52506 = (i__18524__auto___52505 + (1));
i__18524__auto___52505 = G__52506;
continue;
} else {
}
break;
}

var G__52503 = args52501.length;
switch (G__52503) {
case 1:
return jayq.core.promise.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.promise.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return jayq.core.promise.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args52501.length)].join('')));

}
});

jayq.core.promise.cljs$core$IFn$_invoke$arity$1 = (function (deferred){
return deferred.promise();
});

jayq.core.promise.cljs$core$IFn$_invoke$arity$2 = (function (deferred,type){
return deferred.promise(type);
});

jayq.core.promise.cljs$core$IFn$_invoke$arity$3 = (function (deferred,type,target){
return deferred.promise(type,target);
});

jayq.core.promise.cljs$lang$maxFixedArity = 3;

jayq.core.always = (function jayq$core$always(var_args){
var args__18530__auto__ = [];
var len__18523__auto___52510 = arguments.length;
var i__18524__auto___52511 = (0);
while(true){
if((i__18524__auto___52511 < len__18523__auto___52510)){
args__18530__auto__.push((arguments[i__18524__auto___52511]));

var G__52512 = (i__18524__auto___52511 + (1));
i__18524__auto___52511 = G__52512;
continue;
} else {
}
break;
}

var argseq__18531__auto__ = ((((1) < args__18530__auto__.length))?(new cljs.core.IndexedSeq(args__18530__auto__.slice((1)),(0),null)):null);
return jayq.core.always.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__18531__auto__);
});

jayq.core.always.cljs$core$IFn$_invoke$arity$variadic = (function (deferred,fns_args){
return deferred.always.apply(deferred,cljs.core.clj__GT_js.call(null,fns_args));
});

jayq.core.always.cljs$lang$maxFixedArity = (1);

jayq.core.always.cljs$lang$applyTo = (function (seq52508){
var G__52509 = cljs.core.first.call(null,seq52508);
var seq52508__$1 = cljs.core.next.call(null,seq52508);
return jayq.core.always.cljs$core$IFn$_invoke$arity$variadic(G__52509,seq52508__$1);
});

jayq.core.reject = (function jayq$core$reject(deferred,args){
return deferred.reject(args);
});
jayq.core.reject_with = (function jayq$core$reject_with(deferred,context,args){
return deferred.rejectWith(context,args);
});
jayq.core.notify = (function jayq$core$notify(deferred,args){
return deferred.notify(args);
});
jayq.core.notify_with = (function jayq$core$notify_with(deferred,context,args){
return deferred.notifyWith(context,args);
});
jayq.core.resolve = (function jayq$core$resolve(deferred,args){
return deferred.resolve(args);
});
jayq.core.resolve_with = (function jayq$core$resolve_with(deferred,context,args){
return deferred.resolveWith(context,args);
});
jayq.core.pipe = (function jayq$core$pipe(var_args){
var args52513 = [];
var len__18523__auto___52516 = arguments.length;
var i__18524__auto___52517 = (0);
while(true){
if((i__18524__auto___52517 < len__18523__auto___52516)){
args52513.push((arguments[i__18524__auto___52517]));

var G__52518 = (i__18524__auto___52517 + (1));
i__18524__auto___52517 = G__52518;
continue;
} else {
}
break;
}

var G__52515 = args52513.length;
switch (G__52515) {
case 2:
return jayq.core.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return jayq.core.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return jayq.core.pipe.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args52513.length)].join('')));

}
});

jayq.core.pipe.cljs$core$IFn$_invoke$arity$2 = (function (deferred,done_filter){
return deferred.pipe(done_filter);
});

jayq.core.pipe.cljs$core$IFn$_invoke$arity$3 = (function (deferred,done_filter,fail_filter){
return deferred.pipe(done_filter,fail_filter);
});

jayq.core.pipe.cljs$core$IFn$_invoke$arity$4 = (function (deferred,done_filter,fail_filter,progress_filter){
return deferred.pipe(done_filter,fail_filter,progress_filter);
});

jayq.core.pipe.cljs$lang$maxFixedArity = 4;

jayq.core.state = (function jayq$core$state(deferred){
return cljs.core.keyword.call(null,deferred.state());
});
jayq.core.deferred_m = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"return","return",-1891502105),jayq.core.$when,new cljs.core.Keyword(null,"bind","bind",-113428417),(function (x,f){
var dfd = jayq.core.$deferred.call(null);
jayq.core.done.call(null,x,((function (dfd){
return (function (v){
return jayq.core.done.call(null,f.call(null,v),cljs.core.partial.call(null,jayq.core.resolve,dfd));
});})(dfd))
);

return jayq.core.promise.call(null,dfd);
}),new cljs.core.Keyword(null,"zero","zero",-858964576),cljs.core.identity], null);
jayq.core.ajax_m = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"return","return",-1891502105),cljs.core.identity,new cljs.core.Keyword(null,"bind","bind",-113428417),(function (x,f){
return jayq.core.done.call(null,jayq.core.ajax.call(null,x),f);
}),new cljs.core.Keyword(null,"zero","zero",-858964576),cljs.core.identity], null);

//# sourceMappingURL=core.js.map?rel=1483596057177