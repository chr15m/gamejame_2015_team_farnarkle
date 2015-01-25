// Compiled by ClojureScript 0.0-2511
goog.provide('farn.font');
goog.require('cljs.core');
goog.require('farn.gfx');
goog.require('farn.utils');
goog.require('dommy.core');
goog.require('cljs.core.async');
farn.font.printable_characters = " ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!?@#$%^&*()-=_+[]{};':\",.<>/`~\\|";
/**
* returns a channel that receives the metrics hashmap
* once the font is loaded and processed by Font.js.
* url is either a url to a ttf or otf. Or a system font definition
* size is in pixels
*/
farn.font.load_font_js_metrics = (function load_font_js_metrics(url,size){
var f = (new Font());
var c = cljs.core.async.chan.call(null);
f.onload = ((function (f,c){
return (function (){
return cljs.core.async.put_BANG_.call(null,c,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4386__auto__ = ((function (f,c){
return (function iter__13018(s__13019){
return (new cljs.core.LazySeq(null,((function (f,c){
return (function (){
var s__13019__$1 = s__13019;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__13019__$1);
if(temp__4126__auto__){
var s__13019__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__13019__$2)){
var c__4384__auto__ = cljs.core.chunk_first.call(null,s__13019__$2);
var size__4385__auto__ = cljs.core.count.call(null,c__4384__auto__);
var b__13021 = cljs.core.chunk_buffer.call(null,size__4385__auto__);
if((function (){var i__13020 = (0);
while(true){
if((i__13020 < size__4385__auto__)){
var ch = cljs.core._nth.call(null,c__4384__auto__,i__13020);
cljs.core.chunk_append.call(null,b__13021,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ch,(function (){var metric = f.measureText(ch,size);
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"width","width",-384071477),metric.width,new cljs.core.Keyword(null,"height","height",1025178622),metric.height,new cljs.core.Keyword(null,"leading","leading",-1239035032),metric.leading,new cljs.core.Keyword(null,"ascent","ascent",-1986032338),metric.ascent,new cljs.core.Keyword(null,"descent","descent",1331783219),metric.descent,new cljs.core.Keyword(null,"bounds","bounds",1691609455),metric.bounds], null);
})()], null));

var G__13022 = (i__13020 + (1));
i__13020 = G__13022;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13021),iter__13018.call(null,cljs.core.chunk_rest.call(null,s__13019__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13021),null);
}
} else {
var ch = cljs.core.first.call(null,s__13019__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ch,(function (){var metric = f.measureText(ch,size);
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"width","width",-384071477),metric.width,new cljs.core.Keyword(null,"height","height",1025178622),metric.height,new cljs.core.Keyword(null,"leading","leading",-1239035032),metric.leading,new cljs.core.Keyword(null,"ascent","ascent",-1986032338),metric.ascent,new cljs.core.Keyword(null,"descent","descent",1331783219),metric.descent,new cljs.core.Keyword(null,"bounds","bounds",1691609455),metric.bounds], null);
})()], null),iter__13018.call(null,cljs.core.rest.call(null,s__13019__$2)));
}
} else {
return null;
}
break;
}
});})(f,c))
,null,null));
});})(f,c))
;
return iter__4386__auto__.call(null,farn.font.printable_characters);
})()));
});})(f,c))
;

f.onerror = ((function (f,c){
return (function (arg){
farn.utils.log.call(null,arg);

return cljs.core.async.put_BANG_.call(null,c,false);
});})(f,c))
;

f.src = url;

