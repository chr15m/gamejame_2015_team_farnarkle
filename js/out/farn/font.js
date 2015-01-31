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
return (function iter__14544(s__14545){
return (new cljs.core.LazySeq(null,((function (f,c){
return (function (){
var s__14545__$1 = s__14545;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__14545__$1);
if(temp__4126__auto__){
var s__14545__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__14545__$2)){
var c__4384__auto__ = cljs.core.chunk_first.call(null,s__14545__$2);
var size__4385__auto__ = cljs.core.count.call(null,c__4384__auto__);
var b__14547 = cljs.core.chunk_buffer.call(null,size__4385__auto__);
if((function (){var i__14546 = (0);
while(true){
if((i__14546 < size__4385__auto__)){
var ch = cljs.core._nth.call(null,c__4384__auto__,i__14546);
cljs.core.chunk_append.call(null,b__14547,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ch,(function (){var metric = f.measureText(ch,size);
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"width","width",-384071477),metric.width,new cljs.core.Keyword(null,"height","height",1025178622),metric.height,new cljs.core.Keyword(null,"leading","leading",-1239035032),metric.leading,new cljs.core.Keyword(null,"ascent","ascent",-1986032338),metric.ascent,new cljs.core.Keyword(null,"descent","descent",1331783219),metric.descent,new cljs.core.Keyword(null,"bounds","bounds",1691609455),metric.bounds], null);
})()], null));

var G__14548 = (i__14546 + (1));
i__14546 = G__14548;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14547),iter__14544.call(null,cljs.core.chunk_rest.call(null,s__14545__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14547),null);
}
} else {
var ch = cljs.core.first.call(null,s__14545__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ch,(function (){var metric = f.measureText(ch,size);
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"width","width",-384071477),metric.width,new cljs.core.Keyword(null,"height","height",1025178622),metric.height,new cljs.core.Keyword(null,"leading","leading",-1239035032),metric.leading,new cljs.core.Keyword(null,"ascent","ascent",-1986032338),metric.ascent,new cljs.core.Keyword(null,"descent","descent",1331783219),metric.descent,new cljs.core.Keyword(null,"bounds","bounds",1691609455),metric.bounds], null);
})()], null),iter__14544.call(null,cljs.core.rest.call(null,s__14545__$2)));
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
var make_text__delegate = function (font,str,p__14549){
var map__14551 = p__14549;
var map__14551__$1 = ((cljs.core.seq_QMARK_.call(null,map__14551))?cljs.core.apply.call(null,cljs.core.hash_map,map__14551):map__14551);
var dropShadowColor = cljs.core.get.call(null,map__14551__$1,new cljs.core.Keyword(null,"dropShadowColor","dropShadowColor",-318037852),"#444444");
var dropShadow = cljs.core.get.call(null,map__14551__$1,new cljs.core.Keyword(null,"dropShadow","dropShadow",1001370187),false);
var strokeThickness = cljs.core.get.call(null,map__14551__$1,new cljs.core.Keyword(null,"strokeThickness","strokeThickness",-1303725323),(0));
var stroke = cljs.core.get.call(null,map__14551__$1,new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#ffffff");
var weight = cljs.core.get.call(null,map__14551__$1,new cljs.core.Keyword(null,"weight","weight",-1262796205),(400));
var style = cljs.core.get.call(null,map__14551__$1,new cljs.core.Keyword(null,"style","style",-496642736),"normal");
var align = cljs.core.get.call(null,map__14551__$1,new cljs.core.Keyword(null,"align","align",1964212802),"left");
var fill = cljs.core.get.call(null,map__14551__$1,new cljs.core.Keyword(null,"fill","fill",883462889),"#ffffff");
var spr = (new PIXI.Text(str,{"strokeThickness": strokeThickness, "weight": weight, "style": style, "font": font, "dropShadow": dropShadow, "fill": fill, "dropShadowColor": dropShadowColor, "stroke": stroke, "align": align}));
spr.anchor.x = 0.5;

spr.anchor.y = 0.5;

return spr;
};
var make_text = function (font,str,var_args){
var p__14549 = null;
if (arguments.length > 2) {
  p__14549 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return make_text__delegate.call(this,font,str,p__14549);};
make_text.cljs$lang$maxFixedArity = 2;
make_text.cljs$lang$applyTo = (function (arglist__14552){
var font = cljs.core.first(arglist__14552);
arglist__14552 = cljs.core.next(arglist__14552);
var str = cljs.core.first(arglist__14552);
var p__14549 = cljs.core.rest(arglist__14552);
return make_text__delegate(font,str,p__14549);
});
make_text.cljs$core$IFn$_invoke$arity$variadic = make_text__delegate;
return make_text;
})()
;
farn.font.font_metrics = (function font_metrics(font_str){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4386__auto__ = (function iter__14557(s__14558){
return (new cljs.core.LazySeq(null,(function (){
var s__14558__$1 = s__14558;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__14558__$1);
if(temp__4126__auto__){
var s__14558__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__14558__$2)){
var c__4384__auto__ = cljs.core.chunk_first.call(null,s__14558__$2);
var size__4385__auto__ = cljs.core.count.call(null,c__4384__auto__);
var b__14560 = cljs.core.chunk_buffer.call(null,size__4385__auto__);
if((function (){var i__14559 = (0);
while(true){
if((i__14559 < size__4385__auto__)){
var c = cljs.core._nth.call(null,c__4384__auto__,i__14559);
cljs.core.chunk_append.call(null,b__14560,(function (){var t = farn.font.make_text.call(null,font_str,c);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"width","width",-384071477),t.width,new cljs.core.Keyword(null,"height","height",1025178622),t.height,new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t.width,t.height], null),new cljs.core.Keyword(null,"texture","texture",-266291651),t], null)], null);
})());

var G__14561 = (i__14559 + (1));
i__14559 = G__14561;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14560),iter__14557.call(null,cljs.core.chunk_rest.call(null,s__14558__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14560),null);
}
} else {
var c = cljs.core.first.call(null,s__14558__$2);
return cljs.core.cons.call(null,(function (){var t = farn.font.make_text.call(null,font_str,c);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"width","width",-384071477),t.width,new cljs.core.Keyword(null,"height","height",1025178622),t.height,new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t.width,t.height], null),new cljs.core.Keyword(null,"texture","texture",-266291651),t], null)], null);
})(),iter__14557.call(null,cljs.core.rest.call(null,s__14558__$2)));
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
return cljs.core.reduce.call(null,cljs.core._PLUS_,(function (){var iter__4386__auto__ = (function iter__14566(s__14567){
return (new cljs.core.LazySeq(null,(function (){
var s__14567__$1 = s__14567;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__14567__$1);
if(temp__4126__auto__){
var s__14567__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__14567__$2)){
var c__4384__auto__ = cljs.core.chunk_first.call(null,s__14567__$2);
var size__4385__auto__ = cljs.core.count.call(null,c__4384__auto__);
var b__14569 = cljs.core.chunk_buffer.call(null,size__4385__auto__);
if((function (){var i__14568 = (0);
while(true){
if((i__14568 < size__4385__auto__)){
var c = cljs.core._nth.call(null,c__4384__auto__,i__14568);
cljs.core.chunk_append.call(null,b__14569,new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(metrics.call(null,c)));

var G__14570 = (i__14568 + (1));
i__14568 = G__14570;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14569),iter__14566.call(null,cljs.core.chunk_rest.call(null,s__14567__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14569),null);
}
} else {
var c = cljs.core.first.call(null,s__14567__$2);
return cljs.core.cons.call(null,new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(metrics.call(null,c)),iter__14566.call(null,cljs.core.rest.call(null,s__14567__$2)));
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
return cljs.core.reduce.call(null,cljs.core.max,(function (){var iter__4386__auto__ = (function iter__14575(s__14576){
return (new cljs.core.LazySeq(null,(function (){
var s__14576__$1 = s__14576;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__14576__$1);
if(temp__4126__auto__){
var s__14576__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__14576__$2)){
var c__4384__auto__ = cljs.core.chunk_first.call(null,s__14576__$2);
var size__4385__auto__ = cljs.core.count.call(null,c__4384__auto__);
var b__14578 = cljs.core.chunk_buffer.call(null,size__4385__auto__);
if((function (){var i__14577 = (0);
while(true){
if((i__14577 < size__4385__auto__)){
var c = cljs.core._nth.call(null,c__4384__auto__,i__14577);
cljs.core.chunk_append.call(null,b__14578,new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(metrics.call(null,c)));

var G__14579 = (i__14577 + (1));
i__14577 = G__14579;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14578),iter__14575.call(null,cljs.core.chunk_rest.call(null,s__14576__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14578),null);
}
} else {
var c = cljs.core.first.call(null,s__14576__$2);
return cljs.core.cons.call(null,new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(metrics.call(null,c)),iter__14575.call(null,cljs.core.rest.call(null,s__14576__$2)));
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
var iter__4386__auto__ = (function iter__14616(s__14617){
return (new cljs.core.LazySeq(null,(function (){
var s__14617__$1 = s__14617;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__14617__$1);
if(temp__4126__auto__){
var s__14617__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__14617__$2)){
var c__4384__auto__ = cljs.core.chunk_first.call(null,s__14617__$2);
var size__4385__auto__ = cljs.core.count.call(null,c__4384__auto__);
var b__14619 = cljs.core.chunk_buffer.call(null,size__4385__auto__);
if((function (){var i__14618 = (0);
while(true){
if((i__14618 < size__4385__auto__)){
var charset = cljs.core._nth.call(null,c__4384__auto__,i__14618);
cljs.core.chunk_append.call(null,b__14619,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.reduce.call(null,cljs.core._PLUS_,(function (){var iter__4386__auto__ = ((function (i__14618,charset,c__4384__auto__,size__4385__auto__,b__14619,s__14617__$2,temp__4126__auto__){
return (function iter__14636(s__14637){
return (new cljs.core.LazySeq(null,((function (i__14618,charset,c__4384__auto__,size__4385__auto__,b__14619,s__14617__$2,temp__4126__auto__){
return (function (){
var s__14637__$1 = s__14637;
while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__14637__$1);
if(temp__4126__auto____$1){
var s__14637__$2 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__14637__$2)){
var c__4384__auto____$1 = cljs.core.chunk_first.call(null,s__14637__$2);
var size__4385__auto____$1 = cljs.core.count.call(null,c__4384__auto____$1);
var b__14639 = cljs.core.chunk_buffer.call(null,size__4385__auto____$1);
if((function (){var i__14638 = (0);
while(true){
if((i__14638 < size__4385__auto____$1)){
var c = cljs.core._nth.call(null,c__4384__auto____$1,i__14638);
cljs.core.chunk_append.call(null,b__14639,new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(metrics.call(null,c)));

var G__14652 = (i__14638 + (1));
i__14638 = G__14652;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14639),iter__14636.call(null,cljs.core.chunk_rest.call(null,s__14637__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14639),null);
}
} else {
var c = cljs.core.first.call(null,s__14637__$2);
return cljs.core.cons.call(null,new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(metrics.call(null,c)),iter__14636.call(null,cljs.core.rest.call(null,s__14637__$2)));
}
} else {
return null;
}
break;
}
});})(i__14618,charset,c__4384__auto__,size__4385__auto__,b__14619,s__14617__$2,temp__4126__auto__))
,null,null));
});})(i__14618,charset,c__4384__auto__,size__4385__auto__,b__14619,s__14617__$2,temp__4126__auto__))
;
return iter__4386__auto__.call(null,charset);
})()),cljs.core.reduce.call(null,cljs.core.max,(function (){var iter__4386__auto__ = ((function (i__14618,charset,c__4384__auto__,size__4385__auto__,b__14619,s__14617__$2,temp__4126__auto__){
return (function iter__14640(s__14641){
return (new cljs.core.LazySeq(null,((function (i__14618,charset,c__4384__auto__,size__4385__auto__,b__14619,s__14617__$2,temp__4126__auto__){
return (function (){
var s__14641__$1 = s__14641;
while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__14641__$1);
if(temp__4126__auto____$1){
var s__14641__$2 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__14641__$2)){
var c__4384__auto____$1 = cljs.core.chunk_first.call(null,s__14641__$2);
var size__4385__auto____$1 = cljs.core.count.call(null,c__4384__auto____$1);
var b__14643 = cljs.core.chunk_buffer.call(null,size__4385__auto____$1);
if((function (){var i__14642 = (0);
while(true){
if((i__14642 < size__4385__auto____$1)){
var c = cljs.core._nth.call(null,c__4384__auto____$1,i__14642);
cljs.core.chunk_append.call(null,b__14643,new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(metrics.call(null,c)));

var G__14653 = (i__14642 + (1));
i__14642 = G__14653;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14643),iter__14640.call(null,cljs.core.chunk_rest.call(null,s__14641__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14643),null);
}
} else {
var c = cljs.core.first.call(null,s__14641__$2);
return cljs.core.cons.call(null,new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(metrics.call(null,c)),iter__14640.call(null,cljs.core.rest.call(null,s__14641__$2)));
}
} else {
return null;
}
break;
}
});})(i__14618,charset,c__4384__auto__,size__4385__auto__,b__14619,s__14617__$2,temp__4126__auto__))
,null,null));
});})(i__14618,charset,c__4384__auto__,size__4385__auto__,b__14619,s__14617__$2,temp__4126__auto__))
;
return iter__4386__auto__.call(null,charset);
})())], null));

var G__14654 = (i__14618 + (1));
i__14618 = G__14654;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14619),iter__14616.call(null,cljs.core.chunk_rest.call(null,s__14617__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14619),null);
}
} else {
var charset = cljs.core.first.call(null,s__14617__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.reduce.call(null,cljs.core._PLUS_,(function (){var iter__4386__auto__ = ((function (charset,s__14617__$2,temp__4126__auto__){
return (function iter__14644(s__14645){
return (new cljs.core.LazySeq(null,((function (charset,s__14617__$2,temp__4126__auto__){
return (function (){
var s__14645__$1 = s__14645;
while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__14645__$1);
if(temp__4126__auto____$1){
var s__14645__$2 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__14645__$2)){
var c__4384__auto__ = cljs.core.chunk_first.call(null,s__14645__$2);
var size__4385__auto__ = cljs.core.count.call(null,c__4384__auto__);
var b__14647 = cljs.core.chunk_buffer.call(null,size__4385__auto__);
if((function (){var i__14646 = (0);
while(true){
if((i__14646 < size__4385__auto__)){
var c = cljs.core._nth.call(null,c__4384__auto__,i__14646);
cljs.core.chunk_append.call(null,b__14647,new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(metrics.call(null,c)));

var G__14655 = (i__14646 + (1));
i__14646 = G__14655;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14647),iter__14644.call(null,cljs.core.chunk_rest.call(null,s__14645__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14647),null);
}
} else {
var c = cljs.core.first.call(null,s__14645__$2);
return cljs.core.cons.call(null,new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(metrics.call(null,c)),iter__14644.call(null,cljs.core.rest.call(null,s__14645__$2)));
}
} else {
return null;
}
break;
}
});})(charset,s__14617__$2,temp__4126__auto__))
,null,null));
});})(charset,s__14617__$2,temp__4126__auto__))
;
return iter__4386__auto__.call(null,charset);
})()),cljs.core.reduce.call(null,cljs.core.max,(function (){var iter__4386__auto__ = ((function (charset,s__14617__$2,temp__4126__auto__){
return (function iter__14648(s__14649){
return (new cljs.core.LazySeq(null,((function (charset,s__14617__$2,temp__4126__auto__){
return (function (){
var s__14649__$1 = s__14649;
while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__14649__$1);
if(temp__4126__auto____$1){
var s__14649__$2 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__14649__$2)){
var c__4384__auto__ = cljs.core.chunk_first.call(null,s__14649__$2);
var size__4385__auto__ = cljs.core.count.call(null,c__4384__auto__);
var b__14651 = cljs.core.chunk_buffer.call(null,size__4385__auto__);
if((function (){var i__14650 = (0);
while(true){
if((i__14650 < size__4385__auto__)){
var c = cljs.core._nth.call(null,c__4384__auto__,i__14650);
cljs.core.chunk_append.call(null,b__14651,new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(metrics.call(null,c)));

var G__14656 = (i__14650 + (1));
i__14650 = G__14656;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14651),iter__14648.call(null,cljs.core.chunk_rest.call(null,s__14649__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14651),null);
}
} else {
var c = cljs.core.first.call(null,s__14649__$2);
return cljs.core.cons.call(null,new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(metrics.call(null,c)),iter__14648.call(null,cljs.core.rest.call(null,s__14649__$2)));
}
} else {
return null;
}
break;
}
});})(charset,s__14617__$2,temp__4126__auto__))
,null,null));
});})(charset,s__14617__$2,temp__4126__auto__))
;
return iter__4386__auto__.call(null,charset);
})())], null),iter__14616.call(null,cljs.core.rest.call(null,s__14617__$2)));
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
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.reduce.call(null,cljs.core.max,(function (){var iter__4386__auto__ = (function iter__14673(s__14674){
return (new cljs.core.LazySeq(null,(function (){
var s__14674__$1 = s__14674;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__14674__$1);
if(temp__4126__auto__){
var s__14674__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__14674__$2)){
var c__4384__auto__ = cljs.core.chunk_first.call(null,s__14674__$2);
var size__4385__auto__ = cljs.core.count.call(null,c__4384__auto__);
var b__14676 = cljs.core.chunk_buffer.call(null,size__4385__auto__);
if((function (){var i__14675 = (0);
while(true){
if((i__14675 < size__4385__auto__)){
var vec__14679 = cljs.core._nth.call(null,c__4384__auto__,i__14675);
var w = cljs.core.nth.call(null,vec__14679,(0),null);
var h = cljs.core.nth.call(null,vec__14679,(1),null);
cljs.core.chunk_append.call(null,b__14676,w);

var G__14689 = (i__14675 + (1));
i__14675 = G__14689;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14676),iter__14673.call(null,cljs.core.chunk_rest.call(null,s__14674__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14676),null);
}
} else {
var vec__14680 = cljs.core.first.call(null,s__14674__$2);
var w = cljs.core.nth.call(null,vec__14680,(0),null);
var h = cljs.core.nth.call(null,vec__14680,(1),null);
return cljs.core.cons.call(null,w,iter__14673.call(null,cljs.core.rest.call(null,s__14674__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4386__auto__.call(null,rows);
})()),cljs.core.reduce.call(null,cljs.core._PLUS_,(function (){var iter__4386__auto__ = (function iter__14681(s__14682){
return (new cljs.core.LazySeq(null,(function (){
var s__14682__$1 = s__14682;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__14682__$1);
if(temp__4126__auto__){
var s__14682__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__14682__$2)){
var c__4384__auto__ = cljs.core.chunk_first.call(null,s__14682__$2);
var size__4385__auto__ = cljs.core.count.call(null,c__4384__auto__);
var b__14684 = cljs.core.chunk_buffer.call(null,size__4385__auto__);
if((function (){var i__14683 = (0);
while(true){
if((i__14683 < size__4385__auto__)){
var vec__14687 = cljs.core._nth.call(null,c__4384__auto__,i__14683);
var w = cljs.core.nth.call(null,vec__14687,(0),null);
var h = cljs.core.nth.call(null,vec__14687,(1),null);
cljs.core.chunk_append.call(null,b__14684,h);

var G__14690 = (i__14683 + (1));
i__14683 = G__14690;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14684),iter__14681.call(null,cljs.core.chunk_rest.call(null,s__14682__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14684),null);
}
} else {
var vec__14688 = cljs.core.first.call(null,s__14682__$2);
var w = cljs.core.nth.call(null,vec__14688,(0),null);
var h = cljs.core.nth.call(null,vec__14688,(1),null);
return cljs.core.cons.call(null,h,iter__14681.call(null,cljs.core.rest.call(null,s__14682__$2)));
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
var iter__4386__auto__ = (function iter__14699(s__14700){
return (new cljs.core.LazySeq(null,(function (){
var s__14700__$1 = s__14700;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__14700__$1);
if(temp__4126__auto__){
var s__14700__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__14700__$2)){
var c__4384__auto__ = cljs.core.chunk_first.call(null,s__14700__$2);
var size__4385__auto__ = cljs.core.count.call(null,c__4384__auto__);
var b__14702 = cljs.core.chunk_buffer.call(null,size__4385__auto__);
if((function (){var i__14701 = (0);
while(true){
if((i__14701 < size__4385__auto__)){
var vec__14705 = cljs.core._nth.call(null,c__4384__auto__,i__14701);
var i = cljs.core.nth.call(null,vec__14705,(0),null);
var c = cljs.core.nth.call(null,vec__14705,(1),null);
cljs.core.chunk_append.call(null,b__14702,(function (){var tex = farn.font.render_texture_char_BANG_.call(null,texture,metrics,c,farn.font.x_position.call(null,metrics,row,i),y);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [farn.font.x_position.call(null,metrics,row,i),y], null)], null);
})());

var G__14707 = (i__14701 + (1));
i__14701 = G__14707;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14702),iter__14699.call(null,cljs.core.chunk_rest.call(null,s__14700__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14702),null);
}
} else {
var vec__14706 = cljs.core.first.call(null,s__14700__$2);
var i = cljs.core.nth.call(null,vec__14706,(0),null);
var c = cljs.core.nth.call(null,vec__14706,(1),null);
return cljs.core.cons.call(null,(function (){var tex = farn.font.render_texture_char_BANG_.call(null,texture,metrics,c,farn.font.x_position.call(null,metrics,row,i),y);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [farn.font.x_position.call(null,metrics,row,i),y], null)], null);
})(),iter__14699.call(null,cljs.core.rest.call(null,s__14700__$2)));
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
var G__14708 = b;
var G__14709 = cljs.core.into.call(null,d,details);
var G__14710 = (i + (1));
var G__14711 = cljs.core.rest.call(null,chars);
b = G__14708;
d = G__14709;
i = G__14710;
chars = G__14711;
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
var vec__14713 = farn.font.calculate_font_layout_size.call(null,farn.font.make_rowset_sizes.call(null,metrics,farn.font.printable_characters));
var w = cljs.core.nth.call(null,vec__14713,(0),null);
var h = cljs.core.nth.call(null,vec__14713,(1),null);
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
var font_make_batch__delegate = function (font,text,p__14714){
var map__14717 = p__14714;
var map__14717__$1 = ((cljs.core.seq_QMARK_.call(null,map__14717))?cljs.core.apply.call(null,cljs.core.hash_map,map__14717):map__14717);
var options = map__14717__$1;
var y = cljs.core.get.call(null,map__14717__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var x = cljs.core.get.call(null,map__14717__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var buff = new cljs.core.Keyword(null,"texture","texture",-266291651).cljs$core$IFn$_invoke$arity$1(font);
var metrics = new cljs.core.Keyword(null,"metrics","metrics",394093469).cljs$core$IFn$_invoke$arity$1(font);
var sb = (new PIXI.SpriteBatch(buff));
var _ = sb.pivot.x = ((farn.font.text_width.call(null,metrics,text) / (2)) | (0));
var ___$1 = sb.pivot.y = ((farn.font.text_height.call(null,metrics,text) / (2)) | (0));
var t_14719 = text;
var xp_14720 = x;
while(true){
var c_14721 = cljs.core.first.call(null,t_14719);
var r_14722 = cljs.core.rest.call(null,t_14719);
var vec__14718_14723 = new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(metrics.call(null,c_14721));
var w_14724 = cljs.core.nth.call(null,vec__14718_14723,(0),null);
var h_14725 = cljs.core.nth.call(null,vec__14718_14723,(1),null);
var s_14726 = farn.gfx.make_sprite.call(null,farn.font.font_char_sub_texture.call(null,font,c_14721),new cljs.core.Keyword(null,"x","x",2099068185),xp_14720,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"xhandle","xhandle",373504767),(0),new cljs.core.Keyword(null,"yhandle","yhandle",608395252),(0));
sb.addChild(s_14726);

if(!(cljs.core.empty_QMARK_.call(null,r_14722))){
var G__14727 = r_14722;
var G__14728 = (xp_14720 + w_14724);
t_14719 = G__14727;
xp_14720 = G__14728;
continue;
} else {
}
break;
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sprite","sprite",172516848),sb,new cljs.core.Keyword(null,"font","font",-1506159249),font], null);
};
var font_make_batch = function (font,text,var_args){
var p__14714 = null;
if (arguments.length > 2) {
  p__14714 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return font_make_batch__delegate.call(this,font,text,p__14714);};
font_make_batch.cljs$lang$maxFixedArity = 2;
font_make_batch.cljs$lang$applyTo = (function (arglist__14729){
var font = cljs.core.first(arglist__14729);
arglist__14729 = cljs.core.next(arglist__14729);
var text = cljs.core.first(arglist__14729);
var p__14714 = cljs.core.rest(arglist__14729);
return font_make_batch__delegate(font,text,p__14714);
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
farn.font.batch_add = (function batch_add(batch,p__14730,text){
var vec__14733 = p__14730;
var x = cljs.core.nth.call(null,vec__14733,(0),null);
var y = cljs.core.nth.call(null,vec__14733,(1),null);
var font = new cljs.core.Keyword(null,"font","font",-1506159249).cljs$core$IFn$_invoke$arity$1(batch);
var sb = new cljs.core.Keyword(null,"sprite","sprite",172516848).cljs$core$IFn$_invoke$arity$1(batch);
var metrics = new cljs.core.Keyword(null,"metrics","metrics",394093469).cljs$core$IFn$_invoke$arity$1(font);
var t = text;
var xp = (0);
while(true){
var c = cljs.core.first.call(null,t);
var r = cljs.core.rest.call(null,t);
var vec__14734 = new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(metrics.call(null,c));
var w = cljs.core.nth.call(null,vec__14734,(0),null);
var h = cljs.core.nth.call(null,vec__14734,(1),null);
var s = farn.gfx.make_sprite.call(null,farn.font.font_char_sub_texture.call(null,font,c),new cljs.core.Keyword(null,"x","x",2099068185),(x + xp),new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"xhandle","xhandle",373504767),(0),new cljs.core.Keyword(null,"yhandle","yhandle",608395252),(0));
farn.utils.log.call(null,c,(x + xp),y);

sb.addChild(s);

if(!(cljs.core.empty_QMARK_.call(null,r))){
var G__14735 = r;
var G__14736 = (xp + w);
t = G__14735;
xp = G__14736;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((xp + w) + x),y], null);
}
break;
}
});

//# sourceMappingURL=font.js.map