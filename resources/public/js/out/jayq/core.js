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
var args8703 = [];
var len__7785__auto___8706 = arguments.length;
var i__7786__auto___8707 = (0);
while(true){
if((i__7786__auto___8707 < len__7785__auto___8706)){
args8703.push((arguments[i__7786__auto___8707]));

var G__8708 = (i__7786__auto___8707 + (1));
i__7786__auto___8707 = G__8708;
continue;
} else {
}
break;
}

var G__8705 = args8703.length;
switch (G__8705) {
case 1:
return jayq.core.$.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.$.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8703.length)].join('')));

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
var or__6677__auto__ = this$__$1.slice(k,(k + (1)));
if(cljs.core.truth_(or__6677__auto__)){
return or__6677__auto__;
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
var G__8711 = null;
var G__8711__2 = (function (self__,k){
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,k);
});
var G__8711__3 = (function (self__,k,not_found){
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,k,not_found);
});
G__8711 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__8711__2.call(this,self__,k);
case 3:
return G__8711__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__8711.cljs$core$IFn$_invoke$arity$2 = G__8711__2;
G__8711.cljs$core$IFn$_invoke$arity$3 = G__8711__3;
return G__8711;
})()
;

jQuery.prototype.apply = (function (self__,args8710){
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args8710)));
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
var args__7792__auto__ = [];
var len__7785__auto___8719 = arguments.length;
var i__7786__auto___8720 = (0);
while(true){
if((i__7786__auto___8720 < len__7785__auto___8719)){
args__7792__auto__.push((arguments[i__7786__auto___8720]));

var G__8721 = (i__7786__auto___8720 + (1));
i__7786__auto___8720 = G__8721;
continue;
} else {
}
break;
}

var argseq__7793__auto__ = ((((2) < args__7792__auto__.length))?(new cljs.core.IndexedSeq(args__7792__auto__.slice((2)),(0),null)):null);
return jayq.core.anim.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7793__auto__);
});

jayq.core.anim.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,props,p__8715){
var vec__8716 = p__8715;
var speed = cljs.core.nth.call(null,vec__8716,(0),null);
var on_finish = cljs.core.nth.call(null,vec__8716,(1),null);
return $elem.animate(cljs.core.clj__GT_js.call(null,props),speed,on_finish);
});

jayq.core.anim.cljs$lang$maxFixedArity = (2);

jayq.core.anim.cljs$lang$applyTo = (function (seq8712){
var G__8713 = cljs.core.first.call(null,seq8712);
var seq8712__$1 = cljs.core.next.call(null,seq8712);
var G__8714 = cljs.core.first.call(null,seq8712__$1);
var seq8712__$2 = cljs.core.next.call(null,seq8712__$1);
return jayq.core.anim.cljs$core$IFn$_invoke$arity$variadic(G__8713,G__8714,seq8712__$2);
});

jayq.core.text = (function jayq$core$text(var_args){
var args8722 = [];
var len__7785__auto___8725 = arguments.length;
var i__7786__auto___8726 = (0);
while(true){
if((i__7786__auto___8726 < len__7785__auto___8725)){
args8722.push((arguments[i__7786__auto___8726]));

var G__8727 = (i__7786__auto___8726 + (1));
i__7786__auto___8726 = G__8727;
continue;
} else {
}
break;
}

var G__8724 = args8722.length;
switch (G__8724) {
case 1:
return jayq.core.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8722.length)].join('')));

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
var args8729 = [];
var len__7785__auto___8732 = arguments.length;
var i__7786__auto___8733 = (0);
while(true){
if((i__7786__auto___8733 < len__7785__auto___8732)){
args8729.push((arguments[i__7786__auto___8733]));

var G__8734 = (i__7786__auto___8733 + (1));
i__7786__auto___8733 = G__8734;
continue;
} else {
}
break;
}

var G__8731 = args8729.length;
switch (G__8731) {
case 2:
return jayq.core.css.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return jayq.core.css.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8729.length)].join('')));

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
var args8736 = [];
var len__7785__auto___8739 = arguments.length;
var i__7786__auto___8740 = (0);
while(true){
if((i__7786__auto___8740 < len__7785__auto___8739)){
args8736.push((arguments[i__7786__auto___8740]));

var G__8741 = (i__7786__auto___8740 + (1));
i__7786__auto___8740 = G__8741;
continue;
} else {
}
break;
}

var G__8738 = args8736.length;
switch (G__8738) {
case 3:
return jayq.core.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return jayq.core.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8736.length)].join('')));

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
var args8743 = [];
var len__7785__auto___8746 = arguments.length;
var i__7786__auto___8747 = (0);
while(true){
if((i__7786__auto___8747 < len__7785__auto___8746)){
args8743.push((arguments[i__7786__auto___8747]));

var G__8748 = (i__7786__auto___8747 + (1));
i__7786__auto___8747 = G__8748;
continue;
} else {
}
break;
}

var G__8745 = args8743.length;
switch (G__8745) {
case 3:
return jayq.core.prop.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return jayq.core.prop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8743.length)].join('')));

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
var args8750 = [];
var len__7785__auto___8753 = arguments.length;
var i__7786__auto___8754 = (0);
while(true){
if((i__7786__auto___8754 < len__7785__auto___8753)){
args8750.push((arguments[i__7786__auto___8754]));

var G__8755 = (i__7786__auto___8754 + (1));
i__7786__auto___8754 = G__8755;
continue;
} else {
}
break;
}

