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
return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,base,selector),cljs.core.take_while.call(null,(function (p1__16099_SHARP_){
return !((p1__16099_SHARP_ === base));
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
var seq__16106_16112 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));
var chunk__16107_16113 = null;
var count__16108_16114 = (0);
var i__16109_16115 = (0);
while(true){
if((i__16109_16115 < count__16108_16114)){
var vec__16110_16116 = cljs.core._nth.call(null,chunk__16107_16113,i__16109_16115);
var k_16117 = cljs.core.nth.call(null,vec__16110_16116,(0),null);
var v_16118 = cljs.core.nth.call(null,vec__16110_16116,(1),null);
style.setProperty(dommy.utils.as_str.call(null,k_16117),v_16118);

var G__16119 = seq__16106_16112;
var G__16120 = chunk__16107_16113;
var G__16121 = count__16108_16114;
var G__16122 = (i__16109_16115 + (1));
seq__16106_16112 = G__16119;
chunk__16107_16113 = G__16120;
count__16108_16114 = G__16121;
i__16109_16115 = G__16122;
continue;
} else {
var temp__4126__auto___16123 = cljs.core.seq.call(null,seq__16106_16112);
if(temp__4126__auto___16123){
var seq__16106_16124__$1 = temp__4126__auto___16123;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16106_16124__$1)){
var c__4417__auto___16125 = cljs.core.chunk_first.call(null,seq__16106_16124__$1);
var G__16126 = cljs.core.chunk_rest.call(null,seq__16106_16124__$1);
var G__16127 = c__4417__auto___16125;
var G__16128 = cljs.core.count.call(null,c__4417__auto___16125);
var G__16129 = (0);
seq__16106_16112 = G__16126;
chunk__16107_16113 = G__16127;
count__16108_16114 = G__16128;
i__16109_16115 = G__16129;
continue;
} else {
var vec__16111_16130 = cljs.core.first.call(null,seq__16106_16124__$1);
var k_16131 = cljs.core.nth.call(null,vec__16111_16130,(0),null);
var v_16132 = cljs.core.nth.call(null,vec__16111_16130,(1),null);
style.setProperty(dommy.utils.as_str.call(null,k_16131),v_16132);

var G__16133 = cljs.core.next.call(null,seq__16106_16124__$1);
var G__16134 = null;
var G__16135 = (0);
var G__16136 = (0);
seq__16106_16112 = G__16133;
chunk__16107_16113 = G__16134;
count__16108_16114 = G__16135;
i__16109_16115 = G__16136;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__16137){
var elem = cljs.core.first(arglist__16137);
var kvs = cljs.core.rest(arglist__16137);
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

var seq__16144_16150 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));
var chunk__16145_16151 = null;
var count__16146_16152 = (0);
var i__16147_16153 = (0);
while(true){
if((i__16147_16153 < count__16146_16152)){
var vec__16148_16154 = cljs.core._nth.call(null,chunk__16145_16151,i__16147_16153);
var k_16155 = cljs.core.nth.call(null,vec__16148_16154,(0),null);
var v_16156 = cljs.core.nth.call(null,vec__16148_16154,(1),null);
dommy.core.set_style_BANG_.call(null,elem,k_16155,[cljs.core.str(v_16156),cljs.core.str("px")].join(''));

var G__16157 = seq__16144_16150;
var G__16158 = chunk__16145_16151;
var G__16159 = count__16146_16152;
var G__16160 = (i__16147_16153 + (1));
seq__16144_16150 = G__16157;
chunk__16145_16151 = G__16158;
count__16146_16152 = G__16159;
i__16147_16153 = G__16160;
continue;
} else {
var temp__4126__auto___16161 = cljs.core.seq.call(null,seq__16144_16150);
if(temp__4126__auto___16161){
var seq__16144_16162__$1 = temp__4126__auto___16161;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16144_16162__$1)){
var c__4417__auto___16163 = cljs.core.chunk_first.call(null,seq__16144_16162__$1);
var G__16164 = cljs.core.chunk_rest.call(null,seq__16144_16162__$1);
var G__16165 = c__4417__auto___16163;
var G__16166 = cljs.core.count.call(null,c__4417__auto___16163);
var G__16167 = (0);
seq__16144_16150 = G__16164;
chunk__16145_16151 = G__16165;
count__16146_16152 = G__16166;
i__16147_16153 = G__16167;
continue;
} else {
var vec__16149_16168 = cljs.core.first.call(null,seq__16144_16162__$1);
var k_16169 = cljs.core.nth.call(null,vec__16149_16168,(0),null);
var v_16170 = cljs.core.nth.call(null,vec__16149_16168,(1),null);
dommy.core.set_style_BANG_.call(null,elem,k_16169,[cljs.core.str(v_16170),cljs.core.str("px")].join(''));

var G__16171 = cljs.core.next.call(null,seq__16144_16162__$1);
var G__16172 = null;
var G__16173 = (0);
var G__16174 = (0);
seq__16144_16150 = G__16171;
chunk__16145_16151 = G__16172;
count__16146_16152 = G__16173;
i__16147_16153 = G__16174;
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
set_px_BANG_.cljs$lang$applyTo = (function (arglist__16175){
var elem = cljs.core.first(arglist__16175);
var kvs = cljs.core.rest(arglist__16175);
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
var G__16184 = elem;
(G__16184[k__$1] = v);

return G__16184;
} else {
var G__16185 = elem;
G__16185.setAttribute(k__$1,v);

return G__16185;
}
} else {
return null;
}
});
var set_attr_BANG___4 = (function() { 
var G__16192__delegate = function (elem,k,v,kvs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null)))))].join('')));
}

