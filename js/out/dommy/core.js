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
return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,base,selector),cljs.core.take_while.call(null,(function (p1__19918_SHARP_){
return !((p1__19918_SHARP_ === base));
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
var seq__19925_19931 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));
var chunk__19926_19932 = null;
var count__19927_19933 = (0);
var i__19928_19934 = (0);
while(true){
if((i__19928_19934 < count__19927_19933)){
var vec__19929_19935 = cljs.core._nth.call(null,chunk__19926_19932,i__19928_19934);
var k_19936 = cljs.core.nth.call(null,vec__19929_19935,(0),null);
var v_19937 = cljs.core.nth.call(null,vec__19929_19935,(1),null);
style.setProperty(dommy.utils.as_str.call(null,k_19936),v_19937);

var G__19938 = seq__19925_19931;
var G__19939 = chunk__19926_19932;
var G__19940 = count__19927_19933;
var G__19941 = (i__19928_19934 + (1));
seq__19925_19931 = G__19938;
chunk__19926_19932 = G__19939;
count__19927_19933 = G__19940;
i__19928_19934 = G__19941;
continue;
} else {
var temp__4126__auto___19942 = cljs.core.seq.call(null,seq__19925_19931);
if(temp__4126__auto___19942){
var seq__19925_19943__$1 = temp__4126__auto___19942;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19925_19943__$1)){
var c__4417__auto___19944 = cljs.core.chunk_first.call(null,seq__19925_19943__$1);
var G__19945 = cljs.core.chunk_rest.call(null,seq__19925_19943__$1);
var G__19946 = c__4417__auto___19944;
var G__19947 = cljs.core.count.call(null,c__4417__auto___19944);
var G__19948 = (0);
seq__19925_19931 = G__19945;
chunk__19926_19932 = G__19946;
count__19927_19933 = G__19947;
i__19928_19934 = G__19948;
continue;
} else {
var vec__19930_19949 = cljs.core.first.call(null,seq__19925_19943__$1);
var k_19950 = cljs.core.nth.call(null,vec__19930_19949,(0),null);
var v_19951 = cljs.core.nth.call(null,vec__19930_19949,(1),null);
style.setProperty(dommy.utils.as_str.call(null,k_19950),v_19951);

var G__19952 = cljs.core.next.call(null,seq__19925_19943__$1);
var G__19953 = null;
var G__19954 = (0);
var G__19955 = (0);
seq__19925_19931 = G__19952;
chunk__19926_19932 = G__19953;
count__19927_19933 = G__19954;
i__19928_19934 = G__19955;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__19956){
var elem = cljs.core.first(arglist__19956);
var kvs = cljs.core.rest(arglist__19956);
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

var seq__19963_19969 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));
var chunk__19964_19970 = null;
var count__19965_19971 = (0);
var i__19966_19972 = (0);
while(true){
if((i__19966_19972 < count__19965_19971)){
var vec__19967_19973 = cljs.core._nth.call(null,chunk__19964_19970,i__19966_19972);
var k_19974 = cljs.core.nth.call(null,vec__19967_19973,(0),null);
var v_19975 = cljs.core.nth.call(null,vec__19967_19973,(1),null);
dommy.core.set_style_BANG_.call(null,elem,k_19974,[cljs.core.str(v_19975),cljs.core.str("px")].join(''));

var G__19976 = seq__19963_19969;
var G__19977 = chunk__19964_19970;
var G__19978 = count__19965_19971;
var G__19979 = (i__19966_19972 + (1));
seq__19963_19969 = G__19976;
chunk__19964_19970 = G__19977;
count__19965_19971 = G__19978;
i__19966_19972 = G__19979;
continue;
} else {
var temp__4126__auto___19980 = cljs.core.seq.call(null,seq__19963_19969);
if(temp__4126__auto___19980){
var seq__19963_19981__$1 = temp__4126__auto___19980;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19963_19981__$1)){
var c__4417__auto___19982 = cljs.core.chunk_first.call(null,seq__19963_19981__$1);
var G__19983 = cljs.core.chunk_rest.call(null,seq__19963_19981__$1);
var G__19984 = c__4417__auto___19982;
var G__19985 = cljs.core.count.call(null,c__4417__auto___19982);
var G__19986 = (0);
seq__19963_19969 = G__19983;
chunk__19964_19970 = G__19984;
count__19965_19971 = G__19985;
i__19966_19972 = G__19986;
continue;
} else {
var vec__19968_19987 = cljs.core.first.call(null,seq__19963_19981__$1);
var k_19988 = cljs.core.nth.call(null,vec__19968_19987,(0),null);
var v_19989 = cljs.core.nth.call(null,vec__19968_19987,(1),null);
dommy.core.set_style_BANG_.call(null,elem,k_19988,[cljs.core.str(v_19989),cljs.core.str("px")].join(''));

var G__19990 = cljs.core.next.call(null,seq__19963_19981__$1);
var G__19991 = null;
var G__19992 = (0);
var G__19993 = (0);
seq__19963_19969 = G__19990;
chunk__19964_19970 = G__19991;
count__19965_19971 = G__19992;
i__19966_19972 = G__19993;
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
set_px_BANG_.cljs$lang$applyTo = (function (arglist__19994){
var elem = cljs.core.first(arglist__19994);
var kvs = cljs.core.rest(arglist__19994);
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
var G__20003 = elem;
(G__20003[k__$1] = v);

return G__20003;
} else {
var G__20004 = elem;
G__20004.setAttribute(k__$1,v);

return G__20004;
}
} else {
return null;
}
});
var set_attr_BANG___4 = (function() { 
var G__20011__delegate = function (elem,k,v,kvs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null)))))].join('')));
}

