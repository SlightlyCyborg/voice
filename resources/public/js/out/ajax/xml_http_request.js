// Compiled by ClojureScript 1.9.293 {}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('ajax.protocols');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
return new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null).call(null,e.target.readyState);
});
XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$ = cljs.core.PROTOCOL_SENTINEL;

XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__51478,handler){
var map__51479 = p__51478;
var map__51479__$1 = ((((!((map__51479 == null)))?((((map__51479.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51479.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51479):map__51479);
var uri = cljs.core.get.call(null,map__51479__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__51479__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.call(null,map__51479__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.call(null,map__51479__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.call(null,map__51479__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.call(null,map__51479__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.call(null,map__51479__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__51479,map__51479__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__51477_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state.call(null,p1__51477_SHARP_))){
return handler.call(null,this$__$1);
} else {
return null;
}
});})(this$__$1,map__51479,map__51479__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__4657__auto___51491 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__4657__auto___51491)){
var response_type_51492 = temp__4657__auto___51491;
this$__$1.responseType = cljs.core.name.call(null,response_type_51492);
} else {
}

var seq__51481_51493 = cljs.core.seq.call(null,headers);
var chunk__51482_51494 = null;
var count__51483_51495 = (0);
var i__51484_51496 = (0);
while(true){
if((i__51484_51496 < count__51483_51495)){
var vec__51485_51497 = cljs.core._nth.call(null,chunk__51482_51494,i__51484_51496);
var k_51498 = cljs.core.nth.call(null,vec__51485_51497,(0),null);
var v_51499 = cljs.core.nth.call(null,vec__51485_51497,(1),null);
this$__$1.setRequestHeader(k_51498,v_51499);

var G__51500 = seq__51481_51493;
var G__51501 = chunk__51482_51494;
var G__51502 = count__51483_51495;
var G__51503 = (i__51484_51496 + (1));
seq__51481_51493 = G__51500;
chunk__51482_51494 = G__51501;
count__51483_51495 = G__51502;
i__51484_51496 = G__51503;
continue;
} else {
var temp__4657__auto___51504 = cljs.core.seq.call(null,seq__51481_51493);
if(temp__4657__auto___51504){
var seq__51481_51505__$1 = temp__4657__auto___51504;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51481_51505__$1)){
var c__18229__auto___51506 = cljs.core.chunk_first.call(null,seq__51481_51505__$1);
var G__51507 = cljs.core.chunk_rest.call(null,seq__51481_51505__$1);
var G__51508 = c__18229__auto___51506;
var G__51509 = cljs.core.count.call(null,c__18229__auto___51506);
var G__51510 = (0);
seq__51481_51493 = G__51507;
chunk__51482_51494 = G__51508;
count__51483_51495 = G__51509;
i__51484_51496 = G__51510;
continue;
} else {
var vec__51488_51511 = cljs.core.first.call(null,seq__51481_51505__$1);
var k_51512 = cljs.core.nth.call(null,vec__51488_51511,(0),null);
var v_51513 = cljs.core.nth.call(null,vec__51488_51511,(1),null);
this$__$1.setRequestHeader(k_51512,v_51513);

var G__51514 = cljs.core.next.call(null,seq__51481_51505__$1);
var G__51515 = null;
var G__51516 = (0);
var G__51517 = (0);
seq__51481_51493 = G__51514;
chunk__51482_51494 = G__51515;
count__51483_51495 = G__51516;
i__51484_51496 = G__51517;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__17415__auto__ = body;
if(cljs.core.truth_(or__17415__auto__)){
return or__17415__auto__;
} else {
return "";
}
})());

return this$__$1;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxRequest$ = cljs.core.PROTOCOL_SENTINEL;

XMLHttpRequest.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$ = cljs.core.PROTOCOL_SENTINEL;

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.response;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.status;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.statusText;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.call(null,(0),this$__$1.readyState);
});

//# sourceMappingURL=xml_http_request.js.map?rel=1483596054741