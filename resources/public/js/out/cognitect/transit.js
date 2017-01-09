// Compiled by ClojureScript 1.9.293 {}
goog.provide('cognitect.transit');
goog.require('cljs.core');
goog.require('com.cognitect.transit');
goog.require('com.cognitect.transit.types');
goog.require('com.cognitect.transit.eq');
goog.require('goog.math.Long');
cljs.core.UUID.prototype.cljs$core$IEquiv$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return (this$__$1.uuid === other.uuid);
} else {
if((other instanceof com.cognitect.transit.types.UUID)){
return (this$__$1.uuid === other.toString());
} else {
return false;

}
}
});
cljs.core.UUID.prototype.cljs$core$IComparable$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$ = cljs.core.PROTOCOL_SENTINEL;

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});
goog.math.Long.prototype.cljs$core$IEquiv$ = cljs.core.PROTOCOL_SENTINEL;

goog.math.Long.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$ = cljs.core.PROTOCOL_SENTINEL;

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return cljs.core._equiv.call(null,other,this$__$1);
} else {
return this$__$1.equiv(other);
}
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$ = cljs.core.PROTOCOL_SENTINEL;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});
goog.math.Long.prototype.cljs$core$IHash$ = cljs.core.PROTOCOL_SENTINEL;

goog.math.Long.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$ = cljs.core.PROTOCOL_SENTINEL;

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.hash.call(null,this$__$1.toString());
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$ = cljs.core.PROTOCOL_SENTINEL;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});
com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL;

com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (uuid,writer,_){
var uuid__$1 = this;
return cljs.core._write.call(null,writer,[cljs.core.str("#uuid \""),cljs.core.str(uuid__$1.toString()),cljs.core.str("\"")].join(''));
});
cognitect.transit.opts_merge = (function cognitect$transit$opts_merge(a,b){
var seq__51524_51528 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));
var chunk__51525_51529 = null;
var count__51526_51530 = (0);
var i__51527_51531 = (0);
while(true){
if((i__51527_51531 < count__51526_51530)){
var k_51532 = cljs.core._nth.call(null,chunk__51525_51529,i__51527_51531);
var v_51533 = (b[k_51532]);
(a[k_51532] = v_51533);

var G__51534 = seq__51524_51528;
var G__51535 = chunk__51525_51529;
var G__51536 = count__51526_51530;
var G__51537 = (i__51527_51531 + (1));
seq__51524_51528 = G__51534;
chunk__51525_51529 = G__51535;
count__51526_51530 = G__51536;
i__51527_51531 = G__51537;
continue;
} else {
var temp__4657__auto___51538 = cljs.core.seq.call(null,seq__51524_51528);
if(temp__4657__auto___51538){
var seq__51524_51539__$1 = temp__4657__auto___51538;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51524_51539__$1)){
var c__18229__auto___51540 = cljs.core.chunk_first.call(null,seq__51524_51539__$1);
var G__51541 = cljs.core.chunk_rest.call(null,seq__51524_51539__$1);
var G__51542 = c__18229__auto___51540;
var G__51543 = cljs.core.count.call(null,c__18229__auto___51540);
var G__51544 = (0);
seq__51524_51528 = G__51541;
chunk__51525_51529 = G__51542;
count__51526_51530 = G__51543;
i__51527_51531 = G__51544;
continue;
} else {
var k_51545 = cljs.core.first.call(null,seq__51524_51539__$1);
var v_51546 = (b[k_51545]);
(a[k_51545] = v_51546);

var G__51547 = cljs.core.next.call(null,seq__51524_51539__$1);
var G__51548 = null;
var G__51549 = (0);
var G__51550 = (0);
seq__51524_51528 = G__51547;
chunk__51525_51529 = G__51548;
count__51526_51530 = G__51549;
i__51527_51531 = G__51550;
continue;
}
} else {
}
}
break;
}

return a;
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapBuilder = (function (){
})
cognitect.transit.MapBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

