// Compiled by ClojureScript 1.9.293 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__19472){
var map__19497 = p__19472;
var map__19497__$1 = ((((!((map__19497 == null)))?((((map__19497.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19497.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19497):map__19497);
var m = map__19497__$1;
var n = cljs.core.get.call(null,map__19497__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__19497__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__19499_19521 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__19500_19522 = null;
var count__19501_19523 = (0);
var i__19502_19524 = (0);
while(true){
if((i__19502_19524 < count__19501_19523)){
var f_19525 = cljs.core._nth.call(null,chunk__19500_19522,i__19502_19524);
cljs.core.println.call(null,"  ",f_19525);

var G__19526 = seq__19499_19521;
var G__19527 = chunk__19500_19522;
var G__19528 = count__19501_19523;
var G__19529 = (i__19502_19524 + (1));
seq__19499_19521 = G__19526;
chunk__19500_19522 = G__19527;
count__19501_19523 = G__19528;
i__19502_19524 = G__19529;
continue;
} else {
var temp__4657__auto___19530 = cljs.core.seq.call(null,seq__19499_19521);
if(temp__4657__auto___19530){
var seq__19499_19531__$1 = temp__4657__auto___19530;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19499_19531__$1)){
var c__18093__auto___19532 = cljs.core.chunk_first.call(null,seq__19499_19531__$1);
var G__19533 = cljs.core.chunk_rest.call(null,seq__19499_19531__$1);
var G__19534 = c__18093__auto___19532;
var G__19535 = cljs.core.count.call(null,c__18093__auto___19532);
var G__19536 = (0);
seq__19499_19521 = G__19533;
chunk__19500_19522 = G__19534;
count__19501_19523 = G__19535;
i__19502_19524 = G__19536;
continue;
} else {
var f_19537 = cljs.core.first.call(null,seq__19499_19531__$1);
cljs.core.println.call(null,"  ",f_19537);

var G__19538 = cljs.core.next.call(null,seq__19499_19531__$1);
var G__19539 = null;
var G__19540 = (0);
var G__19541 = (0);
seq__19499_19521 = G__19538;
chunk__19500_19522 = G__19539;
count__19501_19523 = G__19540;
i__19502_19524 = G__19541;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_19542 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__17279__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__17279__auto__)){
return or__17279__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_19542);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_19542)))?cljs.core.second.call(null,arglists_19542):arglists_19542));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__19503_19543 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__19504_19544 = null;
var count__19505_19545 = (0);
var i__19506_19546 = (0);
while(true){
if((i__19506_19546 < count__19505_19545)){
var vec__19507_19547 = cljs.core._nth.call(null,chunk__19504_19544,i__19506_19546);
var name_19548 = cljs.core.nth.call(null,vec__19507_19547,(0),null);
var map__19510_19549 = cljs.core.nth.call(null,vec__19507_19547,(1),null);
var map__19510_19550__$1 = ((((!((map__19510_19549 == null)))?((((map__19510_19549.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19510_19549.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19510_19549):map__19510_19549);
var doc_19551 = cljs.core.get.call(null,map__19510_19550__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_19552 = cljs.core.get.call(null,map__19510_19550__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_19548);

cljs.core.println.call(null," ",arglists_19552);

if(cljs.core.truth_(doc_19551)){
cljs.core.println.call(null," ",doc_19551);
} else {
}

var G__19553 = seq__19503_19543;
var G__19554 = chunk__19504_19544;
var G__19555 = count__19505_19545;
var G__19556 = (i__19506_19546 + (1));
seq__19503_19543 = G__19553;
chunk__19504_19544 = G__19554;
count__19505_19545 = G__19555;
i__19506_19546 = G__19556;
continue;
} else {
var temp__4657__auto___19557 = cljs.core.seq.call(null,seq__19503_19543);
if(temp__4657__auto___19557){
var seq__19503_19558__$1 = temp__4657__auto___19557;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19503_19558__$1)){
var c__18093__auto___19559 = cljs.core.chunk_first.call(null,seq__19503_19558__$1);
var G__19560 = cljs.core.chunk_rest.call(null,seq__19503_19558__$1);
var G__19561 = c__18093__auto___19559;
var G__19562 = cljs.core.count.call(null,c__18093__auto___19559);
var G__19563 = (0);
seq__19503_19543 = G__19560;
chunk__19504_19544 = G__19561;
count__19505_19545 = G__19562;
i__19506_19546 = G__19563;
continue;
} else {
var vec__19512_19564 = cljs.core.first.call(null,seq__19503_19558__$1);
var name_19565 = cljs.core.nth.call(null,vec__19512_19564,(0),null);
var map__19515_19566 = cljs.core.nth.call(null,vec__19512_19564,(1),null);
var map__19515_19567__$1 = ((((!((map__19515_19566 == null)))?((((map__19515_19566.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19515_19566.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19515_19566):map__19515_19566);
var doc_19568 = cljs.core.get.call(null,map__19515_19567__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_19569 = cljs.core.get.call(null,map__19515_19567__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_19565);

cljs.core.println.call(null," ",arglists_19569);

if(cljs.core.truth_(doc_19568)){
cljs.core.println.call(null," ",doc_19568);
} else {
}

var G__19570 = cljs.core.next.call(null,seq__19503_19558__$1);
var G__19571 = null;
var G__19572 = (0);
var G__19573 = (0);
seq__19503_19543 = G__19570;
chunk__19504_19544 = G__19571;
count__19505_19545 = G__19572;
i__19506_19546 = G__19573;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__4657__auto__ = cljs.spec.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__19517 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__19518 = null;
var count__19519 = (0);
var i__19520 = (0);
while(true){
if((i__19520 < count__19519)){
var role = cljs.core._nth.call(null,chunk__19518,i__19520);
var temp__4657__auto___19574__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___19574__$1)){
var spec_19575 = temp__4657__auto___19574__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_19575));
} else {
}

var G__19576 = seq__19517;
var G__19577 = chunk__19518;
var G__19578 = count__19519;
var G__19579 = (i__19520 + (1));
seq__19517 = G__19576;
chunk__19518 = G__19577;
count__19519 = G__19578;
i__19520 = G__19579;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__19517);
if(temp__4657__auto____$1){
var seq__19517__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19517__$1)){
var c__18093__auto__ = cljs.core.chunk_first.call(null,seq__19517__$1);
var G__19580 = cljs.core.chunk_rest.call(null,seq__19517__$1);
var G__19581 = c__18093__auto__;
var G__19582 = cljs.core.count.call(null,c__18093__auto__);
var G__19583 = (0);
seq__19517 = G__19580;
chunk__19518 = G__19581;
count__19519 = G__19582;
i__19520 = G__19583;
continue;
} else {
var role = cljs.core.first.call(null,seq__19517__$1);
var temp__4657__auto___19584__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___19584__$2)){
var spec_19585 = temp__4657__auto___19584__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_19585));
} else {
}

var G__19586 = cljs.core.next.call(null,seq__19517__$1);
var G__19587 = null;
var G__19588 = (0);
var G__19589 = (0);
seq__19517 = G__19586;
chunk__19518 = G__19587;
count__19519 = G__19588;
i__19520 = G__19589;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map