var seq__20005_20012 = cljs.core.seq.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.call(null,(2),kvs)));
var chunk__20006_20013 = null;
var count__20007_20014 = (0);
var i__20008_20015 = (0);
while(true){
if((i__20008_20015 < count__20007_20014)){
var vec__20009_20016 = cljs.core._nth.call(null,chunk__20006_20013,i__20008_20015);
var k_20017__$1 = cljs.core.nth.call(null,vec__20009_20016,(0),null);
var v_20018__$1 = cljs.core.nth.call(null,vec__20009_20016,(1),null);
set_attr_BANG_.call(null,elem,k_20017__$1,v_20018__$1);

var G__20019 = seq__20005_20012;
var G__20020 = chunk__20006_20013;
var G__20021 = count__20007_20014;
var G__20022 = (i__20008_20015 + (1));
seq__20005_20012 = G__20019;
chunk__20006_20013 = G__20020;
count__20007_20014 = G__20021;
i__20008_20015 = G__20022;
continue;
} else {
var temp__4126__auto___20023 = cljs.core.seq.call(null,seq__20005_20012);
if(temp__4126__auto___20023){
var seq__20005_20024__$1 = temp__4126__auto___20023;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20005_20024__$1)){
var c__4417__auto___20025 = cljs.core.chunk_first.call(null,seq__20005_20024__$1);
var G__20026 = cljs.core.chunk_rest.call(null,seq__20005_20024__$1);
var G__20027 = c__4417__auto___20025;
var G__20028 = cljs.core.count.call(null,c__4417__auto___20025);
var G__20029 = (0);
seq__20005_20012 = G__20026;
chunk__20006_20013 = G__20027;
count__20007_20014 = G__20028;
i__20008_20015 = G__20029;
continue;
} else {
var vec__20010_20030 = cljs.core.first.call(null,seq__20005_20024__$1);
var k_20031__$1 = cljs.core.nth.call(null,vec__20010_20030,(0),null);
var v_20032__$1 = cljs.core.nth.call(null,vec__20010_20030,(1),null);
set_attr_BANG_.call(null,elem,k_20031__$1,v_20032__$1);

var G__20033 = cljs.core.next.call(null,seq__20005_20024__$1);
var G__20034 = null;
var G__20035 = (0);
var G__20036 = (0);
seq__20005_20012 = G__20033;
chunk__20006_20013 = G__20034;
count__20007_20014 = G__20035;
i__20008_20015 = G__20036;
continue;
}
} else {
}
}
break;
}

return elem;
};
var G__20011 = function (elem,k,v,var_args){
var kvs = null;
if (arguments.length > 3) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__20011__delegate.call(this,elem,k,v,kvs);};
G__20011.cljs$lang$maxFixedArity = 3;
G__20011.cljs$lang$applyTo = (function (arglist__20037){
var elem = cljs.core.first(arglist__20037);
arglist__20037 = cljs.core.next(arglist__20037);
var k = cljs.core.first(arglist__20037);
arglist__20037 = cljs.core.next(arglist__20037);
var v = cljs.core.first(arglist__20037);
var kvs = cljs.core.rest(arglist__20037);
return G__20011__delegate(elem,k,v,kvs);
});
G__20011.cljs$core$IFn$_invoke$arity$variadic = G__20011__delegate;
return G__20011;
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
var k_20046__$1 = dommy.utils.as_str.call(null,k);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["class",null,"classes",null], null), null).call(null,k_20046__$1))){
dommy.core.set_class_BANG_.call(null,elem,"");
} else {
elem.removeAttribute(k_20046__$1);
}

return elem;
});
var remove_attr_BANG___3 = (function() { 
var G__20047__delegate = function (elem,k,ks){
var seq__20042_20048 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));
var chunk__20043_20049 = null;
var count__20044_20050 = (0);
var i__20045_20051 = (0);
while(true){
if((i__20045_20051 < count__20044_20050)){
var k_20052__$1 = cljs.core._nth.call(null,chunk__20043_20049,i__20045_20051);
remove_attr_BANG_.call(null,elem,k_20052__$1);

var G__20053 = seq__20042_20048;
var G__20054 = chunk__20043_20049;
var G__20055 = count__20044_20050;
var G__20056 = (i__20045_20051 + (1));
seq__20042_20048 = G__20053;
chunk__20043_20049 = G__20054;
count__20044_20050 = G__20055;
i__20045_20051 = G__20056;
continue;
} else {
var temp__4126__auto___20057 = cljs.core.seq.call(null,seq__20042_20048);
if(temp__4126__auto___20057){
var seq__20042_20058__$1 = temp__4126__auto___20057;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20042_20058__$1)){
var c__4417__auto___20059 = cljs.core.chunk_first.call(null,seq__20042_20058__$1);
var G__20060 = cljs.core.chunk_rest.call(null,seq__20042_20058__$1);
var G__20061 = c__4417__auto___20059;
var G__20062 = cljs.core.count.call(null,c__4417__auto___20059);
var G__20063 = (0);
seq__20042_20048 = G__20060;
chunk__20043_20049 = G__20061;
count__20044_20050 = G__20062;
i__20045_20051 = G__20063;
continue;
} else {
var k_20064__$1 = cljs.core.first.call(null,seq__20042_20058__$1);
remove_attr_BANG_.call(null,elem,k_20064__$1);

var G__20065 = cljs.core.next.call(null,seq__20042_20058__$1);
var G__20066 = null;
var G__20067 = (0);
var G__20068 = (0);
seq__20042_20048 = G__20065;
chunk__20043_20049 = G__20066;
count__20044_20050 = G__20067;
i__20045_20051 = G__20068;
continue;
}
} else {
}
}
break;
}