var G__8752 = args8750.length;
switch (G__8752) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8750.length)].join('')));

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
var args8757 = [];
var len__7785__auto___8760 = arguments.length;
var i__7786__auto___8761 = (0);
while(true){
if((i__7786__auto___8761 < len__7785__auto___8760)){
args8757.push((arguments[i__7786__auto___8761]));

var G__8762 = (i__7786__auto___8761 + (1));
i__7786__auto___8761 = G__8762;
continue;
} else {
}
break;
}

var G__8759 = args8757.length;
switch (G__8759) {
case 1:
return jayq.core.remove_class.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.remove_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8757.length)].join('')));

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
var args8764 = [];
var len__7785__auto___8767 = arguments.length;
var i__7786__auto___8768 = (0);
while(true){
if((i__7786__auto___8768 < len__7785__auto___8767)){
args8764.push((arguments[i__7786__auto___8768]));

var G__8769 = (i__7786__auto___8768 + (1));
i__7786__auto___8768 = G__8769;
continue;
} else {
}
break;
}

var G__8766 = args8764.length;
switch (G__8766) {
case 2:
return jayq.core.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return jayq.core.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8764.length)].join('')));

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
var args__7792__auto__ = [];
var len__7785__auto___8777 = arguments.length;
var i__7786__auto___8778 = (0);
while(true){
if((i__7786__auto___8778 < len__7785__auto___8777)){
args__7792__auto__.push((arguments[i__7786__auto___8778]));

var G__8779 = (i__7786__auto___8778 + (1));
i__7786__auto___8778 = G__8779;
continue;
} else {
}
break;
}

var argseq__7793__auto__ = ((((1) < args__7792__auto__.length))?(new cljs.core.IndexedSeq(args__7792__auto__.slice((1)),(0),null)):null);
return jayq.core.hide.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7793__auto__);
});

jayq.core.hide.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,p__8773){
var vec__8774 = p__8773;
var speed = cljs.core.nth.call(null,vec__8774,(0),null);
var on_finish = cljs.core.nth.call(null,vec__8774,(1),null);
return $elem.hide(speed,on_finish);
});

jayq.core.hide.cljs$lang$maxFixedArity = (1);

jayq.core.hide.cljs$lang$applyTo = (function (seq8771){
var G__8772 = cljs.core.first.call(null,seq8771);
var seq8771__$1 = cljs.core.next.call(null,seq8771);
return jayq.core.hide.cljs$core$IFn$_invoke$arity$variadic(G__8772,seq8771__$1);
});

jayq.core.show = (function jayq$core$show(var_args){
var args__7792__auto__ = [];
var len__7785__auto___8786 = arguments.length;
var i__7786__auto___8787 = (0);
while(true){
if((i__7786__auto___8787 < len__7785__auto___8786)){
args__7792__auto__.push((arguments[i__7786__auto___8787]));

var G__8788 = (i__7786__auto___8787 + (1));
i__7786__auto___8787 = G__8788;
continue;
} else {
}
break;
}

var argseq__7793__auto__ = ((((1) < args__7792__auto__.length))?(new cljs.core.IndexedSeq(args__7792__auto__.slice((1)),(0),null)):null);
return jayq.core.show.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7793__auto__);
});

jayq.core.show.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,p__8782){
var vec__8783 = p__8782;
var speed = cljs.core.nth.call(null,vec__8783,(0),null);
var on_finish = cljs.core.nth.call(null,vec__8783,(1),null);
return $elem.show(speed,on_finish);
});

jayq.core.show.cljs$lang$maxFixedArity = (1);

jayq.core.show.cljs$lang$applyTo = (function (seq8780){
var G__8781 = cljs.core.first.call(null,seq8780);
var seq8780__$1 = cljs.core.next.call(null,seq8780);
return jayq.core.show.cljs$core$IFn$_invoke$arity$variadic(G__8781,seq8780__$1);
});

jayq.core.toggle = (function jayq$core$toggle(var_args){
var args__7792__auto__ = [];
var len__7785__auto___8795 = arguments.length;
var i__7786__auto___8796 = (0);
while(true){
if((i__7786__auto___8796 < len__7785__auto___8795)){
args__7792__auto__.push((arguments[i__7786__auto___8796]));

var G__8797 = (i__7786__auto___8796 + (1));
i__7786__auto___8796 = G__8797;
continue;
} else {
}
break;
}

var argseq__7793__auto__ = ((((1) < args__7792__auto__.length))?(new cljs.core.IndexedSeq(args__7792__auto__.slice((1)),(0),null)):null);
return jayq.core.toggle.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7793__auto__);
});

jayq.core.toggle.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,p__8791){
var vec__8792 = p__8791;
var speed = cljs.core.nth.call(null,vec__8792,(0),null);
var on_finish = cljs.core.nth.call(null,vec__8792,(1),null);
return $elem.toggle(speed,on_finish);
});

jayq.core.toggle.cljs$lang$maxFixedArity = (1);

jayq.core.toggle.cljs$lang$applyTo = (function (seq8789){
var G__8790 = cljs.core.first.call(null,seq8789);
var seq8789__$1 = cljs.core.next.call(null,seq8789);
return jayq.core.toggle.cljs$core$IFn$_invoke$arity$variadic(G__8790,seq8789__$1);
});