var seq__16186_16193 = cljs.core.seq.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.call(null,(2),kvs)));
var chunk__16187_16194 = null;
var count__16188_16195 = (0);
var i__16189_16196 = (0);
while(true){
if((i__16189_16196 < count__16188_16195)){
var vec__16190_16197 = cljs.core._nth.call(null,chunk__16187_16194,i__16189_16196);
var k_16198__$1 = cljs.core.nth.call(null,vec__16190_16197,(0),null);
var v_16199__$1 = cljs.core.nth.call(null,vec__16190_16197,(1),null);
set_attr_BANG_.call(null,elem,k_16198__$1,v_16199__$1);

var G__16200 = seq__16186_16193;
var G__16201 = chunk__16187_16194;
var G__16202 = count__16188_16195;
var G__16203 = (i__16189_16196 + (1));
seq__16186_16193 = G__16200;
chunk__16187_16194 = G__16201;
count__16188_16195 = G__16202;
i__16189_16196 = G__16203;
continue;
} else {
var temp__4126__auto___16204 = cljs.core.seq.call(null,seq__16186_16193);
if(temp__4126__auto___16204){
var seq__16186_16205__$1 = temp__4126__auto___16204;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16186_16205__$1)){
var c__4417__auto___16206 = cljs.core.chunk_first.call(null,seq__16186_16205__$1);
var G__16207 = cljs.core.chunk_rest.call(null,seq__16186_16205__$1);
var G__16208 = c__4417__auto___16206;
var G__16209 = cljs.core.count.call(null,c__4417__auto___16206);
var G__16210 = (0);
seq__16186_16193 = G__16207;
chunk__16187_16194 = G__16208;
count__16188_16195 = G__16209;
i__16189_16196 = G__16210;
continue;
} else {
var vec__16191_16211 = cljs.core.first.call(null,seq__16186_16205__$1);
var k_16212__$1 = cljs.core.nth.call(null,vec__16191_16211,(0),null);
var v_16213__$1 = cljs.core.nth.call(null,vec__16191_16211,(1),null);
set_attr_BANG_.call(null,elem,k_16212__$1,v_16213__$1);

var G__16214 = cljs.core.next.call(null,seq__16186_16205__$1);
var G__16215 = null;
var G__16216 = (0);
var G__16217 = (0);
seq__16186_16193 = G__16214;
chunk__16187_16194 = G__16215;
count__16188_16195 = G__16216;
i__16189_16196 = G__16217;
continue;
}
} else {
}
}
break;
}

return elem;
};
var G__16192 = function (elem,k,v,var_args){
var kvs = null;
if (arguments.length > 3) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__16192__delegate.call(this,elem,k,v,kvs);};
G__16192.cljs$lang$maxFixedArity = 3;
G__16192.cljs$lang$applyTo = (function (arglist__16218){
var elem = cljs.core.first(arglist__16218);
arglist__16218 = cljs.core.next(arglist__16218);
var k = cljs.core.first(arglist__16218);
arglist__16218 = cljs.core.next(arglist__16218);
var v = cljs.core.first(arglist__16218);
var kvs = cljs.core.rest(arglist__16218);
return G__16192__delegate(elem,k,v,kvs);
});
G__16192.cljs$core$IFn$_invoke$arity$variadic = G__16192__delegate;
return G__16192;
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
var k_16227__$1 = dommy.utils.as_str.call(null,k);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["class",null,"classes",null], null), null).call(null,k_16227__$1))){
dommy.core.set_class_BANG_.call(null,elem,"");
} else {
elem.removeAttribute(k_16227__$1);
}

return elem;
});
var remove_attr_BANG___3 = (function() { 
var G__16228__delegate = function (elem,k,ks){
var seq__16223_16229 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));
var chunk__16224_16230 = null;
var count__16225_16231 = (0);
var i__16226_16232 = (0);
while(true){
if((i__16226_16232 < count__16225_16231)){
var k_16233__$1 = cljs.core._nth.call(null,chunk__16224_16230,i__16226_16232);
remove_attr_BANG_.call(null,elem,k_16233__$1);

var G__16234 = seq__16223_16229;
var G__16235 = chunk__16224_16230;
var G__16236 = count__16225_16231;
var G__16237 = (i__16226_16232 + (1));
seq__16223_16229 = G__16234;
chunk__16224_16230 = G__16235;
count__16225_16231 = G__16236;
i__16226_16232 = G__16237;
continue;
} else {
var temp__4126__auto___16238 = cljs.core.seq.call(null,seq__16223_16229);
if(temp__4126__auto___16238){
var seq__16223_16239__$1 = temp__4126__auto___16238;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16223_16239__$1)){
var c__4417__auto___16240 = cljs.core.chunk_first.call(null,seq__16223_16239__$1);
var G__16241 = cljs.core.chunk_rest.call(null,seq__16223_16239__$1);
var G__16242 = c__4417__auto___16240;
var G__16243 = cljs.core.count.call(null,c__4417__auto___16240);
var G__16244 = (0);
seq__16223_16229 = G__16241;
chunk__16224_16230 = G__16242;
count__16225_16231 = G__16243;
i__16226_16232 = G__16244;
continue;
} else {
var k_16245__$1 = cljs.core.first.call(null,seq__16223_16239__$1);
remove_attr_BANG_.call(null,elem,k_16245__$1);

var G__16246 = cljs.core.next.call(null,seq__16223_16239__$1);
var G__16247 = null;
var G__16248 = (0);
var G__16249 = (0);
seq__16223_16229 = G__16246;
chunk__16224_16230 = G__16247;
count__16225_16231 = G__16248;
i__16226_16232 = G__16249;
continue;
}
} else {
}
}
break;
}

