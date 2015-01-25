// Compiled by ClojureScript 0.0-2511
goog.provide('farn.stars');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('farn.events');
goog.require('farn.sprite');
goog.require('farn.font');
goog.require('farn.gfx');
farn.stars.polar_object_coords = (function polar_object_coords(obj_pos){
var vec__10163 = cljs.core.deref.call(null,farn.core.last_player_position);
var player_x = cljs.core.nth.call(null,vec__10163,(0),null);
var player_y = cljs.core.nth.call(null,vec__10163,(1),null);
var vec__10164 = cljs.core.deref.call(null,farn.core.last_player_rh);
var rhx = cljs.core.nth.call(null,vec__10164,(0),null);
var rhy = cljs.core.nth.call(null,vec__10164,(1),null);
var vec__10165 = obj_pos;
var ox = cljs.core.nth.call(null,vec__10165,(0),null);
var oy = cljs.core.nth.call(null,vec__10165,(1),null);
var p__GT_t = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(ox - player_x),(oy - player_y)], null);
var vec__10166 = p__GT_t;
var p__GT_t_x = cljs.core.nth.call(null,vec__10166,(0),null);
var p__GT_t_y = cljs.core.nth.call(null,vec__10166,(1),null);
var vec__10167 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((rhx * p__GT_t_y) + (rhy * p__GT_t_x)),((rhx * p__GT_t_x) - (rhy * p__GT_t_y))], null);
var rx = cljs.core.nth.call(null,vec__10167,(0),null);
var ry = cljs.core.nth.call(null,vec__10167,(1),null);
var fx = (rx + player_x);
var fy = ((ry / farn.core.isometric_factor) + player_y);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fx,fy], null);
});
farn.stars.make = (function make(stage,tex,shadowtex,x,y){
var star = farn.sprite.make_sprite.call(null,tex);
var shadow = farn.sprite.make_sprite.call(null,shadowtex);
var theta = ((cljs.core.rand.call(null) * (2)) * Math.PI);
var exit_speed = (3);
var direction = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(exit_speed * Math.cos.call(null,theta)),(exit_speed * Math.sin.call(null,theta))], null);
var vec__10228 = direction;
var dx = cljs.core.nth.call(null,vec__10228,(0),null);
var dy = cljs.core.nth.call(null,vec__10228,(1),null);
farn.sprite.set_pos_BANG_.call(null,star,(100000),(100000));

farn.sprite.set_pos_BANG_.call(null,shadow,(100000),(100000));

farn.sprite.set_scale_BANG_.call(null,star,0.7);

