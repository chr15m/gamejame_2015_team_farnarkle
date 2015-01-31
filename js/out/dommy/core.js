// Compiled by ClojureScript 0.0-2511
goog.provide('dommy.core');
goog.require('cljs.core');
goog.require('dommy.utils');
goog.require('clojure.string');
/**
* Returns a selector in string format.
* Accepts string, keyword, or collection.
*/
dommy.core.selector = (function selector(data){
if(cljs.core.coll_QMARK_.call(null,data)){
return clojure.string.join.call(null," ",cljs.core.map.call(null,selector,data));
} else {
if((typeof data === 'string') || ((data instanceof cljs.core.Keyword))){
return cljs.core.name.call(null,data);
} else {
return null;
}
}
});
dommy.core.text = (function text(elem){
var or__3630__auto__ = elem.textContent;
if(cljs.core.truth_(or__3630__auto__)){
return or__3630__auto__;
} else {
return elem.innerText;
}
});
dommy.core.html = (function html(elem){
return elem.innerHTML;
});
dommy.core.value = (function value(elem){
return elem.value;
});
dommy.core.class$ = (function class$(elem){
return elem.className;
});
dommy.core.attr = (function attr(elem,k){
if(cljs.core.truth_(k)){
return elem.getAttribute(dommy.utils.as_str.call(null,k));
} else {
return null;
}
});
/**
* The computed style of `elem`, optionally specifying the key of
* a particular style to return
*/
dommy.core.style = (function() {
var style = null;
var style__1 = (function (elem){
return cljs.core.js__GT_clj.call(null,window.getComputedStyle(elem));
});
var style__2 = (function (elem,k){
return (window.getComputedStyle(elem)[dommy.utils.as_str.call(null,k)]);
});
style = function(elem,k){
switch(arguments.length){
case 1:
return style__1.call(this,elem);
case 2:
return style__2.call(this,elem,k);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
style.cljs$core$IFn$_invoke$arity$1 = style__1;
style.cljs$core$IFn$_invoke$arity$2 = style__2;
return style;
})()
;
dommy.core.px = (function px(elem,k){

var pixels = dommy.core.style.call(null,elem,k);
if(cljs.core.seq.call(null,pixels)){
return parseInt(pixels);
} else {
return null;
}
});
/**
* Does `elem` contain `c` in its class list
*/
dommy.core.has_class_QMARK_ = (function has_class_QMARK_(elem,c){
var c__$1 = dommy.utils.as_str.call(null,c);
var temp__4124__auto__ = elem.classList;
if(cljs.core.truth_(temp__4124__auto__)){
var class_list = temp__4124__auto__;
return class_list.contains(c__$1);
} else {
var temp__4126__auto__ = dommy.core.class$.call(null,elem);
if(cljs.core.truth_(temp__4126__auto__)){
var class_name = temp__4126__auto__;
var temp__4126__auto____$1 = dommy.utils.class_index.call(null,class_name,c__$1);
if(cljs.core.truth_(temp__4126__auto____$1)){
var i = temp__4126__auto____$1;
return (i >= (0));
} else {
return null;
}
} else {
return null;
}
}
});
/**
* Is `elem` hidden (as associated with hide!/show!/toggle!, using display: none)
*/
dommy.core.hidden_QMARK_ = (function hidden_QMARK_(elem){
return (dommy.core.style.call(null,elem,new cljs.core.Keyword(null,"display","display",242065432)) === "none");
});
/**
* Returns a map of the bounding client rect of `elem`
* as a map with [:top :left :right :bottom :width :height]
*/
dommy.core.bounding_client_rect = (function bounding_client_rect(elem){
var r = elem.getBoundingClientRect();
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"top","top",-1856271961),r.top,new cljs.core.Keyword(null,"bottom","bottom",-1550509018),r.bottom,new cljs.core.Keyword(null,"left","left",-399115937),r.left,new cljs.core.Keyword(null,"right","right",-452581833),r.right,new cljs.core.Keyword(null,"width","width",-384071477),r.width,new cljs.core.Keyword(null,"height","height",1025178622),r.height], null);
});
dommy.core.parent = (function parent(elem){
return elem.parentNode;
});
dommy.core.children = (function children(elem){
return elem.children;
});
/**
* Lazy seq of the ancestors of `elem`
*/
dommy.core.ancestors = (function ancestors(elem){
return cljs.core.take_while.call(null,cljs.core.identity,cljs.core.iterate.call(null,dommy.core.parent,elem));
});
dommy.core.ancestor_nodes = dommy.core.ancestors;
/**
* Returns a predicate on nodes that match `selector` at the
* time of this `matches-pred` call (may return outdated results
* if you fuck with the DOM)
*/
dommy.core.matches_pred = (function() {
var matches_pred = null;
var matches_pred__1 = (function (selector){
return matches_pred.call(null,document,selector);
});
var matches_pred__2 = (function (base,selector){
var matches = dommy.utils.__GT_Array.call(null,base.querySelectorAll(dommy.core.selector.call(null,selector)));
return ((function (matches){
return (function (elem){
return (matches.indexOf(elem) >= (0));
});
;})(matches))
});
matches_pred = function(base,selector){
switch(arguments.length){
case 1:
return matches_pred__1.call(this,base);
case 2:
return matches_pred__2.call(this,base,selector);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
matches_pred.cljs$core$IFn$_invoke$arity$1 = matches_pred__1;
matches_pred.cljs$core$IFn$_invoke$arity$2 = matches_pred__2;
return matches_pred;
})()
;
/**
* Closest ancestor of `elem` (up to `base`, if provided)
* that matches `selector`
*/
dommy.core.closest = (function() {
var closest = null;
var closest__2 = (function (elem,selector){
return closest.call(null,document.body,elem,selector);
});
var closest__3 = (function (base,elem,selector){
return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,base,selector),cljs.core.take_while.call(null,(function (p1__20036_SHARP_){
return !((p1__20036_SHARP_ === base));
}),dommy.core.ancestors.call(null,elem))));
});
closest = function(base,elem,selector){
switch(arguments.length){
case 2:
return closest__2.call(this,base,elem);
case 3:
return closest__3.call(this,base,elem,selector);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
closest.cljs$core$IFn$_invoke$arity$2 = closest__2;
closest.cljs$core$IFn$_invoke$arity$3 = closest__3;
return closest;
})()
;
/**
* Is `descendant` a descendant of `ancestor`?
* (http://goo.gl/T8pgCX)
*/
dommy.core.descendant_QMARK_ = (function descendant_QMARK_(descendant,ancestor){
if(cljs.core.truth_(ancestor.contains)){
return ancestor.contains(descendant);
} else {
if(cljs.core.truth_(ancestor.compareDocumentPosition)){
return ((ancestor.compareDocumentPosition(descendant) & (1 << (4))) != 0);
} else {
return null;
}
}
});
/**
* Set the textContent of `elem` to `text`, fall back to innerText
*/
dommy.core.set_text_BANG_ = (function set_text_BANG_(elem,text){
if(!((void 0 === elem.textContent))){
elem.textContent = text;
} else {
elem.innerText = text;
}

return elem;
});
/**
* Set the innerHTML of `elem` to `html`
*/
dommy.core.set_html_BANG_ = (function set_html_BANG_(elem,html){
elem.innerHTML = html;

return elem;
});
/**
* Set the value of `elem` to `value`
*/
dommy.core.set_value_BANG_ = (function set_value_BANG_(elem,value){
elem.value = value;

return elem;
});
/**
* Set the css class of `elem` to `elem`
*/
dommy.core.set_class_BANG_ = (function set_class_BANG_(elem,c){
return elem.className = c;
});
/**
* Set the style of `elem` using key-value pairs:
* 
* (set-style! elem :display "block" :color "red")
* @param {...*} var_args
*/
dommy.core.set_style_BANG_ = (function() { 
var set_style_BANG___delegate = function (elem,kvs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null)))))].join('')));
}

var style = elem.style;
var seq__20043_20049 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));
var chunk__20044_20050 = null;
var count__20045_20051 = (0);
var i__20046_20052 = (0);
while(true){
if((i__20046_20052 < count__20045_20051)){
var vec__20047_20053 = cljs.core._nth.call(null,chunk__20044_20050,i__20046_20052);
var k_20054 = cljs.core.nth.call(null,vec__20047_20053,(0),null);
var v_20055 = cljs.core.nth.call(null,vec__20047_20053,(1),null);
style.setProperty(dommy.utils.as_str.call(null,k_20054),v_20055);

var G__20056 = seq__20043_20049;
var G__20057 = chunk__20044_20050;
var G__20058 = count__20045_20051;
var G__20059 = (i__20046_20052 + (1));
seq__20043_20049 = G__20056;
chunk__20044_20050 = G__20057;
count__20045_20051 = G__20058;
i__20046_20052 = G__20059;
continue;
} else {
var temp__4126__auto___20060 = cljs.core.seq.call(null,seq__20043_20049);
if(temp__4126__auto___20060){
var seq__20043_20061__$1 = temp__4126__auto___20060;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20043_20061__$1)){
var c__4417__auto___20062 = cljs.core.chunk_first.call(null,seq__20043_20061__$1);
var G__20063 = cljs.core.chunk_rest.call(null,seq__20043_20061__$1);
var G__20064 = c__4417__auto___20062;
var G__20065 = cljs.core.count.call(null,c__4417__auto___20062);
var G__20066 = (0);
seq__20043_20049 = G__20063;
chunk__20044_20050 = G__20064;
count__20045_20051 = G__20065;
i__20046_20052 = G__20066;
continue;
} else {
var vec__20048_20067 = cljs.core.first.call(null,seq__20043_20061__$1);
var k_20068 = cljs.core.nth.call(null,vec__20048_20067,(0),null);
var v_20069 = cljs.core.nth.call(null,vec__20048_20067,(1),null);
style.setProperty(dommy.utils.as_str.call(null,k_20068),v_20069);

var G__20070 = cljs.core.next.call(null,seq__20043_20061__$1);
var G__20071 = null;
var G__20072 = (0);
var G__20073 = (0);
seq__20043_20049 = G__20070;
chunk__20044_20050 = G__20071;
count__20045_20051 = G__20072;
i__20046_20052 = G__20073;
continue;
}
} else {
}
}
break;
}

