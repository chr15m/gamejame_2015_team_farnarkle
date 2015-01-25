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
var init__delegate = function (p__12559){
var map__12603 = p__12559;
var map__12603__$1 = ((cljs.core.seq_QMARK_.call(null,map__12603))?cljs.core.apply.call(null,cljs.core.hash_map,map__12603):map__12603);
var engine = cljs.core.get.call(null,map__12603__$1,new cljs.core.Keyword(null,"engine","engine",1459054265),new cljs.core.Keyword(null,"auto","auto",-566279492));
var canvas = cljs.core.get.call(null,map__12603__$1,new cljs.core.Keyword(null,"canvas","canvas",-1798817489));
var height = cljs.core.get.call(null,map__12603__$1,new cljs.core.Keyword(null,"height","height",1025178622),(600));
var width = cljs.core.get.call(null,map__12603__$1,new cljs.core.Keyword(null,"width","width",-384071477),(800));
var y = cljs.core.get.call(null,map__12603__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var x = cljs.core.get.call(null,map__12603__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var expand = cljs.core.get.call(null,map__12603__$1,new cljs.core.Keyword(null,"expand","expand",595248157),false);
var background = cljs.core.get.call(null,map__12603__$1,new cljs.core.Keyword(null,"background","background",-863952629));
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
var rend = (function (){var G__12604 = (((engine instanceof cljs.core.Keyword))?engine.fqn:null);
switch (G__12604) {
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

var c_12647 = farn.events.new_resize_chan.call(null);
var c__6459__auto___12648 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6459__auto___12648,c_12647,stage,fswidth,fsheight,wid,hig,opts,rend,generated_canvas,world,ui,map__12603,map__12603__$1,engine,canvas,height,width,y,x,expand,background){
return (function (){
var f__6460__auto__ = (function (){var switch__6444__auto__ = ((function (c__6459__auto___12648,c_12647,stage,fswidth,fsheight,wid,hig,opts,rend,generated_canvas,world,ui,map__12603,map__12603__$1,engine,canvas,height,width,y,x,expand,background){
return (function (state_12630){
var state_val_12631 = (state_12630[(1)]);
if((state_val_12631 === (7))){
var inst_12609 = (state_12630[(2)]);
var inst_12610 = cljs.core.nth.call(null,inst_12609,(0),null);
var inst_12611 = cljs.core.nth.call(null,inst_12609,(1),null);
var inst_12612 = farn.utils.log.call(null,inst_12610,inst_12611);
var inst_12613 = rend.resize(inst_12610,inst_12611);
var inst_12614 = (inst_12610 / (2));
var inst_12615 = world.position.x = inst_12614;
var inst_12616 = (inst_12611 / (2));
var inst_12617 = world.position.y = inst_12616;
var inst_12618 = (inst_12610 / (2));
var inst_12619 = ui.position.x = inst_12618;
var inst_12620 = (inst_12611 / (2));
var inst_12621 = ui.position.y = inst_12620;
var inst_12622 = rend.render(stage);
var state_12630__$1 = (function (){var statearr_12632 = state_12630;
(statearr_12632[(7)] = inst_12613);

(statearr_12632[(8)] = inst_12615);

(statearr_12632[(9)] = inst_12619);

(statearr_12632[(10)] = inst_12617);

(statearr_12632[(11)] = inst_12621);

(statearr_12632[(12)] = inst_12622);

(statearr_12632[(13)] = inst_12612);

return statearr_12632;
})();
var statearr_12633_12649 = state_12630__$1;
(statearr_12633_12649[(2)] = null);

(statearr_12633_12649[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12631 === (6))){
var inst_12626 = (state_12630[(2)]);
var state_12630__$1 = state_12630;
var statearr_12634_12650 = state_12630__$1;
(statearr_12634_12650[(2)] = inst_12626);

(statearr_12634_12650[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12631 === (5))){
var state_12630__$1 = state_12630;
var statearr_12635_12651 = state_12630__$1;
(statearr_12635_12651[(2)] = null);

(statearr_12635_12651[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12631 === (4))){
var state_12630__$1 = state_12630;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12630__$1,(7),c_12647);
} else {
if((state_val_12631 === (3))){
var inst_12628 = (state_12630[(2)]);
var state_12630__$1 = state_12630;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12630__$1,inst_12628);
} else {
if((state_val_12631 === (2))){
var state_12630__$1 = state_12630;
var statearr_12636_12652 = state_12630__$1;
(statearr_12636_12652[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12631 === (1))){
var state_12630__$1 = state_12630;
var statearr_12638_12653 = state_12630__$1;
(statearr_12638_12653[(2)] = null);

(statearr_12638_12653[(1)] = (2));


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
});})(c__6459__auto___12648,c_12647,stage,fswidth,fsheight,wid,hig,opts,rend,generated_canvas,world,ui,map__12603,map__12603__$1,engine,canvas,height,width,y,x,expand,background))
;
return ((function (switch__6444__auto__,c__6459__auto___12648,c_12647,stage,fswidth,fsheight,wid,hig,opts,rend,generated_canvas,world,ui,map__12603,map__12603__$1,engine,canvas,height,width,y,x,expand,background){
return (function() {
var state_machine__6445__auto__ = null;
var state_machine__6445__auto____0 = (function (){
var statearr_12642 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12642[(0)] = state_machine__6445__auto__);

(statearr_12642[(1)] = (1));

return statearr_12642;
});
var state_machine__6445__auto____1 = (function (state_12630){
while(true){
var ret_value__6446__auto__ = (function (){try{while(true){
var result__6447__auto__ = switch__6444__auto__.call(null,state_12630);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6447__auto__;
}
break;
}
}catch (e12643){if((e12643 instanceof Object)){
var ex__6448__auto__ = e12643;
var statearr_12644_12654 = state_12630;
(statearr_12644_12654[(5)] = ex__6448__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12630);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12643;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12655 = state_12630;
state_12630 = G__12655;
continue;
} else {
return ret_value__6446__auto__;
}
break;
}
});
state_machine__6445__auto__ = function(state_12630){
switch(arguments.length){
case 0:
return state_machine__6445__auto____0.call(this);
case 1:
return state_machine__6445__auto____1.call(this,state_12630);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6445__auto____0;
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6445__auto____1;
return state_machine__6445__auto__;
})()
;})(switch__6444__auto__,c__6459__auto___12648,c_12647,stage,fswidth,fsheight,wid,hig,opts,rend,generated_canvas,world,ui,map__12603,map__12603__$1,engine,canvas,height,width,y,x,expand,background))
})();
var state__6461__auto__ = (function (){var statearr_12645 = f__6460__auto__.call(null);
(statearr_12645[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6459__auto___12648);

return statearr_12645;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6461__auto__);
});})(c__6459__auto___12648,c_12647,stage,fswidth,fsheight,wid,hig,opts,rend,generated_canvas,world,ui,map__12603,map__12603__$1,engine,canvas,height,width,y,x,expand,background))
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
var p__12559 = null;
if (arguments.length > 0) {
  p__12559 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return init__delegate.call(this,p__12559);};
init.cljs$lang$maxFixedArity = 0;
init.cljs$lang$applyTo = (function (arglist__12656){
var p__12559 = cljs.core.seq(arglist__12656);
return init__delegate(p__12559);
});
init.cljs$core$IFn$_invoke$arity$variadic = init__delegate;
return init;
})()
;
/**
* Draws an empty box that can serve as a default progress bar for preloading images
*/
farn.gfx.progress_texture = (function progress_texture(fraction,p__12657){
var map__12663 = p__12657;
var map__12663__$1 = ((cljs.core.seq_QMARK_.call(null,map__12663))?cljs.core.apply.call(null,cljs.core.hash_map,map__12663):map__12663);
var options = map__12663__$1;
var full_colour = cljs.core.get.call(null,map__12663__$1,new cljs.core.Keyword(null,"full-colour","full-colour",50761434),(8421504));
var lowlight_offset = cljs.core.get.call(null,map__12663__$1,new cljs.core.Keyword(null,"lowlight-offset","lowlight-offset",-612034438),(0));
var draw_border = cljs.core.get.call(null,map__12663__$1,new cljs.core.Keyword(null,"draw-border","draw-border",-1950022342),false);
var highlight_offset = cljs.core.get.call(null,map__12663__$1,new cljs.core.Keyword(null,"highlight-offset","highlight-offset",-1920235650),(0));
var height = cljs.core.get.call(null,map__12663__$1,new cljs.core.Keyword(null,"height","height",1025178622),(40));
var highlight = cljs.core.get.call(null,map__12663__$1,new cljs.core.Keyword(null,"highlight","highlight",-800930873));
var width = cljs.core.get.call(null,map__12663__$1,new cljs.core.Keyword(null,"width","width",-384071477),(600));
var lowlight_width = cljs.core.get.call(null,map__12663__$1,new cljs.core.Keyword(null,"lowlight-width","lowlight-width",-984309493),(1));
var border_colour = cljs.core.get.call(null,map__12663__$1,new cljs.core.Keyword(null,"border-colour","border-colour",-173895822),(16777215));
var border_width = cljs.core.get.call(null,map__12663__$1,new cljs.core.Keyword(null,"border-width","border-width",-1512605390),(2));
var empty_colour = cljs.core.get.call(null,map__12663__$1,new cljs.core.Keyword(null,"empty-colour","empty-colour",-1488420524),(0));
var lowlight = cljs.core.get.call(null,map__12663__$1,new cljs.core.Keyword(null,"lowlight","lowlight",2143243768));
var highlight_width = cljs.core.get.call(null,map__12663__$1,new cljs.core.Keyword(null,"highlight-width","highlight-width",1191874776),(1));
var box = (new PIXI.Graphics());
var G__12664_12668 = box;
G__12664_12668.beginFill(empty_colour);

G__12664_12668.lineStyle((0),border_colour);

G__12664_12668.drawRect((0),(0),width,height);

G__12664_12668.lineStyle((0),border_colour);

G__12664_12668.beginFill(full_colour);

G__12664_12668.drawRect(border_width,border_width,((((fraction < (1)))?fraction:(1)) * ((width - border_width) - border_width)),((height - border_width) - border_width));

G__12664_12668.endFill();


var bw_12669 = ((((fraction < (1)))?fraction:(1)) * width);
var x1_12670 = (border_width + highlight_offset);
var x2_12671 = (bw_12669 - highlight_offset);
var y1_12672 = (border_width + lowlight_offset);
var y2_12673 = ((height - border_width) - lowlight_offset);
if((bw_12669 > (0))){
if(cljs.core.truth_(highlight)){
var G__12665_12674 = box;
G__12665_12674.lineStyle(highlight_width,highlight);

G__12665_12674.moveTo(x1_12670,y2_12673);

G__12665_12674.lineTo(x1_12670,y1_12672);

G__12665_12674.lineTo(x2_12671,y1_12672);

} else {
}

if(cljs.core.truth_(lowlight)){
var G__12666_12675 = box;
G__12666_12675.lineStyle(lowlight_width,lowlight);

G__12666_12675.moveTo(x1_12670,y2_12673);

G__12666_12675.lineTo(x2_12671,y2_12673);

G__12666_12675.lineTo(x2_12671,y1_12672);

} else {
}
} else {
}

if(cljs.core.truth_(draw_border)){
var G__12667_12676 = box;
G__12667_12676.lineStyle(border_width,border_colour);

G__12667_12676.drawRect((0),(0),width,height);

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
var make_sprite__delegate = function (texture,p__12677){
var map__12679 = p__12677;
var map__12679__$1 = ((cljs.core.seq_QMARK_.call(null,map__12679))?cljs.core.apply.call(null,cljs.core.hash_map,map__12679):map__12679);
var yhandle = cljs.core.get.call(null,map__12679__$1,new cljs.core.Keyword(null,"yhandle","yhandle",608395252),0.5);
var xhandle = cljs.core.get.call(null,map__12679__$1,new cljs.core.Keyword(null,"xhandle","xhandle",373504767),0.5);
var y = cljs.core.get.call(null,map__12679__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var x = cljs.core.get.call(null,map__12679__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var s = (new PIXI.Sprite(texture));
s.anchor = farn.gfx.make_point.call(null,xhandle,yhandle);

s.x = x;

s.y = y;

return s;
};
var make_sprite = function (texture,var_args){
var p__12677 = null;
if (arguments.length > 1) {
  p__12677 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return make_sprite__delegate.call(this,texture,p__12677);};
make_sprite.cljs$lang$maxFixedArity = 1;
make_sprite.cljs$lang$applyTo = (function (arglist__12680){
var texture = cljs.core.first(arglist__12680);
var p__12677 = cljs.core.rest(arglist__12680);
return make_sprite__delegate(texture,p__12677);
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
return (function (state_12785){
var state_val_12786 = (state_12785[(1)]);
if((state_val_12786 === (7))){
var inst_12752 = (state_12785[(7)]);
var inst_12763 = (state_12785[(2)]);
var inst_12764 = farn.utils.ends_with_QMARK_.call(null,inst_12752,".png");
var state_12785__$1 = (function (){var statearr_12787 = state_12785;
(statearr_12787[(8)] = inst_12763);

return statearr_12787;
})();
if(inst_12764){
var statearr_12788_12813 = state_12785__$1;
(statearr_12788_12813[(1)] = (9));

} else {
var statearr_12789_12814 = state_12785__$1;
(statearr_12789_12814[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12786 === (1))){
var inst_12747 = (1);
var state_12785__$1 = (function (){var statearr_12790 = state_12785;
(statearr_12790[(9)] = inst_12747);

return statearr_12790;
})();
var statearr_12791_12815 = state_12785__$1;
(statearr_12791_12815[(2)] = null);

(statearr_12791_12815[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12786 === (4))){
var inst_12751 = (state_12785[(2)]);
var inst_12752 = cljs.core.nth.call(null,inst_12751,(0),null);
var inst_12753 = cljs.core.nth.call(null,inst_12751,(1),null);
var inst_12754 = new cljs.core.Keyword(null,"debug-delay","debug-delay",-1920207820).cljs$core$IFn$_invoke$arity$1(options__$1);
var state_12785__$1 = (function (){var statearr_12792 = state_12785;
(statearr_12792[(7)] = inst_12752);

(statearr_12792[(10)] = inst_12753);

return statearr_12792;
})();
if(cljs.core.truth_(inst_12754)){
var statearr_12793_12816 = state_12785__$1;
(statearr_12793_12816[(1)] = (5));

} else {
var statearr_12794_12817 = state_12785__$1;
(statearr_12794_12817[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12786 === (13))){
var state_12785__$1 = state_12785;
var statearr_12795_12818 = state_12785__$1;
(statearr_12795_12818[(2)] = null);

(statearr_12795_12818[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12786 === (6))){
var state_12785__$1 = state_12785;
var statearr_12796_12819 = state_12785__$1;
(statearr_12796_12819[(2)] = null);

(statearr_12796_12819[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12786 === (3))){
var inst_12783 = (state_12785[(2)]);
var state_12785__$1 = state_12785;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12785__$1,inst_12783);
} else {
if((state_val_12786 === (12))){
var inst_12747 = (state_12785[(9)]);
var inst_12777 = (inst_12747 + (1));
var inst_12747__$1 = inst_12777;
var state_12785__$1 = (function (){var statearr_12797 = state_12785;
(statearr_12797[(9)] = inst_12747__$1);

return statearr_12797;
})();
var statearr_12798_12820 = state_12785__$1;
(statearr_12798_12820[(2)] = null);

(statearr_12798_12820[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12786 === (2))){
var state_12785__$1 = state_12785;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12785__$1,(4),finished);
} else {
if((state_val_12786 === (11))){
var inst_12747 = (state_12785[(9)]);
var inst_12771 = (state_12785[(2)]);
var inst_12772 = (inst_12747 / num_urls);
var inst_12773 = farn.gfx.progress_texture.call(null,inst_12772,options__$1);
var inst_12774 = progress_bar.setTexture(inst_12773);
var inst_12775 = (inst_12747 < num_urls);
var state_12785__$1 = (function (){var statearr_12799 = state_12785;
(statearr_12799[(11)] = inst_12771);

(statearr_12799[(12)] = inst_12774);

return statearr_12799;
})();
if(cljs.core.truth_(inst_12775)){
var statearr_12800_12821 = state_12785__$1;
(statearr_12800_12821[(1)] = (12));

} else {
var statearr_12801_12822 = state_12785__$1;
(statearr_12801_12822[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12786 === (9))){
var inst_12752 = (state_12785[(7)]);
var inst_12766 = farn.utils.url_keyword.call(null,inst_12752);
var inst_12767 = PIXI.Texture.fromImage(inst_12752);
var inst_12768 = cljs.core.swap_BANG_.call(null,farn.gfx._EQ_textures_EQ_,cljs.core.assoc,inst_12766,inst_12767);
var state_12785__$1 = state_12785;
var statearr_12802_12823 = state_12785__$1;
(statearr_12802_12823[(2)] = inst_12768);

(statearr_12802_12823[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12786 === (5))){
var inst_12756 = new cljs.core.Keyword(null,"debug-delay","debug-delay",-1920207820).cljs$core$IFn$_invoke$arity$1(options__$1);
var inst_12757 = (inst_12756 * (1000));
var inst_12758 = cljs.core.async.timeout.call(null,inst_12757);
var state_12785__$1 = state_12785;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12785__$1,(8),inst_12758);
} else {
if((state_val_12786 === (14))){
var inst_12781 = (state_12785[(2)]);
var state_12785__$1 = state_12785;
var statearr_12803_12824 = state_12785__$1;
(statearr_12803_12824[(2)] = inst_12781);

(statearr_12803_12824[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12786 === (10))){
var state_12785__$1 = state_12785;
var statearr_12804_12825 = state_12785__$1;
(statearr_12804_12825[(2)] = null);

(statearr_12804_12825[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12786 === (8))){
var inst_12760 = (state_12785[(2)]);
var state_12785__$1 = state_12785;
var statearr_12805_12826 = state_12785__$1;
(statearr_12805_12826[(2)] = inst_12760);

(statearr_12805_12826[(1)] = (7));


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
var statearr_12809 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12809[(0)] = state_machine__6445__auto__);

(statearr_12809[(1)] = (1));

return statearr_12809;
});
var state_machine__6445__auto____1 = (function (state_12785){
while(true){
var ret_value__6446__auto__ = (function (){try{while(true){
var result__6447__auto__ = switch__6444__auto__.call(null,state_12785);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6447__auto__;
}
break;
}
}catch (e12810){if((e12810 instanceof Object)){
var ex__6448__auto__ = e12810;
var statearr_12811_12827 = state_12785;
(statearr_12811_12827[(5)] = ex__6448__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12785);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12810;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12828 = state_12785;
state_12785 = G__12828;
continue;
} else {
return ret_value__6446__auto__;
}
break;
}
});
state_machine__6445__auto__ = function(state_12785){
switch(arguments.length){
case 0:
return state_machine__6445__auto____0.call(this);
case 1:
return state_machine__6445__auto____1.call(this,state_12785);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6445__auto____0;
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6445__auto____1;
return state_machine__6445__auto__;
})()
;})(switch__6444__auto__,c__6459__auto__,finished,num_urls,images,options__$1))
})();
var state__6461__auto__ = (function (){var statearr_12812 = f__6460__auto__.call(null);
(statearr_12812[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6459__auto__);

return statearr_12812;
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
load_urls.cljs$lang$applyTo = (function (arglist__12829){
var urls = cljs.core.first(arglist__12829);
arglist__12829 = cljs.core.next(arglist__12829);
var progress_bar = cljs.core.first(arglist__12829);
var options = cljs.core.rest(arglist__12829);
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
var fadeout__delegate = function (spr,p__12830){
var map__12870 = p__12830;
var map__12870__$1 = ((cljs.core.seq_QMARK_.call(null,map__12870))?cljs.core.apply.call(null,cljs.core.hash_map,map__12870):map__12870);
var end = cljs.core.get.call(null,map__12870__$1,new cljs.core.Keyword(null,"end","end",-268185958),(0));
var start = cljs.core.get.call(null,map__12870__$1,new cljs.core.Keyword(null,"start","start",-355208981),null);
var duration = cljs.core.get.call(null,map__12870__$1,new cljs.core.Keyword(null,"duration","duration",1444101068),(1));
var start__$1 = (((start == null))?spr.alpha:start);
var ticks = ((60) * duration);
var c__6459__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6459__auto__,start__$1,ticks,map__12870,map__12870__$1,end,start,duration){
return (function (){
var f__6460__auto__ = (function (){var switch__6444__auto__ = ((function (c__6459__auto__,start__$1,ticks,map__12870,map__12870__$1,end,start,duration){
return (function (state_12891){
var state_val_12892 = (state_12891[(1)]);
if((state_val_12892 === (7))){
var inst_12887 = (state_12891[(2)]);
var state_12891__$1 = state_12891;
var statearr_12893_12909 = state_12891__$1;
(statearr_12893_12909[(2)] = inst_12887);

(statearr_12893_12909[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12892 === (6))){
var state_12891__$1 = state_12891;
var statearr_12894_12910 = state_12891__$1;
(statearr_12894_12910[(2)] = null);

(statearr_12894_12910[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12892 === (5))){
var inst_12871 = (state_12891[(7)]);
var inst_12883 = (inst_12871 - (1));
var inst_12871__$1 = inst_12883;
var state_12891__$1 = (function (){var statearr_12895 = state_12891;
(statearr_12895[(7)] = inst_12871__$1);

return statearr_12895;
})();
var statearr_12896_12911 = state_12891__$1;
(statearr_12896_12911[(2)] = null);

(statearr_12896_12911[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12892 === (4))){
var inst_12871 = (state_12891[(7)]);
var inst_12875 = (state_12891[(2)]);
var inst_12876 = (start__$1 - end);
var inst_12877 = (inst_12871 / ticks);
var inst_12878 = (inst_12876 * inst_12877);
var inst_12879 = (end + inst_12878);
var inst_12880 = spr.alpha = inst_12879;
var inst_12881 = (inst_12871 > (0));
var state_12891__$1 = (function (){var statearr_12897 = state_12891;
(statearr_12897[(8)] = inst_12880);

(statearr_12897[(9)] = inst_12875);

return statearr_12897;
})();
if(cljs.core.truth_(inst_12881)){
var statearr_12898_12912 = state_12891__$1;
(statearr_12898_12912[(1)] = (5));

} else {
var statearr_12899_12913 = state_12891__$1;
(statearr_12899_12913[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12892 === (3))){
var inst_12889 = (state_12891[(2)]);
var state_12891__$1 = state_12891;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12891__$1,inst_12889);
} else {
if((state_val_12892 === (2))){
var inst_12873 = farn.events.next_frame.call(null);
var state_12891__$1 = state_12891;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12891__$1,(4),inst_12873);
} else {
if((state_val_12892 === (1))){
var inst_12871 = ticks;
var state_12891__$1 = (function (){var statearr_12900 = state_12891;
(statearr_12900[(7)] = inst_12871);

return statearr_12900;
})();
var statearr_12901_12914 = state_12891__$1;
(statearr_12901_12914[(2)] = null);

(statearr_12901_12914[(1)] = (2));


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
});})(c__6459__auto__,start__$1,ticks,map__12870,map__12870__$1,end,start,duration))
;
return ((function (switch__6444__auto__,c__6459__auto__,start__$1,ticks,map__12870,map__12870__$1,end,start,duration){
return (function() {
var state_machine__6445__auto__ = null;
var state_machine__6445__auto____0 = (function (){
var statearr_12905 = [null,null,null,null,null,null,null,null,null,null];
(statearr_12905[(0)] = state_machine__6445__auto__);

(statearr_12905[(1)] = (1));

return statearr_12905;
});
var state_machine__6445__auto____1 = (function (state_12891){
while(true){
var ret_value__6446__auto__ = (function (){try{while(true){
var result__6447__auto__ = switch__6444__auto__.call(null,state_12891);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6447__auto__;
}
break;
}
}catch (e12906){if((e12906 instanceof Object)){
var ex__6448__auto__ = e12906;
var statearr_12907_12915 = state_12891;
(statearr_12907_12915[(5)] = ex__6448__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12891);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12906;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12916 = state_12891;
state_12891 = G__12916;
continue;
} else {
return ret_value__6446__auto__;
}
break;
}
});
state_machine__6445__auto__ = function(state_12891){
switch(arguments.length){
case 0:
return state_machine__6445__auto____0.call(this);
case 1:
return state_machine__6445__auto____1.call(this,state_12891);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6445__auto____0;
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6445__auto____1;
return state_machine__6445__auto__;
})()
;})(switch__6444__auto__,c__6459__auto__,start__$1,ticks,map__12870,map__12870__$1,end,start,duration))
})();
var state__6461__auto__ = (function (){var statearr_12908 = f__6460__auto__.call(null);
(statearr_12908[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6459__auto__);

return statearr_12908;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6461__auto__);
});})(c__6459__auto__,start__$1,ticks,map__12870,map__12870__$1,end,start,duration))
);

return c__6459__auto__;
};
var fadeout = function (spr,var_args){
var p__12830 = null;
if (arguments.length > 1) {
  p__12830 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return fadeout__delegate.call(this,spr,p__12830);};
fadeout.cljs$lang$maxFixedArity = 1;
fadeout.cljs$lang$applyTo = (function (arglist__12917){
var spr = cljs.core.first(arglist__12917);
var p__12830 = cljs.core.rest(arglist__12917);
return fadeout__delegate(spr,p__12830);
});
fadeout.cljs$core$IFn$_invoke$arity$variadic = fadeout__delegate;
return fadeout;
})()
;
/**
* @param {...*} var_args
*/
farn.gfx.fadein = (function() { 
var fadein__delegate = function (spr,p__12918){
var map__12959 = p__12918;
var map__12959__$1 = ((cljs.core.seq_QMARK_.call(null,map__12959))?cljs.core.apply.call(null,cljs.core.hash_map,map__12959):map__12959);
var end = cljs.core.get.call(null,map__12959__$1,new cljs.core.Keyword(null,"end","end",-268185958),(1));
var start = cljs.core.get.call(null,map__12959__$1,new cljs.core.Keyword(null,"start","start",-355208981),(0));
var duration = cljs.core.get.call(null,map__12959__$1,new cljs.core.Keyword(null,"duration","duration",1444101068),(1));
var ticks = ((60) * duration);
var c__6459__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6459__auto__,ticks,map__12959,map__12959__$1,end,start,duration){
return (function (){
var f__6460__auto__ = (function (){var switch__6444__auto__ = ((function (c__6459__auto__,ticks,map__12959,map__12959__$1,end,start,duration){
return (function (state_12981){
var state_val_12982 = (state_12981[(1)]);
if((state_val_12982 === (7))){
var inst_12977 = (state_12981[(2)]);
var state_12981__$1 = state_12981;
var statearr_12983_12999 = state_12981__$1;
(statearr_12983_12999[(2)] = inst_12977);

(statearr_12983_12999[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12982 === (6))){
var state_12981__$1 = state_12981;
var statearr_12984_13000 = state_12981__$1;
(statearr_12984_13000[(2)] = null);

(statearr_12984_13000[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12982 === (5))){
var inst_12960 = (state_12981[(7)]);
var inst_12973 = (inst_12960 - (1));
var inst_12960__$1 = inst_12973;
var state_12981__$1 = (function (){var statearr_12985 = state_12981;
(statearr_12985[(7)] = inst_12960__$1);

return statearr_12985;
})();
var statearr_12986_13001 = state_12981__$1;
(statearr_12986_13001[(2)] = null);

(statearr_12986_13001[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12982 === (4))){
var inst_12960 = (state_12981[(7)]);
var inst_12964 = (state_12981[(2)]);
var inst_12965 = (end - start);
var inst_12966 = (ticks - inst_12960);
var inst_12967 = (inst_12966 / ticks);
var inst_12968 = (inst_12965 * inst_12967);
var inst_12969 = (start + inst_12968);
var inst_12970 = spr.alpha = inst_12969;
var inst_12971 = (inst_12960 > (0));
var state_12981__$1 = (function (){var statearr_12987 = state_12981;
(statearr_12987[(8)] = inst_12964);

(statearr_12987[(9)] = inst_12970);

return statearr_12987;
})();
if(cljs.core.truth_(inst_12971)){
var statearr_12988_13002 = state_12981__$1;
(statearr_12988_13002[(1)] = (5));

} else {
var statearr_12989_13003 = state_12981__$1;
(statearr_12989_13003[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12982 === (3))){
var inst_12979 = (state_12981[(2)]);
var state_12981__$1 = state_12981;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12981__$1,inst_12979);
} else {
if((state_val_12982 === (2))){
var inst_12962 = farn.events.next_frame.call(null);
var state_12981__$1 = state_12981;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12981__$1,(4),inst_12962);
} else {
if((state_val_12982 === (1))){
var inst_12960 = ticks;
var state_12981__$1 = (function (){var statearr_12990 = state_12981;
(statearr_12990[(7)] = inst_12960);

return statearr_12990;
})();
var statearr_12991_13004 = state_12981__$1;
(statearr_12991_13004[(2)] = null);

(statearr_12991_13004[(1)] = (2));


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
});})(c__6459__auto__,ticks,map__12959,map__12959__$1,end,start,duration))
;
return ((function (switch__6444__auto__,c__6459__auto__,ticks,map__12959,map__12959__$1,end,start,duration){
return (function() {
var state_machine__6445__auto__ = null;
var state_machine__6445__auto____0 = (function (){
var statearr_12995 = [null,null,null,null,null,null,null,null,null,null];
(statearr_12995[(0)] = state_machine__6445__auto__);

(statearr_12995[(1)] = (1));

return statearr_12995;
});
var state_machine__6445__auto____1 = (function (state_12981){
while(true){
var ret_value__6446__auto__ = (function (){try{while(true){
var result__6447__auto__ = switch__6444__auto__.call(null,state_12981);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6447__auto__;
}
break;
}
}catch (e12996){if((e12996 instanceof Object)){
var ex__6448__auto__ = e12996;
var statearr_12997_13005 = state_12981;
(statearr_12997_13005[(5)] = ex__6448__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12981);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12996;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13006 = state_12981;
state_12981 = G__13006;
continue;
} else {
return ret_value__6446__auto__;
}
break;
}
});
state_machine__6445__auto__ = function(state_12981){
switch(arguments.length){
case 0:
return state_machine__6445__auto____0.call(this);
case 1:
return state_machine__6445__auto____1.call(this,state_12981);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6445__auto____0;
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6445__auto____1;
return state_machine__6445__auto__;
})()
;})(switch__6444__auto__,c__6459__auto__,ticks,map__12959,map__12959__$1,end,start,duration))
})();
var state__6461__auto__ = (function (){var statearr_12998 = f__6460__auto__.call(null);
(statearr_12998[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6459__auto__);

return statearr_12998;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6461__auto__);
});})(c__6459__auto__,ticks,map__12959,map__12959__$1,end,start,duration))
);

return c__6459__auto__;
};
var fadein = function (spr,var_args){
var p__12918 = null;
if (arguments.length > 1) {
  p__12918 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return fadein__delegate.call(this,spr,p__12918);};
fadein.cljs$lang$maxFixedArity = 1;
fadein.cljs$lang$applyTo = (function (arglist__13007){
var spr = cljs.core.first(arglist__13007);
var p__12918 = cljs.core.rest(arglist__13007);
return fadein__delegate(spr,p__12918);
});
fadein.cljs$core$IFn$_invoke$arity$variadic = fadein__delegate;
return fadein;
})()
;
farn.gfx.sub_texture = (function sub_texture(texture,p__13008,p__13009){
var vec__13012 = p__13008;
var x = cljs.core.nth.call(null,vec__13012,(0),null);
var y = cljs.core.nth.call(null,vec__13012,(1),null);
var vec__13013 = p__13009;
var w = cljs.core.nth.call(null,vec__13013,(0),null);
var h = cljs.core.nth.call(null,vec__13013,(1),null);
return (new PIXI.Texture(texture,(new PIXI.Rectangle(x,y,w,h))));
});

//# sourceMappingURL=gfx.js.map