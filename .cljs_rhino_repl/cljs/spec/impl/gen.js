// Compiled by ClojureScript 1.9.293 {}
goog.provide('cljs.spec.impl.gen');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.impl.gen.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.impl.gen.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.impl.gen.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.impl.gen.LazyVar.cljs$lang$type = true;

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorStr = "cljs.spec.impl.gen/LazyVar";

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorPrWriter = (function (this__18021__auto__,writer__18022__auto__,opt__18023__auto__){
return cljs.core._write.call(null,writer__18022__auto__,"cljs.spec.impl.gen/LazyVar");
});

cljs.spec.impl.gen.__GT_LazyVar = (function cljs$spec$impl$gen$__GT_LazyVar(f,cached){
return (new cljs.spec.impl.gen.LazyVar(f,cached));
});

cljs.spec.impl.gen.quick_check_ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))),cljs.core.str(" never required")].join('')));
}
}),null));
cljs.spec.impl.gen.quick_check = (function cljs$spec$impl$gen$quick_check(var_args){
var args__18530__auto__ = [];
var len__18523__auto___20594 = arguments.length;
var i__18524__auto___20595 = (0);
while(true){
if((i__18524__auto___20595 < len__18523__auto___20594)){
args__18530__auto__.push((arguments[i__18524__auto___20595]));

var G__20596 = (i__18524__auto___20595 + (1));
i__18524__auto___20595 = G__20596;
continue;
} else {
}
break;
}

var argseq__18531__auto__ = ((((0) < args__18530__auto__.length))?(new cljs.core.IndexedSeq(args__18530__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__18531__auto__);
});

cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.quick_check_ref),args);
});

cljs.spec.impl.gen.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.quick_check.cljs$lang$applyTo = (function (seq20593){
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20593));
});

cljs.spec.impl.gen.for_all_STAR__ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.impl.gen.for_all_STAR_ = (function cljs$spec$impl$gen$for_all_STAR_(var_args){
var args__18530__auto__ = [];
var len__18523__auto___20598 = arguments.length;
var i__18524__auto___20599 = (0);
while(true){
if((i__18524__auto___20599 < len__18523__auto___20598)){
args__18530__auto__.push((arguments[i__18524__auto___20599]));

var G__20600 = (i__18524__auto___20599 + (1));
i__18524__auto___20599 = G__20600;
continue;
} else {
}
break;
}

var argseq__18531__auto__ = ((((0) < args__18530__auto__.length))?(new cljs.core.IndexedSeq(args__18530__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__18531__auto__);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.for_all_STAR__ref),args);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$applyTo = (function (seq20597){
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20597));
});

var g_QMARK__20601 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str(" never required")].join('')));
}
}),null));
var g_20602 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__20601){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__20601))
,null));
var mkg_20603 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__20601,g_20602){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__20601,g_20602))
,null));
cljs.spec.impl.gen.generator_QMARK_ = ((function (g_QMARK__20601,g_20602,mkg_20603){
return (function cljs$spec$impl$gen$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__20601).call(null,x);
});})(g_QMARK__20601,g_20602,mkg_20603))
;

cljs.spec.impl.gen.generator = ((function (g_QMARK__20601,g_20602,mkg_20603){
return (function cljs$spec$impl$gen$generator(gfn){
return cljs.core.deref.call(null,mkg_20603).call(null,gfn);
});})(g_QMARK__20601,g_20602,mkg_20603))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.impl.gen.generate = ((function (g_QMARK__20601,g_20602,mkg_20603){
return (function cljs$spec$impl$gen$generate(generator){
return cljs.core.deref.call(null,g_20602).call(null,generator);
});})(g_QMARK__20601,g_20602,mkg_20603))
;
cljs.spec.impl.gen.delay_impl = (function cljs$spec$impl$gen$delay_impl(gfnd){
return cljs.spec.impl.gen.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__18599__auto___20622 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.impl.gen.hash_map = ((function (g__18599__auto___20622){
return (function cljs$spec$impl$gen$hash_map(var_args){
var args__18530__auto__ = [];
var len__18523__auto___20623 = arguments.length;
var i__18524__auto___20624 = (0);
while(true){
if((i__18524__auto___20624 < len__18523__auto___20623)){
args__18530__auto__.push((arguments[i__18524__auto___20624]));

var G__20625 = (i__18524__auto___20624 + (1));
i__18524__auto___20624 = G__20625;
continue;
} else {
}
break;
}

var argseq__18531__auto__ = ((((0) < args__18530__auto__.length))?(new cljs.core.IndexedSeq(args__18530__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__18531__auto__);
});})(g__18599__auto___20622))
;

cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18599__auto___20622){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__18599__auto___20622),args);
});})(g__18599__auto___20622))
;

cljs.spec.impl.gen.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.hash_map.cljs$lang$applyTo = ((function (g__18599__auto___20622){
return (function (seq20604){
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20604));
});})(g__18599__auto___20622))
;


var g__18599__auto___20626 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.impl.gen.list = ((function (g__18599__auto___20626){
return (function cljs$spec$impl$gen$list(var_args){
var args__18530__auto__ = [];
var len__18523__auto___20627 = arguments.length;
var i__18524__auto___20628 = (0);
while(true){
if((i__18524__auto___20628 < len__18523__auto___20627)){
args__18530__auto__.push((arguments[i__18524__auto___20628]));

var G__20629 = (i__18524__auto___20628 + (1));
i__18524__auto___20628 = G__20629;
continue;
} else {
}
break;
}

var argseq__18531__auto__ = ((((0) < args__18530__auto__.length))?(new cljs.core.IndexedSeq(args__18530__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(argseq__18531__auto__);
});})(g__18599__auto___20626))
;

cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18599__auto___20626){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__18599__auto___20626),args);
});})(g__18599__auto___20626))
;

cljs.spec.impl.gen.list.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.list.cljs$lang$applyTo = ((function (g__18599__auto___20626){
return (function (seq20605){
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20605));
});})(g__18599__auto___20626))
;