return elem;
};
var set_style_BANG_ = function (elem,var_args){
var kvs = null;
if (arguments.length > 1) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return set_style_BANG___delegate.call(this,elem,kvs);};
set_style_BANG_.cljs$lang$maxFixedArity = 1;
set_style_BANG_.cljs$lang$applyTo = (function (arglist__20074){
var elem = cljs.core.first(arglist__20074);
var kvs = cljs.core.rest(arglist__20074);
return set_style_BANG___delegate(elem,kvs);
});
set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_style_BANG___delegate;
return set_style_BANG_;
})()
;
/**
* @param {...*} var_args
*/
dommy.core.set_px_BANG_ = (function() { 
var set_px_BANG___delegate = function (elem,kvs){

if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null)))))].join('')));
}

var seq__20081_20087 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));
var chunk__20082_20088 = null;
var count__20083_20089 = (0);
var i__20084_20090 = (0);
while(true){
if((i__20084_20090 < count__20083_20089)){
var vec__20085_20091 = cljs.core._nth.call(null,chunk__20082_20088,i__20084_20090);
var k_20092 = cljs.core.nth.call(null,vec__20085_20091,(0),null);
var v_20093 = cljs.core.nth.call(null,vec__20085_20091,(1),null);
dommy.core.set_style_BANG_.call(null,elem,k_20092,[cljs.core.str(v_20093),cljs.core.str("px")].join(''));

var G__20094 = seq__20081_20087;
var G__20095 = chunk__20082_20088;
var G__20096 = count__20083_20089;
var G__20097 = (i__20084_20090 + (1));
seq__20081_20087 = G__20094;
chunk__20082_20088 = G__20095;
count__20083_20089 = G__20096;
i__20084_20090 = G__20097;
continue;
} else {
var temp__4126__auto___20098 = cljs.core.seq.call(null,seq__20081_20087);
if(temp__4126__auto___20098){
var seq__20081_20099__$1 = temp__4126__auto___20098;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20081_20099__$1)){
var c__4417__auto___20100 = cljs.core.chunk_first.call(null,seq__20081_20099__$1);
var G__20101 = cljs.core.chunk_rest.call(null,seq__20081_20099__$1);
var G__20102 = c__4417__auto___20100;
var G__20103 = cljs.core.count.call(null,c__4417__auto___20100);
var G__20104 = (0);
seq__20081_20087 = G__20101;
chunk__20082_20088 = G__20102;
count__20083_20089 = G__20103;
i__20084_20090 = G__20104;
continue;
} else {
var vec__20086_20105 = cljs.core.first.call(null,seq__20081_20099__$1);
var k_20106 = cljs.core.nth.call(null,vec__20086_20105,(0),null);
var v_20107 = cljs.core.nth.call(null,vec__20086_20105,(1),null);
dommy.core.set_style_BANG_.call(null,elem,k_20106,[cljs.core.str(v_20107),cljs.core.str("px")].join(''));

var G__20108 = cljs.core.next.call(null,seq__20081_20099__$1);
var G__20109 = null;
var G__20110 = (0);
var G__20111 = (0);
seq__20081_20087 = G__20108;
chunk__20082_20088 = G__20109;
count__20083_20089 = G__20110;
i__20084_20090 = G__20111;
continue;
}
} else {
}
}
break;
}

return elem;
};
var set_px_BANG_ = function (elem,var_args){
var kvs = null;
if (arguments.length > 1) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return set_px_BANG___delegate.call(this,elem,kvs);};
set_px_BANG_.cljs$lang$maxFixedArity = 1;
set_px_BANG_.cljs$lang$applyTo = (function (arglist__20112){
var elem = cljs.core.first(arglist__20112);
var kvs = cljs.core.rest(arglist__20112);
return set_px_BANG___delegate(elem,kvs);
});
set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_px_BANG___delegate;
return set_px_BANG_;
})()
;
/**
* Sets dom attributes on and returns `elem`.
* Attributes without values will be set to "true":
* 
* (set-attr! elem :disabled)
* 
* With values, the function takes variadic kv pairs:
* 
* (set-attr! elem :id "some-id"
* :name "some-name")
* @param {...*} var_args
*/
dommy.core.set_attr_BANG_ = (function() {
var set_attr_BANG_ = null;
var set_attr_BANG___2 = (function (elem,k){
return set_attr_BANG_.call(null,elem,k,"true");
});
var set_attr_BANG___3 = (function (elem,k,v){
var k__$1 = dommy.utils.as_str.call(null,k);
if(cljs.core.truth_(v)){
if(cljs.core.fn_QMARK_.call(null,v)){
var G__20121 = elem;
(G__20121[k__$1] = v);

return G__20121;
} else {
var G__20122 = elem;
G__20122.setAttribute(k__$1,v);

return G__20122;
}
} else {
return null;
}
});
var set_attr_BANG___4 = (function() { 
var G__20129__delegate = function (elem,k,v,kvs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null)))))].join('')));
}

var seq__20123_20130 = cljs.core.seq.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.call(null,(2),kvs)));
var chunk__20124_20131 = null;
var count__20125_20132 = (0);
var i__20126_20133 = (0);
while(true){
if((i__20126_20133 < count__20125_20132)){
var vec__20127_20134 = cljs.core._nth.call(null,chunk__20124_20131,i__20126_20133);
var k_20135__$1 = cljs.core.nth.call(null,vec__20127_20134,(0),null);
var v_20136__$1 = cljs.core.nth.call(null,vec__20127_20134,(1),null);
set_attr_BANG_.call(null,elem,k_20135__$1,v_20136__$1);

var G__20137 = seq__20123_20130;
var G__20138 = chunk__20124_20131;
var G__20139 = count__20125_20132;
var G__20140 = (i__20126_20133 + (1));
seq__20123_20130 = G__20137;
chunk__20124_20131 = G__20138;
count__20125_20132 = G__20139;
i__20126_20133 = G__20140;
continue;
} else {
var temp__4126__auto___20141 = cljs.core.seq.call(null,seq__20123_20130);
if(temp__4126__auto___20141){
var seq__20123_20142__$1 = temp__4126__auto___20141;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20123_20142__$1)){
var c__4417__auto___20143 = cljs.core.chunk_first.call(null,seq__20123_20142__$1);
var G__20144 = cljs.core.chunk_rest.call(null,seq__20123_20142__$1);
var G__20145 = c__4417__auto___20143;
var G__20146 = cljs.core.count.call(null,c__4417__auto___20143);
var G__20147 = (0);
seq__20123_20130 = G__20144;
chunk__20124_20131 = G__20145;
count__20125_20132 = G__20146;
i__20126_20133 = G__20147;
continue;
} else {
var vec__20128_20148 = cljs.core.first.call(null,seq__20123_20142__$1);
var k_20149__$1 = cljs.core.nth.call(null,vec__20128_20148,(0),null);
var v_20150__$1 = cljs.core.nth.call(null,vec__20128_20148,(1),null);
set_attr_BANG_.call(null,elem,k_20149__$1,v_20150__$1);

var G__20151 = cljs.core.next.call(null,seq__20123_20142__$1);
var G__20152 = null;
var G__20153 = (0);
var G__20154 = (0);
seq__20123_20130 = G__20151;
chunk__20124_20131 = G__20152;
count__20125_20132 = G__20153;
i__20126_20133 = G__20154;
continue;
}
} else {
}
}
break;
}

return elem;
};
var G__20129 = function (elem,k,v,var_args){
var kvs = null;
if (arguments.length > 3) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__20129__delegate.call(this,elem,k,v,kvs);};
G__20129.cljs$lang$maxFixedArity = 3;
G__20129.cljs$lang$applyTo = (function (arglist__20155){
var elem = cljs.core.first(arglist__20155);
arglist__20155 = cljs.core.next(arglist__20155);
var k = cljs.core.first(arglist__20155);
arglist__20155 = cljs.core.next(arglist__20155);
var v = cljs.core.first(arglist__20155);
var kvs = cljs.core.rest(arglist__20155);
return G__20129__delegate(elem,k,v,kvs);
});
G__20129.cljs$core$IFn$_invoke$arity$variadic = G__20129__delegate;
return G__20129;
})()
;
set_attr_BANG_ = function(elem,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case 2:
return set_attr_BANG___2.call(this,elem,k);
case 3:
return set_attr_BANG___3.call(this,elem,k,v);
default:
return set_attr_BANG___4.cljs$core$IFn$_invoke$arity$variadic(elem,k,v, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
set_attr_BANG_.cljs$lang$maxFixedArity = 3;
set_attr_BANG_.cljs$lang$applyTo = set_attr_BANG___4.cljs$lang$applyTo;
set_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = set_attr_BANG___2;
set_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = set_attr_BANG___3;
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___4.cljs$core$IFn$_invoke$arity$variadic;
return set_attr_BANG_;
})()
;
/**
* Removes dom attributes on and returns `elem`.
* `class` and `classes` are special cases which clear
* out the class name on removal.
* @param {...*} var_args
*/
dommy.core.remove_attr_BANG_ = (function() {
var remove_attr_BANG_ = null;
var remove_attr_BANG___2 = (function (elem,k){
var k_20164__$1 = dommy.utils.as_str.call(null,k);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["class",null,"classes",null], null), null).call(null,k_20164__$1))){
dommy.core.set_class_BANG_.call(null,elem,"");
} else {
elem.removeAttribute(k_20164__$1);
}