return elem;
};
var G__16228 = function (elem,k,var_args){
var ks = null;
if (arguments.length > 2) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__16228__delegate.call(this,elem,k,ks);};
G__16228.cljs$lang$maxFixedArity = 2;
G__16228.cljs$lang$applyTo = (function (arglist__16250){
var elem = cljs.core.first(arglist__16250);
arglist__16250 = cljs.core.next(arglist__16250);
var k = cljs.core.first(arglist__16250);
var ks = cljs.core.rest(arglist__16250);
return G__16228__delegate(elem,k,ks);
});
G__16228.cljs$core$IFn$_invoke$arity$variadic = G__16228__delegate;
return G__16228;
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
var temp__4124__auto___16275 = elem.classList;
if(cljs.core.truth_(temp__4124__auto___16275)){
var class_list_16276 = temp__4124__auto___16275;
var seq__16263_16277 = cljs.core.seq.call(null,classes__$1);
var chunk__16264_16278 = null;
var count__16265_16279 = (0);
var i__16266_16280 = (0);
while(true){
if((i__16266_16280 < count__16265_16279)){
var c_16281 = cljs.core._nth.call(null,chunk__16264_16278,i__16266_16280);
class_list_16276.add(c_16281);

var G__16282 = seq__16263_16277;
var G__16283 = chunk__16264_16278;
var G__16284 = count__16265_16279;
var G__16285 = (i__16266_16280 + (1));
seq__16263_16277 = G__16282;
chunk__16264_16278 = G__16283;
count__16265_16279 = G__16284;
i__16266_16280 = G__16285;
continue;
} else {
var temp__4126__auto___16286 = cljs.core.seq.call(null,seq__16263_16277);
if(temp__4126__auto___16286){
var seq__16263_16287__$1 = temp__4126__auto___16286;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16263_16287__$1)){
var c__4417__auto___16288 = cljs.core.chunk_first.call(null,seq__16263_16287__$1);
var G__16289 = cljs.core.chunk_rest.call(null,seq__16263_16287__$1);
var G__16290 = c__4417__auto___16288;
var G__16291 = cljs.core.count.call(null,c__4417__auto___16288);
var G__16292 = (0);
seq__16263_16277 = G__16289;
chunk__16264_16278 = G__16290;
count__16265_16279 = G__16291;
i__16266_16280 = G__16292;
continue;
} else {
var c_16293 = cljs.core.first.call(null,seq__16263_16287__$1);
class_list_16276.add(c_16293);

var G__16294 = cljs.core.next.call(null,seq__16263_16287__$1);
var G__16295 = null;
var G__16296 = (0);
var G__16297 = (0);
seq__16263_16277 = G__16294;
chunk__16264_16278 = G__16295;
count__16265_16279 = G__16296;
i__16266_16280 = G__16297;
continue;
}
} else {
}
}
break;
}
} else {
var seq__16267_16298 = cljs.core.seq.call(null,classes__$1);
var chunk__16268_16299 = null;
var count__16269_16300 = (0);
var i__16270_16301 = (0);
while(true){
if((i__16270_16301 < count__16269_16300)){
var c_16302 = cljs.core._nth.call(null,chunk__16268_16299,i__16270_16301);
var class_name_16303 = dommy.core.class$.call(null,elem);
if(cljs.core.truth_(dommy.utils.class_index.call(null,class_name_16303,c_16302))){
} else {
dommy.core.set_class_BANG_.call(null,elem,(((class_name_16303 === ""))?c_16302:[cljs.core.str(class_name_16303),cljs.core.str(" "),cljs.core.str(c_16302)].join('')));
}

var G__16304 = seq__16267_16298;
var G__16305 = chunk__16268_16299;
var G__16306 = count__16269_16300;
var G__16307 = (i__16270_16301 + (1));
seq__16267_16298 = G__16304;
chunk__16268_16299 = G__16305;
count__16269_16300 = G__16306;
i__16270_16301 = G__16307;
continue;
} else {
var temp__4126__auto___16308 = cljs.core.seq.call(null,seq__16267_16298);
if(temp__4126__auto___16308){
var seq__16267_16309__$1 = temp__4126__auto___16308;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16267_16309__$1)){
var c__4417__auto___16310 = cljs.core.chunk_first.call(null,seq__16267_16309__$1);
var G__16311 = cljs.core.chunk_rest.call(null,seq__16267_16309__$1);
var G__16312 = c__4417__auto___16310;
var G__16313 = cljs.core.count.call(null,c__4417__auto___16310);
var G__16314 = (0);
seq__16267_16298 = G__16311;
chunk__16268_16299 = G__16312;
count__16269_16300 = G__16313;
i__16270_16301 = G__16314;
continue;
} else {
var c_16315 = cljs.core.first.call(null,seq__16267_16309__$1);
var class_name_16316 = dommy.core.class$.call(null,elem);
if(cljs.core.truth_(dommy.utils.class_index.call(null,class_name_16316,c_16315))){
} else {
dommy.core.set_class_BANG_.call(null,elem,(((class_name_16316 === ""))?c_16315:[cljs.core.str(class_name_16316),cljs.core.str(" "),cljs.core.str(c_16315)].join('')));
}

var G__16317 = cljs.core.next.call(null,seq__16267_16309__$1);
var G__16318 = null;
var G__16319 = (0);
var G__16320 = (0);
seq__16267_16298 = G__16317;
chunk__16268_16299 = G__16318;
count__16269_16300 = G__16319;
i__16270_16301 = G__16320;
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
var G__16321__delegate = function (elem,classes,more_classes){
var seq__16271_16322 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));
var chunk__16272_16323 = null;
var count__16273_16324 = (0);
var i__16274_16325 = (0);
while(true){
if((i__16274_16325 < count__16273_16324)){
var c_16326 = cljs.core._nth.call(null,chunk__16272_16323,i__16274_16325);
add_class_BANG_.call(null,elem,c_16326);

var G__16327 = seq__16271_16322;
var G__16328 = chunk__16272_16323;
var G__16329 = count__16273_16324;
var G__16330 = (i__16274_16325 + (1));
seq__16271_16322 = G__16327;
chunk__16272_16323 = G__16328;
count__16273_16324 = G__16329;
i__16274_16325 = G__16330;
continue;
} else {
var temp__4126__auto___16331 = cljs.core.seq.call(null,seq__16271_16322);
if(temp__4126__auto___16331){
var seq__16271_16332__$1 = temp__4126__auto___16331;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16271_16332__$1)){
var c__4417__auto___16333 = cljs.core.chunk_first.call(null,seq__16271_16332__$1);
var G__16334 = cljs.core.chunk_rest.call(null,seq__16271_16332__$1);
var G__16335 = c__4417__auto___16333;
var G__16336 = cljs.core.count.call(null,c__4417__auto___16333);
var G__16337 = (0);
seq__16271_16322 = G__16334;
chunk__16272_16323 = G__16335;
count__16273_16324 = G__16336;
i__16274_16325 = G__16337;
continue;
} else {
var c_16338 = cljs.core.first.call(null,seq__16271_16332__$1);
add_class_BANG_.call(null,elem,c_16338);

var G__16339 = cljs.core.next.call(null,seq__16271_16332__$1);
var G__16340 = null;
var G__16341 = (0);
var G__16342 = (0);
seq__16271_16322 = G__16339;
chunk__16272_16323 = G__16340;
count__16273_16324 = G__16341;
i__16274_16325 = G__16342;
continue;
}
} else {
}
}
break;
}