var g__18599__auto___20630 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.impl.gen.map = ((function (g__18599__auto___20630){
return (function cljs$spec$impl$gen$map(var_args){
var args__18530__auto__ = [];
var len__18523__auto___20631 = arguments.length;
var i__18524__auto___20632 = (0);
while(true){
if((i__18524__auto___20632 < len__18523__auto___20631)){
args__18530__auto__.push((arguments[i__18524__auto___20632]));

var G__20633 = (i__18524__auto___20632 + (1));
i__18524__auto___20632 = G__20633;
continue;
} else {
}
break;
}

var argseq__18531__auto__ = ((((0) < args__18530__auto__.length))?(new cljs.core.IndexedSeq(args__18530__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(argseq__18531__auto__);
});})(g__18599__auto___20630))
;

cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18599__auto___20630){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__18599__auto___20630),args);
});})(g__18599__auto___20630))
;

cljs.spec.impl.gen.map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.map.cljs$lang$applyTo = ((function (g__18599__auto___20630){
return (function (seq20606){
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20606));
});})(g__18599__auto___20630))
;


var g__18599__auto___20634 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.impl.gen.not_empty = ((function (g__18599__auto___20634){
return (function cljs$spec$impl$gen$not_empty(var_args){
var args__18530__auto__ = [];
var len__18523__auto___20635 = arguments.length;
var i__18524__auto___20636 = (0);
while(true){
if((i__18524__auto___20636 < len__18523__auto___20635)){
args__18530__auto__.push((arguments[i__18524__auto___20636]));

var G__20637 = (i__18524__auto___20636 + (1));
i__18524__auto___20636 = G__20637;
continue;
} else {
}
break;
}

var argseq__18531__auto__ = ((((0) < args__18530__auto__.length))?(new cljs.core.IndexedSeq(args__18530__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__18531__auto__);
});})(g__18599__auto___20634))
;

cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18599__auto___20634){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__18599__auto___20634),args);
});})(g__18599__auto___20634))
;

cljs.spec.impl.gen.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.not_empty.cljs$lang$applyTo = ((function (g__18599__auto___20634){
return (function (seq20607){
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20607));
});})(g__18599__auto___20634))
;


var g__18599__auto___20638 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.impl.gen.set = ((function (g__18599__auto___20638){
return (function cljs$spec$impl$gen$set(var_args){
var args__18530__auto__ = [];
var len__18523__auto___20639 = arguments.length;
var i__18524__auto___20640 = (0);
while(true){
if((i__18524__auto___20640 < len__18523__auto___20639)){
args__18530__auto__.push((arguments[i__18524__auto___20640]));

var G__20641 = (i__18524__auto___20640 + (1));
i__18524__auto___20640 = G__20641;
continue;
} else {
}
break;
}

var argseq__18531__auto__ = ((((0) < args__18530__auto__.length))?(new cljs.core.IndexedSeq(args__18530__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(argseq__18531__auto__);
});})(g__18599__auto___20638))
;

cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18599__auto___20638){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__18599__auto___20638),args);
});})(g__18599__auto___20638))
;

cljs.spec.impl.gen.set.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.set.cljs$lang$applyTo = ((function (g__18599__auto___20638){
return (function (seq20608){
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20608));
});})(g__18599__auto___20638))
;


var g__18599__auto___20642 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.impl.gen.vector = ((function (g__18599__auto___20642){
return (function cljs$spec$impl$gen$vector(var_args){
var args__18530__auto__ = [];
var len__18523__auto___20643 = arguments.length;
var i__18524__auto___20644 = (0);
while(true){
if((i__18524__auto___20644 < len__18523__auto___20643)){
args__18530__auto__.push((arguments[i__18524__auto___20644]));

var G__20645 = (i__18524__auto___20644 + (1));
i__18524__auto___20644 = G__20645;
continue;
} else {
}
break;
}

var argseq__18531__auto__ = ((((0) < args__18530__auto__.length))?(new cljs.core.IndexedSeq(args__18530__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__18531__auto__);
});})(g__18599__auto___20642))
;

cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18599__auto___20642){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__18599__auto___20642),args);
});})(g__18599__auto___20642))
;

cljs.spec.impl.gen.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector.cljs$lang$applyTo = ((function (g__18599__auto___20642){
return (function (seq20609){
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20609));
});})(g__18599__auto___20642))
;


var g__18599__auto___20646 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.impl.gen.vector_distinct = ((function (g__18599__auto___20646){
return (function cljs$spec$impl$gen$vector_distinct(var_args){
var args__18530__auto__ = [];
var len__18523__auto___20647 = arguments.length;
var i__18524__auto___20648 = (0);
while(true){
if((i__18524__auto___20648 < len__18523__auto___20647)){
args__18530__auto__.push((arguments[i__18524__auto___20648]));

var G__20649 = (i__18524__auto___20648 + (1));
i__18524__auto___20648 = G__20649;
continue;
} else {
}
break;
}

var argseq__18531__auto__ = ((((0) < args__18530__auto__.length))?(new cljs.core.IndexedSeq(args__18530__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__18531__auto__);
});})(g__18599__auto___20646))
;

cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18599__auto___20646){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__18599__auto___20646),args);
});})(g__18599__auto___20646))
;

cljs.spec.impl.gen.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector_distinct.cljs$lang$applyTo = ((function (g__18599__auto___20646){
return (function (seq20610){
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20610));
});})(g__18599__auto___20646))
;


var g__18599__auto___20650 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.impl.gen.fmap = ((function (g__18599__auto___20650){
return (function cljs$spec$impl$gen$fmap(var_args){
var args__18530__auto__ = [];
var len__18523__auto___20651 = arguments.length;
var i__18524__auto___20652 = (0);
while(true){
if((i__18524__auto___20652 < len__18523__auto___20651)){
args__18530__auto__.push((arguments[i__18524__auto___20652]));

var G__20653 = (i__18524__auto___20652 + (1));
i__18524__auto___20652 = G__20653;
continue;
} else {
}
break;
}

var argseq__18531__auto__ = ((((0) < args__18530__auto__.length))?(new cljs.core.IndexedSeq(args__18530__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__18531__auto__);
});})(g__18599__auto___20650))
;

cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18599__auto___20650){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__18599__auto___20650),args);
});})(g__18599__auto___20650))
;