cognitect.transit.MapBuilder.prototype.add = (function (m,k,v,node){
var self__ = this;
var _ = this;
return cljs.core.assoc_BANG_.call(null,m,k,v);
});

cognitect.transit.MapBuilder.prototype.finalize = (function (m,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,m);
});

cognitect.transit.MapBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentArrayMap.fromArray.call(null,arr,true,true);
});

cognitect.transit.MapBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapBuilder.cljs$lang$type = true;

cognitect.transit.MapBuilder.cljs$lang$ctorStr = "cognitect.transit/MapBuilder";

cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__18021__auto__,writer__18022__auto__,opt__18023__auto__){
return cljs.core._write.call(null,writer__18022__auto__,"cognitect.transit/MapBuilder");
});

cognitect.transit.__GT_MapBuilder = (function cognitect$transit$__GT_MapBuilder(){
return (new cognitect.transit.MapBuilder());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorBuilder = (function (){
})
cognitect.transit.VectorBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
});

cognitect.transit.VectorBuilder.prototype.add = (function (v,x,node){
var self__ = this;
var _ = this;
return cljs.core.conj_BANG_.call(null,v,x);
});

cognitect.transit.VectorBuilder.prototype.finalize = (function (v,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,v);
});

cognitect.transit.VectorBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentVector.fromArray.call(null,arr,true);
});

cognitect.transit.VectorBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorBuilder.cljs$lang$type = true;

cognitect.transit.VectorBuilder.cljs$lang$ctorStr = "cognitect.transit/VectorBuilder";

cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__18021__auto__,writer__18022__auto__,opt__18023__auto__){
return cljs.core._write.call(null,writer__18022__auto__,"cognitect.transit/VectorBuilder");
});

cognitect.transit.__GT_VectorBuilder = (function cognitect$transit$__GT_VectorBuilder(){
return (new cognitect.transit.VectorBuilder());
});

/**
 * Return a transit reader. type may be either :json or :json-verbose.
 * opts may be a map optionally containing a :handlers entry. The value
 * of :handlers should be map from tag to a decoder function which returns
 * then in-memory representation of the semantic transit value.
 */
cognitect.transit.reader = (function cognitect$transit$reader(var_args){
var args51551 = [];
var len__18523__auto___51554 = arguments.length;
var i__18524__auto___51555 = (0);
while(true){
if((i__18524__auto___51555 < len__18523__auto___51554)){
args51551.push((arguments[i__18524__auto___51555]));

var G__51556 = (i__18524__auto___51555 + (1));
i__18524__auto___51555 = G__51556;
continue;
} else {
}
break;
}

var G__51553 = args51551.length;
switch (G__51553) {
case 1:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args51551.length)].join('')));

}
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.reader.call(null,type,null);
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
return com.cognitect.transit.reader.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,({"handlers": cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, ["$",(function (v){
return cljs.core.symbol.call(null,v);
}),":",(function (v){
return cljs.core.keyword.call(null,v);
}),"set",(function (v){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,v);
}),"list",(function (v){
return cljs.core.into.call(null,cljs.core.List.EMPTY,v.reverse());
}),"cmap",(function (v){
var i = (0);
var ret = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i < v.length)){
var G__51558 = (i + (2));
var G__51559 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__51558;
ret = G__51559;
continue;
} else {
return cljs.core.persistent_BANG_.call(null,ret);
}
break;
}
})], null),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts))), "mapBuilder": (new cognitect.transit.MapBuilder()), "arrayBuilder": (new cognitect.transit.VectorBuilder()), "prefersStrings": false}),cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.reader.cljs$lang$maxFixedArity = 2;

/**
 * Read a transit encoded string into ClojureScript values given a 
 * transit reader.
 */
cognitect.transit.read = (function cognitect$transit$read(r,str){
return r.read(str);
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.KeywordHandler = (function (){
})
cognitect.transit.KeywordHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return ":";
});

cognitect.transit.KeywordHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.KeywordHandler.cljs$lang$type = true;