return elem;
};
var G__16321 = function (elem,classes,var_args){
var more_classes = null;
if (arguments.length > 2) {
  more_classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__16321__delegate.call(this,elem,classes,more_classes);};
G__16321.cljs$lang$maxFixedArity = 2;
G__16321.cljs$lang$applyTo = (function (arglist__16343){
var elem = cljs.core.first(arglist__16343);
arglist__16343 = cljs.core.next(arglist__16343);
var classes = cljs.core.first(arglist__16343);
var more_classes = cljs.core.rest(arglist__16343);
return G__16321__delegate(elem,classes,more_classes);
});
G__16321.cljs$core$IFn$_invoke$arity$variadic = G__16321__delegate;
return G__16321;
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
var temp__4124__auto___16352 = elem.classList;
if(cljs.core.truth_(temp__4124__auto___16352)){
var class_list_16353 = temp__4124__auto___16352;
class_list_16353.remove(c__$1);
} else {
var class_name_16354 = dommy.core.class$.call(null,elem);
var new_class_name_16355 = dommy.utils.remove_class_str.call(null,class_name_16354,c__$1);
if((class_name_16354 === new_class_name_16355)){
} else {
dommy.core.set_class_BANG_.call(null,elem,new_class_name_16355);
}
}

return elem;
});
var remove_class_BANG___3 = (function() { 
var G__16356__delegate = function (elem,class$,classes){
var seq__16348 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));
var chunk__16349 = null;
var count__16350 = (0);
var i__16351 = (0);
while(true){
if((i__16351 < count__16350)){
var c = cljs.core._nth.call(null,chunk__16349,i__16351);
remove_class_BANG_.call(null,elem,c);

var G__16357 = seq__16348;
var G__16358 = chunk__16349;
var G__16359 = count__16350;
var G__16360 = (i__16351 + (1));
seq__16348 = G__16357;
chunk__16349 = G__16358;
count__16350 = G__16359;
i__16351 = G__16360;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__16348);
if(temp__4126__auto__){
var seq__16348__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16348__$1)){
var c__4417__auto__ = cljs.core.chunk_first.call(null,seq__16348__$1);
var G__16361 = cljs.core.chunk_rest.call(null,seq__16348__$1);
var G__16362 = c__4417__auto__;
var G__16363 = cljs.core.count.call(null,c__4417__auto__);
var G__16364 = (0);
seq__16348 = G__16361;
chunk__16349 = G__16362;
count__16350 = G__16363;
i__16351 = G__16364;
continue;
} else {
var c = cljs.core.first.call(null,seq__16348__$1);
remove_class_BANG_.call(null,elem,c);

var G__16365 = cljs.core.next.call(null,seq__16348__$1);
var G__16366 = null;
var G__16367 = (0);
var G__16368 = (0);
seq__16348 = G__16365;
chunk__16349 = G__16366;
count__16350 = G__16367;
i__16351 = G__16368;
continue;
}
} else {
return null;
}
}
break;
}
};
var G__16356 = function (elem,class$,var_args){
var classes = null;
if (arguments.length > 2) {
  classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__16356__delegate.call(this,elem,class$,classes);};
G__16356.cljs$lang$maxFixedArity = 2;
G__16356.cljs$lang$applyTo = (function (arglist__16369){
var elem = cljs.core.first(arglist__16369);
arglist__16369 = cljs.core.next(arglist__16369);
var class$ = cljs.core.first(arglist__16369);
var classes = cljs.core.rest(arglist__16369);
return G__16356__delegate(elem,class$,classes);
});
G__16356.cljs$core$IFn$_invoke$arity$variadic = G__16356__delegate;
return G__16356;
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
var temp__4124__auto___16370 = elem.classList;
if(cljs.core.truth_(temp__4124__auto___16370)){
var class_list_16371 = temp__4124__auto___16370;
class_list_16371.toggle(c__$1);
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
var G__16377 = parent;
G__16377.appendChild(child);

return G__16377;
});
var append_BANG___3 = (function() { 
var G__16382__delegate = function (parent,child,more_children){
var seq__16378_16383 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));
var chunk__16379_16384 = null;
var count__16380_16385 = (0);
var i__16381_16386 = (0);
while(true){
if((i__16381_16386 < count__16380_16385)){
var c_16387 = cljs.core._nth.call(null,chunk__16379_16384,i__16381_16386);
append_BANG_.call(null,parent,c_16387);

var G__16388 = seq__16378_16383;
var G__16389 = chunk__16379_16384;
var G__16390 = count__16380_16385;
var G__16391 = (i__16381_16386 + (1));
seq__16378_16383 = G__16388;
chunk__16379_16384 = G__16389;
count__16380_16385 = G__16390;
i__16381_16386 = G__16391;
continue;
} else {
var temp__4126__auto___16392 = cljs.core.seq.call(null,seq__16378_16383);
if(temp__4126__auto___16392){
var seq__16378_16393__$1 = temp__4126__auto___16392;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16378_16393__$1)){
var c__4417__auto___16394 = cljs.core.chunk_first.call(null,seq__16378_16393__$1);
var G__16395 = cljs.core.chunk_rest.call(null,seq__16378_16393__$1);
var G__16396 = c__4417__auto___16394;
var G__16397 = cljs.core.count.call(null,c__4417__auto___16394);
var G__16398 = (0);
seq__16378_16383 = G__16395;
chunk__16379_16384 = G__16396;
count__16380_16385 = G__16397;
i__16381_16386 = G__16398;
continue;
} else {
var c_16399 = cljs.core.first.call(null,seq__16378_16393__$1);
append_BANG_.call(null,parent,c_16399);

var G__16400 = cljs.core.next.call(null,seq__16378_16393__$1);
var G__16401 = null;
var G__16402 = (0);
var G__16403 = (0);
seq__16378_16383 = G__16400;
chunk__16379_16384 = G__16401;
count__16380_16385 = G__16402;
i__16381_16386 = G__16403;
continue;
}
} else {
}
}
break;
}

return parent;
};
var G__16382 = function (parent,child,var_args){
var more_children = null;
if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__16382__delegate.call(this,parent,child,more_children);};
G__16382.cljs$lang$maxFixedArity = 2;
G__16382.cljs$lang$applyTo = (function (arglist__16404){
var parent = cljs.core.first(arglist__16404);
arglist__16404 = cljs.core.next(arglist__16404);
var child = cljs.core.first(arglist__16404);
var more_children = cljs.core.rest(arglist__16404);
return G__16382__delegate(parent,child,more_children);
});
G__16382.cljs$core$IFn$_invoke$arity$variadic = G__16382__delegate;
return G__16382;
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
var G__16410 = parent;
G__16410.insertBefore(child,parent.firstChild);