return elem;
};
var G__20047 = function (elem,k,var_args){
var ks = null;
if (arguments.length > 2) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__20047__delegate.call(this,elem,k,ks);};
G__20047.cljs$lang$maxFixedArity = 2;
G__20047.cljs$lang$applyTo = (function (arglist__20069){
var elem = cljs.core.first(arglist__20069);
arglist__20069 = cljs.core.next(arglist__20069);
var k = cljs.core.first(arglist__20069);
var ks = cljs.core.rest(arglist__20069);
return G__20047__delegate(elem,k,ks);
});
G__20047.cljs$core$IFn$_invoke$arity$variadic = G__20047__delegate;
return G__20047;
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
var temp__4124__auto___20094 = elem.classList;
if(cljs.core.truth_(temp__4124__auto___20094)){
var class_list_20095 = temp__4124__auto___20094;
var seq__20082_20096 = cljs.core.seq.call(null,classes__$1);
var chunk__20083_20097 = null;
var count__20084_20098 = (0);
var i__20085_20099 = (0);
while(true){
if((i__20085_20099 < count__20084_20098)){
var c_20100 = cljs.core._nth.call(null,chunk__20083_20097,i__20085_20099);
class_list_20095.add(c_20100);

var G__20101 = seq__20082_20096;
var G__20102 = chunk__20083_20097;
var G__20103 = count__20084_20098;
var G__20104 = (i__20085_20099 + (1));
seq__20082_20096 = G__20101;
chunk__20083_20097 = G__20102;
count__20084_20098 = G__20103;
i__20085_20099 = G__20104;
continue;
} else {
var temp__4126__auto___20105 = cljs.core.seq.call(null,seq__20082_20096);
if(temp__4126__auto___20105){
var seq__20082_20106__$1 = temp__4126__auto___20105;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20082_20106__$1)){
var c__4417__auto___20107 = cljs.core.chunk_first.call(null,seq__20082_20106__$1);
var G__20108 = cljs.core.chunk_rest.call(null,seq__20082_20106__$1);
var G__20109 = c__4417__auto___20107;
var G__20110 = cljs.core.count.call(null,c__4417__auto___20107);
var G__20111 = (0);
seq__20082_20096 = G__20108;
chunk__20083_20097 = G__20109;
count__20084_20098 = G__20110;
i__20085_20099 = G__20111;
continue;
} else {
var c_20112 = cljs.core.first.call(null,seq__20082_20106__$1);
class_list_20095.add(c_20112);

var G__20113 = cljs.core.next.call(null,seq__20082_20106__$1);
var G__20114 = null;
var G__20115 = (0);
var G__20116 = (0);
seq__20082_20096 = G__20113;
chunk__20083_20097 = G__20114;
count__20084_20098 = G__20115;
i__20085_20099 = G__20116;
continue;
}
} else {
}
}
break;
}
} else {
var seq__20086_20117 = cljs.core.seq.call(null,classes__$1);
var chunk__20087_20118 = null;
var count__20088_20119 = (0);
var i__20089_20120 = (0);
while(true){
if((i__20089_20120 < count__20088_20119)){
var c_20121 = cljs.core._nth.call(null,chunk__20087_20118,i__20089_20120);
var class_name_20122 = dommy.core.class$.call(null,elem);
if(cljs.core.truth_(dommy.utils.class_index.call(null,class_name_20122,c_20121))){
} else {
dommy.core.set_class_BANG_.call(null,elem,(((class_name_20122 === ""))?c_20121:[cljs.core.str(class_name_20122),cljs.core.str(" "),cljs.core.str(c_20121)].join('')));
}

var G__20123 = seq__20086_20117;
var G__20124 = chunk__20087_20118;
var G__20125 = count__20088_20119;
var G__20126 = (i__20089_20120 + (1));
seq__20086_20117 = G__20123;
chunk__20087_20118 = G__20124;
count__20088_20119 = G__20125;
i__20089_20120 = G__20126;
continue;
} else {
var temp__4126__auto___20127 = cljs.core.seq.call(null,seq__20086_20117);
if(temp__4126__auto___20127){
var seq__20086_20128__$1 = temp__4126__auto___20127;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20086_20128__$1)){
var c__4417__auto___20129 = cljs.core.chunk_first.call(null,seq__20086_20128__$1);
var G__20130 = cljs.core.chunk_rest.call(null,seq__20086_20128__$1);
var G__20131 = c__4417__auto___20129;
var G__20132 = cljs.core.count.call(null,c__4417__auto___20129);
var G__20133 = (0);
seq__20086_20117 = G__20130;
chunk__20087_20118 = G__20131;
count__20088_20119 = G__20132;
i__20089_20120 = G__20133;
continue;
} else {
var c_20134 = cljs.core.first.call(null,seq__20086_20128__$1);
var class_name_20135 = dommy.core.class$.call(null,elem);
if(cljs.core.truth_(dommy.utils.class_index.call(null,class_name_20135,c_20134))){
} else {
dommy.core.set_class_BANG_.call(null,elem,(((class_name_20135 === ""))?c_20134:[cljs.core.str(class_name_20135),cljs.core.str(" "),cljs.core.str(c_20134)].join('')));
}

var G__20136 = cljs.core.next.call(null,seq__20086_20128__$1);
var G__20137 = null;
var G__20138 = (0);
var G__20139 = (0);
seq__20086_20117 = G__20136;
chunk__20087_20118 = G__20137;
count__20088_20119 = G__20138;
i__20089_20120 = G__20139;
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
var G__20140__delegate = function (elem,classes,more_classes){
var seq__20090_20141 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));
var chunk__20091_20142 = null;
var count__20092_20143 = (0);
var i__20093_20144 = (0);
while(true){
if((i__20093_20144 < count__20092_20143)){
var c_20145 = cljs.core._nth.call(null,chunk__20091_20142,i__20093_20144);
add_class_BANG_.call(null,elem,c_20145);

var G__20146 = seq__20090_20141;
var G__20147 = chunk__20091_20142;
var G__20148 = count__20092_20143;
var G__20149 = (i__20093_20144 + (1));
seq__20090_20141 = G__20146;
chunk__20091_20142 = G__20147;
count__20092_20143 = G__20148;
i__20093_20144 = G__20149;
continue;
} else {
var temp__4126__auto___20150 = cljs.core.seq.call(null,seq__20090_20141);
if(temp__4126__auto___20150){
var seq__20090_20151__$1 = temp__4126__auto___20150;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20090_20151__$1)){
var c__4417__auto___20152 = cljs.core.chunk_first.call(null,seq__20090_20151__$1);
var G__20153 = cljs.core.chunk_rest.call(null,seq__20090_20151__$1);
var G__20154 = c__4417__auto___20152;
var G__20155 = cljs.core.count.call(null,c__4417__auto___20152);
var G__20156 = (0);
seq__20090_20141 = G__20153;
chunk__20091_20142 = G__20154;
count__20092_20143 = G__20155;
i__20093_20144 = G__20156;
continue;
} else {
var c_20157 = cljs.core.first.call(null,seq__20090_20151__$1);
add_class_BANG_.call(null,elem,c_20157);

var G__20158 = cljs.core.next.call(null,seq__20090_20151__$1);
var G__20159 = null;
var G__20160 = (0);
var G__20161 = (0);
seq__20090_20141 = G__20158;
chunk__20091_20142 = G__20159;
count__20092_20143 = G__20160;
i__20093_20144 = G__20161;
continue;
}
} else {
}
}
break;
}