cognitect.transit.KeywordHandler.cljs$lang$ctorStr = "cognitect.transit/KeywordHandler";

cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__18021__auto__,writer__18022__auto__,opt__18023__auto__){
return cljs.core._write.call(null,writer__18022__auto__,"cognitect.transit/KeywordHandler");
});

cognitect.transit.__GT_KeywordHandler = (function cognitect$transit$__GT_KeywordHandler(){
return (new cognitect.transit.KeywordHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SymbolHandler = (function (){
})
cognitect.transit.SymbolHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "$";
});

cognitect.transit.SymbolHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SymbolHandler.cljs$lang$type = true;

cognitect.transit.SymbolHandler.cljs$lang$ctorStr = "cognitect.transit/SymbolHandler";

cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__18021__auto__,writer__18022__auto__,opt__18023__auto__){
return cljs.core._write.call(null,writer__18022__auto__,"cognitect.transit/SymbolHandler");
});

cognitect.transit.__GT_SymbolHandler = (function cognitect$transit$__GT_SymbolHandler(){
return (new cognitect.transit.SymbolHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.ListHandler = (function (){
})
cognitect.transit.ListHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "list";
});

cognitect.transit.ListHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__51560_51564 = cljs.core.seq.call(null,v);
var chunk__51561_51565 = null;
var count__51562_51566 = (0);
var i__51563_51567 = (0);
while(true){
if((i__51563_51567 < count__51562_51566)){
var x_51568 = cljs.core._nth.call(null,chunk__51561_51565,i__51563_51567);
ret.push(x_51568);

var G__51569 = seq__51560_51564;
var G__51570 = chunk__51561_51565;
var G__51571 = count__51562_51566;
var G__51572 = (i__51563_51567 + (1));
seq__51560_51564 = G__51569;
chunk__51561_51565 = G__51570;
count__51562_51566 = G__51571;
i__51563_51567 = G__51572;
continue;
} else {
var temp__4657__auto___51573 = cljs.core.seq.call(null,seq__51560_51564);
if(temp__4657__auto___51573){
var seq__51560_51574__$1 = temp__4657__auto___51573;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51560_51574__$1)){
var c__18229__auto___51575 = cljs.core.chunk_first.call(null,seq__51560_51574__$1);
var G__51576 = cljs.core.chunk_rest.call(null,seq__51560_51574__$1);
var G__51577 = c__18229__auto___51575;
var G__51578 = cljs.core.count.call(null,c__18229__auto___51575);
var G__51579 = (0);
seq__51560_51564 = G__51576;
chunk__51561_51565 = G__51577;
count__51562_51566 = G__51578;
i__51563_51567 = G__51579;
continue;
} else {
var x_51580 = cljs.core.first.call(null,seq__51560_51574__$1);
ret.push(x_51580);

var G__51581 = cljs.core.next.call(null,seq__51560_51574__$1);
var G__51582 = null;
var G__51583 = (0);
var G__51584 = (0);
seq__51560_51564 = G__51581;
chunk__51561_51565 = G__51582;
count__51562_51566 = G__51583;
i__51563_51567 = G__51584;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.ListHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.ListHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.ListHandler.cljs$lang$type = true;

cognitect.transit.ListHandler.cljs$lang$ctorStr = "cognitect.transit/ListHandler";

cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__18021__auto__,writer__18022__auto__,opt__18023__auto__){
return cljs.core._write.call(null,writer__18022__auto__,"cognitect.transit/ListHandler");
});

cognitect.transit.__GT_ListHandler = (function cognitect$transit$__GT_ListHandler(){
return (new cognitect.transit.ListHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapHandler = (function (){
})
cognitect.transit.MapHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "map";
});

cognitect.transit.MapHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v;
});

cognitect.transit.MapHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.MapHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapHandler.cljs$lang$type = true;

cognitect.transit.MapHandler.cljs$lang$ctorStr = "cognitect.transit/MapHandler";

cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__18021__auto__,writer__18022__auto__,opt__18023__auto__){
return cljs.core._write.call(null,writer__18022__auto__,"cognitect.transit/MapHandler");
});

