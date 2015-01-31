// Compiled by ClojureScript 0.0-2511
goog.provide('farn.utils');
goog.require('cljs.core');
goog.require('clojure.browser.repl');
goog.require('dommy.core');
goog.require('cljs.core.async');
goog.require('farn.events');
farn.utils.log = (function() {
var log = null;
var log__1 = (function (a1){
return console.log(a1);
});
var log__2 = (function (a1,a2){
return console.log(a1,a2);
});
var log__3 = (function (a1,a2,a3){
return console.log(a1,a2,a3);
});
var log__4 = (function (a1,a2,a3,a4){
return console.log(a1,a2,a3,a4);
});
log = function(a1,a2,a3,a4){
switch(arguments.length){
case 1:
return log__1.call(this,a1);
case 2:
return log__2.call(this,a1,a2);
case 3:
return log__3.call(this,a1,a2,a3);
case 4:
return log__4.call(this,a1,a2,a3,a4);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
log.cljs$core$IFn$_invoke$arity$1 = log__1;
log.cljs$core$IFn$_invoke$arity$2 = log__2;
log.cljs$core$IFn$_invoke$arity$3 = log__3;
log.cljs$core$IFn$_invoke$arity$4 = log__4;
return log;
})()
;
/**
* return a random integer between low and high inclusive
*/
farn.utils.rand_between = (function rand_between(low,high){
var size = Math.abs.call(null,(high - low));
return ((low + (size * cljs.core.rand.call(null))) | (0));
});
farn.utils.ends_with_QMARK_ = (function ends_with_QMARK_(str,end){
var len = str.length;
var end_len = end.length;
var pos = str.indexOf(end);
return cljs.core._EQ_.call(null,(pos + end_len),len);
});
farn.utils.url_keyword = (function url_keyword(url){
return cljs.core.keyword.call(null,cljs.core.first.call(null,cljs.core.last.call(null,url.split("/")).split(".")));
});
/**
* limit the number num between low and high. If its less than low, return low
* if its more than high, return hi. else return num.
*/
farn.utils.limit = (function limit(num,low,high){
if((num < low)){
return low;
} else {
if((num > high)){
return high;
} else {
return num;

}
}
});

//# sourceMappingURL=utils.js.map