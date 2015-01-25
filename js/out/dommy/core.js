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
return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,base,selector),cljs.core.take_while.call(null,(function (p1__18439_SHARP_){
return !((p1__18439_SHARP_ === base));
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
var seq__18446_18452 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));
var chunk__18447_18453 = null;
var count__18448_18454 = (0);
var i__18449_18455 = (0);
while(true){
if((i__18449_18455 < count__18448_18454)){
var vec__18450_18456 = cljs.core._nth.call(null,chunk__18447_18453,i__18449_18455);
var k_18457 = cljs.core.nth.call(null,vec__18450_18456,(0),null);
var v_18458 = cljs.core.nth.call(null,vec__18450_18456,(1),null);
style.setProperty(dommy.utils.as_str.call(null,k_18457),v_18458);

var G__18459 = seq__18446_18452;
var G__18460 = chunk__18447_18453;
var G__18461 = count__18448_18454;
var G__18462 = (i__18449_18455 + (1));
seq__18446_18452 = G__18459;
chunk__18447_18453 = G__18460;
count__18448_18454 = G__18461;
i__18449_18455 = G__18462;
continue;
} else {
var temp__4126__auto___18463 = cljs.core.seq.call(null,seq__18446_18452);
if(temp__4126__auto___18463){
var seq__18446_18464__$1 = temp__4126__auto___18463;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18446_18464__$1)){
var c__4417__auto___18465 = cljs.core.chunk_first.call(null,seq__18446_18464__$1);
var G__18466 = cljs.core.chunk_rest.call(null,seq__18446_18464__$1);
var G__18467 = c__4417__auto___18465;
var G__18468 = cljs.core.count.call(null,c__4417__auto___18465);
var G__18469 = (0);
seq__18446_18452 = G__18466;
chunk__18447_18453 = G__18467;
count__18448_18454 = G__18468;
i__18449_18455 = G__18469;
continue;
} else {
var vec__18451_18470 = cljs.core.first.call(null,seq__18446_18464__$1);
var k_18471 = cljs.core.nth.call(null,vec__18451_18470,(0),null);
var v_18472 = cljs.core.nth.call(null,vec__18451_18470,(1),null);
style.setProperty(dommy.utils.as_str.call(null,k_18471),v_18472);

var G__18473 = cljs.core.next.call(null,seq__18446_18464__$1);
var G__18474 = null;
var G__18475 = (0);
var G__18476 = (0);
seq__18446_18452 = G__18473;
chunk__18447_18453 = G__18474;
count__18448_18454 = G__18475;
i__18449_18455 = G__18476;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__18477){
var elem = cljs.core.first(arglist__18477);
var kvs = cljs.core.rest(arglist__18477);
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

var seq__18484_18490 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));
var chunk__18485_18491 = null;
var count__18486_18492 = (0);
var i__18487_18493 = (0);
while(true){
if((i__18487_18493 < count__18486_18492)){
var vec__18488_18494 = cljs.core._nth.call(null,chunk__18485_18491,i__18487_18493);
var k_18495 = cljs.core.nth.call(null,vec__18488_18494,(0),null);
var v_18496 = cljs.core.nth.call(null,vec__18488_18494,(1),null);
dommy.core.set_style_BANG_.call(null,elem,k_18495,[cljs.core.str(v_18496),cljs.core.str("px")].join(''));

var G__18497 = seq__18484_18490;
var G__18498 = chunk__18485_18491;
var G__18499 = count__18486_18492;
var G__18500 = (i__18487_18493 + (1));
seq__18484_18490 = G__18497;
chunk__18485_18491 = G__18498;
count__18486_18492 = G__18499;
i__18487_18493 = G__18500;
continue;
} else {
var temp__4126__auto___18501 = cljs.core.seq.call(null,seq__18484_18490);
if(temp__4126__auto___18501){
var seq__18484_18502__$1 = temp__4126__auto___18501;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18484_18502__$1)){
var c__4417__auto___18503 = cljs.core.chunk_first.call(null,seq__18484_18502__$1);
var G__18504 = cljs.core.chunk_rest.call(null,seq__18484_18502__$1);
var G__18505 = c__4417__auto___18503;
var G__18506 = cljs.core.count.call(null,c__4417__auto___18503);
var G__18507 = (0);
seq__18484_18490 = G__18504;
chunk__18485_18491 = G__18505;
count__18486_18492 = G__18506;
i__18487_18493 = G__18507;
continue;
} else {
var vec__18489_18508 = cljs.core.first.call(null,seq__18484_18502__$1);
var k_18509 = cljs.core.nth.call(null,vec__18489_18508,(0),null);
var v_18510 = cljs.core.nth.call(null,vec__18489_18508,(1),null);
dommy.core.set_style_BANG_.call(null,elem,k_18509,[cljs.core.str(v_18510),cljs.core.str("px")].join(''));

var G__18511 = cljs.core.next.call(null,seq__18484_18502__$1);
var G__18512 = null;
var G__18513 = (0);
var G__18514 = (0);
seq__18484_18490 = G__18511;
chunk__18485_18491 = G__18512;
count__18486_18492 = G__18513;
i__18487_18493 = G__18514;
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
set_px_BANG_.cljs$lang$applyTo = (function (arglist__18515){
var elem = cljs.core.first(arglist__18515);
var kvs = cljs.core.rest(arglist__18515);
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
var G__18524 = elem;
(G__18524[k__$1] = v);

return G__18524;
} else {
var G__18525 = elem;
G__18525.setAttribute(k__$1,v);

return G__18525;
}
} else {
return null;
}
});
var set_attr_BANG___4 = (function() { 
var G__18532__delegate = function (elem,k,v,kvs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null)))))].join('')));
}