return elem;
});
var remove_attr_BANG___3 = (function() { 
var G__20165__delegate = function (elem,k,ks){
var seq__20160_20166 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));
var chunk__20161_20167 = null;
var count__20162_20168 = (0);
var i__20163_20169 = (0);
while(true){
if((i__20163_20169 < count__20162_20168)){
var k_20170__$1 = cljs.core._nth.call(null,chunk__20161_20167,i__20163_20169);
remove_attr_BANG_.call(null,elem,k_20170__$1);

var G__20171 = seq__20160_20166;
var G__20172 = chunk__20161_20167;
var G__20173 = count__20162_20168;
var G__20174 = (i__20163_20169 + (1));
seq__20160_20166 = G__20171;
chunk__20161_20167 = G__20172;
count__20162_20168 = G__20173;
i__20163_20169 = G__20174;
continue;
} else {
var temp__4126__auto___20175 = cljs.core.seq.call(null,seq__20160_20166);
if(temp__4126__auto___20175){
var seq__20160_20176__$1 = temp__4126__auto___20175;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20160_20176__$1)){
var c__4417__auto___20177 = cljs.core.chunk_first.call(null,seq__20160_20176__$1);
var G__20178 = cljs.core.chunk_rest.call(null,seq__20160_20176__$1);
var G__20179 = c__4417__auto___20177;
var G__20180 = cljs.core.count.call(null,c__4417__auto___20177);
var G__20181 = (0);
seq__20160_20166 = G__20178;
chunk__20161_20167 = G__20179;
count__20162_20168 = G__20180;
i__20163_20169 = G__20181;
continue;
} else {
var k_20182__$1 = cljs.core.first.call(null,seq__20160_20176__$1);
remove_attr_BANG_.call(null,elem,k_20182__$1);

var G__20183 = cljs.core.next.call(null,seq__20160_20176__$1);
var G__20184 = null;
var G__20185 = (0);
var G__20186 = (0);
seq__20160_20166 = G__20183;
chunk__20161_20167 = G__20184;
count__20162_20168 = G__20185;
i__20163_20169 = G__20186;
continue;
}
} else {
}
}
break;
}