return G__16410;
});
var prepend_BANG___3 = (function() { 
var G__16415__delegate = function (parent,child,more_children){
var seq__16411_16416 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));
var chunk__16412_16417 = null;
var count__16413_16418 = (0);
var i__16414_16419 = (0);
while(true){
if((i__16414_16419 < count__16413_16418)){
var c_16420 = cljs.core._nth.call(null,chunk__16412_16417,i__16414_16419);
prepend_BANG_.call(null,parent,c_16420);

var G__16421 = seq__16411_16416;
var G__16422 = chunk__16412_16417;
var G__16423 = count__16413_16418;
var G__16424 = (i__16414_16419 + (1));
seq__16411_16416 = G__16421;
chunk__16412_16417 = G__16422;
count__16413_16418 = G__16423;
i__16414_16419 = G__16424;
continue;
} else {
var temp__4126__auto___16425 = cljs.core.seq.call(null,seq__16411_16416);
if(temp__4126__auto___16425){
var seq__16411_16426__$1 = temp__4126__auto___16425;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16411_16426__$1)){
var c__4417__auto___16427 = cljs.core.chunk_first.call(null,seq__16411_16426__$1);
var G__16428 = cljs.core.chunk_rest.call(null,seq__16411_16426__$1);
var G__16429 = c__4417__auto___16427;
var G__16430 = cljs.core.count.call(null,c__4417__auto___16427);
var G__16431 = (0);
seq__16411_16416 = G__16428;
chunk__16412_16417 = G__16429;
count__16413_16418 = G__16430;
i__16414_16419 = G__16431;
continue;
} else {
var c_16432 = cljs.core.first.call(null,seq__16411_16426__$1);
prepend_BANG_.call(null,parent,c_16432);

var G__16433 = cljs.core.next.call(null,seq__16411_16426__$1);
var G__16434 = null;
var G__16435 = (0);
var G__16436 = (0);
seq__16411_16416 = G__16433;
chunk__16412_16417 = G__16434;
count__16413_16418 = G__16435;
i__16414_16419 = G__16436;
continue;
}
} else {
}
}
break;
}

return parent;
};
var G__16415 = function (parent,child,var_args){
var more_children = null;
if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__16415__delegate.call(this,parent,child,more_children);};
G__16415.cljs$lang$maxFixedArity = 2;
G__16415.cljs$lang$applyTo = (function (arglist__16437){
var parent = cljs.core.first(arglist__16437);
arglist__16437 = cljs.core.next(arglist__16437);
var child = cljs.core.first(arglist__16437);
var more_children = cljs.core.rest(arglist__16437);
return G__16415__delegate(parent,child,more_children);
});
G__16415.cljs$core$IFn$_invoke$arity$variadic = G__16415__delegate;
return G__16415;
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
var temp__4124__auto___16438 = other.nextSibling;
if(cljs.core.truth_(temp__4124__auto___16438)){
var next_16439 = temp__4124__auto___16438;
dommy.core.insert_before_BANG_.call(null,elem,next_16439);
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
var G__16441 = p;
G__16441.removeChild(elem);

return G__16441;
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
dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__16442){
var vec__16443 = p__16442;
var special_mouse_event = cljs.core.nth.call(null,vec__16443,(0),null);
var real_mouse_event = cljs.core.nth.call(null,vec__16443,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,new cljs.core.PersistentArrayMap.fromArray([real_mouse_event,((function (vec__16443,special_mouse_event,real_mouse_event){
return (function (f){
return ((function (vec__16443,special_mouse_event,real_mouse_event){
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
;})(vec__16443,special_mouse_event,real_mouse_event))
});})(vec__16443,special_mouse_event,real_mouse_event))
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
update_event_listeners_BANG_.cljs$lang$applyTo = (function (arglist__16444){
var elem = cljs.core.first(arglist__16444);
arglist__16444 = cljs.core.next(arglist__16444);
var f = cljs.core.first(arglist__16444);
var args = cljs.core.rest(arglist__16444);
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

var vec__16468_16491 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_16492 = cljs.core.nth.call(null,vec__16468_16491,(0),null);
var selector_16493 = cljs.core.nth.call(null,vec__16468_16491,(1),null);
var seq__16469_16494 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__16476_16495 = null;
var count__16477_16496 = (0);
var i__16478_16497 = (0);
while(true){
if((i__16478_16497 < count__16477_16496)){
var vec__16485_16498 = cljs.core._nth.call(null,chunk__16476_16495,i__16478_16497);
var orig_type_16499 = cljs.core.nth.call(null,vec__16485_16498,(0),null);
var f_16500 = cljs.core.nth.call(null,vec__16485_16498,(1),null);
var seq__16479_16501 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_16499,new cljs.core.PersistentArrayMap.fromArray([orig_type_16499,cljs.core.identity], true, false)));
var chunk__16481_16502 = null;
var count__16482_16503 = (0);
var i__16483_16504 = (0);
while(true){
if((i__16483_16504 < count__16482_16503)){
var vec__16486_16505 = cljs.core._nth.call(null,chunk__16481_16502,i__16483_16504);
var actual_type_16506 = cljs.core.nth.call(null,vec__16486_16505,(0),null);
var factory_16507 = cljs.core.nth.call(null,vec__16486_16505,(1),null);
var canonical_f_16508 = (cljs.core.truth_(selector_16493)?cljs.core.partial.call(null,dommy.core.live_listener,elem_16492,selector_16493):cljs.core.identity).call(null,factory_16507.call(null,f_16500));
dommy.core.update_event_listeners_BANG_.call(null,elem_16492,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_16493,actual_type_16506,f_16500], null),canonical_f_16508);

if(cljs.core.truth_(elem_16492.addEventListener)){
elem_16492.addEventListener(cljs.core.name.call(null,actual_type_16506),canonical_f_16508);
} else {
elem_16492.attachEvent(cljs.core.name.call(null,actual_type_16506),canonical_f_16508);
}

var G__16509 = seq__16479_16501;
var G__16510 = chunk__16481_16502;
var G__16511 = count__16482_16503;
var G__16512 = (i__16483_16504 + (1));
seq__16479_16501 = G__16509;
chunk__16481_16502 = G__16510;
count__16482_16503 = G__16511;
i__16483_16504 = G__16512;
continue;
} else {
var temp__4126__auto___16513 = cljs.core.seq.call(null,seq__16479_16501);
if(temp__4126__auto___16513){
var seq__16479_16514__$1 = temp__4126__auto___16513;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16479_16514__$1)){
var c__4417__auto___16515 = cljs.core.chunk_first.call(null,seq__16479_16514__$1);
var G__16516 = cljs.core.chunk_rest.call(null,seq__16479_16514__$1);
var G__16517 = c__4417__auto___16515;
var G__16518 = cljs.core.count.call(null,c__4417__auto___16515);
var G__16519 = (0);
seq__16479_16501 = G__16516;
chunk__16481_16502 = G__16517;
count__16482_16503 = G__16518;
i__16483_16504 = G__16519;
continue;
} else {
var vec__16487_16520 = cljs.core.first.call(null,seq__16479_16514__$1);
var actual_type_16521 = cljs.core.nth.call(null,vec__16487_16520,(0),null);
var factory_16522 = cljs.core.nth.call(null,vec__16487_16520,(1),null);
var canonical_f_16523 = (cljs.core.truth_(selector_16493)?cljs.core.partial.call(null,dommy.core.live_listener,elem_16492,selector_16493):cljs.core.identity).call(null,factory_16522.call(null,f_16500));
dommy.core.update_event_listeners_BANG_.call(null,elem_16492,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_16493,actual_type_16521,f_16500], null),canonical_f_16523);

if(cljs.core.truth_(elem_16492.addEventListener)){
elem_16492.addEventListener(cljs.core.name.call(null,actual_type_16521),canonical_f_16523);
} else {
elem_16492.attachEvent(cljs.core.name.call(null,actual_type_16521),canonical_f_16523);
}

var G__16524 = cljs.core.next.call(null,seq__16479_16514__$1);
var G__16525 = null;
var G__16526 = (0);
var G__16527 = (0);
seq__16479_16501 = G__16524;
chunk__16481_16502 = G__16525;
count__16482_16503 = G__16526;
i__16483_16504 = G__16527;
continue;
}
} else {
}
}
break;
}