var seq__18526_18533 = cljs.core.seq.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.call(null,(2),kvs)));
var chunk__18527_18534 = null;
var count__18528_18535 = (0);
var i__18529_18536 = (0);
while(true){
if((i__18529_18536 < count__18528_18535)){
var vec__18530_18537 = cljs.core._nth.call(null,chunk__18527_18534,i__18529_18536);
var k_18538__$1 = cljs.core.nth.call(null,vec__18530_18537,(0),null);
var v_18539__$1 = cljs.core.nth.call(null,vec__18530_18537,(1),null);
set_attr_BANG_.call(null,elem,k_18538__$1,v_18539__$1);

var G__18540 = seq__18526_18533;
var G__18541 = chunk__18527_18534;
var G__18542 = count__18528_18535;
var G__18543 = (i__18529_18536 + (1));
seq__18526_18533 = G__18540;
chunk__18527_18534 = G__18541;
count__18528_18535 = G__18542;
i__18529_18536 = G__18543;
continue;
} else {
var temp__4126__auto___18544 = cljs.core.seq.call(null,seq__18526_18533);
if(temp__4126__auto___18544){
var seq__18526_18545__$1 = temp__4126__auto___18544;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18526_18545__$1)){
var c__4417__auto___18546 = cljs.core.chunk_first.call(null,seq__18526_18545__$1);
var G__18547 = cljs.core.chunk_rest.call(null,seq__18526_18545__$1);
var G__18548 = c__4417__auto___18546;
var G__18549 = cljs.core.count.call(null,c__4417__auto___18546);
var G__18550 = (0);
seq__18526_18533 = G__18547;
chunk__18527_18534 = G__18548;
count__18528_18535 = G__18549;
i__18529_18536 = G__18550;
continue;
} else {
var vec__18531_18551 = cljs.core.first.call(null,seq__18526_18545__$1);
var k_18552__$1 = cljs.core.nth.call(null,vec__18531_18551,(0),null);
var v_18553__$1 = cljs.core.nth.call(null,vec__18531_18551,(1),null);
set_attr_BANG_.call(null,elem,k_18552__$1,v_18553__$1);

var G__18554 = cljs.core.next.call(null,seq__18526_18545__$1);
var G__18555 = null;
var G__18556 = (0);
var G__18557 = (0);
seq__18526_18533 = G__18554;
chunk__18527_18534 = G__18555;
count__18528_18535 = G__18556;
i__18529_18536 = G__18557;
continue;
}
} else {
}
}
break;
}

return elem;
};
var G__18532 = function (elem,k,v,var_args){
var kvs = null;
if (arguments.length > 3) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__18532__delegate.call(this,elem,k,v,kvs);};
G__18532.cljs$lang$maxFixedArity = 3;
G__18532.cljs$lang$applyTo = (function (arglist__18558){
var elem = cljs.core.first(arglist__18558);
arglist__18558 = cljs.core.next(arglist__18558);
var k = cljs.core.first(arglist__18558);
arglist__18558 = cljs.core.next(arglist__18558);
var v = cljs.core.first(arglist__18558);
var kvs = cljs.core.rest(arglist__18558);
return G__18532__delegate(elem,k,v,kvs);
});
G__18532.cljs$core$IFn$_invoke$arity$variadic = G__18532__delegate;
return G__18532;
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
var k_18567__$1 = dommy.utils.as_str.call(null,k);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["class",null,"classes",null], null), null).call(null,k_18567__$1))){
dommy.core.set_class_BANG_.call(null,elem,"");
} else {
elem.removeAttribute(k_18567__$1);
}

return elem;
});
var remove_attr_BANG___3 = (function() { 
var G__18568__delegate = function (elem,k,ks){
var seq__18563_18569 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));
var chunk__18564_18570 = null;
var count__18565_18571 = (0);
var i__18566_18572 = (0);
while(true){
if((i__18566_18572 < count__18565_18571)){
var k_18573__$1 = cljs.core._nth.call(null,chunk__18564_18570,i__18566_18572);
remove_attr_BANG_.call(null,elem,k_18573__$1);

var G__18574 = seq__18563_18569;
var G__18575 = chunk__18564_18570;
var G__18576 = count__18565_18571;
var G__18577 = (i__18566_18572 + (1));
seq__18563_18569 = G__18574;
chunk__18564_18570 = G__18575;
count__18565_18571 = G__18576;
i__18566_18572 = G__18577;
continue;
} else {
var temp__4126__auto___18578 = cljs.core.seq.call(null,seq__18563_18569);
if(temp__4126__auto___18578){
var seq__18563_18579__$1 = temp__4126__auto___18578;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18563_18579__$1)){
var c__4417__auto___18580 = cljs.core.chunk_first.call(null,seq__18563_18579__$1);
var G__18581 = cljs.core.chunk_rest.call(null,seq__18563_18579__$1);
var G__18582 = c__4417__auto___18580;
var G__18583 = cljs.core.count.call(null,c__4417__auto___18580);
var G__18584 = (0);
seq__18563_18569 = G__18581;
chunk__18564_18570 = G__18582;
count__18565_18571 = G__18583;
i__18566_18572 = G__18584;
continue;
} else {
var k_18585__$1 = cljs.core.first.call(null,seq__18563_18579__$1);
remove_attr_BANG_.call(null,elem,k_18585__$1);

var G__18586 = cljs.core.next.call(null,seq__18563_18579__$1);
var G__18587 = null;
var G__18588 = (0);
var G__18589 = (0);
seq__18563_18569 = G__18586;
chunk__18564_18570 = G__18587;
count__18565_18571 = G__18588;
i__18566_18572 = G__18589;
continue;
}
} else {
}
}
break;
}