return elem;
};
var G__20140 = function (elem,classes,var_args){
var more_classes = null;
if (arguments.length > 2) {
  more_classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__20140__delegate.call(this,elem,classes,more_classes);};
G__20140.cljs$lang$maxFixedArity = 2;
G__20140.cljs$lang$applyTo = (function (arglist__20162){
var elem = cljs.core.first(arglist__20162);
arglist__20162 = cljs.core.next(arglist__20162);
var classes = cljs.core.first(arglist__20162);
var more_classes = cljs.core.rest(arglist__20162);
return G__20140__delegate(elem,classes,more_classes);
});
G__20140.cljs$core$IFn$_invoke$arity$variadic = G__20140__delegate;
return G__20140;
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
var temp__4124__auto___20171 = elem.classList;
if(cljs.core.truth_(temp__4124__auto___20171)){
var class_list_20172 = temp__4124__auto___20171;
class_list_20172.remove(c__$1);
} else {
var class_name_20173 = dommy.core.class$.call(null,elem);
var new_class_name_20174 = dommy.utils.remove_class_str.call(null,class_name_20173,c__$1);
if((class_name_20173 === new_class_name_20174)){
} else {
dommy.core.set_class_BANG_.call(null,elem,new_class_name_20174);
}
}

return elem;
});
var remove_class_BANG___3 = (function() { 
var G__20175__delegate = function (elem,class$,classes){
var seq__20167 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));
var chunk__20168 = null;
var count__20169 = (0);
var i__20170 = (0);
while(true){
if((i__20170 < count__20169)){
var c = cljs.core._nth.call(null,chunk__20168,i__20170);
remove_class_BANG_.call(null,elem,c);

var G__20176 = seq__20167;
var G__20177 = chunk__20168;
var G__20178 = count__20169;
var G__20179 = (i__20170 + (1));
seq__20167 = G__20176;
chunk__20168 = G__20177;
count__20169 = G__20178;
i__20170 = G__20179;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__20167);
if(temp__4126__auto__){
var seq__20167__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20167__$1)){
var c__4417__auto__ = cljs.core.chunk_first.call(null,seq__20167__$1);
var G__20180 = cljs.core.chunk_rest.call(null,seq__20167__$1);
var G__20181 = c__4417__auto__;
var G__20182 = cljs.core.count.call(null,c__4417__auto__);
var G__20183 = (0);
seq__20167 = G__20180;
chunk__20168 = G__20181;
count__20169 = G__20182;
i__20170 = G__20183;
continue;
} else {
var c = cljs.core.first.call(null,seq__20167__$1);
remove_class_BANG_.call(null,elem,c);

var G__20184 = cljs.core.next.call(null,seq__20167__$1);
var G__20185 = null;
var G__20186 = (0);
var G__20187 = (0);
seq__20167 = G__20184;
chunk__20168 = G__20185;
count__20169 = G__20186;
i__20170 = G__20187;
continue;
}
} else {
return null;
}
}
break;
}
};
var G__20175 = function (elem,class$,var_args){
var classes = null;
if (arguments.length > 2) {
  classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__20175__delegate.call(this,elem,class$,classes);};
G__20175.cljs$lang$maxFixedArity = 2;
G__20175.cljs$lang$applyTo = (function (arglist__20188){
var elem = cljs.core.first(arglist__20188);
arglist__20188 = cljs.core.next(arglist__20188);
var class$ = cljs.core.first(arglist__20188);
var classes = cljs.core.rest(arglist__20188);
return G__20175__delegate(elem,class$,classes);
});
G__20175.cljs$core$IFn$_invoke$arity$variadic = G__20175__delegate;
return G__20175;
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
var temp__4124__auto___20189 = elem.classList;
if(cljs.core.truth_(temp__4124__auto___20189)){
var class_list_20190 = temp__4124__auto___20189;
class_list_20190.toggle(c__$1);
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
var G__20196 = parent;
G__20196.appendChild(child);

return G__20196;
});
var append_BANG___3 = (function() { 
var G__20201__delegate = function (parent,child,more_children){
var seq__20197_20202 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));
var chunk__20198_20203 = null;
var count__20199_20204 = (0);
var i__20200_20205 = (0);
while(true){
if((i__20200_20205 < count__20199_20204)){
var c_20206 = cljs.core._nth.call(null,chunk__20198_20203,i__20200_20205);
append_BANG_.call(null,parent,c_20206);

var G__20207 = seq__20197_20202;
var G__20208 = chunk__20198_20203;
var G__20209 = count__20199_20204;
var G__20210 = (i__20200_20205 + (1));
seq__20197_20202 = G__20207;
chunk__20198_20203 = G__20208;
count__20199_20204 = G__20209;
i__20200_20205 = G__20210;
continue;
} else {
var temp__4126__auto___20211 = cljs.core.seq.call(null,seq__20197_20202);
if(temp__4126__auto___20211){
var seq__20197_20212__$1 = temp__4126__auto___20211;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20197_20212__$1)){
var c__4417__auto___20213 = cljs.core.chunk_first.call(null,seq__20197_20212__$1);
var G__20214 = cljs.core.chunk_rest.call(null,seq__20197_20212__$1);
var G__20215 = c__4417__auto___20213;
var G__20216 = cljs.core.count.call(null,c__4417__auto___20213);
var G__20217 = (0);
seq__20197_20202 = G__20214;
chunk__20198_20203 = G__20215;
count__20199_20204 = G__20216;
i__20200_20205 = G__20217;
continue;
} else {
var c_20218 = cljs.core.first.call(null,seq__20197_20212__$1);
append_BANG_.call(null,parent,c_20218);

var G__20219 = cljs.core.next.call(null,seq__20197_20212__$1);
var G__20220 = null;
var G__20221 = (0);
var G__20222 = (0);
seq__20197_20202 = G__20219;
chunk__20198_20203 = G__20220;
count__20199_20204 = G__20221;
i__20200_20205 = G__20222;
continue;
}
} else {
}
}
break;
}

return parent;
};
var G__20201 = function (parent,child,var_args){
var more_children = null;
if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__20201__delegate.call(this,parent,child,more_children);};
G__20201.cljs$lang$maxFixedArity = 2;
G__20201.cljs$lang$applyTo = (function (arglist__20223){
var parent = cljs.core.first(arglist__20223);
arglist__20223 = cljs.core.next(arglist__20223);
var child = cljs.core.first(arglist__20223);
var more_children = cljs.core.rest(arglist__20223);
return G__20201__delegate(parent,child,more_children);
});
G__20201.cljs$core$IFn$_invoke$arity$variadic = G__20201__delegate;
return G__20201;
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
var G__20229 = parent;
G__20229.insertBefore(child,parent.firstChild);