return elem;
};
var G__20165 = function (elem,k,var_args){
var ks = null;
if (arguments.length > 2) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__20165__delegate.call(this,elem,k,ks);};
G__20165.cljs$lang$maxFixedArity = 2;
G__20165.cljs$lang$applyTo = (function (arglist__20187){
var elem = cljs.core.first(arglist__20187);
arglist__20187 = cljs.core.next(arglist__20187);
var k = cljs.core.first(arglist__20187);
var ks = cljs.core.rest(arglist__20187);
return G__20165__delegate(elem,k,ks);
});
G__20165.cljs$core$IFn$_invoke$arity$variadic = G__20165__delegate;
return G__20165;
})()
;
remove_attr_BANG_ = function(elem,k,var_args){
var ks = var_args;
switch(arguments.length){
case 2:
return remove_attr_BANG___2.call(this,elem,k);
default:
return remove_attr_BANG___3.cljs$core$IFn$_invoke$arity$variadic(elem,k, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_attr_BANG_.cljs$lang$maxFixedArity = 2;
remove_attr_BANG_.cljs$lang$applyTo = remove_attr_BANG___3.cljs$lang$applyTo;
remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = remove_attr_BANG___2;
remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = remove_attr_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return remove_attr_BANG_;
})()
;
/**
* Toggles a dom attribute `k` on `elem`, optionally specifying
* the boolean value with `add?`
*/
dommy.core.toggle_attr_BANG_ = (function() {
var toggle_attr_BANG_ = null;
var toggle_attr_BANG___2 = (function (elem,k){
return toggle_attr_BANG_.call(null,elem,k,cljs.core.boolean$.call(null,dommy.core.attr.call(null,elem,k)));
});
var toggle_attr_BANG___3 = (function (elem,k,add_QMARK_){
if(add_QMARK_){
return dommy.core.set_attr_BANG_.call(null,elem,k);
} else {
return dommy.core.remove_attr_BANG_.call(null,elem,k);
}
});
toggle_attr_BANG_ = function(elem,k,add_QMARK_){
switch(arguments.length){
case 2:
return toggle_attr_BANG___2.call(this,elem,k);
case 3:
return toggle_attr_BANG___3.call(this,elem,k,add_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = toggle_attr_BANG___2;
toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = toggle_attr_BANG___3;
return toggle_attr_BANG_;
})()
;
/**
* Add `classes` to `elem`, trying to use Element::classList, and
* falling back to fast string parsing/manipulation
* @param {...*} var_args
*/
dommy.core.add_class_BANG_ = (function() {
var add_class_BANG_ = null;
var add_class_BANG___2 = (function (elem,classes){
var classes__$1 = clojure.string.trim.call(null,dommy.utils.as_str.call(null,classes)).split(/\s+/);
if(cljs.core.seq.call(null,classes__$1)){
var temp__4124__auto___20212 = elem.classList;
if(cljs.core.truth_(temp__4124__auto___20212)){
var class_list_20213 = temp__4124__auto___20212;
var seq__20200_20214 = cljs.core.seq.call(null,classes__$1);
var chunk__20201_20215 = null;
var count__20202_20216 = (0);
var i__20203_20217 = (0);
while(true){
if((i__20203_20217 < count__20202_20216)){
var c_20218 = cljs.core._nth.call(null,chunk__20201_20215,i__20203_20217);
class_list_20213.add(c_20218);

var G__20219 = seq__20200_20214;
var G__20220 = chunk__20201_20215;
var G__20221 = count__20202_20216;
var G__20222 = (i__20203_20217 + (1));
seq__20200_20214 = G__20219;
chunk__20201_20215 = G__20220;
count__20202_20216 = G__20221;
i__20203_20217 = G__20222;
continue;
} else {
var temp__4126__auto___20223 = cljs.core.seq.call(null,seq__20200_20214);
if(temp__4126__auto___20223){
var seq__20200_20224__$1 = temp__4126__auto___20223;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20200_20224__$1)){
var c__4417__auto___20225 = cljs.core.chunk_first.call(null,seq__20200_20224__$1);
var G__20226 = cljs.core.chunk_rest.call(null,seq__20200_20224__$1);
var G__20227 = c__4417__auto___20225;
var G__20228 = cljs.core.count.call(null,c__4417__auto___20225);
var G__20229 = (0);
seq__20200_20214 = G__20226;
chunk__20201_20215 = G__20227;
count__20202_20216 = G__20228;
i__20203_20217 = G__20229;
continue;
} else {
var c_20230 = cljs.core.first.call(null,seq__20200_20224__$1);
class_list_20213.add(c_20230);

var G__20231 = cljs.core.next.call(null,seq__20200_20224__$1);
var G__20232 = null;
var G__20233 = (0);
var G__20234 = (0);
seq__20200_20214 = G__20231;
chunk__20201_20215 = G__20232;
count__20202_20216 = G__20233;
i__20203_20217 = G__20234;
continue;
}
} else {
}
}
break;
}
} else {
var seq__20204_20235 = cljs.core.seq.call(null,classes__$1);
var chunk__20205_20236 = null;
var count__20206_20237 = (0);
var i__20207_20238 = (0);
while(true){
if((i__20207_20238 < count__20206_20237)){
var c_20239 = cljs.core._nth.call(null,chunk__20205_20236,i__20207_20238);
var class_name_20240 = dommy.core.class$.call(null,elem);
if(cljs.core.truth_(dommy.utils.class_index.call(null,class_name_20240,c_20239))){
} else {
dommy.core.set_class_BANG_.call(null,elem,(((class_name_20240 === ""))?c_20239:[cljs.core.str(class_name_20240),cljs.core.str(" "),cljs.core.str(c_20239)].join('')));
}

var G__20241 = seq__20204_20235;
var G__20242 = chunk__20205_20236;
var G__20243 = count__20206_20237;
var G__20244 = (i__20207_20238 + (1));
seq__20204_20235 = G__20241;
chunk__20205_20236 = G__20242;
count__20206_20237 = G__20243;
i__20207_20238 = G__20244;
continue;
} else {
var temp__4126__auto___20245 = cljs.core.seq.call(null,seq__20204_20235);
if(temp__4126__auto___20245){
var seq__20204_20246__$1 = temp__4126__auto___20245;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20204_20246__$1)){
var c__4417__auto___20247 = cljs.core.chunk_first.call(null,seq__20204_20246__$1);
var G__20248 = cljs.core.chunk_rest.call(null,seq__20204_20246__$1);
var G__20249 = c__4417__auto___20247;
var G__20250 = cljs.core.count.call(null,c__4417__auto___20247);
var G__20251 = (0);
seq__20204_20235 = G__20248;
chunk__20205_20236 = G__20249;
count__20206_20237 = G__20250;
i__20207_20238 = G__20251;
continue;
} else {
var c_20252 = cljs.core.first.call(null,seq__20204_20246__$1);
var class_name_20253 = dommy.core.class$.call(null,elem);
if(cljs.core.truth_(dommy.utils.class_index.call(null,class_name_20253,c_20252))){
} else {
dommy.core.set_class_BANG_.call(null,elem,(((class_name_20253 === ""))?c_20252:[cljs.core.str(class_name_20253),cljs.core.str(" "),cljs.core.str(c_20252)].join('')));
}

var G__20254 = cljs.core.next.call(null,seq__20204_20246__$1);
var G__20255 = null;
var G__20256 = (0);
var G__20257 = (0);
seq__20204_20235 = G__20254;
chunk__20205_20236 = G__20255;
count__20206_20237 = G__20256;
i__20207_20238 = G__20257;
continue;
}
} else {
}
}
break;
}
}
} else {
}

return elem;
});
var add_class_BANG___3 = (function() { 
var G__20258__delegate = function (elem,classes,more_classes){
var seq__20208_20259 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));
var chunk__20209_20260 = null;
var count__20210_20261 = (0);
var i__20211_20262 = (0);
while(true){
if((i__20211_20262 < count__20210_20261)){
var c_20263 = cljs.core._nth.call(null,chunk__20209_20260,i__20211_20262);
add_class_BANG_.call(null,elem,c_20263);

var G__20264 = seq__20208_20259;
var G__20265 = chunk__20209_20260;
var G__20266 = count__20210_20261;
var G__20267 = (i__20211_20262 + (1));
seq__20208_20259 = G__20264;
chunk__20209_20260 = G__20265;
count__20210_20261 = G__20266;
i__20211_20262 = G__20267;
continue;
} else {
var temp__4126__auto___20268 = cljs.core.seq.call(null,seq__20208_20259);
if(temp__4126__auto___20268){
var seq__20208_20269__$1 = temp__4126__auto___20268;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20208_20269__$1)){
var c__4417__auto___20270 = cljs.core.chunk_first.call(null,seq__20208_20269__$1);
var G__20271 = cljs.core.chunk_rest.call(null,seq__20208_20269__$1);
var G__20272 = c__4417__auto___20270;
var G__20273 = cljs.core.count.call(null,c__4417__auto___20270);
var G__20274 = (0);
seq__20208_20259 = G__20271;
chunk__20209_20260 = G__20272;
count__20210_20261 = G__20273;
i__20211_20262 = G__20274;
continue;
} else {
var c_20275 = cljs.core.first.call(null,seq__20208_20269__$1);
add_class_BANG_.call(null,elem,c_20275);

var G__20276 = cljs.core.next.call(null,seq__20208_20269__$1);
var G__20277 = null;
var G__20278 = (0);
var G__20279 = (0);
seq__20208_20259 = G__20276;
chunk__20209_20260 = G__20277;
count__20210_20261 = G__20278;
i__20211_20262 = G__20279;
continue;
}
} else {
}
}
break;
}

return elem;
};
var G__20258 = function (elem,classes,var_args){
var more_classes = null;
if (arguments.length > 2) {
  more_classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__20258__delegate.call(this,elem,classes,more_classes);};
G__20258.cljs$lang$maxFixedArity = 2;
G__20258.cljs$lang$applyTo = (function (arglist__20280){
var elem = cljs.core.first(arglist__20280);
arglist__20280 = cljs.core.next(arglist__20280);
var classes = cljs.core.first(arglist__20280);
var more_classes = cljs.core.rest(arglist__20280);
return G__20258__delegate(elem,classes,more_classes);
});
G__20258.cljs$core$IFn$_invoke$arity$variadic = G__20258__delegate;
return G__20258;
})()
;
add_class_BANG_ = function(elem,classes,var_args){
var more_classes = var_args;
switch(arguments.length){
case 2:
return add_class_BANG___2.call(this,elem,classes);
default:
return add_class_BANG___3.cljs$core$IFn$_invoke$arity$variadic(elem,classes, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
add_class_BANG_.cljs$lang$maxFixedArity = 2;
add_class_BANG_.cljs$lang$applyTo = add_class_BANG___3.cljs$lang$applyTo;
add_class_BANG_.cljs$core$IFn$_invoke$arity$2 = add_class_BANG___2;
add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = add_class_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return add_class_BANG_;
})()
;
/**
* Remove `c` from `elem` class list
* @param {...*} var_args
*/
dommy.core.remove_class_BANG_ = (function() {
var remove_class_BANG_ = null;
var remove_class_BANG___2 = (function (elem,c){
var c__$1 = dommy.utils.as_str.call(null,c);
var temp__4124__auto___20289 = elem.classList;
if(cljs.core.truth_(temp__4124__auto___20289)){
var class_list_20290 = temp__4124__auto___20289;
class_list_20290.remove(c__$1);
} else {
var class_name_20291 = dommy.core.class$.call(null,elem);
var new_class_name_20292 = dommy.utils.remove_class_str.call(null,class_name_20291,c__$1);
if((class_name_20291 === new_class_name_20292)){
} else {
dommy.core.set_class_BANG_.call(null,elem,new_class_name_20292);
}
}

return elem;
});
var remove_class_BANG___3 = (function() { 
var G__20293__delegate = function (elem,class$,classes){
var seq__20285 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));
var chunk__20286 = null;
var count__20287 = (0);
var i__20288 = (0);
while(true){
if((i__20288 < count__20287)){
var c = cljs.core._nth.call(null,chunk__20286,i__20288);
remove_class_BANG_.call(null,elem,c);

var G__20294 = seq__20285;
var G__20295 = chunk__20286;
var G__20296 = count__20287;
var G__20297 = (i__20288 + (1));
seq__20285 = G__20294;
chunk__20286 = G__20295;
count__20287 = G__20296;
i__20288 = G__20297;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__20285);
if(temp__4126__auto__){
var seq__20285__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20285__$1)){
var c__4417__auto__ = cljs.core.chunk_first.call(null,seq__20285__$1);
var G__20298 = cljs.core.chunk_rest.call(null,seq__20285__$1);
var G__20299 = c__4417__auto__;
var G__20300 = cljs.core.count.call(null,c__4417__auto__);
var G__20301 = (0);
seq__20285 = G__20298;
chunk__20286 = G__20299;
count__20287 = G__20300;
i__20288 = G__20301;
continue;
} else {
var c = cljs.core.first.call(null,seq__20285__$1);
remove_class_BANG_.call(null,elem,c);

var G__20302 = cljs.core.next.call(null,seq__20285__$1);
var G__20303 = null;
var G__20304 = (0);
var G__20305 = (0);
seq__20285 = G__20302;
chunk__20286 = G__20303;
count__20287 = G__20304;
i__20288 = G__20305;
continue;
}
} else {
return null;
}
}
break;
}
};
var G__20293 = function (elem,class$,var_args){
var classes = null;
if (arguments.length > 2) {
  classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__20293__delegate.call(this,elem,class$,classes);};
G__20293.cljs$lang$maxFixedArity = 2;
G__20293.cljs$lang$applyTo = (function (arglist__20306){
var elem = cljs.core.first(arglist__20306);
arglist__20306 = cljs.core.next(arglist__20306);
var class$ = cljs.core.first(arglist__20306);
var classes = cljs.core.rest(arglist__20306);
return G__20293__delegate(elem,class$,classes);
});
G__20293.cljs$core$IFn$_invoke$arity$variadic = G__20293__delegate;
return G__20293;
})()
;
remove_class_BANG_ = function(elem,class$,var_args){
var classes = var_args;
switch(arguments.length){
case 2:
return remove_class_BANG___2.call(this,elem,class$);
default:
return remove_class_BANG___3.cljs$core$IFn$_invoke$arity$variadic(elem,class$, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_class_BANG_.cljs$lang$maxFixedArity = 2;
remove_class_BANG_.cljs$lang$applyTo = remove_class_BANG___3.cljs$lang$applyTo;
remove_class_BANG_.cljs$core$IFn$_invoke$arity$2 = remove_class_BANG___2;
remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = remove_class_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return remove_class_BANG_;
})()
;
/**
* (toggle-class! elem class) will add-class! if elem does not have class
* and remove-class! otherwise.
* (toggle-class! elem class add?) will add-class! if add? is truthy,
* otherwise it will remove-class!
*/
dommy.core.toggle_class_BANG_ = (function() {
var toggle_class_BANG_ = null;
var toggle_class_BANG___2 = (function (elem,c){
var c__$1 = dommy.utils.as_str.call(null,c);
var temp__4124__auto___20307 = elem.classList;
if(cljs.core.truth_(temp__4124__auto___20307)){
var class_list_20308 = temp__4124__auto___20307;
class_list_20308.toggle(c__$1);
} else {
toggle_class_BANG_.call(null,elem,c__$1,!(dommy.core.has_class_QMARK_.call(null,elem,c__$1)));
}

return elem;
});
var toggle_class_BANG___3 = (function (elem,class$,add_QMARK_){
if(add_QMARK_){
dommy.core.add_class_BANG_.call(null,elem,class$);
} else {
dommy.core.remove_class_BANG_.call(null,elem,class$);
}

return elem;
});
toggle_class_BANG_ = function(elem,class$,add_QMARK_){
switch(arguments.length){
case 2:
return toggle_class_BANG___2.call(this,elem,class$);
case 3:
return toggle_class_BANG___3.call(this,elem,class$,add_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2 = toggle_class_BANG___2;
toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3 = toggle_class_BANG___3;
return toggle_class_BANG_;
})()
;
/**
* Display or hide the given `elem` (using display: none).
* Takes an optional boolean `show?`
*/
dommy.core.toggle_BANG_ = (function() {
var toggle_BANG_ = null;
var toggle_BANG___1 = (function (elem){
return toggle_BANG_.call(null,elem,dommy.core.hidden_QMARK_.call(null,elem));
});
var toggle_BANG___2 = (function (elem,show_QMARK_){
return dommy.core.set_style_BANG_.call(null,elem,new cljs.core.Keyword(null,"display","display",242065432),((show_QMARK_)?"":"none"));
});
toggle_BANG_ = function(elem,show_QMARK_){
switch(arguments.length){
case 1:
return toggle_BANG___1.call(this,elem);
case 2:
return toggle_BANG___2.call(this,elem,show_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
toggle_BANG_.cljs$core$IFn$_invoke$arity$1 = toggle_BANG___1;
toggle_BANG_.cljs$core$IFn$_invoke$arity$2 = toggle_BANG___2;
return toggle_BANG_;
})()
;
dommy.core.hide_BANG_ = (function hide_BANG_(elem){
return dommy.core.toggle_BANG_.call(null,elem,false);
});
dommy.core.show_BANG_ = (function show_BANG_(elem){
return dommy.core.toggle_BANG_.call(null,elem,true);
});
dommy.core.scroll_into_view = (function scroll_into_view(elem,align_with_top_QMARK_){
var top = new cljs.core.Keyword(null,"top","top",-1856271961).cljs$core$IFn$_invoke$arity$1(dommy.core.bounding_client_rect.call(null,elem));
if((window.innerHeight < (top + elem.offsetHeight))){
return elem.scrollIntoView(align_with_top_QMARK_);
} else {
return null;
}
});
dommy.core.create_element = (function() {
var create_element = null;
var create_element__1 = (function (tag){
return document.createElement(dommy.utils.as_str.call(null,tag));
});
var create_element__2 = (function (tag_ns,tag){
return document.createElementNS(dommy.utils.as_str.call(null,tag_ns),dommy.utils.as_str.call(null,tag));
});
create_element = function(tag_ns,tag){
switch(arguments.length){
case 1:
return create_element__1.call(this,tag_ns);
case 2:
return create_element__2.call(this,tag_ns,tag);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
create_element.cljs$core$IFn$_invoke$arity$1 = create_element__1;
create_element.cljs$core$IFn$_invoke$arity$2 = create_element__2;
return create_element;
})()
;
dommy.core.create_text_node = (function create_text_node(text){
return document.createTextNode(text);
});
/**
* Clears all children from `elem`
*/
dommy.core.clear_BANG_ = (function clear_BANG_(elem){
return dommy.core.set_html_BANG_.call(null,elem,"");
});
/**
* Append `child` to `parent`
* @param {...*} var_args
*/
dommy.core.append_BANG_ = (function() {
var append_BANG_ = null;
var append_BANG___2 = (function (parent,child){
var G__20314 = parent;
G__20314.appendChild(child);

return G__20314;
});
var append_BANG___3 = (function() { 
var G__20319__delegate = function (parent,child,more_children){
var seq__20315_20320 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));
var chunk__20316_20321 = null;
var count__20317_20322 = (0);
var i__20318_20323 = (0);
while(true){
if((i__20318_20323 < count__20317_20322)){
var c_20324 = cljs.core._nth.call(null,chunk__20316_20321,i__20318_20323);
append_BANG_.call(null,parent,c_20324);

var G__20325 = seq__20315_20320;
var G__20326 = chunk__20316_20321;
var G__20327 = count__20317_20322;
var G__20328 = (i__20318_20323 + (1));
seq__20315_20320 = G__20325;
chunk__20316_20321 = G__20326;
count__20317_20322 = G__20327;
i__20318_20323 = G__20328;
continue;
} else {
var temp__4126__auto___20329 = cljs.core.seq.call(null,seq__20315_20320);
if(temp__4126__auto___20329){
var seq__20315_20330__$1 = temp__4126__auto___20329;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20315_20330__$1)){
var c__4417__auto___20331 = cljs.core.chunk_first.call(null,seq__20315_20330__$1);
var G__20332 = cljs.core.chunk_rest.call(null,seq__20315_20330__$1);
var G__20333 = c__4417__auto___20331;
var G__20334 = cljs.core.count.call(null,c__4417__auto___20331);
var G__20335 = (0);
seq__20315_20320 = G__20332;
chunk__20316_20321 = G__20333;
count__20317_20322 = G__20334;
i__20318_20323 = G__20335;
continue;
} else {
var c_20336 = cljs.core.first.call(null,seq__20315_20330__$1);
append_BANG_.call(null,parent,c_20336);

var G__20337 = cljs.core.next.call(null,seq__20315_20330__$1);
var G__20338 = null;
var G__20339 = (0);
var G__20340 = (0);
seq__20315_20320 = G__20337;
chunk__20316_20321 = G__20338;
count__20317_20322 = G__20339;
i__20318_20323 = G__20340;
continue;
}
} else {
}
}
break;
}

return parent;
};
var G__20319 = function (parent,child,var_args){
var more_children = null;
if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__20319__delegate.call(this,parent,child,more_children);};
G__20319.cljs$lang$maxFixedArity = 2;
G__20319.cljs$lang$applyTo = (function (arglist__20341){
var parent = cljs.core.first(arglist__20341);
arglist__20341 = cljs.core.next(arglist__20341);
var child = cljs.core.first(arglist__20341);
var more_children = cljs.core.rest(arglist__20341);
return G__20319__delegate(parent,child,more_children);
});
G__20319.cljs$core$IFn$_invoke$arity$variadic = G__20319__delegate;
return G__20319;
})()
;
append_BANG_ = function(parent,child,var_args){
var more_children = var_args;
switch(arguments.length){
case 2:
return append_BANG___2.call(this,parent,child);
default:
return append_BANG___3.cljs$core$IFn$_invoke$arity$variadic(parent,child, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
append_BANG_.cljs$lang$maxFixedArity = 2;
append_BANG_.cljs$lang$applyTo = append_BANG___3.cljs$lang$applyTo;
append_BANG_.cljs$core$IFn$_invoke$arity$2 = append_BANG___2;
append_BANG_.cljs$core$IFn$_invoke$arity$variadic = append_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return append_BANG_;
})()
;
/**
* Prepend `child` to `parent`
* @param {...*} var_args
*/
dommy.core.prepend_BANG_ = (function() {
var prepend_BANG_ = null;
var prepend_BANG___2 = (function (parent,child){
var G__20347 = parent;
G__20347.insertBefore(child,parent.firstChild);

return G__20347;
});
var prepend_BANG___3 = (function() { 
var G__20352__delegate = function (parent,child,more_children){
var seq__20348_20353 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));
var chunk__20349_20354 = null;
var count__20350_20355 = (0);
var i__20351_20356 = (0);
while(true){
if((i__20351_20356 < count__20350_20355)){
var c_20357 = cljs.core._nth.call(null,chunk__20349_20354,i__20351_20356);
prepend_BANG_.call(null,parent,c_20357);

var G__20358 = seq__20348_20353;
var G__20359 = chunk__20349_20354;
var G__20360 = count__20350_20355;
var G__20361 = (i__20351_20356 + (1));
seq__20348_20353 = G__20358;
chunk__20349_20354 = G__20359;
count__20350_20355 = G__20360;
i__20351_20356 = G__20361;
continue;
} else {
var temp__4126__auto___20362 = cljs.core.seq.call(null,seq__20348_20353);
if(temp__4126__auto___20362){
var seq__20348_20363__$1 = temp__4126__auto___20362;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20348_20363__$1)){
var c__4417__auto___20364 = cljs.core.chunk_first.call(null,seq__20348_20363__$1);
var G__20365 = cljs.core.chunk_rest.call(null,seq__20348_20363__$1);
var G__20366 = c__4417__auto___20364;
var G__20367 = cljs.core.count.call(null,c__4417__auto___20364);
var G__20368 = (0);
seq__20348_20353 = G__20365;
chunk__20349_20354 = G__20366;
count__20350_20355 = G__20367;
i__20351_20356 = G__20368;
continue;
} else {
var c_20369 = cljs.core.first.call(null,seq__20348_20363__$1);
prepend_BANG_.call(null,parent,c_20369);

var G__20370 = cljs.core.next.call(null,seq__20348_20363__$1);
var G__20371 = null;
var G__20372 = (0);
var G__20373 = (0);
seq__20348_20353 = G__20370;
chunk__20349_20354 = G__20371;
count__20350_20355 = G__20372;
i__20351_20356 = G__20373;
continue;
}
} else {
}
}
break;
}

return parent;
};
var G__20352 = function (parent,child,var_args){
var more_children = null;
if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__20352__delegate.call(this,parent,child,more_children);};
G__20352.cljs$lang$maxFixedArity = 2;
G__20352.cljs$lang$applyTo = (function (arglist__20374){
var parent = cljs.core.first(arglist__20374);
arglist__20374 = cljs.core.next(arglist__20374);
var child = cljs.core.first(arglist__20374);
var more_children = cljs.core.rest(arglist__20374);
return G__20352__delegate(parent,child,more_children);
});
G__20352.cljs$core$IFn$_invoke$arity$variadic = G__20352__delegate;
return G__20352;
})()
;
prepend_BANG_ = function(parent,child,var_args){
var more_children = var_args;
switch(arguments.length){
case 2:
return prepend_BANG___2.call(this,parent,child);
default:
return prepend_BANG___3.cljs$core$IFn$_invoke$arity$variadic(parent,child, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
prepend_BANG_.cljs$lang$maxFixedArity = 2;
prepend_BANG_.cljs$lang$applyTo = prepend_BANG___3.cljs$lang$applyTo;
prepend_BANG_.cljs$core$IFn$_invoke$arity$2 = prepend_BANG___2;
prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic = prepend_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return prepend_BANG_;
})()
;
/**
* Insert `elem` before `other`, `other` must have a parent
*/
dommy.core.insert_before_BANG_ = (function insert_before_BANG_(elem,other){
var p = dommy.core.parent.call(null,other);
if(cljs.core.truth_(p)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Target element must have a parent"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"p","p",1791580836,null)))].join('')));
}

p.insertBefore(elem,other);

return elem;
});
/**
* Insert `elem` after `other`, `other` must have a parent
*/
dommy.core.insert_after_BANG_ = (function insert_after_BANG_(elem,other){
var temp__4124__auto___20375 = other.nextSibling;
if(cljs.core.truth_(temp__4124__auto___20375)){
var next_20376 = temp__4124__auto___20375;
dommy.core.insert_before_BANG_.call(null,elem,next_20376);
} else {
dommy.core.append_BANG_.call(null,dommy.core.parent.call(null,other),elem);
}

return elem;
});
/**
* Replace `elem` with `new`, return `new`
*/
dommy.core.replace_BANG_ = (function replace_BANG_(elem,new$){
var p = dommy.core.parent.call(null,elem);
if(cljs.core.truth_(p)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Target element must have a parent"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"p","p",1791580836,null)))].join('')));
}

p.replaceChild(new$,elem);

return new$;
});
/**
* Replace children of `elem` with `child`
*/
dommy.core.replace_contents_BANG_ = (function replace_contents_BANG_(p,child){
return dommy.core.append_BANG_.call(null,dommy.core.clear_BANG_.call(null,p),child);
});
/**
* Remove `elem` from `parent`, return `parent`
*/
dommy.core.remove_BANG_ = (function() {
var remove_BANG_ = null;
var remove_BANG___1 = (function (elem){
var p = dommy.core.parent.call(null,elem);
if(cljs.core.truth_(p)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Target element must have a parent"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"p","p",1791580836,null)))].join('')));
}

return remove_BANG_.call(null,p,elem);
});
var remove_BANG___2 = (function (p,elem){
var G__20378 = p;
G__20378.removeChild(elem);

return G__20378;
});
remove_BANG_ = function(p,elem){
switch(arguments.length){
case 1:
return remove_BANG___1.call(this,p);
case 2:
return remove_BANG___2.call(this,p,elem);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_BANG_.cljs$core$IFn$_invoke$arity$1 = remove_BANG___1;
remove_BANG_.cljs$core$IFn$_invoke$arity$2 = remove_BANG___2;
return remove_BANG_;
})()
;
dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__20379){
var vec__20380 = p__20379;
var special_mouse_event = cljs.core.nth.call(null,vec__20380,(0),null);
var real_mouse_event = cljs.core.nth.call(null,vec__20380,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,new cljs.core.PersistentArrayMap.fromArray([real_mouse_event,((function (vec__20380,special_mouse_event,real_mouse_event){
return (function (f){
return ((function (vec__20380,special_mouse_event,real_mouse_event){
return (function (event){
var related_target = event.relatedTarget;
var listener_target = (function (){var or__3630__auto__ = event.selectedTarget;
if(cljs.core.truth_(or__3630__auto__)){
return or__3630__auto__;
} else {
return event.currentTarget;
}
})();
if(cljs.core.truth_((function (){var and__3618__auto__ = related_target;
if(cljs.core.truth_(and__3618__auto__)){
return dommy.core.descendant_QMARK_.call(null,related_target,listener_target);
} else {
return and__3618__auto__;
}
})())){
return null;
} else {
return f.call(null,event);
}
});
;})(vec__20380,special_mouse_event,real_mouse_event))
});})(vec__20380,special_mouse_event,real_mouse_event))
], true, false)], null);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mouseenter","mouseenter",-1792413560),new cljs.core.Keyword(null,"mouseover","mouseover",-484272303),new cljs.core.Keyword(null,"mouseleave","mouseleave",531566580),new cljs.core.Keyword(null,"mouseout","mouseout",2049446890)], null)));
/**
* fires f if event.target is found with `selector`
*/
dommy.core.live_listener = (function live_listener(elem,selector,f){
return (function (event){
var selected_target = dommy.core.closest.call(null,elem,event.target,selector);
if(cljs.core.truth_((function (){var and__3618__auto__ = selected_target;
if(cljs.core.truth_(and__3618__auto__)){
return cljs.core.not.call(null,dommy.core.attr.call(null,selected_target,new cljs.core.Keyword(null,"disabled","disabled",-1529784218)));
} else {
return and__3618__auto__;
}
})())){
event.selectedTarget = selected_target;

return f.call(null,event);
} else {
return null;
}
});
});
/**
* Returns a nested map of event listeners on `elem`
*/
dommy.core.event_listeners = (function event_listeners(elem){
var or__3630__auto__ = elem.dommyEventListeners;
if(cljs.core.truth_(or__3630__auto__)){
return or__3630__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
/**
* @param {...*} var_args
*/
dommy.core.update_event_listeners_BANG_ = (function() { 
var update_event_listeners_BANG___delegate = function (elem,f,args){
var elem__$1 = elem;
return elem__$1.dommyEventListeners = cljs.core.apply.call(null,f,dommy.core.event_listeners.call(null,elem__$1),args);
};
var update_event_listeners_BANG_ = function (elem,f,var_args){
var args = null;
if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return update_event_listeners_BANG___delegate.call(this,elem,f,args);};
update_event_listeners_BANG_.cljs$lang$maxFixedArity = 2;
update_event_listeners_BANG_.cljs$lang$applyTo = (function (arglist__20381){
var elem = cljs.core.first(arglist__20381);
arglist__20381 = cljs.core.next(arglist__20381);
var f = cljs.core.first(arglist__20381);
var args = cljs.core.rest(arglist__20381);
return update_event_listeners_BANG___delegate(elem,f,args);
});
update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = update_event_listeners_BANG___delegate;
return update_event_listeners_BANG_;
})()
;
dommy.core.elem_and_selector = (function elem_and_selector(elem_sel){
if(cljs.core.sequential_QMARK_.call(null,elem_sel)){
return cljs.core.juxt.call(null,cljs.core.first,cljs.core.rest).call(null,elem_sel);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [elem_sel,null], null);
}
});
/**
* Adds `f` as a listener for events of type `event-type` on
* `elem-sel`, which must either be a DOM node, or a sequence
* whose first item is a DOM node.
* 
* In other words, the call to `listen!` can take two forms:
* 
* If `elem-sel` is a DOM node, i.e., you're doing something like:
* 
* (listen! elem :click click-handler)
* 
* then `click-handler` will be set as a listener for `click` events
* on the `elem`.
* 
* If `elem-sel` is a sequence:
* 
* (listen! [elem :.selector.for :.some.descendants] :click click-handler)
* 
* then `click-handler` will be set as a listener for `click` events
* on descendants of `elem` that match the selector
* 
* Also accepts any number of event-type and handler pairs for setting
* multiple listeners at once:
* 
* (listen! some-elem :click click-handler :hover hover-handler)
* @param {...*} var_args
*/
dommy.core.listen_BANG_ = (function() { 
var listen_BANG___delegate = function (elem_sel,type_fs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"type-fs","type-fs",1567896074,null)))))].join('')));
}

var vec__20405_20428 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_20429 = cljs.core.nth.call(null,vec__20405_20428,(0),null);
var selector_20430 = cljs.core.nth.call(null,vec__20405_20428,(1),null);
var seq__20406_20431 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__20413_20432 = null;
var count__20414_20433 = (0);
var i__20415_20434 = (0);
while(true){
if((i__20415_20434 < count__20414_20433)){
var vec__20422_20435 = cljs.core._nth.call(null,chunk__20413_20432,i__20415_20434);
var orig_type_20436 = cljs.core.nth.call(null,vec__20422_20435,(0),null);
var f_20437 = cljs.core.nth.call(null,vec__20422_20435,(1),null);
var seq__20416_20438 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_20436,new cljs.core.PersistentArrayMap.fromArray([orig_type_20436,cljs.core.identity], true, false)));
var chunk__20418_20439 = null;
var count__20419_20440 = (0);
var i__20420_20441 = (0);
while(true){
if((i__20420_20441 < count__20419_20440)){
var vec__20423_20442 = cljs.core._nth.call(null,chunk__20418_20439,i__20420_20441);
var actual_type_20443 = cljs.core.nth.call(null,vec__20423_20442,(0),null);
var factory_20444 = cljs.core.nth.call(null,vec__20423_20442,(1),null);
var canonical_f_20445 = (cljs.core.truth_(selector_20430)?cljs.core.partial.call(null,dommy.core.live_listener,elem_20429,selector_20430):cljs.core.identity).call(null,factory_20444.call(null,f_20437));
dommy.core.update_event_listeners_BANG_.call(null,elem_20429,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_20430,actual_type_20443,f_20437], null),canonical_f_20445);

if(cljs.core.truth_(elem_20429.addEventListener)){
elem_20429.addEventListener(cljs.core.name.call(null,actual_type_20443),canonical_f_20445);
} else {
elem_20429.attachEvent(cljs.core.name.call(null,actual_type_20443),canonical_f_20445);
}

var G__20446 = seq__20416_20438;
var G__20447 = chunk__20418_20439;
var G__20448 = count__20419_20440;
var G__20449 = (i__20420_20441 + (1));
seq__20416_20438 = G__20446;
chunk__20418_20439 = G__20447;
count__20419_20440 = G__20448;
i__20420_20441 = G__20449;
continue;
} else {
var temp__4126__auto___20450 = cljs.core.seq.call(null,seq__20416_20438);
if(temp__4126__auto___20450){
var seq__20416_20451__$1 = temp__4126__auto___20450;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20416_20451__$1)){
var c__4417__auto___20452 = cljs.core.chunk_first.call(null,seq__20416_20451__$1);
var G__20453 = cljs.core.chunk_rest.call(null,seq__20416_20451__$1);
var G__20454 = c__4417__auto___20452;
var G__20455 = cljs.core.count.call(null,c__4417__auto___20452);
var G__20456 = (0);
seq__20416_20438 = G__20453;
chunk__20418_20439 = G__20454;
count__20419_20440 = G__20455;
i__20420_20441 = G__20456;
continue;
} else {
var vec__20424_20457 = cljs.core.first.call(null,seq__20416_20451__$1);
var actual_type_20458 = cljs.core.nth.call(null,vec__20424_20457,(0),null);
var factory_20459 = cljs.core.nth.call(null,vec__20424_20457,(1),null);
var canonical_f_20460 = (cljs.core.truth_(selector_20430)?cljs.core.partial.call(null,dommy.core.live_listener,elem_20429,selector_20430):cljs.core.identity).call(null,factory_20459.call(null,f_20437));
dommy.core.update_event_listeners_BANG_.call(null,elem_20429,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_20430,actual_type_20458,f_20437], null),canonical_f_20460);

if(cljs.core.truth_(elem_20429.addEventListener)){
elem_20429.addEventListener(cljs.core.name.call(null,actual_type_20458),canonical_f_20460);
} else {
elem_20429.attachEvent(cljs.core.name.call(null,actual_type_20458),canonical_f_20460);
}

var G__20461 = cljs.core.next.call(null,seq__20416_20451__$1);
var G__20462 = null;
var G__20463 = (0);
var G__20464 = (0);
seq__20416_20438 = G__20461;
chunk__20418_20439 = G__20462;
count__20419_20440 = G__20463;
i__20420_20441 = G__20464;
continue;
}
} else {
}
}
break;
}