return elem;
};
var G__18568 = function (elem,k,var_args){
var ks = null;
if (arguments.length > 2) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__18568__delegate.call(this,elem,k,ks);};
G__18568.cljs$lang$maxFixedArity = 2;
G__18568.cljs$lang$applyTo = (function (arglist__18590){
var elem = cljs.core.first(arglist__18590);
arglist__18590 = cljs.core.next(arglist__18590);
var k = cljs.core.first(arglist__18590);
var ks = cljs.core.rest(arglist__18590);
return G__18568__delegate(elem,k,ks);
});
G__18568.cljs$core$IFn$_invoke$arity$variadic = G__18568__delegate;
return G__18568;
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
var temp__4124__auto___18615 = elem.classList;
if(cljs.core.truth_(temp__4124__auto___18615)){
var class_list_18616 = temp__4124__auto___18615;
var seq__18603_18617 = cljs.core.seq.call(null,classes__$1);
var chunk__18604_18618 = null;
var count__18605_18619 = (0);
var i__18606_18620 = (0);
while(true){
if((i__18606_18620 < count__18605_18619)){
var c_18621 = cljs.core._nth.call(null,chunk__18604_18618,i__18606_18620);
class_list_18616.add(c_18621);

var G__18622 = seq__18603_18617;
var G__18623 = chunk__18604_18618;
var G__18624 = count__18605_18619;
var G__18625 = (i__18606_18620 + (1));
seq__18603_18617 = G__18622;
chunk__18604_18618 = G__18623;
count__18605_18619 = G__18624;
i__18606_18620 = G__18625;
continue;
} else {
var temp__4126__auto___18626 = cljs.core.seq.call(null,seq__18603_18617);
if(temp__4126__auto___18626){
var seq__18603_18627__$1 = temp__4126__auto___18626;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18603_18627__$1)){
var c__4417__auto___18628 = cljs.core.chunk_first.call(null,seq__18603_18627__$1);
var G__18629 = cljs.core.chunk_rest.call(null,seq__18603_18627__$1);
var G__18630 = c__4417__auto___18628;
var G__18631 = cljs.core.count.call(null,c__4417__auto___18628);
var G__18632 = (0);
seq__18603_18617 = G__18629;
chunk__18604_18618 = G__18630;
count__18605_18619 = G__18631;
i__18606_18620 = G__18632;
continue;
} else {
var c_18633 = cljs.core.first.call(null,seq__18603_18627__$1);
class_list_18616.add(c_18633);

var G__18634 = cljs.core.next.call(null,seq__18603_18627__$1);
var G__18635 = null;
var G__18636 = (0);
var G__18637 = (0);
seq__18603_18617 = G__18634;
chunk__18604_18618 = G__18635;
count__18605_18619 = G__18636;
i__18606_18620 = G__18637;
continue;
}
} else {
}
}
break;
}
} else {
var seq__18607_18638 = cljs.core.seq.call(null,classes__$1);
var chunk__18608_18639 = null;
var count__18609_18640 = (0);
var i__18610_18641 = (0);
while(true){
if((i__18610_18641 < count__18609_18640)){
var c_18642 = cljs.core._nth.call(null,chunk__18608_18639,i__18610_18641);
var class_name_18643 = dommy.core.class$.call(null,elem);
if(cljs.core.truth_(dommy.utils.class_index.call(null,class_name_18643,c_18642))){
} else {
dommy.core.set_class_BANG_.call(null,elem,(((class_name_18643 === ""))?c_18642:[cljs.core.str(class_name_18643),cljs.core.str(" "),cljs.core.str(c_18642)].join('')));
}

var G__18644 = seq__18607_18638;
var G__18645 = chunk__18608_18639;
var G__18646 = count__18609_18640;
var G__18647 = (i__18610_18641 + (1));
seq__18607_18638 = G__18644;
chunk__18608_18639 = G__18645;
count__18609_18640 = G__18646;
i__18610_18641 = G__18647;
continue;
} else {
var temp__4126__auto___18648 = cljs.core.seq.call(null,seq__18607_18638);
if(temp__4126__auto___18648){
var seq__18607_18649__$1 = temp__4126__auto___18648;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18607_18649__$1)){
var c__4417__auto___18650 = cljs.core.chunk_first.call(null,seq__18607_18649__$1);
var G__18651 = cljs.core.chunk_rest.call(null,seq__18607_18649__$1);
var G__18652 = c__4417__auto___18650;
var G__18653 = cljs.core.count.call(null,c__4417__auto___18650);
var G__18654 = (0);
seq__18607_18638 = G__18651;
chunk__18608_18639 = G__18652;
count__18609_18640 = G__18653;
i__18610_18641 = G__18654;
continue;
} else {
var c_18655 = cljs.core.first.call(null,seq__18607_18649__$1);
var class_name_18656 = dommy.core.class$.call(null,elem);
if(cljs.core.truth_(dommy.utils.class_index.call(null,class_name_18656,c_18655))){
} else {
dommy.core.set_class_BANG_.call(null,elem,(((class_name_18656 === ""))?c_18655:[cljs.core.str(class_name_18656),cljs.core.str(" "),cljs.core.str(c_18655)].join('')));
}

var G__18657 = cljs.core.next.call(null,seq__18607_18649__$1);
var G__18658 = null;
var G__18659 = (0);
var G__18660 = (0);
seq__18607_18638 = G__18657;
chunk__18608_18639 = G__18658;
count__18609_18640 = G__18659;
i__18610_18641 = G__18660;
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
var G__18661__delegate = function (elem,classes,more_classes){
var seq__18611_18662 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));
var chunk__18612_18663 = null;
var count__18613_18664 = (0);
var i__18614_18665 = (0);
while(true){
if((i__18614_18665 < count__18613_18664)){
var c_18666 = cljs.core._nth.call(null,chunk__18612_18663,i__18614_18665);
add_class_BANG_.call(null,elem,c_18666);

var G__18667 = seq__18611_18662;
var G__18668 = chunk__18612_18663;
var G__18669 = count__18613_18664;
var G__18670 = (i__18614_18665 + (1));
seq__18611_18662 = G__18667;
chunk__18612_18663 = G__18668;
count__18613_18664 = G__18669;
i__18614_18665 = G__18670;
continue;
} else {
var temp__4126__auto___18671 = cljs.core.seq.call(null,seq__18611_18662);
if(temp__4126__auto___18671){
var seq__18611_18672__$1 = temp__4126__auto___18671;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18611_18672__$1)){
var c__4417__auto___18673 = cljs.core.chunk_first.call(null,seq__18611_18672__$1);
var G__18674 = cljs.core.chunk_rest.call(null,seq__18611_18672__$1);
var G__18675 = c__4417__auto___18673;
var G__18676 = cljs.core.count.call(null,c__4417__auto___18673);
var G__18677 = (0);
seq__18611_18662 = G__18674;
chunk__18612_18663 = G__18675;
count__18613_18664 = G__18676;
i__18614_18665 = G__18677;
continue;
} else {
var c_18678 = cljs.core.first.call(null,seq__18611_18672__$1);
add_class_BANG_.call(null,elem,c_18678);

var G__18679 = cljs.core.next.call(null,seq__18611_18672__$1);
var G__18680 = null;
var G__18681 = (0);
var G__18682 = (0);
seq__18611_18662 = G__18679;
chunk__18612_18663 = G__18680;
count__18613_18664 = G__18681;
i__18614_18665 = G__18682;
continue;
}
} else {
}
}
break;
}

