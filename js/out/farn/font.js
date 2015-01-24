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
return (function iter__11089(s__11090){
return (new cljs.core.LazySeq(null,((function (f,c){
return (function (){
var s__11090__$1 = s__11090;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__11090__$1);
if(temp__4126__auto__){
var s__11090__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__11090__$2)){
var c__4384__auto__ = cljs.core.chunk_first.call(null,s__11090__$2);
var size__4385__auto__ = cljs.core.count.call(null,c__4384__auto__);
var b__11092 = cljs.core.chunk_buffer.call(null,size__4385__auto__);
if((function (){var i__11091 = (0);
while(true){
if((i__11091 < size__4385__auto__)){
var ch = cljs.core._nth.call(null,c__4384__auto__,i__11091);
cljs.core.chunk_append.call(null,b__11092,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ch,(function (){var metric = f.measureText(ch,size);
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"width","width",-384071477),metric.width,new cljs.core.Keyword(null,"height","height",1025178622),metric.height,new cljs.core.Keyword(null,"leading","leading",-1239035032),metric.leading,new cljs.core.Keyword(null,"ascent","ascent",-1986032338),metric.ascent,new cljs.core.Keyword(null,"descent","descent",1331783219),metric.descent,new cljs.core.Keyword(null,"bounds","bounds",1691609455),metric.bounds], null);
})()], null));

var G__11093 = (i__11091 + (1));
i__11091 = G__11093;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11092),iter__11089.call(null,cljs.core.chunk_rest.call(null,s__11090__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11092),null);
}
} else {
var ch = cljs.core.first.call(null,s__11090__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ch,(function (){var metric = f.measureText(ch,size);
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"width","width",-384071477),metric.width,new cljs.core.Keyword(null,"height","height",1025178622),metric.height,new cljs.core.Keyword(null,"leading","leading",-1239035032),metric.leading,new cljs.core.Keyword(null,"ascent","ascent",-1986032338),metric.ascent,new cljs.core.Keyword(null,"descent","descent",1331783219),metric.descent,new cljs.core.Keyword(null,"bounds","bounds",1691609455),metric.bounds], null);
})()], null),iter__11089.call(null,cljs.core.rest.call(null,s__11090__$2)));
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
*/
farn.font.make_text = (function make_text(font,str){
return (new PIXI.Text(str,{"strokeThickness": (0), "weight": (400), "style": "normal", "font": font, "dropShadow": false, "fill": "#ffffff", "dropShadowColor": "#444444", "stroke": "#ffffff", "align": "left"}));
});
farn.font.font_metrics = (function font_metrics(font_str){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4386__auto__ = (function iter__11098(s__11099){
return (new cljs.core.LazySeq(null,(function (){
var s__11099__$1 = s__11099;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__11099__$1);
if(temp__4126__auto__){
var s__11099__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__11099__$2)){
var c__4384__auto__ = cljs.core.chunk_first.call(null,s__11099__$2);
var size__4385__auto__ = cljs.core.count.call(null,c__4384__auto__);
var b__11101 = cljs.core.chunk_buffer.call(null,size__4385__auto__);
if((function (){var i__11100 = (0);
while(true){
if((i__11100 < size__4385__auto__)){
var c = cljs.core._nth.call(null,c__4384__auto__,i__11100);
cljs.core.chunk_append.call(null,b__11101,(function (){var t = farn.font.make_text.call(null,font_str,c);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"width","width",-384071477),t.width,new cljs.core.Keyword(null,"height","height",1025178622),t.height,new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t.width,t.height], null),new cljs.core.Keyword(null,"texture","texture",-266291651),t], null)], null);
})());

var G__11102 = (i__11100 + (1));
i__11100 = G__11102;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11101),iter__11098.call(null,cljs.core.chunk_rest.call(null,s__11099__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11101),null);
}
} else {
var c = cljs.core.first.call(null,s__11099__$2);
return cljs.core.cons.call(null,(function (){var t = farn.font.make_text.call(null,font_str,c);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"width","width",-384071477),t.width,new cljs.core.Keyword(null,"height","height",1025178622),t.height,new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t.width,t.height], null),new cljs.core.Keyword(null,"texture","texture",-266291651),t], null)], null);
})(),iter__11098.call(null,cljs.core.rest.call(null,s__11099__$2)));
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
return cljs.core.reduce.call(null,cljs.core._PLUS_,(function (){var iter__4386__auto__ = (function iter__11107(s__11108){
return (new cljs.core.LazySeq(null,(function (){
var s__11108__$1 = s__11108;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__11108__$1);
if(temp__4126__auto__){
var s__11108__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__11108__$2)){
var c__4384__auto__ = cljs.core.chunk_first.call(null,s__11108__$2);
var size__4385__auto__ = cljs.core.count.call(null,c__4384__auto__);
var b__11110 = cljs.core.chunk_buffer.call(null,size__4385__auto__);
if((function (){var i__11109 = (0);
while(true){
if((i__11109 < size__4385__auto__)){
var c = cljs.core._nth.call(null,c__4384__auto__,i__11109);
cljs.core.chunk_append.call(null,b__11110,new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(metrics.call(null,c)));

var G__11111 = (i__11109 + (1));
i__11109 = G__11111;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11110),iter__11107.call(null,cljs.core.chunk_rest.call(null,s__11108__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11110),null);
}
} else {
var c = cljs.core.first.call(null,s__11108__$2);
return cljs.core.cons.call(null,new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(metrics.call(null,c)),iter__11107.call(null,cljs.core.rest.call(null,s__11108__$2)));
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
return cljs.core.reduce.call(null,cljs.core.max,(function (){var iter__4386__auto__ = (function iter__11116(s__11117){
return (new cljs.core.LazySeq(null,(function (){
var s__11117__$1 = s__11117;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__11117__$1);
if(temp__4126__auto__){
var s__11117__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__11117__$2)){
var c__4384__auto__ = cljs.core.chunk_first.call(null,s__11117__$2);
var size__4385__auto__ = cljs.core.count.call(null,c__4384__auto__);
var b__11119 = cljs.core.chunk_buffer.call(null,size__4385__auto__);
if((function (){var i__11118 = (0);
while(true){
if((i__11118 < size__4385__auto__)){
var c = cljs.core._nth.call(null,c__4384__auto__,i__11118);
cljs.core.chunk_append.call(null,b__11119,new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(metrics.call(null,c)));

var G__11120 = (i__11118 + (1));
i__11118 = G__11120;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11119),iter__11116.call(null,cljs.core.chunk_rest.call(null,s__11117__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11119),null);
}
} else {
var c = cljs.core.first.call(null,s__11117__$2);
return cljs.core.cons.call(null,new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(metrics.call(null,c)),iter__11116.call(null,cljs.core.rest.call(null,s__11117__$2)));
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
var iter__4386__auto__ = (function iter__11157(s__11158){
return (new cljs.core.LazySeq(null,(function (){
var s__11158__$1 = s__11158;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__11158__$1);
if(temp__4126__auto__){
var s__11158__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__11158__$2)){
var c__4384__auto__ = cljs.core.chunk_first.call(null,s__11158__$2);
var size__4385__auto__ = cljs.core.count.call(null,c__4384__auto__);
var b__11160 = cljs.core.chunk_buffer.call(null,size__4385__auto__);
if((function (){var i__11159 = (0);
while(true){
if((i__11159 < size__4385__auto__)){
var charset = cljs.core._nth.call(null,c__4384__auto__,i__11159);
cljs.core.chunk_append.call(null,b__11160,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.reduce.call(null,cljs.core._PLUS_,(function (){var iter__4386__auto__ = ((function (i__11159,charset,c__4384__auto__,size__4385__auto__,b__11160,s__11158__$2,temp__4126__auto__){
return (function iter__11177(s__11178){
return (new cljs.core.LazySeq(null,((function (i__11159,charset,c__4384__auto__,size__4385__auto__,b__11160,s__11158__$2,temp__4126__auto__){
return (function (){
var s__11178__$1 = s__11178;
while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__11178__$1);
if(temp__4126__auto____$1){
var s__11178__$2 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__11178__$2)){
var c__4384__auto____$1 = cljs.core.chunk_first.call(null,s__11178__$2);
var size__4385__auto____$1 = cljs.core.count.call(null,c__4384__auto____$1);
var b__11180 = cljs.core.chunk_buffer.call(null,size__4385__auto____$1);
if((function (){var i__11179 = (0);
while(true){
if((i__11179 < size__4385__auto____$1)){
var c = cljs.core._nth.call(null,c__4384__auto____$1,i__11179);
cljs.core.chunk_append.call(null,b__11180,new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(metrics.call(null,c)));

var G__11193 = (i__11179 + (1));
i__11179 = G__11193;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11180),iter__11177.call(null,cljs.core.chunk_rest.call(null,s__11178__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11180),null);
}
} else {
var c = cljs.core.first.call(null,s__11178__$2);
return cljs.core.cons.call(null,new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(metrics.call(null,c)),iter__11177.call(null,cljs.core.rest.call(null,s__11178__$2)));
}
} else {
return null;
}
break;
}
});})(i__11159,charset,c__4384__auto__,size__4385__auto__,b__11160,s__11158__$2,temp__4126__auto__))
,null,null));
});})(i__11159,charset,c__4384__auto__,size__4385__auto__,b__11160,s__11158__$2,temp__4126__auto__))
;
return iter__4386__auto__.call(null,charset);
})()),cljs.core.reduce.call(null,cljs.core.max,(function (){var iter__4386__auto__ = ((function (i__11159,charset,c__4384__auto__,size__4385__auto__,b__11160,s__11158__$2,temp__4126__auto__){
return (function iter__11181(s__11182){
return (new cljs.core.LazySeq(null,((function (i__11159,charset,c__4384__auto__,size__4385__auto__,b__11160,s__11158__$2,temp__4126__auto__){
return (function (){
var s__11182__$1 = s__11182;
while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__11182__$1);
if(temp__4126__auto____$1){
var s__11182__$2 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__11182__$2)){
var c__4384__auto____$1 = cljs.core.chunk_first.call(null,s__11182__$2);
var size__4385__auto____$1 = cljs.core.count.call(null,c__4384__auto____$1);
var b__11184 = cljs.core.chunk_buffer.call(null,size__4385__auto____$1);
if((function (){var i__11183 = (0);
while(true){
if((i__11183 < size__4385__auto____$1)){
var c = cljs.core._nth.call(null,c__4384__auto____$1,i__11183);
cljs.core.chunk_append.call(null,b__11184,new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(metrics.call(null,c)));

var G__11194 = (i__11183 + (1));
i__11183 = G__11194;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11184),iter__11181.call(null,cljs.core.chunk_rest.call(null,s__11182__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11184),null);
}
} else {
var c = cljs.core.first.call(null,s__11182__$2);
return cljs.core.cons.call(null,new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(metrics.call(null,c)),iter__11181.call(null,cljs.core.rest.call(null,s__11182__$2)));
}
} else {
return null;
}
break;
}
});})(i__11159,charset,c__4384__auto__,size__4385__auto__,b__11160,s__11158__$2,temp__4126__auto__))
,null,null));
});})(i__11159,charset,c__4384__auto__,size__4385__auto__,b__11160,s__11158__$2,temp__4126__auto__))
;
return iter__4386__auto__.call(null,charset);
})())], null));

var G__11195 = (i__11159 + (1));
i__11159 = G__11195;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11160),iter__11157.call(null,cljs.core.chunk_rest.call(null,s__11158__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11160),null);
}
} else {
var charset = cljs.core.first.call(null,s__11158__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.reduce.call(null,cljs.core._PLUS_,(function (){var iter__4386__auto__ = ((function (charset,s__11158__$2,temp__4126__auto__){
return (function iter__11185(s__11186){
return (new cljs.core.LazySeq(null,((function (charset,s__11158__$2,temp__4126__auto__){
return (function (){
var s__11186__$1 = s__11186;
while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__11186__$1);
if(temp__4126__auto____$1){
var s__11186__$2 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__11186__$2)){
var c__4384__auto__ = cljs.core.chunk_first.call(null,s__11186__$2);
var size__4385__auto__ = cljs.core.count.call(null,c__4384__auto__);
var b__11188 = cljs.core.chunk_buffer.call(null,size__4385__auto__);
if((function (){var i__11187 = (0);
while(true){
if((i__11187 < size__4385__auto__)){
var c = cljs.core._nth.call(null,c__4384__auto__,i__11187);
cljs.core.chunk_append.call(null,b__11188,new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(metrics.call(null,c)));

var G__11196 = (i__11187 + (1));
i__11187 = G__11196;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11188),iter__11185.call(null,cljs.core.chunk_rest.call(null,s__11186__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11188),null);
}
} else {
var c = cljs.core.first.call(null,s__11186__$2);
return cljs.core.cons.call(null,new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(metrics.call(null,c)),iter__11185.call(null,cljs.core.rest.call(null,s__11186__$2)));
}
} else {
return null;
}
break;
}
});})(charset,s__11158__$2,temp__4126__auto__))
,null,null));
});})(charset,s__11158__$2,temp__4126__auto__))
;
return iter__4386__auto__.call(null,charset);
})()),cljs.core.reduce.call(null,cljs.core.max,(function (){var iter__4386__auto__ = ((function (charset,s__11158__$2,temp__4126__auto__){
return (function iter__11189(s__11190){
return (new cljs.core.LazySeq(null,((function (charset,s__11158__$2,temp__4126__auto__){
return (function (){
var s__11190__$1 = s__11190;
while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__11190__$1);
if(temp__4126__auto____$1){
var s__11190__$2 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__11190__$2)){
var c__4384__auto__ = cljs.core.chunk_first.call(null,s__11190__$2);
var size__4385__auto__ = cljs.core.count.call(null,c__4384__auto__);
var b__11192 = cljs.core.chunk_buffer.call(null,size__4385__auto__);
if((function (){var i__11191 = (0);
while(true){
if((i__11191 < size__4385__auto__)){
var c = cljs.core._nth.call(null,c__4384__auto__,i__11191);
cljs.core.chunk_append.call(null,b__11192,new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(metrics.call(null,c)));

var G__11197 = (i__11191 + (1));
i__11191 = G__11197;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11192),iter__11189.call(null,cljs.core.chunk_rest.call(null,s__11190__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11192),null);
}
} else {
var c = cljs.core.first.call(null,s__11190__$2);
return cljs.core.cons.call(null,new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(metrics.call(null,c)),iter__11189.call(null,cljs.core.rest.call(null,s__11190__$2)));
}
} else {
return null;
}
break;
}
});})(charset,s__11158__$2,temp__4126__auto__))
,null,null));
});})(charset,s__11158__$2,temp__4126__auto__))
;
return iter__4386__auto__.call(null,charset);
})())], null),iter__11157.call(null,cljs.core.rest.call(null,s__11158__$2)));
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
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.reduce.call(null,cljs.core.max,(function (){var iter__4386__auto__ = (function iter__11214(s__11215){
return (new cljs.core.LazySeq(null,(function (){
var s__11215__$1 = s__11215;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__11215__$1);
if(temp__4126__auto__){
var s__11215__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__11215__$2)){
var c__4384__auto__ = cljs.core.chunk_first.call(null,s__11215__$2);
var size__4385__auto__ = cljs.core.count.call(null,c__4384__auto__);
var b__11217 = cljs.core.chunk_buffer.call(null,size__4385__auto__);
if((function (){var i__11216 = (0);
while(true){
if((i__11216 < size__4385__auto__)){
var vec__11220 = cljs.core._nth.call(null,c__4384__auto__,i__11216);
var w = cljs.core.nth.call(null,vec__11220,(0),null);
var h = cljs.core.nth.call(null,vec__11220,(1),null);
cljs.core.chunk_append.call(null,b__11217,w);

var G__11230 = (i__11216 + (1));
i__11216 = G__11230;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11217),iter__11214.call(null,cljs.core.chunk_rest.call(null,s__11215__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11217),null);
}
} else {
var vec__11221 = cljs.core.first.call(null,s__11215__$2);
var w = cljs.core.nth.call(null,vec__11221,(0),null);
var h = cljs.core.nth.call(null,vec__11221,(1),null);
return cljs.core.cons.call(null,w,iter__11214.call(null,cljs.core.rest.call(null,s__11215__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4386__auto__.call(null,rows);
})()),cljs.core.reduce.call(null,cljs.core._PLUS_,(function (){var iter__4386__auto__ = (function iter__11222(s__11223){
return (new cljs.core.LazySeq(null,(function (){
var s__11223__$1 = s__11223;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__11223__$1);
if(temp__4126__auto__){
var s__11223__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__11223__$2)){
var c__4384__auto__ = cljs.core.chunk_first.call(null,s__11223__$2);
var size__4385__auto__ = cljs.core.count.call(null,c__4384__auto__);
var b__11225 = cljs.core.chunk_buffer.call(null,size__4385__auto__);
if((function (){var i__11224 = (0);
while(true){
if((i__11224 < size__4385__auto__)){
var vec__11228 = cljs.core._nth.call(null,c__4384__auto__,i__11224);
var w = cljs.core.nth.call(null,vec__11228,(0),null);
var h = cljs.core.nth.call(null,vec__11228,(1),null);
cljs.core.chunk_append.call(null,b__11225,h);

var G__11231 = (i__11224 + (1));
i__11224 = G__11231;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11225),iter__11222.call(null,cljs.core.chunk_rest.call(null,s__11223__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11225),null);
}
} else {
var vec__11229 = cljs.core.first.call(null,s__11223__$2);
var w = cljs.core.nth.call(null,vec__11229,(0),null);
var h = cljs.core.nth.call(null,vec__11229,(1),null);
return cljs.core.cons.call(null,h,iter__11222.call(null,cljs.core.rest.call(null,s__11223__$2)));
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
var iter__4386__auto__ = (function iter__11240(s__11241){
return (new cljs.core.LazySeq(null,(function (){
var s__11241__$1 = s__11241;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__11241__$1);
if(temp__4126__auto__){
var s__11241__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__11241__$2)){
var c__4384__auto__ = cljs.core.chunk_first.call(null,s__11241__$2);
var size__4385__auto__ = cljs.core.count.call(null,c__4384__auto__);
var b__11243 = cljs.core.chunk_buffer.call(null,size__4385__auto__);
if((function (){var i__11242 = (0);
while(true){
if((i__11242 < size__4385__auto__)){
var vec__11246 = cljs.core._nth.call(null,c__4384__auto__,i__11242);
var i = cljs.core.nth.call(null,vec__11246,(0),null);
var c = cljs.core.nth.call(null,vec__11246,(1),null);
cljs.core.chunk_append.call(null,b__11243,(function (){var tex = farn.font.render_texture_char_BANG_.call(null,texture,metrics,c,farn.font.x_position.call(null,metrics,row,i),y);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [farn.font.x_position.call(null,metrics,row,i),y], null)], null);
})());

var G__11248 = (i__11242 + (1));
i__11242 = G__11248;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11243),iter__11240.call(null,cljs.core.chunk_rest.call(null,s__11241__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11243),null);
}
} else {
var vec__11247 = cljs.core.first.call(null,s__11241__$2);
var i = cljs.core.nth.call(null,vec__11247,(0),null);
var c = cljs.core.nth.call(null,vec__11247,(1),null);
return cljs.core.cons.call(null,(function (){var tex = farn.font.render_texture_char_BANG_.call(null,texture,metrics,c,farn.font.x_position.call(null,metrics,row,i),y);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [farn.font.x_position.call(null,metrics,row,i),y], null)], null);
})(),iter__11240.call(null,cljs.core.rest.call(null,s__11241__$2)));
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
var G__11249 = b;
var G__11250 = cljs.core.into.call(null,d,details);
var G__11251 = (i + (1));
var G__11252 = cljs.core.rest.call(null,chars);
b = G__11249;
d = G__11250;
i = G__11251;
chars = G__11252;
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
var vec__11254 = farn.font.calculate_font_layout_size.call(null,farn.font.make_rowset_sizes.call(null,metrics,farn.font.printable_characters));
var w = cljs.core.nth.call(null,vec__11254,(0),null);
var h = cljs.core.nth.call(null,vec__11254,(1),null);
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
var font_make_batch__delegate = function (font,text,p__11255){
var map__11258 = p__11255;
var map__11258__$1 = ((cljs.core.seq_QMARK_.call(null,map__11258))?cljs.core.apply.call(null,cljs.core.hash_map,map__11258):map__11258);
var options = map__11258__$1;
var y = cljs.core.get.call(null,map__11258__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var x = cljs.core.get.call(null,map__11258__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var buff = new cljs.core.Keyword(null,"texture","texture",-266291651).cljs$core$IFn$_invoke$arity$1(font);
var metrics = new cljs.core.Keyword(null,"metrics","metrics",394093469).cljs$core$IFn$_invoke$arity$1(font);
var sb = (new PIXI.SpriteBatch(buff));
var _ = sb.pivot.x = ((farn.font.text_width.call(null,metrics,text) / (2)) | (0));
var ___$1 = sb.pivot.y = ((farn.font.text_height.call(null,metrics,text) / (2)) | (0));
var t_11260 = text;
var xp_11261 = x;
while(true){
var c_11262 = cljs.core.first.call(null,t_11260);
var r_11263 = cljs.core.rest.call(null,t_11260);
var vec__11259_11264 = new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(metrics.call(null,c_11262));
var w_11265 = cljs.core.nth.call(null,vec__11259_11264,(0),null);
var h_11266 = cljs.core.nth.call(null,vec__11259_11264,(1),null);
var s_11267 = farn.gfx.make_sprite.call(null,farn.font.font_char_sub_texture.call(null,font,c_11262),new cljs.core.Keyword(null,"x","x",2099068185),xp_11261,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"xhandle","xhandle",373504767),(0),new cljs.core.Keyword(null,"yhandle","yhandle",608395252),(0));
sb.addChild(s_11267);

if(!(cljs.core.empty_QMARK_.call(null,r_11263))){
var G__11268 = r_11263;
var G__11269 = (xp_11261 + w_11265);
t_11260 = G__11268;
xp_11261 = G__11269;
continue;
} else {
}
break;
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sprite","sprite",172516848),sb,new cljs.core.Keyword(null,"font","font",-1506159249),font], null);
};
var font_make_batch = function (font,text,var_args){
var p__11255 = null;
if (arguments.length > 2) {
  p__11255 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return font_make_batch__delegate.call(this,font,text,p__11255);};
font_make_batch.cljs$lang$maxFixedArity = 2;
font_make_batch.cljs$lang$applyTo = (function (arglist__11270){
var font = cljs.core.first(arglist__11270);
arglist__11270 = cljs.core.next(arglist__11270);
var text = cljs.core.first(arglist__11270);
var p__11255 = cljs.core.rest(arglist__11270);
return font_make_batch__delegate(font,text,p__11255);
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
farn.font.batch_add = (function batch_add(batch,p__11271,text){
var vec__11274 = p__11271;
var x = cljs.core.nth.call(null,vec__11274,(0),null);
var y = cljs.core.nth.call(null,vec__11274,(1),null);
var font = new cljs.core.Keyword(null,"font","font",-1506159249).cljs$core$IFn$_invoke$arity$1(batch);
var sb = new cljs.core.Keyword(null,"sprite","sprite",172516848).cljs$core$IFn$_invoke$arity$1(batch);
var metrics = new cljs.core.Keyword(null,"metrics","metrics",394093469).cljs$core$IFn$_invoke$arity$1(font);
var t = text;
var xp = (0);
while(true){
var c = cljs.core.first.call(null,t);
var r = cljs.core.rest.call(null,t);
var vec__11275 = new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(metrics.call(null,c));
var w = cljs.core.nth.call(null,vec__11275,(0),null);
var h = cljs.core.nth.call(null,vec__11275,(1),null);
var s = farn.gfx.make_sprite.call(null,farn.font.font_char_sub_texture.call(null,font,c),new cljs.core.Keyword(null,"x","x",2099068185),(x + xp),new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"xhandle","xhandle",373504767),(0),new cljs.core.Keyword(null,"yhandle","yhandle",608395252),(0));
farn.utils.log.call(null,c,(x + xp),y);

sb.addChild(s);

if(!(cljs.core.empty_QMARK_.call(null,r))){
var G__11276 = r;
var G__11277 = (xp + w);
t = G__11276;
xp = G__11277;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((xp + w) + x),y], null);
}
break;
}
});

//# sourceMappingURL=font.js.map