cognitect.transit.__GT_MapHandler = (function cognitect$transit$__GT_MapHandler(){
return (new cognitect.transit.MapHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SetHandler = (function (){
})
cognitect.transit.SetHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "set";
});

cognitect.transit.SetHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__51585_51589 = cljs.core.seq.call(null,v);
var chunk__51586_51590 = null;
var count__51587_51591 = (0);
var i__51588_51592 = (0);
while(true){
if((i__51588_51592 < count__51587_51591)){
var x_51593 = cljs.core._nth.call(null,chunk__51586_51590,i__51588_51592);
ret.push(x_51593);

var G__51594 = seq__51585_51589;
var G__51595 = chunk__51586_51590;
var G__51596 = count__51587_51591;
var G__51597 = (i__51588_51592 + (1));
seq__51585_51589 = G__51594;
chunk__51586_51590 = G__51595;
count__51587_51591 = G__51596;
i__51588_51592 = G__51597;
continue;
} else {
var temp__4657__auto___51598 = cljs.core.seq.call(null,seq__51585_51589);
if(temp__4657__auto___51598){
var seq__51585_51599__$1 = temp__4657__auto___51598;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51585_51599__$1)){
var c__18229__auto___51600 = cljs.core.chunk_first.call(null,seq__51585_51599__$1);
var G__51601 = cljs.core.chunk_rest.call(null,seq__51585_51599__$1);
var G__51602 = c__18229__auto___51600;
var G__51603 = cljs.core.count.call(null,c__18229__auto___51600);
var G__51604 = (0);
seq__51585_51589 = G__51601;
chunk__51586_51590 = G__51602;
count__51587_51591 = G__51603;
i__51588_51592 = G__51604;
continue;
} else {
var x_51605 = cljs.core.first.call(null,seq__51585_51599__$1);
ret.push(x_51605);

var G__51606 = cljs.core.next.call(null,seq__51585_51599__$1);
var G__51607 = null;
var G__51608 = (0);
var G__51609 = (0);
seq__51585_51589 = G__51606;
chunk__51586_51590 = G__51607;
count__51587_51591 = G__51608;
i__51588_51592 = G__51609;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.SetHandler.prototype.stringRep = (function (){
var self__ = this;
var v = this;
return null;
});

cognitect.transit.SetHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SetHandler.cljs$lang$type = true;

cognitect.transit.SetHandler.cljs$lang$ctorStr = "cognitect.transit/SetHandler";

cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__18021__auto__,writer__18022__auto__,opt__18023__auto__){
return cljs.core._write.call(null,writer__18022__auto__,"cognitect.transit/SetHandler");
});

cognitect.transit.__GT_SetHandler = (function cognitect$transit$__GT_SetHandler(){
return (new cognitect.transit.SetHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorHandler = (function (){
})
cognitect.transit.VectorHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "array";
});

cognitect.transit.VectorHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__51610_51614 = cljs.core.seq.call(null,v);
var chunk__51611_51615 = null;
var count__51612_51616 = (0);
var i__51613_51617 = (0);
while(true){
if((i__51613_51617 < count__51612_51616)){
var x_51618 = cljs.core._nth.call(null,chunk__51611_51615,i__51613_51617);
ret.push(x_51618);

var G__51619 = seq__51610_51614;
var G__51620 = chunk__51611_51615;
var G__51621 = count__51612_51616;
var G__51622 = (i__51613_51617 + (1));
seq__51610_51614 = G__51619;
chunk__51611_51615 = G__51620;
count__51612_51616 = G__51621;
i__51613_51617 = G__51622;
continue;
} else {
var temp__4657__auto___51623 = cljs.core.seq.call(null,seq__51610_51614);
if(temp__4657__auto___51623){
var seq__51610_51624__$1 = temp__4657__auto___51623;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51610_51624__$1)){
var c__18229__auto___51625 = cljs.core.chunk_first.call(null,seq__51610_51624__$1);
var G__51626 = cljs.core.chunk_rest.call(null,seq__51610_51624__$1);
var G__51627 = c__18229__auto___51625;
var G__51628 = cljs.core.count.call(null,c__18229__auto___51625);
var G__51629 = (0);
seq__51610_51614 = G__51626;
chunk__51611_51615 = G__51627;
count__51612_51616 = G__51628;
i__51613_51617 = G__51629;
continue;
} else {
var x_51630 = cljs.core.first.call(null,seq__51610_51624__$1);
ret.push(x_51630);

var G__51631 = cljs.core.next.call(null,seq__51610_51624__$1);
var G__51632 = null;
var G__51633 = (0);
var G__51634 = (0);
seq__51610_51614 = G__51631;
chunk__51611_51615 = G__51632;
count__51612_51616 = G__51633;
i__51613_51617 = G__51634;
continue;
}
} else {
}
}
break;
}