return elem;
};
var G__18661 = function (elem,classes,var_args){
var more_classes = null;
if (arguments.length > 2) {
  more_classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__18661__delegate.call(this,elem,classes,more_classes);};
G__18661.cljs$lang$maxFixedArity = 2;
G__18661.cljs$lang$applyTo = (function (arglist__18683){
var elem = cljs.core.first(arglist__18683);
arglist__18683 = cljs.core.next(arglist__18683);
var classes = cljs.core.first(arglist__18683);
var more_classes = cljs.core.rest(arglist__18683);
return G__18661__delegate(elem,classes,more_classes);
});
G__18661.cljs$core$IFn$_invoke$arity$variadic = G__18661__delegate;
return G__18661;
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
var temp__4124__auto___18692 = elem.classList;
if(cljs.core.truth_(temp__4124__auto___18692)){
var class_list_18693 = temp__4124__auto___18692;
class_list_18693.remove(c__$1);
} else {
var class_name_18694 = dommy.core.class$.call(null,elem);
var new_class_name_18695 = dommy.utils.remove_class_str.call(null,class_name_18694,c__$1);
if((class_name_18694 === new_class_name_18695)){
} else {
dommy.core.set_class_BANG_.call(null,elem,new_class_name_18695);
}
}

return elem;
});
var remove_class_BANG___3 = (function() { 
var G__18696__delegate = function (elem,class$,classes){
var seq__18688 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));
var chunk__18689 = null;
var count__18690 = (0);
var i__18691 = (0);
while(true){
if((i__18691 < count__18690)){
var c = cljs.core._nth.call(null,chunk__18689,i__18691);
remove_class_BANG_.call(null,elem,c);

var G__18697 = seq__18688;
var G__18698 = chunk__18689;
var G__18699 = count__18690;
var G__18700 = (i__18691 + (1));
seq__18688 = G__18697;
chunk__18689 = G__18698;
count__18690 = G__18699;
i__18691 = G__18700;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__18688);
if(temp__4126__auto__){
var seq__18688__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18688__$1)){
var c__4417__auto__ = cljs.core.chunk_first.call(null,seq__18688__$1);
var G__18701 = cljs.core.chunk_rest.call(null,seq__18688__$1);
var G__18702 = c__4417__auto__;
var G__18703 = cljs.core.count.call(null,c__4417__auto__);
var G__18704 = (0);
seq__18688 = G__18701;
chunk__18689 = G__18702;
count__18690 = G__18703;
i__18691 = G__18704;
continue;
} else {
var c = cljs.core.first.call(null,seq__18688__$1);
remove_class_BANG_.call(null,elem,c);

var G__18705 = cljs.core.next.call(null,seq__18688__$1);
var G__18706 = null;
var G__18707 = (0);
var G__18708 = (0);
seq__18688 = G__18705;
chunk__18689 = G__18706;
count__18690 = G__18707;
i__18691 = G__18708;
continue;
}
} else {
return null;
}
}
break;
}
};
var G__18696 = function (elem,class$,var_args){
var classes = null;
if (arguments.length > 2) {
  classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__18696__delegate.call(this,elem,class$,classes);};
G__18696.cljs$lang$maxFixedArity = 2;
G__18696.cljs$lang$applyTo = (function (arglist__18709){
var elem = cljs.core.first(arglist__18709);
arglist__18709 = cljs.core.next(arglist__18709);
var class$ = cljs.core.first(arglist__18709);
var classes = cljs.core.rest(arglist__18709);
return G__18696__delegate(elem,class$,classes);
});
G__18696.cljs$core$IFn$_invoke$arity$variadic = G__18696__delegate;
return G__18696;
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
var temp__4124__auto___18710 = elem.classList;
if(cljs.core.truth_(temp__4124__auto___18710)){
var class_list_18711 = temp__4124__auto___18710;
class_list_18711.toggle(c__$1);
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
var G__18717 = parent;
G__18717.appendChild(child);

return G__18717;
});
var append_BANG___3 = (function() { 
var G__18722__delegate = function (parent,child,more_children){
var seq__18718_18723 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));
var chunk__18719_18724 = null;
var count__18720_18725 = (0);
var i__18721_18726 = (0);
while(true){
if((i__18721_18726 < count__18720_18725)){
var c_18727 = cljs.core._nth.call(null,chunk__18719_18724,i__18721_18726);
append_BANG_.call(null,parent,c_18727);

var G__18728 = seq__18718_18723;
var G__18729 = chunk__18719_18724;
var G__18730 = count__18720_18725;
var G__18731 = (i__18721_18726 + (1));
seq__18718_18723 = G__18728;
chunk__18719_18724 = G__18729;
count__18720_18725 = G__18730;
i__18721_18726 = G__18731;
continue;
} else {
var temp__4126__auto___18732 = cljs.core.seq.call(null,seq__18718_18723);
if(temp__4126__auto___18732){
var seq__18718_18733__$1 = temp__4126__auto___18732;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18718_18733__$1)){
var c__4417__auto___18734 = cljs.core.chunk_first.call(null,seq__18718_18733__$1);
var G__18735 = cljs.core.chunk_rest.call(null,seq__18718_18733__$1);
var G__18736 = c__4417__auto___18734;
var G__18737 = cljs.core.count.call(null,c__4417__auto___18734);
var G__18738 = (0);
seq__18718_18723 = G__18735;
chunk__18719_18724 = G__18736;
count__18720_18725 = G__18737;
i__18721_18726 = G__18738;
continue;
} else {
var c_18739 = cljs.core.first.call(null,seq__18718_18733__$1);
append_BANG_.call(null,parent,c_18739);

var G__18740 = cljs.core.next.call(null,seq__18718_18733__$1);
var G__18741 = null;
var G__18742 = (0);
var G__18743 = (0);
seq__18718_18723 = G__18740;
chunk__18719_18724 = G__18741;
count__18720_18725 = G__18742;
i__18721_18726 = G__18743;
continue;
}
} else {
}
}
break;
}

return parent;
};
var G__18722 = function (parent,child,var_args){
var more_children = null;
if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__18722__delegate.call(this,parent,child,more_children);};
G__18722.cljs$lang$maxFixedArity = 2;
G__18722.cljs$lang$applyTo = (function (arglist__18744){
var parent = cljs.core.first(arglist__18744);
arglist__18744 = cljs.core.next(arglist__18744);
var child = cljs.core.first(arglist__18744);
var more_children = cljs.core.rest(arglist__18744);
return G__18722__delegate(parent,child,more_children);
});
G__18722.cljs$core$IFn$_invoke$arity$variadic = G__18722__delegate;
return G__18722;
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
var G__18750 = parent;
G__18750.insertBefore(child,parent.firstChild);