return G__20229;
});
var prepend_BANG___3 = (function() { 
var G__20234__delegate = function (parent,child,more_children){
var seq__20230_20235 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));
var chunk__20231_20236 = null;
var count__20232_20237 = (0);
var i__20233_20238 = (0);
while(true){
if((i__20233_20238 < count__20232_20237)){
var c_20239 = cljs.core._nth.call(null,chunk__20231_20236,i__20233_20238);
prepend_BANG_.call(null,parent,c_20239);

var G__20240 = seq__20230_20235;
var G__20241 = chunk__20231_20236;
var G__20242 = count__20232_20237;
var G__20243 = (i__20233_20238 + (1));
seq__20230_20235 = G__20240;
chunk__20231_20236 = G__20241;
count__20232_20237 = G__20242;
i__20233_20238 = G__20243;
continue;
} else {
var temp__4126__auto___20244 = cljs.core.seq.call(null,seq__20230_20235);
if(temp__4126__auto___20244){
var seq__20230_20245__$1 = temp__4126__auto___20244;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20230_20245__$1)){
var c__4417__auto___20246 = cljs.core.chunk_first.call(null,seq__20230_20245__$1);
var G__20247 = cljs.core.chunk_rest.call(null,seq__20230_20245__$1);
var G__20248 = c__4417__auto___20246;
var G__20249 = cljs.core.count.call(null,c__4417__auto___20246);
var G__20250 = (0);
seq__20230_20235 = G__20247;
chunk__20231_20236 = G__20248;
count__20232_20237 = G__20249;
i__20233_20238 = G__20250;
continue;
} else {
var c_20251 = cljs.core.first.call(null,seq__20230_20245__$1);
prepend_BANG_.call(null,parent,c_20251);

var G__20252 = cljs.core.next.call(null,seq__20230_20245__$1);
var G__20253 = null;
var G__20254 = (0);
var G__20255 = (0);
seq__20230_20235 = G__20252;
chunk__20231_20236 = G__20253;
count__20232_20237 = G__20254;
i__20233_20238 = G__20255;
continue;
}
} else {
}
}
break;
}

return parent;
};
var G__20234 = function (parent,child,var_args){
var more_children = null;
if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__20234__delegate.call(this,parent,child,more_children);};
G__20234.cljs$lang$maxFixedArity = 2;
G__20234.cljs$lang$applyTo = (function (arglist__20256){
var parent = cljs.core.first(arglist__20256);
arglist__20256 = cljs.core.next(arglist__20256);
var child = cljs.core.first(arglist__20256);
var more_children = cljs.core.rest(arglist__20256);
return G__20234__delegate(parent,child,more_children);
});
G__20234.cljs$core$IFn$_invoke$arity$variadic = G__20234__delegate;
return G__20234;
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
var temp__4124__auto___20257 = other.nextSibling;
if(cljs.core.truth_(temp__4124__auto___20257)){
var next_20258 = temp__4124__auto___20257;
dommy.core.insert_before_BANG_.call(null,elem,next_20258);
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
var G__20260 = p;
G__20260.removeChild(elem);

return G__20260;
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
dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__20261){
var vec__20262 = p__20261;
var special_mouse_event = cljs.core.nth.call(null,vec__20262,(0),null);
var real_mouse_event = cljs.core.nth.call(null,vec__20262,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,new cljs.core.PersistentArrayMap.fromArray([real_mouse_event,((function (vec__20262,special_mouse_event,real_mouse_event){
return (function (f){
return ((function (vec__20262,special_mouse_event,real_mouse_event){
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
;})(vec__20262,special_mouse_event,real_mouse_event))
});})(vec__20262,special_mouse_event,real_mouse_event))
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
update_event_listeners_BANG_.cljs$lang$applyTo = (function (arglist__20263){
var elem = cljs.core.first(arglist__20263);
arglist__20263 = cljs.core.next(arglist__20263);
var f = cljs.core.first(arglist__20263);
var args = cljs.core.rest(arglist__20263);
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

var vec__20287_20310 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_20311 = cljs.core.nth.call(null,vec__20287_20310,(0),null);
var selector_20312 = cljs.core.nth.call(null,vec__20287_20310,(1),null);
var seq__20288_20313 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__20295_20314 = null;
var count__20296_20315 = (0);
var i__20297_20316 = (0);
while(true){
if((i__20297_20316 < count__20296_20315)){
var vec__20304_20317 = cljs.core._nth.call(null,chunk__20295_20314,i__20297_20316);
var orig_type_20318 = cljs.core.nth.call(null,vec__20304_20317,(0),null);
var f_20319 = cljs.core.nth.call(null,vec__20304_20317,(1),null);
var seq__20298_20320 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_20318,new cljs.core.PersistentArrayMap.fromArray([orig_type_20318,cljs.core.identity], true, false)));
var chunk__20300_20321 = null;
var count__20301_20322 = (0);
var i__20302_20323 = (0);
while(true){
if((i__20302_20323 < count__20301_20322)){
var vec__20305_20324 = cljs.core._nth.call(null,chunk__20300_20321,i__20302_20323);
var actual_type_20325 = cljs.core.nth.call(null,vec__20305_20324,(0),null);
var factory_20326 = cljs.core.nth.call(null,vec__20305_20324,(1),null);
var canonical_f_20327 = (cljs.core.truth_(selector_20312)?cljs.core.partial.call(null,dommy.core.live_listener,elem_20311,selector_20312):cljs.core.identity).call(null,factory_20326.call(null,f_20319));
dommy.core.update_event_listeners_BANG_.call(null,elem_20311,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_20312,actual_type_20325,f_20319], null),canonical_f_20327);

if(cljs.core.truth_(elem_20311.addEventListener)){
elem_20311.addEventListener(cljs.core.name.call(null,actual_type_20325),canonical_f_20327);
} else {
elem_20311.attachEvent(cljs.core.name.call(null,actual_type_20325),canonical_f_20327);
}

var G__20328 = seq__20298_20320;
var G__20329 = chunk__20300_20321;
var G__20330 = count__20301_20322;
var G__20331 = (i__20302_20323 + (1));
seq__20298_20320 = G__20328;
chunk__20300_20321 = G__20329;
count__20301_20322 = G__20330;
i__20302_20323 = G__20331;
continue;
} else {
var temp__4126__auto___20332 = cljs.core.seq.call(null,seq__20298_20320);
if(temp__4126__auto___20332){
var seq__20298_20333__$1 = temp__4126__auto___20332;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20298_20333__$1)){
var c__4417__auto___20334 = cljs.core.chunk_first.call(null,seq__20298_20333__$1);
var G__20335 = cljs.core.chunk_rest.call(null,seq__20298_20333__$1);
var G__20336 = c__4417__auto___20334;
var G__20337 = cljs.core.count.call(null,c__4417__auto___20334);
var G__20338 = (0);
seq__20298_20320 = G__20335;
chunk__20300_20321 = G__20336;
count__20301_20322 = G__20337;
i__20302_20323 = G__20338;
continue;
} else {
var vec__20306_20339 = cljs.core.first.call(null,seq__20298_20333__$1);
var actual_type_20340 = cljs.core.nth.call(null,vec__20306_20339,(0),null);
var factory_20341 = cljs.core.nth.call(null,vec__20306_20339,(1),null);
var canonical_f_20342 = (cljs.core.truth_(selector_20312)?cljs.core.partial.call(null,dommy.core.live_listener,elem_20311,selector_20312):cljs.core.identity).call(null,factory_20341.call(null,f_20319));
dommy.core.update_event_listeners_BANG_.call(null,elem_20311,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_20312,actual_type_20340,f_20319], null),canonical_f_20342);

if(cljs.core.truth_(elem_20311.addEventListener)){
elem_20311.addEventListener(cljs.core.name.call(null,actual_type_20340),canonical_f_20342);
} else {
elem_20311.attachEvent(cljs.core.name.call(null,actual_type_20340),canonical_f_20342);
}

var G__20343 = cljs.core.next.call(null,seq__20298_20333__$1);
var G__20344 = null;
var G__20345 = (0);
var G__20346 = (0);
seq__20298_20320 = G__20343;
chunk__20300_20321 = G__20344;
count__20301_20322 = G__20345;
i__20302_20323 = G__20346;
continue;
}
} else {
}
}
break;
}