jayq.core.fade_out = (function jayq$core$fade_out(var_args){
var args__7792__auto__ = [];
var len__7785__auto___8804 = arguments.length;
var i__7786__auto___8805 = (0);
while(true){
if((i__7786__auto___8805 < len__7785__auto___8804)){
args__7792__auto__.push((arguments[i__7786__auto___8805]));

var G__8806 = (i__7786__auto___8805 + (1));
i__7786__auto___8805 = G__8806;
continue;
} else {
}
break;
}

var argseq__7793__auto__ = ((((1) < args__7792__auto__.length))?(new cljs.core.IndexedSeq(args__7792__auto__.slice((1)),(0),null)):null);
return jayq.core.fade_out.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7793__auto__);
});

jayq.core.fade_out.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,p__8800){
var vec__8801 = p__8800;
var speed = cljs.core.nth.call(null,vec__8801,(0),null);
var on_finish = cljs.core.nth.call(null,vec__8801,(1),null);
return $elem.fadeOut(speed,on_finish);
});

jayq.core.fade_out.cljs$lang$maxFixedArity = (1);

jayq.core.fade_out.cljs$lang$applyTo = (function (seq8798){
var G__8799 = cljs.core.first.call(null,seq8798);
var seq8798__$1 = cljs.core.next.call(null,seq8798);
return jayq.core.fade_out.cljs$core$IFn$_invoke$arity$variadic(G__8799,seq8798__$1);
});

jayq.core.fade_in = (function jayq$core$fade_in(var_args){
var args__7792__auto__ = [];
var len__7785__auto___8813 = arguments.length;
var i__7786__auto___8814 = (0);
while(true){
if((i__7786__auto___8814 < len__7785__auto___8813)){
args__7792__auto__.push((arguments[i__7786__auto___8814]));

var G__8815 = (i__7786__auto___8814 + (1));
i__7786__auto___8814 = G__8815;
continue;
} else {
}
break;
}

var argseq__7793__auto__ = ((((1) < args__7792__auto__.length))?(new cljs.core.IndexedSeq(args__7792__auto__.slice((1)),(0),null)):null);
return jayq.core.fade_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7793__auto__);
});

jayq.core.fade_in.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,p__8809){
var vec__8810 = p__8809;
var speed = cljs.core.nth.call(null,vec__8810,(0),null);
var on_finish = cljs.core.nth.call(null,vec__8810,(1),null);
return $elem.fadeIn(speed,on_finish);
});

jayq.core.fade_in.cljs$lang$maxFixedArity = (1);

jayq.core.fade_in.cljs$lang$applyTo = (function (seq8807){
var G__8808 = cljs.core.first.call(null,seq8807);
var seq8807__$1 = cljs.core.next.call(null,seq8807);
return jayq.core.fade_in.cljs$core$IFn$_invoke$arity$variadic(G__8808,seq8807__$1);
});

jayq.core.slide_up = (function jayq$core$slide_up(var_args){
var args__7792__auto__ = [];
var len__7785__auto___8822 = arguments.length;
var i__7786__auto___8823 = (0);
while(true){
if((i__7786__auto___8823 < len__7785__auto___8822)){
args__7792__auto__.push((arguments[i__7786__auto___8823]));

var G__8824 = (i__7786__auto___8823 + (1));
i__7786__auto___8823 = G__8824;
continue;
} else {
}
break;
}

var argseq__7793__auto__ = ((((1) < args__7792__auto__.length))?(new cljs.core.IndexedSeq(args__7792__auto__.slice((1)),(0),null)):null);
return jayq.core.slide_up.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7793__auto__);
});

jayq.core.slide_up.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,p__8818){
var vec__8819 = p__8818;
var speed = cljs.core.nth.call(null,vec__8819,(0),null);
var on_finish = cljs.core.nth.call(null,vec__8819,(1),null);
return $elem.slideUp(speed,on_finish);
});

jayq.core.slide_up.cljs$lang$maxFixedArity = (1);

jayq.core.slide_up.cljs$lang$applyTo = (function (seq8816){
var G__8817 = cljs.core.first.call(null,seq8816);
var seq8816__$1 = cljs.core.next.call(null,seq8816);
return jayq.core.slide_up.cljs$core$IFn$_invoke$arity$variadic(G__8817,seq8816__$1);
});

jayq.core.slide_down = (function jayq$core$slide_down(var_args){
var args__7792__auto__ = [];
var len__7785__auto___8831 = arguments.length;
var i__7786__auto___8832 = (0);
while(true){
if((i__7786__auto___8832 < len__7785__auto___8831)){
args__7792__auto__.push((arguments[i__7786__auto___8832]));

var G__8833 = (i__7786__auto___8832 + (1));
i__7786__auto___8832 = G__8833;
continue;
} else {
}
break;
}

var argseq__7793__auto__ = ((((1) < args__7792__auto__.length))?(new cljs.core.IndexedSeq(args__7792__auto__.slice((1)),(0),null)):null);
return jayq.core.slide_down.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7793__auto__);
});

jayq.core.slide_down.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,p__8827){
var vec__8828 = p__8827;
var speed = cljs.core.nth.call(null,vec__8828,(0),null);
var on_finish = cljs.core.nth.call(null,vec__8828,(1),null);
return $elem.slideDown(speed,on_finish);
});

jayq.core.slide_down.cljs$lang$maxFixedArity = (1);

