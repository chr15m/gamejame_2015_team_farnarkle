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
farn.core.player_wins_rotate_speed = 0.01;
farn.core.last_player_position = cljs.core.atom.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null));
farn.core.last_player_rh = cljs.core.atom.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null));
farn.core.last_player_theta = cljs.core.atom.call(null,(0));
farn.core.baby_position = cljs.core.atom.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null));
farn.core.pickup_bounce_height = (15);
farn.core.pickup_bounce_speed = 0.15;
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
farn.core.game_completed = (function game_completed(main_stage,star_tex,shadow_tex,x,y,polar_object_coords,cells,game_space,depth_compare,baby_sprite){
var c__6459__auto___12107 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6459__auto___12107){
return (function (){
var f__6460__auto__ = (function (){var switch__6444__auto__ = ((function (c__6459__auto___12107){
return (function (state_11429){
var state_val_11430 = (state_11429[(1)]);
if((state_val_11430 === (4))){
var inst_11418 = (state_11429[(7)]);
var inst_11422 = (state_11429[(2)]);
var inst_11423 = farn.sprite.set_anchor_BANG_.call(null,baby_sprite,(0),inst_11418);
var inst_11424 = (inst_11418 + 0.01);
var inst_11418__$1 = inst_11424;
var state_11429__$1 = (function (){var statearr_11431 = state_11429;
(statearr_11431[(7)] = inst_11418__$1);

(statearr_11431[(8)] = inst_11422);

(statearr_11431[(9)] = inst_11423);

return statearr_11431;
})();
var statearr_11432_12108 = state_11429__$1;
(statearr_11432_12108[(2)] = null);

(statearr_11432_12108[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11430 === (3))){
var inst_11427 = (state_11429[(2)]);
var state_11429__$1 = state_11429;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11429__$1,inst_11427);
} else {
if((state_val_11430 === (2))){
var inst_11420 = farn.events.next_frame.call(null);
var state_11429__$1 = state_11429;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11429__$1,(4),inst_11420);
} else {
if((state_val_11430 === (1))){
var inst_11418 = (1);
var state_11429__$1 = (function (){var statearr_11433 = state_11429;
(statearr_11433[(7)] = inst_11418);

return statearr_11433;
})();
var statearr_11434_12109 = state_11429__$1;
(statearr_11434_12109[(2)] = null);

(statearr_11434_12109[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__6459__auto___12107))
;
return ((function (switch__6444__auto__,c__6459__auto___12107){
return (function() {
var state_machine__6445__auto__ = null;
var state_machine__6445__auto____0 = (function (){
var statearr_11438 = [null,null,null,null,null,null,null,null,null,null];
(statearr_11438[(0)] = state_machine__6445__auto__);

(statearr_11438[(1)] = (1));

return statearr_11438;
});
var state_machine__6445__auto____1 = (function (state_11429){
while(true){
var ret_value__6446__auto__ = (function (){try{while(true){
var result__6447__auto__ = switch__6444__auto__.call(null,state_11429);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6447__auto__;
}
break;
}
}catch (e11439){if((e11439 instanceof Object)){
var ex__6448__auto__ = e11439;
var statearr_11440_12110 = state_11429;
(statearr_11440_12110[(5)] = ex__6448__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11429);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11439;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12111 = state_11429;
state_11429 = G__12111;
continue;
} else {
return ret_value__6446__auto__;
}
break;
}
});
state_machine__6445__auto__ = function(state_11429){
switch(arguments.length){
case 0:
return state_machine__6445__auto____0.call(this);
case 1:
return state_machine__6445__auto____1.call(this,state_11429);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6445__auto____0;
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6445__auto____1;
return state_machine__6445__auto__;
})()
;})(switch__6444__auto__,c__6459__auto___12107))
})();
var state__6461__auto__ = (function (){var statearr_11441 = f__6460__auto__.call(null);
(statearr_11441[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6459__auto___12107);

return statearr_11441;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6461__auto__);
});})(c__6459__auto___12107))
);


var c__6459__auto___12112 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6459__auto___12112){
return (function (){
var f__6460__auto__ = (function (){var switch__6444__auto__ = ((function (c__6459__auto___12112){
return (function (state_11699){
var state_val_11700 = (state_11699[(1)]);
if((state_val_11700 === (7))){
var inst_11453 = (state_11699[(7)]);
var inst_11445 = (state_11699[(8)]);
var inst_11456 = (state_11699[(9)]);
var inst_11448 = (inst_11445 + Math.PI);
var inst_11449 = Math.cos.call(null,inst_11448);
var inst_11450 = Math.sin.call(null,inst_11448);
var inst_11451 = ((2) * Math.PI);
var inst_11452 = (inst_11451 - inst_11448);
var inst_11453__$1 = Math.cos.call(null,inst_11452);
var inst_11454 = ((2) * Math.PI);
var inst_11455 = (inst_11454 - inst_11448);
var inst_11456__$1 = Math.sin.call(null,inst_11455);
var inst_11457 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_11458 = [inst_11453__$1,inst_11456__$1];
var inst_11459 = (new cljs.core.PersistentVector(null,2,(5),inst_11457,inst_11458,null));
var inst_11460 = cljs.core.reset_BANG_.call(null,farn.core.last_player_rh,inst_11459);
var inst_11461 = main_stage.children;
var inst_11462 = inst_11461.sort(depth_compare);
var inst_11463 = farn.events.next_frame.call(null);
var state_11699__$1 = (function (){var statearr_11701 = state_11699;
(statearr_11701[(10)] = inst_11449);

(statearr_11701[(7)] = inst_11453__$1);

(statearr_11701[(11)] = inst_11460);

(statearr_11701[(12)] = inst_11462);

(statearr_11701[(13)] = inst_11450);

(statearr_11701[(9)] = inst_11456__$1);

return statearr_11701;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11699__$1,(9),inst_11463);
} else {
if((state_val_11700 === (20))){
var inst_11506 = (state_11699[(14)]);
var inst_11508 = cljs.core.chunked_seq_QMARK_.call(null,inst_11506);
var state_11699__$1 = state_11699;
if(inst_11508){
var statearr_11702_12113 = state_11699__$1;
(statearr_11702_12113[(1)] = (23));

} else {
var statearr_11703_12114 = state_11699__$1;
(statearr_11703_12114[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11700 === (27))){
var state_11699__$1 = state_11699;
var statearr_11704_12115 = state_11699__$1;
(statearr_11704_12115[(2)] = null);

(statearr_11704_12115[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11700 === (1))){
var state_11699__$1 = state_11699;
var statearr_11705_12116 = state_11699__$1;
(statearr_11705_12116[(2)] = null);

(statearr_11705_12116[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11700 === (24))){
var inst_11453 = (state_11699[(7)]);
var inst_11456 = (state_11699[(9)]);
var inst_11506 = (state_11699[(14)]);
var inst_11515 = cljs.core.first.call(null,inst_11506);
var inst_11517 = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(inst_11515);
var inst_11518 = new cljs.core.Keyword(null,"sprite","sprite",172516848).cljs$core$IFn$_invoke$arity$1(inst_11515);
var inst_11519 = polar_object_coords.call(null,inst_11517,inst_11518,x,y,inst_11453,inst_11456);
var inst_11520 = cljs.core.nth.call(null,inst_11519,(0),null);
var inst_11521 = cljs.core.nth.call(null,inst_11519,(1),null);
var inst_11522 = new cljs.core.Keyword(null,"sprite","sprite",172516848).cljs$core$IFn$_invoke$arity$1(inst_11515);
var inst_11523 = farn.sprite.set_pos_BANG_.call(null,inst_11522,inst_11520,inst_11521);
var inst_11524 = cljs.core.next.call(null,inst_11506);
var inst_11486 = inst_11524;
var inst_11487 = null;
var inst_11488 = (0);
var inst_11489 = (0);
var state_11699__$1 = (function (){var statearr_11706 = state_11699;
(statearr_11706[(15)] = inst_11488);

(statearr_11706[(16)] = inst_11523);

(statearr_11706[(17)] = inst_11486);

(statearr_11706[(18)] = inst_11487);

(statearr_11706[(19)] = inst_11489);

return statearr_11706;
})();
var statearr_11707_12117 = state_11699__$1;
(statearr_11707_12117[(2)] = null);

(statearr_11707_12117[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11700 === (39))){
var inst_11598 = (state_11699[(2)]);
var state_11699__$1 = state_11699;
var statearr_11708_12118 = state_11699__$1;
(statearr_11708_12118[(2)] = inst_11598);

(statearr_11708_12118[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11700 === (46))){
var inst_11620 = (state_11699[(20)]);
var inst_11649 = (state_11699[(21)]);
var inst_11649__$1 = cljs.core.seq.call(null,inst_11620);
var state_11699__$1 = (function (){var statearr_11709 = state_11699;
(statearr_11709[(21)] = inst_11649__$1);

return statearr_11709;
})();
if(inst_11649__$1){
var statearr_11710_12119 = state_11699__$1;
(statearr_11710_12119[(1)] = (48));

} else {
var statearr_11711_12120 = state_11699__$1;
(statearr_11711_12120[(1)] = (49));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11700 === (4))){
var inst_11444 = cljs.core.deref.call(null,farn.core.last_player_theta);
var inst_11445 = inst_11444;
var inst_11446 = (0);
var state_11699__$1 = (function (){var statearr_11712 = state_11699;
(statearr_11712[(8)] = inst_11445);

(statearr_11712[(22)] = inst_11446);

return statearr_11712;
})();
var statearr_11713_12121 = state_11699__$1;
(statearr_11713_12121[(2)] = null);

(statearr_11713_12121[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11700 === (15))){
var inst_11488 = (state_11699[(15)]);
var inst_11489 = (state_11699[(19)]);
var inst_11491 = (inst_11489 < inst_11488);
var inst_11492 = inst_11491;
var state_11699__$1 = state_11699;
if(cljs.core.truth_(inst_11492)){
var statearr_11714_12122 = state_11699__$1;
(statearr_11714_12122[(1)] = (17));

} else {
var statearr_11715_12123 = state_11699__$1;
(statearr_11715_12123[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11700 === (48))){
var inst_11649 = (state_11699[(21)]);
var inst_11651 = cljs.core.chunked_seq_QMARK_.call(null,inst_11649);
var state_11699__$1 = state_11699;
if(inst_11651){
var statearr_11716_12124 = state_11699__$1;
(statearr_11716_12124[(1)] = (51));

} else {
var statearr_11717_12125 = state_11699__$1;
(statearr_11717_12125[(1)] = (52));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11700 === (50))){
var inst_11682 = (state_11699[(2)]);
var state_11699__$1 = state_11699;
var statearr_11718_12126 = state_11699__$1;
(statearr_11718_12126[(2)] = inst_11682);

(statearr_11718_12126[(1)] = (47));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11700 === (21))){
var state_11699__$1 = state_11699;
var statearr_11719_12127 = state_11699__$1;
(statearr_11719_12127[(2)] = null);

(statearr_11719_12127[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11700 === (31))){
var inst_11606 = (state_11699[(2)]);
var state_11699__$1 = state_11699;
var statearr_11720_12128 = state_11699__$1;
(statearr_11720_12128[(2)] = inst_11606);

(statearr_11720_12128[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11700 === (32))){
var inst_11556 = (state_11699[(23)]);
var inst_11557 = (state_11699[(24)]);
var inst_11559 = (inst_11557 < inst_11556);
var inst_11560 = inst_11559;
var state_11699__$1 = state_11699;
if(cljs.core.truth_(inst_11560)){
var statearr_11721_12129 = state_11699__$1;
(statearr_11721_12129[(1)] = (34));

} else {
var statearr_11722_12130 = state_11699__$1;
(statearr_11722_12130[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11700 === (40))){
var inst_11574 = (state_11699[(25)]);
var inst_11578 = cljs.core.chunk_first.call(null,inst_11574);
var inst_11579 = cljs.core.chunk_rest.call(null,inst_11574);
var inst_11580 = cljs.core.count.call(null,inst_11578);
var inst_11554 = inst_11579;
var inst_11555 = inst_11578;
var inst_11556 = inst_11580;
var inst_11557 = (0);
var state_11699__$1 = (function (){var statearr_11723 = state_11699;
(statearr_11723[(23)] = inst_11556);

(statearr_11723[(24)] = inst_11557);

(statearr_11723[(26)] = inst_11554);

(statearr_11723[(27)] = inst_11555);

return statearr_11723;
})();
var statearr_11724_12131 = state_11699__$1;
(statearr_11724_12131[(2)] = null);

(statearr_11724_12131[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11700 === (33))){
var inst_11538 = (state_11699[(28)]);
var inst_11602 = (state_11699[(2)]);
var inst_11603 = cljs.core.next.call(null,inst_11538);
var inst_11471 = inst_11603;
var inst_11472 = null;
var inst_11473 = (0);
var inst_11474 = (0);
var state_11699__$1 = (function (){var statearr_11725 = state_11699;
(statearr_11725[(29)] = inst_11474);

(statearr_11725[(30)] = inst_11602);

(statearr_11725[(31)] = inst_11472);

(statearr_11725[(32)] = inst_11471);

(statearr_11725[(33)] = inst_11473);

return statearr_11725;
})();
var statearr_11726_12132 = state_11699__$1;
(statearr_11726_12132[(2)] = null);

(statearr_11726_12132[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11700 === (13))){
var inst_11538 = (state_11699[(28)]);
var inst_11471 = (state_11699[(32)]);
var inst_11538__$1 = cljs.core.seq.call(null,inst_11471);
var state_11699__$1 = (function (){var statearr_11727 = state_11699;
(statearr_11727[(28)] = inst_11538__$1);

return statearr_11727;
})();
if(inst_11538__$1){
var statearr_11728_12133 = state_11699__$1;
(statearr_11728_12133[(1)] = (26));

} else {
var statearr_11729_12134 = state_11699__$1;
(statearr_11729_12134[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11700 === (22))){
var inst_11530 = (state_11699[(2)]);
var state_11699__$1 = state_11699;
var statearr_11730_12135 = state_11699__$1;
(statearr_11730_12135[(2)] = inst_11530);

(statearr_11730_12135[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11700 === (36))){
var inst_11600 = (state_11699[(2)]);
var state_11699__$1 = state_11699;
var statearr_11731_12136 = state_11699__$1;
(statearr_11731_12136[(2)] = inst_11600);

(statearr_11731_12136[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11700 === (41))){
var inst_11453 = (state_11699[(7)]);
var inst_11456 = (state_11699[(9)]);
var inst_11574 = (state_11699[(25)]);
var inst_11583 = cljs.core.first.call(null,inst_11574);
var inst_11585 = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(inst_11583);
var inst_11586 = new cljs.core.Keyword(null,"sprite","sprite",172516848).cljs$core$IFn$_invoke$arity$1(inst_11583);
var inst_11587 = polar_object_coords.call(null,inst_11585,inst_11586,x,y,inst_11453,inst_11456);
var inst_11588 = cljs.core.nth.call(null,inst_11587,(0),null);
var inst_11589 = cljs.core.nth.call(null,inst_11587,(1),null);
var inst_11590 = new cljs.core.Keyword(null,"sprite","sprite",172516848).cljs$core$IFn$_invoke$arity$1(inst_11583);
var inst_11591 = farn.sprite.set_pos_BANG_.call(null,inst_11590,inst_11588,inst_11589);
var inst_11592 = cljs.core.next.call(null,inst_11574);
var inst_11554 = inst_11592;
var inst_11555 = null;
var inst_11556 = (0);
var inst_11557 = (0);
var state_11699__$1 = (function (){var statearr_11732 = state_11699;
(statearr_11732[(34)] = inst_11591);

(statearr_11732[(23)] = inst_11556);

(statearr_11732[(24)] = inst_11557);

(statearr_11732[(26)] = inst_11554);

(statearr_11732[(27)] = inst_11555);

return statearr_11732;
})();
var statearr_11733_12137 = state_11699__$1;
(statearr_11733_12137[(2)] = null);

(statearr_11733_12137[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11700 === (43))){
var inst_11623 = (state_11699[(35)]);
var inst_11622 = (state_11699[(36)]);
var inst_11625 = (inst_11623 < inst_11622);
var inst_11626 = inst_11625;
var state_11699__$1 = state_11699;
if(cljs.core.truth_(inst_11626)){
var statearr_11734_12138 = state_11699__$1;
(statearr_11734_12138[(1)] = (45));

} else {
var statearr_11735_12139 = state_11699__$1;
(statearr_11735_12139[(1)] = (46));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11700 === (29))){
var inst_11538 = (state_11699[(28)]);
var inst_11542 = cljs.core.chunk_first.call(null,inst_11538);
var inst_11543 = cljs.core.chunk_rest.call(null,inst_11538);
var inst_11544 = cljs.core.count.call(null,inst_11542);
var inst_11471 = inst_11543;
var inst_11472 = inst_11542;
var inst_11473 = inst_11544;
var inst_11474 = (0);
var state_11699__$1 = (function (){var statearr_11736 = state_11699;
(statearr_11736[(29)] = inst_11474);

(statearr_11736[(31)] = inst_11472);

(statearr_11736[(32)] = inst_11471);

(statearr_11736[(33)] = inst_11473);

return statearr_11736;
})();
var statearr_11737_12140 = state_11699__$1;
(statearr_11737_12140[(2)] = null);

(statearr_11737_12140[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11700 === (44))){
var inst_11445 = (state_11699[(8)]);
var inst_11446 = (state_11699[(22)]);
var inst_11686 = (state_11699[(2)]);
var inst_11687 = (inst_11445 + farn.core.player_wins_rotate_speed);
var inst_11688 = (inst_11446 + (1));
var inst_11445__$1 = inst_11687;
var inst_11446__$1 = inst_11688;
var state_11699__$1 = (function (){var statearr_11738 = state_11699;
(statearr_11738[(8)] = inst_11445__$1);

(statearr_11738[(22)] = inst_11446__$1);

(statearr_11738[(37)] = inst_11686);

return statearr_11738;
})();
var statearr_11739_12141 = state_11699__$1;
(statearr_11739_12141[(2)] = null);

(statearr_11739_12141[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11700 === (6))){
var inst_11695 = (state_11699[(2)]);
var state_11699__$1 = state_11699;
var statearr_11740_12142 = state_11699__$1;
(statearr_11740_12142[(2)] = inst_11695);

(statearr_11740_12142[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11700 === (28))){
var inst_11609 = (state_11699[(2)]);
var state_11699__$1 = state_11699;
var statearr_11741_12143 = state_11699__$1;
(statearr_11741_12143[(2)] = inst_11609);

(statearr_11741_12143[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11700 === (51))){
var inst_11649 = (state_11699[(21)]);
var inst_11653 = cljs.core.chunk_first.call(null,inst_11649);
var inst_11654 = cljs.core.chunk_rest.call(null,inst_11649);
var inst_11655 = cljs.core.count.call(null,inst_11653);
var inst_11620 = inst_11654;
var inst_11621 = inst_11653;
var inst_11622 = inst_11655;
var inst_11623 = (0);
var state_11699__$1 = (function (){var statearr_11745 = state_11699;
(statearr_11745[(20)] = inst_11620);

(statearr_11745[(35)] = inst_11623);

(statearr_11745[(36)] = inst_11622);

(statearr_11745[(38)] = inst_11621);

return statearr_11745;
})();
var statearr_11746_12144 = state_11699__$1;
(statearr_11746_12144[(2)] = null);

(statearr_11746_12144[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11700 === (25))){
var inst_11527 = (state_11699[(2)]);
var state_11699__$1 = state_11699;
var statearr_11750_12145 = state_11699__$1;
(statearr_11750_12145[(2)] = inst_11527);

(statearr_11750_12145[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11700 === (34))){
var inst_11453 = (state_11699[(7)]);
var inst_11556 = (state_11699[(23)]);
var inst_11557 = (state_11699[(24)]);
var inst_11554 = (state_11699[(26)]);
var inst_11555 = (state_11699[(27)]);
var inst_11456 = (state_11699[(9)]);
var inst_11562 = cljs.core._nth.call(null,inst_11555,inst_11557);
var inst_11564 = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(inst_11562);
var inst_11565 = new cljs.core.Keyword(null,"sprite","sprite",172516848).cljs$core$IFn$_invoke$arity$1(inst_11562);
var inst_11566 = polar_object_coords.call(null,inst_11564,inst_11565,x,y,inst_11453,inst_11456);
var inst_11567 = cljs.core.nth.call(null,inst_11566,(0),null);
var inst_11568 = cljs.core.nth.call(null,inst_11566,(1),null);
var inst_11569 = new cljs.core.Keyword(null,"sprite","sprite",172516848).cljs$core$IFn$_invoke$arity$1(inst_11562);
var inst_11570 = farn.sprite.set_pos_BANG_.call(null,inst_11569,inst_11567,inst_11568);
var inst_11571 = (inst_11557 + (1));
var tmp11742 = inst_11556;
var tmp11743 = inst_11554;
var tmp11744 = inst_11555;
var inst_11554__$1 = tmp11743;
var inst_11555__$1 = tmp11744;
var inst_11556__$1 = tmp11742;
var inst_11557__$1 = inst_11571;
var state_11699__$1 = (function (){var statearr_11751 = state_11699;
(statearr_11751[(23)] = inst_11556__$1);

(statearr_11751[(24)] = inst_11557__$1);

(statearr_11751[(26)] = inst_11554__$1);

(statearr_11751[(27)] = inst_11555__$1);

(statearr_11751[(39)] = inst_11570);

return statearr_11751;
})();
var statearr_11752_12146 = state_11699__$1;
(statearr_11752_12146[(2)] = null);

(statearr_11752_12146[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11700 === (17))){
var inst_11453 = (state_11699[(7)]);
var inst_11488 = (state_11699[(15)]);
var inst_11486 = (state_11699[(17)]);
var inst_11487 = (state_11699[(18)]);
var inst_11489 = (state_11699[(19)]);
var inst_11456 = (state_11699[(9)]);
var inst_11494 = cljs.core._nth.call(null,inst_11487,inst_11489);
var inst_11496 = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(inst_11494);
var inst_11497 = new cljs.core.Keyword(null,"sprite","sprite",172516848).cljs$core$IFn$_invoke$arity$1(inst_11494);
var inst_11498 = polar_object_coords.call(null,inst_11496,inst_11497,x,y,inst_11453,inst_11456);
var inst_11499 = cljs.core.nth.call(null,inst_11498,(0),null);
var inst_11500 = cljs.core.nth.call(null,inst_11498,(1),null);
var inst_11501 = new cljs.core.Keyword(null,"sprite","sprite",172516848).cljs$core$IFn$_invoke$arity$1(inst_11494);
var inst_11502 = farn.sprite.set_pos_BANG_.call(null,inst_11501,inst_11499,inst_11500);
var inst_11503 = (inst_11489 + (1));
var tmp11747 = inst_11488;
var tmp11748 = inst_11486;
var tmp11749 = inst_11487;
var inst_11486__$1 = tmp11748;
var inst_11487__$1 = tmp11749;
var inst_11488__$1 = tmp11747;
var inst_11489__$1 = inst_11503;
var state_11699__$1 = (function (){var statearr_11753 = state_11699;
(statearr_11753[(40)] = inst_11502);

(statearr_11753[(15)] = inst_11488__$1);

(statearr_11753[(17)] = inst_11486__$1);

(statearr_11753[(18)] = inst_11487__$1);

(statearr_11753[(19)] = inst_11489__$1);

return statearr_11753;
})();
var statearr_11754_12147 = state_11699__$1;
(statearr_11754_12147[(2)] = null);

(statearr_11754_12147[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11700 === (3))){
var inst_11697 = (state_11699[(2)]);
var state_11699__$1 = state_11699;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11699__$1,inst_11697);
} else {
if((state_val_11700 === (12))){
var inst_11474 = (state_11699[(29)]);
var inst_11472 = (state_11699[(31)]);
var inst_11479 = cljs.core._nth.call(null,inst_11472,inst_11474);
var inst_11484 = game_space.call(null,inst_11479);
var inst_11485 = cljs.core.seq.call(null,inst_11484);
var inst_11486 = inst_11485;
var inst_11487 = null;
var inst_11488 = (0);
var inst_11489 = (0);
var state_11699__$1 = (function (){var statearr_11755 = state_11699;
(statearr_11755[(15)] = inst_11488);

(statearr_11755[(17)] = inst_11486);

(statearr_11755[(18)] = inst_11487);

(statearr_11755[(19)] = inst_11489);

return statearr_11755;
})();
var statearr_11756_12148 = state_11699__$1;
(statearr_11756_12148[(2)] = null);

(statearr_11756_12148[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11700 === (2))){
var state_11699__$1 = state_11699;
var statearr_11757_12149 = state_11699__$1;
(statearr_11757_12149[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11700 === (23))){
var inst_11506 = (state_11699[(14)]);
var inst_11510 = cljs.core.chunk_first.call(null,inst_11506);
var inst_11511 = cljs.core.chunk_rest.call(null,inst_11506);
var inst_11512 = cljs.core.count.call(null,inst_11510);
var inst_11486 = inst_11511;
var inst_11487 = inst_11510;
var inst_11488 = inst_11512;
var inst_11489 = (0);
var state_11699__$1 = (function (){var statearr_11759 = state_11699;
(statearr_11759[(15)] = inst_11488);

(statearr_11759[(17)] = inst_11486);

(statearr_11759[(18)] = inst_11487);

(statearr_11759[(19)] = inst_11489);

return statearr_11759;
})();
var statearr_11760_12150 = state_11699__$1;
(statearr_11760_12150[(2)] = null);

(statearr_11760_12150[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11700 === (47))){
var inst_11684 = (state_11699[(2)]);
var state_11699__$1 = state_11699;
var statearr_11761_12151 = state_11699__$1;
(statearr_11761_12151[(2)] = inst_11684);

(statearr_11761_12151[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11700 === (35))){
var inst_11554 = (state_11699[(26)]);
var inst_11574 = (state_11699[(25)]);
var inst_11574__$1 = cljs.core.seq.call(null,inst_11554);
var state_11699__$1 = (function (){var statearr_11762 = state_11699;
(statearr_11762[(25)] = inst_11574__$1);

return statearr_11762;
})();
if(inst_11574__$1){
var statearr_11763_12152 = state_11699__$1;
(statearr_11763_12152[(1)] = (37));

} else {
var statearr_11764_12153 = state_11699__$1;
(statearr_11764_12153[(1)] = (38));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11700 === (19))){
var inst_11532 = (state_11699[(2)]);
var state_11699__$1 = state_11699;
var statearr_11765_12154 = state_11699__$1;
(statearr_11765_12154[(2)] = inst_11532);

(statearr_11765_12154[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11700 === (11))){
var inst_11613 = (state_11699[(2)]);
var inst_11618 = cljs.core.deref.call(null,farn.core.pickup_store);
var inst_11619 = cljs.core.seq.call(null,inst_11618);
var inst_11620 = inst_11619;
var inst_11621 = null;
var inst_11622 = (0);
var inst_11623 = (0);
var state_11699__$1 = (function (){var statearr_11766 = state_11699;
(statearr_11766[(20)] = inst_11620);

(statearr_11766[(41)] = inst_11613);

(statearr_11766[(35)] = inst_11623);

(statearr_11766[(36)] = inst_11622);

(statearr_11766[(38)] = inst_11621);

return statearr_11766;
})();
var statearr_11767_12155 = state_11699__$1;
(statearr_11767_12155[(2)] = null);

(statearr_11767_12155[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11700 === (9))){
var inst_11465 = (state_11699[(2)]);
var inst_11470 = cljs.core.seq.call(null,cells);
var inst_11471 = inst_11470;
var inst_11472 = null;
var inst_11473 = (0);
var inst_11474 = (0);
var state_11699__$1 = (function (){var statearr_11768 = state_11699;
(statearr_11768[(29)] = inst_11474);

(statearr_11768[(31)] = inst_11472);

(statearr_11768[(32)] = inst_11471);

(statearr_11768[(42)] = inst_11465);

(statearr_11768[(33)] = inst_11473);

return statearr_11768;
})();
var statearr_11769_12156 = state_11699__$1;
(statearr_11769_12156[(2)] = null);

(statearr_11769_12156[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11700 === (5))){
var state_11699__$1 = state_11699;
var statearr_11773_12157 = state_11699__$1;
(statearr_11773_12157[(2)] = null);

(statearr_11773_12157[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11700 === (14))){
var inst_11611 = (state_11699[(2)]);
var state_11699__$1 = state_11699;
var statearr_11774_12158 = state_11699__$1;
(statearr_11774_12158[(2)] = inst_11611);

(statearr_11774_12158[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11700 === (45))){
var inst_11453 = (state_11699[(7)]);
var inst_11620 = (state_11699[(20)]);
var inst_11623 = (state_11699[(35)]);
var inst_11446 = (state_11699[(22)]);
var inst_11622 = (state_11699[(36)]);
var inst_11456 = (state_11699[(9)]);
var inst_11621 = (state_11699[(38)]);
var inst_11628 = cljs.core._nth.call(null,inst_11621,inst_11623);
var inst_11630 = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(inst_11628);
var inst_11631 = new cljs.core.Keyword(null,"sprite","sprite",172516848).cljs$core$IFn$_invoke$arity$1(inst_11628);
var inst_11632 = polar_object_coords.call(null,inst_11630,inst_11631,x,y,inst_11453,inst_11456);
var inst_11633 = cljs.core.nth.call(null,inst_11632,(0),null);
var inst_11634 = cljs.core.nth.call(null,inst_11632,(1),null);
var inst_11635 = new cljs.core.Keyword(null,"sprite","sprite",172516848).cljs$core$IFn$_invoke$arity$1(inst_11628);
var inst_11636 = farn.sprite.set_pos_BANG_.call(null,inst_11635,inst_11633,inst_11634);
var inst_11637 = new cljs.core.Keyword(null,"shadow","shadow",873231803).cljs$core$IFn$_invoke$arity$1(inst_11628);
var inst_11638 = farn.sprite.set_pos_BANG_.call(null,inst_11637,inst_11633,inst_11634);
var inst_11639 = new cljs.core.Keyword(null,"sprite","sprite",172516848).cljs$core$IFn$_invoke$arity$1(inst_11628);
var inst_11640 = (inst_11446 * farn.core.pickup_bounce_speed);
var inst_11641 = Math.sin.call(null,inst_11640);
var inst_11642 = ((1) + inst_11641);
var inst_11643 = (farn.core.pickup_bounce_height * inst_11642);
var inst_11644 = (farn.core.pickup_vertical_offset + inst_11643);
var inst_11645 = farn.sprite.set_pivot_BANG_.call(null,inst_11639,(0),inst_11644);
var inst_11646 = (inst_11623 + (1));
var tmp11770 = inst_11620;
var tmp11771 = inst_11622;
var tmp11772 = inst_11621;
var inst_11620__$1 = tmp11770;
var inst_11621__$1 = tmp11772;
var inst_11622__$1 = tmp11771;
var inst_11623__$1 = inst_11646;
var state_11699__$1 = (function (){var statearr_11775 = state_11699;
(statearr_11775[(20)] = inst_11620__$1);

(statearr_11775[(43)] = inst_11645);

(statearr_11775[(35)] = inst_11623__$1);

(statearr_11775[(36)] = inst_11622__$1);

(statearr_11775[(44)] = inst_11638);

(statearr_11775[(38)] = inst_11621__$1);

(statearr_11775[(45)] = inst_11636);

return statearr_11775;
})();
var statearr_11776_12159 = state_11699__$1;
(statearr_11776_12159[(2)] = null);

(statearr_11776_12159[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11700 === (53))){
var inst_11679 = (state_11699[(2)]);
var state_11699__$1 = state_11699;
var statearr_11780_12160 = state_11699__$1;
(statearr_11780_12160[(2)] = inst_11679);

(statearr_11780_12160[(1)] = (50));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11700 === (26))){
var inst_11538 = (state_11699[(28)]);
var inst_11540 = cljs.core.chunked_seq_QMARK_.call(null,inst_11538);
var state_11699__$1 = state_11699;
if(inst_11540){
var statearr_11781_12161 = state_11699__$1;
(statearr_11781_12161[(1)] = (29));

} else {
var statearr_11782_12162 = state_11699__$1;
(statearr_11782_12162[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11700 === (16))){
var inst_11474 = (state_11699[(29)]);
var inst_11472 = (state_11699[(31)]);
var inst_11471 = (state_11699[(32)]);
var inst_11473 = (state_11699[(33)]);
var inst_11534 = (state_11699[(2)]);
var inst_11535 = (inst_11474 + (1));
var tmp11777 = inst_11472;
var tmp11778 = inst_11471;
var tmp11779 = inst_11473;
var inst_11471__$1 = tmp11778;
var inst_11472__$1 = tmp11777;
var inst_11473__$1 = tmp11779;
var inst_11474__$1 = inst_11535;
var state_11699__$1 = (function (){var statearr_11783 = state_11699;
(statearr_11783[(29)] = inst_11474__$1);

(statearr_11783[(31)] = inst_11472__$1);

(statearr_11783[(32)] = inst_11471__$1);

(statearr_11783[(46)] = inst_11534);

(statearr_11783[(33)] = inst_11473__$1);

return statearr_11783;
})();
var statearr_11784_12163 = state_11699__$1;
(statearr_11784_12163[(2)] = null);

(statearr_11784_12163[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11700 === (38))){
var state_11699__$1 = state_11699;
var statearr_11785_12164 = state_11699__$1;
(statearr_11785_12164[(2)] = null);

(statearr_11785_12164[(1)] = (39));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11700 === (30))){
var inst_11538 = (state_11699[(28)]);
var inst_11547 = cljs.core.first.call(null,inst_11538);
var inst_11552 = game_space.call(null,inst_11547);
var inst_11553 = cljs.core.seq.call(null,inst_11552);
var inst_11554 = inst_11553;
var inst_11555 = null;
var inst_11556 = (0);
var inst_11557 = (0);
var state_11699__$1 = (function (){var statearr_11786 = state_11699;
(statearr_11786[(23)] = inst_11556);

(statearr_11786[(24)] = inst_11557);

(statearr_11786[(26)] = inst_11554);

(statearr_11786[(27)] = inst_11555);

return statearr_11786;
})();
var statearr_11787_12165 = state_11699__$1;
(statearr_11787_12165[(2)] = null);

(statearr_11787_12165[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11700 === (10))){
var inst_11474 = (state_11699[(29)]);
var inst_11473 = (state_11699[(33)]);
var inst_11476 = (inst_11474 < inst_11473);
var inst_11477 = inst_11476;
var state_11699__$1 = state_11699;
if(cljs.core.truth_(inst_11477)){
var statearr_11788_12166 = state_11699__$1;
(statearr_11788_12166[(1)] = (12));

} else {
var statearr_11789_12167 = state_11699__$1;
(statearr_11789_12167[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11700 === (18))){
var inst_11486 = (state_11699[(17)]);
var inst_11506 = (state_11699[(14)]);
var inst_11506__$1 = cljs.core.seq.call(null,inst_11486);
var state_11699__$1 = (function (){var statearr_11790 = state_11699;
(statearr_11790[(14)] = inst_11506__$1);

return statearr_11790;
})();
if(inst_11506__$1){
var statearr_11791_12168 = state_11699__$1;
(statearr_11791_12168[(1)] = (20));

} else {
var statearr_11792_12169 = state_11699__$1;
(statearr_11792_12169[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11700 === (52))){
var inst_11453 = (state_11699[(7)]);
var inst_11446 = (state_11699[(22)]);
var inst_11649 = (state_11699[(21)]);
var inst_11456 = (state_11699[(9)]);
var inst_11658 = cljs.core.first.call(null,inst_11649);
var inst_11660 = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(inst_11658);
var inst_11661 = new cljs.core.Keyword(null,"sprite","sprite",172516848).cljs$core$IFn$_invoke$arity$1(inst_11658);
var inst_11662 = polar_object_coords.call(null,inst_11660,inst_11661,x,y,inst_11453,inst_11456);
var inst_11663 = cljs.core.nth.call(null,inst_11662,(0),null);
var inst_11664 = cljs.core.nth.call(null,inst_11662,(1),null);
var inst_11665 = new cljs.core.Keyword(null,"sprite","sprite",172516848).cljs$core$IFn$_invoke$arity$1(inst_11658);
var inst_11666 = farn.sprite.set_pos_BANG_.call(null,inst_11665,inst_11663,inst_11664);
var inst_11667 = new cljs.core.Keyword(null,"shadow","shadow",873231803).cljs$core$IFn$_invoke$arity$1(inst_11658);
var inst_11668 = farn.sprite.set_pos_BANG_.call(null,inst_11667,inst_11663,inst_11664);
var inst_11669 = new cljs.core.Keyword(null,"sprite","sprite",172516848).cljs$core$IFn$_invoke$arity$1(inst_11658);
var inst_11670 = (inst_11446 * farn.core.pickup_bounce_speed);
var inst_11671 = Math.sin.call(null,inst_11670);
var inst_11672 = ((1) + inst_11671);
var inst_11673 = (farn.core.pickup_bounce_height * inst_11672);
var inst_11674 = (farn.core.pickup_vertical_offset + inst_11673);
var inst_11675 = farn.sprite.set_pivot_BANG_.call(null,inst_11669,(0),inst_11674);
var inst_11676 = cljs.core.next.call(null,inst_11649);
var inst_11620 = inst_11676;
var inst_11621 = null;
var inst_11622 = (0);
var inst_11623 = (0);
var state_11699__$1 = (function (){var statearr_11793 = state_11699;
(statearr_11793[(47)] = inst_11668);

(statearr_11793[(20)] = inst_11620);

(statearr_11793[(35)] = inst_11623);

(statearr_11793[(48)] = inst_11675);

(statearr_11793[(36)] = inst_11622);

(statearr_11793[(38)] = inst_11621);

(statearr_11793[(49)] = inst_11666);

return statearr_11793;
})();
var statearr_11794_12170 = state_11699__$1;
(statearr_11794_12170[(2)] = null);

(statearr_11794_12170[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11700 === (42))){
var inst_11595 = (state_11699[(2)]);
var state_11699__$1 = state_11699;
var statearr_11795_12171 = state_11699__$1;
(statearr_11795_12171[(2)] = inst_11595);

(statearr_11795_12171[(1)] = (39));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11700 === (37))){
var inst_11574 = (state_11699[(25)]);
var inst_11576 = cljs.core.chunked_seq_QMARK_.call(null,inst_11574);
var state_11699__$1 = state_11699;
if(inst_11576){
var statearr_11796_12172 = state_11699__$1;
(statearr_11796_12172[(1)] = (40));

} else {
var statearr_11797_12173 = state_11699__$1;
(statearr_11797_12173[(1)] = (41));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11700 === (8))){
var inst_11691 = (state_11699[(2)]);
var state_11699__$1 = (function (){var statearr_11798 = state_11699;
(statearr_11798[(50)] = inst_11691);

return statearr_11798;
})();
var statearr_11799_12174 = state_11699__$1;
(statearr_11799_12174[(2)] = null);

(statearr_11799_12174[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11700 === (49))){
var state_11699__$1 = state_11699;
var statearr_11800_12175 = state_11699__$1;
(statearr_11800_12175[(2)] = null);

(statearr_11800_12175[(1)] = (50));


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
});})(c__6459__auto___12112))
;
return ((function (switch__6444__auto__,c__6459__auto___12112){
return (function() {
var state_machine__6445__auto__ = null;
var state_machine__6445__auto____0 = (function (){
var statearr_11804 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11804[(0)] = state_machine__6445__auto__);

(statearr_11804[(1)] = (1));

return statearr_11804;
});
var state_machine__6445__auto____1 = (function (state_11699){
while(true){
var ret_value__6446__auto__ = (function (){try{while(true){
var result__6447__auto__ = switch__6444__auto__.call(null,state_11699);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6447__auto__;
}
break;
}
}catch (e11805){if((e11805 instanceof Object)){
var ex__6448__auto__ = e11805;
var statearr_11806_12176 = state_11699;
(statearr_11806_12176[(5)] = ex__6448__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11699);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11805;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12177 = state_11699;
state_11699 = G__12177;
continue;
} else {
return ret_value__6446__auto__;
}
break;
}
});
state_machine__6445__auto__ = function(state_11699){
switch(arguments.length){
case 0:
return state_machine__6445__auto____0.call(this);
case 1:
return state_machine__6445__auto____1.call(this,state_11699);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6445__auto____0;
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6445__auto____1;
return state_machine__6445__auto__;
})()
;})(switch__6444__auto__,c__6459__auto___12112))
})();
var state__6461__auto__ = (function (){var statearr_11807 = f__6460__auto__.call(null);
(statearr_11807[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6459__auto___12112);

return statearr_11807;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6461__auto__);
});})(c__6459__auto___12112))
);


var c__6459__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6459__auto__){
return (function (){
var f__6460__auto__ = (function (){var switch__6444__auto__ = ((function (c__6459__auto__){
return (function (state_11997){
var state_val_11998 = (state_11997[(1)]);
if((state_val_11998 === (7))){
var inst_11818 = (state_11997[(7)]);
var inst_11819 = (state_11997[(8)]);
var inst_11821 = (inst_11819 < inst_11818);
var inst_11822 = inst_11821;
var state_11997__$1 = state_11997;
if(cljs.core.truth_(inst_11822)){
var statearr_11999_12178 = state_11997__$1;
(statearr_11999_12178[(1)] = (9));

} else {
var statearr_12000_12179 = state_11997__$1;
(statearr_12000_12179[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11998 === (20))){
var inst_11844 = (state_11997[(9)]);
var inst_11848 = cljs.core.chunk_first.call(null,inst_11844);
var inst_11849 = cljs.core.chunk_rest.call(null,inst_11844);
var inst_11850 = cljs.core.count.call(null,inst_11848);
var inst_11831 = inst_11849;
var inst_11832 = inst_11848;
var inst_11833 = inst_11850;
var inst_11834 = (0);
var state_11997__$1 = (function (){var statearr_12001 = state_11997;
(statearr_12001[(10)] = inst_11834);

(statearr_12001[(11)] = inst_11832);

(statearr_12001[(12)] = inst_11833);

(statearr_12001[(13)] = inst_11831);

return statearr_12001;
})();
var statearr_12002_12180 = state_11997__$1;
(statearr_12002_12180[(2)] = null);

(statearr_12002_12180[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11998 === (27))){
var inst_11872 = (state_11997[(14)]);
var inst_11876 = cljs.core.chunk_first.call(null,inst_11872);
var inst_11877 = cljs.core.chunk_rest.call(null,inst_11872);
var inst_11878 = cljs.core.count.call(null,inst_11876);
var inst_11816 = inst_11877;
var inst_11817 = inst_11876;
var inst_11818 = inst_11878;
var inst_11819 = (0);
var state_11997__$1 = (function (){var statearr_12003 = state_11997;
(statearr_12003[(7)] = inst_11818);

(statearr_12003[(15)] = inst_11816);

(statearr_12003[(8)] = inst_11819);

(statearr_12003[(16)] = inst_11817);

return statearr_12003;
})();
var statearr_12004_12181 = state_11997__$1;
(statearr_12004_12181[(2)] = null);

(statearr_12004_12181[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11998 === (1))){
var state_11997__$1 = state_11997;
var statearr_12005_12182 = state_11997__$1;
(statearr_12005_12182[(2)] = null);

(statearr_12005_12182[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11998 === (24))){
var inst_11872 = (state_11997[(14)]);
var inst_11874 = cljs.core.chunked_seq_QMARK_.call(null,inst_11872);
var state_11997__$1 = state_11997;
if(inst_11874){
var statearr_12006_12183 = state_11997__$1;
(statearr_12006_12183[(1)] = (27));

} else {
var statearr_12007_12184 = state_11997__$1;
(statearr_12007_12184[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11998 === (55))){
var inst_11962 = (state_11997[(17)]);
var inst_11975 = (state_11997[(2)]);
var inst_11976 = cljs.core.next.call(null,inst_11962);
var inst_11946 = inst_11976;
var inst_11947 = null;
var inst_11948 = (0);
var inst_11949 = (0);
var state_11997__$1 = (function (){var statearr_12008 = state_11997;
(statearr_12008[(18)] = inst_11949);

(statearr_12008[(19)] = inst_11947);

(statearr_12008[(20)] = inst_11975);

(statearr_12008[(21)] = inst_11946);

(statearr_12008[(22)] = inst_11948);

return statearr_12008;
})();
var statearr_12009_12185 = state_11997__$1;
(statearr_12009_12185[(2)] = null);

(statearr_12009_12185[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11998 === (39))){
var inst_11901 = (state_11997[(23)]);
var inst_11910 = cljs.core.first.call(null,inst_11901);
var inst_11911 = farn.stars.make.call(null,main_stage,star_tex,shadow_tex,x,y);
var inst_11912 = cljs.core.next.call(null,inst_11901);
var inst_11888 = inst_11912;
var inst_11889 = null;
var inst_11890 = (0);
var inst_11891 = (0);
var state_11997__$1 = (function (){var statearr_12010 = state_11997;
(statearr_12010[(24)] = inst_11888);

(statearr_12010[(25)] = inst_11890);

(statearr_12010[(26)] = inst_11889);

(statearr_12010[(27)] = inst_11891);

(statearr_12010[(28)] = inst_11910);

(statearr_12010[(29)] = inst_11911);

return statearr_12010;
})();
var statearr_12011_12186 = state_11997__$1;
(statearr_12011_12186[(2)] = null);

(statearr_12011_12186[(1)] = (30));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11998 === (46))){
var inst_11946 = (state_11997[(21)]);
var inst_11962 = (state_11997[(17)]);
var inst_11962__$1 = cljs.core.seq.call(null,inst_11946);
var state_11997__$1 = (function (){var statearr_12012 = state_11997;
(statearr_12012[(17)] = inst_11962__$1);

return statearr_12012;
})();
if(inst_11962__$1){
var statearr_12013_12187 = state_11997__$1;
(statearr_12013_12187[(1)] = (49));

} else {
var statearr_12014_12188 = state_11997__$1;
(statearr_12014_12188[(1)] = (50));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11998 === (4))){
var inst_11814 = cljs.core.range.call(null,(10));
var inst_11815 = cljs.core.seq.call(null,inst_11814);
var inst_11816 = inst_11815;
var inst_11817 = null;
var inst_11818 = (0);
var inst_11819 = (0);
var state_11997__$1 = (function (){var statearr_12015 = state_11997;
(statearr_12015[(7)] = inst_11818);

(statearr_12015[(15)] = inst_11816);

(statearr_12015[(8)] = inst_11819);

(statearr_12015[(16)] = inst_11817);

return statearr_12015;
})();
var statearr_12016_12189 = state_11997__$1;
(statearr_12016_12189[(2)] = null);

(statearr_12016_12189[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11998 === (54))){
var inst_11979 = (state_11997[(2)]);
var state_11997__$1 = state_11997;
var statearr_12020_12190 = state_11997__$1;
(statearr_12020_12190[(2)] = inst_11979);

(statearr_12020_12190[(1)] = (51));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11998 === (15))){
var inst_11844 = (state_11997[(9)]);
var inst_11831 = (state_11997[(13)]);
var inst_11844__$1 = cljs.core.seq.call(null,inst_11831);
var state_11997__$1 = (function (){var statearr_12021 = state_11997;
(statearr_12021[(9)] = inst_11844__$1);

return statearr_12021;
})();
if(inst_11844__$1){
var statearr_12022_12191 = state_11997__$1;
(statearr_12022_12191[(1)] = (17));

} else {
var statearr_12023_12192 = state_11997__$1;
(statearr_12023_12192[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11998 === (48))){
var inst_11949 = (state_11997[(18)]);
var inst_11947 = (state_11997[(19)]);
var inst_11946 = (state_11997[(21)]);
var inst_11948 = (state_11997[(22)]);
var inst_11958 = (state_11997[(2)]);
var inst_11959 = (inst_11949 + (1));
var tmp12017 = inst_11947;
var tmp12018 = inst_11946;
var tmp12019 = inst_11948;
var inst_11946__$1 = tmp12018;
var inst_11947__$1 = tmp12017;
var inst_11948__$1 = tmp12019;
var inst_11949__$1 = inst_11959;
var state_11997__$1 = (function (){var statearr_12024 = state_11997;
(statearr_12024[(18)] = inst_11949__$1);

(statearr_12024[(19)] = inst_11947__$1);

(statearr_12024[(21)] = inst_11946__$1);

(statearr_12024[(30)] = inst_11958);

(statearr_12024[(22)] = inst_11948__$1);

return statearr_12024;
})();
var statearr_12025_12193 = state_11997__$1;
(statearr_12025_12193[(2)] = null);

(statearr_12025_12193[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11998 === (50))){
var state_11997__$1 = state_11997;
var statearr_12026_12194 = state_11997__$1;
(statearr_12026_12194[(2)] = null);

(statearr_12026_12194[(1)] = (51));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11998 === (21))){
var inst_11844 = (state_11997[(9)]);
var inst_11853 = cljs.core.first.call(null,inst_11844);
var inst_11854 = farn.stars.make.call(null,main_stage,star_tex,shadow_tex,x,y);
var inst_11855 = cljs.core.next.call(null,inst_11844);
var inst_11831 = inst_11855;
var inst_11832 = null;
var inst_11833 = (0);
var inst_11834 = (0);
var state_11997__$1 = (function (){var statearr_12030 = state_11997;
(statearr_12030[(10)] = inst_11834);

(statearr_12030[(11)] = inst_11832);

(statearr_12030[(31)] = inst_11853);

(statearr_12030[(12)] = inst_11833);

(statearr_12030[(13)] = inst_11831);

(statearr_12030[(32)] = inst_11854);

return statearr_12030;
})();
var statearr_12031_12195 = state_11997__$1;
(statearr_12031_12195[(2)] = null);

(statearr_12031_12195[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11998 === (31))){
var inst_11922 = (state_11997[(2)]);
var inst_11923 = cljs.core.async.timeout.call(null,(1000));
var state_11997__$1 = (function (){var statearr_12032 = state_11997;
(statearr_12032[(33)] = inst_11922);

return statearr_12032;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11997__$1,(41),inst_11923);
} else {
if((state_val_11998 === (32))){
var inst_11888 = (state_11997[(24)]);
var inst_11890 = (state_11997[(25)]);
var inst_11889 = (state_11997[(26)]);
var inst_11891 = (state_11997[(27)]);
var inst_11896 = cljs.core._nth.call(null,inst_11889,inst_11891);
var inst_11897 = farn.stars.make.call(null,main_stage,star_tex,shadow_tex,x,y);
var inst_11898 = (inst_11891 + (1));
var tmp12027 = inst_11888;
var tmp12028 = inst_11890;
var tmp12029 = inst_11889;
var inst_11888__$1 = tmp12027;
var inst_11889__$1 = tmp12029;
var inst_11890__$1 = tmp12028;
var inst_11891__$1 = inst_11898;
var state_11997__$1 = (function (){var statearr_12033 = state_11997;
(statearr_12033[(24)] = inst_11888__$1);

(statearr_12033[(25)] = inst_11890__$1);

(statearr_12033[(26)] = inst_11889__$1);

(statearr_12033[(27)] = inst_11891__$1);

(statearr_12033[(34)] = inst_11896);

(statearr_12033[(35)] = inst_11897);

return statearr_12033;
})();
var statearr_12034_12196 = state_11997__$1;
(statearr_12034_12196[(2)] = null);

(statearr_12034_12196[(1)] = (30));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11998 === (40))){
var inst_11915 = (state_11997[(2)]);
var state_11997__$1 = state_11997;
var statearr_12035_12197 = state_11997__$1;
(statearr_12035_12197[(2)] = inst_11915);

(statearr_12035_12197[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11998 === (56))){
var inst_11989 = (state_11997[(2)]);
var state_11997__$1 = (function (){var statearr_12036 = state_11997;
(statearr_12036[(36)] = inst_11989);

return statearr_12036;
})();
var statearr_12037_12198 = state_11997__$1;
(statearr_12037_12198[(2)] = null);

(statearr_12037_12198[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11998 === (33))){
var inst_11888 = (state_11997[(24)]);
var inst_11901 = (state_11997[(23)]);
var inst_11901__$1 = cljs.core.seq.call(null,inst_11888);
var state_11997__$1 = (function (){var statearr_12038 = state_11997;
(statearr_12038[(23)] = inst_11901__$1);

return statearr_12038;
})();
if(inst_11901__$1){
var statearr_12039_12199 = state_11997__$1;
(statearr_12039_12199[(1)] = (35));

} else {
var statearr_12040_12200 = state_11997__$1;
(statearr_12040_12200[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11998 === (13))){
var inst_11865 = (state_11997[(2)]);
var inst_11866 = cljs.core.async.timeout.call(null,(1000));
var state_11997__$1 = (function (){var statearr_12041 = state_11997;
(statearr_12041[(37)] = inst_11865);

return statearr_12041;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11997__$1,(23),inst_11866);
} else {
if((state_val_11998 === (22))){
var inst_11858 = (state_11997[(2)]);
var state_11997__$1 = state_11997;
var statearr_12042_12201 = state_11997__$1;
(statearr_12042_12201[(2)] = inst_11858);

(statearr_12042_12201[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11998 === (36))){
var state_11997__$1 = state_11997;
var statearr_12043_12202 = state_11997__$1;
(statearr_12043_12202[(2)] = null);

(statearr_12043_12202[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11998 === (41))){
var inst_11872 = (state_11997[(14)]);
var inst_11925 = (state_11997[(2)]);
var inst_11926 = cljs.core.next.call(null,inst_11872);
var inst_11816 = inst_11926;
var inst_11817 = null;
var inst_11818 = (0);
var inst_11819 = (0);
var state_11997__$1 = (function (){var statearr_12044 = state_11997;
(statearr_12044[(7)] = inst_11818);

(statearr_12044[(15)] = inst_11816);

(statearr_12044[(8)] = inst_11819);

(statearr_12044[(38)] = inst_11925);

(statearr_12044[(16)] = inst_11817);

return statearr_12044;
})();
var statearr_12045_12203 = state_11997__$1;
(statearr_12045_12203[(2)] = null);

(statearr_12045_12203[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11998 === (43))){
var inst_11949 = (state_11997[(18)]);
var inst_11948 = (state_11997[(22)]);
var inst_11951 = (inst_11949 < inst_11948);
var inst_11952 = inst_11951;
var state_11997__$1 = state_11997;
if(cljs.core.truth_(inst_11952)){
var statearr_12046_12204 = state_11997__$1;
(statearr_12046_12204[(1)] = (45));

} else {
var statearr_12047_12205 = state_11997__$1;
(statearr_12047_12205[(1)] = (46));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11998 === (29))){
var inst_11929 = (state_11997[(2)]);
var state_11997__$1 = state_11997;
var statearr_12048_12206 = state_11997__$1;
(statearr_12048_12206[(2)] = inst_11929);

(statearr_12048_12206[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11998 === (44))){
var inst_11986 = (state_11997[(2)]);
var inst_11987 = cljs.core.async.timeout.call(null,(3000));
var state_11997__$1 = (function (){var statearr_12049 = state_11997;
(statearr_12049[(39)] = inst_11986);

return statearr_12049;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11997__$1,(56),inst_11987);
} else {
if((state_val_11998 === (6))){
var inst_11993 = (state_11997[(2)]);
var state_11997__$1 = state_11997;
var statearr_12050_12207 = state_11997__$1;
(statearr_12050_12207[(2)] = inst_11993);

(statearr_12050_12207[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11998 === (28))){
var inst_11872 = (state_11997[(14)]);
var inst_11881 = cljs.core.first.call(null,inst_11872);
var inst_11886 = cljs.core.range.call(null,(20));
var inst_11887 = cljs.core.seq.call(null,inst_11886);
var inst_11888 = inst_11887;
var inst_11889 = null;
var inst_11890 = (0);
var inst_11891 = (0);
var state_11997__$1 = (function (){var statearr_12051 = state_11997;
(statearr_12051[(24)] = inst_11888);

(statearr_12051[(25)] = inst_11890);

(statearr_12051[(26)] = inst_11889);

(statearr_12051[(27)] = inst_11891);

(statearr_12051[(40)] = inst_11881);

return statearr_12051;
})();
var statearr_12052_12208 = state_11997__$1;
(statearr_12052_12208[(2)] = null);

(statearr_12052_12208[(1)] = (30));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11998 === (51))){
var inst_11982 = (state_11997[(2)]);
var state_11997__$1 = state_11997;
var statearr_12053_12209 = state_11997__$1;
(statearr_12053_12209[(2)] = inst_11982);

(statearr_12053_12209[(1)] = (47));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11998 === (25))){
var state_11997__$1 = state_11997;
var statearr_12054_12210 = state_11997__$1;
(statearr_12054_12210[(2)] = null);

(statearr_12054_12210[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11998 === (34))){
var inst_11920 = (state_11997[(2)]);
var state_11997__$1 = state_11997;
var statearr_12055_12211 = state_11997__$1;
(statearr_12055_12211[(2)] = inst_11920);

(statearr_12055_12211[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11998 === (17))){
var inst_11844 = (state_11997[(9)]);
var inst_11846 = cljs.core.chunked_seq_QMARK_.call(null,inst_11844);
var state_11997__$1 = state_11997;
if(inst_11846){
var statearr_12056_12212 = state_11997__$1;
(statearr_12056_12212[(1)] = (20));

} else {
var statearr_12057_12213 = state_11997__$1;
(statearr_12057_12213[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11998 === (3))){
var inst_11995 = (state_11997[(2)]);
var state_11997__$1 = state_11997;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11997__$1,inst_11995);
} else {
if((state_val_11998 === (12))){
var inst_11834 = (state_11997[(10)]);
var inst_11833 = (state_11997[(12)]);
var inst_11836 = (inst_11834 < inst_11833);
var inst_11837 = inst_11836;
var state_11997__$1 = state_11997;
if(cljs.core.truth_(inst_11837)){
var statearr_12061_12214 = state_11997__$1;
(statearr_12061_12214[(1)] = (14));

} else {
var statearr_12062_12215 = state_11997__$1;
(statearr_12062_12215[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11998 === (2))){
var state_11997__$1 = state_11997;
var statearr_12063_12216 = state_11997__$1;
(statearr_12063_12216[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11998 === (23))){
var inst_11818 = (state_11997[(7)]);
var inst_11816 = (state_11997[(15)]);
var inst_11819 = (state_11997[(8)]);
var inst_11817 = (state_11997[(16)]);
var inst_11868 = (state_11997[(2)]);
var inst_11869 = (inst_11819 + (1));
var tmp12058 = inst_11818;
var tmp12059 = inst_11816;
var tmp12060 = inst_11817;
var inst_11816__$1 = tmp12059;
var inst_11817__$1 = tmp12060;
var inst_11818__$1 = tmp12058;
var inst_11819__$1 = inst_11869;
var state_11997__$1 = (function (){var statearr_12065 = state_11997;
(statearr_12065[(7)] = inst_11818__$1);

(statearr_12065[(41)] = inst_11868);

(statearr_12065[(15)] = inst_11816__$1);

(statearr_12065[(8)] = inst_11819__$1);

(statearr_12065[(16)] = inst_11817__$1);

return statearr_12065;
})();
var statearr_12066_12217 = state_11997__$1;
(statearr_12066_12217[(2)] = null);

(statearr_12066_12217[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11998 === (47))){
var inst_11984 = (state_11997[(2)]);
var state_11997__$1 = state_11997;
var statearr_12067_12218 = state_11997__$1;
(statearr_12067_12218[(2)] = inst_11984);

(statearr_12067_12218[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11998 === (35))){
var inst_11901 = (state_11997[(23)]);
var inst_11903 = cljs.core.chunked_seq_QMARK_.call(null,inst_11901);
var state_11997__$1 = state_11997;
if(inst_11903){
var statearr_12068_12219 = state_11997__$1;
(statearr_12068_12219[(1)] = (38));

} else {
var statearr_12069_12220 = state_11997__$1;
(statearr_12069_12220[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11998 === (19))){
var inst_11861 = (state_11997[(2)]);
var state_11997__$1 = state_11997;
var statearr_12070_12221 = state_11997__$1;
(statearr_12070_12221[(2)] = inst_11861);

(statearr_12070_12221[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11998 === (11))){
var inst_11934 = (state_11997[(2)]);
var state_11997__$1 = state_11997;
var statearr_12071_12222 = state_11997__$1;
(statearr_12071_12222[(2)] = inst_11934);

(statearr_12071_12222[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11998 === (9))){
var inst_11819 = (state_11997[(8)]);
var inst_11817 = (state_11997[(16)]);
var inst_11824 = cljs.core._nth.call(null,inst_11817,inst_11819);
var inst_11829 = cljs.core.range.call(null,(20));
var inst_11830 = cljs.core.seq.call(null,inst_11829);
var inst_11831 = inst_11830;
var inst_11832 = null;
var inst_11833 = (0);
var inst_11834 = (0);
var state_11997__$1 = (function (){var statearr_12075 = state_11997;
(statearr_12075[(10)] = inst_11834);

(statearr_12075[(11)] = inst_11832);

(statearr_12075[(42)] = inst_11824);

(statearr_12075[(12)] = inst_11833);

(statearr_12075[(13)] = inst_11831);

return statearr_12075;
})();
var statearr_12076_12223 = state_11997__$1;
(statearr_12076_12223[(2)] = null);

(statearr_12076_12223[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11998 === (5))){
var state_11997__$1 = state_11997;
var statearr_12077_12224 = state_11997__$1;
(statearr_12077_12224[(2)] = null);

(statearr_12077_12224[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11998 === (14))){
var inst_11834 = (state_11997[(10)]);
var inst_11832 = (state_11997[(11)]);
var inst_11833 = (state_11997[(12)]);
var inst_11831 = (state_11997[(13)]);
var inst_11839 = cljs.core._nth.call(null,inst_11832,inst_11834);
var inst_11840 = farn.stars.make.call(null,main_stage,star_tex,shadow_tex,x,y);
var inst_11841 = (inst_11834 + (1));
var tmp12072 = inst_11832;
var tmp12073 = inst_11833;
var tmp12074 = inst_11831;
var inst_11831__$1 = tmp12074;
var inst_11832__$1 = tmp12072;
var inst_11833__$1 = tmp12073;
var inst_11834__$1 = inst_11841;
var state_11997__$1 = (function (){var statearr_12078 = state_11997;
(statearr_12078[(10)] = inst_11834__$1);

(statearr_12078[(11)] = inst_11832__$1);

(statearr_12078[(12)] = inst_11833__$1);

(statearr_12078[(13)] = inst_11831__$1);

(statearr_12078[(43)] = inst_11840);

(statearr_12078[(44)] = inst_11839);

return statearr_12078;
})();
var statearr_12079_12225 = state_11997__$1;
(statearr_12079_12225[(2)] = null);

(statearr_12079_12225[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11998 === (45))){
var inst_11949 = (state_11997[(18)]);
var inst_11947 = (state_11997[(19)]);
var inst_11954 = cljs.core._nth.call(null,inst_11947,inst_11949);
var inst_11955 = farn.stars.make.call(null,main_stage,star_tex,shadow_tex,x,y);
var inst_11956 = cljs.core.async.timeout.call(null,(100));
var state_11997__$1 = (function (){var statearr_12080 = state_11997;
(statearr_12080[(45)] = inst_11955);

(statearr_12080[(46)] = inst_11954);

return statearr_12080;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11997__$1,(48),inst_11956);
} else {
if((state_val_11998 === (53))){
var inst_11962 = (state_11997[(17)]);
var inst_11971 = cljs.core.first.call(null,inst_11962);
var inst_11972 = farn.stars.make.call(null,main_stage,star_tex,shadow_tex,x,y);
var inst_11973 = cljs.core.async.timeout.call(null,(100));
var state_11997__$1 = (function (){var statearr_12081 = state_11997;
(statearr_12081[(47)] = inst_11972);

(statearr_12081[(48)] = inst_11971);

return statearr_12081;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11997__$1,(55),inst_11973);
} else {
if((state_val_11998 === (26))){
var inst_11932 = (state_11997[(2)]);
var state_11997__$1 = state_11997;
var statearr_12082_12226 = state_11997__$1;
(statearr_12082_12226[(2)] = inst_11932);

(statearr_12082_12226[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11998 === (16))){
var inst_11863 = (state_11997[(2)]);
var state_11997__$1 = state_11997;
var statearr_12083_12227 = state_11997__$1;
(statearr_12083_12227[(2)] = inst_11863);

(statearr_12083_12227[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11998 === (38))){
var inst_11901 = (state_11997[(23)]);
var inst_11905 = cljs.core.chunk_first.call(null,inst_11901);
var inst_11906 = cljs.core.chunk_rest.call(null,inst_11901);
var inst_11907 = cljs.core.count.call(null,inst_11905);
var inst_11888 = inst_11906;
var inst_11889 = inst_11905;
var inst_11890 = inst_11907;
var inst_11891 = (0);
var state_11997__$1 = (function (){var statearr_12084 = state_11997;
(statearr_12084[(24)] = inst_11888);

(statearr_12084[(25)] = inst_11890);

(statearr_12084[(26)] = inst_11889);

(statearr_12084[(27)] = inst_11891);

return statearr_12084;
})();
var statearr_12085_12228 = state_11997__$1;
(statearr_12085_12228[(2)] = null);

(statearr_12085_12228[(1)] = (30));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11998 === (30))){
var inst_11890 = (state_11997[(25)]);
var inst_11891 = (state_11997[(27)]);
var inst_11893 = (inst_11891 < inst_11890);
var inst_11894 = inst_11893;
var state_11997__$1 = state_11997;
if(cljs.core.truth_(inst_11894)){
var statearr_12086_12229 = state_11997__$1;
(statearr_12086_12229[(1)] = (32));

} else {
var statearr_12087_12230 = state_11997__$1;
(statearr_12087_12230[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11998 === (10))){
var inst_11872 = (state_11997[(14)]);
var inst_11816 = (state_11997[(15)]);
var inst_11872__$1 = cljs.core.seq.call(null,inst_11816);
var state_11997__$1 = (function (){var statearr_12088 = state_11997;
(statearr_12088[(14)] = inst_11872__$1);

return statearr_12088;
})();
if(inst_11872__$1){
var statearr_12089_12231 = state_11997__$1;
(statearr_12089_12231[(1)] = (24));

} else {
var statearr_12090_12232 = state_11997__$1;
(statearr_12090_12232[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11998 === (18))){
var state_11997__$1 = state_11997;
var statearr_12091_12233 = state_11997__$1;
(statearr_12091_12233[(2)] = null);

(statearr_12091_12233[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11998 === (52))){
var inst_11962 = (state_11997[(17)]);
var inst_11966 = cljs.core.chunk_first.call(null,inst_11962);
var inst_11967 = cljs.core.chunk_rest.call(null,inst_11962);
var inst_11968 = cljs.core.count.call(null,inst_11966);
var inst_11946 = inst_11967;
var inst_11947 = inst_11966;
var inst_11948 = inst_11968;
var inst_11949 = (0);
var state_11997__$1 = (function (){var statearr_12092 = state_11997;
(statearr_12092[(18)] = inst_11949);

(statearr_12092[(19)] = inst_11947);

(statearr_12092[(21)] = inst_11946);

(statearr_12092[(22)] = inst_11948);

return statearr_12092;
})();
var statearr_12093_12234 = state_11997__$1;
(statearr_12093_12234[(2)] = null);

(statearr_12093_12234[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11998 === (42))){
var inst_11939 = (state_11997[(2)]);
var inst_11944 = cljs.core.range.call(null,(100));
var inst_11945 = cljs.core.seq.call(null,inst_11944);
var inst_11946 = inst_11945;
var inst_11947 = null;
var inst_11948 = (0);
var inst_11949 = (0);
var state_11997__$1 = (function (){var statearr_12094 = state_11997;
(statearr_12094[(18)] = inst_11949);

(statearr_12094[(19)] = inst_11947);

(statearr_12094[(49)] = inst_11939);

(statearr_12094[(21)] = inst_11946);

(statearr_12094[(22)] = inst_11948);

return statearr_12094;
})();
var statearr_12095_12235 = state_11997__$1;
(statearr_12095_12235[(2)] = null);

(statearr_12095_12235[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11998 === (37))){
var inst_11918 = (state_11997[(2)]);
var state_11997__$1 = state_11997;
var statearr_12096_12236 = state_11997__$1;
(statearr_12096_12236[(2)] = inst_11918);

(statearr_12096_12236[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11998 === (8))){
var inst_11936 = (state_11997[(2)]);
var inst_11937 = cljs.core.async.timeout.call(null,(3000));
var state_11997__$1 = (function (){var statearr_12097 = state_11997;
(statearr_12097[(50)] = inst_11936);

return statearr_12097;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11997__$1,(42),inst_11937);
} else {
if((state_val_11998 === (49))){
var inst_11962 = (state_11997[(17)]);
var inst_11964 = cljs.core.chunked_seq_QMARK_.call(null,inst_11962);
var state_11997__$1 = state_11997;
if(inst_11964){
var statearr_12098_12237 = state_11997__$1;
(statearr_12098_12237[(1)] = (52));

} else {
var statearr_12099_12238 = state_11997__$1;
(statearr_12099_12238[(1)] = (53));

}

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
});})(c__6459__auto__))
;
return ((function (switch__6444__auto__,c__6459__auto__){
return (function() {
var state_machine__6445__auto__ = null;
var state_machine__6445__auto____0 = (function (){
var statearr_12103 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12103[(0)] = state_machine__6445__auto__);

(statearr_12103[(1)] = (1));

return statearr_12103;
});
var state_machine__6445__auto____1 = (function (state_11997){
while(true){
var ret_value__6446__auto__ = (function (){try{while(true){
var result__6447__auto__ = switch__6444__auto__.call(null,state_11997);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6447__auto__;
}
break;
}
}catch (e12104){if((e12104 instanceof Object)){
var ex__6448__auto__ = e12104;
var statearr_12105_12239 = state_11997;
(statearr_12105_12239[(5)] = ex__6448__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11997);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12104;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12240 = state_11997;
state_11997 = G__12240;
continue;
} else {
return ret_value__6446__auto__;
}
break;
}
});
state_machine__6445__auto__ = function(state_11997){
switch(arguments.length){
case 0:
return state_machine__6445__auto____0.call(this);
case 1:
return state_machine__6445__auto____1.call(this,state_11997);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6445__auto____0;
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6445__auto____1;
return state_machine__6445__auto__;
})()
;})(switch__6444__auto__,c__6459__auto__))
})();
var state__6461__auto__ = (function (){var statearr_12106 = f__6460__auto__.call(null);
(statearr_12106[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6459__auto__);

return statearr_12106;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6461__auto__);
});})(c__6459__auto__))
);

return c__6459__auto__;
});
/**
* @param {...*} var_args
*/
farn.core.load = (function() { 
var load__delegate = function (s,urls,p__12241){
var map__12275 = p__12241;
var map__12275__$1 = ((cljs.core.seq_QMARK_.call(null,map__12275))?cljs.core.apply.call(null,cljs.core.hash_map,map__12275):map__12275);
var options = map__12275__$1;
var fade_out = cljs.core.get.call(null,map__12275__$1,new cljs.core.Keyword(null,"fade-out","fade-out",-1200160760),0.5);
var fade_in = cljs.core.get.call(null,map__12275__$1,new cljs.core.Keyword(null,"fade-in","fade-in",999370239),0.5);
var c = cljs.core.async.chan.call(null);
var b = farn.gfx.add_prog_bar.call(null,s,options);
var c__6459__auto___12308 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6459__auto___12308,c,b,map__12275,map__12275__$1,options,fade_out,fade_in){
return (function (){
var f__6460__auto__ = (function (){var switch__6444__auto__ = ((function (c__6459__auto___12308,c,b,map__12275,map__12275__$1,options,fade_out,fade_in){
return (function (state_12294){
var state_val_12295 = (state_12294[(1)]);
if((state_val_12295 === (6))){
var inst_12290 = (state_12294[(2)]);
var inst_12291 = s.removeChild(b);
var inst_12292 = cljs.core.async.close_BANG_.call(null,c);
var state_12294__$1 = (function (){var statearr_12296 = state_12294;
(statearr_12296[(7)] = inst_12290);

(statearr_12296[(8)] = inst_12291);

return statearr_12296;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12294__$1,inst_12292);
} else {
if((state_val_12295 === (5))){
var inst_12287 = (state_12294[(2)]);
var inst_12288 = farn.gfx.fadeout.call(null,b,new cljs.core.Keyword(null,"duration","duration",1444101068),fade_out);
var state_12294__$1 = (function (){var statearr_12297 = state_12294;
(statearr_12297[(9)] = inst_12287);

return statearr_12297;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12294__$1,(6),inst_12288);
} else {
if((state_val_12295 === (4))){
var inst_12284 = (state_12294[(2)]);
var inst_12285 = cljs.core.async.timeout.call(null,(300));
var state_12294__$1 = (function (){var statearr_12298 = state_12294;
(statearr_12298[(10)] = inst_12284);

return statearr_12298;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12294__$1,(5),inst_12285);
} else {
if((state_val_12295 === (3))){
var inst_12282 = (state_12294[(2)]);
var state_12294__$1 = (function (){var statearr_12299 = state_12294;
(statearr_12299[(11)] = inst_12282);

return statearr_12299;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12294__$1,(4),c,true);
} else {
if((state_val_12295 === (2))){
var inst_12278 = (state_12294[(2)]);
var inst_12279 = cljs.core.partial.call(null,farn.gfx.load_urls,urls,b);
var inst_12280 = cljs.core.apply.call(null,inst_12279,options);
var state_12294__$1 = (function (){var statearr_12300 = state_12294;
(statearr_12300[(12)] = inst_12278);

return statearr_12300;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12294__$1,(3),inst_12280);
} else {
if((state_val_12295 === (1))){
var inst_12276 = farn.gfx.fadein.call(null,b,new cljs.core.Keyword(null,"duration","duration",1444101068),fade_in);
var state_12294__$1 = state_12294;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12294__$1,(2),inst_12276);
} else {
return null;
}
}
}
}
}
}
});})(c__6459__auto___12308,c,b,map__12275,map__12275__$1,options,fade_out,fade_in))
;
return ((function (switch__6444__auto__,c__6459__auto___12308,c,b,map__12275,map__12275__$1,options,fade_out,fade_in){
return (function() {
var state_machine__6445__auto__ = null;
var state_machine__6445__auto____0 = (function (){
var statearr_12304 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12304[(0)] = state_machine__6445__auto__);

(statearr_12304[(1)] = (1));

return statearr_12304;
});
var state_machine__6445__auto____1 = (function (state_12294){
while(true){
var ret_value__6446__auto__ = (function (){try{while(true){
var result__6447__auto__ = switch__6444__auto__.call(null,state_12294);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6447__auto__;
}
break;
}
}catch (e12305){if((e12305 instanceof Object)){
var ex__6448__auto__ = e12305;
var statearr_12306_12309 = state_12294;
(statearr_12306_12309[(5)] = ex__6448__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12294);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12305;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12310 = state_12294;
state_12294 = G__12310;
continue;
} else {
return ret_value__6446__auto__;
}
break;
}
});
state_machine__6445__auto__ = function(state_12294){
switch(arguments.length){
case 0:
return state_machine__6445__auto____0.call(this);
case 1:
return state_machine__6445__auto____1.call(this,state_12294);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6445__auto____0;
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6445__auto____1;
return state_machine__6445__auto__;
})()
;})(switch__6444__auto__,c__6459__auto___12308,c,b,map__12275,map__12275__$1,options,fade_out,fade_in))
})();
var state__6461__auto__ = (function (){var statearr_12307 = f__6460__auto__.call(null);
(statearr_12307[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6459__auto___12308);

return statearr_12307;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6461__auto__);
});})(c__6459__auto___12308,c,b,map__12275,map__12275__$1,options,fade_out,fade_in))
);


return c;
};
var load = function (s,urls,var_args){
var p__12241 = null;
if (arguments.length > 2) {
  p__12241 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return load__delegate.call(this,s,urls,p__12241);};
load.cljs$lang$maxFixedArity = 2;
load.cljs$lang$applyTo = (function (arglist__12311){
var s = cljs.core.first(arglist__12311);
arglist__12311 = cljs.core.next(arglist__12311);
var urls = cljs.core.first(arglist__12311);
var p__12241 = cljs.core.rest(arglist__12311);
return load__delegate(s,urls,p__12241);
});
load.cljs$core$IFn$_invoke$arity$variadic = load__delegate;
return load;
})()
;
farn.core.world = farn.gfx.init.call(null,new cljs.core.Keyword(null,"background","background",-863952629),farn.core.grass_green,new cljs.core.Keyword(null,"expand","expand",595248157),true,new cljs.core.Keyword(null,"engine","engine",1459054265),new cljs.core.Keyword(null,"auto","auto",-566279492),new cljs.core.Keyword(null,"canvas","canvas",-1798817489),document.getElementById("game"));
farn.core.main_stage = new cljs.core.Keyword(null,"world","world",-418292623).cljs$core$IFn$_invoke$arity$1(farn.core.world);
farn.core.ui_stage = new cljs.core.Keyword(null,"ui","ui",-469653645).cljs$core$IFn$_invoke$arity$1(farn.core.world);
var c__6459__auto___12343 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6459__auto___12343){
return (function (){
var f__6460__auto__ = (function (){var switch__6444__auto__ = ((function (c__6459__auto___12343){
return (function (state_12327){
var state_val_12328 = (state_12327[(1)]);
if((state_val_12328 === (7))){
var inst_12316 = (state_12327[(2)]);
var inst_12317 = new cljs.core.Keyword(null,"renderer","renderer",336841071).cljs$core$IFn$_invoke$arity$1(farn.core.world);
var inst_12318 = new cljs.core.Keyword(null,"stage","stage",1843544772).cljs$core$IFn$_invoke$arity$1(farn.core.world);
var inst_12319 = inst_12317.render(inst_12318);
var state_12327__$1 = (function (){var statearr_12329 = state_12327;
(statearr_12329[(7)] = inst_12319);

(statearr_12329[(8)] = inst_12316);

return statearr_12329;
})();
var statearr_12330_12344 = state_12327__$1;
(statearr_12330_12344[(2)] = null);

(statearr_12330_12344[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12328 === (6))){
var inst_12323 = (state_12327[(2)]);
var state_12327__$1 = state_12327;
var statearr_12331_12345 = state_12327__$1;
(statearr_12331_12345[(2)] = inst_12323);

(statearr_12331_12345[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12328 === (5))){
var state_12327__$1 = state_12327;
var statearr_12332_12346 = state_12327__$1;
(statearr_12332_12346[(2)] = null);

(statearr_12332_12346[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12328 === (4))){
var inst_12314 = farn.events.next_frame.call(null);
var state_12327__$1 = state_12327;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12327__$1,(7),inst_12314);
} else {
if((state_val_12328 === (3))){
var inst_12325 = (state_12327[(2)]);
var state_12327__$1 = state_12327;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12327__$1,inst_12325);
} else {
if((state_val_12328 === (2))){
var state_12327__$1 = state_12327;
var statearr_12333_12347 = state_12327__$1;
(statearr_12333_12347[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12328 === (1))){
var state_12327__$1 = state_12327;
var statearr_12335_12348 = state_12327__$1;
(statearr_12335_12348[(2)] = null);

(statearr_12335_12348[(1)] = (2));


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
});})(c__6459__auto___12343))
;
return ((function (switch__6444__auto__,c__6459__auto___12343){
return (function() {
var state_machine__6445__auto__ = null;
var state_machine__6445__auto____0 = (function (){
var statearr_12339 = [null,null,null,null,null,null,null,null,null];
(statearr_12339[(0)] = state_machine__6445__auto__);

(statearr_12339[(1)] = (1));

return statearr_12339;
});
var state_machine__6445__auto____1 = (function (state_12327){
while(true){
var ret_value__6446__auto__ = (function (){try{while(true){
var result__6447__auto__ = switch__6444__auto__.call(null,state_12327);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6447__auto__;
}
break;
}
}catch (e12340){if((e12340 instanceof Object)){
var ex__6448__auto__ = e12340;
var statearr_12341_12349 = state_12327;
(statearr_12341_12349[(5)] = ex__6448__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12327);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12340;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12350 = state_12327;
state_12327 = G__12350;
continue;
} else {
return ret_value__6446__auto__;
}
break;
}
});
state_machine__6445__auto__ = function(state_12327){
switch(arguments.length){
case 0:
return state_machine__6445__auto____0.call(this);
case 1:
return state_machine__6445__auto____1.call(this,state_12327);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6445__auto____0;
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6445__auto____1;
return state_machine__6445__auto__;
})()
;})(switch__6444__auto__,c__6459__auto___12343))
})();
var state__6461__auto__ = (function (){var statearr_12342 = f__6460__auto__.call(null);
(statearr_12342[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6459__auto___12343);

return statearr_12342;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6461__auto__);
});})(c__6459__auto___12343))
);

/**
* @param {...*} var_args
*/
farn.core.make_sprite = (function() { 
var make_sprite__delegate = function (tex,p__12351){
var map__12353 = p__12351;
var map__12353__$1 = ((cljs.core.seq_QMARK_.call(null,map__12353))?cljs.core.apply.call(null,cljs.core.hash_map,map__12353):map__12353);
var anchor_y = cljs.core.get.call(null,map__12353__$1,new cljs.core.Keyword(null,"anchor-y","anchor-y",-1366716999),(1));
var anchor_x = cljs.core.get.call(null,map__12353__$1,new cljs.core.Keyword(null,"anchor-x","anchor-x",-1597588837),0.5);
var s = farn.gfx.make_sprite.call(null,tex);
farn.sprite.set_anchor_BANG_.call(null,s,anchor_x,anchor_y);

return s;
};
var make_sprite = function (tex,var_args){
var p__12351 = null;
if (arguments.length > 1) {
  p__12351 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return make_sprite__delegate.call(this,tex,p__12351);};
make_sprite.cljs$lang$maxFixedArity = 1;
make_sprite.cljs$lang$applyTo = (function (arglist__12354){
var tex = cljs.core.first(arglist__12354);
var p__12351 = cljs.core.rest(arglist__12354);
return make_sprite__delegate(tex,p__12351);
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

var c_13797 = farn.map.perlin_map_generator.call(null);
var c__6459__auto___13798 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6459__auto___13798,c_13797){
return (function (){
var f__6460__auto__ = (function (){var switch__6444__auto__ = ((function (c__6459__auto___13798,c_13797){
return (function (state_12364){
var state_val_12365 = (state_12364[(1)]);
if((state_val_12365 === (2))){
var inst_12360 = (state_12364[(2)]);
var inst_12361 = inst_12360.length;
var inst_12362 = cljs.core.println.call(null,"Perlin map done:",inst_12361);
var state_12364__$1 = state_12364;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12364__$1,inst_12362);
} else {
if((state_val_12365 === (1))){
var state_12364__$1 = state_12364;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12364__$1,(2),c_13797);
} else {
return null;
}
}
});})(c__6459__auto___13798,c_13797))
;
return ((function (switch__6444__auto__,c__6459__auto___13798,c_13797){
return (function() {
var state_machine__6445__auto__ = null;
var state_machine__6445__auto____0 = (function (){
var statearr_12369 = [null,null,null,null,null,null,null];
(statearr_12369[(0)] = state_machine__6445__auto__);

(statearr_12369[(1)] = (1));

return statearr_12369;
});
var state_machine__6445__auto____1 = (function (state_12364){
while(true){
var ret_value__6446__auto__ = (function (){try{while(true){
var result__6447__auto__ = switch__6444__auto__.call(null,state_12364);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6447__auto__;
}
break;
}
}catch (e12370){if((e12370 instanceof Object)){
var ex__6448__auto__ = e12370;
var statearr_12371_13799 = state_12364;
(statearr_12371_13799[(5)] = ex__6448__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12364);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12370;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13800 = state_12364;
state_12364 = G__13800;
continue;
} else {
return ret_value__6446__auto__;
}
break;
}
});
state_machine__6445__auto__ = function(state_12364){
switch(arguments.length){
case 0:
return state_machine__6445__auto____0.call(this);
case 1:
return state_machine__6445__auto____1.call(this,state_12364);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6445__auto____0;
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6445__auto____1;
return state_machine__6445__auto__;
})()
;})(switch__6444__auto__,c__6459__auto___13798,c_13797))
})();
var state__6461__auto__ = (function (){var statearr_12372 = f__6460__auto__.call(null);
(statearr_12372[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6459__auto___13798);

return statearr_12372;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6461__auto__);
});})(c__6459__auto___13798,c_13797))
);

} else {
var c__6459__auto___13801 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6459__auto___13801){
return (function (){
var f__6460__auto__ = (function (){var switch__6444__auto__ = ((function (c__6459__auto___13801){
return (function (state_13385){
var state_val_13386 = (state_13385[(1)]);
if((state_val_13386 === (121))){
var state_13385__$1 = state_13385;
var statearr_13387_13802 = state_13385__$1;
(statearr_13387_13802[(1)] = (123));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13386 === (65))){
var inst_13113 = (state_13385[(2)]);
var state_13385__$1 = state_13385;
var statearr_13389_13803 = state_13385__$1;
(statearr_13389_13803[(2)] = inst_13113);

(statearr_13389_13803[(1)] = (63));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13386 === (70))){
var inst_13218 = (state_13385[(2)]);
var inst_13223 = cljs.core.deref.call(null,farn.core.pickup_store);
var inst_13224 = cljs.core.seq.call(null,inst_13223);
var inst_13225 = inst_13224;
var inst_13226 = null;
var inst_13227 = (0);
var inst_13228 = (0);
var state_13385__$1 = (function (){var statearr_13390 = state_13385;
(statearr_13390[(7)] = inst_13225);

(statearr_13390[(8)] = inst_13218);

(statearr_13390[(9)] = inst_13227);

(statearr_13390[(10)] = inst_13226);

(statearr_13390[(11)] = inst_13228);

return statearr_13390;
})();
var statearr_13391_13804 = state_13385__$1;
(statearr_13391_13804[(2)] = null);

(statearr_13391_13804[(1)] = (96));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13386 === (62))){
var state_13385__$1 = state_13385;
var statearr_13392_13805 = state_13385__$1;
(statearr_13392_13805[(2)] = null);

(statearr_13392_13805[(1)] = (63));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13386 === (74))){
var inst_13143 = (0);
var state_13385__$1 = (function (){var statearr_13393 = state_13385;
(statearr_13393[(12)] = inst_13143);

return statearr_13393;
})();
var statearr_13394_13806 = state_13385__$1;
(statearr_13394_13806[(2)] = null);

(statearr_13394_13806[(1)] = (77));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13386 === (110))){
var inst_13307 = (state_13385[(13)]);
var state_13385__$1 = state_13385;
var statearr_13395_13807 = state_13385__$1;
(statearr_13395_13807[(2)] = inst_13307);

(statearr_13395_13807[(1)] = (112));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13386 === (130))){
var inst_13368 = farn.events.is_pressed_QMARK_.call(null,new cljs.core.Keyword(null,"right","right",-452581833));
var state_13385__$1 = state_13385;
if(cljs.core.truth_(inst_13368)){
var statearr_13396_13808 = state_13385__$1;
(statearr_13396_13808[(1)] = (132));

} else {
var statearr_13397_13809 = state_13385__$1;
(statearr_13397_13809[(1)] = (133));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13386 === (128))){
var inst_13356 = (state_13385[(2)]);
var state_13385__$1 = state_13385;
var statearr_13398_13810 = state_13385__$1;
(statearr_13398_13810[(2)] = inst_13356);

(statearr_13398_13810[(1)] = (125));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13386 === (7))){
var inst_12459 = (state_13385[(14)]);
var inst_12464 = [cljs.core.str("sfx/pickup-"),cljs.core.str(inst_12459),cljs.core.str(".ogg")].join('');
var inst_12465 = farn.sound.load_sound.call(null,inst_12464);
var state_13385__$1 = state_13385;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13385__$1,(10),inst_12465);
} else {
if((state_val_13386 === (59))){
var inst_12888 = (state_13385[(15)]);
var state_13385__$1 = state_13385;
var statearr_13399_13811 = state_13385__$1;
(statearr_13399_13811[(2)] = inst_12888);

(statearr_13399_13811[(1)] = (60));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13386 === (86))){
var inst_13180 = (state_13385[(16)]);
var inst_13181 = (state_13385[(17)]);
var inst_13170 = (state_13385[(18)]);
var inst_12586 = (state_13385[(19)]);
var inst_13179 = cljs.core.first.call(null,inst_13170);
var inst_13180__$1 = inst_12586.call(null,inst_13179);
var inst_13181__$1 = cljs.core.count.call(null,inst_13180__$1);
var inst_13182 = (inst_13181__$1 > (0));
var state_13385__$1 = (function (){var statearr_13400 = state_13385;
(statearr_13400[(16)] = inst_13180__$1);

(statearr_13400[(17)] = inst_13181__$1);

return statearr_13400;
})();
if(cljs.core.truth_(inst_13182)){
var statearr_13401_13812 = state_13385__$1;
(statearr_13401_13812[(1)] = (88));

} else {
var statearr_13402_13813 = state_13385__$1;
(statearr_13402_13813[(1)] = (89));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13386 === (20))){
var inst_12939 = (state_13385[(20)]);
var inst_12936 = (state_13385[(21)]);
var inst_12939__$1 = cljs.core.nth.call(null,inst_12936,(0),null);
var inst_12940 = cljs.core.nthnext.call(null,inst_12936,(1));
var inst_12941 = (inst_12939__$1 == null);
var state_13385__$1 = (function (){var statearr_13403 = state_13385;
(statearr_13403[(20)] = inst_12939__$1);

(statearr_13403[(22)] = inst_12940);

return statearr_13403;
})();
if(cljs.core.truth_(inst_12941)){
var statearr_13404_13814 = state_13385__$1;
(statearr_13404_13814[(1)] = (22));

} else {
var statearr_13405_13815 = state_13385__$1;
(statearr_13405_13815[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13386 === (72))){
var inst_13130 = (state_13385[(23)]);
var inst_13170 = (state_13385[(18)]);
var inst_13170__$1 = cljs.core.seq.call(null,inst_13130);
var state_13385__$1 = (function (){var statearr_13406 = state_13385;
(statearr_13406[(18)] = inst_13170__$1);

return statearr_13406;
})();
if(inst_13170__$1){
var statearr_13407_13816 = state_13385__$1;
(statearr_13407_13816[(1)] = (82));

} else {
var statearr_13408_13817 = state_13385__$1;
(statearr_13408_13817[(1)] = (83));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13386 === (58))){
var inst_13097 = (state_13385[(24)]);
var inst_12882 = (state_13385[(25)]);
var inst_12501 = (state_13385[(26)]);
var inst_13093 = cljs.core.rand_nth.call(null,inst_12501);
var inst_13094 = farn.sound.play_sound.call(null,inst_13093,0.5);
var inst_13096 = cljs.core.deref.call(null,farn.core.player_stars);
var inst_13097__$1 = (((30) < inst_13096) ? (30) : inst_13096);
var inst_13098 = cljs.core.nth.call(null,inst_12882,(0),null);
var inst_13099 = cljs.core.nth.call(null,inst_12882,(1),null);
var inst_13100 = (inst_13097__$1 > (0));
var state_13385__$1 = (function (){var statearr_13409 = state_13385;
(statearr_13409[(24)] = inst_13097__$1);

(statearr_13409[(27)] = inst_13098);

(statearr_13409[(28)] = inst_13099);

(statearr_13409[(29)] = inst_13094);

return statearr_13409;
})();
if(cljs.core.truth_(inst_13100)){
var statearr_13410_13818 = state_13385__$1;
(statearr_13410_13818[(1)] = (61));

} else {
var statearr_13411_13819 = state_13385__$1;
(statearr_13411_13819[(1)] = (62));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13386 === (60))){
var inst_12882 = (state_13385[(25)]);
var inst_12396 = (state_13385[(30)]);
var inst_12398 = (state_13385[(31)]);
var inst_12886 = (state_13385[(32)]);
var inst_13122 = (state_13385[(2)]);
var inst_13123 = farn.sprite.set_pos_BANG_.call(null,inst_12396,inst_12882);
var inst_13124 = farn.sprite.set_pos_BANG_.call(null,inst_12398,inst_12882);
var inst_13129 = cljs.core.seq.call(null,inst_12886);
var inst_13130 = inst_13129;
var inst_13131 = null;
var inst_13132 = (0);
var inst_13133 = (0);
var state_13385__$1 = (function (){var statearr_13412 = state_13385;
(statearr_13412[(33)] = inst_13131);

(statearr_13412[(34)] = inst_13133);

(statearr_13412[(35)] = inst_13123);

(statearr_13412[(23)] = inst_13130);

(statearr_13412[(36)] = inst_13132);

(statearr_13412[(37)] = inst_13122);

(statearr_13412[(38)] = inst_13124);

return statearr_13412;
})();
var statearr_13413_13820 = state_13385__$1;
(statearr_13413_13820[(2)] = null);

(statearr_13413_13820[(1)] = (69));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13386 === (27))){
var inst_12969 = (state_13385[(39)]);
var inst_12591 = (state_13385[(40)]);
var inst_12965 = (state_13385[(41)]);
var inst_12968 = (state_13385[(42)]);
var inst_12973 = inst_12591.call(null,inst_12968);
var inst_12974 = cljs.core.disj.call(null,inst_12965,inst_12968);
var inst_12964 = inst_12969;
var inst_12965__$1 = inst_12974;
var state_13385__$1 = (function (){var statearr_13414 = state_13385;
(statearr_13414[(43)] = inst_12964);

(statearr_13414[(41)] = inst_12965__$1);

(statearr_13414[(44)] = inst_12973);

return statearr_13414;
})();
var statearr_13415_13821 = state_13385__$1;
(statearr_13415_13821[(2)] = null);

(statearr_13415_13821[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13386 === (1))){
var inst_12383 = (state_13385[(45)]);
var inst_12380 = cljs.core.async.chan.call(null,(1));
var inst_12381 = (function (){var c__6459__auto____$1 = inst_12380;
return ((function (c__6459__auto____$1,inst_12383,inst_12380,state_val_13386,c__6459__auto___13801){
return (function (){
var f__6460__auto__ = (function (){var switch__6444__auto__ = ((function (c__6459__auto____$1,inst_12383,inst_12380,state_val_13386,c__6459__auto___13801){
return (function (state_12378){
var state_val_12379 = (state_12378[(1)]);
if((state_val_12379 === (2))){
var inst_12375 = (state_12378[(2)]);
var inst_12376 = farn.sound.play_sound.call(null,inst_12375,0.9,true);
var state_12378__$1 = state_12378;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12378__$1,inst_12376);
} else {
if((state_val_12379 === (1))){
var inst_12373 = farn.sound.load_sound.call(null,"music/bu-ogre-of-a-simplex.ogg");
var state_12378__$1 = state_12378;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12378__$1,(2),inst_12373);
} else {
return null;
}
}
});})(c__6459__auto____$1,inst_12383,inst_12380,state_val_13386,c__6459__auto___13801))
;
return ((function (switch__6444__auto__,c__6459__auto____$1,inst_12383,inst_12380,state_val_13386,c__6459__auto___13801){
return (function() {
var state_machine__6445__auto__ = null;
var state_machine__6445__auto____0 = (function (){
var statearr_13419 = [null,null,null,null,null,null,null];
(statearr_13419[(0)] = state_machine__6445__auto__);

(statearr_13419[(1)] = (1));

return statearr_13419;
});
var state_machine__6445__auto____1 = (function (state_12378){
while(true){
var ret_value__6446__auto__ = (function (){try{while(true){
var result__6447__auto__ = switch__6444__auto__.call(null,state_12378);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6447__auto__;
}
break;
}
}catch (e13420){if((e13420 instanceof Object)){
var ex__6448__auto__ = e13420;
var statearr_13421_13822 = state_12378;
(statearr_13421_13822[(5)] = ex__6448__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12378);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13420;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13823 = state_12378;
state_12378 = G__13823;
continue;
} else {
return ret_value__6446__auto__;
}
break;
}
});
state_machine__6445__auto__ = function(state_12378){
switch(arguments.length){
case 0:
return state_machine__6445__auto____0.call(this);
case 1:
return state_machine__6445__auto____1.call(this,state_12378);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6445__auto____0;
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6445__auto____1;
return state_machine__6445__auto__;
})()
;})(switch__6444__auto__,c__6459__auto____$1,inst_12383,inst_12380,state_val_13386,c__6459__auto___13801))
})();
var state__6461__auto__ = (function (){var statearr_13422 = f__6460__auto__.call(null);
(statearr_13422[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6459__auto____$1);

return statearr_13422;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6461__auto__);
});
;})(c__6459__auto____$1,inst_12383,inst_12380,state_val_13386,c__6459__auto___13801))
})();
var inst_12382 = cljs.core.async.impl.dispatch.run.call(null,inst_12381);
var inst_12383__$1 = farn.core.load.call(null,farn.core.ui_stage,farn.assets._EQ_assets_EQ_,new cljs.core.Keyword(null,"full-colour","full-colour",50761434),(3170336),new cljs.core.Keyword(null,"highlight","highlight",-800930873),(8454016),new cljs.core.Keyword(null,"lowlight","lowlight",2143243768),(1060880),new cljs.core.Keyword(null,"empty-colour","empty-colour",-1488420524),(0),new cljs.core.Keyword(null,"fade-in","fade-in",999370239),0.2,new cljs.core.Keyword(null,"fade-out","fade-out",-1200160760),(2));
var inst_12384 = farn.map.perlin_map_generator.call(null);
var state_13385__$1 = (function (){var statearr_13423 = state_13385;
(statearr_13423[(45)] = inst_12383__$1);

(statearr_13423[(46)] = inst_12382);

(statearr_13423[(47)] = inst_12384);

return statearr_13423;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13385__$1,(2),inst_12383__$1);
} else {
if((state_val_13386 === (69))){
var inst_13133 = (state_13385[(34)]);
var inst_13132 = (state_13385[(36)]);
var inst_13135 = (inst_13133 < inst_13132);
var inst_13136 = inst_13135;
var state_13385__$1 = state_13385;
if(cljs.core.truth_(inst_13136)){
var statearr_13424_13824 = state_13385__$1;
(statearr_13424_13824[(1)] = (71));

} else {
var statearr_13425_13825 = state_13385__$1;
(statearr_13425_13825[(1)] = (72));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13386 === (101))){
var inst_13254 = (state_13385[(48)]);
var inst_13256 = cljs.core.chunked_seq_QMARK_.call(null,inst_13254);
var state_13385__$1 = state_13385;
if(inst_13256){
var statearr_13426_13826 = state_13385__$1;
(statearr_13426_13826[(1)] = (104));

} else {
var statearr_13427_13827 = state_13385__$1;
(statearr_13427_13827[(1)] = (105));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13386 === (24))){
var inst_12947 = (state_13385[(2)]);
var state_13385__$1 = state_13385;
var statearr_13428_13828 = state_13385__$1;
(statearr_13428_13828[(2)] = inst_12947);

(statearr_13428_13828[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13386 === (102))){
var state_13385__$1 = state_13385;
var statearr_13429_13829 = state_13385__$1;
(statearr_13429_13829[(2)] = null);

(statearr_13429_13829[(1)] = (103));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13386 === (55))){
var inst_13086 = (state_13385[(49)]);
var state_13385__$1 = state_13385;
var statearr_13430_13830 = state_13385__$1;
(statearr_13430_13830[(2)] = inst_13086);

(statearr_13430_13830[(1)] = (57));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13386 === (85))){
var inst_13170 = (state_13385[(18)]);
var inst_13174 = cljs.core.chunk_first.call(null,inst_13170);
var inst_13175 = cljs.core.chunk_rest.call(null,inst_13170);
var inst_13176 = cljs.core.count.call(null,inst_13174);
var inst_13130 = inst_13175;
var inst_13131 = inst_13174;
var inst_13132 = inst_13176;
var inst_13133 = (0);
var state_13385__$1 = (function (){var statearr_13431 = state_13385;
(statearr_13431[(33)] = inst_13131);

(statearr_13431[(34)] = inst_13133);

(statearr_13431[(23)] = inst_13130);

(statearr_13431[(36)] = inst_13132);

return statearr_13431;
})();
var statearr_13432_13831 = state_13385__$1;
(statearr_13432_13831[(2)] = null);

(statearr_13432_13831[(1)] = (69));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13386 === (39))){
var inst_12995 = (state_13385[(50)]);
var inst_12474 = (state_13385[(51)]);
var inst_13014 = cljs.core.rand_nth.call(null,inst_12474);
var inst_13015 = farn.sound.play_sound.call(null,inst_13014,0.4);
var inst_13016 = new cljs.core.Keyword(null,"sprite","sprite",172516848).cljs$core$IFn$_invoke$arity$1(inst_12995);
var inst_13017 = farn.core.main_stage.removeChild(inst_13016);
var inst_13018 = new cljs.core.Keyword(null,"shadow","shadow",873231803).cljs$core$IFn$_invoke$arity$1(inst_12995);
var inst_13019 = farn.core.main_stage.removeChild(inst_13018);
var inst_13020 = cljs.core.swap_BANG_.call(null,farn.core.player_stars,cljs.core.inc);
var inst_13021 = cljs.core.swap_BANG_.call(null,farn.core.pickup_store,cljs.core.disj,inst_12995);
var state_13385__$1 = (function (){var statearr_13433 = state_13385;
(statearr_13433[(52)] = inst_13019);

(statearr_13433[(53)] = inst_13015);

(statearr_13433[(54)] = inst_13020);

(statearr_13433[(55)] = inst_13017);

(statearr_13433[(56)] = inst_13021);

return statearr_13433;
})();
var statearr_13434_13832 = state_13385__$1;
(statearr_13434_13832[(2)] = null);

(statearr_13434_13832[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13386 === (88))){
var inst_13184 = (0);
var state_13385__$1 = (function (){var statearr_13435 = state_13385;
(statearr_13435[(57)] = inst_13184);

return statearr_13435;
})();
var statearr_13436_13833 = state_13385__$1;
(statearr_13436_13833[(2)] = null);

(statearr_13436_13833[(1)] = (91));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13386 === (46))){
var inst_12396 = (state_13385[(30)]);
var inst_13030 = (state_13385[(58)]);
var inst_13039 = (state_13385[(59)]);
var inst_13039__$1 = cljs.core.first.call(null,inst_13030);
var inst_13040 = new cljs.core.Keyword(null,"sprite","sprite",172516848).cljs$core$IFn$_invoke$arity$1(inst_13039__$1);
var inst_13041 = farn.sprite.overlap_QMARK_.call(null,inst_12396,inst_13040);
var state_13385__$1 = (function (){var statearr_13437 = state_13385;
(statearr_13437[(59)] = inst_13039__$1);

return statearr_13437;
})();
if(inst_13041){
var statearr_13438_13834 = state_13385__$1;
(statearr_13438_13834[(1)] = (48));

} else {
var statearr_13439_13835 = state_13385__$1;
(statearr_13439_13835[(1)] = (49));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13386 === (4))){
var inst_12427 = (state_13385[(60)]);
var inst_12388 = (state_13385[(61)]);
var inst_12421 = (state_13385[(62)]);
var inst_12417 = (state_13385[(63)]);
var inst_12383 = (state_13385[(45)]);
var inst_12397 = (state_13385[(64)]);
var inst_12416 = (state_13385[(65)]);
var inst_12396 = (state_13385[(30)]);
var inst_12395 = (state_13385[(66)]);
var inst_12398 = (state_13385[(31)]);
var inst_12437 = (state_13385[(67)]);
var inst_12391 = (state_13385[(68)]);
var inst_12418 = (state_13385[(69)]);
var inst_12430 = (state_13385[(70)]);
var inst_12394 = (state_13385[(71)]);
var inst_12424 = (state_13385[(72)]);
var inst_12411 = (state_13385[(73)]);
var inst_12408 = (state_13385[(74)]);
var inst_12387 = (state_13385[(75)]);
var inst_12384 = (state_13385[(47)]);
var inst_12393 = (state_13385[(76)]);
var inst_12444 = (state_13385[(77)]);
var inst_12393__$1 = (state_13385[(2)]);
var inst_12394__$1 = farn.font.make_text.call(null,"400 48pt Lobster","Alien Forest Explorer",new cljs.core.Keyword(null,"weight","weight",-1262796205),(400),new cljs.core.Keyword(null,"fill","fill",883462889),"#7FCACD",new cljs.core.Keyword(null,"dropShadow","dropShadow",1001370187),true,new cljs.core.Keyword(null,"dropShadowColor","dropShadowColor",-318037852),"#333333");
var inst_12395__$1 = farn.gfx.get_texture.call(null,new cljs.core.Keyword(null,"pink-stand-4","pink-stand-4",695656413));
var inst_12396__$1 = farn.sprite.make_sprite.call(null,inst_12395__$1);
var inst_12397__$1 = farn.gfx.get_texture.call(null,new cljs.core.Keyword(null,"shadow-1","shadow-1",-1417857329));
var inst_12398__$1 = farn.sprite.make_sprite.call(null,inst_12397__$1,new cljs.core.Keyword(null,"anchor-x","anchor-x",-1597588837),0.5,new cljs.core.Keyword(null,"anchor-y","anchor-y",-1366716999),0.5);
var inst_12403 = (function (){var player_shadow = inst_12398__$1;
var loader = inst_12383;
var shadow_tex = inst_12397__$1;
var tex = inst_12395__$1;
var lobster_big = inst_12387;
var perlin_channel = inst_12384;
var title_text = inst_12394__$1;
var tilemap = inst_12393__$1;
var varela = inst_12388;
var wait = inst_12391;
var player = inst_12396__$1;
return ((function (player_shadow,loader,shadow_tex,tex,lobster_big,perlin_channel,title_text,tilemap,varela,wait,player,inst_12427,inst_12388,inst_12421,inst_12417,inst_12383,inst_12397,inst_12416,inst_12396,inst_12395,inst_12398,inst_12437,inst_12391,inst_12418,inst_12430,inst_12394,inst_12424,inst_12411,inst_12408,inst_12387,inst_12384,inst_12393,inst_12444,inst_12393__$1,inst_12394__$1,inst_12395__$1,inst_12396__$1,inst_12397__$1,inst_12398__$1,state_val_13386,c__6459__auto___13801){
return (function iter__12399(s__12400){
return (new cljs.core.LazySeq(null,((function (player_shadow,loader,shadow_tex,tex,lobster_big,perlin_channel,title_text,tilemap,varela,wait,player,inst_12427,inst_12388,inst_12421,inst_12417,inst_12383,inst_12397,inst_12416,inst_12396,inst_12395,inst_12398,inst_12437,inst_12391,inst_12418,inst_12430,inst_12394,inst_12424,inst_12411,inst_12408,inst_12387,inst_12384,inst_12393,inst_12444,inst_12393__$1,inst_12394__$1,inst_12395__$1,inst_12396__$1,inst_12397__$1,inst_12398__$1,state_val_13386,c__6459__auto___13801){
return (function (){
var s__12400__$1 = s__12400;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__12400__$1);
if(temp__4126__auto__){
var s__12400__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12400__$2)){
var c__4384__auto__ = cljs.core.chunk_first.call(null,s__12400__$2);
var size__4385__auto__ = cljs.core.count.call(null,c__4384__auto__);
var b__12402 = cljs.core.chunk_buffer.call(null,size__4385__auto__);
if((function (){var i__12401 = (0);
while(true){
if((i__12401 < size__4385__auto__)){
var type = cljs.core._nth.call(null,c__4384__auto__,i__12401);
cljs.core.chunk_append.call(null,b__12402,farn.gfx.get_texture.call(null,type));

var G__13836 = (i__12401 + (1));
i__12401 = G__13836;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12402),iter__12399.call(null,cljs.core.chunk_rest.call(null,s__12400__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12402),null);
}
} else {
var type = cljs.core.first.call(null,s__12400__$2);
return cljs.core.cons.call(null,farn.gfx.get_texture.call(null,type),iter__12399.call(null,cljs.core.rest.call(null,s__12400__$2)));
}
} else {
return null;
}
break;
}
});})(player_shadow,loader,shadow_tex,tex,lobster_big,perlin_channel,title_text,tilemap,varela,wait,player,inst_12427,inst_12388,inst_12421,inst_12417,inst_12383,inst_12397,inst_12416,inst_12396,inst_12395,inst_12398,inst_12437,inst_12391,inst_12418,inst_12430,inst_12394,inst_12424,inst_12411,inst_12408,inst_12387,inst_12384,inst_12393,inst_12444,inst_12393__$1,inst_12394__$1,inst_12395__$1,inst_12396__$1,inst_12397__$1,inst_12398__$1,state_val_13386,c__6459__auto___13801))
,null,null));
});
;})(player_shadow,loader,shadow_tex,tex,lobster_big,perlin_channel,title_text,tilemap,varela,wait,player,inst_12427,inst_12388,inst_12421,inst_12417,inst_12383,inst_12397,inst_12416,inst_12396,inst_12395,inst_12398,inst_12437,inst_12391,inst_12418,inst_12430,inst_12394,inst_12424,inst_12411,inst_12408,inst_12387,inst_12384,inst_12393,inst_12444,inst_12393__$1,inst_12394__$1,inst_12395__$1,inst_12396__$1,inst_12397__$1,inst_12398__$1,state_val_13386,c__6459__auto___13801))
})();
var inst_12404 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_12405 = [new cljs.core.Keyword(null,"pink-stand-1","pink-stand-1",1440110735),new cljs.core.Keyword(null,"pink-stand-2","pink-stand-2",376064840),new cljs.core.Keyword(null,"pink-stand-3","pink-stand-3",676644618),new cljs.core.Keyword(null,"pink-stand-4","pink-stand-4",695656413)];
var inst_12406 = (new cljs.core.PersistentVector(null,4,(5),inst_12404,inst_12405,null));
var inst_12407 = inst_12403.call(null,inst_12406);
var inst_12408__$1 = cljs.core.doall.call(null,inst_12407);
var inst_12409 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_12410 = [(0),(-4),(0),(4)];
var inst_12411__$1 = (new cljs.core.PersistentVector(null,4,(5),inst_12409,inst_12410,null));
var inst_12412 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_12413 = farn.gfx.get_texture.call(null,new cljs.core.Keyword(null,"pink-walk-1","pink-walk-1",-1200475595));
var inst_12414 = farn.gfx.get_texture.call(null,new cljs.core.Keyword(null,"pink-walk-2","pink-walk-2",2040805893));
var inst_12415 = [inst_12413,inst_12414];
var inst_12416__$1 = (new cljs.core.PersistentVector(null,2,(5),inst_12412,inst_12415,null));
var inst_12417__$1 = farn.gfx.get_texture.call(null,new cljs.core.Keyword(null,"pickup-star-1","pickup-star-1",-1674863964));
var inst_12418__$1 = farn.sprite.make_sprite.call(null,inst_12417__$1);
var inst_12419 = cljs.core.deref.call(null,farn.core.player_stars);
var inst_12420 = [cljs.core.str(inst_12419)].join('');
var inst_12421__$1 = farn.font.make_text.call(null,"400 20pt Varela Round",inst_12420,new cljs.core.Keyword(null,"weight","weight",-1262796205),(400),new cljs.core.Keyword(null,"fill","fill",883462889),"#ffffff",new cljs.core.Keyword(null,"dropShadow","dropShadow",1001370187),true,new cljs.core.Keyword(null,"dropShadowColor","dropShadowColor",-318037852),"#000000");
var inst_12422 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_12423 = [new cljs.core.Keyword(null,"pickup-star-1","pickup-star-1",-1674863964),new cljs.core.Keyword(null,"pickup-mushroom-1","pickup-mushroom-1",-338548111)];
var inst_12424__$1 = (new cljs.core.PersistentVector(null,2,(5),inst_12422,inst_12423,null));
var inst_12425 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_12426 = [new cljs.core.Keyword(null,"static-floor-path-big","static-floor-path-big",-1637038697),new cljs.core.Keyword(null,"static-floor-path-medium","static-floor-path-medium",-46847685),new cljs.core.Keyword(null,"static-floor-path-small","static-floor-path-small",477685180),new cljs.core.Keyword(null,"static-floor-sand-big","static-floor-sand-big",953875278),new cljs.core.Keyword(null,"static-floor-sand-medium","static-floor-sand-medium",104159128),new cljs.core.Keyword(null,"static-floor-sand-small","static-floor-sand-small",-214159250),new cljs.core.Keyword(null,"static-floor-water-big","static-floor-water-big",1588138738),new cljs.core.Keyword(null,"static-floor-water-medium","static-floor-water-medium",1136261079),new cljs.core.Keyword(null,"static-floor-water-small","static-floor-water-small",1080050532)];
var inst_12427__$1 = (new cljs.core.PersistentVector(null,9,(5),inst_12425,inst_12426,null));
var inst_12428 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_12429 = [new cljs.core.Keyword(null,"static-tree-1","static-tree-1",-1951953537),new cljs.core.Keyword(null,"static-tree-2","static-tree-2",-27985141),new cljs.core.Keyword(null,"static-tree-3","static-tree-3",378870117),new cljs.core.Keyword(null,"static-tree-4","static-tree-4",-1003799420),new cljs.core.Keyword(null,"static-tree-5","static-tree-5",154248249),new cljs.core.Keyword(null,"static-tree-6","static-tree-6",-500626901),new cljs.core.Keyword(null,"static-tree-7","static-tree-7",1865082789),new cljs.core.Keyword(null,"static-tree-8","static-tree-8",-708259882),new cljs.core.Keyword(null,"static-tree-9","static-tree-9",729041102),new cljs.core.Keyword(null,"static-tree-10","static-tree-10",225886540),new cljs.core.Keyword(null,"static-tree-11","static-tree-11",-461585621),new cljs.core.Keyword(null,"static-tree-12","static-tree-12",-1331568669),new cljs.core.Keyword(null,"static-tree-13","static-tree-13",1696371732),new cljs.core.Keyword(null,"static-tree-14","static-tree-14",-890945489),new cljs.core.Keyword(null,"static-tree-15","static-tree-15",-25295839),new cljs.core.Keyword(null,"static-tree-16","static-tree-16",847489456),new cljs.core.Keyword(null,"static-tree-17","static-tree-17",-1292342697),new cljs.core.Keyword(null,"static-tree-18","static-tree-18",-378591927),new cljs.core.Keyword(null,"static-tree-19","static-tree-19",425360659),new cljs.core.Keyword(null,"static-tree-20","static-tree-20",155885611),new cljs.core.Keyword(null,"static-castle-1","static-castle-1",1559541979),new cljs.core.Keyword(null,"static-giant-schroom-1","static-giant-schroom-1",371680418),new cljs.core.Keyword(null,"static-giant-schroom-2","static-giant-schroom-2",1230929171),new cljs.core.Keyword(null,"static-cactus-1","static-cactus-1",368350727),new cljs.core.Keyword(null,"static-cactus-2","static-cactus-2",2022050580),new cljs.core.Keyword(null,"static-cactus-3","static-cactus-3",1331250244)];
var inst_12430__$1 = (new cljs.core.PersistentVector(null,26,(5),inst_12428,inst_12429,null));
var inst_12435 = (function (){var player_stars_text = inst_12421__$1;
var player_standing_texs = inst_12408__$1;
var player_shadow = inst_12398__$1;
var obstacle_types = inst_12430__$1;
var player_standing_sway = inst_12411__$1;
var loader = inst_12383;
var player_walking_texs = inst_12416__$1;
var shadow_tex = inst_12397__$1;
var tex = inst_12395__$1;
var lobster_big = inst_12387;
var star_tex = inst_12417__$1;
var pickup_textures = inst_12424__$1;
var perlin_channel = inst_12384;
var title_text = inst_12394__$1;
var floor_objects = inst_12427__$1;
var tilemap = inst_12393__$1;
var varela = inst_12388;
var wait = inst_12391;
var player = inst_12396__$1;
var player_stars_icon = inst_12418__$1;
return ((function (player_stars_text,player_standing_texs,player_shadow,obstacle_types,player_standing_sway,loader,player_walking_texs,shadow_tex,tex,lobster_big,star_tex,pickup_textures,perlin_channel,title_text,floor_objects,tilemap,varela,wait,player,player_stars_icon,inst_12427,inst_12388,inst_12421,inst_12417,inst_12383,inst_12397,inst_12416,inst_12396,inst_12395,inst_12398,inst_12437,inst_12391,inst_12418,inst_12430,inst_12394,inst_12424,inst_12411,inst_12408,inst_12387,inst_12384,inst_12393,inst_12444,inst_12393__$1,inst_12394__$1,inst_12395__$1,inst_12396__$1,inst_12397__$1,inst_12398__$1,inst_12403,inst_12404,inst_12405,inst_12406,inst_12407,inst_12408__$1,inst_12409,inst_12410,inst_12411__$1,inst_12412,inst_12413,inst_12414,inst_12415,inst_12416__$1,inst_12417__$1,inst_12418__$1,inst_12419,inst_12420,inst_12421__$1,inst_12422,inst_12423,inst_12424__$1,inst_12425,inst_12426,inst_12427__$1,inst_12428,inst_12429,inst_12430__$1,state_val_13386,c__6459__auto___13801){
return (function iter__12431(s__12432){
return (new cljs.core.LazySeq(null,((function (player_stars_text,player_standing_texs,player_shadow,obstacle_types,player_standing_sway,loader,player_walking_texs,shadow_tex,tex,lobster_big,star_tex,pickup_textures,perlin_channel,title_text,floor_objects,tilemap,varela,wait,player,player_stars_icon,inst_12427,inst_12388,inst_12421,inst_12417,inst_12383,inst_12397,inst_12416,inst_12396,inst_12395,inst_12398,inst_12437,inst_12391,inst_12418,inst_12430,inst_12394,inst_12424,inst_12411,inst_12408,inst_12387,inst_12384,inst_12393,inst_12444,inst_12393__$1,inst_12394__$1,inst_12395__$1,inst_12396__$1,inst_12397__$1,inst_12398__$1,inst_12403,inst_12404,inst_12405,inst_12406,inst_12407,inst_12408__$1,inst_12409,inst_12410,inst_12411__$1,inst_12412,inst_12413,inst_12414,inst_12415,inst_12416__$1,inst_12417__$1,inst_12418__$1,inst_12419,inst_12420,inst_12421__$1,inst_12422,inst_12423,inst_12424__$1,inst_12425,inst_12426,inst_12427__$1,inst_12428,inst_12429,inst_12430__$1,state_val_13386,c__6459__auto___13801){
return (function (){
var s__12432__$1 = s__12432;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__12432__$1);
if(temp__4126__auto__){
var s__12432__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12432__$2)){
var c__4384__auto__ = cljs.core.chunk_first.call(null,s__12432__$2);
var size__4385__auto__ = cljs.core.count.call(null,c__4384__auto__);
var b__12434 = cljs.core.chunk_buffer.call(null,size__4385__auto__);
if((function (){var i__12433 = (0);
while(true){
if((i__12433 < size__4385__auto__)){
var i = cljs.core._nth.call(null,c__4384__auto__,i__12433);
cljs.core.chunk_append.call(null,b__12434,farn.gfx.get_texture.call(null,cljs.core.keyword.call(null,[cljs.core.str("static-tree-"),cljs.core.str((i + (1)))].join(''))));

var G__13837 = (i__12433 + (1));
i__12433 = G__13837;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12434),iter__12431.call(null,cljs.core.chunk_rest.call(null,s__12432__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12434),null);
}
} else {
var i = cljs.core.first.call(null,s__12432__$2);
return cljs.core.cons.call(null,farn.gfx.get_texture.call(null,cljs.core.keyword.call(null,[cljs.core.str("static-tree-"),cljs.core.str((i + (1)))].join(''))),iter__12431.call(null,cljs.core.rest.call(null,s__12432__$2)));
}
} else {
return null;
}
break;
}
});})(player_stars_text,player_standing_texs,player_shadow,obstacle_types,player_standing_sway,loader,player_walking_texs,shadow_tex,tex,lobster_big,star_tex,pickup_textures,perlin_channel,title_text,floor_objects,tilemap,varela,wait,player,player_stars_icon,inst_12427,inst_12388,inst_12421,inst_12417,inst_12383,inst_12397,inst_12416,inst_12396,inst_12395,inst_12398,inst_12437,inst_12391,inst_12418,inst_12430,inst_12394,inst_12424,inst_12411,inst_12408,inst_12387,inst_12384,inst_12393,inst_12444,inst_12393__$1,inst_12394__$1,inst_12395__$1,inst_12396__$1,inst_12397__$1,inst_12398__$1,inst_12403,inst_12404,inst_12405,inst_12406,inst_12407,inst_12408__$1,inst_12409,inst_12410,inst_12411__$1,inst_12412,inst_12413,inst_12414,inst_12415,inst_12416__$1,inst_12417__$1,inst_12418__$1,inst_12419,inst_12420,inst_12421__$1,inst_12422,inst_12423,inst_12424__$1,inst_12425,inst_12426,inst_12427__$1,inst_12428,inst_12429,inst_12430__$1,state_val_13386,c__6459__auto___13801))
,null,null));
});
;})(player_stars_text,player_standing_texs,player_shadow,obstacle_types,player_standing_sway,loader,player_walking_texs,shadow_tex,tex,lobster_big,star_tex,pickup_textures,perlin_channel,title_text,floor_objects,tilemap,varela,wait,player,player_stars_icon,inst_12427,inst_12388,inst_12421,inst_12417,inst_12383,inst_12397,inst_12416,inst_12396,inst_12395,inst_12398,inst_12437,inst_12391,inst_12418,inst_12430,inst_12394,inst_12424,inst_12411,inst_12408,inst_12387,inst_12384,inst_12393,inst_12444,inst_12393__$1,inst_12394__$1,inst_12395__$1,inst_12396__$1,inst_12397__$1,inst_12398__$1,inst_12403,inst_12404,inst_12405,inst_12406,inst_12407,inst_12408__$1,inst_12409,inst_12410,inst_12411__$1,inst_12412,inst_12413,inst_12414,inst_12415,inst_12416__$1,inst_12417__$1,inst_12418__$1,inst_12419,inst_12420,inst_12421__$1,inst_12422,inst_12423,inst_12424__$1,inst_12425,inst_12426,inst_12427__$1,inst_12428,inst_12429,inst_12430__$1,state_val_13386,c__6459__auto___13801))
})();
var inst_12436 = cljs.core.range.call(null,(10));
var inst_12437__$1 = inst_12435.call(null,inst_12436);
var inst_12442 = (function (){var player_stars_text = inst_12421__$1;
var player_standing_texs = inst_12408__$1;
var player_shadow = inst_12398__$1;
var obstacle_types = inst_12430__$1;
var trees = inst_12437__$1;
var player_standing_sway = inst_12411__$1;
var loader = inst_12383;
var player_walking_texs = inst_12416__$1;
var shadow_tex = inst_12397__$1;
var tex = inst_12395__$1;
var lobster_big = inst_12387;
var star_tex = inst_12417__$1;
var pickup_textures = inst_12424__$1;
var perlin_channel = inst_12384;
var title_text = inst_12394__$1;
var floor_objects = inst_12427__$1;
var tilemap = inst_12393__$1;
var varela = inst_12388;
var wait = inst_12391;
var player = inst_12396__$1;
var player_stars_icon = inst_12418__$1;
return ((function (player_stars_text,player_standing_texs,player_shadow,obstacle_types,trees,player_standing_sway,loader,player_walking_texs,shadow_tex,tex,lobster_big,star_tex,pickup_textures,perlin_channel,title_text,floor_objects,tilemap,varela,wait,player,player_stars_icon,inst_12427,inst_12388,inst_12421,inst_12417,inst_12383,inst_12397,inst_12416,inst_12396,inst_12395,inst_12398,inst_12437,inst_12391,inst_12418,inst_12430,inst_12394,inst_12424,inst_12411,inst_12408,inst_12387,inst_12384,inst_12393,inst_12444,inst_12393__$1,inst_12394__$1,inst_12395__$1,inst_12396__$1,inst_12397__$1,inst_12398__$1,inst_12403,inst_12404,inst_12405,inst_12406,inst_12407,inst_12408__$1,inst_12409,inst_12410,inst_12411__$1,inst_12412,inst_12413,inst_12414,inst_12415,inst_12416__$1,inst_12417__$1,inst_12418__$1,inst_12419,inst_12420,inst_12421__$1,inst_12422,inst_12423,inst_12424__$1,inst_12425,inst_12426,inst_12427__$1,inst_12428,inst_12429,inst_12430__$1,inst_12435,inst_12436,inst_12437__$1,state_val_13386,c__6459__auto___13801){
return (function iter__12438(s__12439){
return (new cljs.core.LazySeq(null,((function (player_stars_text,player_standing_texs,player_shadow,obstacle_types,trees,player_standing_sway,loader,player_walking_texs,shadow_tex,tex,lobster_big,star_tex,pickup_textures,perlin_channel,title_text,floor_objects,tilemap,varela,wait,player,player_stars_icon,inst_12427,inst_12388,inst_12421,inst_12417,inst_12383,inst_12397,inst_12416,inst_12396,inst_12395,inst_12398,inst_12437,inst_12391,inst_12418,inst_12430,inst_12394,inst_12424,inst_12411,inst_12408,inst_12387,inst_12384,inst_12393,inst_12444,inst_12393__$1,inst_12394__$1,inst_12395__$1,inst_12396__$1,inst_12397__$1,inst_12398__$1,inst_12403,inst_12404,inst_12405,inst_12406,inst_12407,inst_12408__$1,inst_12409,inst_12410,inst_12411__$1,inst_12412,inst_12413,inst_12414,inst_12415,inst_12416__$1,inst_12417__$1,inst_12418__$1,inst_12419,inst_12420,inst_12421__$1,inst_12422,inst_12423,inst_12424__$1,inst_12425,inst_12426,inst_12427__$1,inst_12428,inst_12429,inst_12430__$1,inst_12435,inst_12436,inst_12437__$1,state_val_13386,c__6459__auto___13801){
return (function (){
var s__12439__$1 = s__12439;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__12439__$1);
if(temp__4126__auto__){
var s__12439__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12439__$2)){
var c__4384__auto__ = cljs.core.chunk_first.call(null,s__12439__$2);
var size__4385__auto__ = cljs.core.count.call(null,c__4384__auto__);
var b__12441 = cljs.core.chunk_buffer.call(null,size__4385__auto__);
if((function (){var i__12440 = (0);
while(true){
if((i__12440 < size__4385__auto__)){
var i = cljs.core._nth.call(null,c__4384__auto__,i__12440);
cljs.core.chunk_append.call(null,b__12441,farn.gfx.get_texture.call(null,cljs.core.keyword.call(null,[cljs.core.str("static-tuft-"),cljs.core.str((i + (1)))].join(''))));

var G__13838 = (i__12440 + (1));
i__12440 = G__13838;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12441),iter__12438.call(null,cljs.core.chunk_rest.call(null,s__12439__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12441),null);
}
} else {
var i = cljs.core.first.call(null,s__12439__$2);
return cljs.core.cons.call(null,farn.gfx.get_texture.call(null,cljs.core.keyword.call(null,[cljs.core.str("static-tuft-"),cljs.core.str((i + (1)))].join(''))),iter__12438.call(null,cljs.core.rest.call(null,s__12439__$2)));
}
} else {
return null;
}
break;
}
});})(player_stars_text,player_standing_texs,player_shadow,obstacle_types,trees,player_standing_sway,loader,player_walking_texs,shadow_tex,tex,lobster_big,star_tex,pickup_textures,perlin_channel,title_text,floor_objects,tilemap,varela,wait,player,player_stars_icon,inst_12427,inst_12388,inst_12421,inst_12417,inst_12383,inst_12397,inst_12416,inst_12396,inst_12395,inst_12398,inst_12437,inst_12391,inst_12418,inst_12430,inst_12394,inst_12424,inst_12411,inst_12408,inst_12387,inst_12384,inst_12393,inst_12444,inst_12393__$1,inst_12394__$1,inst_12395__$1,inst_12396__$1,inst_12397__$1,inst_12398__$1,inst_12403,inst_12404,inst_12405,inst_12406,inst_12407,inst_12408__$1,inst_12409,inst_12410,inst_12411__$1,inst_12412,inst_12413,inst_12414,inst_12415,inst_12416__$1,inst_12417__$1,inst_12418__$1,inst_12419,inst_12420,inst_12421__$1,inst_12422,inst_12423,inst_12424__$1,inst_12425,inst_12426,inst_12427__$1,inst_12428,inst_12429,inst_12430__$1,inst_12435,inst_12436,inst_12437__$1,state_val_13386,c__6459__auto___13801))
,null,null));
});
;})(player_stars_text,player_standing_texs,player_shadow,obstacle_types,trees,player_standing_sway,loader,player_walking_texs,shadow_tex,tex,lobster_big,star_tex,pickup_textures,perlin_channel,title_text,floor_objects,tilemap,varela,wait,player,player_stars_icon,inst_12427,inst_12388,inst_12421,inst_12417,inst_12383,inst_12397,inst_12416,inst_12396,inst_12395,inst_12398,inst_12437,inst_12391,inst_12418,inst_12430,inst_12394,inst_12424,inst_12411,inst_12408,inst_12387,inst_12384,inst_12393,inst_12444,inst_12393__$1,inst_12394__$1,inst_12395__$1,inst_12396__$1,inst_12397__$1,inst_12398__$1,inst_12403,inst_12404,inst_12405,inst_12406,inst_12407,inst_12408__$1,inst_12409,inst_12410,inst_12411__$1,inst_12412,inst_12413,inst_12414,inst_12415,inst_12416__$1,inst_12417__$1,inst_12418__$1,inst_12419,inst_12420,inst_12421__$1,inst_12422,inst_12423,inst_12424__$1,inst_12425,inst_12426,inst_12427__$1,inst_12428,inst_12429,inst_12430__$1,inst_12435,inst_12436,inst_12437__$1,state_val_13386,c__6459__auto___13801))
})();
var inst_12443 = cljs.core.range.call(null,(3));
var inst_12444__$1 = inst_12442.call(null,inst_12443);
var inst_12447 = (function (){var player_stars_text = inst_12421__$1;
var player_standing_texs = inst_12408__$1;
var player_shadow = inst_12398__$1;
var obstacle_types = inst_12430__$1;
var trees = inst_12437__$1;
var player_standing_sway = inst_12411__$1;
var loader = inst_12383;
var player_walking_texs = inst_12416__$1;
var shadow_tex = inst_12397__$1;
var tex = inst_12395__$1;
var lobster_big = inst_12387;
var star_tex = inst_12417__$1;
var tufts = inst_12444__$1;
var pickup_textures = inst_12424__$1;
var perlin_channel = inst_12384;
var title_text = inst_12394__$1;
var floor_objects = inst_12427__$1;
var tilemap = inst_12393__$1;
var varela = inst_12388;
var wait = inst_12391;
var player = inst_12396__$1;
var player_stars_icon = inst_12418__$1;
return ((function (player_stars_text,player_standing_texs,player_shadow,obstacle_types,trees,player_standing_sway,loader,player_walking_texs,shadow_tex,tex,lobster_big,star_tex,tufts,pickup_textures,perlin_channel,title_text,floor_objects,tilemap,varela,wait,player,player_stars_icon,inst_12427,inst_12388,inst_12421,inst_12417,inst_12383,inst_12397,inst_12416,inst_12396,inst_12395,inst_12398,inst_12437,inst_12391,inst_12418,inst_12430,inst_12394,inst_12424,inst_12411,inst_12408,inst_12387,inst_12384,inst_12393,inst_12444,inst_12393__$1,inst_12394__$1,inst_12395__$1,inst_12396__$1,inst_12397__$1,inst_12398__$1,inst_12403,inst_12404,inst_12405,inst_12406,inst_12407,inst_12408__$1,inst_12409,inst_12410,inst_12411__$1,inst_12412,inst_12413,inst_12414,inst_12415,inst_12416__$1,inst_12417__$1,inst_12418__$1,inst_12419,inst_12420,inst_12421__$1,inst_12422,inst_12423,inst_12424__$1,inst_12425,inst_12426,inst_12427__$1,inst_12428,inst_12429,inst_12430__$1,inst_12435,inst_12436,inst_12437__$1,inst_12442,inst_12443,inst_12444__$1,state_val_13386,c__6459__auto___13801){
return (function() { 
var G__13839__delegate = function (p__12445,spread,p__12446){
var vec__13440 = p__12445;
var x = cljs.core.nth.call(null,vec__13440,(0),null);
var y = cljs.core.nth.call(null,vec__13440,(1),null);
var vec__13441 = p__12446;
var force_type = cljs.core.nth.call(null,vec__13441,(0),null);
var force_exclusion_zone = cljs.core.nth.call(null,vec__13441,(1),null);
var exclusion_zone = (cljs.core.truth_(force_exclusion_zone)?force_exclusion_zone:farn.core.pickup_exclusion_zone);
var pickup_type = (cljs.core.truth_(force_type)?force_type:cljs.core.rand_nth.call(null,pickup_textures));
var s = farn.sprite.make_sprite.call(null,farn.gfx.get_texture.call(null,pickup_type));
var shadow = farn.sprite.make_sprite.call(null,shadow_tex,new cljs.core.Keyword(null,"anchor-x","anchor-x",-1597588837),0.5,new cljs.core.Keyword(null,"anchor-y","anchor-y",-1366716999),0.5);
var _ = farn.sprite.set_pos_BANG_.call(null,s,(50000),(10000));
var ___$1 = farn.sprite.set_pos_BANG_.call(null,shadow,(50000),(10000));
var xoff = (((cljs.core.rand.call(null) < 0.5))?farn.utils.rand_between.call(null,(- spread),(- exclusion_zone)):farn.utils.rand_between.call(null,exclusion_zone,spread));
var yoff = (((cljs.core.rand.call(null) < 0.5))?farn.utils.rand_between.call(null,(- spread),(- exclusion_zone)):farn.utils.rand_between.call(null,exclusion_zone,spread));
cljs.core.println.call(null,pickup_type,(x + xoff),(y + yoff));

return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"sprite","sprite",172516848),s,new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + xoff),(y + yoff)], null),new cljs.core.Keyword(null,"shadow","shadow",873231803),shadow,new cljs.core.Keyword(null,"scale","scale",-230427353),0.7,new cljs.core.Keyword(null,"type","type",1174270348),pickup_type], null);
};
var G__13839 = function (p__12445,spread,var_args){
var p__12446 = null;
if (arguments.length > 2) {
  p__12446 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__13839__delegate.call(this,p__12445,spread,p__12446);};
G__13839.cljs$lang$maxFixedArity = 2;
G__13839.cljs$lang$applyTo = (function (arglist__13840){
var p__12445 = cljs.core.first(arglist__13840);
arglist__13840 = cljs.core.next(arglist__13840);
var spread = cljs.core.first(arglist__13840);
var p__12446 = cljs.core.rest(arglist__13840);
return G__13839__delegate(p__12445,spread,p__12446);
});
G__13839.cljs$core$IFn$_invoke$arity$variadic = G__13839__delegate;
return G__13839;
})()
;
;})(player_stars_text,player_standing_texs,player_shadow,obstacle_types,trees,player_standing_sway,loader,player_walking_texs,shadow_tex,tex,lobster_big,star_tex,tufts,pickup_textures,perlin_channel,title_text,floor_objects,tilemap,varela,wait,player,player_stars_icon,inst_12427,inst_12388,inst_12421,inst_12417,inst_12383,inst_12397,inst_12416,inst_12396,inst_12395,inst_12398,inst_12437,inst_12391,inst_12418,inst_12430,inst_12394,inst_12424,inst_12411,inst_12408,inst_12387,inst_12384,inst_12393,inst_12444,inst_12393__$1,inst_12394__$1,inst_12395__$1,inst_12396__$1,inst_12397__$1,inst_12398__$1,inst_12403,inst_12404,inst_12405,inst_12406,inst_12407,inst_12408__$1,inst_12409,inst_12410,inst_12411__$1,inst_12412,inst_12413,inst_12414,inst_12415,inst_12416__$1,inst_12417__$1,inst_12418__$1,inst_12419,inst_12420,inst_12421__$1,inst_12422,inst_12423,inst_12424__$1,inst_12425,inst_12426,inst_12427__$1,inst_12428,inst_12429,inst_12430__$1,inst_12435,inst_12436,inst_12437__$1,inst_12442,inst_12443,inst_12444__$1,state_val_13386,c__6459__auto___13801))
})();
var inst_12451 = cljs.core.PersistentVector.EMPTY;
var inst_12452 = cljs.core.range.call(null,(1),(10));
var inst_12453 = cljs.core.nth.call(null,inst_12452,(0),null);
var inst_12454 = cljs.core.nthnext.call(null,inst_12452,(1));
var inst_12455 = inst_12451;
var inst_12456 = inst_12452;
var state_13385__$1 = (function (){var statearr_13442 = state_13385;
(statearr_13442[(60)] = inst_12427__$1);

(statearr_13442[(62)] = inst_12421__$1);

(statearr_13442[(63)] = inst_12417__$1);

(statearr_13442[(78)] = inst_12447);

(statearr_13442[(64)] = inst_12397__$1);

(statearr_13442[(79)] = inst_12455);

(statearr_13442[(80)] = inst_12454);

(statearr_13442[(81)] = inst_12456);

(statearr_13442[(65)] = inst_12416__$1);

(statearr_13442[(30)] = inst_12396__$1);

(statearr_13442[(66)] = inst_12395__$1);

(statearr_13442[(31)] = inst_12398__$1);

(statearr_13442[(67)] = inst_12437__$1);

(statearr_13442[(82)] = inst_12453);

(statearr_13442[(69)] = inst_12418__$1);

(statearr_13442[(70)] = inst_12430__$1);

(statearr_13442[(71)] = inst_12394__$1);

(statearr_13442[(72)] = inst_12424__$1);

(statearr_13442[(73)] = inst_12411__$1);

(statearr_13442[(74)] = inst_12408__$1);

(statearr_13442[(76)] = inst_12393__$1);

(statearr_13442[(77)] = inst_12444__$1);

return statearr_13442;
})();
var statearr_13443_13841 = state_13385__$1;
(statearr_13443_13841[(2)] = null);

(statearr_13443_13841[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13386 === (77))){
var inst_13139 = (state_13385[(83)]);
var inst_12892 = (state_13385[(84)]);
var inst_12893 = (state_13385[(85)]);
var inst_12899 = (state_13385[(86)]);
var inst_13140 = (state_13385[(87)]);
var inst_13143 = (state_13385[(12)]);
var inst_12503 = (state_13385[(88)]);
var inst_12902 = (state_13385[(89)]);
var inst_13145 = inst_13139.call(null,inst_13143);
var inst_13147 = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(inst_13145);
var inst_13148 = new cljs.core.Keyword(null,"sprite","sprite",172516848).cljs$core$IFn$_invoke$arity$1(inst_13145);
var inst_13149 = inst_12503.call(null,inst_13147,inst_13148,inst_12892,inst_12893,inst_12899,inst_12902);
var inst_13150 = cljs.core.nth.call(null,inst_13149,(0),null);
var inst_13151 = cljs.core.nth.call(null,inst_13149,(1),null);
var inst_13152 = new cljs.core.Keyword(null,"sprite","sprite",172516848).cljs$core$IFn$_invoke$arity$1(inst_13145);
var inst_13153 = farn.sprite.set_pos_BANG_.call(null,inst_13152,inst_13150,inst_13151);
var inst_13154 = (inst_13140 - (1));
var inst_13155 = (inst_13143 < inst_13154);
var state_13385__$1 = (function (){var statearr_13444 = state_13385;
(statearr_13444[(90)] = inst_13153);

return statearr_13444;
})();
if(cljs.core.truth_(inst_13155)){
var statearr_13445_13842 = state_13385__$1;
(statearr_13445_13842[(1)] = (79));

} else {
var statearr_13446_13843 = state_13385__$1;
(statearr_13446_13843[(1)] = (80));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13386 === (106))){
var inst_13284 = (state_13385[(2)]);
var state_13385__$1 = state_13385;
var statearr_13447_13844 = state_13385__$1;
(statearr_13447_13844[(2)] = inst_13284);

(statearr_13447_13844[(1)] = (103));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13386 === (119))){
var inst_13122 = (state_13385[(37)]);
var inst_13341 = (state_13385[(2)]);
var inst_13342 = ((0) < inst_13122);
var inst_13343 = (inst_13122 < (5));
var inst_13344 = (inst_13342) && (inst_13343);
var state_13385__$1 = (function (){var statearr_13448 = state_13385;
(statearr_13448[(91)] = inst_13341);

return statearr_13448;
})();
if(cljs.core.truth_(inst_13344)){
var statearr_13449_13845 = state_13385__$1;
(statearr_13449_13845[(1)] = (120));

} else {
var statearr_13450_13846 = state_13385__$1;
(statearr_13450_13846[(1)] = (121));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13386 === (95))){
var inst_13202 = (state_13385[(2)]);
var state_13385__$1 = state_13385;
var statearr_13451_13847 = state_13385__$1;
(statearr_13451_13847[(2)] = inst_13202);

(statearr_13451_13847[(1)] = (92));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13386 === (54))){
var inst_13056 = (state_13385[(2)]);
var state_13385__$1 = state_13385;
var statearr_13452_13848 = state_13385__$1;
(statearr_13452_13848[(2)] = inst_13056);

(statearr_13452_13848[(1)] = (53));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13386 === (92))){
var inst_13204 = (state_13385[(2)]);
var state_13385__$1 = state_13385;
var statearr_13453_13849 = state_13385__$1;
(statearr_13453_13849[(2)] = inst_13204);

(statearr_13453_13849[(1)] = (90));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13386 === (104))){
var inst_13254 = (state_13385[(48)]);
var inst_13258 = cljs.core.chunk_first.call(null,inst_13254);
var inst_13259 = cljs.core.chunk_rest.call(null,inst_13254);
var inst_13260 = cljs.core.count.call(null,inst_13258);
var inst_13225 = inst_13259;
var inst_13226 = inst_13258;
var inst_13227 = inst_13260;
var inst_13228 = (0);
var state_13385__$1 = (function (){var statearr_13454 = state_13385;
(statearr_13454[(7)] = inst_13225);

(statearr_13454[(9)] = inst_13227);

(statearr_13454[(10)] = inst_13226);

(statearr_13454[(11)] = inst_13228);

return statearr_13454;
})();
var statearr_13455_13850 = state_13385__$1;
(statearr_13455_13850[(2)] = null);

(statearr_13455_13850[(1)] = (96));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13386 === (15))){
var inst_12499 = (state_13385[(2)]);
var state_13385__$1 = state_13385;
var statearr_13456_13851 = state_13385__$1;
(statearr_13456_13851[(2)] = inst_12499);

(statearr_13456_13851[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13386 === (48))){
var inst_13039 = (state_13385[(59)]);
var inst_13043 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(inst_13039);
var inst_13044 = cljs.core._EQ_.call(null,inst_13043,new cljs.core.Keyword(null,"pickup-baby-1","pickup-baby-1",-1650486973));
var state_13385__$1 = state_13385;
if(inst_13044){
var statearr_13457_13852 = state_13385__$1;
(statearr_13457_13852[(1)] = (51));

} else {
var statearr_13458_13853 = state_13385__$1;
(statearr_13458_13853[(1)] = (52));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13386 === (50))){
var inst_13030 = (state_13385[(58)]);
var inst_13070 = (state_13385[(2)]);
var inst_13071 = cljs.core.next.call(null,inst_13030);
var inst_12987 = inst_13071;
var inst_12988 = null;
var inst_12989 = (0);
var inst_12990 = (0);
var state_13385__$1 = (function (){var statearr_13459 = state_13385;
(statearr_13459[(92)] = inst_12989);

(statearr_13459[(93)] = inst_12988);

(statearr_13459[(94)] = inst_12987);

(statearr_13459[(95)] = inst_12990);

(statearr_13459[(96)] = inst_13070);

return statearr_13459;
})();
var statearr_13460_13854 = state_13385__$1;
(statearr_13460_13854[(2)] = null);

(statearr_13460_13854[(1)] = (30));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13386 === (116))){
var inst_12881 = (state_13385[(97)]);
var inst_12888 = (state_13385[(15)]);
var inst_13325 = (state_13385[(2)]);
var inst_13326 = (inst_12881 + (1));
var inst_13327 = (inst_12888 > (0));
var state_13385__$1 = (function (){var statearr_13461 = state_13385;
(statearr_13461[(98)] = inst_13325);

(statearr_13461[(99)] = inst_13326);

return statearr_13461;
})();
if(cljs.core.truth_(inst_13327)){
var statearr_13462_13855 = state_13385__$1;
(statearr_13462_13855[(1)] = (117));

} else {
var statearr_13463_13856 = state_13385__$1;
(statearr_13463_13856[(1)] = (118));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13386 === (75))){
var state_13385__$1 = state_13385;
var statearr_13464_13857 = state_13385__$1;
(statearr_13464_13857[(2)] = null);

(statearr_13464_13857[(1)] = (76));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13386 === (99))){
var inst_13225 = (state_13385[(7)]);
var inst_13254 = (state_13385[(48)]);
var inst_13254__$1 = cljs.core.seq.call(null,inst_13225);
var state_13385__$1 = (function (){var statearr_13465 = state_13385;
(statearr_13465[(48)] = inst_13254__$1);

return statearr_13465;
})();
if(inst_13254__$1){
var statearr_13466_13858 = state_13385__$1;
(statearr_13466_13858[(1)] = (101));

} else {
var statearr_13467_13859 = state_13385__$1;
(statearr_13467_13859[(1)] = (102));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13386 === (21))){
var inst_12950 = (state_13385[(100)]);
var inst_12427 = (state_13385[(60)]);
var inst_12929 = (state_13385[(101)]);
var inst_12388 = (state_13385[(61)]);
var inst_12928 = (state_13385[(102)]);
var inst_12421 = (state_13385[(62)]);
var inst_12895 = (state_13385[(103)]);
var inst_12417 = (state_13385[(63)]);
var inst_12474 = (state_13385[(51)]);
var inst_12447 = (state_13385[(78)]);
var inst_12383 = (state_13385[(45)]);
var inst_12591 = (state_13385[(40)]);
var inst_12916 = (state_13385[(104)]);
var inst_12397 = (state_13385[(64)]);
var inst_12892 = (state_13385[(84)]);
var inst_12882 = (state_13385[(25)]);
var inst_12501 = (state_13385[(26)]);
var inst_12893 = (state_13385[(85)]);
var inst_12416 = (state_13385[(65)]);
var inst_12396 = (state_13385[(30)]);
var inst_12899 = (state_13385[(86)]);
var inst_12887 = (state_13385[(105)]);
var inst_12395 = (state_13385[(66)]);
var inst_12903 = (state_13385[(106)]);
var inst_12398 = (state_13385[(31)]);
var inst_12502 = (state_13385[(107)]);
var inst_12437 = (state_13385[(67)]);
var inst_12590 = (state_13385[(108)]);
var inst_12907 = (state_13385[(109)]);
var inst_12506 = (state_13385[(110)]);
var inst_12919 = (state_13385[(111)]);
var inst_12883 = (state_13385[(112)]);
var inst_12391 = (state_13385[(68)]);
var inst_12418 = (state_13385[(69)]);
var inst_12430 = (state_13385[(70)]);
var inst_12904 = (state_13385[(117)]);
var inst_12394 = (state_13385[(71)]);
var inst_12884 = (state_13385[(118)]);
var inst_12424 = (state_13385[(72)]);
var inst_12585 = (state_13385[(119)]);
var inst_12949 = (state_13385[(115)]);
var inst_12578 = (state_13385[(120)]);
var inst_12411 = (state_13385[(73)]);
var inst_12906 = (state_13385[(121)]);
var inst_12896 = (state_13385[(122)]);
var inst_12958 = (state_13385[(116)]);
var inst_12408 = (state_13385[(74)]);
var inst_12905 = (state_13385[(123)]);
var inst_12589 = (state_13385[(124)]);
var inst_12503 = (state_13385[(88)]);
var inst_12387 = (state_13385[(75)]);
var inst_12384 = (state_13385[(47)]);
var inst_12886 = (state_13385[(32)]);
var inst_12894 = (state_13385[(125)]);
var inst_12586 = (state_13385[(19)]);
var inst_12393 = (state_13385[(76)]);
var inst_12444 = (state_13385[(77)]);
var inst_12881 = (state_13385[(97)]);
var inst_12885 = (state_13385[(126)]);
var inst_12888 = (state_13385[(15)]);
var inst_12908 = (state_13385[(127)]);
var inst_12902 = (state_13385[(89)]);
var inst_12949__$1 = (state_13385[(2)]);
var inst_12950__$1 = ((2) + inst_12916);
var inst_12951 = (function (){var add_cell_BANG_ = inst_12590;
var depth_compare = inst_12502;
var d_theta = inst_12885;
var x = inst_12892;
var cull_dist = inst_12950__$1;
var player_stars_text = inst_12421;
var player_standing_texs = inst_12408;
var cells = inst_12886;
var vec__12890 = inst_12882;
var render_range = inst_12919;
var player_shadow = inst_12398;
var player_cell = inst_12906;
var close_QMARK_ = inst_12506;
var sprite_count = inst_12887;
var player_pos = inst_12589;
var calc_theta = inst_12894;
var obstacle_types = inst_12430;
var polar_object_coords = inst_12503;
var trees = inst_12437;
var player_hit = inst_12888;
var old_sprite_count = inst_12905;
var y = inst_12893;
var player_standing_sway = inst_12411;
var player_cell_y = inst_12908;
var player_cell_x = inst_12907;
var game_sprites = inst_12585;
var loader = inst_12383;
var player_walking_texs = inst_12416;
var player_and_surrounds = inst_12928;
var vec__12891 = inst_12906;
var rhx = inst_12899;
var rhy = inst_12902;
var frame_num = inst_12881;
var shadow_tex = inst_12397;
var process_add_cell = inst_12929;
var tex = inst_12395;
var speed = inst_12883;
var hit_sfx = inst_12501;
var lobster_big = inst_12387;
var game_map = inst_12578;
var star_tex = inst_12417;
var pos = inst_12882;
var remove_cell_BANG_ = inst_12591;
var theta = inst_12884;
var tufts = inst_12444;
var game_space = inst_12586;
var pickup_textures = inst_12424;
var perlin_channel = inst_12384;
var title_text = inst_12394;
var vx = inst_12903;
var floor_objects = inst_12427;
var pickup_sfx = inst_12474;
var tilemap = inst_12393;
var render_distance = inst_12916;
var vy = inst_12904;
var make_pickup = inst_12447;
var varela = inst_12388;
var new_cells = inst_12949__$1;
var hy = inst_12896;
var wait = inst_12391;
var hx = inst_12895;
var player = inst_12396;
var player_stars_icon = inst_12418;
return ((function (add_cell_BANG_,depth_compare,d_theta,x,cull_dist,player_stars_text,player_standing_texs,cells,vec__12890,render_range,player_shadow,player_cell,close_QMARK_,sprite_count,player_pos,calc_theta,obstacle_types,polar_object_coords,trees,player_hit,old_sprite_count,y,player_standing_sway,player_cell_y,player_cell_x,game_sprites,loader,player_walking_texs,player_and_surrounds,vec__12891,rhx,rhy,frame_num,shadow_tex,process_add_cell,tex,speed,hit_sfx,lobster_big,game_map,star_tex,pos,remove_cell_BANG_,theta,tufts,game_space,pickup_textures,perlin_channel,title_text,vx,floor_objects,pickup_sfx,tilemap,render_distance,vy,make_pickup,varela,new_cells,hy,wait,hx,player,player_stars_icon,inst_12950,inst_12427,inst_12929,inst_12388,inst_12928,inst_12421,inst_12895,inst_12417,inst_12474,inst_12447,inst_12383,inst_12591,inst_12916,inst_12397,inst_12892,inst_12882,inst_12501,inst_12893,inst_12416,inst_12396,inst_12899,inst_12887,inst_12395,inst_12903,inst_12398,inst_12502,inst_12437,inst_12590,inst_12907,inst_12506,inst_12919,inst_12883,inst_12391,inst_12418,inst_12430,inst_12904,inst_12394,inst_12884,inst_12424,inst_12585,inst_12949,inst_12578,inst_12411,inst_12906,inst_12896,inst_12958,inst_12408,inst_12905,inst_12589,inst_12503,inst_12387,inst_12384,inst_12886,inst_12894,inst_12586,inst_12393,inst_12444,inst_12881,inst_12885,inst_12888,inst_12908,inst_12902,inst_12949__$1,inst_12950__$1,state_val_13386,c__6459__auto___13801){
return (function (p1__12356_SHARP_){
return !((p1__12356_SHARP_ == null));
});
;})(add_cell_BANG_,depth_compare,d_theta,x,cull_dist,player_stars_text,player_standing_texs,cells,vec__12890,render_range,player_shadow,player_cell,close_QMARK_,sprite_count,player_pos,calc_theta,obstacle_types,polar_object_coords,trees,player_hit,old_sprite_count,y,player_standing_sway,player_cell_y,player_cell_x,game_sprites,loader,player_walking_texs,player_and_surrounds,vec__12891,rhx,rhy,frame_num,shadow_tex,process_add_cell,tex,speed,hit_sfx,lobster_big,game_map,star_tex,pos,remove_cell_BANG_,theta,tufts,game_space,pickup_textures,perlin_channel,title_text,vx,floor_objects,pickup_sfx,tilemap,render_distance,vy,make_pickup,varela,new_cells,hy,wait,hx,player,player_stars_icon,inst_12950,inst_12427,inst_12929,inst_12388,inst_12928,inst_12421,inst_12895,inst_12417,inst_12474,inst_12447,inst_12383,inst_12591,inst_12916,inst_12397,inst_12892,inst_12882,inst_12501,inst_12893,inst_12416,inst_12396,inst_12899,inst_12887,inst_12395,inst_12903,inst_12398,inst_12502,inst_12437,inst_12590,inst_12907,inst_12506,inst_12919,inst_12883,inst_12391,inst_12418,inst_12430,inst_12904,inst_12394,inst_12884,inst_12424,inst_12585,inst_12949,inst_12578,inst_12411,inst_12906,inst_12896,inst_12958,inst_12408,inst_12905,inst_12589,inst_12503,inst_12387,inst_12384,inst_12886,inst_12894,inst_12586,inst_12393,inst_12444,inst_12881,inst_12885,inst_12888,inst_12908,inst_12902,inst_12949__$1,inst_12950__$1,state_val_13386,c__6459__auto___13801))
})();
var inst_12956 = (function (){var add_cell_BANG_ = inst_12590;
var depth_compare = inst_12502;
var d_theta = inst_12885;
var x = inst_12892;
var cull_dist = inst_12950__$1;
var player_stars_text = inst_12421;
var player_standing_texs = inst_12408;
var cells = inst_12886;
var vec__12890 = inst_12882;
var render_range = inst_12919;
var player_shadow = inst_12398;
var player_cell = inst_12906;
var close_QMARK_ = inst_12506;
var sprite_count = inst_12887;
var player_pos = inst_12589;
var calc_theta = inst_12894;
var obstacle_types = inst_12430;
var polar_object_coords = inst_12503;
var trees = inst_12437;
var player_hit = inst_12888;
var old_sprite_count = inst_12905;
var y = inst_12893;
var player_standing_sway = inst_12411;
var player_cell_y = inst_12908;
var player_cell_x = inst_12907;
var game_sprites = inst_12585;
var loader = inst_12383;
var player_walking_texs = inst_12416;
var player_and_surrounds = inst_12928;
var vec__12891 = inst_12906;
var rhx = inst_12899;
var rhy = inst_12902;
var frame_num = inst_12881;
var shadow_tex = inst_12397;
var process_add_cell = inst_12929;
var tex = inst_12395;
var speed = inst_12883;
var hit_sfx = inst_12501;
var lobster_big = inst_12387;
var game_map = inst_12578;
var star_tex = inst_12417;
var pos = inst_12882;
var remove_cell_BANG_ = inst_12591;
var theta = inst_12884;
var tufts = inst_12444;
var game_space = inst_12586;
var pickup_textures = inst_12424;
var perlin_channel = inst_12384;
var title_text = inst_12394;
var vx = inst_12903;
var floor_objects = inst_12427;
var pickup_sfx = inst_12474;
var tilemap = inst_12393;
var render_distance = inst_12916;
var vy = inst_12904;
var make_pickup = inst_12447;
var varela = inst_12388;
var new_cells = inst_12949__$1;
var hy = inst_12896;
var wait = inst_12391;
var hx = inst_12895;
var player = inst_12396;
var player_stars_icon = inst_12418;
return ((function (add_cell_BANG_,depth_compare,d_theta,x,cull_dist,player_stars_text,player_standing_texs,cells,vec__12890,render_range,player_shadow,player_cell,close_QMARK_,sprite_count,player_pos,calc_theta,obstacle_types,polar_object_coords,trees,player_hit,old_sprite_count,y,player_standing_sway,player_cell_y,player_cell_x,game_sprites,loader,player_walking_texs,player_and_surrounds,vec__12891,rhx,rhy,frame_num,shadow_tex,process_add_cell,tex,speed,hit_sfx,lobster_big,game_map,star_tex,pos,remove_cell_BANG_,theta,tufts,game_space,pickup_textures,perlin_channel,title_text,vx,floor_objects,pickup_sfx,tilemap,render_distance,vy,make_pickup,varela,new_cells,hy,wait,hx,player,player_stars_icon,inst_12950,inst_12427,inst_12929,inst_12388,inst_12928,inst_12421,inst_12895,inst_12417,inst_12474,inst_12447,inst_12383,inst_12591,inst_12916,inst_12397,inst_12892,inst_12882,inst_12501,inst_12893,inst_12416,inst_12396,inst_12899,inst_12887,inst_12395,inst_12903,inst_12398,inst_12502,inst_12437,inst_12590,inst_12907,inst_12506,inst_12919,inst_12883,inst_12391,inst_12418,inst_12430,inst_12904,inst_12394,inst_12884,inst_12424,inst_12585,inst_12949,inst_12578,inst_12411,inst_12906,inst_12896,inst_12958,inst_12408,inst_12905,inst_12589,inst_12503,inst_12387,inst_12384,inst_12886,inst_12894,inst_12586,inst_12393,inst_12444,inst_12881,inst_12885,inst_12888,inst_12908,inst_12902,inst_12949__$1,inst_12950__$1,inst_12951,state_val_13386,c__6459__auto___13801){
return (function iter__12952(s__12953){
return (new cljs.core.LazySeq(null,((function (add_cell_BANG_,depth_compare,d_theta,x,cull_dist,player_stars_text,player_standing_texs,cells,vec__12890,render_range,player_shadow,player_cell,close_QMARK_,sprite_count,player_pos,calc_theta,obstacle_types,polar_object_coords,trees,player_hit,old_sprite_count,y,player_standing_sway,player_cell_y,player_cell_x,game_sprites,loader,player_walking_texs,player_and_surrounds,vec__12891,rhx,rhy,frame_num,shadow_tex,process_add_cell,tex,speed,hit_sfx,lobster_big,game_map,star_tex,pos,remove_cell_BANG_,theta,tufts,game_space,pickup_textures,perlin_channel,title_text,vx,floor_objects,pickup_sfx,tilemap,render_distance,vy,make_pickup,varela,new_cells,hy,wait,hx,player,player_stars_icon,inst_12950,inst_12427,inst_12929,inst_12388,inst_12928,inst_12421,inst_12895,inst_12417,inst_12474,inst_12447,inst_12383,inst_12591,inst_12916,inst_12397,inst_12892,inst_12882,inst_12501,inst_12893,inst_12416,inst_12396,inst_12899,inst_12887,inst_12395,inst_12903,inst_12398,inst_12502,inst_12437,inst_12590,inst_12907,inst_12506,inst_12919,inst_12883,inst_12391,inst_12418,inst_12430,inst_12904,inst_12394,inst_12884,inst_12424,inst_12585,inst_12949,inst_12578,inst_12411,inst_12906,inst_12896,inst_12958,inst_12408,inst_12905,inst_12589,inst_12503,inst_12387,inst_12384,inst_12886,inst_12894,inst_12586,inst_12393,inst_12444,inst_12881,inst_12885,inst_12888,inst_12908,inst_12902,inst_12949__$1,inst_12950__$1,inst_12951,state_val_13386,c__6459__auto___13801){
return (function (){
var s__12953__$1 = s__12953;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__12953__$1);
if(temp__4126__auto__){
var s__12953__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12953__$2)){
var c__4384__auto__ = cljs.core.chunk_first.call(null,s__12953__$2);
var size__4385__auto__ = cljs.core.count.call(null,c__4384__auto__);
var b__12955 = cljs.core.chunk_buffer.call(null,size__4385__auto__);
if((function (){var i__12954 = (0);
while(true){
if((i__12954 < size__4385__auto__)){
var c = cljs.core._nth.call(null,c__4384__auto__,i__12954);
cljs.core.chunk_append.call(null,b__12955,(function (){var vec__13470 = c;
var cx = cljs.core.nth.call(null,vec__13470,(0),null);
var cy = cljs.core.nth.call(null,vec__13470,(1),null);
var dx = Math.abs.call(null,(cx - player_cell_x));
var dy = Math.abs.call(null,(cy - player_cell_y));
if(((dx > cull_dist)) || ((dy > cull_dist))){
return c;
} else {
return null;
}
})());

var G__13860 = (i__12954 + (1));
i__12954 = G__13860;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12955),iter__12952.call(null,cljs.core.chunk_rest.call(null,s__12953__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12955),null);
}
} else {
var c = cljs.core.first.call(null,s__12953__$2);
return cljs.core.cons.call(null,(function (){var vec__13471 = c;
var cx = cljs.core.nth.call(null,vec__13471,(0),null);
var cy = cljs.core.nth.call(null,vec__13471,(1),null);
var dx = Math.abs.call(null,(cx - player_cell_x));
var dy = Math.abs.call(null,(cy - player_cell_y));
if(((dx > cull_dist)) || ((dy > cull_dist))){
return c;
} else {
return null;
}
})(),iter__12952.call(null,cljs.core.rest.call(null,s__12953__$2)));
}
} else {
return null;
}
break;
}
});})(add_cell_BANG_,depth_compare,d_theta,x,cull_dist,player_stars_text,player_standing_texs,cells,vec__12890,render_range,player_shadow,player_cell,close_QMARK_,sprite_count,player_pos,calc_theta,obstacle_types,polar_object_coords,trees,player_hit,old_sprite_count,y,player_standing_sway,player_cell_y,player_cell_x,game_sprites,loader,player_walking_texs,player_and_surrounds,vec__12891,rhx,rhy,frame_num,shadow_tex,process_add_cell,tex,speed,hit_sfx,lobster_big,game_map,star_tex,pos,remove_cell_BANG_,theta,tufts,game_space,pickup_textures,perlin_channel,title_text,vx,floor_objects,pickup_sfx,tilemap,render_distance,vy,make_pickup,varela,new_cells,hy,wait,hx,player,player_stars_icon,inst_12950,inst_12427,inst_12929,inst_12388,inst_12928,inst_12421,inst_12895,inst_12417,inst_12474,inst_12447,inst_12383,inst_12591,inst_12916,inst_12397,inst_12892,inst_12882,inst_12501,inst_12893,inst_12416,inst_12396,inst_12899,inst_12887,inst_12395,inst_12903,inst_12398,inst_12502,inst_12437,inst_12590,inst_12907,inst_12506,inst_12919,inst_12883,inst_12391,inst_12418,inst_12430,inst_12904,inst_12394,inst_12884,inst_12424,inst_12585,inst_12949,inst_12578,inst_12411,inst_12906,inst_12896,inst_12958,inst_12408,inst_12905,inst_12589,inst_12503,inst_12387,inst_12384,inst_12886,inst_12894,inst_12586,inst_12393,inst_12444,inst_12881,inst_12885,inst_12888,inst_12908,inst_12902,inst_12949__$1,inst_12950__$1,inst_12951,state_val_13386,c__6459__auto___13801))
,null,null));
});
;})(add_cell_BANG_,depth_compare,d_theta,x,cull_dist,player_stars_text,player_standing_texs,cells,vec__12890,render_range,player_shadow,player_cell,close_QMARK_,sprite_count,player_pos,calc_theta,obstacle_types,polar_object_coords,trees,player_hit,old_sprite_count,y,player_standing_sway,player_cell_y,player_cell_x,game_sprites,loader,player_walking_texs,player_and_surrounds,vec__12891,rhx,rhy,frame_num,shadow_tex,process_add_cell,tex,speed,hit_sfx,lobster_big,game_map,star_tex,pos,remove_cell_BANG_,theta,tufts,game_space,pickup_textures,perlin_channel,title_text,vx,floor_objects,pickup_sfx,tilemap,render_distance,vy,make_pickup,varela,new_cells,hy,wait,hx,player,player_stars_icon,inst_12950,inst_12427,inst_12929,inst_12388,inst_12928,inst_12421,inst_12895,inst_12417,inst_12474,inst_12447,inst_12383,inst_12591,inst_12916,inst_12397,inst_12892,inst_12882,inst_12501,inst_12893,inst_12416,inst_12396,inst_12899,inst_12887,inst_12395,inst_12903,inst_12398,inst_12502,inst_12437,inst_12590,inst_12907,inst_12506,inst_12919,inst_12883,inst_12391,inst_12418,inst_12430,inst_12904,inst_12394,inst_12884,inst_12424,inst_12585,inst_12949,inst_12578,inst_12411,inst_12906,inst_12896,inst_12958,inst_12408,inst_12905,inst_12589,inst_12503,inst_12387,inst_12384,inst_12886,inst_12894,inst_12586,inst_12393,inst_12444,inst_12881,inst_12885,inst_12888,inst_12908,inst_12902,inst_12949__$1,inst_12950__$1,inst_12951,state_val_13386,c__6459__auto___13801))
})();
var inst_12957 = inst_12956.call(null,inst_12886);
var inst_12958__$1 = cljs.core.filter.call(null,inst_12951,inst_12957);
var inst_12962 = cljs.core.nth.call(null,inst_12958__$1,(0),null);
var inst_12963 = cljs.core.nthnext.call(null,inst_12958__$1,(1));
var inst_12964 = inst_12958__$1;
var inst_12965 = inst_12949__$1;
var state_13385__$1 = (function (){var statearr_13472 = state_13385;
(statearr_13472[(100)] = inst_12950__$1);

(statearr_13472[(113)] = inst_12963);

(statearr_13472[(43)] = inst_12964);

(statearr_13472[(114)] = inst_12962);

(statearr_13472[(41)] = inst_12965);

(statearr_13472[(115)] = inst_12949__$1);

(statearr_13472[(116)] = inst_12958__$1);

return statearr_13472;
})();
var statearr_13473_13861 = state_13385__$1;
(statearr_13473_13861[(2)] = null);

(statearr_13473_13861[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13386 === (31))){
var inst_12950 = (state_13385[(100)]);
var inst_12427 = (state_13385[(60)]);
var inst_12929 = (state_13385[(101)]);
var inst_12388 = (state_13385[(61)]);
var inst_12928 = (state_13385[(102)]);
var inst_12421 = (state_13385[(62)]);
var inst_12895 = (state_13385[(103)]);
var inst_12417 = (state_13385[(63)]);
var inst_12474 = (state_13385[(51)]);
var inst_12447 = (state_13385[(78)]);
var inst_12383 = (state_13385[(45)]);
var inst_12591 = (state_13385[(40)]);
var inst_12916 = (state_13385[(104)]);
var inst_12397 = (state_13385[(64)]);
var inst_12892 = (state_13385[(84)]);
var inst_12882 = (state_13385[(25)]);
var inst_12501 = (state_13385[(26)]);
var inst_12980 = (state_13385[(128)]);
var inst_12893 = (state_13385[(85)]);
var inst_12416 = (state_13385[(65)]);
var inst_12396 = (state_13385[(30)]);
var inst_12899 = (state_13385[(86)]);
var inst_12887 = (state_13385[(105)]);
var inst_12395 = (state_13385[(66)]);
var inst_12903 = (state_13385[(106)]);
var inst_12398 = (state_13385[(31)]);
var inst_12502 = (state_13385[(107)]);
var inst_12437 = (state_13385[(67)]);
var inst_12590 = (state_13385[(108)]);
var inst_12907 = (state_13385[(109)]);
var inst_12506 = (state_13385[(110)]);
var inst_12919 = (state_13385[(111)]);
var inst_12883 = (state_13385[(112)]);
var inst_12391 = (state_13385[(68)]);
var inst_12418 = (state_13385[(69)]);
var inst_12430 = (state_13385[(70)]);
var inst_12904 = (state_13385[(117)]);
var inst_12394 = (state_13385[(71)]);
var inst_12884 = (state_13385[(118)]);
var inst_12424 = (state_13385[(72)]);
var inst_12585 = (state_13385[(119)]);
var inst_12949 = (state_13385[(115)]);
var inst_12578 = (state_13385[(120)]);
var inst_12411 = (state_13385[(73)]);
var inst_12906 = (state_13385[(121)]);
var inst_12896 = (state_13385[(122)]);
var inst_12958 = (state_13385[(116)]);
var inst_12408 = (state_13385[(74)]);
var inst_12905 = (state_13385[(123)]);
var inst_12589 = (state_13385[(124)]);
var inst_12503 = (state_13385[(88)]);
var inst_12387 = (state_13385[(75)]);
var inst_12384 = (state_13385[(47)]);
var inst_12886 = (state_13385[(32)]);
var inst_12894 = (state_13385[(125)]);
var inst_13087 = (state_13385[(129)]);
var inst_12586 = (state_13385[(19)]);
var inst_12393 = (state_13385[(76)]);
var inst_12444 = (state_13385[(77)]);
var inst_12881 = (state_13385[(97)]);
var inst_12885 = (state_13385[(126)]);
var inst_12888 = (state_13385[(15)]);
var inst_12908 = (state_13385[(127)]);
var inst_12902 = (state_13385[(89)]);
var inst_13081 = (state_13385[(2)]);
var inst_13082 = inst_12586.call(null,inst_12906);
var inst_13083 = (function (){var add_cell_BANG_ = inst_12590;
var depth_compare = inst_12502;
var d_theta = inst_12885;
var x = inst_12892;
var cull_dist = inst_12950;
var player_stars_text = inst_12421;
var player_standing_texs = inst_12408;
var cells = inst_12886;
var vec__12890 = inst_12882;
var render_range = inst_12919;
var player_shadow = inst_12398;
var player_cell = inst_12906;
var close_QMARK_ = inst_12506;
var sprite_count = inst_12887;
var player_pos = inst_12589;
var calc_theta = inst_12894;
var obstacle_types = inst_12430;
var post_remove_cells = inst_12980;
var polar_object_coords = inst_12503;
var trees = inst_12437;
var player_hit = inst_12888;
var old_sprite_count = inst_12905;
var y = inst_12893;
var player_standing_sway = inst_12411;
var player_cell_y = inst_12908;
var player_cell_x = inst_12907;
var game_sprites = inst_12585;
var loader = inst_12383;
var player_walking_texs = inst_12416;
var player_and_surrounds = inst_12928;
var vec__12891 = inst_12906;
var check_cell = inst_13082;
var rhx = inst_12899;
var rhy = inst_12902;
var frame_num = inst_12881;
var shadow_tex = inst_12397;
var process_add_cell = inst_12929;
var _ = inst_13081;
var tex = inst_12395;
var speed = inst_12883;
var cull_cells = inst_12958;
var hit_sfx = inst_12501;
var lobster_big = inst_12387;
var game_map = inst_12578;
var star_tex = inst_12417;
var pos = inst_12882;
var remove_cell_BANG_ = inst_12591;
var theta = inst_12884;
var tufts = inst_12444;
var game_space = inst_12586;
var pickup_textures = inst_12424;
var perlin_channel = inst_12384;
var title_text = inst_12394;
var vx = inst_12903;
var floor_objects = inst_12427;
var pickup_sfx = inst_12474;
var tilemap = inst_12393;
var render_distance = inst_12916;
var vy = inst_12904;
var make_pickup = inst_12447;
var varela = inst_12388;
var new_cells = inst_12949;
var hy = inst_12896;
var wait = inst_12391;
var hx = inst_12895;
var player = inst_12396;
var player_stars_icon = inst_12418;
return ((function (add_cell_BANG_,depth_compare,d_theta,x,cull_dist,player_stars_text,player_standing_texs,cells,vec__12890,render_range,player_shadow,player_cell,close_QMARK_,sprite_count,player_pos,calc_theta,obstacle_types,post_remove_cells,polar_object_coords,trees,player_hit,old_sprite_count,y,player_standing_sway,player_cell_y,player_cell_x,game_sprites,loader,player_walking_texs,player_and_surrounds,vec__12891,check_cell,rhx,rhy,frame_num,shadow_tex,process_add_cell,_,tex,speed,cull_cells,hit_sfx,lobster_big,game_map,star_tex,pos,remove_cell_BANG_,theta,tufts,game_space,pickup_textures,perlin_channel,title_text,vx,floor_objects,pickup_sfx,tilemap,render_distance,vy,make_pickup,varela,new_cells,hy,wait,hx,player,player_stars_icon,inst_12950,inst_12427,inst_12929,inst_12388,inst_12928,inst_12421,inst_12895,inst_12417,inst_12474,inst_12447,inst_12383,inst_12591,inst_12916,inst_12397,inst_12892,inst_12882,inst_12501,inst_12980,inst_12893,inst_12416,inst_12396,inst_12899,inst_12887,inst_12395,inst_12903,inst_12398,inst_12502,inst_12437,inst_12590,inst_12907,inst_12506,inst_12919,inst_12883,inst_12391,inst_12418,inst_12430,inst_12904,inst_12394,inst_12884,inst_12424,inst_12585,inst_12949,inst_12578,inst_12411,inst_12906,inst_12896,inst_12958,inst_12408,inst_12905,inst_12589,inst_12503,inst_12387,inst_12384,inst_12886,inst_12894,inst_13087,inst_12586,inst_12393,inst_12444,inst_12881,inst_12885,inst_12888,inst_12908,inst_12902,inst_13081,inst_13082,state_val_13386,c__6459__auto___13801){
return (function (obj){
return cljs.core.some.call(null,((function (add_cell_BANG_,depth_compare,d_theta,x,cull_dist,player_stars_text,player_standing_texs,cells,vec__12890,render_range,player_shadow,player_cell,close_QMARK_,sprite_count,player_pos,calc_theta,obstacle_types,post_remove_cells,polar_object_coords,trees,player_hit,old_sprite_count,y,player_standing_sway,player_cell_y,player_cell_x,game_sprites,loader,player_walking_texs,player_and_surrounds,vec__12891,check_cell,rhx,rhy,frame_num,shadow_tex,process_add_cell,_,tex,speed,cull_cells,hit_sfx,lobster_big,game_map,star_tex,pos,remove_cell_BANG_,theta,tufts,game_space,pickup_textures,perlin_channel,title_text,vx,floor_objects,pickup_sfx,tilemap,render_distance,vy,make_pickup,varela,new_cells,hy,wait,hx,player,player_stars_icon,inst_12950,inst_12427,inst_12929,inst_12388,inst_12928,inst_12421,inst_12895,inst_12417,inst_12474,inst_12447,inst_12383,inst_12591,inst_12916,inst_12397,inst_12892,inst_12882,inst_12501,inst_12980,inst_12893,inst_12416,inst_12396,inst_12899,inst_12887,inst_12395,inst_12903,inst_12398,inst_12502,inst_12437,inst_12590,inst_12907,inst_12506,inst_12919,inst_12883,inst_12391,inst_12418,inst_12430,inst_12904,inst_12394,inst_12884,inst_12424,inst_12585,inst_12949,inst_12578,inst_12411,inst_12906,inst_12896,inst_12958,inst_12408,inst_12905,inst_12589,inst_12503,inst_12387,inst_12384,inst_12886,inst_12894,inst_13087,inst_12586,inst_12393,inst_12444,inst_12881,inst_12885,inst_12888,inst_12908,inst_12902,inst_13081,inst_13082,state_val_13386,c__6459__auto___13801){
return (function (p1__12357_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(obj),p1__12357_SHARP_);
});})(add_cell_BANG_,depth_compare,d_theta,x,cull_dist,player_stars_text,player_standing_texs,cells,vec__12890,render_range,player_shadow,player_cell,close_QMARK_,sprite_count,player_pos,calc_theta,obstacle_types,post_remove_cells,polar_object_coords,trees,player_hit,old_sprite_count,y,player_standing_sway,player_cell_y,player_cell_x,game_sprites,loader,player_walking_texs,player_and_surrounds,vec__12891,check_cell,rhx,rhy,frame_num,shadow_tex,process_add_cell,_,tex,speed,cull_cells,hit_sfx,lobster_big,game_map,star_tex,pos,remove_cell_BANG_,theta,tufts,game_space,pickup_textures,perlin_channel,title_text,vx,floor_objects,pickup_sfx,tilemap,render_distance,vy,make_pickup,varela,new_cells,hy,wait,hx,player,player_stars_icon,inst_12950,inst_12427,inst_12929,inst_12388,inst_12928,inst_12421,inst_12895,inst_12417,inst_12474,inst_12447,inst_12383,inst_12591,inst_12916,inst_12397,inst_12892,inst_12882,inst_12501,inst_12980,inst_12893,inst_12416,inst_12396,inst_12899,inst_12887,inst_12395,inst_12903,inst_12398,inst_12502,inst_12437,inst_12590,inst_12907,inst_12506,inst_12919,inst_12883,inst_12391,inst_12418,inst_12430,inst_12904,inst_12394,inst_12884,inst_12424,inst_12585,inst_12949,inst_12578,inst_12411,inst_12906,inst_12896,inst_12958,inst_12408,inst_12905,inst_12589,inst_12503,inst_12387,inst_12384,inst_12886,inst_12894,inst_13087,inst_12586,inst_12393,inst_12444,inst_12881,inst_12885,inst_12888,inst_12908,inst_12902,inst_13081,inst_13082,state_val_13386,c__6459__auto___13801))
,obstacle_types);
});
;})(add_cell_BANG_,depth_compare,d_theta,x,cull_dist,player_stars_text,player_standing_texs,cells,vec__12890,render_range,player_shadow,player_cell,close_QMARK_,sprite_count,player_pos,calc_theta,obstacle_types,post_remove_cells,polar_object_coords,trees,player_hit,old_sprite_count,y,player_standing_sway,player_cell_y,player_cell_x,game_sprites,loader,player_walking_texs,player_and_surrounds,vec__12891,check_cell,rhx,rhy,frame_num,shadow_tex,process_add_cell,_,tex,speed,cull_cells,hit_sfx,lobster_big,game_map,star_tex,pos,remove_cell_BANG_,theta,tufts,game_space,pickup_textures,perlin_channel,title_text,vx,floor_objects,pickup_sfx,tilemap,render_distance,vy,make_pickup,varela,new_cells,hy,wait,hx,player,player_stars_icon,inst_12950,inst_12427,inst_12929,inst_12388,inst_12928,inst_12421,inst_12895,inst_12417,inst_12474,inst_12447,inst_12383,inst_12591,inst_12916,inst_12397,inst_12892,inst_12882,inst_12501,inst_12980,inst_12893,inst_12416,inst_12396,inst_12899,inst_12887,inst_12395,inst_12903,inst_12398,inst_12502,inst_12437,inst_12590,inst_12907,inst_12506,inst_12919,inst_12883,inst_12391,inst_12418,inst_12430,inst_12904,inst_12394,inst_12884,inst_12424,inst_12585,inst_12949,inst_12578,inst_12411,inst_12906,inst_12896,inst_12958,inst_12408,inst_12905,inst_12589,inst_12503,inst_12387,inst_12384,inst_12886,inst_12894,inst_13087,inst_12586,inst_12393,inst_12444,inst_12881,inst_12885,inst_12888,inst_12908,inst_12902,inst_13081,inst_13082,state_val_13386,c__6459__auto___13801))
})();
var inst_13084 = cljs.core.filter.call(null,inst_13083,inst_13082);
var inst_13085 = (function (){var add_cell_BANG_ = inst_12590;
var depth_compare = inst_12502;
var d_theta = inst_12885;
var x = inst_12892;
var cull_dist = inst_12950;
var player_stars_text = inst_12421;
var player_standing_texs = inst_12408;
var cells = inst_12886;
var vec__12890 = inst_12882;
var render_range = inst_12919;
var player_shadow = inst_12398;
var player_cell = inst_12906;
var close_QMARK_ = inst_12506;
var sprite_count = inst_12887;
var player_pos = inst_12589;
var calc_theta = inst_12894;
var obstacle_types = inst_12430;
var post_remove_cells = inst_12980;
var polar_object_coords = inst_12503;
var trees = inst_12437;
var player_hit = inst_12888;
var old_sprite_count = inst_12905;
var y = inst_12893;
var player_standing_sway = inst_12411;
var player_cell_y = inst_12908;
var player_cell_x = inst_12907;
var game_sprites = inst_12585;
var loader = inst_12383;
var player_walking_texs = inst_12416;
var player_and_surrounds = inst_12928;
var vec__12891 = inst_12906;
var check_cell = inst_13082;
var rhx = inst_12899;
var rhy = inst_12902;
var frame_num = inst_12881;
var shadow_tex = inst_12397;
var process_add_cell = inst_12929;
var _ = inst_13081;
var tex = inst_12395;
var speed = inst_12883;
var cull_cells = inst_12958;
var obstacle_QMARK_ = inst_13083;
var hit_sfx = inst_12501;
var lobster_big = inst_12387;
var game_map = inst_12578;
var star_tex = inst_12417;
var pos = inst_12882;
var remove_cell_BANG_ = inst_12591;
var theta = inst_12884;
var tufts = inst_12444;
var game_space = inst_12586;
var pickup_textures = inst_12424;
var hit_things = inst_13084;
var perlin_channel = inst_12384;
var title_text = inst_12394;
var vx = inst_12903;
var floor_objects = inst_12427;
var pickup_sfx = inst_12474;
var tilemap = inst_12393;
var render_distance = inst_12916;
var vy = inst_12904;
var make_pickup = inst_12447;
var varela = inst_12388;
var new_cells = inst_12949;
var hy = inst_12896;
var wait = inst_12391;
var hx = inst_12895;
var player = inst_12396;
var player_stars_icon = inst_12418;
return ((function (add_cell_BANG_,depth_compare,d_theta,x,cull_dist,player_stars_text,player_standing_texs,cells,vec__12890,render_range,player_shadow,player_cell,close_QMARK_,sprite_count,player_pos,calc_theta,obstacle_types,post_remove_cells,polar_object_coords,trees,player_hit,old_sprite_count,y,player_standing_sway,player_cell_y,player_cell_x,game_sprites,loader,player_walking_texs,player_and_surrounds,vec__12891,check_cell,rhx,rhy,frame_num,shadow_tex,process_add_cell,_,tex,speed,cull_cells,obstacle_QMARK_,hit_sfx,lobster_big,game_map,star_tex,pos,remove_cell_BANG_,theta,tufts,game_space,pickup_textures,hit_things,perlin_channel,title_text,vx,floor_objects,pickup_sfx,tilemap,render_distance,vy,make_pickup,varela,new_cells,hy,wait,hx,player,player_stars_icon,inst_12950,inst_12427,inst_12929,inst_12388,inst_12928,inst_12421,inst_12895,inst_12417,inst_12474,inst_12447,inst_12383,inst_12591,inst_12916,inst_12397,inst_12892,inst_12882,inst_12501,inst_12980,inst_12893,inst_12416,inst_12396,inst_12899,inst_12887,inst_12395,inst_12903,inst_12398,inst_12502,inst_12437,inst_12590,inst_12907,inst_12506,inst_12919,inst_12883,inst_12391,inst_12418,inst_12430,inst_12904,inst_12394,inst_12884,inst_12424,inst_12585,inst_12949,inst_12578,inst_12411,inst_12906,inst_12896,inst_12958,inst_12408,inst_12905,inst_12589,inst_12503,inst_12387,inst_12384,inst_12886,inst_12894,inst_13087,inst_12586,inst_12393,inst_12444,inst_12881,inst_12885,inst_12888,inst_12908,inst_12902,inst_13081,inst_13082,inst_13083,inst_13084,state_val_13386,c__6459__auto___13801){
return (function (p1__12358_SHARP_){
return close_QMARK_.call(null,pos,new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(p1__12358_SHARP_),(500));
});
;})(add_cell_BANG_,depth_compare,d_theta,x,cull_dist,player_stars_text,player_standing_texs,cells,vec__12890,render_range,player_shadow,player_cell,close_QMARK_,sprite_count,player_pos,calc_theta,obstacle_types,post_remove_cells,polar_object_coords,trees,player_hit,old_sprite_count,y,player_standing_sway,player_cell_y,player_cell_x,game_sprites,loader,player_walking_texs,player_and_surrounds,vec__12891,check_cell,rhx,rhy,frame_num,shadow_tex,process_add_cell,_,tex,speed,cull_cells,obstacle_QMARK_,hit_sfx,lobster_big,game_map,star_tex,pos,remove_cell_BANG_,theta,tufts,game_space,pickup_textures,hit_things,perlin_channel,title_text,vx,floor_objects,pickup_sfx,tilemap,render_distance,vy,make_pickup,varela,new_cells,hy,wait,hx,player,player_stars_icon,inst_12950,inst_12427,inst_12929,inst_12388,inst_12928,inst_12421,inst_12895,inst_12417,inst_12474,inst_12447,inst_12383,inst_12591,inst_12916,inst_12397,inst_12892,inst_12882,inst_12501,inst_12980,inst_12893,inst_12416,inst_12396,inst_12899,inst_12887,inst_12395,inst_12903,inst_12398,inst_12502,inst_12437,inst_12590,inst_12907,inst_12506,inst_12919,inst_12883,inst_12391,inst_12418,inst_12430,inst_12904,inst_12394,inst_12884,inst_12424,inst_12585,inst_12949,inst_12578,inst_12411,inst_12906,inst_12896,inst_12958,inst_12408,inst_12905,inst_12589,inst_12503,inst_12387,inst_12384,inst_12886,inst_12894,inst_13087,inst_12586,inst_12393,inst_12444,inst_12881,inst_12885,inst_12888,inst_12908,inst_12902,inst_13081,inst_13082,inst_13083,inst_13084,state_val_13386,c__6459__auto___13801))
})();
var inst_13086 = cljs.core.some.call(null,inst_13085,inst_13084);
var inst_13087__$1 = cljs.core._EQ_.call(null,(0),inst_12888);
var state_13385__$1 = (function (){var statearr_13474 = state_13385;
(statearr_13474[(49)] = inst_13086);

(statearr_13474[(129)] = inst_13087__$1);

return statearr_13474;
})();
if(inst_13087__$1){
var statearr_13475_13862 = state_13385__$1;
(statearr_13475_13862[(1)] = (55));

} else {
var statearr_13476_13863 = state_13385__$1;
(statearr_13476_13863[(1)] = (56));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13386 === (113))){
var inst_13316 = cljs.core.reset_BANG_.call(null,farn.core.player_animation,new cljs.core.Keyword(null,"running","running",1554969103));
var state_13385__$1 = state_13385;
var statearr_13477_13864 = state_13385__$1;
(statearr_13477_13864[(2)] = inst_13316);

(statearr_13477_13864[(1)] = (115));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13386 === (32))){
var inst_12995 = (state_13385[(50)]);
var inst_12988 = (state_13385[(93)]);
var inst_12396 = (state_13385[(30)]);
var inst_12990 = (state_13385[(95)]);
var inst_12995__$1 = cljs.core._nth.call(null,inst_12988,inst_12990);
var inst_12996 = new cljs.core.Keyword(null,"sprite","sprite",172516848).cljs$core$IFn$_invoke$arity$1(inst_12995__$1);
var inst_12997 = farn.sprite.overlap_QMARK_.call(null,inst_12396,inst_12996);
var state_13385__$1 = (function (){var statearr_13478 = state_13385;
(statearr_13478[(50)] = inst_12995__$1);

return statearr_13478;
})();
if(inst_12997){
var statearr_13479_13865 = state_13385__$1;
(statearr_13479_13865[(1)] = (35));

} else {
var statearr_13480_13866 = state_13385__$1;
(statearr_13480_13866[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13386 === (40))){
var inst_13023 = (state_13385[(2)]);
var state_13385__$1 = state_13385;
var statearr_13481_13867 = state_13385__$1;
(statearr_13481_13867[(2)] = inst_13023);

(statearr_13481_13867[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13386 === (129))){
var inst_12885 = (state_13385[(126)]);
var inst_13365 = (inst_12885 + 0.01);
var inst_13366 = ((inst_13365 < farn.core.player_turn_speed) ? inst_13365 : farn.core.player_turn_speed);
var state_13385__$1 = state_13385;
var statearr_13482_13868 = state_13385__$1;
(statearr_13482_13868[(2)] = inst_13366);

(statearr_13482_13868[(1)] = (131));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13386 === (91))){
var inst_13184 = (state_13385[(57)]);
var inst_13180 = (state_13385[(16)]);
var inst_12892 = (state_13385[(84)]);
var inst_13181 = (state_13385[(17)]);
var inst_12893 = (state_13385[(85)]);
var inst_12899 = (state_13385[(86)]);
var inst_12503 = (state_13385[(88)]);
var inst_12902 = (state_13385[(89)]);
var inst_13186 = inst_13180.call(null,inst_13184);
var inst_13188 = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(inst_13186);
var inst_13189 = new cljs.core.Keyword(null,"sprite","sprite",172516848).cljs$core$IFn$_invoke$arity$1(inst_13186);
var inst_13190 = inst_12503.call(null,inst_13188,inst_13189,inst_12892,inst_12893,inst_12899,inst_12902);
var inst_13191 = cljs.core.nth.call(null,inst_13190,(0),null);
var inst_13192 = cljs.core.nth.call(null,inst_13190,(1),null);
var inst_13193 = new cljs.core.Keyword(null,"sprite","sprite",172516848).cljs$core$IFn$_invoke$arity$1(inst_13186);
var inst_13194 = farn.sprite.set_pos_BANG_.call(null,inst_13193,inst_13191,inst_13192);
var inst_13195 = (inst_13181 - (1));
var inst_13196 = (inst_13184 < inst_13195);
var state_13385__$1 = (function (){var statearr_13483 = state_13385;
(statearr_13483[(130)] = inst_13194);

return statearr_13483;
})();
if(cljs.core.truth_(inst_13196)){
var statearr_13484_13869 = state_13385__$1;
(statearr_13484_13869[(1)] = (93));

} else {
var statearr_13485_13870 = state_13385__$1;
(statearr_13485_13870[(1)] = (94));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13386 === (117))){
var inst_12892 = (state_13385[(84)]);
var inst_12893 = (state_13385[(85)]);
var inst_12903 = (state_13385[(106)]);
var inst_12904 = (state_13385[(117)]);
var inst_13329 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_13330 = (inst_12892 + inst_12903);
var inst_13331 = (inst_12893 + inst_12904);
var inst_13332 = [inst_13330,inst_13331];
var inst_13333 = (new cljs.core.PersistentVector(null,2,(5),inst_13329,inst_13332,null));
var state_13385__$1 = state_13385;
var statearr_13486_13871 = state_13385__$1;
(statearr_13486_13871[(2)] = inst_13333);

(statearr_13486_13871[(1)] = (119));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13386 === (108))){
var inst_13307 = (state_13385[(13)]);
var inst_12904 = (state_13385[(117)]);
var inst_13306 = Math.abs.call(null,inst_12904);
var inst_13307__$1 = (inst_13306 > (2));
var state_13385__$1 = (function (){var statearr_13487 = state_13385;
(statearr_13487[(13)] = inst_13307__$1);

return statearr_13487;
})();
if(cljs.core.truth_(inst_13307__$1)){
var statearr_13488_13872 = state_13385__$1;
(statearr_13488_13872[(1)] = (110));

} else {
var statearr_13489_13873 = state_13385__$1;
(statearr_13489_13873[(1)] = (111));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13386 === (56))){
var inst_13087 = (state_13385[(129)]);
var state_13385__$1 = state_13385;
var statearr_13490_13874 = state_13385__$1;
(statearr_13490_13874[(2)] = inst_13087);

(statearr_13490_13874[(1)] = (57));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13386 === (33))){
var inst_12987 = (state_13385[(94)]);
var inst_13030 = (state_13385[(58)]);
var inst_13030__$1 = cljs.core.seq.call(null,inst_12987);
var state_13385__$1 = (function (){var statearr_13491 = state_13385;
(statearr_13491[(58)] = inst_13030__$1);

return statearr_13491;
})();
if(inst_13030__$1){
var statearr_13492_13875 = state_13385__$1;
(statearr_13492_13875[(1)] = (42));

} else {
var statearr_13493_13876 = state_13385__$1;
(statearr_13493_13876[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13386 === (13))){
var inst_12486 = (state_13385[(131)]);
var inst_12491 = [cljs.core.str("sfx/boom-"),cljs.core.str(inst_12486),cljs.core.str(".ogg")].join('');
var inst_12492 = farn.sound.load_sound.call(null,inst_12491);
var state_13385__$1 = state_13385;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13385__$1,(16),inst_12492);
} else {
if((state_val_13386 === (22))){
var inst_12935 = (state_13385[(132)]);
var state_13385__$1 = state_13385;
var statearr_13494_13877 = state_13385__$1;
(statearr_13494_13877[(2)] = inst_12935);

(statearr_13494_13877[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13386 === (90))){
var inst_13170 = (state_13385[(18)]);
var inst_13207 = (state_13385[(2)]);
var inst_13208 = cljs.core.next.call(null,inst_13170);
var inst_13130 = inst_13208;
var inst_13131 = null;
var inst_13132 = (0);
var inst_13133 = (0);
var state_13385__$1 = (function (){var statearr_13495 = state_13385;
(statearr_13495[(33)] = inst_13131);

(statearr_13495[(34)] = inst_13133);

(statearr_13495[(23)] = inst_13130);

(statearr_13495[(36)] = inst_13132);

(statearr_13495[(133)] = inst_13207);

return statearr_13495;
})();
var statearr_13496_13878 = state_13385__$1;
(statearr_13496_13878[(2)] = null);

(statearr_13496_13878[(1)] = (69));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13386 === (109))){
var inst_13314 = (state_13385[(2)]);
var state_13385__$1 = state_13385;
if(cljs.core.truth_(inst_13314)){
var statearr_13497_13879 = state_13385__$1;
(statearr_13497_13879[(1)] = (113));

} else {
var statearr_13498_13880 = state_13385__$1;
(statearr_13498_13880[(1)] = (114));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13386 === (36))){
var state_13385__$1 = state_13385;
var statearr_13499_13881 = state_13385__$1;
(statearr_13499_13881[(2)] = null);

(statearr_13499_13881[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13386 === (41))){
var inst_13012 = (state_13385[(2)]);
var state_13385__$1 = state_13385;
var statearr_13500_13882 = state_13385__$1;
(statearr_13500_13882[(2)] = inst_13012);

(statearr_13500_13882[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13386 === (118))){
var inst_12892 = (state_13385[(84)]);
var inst_12893 = (state_13385[(85)]);
var inst_12903 = (state_13385[(106)]);
var inst_12904 = (state_13385[(117)]);
var inst_13335 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_13336 = (inst_12892 - inst_12903);
var inst_13337 = (inst_12893 - inst_12904);
var inst_13338 = [inst_13336,inst_13337];
var inst_13339 = (new cljs.core.PersistentVector(null,2,(5),inst_13335,inst_13338,null));
var state_13385__$1 = state_13385;
var statearr_13501_13883 = state_13385__$1;
(statearr_13501_13883[(2)] = inst_13339);

(statearr_13501_13883[(1)] = (119));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13386 === (89))){
var state_13385__$1 = state_13385;
var statearr_13502_13884 = state_13385__$1;
(statearr_13502_13884[(2)] = null);

(statearr_13502_13884[(1)] = (90));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13386 === (100))){
var inst_13289 = (state_13385[(2)]);
var state_13385__$1 = state_13385;
var statearr_13503_13885 = state_13385__$1;
(statearr_13503_13885[(2)] = inst_13289);

(statearr_13503_13885[(1)] = (97));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13386 === (131))){
var inst_13341 = (state_13385[(91)]);
var inst_12980 = (state_13385[(128)]);
var inst_13361 = (state_13385[(134)]);
var inst_13362 = (state_13385[(135)]);
var inst_12905 = (state_13385[(123)]);
var inst_13122 = (state_13385[(37)]);
var inst_13326 = (state_13385[(99)]);
var inst_13378 = (state_13385[(2)]);
var inst_13379 = (inst_13122 - (1));
var inst_13380 = (((0) > inst_13379) ? (0) : inst_13379);
var inst_12881 = inst_13326;
var inst_12882 = inst_13341;
var inst_12883 = inst_13361;
var inst_12884 = inst_13362;
var inst_12885 = inst_13378;
var inst_12886 = inst_12980;
var inst_12887 = inst_12905;
var inst_12888 = inst_13380;
var state_13385__$1 = (function (){var statearr_13504 = state_13385;
(statearr_13504[(25)] = inst_12882);

(statearr_13504[(105)] = inst_12887);

(statearr_13504[(112)] = inst_12883);

(statearr_13504[(118)] = inst_12884);

(statearr_13504[(32)] = inst_12886);

(statearr_13504[(97)] = inst_12881);

(statearr_13504[(126)] = inst_12885);

(statearr_13504[(15)] = inst_12888);

return statearr_13504;
})();
var statearr_13505_13886 = state_13385__$1;
(statearr_13505_13886[(2)] = null);

(statearr_13505_13886[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13386 === (122))){
var inst_12884 = (state_13385[(118)]);
var inst_12885 = (state_13385[(126)]);
var inst_13361 = (state_13385[(2)]);
var inst_13362 = (inst_12884 + inst_12885);
var inst_13363 = farn.events.is_pressed_QMARK_.call(null,new cljs.core.Keyword(null,"left","left",-399115937));
var state_13385__$1 = (function (){var statearr_13506 = state_13385;
(statearr_13506[(134)] = inst_13361);

(statearr_13506[(135)] = inst_13362);

return statearr_13506;
})();
if(cljs.core.truth_(inst_13363)){
var statearr_13507_13887 = state_13385__$1;
(statearr_13507_13887[(1)] = (129));

} else {
var statearr_13508_13888 = state_13385__$1;
(statearr_13508_13888[(1)] = (130));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13386 === (43))){
var state_13385__$1 = state_13385;
var statearr_13509_13889 = state_13385__$1;
(statearr_13509_13889[(2)] = null);

(statearr_13509_13889[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13386 === (61))){
var inst_13097 = (state_13385[(24)]);
var inst_13102 = inst_13097;
var state_13385__$1 = (function (){var statearr_13510 = state_13385;
(statearr_13510[(136)] = inst_13102);

return statearr_13510;
})();
var statearr_13511_13890 = state_13385__$1;
(statearr_13511_13890[(2)] = null);

(statearr_13511_13890[(1)] = (64));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13386 === (29))){
var inst_12978 = (state_13385[(2)]);
var state_13385__$1 = state_13385;
var statearr_13512_13891 = state_13385__$1;
(statearr_13512_13891[(2)] = inst_12978);

(statearr_13512_13891[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13386 === (44))){
var inst_13077 = (state_13385[(2)]);
var state_13385__$1 = state_13385;
var statearr_13513_13892 = state_13385__$1;
(statearr_13513_13892[(2)] = inst_13077);

(statearr_13513_13892[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13386 === (93))){
var inst_13184 = (state_13385[(57)]);
var inst_13198 = (inst_13184 + (1));
var inst_13184__$1 = inst_13198;
var state_13385__$1 = (function (){var statearr_13514 = state_13385;
(statearr_13514[(57)] = inst_13184__$1);

return statearr_13514;
})();
var statearr_13515_13893 = state_13385__$1;
(statearr_13515_13893[(2)] = null);

(statearr_13515_13893[(1)] = (91));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13386 === (6))){
var inst_12474 = (state_13385[(2)]);
var inst_12478 = cljs.core.PersistentVector.EMPTY;
var inst_12479 = cljs.core.range.call(null,(1),(4));
var inst_12480 = cljs.core.nth.call(null,inst_12479,(0),null);
var inst_12481 = cljs.core.nthnext.call(null,inst_12479,(1));
var inst_12482 = inst_12478;
var inst_12483 = inst_12479;
var state_13385__$1 = (function (){var statearr_13516 = state_13385;
(statearr_13516[(51)] = inst_12474);

(statearr_13516[(137)] = inst_12482);

(statearr_13516[(138)] = inst_12481);

(statearr_13516[(139)] = inst_12483);

(statearr_13516[(140)] = inst_12480);

return statearr_13516;
})();
var statearr_13517_13894 = state_13385__$1;
(statearr_13517_13894[(2)] = null);

(statearr_13517_13894[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13386 === (111))){
var inst_13310 = farn.events.is_pressed_QMARK_.call(null,new cljs.core.Keyword(null,"up","up",-269712113));
var state_13385__$1 = state_13385;
var statearr_13518_13895 = state_13385__$1;
(statearr_13518_13895[(2)] = inst_13310);

(statearr_13518_13895[(1)] = (112));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13386 === (28))){
var inst_12965 = (state_13385[(41)]);
var state_13385__$1 = state_13385;
var statearr_13519_13896 = state_13385__$1;
(statearr_13519_13896[(2)] = inst_12965);

(statearr_13519_13896[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13386 === (134))){
var inst_13376 = (state_13385[(2)]);
var state_13385__$1 = state_13385;
var statearr_13520_13897 = state_13385__$1;
(statearr_13520_13897[(2)] = inst_13376);

(statearr_13520_13897[(1)] = (131));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13386 === (64))){
var inst_12417 = (state_13385[(63)]);
var inst_13098 = (state_13385[(27)]);
var inst_12397 = (state_13385[(64)]);
var inst_13099 = (state_13385[(28)]);
var inst_13102 = (state_13385[(136)]);
var inst_13104 = farn.stars.make.call(null,farn.core.main_stage,inst_12417,inst_12397,inst_13098,inst_13099);
var inst_13105 = (inst_13102 > (1));
var state_13385__$1 = (function (){var statearr_13521 = state_13385;
(statearr_13521[(141)] = inst_13104);

return statearr_13521;
})();
if(cljs.core.truth_(inst_13105)){
var statearr_13522_13898 = state_13385__$1;
(statearr_13522_13898[(1)] = (66));

} else {
var statearr_13523_13899 = state_13385__$1;
(statearr_13523_13899[(1)] = (67));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13386 === (103))){
var inst_13287 = (state_13385[(2)]);
var state_13385__$1 = state_13385;
var statearr_13524_13900 = state_13385__$1;
(statearr_13524_13900[(2)] = inst_13287);

(statearr_13524_13900[(1)] = (100));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13386 === (51))){
var inst_12417 = (state_13385[(63)]);
var inst_12397 = (state_13385[(64)]);
var inst_12980 = (state_13385[(128)]);
var inst_12502 = (state_13385[(107)]);
var inst_13039 = (state_13385[(59)]);
var inst_12503 = (state_13385[(88)]);
var inst_12586 = (state_13385[(19)]);
var inst_13046 = new cljs.core.Keyword(null,"shadow","shadow",873231803).cljs$core$IFn$_invoke$arity$1(inst_13039);
var inst_13047 = farn.core.main_stage.removeChild(inst_13046);
var inst_13048 = cljs.core.reset_BANG_.call(null,farn.core.player_animation,new cljs.core.Keyword(null,"standing","standing",-1248340762));
var inst_13050 = cljs.core.deref.call(null,farn.core.last_player_position);
var inst_13051 = cljs.core.nth.call(null,inst_13050,(0),null);
var inst_13052 = cljs.core.nth.call(null,inst_13050,(1),null);
var inst_13053 = new cljs.core.Keyword(null,"sprite","sprite",172516848).cljs$core$IFn$_invoke$arity$1(inst_13039);
var inst_13054 = farn.core.game_completed.call(null,farn.core.main_stage,inst_12417,inst_12397,inst_13051,inst_13052,inst_12503,inst_12980,inst_12586,inst_12502,inst_13053);
var state_13385__$1 = (function (){var statearr_13525 = state_13385;
(statearr_13525[(142)] = inst_13048);

(statearr_13525[(143)] = inst_13047);

return statearr_13525;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13385__$1,(54),inst_13054);
} else {
if((state_val_13386 === (25))){
var inst_12964 = (state_13385[(43)]);
var inst_12968 = (state_13385[(42)]);
var inst_12968__$1 = cljs.core.nth.call(null,inst_12964,(0),null);
var inst_12969 = cljs.core.nthnext.call(null,inst_12964,(1));
var inst_12970 = (inst_12968__$1 == null);
var inst_12971 = cljs.core.not.call(null,inst_12970);
var state_13385__$1 = (function (){var statearr_13526 = state_13385;
(statearr_13526[(39)] = inst_12969);

(statearr_13526[(42)] = inst_12968__$1);

return statearr_13526;
})();
if(inst_12971){
var statearr_13527_13901 = state_13385__$1;
(statearr_13527_13901[(1)] = (27));

} else {
var statearr_13528_13902 = state_13385__$1;
(statearr_13528_13902[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13386 === (34))){
var inst_13079 = (state_13385[(2)]);
var state_13385__$1 = state_13385;
var statearr_13529_13903 = state_13385__$1;
(statearr_13529_13903[(2)] = inst_13079);

(statearr_13529_13903[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13386 === (125))){
var inst_13359 = (state_13385[(2)]);
var state_13385__$1 = state_13385;
var statearr_13530_13904 = state_13385__$1;
(statearr_13530_13904[(2)] = inst_13359);

(statearr_13530_13904[(1)] = (122));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13386 === (17))){
var inst_12427 = (state_13385[(60)]);
var inst_12388 = (state_13385[(61)]);
var inst_12421 = (state_13385[(62)]);
var inst_12417 = (state_13385[(63)]);
var inst_12474 = (state_13385[(51)]);
var inst_12447 = (state_13385[(78)]);
var inst_12383 = (state_13385[(45)]);
var inst_12591 = (state_13385[(40)]);
var inst_12397 = (state_13385[(64)]);
var inst_12501 = (state_13385[(26)]);
var inst_12416 = (state_13385[(65)]);
var inst_12396 = (state_13385[(30)]);
var inst_12395 = (state_13385[(66)]);
var inst_12398 = (state_13385[(31)]);
var inst_12502 = (state_13385[(107)]);
var inst_12437 = (state_13385[(67)]);
var inst_12590 = (state_13385[(108)]);
var inst_12506 = (state_13385[(110)]);
var inst_12391 = (state_13385[(68)]);
var inst_12418 = (state_13385[(69)]);
var inst_12430 = (state_13385[(70)]);
var inst_12394 = (state_13385[(71)]);
var inst_12424 = (state_13385[(72)]);
var inst_12585 = (state_13385[(119)]);
var inst_12578 = (state_13385[(120)]);
var inst_12411 = (state_13385[(73)]);
var inst_12408 = (state_13385[(74)]);
var inst_12589 = (state_13385[(124)]);
var inst_12503 = (state_13385[(88)]);
var inst_12387 = (state_13385[(75)]);
var inst_12384 = (state_13385[(47)]);
var inst_12586 = (state_13385[(19)]);
var inst_12393 = (state_13385[(76)]);
var inst_12444 = (state_13385[(77)]);
var inst_12756 = (state_13385[(2)]);
var inst_12758 = farn.sprite.set_scale_BANG_.call(null,inst_12396,0.5);
var inst_12759 = farn.core.main_stage.addChild(inst_12396);
var inst_12760 = farn.core.main_stage.addChild(inst_12398);
var inst_12866 = cljs.core.async.chan.call(null,(1));
var inst_12867 = (function (){var add_cell_BANG_ = inst_12590;
var depth_compare = inst_12502;
var player_stars_text = inst_12421;
var player_standing_texs = inst_12408;
var player_shadow = inst_12398;
var close_QMARK_ = inst_12506;
var player_pos = inst_12589;
var obstacle_types = inst_12430;
var polar_object_coords = inst_12503;
var trees = inst_12437;
var player_standing_sway = inst_12411;
var game_sprites = inst_12585;
var loader = inst_12383;
var player_walking_texs = inst_12416;
var shadow_tex = inst_12397;
var tex = inst_12395;
var c__6459__auto____$1 = inst_12866;
var hit_sfx = inst_12501;
var lobster_big = inst_12387;
var game_map = inst_12578;
var star_tex = inst_12417;
var remove_cell_BANG_ = inst_12591;
var tufts = inst_12444;
var game_space = inst_12586;
var pickup_textures = inst_12424;
var perlin_channel = inst_12384;
var title_text = inst_12394;
var floor_objects = inst_12427;
var pickup_sfx = inst_12474;
var tilemap = inst_12393;
var make_pickup = inst_12447;
var varela = inst_12388;
var wait = inst_12391;
var player = inst_12396;
var player_stars_icon = inst_12418;
return ((function (add_cell_BANG_,depth_compare,player_stars_text,player_standing_texs,player_shadow,close_QMARK_,player_pos,obstacle_types,polar_object_coords,trees,player_standing_sway,game_sprites,loader,player_walking_texs,shadow_tex,tex,c__6459__auto____$1,hit_sfx,lobster_big,game_map,star_tex,remove_cell_BANG_,tufts,game_space,pickup_textures,perlin_channel,title_text,floor_objects,pickup_sfx,tilemap,make_pickup,varela,wait,player,player_stars_icon,inst_12427,inst_12388,inst_12421,inst_12417,inst_12474,inst_12447,inst_12383,inst_12591,inst_12397,inst_12501,inst_12416,inst_12396,inst_12395,inst_12398,inst_12502,inst_12437,inst_12590,inst_12506,inst_12391,inst_12418,inst_12430,inst_12394,inst_12424,inst_12585,inst_12578,inst_12411,inst_12408,inst_12589,inst_12503,inst_12387,inst_12384,inst_12586,inst_12393,inst_12444,inst_12756,inst_12758,inst_12759,inst_12760,inst_12866,state_val_13386,c__6459__auto___13801){
return (function (){
var f__6460__auto__ = (function (){var switch__6444__auto__ = ((function (add_cell_BANG_,depth_compare,player_stars_text,player_standing_texs,player_shadow,close_QMARK_,player_pos,obstacle_types,polar_object_coords,trees,player_standing_sway,game_sprites,loader,player_walking_texs,shadow_tex,tex,c__6459__auto____$1,hit_sfx,lobster_big,game_map,star_tex,remove_cell_BANG_,tufts,game_space,pickup_textures,perlin_channel,title_text,floor_objects,pickup_sfx,tilemap,make_pickup,varela,wait,player,player_stars_icon,inst_12427,inst_12388,inst_12421,inst_12417,inst_12474,inst_12447,inst_12383,inst_12591,inst_12397,inst_12501,inst_12416,inst_12396,inst_12395,inst_12398,inst_12502,inst_12437,inst_12590,inst_12506,inst_12391,inst_12418,inst_12430,inst_12394,inst_12424,inst_12585,inst_12578,inst_12411,inst_12408,inst_12589,inst_12503,inst_12387,inst_12384,inst_12586,inst_12393,inst_12444,inst_12756,inst_12758,inst_12759,inst_12760,inst_12866,state_val_13386,c__6459__auto___13801){
return (function (state_12864){
var state_val_12865 = (state_12864[(1)]);
if((state_val_12865 === (7))){
var inst_12856 = (state_12864[(2)]);
var state_12864__$1 = (function (){var statearr_13531 = state_12864;
(statearr_13531[(7)] = inst_12856);

return statearr_13531;
})();
var statearr_13532_13905 = state_12864__$1;
(statearr_13532_13905[(2)] = null);

(statearr_13532_13905[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12865 === (20))){
var state_12864__$1 = state_12864;
var statearr_13533_13906 = state_12864__$1;
(statearr_13533_13906[(2)] = null);

(statearr_13533_13906[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12865 === (27))){
var inst_12819 = (state_12864[(2)]);
var inst_12820 = cljs.core.deref.call(null,farn.core.player_animation);
var inst_12821 = cljs.core._EQ_.call(null,inst_12820,new cljs.core.Keyword(null,"running","running",1554969103));
var state_12864__$1 = (function (){var statearr_13534 = state_12864;
(statearr_13534[(8)] = inst_12819);

return statearr_13534;
})();
if(inst_12821){
var statearr_13535_13907 = state_12864__$1;
(statearr_13535_13907[(1)] = (32));

} else {
var statearr_13536_13908 = state_12864__$1;
(statearr_13536_13908[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12865 === (1))){
var state_12864__$1 = state_12864;
var statearr_13537_13909 = state_12864__$1;
(statearr_13537_13909[(2)] = null);

(statearr_13537_13909[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12865 === (24))){
var state_12864__$1 = state_12864;
var statearr_13538_13910 = state_12864__$1;
(statearr_13538_13910[(2)] = null);

(statearr_13538_13910[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12865 === (39))){
var state_12864__$1 = state_12864;
var statearr_13539_13911 = state_12864__$1;
(statearr_13539_13911[(2)] = null);

(statearr_13539_13911[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12865 === (4))){
var inst_12854 = cljs.core.deref.call(null,farn.core.player_animation);
var state_12864__$1 = state_12864;
var G__13540_13912 = (((inst_12854 instanceof cljs.core.Keyword))?inst_12854.fqn:null);
switch (G__13540_13912) {
case "running":
var statearr_13541_13914 = state_12864__$1;
(statearr_13541_13914[(1)] = (20));


break;
case "standing":
var statearr_13542_13915 = state_12864__$1;
(statearr_13542_13915[(1)] = (8));


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(inst_12854)].join('')));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12865 === (15))){
var inst_12787 = (state_12864[(2)]);
var state_12864__$1 = (function (){var statearr_13543 = state_12864;
(statearr_13543[(9)] = inst_12787);

return statearr_13543;
})();
var statearr_13544_13916 = state_12864__$1;
(statearr_13544_13916[(2)] = null);

(statearr_13544_13916[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12865 === (21))){
var inst_12796 = cljs.core.deref.call(null,farn.core.player_animation);
var inst_12797 = cljs.core._EQ_.call(null,inst_12796,new cljs.core.Keyword(null,"running","running",1554969103));
var state_12864__$1 = state_12864;
if(inst_12797){
var statearr_13545_13917 = state_12864__$1;
(statearr_13545_13917[(1)] = (23));

} else {
var statearr_13546_13918 = state_12864__$1;
(statearr_13546_13918[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12865 === (31))){
var inst_12817 = (state_12864[(2)]);
var state_12864__$1 = state_12864;
var statearr_13547_13919 = state_12864__$1;
(statearr_13547_13919[(2)] = inst_12817);

(statearr_13547_13919[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12865 === (32))){
var inst_12823 = player_walking_texs.call(null,(1));
var inst_12824 = player.setTexture(inst_12823);
var inst_12825 = (0);
var state_12864__$1 = (function (){var statearr_13548 = state_12864;
(statearr_13548[(10)] = inst_12825);

(statearr_13548[(11)] = inst_12824);

return statearr_13548;
})();
var statearr_13549_13920 = state_12864__$1;
(statearr_13549_13920[(2)] = null);

(statearr_13549_13920[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12865 === (40))){
var inst_12841 = (state_12864[(2)]);
var state_12864__$1 = state_12864;
var statearr_13550_13921 = state_12864__$1;
(statearr_13550_13921[(2)] = inst_12841);

(statearr_13550_13921[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12865 === (33))){
var state_12864__$1 = state_12864;
var statearr_13551_13922 = state_12864__$1;
(statearr_13551_13922[(2)] = null);

(statearr_13551_13922[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12865 === (13))){
var inst_12791 = (state_12864[(2)]);
var state_12864__$1 = state_12864;
var statearr_13552_13923 = state_12864__$1;
(statearr_13552_13923[(2)] = inst_12791);

(statearr_13552_13923[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12865 === (22))){
var inst_12852 = (state_12864[(2)]);
var state_12864__$1 = state_12864;
var statearr_13553_13924 = state_12864__$1;
(statearr_13553_13924[(2)] = inst_12852);

(statearr_13553_13924[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12865 === (36))){
var inst_12843 = (state_12864[(2)]);
var state_12864__$1 = state_12864;
var statearr_13554_13925 = state_12864__$1;
(statearr_13554_13925[(2)] = inst_12843);

(statearr_13554_13925[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12865 === (29))){
var inst_12801 = (state_12864[(12)]);
var inst_12813 = (inst_12801 + (1));
var inst_12801__$1 = inst_12813;
var state_12864__$1 = (function (){var statearr_13555 = state_12864;
(statearr_13555[(12)] = inst_12801__$1);

return statearr_13555;
})();
var statearr_13556_13926 = state_12864__$1;
(statearr_13556_13926[(2)] = null);

(statearr_13556_13926[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12865 === (6))){
var inst_12860 = (state_12864[(2)]);
var state_12864__$1 = state_12864;
var statearr_13557_13927 = state_12864__$1;
(statearr_13557_13927[(2)] = inst_12860);

(statearr_13557_13927[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12865 === (28))){
var inst_12801 = (state_12864[(12)]);
var inst_12805 = (state_12864[(2)]);
var inst_12806 = (inst_12801 / farn.core.player_bound_length);
var inst_12807 = (Math.PI * inst_12806);
var inst_12808 = Math.sin.call(null,inst_12807);
var inst_12809 = (farn.core.player_bound_height * inst_12808);
var inst_12810 = farn.sprite.set_pivot_BANG_.call(null,player,(-1),inst_12809);
var inst_12811 = (inst_12801 < farn.core.player_bound_length);
var state_12864__$1 = (function (){var statearr_13558 = state_12864;
(statearr_13558[(13)] = inst_12805);

(statearr_13558[(14)] = inst_12810);

return statearr_13558;
})();
if(cljs.core.truth_(inst_12811)){
var statearr_13559_13928 = state_12864__$1;
(statearr_13559_13928[(1)] = (29));

} else {
var statearr_13560_13929 = state_12864__$1;
(statearr_13560_13929[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12865 === (25))){
var inst_12850 = (state_12864[(2)]);
var state_12864__$1 = state_12864;
var statearr_13561_13930 = state_12864__$1;
(statearr_13561_13930[(2)] = inst_12850);

(statearr_13561_13930[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12865 === (34))){
var inst_12846 = (state_12864[(2)]);
var state_12864__$1 = (function (){var statearr_13562 = state_12864;
(statearr_13562[(15)] = inst_12846);

return statearr_13562;
})();
var statearr_13563_13931 = state_12864__$1;
(statearr_13563_13931[(2)] = null);

(statearr_13563_13931[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12865 === (17))){
var inst_12767 = (state_12864[(16)]);
var inst_12780 = (inst_12767 + (1));
var inst_12781 = cljs.core.mod.call(null,inst_12780,(4));
var inst_12767__$1 = inst_12781;
var state_12864__$1 = (function (){var statearr_13564 = state_12864;
(statearr_13564[(16)] = inst_12767__$1);

return statearr_13564;
})();
var statearr_13565_13932 = state_12864__$1;
(statearr_13565_13932[(2)] = null);

(statearr_13565_13932[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12865 === (3))){
var inst_12862 = (state_12864[(2)]);
var state_12864__$1 = state_12864;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12864__$1,inst_12862);
} else {
if((state_val_12865 === (12))){
var state_12864__$1 = state_12864;
var statearr_13566_13933 = state_12864__$1;
(statearr_13566_13933[(2)] = null);

(statearr_13566_13933[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12865 === (2))){
var state_12864__$1 = state_12864;
var statearr_13567_13934 = state_12864__$1;
(statearr_13567_13934[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12865 === (23))){
var inst_12799 = player_walking_texs.call(null,(0));
var inst_12800 = player.setTexture(inst_12799);
var inst_12801 = (0);
var state_12864__$1 = (function (){var statearr_13569 = state_12864;
(statearr_13569[(12)] = inst_12801);

(statearr_13569[(17)] = inst_12800);

return statearr_13569;
})();
var statearr_13570_13935 = state_12864__$1;
(statearr_13570_13935[(2)] = null);

(statearr_13570_13935[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12865 === (35))){
var inst_12827 = farn.events.next_frame.call(null);
var state_12864__$1 = state_12864;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12864__$1,(37),inst_12827);
} else {
if((state_val_12865 === (19))){
var inst_12785 = (state_12864[(2)]);
var state_12864__$1 = state_12864;
var statearr_13571_13936 = state_12864__$1;
(statearr_13571_13936[(2)] = inst_12785);

(statearr_13571_13936[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12865 === (11))){
var inst_12767 = (0);
var state_12864__$1 = (function (){var statearr_13572 = state_12864;
(statearr_13572[(16)] = inst_12767);

return statearr_13572;
})();
var statearr_13573_13937 = state_12864__$1;
(statearr_13573_13937[(2)] = null);

(statearr_13573_13937[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12865 === (9))){
var inst_12764 = cljs.core.deref.call(null,farn.core.player_animation);
var inst_12765 = cljs.core._EQ_.call(null,inst_12764,new cljs.core.Keyword(null,"standing","standing",-1248340762));
var state_12864__$1 = state_12864;
if(inst_12765){
var statearr_13574_13938 = state_12864__$1;
(statearr_13574_13938[(1)] = (11));

} else {
var statearr_13575_13939 = state_12864__$1;
(statearr_13575_13939[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12865 === (5))){
var state_12864__$1 = state_12864;
var statearr_13576_13940 = state_12864__$1;
(statearr_13576_13940[(2)] = null);

(statearr_13576_13940[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12865 === (14))){
var inst_12769 = farn.utils.rand_between.call(null,(300),(600));
var inst_12770 = cljs.core.async.timeout.call(null,inst_12769);
var state_12864__$1 = state_12864;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12864__$1,(16),inst_12770);
} else {
if((state_val_12865 === (26))){
var inst_12803 = farn.events.next_frame.call(null);
var state_12864__$1 = state_12864;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12864__$1,(28),inst_12803);
} else {
if((state_val_12865 === (16))){
var inst_12767 = (state_12864[(16)]);
var inst_12772 = (state_12864[(2)]);
var inst_12773 = cljs.core.nth.call(null,player_standing_texs,inst_12767);
var inst_12774 = player.setTexture(inst_12773);
var inst_12775 = player_standing_sway.call(null,inst_12767);
var inst_12776 = farn.sprite.set_pivot_BANG_.call(null,player,inst_12775,(0));
var inst_12777 = cljs.core.deref.call(null,farn.core.player_animation);
var inst_12778 = cljs.core._EQ_.call(null,inst_12777,new cljs.core.Keyword(null,"standing","standing",-1248340762));
var state_12864__$1 = (function (){var statearr_13577 = state_12864;
(statearr_13577[(18)] = inst_12776);

(statearr_13577[(19)] = inst_12772);

(statearr_13577[(20)] = inst_12774);

return statearr_13577;
})();
if(inst_12778){
var statearr_13578_13941 = state_12864__$1;
(statearr_13578_13941[(1)] = (17));

} else {
var statearr_13579_13942 = state_12864__$1;
(statearr_13579_13942[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12865 === (38))){
var inst_12825 = (state_12864[(10)]);
var inst_12837 = (inst_12825 + (1));
var inst_12825__$1 = inst_12837;
var state_12864__$1 = (function (){var statearr_13580 = state_12864;
(statearr_13580[(10)] = inst_12825__$1);

return statearr_13580;
})();
var statearr_13581_13943 = state_12864__$1;
(statearr_13581_13943[(2)] = null);

(statearr_13581_13943[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12865 === (30))){
var state_12864__$1 = state_12864;
var statearr_13582_13944 = state_12864__$1;
(statearr_13582_13944[(2)] = null);

(statearr_13582_13944[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12865 === (10))){
var inst_12793 = (state_12864[(2)]);
var state_12864__$1 = state_12864;
var statearr_13583_13945 = state_12864__$1;
(statearr_13583_13945[(2)] = inst_12793);

(statearr_13583_13945[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12865 === (18))){
var state_12864__$1 = state_12864;
var statearr_13584_13946 = state_12864__$1;
(statearr_13584_13946[(2)] = null);

(statearr_13584_13946[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12865 === (37))){
var inst_12825 = (state_12864[(10)]);
var inst_12829 = (state_12864[(2)]);
var inst_12830 = (inst_12825 / farn.core.player_bound_length);
var inst_12831 = (Math.PI * inst_12830);
var inst_12832 = Math.sin.call(null,inst_12831);
var inst_12833 = (farn.core.player_bound_height * inst_12832);
var inst_12834 = farn.sprite.set_pivot_BANG_.call(null,player,(1),inst_12833);
var inst_12835 = (inst_12825 < farn.core.player_bound_length);
var state_12864__$1 = (function (){var statearr_13585 = state_12864;
(statearr_13585[(21)] = inst_12834);

(statearr_13585[(22)] = inst_12829);

return statearr_13585;
})();
if(cljs.core.truth_(inst_12835)){
var statearr_13586_13947 = state_12864__$1;
(statearr_13586_13947[(1)] = (38));

} else {
var statearr_13587_13948 = state_12864__$1;
(statearr_13587_13948[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12865 === (8))){
var state_12864__$1 = state_12864;
var statearr_13588_13949 = state_12864__$1;
(statearr_13588_13949[(2)] = null);

(statearr_13588_13949[(1)] = (9));


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
});})(add_cell_BANG_,depth_compare,player_stars_text,player_standing_texs,player_shadow,close_QMARK_,player_pos,obstacle_types,polar_object_coords,trees,player_standing_sway,game_sprites,loader,player_walking_texs,shadow_tex,tex,c__6459__auto____$1,hit_sfx,lobster_big,game_map,star_tex,remove_cell_BANG_,tufts,game_space,pickup_textures,perlin_channel,title_text,floor_objects,pickup_sfx,tilemap,make_pickup,varela,wait,player,player_stars_icon,inst_12427,inst_12388,inst_12421,inst_12417,inst_12474,inst_12447,inst_12383,inst_12591,inst_12397,inst_12501,inst_12416,inst_12396,inst_12395,inst_12398,inst_12502,inst_12437,inst_12590,inst_12506,inst_12391,inst_12418,inst_12430,inst_12394,inst_12424,inst_12585,inst_12578,inst_12411,inst_12408,inst_12589,inst_12503,inst_12387,inst_12384,inst_12586,inst_12393,inst_12444,inst_12756,inst_12758,inst_12759,inst_12760,inst_12866,state_val_13386,c__6459__auto___13801))
;
return ((function (switch__6444__auto__,add_cell_BANG_,depth_compare,player_stars_text,player_standing_texs,player_shadow,close_QMARK_,player_pos,obstacle_types,polar_object_coords,trees,player_standing_sway,game_sprites,loader,player_walking_texs,shadow_tex,tex,c__6459__auto____$1,hit_sfx,lobster_big,game_map,star_tex,remove_cell_BANG_,tufts,game_space,pickup_textures,perlin_channel,title_text,floor_objects,pickup_sfx,tilemap,make_pickup,varela,wait,player,player_stars_icon,inst_12427,inst_12388,inst_12421,inst_12417,inst_12474,inst_12447,inst_12383,inst_12591,inst_12397,inst_12501,inst_12416,inst_12396,inst_12395,inst_12398,inst_12502,inst_12437,inst_12590,inst_12506,inst_12391,inst_12418,inst_12430,inst_12394,inst_12424,inst_12585,inst_12578,inst_12411,inst_12408,inst_12589,inst_12503,inst_12387,inst_12384,inst_12586,inst_12393,inst_12444,inst_12756,inst_12758,inst_12759,inst_12760,inst_12866,state_val_13386,c__6459__auto___13801){
return (function() {
var state_machine__6445__auto__ = null;
var state_machine__6445__auto____0 = (function (){
var statearr_13592 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13592[(0)] = state_machine__6445__auto__);

(statearr_13592[(1)] = (1));

return statearr_13592;
});
var state_machine__6445__auto____1 = (function (state_12864){
while(true){
var ret_value__6446__auto__ = (function (){try{while(true){
var result__6447__auto__ = switch__6444__auto__.call(null,state_12864);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6447__auto__;
}
break;
}
}catch (e13593){if((e13593 instanceof Object)){
var ex__6448__auto__ = e13593;
var statearr_13594_13950 = state_12864;
(statearr_13594_13950[(5)] = ex__6448__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12864);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13593;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13951 = state_12864;
state_12864 = G__13951;
continue;
} else {
return ret_value__6446__auto__;
}
break;
}
});
state_machine__6445__auto__ = function(state_12864){
switch(arguments.length){
case 0:
return state_machine__6445__auto____0.call(this);
case 1:
return state_machine__6445__auto____1.call(this,state_12864);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6445__auto____0;
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6445__auto____1;
return state_machine__6445__auto__;
})()
;})(switch__6444__auto__,add_cell_BANG_,depth_compare,player_stars_text,player_standing_texs,player_shadow,close_QMARK_,player_pos,obstacle_types,polar_object_coords,trees,player_standing_sway,game_sprites,loader,player_walking_texs,shadow_tex,tex,c__6459__auto____$1,hit_sfx,lobster_big,game_map,star_tex,remove_cell_BANG_,tufts,game_space,pickup_textures,perlin_channel,title_text,floor_objects,pickup_sfx,tilemap,make_pickup,varela,wait,player,player_stars_icon,inst_12427,inst_12388,inst_12421,inst_12417,inst_12474,inst_12447,inst_12383,inst_12591,inst_12397,inst_12501,inst_12416,inst_12396,inst_12395,inst_12398,inst_12502,inst_12437,inst_12590,inst_12506,inst_12391,inst_12418,inst_12430,inst_12394,inst_12424,inst_12585,inst_12578,inst_12411,inst_12408,inst_12589,inst_12503,inst_12387,inst_12384,inst_12586,inst_12393,inst_12444,inst_12756,inst_12758,inst_12759,inst_12760,inst_12866,state_val_13386,c__6459__auto___13801))
})();
var state__6461__auto__ = (function (){var statearr_13595 = f__6460__auto__.call(null);
(statearr_13595[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6459__auto____$1);

return statearr_13595;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6461__auto__);
});
;})(add_cell_BANG_,depth_compare,player_stars_text,player_standing_texs,player_shadow,close_QMARK_,player_pos,obstacle_types,polar_object_coords,trees,player_standing_sway,game_sprites,loader,player_walking_texs,shadow_tex,tex,c__6459__auto____$1,hit_sfx,lobster_big,game_map,star_tex,remove_cell_BANG_,tufts,game_space,pickup_textures,perlin_channel,title_text,floor_objects,pickup_sfx,tilemap,make_pickup,varela,wait,player,player_stars_icon,inst_12427,inst_12388,inst_12421,inst_12417,inst_12474,inst_12447,inst_12383,inst_12591,inst_12397,inst_12501,inst_12416,inst_12396,inst_12395,inst_12398,inst_12502,inst_12437,inst_12590,inst_12506,inst_12391,inst_12418,inst_12430,inst_12394,inst_12424,inst_12585,inst_12578,inst_12411,inst_12408,inst_12589,inst_12503,inst_12387,inst_12384,inst_12586,inst_12393,inst_12444,inst_12756,inst_12758,inst_12759,inst_12760,inst_12866,state_val_13386,c__6459__auto___13801))
})();
var inst_12868 = cljs.core.async.impl.dispatch.run.call(null,inst_12867);
var inst_12869 = farn.spatial.which_cell.call(null,inst_12589,farn.core.cell_size);
var inst_12870 = inst_12590.call(null,inst_12869);
var inst_12871 = farn.core.main_stage.children;
var inst_12872 = inst_12871.sort(inst_12502);
var inst_12873 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_12874 = [(0),(0)];
var inst_12875 = (new cljs.core.PersistentVector(null,2,(5),inst_12873,inst_12874,null));
var inst_12876 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_12877 = [(0),(0)];
var inst_12878 = (new cljs.core.PersistentVector(null,2,(5),inst_12876,inst_12877,null));
var inst_12879 = [inst_12878];
var inst_12880 = cljs.core.PersistentHashSet.fromArray(inst_12879,true);
var inst_12881 = (0);
var inst_12882 = inst_12875;
var inst_12883 = (0);
var inst_12884 = (0);
var inst_12885 = (0);
var inst_12886 = inst_12880;
var inst_12887 = (0);
var inst_12888 = (0);
var state_13385__$1 = (function (){var statearr_13596 = state_13385;
(statearr_13596[(25)] = inst_12882);

(statearr_13596[(144)] = inst_12870);

(statearr_13596[(145)] = inst_12758);

(statearr_13596[(105)] = inst_12887);

(statearr_13596[(146)] = inst_12868);

(statearr_13596[(112)] = inst_12883);

(statearr_13596[(147)] = inst_12760);

(statearr_13596[(148)] = inst_12756);

(statearr_13596[(118)] = inst_12884);

(statearr_13596[(149)] = inst_12872);

(statearr_13596[(150)] = inst_12759);

(statearr_13596[(32)] = inst_12886);

(statearr_13596[(97)] = inst_12881);

(statearr_13596[(126)] = inst_12885);

(statearr_13596[(15)] = inst_12888);

return statearr_13596;
})();
var statearr_13597_13952 = state_13385__$1;
(statearr_13597_13952[(2)] = null);

(statearr_13597_13952[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13386 === (3))){
var inst_12384 = (state_13385[(47)]);
var inst_12391 = (state_13385[(2)]);
var state_13385__$1 = (function (){var statearr_13598 = state_13385;
(statearr_13598[(68)] = inst_12391);

return statearr_13598;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13385__$1,(4),inst_12384);
} else {
if((state_val_13386 === (12))){
var inst_12427 = (state_13385[(60)]);
var inst_12388 = (state_13385[(61)]);
var inst_12421 = (state_13385[(62)]);
var inst_12417 = (state_13385[(63)]);
var inst_12474 = (state_13385[(51)]);
var inst_12447 = (state_13385[(78)]);
var inst_12383 = (state_13385[(45)]);
var inst_12591 = (state_13385[(40)]);
var inst_12397 = (state_13385[(64)]);
var inst_12501 = (state_13385[(26)]);
var inst_12416 = (state_13385[(65)]);
var inst_12396 = (state_13385[(30)]);
var inst_12395 = (state_13385[(66)]);
var inst_12398 = (state_13385[(31)]);
var inst_12502 = (state_13385[(107)]);
var inst_12437 = (state_13385[(67)]);
var inst_12590 = (state_13385[(108)]);
var inst_12506 = (state_13385[(110)]);
var inst_12391 = (state_13385[(68)]);
var inst_12418 = (state_13385[(69)]);
var inst_12430 = (state_13385[(70)]);
var inst_12394 = (state_13385[(71)]);
var inst_12424 = (state_13385[(72)]);
var inst_12585 = (state_13385[(119)]);
var inst_12578 = (state_13385[(120)]);
var inst_12411 = (state_13385[(73)]);
var inst_12408 = (state_13385[(74)]);
var inst_12589 = (state_13385[(124)]);
var inst_12503 = (state_13385[(88)]);
var inst_12387 = (state_13385[(75)]);
var inst_12384 = (state_13385[(47)]);
var inst_12586 = (state_13385[(19)]);
var inst_12393 = (state_13385[(76)]);
var inst_12444 = (state_13385[(77)]);
var inst_12501__$1 = (state_13385[(2)]);
var inst_12502__$1 = (function (){var player_stars_text = inst_12421;
var player_standing_texs = inst_12408;
var player_shadow = inst_12398;
var obstacle_types = inst_12430;
var trees = inst_12437;
var player_standing_sway = inst_12411;
var loader = inst_12383;
var player_walking_texs = inst_12416;
var shadow_tex = inst_12397;
var tex = inst_12395;
var hit_sfx = inst_12501__$1;
var lobster_big = inst_12387;
var star_tex = inst_12417;
var tufts = inst_12444;
var pickup_textures = inst_12424;
var perlin_channel = inst_12384;
var title_text = inst_12394;
var floor_objects = inst_12427;
var pickup_sfx = inst_12474;
var tilemap = inst_12393;
var make_pickup = inst_12447;
var varela = inst_12388;
var wait = inst_12391;
var player = inst_12396;
var player_stars_icon = inst_12418;
return ((function (player_stars_text,player_standing_texs,player_shadow,obstacle_types,trees,player_standing_sway,loader,player_walking_texs,shadow_tex,tex,hit_sfx,lobster_big,star_tex,tufts,pickup_textures,perlin_channel,title_text,floor_objects,pickup_sfx,tilemap,make_pickup,varela,wait,player,player_stars_icon,inst_12427,inst_12388,inst_12421,inst_12417,inst_12474,inst_12447,inst_12383,inst_12591,inst_12397,inst_12501,inst_12416,inst_12396,inst_12395,inst_12398,inst_12502,inst_12437,inst_12590,inst_12506,inst_12391,inst_12418,inst_12430,inst_12394,inst_12424,inst_12585,inst_12578,inst_12411,inst_12408,inst_12589,inst_12503,inst_12387,inst_12384,inst_12586,inst_12393,inst_12444,inst_12501__$1,state_val_13386,c__6459__auto___13801){
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
;})(player_stars_text,player_standing_texs,player_shadow,obstacle_types,trees,player_standing_sway,loader,player_walking_texs,shadow_tex,tex,hit_sfx,lobster_big,star_tex,tufts,pickup_textures,perlin_channel,title_text,floor_objects,pickup_sfx,tilemap,make_pickup,varela,wait,player,player_stars_icon,inst_12427,inst_12388,inst_12421,inst_12417,inst_12474,inst_12447,inst_12383,inst_12591,inst_12397,inst_12501,inst_12416,inst_12396,inst_12395,inst_12398,inst_12502,inst_12437,inst_12590,inst_12506,inst_12391,inst_12418,inst_12430,inst_12394,inst_12424,inst_12585,inst_12578,inst_12411,inst_12408,inst_12589,inst_12503,inst_12387,inst_12384,inst_12586,inst_12393,inst_12444,inst_12501__$1,state_val_13386,c__6459__auto___13801))
})();
var inst_12503__$1 = (function (){var depth_compare = inst_12502__$1;
var player_stars_text = inst_12421;
var player_standing_texs = inst_12408;
var player_shadow = inst_12398;
var obstacle_types = inst_12430;
var trees = inst_12437;
var player_standing_sway = inst_12411;
var loader = inst_12383;
var player_walking_texs = inst_12416;
var shadow_tex = inst_12397;
var tex = inst_12395;
var hit_sfx = inst_12501__$1;
var lobster_big = inst_12387;
var star_tex = inst_12417;
var tufts = inst_12444;
var pickup_textures = inst_12424;
var perlin_channel = inst_12384;
var title_text = inst_12394;
var floor_objects = inst_12427;
var pickup_sfx = inst_12474;
var tilemap = inst_12393;
var make_pickup = inst_12447;
var varela = inst_12388;
var wait = inst_12391;
var player = inst_12396;
var player_stars_icon = inst_12418;
return ((function (depth_compare,player_stars_text,player_standing_texs,player_shadow,obstacle_types,trees,player_standing_sway,loader,player_walking_texs,shadow_tex,tex,hit_sfx,lobster_big,star_tex,tufts,pickup_textures,perlin_channel,title_text,floor_objects,pickup_sfx,tilemap,make_pickup,varela,wait,player,player_stars_icon,inst_12427,inst_12388,inst_12421,inst_12417,inst_12474,inst_12447,inst_12383,inst_12591,inst_12397,inst_12501,inst_12416,inst_12396,inst_12395,inst_12398,inst_12502,inst_12437,inst_12590,inst_12506,inst_12391,inst_12418,inst_12430,inst_12394,inst_12424,inst_12585,inst_12578,inst_12411,inst_12408,inst_12589,inst_12503,inst_12387,inst_12384,inst_12586,inst_12393,inst_12444,inst_12501__$1,inst_12502__$1,state_val_13386,c__6459__auto___13801){
return (function (obj_pos,obj_sprite,player_x,player_y,rhx,rhy){
var vec__13599 = obj_pos;
var ox = cljs.core.nth.call(null,vec__13599,(0),null);
var oy = cljs.core.nth.call(null,vec__13599,(1),null);
var p__GT_t = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(ox - player_x),(oy - player_y)], null);
var vec__13600 = p__GT_t;
var p__GT_t_x = cljs.core.nth.call(null,vec__13600,(0),null);
var p__GT_t_y = cljs.core.nth.call(null,vec__13600,(1),null);
var vec__13601 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((rhx * p__GT_t_y) + (rhy * p__GT_t_x)),((rhx * p__GT_t_x) - (rhy * p__GT_t_y))], null);
var rx = cljs.core.nth.call(null,vec__13601,(0),null);
var ry = cljs.core.nth.call(null,vec__13601,(1),null);
var fx = (rx + player_x);
var fy = ((ry / farn.core.isometric_factor) + player_y);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fx,fy], null);
});
;})(depth_compare,player_stars_text,player_standing_texs,player_shadow,obstacle_types,trees,player_standing_sway,loader,player_walking_texs,shadow_tex,tex,hit_sfx,lobster_big,star_tex,tufts,pickup_textures,perlin_channel,title_text,floor_objects,pickup_sfx,tilemap,make_pickup,varela,wait,player,player_stars_icon,inst_12427,inst_12388,inst_12421,inst_12417,inst_12474,inst_12447,inst_12383,inst_12591,inst_12397,inst_12501,inst_12416,inst_12396,inst_12395,inst_12398,inst_12502,inst_12437,inst_12590,inst_12506,inst_12391,inst_12418,inst_12430,inst_12394,inst_12424,inst_12585,inst_12578,inst_12411,inst_12408,inst_12589,inst_12503,inst_12387,inst_12384,inst_12586,inst_12393,inst_12444,inst_12501__$1,inst_12502__$1,state_val_13386,c__6459__auto___13801))
})();
var inst_12506__$1 = (function (){var depth_compare = inst_12502__$1;
var player_stars_text = inst_12421;
var player_standing_texs = inst_12408;
var player_shadow = inst_12398;
var obstacle_types = inst_12430;
var polar_object_coords = inst_12503__$1;
var trees = inst_12437;
var player_standing_sway = inst_12411;
var loader = inst_12383;
var player_walking_texs = inst_12416;
var shadow_tex = inst_12397;
var tex = inst_12395;
var hit_sfx = inst_12501__$1;
var lobster_big = inst_12387;
var star_tex = inst_12417;
var tufts = inst_12444;
var pickup_textures = inst_12424;
var perlin_channel = inst_12384;
var title_text = inst_12394;
var floor_objects = inst_12427;
var pickup_sfx = inst_12474;
var tilemap = inst_12393;
var make_pickup = inst_12447;
var varela = inst_12388;
var wait = inst_12391;
var player = inst_12396;
var player_stars_icon = inst_12418;
return ((function (depth_compare,player_stars_text,player_standing_texs,player_shadow,obstacle_types,polar_object_coords,trees,player_standing_sway,loader,player_walking_texs,shadow_tex,tex,hit_sfx,lobster_big,star_tex,tufts,pickup_textures,perlin_channel,title_text,floor_objects,pickup_sfx,tilemap,make_pickup,varela,wait,player,player_stars_icon,inst_12427,inst_12388,inst_12421,inst_12417,inst_12474,inst_12447,inst_12383,inst_12591,inst_12397,inst_12501,inst_12416,inst_12396,inst_12395,inst_12398,inst_12502,inst_12437,inst_12590,inst_12506,inst_12391,inst_12418,inst_12430,inst_12394,inst_12424,inst_12585,inst_12578,inst_12411,inst_12408,inst_12589,inst_12503,inst_12387,inst_12384,inst_12586,inst_12393,inst_12444,inst_12501__$1,inst_12502__$1,inst_12503__$1,state_val_13386,c__6459__auto___13801){
return (function (p__12504,p__12505,threshold){
var vec__13602 = p__12504;
var x1 = cljs.core.nth.call(null,vec__13602,(0),null);
var y1 = cljs.core.nth.call(null,vec__13602,(1),null);
var vec__13603 = p__12505;
var x2 = cljs.core.nth.call(null,vec__13603,(0),null);
var y2 = cljs.core.nth.call(null,vec__13603,(1),null);
var dx = (x1 - x2);
var dy = (y1 - y2);
var d_squared = ((dx * dx) + (dy * dy));
return (d_squared < threshold);
});
;})(depth_compare,player_stars_text,player_standing_texs,player_shadow,obstacle_types,polar_object_coords,trees,player_standing_sway,loader,player_walking_texs,shadow_tex,tex,hit_sfx,lobster_big,star_tex,tufts,pickup_textures,perlin_channel,title_text,floor_objects,pickup_sfx,tilemap,make_pickup,varela,wait,player,player_stars_icon,inst_12427,inst_12388,inst_12421,inst_12417,inst_12474,inst_12447,inst_12383,inst_12591,inst_12397,inst_12501,inst_12416,inst_12396,inst_12395,inst_12398,inst_12502,inst_12437,inst_12590,inst_12506,inst_12391,inst_12418,inst_12430,inst_12394,inst_12424,inst_12585,inst_12578,inst_12411,inst_12408,inst_12589,inst_12503,inst_12387,inst_12384,inst_12586,inst_12393,inst_12444,inst_12501__$1,inst_12502__$1,inst_12503__$1,state_val_13386,c__6459__auto___13801))
})();
var inst_12507 = [(0),(1),(2),(3),(4)];
var inst_12508 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_12509 = [new cljs.core.Keyword(null,"static-floor-water-big","static-floor-water-big",1588138738),new cljs.core.Keyword(null,"static-floor-water-medium","static-floor-water-medium",1136261079),new cljs.core.Keyword(null,"static-floor-water-small","static-floor-water-small",1080050532)];
var inst_12510 = (new cljs.core.PersistentVector(null,3,(5),inst_12508,inst_12509,null));
var inst_12511 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_12512 = [new cljs.core.Keyword(null,"static-floor-path-big","static-floor-path-big",-1637038697),new cljs.core.Keyword(null,"static-floor-path-medium","static-floor-path-medium",-46847685),new cljs.core.Keyword(null,"static-floor-path-small","static-floor-path-small",477685180)];
var inst_12513 = (new cljs.core.PersistentVector(null,3,(5),inst_12511,inst_12512,null));
var inst_12514 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_12515 = [new cljs.core.Keyword(null,"static-rock-1","static-rock-1",-2031486616)];
var inst_12516 = (new cljs.core.PersistentVector(null,1,(5),inst_12514,inst_12515,null));
var inst_12517 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_12518 = [new cljs.core.Keyword(null,"static-lump-2","static-lump-2",225760930)];
var inst_12519 = (new cljs.core.PersistentVector(null,1,(5),inst_12517,inst_12518,null));
var inst_12520 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_12521 = [new cljs.core.Keyword(null,"static-floor-sand-big","static-floor-sand-big",953875278),new cljs.core.Keyword(null,"static-floor-sand-medium","static-floor-sand-medium",104159128),new cljs.core.Keyword(null,"static-floor-sand-small","static-floor-sand-small",-214159250)];
var inst_12522 = (new cljs.core.PersistentVector(null,3,(5),inst_12520,inst_12521,null));
var inst_12523 = farn.assets.make_range.call(null,"static-cactus-",(3));
var inst_12524 = cljs.core.concat.call(null,inst_12516,inst_12519,inst_12522,inst_12523);
var inst_12525 = cljs.core.vec.call(null,inst_12524);
var inst_12526 = farn.assets.make_range.call(null,"static-tree-",(20));
var inst_12527 = farn.assets.make_range.call(null,"static-tree-",(20));
var inst_12528 = farn.assets.make_range.call(null,"static-tree-",(20));
var inst_12529 = farn.assets.make_range.call(null,"static-tree-",(20));
var inst_12530 = farn.assets.make_range.call(null,"static-tree-",(20));
var inst_12531 = farn.assets.make_range.call(null,"static-tree-",(20));
var inst_12532 = farn.assets.make_range.call(null,"static-tree-",(20));
var inst_12533 = farn.assets.make_range.call(null,"static-tree-",(20));
var inst_12534 = farn.assets.make_range.call(null,"static-tree-",(20));
var inst_12535 = farn.assets.make_range.call(null,"static-tree-",(20));
var inst_12536 = farn.assets.make_range.call(null,"static-tree-",(20));
var inst_12537 = farn.assets.make_range.call(null,"static-tree-",(20));
var inst_12538 = farn.assets.make_range.call(null,"static-tree-",(20));
var inst_12539 = farn.assets.make_range.call(null,"static-tree-",(20));
var inst_12540 = farn.assets.make_range.call(null,"static-tree-",(20));
var inst_12541 = farn.assets.make_range.call(null,"static-tree-",(20));
var inst_12542 = farn.assets.make_range.call(null,"static-tree-",(20));
var inst_12543 = farn.assets.make_range.call(null,"static-tree-",(20));
var inst_12544 = farn.assets.make_range.call(null,"static-tree-",(20));
var inst_12545 = farn.assets.make_range.call(null,"static-tree-",(20));
var inst_12546 = farn.assets.make_range.call(null,"static-tree-",(20));
var inst_12547 = farn.assets.make_range.call(null,"static-tree-",(20));
var inst_12548 = farn.assets.make_range.call(null,"static-tree-",(20));
var inst_12549 = farn.assets.make_range.call(null,"static-tree-",(20));
var inst_12550 = farn.assets.make_range.call(null,"static-tree-",(20));
var inst_12551 = farn.assets.make_range.call(null,"static-tree-",(20));
var inst_12552 = farn.assets.make_range.call(null,"static-tree-",(20));
var inst_12553 = farn.assets.make_range.call(null,"static-giant-schroom-",(2));
var inst_12554 = farn.assets.make_range.call(null,"static-giant-schroom-",(2));
var inst_12555 = farn.assets.make_range.call(null,"static-giant-schroom-",(2));
var inst_12556 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_12557 = [new cljs.core.Keyword(null,"static-castle-1","static-castle-1",1559541979)];
var inst_12558 = (new cljs.core.PersistentVector(null,1,(5),inst_12556,inst_12557,null));
var inst_12559 = cljs.core.concat.call(null,inst_12526,inst_12527,inst_12528,inst_12529,inst_12530,inst_12531,inst_12532,inst_12533,inst_12534,inst_12535,inst_12536,inst_12537,inst_12538,inst_12539,inst_12540,inst_12541,inst_12542,inst_12543,inst_12544,inst_12545,inst_12546,inst_12547,inst_12548,inst_12549,inst_12550,inst_12551,inst_12552,inst_12553,inst_12554,inst_12555,inst_12558);
var inst_12560 = cljs.core.vec.call(null,inst_12559);
var inst_12561 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_12562 = [new cljs.core.Keyword(null,"static-schrub-1","static-schrub-1",1655867923)];
var inst_12563 = (new cljs.core.PersistentVector(null,1,(5),inst_12561,inst_12562,null));
var inst_12564 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_12565 = [new cljs.core.Keyword(null,"static-lump-1","static-lump-1",-811605060),new cljs.core.Keyword(null,"static-lump-3","static-lump-3",-581035868)];
var inst_12566 = (new cljs.core.PersistentVector(null,2,(5),inst_12564,inst_12565,null));
var inst_12567 = farn.assets.make_range.call(null,"static-schroom-",(3));
var inst_12568 = farn.assets.make_range.call(null,"static-flower-",(3));
var inst_12569 = farn.assets.make_range.call(null,"static-flower-",(3));
var inst_12570 = farn.assets.make_range.call(null,"static-flower-",(3));
var inst_12571 = farn.assets.make_range.call(null,"static-flower-",(3));
var inst_12572 = farn.assets.make_range.call(null,"static-flower-",(3));
var inst_12573 = farn.assets.make_range.call(null,"static-flower-",(3));
var inst_12574 = cljs.core.concat.call(null,inst_12563,inst_12566,inst_12567,inst_12568,inst_12569,inst_12570,inst_12571,inst_12572,inst_12573);
var inst_12575 = cljs.core.vec.call(null,inst_12574);
var inst_12576 = [inst_12510,inst_12513,inst_12525,inst_12560,inst_12575];
var inst_12577 = cljs.core.PersistentHashMap.fromArrays(inst_12507,inst_12576);
var inst_12578__$1 = farn.spatial.make_map_from_tilemap.call(null,inst_12393,inst_12577,(30000),(-10000),(10000),(-10000),(10000));
var inst_12583 = (function (){var depth_compare = inst_12502__$1;
var player_stars_text = inst_12421;
var player_standing_texs = inst_12408;
var player_shadow = inst_12398;
var close_QMARK_ = inst_12506__$1;
var obstacle_types = inst_12430;
var polar_object_coords = inst_12503__$1;
var trees = inst_12437;
var player_standing_sway = inst_12411;
var loader = inst_12383;
var player_walking_texs = inst_12416;
var shadow_tex = inst_12397;
var tex = inst_12395;
var hit_sfx = inst_12501__$1;
var lobster_big = inst_12387;
var game_map = inst_12578__$1;
var star_tex = inst_12417;
var tufts = inst_12444;
var pickup_textures = inst_12424;
var perlin_channel = inst_12384;
var title_text = inst_12394;
var floor_objects = inst_12427;
var pickup_sfx = inst_12474;
var tilemap = inst_12393;
var make_pickup = inst_12447;
var varela = inst_12388;
var wait = inst_12391;
var player = inst_12396;
var player_stars_icon = inst_12418;
return ((function (depth_compare,player_stars_text,player_standing_texs,player_shadow,close_QMARK_,obstacle_types,polar_object_coords,trees,player_standing_sway,loader,player_walking_texs,shadow_tex,tex,hit_sfx,lobster_big,game_map,star_tex,tufts,pickup_textures,perlin_channel,title_text,floor_objects,pickup_sfx,tilemap,make_pickup,varela,wait,player,player_stars_icon,inst_12427,inst_12388,inst_12421,inst_12417,inst_12474,inst_12447,inst_12383,inst_12591,inst_12397,inst_12501,inst_12416,inst_12396,inst_12395,inst_12398,inst_12502,inst_12437,inst_12590,inst_12506,inst_12391,inst_12418,inst_12430,inst_12394,inst_12424,inst_12585,inst_12578,inst_12411,inst_12408,inst_12589,inst_12503,inst_12387,inst_12384,inst_12586,inst_12393,inst_12444,inst_12501__$1,inst_12502__$1,inst_12503__$1,inst_12506__$1,inst_12507,inst_12508,inst_12509,inst_12510,inst_12511,inst_12512,inst_12513,inst_12514,inst_12515,inst_12516,inst_12517,inst_12518,inst_12519,inst_12520,inst_12521,inst_12522,inst_12523,inst_12524,inst_12525,inst_12526,inst_12527,inst_12528,inst_12529,inst_12530,inst_12531,inst_12532,inst_12533,inst_12534,inst_12535,inst_12536,inst_12537,inst_12538,inst_12539,inst_12540,inst_12541,inst_12542,inst_12543,inst_12544,inst_12545,inst_12546,inst_12547,inst_12548,inst_12549,inst_12550,inst_12551,inst_12552,inst_12553,inst_12554,inst_12555,inst_12556,inst_12557,inst_12558,inst_12559,inst_12560,inst_12561,inst_12562,inst_12563,inst_12564,inst_12565,inst_12566,inst_12567,inst_12568,inst_12569,inst_12570,inst_12571,inst_12572,inst_12573,inst_12574,inst_12575,inst_12576,inst_12577,inst_12578__$1,state_val_13386,c__6459__auto___13801){
return (function iter__12579(s__12580){
return (new cljs.core.LazySeq(null,((function (depth_compare,player_stars_text,player_standing_texs,player_shadow,close_QMARK_,obstacle_types,polar_object_coords,trees,player_standing_sway,loader,player_walking_texs,shadow_tex,tex,hit_sfx,lobster_big,game_map,star_tex,tufts,pickup_textures,perlin_channel,title_text,floor_objects,pickup_sfx,tilemap,make_pickup,varela,wait,player,player_stars_icon,inst_12427,inst_12388,inst_12421,inst_12417,inst_12474,inst_12447,inst_12383,inst_12591,inst_12397,inst_12501,inst_12416,inst_12396,inst_12395,inst_12398,inst_12502,inst_12437,inst_12590,inst_12506,inst_12391,inst_12418,inst_12430,inst_12394,inst_12424,inst_12585,inst_12578,inst_12411,inst_12408,inst_12589,inst_12503,inst_12387,inst_12384,inst_12586,inst_12393,inst_12444,inst_12501__$1,inst_12502__$1,inst_12503__$1,inst_12506__$1,inst_12507,inst_12508,inst_12509,inst_12510,inst_12511,inst_12512,inst_12513,inst_12514,inst_12515,inst_12516,inst_12517,inst_12518,inst_12519,inst_12520,inst_12521,inst_12522,inst_12523,inst_12524,inst_12525,inst_12526,inst_12527,inst_12528,inst_12529,inst_12530,inst_12531,inst_12532,inst_12533,inst_12534,inst_12535,inst_12536,inst_12537,inst_12538,inst_12539,inst_12540,inst_12541,inst_12542,inst_12543,inst_12544,inst_12545,inst_12546,inst_12547,inst_12548,inst_12549,inst_12550,inst_12551,inst_12552,inst_12553,inst_12554,inst_12555,inst_12556,inst_12557,inst_12558,inst_12559,inst_12560,inst_12561,inst_12562,inst_12563,inst_12564,inst_12565,inst_12566,inst_12567,inst_12568,inst_12569,inst_12570,inst_12571,inst_12572,inst_12573,inst_12574,inst_12575,inst_12576,inst_12577,inst_12578__$1,state_val_13386,c__6459__auto___13801){
return (function (){
var s__12580__$1 = s__12580;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__12580__$1);
if(temp__4126__auto__){
var s__12580__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12580__$2)){
var c__4384__auto__ = cljs.core.chunk_first.call(null,s__12580__$2);
var size__4385__auto__ = cljs.core.count.call(null,c__4384__auto__);
var b__12582 = cljs.core.chunk_buffer.call(null,size__4385__auto__);
if((function (){var i__12581 = (0);
while(true){
if((i__12581 < size__4385__auto__)){
var obj = cljs.core._nth.call(null,c__4384__auto__,i__12581);
cljs.core.chunk_append.call(null,b__12582,(function (){var type = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(obj);
var sprite = farn.core.make_sprite.call(null,farn.gfx.get_texture.call(null,type));
if(cljs.core.truth_(cljs.core.some.call(null,((function (i__12581,type,sprite,obj,c__4384__auto__,size__4385__auto__,b__12582,s__12580__$2,temp__4126__auto__,depth_compare,player_stars_text,player_standing_texs,player_shadow,close_QMARK_,obstacle_types,polar_object_coords,trees,player_standing_sway,loader,player_walking_texs,shadow_tex,tex,hit_sfx,lobster_big,game_map,star_tex,tufts,pickup_textures,perlin_channel,title_text,floor_objects,pickup_sfx,tilemap,make_pickup,varela,wait,player,player_stars_icon,inst_12427,inst_12388,inst_12421,inst_12417,inst_12474,inst_12447,inst_12383,inst_12591,inst_12397,inst_12501,inst_12416,inst_12396,inst_12395,inst_12398,inst_12502,inst_12437,inst_12590,inst_12506,inst_12391,inst_12418,inst_12430,inst_12394,inst_12424,inst_12585,inst_12578,inst_12411,inst_12408,inst_12589,inst_12503,inst_12387,inst_12384,inst_12586,inst_12393,inst_12444,inst_12501__$1,inst_12502__$1,inst_12503__$1,inst_12506__$1,inst_12507,inst_12508,inst_12509,inst_12510,inst_12511,inst_12512,inst_12513,inst_12514,inst_12515,inst_12516,inst_12517,inst_12518,inst_12519,inst_12520,inst_12521,inst_12522,inst_12523,inst_12524,inst_12525,inst_12526,inst_12527,inst_12528,inst_12529,inst_12530,inst_12531,inst_12532,inst_12533,inst_12534,inst_12535,inst_12536,inst_12537,inst_12538,inst_12539,inst_12540,inst_12541,inst_12542,inst_12543,inst_12544,inst_12545,inst_12546,inst_12547,inst_12548,inst_12549,inst_12550,inst_12551,inst_12552,inst_12553,inst_12554,inst_12555,inst_12556,inst_12557,inst_12558,inst_12559,inst_12560,inst_12561,inst_12562,inst_12563,inst_12564,inst_12565,inst_12566,inst_12567,inst_12568,inst_12569,inst_12570,inst_12571,inst_12572,inst_12573,inst_12574,inst_12575,inst_12576,inst_12577,inst_12578__$1,state_val_13386,c__6459__auto___13801){
return (function (p1__12355_SHARP_){
return cljs.core._EQ_.call(null,type,p1__12355_SHARP_);
});})(i__12581,type,sprite,obj,c__4384__auto__,size__4385__auto__,b__12582,s__12580__$2,temp__4126__auto__,depth_compare,player_stars_text,player_standing_texs,player_shadow,close_QMARK_,obstacle_types,polar_object_coords,trees,player_standing_sway,loader,player_walking_texs,shadow_tex,tex,hit_sfx,lobster_big,game_map,star_tex,tufts,pickup_textures,perlin_channel,title_text,floor_objects,pickup_sfx,tilemap,make_pickup,varela,wait,player,player_stars_icon,inst_12427,inst_12388,inst_12421,inst_12417,inst_12474,inst_12447,inst_12383,inst_12591,inst_12397,inst_12501,inst_12416,inst_12396,inst_12395,inst_12398,inst_12502,inst_12437,inst_12590,inst_12506,inst_12391,inst_12418,inst_12430,inst_12394,inst_12424,inst_12585,inst_12578,inst_12411,inst_12408,inst_12589,inst_12503,inst_12387,inst_12384,inst_12586,inst_12393,inst_12444,inst_12501__$1,inst_12502__$1,inst_12503__$1,inst_12506__$1,inst_12507,inst_12508,inst_12509,inst_12510,inst_12511,inst_12512,inst_12513,inst_12514,inst_12515,inst_12516,inst_12517,inst_12518,inst_12519,inst_12520,inst_12521,inst_12522,inst_12523,inst_12524,inst_12525,inst_12526,inst_12527,inst_12528,inst_12529,inst_12530,inst_12531,inst_12532,inst_12533,inst_12534,inst_12535,inst_12536,inst_12537,inst_12538,inst_12539,inst_12540,inst_12541,inst_12542,inst_12543,inst_12544,inst_12545,inst_12546,inst_12547,inst_12548,inst_12549,inst_12550,inst_12551,inst_12552,inst_12553,inst_12554,inst_12555,inst_12556,inst_12557,inst_12558,inst_12559,inst_12560,inst_12561,inst_12562,inst_12563,inst_12564,inst_12565,inst_12566,inst_12567,inst_12568,inst_12569,inst_12570,inst_12571,inst_12572,inst_12573,inst_12574,inst_12575,inst_12576,inst_12577,inst_12578__$1,state_val_13386,c__6459__auto___13801))
,floor_objects))){
sprite.floortile = true;

farn.sprite.set_anchor_BANG_.call(null,sprite,0.5,0.5);
} else {
}

return cljs.core.assoc.call(null,obj,new cljs.core.Keyword(null,"sprite","sprite",172516848),sprite,new cljs.core.Keyword(null,"scale","scale",-230427353),0.5);
})());

var G__13953 = (i__12581 + (1));
i__12581 = G__13953;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12582),iter__12579.call(null,cljs.core.chunk_rest.call(null,s__12580__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12582),null);
}
} else {
var obj = cljs.core.first.call(null,s__12580__$2);
return cljs.core.cons.call(null,(function (){var type = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(obj);
var sprite = farn.core.make_sprite.call(null,farn.gfx.get_texture.call(null,type));
if(cljs.core.truth_(cljs.core.some.call(null,((function (type,sprite,obj,s__12580__$2,temp__4126__auto__,depth_compare,player_stars_text,player_standing_texs,player_shadow,close_QMARK_,obstacle_types,polar_object_coords,trees,player_standing_sway,loader,player_walking_texs,shadow_tex,tex,hit_sfx,lobster_big,game_map,star_tex,tufts,pickup_textures,perlin_channel,title_text,floor_objects,pickup_sfx,tilemap,make_pickup,varela,wait,player,player_stars_icon,inst_12427,inst_12388,inst_12421,inst_12417,inst_12474,inst_12447,inst_12383,inst_12591,inst_12397,inst_12501,inst_12416,inst_12396,inst_12395,inst_12398,inst_12502,inst_12437,inst_12590,inst_12506,inst_12391,inst_12418,inst_12430,inst_12394,inst_12424,inst_12585,inst_12578,inst_12411,inst_12408,inst_12589,inst_12503,inst_12387,inst_12384,inst_12586,inst_12393,inst_12444,inst_12501__$1,inst_12502__$1,inst_12503__$1,inst_12506__$1,inst_12507,inst_12508,inst_12509,inst_12510,inst_12511,inst_12512,inst_12513,inst_12514,inst_12515,inst_12516,inst_12517,inst_12518,inst_12519,inst_12520,inst_12521,inst_12522,inst_12523,inst_12524,inst_12525,inst_12526,inst_12527,inst_12528,inst_12529,inst_12530,inst_12531,inst_12532,inst_12533,inst_12534,inst_12535,inst_12536,inst_12537,inst_12538,inst_12539,inst_12540,inst_12541,inst_12542,inst_12543,inst_12544,inst_12545,inst_12546,inst_12547,inst_12548,inst_12549,inst_12550,inst_12551,inst_12552,inst_12553,inst_12554,inst_12555,inst_12556,inst_12557,inst_12558,inst_12559,inst_12560,inst_12561,inst_12562,inst_12563,inst_12564,inst_12565,inst_12566,inst_12567,inst_12568,inst_12569,inst_12570,inst_12571,inst_12572,inst_12573,inst_12574,inst_12575,inst_12576,inst_12577,inst_12578__$1,state_val_13386,c__6459__auto___13801){
return (function (p1__12355_SHARP_){
return cljs.core._EQ_.call(null,type,p1__12355_SHARP_);
});})(type,sprite,obj,s__12580__$2,temp__4126__auto__,depth_compare,player_stars_text,player_standing_texs,player_shadow,close_QMARK_,obstacle_types,polar_object_coords,trees,player_standing_sway,loader,player_walking_texs,shadow_tex,tex,hit_sfx,lobster_big,game_map,star_tex,tufts,pickup_textures,perlin_channel,title_text,floor_objects,pickup_sfx,tilemap,make_pickup,varela,wait,player,player_stars_icon,inst_12427,inst_12388,inst_12421,inst_12417,inst_12474,inst_12447,inst_12383,inst_12591,inst_12397,inst_12501,inst_12416,inst_12396,inst_12395,inst_12398,inst_12502,inst_12437,inst_12590,inst_12506,inst_12391,inst_12418,inst_12430,inst_12394,inst_12424,inst_12585,inst_12578,inst_12411,inst_12408,inst_12589,inst_12503,inst_12387,inst_12384,inst_12586,inst_12393,inst_12444,inst_12501__$1,inst_12502__$1,inst_12503__$1,inst_12506__$1,inst_12507,inst_12508,inst_12509,inst_12510,inst_12511,inst_12512,inst_12513,inst_12514,inst_12515,inst_12516,inst_12517,inst_12518,inst_12519,inst_12520,inst_12521,inst_12522,inst_12523,inst_12524,inst_12525,inst_12526,inst_12527,inst_12528,inst_12529,inst_12530,inst_12531,inst_12532,inst_12533,inst_12534,inst_12535,inst_12536,inst_12537,inst_12538,inst_12539,inst_12540,inst_12541,inst_12542,inst_12543,inst_12544,inst_12545,inst_12546,inst_12547,inst_12548,inst_12549,inst_12550,inst_12551,inst_12552,inst_12553,inst_12554,inst_12555,inst_12556,inst_12557,inst_12558,inst_12559,inst_12560,inst_12561,inst_12562,inst_12563,inst_12564,inst_12565,inst_12566,inst_12567,inst_12568,inst_12569,inst_12570,inst_12571,inst_12572,inst_12573,inst_12574,inst_12575,inst_12576,inst_12577,inst_12578__$1,state_val_13386,c__6459__auto___13801))
,floor_objects))){
sprite.floortile = true;

farn.sprite.set_anchor_BANG_.call(null,sprite,0.5,0.5);
} else {
}

return cljs.core.assoc.call(null,obj,new cljs.core.Keyword(null,"sprite","sprite",172516848),sprite,new cljs.core.Keyword(null,"scale","scale",-230427353),0.5);
})(),iter__12579.call(null,cljs.core.rest.call(null,s__12580__$2)));
}
} else {
return null;
}
break;
}
});})(depth_compare,player_stars_text,player_standing_texs,player_shadow,close_QMARK_,obstacle_types,polar_object_coords,trees,player_standing_sway,loader,player_walking_texs,shadow_tex,tex,hit_sfx,lobster_big,game_map,star_tex,tufts,pickup_textures,perlin_channel,title_text,floor_objects,pickup_sfx,tilemap,make_pickup,varela,wait,player,player_stars_icon,inst_12427,inst_12388,inst_12421,inst_12417,inst_12474,inst_12447,inst_12383,inst_12591,inst_12397,inst_12501,inst_12416,inst_12396,inst_12395,inst_12398,inst_12502,inst_12437,inst_12590,inst_12506,inst_12391,inst_12418,inst_12430,inst_12394,inst_12424,inst_12585,inst_12578,inst_12411,inst_12408,inst_12589,inst_12503,inst_12387,inst_12384,inst_12586,inst_12393,inst_12444,inst_12501__$1,inst_12502__$1,inst_12503__$1,inst_12506__$1,inst_12507,inst_12508,inst_12509,inst_12510,inst_12511,inst_12512,inst_12513,inst_12514,inst_12515,inst_12516,inst_12517,inst_12518,inst_12519,inst_12520,inst_12521,inst_12522,inst_12523,inst_12524,inst_12525,inst_12526,inst_12527,inst_12528,inst_12529,inst_12530,inst_12531,inst_12532,inst_12533,inst_12534,inst_12535,inst_12536,inst_12537,inst_12538,inst_12539,inst_12540,inst_12541,inst_12542,inst_12543,inst_12544,inst_12545,inst_12546,inst_12547,inst_12548,inst_12549,inst_12550,inst_12551,inst_12552,inst_12553,inst_12554,inst_12555,inst_12556,inst_12557,inst_12558,inst_12559,inst_12560,inst_12561,inst_12562,inst_12563,inst_12564,inst_12565,inst_12566,inst_12567,inst_12568,inst_12569,inst_12570,inst_12571,inst_12572,inst_12573,inst_12574,inst_12575,inst_12576,inst_12577,inst_12578__$1,state_val_13386,c__6459__auto___13801))
,null,null));
});
;})(depth_compare,player_stars_text,player_standing_texs,player_shadow,close_QMARK_,obstacle_types,polar_object_coords,trees,player_standing_sway,loader,player_walking_texs,shadow_tex,tex,hit_sfx,lobster_big,game_map,star_tex,tufts,pickup_textures,perlin_channel,title_text,floor_objects,pickup_sfx,tilemap,make_pickup,varela,wait,player,player_stars_icon,inst_12427,inst_12388,inst_12421,inst_12417,inst_12474,inst_12447,inst_12383,inst_12591,inst_12397,inst_12501,inst_12416,inst_12396,inst_12395,inst_12398,inst_12502,inst_12437,inst_12590,inst_12506,inst_12391,inst_12418,inst_12430,inst_12394,inst_12424,inst_12585,inst_12578,inst_12411,inst_12408,inst_12589,inst_12503,inst_12387,inst_12384,inst_12586,inst_12393,inst_12444,inst_12501__$1,inst_12502__$1,inst_12503__$1,inst_12506__$1,inst_12507,inst_12508,inst_12509,inst_12510,inst_12511,inst_12512,inst_12513,inst_12514,inst_12515,inst_12516,inst_12517,inst_12518,inst_12519,inst_12520,inst_12521,inst_12522,inst_12523,inst_12524,inst_12525,inst_12526,inst_12527,inst_12528,inst_12529,inst_12530,inst_12531,inst_12532,inst_12533,inst_12534,inst_12535,inst_12536,inst_12537,inst_12538,inst_12539,inst_12540,inst_12541,inst_12542,inst_12543,inst_12544,inst_12545,inst_12546,inst_12547,inst_12548,inst_12549,inst_12550,inst_12551,inst_12552,inst_12553,inst_12554,inst_12555,inst_12556,inst_12557,inst_12558,inst_12559,inst_12560,inst_12561,inst_12562,inst_12563,inst_12564,inst_12565,inst_12566,inst_12567,inst_12568,inst_12569,inst_12570,inst_12571,inst_12572,inst_12573,inst_12574,inst_12575,inst_12576,inst_12577,inst_12578__$1,state_val_13386,c__6459__auto___13801))
})();
var inst_12584 = inst_12583.call(null,inst_12578__$1);
var inst_12585__$1 = cljs.core.doall.call(null,inst_12584);
var inst_12586__$1 = farn.spatial.hash_locations.call(null,inst_12585__$1,farn.core.cell_size);
var inst_12587 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_12588 = [(0),(0)];
var inst_12589__$1 = (new cljs.core.PersistentVector(null,2,(5),inst_12587,inst_12588,null));
var inst_12590__$1 = (function (){var depth_compare = inst_12502__$1;
var player_stars_text = inst_12421;
var player_standing_texs = inst_12408;
var player_shadow = inst_12398;
var close_QMARK_ = inst_12506__$1;
var player_pos = inst_12589__$1;
var obstacle_types = inst_12430;
var polar_object_coords = inst_12503__$1;
var trees = inst_12437;
var player_standing_sway = inst_12411;
var game_sprites = inst_12585__$1;
var loader = inst_12383;
var player_walking_texs = inst_12416;
var shadow_tex = inst_12397;
var tex = inst_12395;
var hit_sfx = inst_12501__$1;
var lobster_big = inst_12387;
var game_map = inst_12578__$1;
var star_tex = inst_12417;
var tufts = inst_12444;
var game_space = inst_12586__$1;
var pickup_textures = inst_12424;
var perlin_channel = inst_12384;
var title_text = inst_12394;
var floor_objects = inst_12427;
var pickup_sfx = inst_12474;
var tilemap = inst_12393;
var make_pickup = inst_12447;
var varela = inst_12388;
var wait = inst_12391;
var player = inst_12396;
var player_stars_icon = inst_12418;
return ((function (depth_compare,player_stars_text,player_standing_texs,player_shadow,close_QMARK_,player_pos,obstacle_types,polar_object_coords,trees,player_standing_sway,game_sprites,loader,player_walking_texs,shadow_tex,tex,hit_sfx,lobster_big,game_map,star_tex,tufts,game_space,pickup_textures,perlin_channel,title_text,floor_objects,pickup_sfx,tilemap,make_pickup,varela,wait,player,player_stars_icon,inst_12427,inst_12388,inst_12421,inst_12417,inst_12474,inst_12447,inst_12383,inst_12591,inst_12397,inst_12501,inst_12416,inst_12396,inst_12395,inst_12398,inst_12502,inst_12437,inst_12590,inst_12506,inst_12391,inst_12418,inst_12430,inst_12394,inst_12424,inst_12585,inst_12578,inst_12411,inst_12408,inst_12589,inst_12503,inst_12387,inst_12384,inst_12586,inst_12393,inst_12444,inst_12501__$1,inst_12502__$1,inst_12503__$1,inst_12506__$1,inst_12507,inst_12508,inst_12509,inst_12510,inst_12511,inst_12512,inst_12513,inst_12514,inst_12515,inst_12516,inst_12517,inst_12518,inst_12519,inst_12520,inst_12521,inst_12522,inst_12523,inst_12524,inst_12525,inst_12526,inst_12527,inst_12528,inst_12529,inst_12530,inst_12531,inst_12532,inst_12533,inst_12534,inst_12535,inst_12536,inst_12537,inst_12538,inst_12539,inst_12540,inst_12541,inst_12542,inst_12543,inst_12544,inst_12545,inst_12546,inst_12547,inst_12548,inst_12549,inst_12550,inst_12551,inst_12552,inst_12553,inst_12554,inst_12555,inst_12556,inst_12557,inst_12558,inst_12559,inst_12560,inst_12561,inst_12562,inst_12563,inst_12564,inst_12565,inst_12566,inst_12567,inst_12568,inst_12569,inst_12570,inst_12571,inst_12572,inst_12573,inst_12574,inst_12575,inst_12576,inst_12577,inst_12578__$1,inst_12583,inst_12584,inst_12585__$1,inst_12586__$1,inst_12587,inst_12588,inst_12589__$1,state_val_13386,c__6459__auto___13801){
return (function (id){
var seq__13604 = cljs.core.seq.call(null,game_space.call(null,id));
var chunk__13605 = null;
var count__13606 = (0);
var i__13607 = (0);
while(true){
if((i__13607 < count__13606)){
var obj = cljs.core._nth.call(null,chunk__13605,i__13607);
farn.sprite.set_scale_BANG_.call(null,new cljs.core.Keyword(null,"sprite","sprite",172516848).cljs$core$IFn$_invoke$arity$1(obj),new cljs.core.Keyword(null,"scale","scale",-230427353).cljs$core$IFn$_invoke$arity$1(obj));

farn.sprite.set_pos_BANG_.call(null,new cljs.core.Keyword(null,"sprite","sprite",172516848).cljs$core$IFn$_invoke$arity$1(obj),(100000),(100000));

farn.core.main_stage.addChild(new cljs.core.Keyword(null,"sprite","sprite",172516848).cljs$core$IFn$_invoke$arity$1(obj));

var G__13954 = seq__13604;
var G__13955 = chunk__13605;
var G__13956 = count__13606;
var G__13957 = (i__13607 + (1));
seq__13604 = G__13954;
chunk__13605 = G__13955;
count__13606 = G__13956;
i__13607 = G__13957;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__13604);
if(temp__4126__auto__){
var seq__13604__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13604__$1)){
var c__4417__auto__ = cljs.core.chunk_first.call(null,seq__13604__$1);
var G__13958 = cljs.core.chunk_rest.call(null,seq__13604__$1);
var G__13959 = c__4417__auto__;
var G__13960 = cljs.core.count.call(null,c__4417__auto__);
var G__13961 = (0);
seq__13604 = G__13958;
chunk__13605 = G__13959;
count__13606 = G__13960;
i__13607 = G__13961;
continue;
} else {
var obj = cljs.core.first.call(null,seq__13604__$1);
farn.sprite.set_scale_BANG_.call(null,new cljs.core.Keyword(null,"sprite","sprite",172516848).cljs$core$IFn$_invoke$arity$1(obj),new cljs.core.Keyword(null,"scale","scale",-230427353).cljs$core$IFn$_invoke$arity$1(obj));

farn.sprite.set_pos_BANG_.call(null,new cljs.core.Keyword(null,"sprite","sprite",172516848).cljs$core$IFn$_invoke$arity$1(obj),(100000),(100000));

farn.core.main_stage.addChild(new cljs.core.Keyword(null,"sprite","sprite",172516848).cljs$core$IFn$_invoke$arity$1(obj));

var G__13962 = cljs.core.next.call(null,seq__13604__$1);
var G__13963 = null;
var G__13964 = (0);
var G__13965 = (0);
seq__13604 = G__13962;
chunk__13605 = G__13963;
count__13606 = G__13964;
i__13607 = G__13965;
continue;
}
} else {
return null;
}
}
break;
}
});
;})(depth_compare,player_stars_text,player_standing_texs,player_shadow,close_QMARK_,player_pos,obstacle_types,polar_object_coords,trees,player_standing_sway,game_sprites,loader,player_walking_texs,shadow_tex,tex,hit_sfx,lobster_big,game_map,star_tex,tufts,game_space,pickup_textures,perlin_channel,title_text,floor_objects,pickup_sfx,tilemap,make_pickup,varela,wait,player,player_stars_icon,inst_12427,inst_12388,inst_12421,inst_12417,inst_12474,inst_12447,inst_12383,inst_12591,inst_12397,inst_12501,inst_12416,inst_12396,inst_12395,inst_12398,inst_12502,inst_12437,inst_12590,inst_12506,inst_12391,inst_12418,inst_12430,inst_12394,inst_12424,inst_12585,inst_12578,inst_12411,inst_12408,inst_12589,inst_12503,inst_12387,inst_12384,inst_12586,inst_12393,inst_12444,inst_12501__$1,inst_12502__$1,inst_12503__$1,inst_12506__$1,inst_12507,inst_12508,inst_12509,inst_12510,inst_12511,inst_12512,inst_12513,inst_12514,inst_12515,inst_12516,inst_12517,inst_12518,inst_12519,inst_12520,inst_12521,inst_12522,inst_12523,inst_12524,inst_12525,inst_12526,inst_12527,inst_12528,inst_12529,inst_12530,inst_12531,inst_12532,inst_12533,inst_12534,inst_12535,inst_12536,inst_12537,inst_12538,inst_12539,inst_12540,inst_12541,inst_12542,inst_12543,inst_12544,inst_12545,inst_12546,inst_12547,inst_12548,inst_12549,inst_12550,inst_12551,inst_12552,inst_12553,inst_12554,inst_12555,inst_12556,inst_12557,inst_12558,inst_12559,inst_12560,inst_12561,inst_12562,inst_12563,inst_12564,inst_12565,inst_12566,inst_12567,inst_12568,inst_12569,inst_12570,inst_12571,inst_12572,inst_12573,inst_12574,inst_12575,inst_12576,inst_12577,inst_12578__$1,inst_12583,inst_12584,inst_12585__$1,inst_12586__$1,inst_12587,inst_12588,inst_12589__$1,state_val_13386,c__6459__auto___13801))
})();
var inst_12591__$1 = (function (){var add_cell_BANG_ = inst_12590__$1;
var depth_compare = inst_12502__$1;
var player_stars_text = inst_12421;
var player_standing_texs = inst_12408;
var player_shadow = inst_12398;
var close_QMARK_ = inst_12506__$1;
var player_pos = inst_12589__$1;
var obstacle_types = inst_12430;
var polar_object_coords = inst_12503__$1;
var trees = inst_12437;
var player_standing_sway = inst_12411;
var game_sprites = inst_12585__$1;
var loader = inst_12383;
var player_walking_texs = inst_12416;
var shadow_tex = inst_12397;
var tex = inst_12395;
var hit_sfx = inst_12501__$1;
var lobster_big = inst_12387;
var game_map = inst_12578__$1;
var star_tex = inst_12417;
var tufts = inst_12444;
var game_space = inst_12586__$1;
var pickup_textures = inst_12424;
var perlin_channel = inst_12384;
var title_text = inst_12394;
var floor_objects = inst_12427;
var pickup_sfx = inst_12474;
var tilemap = inst_12393;
var make_pickup = inst_12447;
var varela = inst_12388;
var wait = inst_12391;
var player = inst_12396;
var player_stars_icon = inst_12418;
return ((function (add_cell_BANG_,depth_compare,player_stars_text,player_standing_texs,player_shadow,close_QMARK_,player_pos,obstacle_types,polar_object_coords,trees,player_standing_sway,game_sprites,loader,player_walking_texs,shadow_tex,tex,hit_sfx,lobster_big,game_map,star_tex,tufts,game_space,pickup_textures,perlin_channel,title_text,floor_objects,pickup_sfx,tilemap,make_pickup,varela,wait,player,player_stars_icon,inst_12427,inst_12388,inst_12421,inst_12417,inst_12474,inst_12447,inst_12383,inst_12591,inst_12397,inst_12501,inst_12416,inst_12396,inst_12395,inst_12398,inst_12502,inst_12437,inst_12590,inst_12506,inst_12391,inst_12418,inst_12430,inst_12394,inst_12424,inst_12585,inst_12578,inst_12411,inst_12408,inst_12589,inst_12503,inst_12387,inst_12384,inst_12586,inst_12393,inst_12444,inst_12501__$1,inst_12502__$1,inst_12503__$1,inst_12506__$1,inst_12507,inst_12508,inst_12509,inst_12510,inst_12511,inst_12512,inst_12513,inst_12514,inst_12515,inst_12516,inst_12517,inst_12518,inst_12519,inst_12520,inst_12521,inst_12522,inst_12523,inst_12524,inst_12525,inst_12526,inst_12527,inst_12528,inst_12529,inst_12530,inst_12531,inst_12532,inst_12533,inst_12534,inst_12535,inst_12536,inst_12537,inst_12538,inst_12539,inst_12540,inst_12541,inst_12542,inst_12543,inst_12544,inst_12545,inst_12546,inst_12547,inst_12548,inst_12549,inst_12550,inst_12551,inst_12552,inst_12553,inst_12554,inst_12555,inst_12556,inst_12557,inst_12558,inst_12559,inst_12560,inst_12561,inst_12562,inst_12563,inst_12564,inst_12565,inst_12566,inst_12567,inst_12568,inst_12569,inst_12570,inst_12571,inst_12572,inst_12573,inst_12574,inst_12575,inst_12576,inst_12577,inst_12578__$1,inst_12583,inst_12584,inst_12585__$1,inst_12586__$1,inst_12587,inst_12588,inst_12589__$1,inst_12590__$1,state_val_13386,c__6459__auto___13801){
return (function (id){
var seq__13608 = cljs.core.seq.call(null,game_space.call(null,id));
var chunk__13609 = null;
var count__13610 = (0);
var i__13611 = (0);
while(true){
if((i__13611 < count__13610)){
var obj = cljs.core._nth.call(null,chunk__13609,i__13611);
farn.core.main_stage.removeChild(new cljs.core.Keyword(null,"sprite","sprite",172516848).cljs$core$IFn$_invoke$arity$1(obj));

var G__13966 = seq__13608;
var G__13967 = chunk__13609;
var G__13968 = count__13610;
var G__13969 = (i__13611 + (1));
seq__13608 = G__13966;
chunk__13609 = G__13967;
count__13610 = G__13968;
i__13611 = G__13969;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__13608);
if(temp__4126__auto__){
var seq__13608__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13608__$1)){
var c__4417__auto__ = cljs.core.chunk_first.call(null,seq__13608__$1);
var G__13970 = cljs.core.chunk_rest.call(null,seq__13608__$1);
var G__13971 = c__4417__auto__;
var G__13972 = cljs.core.count.call(null,c__4417__auto__);
var G__13973 = (0);
seq__13608 = G__13970;
chunk__13609 = G__13971;
count__13610 = G__13972;
i__13611 = G__13973;
continue;
} else {
var obj = cljs.core.first.call(null,seq__13608__$1);
farn.core.main_stage.removeChild(new cljs.core.Keyword(null,"sprite","sprite",172516848).cljs$core$IFn$_invoke$arity$1(obj));

var G__13974 = cljs.core.next.call(null,seq__13608__$1);
var G__13975 = null;
var G__13976 = (0);
var G__13977 = (0);
seq__13608 = G__13974;
chunk__13609 = G__13975;
count__13610 = G__13976;
i__13611 = G__13977;
continue;
}
} else {
return null;
}
}
break;
}
});
;})(add_cell_BANG_,depth_compare,player_stars_text,player_standing_texs,player_shadow,close_QMARK_,player_pos,obstacle_types,polar_object_coords,trees,player_standing_sway,game_sprites,loader,player_walking_texs,shadow_tex,tex,hit_sfx,lobster_big,game_map,star_tex,tufts,game_space,pickup_textures,perlin_channel,title_text,floor_objects,pickup_sfx,tilemap,make_pickup,varela,wait,player,player_stars_icon,inst_12427,inst_12388,inst_12421,inst_12417,inst_12474,inst_12447,inst_12383,inst_12591,inst_12397,inst_12501,inst_12416,inst_12396,inst_12395,inst_12398,inst_12502,inst_12437,inst_12590,inst_12506,inst_12391,inst_12418,inst_12430,inst_12394,inst_12424,inst_12585,inst_12578,inst_12411,inst_12408,inst_12589,inst_12503,inst_12387,inst_12384,inst_12586,inst_12393,inst_12444,inst_12501__$1,inst_12502__$1,inst_12503__$1,inst_12506__$1,inst_12507,inst_12508,inst_12509,inst_12510,inst_12511,inst_12512,inst_12513,inst_12514,inst_12515,inst_12516,inst_12517,inst_12518,inst_12519,inst_12520,inst_12521,inst_12522,inst_12523,inst_12524,inst_12525,inst_12526,inst_12527,inst_12528,inst_12529,inst_12530,inst_12531,inst_12532,inst_12533,inst_12534,inst_12535,inst_12536,inst_12537,inst_12538,inst_12539,inst_12540,inst_12541,inst_12542,inst_12543,inst_12544,inst_12545,inst_12546,inst_12547,inst_12548,inst_12549,inst_12550,inst_12551,inst_12552,inst_12553,inst_12554,inst_12555,inst_12556,inst_12557,inst_12558,inst_12559,inst_12560,inst_12561,inst_12562,inst_12563,inst_12564,inst_12565,inst_12566,inst_12567,inst_12568,inst_12569,inst_12570,inst_12571,inst_12572,inst_12573,inst_12574,inst_12575,inst_12576,inst_12577,inst_12578__$1,inst_12583,inst_12584,inst_12585__$1,inst_12586__$1,inst_12587,inst_12588,inst_12589__$1,inst_12590__$1,state_val_13386,c__6459__auto___13801))
})();
var inst_12592 = farn.core.ui_stage.addChild(inst_12394);
var inst_12614 = cljs.core.async.chan.call(null,(1));
var inst_12615 = (function (){var add_cell_BANG_ = inst_12590__$1;
var depth_compare = inst_12502__$1;
var player_stars_text = inst_12421;
var player_standing_texs = inst_12408;
var player_shadow = inst_12398;
var close_QMARK_ = inst_12506__$1;
var player_pos = inst_12589__$1;
var obstacle_types = inst_12430;
var polar_object_coords = inst_12503__$1;
var trees = inst_12437;
var player_standing_sway = inst_12411;
var game_sprites = inst_12585__$1;
var loader = inst_12383;
var player_walking_texs = inst_12416;
var shadow_tex = inst_12397;
var tex = inst_12395;
var c__6459__auto____$1 = inst_12614;
var hit_sfx = inst_12501__$1;
var lobster_big = inst_12387;
var game_map = inst_12578__$1;
var star_tex = inst_12417;
var remove_cell_BANG_ = inst_12591__$1;
var tufts = inst_12444;
var game_space = inst_12586__$1;
var pickup_textures = inst_12424;
var perlin_channel = inst_12384;
var title_text = inst_12394;
var floor_objects = inst_12427;
var pickup_sfx = inst_12474;
var tilemap = inst_12393;
var make_pickup = inst_12447;
var varela = inst_12388;
var wait = inst_12391;
var player = inst_12396;
var player_stars_icon = inst_12418;
return ((function (add_cell_BANG_,depth_compare,player_stars_text,player_standing_texs,player_shadow,close_QMARK_,player_pos,obstacle_types,polar_object_coords,trees,player_standing_sway,game_sprites,loader,player_walking_texs,shadow_tex,tex,c__6459__auto____$1,hit_sfx,lobster_big,game_map,star_tex,remove_cell_BANG_,tufts,game_space,pickup_textures,perlin_channel,title_text,floor_objects,pickup_sfx,tilemap,make_pickup,varela,wait,player,player_stars_icon,inst_12427,inst_12388,inst_12421,inst_12417,inst_12474,inst_12447,inst_12383,inst_12591,inst_12397,inst_12501,inst_12416,inst_12396,inst_12395,inst_12398,inst_12502,inst_12437,inst_12590,inst_12506,inst_12391,inst_12418,inst_12430,inst_12394,inst_12424,inst_12585,inst_12578,inst_12411,inst_12408,inst_12589,inst_12503,inst_12387,inst_12384,inst_12586,inst_12393,inst_12444,inst_12501__$1,inst_12502__$1,inst_12503__$1,inst_12506__$1,inst_12507,inst_12508,inst_12509,inst_12510,inst_12511,inst_12512,inst_12513,inst_12514,inst_12515,inst_12516,inst_12517,inst_12518,inst_12519,inst_12520,inst_12521,inst_12522,inst_12523,inst_12524,inst_12525,inst_12526,inst_12527,inst_12528,inst_12529,inst_12530,inst_12531,inst_12532,inst_12533,inst_12534,inst_12535,inst_12536,inst_12537,inst_12538,inst_12539,inst_12540,inst_12541,inst_12542,inst_12543,inst_12544,inst_12545,inst_12546,inst_12547,inst_12548,inst_12549,inst_12550,inst_12551,inst_12552,inst_12553,inst_12554,inst_12555,inst_12556,inst_12557,inst_12558,inst_12559,inst_12560,inst_12561,inst_12562,inst_12563,inst_12564,inst_12565,inst_12566,inst_12567,inst_12568,inst_12569,inst_12570,inst_12571,inst_12572,inst_12573,inst_12574,inst_12575,inst_12576,inst_12577,inst_12578__$1,inst_12583,inst_12584,inst_12585__$1,inst_12586__$1,inst_12587,inst_12588,inst_12589__$1,inst_12590__$1,inst_12591__$1,inst_12592,inst_12614,state_val_13386,c__6459__auto___13801){
return (function (){
var f__6460__auto__ = (function (){var switch__6444__auto__ = ((function (add_cell_BANG_,depth_compare,player_stars_text,player_standing_texs,player_shadow,close_QMARK_,player_pos,obstacle_types,polar_object_coords,trees,player_standing_sway,game_sprites,loader,player_walking_texs,shadow_tex,tex,c__6459__auto____$1,hit_sfx,lobster_big,game_map,star_tex,remove_cell_BANG_,tufts,game_space,pickup_textures,perlin_channel,title_text,floor_objects,pickup_sfx,tilemap,make_pickup,varela,wait,player,player_stars_icon,inst_12427,inst_12388,inst_12421,inst_12417,inst_12474,inst_12447,inst_12383,inst_12591,inst_12397,inst_12501,inst_12416,inst_12396,inst_12395,inst_12398,inst_12502,inst_12437,inst_12590,inst_12506,inst_12391,inst_12418,inst_12430,inst_12394,inst_12424,inst_12585,inst_12578,inst_12411,inst_12408,inst_12589,inst_12503,inst_12387,inst_12384,inst_12586,inst_12393,inst_12444,inst_12501__$1,inst_12502__$1,inst_12503__$1,inst_12506__$1,inst_12507,inst_12508,inst_12509,inst_12510,inst_12511,inst_12512,inst_12513,inst_12514,inst_12515,inst_12516,inst_12517,inst_12518,inst_12519,inst_12520,inst_12521,inst_12522,inst_12523,inst_12524,inst_12525,inst_12526,inst_12527,inst_12528,inst_12529,inst_12530,inst_12531,inst_12532,inst_12533,inst_12534,inst_12535,inst_12536,inst_12537,inst_12538,inst_12539,inst_12540,inst_12541,inst_12542,inst_12543,inst_12544,inst_12545,inst_12546,inst_12547,inst_12548,inst_12549,inst_12550,inst_12551,inst_12552,inst_12553,inst_12554,inst_12555,inst_12556,inst_12557,inst_12558,inst_12559,inst_12560,inst_12561,inst_12562,inst_12563,inst_12564,inst_12565,inst_12566,inst_12567,inst_12568,inst_12569,inst_12570,inst_12571,inst_12572,inst_12573,inst_12574,inst_12575,inst_12576,inst_12577,inst_12578__$1,inst_12583,inst_12584,inst_12585__$1,inst_12586__$1,inst_12587,inst_12588,inst_12589__$1,inst_12590__$1,inst_12591__$1,inst_12592,inst_12614,state_val_13386,c__6459__auto___13801){
return (function (state_12612){
var state_val_12613 = (state_12612[(1)]);
if((state_val_12613 === (7))){
var inst_12604 = (state_12612[(2)]);
var state_12612__$1 = (function (){var statearr_13612 = state_12612;
(statearr_13612[(7)] = inst_12604);

return statearr_13612;
})();
var statearr_13613_13978 = state_12612__$1;
(statearr_13613_13978[(2)] = null);

(statearr_13613_13978[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12613 === (6))){
var inst_12608 = (state_12612[(2)]);
var state_12612__$1 = state_12612;
var statearr_13614_13979 = state_12612__$1;
(statearr_13614_13979[(2)] = inst_12608);

(statearr_13614_13979[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12613 === (5))){
var state_12612__$1 = state_12612;
var statearr_13615_13980 = state_12612__$1;
(statearr_13615_13980[(2)] = null);

(statearr_13615_13980[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12613 === (4))){
var inst_12593 = (state_12612[(8)]);
var inst_12596 = window.innerWidth;
var inst_12597 = window.innerHeight;
var inst_12598 = (inst_12596 / (2));
var inst_12599 = (inst_12597 / (2));
var inst_12600 = (- inst_12599);
var inst_12601 = (inst_12600 + (100));
var inst_12602 = farn.sprite.set_pos_BANG_.call(null,title_text,(0),inst_12601);
var state_12612__$1 = (function (){var statearr_13616 = state_12612;
(statearr_13616[(9)] = inst_12602);

(statearr_13616[(10)] = inst_12598);

return statearr_13616;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12612__$1,(7),inst_12593);
} else {
if((state_val_12613 === (3))){
var inst_12610 = (state_12612[(2)]);
var state_12612__$1 = state_12612;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12612__$1,inst_12610);
} else {
if((state_val_12613 === (2))){
var state_12612__$1 = state_12612;
var statearr_13617_13981 = state_12612__$1;
(statearr_13617_13981[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12613 === (1))){
var inst_12593 = farn.events.new_resize_chan.call(null);
var state_12612__$1 = (function (){var statearr_13619 = state_12612;
(statearr_13619[(8)] = inst_12593);

return statearr_13619;
})();
var statearr_13620_13982 = state_12612__$1;
(statearr_13620_13982[(2)] = null);

(statearr_13620_13982[(1)] = (2));


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
});})(add_cell_BANG_,depth_compare,player_stars_text,player_standing_texs,player_shadow,close_QMARK_,player_pos,obstacle_types,polar_object_coords,trees,player_standing_sway,game_sprites,loader,player_walking_texs,shadow_tex,tex,c__6459__auto____$1,hit_sfx,lobster_big,game_map,star_tex,remove_cell_BANG_,tufts,game_space,pickup_textures,perlin_channel,title_text,floor_objects,pickup_sfx,tilemap,make_pickup,varela,wait,player,player_stars_icon,inst_12427,inst_12388,inst_12421,inst_12417,inst_12474,inst_12447,inst_12383,inst_12591,inst_12397,inst_12501,inst_12416,inst_12396,inst_12395,inst_12398,inst_12502,inst_12437,inst_12590,inst_12506,inst_12391,inst_12418,inst_12430,inst_12394,inst_12424,inst_12585,inst_12578,inst_12411,inst_12408,inst_12589,inst_12503,inst_12387,inst_12384,inst_12586,inst_12393,inst_12444,inst_12501__$1,inst_12502__$1,inst_12503__$1,inst_12506__$1,inst_12507,inst_12508,inst_12509,inst_12510,inst_12511,inst_12512,inst_12513,inst_12514,inst_12515,inst_12516,inst_12517,inst_12518,inst_12519,inst_12520,inst_12521,inst_12522,inst_12523,inst_12524,inst_12525,inst_12526,inst_12527,inst_12528,inst_12529,inst_12530,inst_12531,inst_12532,inst_12533,inst_12534,inst_12535,inst_12536,inst_12537,inst_12538,inst_12539,inst_12540,inst_12541,inst_12542,inst_12543,inst_12544,inst_12545,inst_12546,inst_12547,inst_12548,inst_12549,inst_12550,inst_12551,inst_12552,inst_12553,inst_12554,inst_12555,inst_12556,inst_12557,inst_12558,inst_12559,inst_12560,inst_12561,inst_12562,inst_12563,inst_12564,inst_12565,inst_12566,inst_12567,inst_12568,inst_12569,inst_12570,inst_12571,inst_12572,inst_12573,inst_12574,inst_12575,inst_12576,inst_12577,inst_12578__$1,inst_12583,inst_12584,inst_12585__$1,inst_12586__$1,inst_12587,inst_12588,inst_12589__$1,inst_12590__$1,inst_12591__$1,inst_12592,inst_12614,state_val_13386,c__6459__auto___13801))
;
return ((function (switch__6444__auto__,add_cell_BANG_,depth_compare,player_stars_text,player_standing_texs,player_shadow,close_QMARK_,player_pos,obstacle_types,polar_object_coords,trees,player_standing_sway,game_sprites,loader,player_walking_texs,shadow_tex,tex,c__6459__auto____$1,hit_sfx,lobster_big,game_map,star_tex,remove_cell_BANG_,tufts,game_space,pickup_textures,perlin_channel,title_text,floor_objects,pickup_sfx,tilemap,make_pickup,varela,wait,player,player_stars_icon,inst_12427,inst_12388,inst_12421,inst_12417,inst_12474,inst_12447,inst_12383,inst_12591,inst_12397,inst_12501,inst_12416,inst_12396,inst_12395,inst_12398,inst_12502,inst_12437,inst_12590,inst_12506,inst_12391,inst_12418,inst_12430,inst_12394,inst_12424,inst_12585,inst_12578,inst_12411,inst_12408,inst_12589,inst_12503,inst_12387,inst_12384,inst_12586,inst_12393,inst_12444,inst_12501__$1,inst_12502__$1,inst_12503__$1,inst_12506__$1,inst_12507,inst_12508,inst_12509,inst_12510,inst_12511,inst_12512,inst_12513,inst_12514,inst_12515,inst_12516,inst_12517,inst_12518,inst_12519,inst_12520,inst_12521,inst_12522,inst_12523,inst_12524,inst_12525,inst_12526,inst_12527,inst_12528,inst_12529,inst_12530,inst_12531,inst_12532,inst_12533,inst_12534,inst_12535,inst_12536,inst_12537,inst_12538,inst_12539,inst_12540,inst_12541,inst_12542,inst_12543,inst_12544,inst_12545,inst_12546,inst_12547,inst_12548,inst_12549,inst_12550,inst_12551,inst_12552,inst_12553,inst_12554,inst_12555,inst_12556,inst_12557,inst_12558,inst_12559,inst_12560,inst_12561,inst_12562,inst_12563,inst_12564,inst_12565,inst_12566,inst_12567,inst_12568,inst_12569,inst_12570,inst_12571,inst_12572,inst_12573,inst_12574,inst_12575,inst_12576,inst_12577,inst_12578__$1,inst_12583,inst_12584,inst_12585__$1,inst_12586__$1,inst_12587,inst_12588,inst_12589__$1,inst_12590__$1,inst_12591__$1,inst_12592,inst_12614,state_val_13386,c__6459__auto___13801){
return (function() {
var state_machine__6445__auto__ = null;
var state_machine__6445__auto____0 = (function (){
var statearr_13624 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_13624[(0)] = state_machine__6445__auto__);

(statearr_13624[(1)] = (1));

return statearr_13624;
});
var state_machine__6445__auto____1 = (function (state_12612){
while(true){
var ret_value__6446__auto__ = (function (){try{while(true){
var result__6447__auto__ = switch__6444__auto__.call(null,state_12612);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6447__auto__;
}
break;
}
}catch (e13625){if((e13625 instanceof Object)){
var ex__6448__auto__ = e13625;
var statearr_13626_13983 = state_12612;
(statearr_13626_13983[(5)] = ex__6448__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12612);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13625;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13984 = state_12612;
state_12612 = G__13984;
continue;
} else {
return ret_value__6446__auto__;
}
break;
}
});
state_machine__6445__auto__ = function(state_12612){
switch(arguments.length){
case 0:
return state_machine__6445__auto____0.call(this);
case 1:
return state_machine__6445__auto____1.call(this,state_12612);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6445__auto____0;
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6445__auto____1;
return state_machine__6445__auto__;
})()
;})(switch__6444__auto__,add_cell_BANG_,depth_compare,player_stars_text,player_standing_texs,player_shadow,close_QMARK_,player_pos,obstacle_types,polar_object_coords,trees,player_standing_sway,game_sprites,loader,player_walking_texs,shadow_tex,tex,c__6459__auto____$1,hit_sfx,lobster_big,game_map,star_tex,remove_cell_BANG_,tufts,game_space,pickup_textures,perlin_channel,title_text,floor_objects,pickup_sfx,tilemap,make_pickup,varela,wait,player,player_stars_icon,inst_12427,inst_12388,inst_12421,inst_12417,inst_12474,inst_12447,inst_12383,inst_12591,inst_12397,inst_12501,inst_12416,inst_12396,inst_12395,inst_12398,inst_12502,inst_12437,inst_12590,inst_12506,inst_12391,inst_12418,inst_12430,inst_12394,inst_12424,inst_12585,inst_12578,inst_12411,inst_12408,inst_12589,inst_12503,inst_12387,inst_12384,inst_12586,inst_12393,inst_12444,inst_12501__$1,inst_12502__$1,inst_12503__$1,inst_12506__$1,inst_12507,inst_12508,inst_12509,inst_12510,inst_12511,inst_12512,inst_12513,inst_12514,inst_12515,inst_12516,inst_12517,inst_12518,inst_12519,inst_12520,inst_12521,inst_12522,inst_12523,inst_12524,inst_12525,inst_12526,inst_12527,inst_12528,inst_12529,inst_12530,inst_12531,inst_12532,inst_12533,inst_12534,inst_12535,inst_12536,inst_12537,inst_12538,inst_12539,inst_12540,inst_12541,inst_12542,inst_12543,inst_12544,inst_12545,inst_12546,inst_12547,inst_12548,inst_12549,inst_12550,inst_12551,inst_12552,inst_12553,inst_12554,inst_12555,inst_12556,inst_12557,inst_12558,inst_12559,inst_12560,inst_12561,inst_12562,inst_12563,inst_12564,inst_12565,inst_12566,inst_12567,inst_12568,inst_12569,inst_12570,inst_12571,inst_12572,inst_12573,inst_12574,inst_12575,inst_12576,inst_12577,inst_12578__$1,inst_12583,inst_12584,inst_12585__$1,inst_12586__$1,inst_12587,inst_12588,inst_12589__$1,inst_12590__$1,inst_12591__$1,inst_12592,inst_12614,state_val_13386,c__6459__auto___13801))
})();
var state__6461__auto__ = (function (){var statearr_13627 = f__6460__auto__.call(null);
(statearr_13627[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6459__auto____$1);

return statearr_13627;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6461__auto__);
});
;})(add_cell_BANG_,depth_compare,player_stars_text,player_standing_texs,player_shadow,close_QMARK_,player_pos,obstacle_types,polar_object_coords,trees,player_standing_sway,game_sprites,loader,player_walking_texs,shadow_tex,tex,c__6459__auto____$1,hit_sfx,lobster_big,game_map,star_tex,remove_cell_BANG_,tufts,game_space,pickup_textures,perlin_channel,title_text,floor_objects,pickup_sfx,tilemap,make_pickup,varela,wait,player,player_stars_icon,inst_12427,inst_12388,inst_12421,inst_12417,inst_12474,inst_12447,inst_12383,inst_12591,inst_12397,inst_12501,inst_12416,inst_12396,inst_12395,inst_12398,inst_12502,inst_12437,inst_12590,inst_12506,inst_12391,inst_12418,inst_12430,inst_12394,inst_12424,inst_12585,inst_12578,inst_12411,inst_12408,inst_12589,inst_12503,inst_12387,inst_12384,inst_12586,inst_12393,inst_12444,inst_12501__$1,inst_12502__$1,inst_12503__$1,inst_12506__$1,inst_12507,inst_12508,inst_12509,inst_12510,inst_12511,inst_12512,inst_12513,inst_12514,inst_12515,inst_12516,inst_12517,inst_12518,inst_12519,inst_12520,inst_12521,inst_12522,inst_12523,inst_12524,inst_12525,inst_12526,inst_12527,inst_12528,inst_12529,inst_12530,inst_12531,inst_12532,inst_12533,inst_12534,inst_12535,inst_12536,inst_12537,inst_12538,inst_12539,inst_12540,inst_12541,inst_12542,inst_12543,inst_12544,inst_12545,inst_12546,inst_12547,inst_12548,inst_12549,inst_12550,inst_12551,inst_12552,inst_12553,inst_12554,inst_12555,inst_12556,inst_12557,inst_12558,inst_12559,inst_12560,inst_12561,inst_12562,inst_12563,inst_12564,inst_12565,inst_12566,inst_12567,inst_12568,inst_12569,inst_12570,inst_12571,inst_12572,inst_12573,inst_12574,inst_12575,inst_12576,inst_12577,inst_12578__$1,inst_12583,inst_12584,inst_12585__$1,inst_12586__$1,inst_12587,inst_12588,inst_12589__$1,inst_12590__$1,inst_12591__$1,inst_12592,inst_12614,state_val_13386,c__6459__auto___13801))
})();
var inst_12616 = cljs.core.async.impl.dispatch.run.call(null,inst_12615);
var inst_12627 = cljs.core.async.chan.call(null,(1));
var inst_12628 = (function (){var add_cell_BANG_ = inst_12590__$1;
var depth_compare = inst_12502__$1;
var player_stars_text = inst_12421;
var player_standing_texs = inst_12408;
var player_shadow = inst_12398;
var close_QMARK_ = inst_12506__$1;
var player_pos = inst_12589__$1;
var obstacle_types = inst_12430;
var polar_object_coords = inst_12503__$1;
var trees = inst_12437;
var player_standing_sway = inst_12411;
var game_sprites = inst_12585__$1;
var loader = inst_12383;
var player_walking_texs = inst_12416;
var shadow_tex = inst_12397;
var tex = inst_12395;
var c__6459__auto____$1 = inst_12627;
var hit_sfx = inst_12501__$1;
var lobster_big = inst_12387;
var game_map = inst_12578__$1;
var star_tex = inst_12417;
var remove_cell_BANG_ = inst_12591__$1;
var tufts = inst_12444;
var game_space = inst_12586__$1;
var pickup_textures = inst_12424;
var perlin_channel = inst_12384;
var title_text = inst_12394;
var floor_objects = inst_12427;
var pickup_sfx = inst_12474;
var tilemap = inst_12393;
var make_pickup = inst_12447;
var varela = inst_12388;
var wait = inst_12391;
var player = inst_12396;
var player_stars_icon = inst_12418;
return ((function (add_cell_BANG_,depth_compare,player_stars_text,player_standing_texs,player_shadow,close_QMARK_,player_pos,obstacle_types,polar_object_coords,trees,player_standing_sway,game_sprites,loader,player_walking_texs,shadow_tex,tex,c__6459__auto____$1,hit_sfx,lobster_big,game_map,star_tex,remove_cell_BANG_,tufts,game_space,pickup_textures,perlin_channel,title_text,floor_objects,pickup_sfx,tilemap,make_pickup,varela,wait,player,player_stars_icon,inst_12427,inst_12388,inst_12421,inst_12417,inst_12474,inst_12447,inst_12383,inst_12591,inst_12397,inst_12501,inst_12416,inst_12396,inst_12395,inst_12398,inst_12502,inst_12437,inst_12590,inst_12506,inst_12391,inst_12418,inst_12430,inst_12394,inst_12424,inst_12585,inst_12578,inst_12411,inst_12408,inst_12589,inst_12503,inst_12387,inst_12384,inst_12586,inst_12393,inst_12444,inst_12501__$1,inst_12502__$1,inst_12503__$1,inst_12506__$1,inst_12507,inst_12508,inst_12509,inst_12510,inst_12511,inst_12512,inst_12513,inst_12514,inst_12515,inst_12516,inst_12517,inst_12518,inst_12519,inst_12520,inst_12521,inst_12522,inst_12523,inst_12524,inst_12525,inst_12526,inst_12527,inst_12528,inst_12529,inst_12530,inst_12531,inst_12532,inst_12533,inst_12534,inst_12535,inst_12536,inst_12537,inst_12538,inst_12539,inst_12540,inst_12541,inst_12542,inst_12543,inst_12544,inst_12545,inst_12546,inst_12547,inst_12548,inst_12549,inst_12550,inst_12551,inst_12552,inst_12553,inst_12554,inst_12555,inst_12556,inst_12557,inst_12558,inst_12559,inst_12560,inst_12561,inst_12562,inst_12563,inst_12564,inst_12565,inst_12566,inst_12567,inst_12568,inst_12569,inst_12570,inst_12571,inst_12572,inst_12573,inst_12574,inst_12575,inst_12576,inst_12577,inst_12578__$1,inst_12583,inst_12584,inst_12585__$1,inst_12586__$1,inst_12587,inst_12588,inst_12589__$1,inst_12590__$1,inst_12591__$1,inst_12592,inst_12614,inst_12615,inst_12616,inst_12627,state_val_13386,c__6459__auto___13801){
return (function (){
var f__6460__auto__ = (function (){var switch__6444__auto__ = ((function (add_cell_BANG_,depth_compare,player_stars_text,player_standing_texs,player_shadow,close_QMARK_,player_pos,obstacle_types,polar_object_coords,trees,player_standing_sway,game_sprites,loader,player_walking_texs,shadow_tex,tex,c__6459__auto____$1,hit_sfx,lobster_big,game_map,star_tex,remove_cell_BANG_,tufts,game_space,pickup_textures,perlin_channel,title_text,floor_objects,pickup_sfx,tilemap,make_pickup,varela,wait,player,player_stars_icon,inst_12427,inst_12388,inst_12421,inst_12417,inst_12474,inst_12447,inst_12383,inst_12591,inst_12397,inst_12501,inst_12416,inst_12396,inst_12395,inst_12398,inst_12502,inst_12437,inst_12590,inst_12506,inst_12391,inst_12418,inst_12430,inst_12394,inst_12424,inst_12585,inst_12578,inst_12411,inst_12408,inst_12589,inst_12503,inst_12387,inst_12384,inst_12586,inst_12393,inst_12444,inst_12501__$1,inst_12502__$1,inst_12503__$1,inst_12506__$1,inst_12507,inst_12508,inst_12509,inst_12510,inst_12511,inst_12512,inst_12513,inst_12514,inst_12515,inst_12516,inst_12517,inst_12518,inst_12519,inst_12520,inst_12521,inst_12522,inst_12523,inst_12524,inst_12525,inst_12526,inst_12527,inst_12528,inst_12529,inst_12530,inst_12531,inst_12532,inst_12533,inst_12534,inst_12535,inst_12536,inst_12537,inst_12538,inst_12539,inst_12540,inst_12541,inst_12542,inst_12543,inst_12544,inst_12545,inst_12546,inst_12547,inst_12548,inst_12549,inst_12550,inst_12551,inst_12552,inst_12553,inst_12554,inst_12555,inst_12556,inst_12557,inst_12558,inst_12559,inst_12560,inst_12561,inst_12562,inst_12563,inst_12564,inst_12565,inst_12566,inst_12567,inst_12568,inst_12569,inst_12570,inst_12571,inst_12572,inst_12573,inst_12574,inst_12575,inst_12576,inst_12577,inst_12578__$1,inst_12583,inst_12584,inst_12585__$1,inst_12586__$1,inst_12587,inst_12588,inst_12589__$1,inst_12590__$1,inst_12591__$1,inst_12592,inst_12614,inst_12615,inst_12616,inst_12627,state_val_13386,c__6459__auto___13801){
return (function (state_12625){
var state_val_12626 = (state_12625[(1)]);
if((state_val_12626 === (3))){
var inst_12622 = (state_12625[(2)]);
var inst_12623 = farn.core.ui_stage.removeChild(title_text);
var state_12625__$1 = (function (){var statearr_13628 = state_12625;
(statearr_13628[(7)] = inst_12622);

return statearr_13628;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12625__$1,inst_12623);
} else {
if((state_val_12626 === (2))){
var inst_12619 = (state_12625[(2)]);
var inst_12620 = farn.gfx.fadeout.call(null,title_text,new cljs.core.Keyword(null,"duration","duration",1444101068),(1));
var state_12625__$1 = (function (){var statearr_13629 = state_12625;
(statearr_13629[(8)] = inst_12619);

return statearr_13629;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12625__$1,(3),inst_12620);
} else {
if((state_val_12626 === (1))){
var inst_12617 = cljs.core.async.timeout.call(null,(1000));
var state_12625__$1 = state_12625;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12625__$1,(2),inst_12617);
} else {
return null;
}
}
}
});})(add_cell_BANG_,depth_compare,player_stars_text,player_standing_texs,player_shadow,close_QMARK_,player_pos,obstacle_types,polar_object_coords,trees,player_standing_sway,game_sprites,loader,player_walking_texs,shadow_tex,tex,c__6459__auto____$1,hit_sfx,lobster_big,game_map,star_tex,remove_cell_BANG_,tufts,game_space,pickup_textures,perlin_channel,title_text,floor_objects,pickup_sfx,tilemap,make_pickup,varela,wait,player,player_stars_icon,inst_12427,inst_12388,inst_12421,inst_12417,inst_12474,inst_12447,inst_12383,inst_12591,inst_12397,inst_12501,inst_12416,inst_12396,inst_12395,inst_12398,inst_12502,inst_12437,inst_12590,inst_12506,inst_12391,inst_12418,inst_12430,inst_12394,inst_12424,inst_12585,inst_12578,inst_12411,inst_12408,inst_12589,inst_12503,inst_12387,inst_12384,inst_12586,inst_12393,inst_12444,inst_12501__$1,inst_12502__$1,inst_12503__$1,inst_12506__$1,inst_12507,inst_12508,inst_12509,inst_12510,inst_12511,inst_12512,inst_12513,inst_12514,inst_12515,inst_12516,inst_12517,inst_12518,inst_12519,inst_12520,inst_12521,inst_12522,inst_12523,inst_12524,inst_12525,inst_12526,inst_12527,inst_12528,inst_12529,inst_12530,inst_12531,inst_12532,inst_12533,inst_12534,inst_12535,inst_12536,inst_12537,inst_12538,inst_12539,inst_12540,inst_12541,inst_12542,inst_12543,inst_12544,inst_12545,inst_12546,inst_12547,inst_12548,inst_12549,inst_12550,inst_12551,inst_12552,inst_12553,inst_12554,inst_12555,inst_12556,inst_12557,inst_12558,inst_12559,inst_12560,inst_12561,inst_12562,inst_12563,inst_12564,inst_12565,inst_12566,inst_12567,inst_12568,inst_12569,inst_12570,inst_12571,inst_12572,inst_12573,inst_12574,inst_12575,inst_12576,inst_12577,inst_12578__$1,inst_12583,inst_12584,inst_12585__$1,inst_12586__$1,inst_12587,inst_12588,inst_12589__$1,inst_12590__$1,inst_12591__$1,inst_12592,inst_12614,inst_12615,inst_12616,inst_12627,state_val_13386,c__6459__auto___13801))
;
return ((function (switch__6444__auto__,add_cell_BANG_,depth_compare,player_stars_text,player_standing_texs,player_shadow,close_QMARK_,player_pos,obstacle_types,polar_object_coords,trees,player_standing_sway,game_sprites,loader,player_walking_texs,shadow_tex,tex,c__6459__auto____$1,hit_sfx,lobster_big,game_map,star_tex,remove_cell_BANG_,tufts,game_space,pickup_textures,perlin_channel,title_text,floor_objects,pickup_sfx,tilemap,make_pickup,varela,wait,player,player_stars_icon,inst_12427,inst_12388,inst_12421,inst_12417,inst_12474,inst_12447,inst_12383,inst_12591,inst_12397,inst_12501,inst_12416,inst_12396,inst_12395,inst_12398,inst_12502,inst_12437,inst_12590,inst_12506,inst_12391,inst_12418,inst_12430,inst_12394,inst_12424,inst_12585,inst_12578,inst_12411,inst_12408,inst_12589,inst_12503,inst_12387,inst_12384,inst_12586,inst_12393,inst_12444,inst_12501__$1,inst_12502__$1,inst_12503__$1,inst_12506__$1,inst_12507,inst_12508,inst_12509,inst_12510,inst_12511,inst_12512,inst_12513,inst_12514,inst_12515,inst_12516,inst_12517,inst_12518,inst_12519,inst_12520,inst_12521,inst_12522,inst_12523,inst_12524,inst_12525,inst_12526,inst_12527,inst_12528,inst_12529,inst_12530,inst_12531,inst_12532,inst_12533,inst_12534,inst_12535,inst_12536,inst_12537,inst_12538,inst_12539,inst_12540,inst_12541,inst_12542,inst_12543,inst_12544,inst_12545,inst_12546,inst_12547,inst_12548,inst_12549,inst_12550,inst_12551,inst_12552,inst_12553,inst_12554,inst_12555,inst_12556,inst_12557,inst_12558,inst_12559,inst_12560,inst_12561,inst_12562,inst_12563,inst_12564,inst_12565,inst_12566,inst_12567,inst_12568,inst_12569,inst_12570,inst_12571,inst_12572,inst_12573,inst_12574,inst_12575,inst_12576,inst_12577,inst_12578__$1,inst_12583,inst_12584,inst_12585__$1,inst_12586__$1,inst_12587,inst_12588,inst_12589__$1,inst_12590__$1,inst_12591__$1,inst_12592,inst_12614,inst_12615,inst_12616,inst_12627,state_val_13386,c__6459__auto___13801){
return (function() {
var state_machine__6445__auto__ = null;
var state_machine__6445__auto____0 = (function (){
var statearr_13633 = [null,null,null,null,null,null,null,null,null];
(statearr_13633[(0)] = state_machine__6445__auto__);

(statearr_13633[(1)] = (1));

return statearr_13633;
});
var state_machine__6445__auto____1 = (function (state_12625){
while(true){
var ret_value__6446__auto__ = (function (){try{while(true){
var result__6447__auto__ = switch__6444__auto__.call(null,state_12625);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6447__auto__;
}
break;
}
}catch (e13634){if((e13634 instanceof Object)){
var ex__6448__auto__ = e13634;
var statearr_13635_13985 = state_12625;
(statearr_13635_13985[(5)] = ex__6448__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12625);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13634;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13986 = state_12625;
state_12625 = G__13986;
continue;
} else {
return ret_value__6446__auto__;
}
break;
}
});
state_machine__6445__auto__ = function(state_12625){
switch(arguments.length){
case 0:
return state_machine__6445__auto____0.call(this);
case 1:
return state_machine__6445__auto____1.call(this,state_12625);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6445__auto____0;
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6445__auto____1;
return state_machine__6445__auto__;
})()
;})(switch__6444__auto__,add_cell_BANG_,depth_compare,player_stars_text,player_standing_texs,player_shadow,close_QMARK_,player_pos,obstacle_types,polar_object_coords,trees,player_standing_sway,game_sprites,loader,player_walking_texs,shadow_tex,tex,c__6459__auto____$1,hit_sfx,lobster_big,game_map,star_tex,remove_cell_BANG_,tufts,game_space,pickup_textures,perlin_channel,title_text,floor_objects,pickup_sfx,tilemap,make_pickup,varela,wait,player,player_stars_icon,inst_12427,inst_12388,inst_12421,inst_12417,inst_12474,inst_12447,inst_12383,inst_12591,inst_12397,inst_12501,inst_12416,inst_12396,inst_12395,inst_12398,inst_12502,inst_12437,inst_12590,inst_12506,inst_12391,inst_12418,inst_12430,inst_12394,inst_12424,inst_12585,inst_12578,inst_12411,inst_12408,inst_12589,inst_12503,inst_12387,inst_12384,inst_12586,inst_12393,inst_12444,inst_12501__$1,inst_12502__$1,inst_12503__$1,inst_12506__$1,inst_12507,inst_12508,inst_12509,inst_12510,inst_12511,inst_12512,inst_12513,inst_12514,inst_12515,inst_12516,inst_12517,inst_12518,inst_12519,inst_12520,inst_12521,inst_12522,inst_12523,inst_12524,inst_12525,inst_12526,inst_12527,inst_12528,inst_12529,inst_12530,inst_12531,inst_12532,inst_12533,inst_12534,inst_12535,inst_12536,inst_12537,inst_12538,inst_12539,inst_12540,inst_12541,inst_12542,inst_12543,inst_12544,inst_12545,inst_12546,inst_12547,inst_12548,inst_12549,inst_12550,inst_12551,inst_12552,inst_12553,inst_12554,inst_12555,inst_12556,inst_12557,inst_12558,inst_12559,inst_12560,inst_12561,inst_12562,inst_12563,inst_12564,inst_12565,inst_12566,inst_12567,inst_12568,inst_12569,inst_12570,inst_12571,inst_12572,inst_12573,inst_12574,inst_12575,inst_12576,inst_12577,inst_12578__$1,inst_12583,inst_12584,inst_12585__$1,inst_12586__$1,inst_12587,inst_12588,inst_12589__$1,inst_12590__$1,inst_12591__$1,inst_12592,inst_12614,inst_12615,inst_12616,inst_12627,state_val_13386,c__6459__auto___13801))
})();
var state__6461__auto__ = (function (){var statearr_13636 = f__6460__auto__.call(null);
(statearr_13636[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6459__auto____$1);

return statearr_13636;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6461__auto__);
});
;})(add_cell_BANG_,depth_compare,player_stars_text,player_standing_texs,player_shadow,close_QMARK_,player_pos,obstacle_types,polar_object_coords,trees,player_standing_sway,game_sprites,loader,player_walking_texs,shadow_tex,tex,c__6459__auto____$1,hit_sfx,lobster_big,game_map,star_tex,remove_cell_BANG_,tufts,game_space,pickup_textures,perlin_channel,title_text,floor_objects,pickup_sfx,tilemap,make_pickup,varela,wait,player,player_stars_icon,inst_12427,inst_12388,inst_12421,inst_12417,inst_12474,inst_12447,inst_12383,inst_12591,inst_12397,inst_12501,inst_12416,inst_12396,inst_12395,inst_12398,inst_12502,inst_12437,inst_12590,inst_12506,inst_12391,inst_12418,inst_12430,inst_12394,inst_12424,inst_12585,inst_12578,inst_12411,inst_12408,inst_12589,inst_12503,inst_12387,inst_12384,inst_12586,inst_12393,inst_12444,inst_12501__$1,inst_12502__$1,inst_12503__$1,inst_12506__$1,inst_12507,inst_12508,inst_12509,inst_12510,inst_12511,inst_12512,inst_12513,inst_12514,inst_12515,inst_12516,inst_12517,inst_12518,inst_12519,inst_12520,inst_12521,inst_12522,inst_12523,inst_12524,inst_12525,inst_12526,inst_12527,inst_12528,inst_12529,inst_12530,inst_12531,inst_12532,inst_12533,inst_12534,inst_12535,inst_12536,inst_12537,inst_12538,inst_12539,inst_12540,inst_12541,inst_12542,inst_12543,inst_12544,inst_12545,inst_12546,inst_12547,inst_12548,inst_12549,inst_12550,inst_12551,inst_12552,inst_12553,inst_12554,inst_12555,inst_12556,inst_12557,inst_12558,inst_12559,inst_12560,inst_12561,inst_12562,inst_12563,inst_12564,inst_12565,inst_12566,inst_12567,inst_12568,inst_12569,inst_12570,inst_12571,inst_12572,inst_12573,inst_12574,inst_12575,inst_12576,inst_12577,inst_12578__$1,inst_12583,inst_12584,inst_12585__$1,inst_12586__$1,inst_12587,inst_12588,inst_12589__$1,inst_12590__$1,inst_12591__$1,inst_12592,inst_12614,inst_12615,inst_12616,inst_12627,state_val_13386,c__6459__auto___13801))
})();
var inst_12629 = cljs.core.async.impl.dispatch.run.call(null,inst_12628);
var inst_12630 = farn.sprite.set_anchor_BANG_.call(null,inst_12418,(0),(0));
var inst_12631 = farn.sprite.set_scale_BANG_.call(null,inst_12418,0.7);
var inst_12632 = farn.sprite.set_anchor_BANG_.call(null,inst_12421,(0),(0));
var inst_12633 = farn.core.ui_stage.addChild(inst_12418);
var inst_12634 = farn.core.ui_stage.addChild(inst_12421);
var inst_12663 = cljs.core.async.chan.call(null,(1));
var inst_12664 = (function (){var add_cell_BANG_ = inst_12590__$1;
var depth_compare = inst_12502__$1;
var player_stars_text = inst_12421;
var player_standing_texs = inst_12408;
var player_shadow = inst_12398;
var close_QMARK_ = inst_12506__$1;
var player_pos = inst_12589__$1;
var obstacle_types = inst_12430;
var polar_object_coords = inst_12503__$1;
var trees = inst_12437;
var player_standing_sway = inst_12411;
var game_sprites = inst_12585__$1;
var loader = inst_12383;
var player_walking_texs = inst_12416;
var shadow_tex = inst_12397;
var tex = inst_12395;
var c__6459__auto____$1 = inst_12663;
var hit_sfx = inst_12501__$1;
var lobster_big = inst_12387;
var game_map = inst_12578__$1;
var star_tex = inst_12417;
var remove_cell_BANG_ = inst_12591__$1;
var tufts = inst_12444;
var game_space = inst_12586__$1;
var pickup_textures = inst_12424;
var perlin_channel = inst_12384;
var title_text = inst_12394;
var floor_objects = inst_12427;
var pickup_sfx = inst_12474;
var tilemap = inst_12393;
var make_pickup = inst_12447;
var varela = inst_12388;
var wait = inst_12391;
var player = inst_12396;
var player_stars_icon = inst_12418;
return ((function (add_cell_BANG_,depth_compare,player_stars_text,player_standing_texs,player_shadow,close_QMARK_,player_pos,obstacle_types,polar_object_coords,trees,player_standing_sway,game_sprites,loader,player_walking_texs,shadow_tex,tex,c__6459__auto____$1,hit_sfx,lobster_big,game_map,star_tex,remove_cell_BANG_,tufts,game_space,pickup_textures,perlin_channel,title_text,floor_objects,pickup_sfx,tilemap,make_pickup,varela,wait,player,player_stars_icon,inst_12427,inst_12388,inst_12421,inst_12417,inst_12474,inst_12447,inst_12383,inst_12591,inst_12397,inst_12501,inst_12416,inst_12396,inst_12395,inst_12398,inst_12502,inst_12437,inst_12590,inst_12506,inst_12391,inst_12418,inst_12430,inst_12394,inst_12424,inst_12585,inst_12578,inst_12411,inst_12408,inst_12589,inst_12503,inst_12387,inst_12384,inst_12586,inst_12393,inst_12444,inst_12501__$1,inst_12502__$1,inst_12503__$1,inst_12506__$1,inst_12507,inst_12508,inst_12509,inst_12510,inst_12511,inst_12512,inst_12513,inst_12514,inst_12515,inst_12516,inst_12517,inst_12518,inst_12519,inst_12520,inst_12521,inst_12522,inst_12523,inst_12524,inst_12525,inst_12526,inst_12527,inst_12528,inst_12529,inst_12530,inst_12531,inst_12532,inst_12533,inst_12534,inst_12535,inst_12536,inst_12537,inst_12538,inst_12539,inst_12540,inst_12541,inst_12542,inst_12543,inst_12544,inst_12545,inst_12546,inst_12547,inst_12548,inst_12549,inst_12550,inst_12551,inst_12552,inst_12553,inst_12554,inst_12555,inst_12556,inst_12557,inst_12558,inst_12559,inst_12560,inst_12561,inst_12562,inst_12563,inst_12564,inst_12565,inst_12566,inst_12567,inst_12568,inst_12569,inst_12570,inst_12571,inst_12572,inst_12573,inst_12574,inst_12575,inst_12576,inst_12577,inst_12578__$1,inst_12583,inst_12584,inst_12585__$1,inst_12586__$1,inst_12587,inst_12588,inst_12589__$1,inst_12590__$1,inst_12591__$1,inst_12592,inst_12614,inst_12615,inst_12616,inst_12627,inst_12628,inst_12629,inst_12630,inst_12631,inst_12632,inst_12633,inst_12634,inst_12663,state_val_13386,c__6459__auto___13801){
return (function (){
var f__6460__auto__ = (function (){var switch__6444__auto__ = ((function (add_cell_BANG_,depth_compare,player_stars_text,player_standing_texs,player_shadow,close_QMARK_,player_pos,obstacle_types,polar_object_coords,trees,player_standing_sway,game_sprites,loader,player_walking_texs,shadow_tex,tex,c__6459__auto____$1,hit_sfx,lobster_big,game_map,star_tex,remove_cell_BANG_,tufts,game_space,pickup_textures,perlin_channel,title_text,floor_objects,pickup_sfx,tilemap,make_pickup,varela,wait,player,player_stars_icon,inst_12427,inst_12388,inst_12421,inst_12417,inst_12474,inst_12447,inst_12383,inst_12591,inst_12397,inst_12501,inst_12416,inst_12396,inst_12395,inst_12398,inst_12502,inst_12437,inst_12590,inst_12506,inst_12391,inst_12418,inst_12430,inst_12394,inst_12424,inst_12585,inst_12578,inst_12411,inst_12408,inst_12589,inst_12503,inst_12387,inst_12384,inst_12586,inst_12393,inst_12444,inst_12501__$1,inst_12502__$1,inst_12503__$1,inst_12506__$1,inst_12507,inst_12508,inst_12509,inst_12510,inst_12511,inst_12512,inst_12513,inst_12514,inst_12515,inst_12516,inst_12517,inst_12518,inst_12519,inst_12520,inst_12521,inst_12522,inst_12523,inst_12524,inst_12525,inst_12526,inst_12527,inst_12528,inst_12529,inst_12530,inst_12531,inst_12532,inst_12533,inst_12534,inst_12535,inst_12536,inst_12537,inst_12538,inst_12539,inst_12540,inst_12541,inst_12542,inst_12543,inst_12544,inst_12545,inst_12546,inst_12547,inst_12548,inst_12549,inst_12550,inst_12551,inst_12552,inst_12553,inst_12554,inst_12555,inst_12556,inst_12557,inst_12558,inst_12559,inst_12560,inst_12561,inst_12562,inst_12563,inst_12564,inst_12565,inst_12566,inst_12567,inst_12568,inst_12569,inst_12570,inst_12571,inst_12572,inst_12573,inst_12574,inst_12575,inst_12576,inst_12577,inst_12578__$1,inst_12583,inst_12584,inst_12585__$1,inst_12586__$1,inst_12587,inst_12588,inst_12589__$1,inst_12590__$1,inst_12591__$1,inst_12592,inst_12614,inst_12615,inst_12616,inst_12627,inst_12628,inst_12629,inst_12630,inst_12631,inst_12632,inst_12633,inst_12634,inst_12663,state_val_13386,c__6459__auto___13801){
return (function (state_12661){
var state_val_12662 = (state_12661[(1)]);
if((state_val_12662 === (7))){
var inst_12653 = (state_12661[(2)]);
var state_12661__$1 = (function (){var statearr_13637 = state_12661;
(statearr_13637[(7)] = inst_12653);

return statearr_13637;
})();
var statearr_13638_13987 = state_12661__$1;
(statearr_13638_13987[(2)] = null);

(statearr_13638_13987[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12662 === (6))){
var inst_12657 = (state_12661[(2)]);
var state_12661__$1 = state_12661;
var statearr_13639_13988 = state_12661__$1;
(statearr_13639_13988[(2)] = inst_12657);

(statearr_13639_13988[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12662 === (5))){
var state_12661__$1 = state_12661;
var statearr_13640_13989 = state_12661__$1;
(statearr_13640_13989[(2)] = null);

(statearr_13640_13989[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12662 === (4))){
var inst_12635 = (state_12661[(8)]);
var inst_12638 = window.innerWidth;
var inst_12639 = window.innerHeight;
var inst_12640 = (inst_12638 / (2));
var inst_12641 = (inst_12639 / (2));
var inst_12642 = (- inst_12640);
var inst_12643 = (inst_12642 + (5));
var inst_12644 = (- inst_12641);
var inst_12645 = (inst_12644 + (5));
var inst_12646 = farn.sprite.set_pos_BANG_.call(null,player_stars_icon,inst_12643,inst_12645);
var inst_12647 = (- inst_12640);
var inst_12648 = (inst_12647 + (45));
var inst_12649 = (- inst_12641);
var inst_12650 = (inst_12649 + (5));
var inst_12651 = farn.sprite.set_pos_BANG_.call(null,player_stars_text,inst_12648,inst_12650);
var state_12661__$1 = (function (){var statearr_13641 = state_12661;
(statearr_13641[(9)] = inst_12646);

(statearr_13641[(10)] = inst_12651);

return statearr_13641;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12661__$1,(7),inst_12635);
} else {
if((state_val_12662 === (3))){
var inst_12659 = (state_12661[(2)]);
var state_12661__$1 = state_12661;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12661__$1,inst_12659);
} else {
if((state_val_12662 === (2))){
var state_12661__$1 = state_12661;
var statearr_13642_13990 = state_12661__$1;
(statearr_13642_13990[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12662 === (1))){
var inst_12635 = farn.events.new_resize_chan.call(null);
var state_12661__$1 = (function (){var statearr_13644 = state_12661;
(statearr_13644[(8)] = inst_12635);

return statearr_13644;
})();
var statearr_13645_13991 = state_12661__$1;
(statearr_13645_13991[(2)] = null);

(statearr_13645_13991[(1)] = (2));


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
});})(add_cell_BANG_,depth_compare,player_stars_text,player_standing_texs,player_shadow,close_QMARK_,player_pos,obstacle_types,polar_object_coords,trees,player_standing_sway,game_sprites,loader,player_walking_texs,shadow_tex,tex,c__6459__auto____$1,hit_sfx,lobster_big,game_map,star_tex,remove_cell_BANG_,tufts,game_space,pickup_textures,perlin_channel,title_text,floor_objects,pickup_sfx,tilemap,make_pickup,varela,wait,player,player_stars_icon,inst_12427,inst_12388,inst_12421,inst_12417,inst_12474,inst_12447,inst_12383,inst_12591,inst_12397,inst_12501,inst_12416,inst_12396,inst_12395,inst_12398,inst_12502,inst_12437,inst_12590,inst_12506,inst_12391,inst_12418,inst_12430,inst_12394,inst_12424,inst_12585,inst_12578,inst_12411,inst_12408,inst_12589,inst_12503,inst_12387,inst_12384,inst_12586,inst_12393,inst_12444,inst_12501__$1,inst_12502__$1,inst_12503__$1,inst_12506__$1,inst_12507,inst_12508,inst_12509,inst_12510,inst_12511,inst_12512,inst_12513,inst_12514,inst_12515,inst_12516,inst_12517,inst_12518,inst_12519,inst_12520,inst_12521,inst_12522,inst_12523,inst_12524,inst_12525,inst_12526,inst_12527,inst_12528,inst_12529,inst_12530,inst_12531,inst_12532,inst_12533,inst_12534,inst_12535,inst_12536,inst_12537,inst_12538,inst_12539,inst_12540,inst_12541,inst_12542,inst_12543,inst_12544,inst_12545,inst_12546,inst_12547,inst_12548,inst_12549,inst_12550,inst_12551,inst_12552,inst_12553,inst_12554,inst_12555,inst_12556,inst_12557,inst_12558,inst_12559,inst_12560,inst_12561,inst_12562,inst_12563,inst_12564,inst_12565,inst_12566,inst_12567,inst_12568,inst_12569,inst_12570,inst_12571,inst_12572,inst_12573,inst_12574,inst_12575,inst_12576,inst_12577,inst_12578__$1,inst_12583,inst_12584,inst_12585__$1,inst_12586__$1,inst_12587,inst_12588,inst_12589__$1,inst_12590__$1,inst_12591__$1,inst_12592,inst_12614,inst_12615,inst_12616,inst_12627,inst_12628,inst_12629,inst_12630,inst_12631,inst_12632,inst_12633,inst_12634,inst_12663,state_val_13386,c__6459__auto___13801))
;
return ((function (switch__6444__auto__,add_cell_BANG_,depth_compare,player_stars_text,player_standing_texs,player_shadow,close_QMARK_,player_pos,obstacle_types,polar_object_coords,trees,player_standing_sway,game_sprites,loader,player_walking_texs,shadow_tex,tex,c__6459__auto____$1,hit_sfx,lobster_big,game_map,star_tex,remove_cell_BANG_,tufts,game_space,pickup_textures,perlin_channel,title_text,floor_objects,pickup_sfx,tilemap,make_pickup,varela,wait,player,player_stars_icon,inst_12427,inst_12388,inst_12421,inst_12417,inst_12474,inst_12447,inst_12383,inst_12591,inst_12397,inst_12501,inst_12416,inst_12396,inst_12395,inst_12398,inst_12502,inst_12437,inst_12590,inst_12506,inst_12391,inst_12418,inst_12430,inst_12394,inst_12424,inst_12585,inst_12578,inst_12411,inst_12408,inst_12589,inst_12503,inst_12387,inst_12384,inst_12586,inst_12393,inst_12444,inst_12501__$1,inst_12502__$1,inst_12503__$1,inst_12506__$1,inst_12507,inst_12508,inst_12509,inst_12510,inst_12511,inst_12512,inst_12513,inst_12514,inst_12515,inst_12516,inst_12517,inst_12518,inst_12519,inst_12520,inst_12521,inst_12522,inst_12523,inst_12524,inst_12525,inst_12526,inst_12527,inst_12528,inst_12529,inst_12530,inst_12531,inst_12532,inst_12533,inst_12534,inst_12535,inst_12536,inst_12537,inst_12538,inst_12539,inst_12540,inst_12541,inst_12542,inst_12543,inst_12544,inst_12545,inst_12546,inst_12547,inst_12548,inst_12549,inst_12550,inst_12551,inst_12552,inst_12553,inst_12554,inst_12555,inst_12556,inst_12557,inst_12558,inst_12559,inst_12560,inst_12561,inst_12562,inst_12563,inst_12564,inst_12565,inst_12566,inst_12567,inst_12568,inst_12569,inst_12570,inst_12571,inst_12572,inst_12573,inst_12574,inst_12575,inst_12576,inst_12577,inst_12578__$1,inst_12583,inst_12584,inst_12585__$1,inst_12586__$1,inst_12587,inst_12588,inst_12589__$1,inst_12590__$1,inst_12591__$1,inst_12592,inst_12614,inst_12615,inst_12616,inst_12627,inst_12628,inst_12629,inst_12630,inst_12631,inst_12632,inst_12633,inst_12634,inst_12663,state_val_13386,c__6459__auto___13801){
return (function() {
var state_machine__6445__auto__ = null;
var state_machine__6445__auto____0 = (function (){
var statearr_13649 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_13649[(0)] = state_machine__6445__auto__);

(statearr_13649[(1)] = (1));

return statearr_13649;
});
var state_machine__6445__auto____1 = (function (state_12661){
while(true){
var ret_value__6446__auto__ = (function (){try{while(true){
var result__6447__auto__ = switch__6444__auto__.call(null,state_12661);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6447__auto__;
}
break;
}
}catch (e13650){if((e13650 instanceof Object)){
var ex__6448__auto__ = e13650;
var statearr_13651_13992 = state_12661;
(statearr_13651_13992[(5)] = ex__6448__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12661);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13650;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13993 = state_12661;
state_12661 = G__13993;
continue;
} else {
return ret_value__6446__auto__;
}
break;
}
});
state_machine__6445__auto__ = function(state_12661){
switch(arguments.length){
case 0:
return state_machine__6445__auto____0.call(this);
case 1:
return state_machine__6445__auto____1.call(this,state_12661);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6445__auto____0;
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6445__auto____1;
return state_machine__6445__auto__;
})()
;})(switch__6444__auto__,add_cell_BANG_,depth_compare,player_stars_text,player_standing_texs,player_shadow,close_QMARK_,player_pos,obstacle_types,polar_object_coords,trees,player_standing_sway,game_sprites,loader,player_walking_texs,shadow_tex,tex,c__6459__auto____$1,hit_sfx,lobster_big,game_map,star_tex,remove_cell_BANG_,tufts,game_space,pickup_textures,perlin_channel,title_text,floor_objects,pickup_sfx,tilemap,make_pickup,varela,wait,player,player_stars_icon,inst_12427,inst_12388,inst_12421,inst_12417,inst_12474,inst_12447,inst_12383,inst_12591,inst_12397,inst_12501,inst_12416,inst_12396,inst_12395,inst_12398,inst_12502,inst_12437,inst_12590,inst_12506,inst_12391,inst_12418,inst_12430,inst_12394,inst_12424,inst_12585,inst_12578,inst_12411,inst_12408,inst_12589,inst_12503,inst_12387,inst_12384,inst_12586,inst_12393,inst_12444,inst_12501__$1,inst_12502__$1,inst_12503__$1,inst_12506__$1,inst_12507,inst_12508,inst_12509,inst_12510,inst_12511,inst_12512,inst_12513,inst_12514,inst_12515,inst_12516,inst_12517,inst_12518,inst_12519,inst_12520,inst_12521,inst_12522,inst_12523,inst_12524,inst_12525,inst_12526,inst_12527,inst_12528,inst_12529,inst_12530,inst_12531,inst_12532,inst_12533,inst_12534,inst_12535,inst_12536,inst_12537,inst_12538,inst_12539,inst_12540,inst_12541,inst_12542,inst_12543,inst_12544,inst_12545,inst_12546,inst_12547,inst_12548,inst_12549,inst_12550,inst_12551,inst_12552,inst_12553,inst_12554,inst_12555,inst_12556,inst_12557,inst_12558,inst_12559,inst_12560,inst_12561,inst_12562,inst_12563,inst_12564,inst_12565,inst_12566,inst_12567,inst_12568,inst_12569,inst_12570,inst_12571,inst_12572,inst_12573,inst_12574,inst_12575,inst_12576,inst_12577,inst_12578__$1,inst_12583,inst_12584,inst_12585__$1,inst_12586__$1,inst_12587,inst_12588,inst_12589__$1,inst_12590__$1,inst_12591__$1,inst_12592,inst_12614,inst_12615,inst_12616,inst_12627,inst_12628,inst_12629,inst_12630,inst_12631,inst_12632,inst_12633,inst_12634,inst_12663,state_val_13386,c__6459__auto___13801))
})();
var state__6461__auto__ = (function (){var statearr_13652 = f__6460__auto__.call(null);
(statearr_13652[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6459__auto____$1);

return statearr_13652;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6461__auto__);
});
;})(add_cell_BANG_,depth_compare,player_stars_text,player_standing_texs,player_shadow,close_QMARK_,player_pos,obstacle_types,polar_object_coords,trees,player_standing_sway,game_sprites,loader,player_walking_texs,shadow_tex,tex,c__6459__auto____$1,hit_sfx,lobster_big,game_map,star_tex,remove_cell_BANG_,tufts,game_space,pickup_textures,perlin_channel,title_text,floor_objects,pickup_sfx,tilemap,make_pickup,varela,wait,player,player_stars_icon,inst_12427,inst_12388,inst_12421,inst_12417,inst_12474,inst_12447,inst_12383,inst_12591,inst_12397,inst_12501,inst_12416,inst_12396,inst_12395,inst_12398,inst_12502,inst_12437,inst_12590,inst_12506,inst_12391,inst_12418,inst_12430,inst_12394,inst_12424,inst_12585,inst_12578,inst_12411,inst_12408,inst_12589,inst_12503,inst_12387,inst_12384,inst_12586,inst_12393,inst_12444,inst_12501__$1,inst_12502__$1,inst_12503__$1,inst_12506__$1,inst_12507,inst_12508,inst_12509,inst_12510,inst_12511,inst_12512,inst_12513,inst_12514,inst_12515,inst_12516,inst_12517,inst_12518,inst_12519,inst_12520,inst_12521,inst_12522,inst_12523,inst_12524,inst_12525,inst_12526,inst_12527,inst_12528,inst_12529,inst_12530,inst_12531,inst_12532,inst_12533,inst_12534,inst_12535,inst_12536,inst_12537,inst_12538,inst_12539,inst_12540,inst_12541,inst_12542,inst_12543,inst_12544,inst_12545,inst_12546,inst_12547,inst_12548,inst_12549,inst_12550,inst_12551,inst_12552,inst_12553,inst_12554,inst_12555,inst_12556,inst_12557,inst_12558,inst_12559,inst_12560,inst_12561,inst_12562,inst_12563,inst_12564,inst_12565,inst_12566,inst_12567,inst_12568,inst_12569,inst_12570,inst_12571,inst_12572,inst_12573,inst_12574,inst_12575,inst_12576,inst_12577,inst_12578__$1,inst_12583,inst_12584,inst_12585__$1,inst_12586__$1,inst_12587,inst_12588,inst_12589__$1,inst_12590__$1,inst_12591__$1,inst_12592,inst_12614,inst_12615,inst_12616,inst_12627,inst_12628,inst_12629,inst_12630,inst_12631,inst_12632,inst_12633,inst_12634,inst_12663,state_val_13386,c__6459__auto___13801))
})();
var inst_12665 = cljs.core.async.impl.dispatch.run.call(null,inst_12664);
var inst_12666 = (function (){var add_cell_BANG_ = inst_12590__$1;
var depth_compare = inst_12502__$1;
var player_stars_text = inst_12421;
var player_standing_texs = inst_12408;
var player_shadow = inst_12398;
var close_QMARK_ = inst_12506__$1;
var player_pos = inst_12589__$1;
var obstacle_types = inst_12430;
var polar_object_coords = inst_12503__$1;
var trees = inst_12437;
var player_standing_sway = inst_12411;
var game_sprites = inst_12585__$1;
var loader = inst_12383;
var player_walking_texs = inst_12416;
var shadow_tex = inst_12397;
var tex = inst_12395;
var hit_sfx = inst_12501__$1;
var lobster_big = inst_12387;
var game_map = inst_12578__$1;
var star_tex = inst_12417;
var remove_cell_BANG_ = inst_12591__$1;
var tufts = inst_12444;
var game_space = inst_12586__$1;
var pickup_textures = inst_12424;
var perlin_channel = inst_12384;
var title_text = inst_12394;
var floor_objects = inst_12427;
var pickup_sfx = inst_12474;
var tilemap = inst_12393;
var make_pickup = inst_12447;
var varela = inst_12388;
var wait = inst_12391;
var player = inst_12396;
var player_stars_icon = inst_12418;
return ((function (add_cell_BANG_,depth_compare,player_stars_text,player_standing_texs,player_shadow,close_QMARK_,player_pos,obstacle_types,polar_object_coords,trees,player_standing_sway,game_sprites,loader,player_walking_texs,shadow_tex,tex,hit_sfx,lobster_big,game_map,star_tex,remove_cell_BANG_,tufts,game_space,pickup_textures,perlin_channel,title_text,floor_objects,pickup_sfx,tilemap,make_pickup,varela,wait,player,player_stars_icon,inst_12427,inst_12388,inst_12421,inst_12417,inst_12474,inst_12447,inst_12383,inst_12591,inst_12397,inst_12501,inst_12416,inst_12396,inst_12395,inst_12398,inst_12502,inst_12437,inst_12590,inst_12506,inst_12391,inst_12418,inst_12430,inst_12394,inst_12424,inst_12585,inst_12578,inst_12411,inst_12408,inst_12589,inst_12503,inst_12387,inst_12384,inst_12586,inst_12393,inst_12444,inst_12501__$1,inst_12502__$1,inst_12503__$1,inst_12506__$1,inst_12507,inst_12508,inst_12509,inst_12510,inst_12511,inst_12512,inst_12513,inst_12514,inst_12515,inst_12516,inst_12517,inst_12518,inst_12519,inst_12520,inst_12521,inst_12522,inst_12523,inst_12524,inst_12525,inst_12526,inst_12527,inst_12528,inst_12529,inst_12530,inst_12531,inst_12532,inst_12533,inst_12534,inst_12535,inst_12536,inst_12537,inst_12538,inst_12539,inst_12540,inst_12541,inst_12542,inst_12543,inst_12544,inst_12545,inst_12546,inst_12547,inst_12548,inst_12549,inst_12550,inst_12551,inst_12552,inst_12553,inst_12554,inst_12555,inst_12556,inst_12557,inst_12558,inst_12559,inst_12560,inst_12561,inst_12562,inst_12563,inst_12564,inst_12565,inst_12566,inst_12567,inst_12568,inst_12569,inst_12570,inst_12571,inst_12572,inst_12573,inst_12574,inst_12575,inst_12576,inst_12577,inst_12578__$1,inst_12583,inst_12584,inst_12585__$1,inst_12586__$1,inst_12587,inst_12588,inst_12589__$1,inst_12590__$1,inst_12591__$1,inst_12592,inst_12614,inst_12615,inst_12616,inst_12627,inst_12628,inst_12629,inst_12630,inst_12631,inst_12632,inst_12633,inst_12634,inst_12663,inst_12664,inst_12665,state_val_13386,c__6459__auto___13801){
return (function (key,ref,old,new$){
return player_stars_text.setText([cljs.core.str(new$)].join(''));
});
;})(add_cell_BANG_,depth_compare,player_stars_text,player_standing_texs,player_shadow,close_QMARK_,player_pos,obstacle_types,polar_object_coords,trees,player_standing_sway,game_sprites,loader,player_walking_texs,shadow_tex,tex,hit_sfx,lobster_big,game_map,star_tex,remove_cell_BANG_,tufts,game_space,pickup_textures,perlin_channel,title_text,floor_objects,pickup_sfx,tilemap,make_pickup,varela,wait,player,player_stars_icon,inst_12427,inst_12388,inst_12421,inst_12417,inst_12474,inst_12447,inst_12383,inst_12591,inst_12397,inst_12501,inst_12416,inst_12396,inst_12395,inst_12398,inst_12502,inst_12437,inst_12590,inst_12506,inst_12391,inst_12418,inst_12430,inst_12394,inst_12424,inst_12585,inst_12578,inst_12411,inst_12408,inst_12589,inst_12503,inst_12387,inst_12384,inst_12586,inst_12393,inst_12444,inst_12501__$1,inst_12502__$1,inst_12503__$1,inst_12506__$1,inst_12507,inst_12508,inst_12509,inst_12510,inst_12511,inst_12512,inst_12513,inst_12514,inst_12515,inst_12516,inst_12517,inst_12518,inst_12519,inst_12520,inst_12521,inst_12522,inst_12523,inst_12524,inst_12525,inst_12526,inst_12527,inst_12528,inst_12529,inst_12530,inst_12531,inst_12532,inst_12533,inst_12534,inst_12535,inst_12536,inst_12537,inst_12538,inst_12539,inst_12540,inst_12541,inst_12542,inst_12543,inst_12544,inst_12545,inst_12546,inst_12547,inst_12548,inst_12549,inst_12550,inst_12551,inst_12552,inst_12553,inst_12554,inst_12555,inst_12556,inst_12557,inst_12558,inst_12559,inst_12560,inst_12561,inst_12562,inst_12563,inst_12564,inst_12565,inst_12566,inst_12567,inst_12568,inst_12569,inst_12570,inst_12571,inst_12572,inst_12573,inst_12574,inst_12575,inst_12576,inst_12577,inst_12578__$1,inst_12583,inst_12584,inst_12585__$1,inst_12586__$1,inst_12587,inst_12588,inst_12589__$1,inst_12590__$1,inst_12591__$1,inst_12592,inst_12614,inst_12615,inst_12616,inst_12627,inst_12628,inst_12629,inst_12630,inst_12631,inst_12632,inst_12633,inst_12634,inst_12663,inst_12664,inst_12665,state_val_13386,c__6459__auto___13801))
})();
var inst_12667 = cljs.core.add_watch.call(null,farn.core.player_stars,new cljs.core.Keyword(null,"add","add",235287739),inst_12666);
var inst_12668 = farn.rex.launch_rex.call(null,farn.core.ui_stage);
var inst_12714 = cljs.core.async.chan.call(null,(1));
var inst_12715 = (function (){var add_cell_BANG_ = inst_12590__$1;
var depth_compare = inst_12502__$1;
var player_stars_text = inst_12421;
var player_standing_texs = inst_12408;
var player_shadow = inst_12398;
var close_QMARK_ = inst_12506__$1;
var player_pos = inst_12589__$1;
var obstacle_types = inst_12430;
var polar_object_coords = inst_12503__$1;
var trees = inst_12437;
var player_standing_sway = inst_12411;
var game_sprites = inst_12585__$1;
var loader = inst_12383;
var player_walking_texs = inst_12416;
var shadow_tex = inst_12397;
var tex = inst_12395;
var c__6459__auto____$1 = inst_12714;
var hit_sfx = inst_12501__$1;
var lobster_big = inst_12387;
var game_map = inst_12578__$1;
var star_tex = inst_12417;
var remove_cell_BANG_ = inst_12591__$1;
var tufts = inst_12444;
var game_space = inst_12586__$1;
var pickup_textures = inst_12424;
var perlin_channel = inst_12384;
var title_text = inst_12394;
var floor_objects = inst_12427;
var pickup_sfx = inst_12474;
var tilemap = inst_12393;
var make_pickup = inst_12447;
var varela = inst_12388;
var wait = inst_12391;
var player = inst_12396;
var player_stars_icon = inst_12418;
return ((function (add_cell_BANG_,depth_compare,player_stars_text,player_standing_texs,player_shadow,close_QMARK_,player_pos,obstacle_types,polar_object_coords,trees,player_standing_sway,game_sprites,loader,player_walking_texs,shadow_tex,tex,c__6459__auto____$1,hit_sfx,lobster_big,game_map,star_tex,remove_cell_BANG_,tufts,game_space,pickup_textures,perlin_channel,title_text,floor_objects,pickup_sfx,tilemap,make_pickup,varela,wait,player,player_stars_icon,inst_12427,inst_12388,inst_12421,inst_12417,inst_12474,inst_12447,inst_12383,inst_12591,inst_12397,inst_12501,inst_12416,inst_12396,inst_12395,inst_12398,inst_12502,inst_12437,inst_12590,inst_12506,inst_12391,inst_12418,inst_12430,inst_12394,inst_12424,inst_12585,inst_12578,inst_12411,inst_12408,inst_12589,inst_12503,inst_12387,inst_12384,inst_12586,inst_12393,inst_12444,inst_12501__$1,inst_12502__$1,inst_12503__$1,inst_12506__$1,inst_12507,inst_12508,inst_12509,inst_12510,inst_12511,inst_12512,inst_12513,inst_12514,inst_12515,inst_12516,inst_12517,inst_12518,inst_12519,inst_12520,inst_12521,inst_12522,inst_12523,inst_12524,inst_12525,inst_12526,inst_12527,inst_12528,inst_12529,inst_12530,inst_12531,inst_12532,inst_12533,inst_12534,inst_12535,inst_12536,inst_12537,inst_12538,inst_12539,inst_12540,inst_12541,inst_12542,inst_12543,inst_12544,inst_12545,inst_12546,inst_12547,inst_12548,inst_12549,inst_12550,inst_12551,inst_12552,inst_12553,inst_12554,inst_12555,inst_12556,inst_12557,inst_12558,inst_12559,inst_12560,inst_12561,inst_12562,inst_12563,inst_12564,inst_12565,inst_12566,inst_12567,inst_12568,inst_12569,inst_12570,inst_12571,inst_12572,inst_12573,inst_12574,inst_12575,inst_12576,inst_12577,inst_12578__$1,inst_12583,inst_12584,inst_12585__$1,inst_12586__$1,inst_12587,inst_12588,inst_12589__$1,inst_12590__$1,inst_12591__$1,inst_12592,inst_12614,inst_12615,inst_12616,inst_12627,inst_12628,inst_12629,inst_12630,inst_12631,inst_12632,inst_12633,inst_12634,inst_12663,inst_12664,inst_12665,inst_12666,inst_12667,inst_12668,inst_12714,state_val_13386,c__6459__auto___13801){
return (function (){
var f__6460__auto__ = (function (){var switch__6444__auto__ = ((function (add_cell_BANG_,depth_compare,player_stars_text,player_standing_texs,player_shadow,close_QMARK_,player_pos,obstacle_types,polar_object_coords,trees,player_standing_sway,game_sprites,loader,player_walking_texs,shadow_tex,tex,c__6459__auto____$1,hit_sfx,lobster_big,game_map,star_tex,remove_cell_BANG_,tufts,game_space,pickup_textures,perlin_channel,title_text,floor_objects,pickup_sfx,tilemap,make_pickup,varela,wait,player,player_stars_icon,inst_12427,inst_12388,inst_12421,inst_12417,inst_12474,inst_12447,inst_12383,inst_12591,inst_12397,inst_12501,inst_12416,inst_12396,inst_12395,inst_12398,inst_12502,inst_12437,inst_12590,inst_12506,inst_12391,inst_12418,inst_12430,inst_12394,inst_12424,inst_12585,inst_12578,inst_12411,inst_12408,inst_12589,inst_12503,inst_12387,inst_12384,inst_12586,inst_12393,inst_12444,inst_12501__$1,inst_12502__$1,inst_12503__$1,inst_12506__$1,inst_12507,inst_12508,inst_12509,inst_12510,inst_12511,inst_12512,inst_12513,inst_12514,inst_12515,inst_12516,inst_12517,inst_12518,inst_12519,inst_12520,inst_12521,inst_12522,inst_12523,inst_12524,inst_12525,inst_12526,inst_12527,inst_12528,inst_12529,inst_12530,inst_12531,inst_12532,inst_12533,inst_12534,inst_12535,inst_12536,inst_12537,inst_12538,inst_12539,inst_12540,inst_12541,inst_12542,inst_12543,inst_12544,inst_12545,inst_12546,inst_12547,inst_12548,inst_12549,inst_12550,inst_12551,inst_12552,inst_12553,inst_12554,inst_12555,inst_12556,inst_12557,inst_12558,inst_12559,inst_12560,inst_12561,inst_12562,inst_12563,inst_12564,inst_12565,inst_12566,inst_12567,inst_12568,inst_12569,inst_12570,inst_12571,inst_12572,inst_12573,inst_12574,inst_12575,inst_12576,inst_12577,inst_12578__$1,inst_12583,inst_12584,inst_12585__$1,inst_12586__$1,inst_12587,inst_12588,inst_12589__$1,inst_12590__$1,inst_12591__$1,inst_12592,inst_12614,inst_12615,inst_12616,inst_12627,inst_12628,inst_12629,inst_12630,inst_12631,inst_12632,inst_12633,inst_12634,inst_12663,inst_12664,inst_12665,inst_12666,inst_12667,inst_12668,inst_12714,state_val_13386,c__6459__auto___13801){
return (function (state_12712){
var state_val_12713 = (state_12712[(1)]);
if((state_val_12713 === (7))){
var inst_12687 = (state_12712[(2)]);
var inst_12688 = cljs.core.deref.call(null,farn.core.pickup_store);
var inst_12689 = cljs.core.count.call(null,inst_12688);
var inst_12690 = (inst_12689 < farn.core.max_pickups);
var state_12712__$1 = (function (){var statearr_13653 = state_12712;
(statearr_13653[(7)] = inst_12687);

return statearr_13653;
})();
if(cljs.core.truth_(inst_12690)){
var statearr_13654_13994 = state_12712__$1;
(statearr_13654_13994[(1)] = (8));

} else {
var statearr_13655_13995 = state_12712__$1;
(statearr_13655_13995[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12713 === (1))){
var inst_12669 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_12670 = [(0),(0)];
var inst_12671 = (new cljs.core.PersistentVector(null,2,(5),inst_12669,inst_12670,null));
var inst_12672 = make_pickup.call(null,inst_12671,(10000),new cljs.core.Keyword(null,"pickup-baby-1","pickup-baby-1",-1650486973),(2000));
var inst_12673 = cljs.core.swap_BANG_.call(null,farn.core.pickup_store,cljs.core.conj,inst_12672);
var inst_12674 = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(inst_12672);
var inst_12675 = cljs.core.reset_BANG_.call(null,farn.core.baby_position,inst_12674);
var inst_12676 = new cljs.core.Keyword(null,"sprite","sprite",172516848).cljs$core$IFn$_invoke$arity$1(inst_12672);
var inst_12677 = new cljs.core.Keyword(null,"scale","scale",-230427353).cljs$core$IFn$_invoke$arity$1(inst_12672);
var inst_12678 = farn.sprite.set_scale_BANG_.call(null,inst_12676,inst_12677);
var inst_12679 = new cljs.core.Keyword(null,"sprite","sprite",172516848).cljs$core$IFn$_invoke$arity$1(inst_12672);
var inst_12680 = farn.core.main_stage.addChild(inst_12679);
var inst_12681 = new cljs.core.Keyword(null,"shadow","shadow",873231803).cljs$core$IFn$_invoke$arity$1(inst_12672);
var inst_12682 = farn.core.main_stage.addChild(inst_12681);
var state_12712__$1 = (function (){var statearr_13656 = state_12712;
(statearr_13656[(8)] = inst_12678);

(statearr_13656[(9)] = inst_12682);

(statearr_13656[(10)] = inst_12673);

(statearr_13656[(11)] = inst_12680);

(statearr_13656[(12)] = inst_12675);

return statearr_13656;
})();
var statearr_13657_13996 = state_12712__$1;
(statearr_13657_13996[(2)] = null);

(statearr_13657_13996[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12713 === (4))){
var inst_12685 = cljs.core.async.timeout.call(null,(150));
var state_12712__$1 = state_12712;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12712__$1,(7),inst_12685);
} else {
if((state_val_12713 === (6))){
var inst_12708 = (state_12712[(2)]);
var state_12712__$1 = state_12712;
var statearr_13658_13997 = state_12712__$1;
(statearr_13658_13997[(2)] = inst_12708);

(statearr_13658_13997[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12713 === (3))){
var inst_12710 = (state_12712[(2)]);
var state_12712__$1 = state_12712;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12712__$1,inst_12710);
} else {
if((state_val_12713 === (2))){
var state_12712__$1 = state_12712;
var statearr_13659_13998 = state_12712__$1;
(statearr_13659_13998[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12713 === (9))){
var state_12712__$1 = state_12712;
var statearr_13661_13999 = state_12712__$1;
(statearr_13661_13999[(2)] = null);

(statearr_13661_13999[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12713 === (5))){
var state_12712__$1 = state_12712;
var statearr_13662_14000 = state_12712__$1;
(statearr_13662_14000[(2)] = null);

(statearr_13662_14000[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12713 === (10))){
var inst_12704 = (state_12712[(2)]);
var state_12712__$1 = (function (){var statearr_13663 = state_12712;
(statearr_13663[(13)] = inst_12704);

return statearr_13663;
})();
var statearr_13664_14001 = state_12712__$1;
(statearr_13664_14001[(2)] = null);

(statearr_13664_14001[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12713 === (8))){
var inst_12692 = cljs.core.deref.call(null,farn.core.last_player_position);
var inst_12693 = make_pickup.call(null,inst_12692,farn.core.pickup_spread);
var inst_12694 = cljs.core.swap_BANG_.call(null,farn.core.pickup_store,cljs.core.conj,inst_12693);
var inst_12695 = new cljs.core.Keyword(null,"sprite","sprite",172516848).cljs$core$IFn$_invoke$arity$1(inst_12693);
var inst_12696 = new cljs.core.Keyword(null,"scale","scale",-230427353).cljs$core$IFn$_invoke$arity$1(inst_12693);
var inst_12697 = farn.sprite.set_scale_BANG_.call(null,inst_12695,inst_12696);
var inst_12698 = new cljs.core.Keyword(null,"sprite","sprite",172516848).cljs$core$IFn$_invoke$arity$1(inst_12693);
var inst_12699 = farn.core.main_stage.addChild(inst_12698);
var inst_12700 = new cljs.core.Keyword(null,"shadow","shadow",873231803).cljs$core$IFn$_invoke$arity$1(inst_12693);
var inst_12701 = farn.core.main_stage.addChild(inst_12700);
var state_12712__$1 = (function (){var statearr_13665 = state_12712;
(statearr_13665[(14)] = inst_12694);

(statearr_13665[(15)] = inst_12697);

(statearr_13665[(16)] = inst_12699);

return statearr_13665;
})();
var statearr_13666_14002 = state_12712__$1;
(statearr_13666_14002[(2)] = inst_12701);

(statearr_13666_14002[(1)] = (10));


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
});})(add_cell_BANG_,depth_compare,player_stars_text,player_standing_texs,player_shadow,close_QMARK_,player_pos,obstacle_types,polar_object_coords,trees,player_standing_sway,game_sprites,loader,player_walking_texs,shadow_tex,tex,c__6459__auto____$1,hit_sfx,lobster_big,game_map,star_tex,remove_cell_BANG_,tufts,game_space,pickup_textures,perlin_channel,title_text,floor_objects,pickup_sfx,tilemap,make_pickup,varela,wait,player,player_stars_icon,inst_12427,inst_12388,inst_12421,inst_12417,inst_12474,inst_12447,inst_12383,inst_12591,inst_12397,inst_12501,inst_12416,inst_12396,inst_12395,inst_12398,inst_12502,inst_12437,inst_12590,inst_12506,inst_12391,inst_12418,inst_12430,inst_12394,inst_12424,inst_12585,inst_12578,inst_12411,inst_12408,inst_12589,inst_12503,inst_12387,inst_12384,inst_12586,inst_12393,inst_12444,inst_12501__$1,inst_12502__$1,inst_12503__$1,inst_12506__$1,inst_12507,inst_12508,inst_12509,inst_12510,inst_12511,inst_12512,inst_12513,inst_12514,inst_12515,inst_12516,inst_12517,inst_12518,inst_12519,inst_12520,inst_12521,inst_12522,inst_12523,inst_12524,inst_12525,inst_12526,inst_12527,inst_12528,inst_12529,inst_12530,inst_12531,inst_12532,inst_12533,inst_12534,inst_12535,inst_12536,inst_12537,inst_12538,inst_12539,inst_12540,inst_12541,inst_12542,inst_12543,inst_12544,inst_12545,inst_12546,inst_12547,inst_12548,inst_12549,inst_12550,inst_12551,inst_12552,inst_12553,inst_12554,inst_12555,inst_12556,inst_12557,inst_12558,inst_12559,inst_12560,inst_12561,inst_12562,inst_12563,inst_12564,inst_12565,inst_12566,inst_12567,inst_12568,inst_12569,inst_12570,inst_12571,inst_12572,inst_12573,inst_12574,inst_12575,inst_12576,inst_12577,inst_12578__$1,inst_12583,inst_12584,inst_12585__$1,inst_12586__$1,inst_12587,inst_12588,inst_12589__$1,inst_12590__$1,inst_12591__$1,inst_12592,inst_12614,inst_12615,inst_12616,inst_12627,inst_12628,inst_12629,inst_12630,inst_12631,inst_12632,inst_12633,inst_12634,inst_12663,inst_12664,inst_12665,inst_12666,inst_12667,inst_12668,inst_12714,state_val_13386,c__6459__auto___13801))
;
return ((function (switch__6444__auto__,add_cell_BANG_,depth_compare,player_stars_text,player_standing_texs,player_shadow,close_QMARK_,player_pos,obstacle_types,polar_object_coords,trees,player_standing_sway,game_sprites,loader,player_walking_texs,shadow_tex,tex,c__6459__auto____$1,hit_sfx,lobster_big,game_map,star_tex,remove_cell_BANG_,tufts,game_space,pickup_textures,perlin_channel,title_text,floor_objects,pickup_sfx,tilemap,make_pickup,varela,wait,player,player_stars_icon,inst_12427,inst_12388,inst_12421,inst_12417,inst_12474,inst_12447,inst_12383,inst_12591,inst_12397,inst_12501,inst_12416,inst_12396,inst_12395,inst_12398,inst_12502,inst_12437,inst_12590,inst_12506,inst_12391,inst_12418,inst_12430,inst_12394,inst_12424,inst_12585,inst_12578,inst_12411,inst_12408,inst_12589,inst_12503,inst_12387,inst_12384,inst_12586,inst_12393,inst_12444,inst_12501__$1,inst_12502__$1,inst_12503__$1,inst_12506__$1,inst_12507,inst_12508,inst_12509,inst_12510,inst_12511,inst_12512,inst_12513,inst_12514,inst_12515,inst_12516,inst_12517,inst_12518,inst_12519,inst_12520,inst_12521,inst_12522,inst_12523,inst_12524,inst_12525,inst_12526,inst_12527,inst_12528,inst_12529,inst_12530,inst_12531,inst_12532,inst_12533,inst_12534,inst_12535,inst_12536,inst_12537,inst_12538,inst_12539,inst_12540,inst_12541,inst_12542,inst_12543,inst_12544,inst_12545,inst_12546,inst_12547,inst_12548,inst_12549,inst_12550,inst_12551,inst_12552,inst_12553,inst_12554,inst_12555,inst_12556,inst_12557,inst_12558,inst_12559,inst_12560,inst_12561,inst_12562,inst_12563,inst_12564,inst_12565,inst_12566,inst_12567,inst_12568,inst_12569,inst_12570,inst_12571,inst_12572,inst_12573,inst_12574,inst_12575,inst_12576,inst_12577,inst_12578__$1,inst_12583,inst_12584,inst_12585__$1,inst_12586__$1,inst_12587,inst_12588,inst_12589__$1,inst_12590__$1,inst_12591__$1,inst_12592,inst_12614,inst_12615,inst_12616,inst_12627,inst_12628,inst_12629,inst_12630,inst_12631,inst_12632,inst_12633,inst_12634,inst_12663,inst_12664,inst_12665,inst_12666,inst_12667,inst_12668,inst_12714,state_val_13386,c__6459__auto___13801){
return (function() {
var state_machine__6445__auto__ = null;
var state_machine__6445__auto____0 = (function (){
var statearr_13670 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13670[(0)] = state_machine__6445__auto__);

(statearr_13670[(1)] = (1));

return statearr_13670;
});
var state_machine__6445__auto____1 = (function (state_12712){
while(true){
var ret_value__6446__auto__ = (function (){try{while(true){
var result__6447__auto__ = switch__6444__auto__.call(null,state_12712);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6447__auto__;
}
break;
}
}catch (e13671){if((e13671 instanceof Object)){
var ex__6448__auto__ = e13671;
var statearr_13672_14003 = state_12712;
(statearr_13672_14003[(5)] = ex__6448__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12712);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13671;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14004 = state_12712;
state_12712 = G__14004;
continue;
} else {
return ret_value__6446__auto__;
}
break;
}
});
state_machine__6445__auto__ = function(state_12712){
switch(arguments.length){
case 0:
return state_machine__6445__auto____0.call(this);
case 1:
return state_machine__6445__auto____1.call(this,state_12712);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6445__auto____0;
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6445__auto____1;
return state_machine__6445__auto__;
})()
;})(switch__6444__auto__,add_cell_BANG_,depth_compare,player_stars_text,player_standing_texs,player_shadow,close_QMARK_,player_pos,obstacle_types,polar_object_coords,trees,player_standing_sway,game_sprites,loader,player_walking_texs,shadow_tex,tex,c__6459__auto____$1,hit_sfx,lobster_big,game_map,star_tex,remove_cell_BANG_,tufts,game_space,pickup_textures,perlin_channel,title_text,floor_objects,pickup_sfx,tilemap,make_pickup,varela,wait,player,player_stars_icon,inst_12427,inst_12388,inst_12421,inst_12417,inst_12474,inst_12447,inst_12383,inst_12591,inst_12397,inst_12501,inst_12416,inst_12396,inst_12395,inst_12398,inst_12502,inst_12437,inst_12590,inst_12506,inst_12391,inst_12418,inst_12430,inst_12394,inst_12424,inst_12585,inst_12578,inst_12411,inst_12408,inst_12589,inst_12503,inst_12387,inst_12384,inst_12586,inst_12393,inst_12444,inst_12501__$1,inst_12502__$1,inst_12503__$1,inst_12506__$1,inst_12507,inst_12508,inst_12509,inst_12510,inst_12511,inst_12512,inst_12513,inst_12514,inst_12515,inst_12516,inst_12517,inst_12518,inst_12519,inst_12520,inst_12521,inst_12522,inst_12523,inst_12524,inst_12525,inst_12526,inst_12527,inst_12528,inst_12529,inst_12530,inst_12531,inst_12532,inst_12533,inst_12534,inst_12535,inst_12536,inst_12537,inst_12538,inst_12539,inst_12540,inst_12541,inst_12542,inst_12543,inst_12544,inst_12545,inst_12546,inst_12547,inst_12548,inst_12549,inst_12550,inst_12551,inst_12552,inst_12553,inst_12554,inst_12555,inst_12556,inst_12557,inst_12558,inst_12559,inst_12560,inst_12561,inst_12562,inst_12563,inst_12564,inst_12565,inst_12566,inst_12567,inst_12568,inst_12569,inst_12570,inst_12571,inst_12572,inst_12573,inst_12574,inst_12575,inst_12576,inst_12577,inst_12578__$1,inst_12583,inst_12584,inst_12585__$1,inst_12586__$1,inst_12587,inst_12588,inst_12589__$1,inst_12590__$1,inst_12591__$1,inst_12592,inst_12614,inst_12615,inst_12616,inst_12627,inst_12628,inst_12629,inst_12630,inst_12631,inst_12632,inst_12633,inst_12634,inst_12663,inst_12664,inst_12665,inst_12666,inst_12667,inst_12668,inst_12714,state_val_13386,c__6459__auto___13801))
})();
var state__6461__auto__ = (function (){var statearr_13673 = f__6460__auto__.call(null);
(statearr_13673[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6459__auto____$1);

return statearr_13673;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6461__auto__);
});
;})(add_cell_BANG_,depth_compare,player_stars_text,player_standing_texs,player_shadow,close_QMARK_,player_pos,obstacle_types,polar_object_coords,trees,player_standing_sway,game_sprites,loader,player_walking_texs,shadow_tex,tex,c__6459__auto____$1,hit_sfx,lobster_big,game_map,star_tex,remove_cell_BANG_,tufts,game_space,pickup_textures,perlin_channel,title_text,floor_objects,pickup_sfx,tilemap,make_pickup,varela,wait,player,player_stars_icon,inst_12427,inst_12388,inst_12421,inst_12417,inst_12474,inst_12447,inst_12383,inst_12591,inst_12397,inst_12501,inst_12416,inst_12396,inst_12395,inst_12398,inst_12502,inst_12437,inst_12590,inst_12506,inst_12391,inst_12418,inst_12430,inst_12394,inst_12424,inst_12585,inst_12578,inst_12411,inst_12408,inst_12589,inst_12503,inst_12387,inst_12384,inst_12586,inst_12393,inst_12444,inst_12501__$1,inst_12502__$1,inst_12503__$1,inst_12506__$1,inst_12507,inst_12508,inst_12509,inst_12510,inst_12511,inst_12512,inst_12513,inst_12514,inst_12515,inst_12516,inst_12517,inst_12518,inst_12519,inst_12520,inst_12521,inst_12522,inst_12523,inst_12524,inst_12525,inst_12526,inst_12527,inst_12528,inst_12529,inst_12530,inst_12531,inst_12532,inst_12533,inst_12534,inst_12535,inst_12536,inst_12537,inst_12538,inst_12539,inst_12540,inst_12541,inst_12542,inst_12543,inst_12544,inst_12545,inst_12546,inst_12547,inst_12548,inst_12549,inst_12550,inst_12551,inst_12552,inst_12553,inst_12554,inst_12555,inst_12556,inst_12557,inst_12558,inst_12559,inst_12560,inst_12561,inst_12562,inst_12563,inst_12564,inst_12565,inst_12566,inst_12567,inst_12568,inst_12569,inst_12570,inst_12571,inst_12572,inst_12573,inst_12574,inst_12575,inst_12576,inst_12577,inst_12578__$1,inst_12583,inst_12584,inst_12585__$1,inst_12586__$1,inst_12587,inst_12588,inst_12589__$1,inst_12590__$1,inst_12591__$1,inst_12592,inst_12614,inst_12615,inst_12616,inst_12627,inst_12628,inst_12629,inst_12630,inst_12631,inst_12632,inst_12633,inst_12634,inst_12663,inst_12664,inst_12665,inst_12666,inst_12667,inst_12668,inst_12714,state_val_13386,c__6459__auto___13801))
})();
var inst_12716 = cljs.core.async.impl.dispatch.run.call(null,inst_12715);
var inst_12717 = (function (){var add_cell_BANG_ = inst_12590__$1;
var depth_compare = inst_12502__$1;
var player_stars_text = inst_12421;
var player_standing_texs = inst_12408;
var player_shadow = inst_12398;
var close_QMARK_ = inst_12506__$1;
var player_pos = inst_12589__$1;
var obstacle_types = inst_12430;
var polar_object_coords = inst_12503__$1;
var trees = inst_12437;
var player_standing_sway = inst_12411;
var game_sprites = inst_12585__$1;
var loader = inst_12383;
var player_walking_texs = inst_12416;
var shadow_tex = inst_12397;
var tex = inst_12395;
var hit_sfx = inst_12501__$1;
var lobster_big = inst_12387;
var game_map = inst_12578__$1;
var star_tex = inst_12417;
var remove_cell_BANG_ = inst_12591__$1;
var tufts = inst_12444;
var game_space = inst_12586__$1;
var pickup_textures = inst_12424;
var perlin_channel = inst_12384;
var title_text = inst_12394;
var floor_objects = inst_12427;
var pickup_sfx = inst_12474;
var tilemap = inst_12393;
var make_pickup = inst_12447;
var varela = inst_12388;
var wait = inst_12391;
var player = inst_12396;
var player_stars_icon = inst_12418;
return ((function (add_cell_BANG_,depth_compare,player_stars_text,player_standing_texs,player_shadow,close_QMARK_,player_pos,obstacle_types,polar_object_coords,trees,player_standing_sway,game_sprites,loader,player_walking_texs,shadow_tex,tex,hit_sfx,lobster_big,game_map,star_tex,remove_cell_BANG_,tufts,game_space,pickup_textures,perlin_channel,title_text,floor_objects,pickup_sfx,tilemap,make_pickup,varela,wait,player,player_stars_icon,inst_12427,inst_12388,inst_12421,inst_12417,inst_12474,inst_12447,inst_12383,inst_12591,inst_12397,inst_12501,inst_12416,inst_12396,inst_12395,inst_12398,inst_12502,inst_12437,inst_12590,inst_12506,inst_12391,inst_12418,inst_12430,inst_12394,inst_12424,inst_12585,inst_12578,inst_12411,inst_12408,inst_12589,inst_12503,inst_12387,inst_12384,inst_12586,inst_12393,inst_12444,inst_12501__$1,inst_12502__$1,inst_12503__$1,inst_12506__$1,inst_12507,inst_12508,inst_12509,inst_12510,inst_12511,inst_12512,inst_12513,inst_12514,inst_12515,inst_12516,inst_12517,inst_12518,inst_12519,inst_12520,inst_12521,inst_12522,inst_12523,inst_12524,inst_12525,inst_12526,inst_12527,inst_12528,inst_12529,inst_12530,inst_12531,inst_12532,inst_12533,inst_12534,inst_12535,inst_12536,inst_12537,inst_12538,inst_12539,inst_12540,inst_12541,inst_12542,inst_12543,inst_12544,inst_12545,inst_12546,inst_12547,inst_12548,inst_12549,inst_12550,inst_12551,inst_12552,inst_12553,inst_12554,inst_12555,inst_12556,inst_12557,inst_12558,inst_12559,inst_12560,inst_12561,inst_12562,inst_12563,inst_12564,inst_12565,inst_12566,inst_12567,inst_12568,inst_12569,inst_12570,inst_12571,inst_12572,inst_12573,inst_12574,inst_12575,inst_12576,inst_12577,inst_12578__$1,inst_12583,inst_12584,inst_12585__$1,inst_12586__$1,inst_12587,inst_12588,inst_12589__$1,inst_12590__$1,inst_12591__$1,inst_12592,inst_12614,inst_12615,inst_12616,inst_12627,inst_12628,inst_12629,inst_12630,inst_12631,inst_12632,inst_12633,inst_12634,inst_12663,inst_12664,inst_12665,inst_12666,inst_12667,inst_12668,inst_12714,inst_12715,inst_12716,state_val_13386,c__6459__auto___13801){
return (function (pickup){
if(cljs.core.not.call(null,close_QMARK_.call(null,cljs.core.deref.call(null,farn.core.last_player_position),new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(pickup),farn.core.pickup_cull_distance_squared))){
return pickup;
} else {
return null;
}
});
;})(add_cell_BANG_,depth_compare,player_stars_text,player_standing_texs,player_shadow,close_QMARK_,player_pos,obstacle_types,polar_object_coords,trees,player_standing_sway,game_sprites,loader,player_walking_texs,shadow_tex,tex,hit_sfx,lobster_big,game_map,star_tex,remove_cell_BANG_,tufts,game_space,pickup_textures,perlin_channel,title_text,floor_objects,pickup_sfx,tilemap,make_pickup,varela,wait,player,player_stars_icon,inst_12427,inst_12388,inst_12421,inst_12417,inst_12474,inst_12447,inst_12383,inst_12591,inst_12397,inst_12501,inst_12416,inst_12396,inst_12395,inst_12398,inst_12502,inst_12437,inst_12590,inst_12506,inst_12391,inst_12418,inst_12430,inst_12394,inst_12424,inst_12585,inst_12578,inst_12411,inst_12408,inst_12589,inst_12503,inst_12387,inst_12384,inst_12586,inst_12393,inst_12444,inst_12501__$1,inst_12502__$1,inst_12503__$1,inst_12506__$1,inst_12507,inst_12508,inst_12509,inst_12510,inst_12511,inst_12512,inst_12513,inst_12514,inst_12515,inst_12516,inst_12517,inst_12518,inst_12519,inst_12520,inst_12521,inst_12522,inst_12523,inst_12524,inst_12525,inst_12526,inst_12527,inst_12528,inst_12529,inst_12530,inst_12531,inst_12532,inst_12533,inst_12534,inst_12535,inst_12536,inst_12537,inst_12538,inst_12539,inst_12540,inst_12541,inst_12542,inst_12543,inst_12544,inst_12545,inst_12546,inst_12547,inst_12548,inst_12549,inst_12550,inst_12551,inst_12552,inst_12553,inst_12554,inst_12555,inst_12556,inst_12557,inst_12558,inst_12559,inst_12560,inst_12561,inst_12562,inst_12563,inst_12564,inst_12565,inst_12566,inst_12567,inst_12568,inst_12569,inst_12570,inst_12571,inst_12572,inst_12573,inst_12574,inst_12575,inst_12576,inst_12577,inst_12578__$1,inst_12583,inst_12584,inst_12585__$1,inst_12586__$1,inst_12587,inst_12588,inst_12589__$1,inst_12590__$1,inst_12591__$1,inst_12592,inst_12614,inst_12615,inst_12616,inst_12627,inst_12628,inst_12629,inst_12630,inst_12631,inst_12632,inst_12633,inst_12634,inst_12663,inst_12664,inst_12665,inst_12666,inst_12667,inst_12668,inst_12714,inst_12715,inst_12716,state_val_13386,c__6459__auto___13801))
})();
var inst_12751 = cljs.core.async.chan.call(null,(1));
var inst_12752 = (function (){var add_cell_BANG_ = inst_12590__$1;
var depth_compare = inst_12502__$1;
var player_stars_text = inst_12421;
var player_standing_texs = inst_12408;
var player_shadow = inst_12398;
var close_QMARK_ = inst_12506__$1;
var player_pos = inst_12589__$1;
var obstacle_types = inst_12430;
var polar_object_coords = inst_12503__$1;
var trees = inst_12437;
var player_standing_sway = inst_12411;
var game_sprites = inst_12585__$1;
var loader = inst_12383;
var player_walking_texs = inst_12416;
var shadow_tex = inst_12397;
var tex = inst_12395;
var c__6459__auto____$1 = inst_12751;
var hit_sfx = inst_12501__$1;
var lobster_big = inst_12387;
var game_map = inst_12578__$1;
var star_tex = inst_12417;
var remove_cell_BANG_ = inst_12591__$1;
var tufts = inst_12444;
var game_space = inst_12586__$1;
var pickup_textures = inst_12424;
var perlin_channel = inst_12384;
var title_text = inst_12394;
var floor_objects = inst_12427;
var cull_distance_QMARK_ = inst_12717;
var pickup_sfx = inst_12474;
var tilemap = inst_12393;
var make_pickup = inst_12447;
var varela = inst_12388;
var wait = inst_12391;
var player = inst_12396;
var player_stars_icon = inst_12418;
return ((function (add_cell_BANG_,depth_compare,player_stars_text,player_standing_texs,player_shadow,close_QMARK_,player_pos,obstacle_types,polar_object_coords,trees,player_standing_sway,game_sprites,loader,player_walking_texs,shadow_tex,tex,c__6459__auto____$1,hit_sfx,lobster_big,game_map,star_tex,remove_cell_BANG_,tufts,game_space,pickup_textures,perlin_channel,title_text,floor_objects,cull_distance_QMARK_,pickup_sfx,tilemap,make_pickup,varela,wait,player,player_stars_icon,inst_12427,inst_12388,inst_12421,inst_12417,inst_12474,inst_12447,inst_12383,inst_12591,inst_12397,inst_12501,inst_12416,inst_12396,inst_12395,inst_12398,inst_12502,inst_12437,inst_12590,inst_12506,inst_12391,inst_12418,inst_12430,inst_12394,inst_12424,inst_12585,inst_12578,inst_12411,inst_12408,inst_12589,inst_12503,inst_12387,inst_12384,inst_12586,inst_12393,inst_12444,inst_12501__$1,inst_12502__$1,inst_12503__$1,inst_12506__$1,inst_12507,inst_12508,inst_12509,inst_12510,inst_12511,inst_12512,inst_12513,inst_12514,inst_12515,inst_12516,inst_12517,inst_12518,inst_12519,inst_12520,inst_12521,inst_12522,inst_12523,inst_12524,inst_12525,inst_12526,inst_12527,inst_12528,inst_12529,inst_12530,inst_12531,inst_12532,inst_12533,inst_12534,inst_12535,inst_12536,inst_12537,inst_12538,inst_12539,inst_12540,inst_12541,inst_12542,inst_12543,inst_12544,inst_12545,inst_12546,inst_12547,inst_12548,inst_12549,inst_12550,inst_12551,inst_12552,inst_12553,inst_12554,inst_12555,inst_12556,inst_12557,inst_12558,inst_12559,inst_12560,inst_12561,inst_12562,inst_12563,inst_12564,inst_12565,inst_12566,inst_12567,inst_12568,inst_12569,inst_12570,inst_12571,inst_12572,inst_12573,inst_12574,inst_12575,inst_12576,inst_12577,inst_12578__$1,inst_12583,inst_12584,inst_12585__$1,inst_12586__$1,inst_12587,inst_12588,inst_12589__$1,inst_12590__$1,inst_12591__$1,inst_12592,inst_12614,inst_12615,inst_12616,inst_12627,inst_12628,inst_12629,inst_12630,inst_12631,inst_12632,inst_12633,inst_12634,inst_12663,inst_12664,inst_12665,inst_12666,inst_12667,inst_12668,inst_12714,inst_12715,inst_12716,inst_12717,inst_12751,state_val_13386,c__6459__auto___13801){
return (function (){
var f__6460__auto__ = (function (){var switch__6444__auto__ = ((function (add_cell_BANG_,depth_compare,player_stars_text,player_standing_texs,player_shadow,close_QMARK_,player_pos,obstacle_types,polar_object_coords,trees,player_standing_sway,game_sprites,loader,player_walking_texs,shadow_tex,tex,c__6459__auto____$1,hit_sfx,lobster_big,game_map,star_tex,remove_cell_BANG_,tufts,game_space,pickup_textures,perlin_channel,title_text,floor_objects,cull_distance_QMARK_,pickup_sfx,tilemap,make_pickup,varela,wait,player,player_stars_icon,inst_12427,inst_12388,inst_12421,inst_12417,inst_12474,inst_12447,inst_12383,inst_12591,inst_12397,inst_12501,inst_12416,inst_12396,inst_12395,inst_12398,inst_12502,inst_12437,inst_12590,inst_12506,inst_12391,inst_12418,inst_12430,inst_12394,inst_12424,inst_12585,inst_12578,inst_12411,inst_12408,inst_12589,inst_12503,inst_12387,inst_12384,inst_12586,inst_12393,inst_12444,inst_12501__$1,inst_12502__$1,inst_12503__$1,inst_12506__$1,inst_12507,inst_12508,inst_12509,inst_12510,inst_12511,inst_12512,inst_12513,inst_12514,inst_12515,inst_12516,inst_12517,inst_12518,inst_12519,inst_12520,inst_12521,inst_12522,inst_12523,inst_12524,inst_12525,inst_12526,inst_12527,inst_12528,inst_12529,inst_12530,inst_12531,inst_12532,inst_12533,inst_12534,inst_12535,inst_12536,inst_12537,inst_12538,inst_12539,inst_12540,inst_12541,inst_12542,inst_12543,inst_12544,inst_12545,inst_12546,inst_12547,inst_12548,inst_12549,inst_12550,inst_12551,inst_12552,inst_12553,inst_12554,inst_12555,inst_12556,inst_12557,inst_12558,inst_12559,inst_12560,inst_12561,inst_12562,inst_12563,inst_12564,inst_12565,inst_12566,inst_12567,inst_12568,inst_12569,inst_12570,inst_12571,inst_12572,inst_12573,inst_12574,inst_12575,inst_12576,inst_12577,inst_12578__$1,inst_12583,inst_12584,inst_12585__$1,inst_12586__$1,inst_12587,inst_12588,inst_12589__$1,inst_12590__$1,inst_12591__$1,inst_12592,inst_12614,inst_12615,inst_12616,inst_12627,inst_12628,inst_12629,inst_12630,inst_12631,inst_12632,inst_12633,inst_12634,inst_12663,inst_12664,inst_12665,inst_12666,inst_12667,inst_12668,inst_12714,inst_12715,inst_12716,inst_12717,inst_12751,state_val_13386,c__6459__auto___13801){
return (function (state_12749){
var state_val_12750 = (state_12749[(1)]);
if((state_val_12750 === (7))){
var inst_12724 = (state_12749[(7)]);
var inst_12722 = (state_12749[(2)]);
var inst_12723 = cljs.core.deref.call(null,farn.core.pickup_store);
var inst_12724__$1 = cljs.core.some.call(null,cull_distance_QMARK_,inst_12723);
var state_12749__$1 = (function (){var statearr_13674 = state_12749;
(statearr_13674[(8)] = inst_12722);

(statearr_13674[(7)] = inst_12724__$1);

return statearr_13674;
})();
if(cljs.core.truth_(inst_12724__$1)){
var statearr_13675_14005 = state_12749__$1;
(statearr_13675_14005[(1)] = (8));

} else {
var statearr_13676_14006 = state_12749__$1;
(statearr_13676_14006[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12750 === (1))){
var state_12749__$1 = state_12749;
var statearr_13677_14007 = state_12749__$1;
(statearr_13677_14007[(2)] = null);

(statearr_13677_14007[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12750 === (4))){
var inst_12720 = cljs.core.async.timeout.call(null,(250));
var state_12749__$1 = state_12749;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12749__$1,(7),inst_12720);
} else {
if((state_val_12750 === (13))){
var inst_12738 = (state_12749[(2)]);
var state_12749__$1 = state_12749;
var statearr_13678_14008 = state_12749__$1;
(statearr_13678_14008[(2)] = inst_12738);

(statearr_13678_14008[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12750 === (6))){
var inst_12745 = (state_12749[(2)]);
var state_12749__$1 = state_12749;
var statearr_13679_14009 = state_12749__$1;
(statearr_13679_14009[(2)] = inst_12745);

(statearr_13679_14009[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12750 === (3))){
var inst_12747 = (state_12749[(2)]);
var state_12749__$1 = state_12749;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12749__$1,inst_12747);
} else {
if((state_val_12750 === (12))){
var state_12749__$1 = state_12749;
var statearr_13680_14010 = state_12749__$1;
(statearr_13680_14010[(2)] = null);

(statearr_13680_14010[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12750 === (2))){
var state_12749__$1 = state_12749;
var statearr_13681_14011 = state_12749__$1;
(statearr_13681_14011[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12750 === (11))){
var inst_12724 = (state_12749[(7)]);
var inst_12729 = new cljs.core.Keyword(null,"sprite","sprite",172516848).cljs$core$IFn$_invoke$arity$1(inst_12724);
var inst_12730 = farn.core.main_stage.removeChild(inst_12729);
var inst_12731 = new cljs.core.Keyword(null,"shadow","shadow",873231803).cljs$core$IFn$_invoke$arity$1(inst_12724);
var inst_12732 = farn.core.main_stage.removeChild(inst_12731);
var inst_12733 = [cljs.core.str(inst_12724)].join('');
var inst_12734 = farn.utils.log.call(null,"REMOVING",inst_12733);
var inst_12735 = cljs.core.swap_BANG_.call(null,farn.core.pickup_store,cljs.core.disj,inst_12724);
var state_12749__$1 = (function (){var statearr_13683 = state_12749;
(statearr_13683[(9)] = inst_12732);

(statearr_13683[(10)] = inst_12730);

(statearr_13683[(11)] = inst_12734);

return statearr_13683;
})();
var statearr_13684_14012 = state_12749__$1;
(statearr_13684_14012[(2)] = inst_12735);

(statearr_13684_14012[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12750 === (9))){
var state_12749__$1 = state_12749;
var statearr_13685_14013 = state_12749__$1;
(statearr_13685_14013[(2)] = null);

(statearr_13685_14013[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12750 === (5))){
var state_12749__$1 = state_12749;
var statearr_13686_14014 = state_12749__$1;
(statearr_13686_14014[(2)] = null);

(statearr_13686_14014[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12750 === (10))){
var inst_12741 = (state_12749[(2)]);
var state_12749__$1 = (function (){var statearr_13687 = state_12749;
(statearr_13687[(12)] = inst_12741);

return statearr_13687;
})();
var statearr_13688_14015 = state_12749__$1;
(statearr_13688_14015[(2)] = null);

(statearr_13688_14015[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12750 === (8))){
var inst_12724 = (state_12749[(7)]);
var inst_12726 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(inst_12724);
var inst_12727 = cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"pickup-baby-1","pickup-baby-1",-1650486973),inst_12726);
var state_12749__$1 = state_12749;
if(inst_12727){
var statearr_13689_14016 = state_12749__$1;
(statearr_13689_14016[(1)] = (11));

} else {
var statearr_13690_14017 = state_12749__$1;
(statearr_13690_14017[(1)] = (12));

}

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
});})(add_cell_BANG_,depth_compare,player_stars_text,player_standing_texs,player_shadow,close_QMARK_,player_pos,obstacle_types,polar_object_coords,trees,player_standing_sway,game_sprites,loader,player_walking_texs,shadow_tex,tex,c__6459__auto____$1,hit_sfx,lobster_big,game_map,star_tex,remove_cell_BANG_,tufts,game_space,pickup_textures,perlin_channel,title_text,floor_objects,cull_distance_QMARK_,pickup_sfx,tilemap,make_pickup,varela,wait,player,player_stars_icon,inst_12427,inst_12388,inst_12421,inst_12417,inst_12474,inst_12447,inst_12383,inst_12591,inst_12397,inst_12501,inst_12416,inst_12396,inst_12395,inst_12398,inst_12502,inst_12437,inst_12590,inst_12506,inst_12391,inst_12418,inst_12430,inst_12394,inst_12424,inst_12585,inst_12578,inst_12411,inst_12408,inst_12589,inst_12503,inst_12387,inst_12384,inst_12586,inst_12393,inst_12444,inst_12501__$1,inst_12502__$1,inst_12503__$1,inst_12506__$1,inst_12507,inst_12508,inst_12509,inst_12510,inst_12511,inst_12512,inst_12513,inst_12514,inst_12515,inst_12516,inst_12517,inst_12518,inst_12519,inst_12520,inst_12521,inst_12522,inst_12523,inst_12524,inst_12525,inst_12526,inst_12527,inst_12528,inst_12529,inst_12530,inst_12531,inst_12532,inst_12533,inst_12534,inst_12535,inst_12536,inst_12537,inst_12538,inst_12539,inst_12540,inst_12541,inst_12542,inst_12543,inst_12544,inst_12545,inst_12546,inst_12547,inst_12548,inst_12549,inst_12550,inst_12551,inst_12552,inst_12553,inst_12554,inst_12555,inst_12556,inst_12557,inst_12558,inst_12559,inst_12560,inst_12561,inst_12562,inst_12563,inst_12564,inst_12565,inst_12566,inst_12567,inst_12568,inst_12569,inst_12570,inst_12571,inst_12572,inst_12573,inst_12574,inst_12575,inst_12576,inst_12577,inst_12578__$1,inst_12583,inst_12584,inst_12585__$1,inst_12586__$1,inst_12587,inst_12588,inst_12589__$1,inst_12590__$1,inst_12591__$1,inst_12592,inst_12614,inst_12615,inst_12616,inst_12627,inst_12628,inst_12629,inst_12630,inst_12631,inst_12632,inst_12633,inst_12634,inst_12663,inst_12664,inst_12665,inst_12666,inst_12667,inst_12668,inst_12714,inst_12715,inst_12716,inst_12717,inst_12751,state_val_13386,c__6459__auto___13801))
;
return ((function (switch__6444__auto__,add_cell_BANG_,depth_compare,player_stars_text,player_standing_texs,player_shadow,close_QMARK_,player_pos,obstacle_types,polar_object_coords,trees,player_standing_sway,game_sprites,loader,player_walking_texs,shadow_tex,tex,c__6459__auto____$1,hit_sfx,lobster_big,game_map,star_tex,remove_cell_BANG_,tufts,game_space,pickup_textures,perlin_channel,title_text,floor_objects,cull_distance_QMARK_,pickup_sfx,tilemap,make_pickup,varela,wait,player,player_stars_icon,inst_12427,inst_12388,inst_12421,inst_12417,inst_12474,inst_12447,inst_12383,inst_12591,inst_12397,inst_12501,inst_12416,inst_12396,inst_12395,inst_12398,inst_12502,inst_12437,inst_12590,inst_12506,inst_12391,inst_12418,inst_12430,inst_12394,inst_12424,inst_12585,inst_12578,inst_12411,inst_12408,inst_12589,inst_12503,inst_12387,inst_12384,inst_12586,inst_12393,inst_12444,inst_12501__$1,inst_12502__$1,inst_12503__$1,inst_12506__$1,inst_12507,inst_12508,inst_12509,inst_12510,inst_12511,inst_12512,inst_12513,inst_12514,inst_12515,inst_12516,inst_12517,inst_12518,inst_12519,inst_12520,inst_12521,inst_12522,inst_12523,inst_12524,inst_12525,inst_12526,inst_12527,inst_12528,inst_12529,inst_12530,inst_12531,inst_12532,inst_12533,inst_12534,inst_12535,inst_12536,inst_12537,inst_12538,inst_12539,inst_12540,inst_12541,inst_12542,inst_12543,inst_12544,inst_12545,inst_12546,inst_12547,inst_12548,inst_12549,inst_12550,inst_12551,inst_12552,inst_12553,inst_12554,inst_12555,inst_12556,inst_12557,inst_12558,inst_12559,inst_12560,inst_12561,inst_12562,inst_12563,inst_12564,inst_12565,inst_12566,inst_12567,inst_12568,inst_12569,inst_12570,inst_12571,inst_12572,inst_12573,inst_12574,inst_12575,inst_12576,inst_12577,inst_12578__$1,inst_12583,inst_12584,inst_12585__$1,inst_12586__$1,inst_12587,inst_12588,inst_12589__$1,inst_12590__$1,inst_12591__$1,inst_12592,inst_12614,inst_12615,inst_12616,inst_12627,inst_12628,inst_12629,inst_12630,inst_12631,inst_12632,inst_12633,inst_12634,inst_12663,inst_12664,inst_12665,inst_12666,inst_12667,inst_12668,inst_12714,inst_12715,inst_12716,inst_12717,inst_12751,state_val_13386,c__6459__auto___13801){
return (function() {
var state_machine__6445__auto__ = null;
var state_machine__6445__auto____0 = (function (){
var statearr_13694 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13694[(0)] = state_machine__6445__auto__);

(statearr_13694[(1)] = (1));

return statearr_13694;
});
var state_machine__6445__auto____1 = (function (state_12749){
while(true){
var ret_value__6446__auto__ = (function (){try{while(true){
var result__6447__auto__ = switch__6444__auto__.call(null,state_12749);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6447__auto__;
}
break;
}
}catch (e13695){if((e13695 instanceof Object)){
var ex__6448__auto__ = e13695;
var statearr_13696_14018 = state_12749;
(statearr_13696_14018[(5)] = ex__6448__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12749);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13695;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14019 = state_12749;
state_12749 = G__14019;
continue;
} else {
return ret_value__6446__auto__;
}
break;
}
});
state_machine__6445__auto__ = function(state_12749){
switch(arguments.length){
case 0:
return state_machine__6445__auto____0.call(this);
case 1:
return state_machine__6445__auto____1.call(this,state_12749);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6445__auto____0;
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6445__auto____1;
return state_machine__6445__auto__;
})()
;})(switch__6444__auto__,add_cell_BANG_,depth_compare,player_stars_text,player_standing_texs,player_shadow,close_QMARK_,player_pos,obstacle_types,polar_object_coords,trees,player_standing_sway,game_sprites,loader,player_walking_texs,shadow_tex,tex,c__6459__auto____$1,hit_sfx,lobster_big,game_map,star_tex,remove_cell_BANG_,tufts,game_space,pickup_textures,perlin_channel,title_text,floor_objects,cull_distance_QMARK_,pickup_sfx,tilemap,make_pickup,varela,wait,player,player_stars_icon,inst_12427,inst_12388,inst_12421,inst_12417,inst_12474,inst_12447,inst_12383,inst_12591,inst_12397,inst_12501,inst_12416,inst_12396,inst_12395,inst_12398,inst_12502,inst_12437,inst_12590,inst_12506,inst_12391,inst_12418,inst_12430,inst_12394,inst_12424,inst_12585,inst_12578,inst_12411,inst_12408,inst_12589,inst_12503,inst_12387,inst_12384,inst_12586,inst_12393,inst_12444,inst_12501__$1,inst_12502__$1,inst_12503__$1,inst_12506__$1,inst_12507,inst_12508,inst_12509,inst_12510,inst_12511,inst_12512,inst_12513,inst_12514,inst_12515,inst_12516,inst_12517,inst_12518,inst_12519,inst_12520,inst_12521,inst_12522,inst_12523,inst_12524,inst_12525,inst_12526,inst_12527,inst_12528,inst_12529,inst_12530,inst_12531,inst_12532,inst_12533,inst_12534,inst_12535,inst_12536,inst_12537,inst_12538,inst_12539,inst_12540,inst_12541,inst_12542,inst_12543,inst_12544,inst_12545,inst_12546,inst_12547,inst_12548,inst_12549,inst_12550,inst_12551,inst_12552,inst_12553,inst_12554,inst_12555,inst_12556,inst_12557,inst_12558,inst_12559,inst_12560,inst_12561,inst_12562,inst_12563,inst_12564,inst_12565,inst_12566,inst_12567,inst_12568,inst_12569,inst_12570,inst_12571,inst_12572,inst_12573,inst_12574,inst_12575,inst_12576,inst_12577,inst_12578__$1,inst_12583,inst_12584,inst_12585__$1,inst_12586__$1,inst_12587,inst_12588,inst_12589__$1,inst_12590__$1,inst_12591__$1,inst_12592,inst_12614,inst_12615,inst_12616,inst_12627,inst_12628,inst_12629,inst_12630,inst_12631,inst_12632,inst_12633,inst_12634,inst_12663,inst_12664,inst_12665,inst_12666,inst_12667,inst_12668,inst_12714,inst_12715,inst_12716,inst_12717,inst_12751,state_val_13386,c__6459__auto___13801))
})();
var state__6461__auto__ = (function (){var statearr_13697 = f__6460__auto__.call(null);
(statearr_13697[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6459__auto____$1);

return statearr_13697;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6461__auto__);
});
;})(add_cell_BANG_,depth_compare,player_stars_text,player_standing_texs,player_shadow,close_QMARK_,player_pos,obstacle_types,polar_object_coords,trees,player_standing_sway,game_sprites,loader,player_walking_texs,shadow_tex,tex,c__6459__auto____$1,hit_sfx,lobster_big,game_map,star_tex,remove_cell_BANG_,tufts,game_space,pickup_textures,perlin_channel,title_text,floor_objects,cull_distance_QMARK_,pickup_sfx,tilemap,make_pickup,varela,wait,player,player_stars_icon,inst_12427,inst_12388,inst_12421,inst_12417,inst_12474,inst_12447,inst_12383,inst_12591,inst_12397,inst_12501,inst_12416,inst_12396,inst_12395,inst_12398,inst_12502,inst_12437,inst_12590,inst_12506,inst_12391,inst_12418,inst_12430,inst_12394,inst_12424,inst_12585,inst_12578,inst_12411,inst_12408,inst_12589,inst_12503,inst_12387,inst_12384,inst_12586,inst_12393,inst_12444,inst_12501__$1,inst_12502__$1,inst_12503__$1,inst_12506__$1,inst_12507,inst_12508,inst_12509,inst_12510,inst_12511,inst_12512,inst_12513,inst_12514,inst_12515,inst_12516,inst_12517,inst_12518,inst_12519,inst_12520,inst_12521,inst_12522,inst_12523,inst_12524,inst_12525,inst_12526,inst_12527,inst_12528,inst_12529,inst_12530,inst_12531,inst_12532,inst_12533,inst_12534,inst_12535,inst_12536,inst_12537,inst_12538,inst_12539,inst_12540,inst_12541,inst_12542,inst_12543,inst_12544,inst_12545,inst_12546,inst_12547,inst_12548,inst_12549,inst_12550,inst_12551,inst_12552,inst_12553,inst_12554,inst_12555,inst_12556,inst_12557,inst_12558,inst_12559,inst_12560,inst_12561,inst_12562,inst_12563,inst_12564,inst_12565,inst_12566,inst_12567,inst_12568,inst_12569,inst_12570,inst_12571,inst_12572,inst_12573,inst_12574,inst_12575,inst_12576,inst_12577,inst_12578__$1,inst_12583,inst_12584,inst_12585__$1,inst_12586__$1,inst_12587,inst_12588,inst_12589__$1,inst_12590__$1,inst_12591__$1,inst_12592,inst_12614,inst_12615,inst_12616,inst_12627,inst_12628,inst_12629,inst_12630,inst_12631,inst_12632,inst_12633,inst_12634,inst_12663,inst_12664,inst_12665,inst_12666,inst_12667,inst_12668,inst_12714,inst_12715,inst_12716,inst_12717,inst_12751,state_val_13386,c__6459__auto___13801))
})();
var inst_12753 = cljs.core.async.impl.dispatch.run.call(null,inst_12752);
var inst_12754 = cljs.core.async.timeout.call(null,(1000));
var state_13385__$1 = (function (){var statearr_13698 = state_13385;
(statearr_13698[(40)] = inst_12591__$1);

(statearr_13698[(26)] = inst_12501__$1);

(statearr_13698[(151)] = inst_12630);

(statearr_13698[(152)] = inst_12633);

(statearr_13698[(107)] = inst_12502__$1);

(statearr_13698[(108)] = inst_12590__$1);

(statearr_13698[(153)] = inst_12667);

(statearr_13698[(110)] = inst_12506__$1);

(statearr_13698[(154)] = inst_12665);

(statearr_13698[(155)] = inst_12634);

(statearr_13698[(119)] = inst_12585__$1);

(statearr_13698[(156)] = inst_12592);

(statearr_13698[(120)] = inst_12578__$1);

(statearr_13698[(157)] = inst_12716);

(statearr_13698[(158)] = inst_12753);

(statearr_13698[(124)] = inst_12589__$1);

(statearr_13698[(159)] = inst_12668);

(statearr_13698[(88)] = inst_12503__$1);

(statearr_13698[(160)] = inst_12616);

(statearr_13698[(19)] = inst_12586__$1);

(statearr_13698[(161)] = inst_12632);

(statearr_13698[(162)] = inst_12629);

(statearr_13698[(163)] = inst_12631);

return statearr_13698;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13385__$1,(17),inst_12754);
} else {
if((state_val_13386 === (2))){
var inst_12386 = (state_13385[(2)]);
var inst_12387 = farn.font.make_tiled_font.call(null,"Lobster",(400),(48));
var inst_12388 = farn.font.make_tiled_font.call(null,"Varela Round",(400),(24));
var inst_12389 = cljs.core.async.timeout.call(null,(1000));
var state_13385__$1 = (function (){var statearr_13699 = state_13385;
(statearr_13699[(61)] = inst_12388);

(statearr_13699[(164)] = inst_12386);

(statearr_13699[(75)] = inst_12387);

return statearr_13699;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13385__$1,(3),inst_12389);
} else {
if((state_val_13386 === (66))){
var inst_13102 = (state_13385[(136)]);
var inst_13107 = (inst_13102 - (1));
var inst_13102__$1 = inst_13107;
var state_13385__$1 = (function (){var statearr_13700 = state_13385;
(statearr_13700[(136)] = inst_13102__$1);

return statearr_13700;
})();
var statearr_13701_14020 = state_13385__$1;
(statearr_13701_14020[(2)] = null);

(statearr_13701_14020[(1)] = (64));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13386 === (107))){
var inst_13303 = (state_13385[(165)]);
var state_13385__$1 = state_13385;
var statearr_13702_14021 = state_13385__$1;
(statearr_13702_14021[(2)] = inst_13303);

(statearr_13702_14021[(1)] = (109));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13386 === (23))){
var inst_12929 = (state_13385[(101)]);
var inst_12939 = (state_13385[(20)]);
var inst_12940 = (state_13385[(22)]);
var inst_12935 = (state_13385[(132)]);
var inst_12944 = inst_12929.call(null,inst_12939,inst_12935);
var inst_12935__$1 = inst_12944;
var inst_12936 = inst_12940;
var state_13385__$1 = (function (){var statearr_13703 = state_13385;
(statearr_13703[(21)] = inst_12936);

(statearr_13703[(132)] = inst_12935__$1);

return statearr_13703;
})();
var statearr_13704_14022 = state_13385__$1;
(statearr_13704_14022[(2)] = null);

(statearr_13704_14022[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13386 === (47))){
var inst_13074 = (state_13385[(2)]);
var state_13385__$1 = state_13385;
var statearr_13705_14023 = state_13385__$1;
(statearr_13705_14023[(2)] = inst_13074);

(statearr_13705_14023[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13386 === (35))){
var inst_12995 = (state_13385[(50)]);
var inst_12999 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(inst_12995);
var inst_13000 = cljs.core._EQ_.call(null,inst_12999,new cljs.core.Keyword(null,"pickup-baby-1","pickup-baby-1",-1650486973));
var state_13385__$1 = state_13385;
if(inst_13000){
var statearr_13706_14024 = state_13385__$1;
(statearr_13706_14024[(1)] = (38));

} else {
var statearr_13707_14025 = state_13385__$1;
(statearr_13707_14025[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13386 === (127))){
var inst_12883 = (state_13385[(112)]);
var inst_13353 = (inst_12883 * farn.core.player_drag);
var inst_13354 = ((inst_13353 > (0)) ? inst_13353 : (0));
var state_13385__$1 = state_13385;
var statearr_13711_14026 = state_13385__$1;
(statearr_13711_14026[(2)] = inst_13354);

(statearr_13711_14026[(1)] = (128));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13386 === (82))){
var inst_13170 = (state_13385[(18)]);
var inst_13172 = cljs.core.chunked_seq_QMARK_.call(null,inst_13170);
var state_13385__$1 = state_13385;
if(inst_13172){
var statearr_13712_14027 = state_13385__$1;
(statearr_13712_14027[(1)] = (85));

} else {
var statearr_13713_14028 = state_13385__$1;
(statearr_13713_14028[(1)] = (86));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13386 === (76))){
var inst_13131 = (state_13385[(33)]);
var inst_13133 = (state_13385[(34)]);
var inst_13130 = (state_13385[(23)]);
var inst_13132 = (state_13385[(36)]);
var inst_13166 = (state_13385[(2)]);
var inst_13167 = (inst_13133 + (1));
var tmp13708 = inst_13131;
var tmp13709 = inst_13130;
var tmp13710 = inst_13132;
var inst_13130__$1 = tmp13709;
var inst_13131__$1 = tmp13708;
var inst_13132__$1 = tmp13710;
var inst_13133__$1 = inst_13167;
var state_13385__$1 = (function (){var statearr_13714 = state_13385;
(statearr_13714[(33)] = inst_13131__$1);

(statearr_13714[(166)] = inst_13166);

(statearr_13714[(34)] = inst_13133__$1);

(statearr_13714[(23)] = inst_13130__$1);

(statearr_13714[(36)] = inst_13132__$1);

return statearr_13714;
})();
var statearr_13715_14029 = state_13385__$1;
(statearr_13715_14029[(2)] = null);

(statearr_13715_14029[(1)] = (69));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13386 === (97))){
var inst_12892 = (state_13385[(84)]);
var inst_12893 = (state_13385[(85)]);
var inst_12899 = (state_13385[(86)]);
var inst_12903 = (state_13385[(106)]);
var inst_12884 = (state_13385[(118)]);
var inst_13303 = (state_13385[(165)]);
var inst_12902 = (state_13385[(89)]);
var inst_13291 = (state_13385[(2)]);
var inst_13292 = farn.sprite.set_pivot_BANG_.call(null,farn.core.main_stage,inst_12892,inst_12893);
var inst_13293 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_13294 = [inst_12892,inst_12893];
var inst_13295 = (new cljs.core.PersistentVector(null,2,(5),inst_13293,inst_13294,null));
var inst_13296 = cljs.core.reset_BANG_.call(null,farn.core.last_player_position,inst_13295);
var inst_13297 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_13298 = [inst_12899,inst_12902];
var inst_13299 = (new cljs.core.PersistentVector(null,2,(5),inst_13297,inst_13298,null));
var inst_13300 = cljs.core.reset_BANG_.call(null,farn.core.last_player_rh,inst_13299);
var inst_13301 = cljs.core.reset_BANG_.call(null,farn.core.last_player_theta,inst_12884);
var inst_13302 = Math.abs.call(null,inst_12903);
var inst_13303__$1 = (inst_13302 > (2));
var state_13385__$1 = (function (){var statearr_13716 = state_13385;
(statearr_13716[(167)] = inst_13291);

(statearr_13716[(168)] = inst_13300);

(statearr_13716[(169)] = inst_13301);

(statearr_13716[(170)] = inst_13296);

(statearr_13716[(165)] = inst_13303__$1);

(statearr_13716[(171)] = inst_13292);

return statearr_13716;
})();
if(cljs.core.truth_(inst_13303__$1)){
var statearr_13717_14030 = state_13385__$1;
(statearr_13717_14030[(1)] = (107));

} else {
var statearr_13718_14031 = state_13385__$1;
(statearr_13718_14031[(1)] = (108));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13386 === (19))){
var inst_13383 = (state_13385[(2)]);
var state_13385__$1 = state_13385;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13385__$1,inst_13383);
} else {
if((state_val_13386 === (57))){
var inst_13091 = (state_13385[(2)]);
var state_13385__$1 = state_13385;
if(cljs.core.truth_(inst_13091)){
var statearr_13719_14032 = state_13385__$1;
(statearr_13719_14032[(1)] = (58));

} else {
var statearr_13720_14033 = state_13385__$1;
(statearr_13720_14033[(1)] = (59));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13386 === (68))){
var inst_13111 = (state_13385[(2)]);
var state_13385__$1 = state_13385;
var statearr_13721_14034 = state_13385__$1;
(statearr_13721_14034[(2)] = inst_13111);

(statearr_13721_14034[(1)] = (65));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13386 === (11))){
var inst_12486 = (state_13385[(131)]);
var inst_12483 = (state_13385[(139)]);
var inst_12486__$1 = cljs.core.nth.call(null,inst_12483,(0),null);
var inst_12487 = cljs.core.nthnext.call(null,inst_12483,(1));
var inst_12488 = (inst_12486__$1 == null);
var inst_12489 = cljs.core.not.call(null,inst_12488);
var state_13385__$1 = (function (){var statearr_13722 = state_13385;
(statearr_13722[(172)] = inst_12487);

(statearr_13722[(131)] = inst_12486__$1);

return statearr_13722;
})();
if(inst_12489){
var statearr_13723_14035 = state_13385__$1;
(statearr_13723_14035[(1)] = (13));

} else {
var statearr_13724_14036 = state_13385__$1;
(statearr_13724_14036[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13386 === (115))){
var inst_12502 = (state_13385[(107)]);
var inst_13320 = (state_13385[(2)]);
var inst_13321 = farn.core.main_stage.children;
var inst_13322 = inst_13321.sort(inst_12502);
var inst_13323 = farn.events.next_frame.call(null);
var state_13385__$1 = (function (){var statearr_13725 = state_13385;
(statearr_13725[(173)] = inst_13320);

(statearr_13725[(174)] = inst_13322);

return statearr_13725;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13385__$1,(116),inst_13323);
} else {
if((state_val_13386 === (9))){
var inst_12472 = (state_13385[(2)]);
var state_13385__$1 = state_13385;
var statearr_13726_14037 = state_13385__$1;
(statearr_13726_14037[(2)] = inst_12472);

(statearr_13726_14037[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13386 === (5))){
var inst_12456 = (state_13385[(81)]);
var inst_12459 = (state_13385[(14)]);
var inst_12459__$1 = cljs.core.nth.call(null,inst_12456,(0),null);
var inst_12460 = cljs.core.nthnext.call(null,inst_12456,(1));
var inst_12461 = (inst_12459__$1 == null);
var inst_12462 = cljs.core.not.call(null,inst_12461);
var state_13385__$1 = (function (){var statearr_13727 = state_13385;
(statearr_13727[(175)] = inst_12460);

(statearr_13727[(14)] = inst_12459__$1);

return statearr_13727;
})();
if(inst_12462){
var statearr_13728_14038 = state_13385__$1;
(statearr_13728_14038[(1)] = (7));

} else {
var statearr_13729_14039 = state_13385__$1;
(statearr_13729_14039[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13386 === (112))){
var inst_13312 = (state_13385[(2)]);
var state_13385__$1 = state_13385;
var statearr_13730_14040 = state_13385__$1;
(statearr_13730_14040[(2)] = inst_13312);

(statearr_13730_14040[(1)] = (109));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13386 === (83))){
var state_13385__$1 = state_13385;
var statearr_13731_14041 = state_13385__$1;
(statearr_13731_14041[(2)] = null);

(statearr_13731_14041[(1)] = (84));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13386 === (14))){
var inst_12482 = (state_13385[(137)]);
var state_13385__$1 = state_13385;
var statearr_13732_14042 = state_13385__$1;
(statearr_13732_14042[(2)] = inst_12482);

(statearr_13732_14042[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13386 === (45))){
var inst_13030 = (state_13385[(58)]);
var inst_13034 = cljs.core.chunk_first.call(null,inst_13030);
var inst_13035 = cljs.core.chunk_rest.call(null,inst_13030);
var inst_13036 = cljs.core.count.call(null,inst_13034);
var inst_12987 = inst_13035;
var inst_12988 = inst_13034;
var inst_12989 = inst_13036;
var inst_12990 = (0);
var state_13385__$1 = (function (){var statearr_13733 = state_13385;
(statearr_13733[(92)] = inst_12989);

(statearr_13733[(93)] = inst_12988);

(statearr_13733[(94)] = inst_12987);

(statearr_13733[(95)] = inst_12990);

return statearr_13733;
})();
var statearr_13734_14043 = state_13385__$1;
(statearr_13734_14043[(2)] = null);

(statearr_13734_14043[(1)] = (30));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13386 === (53))){
var inst_13067 = (state_13385[(2)]);
var state_13385__$1 = state_13385;
var statearr_13735_14044 = state_13385__$1;
(statearr_13735_14044[(2)] = inst_13067);

(statearr_13735_14044[(1)] = (50));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13386 === (78))){
var inst_13163 = (state_13385[(2)]);
var state_13385__$1 = state_13385;
var statearr_13736_14045 = state_13385__$1;
(statearr_13736_14045[(2)] = inst_13163);

(statearr_13736_14045[(1)] = (76));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13386 === (132))){
var inst_12885 = (state_13385[(126)]);
var inst_13370 = (inst_12885 - 0.01);
var inst_13371 = (- farn.core.player_turn_speed);
var inst_13372 = ((inst_13370 > inst_13371) ? inst_13370 : inst_13371);
var state_13385__$1 = state_13385;
var statearr_13737_14046 = state_13385__$1;
(statearr_13737_14046[(2)] = inst_13372);

(statearr_13737_14046[(1)] = (134));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13386 === (26))){
var inst_12980 = (state_13385[(2)]);
var inst_12985 = cljs.core.deref.call(null,farn.core.pickup_store);
var inst_12986 = cljs.core.seq.call(null,inst_12985);
var inst_12987 = inst_12986;
var inst_12988 = null;
var inst_12989 = (0);
var inst_12990 = (0);
var state_13385__$1 = (function (){var statearr_13738 = state_13385;
(statearr_13738[(92)] = inst_12989);

(statearr_13738[(93)] = inst_12988);

(statearr_13738[(128)] = inst_12980);

(statearr_13738[(94)] = inst_12987);

(statearr_13738[(95)] = inst_12990);

return statearr_13738;
})();
var statearr_13739_14047 = state_13385__$1;
(statearr_13739_14047[(2)] = null);

(statearr_13739_14047[(1)] = (30));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13386 === (123))){
var inst_13348 = farn.events.is_pressed_QMARK_.call(null,new cljs.core.Keyword(null,"up","up",-269712113));
var state_13385__$1 = state_13385;
if(cljs.core.truth_(inst_13348)){
var statearr_13740_14048 = state_13385__$1;
(statearr_13740_14048[(1)] = (126));

} else {
var statearr_13741_14049 = state_13385__$1;
(statearr_13741_14049[(1)] = (127));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13386 === (16))){
var inst_12482 = (state_13385[(137)]);
var inst_12487 = (state_13385[(172)]);
var inst_12494 = (state_13385[(2)]);
var inst_12495 = cljs.core.conj.call(null,inst_12482,inst_12494);
var inst_12482__$1 = inst_12495;
var inst_12483 = inst_12487;
var state_13385__$1 = (function (){var statearr_13742 = state_13385;
(statearr_13742[(137)] = inst_12482__$1);

(statearr_13742[(139)] = inst_12483);

return statearr_13742;
})();
var statearr_13743_14050 = state_13385__$1;
(statearr_13743_14050[(2)] = null);

(statearr_13743_14050[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13386 === (133))){
var inst_12885 = (state_13385[(126)]);
var inst_13374 = (0.5 * inst_12885);
var state_13385__$1 = state_13385;
var statearr_13744_14051 = state_13385__$1;
(statearr_13744_14051[(2)] = inst_13374);

(statearr_13744_14051[(1)] = (134));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13386 === (81))){
var inst_13161 = (state_13385[(2)]);
var state_13385__$1 = state_13385;
var statearr_13745_14052 = state_13385__$1;
(statearr_13745_14052[(2)] = inst_13161);

(statearr_13745_14052[(1)] = (78));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13386 === (120))){
var state_13385__$1 = state_13385;
var statearr_13746_14053 = state_13385__$1;
(statearr_13746_14053[(2)] = (0));

(statearr_13746_14053[(1)] = (122));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13386 === (79))){
var inst_13143 = (state_13385[(12)]);
var inst_13157 = (inst_13143 + (1));
var inst_13143__$1 = inst_13157;
var state_13385__$1 = (function (){var statearr_13747 = state_13385;
(statearr_13747[(12)] = inst_13143__$1);

return statearr_13747;
})();
var statearr_13748_14054 = state_13385__$1;
(statearr_13748_14054[(2)] = null);

(statearr_13748_14054[(1)] = (77));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13386 === (38))){
var inst_12995 = (state_13385[(50)]);
var inst_12417 = (state_13385[(63)]);
var inst_12397 = (state_13385[(64)]);
var inst_12980 = (state_13385[(128)]);
var inst_12502 = (state_13385[(107)]);
var inst_12503 = (state_13385[(88)]);
var inst_12586 = (state_13385[(19)]);
var inst_13002 = new cljs.core.Keyword(null,"shadow","shadow",873231803).cljs$core$IFn$_invoke$arity$1(inst_12995);
var inst_13003 = farn.core.main_stage.removeChild(inst_13002);
var inst_13004 = cljs.core.reset_BANG_.call(null,farn.core.player_animation,new cljs.core.Keyword(null,"standing","standing",-1248340762));
var inst_13006 = cljs.core.deref.call(null,farn.core.last_player_position);
var inst_13007 = cljs.core.nth.call(null,inst_13006,(0),null);
var inst_13008 = cljs.core.nth.call(null,inst_13006,(1),null);
var inst_13009 = new cljs.core.Keyword(null,"sprite","sprite",172516848).cljs$core$IFn$_invoke$arity$1(inst_12995);
var inst_13010 = farn.core.game_completed.call(null,farn.core.main_stage,inst_12417,inst_12397,inst_13007,inst_13008,inst_12503,inst_12980,inst_12586,inst_12502,inst_13009);
var state_13385__$1 = (function (){var statearr_13752 = state_13385;
(statearr_13752[(176)] = inst_13003);

(statearr_13752[(177)] = inst_13004);

return statearr_13752;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13385__$1,(41),inst_13010);
} else {
if((state_val_13386 === (126))){
var inst_12883 = (state_13385[(112)]);
var inst_13350 = (inst_12883 + farn.core.player_acceleration);
var inst_13351 = ((inst_13350 < farn.core.player_max_speed) ? inst_13350 : farn.core.player_max_speed);
var state_13385__$1 = state_13385;
var statearr_13753_14055 = state_13385__$1;
(statearr_13753_14055[(2)] = inst_13351);

(statearr_13753_14055[(1)] = (128));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13386 === (98))){
var inst_13225 = (state_13385[(7)]);
var inst_12892 = (state_13385[(84)]);
var inst_12893 = (state_13385[(85)]);
var inst_12899 = (state_13385[(86)]);
var inst_13227 = (state_13385[(9)]);
var inst_12503 = (state_13385[(88)]);
var inst_13226 = (state_13385[(10)]);
var inst_13228 = (state_13385[(11)]);
var inst_12881 = (state_13385[(97)]);
var inst_12902 = (state_13385[(89)]);
var inst_13233 = cljs.core._nth.call(null,inst_13226,inst_13228);
var inst_13235 = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(inst_13233);
var inst_13236 = new cljs.core.Keyword(null,"sprite","sprite",172516848).cljs$core$IFn$_invoke$arity$1(inst_13233);
var inst_13237 = inst_12503.call(null,inst_13235,inst_13236,inst_12892,inst_12893,inst_12899,inst_12902);
var inst_13238 = cljs.core.nth.call(null,inst_13237,(0),null);
var inst_13239 = cljs.core.nth.call(null,inst_13237,(1),null);
var inst_13240 = new cljs.core.Keyword(null,"sprite","sprite",172516848).cljs$core$IFn$_invoke$arity$1(inst_13233);
var inst_13241 = farn.sprite.set_pos_BANG_.call(null,inst_13240,inst_13238,inst_13239);
var inst_13242 = new cljs.core.Keyword(null,"shadow","shadow",873231803).cljs$core$IFn$_invoke$arity$1(inst_13233);
var inst_13243 = farn.sprite.set_pos_BANG_.call(null,inst_13242,inst_13238,inst_13239);
var inst_13244 = new cljs.core.Keyword(null,"sprite","sprite",172516848).cljs$core$IFn$_invoke$arity$1(inst_13233);
var inst_13245 = (inst_12881 * farn.core.pickup_bounce_speed);
var inst_13246 = Math.sin.call(null,inst_13245);
var inst_13247 = ((1) + inst_13246);
var inst_13248 = (farn.core.pickup_bounce_height * inst_13247);
var inst_13249 = (farn.core.pickup_vertical_offset + inst_13248);
var inst_13250 = farn.sprite.set_pivot_BANG_.call(null,inst_13244,(0),inst_13249);
var inst_13251 = (inst_13228 + (1));
var tmp13749 = inst_13225;
var tmp13750 = inst_13227;
var tmp13751 = inst_13226;
var inst_13225__$1 = tmp13749;
var inst_13226__$1 = tmp13751;
var inst_13227__$1 = tmp13750;
var inst_13228__$1 = inst_13251;
var state_13385__$1 = (function (){var statearr_13754 = state_13385;
(statearr_13754[(178)] = inst_13241);

(statearr_13754[(7)] = inst_13225__$1);

(statearr_13754[(179)] = inst_13250);

(statearr_13754[(9)] = inst_13227__$1);

(statearr_13754[(10)] = inst_13226__$1);

(statearr_13754[(11)] = inst_13228__$1);

(statearr_13754[(180)] = inst_13243);

return statearr_13754;
})();
var statearr_13755_14056 = state_13385__$1;
(statearr_13755_14056[(2)] = null);

(statearr_13755_14056[(1)] = (96));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13386 === (124))){
var state_13385__$1 = state_13385;
var statearr_13756_14057 = state_13385__$1;
(statearr_13756_14057[(2)] = null);

(statearr_13756_14057[(1)] = (125));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13386 === (87))){
var inst_13211 = (state_13385[(2)]);
var state_13385__$1 = state_13385;
var statearr_13757_14058 = state_13385__$1;
(statearr_13757_14058[(2)] = inst_13211);

(statearr_13757_14058[(1)] = (84));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13386 === (30))){
var inst_12989 = (state_13385[(92)]);
var inst_12990 = (state_13385[(95)]);
var inst_12992 = (inst_12990 < inst_12989);
var inst_12993 = inst_12992;
var state_13385__$1 = state_13385;
if(cljs.core.truth_(inst_12993)){
var statearr_13758_14059 = state_13385__$1;
(statearr_13758_14059[(1)] = (32));

} else {
var statearr_13759_14060 = state_13385__$1;
(statearr_13759_14060[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13386 === (73))){
var inst_13216 = (state_13385[(2)]);
var state_13385__$1 = state_13385;
var statearr_13760_14061 = state_13385__$1;
(statearr_13760_14061[(2)] = inst_13216);

(statearr_13760_14061[(1)] = (70));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13386 === (96))){
var inst_13227 = (state_13385[(9)]);
var inst_13228 = (state_13385[(11)]);
var inst_13230 = (inst_13228 < inst_13227);
var inst_13231 = inst_13230;
var state_13385__$1 = state_13385;
if(cljs.core.truth_(inst_13231)){
var statearr_13761_14062 = state_13385__$1;
(statearr_13761_14062[(1)] = (98));

} else {
var statearr_13762_14063 = state_13385__$1;
(statearr_13762_14063[(1)] = (99));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13386 === (10))){
var inst_12460 = (state_13385[(175)]);
var inst_12455 = (state_13385[(79)]);
var inst_12467 = (state_13385[(2)]);
var inst_12468 = cljs.core.conj.call(null,inst_12455,inst_12467);
var inst_12455__$1 = inst_12468;
var inst_12456 = inst_12460;
var state_13385__$1 = (function (){var statearr_13763 = state_13385;
(statearr_13763[(79)] = inst_12455__$1);

(statearr_13763[(81)] = inst_12456);

return statearr_13763;
})();
var statearr_13764_14064 = state_13385__$1;
(statearr_13764_14064[(2)] = null);

(statearr_13764_14064[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13386 === (18))){
var inst_12427 = (state_13385[(60)]);
var inst_12388 = (state_13385[(61)]);
var inst_12928 = (state_13385[(102)]);
var inst_12421 = (state_13385[(62)]);
var inst_12895 = (state_13385[(103)]);
var inst_12417 = (state_13385[(63)]);
var inst_12474 = (state_13385[(51)]);
var inst_12447 = (state_13385[(78)]);
var inst_12383 = (state_13385[(45)]);
var inst_12591 = (state_13385[(40)]);
var inst_12916 = (state_13385[(104)]);
var inst_12397 = (state_13385[(64)]);
var inst_12892 = (state_13385[(84)]);
var inst_12882 = (state_13385[(25)]);
var inst_12501 = (state_13385[(26)]);
var inst_12893 = (state_13385[(85)]);
var inst_12416 = (state_13385[(65)]);
var inst_12396 = (state_13385[(30)]);
var inst_12899 = (state_13385[(86)]);
var inst_12887 = (state_13385[(105)]);
var inst_12395 = (state_13385[(66)]);
var inst_12903 = (state_13385[(106)]);
var inst_12398 = (state_13385[(31)]);
var inst_12502 = (state_13385[(107)]);
var inst_12437 = (state_13385[(67)]);
var inst_12590 = (state_13385[(108)]);
var inst_12907 = (state_13385[(109)]);
var inst_12506 = (state_13385[(110)]);
var inst_12919 = (state_13385[(111)]);
var inst_12883 = (state_13385[(112)]);
var inst_12391 = (state_13385[(68)]);
var inst_12418 = (state_13385[(69)]);
var inst_12430 = (state_13385[(70)]);
var inst_12904 = (state_13385[(117)]);
var inst_12394 = (state_13385[(71)]);
var inst_12884 = (state_13385[(118)]);
var inst_12424 = (state_13385[(72)]);
var inst_12585 = (state_13385[(119)]);
var inst_12578 = (state_13385[(120)]);
var inst_12411 = (state_13385[(73)]);
var inst_12906 = (state_13385[(121)]);
var inst_12896 = (state_13385[(122)]);
var inst_12408 = (state_13385[(74)]);
var inst_12905 = (state_13385[(123)]);
var inst_12589 = (state_13385[(124)]);
var inst_12503 = (state_13385[(88)]);
var inst_12387 = (state_13385[(75)]);
var inst_12384 = (state_13385[(47)]);
var inst_12886 = (state_13385[(32)]);
var inst_12894 = (state_13385[(125)]);
var inst_12586 = (state_13385[(19)]);
var inst_12393 = (state_13385[(76)]);
var inst_12444 = (state_13385[(77)]);
var inst_12881 = (state_13385[(97)]);
var inst_12885 = (state_13385[(126)]);
var inst_12888 = (state_13385[(15)]);
var inst_12908 = (state_13385[(127)]);
var inst_12902 = (state_13385[(89)]);
var inst_12892__$1 = cljs.core.nth.call(null,inst_12882,(0),null);
var inst_12893__$1 = cljs.core.nth.call(null,inst_12882,(1),null);
var inst_12894__$1 = (inst_12884 + Math.PI);
var inst_12895__$1 = Math.cos.call(null,inst_12894__$1);
var inst_12896__$1 = Math.sin.call(null,inst_12894__$1);
var inst_12897 = ((2) * Math.PI);
var inst_12898 = (inst_12897 - inst_12894__$1);
var inst_12899__$1 = Math.cos.call(null,inst_12898);
var inst_12900 = ((2) * Math.PI);
var inst_12901 = (inst_12900 - inst_12894__$1);
var inst_12902__$1 = Math.sin.call(null,inst_12901);
var inst_12903__$1 = (inst_12883 * inst_12895__$1);
var inst_12904__$1 = (inst_12883 * inst_12896__$1);
var inst_12905__$1 = farn.core.main_stage.children.length;
var inst_12906__$1 = farn.spatial.which_cell.call(null,inst_12882,farn.core.cell_size);
var inst_12907__$1 = cljs.core.nth.call(null,inst_12906__$1,(0),null);
var inst_12908__$1 = cljs.core.nth.call(null,inst_12906__$1,(1),null);
var inst_12909 = window.innerWidth;
var inst_12910 = window.innerHeight;
var inst_12911 = (farn.core.isometric_factor * inst_12910);
var inst_12912 = ((inst_12909 > inst_12911) ? inst_12909 : inst_12911);
var inst_12913 = (inst_12912 / (2));
var inst_12914 = (inst_12913 / farn.core.cell_size);
var inst_12915 = ((1) + inst_12914);
var inst_12916__$1 = (inst_12915 | (0));
var inst_12917 = (- inst_12916__$1);
var inst_12918 = (inst_12916__$1 + (1));
var inst_12919__$1 = cljs.core.range.call(null,inst_12917,inst_12918);
var inst_12926 = (function (){var add_cell_BANG_ = inst_12590;
var depth_compare = inst_12502;
var d_theta = inst_12885;
var x = inst_12892__$1;
var player_stars_text = inst_12421;
var player_standing_texs = inst_12408;
var cells = inst_12886;
var vec__12890 = inst_12882;
var render_range = inst_12919__$1;
var player_shadow = inst_12398;
var player_cell = inst_12906__$1;
var close_QMARK_ = inst_12506;
var sprite_count = inst_12887;
var player_pos = inst_12589;
var calc_theta = inst_12894__$1;
var obstacle_types = inst_12430;
var polar_object_coords = inst_12503;
var trees = inst_12437;
var player_hit = inst_12888;
var old_sprite_count = inst_12905__$1;
var y = inst_12893__$1;
var player_standing_sway = inst_12411;
var player_cell_y = inst_12908__$1;
var player_cell_x = inst_12907__$1;
var game_sprites = inst_12585;
var loader = inst_12383;
var player_walking_texs = inst_12416;
var vec__12891 = inst_12906__$1;
var rhx = inst_12899__$1;
var rhy = inst_12902__$1;
var frame_num = inst_12881;
var shadow_tex = inst_12397;
var tex = inst_12395;
var speed = inst_12883;
var hit_sfx = inst_12501;
var lobster_big = inst_12387;
var game_map = inst_12578;
var star_tex = inst_12417;
var pos = inst_12882;
var remove_cell_BANG_ = inst_12591;
var theta = inst_12884;
var tufts = inst_12444;
var game_space = inst_12586;
var pickup_textures = inst_12424;
var perlin_channel = inst_12384;
var title_text = inst_12394;
var vx = inst_12903__$1;
var floor_objects = inst_12427;
var pickup_sfx = inst_12474;
var tilemap = inst_12393;
var render_distance = inst_12916__$1;
var vy = inst_12904__$1;
var make_pickup = inst_12447;
var varela = inst_12388;
var hy = inst_12896__$1;
var wait = inst_12391;
var hx = inst_12895__$1;
var player = inst_12396;
var player_stars_icon = inst_12418;
return ((function (add_cell_BANG_,depth_compare,d_theta,x,player_stars_text,player_standing_texs,cells,vec__12890,render_range,player_shadow,player_cell,close_QMARK_,sprite_count,player_pos,calc_theta,obstacle_types,polar_object_coords,trees,player_hit,old_sprite_count,y,player_standing_sway,player_cell_y,player_cell_x,game_sprites,loader,player_walking_texs,vec__12891,rhx,rhy,frame_num,shadow_tex,tex,speed,hit_sfx,lobster_big,game_map,star_tex,pos,remove_cell_BANG_,theta,tufts,game_space,pickup_textures,perlin_channel,title_text,vx,floor_objects,pickup_sfx,tilemap,render_distance,vy,make_pickup,varela,hy,wait,hx,player,player_stars_icon,inst_12427,inst_12388,inst_12928,inst_12421,inst_12895,inst_12417,inst_12474,inst_12447,inst_12383,inst_12591,inst_12916,inst_12397,inst_12892,inst_12882,inst_12501,inst_12893,inst_12416,inst_12396,inst_12899,inst_12887,inst_12395,inst_12903,inst_12398,inst_12502,inst_12437,inst_12590,inst_12907,inst_12506,inst_12919,inst_12883,inst_12391,inst_12418,inst_12430,inst_12904,inst_12394,inst_12884,inst_12424,inst_12585,inst_12578,inst_12411,inst_12906,inst_12896,inst_12408,inst_12905,inst_12589,inst_12503,inst_12387,inst_12384,inst_12886,inst_12894,inst_12586,inst_12393,inst_12444,inst_12881,inst_12885,inst_12888,inst_12908,inst_12902,inst_12892__$1,inst_12893__$1,inst_12894__$1,inst_12895__$1,inst_12896__$1,inst_12897,inst_12898,inst_12899__$1,inst_12900,inst_12901,inst_12902__$1,inst_12903__$1,inst_12904__$1,inst_12905__$1,inst_12906__$1,inst_12907__$1,inst_12908__$1,inst_12909,inst_12910,inst_12911,inst_12912,inst_12913,inst_12914,inst_12915,inst_12916__$1,inst_12917,inst_12918,inst_12919__$1,state_val_13386,c__6459__auto___13801){
return (function iter__12920(s__12921){
return (new cljs.core.LazySeq(null,((function (add_cell_BANG_,depth_compare,d_theta,x,player_stars_text,player_standing_texs,cells,vec__12890,render_range,player_shadow,player_cell,close_QMARK_,sprite_count,player_pos,calc_theta,obstacle_types,polar_object_coords,trees,player_hit,old_sprite_count,y,player_standing_sway,player_cell_y,player_cell_x,game_sprites,loader,player_walking_texs,vec__12891,rhx,rhy,frame_num,shadow_tex,tex,speed,hit_sfx,lobster_big,game_map,star_tex,pos,remove_cell_BANG_,theta,tufts,game_space,pickup_textures,perlin_channel,title_text,vx,floor_objects,pickup_sfx,tilemap,render_distance,vy,make_pickup,varela,hy,wait,hx,player,player_stars_icon,inst_12427,inst_12388,inst_12928,inst_12421,inst_12895,inst_12417,inst_12474,inst_12447,inst_12383,inst_12591,inst_12916,inst_12397,inst_12892,inst_12882,inst_12501,inst_12893,inst_12416,inst_12396,inst_12899,inst_12887,inst_12395,inst_12903,inst_12398,inst_12502,inst_12437,inst_12590,inst_12907,inst_12506,inst_12919,inst_12883,inst_12391,inst_12418,inst_12430,inst_12904,inst_12394,inst_12884,inst_12424,inst_12585,inst_12578,inst_12411,inst_12906,inst_12896,inst_12408,inst_12905,inst_12589,inst_12503,inst_12387,inst_12384,inst_12886,inst_12894,inst_12586,inst_12393,inst_12444,inst_12881,inst_12885,inst_12888,inst_12908,inst_12902,inst_12892__$1,inst_12893__$1,inst_12894__$1,inst_12895__$1,inst_12896__$1,inst_12897,inst_12898,inst_12899__$1,inst_12900,inst_12901,inst_12902__$1,inst_12903__$1,inst_12904__$1,inst_12905__$1,inst_12906__$1,inst_12907__$1,inst_12908__$1,inst_12909,inst_12910,inst_12911,inst_12912,inst_12913,inst_12914,inst_12915,inst_12916__$1,inst_12917,inst_12918,inst_12919__$1,state_val_13386,c__6459__auto___13801){
return (function (){
var s__12921__$1 = s__12921;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__12921__$1);
if(temp__4126__auto__){
var xs__4624__auto__ = temp__4126__auto__;
var dx = cljs.core.first.call(null,xs__4624__auto__);
var iterys__4382__auto__ = ((function (s__12921__$1,dx,xs__4624__auto__,temp__4126__auto__,add_cell_BANG_,depth_compare,d_theta,x,player_stars_text,player_standing_texs,cells,vec__12890,render_range,player_shadow,player_cell,close_QMARK_,sprite_count,player_pos,calc_theta,obstacle_types,polar_object_coords,trees,player_hit,old_sprite_count,y,player_standing_sway,player_cell_y,player_cell_x,game_sprites,loader,player_walking_texs,vec__12891,rhx,rhy,frame_num,shadow_tex,tex,speed,hit_sfx,lobster_big,game_map,star_tex,pos,remove_cell_BANG_,theta,tufts,game_space,pickup_textures,perlin_channel,title_text,vx,floor_objects,pickup_sfx,tilemap,render_distance,vy,make_pickup,varela,hy,wait,hx,player,player_stars_icon,inst_12427,inst_12388,inst_12928,inst_12421,inst_12895,inst_12417,inst_12474,inst_12447,inst_12383,inst_12591,inst_12916,inst_12397,inst_12892,inst_12882,inst_12501,inst_12893,inst_12416,inst_12396,inst_12899,inst_12887,inst_12395,inst_12903,inst_12398,inst_12502,inst_12437,inst_12590,inst_12907,inst_12506,inst_12919,inst_12883,inst_12391,inst_12418,inst_12430,inst_12904,inst_12394,inst_12884,inst_12424,inst_12585,inst_12578,inst_12411,inst_12906,inst_12896,inst_12408,inst_12905,inst_12589,inst_12503,inst_12387,inst_12384,inst_12886,inst_12894,inst_12586,inst_12393,inst_12444,inst_12881,inst_12885,inst_12888,inst_12908,inst_12902,inst_12892__$1,inst_12893__$1,inst_12894__$1,inst_12895__$1,inst_12896__$1,inst_12897,inst_12898,inst_12899__$1,inst_12900,inst_12901,inst_12902__$1,inst_12903__$1,inst_12904__$1,inst_12905__$1,inst_12906__$1,inst_12907__$1,inst_12908__$1,inst_12909,inst_12910,inst_12911,inst_12912,inst_12913,inst_12914,inst_12915,inst_12916__$1,inst_12917,inst_12918,inst_12919__$1,state_val_13386,c__6459__auto___13801){
return (function iter__12922(s__12923){
return (new cljs.core.LazySeq(null,((function (s__12921__$1,dx,xs__4624__auto__,temp__4126__auto__,add_cell_BANG_,depth_compare,d_theta,x,player_stars_text,player_standing_texs,cells,vec__12890,render_range,player_shadow,player_cell,close_QMARK_,sprite_count,player_pos,calc_theta,obstacle_types,polar_object_coords,trees,player_hit,old_sprite_count,y,player_standing_sway,player_cell_y,player_cell_x,game_sprites,loader,player_walking_texs,vec__12891,rhx,rhy,frame_num,shadow_tex,tex,speed,hit_sfx,lobster_big,game_map,star_tex,pos,remove_cell_BANG_,theta,tufts,game_space,pickup_textures,perlin_channel,title_text,vx,floor_objects,pickup_sfx,tilemap,render_distance,vy,make_pickup,varela,hy,wait,hx,player,player_stars_icon,inst_12427,inst_12388,inst_12928,inst_12421,inst_12895,inst_12417,inst_12474,inst_12447,inst_12383,inst_12591,inst_12916,inst_12397,inst_12892,inst_12882,inst_12501,inst_12893,inst_12416,inst_12396,inst_12899,inst_12887,inst_12395,inst_12903,inst_12398,inst_12502,inst_12437,inst_12590,inst_12907,inst_12506,inst_12919,inst_12883,inst_12391,inst_12418,inst_12430,inst_12904,inst_12394,inst_12884,inst_12424,inst_12585,inst_12578,inst_12411,inst_12906,inst_12896,inst_12408,inst_12905,inst_12589,inst_12503,inst_12387,inst_12384,inst_12886,inst_12894,inst_12586,inst_12393,inst_12444,inst_12881,inst_12885,inst_12888,inst_12908,inst_12902,inst_12892__$1,inst_12893__$1,inst_12894__$1,inst_12895__$1,inst_12896__$1,inst_12897,inst_12898,inst_12899__$1,inst_12900,inst_12901,inst_12902__$1,inst_12903__$1,inst_12904__$1,inst_12905__$1,inst_12906__$1,inst_12907__$1,inst_12908__$1,inst_12909,inst_12910,inst_12911,inst_12912,inst_12913,inst_12914,inst_12915,inst_12916__$1,inst_12917,inst_12918,inst_12919__$1,state_val_13386,c__6459__auto___13801){
return (function (){
var s__12923__$1 = s__12923;
while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__12923__$1);
if(temp__4126__auto____$1){
var s__12923__$2 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12923__$2)){
var c__4384__auto__ = cljs.core.chunk_first.call(null,s__12923__$2);
var size__4385__auto__ = cljs.core.count.call(null,c__4384__auto__);
var b__12925 = cljs.core.chunk_buffer.call(null,size__4385__auto__);
if((function (){var i__12924 = (0);
while(true){
if((i__12924 < size__4385__auto__)){
var dy = cljs.core._nth.call(null,c__4384__auto__,i__12924);
cljs.core.chunk_append.call(null,b__12925,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(dx + player_cell_x),(dy + player_cell_y)], null));

var G__14065 = (i__12924 + (1));
i__12924 = G__14065;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12925),iter__12922.call(null,cljs.core.chunk_rest.call(null,s__12923__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12925),null);
}
} else {
var dy = cljs.core.first.call(null,s__12923__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(dx + player_cell_x),(dy + player_cell_y)], null),iter__12922.call(null,cljs.core.rest.call(null,s__12923__$2)));
}
} else {
return null;
}
break;
}
});})(s__12921__$1,dx,xs__4624__auto__,temp__4126__auto__,add_cell_BANG_,depth_compare,d_theta,x,player_stars_text,player_standing_texs,cells,vec__12890,render_range,player_shadow,player_cell,close_QMARK_,sprite_count,player_pos,calc_theta,obstacle_types,polar_object_coords,trees,player_hit,old_sprite_count,y,player_standing_sway,player_cell_y,player_cell_x,game_sprites,loader,player_walking_texs,vec__12891,rhx,rhy,frame_num,shadow_tex,tex,speed,hit_sfx,lobster_big,game_map,star_tex,pos,remove_cell_BANG_,theta,tufts,game_space,pickup_textures,perlin_channel,title_text,vx,floor_objects,pickup_sfx,tilemap,render_distance,vy,make_pickup,varela,hy,wait,hx,player,player_stars_icon,inst_12427,inst_12388,inst_12928,inst_12421,inst_12895,inst_12417,inst_12474,inst_12447,inst_12383,inst_12591,inst_12916,inst_12397,inst_12892,inst_12882,inst_12501,inst_12893,inst_12416,inst_12396,inst_12899,inst_12887,inst_12395,inst_12903,inst_12398,inst_12502,inst_12437,inst_12590,inst_12907,inst_12506,inst_12919,inst_12883,inst_12391,inst_12418,inst_12430,inst_12904,inst_12394,inst_12884,inst_12424,inst_12585,inst_12578,inst_12411,inst_12906,inst_12896,inst_12408,inst_12905,inst_12589,inst_12503,inst_12387,inst_12384,inst_12886,inst_12894,inst_12586,inst_12393,inst_12444,inst_12881,inst_12885,inst_12888,inst_12908,inst_12902,inst_12892__$1,inst_12893__$1,inst_12894__$1,inst_12895__$1,inst_12896__$1,inst_12897,inst_12898,inst_12899__$1,inst_12900,inst_12901,inst_12902__$1,inst_12903__$1,inst_12904__$1,inst_12905__$1,inst_12906__$1,inst_12907__$1,inst_12908__$1,inst_12909,inst_12910,inst_12911,inst_12912,inst_12913,inst_12914,inst_12915,inst_12916__$1,inst_12917,inst_12918,inst_12919__$1,state_val_13386,c__6459__auto___13801))
,null,null));
});})(s__12921__$1,dx,xs__4624__auto__,temp__4126__auto__,add_cell_BANG_,depth_compare,d_theta,x,player_stars_text,player_standing_texs,cells,vec__12890,render_range,player_shadow,player_cell,close_QMARK_,sprite_count,player_pos,calc_theta,obstacle_types,polar_object_coords,trees,player_hit,old_sprite_count,y,player_standing_sway,player_cell_y,player_cell_x,game_sprites,loader,player_walking_texs,vec__12891,rhx,rhy,frame_num,shadow_tex,tex,speed,hit_sfx,lobster_big,game_map,star_tex,pos,remove_cell_BANG_,theta,tufts,game_space,pickup_textures,perlin_channel,title_text,vx,floor_objects,pickup_sfx,tilemap,render_distance,vy,make_pickup,varela,hy,wait,hx,player,player_stars_icon,inst_12427,inst_12388,inst_12928,inst_12421,inst_12895,inst_12417,inst_12474,inst_12447,inst_12383,inst_12591,inst_12916,inst_12397,inst_12892,inst_12882,inst_12501,inst_12893,inst_12416,inst_12396,inst_12899,inst_12887,inst_12395,inst_12903,inst_12398,inst_12502,inst_12437,inst_12590,inst_12907,inst_12506,inst_12919,inst_12883,inst_12391,inst_12418,inst_12430,inst_12904,inst_12394,inst_12884,inst_12424,inst_12585,inst_12578,inst_12411,inst_12906,inst_12896,inst_12408,inst_12905,inst_12589,inst_12503,inst_12387,inst_12384,inst_12886,inst_12894,inst_12586,inst_12393,inst_12444,inst_12881,inst_12885,inst_12888,inst_12908,inst_12902,inst_12892__$1,inst_12893__$1,inst_12894__$1,inst_12895__$1,inst_12896__$1,inst_12897,inst_12898,inst_12899__$1,inst_12900,inst_12901,inst_12902__$1,inst_12903__$1,inst_12904__$1,inst_12905__$1,inst_12906__$1,inst_12907__$1,inst_12908__$1,inst_12909,inst_12910,inst_12911,inst_12912,inst_12913,inst_12914,inst_12915,inst_12916__$1,inst_12917,inst_12918,inst_12919__$1,state_val_13386,c__6459__auto___13801))
;
var fs__4383__auto__ = cljs.core.seq.call(null,iterys__4382__auto__.call(null,render_range));
if(fs__4383__auto__){
return cljs.core.concat.call(null,fs__4383__auto__,iter__12920.call(null,cljs.core.rest.call(null,s__12921__$1)));
} else {
var G__14066 = cljs.core.rest.call(null,s__12921__$1);
s__12921__$1 = G__14066;
continue;
}
} else {
return null;
}
break;
}
});})(add_cell_BANG_,depth_compare,d_theta,x,player_stars_text,player_standing_texs,cells,vec__12890,render_range,player_shadow,player_cell,close_QMARK_,sprite_count,player_pos,calc_theta,obstacle_types,polar_object_coords,trees,player_hit,old_sprite_count,y,player_standing_sway,player_cell_y,player_cell_x,game_sprites,loader,player_walking_texs,vec__12891,rhx,rhy,frame_num,shadow_tex,tex,speed,hit_sfx,lobster_big,game_map,star_tex,pos,remove_cell_BANG_,theta,tufts,game_space,pickup_textures,perlin_channel,title_text,vx,floor_objects,pickup_sfx,tilemap,render_distance,vy,make_pickup,varela,hy,wait,hx,player,player_stars_icon,inst_12427,inst_12388,inst_12928,inst_12421,inst_12895,inst_12417,inst_12474,inst_12447,inst_12383,inst_12591,inst_12916,inst_12397,inst_12892,inst_12882,inst_12501,inst_12893,inst_12416,inst_12396,inst_12899,inst_12887,inst_12395,inst_12903,inst_12398,inst_12502,inst_12437,inst_12590,inst_12907,inst_12506,inst_12919,inst_12883,inst_12391,inst_12418,inst_12430,inst_12904,inst_12394,inst_12884,inst_12424,inst_12585,inst_12578,inst_12411,inst_12906,inst_12896,inst_12408,inst_12905,inst_12589,inst_12503,inst_12387,inst_12384,inst_12886,inst_12894,inst_12586,inst_12393,inst_12444,inst_12881,inst_12885,inst_12888,inst_12908,inst_12902,inst_12892__$1,inst_12893__$1,inst_12894__$1,inst_12895__$1,inst_12896__$1,inst_12897,inst_12898,inst_12899__$1,inst_12900,inst_12901,inst_12902__$1,inst_12903__$1,inst_12904__$1,inst_12905__$1,inst_12906__$1,inst_12907__$1,inst_12908__$1,inst_12909,inst_12910,inst_12911,inst_12912,inst_12913,inst_12914,inst_12915,inst_12916__$1,inst_12917,inst_12918,inst_12919__$1,state_val_13386,c__6459__auto___13801))
,null,null));
});
;})(add_cell_BANG_,depth_compare,d_theta,x,player_stars_text,player_standing_texs,cells,vec__12890,render_range,player_shadow,player_cell,close_QMARK_,sprite_count,player_pos,calc_theta,obstacle_types,polar_object_coords,trees,player_hit,old_sprite_count,y,player_standing_sway,player_cell_y,player_cell_x,game_sprites,loader,player_walking_texs,vec__12891,rhx,rhy,frame_num,shadow_tex,tex,speed,hit_sfx,lobster_big,game_map,star_tex,pos,remove_cell_BANG_,theta,tufts,game_space,pickup_textures,perlin_channel,title_text,vx,floor_objects,pickup_sfx,tilemap,render_distance,vy,make_pickup,varela,hy,wait,hx,player,player_stars_icon,inst_12427,inst_12388,inst_12928,inst_12421,inst_12895,inst_12417,inst_12474,inst_12447,inst_12383,inst_12591,inst_12916,inst_12397,inst_12892,inst_12882,inst_12501,inst_12893,inst_12416,inst_12396,inst_12899,inst_12887,inst_12395,inst_12903,inst_12398,inst_12502,inst_12437,inst_12590,inst_12907,inst_12506,inst_12919,inst_12883,inst_12391,inst_12418,inst_12430,inst_12904,inst_12394,inst_12884,inst_12424,inst_12585,inst_12578,inst_12411,inst_12906,inst_12896,inst_12408,inst_12905,inst_12589,inst_12503,inst_12387,inst_12384,inst_12886,inst_12894,inst_12586,inst_12393,inst_12444,inst_12881,inst_12885,inst_12888,inst_12908,inst_12902,inst_12892__$1,inst_12893__$1,inst_12894__$1,inst_12895__$1,inst_12896__$1,inst_12897,inst_12898,inst_12899__$1,inst_12900,inst_12901,inst_12902__$1,inst_12903__$1,inst_12904__$1,inst_12905__$1,inst_12906__$1,inst_12907__$1,inst_12908__$1,inst_12909,inst_12910,inst_12911,inst_12912,inst_12913,inst_12914,inst_12915,inst_12916__$1,inst_12917,inst_12918,inst_12919__$1,state_val_13386,c__6459__auto___13801))
})();
var inst_12927 = inst_12926.call(null,inst_12919__$1);
var inst_12928__$1 = cljs.core.doall.call(null,inst_12927);
var inst_12929 = (function (){var add_cell_BANG_ = inst_12590;
var depth_compare = inst_12502;
var d_theta = inst_12885;
var x = inst_12892__$1;
var player_stars_text = inst_12421;
var player_standing_texs = inst_12408;
var cells = inst_12886;
var vec__12890 = inst_12882;
var render_range = inst_12919__$1;
var player_shadow = inst_12398;
var player_cell = inst_12906__$1;
var close_QMARK_ = inst_12506;
var sprite_count = inst_12887;
var player_pos = inst_12589;
var calc_theta = inst_12894__$1;
var obstacle_types = inst_12430;
var polar_object_coords = inst_12503;
var trees = inst_12437;
var player_hit = inst_12888;
var old_sprite_count = inst_12905__$1;
var y = inst_12893__$1;
var player_standing_sway = inst_12411;
var player_cell_y = inst_12908__$1;
var player_cell_x = inst_12907__$1;
var game_sprites = inst_12585;
var loader = inst_12383;
var player_walking_texs = inst_12416;
var player_and_surrounds = inst_12928__$1;
var vec__12891 = inst_12906__$1;
var rhx = inst_12899__$1;
var rhy = inst_12902__$1;
var frame_num = inst_12881;
var shadow_tex = inst_12397;
var tex = inst_12395;
var speed = inst_12883;
var hit_sfx = inst_12501;
var lobster_big = inst_12387;
var game_map = inst_12578;
var star_tex = inst_12417;
var pos = inst_12882;
var remove_cell_BANG_ = inst_12591;
var theta = inst_12884;
var tufts = inst_12444;
var game_space = inst_12586;
var pickup_textures = inst_12424;
var perlin_channel = inst_12384;
var title_text = inst_12394;
var vx = inst_12903__$1;
var floor_objects = inst_12427;
var pickup_sfx = inst_12474;
var tilemap = inst_12393;
var render_distance = inst_12916__$1;
var vy = inst_12904__$1;
var make_pickup = inst_12447;
var varela = inst_12388;
var hy = inst_12896__$1;
var wait = inst_12391;
var hx = inst_12895__$1;
var player = inst_12396;
var player_stars_icon = inst_12418;
return ((function (add_cell_BANG_,depth_compare,d_theta,x,player_stars_text,player_standing_texs,cells,vec__12890,render_range,player_shadow,player_cell,close_QMARK_,sprite_count,player_pos,calc_theta,obstacle_types,polar_object_coords,trees,player_hit,old_sprite_count,y,player_standing_sway,player_cell_y,player_cell_x,game_sprites,loader,player_walking_texs,player_and_surrounds,vec__12891,rhx,rhy,frame_num,shadow_tex,tex,speed,hit_sfx,lobster_big,game_map,star_tex,pos,remove_cell_BANG_,theta,tufts,game_space,pickup_textures,perlin_channel,title_text,vx,floor_objects,pickup_sfx,tilemap,render_distance,vy,make_pickup,varela,hy,wait,hx,player,player_stars_icon,inst_12427,inst_12388,inst_12928,inst_12421,inst_12895,inst_12417,inst_12474,inst_12447,inst_12383,inst_12591,inst_12916,inst_12397,inst_12892,inst_12882,inst_12501,inst_12893,inst_12416,inst_12396,inst_12899,inst_12887,inst_12395,inst_12903,inst_12398,inst_12502,inst_12437,inst_12590,inst_12907,inst_12506,inst_12919,inst_12883,inst_12391,inst_12418,inst_12430,inst_12904,inst_12394,inst_12884,inst_12424,inst_12585,inst_12578,inst_12411,inst_12906,inst_12896,inst_12408,inst_12905,inst_12589,inst_12503,inst_12387,inst_12384,inst_12886,inst_12894,inst_12586,inst_12393,inst_12444,inst_12881,inst_12885,inst_12888,inst_12908,inst_12902,inst_12892__$1,inst_12893__$1,inst_12894__$1,inst_12895__$1,inst_12896__$1,inst_12897,inst_12898,inst_12899__$1,inst_12900,inst_12901,inst_12902__$1,inst_12903__$1,inst_12904__$1,inst_12905__$1,inst_12906__$1,inst_12907__$1,inst_12908__$1,inst_12909,inst_12910,inst_12911,inst_12912,inst_12913,inst_12914,inst_12915,inst_12916__$1,inst_12917,inst_12918,inst_12919__$1,inst_12926,inst_12927,inst_12928__$1,state_val_13386,c__6459__auto___13801){
return (function (test_cell,cells__$1){
if(!(cljs.core.contains_QMARK_.call(null,cells__$1,test_cell))){
add_cell_BANG_.call(null,test_cell);

return cljs.core.conj.call(null,cells__$1,test_cell);
} else {
return cells__$1;
}
});
;})(add_cell_BANG_,depth_compare,d_theta,x,player_stars_text,player_standing_texs,cells,vec__12890,render_range,player_shadow,player_cell,close_QMARK_,sprite_count,player_pos,calc_theta,obstacle_types,polar_object_coords,trees,player_hit,old_sprite_count,y,player_standing_sway,player_cell_y,player_cell_x,game_sprites,loader,player_walking_texs,player_and_surrounds,vec__12891,rhx,rhy,frame_num,shadow_tex,tex,speed,hit_sfx,lobster_big,game_map,star_tex,pos,remove_cell_BANG_,theta,tufts,game_space,pickup_textures,perlin_channel,title_text,vx,floor_objects,pickup_sfx,tilemap,render_distance,vy,make_pickup,varela,hy,wait,hx,player,player_stars_icon,inst_12427,inst_12388,inst_12928,inst_12421,inst_12895,inst_12417,inst_12474,inst_12447,inst_12383,inst_12591,inst_12916,inst_12397,inst_12892,inst_12882,inst_12501,inst_12893,inst_12416,inst_12396,inst_12899,inst_12887,inst_12395,inst_12903,inst_12398,inst_12502,inst_12437,inst_12590,inst_12907,inst_12506,inst_12919,inst_12883,inst_12391,inst_12418,inst_12430,inst_12904,inst_12394,inst_12884,inst_12424,inst_12585,inst_12578,inst_12411,inst_12906,inst_12896,inst_12408,inst_12905,inst_12589,inst_12503,inst_12387,inst_12384,inst_12886,inst_12894,inst_12586,inst_12393,inst_12444,inst_12881,inst_12885,inst_12888,inst_12908,inst_12902,inst_12892__$1,inst_12893__$1,inst_12894__$1,inst_12895__$1,inst_12896__$1,inst_12897,inst_12898,inst_12899__$1,inst_12900,inst_12901,inst_12902__$1,inst_12903__$1,inst_12904__$1,inst_12905__$1,inst_12906__$1,inst_12907__$1,inst_12908__$1,inst_12909,inst_12910,inst_12911,inst_12912,inst_12913,inst_12914,inst_12915,inst_12916__$1,inst_12917,inst_12918,inst_12919__$1,inst_12926,inst_12927,inst_12928__$1,state_val_13386,c__6459__auto___13801))
})();
var inst_12933 = cljs.core.nth.call(null,inst_12928__$1,(0),null);
var inst_12934 = cljs.core.nthnext.call(null,inst_12928__$1,(1));
var inst_12935 = inst_12886;
var inst_12936 = inst_12928__$1;
var state_13385__$1 = (function (){var statearr_13765 = state_13385;
(statearr_13765[(101)] = inst_12929);

(statearr_13765[(102)] = inst_12928__$1);

(statearr_13765[(103)] = inst_12895__$1);

(statearr_13765[(104)] = inst_12916__$1);

(statearr_13765[(84)] = inst_12892__$1);

(statearr_13765[(85)] = inst_12893__$1);

(statearr_13765[(86)] = inst_12899__$1);

(statearr_13765[(21)] = inst_12936);

(statearr_13765[(106)] = inst_12903__$1);

(statearr_13765[(181)] = inst_12934);

(statearr_13765[(109)] = inst_12907__$1);

(statearr_13765[(111)] = inst_12919__$1);

(statearr_13765[(182)] = inst_12933);

(statearr_13765[(117)] = inst_12904__$1);

(statearr_13765[(132)] = inst_12935);

(statearr_13765[(121)] = inst_12906__$1);

(statearr_13765[(122)] = inst_12896__$1);

(statearr_13765[(123)] = inst_12905__$1);

(statearr_13765[(125)] = inst_12894__$1);

(statearr_13765[(127)] = inst_12908__$1);

(statearr_13765[(89)] = inst_12902__$1);

return statearr_13765;
})();
var statearr_13766_14067 = state_13385__$1;
(statearr_13766_14067[(2)] = null);

(statearr_13766_14067[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13386 === (105))){
var inst_12892 = (state_13385[(84)]);
var inst_12893 = (state_13385[(85)]);
var inst_12899 = (state_13385[(86)]);
var inst_13254 = (state_13385[(48)]);
var inst_12503 = (state_13385[(88)]);
var inst_12881 = (state_13385[(97)]);
var inst_12902 = (state_13385[(89)]);
var inst_13263 = cljs.core.first.call(null,inst_13254);
var inst_13265 = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(inst_13263);
var inst_13266 = new cljs.core.Keyword(null,"sprite","sprite",172516848).cljs$core$IFn$_invoke$arity$1(inst_13263);
var inst_13267 = inst_12503.call(null,inst_13265,inst_13266,inst_12892,inst_12893,inst_12899,inst_12902);
var inst_13268 = cljs.core.nth.call(null,inst_13267,(0),null);
var inst_13269 = cljs.core.nth.call(null,inst_13267,(1),null);
var inst_13270 = new cljs.core.Keyword(null,"sprite","sprite",172516848).cljs$core$IFn$_invoke$arity$1(inst_13263);
var inst_13271 = farn.sprite.set_pos_BANG_.call(null,inst_13270,inst_13268,inst_13269);
var inst_13272 = new cljs.core.Keyword(null,"shadow","shadow",873231803).cljs$core$IFn$_invoke$arity$1(inst_13263);
var inst_13273 = farn.sprite.set_pos_BANG_.call(null,inst_13272,inst_13268,inst_13269);
var inst_13274 = new cljs.core.Keyword(null,"sprite","sprite",172516848).cljs$core$IFn$_invoke$arity$1(inst_13263);
var inst_13275 = (inst_12881 * farn.core.pickup_bounce_speed);
var inst_13276 = Math.sin.call(null,inst_13275);
var inst_13277 = ((1) + inst_13276);
var inst_13278 = (farn.core.pickup_bounce_height * inst_13277);
var inst_13279 = (farn.core.pickup_vertical_offset + inst_13278);
var inst_13280 = farn.sprite.set_pivot_BANG_.call(null,inst_13274,(0),inst_13279);
var inst_13281 = cljs.core.next.call(null,inst_13254);
var inst_13225 = inst_13281;
var inst_13226 = null;
var inst_13227 = (0);
var inst_13228 = (0);
var state_13385__$1 = (function (){var statearr_13767 = state_13385;
(statearr_13767[(7)] = inst_13225);

(statearr_13767[(183)] = inst_13271);

(statearr_13767[(184)] = inst_13273);

(statearr_13767[(9)] = inst_13227);

(statearr_13767[(185)] = inst_13280);

(statearr_13767[(10)] = inst_13226);

(statearr_13767[(11)] = inst_13228);

return statearr_13767;
})();
var statearr_13768_14068 = state_13385__$1;
(statearr_13768_14068[(2)] = null);

(statearr_13768_14068[(1)] = (96));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13386 === (52))){
var inst_12474 = (state_13385[(51)]);
var inst_13039 = (state_13385[(59)]);
var inst_13058 = cljs.core.rand_nth.call(null,inst_12474);
var inst_13059 = farn.sound.play_sound.call(null,inst_13058,0.4);
var inst_13060 = new cljs.core.Keyword(null,"sprite","sprite",172516848).cljs$core$IFn$_invoke$arity$1(inst_13039);
var inst_13061 = farn.core.main_stage.removeChild(inst_13060);
var inst_13062 = new cljs.core.Keyword(null,"shadow","shadow",873231803).cljs$core$IFn$_invoke$arity$1(inst_13039);
var inst_13063 = farn.core.main_stage.removeChild(inst_13062);
var inst_13064 = cljs.core.swap_BANG_.call(null,farn.core.player_stars,cljs.core.inc);
var inst_13065 = cljs.core.swap_BANG_.call(null,farn.core.pickup_store,cljs.core.disj,inst_13039);
var state_13385__$1 = (function (){var statearr_13769 = state_13385;
(statearr_13769[(186)] = inst_13059);

(statearr_13769[(187)] = inst_13064);

(statearr_13769[(188)] = inst_13065);

(statearr_13769[(189)] = inst_13063);

(statearr_13769[(190)] = inst_13061);

return statearr_13769;
})();
var statearr_13770_14069 = state_13385__$1;
(statearr_13770_14069[(2)] = null);

(statearr_13770_14069[(1)] = (53));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13386 === (114))){
var inst_13318 = cljs.core.reset_BANG_.call(null,farn.core.player_animation,new cljs.core.Keyword(null,"standing","standing",-1248340762));
var state_13385__$1 = state_13385;
var statearr_13771_14070 = state_13385__$1;
(statearr_13771_14070[(2)] = inst_13318);

(statearr_13771_14070[(1)] = (115));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13386 === (67))){
var state_13385__$1 = state_13385;
var statearr_13772_14071 = state_13385__$1;
(statearr_13772_14071[(2)] = null);

(statearr_13772_14071[(1)] = (68));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13386 === (71))){
var inst_13131 = (state_13385[(33)]);
var inst_13139 = (state_13385[(83)]);
var inst_13133 = (state_13385[(34)]);
var inst_13140 = (state_13385[(87)]);
var inst_12586 = (state_13385[(19)]);
var inst_13138 = cljs.core._nth.call(null,inst_13131,inst_13133);
var inst_13139__$1 = inst_12586.call(null,inst_13138);
var inst_13140__$1 = cljs.core.count.call(null,inst_13139__$1);
var inst_13141 = (inst_13140__$1 > (0));
var state_13385__$1 = (function (){var statearr_13773 = state_13385;
(statearr_13773[(83)] = inst_13139__$1);

(statearr_13773[(87)] = inst_13140__$1);

return statearr_13773;
})();
if(cljs.core.truth_(inst_13141)){
var statearr_13774_14072 = state_13385__$1;
(statearr_13774_14072[(1)] = (74));

} else {
var statearr_13775_14073 = state_13385__$1;
(statearr_13775_14073[(1)] = (75));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13386 === (42))){
var inst_13030 = (state_13385[(58)]);
var inst_13032 = cljs.core.chunked_seq_QMARK_.call(null,inst_13030);
var state_13385__$1 = state_13385;
if(inst_13032){
var statearr_13779_14074 = state_13385__$1;
(statearr_13779_14074[(1)] = (45));

} else {
var statearr_13780_14075 = state_13385__$1;
(statearr_13780_14075[(1)] = (46));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13386 === (80))){
var state_13385__$1 = state_13385;
var statearr_13781_14076 = state_13385__$1;
(statearr_13781_14076[(2)] = null);

(statearr_13781_14076[(1)] = (81));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13386 === (37))){
var inst_12989 = (state_13385[(92)]);
var inst_12988 = (state_13385[(93)]);
var inst_12987 = (state_13385[(94)]);
var inst_12990 = (state_13385[(95)]);
var inst_13026 = (state_13385[(2)]);
var inst_13027 = (inst_12990 + (1));
var tmp13776 = inst_12989;
var tmp13777 = inst_12988;
var tmp13778 = inst_12987;
var inst_12987__$1 = tmp13778;
var inst_12988__$1 = tmp13777;
var inst_12989__$1 = tmp13776;
var inst_12990__$1 = inst_13027;
var state_13385__$1 = (function (){var statearr_13782 = state_13385;
(statearr_13782[(191)] = inst_13026);

(statearr_13782[(92)] = inst_12989__$1);

(statearr_13782[(93)] = inst_12988__$1);

(statearr_13782[(94)] = inst_12987__$1);

(statearr_13782[(95)] = inst_12990__$1);

return statearr_13782;
})();
var statearr_13783_14077 = state_13385__$1;
(statearr_13783_14077[(2)] = null);

(statearr_13783_14077[(1)] = (30));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13386 === (63))){
var inst_12883 = (state_13385[(112)]);
var inst_13116 = (state_13385[(2)]);
var inst_13117 = cljs.core.reset_BANG_.call(null,farn.core.player_stars,(0));
var inst_13118 = (inst_12883 / farn.core.player_max_speed);
var inst_13119 = ((30) * inst_13118);
var state_13385__$1 = (function (){var statearr_13784 = state_13385;
(statearr_13784[(192)] = inst_13117);

(statearr_13784[(193)] = inst_13116);

return statearr_13784;
})();
var statearr_13785_14078 = state_13385__$1;
(statearr_13785_14078[(2)] = inst_13119);

(statearr_13785_14078[(1)] = (60));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13386 === (94))){
var state_13385__$1 = state_13385;
var statearr_13786_14079 = state_13385__$1;
(statearr_13786_14079[(2)] = null);

(statearr_13786_14079[(1)] = (95));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13386 === (8))){
var inst_12455 = (state_13385[(79)]);
var state_13385__$1 = state_13385;
var statearr_13787_14080 = state_13385__$1;
(statearr_13787_14080[(2)] = inst_12455);

(statearr_13787_14080[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13386 === (49))){
var state_13385__$1 = state_13385;
var statearr_13788_14081 = state_13385__$1;
(statearr_13788_14081[(2)] = null);

(statearr_13788_14081[(1)] = (50));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13386 === (84))){
var inst_13214 = (state_13385[(2)]);
var state_13385__$1 = state_13385;
var statearr_13789_14082 = state_13385__$1;
(statearr_13789_14082[(2)] = inst_13214);

(statearr_13789_14082[(1)] = (73));


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
});})(c__6459__auto___13801))
;
return ((function (switch__6444__auto__,c__6459__auto___13801){
return (function() {
var state_machine__6445__auto__ = null;
var state_machine__6445__auto____0 = (function (){
var statearr_13793 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13793[(0)] = state_machine__6445__auto__);

(statearr_13793[(1)] = (1));

return statearr_13793;
});
var state_machine__6445__auto____1 = (function (state_13385){
while(true){
var ret_value__6446__auto__ = (function (){try{while(true){
var result__6447__auto__ = switch__6444__auto__.call(null,state_13385);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6447__auto__;
}
break;
}
}catch (e13794){if((e13794 instanceof Object)){
var ex__6448__auto__ = e13794;
var statearr_13795_14083 = state_13385;
(statearr_13795_14083[(5)] = ex__6448__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13385);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13794;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14084 = state_13385;
state_13385 = G__14084;
continue;
} else {
return ret_value__6446__auto__;
}
break;
}
});
state_machine__6445__auto__ = function(state_13385){
switch(arguments.length){
case 0:
return state_machine__6445__auto____0.call(this);
case 1:
return state_machine__6445__auto____1.call(this,state_13385);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6445__auto____0;
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6445__auto____1;
return state_machine__6445__auto__;
})()
;})(switch__6444__auto__,c__6459__auto___13801))
})();
var state__6461__auto__ = (function (){var statearr_13796 = f__6460__auto__.call(null);
(statearr_13796[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6459__auto___13801);

return statearr_13796;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6461__auto__);
});})(c__6459__auto___13801))
);

}
farn.core.main = (function main(){
return null;
});

//# sourceMappingURL=core.js.map