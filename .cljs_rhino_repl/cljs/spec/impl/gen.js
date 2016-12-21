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

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorPrWriter = (function (this__17885__auto__,writer__17886__auto__,opt__17887__auto__){
return cljs.core._write.call(null,writer__17886__auto__,"cljs.spec.impl.gen/LazyVar");
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
var args__18394__auto__ = [];
var len__18387__auto___20458 = arguments.length;
var i__18388__auto___20459 = (0);
while(true){
if((i__18388__auto___20459 < len__18387__auto___20458)){
args__18394__auto__.push((arguments[i__18388__auto___20459]));

var G__20460 = (i__18388__auto___20459 + (1));
i__18388__auto___20459 = G__20460;
continue;
} else {
}
break;
}

var argseq__18395__auto__ = ((((0) < args__18394__auto__.length))?(new cljs.core.IndexedSeq(args__18394__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__18395__auto__);
});

cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.quick_check_ref),args);
});

cljs.spec.impl.gen.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.quick_check.cljs$lang$applyTo = (function (seq20457){
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20457));
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
var args__18394__auto__ = [];
var len__18387__auto___20462 = arguments.length;
var i__18388__auto___20463 = (0);
while(true){
if((i__18388__auto___20463 < len__18387__auto___20462)){
args__18394__auto__.push((arguments[i__18388__auto___20463]));

var G__20464 = (i__18388__auto___20463 + (1));
i__18388__auto___20463 = G__20464;
continue;
} else {
}
break;
}

var argseq__18395__auto__ = ((((0) < args__18394__auto__.length))?(new cljs.core.IndexedSeq(args__18394__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__18395__auto__);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.for_all_STAR__ref),args);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$applyTo = (function (seq20461){
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20461));
});

var g_QMARK__20465 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str(" never required")].join('')));
}
}),null));
var g_20466 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__20465){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__20465))
,null));
var mkg_20467 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__20465,g_20466){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__20465,g_20466))
,null));
cljs.spec.impl.gen.generator_QMARK_ = ((function (g_QMARK__20465,g_20466,mkg_20467){
return (function cljs$spec$impl$gen$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__20465).call(null,x);
});})(g_QMARK__20465,g_20466,mkg_20467))
;

cljs.spec.impl.gen.generator = ((function (g_QMARK__20465,g_20466,mkg_20467){
return (function cljs$spec$impl$gen$generator(gfn){
return cljs.core.deref.call(null,mkg_20467).call(null,gfn);
});})(g_QMARK__20465,g_20466,mkg_20467))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.impl.gen.generate = ((function (g_QMARK__20465,g_20466,mkg_20467){
return (function cljs$spec$impl$gen$generate(generator){
return cljs.core.deref.call(null,g_20466).call(null,generator);
});})(g_QMARK__20465,g_20466,mkg_20467))
;
cljs.spec.impl.gen.delay_impl = (function cljs$spec$impl$gen$delay_impl(gfnd){
return cljs.spec.impl.gen.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__18463__auto___20486 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.impl.gen.hash_map = ((function (g__18463__auto___20486){
return (function cljs$spec$impl$gen$hash_map(var_args){
var args__18394__auto__ = [];
var len__18387__auto___20487 = arguments.length;
var i__18388__auto___20488 = (0);
while(true){
if((i__18388__auto___20488 < len__18387__auto___20487)){
args__18394__auto__.push((arguments[i__18388__auto___20488]));

var G__20489 = (i__18388__auto___20488 + (1));
i__18388__auto___20488 = G__20489;
continue;
} else {
}
break;
}

var argseq__18395__auto__ = ((((0) < args__18394__auto__.length))?(new cljs.core.IndexedSeq(args__18394__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__18395__auto__);
});})(g__18463__auto___20486))
;

cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18463__auto___20486){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__18463__auto___20486),args);
});})(g__18463__auto___20486))
;

cljs.spec.impl.gen.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.hash_map.cljs$lang$applyTo = ((function (g__18463__auto___20486){
return (function (seq20468){
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20468));
});})(g__18463__auto___20486))
;


var g__18463__auto___20490 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.impl.gen.list = ((function (g__18463__auto___20490){
return (function cljs$spec$impl$gen$list(var_args){
var args__18394__auto__ = [];
var len__18387__auto___20491 = arguments.length;
var i__18388__auto___20492 = (0);
while(true){
if((i__18388__auto___20492 < len__18387__auto___20491)){
args__18394__auto__.push((arguments[i__18388__auto___20492]));

var G__20493 = (i__18388__auto___20492 + (1));
i__18388__auto___20492 = G__20493;
continue;
} else {
}
break;
}

var argseq__18395__auto__ = ((((0) < args__18394__auto__.length))?(new cljs.core.IndexedSeq(args__18394__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(argseq__18395__auto__);
});})(g__18463__auto___20490))
;

cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18463__auto___20490){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__18463__auto___20490),args);
});})(g__18463__auto___20490))
;

cljs.spec.impl.gen.list.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.list.cljs$lang$applyTo = ((function (g__18463__auto___20490){
return (function (seq20469){
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20469));
});})(g__18463__auto___20490))
;


var g__18463__auto___20494 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.impl.gen.map = ((function (g__18463__auto___20494){
return (function cljs$spec$impl$gen$map(var_args){
var args__18394__auto__ = [];
var len__18387__auto___20495 = arguments.length;
var i__18388__auto___20496 = (0);
while(true){
if((i__18388__auto___20496 < len__18387__auto___20495)){
args__18394__auto__.push((arguments[i__18388__auto___20496]));

var G__20497 = (i__18388__auto___20496 + (1));
i__18388__auto___20496 = G__20497;
continue;
} else {
}
break;
}

var argseq__18395__auto__ = ((((0) < args__18394__auto__.length))?(new cljs.core.IndexedSeq(args__18394__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(argseq__18395__auto__);
});})(g__18463__auto___20494))
;

cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18463__auto___20494){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__18463__auto___20494),args);
});})(g__18463__auto___20494))
;