jayq.core.slide_down.cljs$lang$applyTo = (function (seq8825){
var G__8826 = cljs.core.first.call(null,seq8825);
var seq8825__$1 = cljs.core.next.call(null,seq8825);
return jayq.core.slide_down.cljs$core$IFn$_invoke$arity$variadic(G__8826,seq8825__$1);
});

jayq.core.siblings = (function jayq$core$siblings(var_args){
var args8834 = [];
var len__7785__auto___8837 = arguments.length;
var i__7786__auto___8838 = (0);
while(true){
if((i__7786__auto___8838 < len__7785__auto___8837)){
args8834.push((arguments[i__7786__auto___8838]));

var G__8839 = (i__7786__auto___8838 + (1));
i__7786__auto___8838 = G__8839;
continue;
} else {
}
break;
}

var G__8836 = args8834.length;
switch (G__8836) {
case 1:
return jayq.core.siblings.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.siblings.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8834.length)].join('')));

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
var args8841 = [];
var len__7785__auto___8844 = arguments.length;
var i__7786__auto___8845 = (0);
while(true){
if((i__7786__auto___8845 < len__7785__auto___8844)){
args8841.push((arguments[i__7786__auto___8845]));

var G__8846 = (i__7786__auto___8845 + (1));
i__7786__auto___8845 = G__8846;
continue;
} else {
}
break;
}

var G__8843 = args8841.length;
switch (G__8843) {
case 1:
return jayq.core.parents.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.parents.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8841.length)].join('')));

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
var args8848 = [];
var len__7785__auto___8851 = arguments.length;
var i__7786__auto___8852 = (0);
while(true){
if((i__7786__auto___8852 < len__7785__auto___8851)){
args8848.push((arguments[i__7786__auto___8852]));

var G__8853 = (i__7786__auto___8852 + (1));
i__7786__auto___8852 = G__8853;
continue;
} else {
}
break;
}

var G__8850 = args8848.length;
switch (G__8850) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8848.length)].join('')));

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
var args8855 = [];
var len__7785__auto___8858 = arguments.length;
var i__7786__auto___8859 = (0);
while(true){
if((i__7786__auto___8859 < len__7785__auto___8858)){
args8855.push((arguments[i__7786__auto___8859]));

var G__8860 = (i__7786__auto___8859 + (1));
i__7786__auto___8859 = G__8860;
continue;
} else {
}
break;
}

var G__8857 = args8855.length;
switch (G__8857) {
case 2:
return jayq.core.children.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.children.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8855.length)].join('')));

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
var args8862 = [];
var len__7785__auto___8865 = arguments.length;
var i__7786__auto___8866 = (0);
while(true){
if((i__7786__auto___8866 < len__7785__auto___8865)){
args8862.push((arguments[i__7786__auto___8866]));

var G__8867 = (i__7786__auto___8866 + (1));
i__7786__auto___8866 = G__8867;
continue;
} else {
}
break;
}

var G__8864 = args8862.length;
switch (G__8864) {
case 1:
return jayq.core.next.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.next.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8862.length)].join('')));

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
var args8869 = [];
var len__7785__auto___8872 = arguments.length;
var i__7786__auto___8873 = (0);
while(true){
if((i__7786__auto___8873 < len__7785__auto___8872)){
args8869.push((arguments[i__7786__auto___8873]));

var G__8874 = (i__7786__auto___8873 + (1));
i__7786__auto___8873 = G__8874;
continue;
} else {
}
break;
}

var G__8871 = args8869.length;
switch (G__8871) {
case 1:
return jayq.core.prev.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.prev.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8869.length)].join('')));

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
var args8876 = [];
var len__7785__auto___8879 = arguments.length;
var i__7786__auto___8880 = (0);
while(true){
if((i__7786__auto___8880 < len__7785__auto___8879)){
args8876.push((arguments[i__7786__auto___8880]));

var G__8881 = (i__7786__auto___8880 + (1));
i__7786__auto___8880 = G__8881;
continue;
} else {
}
break;
}

var G__8878 = args8876.length;
switch (G__8878) {
case 1:
return jayq.core.next_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.next_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8876.length)].join('')));

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
var args8883 = [];
var len__7785__auto___8886 = arguments.length;
var i__7786__auto___8887 = (0);
while(true){
if((i__7786__auto___8887 < len__7785__auto___8886)){
args8883.push((arguments[i__7786__auto___8887]));

var G__8888 = (i__7786__auto___8887 + (1));
i__7786__auto___8887 = G__8888;
continue;
} else {
}
break;
}

var G__8885 = args8883.length;
switch (G__8885) {
case 1:
return jayq.core.prev_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.prev_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8883.length)].join('')));

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
var args8890 = [];
var len__7785__auto___8893 = arguments.length;
var i__7786__auto___8894 = (0);
while(true){
if((i__7786__auto___8894 < len__7785__auto___8893)){
args8890.push((arguments[i__7786__auto___8894]));

var G__8895 = (i__7786__auto___8894 + (1));
i__7786__auto___8894 = G__8895;
continue;
} else {
}
break;
}

var G__8892 = args8890.length;
switch (G__8892) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8890.length)].join('')));

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
var args8897 = [];
var len__7785__auto___8900 = arguments.length;
var i__7786__auto___8901 = (0);
while(true){
if((i__7786__auto___8901 < len__7785__auto___8900)){
args8897.push((arguments[i__7786__auto___8901]));

var G__8902 = (i__7786__auto___8901 + (1));
i__7786__auto___8901 = G__8902;
continue;
} else {
}
break;
}