return G__18750;
});
var prepend_BANG___3 = (function() { 
var G__18755__delegate = function (parent,child,more_children){
var seq__18751_18756 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));
var chunk__18752_18757 = null;
var count__18753_18758 = (0);
var i__18754_18759 = (0);
while(true){
if((i__18754_18759 < count__18753_18758)){
var c_18760 = cljs.core._nth.call(null,chunk__18752_18757,i__18754_18759);
prepend_BANG_.call(null,parent,c_18760);

var G__18761 = seq__18751_18756;
var G__18762 = chunk__18752_18757;
var G__18763 = count__18753_18758;
var G__18764 = (i__18754_18759 + (1));
seq__18751_18756 = G__18761;
chunk__18752_18757 = G__18762;
count__18753_18758 = G__18763;
i__18754_18759 = G__18764;
continue;
} else {
var temp__4126__auto___18765 = cljs.core.seq.call(null,seq__18751_18756);
if(temp__4126__auto___18765){
var seq__18751_18766__$1 = temp__4126__auto___18765;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18751_18766__$1)){
var c__4417__auto___18767 = cljs.core.chunk_first.call(null,seq__18751_18766__$1);
var G__18768 = cljs.core.chunk_rest.call(null,seq__18751_18766__$1);
var G__18769 = c__4417__auto___18767;
var G__18770 = cljs.core.count.call(null,c__4417__auto___18767);
var G__18771 = (0);
seq__18751_18756 = G__18768;
chunk__18752_18757 = G__18769;
count__18753_18758 = G__18770;
i__18754_18759 = G__18771;
continue;
} else {
var c_18772 = cljs.core.first.call(null,seq__18751_18766__$1);
prepend_BANG_.call(null,parent,c_18772);

var G__18773 = cljs.core.next.call(null,seq__18751_18766__$1);
var G__18774 = null;
var G__18775 = (0);
var G__18776 = (0);
seq__18751_18756 = G__18773;
chunk__18752_18757 = G__18774;
count__18753_18758 = G__18775;
i__18754_18759 = G__18776;
continue;
}
} else {
}
}
break;
}

return parent;
};
var G__18755 = function (parent,child,var_args){
var more_children = null;
if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__18755__delegate.call(this,parent,child,more_children);};
G__18755.cljs$lang$maxFixedArity = 2;
G__18755.cljs$lang$applyTo = (function (arglist__18777){
var parent = cljs.core.first(arglist__18777);
arglist__18777 = cljs.core.next(arglist__18777);
var child = cljs.core.first(arglist__18777);
var more_children = cljs.core.rest(arglist__18777);
return G__18755__delegate(parent,child,more_children);
});
G__18755.cljs$core$IFn$_invoke$arity$variadic = G__18755__delegate;
return G__18755;
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
var temp__4124__auto___18778 = other.nextSibling;
if(cljs.core.truth_(temp__4124__auto___18778)){
var next_18779 = temp__4124__auto___18778;
dommy.core.insert_before_BANG_.call(null,elem,next_18779);
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
var G__18781 = p;
G__18781.removeChild(elem);

return G__18781;
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
dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__18782){
var vec__18783 = p__18782;
var special_mouse_event = cljs.core.nth.call(null,vec__18783,(0),null);
var real_mouse_event = cljs.core.nth.call(null,vec__18783,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,new cljs.core.PersistentArrayMap.fromArray([real_mouse_event,((function (vec__18783,special_mouse_event,real_mouse_event){
return (function (f){
return ((function (vec__18783,special_mouse_event,real_mouse_event){
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
;})(vec__18783,special_mouse_event,real_mouse_event))
});})(vec__18783,special_mouse_event,real_mouse_event))
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
update_event_listeners_BANG_.cljs$lang$applyTo = (function (arglist__18784){
var elem = cljs.core.first(arglist__18784);
arglist__18784 = cljs.core.next(arglist__18784);
var f = cljs.core.first(arglist__18784);
var args = cljs.core.rest(arglist__18784);
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

var vec__18808_18831 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_18832 = cljs.core.nth.call(null,vec__18808_18831,(0),null);
var selector_18833 = cljs.core.nth.call(null,vec__18808_18831,(1),null);
var seq__18809_18834 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__18816_18835 = null;
var count__18817_18836 = (0);
var i__18818_18837 = (0);
while(true){
if((i__18818_18837 < count__18817_18836)){
var vec__18825_18838 = cljs.core._nth.call(null,chunk__18816_18835,i__18818_18837);
var orig_type_18839 = cljs.core.nth.call(null,vec__18825_18838,(0),null);
var f_18840 = cljs.core.nth.call(null,vec__18825_18838,(1),null);
var seq__18819_18841 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_18839,new cljs.core.PersistentArrayMap.fromArray([orig_type_18839,cljs.core.identity], true, false)));
var chunk__18821_18842 = null;
var count__18822_18843 = (0);
var i__18823_18844 = (0);
while(true){
if((i__18823_18844 < count__18822_18843)){
var vec__18826_18845 = cljs.core._nth.call(null,chunk__18821_18842,i__18823_18844);
var actual_type_18846 = cljs.core.nth.call(null,vec__18826_18845,(0),null);
var factory_18847 = cljs.core.nth.call(null,vec__18826_18845,(1),null);
var canonical_f_18848 = (cljs.core.truth_(selector_18833)?cljs.core.partial.call(null,dommy.core.live_listener,elem_18832,selector_18833):cljs.core.identity).call(null,factory_18847.call(null,f_18840));
dommy.core.update_event_listeners_BANG_.call(null,elem_18832,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_18833,actual_type_18846,f_18840], null),canonical_f_18848);

if(cljs.core.truth_(elem_18832.addEventListener)){
elem_18832.addEventListener(cljs.core.name.call(null,actual_type_18846),canonical_f_18848);
} else {
elem_18832.attachEvent(cljs.core.name.call(null,actual_type_18846),canonical_f_18848);
}

var G__18849 = seq__18819_18841;
var G__18850 = chunk__18821_18842;
var G__18851 = count__18822_18843;
var G__18852 = (i__18823_18844 + (1));
seq__18819_18841 = G__18849;
chunk__18821_18842 = G__18850;
count__18822_18843 = G__18851;
i__18823_18844 = G__18852;
continue;
} else {
var temp__4126__auto___18853 = cljs.core.seq.call(null,seq__18819_18841);
if(temp__4126__auto___18853){
var seq__18819_18854__$1 = temp__4126__auto___18853;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18819_18854__$1)){
var c__4417__auto___18855 = cljs.core.chunk_first.call(null,seq__18819_18854__$1);
var G__18856 = cljs.core.chunk_rest.call(null,seq__18819_18854__$1);
var G__18857 = c__4417__auto___18855;
var G__18858 = cljs.core.count.call(null,c__4417__auto___18855);
var G__18859 = (0);
seq__18819_18841 = G__18856;
chunk__18821_18842 = G__18857;
count__18822_18843 = G__18858;
i__18823_18844 = G__18859;
continue;
} else {
var vec__18827_18860 = cljs.core.first.call(null,seq__18819_18854__$1);
var actual_type_18861 = cljs.core.nth.call(null,vec__18827_18860,(0),null);
var factory_18862 = cljs.core.nth.call(null,vec__18827_18860,(1),null);
var canonical_f_18863 = (cljs.core.truth_(selector_18833)?cljs.core.partial.call(null,dommy.core.live_listener,elem_18832,selector_18833):cljs.core.identity).call(null,factory_18862.call(null,f_18840));
dommy.core.update_event_listeners_BANG_.call(null,elem_18832,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_18833,actual_type_18861,f_18840], null),canonical_f_18863);

if(cljs.core.truth_(elem_18832.addEventListener)){
elem_18832.addEventListener(cljs.core.name.call(null,actual_type_18861),canonical_f_18863);
} else {
elem_18832.attachEvent(cljs.core.name.call(null,actual_type_18861),canonical_f_18863);
}

var G__18864 = cljs.core.next.call(null,seq__18819_18854__$1);
var G__18865 = null;
var G__18866 = (0);
var G__18867 = (0);
seq__18819_18841 = G__18864;
chunk__18821_18842 = G__18865;
count__18822_18843 = G__18866;
i__18823_18844 = G__18867;
continue;
}
} else {
}
}
break;
}