cljs.spec.impl.gen.map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.map.cljs$lang$applyTo = ((function (g__18463__auto___20494){
return (function (seq20470){
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20470));
});})(g__18463__auto___20494))
;


var g__18463__auto___20498 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.impl.gen.not_empty = ((function (g__18463__auto___20498){
return (function cljs$spec$impl$gen$not_empty(var_args){
var args__18394__auto__ = [];
var len__18387__auto___20499 = arguments.length;
var i__18388__auto___20500 = (0);
while(true){
if((i__18388__auto___20500 < len__18387__auto___20499)){
args__18394__auto__.push((arguments[i__18388__auto___20500]));

var G__20501 = (i__18388__auto___20500 + (1));
i__18388__auto___20500 = G__20501;
continue;
} else {
}
break;
}

var argseq__18395__auto__ = ((((0) < args__18394__auto__.length))?(new cljs.core.IndexedSeq(args__18394__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__18395__auto__);
});})(g__18463__auto___20498))
;

cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18463__auto___20498){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__18463__auto___20498),args);
});})(g__18463__auto___20498))
;

cljs.spec.impl.gen.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.not_empty.cljs$lang$applyTo = ((function (g__18463__auto___20498){
return (function (seq20471){
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20471));
});})(g__18463__auto___20498))
;


var g__18463__auto___20502 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.impl.gen.set = ((function (g__18463__auto___20502){
return (function cljs$spec$impl$gen$set(var_args){
var args__18394__auto__ = [];
var len__18387__auto___20503 = arguments.length;
var i__18388__auto___20504 = (0);
while(true){
if((i__18388__auto___20504 < len__18387__auto___20503)){
args__18394__auto__.push((arguments[i__18388__auto___20504]));

var G__20505 = (i__18388__auto___20504 + (1));
i__18388__auto___20504 = G__20505;
continue;
} else {
}
break;
}

var argseq__18395__auto__ = ((((0) < args__18394__auto__.length))?(new cljs.core.IndexedSeq(args__18394__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(argseq__18395__auto__);
});})(g__18463__auto___20502))
;

cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18463__auto___20502){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__18463__auto___20502),args);
});})(g__18463__auto___20502))
;

cljs.spec.impl.gen.set.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.set.cljs$lang$applyTo = ((function (g__18463__auto___20502){
return (function (seq20472){
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20472));
});})(g__18463__auto___20502))
;


var g__18463__auto___20506 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.impl.gen.vector = ((function (g__18463__auto___20506){
return (function cljs$spec$impl$gen$vector(var_args){
var args__18394__auto__ = [];
var len__18387__auto___20507 = arguments.length;
var i__18388__auto___20508 = (0);
while(true){
if((i__18388__auto___20508 < len__18387__auto___20507)){
args__18394__auto__.push((arguments[i__18388__auto___20508]));

var G__20509 = (i__18388__auto___20508 + (1));
i__18388__auto___20508 = G__20509;
continue;
} else {
}
break;
}

var argseq__18395__auto__ = ((((0) < args__18394__auto__.length))?(new cljs.core.IndexedSeq(args__18394__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__18395__auto__);
});})(g__18463__auto___20506))
;

cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18463__auto___20506){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__18463__auto___20506),args);
});})(g__18463__auto___20506))
;

cljs.spec.impl.gen.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector.cljs$lang$applyTo = ((function (g__18463__auto___20506){
return (function (seq20473){
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20473));
});})(g__18463__auto___20506))
;


var g__18463__auto___20510 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.impl.gen.vector_distinct = ((function (g__18463__auto___20510){
return (function cljs$spec$impl$gen$vector_distinct(var_args){
var args__18394__auto__ = [];
var len__18387__auto___20511 = arguments.length;
var i__18388__auto___20512 = (0);
while(true){
if((i__18388__auto___20512 < len__18387__auto___20511)){
args__18394__auto__.push((arguments[i__18388__auto___20512]));

var G__20513 = (i__18388__auto___20512 + (1));
i__18388__auto___20512 = G__20513;
continue;
} else {
}
break;
}

var argseq__18395__auto__ = ((((0) < args__18394__auto__.length))?(new cljs.core.IndexedSeq(args__18394__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__18395__auto__);
});})(g__18463__auto___20510))
;

cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18463__auto___20510){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__18463__auto___20510),args);
});})(g__18463__auto___20510))
;

cljs.spec.impl.gen.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector_distinct.cljs$lang$applyTo = ((function (g__18463__auto___20510){
return (function (seq20474){
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20474));
});})(g__18463__auto___20510))
;


var g__18463__auto___20514 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.impl.gen.fmap = ((function (g__18463__auto___20514){
return (function cljs$spec$impl$gen$fmap(var_args){
var args__18394__auto__ = [];
var len__18387__auto___20515 = arguments.length;
var i__18388__auto___20516 = (0);
while(true){
if((i__18388__auto___20516 < len__18387__auto___20515)){
args__18394__auto__.push((arguments[i__18388__auto___20516]));

var G__20517 = (i__18388__auto___20516 + (1));
i__18388__auto___20516 = G__20517;
continue;
} else {
}
break;
}

var argseq__18395__auto__ = ((((0) < args__18394__auto__.length))?(new cljs.core.IndexedSeq(args__18394__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__18395__auto__);
});})(g__18463__auto___20514))
;

cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18463__auto___20514){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__18463__auto___20514),args);
});})(g__18463__auto___20514))
;

cljs.spec.impl.gen.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.fmap.cljs$lang$applyTo = ((function (g__18463__auto___20514){
return (function (seq20475){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20475));
});})(g__18463__auto___20514))
;