var G__8899 = args8897.length;
switch (G__8899) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8897.length)].join('')));

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
var args__7792__auto__ = [];
var len__7785__auto___8911 = arguments.length;
var i__7786__auto___8912 = (0);
while(true){
if((i__7786__auto___8912 < len__7785__auto___8911)){
args__7792__auto__.push((arguments[i__7786__auto___8912]));

var G__8913 = (i__7786__auto___8912 + (1));
i__7786__auto___8912 = G__8913;
continue;
} else {
}
break;
}

var argseq__7793__auto__ = ((((2) < args__7792__auto__.length))?(new cljs.core.IndexedSeq(args__7792__auto__.slice((2)),(0),null)):null);
return jayq.core.closest.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7793__auto__);
});

jayq.core.closest.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,selector,p__8907){
var vec__8908 = p__8907;
var context = cljs.core.nth.call(null,vec__8908,(0),null);
return $elem.closest(jayq.core.__GT_selector.call(null,selector),context);
});

jayq.core.closest.cljs$lang$maxFixedArity = (2);

jayq.core.closest.cljs$lang$applyTo = (function (seq8904){
var G__8905 = cljs.core.first.call(null,seq8904);
var seq8904__$1 = cljs.core.next.call(null,seq8904);
var G__8906 = cljs.core.first.call(null,seq8904__$1);
var seq8904__$2 = cljs.core.next.call(null,seq8904__$1);
return jayq.core.closest.cljs$core$IFn$_invoke$arity$variadic(G__8905,G__8906,seq8904__$2);
});

jayq.core.clone = (function jayq$core$clone($elem){
return $elem.clone();
});
jayq.core.html = (function jayq$core$html(var_args){
var args8914 = [];
var len__7785__auto___8917 = arguments.length;
var i__7786__auto___8918 = (0);
while(true){
if((i__7786__auto___8918 < len__7785__auto___8917)){
args8914.push((arguments[i__7786__auto___8918]));

var G__8919 = (i__7786__auto___8918 + (1));
i__7786__auto___8918 = G__8919;
continue;
} else {
}
break;
}

var G__8916 = args8914.length;
switch (G__8916) {
case 2:
return jayq.core.html.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.html.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8914.length)].join('')));

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
var args8921 = [];
var len__7785__auto___8924 = arguments.length;
var i__7786__auto___8925 = (0);
while(true){
if((i__7786__auto___8925 < len__7785__auto___8924)){
args8921.push((arguments[i__7786__auto___8925]));

var G__8926 = (i__7786__auto___8925 + (1));
i__7786__auto___8925 = G__8926;
continue;
} else {
}
break;
}

var G__8923 = args8921.length;
switch (G__8923) {
case 2:
return jayq.core.val.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.val.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8921.length)].join('')));

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
var args8928 = [];
var len__7785__auto___8931 = arguments.length;
var i__7786__auto___8932 = (0);
while(true){
if((i__7786__auto___8932 < len__7785__auto___8931)){
args8928.push((arguments[i__7786__auto___8932]));

var G__8933 = (i__7786__auto___8932 + (1));
i__7786__auto___8932 = G__8933;
continue;
} else {
}
break;
}

var G__8930 = args8928.length;
switch (G__8930) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8928.length)].join('')));

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
var args8935 = [];
var len__7785__auto___8938 = arguments.length;
var i__7786__auto___8939 = (0);
while(true){
if((i__7786__auto___8939 < len__7785__auto___8938)){
args8935.push((arguments[i__7786__auto___8939]));

var G__8940 = (i__7786__auto___8939 + (1));
i__7786__auto___8939 = G__8940;
continue;
} else {
}
break;
}