var G__18868 = seq__18809_18834;
var G__18869 = chunk__18816_18835;
var G__18870 = count__18817_18836;
var G__18871 = (i__18818_18837 + (1));
seq__18809_18834 = G__18868;
chunk__18816_18835 = G__18869;
count__18817_18836 = G__18870;
i__18818_18837 = G__18871;
continue;
} else {
var temp__4126__auto___18872 = cljs.core.seq.call(null,seq__18809_18834);
if(temp__4126__auto___18872){
var seq__18809_18873__$1 = temp__4126__auto___18872;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18809_18873__$1)){
var c__4417__auto___18874 = cljs.core.chunk_first.call(null,seq__18809_18873__$1);
var G__18875 = cljs.core.chunk_rest.call(null,seq__18809_18873__$1);
var G__18876 = c__4417__auto___18874;
var G__18877 = cljs.core.count.call(null,c__4417__auto___18874);
var G__18878 = (0);
seq__18809_18834 = G__18875;
chunk__18816_18835 = G__18876;
count__18817_18836 = G__18877;
i__18818_18837 = G__18878;
continue;
} else {
var vec__18828_18879 = cljs.core.first.call(null,seq__18809_18873__$1);
var orig_type_18880 = cljs.core.nth.call(null,vec__18828_18879,(0),null);
var f_18881 = cljs.core.nth.call(null,vec__18828_18879,(1),null);
var seq__18810_18882 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_18880,new cljs.core.PersistentArrayMap.fromArray([orig_type_18880,cljs.core.identity], true, false)));
var chunk__18812_18883 = null;
var count__18813_18884 = (0);
var i__18814_18885 = (0);
while(true){
if((i__18814_18885 < count__18813_18884)){
var vec__18829_18886 = cljs.core._nth.call(null,chunk__18812_18883,i__18814_18885);
var actual_type_18887 = cljs.core.nth.call(null,vec__18829_18886,(0),null);
var factory_18888 = cljs.core.nth.call(null,vec__18829_18886,(1),null);
var canonical_f_18889 = (cljs.core.truth_(selector_18833)?cljs.core.partial.call(null,dommy.core.live_listener,elem_18832,selector_18833):cljs.core.identity).call(null,factory_18888.call(null,f_18881));
dommy.core.update_event_listeners_BANG_.call(null,elem_18832,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_18833,actual_type_18887,f_18881], null),canonical_f_18889);

if(cljs.core.truth_(elem_18832.addEventListener)){
elem_18832.addEventListener(cljs.core.name.call(null,actual_type_18887),canonical_f_18889);
} else {
elem_18832.attachEvent(cljs.core.name.call(null,actual_type_18887),canonical_f_18889);
}

var G__18890 = seq__18810_18882;
var G__18891 = chunk__18812_18883;
var G__18892 = count__18813_18884;
var G__18893 = (i__18814_18885 + (1));
seq__18810_18882 = G__18890;
chunk__18812_18883 = G__18891;
count__18813_18884 = G__18892;
i__18814_18885 = G__18893;
continue;
} else {
var temp__4126__auto___18894__$1 = cljs.core.seq.call(null,seq__18810_18882);
if(temp__4126__auto___18894__$1){
var seq__18810_18895__$1 = temp__4126__auto___18894__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18810_18895__$1)){
var c__4417__auto___18896 = cljs.core.chunk_first.call(null,seq__18810_18895__$1);
var G__18897 = cljs.core.chunk_rest.call(null,seq__18810_18895__$1);
var G__18898 = c__4417__auto___18896;
var G__18899 = cljs.core.count.call(null,c__4417__auto___18896);
var G__18900 = (0);
seq__18810_18882 = G__18897;
chunk__18812_18883 = G__18898;
count__18813_18884 = G__18899;
i__18814_18885 = G__18900;
continue;
} else {
var vec__18830_18901 = cljs.core.first.call(null,seq__18810_18895__$1);
var actual_type_18902 = cljs.core.nth.call(null,vec__18830_18901,(0),null);
var factory_18903 = cljs.core.nth.call(null,vec__18830_18901,(1),null);
var canonical_f_18904 = (cljs.core.truth_(selector_18833)?cljs.core.partial.call(null,dommy.core.live_listener,elem_18832,selector_18833):cljs.core.identity).call(null,factory_18903.call(null,f_18881));
dommy.core.update_event_listeners_BANG_.call(null,elem_18832,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_18833,actual_type_18902,f_18881], null),canonical_f_18904);

if(cljs.core.truth_(elem_18832.addEventListener)){
elem_18832.addEventListener(cljs.core.name.call(null,actual_type_18902),canonical_f_18904);
} else {
elem_18832.attachEvent(cljs.core.name.call(null,actual_type_18902),canonical_f_18904);
}

var G__18905 = cljs.core.next.call(null,seq__18810_18895__$1);
var G__18906 = null;
var G__18907 = (0);
var G__18908 = (0);
seq__18810_18882 = G__18905;
chunk__18812_18883 = G__18906;
count__18813_18884 = G__18907;
i__18814_18885 = G__18908;
continue;
}
} else {
}
}
break;
}