var G__20465 = seq__20406_20431;
var G__20466 = chunk__20413_20432;
var G__20467 = count__20414_20433;
var G__20468 = (i__20415_20434 + (1));
seq__20406_20431 = G__20465;
chunk__20413_20432 = G__20466;
count__20414_20433 = G__20467;
i__20415_20434 = G__20468;
continue;
} else {
var temp__4126__auto___20469 = cljs.core.seq.call(null,seq__20406_20431);
if(temp__4126__auto___20469){
var seq__20406_20470__$1 = temp__4126__auto___20469;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20406_20470__$1)){
var c__4417__auto___20471 = cljs.core.chunk_first.call(null,seq__20406_20470__$1);
var G__20472 = cljs.core.chunk_rest.call(null,seq__20406_20470__$1);
var G__20473 = c__4417__auto___20471;
var G__20474 = cljs.core.count.call(null,c__4417__auto___20471);
var G__20475 = (0);
seq__20406_20431 = G__20472;
chunk__20413_20432 = G__20473;
count__20414_20433 = G__20474;
i__20415_20434 = G__20475;
continue;
} else {
var vec__20425_20476 = cljs.core.first.call(null,seq__20406_20470__$1);
var orig_type_20477 = cljs.core.nth.call(null,vec__20425_20476,(0),null);
var f_20478 = cljs.core.nth.call(null,vec__20425_20476,(1),null);
var seq__20407_20479 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_20477,new cljs.core.PersistentArrayMap.fromArray([orig_type_20477,cljs.core.identity], true, false)));
var chunk__20409_20480 = null;
var count__20410_20481 = (0);
var i__20411_20482 = (0);
while(true){
if((i__20411_20482 < count__20410_20481)){
var vec__20426_20483 = cljs.core._nth.call(null,chunk__20409_20480,i__20411_20482);
var actual_type_20484 = cljs.core.nth.call(null,vec__20426_20483,(0),null);
var factory_20485 = cljs.core.nth.call(null,vec__20426_20483,(1),null);
var canonical_f_20486 = (cljs.core.truth_(selector_20430)?cljs.core.partial.call(null,dommy.core.live_listener,elem_20429,selector_20430):cljs.core.identity).call(null,factory_20485.call(null,f_20478));
dommy.core.update_event_listeners_BANG_.call(null,elem_20429,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_20430,actual_type_20484,f_20478], null),canonical_f_20486);