cljs.spec.impl.gen.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.fmap.cljs$lang$applyTo = ((function (g__18599__auto___20650){
return (function (seq20611){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20611));
});})(g__18599__auto___20650))
;


var g__18599__auto___20654 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.impl.gen.elements = ((function (g__18599__auto___20654){
return (function cljs$spec$impl$gen$elements(var_args){
var args__18530__auto__ = [];
var len__18523__auto___20655 = arguments.length;
var i__18524__auto___20656 = (0);
while(true){
if((i__18524__auto___20656 < len__18523__auto___20655)){
args__18530__auto__.push((arguments[i__18524__auto___20656]));

var G__20657 = (i__18524__auto___20656 + (1));
i__18524__auto___20656 = G__20657;
continue;
} else {
}
break;
}

var argseq__18531__auto__ = ((((0) < args__18530__auto__.length))?(new cljs.core.IndexedSeq(args__18530__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__18531__auto__);
});})(g__18599__auto___20654))
;

cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18599__auto___20654){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__18599__auto___20654),args);
});})(g__18599__auto___20654))
;

cljs.spec.impl.gen.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.elements.cljs$lang$applyTo = ((function (g__18599__auto___20654){
return (function (seq20612){
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20612));
});})(g__18599__auto___20654))
;


var g__18599__auto___20658 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.impl.gen.bind = ((function (g__18599__auto___20658){
return (function cljs$spec$impl$gen$bind(var_args){
var args__18530__auto__ = [];
var len__18523__auto___20659 = arguments.length;
var i__18524__auto___20660 = (0);
while(true){
if((i__18524__auto___20660 < len__18523__auto___20659)){
args__18530__auto__.push((arguments[i__18524__auto___20660]));

var G__20661 = (i__18524__auto___20660 + (1));
i__18524__auto___20660 = G__20661;
continue;
} else {
}
break;
}

var argseq__18531__auto__ = ((((0) < args__18530__auto__.length))?(new cljs.core.IndexedSeq(args__18530__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__18531__auto__);
});})(g__18599__auto___20658))
;

cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18599__auto___20658){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__18599__auto___20658),args);
});})(g__18599__auto___20658))
;

cljs.spec.impl.gen.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.bind.cljs$lang$applyTo = ((function (g__18599__auto___20658){
return (function (seq20613){
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20613));
});})(g__18599__auto___20658))
;


var g__18599__auto___20662 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.impl.gen.choose = ((function (g__18599__auto___20662){
return (function cljs$spec$impl$gen$choose(var_args){
var args__18530__auto__ = [];
var len__18523__auto___20663 = arguments.length;
var i__18524__auto___20664 = (0);
while(true){
if((i__18524__auto___20664 < len__18523__auto___20663)){
args__18530__auto__.push((arguments[i__18524__auto___20664]));

var G__20665 = (i__18524__auto___20664 + (1));
i__18524__auto___20664 = G__20665;
continue;
} else {
}
break;
}

var argseq__18531__auto__ = ((((0) < args__18530__auto__.length))?(new cljs.core.IndexedSeq(args__18530__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__18531__auto__);
});})(g__18599__auto___20662))
;

cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18599__auto___20662){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__18599__auto___20662),args);
});})(g__18599__auto___20662))
;

cljs.spec.impl.gen.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.choose.cljs$lang$applyTo = ((function (g__18599__auto___20662){
return (function (seq20614){
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20614));
});})(g__18599__auto___20662))
;


var g__18599__auto___20666 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.impl.gen.one_of = ((function (g__18599__auto___20666){
return (function cljs$spec$impl$gen$one_of(var_args){
var args__18530__auto__ = [];
var len__18523__auto___20667 = arguments.length;
var i__18524__auto___20668 = (0);
while(true){
if((i__18524__auto___20668 < len__18523__auto___20667)){
args__18530__auto__.push((arguments[i__18524__auto___20668]));

var G__20669 = (i__18524__auto___20668 + (1));
i__18524__auto___20668 = G__20669;
continue;
} else {
}
break;
}

var argseq__18531__auto__ = ((((0) < args__18530__auto__.length))?(new cljs.core.IndexedSeq(args__18530__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__18531__auto__);
});})(g__18599__auto___20666))
;

cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18599__auto___20666){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__18599__auto___20666),args);
});})(g__18599__auto___20666))
;

cljs.spec.impl.gen.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.one_of.cljs$lang$applyTo = ((function (g__18599__auto___20666){
return (function (seq20615){
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20615));
});})(g__18599__auto___20666))
;


var g__18599__auto___20670 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.impl.gen.such_that = ((function (g__18599__auto___20670){
return (function cljs$spec$impl$gen$such_that(var_args){
var args__18530__auto__ = [];
var len__18523__auto___20671 = arguments.length;
var i__18524__auto___20672 = (0);
while(true){
if((i__18524__auto___20672 < len__18523__auto___20671)){
args__18530__auto__.push((arguments[i__18524__auto___20672]));

var G__20673 = (i__18524__auto___20672 + (1));
i__18524__auto___20672 = G__20673;
continue;
} else {
}
break;
}

var argseq__18531__auto__ = ((((0) < args__18530__auto__.length))?(new cljs.core.IndexedSeq(args__18530__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__18531__auto__);
});})(g__18599__auto___20670))
;

cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18599__auto___20670){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__18599__auto___20670),args);
});})(g__18599__auto___20670))
;

cljs.spec.impl.gen.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.such_that.cljs$lang$applyTo = ((function (g__18599__auto___20670){
return (function (seq20616){
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20616));
});})(g__18599__auto___20670))
;


var g__18599__auto___20674 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.impl.gen.tuple = ((function (g__18599__auto___20674){
return (function cljs$spec$impl$gen$tuple(var_args){
var args__18530__auto__ = [];
var len__18523__auto___20675 = arguments.length;
var i__18524__auto___20676 = (0);
while(true){
if((i__18524__auto___20676 < len__18523__auto___20675)){
args__18530__auto__.push((arguments[i__18524__auto___20676]));

var G__20677 = (i__18524__auto___20676 + (1));
i__18524__auto___20676 = G__20677;
continue;
} else {
}
break;
}

var argseq__18531__auto__ = ((((0) < args__18530__auto__.length))?(new cljs.core.IndexedSeq(args__18530__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__18531__auto__);
});})(g__18599__auto___20674))
;

cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18599__auto___20674){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__18599__auto___20674),args);
});})(g__18599__auto___20674))
;

