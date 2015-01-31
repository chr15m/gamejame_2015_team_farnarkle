// Compiled by ClojureScript 0.0-2511
goog.provide('farn.query_string');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.Uri');
/**
* Parse `s` as query params and return a hash map.
*/
farn.query_string.parse_query_params = (function parse_query_params(s){
if(cljs.core.not.call(null,clojure.string.blank_QMARK_.call(null,s))){
return cljs.core.reduce.call(null,(function (p1__15260_SHARP_,p2__15259_SHARP_){
var vec__15262 = clojure.string.split.call(null,p2__15259_SHARP_,/=/);
var k = cljs.core.nth.call(null,vec__15262,(0),null);
var v = cljs.core.nth.call(null,vec__15262,(1),null);
return cljs.core.assoc.call(null,p1__15260_SHARP_,cljs.core.keyword.call(null,k),v);
}),cljs.core.PersistentArrayMap.EMPTY,clojure.string.split.call(null,[cljs.core.str(s)].join(''),/&/));
} else {
return null;
}
});
/**
* Parse `url` into a hash map.
*/
farn.query_string.parse_url = (function parse_url(url){
if(cljs.core.not.call(null,clojure.string.blank_QMARK_.call(null,url))){
var uri = goog.Uri.parse(url);
var query_data = uri.getQueryData();
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"scheme","scheme",90199613),cljs.core.keyword.call(null,uri.getScheme()),new cljs.core.Keyword(null,"server-name","server-name",-1012104295),uri.getDomain(),new cljs.core.Keyword(null,"uri","uri",-774711847),uri.getPath(),new cljs.core.Keyword(null,"query-string","query-string",-1018845061),((cljs.core.not.call(null,query_data.isEmpty()))?[cljs.core.str(query_data)].join(''):null),new cljs.core.Keyword(null,"query-params","query-params",900640534),((cljs.core.not.call(null,query_data.isEmpty()))?farn.query_string.parse_query_params.call(null,[cljs.core.str(query_data)].join('')):null)], null);
} else {
return null;
}
});

//# sourceMappingURL=query_string.js.map