if(cljs.core.truth_(elem_20429.addEventListener)){
elem_20429.addEventListener(cljs.core.name.call(null,actual_type_20484),canonical_f_20486);
} else {
elem_20429.attachEvent(cljs.core.name.call(null,actual_type_20484),canonical_f_20486);
}

var G__20487 = seq__20407_20479;
var G__20488 = chunk__20409_20480;
var G__20489 = count__20410_20481;
var G__20490 = (i__20411_20482 + (1));
seq__20407_20479 = G__20487;
chunk__20409_20480 = G__20488;
count__20410_20481 = G__20489;
i__20411_20482 = G__20490;
continue;
} else {
var temp__4126__auto___20491__$1 = cljs.core.seq.call(null,seq__20407_20479);
if(temp__4126__auto___20491__$1){
var seq__20407_20492__$1 = temp__4126__auto___20491__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20407_20492__$1)){
var c__4417__auto___20493 = cljs.core.chunk_first.call(null,seq__20407_20492__$1);
var G__20494 = cljs.core.chunk_rest.call(null,seq__20407_20492__$1);
var G__20495 = c__4417__auto___20493;
var G__20496 = cljs.core.count.call(null,c__4417__auto___20493);
var G__20497 = (0);
seq__20407_20479 = G__20494;
chunk__20409_20480 = G__20495;
count__20410_20481 = G__20496;
i__20411_20482 = G__20497;
continue;
} else {
var vec__20427_20498 = cljs.core.first.call(null,seq__20407_20492__$1);
var actual_type_20499 = cljs.core.nth.call(null,vec__20427_20498,(0),null);
var factory_20500 = cljs.core.nth.call(null,vec__20427_20498,(1),null);
var canonical_f_20501 = (cljs.core.truth_(selector_20430)?cljs.core.partial.call(null,dommy.core.live_listener,elem_20429,selector_20430):cljs.core.identity).call(null,factory_20500.call(null,f_20478));
dommy.core.update_event_listeners_BANG_.call(null,elem_20429,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_20430,actual_type_20499,f_20478], null),canonical_f_20501);