cljs.spec.impl.gen.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.tuple.cljs$lang$applyTo = ((function (g__18599__auto___20674){
return (function (seq20617){
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20617));
});})(g__18599__auto___20674))
;


var g__18599__auto___20678 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.impl.gen.sample = ((function (g__18599__auto___20678){
return (function cljs$spec$impl$gen$sample(var_args){
var args__18530__auto__ = [];
var len__18523__auto___20679 = arguments.length;
var i__18524__auto___20680 = (0);
while(true){
if((i__18524__auto___20680 < len__18523__auto___20679)){
args__18530__auto__.push((arguments[i__18524__auto___20680]));

var G__20681 = (i__18524__auto___20680 + (1));
i__18524__auto___20680 = G__20681;
continue;
} else {
}
break;
}

var argseq__18531__auto__ = ((((0) < args__18530__auto__.length))?(new cljs.core.IndexedSeq(args__18530__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__18531__auto__);
});})(g__18599__auto___20678))
;

cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18599__auto___20678){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__18599__auto___20678),args);
});})(g__18599__auto___20678))
;

cljs.spec.impl.gen.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.sample.cljs$lang$applyTo = ((function (g__18599__auto___20678){
return (function (seq20618){
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20618));
});})(g__18599__auto___20678))
;


var g__18599__auto___20682 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.impl.gen.return$ = ((function (g__18599__auto___20682){
return (function cljs$spec$impl$gen$return(var_args){
var args__18530__auto__ = [];
var len__18523__auto___20683 = arguments.length;
var i__18524__auto___20684 = (0);
while(true){
if((i__18524__auto___20684 < len__18523__auto___20683)){
args__18530__auto__.push((arguments[i__18524__auto___20684]));

var G__20685 = (i__18524__auto___20684 + (1));
i__18524__auto___20684 = G__20685;
continue;
} else {
}
break;
}

var argseq__18531__auto__ = ((((0) < args__18530__auto__.length))?(new cljs.core.IndexedSeq(args__18530__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__18531__auto__);
});})(g__18599__auto___20682))
;

cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18599__auto___20682){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__18599__auto___20682),args);
});})(g__18599__auto___20682))
;

cljs.spec.impl.gen.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.return$.cljs$lang$applyTo = ((function (g__18599__auto___20682){
return (function (seq20619){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20619));
});})(g__18599__auto___20682))
;


var g__18599__auto___20686 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.impl.gen.large_integer_STAR_ = ((function (g__18599__auto___20686){
return (function cljs$spec$impl$gen$large_integer_STAR_(var_args){
var args__18530__auto__ = [];
var len__18523__auto___20687 = arguments.length;
var i__18524__auto___20688 = (0);
while(true){
if((i__18524__auto___20688 < len__18523__auto___20687)){
args__18530__auto__.push((arguments[i__18524__auto___20688]));

var G__20689 = (i__18524__auto___20688 + (1));
i__18524__auto___20688 = G__20689;
continue;
} else {
}
break;
}

var argseq__18531__auto__ = ((((0) < args__18530__auto__.length))?(new cljs.core.IndexedSeq(args__18530__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__18531__auto__);
});})(g__18599__auto___20686))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18599__auto___20686){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__18599__auto___20686),args);
});})(g__18599__auto___20686))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$applyTo = ((function (g__18599__auto___20686){
return (function (seq20620){
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20620));
});})(g__18599__auto___20686))
;


var g__18599__auto___20690 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.impl.gen.double_STAR_ = ((function (g__18599__auto___20690){
return (function cljs$spec$impl$gen$double_STAR_(var_args){
var args__18530__auto__ = [];
var len__18523__auto___20691 = arguments.length;
var i__18524__auto___20692 = (0);
while(true){
if((i__18524__auto___20692 < len__18523__auto___20691)){
args__18530__auto__.push((arguments[i__18524__auto___20692]));

var G__20693 = (i__18524__auto___20692 + (1));
i__18524__auto___20692 = G__20693;
continue;
} else {
}
break;
}

var argseq__18531__auto__ = ((((0) < args__18530__auto__.length))?(new cljs.core.IndexedSeq(args__18530__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__18531__auto__);
});})(g__18599__auto___20690))
;

cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18599__auto___20690){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__18599__auto___20690),args);
});})(g__18599__auto___20690))
;

cljs.spec.impl.gen.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double_STAR_.cljs$lang$applyTo = ((function (g__18599__auto___20690){
return (function (seq20621){
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20621));
});})(g__18599__auto___20690))
;

var g__18612__auto___20715 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.impl.gen.any = ((function (g__18612__auto___20715){
return (function cljs$spec$impl$gen$any(var_args){
var args__18530__auto__ = [];
var len__18523__auto___20716 = arguments.length;
var i__18524__auto___20717 = (0);
while(true){
if((i__18524__auto___20717 < len__18523__auto___20716)){
args__18530__auto__.push((arguments[i__18524__auto___20717]));

var G__20718 = (i__18524__auto___20717 + (1));
i__18524__auto___20717 = G__20718;
continue;
} else {
}
break;
}

var argseq__18531__auto__ = ((((0) < args__18530__auto__.length))?(new cljs.core.IndexedSeq(args__18530__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(argseq__18531__auto__);
});})(g__18612__auto___20715))
;

cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18612__auto___20715){
return (function (args){
return cljs.core.deref.call(null,g__18612__auto___20715);
});})(g__18612__auto___20715))
;

cljs.spec.impl.gen.any.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any.cljs$lang$applyTo = ((function (g__18612__auto___20715){
return (function (seq20694){
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20694));
});})(g__18612__auto___20715))
;


