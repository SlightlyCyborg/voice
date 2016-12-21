// Compiled by ClojureScript 1.9.293 {}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('ajax.protocols');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
return new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null).call(null,e.target.readyState);
});
XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$ = cljs.core.PROTOCOL_SENTINEL;

XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__7899,handler){
var map__7900 = p__7899;
var map__7900__$1 = ((((!((map__7900 == null)))?((((map__7900.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7900.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7900):map__7900);
var uri = cljs.core.get.call(null,map__7900__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__7900__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.call(null,map__7900__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.call(null,map__7900__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.call(null,map__7900__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.call(null,map__7900__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.call(null,map__7900__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__7900,map__7900__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__7898_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state.call(null,p1__7898_SHARP_))){
return handler.call(null,this$__$1);
} else {
return null;
}
});})(this$__$1,map__7900,map__7900__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__4657__auto___7912 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__4657__auto___7912)){
var response_type_7913 = temp__4657__auto___7912;
this$__$1.responseType = cljs.core.name.call(null,response_type_7913);
} else {
}

var seq__7902_7914 = cljs.core.seq.call(null,headers);
var chunk__7903_7915 = null;
var count__7904_7916 = (0);
var i__7905_7917 = (0);
while(true){
if((i__7905_7917 < count__7904_7916)){
var vec__7906_7918 = cljs.core._nth.call(null,chunk__7903_7915,i__7905_7917);
var k_7919 = cljs.core.nth.call(null,vec__7906_7918,(0),null);
var v_7920 = cljs.core.nth.call(null,vec__7906_7918,(1),null);
this$__$1.setRequestHeader(k_7919,v_7920);

var G__7921 = seq__7902_7914;
var G__7922 = chunk__7903_7915;
var G__7923 = count__7904_7916;
var G__7924 = (i__7905_7917 + (1));
seq__7902_7914 = G__7921;
chunk__7903_7915 = G__7922;
count__7904_7916 = G__7923;
i__7905_7917 = G__7924;
continue;
} else {
var temp__4657__auto___7925 = cljs.core.seq.call(null,seq__7902_7914);
if(temp__4657__auto___7925){
var seq__7902_7926__$1 = temp__4657__auto___7925;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7902_7926__$1)){
var c__7491__auto___7927 = cljs.core.chunk_first.call(null,seq__7902_7926__$1);
var G__7928 = cljs.core.chunk_rest.call(null,seq__7902_7926__$1);
var G__7929 = c__7491__auto___7927;
var G__7930 = cljs.core.count.call(null,c__7491__auto___7927);
var G__7931 = (0);
seq__7902_7914 = G__7928;
chunk__7903_7915 = G__7929;
count__7904_7916 = G__7930;
i__7905_7917 = G__7931;
continue;
} else {
var vec__7909_7932 = cljs.core.first.call(null,seq__7902_7926__$1);
var k_7933 = cljs.core.nth.call(null,vec__7909_7932,(0),null);
var v_7934 = cljs.core.nth.call(null,vec__7909_7932,(1),null);
this$__$1.setRequestHeader(k_7933,v_7934);

var G__7935 = cljs.core.next.call(null,seq__7902_7926__$1);
var G__7936 = null;
var G__7937 = (0);
var G__7938 = (0);
seq__7902_7914 = G__7935;
chunk__7903_7915 = G__7936;
count__7904_7916 = G__7937;
i__7905_7917 = G__7938;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__6677__auto__ = body;
if(cljs.core.truth_(or__6677__auto__)){
return or__6677__auto__;
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

//# sourceMappingURL=xml_http_request.js.map