if(cljs.core.truth_(elem_20429.addEventListener)){
elem_20429.addEventListener(cljs.core.name.call(null,actual_type_20499),canonical_f_20501);
} else {
elem_20429.attachEvent(cljs.core.name.call(null,actual_type_20499),canonical_f_20501);
}

var G__20502 = cljs.core.next.call(null,seq__20407_20492__$1);
var G__20503 = null;
var G__20504 = (0);
var G__20505 = (0);
seq__20407_20479 = G__20502;
chunk__20409_20480 = G__20503;
count__20410_20481 = G__20504;
i__20411_20482 = G__20505;
continue;
}
} else {
}
}
break;
}

var G__20506 = cljs.core.next.call(null,seq__20406_20470__$1);
var G__20507 = null;
var G__20508 = (0);
var G__20509 = (0);
seq__20406_20431 = G__20506;
chunk__20413_20432 = G__20507;
count__20414_20433 = G__20508;
i__20415_20434 = G__20509;
continue;
}
} else {
}
}
break;
}

return elem_sel;
};
var listen_BANG_ = function (elem_sel,var_args){
var type_fs = null;
if (arguments.length > 1) {
  type_fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return listen_BANG___delegate.call(this,elem_sel,type_fs);};
listen_BANG_.cljs$lang$maxFixedArity = 1;
listen_BANG_.cljs$lang$applyTo = (function (arglist__20510){
var elem_sel = cljs.core.first(arglist__20510);
var type_fs = cljs.core.rest(arglist__20510);
return listen_BANG___delegate(elem_sel,type_fs);
});
listen_BANG_.cljs$core$IFn$_invoke$arity$variadic = listen_BANG___delegate;
return listen_BANG_;
})()
;
/**
* Removes event listener for the element defined in `elem-sel`,
* which is the same format as listen!.
* 
* The following forms are allowed, and will remove all handlers
* that match the parameters passed in:
* 
* (unlisten! [elem :.selector] :click event-listener)
* 
* (unlisten! [elem :.selector]
* :click event-listener
* :mouseover other-event-listener)
* @param {...*} var_args
*/
dommy.core.unlisten_BANG_ = (function() { 
var unlisten_BANG___delegate = function (elem_sel,type_fs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"type-fs","type-fs",1567896074,null)))))].join('')));
}

var vec__20534_20557 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_20558 = cljs.core.nth.call(null,vec__20534_20557,(0),null);
var selector_20559 = cljs.core.nth.call(null,vec__20534_20557,(1),null);
var seq__20535_20560 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__20542_20561 = null;
var count__20543_20562 = (0);
var i__20544_20563 = (0);
while(true){
if((i__20544_20563 < count__20543_20562)){
var vec__20551_20564 = cljs.core._nth.call(null,chunk__20542_20561,i__20544_20563);
var orig_type_20565 = cljs.core.nth.call(null,vec__20551_20564,(0),null);
var f_20566 = cljs.core.nth.call(null,vec__20551_20564,(1),null);
var seq__20545_20567 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_20565,new cljs.core.PersistentArrayMap.fromArray([orig_type_20565,cljs.core.identity], true, false)));
var chunk__20547_20568 = null;
var count__20548_20569 = (0);
var i__20549_20570 = (0);
while(true){
if((i__20549_20570 < count__20548_20569)){
var vec__20552_20571 = cljs.core._nth.call(null,chunk__20547_20568,i__20549_20570);
var actual_type_20572 = cljs.core.nth.call(null,vec__20552_20571,(0),null);
var __20573 = cljs.core.nth.call(null,vec__20552_20571,(1),null);
var keys_20574 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_20559,actual_type_20572,f_20566], null);
var canonical_f_20575 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_20558),keys_20574);
dommy.core.update_event_listeners_BANG_.call(null,elem_20558,dommy.utils.dissoc_in,keys_20574);

if(cljs.core.truth_(elem_20558.removeEventListener)){
elem_20558.removeEventListener(cljs.core.name.call(null,actual_type_20572),canonical_f_20575);
} else {
elem_20558.detachEvent(cljs.core.name.call(null,actual_type_20572),canonical_f_20575);
}

var G__20576 = seq__20545_20567;
var G__20577 = chunk__20547_20568;
var G__20578 = count__20548_20569;
var G__20579 = (i__20549_20570 + (1));
seq__20545_20567 = G__20576;
chunk__20547_20568 = G__20577;
count__20548_20569 = G__20578;
i__20549_20570 = G__20579;
continue;
} else {
var temp__4126__auto___20580 = cljs.core.seq.call(null,seq__20545_20567);
if(temp__4126__auto___20580){
var seq__20545_20581__$1 = temp__4126__auto___20580;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20545_20581__$1)){
var c__4417__auto___20582 = cljs.core.chunk_first.call(null,seq__20545_20581__$1);
var G__20583 = cljs.core.chunk_rest.call(null,seq__20545_20581__$1);
var G__20584 = c__4417__auto___20582;
var G__20585 = cljs.core.count.call(null,c__4417__auto___20582);
var G__20586 = (0);
seq__20545_20567 = G__20583;
chunk__20547_20568 = G__20584;
count__20548_20569 = G__20585;
i__20549_20570 = G__20586;
continue;
} else {
var vec__20553_20587 = cljs.core.first.call(null,seq__20545_20581__$1);
var actual_type_20588 = cljs.core.nth.call(null,vec__20553_20587,(0),null);
var __20589 = cljs.core.nth.call(null,vec__20553_20587,(1),null);
var keys_20590 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_20559,actual_type_20588,f_20566], null);
var canonical_f_20591 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_20558),keys_20590);
dommy.core.update_event_listeners_BANG_.call(null,elem_20558,dommy.utils.dissoc_in,keys_20590);

if(cljs.core.truth_(elem_20558.removeEventListener)){
elem_20558.removeEventListener(cljs.core.name.call(null,actual_type_20588),canonical_f_20591);
} else {
elem_20558.detachEvent(cljs.core.name.call(null,actual_type_20588),canonical_f_20591);
}

var G__20592 = cljs.core.next.call(null,seq__20545_20581__$1);
var G__20593 = null;
var G__20594 = (0);
var G__20595 = (0);
seq__20545_20567 = G__20592;
chunk__20547_20568 = G__20593;
count__20548_20569 = G__20594;
i__20549_20570 = G__20595;
continue;
}
} else {
}
}
break;
}