var G__8937 = args8935.length;
switch (G__8937) {
case 2:
return jayq.core.dequeue.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.dequeue.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8935.length)].join('')));

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
jayq.core.preprocess_request = (function jayq$core$preprocess_request(p__8944){
var map__8947 = p__8944;
var map__8947__$1 = ((((!((map__8947 == null)))?((((map__8947.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8947.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8947):map__8947);
var request = map__8947__$1;
var data = cljs.core.get.call(null,map__8947__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var contentType = cljs.core.get.call(null,map__8947__$1,new cljs.core.Keyword(null,"contentType","contentType",-1462509576));
var ct = jayq.core.__GT_content_type.call(null,contentType);
return ((function (ct,map__8947,map__8947__$1,request,data,contentType){
return (function (p1__8943_SHARP_){
if(cljs.core.truth_((function (){var and__6665__auto__ = ct;
if(cljs.core.truth_(and__6665__auto__)){
return jayq.core.clj_content_type_QMARK_.call(null,ct);
} else {
return and__6665__auto__;
}
})())){
return cljs.core.assoc.call(null,p1__8943_SHARP_,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.pr_str.call(null,data));
} else {
return p1__8943_SHARP_;
}
});})(ct,map__8947,map__8947__$1,request,data,contentType))
.call(null,((function (ct,map__8947,map__8947__$1,request,data,contentType){
return (function (p1__8942_SHARP_){
if(cljs.core.truth_(ct)){
return cljs.core.assoc.call(null,p1__8942_SHARP_,new cljs.core.Keyword(null,"contentType","contentType",-1462509576),ct);
} else {
return p1__8942_SHARP_;
}
});})(ct,map__8947,map__8947__$1,request,data,contentType))
.call(null,request));
});
jayq.core.__GT_ajax_settings = (function jayq$core$__GT_ajax_settings(request){
return cljs.core.clj__GT_js.call(null,jayq.core.preprocess_request.call(null,request));
});
jayq.core.ajax = (function jayq$core$ajax(var_args){
var args8949 = [];
var len__7785__auto___8952 = arguments.length;
var i__7786__auto___8953 = (0);
while(true){
if((i__7786__auto___8953 < len__7785__auto___8952)){
args8949.push((arguments[i__7786__auto___8953]));

var G__8954 = (i__7786__auto___8953 + (1));
i__7786__auto___8953 = G__8954;
continue;
} else {
}
break;
}

var G__8951 = args8949.length;
switch (G__8951) {
case 2:
return jayq.core.ajax.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.ajax.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8949.length)].join('')));

}
});

jayq.core.ajax.cljs$core$IFn$_invoke$arity$2 = (function (url,settings){
return jQuery.ajax(url,jayq.core.__GT_ajax_settings.call(null,settings));
});

jayq.core.ajax.cljs$core$IFn$_invoke$arity$1 = (function (settings){
return jQuery.ajax(jayq.core.__GT_ajax_settings.call(null,settings));
});

jayq.core.ajax.cljs$lang$maxFixedArity = 2;

jayq.core.xhr = (function jayq$core$xhr(p__8956,content,callback){
var vec__8960 = p__8956;
var method = cljs.core.nth.call(null,vec__8960,(0),null);
var uri = cljs.core.nth.call(null,vec__8960,(1),null);
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
var args__7792__auto__ = [];
var len__7785__auto___8970 = arguments.length;
var i__7786__auto___8971 = (0);
while(true){
if((i__7786__auto___8971 < len__7785__auto___8970)){
args__7792__auto__.push((arguments[i__7786__auto___8971]));

var G__8972 = (i__7786__auto___8971 + (1));
i__7786__auto___8971 = G__8972;
continue;
} else {
}
break;
}

var argseq__7793__auto__ = ((((2) < args__7792__auto__.length))?(new cljs.core.IndexedSeq(args__7792__auto__.slice((2)),(0),null)):null);
return jayq.core.unbind.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7793__auto__);
});

jayq.core.unbind.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,ev,p__8966){
var vec__8967 = p__8966;
var func = cljs.core.nth.call(null,vec__8967,(0),null);
return $elem.unbind(cljs.core.name.call(null,ev),func);
});

jayq.core.unbind.cljs$lang$maxFixedArity = (2);

jayq.core.unbind.cljs$lang$applyTo = (function (seq8963){
var G__8964 = cljs.core.first.call(null,seq8963);
var seq8963__$1 = cljs.core.next.call(null,seq8963);
var G__8965 = cljs.core.first.call(null,seq8963__$1);
var seq8963__$2 = cljs.core.next.call(null,seq8963__$1);
return jayq.core.unbind.cljs$core$IFn$_invoke$arity$variadic(G__8964,G__8965,seq8963__$2);
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
var args__7792__auto__ = [];
var len__7785__auto___8980 = arguments.length;
var i__7786__auto___8981 = (0);
while(true){
if((i__7786__auto___8981 < len__7785__auto___8980)){
args__7792__auto__.push((arguments[i__7786__auto___8981]));

var G__8982 = (i__7786__auto___8981 + (1));
i__7786__auto___8981 = G__8982;
continue;
} else {
}
break;
}

var argseq__7793__auto__ = ((((2) < args__7792__auto__.length))?(new cljs.core.IndexedSeq(args__7792__auto__.slice((2)),(0),null)):null);
return jayq.core.on.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7793__auto__);
});

jayq.core.on.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,events,p__8976){
var vec__8977 = p__8976;
var sel = cljs.core.nth.call(null,vec__8977,(0),null);
var data = cljs.core.nth.call(null,vec__8977,(1),null);
var handler = cljs.core.nth.call(null,vec__8977,(2),null);
return $elem.on(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel),data,handler);
});

jayq.core.on.cljs$lang$maxFixedArity = (2);

jayq.core.on.cljs$lang$applyTo = (function (seq8973){
var G__8974 = cljs.core.first.call(null,seq8973);
var seq8973__$1 = cljs.core.next.call(null,seq8973);
var G__8975 = cljs.core.first.call(null,seq8973__$1);
var seq8973__$2 = cljs.core.next.call(null,seq8973__$1);
return jayq.core.on.cljs$core$IFn$_invoke$arity$variadic(G__8974,G__8975,seq8973__$2);
});

jayq.core.one = (function jayq$core$one(var_args){
var args__7792__auto__ = [];
var len__7785__auto___8990 = arguments.length;
var i__7786__auto___8991 = (0);
while(true){
if((i__7786__auto___8991 < len__7785__auto___8990)){
args__7792__auto__.push((arguments[i__7786__auto___8991]));

var G__8992 = (i__7786__auto___8991 + (1));
i__7786__auto___8991 = G__8992;
continue;
} else {
}
break;
}

var argseq__7793__auto__ = ((((2) < args__7792__auto__.length))?(new cljs.core.IndexedSeq(args__7792__auto__.slice((2)),(0),null)):null);
return jayq.core.one.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7793__auto__);
});

