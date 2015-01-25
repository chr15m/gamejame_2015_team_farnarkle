// Compiled by ClojureScript 0.0-2511
goog.provide('farn.core');
goog.require('cljs.core');
goog.require('farn.query_string');
goog.require('farn.utils');
goog.require('farn.stars');
goog.require('farn.sound');
goog.require('dommy.core');
goog.require('farn.spatial');
goog.require('farn.map');
goog.require('cljs.core.async');
goog.require('farn.store');
goog.require('farn.assets');
goog.require('farn.gfx');
goog.require('farn.events');
goog.require('farn.sprite');
goog.require('farn.rex');
goog.require('farn.font');
cljs.core.enable_console_print_BANG_.call(null);
farn.core.url = farn.query_string.parse_url.call(null,document.location.href);
cljs.core.println.call(null,"url-parsed:",farn.core.url);
farn.core.grass_green = (3503460);
farn.core.isometric_factor = (3);
farn.core.cell_size = (500);
farn.core.player_max_speed = (20);
farn.core.player_acceleration = 0.6;
farn.core.player_drag = 0.95;
farn.core.player_turn_speed = 0.03;
farn.core.player_bound_height = (30);
farn.core.player_bound_length = (30);
farn.core.last_player_position = cljs.core.atom.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null));
farn.core.last_player_rh = cljs.core.atom.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null));
farn.core.pickup_bounce_height = (5);
farn.core.pickup_bounce_speed = 0.1;
farn.core.pickup_vertical_offset = (25);
farn.core.max_pickups = (100);
farn.core.pickup_cull_distance = (4000);
farn.core.pickup_cull_distance_squared = (farn.core.pickup_cull_distance * farn.core.pickup_cull_distance);
farn.core.pickup_spread = (3000);
farn.core.pickup_exclusion_zone = (500);
if(typeof farn.core.fonts !== 'undefined'){
} else {
farn.core.fonts = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [farn.font.install_google_font_stylesheet_BANG_.call(null,"http://fonts.googleapis.com/css?family=Lobster"),farn.font.install_google_font_stylesheet_BANG_.call(null,"http://fonts.googleapis.com/css?family=Varela+Round"),farn.font.install_google_font_stylesheet_BANG_.call(null,"http://fonts.googleapis.com/css?family=Shadows+Into+Light+Two")], null);
}
farn.core.player_animation = cljs.core.atom.call(null,new cljs.core.Keyword(null,"standing","standing",-1248340762));
farn.core.player_stars = cljs.core.atom.call(null,(0));
farn.core.pickup_store = cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY);
/**
* @param {...*} var_args
*/
farn.core.load = (function() { 
var load__delegate = function (s,urls,p__10661){
var map__10697 = p__10661;
var map__10697__$1 = ((cljs.core.seq_QMARK_.call(null,map__10697))?cljs.core.apply.call(null,cljs.core.hash_map,map__10697):map__10697);
var options = map__10697__$1;
var fade_out = cljs.core.get.call(null,map__10697__$1,new cljs.core.Keyword(null,"fade-out","fade-out",-1200160760),0.5);
var fade_in = cljs.core.get.call(null,map__10697__$1,new cljs.core.Keyword(null,"fade-in","fade-in",999370239),0.5);
var c = cljs.core.async.chan.call(null);
var b = farn.gfx.add_prog_bar.call(null,s,options);
var c__6459__auto___10732 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6459__auto___10732,c,b,map__10697,map__10697__$1,options,fade_out,fade_in){
return (function (){
var f__6460__auto__ = (function (){var switch__6444__auto__ = ((function (c__6459__auto___10732,c,b,map__10697,map__10697__$1,options,fade_out,fade_in){
return (function (state_10718){
var state_val_10719 = (state_10718[(1)]);
if((state_val_10719 === (6))){
var inst_10714 = (state_10718[(2)]);
var inst_10715 = s.removeChild(b);
var inst_10716 = cljs.core.async.close_BANG_.call(null,c);
var state_10718__$1 = (function (){var statearr_10720 = state_10718;
(statearr_10720[(7)] = inst_10715);

(statearr_10720[(8)] = inst_10714);

return statearr_10720;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10718__$1,inst_10716);
} else {
if((state_val_10719 === (5))){
var inst_10711 = (state_10718[(2)]);
var inst_10712 = farn.gfx.fadeout.call(null,b,new cljs.core.Keyword(null,"duration","duration",1444101068),fade_out);
var state_10718__$1 = (function (){var statearr_10721 = state_10718;
(statearr_10721[(9)] = inst_10711);

return statearr_10721;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10718__$1,(6),inst_10712);
} else {
if((state_val_10719 === (4))){
var inst_10708 = (state_10718[(2)]);
var inst_10709 = cljs.core.async.timeout.call(null,(300));
var state_10718__$1 = (function (){var statearr_10722 = state_10718;
(statearr_10722[(10)] = inst_10708);

return statearr_10722;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10718__$1,(5),inst_10709);
} else {
if((state_val_10719 === (3))){
var inst_10706 = (state_10718[(2)]);
var state_10718__$1 = (function (){var statearr_10723 = state_10718;
(statearr_10723[(11)] = inst_10706);

return statearr_10723;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10718__$1,(4),c,true);
} else {
if((state_val_10719 === (2))){
var inst_10700 = (state_10718[(2)]);
var inst_10701 = [cljs.core.str(options)].join('');
var inst_10702 = farn.utils.log.call(null,"load",inst_10701);
var inst_10703 = cljs.core.partial.call(null,farn.gfx.load_urls,urls,b);
var inst_10704 = cljs.core.apply.call(null,inst_10703,options);
var state_10718__$1 = (function (){var statearr_10724 = state_10718;
(statearr_10724[(12)] = inst_10702);

(statearr_10724[(13)] = inst_10700);

return statearr_10724;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10718__$1,(3),inst_10704);
} else {
if((state_val_10719 === (1))){
var inst_10698 = farn.gfx.fadein.call(null,b,new cljs.core.Keyword(null,"duration","duration",1444101068),fade_in);
var state_10718__$1 = state_10718;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10718__$1,(2),inst_10698);
} else {
return null;
}
}
}
}
}
}
});})(c__6459__auto___10732,c,b,map__10697,map__10697__$1,options,fade_out,fade_in))
;
return ((function (switch__6444__auto__,c__6459__auto___10732,c,b,map__10697,map__10697__$1,options,fade_out,fade_in){
return (function() {
var state_machine__6445__auto__ = null;
var state_machine__6445__auto____0 = (function (){
var statearr_10728 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_10728[(0)] = state_machine__6445__auto__);

(statearr_10728[(1)] = (1));

return statearr_10728;
});
var state_machine__6445__auto____1 = (function (state_10718){
while(true){
var ret_value__6446__auto__ = (function (){try{while(true){
var result__6447__auto__ = switch__6444__auto__.call(null,state_10718);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6447__auto__;
}
break;
}
}catch (e10729){if((e10729 instanceof Object)){
var ex__6448__auto__ = e10729;
var statearr_10730_10733 = state_10718;
(statearr_10730_10733[(5)] = ex__6448__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10718);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10729;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10734 = state_10718;
state_10718 = G__10734;
continue;
} else {
return ret_value__6446__auto__;
}
break;
}
});
state_machine__6445__auto__ = function(state_10718){
switch(arguments.length){
case 0:
return state_machine__6445__auto____0.call(this);
case 1:
return state_machine__6445__auto____1.call(this,state_10718);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6445__auto____0;
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6445__auto____1;
return state_machine__6445__auto__;
})()
;})(switch__6444__auto__,c__6459__auto___10732,c,b,map__10697,map__10697__$1,options,fade_out,fade_in))
})();
var state__6461__auto__ = (function (){var statearr_10731 = f__6460__auto__.call(null);
(statearr_10731[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6459__auto___10732);

return statearr_10731;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6461__auto__);
});})(c__6459__auto___10732,c,b,map__10697,map__10697__$1,options,fade_out,fade_in))
);


return c;
};
var load = function (s,urls,var_args){
var p__10661 = null;
if (arguments.length > 2) {
  p__10661 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return load__delegate.call(this,s,urls,p__10661);};
load.cljs$lang$maxFixedArity = 2;
load.cljs$lang$applyTo = (function (arglist__10735){
var s = cljs.core.first(arglist__10735);
arglist__10735 = cljs.core.next(arglist__10735);
var urls = cljs.core.first(arglist__10735);
var p__10661 = cljs.core.rest(arglist__10735);
return load__delegate(s,urls,p__10661);
});
load.cljs$core$IFn$_invoke$arity$variadic = load__delegate;
return load;
})()
;
farn.core.world = farn.gfx.init.call(null,new cljs.core.Keyword(null,"background","background",-863952629),farn.core.grass_green,new cljs.core.Keyword(null,"expand","expand",595248157),true,new cljs.core.Keyword(null,"engine","engine",1459054265),new cljs.core.Keyword(null,"auto","auto",-566279492),new cljs.core.Keyword(null,"canvas","canvas",-1798817489),document.getElementById("game"));
farn.core.main_stage = new cljs.core.Keyword(null,"world","world",-418292623).cljs$core$IFn$_invoke$arity$1(farn.core.world);
farn.core.ui_stage = new cljs.core.Keyword(null,"ui","ui",-469653645).cljs$core$IFn$_invoke$arity$1(farn.core.world);
var c__6459__auto___10767 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6459__auto___10767){
return (function (){
var f__6460__auto__ = (function (){var switch__6444__auto__ = ((function (c__6459__auto___10767){
return (function (state_10751){
var state_val_10752 = (state_10751[(1)]);
if((state_val_10752 === (7))){
var inst_10740 = (state_10751[(2)]);
var inst_10741 = new cljs.core.Keyword(null,"renderer","renderer",336841071).cljs$core$IFn$_invoke$arity$1(farn.core.world);
var inst_10742 = new cljs.core.Keyword(null,"stage","stage",1843544772).cljs$core$IFn$_invoke$arity$1(farn.core.world);
var inst_10743 = inst_10741.render(inst_10742);
var state_10751__$1 = (function (){var statearr_10753 = state_10751;
(statearr_10753[(7)] = inst_10740);

(statearr_10753[(8)] = inst_10743);

return statearr_10753;
})();
var statearr_10754_10768 = state_10751__$1;
(statearr_10754_10768[(2)] = null);

(statearr_10754_10768[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10752 === (6))){
var inst_10747 = (state_10751[(2)]);
var state_10751__$1 = state_10751;
var statearr_10755_10769 = state_10751__$1;
(statearr_10755_10769[(2)] = inst_10747);

(statearr_10755_10769[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10752 === (5))){
var state_10751__$1 = state_10751;
var statearr_10756_10770 = state_10751__$1;
(statearr_10756_10770[(2)] = null);

(statearr_10756_10770[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10752 === (4))){
var inst_10738 = farn.events.next_frame.call(null);
var state_10751__$1 = state_10751;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10751__$1,(7),inst_10738);
} else {
if((state_val_10752 === (3))){
var inst_10749 = (state_10751[(2)]);
var state_10751__$1 = state_10751;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10751__$1,inst_10749);
} else {
if((state_val_10752 === (2))){
var state_10751__$1 = state_10751;
var statearr_10757_10771 = state_10751__$1;
(statearr_10757_10771[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10752 === (1))){
var state_10751__$1 = state_10751;
var statearr_10759_10772 = state_10751__$1;
(statearr_10759_10772[(2)] = null);

(statearr_10759_10772[(1)] = (2));


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
});})(c__6459__auto___10767))
;
return ((function (switch__6444__auto__,c__6459__auto___10767){
return (function() {
var state_machine__6445__auto__ = null;
var state_machine__6445__auto____0 = (function (){
var statearr_10763 = [null,null,null,null,null,null,null,null,null];
(statearr_10763[(0)] = state_machine__6445__auto__);

(statearr_10763[(1)] = (1));

return statearr_10763;
});
var state_machine__6445__auto____1 = (function (state_10751){
while(true){
var ret_value__6446__auto__ = (function (){try{while(true){
var result__6447__auto__ = switch__6444__auto__.call(null,state_10751);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6447__auto__;
}
break;
}
}catch (e10764){if((e10764 instanceof Object)){
var ex__6448__auto__ = e10764;
var statearr_10765_10773 = state_10751;
(statearr_10765_10773[(5)] = ex__6448__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10751);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10764;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10774 = state_10751;
state_10751 = G__10774;
continue;
} else {
return ret_value__6446__auto__;
}
break;
}
});
state_machine__6445__auto__ = function(state_10751){
switch(arguments.length){
case 0:
return state_machine__6445__auto____0.call(this);
case 1:
return state_machine__6445__auto____1.call(this,state_10751);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6445__auto____0;
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6445__auto____1;
return state_machine__6445__auto__;
})()
;})(switch__6444__auto__,c__6459__auto___10767))
})();
var state__6461__auto__ = (function (){var statearr_10766 = f__6460__auto__.call(null);
(statearr_10766[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6459__auto___10767);

return statearr_10766;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6461__auto__);
});})(c__6459__auto___10767))
);

/**
* @param {...*} var_args
*/
farn.core.make_sprite = (function() { 
var make_sprite__delegate = function (tex,p__10775){
var map__10777 = p__10775;
var map__10777__$1 = ((cljs.core.seq_QMARK_.call(null,map__10777))?cljs.core.apply.call(null,cljs.core.hash_map,map__10777):map__10777);
var anchor_y = cljs.core.get.call(null,map__10777__$1,new cljs.core.Keyword(null,"anchor-y","anchor-y",-1366716999),(1));
var anchor_x = cljs.core.get.call(null,map__10777__$1,new cljs.core.Keyword(null,"anchor-x","anchor-x",-1597588837),0.5);
var s = farn.gfx.make_sprite.call(null,tex);
farn.sprite.set_anchor_BANG_.call(null,s,anchor_x,anchor_y);

return s;
};
var make_sprite = function (tex,var_args){
var p__10775 = null;
if (arguments.length > 1) {
  p__10775 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return make_sprite__delegate.call(this,tex,p__10775);};
make_sprite.cljs$lang$maxFixedArity = 1;
make_sprite.cljs$lang$applyTo = (function (arglist__10778){
var tex = cljs.core.first(arglist__10778);
var p__10775 = cljs.core.rest(arglist__10778);
return make_sprite__delegate(tex,p__10775);
});
make_sprite.cljs$core$IFn$_invoke$arity$variadic = make_sprite__delegate;
return make_sprite;
})()
;
if(cljs.core.truth_(new cljs.core.Keyword(null,"test","test",577538877).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"query-params","query-params",900640534).cljs$core$IFn$_invoke$arity$1(farn.core.url)))){
cljs.core.println.call(null,"Testing code goes here!");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"test","test",577538877).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"query-params","query-params",900640534).cljs$core$IFn$_invoke$arity$1(farn.core.url)),"perlin")){
cljs.core.println.call(null,"we perlin!");
} else {
}

var c_12263 = farn.map.perlin_map_generator.call(null);
var c__6459__auto___12264 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6459__auto___12264,c_12263){
return (function (){
var f__6460__auto__ = (function (){var switch__6444__auto__ = ((function (c__6459__auto___12264,c_12263){
return (function (state_10789){
var state_val_10790 = (state_10789[(1)]);
if((state_val_10790 === (2))){
var inst_10785 = (state_10789[(2)]);
var inst_10786 = inst_10785.length;
var inst_10787 = cljs.core.println.call(null,"Perlin map done:",inst_10786);
var state_10789__$1 = state_10789;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10789__$1,inst_10787);
} else {
if((state_val_10790 === (1))){
var state_10789__$1 = state_10789;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10789__$1,(2),c_12263);
} else {
return null;
}
}
});})(c__6459__auto___12264,c_12263))
;
return ((function (switch__6444__auto__,c__6459__auto___12264,c_12263){
return (function() {
var state_machine__6445__auto__ = null;
var state_machine__6445__auto____0 = (function (){
var statearr_10794 = [null,null,null,null,null,null,null];
(statearr_10794[(0)] = state_machine__6445__auto__);

(statearr_10794[(1)] = (1));

return statearr_10794;
});
var state_machine__6445__auto____1 = (function (state_10789){
while(true){
var ret_value__6446__auto__ = (function (){try{while(true){
var result__6447__auto__ = switch__6444__auto__.call(null,state_10789);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6447__auto__;
}
break;
}
}catch (e10795){if((e10795 instanceof Object)){
var ex__6448__auto__ = e10795;
var statearr_10796_12265 = state_10789;
(statearr_10796_12265[(5)] = ex__6448__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10789);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10795;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12266 = state_10789;
state_10789 = G__12266;
continue;
} else {
return ret_value__6446__auto__;
}
break;
}
});
state_machine__6445__auto__ = function(state_10789){
switch(arguments.length){
case 0:
return state_machine__6445__auto____0.call(this);
case 1:
return state_machine__6445__auto____1.call(this,state_10789);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6445__auto____0;
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6445__auto____1;
return state_machine__6445__auto__;
})()
;})(switch__6444__auto__,c__6459__auto___12264,c_12263))
})();
var state__6461__auto__ = (function (){var statearr_10797 = f__6460__auto__.call(null);
(statearr_10797[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6459__auto___12264);

return statearr_10797;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6461__auto__);
});})(c__6459__auto___12264,c_12263))
);

} else {
var c__6459__auto___12267 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6459__auto___12267){
return (function (){
var f__6460__auto__ = (function (){var switch__6444__auto__ = ((function (c__6459__auto___12267){
return (function (state_11835){
var state_val_11836 = (state_11835[(1)]);
if((state_val_11836 === (121))){
var inst_11773 = cljs.core.reset_BANG_.call(null,farn.core.player_animation,new cljs.core.Keyword(null,"standing","standing",-1248340762));
var state_11835__$1 = state_11835;
var statearr_11837_12268 = state_11835__$1;
(statearr_11837_12268[(2)] = inst_11773);

(statearr_11837_12268[(1)] = (122));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11836 === (65))){
var inst_11501 = (state_11835[(7)]);
var inst_10829 = (state_11835[(8)]);
var inst_10849 = (state_11835[(9)]);
var inst_11500 = (state_11835[(10)]);
var inst_11504 = (state_11835[(11)]);
var inst_11506 = farn.stars.make.call(null,farn.core.main_stage,inst_10849,inst_10829,inst_11500,inst_11501);
var inst_11507 = (inst_11504 > (1));
var state_11835__$1 = (function (){var statearr_11838 = state_11835;
(statearr_11838[(12)] = inst_11506);

return statearr_11838;
})();
if(cljs.core.truth_(inst_11507)){
var statearr_11839_12269 = state_11835__$1;
(statearr_11839_12269[(1)] = (67));

} else {
var statearr_11840_12270 = state_11835__$1;
(statearr_11840_12270[(1)] = (68));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11836 === (70))){
var inst_11535 = (state_11835[(13)]);
var inst_11534 = (state_11835[(14)]);
var inst_11537 = (inst_11535 < inst_11534);
var inst_11538 = inst_11537;
var state_11835__$1 = state_11835;
if(cljs.core.truth_(inst_11538)){
var statearr_11841_12271 = state_11835__$1;
(statearr_11841_12271[(1)] = (72));

} else {
var statearr_11842_12272 = state_11835__$1;
(statearr_11842_12272[(1)] = (73));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11836 === (62))){
var inst_11499 = (state_11835[(15)]);
var inst_11504 = inst_11499;
var state_11835__$1 = (function (){var statearr_11843 = state_11835;
(statearr_11843[(11)] = inst_11504);

return statearr_11843;
})();
var statearr_11844_12273 = state_11835__$1;
(statearr_11844_12273[(2)] = null);

(statearr_11844_12273[(1)] = (65));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11836 === (74))){
var inst_11672 = (state_11835[(2)]);
var state_11835__$1 = state_11835;
var statearr_11845_12274 = state_11835__$1;
(statearr_11845_12274[(2)] = inst_11672);

(statearr_11845_12274[(1)] = (71));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11836 === (110))){
var inst_11743 = (state_11835[(2)]);
var state_11835__$1 = state_11835;
var statearr_11846_12275 = state_11835__$1;
(statearr_11846_12275[(2)] = inst_11743);

(statearr_11846_12275[(1)] = (107));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11836 === (130))){
var inst_11803 = farn.events.is_pressed_QMARK_.call(null,new cljs.core.Keyword(null,"up","up",-269712113));
var state_11835__$1 = state_11835;
if(cljs.core.truth_(inst_11803)){
var statearr_11847_12276 = state_11835__$1;
(statearr_11847_12276[(1)] = (133));

} else {
var statearr_11848_12277 = state_11835__$1;
(statearr_11848_12277[(1)] = (134));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11836 === (128))){
var state_11835__$1 = state_11835;
var statearr_11849_12278 = state_11835__$1;
(statearr_11849_12278[(1)] = (130));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11836 === (7))){
var inst_10891 = (state_11835[(16)]);
var inst_10896 = [cljs.core.str("sfx/pickup-"),cljs.core.str(inst_10891),cljs.core.str(".ogg")].join('');
var inst_10897 = farn.sound.load_sound.call(null,inst_10896);
var state_11835__$1 = state_11835;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11835__$1,(10),inst_10897);
} else {
if((state_val_11836 === (59))){
var inst_11307 = (state_11835[(17)]);
var inst_11499 = (state_11835[(15)]);
var inst_10933 = (state_11835[(18)]);
var inst_11495 = cljs.core.rand_nth.call(null,inst_10933);
var inst_11496 = farn.sound.play_sound.call(null,inst_11495,0.5);
var inst_11498 = cljs.core.deref.call(null,farn.core.player_stars);
var inst_11499__$1 = (((30) < inst_11498) ? (30) : inst_11498);
var inst_11500 = cljs.core.nth.call(null,inst_11307,(0),null);
var inst_11501 = cljs.core.nth.call(null,inst_11307,(1),null);
var inst_11502 = (inst_11499__$1 > (0));
var state_11835__$1 = (function (){var statearr_11851 = state_11835;
(statearr_11851[(19)] = inst_11496);

(statearr_11851[(7)] = inst_11501);

(statearr_11851[(15)] = inst_11499__$1);

(statearr_11851[(10)] = inst_11500);

return statearr_11851;
})();
if(cljs.core.truth_(inst_11502)){
var statearr_11852_12279 = state_11835__$1;
(statearr_11852_12279[(1)] = (62));

} else {
var statearr_11853_12280 = state_11835__$1;
(statearr_11853_12280[(1)] = (63));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11836 === (86))){
var inst_11599 = (state_11835[(20)]);
var inst_11601 = cljs.core.chunked_seq_QMARK_.call(null,inst_11599);
var state_11835__$1 = state_11835;
if(inst_11601){
var statearr_11854_12281 = state_11835__$1;
(statearr_11854_12281[(1)] = (89));

} else {
var statearr_11855_12282 = state_11835__$1;
(statearr_11855_12282[(1)] = (90));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11836 === (20))){
var inst_11317 = farn.core.main_stage.children.length;
var inst_11318 = farn.utils.log.call(null,"SPRITE COUNT:",inst_11317);
var state_11835__$1 = state_11835;
var statearr_11856_12283 = state_11835__$1;
(statearr_11856_12283[(2)] = inst_11318);

(statearr_11856_12283[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11836 === (72))){
var inst_11018 = (state_11835[(21)]);
var inst_11535 = (state_11835[(13)]);
var inst_11533 = (state_11835[(22)]);
var inst_11540 = cljs.core._nth.call(null,inst_11533,inst_11535);
var inst_11545 = inst_11018.call(null,inst_11540);
var inst_11546 = cljs.core.seq.call(null,inst_11545);
var inst_11547 = inst_11546;
var inst_11548 = null;
var inst_11549 = (0);
var inst_11550 = (0);
var state_11835__$1 = (function (){var statearr_11857 = state_11835;
(statearr_11857[(23)] = inst_11549);

(statearr_11857[(24)] = inst_11547);

(statearr_11857[(25)] = inst_11548);

(statearr_11857[(26)] = inst_11550);

return statearr_11857;
})();
var statearr_11858_12284 = state_11835__$1;
(statearr_11858_12284[(2)] = null);

(statearr_11858_12284[(1)] = (75));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11836 === (58))){
var inst_11493 = (state_11835[(2)]);
var state_11835__$1 = state_11835;
if(cljs.core.truth_(inst_11493)){
var statearr_11859_12285 = state_11835__$1;
(statearr_11859_12285[(1)] = (59));

} else {
var statearr_11860_12286 = state_11835__$1;
(statearr_11860_12286[(1)] = (60));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11836 === (60))){
var inst_11312 = (state_11835[(27)]);
var state_11835__$1 = state_11835;
var statearr_11861_12287 = state_11835__$1;
(statearr_11861_12287[(2)] = inst_11312);

(statearr_11861_12287[(1)] = (61));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11836 === (27))){
var inst_11370 = (state_11835[(2)]);
var state_11835__$1 = state_11835;
var statearr_11862_12288 = state_11835__$1;
(statearr_11862_12288[(2)] = inst_11370);

(statearr_11862_12288[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11836 === (1))){
var inst_10811 = (state_11835[(28)]);
var inst_10808 = cljs.core.async.chan.call(null,(1));
var inst_10809 = (function (){var c__6459__auto____$1 = inst_10808;
return ((function (c__6459__auto____$1,inst_10811,inst_10808,state_val_11836,c__6459__auto___12267){
return (function (){
var f__6460__auto__ = (function (){var switch__6444__auto__ = ((function (c__6459__auto____$1,inst_10811,inst_10808,state_val_11836,c__6459__auto___12267){
return (function (state_10806){
var state_val_10807 = (state_10806[(1)]);
if((state_val_10807 === (2))){
var inst_10801 = (state_10806[(2)]);
var inst_10802 = cljs.core.println.call(null,"we has sound lel");
var inst_10803 = console.log(inst_10801);
var inst_10804 = farn.sound.play_sound.call(null,inst_10801,0.9,true);
var state_10806__$1 = (function (){var statearr_11863 = state_10806;
(statearr_11863[(7)] = inst_10803);

(statearr_11863[(8)] = inst_10802);

return statearr_11863;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10806__$1,inst_10804);
} else {
if((state_val_10807 === (1))){
var inst_10798 = cljs.core.println.call(null,"pre sound lel");
var inst_10799 = farn.sound.load_sound.call(null,"music/bu-ogre-of-a-simplex.ogg");
var state_10806__$1 = (function (){var statearr_11864 = state_10806;
(statearr_11864[(9)] = inst_10798);

return statearr_11864;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10806__$1,(2),inst_10799);
} else {
return null;
}
}
});})(c__6459__auto____$1,inst_10811,inst_10808,state_val_11836,c__6459__auto___12267))
;
return ((function (switch__6444__auto__,c__6459__auto____$1,inst_10811,inst_10808,state_val_11836,c__6459__auto___12267){
return (function() {
var state_machine__6445__auto__ = null;
var state_machine__6445__auto____0 = (function (){
var statearr_11868 = [null,null,null,null,null,null,null,null,null,null];
(statearr_11868[(0)] = state_machine__6445__auto__);

(statearr_11868[(1)] = (1));

return statearr_11868;
});
var state_machine__6445__auto____1 = (function (state_10806){
while(true){
var ret_value__6446__auto__ = (function (){try{while(true){
var result__6447__auto__ = switch__6444__auto__.call(null,state_10806);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6447__auto__;
}
break;
}
}catch (e11869){if((e11869 instanceof Object)){
var ex__6448__auto__ = e11869;
var statearr_11870_12289 = state_10806;
(statearr_11870_12289[(5)] = ex__6448__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10806);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11869;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12290 = state_10806;
state_10806 = G__12290;
continue;
} else {
return ret_value__6446__auto__;
}
break;
}
});
state_machine__6445__auto__ = function(state_10806){
switch(arguments.length){
case 0:
return state_machine__6445__auto____0.call(this);
case 1:
return state_machine__6445__auto____1.call(this,state_10806);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6445__auto____0;
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6445__auto____1;
return state_machine__6445__auto__;
})()
;})(switch__6444__auto__,c__6459__auto____$1,inst_10811,inst_10808,state_val_11836,c__6459__auto___12267))
})();
var state__6461__auto__ = (function (){var statearr_11871 = f__6460__auto__.call(null);
(statearr_11871[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6459__auto____$1);

return statearr_11871;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6461__auto__);
});
;})(c__6459__auto____$1,inst_10811,inst_10808,state_val_11836,c__6459__auto___12267))
})();
var inst_10810 = cljs.core.async.impl.dispatch.run.call(null,inst_10809);
var inst_10811__$1 = farn.core.load.call(null,farn.core.ui_stage,farn.assets._EQ_assets_EQ_,new cljs.core.Keyword(null,"full-colour","full-colour",50761434),(3170336),new cljs.core.Keyword(null,"highlight","highlight",-800930873),(8454016),new cljs.core.Keyword(null,"lowlight","lowlight",2143243768),(1060880),new cljs.core.Keyword(null,"empty-colour","empty-colour",-1488420524),(0),new cljs.core.Keyword(null,"fade-in","fade-in",999370239),0.2,new cljs.core.Keyword(null,"fade-out","fade-out",-1200160760),(2));
var inst_10812 = farn.map.perlin_map_generator.call(null);
var inst_10813 = farn.utils.log.call(null,"pulling");
var state_11835__$1 = (function (){var statearr_11872 = state_11835;
(statearr_11872[(29)] = inst_10812);

(statearr_11872[(30)] = inst_10813);

(statearr_11872[(31)] = inst_10810);

(statearr_11872[(28)] = inst_10811__$1);

return statearr_11872;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11835__$1,(2),inst_10811__$1);
} else {
if((state_val_11836 === (69))){
var inst_11513 = (state_11835[(2)]);
var state_11835__$1 = state_11835;
var statearr_11873_12291 = state_11835__$1;
(statearr_11873_12291[(2)] = inst_11513);

(statearr_11873_12291[(1)] = (66));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11836 === (101))){
var inst_11331 = (state_11835[(32)]);
var inst_11325 = (state_11835[(33)]);
var inst_11635 = (state_11835[(34)]);
var inst_11334 = (state_11835[(35)]);
var inst_11324 = (state_11835[(36)]);
var inst_10935 = (state_11835[(37)]);
var inst_11644 = cljs.core.first.call(null,inst_11635);
var inst_11646 = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(inst_11644);
var inst_11647 = new cljs.core.Keyword(null,"sprite","sprite",172516848).cljs$core$IFn$_invoke$arity$1(inst_11644);
var inst_11648 = inst_10935.call(null,inst_11646,inst_11647,inst_11324,inst_11325,inst_11331,inst_11334);
var inst_11649 = cljs.core.nth.call(null,inst_11648,(0),null);
var inst_11650 = cljs.core.nth.call(null,inst_11648,(1),null);
var inst_11651 = new cljs.core.Keyword(null,"sprite","sprite",172516848).cljs$core$IFn$_invoke$arity$1(inst_11644);
var inst_11652 = farn.sprite.set_pos_BANG_.call(null,inst_11651,inst_11649,inst_11650);
var inst_11653 = cljs.core.next.call(null,inst_11635);
var inst_11615 = inst_11653;
var inst_11616 = null;
var inst_11617 = (0);
var inst_11618 = (0);
var state_11835__$1 = (function (){var statearr_11874 = state_11835;
(statearr_11874[(38)] = inst_11617);

(statearr_11874[(39)] = inst_11616);

(statearr_11874[(40)] = inst_11652);

(statearr_11874[(41)] = inst_11615);

(statearr_11874[(42)] = inst_11618);

return statearr_11874;
})();
var statearr_11875_12292 = state_11835__$1;
(statearr_11875_12292[(2)] = null);

(statearr_11875_12292[(1)] = (92));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11836 === (24))){
var inst_10828 = (state_11835[(43)]);
var inst_10862 = (state_11835[(44)]);
var inst_11352 = (state_11835[(45)]);
var inst_11307 = (state_11835[(17)]);
var inst_11328 = (state_11835[(46)]);
var inst_11337 = (state_11835[(47)]);
var inst_11331 = (state_11835[(32)]);
var inst_10853 = (state_11835[(48)]);
var inst_11372 = (state_11835[(49)]);
var inst_10879 = (state_11835[(50)]);
var inst_10850 = (state_11835[(51)]);
var inst_10830 = (state_11835[(52)]);
var inst_11309 = (state_11835[(53)]);
var inst_10812 = (state_11835[(29)]);
var inst_11010 = (state_11835[(54)]);
var inst_10829 = (state_11835[(8)]);
var inst_11340 = (state_11835[(55)]);
var inst_11338 = (state_11835[(56)]);
var inst_11018 = (state_11835[(21)]);
var inst_10906 = (state_11835[(57)]);
var inst_10849 = (state_11835[(9)]);
var inst_11023 = (state_11835[(58)]);
var inst_10840 = (state_11835[(59)]);
var inst_10938 = (state_11835[(60)]);
var inst_10848 = (state_11835[(61)]);
var inst_10856 = (state_11835[(62)]);
var inst_10827 = (state_11835[(63)]);
var inst_10818 = (state_11835[(64)]);
var inst_11335 = (state_11835[(65)]);
var inst_10843 = (state_11835[(66)]);
var inst_11326 = (state_11835[(67)]);
var inst_11021 = (state_11835[(68)]);
var inst_10934 = (state_11835[(74)]);
var inst_11351 = (state_11835[(75)]);
var inst_11306 = (state_11835[(76)]);
var inst_11022 = (state_11835[(77)]);
var inst_11336 = (state_11835[(78)]);
var inst_11325 = (state_11835[(33)]);
var inst_11339 = (state_11835[(79)]);
var inst_10826 = (state_11835[(80)]);
var inst_11334 = (state_11835[(35)]);
var inst_11312 = (state_11835[(27)]);
var inst_10933 = (state_11835[(18)]);
var inst_10876 = (state_11835[(81)]);
var inst_11324 = (state_11835[(36)]);
var inst_10817 = (state_11835[(82)]);
var inst_11327 = (state_11835[(83)]);
var inst_10825 = (state_11835[(84)]);
var inst_11310 = (state_11835[(85)]);
var inst_10824 = (state_11835[(86)]);
var inst_11308 = (state_11835[(87)]);
var inst_10821 = (state_11835[(88)]);
var inst_11380 = (state_11835[(71)]);
var inst_10859 = (state_11835[(89)]);
var inst_10935 = (state_11835[(37)]);
var inst_11311 = (state_11835[(90)]);
var inst_10811 = (state_11835[(28)]);
var inst_10869 = (state_11835[(91)]);
var inst_11017 = (state_11835[(92)]);
var inst_11372__$1 = (state_11835[(2)]);
var inst_11373 = (function (){var add_cell_BANG_ = inst_11022;
var depth_compare = inst_10934;
var x = inst_11324;
var player_stars_text = inst_10853;
var player_standing_texs = inst_10840;
var cells = inst_11310;
var player_shadow = inst_10830;
var player_cell = inst_11338;
var close_QMARK_ = inst_10938;
var sprite_count = inst_11311;
var player_pos = inst_11021;
var calc_theta = inst_11326;
var obstacle_types = inst_10862;
var polar_object_coords = inst_10935;
var trees = inst_10869;
var player_hit = inst_11312;
var old_sprite_count = inst_11337;
var y = inst_11325;
var player_standing_sway = inst_10843;
var player_cell_y = inst_11340;
var player_cell_x = inst_11339;
var vec__11323 = inst_11338;
var game_sprites = inst_11017;
var loader = inst_10811;
var player_walking_texs = inst_10848;
var player_and_surrounds = inst_11351;
var rhx = inst_11331;
var rhy = inst_11334;
var frame_num = inst_11306;
var shadow_tex = inst_10829;
var process_add_cell = inst_11352;
var _ = inst_10825;
var tex = inst_10827;
var speed = inst_11308;
var hit_sfx = inst_10933;
var lobster_big = inst_10817;
var game_map = inst_11010;
var star_tex = inst_10849;
var pos = inst_11307;
var remove_cell_BANG_ = inst_11023;
var vec__11322 = inst_11307;
var theta = inst_11309;
var tufts = inst_10876;
var game_space = inst_11018;
var pickup_textures = inst_10856;
var perlin_channel = inst_10812;
var title_text = inst_10826;
var vx = inst_11335;
var floor_objects = inst_10859;
var pickup_sfx = inst_10906;
var tilemap = inst_10824;
var vy = inst_11336;
var make_pickup = inst_10879;
var varela = inst_10818;
var new_cells = inst_11372__$1;
var hy = inst_11328;
var wait = inst_10821;
var hx = inst_11327;
var player = inst_10828;
var player_stars_icon = inst_10850;
return ((function (add_cell_BANG_,depth_compare,x,player_stars_text,player_standing_texs,cells,player_shadow,player_cell,close_QMARK_,sprite_count,player_pos,calc_theta,obstacle_types,polar_object_coords,trees,player_hit,old_sprite_count,y,player_standing_sway,player_cell_y,player_cell_x,vec__11323,game_sprites,loader,player_walking_texs,player_and_surrounds,rhx,rhy,frame_num,shadow_tex,process_add_cell,_,tex,speed,hit_sfx,lobster_big,game_map,star_tex,pos,remove_cell_BANG_,vec__11322,theta,tufts,game_space,pickup_textures,perlin_channel,title_text,vx,floor_objects,pickup_sfx,tilemap,vy,make_pickup,varela,new_cells,hy,wait,hx,player,player_stars_icon,inst_10828,inst_10862,inst_11352,inst_11307,inst_11328,inst_11337,inst_11331,inst_10853,inst_11372,inst_10879,inst_10850,inst_10830,inst_11309,inst_10812,inst_11010,inst_10829,inst_11340,inst_11338,inst_11018,inst_10906,inst_10849,inst_11023,inst_10840,inst_10938,inst_10848,inst_10856,inst_10827,inst_10818,inst_11335,inst_10843,inst_11326,inst_11021,inst_10934,inst_11351,inst_11306,inst_11022,inst_11336,inst_11325,inst_11339,inst_10826,inst_11334,inst_11312,inst_10933,inst_10876,inst_11324,inst_10817,inst_11327,inst_10825,inst_11310,inst_10824,inst_11308,inst_10821,inst_11380,inst_10859,inst_10935,inst_11311,inst_10811,inst_10869,inst_11017,inst_11372__$1,state_val_11836,c__6459__auto___12267){
return (function (p1__10781_SHARP_){
return !((p1__10781_SHARP_ == null));
});
;})(add_cell_BANG_,depth_compare,x,player_stars_text,player_standing_texs,cells,player_shadow,player_cell,close_QMARK_,sprite_count,player_pos,calc_theta,obstacle_types,polar_object_coords,trees,player_hit,old_sprite_count,y,player_standing_sway,player_cell_y,player_cell_x,vec__11323,game_sprites,loader,player_walking_texs,player_and_surrounds,rhx,rhy,frame_num,shadow_tex,process_add_cell,_,tex,speed,hit_sfx,lobster_big,game_map,star_tex,pos,remove_cell_BANG_,vec__11322,theta,tufts,game_space,pickup_textures,perlin_channel,title_text,vx,floor_objects,pickup_sfx,tilemap,vy,make_pickup,varela,new_cells,hy,wait,hx,player,player_stars_icon,inst_10828,inst_10862,inst_11352,inst_11307,inst_11328,inst_11337,inst_11331,inst_10853,inst_11372,inst_10879,inst_10850,inst_10830,inst_11309,inst_10812,inst_11010,inst_10829,inst_11340,inst_11338,inst_11018,inst_10906,inst_10849,inst_11023,inst_10840,inst_10938,inst_10848,inst_10856,inst_10827,inst_10818,inst_11335,inst_10843,inst_11326,inst_11021,inst_10934,inst_11351,inst_11306,inst_11022,inst_11336,inst_11325,inst_11339,inst_10826,inst_11334,inst_11312,inst_10933,inst_10876,inst_11324,inst_10817,inst_11327,inst_10825,inst_11310,inst_10824,inst_11308,inst_10821,inst_11380,inst_10859,inst_10935,inst_11311,inst_10811,inst_10869,inst_11017,inst_11372__$1,state_val_11836,c__6459__auto___12267))
})();
var inst_11378 = (function (){var add_cell_BANG_ = inst_11022;
var depth_compare = inst_10934;
var x = inst_11324;
var player_stars_text = inst_10853;
var player_standing_texs = inst_10840;
var cells = inst_11310;
var player_shadow = inst_10830;
var player_cell = inst_11338;
var close_QMARK_ = inst_10938;
var sprite_count = inst_11311;
var player_pos = inst_11021;
var calc_theta = inst_11326;
var obstacle_types = inst_10862;
var polar_object_coords = inst_10935;
var trees = inst_10869;
var player_hit = inst_11312;
var old_sprite_count = inst_11337;
var y = inst_11325;
var player_standing_sway = inst_10843;
var player_cell_y = inst_11340;
var player_cell_x = inst_11339;
var vec__11323 = inst_11338;
var game_sprites = inst_11017;
var loader = inst_10811;
var player_walking_texs = inst_10848;
var player_and_surrounds = inst_11351;
var rhx = inst_11331;
var rhy = inst_11334;
var frame_num = inst_11306;
var shadow_tex = inst_10829;
var process_add_cell = inst_11352;
var _ = inst_10825;
var tex = inst_10827;
var speed = inst_11308;
var hit_sfx = inst_10933;
var lobster_big = inst_10817;
var game_map = inst_11010;
var star_tex = inst_10849;
var pos = inst_11307;
var remove_cell_BANG_ = inst_11023;
var vec__11322 = inst_11307;
var theta = inst_11309;
var tufts = inst_10876;
var game_space = inst_11018;
var pickup_textures = inst_10856;
var perlin_channel = inst_10812;
var title_text = inst_10826;
var vx = inst_11335;
var floor_objects = inst_10859;
var pickup_sfx = inst_10906;
var tilemap = inst_10824;
var vy = inst_11336;
var make_pickup = inst_10879;
var varela = inst_10818;
var new_cells = inst_11372__$1;
var hy = inst_11328;
var wait = inst_10821;
var hx = inst_11327;
var player = inst_10828;
var player_stars_icon = inst_10850;
return ((function (add_cell_BANG_,depth_compare,x,player_stars_text,player_standing_texs,cells,player_shadow,player_cell,close_QMARK_,sprite_count,player_pos,calc_theta,obstacle_types,polar_object_coords,trees,player_hit,old_sprite_count,y,player_standing_sway,player_cell_y,player_cell_x,vec__11323,game_sprites,loader,player_walking_texs,player_and_surrounds,rhx,rhy,frame_num,shadow_tex,process_add_cell,_,tex,speed,hit_sfx,lobster_big,game_map,star_tex,pos,remove_cell_BANG_,vec__11322,theta,tufts,game_space,pickup_textures,perlin_channel,title_text,vx,floor_objects,pickup_sfx,tilemap,vy,make_pickup,varela,new_cells,hy,wait,hx,player,player_stars_icon,inst_10828,inst_10862,inst_11352,inst_11307,inst_11328,inst_11337,inst_11331,inst_10853,inst_11372,inst_10879,inst_10850,inst_10830,inst_11309,inst_10812,inst_11010,inst_10829,inst_11340,inst_11338,inst_11018,inst_10906,inst_10849,inst_11023,inst_10840,inst_10938,inst_10848,inst_10856,inst_10827,inst_10818,inst_11335,inst_10843,inst_11326,inst_11021,inst_10934,inst_11351,inst_11306,inst_11022,inst_11336,inst_11325,inst_11339,inst_10826,inst_11334,inst_11312,inst_10933,inst_10876,inst_11324,inst_10817,inst_11327,inst_10825,inst_11310,inst_10824,inst_11308,inst_10821,inst_11380,inst_10859,inst_10935,inst_11311,inst_10811,inst_10869,inst_11017,inst_11372__$1,inst_11373,state_val_11836,c__6459__auto___12267){
return (function iter__11374(s__11375){
return (new cljs.core.LazySeq(null,((function (add_cell_BANG_,depth_compare,x,player_stars_text,player_standing_texs,cells,player_shadow,player_cell,close_QMARK_,sprite_count,player_pos,calc_theta,obstacle_types,polar_object_coords,trees,player_hit,old_sprite_count,y,player_standing_sway,player_cell_y,player_cell_x,vec__11323,game_sprites,loader,player_walking_texs,player_and_surrounds,rhx,rhy,frame_num,shadow_tex,process_add_cell,_,tex,speed,hit_sfx,lobster_big,game_map,star_tex,pos,remove_cell_BANG_,vec__11322,theta,tufts,game_space,pickup_textures,perlin_channel,title_text,vx,floor_objects,pickup_sfx,tilemap,vy,make_pickup,varela,new_cells,hy,wait,hx,player,player_stars_icon,inst_10828,inst_10862,inst_11352,inst_11307,inst_11328,inst_11337,inst_11331,inst_10853,inst_11372,inst_10879,inst_10850,inst_10830,inst_11309,inst_10812,inst_11010,inst_10829,inst_11340,inst_11338,inst_11018,inst_10906,inst_10849,inst_11023,inst_10840,inst_10938,inst_10848,inst_10856,inst_10827,inst_10818,inst_11335,inst_10843,inst_11326,inst_11021,inst_10934,inst_11351,inst_11306,inst_11022,inst_11336,inst_11325,inst_11339,inst_10826,inst_11334,inst_11312,inst_10933,inst_10876,inst_11324,inst_10817,inst_11327,inst_10825,inst_11310,inst_10824,inst_11308,inst_10821,inst_11380,inst_10859,inst_10935,inst_11311,inst_10811,inst_10869,inst_11017,inst_11372__$1,inst_11373,state_val_11836,c__6459__auto___12267){
return (function (){
var s__11375__$1 = s__11375;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__11375__$1);
if(temp__4126__auto__){
var s__11375__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__11375__$2)){
var c__4384__auto__ = cljs.core.chunk_first.call(null,s__11375__$2);
var size__4385__auto__ = cljs.core.count.call(null,c__4384__auto__);
var b__11377 = cljs.core.chunk_buffer.call(null,size__4385__auto__);
if((function (){var i__11376 = (0);
while(true){
if((i__11376 < size__4385__auto__)){
var c = cljs.core._nth.call(null,c__4384__auto__,i__11376);
cljs.core.chunk_append.call(null,b__11377,(function (){var vec__11878 = c;
var cx = cljs.core.nth.call(null,vec__11878,(0),null);
var cy = cljs.core.nth.call(null,vec__11878,(1),null);
var dx = Math.abs.call(null,(cx - player_cell_x));
var dy = Math.abs.call(null,(cy - player_cell_y));
var d_squared = ((dx * dx) + (dy * dy));
if((d_squared > (25))){
return c;
} else {
return null;
}
})());

var G__12293 = (i__11376 + (1));
i__11376 = G__12293;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11377),iter__11374.call(null,cljs.core.chunk_rest.call(null,s__11375__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11377),null);
}
} else {
var c = cljs.core.first.call(null,s__11375__$2);
return cljs.core.cons.call(null,(function (){var vec__11879 = c;
var cx = cljs.core.nth.call(null,vec__11879,(0),null);
var cy = cljs.core.nth.call(null,vec__11879,(1),null);
var dx = Math.abs.call(null,(cx - player_cell_x));
var dy = Math.abs.call(null,(cy - player_cell_y));
var d_squared = ((dx * dx) + (dy * dy));
if((d_squared > (25))){
return c;
} else {
return null;
}
})(),iter__11374.call(null,cljs.core.rest.call(null,s__11375__$2)));
}
} else {
return null;
}
break;
}
});})(add_cell_BANG_,depth_compare,x,player_stars_text,player_standing_texs,cells,player_shadow,player_cell,close_QMARK_,sprite_count,player_pos,calc_theta,obstacle_types,polar_object_coords,trees,player_hit,old_sprite_count,y,player_standing_sway,player_cell_y,player_cell_x,vec__11323,game_sprites,loader,player_walking_texs,player_and_surrounds,rhx,rhy,frame_num,shadow_tex,process_add_cell,_,tex,speed,hit_sfx,lobster_big,game_map,star_tex,pos,remove_cell_BANG_,vec__11322,theta,tufts,game_space,pickup_textures,perlin_channel,title_text,vx,floor_objects,pickup_sfx,tilemap,vy,make_pickup,varela,new_cells,hy,wait,hx,player,player_stars_icon,inst_10828,inst_10862,inst_11352,inst_11307,inst_11328,inst_11337,inst_11331,inst_10853,inst_11372,inst_10879,inst_10850,inst_10830,inst_11309,inst_10812,inst_11010,inst_10829,inst_11340,inst_11338,inst_11018,inst_10906,inst_10849,inst_11023,inst_10840,inst_10938,inst_10848,inst_10856,inst_10827,inst_10818,inst_11335,inst_10843,inst_11326,inst_11021,inst_10934,inst_11351,inst_11306,inst_11022,inst_11336,inst_11325,inst_11339,inst_10826,inst_11334,inst_11312,inst_10933,inst_10876,inst_11324,inst_10817,inst_11327,inst_10825,inst_11310,inst_10824,inst_11308,inst_10821,inst_11380,inst_10859,inst_10935,inst_11311,inst_10811,inst_10869,inst_11017,inst_11372__$1,inst_11373,state_val_11836,c__6459__auto___12267))
,null,null));
});
;})(add_cell_BANG_,depth_compare,x,player_stars_text,player_standing_texs,cells,player_shadow,player_cell,close_QMARK_,sprite_count,player_pos,calc_theta,obstacle_types,polar_object_coords,trees,player_hit,old_sprite_count,y,player_standing_sway,player_cell_y,player_cell_x,vec__11323,game_sprites,loader,player_walking_texs,player_and_surrounds,rhx,rhy,frame_num,shadow_tex,process_add_cell,_,tex,speed,hit_sfx,lobster_big,game_map,star_tex,pos,remove_cell_BANG_,vec__11322,theta,tufts,game_space,pickup_textures,perlin_channel,title_text,vx,floor_objects,pickup_sfx,tilemap,vy,make_pickup,varela,new_cells,hy,wait,hx,player,player_stars_icon,inst_10828,inst_10862,inst_11352,inst_11307,inst_11328,inst_11337,inst_11331,inst_10853,inst_11372,inst_10879,inst_10850,inst_10830,inst_11309,inst_10812,inst_11010,inst_10829,inst_11340,inst_11338,inst_11018,inst_10906,inst_10849,inst_11023,inst_10840,inst_10938,inst_10848,inst_10856,inst_10827,inst_10818,inst_11335,inst_10843,inst_11326,inst_11021,inst_10934,inst_11351,inst_11306,inst_11022,inst_11336,inst_11325,inst_11339,inst_10826,inst_11334,inst_11312,inst_10933,inst_10876,inst_11324,inst_10817,inst_11327,inst_10825,inst_11310,inst_10824,inst_11308,inst_10821,inst_11380,inst_10859,inst_10935,inst_11311,inst_10811,inst_10869,inst_11017,inst_11372__$1,inst_11373,state_val_11836,c__6459__auto___12267))
})();
var inst_11379 = inst_11378.call(null,inst_11310);
var inst_11380__$1 = cljs.core.filter.call(null,inst_11373,inst_11379);
var inst_11384 = cljs.core.nth.call(null,inst_11380__$1,(0),null);
var inst_11385 = cljs.core.nthnext.call(null,inst_11380__$1,(1));
var inst_11386 = inst_11380__$1;
var inst_11387 = inst_11372__$1;
var state_11835__$1 = (function (){var statearr_11880 = state_11835;
(statearr_11880[(49)] = inst_11372__$1);

(statearr_11880[(69)] = inst_11385);

(statearr_11880[(70)] = inst_11384);

(statearr_11880[(71)] = inst_11380__$1);

(statearr_11880[(72)] = inst_11387);

(statearr_11880[(73)] = inst_11386);

return statearr_11880;
})();
var statearr_11881_12294 = state_11835__$1;
(statearr_11881_12294[(2)] = null);

(statearr_11881_12294[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11836 === (102))){
var inst_11656 = (state_11835[(2)]);
var state_11835__$1 = state_11835;
var statearr_11882_12295 = state_11835__$1;
(statearr_11882_12295[(2)] = inst_11656);

(statearr_11882_12295[(1)] = (99));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11836 === (135))){
var inst_11811 = (state_11835[(2)]);
var state_11835__$1 = state_11835;
var statearr_11883_12296 = state_11835__$1;
(statearr_11883_12296[(2)] = inst_11811);

(statearr_11883_12296[(1)] = (132));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11836 === (55))){
var inst_11469 = (state_11835[(2)]);
var state_11835__$1 = state_11835;
var statearr_11884_12297 = state_11835__$1;
(statearr_11884_12297[(2)] = inst_11469);

(statearr_11884_12297[(1)] = (52));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11836 === (85))){
var inst_11588 = (state_11835[(2)]);
var state_11835__$1 = state_11835;
var statearr_11885_12298 = state_11835__$1;
(statearr_11885_12298[(2)] = inst_11588);

(statearr_11885_12298[(1)] = (82));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11836 === (39))){
var state_11835__$1 = state_11835;
var statearr_11886_12299 = state_11835__$1;
(statearr_11886_12299[(2)] = null);

(statearr_11886_12299[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11836 === (88))){
var inst_11670 = (state_11835[(2)]);
var state_11835__$1 = state_11835;
var statearr_11887_12300 = state_11835__$1;
(statearr_11887_12300[(2)] = inst_11670);

(statearr_11887_12300[(1)] = (74));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11836 === (46))){
var inst_11479 = (state_11835[(2)]);
var state_11835__$1 = state_11835;
var statearr_11891_12301 = state_11835__$1;
(statearr_11891_12301[(2)] = inst_11479);

(statearr_11891_12301[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11836 === (4))){
var inst_10828 = (state_11835[(43)]);
var inst_10862 = (state_11835[(44)]);
var inst_10853 = (state_11835[(48)]);
var inst_10850 = (state_11835[(51)]);
var inst_10830 = (state_11835[(52)]);
var inst_10812 = (state_11835[(29)]);
var inst_10829 = (state_11835[(8)]);
var inst_10849 = (state_11835[(9)]);
var inst_10840 = (state_11835[(59)]);
var inst_10848 = (state_11835[(61)]);
var inst_10856 = (state_11835[(62)]);
var inst_10827 = (state_11835[(63)]);
var inst_10818 = (state_11835[(64)]);
var inst_10843 = (state_11835[(66)]);
var inst_10826 = (state_11835[(80)]);
var inst_10876 = (state_11835[(81)]);
var inst_10817 = (state_11835[(82)]);
var inst_10825 = (state_11835[(84)]);
var inst_10824 = (state_11835[(86)]);
var inst_10821 = (state_11835[(88)]);
var inst_10859 = (state_11835[(89)]);
var inst_10811 = (state_11835[(28)]);
var inst_10869 = (state_11835[(91)]);
var inst_10824__$1 = (state_11835[(2)]);
var inst_10825__$1 = farn.utils.log.call(null,"perlin channel - done");
var inst_10826__$1 = farn.font.make_text.call(null,"400 48pt Lobster","Alien Forest Explorer",new cljs.core.Keyword(null,"weight","weight",-1262796205),(400),new cljs.core.Keyword(null,"fill","fill",883462889),"#7FCACD",new cljs.core.Keyword(null,"dropShadow","dropShadow",1001370187),true,new cljs.core.Keyword(null,"dropShadowColor","dropShadowColor",-318037852),"#333333");
var inst_10827__$1 = farn.gfx.get_texture.call(null,new cljs.core.Keyword(null,"pink-stand-4","pink-stand-4",695656413));
var inst_10828__$1 = farn.sprite.make_sprite.call(null,inst_10827__$1);
var inst_10829__$1 = farn.gfx.get_texture.call(null,new cljs.core.Keyword(null,"shadow-1","shadow-1",-1417857329));
var inst_10830__$1 = farn.sprite.make_sprite.call(null,inst_10829__$1,new cljs.core.Keyword(null,"anchor-x","anchor-x",-1597588837),0.5,new cljs.core.Keyword(null,"anchor-y","anchor-y",-1366716999),0.5);
var inst_10835 = (function (){var player_shadow = inst_10830__$1;
var loader = inst_10811;
var shadow_tex = inst_10829__$1;
var _ = inst_10825__$1;
var tex = inst_10827__$1;
var lobster_big = inst_10817;
var perlin_channel = inst_10812;
var title_text = inst_10826__$1;
var tilemap = inst_10824__$1;
var varela = inst_10818;
var wait = inst_10821;
var player = inst_10828__$1;
return ((function (player_shadow,loader,shadow_tex,_,tex,lobster_big,perlin_channel,title_text,tilemap,varela,wait,player,inst_10828,inst_10862,inst_10853,inst_10850,inst_10830,inst_10812,inst_10829,inst_10849,inst_10840,inst_10848,inst_10856,inst_10827,inst_10818,inst_10843,inst_10826,inst_10876,inst_10817,inst_10825,inst_10824,inst_10821,inst_10859,inst_10811,inst_10869,inst_10824__$1,inst_10825__$1,inst_10826__$1,inst_10827__$1,inst_10828__$1,inst_10829__$1,inst_10830__$1,state_val_11836,c__6459__auto___12267){
return (function iter__10831(s__10832){
return (new cljs.core.LazySeq(null,((function (player_shadow,loader,shadow_tex,_,tex,lobster_big,perlin_channel,title_text,tilemap,varela,wait,player,inst_10828,inst_10862,inst_10853,inst_10850,inst_10830,inst_10812,inst_10829,inst_10849,inst_10840,inst_10848,inst_10856,inst_10827,inst_10818,inst_10843,inst_10826,inst_10876,inst_10817,inst_10825,inst_10824,inst_10821,inst_10859,inst_10811,inst_10869,inst_10824__$1,inst_10825__$1,inst_10826__$1,inst_10827__$1,inst_10828__$1,inst_10829__$1,inst_10830__$1,state_val_11836,c__6459__auto___12267){
return (function (){
var s__10832__$1 = s__10832;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__10832__$1);
if(temp__4126__auto__){
var s__10832__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__10832__$2)){
var c__4384__auto__ = cljs.core.chunk_first.call(null,s__10832__$2);
var size__4385__auto__ = cljs.core.count.call(null,c__4384__auto__);
var b__10834 = cljs.core.chunk_buffer.call(null,size__4385__auto__);
if((function (){var i__10833 = (0);
while(true){
if((i__10833 < size__4385__auto__)){
var type = cljs.core._nth.call(null,c__4384__auto__,i__10833);
cljs.core.chunk_append.call(null,b__10834,farn.gfx.get_texture.call(null,type));

var G__12302 = (i__10833 + (1));
i__10833 = G__12302;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10834),iter__10831.call(null,cljs.core.chunk_rest.call(null,s__10832__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10834),null);
}
} else {
var type = cljs.core.first.call(null,s__10832__$2);
return cljs.core.cons.call(null,farn.gfx.get_texture.call(null,type),iter__10831.call(null,cljs.core.rest.call(null,s__10832__$2)));
}
} else {
return null;
}
break;
}
});})(player_shadow,loader,shadow_tex,_,tex,lobster_big,perlin_channel,title_text,tilemap,varela,wait,player,inst_10828,inst_10862,inst_10853,inst_10850,inst_10830,inst_10812,inst_10829,inst_10849,inst_10840,inst_10848,inst_10856,inst_10827,inst_10818,inst_10843,inst_10826,inst_10876,inst_10817,inst_10825,inst_10824,inst_10821,inst_10859,inst_10811,inst_10869,inst_10824__$1,inst_10825__$1,inst_10826__$1,inst_10827__$1,inst_10828__$1,inst_10829__$1,inst_10830__$1,state_val_11836,c__6459__auto___12267))
,null,null));
});
;})(player_shadow,loader,shadow_tex,_,tex,lobster_big,perlin_channel,title_text,tilemap,varela,wait,player,inst_10828,inst_10862,inst_10853,inst_10850,inst_10830,inst_10812,inst_10829,inst_10849,inst_10840,inst_10848,inst_10856,inst_10827,inst_10818,inst_10843,inst_10826,inst_10876,inst_10817,inst_10825,inst_10824,inst_10821,inst_10859,inst_10811,inst_10869,inst_10824__$1,inst_10825__$1,inst_10826__$1,inst_10827__$1,inst_10828__$1,inst_10829__$1,inst_10830__$1,state_val_11836,c__6459__auto___12267))
})();
var inst_10836 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_10837 = [new cljs.core.Keyword(null,"pink-stand-1","pink-stand-1",1440110735),new cljs.core.Keyword(null,"pink-stand-2","pink-stand-2",376064840),new cljs.core.Keyword(null,"pink-stand-3","pink-stand-3",676644618),new cljs.core.Keyword(null,"pink-stand-4","pink-stand-4",695656413)];
var inst_10838 = (new cljs.core.PersistentVector(null,4,(5),inst_10836,inst_10837,null));
var inst_10839 = inst_10835.call(null,inst_10838);
var inst_10840__$1 = cljs.core.doall.call(null,inst_10839);
var inst_10841 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_10842 = [(0),(-4),(0),(4)];
var inst_10843__$1 = (new cljs.core.PersistentVector(null,4,(5),inst_10841,inst_10842,null));
var inst_10844 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_10845 = farn.gfx.get_texture.call(null,new cljs.core.Keyword(null,"pink-walk-1","pink-walk-1",-1200475595));
var inst_10846 = farn.gfx.get_texture.call(null,new cljs.core.Keyword(null,"pink-walk-2","pink-walk-2",2040805893));
var inst_10847 = [inst_10845,inst_10846];
var inst_10848__$1 = (new cljs.core.PersistentVector(null,2,(5),inst_10844,inst_10847,null));
var inst_10849__$1 = farn.gfx.get_texture.call(null,new cljs.core.Keyword(null,"pickup-star-1","pickup-star-1",-1674863964));
var inst_10850__$1 = farn.sprite.make_sprite.call(null,inst_10849__$1);
var inst_10851 = cljs.core.deref.call(null,farn.core.player_stars);
var inst_10852 = [cljs.core.str(inst_10851)].join('');
var inst_10853__$1 = farn.font.make_text.call(null,"400 20pt Varela Round",inst_10852,new cljs.core.Keyword(null,"weight","weight",-1262796205),(400),new cljs.core.Keyword(null,"fill","fill",883462889),"#ffffff",new cljs.core.Keyword(null,"dropShadow","dropShadow",1001370187),true,new cljs.core.Keyword(null,"dropShadowColor","dropShadowColor",-318037852),"#000000");
var inst_10854 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_10855 = [new cljs.core.Keyword(null,"pickup-star-1","pickup-star-1",-1674863964),new cljs.core.Keyword(null,"pickup-mushroom-1","pickup-mushroom-1",-338548111)];
var inst_10856__$1 = (new cljs.core.PersistentVector(null,2,(5),inst_10854,inst_10855,null));
var inst_10857 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_10858 = [new cljs.core.Keyword(null,"static-floor-path-big","static-floor-path-big",-1637038697),new cljs.core.Keyword(null,"static-floor-path-medium","static-floor-path-medium",-46847685),new cljs.core.Keyword(null,"static-floor-path-small","static-floor-path-small",477685180),new cljs.core.Keyword(null,"static-floor-sand-big","static-floor-sand-big",953875278),new cljs.core.Keyword(null,"static-floor-sand-medium","static-floor-sand-medium",104159128),new cljs.core.Keyword(null,"static-floor-sand-small","static-floor-sand-small",-214159250),new cljs.core.Keyword(null,"static-floor-water-big","static-floor-water-big",1588138738),new cljs.core.Keyword(null,"static-floor-water-medium","static-floor-water-medium",1136261079),new cljs.core.Keyword(null,"static-floor-water-small","static-floor-water-small",1080050532)];
var inst_10859__$1 = (new cljs.core.PersistentVector(null,9,(5),inst_10857,inst_10858,null));
var inst_10860 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_10861 = [new cljs.core.Keyword(null,"static-tree-1","static-tree-1",-1951953537),new cljs.core.Keyword(null,"static-tree-2","static-tree-2",-27985141),new cljs.core.Keyword(null,"static-tree-3","static-tree-3",378870117),new cljs.core.Keyword(null,"static-tree-4","static-tree-4",-1003799420),new cljs.core.Keyword(null,"static-tree-5","static-tree-5",154248249),new cljs.core.Keyword(null,"static-tree-6","static-tree-6",-500626901),new cljs.core.Keyword(null,"static-tree-7","static-tree-7",1865082789),new cljs.core.Keyword(null,"static-tree-8","static-tree-8",-708259882),new cljs.core.Keyword(null,"static-tree-9","static-tree-9",729041102),new cljs.core.Keyword(null,"static-tree-10","static-tree-10",225886540),new cljs.core.Keyword(null,"static-tree-11","static-tree-11",-461585621),new cljs.core.Keyword(null,"static-tree-12","static-tree-12",-1331568669),new cljs.core.Keyword(null,"static-tree-13","static-tree-13",1696371732),new cljs.core.Keyword(null,"static-tree-14","static-tree-14",-890945489),new cljs.core.Keyword(null,"static-tree-15","static-tree-15",-25295839),new cljs.core.Keyword(null,"static-tree-16","static-tree-16",847489456),new cljs.core.Keyword(null,"static-tree-17","static-tree-17",-1292342697),new cljs.core.Keyword(null,"static-tree-18","static-tree-18",-378591927),new cljs.core.Keyword(null,"static-tree-19","static-tree-19",425360659),new cljs.core.Keyword(null,"static-tree-20","static-tree-20",155885611),new cljs.core.Keyword(null,"static-castle-1","static-castle-1",1559541979),new cljs.core.Keyword(null,"static-giant-schroom-1","static-giant-schroom-1",371680418),new cljs.core.Keyword(null,"static-giant-schroom-2","static-giant-schroom-2",1230929171),new cljs.core.Keyword(null,"static-cactus-1","static-cactus-1",368350727),new cljs.core.Keyword(null,"static-cactus-2","static-cactus-2",2022050580),new cljs.core.Keyword(null,"static-cactus-3","static-cactus-3",1331250244)];
var inst_10862__$1 = (new cljs.core.PersistentVector(null,26,(5),inst_10860,inst_10861,null));
var inst_10867 = (function (){var player_stars_text = inst_10853__$1;
var player_standing_texs = inst_10840__$1;
var player_shadow = inst_10830__$1;
var obstacle_types = inst_10862__$1;
var player_standing_sway = inst_10843__$1;
var loader = inst_10811;
var player_walking_texs = inst_10848__$1;
var shadow_tex = inst_10829__$1;
var _ = inst_10825__$1;
var tex = inst_10827__$1;
var lobster_big = inst_10817;
var star_tex = inst_10849__$1;
var pickup_textures = inst_10856__$1;
var perlin_channel = inst_10812;
var title_text = inst_10826__$1;
var floor_objects = inst_10859__$1;
var tilemap = inst_10824__$1;
var varela = inst_10818;
var wait = inst_10821;
var player = inst_10828__$1;
var player_stars_icon = inst_10850__$1;
return ((function (player_stars_text,player_standing_texs,player_shadow,obstacle_types,player_standing_sway,loader,player_walking_texs,shadow_tex,_,tex,lobster_big,star_tex,pickup_textures,perlin_channel,title_text,floor_objects,tilemap,varela,wait,player,player_stars_icon,inst_10828,inst_10862,inst_10853,inst_10850,inst_10830,inst_10812,inst_10829,inst_10849,inst_10840,inst_10848,inst_10856,inst_10827,inst_10818,inst_10843,inst_10826,inst_10876,inst_10817,inst_10825,inst_10824,inst_10821,inst_10859,inst_10811,inst_10869,inst_10824__$1,inst_10825__$1,inst_10826__$1,inst_10827__$1,inst_10828__$1,inst_10829__$1,inst_10830__$1,inst_10835,inst_10836,inst_10837,inst_10838,inst_10839,inst_10840__$1,inst_10841,inst_10842,inst_10843__$1,inst_10844,inst_10845,inst_10846,inst_10847,inst_10848__$1,inst_10849__$1,inst_10850__$1,inst_10851,inst_10852,inst_10853__$1,inst_10854,inst_10855,inst_10856__$1,inst_10857,inst_10858,inst_10859__$1,inst_10860,inst_10861,inst_10862__$1,state_val_11836,c__6459__auto___12267){
return (function iter__10863(s__10864){
return (new cljs.core.LazySeq(null,((function (player_stars_text,player_standing_texs,player_shadow,obstacle_types,player_standing_sway,loader,player_walking_texs,shadow_tex,_,tex,lobster_big,star_tex,pickup_textures,perlin_channel,title_text,floor_objects,tilemap,varela,wait,player,player_stars_icon,inst_10828,inst_10862,inst_10853,inst_10850,inst_10830,inst_10812,inst_10829,inst_10849,inst_10840,inst_10848,inst_10856,inst_10827,inst_10818,inst_10843,inst_10826,inst_10876,inst_10817,inst_10825,inst_10824,inst_10821,inst_10859,inst_10811,inst_10869,inst_10824__$1,inst_10825__$1,inst_10826__$1,inst_10827__$1,inst_10828__$1,inst_10829__$1,inst_10830__$1,inst_10835,inst_10836,inst_10837,inst_10838,inst_10839,inst_10840__$1,inst_10841,inst_10842,inst_10843__$1,inst_10844,inst_10845,inst_10846,inst_10847,inst_10848__$1,inst_10849__$1,inst_10850__$1,inst_10851,inst_10852,inst_10853__$1,inst_10854,inst_10855,inst_10856__$1,inst_10857,inst_10858,inst_10859__$1,inst_10860,inst_10861,inst_10862__$1,state_val_11836,c__6459__auto___12267){
return (function (){
var s__10864__$1 = s__10864;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__10864__$1);
if(temp__4126__auto__){
var s__10864__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__10864__$2)){
var c__4384__auto__ = cljs.core.chunk_first.call(null,s__10864__$2);
var size__4385__auto__ = cljs.core.count.call(null,c__4384__auto__);
var b__10866 = cljs.core.chunk_buffer.call(null,size__4385__auto__);
if((function (){var i__10865 = (0);
while(true){
if((i__10865 < size__4385__auto__)){
var i = cljs.core._nth.call(null,c__4384__auto__,i__10865);
cljs.core.chunk_append.call(null,b__10866,farn.gfx.get_texture.call(null,cljs.core.keyword.call(null,[cljs.core.str("static-tree-"),cljs.core.str((i + (1)))].join(''))));

var G__12303 = (i__10865 + (1));
i__10865 = G__12303;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10866),iter__10863.call(null,cljs.core.chunk_rest.call(null,s__10864__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10866),null);
}
} else {
var i = cljs.core.first.call(null,s__10864__$2);
return cljs.core.cons.call(null,farn.gfx.get_texture.call(null,cljs.core.keyword.call(null,[cljs.core.str("static-tree-"),cljs.core.str((i + (1)))].join(''))),iter__10863.call(null,cljs.core.rest.call(null,s__10864__$2)));
}
} else {
return null;
}
break;
}
});})(player_stars_text,player_standing_texs,player_shadow,obstacle_types,player_standing_sway,loader,player_walking_texs,shadow_tex,_,tex,lobster_big,star_tex,pickup_textures,perlin_channel,title_text,floor_objects,tilemap,varela,wait,player,player_stars_icon,inst_10828,inst_10862,inst_10853,inst_10850,inst_10830,inst_10812,inst_10829,inst_10849,inst_10840,inst_10848,inst_10856,inst_10827,inst_10818,inst_10843,inst_10826,inst_10876,inst_10817,inst_10825,inst_10824,inst_10821,inst_10859,inst_10811,inst_10869,inst_10824__$1,inst_10825__$1,inst_10826__$1,inst_10827__$1,inst_10828__$1,inst_10829__$1,inst_10830__$1,inst_10835,inst_10836,inst_10837,inst_10838,inst_10839,inst_10840__$1,inst_10841,inst_10842,inst_10843__$1,inst_10844,inst_10845,inst_10846,inst_10847,inst_10848__$1,inst_10849__$1,inst_10850__$1,inst_10851,inst_10852,inst_10853__$1,inst_10854,inst_10855,inst_10856__$1,inst_10857,inst_10858,inst_10859__$1,inst_10860,inst_10861,inst_10862__$1,state_val_11836,c__6459__auto___12267))
,null,null));
});
;})(player_stars_text,player_standing_texs,player_shadow,obstacle_types,player_standing_sway,loader,player_walking_texs,shadow_tex,_,tex,lobster_big,star_tex,pickup_textures,perlin_channel,title_text,floor_objects,tilemap,varela,wait,player,player_stars_icon,inst_10828,inst_10862,inst_10853,inst_10850,inst_10830,inst_10812,inst_10829,inst_10849,inst_10840,inst_10848,inst_10856,inst_10827,inst_10818,inst_10843,inst_10826,inst_10876,inst_10817,inst_10825,inst_10824,inst_10821,inst_10859,inst_10811,inst_10869,inst_10824__$1,inst_10825__$1,inst_10826__$1,inst_10827__$1,inst_10828__$1,inst_10829__$1,inst_10830__$1,inst_10835,inst_10836,inst_10837,inst_10838,inst_10839,inst_10840__$1,inst_10841,inst_10842,inst_10843__$1,inst_10844,inst_10845,inst_10846,inst_10847,inst_10848__$1,inst_10849__$1,inst_10850__$1,inst_10851,inst_10852,inst_10853__$1,inst_10854,inst_10855,inst_10856__$1,inst_10857,inst_10858,inst_10859__$1,inst_10860,inst_10861,inst_10862__$1,state_val_11836,c__6459__auto___12267))
})();
var inst_10868 = cljs.core.range.call(null,(10));
var inst_10869__$1 = inst_10867.call(null,inst_10868);
var inst_10874 = (function (){var player_stars_text = inst_10853__$1;
var player_standing_texs = inst_10840__$1;
var player_shadow = inst_10830__$1;
var obstacle_types = inst_10862__$1;
var trees = inst_10869__$1;
var player_standing_sway = inst_10843__$1;
var loader = inst_10811;
var player_walking_texs = inst_10848__$1;
var shadow_tex = inst_10829__$1;
var _ = inst_10825__$1;
var tex = inst_10827__$1;
var lobster_big = inst_10817;
var star_tex = inst_10849__$1;
var pickup_textures = inst_10856__$1;
var perlin_channel = inst_10812;
var title_text = inst_10826__$1;
var floor_objects = inst_10859__$1;
var tilemap = inst_10824__$1;
var varela = inst_10818;
var wait = inst_10821;
var player = inst_10828__$1;
var player_stars_icon = inst_10850__$1;
return ((function (player_stars_text,player_standing_texs,player_shadow,obstacle_types,trees,player_standing_sway,loader,player_walking_texs,shadow_tex,_,tex,lobster_big,star_tex,pickup_textures,perlin_channel,title_text,floor_objects,tilemap,varela,wait,player,player_stars_icon,inst_10828,inst_10862,inst_10853,inst_10850,inst_10830,inst_10812,inst_10829,inst_10849,inst_10840,inst_10848,inst_10856,inst_10827,inst_10818,inst_10843,inst_10826,inst_10876,inst_10817,inst_10825,inst_10824,inst_10821,inst_10859,inst_10811,inst_10869,inst_10824__$1,inst_10825__$1,inst_10826__$1,inst_10827__$1,inst_10828__$1,inst_10829__$1,inst_10830__$1,inst_10835,inst_10836,inst_10837,inst_10838,inst_10839,inst_10840__$1,inst_10841,inst_10842,inst_10843__$1,inst_10844,inst_10845,inst_10846,inst_10847,inst_10848__$1,inst_10849__$1,inst_10850__$1,inst_10851,inst_10852,inst_10853__$1,inst_10854,inst_10855,inst_10856__$1,inst_10857,inst_10858,inst_10859__$1,inst_10860,inst_10861,inst_10862__$1,inst_10867,inst_10868,inst_10869__$1,state_val_11836,c__6459__auto___12267){
return (function iter__10870(s__10871){
return (new cljs.core.LazySeq(null,((function (player_stars_text,player_standing_texs,player_shadow,obstacle_types,trees,player_standing_sway,loader,player_walking_texs,shadow_tex,_,tex,lobster_big,star_tex,pickup_textures,perlin_channel,title_text,floor_objects,tilemap,varela,wait,player,player_stars_icon,inst_10828,inst_10862,inst_10853,inst_10850,inst_10830,inst_10812,inst_10829,inst_10849,inst_10840,inst_10848,inst_10856,inst_10827,inst_10818,inst_10843,inst_10826,inst_10876,inst_10817,inst_10825,inst_10824,inst_10821,inst_10859,inst_10811,inst_10869,inst_10824__$1,inst_10825__$1,inst_10826__$1,inst_10827__$1,inst_10828__$1,inst_10829__$1,inst_10830__$1,inst_10835,inst_10836,inst_10837,inst_10838,inst_10839,inst_10840__$1,inst_10841,inst_10842,inst_10843__$1,inst_10844,inst_10845,inst_10846,inst_10847,inst_10848__$1,inst_10849__$1,inst_10850__$1,inst_10851,inst_10852,inst_10853__$1,inst_10854,inst_10855,inst_10856__$1,inst_10857,inst_10858,inst_10859__$1,inst_10860,inst_10861,inst_10862__$1,inst_10867,inst_10868,inst_10869__$1,state_val_11836,c__6459__auto___12267){
return (function (){
var s__10871__$1 = s__10871;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__10871__$1);
if(temp__4126__auto__){
var s__10871__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__10871__$2)){
var c__4384__auto__ = cljs.core.chunk_first.call(null,s__10871__$2);
var size__4385__auto__ = cljs.core.count.call(null,c__4384__auto__);
var b__10873 = cljs.core.chunk_buffer.call(null,size__4385__auto__);
if((function (){var i__10872 = (0);
while(true){
if((i__10872 < size__4385__auto__)){
var i = cljs.core._nth.call(null,c__4384__auto__,i__10872);
cljs.core.chunk_append.call(null,b__10873,farn.gfx.get_texture.call(null,cljs.core.keyword.call(null,[cljs.core.str("static-tuft-"),cljs.core.str((i + (1)))].join(''))));

var G__12304 = (i__10872 + (1));
i__10872 = G__12304;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10873),iter__10870.call(null,cljs.core.chunk_rest.call(null,s__10871__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10873),null);
}
} else {
var i = cljs.core.first.call(null,s__10871__$2);
return cljs.core.cons.call(null,farn.gfx.get_texture.call(null,cljs.core.keyword.call(null,[cljs.core.str("static-tuft-"),cljs.core.str((i + (1)))].join(''))),iter__10870.call(null,cljs.core.rest.call(null,s__10871__$2)));
}
} else {
return null;
}
break;
}
});})(player_stars_text,player_standing_texs,player_shadow,obstacle_types,trees,player_standing_sway,loader,player_walking_texs,shadow_tex,_,tex,lobster_big,star_tex,pickup_textures,perlin_channel,title_text,floor_objects,tilemap,varela,wait,player,player_stars_icon,inst_10828,inst_10862,inst_10853,inst_10850,inst_10830,inst_10812,inst_10829,inst_10849,inst_10840,inst_10848,inst_10856,inst_10827,inst_10818,inst_10843,inst_10826,inst_10876,inst_10817,inst_10825,inst_10824,inst_10821,inst_10859,inst_10811,inst_10869,inst_10824__$1,inst_10825__$1,inst_10826__$1,inst_10827__$1,inst_10828__$1,inst_10829__$1,inst_10830__$1,inst_10835,inst_10836,inst_10837,inst_10838,inst_10839,inst_10840__$1,inst_10841,inst_10842,inst_10843__$1,inst_10844,inst_10845,inst_10846,inst_10847,inst_10848__$1,inst_10849__$1,inst_10850__$1,inst_10851,inst_10852,inst_10853__$1,inst_10854,inst_10855,inst_10856__$1,inst_10857,inst_10858,inst_10859__$1,inst_10860,inst_10861,inst_10862__$1,inst_10867,inst_10868,inst_10869__$1,state_val_11836,c__6459__auto___12267))
,null,null));
});
;})(player_stars_text,player_standing_texs,player_shadow,obstacle_types,trees,player_standing_sway,loader,player_walking_texs,shadow_tex,_,tex,lobster_big,star_tex,pickup_textures,perlin_channel,title_text,floor_objects,tilemap,varela,wait,player,player_stars_icon,inst_10828,inst_10862,inst_10853,inst_10850,inst_10830,inst_10812,inst_10829,inst_10849,inst_10840,inst_10848,inst_10856,inst_10827,inst_10818,inst_10843,inst_10826,inst_10876,inst_10817,inst_10825,inst_10824,inst_10821,inst_10859,inst_10811,inst_10869,inst_10824__$1,inst_10825__$1,inst_10826__$1,inst_10827__$1,inst_10828__$1,inst_10829__$1,inst_10830__$1,inst_10835,inst_10836,inst_10837,inst_10838,inst_10839,inst_10840__$1,inst_10841,inst_10842,inst_10843__$1,inst_10844,inst_10845,inst_10846,inst_10847,inst_10848__$1,inst_10849__$1,inst_10850__$1,inst_10851,inst_10852,inst_10853__$1,inst_10854,inst_10855,inst_10856__$1,inst_10857,inst_10858,inst_10859__$1,inst_10860,inst_10861,inst_10862__$1,inst_10867,inst_10868,inst_10869__$1,state_val_11836,c__6459__auto___12267))
})();
var inst_10875 = cljs.core.range.call(null,(3));
var inst_10876__$1 = inst_10874.call(null,inst_10875);
var inst_10879 = (function (){var player_stars_text = inst_10853__$1;
var player_standing_texs = inst_10840__$1;
var player_shadow = inst_10830__$1;
var obstacle_types = inst_10862__$1;
var trees = inst_10869__$1;
var player_standing_sway = inst_10843__$1;
var loader = inst_10811;
var player_walking_texs = inst_10848__$1;
var shadow_tex = inst_10829__$1;
var _ = inst_10825__$1;
var tex = inst_10827__$1;
var lobster_big = inst_10817;
var star_tex = inst_10849__$1;
var tufts = inst_10876__$1;
var pickup_textures = inst_10856__$1;
var perlin_channel = inst_10812;
var title_text = inst_10826__$1;
var floor_objects = inst_10859__$1;
var tilemap = inst_10824__$1;
var varela = inst_10818;
var wait = inst_10821;
var player = inst_10828__$1;
var player_stars_icon = inst_10850__$1;
return ((function (player_stars_text,player_standing_texs,player_shadow,obstacle_types,trees,player_standing_sway,loader,player_walking_texs,shadow_tex,_,tex,lobster_big,star_tex,tufts,pickup_textures,perlin_channel,title_text,floor_objects,tilemap,varela,wait,player,player_stars_icon,inst_10828,inst_10862,inst_10853,inst_10850,inst_10830,inst_10812,inst_10829,inst_10849,inst_10840,inst_10848,inst_10856,inst_10827,inst_10818,inst_10843,inst_10826,inst_10876,inst_10817,inst_10825,inst_10824,inst_10821,inst_10859,inst_10811,inst_10869,inst_10824__$1,inst_10825__$1,inst_10826__$1,inst_10827__$1,inst_10828__$1,inst_10829__$1,inst_10830__$1,inst_10835,inst_10836,inst_10837,inst_10838,inst_10839,inst_10840__$1,inst_10841,inst_10842,inst_10843__$1,inst_10844,inst_10845,inst_10846,inst_10847,inst_10848__$1,inst_10849__$1,inst_10850__$1,inst_10851,inst_10852,inst_10853__$1,inst_10854,inst_10855,inst_10856__$1,inst_10857,inst_10858,inst_10859__$1,inst_10860,inst_10861,inst_10862__$1,inst_10867,inst_10868,inst_10869__$1,inst_10874,inst_10875,inst_10876__$1,state_val_11836,c__6459__auto___12267){
return (function() { 
var G__12305__delegate = function (p__10877,spread,p__10878){
var vec__11892 = p__10877;
var x = cljs.core.nth.call(null,vec__11892,(0),null);
var y = cljs.core.nth.call(null,vec__11892,(1),null);
var vec__11893 = p__10878;
var force_type = cljs.core.nth.call(null,vec__11893,(0),null);
var force_exclusion_zone = cljs.core.nth.call(null,vec__11893,(1),null);
var exclusion_zone = (cljs.core.truth_(force_exclusion_zone)?force_exclusion_zone:farn.core.pickup_exclusion_zone);
var pickup_type = (cljs.core.truth_(force_type)?force_type:cljs.core.rand_nth.call(null,pickup_textures));
var s = farn.sprite.make_sprite.call(null,farn.gfx.get_texture.call(null,pickup_type));
var shadow = farn.sprite.make_sprite.call(null,shadow_tex,new cljs.core.Keyword(null,"anchor-x","anchor-x",-1597588837),0.5,new cljs.core.Keyword(null,"anchor-y","anchor-y",-1366716999),0.5);
var ___$1 = farn.sprite.set_pos_BANG_.call(null,s,(50000),(10000));
var ___$2 = farn.sprite.set_pos_BANG_.call(null,shadow,(50000),(10000));
var xoff = (((cljs.core.rand.call(null) < 0.5))?farn.utils.rand_between.call(null,(- spread),(- exclusion_zone)):farn.utils.rand_between.call(null,exclusion_zone,spread));
var yoff = (((cljs.core.rand.call(null) < 0.5))?farn.utils.rand_between.call(null,(- spread),(- exclusion_zone)):farn.utils.rand_between.call(null,exclusion_zone,spread));
cljs.core.println.call(null,pickup_type,(x + xoff),(y + yoff));

return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"sprite","sprite",172516848),s,new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + xoff),(y + yoff)], null),new cljs.core.Keyword(null,"shadow","shadow",873231803),shadow,new cljs.core.Keyword(null,"scale","scale",-230427353),0.7,new cljs.core.Keyword(null,"type","type",1174270348),pickup_type], null);
};
var G__12305 = function (p__10877,spread,var_args){
var p__10878 = null;
if (arguments.length > 2) {
  p__10878 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__12305__delegate.call(this,p__10877,spread,p__10878);};
G__12305.cljs$lang$maxFixedArity = 2;
G__12305.cljs$lang$applyTo = (function (arglist__12306){
var p__10877 = cljs.core.first(arglist__12306);
arglist__12306 = cljs.core.next(arglist__12306);
var spread = cljs.core.first(arglist__12306);
var p__10878 = cljs.core.rest(arglist__12306);
return G__12305__delegate(p__10877,spread,p__10878);
});
G__12305.cljs$core$IFn$_invoke$arity$variadic = G__12305__delegate;
return G__12305;
})()
;
;})(player_stars_text,player_standing_texs,player_shadow,obstacle_types,trees,player_standing_sway,loader,player_walking_texs,shadow_tex,_,tex,lobster_big,star_tex,tufts,pickup_textures,perlin_channel,title_text,floor_objects,tilemap,varela,wait,player,player_stars_icon,inst_10828,inst_10862,inst_10853,inst_10850,inst_10830,inst_10812,inst_10829,inst_10849,inst_10840,inst_10848,inst_10856,inst_10827,inst_10818,inst_10843,inst_10826,inst_10876,inst_10817,inst_10825,inst_10824,inst_10821,inst_10859,inst_10811,inst_10869,inst_10824__$1,inst_10825__$1,inst_10826__$1,inst_10827__$1,inst_10828__$1,inst_10829__$1,inst_10830__$1,inst_10835,inst_10836,inst_10837,inst_10838,inst_10839,inst_10840__$1,inst_10841,inst_10842,inst_10843__$1,inst_10844,inst_10845,inst_10846,inst_10847,inst_10848__$1,inst_10849__$1,inst_10850__$1,inst_10851,inst_10852,inst_10853__$1,inst_10854,inst_10855,inst_10856__$1,inst_10857,inst_10858,inst_10859__$1,inst_10860,inst_10861,inst_10862__$1,inst_10867,inst_10868,inst_10869__$1,inst_10874,inst_10875,inst_10876__$1,state_val_11836,c__6459__auto___12267))
})();
var inst_10883 = cljs.core.PersistentVector.EMPTY;
var inst_10884 = cljs.core.range.call(null,(1),(10));
var inst_10885 = cljs.core.nth.call(null,inst_10884,(0),null);
var inst_10886 = cljs.core.nthnext.call(null,inst_10884,(1));
var inst_10887 = inst_10883;
var inst_10888 = inst_10884;
var state_11835__$1 = (function (){var statearr_11894 = state_11835;
(statearr_11894[(43)] = inst_10828__$1);

(statearr_11894[(44)] = inst_10862__$1);

(statearr_11894[(48)] = inst_10853__$1);

(statearr_11894[(50)] = inst_10879);

(statearr_11894[(51)] = inst_10850__$1);

(statearr_11894[(52)] = inst_10830__$1);

(statearr_11894[(8)] = inst_10829__$1);

(statearr_11894[(9)] = inst_10849__$1);

(statearr_11894[(59)] = inst_10840__$1);

(statearr_11894[(93)] = inst_10886);

(statearr_11894[(61)] = inst_10848__$1);

(statearr_11894[(62)] = inst_10856__$1);

(statearr_11894[(63)] = inst_10827__$1);

(statearr_11894[(66)] = inst_10843__$1);

(statearr_11894[(94)] = inst_10885);

(statearr_11894[(80)] = inst_10826__$1);

(statearr_11894[(81)] = inst_10876__$1);

(statearr_11894[(84)] = inst_10825__$1);

(statearr_11894[(86)] = inst_10824__$1);

(statearr_11894[(95)] = inst_10888);

(statearr_11894[(89)] = inst_10859__$1);

(statearr_11894[(96)] = inst_10887);

(statearr_11894[(91)] = inst_10869__$1);

return statearr_11894;
})();
var statearr_11895_12307 = state_11835__$1;
(statearr_11895_12307[(2)] = null);

(statearr_11895_12307[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11836 === (77))){
var inst_11331 = (state_11835[(32)]);
var inst_11549 = (state_11835[(23)]);
var inst_11547 = (state_11835[(24)]);
var inst_11325 = (state_11835[(33)]);
var inst_11548 = (state_11835[(25)]);
var inst_11550 = (state_11835[(26)]);
var inst_11334 = (state_11835[(35)]);
var inst_11324 = (state_11835[(36)]);
var inst_10935 = (state_11835[(37)]);
var inst_11555 = cljs.core._nth.call(null,inst_11548,inst_11550);
var inst_11557 = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(inst_11555);
var inst_11558 = new cljs.core.Keyword(null,"sprite","sprite",172516848).cljs$core$IFn$_invoke$arity$1(inst_11555);
var inst_11559 = inst_10935.call(null,inst_11557,inst_11558,inst_11324,inst_11325,inst_11331,inst_11334);
var inst_11560 = cljs.core.nth.call(null,inst_11559,(0),null);
var inst_11561 = cljs.core.nth.call(null,inst_11559,(1),null);
var inst_11562 = new cljs.core.Keyword(null,"sprite","sprite",172516848).cljs$core$IFn$_invoke$arity$1(inst_11555);
var inst_11563 = farn.sprite.set_pos_BANG_.call(null,inst_11562,inst_11560,inst_11561);
var inst_11564 = (inst_11550 + (1));
var tmp11888 = inst_11549;
var tmp11889 = inst_11547;
var tmp11890 = inst_11548;
var inst_11547__$1 = tmp11889;
var inst_11548__$1 = tmp11890;
var inst_11549__$1 = tmp11888;
var inst_11550__$1 = inst_11564;
var state_11835__$1 = (function (){var statearr_11896 = state_11835;
(statearr_11896[(23)] = inst_11549__$1);

(statearr_11896[(24)] = inst_11547__$1);

(statearr_11896[(25)] = inst_11548__$1);

(statearr_11896[(26)] = inst_11550__$1);

(statearr_11896[(97)] = inst_11563);

return statearr_11896;
})();
var statearr_11897_12308 = state_11835__$1;
(statearr_11897_12308[(2)] = null);

(statearr_11897_12308[(1)] = (75));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11836 === (106))){
var inst_11710 = (state_11835[(98)]);
var inst_11681 = (state_11835[(99)]);
var inst_11710__$1 = cljs.core.seq.call(null,inst_11681);
var state_11835__$1 = (function (){var statearr_11898 = state_11835;
(statearr_11898[(98)] = inst_11710__$1);

return statearr_11898;
})();
if(inst_11710__$1){
var statearr_11899_12309 = state_11835__$1;
(statearr_11899_12309[(1)] = (108));

} else {
var statearr_11900_12310 = state_11835__$1;
(statearr_11900_12310[(1)] = (109));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11836 === (119))){
var inst_11767 = (state_11835[(2)]);
var state_11835__$1 = state_11835;
var statearr_11901_12311 = state_11835__$1;
(statearr_11901_12311[(2)] = inst_11767);

(statearr_11901_12311[(1)] = (116));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11836 === (95))){
var inst_11615 = (state_11835[(41)]);
var inst_11635 = (state_11835[(34)]);
var inst_11635__$1 = cljs.core.seq.call(null,inst_11615);
var state_11835__$1 = (function (){var statearr_11902 = state_11835;
(statearr_11902[(34)] = inst_11635__$1);

return statearr_11902;
})();
if(inst_11635__$1){
var statearr_11903_12312 = state_11835__$1;
(statearr_11903_12312[(1)] = (97));

} else {
var statearr_11904_12313 = state_11835__$1;
(statearr_11904_12313[(1)] = (98));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11836 === (54))){
var inst_10906 = (state_11835[(57)]);
var inst_11451 = (state_11835[(100)]);
var inst_11460 = cljs.core.rand_nth.call(null,inst_10906);
var inst_11461 = farn.sound.play_sound.call(null,inst_11460,0.4);
var inst_11462 = new cljs.core.Keyword(null,"sprite","sprite",172516848).cljs$core$IFn$_invoke$arity$1(inst_11451);
var inst_11463 = farn.core.main_stage.removeChild(inst_11462);
var inst_11464 = new cljs.core.Keyword(null,"shadow","shadow",873231803).cljs$core$IFn$_invoke$arity$1(inst_11451);
var inst_11465 = farn.core.main_stage.removeChild(inst_11464);
var inst_11466 = cljs.core.swap_BANG_.call(null,farn.core.player_stars,cljs.core.inc);
var inst_11467 = cljs.core.swap_BANG_.call(null,farn.core.pickup_store,cljs.core.disj,inst_11451);
var state_11835__$1 = (function (){var statearr_11905 = state_11835;
(statearr_11905[(101)] = inst_11466);

(statearr_11905[(102)] = inst_11465);

(statearr_11905[(103)] = inst_11463);

(statearr_11905[(104)] = inst_11461);

(statearr_11905[(105)] = inst_11467);

return statearr_11905;
})();
var statearr_11906_12314 = state_11835__$1;
(statearr_11906_12314[(2)] = null);

(statearr_11906_12314[(1)] = (55));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11836 === (92))){
var inst_11617 = (state_11835[(38)]);
var inst_11618 = (state_11835[(42)]);
var inst_11620 = (inst_11618 < inst_11617);
var inst_11621 = inst_11620;
var state_11835__$1 = state_11835;
if(cljs.core.truth_(inst_11621)){
var statearr_11907_12315 = state_11835__$1;
(statearr_11907_12315[(1)] = (94));

} else {
var statearr_11908_12316 = state_11835__$1;
(statearr_11908_12316[(1)] = (95));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11836 === (141))){
var inst_11826 = (state_11835[(2)]);
var state_11835__$1 = state_11835;
var statearr_11909_12317 = state_11835__$1;
(statearr_11909_12317[(2)] = inst_11826);

(statearr_11909_12317[(1)] = (138));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11836 === (137))){
var inst_11821 = farn.events.is_pressed_QMARK_.call(null,new cljs.core.Keyword(null,"right","right",-452581833));
var state_11835__$1 = state_11835;
if(cljs.core.truth_(inst_11821)){
var statearr_11910_12318 = state_11835__$1;
(statearr_11910_12318[(1)] = (139));

} else {
var statearr_11911_12319 = state_11835__$1;
(statearr_11911_12319[(1)] = (140));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11836 === (104))){
var inst_11331 = (state_11835[(32)]);
var inst_11758 = (state_11835[(106)]);
var inst_11335 = (state_11835[(65)]);
var inst_11325 = (state_11835[(33)]);
var inst_11334 = (state_11835[(35)]);
var inst_11324 = (state_11835[(36)]);
var inst_11747 = (state_11835[(2)]);
var inst_11748 = farn.sprite.set_pivot_BANG_.call(null,farn.core.main_stage,inst_11324,inst_11325);
var inst_11749 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_11750 = [inst_11324,inst_11325];
var inst_11751 = (new cljs.core.PersistentVector(null,2,(5),inst_11749,inst_11750,null));
var inst_11752 = cljs.core.reset_BANG_.call(null,farn.core.last_player_position,inst_11751);
var inst_11753 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_11754 = [inst_11331,inst_11334];
var inst_11755 = (new cljs.core.PersistentVector(null,2,(5),inst_11753,inst_11754,null));
var inst_11756 = cljs.core.reset_BANG_.call(null,farn.core.last_player_rh,inst_11755);
var inst_11757 = Math.abs.call(null,inst_11335);
var inst_11758__$1 = (inst_11757 > (2));
var state_11835__$1 = (function (){var statearr_11912 = state_11835;
(statearr_11912[(106)] = inst_11758__$1);

(statearr_11912[(107)] = inst_11748);

(statearr_11912[(108)] = inst_11747);

(statearr_11912[(109)] = inst_11752);

(statearr_11912[(110)] = inst_11756);

return statearr_11912;
})();
if(cljs.core.truth_(inst_11758__$1)){
var statearr_11913_12320 = state_11835__$1;
(statearr_11913_12320[(1)] = (114));

} else {
var statearr_11914_12321 = state_11835__$1;
(statearr_11914_12321[(1)] = (115));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11836 === (15))){
var inst_10931 = (state_11835[(2)]);
var state_11835__$1 = state_11835;
var statearr_11915_12322 = state_11835__$1;
(statearr_11915_12322[(2)] = inst_10931);

(statearr_11915_12322[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11836 === (48))){
var inst_10828 = (state_11835[(43)]);
var inst_11442 = (state_11835[(111)]);
var inst_11451 = (state_11835[(100)]);
var inst_11451__$1 = cljs.core.first.call(null,inst_11442);
var inst_11452 = new cljs.core.Keyword(null,"sprite","sprite",172516848).cljs$core$IFn$_invoke$arity$1(inst_11451__$1);
var inst_11453 = farn.sprite.overlap_QMARK_.call(null,inst_10828,inst_11452);
var state_11835__$1 = (function (){var statearr_11916 = state_11835;
(statearr_11916[(100)] = inst_11451__$1);

return statearr_11916;
})();
if(inst_11453){
var statearr_11917_12323 = state_11835__$1;
(statearr_11917_12323[(1)] = (50));

} else {
var statearr_11918_12324 = state_11835__$1;
(statearr_11918_12324[(1)] = (51));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11836 === (50))){
var inst_11451 = (state_11835[(100)]);
var inst_11455 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(inst_11451);
var inst_11456 = cljs.core._EQ_.call(null,inst_11455,new cljs.core.Keyword(null,"pickup-baby-1","pickup-baby-1",-1650486973));
var state_11835__$1 = state_11835;
if(inst_11456){
var statearr_11919_12325 = state_11835__$1;
(statearr_11919_12325[(1)] = (53));

} else {
var statearr_11920_12326 = state_11835__$1;
(statearr_11920_12326[(1)] = (54));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11836 === (116))){
var inst_11769 = (state_11835[(2)]);
var state_11835__$1 = state_11835;
if(cljs.core.truth_(inst_11769)){
var statearr_11921_12327 = state_11835__$1;
(statearr_11921_12327[(1)] = (120));

} else {
var statearr_11922_12328 = state_11835__$1;
(statearr_11922_12328[(1)] = (121));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11836 === (75))){
var inst_11549 = (state_11835[(23)]);
var inst_11550 = (state_11835[(26)]);
var inst_11552 = (inst_11550 < inst_11549);
var inst_11553 = inst_11552;
var state_11835__$1 = state_11835;
if(cljs.core.truth_(inst_11553)){
var statearr_11923_12329 = state_11835__$1;
(statearr_11923_12329[(1)] = (77));

} else {
var statearr_11924_12330 = state_11835__$1;
(statearr_11924_12330[(1)] = (78));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11836 === (99))){
var inst_11659 = (state_11835[(2)]);
var state_11835__$1 = state_11835;
var statearr_11925_12331 = state_11835__$1;
(statearr_11925_12331[(2)] = inst_11659);

(statearr_11925_12331[(1)] = (96));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11836 === (21))){
var state_11835__$1 = state_11835;
var statearr_11926_12332 = state_11835__$1;
(statearr_11926_12332[(2)] = null);

(statearr_11926_12332[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11836 === (31))){
var inst_11387 = (state_11835[(72)]);
var state_11835__$1 = state_11835;
var statearr_11927_12333 = state_11835__$1;
(statearr_11927_12333[(2)] = inst_11387);

(statearr_11927_12333[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11836 === (113))){
var inst_11740 = (state_11835[(2)]);
var state_11835__$1 = state_11835;
var statearr_11928_12334 = state_11835__$1;
(statearr_11928_12334[(2)] = inst_11740);

(statearr_11928_12334[(1)] = (110));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11836 === (32))){
var inst_11400 = (state_11835[(2)]);
var state_11835__$1 = state_11835;
var statearr_11929_12335 = state_11835__$1;
(statearr_11929_12335[(2)] = inst_11400);

(statearr_11929_12335[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11836 === (136))){
var inst_11309 = (state_11835[(53)]);
var inst_11819 = (inst_11309 + farn.core.player_turn_speed);
var state_11835__$1 = state_11835;
var statearr_11933_12336 = state_11835__$1;
(statearr_11933_12336[(2)] = inst_11819);

(statearr_11933_12336[(1)] = (138));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11836 === (139))){
var inst_11309 = (state_11835[(53)]);
var inst_11823 = (inst_11309 - farn.core.player_turn_speed);
var state_11835__$1 = state_11835;
var statearr_11934_12337 = state_11835__$1;
(statearr_11934_12337[(2)] = inst_11823);

(statearr_11934_12337[(1)] = (141));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11836 === (40))){
var inst_11412 = (state_11835[(112)]);
var inst_11411 = (state_11835[(113)]);
var inst_11410 = (state_11835[(114)]);
var inst_11409 = (state_11835[(115)]);
var inst_11438 = (state_11835[(2)]);
var inst_11439 = (inst_11412 + (1));
var tmp11930 = inst_11411;
var tmp11931 = inst_11410;
var tmp11932 = inst_11409;
var inst_11409__$1 = tmp11932;
var inst_11410__$1 = tmp11931;
var inst_11411__$1 = tmp11930;
var inst_11412__$1 = inst_11439;
var state_11835__$1 = (function (){var statearr_11935 = state_11835;
(statearr_11935[(116)] = inst_11438);

(statearr_11935[(112)] = inst_11412__$1);

(statearr_11935[(113)] = inst_11411__$1);

(statearr_11935[(114)] = inst_11410__$1);

(statearr_11935[(115)] = inst_11409__$1);

return statearr_11935;
})();
var statearr_11936_12338 = state_11835__$1;
(statearr_11936_12338[(2)] = null);

(statearr_11936_12338[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11836 === (129))){
var inst_11816 = (state_11835[(2)]);
var inst_11817 = farn.events.is_pressed_QMARK_.call(null,new cljs.core.Keyword(null,"left","left",-399115937));
var state_11835__$1 = (function (){var statearr_11937 = state_11835;
(statearr_11937[(117)] = inst_11816);

return statearr_11937;
})();
if(cljs.core.truth_(inst_11817)){
var statearr_11938_12339 = state_11835__$1;
(statearr_11938_12339[(1)] = (136));

} else {
var statearr_11939_12340 = state_11835__$1;
(statearr_11939_12340[(1)] = (137));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11836 === (91))){
var inst_11667 = (state_11835[(2)]);
var state_11835__$1 = state_11835;
var statearr_11940_12341 = state_11835__$1;
(statearr_11940_12341[(2)] = inst_11667);

(statearr_11940_12341[(1)] = (88));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11836 === (117))){
var inst_11762 = (state_11835[(118)]);
var state_11835__$1 = state_11835;
var statearr_11941_12342 = state_11835__$1;
(statearr_11941_12342[(2)] = inst_11762);

(statearr_11941_12342[(1)] = (119));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11836 === (108))){
var inst_11710 = (state_11835[(98)]);
var inst_11712 = cljs.core.chunked_seq_QMARK_.call(null,inst_11710);
var state_11835__$1 = state_11835;
if(inst_11712){
var statearr_11942_12343 = state_11835__$1;
(statearr_11942_12343[(1)] = (111));

} else {
var statearr_11943_12344 = state_11835__$1;
(statearr_11943_12344[(1)] = (112));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11836 === (56))){
var inst_11488 = (state_11835[(119)]);
var state_11835__$1 = state_11835;
var statearr_11944_12345 = state_11835__$1;
(statearr_11944_12345[(2)] = inst_11488);

(statearr_11944_12345[(1)] = (58));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11836 === (33))){
var inst_11412 = (state_11835[(112)]);
var inst_11411 = (state_11835[(113)]);
var inst_11414 = (inst_11412 < inst_11411);
var inst_11415 = inst_11414;
var state_11835__$1 = state_11835;
if(cljs.core.truth_(inst_11415)){
var statearr_11945_12346 = state_11835__$1;
(statearr_11945_12346[(1)] = (35));

} else {
var statearr_11946_12347 = state_11835__$1;
(statearr_11946_12347[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11836 === (13))){
var inst_10918 = (state_11835[(120)]);
var inst_10923 = [cljs.core.str("sfx/boom-"),cljs.core.str(inst_10918),cljs.core.str(".ogg")].join('');
var inst_10924 = farn.sound.load_sound.call(null,inst_10923);
var state_11835__$1 = state_11835;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11835__$1,(16),inst_10924);
} else {
if((state_val_11836 === (22))){
var inst_10828 = (state_11835[(43)]);
var inst_10862 = (state_11835[(44)]);
var inst_11307 = (state_11835[(17)]);
var inst_11328 = (state_11835[(46)]);
var inst_11337 = (state_11835[(47)]);
var inst_11331 = (state_11835[(32)]);
var inst_10853 = (state_11835[(48)]);
var inst_10879 = (state_11835[(50)]);
var inst_10850 = (state_11835[(51)]);
var inst_10830 = (state_11835[(52)]);
var inst_11309 = (state_11835[(53)]);
var inst_10812 = (state_11835[(29)]);
var inst_11010 = (state_11835[(54)]);
var inst_10829 = (state_11835[(8)]);
var inst_11340 = (state_11835[(55)]);
var inst_11338 = (state_11835[(56)]);
var inst_11018 = (state_11835[(21)]);
var inst_10906 = (state_11835[(57)]);
var inst_10849 = (state_11835[(9)]);
var inst_11023 = (state_11835[(58)]);
var inst_10840 = (state_11835[(59)]);
var inst_10938 = (state_11835[(60)]);
var inst_10848 = (state_11835[(61)]);
var inst_10856 = (state_11835[(62)]);
var inst_10827 = (state_11835[(63)]);
var inst_10818 = (state_11835[(64)]);
var inst_11335 = (state_11835[(65)]);
var inst_10843 = (state_11835[(66)]);
var inst_11326 = (state_11835[(67)]);
var inst_11021 = (state_11835[(68)]);
var inst_10934 = (state_11835[(74)]);
var inst_11351 = (state_11835[(75)]);
var inst_11306 = (state_11835[(76)]);
var inst_11022 = (state_11835[(77)]);
var inst_11336 = (state_11835[(78)]);
var inst_11325 = (state_11835[(33)]);
var inst_11339 = (state_11835[(79)]);
var inst_10826 = (state_11835[(80)]);
var inst_11334 = (state_11835[(35)]);
var inst_11312 = (state_11835[(27)]);
var inst_10933 = (state_11835[(18)]);
var inst_10876 = (state_11835[(81)]);
var inst_11324 = (state_11835[(36)]);
var inst_10817 = (state_11835[(82)]);
var inst_11327 = (state_11835[(83)]);
var inst_10825 = (state_11835[(84)]);
var inst_11310 = (state_11835[(85)]);
var inst_10824 = (state_11835[(86)]);
var inst_11308 = (state_11835[(87)]);
var inst_10821 = (state_11835[(88)]);
var inst_10859 = (state_11835[(89)]);
var inst_10935 = (state_11835[(37)]);
var inst_11311 = (state_11835[(90)]);
var inst_10811 = (state_11835[(28)]);
var inst_10869 = (state_11835[(91)]);
var inst_11017 = (state_11835[(92)]);
var inst_11321 = (state_11835[(2)]);
var inst_11324__$1 = cljs.core.nth.call(null,inst_11307,(0),null);
var inst_11325__$1 = cljs.core.nth.call(null,inst_11307,(1),null);
var inst_11326__$1 = (inst_11309 + Math.PI);
var inst_11327__$1 = Math.cos.call(null,inst_11326__$1);
var inst_11328__$1 = Math.sin.call(null,inst_11326__$1);
var inst_11329 = ((2) * Math.PI);
var inst_11330 = (inst_11329 - inst_11326__$1);
var inst_11331__$1 = Math.cos.call(null,inst_11330);
var inst_11332 = ((2) * Math.PI);
var inst_11333 = (inst_11332 - inst_11326__$1);
var inst_11334__$1 = Math.sin.call(null,inst_11333);
var inst_11335__$1 = (inst_11308 * inst_11327__$1);
var inst_11336__$1 = (inst_11308 * inst_11328__$1);
var inst_11337__$1 = farn.core.main_stage.children.length;
var inst_11338__$1 = farn.spatial.which_cell.call(null,inst_11307,farn.core.cell_size);
var inst_11339__$1 = cljs.core.nth.call(null,inst_11338__$1,(0),null);
var inst_11340__$1 = cljs.core.nth.call(null,inst_11338__$1,(1),null);
var inst_11347 = (function (){var add_cell_BANG_ = inst_11022;
var depth_compare = inst_10934;
var x = inst_11324__$1;
var player_stars_text = inst_10853;
var player_standing_texs = inst_10840;
var cells = inst_11310;
var player_shadow = inst_10830;
var player_cell = inst_11338__$1;
var close_QMARK_ = inst_10938;
var sprite_count = inst_11311;
var player_pos = inst_11021;
var calc_theta = inst_11326__$1;
var obstacle_types = inst_10862;
var polar_object_coords = inst_10935;
var trees = inst_10869;
var player_hit = inst_11312;
var old_sprite_count = inst_11337__$1;
var y = inst_11325__$1;
var player_standing_sway = inst_10843;
var player_cell_y = inst_11340__$1;
var player_cell_x = inst_11339__$1;
var vec__11323 = inst_11338__$1;
var game_sprites = inst_11017;
var loader = inst_10811;
var player_walking_texs = inst_10848;
var rhx = inst_11331__$1;
var rhy = inst_11334__$1;
var frame_num = inst_11306;
var shadow_tex = inst_10829;
var _ = inst_10825;
var tex = inst_10827;
var speed = inst_11308;
var hit_sfx = inst_10933;
var lobster_big = inst_10817;
var game_map = inst_11010;
var star_tex = inst_10849;
var pos = inst_11307;
var remove_cell_BANG_ = inst_11023;
var vec__11322 = inst_11307;
var theta = inst_11309;
var tufts = inst_10876;
var game_space = inst_11018;
var pickup_textures = inst_10856;
var perlin_channel = inst_10812;
var title_text = inst_10826;
var vx = inst_11335__$1;
var floor_objects = inst_10859;
var pickup_sfx = inst_10906;
var tilemap = inst_10824;
var vy = inst_11336__$1;
var make_pickup = inst_10879;
var varela = inst_10818;
var hy = inst_11328__$1;
var wait = inst_10821;
var hx = inst_11327__$1;
var player = inst_10828;
var player_stars_icon = inst_10850;
return ((function (add_cell_BANG_,depth_compare,x,player_stars_text,player_standing_texs,cells,player_shadow,player_cell,close_QMARK_,sprite_count,player_pos,calc_theta,obstacle_types,polar_object_coords,trees,player_hit,old_sprite_count,y,player_standing_sway,player_cell_y,player_cell_x,vec__11323,game_sprites,loader,player_walking_texs,rhx,rhy,frame_num,shadow_tex,_,tex,speed,hit_sfx,lobster_big,game_map,star_tex,pos,remove_cell_BANG_,vec__11322,theta,tufts,game_space,pickup_textures,perlin_channel,title_text,vx,floor_objects,pickup_sfx,tilemap,vy,make_pickup,varela,hy,wait,hx,player,player_stars_icon,inst_10828,inst_10862,inst_11307,inst_11328,inst_11337,inst_11331,inst_10853,inst_10879,inst_10850,inst_10830,inst_11309,inst_10812,inst_11010,inst_10829,inst_11340,inst_11338,inst_11018,inst_10906,inst_10849,inst_11023,inst_10840,inst_10938,inst_10848,inst_10856,inst_10827,inst_10818,inst_11335,inst_10843,inst_11326,inst_11021,inst_10934,inst_11351,inst_11306,inst_11022,inst_11336,inst_11325,inst_11339,inst_10826,inst_11334,inst_11312,inst_10933,inst_10876,inst_11324,inst_10817,inst_11327,inst_10825,inst_11310,inst_10824,inst_11308,inst_10821,inst_10859,inst_10935,inst_11311,inst_10811,inst_10869,inst_11017,inst_11321,inst_11324__$1,inst_11325__$1,inst_11326__$1,inst_11327__$1,inst_11328__$1,inst_11329,inst_11330,inst_11331__$1,inst_11332,inst_11333,inst_11334__$1,inst_11335__$1,inst_11336__$1,inst_11337__$1,inst_11338__$1,inst_11339__$1,inst_11340__$1,state_val_11836,c__6459__auto___12267){
return (function iter__11341(s__11342){
return (new cljs.core.LazySeq(null,((function (add_cell_BANG_,depth_compare,x,player_stars_text,player_standing_texs,cells,player_shadow,player_cell,close_QMARK_,sprite_count,player_pos,calc_theta,obstacle_types,polar_object_coords,trees,player_hit,old_sprite_count,y,player_standing_sway,player_cell_y,player_cell_x,vec__11323,game_sprites,loader,player_walking_texs,rhx,rhy,frame_num,shadow_tex,_,tex,speed,hit_sfx,lobster_big,game_map,star_tex,pos,remove_cell_BANG_,vec__11322,theta,tufts,game_space,pickup_textures,perlin_channel,title_text,vx,floor_objects,pickup_sfx,tilemap,vy,make_pickup,varela,hy,wait,hx,player,player_stars_icon,inst_10828,inst_10862,inst_11307,inst_11328,inst_11337,inst_11331,inst_10853,inst_10879,inst_10850,inst_10830,inst_11309,inst_10812,inst_11010,inst_10829,inst_11340,inst_11338,inst_11018,inst_10906,inst_10849,inst_11023,inst_10840,inst_10938,inst_10848,inst_10856,inst_10827,inst_10818,inst_11335,inst_10843,inst_11326,inst_11021,inst_10934,inst_11351,inst_11306,inst_11022,inst_11336,inst_11325,inst_11339,inst_10826,inst_11334,inst_11312,inst_10933,inst_10876,inst_11324,inst_10817,inst_11327,inst_10825,inst_11310,inst_10824,inst_11308,inst_10821,inst_10859,inst_10935,inst_11311,inst_10811,inst_10869,inst_11017,inst_11321,inst_11324__$1,inst_11325__$1,inst_11326__$1,inst_11327__$1,inst_11328__$1,inst_11329,inst_11330,inst_11331__$1,inst_11332,inst_11333,inst_11334__$1,inst_11335__$1,inst_11336__$1,inst_11337__$1,inst_11338__$1,inst_11339__$1,inst_11340__$1,state_val_11836,c__6459__auto___12267){
return (function (){
var s__11342__$1 = s__11342;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__11342__$1);
if(temp__4126__auto__){
var xs__4624__auto__ = temp__4126__auto__;
var dx = cljs.core.first.call(null,xs__4624__auto__);
var iterys__4382__auto__ = ((function (s__11342__$1,dx,xs__4624__auto__,temp__4126__auto__,add_cell_BANG_,depth_compare,x,player_stars_text,player_standing_texs,cells,player_shadow,player_cell,close_QMARK_,sprite_count,player_pos,calc_theta,obstacle_types,polar_object_coords,trees,player_hit,old_sprite_count,y,player_standing_sway,player_cell_y,player_cell_x,vec__11323,game_sprites,loader,player_walking_texs,rhx,rhy,frame_num,shadow_tex,_,tex,speed,hit_sfx,lobster_big,game_map,star_tex,pos,remove_cell_BANG_,vec__11322,theta,tufts,game_space,pickup_textures,perlin_channel,title_text,vx,floor_objects,pickup_sfx,tilemap,vy,make_pickup,varela,hy,wait,hx,player,player_stars_icon,inst_10828,inst_10862,inst_11307,inst_11328,inst_11337,inst_11331,inst_10853,inst_10879,inst_10850,inst_10830,inst_11309,inst_10812,inst_11010,inst_10829,inst_11340,inst_11338,inst_11018,inst_10906,inst_10849,inst_11023,inst_10840,inst_10938,inst_10848,inst_10856,inst_10827,inst_10818,inst_11335,inst_10843,inst_11326,inst_11021,inst_10934,inst_11351,inst_11306,inst_11022,inst_11336,inst_11325,inst_11339,inst_10826,inst_11334,inst_11312,inst_10933,inst_10876,inst_11324,inst_10817,inst_11327,inst_10825,inst_11310,inst_10824,inst_11308,inst_10821,inst_10859,inst_10935,inst_11311,inst_10811,inst_10869,inst_11017,inst_11321,inst_11324__$1,inst_11325__$1,inst_11326__$1,inst_11327__$1,inst_11328__$1,inst_11329,inst_11330,inst_11331__$1,inst_11332,inst_11333,inst_11334__$1,inst_11335__$1,inst_11336__$1,inst_11337__$1,inst_11338__$1,inst_11339__$1,inst_11340__$1,state_val_11836,c__6459__auto___12267){
return (function iter__11343(s__11344){
return (new cljs.core.LazySeq(null,((function (s__11342__$1,dx,xs__4624__auto__,temp__4126__auto__,add_cell_BANG_,depth_compare,x,player_stars_text,player_standing_texs,cells,player_shadow,player_cell,close_QMARK_,sprite_count,player_pos,calc_theta,obstacle_types,polar_object_coords,trees,player_hit,old_sprite_count,y,player_standing_sway,player_cell_y,player_cell_x,vec__11323,game_sprites,loader,player_walking_texs,rhx,rhy,frame_num,shadow_tex,_,tex,speed,hit_sfx,lobster_big,game_map,star_tex,pos,remove_cell_BANG_,vec__11322,theta,tufts,game_space,pickup_textures,perlin_channel,title_text,vx,floor_objects,pickup_sfx,tilemap,vy,make_pickup,varela,hy,wait,hx,player,player_stars_icon,inst_10828,inst_10862,inst_11307,inst_11328,inst_11337,inst_11331,inst_10853,inst_10879,inst_10850,inst_10830,inst_11309,inst_10812,inst_11010,inst_10829,inst_11340,inst_11338,inst_11018,inst_10906,inst_10849,inst_11023,inst_10840,inst_10938,inst_10848,inst_10856,inst_10827,inst_10818,inst_11335,inst_10843,inst_11326,inst_11021,inst_10934,inst_11351,inst_11306,inst_11022,inst_11336,inst_11325,inst_11339,inst_10826,inst_11334,inst_11312,inst_10933,inst_10876,inst_11324,inst_10817,inst_11327,inst_10825,inst_11310,inst_10824,inst_11308,inst_10821,inst_10859,inst_10935,inst_11311,inst_10811,inst_10869,inst_11017,inst_11321,inst_11324__$1,inst_11325__$1,inst_11326__$1,inst_11327__$1,inst_11328__$1,inst_11329,inst_11330,inst_11331__$1,inst_11332,inst_11333,inst_11334__$1,inst_11335__$1,inst_11336__$1,inst_11337__$1,inst_11338__$1,inst_11339__$1,inst_11340__$1,state_val_11836,c__6459__auto___12267){
return (function (){
var s__11344__$1 = s__11344;
while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__11344__$1);
if(temp__4126__auto____$1){
var s__11344__$2 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__11344__$2)){
var c__4384__auto__ = cljs.core.chunk_first.call(null,s__11344__$2);
var size__4385__auto__ = cljs.core.count.call(null,c__4384__auto__);
var b__11346 = cljs.core.chunk_buffer.call(null,size__4385__auto__);
if((function (){var i__11345 = (0);
while(true){
if((i__11345 < size__4385__auto__)){
var dy = cljs.core._nth.call(null,c__4384__auto__,i__11345);
cljs.core.chunk_append.call(null,b__11346,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(dx + player_cell_x),(dy + player_cell_y)], null));

var G__12348 = (i__11345 + (1));
i__11345 = G__12348;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11346),iter__11343.call(null,cljs.core.chunk_rest.call(null,s__11344__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11346),null);
}
} else {
var dy = cljs.core.first.call(null,s__11344__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(dx + player_cell_x),(dy + player_cell_y)], null),iter__11343.call(null,cljs.core.rest.call(null,s__11344__$2)));
}
} else {
return null;
}
break;
}
});})(s__11342__$1,dx,xs__4624__auto__,temp__4126__auto__,add_cell_BANG_,depth_compare,x,player_stars_text,player_standing_texs,cells,player_shadow,player_cell,close_QMARK_,sprite_count,player_pos,calc_theta,obstacle_types,polar_object_coords,trees,player_hit,old_sprite_count,y,player_standing_sway,player_cell_y,player_cell_x,vec__11323,game_sprites,loader,player_walking_texs,rhx,rhy,frame_num,shadow_tex,_,tex,speed,hit_sfx,lobster_big,game_map,star_tex,pos,remove_cell_BANG_,vec__11322,theta,tufts,game_space,pickup_textures,perlin_channel,title_text,vx,floor_objects,pickup_sfx,tilemap,vy,make_pickup,varela,hy,wait,hx,player,player_stars_icon,inst_10828,inst_10862,inst_11307,inst_11328,inst_11337,inst_11331,inst_10853,inst_10879,inst_10850,inst_10830,inst_11309,inst_10812,inst_11010,inst_10829,inst_11340,inst_11338,inst_11018,inst_10906,inst_10849,inst_11023,inst_10840,inst_10938,inst_10848,inst_10856,inst_10827,inst_10818,inst_11335,inst_10843,inst_11326,inst_11021,inst_10934,inst_11351,inst_11306,inst_11022,inst_11336,inst_11325,inst_11339,inst_10826,inst_11334,inst_11312,inst_10933,inst_10876,inst_11324,inst_10817,inst_11327,inst_10825,inst_11310,inst_10824,inst_11308,inst_10821,inst_10859,inst_10935,inst_11311,inst_10811,inst_10869,inst_11017,inst_11321,inst_11324__$1,inst_11325__$1,inst_11326__$1,inst_11327__$1,inst_11328__$1,inst_11329,inst_11330,inst_11331__$1,inst_11332,inst_11333,inst_11334__$1,inst_11335__$1,inst_11336__$1,inst_11337__$1,inst_11338__$1,inst_11339__$1,inst_11340__$1,state_val_11836,c__6459__auto___12267))
,null,null));
});})(s__11342__$1,dx,xs__4624__auto__,temp__4126__auto__,add_cell_BANG_,depth_compare,x,player_stars_text,player_standing_texs,cells,player_shadow,player_cell,close_QMARK_,sprite_count,player_pos,calc_theta,obstacle_types,polar_object_coords,trees,player_hit,old_sprite_count,y,player_standing_sway,player_cell_y,player_cell_x,vec__11323,game_sprites,loader,player_walking_texs,rhx,rhy,frame_num,shadow_tex,_,tex,speed,hit_sfx,lobster_big,game_map,star_tex,pos,remove_cell_BANG_,vec__11322,theta,tufts,game_space,pickup_textures,perlin_channel,title_text,vx,floor_objects,pickup_sfx,tilemap,vy,make_pickup,varela,hy,wait,hx,player,player_stars_icon,inst_10828,inst_10862,inst_11307,inst_11328,inst_11337,inst_11331,inst_10853,inst_10879,inst_10850,inst_10830,inst_11309,inst_10812,inst_11010,inst_10829,inst_11340,inst_11338,inst_11018,inst_10906,inst_10849,inst_11023,inst_10840,inst_10938,inst_10848,inst_10856,inst_10827,inst_10818,inst_11335,inst_10843,inst_11326,inst_11021,inst_10934,inst_11351,inst_11306,inst_11022,inst_11336,inst_11325,inst_11339,inst_10826,inst_11334,inst_11312,inst_10933,inst_10876,inst_11324,inst_10817,inst_11327,inst_10825,inst_11310,inst_10824,inst_11308,inst_10821,inst_10859,inst_10935,inst_11311,inst_10811,inst_10869,inst_11017,inst_11321,inst_11324__$1,inst_11325__$1,inst_11326__$1,inst_11327__$1,inst_11328__$1,inst_11329,inst_11330,inst_11331__$1,inst_11332,inst_11333,inst_11334__$1,inst_11335__$1,inst_11336__$1,inst_11337__$1,inst_11338__$1,inst_11339__$1,inst_11340__$1,state_val_11836,c__6459__auto___12267))
;
var fs__4383__auto__ = cljs.core.seq.call(null,iterys__4382__auto__.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-2),(-1),(0),(1),(2)], null)));
if(fs__4383__auto__){
return cljs.core.concat.call(null,fs__4383__auto__,iter__11341.call(null,cljs.core.rest.call(null,s__11342__$1)));
} else {
var G__12349 = cljs.core.rest.call(null,s__11342__$1);
s__11342__$1 = G__12349;
continue;
}
} else {
return null;
}
break;
}
});})(add_cell_BANG_,depth_compare,x,player_stars_text,player_standing_texs,cells,player_shadow,player_cell,close_QMARK_,sprite_count,player_pos,calc_theta,obstacle_types,polar_object_coords,trees,player_hit,old_sprite_count,y,player_standing_sway,player_cell_y,player_cell_x,vec__11323,game_sprites,loader,player_walking_texs,rhx,rhy,frame_num,shadow_tex,_,tex,speed,hit_sfx,lobster_big,game_map,star_tex,pos,remove_cell_BANG_,vec__11322,theta,tufts,game_space,pickup_textures,perlin_channel,title_text,vx,floor_objects,pickup_sfx,tilemap,vy,make_pickup,varela,hy,wait,hx,player,player_stars_icon,inst_10828,inst_10862,inst_11307,inst_11328,inst_11337,inst_11331,inst_10853,inst_10879,inst_10850,inst_10830,inst_11309,inst_10812,inst_11010,inst_10829,inst_11340,inst_11338,inst_11018,inst_10906,inst_10849,inst_11023,inst_10840,inst_10938,inst_10848,inst_10856,inst_10827,inst_10818,inst_11335,inst_10843,inst_11326,inst_11021,inst_10934,inst_11351,inst_11306,inst_11022,inst_11336,inst_11325,inst_11339,inst_10826,inst_11334,inst_11312,inst_10933,inst_10876,inst_11324,inst_10817,inst_11327,inst_10825,inst_11310,inst_10824,inst_11308,inst_10821,inst_10859,inst_10935,inst_11311,inst_10811,inst_10869,inst_11017,inst_11321,inst_11324__$1,inst_11325__$1,inst_11326__$1,inst_11327__$1,inst_11328__$1,inst_11329,inst_11330,inst_11331__$1,inst_11332,inst_11333,inst_11334__$1,inst_11335__$1,inst_11336__$1,inst_11337__$1,inst_11338__$1,inst_11339__$1,inst_11340__$1,state_val_11836,c__6459__auto___12267))
,null,null));
});
;})(add_cell_BANG_,depth_compare,x,player_stars_text,player_standing_texs,cells,player_shadow,player_cell,close_QMARK_,sprite_count,player_pos,calc_theta,obstacle_types,polar_object_coords,trees,player_hit,old_sprite_count,y,player_standing_sway,player_cell_y,player_cell_x,vec__11323,game_sprites,loader,player_walking_texs,rhx,rhy,frame_num,shadow_tex,_,tex,speed,hit_sfx,lobster_big,game_map,star_tex,pos,remove_cell_BANG_,vec__11322,theta,tufts,game_space,pickup_textures,perlin_channel,title_text,vx,floor_objects,pickup_sfx,tilemap,vy,make_pickup,varela,hy,wait,hx,player,player_stars_icon,inst_10828,inst_10862,inst_11307,inst_11328,inst_11337,inst_11331,inst_10853,inst_10879,inst_10850,inst_10830,inst_11309,inst_10812,inst_11010,inst_10829,inst_11340,inst_11338,inst_11018,inst_10906,inst_10849,inst_11023,inst_10840,inst_10938,inst_10848,inst_10856,inst_10827,inst_10818,inst_11335,inst_10843,inst_11326,inst_11021,inst_10934,inst_11351,inst_11306,inst_11022,inst_11336,inst_11325,inst_11339,inst_10826,inst_11334,inst_11312,inst_10933,inst_10876,inst_11324,inst_10817,inst_11327,inst_10825,inst_11310,inst_10824,inst_11308,inst_10821,inst_10859,inst_10935,inst_11311,inst_10811,inst_10869,inst_11017,inst_11321,inst_11324__$1,inst_11325__$1,inst_11326__$1,inst_11327__$1,inst_11328__$1,inst_11329,inst_11330,inst_11331__$1,inst_11332,inst_11333,inst_11334__$1,inst_11335__$1,inst_11336__$1,inst_11337__$1,inst_11338__$1,inst_11339__$1,inst_11340__$1,state_val_11836,c__6459__auto___12267))
})();
var inst_11348 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_11349 = [(-2),(-1),(0),(1),(2)];
var inst_11350 = (new cljs.core.PersistentVector(null,5,(5),inst_11348,inst_11349,null));
var inst_11351__$1 = inst_11347.call(null,inst_11350);
var inst_11352 = (function (){var add_cell_BANG_ = inst_11022;
var depth_compare = inst_10934;
var x = inst_11324__$1;
var player_stars_text = inst_10853;
var player_standing_texs = inst_10840;
var cells = inst_11310;
var player_shadow = inst_10830;
var player_cell = inst_11338__$1;
var close_QMARK_ = inst_10938;
var sprite_count = inst_11311;
var player_pos = inst_11021;
var calc_theta = inst_11326__$1;
var obstacle_types = inst_10862;
var polar_object_coords = inst_10935;
var trees = inst_10869;
var player_hit = inst_11312;
var old_sprite_count = inst_11337__$1;
var y = inst_11325__$1;
var player_standing_sway = inst_10843;
var player_cell_y = inst_11340__$1;
var player_cell_x = inst_11339__$1;
var vec__11323 = inst_11338__$1;
var game_sprites = inst_11017;
var loader = inst_10811;
var player_walking_texs = inst_10848;
var player_and_surrounds = inst_11351__$1;
var rhx = inst_11331__$1;
var rhy = inst_11334__$1;
var frame_num = inst_11306;
var shadow_tex = inst_10829;
var _ = inst_10825;
var tex = inst_10827;
var speed = inst_11308;
var hit_sfx = inst_10933;
var lobster_big = inst_10817;
var game_map = inst_11010;
var star_tex = inst_10849;
var pos = inst_11307;
var remove_cell_BANG_ = inst_11023;
var vec__11322 = inst_11307;
var theta = inst_11309;
var tufts = inst_10876;
var game_space = inst_11018;
var pickup_textures = inst_10856;
var perlin_channel = inst_10812;
var title_text = inst_10826;
var vx = inst_11335__$1;
var floor_objects = inst_10859;
var pickup_sfx = inst_10906;
var tilemap = inst_10824;
var vy = inst_11336__$1;
var make_pickup = inst_10879;
var varela = inst_10818;
var hy = inst_11328__$1;
var wait = inst_10821;
var hx = inst_11327__$1;
var player = inst_10828;
var player_stars_icon = inst_10850;
return ((function (add_cell_BANG_,depth_compare,x,player_stars_text,player_standing_texs,cells,player_shadow,player_cell,close_QMARK_,sprite_count,player_pos,calc_theta,obstacle_types,polar_object_coords,trees,player_hit,old_sprite_count,y,player_standing_sway,player_cell_y,player_cell_x,vec__11323,game_sprites,loader,player_walking_texs,player_and_surrounds,rhx,rhy,frame_num,shadow_tex,_,tex,speed,hit_sfx,lobster_big,game_map,star_tex,pos,remove_cell_BANG_,vec__11322,theta,tufts,game_space,pickup_textures,perlin_channel,title_text,vx,floor_objects,pickup_sfx,tilemap,vy,make_pickup,varela,hy,wait,hx,player,player_stars_icon,inst_10828,inst_10862,inst_11307,inst_11328,inst_11337,inst_11331,inst_10853,inst_10879,inst_10850,inst_10830,inst_11309,inst_10812,inst_11010,inst_10829,inst_11340,inst_11338,inst_11018,inst_10906,inst_10849,inst_11023,inst_10840,inst_10938,inst_10848,inst_10856,inst_10827,inst_10818,inst_11335,inst_10843,inst_11326,inst_11021,inst_10934,inst_11351,inst_11306,inst_11022,inst_11336,inst_11325,inst_11339,inst_10826,inst_11334,inst_11312,inst_10933,inst_10876,inst_11324,inst_10817,inst_11327,inst_10825,inst_11310,inst_10824,inst_11308,inst_10821,inst_10859,inst_10935,inst_11311,inst_10811,inst_10869,inst_11017,inst_11321,inst_11324__$1,inst_11325__$1,inst_11326__$1,inst_11327__$1,inst_11328__$1,inst_11329,inst_11330,inst_11331__$1,inst_11332,inst_11333,inst_11334__$1,inst_11335__$1,inst_11336__$1,inst_11337__$1,inst_11338__$1,inst_11339__$1,inst_11340__$1,inst_11347,inst_11348,inst_11349,inst_11350,inst_11351__$1,state_val_11836,c__6459__auto___12267){
return (function (test_cell,cells__$1){
if(cljs.core.not.call(null,cljs.core.some.call(null,((function (add_cell_BANG_,depth_compare,x,player_stars_text,player_standing_texs,cells,player_shadow,player_cell,close_QMARK_,sprite_count,player_pos,calc_theta,obstacle_types,polar_object_coords,trees,player_hit,old_sprite_count,y,player_standing_sway,player_cell_y,player_cell_x,vec__11323,game_sprites,loader,player_walking_texs,player_and_surrounds,rhx,rhy,frame_num,shadow_tex,_,tex,speed,hit_sfx,lobster_big,game_map,star_tex,pos,remove_cell_BANG_,vec__11322,theta,tufts,game_space,pickup_textures,perlin_channel,title_text,vx,floor_objects,pickup_sfx,tilemap,vy,make_pickup,varela,hy,wait,hx,player,player_stars_icon,inst_10828,inst_10862,inst_11307,inst_11328,inst_11337,inst_11331,inst_10853,inst_10879,inst_10850,inst_10830,inst_11309,inst_10812,inst_11010,inst_10829,inst_11340,inst_11338,inst_11018,inst_10906,inst_10849,inst_11023,inst_10840,inst_10938,inst_10848,inst_10856,inst_10827,inst_10818,inst_11335,inst_10843,inst_11326,inst_11021,inst_10934,inst_11351,inst_11306,inst_11022,inst_11336,inst_11325,inst_11339,inst_10826,inst_11334,inst_11312,inst_10933,inst_10876,inst_11324,inst_10817,inst_11327,inst_10825,inst_11310,inst_10824,inst_11308,inst_10821,inst_10859,inst_10935,inst_11311,inst_10811,inst_10869,inst_11017,inst_11321,inst_11324__$1,inst_11325__$1,inst_11326__$1,inst_11327__$1,inst_11328__$1,inst_11329,inst_11330,inst_11331__$1,inst_11332,inst_11333,inst_11334__$1,inst_11335__$1,inst_11336__$1,inst_11337__$1,inst_11338__$1,inst_11339__$1,inst_11340__$1,inst_11347,inst_11348,inst_11349,inst_11350,inst_11351__$1,state_val_11836,c__6459__auto___12267){
return (function (p1__10780_SHARP_){
return cljs.core._EQ_.call(null,p1__10780_SHARP_,test_cell);
});})(add_cell_BANG_,depth_compare,x,player_stars_text,player_standing_texs,cells,player_shadow,player_cell,close_QMARK_,sprite_count,player_pos,calc_theta,obstacle_types,polar_object_coords,trees,player_hit,old_sprite_count,y,player_standing_sway,player_cell_y,player_cell_x,vec__11323,game_sprites,loader,player_walking_texs,player_and_surrounds,rhx,rhy,frame_num,shadow_tex,_,tex,speed,hit_sfx,lobster_big,game_map,star_tex,pos,remove_cell_BANG_,vec__11322,theta,tufts,game_space,pickup_textures,perlin_channel,title_text,vx,floor_objects,pickup_sfx,tilemap,vy,make_pickup,varela,hy,wait,hx,player,player_stars_icon,inst_10828,inst_10862,inst_11307,inst_11328,inst_11337,inst_11331,inst_10853,inst_10879,inst_10850,inst_10830,inst_11309,inst_10812,inst_11010,inst_10829,inst_11340,inst_11338,inst_11018,inst_10906,inst_10849,inst_11023,inst_10840,inst_10938,inst_10848,inst_10856,inst_10827,inst_10818,inst_11335,inst_10843,inst_11326,inst_11021,inst_10934,inst_11351,inst_11306,inst_11022,inst_11336,inst_11325,inst_11339,inst_10826,inst_11334,inst_11312,inst_10933,inst_10876,inst_11324,inst_10817,inst_11327,inst_10825,inst_11310,inst_10824,inst_11308,inst_10821,inst_10859,inst_10935,inst_11311,inst_10811,inst_10869,inst_11017,inst_11321,inst_11324__$1,inst_11325__$1,inst_11326__$1,inst_11327__$1,inst_11328__$1,inst_11329,inst_11330,inst_11331__$1,inst_11332,inst_11333,inst_11334__$1,inst_11335__$1,inst_11336__$1,inst_11337__$1,inst_11338__$1,inst_11339__$1,inst_11340__$1,inst_11347,inst_11348,inst_11349,inst_11350,inst_11351__$1,state_val_11836,c__6459__auto___12267))
,cells__$1))){
add_cell_BANG_.call(null,test_cell);

return cljs.core.conj.call(null,cells__$1,test_cell);
} else {
return cells__$1;
}
});
;})(add_cell_BANG_,depth_compare,x,player_stars_text,player_standing_texs,cells,player_shadow,player_cell,close_QMARK_,sprite_count,player_pos,calc_theta,obstacle_types,polar_object_coords,trees,player_hit,old_sprite_count,y,player_standing_sway,player_cell_y,player_cell_x,vec__11323,game_sprites,loader,player_walking_texs,player_and_surrounds,rhx,rhy,frame_num,shadow_tex,_,tex,speed,hit_sfx,lobster_big,game_map,star_tex,pos,remove_cell_BANG_,vec__11322,theta,tufts,game_space,pickup_textures,perlin_channel,title_text,vx,floor_objects,pickup_sfx,tilemap,vy,make_pickup,varela,hy,wait,hx,player,player_stars_icon,inst_10828,inst_10862,inst_11307,inst_11328,inst_11337,inst_11331,inst_10853,inst_10879,inst_10850,inst_10830,inst_11309,inst_10812,inst_11010,inst_10829,inst_11340,inst_11338,inst_11018,inst_10906,inst_10849,inst_11023,inst_10840,inst_10938,inst_10848,inst_10856,inst_10827,inst_10818,inst_11335,inst_10843,inst_11326,inst_11021,inst_10934,inst_11351,inst_11306,inst_11022,inst_11336,inst_11325,inst_11339,inst_10826,inst_11334,inst_11312,inst_10933,inst_10876,inst_11324,inst_10817,inst_11327,inst_10825,inst_11310,inst_10824,inst_11308,inst_10821,inst_10859,inst_10935,inst_11311,inst_10811,inst_10869,inst_11017,inst_11321,inst_11324__$1,inst_11325__$1,inst_11326__$1,inst_11327__$1,inst_11328__$1,inst_11329,inst_11330,inst_11331__$1,inst_11332,inst_11333,inst_11334__$1,inst_11335__$1,inst_11336__$1,inst_11337__$1,inst_11338__$1,inst_11339__$1,inst_11340__$1,inst_11347,inst_11348,inst_11349,inst_11350,inst_11351__$1,state_val_11836,c__6459__auto___12267))
})();
var inst_11356 = cljs.core.nth.call(null,inst_11351__$1,(0),null);
var inst_11357 = cljs.core.nthnext.call(null,inst_11351__$1,(1));
var inst_11358 = inst_11310;
var inst_11359 = inst_11351__$1;
var state_11835__$1 = (function (){var statearr_11947 = state_11835;
(statearr_11947[(45)] = inst_11352);

(statearr_11947[(46)] = inst_11328__$1);

(statearr_11947[(47)] = inst_11337__$1);

(statearr_11947[(32)] = inst_11331__$1);

(statearr_11947[(121)] = inst_11359);

(statearr_11947[(55)] = inst_11340__$1);

(statearr_11947[(56)] = inst_11338__$1);

(statearr_11947[(122)] = inst_11358);

(statearr_11947[(65)] = inst_11335__$1);

(statearr_11947[(67)] = inst_11326__$1);

(statearr_11947[(123)] = inst_11357);

(statearr_11947[(75)] = inst_11351__$1);

(statearr_11947[(78)] = inst_11336__$1);

(statearr_11947[(33)] = inst_11325__$1);

(statearr_11947[(124)] = inst_11356);

(statearr_11947[(79)] = inst_11339__$1);

(statearr_11947[(35)] = inst_11334__$1);

(statearr_11947[(125)] = inst_11321);

(statearr_11947[(36)] = inst_11324__$1);

(statearr_11947[(83)] = inst_11327__$1);

return statearr_11947;
})();
var statearr_11948_12350 = state_11835__$1;
(statearr_11948_12350[(2)] = null);

(statearr_11948_12350[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11836 === (90))){
var inst_11018 = (state_11835[(21)]);
var inst_11599 = (state_11835[(20)]);
var inst_11608 = cljs.core.first.call(null,inst_11599);
var inst_11613 = inst_11018.call(null,inst_11608);
var inst_11614 = cljs.core.seq.call(null,inst_11613);
var inst_11615 = inst_11614;
var inst_11616 = null;
var inst_11617 = (0);
var inst_11618 = (0);
var state_11835__$1 = (function (){var statearr_11949 = state_11835;
(statearr_11949[(38)] = inst_11617);

(statearr_11949[(39)] = inst_11616);

(statearr_11949[(41)] = inst_11615);

(statearr_11949[(42)] = inst_11618);

return statearr_11949;
})();
var statearr_11950_12351 = state_11835__$1;
(statearr_11950_12351[(2)] = null);

(statearr_11950_12351[(1)] = (92));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11836 === (109))){
var state_11835__$1 = state_11835;
var statearr_11951_12352 = state_11835__$1;
(statearr_11951_12352[(2)] = null);

(statearr_11951_12352[(1)] = (110));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11836 === (36))){
var inst_11442 = (state_11835[(111)]);
var inst_11409 = (state_11835[(115)]);
var inst_11442__$1 = cljs.core.seq.call(null,inst_11409);
var state_11835__$1 = (function (){var statearr_11952 = state_11835;
(statearr_11952[(111)] = inst_11442__$1);

return statearr_11952;
})();
if(inst_11442__$1){
var statearr_11953_12353 = state_11835__$1;
(statearr_11953_12353[(1)] = (44));

} else {
var statearr_11954_12354 = state_11835__$1;
(statearr_11954_12354[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11836 === (41))){
var inst_11424 = alert("BABY PIKCUP");
var state_11835__$1 = state_11835;
var statearr_11955_12355 = state_11835__$1;
(statearr_11955_12355[(2)] = inst_11424);

(statearr_11955_12355[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11836 === (118))){
var inst_11765 = farn.events.is_pressed_QMARK_.call(null,new cljs.core.Keyword(null,"up","up",-269712113));
var state_11835__$1 = state_11835;
var statearr_11956_12356 = state_11835__$1;
(statearr_11956_12356[(2)] = inst_11765);

(statearr_11956_12356[(1)] = (119));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11836 === (89))){
var inst_11599 = (state_11835[(20)]);
var inst_11603 = cljs.core.chunk_first.call(null,inst_11599);
var inst_11604 = cljs.core.chunk_rest.call(null,inst_11599);
var inst_11605 = cljs.core.count.call(null,inst_11603);
var inst_11532 = inst_11604;
var inst_11533 = inst_11603;
var inst_11534 = inst_11605;
var inst_11535 = (0);
var state_11835__$1 = (function (){var statearr_11957 = state_11835;
(statearr_11957[(13)] = inst_11535);

(statearr_11957[(126)] = inst_11532);

(statearr_11957[(22)] = inst_11533);

(statearr_11957[(14)] = inst_11534);

return statearr_11957;
})();
var statearr_11958_12357 = state_11835__$1;
(statearr_11958_12357[(2)] = null);

(statearr_11958_12357[(1)] = (70));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11836 === (100))){
var inst_11635 = (state_11835[(34)]);
var inst_11639 = cljs.core.chunk_first.call(null,inst_11635);
var inst_11640 = cljs.core.chunk_rest.call(null,inst_11635);
var inst_11641 = cljs.core.count.call(null,inst_11639);
var inst_11615 = inst_11640;
var inst_11616 = inst_11639;
var inst_11617 = inst_11641;
var inst_11618 = (0);
var state_11835__$1 = (function (){var statearr_11959 = state_11835;
(statearr_11959[(38)] = inst_11617);

(statearr_11959[(39)] = inst_11616);

(statearr_11959[(41)] = inst_11615);

(statearr_11959[(42)] = inst_11618);

return statearr_11959;
})();
var statearr_11960_12358 = state_11835__$1;
(statearr_11960_12358[(2)] = null);

(statearr_11960_12358[(1)] = (92));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11836 === (131))){
var state_11835__$1 = state_11835;
var statearr_11961_12359 = state_11835__$1;
(statearr_11961_12359[(2)] = null);

(statearr_11961_12359[(1)] = (132));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11836 === (122))){
var inst_10934 = (state_11835[(74)]);
var inst_11775 = (state_11835[(2)]);
var inst_11776 = farn.core.main_stage.children;
var inst_11777 = inst_11776.sort(inst_10934);
var inst_11778 = farn.events.next_frame.call(null);
var state_11835__$1 = (function (){var statearr_11962 = state_11835;
(statearr_11962[(127)] = inst_11775);

(statearr_11962[(128)] = inst_11777);

return statearr_11962;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11835__$1,(123),inst_11778);
} else {
if((state_val_11836 === (43))){
var inst_11435 = (state_11835[(2)]);
var state_11835__$1 = state_11835;
var statearr_11963_12360 = state_11835__$1;
(statearr_11963_12360[(2)] = inst_11435);

(statearr_11963_12360[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11836 === (61))){
var inst_10828 = (state_11835[(43)]);
var inst_11307 = (state_11835[(17)]);
var inst_10830 = (state_11835[(52)]);
var inst_11310 = (state_11835[(85)]);
var inst_11524 = (state_11835[(2)]);
var inst_11525 = farn.sprite.set_pos_BANG_.call(null,inst_10828,inst_11307);
var inst_11526 = farn.sprite.set_pos_BANG_.call(null,inst_10830,inst_11307);
var inst_11531 = cljs.core.seq.call(null,inst_11310);
var inst_11532 = inst_11531;
var inst_11533 = null;
var inst_11534 = (0);
var inst_11535 = (0);
var state_11835__$1 = (function (){var statearr_11964 = state_11835;
(statearr_11964[(13)] = inst_11535);

(statearr_11964[(129)] = inst_11525);

(statearr_11964[(126)] = inst_11532);

(statearr_11964[(22)] = inst_11533);

(statearr_11964[(130)] = inst_11526);

(statearr_11964[(14)] = inst_11534);

(statearr_11964[(131)] = inst_11524);

return statearr_11964;
})();
var statearr_11965_12361 = state_11835__$1;
(statearr_11965_12361[(2)] = null);

(statearr_11965_12361[(1)] = (70));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11836 === (29))){
var inst_11402 = (state_11835[(2)]);
var inst_11407 = cljs.core.deref.call(null,farn.core.pickup_store);
var inst_11408 = cljs.core.seq.call(null,inst_11407);
var inst_11409 = inst_11408;
var inst_11410 = null;
var inst_11411 = (0);
var inst_11412 = (0);
var state_11835__$1 = (function (){var statearr_11966 = state_11835;
(statearr_11966[(132)] = inst_11402);

(statearr_11966[(112)] = inst_11412);

(statearr_11966[(113)] = inst_11411);

(statearr_11966[(114)] = inst_11410);

(statearr_11966[(115)] = inst_11409);

return statearr_11966;
})();
var statearr_11967_12362 = state_11835__$1;
(statearr_11967_12362[(2)] = null);

(statearr_11967_12362[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11836 === (44))){
var inst_11442 = (state_11835[(111)]);
var inst_11444 = cljs.core.chunked_seq_QMARK_.call(null,inst_11442);
var state_11835__$1 = state_11835;
if(inst_11444){
var statearr_11968_12363 = state_11835__$1;
(statearr_11968_12363[(1)] = (47));

} else {
var statearr_11969_12364 = state_11835__$1;
(statearr_11969_12364[(1)] = (48));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11836 === (93))){
var inst_11599 = (state_11835[(20)]);
var inst_11663 = (state_11835[(2)]);
var inst_11664 = cljs.core.next.call(null,inst_11599);
var inst_11532 = inst_11664;
var inst_11533 = null;
var inst_11534 = (0);
var inst_11535 = (0);
var state_11835__$1 = (function (){var statearr_11970 = state_11835;
(statearr_11970[(13)] = inst_11535);

(statearr_11970[(126)] = inst_11532);

(statearr_11970[(22)] = inst_11533);

(statearr_11970[(14)] = inst_11534);

(statearr_11970[(133)] = inst_11663);

return statearr_11970;
})();
var statearr_11971_12365 = state_11835__$1;
(statearr_11971_12365[(2)] = null);

(statearr_11971_12365[(1)] = (70));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11836 === (6))){
var inst_10906 = (state_11835[(2)]);
var inst_10910 = cljs.core.PersistentVector.EMPTY;
var inst_10911 = cljs.core.range.call(null,(1),(4));
var inst_10912 = cljs.core.nth.call(null,inst_10911,(0),null);
var inst_10913 = cljs.core.nthnext.call(null,inst_10911,(1));
var inst_10914 = inst_10910;
var inst_10915 = inst_10911;
var state_11835__$1 = (function (){var statearr_11972 = state_11835;
(statearr_11972[(57)] = inst_10906);

(statearr_11972[(134)] = inst_10914);

(statearr_11972[(135)] = inst_10915);

(statearr_11972[(136)] = inst_10913);

(statearr_11972[(137)] = inst_10912);

return statearr_11972;
})();
var statearr_11973_12366 = state_11835__$1;
(statearr_11973_12366[(2)] = null);

(statearr_11973_12366[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11836 === (111))){
var inst_11710 = (state_11835[(98)]);
var inst_11714 = cljs.core.chunk_first.call(null,inst_11710);
var inst_11715 = cljs.core.chunk_rest.call(null,inst_11710);
var inst_11716 = cljs.core.count.call(null,inst_11714);
var inst_11681 = inst_11715;
var inst_11682 = inst_11714;
var inst_11683 = inst_11716;
var inst_11684 = (0);
var state_11835__$1 = (function (){var statearr_11974 = state_11835;
(statearr_11974[(99)] = inst_11681);

(statearr_11974[(138)] = inst_11683);

(statearr_11974[(139)] = inst_11684);

(statearr_11974[(140)] = inst_11682);

return statearr_11974;
})();
var statearr_11975_12367 = state_11835__$1;
(statearr_11975_12367[(2)] = null);

(statearr_11975_12367[(1)] = (103));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11836 === (28))){
var inst_11390 = (state_11835[(141)]);
var inst_11386 = (state_11835[(73)]);
var inst_11390__$1 = cljs.core.nth.call(null,inst_11386,(0),null);
var inst_11391 = cljs.core.nthnext.call(null,inst_11386,(1));
var inst_11392 = (inst_11390__$1 == null);
var inst_11393 = cljs.core.not.call(null,inst_11392);
var state_11835__$1 = (function (){var statearr_11976 = state_11835;
(statearr_11976[(141)] = inst_11390__$1);

(statearr_11976[(142)] = inst_11391);

return statearr_11976;
})();
if(inst_11393){
var statearr_11977_12368 = state_11835__$1;
(statearr_11977_12368[(1)] = (30));

} else {
var statearr_11978_12369 = state_11835__$1;
(statearr_11978_12369[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11836 === (134))){
var inst_11308 = (state_11835[(87)]);
var inst_11808 = (inst_11308 * farn.core.player_drag);
var inst_11809 = ((inst_11808 > (0)) ? inst_11808 : (0));
var state_11835__$1 = state_11835;
var statearr_11979_12370 = state_11835__$1;
(statearr_11979_12370[(2)] = inst_11809);

(statearr_11979_12370[(1)] = (135));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11836 === (64))){
var inst_11308 = (state_11835[(87)]);
var inst_11518 = (state_11835[(2)]);
var inst_11519 = cljs.core.reset_BANG_.call(null,farn.core.player_stars,(0));
var inst_11520 = (inst_11308 / farn.core.player_max_speed);
var inst_11521 = ((30) * inst_11520);
var state_11835__$1 = (function (){var statearr_11980 = state_11835;
(statearr_11980[(143)] = inst_11519);

(statearr_11980[(144)] = inst_11518);

return statearr_11980;
})();
var statearr_11981_12371 = state_11835__$1;
(statearr_11981_12371[(2)] = inst_11521);

(statearr_11981_12371[(1)] = (61));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11836 === (103))){
var inst_11683 = (state_11835[(138)]);
var inst_11684 = (state_11835[(139)]);
var inst_11686 = (inst_11684 < inst_11683);
var inst_11687 = inst_11686;
var state_11835__$1 = state_11835;
if(cljs.core.truth_(inst_11687)){
var statearr_11982_12372 = state_11835__$1;
(statearr_11982_12372[(1)] = (105));

} else {
var statearr_11983_12373 = state_11835__$1;
(statearr_11983_12373[(1)] = (106));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11836 === (51))){
var state_11835__$1 = state_11835;
var statearr_11984_12374 = state_11835__$1;
(statearr_11984_12374[(2)] = null);

(statearr_11984_12374[(1)] = (52));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11836 === (25))){
var inst_11358 = (state_11835[(122)]);
var state_11835__$1 = state_11835;
var statearr_11985_12375 = state_11835__$1;
(statearr_11985_12375[(2)] = inst_11358);

(statearr_11985_12375[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11836 === (34))){
var inst_10828 = (state_11835[(43)]);
var inst_10862 = (state_11835[(44)]);
var inst_11352 = (state_11835[(45)]);
var inst_11307 = (state_11835[(17)]);
var inst_11328 = (state_11835[(46)]);
var inst_11337 = (state_11835[(47)]);
var inst_11331 = (state_11835[(32)]);
var inst_10853 = (state_11835[(48)]);
var inst_11372 = (state_11835[(49)]);
var inst_10879 = (state_11835[(50)]);
var inst_10850 = (state_11835[(51)]);
var inst_10830 = (state_11835[(52)]);
var inst_11309 = (state_11835[(53)]);
var inst_10812 = (state_11835[(29)]);
var inst_11010 = (state_11835[(54)]);
var inst_10829 = (state_11835[(8)]);
var inst_11402 = (state_11835[(132)]);
var inst_11340 = (state_11835[(55)]);
var inst_11338 = (state_11835[(56)]);
var inst_11018 = (state_11835[(21)]);
var inst_10906 = (state_11835[(57)]);
var inst_10849 = (state_11835[(9)]);
var inst_11023 = (state_11835[(58)]);
var inst_10840 = (state_11835[(59)]);
var inst_10938 = (state_11835[(60)]);
var inst_10848 = (state_11835[(61)]);
var inst_10856 = (state_11835[(62)]);
var inst_10827 = (state_11835[(63)]);
var inst_10818 = (state_11835[(64)]);
var inst_11335 = (state_11835[(65)]);
var inst_10843 = (state_11835[(66)]);
var inst_11326 = (state_11835[(67)]);
var inst_11021 = (state_11835[(68)]);
var inst_10934 = (state_11835[(74)]);
var inst_11351 = (state_11835[(75)]);
var inst_11306 = (state_11835[(76)]);
var inst_11022 = (state_11835[(77)]);
var inst_11489 = (state_11835[(145)]);
var inst_11336 = (state_11835[(78)]);
var inst_11325 = (state_11835[(33)]);
var inst_11339 = (state_11835[(79)]);
var inst_10826 = (state_11835[(80)]);
var inst_11334 = (state_11835[(35)]);
var inst_11312 = (state_11835[(27)]);
var inst_10933 = (state_11835[(18)]);
var inst_10876 = (state_11835[(81)]);
var inst_11324 = (state_11835[(36)]);
var inst_10817 = (state_11835[(82)]);
var inst_11327 = (state_11835[(83)]);
var inst_11310 = (state_11835[(85)]);
var inst_10824 = (state_11835[(86)]);
var inst_11308 = (state_11835[(87)]);
var inst_10821 = (state_11835[(88)]);
var inst_11380 = (state_11835[(71)]);
var inst_10859 = (state_11835[(89)]);
var inst_10935 = (state_11835[(37)]);
var inst_11311 = (state_11835[(90)]);
var inst_10811 = (state_11835[(28)]);
var inst_10869 = (state_11835[(91)]);
var inst_11017 = (state_11835[(92)]);
var inst_11483 = (state_11835[(2)]);
var inst_11484 = inst_11018.call(null,inst_11338);
var inst_11485 = (function (){var add_cell_BANG_ = inst_11022;
var depth_compare = inst_10934;
var x = inst_11324;
var player_stars_text = inst_10853;
var player_standing_texs = inst_10840;
var cells = inst_11310;
var player_shadow = inst_10830;
var player_cell = inst_11338;
var close_QMARK_ = inst_10938;
var sprite_count = inst_11311;
var player_pos = inst_11021;
var calc_theta = inst_11326;
var obstacle_types = inst_10862;
var post_remove_cells = inst_11402;
var polar_object_coords = inst_10935;
var trees = inst_10869;
var player_hit = inst_11312;
var old_sprite_count = inst_11337;
var y = inst_11325;
var player_standing_sway = inst_10843;
var player_cell_y = inst_11340;
var player_cell_x = inst_11339;
var vec__11323 = inst_11338;
var game_sprites = inst_11017;
var loader = inst_10811;
var player_walking_texs = inst_10848;
var player_and_surrounds = inst_11351;
var check_cell = inst_11484;
var rhx = inst_11331;
var rhy = inst_11334;
var frame_num = inst_11306;
var shadow_tex = inst_10829;
var process_add_cell = inst_11352;
var _ = inst_11483;
var tex = inst_10827;
var speed = inst_11308;
var cull_cells = inst_11380;
var hit_sfx = inst_10933;
var lobster_big = inst_10817;
var game_map = inst_11010;
var star_tex = inst_10849;
var pos = inst_11307;
var remove_cell_BANG_ = inst_11023;
var vec__11322 = inst_11307;
var theta = inst_11309;
var tufts = inst_10876;
var game_space = inst_11018;
var pickup_textures = inst_10856;
var perlin_channel = inst_10812;
var title_text = inst_10826;
var vx = inst_11335;
var floor_objects = inst_10859;
var pickup_sfx = inst_10906;
var tilemap = inst_10824;
var vy = inst_11336;
var make_pickup = inst_10879;
var varela = inst_10818;
var new_cells = inst_11372;
var hy = inst_11328;
var wait = inst_10821;
var hx = inst_11327;
var player = inst_10828;
var player_stars_icon = inst_10850;
return ((function (add_cell_BANG_,depth_compare,x,player_stars_text,player_standing_texs,cells,player_shadow,player_cell,close_QMARK_,sprite_count,player_pos,calc_theta,obstacle_types,post_remove_cells,polar_object_coords,trees,player_hit,old_sprite_count,y,player_standing_sway,player_cell_y,player_cell_x,vec__11323,game_sprites,loader,player_walking_texs,player_and_surrounds,check_cell,rhx,rhy,frame_num,shadow_tex,process_add_cell,_,tex,speed,cull_cells,hit_sfx,lobster_big,game_map,star_tex,pos,remove_cell_BANG_,vec__11322,theta,tufts,game_space,pickup_textures,perlin_channel,title_text,vx,floor_objects,pickup_sfx,tilemap,vy,make_pickup,varela,new_cells,hy,wait,hx,player,player_stars_icon,inst_10828,inst_10862,inst_11352,inst_11307,inst_11328,inst_11337,inst_11331,inst_10853,inst_11372,inst_10879,inst_10850,inst_10830,inst_11309,inst_10812,inst_11010,inst_10829,inst_11402,inst_11340,inst_11338,inst_11018,inst_10906,inst_10849,inst_11023,inst_10840,inst_10938,inst_10848,inst_10856,inst_10827,inst_10818,inst_11335,inst_10843,inst_11326,inst_11021,inst_10934,inst_11351,inst_11306,inst_11022,inst_11489,inst_11336,inst_11325,inst_11339,inst_10826,inst_11334,inst_11312,inst_10933,inst_10876,inst_11324,inst_10817,inst_11327,inst_11310,inst_10824,inst_11308,inst_10821,inst_11380,inst_10859,inst_10935,inst_11311,inst_10811,inst_10869,inst_11017,inst_11483,inst_11484,state_val_11836,c__6459__auto___12267){
return (function (obj){
return cljs.core.some.call(null,((function (add_cell_BANG_,depth_compare,x,player_stars_text,player_standing_texs,cells,player_shadow,player_cell,close_QMARK_,sprite_count,player_pos,calc_theta,obstacle_types,post_remove_cells,polar_object_coords,trees,player_hit,old_sprite_count,y,player_standing_sway,player_cell_y,player_cell_x,vec__11323,game_sprites,loader,player_walking_texs,player_and_surrounds,check_cell,rhx,rhy,frame_num,shadow_tex,process_add_cell,_,tex,speed,cull_cells,hit_sfx,lobster_big,game_map,star_tex,pos,remove_cell_BANG_,vec__11322,theta,tufts,game_space,pickup_textures,perlin_channel,title_text,vx,floor_objects,pickup_sfx,tilemap,vy,make_pickup,varela,new_cells,hy,wait,hx,player,player_stars_icon,inst_10828,inst_10862,inst_11352,inst_11307,inst_11328,inst_11337,inst_11331,inst_10853,inst_11372,inst_10879,inst_10850,inst_10830,inst_11309,inst_10812,inst_11010,inst_10829,inst_11402,inst_11340,inst_11338,inst_11018,inst_10906,inst_10849,inst_11023,inst_10840,inst_10938,inst_10848,inst_10856,inst_10827,inst_10818,inst_11335,inst_10843,inst_11326,inst_11021,inst_10934,inst_11351,inst_11306,inst_11022,inst_11489,inst_11336,inst_11325,inst_11339,inst_10826,inst_11334,inst_11312,inst_10933,inst_10876,inst_11324,inst_10817,inst_11327,inst_11310,inst_10824,inst_11308,inst_10821,inst_11380,inst_10859,inst_10935,inst_11311,inst_10811,inst_10869,inst_11017,inst_11483,inst_11484,state_val_11836,c__6459__auto___12267){
return (function (p1__10782_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(obj),p1__10782_SHARP_);
});})(add_cell_BANG_,depth_compare,x,player_stars_text,player_standing_texs,cells,player_shadow,player_cell,close_QMARK_,sprite_count,player_pos,calc_theta,obstacle_types,post_remove_cells,polar_object_coords,trees,player_hit,old_sprite_count,y,player_standing_sway,player_cell_y,player_cell_x,vec__11323,game_sprites,loader,player_walking_texs,player_and_surrounds,check_cell,rhx,rhy,frame_num,shadow_tex,process_add_cell,_,tex,speed,cull_cells,hit_sfx,lobster_big,game_map,star_tex,pos,remove_cell_BANG_,vec__11322,theta,tufts,game_space,pickup_textures,perlin_channel,title_text,vx,floor_objects,pickup_sfx,tilemap,vy,make_pickup,varela,new_cells,hy,wait,hx,player,player_stars_icon,inst_10828,inst_10862,inst_11352,inst_11307,inst_11328,inst_11337,inst_11331,inst_10853,inst_11372,inst_10879,inst_10850,inst_10830,inst_11309,inst_10812,inst_11010,inst_10829,inst_11402,inst_11340,inst_11338,inst_11018,inst_10906,inst_10849,inst_11023,inst_10840,inst_10938,inst_10848,inst_10856,inst_10827,inst_10818,inst_11335,inst_10843,inst_11326,inst_11021,inst_10934,inst_11351,inst_11306,inst_11022,inst_11489,inst_11336,inst_11325,inst_11339,inst_10826,inst_11334,inst_11312,inst_10933,inst_10876,inst_11324,inst_10817,inst_11327,inst_11310,inst_10824,inst_11308,inst_10821,inst_11380,inst_10859,inst_10935,inst_11311,inst_10811,inst_10869,inst_11017,inst_11483,inst_11484,state_val_11836,c__6459__auto___12267))
,obstacle_types);
});
;})(add_cell_BANG_,depth_compare,x,player_stars_text,player_standing_texs,cells,player_shadow,player_cell,close_QMARK_,sprite_count,player_pos,calc_theta,obstacle_types,post_remove_cells,polar_object_coords,trees,player_hit,old_sprite_count,y,player_standing_sway,player_cell_y,player_cell_x,vec__11323,game_sprites,loader,player_walking_texs,player_and_surrounds,check_cell,rhx,rhy,frame_num,shadow_tex,process_add_cell,_,tex,speed,cull_cells,hit_sfx,lobster_big,game_map,star_tex,pos,remove_cell_BANG_,vec__11322,theta,tufts,game_space,pickup_textures,perlin_channel,title_text,vx,floor_objects,pickup_sfx,tilemap,vy,make_pickup,varela,new_cells,hy,wait,hx,player,player_stars_icon,inst_10828,inst_10862,inst_11352,inst_11307,inst_11328,inst_11337,inst_11331,inst_10853,inst_11372,inst_10879,inst_10850,inst_10830,inst_11309,inst_10812,inst_11010,inst_10829,inst_11402,inst_11340,inst_11338,inst_11018,inst_10906,inst_10849,inst_11023,inst_10840,inst_10938,inst_10848,inst_10856,inst_10827,inst_10818,inst_11335,inst_10843,inst_11326,inst_11021,inst_10934,inst_11351,inst_11306,inst_11022,inst_11489,inst_11336,inst_11325,inst_11339,inst_10826,inst_11334,inst_11312,inst_10933,inst_10876,inst_11324,inst_10817,inst_11327,inst_11310,inst_10824,inst_11308,inst_10821,inst_11380,inst_10859,inst_10935,inst_11311,inst_10811,inst_10869,inst_11017,inst_11483,inst_11484,state_val_11836,c__6459__auto___12267))
})();
var inst_11486 = cljs.core.filter.call(null,inst_11485,inst_11484);
var inst_11487 = (function (){var add_cell_BANG_ = inst_11022;
var depth_compare = inst_10934;
var x = inst_11324;
var player_stars_text = inst_10853;
var player_standing_texs = inst_10840;
var cells = inst_11310;
var player_shadow = inst_10830;
var player_cell = inst_11338;
var close_QMARK_ = inst_10938;
var sprite_count = inst_11311;
var player_pos = inst_11021;
var calc_theta = inst_11326;
var obstacle_types = inst_10862;
var post_remove_cells = inst_11402;
var polar_object_coords = inst_10935;
var trees = inst_10869;
var player_hit = inst_11312;
var old_sprite_count = inst_11337;
var y = inst_11325;
var player_standing_sway = inst_10843;
var player_cell_y = inst_11340;
var player_cell_x = inst_11339;
var vec__11323 = inst_11338;
var game_sprites = inst_11017;
var loader = inst_10811;
var player_walking_texs = inst_10848;
var player_and_surrounds = inst_11351;
var check_cell = inst_11484;
var rhx = inst_11331;
var rhy = inst_11334;
var frame_num = inst_11306;
var shadow_tex = inst_10829;
var process_add_cell = inst_11352;
var _ = inst_11483;
var tex = inst_10827;
var speed = inst_11308;
var cull_cells = inst_11380;
var obstacle_QMARK_ = inst_11485;
var hit_sfx = inst_10933;
var lobster_big = inst_10817;
var game_map = inst_11010;
var star_tex = inst_10849;
var pos = inst_11307;
var remove_cell_BANG_ = inst_11023;
var vec__11322 = inst_11307;
var theta = inst_11309;
var tufts = inst_10876;
var game_space = inst_11018;
var pickup_textures = inst_10856;
var hit_things = inst_11486;
var perlin_channel = inst_10812;
var title_text = inst_10826;
var vx = inst_11335;
var floor_objects = inst_10859;
var pickup_sfx = inst_10906;
var tilemap = inst_10824;
var vy = inst_11336;
var make_pickup = inst_10879;
var varela = inst_10818;
var new_cells = inst_11372;
var hy = inst_11328;
var wait = inst_10821;
var hx = inst_11327;
var player = inst_10828;
var player_stars_icon = inst_10850;
return ((function (add_cell_BANG_,depth_compare,x,player_stars_text,player_standing_texs,cells,player_shadow,player_cell,close_QMARK_,sprite_count,player_pos,calc_theta,obstacle_types,post_remove_cells,polar_object_coords,trees,player_hit,old_sprite_count,y,player_standing_sway,player_cell_y,player_cell_x,vec__11323,game_sprites,loader,player_walking_texs,player_and_surrounds,check_cell,rhx,rhy,frame_num,shadow_tex,process_add_cell,_,tex,speed,cull_cells,obstacle_QMARK_,hit_sfx,lobster_big,game_map,star_tex,pos,remove_cell_BANG_,vec__11322,theta,tufts,game_space,pickup_textures,hit_things,perlin_channel,title_text,vx,floor_objects,pickup_sfx,tilemap,vy,make_pickup,varela,new_cells,hy,wait,hx,player,player_stars_icon,inst_10828,inst_10862,inst_11352,inst_11307,inst_11328,inst_11337,inst_11331,inst_10853,inst_11372,inst_10879,inst_10850,inst_10830,inst_11309,inst_10812,inst_11010,inst_10829,inst_11402,inst_11340,inst_11338,inst_11018,inst_10906,inst_10849,inst_11023,inst_10840,inst_10938,inst_10848,inst_10856,inst_10827,inst_10818,inst_11335,inst_10843,inst_11326,inst_11021,inst_10934,inst_11351,inst_11306,inst_11022,inst_11489,inst_11336,inst_11325,inst_11339,inst_10826,inst_11334,inst_11312,inst_10933,inst_10876,inst_11324,inst_10817,inst_11327,inst_11310,inst_10824,inst_11308,inst_10821,inst_11380,inst_10859,inst_10935,inst_11311,inst_10811,inst_10869,inst_11017,inst_11483,inst_11484,inst_11485,inst_11486,state_val_11836,c__6459__auto___12267){
return (function (p1__10783_SHARP_){
return close_QMARK_.call(null,pos,new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(p1__10783_SHARP_),(500));
});
;})(add_cell_BANG_,depth_compare,x,player_stars_text,player_standing_texs,cells,player_shadow,player_cell,close_QMARK_,sprite_count,player_pos,calc_theta,obstacle_types,post_remove_cells,polar_object_coords,trees,player_hit,old_sprite_count,y,player_standing_sway,player_cell_y,player_cell_x,vec__11323,game_sprites,loader,player_walking_texs,player_and_surrounds,check_cell,rhx,rhy,frame_num,shadow_tex,process_add_cell,_,tex,speed,cull_cells,obstacle_QMARK_,hit_sfx,lobster_big,game_map,star_tex,pos,remove_cell_BANG_,vec__11322,theta,tufts,game_space,pickup_textures,hit_things,perlin_channel,title_text,vx,floor_objects,pickup_sfx,tilemap,vy,make_pickup,varela,new_cells,hy,wait,hx,player,player_stars_icon,inst_10828,inst_10862,inst_11352,inst_11307,inst_11328,inst_11337,inst_11331,inst_10853,inst_11372,inst_10879,inst_10850,inst_10830,inst_11309,inst_10812,inst_11010,inst_10829,inst_11402,inst_11340,inst_11338,inst_11018,inst_10906,inst_10849,inst_11023,inst_10840,inst_10938,inst_10848,inst_10856,inst_10827,inst_10818,inst_11335,inst_10843,inst_11326,inst_11021,inst_10934,inst_11351,inst_11306,inst_11022,inst_11489,inst_11336,inst_11325,inst_11339,inst_10826,inst_11334,inst_11312,inst_10933,inst_10876,inst_11324,inst_10817,inst_11327,inst_11310,inst_10824,inst_11308,inst_10821,inst_11380,inst_10859,inst_10935,inst_11311,inst_10811,inst_10869,inst_11017,inst_11483,inst_11484,inst_11485,inst_11486,state_val_11836,c__6459__auto___12267))
})();
var inst_11488 = cljs.core.some.call(null,inst_11487,inst_11486);
var inst_11489__$1 = cljs.core._EQ_.call(null,(0),inst_11312);
var state_11835__$1 = (function (){var statearr_11986 = state_11835;
(statearr_11986[(119)] = inst_11488);

(statearr_11986[(145)] = inst_11489__$1);

return statearr_11986;
})();
if(inst_11489__$1){
var statearr_11987_12376 = state_11835__$1;
(statearr_11987_12376[(1)] = (56));

} else {
var statearr_11988_12377 = state_11835__$1;
(statearr_11988_12377[(1)] = (57));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11836 === (125))){
var inst_11335 = (state_11835[(65)]);
var inst_11336 = (state_11835[(78)]);
var inst_11325 = (state_11835[(33)]);
var inst_11324 = (state_11835[(36)]);
var inst_11790 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_11791 = (inst_11324 - inst_11335);
var inst_11792 = (inst_11325 - inst_11336);
var inst_11793 = [inst_11791,inst_11792];
var inst_11794 = (new cljs.core.PersistentVector(null,2,(5),inst_11790,inst_11793,null));
var state_11835__$1 = state_11835;
var statearr_11989_12378 = state_11835__$1;
(statearr_11989_12378[(2)] = inst_11794);

(statearr_11989_12378[(1)] = (126));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11836 === (17))){
var inst_10828 = (state_11835[(43)]);
var inst_10862 = (state_11835[(44)]);
var inst_10853 = (state_11835[(48)]);
var inst_10879 = (state_11835[(50)]);
var inst_10850 = (state_11835[(51)]);
var inst_10830 = (state_11835[(52)]);
var inst_10812 = (state_11835[(29)]);
var inst_11010 = (state_11835[(54)]);
var inst_10829 = (state_11835[(8)]);
var inst_11018 = (state_11835[(21)]);
var inst_10906 = (state_11835[(57)]);
var inst_10849 = (state_11835[(9)]);
var inst_11023 = (state_11835[(58)]);
var inst_10840 = (state_11835[(59)]);
var inst_10938 = (state_11835[(60)]);
var inst_10848 = (state_11835[(61)]);
var inst_10856 = (state_11835[(62)]);
var inst_10827 = (state_11835[(63)]);
var inst_10818 = (state_11835[(64)]);
var inst_10843 = (state_11835[(66)]);
var inst_11021 = (state_11835[(68)]);
var inst_10934 = (state_11835[(74)]);
var inst_11022 = (state_11835[(77)]);
var inst_10826 = (state_11835[(80)]);
var inst_10933 = (state_11835[(18)]);
var inst_10876 = (state_11835[(81)]);
var inst_10817 = (state_11835[(82)]);
var inst_10825 = (state_11835[(84)]);
var inst_10824 = (state_11835[(86)]);
var inst_10821 = (state_11835[(88)]);
var inst_10859 = (state_11835[(89)]);
var inst_10935 = (state_11835[(37)]);
var inst_10811 = (state_11835[(28)]);
var inst_10869 = (state_11835[(91)]);
var inst_11017 = (state_11835[(92)]);
var inst_11180 = (state_11835[(2)]);
var inst_11181 = farn.utils.log.call(null,"adding player");
var inst_11183 = farn.sprite.set_scale_BANG_.call(null,inst_10828,0.5);
var inst_11184 = farn.core.main_stage.addChild(inst_10828);
var inst_11185 = farn.core.main_stage.addChild(inst_10830);
var inst_11291 = cljs.core.async.chan.call(null,(1));
var inst_11292 = (function (){var add_cell_BANG_ = inst_11022;
var depth_compare = inst_10934;
var player_stars_text = inst_10853;
var player_standing_texs = inst_10840;
var player_shadow = inst_10830;
var close_QMARK_ = inst_10938;
var player_pos = inst_11021;
var obstacle_types = inst_10862;
var polar_object_coords = inst_10935;
var trees = inst_10869;
var player_standing_sway = inst_10843;
var game_sprites = inst_11017;
var loader = inst_10811;
var player_walking_texs = inst_10848;
var shadow_tex = inst_10829;
var _ = inst_10825;
var tex = inst_10827;
var c__6459__auto____$1 = inst_11291;
var hit_sfx = inst_10933;
var lobster_big = inst_10817;
var game_map = inst_11010;
var star_tex = inst_10849;
var remove_cell_BANG_ = inst_11023;
var tufts = inst_10876;
var game_space = inst_11018;
var pickup_textures = inst_10856;
var perlin_channel = inst_10812;
var title_text = inst_10826;
var floor_objects = inst_10859;
var pickup_sfx = inst_10906;
var tilemap = inst_10824;
var make_pickup = inst_10879;
var varela = inst_10818;
var wait = inst_10821;
var player = inst_10828;
var player_stars_icon = inst_10850;
return ((function (add_cell_BANG_,depth_compare,player_stars_text,player_standing_texs,player_shadow,close_QMARK_,player_pos,obstacle_types,polar_object_coords,trees,player_standing_sway,game_sprites,loader,player_walking_texs,shadow_tex,_,tex,c__6459__auto____$1,hit_sfx,lobster_big,game_map,star_tex,remove_cell_BANG_,tufts,game_space,pickup_textures,perlin_channel,title_text,floor_objects,pickup_sfx,tilemap,make_pickup,varela,wait,player,player_stars_icon,inst_10828,inst_10862,inst_10853,inst_10879,inst_10850,inst_10830,inst_10812,inst_11010,inst_10829,inst_11018,inst_10906,inst_10849,inst_11023,inst_10840,inst_10938,inst_10848,inst_10856,inst_10827,inst_10818,inst_10843,inst_11021,inst_10934,inst_11022,inst_10826,inst_10933,inst_10876,inst_10817,inst_10825,inst_10824,inst_10821,inst_10859,inst_10935,inst_10811,inst_10869,inst_11017,inst_11180,inst_11181,inst_11183,inst_11184,inst_11185,inst_11291,state_val_11836,c__6459__auto___12267){
return (function (){
var f__6460__auto__ = (function (){var switch__6444__auto__ = ((function (add_cell_BANG_,depth_compare,player_stars_text,player_standing_texs,player_shadow,close_QMARK_,player_pos,obstacle_types,polar_object_coords,trees,player_standing_sway,game_sprites,loader,player_walking_texs,shadow_tex,_,tex,c__6459__auto____$1,hit_sfx,lobster_big,game_map,star_tex,remove_cell_BANG_,tufts,game_space,pickup_textures,perlin_channel,title_text,floor_objects,pickup_sfx,tilemap,make_pickup,varela,wait,player,player_stars_icon,inst_10828,inst_10862,inst_10853,inst_10879,inst_10850,inst_10830,inst_10812,inst_11010,inst_10829,inst_11018,inst_10906,inst_10849,inst_11023,inst_10840,inst_10938,inst_10848,inst_10856,inst_10827,inst_10818,inst_10843,inst_11021,inst_10934,inst_11022,inst_10826,inst_10933,inst_10876,inst_10817,inst_10825,inst_10824,inst_10821,inst_10859,inst_10935,inst_10811,inst_10869,inst_11017,inst_11180,inst_11181,inst_11183,inst_11184,inst_11185,inst_11291,state_val_11836,c__6459__auto___12267){
return (function (state_11289){
var state_val_11290 = (state_11289[(1)]);
if((state_val_11290 === (7))){
var inst_11281 = (state_11289[(2)]);
var state_11289__$1 = (function (){var statearr_11990 = state_11289;
(statearr_11990[(7)] = inst_11281);

return statearr_11990;
})();
var statearr_11991_12379 = state_11289__$1;
(statearr_11991_12379[(2)] = null);

(statearr_11991_12379[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11290 === (20))){
var state_11289__$1 = state_11289;
var statearr_11992_12380 = state_11289__$1;
(statearr_11992_12380[(2)] = null);

(statearr_11992_12380[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11290 === (27))){
var inst_11244 = (state_11289[(2)]);
var inst_11245 = cljs.core.deref.call(null,farn.core.player_animation);
var inst_11246 = cljs.core._EQ_.call(null,inst_11245,new cljs.core.Keyword(null,"running","running",1554969103));
var state_11289__$1 = (function (){var statearr_11993 = state_11289;
(statearr_11993[(8)] = inst_11244);

return statearr_11993;
})();
if(inst_11246){
var statearr_11994_12381 = state_11289__$1;
(statearr_11994_12381[(1)] = (32));

} else {
var statearr_11995_12382 = state_11289__$1;
(statearr_11995_12382[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11290 === (1))){
var state_11289__$1 = state_11289;
var statearr_11996_12383 = state_11289__$1;
(statearr_11996_12383[(2)] = null);

(statearr_11996_12383[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11290 === (24))){
var state_11289__$1 = state_11289;
var statearr_11997_12384 = state_11289__$1;
(statearr_11997_12384[(2)] = null);

(statearr_11997_12384[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11290 === (39))){
var state_11289__$1 = state_11289;
var statearr_11998_12385 = state_11289__$1;
(statearr_11998_12385[(2)] = null);

(statearr_11998_12385[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11290 === (4))){
var inst_11279 = cljs.core.deref.call(null,farn.core.player_animation);
var state_11289__$1 = state_11289;
var G__11999_12386 = (((inst_11279 instanceof cljs.core.Keyword))?inst_11279.fqn:null);
switch (G__11999_12386) {
case "running":
var statearr_12000_12388 = state_11289__$1;
(statearr_12000_12388[(1)] = (20));


break;
case "standing":
var statearr_12001_12389 = state_11289__$1;
(statearr_12001_12389[(1)] = (8));


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(inst_11279)].join('')));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11290 === (15))){
var inst_11212 = (state_11289[(2)]);
var state_11289__$1 = (function (){var statearr_12002 = state_11289;
(statearr_12002[(9)] = inst_11212);

return statearr_12002;
})();
var statearr_12003_12390 = state_11289__$1;
(statearr_12003_12390[(2)] = null);

(statearr_12003_12390[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11290 === (21))){
var inst_11221 = cljs.core.deref.call(null,farn.core.player_animation);
var inst_11222 = cljs.core._EQ_.call(null,inst_11221,new cljs.core.Keyword(null,"running","running",1554969103));
var state_11289__$1 = state_11289;
if(inst_11222){
var statearr_12004_12391 = state_11289__$1;
(statearr_12004_12391[(1)] = (23));

} else {
var statearr_12005_12392 = state_11289__$1;
(statearr_12005_12392[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11290 === (31))){
var inst_11242 = (state_11289[(2)]);
var state_11289__$1 = state_11289;
var statearr_12006_12393 = state_11289__$1;
(statearr_12006_12393[(2)] = inst_11242);

(statearr_12006_12393[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11290 === (32))){
var inst_11248 = player_walking_texs.call(null,(1));
var inst_11249 = player.setTexture(inst_11248);
var inst_11250 = (0);
var state_11289__$1 = (function (){var statearr_12007 = state_11289;
(statearr_12007[(10)] = inst_11249);

(statearr_12007[(11)] = inst_11250);

return statearr_12007;
})();
var statearr_12008_12394 = state_11289__$1;
(statearr_12008_12394[(2)] = null);

(statearr_12008_12394[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11290 === (40))){
var inst_11266 = (state_11289[(2)]);
var state_11289__$1 = state_11289;
var statearr_12009_12395 = state_11289__$1;
(statearr_12009_12395[(2)] = inst_11266);

(statearr_12009_12395[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11290 === (33))){
var state_11289__$1 = state_11289;
var statearr_12010_12396 = state_11289__$1;
(statearr_12010_12396[(2)] = null);

(statearr_12010_12396[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11290 === (13))){
var inst_11216 = (state_11289[(2)]);
var state_11289__$1 = state_11289;
var statearr_12011_12397 = state_11289__$1;
(statearr_12011_12397[(2)] = inst_11216);

(statearr_12011_12397[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11290 === (22))){
var inst_11277 = (state_11289[(2)]);
var state_11289__$1 = state_11289;
var statearr_12012_12398 = state_11289__$1;
(statearr_12012_12398[(2)] = inst_11277);

(statearr_12012_12398[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11290 === (36))){
var inst_11268 = (state_11289[(2)]);
var state_11289__$1 = state_11289;
var statearr_12013_12399 = state_11289__$1;
(statearr_12013_12399[(2)] = inst_11268);

(statearr_12013_12399[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11290 === (29))){
var inst_11226 = (state_11289[(12)]);
var inst_11238 = (inst_11226 + (1));
var inst_11226__$1 = inst_11238;
var state_11289__$1 = (function (){var statearr_12014 = state_11289;
(statearr_12014[(12)] = inst_11226__$1);

return statearr_12014;
})();
var statearr_12015_12400 = state_11289__$1;
(statearr_12015_12400[(2)] = null);

(statearr_12015_12400[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11290 === (6))){
var inst_11285 = (state_11289[(2)]);
var state_11289__$1 = state_11289;
var statearr_12016_12401 = state_11289__$1;
(statearr_12016_12401[(2)] = inst_11285);

(statearr_12016_12401[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11290 === (28))){
var inst_11226 = (state_11289[(12)]);
var inst_11230 = (state_11289[(2)]);
var inst_11231 = (inst_11226 / farn.core.player_bound_length);
var inst_11232 = (Math.PI * inst_11231);
var inst_11233 = Math.sin.call(null,inst_11232);
var inst_11234 = (farn.core.player_bound_height * inst_11233);
var inst_11235 = farn.sprite.set_pivot_BANG_.call(null,player,(-1),inst_11234);
var inst_11236 = (inst_11226 < farn.core.player_bound_length);
var state_11289__$1 = (function (){var statearr_12017 = state_11289;
(statearr_12017[(13)] = inst_11235);

(statearr_12017[(14)] = inst_11230);

return statearr_12017;
})();
if(cljs.core.truth_(inst_11236)){
var statearr_12018_12402 = state_11289__$1;
(statearr_12018_12402[(1)] = (29));

} else {
var statearr_12019_12403 = state_11289__$1;
(statearr_12019_12403[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11290 === (25))){
var inst_11275 = (state_11289[(2)]);
var state_11289__$1 = state_11289;
var statearr_12020_12404 = state_11289__$1;
(statearr_12020_12404[(2)] = inst_11275);

(statearr_12020_12404[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11290 === (34))){
var inst_11271 = (state_11289[(2)]);
var state_11289__$1 = (function (){var statearr_12021 = state_11289;
(statearr_12021[(15)] = inst_11271);

return statearr_12021;
})();
var statearr_12022_12405 = state_11289__$1;
(statearr_12022_12405[(2)] = null);

(statearr_12022_12405[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11290 === (17))){
var inst_11192 = (state_11289[(16)]);
var inst_11205 = (inst_11192 + (1));
var inst_11206 = cljs.core.mod.call(null,inst_11205,(4));
var inst_11192__$1 = inst_11206;
var state_11289__$1 = (function (){var statearr_12023 = state_11289;
(statearr_12023[(16)] = inst_11192__$1);

return statearr_12023;
})();
var statearr_12024_12406 = state_11289__$1;
(statearr_12024_12406[(2)] = null);

(statearr_12024_12406[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11290 === (3))){
var inst_11287 = (state_11289[(2)]);
var state_11289__$1 = state_11289;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11289__$1,inst_11287);
} else {
if((state_val_11290 === (12))){
var state_11289__$1 = state_11289;
var statearr_12025_12407 = state_11289__$1;
(statearr_12025_12407[(2)] = null);

(statearr_12025_12407[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11290 === (2))){
var state_11289__$1 = state_11289;
var statearr_12026_12408 = state_11289__$1;
(statearr_12026_12408[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11290 === (23))){
var inst_11224 = player_walking_texs.call(null,(0));
var inst_11225 = player.setTexture(inst_11224);
var inst_11226 = (0);
var state_11289__$1 = (function (){var statearr_12028 = state_11289;
(statearr_12028[(12)] = inst_11226);

(statearr_12028[(17)] = inst_11225);

return statearr_12028;
})();
var statearr_12029_12409 = state_11289__$1;
(statearr_12029_12409[(2)] = null);

(statearr_12029_12409[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11290 === (35))){
var inst_11252 = farn.events.next_frame.call(null);
var state_11289__$1 = state_11289;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11289__$1,(37),inst_11252);
} else {
if((state_val_11290 === (19))){
var inst_11210 = (state_11289[(2)]);
var state_11289__$1 = state_11289;
var statearr_12030_12410 = state_11289__$1;
(statearr_12030_12410[(2)] = inst_11210);

(statearr_12030_12410[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11290 === (11))){
var inst_11192 = (0);
var state_11289__$1 = (function (){var statearr_12031 = state_11289;
(statearr_12031[(16)] = inst_11192);

return statearr_12031;
})();
var statearr_12032_12411 = state_11289__$1;
(statearr_12032_12411[(2)] = null);

(statearr_12032_12411[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11290 === (9))){
var inst_11189 = cljs.core.deref.call(null,farn.core.player_animation);
var inst_11190 = cljs.core._EQ_.call(null,inst_11189,new cljs.core.Keyword(null,"standing","standing",-1248340762));
var state_11289__$1 = state_11289;
if(inst_11190){
var statearr_12033_12412 = state_11289__$1;
(statearr_12033_12412[(1)] = (11));

} else {
var statearr_12034_12413 = state_11289__$1;
(statearr_12034_12413[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11290 === (5))){
var state_11289__$1 = state_11289;
var statearr_12035_12414 = state_11289__$1;
(statearr_12035_12414[(2)] = null);

(statearr_12035_12414[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11290 === (14))){
var inst_11194 = farn.utils.rand_between.call(null,(300),(600));
var inst_11195 = cljs.core.async.timeout.call(null,inst_11194);
var state_11289__$1 = state_11289;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11289__$1,(16),inst_11195);
} else {
if((state_val_11290 === (26))){
var inst_11228 = farn.events.next_frame.call(null);
var state_11289__$1 = state_11289;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11289__$1,(28),inst_11228);
} else {
if((state_val_11290 === (16))){
var inst_11192 = (state_11289[(16)]);
var inst_11197 = (state_11289[(2)]);
var inst_11198 = cljs.core.nth.call(null,player_standing_texs,inst_11192);
var inst_11199 = player.setTexture(inst_11198);
var inst_11200 = player_standing_sway.call(null,inst_11192);
var inst_11201 = farn.sprite.set_pivot_BANG_.call(null,player,inst_11200,(0));
var inst_11202 = cljs.core.deref.call(null,farn.core.player_animation);
var inst_11203 = cljs.core._EQ_.call(null,inst_11202,new cljs.core.Keyword(null,"standing","standing",-1248340762));
var state_11289__$1 = (function (){var statearr_12036 = state_11289;
(statearr_12036[(18)] = inst_11199);

(statearr_12036[(19)] = inst_11197);

(statearr_12036[(20)] = inst_11201);

return statearr_12036;
})();
if(inst_11203){
var statearr_12037_12415 = state_11289__$1;
(statearr_12037_12415[(1)] = (17));

} else {
var statearr_12038_12416 = state_11289__$1;
(statearr_12038_12416[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11290 === (38))){
var inst_11250 = (state_11289[(11)]);
var inst_11262 = (inst_11250 + (1));
var inst_11250__$1 = inst_11262;
var state_11289__$1 = (function (){var statearr_12039 = state_11289;
(statearr_12039[(11)] = inst_11250__$1);

return statearr_12039;
})();
var statearr_12040_12417 = state_11289__$1;
(statearr_12040_12417[(2)] = null);

(statearr_12040_12417[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11290 === (30))){
var state_11289__$1 = state_11289;
var statearr_12041_12418 = state_11289__$1;
(statearr_12041_12418[(2)] = null);

(statearr_12041_12418[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11290 === (10))){
var inst_11218 = (state_11289[(2)]);
var state_11289__$1 = state_11289;
var statearr_12042_12419 = state_11289__$1;
(statearr_12042_12419[(2)] = inst_11218);

(statearr_12042_12419[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11290 === (18))){
var state_11289__$1 = state_11289;
var statearr_12043_12420 = state_11289__$1;
(statearr_12043_12420[(2)] = null);

(statearr_12043_12420[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11290 === (37))){
var inst_11250 = (state_11289[(11)]);
var inst_11254 = (state_11289[(2)]);
var inst_11255 = (inst_11250 / farn.core.player_bound_length);
var inst_11256 = (Math.PI * inst_11255);
var inst_11257 = Math.sin.call(null,inst_11256);
var inst_11258 = (farn.core.player_bound_height * inst_11257);
var inst_11259 = farn.sprite.set_pivot_BANG_.call(null,player,(1),inst_11258);
var inst_11260 = (inst_11250 < farn.core.player_bound_length);
var state_11289__$1 = (function (){var statearr_12044 = state_11289;
(statearr_12044[(21)] = inst_11254);

(statearr_12044[(22)] = inst_11259);

return statearr_12044;
})();
if(cljs.core.truth_(inst_11260)){
var statearr_12045_12421 = state_11289__$1;
(statearr_12045_12421[(1)] = (38));

} else {
var statearr_12046_12422 = state_11289__$1;
(statearr_12046_12422[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11290 === (8))){
var state_11289__$1 = state_11289;
var statearr_12047_12423 = state_11289__$1;
(statearr_12047_12423[(2)] = null);

(statearr_12047_12423[(1)] = (9));


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
});})(add_cell_BANG_,depth_compare,player_stars_text,player_standing_texs,player_shadow,close_QMARK_,player_pos,obstacle_types,polar_object_coords,trees,player_standing_sway,game_sprites,loader,player_walking_texs,shadow_tex,_,tex,c__6459__auto____$1,hit_sfx,lobster_big,game_map,star_tex,remove_cell_BANG_,tufts,game_space,pickup_textures,perlin_channel,title_text,floor_objects,pickup_sfx,tilemap,make_pickup,varela,wait,player,player_stars_icon,inst_10828,inst_10862,inst_10853,inst_10879,inst_10850,inst_10830,inst_10812,inst_11010,inst_10829,inst_11018,inst_10906,inst_10849,inst_11023,inst_10840,inst_10938,inst_10848,inst_10856,inst_10827,inst_10818,inst_10843,inst_11021,inst_10934,inst_11022,inst_10826,inst_10933,inst_10876,inst_10817,inst_10825,inst_10824,inst_10821,inst_10859,inst_10935,inst_10811,inst_10869,inst_11017,inst_11180,inst_11181,inst_11183,inst_11184,inst_11185,inst_11291,state_val_11836,c__6459__auto___12267))
;
return ((function (switch__6444__auto__,add_cell_BANG_,depth_compare,player_stars_text,player_standing_texs,player_shadow,close_QMARK_,player_pos,obstacle_types,polar_object_coords,trees,player_standing_sway,game_sprites,loader,player_walking_texs,shadow_tex,_,tex,c__6459__auto____$1,hit_sfx,lobster_big,game_map,star_tex,remove_cell_BANG_,tufts,game_space,pickup_textures,perlin_channel,title_text,floor_objects,pickup_sfx,tilemap,make_pickup,varela,wait,player,player_stars_icon,inst_10828,inst_10862,inst_10853,inst_10879,inst_10850,inst_10830,inst_10812,inst_11010,inst_10829,inst_11018,inst_10906,inst_10849,inst_11023,inst_10840,inst_10938,inst_10848,inst_10856,inst_10827,inst_10818,inst_10843,inst_11021,inst_10934,inst_11022,inst_10826,inst_10933,inst_10876,inst_10817,inst_10825,inst_10824,inst_10821,inst_10859,inst_10935,inst_10811,inst_10869,inst_11017,inst_11180,inst_11181,inst_11183,inst_11184,inst_11185,inst_11291,state_val_11836,c__6459__auto___12267){
return (function() {
var state_machine__6445__auto__ = null;
var state_machine__6445__auto____0 = (function (){
var statearr_12051 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12051[(0)] = state_machine__6445__auto__);

(statearr_12051[(1)] = (1));

return statearr_12051;
});
var state_machine__6445__auto____1 = (function (state_11289){
while(true){
var ret_value__6446__auto__ = (function (){try{while(true){
var result__6447__auto__ = switch__6444__auto__.call(null,state_11289);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6447__auto__;
}
break;
}
}catch (e12052){if((e12052 instanceof Object)){
var ex__6448__auto__ = e12052;
var statearr_12053_12424 = state_11289;
(statearr_12053_12424[(5)] = ex__6448__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11289);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12052;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12425 = state_11289;
state_11289 = G__12425;
continue;
} else {
return ret_value__6446__auto__;
}
break;
}
});
state_machine__6445__auto__ = function(state_11289){
switch(arguments.length){
case 0:
return state_machine__6445__auto____0.call(this);
case 1:
return state_machine__6445__auto____1.call(this,state_11289);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6445__auto____0;
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6445__auto____1;
return state_machine__6445__auto__;
})()
;})(switch__6444__auto__,add_cell_BANG_,depth_compare,player_stars_text,player_standing_texs,player_shadow,close_QMARK_,player_pos,obstacle_types,polar_object_coords,trees,player_standing_sway,game_sprites,loader,player_walking_texs,shadow_tex,_,tex,c__6459__auto____$1,hit_sfx,lobster_big,game_map,star_tex,remove_cell_BANG_,tufts,game_space,pickup_textures,perlin_channel,title_text,floor_objects,pickup_sfx,tilemap,make_pickup,varela,wait,player,player_stars_icon,inst_10828,inst_10862,inst_10853,inst_10879,inst_10850,inst_10830,inst_10812,inst_11010,inst_10829,inst_11018,inst_10906,inst_10849,inst_11023,inst_10840,inst_10938,inst_10848,inst_10856,inst_10827,inst_10818,inst_10843,inst_11021,inst_10934,inst_11022,inst_10826,inst_10933,inst_10876,inst_10817,inst_10825,inst_10824,inst_10821,inst_10859,inst_10935,inst_10811,inst_10869,inst_11017,inst_11180,inst_11181,inst_11183,inst_11184,inst_11185,inst_11291,state_val_11836,c__6459__auto___12267))
})();
var state__6461__auto__ = (function (){var statearr_12054 = f__6460__auto__.call(null);
(statearr_12054[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6459__auto____$1);

return statearr_12054;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6461__auto__);
});
;})(add_cell_BANG_,depth_compare,player_stars_text,player_standing_texs,player_shadow,close_QMARK_,player_pos,obstacle_types,polar_object_coords,trees,player_standing_sway,game_sprites,loader,player_walking_texs,shadow_tex,_,tex,c__6459__auto____$1,hit_sfx,lobster_big,game_map,star_tex,remove_cell_BANG_,tufts,game_space,pickup_textures,perlin_channel,title_text,floor_objects,pickup_sfx,tilemap,make_pickup,varela,wait,player,player_stars_icon,inst_10828,inst_10862,inst_10853,inst_10879,inst_10850,inst_10830,inst_10812,inst_11010,inst_10829,inst_11018,inst_10906,inst_10849,inst_11023,inst_10840,inst_10938,inst_10848,inst_10856,inst_10827,inst_10818,inst_10843,inst_11021,inst_10934,inst_11022,inst_10826,inst_10933,inst_10876,inst_10817,inst_10825,inst_10824,inst_10821,inst_10859,inst_10935,inst_10811,inst_10869,inst_11017,inst_11180,inst_11181,inst_11183,inst_11184,inst_11185,inst_11291,state_val_11836,c__6459__auto___12267))
})();
var inst_11293 = cljs.core.async.impl.dispatch.run.call(null,inst_11292);
var inst_11294 = farn.spatial.which_cell.call(null,inst_11021,farn.core.cell_size);
var inst_11295 = inst_11022.call(null,inst_11294);
var inst_11296 = farn.core.main_stage.children;
var inst_11297 = inst_11296.sort(inst_10934);
var inst_11298 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_11299 = [(0),(0)];
var inst_11300 = (new cljs.core.PersistentVector(null,2,(5),inst_11298,inst_11299,null));
var inst_11301 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_11302 = [(0),(0)];
var inst_11303 = (new cljs.core.PersistentVector(null,2,(5),inst_11301,inst_11302,null));
var inst_11304 = [inst_11303];
var inst_11305 = cljs.core.PersistentHashSet.fromArray(inst_11304,true);
var inst_11306 = (0);
var inst_11307 = inst_11300;
var inst_11308 = (0);
var inst_11309 = (0);
var inst_11310 = inst_11305;
var inst_11311 = (0);
var inst_11312 = (0);
var state_11835__$1 = (function (){var statearr_12055 = state_11835;
(statearr_12055[(17)] = inst_11307);

(statearr_12055[(53)] = inst_11309);

(statearr_12055[(146)] = inst_11297);

(statearr_12055[(76)] = inst_11306);

(statearr_12055[(147)] = inst_11293);

(statearr_12055[(148)] = inst_11180);

(statearr_12055[(27)] = inst_11312);

(statearr_12055[(149)] = inst_11183);

(statearr_12055[(85)] = inst_11310);

(statearr_12055[(87)] = inst_11308);

(statearr_12055[(150)] = inst_11184);

(statearr_12055[(90)] = inst_11311);

(statearr_12055[(151)] = inst_11295);

(statearr_12055[(152)] = inst_11185);

(statearr_12055[(153)] = inst_11181);

return statearr_12055;
})();
var statearr_12056_12426 = state_11835__$1;
(statearr_12056_12426[(2)] = null);

(statearr_12056_12426[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11836 === (3))){
var inst_10812 = (state_11835[(29)]);
var inst_10821 = (state_11835[(2)]);
var inst_10822 = farn.utils.log.call(null,"perlin channel - start");
var state_11835__$1 = (function (){var statearr_12057 = state_11835;
(statearr_12057[(154)] = inst_10822);

(statearr_12057[(88)] = inst_10821);

return statearr_12057;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11835__$1,(4),inst_10812);
} else {
if((state_val_11836 === (12))){
var inst_10828 = (state_11835[(43)]);
var inst_10862 = (state_11835[(44)]);
var inst_10853 = (state_11835[(48)]);
var inst_10879 = (state_11835[(50)]);
var inst_10850 = (state_11835[(51)]);
var inst_10830 = (state_11835[(52)]);
var inst_10812 = (state_11835[(29)]);
var inst_11010 = (state_11835[(54)]);
var inst_10829 = (state_11835[(8)]);
var inst_11018 = (state_11835[(21)]);
var inst_10906 = (state_11835[(57)]);
var inst_10849 = (state_11835[(9)]);
var inst_11023 = (state_11835[(58)]);
var inst_10840 = (state_11835[(59)]);
var inst_10938 = (state_11835[(60)]);
var inst_10848 = (state_11835[(61)]);
var inst_10856 = (state_11835[(62)]);
var inst_10827 = (state_11835[(63)]);
var inst_10818 = (state_11835[(64)]);
var inst_10843 = (state_11835[(66)]);
var inst_11021 = (state_11835[(68)]);
var inst_10934 = (state_11835[(74)]);
var inst_11022 = (state_11835[(77)]);
var inst_10826 = (state_11835[(80)]);
var inst_10933 = (state_11835[(18)]);
var inst_10876 = (state_11835[(81)]);
var inst_10817 = (state_11835[(82)]);
var inst_10825 = (state_11835[(84)]);
var inst_10824 = (state_11835[(86)]);
var inst_10821 = (state_11835[(88)]);
var inst_10859 = (state_11835[(89)]);
var inst_10935 = (state_11835[(37)]);
var inst_10811 = (state_11835[(28)]);
var inst_10869 = (state_11835[(91)]);
var inst_11017 = (state_11835[(92)]);
var inst_10933__$1 = (state_11835[(2)]);
var inst_10934__$1 = (function (){var player_stars_text = inst_10853;
var player_standing_texs = inst_10840;
var player_shadow = inst_10830;
var obstacle_types = inst_10862;
var trees = inst_10869;
var player_standing_sway = inst_10843;
var loader = inst_10811;
var player_walking_texs = inst_10848;
var shadow_tex = inst_10829;
var _ = inst_10825;
var tex = inst_10827;
var hit_sfx = inst_10933__$1;
var lobster_big = inst_10817;
var star_tex = inst_10849;
var tufts = inst_10876;
var pickup_textures = inst_10856;
var perlin_channel = inst_10812;
var title_text = inst_10826;
var floor_objects = inst_10859;
var pickup_sfx = inst_10906;
var tilemap = inst_10824;
var make_pickup = inst_10879;
var varela = inst_10818;
var wait = inst_10821;
var player = inst_10828;
var player_stars_icon = inst_10850;
return ((function (player_stars_text,player_standing_texs,player_shadow,obstacle_types,trees,player_standing_sway,loader,player_walking_texs,shadow_tex,_,tex,hit_sfx,lobster_big,star_tex,tufts,pickup_textures,perlin_channel,title_text,floor_objects,pickup_sfx,tilemap,make_pickup,varela,wait,player,player_stars_icon,inst_10828,inst_10862,inst_10853,inst_10879,inst_10850,inst_10830,inst_10812,inst_11010,inst_10829,inst_11018,inst_10906,inst_10849,inst_11023,inst_10840,inst_10938,inst_10848,inst_10856,inst_10827,inst_10818,inst_10843,inst_11021,inst_10934,inst_11022,inst_10826,inst_10933,inst_10876,inst_10817,inst_10825,inst_10824,inst_10821,inst_10859,inst_10935,inst_10811,inst_10869,inst_11017,inst_10933__$1,state_val_11836,c__6459__auto___12267){
return (function (a,b){
if(cljs.core.truth_((function (){var and__3618__auto__ = a.floortile;
if(cljs.core.truth_(and__3618__auto__)){
return b.floortile;
} else {
return and__3618__auto__;
}
})())){
return (a.texture.width - b.texture.width);
} else {
if(cljs.core.truth_(a.floortile)){
return (-1);
} else {
if(cljs.core.truth_(b.floortile)){
return (1);
} else {
if((a.position.y < b.position.y)){
return (-1);
} else {
if((b.position.y < a.position.y)){
return (1);
} else {
return (0);

}
}
}
}
}
});
;})(player_stars_text,player_standing_texs,player_shadow,obstacle_types,trees,player_standing_sway,loader,player_walking_texs,shadow_tex,_,tex,hit_sfx,lobster_big,star_tex,tufts,pickup_textures,perlin_channel,title_text,floor_objects,pickup_sfx,tilemap,make_pickup,varela,wait,player,player_stars_icon,inst_10828,inst_10862,inst_10853,inst_10879,inst_10850,inst_10830,inst_10812,inst_11010,inst_10829,inst_11018,inst_10906,inst_10849,inst_11023,inst_10840,inst_10938,inst_10848,inst_10856,inst_10827,inst_10818,inst_10843,inst_11021,inst_10934,inst_11022,inst_10826,inst_10933,inst_10876,inst_10817,inst_10825,inst_10824,inst_10821,inst_10859,inst_10935,inst_10811,inst_10869,inst_11017,inst_10933__$1,state_val_11836,c__6459__auto___12267))
})();
var inst_10935__$1 = (function (){var depth_compare = inst_10934__$1;
var player_stars_text = inst_10853;
var player_standing_texs = inst_10840;
var player_shadow = inst_10830;
var obstacle_types = inst_10862;
var trees = inst_10869;
var player_standing_sway = inst_10843;
var loader = inst_10811;
var player_walking_texs = inst_10848;
var shadow_tex = inst_10829;
var _ = inst_10825;
var tex = inst_10827;
var hit_sfx = inst_10933__$1;
var lobster_big = inst_10817;
var star_tex = inst_10849;
var tufts = inst_10876;
var pickup_textures = inst_10856;
var perlin_channel = inst_10812;
var title_text = inst_10826;
var floor_objects = inst_10859;
var pickup_sfx = inst_10906;
var tilemap = inst_10824;
var make_pickup = inst_10879;
var varela = inst_10818;
var wait = inst_10821;
var player = inst_10828;
var player_stars_icon = inst_10850;
return ((function (depth_compare,player_stars_text,player_standing_texs,player_shadow,obstacle_types,trees,player_standing_sway,loader,player_walking_texs,shadow_tex,_,tex,hit_sfx,lobster_big,star_tex,tufts,pickup_textures,perlin_channel,title_text,floor_objects,pickup_sfx,tilemap,make_pickup,varela,wait,player,player_stars_icon,inst_10828,inst_10862,inst_10853,inst_10879,inst_10850,inst_10830,inst_10812,inst_11010,inst_10829,inst_11018,inst_10906,inst_10849,inst_11023,inst_10840,inst_10938,inst_10848,inst_10856,inst_10827,inst_10818,inst_10843,inst_11021,inst_10934,inst_11022,inst_10826,inst_10933,inst_10876,inst_10817,inst_10825,inst_10824,inst_10821,inst_10859,inst_10935,inst_10811,inst_10869,inst_11017,inst_10933__$1,inst_10934__$1,state_val_11836,c__6459__auto___12267){
return (function (obj_pos,obj_sprite,player_x,player_y,rhx,rhy){
var vec__12058 = obj_pos;
var ox = cljs.core.nth.call(null,vec__12058,(0),null);
var oy = cljs.core.nth.call(null,vec__12058,(1),null);
var p__GT_t = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(ox - player_x),(oy - player_y)], null);
var vec__12059 = p__GT_t;
var p__GT_t_x = cljs.core.nth.call(null,vec__12059,(0),null);
var p__GT_t_y = cljs.core.nth.call(null,vec__12059,(1),null);
var vec__12060 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((rhx * p__GT_t_y) + (rhy * p__GT_t_x)),((rhx * p__GT_t_x) - (rhy * p__GT_t_y))], null);
var rx = cljs.core.nth.call(null,vec__12060,(0),null);
var ry = cljs.core.nth.call(null,vec__12060,(1),null);
var fx = (rx + player_x);
var fy = ((ry / farn.core.isometric_factor) + player_y);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fx,fy], null);
});
;})(depth_compare,player_stars_text,player_standing_texs,player_shadow,obstacle_types,trees,player_standing_sway,loader,player_walking_texs,shadow_tex,_,tex,hit_sfx,lobster_big,star_tex,tufts,pickup_textures,perlin_channel,title_text,floor_objects,pickup_sfx,tilemap,make_pickup,varela,wait,player,player_stars_icon,inst_10828,inst_10862,inst_10853,inst_10879,inst_10850,inst_10830,inst_10812,inst_11010,inst_10829,inst_11018,inst_10906,inst_10849,inst_11023,inst_10840,inst_10938,inst_10848,inst_10856,inst_10827,inst_10818,inst_10843,inst_11021,inst_10934,inst_11022,inst_10826,inst_10933,inst_10876,inst_10817,inst_10825,inst_10824,inst_10821,inst_10859,inst_10935,inst_10811,inst_10869,inst_11017,inst_10933__$1,inst_10934__$1,state_val_11836,c__6459__auto___12267))
})();
var inst_10938__$1 = (function (){var depth_compare = inst_10934__$1;
var player_stars_text = inst_10853;
var player_standing_texs = inst_10840;
var player_shadow = inst_10830;
var obstacle_types = inst_10862;
var polar_object_coords = inst_10935__$1;
var trees = inst_10869;
var player_standing_sway = inst_10843;
var loader = inst_10811;
var player_walking_texs = inst_10848;
var shadow_tex = inst_10829;
var _ = inst_10825;
var tex = inst_10827;
var hit_sfx = inst_10933__$1;
var lobster_big = inst_10817;
var star_tex = inst_10849;
var tufts = inst_10876;
var pickup_textures = inst_10856;
var perlin_channel = inst_10812;
var title_text = inst_10826;
var floor_objects = inst_10859;
var pickup_sfx = inst_10906;
var tilemap = inst_10824;
var make_pickup = inst_10879;
var varela = inst_10818;
var wait = inst_10821;
var player = inst_10828;
var player_stars_icon = inst_10850;
return ((function (depth_compare,player_stars_text,player_standing_texs,player_shadow,obstacle_types,polar_object_coords,trees,player_standing_sway,loader,player_walking_texs,shadow_tex,_,tex,hit_sfx,lobster_big,star_tex,tufts,pickup_textures,perlin_channel,title_text,floor_objects,pickup_sfx,tilemap,make_pickup,varela,wait,player,player_stars_icon,inst_10828,inst_10862,inst_10853,inst_10879,inst_10850,inst_10830,inst_10812,inst_11010,inst_10829,inst_11018,inst_10906,inst_10849,inst_11023,inst_10840,inst_10938,inst_10848,inst_10856,inst_10827,inst_10818,inst_10843,inst_11021,inst_10934,inst_11022,inst_10826,inst_10933,inst_10876,inst_10817,inst_10825,inst_10824,inst_10821,inst_10859,inst_10935,inst_10811,inst_10869,inst_11017,inst_10933__$1,inst_10934__$1,inst_10935__$1,state_val_11836,c__6459__auto___12267){
return (function (p__10936,p__10937,threshold){
var vec__12061 = p__10936;
var x1 = cljs.core.nth.call(null,vec__12061,(0),null);
var y1 = cljs.core.nth.call(null,vec__12061,(1),null);
var vec__12062 = p__10937;
var x2 = cljs.core.nth.call(null,vec__12062,(0),null);
var y2 = cljs.core.nth.call(null,vec__12062,(1),null);
var dx = (x1 - x2);
var dy = (y1 - y2);
var d_squared = ((dx * dx) + (dy * dy));
return (d_squared < threshold);
});
;})(depth_compare,player_stars_text,player_standing_texs,player_shadow,obstacle_types,polar_object_coords,trees,player_standing_sway,loader,player_walking_texs,shadow_tex,_,tex,hit_sfx,lobster_big,star_tex,tufts,pickup_textures,perlin_channel,title_text,floor_objects,pickup_sfx,tilemap,make_pickup,varela,wait,player,player_stars_icon,inst_10828,inst_10862,inst_10853,inst_10879,inst_10850,inst_10830,inst_10812,inst_11010,inst_10829,inst_11018,inst_10906,inst_10849,inst_11023,inst_10840,inst_10938,inst_10848,inst_10856,inst_10827,inst_10818,inst_10843,inst_11021,inst_10934,inst_11022,inst_10826,inst_10933,inst_10876,inst_10817,inst_10825,inst_10824,inst_10821,inst_10859,inst_10935,inst_10811,inst_10869,inst_11017,inst_10933__$1,inst_10934__$1,inst_10935__$1,state_val_11836,c__6459__auto___12267))
})();
var inst_10939 = [(0),(1),(2),(3),(4)];
var inst_10940 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_10941 = [new cljs.core.Keyword(null,"static-floor-water-big","static-floor-water-big",1588138738),new cljs.core.Keyword(null,"static-floor-water-medium","static-floor-water-medium",1136261079),new cljs.core.Keyword(null,"static-floor-water-small","static-floor-water-small",1080050532)];
var inst_10942 = (new cljs.core.PersistentVector(null,3,(5),inst_10940,inst_10941,null));
var inst_10943 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_10944 = [new cljs.core.Keyword(null,"static-floor-path-big","static-floor-path-big",-1637038697),new cljs.core.Keyword(null,"static-floor-path-medium","static-floor-path-medium",-46847685),new cljs.core.Keyword(null,"static-floor-path-small","static-floor-path-small",477685180)];
var inst_10945 = (new cljs.core.PersistentVector(null,3,(5),inst_10943,inst_10944,null));
var inst_10946 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_10947 = [new cljs.core.Keyword(null,"static-rock-1","static-rock-1",-2031486616)];
var inst_10948 = (new cljs.core.PersistentVector(null,1,(5),inst_10946,inst_10947,null));
var inst_10949 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_10950 = [new cljs.core.Keyword(null,"static-lump-2","static-lump-2",225760930)];
var inst_10951 = (new cljs.core.PersistentVector(null,1,(5),inst_10949,inst_10950,null));
var inst_10952 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_10953 = [new cljs.core.Keyword(null,"static-floor-sand-big","static-floor-sand-big",953875278),new cljs.core.Keyword(null,"static-floor-sand-medium","static-floor-sand-medium",104159128),new cljs.core.Keyword(null,"static-floor-sand-small","static-floor-sand-small",-214159250)];
var inst_10954 = (new cljs.core.PersistentVector(null,3,(5),inst_10952,inst_10953,null));
var inst_10955 = farn.assets.make_range.call(null,"static-cactus-",(3));
var inst_10956 = cljs.core.concat.call(null,inst_10948,inst_10951,inst_10954,inst_10955);
var inst_10957 = cljs.core.vec.call(null,inst_10956);
var inst_10958 = farn.assets.make_range.call(null,"static-tree-",(20));
var inst_10959 = farn.assets.make_range.call(null,"static-tree-",(20));
var inst_10960 = farn.assets.make_range.call(null,"static-tree-",(20));
var inst_10961 = farn.assets.make_range.call(null,"static-tree-",(20));
var inst_10962 = farn.assets.make_range.call(null,"static-tree-",(20));
var inst_10963 = farn.assets.make_range.call(null,"static-tree-",(20));
var inst_10964 = farn.assets.make_range.call(null,"static-tree-",(20));
var inst_10965 = farn.assets.make_range.call(null,"static-tree-",(20));
var inst_10966 = farn.assets.make_range.call(null,"static-tree-",(20));
var inst_10967 = farn.assets.make_range.call(null,"static-tree-",(20));
var inst_10968 = farn.assets.make_range.call(null,"static-tree-",(20));
var inst_10969 = farn.assets.make_range.call(null,"static-tree-",(20));
var inst_10970 = farn.assets.make_range.call(null,"static-tree-",(20));
var inst_10971 = farn.assets.make_range.call(null,"static-tree-",(20));
var inst_10972 = farn.assets.make_range.call(null,"static-tree-",(20));
var inst_10973 = farn.assets.make_range.call(null,"static-tree-",(20));
var inst_10974 = farn.assets.make_range.call(null,"static-tree-",(20));
var inst_10975 = farn.assets.make_range.call(null,"static-tree-",(20));
var inst_10976 = farn.assets.make_range.call(null,"static-tree-",(20));
var inst_10977 = farn.assets.make_range.call(null,"static-tree-",(20));
var inst_10978 = farn.assets.make_range.call(null,"static-tree-",(20));
var inst_10979 = farn.assets.make_range.call(null,"static-tree-",(20));
var inst_10980 = farn.assets.make_range.call(null,"static-tree-",(20));
var inst_10981 = farn.assets.make_range.call(null,"static-tree-",(20));
var inst_10982 = farn.assets.make_range.call(null,"static-tree-",(20));
var inst_10983 = farn.assets.make_range.call(null,"static-tree-",(20));
var inst_10984 = farn.assets.make_range.call(null,"static-tree-",(20));
var inst_10985 = farn.assets.make_range.call(null,"static-giant-schroom-",(2));
var inst_10986 = farn.assets.make_range.call(null,"static-giant-schroom-",(2));
var inst_10987 = farn.assets.make_range.call(null,"static-giant-schroom-",(2));
var inst_10988 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_10989 = [new cljs.core.Keyword(null,"static-castle-1","static-castle-1",1559541979)];
var inst_10990 = (new cljs.core.PersistentVector(null,1,(5),inst_10988,inst_10989,null));
var inst_10991 = cljs.core.concat.call(null,inst_10958,inst_10959,inst_10960,inst_10961,inst_10962,inst_10963,inst_10964,inst_10965,inst_10966,inst_10967,inst_10968,inst_10969,inst_10970,inst_10971,inst_10972,inst_10973,inst_10974,inst_10975,inst_10976,inst_10977,inst_10978,inst_10979,inst_10980,inst_10981,inst_10982,inst_10983,inst_10984,inst_10985,inst_10986,inst_10987,inst_10990);
var inst_10992 = cljs.core.vec.call(null,inst_10991);
var inst_10993 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_10994 = [new cljs.core.Keyword(null,"static-schrub-1","static-schrub-1",1655867923)];
var inst_10995 = (new cljs.core.PersistentVector(null,1,(5),inst_10993,inst_10994,null));
var inst_10996 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_10997 = [new cljs.core.Keyword(null,"static-lump-1","static-lump-1",-811605060),new cljs.core.Keyword(null,"static-lump-3","static-lump-3",-581035868)];
var inst_10998 = (new cljs.core.PersistentVector(null,2,(5),inst_10996,inst_10997,null));
var inst_10999 = farn.assets.make_range.call(null,"static-schroom-",(3));
var inst_11000 = farn.assets.make_range.call(null,"static-flower-",(3));
var inst_11001 = farn.assets.make_range.call(null,"static-flower-",(3));
var inst_11002 = farn.assets.make_range.call(null,"static-flower-",(3));
var inst_11003 = farn.assets.make_range.call(null,"static-flower-",(3));
var inst_11004 = farn.assets.make_range.call(null,"static-flower-",(3));
var inst_11005 = farn.assets.make_range.call(null,"static-flower-",(3));
var inst_11006 = cljs.core.concat.call(null,inst_10995,inst_10998,inst_10999,inst_11000,inst_11001,inst_11002,inst_11003,inst_11004,inst_11005);
var inst_11007 = cljs.core.vec.call(null,inst_11006);
var inst_11008 = [inst_10942,inst_10945,inst_10957,inst_10992,inst_11007];
var inst_11009 = cljs.core.PersistentHashMap.fromArrays(inst_10939,inst_11008);
var inst_11010__$1 = farn.spatial.make_map_from_tilemap.call(null,inst_10824,inst_11009,(30000),(-10000),(10000),(-10000),(10000));
var inst_11015 = (function (){var depth_compare = inst_10934__$1;
var player_stars_text = inst_10853;
var player_standing_texs = inst_10840;
var player_shadow = inst_10830;
var close_QMARK_ = inst_10938__$1;
var obstacle_types = inst_10862;
var polar_object_coords = inst_10935__$1;
var trees = inst_10869;
var player_standing_sway = inst_10843;
var loader = inst_10811;
var player_walking_texs = inst_10848;
var shadow_tex = inst_10829;
var _ = inst_10825;
var tex = inst_10827;
var hit_sfx = inst_10933__$1;
var lobster_big = inst_10817;
var game_map = inst_11010__$1;
var star_tex = inst_10849;
var tufts = inst_10876;
var pickup_textures = inst_10856;
var perlin_channel = inst_10812;
var title_text = inst_10826;
var floor_objects = inst_10859;
var pickup_sfx = inst_10906;
var tilemap = inst_10824;
var make_pickup = inst_10879;
var varela = inst_10818;
var wait = inst_10821;
var player = inst_10828;
var player_stars_icon = inst_10850;
return ((function (depth_compare,player_stars_text,player_standing_texs,player_shadow,close_QMARK_,obstacle_types,polar_object_coords,trees,player_standing_sway,loader,player_walking_texs,shadow_tex,_,tex,hit_sfx,lobster_big,game_map,star_tex,tufts,pickup_textures,perlin_channel,title_text,floor_objects,pickup_sfx,tilemap,make_pickup,varela,wait,player,player_stars_icon,inst_10828,inst_10862,inst_10853,inst_10879,inst_10850,inst_10830,inst_10812,inst_11010,inst_10829,inst_11018,inst_10906,inst_10849,inst_11023,inst_10840,inst_10938,inst_10848,inst_10856,inst_10827,inst_10818,inst_10843,inst_11021,inst_10934,inst_11022,inst_10826,inst_10933,inst_10876,inst_10817,inst_10825,inst_10824,inst_10821,inst_10859,inst_10935,inst_10811,inst_10869,inst_11017,inst_10933__$1,inst_10934__$1,inst_10935__$1,inst_10938__$1,inst_10939,inst_10940,inst_10941,inst_10942,inst_10943,inst_10944,inst_10945,inst_10946,inst_10947,inst_10948,inst_10949,inst_10950,inst_10951,inst_10952,inst_10953,inst_10954,inst_10955,inst_10956,inst_10957,inst_10958,inst_10959,inst_10960,inst_10961,inst_10962,inst_10963,inst_10964,inst_10965,inst_10966,inst_10967,inst_10968,inst_10969,inst_10970,inst_10971,inst_10972,inst_10973,inst_10974,inst_10975,inst_10976,inst_10977,inst_10978,inst_10979,inst_10980,inst_10981,inst_10982,inst_10983,inst_10984,inst_10985,inst_10986,inst_10987,inst_10988,inst_10989,inst_10990,inst_10991,inst_10992,inst_10993,inst_10994,inst_10995,inst_10996,inst_10997,inst_10998,inst_10999,inst_11000,inst_11001,inst_11002,inst_11003,inst_11004,inst_11005,inst_11006,inst_11007,inst_11008,inst_11009,inst_11010__$1,state_val_11836,c__6459__auto___12267){
return (function iter__11011(s__11012){
return (new cljs.core.LazySeq(null,((function (depth_compare,player_stars_text,player_standing_texs,player_shadow,close_QMARK_,obstacle_types,polar_object_coords,trees,player_standing_sway,loader,player_walking_texs,shadow_tex,_,tex,hit_sfx,lobster_big,game_map,star_tex,tufts,pickup_textures,perlin_channel,title_text,floor_objects,pickup_sfx,tilemap,make_pickup,varela,wait,player,player_stars_icon,inst_10828,inst_10862,inst_10853,inst_10879,inst_10850,inst_10830,inst_10812,inst_11010,inst_10829,inst_11018,inst_10906,inst_10849,inst_11023,inst_10840,inst_10938,inst_10848,inst_10856,inst_10827,inst_10818,inst_10843,inst_11021,inst_10934,inst_11022,inst_10826,inst_10933,inst_10876,inst_10817,inst_10825,inst_10824,inst_10821,inst_10859,inst_10935,inst_10811,inst_10869,inst_11017,inst_10933__$1,inst_10934__$1,inst_10935__$1,inst_10938__$1,inst_10939,inst_10940,inst_10941,inst_10942,inst_10943,inst_10944,inst_10945,inst_10946,inst_10947,inst_10948,inst_10949,inst_10950,inst_10951,inst_10952,inst_10953,inst_10954,inst_10955,inst_10956,inst_10957,inst_10958,inst_10959,inst_10960,inst_10961,inst_10962,inst_10963,inst_10964,inst_10965,inst_10966,inst_10967,inst_10968,inst_10969,inst_10970,inst_10971,inst_10972,inst_10973,inst_10974,inst_10975,inst_10976,inst_10977,inst_10978,inst_10979,inst_10980,inst_10981,inst_10982,inst_10983,inst_10984,inst_10985,inst_10986,inst_10987,inst_10988,inst_10989,inst_10990,inst_10991,inst_10992,inst_10993,inst_10994,inst_10995,inst_10996,inst_10997,inst_10998,inst_10999,inst_11000,inst_11001,inst_11002,inst_11003,inst_11004,inst_11005,inst_11006,inst_11007,inst_11008,inst_11009,inst_11010__$1,state_val_11836,c__6459__auto___12267){
return (function (){
var s__11012__$1 = s__11012;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__11012__$1);
if(temp__4126__auto__){
var s__11012__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__11012__$2)){
var c__4384__auto__ = cljs.core.chunk_first.call(null,s__11012__$2);
var size__4385__auto__ = cljs.core.count.call(null,c__4384__auto__);
var b__11014 = cljs.core.chunk_buffer.call(null,size__4385__auto__);
if((function (){var i__11013 = (0);
while(true){
if((i__11013 < size__4385__auto__)){
var obj = cljs.core._nth.call(null,c__4384__auto__,i__11013);
cljs.core.chunk_append.call(null,b__11014,(function (){var type = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(obj);
var sprite = farn.core.make_sprite.call(null,farn.gfx.get_texture.call(null,type));
if(cljs.core.truth_(cljs.core.some.call(null,((function (i__11013,type,sprite,obj,c__4384__auto__,size__4385__auto__,b__11014,s__11012__$2,temp__4126__auto__,depth_compare,player_stars_text,player_standing_texs,player_shadow,close_QMARK_,obstacle_types,polar_object_coords,trees,player_standing_sway,loader,player_walking_texs,shadow_tex,_,tex,hit_sfx,lobster_big,game_map,star_tex,tufts,pickup_textures,perlin_channel,title_text,floor_objects,pickup_sfx,tilemap,make_pickup,varela,wait,player,player_stars_icon,inst_10828,inst_10862,inst_10853,inst_10879,inst_10850,inst_10830,inst_10812,inst_11010,inst_10829,inst_11018,inst_10906,inst_10849,inst_11023,inst_10840,inst_10938,inst_10848,inst_10856,inst_10827,inst_10818,inst_10843,inst_11021,inst_10934,inst_11022,inst_10826,inst_10933,inst_10876,inst_10817,inst_10825,inst_10824,inst_10821,inst_10859,inst_10935,inst_10811,inst_10869,inst_11017,inst_10933__$1,inst_10934__$1,inst_10935__$1,inst_10938__$1,inst_10939,inst_10940,inst_10941,inst_10942,inst_10943,inst_10944,inst_10945,inst_10946,inst_10947,inst_10948,inst_10949,inst_10950,inst_10951,inst_10952,inst_10953,inst_10954,inst_10955,inst_10956,inst_10957,inst_10958,inst_10959,inst_10960,inst_10961,inst_10962,inst_10963,inst_10964,inst_10965,inst_10966,inst_10967,inst_10968,inst_10969,inst_10970,inst_10971,inst_10972,inst_10973,inst_10974,inst_10975,inst_10976,inst_10977,inst_10978,inst_10979,inst_10980,inst_10981,inst_10982,inst_10983,inst_10984,inst_10985,inst_10986,inst_10987,inst_10988,inst_10989,inst_10990,inst_10991,inst_10992,inst_10993,inst_10994,inst_10995,inst_10996,inst_10997,inst_10998,inst_10999,inst_11000,inst_11001,inst_11002,inst_11003,inst_11004,inst_11005,inst_11006,inst_11007,inst_11008,inst_11009,inst_11010__$1,state_val_11836,c__6459__auto___12267){
return (function (p1__10779_SHARP_){
return cljs.core._EQ_.call(null,type,p1__10779_SHARP_);
});})(i__11013,type,sprite,obj,c__4384__auto__,size__4385__auto__,b__11014,s__11012__$2,temp__4126__auto__,depth_compare,player_stars_text,player_standing_texs,player_shadow,close_QMARK_,obstacle_types,polar_object_coords,trees,player_standing_sway,loader,player_walking_texs,shadow_tex,_,tex,hit_sfx,lobster_big,game_map,star_tex,tufts,pickup_textures,perlin_channel,title_text,floor_objects,pickup_sfx,tilemap,make_pickup,varela,wait,player,player_stars_icon,inst_10828,inst_10862,inst_10853,inst_10879,inst_10850,inst_10830,inst_10812,inst_11010,inst_10829,inst_11018,inst_10906,inst_10849,inst_11023,inst_10840,inst_10938,inst_10848,inst_10856,inst_10827,inst_10818,inst_10843,inst_11021,inst_10934,inst_11022,inst_10826,inst_10933,inst_10876,inst_10817,inst_10825,inst_10824,inst_10821,inst_10859,inst_10935,inst_10811,inst_10869,inst_11017,inst_10933__$1,inst_10934__$1,inst_10935__$1,inst_10938__$1,inst_10939,inst_10940,inst_10941,inst_10942,inst_10943,inst_10944,inst_10945,inst_10946,inst_10947,inst_10948,inst_10949,inst_10950,inst_10951,inst_10952,inst_10953,inst_10954,inst_10955,inst_10956,inst_10957,inst_10958,inst_10959,inst_10960,inst_10961,inst_10962,inst_10963,inst_10964,inst_10965,inst_10966,inst_10967,inst_10968,inst_10969,inst_10970,inst_10971,inst_10972,inst_10973,inst_10974,inst_10975,inst_10976,inst_10977,inst_10978,inst_10979,inst_10980,inst_10981,inst_10982,inst_10983,inst_10984,inst_10985,inst_10986,inst_10987,inst_10988,inst_10989,inst_10990,inst_10991,inst_10992,inst_10993,inst_10994,inst_10995,inst_10996,inst_10997,inst_10998,inst_10999,inst_11000,inst_11001,inst_11002,inst_11003,inst_11004,inst_11005,inst_11006,inst_11007,inst_11008,inst_11009,inst_11010__$1,state_val_11836,c__6459__auto___12267))
,floor_objects))){
sprite.floortile = true;

farn.sprite.set_anchor_BANG_.call(null,sprite,0.5,0.5);
} else {
}

return cljs.core.assoc.call(null,obj,new cljs.core.Keyword(null,"sprite","sprite",172516848),sprite,new cljs.core.Keyword(null,"scale","scale",-230427353),0.5);
})());

var G__12427 = (i__11013 + (1));
i__11013 = G__12427;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11014),iter__11011.call(null,cljs.core.chunk_rest.call(null,s__11012__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11014),null);
}
} else {
var obj = cljs.core.first.call(null,s__11012__$2);
return cljs.core.cons.call(null,(function (){var type = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(obj);
var sprite = farn.core.make_sprite.call(null,farn.gfx.get_texture.call(null,type));
if(cljs.core.truth_(cljs.core.some.call(null,((function (type,sprite,obj,s__11012__$2,temp__4126__auto__,depth_compare,player_stars_text,player_standing_texs,player_shadow,close_QMARK_,obstacle_types,polar_object_coords,trees,player_standing_sway,loader,player_walking_texs,shadow_tex,_,tex,hit_sfx,lobster_big,game_map,star_tex,tufts,pickup_textures,perlin_channel,title_text,floor_objects,pickup_sfx,tilemap,make_pickup,varela,wait,player,player_stars_icon,inst_10828,inst_10862,inst_10853,inst_10879,inst_10850,inst_10830,inst_10812,inst_11010,inst_10829,inst_11018,inst_10906,inst_10849,inst_11023,inst_10840,inst_10938,inst_10848,inst_10856,inst_10827,inst_10818,inst_10843,inst_11021,inst_10934,inst_11022,inst_10826,inst_10933,inst_10876,inst_10817,inst_10825,inst_10824,inst_10821,inst_10859,inst_10935,inst_10811,inst_10869,inst_11017,inst_10933__$1,inst_10934__$1,inst_10935__$1,inst_10938__$1,inst_10939,inst_10940,inst_10941,inst_10942,inst_10943,inst_10944,inst_10945,inst_10946,inst_10947,inst_10948,inst_10949,inst_10950,inst_10951,inst_10952,inst_10953,inst_10954,inst_10955,inst_10956,inst_10957,inst_10958,inst_10959,inst_10960,inst_10961,inst_10962,inst_10963,inst_10964,inst_10965,inst_10966,inst_10967,inst_10968,inst_10969,inst_10970,inst_10971,inst_10972,inst_10973,inst_10974,inst_10975,inst_10976,inst_10977,inst_10978,inst_10979,inst_10980,inst_10981,inst_10982,inst_10983,inst_10984,inst_10985,inst_10986,inst_10987,inst_10988,inst_10989,inst_10990,inst_10991,inst_10992,inst_10993,inst_10994,inst_10995,inst_10996,inst_10997,inst_10998,inst_10999,inst_11000,inst_11001,inst_11002,inst_11003,inst_11004,inst_11005,inst_11006,inst_11007,inst_11008,inst_11009,inst_11010__$1,state_val_11836,c__6459__auto___12267){
return (function (p1__10779_SHARP_){
return cljs.core._EQ_.call(null,type,p1__10779_SHARP_);
});})(type,sprite,obj,s__11012__$2,temp__4126__auto__,depth_compare,player_stars_text,player_standing_texs,player_shadow,close_QMARK_,obstacle_types,polar_object_coords,trees,player_standing_sway,loader,player_walking_texs,shadow_tex,_,tex,hit_sfx,lobster_big,game_map,star_tex,tufts,pickup_textures,perlin_channel,title_text,floor_objects,pickup_sfx,tilemap,make_pickup,varela,wait,player,player_stars_icon,inst_10828,inst_10862,inst_10853,inst_10879,inst_10850,inst_10830,inst_10812,inst_11010,inst_10829,inst_11018,inst_10906,inst_10849,inst_11023,inst_10840,inst_10938,inst_10848,inst_10856,inst_10827,inst_10818,inst_10843,inst_11021,inst_10934,inst_11022,inst_10826,inst_10933,inst_10876,inst_10817,inst_10825,inst_10824,inst_10821,inst_10859,inst_10935,inst_10811,inst_10869,inst_11017,inst_10933__$1,inst_10934__$1,inst_10935__$1,inst_10938__$1,inst_10939,inst_10940,inst_10941,inst_10942,inst_10943,inst_10944,inst_10945,inst_10946,inst_10947,inst_10948,inst_10949,inst_10950,inst_10951,inst_10952,inst_10953,inst_10954,inst_10955,inst_10956,inst_10957,inst_10958,inst_10959,inst_10960,inst_10961,inst_10962,inst_10963,inst_10964,inst_10965,inst_10966,inst_10967,inst_10968,inst_10969,inst_10970,inst_10971,inst_10972,inst_10973,inst_10974,inst_10975,inst_10976,inst_10977,inst_10978,inst_10979,inst_10980,inst_10981,inst_10982,inst_10983,inst_10984,inst_10985,inst_10986,inst_10987,inst_10988,inst_10989,inst_10990,inst_10991,inst_10992,inst_10993,inst_10994,inst_10995,inst_10996,inst_10997,inst_10998,inst_10999,inst_11000,inst_11001,inst_11002,inst_11003,inst_11004,inst_11005,inst_11006,inst_11007,inst_11008,inst_11009,inst_11010__$1,state_val_11836,c__6459__auto___12267))
,floor_objects))){
sprite.floortile = true;

farn.sprite.set_anchor_BANG_.call(null,sprite,0.5,0.5);
} else {
}

return cljs.core.assoc.call(null,obj,new cljs.core.Keyword(null,"sprite","sprite",172516848),sprite,new cljs.core.Keyword(null,"scale","scale",-230427353),0.5);
})(),iter__11011.call(null,cljs.core.rest.call(null,s__11012__$2)));
}
} else {
return null;
}
break;
}
});})(depth_compare,player_stars_text,player_standing_texs,player_shadow,close_QMARK_,obstacle_types,polar_object_coords,trees,player_standing_sway,loader,player_walking_texs,shadow_tex,_,tex,hit_sfx,lobster_big,game_map,star_tex,tufts,pickup_textures,perlin_channel,title_text,floor_objects,pickup_sfx,tilemap,make_pickup,varela,wait,player,player_stars_icon,inst_10828,inst_10862,inst_10853,inst_10879,inst_10850,inst_10830,inst_10812,inst_11010,inst_10829,inst_11018,inst_10906,inst_10849,inst_11023,inst_10840,inst_10938,inst_10848,inst_10856,inst_10827,inst_10818,inst_10843,inst_11021,inst_10934,inst_11022,inst_10826,inst_10933,inst_10876,inst_10817,inst_10825,inst_10824,inst_10821,inst_10859,inst_10935,inst_10811,inst_10869,inst_11017,inst_10933__$1,inst_10934__$1,inst_10935__$1,inst_10938__$1,inst_10939,inst_10940,inst_10941,inst_10942,inst_10943,inst_10944,inst_10945,inst_10946,inst_10947,inst_10948,inst_10949,inst_10950,inst_10951,inst_10952,inst_10953,inst_10954,inst_10955,inst_10956,inst_10957,inst_10958,inst_10959,inst_10960,inst_10961,inst_10962,inst_10963,inst_10964,inst_10965,inst_10966,inst_10967,inst_10968,inst_10969,inst_10970,inst_10971,inst_10972,inst_10973,inst_10974,inst_10975,inst_10976,inst_10977,inst_10978,inst_10979,inst_10980,inst_10981,inst_10982,inst_10983,inst_10984,inst_10985,inst_10986,inst_10987,inst_10988,inst_10989,inst_10990,inst_10991,inst_10992,inst_10993,inst_10994,inst_10995,inst_10996,inst_10997,inst_10998,inst_10999,inst_11000,inst_11001,inst_11002,inst_11003,inst_11004,inst_11005,inst_11006,inst_11007,inst_11008,inst_11009,inst_11010__$1,state_val_11836,c__6459__auto___12267))
,null,null));
});
;})(depth_compare,player_stars_text,player_standing_texs,player_shadow,close_QMARK_,obstacle_types,polar_object_coords,trees,player_standing_sway,loader,player_walking_texs,shadow_tex,_,tex,hit_sfx,lobster_big,game_map,star_tex,tufts,pickup_textures,perlin_channel,title_text,floor_objects,pickup_sfx,tilemap,make_pickup,varela,wait,player,player_stars_icon,inst_10828,inst_10862,inst_10853,inst_10879,inst_10850,inst_10830,inst_10812,inst_11010,inst_10829,inst_11018,inst_10906,inst_10849,inst_11023,inst_10840,inst_10938,inst_10848,inst_10856,inst_10827,inst_10818,inst_10843,inst_11021,inst_10934,inst_11022,inst_10826,inst_10933,inst_10876,inst_10817,inst_10825,inst_10824,inst_10821,inst_10859,inst_10935,inst_10811,inst_10869,inst_11017,inst_10933__$1,inst_10934__$1,inst_10935__$1,inst_10938__$1,inst_10939,inst_10940,inst_10941,inst_10942,inst_10943,inst_10944,inst_10945,inst_10946,inst_10947,inst_10948,inst_10949,inst_10950,inst_10951,inst_10952,inst_10953,inst_10954,inst_10955,inst_10956,inst_10957,inst_10958,inst_10959,inst_10960,inst_10961,inst_10962,inst_10963,inst_10964,inst_10965,inst_10966,inst_10967,inst_10968,inst_10969,inst_10970,inst_10971,inst_10972,inst_10973,inst_10974,inst_10975,inst_10976,inst_10977,inst_10978,inst_10979,inst_10980,inst_10981,inst_10982,inst_10983,inst_10984,inst_10985,inst_10986,inst_10987,inst_10988,inst_10989,inst_10990,inst_10991,inst_10992,inst_10993,inst_10994,inst_10995,inst_10996,inst_10997,inst_10998,inst_10999,inst_11000,inst_11001,inst_11002,inst_11003,inst_11004,inst_11005,inst_11006,inst_11007,inst_11008,inst_11009,inst_11010__$1,state_val_11836,c__6459__auto___12267))
})();
var inst_11016 = inst_11015.call(null,inst_11010__$1);
var inst_11017__$1 = cljs.core.doall.call(null,inst_11016);
var inst_11018__$1 = farn.spatial.hash_locations.call(null,inst_11017__$1,farn.core.cell_size);
var inst_11019 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_11020 = [(0),(0)];
var inst_11021__$1 = (new cljs.core.PersistentVector(null,2,(5),inst_11019,inst_11020,null));
var inst_11022__$1 = (function (){var depth_compare = inst_10934__$1;
var player_stars_text = inst_10853;
var player_standing_texs = inst_10840;
var player_shadow = inst_10830;
var close_QMARK_ = inst_10938__$1;
var player_pos = inst_11021__$1;
var obstacle_types = inst_10862;
var polar_object_coords = inst_10935__$1;
var trees = inst_10869;
var player_standing_sway = inst_10843;
var game_sprites = inst_11017__$1;
var loader = inst_10811;
var player_walking_texs = inst_10848;
var shadow_tex = inst_10829;
var _ = inst_10825;
var tex = inst_10827;
var hit_sfx = inst_10933__$1;
var lobster_big = inst_10817;
var game_map = inst_11010__$1;
var star_tex = inst_10849;
var tufts = inst_10876;
var game_space = inst_11018__$1;
var pickup_textures = inst_10856;
var perlin_channel = inst_10812;
var title_text = inst_10826;
var floor_objects = inst_10859;
var pickup_sfx = inst_10906;
var tilemap = inst_10824;
var make_pickup = inst_10879;
var varela = inst_10818;
var wait = inst_10821;
var player = inst_10828;
var player_stars_icon = inst_10850;
return ((function (depth_compare,player_stars_text,player_standing_texs,player_shadow,close_QMARK_,player_pos,obstacle_types,polar_object_coords,trees,player_standing_sway,game_sprites,loader,player_walking_texs,shadow_tex,_,tex,hit_sfx,lobster_big,game_map,star_tex,tufts,game_space,pickup_textures,perlin_channel,title_text,floor_objects,pickup_sfx,tilemap,make_pickup,varela,wait,player,player_stars_icon,inst_10828,inst_10862,inst_10853,inst_10879,inst_10850,inst_10830,inst_10812,inst_11010,inst_10829,inst_11018,inst_10906,inst_10849,inst_11023,inst_10840,inst_10938,inst_10848,inst_10856,inst_10827,inst_10818,inst_10843,inst_11021,inst_10934,inst_11022,inst_10826,inst_10933,inst_10876,inst_10817,inst_10825,inst_10824,inst_10821,inst_10859,inst_10935,inst_10811,inst_10869,inst_11017,inst_10933__$1,inst_10934__$1,inst_10935__$1,inst_10938__$1,inst_10939,inst_10940,inst_10941,inst_10942,inst_10943,inst_10944,inst_10945,inst_10946,inst_10947,inst_10948,inst_10949,inst_10950,inst_10951,inst_10952,inst_10953,inst_10954,inst_10955,inst_10956,inst_10957,inst_10958,inst_10959,inst_10960,inst_10961,inst_10962,inst_10963,inst_10964,inst_10965,inst_10966,inst_10967,inst_10968,inst_10969,inst_10970,inst_10971,inst_10972,inst_10973,inst_10974,inst_10975,inst_10976,inst_10977,inst_10978,inst_10979,inst_10980,inst_10981,inst_10982,inst_10983,inst_10984,inst_10985,inst_10986,inst_10987,inst_10988,inst_10989,inst_10990,inst_10991,inst_10992,inst_10993,inst_10994,inst_10995,inst_10996,inst_10997,inst_10998,inst_10999,inst_11000,inst_11001,inst_11002,inst_11003,inst_11004,inst_11005,inst_11006,inst_11007,inst_11008,inst_11009,inst_11010__$1,inst_11015,inst_11016,inst_11017__$1,inst_11018__$1,inst_11019,inst_11020,inst_11021__$1,state_val_11836,c__6459__auto___12267){
return (function (id){
var seq__12063 = cljs.core.seq.call(null,game_space.call(null,id));
var chunk__12064 = null;
var count__12065 = (0);
var i__12066 = (0);
while(true){
if((i__12066 < count__12065)){
var obj = cljs.core._nth.call(null,chunk__12064,i__12066);
farn.sprite.set_scale_BANG_.call(null,new cljs.core.Keyword(null,"sprite","sprite",172516848).cljs$core$IFn$_invoke$arity$1(obj),new cljs.core.Keyword(null,"scale","scale",-230427353).cljs$core$IFn$_invoke$arity$1(obj));

farn.sprite.set_pos_BANG_.call(null,new cljs.core.Keyword(null,"sprite","sprite",172516848).cljs$core$IFn$_invoke$arity$1(obj),(100000),(100000));

farn.core.main_stage.addChild(new cljs.core.Keyword(null,"sprite","sprite",172516848).cljs$core$IFn$_invoke$arity$1(obj));

var G__12428 = seq__12063;
var G__12429 = chunk__12064;
var G__12430 = count__12065;
var G__12431 = (i__12066 + (1));
seq__12063 = G__12428;
chunk__12064 = G__12429;
count__12065 = G__12430;
i__12066 = G__12431;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__12063);
if(temp__4126__auto__){
var seq__12063__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12063__$1)){
var c__4417__auto__ = cljs.core.chunk_first.call(null,seq__12063__$1);
var G__12432 = cljs.core.chunk_rest.call(null,seq__12063__$1);
var G__12433 = c__4417__auto__;
var G__12434 = cljs.core.count.call(null,c__4417__auto__);
var G__12435 = (0);
seq__12063 = G__12432;
chunk__12064 = G__12433;
count__12065 = G__12434;
i__12066 = G__12435;
continue;
} else {
var obj = cljs.core.first.call(null,seq__12063__$1);
farn.sprite.set_scale_BANG_.call(null,new cljs.core.Keyword(null,"sprite","sprite",172516848).cljs$core$IFn$_invoke$arity$1(obj),new cljs.core.Keyword(null,"scale","scale",-230427353).cljs$core$IFn$_invoke$arity$1(obj));

farn.sprite.set_pos_BANG_.call(null,new cljs.core.Keyword(null,"sprite","sprite",172516848).cljs$core$IFn$_invoke$arity$1(obj),(100000),(100000));

farn.core.main_stage.addChild(new cljs.core.Keyword(null,"sprite","sprite",172516848).cljs$core$IFn$_invoke$arity$1(obj));

var G__12436 = cljs.core.next.call(null,seq__12063__$1);
var G__12437 = null;
var G__12438 = (0);
var G__12439 = (0);
seq__12063 = G__12436;
chunk__12064 = G__12437;
count__12065 = G__12438;
i__12066 = G__12439;
continue;
}
} else {
return null;
}
}
break;
}
});
;})(depth_compare,player_stars_text,player_standing_texs,player_shadow,close_QMARK_,player_pos,obstacle_types,polar_object_coords,trees,player_standing_sway,game_sprites,loader,player_walking_texs,shadow_tex,_,tex,hit_sfx,lobster_big,game_map,star_tex,tufts,game_space,pickup_textures,perlin_channel,title_text,floor_objects,pickup_sfx,tilemap,make_pickup,varela,wait,player,player_stars_icon,inst_10828,inst_10862,inst_10853,inst_10879,inst_10850,inst_10830,inst_10812,inst_11010,inst_10829,inst_11018,inst_10906,inst_10849,inst_11023,inst_10840,inst_10938,inst_10848,inst_10856,inst_10827,inst_10818,inst_10843,inst_11021,inst_10934,inst_11022,inst_10826,inst_10933,inst_10876,inst_10817,inst_10825,inst_10824,inst_10821,inst_10859,inst_10935,inst_10811,inst_10869,inst_11017,inst_10933__$1,inst_10934__$1,inst_10935__$1,inst_10938__$1,inst_10939,inst_10940,inst_10941,inst_10942,inst_10943,inst_10944,inst_10945,inst_10946,inst_10947,inst_10948,inst_10949,inst_10950,inst_10951,inst_10952,inst_10953,inst_10954,inst_10955,inst_10956,inst_10957,inst_10958,inst_10959,inst_10960,inst_10961,inst_10962,inst_10963,inst_10964,inst_10965,inst_10966,inst_10967,inst_10968,inst_10969,inst_10970,inst_10971,inst_10972,inst_10973,inst_10974,inst_10975,inst_10976,inst_10977,inst_10978,inst_10979,inst_10980,inst_10981,inst_10982,inst_10983,inst_10984,inst_10985,inst_10986,inst_10987,inst_10988,inst_10989,inst_10990,inst_10991,inst_10992,inst_10993,inst_10994,inst_10995,inst_10996,inst_10997,inst_10998,inst_10999,inst_11000,inst_11001,inst_11002,inst_11003,inst_11004,inst_11005,inst_11006,inst_11007,inst_11008,inst_11009,inst_11010__$1,inst_11015,inst_11016,inst_11017__$1,inst_11018__$1,inst_11019,inst_11020,inst_11021__$1,state_val_11836,c__6459__auto___12267))
})();
var inst_11023__$1 = (function (){var add_cell_BANG_ = inst_11022__$1;
var depth_compare = inst_10934__$1;
var player_stars_text = inst_10853;
var player_standing_texs = inst_10840;
var player_shadow = inst_10830;
var close_QMARK_ = inst_10938__$1;
var player_pos = inst_11021__$1;
var obstacle_types = inst_10862;
var polar_object_coords = inst_10935__$1;
var trees = inst_10869;
var player_standing_sway = inst_10843;
var game_sprites = inst_11017__$1;
var loader = inst_10811;
var player_walking_texs = inst_10848;
var shadow_tex = inst_10829;
var _ = inst_10825;
var tex = inst_10827;
var hit_sfx = inst_10933__$1;
var lobster_big = inst_10817;
var game_map = inst_11010__$1;
var star_tex = inst_10849;
var tufts = inst_10876;
var game_space = inst_11018__$1;
var pickup_textures = inst_10856;
var perlin_channel = inst_10812;
var title_text = inst_10826;
var floor_objects = inst_10859;
var pickup_sfx = inst_10906;
var tilemap = inst_10824;
var make_pickup = inst_10879;
var varela = inst_10818;
var wait = inst_10821;
var player = inst_10828;
var player_stars_icon = inst_10850;
return ((function (add_cell_BANG_,depth_compare,player_stars_text,player_standing_texs,player_shadow,close_QMARK_,player_pos,obstacle_types,polar_object_coords,trees,player_standing_sway,game_sprites,loader,player_walking_texs,shadow_tex,_,tex,hit_sfx,lobster_big,game_map,star_tex,tufts,game_space,pickup_textures,perlin_channel,title_text,floor_objects,pickup_sfx,tilemap,make_pickup,varela,wait,player,player_stars_icon,inst_10828,inst_10862,inst_10853,inst_10879,inst_10850,inst_10830,inst_10812,inst_11010,inst_10829,inst_11018,inst_10906,inst_10849,inst_11023,inst_10840,inst_10938,inst_10848,inst_10856,inst_10827,inst_10818,inst_10843,inst_11021,inst_10934,inst_11022,inst_10826,inst_10933,inst_10876,inst_10817,inst_10825,inst_10824,inst_10821,inst_10859,inst_10935,inst_10811,inst_10869,inst_11017,inst_10933__$1,inst_10934__$1,inst_10935__$1,inst_10938__$1,inst_10939,inst_10940,inst_10941,inst_10942,inst_10943,inst_10944,inst_10945,inst_10946,inst_10947,inst_10948,inst_10949,inst_10950,inst_10951,inst_10952,inst_10953,inst_10954,inst_10955,inst_10956,inst_10957,inst_10958,inst_10959,inst_10960,inst_10961,inst_10962,inst_10963,inst_10964,inst_10965,inst_10966,inst_10967,inst_10968,inst_10969,inst_10970,inst_10971,inst_10972,inst_10973,inst_10974,inst_10975,inst_10976,inst_10977,inst_10978,inst_10979,inst_10980,inst_10981,inst_10982,inst_10983,inst_10984,inst_10985,inst_10986,inst_10987,inst_10988,inst_10989,inst_10990,inst_10991,inst_10992,inst_10993,inst_10994,inst_10995,inst_10996,inst_10997,inst_10998,inst_10999,inst_11000,inst_11001,inst_11002,inst_11003,inst_11004,inst_11005,inst_11006,inst_11007,inst_11008,inst_11009,inst_11010__$1,inst_11015,inst_11016,inst_11017__$1,inst_11018__$1,inst_11019,inst_11020,inst_11021__$1,inst_11022__$1,state_val_11836,c__6459__auto___12267){
return (function (id){
var seq__12067 = cljs.core.seq.call(null,game_space.call(null,id));
var chunk__12068 = null;
var count__12069 = (0);
var i__12070 = (0);
while(true){
if((i__12070 < count__12069)){
var obj = cljs.core._nth.call(null,chunk__12068,i__12070);
farn.core.main_stage.removeChild(new cljs.core.Keyword(null,"sprite","sprite",172516848).cljs$core$IFn$_invoke$arity$1(obj));

var G__12440 = seq__12067;
var G__12441 = chunk__12068;
var G__12442 = count__12069;
var G__12443 = (i__12070 + (1));
seq__12067 = G__12440;
chunk__12068 = G__12441;
count__12069 = G__12442;
i__12070 = G__12443;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__12067);
if(temp__4126__auto__){
var seq__12067__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12067__$1)){
var c__4417__auto__ = cljs.core.chunk_first.call(null,seq__12067__$1);
var G__12444 = cljs.core.chunk_rest.call(null,seq__12067__$1);
var G__12445 = c__4417__auto__;
var G__12446 = cljs.core.count.call(null,c__4417__auto__);
var G__12447 = (0);
seq__12067 = G__12444;
chunk__12068 = G__12445;
count__12069 = G__12446;
i__12070 = G__12447;
continue;
} else {
var obj = cljs.core.first.call(null,seq__12067__$1);
farn.core.main_stage.removeChild(new cljs.core.Keyword(null,"sprite","sprite",172516848).cljs$core$IFn$_invoke$arity$1(obj));

var G__12448 = cljs.core.next.call(null,seq__12067__$1);
var G__12449 = null;
var G__12450 = (0);
var G__12451 = (0);
seq__12067 = G__12448;
chunk__12068 = G__12449;
count__12069 = G__12450;
i__12070 = G__12451;
continue;
}
} else {
return null;
}
}
break;
}
});
;})(add_cell_BANG_,depth_compare,player_stars_text,player_standing_texs,player_shadow,close_QMARK_,player_pos,obstacle_types,polar_object_coords,trees,player_standing_sway,game_sprites,loader,player_walking_texs,shadow_tex,_,tex,hit_sfx,lobster_big,game_map,star_tex,tufts,game_space,pickup_textures,perlin_channel,title_text,floor_objects,pickup_sfx,tilemap,make_pickup,varela,wait,player,player_stars_icon,inst_10828,inst_10862,inst_10853,inst_10879,inst_10850,inst_10830,inst_10812,inst_11010,inst_10829,inst_11018,inst_10906,inst_10849,inst_11023,inst_10840,inst_10938,inst_10848,inst_10856,inst_10827,inst_10818,inst_10843,inst_11021,inst_10934,inst_11022,inst_10826,inst_10933,inst_10876,inst_10817,inst_10825,inst_10824,inst_10821,inst_10859,inst_10935,inst_10811,inst_10869,inst_11017,inst_10933__$1,inst_10934__$1,inst_10935__$1,inst_10938__$1,inst_10939,inst_10940,inst_10941,inst_10942,inst_10943,inst_10944,inst_10945,inst_10946,inst_10947,inst_10948,inst_10949,inst_10950,inst_10951,inst_10952,inst_10953,inst_10954,inst_10955,inst_10956,inst_10957,inst_10958,inst_10959,inst_10960,inst_10961,inst_10962,inst_10963,inst_10964,inst_10965,inst_10966,inst_10967,inst_10968,inst_10969,inst_10970,inst_10971,inst_10972,inst_10973,inst_10974,inst_10975,inst_10976,inst_10977,inst_10978,inst_10979,inst_10980,inst_10981,inst_10982,inst_10983,inst_10984,inst_10985,inst_10986,inst_10987,inst_10988,inst_10989,inst_10990,inst_10991,inst_10992,inst_10993,inst_10994,inst_10995,inst_10996,inst_10997,inst_10998,inst_10999,inst_11000,inst_11001,inst_11002,inst_11003,inst_11004,inst_11005,inst_11006,inst_11007,inst_11008,inst_11009,inst_11010__$1,inst_11015,inst_11016,inst_11017__$1,inst_11018__$1,inst_11019,inst_11020,inst_11021__$1,inst_11022__$1,state_val_11836,c__6459__auto___12267))
})();
var inst_11024 = farn.core.ui_stage.addChild(inst_10826);
var inst_11046 = cljs.core.async.chan.call(null,(1));
var inst_11047 = (function (){var add_cell_BANG_ = inst_11022__$1;
var depth_compare = inst_10934__$1;
var player_stars_text = inst_10853;
var player_standing_texs = inst_10840;
var player_shadow = inst_10830;
var close_QMARK_ = inst_10938__$1;
var player_pos = inst_11021__$1;
var obstacle_types = inst_10862;
var polar_object_coords = inst_10935__$1;
var trees = inst_10869;
var player_standing_sway = inst_10843;
var game_sprites = inst_11017__$1;
var loader = inst_10811;
var player_walking_texs = inst_10848;
var shadow_tex = inst_10829;
var _ = inst_10825;
var tex = inst_10827;
var c__6459__auto____$1 = inst_11046;
var hit_sfx = inst_10933__$1;
var lobster_big = inst_10817;
var game_map = inst_11010__$1;
var star_tex = inst_10849;
var remove_cell_BANG_ = inst_11023__$1;
var tufts = inst_10876;
var game_space = inst_11018__$1;
var pickup_textures = inst_10856;
var perlin_channel = inst_10812;
var title_text = inst_10826;
var floor_objects = inst_10859;
var pickup_sfx = inst_10906;
var tilemap = inst_10824;
var make_pickup = inst_10879;
var varela = inst_10818;
var wait = inst_10821;
var player = inst_10828;
var player_stars_icon = inst_10850;
return ((function (add_cell_BANG_,depth_compare,player_stars_text,player_standing_texs,player_shadow,close_QMARK_,player_pos,obstacle_types,polar_object_coords,trees,player_standing_sway,game_sprites,loader,player_walking_texs,shadow_tex,_,tex,c__6459__auto____$1,hit_sfx,lobster_big,game_map,star_tex,remove_cell_BANG_,tufts,game_space,pickup_textures,perlin_channel,title_text,floor_objects,pickup_sfx,tilemap,make_pickup,varela,wait,player,player_stars_icon,inst_10828,inst_10862,inst_10853,inst_10879,inst_10850,inst_10830,inst_10812,inst_11010,inst_10829,inst_11018,inst_10906,inst_10849,inst_11023,inst_10840,inst_10938,inst_10848,inst_10856,inst_10827,inst_10818,inst_10843,inst_11021,inst_10934,inst_11022,inst_10826,inst_10933,inst_10876,inst_10817,inst_10825,inst_10824,inst_10821,inst_10859,inst_10935,inst_10811,inst_10869,inst_11017,inst_10933__$1,inst_10934__$1,inst_10935__$1,inst_10938__$1,inst_10939,inst_10940,inst_10941,inst_10942,inst_10943,inst_10944,inst_10945,inst_10946,inst_10947,inst_10948,inst_10949,inst_10950,inst_10951,inst_10952,inst_10953,inst_10954,inst_10955,inst_10956,inst_10957,inst_10958,inst_10959,inst_10960,inst_10961,inst_10962,inst_10963,inst_10964,inst_10965,inst_10966,inst_10967,inst_10968,inst_10969,inst_10970,inst_10971,inst_10972,inst_10973,inst_10974,inst_10975,inst_10976,inst_10977,inst_10978,inst_10979,inst_10980,inst_10981,inst_10982,inst_10983,inst_10984,inst_10985,inst_10986,inst_10987,inst_10988,inst_10989,inst_10990,inst_10991,inst_10992,inst_10993,inst_10994,inst_10995,inst_10996,inst_10997,inst_10998,inst_10999,inst_11000,inst_11001,inst_11002,inst_11003,inst_11004,inst_11005,inst_11006,inst_11007,inst_11008,inst_11009,inst_11010__$1,inst_11015,inst_11016,inst_11017__$1,inst_11018__$1,inst_11019,inst_11020,inst_11021__$1,inst_11022__$1,inst_11023__$1,inst_11024,inst_11046,state_val_11836,c__6459__auto___12267){
return (function (){
var f__6460__auto__ = (function (){var switch__6444__auto__ = ((function (add_cell_BANG_,depth_compare,player_stars_text,player_standing_texs,player_shadow,close_QMARK_,player_pos,obstacle_types,polar_object_coords,trees,player_standing_sway,game_sprites,loader,player_walking_texs,shadow_tex,_,tex,c__6459__auto____$1,hit_sfx,lobster_big,game_map,star_tex,remove_cell_BANG_,tufts,game_space,pickup_textures,perlin_channel,title_text,floor_objects,pickup_sfx,tilemap,make_pickup,varela,wait,player,player_stars_icon,inst_10828,inst_10862,inst_10853,inst_10879,inst_10850,inst_10830,inst_10812,inst_11010,inst_10829,inst_11018,inst_10906,inst_10849,inst_11023,inst_10840,inst_10938,inst_10848,inst_10856,inst_10827,inst_10818,inst_10843,inst_11021,inst_10934,inst_11022,inst_10826,inst_10933,inst_10876,inst_10817,inst_10825,inst_10824,inst_10821,inst_10859,inst_10935,inst_10811,inst_10869,inst_11017,inst_10933__$1,inst_10934__$1,inst_10935__$1,inst_10938__$1,inst_10939,inst_10940,inst_10941,inst_10942,inst_10943,inst_10944,inst_10945,inst_10946,inst_10947,inst_10948,inst_10949,inst_10950,inst_10951,inst_10952,inst_10953,inst_10954,inst_10955,inst_10956,inst_10957,inst_10958,inst_10959,inst_10960,inst_10961,inst_10962,inst_10963,inst_10964,inst_10965,inst_10966,inst_10967,inst_10968,inst_10969,inst_10970,inst_10971,inst_10972,inst_10973,inst_10974,inst_10975,inst_10976,inst_10977,inst_10978,inst_10979,inst_10980,inst_10981,inst_10982,inst_10983,inst_10984,inst_10985,inst_10986,inst_10987,inst_10988,inst_10989,inst_10990,inst_10991,inst_10992,inst_10993,inst_10994,inst_10995,inst_10996,inst_10997,inst_10998,inst_10999,inst_11000,inst_11001,inst_11002,inst_11003,inst_11004,inst_11005,inst_11006,inst_11007,inst_11008,inst_11009,inst_11010__$1,inst_11015,inst_11016,inst_11017__$1,inst_11018__$1,inst_11019,inst_11020,inst_11021__$1,inst_11022__$1,inst_11023__$1,inst_11024,inst_11046,state_val_11836,c__6459__auto___12267){
return (function (state_11044){
var state_val_11045 = (state_11044[(1)]);
if((state_val_11045 === (7))){
var inst_11036 = (state_11044[(2)]);
var state_11044__$1 = (function (){var statearr_12071 = state_11044;
(statearr_12071[(7)] = inst_11036);

return statearr_12071;
})();
var statearr_12072_12452 = state_11044__$1;
(statearr_12072_12452[(2)] = null);

(statearr_12072_12452[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11045 === (6))){
var inst_11040 = (state_11044[(2)]);
var state_11044__$1 = state_11044;
var statearr_12073_12453 = state_11044__$1;
(statearr_12073_12453[(2)] = inst_11040);

(statearr_12073_12453[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11045 === (5))){
var state_11044__$1 = state_11044;
var statearr_12074_12454 = state_11044__$1;
(statearr_12074_12454[(2)] = null);

(statearr_12074_12454[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11045 === (4))){
var inst_11025 = (state_11044[(8)]);
var inst_11028 = window.innerWidth;
var inst_11029 = window.innerHeight;
var inst_11030 = (inst_11028 / (2));
var inst_11031 = (inst_11029 / (2));
var inst_11032 = (- inst_11031);
var inst_11033 = (inst_11032 + (100));
var inst_11034 = farn.sprite.set_pos_BANG_.call(null,title_text,(0),inst_11033);
var state_11044__$1 = (function (){var statearr_12075 = state_11044;
(statearr_12075[(9)] = inst_11034);

(statearr_12075[(10)] = inst_11030);

return statearr_12075;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11044__$1,(7),inst_11025);
} else {
if((state_val_11045 === (3))){
var inst_11042 = (state_11044[(2)]);
var state_11044__$1 = state_11044;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11044__$1,inst_11042);
} else {
if((state_val_11045 === (2))){
var state_11044__$1 = state_11044;
var statearr_12076_12455 = state_11044__$1;
(statearr_12076_12455[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11045 === (1))){
var inst_11025 = farn.events.new_resize_chan.call(null);
var state_11044__$1 = (function (){var statearr_12078 = state_11044;
(statearr_12078[(8)] = inst_11025);

return statearr_12078;
})();
var statearr_12079_12456 = state_11044__$1;
(statearr_12079_12456[(2)] = null);

(statearr_12079_12456[(1)] = (2));


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
});})(add_cell_BANG_,depth_compare,player_stars_text,player_standing_texs,player_shadow,close_QMARK_,player_pos,obstacle_types,polar_object_coords,trees,player_standing_sway,game_sprites,loader,player_walking_texs,shadow_tex,_,tex,c__6459__auto____$1,hit_sfx,lobster_big,game_map,star_tex,remove_cell_BANG_,tufts,game_space,pickup_textures,perlin_channel,title_text,floor_objects,pickup_sfx,tilemap,make_pickup,varela,wait,player,player_stars_icon,inst_10828,inst_10862,inst_10853,inst_10879,inst_10850,inst_10830,inst_10812,inst_11010,inst_10829,inst_11018,inst_10906,inst_10849,inst_11023,inst_10840,inst_10938,inst_10848,inst_10856,inst_10827,inst_10818,inst_10843,inst_11021,inst_10934,inst_11022,inst_10826,inst_10933,inst_10876,inst_10817,inst_10825,inst_10824,inst_10821,inst_10859,inst_10935,inst_10811,inst_10869,inst_11017,inst_10933__$1,inst_10934__$1,inst_10935__$1,inst_10938__$1,inst_10939,inst_10940,inst_10941,inst_10942,inst_10943,inst_10944,inst_10945,inst_10946,inst_10947,inst_10948,inst_10949,inst_10950,inst_10951,inst_10952,inst_10953,inst_10954,inst_10955,inst_10956,inst_10957,inst_10958,inst_10959,inst_10960,inst_10961,inst_10962,inst_10963,inst_10964,inst_10965,inst_10966,inst_10967,inst_10968,inst_10969,inst_10970,inst_10971,inst_10972,inst_10973,inst_10974,inst_10975,inst_10976,inst_10977,inst_10978,inst_10979,inst_10980,inst_10981,inst_10982,inst_10983,inst_10984,inst_10985,inst_10986,inst_10987,inst_10988,inst_10989,inst_10990,inst_10991,inst_10992,inst_10993,inst_10994,inst_10995,inst_10996,inst_10997,inst_10998,inst_10999,inst_11000,inst_11001,inst_11002,inst_11003,inst_11004,inst_11005,inst_11006,inst_11007,inst_11008,inst_11009,inst_11010__$1,inst_11015,inst_11016,inst_11017__$1,inst_11018__$1,inst_11019,inst_11020,inst_11021__$1,inst_11022__$1,inst_11023__$1,inst_11024,inst_11046,state_val_11836,c__6459__auto___12267))
;
return ((function (switch__6444__auto__,add_cell_BANG_,depth_compare,player_stars_text,player_standing_texs,player_shadow,close_QMARK_,player_pos,obstacle_types,polar_object_coords,trees,player_standing_sway,game_sprites,loader,player_walking_texs,shadow_tex,_,tex,c__6459__auto____$1,hit_sfx,lobster_big,game_map,star_tex,remove_cell_BANG_,tufts,game_space,pickup_textures,perlin_channel,title_text,floor_objects,pickup_sfx,tilemap,make_pickup,varela,wait,player,player_stars_icon,inst_10828,inst_10862,inst_10853,inst_10879,inst_10850,inst_10830,inst_10812,inst_11010,inst_10829,inst_11018,inst_10906,inst_10849,inst_11023,inst_10840,inst_10938,inst_10848,inst_10856,inst_10827,inst_10818,inst_10843,inst_11021,inst_10934,inst_11022,inst_10826,inst_10933,inst_10876,inst_10817,inst_10825,inst_10824,inst_10821,inst_10859,inst_10935,inst_10811,inst_10869,inst_11017,inst_10933__$1,inst_10934__$1,inst_10935__$1,inst_10938__$1,inst_10939,inst_10940,inst_10941,inst_10942,inst_10943,inst_10944,inst_10945,inst_10946,inst_10947,inst_10948,inst_10949,inst_10950,inst_10951,inst_10952,inst_10953,inst_10954,inst_10955,inst_10956,inst_10957,inst_10958,inst_10959,inst_10960,inst_10961,inst_10962,inst_10963,inst_10964,inst_10965,inst_10966,inst_10967,inst_10968,inst_10969,inst_10970,inst_10971,inst_10972,inst_10973,inst_10974,inst_10975,inst_10976,inst_10977,inst_10978,inst_10979,inst_10980,inst_10981,inst_10982,inst_10983,inst_10984,inst_10985,inst_10986,inst_10987,inst_10988,inst_10989,inst_10990,inst_10991,inst_10992,inst_10993,inst_10994,inst_10995,inst_10996,inst_10997,inst_10998,inst_10999,inst_11000,inst_11001,inst_11002,inst_11003,inst_11004,inst_11005,inst_11006,inst_11007,inst_11008,inst_11009,inst_11010__$1,inst_11015,inst_11016,inst_11017__$1,inst_11018__$1,inst_11019,inst_11020,inst_11021__$1,inst_11022__$1,inst_11023__$1,inst_11024,inst_11046,state_val_11836,c__6459__auto___12267){
return (function() {
var state_machine__6445__auto__ = null;
var state_machine__6445__auto____0 = (function (){
var statearr_12083 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_12083[(0)] = state_machine__6445__auto__);

(statearr_12083[(1)] = (1));

return statearr_12083;
});
var state_machine__6445__auto____1 = (function (state_11044){
while(true){
var ret_value__6446__auto__ = (function (){try{while(true){
var result__6447__auto__ = switch__6444__auto__.call(null,state_11044);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6447__auto__;
}
break;
}
}catch (e12084){if((e12084 instanceof Object)){
var ex__6448__auto__ = e12084;
var statearr_12085_12457 = state_11044;
(statearr_12085_12457[(5)] = ex__6448__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11044);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12084;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12458 = state_11044;
state_11044 = G__12458;
continue;
} else {
return ret_value__6446__auto__;
}
break;
}
});
state_machine__6445__auto__ = function(state_11044){
switch(arguments.length){
case 0:
return state_machine__6445__auto____0.call(this);
case 1:
return state_machine__6445__auto____1.call(this,state_11044);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6445__auto____0;
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6445__auto____1;
return state_machine__6445__auto__;
})()
;})(switch__6444__auto__,add_cell_BANG_,depth_compare,player_stars_text,player_standing_texs,player_shadow,close_QMARK_,player_pos,obstacle_types,polar_object_coords,trees,player_standing_sway,game_sprites,loader,player_walking_texs,shadow_tex,_,tex,c__6459__auto____$1,hit_sfx,lobster_big,game_map,star_tex,remove_cell_BANG_,tufts,game_space,pickup_textures,perlin_channel,title_text,floor_objects,pickup_sfx,tilemap,make_pickup,varela,wait,player,player_stars_icon,inst_10828,inst_10862,inst_10853,inst_10879,inst_10850,inst_10830,inst_10812,inst_11010,inst_10829,inst_11018,inst_10906,inst_10849,inst_11023,inst_10840,inst_10938,inst_10848,inst_10856,inst_10827,inst_10818,inst_10843,inst_11021,inst_10934,inst_11022,inst_10826,inst_10933,inst_10876,inst_10817,inst_10825,inst_10824,inst_10821,inst_10859,inst_10935,inst_10811,inst_10869,inst_11017,inst_10933__$1,inst_10934__$1,inst_10935__$1,inst_10938__$1,inst_10939,inst_10940,inst_10941,inst_10942,inst_10943,inst_10944,inst_10945,inst_10946,inst_10947,inst_10948,inst_10949,inst_10950,inst_10951,inst_10952,inst_10953,inst_10954,inst_10955,inst_10956,inst_10957,inst_10958,inst_10959,inst_10960,inst_10961,inst_10962,inst_10963,inst_10964,inst_10965,inst_10966,inst_10967,inst_10968,inst_10969,inst_10970,inst_10971,inst_10972,inst_10973,inst_10974,inst_10975,inst_10976,inst_10977,inst_10978,inst_10979,inst_10980,inst_10981,inst_10982,inst_10983,inst_10984,inst_10985,inst_10986,inst_10987,inst_10988,inst_10989,inst_10990,inst_10991,inst_10992,inst_10993,inst_10994,inst_10995,inst_10996,inst_10997,inst_10998,inst_10999,inst_11000,inst_11001,inst_11002,inst_11003,inst_11004,inst_11005,inst_11006,inst_11007,inst_11008,inst_11009,inst_11010__$1,inst_11015,inst_11016,inst_11017__$1,inst_11018__$1,inst_11019,inst_11020,inst_11021__$1,inst_11022__$1,inst_11023__$1,inst_11024,inst_11046,state_val_11836,c__6459__auto___12267))
})();
var state__6461__auto__ = (function (){var statearr_12086 = f__6460__auto__.call(null);
(statearr_12086[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6459__auto____$1);

return statearr_12086;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6461__auto__);
});
;})(add_cell_BANG_,depth_compare,player_stars_text,player_standing_texs,player_shadow,close_QMARK_,player_pos,obstacle_types,polar_object_coords,trees,player_standing_sway,game_sprites,loader,player_walking_texs,shadow_tex,_,tex,c__6459__auto____$1,hit_sfx,lobster_big,game_map,star_tex,remove_cell_BANG_,tufts,game_space,pickup_textures,perlin_channel,title_text,floor_objects,pickup_sfx,tilemap,make_pickup,varela,wait,player,player_stars_icon,inst_10828,inst_10862,inst_10853,inst_10879,inst_10850,inst_10830,inst_10812,inst_11010,inst_10829,inst_11018,inst_10906,inst_10849,inst_11023,inst_10840,inst_10938,inst_10848,inst_10856,inst_10827,inst_10818,inst_10843,inst_11021,inst_10934,inst_11022,inst_10826,inst_10933,inst_10876,inst_10817,inst_10825,inst_10824,inst_10821,inst_10859,inst_10935,inst_10811,inst_10869,inst_11017,inst_10933__$1,inst_10934__$1,inst_10935__$1,inst_10938__$1,inst_10939,inst_10940,inst_10941,inst_10942,inst_10943,inst_10944,inst_10945,inst_10946,inst_10947,inst_10948,inst_10949,inst_10950,inst_10951,inst_10952,inst_10953,inst_10954,inst_10955,inst_10956,inst_10957,inst_10958,inst_10959,inst_10960,inst_10961,inst_10962,inst_10963,inst_10964,inst_10965,inst_10966,inst_10967,inst_10968,inst_10969,inst_10970,inst_10971,inst_10972,inst_10973,inst_10974,inst_10975,inst_10976,inst_10977,inst_10978,inst_10979,inst_10980,inst_10981,inst_10982,inst_10983,inst_10984,inst_10985,inst_10986,inst_10987,inst_10988,inst_10989,inst_10990,inst_10991,inst_10992,inst_10993,inst_10994,inst_10995,inst_10996,inst_10997,inst_10998,inst_10999,inst_11000,inst_11001,inst_11002,inst_11003,inst_11004,inst_11005,inst_11006,inst_11007,inst_11008,inst_11009,inst_11010__$1,inst_11015,inst_11016,inst_11017__$1,inst_11018__$1,inst_11019,inst_11020,inst_11021__$1,inst_11022__$1,inst_11023__$1,inst_11024,inst_11046,state_val_11836,c__6459__auto___12267))
})();
var inst_11048 = cljs.core.async.impl.dispatch.run.call(null,inst_11047);
var inst_11059 = cljs.core.async.chan.call(null,(1));
var inst_11060 = (function (){var add_cell_BANG_ = inst_11022__$1;
var depth_compare = inst_10934__$1;
var player_stars_text = inst_10853;
var player_standing_texs = inst_10840;
var player_shadow = inst_10830;
var close_QMARK_ = inst_10938__$1;
var player_pos = inst_11021__$1;
var obstacle_types = inst_10862;
var polar_object_coords = inst_10935__$1;
var trees = inst_10869;
var player_standing_sway = inst_10843;
var game_sprites = inst_11017__$1;
var loader = inst_10811;
var player_walking_texs = inst_10848;
var shadow_tex = inst_10829;
var _ = inst_10825;
var tex = inst_10827;
var c__6459__auto____$1 = inst_11059;
var hit_sfx = inst_10933__$1;
var lobster_big = inst_10817;
var game_map = inst_11010__$1;
var star_tex = inst_10849;
var remove_cell_BANG_ = inst_11023__$1;
var tufts = inst_10876;
var game_space = inst_11018__$1;
var pickup_textures = inst_10856;
var perlin_channel = inst_10812;
var title_text = inst_10826;
var floor_objects = inst_10859;
var pickup_sfx = inst_10906;
var tilemap = inst_10824;
var make_pickup = inst_10879;
var varela = inst_10818;
var wait = inst_10821;
var player = inst_10828;
var player_stars_icon = inst_10850;
return ((function (add_cell_BANG_,depth_compare,player_stars_text,player_standing_texs,player_shadow,close_QMARK_,player_pos,obstacle_types,polar_object_coords,trees,player_standing_sway,game_sprites,loader,player_walking_texs,shadow_tex,_,tex,c__6459__auto____$1,hit_sfx,lobster_big,game_map,star_tex,remove_cell_BANG_,tufts,game_space,pickup_textures,perlin_channel,title_text,floor_objects,pickup_sfx,tilemap,make_pickup,varela,wait,player,player_stars_icon,inst_10828,inst_10862,inst_10853,inst_10879,inst_10850,inst_10830,inst_10812,inst_11010,inst_10829,inst_11018,inst_10906,inst_10849,inst_11023,inst_10840,inst_10938,inst_10848,inst_10856,inst_10827,inst_10818,inst_10843,inst_11021,inst_10934,inst_11022,inst_10826,inst_10933,inst_10876,inst_10817,inst_10825,inst_10824,inst_10821,inst_10859,inst_10935,inst_10811,inst_10869,inst_11017,inst_10933__$1,inst_10934__$1,inst_10935__$1,inst_10938__$1,inst_10939,inst_10940,inst_10941,inst_10942,inst_10943,inst_10944,inst_10945,inst_10946,inst_10947,inst_10948,inst_10949,inst_10950,inst_10951,inst_10952,inst_10953,inst_10954,inst_10955,inst_10956,inst_10957,inst_10958,inst_10959,inst_10960,inst_10961,inst_10962,inst_10963,inst_10964,inst_10965,inst_10966,inst_10967,inst_10968,inst_10969,inst_10970,inst_10971,inst_10972,inst_10973,inst_10974,inst_10975,inst_10976,inst_10977,inst_10978,inst_10979,inst_10980,inst_10981,inst_10982,inst_10983,inst_10984,inst_10985,inst_10986,inst_10987,inst_10988,inst_10989,inst_10990,inst_10991,inst_10992,inst_10993,inst_10994,inst_10995,inst_10996,inst_10997,inst_10998,inst_10999,inst_11000,inst_11001,inst_11002,inst_11003,inst_11004,inst_11005,inst_11006,inst_11007,inst_11008,inst_11009,inst_11010__$1,inst_11015,inst_11016,inst_11017__$1,inst_11018__$1,inst_11019,inst_11020,inst_11021__$1,inst_11022__$1,inst_11023__$1,inst_11024,inst_11046,inst_11047,inst_11048,inst_11059,state_val_11836,c__6459__auto___12267){
return (function (){
var f__6460__auto__ = (function (){var switch__6444__auto__ = ((function (add_cell_BANG_,depth_compare,player_stars_text,player_standing_texs,player_shadow,close_QMARK_,player_pos,obstacle_types,polar_object_coords,trees,player_standing_sway,game_sprites,loader,player_walking_texs,shadow_tex,_,tex,c__6459__auto____$1,hit_sfx,lobster_big,game_map,star_tex,remove_cell_BANG_,tufts,game_space,pickup_textures,perlin_channel,title_text,floor_objects,pickup_sfx,tilemap,make_pickup,varela,wait,player,player_stars_icon,inst_10828,inst_10862,inst_10853,inst_10879,inst_10850,inst_10830,inst_10812,inst_11010,inst_10829,inst_11018,inst_10906,inst_10849,inst_11023,inst_10840,inst_10938,inst_10848,inst_10856,inst_10827,inst_10818,inst_10843,inst_11021,inst_10934,inst_11022,inst_10826,inst_10933,inst_10876,inst_10817,inst_10825,inst_10824,inst_10821,inst_10859,inst_10935,inst_10811,inst_10869,inst_11017,inst_10933__$1,inst_10934__$1,inst_10935__$1,inst_10938__$1,inst_10939,inst_10940,inst_10941,inst_10942,inst_10943,inst_10944,inst_10945,inst_10946,inst_10947,inst_10948,inst_10949,inst_10950,inst_10951,inst_10952,inst_10953,inst_10954,inst_10955,inst_10956,inst_10957,inst_10958,inst_10959,inst_10960,inst_10961,inst_10962,inst_10963,inst_10964,inst_10965,inst_10966,inst_10967,inst_10968,inst_10969,inst_10970,inst_10971,inst_10972,inst_10973,inst_10974,inst_10975,inst_10976,inst_10977,inst_10978,inst_10979,inst_10980,inst_10981,inst_10982,inst_10983,inst_10984,inst_10985,inst_10986,inst_10987,inst_10988,inst_10989,inst_10990,inst_10991,inst_10992,inst_10993,inst_10994,inst_10995,inst_10996,inst_10997,inst_10998,inst_10999,inst_11000,inst_11001,inst_11002,inst_11003,inst_11004,inst_11005,inst_11006,inst_11007,inst_11008,inst_11009,inst_11010__$1,inst_11015,inst_11016,inst_11017__$1,inst_11018__$1,inst_11019,inst_11020,inst_11021__$1,inst_11022__$1,inst_11023__$1,inst_11024,inst_11046,inst_11047,inst_11048,inst_11059,state_val_11836,c__6459__auto___12267){
return (function (state_11057){
var state_val_11058 = (state_11057[(1)]);
if((state_val_11058 === (3))){
var inst_11054 = (state_11057[(2)]);
var inst_11055 = farn.core.ui_stage.removeChild(title_text);
var state_11057__$1 = (function (){var statearr_12087 = state_11057;
(statearr_12087[(7)] = inst_11054);

return statearr_12087;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11057__$1,inst_11055);
} else {
if((state_val_11058 === (2))){
var inst_11051 = (state_11057[(2)]);
var inst_11052 = farn.gfx.fadeout.call(null,title_text,new cljs.core.Keyword(null,"duration","duration",1444101068),(1));
var state_11057__$1 = (function (){var statearr_12088 = state_11057;
(statearr_12088[(8)] = inst_11051);

return statearr_12088;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11057__$1,(3),inst_11052);
} else {
if((state_val_11058 === (1))){
var inst_11049 = cljs.core.async.timeout.call(null,(1000));
var state_11057__$1 = state_11057;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11057__$1,(2),inst_11049);
} else {
return null;
}
}
}
});})(add_cell_BANG_,depth_compare,player_stars_text,player_standing_texs,player_shadow,close_QMARK_,player_pos,obstacle_types,polar_object_coords,trees,player_standing_sway,game_sprites,loader,player_walking_texs,shadow_tex,_,tex,c__6459__auto____$1,hit_sfx,lobster_big,game_map,star_tex,remove_cell_BANG_,tufts,game_space,pickup_textures,perlin_channel,title_text,floor_objects,pickup_sfx,tilemap,make_pickup,varela,wait,player,player_stars_icon,inst_10828,inst_10862,inst_10853,inst_10879,inst_10850,inst_10830,inst_10812,inst_11010,inst_10829,inst_11018,inst_10906,inst_10849,inst_11023,inst_10840,inst_10938,inst_10848,inst_10856,inst_10827,inst_10818,inst_10843,inst_11021,inst_10934,inst_11022,inst_10826,inst_10933,inst_10876,inst_10817,inst_10825,inst_10824,inst_10821,inst_10859,inst_10935,inst_10811,inst_10869,inst_11017,inst_10933__$1,inst_10934__$1,inst_10935__$1,inst_10938__$1,inst_10939,inst_10940,inst_10941,inst_10942,inst_10943,inst_10944,inst_10945,inst_10946,inst_10947,inst_10948,inst_10949,inst_10950,inst_10951,inst_10952,inst_10953,inst_10954,inst_10955,inst_10956,inst_10957,inst_10958,inst_10959,inst_10960,inst_10961,inst_10962,inst_10963,inst_10964,inst_10965,inst_10966,inst_10967,inst_10968,inst_10969,inst_10970,inst_10971,inst_10972,inst_10973,inst_10974,inst_10975,inst_10976,inst_10977,inst_10978,inst_10979,inst_10980,inst_10981,inst_10982,inst_10983,inst_10984,inst_10985,inst_10986,inst_10987,inst_10988,inst_10989,inst_10990,inst_10991,inst_10992,inst_10993,inst_10994,inst_10995,inst_10996,inst_10997,inst_10998,inst_10999,inst_11000,inst_11001,inst_11002,inst_11003,inst_11004,inst_11005,inst_11006,inst_11007,inst_11008,inst_11009,inst_11010__$1,inst_11015,inst_11016,inst_11017__$1,inst_11018__$1,inst_11019,inst_11020,inst_11021__$1,inst_11022__$1,inst_11023__$1,inst_11024,inst_11046,inst_11047,inst_11048,inst_11059,state_val_11836,c__6459__auto___12267))
;
return ((function (switch__6444__auto__,add_cell_BANG_,depth_compare,player_stars_text,player_standing_texs,player_shadow,close_QMARK_,player_pos,obstacle_types,polar_object_coords,trees,player_standing_sway,game_sprites,loader,player_walking_texs,shadow_tex,_,tex,c__6459__auto____$1,hit_sfx,lobster_big,game_map,star_tex,remove_cell_BANG_,tufts,game_space,pickup_textures,perlin_channel,title_text,floor_objects,pickup_sfx,tilemap,make_pickup,varela,wait,player,player_stars_icon,inst_10828,inst_10862,inst_10853,inst_10879,inst_10850,inst_10830,inst_10812,inst_11010,inst_10829,inst_11018,inst_10906,inst_10849,inst_11023,inst_10840,inst_10938,inst_10848,inst_10856,inst_10827,inst_10818,inst_10843,inst_11021,inst_10934,inst_11022,inst_10826,inst_10933,inst_10876,inst_10817,inst_10825,inst_10824,inst_10821,inst_10859,inst_10935,inst_10811,inst_10869,inst_11017,inst_10933__$1,inst_10934__$1,inst_10935__$1,inst_10938__$1,inst_10939,inst_10940,inst_10941,inst_10942,inst_10943,inst_10944,inst_10945,inst_10946,inst_10947,inst_10948,inst_10949,inst_10950,inst_10951,inst_10952,inst_10953,inst_10954,inst_10955,inst_10956,inst_10957,inst_10958,inst_10959,inst_10960,inst_10961,inst_10962,inst_10963,inst_10964,inst_10965,inst_10966,inst_10967,inst_10968,inst_10969,inst_10970,inst_10971,inst_10972,inst_10973,inst_10974,inst_10975,inst_10976,inst_10977,inst_10978,inst_10979,inst_10980,inst_10981,inst_10982,inst_10983,inst_10984,inst_10985,inst_10986,inst_10987,inst_10988,inst_10989,inst_10990,inst_10991,inst_10992,inst_10993,inst_10994,inst_10995,inst_10996,inst_10997,inst_10998,inst_10999,inst_11000,inst_11001,inst_11002,inst_11003,inst_11004,inst_11005,inst_11006,inst_11007,inst_11008,inst_11009,inst_11010__$1,inst_11015,inst_11016,inst_11017__$1,inst_11018__$1,inst_11019,inst_11020,inst_11021__$1,inst_11022__$1,inst_11023__$1,inst_11024,inst_11046,inst_11047,inst_11048,inst_11059,state_val_11836,c__6459__auto___12267){
return (function() {
var state_machine__6445__auto__ = null;
var state_machine__6445__auto____0 = (function (){
var statearr_12092 = [null,null,null,null,null,null,null,null,null];
(statearr_12092[(0)] = state_machine__6445__auto__);

(statearr_12092[(1)] = (1));

return statearr_12092;
});
var state_machine__6445__auto____1 = (function (state_11057){
while(true){
var ret_value__6446__auto__ = (function (){try{while(true){
var result__6447__auto__ = switch__6444__auto__.call(null,state_11057);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6447__auto__;
}
break;
}
}catch (e12093){if((e12093 instanceof Object)){
var ex__6448__auto__ = e12093;
var statearr_12094_12459 = state_11057;
(statearr_12094_12459[(5)] = ex__6448__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11057);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12093;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12460 = state_11057;
state_11057 = G__12460;
continue;
} else {
return ret_value__6446__auto__;
}
break;
}
});
state_machine__6445__auto__ = function(state_11057){
switch(arguments.length){
case 0:
return state_machine__6445__auto____0.call(this);
case 1:
return state_machine__6445__auto____1.call(this,state_11057);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6445__auto____0;
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6445__auto____1;
return state_machine__6445__auto__;
})()
;})(switch__6444__auto__,add_cell_BANG_,depth_compare,player_stars_text,player_standing_texs,player_shadow,close_QMARK_,player_pos,obstacle_types,polar_object_coords,trees,player_standing_sway,game_sprites,loader,player_walking_texs,shadow_tex,_,tex,c__6459__auto____$1,hit_sfx,lobster_big,game_map,star_tex,remove_cell_BANG_,tufts,game_space,pickup_textures,perlin_channel,title_text,floor_objects,pickup_sfx,tilemap,make_pickup,varela,wait,player,player_stars_icon,inst_10828,inst_10862,inst_10853,inst_10879,inst_10850,inst_10830,inst_10812,inst_11010,inst_10829,inst_11018,inst_10906,inst_10849,inst_11023,inst_10840,inst_10938,inst_10848,inst_10856,inst_10827,inst_10818,inst_10843,inst_11021,inst_10934,inst_11022,inst_10826,inst_10933,inst_10876,inst_10817,inst_10825,inst_10824,inst_10821,inst_10859,inst_10935,inst_10811,inst_10869,inst_11017,inst_10933__$1,inst_10934__$1,inst_10935__$1,inst_10938__$1,inst_10939,inst_10940,inst_10941,inst_10942,inst_10943,inst_10944,inst_10945,inst_10946,inst_10947,inst_10948,inst_10949,inst_10950,inst_10951,inst_10952,inst_10953,inst_10954,inst_10955,inst_10956,inst_10957,inst_10958,inst_10959,inst_10960,inst_10961,inst_10962,inst_10963,inst_10964,inst_10965,inst_10966,inst_10967,inst_10968,inst_10969,inst_10970,inst_10971,inst_10972,inst_10973,inst_10974,inst_10975,inst_10976,inst_10977,inst_10978,inst_10979,inst_10980,inst_10981,inst_10982,inst_10983,inst_10984,inst_10985,inst_10986,inst_10987,inst_10988,inst_10989,inst_10990,inst_10991,inst_10992,inst_10993,inst_10994,inst_10995,inst_10996,inst_10997,inst_10998,inst_10999,inst_11000,inst_11001,inst_11002,inst_11003,inst_11004,inst_11005,inst_11006,inst_11007,inst_11008,inst_11009,inst_11010__$1,inst_11015,inst_11016,inst_11017__$1,inst_11018__$1,inst_11019,inst_11020,inst_11021__$1,inst_11022__$1,inst_11023__$1,inst_11024,inst_11046,inst_11047,inst_11048,inst_11059,state_val_11836,c__6459__auto___12267))
})();
var state__6461__auto__ = (function (){var statearr_12095 = f__6460__auto__.call(null);
(statearr_12095[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6459__auto____$1);

return statearr_12095;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6461__auto__);
});
;})(add_cell_BANG_,depth_compare,player_stars_text,player_standing_texs,player_shadow,close_QMARK_,player_pos,obstacle_types,polar_object_coords,trees,player_standing_sway,game_sprites,loader,player_walking_texs,shadow_tex,_,tex,c__6459__auto____$1,hit_sfx,lobster_big,game_map,star_tex,remove_cell_BANG_,tufts,game_space,pickup_textures,perlin_channel,title_text,floor_objects,pickup_sfx,tilemap,make_pickup,varela,wait,player,player_stars_icon,inst_10828,inst_10862,inst_10853,inst_10879,inst_10850,inst_10830,inst_10812,inst_11010,inst_10829,inst_11018,inst_10906,inst_10849,inst_11023,inst_10840,inst_10938,inst_10848,inst_10856,inst_10827,inst_10818,inst_10843,inst_11021,inst_10934,inst_11022,inst_10826,inst_10933,inst_10876,inst_10817,inst_10825,inst_10824,inst_10821,inst_10859,inst_10935,inst_10811,inst_10869,inst_11017,inst_10933__$1,inst_10934__$1,inst_10935__$1,inst_10938__$1,inst_10939,inst_10940,inst_10941,inst_10942,inst_10943,inst_10944,inst_10945,inst_10946,inst_10947,inst_10948,inst_10949,inst_10950,inst_10951,inst_10952,inst_10953,inst_10954,inst_10955,inst_10956,inst_10957,inst_10958,inst_10959,inst_10960,inst_10961,inst_10962,inst_10963,inst_10964,inst_10965,inst_10966,inst_10967,inst_10968,inst_10969,inst_10970,inst_10971,inst_10972,inst_10973,inst_10974,inst_10975,inst_10976,inst_10977,inst_10978,inst_10979,inst_10980,inst_10981,inst_10982,inst_10983,inst_10984,inst_10985,inst_10986,inst_10987,inst_10988,inst_10989,inst_10990,inst_10991,inst_10992,inst_10993,inst_10994,inst_10995,inst_10996,inst_10997,inst_10998,inst_10999,inst_11000,inst_11001,inst_11002,inst_11003,inst_11004,inst_11005,inst_11006,inst_11007,inst_11008,inst_11009,inst_11010__$1,inst_11015,inst_11016,inst_11017__$1,inst_11018__$1,inst_11019,inst_11020,inst_11021__$1,inst_11022__$1,inst_11023__$1,inst_11024,inst_11046,inst_11047,inst_11048,inst_11059,state_val_11836,c__6459__auto___12267))
})();
var inst_11061 = cljs.core.async.impl.dispatch.run.call(null,inst_11060);
var inst_11062 = farn.sprite.set_anchor_BANG_.call(null,inst_10850,(0),(0));
var inst_11063 = farn.sprite.set_scale_BANG_.call(null,inst_10850,0.7);
var inst_11064 = farn.sprite.set_anchor_BANG_.call(null,inst_10853,(0),(0));
var inst_11065 = farn.core.ui_stage.addChild(inst_10850);
var inst_11066 = farn.core.ui_stage.addChild(inst_10853);
var inst_11095 = cljs.core.async.chan.call(null,(1));
var inst_11096 = (function (){var add_cell_BANG_ = inst_11022__$1;
var depth_compare = inst_10934__$1;
var player_stars_text = inst_10853;
var player_standing_texs = inst_10840;
var player_shadow = inst_10830;
var close_QMARK_ = inst_10938__$1;
var player_pos = inst_11021__$1;
var obstacle_types = inst_10862;
var polar_object_coords = inst_10935__$1;
var trees = inst_10869;
var player_standing_sway = inst_10843;
var game_sprites = inst_11017__$1;
var loader = inst_10811;
var player_walking_texs = inst_10848;
var shadow_tex = inst_10829;
var _ = inst_10825;
var tex = inst_10827;
var c__6459__auto____$1 = inst_11095;
var hit_sfx = inst_10933__$1;
var lobster_big = inst_10817;
var game_map = inst_11010__$1;
var star_tex = inst_10849;
var remove_cell_BANG_ = inst_11023__$1;
var tufts = inst_10876;
var game_space = inst_11018__$1;
var pickup_textures = inst_10856;
var perlin_channel = inst_10812;
var title_text = inst_10826;
var floor_objects = inst_10859;
var pickup_sfx = inst_10906;
var tilemap = inst_10824;
var make_pickup = inst_10879;
var varela = inst_10818;
var wait = inst_10821;
var player = inst_10828;
var player_stars_icon = inst_10850;
return ((function (add_cell_BANG_,depth_compare,player_stars_text,player_standing_texs,player_shadow,close_QMARK_,player_pos,obstacle_types,polar_object_coords,trees,player_standing_sway,game_sprites,loader,player_walking_texs,shadow_tex,_,tex,c__6459__auto____$1,hit_sfx,lobster_big,game_map,star_tex,remove_cell_BANG_,tufts,game_space,pickup_textures,perlin_channel,title_text,floor_objects,pickup_sfx,tilemap,make_pickup,varela,wait,player,player_stars_icon,inst_10828,inst_10862,inst_10853,inst_10879,inst_10850,inst_10830,inst_10812,inst_11010,inst_10829,inst_11018,inst_10906,inst_10849,inst_11023,inst_10840,inst_10938,inst_10848,inst_10856,inst_10827,inst_10818,inst_10843,inst_11021,inst_10934,inst_11022,inst_10826,inst_10933,inst_10876,inst_10817,inst_10825,inst_10824,inst_10821,inst_10859,inst_10935,inst_10811,inst_10869,inst_11017,inst_10933__$1,inst_10934__$1,inst_10935__$1,inst_10938__$1,inst_10939,inst_10940,inst_10941,inst_10942,inst_10943,inst_10944,inst_10945,inst_10946,inst_10947,inst_10948,inst_10949,inst_10950,inst_10951,inst_10952,inst_10953,inst_10954,inst_10955,inst_10956,inst_10957,inst_10958,inst_10959,inst_10960,inst_10961,inst_10962,inst_10963,inst_10964,inst_10965,inst_10966,inst_10967,inst_10968,inst_10969,inst_10970,inst_10971,inst_10972,inst_10973,inst_10974,inst_10975,inst_10976,inst_10977,inst_10978,inst_10979,inst_10980,inst_10981,inst_10982,inst_10983,inst_10984,inst_10985,inst_10986,inst_10987,inst_10988,inst_10989,inst_10990,inst_10991,inst_10992,inst_10993,inst_10994,inst_10995,inst_10996,inst_10997,inst_10998,inst_10999,inst_11000,inst_11001,inst_11002,inst_11003,inst_11004,inst_11005,inst_11006,inst_11007,inst_11008,inst_11009,inst_11010__$1,inst_11015,inst_11016,inst_11017__$1,inst_11018__$1,inst_11019,inst_11020,inst_11021__$1,inst_11022__$1,inst_11023__$1,inst_11024,inst_11046,inst_11047,inst_11048,inst_11059,inst_11060,inst_11061,inst_11062,inst_11063,inst_11064,inst_11065,inst_11066,inst_11095,state_val_11836,c__6459__auto___12267){
return (function (){
var f__6460__auto__ = (function (){var switch__6444__auto__ = ((function (add_cell_BANG_,depth_compare,player_stars_text,player_standing_texs,player_shadow,close_QMARK_,player_pos,obstacle_types,polar_object_coords,trees,player_standing_sway,game_sprites,loader,player_walking_texs,shadow_tex,_,tex,c__6459__auto____$1,hit_sfx,lobster_big,game_map,star_tex,remove_cell_BANG_,tufts,game_space,pickup_textures,perlin_channel,title_text,floor_objects,pickup_sfx,tilemap,make_pickup,varela,wait,player,player_stars_icon,inst_10828,inst_10862,inst_10853,inst_10879,inst_10850,inst_10830,inst_10812,inst_11010,inst_10829,inst_11018,inst_10906,inst_10849,inst_11023,inst_10840,inst_10938,inst_10848,inst_10856,inst_10827,inst_10818,inst_10843,inst_11021,inst_10934,inst_11022,inst_10826,inst_10933,inst_10876,inst_10817,inst_10825,inst_10824,inst_10821,inst_10859,inst_10935,inst_10811,inst_10869,inst_11017,inst_10933__$1,inst_10934__$1,inst_10935__$1,inst_10938__$1,inst_10939,inst_10940,inst_10941,inst_10942,inst_10943,inst_10944,inst_10945,inst_10946,inst_10947,inst_10948,inst_10949,inst_10950,inst_10951,inst_10952,inst_10953,inst_10954,inst_10955,inst_10956,inst_10957,inst_10958,inst_10959,inst_10960,inst_10961,inst_10962,inst_10963,inst_10964,inst_10965,inst_10966,inst_10967,inst_10968,inst_10969,inst_10970,inst_10971,inst_10972,inst_10973,inst_10974,inst_10975,inst_10976,inst_10977,inst_10978,inst_10979,inst_10980,inst_10981,inst_10982,inst_10983,inst_10984,inst_10985,inst_10986,inst_10987,inst_10988,inst_10989,inst_10990,inst_10991,inst_10992,inst_10993,inst_10994,inst_10995,inst_10996,inst_10997,inst_10998,inst_10999,inst_11000,inst_11001,inst_11002,inst_11003,inst_11004,inst_11005,inst_11006,inst_11007,inst_11008,inst_11009,inst_11010__$1,inst_11015,inst_11016,inst_11017__$1,inst_11018__$1,inst_11019,inst_11020,inst_11021__$1,inst_11022__$1,inst_11023__$1,inst_11024,inst_11046,inst_11047,inst_11048,inst_11059,inst_11060,inst_11061,inst_11062,inst_11063,inst_11064,inst_11065,inst_11066,inst_11095,state_val_11836,c__6459__auto___12267){
return (function (state_11093){
var state_val_11094 = (state_11093[(1)]);
if((state_val_11094 === (7))){
var inst_11085 = (state_11093[(2)]);
var state_11093__$1 = (function (){var statearr_12096 = state_11093;
(statearr_12096[(7)] = inst_11085);

return statearr_12096;
})();
var statearr_12097_12461 = state_11093__$1;
(statearr_12097_12461[(2)] = null);

(statearr_12097_12461[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11094 === (6))){
var inst_11089 = (state_11093[(2)]);
var state_11093__$1 = state_11093;
var statearr_12098_12462 = state_11093__$1;
(statearr_12098_12462[(2)] = inst_11089);

(statearr_12098_12462[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11094 === (5))){
var state_11093__$1 = state_11093;
var statearr_12099_12463 = state_11093__$1;
(statearr_12099_12463[(2)] = null);

(statearr_12099_12463[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11094 === (4))){
var inst_11067 = (state_11093[(8)]);
var inst_11070 = window.innerWidth;
var inst_11071 = window.innerHeight;
var inst_11072 = (inst_11070 / (2));
var inst_11073 = (inst_11071 / (2));
var inst_11074 = (- inst_11072);
var inst_11075 = (inst_11074 + (5));
var inst_11076 = (- inst_11073);
var inst_11077 = (inst_11076 + (5));
var inst_11078 = farn.sprite.set_pos_BANG_.call(null,player_stars_icon,inst_11075,inst_11077);
var inst_11079 = (- inst_11072);
var inst_11080 = (inst_11079 + (45));
var inst_11081 = (- inst_11073);
var inst_11082 = (inst_11081 + (5));
var inst_11083 = farn.sprite.set_pos_BANG_.call(null,player_stars_text,inst_11080,inst_11082);
var state_11093__$1 = (function (){var statearr_12100 = state_11093;
(statearr_12100[(9)] = inst_11083);

(statearr_12100[(10)] = inst_11078);

return statearr_12100;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11093__$1,(7),inst_11067);
} else {
if((state_val_11094 === (3))){
var inst_11091 = (state_11093[(2)]);
var state_11093__$1 = state_11093;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11093__$1,inst_11091);
} else {
if((state_val_11094 === (2))){
var state_11093__$1 = state_11093;
var statearr_12101_12464 = state_11093__$1;
(statearr_12101_12464[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11094 === (1))){
var inst_11067 = farn.events.new_resize_chan.call(null);
var state_11093__$1 = (function (){var statearr_12103 = state_11093;
(statearr_12103[(8)] = inst_11067);

return statearr_12103;
})();
var statearr_12104_12465 = state_11093__$1;
(statearr_12104_12465[(2)] = null);

(statearr_12104_12465[(1)] = (2));


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
});})(add_cell_BANG_,depth_compare,player_stars_text,player_standing_texs,player_shadow,close_QMARK_,player_pos,obstacle_types,polar_object_coords,trees,player_standing_sway,game_sprites,loader,player_walking_texs,shadow_tex,_,tex,c__6459__auto____$1,hit_sfx,lobster_big,game_map,star_tex,remove_cell_BANG_,tufts,game_space,pickup_textures,perlin_channel,title_text,floor_objects,pickup_sfx,tilemap,make_pickup,varela,wait,player,player_stars_icon,inst_10828,inst_10862,inst_10853,inst_10879,inst_10850,inst_10830,inst_10812,inst_11010,inst_10829,inst_11018,inst_10906,inst_10849,inst_11023,inst_10840,inst_10938,inst_10848,inst_10856,inst_10827,inst_10818,inst_10843,inst_11021,inst_10934,inst_11022,inst_10826,inst_10933,inst_10876,inst_10817,inst_10825,inst_10824,inst_10821,inst_10859,inst_10935,inst_10811,inst_10869,inst_11017,inst_10933__$1,inst_10934__$1,inst_10935__$1,inst_10938__$1,inst_10939,inst_10940,inst_10941,inst_10942,inst_10943,inst_10944,inst_10945,inst_10946,inst_10947,inst_10948,inst_10949,inst_10950,inst_10951,inst_10952,inst_10953,inst_10954,inst_10955,inst_10956,inst_10957,inst_10958,inst_10959,inst_10960,inst_10961,inst_10962,inst_10963,inst_10964,inst_10965,inst_10966,inst_10967,inst_10968,inst_10969,inst_10970,inst_10971,inst_10972,inst_10973,inst_10974,inst_10975,inst_10976,inst_10977,inst_10978,inst_10979,inst_10980,inst_10981,inst_10982,inst_10983,inst_10984,inst_10985,inst_10986,inst_10987,inst_10988,inst_10989,inst_10990,inst_10991,inst_10992,inst_10993,inst_10994,inst_10995,inst_10996,inst_10997,inst_10998,inst_10999,inst_11000,inst_11001,inst_11002,inst_11003,inst_11004,inst_11005,inst_11006,inst_11007,inst_11008,inst_11009,inst_11010__$1,inst_11015,inst_11016,inst_11017__$1,inst_11018__$1,inst_11019,inst_11020,inst_11021__$1,inst_11022__$1,inst_11023__$1,inst_11024,inst_11046,inst_11047,inst_11048,inst_11059,inst_11060,inst_11061,inst_11062,inst_11063,inst_11064,inst_11065,inst_11066,inst_11095,state_val_11836,c__6459__auto___12267))
;
return ((function (switch__6444__auto__,add_cell_BANG_,depth_compare,player_stars_text,player_standing_texs,player_shadow,close_QMARK_,player_pos,obstacle_types,polar_object_coords,trees,player_standing_sway,game_sprites,loader,player_walking_texs,shadow_tex,_,tex,c__6459__auto____$1,hit_sfx,lobster_big,game_map,star_tex,remove_cell_BANG_,tufts,game_space,pickup_textures,perlin_channel,title_text,floor_objects,pickup_sfx,tilemap,make_pickup,varela,wait,player,player_stars_icon,inst_10828,inst_10862,inst_10853,inst_10879,inst_10850,inst_10830,inst_10812,inst_11010,inst_10829,inst_11018,inst_10906,inst_10849,inst_11023,inst_10840,inst_10938,inst_10848,inst_10856,inst_10827,inst_10818,inst_10843,inst_11021,inst_10934,inst_11022,inst_10826,inst_10933,inst_10876,inst_10817,inst_10825,inst_10824,inst_10821,inst_10859,inst_10935,inst_10811,inst_10869,inst_11017,inst_10933__$1,inst_10934__$1,inst_10935__$1,inst_10938__$1,inst_10939,inst_10940,inst_10941,inst_10942,inst_10943,inst_10944,inst_10945,inst_10946,inst_10947,inst_10948,inst_10949,inst_10950,inst_10951,inst_10952,inst_10953,inst_10954,inst_10955,inst_10956,inst_10957,inst_10958,inst_10959,inst_10960,inst_10961,inst_10962,inst_10963,inst_10964,inst_10965,inst_10966,inst_10967,inst_10968,inst_10969,inst_10970,inst_10971,inst_10972,inst_10973,inst_10974,inst_10975,inst_10976,inst_10977,inst_10978,inst_10979,inst_10980,inst_10981,inst_10982,inst_10983,inst_10984,inst_10985,inst_10986,inst_10987,inst_10988,inst_10989,inst_10990,inst_10991,inst_10992,inst_10993,inst_10994,inst_10995,inst_10996,inst_10997,inst_10998,inst_10999,inst_11000,inst_11001,inst_11002,inst_11003,inst_11004,inst_11005,inst_11006,inst_11007,inst_11008,inst_11009,inst_11010__$1,inst_11015,inst_11016,inst_11017__$1,inst_11018__$1,inst_11019,inst_11020,inst_11021__$1,inst_11022__$1,inst_11023__$1,inst_11024,inst_11046,inst_11047,inst_11048,inst_11059,inst_11060,inst_11061,inst_11062,inst_11063,inst_11064,inst_11065,inst_11066,inst_11095,state_val_11836,c__6459__auto___12267){
return (function() {
var state_machine__6445__auto__ = null;
var state_machine__6445__auto____0 = (function (){
var statearr_12108 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_12108[(0)] = state_machine__6445__auto__);

(statearr_12108[(1)] = (1));

return statearr_12108;
});
var state_machine__6445__auto____1 = (function (state_11093){
while(true){
var ret_value__6446__auto__ = (function (){try{while(true){
var result__6447__auto__ = switch__6444__auto__.call(null,state_11093);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6447__auto__;
}
break;
}
}catch (e12109){if((e12109 instanceof Object)){
var ex__6448__auto__ = e12109;
var statearr_12110_12466 = state_11093;
(statearr_12110_12466[(5)] = ex__6448__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11093);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12109;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12467 = state_11093;
state_11093 = G__12467;
continue;
} else {
return ret_value__6446__auto__;
}
break;
}
});
state_machine__6445__auto__ = function(state_11093){
switch(arguments.length){
case 0:
return state_machine__6445__auto____0.call(this);
case 1:
return state_machine__6445__auto____1.call(this,state_11093);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6445__auto____0;
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6445__auto____1;
return state_machine__6445__auto__;
})()
;})(switch__6444__auto__,add_cell_BANG_,depth_compare,player_stars_text,player_standing_texs,player_shadow,close_QMARK_,player_pos,obstacle_types,polar_object_coords,trees,player_standing_sway,game_sprites,loader,player_walking_texs,shadow_tex,_,tex,c__6459__auto____$1,hit_sfx,lobster_big,game_map,star_tex,remove_cell_BANG_,tufts,game_space,pickup_textures,perlin_channel,title_text,floor_objects,pickup_sfx,tilemap,make_pickup,varela,wait,player,player_stars_icon,inst_10828,inst_10862,inst_10853,inst_10879,inst_10850,inst_10830,inst_10812,inst_11010,inst_10829,inst_11018,inst_10906,inst_10849,inst_11023,inst_10840,inst_10938,inst_10848,inst_10856,inst_10827,inst_10818,inst_10843,inst_11021,inst_10934,inst_11022,inst_10826,inst_10933,inst_10876,inst_10817,inst_10825,inst_10824,inst_10821,inst_10859,inst_10935,inst_10811,inst_10869,inst_11017,inst_10933__$1,inst_10934__$1,inst_10935__$1,inst_10938__$1,inst_10939,inst_10940,inst_10941,inst_10942,inst_10943,inst_10944,inst_10945,inst_10946,inst_10947,inst_10948,inst_10949,inst_10950,inst_10951,inst_10952,inst_10953,inst_10954,inst_10955,inst_10956,inst_10957,inst_10958,inst_10959,inst_10960,inst_10961,inst_10962,inst_10963,inst_10964,inst_10965,inst_10966,inst_10967,inst_10968,inst_10969,inst_10970,inst_10971,inst_10972,inst_10973,inst_10974,inst_10975,inst_10976,inst_10977,inst_10978,inst_10979,inst_10980,inst_10981,inst_10982,inst_10983,inst_10984,inst_10985,inst_10986,inst_10987,inst_10988,inst_10989,inst_10990,inst_10991,inst_10992,inst_10993,inst_10994,inst_10995,inst_10996,inst_10997,inst_10998,inst_10999,inst_11000,inst_11001,inst_11002,inst_11003,inst_11004,inst_11005,inst_11006,inst_11007,inst_11008,inst_11009,inst_11010__$1,inst_11015,inst_11016,inst_11017__$1,inst_11018__$1,inst_11019,inst_11020,inst_11021__$1,inst_11022__$1,inst_11023__$1,inst_11024,inst_11046,inst_11047,inst_11048,inst_11059,inst_11060,inst_11061,inst_11062,inst_11063,inst_11064,inst_11065,inst_11066,inst_11095,state_val_11836,c__6459__auto___12267))
})();
var state__6461__auto__ = (function (){var statearr_12111 = f__6460__auto__.call(null);
(statearr_12111[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6459__auto____$1);

return statearr_12111;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6461__auto__);
});
;})(add_cell_BANG_,depth_compare,player_stars_text,player_standing_texs,player_shadow,close_QMARK_,player_pos,obstacle_types,polar_object_coords,trees,player_standing_sway,game_sprites,loader,player_walking_texs,shadow_tex,_,tex,c__6459__auto____$1,hit_sfx,lobster_big,game_map,star_tex,remove_cell_BANG_,tufts,game_space,pickup_textures,perlin_channel,title_text,floor_objects,pickup_sfx,tilemap,make_pickup,varela,wait,player,player_stars_icon,inst_10828,inst_10862,inst_10853,inst_10879,inst_10850,inst_10830,inst_10812,inst_11010,inst_10829,inst_11018,inst_10906,inst_10849,inst_11023,inst_10840,inst_10938,inst_10848,inst_10856,inst_10827,inst_10818,inst_10843,inst_11021,inst_10934,inst_11022,inst_10826,inst_10933,inst_10876,inst_10817,inst_10825,inst_10824,inst_10821,inst_10859,inst_10935,inst_10811,inst_10869,inst_11017,inst_10933__$1,inst_10934__$1,inst_10935__$1,inst_10938__$1,inst_10939,inst_10940,inst_10941,inst_10942,inst_10943,inst_10944,inst_10945,inst_10946,inst_10947,inst_10948,inst_10949,inst_10950,inst_10951,inst_10952,inst_10953,inst_10954,inst_10955,inst_10956,inst_10957,inst_10958,inst_10959,inst_10960,inst_10961,inst_10962,inst_10963,inst_10964,inst_10965,inst_10966,inst_10967,inst_10968,inst_10969,inst_10970,inst_10971,inst_10972,inst_10973,inst_10974,inst_10975,inst_10976,inst_10977,inst_10978,inst_10979,inst_10980,inst_10981,inst_10982,inst_10983,inst_10984,inst_10985,inst_10986,inst_10987,inst_10988,inst_10989,inst_10990,inst_10991,inst_10992,inst_10993,inst_10994,inst_10995,inst_10996,inst_10997,inst_10998,inst_10999,inst_11000,inst_11001,inst_11002,inst_11003,inst_11004,inst_11005,inst_11006,inst_11007,inst_11008,inst_11009,inst_11010__$1,inst_11015,inst_11016,inst_11017__$1,inst_11018__$1,inst_11019,inst_11020,inst_11021__$1,inst_11022__$1,inst_11023__$1,inst_11024,inst_11046,inst_11047,inst_11048,inst_11059,inst_11060,inst_11061,inst_11062,inst_11063,inst_11064,inst_11065,inst_11066,inst_11095,state_val_11836,c__6459__auto___12267))
})();
var inst_11097 = cljs.core.async.impl.dispatch.run.call(null,inst_11096);
var inst_11098 = (function (){var add_cell_BANG_ = inst_11022__$1;
var depth_compare = inst_10934__$1;
var player_stars_text = inst_10853;
var player_standing_texs = inst_10840;
var player_shadow = inst_10830;
var close_QMARK_ = inst_10938__$1;
var player_pos = inst_11021__$1;
var obstacle_types = inst_10862;
var polar_object_coords = inst_10935__$1;
var trees = inst_10869;
var player_standing_sway = inst_10843;
var game_sprites = inst_11017__$1;
var loader = inst_10811;
var player_walking_texs = inst_10848;
var shadow_tex = inst_10829;
var _ = inst_10825;
var tex = inst_10827;
var hit_sfx = inst_10933__$1;
var lobster_big = inst_10817;
var game_map = inst_11010__$1;
var star_tex = inst_10849;
var remove_cell_BANG_ = inst_11023__$1;
var tufts = inst_10876;
var game_space = inst_11018__$1;
var pickup_textures = inst_10856;
var perlin_channel = inst_10812;
var title_text = inst_10826;
var floor_objects = inst_10859;
var pickup_sfx = inst_10906;
var tilemap = inst_10824;
var make_pickup = inst_10879;
var varela = inst_10818;
var wait = inst_10821;
var player = inst_10828;
var player_stars_icon = inst_10850;
return ((function (add_cell_BANG_,depth_compare,player_stars_text,player_standing_texs,player_shadow,close_QMARK_,player_pos,obstacle_types,polar_object_coords,trees,player_standing_sway,game_sprites,loader,player_walking_texs,shadow_tex,_,tex,hit_sfx,lobster_big,game_map,star_tex,remove_cell_BANG_,tufts,game_space,pickup_textures,perlin_channel,title_text,floor_objects,pickup_sfx,tilemap,make_pickup,varela,wait,player,player_stars_icon,inst_10828,inst_10862,inst_10853,inst_10879,inst_10850,inst_10830,inst_10812,inst_11010,inst_10829,inst_11018,inst_10906,inst_10849,inst_11023,inst_10840,inst_10938,inst_10848,inst_10856,inst_10827,inst_10818,inst_10843,inst_11021,inst_10934,inst_11022,inst_10826,inst_10933,inst_10876,inst_10817,inst_10825,inst_10824,inst_10821,inst_10859,inst_10935,inst_10811,inst_10869,inst_11017,inst_10933__$1,inst_10934__$1,inst_10935__$1,inst_10938__$1,inst_10939,inst_10940,inst_10941,inst_10942,inst_10943,inst_10944,inst_10945,inst_10946,inst_10947,inst_10948,inst_10949,inst_10950,inst_10951,inst_10952,inst_10953,inst_10954,inst_10955,inst_10956,inst_10957,inst_10958,inst_10959,inst_10960,inst_10961,inst_10962,inst_10963,inst_10964,inst_10965,inst_10966,inst_10967,inst_10968,inst_10969,inst_10970,inst_10971,inst_10972,inst_10973,inst_10974,inst_10975,inst_10976,inst_10977,inst_10978,inst_10979,inst_10980,inst_10981,inst_10982,inst_10983,inst_10984,inst_10985,inst_10986,inst_10987,inst_10988,inst_10989,inst_10990,inst_10991,inst_10992,inst_10993,inst_10994,inst_10995,inst_10996,inst_10997,inst_10998,inst_10999,inst_11000,inst_11001,inst_11002,inst_11003,inst_11004,inst_11005,inst_11006,inst_11007,inst_11008,inst_11009,inst_11010__$1,inst_11015,inst_11016,inst_11017__$1,inst_11018__$1,inst_11019,inst_11020,inst_11021__$1,inst_11022__$1,inst_11023__$1,inst_11024,inst_11046,inst_11047,inst_11048,inst_11059,inst_11060,inst_11061,inst_11062,inst_11063,inst_11064,inst_11065,inst_11066,inst_11095,inst_11096,inst_11097,state_val_11836,c__6459__auto___12267){
return (function (key,ref,old,new$){
return player_stars_text.setText([cljs.core.str(new$)].join(''));
});
;})(add_cell_BANG_,depth_compare,player_stars_text,player_standing_texs,player_shadow,close_QMARK_,player_pos,obstacle_types,polar_object_coords,trees,player_standing_sway,game_sprites,loader,player_walking_texs,shadow_tex,_,tex,hit_sfx,lobster_big,game_map,star_tex,remove_cell_BANG_,tufts,game_space,pickup_textures,perlin_channel,title_text,floor_objects,pickup_sfx,tilemap,make_pickup,varela,wait,player,player_stars_icon,inst_10828,inst_10862,inst_10853,inst_10879,inst_10850,inst_10830,inst_10812,inst_11010,inst_10829,inst_11018,inst_10906,inst_10849,inst_11023,inst_10840,inst_10938,inst_10848,inst_10856,inst_10827,inst_10818,inst_10843,inst_11021,inst_10934,inst_11022,inst_10826,inst_10933,inst_10876,inst_10817,inst_10825,inst_10824,inst_10821,inst_10859,inst_10935,inst_10811,inst_10869,inst_11017,inst_10933__$1,inst_10934__$1,inst_10935__$1,inst_10938__$1,inst_10939,inst_10940,inst_10941,inst_10942,inst_10943,inst_10944,inst_10945,inst_10946,inst_10947,inst_10948,inst_10949,inst_10950,inst_10951,inst_10952,inst_10953,inst_10954,inst_10955,inst_10956,inst_10957,inst_10958,inst_10959,inst_10960,inst_10961,inst_10962,inst_10963,inst_10964,inst_10965,inst_10966,inst_10967,inst_10968,inst_10969,inst_10970,inst_10971,inst_10972,inst_10973,inst_10974,inst_10975,inst_10976,inst_10977,inst_10978,inst_10979,inst_10980,inst_10981,inst_10982,inst_10983,inst_10984,inst_10985,inst_10986,inst_10987,inst_10988,inst_10989,inst_10990,inst_10991,inst_10992,inst_10993,inst_10994,inst_10995,inst_10996,inst_10997,inst_10998,inst_10999,inst_11000,inst_11001,inst_11002,inst_11003,inst_11004,inst_11005,inst_11006,inst_11007,inst_11008,inst_11009,inst_11010__$1,inst_11015,inst_11016,inst_11017__$1,inst_11018__$1,inst_11019,inst_11020,inst_11021__$1,inst_11022__$1,inst_11023__$1,inst_11024,inst_11046,inst_11047,inst_11048,inst_11059,inst_11060,inst_11061,inst_11062,inst_11063,inst_11064,inst_11065,inst_11066,inst_11095,inst_11096,inst_11097,state_val_11836,c__6459__auto___12267))
})();
var inst_11099 = cljs.core.add_watch.call(null,farn.core.player_stars,new cljs.core.Keyword(null,"add","add",235287739),inst_11098);
var inst_11100 = farn.rex.launch_rex.call(null,farn.core.ui_stage);
var inst_11144 = cljs.core.async.chan.call(null,(1));
var inst_11145 = (function (){var add_cell_BANG_ = inst_11022__$1;
var depth_compare = inst_10934__$1;
var player_stars_text = inst_10853;
var player_standing_texs = inst_10840;
var player_shadow = inst_10830;
var close_QMARK_ = inst_10938__$1;
var player_pos = inst_11021__$1;
var obstacle_types = inst_10862;
var polar_object_coords = inst_10935__$1;
var trees = inst_10869;
var player_standing_sway = inst_10843;
var game_sprites = inst_11017__$1;
var loader = inst_10811;
var player_walking_texs = inst_10848;
var shadow_tex = inst_10829;
var _ = inst_10825;
var tex = inst_10827;
var c__6459__auto____$1 = inst_11144;
var hit_sfx = inst_10933__$1;
var lobster_big = inst_10817;
var game_map = inst_11010__$1;
var star_tex = inst_10849;
var remove_cell_BANG_ = inst_11023__$1;
var tufts = inst_10876;
var game_space = inst_11018__$1;
var pickup_textures = inst_10856;
var perlin_channel = inst_10812;
var title_text = inst_10826;
var floor_objects = inst_10859;
var pickup_sfx = inst_10906;
var tilemap = inst_10824;
var make_pickup = inst_10879;
var varela = inst_10818;
var wait = inst_10821;
var player = inst_10828;
var player_stars_icon = inst_10850;
return ((function (add_cell_BANG_,depth_compare,player_stars_text,player_standing_texs,player_shadow,close_QMARK_,player_pos,obstacle_types,polar_object_coords,trees,player_standing_sway,game_sprites,loader,player_walking_texs,shadow_tex,_,tex,c__6459__auto____$1,hit_sfx,lobster_big,game_map,star_tex,remove_cell_BANG_,tufts,game_space,pickup_textures,perlin_channel,title_text,floor_objects,pickup_sfx,tilemap,make_pickup,varela,wait,player,player_stars_icon,inst_10828,inst_10862,inst_10853,inst_10879,inst_10850,inst_10830,inst_10812,inst_11010,inst_10829,inst_11018,inst_10906,inst_10849,inst_11023,inst_10840,inst_10938,inst_10848,inst_10856,inst_10827,inst_10818,inst_10843,inst_11021,inst_10934,inst_11022,inst_10826,inst_10933,inst_10876,inst_10817,inst_10825,inst_10824,inst_10821,inst_10859,inst_10935,inst_10811,inst_10869,inst_11017,inst_10933__$1,inst_10934__$1,inst_10935__$1,inst_10938__$1,inst_10939,inst_10940,inst_10941,inst_10942,inst_10943,inst_10944,inst_10945,inst_10946,inst_10947,inst_10948,inst_10949,inst_10950,inst_10951,inst_10952,inst_10953,inst_10954,inst_10955,inst_10956,inst_10957,inst_10958,inst_10959,inst_10960,inst_10961,inst_10962,inst_10963,inst_10964,inst_10965,inst_10966,inst_10967,inst_10968,inst_10969,inst_10970,inst_10971,inst_10972,inst_10973,inst_10974,inst_10975,inst_10976,inst_10977,inst_10978,inst_10979,inst_10980,inst_10981,inst_10982,inst_10983,inst_10984,inst_10985,inst_10986,inst_10987,inst_10988,inst_10989,inst_10990,inst_10991,inst_10992,inst_10993,inst_10994,inst_10995,inst_10996,inst_10997,inst_10998,inst_10999,inst_11000,inst_11001,inst_11002,inst_11003,inst_11004,inst_11005,inst_11006,inst_11007,inst_11008,inst_11009,inst_11010__$1,inst_11015,inst_11016,inst_11017__$1,inst_11018__$1,inst_11019,inst_11020,inst_11021__$1,inst_11022__$1,inst_11023__$1,inst_11024,inst_11046,inst_11047,inst_11048,inst_11059,inst_11060,inst_11061,inst_11062,inst_11063,inst_11064,inst_11065,inst_11066,inst_11095,inst_11096,inst_11097,inst_11098,inst_11099,inst_11100,inst_11144,state_val_11836,c__6459__auto___12267){
return (function (){
var f__6460__auto__ = (function (){var switch__6444__auto__ = ((function (add_cell_BANG_,depth_compare,player_stars_text,player_standing_texs,player_shadow,close_QMARK_,player_pos,obstacle_types,polar_object_coords,trees,player_standing_sway,game_sprites,loader,player_walking_texs,shadow_tex,_,tex,c__6459__auto____$1,hit_sfx,lobster_big,game_map,star_tex,remove_cell_BANG_,tufts,game_space,pickup_textures,perlin_channel,title_text,floor_objects,pickup_sfx,tilemap,make_pickup,varela,wait,player,player_stars_icon,inst_10828,inst_10862,inst_10853,inst_10879,inst_10850,inst_10830,inst_10812,inst_11010,inst_10829,inst_11018,inst_10906,inst_10849,inst_11023,inst_10840,inst_10938,inst_10848,inst_10856,inst_10827,inst_10818,inst_10843,inst_11021,inst_10934,inst_11022,inst_10826,inst_10933,inst_10876,inst_10817,inst_10825,inst_10824,inst_10821,inst_10859,inst_10935,inst_10811,inst_10869,inst_11017,inst_10933__$1,inst_10934__$1,inst_10935__$1,inst_10938__$1,inst_10939,inst_10940,inst_10941,inst_10942,inst_10943,inst_10944,inst_10945,inst_10946,inst_10947,inst_10948,inst_10949,inst_10950,inst_10951,inst_10952,inst_10953,inst_10954,inst_10955,inst_10956,inst_10957,inst_10958,inst_10959,inst_10960,inst_10961,inst_10962,inst_10963,inst_10964,inst_10965,inst_10966,inst_10967,inst_10968,inst_10969,inst_10970,inst_10971,inst_10972,inst_10973,inst_10974,inst_10975,inst_10976,inst_10977,inst_10978,inst_10979,inst_10980,inst_10981,inst_10982,inst_10983,inst_10984,inst_10985,inst_10986,inst_10987,inst_10988,inst_10989,inst_10990,inst_10991,inst_10992,inst_10993,inst_10994,inst_10995,inst_10996,inst_10997,inst_10998,inst_10999,inst_11000,inst_11001,inst_11002,inst_11003,inst_11004,inst_11005,inst_11006,inst_11007,inst_11008,inst_11009,inst_11010__$1,inst_11015,inst_11016,inst_11017__$1,inst_11018__$1,inst_11019,inst_11020,inst_11021__$1,inst_11022__$1,inst_11023__$1,inst_11024,inst_11046,inst_11047,inst_11048,inst_11059,inst_11060,inst_11061,inst_11062,inst_11063,inst_11064,inst_11065,inst_11066,inst_11095,inst_11096,inst_11097,inst_11098,inst_11099,inst_11100,inst_11144,state_val_11836,c__6459__auto___12267){
return (function (state_11142){
var state_val_11143 = (state_11142[(1)]);
if((state_val_11143 === (7))){
var inst_11117 = (state_11142[(2)]);
var inst_11118 = cljs.core.deref.call(null,farn.core.pickup_store);
var inst_11119 = cljs.core.count.call(null,inst_11118);
var inst_11120 = (inst_11119 < farn.core.max_pickups);
var state_11142__$1 = (function (){var statearr_12112 = state_11142;
(statearr_12112[(7)] = inst_11117);

return statearr_12112;
})();
if(cljs.core.truth_(inst_11120)){
var statearr_12113_12468 = state_11142__$1;
(statearr_12113_12468[(1)] = (8));

} else {
var statearr_12114_12469 = state_11142__$1;
(statearr_12114_12469[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11143 === (1))){
var inst_11101 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_11102 = [(200),(200)];
var inst_11103 = (new cljs.core.PersistentVector(null,2,(5),inst_11101,inst_11102,null));
var inst_11104 = make_pickup.call(null,inst_11103,(200),new cljs.core.Keyword(null,"pickup-baby-1","pickup-baby-1",-1650486973),(300));
var inst_11105 = cljs.core.swap_BANG_.call(null,farn.core.pickup_store,cljs.core.conj,inst_11104);
var inst_11106 = new cljs.core.Keyword(null,"sprite","sprite",172516848).cljs$core$IFn$_invoke$arity$1(inst_11104);
var inst_11107 = new cljs.core.Keyword(null,"scale","scale",-230427353).cljs$core$IFn$_invoke$arity$1(inst_11104);
var inst_11108 = farn.sprite.set_scale_BANG_.call(null,inst_11106,inst_11107);
var inst_11109 = new cljs.core.Keyword(null,"sprite","sprite",172516848).cljs$core$IFn$_invoke$arity$1(inst_11104);
var inst_11110 = farn.core.main_stage.addChild(inst_11109);
var inst_11111 = new cljs.core.Keyword(null,"shadow","shadow",873231803).cljs$core$IFn$_invoke$arity$1(inst_11104);
var inst_11112 = farn.core.main_stage.addChild(inst_11111);
var state_11142__$1 = (function (){var statearr_12115 = state_11142;
(statearr_12115[(8)] = inst_11110);

(statearr_12115[(9)] = inst_11105);

(statearr_12115[(10)] = inst_11112);

(statearr_12115[(11)] = inst_11108);

return statearr_12115;
})();
var statearr_12116_12470 = state_11142__$1;
(statearr_12116_12470[(2)] = null);

(statearr_12116_12470[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11143 === (4))){
var inst_11115 = cljs.core.async.timeout.call(null,(333));
var state_11142__$1 = state_11142;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11142__$1,(7),inst_11115);
} else {
if((state_val_11143 === (6))){
var inst_11138 = (state_11142[(2)]);
var state_11142__$1 = state_11142;
var statearr_12117_12471 = state_11142__$1;
(statearr_12117_12471[(2)] = inst_11138);

(statearr_12117_12471[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11143 === (3))){
var inst_11140 = (state_11142[(2)]);
var state_11142__$1 = state_11142;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11142__$1,inst_11140);
} else {
if((state_val_11143 === (2))){
var state_11142__$1 = state_11142;
var statearr_12118_12472 = state_11142__$1;
(statearr_12118_12472[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11143 === (9))){
var state_11142__$1 = state_11142;
var statearr_12120_12473 = state_11142__$1;
(statearr_12120_12473[(2)] = null);

(statearr_12120_12473[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11143 === (5))){
var state_11142__$1 = state_11142;
var statearr_12121_12474 = state_11142__$1;
(statearr_12121_12474[(2)] = null);

(statearr_12121_12474[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11143 === (10))){
var inst_11134 = (state_11142[(2)]);
var state_11142__$1 = (function (){var statearr_12122 = state_11142;
(statearr_12122[(12)] = inst_11134);

return statearr_12122;
})();
var statearr_12123_12475 = state_11142__$1;
(statearr_12123_12475[(2)] = null);

(statearr_12123_12475[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11143 === (8))){
var inst_11122 = cljs.core.deref.call(null,farn.core.last_player_position);
var inst_11123 = make_pickup.call(null,inst_11122,farn.core.pickup_spread);
var inst_11124 = cljs.core.swap_BANG_.call(null,farn.core.pickup_store,cljs.core.conj,inst_11123);
var inst_11125 = new cljs.core.Keyword(null,"sprite","sprite",172516848).cljs$core$IFn$_invoke$arity$1(inst_11123);
var inst_11126 = new cljs.core.Keyword(null,"scale","scale",-230427353).cljs$core$IFn$_invoke$arity$1(inst_11123);
var inst_11127 = farn.sprite.set_scale_BANG_.call(null,inst_11125,inst_11126);
var inst_11128 = new cljs.core.Keyword(null,"sprite","sprite",172516848).cljs$core$IFn$_invoke$arity$1(inst_11123);
var inst_11129 = farn.core.main_stage.addChild(inst_11128);
var inst_11130 = new cljs.core.Keyword(null,"shadow","shadow",873231803).cljs$core$IFn$_invoke$arity$1(inst_11123);
var inst_11131 = farn.core.main_stage.addChild(inst_11130);
var state_11142__$1 = (function (){var statearr_12124 = state_11142;
(statearr_12124[(13)] = inst_11124);

(statearr_12124[(14)] = inst_11127);

(statearr_12124[(15)] = inst_11129);

return statearr_12124;
})();
var statearr_12125_12476 = state_11142__$1;
(statearr_12125_12476[(2)] = inst_11131);

(statearr_12125_12476[(1)] = (10));


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
});})(add_cell_BANG_,depth_compare,player_stars_text,player_standing_texs,player_shadow,close_QMARK_,player_pos,obstacle_types,polar_object_coords,trees,player_standing_sway,game_sprites,loader,player_walking_texs,shadow_tex,_,tex,c__6459__auto____$1,hit_sfx,lobster_big,game_map,star_tex,remove_cell_BANG_,tufts,game_space,pickup_textures,perlin_channel,title_text,floor_objects,pickup_sfx,tilemap,make_pickup,varela,wait,player,player_stars_icon,inst_10828,inst_10862,inst_10853,inst_10879,inst_10850,inst_10830,inst_10812,inst_11010,inst_10829,inst_11018,inst_10906,inst_10849,inst_11023,inst_10840,inst_10938,inst_10848,inst_10856,inst_10827,inst_10818,inst_10843,inst_11021,inst_10934,inst_11022,inst_10826,inst_10933,inst_10876,inst_10817,inst_10825,inst_10824,inst_10821,inst_10859,inst_10935,inst_10811,inst_10869,inst_11017,inst_10933__$1,inst_10934__$1,inst_10935__$1,inst_10938__$1,inst_10939,inst_10940,inst_10941,inst_10942,inst_10943,inst_10944,inst_10945,inst_10946,inst_10947,inst_10948,inst_10949,inst_10950,inst_10951,inst_10952,inst_10953,inst_10954,inst_10955,inst_10956,inst_10957,inst_10958,inst_10959,inst_10960,inst_10961,inst_10962,inst_10963,inst_10964,inst_10965,inst_10966,inst_10967,inst_10968,inst_10969,inst_10970,inst_10971,inst_10972,inst_10973,inst_10974,inst_10975,inst_10976,inst_10977,inst_10978,inst_10979,inst_10980,inst_10981,inst_10982,inst_10983,inst_10984,inst_10985,inst_10986,inst_10987,inst_10988,inst_10989,inst_10990,inst_10991,inst_10992,inst_10993,inst_10994,inst_10995,inst_10996,inst_10997,inst_10998,inst_10999,inst_11000,inst_11001,inst_11002,inst_11003,inst_11004,inst_11005,inst_11006,inst_11007,inst_11008,inst_11009,inst_11010__$1,inst_11015,inst_11016,inst_11017__$1,inst_11018__$1,inst_11019,inst_11020,inst_11021__$1,inst_11022__$1,inst_11023__$1,inst_11024,inst_11046,inst_11047,inst_11048,inst_11059,inst_11060,inst_11061,inst_11062,inst_11063,inst_11064,inst_11065,inst_11066,inst_11095,inst_11096,inst_11097,inst_11098,inst_11099,inst_11100,inst_11144,state_val_11836,c__6459__auto___12267))
;
return ((function (switch__6444__auto__,add_cell_BANG_,depth_compare,player_stars_text,player_standing_texs,player_shadow,close_QMARK_,player_pos,obstacle_types,polar_object_coords,trees,player_standing_sway,game_sprites,loader,player_walking_texs,shadow_tex,_,tex,c__6459__auto____$1,hit_sfx,lobster_big,game_map,star_tex,remove_cell_BANG_,tufts,game_space,pickup_textures,perlin_channel,title_text,floor_objects,pickup_sfx,tilemap,make_pickup,varela,wait,player,player_stars_icon,inst_10828,inst_10862,inst_10853,inst_10879,inst_10850,inst_10830,inst_10812,inst_11010,inst_10829,inst_11018,inst_10906,inst_10849,inst_11023,inst_10840,inst_10938,inst_10848,inst_10856,inst_10827,inst_10818,inst_10843,inst_11021,inst_10934,inst_11022,inst_10826,inst_10933,inst_10876,inst_10817,inst_10825,inst_10824,inst_10821,inst_10859,inst_10935,inst_10811,inst_10869,inst_11017,inst_10933__$1,inst_10934__$1,inst_10935__$1,inst_10938__$1,inst_10939,inst_10940,inst_10941,inst_10942,inst_10943,inst_10944,inst_10945,inst_10946,inst_10947,inst_10948,inst_10949,inst_10950,inst_10951,inst_10952,inst_10953,inst_10954,inst_10955,inst_10956,inst_10957,inst_10958,inst_10959,inst_10960,inst_10961,inst_10962,inst_10963,inst_10964,inst_10965,inst_10966,inst_10967,inst_10968,inst_10969,inst_10970,inst_10971,inst_10972,inst_10973,inst_10974,inst_10975,inst_10976,inst_10977,inst_10978,inst_10979,inst_10980,inst_10981,inst_10982,inst_10983,inst_10984,inst_10985,inst_10986,inst_10987,inst_10988,inst_10989,inst_10990,inst_10991,inst_10992,inst_10993,inst_10994,inst_10995,inst_10996,inst_10997,inst_10998,inst_10999,inst_11000,inst_11001,inst_11002,inst_11003,inst_11004,inst_11005,inst_11006,inst_11007,inst_11008,inst_11009,inst_11010__$1,inst_11015,inst_11016,inst_11017__$1,inst_11018__$1,inst_11019,inst_11020,inst_11021__$1,inst_11022__$1,inst_11023__$1,inst_11024,inst_11046,inst_11047,inst_11048,inst_11059,inst_11060,inst_11061,inst_11062,inst_11063,inst_11064,inst_11065,inst_11066,inst_11095,inst_11096,inst_11097,inst_11098,inst_11099,inst_11100,inst_11144,state_val_11836,c__6459__auto___12267){
return (function() {
var state_machine__6445__auto__ = null;
var state_machine__6445__auto____0 = (function (){
var statearr_12129 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12129[(0)] = state_machine__6445__auto__);

(statearr_12129[(1)] = (1));

return statearr_12129;
});
var state_machine__6445__auto____1 = (function (state_11142){
while(true){
var ret_value__6446__auto__ = (function (){try{while(true){
var result__6447__auto__ = switch__6444__auto__.call(null,state_11142);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6447__auto__;
}
break;
}
}catch (e12130){if((e12130 instanceof Object)){
var ex__6448__auto__ = e12130;
var statearr_12131_12477 = state_11142;
(statearr_12131_12477[(5)] = ex__6448__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11142);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12130;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12478 = state_11142;
state_11142 = G__12478;
continue;
} else {
return ret_value__6446__auto__;
}
break;
}
});
state_machine__6445__auto__ = function(state_11142){
switch(arguments.length){
case 0:
return state_machine__6445__auto____0.call(this);
case 1:
return state_machine__6445__auto____1.call(this,state_11142);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6445__auto____0;
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6445__auto____1;
return state_machine__6445__auto__;
})()
;})(switch__6444__auto__,add_cell_BANG_,depth_compare,player_stars_text,player_standing_texs,player_shadow,close_QMARK_,player_pos,obstacle_types,polar_object_coords,trees,player_standing_sway,game_sprites,loader,player_walking_texs,shadow_tex,_,tex,c__6459__auto____$1,hit_sfx,lobster_big,game_map,star_tex,remove_cell_BANG_,tufts,game_space,pickup_textures,perlin_channel,title_text,floor_objects,pickup_sfx,tilemap,make_pickup,varela,wait,player,player_stars_icon,inst_10828,inst_10862,inst_10853,inst_10879,inst_10850,inst_10830,inst_10812,inst_11010,inst_10829,inst_11018,inst_10906,inst_10849,inst_11023,inst_10840,inst_10938,inst_10848,inst_10856,inst_10827,inst_10818,inst_10843,inst_11021,inst_10934,inst_11022,inst_10826,inst_10933,inst_10876,inst_10817,inst_10825,inst_10824,inst_10821,inst_10859,inst_10935,inst_10811,inst_10869,inst_11017,inst_10933__$1,inst_10934__$1,inst_10935__$1,inst_10938__$1,inst_10939,inst_10940,inst_10941,inst_10942,inst_10943,inst_10944,inst_10945,inst_10946,inst_10947,inst_10948,inst_10949,inst_10950,inst_10951,inst_10952,inst_10953,inst_10954,inst_10955,inst_10956,inst_10957,inst_10958,inst_10959,inst_10960,inst_10961,inst_10962,inst_10963,inst_10964,inst_10965,inst_10966,inst_10967,inst_10968,inst_10969,inst_10970,inst_10971,inst_10972,inst_10973,inst_10974,inst_10975,inst_10976,inst_10977,inst_10978,inst_10979,inst_10980,inst_10981,inst_10982,inst_10983,inst_10984,inst_10985,inst_10986,inst_10987,inst_10988,inst_10989,inst_10990,inst_10991,inst_10992,inst_10993,inst_10994,inst_10995,inst_10996,inst_10997,inst_10998,inst_10999,inst_11000,inst_11001,inst_11002,inst_11003,inst_11004,inst_11005,inst_11006,inst_11007,inst_11008,inst_11009,inst_11010__$1,inst_11015,inst_11016,inst_11017__$1,inst_11018__$1,inst_11019,inst_11020,inst_11021__$1,inst_11022__$1,inst_11023__$1,inst_11024,inst_11046,inst_11047,inst_11048,inst_11059,inst_11060,inst_11061,inst_11062,inst_11063,inst_11064,inst_11065,inst_11066,inst_11095,inst_11096,inst_11097,inst_11098,inst_11099,inst_11100,inst_11144,state_val_11836,c__6459__auto___12267))
})();
var state__6461__auto__ = (function (){var statearr_12132 = f__6460__auto__.call(null);
(statearr_12132[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6459__auto____$1);

return statearr_12132;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6461__auto__);
});
;})(add_cell_BANG_,depth_compare,player_stars_text,player_standing_texs,player_shadow,close_QMARK_,player_pos,obstacle_types,polar_object_coords,trees,player_standing_sway,game_sprites,loader,player_walking_texs,shadow_tex,_,tex,c__6459__auto____$1,hit_sfx,lobster_big,game_map,star_tex,remove_cell_BANG_,tufts,game_space,pickup_textures,perlin_channel,title_text,floor_objects,pickup_sfx,tilemap,make_pickup,varela,wait,player,player_stars_icon,inst_10828,inst_10862,inst_10853,inst_10879,inst_10850,inst_10830,inst_10812,inst_11010,inst_10829,inst_11018,inst_10906,inst_10849,inst_11023,inst_10840,inst_10938,inst_10848,inst_10856,inst_10827,inst_10818,inst_10843,inst_11021,inst_10934,inst_11022,inst_10826,inst_10933,inst_10876,inst_10817,inst_10825,inst_10824,inst_10821,inst_10859,inst_10935,inst_10811,inst_10869,inst_11017,inst_10933__$1,inst_10934__$1,inst_10935__$1,inst_10938__$1,inst_10939,inst_10940,inst_10941,inst_10942,inst_10943,inst_10944,inst_10945,inst_10946,inst_10947,inst_10948,inst_10949,inst_10950,inst_10951,inst_10952,inst_10953,inst_10954,inst_10955,inst_10956,inst_10957,inst_10958,inst_10959,inst_10960,inst_10961,inst_10962,inst_10963,inst_10964,inst_10965,inst_10966,inst_10967,inst_10968,inst_10969,inst_10970,inst_10971,inst_10972,inst_10973,inst_10974,inst_10975,inst_10976,inst_10977,inst_10978,inst_10979,inst_10980,inst_10981,inst_10982,inst_10983,inst_10984,inst_10985,inst_10986,inst_10987,inst_10988,inst_10989,inst_10990,inst_10991,inst_10992,inst_10993,inst_10994,inst_10995,inst_10996,inst_10997,inst_10998,inst_10999,inst_11000,inst_11001,inst_11002,inst_11003,inst_11004,inst_11005,inst_11006,inst_11007,inst_11008,inst_11009,inst_11010__$1,inst_11015,inst_11016,inst_11017__$1,inst_11018__$1,inst_11019,inst_11020,inst_11021__$1,inst_11022__$1,inst_11023__$1,inst_11024,inst_11046,inst_11047,inst_11048,inst_11059,inst_11060,inst_11061,inst_11062,inst_11063,inst_11064,inst_11065,inst_11066,inst_11095,inst_11096,inst_11097,inst_11098,inst_11099,inst_11100,inst_11144,state_val_11836,c__6459__auto___12267))
})();
var inst_11146 = cljs.core.async.impl.dispatch.run.call(null,inst_11145);
var inst_11147 = (function (){var add_cell_BANG_ = inst_11022__$1;
var depth_compare = inst_10934__$1;
var player_stars_text = inst_10853;
var player_standing_texs = inst_10840;
var player_shadow = inst_10830;
var close_QMARK_ = inst_10938__$1;
var player_pos = inst_11021__$1;
var obstacle_types = inst_10862;
var polar_object_coords = inst_10935__$1;
var trees = inst_10869;
var player_standing_sway = inst_10843;
var game_sprites = inst_11017__$1;
var loader = inst_10811;
var player_walking_texs = inst_10848;
var shadow_tex = inst_10829;
var _ = inst_10825;
var tex = inst_10827;
var hit_sfx = inst_10933__$1;
var lobster_big = inst_10817;
var game_map = inst_11010__$1;
var star_tex = inst_10849;
var remove_cell_BANG_ = inst_11023__$1;
var tufts = inst_10876;
var game_space = inst_11018__$1;
var pickup_textures = inst_10856;
var perlin_channel = inst_10812;
var title_text = inst_10826;
var floor_objects = inst_10859;
var pickup_sfx = inst_10906;
var tilemap = inst_10824;
var make_pickup = inst_10879;
var varela = inst_10818;
var wait = inst_10821;
var player = inst_10828;
var player_stars_icon = inst_10850;
return ((function (add_cell_BANG_,depth_compare,player_stars_text,player_standing_texs,player_shadow,close_QMARK_,player_pos,obstacle_types,polar_object_coords,trees,player_standing_sway,game_sprites,loader,player_walking_texs,shadow_tex,_,tex,hit_sfx,lobster_big,game_map,star_tex,remove_cell_BANG_,tufts,game_space,pickup_textures,perlin_channel,title_text,floor_objects,pickup_sfx,tilemap,make_pickup,varela,wait,player,player_stars_icon,inst_10828,inst_10862,inst_10853,inst_10879,inst_10850,inst_10830,inst_10812,inst_11010,inst_10829,inst_11018,inst_10906,inst_10849,inst_11023,inst_10840,inst_10938,inst_10848,inst_10856,inst_10827,inst_10818,inst_10843,inst_11021,inst_10934,inst_11022,inst_10826,inst_10933,inst_10876,inst_10817,inst_10825,inst_10824,inst_10821,inst_10859,inst_10935,inst_10811,inst_10869,inst_11017,inst_10933__$1,inst_10934__$1,inst_10935__$1,inst_10938__$1,inst_10939,inst_10940,inst_10941,inst_10942,inst_10943,inst_10944,inst_10945,inst_10946,inst_10947,inst_10948,inst_10949,inst_10950,inst_10951,inst_10952,inst_10953,inst_10954,inst_10955,inst_10956,inst_10957,inst_10958,inst_10959,inst_10960,inst_10961,inst_10962,inst_10963,inst_10964,inst_10965,inst_10966,inst_10967,inst_10968,inst_10969,inst_10970,inst_10971,inst_10972,inst_10973,inst_10974,inst_10975,inst_10976,inst_10977,inst_10978,inst_10979,inst_10980,inst_10981,inst_10982,inst_10983,inst_10984,inst_10985,inst_10986,inst_10987,inst_10988,inst_10989,inst_10990,inst_10991,inst_10992,inst_10993,inst_10994,inst_10995,inst_10996,inst_10997,inst_10998,inst_10999,inst_11000,inst_11001,inst_11002,inst_11003,inst_11004,inst_11005,inst_11006,inst_11007,inst_11008,inst_11009,inst_11010__$1,inst_11015,inst_11016,inst_11017__$1,inst_11018__$1,inst_11019,inst_11020,inst_11021__$1,inst_11022__$1,inst_11023__$1,inst_11024,inst_11046,inst_11047,inst_11048,inst_11059,inst_11060,inst_11061,inst_11062,inst_11063,inst_11064,inst_11065,inst_11066,inst_11095,inst_11096,inst_11097,inst_11098,inst_11099,inst_11100,inst_11144,inst_11145,inst_11146,state_val_11836,c__6459__auto___12267){
return (function (pickup){
if(cljs.core.not.call(null,close_QMARK_.call(null,cljs.core.deref.call(null,farn.core.last_player_position),new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(pickup),farn.core.pickup_cull_distance_squared))){
return pickup;
} else {
return null;
}
});
;})(add_cell_BANG_,depth_compare,player_stars_text,player_standing_texs,player_shadow,close_QMARK_,player_pos,obstacle_types,polar_object_coords,trees,player_standing_sway,game_sprites,loader,player_walking_texs,shadow_tex,_,tex,hit_sfx,lobster_big,game_map,star_tex,remove_cell_BANG_,tufts,game_space,pickup_textures,perlin_channel,title_text,floor_objects,pickup_sfx,tilemap,make_pickup,varela,wait,player,player_stars_icon,inst_10828,inst_10862,inst_10853,inst_10879,inst_10850,inst_10830,inst_10812,inst_11010,inst_10829,inst_11018,inst_10906,inst_10849,inst_11023,inst_10840,inst_10938,inst_10848,inst_10856,inst_10827,inst_10818,inst_10843,inst_11021,inst_10934,inst_11022,inst_10826,inst_10933,inst_10876,inst_10817,inst_10825,inst_10824,inst_10821,inst_10859,inst_10935,inst_10811,inst_10869,inst_11017,inst_10933__$1,inst_10934__$1,inst_10935__$1,inst_10938__$1,inst_10939,inst_10940,inst_10941,inst_10942,inst_10943,inst_10944,inst_10945,inst_10946,inst_10947,inst_10948,inst_10949,inst_10950,inst_10951,inst_10952,inst_10953,inst_10954,inst_10955,inst_10956,inst_10957,inst_10958,inst_10959,inst_10960,inst_10961,inst_10962,inst_10963,inst_10964,inst_10965,inst_10966,inst_10967,inst_10968,inst_10969,inst_10970,inst_10971,inst_10972,inst_10973,inst_10974,inst_10975,inst_10976,inst_10977,inst_10978,inst_10979,inst_10980,inst_10981,inst_10982,inst_10983,inst_10984,inst_10985,inst_10986,inst_10987,inst_10988,inst_10989,inst_10990,inst_10991,inst_10992,inst_10993,inst_10994,inst_10995,inst_10996,inst_10997,inst_10998,inst_10999,inst_11000,inst_11001,inst_11002,inst_11003,inst_11004,inst_11005,inst_11006,inst_11007,inst_11008,inst_11009,inst_11010__$1,inst_11015,inst_11016,inst_11017__$1,inst_11018__$1,inst_11019,inst_11020,inst_11021__$1,inst_11022__$1,inst_11023__$1,inst_11024,inst_11046,inst_11047,inst_11048,inst_11059,inst_11060,inst_11061,inst_11062,inst_11063,inst_11064,inst_11065,inst_11066,inst_11095,inst_11096,inst_11097,inst_11098,inst_11099,inst_11100,inst_11144,inst_11145,inst_11146,state_val_11836,c__6459__auto___12267))
})();
var inst_11175 = cljs.core.async.chan.call(null,(1));
var inst_11176 = (function (){var add_cell_BANG_ = inst_11022__$1;
var depth_compare = inst_10934__$1;
var player_stars_text = inst_10853;
var player_standing_texs = inst_10840;
var player_shadow = inst_10830;
var close_QMARK_ = inst_10938__$1;
var player_pos = inst_11021__$1;
var obstacle_types = inst_10862;
var polar_object_coords = inst_10935__$1;
var trees = inst_10869;
var player_standing_sway = inst_10843;
var game_sprites = inst_11017__$1;
var loader = inst_10811;
var player_walking_texs = inst_10848;
var shadow_tex = inst_10829;
var _ = inst_10825;
var tex = inst_10827;
var c__6459__auto____$1 = inst_11175;
var hit_sfx = inst_10933__$1;
var lobster_big = inst_10817;
var game_map = inst_11010__$1;
var star_tex = inst_10849;
var remove_cell_BANG_ = inst_11023__$1;
var tufts = inst_10876;
var game_space = inst_11018__$1;
var pickup_textures = inst_10856;
var perlin_channel = inst_10812;
var title_text = inst_10826;
var floor_objects = inst_10859;
var cull_distance_QMARK_ = inst_11147;
var pickup_sfx = inst_10906;
var tilemap = inst_10824;
var make_pickup = inst_10879;
var varela = inst_10818;
var wait = inst_10821;
var player = inst_10828;
var player_stars_icon = inst_10850;
return ((function (add_cell_BANG_,depth_compare,player_stars_text,player_standing_texs,player_shadow,close_QMARK_,player_pos,obstacle_types,polar_object_coords,trees,player_standing_sway,game_sprites,loader,player_walking_texs,shadow_tex,_,tex,c__6459__auto____$1,hit_sfx,lobster_big,game_map,star_tex,remove_cell_BANG_,tufts,game_space,pickup_textures,perlin_channel,title_text,floor_objects,cull_distance_QMARK_,pickup_sfx,tilemap,make_pickup,varela,wait,player,player_stars_icon,inst_10828,inst_10862,inst_10853,inst_10879,inst_10850,inst_10830,inst_10812,inst_11010,inst_10829,inst_11018,inst_10906,inst_10849,inst_11023,inst_10840,inst_10938,inst_10848,inst_10856,inst_10827,inst_10818,inst_10843,inst_11021,inst_10934,inst_11022,inst_10826,inst_10933,inst_10876,inst_10817,inst_10825,inst_10824,inst_10821,inst_10859,inst_10935,inst_10811,inst_10869,inst_11017,inst_10933__$1,inst_10934__$1,inst_10935__$1,inst_10938__$1,inst_10939,inst_10940,inst_10941,inst_10942,inst_10943,inst_10944,inst_10945,inst_10946,inst_10947,inst_10948,inst_10949,inst_10950,inst_10951,inst_10952,inst_10953,inst_10954,inst_10955,inst_10956,inst_10957,inst_10958,inst_10959,inst_10960,inst_10961,inst_10962,inst_10963,inst_10964,inst_10965,inst_10966,inst_10967,inst_10968,inst_10969,inst_10970,inst_10971,inst_10972,inst_10973,inst_10974,inst_10975,inst_10976,inst_10977,inst_10978,inst_10979,inst_10980,inst_10981,inst_10982,inst_10983,inst_10984,inst_10985,inst_10986,inst_10987,inst_10988,inst_10989,inst_10990,inst_10991,inst_10992,inst_10993,inst_10994,inst_10995,inst_10996,inst_10997,inst_10998,inst_10999,inst_11000,inst_11001,inst_11002,inst_11003,inst_11004,inst_11005,inst_11006,inst_11007,inst_11008,inst_11009,inst_11010__$1,inst_11015,inst_11016,inst_11017__$1,inst_11018__$1,inst_11019,inst_11020,inst_11021__$1,inst_11022__$1,inst_11023__$1,inst_11024,inst_11046,inst_11047,inst_11048,inst_11059,inst_11060,inst_11061,inst_11062,inst_11063,inst_11064,inst_11065,inst_11066,inst_11095,inst_11096,inst_11097,inst_11098,inst_11099,inst_11100,inst_11144,inst_11145,inst_11146,inst_11147,inst_11175,state_val_11836,c__6459__auto___12267){
return (function (){
var f__6460__auto__ = (function (){var switch__6444__auto__ = ((function (add_cell_BANG_,depth_compare,player_stars_text,player_standing_texs,player_shadow,close_QMARK_,player_pos,obstacle_types,polar_object_coords,trees,player_standing_sway,game_sprites,loader,player_walking_texs,shadow_tex,_,tex,c__6459__auto____$1,hit_sfx,lobster_big,game_map,star_tex,remove_cell_BANG_,tufts,game_space,pickup_textures,perlin_channel,title_text,floor_objects,cull_distance_QMARK_,pickup_sfx,tilemap,make_pickup,varela,wait,player,player_stars_icon,inst_10828,inst_10862,inst_10853,inst_10879,inst_10850,inst_10830,inst_10812,inst_11010,inst_10829,inst_11018,inst_10906,inst_10849,inst_11023,inst_10840,inst_10938,inst_10848,inst_10856,inst_10827,inst_10818,inst_10843,inst_11021,inst_10934,inst_11022,inst_10826,inst_10933,inst_10876,inst_10817,inst_10825,inst_10824,inst_10821,inst_10859,inst_10935,inst_10811,inst_10869,inst_11017,inst_10933__$1,inst_10934__$1,inst_10935__$1,inst_10938__$1,inst_10939,inst_10940,inst_10941,inst_10942,inst_10943,inst_10944,inst_10945,inst_10946,inst_10947,inst_10948,inst_10949,inst_10950,inst_10951,inst_10952,inst_10953,inst_10954,inst_10955,inst_10956,inst_10957,inst_10958,inst_10959,inst_10960,inst_10961,inst_10962,inst_10963,inst_10964,inst_10965,inst_10966,inst_10967,inst_10968,inst_10969,inst_10970,inst_10971,inst_10972,inst_10973,inst_10974,inst_10975,inst_10976,inst_10977,inst_10978,inst_10979,inst_10980,inst_10981,inst_10982,inst_10983,inst_10984,inst_10985,inst_10986,inst_10987,inst_10988,inst_10989,inst_10990,inst_10991,inst_10992,inst_10993,inst_10994,inst_10995,inst_10996,inst_10997,inst_10998,inst_10999,inst_11000,inst_11001,inst_11002,inst_11003,inst_11004,inst_11005,inst_11006,inst_11007,inst_11008,inst_11009,inst_11010__$1,inst_11015,inst_11016,inst_11017__$1,inst_11018__$1,inst_11019,inst_11020,inst_11021__$1,inst_11022__$1,inst_11023__$1,inst_11024,inst_11046,inst_11047,inst_11048,inst_11059,inst_11060,inst_11061,inst_11062,inst_11063,inst_11064,inst_11065,inst_11066,inst_11095,inst_11096,inst_11097,inst_11098,inst_11099,inst_11100,inst_11144,inst_11145,inst_11146,inst_11147,inst_11175,state_val_11836,c__6459__auto___12267){
return (function (state_11173){
var state_val_11174 = (state_11173[(1)]);
if((state_val_11174 === (7))){
var inst_11154 = (state_11173[(7)]);
var inst_11152 = (state_11173[(2)]);
var inst_11153 = cljs.core.deref.call(null,farn.core.pickup_store);
var inst_11154__$1 = cljs.core.some.call(null,cull_distance_QMARK_,inst_11153);
var state_11173__$1 = (function (){var statearr_12133 = state_11173;
(statearr_12133[(8)] = inst_11152);

(statearr_12133[(7)] = inst_11154__$1);

return statearr_12133;
})();
if(cljs.core.truth_(inst_11154__$1)){
var statearr_12134_12479 = state_11173__$1;
(statearr_12134_12479[(1)] = (8));

} else {
var statearr_12135_12480 = state_11173__$1;
(statearr_12135_12480[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11174 === (1))){
var state_11173__$1 = state_11173;
var statearr_12136_12481 = state_11173__$1;
(statearr_12136_12481[(2)] = null);

(statearr_12136_12481[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11174 === (4))){
var inst_11150 = cljs.core.async.timeout.call(null,(250));
var state_11173__$1 = state_11173;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11173__$1,(7),inst_11150);
} else {
if((state_val_11174 === (6))){
var inst_11169 = (state_11173[(2)]);
var state_11173__$1 = state_11173;
var statearr_12137_12482 = state_11173__$1;
(statearr_12137_12482[(2)] = inst_11169);

(statearr_12137_12482[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11174 === (3))){
var inst_11171 = (state_11173[(2)]);
var state_11173__$1 = state_11173;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11173__$1,inst_11171);
} else {
if((state_val_11174 === (2))){
var state_11173__$1 = state_11173;
var statearr_12138_12483 = state_11173__$1;
(statearr_12138_12483[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11174 === (9))){
var state_11173__$1 = state_11173;
var statearr_12140_12484 = state_11173__$1;
(statearr_12140_12484[(2)] = null);

(statearr_12140_12484[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11174 === (5))){
var state_11173__$1 = state_11173;
var statearr_12141_12485 = state_11173__$1;
(statearr_12141_12485[(2)] = null);

(statearr_12141_12485[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11174 === (10))){
var inst_11165 = (state_11173[(2)]);
var state_11173__$1 = (function (){var statearr_12142 = state_11173;
(statearr_12142[(9)] = inst_11165);

return statearr_12142;
})();
var statearr_12143_12486 = state_11173__$1;
(statearr_12143_12486[(2)] = null);

(statearr_12143_12486[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11174 === (8))){
var inst_11154 = (state_11173[(7)]);
var inst_11156 = new cljs.core.Keyword(null,"sprite","sprite",172516848).cljs$core$IFn$_invoke$arity$1(inst_11154);
var inst_11157 = farn.core.main_stage.removeChild(inst_11156);
var inst_11158 = new cljs.core.Keyword(null,"shadow","shadow",873231803).cljs$core$IFn$_invoke$arity$1(inst_11154);
var inst_11159 = farn.core.main_stage.removeChild(inst_11158);
var inst_11160 = [cljs.core.str(inst_11154)].join('');
var inst_11161 = farn.utils.log.call(null,"REMOVING",inst_11160);
var inst_11162 = cljs.core.swap_BANG_.call(null,farn.core.pickup_store,cljs.core.disj,inst_11154);
var state_11173__$1 = (function (){var statearr_12144 = state_11173;
(statearr_12144[(10)] = inst_11157);

(statearr_12144[(11)] = inst_11159);

(statearr_12144[(12)] = inst_11161);

return statearr_12144;
})();
var statearr_12145_12487 = state_11173__$1;
(statearr_12145_12487[(2)] = inst_11162);

(statearr_12145_12487[(1)] = (10));


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
});})(add_cell_BANG_,depth_compare,player_stars_text,player_standing_texs,player_shadow,close_QMARK_,player_pos,obstacle_types,polar_object_coords,trees,player_standing_sway,game_sprites,loader,player_walking_texs,shadow_tex,_,tex,c__6459__auto____$1,hit_sfx,lobster_big,game_map,star_tex,remove_cell_BANG_,tufts,game_space,pickup_textures,perlin_channel,title_text,floor_objects,cull_distance_QMARK_,pickup_sfx,tilemap,make_pickup,varela,wait,player,player_stars_icon,inst_10828,inst_10862,inst_10853,inst_10879,inst_10850,inst_10830,inst_10812,inst_11010,inst_10829,inst_11018,inst_10906,inst_10849,inst_11023,inst_10840,inst_10938,inst_10848,inst_10856,inst_10827,inst_10818,inst_10843,inst_11021,inst_10934,inst_11022,inst_10826,inst_10933,inst_10876,inst_10817,inst_10825,inst_10824,inst_10821,inst_10859,inst_10935,inst_10811,inst_10869,inst_11017,inst_10933__$1,inst_10934__$1,inst_10935__$1,inst_10938__$1,inst_10939,inst_10940,inst_10941,inst_10942,inst_10943,inst_10944,inst_10945,inst_10946,inst_10947,inst_10948,inst_10949,inst_10950,inst_10951,inst_10952,inst_10953,inst_10954,inst_10955,inst_10956,inst_10957,inst_10958,inst_10959,inst_10960,inst_10961,inst_10962,inst_10963,inst_10964,inst_10965,inst_10966,inst_10967,inst_10968,inst_10969,inst_10970,inst_10971,inst_10972,inst_10973,inst_10974,inst_10975,inst_10976,inst_10977,inst_10978,inst_10979,inst_10980,inst_10981,inst_10982,inst_10983,inst_10984,inst_10985,inst_10986,inst_10987,inst_10988,inst_10989,inst_10990,inst_10991,inst_10992,inst_10993,inst_10994,inst_10995,inst_10996,inst_10997,inst_10998,inst_10999,inst_11000,inst_11001,inst_11002,inst_11003,inst_11004,inst_11005,inst_11006,inst_11007,inst_11008,inst_11009,inst_11010__$1,inst_11015,inst_11016,inst_11017__$1,inst_11018__$1,inst_11019,inst_11020,inst_11021__$1,inst_11022__$1,inst_11023__$1,inst_11024,inst_11046,inst_11047,inst_11048,inst_11059,inst_11060,inst_11061,inst_11062,inst_11063,inst_11064,inst_11065,inst_11066,inst_11095,inst_11096,inst_11097,inst_11098,inst_11099,inst_11100,inst_11144,inst_11145,inst_11146,inst_11147,inst_11175,state_val_11836,c__6459__auto___12267))
;
return ((function (switch__6444__auto__,add_cell_BANG_,depth_compare,player_stars_text,player_standing_texs,player_shadow,close_QMARK_,player_pos,obstacle_types,polar_object_coords,trees,player_standing_sway,game_sprites,loader,player_walking_texs,shadow_tex,_,tex,c__6459__auto____$1,hit_sfx,lobster_big,game_map,star_tex,remove_cell_BANG_,tufts,game_space,pickup_textures,perlin_channel,title_text,floor_objects,cull_distance_QMARK_,pickup_sfx,tilemap,make_pickup,varela,wait,player,player_stars_icon,inst_10828,inst_10862,inst_10853,inst_10879,inst_10850,inst_10830,inst_10812,inst_11010,inst_10829,inst_11018,inst_10906,inst_10849,inst_11023,inst_10840,inst_10938,inst_10848,inst_10856,inst_10827,inst_10818,inst_10843,inst_11021,inst_10934,inst_11022,inst_10826,inst_10933,inst_10876,inst_10817,inst_10825,inst_10824,inst_10821,inst_10859,inst_10935,inst_10811,inst_10869,inst_11017,inst_10933__$1,inst_10934__$1,inst_10935__$1,inst_10938__$1,inst_10939,inst_10940,inst_10941,inst_10942,inst_10943,inst_10944,inst_10945,inst_10946,inst_10947,inst_10948,inst_10949,inst_10950,inst_10951,inst_10952,inst_10953,inst_10954,inst_10955,inst_10956,inst_10957,inst_10958,inst_10959,inst_10960,inst_10961,inst_10962,inst_10963,inst_10964,inst_10965,inst_10966,inst_10967,inst_10968,inst_10969,inst_10970,inst_10971,inst_10972,inst_10973,inst_10974,inst_10975,inst_10976,inst_10977,inst_10978,inst_10979,inst_10980,inst_10981,inst_10982,inst_10983,inst_10984,inst_10985,inst_10986,inst_10987,inst_10988,inst_10989,inst_10990,inst_10991,inst_10992,inst_10993,inst_10994,inst_10995,inst_10996,inst_10997,inst_10998,inst_10999,inst_11000,inst_11001,inst_11002,inst_11003,inst_11004,inst_11005,inst_11006,inst_11007,inst_11008,inst_11009,inst_11010__$1,inst_11015,inst_11016,inst_11017__$1,inst_11018__$1,inst_11019,inst_11020,inst_11021__$1,inst_11022__$1,inst_11023__$1,inst_11024,inst_11046,inst_11047,inst_11048,inst_11059,inst_11060,inst_11061,inst_11062,inst_11063,inst_11064,inst_11065,inst_11066,inst_11095,inst_11096,inst_11097,inst_11098,inst_11099,inst_11100,inst_11144,inst_11145,inst_11146,inst_11147,inst_11175,state_val_11836,c__6459__auto___12267){
return (function() {
var state_machine__6445__auto__ = null;
var state_machine__6445__auto____0 = (function (){
var statearr_12149 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12149[(0)] = state_machine__6445__auto__);

(statearr_12149[(1)] = (1));

return statearr_12149;
});
var state_machine__6445__auto____1 = (function (state_11173){
while(true){
var ret_value__6446__auto__ = (function (){try{while(true){
var result__6447__auto__ = switch__6444__auto__.call(null,state_11173);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6447__auto__;
}
break;
}
}catch (e12150){if((e12150 instanceof Object)){
var ex__6448__auto__ = e12150;
var statearr_12151_12488 = state_11173;
(statearr_12151_12488[(5)] = ex__6448__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11173);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12150;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12489 = state_11173;
state_11173 = G__12489;
continue;
} else {
return ret_value__6446__auto__;
}
break;
}
});
state_machine__6445__auto__ = function(state_11173){
switch(arguments.length){
case 0:
return state_machine__6445__auto____0.call(this);
case 1:
return state_machine__6445__auto____1.call(this,state_11173);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6445__auto____0;
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6445__auto____1;
return state_machine__6445__auto__;
})()
;})(switch__6444__auto__,add_cell_BANG_,depth_compare,player_stars_text,player_standing_texs,player_shadow,close_QMARK_,player_pos,obstacle_types,polar_object_coords,trees,player_standing_sway,game_sprites,loader,player_walking_texs,shadow_tex,_,tex,c__6459__auto____$1,hit_sfx,lobster_big,game_map,star_tex,remove_cell_BANG_,tufts,game_space,pickup_textures,perlin_channel,title_text,floor_objects,cull_distance_QMARK_,pickup_sfx,tilemap,make_pickup,varela,wait,player,player_stars_icon,inst_10828,inst_10862,inst_10853,inst_10879,inst_10850,inst_10830,inst_10812,inst_11010,inst_10829,inst_11018,inst_10906,inst_10849,inst_11023,inst_10840,inst_10938,inst_10848,inst_10856,inst_10827,inst_10818,inst_10843,inst_11021,inst_10934,inst_11022,inst_10826,inst_10933,inst_10876,inst_10817,inst_10825,inst_10824,inst_10821,inst_10859,inst_10935,inst_10811,inst_10869,inst_11017,inst_10933__$1,inst_10934__$1,inst_10935__$1,inst_10938__$1,inst_10939,inst_10940,inst_10941,inst_10942,inst_10943,inst_10944,inst_10945,inst_10946,inst_10947,inst_10948,inst_10949,inst_10950,inst_10951,inst_10952,inst_10953,inst_10954,inst_10955,inst_10956,inst_10957,inst_10958,inst_10959,inst_10960,inst_10961,inst_10962,inst_10963,inst_10964,inst_10965,inst_10966,inst_10967,inst_10968,inst_10969,inst_10970,inst_10971,inst_10972,inst_10973,inst_10974,inst_10975,inst_10976,inst_10977,inst_10978,inst_10979,inst_10980,inst_10981,inst_10982,inst_10983,inst_10984,inst_10985,inst_10986,inst_10987,inst_10988,inst_10989,inst_10990,inst_10991,inst_10992,inst_10993,inst_10994,inst_10995,inst_10996,inst_10997,inst_10998,inst_10999,inst_11000,inst_11001,inst_11002,inst_11003,inst_11004,inst_11005,inst_11006,inst_11007,inst_11008,inst_11009,inst_11010__$1,inst_11015,inst_11016,inst_11017__$1,inst_11018__$1,inst_11019,inst_11020,inst_11021__$1,inst_11022__$1,inst_11023__$1,inst_11024,inst_11046,inst_11047,inst_11048,inst_11059,inst_11060,inst_11061,inst_11062,inst_11063,inst_11064,inst_11065,inst_11066,inst_11095,inst_11096,inst_11097,inst_11098,inst_11099,inst_11100,inst_11144,inst_11145,inst_11146,inst_11147,inst_11175,state_val_11836,c__6459__auto___12267))
})();
var state__6461__auto__ = (function (){var statearr_12152 = f__6460__auto__.call(null);
(statearr_12152[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6459__auto____$1);

return statearr_12152;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6461__auto__);
});
;})(add_cell_BANG_,depth_compare,player_stars_text,player_standing_texs,player_shadow,close_QMARK_,player_pos,obstacle_types,polar_object_coords,trees,player_standing_sway,game_sprites,loader,player_walking_texs,shadow_tex,_,tex,c__6459__auto____$1,hit_sfx,lobster_big,game_map,star_tex,remove_cell_BANG_,tufts,game_space,pickup_textures,perlin_channel,title_text,floor_objects,cull_distance_QMARK_,pickup_sfx,tilemap,make_pickup,varela,wait,player,player_stars_icon,inst_10828,inst_10862,inst_10853,inst_10879,inst_10850,inst_10830,inst_10812,inst_11010,inst_10829,inst_11018,inst_10906,inst_10849,inst_11023,inst_10840,inst_10938,inst_10848,inst_10856,inst_10827,inst_10818,inst_10843,inst_11021,inst_10934,inst_11022,inst_10826,inst_10933,inst_10876,inst_10817,inst_10825,inst_10824,inst_10821,inst_10859,inst_10935,inst_10811,inst_10869,inst_11017,inst_10933__$1,inst_10934__$1,inst_10935__$1,inst_10938__$1,inst_10939,inst_10940,inst_10941,inst_10942,inst_10943,inst_10944,inst_10945,inst_10946,inst_10947,inst_10948,inst_10949,inst_10950,inst_10951,inst_10952,inst_10953,inst_10954,inst_10955,inst_10956,inst_10957,inst_10958,inst_10959,inst_10960,inst_10961,inst_10962,inst_10963,inst_10964,inst_10965,inst_10966,inst_10967,inst_10968,inst_10969,inst_10970,inst_10971,inst_10972,inst_10973,inst_10974,inst_10975,inst_10976,inst_10977,inst_10978,inst_10979,inst_10980,inst_10981,inst_10982,inst_10983,inst_10984,inst_10985,inst_10986,inst_10987,inst_10988,inst_10989,inst_10990,inst_10991,inst_10992,inst_10993,inst_10994,inst_10995,inst_10996,inst_10997,inst_10998,inst_10999,inst_11000,inst_11001,inst_11002,inst_11003,inst_11004,inst_11005,inst_11006,inst_11007,inst_11008,inst_11009,inst_11010__$1,inst_11015,inst_11016,inst_11017__$1,inst_11018__$1,inst_11019,inst_11020,inst_11021__$1,inst_11022__$1,inst_11023__$1,inst_11024,inst_11046,inst_11047,inst_11048,inst_11059,inst_11060,inst_11061,inst_11062,inst_11063,inst_11064,inst_11065,inst_11066,inst_11095,inst_11096,inst_11097,inst_11098,inst_11099,inst_11100,inst_11144,inst_11145,inst_11146,inst_11147,inst_11175,state_val_11836,c__6459__auto___12267))
})();
var inst_11177 = cljs.core.async.impl.dispatch.run.call(null,inst_11176);
var inst_11178 = cljs.core.async.timeout.call(null,(1000));
var state_11835__$1 = (function (){var statearr_12153 = state_11835;
(statearr_12153[(155)] = inst_11146);

(statearr_12153[(156)] = inst_11099);

(statearr_12153[(54)] = inst_11010__$1);

(statearr_12153[(21)] = inst_11018__$1);

(statearr_12153[(58)] = inst_11023__$1);

(statearr_12153[(157)] = inst_11064);

(statearr_12153[(158)] = inst_11048);

(statearr_12153[(60)] = inst_10938__$1);

(statearr_12153[(159)] = inst_11065);

(statearr_12153[(160)] = inst_11066);

(statearr_12153[(161)] = inst_11177);

(statearr_12153[(68)] = inst_11021__$1);

(statearr_12153[(162)] = inst_11100);

(statearr_12153[(74)] = inst_10934__$1);

(statearr_12153[(77)] = inst_11022__$1);

(statearr_12153[(18)] = inst_10933__$1);

(statearr_12153[(163)] = inst_11062);

(statearr_12153[(164)] = inst_11024);

(statearr_12153[(165)] = inst_11097);

(statearr_12153[(37)] = inst_10935__$1);

(statearr_12153[(166)] = inst_11063);

(statearr_12153[(167)] = inst_11061);

(statearr_12153[(92)] = inst_11017__$1);

return statearr_12153;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11835__$1,(17),inst_11178);
} else {
if((state_val_11836 === (2))){
var inst_10815 = (state_11835[(2)]);
var inst_10816 = farn.utils.log.call(null,"pulled");
var inst_10817 = farn.font.make_tiled_font.call(null,"Lobster",(400),(48));
var inst_10818 = farn.font.make_tiled_font.call(null,"Varela Round",(400),(24));
var inst_10819 = cljs.core.async.timeout.call(null,(1000));
var state_11835__$1 = (function (){var statearr_12154 = state_11835;
(statearr_12154[(64)] = inst_10818);

(statearr_12154[(82)] = inst_10817);

(statearr_12154[(168)] = inst_10815);

(statearr_12154[(169)] = inst_10816);

return statearr_12154;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11835__$1,(3),inst_10819);
} else {
if((state_val_11836 === (66))){
var inst_11515 = (state_11835[(2)]);
var state_11835__$1 = state_11835;
var statearr_12155_12490 = state_11835__$1;
(statearr_12155_12490[(2)] = inst_11515);

(statearr_12155_12490[(1)] = (64));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11836 === (107))){
var inst_11745 = (state_11835[(2)]);
var state_11835__$1 = state_11835;
var statearr_12156_12491 = state_11835__$1;
(statearr_12156_12491[(2)] = inst_11745);

(statearr_12156_12491[(1)] = (104));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11836 === (23))){
var inst_11359 = (state_11835[(121)]);
var inst_11362 = (state_11835[(170)]);
var inst_11362__$1 = cljs.core.nth.call(null,inst_11359,(0),null);
var inst_11363 = cljs.core.nthnext.call(null,inst_11359,(1));
var inst_11364 = (inst_11362__$1 == null);
var state_11835__$1 = (function (){var statearr_12157 = state_11835;
(statearr_12157[(171)] = inst_11363);

(statearr_12157[(170)] = inst_11362__$1);

return statearr_12157;
})();
if(cljs.core.truth_(inst_11364)){
var statearr_12158_12492 = state_11835__$1;
(statearr_12158_12492[(1)] = (25));

} else {
var statearr_12159_12493 = state_11835__$1;
(statearr_12159_12493[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11836 === (47))){
var inst_11442 = (state_11835[(111)]);
var inst_11446 = cljs.core.chunk_first.call(null,inst_11442);
var inst_11447 = cljs.core.chunk_rest.call(null,inst_11442);
var inst_11448 = cljs.core.count.call(null,inst_11446);
var inst_11409 = inst_11447;
var inst_11410 = inst_11446;
var inst_11411 = inst_11448;
var inst_11412 = (0);
var state_11835__$1 = (function (){var statearr_12160 = state_11835;
(statearr_12160[(112)] = inst_11412);

(statearr_12160[(113)] = inst_11411);

(statearr_12160[(114)] = inst_11410);

(statearr_12160[(115)] = inst_11409);

return statearr_12160;
})();
var statearr_12161_12494 = state_11835__$1;
(statearr_12161_12494[(2)] = null);

(statearr_12161_12494[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11836 === (35))){
var inst_10828 = (state_11835[(43)]);
var inst_11412 = (state_11835[(112)]);
var inst_11410 = (state_11835[(114)]);
var inst_11417 = (state_11835[(172)]);
var inst_11417__$1 = cljs.core._nth.call(null,inst_11410,inst_11412);
var inst_11418 = new cljs.core.Keyword(null,"sprite","sprite",172516848).cljs$core$IFn$_invoke$arity$1(inst_11417__$1);
var inst_11419 = farn.sprite.overlap_QMARK_.call(null,inst_10828,inst_11418);
var state_11835__$1 = (function (){var statearr_12162 = state_11835;
(statearr_12162[(172)] = inst_11417__$1);

return statearr_12162;
})();
if(inst_11419){
var statearr_12163_12495 = state_11835__$1;
(statearr_12163_12495[(1)] = (38));

} else {
var statearr_12164_12496 = state_11835__$1;
(statearr_12164_12496[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11836 === (127))){
var state_11835__$1 = state_11835;
var statearr_12168_12497 = state_11835__$1;
(statearr_12168_12497[(2)] = (0));

(statearr_12168_12497[(1)] = (129));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11836 === (82))){
var inst_11591 = (state_11835[(2)]);
var state_11835__$1 = state_11835;
var statearr_12169_12498 = state_11835__$1;
(statearr_12169_12498[(2)] = inst_11591);

(statearr_12169_12498[(1)] = (79));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11836 === (76))){
var inst_11535 = (state_11835[(13)]);
var inst_11532 = (state_11835[(126)]);
var inst_11533 = (state_11835[(22)]);
var inst_11534 = (state_11835[(14)]);
var inst_11595 = (state_11835[(2)]);
var inst_11596 = (inst_11535 + (1));
var tmp12165 = inst_11532;
var tmp12166 = inst_11533;
var tmp12167 = inst_11534;
var inst_11532__$1 = tmp12165;
var inst_11533__$1 = tmp12166;
var inst_11534__$1 = tmp12167;
var inst_11535__$1 = inst_11596;
var state_11835__$1 = (function (){var statearr_12170 = state_11835;
(statearr_12170[(13)] = inst_11535__$1);

(statearr_12170[(126)] = inst_11532__$1);

(statearr_12170[(22)] = inst_11533__$1);

(statearr_12170[(173)] = inst_11595);

(statearr_12170[(14)] = inst_11534__$1);

return statearr_12170;
})();
var statearr_12171_12499 = state_11835__$1;
(statearr_12171_12499[(2)] = null);

(statearr_12171_12499[(1)] = (70));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11836 === (97))){
var inst_11635 = (state_11835[(34)]);
var inst_11637 = cljs.core.chunked_seq_QMARK_.call(null,inst_11635);
var state_11835__$1 = state_11835;
if(inst_11637){
var statearr_12172_12500 = state_11835__$1;
(statearr_12172_12500[(1)] = (100));

} else {
var statearr_12173_12501 = state_11835__$1;
(statearr_12173_12501[(1)] = (101));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11836 === (19))){
var inst_11833 = (state_11835[(2)]);
var state_11835__$1 = state_11835;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11835__$1,inst_11833);
} else {
if((state_val_11836 === (57))){
var inst_11489 = (state_11835[(145)]);
var state_11835__$1 = state_11835;
var statearr_12174_12502 = state_11835__$1;
(statearr_12174_12502[(2)] = inst_11489);

(statearr_12174_12502[(1)] = (58));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11836 === (68))){
var state_11835__$1 = state_11835;
var statearr_12175_12503 = state_11835__$1;
(statearr_12175_12503[(2)] = null);

(statearr_12175_12503[(1)] = (69));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11836 === (11))){
var inst_10918 = (state_11835[(120)]);
var inst_10915 = (state_11835[(135)]);
var inst_10918__$1 = cljs.core.nth.call(null,inst_10915,(0),null);
var inst_10919 = cljs.core.nthnext.call(null,inst_10915,(1));
var inst_10920 = (inst_10918__$1 == null);
var inst_10921 = cljs.core.not.call(null,inst_10920);
var state_11835__$1 = (function (){var statearr_12176 = state_11835;
(statearr_12176[(120)] = inst_10918__$1);

(statearr_12176[(174)] = inst_10919);

return statearr_12176;
})();
if(inst_10921){
var statearr_12177_12504 = state_11835__$1;
(statearr_12177_12504[(1)] = (13));

} else {
var statearr_12178_12505 = state_11835__$1;
(statearr_12178_12505[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11836 === (115))){
var inst_11762 = (state_11835[(118)]);
var inst_11336 = (state_11835[(78)]);
var inst_11761 = Math.abs.call(null,inst_11336);
var inst_11762__$1 = (inst_11761 > (2));
var state_11835__$1 = (function (){var statearr_12179 = state_11835;
(statearr_12179[(118)] = inst_11762__$1);

return statearr_12179;
})();
if(cljs.core.truth_(inst_11762__$1)){
var statearr_12180_12506 = state_11835__$1;
(statearr_12180_12506[(1)] = (117));

} else {
var statearr_12181_12507 = state_11835__$1;
(statearr_12181_12507[(1)] = (118));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11836 === (9))){
var inst_10904 = (state_11835[(2)]);
var state_11835__$1 = state_11835;
var statearr_12182_12508 = state_11835__$1;
(statearr_12182_12508[(2)] = inst_10904);

(statearr_12182_12508[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11836 === (5))){
var inst_10891 = (state_11835[(16)]);
var inst_10888 = (state_11835[(95)]);
var inst_10891__$1 = cljs.core.nth.call(null,inst_10888,(0),null);
var inst_10892 = cljs.core.nthnext.call(null,inst_10888,(1));
var inst_10893 = (inst_10891__$1 == null);
var inst_10894 = cljs.core.not.call(null,inst_10893);
var state_11835__$1 = (function (){var statearr_12183 = state_11835;
(statearr_12183[(16)] = inst_10891__$1);

(statearr_12183[(175)] = inst_10892);

return statearr_12183;
})();
if(inst_10894){
var statearr_12184_12509 = state_11835__$1;
(statearr_12184_12509[(1)] = (7));

} else {
var statearr_12185_12510 = state_11835__$1;
(statearr_12185_12510[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11836 === (112))){
var inst_11331 = (state_11835[(32)]);
var inst_11710 = (state_11835[(98)]);
var inst_11306 = (state_11835[(76)]);
var inst_11325 = (state_11835[(33)]);
var inst_11334 = (state_11835[(35)]);
var inst_11324 = (state_11835[(36)]);
var inst_10935 = (state_11835[(37)]);
var inst_11719 = cljs.core.first.call(null,inst_11710);
var inst_11721 = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(inst_11719);
var inst_11722 = new cljs.core.Keyword(null,"sprite","sprite",172516848).cljs$core$IFn$_invoke$arity$1(inst_11719);
var inst_11723 = inst_10935.call(null,inst_11721,inst_11722,inst_11324,inst_11325,inst_11331,inst_11334);
var inst_11724 = cljs.core.nth.call(null,inst_11723,(0),null);
var inst_11725 = cljs.core.nth.call(null,inst_11723,(1),null);
var inst_11726 = new cljs.core.Keyword(null,"sprite","sprite",172516848).cljs$core$IFn$_invoke$arity$1(inst_11719);
var inst_11727 = farn.sprite.set_pos_BANG_.call(null,inst_11726,inst_11724,inst_11725);
var inst_11728 = new cljs.core.Keyword(null,"shadow","shadow",873231803).cljs$core$IFn$_invoke$arity$1(inst_11719);
var inst_11729 = farn.sprite.set_pos_BANG_.call(null,inst_11728,inst_11724,inst_11725);
var inst_11730 = new cljs.core.Keyword(null,"sprite","sprite",172516848).cljs$core$IFn$_invoke$arity$1(inst_11719);
var inst_11731 = (inst_11306 * farn.core.pickup_bounce_speed);
var inst_11732 = Math.sin.call(null,inst_11731);
var inst_11733 = ((1) + inst_11732);
var inst_11734 = (farn.core.pickup_bounce_height * inst_11733);
var inst_11735 = (farn.core.pickup_vertical_offset + inst_11734);
var inst_11736 = farn.sprite.set_pivot_BANG_.call(null,inst_11730,(0),inst_11735);
var inst_11737 = cljs.core.next.call(null,inst_11710);
var inst_11681 = inst_11737;
var inst_11682 = null;
var inst_11683 = (0);
var inst_11684 = (0);
var state_11835__$1 = (function (){var statearr_12186 = state_11835;
(statearr_12186[(176)] = inst_11736);

(statearr_12186[(99)] = inst_11681);

(statearr_12186[(177)] = inst_11729);

(statearr_12186[(138)] = inst_11683);

(statearr_12186[(178)] = inst_11727);

(statearr_12186[(139)] = inst_11684);

(statearr_12186[(140)] = inst_11682);

return statearr_12186;
})();
var statearr_12187_12511 = state_11835__$1;
(statearr_12187_12511[(2)] = null);

(statearr_12187_12511[(1)] = (103));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11836 === (83))){
var inst_11567 = (state_11835[(179)]);
var inst_11571 = cljs.core.chunk_first.call(null,inst_11567);
var inst_11572 = cljs.core.chunk_rest.call(null,inst_11567);
var inst_11573 = cljs.core.count.call(null,inst_11571);
var inst_11547 = inst_11572;
var inst_11548 = inst_11571;
var inst_11549 = inst_11573;
var inst_11550 = (0);
var state_11835__$1 = (function (){var statearr_12188 = state_11835;
(statearr_12188[(23)] = inst_11549);

(statearr_12188[(24)] = inst_11547);

(statearr_12188[(25)] = inst_11548);

(statearr_12188[(26)] = inst_11550);

return statearr_12188;
})();
var statearr_12189_12512 = state_11835__$1;
(statearr_12189_12512[(2)] = null);

(statearr_12189_12512[(1)] = (75));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11836 === (138))){
var inst_11337 = (state_11835[(47)]);
var inst_11402 = (state_11835[(132)]);
var inst_11816 = (state_11835[(117)]);
var inst_11796 = (state_11835[(180)]);
var inst_11781 = (state_11835[(181)]);
var inst_11524 = (state_11835[(131)]);
var inst_11828 = (state_11835[(2)]);
var inst_11829 = (inst_11524 - (1));
var inst_11830 = (((0) > inst_11829) ? (0) : inst_11829);
var inst_11306 = inst_11781;
var inst_11307 = inst_11796;
var inst_11308 = inst_11816;
var inst_11309 = inst_11828;
var inst_11310 = inst_11402;
var inst_11311 = inst_11337;
var inst_11312 = inst_11830;
var state_11835__$1 = (function (){var statearr_12190 = state_11835;
(statearr_12190[(17)] = inst_11307);

(statearr_12190[(53)] = inst_11309);

(statearr_12190[(76)] = inst_11306);

(statearr_12190[(27)] = inst_11312);

(statearr_12190[(85)] = inst_11310);

(statearr_12190[(87)] = inst_11308);

(statearr_12190[(90)] = inst_11311);

return statearr_12190;
})();
var statearr_12191_12513 = state_11835__$1;
(statearr_12191_12513[(2)] = null);

(statearr_12191_12513[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11836 === (14))){
var inst_10914 = (state_11835[(134)]);
var state_11835__$1 = state_11835;
var statearr_12192_12514 = state_11835__$1;
(statearr_12192_12514[(2)] = inst_10914);

(statearr_12192_12514[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11836 === (45))){
var state_11835__$1 = state_11835;
var statearr_12193_12515 = state_11835__$1;
(statearr_12193_12515[(2)] = null);

(statearr_12193_12515[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11836 === (53))){
var inst_11458 = alert("BABY PIKCUP");
var state_11835__$1 = state_11835;
var statearr_12194_12516 = state_11835__$1;
(statearr_12194_12516[(2)] = inst_11458);

(statearr_12194_12516[(1)] = (55));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11836 === (78))){
var inst_11547 = (state_11835[(24)]);
var inst_11567 = (state_11835[(179)]);
var inst_11567__$1 = cljs.core.seq.call(null,inst_11547);
var state_11835__$1 = (function (){var statearr_12195 = state_11835;
(statearr_12195[(179)] = inst_11567__$1);

return statearr_12195;
})();
if(inst_11567__$1){
var statearr_12196_12517 = state_11835__$1;
(statearr_12196_12517[(1)] = (80));

} else {
var statearr_12197_12518 = state_11835__$1;
(statearr_12197_12518[(1)] = (81));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11836 === (132))){
var inst_11814 = (state_11835[(2)]);
var state_11835__$1 = state_11835;
var statearr_12198_12519 = state_11835__$1;
(statearr_12198_12519[(2)] = inst_11814);

(statearr_12198_12519[(1)] = (129));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11836 === (26))){
var inst_11352 = (state_11835[(45)]);
var inst_11358 = (state_11835[(122)]);
var inst_11363 = (state_11835[(171)]);
var inst_11362 = (state_11835[(170)]);
var inst_11367 = inst_11352.call(null,inst_11362,inst_11358);
var inst_11358__$1 = inst_11367;
var inst_11359 = inst_11363;
var state_11835__$1 = (function (){var statearr_12199 = state_11835;
(statearr_12199[(121)] = inst_11359);

(statearr_12199[(122)] = inst_11358__$1);

return statearr_12199;
})();
var statearr_12200_12520 = state_11835__$1;
(statearr_12200_12520[(2)] = null);

(statearr_12200_12520[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11836 === (123))){
var inst_11306 = (state_11835[(76)]);
var inst_11312 = (state_11835[(27)]);
var inst_11780 = (state_11835[(2)]);
var inst_11781 = (inst_11306 + (1));
var inst_11782 = (inst_11312 > (0));
var state_11835__$1 = (function (){var statearr_12201 = state_11835;
(statearr_12201[(181)] = inst_11781);

(statearr_12201[(182)] = inst_11780);

return statearr_12201;
})();
if(cljs.core.truth_(inst_11782)){
var statearr_12202_12521 = state_11835__$1;
(statearr_12202_12521[(1)] = (124));

} else {
var statearr_12203_12522 = state_11835__$1;
(statearr_12203_12522[(1)] = (125));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11836 === (140))){
var inst_11309 = (state_11835[(53)]);
var state_11835__$1 = state_11835;
var statearr_12204_12523 = state_11835__$1;
(statearr_12204_12523[(2)] = inst_11309);

(statearr_12204_12523[(1)] = (141));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11836 === (16))){
var inst_10914 = (state_11835[(134)]);
var inst_10919 = (state_11835[(174)]);
var inst_10926 = (state_11835[(2)]);
var inst_10927 = cljs.core.conj.call(null,inst_10914,inst_10926);
var inst_10914__$1 = inst_10927;
var inst_10915 = inst_10919;
var state_11835__$1 = (function (){var statearr_12205 = state_11835;
(statearr_12205[(134)] = inst_10914__$1);

(statearr_12205[(135)] = inst_10915);

return statearr_12205;
})();
var statearr_12206_12524 = state_11835__$1;
(statearr_12206_12524[(2)] = null);

(statearr_12206_12524[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11836 === (133))){
var inst_11308 = (state_11835[(87)]);
var inst_11805 = (inst_11308 + farn.core.player_acceleration);
var inst_11806 = ((inst_11805 < farn.core.player_max_speed) ? inst_11805 : farn.core.player_max_speed);
var state_11835__$1 = state_11835;
var statearr_12207_12525 = state_11835__$1;
(statearr_12207_12525[(2)] = inst_11806);

(statearr_12207_12525[(1)] = (135));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11836 === (81))){
var state_11835__$1 = state_11835;
var statearr_12208_12526 = state_11835__$1;
(statearr_12208_12526[(2)] = null);

(statearr_12208_12526[(1)] = (82));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11836 === (120))){
var inst_11771 = cljs.core.reset_BANG_.call(null,farn.core.player_animation,new cljs.core.Keyword(null,"running","running",1554969103));
var state_11835__$1 = state_11835;
var statearr_12209_12527 = state_11835__$1;
(statearr_12209_12527[(2)] = inst_11771);

(statearr_12209_12527[(1)] = (122));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11836 === (79))){
var inst_11593 = (state_11835[(2)]);
var state_11835__$1 = state_11835;
var statearr_12210_12528 = state_11835__$1;
(statearr_12210_12528[(2)] = inst_11593);

(statearr_12210_12528[(1)] = (76));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11836 === (38))){
var inst_11417 = (state_11835[(172)]);
var inst_11421 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(inst_11417);
var inst_11422 = cljs.core._EQ_.call(null,inst_11421,new cljs.core.Keyword(null,"pickup-baby-1","pickup-baby-1",-1650486973));
var state_11835__$1 = state_11835;
if(inst_11422){
var statearr_12211_12529 = state_11835__$1;
(statearr_12211_12529[(1)] = (41));

} else {
var statearr_12212_12530 = state_11835__$1;
(statearr_12212_12530[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11836 === (126))){
var inst_11524 = (state_11835[(131)]);
var inst_11796 = (state_11835[(2)]);
var inst_11797 = ((0) < inst_11524);
var inst_11798 = (inst_11524 < (5));
var inst_11799 = (inst_11797) && (inst_11798);
var state_11835__$1 = (function (){var statearr_12213 = state_11835;
(statearr_12213[(180)] = inst_11796);

return statearr_12213;
})();
if(cljs.core.truth_(inst_11799)){
var statearr_12214_12531 = state_11835__$1;
(statearr_12214_12531[(1)] = (127));

} else {
var statearr_12215_12532 = state_11835__$1;
(statearr_12215_12532[(1)] = (128));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11836 === (98))){
var state_11835__$1 = state_11835;
var statearr_12216_12533 = state_11835__$1;
(statearr_12216_12533[(2)] = null);

(statearr_12216_12533[(1)] = (99));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11836 === (124))){
var inst_11335 = (state_11835[(65)]);
var inst_11336 = (state_11835[(78)]);
var inst_11325 = (state_11835[(33)]);
var inst_11324 = (state_11835[(36)]);
var inst_11784 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_11785 = (inst_11324 + inst_11335);
var inst_11786 = (inst_11325 + inst_11336);
var inst_11787 = [inst_11785,inst_11786];
var inst_11788 = (new cljs.core.PersistentVector(null,2,(5),inst_11784,inst_11787,null));
var state_11835__$1 = state_11835;
var statearr_12217_12534 = state_11835__$1;
(statearr_12217_12534[(2)] = inst_11788);

(statearr_12217_12534[(1)] = (126));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11836 === (87))){
var state_11835__$1 = state_11835;
var statearr_12218_12535 = state_11835__$1;
(statearr_12218_12535[(2)] = null);

(statearr_12218_12535[(1)] = (88));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11836 === (30))){
var inst_11023 = (state_11835[(58)]);
var inst_11390 = (state_11835[(141)]);
var inst_11391 = (state_11835[(142)]);
var inst_11387 = (state_11835[(72)]);
var inst_11395 = inst_11023.call(null,inst_11390);
var inst_11396 = cljs.core.disj.call(null,inst_11387,inst_11390);
var inst_11386 = inst_11391;
var inst_11387__$1 = inst_11396;
var state_11835__$1 = (function (){var statearr_12219 = state_11835;
(statearr_12219[(72)] = inst_11387__$1);

(statearr_12219[(73)] = inst_11386);

(statearr_12219[(183)] = inst_11395);

return statearr_12219;
})();
var statearr_12220_12536 = state_11835__$1;
(statearr_12220_12536[(2)] = null);

(statearr_12220_12536[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11836 === (73))){
var inst_11532 = (state_11835[(126)]);
var inst_11599 = (state_11835[(20)]);
var inst_11599__$1 = cljs.core.seq.call(null,inst_11532);
var state_11835__$1 = (function (){var statearr_12221 = state_11835;
(statearr_12221[(20)] = inst_11599__$1);

return statearr_12221;
})();
if(inst_11599__$1){
var statearr_12222_12537 = state_11835__$1;
(statearr_12222_12537[(1)] = (86));

} else {
var statearr_12223_12538 = state_11835__$1;
(statearr_12223_12538[(1)] = (87));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11836 === (96))){
var inst_11661 = (state_11835[(2)]);
var state_11835__$1 = state_11835;
var statearr_12224_12539 = state_11835__$1;
(statearr_12224_12539[(2)] = inst_11661);

(statearr_12224_12539[(1)] = (93));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11836 === (10))){
var inst_10892 = (state_11835[(175)]);
var inst_10887 = (state_11835[(96)]);
var inst_10899 = (state_11835[(2)]);
var inst_10900 = cljs.core.conj.call(null,inst_10887,inst_10899);
var inst_10887__$1 = inst_10900;
var inst_10888 = inst_10892;
var state_11835__$1 = (function (){var statearr_12228 = state_11835;
(statearr_12228[(95)] = inst_10888);

(statearr_12228[(96)] = inst_10887__$1);

return statearr_12228;
})();
var statearr_12229_12540 = state_11835__$1;
(statearr_12229_12540[(2)] = null);

(statearr_12229_12540[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11836 === (18))){
var inst_11311 = (state_11835[(90)]);
var inst_11314 = farn.core.main_stage.children.length;
var inst_11315 = cljs.core.not_EQ_.call(null,inst_11311,inst_11314);
var state_11835__$1 = state_11835;
if(inst_11315){
var statearr_12230_12541 = state_11835__$1;
(statearr_12230_12541[(1)] = (20));

} else {
var statearr_12231_12542 = state_11835__$1;
(statearr_12231_12542[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11836 === (105))){
var inst_11331 = (state_11835[(32)]);
var inst_11681 = (state_11835[(99)]);
var inst_11306 = (state_11835[(76)]);
var inst_11325 = (state_11835[(33)]);
var inst_11683 = (state_11835[(138)]);
var inst_11334 = (state_11835[(35)]);
var inst_11324 = (state_11835[(36)]);
var inst_11684 = (state_11835[(139)]);
var inst_10935 = (state_11835[(37)]);
var inst_11682 = (state_11835[(140)]);
var inst_11689 = cljs.core._nth.call(null,inst_11682,inst_11684);
var inst_11691 = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(inst_11689);
var inst_11692 = new cljs.core.Keyword(null,"sprite","sprite",172516848).cljs$core$IFn$_invoke$arity$1(inst_11689);
var inst_11693 = inst_10935.call(null,inst_11691,inst_11692,inst_11324,inst_11325,inst_11331,inst_11334);
var inst_11694 = cljs.core.nth.call(null,inst_11693,(0),null);
var inst_11695 = cljs.core.nth.call(null,inst_11693,(1),null);
var inst_11696 = new cljs.core.Keyword(null,"sprite","sprite",172516848).cljs$core$IFn$_invoke$arity$1(inst_11689);
var inst_11697 = farn.sprite.set_pos_BANG_.call(null,inst_11696,inst_11694,inst_11695);
var inst_11698 = new cljs.core.Keyword(null,"shadow","shadow",873231803).cljs$core$IFn$_invoke$arity$1(inst_11689);
var inst_11699 = farn.sprite.set_pos_BANG_.call(null,inst_11698,inst_11694,inst_11695);
var inst_11700 = new cljs.core.Keyword(null,"sprite","sprite",172516848).cljs$core$IFn$_invoke$arity$1(inst_11689);
var inst_11701 = (inst_11306 * farn.core.pickup_bounce_speed);
var inst_11702 = Math.sin.call(null,inst_11701);
var inst_11703 = ((1) + inst_11702);
var inst_11704 = (farn.core.pickup_bounce_height * inst_11703);
var inst_11705 = (farn.core.pickup_vertical_offset + inst_11704);
var inst_11706 = farn.sprite.set_pivot_BANG_.call(null,inst_11700,(0),inst_11705);
var inst_11707 = (inst_11684 + (1));
var tmp12225 = inst_11681;
var tmp12226 = inst_11683;
var tmp12227 = inst_11682;
var inst_11681__$1 = tmp12225;
var inst_11682__$1 = tmp12227;
var inst_11683__$1 = tmp12226;
var inst_11684__$1 = inst_11707;
var state_11835__$1 = (function (){var statearr_12232 = state_11835;
(statearr_12232[(184)] = inst_11706);

(statearr_12232[(99)] = inst_11681__$1);

(statearr_12232[(185)] = inst_11699);

(statearr_12232[(138)] = inst_11683__$1);

(statearr_12232[(139)] = inst_11684__$1);

(statearr_12232[(186)] = inst_11697);

(statearr_12232[(140)] = inst_11682__$1);

return statearr_12232;
})();
var statearr_12233_12543 = state_11835__$1;
(statearr_12233_12543[(2)] = null);

(statearr_12233_12543[(1)] = (103));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11836 === (52))){
var inst_11442 = (state_11835[(111)]);
var inst_11472 = (state_11835[(2)]);
var inst_11473 = cljs.core.next.call(null,inst_11442);
var inst_11409 = inst_11473;
var inst_11410 = null;
var inst_11411 = (0);
var inst_11412 = (0);
var state_11835__$1 = (function (){var statearr_12234 = state_11835;
(statearr_12234[(112)] = inst_11412);

(statearr_12234[(113)] = inst_11411);

(statearr_12234[(114)] = inst_11410);

(statearr_12234[(187)] = inst_11472);

(statearr_12234[(115)] = inst_11409);

return statearr_12234;
})();
var statearr_12235_12544 = state_11835__$1;
(statearr_12235_12544[(2)] = null);

(statearr_12235_12544[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11836 === (114))){
var inst_11758 = (state_11835[(106)]);
var state_11835__$1 = state_11835;
var statearr_12236_12545 = state_11835__$1;
(statearr_12236_12545[(2)] = inst_11758);

(statearr_12236_12545[(1)] = (116));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11836 === (67))){
var inst_11504 = (state_11835[(11)]);
var inst_11509 = (inst_11504 - (1));
var inst_11504__$1 = inst_11509;
var state_11835__$1 = (function (){var statearr_12237 = state_11835;
(statearr_12237[(11)] = inst_11504__$1);

return statearr_12237;
})();
var statearr_12238_12546 = state_11835__$1;
(statearr_12238_12546[(2)] = null);

(statearr_12238_12546[(1)] = (65));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11836 === (71))){
var inst_11674 = (state_11835[(2)]);
var inst_11679 = cljs.core.deref.call(null,farn.core.pickup_store);
var inst_11680 = cljs.core.seq.call(null,inst_11679);
var inst_11681 = inst_11680;
var inst_11682 = null;
var inst_11683 = (0);
var inst_11684 = (0);
var state_11835__$1 = (function (){var statearr_12239 = state_11835;
(statearr_12239[(99)] = inst_11681);

(statearr_12239[(138)] = inst_11683);

(statearr_12239[(188)] = inst_11674);

(statearr_12239[(139)] = inst_11684);

(statearr_12239[(140)] = inst_11682);

return statearr_12239;
})();
var statearr_12240_12547 = state_11835__$1;
(statearr_12240_12547[(2)] = null);

(statearr_12240_12547[(1)] = (103));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11836 === (42))){
var inst_10906 = (state_11835[(57)]);
var inst_11417 = (state_11835[(172)]);
var inst_11426 = cljs.core.rand_nth.call(null,inst_10906);
var inst_11427 = farn.sound.play_sound.call(null,inst_11426,0.4);
var inst_11428 = new cljs.core.Keyword(null,"sprite","sprite",172516848).cljs$core$IFn$_invoke$arity$1(inst_11417);
var inst_11429 = farn.core.main_stage.removeChild(inst_11428);
var inst_11430 = new cljs.core.Keyword(null,"shadow","shadow",873231803).cljs$core$IFn$_invoke$arity$1(inst_11417);
var inst_11431 = farn.core.main_stage.removeChild(inst_11430);
var inst_11432 = cljs.core.swap_BANG_.call(null,farn.core.player_stars,cljs.core.inc);
var inst_11433 = cljs.core.swap_BANG_.call(null,farn.core.pickup_store,cljs.core.disj,inst_11417);
var state_11835__$1 = (function (){var statearr_12241 = state_11835;
(statearr_12241[(189)] = inst_11432);

(statearr_12241[(190)] = inst_11431);

(statearr_12241[(191)] = inst_11427);

(statearr_12241[(192)] = inst_11433);

(statearr_12241[(193)] = inst_11429);

return statearr_12241;
})();
var statearr_12242_12548 = state_11835__$1;
(statearr_12242_12548[(2)] = null);

(statearr_12242_12548[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11836 === (80))){
var inst_11567 = (state_11835[(179)]);
var inst_11569 = cljs.core.chunked_seq_QMARK_.call(null,inst_11567);
var state_11835__$1 = state_11835;
if(inst_11569){
var statearr_12243_12549 = state_11835__$1;
(statearr_12243_12549[(1)] = (83));

} else {
var statearr_12244_12550 = state_11835__$1;
(statearr_12244_12550[(1)] = (84));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11836 === (37))){
var inst_11481 = (state_11835[(2)]);
var state_11835__$1 = state_11835;
var statearr_12248_12551 = state_11835__$1;
(statearr_12248_12551[(2)] = inst_11481);

(statearr_12248_12551[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11836 === (63))){
var state_11835__$1 = state_11835;
var statearr_12249_12552 = state_11835__$1;
(statearr_12249_12552[(2)] = null);

(statearr_12249_12552[(1)] = (64));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11836 === (94))){
var inst_11331 = (state_11835[(32)]);
var inst_11617 = (state_11835[(38)]);
var inst_11616 = (state_11835[(39)]);
var inst_11615 = (state_11835[(41)]);
var inst_11325 = (state_11835[(33)]);
var inst_11618 = (state_11835[(42)]);
var inst_11334 = (state_11835[(35)]);
var inst_11324 = (state_11835[(36)]);
var inst_10935 = (state_11835[(37)]);
var inst_11623 = cljs.core._nth.call(null,inst_11616,inst_11618);
var inst_11625 = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(inst_11623);
var inst_11626 = new cljs.core.Keyword(null,"sprite","sprite",172516848).cljs$core$IFn$_invoke$arity$1(inst_11623);
var inst_11627 = inst_10935.call(null,inst_11625,inst_11626,inst_11324,inst_11325,inst_11331,inst_11334);
var inst_11628 = cljs.core.nth.call(null,inst_11627,(0),null);
var inst_11629 = cljs.core.nth.call(null,inst_11627,(1),null);
var inst_11630 = new cljs.core.Keyword(null,"sprite","sprite",172516848).cljs$core$IFn$_invoke$arity$1(inst_11623);
var inst_11631 = farn.sprite.set_pos_BANG_.call(null,inst_11630,inst_11628,inst_11629);
var inst_11632 = (inst_11618 + (1));
var tmp12245 = inst_11617;
var tmp12246 = inst_11616;
var tmp12247 = inst_11615;
var inst_11615__$1 = tmp12247;
var inst_11616__$1 = tmp12246;
var inst_11617__$1 = tmp12245;
var inst_11618__$1 = inst_11632;
var state_11835__$1 = (function (){var statearr_12250 = state_11835;
(statearr_12250[(38)] = inst_11617__$1);

(statearr_12250[(39)] = inst_11616__$1);

(statearr_12250[(41)] = inst_11615__$1);

(statearr_12250[(194)] = inst_11631);

(statearr_12250[(42)] = inst_11618__$1);

return statearr_12250;
})();
var statearr_12251_12553 = state_11835__$1;
(statearr_12251_12553[(2)] = null);

(statearr_12251_12553[(1)] = (92));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11836 === (8))){
var inst_10887 = (state_11835[(96)]);
var state_11835__$1 = state_11835;
var statearr_12252_12554 = state_11835__$1;
(statearr_12252_12554[(2)] = inst_10887);

(statearr_12252_12554[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11836 === (49))){
var inst_11476 = (state_11835[(2)]);
var state_11835__$1 = state_11835;
var statearr_12253_12555 = state_11835__$1;
(statearr_12253_12555[(2)] = inst_11476);

(statearr_12253_12555[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11836 === (84))){
var inst_11331 = (state_11835[(32)]);
var inst_11325 = (state_11835[(33)]);
var inst_11334 = (state_11835[(35)]);
var inst_11324 = (state_11835[(36)]);
var inst_10935 = (state_11835[(37)]);
var inst_11567 = (state_11835[(179)]);
var inst_11576 = cljs.core.first.call(null,inst_11567);
var inst_11578 = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(inst_11576);
var inst_11579 = new cljs.core.Keyword(null,"sprite","sprite",172516848).cljs$core$IFn$_invoke$arity$1(inst_11576);
var inst_11580 = inst_10935.call(null,inst_11578,inst_11579,inst_11324,inst_11325,inst_11331,inst_11334);
var inst_11581 = cljs.core.nth.call(null,inst_11580,(0),null);
var inst_11582 = cljs.core.nth.call(null,inst_11580,(1),null);
var inst_11583 = new cljs.core.Keyword(null,"sprite","sprite",172516848).cljs$core$IFn$_invoke$arity$1(inst_11576);
var inst_11584 = farn.sprite.set_pos_BANG_.call(null,inst_11583,inst_11581,inst_11582);
var inst_11585 = cljs.core.next.call(null,inst_11567);
var inst_11547 = inst_11585;
var inst_11548 = null;
var inst_11549 = (0);
var inst_11550 = (0);
var state_11835__$1 = (function (){var statearr_12254 = state_11835;
(statearr_12254[(23)] = inst_11549);

(statearr_12254[(195)] = inst_11584);

(statearr_12254[(24)] = inst_11547);

(statearr_12254[(25)] = inst_11548);

(statearr_12254[(26)] = inst_11550);

return statearr_12254;
})();
var statearr_12255_12556 = state_11835__$1;
(statearr_12255_12556[(2)] = null);

(statearr_12255_12556[(1)] = (75));


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
}
});})(c__6459__auto___12267))
;
return ((function (switch__6444__auto__,c__6459__auto___12267){
return (function() {
var state_machine__6445__auto__ = null;
var state_machine__6445__auto____0 = (function (){
var statearr_12259 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12259[(0)] = state_machine__6445__auto__);

(statearr_12259[(1)] = (1));

return statearr_12259;
});
var state_machine__6445__auto____1 = (function (state_11835){
while(true){
var ret_value__6446__auto__ = (function (){try{while(true){
var result__6447__auto__ = switch__6444__auto__.call(null,state_11835);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6447__auto__;
}
break;
}
}catch (e12260){if((e12260 instanceof Object)){
var ex__6448__auto__ = e12260;
var statearr_12261_12557 = state_11835;
(statearr_12261_12557[(5)] = ex__6448__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11835);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12260;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12558 = state_11835;
state_11835 = G__12558;
continue;
} else {
return ret_value__6446__auto__;
}
break;
}
});
state_machine__6445__auto__ = function(state_11835){
switch(arguments.length){
case 0:
return state_machine__6445__auto____0.call(this);
case 1:
return state_machine__6445__auto____1.call(this,state_11835);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6445__auto____0;
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6445__auto____1;
return state_machine__6445__auto__;
})()
;})(switch__6444__auto__,c__6459__auto___12267))
})();
var state__6461__auto__ = (function (){var statearr_12262 = f__6460__auto__.call(null);
(statearr_12262[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6459__auto___12267);

return statearr_12262;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6461__auto__);
});})(c__6459__auto___12267))
);

}
farn.core.main = (function main(){
return null;
});

//# sourceMappingURL=core.js.map