var G__20596 = seq__20535_20560;
var G__20597 = chunk__20542_20561;
var G__20598 = count__20543_20562;
var G__20599 = (i__20544_20563 + (1));
seq__20535_20560 = G__20596;
chunk__20542_20561 = G__20597;
count__20543_20562 = G__20598;
i__20544_20563 = G__20599;
continue;
} else {
var temp__4126__auto___20600 = cljs.core.seq.call(null,seq__20535_20560);
if(temp__4126__auto___20600){
var seq__20535_20601__$1 = temp__4126__auto___20600;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20535_20601__$1)){
var c__4417__auto___20602 = cljs.core.chunk_first.call(null,seq__20535_20601__$1);
var G__20603 = cljs.core.chunk_rest.call(null,seq__20535_20601__$1);
var G__20604 = c__4417__auto___20602;
var G__20605 = cljs.core.count.call(null,c__4417__auto___20602);
var G__20606 = (0);
seq__20535_20560 = G__20603;
chunk__20542_20561 = G__20604;
count__20543_20562 = G__20605;
i__20544_20563 = G__20606;
continue;
} else {
var vec__20554_20607 = cljs.core.first.call(null,seq__20535_20601__$1);
var orig_type_20608 = cljs.core.nth.call(null,vec__20554_20607,(0),null);
var f_20609 = cljs.core.nth.call(null,vec__20554_20607,(1),null);
var seq__20536_20610 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_20608,new cljs.core.PersistentArrayMap.fromArray([orig_type_20608,cljs.core.identity], true, false)));
var chunk__20538_20611 = null;
var count__20539_20612 = (0);
var i__20540_20613 = (0);
while(true){
if((i__20540_20613 < count__20539_20612)){
var vec__20555_20614 = cljs.core._nth.call(null,chunk__20538_20611,i__20540_20613);
var actual_type_20615 = cljs.core.nth.call(null,vec__20555_20614,(0),null);
var __20616 = cljs.core.nth.call(null,vec__20555_20614,(1),null);
var keys_20617 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_20559,actual_type_20615,f_20609], null);
var canonical_f_20618 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_20558),keys_20617);
dommy.core.update_event_listeners_BANG_.call(null,elem_20558,dommy.utils.dissoc_in,keys_20617);

if(cljs.core.truth_(elem_20558.removeEventListener)){
elem_20558.removeEventListener(cljs.core.name.call(null,actual_type_20615),canonical_f_20618);
} else {
elem_20558.detachEvent(cljs.core.name.call(null,actual_type_20615),canonical_f_20618);
}

var G__20619 = seq__20536_20610;
var G__20620 = chunk__20538_20611;
var G__20621 = count__20539_20612;
var G__20622 = (i__20540_20613 + (1));
seq__20536_20610 = G__20619;
chunk__20538_20611 = G__20620;
count__20539_20612 = G__20621;
i__20540_20613 = G__20622;
continue;
} else {
var temp__4126__auto___20623__$1 = cljs.core.seq.call(null,seq__20536_20610);
if(temp__4126__auto___20623__$1){
var seq__20536_20624__$1 = temp__4126__auto___20623__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20536_20624__$1)){
var c__4417__auto___20625 = cljs.core.chunk_first.call(null,seq__20536_20624__$1);
var G__20626 = cljs.core.chunk_rest.call(null,seq__20536_20624__$1);
var G__20627 = c__4417__auto___20625;
var G__20628 = cljs.core.count.call(null,c__4417__auto___20625);
var G__20629 = (0);
seq__20536_20610 = G__20626;
chunk__20538_20611 = G__20627;
count__20539_20612 = G__20628;
i__20540_20613 = G__20629;
continue;
} else {
var vec__20556_20630 = cljs.core.first.call(null,seq__20536_20624__$1);
var actual_type_20631 = cljs.core.nth.call(null,vec__20556_20630,(0),null);
var __20632 = cljs.core.nth.call(null,vec__20556_20630,(1),null);
var keys_20633 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_20559,actual_type_20631,f_20609], null);
var canonical_f_20634 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_20558),keys_20633);
dommy.core.update_event_listeners_BANG_.call(null,elem_20558,dommy.utils.dissoc_in,keys_20633);

if(cljs.core.truth_(elem_20558.removeEventListener)){
elem_20558.removeEventListener(cljs.core.name.call(null,actual_type_20631),canonical_f_20634);
} else {
elem_20558.detachEvent(cljs.core.name.call(null,actual_type_20631),canonical_f_20634);
}

var G__20635 = cljs.core.next.call(null,seq__20536_20624__$1);
var G__20636 = null;
var G__20637 = (0);
var G__20638 = (0);
seq__20536_20610 = G__20635;
chunk__20538_20611 = G__20636;
count__20539_20612 = G__20637;
i__20540_20613 = G__20638;
continue;
}
} else {
}
}
break;
}

var G__20639 = cljs.core.next.call(null,seq__20535_20601__$1);
var G__20640 = null;
var G__20641 = (0);
var G__20642 = (0);
seq__20535_20560 = G__20639;
chunk__20542_20561 = G__20640;
count__20543_20562 = G__20641;
i__20544_20563 = G__20642;
continue;
}
} else {
}
}
break;
}

return elem_sel;
};
var unlisten_BANG_ = function (elem_sel,var_args){
var type_fs = null;
if (arguments.length > 1) {
  type_fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return unlisten_BANG___delegate.call(this,elem_sel,type_fs);};
unlisten_BANG_.cljs$lang$maxFixedArity = 1;
unlisten_BANG_.cljs$lang$applyTo = (function (arglist__20643){
var elem_sel = cljs.core.first(arglist__20643);
var type_fs = cljs.core.rest(arglist__20643);
return unlisten_BANG___delegate(elem_sel,type_fs);
});
unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic = unlisten_BANG___delegate;
return unlisten_BANG_;
})()
;
/**
* Behaves like `listen!`, but removes the listener after the first event occurs.
* @param {...*} var_args
*/
dommy.core.listen_once_BANG_ = (function() { 
var listen_once_BANG___delegate = function (elem_sel,type_fs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"type-fs","type-fs",1567896074,null)))))].join('')));
}

var vec__20651_20658 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_20659 = cljs.core.nth.call(null,vec__20651_20658,(0),null);
var selector_20660 = cljs.core.nth.call(null,vec__20651_20658,(1),null);
var seq__20652_20661 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__20653_20662 = null;
var count__20654_20663 = (0);
var i__20655_20664 = (0);
while(true){
if((i__20655_20664 < count__20654_20663)){
var vec__20656_20665 = cljs.core._nth.call(null,chunk__20653_20662,i__20655_20664);
var type_20666 = cljs.core.nth.call(null,vec__20656_20665,(0),null);
var f_20667 = cljs.core.nth.call(null,vec__20656_20665,(1),null);
dommy.core.listen_BANG_.call(null,elem_sel,type_20666,((function (seq__20652_20661,chunk__20653_20662,count__20654_20663,i__20655_20664,vec__20656_20665,type_20666,f_20667,vec__20651_20658,elem_20659,selector_20660){
return (function this_fn(e){
dommy.core.unlisten_BANG_.call(null,elem_sel,type_20666,this_fn);

return f_20667.call(null,e);
});})(seq__20652_20661,chunk__20653_20662,count__20654_20663,i__20655_20664,vec__20656_20665,type_20666,f_20667,vec__20651_20658,elem_20659,selector_20660))
);

var G__20668 = seq__20652_20661;
var G__20669 = chunk__20653_20662;
var G__20670 = count__20654_20663;
var G__20671 = (i__20655_20664 + (1));
seq__20652_20661 = G__20668;
chunk__20653_20662 = G__20669;
count__20654_20663 = G__20670;
i__20655_20664 = G__20671;
continue;
} else {
var temp__4126__auto___20672 = cljs.core.seq.call(null,seq__20652_20661);
if(temp__4126__auto___20672){
var seq__20652_20673__$1 = temp__4126__auto___20672;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20652_20673__$1)){
var c__4417__auto___20674 = cljs.core.chunk_first.call(null,seq__20652_20673__$1);
var G__20675 = cljs.core.chunk_rest.call(null,seq__20652_20673__$1);
var G__20676 = c__4417__auto___20674;
var G__20677 = cljs.core.count.call(null,c__4417__auto___20674);
var G__20678 = (0);
seq__20652_20661 = G__20675;
chunk__20653_20662 = G__20676;
count__20654_20663 = G__20677;
i__20655_20664 = G__20678;
continue;
} else {
var vec__20657_20679 = cljs.core.first.call(null,seq__20652_20673__$1);
var type_20680 = cljs.core.nth.call(null,vec__20657_20679,(0),null);
var f_20681 = cljs.core.nth.call(null,vec__20657_20679,(1),null);
dommy.core.listen_BANG_.call(null,elem_sel,type_20680,((function (seq__20652_20661,chunk__20653_20662,count__20654_20663,i__20655_20664,vec__20657_20679,type_20680,f_20681,seq__20652_20673__$1,temp__4126__auto___20672,vec__20651_20658,elem_20659,selector_20660){
return (function this_fn(e){
dommy.core.unlisten_BANG_.call(null,elem_sel,type_20680,this_fn);

return f_20681.call(null,e);
});})(seq__20652_20661,chunk__20653_20662,count__20654_20663,i__20655_20664,vec__20657_20679,type_20680,f_20681,seq__20652_20673__$1,temp__4126__auto___20672,vec__20651_20658,elem_20659,selector_20660))
);

var G__20682 = cljs.core.next.call(null,seq__20652_20673__$1);
var G__20683 = null;
var G__20684 = (0);
var G__20685 = (0);
seq__20652_20661 = G__20682;
chunk__20653_20662 = G__20683;
count__20654_20663 = G__20684;
i__20655_20664 = G__20685;
continue;
}
} else {
}
}
break;
}

return elem_sel;
};
var listen_once_BANG_ = function (elem_sel,var_args){
var type_fs = null;
if (arguments.length > 1) {
  type_fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return listen_once_BANG___delegate.call(this,elem_sel,type_fs);};
listen_once_BANG_.cljs$lang$maxFixedArity = 1;
listen_once_BANG_.cljs$lang$applyTo = (function (arglist__20686){
var elem_sel = cljs.core.first(arglist__20686);
var type_fs = cljs.core.rest(arglist__20686);
return listen_once_BANG___delegate(elem_sel,type_fs);
});
listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic = listen_once_BANG___delegate;
return listen_once_BANG_;
})()
;

//# sourceMappingURL=core.js.map