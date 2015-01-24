// Compiled by ClojureScript 0.0-2511
goog.provide('farn.core');
goog.require('cljs.core');
goog.require('farn.utils');
goog.require('dommy.core');
goog.require('cljs.core.async');
goog.require('farn.gfx');
goog.require('farn.events');
goog.require('farn.sprite');
goog.require('farn.font');
farn.core.grass_green = (3503460);
if(typeof farn.core.fonts !== 'undefined'){
} else {
farn.core.fonts = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [farn.font.install_google_font_stylesheet_BANG_.call(null,"http://fonts.googleapis.com/css?family=Lobster"),farn.font.install_google_font_stylesheet_BANG_.call(null,"http://fonts.googleapis.com/css?family=Varela+Round"),farn.font.install_google_font_stylesheet_BANG_.call(null,"http://fonts.googleapis.com/css?family=Shadows+Into+Light+Two")], null);
}
/**
* @param {...*} var_args
*/
farn.core.load = (function() { 
var load__delegate = function (s,urls,p__10113){
var map__10149 = p__10113;
var map__10149__$1 = ((cljs.core.seq_QMARK_.call(null,map__10149))?cljs.core.apply.call(null,cljs.core.hash_map,map__10149):map__10149);
var options = map__10149__$1;
var fade_out = cljs.core.get.call(null,map__10149__$1,new cljs.core.Keyword(null,"fade-out","fade-out",-1200160760),0.5);
var fade_in = cljs.core.get.call(null,map__10149__$1,new cljs.core.Keyword(null,"fade-in","fade-in",999370239),0.5);
var c = cljs.core.async.chan.call(null);
var b = farn.gfx.add_prog_bar.call(null,s,options);
var c__6459__auto___10184 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6459__auto___10184,c,b,map__10149,map__10149__$1,options,fade_out,fade_in){
return (function (){
var f__6460__auto__ = (function (){var switch__6444__auto__ = ((function (c__6459__auto___10184,c,b,map__10149,map__10149__$1,options,fade_out,fade_in){
return (function (state_10170){
var state_val_10171 = (state_10170[(1)]);
if((state_val_10171 === (6))){
var inst_10166 = (state_10170[(2)]);
var inst_10167 = s.removeChild(b);
var inst_10168 = cljs.core.async.close_BANG_.call(null,c);
var state_10170__$1 = (function (){var statearr_10172 = state_10170;
(statearr_10172[(7)] = inst_10166);

(statearr_10172[(8)] = inst_10167);

return statearr_10172;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10170__$1,inst_10168);
} else {
if((state_val_10171 === (5))){
var inst_10163 = (state_10170[(2)]);
var inst_10164 = farn.gfx.fadeout.call(null,b,new cljs.core.Keyword(null,"duration","duration",1444101068),fade_out);
var state_10170__$1 = (function (){var statearr_10173 = state_10170;
(statearr_10173[(9)] = inst_10163);

return statearr_10173;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10170__$1,(6),inst_10164);
} else {
if((state_val_10171 === (4))){
var inst_10160 = (state_10170[(2)]);
var inst_10161 = cljs.core.async.timeout.call(null,(300));
var state_10170__$1 = (function (){var statearr_10174 = state_10170;
(statearr_10174[(10)] = inst_10160);

return statearr_10174;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10170__$1,(5),inst_10161);
} else {
if((state_val_10171 === (3))){
var inst_10158 = (state_10170[(2)]);
var state_10170__$1 = (function (){var statearr_10175 = state_10170;
(statearr_10175[(11)] = inst_10158);

return statearr_10175;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10170__$1,(4),c,true);
} else {
if((state_val_10171 === (2))){
var inst_10152 = (state_10170[(2)]);
var inst_10153 = [cljs.core.str(options)].join('');
var inst_10154 = farn.utils.log.call(null,"load",inst_10153);
var inst_10155 = cljs.core.partial.call(null,farn.gfx.load_urls,urls,b);
var inst_10156 = cljs.core.apply.call(null,inst_10155,options);
var state_10170__$1 = (function (){var statearr_10176 = state_10170;
(statearr_10176[(12)] = inst_10154);

(statearr_10176[(13)] = inst_10152);

return statearr_10176;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10170__$1,(3),inst_10156);
} else {
if((state_val_10171 === (1))){
var inst_10150 = farn.gfx.fadein.call(null,b,new cljs.core.Keyword(null,"duration","duration",1444101068),fade_in);
var state_10170__$1 = state_10170;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10170__$1,(2),inst_10150);
} else {
return null;
}
}
}
}
}
}
});})(c__6459__auto___10184,c,b,map__10149,map__10149__$1,options,fade_out,fade_in))
;
return ((function (switch__6444__auto__,c__6459__auto___10184,c,b,map__10149,map__10149__$1,options,fade_out,fade_in){
return (function() {
var state_machine__6445__auto__ = null;
var state_machine__6445__auto____0 = (function (){
var statearr_10180 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_10180[(0)] = state_machine__6445__auto__);

(statearr_10180[(1)] = (1));

return statearr_10180;
});
var state_machine__6445__auto____1 = (function (state_10170){
while(true){
var ret_value__6446__auto__ = (function (){try{while(true){
var result__6447__auto__ = switch__6444__auto__.call(null,state_10170);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6447__auto__;
}
break;
}
}catch (e10181){if((e10181 instanceof Object)){
var ex__6448__auto__ = e10181;
var statearr_10182_10185 = state_10170;
(statearr_10182_10185[(5)] = ex__6448__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10170);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10181;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10186 = state_10170;
state_10170 = G__10186;
continue;
} else {
return ret_value__6446__auto__;
}
break;
}
});
state_machine__6445__auto__ = function(state_10170){
switch(arguments.length){
case 0:
return state_machine__6445__auto____0.call(this);
case 1:
return state_machine__6445__auto____1.call(this,state_10170);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6445__auto____0;
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6445__auto____1;
return state_machine__6445__auto__;
})()
;})(switch__6444__auto__,c__6459__auto___10184,c,b,map__10149,map__10149__$1,options,fade_out,fade_in))
})();
var state__6461__auto__ = (function (){var statearr_10183 = f__6460__auto__.call(null);
(statearr_10183[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6459__auto___10184);

return statearr_10183;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6461__auto__);
});})(c__6459__auto___10184,c,b,map__10149,map__10149__$1,options,fade_out,fade_in))
);


return c;
};
var load = function (s,urls,var_args){
var p__10113 = null;
if (arguments.length > 2) {
  p__10113 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return load__delegate.call(this,s,urls,p__10113);};
load.cljs$lang$maxFixedArity = 2;
load.cljs$lang$applyTo = (function (arglist__10187){
var s = cljs.core.first(arglist__10187);
arglist__10187 = cljs.core.next(arglist__10187);
var urls = cljs.core.first(arglist__10187);
var p__10113 = cljs.core.rest(arglist__10187);
return load__delegate(s,urls,p__10113);
});
load.cljs$core$IFn$_invoke$arity$variadic = load__delegate;
return load;
})()
;
farn.core.world = farn.gfx.init.call(null,new cljs.core.Keyword(null,"background","background",-863952629),farn.core.grass_green,new cljs.core.Keyword(null,"expand","expand",595248157),true,new cljs.core.Keyword(null,"engine","engine",1459054265),new cljs.core.Keyword(null,"webgl","webgl",1974307887),new cljs.core.Keyword(null,"canvas","canvas",-1798817489),document.getElementById("game"));
farn.core.main_stage = new cljs.core.Keyword(null,"world","world",-418292623).cljs$core$IFn$_invoke$arity$1(farn.core.world);
farn.core.ui_stage = new cljs.core.Keyword(null,"ui","ui",-469653645).cljs$core$IFn$_invoke$arity$1(farn.core.world);
var c__6459__auto___10219 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6459__auto___10219){
return (function (){
var f__6460__auto__ = (function (){var switch__6444__auto__ = ((function (c__6459__auto___10219){
return (function (state_10203){
var state_val_10204 = (state_10203[(1)]);
if((state_val_10204 === (7))){
var inst_10192 = (state_10203[(2)]);
var inst_10193 = new cljs.core.Keyword(null,"renderer","renderer",336841071).cljs$core$IFn$_invoke$arity$1(farn.core.world);
var inst_10194 = new cljs.core.Keyword(null,"stage","stage",1843544772).cljs$core$IFn$_invoke$arity$1(farn.core.world);
var inst_10195 = inst_10193.render(inst_10194);
var state_10203__$1 = (function (){var statearr_10205 = state_10203;
(statearr_10205[(7)] = inst_10192);

(statearr_10205[(8)] = inst_10195);

return statearr_10205;
})();
var statearr_10206_10220 = state_10203__$1;
(statearr_10206_10220[(2)] = null);

(statearr_10206_10220[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10204 === (6))){
var inst_10199 = (state_10203[(2)]);
var state_10203__$1 = state_10203;
var statearr_10207_10221 = state_10203__$1;
(statearr_10207_10221[(2)] = inst_10199);

(statearr_10207_10221[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10204 === (5))){
var state_10203__$1 = state_10203;
var statearr_10208_10222 = state_10203__$1;
(statearr_10208_10222[(2)] = null);

(statearr_10208_10222[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10204 === (4))){
var inst_10190 = farn.events.next_frame.call(null);
var state_10203__$1 = state_10203;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10203__$1,(7),inst_10190);
} else {
if((state_val_10204 === (3))){
var inst_10201 = (state_10203[(2)]);
var state_10203__$1 = state_10203;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10203__$1,inst_10201);
} else {
if((state_val_10204 === (2))){
var state_10203__$1 = state_10203;
var statearr_10209_10223 = state_10203__$1;
(statearr_10209_10223[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10204 === (1))){
var state_10203__$1 = state_10203;
var statearr_10211_10224 = state_10203__$1;
(statearr_10211_10224[(2)] = null);

(statearr_10211_10224[(1)] = (2));


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
});})(c__6459__auto___10219))
;
return ((function (switch__6444__auto__,c__6459__auto___10219){
return (function() {
var state_machine__6445__auto__ = null;
var state_machine__6445__auto____0 = (function (){
var statearr_10215 = [null,null,null,null,null,null,null,null,null];
(statearr_10215[(0)] = state_machine__6445__auto__);

(statearr_10215[(1)] = (1));

return statearr_10215;
});
var state_machine__6445__auto____1 = (function (state_10203){
while(true){
var ret_value__6446__auto__ = (function (){try{while(true){
var result__6447__auto__ = switch__6444__auto__.call(null,state_10203);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6447__auto__;
}
break;
}
}catch (e10216){if((e10216 instanceof Object)){
var ex__6448__auto__ = e10216;
var statearr_10217_10225 = state_10203;
(statearr_10217_10225[(5)] = ex__6448__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10203);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10216;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10226 = state_10203;
state_10203 = G__10226;
continue;
} else {
return ret_value__6446__auto__;
}
break;
}
});
state_machine__6445__auto__ = function(state_10203){
switch(arguments.length){
case 0:
return state_machine__6445__auto____0.call(this);
case 1:
return state_machine__6445__auto____1.call(this,state_10203);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6445__auto____0;
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6445__auto____1;
return state_machine__6445__auto__;
})()
;})(switch__6444__auto__,c__6459__auto___10219))
})();
var state__6461__auto__ = (function (){var statearr_10218 = f__6460__auto__.call(null);
(statearr_10218[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6459__auto___10219);

return statearr_10218;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6461__auto__);
});})(c__6459__auto___10219))
);

farn.core._EQ_assets_EQ_ = new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, ["http://fonts.gstatic.com/s/lobster/v12/cycBf3mfbGkh66G5NhszPQ.woff2","http://fonts.gstatic.com/s/varelaround/v6/APH4jr0uSos5wiut5cpjrugdm0LZdjqr5-oayXSOefg.woff2","http://fonts.gstatic.com/s/shadowsintolighttwo/v4/gDxHeefcXIo-lOuZFCn2xbIfIbZrEcH2WW587lG91II.woff2","img/sprites/pink-stand-1.png","img/sprites/pink-stand-2.png","img/sprites/pink-stand-3.png","img/sprites/pink-stand-4.png","img/sprites/static-tree-1.png","img/sprites/static-tree-2.png","img/sprites/static-tree-3.png","img/sprites/static-tree-4.png","img/sprites/static-tree-5.png","img/sprites/static-tree-6.png","img/sprites/static-tree-7.png","img/sprites/static-tree-8.png","img/sprites/static-tree-9.png","img/sprites/static-tree-10.png","img/sprites/static-tuft-1.png","img/sprites/static-tuft-2.png","img/sprites/static-tuft-3.png"], null);
farn.core.make_sprite = (function make_sprite(tex){
var s = farn.gfx.make_sprite.call(null,tex);
farn.sprite.set_anchor_BANG_.call(null,s,0.5,(1));

return s;
});
var c__6459__auto___10570 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6459__auto___10570){
return (function (){
var f__6460__auto__ = (function (){var switch__6444__auto__ = ((function (c__6459__auto___10570){
return (function (state_10476){
var state_val_10477 = (state_10476[(1)]);
if((state_val_10477 === (7))){
var inst_10269 = (state_10476[(7)]);
var inst_10292 = (state_10476[(8)]);
var inst_10292__$1 = cljs.core.seq.call(null,inst_10269);
var state_10476__$1 = (function (){var statearr_10478 = state_10476;
(statearr_10478[(8)] = inst_10292__$1);

return statearr_10478;
})();
if(inst_10292__$1){
var statearr_10479_10571 = state_10476__$1;
(statearr_10479_10571[(1)] = (9));

} else {
var statearr_10480_10572 = state_10476__$1;
(statearr_10480_10572[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10477 === (20))){
var inst_10352 = (state_10476[(9)]);
var inst_10354 = cljs.core.chunked_seq_QMARK_.call(null,inst_10352);
var state_10476__$1 = state_10476;
if(inst_10354){
var statearr_10481_10573 = state_10476__$1;
(statearr_10481_10573[(1)] = (23));

} else {
var statearr_10482_10574 = state_10476__$1;
(statearr_10482_10574[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10477 === (27))){
var inst_10474 = (state_10476[(2)]);
var state_10476__$1 = state_10476;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10476__$1,inst_10474);
} else {
if((state_val_10477 === (1))){
var inst_10227 = (state_10476[(10)]);
var inst_10227__$1 = farn.core.load.call(null,farn.core.ui_stage,farn.core._EQ_assets_EQ_,new cljs.core.Keyword(null,"full-colour","full-colour",50761434),(3170336),new cljs.core.Keyword(null,"highlight","highlight",-800930873),(8454016),new cljs.core.Keyword(null,"lowlight","lowlight",2143243768),(1060880),new cljs.core.Keyword(null,"empty-colour","empty-colour",-1488420524),(0),new cljs.core.Keyword(null,"fade-in","fade-in",999370239),0.2,new cljs.core.Keyword(null,"fade-out","fade-out",-1200160760),(2));
var inst_10228 = farn.utils.log.call(null,"pulling");
var state_10476__$1 = (function (){var statearr_10486 = state_10476;
(statearr_10486[(11)] = inst_10228);

(statearr_10486[(10)] = inst_10227__$1);

return statearr_10486;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10476__$1,(2),inst_10227__$1);
} else {
if((state_val_10477 === (24))){
var inst_10352 = (state_10476[(9)]);
var inst_10250 = (state_10476[(12)]);
var inst_10361 = cljs.core.first.call(null,inst_10352);
var inst_10362 = cljs.core.rand_nth.call(null,inst_10250);
var inst_10363 = farn.core.make_sprite.call(null,inst_10362);
var inst_10364 = inst_10363.width;
var inst_10365 = inst_10363.height;
var inst_10366 = farn.utils.rand_between.call(null,(-500),(500));
var inst_10367 = farn.utils.rand_between.call(null,(-500),(500));
var inst_10369 = farn.sprite.set_scale_BANG_.call(null,inst_10363,0.5);
var inst_10370 = farn.sprite.set_pos_BANG_.call(null,inst_10363,inst_10366,inst_10367);
var inst_10371 = farn.core.main_stage.addChild(inst_10363);
var inst_10372 = cljs.core.next.call(null,inst_10352);
var inst_10330 = inst_10372;
var inst_10331 = null;
var inst_10332 = (0);
var inst_10333 = (0);
var state_10476__$1 = (function (){var statearr_10487 = state_10476;
(statearr_10487[(13)] = inst_10331);

(statearr_10487[(14)] = inst_10370);

(statearr_10487[(15)] = inst_10332);

(statearr_10487[(16)] = inst_10365);

(statearr_10487[(17)] = inst_10361);

(statearr_10487[(18)] = inst_10371);

(statearr_10487[(19)] = inst_10330);

(statearr_10487[(20)] = inst_10369);

(statearr_10487[(21)] = inst_10333);

(statearr_10487[(22)] = inst_10364);

return statearr_10487;
})();
var statearr_10488_10575 = state_10476__$1;
(statearr_10488_10575[(2)] = null);

(statearr_10488_10575[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10477 === (39))){
var inst_10400 = (state_10476[(23)]);
var inst_10408 = (state_10476[(24)]);
var inst_10401 = (state_10476[(25)]);
var inst_10411 = (state_10476[(26)]);
var inst_10409 = (state_10476[(27)]);
var inst_10410 = (state_10476[(28)]);
var inst_10416 = cljs.core._nth.call(null,inst_10409,inst_10411);
var inst_10417 = farn.core.main_stage.children;
var inst_10418 = (inst_10417[inst_10416]);
var inst_10419 = inst_10418.position.x;
var inst_10420 = (inst_10400 * inst_10419);
var inst_10421 = inst_10418.position.y;
var inst_10422 = (inst_10401 * inst_10421);
var inst_10423 = (inst_10420 - inst_10422);
var inst_10424 = inst_10418.position.x;
var inst_10425 = (inst_10401 * inst_10424);
var inst_10426 = inst_10418.position.y;
var inst_10427 = (inst_10400 * inst_10426);
var inst_10428 = (inst_10425 + inst_10427);
var inst_10429 = farn.sprite.set_pos_BANG_.call(null,inst_10418,inst_10423,inst_10428);
var inst_10430 = (inst_10411 + (1));
var tmp10483 = inst_10408;
var tmp10484 = inst_10409;
var tmp10485 = inst_10410;
var inst_10408__$1 = tmp10483;
var inst_10409__$1 = tmp10484;
var inst_10410__$1 = tmp10485;
var inst_10411__$1 = inst_10430;
var state_10476__$1 = (function (){var statearr_10489 = state_10476;
(statearr_10489[(29)] = inst_10429);

(statearr_10489[(24)] = inst_10408__$1);

(statearr_10489[(26)] = inst_10411__$1);

(statearr_10489[(27)] = inst_10409__$1);

(statearr_10489[(28)] = inst_10410__$1);

return statearr_10489;
})();
var statearr_10490_10576 = state_10476__$1;
(statearr_10490_10576[(2)] = null);

(statearr_10490_10576[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10477 === (46))){
var inst_10433 = (state_10476[(30)]);
var inst_10400 = (state_10476[(23)]);
var inst_10401 = (state_10476[(25)]);
var inst_10442 = cljs.core.first.call(null,inst_10433);
var inst_10443 = farn.core.main_stage.children;
var inst_10444 = (inst_10443[inst_10442]);
var inst_10445 = inst_10444.position.x;
var inst_10446 = (inst_10400 * inst_10445);
var inst_10447 = inst_10444.position.y;
var inst_10448 = (inst_10401 * inst_10447);
var inst_10449 = (inst_10446 - inst_10448);
var inst_10450 = inst_10444.position.x;
var inst_10451 = (inst_10401 * inst_10450);
var inst_10452 = inst_10444.position.y;
var inst_10453 = (inst_10400 * inst_10452);
var inst_10454 = (inst_10451 + inst_10453);
var inst_10455 = farn.sprite.set_pos_BANG_.call(null,inst_10444,inst_10449,inst_10454);
var inst_10456 = cljs.core.next.call(null,inst_10433);
var inst_10408 = inst_10456;
var inst_10409 = null;
var inst_10410 = (0);
var inst_10411 = (0);
var state_10476__$1 = (function (){var statearr_10491 = state_10476;
(statearr_10491[(24)] = inst_10408);

(statearr_10491[(26)] = inst_10411);

(statearr_10491[(27)] = inst_10409);

(statearr_10491[(31)] = inst_10455);

(statearr_10491[(28)] = inst_10410);

return statearr_10491;
})();
var statearr_10492_10577 = state_10476__$1;
(statearr_10492_10577[(2)] = null);

(statearr_10492_10577[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10477 === (4))){
var inst_10272 = (state_10476[(32)]);
var inst_10271 = (state_10476[(33)]);
var inst_10274 = (inst_10272 < inst_10271);
var inst_10275 = inst_10274;
var state_10476__$1 = state_10476;
if(cljs.core.truth_(inst_10275)){
var statearr_10493_10578 = state_10476__$1;
(statearr_10493_10578[(1)] = (6));

} else {
var statearr_10494_10579 = state_10476__$1;
(statearr_10494_10579[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10477 === (15))){
var inst_10332 = (state_10476[(15)]);
var inst_10333 = (state_10476[(21)]);
var inst_10335 = (inst_10333 < inst_10332);
var inst_10336 = inst_10335;
var state_10476__$1 = state_10476;
if(cljs.core.truth_(inst_10336)){
var statearr_10495_10580 = state_10476__$1;
(statearr_10495_10580[(1)] = (17));

} else {
var statearr_10496_10581 = state_10476__$1;
(statearr_10496_10581[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10477 === (48))){
var inst_10471 = (state_10476[(2)]);
var state_10476__$1 = (function (){var statearr_10497 = state_10476;
(statearr_10497[(34)] = inst_10471);

return statearr_10497;
})();
var statearr_10498_10582 = state_10476__$1;
(statearr_10498_10582[(2)] = null);

(statearr_10498_10582[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10477 === (21))){
var state_10476__$1 = state_10476;
var statearr_10499_10583 = state_10476__$1;
(statearr_10499_10583[(2)] = null);

(statearr_10499_10583[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10477 === (31))){
var state_10476__$1 = state_10476;
var statearr_10500_10584 = state_10476__$1;
(statearr_10500_10584[(2)] = -0.02);

(statearr_10500_10584[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10477 === (32))){
var state_10476__$1 = state_10476;
var statearr_10501_10585 = state_10476__$1;
(statearr_10501_10585[(1)] = (34));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10477 === (40))){
var inst_10433 = (state_10476[(30)]);
var inst_10408 = (state_10476[(24)]);
var inst_10433__$1 = cljs.core.seq.call(null,inst_10408);
var state_10476__$1 = (function (){var statearr_10503 = state_10476;
(statearr_10503[(30)] = inst_10433__$1);

return statearr_10503;
})();
if(inst_10433__$1){
var statearr_10504_10586 = state_10476__$1;
(statearr_10504_10586[(1)] = (42));

} else {
var statearr_10505_10587 = state_10476__$1;
(statearr_10505_10587[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10477 === (33))){
var inst_10397 = (state_10476[(2)]);
var state_10476__$1 = state_10476;
var statearr_10506_10588 = state_10476__$1;
(statearr_10506_10588[(2)] = inst_10397);

(statearr_10506_10588[(1)] = (30));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10477 === (13))){
var inst_10243 = (state_10476[(35)]);
var inst_10292 = (state_10476[(8)]);
var inst_10301 = cljs.core.first.call(null,inst_10292);
var inst_10302 = cljs.core.rand_nth.call(null,inst_10243);
var inst_10303 = farn.core.make_sprite.call(null,inst_10302);
var inst_10304 = inst_10303.width;
var inst_10305 = inst_10303.height;
var inst_10306 = farn.utils.rand_between.call(null,(-500),(500));
var inst_10307 = farn.utils.rand_between.call(null,(-500),(500));
var inst_10308 = farn.utils.log.call(null,"x,y",inst_10306,inst_10307);
var inst_10310 = farn.sprite.set_scale_BANG_.call(null,inst_10303,0.5);
var inst_10311 = farn.sprite.set_pos_BANG_.call(null,inst_10303,inst_10306,inst_10307);
var inst_10312 = farn.core.main_stage.addChild(inst_10303);
var inst_10313 = cljs.core.next.call(null,inst_10292);
var inst_10269 = inst_10313;
var inst_10270 = null;
var inst_10271 = (0);
var inst_10272 = (0);
var state_10476__$1 = (function (){var statearr_10507 = state_10476;
(statearr_10507[(36)] = inst_10308);

(statearr_10507[(32)] = inst_10272);

(statearr_10507[(37)] = inst_10310);

(statearr_10507[(33)] = inst_10271);

(statearr_10507[(38)] = inst_10312);

(statearr_10507[(7)] = inst_10269);

(statearr_10507[(39)] = inst_10305);

(statearr_10507[(40)] = inst_10270);

(statearr_10507[(41)] = inst_10311);

(statearr_10507[(42)] = inst_10301);

(statearr_10507[(43)] = inst_10304);

return statearr_10507;
})();
var statearr_10508_10589 = state_10476__$1;
(statearr_10508_10589[(2)] = null);

(statearr_10508_10589[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10477 === (22))){
var inst_10378 = (state_10476[(2)]);
var state_10476__$1 = state_10476;
var statearr_10509_10590 = state_10476__$1;
(statearr_10509_10590[(2)] = inst_10378);

(statearr_10509_10590[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10477 === (36))){
var inst_10395 = (state_10476[(2)]);
var state_10476__$1 = state_10476;
var statearr_10510_10591 = state_10476__$1;
(statearr_10510_10591[(2)] = inst_10395);

(statearr_10510_10591[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10477 === (41))){
var inst_10464 = (state_10476[(2)]);
var state_10476__$1 = state_10476;
var statearr_10511_10592 = state_10476__$1;
(statearr_10511_10592[(2)] = inst_10464);

(statearr_10511_10592[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10477 === (43))){
var state_10476__$1 = state_10476;
var statearr_10512_10593 = state_10476__$1;
(statearr_10512_10593[(2)] = null);

(statearr_10512_10593[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10477 === (29))){
var inst_10389 = farn.events.is_pressed_QMARK_.call(null,new cljs.core.Keyword(null,"right","right",-452581833));
var state_10476__$1 = state_10476;
if(cljs.core.truth_(inst_10389)){
var statearr_10516_10594 = state_10476__$1;
(statearr_10516_10594[(1)] = (31));

} else {
var statearr_10517_10595 = state_10476__$1;
(statearr_10517_10595[(1)] = (32));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10477 === (44))){
var inst_10462 = (state_10476[(2)]);
var state_10476__$1 = state_10476;
var statearr_10518_10596 = state_10476__$1;
(statearr_10518_10596[(2)] = inst_10462);

(statearr_10518_10596[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10477 === (6))){
var inst_10243 = (state_10476[(35)]);
var inst_10272 = (state_10476[(32)]);
var inst_10271 = (state_10476[(33)]);
var inst_10269 = (state_10476[(7)]);
var inst_10270 = (state_10476[(40)]);
var inst_10277 = cljs.core._nth.call(null,inst_10270,inst_10272);
var inst_10278 = cljs.core.rand_nth.call(null,inst_10243);
var inst_10279 = farn.core.make_sprite.call(null,inst_10278);
var inst_10280 = inst_10279.width;
var inst_10281 = inst_10279.height;
var inst_10282 = farn.utils.rand_between.call(null,(-500),(500));
var inst_10283 = farn.utils.rand_between.call(null,(-500),(500));
var inst_10284 = farn.utils.log.call(null,"x,y",inst_10282,inst_10283);
var inst_10286 = farn.sprite.set_scale_BANG_.call(null,inst_10279,0.5);
var inst_10287 = farn.sprite.set_pos_BANG_.call(null,inst_10279,inst_10282,inst_10283);
var inst_10288 = farn.core.main_stage.addChild(inst_10279);
var inst_10289 = (inst_10272 + (1));
var tmp10513 = inst_10271;
var tmp10514 = inst_10269;
var tmp10515 = inst_10270;
var inst_10269__$1 = tmp10514;
var inst_10270__$1 = tmp10515;
var inst_10271__$1 = tmp10513;
var inst_10272__$1 = inst_10289;
var state_10476__$1 = (function (){var statearr_10519 = state_10476;
(statearr_10519[(44)] = inst_10281);

(statearr_10519[(45)] = inst_10284);

(statearr_10519[(32)] = inst_10272__$1);

(statearr_10519[(46)] = inst_10287);

(statearr_10519[(33)] = inst_10271__$1);

(statearr_10519[(7)] = inst_10269__$1);

(statearr_10519[(47)] = inst_10280);

(statearr_10519[(40)] = inst_10270__$1);

(statearr_10519[(48)] = inst_10286);

(statearr_10519[(49)] = inst_10277);

(statearr_10519[(50)] = inst_10288);

return statearr_10519;
})();
var statearr_10520_10597 = state_10476__$1;
(statearr_10520_10597[(2)] = null);

(statearr_10520_10597[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10477 === (28))){
var state_10476__$1 = state_10476;
var statearr_10521_10598 = state_10476__$1;
(statearr_10521_10598[(2)] = 0.02);

(statearr_10521_10598[(1)] = (30));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10477 === (25))){
var inst_10375 = (state_10476[(2)]);
var state_10476__$1 = state_10476;
var statearr_10525_10599 = state_10476__$1;
(statearr_10525_10599[(2)] = inst_10375);

(statearr_10525_10599[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10477 === (34))){
var state_10476__$1 = state_10476;
var statearr_10526_10600 = state_10476__$1;
(statearr_10526_10600[(2)] = (0));

(statearr_10526_10600[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10477 === (17))){
var inst_10331 = (state_10476[(13)]);
var inst_10332 = (state_10476[(15)]);
var inst_10330 = (state_10476[(19)]);
var inst_10333 = (state_10476[(21)]);
var inst_10250 = (state_10476[(12)]);
var inst_10338 = cljs.core._nth.call(null,inst_10331,inst_10333);
var inst_10339 = cljs.core.rand_nth.call(null,inst_10250);
var inst_10340 = farn.core.make_sprite.call(null,inst_10339);
var inst_10341 = inst_10340.width;
var inst_10342 = inst_10340.height;
var inst_10343 = farn.utils.rand_between.call(null,(-500),(500));
var inst_10344 = farn.utils.rand_between.call(null,(-500),(500));
var inst_10346 = farn.sprite.set_scale_BANG_.call(null,inst_10340,0.5);
var inst_10347 = farn.sprite.set_pos_BANG_.call(null,inst_10340,inst_10343,inst_10344);
var inst_10348 = farn.core.main_stage.addChild(inst_10340);
var inst_10349 = (inst_10333 + (1));
var tmp10522 = inst_10331;
var tmp10523 = inst_10332;
var tmp10524 = inst_10330;
var inst_10330__$1 = tmp10524;
var inst_10331__$1 = tmp10522;
var inst_10332__$1 = tmp10523;
var inst_10333__$1 = inst_10349;
var state_10476__$1 = (function (){var statearr_10527 = state_10476;
(statearr_10527[(13)] = inst_10331__$1);

(statearr_10527[(51)] = inst_10348);

(statearr_10527[(52)] = inst_10341);

(statearr_10527[(15)] = inst_10332__$1);

(statearr_10527[(53)] = inst_10342);

(statearr_10527[(19)] = inst_10330__$1);

(statearr_10527[(54)] = inst_10338);

(statearr_10527[(55)] = inst_10347);

(statearr_10527[(21)] = inst_10333__$1);

(statearr_10527[(56)] = inst_10346);

return statearr_10527;
})();
var statearr_10528_10601 = state_10476__$1;
(statearr_10528_10601[(2)] = null);

(statearr_10528_10601[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10477 === (3))){
var inst_10243 = (state_10476[(35)]);
var inst_10235 = (state_10476[(57)]);
var inst_10250 = (state_10476[(12)]);
var inst_10254 = (state_10476[(2)]);
var inst_10255 = farn.utils.log.call(null,"adding");
var inst_10256 = [cljs.core.str(inst_10243)].join('');
var inst_10257 = farn.utils.log.call(null,inst_10256);
var inst_10258 = [cljs.core.str(inst_10250)].join('');
var inst_10259 = farn.utils.log.call(null,inst_10258);
var inst_10261 = farn.sprite.set_scale_BANG_.call(null,inst_10235,0.5);
var inst_10262 = farn.core.main_stage.addChild(inst_10235);
var inst_10267 = cljs.core.range.call(null,(50));
var inst_10268 = cljs.core.seq.call(null,inst_10267);
var inst_10269 = inst_10268;
var inst_10270 = null;
var inst_10271 = (0);
var inst_10272 = (0);
var state_10476__$1 = (function (){var statearr_10529 = state_10476;
(statearr_10529[(58)] = inst_10257);

(statearr_10529[(32)] = inst_10272);

(statearr_10529[(59)] = inst_10262);

(statearr_10529[(33)] = inst_10271);

(statearr_10529[(7)] = inst_10269);

(statearr_10529[(60)] = inst_10254);

(statearr_10529[(40)] = inst_10270);

(statearr_10529[(61)] = inst_10261);

(statearr_10529[(62)] = inst_10255);

(statearr_10529[(63)] = inst_10259);

return statearr_10529;
})();
var statearr_10530_10602 = state_10476__$1;
(statearr_10530_10602[(2)] = null);

(statearr_10530_10602[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10477 === (12))){
var inst_10292 = (state_10476[(8)]);
var inst_10296 = cljs.core.chunk_first.call(null,inst_10292);
var inst_10297 = cljs.core.chunk_rest.call(null,inst_10292);
var inst_10298 = cljs.core.count.call(null,inst_10296);
var inst_10269 = inst_10297;
var inst_10270 = inst_10296;
var inst_10271 = inst_10298;
var inst_10272 = (0);
var state_10476__$1 = (function (){var statearr_10531 = state_10476;
(statearr_10531[(32)] = inst_10272);

(statearr_10531[(33)] = inst_10271);

(statearr_10531[(7)] = inst_10269);

(statearr_10531[(40)] = inst_10270);

return statearr_10531;
})();
var statearr_10532_10603 = state_10476__$1;
(statearr_10532_10603[(2)] = null);

(statearr_10532_10603[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10477 === (2))){
var inst_10243 = (state_10476[(35)]);
var inst_10227 = (state_10476[(10)]);
var inst_10235 = (state_10476[(57)]);
var inst_10250 = (state_10476[(12)]);
var inst_10230 = (state_10476[(2)]);
var inst_10231 = farn.utils.log.call(null,"pulled");
var inst_10232 = farn.font.make_tiled_font.call(null,"Lobster",(400),(40));
var inst_10233 = farn.font.font_make_batch.call(null,inst_10232,"Alien Forest Explorer");
var inst_10234 = farn.gfx.get_texture.call(null,new cljs.core.Keyword(null,"pink-stand-4","pink-stand-4",695656413));
var inst_10235__$1 = farn.core.make_sprite.call(null,inst_10234);
var inst_10236 = farn.utils.log.call(null,"GUY",inst_10235__$1);
var inst_10241 = (function (){var _ = inst_10236;
var guy = inst_10235__$1;
var tex = inst_10234;
var title_text = inst_10233;
var lobster_big = inst_10232;
var loader = inst_10227;
return ((function (_,guy,tex,title_text,lobster_big,loader,inst_10243,inst_10227,inst_10235,inst_10250,inst_10230,inst_10231,inst_10232,inst_10233,inst_10234,inst_10235__$1,inst_10236,state_val_10477,c__6459__auto___10570){
return (function iter__10237(s__10238){
return (new cljs.core.LazySeq(null,((function (_,guy,tex,title_text,lobster_big,loader,inst_10243,inst_10227,inst_10235,inst_10250,inst_10230,inst_10231,inst_10232,inst_10233,inst_10234,inst_10235__$1,inst_10236,state_val_10477,c__6459__auto___10570){
return (function (){
var s__10238__$1 = s__10238;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__10238__$1);
if(temp__4126__auto__){
var s__10238__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__10238__$2)){
var c__4384__auto__ = cljs.core.chunk_first.call(null,s__10238__$2);
var size__4385__auto__ = cljs.core.count.call(null,c__4384__auto__);
var b__10240 = cljs.core.chunk_buffer.call(null,size__4385__auto__);
if((function (){var i__10239 = (0);
while(true){
if((i__10239 < size__4385__auto__)){
var i = cljs.core._nth.call(null,c__4384__auto__,i__10239);
cljs.core.chunk_append.call(null,b__10240,farn.gfx.get_texture.call(null,cljs.core.keyword.call(null,[cljs.core.str("static-tree-"),cljs.core.str((i + (1)))].join(''))));

var G__10604 = (i__10239 + (1));
i__10239 = G__10604;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10240),iter__10237.call(null,cljs.core.chunk_rest.call(null,s__10238__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10240),null);
}
} else {
var i = cljs.core.first.call(null,s__10238__$2);
return cljs.core.cons.call(null,farn.gfx.get_texture.call(null,cljs.core.keyword.call(null,[cljs.core.str("static-tree-"),cljs.core.str((i + (1)))].join(''))),iter__10237.call(null,cljs.core.rest.call(null,s__10238__$2)));
}
} else {
return null;
}
break;
}
});})(_,guy,tex,title_text,lobster_big,loader,inst_10243,inst_10227,inst_10235,inst_10250,inst_10230,inst_10231,inst_10232,inst_10233,inst_10234,inst_10235__$1,inst_10236,state_val_10477,c__6459__auto___10570))
,null,null));
});
;})(_,guy,tex,title_text,lobster_big,loader,inst_10243,inst_10227,inst_10235,inst_10250,inst_10230,inst_10231,inst_10232,inst_10233,inst_10234,inst_10235__$1,inst_10236,state_val_10477,c__6459__auto___10570))
})();
var inst_10242 = cljs.core.range.call(null,(10));
var inst_10243__$1 = inst_10241.call(null,inst_10242);
var inst_10248 = (function (){var trees = inst_10243__$1;
var _ = inst_10236;
var guy = inst_10235__$1;
var tex = inst_10234;
var title_text = inst_10233;
var lobster_big = inst_10232;
var loader = inst_10227;
return ((function (trees,_,guy,tex,title_text,lobster_big,loader,inst_10243,inst_10227,inst_10235,inst_10250,inst_10230,inst_10231,inst_10232,inst_10233,inst_10234,inst_10235__$1,inst_10236,inst_10241,inst_10242,inst_10243__$1,state_val_10477,c__6459__auto___10570){
return (function iter__10244(s__10245){
return (new cljs.core.LazySeq(null,((function (trees,_,guy,tex,title_text,lobster_big,loader,inst_10243,inst_10227,inst_10235,inst_10250,inst_10230,inst_10231,inst_10232,inst_10233,inst_10234,inst_10235__$1,inst_10236,inst_10241,inst_10242,inst_10243__$1,state_val_10477,c__6459__auto___10570){
return (function (){
var s__10245__$1 = s__10245;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__10245__$1);
if(temp__4126__auto__){
var s__10245__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__10245__$2)){
var c__4384__auto__ = cljs.core.chunk_first.call(null,s__10245__$2);
var size__4385__auto__ = cljs.core.count.call(null,c__4384__auto__);
var b__10247 = cljs.core.chunk_buffer.call(null,size__4385__auto__);
if((function (){var i__10246 = (0);
while(true){
if((i__10246 < size__4385__auto__)){
var i = cljs.core._nth.call(null,c__4384__auto__,i__10246);
cljs.core.chunk_append.call(null,b__10247,farn.gfx.get_texture.call(null,cljs.core.keyword.call(null,[cljs.core.str("static-tuft-"),cljs.core.str((i + (1)))].join(''))));

var G__10605 = (i__10246 + (1));
i__10246 = G__10605;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10247),iter__10244.call(null,cljs.core.chunk_rest.call(null,s__10245__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10247),null);
}
} else {
var i = cljs.core.first.call(null,s__10245__$2);
return cljs.core.cons.call(null,farn.gfx.get_texture.call(null,cljs.core.keyword.call(null,[cljs.core.str("static-tuft-"),cljs.core.str((i + (1)))].join(''))),iter__10244.call(null,cljs.core.rest.call(null,s__10245__$2)));
}
} else {
return null;
}
break;
}
});})(trees,_,guy,tex,title_text,lobster_big,loader,inst_10243,inst_10227,inst_10235,inst_10250,inst_10230,inst_10231,inst_10232,inst_10233,inst_10234,inst_10235__$1,inst_10236,inst_10241,inst_10242,inst_10243__$1,state_val_10477,c__6459__auto___10570))
,null,null));
});
;})(trees,_,guy,tex,title_text,lobster_big,loader,inst_10243,inst_10227,inst_10235,inst_10250,inst_10230,inst_10231,inst_10232,inst_10233,inst_10234,inst_10235__$1,inst_10236,inst_10241,inst_10242,inst_10243__$1,state_val_10477,c__6459__auto___10570))
})();
var inst_10249 = cljs.core.range.call(null,(3));
var inst_10250__$1 = inst_10248.call(null,inst_10249);
var inst_10251 = (function (){var tufts = inst_10250__$1;
var trees = inst_10243__$1;
var _ = inst_10236;
var guy = inst_10235__$1;
var tex = inst_10234;
var title_text = inst_10233;
var lobster_big = inst_10232;
var loader = inst_10227;
return ((function (tufts,trees,_,guy,tex,title_text,lobster_big,loader,inst_10243,inst_10227,inst_10235,inst_10250,inst_10230,inst_10231,inst_10232,inst_10233,inst_10234,inst_10235__$1,inst_10236,inst_10241,inst_10242,inst_10243__$1,inst_10248,inst_10249,inst_10250__$1,state_val_10477,c__6459__auto___10570){
return (function (a,b){
if((a.position.y < b.position.y)){
return (-1);
} else {
if((b.position.y < a.position.y)){
return (1);
} else {
return (0);

}
}
});
;})(tufts,trees,_,guy,tex,title_text,lobster_big,loader,inst_10243,inst_10227,inst_10235,inst_10250,inst_10230,inst_10231,inst_10232,inst_10233,inst_10234,inst_10235__$1,inst_10236,inst_10241,inst_10242,inst_10243__$1,inst_10248,inst_10249,inst_10250__$1,state_val_10477,c__6459__auto___10570))
})();
var inst_10252 = cljs.core.async.timeout.call(null,(1000));
var state_10476__$1 = (function (){var statearr_10533 = state_10476;
(statearr_10533[(35)] = inst_10243__$1);

(statearr_10533[(64)] = inst_10230);

(statearr_10533[(65)] = inst_10231);

(statearr_10533[(57)] = inst_10235__$1);

(statearr_10533[(66)] = inst_10251);

(statearr_10533[(12)] = inst_10250__$1);

return statearr_10533;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10476__$1,(3),inst_10252);
} else {
if((state_val_10477 === (23))){
var inst_10352 = (state_10476[(9)]);
var inst_10356 = cljs.core.chunk_first.call(null,inst_10352);
var inst_10357 = cljs.core.chunk_rest.call(null,inst_10352);
var inst_10358 = cljs.core.count.call(null,inst_10356);
var inst_10330 = inst_10357;
var inst_10331 = inst_10356;
var inst_10332 = inst_10358;
var inst_10333 = (0);
var state_10476__$1 = (function (){var statearr_10534 = state_10476;
(statearr_10534[(13)] = inst_10331);

(statearr_10534[(15)] = inst_10332);

(statearr_10534[(19)] = inst_10330);

(statearr_10534[(21)] = inst_10333);

return statearr_10534;
})();
var statearr_10535_10606 = state_10476__$1;
(statearr_10535_10606[(2)] = null);

(statearr_10535_10606[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10477 === (47))){
var inst_10459 = (state_10476[(2)]);
var state_10476__$1 = state_10476;
var statearr_10536_10607 = state_10476__$1;
(statearr_10536_10607[(2)] = inst_10459);

(statearr_10536_10607[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10477 === (35))){
var state_10476__$1 = state_10476;
var statearr_10537_10608 = state_10476__$1;
(statearr_10537_10608[(2)] = null);

(statearr_10537_10608[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10477 === (19))){
var inst_10380 = (state_10476[(2)]);
var state_10476__$1 = state_10476;
var statearr_10538_10609 = state_10476__$1;
(statearr_10538_10609[(2)] = inst_10380);

(statearr_10538_10609[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10477 === (11))){
var inst_10319 = (state_10476[(2)]);
var state_10476__$1 = state_10476;
var statearr_10539_10610 = state_10476__$1;
(statearr_10539_10610[(2)] = inst_10319);

(statearr_10539_10610[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10477 === (9))){
var inst_10292 = (state_10476[(8)]);
var inst_10294 = cljs.core.chunked_seq_QMARK_.call(null,inst_10292);
var state_10476__$1 = state_10476;
if(inst_10294){
var statearr_10540_10611 = state_10476__$1;
(statearr_10540_10611[(1)] = (12));

} else {
var statearr_10541_10612 = state_10476__$1;
(statearr_10541_10612[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10477 === (5))){
var inst_10323 = (state_10476[(2)]);
var inst_10328 = cljs.core.range.call(null,(100));
var inst_10329 = cljs.core.seq.call(null,inst_10328);
var inst_10330 = inst_10329;
var inst_10331 = null;
var inst_10332 = (0);
var inst_10333 = (0);
var state_10476__$1 = (function (){var statearr_10542 = state_10476;
(statearr_10542[(13)] = inst_10331);

(statearr_10542[(15)] = inst_10332);

(statearr_10542[(19)] = inst_10330);

(statearr_10542[(67)] = inst_10323);

(statearr_10542[(21)] = inst_10333);

return statearr_10542;
})();
var statearr_10543_10613 = state_10476__$1;
(statearr_10543_10613[(2)] = null);

(statearr_10543_10613[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10477 === (14))){
var inst_10316 = (state_10476[(2)]);
var state_10476__$1 = state_10476;
var statearr_10544_10614 = state_10476__$1;
(statearr_10544_10614[(2)] = inst_10316);

(statearr_10544_10614[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10477 === (45))){
var inst_10433 = (state_10476[(30)]);
var inst_10437 = cljs.core.chunk_first.call(null,inst_10433);
var inst_10438 = cljs.core.chunk_rest.call(null,inst_10433);
var inst_10439 = cljs.core.count.call(null,inst_10437);
var inst_10408 = inst_10438;
var inst_10409 = inst_10437;
var inst_10410 = inst_10439;
var inst_10411 = (0);
var state_10476__$1 = (function (){var statearr_10545 = state_10476;
(statearr_10545[(24)] = inst_10408);

(statearr_10545[(26)] = inst_10411);

(statearr_10545[(27)] = inst_10409);

(statearr_10545[(28)] = inst_10410);

return statearr_10545;
})();
var statearr_10546_10615 = state_10476__$1;
(statearr_10546_10615[(2)] = null);

(statearr_10546_10615[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10477 === (26))){
var inst_10386 = farn.events.is_pressed_QMARK_.call(null,new cljs.core.Keyword(null,"left","left",-399115937));
var state_10476__$1 = state_10476;
if(cljs.core.truth_(inst_10386)){
var statearr_10547_10616 = state_10476__$1;
(statearr_10547_10616[(1)] = (28));

} else {
var statearr_10548_10617 = state_10476__$1;
(statearr_10548_10617[(1)] = (29));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10477 === (16))){
var inst_10251 = (state_10476[(66)]);
var inst_10382 = (state_10476[(2)]);
var inst_10383 = farn.core.main_stage.children;
var inst_10384 = inst_10383.sort(inst_10251);
var state_10476__$1 = (function (){var statearr_10549 = state_10476;
(statearr_10549[(68)] = inst_10382);

(statearr_10549[(69)] = inst_10384);

return statearr_10549;
})();
var statearr_10550_10618 = state_10476__$1;
(statearr_10550_10618[(2)] = null);

(statearr_10550_10618[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10477 === (38))){
var inst_10251 = (state_10476[(66)]);
var inst_10466 = (state_10476[(2)]);
var inst_10467 = farn.core.main_stage.children;
var inst_10468 = inst_10467.sort(inst_10251);
var inst_10469 = farn.events.next_frame.call(null);
var state_10476__$1 = (function (){var statearr_10551 = state_10476;
(statearr_10551[(70)] = inst_10466);

(statearr_10551[(71)] = inst_10468);

return statearr_10551;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10476__$1,(48),inst_10469);
} else {
if((state_val_10477 === (30))){
var inst_10399 = (state_10476[(2)]);
var inst_10400 = Math.cos.call(null,inst_10399);
var inst_10401 = Math.sin.call(null,inst_10399);
var inst_10406 = cljs.core.range.call(null,(151));
var inst_10407 = cljs.core.seq.call(null,inst_10406);
var inst_10408 = inst_10407;
var inst_10409 = null;
var inst_10410 = (0);
var inst_10411 = (0);
var state_10476__$1 = (function (){var statearr_10552 = state_10476;
(statearr_10552[(23)] = inst_10400);

(statearr_10552[(24)] = inst_10408);

(statearr_10552[(25)] = inst_10401);

(statearr_10552[(26)] = inst_10411);

(statearr_10552[(27)] = inst_10409);

(statearr_10552[(28)] = inst_10410);

return statearr_10552;
})();
var statearr_10553_10619 = state_10476__$1;
(statearr_10553_10619[(2)] = null);

(statearr_10553_10619[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10477 === (10))){
var state_10476__$1 = state_10476;
var statearr_10554_10620 = state_10476__$1;
(statearr_10554_10620[(2)] = null);

(statearr_10554_10620[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10477 === (18))){
var inst_10352 = (state_10476[(9)]);
var inst_10330 = (state_10476[(19)]);
var inst_10352__$1 = cljs.core.seq.call(null,inst_10330);
var state_10476__$1 = (function (){var statearr_10555 = state_10476;
(statearr_10555[(9)] = inst_10352__$1);

return statearr_10555;
})();
if(inst_10352__$1){
var statearr_10556_10621 = state_10476__$1;
(statearr_10556_10621[(1)] = (20));

} else {
var statearr_10557_10622 = state_10476__$1;
(statearr_10557_10622[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10477 === (42))){
var inst_10433 = (state_10476[(30)]);
var inst_10435 = cljs.core.chunked_seq_QMARK_.call(null,inst_10433);
var state_10476__$1 = state_10476;
if(inst_10435){
var statearr_10558_10623 = state_10476__$1;
(statearr_10558_10623[(1)] = (45));

} else {
var statearr_10559_10624 = state_10476__$1;
(statearr_10559_10624[(1)] = (46));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10477 === (37))){
var inst_10411 = (state_10476[(26)]);
var inst_10410 = (state_10476[(28)]);
var inst_10413 = (inst_10411 < inst_10410);
var inst_10414 = inst_10413;
var state_10476__$1 = state_10476;
if(cljs.core.truth_(inst_10414)){
var statearr_10560_10625 = state_10476__$1;
(statearr_10560_10625[(1)] = (39));

} else {
var statearr_10561_10626 = state_10476__$1;
(statearr_10561_10626[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10477 === (8))){
var inst_10321 = (state_10476[(2)]);
var state_10476__$1 = state_10476;
var statearr_10562_10627 = state_10476__$1;
(statearr_10562_10627[(2)] = inst_10321);

(statearr_10562_10627[(1)] = (5));


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
});})(c__6459__auto___10570))
;
return ((function (switch__6444__auto__,c__6459__auto___10570){
return (function() {
var state_machine__6445__auto__ = null;
var state_machine__6445__auto____0 = (function (){
var statearr_10566 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_10566[(0)] = state_machine__6445__auto__);

(statearr_10566[(1)] = (1));

return statearr_10566;
});
var state_machine__6445__auto____1 = (function (state_10476){
while(true){
var ret_value__6446__auto__ = (function (){try{while(true){
var result__6447__auto__ = switch__6444__auto__.call(null,state_10476);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6447__auto__;
}
break;
}
}catch (e10567){if((e10567 instanceof Object)){
var ex__6448__auto__ = e10567;
var statearr_10568_10628 = state_10476;
(statearr_10568_10628[(5)] = ex__6448__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10476);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10567;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10629 = state_10476;
state_10476 = G__10629;
continue;
} else {
return ret_value__6446__auto__;
}
break;
}
});
state_machine__6445__auto__ = function(state_10476){
switch(arguments.length){
case 0:
return state_machine__6445__auto____0.call(this);
case 1:
return state_machine__6445__auto____1.call(this,state_10476);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6445__auto____0;
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6445__auto____1;
return state_machine__6445__auto__;
})()
;})(switch__6444__auto__,c__6459__auto___10570))
})();
var state__6461__auto__ = (function (){var statearr_10569 = f__6460__auto__.call(null);
(statearr_10569[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6459__auto___10570);

return statearr_10569;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6461__auto__);
});})(c__6459__auto___10570))
);

farn.core.main = (function main(){
return farn.utils.log.call(null,"main!!",new cljs.core.Keyword(null,"stage","stage",1843544772).cljs$core$IFn$_invoke$arity$1(farn.core.world),farn.core.title_text);
});

//# sourceMappingURL=core.js.map