var g__18463__auto___20518 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.impl.gen.elements = ((function (g__18463__auto___20518){
return (function cljs$spec$impl$gen$elements(var_args){
var args__18394__auto__ = [];
var len__18387__auto___20519 = arguments.length;
var i__18388__auto___20520 = (0);
while(true){
if((i__18388__auto___20520 < len__18387__auto___20519)){
args__18394__auto__.push((arguments[i__18388__auto___20520]));

var G__20521 = (i__18388__auto___20520 + (1));
i__18388__auto___20520 = G__20521;
continue;
} else {
}
break;
}

var argseq__18395__auto__ = ((((0) < args__18394__auto__.length))?(new cljs.core.IndexedSeq(args__18394__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__18395__auto__);
});})(g__18463__auto___20518))
;

cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18463__auto___20518){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__18463__auto___20518),args);
});})(g__18463__auto___20518))
;

cljs.spec.impl.gen.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.elements.cljs$lang$applyTo = ((function (g__18463__auto___20518){
return (function (seq20476){
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20476));
});})(g__18463__auto___20518))
;


var g__18463__auto___20522 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.impl.gen.bind = ((function (g__18463__auto___20522){
return (function cljs$spec$impl$gen$bind(var_args){
var args__18394__auto__ = [];
var len__18387__auto___20523 = arguments.length;
var i__18388__auto___20524 = (0);
while(true){
if((i__18388__auto___20524 < len__18387__auto___20523)){
args__18394__auto__.push((arguments[i__18388__auto___20524]));

var G__20525 = (i__18388__auto___20524 + (1));
i__18388__auto___20524 = G__20525;
continue;
} else {
}
break;
}

var argseq__18395__auto__ = ((((0) < args__18394__auto__.length))?(new cljs.core.IndexedSeq(args__18394__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__18395__auto__);
});})(g__18463__auto___20522))
;

cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18463__auto___20522){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__18463__auto___20522),args);
});})(g__18463__auto___20522))
;

cljs.spec.impl.gen.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.bind.cljs$lang$applyTo = ((function (g__18463__auto___20522){
return (function (seq20477){
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20477));
});})(g__18463__auto___20522))
;


var g__18463__auto___20526 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.impl.gen.choose = ((function (g__18463__auto___20526){
return (function cljs$spec$impl$gen$choose(var_args){
var args__18394__auto__ = [];
var len__18387__auto___20527 = arguments.length;
var i__18388__auto___20528 = (0);
while(true){
if((i__18388__auto___20528 < len__18387__auto___20527)){
args__18394__auto__.push((arguments[i__18388__auto___20528]));

var G__20529 = (i__18388__auto___20528 + (1));
i__18388__auto___20528 = G__20529;
continue;
} else {
}
break;
}

var argseq__18395__auto__ = ((((0) < args__18394__auto__.length))?(new cljs.core.IndexedSeq(args__18394__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__18395__auto__);
});})(g__18463__auto___20526))
;

cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18463__auto___20526){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__18463__auto___20526),args);
});})(g__18463__auto___20526))
;

cljs.spec.impl.gen.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.choose.cljs$lang$applyTo = ((function (g__18463__auto___20526){
return (function (seq20478){
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20478));
});})(g__18463__auto___20526))
;


var g__18463__auto___20530 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.impl.gen.one_of = ((function (g__18463__auto___20530){
return (function cljs$spec$impl$gen$one_of(var_args){
var args__18394__auto__ = [];
var len__18387__auto___20531 = arguments.length;
var i__18388__auto___20532 = (0);
while(true){
if((i__18388__auto___20532 < len__18387__auto___20531)){
args__18394__auto__.push((arguments[i__18388__auto___20532]));

var G__20533 = (i__18388__auto___20532 + (1));
i__18388__auto___20532 = G__20533;
continue;
} else {
}
break;
}

var argseq__18395__auto__ = ((((0) < args__18394__auto__.length))?(new cljs.core.IndexedSeq(args__18394__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__18395__auto__);
});})(g__18463__auto___20530))
;

cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18463__auto___20530){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__18463__auto___20530),args);
});})(g__18463__auto___20530))
;

cljs.spec.impl.gen.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.one_of.cljs$lang$applyTo = ((function (g__18463__auto___20530){
return (function (seq20479){
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20479));
});})(g__18463__auto___20530))
;


var g__18463__auto___20534 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.impl.gen.such_that = ((function (g__18463__auto___20534){
return (function cljs$spec$impl$gen$such_that(var_args){
var args__18394__auto__ = [];
var len__18387__auto___20535 = arguments.length;
var i__18388__auto___20536 = (0);
while(true){
if((i__18388__auto___20536 < len__18387__auto___20535)){
args__18394__auto__.push((arguments[i__18388__auto___20536]));

var G__20537 = (i__18388__auto___20536 + (1));
i__18388__auto___20536 = G__20537;
continue;
} else {
}
break;
}

var argseq__18395__auto__ = ((((0) < args__18394__auto__.length))?(new cljs.core.IndexedSeq(args__18394__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__18395__auto__);
});})(g__18463__auto___20534))
;

cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18463__auto___20534){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__18463__auto___20534),args);
});})(g__18463__auto___20534))
;

cljs.spec.impl.gen.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.such_that.cljs$lang$applyTo = ((function (g__18463__auto___20534){
return (function (seq20480){
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20480));
});})(g__18463__auto___20534))
;


var g__18463__auto___20538 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.impl.gen.tuple = ((function (g__18463__auto___20538){
return (function cljs$spec$impl$gen$tuple(var_args){
var args__18394__auto__ = [];
var len__18387__auto___20539 = arguments.length;
var i__18388__auto___20540 = (0);
while(true){
if((i__18388__auto___20540 < len__18387__auto___20539)){
args__18394__auto__.push((arguments[i__18388__auto___20540]));

var G__20541 = (i__18388__auto___20540 + (1));
i__18388__auto___20540 = G__20541;
continue;
} else {
}
break;
}

var argseq__18395__auto__ = ((((0) < args__18394__auto__.length))?(new cljs.core.IndexedSeq(args__18394__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__18395__auto__);
});})(g__18463__auto___20538))
;

cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18463__auto___20538){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__18463__auto___20538),args);
});})(g__18463__auto___20538))
;