var G__18909 = cljs.core.next.call(null,seq__18809_18873__$1);
var G__18910 = null;
var G__18911 = (0);
var G__18912 = (0);
seq__18809_18834 = G__18909;
chunk__18816_18835 = G__18910;
count__18817_18836 = G__18911;
i__18818_18837 = G__18912;
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
listen_BANG_.cljs$lang$applyTo = (function (arglist__18913){
var elem_sel = cljs.core.first(arglist__18913);
var type_fs = cljs.core.rest(arglist__18913);
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

var vec__18937_18960 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_18961 = cljs.core.nth.call(null,vec__18937_18960,(0),null);
var selector_18962 = cljs.core.nth.call(null,vec__18937_18960,(1),null);
var seq__18938_18963 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__18945_18964 = null;
var count__18946_18965 = (0);
var i__18947_18966 = (0);
while(true){
if((i__18947_18966 < count__18946_18965)){
var vec__18954_18967 = cljs.core._nth.call(null,chunk__18945_18964,i__18947_18966);
var orig_type_18968 = cljs.core.nth.call(null,vec__18954_18967,(0),null);
var f_18969 = cljs.core.nth.call(null,vec__18954_18967,(1),null);
var seq__18948_18970 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_18968,new cljs.core.PersistentArrayMap.fromArray([orig_type_18968,cljs.core.identity], true, false)));
var chunk__18950_18971 = null;
var count__18951_18972 = (0);
var i__18952_18973 = (0);
while(true){
if((i__18952_18973 < count__18951_18972)){
var vec__18955_18974 = cljs.core._nth.call(null,chunk__18950_18971,i__18952_18973);
var actual_type_18975 = cljs.core.nth.call(null,vec__18955_18974,(0),null);
var __18976 = cljs.core.nth.call(null,vec__18955_18974,(1),null);
var keys_18977 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_18962,actual_type_18975,f_18969], null);
var canonical_f_18978 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_18961),keys_18977);
dommy.core.update_event_listeners_BANG_.call(null,elem_18961,dommy.utils.dissoc_in,keys_18977);

if(cljs.core.truth_(elem_18961.removeEventListener)){
elem_18961.removeEventListener(cljs.core.name.call(null,actual_type_18975),canonical_f_18978);
} else {
elem_18961.detachEvent(cljs.core.name.call(null,actual_type_18975),canonical_f_18978);
}

var G__18979 = seq__18948_18970;
var G__18980 = chunk__18950_18971;
var G__18981 = count__18951_18972;
var G__18982 = (i__18952_18973 + (1));
seq__18948_18970 = G__18979;
chunk__18950_18971 = G__18980;
count__18951_18972 = G__18981;
i__18952_18973 = G__18982;
continue;
} else {
var temp__4126__auto___18983 = cljs.core.seq.call(null,seq__18948_18970);
if(temp__4126__auto___18983){
var seq__18948_18984__$1 = temp__4126__auto___18983;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18948_18984__$1)){
var c__4417__auto___18985 = cljs.core.chunk_first.call(null,seq__18948_18984__$1);
var G__18986 = cljs.core.chunk_rest.call(null,seq__18948_18984__$1);
var G__18987 = c__4417__auto___18985;
var G__18988 = cljs.core.count.call(null,c__4417__auto___18985);
var G__18989 = (0);
seq__18948_18970 = G__18986;
chunk__18950_18971 = G__18987;
count__18951_18972 = G__18988;
i__18952_18973 = G__18989;
continue;
} else {
var vec__18956_18990 = cljs.core.first.call(null,seq__18948_18984__$1);
var actual_type_18991 = cljs.core.nth.call(null,vec__18956_18990,(0),null);
var __18992 = cljs.core.nth.call(null,vec__18956_18990,(1),null);
var keys_18993 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_18962,actual_type_18991,f_18969], null);
var canonical_f_18994 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_18961),keys_18993);
dommy.core.update_event_listeners_BANG_.call(null,elem_18961,dommy.utils.dissoc_in,keys_18993);

if(cljs.core.truth_(elem_18961.removeEventListener)){
elem_18961.removeEventListener(cljs.core.name.call(null,actual_type_18991),canonical_f_18994);
} else {
elem_18961.detachEvent(cljs.core.name.call(null,actual_type_18991),canonical_f_18994);
}

var G__18995 = cljs.core.next.call(null,seq__18948_18984__$1);
var G__18996 = null;
var G__18997 = (0);
var G__18998 = (0);
seq__18948_18970 = G__18995;
chunk__18950_18971 = G__18996;
count__18951_18972 = G__18997;
i__18952_18973 = G__18998;
continue;
}
} else {
}
}
break;
}

var G__18999 = seq__18938_18963;
var G__19000 = chunk__18945_18964;
var G__19001 = count__18946_18965;
var G__19002 = (i__18947_18966 + (1));
seq__18938_18963 = G__18999;
chunk__18945_18964 = G__19000;
count__18946_18965 = G__19001;
i__18947_18966 = G__19002;
continue;
} else {
var temp__4126__auto___19003 = cljs.core.seq.call(null,seq__18938_18963);
if(temp__4126__auto___19003){
var seq__18938_19004__$1 = temp__4126__auto___19003;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18938_19004__$1)){
var c__4417__auto___19005 = cljs.core.chunk_first.call(null,seq__18938_19004__$1);
var G__19006 = cljs.core.chunk_rest.call(null,seq__18938_19004__$1);
var G__19007 = c__4417__auto___19005;
var G__19008 = cljs.core.count.call(null,c__4417__auto___19005);
var G__19009 = (0);
seq__18938_18963 = G__19006;
chunk__18945_18964 = G__19007;
count__18946_18965 = G__19008;
i__18947_18966 = G__19009;
continue;
} else {
var vec__18957_19010 = cljs.core.first.call(null,seq__18938_19004__$1);
var orig_type_19011 = cljs.core.nth.call(null,vec__18957_19010,(0),null);
var f_19012 = cljs.core.nth.call(null,vec__18957_19010,(1),null);
var seq__18939_19013 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_19011,new cljs.core.PersistentArrayMap.fromArray([orig_type_19011,cljs.core.identity], true, false)));
var chunk__18941_19014 = null;
var count__18942_19015 = (0);
var i__18943_19016 = (0);
while(true){
if((i__18943_19016 < count__18942_19015)){
var vec__18958_19017 = cljs.core._nth.call(null,chunk__18941_19014,i__18943_19016);
var actual_type_19018 = cljs.core.nth.call(null,vec__18958_19017,(0),null);
var __19019 = cljs.core.nth.call(null,vec__18958_19017,(1),null);
var keys_19020 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_18962,actual_type_19018,f_19012], null);
var canonical_f_19021 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_18961),keys_19020);
dommy.core.update_event_listeners_BANG_.call(null,elem_18961,dommy.utils.dissoc_in,keys_19020);

if(cljs.core.truth_(elem_18961.removeEventListener)){
elem_18961.removeEventListener(cljs.core.name.call(null,actual_type_19018),canonical_f_19021);
} else {
elem_18961.detachEvent(cljs.core.name.call(null,actual_type_19018),canonical_f_19021);
}

