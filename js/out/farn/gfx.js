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
var init__delegate = function (p__10630){
var map__10674 = p__10630;
var map__10674__$1 = ((cljs.core.seq_QMARK_.call(null,map__10674))?cljs.core.apply.call(null,cljs.core.hash_map,map__10674):map__10674);
var engine = cljs.core.get.call(null,map__10674__$1,new cljs.core.Keyword(null,"engine","engine",1459054265),new cljs.core.Keyword(null,"auto","auto",-566279492));
var canvas = cljs.core.get.call(null,map__10674__$1,new cljs.core.Keyword(null,"canvas","canvas",-1798817489));
var height = cljs.core.get.call(null,map__10674__$1,new cljs.core.Keyword(null,"height","height",1025178622),(600));
var width = cljs.core.get.call(null,map__10674__$1,new cljs.core.Keyword(null,"width","width",-384071477),(800));
var y = cljs.core.get.call(null,map__10674__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var x = cljs.core.get.call(null,map__10674__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var expand = cljs.core.get.call(null,map__10674__$1,new cljs.core.Keyword(null,"expand","expand",595248157),false);
var background = cljs.core.get.call(null,map__10674__$1,new cljs.core.Keyword(null,"background","background",-863952629));
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
var rend = (function (){var G__10675 = (((engine instanceof cljs.core.Keyword))?engine.fqn:null);
switch (G__10675) {
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

var c_10718 = farn.events.new_resize_chan.call(null);
var c__6459__auto___10719 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6459__auto___10719,c_10718,stage,fswidth,fsheight,wid,hig,opts,rend,generated_canvas,world,ui,map__10674,map__10674__$1,engine,canvas,height,width,y,x,expand,background){
return (function (){
var f__6460__auto__ = (function (){var switch__6444__auto__ = ((function (c__6459__auto___10719,c_10718,stage,fswidth,fsheight,wid,hig,opts,rend,generated_canvas,world,ui,map__10674,map__10674__$1,engine,canvas,height,width,y,x,expand,background){
return (function (state_10701){
var state_val_10702 = (state_10701[(1)]);
if((state_val_10702 === (7))){
var inst_10680 = (state_10701[(2)]);
var inst_10681 = cljs.core.nth.call(null,inst_10680,(0),null);
var inst_10682 = cljs.core.nth.call(null,inst_10680,(1),null);
var inst_10683 = farn.utils.log.call(null,inst_10681,inst_10682);
var inst_10684 = rend.resize(inst_10681,inst_10682);
var inst_10685 = (inst_10681 / (2));
var inst_10686 = world.position.x = inst_10685;
var inst_10687 = (inst_10682 / (2));
var inst_10688 = world.position.y = inst_10687;
var inst_10689 = (inst_10681 / (2));
var inst_10690 = ui.position.x = inst_10689;
var inst_10691 = (inst_10682 / (2));
var inst_10692 = ui.position.y = inst_10691;
var inst_10693 = rend.render(stage);
var state_10701__$1 = (function (){var statearr_10703 = state_10701;
(statearr_10703[(7)] = inst_10686);

(statearr_10703[(8)] = inst_10683);

(statearr_10703[(9)] = inst_10684);

(statearr_10703[(10)] = inst_10688);

(statearr_10703[(11)] = inst_10693);

(statearr_10703[(12)] = inst_10692);

(statearr_10703[(13)] = inst_10690);

return statearr_10703;
})();
var statearr_10704_10720 = state_10701__$1;
(statearr_10704_10720[(2)] = null);

(statearr_10704_10720[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10702 === (6))){
var inst_10697 = (state_10701[(2)]);
var state_10701__$1 = state_10701;
var statearr_10705_10721 = state_10701__$1;
(statearr_10705_10721[(2)] = inst_10697);

(statearr_10705_10721[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10702 === (5))){
var state_10701__$1 = state_10701;
var statearr_10706_10722 = state_10701__$1;
(statearr_10706_10722[(2)] = null);

(statearr_10706_10722[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10702 === (4))){
var state_10701__$1 = state_10701;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10701__$1,(7),c_10718);
} else {
if((state_val_10702 === (3))){
var inst_10699 = (state_10701[(2)]);
var state_10701__$1 = state_10701;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10701__$1,inst_10699);
} else {
if((state_val_10702 === (2))){
var state_10701__$1 = state_10701;
var statearr_10707_10723 = state_10701__$1;
(statearr_10707_10723[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10702 === (1))){
var state_10701__$1 = state_10701;
var statearr_10709_10724 = state_10701__$1;
(statearr_10709_10724[(2)] = null);

(statearr_10709_10724[(1)] = (2));


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
});})(c__6459__auto___10719,c_10718,stage,fswidth,fsheight,wid,hig,opts,rend,generated_canvas,world,ui,map__10674,map__10674__$1,engine,canvas,height,width,y,x,expand,background))
;
return ((function (switch__6444__auto__,c__6459__auto___10719,c_10718,stage,fswidth,fsheight,wid,hig,opts,rend,generated_canvas,world,ui,map__10674,map__10674__$1,engine,canvas,height,width,y,x,expand,background){
return (function() {
var state_machine__6445__auto__ = null;
var state_machine__6445__auto____0 = (function (){
var statearr_10713 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_10713[(0)] = state_machine__6445__auto__);

(statearr_10713[(1)] = (1));

return statearr_10713;
});
var state_machine__6445__auto____1 = (function (state_10701){
while(true){
var ret_value__6446__auto__ = (function (){try{while(true){
var result__6447__auto__ = switch__6444__auto__.call(null,state_10701);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6447__auto__;
}
break;
}
}catch (e10714){if((e10714 instanceof Object)){
var ex__6448__auto__ = e10714;
var statearr_10715_10725 = state_10701;
(statearr_10715_10725[(5)] = ex__6448__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10701);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10714;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10726 = state_10701;
state_10701 = G__10726;
continue;
} else {
return ret_value__6446__auto__;
}
break;
}
});
state_machine__6445__auto__ = function(state_10701){
switch(arguments.length){
case 0:
return state_machine__6445__auto____0.call(this);
case 1:
return state_machine__6445__auto____1.call(this,state_10701);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6445__auto____0;
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6445__auto____1;
return state_machine__6445__auto__;
})()
;})(switch__6444__auto__,c__6459__auto___10719,c_10718,stage,fswidth,fsheight,wid,hig,opts,rend,generated_canvas,world,ui,map__10674,map__10674__$1,engine,canvas,height,width,y,x,expand,background))
})();
var state__6461__auto__ = (function (){var statearr_10716 = f__6460__auto__.call(null);
(statearr_10716[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6459__auto___10719);

return statearr_10716;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6461__auto__);
});})(c__6459__auto___10719,c_10718,stage,fswidth,fsheight,wid,hig,opts,rend,generated_canvas,world,ui,map__10674,map__10674__$1,engine,canvas,height,width,y,x,expand,background))
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
var p__10630 = null;
if (arguments.length > 0) {
  p__10630 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return init__delegate.call(this,p__10630);};
init.cljs$lang$maxFixedArity = 0;
init.cljs$lang$applyTo = (function (arglist__10727){
var p__10630 = cljs.core.seq(arglist__10727);
return init__delegate(p__10630);
});
init.cljs$core$IFn$_invoke$arity$variadic = init__delegate;
return init;
})()
;
/**
* Draws an empty box that can serve as a default progress bar for preloading images
*/
farn.gfx.progress_texture = (function progress_texture(fraction,p__10728){
var map__10734 = p__10728;
var map__10734__$1 = ((cljs.core.seq_QMARK_.call(null,map__10734))?cljs.core.apply.call(null,cljs.core.hash_map,map__10734):map__10734);
var options = map__10734__$1;
var full_colour = cljs.core.get.call(null,map__10734__$1,new cljs.core.Keyword(null,"full-colour","full-colour",50761434),(8421504));
var lowlight_offset = cljs.core.get.call(null,map__10734__$1,new cljs.core.Keyword(null,"lowlight-offset","lowlight-offset",-612034438),(0));
var draw_border = cljs.core.get.call(null,map__10734__$1,new cljs.core.Keyword(null,"draw-border","draw-border",-1950022342),false);
var highlight_offset = cljs.core.get.call(null,map__10734__$1,new cljs.core.Keyword(null,"highlight-offset","highlight-offset",-1920235650),(0));
var height = cljs.core.get.call(null,map__10734__$1,new cljs.core.Keyword(null,"height","height",1025178622),(40));
var highlight = cljs.core.get.call(null,map__10734__$1,new cljs.core.Keyword(null,"highlight","highlight",-800930873));
var width = cljs.core.get.call(null,map__10734__$1,new cljs.core.Keyword(null,"width","width",-384071477),(600));
var lowlight_width = cljs.core.get.call(null,map__10734__$1,new cljs.core.Keyword(null,"lowlight-width","lowlight-width",-984309493),(1));
var border_colour = cljs.core.get.call(null,map__10734__$1,new cljs.core.Keyword(null,"border-colour","border-colour",-173895822),(16777215));
var border_width = cljs.core.get.call(null,map__10734__$1,new cljs.core.Keyword(null,"border-width","border-width",-1512605390),(2));
var empty_colour = cljs.core.get.call(null,map__10734__$1,new cljs.core.Keyword(null,"empty-colour","empty-colour",-1488420524),(0));
var lowlight = cljs.core.get.call(null,map__10734__$1,new cljs.core.Keyword(null,"lowlight","lowlight",2143243768));
var highlight_width = cljs.core.get.call(null,map__10734__$1,new cljs.core.Keyword(null,"highlight-width","highlight-width",1191874776),(1));
var box = (new PIXI.Graphics());
var G__10735_10739 = box;
G__10735_10739.beginFill(empty_colour);

G__10735_10739.lineStyle((0),border_colour);

G__10735_10739.drawRect((0),(0),width,height);

G__10735_10739.lineStyle((0),border_colour);

G__10735_10739.beginFill(full_colour);

G__10735_10739.drawRect(border_width,border_width,((((fraction < (1)))?fraction:(1)) * ((width - border_width) - border_width)),((height - border_width) - border_width));

G__10735_10739.endFill();


var bw_10740 = ((((fraction < (1)))?fraction:(1)) * width);
var x1_10741 = (border_width + highlight_offset);
var x2_10742 = (bw_10740 - highlight_offset);
var y1_10743 = (border_width + lowlight_offset);
var y2_10744 = ((height - border_width) - lowlight_offset);
if((bw_10740 > (0))){
if(cljs.core.truth_(highlight)){
var G__10736_10745 = box;
G__10736_10745.lineStyle(highlight_width,highlight);

G__10736_10745.moveTo(x1_10741,y2_10744);

G__10736_10745.lineTo(x1_10741,y1_10743);

G__10736_10745.lineTo(x2_10742,y1_10743);

} else {
}

if(cljs.core.truth_(lowlight)){
var G__10737_10746 = box;
G__10737_10746.lineStyle(lowlight_width,lowlight);

G__10737_10746.moveTo(x1_10741,y2_10744);

G__10737_10746.lineTo(x2_10742,y2_10744);

G__10737_10746.lineTo(x2_10742,y1_10743);

} else {
}
} else {
}

if(cljs.core.truth_(draw_border)){
var G__10738_10747 = box;
G__10738_10747.lineStyle(border_width,border_colour);

G__10738_10747.drawRect((0),(0),width,height);

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
var make_sprite__delegate = function (texture,p__10748){
var map__10750 = p__10748;
var map__10750__$1 = ((cljs.core.seq_QMARK_.call(null,map__10750))?cljs.core.apply.call(null,cljs.core.hash_map,map__10750):map__10750);
var yhandle = cljs.core.get.call(null,map__10750__$1,new cljs.core.Keyword(null,"yhandle","yhandle",608395252),0.5);
var xhandle = cljs.core.get.call(null,map__10750__$1,new cljs.core.Keyword(null,"xhandle","xhandle",373504767),0.5);
var y = cljs.core.get.call(null,map__10750__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var x = cljs.core.get.call(null,map__10750__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var s = (new PIXI.Sprite(texture));
s.anchor = farn.gfx.make_point.call(null,xhandle,yhandle);

s.x = x;

s.y = y;

return s;
};
var make_sprite = function (texture,var_args){
var p__10748 = null;
if (arguments.length > 1) {
  p__10748 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return make_sprite__delegate.call(this,texture,p__10748);};
make_sprite.cljs$lang$maxFixedArity = 1;
make_sprite.cljs$lang$applyTo = (function (arglist__10751){
var texture = cljs.core.first(arglist__10751);
var p__10748 = cljs.core.rest(arglist__10751);
return make_sprite__delegate(texture,p__10748);
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
return (function (state_10856){
var state_val_10857 = (state_10856[(1)]);
if((state_val_10857 === (7))){
var inst_10823 = (state_10856[(7)]);
var inst_10834 = (state_10856[(2)]);
var inst_10835 = farn.utils.ends_with_QMARK_.call(null,inst_10823,".png");
var state_10856__$1 = (function (){var statearr_10858 = state_10856;
(statearr_10858[(8)] = inst_10834);

return statearr_10858;
})();
if(inst_10835){
var statearr_10859_10884 = state_10856__$1;
(statearr_10859_10884[(1)] = (9));

} else {
var statearr_10860_10885 = state_10856__$1;
(statearr_10860_10885[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10857 === (1))){
var inst_10818 = (1);
var state_10856__$1 = (function (){var statearr_10861 = state_10856;
(statearr_10861[(9)] = inst_10818);

return statearr_10861;
})();
var statearr_10862_10886 = state_10856__$1;
(statearr_10862_10886[(2)] = null);

(statearr_10862_10886[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10857 === (4))){
var inst_10822 = (state_10856[(2)]);
var inst_10823 = cljs.core.nth.call(null,inst_10822,(0),null);
var inst_10824 = cljs.core.nth.call(null,inst_10822,(1),null);
var inst_10825 = new cljs.core.Keyword(null,"debug-delay","debug-delay",-1920207820).cljs$core$IFn$_invoke$arity$1(options__$1);
var state_10856__$1 = (function (){var statearr_10863 = state_10856;
(statearr_10863[(7)] = inst_10823);

(statearr_10863[(10)] = inst_10824);

return statearr_10863;
})();
if(cljs.core.truth_(inst_10825)){
var statearr_10864_10887 = state_10856__$1;
(statearr_10864_10887[(1)] = (5));

} else {
var statearr_10865_10888 = state_10856__$1;
(statearr_10865_10888[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10857 === (13))){
var state_10856__$1 = state_10856;
var statearr_10866_10889 = state_10856__$1;
(statearr_10866_10889[(2)] = null);

(statearr_10866_10889[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10857 === (6))){
var state_10856__$1 = state_10856;
var statearr_10867_10890 = state_10856__$1;
(statearr_10867_10890[(2)] = null);

(statearr_10867_10890[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10857 === (3))){
var inst_10854 = (state_10856[(2)]);
var state_10856__$1 = state_10856;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10856__$1,inst_10854);
} else {
if((state_val_10857 === (12))){
var inst_10818 = (state_10856[(9)]);
var inst_10848 = (inst_10818 + (1));
var inst_10818__$1 = inst_10848;
var state_10856__$1 = (function (){var statearr_10868 = state_10856;
(statearr_10868[(9)] = inst_10818__$1);

return statearr_10868;
})();
var statearr_10869_10891 = state_10856__$1;
(statearr_10869_10891[(2)] = null);

(statearr_10869_10891[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10857 === (2))){
var state_10856__$1 = state_10856;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10856__$1,(4),finished);
} else {
if((state_val_10857 === (11))){
var inst_10818 = (state_10856[(9)]);
var inst_10842 = (state_10856[(2)]);
var inst_10843 = (inst_10818 / num_urls);
var inst_10844 = farn.gfx.progress_texture.call(null,inst_10843,options__$1);
var inst_10845 = progress_bar.setTexture(inst_10844);
var inst_10846 = (inst_10818 < num_urls);
var state_10856__$1 = (function (){var statearr_10870 = state_10856;
(statearr_10870[(11)] = inst_10842);

(statearr_10870[(12)] = inst_10845);

return statearr_10870;
})();
if(cljs.core.truth_(inst_10846)){
var statearr_10871_10892 = state_10856__$1;
(statearr_10871_10892[(1)] = (12));

} else {
var statearr_10872_10893 = state_10856__$1;
(statearr_10872_10893[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10857 === (9))){
var inst_10823 = (state_10856[(7)]);
var inst_10837 = farn.utils.url_keyword.call(null,inst_10823);
var inst_10838 = PIXI.Texture.fromImage(inst_10823);
var inst_10839 = cljs.core.swap_BANG_.call(null,farn.gfx._EQ_textures_EQ_,cljs.core.assoc,inst_10837,inst_10838);
var state_10856__$1 = state_10856;
var statearr_10873_10894 = state_10856__$1;
(statearr_10873_10894[(2)] = inst_10839);

(statearr_10873_10894[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10857 === (5))){
var inst_10827 = new cljs.core.Keyword(null,"debug-delay","debug-delay",-1920207820).cljs$core$IFn$_invoke$arity$1(options__$1);
var inst_10828 = (inst_10827 * (1000));
var inst_10829 = cljs.core.async.timeout.call(null,inst_10828);
var state_10856__$1 = state_10856;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10856__$1,(8),inst_10829);
} else {
if((state_val_10857 === (14))){
var inst_10852 = (state_10856[(2)]);
var state_10856__$1 = state_10856;
var statearr_10874_10895 = state_10856__$1;
(statearr_10874_10895[(2)] = inst_10852);

(statearr_10874_10895[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10857 === (10))){
var state_10856__$1 = state_10856;
var statearr_10875_10896 = state_10856__$1;
(statearr_10875_10896[(2)] = null);

(statearr_10875_10896[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10857 === (8))){
var inst_10831 = (state_10856[(2)]);
var state_10856__$1 = state_10856;
var statearr_10876_10897 = state_10856__$1;
(statearr_10876_10897[(2)] = inst_10831);

(statearr_10876_10897[(1)] = (7));


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
var statearr_10880 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_10880[(0)] = state_machine__6445__auto__);

(statearr_10880[(1)] = (1));

return statearr_10880;
});
var state_machine__6445__auto____1 = (function (state_10856){
while(true){
var ret_value__6446__auto__ = (function (){try{while(true){
var result__6447__auto__ = switch__6444__auto__.call(null,state_10856);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6447__auto__;
}
break;
}
}catch (e10881){if((e10881 instanceof Object)){
var ex__6448__auto__ = e10881;
var statearr_10882_10898 = state_10856;
(statearr_10882_10898[(5)] = ex__6448__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10856);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10881;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10899 = state_10856;
state_10856 = G__10899;
continue;
} else {
return ret_value__6446__auto__;
}
break;
}
});
state_machine__6445__auto__ = function(state_10856){
switch(arguments.length){
case 0:
return state_machine__6445__auto____0.call(this);
case 1:
return state_machine__6445__auto____1.call(this,state_10856);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6445__auto____0;
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6445__auto____1;
return state_machine__6445__auto__;
})()
;})(switch__6444__auto__,c__6459__auto__,finished,num_urls,images,options__$1))
})();
var state__6461__auto__ = (function (){var statearr_10883 = f__6460__auto__.call(null);
(statearr_10883[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6459__auto__);

return statearr_10883;
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
load_urls.cljs$lang$applyTo = (function (arglist__10900){
var urls = cljs.core.first(arglist__10900);
arglist__10900 = cljs.core.next(arglist__10900);
var progress_bar = cljs.core.first(arglist__10900);
var options = cljs.core.rest(arglist__10900);
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
var fadeout__delegate = function (spr,p__10901){
var map__10941 = p__10901;
var map__10941__$1 = ((cljs.core.seq_QMARK_.call(null,map__10941))?cljs.core.apply.call(null,cljs.core.hash_map,map__10941):map__10941);
var end = cljs.core.get.call(null,map__10941__$1,new cljs.core.Keyword(null,"end","end",-268185958),(0));
var start = cljs.core.get.call(null,map__10941__$1,new cljs.core.Keyword(null,"start","start",-355208981),null);
var duration = cljs.core.get.call(null,map__10941__$1,new cljs.core.Keyword(null,"duration","duration",1444101068),(1));
var start__$1 = (((start == null))?spr.alpha:start);
var ticks = ((60) * duration);
var c__6459__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6459__auto__,start__$1,ticks,map__10941,map__10941__$1,end,start,duration){
return (function (){
var f__6460__auto__ = (function (){var switch__6444__auto__ = ((function (c__6459__auto__,start__$1,ticks,map__10941,map__10941__$1,end,start,duration){
return (function (state_10962){
var state_val_10963 = (state_10962[(1)]);
if((state_val_10963 === (7))){
var inst_10958 = (state_10962[(2)]);
var state_10962__$1 = state_10962;
var statearr_10964_10980 = state_10962__$1;
(statearr_10964_10980[(2)] = inst_10958);

(statearr_10964_10980[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10963 === (6))){
var state_10962__$1 = state_10962;
var statearr_10965_10981 = state_10962__$1;
(statearr_10965_10981[(2)] = null);

(statearr_10965_10981[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10963 === (5))){
var inst_10942 = (state_10962[(7)]);
var inst_10954 = (inst_10942 - (1));
var inst_10942__$1 = inst_10954;
var state_10962__$1 = (function (){var statearr_10966 = state_10962;
(statearr_10966[(7)] = inst_10942__$1);

return statearr_10966;
})();
var statearr_10967_10982 = state_10962__$1;
(statearr_10967_10982[(2)] = null);

(statearr_10967_10982[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10963 === (4))){
var inst_10942 = (state_10962[(7)]);
var inst_10946 = (state_10962[(2)]);
var inst_10947 = (start__$1 - end);
var inst_10948 = (inst_10942 / ticks);
var inst_10949 = (inst_10947 * inst_10948);
var inst_10950 = (end + inst_10949);
var inst_10951 = spr.alpha = inst_10950;
var inst_10952 = (inst_10942 > (0));
var state_10962__$1 = (function (){var statearr_10968 = state_10962;
(statearr_10968[(8)] = inst_10946);

(statearr_10968[(9)] = inst_10951);

return statearr_10968;
})();
if(cljs.core.truth_(inst_10952)){
var statearr_10969_10983 = state_10962__$1;
(statearr_10969_10983[(1)] = (5));

} else {
var statearr_10970_10984 = state_10962__$1;
(statearr_10970_10984[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10963 === (3))){
var inst_10960 = (state_10962[(2)]);
var state_10962__$1 = state_10962;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10962__$1,inst_10960);
} else {
if((state_val_10963 === (2))){
var inst_10944 = farn.events.next_frame.call(null);
var state_10962__$1 = state_10962;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10962__$1,(4),inst_10944);
} else {
if((state_val_10963 === (1))){
var inst_10942 = ticks;
var state_10962__$1 = (function (){var statearr_10971 = state_10962;
(statearr_10971[(7)] = inst_10942);

return statearr_10971;
})();
var statearr_10972_10985 = state_10962__$1;
(statearr_10972_10985[(2)] = null);

(statearr_10972_10985[(1)] = (2));


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
});})(c__6459__auto__,start__$1,ticks,map__10941,map__10941__$1,end,start,duration))
;
return ((function (switch__6444__auto__,c__6459__auto__,start__$1,ticks,map__10941,map__10941__$1,end,start,duration){
return (function() {
var state_machine__6445__auto__ = null;
var state_machine__6445__auto____0 = (function (){
var statearr_10976 = [null,null,null,null,null,null,null,null,null,null];
(statearr_10976[(0)] = state_machine__6445__auto__);

(statearr_10976[(1)] = (1));

return statearr_10976;
});
var state_machine__6445__auto____1 = (function (state_10962){
while(true){
var ret_value__6446__auto__ = (function (){try{while(true){
var result__6447__auto__ = switch__6444__auto__.call(null,state_10962);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6447__auto__;
}
break;
}
}catch (e10977){if((e10977 instanceof Object)){
var ex__6448__auto__ = e10977;
var statearr_10978_10986 = state_10962;
(statearr_10978_10986[(5)] = ex__6448__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10962);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10977;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10987 = state_10962;
state_10962 = G__10987;
continue;
} else {
return ret_value__6446__auto__;
}
break;
}
});
state_machine__6445__auto__ = function(state_10962){
switch(arguments.length){
case 0:
return state_machine__6445__auto____0.call(this);
case 1:
return state_machine__6445__auto____1.call(this,state_10962);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6445__auto____0;
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6445__auto____1;
return state_machine__6445__auto__;
})()
;})(switch__6444__auto__,c__6459__auto__,start__$1,ticks,map__10941,map__10941__$1,end,start,duration))
})();
var state__6461__auto__ = (function (){var statearr_10979 = f__6460__auto__.call(null);
(statearr_10979[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6459__auto__);

return statearr_10979;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6461__auto__);
});})(c__6459__auto__,start__$1,ticks,map__10941,map__10941__$1,end,start,duration))
);

return c__6459__auto__;
};
var fadeout = function (spr,var_args){
var p__10901 = null;
if (arguments.length > 1) {
  p__10901 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return fadeout__delegate.call(this,spr,p__10901);};
fadeout.cljs$lang$maxFixedArity = 1;
fadeout.cljs$lang$applyTo = (function (arglist__10988){
var spr = cljs.core.first(arglist__10988);
var p__10901 = cljs.core.rest(arglist__10988);
return fadeout__delegate(spr,p__10901);
});
fadeout.cljs$core$IFn$_invoke$arity$variadic = fadeout__delegate;
return fadeout;
})()
;
/**
* @param {...*} var_args
*/
farn.gfx.fadein = (function() { 
var fadein__delegate = function (spr,p__10989){
var map__11030 = p__10989;
var map__11030__$1 = ((cljs.core.seq_QMARK_.call(null,map__11030))?cljs.core.apply.call(null,cljs.core.hash_map,map__11030):map__11030);
var end = cljs.core.get.call(null,map__11030__$1,new cljs.core.Keyword(null,"end","end",-268185958),(1));
var start = cljs.core.get.call(null,map__11030__$1,new cljs.core.Keyword(null,"start","start",-355208981),(0));
var duration = cljs.core.get.call(null,map__11030__$1,new cljs.core.Keyword(null,"duration","duration",1444101068),(1));
var ticks = ((60) * duration);
var c__6459__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6459__auto__,ticks,map__11030,map__11030__$1,end,start,duration){
return (function (){
var f__6460__auto__ = (function (){var switch__6444__auto__ = ((function (c__6459__auto__,ticks,map__11030,map__11030__$1,end,start,duration){
return (function (state_11052){
var state_val_11053 = (state_11052[(1)]);
if((state_val_11053 === (7))){
var inst_11048 = (state_11052[(2)]);
var state_11052__$1 = state_11052;
var statearr_11054_11070 = state_11052__$1;
(statearr_11054_11070[(2)] = inst_11048);

(statearr_11054_11070[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11053 === (6))){
var state_11052__$1 = state_11052;
var statearr_11055_11071 = state_11052__$1;
(statearr_11055_11071[(2)] = null);

(statearr_11055_11071[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11053 === (5))){
var inst_11031 = (state_11052[(7)]);
var inst_11044 = (inst_11031 - (1));
var inst_11031__$1 = inst_11044;
var state_11052__$1 = (function (){var statearr_11056 = state_11052;
(statearr_11056[(7)] = inst_11031__$1);

return statearr_11056;
})();
var statearr_11057_11072 = state_11052__$1;
(statearr_11057_11072[(2)] = null);

(statearr_11057_11072[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11053 === (4))){
var inst_11031 = (state_11052[(7)]);
var inst_11035 = (state_11052[(2)]);
var inst_11036 = (end - start);
var inst_11037 = (ticks - inst_11031);
var inst_11038 = (inst_11037 / ticks);
var inst_11039 = (inst_11036 * inst_11038);
var inst_11040 = (start + inst_11039);
var inst_11041 = spr.alpha = inst_11040;
var inst_11042 = (inst_11031 > (0));
var state_11052__$1 = (function (){var statearr_11058 = state_11052;
(statearr_11058[(8)] = inst_11041);

(statearr_11058[(9)] = inst_11035);

return statearr_11058;
})();
if(cljs.core.truth_(inst_11042)){
var statearr_11059_11073 = state_11052__$1;
(statearr_11059_11073[(1)] = (5));

} else {
var statearr_11060_11074 = state_11052__$1;
(statearr_11060_11074[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11053 === (3))){
var inst_11050 = (state_11052[(2)]);
var state_11052__$1 = state_11052;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11052__$1,inst_11050);
} else {
if((state_val_11053 === (2))){
var inst_11033 = farn.events.next_frame.call(null);
var state_11052__$1 = state_11052;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11052__$1,(4),inst_11033);
} else {
if((state_val_11053 === (1))){
var inst_11031 = ticks;
var state_11052__$1 = (function (){var statearr_11061 = state_11052;
(statearr_11061[(7)] = inst_11031);

return statearr_11061;
})();
var statearr_11062_11075 = state_11052__$1;
(statearr_11062_11075[(2)] = null);

(statearr_11062_11075[(1)] = (2));


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
});})(c__6459__auto__,ticks,map__11030,map__11030__$1,end,start,duration))
;
return ((function (switch__6444__auto__,c__6459__auto__,ticks,map__11030,map__11030__$1,end,start,duration){
return (function() {
var state_machine__6445__auto__ = null;
var state_machine__6445__auto____0 = (function (){
var statearr_11066 = [null,null,null,null,null,null,null,null,null,null];
(statearr_11066[(0)] = state_machine__6445__auto__);

(statearr_11066[(1)] = (1));

return statearr_11066;
});
var state_machine__6445__auto____1 = (function (state_11052){
while(true){
var ret_value__6446__auto__ = (function (){try{while(true){
var result__6447__auto__ = switch__6444__auto__.call(null,state_11052);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6447__auto__;
}
break;
}
}catch (e11067){if((e11067 instanceof Object)){
var ex__6448__auto__ = e11067;
var statearr_11068_11076 = state_11052;
(statearr_11068_11076[(5)] = ex__6448__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11052);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11067;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11077 = state_11052;
state_11052 = G__11077;
continue;
} else {
return ret_value__6446__auto__;
}
break;
}
});
state_machine__6445__auto__ = function(state_11052){
switch(arguments.length){
case 0:
return state_machine__6445__auto____0.call(this);
case 1:
return state_machine__6445__auto____1.call(this,state_11052);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6445__auto____0;
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6445__auto____1;
return state_machine__6445__auto__;
})()
;})(switch__6444__auto__,c__6459__auto__,ticks,map__11030,map__11030__$1,end,start,duration))
})();
var state__6461__auto__ = (function (){var statearr_11069 = f__6460__auto__.call(null);
(statearr_11069[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6459__auto__);

return statearr_11069;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6461__auto__);
});})(c__6459__auto__,ticks,map__11030,map__11030__$1,end,start,duration))
);

return c__6459__auto__;
};
var fadein = function (spr,var_args){
var p__10989 = null;
if (arguments.length > 1) {
  p__10989 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return fadein__delegate.call(this,spr,p__10989);};
fadein.cljs$lang$maxFixedArity = 1;
fadein.cljs$lang$applyTo = (function (arglist__11078){
var spr = cljs.core.first(arglist__11078);
var p__10989 = cljs.core.rest(arglist__11078);
return fadein__delegate(spr,p__10989);
});
fadein.cljs$core$IFn$_invoke$arity$variadic = fadein__delegate;
return fadein;
})()
;
farn.gfx.sub_texture = (function sub_texture(texture,p__11079,p__11080){
var vec__11083 = p__11079;
var x = cljs.core.nth.call(null,vec__11083,(0),null);
var y = cljs.core.nth.call(null,vec__11083,(1),null);
var vec__11084 = p__11080;
var w = cljs.core.nth.call(null,vec__11084,(0),null);
var h = cljs.core.nth.call(null,vec__11084,(1),null);
return (new PIXI.Texture(texture,(new PIXI.Rectangle(x,y,w,h))));
});

//# sourceMappingURL=gfx.js.map