cljs.spec.impl.gen.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.tuple.cljs$lang$applyTo = ((function (g__18463__auto___20538){
return (function (seq20481){
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20481));
});})(g__18463__auto___20538))
;


var g__18463__auto___20542 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.impl.gen.sample = ((function (g__18463__auto___20542){
return (function cljs$spec$impl$gen$sample(var_args){
var args__18394__auto__ = [];
var len__18387__auto___20543 = arguments.length;
var i__18388__auto___20544 = (0);
while(true){
if((i__18388__auto___20544 < len__18387__auto___20543)){
args__18394__auto__.push((arguments[i__18388__auto___20544]));

var G__20545 = (i__18388__auto___20544 + (1));
i__18388__auto___20544 = G__20545;
continue;
} else {
}
break;
}

var argseq__18395__auto__ = ((((0) < args__18394__auto__.length))?(new cljs.core.IndexedSeq(args__18394__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__18395__auto__);
});})(g__18463__auto___20542))
;

cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18463__auto___20542){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__18463__auto___20542),args);
});})(g__18463__auto___20542))
;

cljs.spec.impl.gen.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.sample.cljs$lang$applyTo = ((function (g__18463__auto___20542){
return (function (seq20482){
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20482));
});})(g__18463__auto___20542))
;


var g__18463__auto___20546 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.impl.gen.return$ = ((function (g__18463__auto___20546){
return (function cljs$spec$impl$gen$return(var_args){
var args__18394__auto__ = [];
var len__18387__auto___20547 = arguments.length;
var i__18388__auto___20548 = (0);
while(true){
if((i__18388__auto___20548 < len__18387__auto___20547)){
args__18394__auto__.push((arguments[i__18388__auto___20548]));

var G__20549 = (i__18388__auto___20548 + (1));
i__18388__auto___20548 = G__20549;
continue;
} else {
}
break;
}

var argseq__18395__auto__ = ((((0) < args__18394__auto__.length))?(new cljs.core.IndexedSeq(args__18394__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__18395__auto__);
});})(g__18463__auto___20546))
;

cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18463__auto___20546){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__18463__auto___20546),args);
});})(g__18463__auto___20546))
;

cljs.spec.impl.gen.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.return$.cljs$lang$applyTo = ((function (g__18463__auto___20546){
return (function (seq20483){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20483));
});})(g__18463__auto___20546))
;


var g__18463__auto___20550 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.impl.gen.large_integer_STAR_ = ((function (g__18463__auto___20550){
return (function cljs$spec$impl$gen$large_integer_STAR_(var_args){
var args__18394__auto__ = [];
var len__18387__auto___20551 = arguments.length;
var i__18388__auto___20552 = (0);
while(true){
if((i__18388__auto___20552 < len__18387__auto___20551)){
args__18394__auto__.push((arguments[i__18388__auto___20552]));

var G__20553 = (i__18388__auto___20552 + (1));
i__18388__auto___20552 = G__20553;
continue;
} else {
}
break;
}

var argseq__18395__auto__ = ((((0) < args__18394__auto__.length))?(new cljs.core.IndexedSeq(args__18394__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__18395__auto__);
});})(g__18463__auto___20550))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18463__auto___20550){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__18463__auto___20550),args);
});})(g__18463__auto___20550))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$applyTo = ((function (g__18463__auto___20550){
return (function (seq20484){
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20484));
});})(g__18463__auto___20550))
;


var g__18463__auto___20554 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.impl.gen.double_STAR_ = ((function (g__18463__auto___20554){
return (function cljs$spec$impl$gen$double_STAR_(var_args){
var args__18394__auto__ = [];
var len__18387__auto___20555 = arguments.length;
var i__18388__auto___20556 = (0);
while(true){
if((i__18388__auto___20556 < len__18387__auto___20555)){
args__18394__auto__.push((arguments[i__18388__auto___20556]));

var G__20557 = (i__18388__auto___20556 + (1));
i__18388__auto___20556 = G__20557;
continue;
} else {
}
break;
}

var argseq__18395__auto__ = ((((0) < args__18394__auto__.length))?(new cljs.core.IndexedSeq(args__18394__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__18395__auto__);
});})(g__18463__auto___20554))
;

cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18463__auto___20554){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__18463__auto___20554),args);
});})(g__18463__auto___20554))
;

cljs.spec.impl.gen.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double_STAR_.cljs$lang$applyTo = ((function (g__18463__auto___20554){
return (function (seq20485){
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20485));
});})(g__18463__auto___20554))
;

var g__18476__auto___20579 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.impl.gen.any = ((function (g__18476__auto___20579){
return (function cljs$spec$impl$gen$any(var_args){
var args__18394__auto__ = [];
var len__18387__auto___20580 = arguments.length;
var i__18388__auto___20581 = (0);
while(true){
if((i__18388__auto___20581 < len__18387__auto___20580)){
args__18394__auto__.push((arguments[i__18388__auto___20581]));

var G__20582 = (i__18388__auto___20581 + (1));
i__18388__auto___20581 = G__20582;
continue;
} else {
}
break;
}

var argseq__18395__auto__ = ((((0) < args__18394__auto__.length))?(new cljs.core.IndexedSeq(args__18394__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(argseq__18395__auto__);
});})(g__18476__auto___20579))
;

cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18476__auto___20579){
return (function (args){
return cljs.core.deref.call(null,g__18476__auto___20579);
});})(g__18476__auto___20579))
;

cljs.spec.impl.gen.any.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any.cljs$lang$applyTo = ((function (g__18476__auto___20579){
return (function (seq20558){
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20558));
});})(g__18476__auto___20579))
;