jayq.core.one.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,events,p__8986){
var vec__8987 = p__8986;
var sel = cljs.core.nth.call(null,vec__8987,(0),null);
var data = cljs.core.nth.call(null,vec__8987,(1),null);
var handler = cljs.core.nth.call(null,vec__8987,(2),null);
return $elem.one(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel),data,handler);
});

jayq.core.one.cljs$lang$maxFixedArity = (2);

jayq.core.one.cljs$lang$applyTo = (function (seq8983){
var G__8984 = cljs.core.first.call(null,seq8983);
var seq8983__$1 = cljs.core.next.call(null,seq8983);
var G__8985 = cljs.core.first.call(null,seq8983__$1);
var seq8983__$2 = cljs.core.next.call(null,seq8983__$1);
return jayq.core.one.cljs$core$IFn$_invoke$arity$variadic(G__8984,G__8985,seq8983__$2);
});

jayq.core.off = (function jayq$core$off(var_args){
var args__7792__auto__ = [];
var len__7785__auto___9000 = arguments.length;
var i__7786__auto___9001 = (0);
while(true){
if((i__7786__auto___9001 < len__7785__auto___9000)){
args__7792__auto__.push((arguments[i__7786__auto___9001]));

var G__9002 = (i__7786__auto___9001 + (1));
i__7786__auto___9001 = G__9002;
continue;
} else {
}
break;
}

var argseq__7793__auto__ = ((((2) < args__7792__auto__.length))?(new cljs.core.IndexedSeq(args__7792__auto__.slice((2)),(0),null)):null);
return jayq.core.off.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7793__auto__);
});

jayq.core.off.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,events,p__8996){
var vec__8997 = p__8996;
var sel = cljs.core.nth.call(null,vec__8997,(0),null);
var handler = cljs.core.nth.call(null,vec__8997,(1),null);
return $elem.off(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel),handler);
});

jayq.core.off.cljs$lang$maxFixedArity = (2);

jayq.core.off.cljs$lang$applyTo = (function (seq8993){
var G__8994 = cljs.core.first.call(null,seq8993);
var seq8993__$1 = cljs.core.next.call(null,seq8993);
var G__8995 = cljs.core.first.call(null,seq8993__$1);
var seq8993__$2 = cljs.core.next.call(null,seq8993__$1);
return jayq.core.off.cljs$core$IFn$_invoke$arity$variadic(G__8994,G__8995,seq8993__$2);
});

jayq.core.prevent = (function jayq$core$prevent(e){
return e.preventDefault();
});
jayq.core.height = (function jayq$core$height(var_args){
var args9003 = [];
var len__7785__auto___9006 = arguments.length;
var i__7786__auto___9007 = (0);
while(true){
if((i__7786__auto___9007 < len__7785__auto___9006)){
args9003.push((arguments[i__7786__auto___9007]));

var G__9008 = (i__7786__auto___9007 + (1));
i__7786__auto___9007 = G__9008;
continue;
} else {
}
break;
}

var G__9005 = args9003.length;
switch (G__9005) {
case 2:
return jayq.core.height.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.height.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9003.length)].join('')));

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
var args9010 = [];
var len__7785__auto___9013 = arguments.length;
var i__7786__auto___9014 = (0);
while(true){
if((i__7786__auto___9014 < len__7785__auto___9013)){
args9010.push((arguments[i__7786__auto___9014]));

var G__9015 = (i__7786__auto___9014 + (1));
i__7786__auto___9014 = G__9015;
continue;
} else {
}
break;
}

var G__9012 = args9010.length;
switch (G__9012) {
case 2:
return jayq.core.width.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.width.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9010.length)].join('')));

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
var args9017 = [];
var len__7785__auto___9020 = arguments.length;
var i__7786__auto___9021 = (0);
while(true){
if((i__7786__auto___9021 < len__7785__auto___9020)){
args9017.push((arguments[i__7786__auto___9021]));

var G__9022 = (i__7786__auto___9021 + (1));
i__7786__auto___9021 = G__9022;
continue;
} else {
}
break;
}

var G__9019 = args9017.length;
switch (G__9019) {
case 2:
return jayq.core.offset.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.offset.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9017.length)].join('')));

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
var args9024 = [];
var len__7785__auto___9027 = arguments.length;
var i__7786__auto___9028 = (0);
while(true){
if((i__7786__auto___9028 < len__7785__auto___9027)){
args9024.push((arguments[i__7786__auto___9028]));

var G__9029 = (i__7786__auto___9028 + (1));
i__7786__auto___9028 = G__9029;
continue;
} else {
}
break;
}

var G__9026 = args9024.length;
switch (G__9026) {
case 1:
return jayq.core.scroll_left.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.scroll_left.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9024.length)].join('')));

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
var args9031 = [];
var len__7785__auto___9034 = arguments.length;
var i__7786__auto___9035 = (0);
while(true){
if((i__7786__auto___9035 < len__7785__auto___9034)){
args9031.push((arguments[i__7786__auto___9035]));

var G__9036 = (i__7786__auto___9035 + (1));
i__7786__auto___9035 = G__9036;
continue;
} else {
}
break;
}

var G__9033 = args9031.length;
switch (G__9033) {
case 1:
return jayq.core.scroll_top.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.scroll_top.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9031.length)].join('')));

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
var args9038 = [];
var len__7785__auto___9041 = arguments.length;
var i__7786__auto___9042 = (0);
while(true){
if((i__7786__auto___9042 < len__7785__auto___9041)){
args9038.push((arguments[i__7786__auto___9042]));

var G__9043 = (i__7786__auto___9042 + (1));
i__7786__auto___9042 = G__9043;
continue;
} else {
}
break;
}