return ret;
});

cognitect.transit.VectorHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.VectorHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorHandler.cljs$lang$type = true;

cognitect.transit.VectorHandler.cljs$lang$ctorStr = "cognitect.transit/VectorHandler";

cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__18021__auto__,writer__18022__auto__,opt__18023__auto__){
return cljs.core._write.call(null,writer__18022__auto__,"cognitect.transit/VectorHandler");
});

cognitect.transit.__GT_VectorHandler = (function cognitect$transit$__GT_VectorHandler(){
return (new cognitect.transit.VectorHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.UUIDHandler = (function (){
})
cognitect.transit.UUIDHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "u";
});

cognitect.transit.UUIDHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.uuid;
});

cognitect.transit.UUIDHandler.prototype.stringRep = (function (v){
var self__ = this;
var this$ = this;
return this$.rep(v);
});

cognitect.transit.UUIDHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.UUIDHandler.cljs$lang$type = true;

cognitect.transit.UUIDHandler.cljs$lang$ctorStr = "cognitect.transit/UUIDHandler";

cognitect.transit.UUIDHandler.cljs$lang$ctorPrWriter = (function (this__18021__auto__,writer__18022__auto__,opt__18023__auto__){
return cljs.core._write.call(null,writer__18022__auto__,"cognitect.transit/UUIDHandler");
});

cognitect.transit.__GT_UUIDHandler = (function cognitect$transit$__GT_UUIDHandler(){
return (new cognitect.transit.UUIDHandler());
});

/**
 * Return a transit writer. type maybe either :json or :json-verbose.
 *   opts is a map containing a :handlers entry. :handlers is a map of
 *   type constructors to handler instances.
 */