var g__18476__auto___20583 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.impl.gen.any_printable = ((function (g__18476__auto___20583){
return (function cljs$spec$impl$gen$any_printable(var_args){
var args__18394__auto__ = [];
var len__18387__auto___20584 = arguments.length;
var i__18388__auto___20585 = (0);
while(true){
if((i__18388__auto___20585 < len__18387__auto___20584)){
args__18394__auto__.push((arguments[i__18388__auto___20585]));

var G__20586 = (i__18388__auto___20585 + (1));
i__18388__auto___20585 = G__20586;
continue;
} else {
}
break;
}

var argseq__18395__auto__ = ((((0) < args__18394__auto__.length))?(new cljs.core.IndexedSeq(args__18394__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__18395__auto__);
});})(g__18476__auto___20583))
;

cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18476__auto___20583){
return (function (args){
return cljs.core.deref.call(null,g__18476__auto___20583);
});})(g__18476__auto___20583))
;

cljs.spec.impl.gen.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any_printable.cljs$lang$applyTo = ((function (g__18476__auto___20583){
return (function (seq20559){
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20559));
});})(g__18476__auto___20583))
;


var g__18476__auto___20587 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.impl.gen.boolean$ = ((function (g__18476__auto___20587){
return (function cljs$spec$impl$gen$boolean(var_args){
var args__18394__auto__ = [];
var len__18387__auto___20588 = arguments.length;
var i__18388__auto___20589 = (0);
while(true){
if((i__18388__auto___20589 < len__18387__auto___20588)){
args__18394__auto__.push((arguments[i__18388__auto___20589]));

var G__20590 = (i__18388__auto___20589 + (1));
i__18388__auto___20589 = G__20590;
continue;
} else {
}
break;
}

var argseq__18395__auto__ = ((((0) < args__18394__auto__.length))?(new cljs.core.IndexedSeq(args__18394__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__18395__auto__);
});})(g__18476__auto___20587))
;

cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18476__auto___20587){
return (function (args){
return cljs.core.deref.call(null,g__18476__auto___20587);
});})(g__18476__auto___20587))
;

cljs.spec.impl.gen.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.boolean$.cljs$lang$applyTo = ((function (g__18476__auto___20587){
return (function (seq20560){
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20560));
});})(g__18476__auto___20587))
;


var g__18476__auto___20591 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.impl.gen.char$ = ((function (g__18476__auto___20591){
return (function cljs$spec$impl$gen$char(var_args){
var args__18394__auto__ = [];
var len__18387__auto___20592 = arguments.length;
var i__18388__auto___20593 = (0);
while(true){
if((i__18388__auto___20593 < len__18387__auto___20592)){
args__18394__auto__.push((arguments[i__18388__auto___20593]));

var G__20594 = (i__18388__auto___20593 + (1));
i__18388__auto___20593 = G__20594;
continue;
} else {
}
break;
}

var argseq__18395__auto__ = ((((0) < args__18394__auto__.length))?(new cljs.core.IndexedSeq(args__18394__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__18395__auto__);
});})(g__18476__auto___20591))
;

cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18476__auto___20591){
return (function (args){
return cljs.core.deref.call(null,g__18476__auto___20591);
});})(g__18476__auto___20591))
;

cljs.spec.impl.gen.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char$.cljs$lang$applyTo = ((function (g__18476__auto___20591){
return (function (seq20561){
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20561));
});})(g__18476__auto___20591))
;


var g__18476__auto___20595 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.impl.gen.char_alpha = ((function (g__18476__auto___20595){
return (function cljs$spec$impl$gen$char_alpha(var_args){
var args__18394__auto__ = [];
var len__18387__auto___20596 = arguments.length;
var i__18388__auto___20597 = (0);
while(true){
if((i__18388__auto___20597 < len__18387__auto___20596)){
args__18394__auto__.push((arguments[i__18388__auto___20597]));

var G__20598 = (i__18388__auto___20597 + (1));
i__18388__auto___20597 = G__20598;
continue;
} else {
}
break;
}

var argseq__18395__auto__ = ((((0) < args__18394__auto__.length))?(new cljs.core.IndexedSeq(args__18394__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__18395__auto__);
});})(g__18476__auto___20595))
;

cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18476__auto___20595){
return (function (args){
return cljs.core.deref.call(null,g__18476__auto___20595);
});})(g__18476__auto___20595))
;

cljs.spec.impl.gen.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alpha.cljs$lang$applyTo = ((function (g__18476__auto___20595){
return (function (seq20562){
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20562));
});})(g__18476__auto___20595))
;


var g__18476__auto___20599 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.impl.gen.char_alphanumeric = ((function (g__18476__auto___20599){
return (function cljs$spec$impl$gen$char_alphanumeric(var_args){
var args__18394__auto__ = [];
var len__18387__auto___20600 = arguments.length;
var i__18388__auto___20601 = (0);
while(true){
if((i__18388__auto___20601 < len__18387__auto___20600)){
args__18394__auto__.push((arguments[i__18388__auto___20601]));

var G__20602 = (i__18388__auto___20601 + (1));
i__18388__auto___20601 = G__20602;
continue;
} else {
}
break;
}

var argseq__18395__auto__ = ((((0) < args__18394__auto__.length))?(new cljs.core.IndexedSeq(args__18394__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__18395__auto__);
});})(g__18476__auto___20599))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18476__auto___20599){
return (function (args){
return cljs.core.deref.call(null,g__18476__auto___20599);
});})(g__18476__auto___20599))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$applyTo = ((function (g__18476__auto___20599){
return (function (seq20563){
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20563));
});})(g__18476__auto___20599))
;


var g__18476__auto___20603 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.impl.gen.char_ascii = ((function (g__18476__auto___20603){
return (function cljs$spec$impl$gen$char_ascii(var_args){
var args__18394__auto__ = [];
var len__18387__auto___20604 = arguments.length;
var i__18388__auto___20605 = (0);
while(true){
if((i__18388__auto___20605 < len__18387__auto___20604)){
args__18394__auto__.push((arguments[i__18388__auto___20605]));

var G__20606 = (i__18388__auto___20605 + (1));
i__18388__auto___20605 = G__20606;
continue;
} else {
}
break;
}

var argseq__18395__auto__ = ((((0) < args__18394__auto__.length))?(new cljs.core.IndexedSeq(args__18394__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__18395__auto__);
});})(g__18476__auto___20603))
;

cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18476__auto___20603){
return (function (args){
return cljs.core.deref.call(null,g__18476__auto___20603);
});})(g__18476__auto___20603))
;