var G__9040 = args9038.length;
switch (G__9040) {
case 3:
return jayq.core.then.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return jayq.core.then.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9038.length)].join('')));

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
var args__7792__auto__ = [];
var len__7785__auto___9047 = arguments.length;
var i__7786__auto___9048 = (0);
while(true){
if((i__7786__auto___9048 < len__7785__auto___9047)){
args__7792__auto__.push((arguments[i__7786__auto___9048]));

var G__9049 = (i__7786__auto___9048 + (1));
i__7786__auto___9048 = G__9049;
continue;
} else {
}
break;
}

var argseq__7793__auto__ = ((((1) < args__7792__auto__.length))?(new cljs.core.IndexedSeq(args__7792__auto__.slice((1)),(0),null)):null);
return jayq.core.done.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7793__auto__);
});

jayq.core.done.cljs$core$IFn$_invoke$arity$variadic = (function (deferred,fns_args){
return deferred.done.apply(deferred,cljs.core.clj__GT_js.call(null,fns_args));
});

jayq.core.done.cljs$lang$maxFixedArity = (1);

jayq.core.done.cljs$lang$applyTo = (function (seq9045){
var G__9046 = cljs.core.first.call(null,seq9045);
var seq9045__$1 = cljs.core.next.call(null,seq9045);
return jayq.core.done.cljs$core$IFn$_invoke$arity$variadic(G__9046,seq9045__$1);
});

jayq.core.fail = (function jayq$core$fail(var_args){
var args__7792__auto__ = [];
var len__7785__auto___9052 = arguments.length;
var i__7786__auto___9053 = (0);
while(true){
if((i__7786__auto___9053 < len__7785__auto___9052)){
args__7792__auto__.push((arguments[i__7786__auto___9053]));

var G__9054 = (i__7786__auto___9053 + (1));
i__7786__auto___9053 = G__9054;
continue;
} else {
}
break;
}

var argseq__7793__auto__ = ((((1) < args__7792__auto__.length))?(new cljs.core.IndexedSeq(args__7792__auto__.slice((1)),(0),null)):null);
return jayq.core.fail.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7793__auto__);
});

jayq.core.fail.cljs$core$IFn$_invoke$arity$variadic = (function (deferred,fns_args){
return deferred.fail.apply(deferred,cljs.core.clj__GT_js.call(null,fns_args));
});

jayq.core.fail.cljs$lang$maxFixedArity = (1);

jayq.core.fail.cljs$lang$applyTo = (function (seq9050){
var G__9051 = cljs.core.first.call(null,seq9050);
var seq9050__$1 = cljs.core.next.call(null,seq9050);
return jayq.core.fail.cljs$core$IFn$_invoke$arity$variadic(G__9051,seq9050__$1);
});

jayq.core.progress = (function jayq$core$progress(deferred,fns_args){
return deferred.progress(cljs.core.clj__GT_js.call(null,fns_args));
});
jayq.core.promise = (function jayq$core$promise(var_args){
var args9055 = [];
var len__7785__auto___9058 = arguments.length;
var i__7786__auto___9059 = (0);
while(true){
if((i__7786__auto___9059 < len__7785__auto___9058)){
args9055.push((arguments[i__7786__auto___9059]));

var G__9060 = (i__7786__auto___9059 + (1));
i__7786__auto___9059 = G__9060;
continue;
} else {
}
break;
}

var G__9057 = args9055.length;
switch (G__9057) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9055.length)].join('')));

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
var args__7792__auto__ = [];
var len__7785__auto___9064 = arguments.length;
var i__7786__auto___9065 = (0);
while(true){
if((i__7786__auto___9065 < len__7785__auto___9064)){
args__7792__auto__.push((arguments[i__7786__auto___9065]));

var G__9066 = (i__7786__auto___9065 + (1));
i__7786__auto___9065 = G__9066;
continue;
} else {
}
break;
}

var argseq__7793__auto__ = ((((1) < args__7792__auto__.length))?(new cljs.core.IndexedSeq(args__7792__auto__.slice((1)),(0),null)):null);
return jayq.core.always.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7793__auto__);
});

jayq.core.always.cljs$core$IFn$_invoke$arity$variadic = (function (deferred,fns_args){
return deferred.always.apply(deferred,cljs.core.clj__GT_js.call(null,fns_args));
});

jayq.core.always.cljs$lang$maxFixedArity = (1);

jayq.core.always.cljs$lang$applyTo = (function (seq9062){
var G__9063 = cljs.core.first.call(null,seq9062);
var seq9062__$1 = cljs.core.next.call(null,seq9062);
return jayq.core.always.cljs$core$IFn$_invoke$arity$variadic(G__9063,seq9062__$1);
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
var args9067 = [];
var len__7785__auto___9070 = arguments.length;
var i__7786__auto___9071 = (0);
while(true){
if((i__7786__auto___9071 < len__7785__auto___9070)){
args9067.push((arguments[i__7786__auto___9071]));

var G__9072 = (i__7786__auto___9071 + (1));
i__7786__auto___9071 = G__9072;
continue;
} else {
}
break;
}

var G__9069 = args9067.length;
switch (G__9069) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9067.length)].join('')));

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

//# sourceMappingURL=core.js.map