var g__18612__auto___20719 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.impl.gen.any_printable = ((function (g__18612__auto___20719){
return (function cljs$spec$impl$gen$any_printable(var_args){
var args__18530__auto__ = [];
var len__18523__auto___20720 = arguments.length;
var i__18524__auto___20721 = (0);
while(true){
if((i__18524__auto___20721 < len__18523__auto___20720)){
args__18530__auto__.push((arguments[i__18524__auto___20721]));

var G__20722 = (i__18524__auto___20721 + (1));
i__18524__auto___20721 = G__20722;
continue;
} else {
}
break;
}

var argseq__18531__auto__ = ((((0) < args__18530__auto__.length))?(new cljs.core.IndexedSeq(args__18530__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__18531__auto__);
});})(g__18612__auto___20719))
;

cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18612__auto___20719){
return (function (args){
return cljs.core.deref.call(null,g__18612__auto___20719);
});})(g__18612__auto___20719))
;

cljs.spec.impl.gen.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any_printable.cljs$lang$applyTo = ((function (g__18612__auto___20719){
return (function (seq20695){
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20695));
});})(g__18612__auto___20719))
;


var g__18612__auto___20723 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.impl.gen.boolean$ = ((function (g__18612__auto___20723){
return (function cljs$spec$impl$gen$boolean(var_args){
var args__18530__auto__ = [];
var len__18523__auto___20724 = arguments.length;
var i__18524__auto___20725 = (0);
while(true){
if((i__18524__auto___20725 < len__18523__auto___20724)){
args__18530__auto__.push((arguments[i__18524__auto___20725]));

var G__20726 = (i__18524__auto___20725 + (1));
i__18524__auto___20725 = G__20726;
continue;
} else {
}
break;
}

var argseq__18531__auto__ = ((((0) < args__18530__auto__.length))?(new cljs.core.IndexedSeq(args__18530__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__18531__auto__);
});})(g__18612__auto___20723))
;

cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18612__auto___20723){
return (function (args){
return cljs.core.deref.call(null,g__18612__auto___20723);
});})(g__18612__auto___20723))
;

cljs.spec.impl.gen.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.boolean$.cljs$lang$applyTo = ((function (g__18612__auto___20723){
return (function (seq20696){
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20696));
});})(g__18612__auto___20723))
;


var g__18612__auto___20727 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.impl.gen.char$ = ((function (g__18612__auto___20727){
return (function cljs$spec$impl$gen$char(var_args){
var args__18530__auto__ = [];
var len__18523__auto___20728 = arguments.length;
var i__18524__auto___20729 = (0);
while(true){
if((i__18524__auto___20729 < len__18523__auto___20728)){
args__18530__auto__.push((arguments[i__18524__auto___20729]));

var G__20730 = (i__18524__auto___20729 + (1));
i__18524__auto___20729 = G__20730;
continue;
} else {
}
break;
}

var argseq__18531__auto__ = ((((0) < args__18530__auto__.length))?(new cljs.core.IndexedSeq(args__18530__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__18531__auto__);
});})(g__18612__auto___20727))
;

cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18612__auto___20727){
return (function (args){
return cljs.core.deref.call(null,g__18612__auto___20727);
});})(g__18612__auto___20727))
;

cljs.spec.impl.gen.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char$.cljs$lang$applyTo = ((function (g__18612__auto___20727){
return (function (seq20697){
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20697));
});})(g__18612__auto___20727))
;


var g__18612__auto___20731 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.impl.gen.char_alpha = ((function (g__18612__auto___20731){
return (function cljs$spec$impl$gen$char_alpha(var_args){
var args__18530__auto__ = [];
var len__18523__auto___20732 = arguments.length;
var i__18524__auto___20733 = (0);
while(true){
if((i__18524__auto___20733 < len__18523__auto___20732)){
args__18530__auto__.push((arguments[i__18524__auto___20733]));

var G__20734 = (i__18524__auto___20733 + (1));
i__18524__auto___20733 = G__20734;
continue;
} else {
}
break;
}

var argseq__18531__auto__ = ((((0) < args__18530__auto__.length))?(new cljs.core.IndexedSeq(args__18530__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__18531__auto__);
});})(g__18612__auto___20731))
;

cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18612__auto___20731){
return (function (args){
return cljs.core.deref.call(null,g__18612__auto___20731);
});})(g__18612__auto___20731))
;

cljs.spec.impl.gen.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alpha.cljs$lang$applyTo = ((function (g__18612__auto___20731){
return (function (seq20698){
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20698));
});})(g__18612__auto___20731))
;


var g__18612__auto___20735 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.impl.gen.char_alphanumeric = ((function (g__18612__auto___20735){
return (function cljs$spec$impl$gen$char_alphanumeric(var_args){
var args__18530__auto__ = [];
var len__18523__auto___20736 = arguments.length;
var i__18524__auto___20737 = (0);
while(true){
if((i__18524__auto___20737 < len__18523__auto___20736)){
args__18530__auto__.push((arguments[i__18524__auto___20737]));

var G__20738 = (i__18524__auto___20737 + (1));
i__18524__auto___20737 = G__20738;
continue;
} else {
}
break;
}

var argseq__18531__auto__ = ((((0) < args__18530__auto__.length))?(new cljs.core.IndexedSeq(args__18530__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__18531__auto__);
});})(g__18612__auto___20735))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18612__auto___20735){
return (function (args){
return cljs.core.deref.call(null,g__18612__auto___20735);
});})(g__18612__auto___20735))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$applyTo = ((function (g__18612__auto___20735){
return (function (seq20699){
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20699));
});})(g__18612__auto___20735))
;


var g__18612__auto___20739 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.impl.gen.char_ascii = ((function (g__18612__auto___20739){
return (function cljs$spec$impl$gen$char_ascii(var_args){
var args__18530__auto__ = [];
var len__18523__auto___20740 = arguments.length;
var i__18524__auto___20741 = (0);
while(true){
if((i__18524__auto___20741 < len__18523__auto___20740)){
args__18530__auto__.push((arguments[i__18524__auto___20741]));

var G__20742 = (i__18524__auto___20741 + (1));
i__18524__auto___20741 = G__20742;
continue;
} else {
}
break;
}

var argseq__18531__auto__ = ((((0) < args__18530__auto__.length))?(new cljs.core.IndexedSeq(args__18530__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__18531__auto__);
});})(g__18612__auto___20739))
;

cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18612__auto___20739){
return (function (args){
return cljs.core.deref.call(null,g__18612__auto___20739);
});})(g__18612__auto___20739))
;

