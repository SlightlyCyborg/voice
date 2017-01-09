// Compiled by ClojureScript 1.9.293 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__19608){
var map__19633 = p__19608;
var map__19633__$1 = ((((!((map__19633 == null)))?((((map__19633.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19633.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19633):map__19633);
var m = map__19633__$1;
var n = cljs.core.get.call(null,map__19633__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__19633__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__19635_19657 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__19636_19658 = null;
var count__19637_19659 = (0);
var i__19638_19660 = (0);
while(true){
if((i__19638_19660 < count__19637_19659)){
var f_19661 = cljs.core._nth.call(null,chunk__19636_19658,i__19638_19660);
cljs.core.println.call(null,"  ",f_19661);

var G__19662 = seq__19635_19657;
var G__19663 = chunk__19636_19658;
var G__19664 = count__19637_19659;
var G__19665 = (i__19638_19660 + (1));
seq__19635_19657 = G__19662;
chunk__19636_19658 = G__19663;
count__19637_19659 = G__19664;
i__19638_19660 = G__19665;
continue;
} else {
var temp__4657__auto___19666 = cljs.core.seq.call(null,seq__19635_19657);
if(temp__4657__auto___19666){
var seq__19635_19667__$1 = temp__4657__auto___19666;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19635_19667__$1)){
var c__18229__auto___19668 = cljs.core.chunk_first.call(null,seq__19635_19667__$1);
var G__19669 = cljs.core.chunk_rest.call(null,seq__19635_19667__$1);
var G__19670 = c__18229__auto___19668;
var G__19671 = cljs.core.count.call(null,c__18229__auto___19668);
var G__19672 = (0);
seq__19635_19657 = G__19669;
chunk__19636_19658 = G__19670;
count__19637_19659 = G__19671;
i__19638_19660 = G__19672;
continue;
} else {
var f_19673 = cljs.core.first.call(null,seq__19635_19667__$1);
cljs.core.println.call(null,"  ",f_19673);

var G__19674 = cljs.core.next.call(null,seq__19635_19667__$1);
var G__19675 = null;
var G__19676 = (0);
var G__19677 = (0);
seq__19635_19657 = G__19674;
chunk__19636_19658 = G__19675;
count__19637_19659 = G__19676;
i__19638_19660 = G__19677;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_19678 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__17415__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__17415__auto__)){
return or__17415__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_19678);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_19678)))?cljs.core.second.call(null,arglists_19678):arglists_19678));
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
var seq__19639_19679 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__19640_19680 = null;
var count__19641_19681 = (0);
var i__19642_19682 = (0);
while(true){
if((i__19642_19682 < count__19641_19681)){
var vec__19643_19683 = cljs.core._nth.call(null,chunk__19640_19680,i__19642_19682);
var name_19684 = cljs.core.nth.call(null,vec__19643_19683,(0),null);
var map__19646_19685 = cljs.core.nth.call(null,vec__19643_19683,(1),null);
var map__19646_19686__$1 = ((((!((map__19646_19685 == null)))?((((map__19646_19685.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19646_19685.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19646_19685):map__19646_19685);
var doc_19687 = cljs.core.get.call(null,map__19646_19686__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_19688 = cljs.core.get.call(null,map__19646_19686__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_19684);

cljs.core.println.call(null," ",arglists_19688);

if(cljs.core.truth_(doc_19687)){
cljs.core.println.call(null," ",doc_19687);
} else {
}

var G__19689 = seq__19639_19679;
var G__19690 = chunk__19640_19680;
var G__19691 = count__19641_19681;
var G__19692 = (i__19642_19682 + (1));
seq__19639_19679 = G__19689;
chunk__19640_19680 = G__19690;
count__19641_19681 = G__19691;
i__19642_19682 = G__19692;
continue;
} else {
var temp__4657__auto___19693 = cljs.core.seq.call(null,seq__19639_19679);
if(temp__4657__auto___19693){
var seq__19639_19694__$1 = temp__4657__auto___19693;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19639_19694__$1)){
var c__18229__auto___19695 = cljs.core.chunk_first.call(null,seq__19639_19694__$1);
var G__19696 = cljs.core.chunk_rest.call(null,seq__19639_19694__$1);
var G__19697 = c__18229__auto___19695;
var G__19698 = cljs.core.count.call(null,c__18229__auto___19695);
var G__19699 = (0);
seq__19639_19679 = G__19696;
chunk__19640_19680 = G__19697;
count__19641_19681 = G__19698;
i__19642_19682 = G__19699;
continue;
} else {
var vec__19648_19700 = cljs.core.first.call(null,seq__19639_19694__$1);
var name_19701 = cljs.core.nth.call(null,vec__19648_19700,(0),null);
var map__19651_19702 = cljs.core.nth.call(null,vec__19648_19700,(1),null);
var map__19651_19703__$1 = ((((!((map__19651_19702 == null)))?((((map__19651_19702.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19651_19702.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19651_19702):map__19651_19702);
var doc_19704 = cljs.core.get.call(null,map__19651_19703__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_19705 = cljs.core.get.call(null,map__19651_19703__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_19701);

cljs.core.println.call(null," ",arglists_19705);

if(cljs.core.truth_(doc_19704)){
cljs.core.println.call(null," ",doc_19704);
} else {
}

var G__19706 = cljs.core.next.call(null,seq__19639_19694__$1);
var G__19707 = null;
var G__19708 = (0);
var G__19709 = (0);
seq__19639_19679 = G__19706;
chunk__19640_19680 = G__19707;
count__19641_19681 = G__19708;
i__19642_19682 = G__19709;
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

var seq__19653 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__19654 = null;
var count__19655 = (0);
var i__19656 = (0);
while(true){
if((i__19656 < count__19655)){
var role = cljs.core._nth.call(null,chunk__19654,i__19656);
var temp__4657__auto___19710__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___19710__$1)){
var spec_19711 = temp__4657__auto___19710__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_19711));
} else {
}

var G__19712 = seq__19653;
var G__19713 = chunk__19654;
var G__19714 = count__19655;
var G__19715 = (i__19656 + (1));
seq__19653 = G__19712;
chunk__19654 = G__19713;
count__19655 = G__19714;
i__19656 = G__19715;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__19653);
if(temp__4657__auto____$1){
var seq__19653__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19653__$1)){
var c__18229__auto__ = cljs.core.chunk_first.call(null,seq__19653__$1);
var G__19716 = cljs.core.chunk_rest.call(null,seq__19653__$1);
var G__19717 = c__18229__auto__;
var G__19718 = cljs.core.count.call(null,c__18229__auto__);
var G__19719 = (0);
seq__19653 = G__19716;
chunk__19654 = G__19717;
count__19655 = G__19718;
i__19656 = G__19719;
continue;
} else {
var role = cljs.core.first.call(null,seq__19653__$1);
var temp__4657__auto___19720__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___19720__$2)){
var spec_19721 = temp__4657__auto___19720__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_19721));
} else {
}

var G__19722 = cljs.core.next.call(null,seq__19653__$1);
var G__19723 = null;
var G__19724 = (0);
var G__19725 = (0);
seq__19653 = G__19722;
chunk__19654 = G__19723;
count__19655 = G__19724;
i__19656 = G__19725;
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