return c;
});
/**
* Make a PIXI.Text object using font and string and default settings
* @param {...*} var_args
*/
farn.font.make_text = (function() { 
var make_text__delegate = function (font,str,p__13023){
var map__13025 = p__13023;
var map__13025__$1 = ((cljs.core.seq_QMARK_.call(null,map__13025))?cljs.core.apply.call(null,cljs.core.hash_map,map__13025):map__13025);
var dropShadowColor = cljs.core.get.call(null,map__13025__$1,new cljs.core.Keyword(null,"dropShadowColor","dropShadowColor",-318037852),"#444444");
var dropShadow = cljs.core.get.call(null,map__13025__$1,new cljs.core.Keyword(null,"dropShadow","dropShadow",1001370187),false);
var strokeThickness = cljs.core.get.call(null,map__13025__$1,new cljs.core.Keyword(null,"strokeThickness","strokeThickness",-1303725323),(0));
var stroke = cljs.core.get.call(null,map__13025__$1,new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#ffffff");
var weight = cljs.core.get.call(null,map__13025__$1,new cljs.core.Keyword(null,"weight","weight",-1262796205),(400));
var style = cljs.core.get.call(null,map__13025__$1,new cljs.core.Keyword(null,"style","style",-496642736),"normal");
var align = cljs.core.get.call(null,map__13025__$1,new cljs.core.Keyword(null,"align","align",1964212802),"left");
var fill = cljs.core.get.call(null,map__13025__$1,new cljs.core.Keyword(null,"fill","fill",883462889),"#ffffff");
var spr = (new PIXI.Text(str,{"strokeThickness": strokeThickness, "weight": weight, "style": style, "font": font, "dropShadow": dropShadow, "fill": fill, "dropShadowColor": dropShadowColor, "stroke": stroke, "align": align}));
spr.anchor.x = 0.5;

spr.anchor.y = 0.5;

return spr;
};
var make_text = function (font,str,var_args){
var p__13023 = null;
if (arguments.length > 2) {
  p__13023 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return make_text__delegate.call(this,font,str,p__13023);};
make_text.cljs$lang$maxFixedArity = 2;
make_text.cljs$lang$applyTo = (function (arglist__13026){
var font = cljs.core.first(arglist__13026);
arglist__13026 = cljs.core.next(arglist__13026);
var str = cljs.core.first(arglist__13026);
var p__13023 = cljs.core.rest(arglist__13026);
return make_text__delegate(font,str,p__13023);
});
make_text.cljs$core$IFn$_invoke$arity$variadic = make_text__delegate;
return make_text;
})()
;
farn.font.font_metrics = (function font_metrics(font_str){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4386__auto__ = (function iter__13031(s__13032){
return (new cljs.core.LazySeq(null,(function (){
var s__13032__$1 = s__13032;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__13032__$1);
if(temp__4126__auto__){
var s__13032__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__13032__$2)){
var c__4384__auto__ = cljs.core.chunk_first.call(null,s__13032__$2);
var size__4385__auto__ = cljs.core.count.call(null,c__4384__auto__);
var b__13034 = cljs.core.chunk_buffer.call(null,size__4385__auto__);
if((function (){var i__13033 = (0);
while(true){
if((i__13033 < size__4385__auto__)){
var c = cljs.core._nth.call(null,c__4384__auto__,i__13033);
cljs.core.chunk_append.call(null,b__13034,(function (){var t = farn.font.make_text.call(null,font_str,c);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"width","width",-384071477),t.width,new cljs.core.Keyword(null,"height","height",1025178622),t.height,new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t.width,t.height], null),new cljs.core.Keyword(null,"texture","texture",-266291651),t], null)], null);
})());

var G__13035 = (i__13033 + (1));
i__13033 = G__13035;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13034),iter__13031.call(null,cljs.core.chunk_rest.call(null,s__13032__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13034),null);
}
} else {
var c = cljs.core.first.call(null,s__13032__$2);
return cljs.core.cons.call(null,(function (){var t = farn.font.make_text.call(null,font_str,c);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"width","width",-384071477),t.width,new cljs.core.Keyword(null,"height","height",1025178622),t.height,new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t.width,t.height], null),new cljs.core.Keyword(null,"texture","texture",-266291651),t], null)], null);
})(),iter__13031.call(null,cljs.core.rest.call(null,s__13032__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4386__auto__.call(null,farn.font.printable_characters);
})());
});
/**
* render a char at position [x y] onto a RenderTexture.
* returns that RenderTexture. Mutates RenderTexture
*/
farn.font.render_texture_char_BANG_ = (function render_texture_char_BANG_(rtex,metrics,char$,x,y){
var contain = (new PIXI.DisplayObjectContainer());
var c = new cljs.core.Keyword(null,"texture","texture",-266291651).cljs$core$IFn$_invoke$arity$1(metrics.call(null,char$));
c.position.x = x;

c.position.y = y;

c.anchor = farn.gfx.make_point.call(null,(0),(0));

contain.addChild(c);

rtex.render(contain);

return rtex;
});
farn.font.text_width = (function text_width(metrics,text){
return cljs.core.reduce.call(null,cljs.core._PLUS_,(function (){var iter__4386__auto__ = (function iter__13040(s__13041){
return (new cljs.core.LazySeq(null,(function (){
var s__13041__$1 = s__13041;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__13041__$1);
if(temp__4126__auto__){
var s__13041__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__13041__$2)){
var c__4384__auto__ = cljs.core.chunk_first.call(null,s__13041__$2);
var size__4385__auto__ = cljs.core.count.call(null,c__4384__auto__);
var b__13043 = cljs.core.chunk_buffer.call(null,size__4385__auto__);
if((function (){var i__13042 = (0);
while(true){
if((i__13042 < size__4385__auto__)){
var c = cljs.core._nth.call(null,c__4384__auto__,i__13042);
cljs.core.chunk_append.call(null,b__13043,new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(metrics.call(null,c)));

var G__13044 = (i__13042 + (1));
i__13042 = G__13044;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13043),iter__13040.call(null,cljs.core.chunk_rest.call(null,s__13041__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13043),null);
}
} else {
var c = cljs.core.first.call(null,s__13041__$2);
return cljs.core.cons.call(null,new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(metrics.call(null,c)),iter__13040.call(null,cljs.core.rest.call(null,s__13041__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4386__auto__.call(null,text);
})());
});
farn.font.text_height = (function text_height(metrics,text){
return cljs.core.reduce.call(null,cljs.core.max,(function (){var iter__4386__auto__ = (function iter__13049(s__13050){
return (new cljs.core.LazySeq(null,(function (){
var s__13050__$1 = s__13050;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__13050__$1);
if(temp__4126__auto__){
var s__13050__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__13050__$2)){
var c__4384__auto__ = cljs.core.chunk_first.call(null,s__13050__$2);
var size__4385__auto__ = cljs.core.count.call(null,c__4384__auto__);
var b__13052 = cljs.core.chunk_buffer.call(null,size__4385__auto__);
if((function (){var i__13051 = (0);
while(true){
if((i__13051 < size__4385__auto__)){
var c = cljs.core._nth.call(null,c__4384__auto__,i__13051);
cljs.core.chunk_append.call(null,b__13052,new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(metrics.call(null,c)));

var G__13053 = (i__13051 + (1));
i__13051 = G__13053;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13052),iter__13049.call(null,cljs.core.chunk_rest.call(null,s__13050__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13052),null);
}
} else {
var c = cljs.core.first.call(null,s__13050__$2);
return cljs.core.cons.call(null,new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(metrics.call(null,c)),iter__13049.call(null,cljs.core.rest.call(null,s__13050__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4386__auto__.call(null,text);
})());
});
/**
* given a string, and the index of the charater to render in
* the string, return its x position of rendering (by adding up
* previous characters sizes
*/
farn.font.x_position = (function x_position(metrics,row,i){
if(cljs.core._EQ_.call(null,(0),i)){
return (0);
} else {
return farn.font.text_width.call(null,metrics,cljs.core.subs.call(null,row,(0),i));
}
});
farn.font.make_rowset_sizes = (function make_rowset_sizes(metrics,chars){
var iter__4386__auto__ = (function iter__13090(s__13091){
return (new cljs.core.LazySeq(null,(function (){
var s__13091__$1 = s__13091;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__13091__$1);
if(temp__4126__auto__){
var s__13091__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__13091__$2)){
var c__4384__auto__ = cljs.core.chunk_first.call(null,s__13091__$2);
var size__4385__auto__ = cljs.core.count.call(null,c__4384__auto__);
var b__13093 = cljs.core.chunk_buffer.call(null,size__4385__auto__);
if((function (){var i__13092 = (0);
while(true){
if((i__13092 < size__4385__auto__)){
var charset = cljs.core._nth.call(null,c__4384__auto__,i__13092);
cljs.core.chunk_append.call(null,b__13093,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.reduce.call(null,cljs.core._PLUS_,(function (){var iter__4386__auto__ = ((function (i__13092,charset,c__4384__auto__,size__4385__auto__,b__13093,s__13091__$2,temp__4126__auto__){
return (function iter__13110(s__13111){
return (new cljs.core.LazySeq(null,((function (i__13092,charset,c__4384__auto__,size__4385__auto__,b__13093,s__13091__$2,temp__4126__auto__){
return (function (){
var s__13111__$1 = s__13111;
while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__13111__$1);
if(temp__4126__auto____$1){
var s__13111__$2 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__13111__$2)){
var c__4384__auto____$1 = cljs.core.chunk_first.call(null,s__13111__$2);
var size__4385__auto____$1 = cljs.core.count.call(null,c__4384__auto____$1);
var b__13113 = cljs.core.chunk_buffer.call(null,size__4385__auto____$1);
if((function (){var i__13112 = (0);
while(true){
if((i__13112 < size__4385__auto____$1)){
var c = cljs.core._nth.call(null,c__4384__auto____$1,i__13112);
cljs.core.chunk_append.call(null,b__13113,new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(metrics.call(null,c)));

var G__13126 = (i__13112 + (1));
i__13112 = G__13126;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13113),iter__13110.call(null,cljs.core.chunk_rest.call(null,s__13111__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13113),null);
}
} else {
var c = cljs.core.first.call(null,s__13111__$2);
return cljs.core.cons.call(null,new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(metrics.call(null,c)),iter__13110.call(null,cljs.core.rest.call(null,s__13111__$2)));
}
} else {
return null;
}
break;
}
});})(i__13092,charset,c__4384__auto__,size__4385__auto__,b__13093,s__13091__$2,temp__4126__auto__))
,null,null));
});})(i__13092,charset,c__4384__auto__,size__4385__auto__,b__13093,s__13091__$2,temp__4126__auto__))
;
return iter__4386__auto__.call(null,charset);
})()),cljs.core.reduce.call(null,cljs.core.max,(function (){var iter__4386__auto__ = ((function (i__13092,charset,c__4384__auto__,size__4385__auto__,b__13093,s__13091__$2,temp__4126__auto__){
return (function iter__13114(s__13115){
return (new cljs.core.LazySeq(null,((function (i__13092,charset,c__4384__auto__,size__4385__auto__,b__13093,s__13091__$2,temp__4126__auto__){
return (function (){
var s__13115__$1 = s__13115;
while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__13115__$1);
if(temp__4126__auto____$1){
var s__13115__$2 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__13115__$2)){
var c__4384__auto____$1 = cljs.core.chunk_first.call(null,s__13115__$2);
var size__4385__auto____$1 = cljs.core.count.call(null,c__4384__auto____$1);
var b__13117 = cljs.core.chunk_buffer.call(null,size__4385__auto____$1);
if((function (){var i__13116 = (0);
while(true){
if((i__13116 < size__4385__auto____$1)){
var c = cljs.core._nth.call(null,c__4384__auto____$1,i__13116);
cljs.core.chunk_append.call(null,b__13117,new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(metrics.call(null,c)));

var G__13127 = (i__13116 + (1));
i__13116 = G__13127;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13117),iter__13114.call(null,cljs.core.chunk_rest.call(null,s__13115__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13117),null);
}
} else {
var c = cljs.core.first.call(null,s__13115__$2);
return cljs.core.cons.call(null,new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(metrics.call(null,c)),iter__13114.call(null,cljs.core.rest.call(null,s__13115__$2)));
}
} else {
return null;
}
break;
}
});})(i__13092,charset,c__4384__auto__,size__4385__auto__,b__13093,s__13091__$2,temp__4126__auto__))
,null,null));
});})(i__13092,charset,c__4384__auto__,size__4385__auto__,b__13093,s__13091__$2,temp__4126__auto__))
;
return iter__4386__auto__.call(null,charset);
})())], null));

var G__13128 = (i__13092 + (1));
i__13092 = G__13128;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13093),iter__13090.call(null,cljs.core.chunk_rest.call(null,s__13091__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13093),null);
}
} else {
var charset = cljs.core.first.call(null,s__13091__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.reduce.call(null,cljs.core._PLUS_,(function (){var iter__4386__auto__ = ((function (charset,s__13091__$2,temp__4126__auto__){
return (function iter__13118(s__13119){
return (new cljs.core.LazySeq(null,((function (charset,s__13091__$2,temp__4126__auto__){
return (function (){
var s__13119__$1 = s__13119;
while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__13119__$1);
if(temp__4126__auto____$1){
var s__13119__$2 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__13119__$2)){
var c__4384__auto__ = cljs.core.chunk_first.call(null,s__13119__$2);
var size__4385__auto__ = cljs.core.count.call(null,c__4384__auto__);
var b__13121 = cljs.core.chunk_buffer.call(null,size__4385__auto__);
if((function (){var i__13120 = (0);
while(true){
if((i__13120 < size__4385__auto__)){
var c = cljs.core._nth.call(null,c__4384__auto__,i__13120);
cljs.core.chunk_append.call(null,b__13121,new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(metrics.call(null,c)));

var G__13129 = (i__13120 + (1));
i__13120 = G__13129;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13121),iter__13118.call(null,cljs.core.chunk_rest.call(null,s__13119__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13121),null);
}
} else {
var c = cljs.core.first.call(null,s__13119__$2);
return cljs.core.cons.call(null,new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(metrics.call(null,c)),iter__13118.call(null,cljs.core.rest.call(null,s__13119__$2)));
}
} else {
return null;
}
break;
}
});})(charset,s__13091__$2,temp__4126__auto__))
,null,null));
});})(charset,s__13091__$2,temp__4126__auto__))
;
return iter__4386__auto__.call(null,charset);
})()),cljs.core.reduce.call(null,cljs.core.max,(function (){var iter__4386__auto__ = ((function (charset,s__13091__$2,temp__4126__auto__){
return (function iter__13122(s__13123){
return (new cljs.core.LazySeq(null,((function (charset,s__13091__$2,temp__4126__auto__){
return (function (){
var s__13123__$1 = s__13123;
while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__13123__$1);
if(temp__4126__auto____$1){
var s__13123__$2 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__13123__$2)){
var c__4384__auto__ = cljs.core.chunk_first.call(null,s__13123__$2);
var size__4385__auto__ = cljs.core.count.call(null,c__4384__auto__);
var b__13125 = cljs.core.chunk_buffer.call(null,size__4385__auto__);
if((function (){var i__13124 = (0);
while(true){
if((i__13124 < size__4385__auto__)){
var c = cljs.core._nth.call(null,c__4384__auto__,i__13124);
cljs.core.chunk_append.call(null,b__13125,new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(metrics.call(null,c)));

var G__13130 = (i__13124 + (1));
i__13124 = G__13130;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13125),iter__13122.call(null,cljs.core.chunk_rest.call(null,s__13123__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13125),null);
}
} else {
var c = cljs.core.first.call(null,s__13123__$2);
return cljs.core.cons.call(null,new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(metrics.call(null,c)),iter__13122.call(null,cljs.core.rest.call(null,s__13123__$2)));
}
} else {
return null;
}
break;
}
});})(charset,s__13091__$2,temp__4126__auto__))
,null,null));
});})(charset,s__13091__$2,temp__4126__auto__))
;
return iter__4386__auto__.call(null,charset);
})())], null),iter__13090.call(null,cljs.core.rest.call(null,s__13091__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4386__auto__.call(null,cljs.core.partition.call(null,(10),chars));
});
farn.font.calculate_font_layout_size = (function calculate_font_layout_size(rows){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.reduce.call(null,cljs.core.max,(function (){var iter__4386__auto__ = (function iter__13147(s__13148){
return (new cljs.core.LazySeq(null,(function (){
var s__13148__$1 = s__13148;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__13148__$1);
if(temp__4126__auto__){
var s__13148__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__13148__$2)){
var c__4384__auto__ = cljs.core.chunk_first.call(null,s__13148__$2);
var size__4385__auto__ = cljs.core.count.call(null,c__4384__auto__);
var b__13150 = cljs.core.chunk_buffer.call(null,size__4385__auto__);
if((function (){var i__13149 = (0);
while(true){
if((i__13149 < size__4385__auto__)){
var vec__13153 = cljs.core._nth.call(null,c__4384__auto__,i__13149);
var w = cljs.core.nth.call(null,vec__13153,(0),null);
var h = cljs.core.nth.call(null,vec__13153,(1),null);
cljs.core.chunk_append.call(null,b__13150,w);

var G__13163 = (i__13149 + (1));
i__13149 = G__13163;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13150),iter__13147.call(null,cljs.core.chunk_rest.call(null,s__13148__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13150),null);
}
} else {
var vec__13154 = cljs.core.first.call(null,s__13148__$2);
var w = cljs.core.nth.call(null,vec__13154,(0),null);
var h = cljs.core.nth.call(null,vec__13154,(1),null);
return cljs.core.cons.call(null,w,iter__13147.call(null,cljs.core.rest.call(null,s__13148__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4386__auto__.call(null,rows);
})()),cljs.core.reduce.call(null,cljs.core._PLUS_,(function (){var iter__4386__auto__ = (function iter__13155(s__13156){
return (new cljs.core.LazySeq(null,(function (){
var s__13156__$1 = s__13156;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__13156__$1);
if(temp__4126__auto__){
var s__13156__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__13156__$2)){
var c__4384__auto__ = cljs.core.chunk_first.call(null,s__13156__$2);
var size__4385__auto__ = cljs.core.count.call(null,c__4384__auto__);
var b__13158 = cljs.core.chunk_buffer.call(null,size__4385__auto__);
if((function (){var i__13157 = (0);
while(true){
if((i__13157 < size__4385__auto__)){
var vec__13161 = cljs.core._nth.call(null,c__4384__auto__,i__13157);
var w = cljs.core.nth.call(null,vec__13161,(0),null);
var h = cljs.core.nth.call(null,vec__13161,(1),null);
cljs.core.chunk_append.call(null,b__13158,h);

var G__13164 = (i__13157 + (1));
i__13157 = G__13164;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13158),iter__13155.call(null,cljs.core.chunk_rest.call(null,s__13156__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13158),null);
}
} else {
var vec__13162 = cljs.core.first.call(null,s__13156__$2);
var w = cljs.core.nth.call(null,vec__13162,(0),null);
var h = cljs.core.nth.call(null,vec__13162,(1),null);
return cljs.core.cons.call(null,h,iter__13155.call(null,cljs.core.rest.call(null,s__13156__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4386__auto__.call(null,rows);
})())], null);
});
farn.font.install_google_webfont_script_BANG_ = (function install_google_webfont_script_BANG_(){
var elem = dommy.core.create_element.call(null,new cljs.core.Keyword(null,"script","script",-1304443801));
return dommy.core.insert_before_BANG_.call(null,dommy.core.set_attr_BANG_.call(null,dommy.core.set_attr_BANG_.call(null,dommy.core.set_attr_BANG_.call(null,elem,new cljs.core.Keyword(null,"src","src",-1651076051),[cljs.core.str(((cljs.core._EQ_.call(null,"https:",document.location.protocol))?"https":"http")),cljs.core.str("://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js")].join('')),new cljs.core.Keyword(null,"type","type",1174270348),"text/javascript"),new cljs.core.Keyword(null,"async","async",1050769601),"true"),(dommy.utils.__GT_Array.call(null,document.getElementsByTagName("script"))[(0)]));
});
farn.font.install_google_font_stylesheet_BANG_ = (function install_google_font_stylesheet_BANG_(url){
var elem = dommy.core.create_element.call(null,new cljs.core.Keyword(null,"link","link",-1769163468));
return dommy.core.insert_before_BANG_.call(null,dommy.core.set_attr_BANG_.call(null,dommy.core.set_attr_BANG_.call(null,dommy.core.set_attr_BANG_.call(null,elem,new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"),new cljs.core.Keyword(null,"type","type",1174270348),"text/css"),new cljs.core.Keyword(null,"href","href",-793805698),url),(dommy.utils.__GT_Array.call(null,document.getElementsByTagName("link"))[(0)]));
});
farn.font.install_google_webfont_script_BANG_.call(null);
farn.font.install_google_font_stylesheet_BANG_.call(null,"http://fonts.googleapis.com/css?family=Open+Sans:400");
farn.font.render_row = (function render_row(metrics,texture,row,y){
var iter__4386__auto__ = (function iter__13173(s__13174){
return (new cljs.core.LazySeq(null,(function (){
var s__13174__$1 = s__13174;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__13174__$1);
if(temp__4126__auto__){
var s__13174__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__13174__$2)){
var c__4384__auto__ = cljs.core.chunk_first.call(null,s__13174__$2);
var size__4385__auto__ = cljs.core.count.call(null,c__4384__auto__);
var b__13176 = cljs.core.chunk_buffer.call(null,size__4385__auto__);
if((function (){var i__13175 = (0);
while(true){
if((i__13175 < size__4385__auto__)){
var vec__13179 = cljs.core._nth.call(null,c__4384__auto__,i__13175);
var i = cljs.core.nth.call(null,vec__13179,(0),null);
var c = cljs.core.nth.call(null,vec__13179,(1),null);
cljs.core.chunk_append.call(null,b__13176,(function (){var tex = farn.font.render_texture_char_BANG_.call(null,texture,metrics,c,farn.font.x_position.call(null,metrics,row,i),y);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [farn.font.x_position.call(null,metrics,row,i),y], null)], null);
})());

var G__13181 = (i__13175 + (1));
i__13175 = G__13181;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13176),iter__13173.call(null,cljs.core.chunk_rest.call(null,s__13174__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13176),null);
}
} else {
var vec__13180 = cljs.core.first.call(null,s__13174__$2);
var i = cljs.core.nth.call(null,vec__13180,(0),null);
var c = cljs.core.nth.call(null,vec__13180,(1),null);
return cljs.core.cons.call(null,(function (){var tex = farn.font.render_texture_char_BANG_.call(null,texture,metrics,c,farn.font.x_position.call(null,metrics,row,i),y);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [farn.font.x_position.call(null,metrics,row,i),y], null)], null);
})(),iter__13173.call(null,cljs.core.rest.call(null,s__13174__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4386__auto__.call(null,cljs.core.partition.call(null,(2),cljs.core.interleave.call(null,cljs.core.range.call(null),row)));
});
farn.font.render_tiled_font_texture = (function render_tiled_font_texture(metrics,texture,line_height){
var b = texture;
var d = cljs.core.PersistentArrayMap.EMPTY;
var i = (0);
var chars = cljs.core.partition.call(null,(10),farn.font.printable_characters);
while(true){
if(!(cljs.core.empty_QMARK_.call(null,chars))){
var details = farn.font.render_row.call(null,metrics,texture,cljs.core.apply.call(null,cljs.core.str,cljs.core.first.call(null,chars)),(i * line_height));
var G__13182 = b;
var G__13183 = cljs.core.into.call(null,d,details);
var G__13184 = (i + (1));
var G__13185 = cljs.core.rest.call(null,chars);
b = G__13182;
d = G__13183;
i = G__13184;
chars = G__13185;
continue;
} else {
return d;
}
break;
}
});
farn.font.make_tiled_font = (function make_tiled_font(family,weight,size){
var fullname = [cljs.core.str(weight),cljs.core.str(" "),cljs.core.str(size),cljs.core.str("px "),cljs.core.str(family)].join('');
var metrics = farn.font.font_metrics.call(null,fullname);
var vec__13187 = farn.font.calculate_font_layout_size.call(null,farn.font.make_rowset_sizes.call(null,metrics,farn.font.printable_characters));
var w = cljs.core.nth.call(null,vec__13187,(0),null);
var h = cljs.core.nth.call(null,vec__13187,(1),null);
var texture = (new PIXI.RenderTexture(w,h));
var line_height = farn.font.text_height.call(null,metrics,farn.font.printable_characters);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"texture","texture",-266291651),texture,new cljs.core.Keyword(null,"fullname","fullname",1638772587),fullname,new cljs.core.Keyword(null,"metrics","metrics",394093469),metrics,new cljs.core.Keyword(null,"line-height","line-height",1870784992),line_height,new cljs.core.Keyword(null,"positions","positions",-1380538434),farn.font.render_tiled_font_texture.call(null,metrics,texture,line_height)], null);
});
farn.font.font_char_sub_texture = (function font_char_sub_texture(font,ch){
return farn.gfx.sub_texture.call(null,new cljs.core.Keyword(null,"texture","texture",-266291651).cljs$core$IFn$_invoke$arity$1(font),new cljs.core.Keyword(null,"positions","positions",-1380538434).cljs$core$IFn$_invoke$arity$1(font).call(null,ch),new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"metrics","metrics",394093469).cljs$core$IFn$_invoke$arity$1(font).call(null,ch)));
});
/**
* @param {...*} var_args
*/
farn.font.font_make_batch = (function() { 
var font_make_batch__delegate = function (font,text,p__13188){
var map__13191 = p__13188;
var map__13191__$1 = ((cljs.core.seq_QMARK_.call(null,map__13191))?cljs.core.apply.call(null,cljs.core.hash_map,map__13191):map__13191);
var options = map__13191__$1;
var y = cljs.core.get.call(null,map__13191__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var x = cljs.core.get.call(null,map__13191__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var buff = new cljs.core.Keyword(null,"texture","texture",-266291651).cljs$core$IFn$_invoke$arity$1(font);
var metrics = new cljs.core.Keyword(null,"metrics","metrics",394093469).cljs$core$IFn$_invoke$arity$1(font);
var sb = (new PIXI.SpriteBatch(buff));
var _ = sb.pivot.x = ((farn.font.text_width.call(null,metrics,text) / (2)) | (0));
var ___$1 = sb.pivot.y = ((farn.font.text_height.call(null,metrics,text) / (2)) | (0));
var t_13193 = text;
var xp_13194 = x;
while(true){
var c_13195 = cljs.core.first.call(null,t_13193);
var r_13196 = cljs.core.rest.call(null,t_13193);
var vec__13192_13197 = new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(metrics.call(null,c_13195));
var w_13198 = cljs.core.nth.call(null,vec__13192_13197,(0),null);
var h_13199 = cljs.core.nth.call(null,vec__13192_13197,(1),null);
var s_13200 = farn.gfx.make_sprite.call(null,farn.font.font_char_sub_texture.call(null,font,c_13195),new cljs.core.Keyword(null,"x","x",2099068185),xp_13194,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"xhandle","xhandle",373504767),(0),new cljs.core.Keyword(null,"yhandle","yhandle",608395252),(0));
sb.addChild(s_13200);

if(!(cljs.core.empty_QMARK_.call(null,r_13196))){
var G__13201 = r_13196;
var G__13202 = (xp_13194 + w_13198);
t_13193 = G__13201;
xp_13194 = G__13202;
continue;
} else {
}
break;
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sprite","sprite",172516848),sb,new cljs.core.Keyword(null,"font","font",-1506159249),font], null);
};
var font_make_batch = function (font,text,var_args){
var p__13188 = null;
if (arguments.length > 2) {
  p__13188 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return font_make_batch__delegate.call(this,font,text,p__13188);};
font_make_batch.cljs$lang$maxFixedArity = 2;
font_make_batch.cljs$lang$applyTo = (function (arglist__13203){
var font = cljs.core.first(arglist__13203);
arglist__13203 = cljs.core.next(arglist__13203);
var text = cljs.core.first(arglist__13203);
var p__13188 = cljs.core.rest(arglist__13203);
return font_make_batch__delegate(font,text,p__13188);
});
font_make_batch.cljs$core$IFn$_invoke$arity$variadic = font_make_batch__delegate;
return font_make_batch;
})()
;
farn.font.font_text_width = (function font_text_width(font,text){
return farn.font.text_width.call(null,new cljs.core.Keyword(null,"metrics","metrics",394093469).cljs$core$IFn$_invoke$arity$1(font),text);
});
/**
* starting at position 'pos', add all the letters so that the
* string text appears. Return the next render position for the next character.
*/
farn.font.batch_add = (function batch_add(batch,p__13204,text){
var vec__13207 = p__13204;
var x = cljs.core.nth.call(null,vec__13207,(0),null);
var y = cljs.core.nth.call(null,vec__13207,(1),null);
var font = new cljs.core.Keyword(null,"font","font",-1506159249).cljs$core$IFn$_invoke$arity$1(batch);
var sb = new cljs.core.Keyword(null,"sprite","sprite",172516848).cljs$core$IFn$_invoke$arity$1(batch);
var metrics = new cljs.core.Keyword(null,"metrics","metrics",394093469).cljs$core$IFn$_invoke$arity$1(font);
var t = text;
var xp = (0);
while(true){
var c = cljs.core.first.call(null,t);
var r = cljs.core.rest.call(null,t);
var vec__13208 = new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(metrics.call(null,c));
var w = cljs.core.nth.call(null,vec__13208,(0),null);
var h = cljs.core.nth.call(null,vec__13208,(1),null);
var s = farn.gfx.make_sprite.call(null,farn.font.font_char_sub_texture.call(null,font,c),new cljs.core.Keyword(null,"x","x",2099068185),(x + xp),new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"xhandle","xhandle",373504767),(0),new cljs.core.Keyword(null,"yhandle","yhandle",608395252),(0));
farn.utils.log.call(null,c,(x + xp),y);

sb.addChild(s);

if(!(cljs.core.empty_QMARK_.call(null,r))){
var G__13209 = r;
var G__13210 = (xp + w);
t = G__13209;
xp = G__13210;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((xp + w) + x),y], null);
}
break;
}
});

//# sourceMappingURL=font.js.map