var G__20347 = seq__20288_20313;
var G__20348 = chunk__20295_20314;
var G__20349 = count__20296_20315;
var G__20350 = (i__20297_20316 + (1));
seq__20288_20313 = G__20347;
chunk__20295_20314 = G__20348;
count__20296_20315 = G__20349;
i__20297_20316 = G__20350;
continue;
} else {
var temp__4126__auto___20351 = cljs.core.seq.call(null,seq__20288_20313);
if(temp__4126__auto___20351){
var seq__20288_20352__$1 = temp__4126__auto___20351;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20288_20352__$1)){
var c__4417__auto___20353 = cljs.core.chunk_first.call(null,seq__20288_20352__$1);
var G__20354 = cljs.core.chunk_rest.call(null,seq__20288_20352__$1);
var G__20355 = c__4417__auto___20353;
var G__20356 = cljs.core.count.call(null,c__4417__auto___20353);
var G__20357 = (0);
seq__20288_20313 = G__20354;
chunk__20295_20314 = G__20355;
count__20296_20315 = G__20356;
i__20297_20316 = G__20357;
continue;
} else {
var vec__20307_20358 = cljs.core.first.call(null,seq__20288_20352__$1);
var orig_type_20359 = cljs.core.nth.call(null,vec__20307_20358,(0),null);
var f_20360 = cljs.core.nth.call(null,vec__20307_20358,(1),null);
var seq__20289_20361 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_20359,new cljs.core.PersistentArrayMap.fromArray([orig_type_20359,cljs.core.identity], true, false)));
var chunk__20291_20362 = null;
var count__20292_20363 = (0);
var i__20293_20364 = (0);
while(true){
if((i__20293_20364 < count__20292_20363)){
var vec__20308_20365 = cljs.core._nth.call(null,chunk__20291_20362,i__20293_20364);
var actual_type_20366 = cljs.core.nth.call(null,vec__20308_20365,(0),null);
var factory_20367 = cljs.core.nth.call(null,vec__20308_20365,(1),null);
var canonical_f_20368 = (cljs.core.truth_(selector_20312)?cljs.core.partial.call(null,dommy.core.live_listener,elem_20311,selector_20312):cljs.core.identity).call(null,factory_20367.call(null,f_20360));
dommy.core.update_event_listeners_BANG_.call(null,elem_20311,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_20312,actual_type_20366,f_20360], null),canonical_f_20368);

if(cljs.core.truth_(elem_20311.addEventListener)){
elem_20311.addEventListener(cljs.core.name.call(null,actual_type_20366),canonical_f_20368);
} else {
elem_20311.attachEvent(cljs.core.name.call(null,actual_type_20366),canonical_f_20368);
}

var G__20369 = seq__20289_20361;
var G__20370 = chunk__20291_20362;
var G__20371 = count__20292_20363;
var G__20372 = (i__20293_20364 + (1));
seq__20289_20361 = G__20369;
chunk__20291_20362 = G__20370;
count__20292_20363 = G__20371;
i__20293_20364 = G__20372;
continue;
} else {
var temp__4126__auto___20373__$1 = cljs.core.seq.call(null,seq__20289_20361);
if(temp__4126__auto___20373__$1){
var seq__20289_20374__$1 = temp__4126__auto___20373__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20289_20374__$1)){
var c__4417__auto___20375 = cljs.core.chunk_first.call(null,seq__20289_20374__$1);
var G__20376 = cljs.core.chunk_rest.call(null,seq__20289_20374__$1);
var G__20377 = c__4417__auto___20375;
var G__20378 = cljs.core.count.call(null,c__4417__auto___20375);
var G__20379 = (0);
seq__20289_20361 = G__20376;
chunk__20291_20362 = G__20377;
count__20292_20363 = G__20378;
i__20293_20364 = G__20379;
continue;
} else {
var vec__20309_20380 = cljs.core.first.call(null,seq__20289_20374__$1);
var actual_type_20381 = cljs.core.nth.call(null,vec__20309_20380,(0),null);
var factory_20382 = cljs.core.nth.call(null,vec__20309_20380,(1),null);
var canonical_f_20383 = (cljs.core.truth_(selector_20312)?cljs.core.partial.call(null,dommy.core.live_listener,elem_20311,selector_20312):cljs.core.identity).call(null,factory_20382.call(null,f_20360));
dommy.core.update_event_listeners_BANG_.call(null,elem_20311,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_20312,actual_type_20381,f_20360], null),canonical_f_20383);

if(cljs.core.truth_(elem_20311.addEventListener)){
elem_20311.addEventListener(cljs.core.name.call(null,actual_type_20381),canonical_f_20383);
} else {
elem_20311.attachEvent(cljs.core.name.call(null,actual_type_20381),canonical_f_20383);
}

var G__20384 = cljs.core.next.call(null,seq__20289_20374__$1);
var G__20385 = null;
var G__20386 = (0);
var G__20387 = (0);
seq__20289_20361 = G__20384;
chunk__20291_20362 = G__20385;
count__20292_20363 = G__20386;
i__20293_20364 = G__20387;
continue;
}
} else {
}
}
break;
}