var G__16528 = seq__16469_16494;
var G__16529 = chunk__16476_16495;
var G__16530 = count__16477_16496;
var G__16531 = (i__16478_16497 + (1));
seq__16469_16494 = G__16528;
chunk__16476_16495 = G__16529;
count__16477_16496 = G__16530;
i__16478_16497 = G__16531;
continue;
} else {
var temp__4126__auto___16532 = cljs.core.seq.call(null,seq__16469_16494);
if(temp__4126__auto___16532){
var seq__16469_16533__$1 = temp__4126__auto___16532;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16469_16533__$1)){
var c__4417__auto___16534 = cljs.core.chunk_first.call(null,seq__16469_16533__$1);
var G__16535 = cljs.core.chunk_rest.call(null,seq__16469_16533__$1);
var G__16536 = c__4417__auto___16534;
var G__16537 = cljs.core.count.call(null,c__4417__auto___16534);
var G__16538 = (0);
seq__16469_16494 = G__16535;
chunk__16476_16495 = G__16536;
count__16477_16496 = G__16537;
i__16478_16497 = G__16538;
continue;
} else {
var vec__16488_16539 = cljs.core.first.call(null,seq__16469_16533__$1);
var orig_type_16540 = cljs.core.nth.call(null,vec__16488_16539,(0),null);
var f_16541 = cljs.core.nth.call(null,vec__16488_16539,(1),null);
var seq__16470_16542 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_16540,new cljs.core.PersistentArrayMap.fromArray([orig_type_16540,cljs.core.identity], true, false)));
var chunk__16472_16543 = null;
var count__16473_16544 = (0);
var i__16474_16545 = (0);
while(true){
if((i__16474_16545 < count__16473_16544)){
var vec__16489_16546 = cljs.core._nth.call(null,chunk__16472_16543,i__16474_16545);
var actual_type_16547 = cljs.core.nth.call(null,vec__16489_16546,(0),null);
var factory_16548 = cljs.core.nth.call(null,vec__16489_16546,(1),null);
var canonical_f_16549 = (cljs.core.truth_(selector_16493)?cljs.core.partial.call(null,dommy.core.live_listener,elem_16492,selector_16493):cljs.core.identity).call(null,factory_16548.call(null,f_16541));
dommy.core.update_event_listeners_BANG_.call(null,elem_16492,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_16493,actual_type_16547,f_16541], null),canonical_f_16549);

if(cljs.core.truth_(elem_16492.addEventListener)){
elem_16492.addEventListener(cljs.core.name.call(null,actual_type_16547),canonical_f_16549);
} else {
elem_16492.attachEvent(cljs.core.name.call(null,actual_type_16547),canonical_f_16549);
}

var G__16550 = seq__16470_16542;
var G__16551 = chunk__16472_16543;
var G__16552 = count__16473_16544;
var G__16553 = (i__16474_16545 + (1));
seq__16470_16542 = G__16550;
chunk__16472_16543 = G__16551;
count__16473_16544 = G__16552;
i__16474_16545 = G__16553;
continue;
} else {
var temp__4126__auto___16554__$1 = cljs.core.seq.call(null,seq__16470_16542);
if(temp__4126__auto___16554__$1){
var seq__16470_16555__$1 = temp__4126__auto___16554__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16470_16555__$1)){
var c__4417__auto___16556 = cljs.core.chunk_first.call(null,seq__16470_16555__$1);
var G__16557 = cljs.core.chunk_rest.call(null,seq__16470_16555__$1);
var G__16558 = c__4417__auto___16556;
var G__16559 = cljs.core.count.call(null,c__4417__auto___16556);
var G__16560 = (0);
seq__16470_16542 = G__16557;
chunk__16472_16543 = G__16558;
count__16473_16544 = G__16559;
i__16474_16545 = G__16560;
continue;
} else {
var vec__16490_16561 = cljs.core.first.call(null,seq__16470_16555__$1);
var actual_type_16562 = cljs.core.nth.call(null,vec__16490_16561,(0),null);
var factory_16563 = cljs.core.nth.call(null,vec__16490_16561,(1),null);
var canonical_f_16564 = (cljs.core.truth_(selector_16493)?cljs.core.partial.call(null,dommy.core.live_listener,elem_16492,selector_16493):cljs.core.identity).call(null,factory_16563.call(null,f_16541));
dommy.core.update_event_listeners_BANG_.call(null,elem_16492,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_16493,actual_type_16562,f_16541], null),canonical_f_16564);

if(cljs.core.truth_(elem_16492.addEventListener)){
elem_16492.addEventListener(cljs.core.name.call(null,actual_type_16562),canonical_f_16564);
} else {
elem_16492.attachEvent(cljs.core.name.call(null,actual_type_16562),canonical_f_16564);
}

var G__16565 = cljs.core.next.call(null,seq__16470_16555__$1);
var G__16566 = null;
var G__16567 = (0);
var G__16568 = (0);
seq__16470_16542 = G__16565;
chunk__16472_16543 = G__16566;
count__16473_16544 = G__16567;
i__16474_16545 = G__16568;
continue;
}
} else {
}
}
break;
}