cognitect.transit.writer = (function cognitect$transit$writer(var_args){
var args51635 = [];
var len__18523__auto___51650 = arguments.length;
var i__18524__auto___51651 = (0);
while(true){
if((i__18524__auto___51651 < len__18523__auto___51650)){
args51635.push((arguments[i__18524__auto___51651]));

var G__51652 = (i__18524__auto___51651 + (1));
i__18524__auto___51651 = G__51652;
continue;
} else {
}
break;
}

var G__51637 = args51635.length;
switch (G__51637) {
case 1:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args51635.length)].join('')));

}
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.writer.call(null,type,null);
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
var keyword_handler = (new cognitect.transit.KeywordHandler());
var symbol_handler = (new cognitect.transit.SymbolHandler());
var list_handler = (new cognitect.transit.ListHandler());
var map_handler = (new cognitect.transit.MapHandler());
var set_handler = (new cognitect.transit.SetHandler());
var vector_handler = (new cognitect.transit.VectorHandler());
var uuid_handler = (new cognitect.transit.UUIDHandler());
var handlers = cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([cljs.core.PersistentHashMap,cljs.core.Cons,cljs.core.PersistentArrayMap,cljs.core.NodeSeq,cljs.core.PersistentQueue,cljs.core.IndexedSeq,cljs.core.Keyword,cljs.core.EmptyList,cljs.core.LazySeq,cljs.core.Subvec,cljs.core.PersistentQueueSeq,cljs.core.ArrayNodeSeq,cljs.core.ValSeq,cljs.core.PersistentArrayMapSeq,cljs.core.PersistentVector,cljs.core.List,cljs.core.RSeq,cljs.core.PersistentHashSet,cljs.core.PersistentTreeMap,cljs.core.KeySeq,cljs.core.ChunkedSeq,cljs.core.PersistentTreeSet,cljs.core.ChunkedCons,cljs.core.Symbol,cljs.core.UUID,cljs.core.Range,cljs.core.PersistentTreeMapSeq],[map_handler,list_handler,map_handler,list_handler,list_handler,list_handler,keyword_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,set_handler,map_handler,list_handler,list_handler,set_handler,list_handler,symbol_handler,uuid_handler,list_handler,list_handler]),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts));
return com.cognitect.transit.writer.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,({"objectBuilder": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (m,kfn,vfn){
return cljs.core.reduce_kv.call(null,((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (obj,k,v){
var G__51638 = obj;
G__51638.push(kfn.call(null,k),vfn.call(null,v));

return G__51638;
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x51639 = cljs.core.clone.call(null,handlers);
x51639.forEach = ((function (x51639,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){
var coll = this;
var seq__51640 = cljs.core.seq.call(null,coll);
var chunk__51641 = null;
var count__51642 = (0);
var i__51643 = (0);
while(true){
if((i__51643 < count__51642)){
var vec__51644 = cljs.core._nth.call(null,chunk__51641,i__51643);
var k = cljs.core.nth.call(null,vec__51644,(0),null);
var v = cljs.core.nth.call(null,vec__51644,(1),null);
f.call(null,v,k);

var G__51654 = seq__51640;
var G__51655 = chunk__51641;
var G__51656 = count__51642;
var G__51657 = (i__51643 + (1));
seq__51640 = G__51654;
chunk__51641 = G__51655;
count__51642 = G__51656;
i__51643 = G__51657;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__51640);
if(temp__4657__auto__){
var seq__51640__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51640__$1)){
var c__18229__auto__ = cljs.core.chunk_first.call(null,seq__51640__$1);
var G__51658 = cljs.core.chunk_rest.call(null,seq__51640__$1);
var G__51659 = c__18229__auto__;
var G__51660 = cljs.core.count.call(null,c__18229__auto__);
var G__51661 = (0);
seq__51640 = G__51658;
chunk__51641 = G__51659;
count__51642 = G__51660;
i__51643 = G__51661;
continue;
} else {
var vec__51647 = cljs.core.first.call(null,seq__51640__$1);
var k = cljs.core.nth.call(null,vec__51647,(0),null);
var v = cljs.core.nth.call(null,vec__51647,(1),null);
f.call(null,v,k);

var G__51662 = cljs.core.next.call(null,seq__51640__$1);
var G__51663 = null;
var G__51664 = (0);
var G__51665 = (0);
seq__51640 = G__51662;
chunk__51641 = G__51663;
count__51642 = G__51664;
i__51643 = G__51665;
continue;
}
} else {
return null;
}
}
break;
}
});})(x51639,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;

return x51639;
})(), "unpack": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (x){
if((x instanceof cljs.core.PersistentArrayMap)){
return x.arr;
} else {
return false;
}
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
}),cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.writer.cljs$lang$maxFixedArity = 2;

/**
 * Encode an object into a transit string given a transit writer.
 */
cognitect.transit.write = (function cognitect$transit$write(w,o){
return w.write(o);
});
/**
 * Construct a read handler. Implemented as identity, exists primarily
 * for API compatiblity with transit-clj
 */
cognitect.transit.read_handler = (function cognitect$transit$read_handler(from_rep){
return from_rep;
});
/**
 * Creates a transit write handler whose tag, rep,
 * stringRep, and verboseWriteHandler methods
 * invoke the provided fns.
 */
cognitect.transit.write_handler = (function cognitect$transit$write_handler(var_args){
var args51666 = [];
var len__18523__auto___51672 = arguments.length;
var i__18524__auto___51673 = (0);
while(true){
if((i__18524__auto___51673 < len__18523__auto___51672)){
args51666.push((arguments[i__18524__auto___51673]));

var G__51674 = (i__18524__auto___51673 + (1));
i__18524__auto___51673 = G__51674;
continue;
} else {
}
break;
}

var G__51668 = args51666.length;
switch (G__51668) {
case 2:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args51666.length)].join('')));

}
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2 = (function (tag_fn,rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,null,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3 = (function (tag_fn,rep_fn,str_rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,str_rep_fn,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
if(typeof cognitect.transit.t_cognitect$transit51669 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cognitect.transit.Object}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cognitect.transit.t_cognitect$transit51669 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,meta51670){
this.tag_fn = tag_fn;
this.rep_fn = rep_fn;
this.str_rep_fn = str_rep_fn;
this.verbose_handler_fn = verbose_handler_fn;
this.meta51670 = meta51670;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cognitect.transit.t_cognitect$transit51669.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51671,meta51670__$1){
var self__ = this;
var _51671__$1 = this;
return (new cognitect.transit.t_cognitect$transit51669(self__.tag_fn,self__.rep_fn,self__.str_rep_fn,self__.verbose_handler_fn,meta51670__$1));
});

cognitect.transit.t_cognitect$transit51669.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51671){
var self__ = this;
var _51671__$1 = this;
return self__.meta51670;
});