var c__6459__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6459__auto__,star,shadow,theta,exit_speed,direction,vec__10228,dx,dy){
return (function (){
var f__6460__auto__ = (function (){var switch__6444__auto__ = ((function (c__6459__auto__,star,shadow,theta,exit_speed,direction,vec__10228,dx,dy){
return (function (state_10269){
var state_val_10270 = (state_10269[(1)]);
if((state_val_10270 === (7))){
var inst_10263 = (state_10269[(2)]);
var state_10269__$1 = state_10269;
var statearr_10271_10288 = state_10269__$1;
(statearr_10271_10288[(2)] = inst_10263);

(statearr_10271_10288[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10270 === (6))){
var state_10269__$1 = state_10269;
var statearr_10272_10289 = state_10269__$1;
(statearr_10272_10289[(2)] = null);

(statearr_10272_10289[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10270 === (5))){
var inst_10231 = (state_10269[(7)]);
var inst_10233 = (state_10269[(8)]);
var inst_10232 = (state_10269[(9)]);
var inst_10257 = (inst_10231 + (1));
var inst_10258 = (inst_10232 + dx);
var inst_10259 = (inst_10233 + dy);
var inst_10231__$1 = inst_10257;
var inst_10232__$1 = inst_10258;
var inst_10233__$1 = inst_10259;
var state_10269__$1 = (function (){var statearr_10273 = state_10269;
(statearr_10273[(7)] = inst_10231__$1);

(statearr_10273[(8)] = inst_10233__$1);

(statearr_10273[(9)] = inst_10232__$1);

return statearr_10273;
})();
var statearr_10274_10290 = state_10269__$1;
(statearr_10274_10290[(2)] = null);

(statearr_10274_10290[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10270 === (4))){
var inst_10231 = (state_10269[(7)]);
var inst_10233 = (state_10269[(8)]);
var inst_10232 = (state_10269[(9)]);
var inst_10237 = (state_10269[(2)]);
var inst_10238 = ((400) - inst_10231);
var inst_10239 = (inst_10231 / (10));
var inst_10240 = Math.sin.call(null,inst_10239);
var inst_10241 = (inst_10238 * inst_10240);
var inst_10242 = (0.3 * inst_10241);
var inst_10243 = Math.abs.call(null,inst_10242);
var inst_10245 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_10246 = [inst_10232,inst_10233];
var inst_10247 = (new cljs.core.PersistentVector(null,2,(5),inst_10245,inst_10246,null));
var inst_10248 = farn.stars.polar_object_coords.call(null,inst_10247);
var inst_10249 = cljs.core.nth.call(null,inst_10248,(0),null);
var inst_10250 = cljs.core.nth.call(null,inst_10248,(1),null);
var inst_10251 = farn.sprite.set_pos_BANG_.call(null,star,inst_10249,inst_10250);
var inst_10252 = farn.sprite.set_pos_BANG_.call(null,shadow,inst_10249,inst_10250);
var inst_10253 = ((5) + inst_10243);
var inst_10254 = farn.sprite.set_pivot_BANG_.call(null,star,(0),inst_10253);
var inst_10255 = (inst_10231 < (400));
var state_10269__$1 = (function (){var statearr_10275 = state_10269;
(statearr_10275[(10)] = inst_10252);

(statearr_10275[(11)] = inst_10254);

(statearr_10275[(12)] = inst_10251);

(statearr_10275[(13)] = inst_10237);

return statearr_10275;
})();
if(cljs.core.truth_(inst_10255)){
var statearr_10276_10291 = state_10269__$1;
(statearr_10276_10291[(1)] = (5));

} else {
var statearr_10277_10292 = state_10269__$1;
(statearr_10277_10292[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10270 === (3))){
var inst_10265 = (state_10269[(2)]);
var inst_10266 = stage.removeChild(shadow);
var inst_10267 = stage.removeChild(star);
var state_10269__$1 = (function (){var statearr_10278 = state_10269;
(statearr_10278[(14)] = inst_10266);

(statearr_10278[(15)] = inst_10265);

return statearr_10278;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10269__$1,inst_10267);
} else {
if((state_val_10270 === (2))){
var inst_10235 = farn.events.next_frame.call(null);
var state_10269__$1 = state_10269;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10269__$1,(4),inst_10235);
} else {
if((state_val_10270 === (1))){
var inst_10229 = stage.addChild(shadow);
var inst_10230 = stage.addChild(star);
var inst_10231 = (1);
var inst_10232 = x;
var inst_10233 = y;
var state_10269__$1 = (function (){var statearr_10279 = state_10269;
(statearr_10279[(16)] = inst_10230);

(statearr_10279[(7)] = inst_10231);

(statearr_10279[(17)] = inst_10229);

(statearr_10279[(8)] = inst_10233);

(statearr_10279[(9)] = inst_10232);

return statearr_10279;
})();
var statearr_10280_10293 = state_10269__$1;
(statearr_10280_10293[(2)] = null);

(statearr_10280_10293[(1)] = (2));


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
});})(c__6459__auto__,star,shadow,theta,exit_speed,direction,vec__10228,dx,dy))
;
return ((function (switch__6444__auto__,c__6459__auto__,star,shadow,theta,exit_speed,direction,vec__10228,dx,dy){
return (function() {
var state_machine__6445__auto__ = null;
var state_machine__6445__auto____0 = (function (){
var statearr_10284 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_10284[(0)] = state_machine__6445__auto__);

(statearr_10284[(1)] = (1));

return statearr_10284;
});
var state_machine__6445__auto____1 = (function (state_10269){
while(true){
var ret_value__6446__auto__ = (function (){try{while(true){
var result__6447__auto__ = switch__6444__auto__.call(null,state_10269);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6447__auto__;
}
break;
}
}catch (e10285){if((e10285 instanceof Object)){
var ex__6448__auto__ = e10285;
var statearr_10286_10294 = state_10269;
(statearr_10286_10294[(5)] = ex__6448__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10269);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10285;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10295 = state_10269;
state_10269 = G__10295;
continue;
} else {
return ret_value__6446__auto__;
}
break;
}
});
state_machine__6445__auto__ = function(state_10269){
switch(arguments.length){
case 0:
return state_machine__6445__auto____0.call(this);
case 1:
return state_machine__6445__auto____1.call(this,state_10269);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6445__auto____0;
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6445__auto____1;
return state_machine__6445__auto__;
})()
;})(switch__6444__auto__,c__6459__auto__,star,shadow,theta,exit_speed,direction,vec__10228,dx,dy))
})();
var state__6461__auto__ = (function (){var statearr_10287 = f__6460__auto__.call(null);
(statearr_10287[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6459__auto__);

return statearr_10287;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6461__auto__);
});})(c__6459__auto__,star,shadow,theta,exit_speed,direction,vec__10228,dx,dy))
);

return c__6459__auto__;
});

//# sourceMappingURL=stars.js.map