var G__16569 = cljs.core.next.call(null,seq__16469_16533__$1);
var G__16570 = null;
var G__16571 = (0);
var G__16572 = (0);
seq__16469_16494 = G__16569;
chunk__16476_16495 = G__16570;
count__16477_16496 = G__16571;
i__16478_16497 = G__16572;
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
listen_BANG_.cljs$lang$applyTo = (function (arglist__16573){
var elem_sel = cljs.core.first(arglist__16573);
var type_fs = cljs.core.rest(arglist__16573);
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

var vec__16597_16620 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_16621 = cljs.core.nth.call(null,vec__16597_16620,(0),null);
var selector_16622 = cljs.core.nth.call(null,vec__16597_16620,(1),null);
var seq__16598_16623 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__16605_16624 = null;
var count__16606_16625 = (0);
var i__16607_16626 = (0);
while(true){
if((i__16607_16626 < count__16606_16625)){
var vec__16614_16627 = cljs.core._nth.call(null,chunk__16605_16624,i__16607_16626);
var orig_type_16628 = cljs.core.nth.call(null,vec__16614_16627,(0),null);
var f_16629 = cljs.core.nth.call(null,vec__16614_16627,(1),null);
var seq__16608_16630 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_16628,new cljs.core.PersistentArrayMap.fromArray([orig_type_16628,cljs.core.identity], true, false)));
var chunk__16610_16631 = null;
var count__16611_16632 = (0);
var i__16612_16633 = (0);
while(true){
if((i__16612_16633 < count__16611_16632)){
var vec__16615_16634 = cljs.core._nth.call(null,chunk__16610_16631,i__16612_16633);
var actual_type_16635 = cljs.core.nth.call(null,vec__16615_16634,(0),null);
var __16636 = cljs.core.nth.call(null,vec__16615_16634,(1),null);
var keys_16637 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_16622,actual_type_16635,f_16629], null);
var canonical_f_16638 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_16621),keys_16637);
dommy.core.update_event_listeners_BANG_.call(null,elem_16621,dommy.utils.dissoc_in,keys_16637);

if(cljs.core.truth_(elem_16621.removeEventListener)){
elem_16621.removeEventListener(cljs.core.name.call(null,actual_type_16635),canonical_f_16638);
} else {
elem_16621.detachEvent(cljs.core.name.call(null,actual_type_16635),canonical_f_16638);
}

var G__16639 = seq__16608_16630;
var G__16640 = chunk__16610_16631;
var G__16641 = count__16611_16632;
var G__16642 = (i__16612_16633 + (1));
seq__16608_16630 = G__16639;
chunk__16610_16631 = G__16640;
count__16611_16632 = G__16641;
i__16612_16633 = G__16642;
continue;
} else {
var temp__4126__auto___16643 = cljs.core.seq.call(null,seq__16608_16630);
if(temp__4126__auto___16643){
var seq__16608_16644__$1 = temp__4126__auto___16643;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16608_16644__$1)){
var c__4417__auto___16645 = cljs.core.chunk_first.call(null,seq__16608_16644__$1);
var G__16646 = cljs.core.chunk_rest.call(null,seq__16608_16644__$1);
var G__16647 = c__4417__auto___16645;
var G__16648 = cljs.core.count.call(null,c__4417__auto___16645);
var G__16649 = (0);
seq__16608_16630 = G__16646;
chunk__16610_16631 = G__16647;
count__16611_16632 = G__16648;
i__16612_16633 = G__16649;
continue;
} else {
var vec__16616_16650 = cljs.core.first.call(null,seq__16608_16644__$1);
var actual_type_16651 = cljs.core.nth.call(null,vec__16616_16650,(0),null);
var __16652 = cljs.core.nth.call(null,vec__16616_16650,(1),null);
var keys_16653 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_16622,actual_type_16651,f_16629], null);
var canonical_f_16654 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_16621),keys_16653);
dommy.core.update_event_listeners_BANG_.call(null,elem_16621,dommy.utils.dissoc_in,keys_16653);

if(cljs.core.truth_(elem_16621.removeEventListener)){
elem_16621.removeEventListener(cljs.core.name.call(null,actual_type_16651),canonical_f_16654);
} else {
elem_16621.detachEvent(cljs.core.name.call(null,actual_type_16651),canonical_f_16654);
}

var G__16655 = cljs.core.next.call(null,seq__16608_16644__$1);
var G__16656 = null;
var G__16657 = (0);
var G__16658 = (0);
seq__16608_16630 = G__16655;
chunk__16610_16631 = G__16656;
count__16611_16632 = G__16657;
i__16612_16633 = G__16658;
continue;
}
} else {
}
}
break;
}

var G__16659 = seq__16598_16623;
var G__16660 = chunk__16605_16624;
var G__16661 = count__16606_16625;
var G__16662 = (i__16607_16626 + (1));
seq__16598_16623 = G__16659;
chunk__16605_16624 = G__16660;
count__16606_16625 = G__16661;
i__16607_16626 = G__16662;
continue;
} else {
var temp__4126__auto___16663 = cljs.core.seq.call(null,seq__16598_16623);
if(temp__4126__auto___16663){
var seq__16598_16664__$1 = temp__4126__auto___16663;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16598_16664__$1)){
var c__4417__auto___16665 = cljs.core.chunk_first.call(null,seq__16598_16664__$1);
var G__16666 = cljs.core.chunk_rest.call(null,seq__16598_16664__$1);
var G__16667 = c__4417__auto___16665;
var G__16668 = cljs.core.count.call(null,c__4417__auto___16665);
var G__16669 = (0);
seq__16598_16623 = G__16666;
chunk__16605_16624 = G__16667;
count__16606_16625 = G__16668;
i__16607_16626 = G__16669;
continue;
} else {
var vec__16617_16670 = cljs.core.first.call(null,seq__16598_16664__$1);
var orig_type_16671 = cljs.core.nth.call(null,vec__16617_16670,(0),null);
var f_16672 = cljs.core.nth.call(null,vec__16617_16670,(1),null);
var seq__16599_16673 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_16671,new cljs.core.PersistentArrayMap.fromArray([orig_type_16671,cljs.core.identity], true, false)));
var chunk__16601_16674 = null;
var count__16602_16675 = (0);
var i__16603_16676 = (0);
while(true){
if((i__16603_16676 < count__16602_16675)){
var vec__16618_16677 = cljs.core._nth.call(null,chunk__16601_16674,i__16603_16676);
var actual_type_16678 = cljs.core.nth.call(null,vec__16618_16677,(0),null);
var __16679 = cljs.core.nth.call(null,vec__16618_16677,(1),null);
var keys_16680 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_16622,actual_type_16678,f_16672], null);
var canonical_f_16681 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_16621),keys_16680);
dommy.core.update_event_listeners_BANG_.call(null,elem_16621,dommy.utils.dissoc_in,keys_16680);

if(cljs.core.truth_(elem_16621.removeEventListener)){
elem_16621.removeEventListener(cljs.core.name.call(null,actual_type_16678),canonical_f_16681);
} else {
elem_16621.detachEvent(cljs.core.name.call(null,actual_type_16678),canonical_f_16681);
}