cljs.spec.impl.gen.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_ascii.cljs$lang$applyTo = ((function (g__18612__auto___20739){
return (function (seq20700){
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20700));
});})(g__18612__auto___20739))
;


var g__18612__auto___20743 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.impl.gen.double$ = ((function (g__18612__auto___20743){
return (function cljs$spec$impl$gen$double(var_args){
var args__18530__auto__ = [];
var len__18523__auto___20744 = arguments.length;
var i__18524__auto___20745 = (0);
while(true){
if((i__18524__auto___20745 < len__18523__auto___20744)){
args__18530__auto__.push((arguments[i__18524__auto___20745]));

var G__20746 = (i__18524__auto___20745 + (1));
i__18524__auto___20745 = G__20746;
continue;
} else {
}
break;
}

var argseq__18531__auto__ = ((((0) < args__18530__auto__.length))?(new cljs.core.IndexedSeq(args__18530__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__18531__auto__);
});})(g__18612__auto___20743))
;

cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18612__auto___20743){
return (function (args){
return cljs.core.deref.call(null,g__18612__auto___20743);
});})(g__18612__auto___20743))
;

cljs.spec.impl.gen.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double$.cljs$lang$applyTo = ((function (g__18612__auto___20743){
return (function (seq20701){
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20701));
});})(g__18612__auto___20743))
;


var g__18612__auto___20747 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.impl.gen.int$ = ((function (g__18612__auto___20747){
return (function cljs$spec$impl$gen$int(var_args){
var args__18530__auto__ = [];
var len__18523__auto___20748 = arguments.length;
var i__18524__auto___20749 = (0);
while(true){
if((i__18524__auto___20749 < len__18523__auto___20748)){
args__18530__auto__.push((arguments[i__18524__auto___20749]));

var G__20750 = (i__18524__auto___20749 + (1));
i__18524__auto___20749 = G__20750;
continue;
} else {
}
break;
}

var argseq__18531__auto__ = ((((0) < args__18530__auto__.length))?(new cljs.core.IndexedSeq(args__18530__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__18531__auto__);
});})(g__18612__auto___20747))
;

cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18612__auto___20747){
return (function (args){
return cljs.core.deref.call(null,g__18612__auto___20747);
});})(g__18612__auto___20747))
;

cljs.spec.impl.gen.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.int$.cljs$lang$applyTo = ((function (g__18612__auto___20747){
return (function (seq20702){
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20702));
});})(g__18612__auto___20747))
;


var g__18612__auto___20751 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.impl.gen.keyword = ((function (g__18612__auto___20751){
return (function cljs$spec$impl$gen$keyword(var_args){
var args__18530__auto__ = [];
var len__18523__auto___20752 = arguments.length;
var i__18524__auto___20753 = (0);
while(true){
if((i__18524__auto___20753 < len__18523__auto___20752)){
args__18530__auto__.push((arguments[i__18524__auto___20753]));

var G__20754 = (i__18524__auto___20753 + (1));
i__18524__auto___20753 = G__20754;
continue;
} else {
}
break;
}

var argseq__18531__auto__ = ((((0) < args__18530__auto__.length))?(new cljs.core.IndexedSeq(args__18530__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__18531__auto__);
});})(g__18612__auto___20751))
;

cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18612__auto___20751){
return (function (args){
return cljs.core.deref.call(null,g__18612__auto___20751);
});})(g__18612__auto___20751))
;

cljs.spec.impl.gen.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword.cljs$lang$applyTo = ((function (g__18612__auto___20751){
return (function (seq20703){
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20703));
});})(g__18612__auto___20751))
;


var g__18612__auto___20755 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.impl.gen.keyword_ns = ((function (g__18612__auto___20755){
return (function cljs$spec$impl$gen$keyword_ns(var_args){
var args__18530__auto__ = [];
var len__18523__auto___20756 = arguments.length;
var i__18524__auto___20757 = (0);
while(true){
if((i__18524__auto___20757 < len__18523__auto___20756)){
args__18530__auto__.push((arguments[i__18524__auto___20757]));

var G__20758 = (i__18524__auto___20757 + (1));
i__18524__auto___20757 = G__20758;
continue;
} else {
}
break;
}

var argseq__18531__auto__ = ((((0) < args__18530__auto__.length))?(new cljs.core.IndexedSeq(args__18530__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__18531__auto__);
});})(g__18612__auto___20755))
;

cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18612__auto___20755){
return (function (args){
return cljs.core.deref.call(null,g__18612__auto___20755);
});})(g__18612__auto___20755))
;

cljs.spec.impl.gen.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword_ns.cljs$lang$applyTo = ((function (g__18612__auto___20755){
return (function (seq20704){
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20704));
});})(g__18612__auto___20755))
;


var g__18612__auto___20759 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.impl.gen.large_integer = ((function (g__18612__auto___20759){
return (function cljs$spec$impl$gen$large_integer(var_args){
var args__18530__auto__ = [];
var len__18523__auto___20760 = arguments.length;
var i__18524__auto___20761 = (0);
while(true){
if((i__18524__auto___20761 < len__18523__auto___20760)){
args__18530__auto__.push((arguments[i__18524__auto___20761]));

var G__20762 = (i__18524__auto___20761 + (1));
i__18524__auto___20761 = G__20762;
continue;
} else {
}
break;
}

var argseq__18531__auto__ = ((((0) < args__18530__auto__.length))?(new cljs.core.IndexedSeq(args__18530__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__18531__auto__);
});})(g__18612__auto___20759))
;

cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18612__auto___20759){
return (function (args){
return cljs.core.deref.call(null,g__18612__auto___20759);
});})(g__18612__auto___20759))
;

cljs.spec.impl.gen.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer.cljs$lang$applyTo = ((function (g__18612__auto___20759){
return (function (seq20705){
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20705));
});})(g__18612__auto___20759))
;


