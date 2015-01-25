// Compiled by ClojureScript 0.0-2511
goog.provide('farn.gfx');
goog.require('cljs.core');
goog.require('farn.utils');
goog.require('farn.events');
goog.require('cljs.core.async');
goog.require('dommy.core');
/**
* Initialise the canvas element. Pass in optional keys
* 
* :background    background colour (default 0x000000)
* :expand        if true makes the canvas take the entire window
* :engine        can be :webgl :canvas or :auto (default :auto)
* 
* and either:
* 
* :canvas        a DOM element to use as the canvas
* 
* or:
* 
* :x             x position for the new canvas
* :y             y position for the new canvas
* :width         width of new canvas
* :height        height of new canvas
* 
* @param {...*} var_args
*/
farn.gfx.init = (function() { 
var init__delegate = function (p__14038){
var map__14082 = p__14038;
var map__14082__$1 = ((cljs.core.seq_QMARK_.call(null,map__14082))?cljs.core.apply.call(null,cljs.core.hash_map,map__14082):map__14082);
var engine = cljs.core.get.call(null,map__14082__$1,new cljs.core.Keyword(null,"engine","engine",1459054265),new cljs.core.Keyword(null,"auto","auto",-566279492));
var canvas = cljs.core.get.call(null,map__14082__$1,new cljs.core.Keyword(null,"canvas","canvas",-1798817489));
var height = cljs.core.get.call(null,map__14082__$1,new cljs.core.Keyword(null,"height","height",1025178622),(600));
var width = cljs.core.get.call(null,map__14082__$1,new cljs.core.Keyword(null,"width","width",-384071477),(800));
var y = cljs.core.get.call(null,map__14082__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var x = cljs.core.get.call(null,map__14082__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var expand = cljs.core.get.call(null,map__14082__$1,new cljs.core.Keyword(null,"expand","expand",595248157),false);
var background = cljs.core.get.call(null,map__14082__$1,new cljs.core.Keyword(null,"background","background",-863952629));
var stage = (new PIXI.Stage((function (){var or__3630__auto__ = background;
if(cljs.core.truth_(or__3630__auto__)){
return or__3630__auto__;
} else {
return (0);
}
})()));
var fswidth = window.innerWidth;
var fsheight = window.innerHeight;
var wid = (cljs.core.truth_(expand)?fswidth:width);
var hig = (cljs.core.truth_(expand)?fsheight:height);
var opts = {"antialias": true, "transparent": false, "view": canvas};
var rend = (function (){var G__14083 = (((engine instanceof cljs.core.Keyword))?engine.fqn:null);
switch (G__14083) {
case "auto":
return (new PIXI.autoDetectRenderer(wid,hig,opts));

break;
case "canvas":
return (new PIXI.CanvasRenderer(wid,hig,opts));

break;
case "webgl":
return (new PIXI.WebGLRenderer(wid,hig,opts));

break;
default:
return (new PIXI.autoDetectRenderer(wid,hig,opts));

}
})();
var generated_canvas = rend.view;
var world = (new PIXI.DisplayObjectContainer());
var ui = (new PIXI.DisplayObjectContainer());
if(cljs.core.truth_(canvas)){
} else {
dommy.core.set_style_BANG_.call(null,generated_canvas,new cljs.core.Keyword(null,"top","top",-1856271961),(cljs.core.truth_(expand)?(0):x),new cljs.core.Keyword(null,"left","left",-399115937),(cljs.core.truth_(expand)?(0):y),new cljs.core.Keyword(null,"position","position",-2011731912),"absolute");

dommy.core.append_BANG_.call(null,document.body,generated_canvas);
}

stage.addChild(world);

stage.addChild(ui);

world.position.x = (fswidth / (2));

world.position.y = (fsheight / (2));

ui.position.x = (fswidth / (2));

ui.position.y = (fsheight / (2));

var c_14126 = farn.events.new_resize_chan.call(null);
var c__6459__auto___14127 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6459__auto___14127,c_14126,stage,fswidth,fsheight,wid,hig,opts,rend,generated_canvas,world,ui,map__14082,map__14082__$1,engine,canvas,height,width,y,x,expand,background){
return (function (){
var f__6460__auto__ = (function (){var switch__6444__auto__ = ((function (c__6459__auto___14127,c_14126,stage,fswidth,fsheight,wid,hig,opts,rend,generated_canvas,world,ui,map__14082,map__14082__$1,engine,canvas,height,width,y,x,expand,background){
return (function (state_14109){
var state_val_14110 = (state_14109[(1)]);
if((state_val_14110 === (7))){
var inst_14088 = (state_14109[(2)]);
var inst_14089 = cljs.core.nth.call(null,inst_14088,(0),null);
var inst_14090 = cljs.core.nth.call(null,inst_14088,(1),null);
var inst_14091 = farn.utils.log.call(null,inst_14089,inst_14090);
var inst_14092 = rend.resize(inst_14089,inst_14090);
var inst_14093 = (inst_14089 / (2));
var inst_14094 = world.position.x = inst_14093;
var inst_14095 = (inst_14090 / (2));
var inst_14096 = world.position.y = inst_14095;
var inst_14097 = (inst_14089 / (2));
var inst_14098 = ui.position.x = inst_14097;
var inst_14099 = (inst_14090 / (2));
var inst_14100 = ui.position.y = inst_14099;
var inst_14101 = rend.render(stage);
var state_14109__$1 = (function (){var statearr_14111 = state_14109;
(statearr_14111[(7)] = inst_14098);

(statearr_14111[(8)] = inst_14101);

(statearr_14111[(9)] = inst_14096);

(statearr_14111[(10)] = inst_14091);

(statearr_14111[(11)] = inst_14100);

(statearr_14111[(12)] = inst_14092);

(statearr_14111[(13)] = inst_14094);

return statearr_14111;
})();
var statearr_14112_14128 = state_14109__$1;
(statearr_14112_14128[(2)] = null);

(statearr_14112_14128[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14110 === (6))){
var inst_14105 = (state_14109[(2)]);
var state_14109__$1 = state_14109;
var statearr_14113_14129 = state_14109__$1;
(statearr_14113_14129[(2)] = inst_14105);

(statearr_14113_14129[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14110 === (5))){
var state_14109__$1 = state_14109;
var statearr_14114_14130 = state_14109__$1;
(statearr_14114_14130[(2)] = null);

(statearr_14114_14130[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14110 === (4))){
var state_14109__$1 = state_14109;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14109__$1,(7),c_14126);
} else {
if((state_val_14110 === (3))){
var inst_14107 = (state_14109[(2)]);
var state_14109__$1 = state_14109;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14109__$1,inst_14107);
} else {
if((state_val_14110 === (2))){
var state_14109__$1 = state_14109;
var statearr_14115_14131 = state_14109__$1;
(statearr_14115_14131[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14110 === (1))){
var state_14109__$1 = state_14109;
var statearr_14117_14132 = state_14109__$1;
(statearr_14117_14132[(2)] = null);

(statearr_14117_14132[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__6459__auto___14127,c_14126,stage,fswidth,fsheight,wid,hig,opts,rend,generated_canvas,world,ui,map__14082,map__14082__$1,engine,canvas,height,width,y,x,expand,background))
;
return ((function (switch__6444__auto__,c__6459__auto___14127,c_14126,stage,fswidth,fsheight,wid,hig,opts,rend,generated_canvas,world,ui,map__14082,map__14082__$1,engine,canvas,height,width,y,x,expand,background){
return (function() {
var state_machine__6445__auto__ = null;
var state_machine__6445__auto____0 = (function (){
var statearr_14121 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14121[(0)] = state_machine__6445__auto__);

(statearr_14121[(1)] = (1));

return statearr_14121;
});
var state_machine__6445__auto____1 = (function (state_14109){
while(true){
var ret_value__6446__auto__ = (function (){try{while(true){
var result__6447__auto__ = switch__6444__auto__.call(null,state_14109);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6447__auto__;
}
break;
}
}catch (e14122){if((e14122 instanceof Object)){
var ex__6448__auto__ = e14122;
var statearr_14123_14133 = state_14109;
(statearr_14123_14133[(5)] = ex__6448__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14109);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14122;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14134 = state_14109;
state_14109 = G__14134;
continue;
} else {
return ret_value__6446__auto__;
}
break;
}
});
state_machine__6445__auto__ = function(state_14109){
switch(arguments.length){
case 0:
return state_machine__6445__auto____0.call(this);
case 1:
return state_machine__6445__auto____1.call(this,state_14109);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6445__auto____0;
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6445__auto____1;
return state_machine__6445__auto__;
})()
;})(switch__6444__auto__,c__6459__auto___14127,c_14126,stage,fswidth,fsheight,wid,hig,opts,rend,generated_canvas,world,ui,map__14082,map__14082__$1,engine,canvas,height,width,y,x,expand,background))
})();
var state__6461__auto__ = (function (){var statearr_14124 = f__6460__auto__.call(null);
(statearr_14124[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6459__auto___14127);

return statearr_14124;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6461__auto__);
});})(c__6459__auto___14127,c_14126,stage,fswidth,fsheight,wid,hig,opts,rend,generated_canvas,world,ui,map__14082,map__14082__$1,engine,canvas,height,width,y,x,expand,background))
);


rend.render(stage);

return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"stage","stage",1843544772),stage,new cljs.core.Keyword(null,"renderer","renderer",336841071),rend,new cljs.core.Keyword(null,"canvas","canvas",-1798817489),(function (){var or__3630__auto__ = canvas;
if(cljs.core.truth_(or__3630__auto__)){
return or__3630__auto__;
} else {
return generated_canvas;
}
})(),new cljs.core.Keyword(null,"world","world",-418292623),world,new cljs.core.Keyword(null,"ui","ui",-469653645),ui], null);
};
var init = function (var_args){
var p__14038 = null;
if (arguments.length > 0) {
  p__14038 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return init__delegate.call(this,p__14038);};
init.cljs$lang$maxFixedArity = 0;
init.cljs$lang$applyTo = (function (arglist__14135){
var p__14038 = cljs.core.seq(arglist__14135);
return init__delegate(p__14038);
});
init.cljs$core$IFn$_invoke$arity$variadic = init__delegate;
return init;
})()
;
/**
* Draws an empty box that can serve as a default progress bar for preloading images
*/
farn.gfx.progress_texture = (function progress_texture(fraction,p__14136){
var map__14142 = p__14136;
var map__14142__$1 = ((cljs.core.seq_QMARK_.call(null,map__14142))?cljs.core.apply.call(null,cljs.core.hash_map,map__14142):map__14142);
var options = map__14142__$1;
var full_colour = cljs.core.get.call(null,map__14142__$1,new cljs.core.Keyword(null,"full-colour","full-colour",50761434),(8421504));
var lowlight_offset = cljs.core.get.call(null,map__14142__$1,new cljs.core.Keyword(null,"lowlight-offset","lowlight-offset",-612034438),(0));
var draw_border = cljs.core.get.call(null,map__14142__$1,new cljs.core.Keyword(null,"draw-border","draw-border",-1950022342),false);
var highlight_offset = cljs.core.get.call(null,map__14142__$1,new cljs.core.Keyword(null,"highlight-offset","highlight-offset",-1920235650),(0));
var height = cljs.core.get.call(null,map__14142__$1,new cljs.core.Keyword(null,"height","height",1025178622),(40));
var highlight = cljs.core.get.call(null,map__14142__$1,new cljs.core.Keyword(null,"highlight","highlight",-800930873));
var width = cljs.core.get.call(null,map__14142__$1,new cljs.core.Keyword(null,"width","width",-384071477),(600));
var lowlight_width = cljs.core.get.call(null,map__14142__$1,new cljs.core.Keyword(null,"lowlight-width","lowlight-width",-984309493),(1));
var border_colour = cljs.core.get.call(null,map__14142__$1,new cljs.core.Keyword(null,"border-colour","border-colour",-173895822),(16777215));
var border_width = cljs.core.get.call(null,map__14142__$1,new cljs.core.Keyword(null,"border-width","border-width",-1512605390),(2));
var empty_colour = cljs.core.get.call(null,map__14142__$1,new cljs.core.Keyword(null,"empty-colour","empty-colour",-1488420524),(0));
var lowlight = cljs.core.get.call(null,map__14142__$1,new cljs.core.Keyword(null,"lowlight","lowlight",2143243768));
var highlight_width = cljs.core.get.call(null,map__14142__$1,new cljs.core.Keyword(null,"highlight-width","highlight-width",1191874776),(1));
var box = (new PIXI.Graphics());
var G__14143_14147 = box;
G__14143_14147.beginFill(empty_colour);

G__14143_14147.lineStyle((0),border_colour);

G__14143_14147.drawRect((0),(0),width,height);

G__14143_14147.lineStyle((0),border_colour);

G__14143_14147.beginFill(full_colour);

G__14143_14147.drawRect(border_width,border_width,((((fraction < (1)))?fraction:(1)) * ((width - border_width) - border_width)),((height - border_width) - border_width));

G__14143_14147.endFill();


var bw_14148 = ((((fraction < (1)))?fraction:(1)) * width);
var x1_14149 = (border_width + highlight_offset);
var x2_14150 = (bw_14148 - highlight_offset);
var y1_14151 = (border_width + lowlight_offset);
var y2_14152 = ((height - border_width) - lowlight_offset);
if((bw_14148 > (0))){
if(cljs.core.truth_(highlight)){
var G__14144_14153 = box;
G__14144_14153.lineStyle(highlight_width,highlight);

G__14144_14153.moveTo(x1_14149,y2_14152);

G__14144_14153.lineTo(x1_14149,y1_14151);

G__14144_14153.lineTo(x2_14150,y1_14151);

} else {
}

if(cljs.core.truth_(lowlight)){
var G__14145_14154 = box;
G__14145_14154.lineStyle(lowlight_width,lowlight);

G__14145_14154.moveTo(x1_14149,y2_14152);

G__14145_14154.lineTo(x2_14150,y2_14152);

G__14145_14154.lineTo(x2_14150,y1_14151);

} else {
}
} else {
}

if(cljs.core.truth_(draw_border)){
var G__14146_14155 = box;
G__14146_14155.lineStyle(border_width,border_colour);

G__14146_14155.drawRect((0),(0),width,height);

} else {
}

return box.generateTexture(false);
});
/**
* Make a PIXI Point from x and y
*/
farn.gfx.make_point = (function make_point(x,y){
return (new PIXI.Point(x,y));
});
/**
* construct a sprite by its texture. optionally pass in other things
* @param {...*} var_args
*/
farn.gfx.make_sprite = (function() { 
var make_sprite__delegate = function (texture,p__14156){
var map__14158 = p__14156;
var map__14158__$1 = ((cljs.core.seq_QMARK_.call(null,map__14158))?cljs.core.apply.call(null,cljs.core.hash_map,map__14158):map__14158);
var yhandle = cljs.core.get.call(null,map__14158__$1,new cljs.core.Keyword(null,"yhandle","yhandle",608395252),0.5);
var xhandle = cljs.core.get.call(null,map__14158__$1,new cljs.core.Keyword(null,"xhandle","xhandle",373504767),0.5);
var y = cljs.core.get.call(null,map__14158__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var x = cljs.core.get.call(null,map__14158__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var s = (new PIXI.Sprite(texture));
s.anchor = farn.gfx.make_point.call(null,xhandle,yhandle);

s.x = x;

s.y = y;

return s;
};
var make_sprite = function (texture,var_args){
var p__14156 = null;
if (arguments.length > 1) {
  p__14156 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return make_sprite__delegate.call(this,texture,p__14156);};
make_sprite.cljs$lang$maxFixedArity = 1;
make_sprite.cljs$lang$applyTo = (function (arglist__14159){
var texture = cljs.core.first(arglist__14159);
var p__14156 = cljs.core.rest(arglist__14159);
return make_sprite__delegate(texture,p__14156);
});
make_sprite.cljs$core$IFn$_invoke$arity$variadic = make_sprite__delegate;
return make_sprite;
})()
;
farn.gfx.add_prog_bar = (function add_prog_bar(stage,options){
var s = farn.gfx.make_sprite.call(null,farn.gfx.progress_texture.call(null,(0),options));
s.alpha = (0);

stage.addChild(s);

return s;
});
farn.gfx._EQ_textures_EQ_ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
farn.gfx.get_texture = (function get_texture(key){
return key.call(null,cljs.core.deref.call(null,farn.gfx._EQ_textures_EQ_));
});
/**
* loads each url in the passed in list as an image. Updates the progress
* as it goes with
* a percentage and a thumbnail. Once complete, displays all the images
* fullsize.
* @param {...*} var_args
*/
farn.gfx.load_urls = (function() { 
var load_urls__delegate = function (urls,progress_bar,options){
var options__$1 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,options);
var finished = cljs.core.async.chan.call(null);
var num_urls = cljs.core.count.call(null,urls);
var images = cljs.core.doall.call(null,cljs.core.map.call(null,((function (finished,num_urls,options__$1){
return (function (src){
var i = (new Image());
i.onload = ((function (i,finished,num_urls,options__$1){
return (function (){
return cljs.core.async.put_BANG_.call(null,finished,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [src,i], null));
});})(i,finished,num_urls,options__$1))
;

i.onerror = ((function (i,finished,num_urls,options__$1){
return (function (){
return cljs.core.async.put_BANG_.call(null,finished,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [src,i], null));
});})(i,finished,num_urls,options__$1))
;

i.onabort = ((function (i,finished,num_urls,options__$1){
return (function (){
return alert("abort");
});})(i,finished,num_urls,options__$1))
;

i.src = src;

return i;
});})(finished,num_urls,options__$1))
,urls));
var c__6459__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6459__auto__,finished,num_urls,images,options__$1){
return (function (){
var f__6460__auto__ = (function (){var switch__6444__auto__ = ((function (c__6459__auto__,finished,num_urls,images,options__$1){
return (function (state_14264){
var state_val_14265 = (state_14264[(1)]);
if((state_val_14265 === (7))){
var inst_14231 = (state_14264[(7)]);
var inst_14242 = (state_14264[(2)]);
var inst_14243 = farn.utils.ends_with_QMARK_.call(null,inst_14231,".png");
var state_14264__$1 = (function (){var statearr_14266 = state_14264;
(statearr_14266[(8)] = inst_14242);

return statearr_14266;
})();
if(inst_14243){
var statearr_14267_14292 = state_14264__$1;
(statearr_14267_14292[(1)] = (9));

} else {
var statearr_14268_14293 = state_14264__$1;
(statearr_14268_14293[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14265 === (1))){
var inst_14226 = (1);
var state_14264__$1 = (function (){var statearr_14269 = state_14264;
(statearr_14269[(9)] = inst_14226);

return statearr_14269;
})();
var statearr_14270_14294 = state_14264__$1;
(statearr_14270_14294[(2)] = null);

(statearr_14270_14294[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14265 === (4))){
var inst_14230 = (state_14264[(2)]);
var inst_14231 = cljs.core.nth.call(null,inst_14230,(0),null);
var inst_14232 = cljs.core.nth.call(null,inst_14230,(1),null);
var inst_14233 = new cljs.core.Keyword(null,"debug-delay","debug-delay",-1920207820).cljs$core$IFn$_invoke$arity$1(options__$1);
var state_14264__$1 = (function (){var statearr_14271 = state_14264;
(statearr_14271[(10)] = inst_14232);

(statearr_14271[(7)] = inst_14231);

return statearr_14271;
})();
if(cljs.core.truth_(inst_14233)){
var statearr_14272_14295 = state_14264__$1;
(statearr_14272_14295[(1)] = (5));

} else {
var statearr_14273_14296 = state_14264__$1;
(statearr_14273_14296[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14265 === (13))){
var state_14264__$1 = state_14264;
var statearr_14274_14297 = state_14264__$1;
(statearr_14274_14297[(2)] = null);

(statearr_14274_14297[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14265 === (6))){
var state_14264__$1 = state_14264;
var statearr_14275_14298 = state_14264__$1;
(statearr_14275_14298[(2)] = null);

(statearr_14275_14298[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14265 === (3))){
var inst_14262 = (state_14264[(2)]);
var state_14264__$1 = state_14264;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14264__$1,inst_14262);
} else {
if((state_val_14265 === (12))){
var inst_14226 = (state_14264[(9)]);
var inst_14256 = (inst_14226 + (1));
var inst_14226__$1 = inst_14256;
var state_14264__$1 = (function (){var statearr_14276 = state_14264;
(statearr_14276[(9)] = inst_14226__$1);

return statearr_14276;
})();
var statearr_14277_14299 = state_14264__$1;
(statearr_14277_14299[(2)] = null);

(statearr_14277_14299[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14265 === (2))){
var state_14264__$1 = state_14264;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14264__$1,(4),finished);
} else {
if((state_val_14265 === (11))){
var inst_14226 = (state_14264[(9)]);
var inst_14250 = (state_14264[(2)]);
var inst_14251 = (inst_14226 / num_urls);
var inst_14252 = farn.gfx.progress_texture.call(null,inst_14251,options__$1);
var inst_14253 = progress_bar.setTexture(inst_14252);
var inst_14254 = (inst_14226 < num_urls);
var state_14264__$1 = (function (){var statearr_14278 = state_14264;
(statearr_14278[(11)] = inst_14253);

(statearr_14278[(12)] = inst_14250);

return statearr_14278;
})();
if(cljs.core.truth_(inst_14254)){
var statearr_14279_14300 = state_14264__$1;
(statearr_14279_14300[(1)] = (12));

} else {
var statearr_14280_14301 = state_14264__$1;
(statearr_14280_14301[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14265 === (9))){
var inst_14231 = (state_14264[(7)]);
var inst_14245 = farn.utils.url_keyword.call(null,inst_14231);
var inst_14246 = PIXI.Texture.fromImage(inst_14231);
var inst_14247 = cljs.core.swap_BANG_.call(null,farn.gfx._EQ_textures_EQ_,cljs.core.assoc,inst_14245,inst_14246);
var state_14264__$1 = state_14264;
var statearr_14281_14302 = state_14264__$1;
(statearr_14281_14302[(2)] = inst_14247);

(statearr_14281_14302[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14265 === (5))){
var inst_14235 = new cljs.core.Keyword(null,"debug-delay","debug-delay",-1920207820).cljs$core$IFn$_invoke$arity$1(options__$1);
var inst_14236 = (inst_14235 * (1000));
var inst_14237 = cljs.core.async.timeout.call(null,inst_14236);
var state_14264__$1 = state_14264;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14264__$1,(8),inst_14237);
} else {
if((state_val_14265 === (14))){
var inst_14260 = (state_14264[(2)]);
var state_14264__$1 = state_14264;
var statearr_14282_14303 = state_14264__$1;
(statearr_14282_14303[(2)] = inst_14260);

(statearr_14282_14303[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14265 === (10))){
var state_14264__$1 = state_14264;
var statearr_14283_14304 = state_14264__$1;
(statearr_14283_14304[(2)] = null);

(statearr_14283_14304[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14265 === (8))){
var inst_14239 = (state_14264[(2)]);
var state_14264__$1 = state_14264;
var statearr_14284_14305 = state_14264__$1;
(statearr_14284_14305[(2)] = inst_14239);

(statearr_14284_14305[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6459__auto__,finished,num_urls,images,options__$1))
;
return ((function (switch__6444__auto__,c__6459__auto__,finished,num_urls,images,options__$1){
return (function() {
var state_machine__6445__auto__ = null;
var state_machine__6445__auto____0 = (function (){
var statearr_14288 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14288[(0)] = state_machine__6445__auto__);

(statearr_14288[(1)] = (1));

return statearr_14288;
});
var state_machine__6445__auto____1 = (function (state_14264){
while(true){
var ret_value__6446__auto__ = (function (){try{while(true){
var result__6447__auto__ = switch__6444__auto__.call(null,state_14264);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6447__auto__;
}
break;
}
}catch (e14289){if((e14289 instanceof Object)){
var ex__6448__auto__ = e14289;
var statearr_14290_14306 = state_14264;
(statearr_14290_14306[(5)] = ex__6448__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14264);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14289;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14307 = state_14264;
state_14264 = G__14307;
continue;
} else {
return ret_value__6446__auto__;
}
break;
}
});
state_machine__6445__auto__ = function(state_14264){
switch(arguments.length){
case 0:
return state_machine__6445__auto____0.call(this);
case 1:
return state_machine__6445__auto____1.call(this,state_14264);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6445__auto____0;
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6445__auto____1;
return state_machine__6445__auto__;
})()
;})(switch__6444__auto__,c__6459__auto__,finished,num_urls,images,options__$1))
})();
var state__6461__auto__ = (function (){var statearr_14291 = f__6460__auto__.call(null);
(statearr_14291[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6459__auto__);

return statearr_14291;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6461__auto__);
});})(c__6459__auto__,finished,num_urls,images,options__$1))
);

return c__6459__auto__;
};
var load_urls = function (urls,progress_bar,var_args){
var options = null;
if (arguments.length > 2) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return load_urls__delegate.call(this,urls,progress_bar,options);};
load_urls.cljs$lang$maxFixedArity = 2;
load_urls.cljs$lang$applyTo = (function (arglist__14308){
var urls = cljs.core.first(arglist__14308);
arglist__14308 = cljs.core.next(arglist__14308);
var progress_bar = cljs.core.first(arglist__14308);
var options = cljs.core.rest(arglist__14308);
return load_urls__delegate(urls,progress_bar,options);
});
load_urls.cljs$core$IFn$_invoke$arity$variadic = load_urls__delegate;
return load_urls;
})()
;
/**
* @param {...*} var_args
*/
farn.gfx.fadeout = (function() { 
var fadeout__delegate = function (spr,p__14309){
var map__14349 = p__14309;
var map__14349__$1 = ((cljs.core.seq_QMARK_.call(null,map__14349))?cljs.core.apply.call(null,cljs.core.hash_map,map__14349):map__14349);
var end = cljs.core.get.call(null,map__14349__$1,new cljs.core.Keyword(null,"end","end",-268185958),(0));
var start = cljs.core.get.call(null,map__14349__$1,new cljs.core.Keyword(null,"start","start",-355208981),null);
var duration = cljs.core.get.call(null,map__14349__$1,new cljs.core.Keyword(null,"duration","duration",1444101068),(1));
var start__$1 = (((start == null))?spr.alpha:start);
var ticks = ((60) * duration);
var c__6459__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6459__auto__,start__$1,ticks,map__14349,map__14349__$1,end,start,duration){
return (function (){
var f__6460__auto__ = (function (){var switch__6444__auto__ = ((function (c__6459__auto__,start__$1,ticks,map__14349,map__14349__$1,end,start,duration){
return (function (state_14370){
var state_val_14371 = (state_14370[(1)]);
if((state_val_14371 === (7))){
var inst_14366 = (state_14370[(2)]);
var state_14370__$1 = state_14370;
var statearr_14372_14388 = state_14370__$1;
(statearr_14372_14388[(2)] = inst_14366);

(statearr_14372_14388[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14371 === (6))){
var state_14370__$1 = state_14370;
var statearr_14373_14389 = state_14370__$1;
(statearr_14373_14389[(2)] = null);

(statearr_14373_14389[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14371 === (5))){
var inst_14350 = (state_14370[(7)]);
var inst_14362 = (inst_14350 - (1));
var inst_14350__$1 = inst_14362;
var state_14370__$1 = (function (){var statearr_14374 = state_14370;
(statearr_14374[(7)] = inst_14350__$1);

return statearr_14374;
})();
var statearr_14375_14390 = state_14370__$1;
(statearr_14375_14390[(2)] = null);

(statearr_14375_14390[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14371 === (4))){
var inst_14350 = (state_14370[(7)]);
var inst_14354 = (state_14370[(2)]);
var inst_14355 = (start__$1 - end);
var inst_14356 = (inst_14350 / ticks);
var inst_14357 = (inst_14355 * inst_14356);
var inst_14358 = (end + inst_14357);
var inst_14359 = spr.alpha = inst_14358;
var inst_14360 = (inst_14350 > (0));
var state_14370__$1 = (function (){var statearr_14376 = state_14370;
(statearr_14376[(8)] = inst_14359);

(statearr_14376[(9)] = inst_14354);

return statearr_14376;
})();
if(cljs.core.truth_(inst_14360)){
var statearr_14377_14391 = state_14370__$1;
(statearr_14377_14391[(1)] = (5));

} else {
var statearr_14378_14392 = state_14370__$1;
(statearr_14378_14392[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14371 === (3))){
var inst_14368 = (state_14370[(2)]);
var state_14370__$1 = state_14370;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14370__$1,inst_14368);
} else {
if((state_val_14371 === (2))){
var inst_14352 = farn.events.next_frame.call(null);
var state_14370__$1 = state_14370;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14370__$1,(4),inst_14352);
} else {
if((state_val_14371 === (1))){
var inst_14350 = ticks;
var state_14370__$1 = (function (){var statearr_14379 = state_14370;
(statearr_14379[(7)] = inst_14350);

return statearr_14379;
})();
var statearr_14380_14393 = state_14370__$1;
(statearr_14380_14393[(2)] = null);

(statearr_14380_14393[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__6459__auto__,start__$1,ticks,map__14349,map__14349__$1,end,start,duration))
;
return ((function (switch__6444__auto__,c__6459__auto__,start__$1,ticks,map__14349,map__14349__$1,end,start,duration){
return (function() {
var state_machine__6445__auto__ = null;
var state_machine__6445__auto____0 = (function (){
var statearr_14384 = [null,null,null,null,null,null,null,null,null,null];
(statearr_14384[(0)] = state_machine__6445__auto__);

(statearr_14384[(1)] = (1));

return statearr_14384;
});
var state_machine__6445__auto____1 = (function (state_14370){
while(true){
var ret_value__6446__auto__ = (function (){try{while(true){
var result__6447__auto__ = switch__6444__auto__.call(null,state_14370);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6447__auto__;
}
break;
}
}catch (e14385){if((e14385 instanceof Object)){
var ex__6448__auto__ = e14385;
var statearr_14386_14394 = state_14370;
(statearr_14386_14394[(5)] = ex__6448__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14370);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14385;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14395 = state_14370;
state_14370 = G__14395;
continue;
} else {
return ret_value__6446__auto__;
}
break;
}
});
state_machine__6445__auto__ = function(state_14370){
switch(arguments.length){
case 0:
return state_machine__6445__auto____0.call(this);
case 1:
return state_machine__6445__auto____1.call(this,state_14370);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6445__auto____0;
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6445__auto____1;
return state_machine__6445__auto__;
})()
;})(switch__6444__auto__,c__6459__auto__,start__$1,ticks,map__14349,map__14349__$1,end,start,duration))
})();
var state__6461__auto__ = (function (){var statearr_14387 = f__6460__auto__.call(null);
(statearr_14387[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6459__auto__);

return statearr_14387;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6461__auto__);
});})(c__6459__auto__,start__$1,ticks,map__14349,map__14349__$1,end,start,duration))
);

return c__6459__auto__;
};
var fadeout = function (spr,var_args){
var p__14309 = null;
if (arguments.length > 1) {
  p__14309 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return fadeout__delegate.call(this,spr,p__14309);};
fadeout.cljs$lang$maxFixedArity = 1;
fadeout.cljs$lang$applyTo = (function (arglist__14396){
var spr = cljs.core.first(arglist__14396);
var p__14309 = cljs.core.rest(arglist__14396);
return fadeout__delegate(spr,p__14309);
});
fadeout.cljs$core$IFn$_invoke$arity$variadic = fadeout__delegate;
return fadeout;
})()
;
/**
* @param {...*} var_args
*/
farn.gfx.fadein = (function() { 
var fadein__delegate = function (spr,p__14397){
var map__14438 = p__14397;
var map__14438__$1 = ((cljs.core.seq_QMARK_.call(null,map__14438))?cljs.core.apply.call(null,cljs.core.hash_map,map__14438):map__14438);
var end = cljs.core.get.call(null,map__14438__$1,new cljs.core.Keyword(null,"end","end",-268185958),(1));
var start = cljs.core.get.call(null,map__14438__$1,new cljs.core.Keyword(null,"start","start",-355208981),(0));
var duration = cljs.core.get.call(null,map__14438__$1,new cljs.core.Keyword(null,"duration","duration",1444101068),(1));
var ticks = ((60) * duration);
var c__6459__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6459__auto__,ticks,map__14438,map__14438__$1,end,start,duration){
return (function (){
var f__6460__auto__ = (function (){var switch__6444__auto__ = ((function (c__6459__auto__,ticks,map__14438,map__14438__$1,end,start,duration){
return (function (state_14460){
var state_val_14461 = (state_14460[(1)]);
if((state_val_14461 === (7))){
var inst_14456 = (state_14460[(2)]);
var state_14460__$1 = state_14460;
var statearr_14462_14478 = state_14460__$1;
(statearr_14462_14478[(2)] = inst_14456);

(statearr_14462_14478[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14461 === (6))){
var state_14460__$1 = state_14460;
var statearr_14463_14479 = state_14460__$1;
(statearr_14463_14479[(2)] = null);

(statearr_14463_14479[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14461 === (5))){
var inst_14439 = (state_14460[(7)]);
var inst_14452 = (inst_14439 - (1));
var inst_14439__$1 = inst_14452;
var state_14460__$1 = (function (){var statearr_14464 = state_14460;
(statearr_14464[(7)] = inst_14439__$1);

return statearr_14464;
})();
var statearr_14465_14480 = state_14460__$1;
(statearr_14465_14480[(2)] = null);

(statearr_14465_14480[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14461 === (4))){
var inst_14439 = (state_14460[(7)]);
var inst_14443 = (state_14460[(2)]);
var inst_14444 = (end - start);
var inst_14445 = (ticks - inst_14439);
var inst_14446 = (inst_14445 / ticks);
var inst_14447 = (inst_14444 * inst_14446);
var inst_14448 = (start + inst_14447);
var inst_14449 = spr.alpha = inst_14448;
var inst_14450 = (inst_14439 > (0));
var state_14460__$1 = (function (){var statearr_14466 = state_14460;
(statearr_14466[(8)] = inst_14449);

(statearr_14466[(9)] = inst_14443);

return statearr_14466;
})();
if(cljs.core.truth_(inst_14450)){
var statearr_14467_14481 = state_14460__$1;
(statearr_14467_14481[(1)] = (5));

} else {
var statearr_14468_14482 = state_14460__$1;
(statearr_14468_14482[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14461 === (3))){
var inst_14458 = (state_14460[(2)]);
var state_14460__$1 = state_14460;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14460__$1,inst_14458);
} else {
if((state_val_14461 === (2))){
var inst_14441 = farn.events.next_frame.call(null);
var state_14460__$1 = state_14460;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14460__$1,(4),inst_14441);
} else {
if((state_val_14461 === (1))){
var inst_14439 = ticks;
var state_14460__$1 = (function (){var statearr_14469 = state_14460;
(statearr_14469[(7)] = inst_14439);

return statearr_14469;
})();
var statearr_14470_14483 = state_14460__$1;
(statearr_14470_14483[(2)] = null);

(statearr_14470_14483[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__6459__auto__,ticks,map__14438,map__14438__$1,end,start,duration))
;
return ((function (switch__6444__auto__,c__6459__auto__,ticks,map__14438,map__14438__$1,end,start,duration){
return (function() {
var state_machine__6445__auto__ = null;
var state_machine__6445__auto____0 = (function (){
var statearr_14474 = [null,null,null,null,null,null,null,null,null,null];
(statearr_14474[(0)] = state_machine__6445__auto__);

(statearr_14474[(1)] = (1));

return statearr_14474;
});
var state_machine__6445__auto____1 = (function (state_14460){
while(true){
var ret_value__6446__auto__ = (function (){try{while(true){
var result__6447__auto__ = switch__6444__auto__.call(null,state_14460);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6447__auto__;
}
break;
}
}catch (e14475){if((e14475 instanceof Object)){
var ex__6448__auto__ = e14475;
var statearr_14476_14484 = state_14460;
(statearr_14476_14484[(5)] = ex__6448__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14460);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14475;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14485 = state_14460;
state_14460 = G__14485;
continue;
} else {
return ret_value__6446__auto__;
}
break;
}
});
state_machine__6445__auto__ = function(state_14460){
switch(arguments.length){
case 0:
return state_machine__6445__auto____0.call(this);
case 1:
return state_machine__6445__auto____1.call(this,state_14460);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6445__auto____0;
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6445__auto____1;
return state_machine__6445__auto__;
})()
;})(switch__6444__auto__,c__6459__auto__,ticks,map__14438,map__14438__$1,end,start,duration))
})();
var state__6461__auto__ = (function (){var statearr_14477 = f__6460__auto__.call(null);
(statearr_14477[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6459__auto__);

return statearr_14477;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6461__auto__);
});})(c__6459__auto__,ticks,map__14438,map__14438__$1,end,start,duration))
);

return c__6459__auto__;
};
var fadein = function (spr,var_args){
var p__14397 = null;
if (arguments.length > 1) {
  p__14397 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return fadein__delegate.call(this,spr,p__14397);};
fadein.cljs$lang$maxFixedArity = 1;
fadein.cljs$lang$applyTo = (function (arglist__14486){
var spr = cljs.core.first(arglist__14486);
var p__14397 = cljs.core.rest(arglist__14486);
return fadein__delegate(spr,p__14397);
});
fadein.cljs$core$IFn$_invoke$arity$variadic = fadein__delegate;
return fadein;
})()
;
farn.gfx.sub_texture = (function sub_texture(texture,p__14487,p__14488){
var vec__14491 = p__14487;
var x = cljs.core.nth.call(null,vec__14491,(0),null);
var y = cljs.core.nth.call(null,vec__14491,(1),null);
var vec__14492 = p__14488;
var w = cljs.core.nth.call(null,vec__14492,(0),null);
var h = cljs.core.nth.call(null,vec__14492,(1),null);
return (new PIXI.Texture(texture,(new PIXI.Rectangle(x,y,w,h))));
});

//# sourceMappingURL=gfx.js.map