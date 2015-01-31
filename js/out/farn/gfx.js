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
var init__delegate = function (p__14085){
var map__14129 = p__14085;
var map__14129__$1 = ((cljs.core.seq_QMARK_.call(null,map__14129))?cljs.core.apply.call(null,cljs.core.hash_map,map__14129):map__14129);
var engine = cljs.core.get.call(null,map__14129__$1,new cljs.core.Keyword(null,"engine","engine",1459054265),new cljs.core.Keyword(null,"auto","auto",-566279492));
var canvas = cljs.core.get.call(null,map__14129__$1,new cljs.core.Keyword(null,"canvas","canvas",-1798817489));
var height = cljs.core.get.call(null,map__14129__$1,new cljs.core.Keyword(null,"height","height",1025178622),(600));
var width = cljs.core.get.call(null,map__14129__$1,new cljs.core.Keyword(null,"width","width",-384071477),(800));
var y = cljs.core.get.call(null,map__14129__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var x = cljs.core.get.call(null,map__14129__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var expand = cljs.core.get.call(null,map__14129__$1,new cljs.core.Keyword(null,"expand","expand",595248157),false);
var background = cljs.core.get.call(null,map__14129__$1,new cljs.core.Keyword(null,"background","background",-863952629));
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
var rend = (function (){var G__14130 = (((engine instanceof cljs.core.Keyword))?engine.fqn:null);
switch (G__14130) {
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

var c_14173 = farn.events.new_resize_chan.call(null);
var c__6459__auto___14174 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6459__auto___14174,c_14173,stage,fswidth,fsheight,wid,hig,opts,rend,generated_canvas,world,ui,map__14129,map__14129__$1,engine,canvas,height,width,y,x,expand,background){
return (function (){
var f__6460__auto__ = (function (){var switch__6444__auto__ = ((function (c__6459__auto___14174,c_14173,stage,fswidth,fsheight,wid,hig,opts,rend,generated_canvas,world,ui,map__14129,map__14129__$1,engine,canvas,height,width,y,x,expand,background){
return (function (state_14156){
var state_val_14157 = (state_14156[(1)]);
if((state_val_14157 === (7))){
var inst_14135 = (state_14156[(2)]);
var inst_14136 = cljs.core.nth.call(null,inst_14135,(0),null);
var inst_14137 = cljs.core.nth.call(null,inst_14135,(1),null);
var inst_14138 = farn.utils.log.call(null,inst_14136,inst_14137);
var inst_14139 = rend.resize(inst_14136,inst_14137);
var inst_14140 = (inst_14136 / (2));
var inst_14141 = world.position.x = inst_14140;
var inst_14142 = (inst_14137 / (2));
var inst_14143 = world.position.y = inst_14142;
var inst_14144 = (inst_14136 / (2));
var inst_14145 = ui.position.x = inst_14144;
var inst_14146 = (inst_14137 / (2));
var inst_14147 = ui.position.y = inst_14146;
var inst_14148 = rend.render(stage);
var state_14156__$1 = (function (){var statearr_14158 = state_14156;
(statearr_14158[(7)] = inst_14143);

(statearr_14158[(8)] = inst_14141);

(statearr_14158[(9)] = inst_14147);

(statearr_14158[(10)] = inst_14148);

(statearr_14158[(11)] = inst_14138);

(statearr_14158[(12)] = inst_14139);

(statearr_14158[(13)] = inst_14145);

return statearr_14158;
})();
var statearr_14159_14175 = state_14156__$1;
(statearr_14159_14175[(2)] = null);

(statearr_14159_14175[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14157 === (6))){
var inst_14152 = (state_14156[(2)]);
var state_14156__$1 = state_14156;
var statearr_14160_14176 = state_14156__$1;
(statearr_14160_14176[(2)] = inst_14152);

(statearr_14160_14176[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14157 === (5))){
var state_14156__$1 = state_14156;
var statearr_14161_14177 = state_14156__$1;
(statearr_14161_14177[(2)] = null);

(statearr_14161_14177[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14157 === (4))){
var state_14156__$1 = state_14156;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14156__$1,(7),c_14173);
} else {
if((state_val_14157 === (3))){
var inst_14154 = (state_14156[(2)]);
var state_14156__$1 = state_14156;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14156__$1,inst_14154);
} else {
if((state_val_14157 === (2))){
var state_14156__$1 = state_14156;
var statearr_14162_14178 = state_14156__$1;
(statearr_14162_14178[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14157 === (1))){
var state_14156__$1 = state_14156;
var statearr_14164_14179 = state_14156__$1;
(statearr_14164_14179[(2)] = null);

(statearr_14164_14179[(1)] = (2));


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
});})(c__6459__auto___14174,c_14173,stage,fswidth,fsheight,wid,hig,opts,rend,generated_canvas,world,ui,map__14129,map__14129__$1,engine,canvas,height,width,y,x,expand,background))
;
return ((function (switch__6444__auto__,c__6459__auto___14174,c_14173,stage,fswidth,fsheight,wid,hig,opts,rend,generated_canvas,world,ui,map__14129,map__14129__$1,engine,canvas,height,width,y,x,expand,background){
return (function() {
var state_machine__6445__auto__ = null;
var state_machine__6445__auto____0 = (function (){
var statearr_14168 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14168[(0)] = state_machine__6445__auto__);

(statearr_14168[(1)] = (1));

return statearr_14168;
});
var state_machine__6445__auto____1 = (function (state_14156){
while(true){
var ret_value__6446__auto__ = (function (){try{while(true){
var result__6447__auto__ = switch__6444__auto__.call(null,state_14156);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6447__auto__;
}
break;
}
}catch (e14169){if((e14169 instanceof Object)){
var ex__6448__auto__ = e14169;
var statearr_14170_14180 = state_14156;
(statearr_14170_14180[(5)] = ex__6448__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14156);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14169;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14181 = state_14156;
state_14156 = G__14181;
continue;
} else {
return ret_value__6446__auto__;
}
break;
}
});
state_machine__6445__auto__ = function(state_14156){
switch(arguments.length){
case 0:
return state_machine__6445__auto____0.call(this);
case 1:
return state_machine__6445__auto____1.call(this,state_14156);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6445__auto____0;
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6445__auto____1;
return state_machine__6445__auto__;
})()
;})(switch__6444__auto__,c__6459__auto___14174,c_14173,stage,fswidth,fsheight,wid,hig,opts,rend,generated_canvas,world,ui,map__14129,map__14129__$1,engine,canvas,height,width,y,x,expand,background))
})();
var state__6461__auto__ = (function (){var statearr_14171 = f__6460__auto__.call(null);
(statearr_14171[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6459__auto___14174);

return statearr_14171;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6461__auto__);
});})(c__6459__auto___14174,c_14173,stage,fswidth,fsheight,wid,hig,opts,rend,generated_canvas,world,ui,map__14129,map__14129__$1,engine,canvas,height,width,y,x,expand,background))
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
var p__14085 = null;
if (arguments.length > 0) {
  p__14085 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return init__delegate.call(this,p__14085);};
init.cljs$lang$maxFixedArity = 0;
init.cljs$lang$applyTo = (function (arglist__14182){
var p__14085 = cljs.core.seq(arglist__14182);
return init__delegate(p__14085);
});
init.cljs$core$IFn$_invoke$arity$variadic = init__delegate;
return init;
})()
;
/**
* Draws an empty box that can serve as a default progress bar for preloading images
*/
farn.gfx.progress_texture = (function progress_texture(fraction,p__14183){
var map__14189 = p__14183;
var map__14189__$1 = ((cljs.core.seq_QMARK_.call(null,map__14189))?cljs.core.apply.call(null,cljs.core.hash_map,map__14189):map__14189);
var options = map__14189__$1;
var full_colour = cljs.core.get.call(null,map__14189__$1,new cljs.core.Keyword(null,"full-colour","full-colour",50761434),(8421504));
var lowlight_offset = cljs.core.get.call(null,map__14189__$1,new cljs.core.Keyword(null,"lowlight-offset","lowlight-offset",-612034438),(0));
var draw_border = cljs.core.get.call(null,map__14189__$1,new cljs.core.Keyword(null,"draw-border","draw-border",-1950022342),false);
var highlight_offset = cljs.core.get.call(null,map__14189__$1,new cljs.core.Keyword(null,"highlight-offset","highlight-offset",-1920235650),(0));
var height = cljs.core.get.call(null,map__14189__$1,new cljs.core.Keyword(null,"height","height",1025178622),(40));
var highlight = cljs.core.get.call(null,map__14189__$1,new cljs.core.Keyword(null,"highlight","highlight",-800930873));
var width = cljs.core.get.call(null,map__14189__$1,new cljs.core.Keyword(null,"width","width",-384071477),(600));
var lowlight_width = cljs.core.get.call(null,map__14189__$1,new cljs.core.Keyword(null,"lowlight-width","lowlight-width",-984309493),(1));
var border_colour = cljs.core.get.call(null,map__14189__$1,new cljs.core.Keyword(null,"border-colour","border-colour",-173895822),(16777215));
var border_width = cljs.core.get.call(null,map__14189__$1,new cljs.core.Keyword(null,"border-width","border-width",-1512605390),(2));
var empty_colour = cljs.core.get.call(null,map__14189__$1,new cljs.core.Keyword(null,"empty-colour","empty-colour",-1488420524),(0));
var lowlight = cljs.core.get.call(null,map__14189__$1,new cljs.core.Keyword(null,"lowlight","lowlight",2143243768));
var highlight_width = cljs.core.get.call(null,map__14189__$1,new cljs.core.Keyword(null,"highlight-width","highlight-width",1191874776),(1));
var box = (new PIXI.Graphics());
var G__14190_14194 = box;
G__14190_14194.beginFill(empty_colour);

G__14190_14194.lineStyle((0),border_colour);

G__14190_14194.drawRect((0),(0),width,height);

G__14190_14194.lineStyle((0),border_colour);

G__14190_14194.beginFill(full_colour);

G__14190_14194.drawRect(border_width,border_width,((((fraction < (1)))?fraction:(1)) * ((width - border_width) - border_width)),((height - border_width) - border_width));

G__14190_14194.endFill();


var bw_14195 = ((((fraction < (1)))?fraction:(1)) * width);
var x1_14196 = (border_width + highlight_offset);
var x2_14197 = (bw_14195 - highlight_offset);
var y1_14198 = (border_width + lowlight_offset);
var y2_14199 = ((height - border_width) - lowlight_offset);
if((bw_14195 > (0))){
if(cljs.core.truth_(highlight)){
var G__14191_14200 = box;
G__14191_14200.lineStyle(highlight_width,highlight);

G__14191_14200.moveTo(x1_14196,y2_14199);

G__14191_14200.lineTo(x1_14196,y1_14198);

G__14191_14200.lineTo(x2_14197,y1_14198);

} else {
}

if(cljs.core.truth_(lowlight)){
var G__14192_14201 = box;
G__14192_14201.lineStyle(lowlight_width,lowlight);

G__14192_14201.moveTo(x1_14196,y2_14199);

G__14192_14201.lineTo(x2_14197,y2_14199);

G__14192_14201.lineTo(x2_14197,y1_14198);

} else {
}
} else {
}

if(cljs.core.truth_(draw_border)){
var G__14193_14202 = box;
G__14193_14202.lineStyle(border_width,border_colour);

G__14193_14202.drawRect((0),(0),width,height);

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
var make_sprite__delegate = function (texture,p__14203){
var map__14205 = p__14203;
var map__14205__$1 = ((cljs.core.seq_QMARK_.call(null,map__14205))?cljs.core.apply.call(null,cljs.core.hash_map,map__14205):map__14205);
var yhandle = cljs.core.get.call(null,map__14205__$1,new cljs.core.Keyword(null,"yhandle","yhandle",608395252),0.5);
var xhandle = cljs.core.get.call(null,map__14205__$1,new cljs.core.Keyword(null,"xhandle","xhandle",373504767),0.5);
var y = cljs.core.get.call(null,map__14205__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var x = cljs.core.get.call(null,map__14205__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var s = (new PIXI.Sprite(texture));
s.anchor = farn.gfx.make_point.call(null,xhandle,yhandle);

s.x = x;

s.y = y;

return s;
};
var make_sprite = function (texture,var_args){
var p__14203 = null;
if (arguments.length > 1) {
  p__14203 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return make_sprite__delegate.call(this,texture,p__14203);};
make_sprite.cljs$lang$maxFixedArity = 1;
make_sprite.cljs$lang$applyTo = (function (arglist__14206){
var texture = cljs.core.first(arglist__14206);
var p__14203 = cljs.core.rest(arglist__14206);
return make_sprite__delegate(texture,p__14203);
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
return (function (state_14311){
var state_val_14312 = (state_14311[(1)]);
if((state_val_14312 === (7))){
var inst_14278 = (state_14311[(7)]);
var inst_14289 = (state_14311[(2)]);
var inst_14290 = farn.utils.ends_with_QMARK_.call(null,inst_14278,".png");
var state_14311__$1 = (function (){var statearr_14313 = state_14311;
(statearr_14313[(8)] = inst_14289);

return statearr_14313;
})();
if(inst_14290){
var statearr_14314_14339 = state_14311__$1;
(statearr_14314_14339[(1)] = (9));

} else {
var statearr_14315_14340 = state_14311__$1;
(statearr_14315_14340[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14312 === (1))){
var inst_14273 = (1);
var state_14311__$1 = (function (){var statearr_14316 = state_14311;
(statearr_14316[(9)] = inst_14273);

return statearr_14316;
})();
var statearr_14317_14341 = state_14311__$1;
(statearr_14317_14341[(2)] = null);

(statearr_14317_14341[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14312 === (4))){
var inst_14277 = (state_14311[(2)]);
var inst_14278 = cljs.core.nth.call(null,inst_14277,(0),null);
var inst_14279 = cljs.core.nth.call(null,inst_14277,(1),null);
var inst_14280 = new cljs.core.Keyword(null,"debug-delay","debug-delay",-1920207820).cljs$core$IFn$_invoke$arity$1(options__$1);
var state_14311__$1 = (function (){var statearr_14318 = state_14311;
(statearr_14318[(7)] = inst_14278);

(statearr_14318[(10)] = inst_14279);

return statearr_14318;
})();
if(cljs.core.truth_(inst_14280)){
var statearr_14319_14342 = state_14311__$1;
(statearr_14319_14342[(1)] = (5));

} else {
var statearr_14320_14343 = state_14311__$1;
(statearr_14320_14343[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14312 === (13))){
var state_14311__$1 = state_14311;
var statearr_14321_14344 = state_14311__$1;
(statearr_14321_14344[(2)] = null);

(statearr_14321_14344[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14312 === (6))){
var state_14311__$1 = state_14311;
var statearr_14322_14345 = state_14311__$1;
(statearr_14322_14345[(2)] = null);

(statearr_14322_14345[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14312 === (3))){
var inst_14309 = (state_14311[(2)]);
var state_14311__$1 = state_14311;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14311__$1,inst_14309);
} else {
if((state_val_14312 === (12))){
var inst_14273 = (state_14311[(9)]);
var inst_14303 = (inst_14273 + (1));
var inst_14273__$1 = inst_14303;
var state_14311__$1 = (function (){var statearr_14323 = state_14311;
(statearr_14323[(9)] = inst_14273__$1);

return statearr_14323;
})();
var statearr_14324_14346 = state_14311__$1;
(statearr_14324_14346[(2)] = null);

(statearr_14324_14346[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14312 === (2))){
var state_14311__$1 = state_14311;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14311__$1,(4),finished);
} else {
if((state_val_14312 === (11))){
var inst_14273 = (state_14311[(9)]);
var inst_14297 = (state_14311[(2)]);
var inst_14298 = (inst_14273 / num_urls);
var inst_14299 = farn.gfx.progress_texture.call(null,inst_14298,options__$1);
var inst_14300 = progress_bar.setTexture(inst_14299);
var inst_14301 = (inst_14273 < num_urls);
var state_14311__$1 = (function (){var statearr_14325 = state_14311;
(statearr_14325[(11)] = inst_14297);

(statearr_14325[(12)] = inst_14300);

return statearr_14325;
})();
if(cljs.core.truth_(inst_14301)){
var statearr_14326_14347 = state_14311__$1;
(statearr_14326_14347[(1)] = (12));

} else {
var statearr_14327_14348 = state_14311__$1;
(statearr_14327_14348[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14312 === (9))){
var inst_14278 = (state_14311[(7)]);
var inst_14292 = farn.utils.url_keyword.call(null,inst_14278);
var inst_14293 = PIXI.Texture.fromImage(inst_14278);
var inst_14294 = cljs.core.swap_BANG_.call(null,farn.gfx._EQ_textures_EQ_,cljs.core.assoc,inst_14292,inst_14293);
var state_14311__$1 = state_14311;
var statearr_14328_14349 = state_14311__$1;
(statearr_14328_14349[(2)] = inst_14294);

(statearr_14328_14349[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14312 === (5))){
var inst_14282 = new cljs.core.Keyword(null,"debug-delay","debug-delay",-1920207820).cljs$core$IFn$_invoke$arity$1(options__$1);
var inst_14283 = (inst_14282 * (1000));
var inst_14284 = cljs.core.async.timeout.call(null,inst_14283);
var state_14311__$1 = state_14311;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14311__$1,(8),inst_14284);
} else {
if((state_val_14312 === (14))){
var inst_14307 = (state_14311[(2)]);
var state_14311__$1 = state_14311;
var statearr_14329_14350 = state_14311__$1;
(statearr_14329_14350[(2)] = inst_14307);

(statearr_14329_14350[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14312 === (10))){
var state_14311__$1 = state_14311;
var statearr_14330_14351 = state_14311__$1;
(statearr_14330_14351[(2)] = null);

(statearr_14330_14351[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14312 === (8))){
var inst_14286 = (state_14311[(2)]);
var state_14311__$1 = state_14311;
var statearr_14331_14352 = state_14311__$1;
(statearr_14331_14352[(2)] = inst_14286);

(statearr_14331_14352[(1)] = (7));


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
var statearr_14335 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14335[(0)] = state_machine__6445__auto__);

(statearr_14335[(1)] = (1));

return statearr_14335;
});
var state_machine__6445__auto____1 = (function (state_14311){
while(true){
var ret_value__6446__auto__ = (function (){try{while(true){
var result__6447__auto__ = switch__6444__auto__.call(null,state_14311);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6447__auto__;
}
break;
}
}catch (e14336){if((e14336 instanceof Object)){
var ex__6448__auto__ = e14336;
var statearr_14337_14353 = state_14311;
(statearr_14337_14353[(5)] = ex__6448__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14311);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14336;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14354 = state_14311;
state_14311 = G__14354;
continue;
} else {
return ret_value__6446__auto__;
}
break;
}
});
state_machine__6445__auto__ = function(state_14311){
switch(arguments.length){
case 0:
return state_machine__6445__auto____0.call(this);
case 1:
return state_machine__6445__auto____1.call(this,state_14311);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6445__auto____0;
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6445__auto____1;
return state_machine__6445__auto__;
})()
;})(switch__6444__auto__,c__6459__auto__,finished,num_urls,images,options__$1))
})();
var state__6461__auto__ = (function (){var statearr_14338 = f__6460__auto__.call(null);
(statearr_14338[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6459__auto__);

return statearr_14338;
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
load_urls.cljs$lang$applyTo = (function (arglist__14355){
var urls = cljs.core.first(arglist__14355);
arglist__14355 = cljs.core.next(arglist__14355);
var progress_bar = cljs.core.first(arglist__14355);
var options = cljs.core.rest(arglist__14355);
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
var fadeout__delegate = function (spr,p__14356){
var map__14396 = p__14356;
var map__14396__$1 = ((cljs.core.seq_QMARK_.call(null,map__14396))?cljs.core.apply.call(null,cljs.core.hash_map,map__14396):map__14396);
var end = cljs.core.get.call(null,map__14396__$1,new cljs.core.Keyword(null,"end","end",-268185958),(0));
var start = cljs.core.get.call(null,map__14396__$1,new cljs.core.Keyword(null,"start","start",-355208981),null);
var duration = cljs.core.get.call(null,map__14396__$1,new cljs.core.Keyword(null,"duration","duration",1444101068),(1));
var start__$1 = (((start == null))?spr.alpha:start);
var ticks = ((60) * duration);
var c__6459__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6459__auto__,start__$1,ticks,map__14396,map__14396__$1,end,start,duration){
return (function (){
var f__6460__auto__ = (function (){var switch__6444__auto__ = ((function (c__6459__auto__,start__$1,ticks,map__14396,map__14396__$1,end,start,duration){
return (function (state_14417){
var state_val_14418 = (state_14417[(1)]);
if((state_val_14418 === (7))){
var inst_14413 = (state_14417[(2)]);
var state_14417__$1 = state_14417;
var statearr_14419_14435 = state_14417__$1;
(statearr_14419_14435[(2)] = inst_14413);

(statearr_14419_14435[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14418 === (6))){
var state_14417__$1 = state_14417;
var statearr_14420_14436 = state_14417__$1;
(statearr_14420_14436[(2)] = null);

(statearr_14420_14436[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14418 === (5))){
var inst_14397 = (state_14417[(7)]);
var inst_14409 = (inst_14397 - (1));
var inst_14397__$1 = inst_14409;
var state_14417__$1 = (function (){var statearr_14421 = state_14417;
(statearr_14421[(7)] = inst_14397__$1);

return statearr_14421;
})();
var statearr_14422_14437 = state_14417__$1;
(statearr_14422_14437[(2)] = null);

(statearr_14422_14437[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14418 === (4))){
var inst_14397 = (state_14417[(7)]);
var inst_14401 = (state_14417[(2)]);
var inst_14402 = (start__$1 - end);
var inst_14403 = (inst_14397 / ticks);
var inst_14404 = (inst_14402 * inst_14403);
var inst_14405 = (end + inst_14404);
var inst_14406 = spr.alpha = inst_14405;
var inst_14407 = (inst_14397 > (0));
var state_14417__$1 = (function (){var statearr_14423 = state_14417;
(statearr_14423[(8)] = inst_14401);

(statearr_14423[(9)] = inst_14406);

return statearr_14423;
})();
if(cljs.core.truth_(inst_14407)){
var statearr_14424_14438 = state_14417__$1;
(statearr_14424_14438[(1)] = (5));

} else {
var statearr_14425_14439 = state_14417__$1;
(statearr_14425_14439[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14418 === (3))){
var inst_14415 = (state_14417[(2)]);
var state_14417__$1 = state_14417;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14417__$1,inst_14415);
} else {
if((state_val_14418 === (2))){
var inst_14399 = farn.events.next_frame.call(null);
var state_14417__$1 = state_14417;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14417__$1,(4),inst_14399);
} else {
if((state_val_14418 === (1))){
var inst_14397 = ticks;
var state_14417__$1 = (function (){var statearr_14426 = state_14417;
(statearr_14426[(7)] = inst_14397);

return statearr_14426;
})();
var statearr_14427_14440 = state_14417__$1;
(statearr_14427_14440[(2)] = null);

(statearr_14427_14440[(1)] = (2));


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
});})(c__6459__auto__,start__$1,ticks,map__14396,map__14396__$1,end,start,duration))
;
return ((function (switch__6444__auto__,c__6459__auto__,start__$1,ticks,map__14396,map__14396__$1,end,start,duration){
return (function() {
var state_machine__6445__auto__ = null;
var state_machine__6445__auto____0 = (function (){
var statearr_14431 = [null,null,null,null,null,null,null,null,null,null];
(statearr_14431[(0)] = state_machine__6445__auto__);

(statearr_14431[(1)] = (1));

return statearr_14431;
});
var state_machine__6445__auto____1 = (function (state_14417){
while(true){
var ret_value__6446__auto__ = (function (){try{while(true){
var result__6447__auto__ = switch__6444__auto__.call(null,state_14417);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6447__auto__;
}
break;
}
}catch (e14432){if((e14432 instanceof Object)){
var ex__6448__auto__ = e14432;
var statearr_14433_14441 = state_14417;
(statearr_14433_14441[(5)] = ex__6448__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14417);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14432;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14442 = state_14417;
state_14417 = G__14442;
continue;
} else {
return ret_value__6446__auto__;
}
break;
}
});
state_machine__6445__auto__ = function(state_14417){
switch(arguments.length){
case 0:
return state_machine__6445__auto____0.call(this);
case 1:
return state_machine__6445__auto____1.call(this,state_14417);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6445__auto____0;
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6445__auto____1;
return state_machine__6445__auto__;
})()
;})(switch__6444__auto__,c__6459__auto__,start__$1,ticks,map__14396,map__14396__$1,end,start,duration))
})();
var state__6461__auto__ = (function (){var statearr_14434 = f__6460__auto__.call(null);
(statearr_14434[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6459__auto__);

return statearr_14434;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6461__auto__);
});})(c__6459__auto__,start__$1,ticks,map__14396,map__14396__$1,end,start,duration))
);

return c__6459__auto__;
};
var fadeout = function (spr,var_args){
var p__14356 = null;
if (arguments.length > 1) {
  p__14356 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return fadeout__delegate.call(this,spr,p__14356);};
fadeout.cljs$lang$maxFixedArity = 1;
fadeout.cljs$lang$applyTo = (function (arglist__14443){
var spr = cljs.core.first(arglist__14443);
var p__14356 = cljs.core.rest(arglist__14443);
return fadeout__delegate(spr,p__14356);
});
fadeout.cljs$core$IFn$_invoke$arity$variadic = fadeout__delegate;
return fadeout;
})()
;
/**
* @param {...*} var_args
*/
farn.gfx.fadein = (function() { 
var fadein__delegate = function (spr,p__14444){
var map__14485 = p__14444;
var map__14485__$1 = ((cljs.core.seq_QMARK_.call(null,map__14485))?cljs.core.apply.call(null,cljs.core.hash_map,map__14485):map__14485);
var end = cljs.core.get.call(null,map__14485__$1,new cljs.core.Keyword(null,"end","end",-268185958),(1));
var start = cljs.core.get.call(null,map__14485__$1,new cljs.core.Keyword(null,"start","start",-355208981),(0));
var duration = cljs.core.get.call(null,map__14485__$1,new cljs.core.Keyword(null,"duration","duration",1444101068),(1));
var ticks = ((60) * duration);
var c__6459__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6459__auto__,ticks,map__14485,map__14485__$1,end,start,duration){
return (function (){
var f__6460__auto__ = (function (){var switch__6444__auto__ = ((function (c__6459__auto__,ticks,map__14485,map__14485__$1,end,start,duration){
return (function (state_14507){
var state_val_14508 = (state_14507[(1)]);
if((state_val_14508 === (7))){
var inst_14503 = (state_14507[(2)]);
var state_14507__$1 = state_14507;
var statearr_14509_14525 = state_14507__$1;
(statearr_14509_14525[(2)] = inst_14503);

(statearr_14509_14525[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14508 === (6))){
var state_14507__$1 = state_14507;
var statearr_14510_14526 = state_14507__$1;
(statearr_14510_14526[(2)] = null);

(statearr_14510_14526[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14508 === (5))){
var inst_14486 = (state_14507[(7)]);
var inst_14499 = (inst_14486 - (1));
var inst_14486__$1 = inst_14499;
var state_14507__$1 = (function (){var statearr_14511 = state_14507;
(statearr_14511[(7)] = inst_14486__$1);

return statearr_14511;
})();
var statearr_14512_14527 = state_14507__$1;
(statearr_14512_14527[(2)] = null);

(statearr_14512_14527[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14508 === (4))){
var inst_14486 = (state_14507[(7)]);
var inst_14490 = (state_14507[(2)]);
var inst_14491 = (end - start);
var inst_14492 = (ticks - inst_14486);
var inst_14493 = (inst_14492 / ticks);
var inst_14494 = (inst_14491 * inst_14493);
var inst_14495 = (start + inst_14494);
var inst_14496 = spr.alpha = inst_14495;
var inst_14497 = (inst_14486 > (0));
var state_14507__$1 = (function (){var statearr_14513 = state_14507;
(statearr_14513[(8)] = inst_14490);

(statearr_14513[(9)] = inst_14496);

return statearr_14513;
})();
if(cljs.core.truth_(inst_14497)){
var statearr_14514_14528 = state_14507__$1;
(statearr_14514_14528[(1)] = (5));

} else {
var statearr_14515_14529 = state_14507__$1;
(statearr_14515_14529[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14508 === (3))){
var inst_14505 = (state_14507[(2)]);
var state_14507__$1 = state_14507;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14507__$1,inst_14505);
} else {
if((state_val_14508 === (2))){
var inst_14488 = farn.events.next_frame.call(null);
var state_14507__$1 = state_14507;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14507__$1,(4),inst_14488);
} else {
if((state_val_14508 === (1))){
var inst_14486 = ticks;
var state_14507__$1 = (function (){var statearr_14516 = state_14507;
(statearr_14516[(7)] = inst_14486);

return statearr_14516;
})();
var statearr_14517_14530 = state_14507__$1;
(statearr_14517_14530[(2)] = null);

(statearr_14517_14530[(1)] = (2));


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
});})(c__6459__auto__,ticks,map__14485,map__14485__$1,end,start,duration))
;
return ((function (switch__6444__auto__,c__6459__auto__,ticks,map__14485,map__14485__$1,end,start,duration){
return (function() {
var state_machine__6445__auto__ = null;
var state_machine__6445__auto____0 = (function (){
var statearr_14521 = [null,null,null,null,null,null,null,null,null,null];
(statearr_14521[(0)] = state_machine__6445__auto__);

(statearr_14521[(1)] = (1));

return statearr_14521;
});
var state_machine__6445__auto____1 = (function (state_14507){
while(true){
var ret_value__6446__auto__ = (function (){try{while(true){
var result__6447__auto__ = switch__6444__auto__.call(null,state_14507);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6447__auto__;
}
break;
}
}catch (e14522){if((e14522 instanceof Object)){
var ex__6448__auto__ = e14522;
var statearr_14523_14531 = state_14507;
(statearr_14523_14531[(5)] = ex__6448__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14507);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14522;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14532 = state_14507;
state_14507 = G__14532;
continue;
} else {
return ret_value__6446__auto__;
}
break;
}
});
state_machine__6445__auto__ = function(state_14507){
switch(arguments.length){
case 0:
return state_machine__6445__auto____0.call(this);
case 1:
return state_machine__6445__auto____1.call(this,state_14507);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6445__auto____0;
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6445__auto____1;
return state_machine__6445__auto__;
})()
;})(switch__6444__auto__,c__6459__auto__,ticks,map__14485,map__14485__$1,end,start,duration))
})();
var state__6461__auto__ = (function (){var statearr_14524 = f__6460__auto__.call(null);
(statearr_14524[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6459__auto__);

return statearr_14524;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6461__auto__);
});})(c__6459__auto__,ticks,map__14485,map__14485__$1,end,start,duration))
);

return c__6459__auto__;
};
var fadein = function (spr,var_args){
var p__14444 = null;
if (arguments.length > 1) {
  p__14444 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return fadein__delegate.call(this,spr,p__14444);};
fadein.cljs$lang$maxFixedArity = 1;
fadein.cljs$lang$applyTo = (function (arglist__14533){
var spr = cljs.core.first(arglist__14533);
var p__14444 = cljs.core.rest(arglist__14533);
return fadein__delegate(spr,p__14444);
});
fadein.cljs$core$IFn$_invoke$arity$variadic = fadein__delegate;
return fadein;
})()
;
farn.gfx.sub_texture = (function sub_texture(texture,p__14534,p__14535){
var vec__14538 = p__14534;
var x = cljs.core.nth.call(null,vec__14538,(0),null);
var y = cljs.core.nth.call(null,vec__14538,(1),null);
var vec__14539 = p__14535;
var w = cljs.core.nth.call(null,vec__14539,(0),null);
var h = cljs.core.nth.call(null,vec__14539,(1),null);
return (new PIXI.Texture(texture,(new PIXI.Rectangle(x,y,w,h))));
});

//# sourceMappingURL=gfx.js.map