var G__19022 = seq__18939_19013;
var G__19023 = chunk__18941_19014;
var G__19024 = count__18942_19015;
var G__19025 = (i__18943_19016 + (1));
seq__18939_19013 = G__19022;
chunk__18941_19014 = G__19023;
count__18942_19015 = G__19024;
i__18943_19016 = G__19025;
continue;
} else {
var temp__4126__auto___19026__$1 = cljs.core.seq.call(null,seq__18939_19013);
if(temp__4126__auto___19026__$1){
var seq__18939_19027__$1 = temp__4126__auto___19026__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18939_19027__$1)){
var c__4417__auto___19028 = cljs.core.chunk_first.call(null,seq__18939_19027__$1);
var G__19029 = cljs.core.chunk_rest.call(null,seq__18939_19027__$1);
var G__19030 = c__4417__auto___19028;
var G__19031 = cljs.core.count.call(null,c__4417__auto___19028);
var G__19032 = (0);
seq__18939_19013 = G__19029;
chunk__18941_19014 = G__19030;
count__18942_19015 = G__19031;
i__18943_19016 = G__19032;
continue;
} else {
var vec__18959_19033 = cljs.core.first.call(null,seq__18939_19027__$1);
var actual_type_19034 = cljs.core.nth.call(null,vec__18959_19033,(0),null);
var __19035 = cljs.core.nth.call(null,vec__18959_19033,(1),null);
var keys_19036 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_18962,actual_type_19034,f_19012], null);
var canonical_f_19037 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_18961),keys_19036);
dommy.core.update_event_listeners_BANG_.call(null,elem_18961,dommy.utils.dissoc_in,keys_19036);

if(cljs.core.truth_(elem_18961.removeEventListener)){
elem_18961.removeEventListener(cljs.core.name.call(null,actual_type_19034),canonical_f_19037);
} else {
elem_18961.detachEvent(cljs.core.name.call(null,actual_type_19034),canonical_f_19037);
}

var G__19038 = cljs.core.next.call(null,seq__18939_19027__$1);
var G__19039 = null;
var G__19040 = (0);
var G__19041 = (0);
seq__18939_19013 = G__19038;
chunk__18941_19014 = G__19039;
count__18942_19015 = G__19040;
i__18943_19016 = G__19041;
continue;
}
} else {
}
}
break;
}

var G__19042 = cljs.core.next.call(null,seq__18938_19004__$1);
var G__19043 = null;
var G__19044 = (0);
var G__19045 = (0);
seq__18938_18963 = G__19042;
chunk__18945_18964 = G__19043;
count__18946_18965 = G__19044;
i__18947_18966 = G__19045;
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
unlisten_BANG_.cljs$lang$applyTo = (function (arglist__19046){
var elem_sel = cljs.core.first(arglist__19046);
var type_fs = cljs.core.rest(arglist__19046);
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

var vec__19054_19061 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_19062 = cljs.core.nth.call(null,vec__19054_19061,(0),null);
var selector_19063 = cljs.core.nth.call(null,vec__19054_19061,(1),null);
var seq__19055_19064 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__19056_19065 = null;
var count__19057_19066 = (0);
var i__19058_19067 = (0);
while(true){
if((i__19058_19067 < count__19057_19066)){
var vec__19059_19068 = cljs.core._nth.call(null,chunk__19056_19065,i__19058_19067);
var type_19069 = cljs.core.nth.call(null,vec__19059_19068,(0),null);
var f_19070 = cljs.core.nth.call(null,vec__19059_19068,(1),null);
dommy.core.listen_BANG_.call(null,elem_sel,type_19069,((function (seq__19055_19064,chunk__19056_19065,count__19057_19066,i__19058_19067,vec__19059_19068,type_19069,f_19070,vec__19054_19061,elem_19062,selector_19063){
return (function this_fn(e){
dommy.core.unlisten_BANG_.call(null,elem_sel,type_19069,this_fn);

return f_19070.call(null,e);
});})(seq__19055_19064,chunk__19056_19065,count__19057_19066,i__19058_19067,vec__19059_19068,type_19069,f_19070,vec__19054_19061,elem_19062,selector_19063))
);

var G__19071 = seq__19055_19064;
var G__19072 = chunk__19056_19065;
var G__19073 = count__19057_19066;
var G__19074 = (i__19058_19067 + (1));
seq__19055_19064 = G__19071;
chunk__19056_19065 = G__19072;
count__19057_19066 = G__19073;
i__19058_19067 = G__19074;
continue;
} else {
var temp__4126__auto___19075 = cljs.core.seq.call(null,seq__19055_19064);
if(temp__4126__auto___19075){
var seq__19055_19076__$1 = temp__4126__auto___19075;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19055_19076__$1)){
var c__4417__auto___19077 = cljs.core.chunk_first.call(null,seq__19055_19076__$1);
var G__19078 = cljs.core.chunk_rest.call(null,seq__19055_19076__$1);
var G__19079 = c__4417__auto___19077;
var G__19080 = cljs.core.count.call(null,c__4417__auto___19077);
var G__19081 = (0);
seq__19055_19064 = G__19078;
chunk__19056_19065 = G__19079;
count__19057_19066 = G__19080;
i__19058_19067 = G__19081;
continue;
} else {
var vec__19060_19082 = cljs.core.first.call(null,seq__19055_19076__$1);
var type_19083 = cljs.core.nth.call(null,vec__19060_19082,(0),null);
var f_19084 = cljs.core.nth.call(null,vec__19060_19082,(1),null);
dommy.core.listen_BANG_.call(null,elem_sel,type_19083,((function (seq__19055_19064,chunk__19056_19065,count__19057_19066,i__19058_19067,vec__19060_19082,type_19083,f_19084,seq__19055_19076__$1,temp__4126__auto___19075,vec__19054_19061,elem_19062,selector_19063){
return (function this_fn(e){
dommy.core.unlisten_BANG_.call(null,elem_sel,type_19083,this_fn);

return f_19084.call(null,e);
});})(seq__19055_19064,chunk__19056_19065,count__19057_19066,i__19058_19067,vec__19060_19082,type_19083,f_19084,seq__19055_19076__$1,temp__4126__auto___19075,vec__19054_19061,elem_19062,selector_19063))
);

var G__19085 = cljs.core.next.call(null,seq__19055_19076__$1);
var G__19086 = null;
var G__19087 = (0);
var G__19088 = (0);
seq__19055_19064 = G__19085;
chunk__19056_19065 = G__19086;
count__19057_19066 = G__19087;
i__19058_19067 = G__19088;
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
listen_once_BANG_.cljs$lang$applyTo = (function (arglist__19089){
var elem_sel = cljs.core.first(arglist__19089);
var type_fs = cljs.core.rest(arglist__19089);
return listen_once_BANG___delegate(elem_sel,type_fs);
});
listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic = listen_once_BANG___delegate;
return listen_once_BANG_;
})()
;

//# sourceMappingURL=core.js.map