cljs.spec.impl.gen.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_ascii.cljs$lang$applyTo = ((function (g__18476__auto___20603){
return (function (seq20564){
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20564));
});})(g__18476__auto___20603))
;


var g__18476__auto___20607 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.impl.gen.double$ = ((function (g__18476__auto___20607){
return (function cljs$spec$impl$gen$double(var_args){
var args__18394__auto__ = [];
var len__18387__auto___20608 = arguments.length;
var i__18388__auto___20609 = (0);
while(true){
if((i__18388__auto___20609 < len__18387__auto___20608)){
args__18394__auto__.push((arguments[i__18388__auto___20609]));

var G__20610 = (i__18388__auto___20609 + (1));
i__18388__auto___20609 = G__20610;
continue;
} else {
}
break;
}

var argseq__18395__auto__ = ((((0) < args__18394__auto__.length))?(new cljs.core.IndexedSeq(args__18394__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__18395__auto__);
});})(g__18476__auto___20607))
;

cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18476__auto___20607){
return (function (args){
return cljs.core.deref.call(null,g__18476__auto___20607);
});})(g__18476__auto___20607))
;

cljs.spec.impl.gen.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double$.cljs$lang$applyTo = ((function (g__18476__auto___20607){
return (function (seq20565){
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20565));
});})(g__18476__auto___20607))
;


var g__18476__auto___20611 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.impl.gen.int$ = ((function (g__18476__auto___20611){
return (function cljs$spec$impl$gen$int(var_args){
var args__18394__auto__ = [];
var len__18387__auto___20612 = arguments.length;
var i__18388__auto___20613 = (0);
while(true){
if((i__18388__auto___20613 < len__18387__auto___20612)){
args__18394__auto__.push((arguments[i__18388__auto___20613]));

var G__20614 = (i__18388__auto___20613 + (1));
i__18388__auto___20613 = G__20614;
continue;
} else {
}
break;
}

var argseq__18395__auto__ = ((((0) < args__18394__auto__.length))?(new cljs.core.IndexedSeq(args__18394__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__18395__auto__);
});})(g__18476__auto___20611))
;

cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18476__auto___20611){
return (function (args){
return cljs.core.deref.call(null,g__18476__auto___20611);
});})(g__18476__auto___20611))
;

cljs.spec.impl.gen.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.int$.cljs$lang$applyTo = ((function (g__18476__auto___20611){
return (function (seq20566){
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20566));
});})(g__18476__auto___20611))
;


var g__18476__auto___20615 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.impl.gen.keyword = ((function (g__18476__auto___20615){
return (function cljs$spec$impl$gen$keyword(var_args){
var args__18394__auto__ = [];
var len__18387__auto___20616 = arguments.length;
var i__18388__auto___20617 = (0);
while(true){
if((i__18388__auto___20617 < len__18387__auto___20616)){
args__18394__auto__.push((arguments[i__18388__auto___20617]));

var G__20618 = (i__18388__auto___20617 + (1));
i__18388__auto___20617 = G__20618;
continue;
} else {
}
break;
}

var argseq__18395__auto__ = ((((0) < args__18394__auto__.length))?(new cljs.core.IndexedSeq(args__18394__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__18395__auto__);
});})(g__18476__auto___20615))
;

cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18476__auto___20615){
return (function (args){
return cljs.core.deref.call(null,g__18476__auto___20615);
});})(g__18476__auto___20615))
;

cljs.spec.impl.gen.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword.cljs$lang$applyTo = ((function (g__18476__auto___20615){
return (function (seq20567){
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20567));
});})(g__18476__auto___20615))
;


var g__18476__auto___20619 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.impl.gen.keyword_ns = ((function (g__18476__auto___20619){
return (function cljs$spec$impl$gen$keyword_ns(var_args){
var args__18394__auto__ = [];
var len__18387__auto___20620 = arguments.length;
var i__18388__auto___20621 = (0);
while(true){
if((i__18388__auto___20621 < len__18387__auto___20620)){
args__18394__auto__.push((arguments[i__18388__auto___20621]));

var G__20622 = (i__18388__auto___20621 + (1));
i__18388__auto___20621 = G__20622;
continue;
} else {
}
break;
}

var argseq__18395__auto__ = ((((0) < args__18394__auto__.length))?(new cljs.core.IndexedSeq(args__18394__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__18395__auto__);
});})(g__18476__auto___20619))
;

cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18476__auto___20619){
return (function (args){
return cljs.core.deref.call(null,g__18476__auto___20619);
});})(g__18476__auto___20619))
;

cljs.spec.impl.gen.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword_ns.cljs$lang$applyTo = ((function (g__18476__auto___20619){
return (function (seq20568){
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20568));
});})(g__18476__auto___20619))
;


var g__18476__auto___20623 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.impl.gen.large_integer = ((function (g__18476__auto___20623){
return (function cljs$spec$impl$gen$large_integer(var_args){
var args__18394__auto__ = [];
var len__18387__auto___20624 = arguments.length;
var i__18388__auto___20625 = (0);
while(true){
if((i__18388__auto___20625 < len__18387__auto___20624)){
args__18394__auto__.push((arguments[i__18388__auto___20625]));

var G__20626 = (i__18388__auto___20625 + (1));
i__18388__auto___20625 = G__20626;
continue;
} else {
}
break;
}

var argseq__18395__auto__ = ((((0) < args__18394__auto__.length))?(new cljs.core.IndexedSeq(args__18394__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__18395__auto__);
});})(g__18476__auto___20623))
;

cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18476__auto___20623){
return (function (args){
return cljs.core.deref.call(null,g__18476__auto___20623);
});})(g__18476__auto___20623))
;