cognitect.transit.t_cognitect$transit51669.prototype.tag = (function (o){
var self__ = this;
var _ = this;
return self__.tag_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit51669.prototype.rep = (function (o){
var self__ = this;
var _ = this;
return self__.rep_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit51669.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
return self__.str_rep_fn.call(null,o);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit51669.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return self__.verbose_handler_fn.call(null);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit51669.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag-fn","tag-fn",242055482,null),new cljs.core.Symbol(null,"rep-fn","rep-fn",-1724891035,null),new cljs.core.Symbol(null,"str-rep-fn","str-rep-fn",-1179615016,null),new cljs.core.Symbol(null,"verbose-handler-fn","verbose-handler-fn",547340594,null),new cljs.core.Symbol(null,"meta51670","meta51670",-573764301,null)], null);
});

cognitect.transit.t_cognitect$transit51669.cljs$lang$type = true;

cognitect.transit.t_cognitect$transit51669.cljs$lang$ctorStr = "cognitect.transit/t_cognitect$transit51669";

cognitect.transit.t_cognitect$transit51669.cljs$lang$ctorPrWriter = (function (this__18021__auto__,writer__18022__auto__,opt__18023__auto__){
return cljs.core._write.call(null,writer__18022__auto__,"cognitect.transit/t_cognitect$transit51669");
});

cognitect.transit.__GT_t_cognitect$transit51669 = (function cognitect$transit$__GT_t_cognitect$transit51669(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta51670){
return (new cognitect.transit.t_cognitect$transit51669(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta51670));
});

}

return (new cognitect.transit.t_cognitect$transit51669(tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,cljs.core.PersistentArrayMap.EMPTY));
});

cognitect.transit.write_handler.cljs$lang$maxFixedArity = 4;

/**
 * Construct a tagged value. tag must be a string and rep can
 * be any transit encodeable value.
 */
cognitect.transit.tagged_value = (function cognitect$transit$tagged_value(tag,rep){
return com.cognitect.transit.types.taggedValue.call(null,tag,rep);
});
/**
 * Returns true if x is a transit tagged value, false otherwise.
 */
cognitect.transit.tagged_value_QMARK_ = (function cognitect$transit$tagged_value_QMARK_(x){
return com.cognitect.transit.types.isTaggedValue.call(null,x);
});
/**
 * Construct a transit integer value. Returns JavaScript number if
 *   in the 53bit integer range, a goog.math.Long instance if above. s
 *   may be a string or a JavaScript number.
 */