var G__16682 = seq__16599_16673;
var G__16683 = chunk__16601_16674;
var G__16684 = count__16602_16675;
var G__16685 = (i__16603_16676 + (1));
seq__16599_16673 = G__16682;
chunk__16601_16674 = G__16683;
count__16602_16675 = G__16684;
i__16603_16676 = G__16685;
continue;
} else {
var temp__4126__auto___16686__$1 = cljs.core.seq.call(null,seq__16599_16673);
if(temp__4126__auto___16686__$1){
var seq__16599_16687__$1 = temp__4126__auto___16686__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16599_16687__$1)){
var c__4417__auto___16688 = cljs.core.chunk_first.call(null,seq__16599_16687__$1);
var G__16689 = cljs.core.chunk_rest.call(null,seq__16599_16687__$1);
var G__16690 = c__4417__auto___16688;
var G__16691 = cljs.core.count.call(null,c__4417__auto___16688);
var G__16692 = (0);
seq__16599_16673 = G__16689;
chunk__16601_16674 = G__16690;
count__16602_16675 = G__16691;
i__16603_16676 = G__16692;
continue;
} else {
var vec__16619_16693 = cljs.core.first.call(null,seq__16599_16687__$1);
var actual_type_16694 = cljs.core.nth.call(null,vec__16619_16693,(0),null);
var __16695 = cljs.core.nth.call(null,vec__16619_16693,(1),null);
var keys_16696 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_16622,actual_type_16694,f_16672], null);
var canonical_f_16697 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_16621),keys_16696);
dommy.core.update_event_listeners_BANG_.call(null,elem_16621,dommy.utils.dissoc_in,keys_16696);

if(cljs.core.truth_(elem_16621.removeEventListener)){
elem_16621.removeEventListener(cljs.core.name.call(null,actual_type_16694),canonical_f_16697);
} else {
elem_16621.detachEvent(cljs.core.name.call(null,actual_type_16694),canonical_f_16697);
}

var G__16698 = cljs.core.next.call(null,seq__16599_16687__$1);
var G__16699 = null;
var G__16700 = (0);
var G__16701 = (0);
seq__16599_16673 = G__16698;
chunk__16601_16674 = G__16699;
count__16602_16675 = G__16700;
i__16603_16676 = G__16701;
continue;
}
} else {
}
}
break;
}

var G__16702 = cljs.core.next.call(null,seq__16598_16664__$1);
var G__16703 = null;
var G__16704 = (0);
var G__16705 = (0);
seq__16598_16623 = G__16702;
chunk__16605_16624 = G__16703;
count__16606_16625 = G__16704;
i__16607_16626 = G__16705;
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
unlisten_BANG_.cljs$lang$applyTo = (function (arglist__16706){
var elem_sel = cljs.core.first(arglist__16706);
var type_fs = cljs.core.rest(arglist__16706);
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

var vec__16714_16721 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_16722 = cljs.core.nth.call(null,vec__16714_16721,(0),null);
var selector_16723 = cljs.core.nth.call(null,vec__16714_16721,(1),null);
var seq__16715_16724 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__16716_16725 = null;
var count__16717_16726 = (0);
var i__16718_16727 = (0);
while(true){
if((i__16718_16727 < count__16717_16726)){
var vec__16719_16728 = cljs.core._nth.call(null,chunk__16716_16725,i__16718_16727);
var type_16729 = cljs.core.nth.call(null,vec__16719_16728,(0),null);
var f_16730 = cljs.core.nth.call(null,vec__16719_16728,(1),null);
dommy.core.listen_BANG_.call(null,elem_sel,type_16729,((function (seq__16715_16724,chunk__16716_16725,count__16717_16726,i__16718_16727,vec__16719_16728,type_16729,f_16730,vec__16714_16721,elem_16722,selector_16723){
return (function this_fn(e){
dommy.core.unlisten_BANG_.call(null,elem_sel,type_16729,this_fn);

return f_16730.call(null,e);
});})(seq__16715_16724,chunk__16716_16725,count__16717_16726,i__16718_16727,vec__16719_16728,type_16729,f_16730,vec__16714_16721,elem_16722,selector_16723))
);

var G__16731 = seq__16715_16724;
var G__16732 = chunk__16716_16725;
var G__16733 = count__16717_16726;
var G__16734 = (i__16718_16727 + (1));
seq__16715_16724 = G__16731;
chunk__16716_16725 = G__16732;
count__16717_16726 = G__16733;
i__16718_16727 = G__16734;
continue;
} else {
var temp__4126__auto___16735 = cljs.core.seq.call(null,seq__16715_16724);
if(temp__4126__auto___16735){
var seq__16715_16736__$1 = temp__4126__auto___16735;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16715_16736__$1)){
var c__4417__auto___16737 = cljs.core.chunk_first.call(null,seq__16715_16736__$1);
var G__16738 = cljs.core.chunk_rest.call(null,seq__16715_16736__$1);
var G__16739 = c__4417__auto___16737;
var G__16740 = cljs.core.count.call(null,c__4417__auto___16737);
var G__16741 = (0);
seq__16715_16724 = G__16738;
chunk__16716_16725 = G__16739;
count__16717_16726 = G__16740;
i__16718_16727 = G__16741;
continue;
} else {
var vec__16720_16742 = cljs.core.first.call(null,seq__16715_16736__$1);
var type_16743 = cljs.core.nth.call(null,vec__16720_16742,(0),null);
var f_16744 = cljs.core.nth.call(null,vec__16720_16742,(1),null);
dommy.core.listen_BANG_.call(null,elem_sel,type_16743,((function (seq__16715_16724,chunk__16716_16725,count__16717_16726,i__16718_16727,vec__16720_16742,type_16743,f_16744,seq__16715_16736__$1,temp__4126__auto___16735,vec__16714_16721,elem_16722,selector_16723){
return (function this_fn(e){
dommy.core.unlisten_BANG_.call(null,elem_sel,type_16743,this_fn);

return f_16744.call(null,e);
});})(seq__16715_16724,chunk__16716_16725,count__16717_16726,i__16718_16727,vec__16720_16742,type_16743,f_16744,seq__16715_16736__$1,temp__4126__auto___16735,vec__16714_16721,elem_16722,selector_16723))
);

var G__16745 = cljs.core.next.call(null,seq__16715_16736__$1);
var G__16746 = null;
var G__16747 = (0);
var G__16748 = (0);
seq__16715_16724 = G__16745;
chunk__16716_16725 = G__16746;
count__16717_16726 = G__16747;
i__16718_16727 = G__16748;
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
listen_once_BANG_.cljs$lang$applyTo = (function (arglist__16749){
var elem_sel = cljs.core.first(arglist__16749);
var type_fs = cljs.core.rest(arglist__16749);
return listen_once_BANG___delegate(elem_sel,type_fs);
});
listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic = listen_once_BANG___delegate;
return listen_once_BANG_;
})()
;

//# sourceMappingURL=core.js.map