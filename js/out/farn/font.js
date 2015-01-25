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
return (function iter__14497(s__14498){
return (new cljs.core.LazySeq(null,((function (f,c){
return (function (){
var s__14498__$1 = s__14498;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__14498__$1);
if(temp__4126__auto__){
var s__14498__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__14498__$2)){
var c__4384__auto__ = cljs.core.chunk_first.call(null,s__14498__$2);
var size__4385__auto__ = cljs.core.count.call(null,c__4384__auto__);
var b__14500 = cljs.core.chunk_buffer.call(null,size__4385__auto__);
if((function (){var i__14499 = (0);
while(true){
if((i__14499 < size__4385__auto__)){
var ch = cljs.core._nth.call(null,c__4384__auto__,i__14499);
cljs.core.chunk_append.call(null,b__14500,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ch,(function (){var metric = f.measureText(ch,size);
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"width","width",-384071477),metric.width,new cljs.core.Keyword(null,"height","height",1025178622),metric.height,new cljs.core.Keyword(null,"leading","leading",-1239035032),metric.leading,new cljs.core.Keyword(null,"ascent","ascent",-1986032338),metric.ascent,new cljs.core.Keyword(null,"descent","descent",1331783219),metric.descent,new cljs.core.Keyword(null,"bounds","bounds",1691609455),metric.bounds], null);
})()], null));

var G__14501 = (i__14499 + (1));
i__14499 = G__14501;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14500),iter__14497.call(null,cljs.core.chunk_rest.call(null,s__14498__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14500),null);
}
} else {
var ch = cljs.core.first.call(null,s__14498__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ch,(function (){var metric = f.measureText(ch,size);
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"width","width",-384071477),metric.width,new cljs.core.Keyword(null,"height","height",1025178622),metric.height,new cljs.core.Keyword(null,"leading","leading",-1239035032),metric.leading,new cljs.core.Keyword(null,"ascent","ascent",-1986032338),metric.ascent,new cljs.core.Keyword(null,"descent","descent",1331783219),metric.descent,new cljs.core.Keyword(null,"bounds","bounds",1691609455),metric.bounds], null);
})()], null),iter__14497.call(null,cljs.core.rest.call(null,s__14498__$2)));
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
var make_text__delegate = function (font,str,p__14502){
var map__14504 = p__14502;
var map__14504__$1 = ((cljs.core.seq_QMARK_.call(null,map__14504))?cljs.core.apply.call(null,cljs.core.hash_map,map__14504):map__14504);
var dropShadowColor = cljs.core.get.call(null,map__14504__$1,new cljs.core.Keyword(null,"dropShadowColor","dropShadowColor",-318037852),"#444444");
var dropShadow = cljs.core.get.call(null,map__14504__$1,new cljs.core.Keyword(null,"dropShadow","dropShadow",1001370187),false);
var strokeThickness = cljs.core.get.call(null,map__14504__$1,new cljs.core.Keyword(null,"strokeThickness","strokeThickness",-1303725323),(0));
var stroke = cljs.core.get.call(null,map__14504__$1,new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#ffffff");
var weight = cljs.core.get.call(null,map__14504__$1,new cljs.core.Keyword(null,"weight","weight",-1262796205),(400));
var style = cljs.core.get.call(null,map__14504__$1,new cljs.core.Keyword(null,"style","style",-496642736),"normal");
var align = cljs.core.get.call(null,map__14504__$1,new cljs.core.Keyword(null,"align","align",1964212802),"left");
var fill = cljs.core.get.call(null,map__14504__$1,new cljs.core.Keyword(null,"fill","fill",883462889),"#ffffff");
var spr = (new PIXI.Text(str,{"strokeThickness": strokeThickness, "weight": weight, "style": style, "font": font, "dropShadow": dropShadow, "fill": fill, "dropShadowColor": dropShadowColor, "stroke": stroke, "align": align}));
spr.anchor.x = 0.5;

spr.anchor.y = 0.5;

return spr;
};
var make_text = function (font,str,var_args){
var p__14502 = null;
if (arguments.length > 2) {
  p__14502 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return make_text__delegate.call(this,font,str,p__14502);};
make_text.cljs$lang$maxFixedArity = 2;
make_text.cljs$lang$applyTo = (function (arglist__14505){
var font = cljs.core.first(arglist__14505);
arglist__14505 = cljs.core.next(arglist__14505);
var str = cljs.core.first(arglist__14505);
var p__14502 = cljs.core.rest(arglist__14505);
return make_text__delegate(font,str,p__14502);
});
make_text.cljs$core$IFn$_invoke$arity$variadic = make_text__delegate;
return make_text;
})()
;
farn.font.font_metrics = (function font_metrics(font_str){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4386__auto__ = (function iter__14510(s__14511){
return (new cljs.core.LazySeq(null,(function (){
var s__14511__$1 = s__14511;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__14511__$1);
if(temp__4126__auto__){
var s__14511__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__14511__$2)){
var c__4384__auto__ = cljs.core.chunk_first.call(null,s__14511__$2);
var size__4385__auto__ = cljs.core.count.call(null,c__4384__auto__);
var b__14513 = cljs.core.chunk_buffer.call(null,size__4385__auto__);
if((function (){var i__14512 = (0);
while(true){
if((i__14512 < size__4385__auto__)){
var c = cljs.core._nth.call(null,c__4384__auto__,i__14512);
cljs.core.chunk_append.call(null,b__14513,(function (){var t = farn.font.make_text.call(null,font_str,c);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"width","width",-384071477),t.width,new cljs.core.Keyword(null,"height","height",1025178622),t.height,new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t.width,t.height], null),new cljs.core.Keyword(null,"texture","texture",-266291651),t], null)], null);
})());

var G__14514 = (i__14512 + (1));
i__14512 = G__14514;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14513),iter__14510.call(null,cljs.core.chunk_rest.call(null,s__14511__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14513),null);
}
} else {
var c = cljs.core.first.call(null,s__14511__$2);
return cljs.core.cons.call(null,(function (){var t = farn.font.make_text.call(null,font_str,c);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"width","width",-384071477),t.width,new cljs.core.Keyword(null,"height","height",1025178622),t.height,new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t.width,t.height], null),new cljs.core.Keyword(null,"texture","texture",-266291651),t], null)], null);
})(),iter__14510.call(null,cljs.core.rest.call(null,s__14511__$2)));
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
return cljs.core.reduce.call(null,cljs.core._PLUS_,(function (){var iter__4386__auto__ = (function iter__14519(s__14520){
return (new cljs.core.LazySeq(null,(function (){
var s__14520__$1 = s__14520;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__14520__$1);
if(temp__4126__auto__){
var s__14520__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__14520__$2)){
var c__4384__auto__ = cljs.core.chunk_first.call(null,s__14520__$2);
var size__4385__auto__ = cljs.core.count.call(null,c__4384__auto__);
var b__14522 = cljs.core.chunk_buffer.call(null,size__4385__auto__);
if((function (){var i__14521 = (0);
while(true){
if((i__14521 < size__4385__auto__)){
var c = cljs.core._nth.call(null,c__4384__auto__,i__14521);
cljs.core.chunk_append.call(null,b__14522,new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(metrics.call(null,c)));

var G__14523 = (i__14521 + (1));
i__14521 = G__14523;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14522),iter__14519.call(null,cljs.core.chunk_rest.call(null,s__14520__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14522),null);
}
} else {
var c = cljs.core.first.call(null,s__14520__$2);
return cljs.core.cons.call(null,new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(metrics.call(null,c)),iter__14519.call(null,cljs.core.rest.call(null,s__14520__$2)));
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
return cljs.core.reduce.call(null,cljs.core.max,(function (){var iter__4386__auto__ = (function iter__14528(s__14529){
return (new cljs.core.LazySeq(null,(function (){
var s__14529__$1 = s__14529;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__14529__$1);
if(temp__4126__auto__){
var s__14529__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__14529__$2)){
var c__4384__auto__ = cljs.core.chunk_first.call(null,s__14529__$2);
var size__4385__auto__ = cljs.core.count.call(null,c__4384__auto__);
var b__14531 = cljs.core.chunk_buffer.call(null,size__4385__auto__);
if((function (){var i__14530 = (0);
while(true){
if((i__14530 < size__4385__auto__)){
var c = cljs.core._nth.call(null,c__4384__auto__,i__14530);
cljs.core.chunk_append.call(null,b__14531,new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(metrics.call(null,c)));

var G__14532 = (i__14530 + (1));
i__14530 = G__14532;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14531),iter__14528.call(null,cljs.core.chunk_rest.call(null,s__14529__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14531),null);
}
} else {
var c = cljs.core.first.call(null,s__14529__$2);
return cljs.core.cons.call(null,new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(metrics.call(null,c)),iter__14528.call(null,cljs.core.rest.call(null,s__14529__$2)));
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
var iter__4386__auto__ = (function iter__14569(s__14570){
return (new cljs.core.LazySeq(null,(function (){
var s__14570__$1 = s__14570;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__14570__$1);
if(temp__4126__auto__){
var s__14570__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__14570__$2)){
var c__4384__auto__ = cljs.core.chunk_first.call(null,s__14570__$2);
var size__4385__auto__ = cljs.core.count.call(null,c__4384__auto__);
var b__14572 = cljs.core.chunk_buffer.call(null,size__4385__auto__);
if((function (){var i__14571 = (0);
while(true){
if((i__14571 < size__4385__auto__)){
var charset = cljs.core._nth.call(null,c__4384__auto__,i__14571);
cljs.core.chunk_append.call(null,b__14572,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.reduce.call(null,cljs.core._PLUS_,(function (){var iter__4386__auto__ = ((function (i__14571,charset,c__4384__auto__,size__4385__auto__,b__14572,s__14570__$2,temp__4126__auto__){
return (function iter__14589(s__14590){
return (new cljs.core.LazySeq(null,((function (i__14571,charset,c__4384__auto__,size__4385__auto__,b__14572,s__14570__$2,temp__4126__auto__){
return (function (){
var s__14590__$1 = s__14590;
while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__14590__$1);
if(temp__4126__auto____$1){
var s__14590__$2 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__14590__$2)){
var c__4384__auto____$1 = cljs.core.chunk_first.call(null,s__14590__$2);
var size__4385__auto____$1 = cljs.core.count.call(null,c__4384__auto____$1);
var b__14592 = cljs.core.chunk_buffer.call(null,size__4385__auto____$1);
if((function (){var i__14591 = (0);
while(true){
if((i__14591 < size__4385__auto____$1)){
var c = cljs.core._nth.call(null,c__4384__auto____$1,i__14591);
cljs.core.chunk_append.call(null,b__14592,new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(metrics.call(null,c)));

var G__14605 = (i__14591 + (1));
i__14591 = G__14605;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14592),iter__14589.call(null,cljs.core.chunk_rest.call(null,s__14590__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14592),null);
}
} else {
var c = cljs.core.first.call(null,s__14590__$2);
return cljs.core.cons.call(null,new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(metrics.call(null,c)),iter__14589.call(null,cljs.core.rest.call(null,s__14590__$2)));
}
} else {
return null;
}
break;
}
});})(i__14571,charset,c__4384__auto__,size__4385__auto__,b__14572,s__14570__$2,temp__4126__auto__))
,null,null));
});})(i__14571,charset,c__4384__auto__,size__4385__auto__,b__14572,s__14570__$2,temp__4126__auto__))
;
return iter__4386__auto__.call(null,charset);
})()),cljs.core.reduce.call(null,cljs.core.max,(function (){var iter__4386__auto__ = ((function (i__14571,charset,c__4384__auto__,size__4385__auto__,b__14572,s__14570__$2,temp__4126__auto__){
return (function iter__14593(s__14594){
return (new cljs.core.LazySeq(null,((function (i__14571,charset,c__4384__auto__,size__4385__auto__,b__14572,s__14570__$2,temp__4126__auto__){
return (function (){
var s__14594__$1 = s__14594;
while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__14594__$1);
if(temp__4126__auto____$1){
var s__14594__$2 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__14594__$2)){
var c__4384__auto____$1 = cljs.core.chunk_first.call(null,s__14594__$2);
var size__4385__auto____$1 = cljs.core.count.call(null,c__4384__auto____$1);
var b__14596 = cljs.core.chunk_buffer.call(null,size__4385__auto____$1);
if((function (){var i__14595 = (0);
while(true){
if((i__14595 < size__4385__auto____$1)){
var c = cljs.core._nth.call(null,c__4384__auto____$1,i__14595);
cljs.core.chunk_append.call(null,b__14596,new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(metrics.call(null,c)));

var G__14606 = (i__14595 + (1));
i__14595 = G__14606;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14596),iter__14593.call(null,cljs.core.chunk_rest.call(null,s__14594__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14596),null);
}
} else {
var c = cljs.core.first.call(null,s__14594__$2);
return cljs.core.cons.call(null,new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(metrics.call(null,c)),iter__14593.call(null,cljs.core.rest.call(null,s__14594__$2)));
}
} else {
return null;
}
break;
}
});})(i__14571,charset,c__4384__auto__,size__4385__auto__,b__14572,s__14570__$2,temp__4126__auto__))
,null,null));
});})(i__14571,charset,c__4384__auto__,size__4385__auto__,b__14572,s__14570__$2,temp__4126__auto__))
;
return iter__4386__auto__.call(null,charset);
})())], null));

var G__14607 = (i__14571 + (1));
i__14571 = G__14607;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14572),iter__14569.call(null,cljs.core.chunk_rest.call(null,s__14570__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14572),null);
}
} else {
var charset = cljs.core.first.call(null,s__14570__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.reduce.call(null,cljs.core._PLUS_,(function (){var iter__4386__auto__ = ((function (charset,s__14570__$2,temp__4126__auto__){
return (function iter__14597(s__14598){
return (new cljs.core.LazySeq(null,((function (charset,s__14570__$2,temp__4126__auto__){
return (function (){
var s__14598__$1 = s__14598;
while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__14598__$1);
if(temp__4126__auto____$1){
var s__14598__$2 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__14598__$2)){
var c__4384__auto__ = cljs.core.chunk_first.call(null,s__14598__$2);
var size__4385__auto__ = cljs.core.count.call(null,c__4384__auto__);
var b__14600 = cljs.core.chunk_buffer.call(null,size__4385__auto__);
if((function (){var i__14599 = (0);
while(true){
if((i__14599 < size__4385__auto__)){
var c = cljs.core._nth.call(null,c__4384__auto__,i__14599);
cljs.core.chunk_append.call(null,b__14600,new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(metrics.call(null,c)));

var G__14608 = (i__14599 + (1));
i__14599 = G__14608;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14600),iter__14597.call(null,cljs.core.chunk_rest.call(null,s__14598__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14600),null);
}
} else {
var c = cljs.core.first.call(null,s__14598__$2);
return cljs.core.cons.call(null,new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(metrics.call(null,c)),iter__14597.call(null,cljs.core.rest.call(null,s__14598__$2)));
}
} else {
return null;
}
break;
}
});})(charset,s__14570__$2,temp__4126__auto__))
,null,null));
});})(charset,s__14570__$2,temp__4126__auto__))
;
return iter__4386__auto__.call(null,charset);
})()),cljs.core.reduce.call(null,cljs.core.max,(function (){var iter__4386__auto__ = ((function (charset,s__14570__$2,temp__4126__auto__){
return (function iter__14601(s__14602){
return (new cljs.core.LazySeq(null,((function (charset,s__14570__$2,temp__4126__auto__){
return (function (){
var s__14602__$1 = s__14602;
while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__14602__$1);
if(temp__4126__auto____$1){
var s__14602__$2 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__14602__$2)){
var c__4384__auto__ = cljs.core.chunk_first.call(null,s__14602__$2);
var size__4385__auto__ = cljs.core.count.call(null,c__4384__auto__);
var b__14604 = cljs.core.chunk_buffer.call(null,size__4385__auto__);
if((function (){var i__14603 = (0);
while(true){
if((i__14603 < size__4385__auto__)){
var c = cljs.core._nth.call(null,c__4384__auto__,i__14603);
cljs.core.chunk_append.call(null,b__14604,new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(metrics.call(null,c)));

var G__14609 = (i__14603 + (1));
i__14603 = G__14609;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14604),iter__14601.call(null,cljs.core.chunk_rest.call(null,s__14602__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14604),null);
}
} else {
var c = cljs.core.first.call(null,s__14602__$2);
return cljs.core.cons.call(null,new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(metrics.call(null,c)),iter__14601.call(null,cljs.core.rest.call(null,s__14602__$2)));
}
} else {
return null;
}
break;
}
});})(charset,s__14570__$2,temp__4126__auto__))
,null,null));
});})(charset,s__14570__$2,temp__4126__auto__))
;
return iter__4386__auto__.call(null,charset);
})())], null),iter__14569.call(null,cljs.core.rest.call(null,s__14570__$2)));
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
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.reduce.call(null,cljs.core.max,(function (){var iter__4386__auto__ = (function iter__14626(s__14627){
return (new cljs.core.LazySeq(null,(function (){
var s__14627__$1 = s__14627;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__14627__$1);
if(temp__4126__auto__){
var s__14627__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__14627__$2)){
var c__4384__auto__ = cljs.core.chunk_first.call(null,s__14627__$2);
var size__4385__auto__ = cljs.core.count.call(null,c__4384__auto__);
var b__14629 = cljs.core.chunk_buffer.call(null,size__4385__auto__);
if((function (){var i__14628 = (0);
while(true){
if((i__14628 < size__4385__auto__)){
var vec__14632 = cljs.core._nth.call(null,c__4384__auto__,i__14628);
var w = cljs.core.nth.call(null,vec__14632,(0),null);
var h = cljs.core.nth.call(null,vec__14632,(1),null);
cljs.core.chunk_append.call(null,b__14629,w);

var G__14642 = (i__14628 + (1));
i__14628 = G__14642;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14629),iter__14626.call(null,cljs.core.chunk_rest.call(null,s__14627__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14629),null);
}
} else {
var vec__14633 = cljs.core.first.call(null,s__14627__$2);
var w = cljs.core.nth.call(null,vec__14633,(0),null);
var h = cljs.core.nth.call(null,vec__14633,(1),null);
return cljs.core.cons.call(null,w,iter__14626.call(null,cljs.core.rest.call(null,s__14627__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4386__auto__.call(null,rows);
})()),cljs.core.reduce.call(null,cljs.core._PLUS_,(function (){var iter__4386__auto__ = (function iter__14634(s__14635){
return (new cljs.core.LazySeq(null,(function (){
var s__14635__$1 = s__14635;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__14635__$1);
if(temp__4126__auto__){
var s__14635__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__14635__$2)){
var c__4384__auto__ = cljs.core.chunk_first.call(null,s__14635__$2);
var size__4385__auto__ = cljs.core.count.call(null,c__4384__auto__);
var b__14637 = cljs.core.chunk_buffer.call(null,size__4385__auto__);
if((function (){var i__14636 = (0);
while(true){
if((i__14636 < size__4385__auto__)){
var vec__14640 = cljs.core._nth.call(null,c__4384__auto__,i__14636);
var w = cljs.core.nth.call(null,vec__14640,(0),null);
var h = cljs.core.nth.call(null,vec__14640,(1),null);
cljs.core.chunk_append.call(null,b__14637,h);

var G__14643 = (i__14636 + (1));
i__14636 = G__14643;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14637),iter__14634.call(null,cljs.core.chunk_rest.call(null,s__14635__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14637),null);
}
} else {
var vec__14641 = cljs.core.first.call(null,s__14635__$2);
var w = cljs.core.nth.call(null,vec__14641,(0),null);
var h = cljs.core.nth.call(null,vec__14641,(1),null);
return cljs.core.cons.call(null,h,iter__14634.call(null,cljs.core.rest.call(null,s__14635__$2)));
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
var iter__4386__auto__ = (function iter__14652(s__14653){
return (new cljs.core.LazySeq(null,(function (){
var s__14653__$1 = s__14653;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__14653__$1);
if(temp__4126__auto__){
var s__14653__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__14653__$2)){
var c__4384__auto__ = cljs.core.chunk_first.call(null,s__14653__$2);
var size__4385__auto__ = cljs.core.count.call(null,c__4384__auto__);
var b__14655 = cljs.core.chunk_buffer.call(null,size__4385__auto__);
if((function (){var i__14654 = (0);
while(true){
if((i__14654 < size__4385__auto__)){
var vec__14658 = cljs.core._nth.call(null,c__4384__auto__,i__14654);
var i = cljs.core.nth.call(null,vec__14658,(0),null);
var c = cljs.core.nth.call(null,vec__14658,(1),null);
cljs.core.chunk_append.call(null,b__14655,(function (){var tex = farn.font.render_texture_char_BANG_.call(null,texture,metrics,c,farn.font.x_position.call(null,metrics,row,i),y);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [farn.font.x_position.call(null,metrics,row,i),y], null)], null);
})());

var G__14660 = (i__14654 + (1));
i__14654 = G__14660;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14655),iter__14652.call(null,cljs.core.chunk_rest.call(null,s__14653__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14655),null);
}
} else {
var vec__14659 = cljs.core.first.call(null,s__14653__$2);
var i = cljs.core.nth.call(null,vec__14659,(0),null);
var c = cljs.core.nth.call(null,vec__14659,(1),null);
return cljs.core.cons.call(null,(function (){var tex = farn.font.render_texture_char_BANG_.call(null,texture,metrics,c,farn.font.x_position.call(null,metrics,row,i),y);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [farn.font.x_position.call(null,metrics,row,i),y], null)], null);
})(),iter__14652.call(null,cljs.core.rest.call(null,s__14653__$2)));
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
var G__14661 = b;
var G__14662 = cljs.core.into.call(null,d,details);
var G__14663 = (i + (1));
var G__14664 = cljs.core.rest.call(null,chars);
b = G__14661;
d = G__14662;
i = G__14663;
chars = G__14664;
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
var vec__14666 = farn.font.calculate_font_layout_size.call(null,farn.font.make_rowset_sizes.call(null,metrics,farn.font.printable_characters));
var w = cljs.core.nth.call(null,vec__14666,(0),null);
var h = cljs.core.nth.call(null,vec__14666,(1),null);
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
var font_make_batch__delegate = function (font,text,p__14667){
var map__14670 = p__14667;
var map__14670__$1 = ((cljs.core.seq_QMARK_.call(null,map__14670))?cljs.core.apply.call(null,cljs.core.hash_map,map__14670):map__14670);
var options = map__14670__$1;
var y = cljs.core.get.call(null,map__14670__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var x = cljs.core.get.call(null,map__14670__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var buff = new cljs.core.Keyword(null,"texture","texture",-266291651).cljs$core$IFn$_invoke$arity$1(font);
var metrics = new cljs.core.Keyword(null,"metrics","metrics",394093469).cljs$core$IFn$_invoke$arity$1(font);
var sb = (new PIXI.SpriteBatch(buff));
var _ = sb.pivot.x = ((farn.font.text_width.call(null,metrics,text) / (2)) | (0));
var ___$1 = sb.pivot.y = ((farn.font.text_height.call(null,metrics,text) / (2)) | (0));
var t_14672 = text;
var xp_14673 = x;
while(true){
var c_14674 = cljs.core.first.call(null,t_14672);
var r_14675 = cljs.core.rest.call(null,t_14672);
var vec__14671_14676 = new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(metrics.call(null,c_14674));
var w_14677 = cljs.core.nth.call(null,vec__14671_14676,(0),null);
var h_14678 = cljs.core.nth.call(null,vec__14671_14676,(1),null);
var s_14679 = farn.gfx.make_sprite.call(null,farn.font.font_char_sub_texture.call(null,font,c_14674),new cljs.core.Keyword(null,"x","x",2099068185),xp_14673,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"xhandle","xhandle",373504767),(0),new cljs.core.Keyword(null,"yhandle","yhandle",608395252),(0));
sb.addChild(s_14679);

if(!(cljs.core.empty_QMARK_.call(null,r_14675))){
var G__14680 = r_14675;
var G__14681 = (xp_14673 + w_14677);
t_14672 = G__14680;
xp_14673 = G__14681;
continue;
} else {
}
break;
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sprite","sprite",172516848),sb,new cljs.core.Keyword(null,"font","font",-1506159249),font], null);
};
var font_make_batch = function (font,text,var_args){
var p__14667 = null;
if (arguments.length > 2) {
  p__14667 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return font_make_batch__delegate.call(this,font,text,p__14667);};
font_make_batch.cljs$lang$maxFixedArity = 2;
font_make_batch.cljs$lang$applyTo = (function (arglist__14682){
var font = cljs.core.first(arglist__14682);
arglist__14682 = cljs.core.next(arglist__14682);
var text = cljs.core.first(arglist__14682);
var p__14667 = cljs.core.rest(arglist__14682);
return font_make_batch__delegate(font,text,p__14667);
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
farn.font.batch_add = (function batch_add(batch,p__14683,text){
var vec__14686 = p__14683;
var x = cljs.core.nth.call(null,vec__14686,(0),null);
var y = cljs.core.nth.call(null,vec__14686,(1),null);
var font = new cljs.core.Keyword(null,"font","font",-1506159249).cljs$core$IFn$_invoke$arity$1(batch);
var sb = new cljs.core.Keyword(null,"sprite","sprite",172516848).cljs$core$IFn$_invoke$arity$1(batch);
var metrics = new cljs.core.Keyword(null,"metrics","metrics",394093469).cljs$core$IFn$_invoke$arity$1(font);
var t = text;
var xp = (0);
while(true){
var c = cljs.core.first.call(null,t);
var r = cljs.core.rest.call(null,t);
var vec__14687 = new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(metrics.call(null,c));
var w = cljs.core.nth.call(null,vec__14687,(0),null);
var h = cljs.core.nth.call(null,vec__14687,(1),null);
var s = farn.gfx.make_sprite.call(null,farn.font.font_char_sub_texture.call(null,font,c),new cljs.core.Keyword(null,"x","x",2099068185),(x + xp),new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"xhandle","xhandle",373504767),(0),new cljs.core.Keyword(null,"yhandle","yhandle",608395252),(0));
farn.utils.log.call(null,c,(x + xp),y);

sb.addChild(s);

if(!(cljs.core.empty_QMARK_.call(null,r))){
var G__14688 = r;
var G__14689 = (xp + w);
t = G__14688;
xp = G__14689;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((xp + w) + x),y], null);
}
break;
}
});

//# sourceMappingURL=font.js.map