var g__18612__auto___20763 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.impl.gen.ratio = ((function (g__18612__auto___20763){
return (function cljs$spec$impl$gen$ratio(var_args){
var args__18530__auto__ = [];
var len__18523__auto___20764 = arguments.length;
var i__18524__auto___20765 = (0);
while(true){
if((i__18524__auto___20765 < len__18523__auto___20764)){
args__18530__auto__.push((arguments[i__18524__auto___20765]));

var G__20766 = (i__18524__auto___20765 + (1));
i__18524__auto___20765 = G__20766;
continue;
} else {
}
break;
}

var argseq__18531__auto__ = ((((0) < args__18530__auto__.length))?(new cljs.core.IndexedSeq(args__18530__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__18531__auto__);
});})(g__18612__auto___20763))
;

cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18612__auto___20763){
return (function (args){
return cljs.core.deref.call(null,g__18612__auto___20763);
});})(g__18612__auto___20763))
;

cljs.spec.impl.gen.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.ratio.cljs$lang$applyTo = ((function (g__18612__auto___20763){
return (function (seq20706){
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20706));
});})(g__18612__auto___20763))
;


var g__18612__auto___20767 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.impl.gen.simple_type = ((function (g__18612__auto___20767){
return (function cljs$spec$impl$gen$simple_type(var_args){
var args__18530__auto__ = [];
var len__18523__auto___20768 = arguments.length;
var i__18524__auto___20769 = (0);
while(true){
if((i__18524__auto___20769 < len__18523__auto___20768)){
args__18530__auto__.push((arguments[i__18524__auto___20769]));

var G__20770 = (i__18524__auto___20769 + (1));
i__18524__auto___20769 = G__20770;
continue;
} else {
}
break;
}

var argseq__18531__auto__ = ((((0) < args__18530__auto__.length))?(new cljs.core.IndexedSeq(args__18530__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__18531__auto__);
});})(g__18612__auto___20767))
;

cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18612__auto___20767){
return (function (args){
return cljs.core.deref.call(null,g__18612__auto___20767);
});})(g__18612__auto___20767))
;

cljs.spec.impl.gen.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type.cljs$lang$applyTo = ((function (g__18612__auto___20767){
return (function (seq20707){
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20707));
});})(g__18612__auto___20767))
;


var g__18612__auto___20771 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.impl.gen.simple_type_printable = ((function (g__18612__auto___20771){
return (function cljs$spec$impl$gen$simple_type_printable(var_args){
var args__18530__auto__ = [];
var len__18523__auto___20772 = arguments.length;
var i__18524__auto___20773 = (0);
while(true){
if((i__18524__auto___20773 < len__18523__auto___20772)){
args__18530__auto__.push((arguments[i__18524__auto___20773]));

var G__20774 = (i__18524__auto___20773 + (1));
i__18524__auto___20773 = G__20774;
continue;
} else {
}
break;
}

var argseq__18531__auto__ = ((((0) < args__18530__auto__.length))?(new cljs.core.IndexedSeq(args__18530__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__18531__auto__);
});})(g__18612__auto___20771))
;

cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18612__auto___20771){
return (function (args){
return cljs.core.deref.call(null,g__18612__auto___20771);
});})(g__18612__auto___20771))
;

cljs.spec.impl.gen.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type_printable.cljs$lang$applyTo = ((function (g__18612__auto___20771){
return (function (seq20708){
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20708));
});})(g__18612__auto___20771))
;


var g__18612__auto___20775 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.impl.gen.string = ((function (g__18612__auto___20775){
return (function cljs$spec$impl$gen$string(var_args){
var args__18530__auto__ = [];
var len__18523__auto___20776 = arguments.length;
var i__18524__auto___20777 = (0);
while(true){
if((i__18524__auto___20777 < len__18523__auto___20776)){
args__18530__auto__.push((arguments[i__18524__auto___20777]));

var G__20778 = (i__18524__auto___20777 + (1));
i__18524__auto___20777 = G__20778;
continue;
} else {
}
break;
}

var argseq__18531__auto__ = ((((0) < args__18530__auto__.length))?(new cljs.core.IndexedSeq(args__18530__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(argseq__18531__auto__);
});})(g__18612__auto___20775))
;

cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18612__auto___20775){
return (function (args){
return cljs.core.deref.call(null,g__18612__auto___20775);
});})(g__18612__auto___20775))
;

cljs.spec.impl.gen.string.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string.cljs$lang$applyTo = ((function (g__18612__auto___20775){
return (function (seq20709){
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20709));
});})(g__18612__auto___20775))
;


var g__18612__auto___20779 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.impl.gen.string_ascii = ((function (g__18612__auto___20779){
return (function cljs$spec$impl$gen$string_ascii(var_args){
var args__18530__auto__ = [];
var len__18523__auto___20780 = arguments.length;
var i__18524__auto___20781 = (0);
while(true){
if((i__18524__auto___20781 < len__18523__auto___20780)){
args__18530__auto__.push((arguments[i__18524__auto___20781]));

var G__20782 = (i__18524__auto___20781 + (1));
i__18524__auto___20781 = G__20782;
continue;
} else {
}
break;
}

var argseq__18531__auto__ = ((((0) < args__18530__auto__.length))?(new cljs.core.IndexedSeq(args__18530__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__18531__auto__);
});})(g__18612__auto___20779))
;

cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18612__auto___20779){
return (function (args){
return cljs.core.deref.call(null,g__18612__auto___20779);
});})(g__18612__auto___20779))
;

cljs.spec.impl.gen.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_ascii.cljs$lang$applyTo = ((function (g__18612__auto___20779){
return (function (seq20710){
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20710));
});})(g__18612__auto___20779))
;