var G__20388 = cljs.core.next.call(null,seq__20288_20352__$1);
var G__20389 = null;
var G__20390 = (0);
var G__20391 = (0);
seq__20288_20313 = G__20388;
chunk__20295_20314 = G__20389;
count__20296_20315 = G__20390;
i__20297_20316 = G__20391;
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
listen_BANG_.cljs$lang$applyTo = (function (arglist__20392){
var elem_sel = cljs.core.first(arglist__20392);
var type_fs = cljs.core.rest(arglist__20392);
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

var vec__20416_20439 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_20440 = cljs.core.nth.call(null,vec__20416_20439,(0),null);
var selector_20441 = cljs.core.nth.call(null,vec__20416_20439,(1),null);
var seq__20417_20442 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__20424_20443 = null;
var count__20425_20444 = (0);
var i__20426_20445 = (0);
while(true){
if((i__20426_20445 < count__20425_20444)){
var vec__20433_20446 = cljs.core._nth.call(null,chunk__20424_20443,i__20426_20445);
var orig_type_20447 = cljs.core.nth.call(null,vec__20433_20446,(0),null);
var f_20448 = cljs.core.nth.call(null,vec__20433_20446,(1),null);
var seq__20427_20449 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_20447,new cljs.core.PersistentArrayMap.fromArray([orig_type_20447,cljs.core.identity], true, false)));
var chunk__20429_20450 = null;
var count__20430_20451 = (0);
var i__20431_20452 = (0);
while(true){
if((i__20431_20452 < count__20430_20451)){
var vec__20434_20453 = cljs.core._nth.call(null,chunk__20429_20450,i__20431_20452);
var actual_type_20454 = cljs.core.nth.call(null,vec__20434_20453,(0),null);
var __20455 = cljs.core.nth.call(null,vec__20434_20453,(1),null);
var keys_20456 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_20441,actual_type_20454,f_20448], null);
var canonical_f_20457 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_20440),keys_20456);
dommy.core.update_event_listeners_BANG_.call(null,elem_20440,dommy.utils.dissoc_in,keys_20456);

if(cljs.core.truth_(elem_20440.removeEventListener)){
elem_20440.removeEventListener(cljs.core.name.call(null,actual_type_20454),canonical_f_20457);
} else {
elem_20440.detachEvent(cljs.core.name.call(null,actual_type_20454),canonical_f_20457);
}

var G__20458 = seq__20427_20449;
var G__20459 = chunk__20429_20450;
var G__20460 = count__20430_20451;
var G__20461 = (i__20431_20452 + (1));
seq__20427_20449 = G__20458;
chunk__20429_20450 = G__20459;
count__20430_20451 = G__20460;
i__20431_20452 = G__20461;
continue;
} else {
var temp__4126__auto___20462 = cljs.core.seq.call(null,seq__20427_20449);
if(temp__4126__auto___20462){
var seq__20427_20463__$1 = temp__4126__auto___20462;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20427_20463__$1)){
var c__4417__auto___20464 = cljs.core.chunk_first.call(null,seq__20427_20463__$1);
var G__20465 = cljs.core.chunk_rest.call(null,seq__20427_20463__$1);
var G__20466 = c__4417__auto___20464;
var G__20467 = cljs.core.count.call(null,c__4417__auto___20464);
var G__20468 = (0);
seq__20427_20449 = G__20465;
chunk__20429_20450 = G__20466;
count__20430_20451 = G__20467;
i__20431_20452 = G__20468;
continue;
} else {
var vec__20435_20469 = cljs.core.first.call(null,seq__20427_20463__$1);
var actual_type_20470 = cljs.core.nth.call(null,vec__20435_20469,(0),null);
var __20471 = cljs.core.nth.call(null,vec__20435_20469,(1),null);
var keys_20472 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_20441,actual_type_20470,f_20448], null);
var canonical_f_20473 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_20440),keys_20472);
dommy.core.update_event_listeners_BANG_.call(null,elem_20440,dommy.utils.dissoc_in,keys_20472);

if(cljs.core.truth_(elem_20440.removeEventListener)){
elem_20440.removeEventListener(cljs.core.name.call(null,actual_type_20470),canonical_f_20473);
} else {
elem_20440.detachEvent(cljs.core.name.call(null,actual_type_20470),canonical_f_20473);
}

var G__20474 = cljs.core.next.call(null,seq__20427_20463__$1);
var G__20475 = null;
var G__20476 = (0);
var G__20477 = (0);
seq__20427_20449 = G__20474;
chunk__20429_20450 = G__20475;
count__20430_20451 = G__20476;
i__20431_20452 = G__20477;
continue;
}
} else {
}
}
break;
}

var G__20478 = seq__20417_20442;
var G__20479 = chunk__20424_20443;
var G__20480 = count__20425_20444;
var G__20481 = (i__20426_20445 + (1));
seq__20417_20442 = G__20478;
chunk__20424_20443 = G__20479;
count__20425_20444 = G__20480;
i__20426_20445 = G__20481;
continue;
} else {
var temp__4126__auto___20482 = cljs.core.seq.call(null,seq__20417_20442);
if(temp__4126__auto___20482){
var seq__20417_20483__$1 = temp__4126__auto___20482;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20417_20483__$1)){
var c__4417__auto___20484 = cljs.core.chunk_first.call(null,seq__20417_20483__$1);
var G__20485 = cljs.core.chunk_rest.call(null,seq__20417_20483__$1);
var G__20486 = c__4417__auto___20484;
var G__20487 = cljs.core.count.call(null,c__4417__auto___20484);
var G__20488 = (0);
seq__20417_20442 = G__20485;
chunk__20424_20443 = G__20486;
count__20425_20444 = G__20487;
i__20426_20445 = G__20488;
continue;
} else {
var vec__20436_20489 = cljs.core.first.call(null,seq__20417_20483__$1);
var orig_type_20490 = cljs.core.nth.call(null,vec__20436_20489,(0),null);
var f_20491 = cljs.core.nth.call(null,vec__20436_20489,(1),null);
var seq__20418_20492 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_20490,new cljs.core.PersistentArrayMap.fromArray([orig_type_20490,cljs.core.identity], true, false)));
var chunk__20420_20493 = null;
var count__20421_20494 = (0);
var i__20422_20495 = (0);
while(true){
if((i__20422_20495 < count__20421_20494)){
var vec__20437_20496 = cljs.core._nth.call(null,chunk__20420_20493,i__20422_20495);
var actual_type_20497 = cljs.core.nth.call(null,vec__20437_20496,(0),null);
var __20498 = cljs.core.nth.call(null,vec__20437_20496,(1),null);
var keys_20499 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_20441,actual_type_20497,f_20491], null);
var canonical_f_20500 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_20440),keys_20499);
dommy.core.update_event_listeners_BANG_.call(null,elem_20440,dommy.utils.dissoc_in,keys_20499);

if(cljs.core.truth_(elem_20440.removeEventListener)){
elem_20440.removeEventListener(cljs.core.name.call(null,actual_type_20497),canonical_f_20500);
} else {
elem_20440.detachEvent(cljs.core.name.call(null,actual_type_20497),canonical_f_20500);
}