cognitect.transit.integer = (function cognitect$transit$integer(s){
return com.cognitect.transit.types.intValue.call(null,s);
});
/**
 * Returns true if x is an integer value between the 53bit and 64bit
 *   range, false otherwise.
 */
cognitect.transit.integer_QMARK_ = (function cognitect$transit$integer_QMARK_(x){
return com.cognitect.transit.types.isInteger.call(null,x);
});
/**
 * Construct a big integer from a string.
 */
cognitect.transit.bigint = (function cognitect$transit$bigint(s){
return com.cognitect.transit.types.bigInteger.call(null,s);
});
/**
 * Returns true if x is a transit big integer value, false otherwise.
 */
cognitect.transit.bigint_QMARK_ = (function cognitect$transit$bigint_QMARK_(x){
return com.cognitect.transit.types.isBigInteger.call(null,x);
});
/**
 * Construct a big decimal from a string.
 */
cognitect.transit.bigdec = (function cognitect$transit$bigdec(s){
return com.cognitect.transit.types.bigDecimalValue.call(null,s);
});
/**
 * Returns true if x is a transit big decimal value, false otherwise.
 */
cognitect.transit.bigdec_QMARK_ = (function cognitect$transit$bigdec_QMARK_(x){
return com.cognitect.transit.types.isBigDecimal.call(null,x);
});
/**
 * Construct a URI from a string.
 */
cognitect.transit.uri = (function cognitect$transit$uri(s){
return com.cognitect.transit.types.uri.call(null,s);
});
/**
 * Returns true if x is a transit URI value, false otherwise.
 */
cognitect.transit.uri_QMARK_ = (function cognitect$transit$uri_QMARK_(x){
return com.cognitect.transit.types.isURI.call(null,x);
});
/**
 * Construct a UUID from a string.
 */
cognitect.transit.uuid = (function cognitect$transit$uuid(s){
return com.cognitect.transit.types.uuid.call(null,s);
});
/**
 * Returns true if x is a transit UUID value, false otherwise.
 */
cognitect.transit.uuid_QMARK_ = (function cognitect$transit$uuid_QMARK_(x){
var or__17415__auto__ = com.cognitect.transit.types.isUUID.call(null,x);
if(cljs.core.truth_(or__17415__auto__)){
return or__17415__auto__;
} else {
return (x instanceof cljs.core.UUID);
}
});
/**
 * Construct a transit binary value. s should be base64 encoded
 * string.
 */
cognitect.transit.binary = (function cognitect$transit$binary(s){
return com.cognitect.transit.types.binary.call(null,s);
});
/**
 * Returns true if x is a transit binary value, false otherwise.
 */
cognitect.transit.binary_QMARK_ = (function cognitect$transit$binary_QMARK_(x){
return com.cognitect.transit.types.isBinary.call(null,x);
});
/**
 * Construct a quoted transit value. x should be a transit
 * encodeable value.
 */
cognitect.transit.quoted = (function cognitect$transit$quoted(x){
return com.cognitect.transit.types.quoted.call(null,x);
});
/**
 * Returns true if x is a transit quoted value, false otherwise.
 */
cognitect.transit.quoted_QMARK_ = (function cognitect$transit$quoted_QMARK_(x){
return com.cognitect.transit.types.isQuoted.call(null,x);
});
/**
 * Construct a transit link value. x should be an IMap instance
 * containing at a minimum the following keys: :href, :rel. It
 * may optionall include :name, :render, and :prompt. :href must
 * be a transit URI, all other values are strings, and :render must
 * be either :image or :link.
 */
cognitect.transit.link = (function cognitect$transit$link(x){
return com.cognitect.transit.types.link.call(null,x);
});
/**
 * Returns true if x a transit link value, false if otherwise.
 */
cognitect.transit.link_QMARK_ = (function cognitect$transit$link_QMARK_(x){
return com.cognitect.transit.types.isLink.call(null,x);
});

//# sourceMappingURL=transit.js.map?rel=1483596055113