var g__18612__auto___20783 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.impl.gen.string_alphanumeric = ((function (g__18612__auto___20783){
return (function cljs$spec$impl$gen$string_alphanumeric(var_args){
var args__18530__auto__ = [];
var len__18523__auto___20784 = arguments.length;
var i__18524__auto___20785 = (0);
while(true){
if((i__18524__auto___20785 < len__18523__auto___20784)){
args__18530__auto__.push((arguments[i__18524__auto___20785]));

var G__20786 = (i__18524__auto___20785 + (1));
i__18524__auto___20785 = G__20786;
continue;
} else {
}
break;
}

var argseq__18531__auto__ = ((((0) < args__18530__auto__.length))?(new cljs.core.IndexedSeq(args__18530__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__18531__auto__);
});})(g__18612__auto___20783))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18612__auto___20783){
return (function (args){
return cljs.core.deref.call(null,g__18612__auto___20783);
});})(g__18612__auto___20783))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$applyTo = ((function (g__18612__auto___20783){
return (function (seq20711){
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20711));
});})(g__18612__auto___20783))
;


var g__18612__auto___20787 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.impl.gen.symbol = ((function (g__18612__auto___20787){
return (function cljs$spec$impl$gen$symbol(var_args){
var args__18530__auto__ = [];
var len__18523__auto___20788 = arguments.length;
var i__18524__auto___20789 = (0);
while(true){
if((i__18524__auto___20789 < len__18523__auto___20788)){
args__18530__auto__.push((arguments[i__18524__auto___20789]));

var G__20790 = (i__18524__auto___20789 + (1));
i__18524__auto___20789 = G__20790;
continue;
} else {
}
break;
}

var argseq__18531__auto__ = ((((0) < args__18530__auto__.length))?(new cljs.core.IndexedSeq(args__18530__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__18531__auto__);
});})(g__18612__auto___20787))
;

cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18612__auto___20787){
return (function (args){
return cljs.core.deref.call(null,g__18612__auto___20787);
});})(g__18612__auto___20787))
;

cljs.spec.impl.gen.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol.cljs$lang$applyTo = ((function (g__18612__auto___20787){
return (function (seq20712){
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20712));
});})(g__18612__auto___20787))
;


var g__18612__auto___20791 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.impl.gen.symbol_ns = ((function (g__18612__auto___20791){
return (function cljs$spec$impl$gen$symbol_ns(var_args){
var args__18530__auto__ = [];
var len__18523__auto___20792 = arguments.length;
var i__18524__auto___20793 = (0);
while(true){
if((i__18524__auto___20793 < len__18523__auto___20792)){
args__18530__auto__.push((arguments[i__18524__auto___20793]));

var G__20794 = (i__18524__auto___20793 + (1));
i__18524__auto___20793 = G__20794;
continue;
} else {
}
break;
}

var argseq__18531__auto__ = ((((0) < args__18530__auto__.length))?(new cljs.core.IndexedSeq(args__18530__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__18531__auto__);
});})(g__18612__auto___20791))
;

cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18612__auto___20791){
return (function (args){
return cljs.core.deref.call(null,g__18612__auto___20791);
});})(g__18612__auto___20791))
;

cljs.spec.impl.gen.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol_ns.cljs$lang$applyTo = ((function (g__18612__auto___20791){
return (function (seq20713){
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20713));
});})(g__18612__auto___20791))
;


var g__18612__auto___20795 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.impl.gen.uuid = ((function (g__18612__auto___20795){
return (function cljs$spec$impl$gen$uuid(var_args){
var args__18530__auto__ = [];
var len__18523__auto___20796 = arguments.length;
var i__18524__auto___20797 = (0);
while(true){
if((i__18524__auto___20797 < len__18523__auto___20796)){
args__18530__auto__.push((arguments[i__18524__auto___20797]));

var G__20798 = (i__18524__auto___20797 + (1));
i__18524__auto___20797 = G__20798;
continue;
} else {
}
break;
}

var argseq__18531__auto__ = ((((0) < args__18530__auto__.length))?(new cljs.core.IndexedSeq(args__18530__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__18531__auto__);
});})(g__18612__auto___20795))
;

cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18612__auto___20795){
return (function (args){
return cljs.core.deref.call(null,g__18612__auto___20795);
});})(g__18612__auto___20795))
;

cljs.spec.impl.gen.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.uuid.cljs$lang$applyTo = ((function (g__18612__auto___20795){
return (function (seq20714){
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20714));
});})(g__18612__auto___20795))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.impl.gen.cat = (function cljs$spec$impl$gen$cat(var_args){
var args__18530__auto__ = [];
var len__18523__auto___20801 = arguments.length;
var i__18524__auto___20802 = (0);
while(true){
if((i__18524__auto___20802 < len__18523__auto___20801)){
args__18530__auto__.push((arguments[i__18524__auto___20802]));

var G__20803 = (i__18524__auto___20802 + (1));
i__18524__auto___20802 = G__20803;
continue;
} else {
}
break;
}

var argseq__18531__auto__ = ((((0) < args__18530__auto__.length))?(new cljs.core.IndexedSeq(args__18530__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__18531__auto__);
});

cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.impl.gen.fmap.call(null,(function (p1__20799_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__20799_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gens));
});

cljs.spec.impl.gen.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.cat.cljs$lang$applyTo = (function (seq20800){
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20800));
});

cljs.spec.impl.gen.qualified_QMARK_ = (function cljs$spec$impl$gen$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.impl.gen.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.impl.gen.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.keyword_ns.call(null)),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.any_printable.call(null)], null)),cljs.spec.impl.gen.boolean$.call(null),cljs.spec.impl.gen.char$.call(null),cljs.spec.impl.gen.fmap.call(null,((function (simple){
return (function (p1__20804_SHARP_){
return (new Date(p1__20804_SHARP_));
});})(simple))
,cljs.spec.impl.gen.large_integer.call(null)),cljs.spec.impl.gen.symbol.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.double$.call(null),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.impl.gen.string_alphanumeric.call(null),cljs.spec.impl.gen.double$.call(null),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.return$.call(null,(0)),cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null))),cljs.spec.impl.gen.return$.call(null,true),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.impl.gen.uuid.call(null),cljs.spec.impl.gen.return$.call(null,false),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.symbol.call(null)], null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.double$.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.symbol_ns.call(null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.string_alphanumeric.call(null)], null)),cljs.spec.impl.gen.symbol_ns.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.impl.gen.gen_for_pred = (function cljs$spec$impl$gen$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.impl.gen.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.gen_builtins),pred);
}
});

//# sourceMappingURL=gen.js.map