var G__20501 = seq__20418_20492;
var G__20502 = chunk__20420_20493;
var G__20503 = count__20421_20494;
var G__20504 = (i__20422_20495 + (1));
seq__20418_20492 = G__20501;
chunk__20420_20493 = G__20502;
count__20421_20494 = G__20503;
i__20422_20495 = G__20504;
continue;
} else {
var temp__4126__auto___20505__$1 = cljs.core.seq.call(null,seq__20418_20492);
if(temp__4126__auto___20505__$1){
var seq__20418_20506__$1 = temp__4126__auto___20505__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20418_20506__$1)){
var c__4417__auto___20507 = cljs.core.chunk_first.call(null,seq__20418_20506__$1);
var G__20508 = cljs.core.chunk_rest.call(null,seq__20418_20506__$1);
var G__20509 = c__4417__auto___20507;
var G__20510 = cljs.core.count.call(null,c__4417__auto___20507);
var G__20511 = (0);
seq__20418_20492 = G__20508;
chunk__20420_20493 = G__20509;
count__20421_20494 = G__20510;
i__20422_20495 = G__20511;
continue;
} else {
var vec__20438_20512 = cljs.core.first.call(null,seq__20418_20506__$1);
var actual_type_20513 = cljs.core.nth.call(null,vec__20438_20512,(0),null);
var __20514 = cljs.core.nth.call(null,vec__20438_20512,(1),null);
var keys_20515 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_20441,actual_type_20513,f_20491], null);
var canonical_f_20516 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_20440),keys_20515);
dommy.core.update_event_listeners_BANG_.call(null,elem_20440,dommy.utils.dissoc_in,keys_20515);

if(cljs.core.truth_(elem_20440.removeEventListener)){
elem_20440.removeEventListener(cljs.core.name.call(null,actual_type_20513),canonical_f_20516);
} else {
elem_20440.detachEvent(cljs.core.name.call(null,actual_type_20513),canonical_f_20516);
}

var G__20517 = cljs.core.next.call(null,seq__20418_20506__$1);
var G__20518 = null;
var G__20519 = (0);
var G__20520 = (0);
seq__20418_20492 = G__20517;
chunk__20420_20493 = G__20518;
count__20421_20494 = G__20519;
i__20422_20495 = G__20520;
continue;
}
} else {
}
}
break;
}

var G__20521 = cljs.core.next.call(null,seq__20417_20483__$1);
var G__20522 = null;
var G__20523 = (0);
var G__20524 = (0);
seq__20417_20442 = G__20521;
chunk__20424_20443 = G__20522;
count__20425_20444 = G__20523;
i__20426_20445 = G__20524;
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
unlisten_BANG_.cljs$lang$applyTo = (function (arglist__20525){
var elem_sel = cljs.core.first(arglist__20525);
var type_fs = cljs.core.rest(arglist__20525);
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

var vec__20533_20540 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_20541 = cljs.core.nth.call(null,vec__20533_20540,(0),null);
var selector_20542 = cljs.core.nth.call(null,vec__20533_20540,(1),null);
var seq__20534_20543 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__20535_20544 = null;
var count__20536_20545 = (0);
var i__20537_20546 = (0);
while(true){
if((i__20537_20546 < count__20536_20545)){
var vec__20538_20547 = cljs.core._nth.call(null,chunk__20535_20544,i__20537_20546);
var type_20548 = cljs.core.nth.call(null,vec__20538_20547,(0),null);
var f_20549 = cljs.core.nth.call(null,vec__20538_20547,(1),null);
dommy.core.listen_BANG_.call(null,elem_sel,type_20548,((function (seq__20534_20543,chunk__20535_20544,count__20536_20545,i__20537_20546,vec__20538_20547,type_20548,f_20549,vec__20533_20540,elem_20541,selector_20542){
return (function this_fn(e){
dommy.core.unlisten_BANG_.call(null,elem_sel,type_20548,this_fn);

return f_20549.call(null,e);
});})(seq__20534_20543,chunk__20535_20544,count__20536_20545,i__20537_20546,vec__20538_20547,type_20548,f_20549,vec__20533_20540,elem_20541,selector_20542))
);

var G__20550 = seq__20534_20543;
var G__20551 = chunk__20535_20544;
var G__20552 = count__20536_20545;
var G__20553 = (i__20537_20546 + (1));
seq__20534_20543 = G__20550;
chunk__20535_20544 = G__20551;
count__20536_20545 = G__20552;
i__20537_20546 = G__20553;
continue;
} else {
var temp__4126__auto___20554 = cljs.core.seq.call(null,seq__20534_20543);
if(temp__4126__auto___20554){
var seq__20534_20555__$1 = temp__4126__auto___20554;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20534_20555__$1)){
var c__4417__auto___20556 = cljs.core.chunk_first.call(null,seq__20534_20555__$1);
var G__20557 = cljs.core.chunk_rest.call(null,seq__20534_20555__$1);
var G__20558 = c__4417__auto___20556;
var G__20559 = cljs.core.count.call(null,c__4417__auto___20556);
var G__20560 = (0);
seq__20534_20543 = G__20557;
chunk__20535_20544 = G__20558;
count__20536_20545 = G__20559;
i__20537_20546 = G__20560;
continue;
} else {
var vec__20539_20561 = cljs.core.first.call(null,seq__20534_20555__$1);
var type_20562 = cljs.core.nth.call(null,vec__20539_20561,(0),null);
var f_20563 = cljs.core.nth.call(null,vec__20539_20561,(1),null);
dommy.core.listen_BANG_.call(null,elem_sel,type_20562,((function (seq__20534_20543,chunk__20535_20544,count__20536_20545,i__20537_20546,vec__20539_20561,type_20562,f_20563,seq__20534_20555__$1,temp__4126__auto___20554,vec__20533_20540,elem_20541,selector_20542){
return (function this_fn(e){
dommy.core.unlisten_BANG_.call(null,elem_sel,type_20562,this_fn);

return f_20563.call(null,e);
});})(seq__20534_20543,chunk__20535_20544,count__20536_20545,i__20537_20546,vec__20539_20561,type_20562,f_20563,seq__20534_20555__$1,temp__4126__auto___20554,vec__20533_20540,elem_20541,selector_20542))
);

var G__20564 = cljs.core.next.call(null,seq__20534_20555__$1);
var G__20565 = null;
var G__20566 = (0);
var G__20567 = (0);
seq__20534_20543 = G__20564;
chunk__20535_20544 = G__20565;
count__20536_20545 = G__20566;
i__20537_20546 = G__20567;
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
listen_once_BANG_.cljs$lang$applyTo = (function (arglist__20568){
var elem_sel = cljs.core.first(arglist__20568);
var type_fs = cljs.core.rest(arglist__20568);
return listen_once_BANG___delegate(elem_sel,type_fs);
});
listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic = listen_once_BANG___delegate;
return listen_once_BANG_;
})()
;

//# sourceMappingURL=core.js.map