cljs.spec.impl.gen.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer.cljs$lang$applyTo = ((function (g__18476__auto___20623){
return (function (seq20569){
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20569));
});})(g__18476__auto___20623))
;


var g__18476__auto___20627 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.impl.gen.ratio = ((function (g__18476__auto___20627){
return (function cljs$spec$impl$gen$ratio(var_args){
var args__18394__auto__ = [];
var len__18387__auto___20628 = arguments.length;
var i__18388__auto___20629 = (0);
while(true){
if((i__18388__auto___20629 < len__18387__auto___20628)){
args__18394__auto__.push((arguments[i__18388__auto___20629]));

var G__20630 = (i__18388__auto___20629 + (1));
i__18388__auto___20629 = G__20630;
continue;
} else {
}
break;
}

var argseq__18395__auto__ = ((((0) < args__18394__auto__.length))?(new cljs.core.IndexedSeq(args__18394__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__18395__auto__);
});})(g__18476__auto___20627))
;

cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18476__auto___20627){
return (function (args){
return cljs.core.deref.call(null,g__18476__auto___20627);
});})(g__18476__auto___20627))
;

cljs.spec.impl.gen.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.ratio.cljs$lang$applyTo = ((function (g__18476__auto___20627){
return (function (seq20570){
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20570));
});})(g__18476__auto___20627))
;


var g__18476__auto___20631 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.impl.gen.simple_type = ((function (g__18476__auto___20631){
return (function cljs$spec$impl$gen$simple_type(var_args){
var args__18394__auto__ = [];
var len__18387__auto___20632 = arguments.length;
var i__18388__auto___20633 = (0);
while(true){
if((i__18388__auto___20633 < len__18387__auto___20632)){
args__18394__auto__.push((arguments[i__18388__auto___20633]));

var G__20634 = (i__18388__auto___20633 + (1));
i__18388__auto___20633 = G__20634;
continue;
} else {
}
break;
}

var argseq__18395__auto__ = ((((0) < args__18394__auto__.length))?(new cljs.core.IndexedSeq(args__18394__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__18395__auto__);
});})(g__18476__auto___20631))
;

cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18476__auto___20631){
return (function (args){
return cljs.core.deref.call(null,g__18476__auto___20631);
});})(g__18476__auto___20631))
;

cljs.spec.impl.gen.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type.cljs$lang$applyTo = ((function (g__18476__auto___20631){
return (function (seq20571){
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20571));
});})(g__18476__auto___20631))
;


var g__18476__auto___20635 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.impl.gen.simple_type_printable = ((function (g__18476__auto___20635){
return (function cljs$spec$impl$gen$simple_type_printable(var_args){
var args__18394__auto__ = [];
var len__18387__auto___20636 = arguments.length;
var i__18388__auto___20637 = (0);
while(true){
if((i__18388__auto___20637 < len__18387__auto___20636)){
args__18394__auto__.push((arguments[i__18388__auto___20637]));

var G__20638 = (i__18388__auto___20637 + (1));
i__18388__auto___20637 = G__20638;
continue;
} else {
}
break;
}

var argseq__18395__auto__ = ((((0) < args__18394__auto__.length))?(new cljs.core.IndexedSeq(args__18394__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__18395__auto__);
});})(g__18476__auto___20635))
;

cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18476__auto___20635){
return (function (args){
return cljs.core.deref.call(null,g__18476__auto___20635);
});})(g__18476__auto___20635))
;

cljs.spec.impl.gen.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type_printable.cljs$lang$applyTo = ((function (g__18476__auto___20635){
return (function (seq20572){
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20572));
});})(g__18476__auto___20635))
;


var g__18476__auto___20639 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.impl.gen.string = ((function (g__18476__auto___20639){
return (function cljs$spec$impl$gen$string(var_args){
var args__18394__auto__ = [];
var len__18387__auto___20640 = arguments.length;
var i__18388__auto___20641 = (0);
while(true){
if((i__18388__auto___20641 < len__18387__auto___20640)){
args__18394__auto__.push((arguments[i__18388__auto___20641]));

var G__20642 = (i__18388__auto___20641 + (1));
i__18388__auto___20641 = G__20642;
continue;
} else {
}
break;
}

var argseq__18395__auto__ = ((((0) < args__18394__auto__.length))?(new cljs.core.IndexedSeq(args__18394__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(argseq__18395__auto__);
});})(g__18476__auto___20639))
;

cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18476__auto___20639){
return (function (args){
return cljs.core.deref.call(null,g__18476__auto___20639);
});})(g__18476__auto___20639))
;

cljs.spec.impl.gen.string.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string.cljs$lang$applyTo = ((function (g__18476__auto___20639){
return (function (seq20573){
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20573));
});})(g__18476__auto___20639))
;


var g__18476__auto___20643 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.impl.gen.string_ascii = ((function (g__18476__auto___20643){
return (function cljs$spec$impl$gen$string_ascii(var_args){
var args__18394__auto__ = [];
var len__18387__auto___20644 = arguments.length;
var i__18388__auto___20645 = (0);
while(true){
if((i__18388__auto___20645 < len__18387__auto___20644)){
args__18394__auto__.push((arguments[i__18388__auto___20645]));

var G__20646 = (i__18388__auto___20645 + (1));
i__18388__auto___20645 = G__20646;
continue;
} else {
}
break;
}

var argseq__18395__auto__ = ((((0) < args__18394__auto__.length))?(new cljs.core.IndexedSeq(args__18394__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__18395__auto__);
});})(g__18476__auto___20643))
;

cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18476__auto___20643){
return (function (args){
return cljs.core.deref.call(null,g__18476__auto___20643);
});})(g__18476__auto___20643))
;

cljs.spec.impl.gen.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_ascii.cljs$lang$applyTo = ((function (g__18476__auto___20643){
return (function (seq20574){
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20574));
});})(g__18476__auto___20643))
;


