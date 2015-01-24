// Compiled by ClojureScript 0.0-2511
goog.provide('farn.store');
goog.require('cljs.core');
goog.require('cljs.reader');
farn.store.remember_BANG_ = (function remember_BANG_(item_name,values){
return window.localStorage.setItem(cljs.core.pr_str.call(null,item_name),cljs.core.pr_str.call(null,values));
});
farn.store.recall = (function recall(item_name){
var temp__4124__auto__ = window.localStorage.getItem(cljs.core.pr_str.call(null,item_name));
if(cljs.core.truth_(temp__4124__auto__)){
var result = temp__4124__auto__;
return cljs.reader.read_string.call(null,result);
} else {
return null;
}
});
farn.store.forget_BANG_ = (function forget_BANG_(item_name){
return window.localStorage.removeItem(cljs.core.pr_str.call(null,item_name));
});

//# sourceMappingURL=store.js.map