var g__18476__auto___20647 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.impl.gen.string_alphanumeric = ((function (g__18476__auto___20647){
return (function cljs$spec$impl$gen$string_alphanumeric(var_args){
var args__18394__auto__ = [];
var len__18387__auto___20648 = arguments.length;
var i__18388__auto___20649 = (0);
while(true){
if((i__18388__auto___20649 < len__18387__auto___20648)){
args__18394__auto__.push((arguments[i__18388__auto___20649]));

var G__20650 = (i__18388__auto___20649 + (1));
i__18388__auto___20649 = G__20650;
continue;
} else {
}
break;
}

var argseq__18395__auto__ = ((((0) < args__18394__auto__.length))?(new cljs.core.IndexedSeq(args__18394__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__18395__auto__);
});})(g__18476__auto___20647))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18476__auto___20647){
return (function (args){
return cljs.core.deref.call(null,g__18476__auto___20647);
});})(g__18476__auto___20647))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$applyTo = ((function (g__18476__auto___20647){
return (function (seq20575){
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20575));
});})(g__18476__auto___20647))
;


var g__18476__auto___20651 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.impl.gen.symbol = ((function (g__18476__auto___20651){
return (function cljs$spec$impl$gen$symbol(var_args){
var args__18394__auto__ = [];
var len__18387__auto___20652 = arguments.length;
var i__18388__auto___20653 = (0);
while(true){
if((i__18388__auto___20653 < len__18387__auto___20652)){
args__18394__auto__.push((arguments[i__18388__auto___20653]));

var G__20654 = (i__18388__auto___20653 + (1));
i__18388__auto___20653 = G__20654;
continue;
} else {
}
break;
}

var argseq__18395__auto__ = ((((0) < args__18394__auto__.length))?(new cljs.core.IndexedSeq(args__18394__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__18395__auto__);
});})(g__18476__auto___20651))
;

cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18476__auto___20651){
return (function (args){
return cljs.core.deref.call(null,g__18476__auto___20651);
});})(g__18476__auto___20651))
;

cljs.spec.impl.gen.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol.cljs$lang$applyTo = ((function (g__18476__auto___20651){
return (function (seq20576){
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20576));
});})(g__18476__auto___20651))
;


var g__18476__auto___20655 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.impl.gen.symbol_ns = ((function (g__18476__auto___20655){
return (function cljs$spec$impl$gen$symbol_ns(var_args){
var args__18394__auto__ = [];
var len__18387__auto___20656 = arguments.length;
var i__18388__auto___20657 = (0);
while(true){
if((i__18388__auto___20657 < len__18387__auto___20656)){
args__18394__auto__.push((arguments[i__18388__auto___20657]));

var G__20658 = (i__18388__auto___20657 + (1));
i__18388__auto___20657 = G__20658;
continue;
} else {
}
break;
}

var argseq__18395__auto__ = ((((0) < args__18394__auto__.length))?(new cljs.core.IndexedSeq(args__18394__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__18395__auto__);
});})(g__18476__auto___20655))
;

cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18476__auto___20655){
return (function (args){
return cljs.core.deref.call(null,g__18476__auto___20655);
});})(g__18476__auto___20655))
;

cljs.spec.impl.gen.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol_ns.cljs$lang$applyTo = ((function (g__18476__auto___20655){
return (function (seq20577){
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20577));
});})(g__18476__auto___20655))
;


var g__18476__auto___20659 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.impl.gen.uuid = ((function (g__18476__auto___20659){
return (function cljs$spec$impl$gen$uuid(var_args){
var args__18394__auto__ = [];
var len__18387__auto___20660 = arguments.length;
var i__18388__auto___20661 = (0);
while(true){
if((i__18388__auto___20661 < len__18387__auto___20660)){
args__18394__auto__.push((arguments[i__18388__auto___20661]));

var G__20662 = (i__18388__auto___20661 + (1));
i__18388__auto___20661 = G__20662;
continue;
} else {
}
break;
}

var argseq__18395__auto__ = ((((0) < args__18394__auto__.length))?(new cljs.core.IndexedSeq(args__18394__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__18395__auto__);
});})(g__18476__auto___20659))
;

cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18476__auto___20659){
return (function (args){
return cljs.core.deref.call(null,g__18476__auto___20659);
});})(g__18476__auto___20659))
;

cljs.spec.impl.gen.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.uuid.cljs$lang$applyTo = ((function (g__18476__auto___20659){
return (function (seq20578){
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20578));
});})(g__18476__auto___20659))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.impl.gen.cat = (function cljs$spec$impl$gen$cat(var_args){
var args__18394__auto__ = [];
var len__18387__auto___20665 = arguments.length;
var i__18388__auto___20666 = (0);
while(true){
if((i__18388__auto___20666 < len__18387__auto___20665)){
args__18394__auto__.push((arguments[i__18388__auto___20666]));

var G__20667 = (i__18388__auto___20666 + (1));
i__18388__auto___20666 = G__20667;
continue;
} else {
}
break;
}

var argseq__18395__auto__ = ((((0) < args__18394__auto__.length))?(new cljs.core.IndexedSeq(args__18394__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__18395__auto__);
});

cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.impl.gen.fmap.call(null,(function (p1__20663_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__20663_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gens));
});

cljs.spec.impl.gen.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.cat.cljs$lang$applyTo = (function (seq20664){
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20664));
});

cljs.spec.impl.gen.qualified_QMARK_ = (function cljs$spec$impl$gen$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.impl.gen.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.impl.gen.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.keyword_ns.call(null)),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.any_printable.call(null)], null)),cljs.spec.impl.gen.boolean$.call(null),cljs.spec.impl.gen.char$.call(null),cljs.spec.impl.gen.fmap.call(null,((function (simple){
return (function (p1__20668_SHARP_){
return (new Date(p1__20668_SHARP_));
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