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
farn.core.game_completed = (function game_completed(main_stage,star_tex,shadow_tex,x,y,polar_object_coords,cells,game_space,depth_compare){
var c__6459__auto___11989 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6459__auto___11989){
return (function (){
var f__6460__auto__ = (function (){var switch__6444__auto__ = ((function (c__6459__auto___11989){
return (function (state_11581){
var state_val_11582 = (state_11581[(1)]);
if((state_val_11582 === (7))){
var inst_11338 = (state_11581[(7)]);
var inst_11335 = (state_11581[(8)]);
var inst_11327 = (state_11581[(9)]);
var inst_11330 = (inst_11327 + Math.PI);
var inst_11331 = Math.cos.call(null,inst_11330);
var inst_11332 = Math.sin.call(null,inst_11330);
var inst_11333 = ((2) * Math.PI);
var inst_11334 = (inst_11333 - inst_11330);
var inst_11335__$1 = Math.cos.call(null,inst_11334);
var inst_11336 = ((2) * Math.PI);
var inst_11337 = (inst_11336 - inst_11330);
var inst_11338__$1 = Math.sin.call(null,inst_11337);
var inst_11339 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_11340 = [inst_11335__$1,inst_11338__$1];
var inst_11341 = (new cljs.core.PersistentVector(null,2,(5),inst_11339,inst_11340,null));
var inst_11342 = cljs.core.reset_BANG_.call(null,farn.core.last_player_rh,inst_11341);
var inst_11343 = main_stage.children;
var inst_11344 = inst_11343.sort(depth_compare);
var inst_11345 = farn.events.next_frame.call(null);
var state_11581__$1 = (function (){var statearr_11583 = state_11581;
(statearr_11583[(10)] = inst_11331);

(statearr_11583[(11)] = inst_11342);

(statearr_11583[(7)] = inst_11338__$1);

(statearr_11583[(12)] = inst_11332);

(statearr_11583[(13)] = inst_11344);

(statearr_11583[(8)] = inst_11335__$1);

return statearr_11583;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11581__$1,(9),inst_11345);
} else {
if((state_val_11582 === (20))){
var inst_11388 = (state_11581[(14)]);
var inst_11390 = cljs.core.chunked_seq_QMARK_.call(null,inst_11388);
var state_11581__$1 = state_11581;
if(inst_11390){
var statearr_11584_11990 = state_11581__$1;
(statearr_11584_11990[(1)] = (23));

} else {
var statearr_11585_11991 = state_11581__$1;
(statearr_11585_11991[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11582 === (27))){
var state_11581__$1 = state_11581;
var statearr_11586_11992 = state_11581__$1;
(statearr_11586_11992[(2)] = null);

(statearr_11586_11992[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11582 === (1))){
var state_11581__$1 = state_11581;
var statearr_11587_11993 = state_11581__$1;
(statearr_11587_11993[(2)] = null);

(statearr_11587_11993[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11582 === (24))){
var inst_11338 = (state_11581[(7)]);
var inst_11335 = (state_11581[(8)]);
var inst_11388 = (state_11581[(14)]);
var inst_11397 = cljs.core.first.call(null,inst_11388);
var inst_11399 = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(inst_11397);
var inst_11400 = new cljs.core.Keyword(null,"sprite","sprite",172516848).cljs$core$IFn$_invoke$arity$1(inst_11397);
var inst_11401 = polar_object_coords.call(null,inst_11399,inst_11400,x,y,inst_11335,inst_11338);
var inst_11402 = cljs.core.nth.call(null,inst_11401,(0),null);
var inst_11403 = cljs.core.nth.call(null,inst_11401,(1),null);
var inst_11404 = new cljs.core.Keyword(null,"sprite","sprite",172516848).cljs$core$IFn$_invoke$arity$1(inst_11397);
var inst_11405 = farn.sprite.set_pos_BANG_.call(null,inst_11404,inst_11402,inst_11403);
var inst_11406 = cljs.core.next.call(null,inst_11388);
var inst_11368 = inst_11406;
var inst_11369 = null;
var inst_11370 = (0);
var inst_11371 = (0);
var state_11581__$1 = (function (){var statearr_11588 = state_11581;
(statearr_11588[(15)] = inst_11368);

(statearr_11588[(16)] = inst_11370);

(statearr_11588[(17)] = inst_11369);

(statearr_11588[(18)] = inst_11371);

(statearr_11588[(19)] = inst_11405);

return statearr_11588;
})();
var statearr_11589_11994 = state_11581__$1;
(statearr_11589_11994[(2)] = null);

(statearr_11589_11994[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11582 === (39))){
var inst_11480 = (state_11581[(2)]);
var state_11581__$1 = state_11581;
var statearr_11590_11995 = state_11581__$1;
(statearr_11590_11995[(2)] = inst_11480);

(statearr_11590_11995[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11582 === (46))){
var inst_11502 = (state_11581[(20)]);
var inst_11531 = (state_11581[(21)]);
var inst_11531__$1 = cljs.core.seq.call(null,inst_11502);
var state_11581__$1 = (function (){var statearr_11591 = state_11581;
(statearr_11591[(21)] = inst_11531__$1);

return statearr_11591;
})();
if(inst_11531__$1){
var statearr_11592_11996 = state_11581__$1;
(statearr_11592_11996[(1)] = (48));

} else {
var statearr_11593_11997 = state_11581__$1;
(statearr_11593_11997[(1)] = (49));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11582 === (4))){
var inst_11327 = (0);
var inst_11328 = (0);
var state_11581__$1 = (function (){var statearr_11594 = state_11581;
(statearr_11594[(22)] = inst_11328);

(statearr_11594[(9)] = inst_11327);

return statearr_11594;
})();
var statearr_11595_11998 = state_11581__$1;
(statearr_11595_11998[(2)] = null);

(statearr_11595_11998[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11582 === (15))){
var inst_11370 = (state_11581[(16)]);
var inst_11371 = (state_11581[(18)]);
var inst_11373 = (inst_11371 < inst_11370);
var inst_11374 = inst_11373;
var state_11581__$1 = state_11581;
if(cljs.core.truth_(inst_11374)){
var statearr_11596_11999 = state_11581__$1;
(statearr_11596_11999[(1)] = (17));

} else {
var statearr_11597_12000 = state_11581__$1;
(statearr_11597_12000[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11582 === (48))){
var inst_11531 = (state_11581[(21)]);
var inst_11533 = cljs.core.chunked_seq_QMARK_.call(null,inst_11531);
var state_11581__$1 = state_11581;
if(inst_11533){
var statearr_11598_12001 = state_11581__$1;
(statearr_11598_12001[(1)] = (51));

} else {
var statearr_11599_12002 = state_11581__$1;
(statearr_11599_12002[(1)] = (52));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11582 === (50))){
var inst_11564 = (state_11581[(2)]);
var state_11581__$1 = state_11581;
var statearr_11600_12003 = state_11581__$1;
(statearr_11600_12003[(2)] = inst_11564);

(statearr_11600_12003[(1)] = (47));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11582 === (21))){
var state_11581__$1 = state_11581;
var statearr_11601_12004 = state_11581__$1;
(statearr_11601_12004[(2)] = null);

(statearr_11601_12004[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11582 === (31))){
var inst_11488 = (state_11581[(2)]);
var state_11581__$1 = state_11581;
var statearr_11602_12005 = state_11581__$1;
(statearr_11602_12005[(2)] = inst_11488);

(statearr_11602_12005[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11582 === (32))){
var inst_11438 = (state_11581[(23)]);
var inst_11439 = (state_11581[(24)]);
var inst_11441 = (inst_11439 < inst_11438);
var inst_11442 = inst_11441;
var state_11581__$1 = state_11581;
if(cljs.core.truth_(inst_11442)){
var statearr_11603_12006 = state_11581__$1;
(statearr_11603_12006[(1)] = (34));

} else {
var statearr_11604_12007 = state_11581__$1;
(statearr_11604_12007[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11582 === (40))){
var inst_11456 = (state_11581[(25)]);
var inst_11460 = cljs.core.chunk_first.call(null,inst_11456);
var inst_11461 = cljs.core.chunk_rest.call(null,inst_11456);
var inst_11462 = cljs.core.count.call(null,inst_11460);
var inst_11436 = inst_11461;
var inst_11437 = inst_11460;
var inst_11438 = inst_11462;
var inst_11439 = (0);
var state_11581__$1 = (function (){var statearr_11605 = state_11581;
(statearr_11605[(23)] = inst_11438);

(statearr_11605[(24)] = inst_11439);

(statearr_11605[(26)] = inst_11437);

(statearr_11605[(27)] = inst_11436);

return statearr_11605;
})();
var statearr_11606_12008 = state_11581__$1;
(statearr_11606_12008[(2)] = null);

(statearr_11606_12008[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11582 === (33))){
var inst_11420 = (state_11581[(28)]);
var inst_11484 = (state_11581[(2)]);
var inst_11485 = cljs.core.next.call(null,inst_11420);
var inst_11353 = inst_11485;
var inst_11354 = null;
var inst_11355 = (0);
var inst_11356 = (0);
var state_11581__$1 = (function (){var statearr_11607 = state_11581;
(statearr_11607[(29)] = inst_11353);

(statearr_11607[(30)] = inst_11355);

(statearr_11607[(31)] = inst_11484);

(statearr_11607[(32)] = inst_11354);

(statearr_11607[(33)] = inst_11356);

return statearr_11607;
})();
var statearr_11608_12009 = state_11581__$1;
(statearr_11608_12009[(2)] = null);

(statearr_11608_12009[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11582 === (13))){
var inst_11353 = (state_11581[(29)]);
var inst_11420 = (state_11581[(28)]);
var inst_11420__$1 = cljs.core.seq.call(null,inst_11353);
var state_11581__$1 = (function (){var statearr_11609 = state_11581;
(statearr_11609[(28)] = inst_11420__$1);

return statearr_11609;
})();
if(inst_11420__$1){
var statearr_11610_12010 = state_11581__$1;
(statearr_11610_12010[(1)] = (26));

} else {
var statearr_11611_12011 = state_11581__$1;
(statearr_11611_12011[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11582 === (22))){
var inst_11412 = (state_11581[(2)]);
var state_11581__$1 = state_11581;
var statearr_11612_12012 = state_11581__$1;
(statearr_11612_12012[(2)] = inst_11412);

(statearr_11612_12012[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11582 === (36))){
var inst_11482 = (state_11581[(2)]);
var state_11581__$1 = state_11581;
var statearr_11613_12013 = state_11581__$1;
(statearr_11613_12013[(2)] = inst_11482);

(statearr_11613_12013[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11582 === (41))){
var inst_11338 = (state_11581[(7)]);
var inst_11335 = (state_11581[(8)]);
var inst_11456 = (state_11581[(25)]);
var inst_11465 = cljs.core.first.call(null,inst_11456);
var inst_11467 = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(inst_11465);
var inst_11468 = new cljs.core.Keyword(null,"sprite","sprite",172516848).cljs$core$IFn$_invoke$arity$1(inst_11465);
var inst_11469 = polar_object_coords.call(null,inst_11467,inst_11468,x,y,inst_11335,inst_11338);
var inst_11470 = cljs.core.nth.call(null,inst_11469,(0),null);
var inst_11471 = cljs.core.nth.call(null,inst_11469,(1),null);
var inst_11472 = new cljs.core.Keyword(null,"sprite","sprite",172516848).cljs$core$IFn$_invoke$arity$1(inst_11465);
var inst_11473 = farn.sprite.set_pos_BANG_.call(null,inst_11472,inst_11470,inst_11471);
var inst_11474 = cljs.core.next.call(null,inst_11456);
var inst_11436 = inst_11474;
var inst_11437 = null;
var inst_11438 = (0);
var inst_11439 = (0);
var state_11581__$1 = (function (){var statearr_11614 = state_11581;
(statearr_11614[(23)] = inst_11438);

(statearr_11614[(24)] = inst_11439);

(statearr_11614[(26)] = inst_11437);

(statearr_11614[(34)] = inst_11473);

(statearr_11614[(27)] = inst_11436);

return statearr_11614;
})();
var statearr_11615_12014 = state_11581__$1;
(statearr_11615_12014[(2)] = null);

(statearr_11615_12014[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11582 === (43))){
var inst_11505 = (state_11581[(35)]);
var inst_11504 = (state_11581[(36)]);
var inst_11507 = (inst_11505 < inst_11504);
var inst_11508 = inst_11507;
var state_11581__$1 = state_11581;
if(cljs.core.truth_(inst_11508)){
var statearr_11616_12015 = state_11581__$1;
(statearr_11616_12015[(1)] = (45));

} else {
var statearr_11617_12016 = state_11581__$1;
(statearr_11617_12016[(1)] = (46));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11582 === (29))){
var inst_11420 = (state_11581[(28)]);
var inst_11424 = cljs.core.chunk_first.call(null,inst_11420);
var inst_11425 = cljs.core.chunk_rest.call(null,inst_11420);
var inst_11426 = cljs.core.count.call(null,inst_11424);
var inst_11353 = inst_11425;
var inst_11354 = inst_11424;
var inst_11355 = inst_11426;
var inst_11356 = (0);
var state_11581__$1 = (function (){var statearr_11618 = state_11581;
(statearr_11618[(29)] = inst_11353);

(statearr_11618[(30)] = inst_11355);

(statearr_11618[(32)] = inst_11354);

(statearr_11618[(33)] = inst_11356);

return statearr_11618;
})();
var statearr_11619_12017 = state_11581__$1;
(statearr_11619_12017[(2)] = null);

(statearr_11619_12017[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11582 === (44))){
var inst_11328 = (state_11581[(22)]);
var inst_11327 = (state_11581[(9)]);
var inst_11568 = (state_11581[(2)]);
var inst_11569 = (inst_11327 + 0.03);
var inst_11570 = (inst_11328 + (1));
var inst_11327__$1 = inst_11569;
var inst_11328__$1 = inst_11570;
var state_11581__$1 = (function (){var statearr_11620 = state_11581;
(statearr_11620[(22)] = inst_11328__$1);

(statearr_11620[(37)] = inst_11568);

(statearr_11620[(9)] = inst_11327__$1);

return statearr_11620;
})();
var statearr_11621_12018 = state_11581__$1;
(statearr_11621_12018[(2)] = null);

(statearr_11621_12018[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11582 === (6))){
var inst_11577 = (state_11581[(2)]);
var state_11581__$1 = state_11581;
var statearr_11622_12019 = state_11581__$1;
(statearr_11622_12019[(2)] = inst_11577);

(statearr_11622_12019[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11582 === (28))){
var inst_11491 = (state_11581[(2)]);
var state_11581__$1 = state_11581;
var statearr_11623_12020 = state_11581__$1;
(statearr_11623_12020[(2)] = inst_11491);

(statearr_11623_12020[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11582 === (51))){
var inst_11531 = (state_11581[(21)]);
var inst_11535 = cljs.core.chunk_first.call(null,inst_11531);
var inst_11536 = cljs.core.chunk_rest.call(null,inst_11531);
var inst_11537 = cljs.core.count.call(null,inst_11535);
var inst_11502 = inst_11536;
var inst_11503 = inst_11535;
var inst_11504 = inst_11537;
var inst_11505 = (0);
var state_11581__$1 = (function (){var statearr_11627 = state_11581;
(statearr_11627[(20)] = inst_11502);

(statearr_11627[(35)] = inst_11505);

(statearr_11627[(38)] = inst_11503);

(statearr_11627[(36)] = inst_11504);

return statearr_11627;
})();
var statearr_11628_12021 = state_11581__$1;
(statearr_11628_12021[(2)] = null);

(statearr_11628_12021[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11582 === (25))){
var inst_11409 = (state_11581[(2)]);
var state_11581__$1 = state_11581;
var statearr_11632_12022 = state_11581__$1;
(statearr_11632_12022[(2)] = inst_11409);

(statearr_11632_12022[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11582 === (34))){
var inst_11438 = (state_11581[(23)]);
var inst_11338 = (state_11581[(7)]);
var inst_11335 = (state_11581[(8)]);
var inst_11439 = (state_11581[(24)]);
var inst_11437 = (state_11581[(26)]);
var inst_11436 = (state_11581[(27)]);
var inst_11444 = cljs.core._nth.call(null,inst_11437,inst_11439);
var inst_11446 = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(inst_11444);
var inst_11447 = new cljs.core.Keyword(null,"sprite","sprite",172516848).cljs$core$IFn$_invoke$arity$1(inst_11444);
var inst_11448 = polar_object_coords.call(null,inst_11446,inst_11447,x,y,inst_11335,inst_11338);
var inst_11449 = cljs.core.nth.call(null,inst_11448,(0),null);
var inst_11450 = cljs.core.nth.call(null,inst_11448,(1),null);
var inst_11451 = new cljs.core.Keyword(null,"sprite","sprite",172516848).cljs$core$IFn$_invoke$arity$1(inst_11444);
var inst_11452 = farn.sprite.set_pos_BANG_.call(null,inst_11451,inst_11449,inst_11450);
var inst_11453 = (inst_11439 + (1));
var tmp11624 = inst_11438;
var tmp11625 = inst_11437;
var tmp11626 = inst_11436;
var inst_11436__$1 = tmp11626;
var inst_11437__$1 = tmp11625;
var inst_11438__$1 = tmp11624;
var inst_11439__$1 = inst_11453;
var state_11581__$1 = (function (){var statearr_11633 = state_11581;
(statearr_11633[(23)] = inst_11438__$1);

(statearr_11633[(39)] = inst_11452);

(statearr_11633[(24)] = inst_11439__$1);

(statearr_11633[(26)] = inst_11437__$1);

(statearr_11633[(27)] = inst_11436__$1);

return statearr_11633;
})();
var statearr_11634_12023 = state_11581__$1;
(statearr_11634_12023[(2)] = null);

(statearr_11634_12023[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11582 === (17))){
var inst_11368 = (state_11581[(15)]);
var inst_11338 = (state_11581[(7)]);
var inst_11370 = (state_11581[(16)]);
var inst_11335 = (state_11581[(8)]);
var inst_11369 = (state_11581[(17)]);
var inst_11371 = (state_11581[(18)]);
var inst_11376 = cljs.core._nth.call(null,inst_11369,inst_11371);
var inst_11378 = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(inst_11376);
var inst_11379 = new cljs.core.Keyword(null,"sprite","sprite",172516848).cljs$core$IFn$_invoke$arity$1(inst_11376);
var inst_11380 = polar_object_coords.call(null,inst_11378,inst_11379,x,y,inst_11335,inst_11338);
var inst_11381 = cljs.core.nth.call(null,inst_11380,(0),null);
var inst_11382 = cljs.core.nth.call(null,inst_11380,(1),null);
var inst_11383 = new cljs.core.Keyword(null,"sprite","sprite",172516848).cljs$core$IFn$_invoke$arity$1(inst_11376);
var inst_11384 = farn.sprite.set_pos_BANG_.call(null,inst_11383,inst_11381,inst_11382);
var inst_11385 = (inst_11371 + (1));
var tmp11629 = inst_11368;
var tmp11630 = inst_11370;
var tmp11631 = inst_11369;
var inst_11368__$1 = tmp11629;
var inst_11369__$1 = tmp11631;
var inst_11370__$1 = tmp11630;
var inst_11371__$1 = inst_11385;
var state_11581__$1 = (function (){var statearr_11635 = state_11581;
(statearr_11635[(15)] = inst_11368__$1);

(statearr_11635[(16)] = inst_11370__$1);

(statearr_11635[(17)] = inst_11369__$1);

(statearr_11635[(40)] = inst_11384);

(statearr_11635[(18)] = inst_11371__$1);

return statearr_11635;
})();
var statearr_11636_12024 = state_11581__$1;
(statearr_11636_12024[(2)] = null);

(statearr_11636_12024[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11582 === (3))){
var inst_11579 = (state_11581[(2)]);
var state_11581__$1 = state_11581;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11581__$1,inst_11579);
} else {
if((state_val_11582 === (12))){
var inst_11354 = (state_11581[(32)]);
var inst_11356 = (state_11581[(33)]);
var inst_11361 = cljs.core._nth.call(null,inst_11354,inst_11356);
var inst_11366 = game_space.call(null,inst_11361);
var inst_11367 = cljs.core.seq.call(null,inst_11366);
var inst_11368 = inst_11367;
var inst_11369 = null;
var inst_11370 = (0);
var inst_11371 = (0);
var state_11581__$1 = (function (){var statearr_11637 = state_11581;
(statearr_11637[(15)] = inst_11368);

(statearr_11637[(16)] = inst_11370);

(statearr_11637[(17)] = inst_11369);

(statearr_11637[(18)] = inst_11371);

return statearr_11637;
})();
var statearr_11638_12025 = state_11581__$1;
(statearr_11638_12025[(2)] = null);

(statearr_11638_12025[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11582 === (2))){
var state_11581__$1 = state_11581;
var statearr_11639_12026 = state_11581__$1;
(statearr_11639_12026[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11582 === (23))){
var inst_11388 = (state_11581[(14)]);
var inst_11392 = cljs.core.chunk_first.call(null,inst_11388);
var inst_11393 = cljs.core.chunk_rest.call(null,inst_11388);
var inst_11394 = cljs.core.count.call(null,inst_11392);
var inst_11368 = inst_11393;
var inst_11369 = inst_11392;
var inst_11370 = inst_11394;
var inst_11371 = (0);
var state_11581__$1 = (function (){var statearr_11641 = state_11581;
(statearr_11641[(15)] = inst_11368);

(statearr_11641[(16)] = inst_11370);

(statearr_11641[(17)] = inst_11369);

(statearr_11641[(18)] = inst_11371);

return statearr_11641;
})();
var statearr_11642_12027 = state_11581__$1;
(statearr_11642_12027[(2)] = null);

(statearr_11642_12027[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11582 === (47))){
var inst_11566 = (state_11581[(2)]);
var state_11581__$1 = state_11581;
var statearr_11643_12028 = state_11581__$1;
(statearr_11643_12028[(2)] = inst_11566);

(statearr_11643_12028[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11582 === (35))){
var inst_11456 = (state_11581[(25)]);
var inst_11436 = (state_11581[(27)]);
var inst_11456__$1 = cljs.core.seq.call(null,inst_11436);
var state_11581__$1 = (function (){var statearr_11644 = state_11581;
(statearr_11644[(25)] = inst_11456__$1);

return statearr_11644;
})();
if(inst_11456__$1){
var statearr_11645_12029 = state_11581__$1;
(statearr_11645_12029[(1)] = (37));

} else {
var statearr_11646_12030 = state_11581__$1;
(statearr_11646_12030[(1)] = (38));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11582 === (19))){
var inst_11414 = (state_11581[(2)]);
var state_11581__$1 = state_11581;
var statearr_11647_12031 = state_11581__$1;
(statearr_11647_12031[(2)] = inst_11414);

(statearr_11647_12031[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11582 === (11))){
var inst_11495 = (state_11581[(2)]);
var inst_11500 = cljs.core.deref.call(null,farn.core.pickup_store);
var inst_11501 = cljs.core.seq.call(null,inst_11500);
var inst_11502 = inst_11501;
var inst_11503 = null;
var inst_11504 = (0);
var inst_11505 = (0);
var state_11581__$1 = (function (){var statearr_11648 = state_11581;
(statearr_11648[(20)] = inst_11502);

(statearr_11648[(35)] = inst_11505);

(statearr_11648[(41)] = inst_11495);

(statearr_11648[(38)] = inst_11503);

(statearr_11648[(36)] = inst_11504);

return statearr_11648;
})();
var statearr_11649_12032 = state_11581__$1;
(statearr_11649_12032[(2)] = null);

(statearr_11649_12032[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11582 === (9))){
var inst_11347 = (state_11581[(2)]);
var inst_11352 = cljs.core.seq.call(null,cells);
var inst_11353 = inst_11352;
var inst_11354 = null;
var inst_11355 = (0);
var inst_11356 = (0);
var state_11581__$1 = (function (){var statearr_11650 = state_11581;
(statearr_11650[(29)] = inst_11353);

(statearr_11650[(30)] = inst_11355);

(statearr_11650[(32)] = inst_11354);

(statearr_11650[(33)] = inst_11356);

(statearr_11650[(42)] = inst_11347);

return statearr_11650;
})();
var statearr_11651_12033 = state_11581__$1;
(statearr_11651_12033[(2)] = null);

(statearr_11651_12033[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11582 === (5))){
var state_11581__$1 = state_11581;
var statearr_11655_12034 = state_11581__$1;
(statearr_11655_12034[(2)] = null);

(statearr_11655_12034[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11582 === (14))){
var inst_11493 = (state_11581[(2)]);
var state_11581__$1 = state_11581;
var statearr_11656_12035 = state_11581__$1;
(statearr_11656_12035[(2)] = inst_11493);

(statearr_11656_12035[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11582 === (45))){
var inst_11328 = (state_11581[(22)]);
var inst_11502 = (state_11581[(20)]);
var inst_11338 = (state_11581[(7)]);
var inst_11505 = (state_11581[(35)]);
var inst_11335 = (state_11581[(8)]);
var inst_11503 = (state_11581[(38)]);
var inst_11504 = (state_11581[(36)]);
var inst_11510 = cljs.core._nth.call(null,inst_11503,inst_11505);
var inst_11512 = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(inst_11510);
var inst_11513 = new cljs.core.Keyword(null,"sprite","sprite",172516848).cljs$core$IFn$_invoke$arity$1(inst_11510);
var inst_11514 = polar_object_coords.call(null,inst_11512,inst_11513,x,y,inst_11335,inst_11338);
var inst_11515 = cljs.core.nth.call(null,inst_11514,(0),null);
var inst_11516 = cljs.core.nth.call(null,inst_11514,(1),null);
var inst_11517 = new cljs.core.Keyword(null,"sprite","sprite",172516848).cljs$core$IFn$_invoke$arity$1(inst_11510);
var inst_11518 = farn.sprite.set_pos_BANG_.call(null,inst_11517,inst_11515,inst_11516);
var inst_11519 = new cljs.core.Keyword(null,"shadow","shadow",873231803).cljs$core$IFn$_invoke$arity$1(inst_11510);
var inst_11520 = farn.sprite.set_pos_BANG_.call(null,inst_11519,inst_11515,inst_11516);
var inst_11521 = new cljs.core.Keyword(null,"sprite","sprite",172516848).cljs$core$IFn$_invoke$arity$1(inst_11510);
var inst_11522 = (inst_11328 * farn.core.pickup_bounce_speed);
var inst_11523 = Math.sin.call(null,inst_11522);
var inst_11524 = ((1) + inst_11523);
var inst_11525 = (farn.core.pickup_bounce_height * inst_11524);
var inst_11526 = (farn.core.pickup_vertical_offset + inst_11525);
var inst_11527 = farn.sprite.set_pivot_BANG_.call(null,inst_11521,(0),inst_11526);
var inst_11528 = (inst_11505 + (1));
var tmp11652 = inst_11502;
var tmp11653 = inst_11503;
var tmp11654 = inst_11504;
var inst_11502__$1 = tmp11652;
var inst_11503__$1 = tmp11653;
var inst_11504__$1 = tmp11654;
var inst_11505__$1 = inst_11528;
var state_11581__$1 = (function (){var statearr_11657 = state_11581;
(statearr_11657[(20)] = inst_11502__$1);

(statearr_11657[(43)] = inst_11527);

(statearr_11657[(35)] = inst_11505__$1);

(statearr_11657[(44)] = inst_11518);

(statearr_11657[(45)] = inst_11520);

(statearr_11657[(38)] = inst_11503__$1);

(statearr_11657[(36)] = inst_11504__$1);

return statearr_11657;
})();
var statearr_11658_12036 = state_11581__$1;
(statearr_11658_12036[(2)] = null);

(statearr_11658_12036[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11582 === (53))){
var inst_11561 = (state_11581[(2)]);
var state_11581__$1 = state_11581;
var statearr_11662_12037 = state_11581__$1;
(statearr_11662_12037[(2)] = inst_11561);

(statearr_11662_12037[(1)] = (50));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11582 === (26))){
var inst_11420 = (state_11581[(28)]);
var inst_11422 = cljs.core.chunked_seq_QMARK_.call(null,inst_11420);
var state_11581__$1 = state_11581;
if(inst_11422){
var statearr_11663_12038 = state_11581__$1;
(statearr_11663_12038[(1)] = (29));

} else {
var statearr_11664_12039 = state_11581__$1;
(statearr_11664_12039[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11582 === (16))){
var inst_11353 = (state_11581[(29)]);
var inst_11355 = (state_11581[(30)]);
var inst_11354 = (state_11581[(32)]);
var inst_11356 = (state_11581[(33)]);
var inst_11416 = (state_11581[(2)]);
var inst_11417 = (inst_11356 + (1));
var tmp11659 = inst_11353;
var tmp11660 = inst_11355;
var tmp11661 = inst_11354;
var inst_11353__$1 = tmp11659;
var inst_11354__$1 = tmp11661;
var inst_11355__$1 = tmp11660;
var inst_11356__$1 = inst_11417;
var state_11581__$1 = (function (){var statearr_11665 = state_11581;
(statearr_11665[(29)] = inst_11353__$1);

(statearr_11665[(30)] = inst_11355__$1);

(statearr_11665[(32)] = inst_11354__$1);

(statearr_11665[(33)] = inst_11356__$1);

(statearr_11665[(46)] = inst_11416);

return statearr_11665;
})();
var statearr_11666_12040 = state_11581__$1;
(statearr_11666_12040[(2)] = null);

(statearr_11666_12040[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11582 === (38))){
var state_11581__$1 = state_11581;
var statearr_11667_12041 = state_11581__$1;
(statearr_11667_12041[(2)] = null);

(statearr_11667_12041[(1)] = (39));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11582 === (30))){
var inst_11420 = (state_11581[(28)]);
var inst_11429 = cljs.core.first.call(null,inst_11420);
var inst_11434 = game_space.call(null,inst_11429);
var inst_11435 = cljs.core.seq.call(null,inst_11434);
var inst_11436 = inst_11435;
var inst_11437 = null;
var inst_11438 = (0);
var inst_11439 = (0);
var state_11581__$1 = (function (){var statearr_11668 = state_11581;
(statearr_11668[(23)] = inst_11438);

(statearr_11668[(24)] = inst_11439);

(statearr_11668[(26)] = inst_11437);

(statearr_11668[(27)] = inst_11436);

return statearr_11668;
})();
var statearr_11669_12042 = state_11581__$1;
(statearr_11669_12042[(2)] = null);

(statearr_11669_12042[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11582 === (10))){
var inst_11355 = (state_11581[(30)]);
var inst_11356 = (state_11581[(33)]);
var inst_11358 = (inst_11356 < inst_11355);
var inst_11359 = inst_11358;
var state_11581__$1 = state_11581;
if(cljs.core.truth_(inst_11359)){
var statearr_11670_12043 = state_11581__$1;
(statearr_11670_12043[(1)] = (12));

} else {
var statearr_11671_12044 = state_11581__$1;
(statearr_11671_12044[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11582 === (18))){
var inst_11368 = (state_11581[(15)]);
var inst_11388 = (state_11581[(14)]);
var inst_11388__$1 = cljs.core.seq.call(null,inst_11368);
var state_11581__$1 = (function (){var statearr_11672 = state_11581;
(statearr_11672[(14)] = inst_11388__$1);

return statearr_11672;
})();
if(inst_11388__$1){
var statearr_11673_12045 = state_11581__$1;
(statearr_11673_12045[(1)] = (20));

} else {
var statearr_11674_12046 = state_11581__$1;
(statearr_11674_12046[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11582 === (52))){
var inst_11328 = (state_11581[(22)]);
var inst_11338 = (state_11581[(7)]);
var inst_11531 = (state_11581[(21)]);
var inst_11335 = (state_11581[(8)]);
var inst_11540 = cljs.core.first.call(null,inst_11531);
var inst_11542 = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(inst_11540);
var inst_11543 = new cljs.core.Keyword(null,"sprite","sprite",172516848).cljs$core$IFn$_invoke$arity$1(inst_11540);
var inst_11544 = polar_object_coords.call(null,inst_11542,inst_11543,x,y,inst_11335,inst_11338);
var inst_11545 = cljs.core.nth.call(null,inst_11544,(0),null);
var inst_11546 = cljs.core.nth.call(null,inst_11544,(1),null);
var inst_11547 = new cljs.core.Keyword(null,"sprite","sprite",172516848).cljs$core$IFn$_invoke$arity$1(inst_11540);
var inst_11548 = farn.sprite.set_pos_BANG_.call(null,inst_11547,inst_11545,inst_11546);
var inst_11549 = new cljs.core.Keyword(null,"shadow","shadow",873231803).cljs$core$IFn$_invoke$arity$1(inst_11540);
var inst_11550 = farn.sprite.set_pos_BANG_.call(null,inst_11549,inst_11545,inst_11546);
var inst_11551 = new cljs.core.Keyword(null,"sprite","sprite",172516848).cljs$core$IFn$_invoke$arity$1(inst_11540);
var inst_11552 = (inst_11328 * farn.core.pickup_bounce_speed);
var inst_11553 = Math.sin.call(null,inst_11552);
var inst_11554 = ((1) + inst_11553);
var inst_11555 = (farn.core.pickup_bounce_height * inst_11554);
var inst_11556 = (farn.core.pickup_vertical_offset + inst_11555);
var inst_11557 = farn.sprite.set_pivot_BANG_.call(null,inst_11551,(0),inst_11556);
var inst_11558 = cljs.core.next.call(null,inst_11531);
var inst_11502 = inst_11558;
var inst_11503 = null;
var inst_11504 = (0);
var inst_11505 = (0);
var state_11581__$1 = (function (){var statearr_11675 = state_11581;
(statearr_11675[(20)] = inst_11502);

(statearr_11675[(47)] = inst_11557);

(statearr_11675[(35)] = inst_11505);

(statearr_11675[(48)] = inst_11548);

(statearr_11675[(49)] = inst_11550);

(statearr_11675[(38)] = inst_11503);

(statearr_11675[(36)] = inst_11504);

return statearr_11675;
})();
var statearr_11676_12047 = state_11581__$1;
(statearr_11676_12047[(2)] = null);

(statearr_11676_12047[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11582 === (42))){
var inst_11477 = (state_11581[(2)]);
var state_11581__$1 = state_11581;
var statearr_11677_12048 = state_11581__$1;
(statearr_11677_12048[(2)] = inst_11477);

(statearr_11677_12048[(1)] = (39));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11582 === (37))){
var inst_11456 = (state_11581[(25)]);
var inst_11458 = cljs.core.chunked_seq_QMARK_.call(null,inst_11456);
var state_11581__$1 = state_11581;
if(inst_11458){
var statearr_11678_12049 = state_11581__$1;
(statearr_11678_12049[(1)] = (40));

} else {
var statearr_11679_12050 = state_11581__$1;
(statearr_11679_12050[(1)] = (41));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11582 === (8))){
var inst_11573 = (state_11581[(2)]);
var state_11581__$1 = (function (){var statearr_11680 = state_11581;
(statearr_11680[(50)] = inst_11573);

return statearr_11680;
})();
var statearr_11681_12051 = state_11581__$1;
(statearr_11681_12051[(2)] = null);

(statearr_11681_12051[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11582 === (49))){
var state_11581__$1 = state_11581;
var statearr_11682_12052 = state_11581__$1;
(statearr_11682_12052[(2)] = null);

(statearr_11682_12052[(1)] = (50));


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
});})(c__6459__auto___11989))
;
return ((function (switch__6444__auto__,c__6459__auto___11989){
return (function() {
var state_machine__6445__auto__ = null;
var state_machine__6445__auto____0 = (function (){
var statearr_11686 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11686[(0)] = state_machine__6445__auto__);

(statearr_11686[(1)] = (1));

return statearr_11686;
});
var state_machine__6445__auto____1 = (function (state_11581){
while(true){
var ret_value__6446__auto__ = (function (){try{while(true){
var result__6447__auto__ = switch__6444__auto__.call(null,state_11581);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6447__auto__;
}
break;
}
}catch (e11687){if((e11687 instanceof Object)){
var ex__6448__auto__ = e11687;
var statearr_11688_12053 = state_11581;
(statearr_11688_12053[(5)] = ex__6448__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11581);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11687;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12054 = state_11581;
state_11581 = G__12054;
continue;
} else {
return ret_value__6446__auto__;
}
break;
}
});
state_machine__6445__auto__ = function(state_11581){
switch(arguments.length){
case 0:
return state_machine__6445__auto____0.call(this);
case 1:
return state_machine__6445__auto____1.call(this,state_11581);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6445__auto____0;
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6445__auto____1;
return state_machine__6445__auto__;
})()
;})(switch__6444__auto__,c__6459__auto___11989))
})();
var state__6461__auto__ = (function (){var statearr_11689 = f__6460__auto__.call(null);
(statearr_11689[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6459__auto___11989);

return statearr_11689;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6461__auto__);
});})(c__6459__auto___11989))
);


var c__6459__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6459__auto__){
return (function (){
var f__6460__auto__ = (function (){var switch__6444__auto__ = ((function (c__6459__auto__){
return (function (state_11879){
var state_val_11880 = (state_11879[(1)]);
if((state_val_11880 === (7))){
var inst_11701 = (state_11879[(7)]);
var inst_11700 = (state_11879[(8)]);
var inst_11703 = (inst_11701 < inst_11700);
var inst_11704 = inst_11703;
var state_11879__$1 = state_11879;
if(cljs.core.truth_(inst_11704)){
var statearr_11881_12055 = state_11879__$1;
(statearr_11881_12055[(1)] = (9));

} else {
var statearr_11882_12056 = state_11879__$1;
(statearr_11882_12056[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11880 === (20))){
var inst_11726 = (state_11879[(9)]);
var inst_11730 = cljs.core.chunk_first.call(null,inst_11726);
var inst_11731 = cljs.core.chunk_rest.call(null,inst_11726);
var inst_11732 = cljs.core.count.call(null,inst_11730);
var inst_11713 = inst_11731;
var inst_11714 = inst_11730;
var inst_11715 = inst_11732;
var inst_11716 = (0);
var state_11879__$1 = (function (){var statearr_11883 = state_11879;
(statearr_11883[(10)] = inst_11713);

(statearr_11883[(11)] = inst_11714);

(statearr_11883[(12)] = inst_11716);

(statearr_11883[(13)] = inst_11715);

return statearr_11883;
})();
var statearr_11884_12057 = state_11879__$1;
(statearr_11884_12057[(2)] = null);

(statearr_11884_12057[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11880 === (27))){
var inst_11754 = (state_11879[(14)]);
var inst_11758 = cljs.core.chunk_first.call(null,inst_11754);
var inst_11759 = cljs.core.chunk_rest.call(null,inst_11754);
var inst_11760 = cljs.core.count.call(null,inst_11758);
var inst_11698 = inst_11759;
var inst_11699 = inst_11758;
var inst_11700 = inst_11760;
var inst_11701 = (0);
var state_11879__$1 = (function (){var statearr_11885 = state_11879;
(statearr_11885[(15)] = inst_11698);

(statearr_11885[(7)] = inst_11701);

(statearr_11885[(16)] = inst_11699);

(statearr_11885[(8)] = inst_11700);

return statearr_11885;
})();
var statearr_11886_12058 = state_11879__$1;
(statearr_11886_12058[(2)] = null);

(statearr_11886_12058[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11880 === (1))){
var state_11879__$1 = state_11879;
var statearr_11887_12059 = state_11879__$1;
(statearr_11887_12059[(2)] = null);

(statearr_11887_12059[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11880 === (24))){
var inst_11754 = (state_11879[(14)]);
var inst_11756 = cljs.core.chunked_seq_QMARK_.call(null,inst_11754);
var state_11879__$1 = state_11879;
if(inst_11756){
var statearr_11888_12060 = state_11879__$1;
(statearr_11888_12060[(1)] = (27));

} else {
var statearr_11889_12061 = state_11879__$1;
(statearr_11889_12061[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11880 === (55))){
var inst_11844 = (state_11879[(17)]);
var inst_11857 = (state_11879[(2)]);
var inst_11858 = cljs.core.next.call(null,inst_11844);
var inst_11828 = inst_11858;
var inst_11829 = null;
var inst_11830 = (0);
var inst_11831 = (0);
var state_11879__$1 = (function (){var statearr_11890 = state_11879;
(statearr_11890[(18)] = inst_11828);

(statearr_11890[(19)] = inst_11829);

(statearr_11890[(20)] = inst_11857);

(statearr_11890[(21)] = inst_11830);

(statearr_11890[(22)] = inst_11831);

return statearr_11890;
})();
var statearr_11891_12062 = state_11879__$1;
(statearr_11891_12062[(2)] = null);

(statearr_11891_12062[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11880 === (39))){
var inst_11783 = (state_11879[(23)]);
var inst_11792 = cljs.core.first.call(null,inst_11783);
var inst_11793 = farn.stars.make.call(null,main_stage,star_tex,shadow_tex,x,y);
var inst_11794 = cljs.core.next.call(null,inst_11783);
var inst_11770 = inst_11794;
var inst_11771 = null;
var inst_11772 = (0);
var inst_11773 = (0);
var state_11879__$1 = (function (){var statearr_11892 = state_11879;
(statearr_11892[(24)] = inst_11770);

(statearr_11892[(25)] = inst_11773);

(statearr_11892[(26)] = inst_11772);

(statearr_11892[(27)] = inst_11792);

(statearr_11892[(28)] = inst_11793);

(statearr_11892[(29)] = inst_11771);

return statearr_11892;
})();
var statearr_11893_12063 = state_11879__$1;
(statearr_11893_12063[(2)] = null);

(statearr_11893_12063[(1)] = (30));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11880 === (46))){
var inst_11844 = (state_11879[(17)]);
var inst_11828 = (state_11879[(18)]);
var inst_11844__$1 = cljs.core.seq.call(null,inst_11828);
var state_11879__$1 = (function (){var statearr_11894 = state_11879;
(statearr_11894[(17)] = inst_11844__$1);

return statearr_11894;
})();
if(inst_11844__$1){
var statearr_11895_12064 = state_11879__$1;
(statearr_11895_12064[(1)] = (49));

} else {
var statearr_11896_12065 = state_11879__$1;
(statearr_11896_12065[(1)] = (50));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11880 === (4))){
var inst_11696 = cljs.core.range.call(null,(10));
var inst_11697 = cljs.core.seq.call(null,inst_11696);
var inst_11698 = inst_11697;
var inst_11699 = null;
var inst_11700 = (0);
var inst_11701 = (0);
var state_11879__$1 = (function (){var statearr_11897 = state_11879;
(statearr_11897[(15)] = inst_11698);

(statearr_11897[(7)] = inst_11701);

(statearr_11897[(16)] = inst_11699);

(statearr_11897[(8)] = inst_11700);

return statearr_11897;
})();
var statearr_11898_12066 = state_11879__$1;
(statearr_11898_12066[(2)] = null);

(statearr_11898_12066[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11880 === (54))){
var inst_11861 = (state_11879[(2)]);
var state_11879__$1 = state_11879;
var statearr_11902_12067 = state_11879__$1;
(statearr_11902_12067[(2)] = inst_11861);

(statearr_11902_12067[(1)] = (51));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11880 === (15))){
var inst_11713 = (state_11879[(10)]);
var inst_11726 = (state_11879[(9)]);
var inst_11726__$1 = cljs.core.seq.call(null,inst_11713);
var state_11879__$1 = (function (){var statearr_11903 = state_11879;
(statearr_11903[(9)] = inst_11726__$1);

return statearr_11903;
})();
if(inst_11726__$1){
var statearr_11904_12068 = state_11879__$1;
(statearr_11904_12068[(1)] = (17));

} else {
var statearr_11905_12069 = state_11879__$1;
(statearr_11905_12069[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11880 === (48))){
var inst_11828 = (state_11879[(18)]);
var inst_11829 = (state_11879[(19)]);
var inst_11830 = (state_11879[(21)]);
var inst_11831 = (state_11879[(22)]);
var inst_11840 = (state_11879[(2)]);
var inst_11841 = (inst_11831 + (1));
var tmp11899 = inst_11828;
var tmp11900 = inst_11829;
var tmp11901 = inst_11830;
var inst_11828__$1 = tmp11899;
var inst_11829__$1 = tmp11900;
var inst_11830__$1 = tmp11901;
var inst_11831__$1 = inst_11841;
var state_11879__$1 = (function (){var statearr_11906 = state_11879;
(statearr_11906[(18)] = inst_11828__$1);

(statearr_11906[(19)] = inst_11829__$1);

(statearr_11906[(21)] = inst_11830__$1);

(statearr_11906[(22)] = inst_11831__$1);

(statearr_11906[(30)] = inst_11840);

return statearr_11906;
})();
var statearr_11907_12070 = state_11879__$1;
(statearr_11907_12070[(2)] = null);

(statearr_11907_12070[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11880 === (50))){
var state_11879__$1 = state_11879;
var statearr_11908_12071 = state_11879__$1;
(statearr_11908_12071[(2)] = null);

(statearr_11908_12071[(1)] = (51));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11880 === (21))){
var inst_11726 = (state_11879[(9)]);
var inst_11735 = cljs.core.first.call(null,inst_11726);
var inst_11736 = farn.stars.make.call(null,main_stage,star_tex,shadow_tex,x,y);
var inst_11737 = cljs.core.next.call(null,inst_11726);
var inst_11713 = inst_11737;
var inst_11714 = null;
var inst_11715 = (0);
var inst_11716 = (0);
var state_11879__$1 = (function (){var statearr_11912 = state_11879;
(statearr_11912[(10)] = inst_11713);

(statearr_11912[(31)] = inst_11735);

(statearr_11912[(32)] = inst_11736);

(statearr_11912[(11)] = inst_11714);

(statearr_11912[(12)] = inst_11716);

(statearr_11912[(13)] = inst_11715);

return statearr_11912;
})();
var statearr_11913_12072 = state_11879__$1;
(statearr_11913_12072[(2)] = null);

(statearr_11913_12072[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11880 === (31))){
var inst_11804 = (state_11879[(2)]);
var inst_11805 = cljs.core.async.timeout.call(null,(430));
var state_11879__$1 = (function (){var statearr_11914 = state_11879;
(statearr_11914[(33)] = inst_11804);

return statearr_11914;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11879__$1,(41),inst_11805);
} else {
if((state_val_11880 === (32))){
var inst_11770 = (state_11879[(24)]);
var inst_11773 = (state_11879[(25)]);
var inst_11772 = (state_11879[(26)]);
var inst_11771 = (state_11879[(29)]);
var inst_11778 = cljs.core._nth.call(null,inst_11771,inst_11773);
var inst_11779 = farn.stars.make.call(null,main_stage,star_tex,shadow_tex,x,y);
var inst_11780 = (inst_11773 + (1));
var tmp11909 = inst_11770;
var tmp11910 = inst_11772;
var tmp11911 = inst_11771;
var inst_11770__$1 = tmp11909;
var inst_11771__$1 = tmp11911;
var inst_11772__$1 = tmp11910;
var inst_11773__$1 = inst_11780;
var state_11879__$1 = (function (){var statearr_11915 = state_11879;
(statearr_11915[(24)] = inst_11770__$1);

(statearr_11915[(25)] = inst_11773__$1);

(statearr_11915[(26)] = inst_11772__$1);

(statearr_11915[(34)] = inst_11779);

(statearr_11915[(35)] = inst_11778);

(statearr_11915[(29)] = inst_11771__$1);

return statearr_11915;
})();
var statearr_11916_12073 = state_11879__$1;
(statearr_11916_12073[(2)] = null);

(statearr_11916_12073[(1)] = (30));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11880 === (40))){
var inst_11797 = (state_11879[(2)]);
var state_11879__$1 = state_11879;
var statearr_11917_12074 = state_11879__$1;
(statearr_11917_12074[(2)] = inst_11797);

(statearr_11917_12074[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11880 === (56))){
var inst_11871 = (state_11879[(2)]);
var state_11879__$1 = (function (){var statearr_11918 = state_11879;
(statearr_11918[(36)] = inst_11871);

return statearr_11918;
})();
var statearr_11919_12075 = state_11879__$1;
(statearr_11919_12075[(2)] = null);

(statearr_11919_12075[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11880 === (33))){
var inst_11770 = (state_11879[(24)]);
var inst_11783 = (state_11879[(23)]);
var inst_11783__$1 = cljs.core.seq.call(null,inst_11770);
var state_11879__$1 = (function (){var statearr_11920 = state_11879;
(statearr_11920[(23)] = inst_11783__$1);

return statearr_11920;
})();
if(inst_11783__$1){
var statearr_11921_12076 = state_11879__$1;
(statearr_11921_12076[(1)] = (35));

} else {
var statearr_11922_12077 = state_11879__$1;
(statearr_11922_12077[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11880 === (13))){
var inst_11747 = (state_11879[(2)]);
var inst_11748 = cljs.core.async.timeout.call(null,(430));
var state_11879__$1 = (function (){var statearr_11923 = state_11879;
(statearr_11923[(37)] = inst_11747);

return statearr_11923;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11879__$1,(23),inst_11748);
} else {
if((state_val_11880 === (22))){
var inst_11740 = (state_11879[(2)]);
var state_11879__$1 = state_11879;
var statearr_11924_12078 = state_11879__$1;
(statearr_11924_12078[(2)] = inst_11740);

(statearr_11924_12078[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11880 === (36))){
var state_11879__$1 = state_11879;
var statearr_11925_12079 = state_11879__$1;
(statearr_11925_12079[(2)] = null);

(statearr_11925_12079[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11880 === (41))){
var inst_11754 = (state_11879[(14)]);
var inst_11807 = (state_11879[(2)]);
var inst_11808 = cljs.core.next.call(null,inst_11754);
var inst_11698 = inst_11808;
var inst_11699 = null;
var inst_11700 = (0);
var inst_11701 = (0);
var state_11879__$1 = (function (){var statearr_11926 = state_11879;
(statearr_11926[(15)] = inst_11698);

(statearr_11926[(7)] = inst_11701);

(statearr_11926[(16)] = inst_11699);

(statearr_11926[(8)] = inst_11700);

(statearr_11926[(38)] = inst_11807);

return statearr_11926;
})();
var statearr_11927_12080 = state_11879__$1;
(statearr_11927_12080[(2)] = null);

(statearr_11927_12080[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11880 === (43))){
var inst_11830 = (state_11879[(21)]);
var inst_11831 = (state_11879[(22)]);
var inst_11833 = (inst_11831 < inst_11830);
var inst_11834 = inst_11833;
var state_11879__$1 = state_11879;
if(cljs.core.truth_(inst_11834)){
var statearr_11928_12081 = state_11879__$1;
(statearr_11928_12081[(1)] = (45));

} else {
var statearr_11929_12082 = state_11879__$1;
(statearr_11929_12082[(1)] = (46));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11880 === (29))){
var inst_11811 = (state_11879[(2)]);
var state_11879__$1 = state_11879;
var statearr_11930_12083 = state_11879__$1;
(statearr_11930_12083[(2)] = inst_11811);

(statearr_11930_12083[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11880 === (44))){
var inst_11868 = (state_11879[(2)]);
var inst_11869 = cljs.core.async.timeout.call(null,(3000));
var state_11879__$1 = (function (){var statearr_11931 = state_11879;
(statearr_11931[(39)] = inst_11868);

return statearr_11931;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11879__$1,(56),inst_11869);
} else {
if((state_val_11880 === (6))){
var inst_11875 = (state_11879[(2)]);
var state_11879__$1 = state_11879;
var statearr_11932_12084 = state_11879__$1;
(statearr_11932_12084[(2)] = inst_11875);

(statearr_11932_12084[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11880 === (28))){
var inst_11754 = (state_11879[(14)]);
var inst_11763 = cljs.core.first.call(null,inst_11754);
var inst_11768 = cljs.core.range.call(null,(10));
var inst_11769 = cljs.core.seq.call(null,inst_11768);
var inst_11770 = inst_11769;
var inst_11771 = null;
var inst_11772 = (0);
var inst_11773 = (0);
var state_11879__$1 = (function (){var statearr_11933 = state_11879;
(statearr_11933[(24)] = inst_11770);

(statearr_11933[(25)] = inst_11773);

(statearr_11933[(26)] = inst_11772);

(statearr_11933[(40)] = inst_11763);

(statearr_11933[(29)] = inst_11771);

return statearr_11933;
})();
var statearr_11934_12085 = state_11879__$1;
(statearr_11934_12085[(2)] = null);

(statearr_11934_12085[(1)] = (30));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11880 === (51))){
var inst_11864 = (state_11879[(2)]);
var state_11879__$1 = state_11879;
var statearr_11935_12086 = state_11879__$1;
(statearr_11935_12086[(2)] = inst_11864);

(statearr_11935_12086[(1)] = (47));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11880 === (25))){
var state_11879__$1 = state_11879;
var statearr_11936_12087 = state_11879__$1;
(statearr_11936_12087[(2)] = null);

(statearr_11936_12087[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11880 === (34))){
var inst_11802 = (state_11879[(2)]);
var state_11879__$1 = state_11879;
var statearr_11937_12088 = state_11879__$1;
(statearr_11937_12088[(2)] = inst_11802);

(statearr_11937_12088[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11880 === (17))){
var inst_11726 = (state_11879[(9)]);
var inst_11728 = cljs.core.chunked_seq_QMARK_.call(null,inst_11726);
var state_11879__$1 = state_11879;
if(inst_11728){
var statearr_11938_12089 = state_11879__$1;
(statearr_11938_12089[(1)] = (20));

} else {
var statearr_11939_12090 = state_11879__$1;
(statearr_11939_12090[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11880 === (3))){
var inst_11877 = (state_11879[(2)]);
var state_11879__$1 = state_11879;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11879__$1,inst_11877);
} else {
if((state_val_11880 === (12))){
var inst_11716 = (state_11879[(12)]);
var inst_11715 = (state_11879[(13)]);
var inst_11718 = (inst_11716 < inst_11715);
var inst_11719 = inst_11718;
var state_11879__$1 = state_11879;
if(cljs.core.truth_(inst_11719)){
var statearr_11943_12091 = state_11879__$1;
(statearr_11943_12091[(1)] = (14));

} else {
var statearr_11944_12092 = state_11879__$1;
(statearr_11944_12092[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11880 === (2))){
var state_11879__$1 = state_11879;
var statearr_11945_12093 = state_11879__$1;
(statearr_11945_12093[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11880 === (23))){
var inst_11698 = (state_11879[(15)]);
var inst_11701 = (state_11879[(7)]);
var inst_11699 = (state_11879[(16)]);
var inst_11700 = (state_11879[(8)]);
var inst_11750 = (state_11879[(2)]);
var inst_11751 = (inst_11701 + (1));
var tmp11940 = inst_11698;
var tmp11941 = inst_11699;
var tmp11942 = inst_11700;
var inst_11698__$1 = tmp11940;
var inst_11699__$1 = tmp11941;
var inst_11700__$1 = tmp11942;
var inst_11701__$1 = inst_11751;
var state_11879__$1 = (function (){var statearr_11947 = state_11879;
(statearr_11947[(15)] = inst_11698__$1);

(statearr_11947[(7)] = inst_11701__$1);

(statearr_11947[(16)] = inst_11699__$1);

(statearr_11947[(41)] = inst_11750);

(statearr_11947[(8)] = inst_11700__$1);

return statearr_11947;
})();
var statearr_11948_12094 = state_11879__$1;
(statearr_11948_12094[(2)] = null);

(statearr_11948_12094[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11880 === (47))){
var inst_11866 = (state_11879[(2)]);
var state_11879__$1 = state_11879;
var statearr_11949_12095 = state_11879__$1;
(statearr_11949_12095[(2)] = inst_11866);

(statearr_11949_12095[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11880 === (35))){
var inst_11783 = (state_11879[(23)]);
var inst_11785 = cljs.core.chunked_seq_QMARK_.call(null,inst_11783);
var state_11879__$1 = state_11879;
if(inst_11785){
var statearr_11950_12096 = state_11879__$1;
(statearr_11950_12096[(1)] = (38));

} else {
var statearr_11951_12097 = state_11879__$1;
(statearr_11951_12097[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11880 === (19))){
var inst_11743 = (state_11879[(2)]);
var state_11879__$1 = state_11879;
var statearr_11952_12098 = state_11879__$1;
(statearr_11952_12098[(2)] = inst_11743);

(statearr_11952_12098[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11880 === (11))){
var inst_11816 = (state_11879[(2)]);
var state_11879__$1 = state_11879;
var statearr_11953_12099 = state_11879__$1;
(statearr_11953_12099[(2)] = inst_11816);

(statearr_11953_12099[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11880 === (9))){
var inst_11701 = (state_11879[(7)]);
var inst_11699 = (state_11879[(16)]);
var inst_11706 = cljs.core._nth.call(null,inst_11699,inst_11701);
var inst_11711 = cljs.core.range.call(null,(10));
var inst_11712 = cljs.core.seq.call(null,inst_11711);
var inst_11713 = inst_11712;
var inst_11714 = null;
var inst_11715 = (0);
var inst_11716 = (0);
var state_11879__$1 = (function (){var statearr_11957 = state_11879;
(statearr_11957[(10)] = inst_11713);

(statearr_11957[(42)] = inst_11706);

(statearr_11957[(11)] = inst_11714);

(statearr_11957[(12)] = inst_11716);

(statearr_11957[(13)] = inst_11715);

return statearr_11957;
})();
var statearr_11958_12100 = state_11879__$1;
(statearr_11958_12100[(2)] = null);

(statearr_11958_12100[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11880 === (5))){
var state_11879__$1 = state_11879;
var statearr_11959_12101 = state_11879__$1;
(statearr_11959_12101[(2)] = null);

(statearr_11959_12101[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11880 === (14))){
var inst_11713 = (state_11879[(10)]);
var inst_11714 = (state_11879[(11)]);
var inst_11716 = (state_11879[(12)]);
var inst_11715 = (state_11879[(13)]);
var inst_11721 = cljs.core._nth.call(null,inst_11714,inst_11716);
var inst_11722 = farn.stars.make.call(null,main_stage,star_tex,shadow_tex,x,y);
var inst_11723 = (inst_11716 + (1));
var tmp11954 = inst_11713;
var tmp11955 = inst_11714;
var tmp11956 = inst_11715;
var inst_11713__$1 = tmp11954;
var inst_11714__$1 = tmp11955;
var inst_11715__$1 = tmp11956;
var inst_11716__$1 = inst_11723;
var state_11879__$1 = (function (){var statearr_11960 = state_11879;
(statearr_11960[(10)] = inst_11713__$1);

(statearr_11960[(43)] = inst_11722);

(statearr_11960[(11)] = inst_11714__$1);

(statearr_11960[(44)] = inst_11721);

(statearr_11960[(12)] = inst_11716__$1);

(statearr_11960[(13)] = inst_11715__$1);

return statearr_11960;
})();
var statearr_11961_12102 = state_11879__$1;
(statearr_11961_12102[(2)] = null);

(statearr_11961_12102[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11880 === (45))){
var inst_11829 = (state_11879[(19)]);
var inst_11831 = (state_11879[(22)]);
var inst_11836 = cljs.core._nth.call(null,inst_11829,inst_11831);
var inst_11837 = farn.stars.make.call(null,main_stage,star_tex,shadow_tex,x,y);
var inst_11838 = cljs.core.async.timeout.call(null,(100));
var state_11879__$1 = (function (){var statearr_11962 = state_11879;
(statearr_11962[(45)] = inst_11837);

(statearr_11962[(46)] = inst_11836);

return statearr_11962;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11879__$1,(48),inst_11838);
} else {
if((state_val_11880 === (53))){
var inst_11844 = (state_11879[(17)]);
var inst_11853 = cljs.core.first.call(null,inst_11844);
var inst_11854 = farn.stars.make.call(null,main_stage,star_tex,shadow_tex,x,y);
var inst_11855 = cljs.core.async.timeout.call(null,(100));
var state_11879__$1 = (function (){var statearr_11963 = state_11879;
(statearr_11963[(47)] = inst_11853);

(statearr_11963[(48)] = inst_11854);

return statearr_11963;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11879__$1,(55),inst_11855);
} else {
if((state_val_11880 === (26))){
var inst_11814 = (state_11879[(2)]);
var state_11879__$1 = state_11879;
var statearr_11964_12103 = state_11879__$1;
(statearr_11964_12103[(2)] = inst_11814);

(statearr_11964_12103[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11880 === (16))){
var inst_11745 = (state_11879[(2)]);
var state_11879__$1 = state_11879;
var statearr_11965_12104 = state_11879__$1;
(statearr_11965_12104[(2)] = inst_11745);

(statearr_11965_12104[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11880 === (38))){
var inst_11783 = (state_11879[(23)]);
var inst_11787 = cljs.core.chunk_first.call(null,inst_11783);
var inst_11788 = cljs.core.chunk_rest.call(null,inst_11783);
var inst_11789 = cljs.core.count.call(null,inst_11787);
var inst_11770 = inst_11788;
var inst_11771 = inst_11787;
var inst_11772 = inst_11789;
var inst_11773 = (0);
var state_11879__$1 = (function (){var statearr_11966 = state_11879;
(statearr_11966[(24)] = inst_11770);

(statearr_11966[(25)] = inst_11773);

(statearr_11966[(26)] = inst_11772);

(statearr_11966[(29)] = inst_11771);

return statearr_11966;
})();
var statearr_11967_12105 = state_11879__$1;
(statearr_11967_12105[(2)] = null);

(statearr_11967_12105[(1)] = (30));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11880 === (30))){
var inst_11773 = (state_11879[(25)]);
var inst_11772 = (state_11879[(26)]);
var inst_11775 = (inst_11773 < inst_11772);
var inst_11776 = inst_11775;
var state_11879__$1 = state_11879;
if(cljs.core.truth_(inst_11776)){
var statearr_11968_12106 = state_11879__$1;
(statearr_11968_12106[(1)] = (32));

} else {
var statearr_11969_12107 = state_11879__$1;
(statearr_11969_12107[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11880 === (10))){
var inst_11698 = (state_11879[(15)]);
var inst_11754 = (state_11879[(14)]);
var inst_11754__$1 = cljs.core.seq.call(null,inst_11698);
var state_11879__$1 = (function (){var statearr_11970 = state_11879;
(statearr_11970[(14)] = inst_11754__$1);

return statearr_11970;
})();
if(inst_11754__$1){
var statearr_11971_12108 = state_11879__$1;
(statearr_11971_12108[(1)] = (24));

} else {
var statearr_11972_12109 = state_11879__$1;
(statearr_11972_12109[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11880 === (18))){
var state_11879__$1 = state_11879;
var statearr_11973_12110 = state_11879__$1;
(statearr_11973_12110[(2)] = null);

(statearr_11973_12110[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11880 === (52))){
var inst_11844 = (state_11879[(17)]);
var inst_11848 = cljs.core.chunk_first.call(null,inst_11844);
var inst_11849 = cljs.core.chunk_rest.call(null,inst_11844);
var inst_11850 = cljs.core.count.call(null,inst_11848);
var inst_11828 = inst_11849;
var inst_11829 = inst_11848;
var inst_11830 = inst_11850;
var inst_11831 = (0);
var state_11879__$1 = (function (){var statearr_11974 = state_11879;
(statearr_11974[(18)] = inst_11828);

(statearr_11974[(19)] = inst_11829);

(statearr_11974[(21)] = inst_11830);

(statearr_11974[(22)] = inst_11831);

return statearr_11974;
})();
var statearr_11975_12111 = state_11879__$1;
(statearr_11975_12111[(2)] = null);

(statearr_11975_12111[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11880 === (42))){
var inst_11821 = (state_11879[(2)]);
var inst_11826 = cljs.core.range.call(null,(100));
var inst_11827 = cljs.core.seq.call(null,inst_11826);
var inst_11828 = inst_11827;
var inst_11829 = null;
var inst_11830 = (0);
var inst_11831 = (0);
var state_11879__$1 = (function (){var statearr_11976 = state_11879;
(statearr_11976[(18)] = inst_11828);

(statearr_11976[(19)] = inst_11829);

(statearr_11976[(21)] = inst_11830);

(statearr_11976[(22)] = inst_11831);

(statearr_11976[(49)] = inst_11821);

return statearr_11976;
})();
var statearr_11977_12112 = state_11879__$1;
(statearr_11977_12112[(2)] = null);

(statearr_11977_12112[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11880 === (37))){
var inst_11800 = (state_11879[(2)]);
var state_11879__$1 = state_11879;
var statearr_11978_12113 = state_11879__$1;
(statearr_11978_12113[(2)] = inst_11800);

(statearr_11978_12113[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11880 === (8))){
var inst_11818 = (state_11879[(2)]);
var inst_11819 = cljs.core.async.timeout.call(null,(3000));
var state_11879__$1 = (function (){var statearr_11979 = state_11879;
(statearr_11979[(50)] = inst_11818);

return statearr_11979;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11879__$1,(42),inst_11819);
} else {
if((state_val_11880 === (49))){
var inst_11844 = (state_11879[(17)]);
var inst_11846 = cljs.core.chunked_seq_QMARK_.call(null,inst_11844);
var state_11879__$1 = state_11879;
if(inst_11846){
var statearr_11980_12114 = state_11879__$1;
(statearr_11980_12114[(1)] = (52));

} else {
var statearr_11981_12115 = state_11879__$1;
(statearr_11981_12115[(1)] = (53));

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
var statearr_11985 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11985[(0)] = state_machine__6445__auto__);

(statearr_11985[(1)] = (1));

return statearr_11985;
});
var state_machine__6445__auto____1 = (function (state_11879){
while(true){
var ret_value__6446__auto__ = (function (){try{while(true){
var result__6447__auto__ = switch__6444__auto__.call(null,state_11879);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6447__auto__;
}
break;
}
}catch (e11986){if((e11986 instanceof Object)){
var ex__6448__auto__ = e11986;
var statearr_11987_12116 = state_11879;
(statearr_11987_12116[(5)] = ex__6448__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11879);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11986;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12117 = state_11879;
state_11879 = G__12117;
continue;
} else {
return ret_value__6446__auto__;
}
break;
}
});
state_machine__6445__auto__ = function(state_11879){
switch(arguments.length){
case 0:
return state_machine__6445__auto____0.call(this);
case 1:
return state_machine__6445__auto____1.call(this,state_11879);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6445__auto____0;
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6445__auto____1;
return state_machine__6445__auto__;
})()
;})(switch__6444__auto__,c__6459__auto__))
})();
var state__6461__auto__ = (function (){var statearr_11988 = f__6460__auto__.call(null);
(statearr_11988[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6459__auto__);

return statearr_11988;
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
var load__delegate = function (s,urls,p__12118){
var map__12154 = p__12118;
var map__12154__$1 = ((cljs.core.seq_QMARK_.call(null,map__12154))?cljs.core.apply.call(null,cljs.core.hash_map,map__12154):map__12154);
var options = map__12154__$1;
var fade_out = cljs.core.get.call(null,map__12154__$1,new cljs.core.Keyword(null,"fade-out","fade-out",-1200160760),0.5);
var fade_in = cljs.core.get.call(null,map__12154__$1,new cljs.core.Keyword(null,"fade-in","fade-in",999370239),0.5);
var c = cljs.core.async.chan.call(null);
var b = farn.gfx.add_prog_bar.call(null,s,options);
var c__6459__auto___12189 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6459__auto___12189,c,b,map__12154,map__12154__$1,options,fade_out,fade_in){
return (function (){
var f__6460__auto__ = (function (){var switch__6444__auto__ = ((function (c__6459__auto___12189,c,b,map__12154,map__12154__$1,options,fade_out,fade_in){
return (function (state_12175){
var state_val_12176 = (state_12175[(1)]);
if((state_val_12176 === (6))){
var inst_12171 = (state_12175[(2)]);
var inst_12172 = s.removeChild(b);
var inst_12173 = cljs.core.async.close_BANG_.call(null,c);
var state_12175__$1 = (function (){var statearr_12177 = state_12175;
(statearr_12177[(7)] = inst_12172);

(statearr_12177[(8)] = inst_12171);

return statearr_12177;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12175__$1,inst_12173);
} else {
if((state_val_12176 === (5))){
var inst_12168 = (state_12175[(2)]);
var inst_12169 = farn.gfx.fadeout.call(null,b,new cljs.core.Keyword(null,"duration","duration",1444101068),fade_out);
var state_12175__$1 = (function (){var statearr_12178 = state_12175;
(statearr_12178[(9)] = inst_12168);

return statearr_12178;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12175__$1,(6),inst_12169);
} else {
if((state_val_12176 === (4))){
var inst_12165 = (state_12175[(2)]);
var inst_12166 = cljs.core.async.timeout.call(null,(300));
var state_12175__$1 = (function (){var statearr_12179 = state_12175;
(statearr_12179[(10)] = inst_12165);

return statearr_12179;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12175__$1,(5),inst_12166);
} else {
if((state_val_12176 === (3))){
var inst_12163 = (state_12175[(2)]);
var state_12175__$1 = (function (){var statearr_12180 = state_12175;
(statearr_12180[(11)] = inst_12163);

return statearr_12180;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12175__$1,(4),c,true);
} else {
if((state_val_12176 === (2))){
var inst_12157 = (state_12175[(2)]);
var inst_12158 = [cljs.core.str(options)].join('');
var inst_12159 = farn.utils.log.call(null,"load",inst_12158);
var inst_12160 = cljs.core.partial.call(null,farn.gfx.load_urls,urls,b);
var inst_12161 = cljs.core.apply.call(null,inst_12160,options);
var state_12175__$1 = (function (){var statearr_12181 = state_12175;
(statearr_12181[(12)] = inst_12157);

(statearr_12181[(13)] = inst_12159);

return statearr_12181;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12175__$1,(3),inst_12161);
} else {
if((state_val_12176 === (1))){
var inst_12155 = farn.gfx.fadein.call(null,b,new cljs.core.Keyword(null,"duration","duration",1444101068),fade_in);
var state_12175__$1 = state_12175;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12175__$1,(2),inst_12155);
} else {
return null;
}
}
}
}
}
}
});})(c__6459__auto___12189,c,b,map__12154,map__12154__$1,options,fade_out,fade_in))
;
return ((function (switch__6444__auto__,c__6459__auto___12189,c,b,map__12154,map__12154__$1,options,fade_out,fade_in){
return (function() {
var state_machine__6445__auto__ = null;
var state_machine__6445__auto____0 = (function (){
var statearr_12185 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12185[(0)] = state_machine__6445__auto__);

(statearr_12185[(1)] = (1));

return statearr_12185;
});
var state_machine__6445__auto____1 = (function (state_12175){
while(true){
var ret_value__6446__auto__ = (function (){try{while(true){
var result__6447__auto__ = switch__6444__auto__.call(null,state_12175);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6447__auto__;
}
break;
}
}catch (e12186){if((e12186 instanceof Object)){
var ex__6448__auto__ = e12186;
var statearr_12187_12190 = state_12175;
(statearr_12187_12190[(5)] = ex__6448__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12175);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12186;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12191 = state_12175;
state_12175 = G__12191;
continue;
} else {
return ret_value__6446__auto__;
}
break;
}
});
state_machine__6445__auto__ = function(state_12175){
switch(arguments.length){
case 0:
return state_machine__6445__auto____0.call(this);
case 1:
return state_machine__6445__auto____1.call(this,state_12175);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6445__auto____0;
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6445__auto____1;
return state_machine__6445__auto__;
})()
;})(switch__6444__auto__,c__6459__auto___12189,c,b,map__12154,map__12154__$1,options,fade_out,fade_in))
})();
var state__6461__auto__ = (function (){var statearr_12188 = f__6460__auto__.call(null);
(statearr_12188[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6459__auto___12189);

return statearr_12188;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6461__auto__);
});})(c__6459__auto___12189,c,b,map__12154,map__12154__$1,options,fade_out,fade_in))
);


return c;
};
var load = function (s,urls,var_args){
var p__12118 = null;
if (arguments.length > 2) {
  p__12118 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return load__delegate.call(this,s,urls,p__12118);};
load.cljs$lang$maxFixedArity = 2;
load.cljs$lang$applyTo = (function (arglist__12192){
var s = cljs.core.first(arglist__12192);
arglist__12192 = cljs.core.next(arglist__12192);
var urls = cljs.core.first(arglist__12192);
var p__12118 = cljs.core.rest(arglist__12192);
return load__delegate(s,urls,p__12118);
});
load.cljs$core$IFn$_invoke$arity$variadic = load__delegate;
return load;
})()
;
farn.core.world = farn.gfx.init.call(null,new cljs.core.Keyword(null,"background","background",-863952629),farn.core.grass_green,new cljs.core.Keyword(null,"expand","expand",595248157),true,new cljs.core.Keyword(null,"engine","engine",1459054265),new cljs.core.Keyword(null,"auto","auto",-566279492),new cljs.core.Keyword(null,"canvas","canvas",-1798817489),document.getElementById("game"));
farn.core.main_stage = new cljs.core.Keyword(null,"world","world",-418292623).cljs$core$IFn$_invoke$arity$1(farn.core.world);
farn.core.ui_stage = new cljs.core.Keyword(null,"ui","ui",-469653645).cljs$core$IFn$_invoke$arity$1(farn.core.world);
var c__6459__auto___12224 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6459__auto___12224){
return (function (){
var f__6460__auto__ = (function (){var switch__6444__auto__ = ((function (c__6459__auto___12224){
return (function (state_12208){
var state_val_12209 = (state_12208[(1)]);
if((state_val_12209 === (7))){
var inst_12197 = (state_12208[(2)]);
var inst_12198 = new cljs.core.Keyword(null,"renderer","renderer",336841071).cljs$core$IFn$_invoke$arity$1(farn.core.world);
var inst_12199 = new cljs.core.Keyword(null,"stage","stage",1843544772).cljs$core$IFn$_invoke$arity$1(farn.core.world);
var inst_12200 = inst_12198.render(inst_12199);
var state_12208__$1 = (function (){var statearr_12210 = state_12208;
(statearr_12210[(7)] = inst_12200);

(statearr_12210[(8)] = inst_12197);

return statearr_12210;
})();
var statearr_12211_12225 = state_12208__$1;
(statearr_12211_12225[(2)] = null);

(statearr_12211_12225[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12209 === (6))){
var inst_12204 = (state_12208[(2)]);
var state_12208__$1 = state_12208;
var statearr_12212_12226 = state_12208__$1;
(statearr_12212_12226[(2)] = inst_12204);

(statearr_12212_12226[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12209 === (5))){
var state_12208__$1 = state_12208;
var statearr_12213_12227 = state_12208__$1;
(statearr_12213_12227[(2)] = null);

(statearr_12213_12227[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12209 === (4))){
var inst_12195 = farn.events.next_frame.call(null);
var state_12208__$1 = state_12208;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12208__$1,(7),inst_12195);
} else {
if((state_val_12209 === (3))){
var inst_12206 = (state_12208[(2)]);
var state_12208__$1 = state_12208;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12208__$1,inst_12206);
} else {
if((state_val_12209 === (2))){
var state_12208__$1 = state_12208;
var statearr_12214_12228 = state_12208__$1;
(statearr_12214_12228[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12209 === (1))){
var state_12208__$1 = state_12208;
var statearr_12216_12229 = state_12208__$1;
(statearr_12216_12229[(2)] = null);

(statearr_12216_12229[(1)] = (2));


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
});})(c__6459__auto___12224))
;
return ((function (switch__6444__auto__,c__6459__auto___12224){
return (function() {
var state_machine__6445__auto__ = null;
var state_machine__6445__auto____0 = (function (){
var statearr_12220 = [null,null,null,null,null,null,null,null,null];
(statearr_12220[(0)] = state_machine__6445__auto__);

(statearr_12220[(1)] = (1));

return statearr_12220;
});
var state_machine__6445__auto____1 = (function (state_12208){
while(true){
var ret_value__6446__auto__ = (function (){try{while(true){
var result__6447__auto__ = switch__6444__auto__.call(null,state_12208);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6447__auto__;
}
break;
}
}catch (e12221){if((e12221 instanceof Object)){
var ex__6448__auto__ = e12221;
var statearr_12222_12230 = state_12208;
(statearr_12222_12230[(5)] = ex__6448__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12208);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12221;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12231 = state_12208;
state_12208 = G__12231;
continue;
} else {
return ret_value__6446__auto__;
}
break;
}
});
state_machine__6445__auto__ = function(state_12208){
switch(arguments.length){
case 0:
return state_machine__6445__auto____0.call(this);
case 1:
return state_machine__6445__auto____1.call(this,state_12208);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6445__auto____0;
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6445__auto____1;
return state_machine__6445__auto__;
})()
;})(switch__6444__auto__,c__6459__auto___12224))
})();
var state__6461__auto__ = (function (){var statearr_12223 = f__6460__auto__.call(null);
(statearr_12223[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6459__auto___12224);

return statearr_12223;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6461__auto__);
});})(c__6459__auto___12224))
);

/**
* @param {...*} var_args
*/
farn.core.make_sprite = (function() { 
var make_sprite__delegate = function (tex,p__12232){
var map__12234 = p__12232;
var map__12234__$1 = ((cljs.core.seq_QMARK_.call(null,map__12234))?cljs.core.apply.call(null,cljs.core.hash_map,map__12234):map__12234);
var anchor_y = cljs.core.get.call(null,map__12234__$1,new cljs.core.Keyword(null,"anchor-y","anchor-y",-1366716999),(1));
var anchor_x = cljs.core.get.call(null,map__12234__$1,new cljs.core.Keyword(null,"anchor-x","anchor-x",-1597588837),0.5);
var s = farn.gfx.make_sprite.call(null,tex);
farn.sprite.set_anchor_BANG_.call(null,s,anchor_x,anchor_y);

return s;
};
var make_sprite = function (tex,var_args){
var p__12232 = null;
if (arguments.length > 1) {
  p__12232 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return make_sprite__delegate.call(this,tex,p__12232);};
make_sprite.cljs$lang$maxFixedArity = 1;
make_sprite.cljs$lang$applyTo = (function (arglist__12235){
var tex = cljs.core.first(arglist__12235);
var p__12232 = cljs.core.rest(arglist__12235);
return make_sprite__delegate(tex,p__12232);
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

var c_13742 = farn.map.perlin_map_generator.call(null);
var c__6459__auto___13743 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6459__auto___13743,c_13742){
return (function (){
var f__6460__auto__ = (function (){var switch__6444__auto__ = ((function (c__6459__auto___13743,c_13742){
return (function (state_12246){
var state_val_12247 = (state_12246[(1)]);
if((state_val_12247 === (2))){
var inst_12242 = (state_12246[(2)]);
var inst_12243 = inst_12242.length;
var inst_12244 = cljs.core.println.call(null,"Perlin map done:",inst_12243);
var state_12246__$1 = state_12246;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12246__$1,inst_12244);
} else {
if((state_val_12247 === (1))){
var state_12246__$1 = state_12246;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12246__$1,(2),c_13742);
} else {
return null;
}
}
});})(c__6459__auto___13743,c_13742))
;
return ((function (switch__6444__auto__,c__6459__auto___13743,c_13742){
return (function() {
var state_machine__6445__auto__ = null;
var state_machine__6445__auto____0 = (function (){
var statearr_12251 = [null,null,null,null,null,null,null];
(statearr_12251[(0)] = state_machine__6445__auto__);

(statearr_12251[(1)] = (1));

return statearr_12251;
});
var state_machine__6445__auto____1 = (function (state_12246){
while(true){
var ret_value__6446__auto__ = (function (){try{while(true){
var result__6447__auto__ = switch__6444__auto__.call(null,state_12246);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6447__auto__;
}
break;
}
}catch (e12252){if((e12252 instanceof Object)){
var ex__6448__auto__ = e12252;
var statearr_12253_13744 = state_12246;
(statearr_12253_13744[(5)] = ex__6448__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12246);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12252;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13745 = state_12246;
state_12246 = G__13745;
continue;
} else {
return ret_value__6446__auto__;
}
break;
}
});
state_machine__6445__auto__ = function(state_12246){
switch(arguments.length){
case 0:
return state_machine__6445__auto____0.call(this);
case 1:
return state_machine__6445__auto____1.call(this,state_12246);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6445__auto____0;
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6445__auto____1;
return state_machine__6445__auto__;
})()
;})(switch__6444__auto__,c__6459__auto___13743,c_13742))
})();
var state__6461__auto__ = (function (){var statearr_12254 = f__6460__auto__.call(null);
(statearr_12254[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6459__auto___13743);

return statearr_12254;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6461__auto__);
});})(c__6459__auto___13743,c_13742))
);

} else {
var c__6459__auto___13746 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6459__auto___13746){
return (function (){
var f__6460__auto__ = (function (){var switch__6444__auto__ = ((function (c__6459__auto___13746){
return (function (state_13312){
var state_val_13313 = (state_13312[(1)]);
if((state_val_13313 === (121))){
var inst_13244 = (state_13312[(2)]);
var state_13312__$1 = state_13312;
var statearr_13314_13747 = state_13312__$1;
(statearr_13314_13747[(2)] = inst_13244);

(statearr_13314_13747[(1)] = (118));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13313 === (65))){
var state_13312__$1 = state_13312;
var statearr_13315_13748 = state_13312__$1;
(statearr_13315_13748[(2)] = null);

(statearr_13315_13748[(1)] = (66));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13313 === (70))){
var state_13312__$1 = state_13312;
var statearr_13316_13749 = state_13312__$1;
(statearr_13316_13749[(2)] = null);

(statearr_13316_13749[(1)] = (71));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13313 === (62))){
var inst_12769 = (state_13312[(7)]);
var state_13312__$1 = state_13312;
var statearr_13317_13750 = state_13312__$1;
(statearr_13317_13750[(2)] = inst_12769);

(statearr_13317_13750[(1)] = (63));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13313 === (74))){
var inst_12475 = (state_13312[(8)]);
var inst_13012 = (state_13312[(9)]);
var inst_13010 = (state_13312[(10)]);
var inst_13017 = cljs.core._nth.call(null,inst_13010,inst_13012);
var inst_13022 = inst_12475.call(null,inst_13017);
var inst_13023 = cljs.core.seq.call(null,inst_13022);
var inst_13024 = inst_13023;
var inst_13025 = null;
var inst_13026 = (0);
var inst_13027 = (0);
var state_13312__$1 = (function (){var statearr_13318 = state_13312;
(statearr_13318[(11)] = inst_13025);

(statearr_13318[(12)] = inst_13026);

(statearr_13318[(13)] = inst_13027);

(statearr_13318[(14)] = inst_13024);

return statearr_13318;
})();
var statearr_13319_13751 = state_13312__$1;
(statearr_13319_13751[(2)] = null);

(statearr_13319_13751[(1)] = (77));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13313 === (110))){
var inst_13187 = (state_13312[(15)]);
var inst_13189 = cljs.core.chunked_seq_QMARK_.call(null,inst_13187);
var state_13312__$1 = state_13312;
if(inst_13189){
var statearr_13320_13752 = state_13312__$1;
(statearr_13320_13752[(1)] = (113));

} else {
var statearr_13321_13753 = state_13312__$1;
(statearr_13321_13753[(1)] = (114));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13313 === (130))){
var state_13312__$1 = state_13312;
var statearr_13322_13754 = state_13312__$1;
(statearr_13322_13754[(1)] = (132));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13313 === (128))){
var inst_13001 = (state_13312[(16)]);
var inst_13273 = (state_13312[(2)]);
var inst_13274 = ((0) < inst_13001);
var inst_13275 = (inst_13001 < (5));
var inst_13276 = (inst_13274) && (inst_13275);
var state_13312__$1 = (function (){var statearr_13324 = state_13312;
(statearr_13324[(17)] = inst_13273);

return statearr_13324;
})();
if(cljs.core.truth_(inst_13276)){
var statearr_13325_13755 = state_13312__$1;
(statearr_13325_13755[(1)] = (129));

} else {
var statearr_13326_13756 = state_13312__$1;
(statearr_13326_13756[(1)] = (130));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13313 === (7))){
var inst_12348 = (state_13312[(18)]);
var inst_12353 = [cljs.core.str("sfx/pickup-"),cljs.core.str(inst_12348),cljs.core.str(".ogg")].join('');
var inst_12354 = farn.sound.load_sound.call(null,inst_12353);
var state_13312__$1 = state_13312;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13312__$1,(10),inst_12354);
} else {
if((state_val_13313 === (59))){
var inst_12966 = (state_13312[(19)]);
var state_13312__$1 = state_13312;
var statearr_13327_13757 = state_13312__$1;
(statearr_13327_13757[(2)] = inst_12966);

(statearr_13327_13757[(1)] = (60));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13313 === (86))){
var inst_12781 = (state_13312[(20)]);
var inst_12791 = (state_13312[(21)]);
var inst_12392 = (state_13312[(22)]);
var inst_12782 = (state_13312[(23)]);
var inst_12788 = (state_13312[(24)]);
var inst_13044 = (state_13312[(25)]);
var inst_13053 = cljs.core.first.call(null,inst_13044);
var inst_13055 = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(inst_13053);
var inst_13056 = new cljs.core.Keyword(null,"sprite","sprite",172516848).cljs$core$IFn$_invoke$arity$1(inst_13053);
var inst_13057 = inst_12392.call(null,inst_13055,inst_13056,inst_12781,inst_12782,inst_12788,inst_12791);
var inst_13058 = cljs.core.nth.call(null,inst_13057,(0),null);
var inst_13059 = cljs.core.nth.call(null,inst_13057,(1),null);
var inst_13060 = new cljs.core.Keyword(null,"sprite","sprite",172516848).cljs$core$IFn$_invoke$arity$1(inst_13053);
var inst_13061 = farn.sprite.set_pos_BANG_.call(null,inst_13060,inst_13058,inst_13059);
var inst_13062 = cljs.core.next.call(null,inst_13044);
var inst_13024 = inst_13062;
var inst_13025 = null;
var inst_13026 = (0);
var inst_13027 = (0);
var state_13312__$1 = (function (){var statearr_13328 = state_13312;
(statearr_13328[(11)] = inst_13025);

(statearr_13328[(12)] = inst_13026);

(statearr_13328[(13)] = inst_13027);

(statearr_13328[(26)] = inst_13061);

(statearr_13328[(14)] = inst_13024);

return statearr_13328;
})();
var statearr_13329_13758 = state_13312__$1;
(statearr_13329_13758[(2)] = null);

(statearr_13329_13758[(1)] = (77));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13313 === (20))){
var inst_12774 = farn.core.main_stage.children.length;
var inst_12775 = farn.utils.log.call(null,"SPRITE COUNT:",inst_12774);
var state_13312__$1 = state_13312;
var statearr_13330_13759 = state_13312__$1;
(statearr_13330_13759[(2)] = inst_12775);

(statearr_13330_13759[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13313 === (72))){
var inst_13011 = (state_13312[(27)]);
var inst_13012 = (state_13312[(9)]);
var inst_13014 = (inst_13012 < inst_13011);
var inst_13015 = inst_13014;
var state_13312__$1 = state_13312;
if(cljs.core.truth_(inst_13015)){
var statearr_13331_13760 = state_13312__$1;
(statearr_13331_13760[(1)] = (74));

} else {
var statearr_13332_13761 = state_13312__$1;
(statearr_13332_13761[(1)] = (75));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13313 === (58))){
var inst_12965 = (state_13312[(28)]);
var state_13312__$1 = state_13312;
var statearr_13333_13762 = state_13312__$1;
(statearr_13333_13762[(2)] = inst_12965);

(statearr_13333_13762[(1)] = (60));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13313 === (60))){
var inst_12970 = (state_13312[(2)]);
var state_13312__$1 = state_13312;
if(cljs.core.truth_(inst_12970)){
var statearr_13334_13763 = state_13312__$1;
(statearr_13334_13763[(1)] = (61));

} else {
var statearr_13335_13764 = state_13312__$1;
(statearr_13335_13764[(1)] = (62));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13313 === (27))){
var inst_12827 = (state_13312[(2)]);
var state_13312__$1 = state_13312;
var statearr_13336_13765 = state_13312__$1;
(statearr_13336_13765[(2)] = inst_12827);

(statearr_13336_13765[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13313 === (1))){
var inst_12268 = (state_13312[(29)]);
var inst_12265 = cljs.core.async.chan.call(null,(1));
var inst_12266 = (function (){var c__6459__auto____$1 = inst_12265;
return ((function (c__6459__auto____$1,inst_12268,inst_12265,state_val_13313,c__6459__auto___13746){
return (function (){
var f__6460__auto__ = (function (){var switch__6444__auto__ = ((function (c__6459__auto____$1,inst_12268,inst_12265,state_val_13313,c__6459__auto___13746){
return (function (state_12263){
var state_val_12264 = (state_12263[(1)]);
if((state_val_12264 === (2))){
var inst_12258 = (state_12263[(2)]);
var inst_12259 = cljs.core.println.call(null,"we has sound lel");
var inst_12260 = console.log(inst_12258);
var inst_12261 = farn.sound.play_sound.call(null,inst_12258,0.9,true);
var state_12263__$1 = (function (){var statearr_13337 = state_12263;
(statearr_13337[(7)] = inst_12259);

(statearr_13337[(8)] = inst_12260);

return statearr_13337;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12263__$1,inst_12261);
} else {
if((state_val_12264 === (1))){
var inst_12255 = cljs.core.println.call(null,"pre sound lel");
var inst_12256 = farn.sound.load_sound.call(null,"music/bu-ogre-of-a-simplex.ogg");
var state_12263__$1 = (function (){var statearr_13338 = state_12263;
(statearr_13338[(9)] = inst_12255);

return statearr_13338;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12263__$1,(2),inst_12256);
} else {
return null;
}
}
});})(c__6459__auto____$1,inst_12268,inst_12265,state_val_13313,c__6459__auto___13746))
;
return ((function (switch__6444__auto__,c__6459__auto____$1,inst_12268,inst_12265,state_val_13313,c__6459__auto___13746){
return (function() {
var state_machine__6445__auto__ = null;
var state_machine__6445__auto____0 = (function (){
var statearr_13342 = [null,null,null,null,null,null,null,null,null,null];
(statearr_13342[(0)] = state_machine__6445__auto__);

(statearr_13342[(1)] = (1));

return statearr_13342;
});
var state_machine__6445__auto____1 = (function (state_12263){
while(true){
var ret_value__6446__auto__ = (function (){try{while(true){
var result__6447__auto__ = switch__6444__auto__.call(null,state_12263);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6447__auto__;
}
break;
}
}catch (e13343){if((e13343 instanceof Object)){
var ex__6448__auto__ = e13343;
var statearr_13344_13766 = state_12263;
(statearr_13344_13766[(5)] = ex__6448__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12263);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13343;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13767 = state_12263;
state_12263 = G__13767;
continue;
} else {
return ret_value__6446__auto__;
}
break;
}
});
state_machine__6445__auto__ = function(state_12263){
switch(arguments.length){
case 0:
return state_machine__6445__auto____0.call(this);
case 1:
return state_machine__6445__auto____1.call(this,state_12263);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6445__auto____0;
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6445__auto____1;
return state_machine__6445__auto__;
})()
;})(switch__6444__auto__,c__6459__auto____$1,inst_12268,inst_12265,state_val_13313,c__6459__auto___13746))
})();
var state__6461__auto__ = (function (){var statearr_13345 = f__6460__auto__.call(null);
(statearr_13345[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6459__auto____$1);

return statearr_13345;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6461__auto__);
});
;})(c__6459__auto____$1,inst_12268,inst_12265,state_val_13313,c__6459__auto___13746))
})();
var inst_12267 = cljs.core.async.impl.dispatch.run.call(null,inst_12266);
var inst_12268__$1 = farn.core.load.call(null,farn.core.ui_stage,farn.assets._EQ_assets_EQ_,new cljs.core.Keyword(null,"full-colour","full-colour",50761434),(3170336),new cljs.core.Keyword(null,"highlight","highlight",-800930873),(8454016),new cljs.core.Keyword(null,"lowlight","lowlight",2143243768),(1060880),new cljs.core.Keyword(null,"empty-colour","empty-colour",-1488420524),(0),new cljs.core.Keyword(null,"fade-in","fade-in",999370239),0.2,new cljs.core.Keyword(null,"fade-out","fade-out",-1200160760),(2));
var inst_12269 = farn.map.perlin_map_generator.call(null);
var inst_12270 = farn.utils.log.call(null,"pulling");
var state_13312__$1 = (function (){var statearr_13346 = state_13312;
(statearr_13346[(29)] = inst_12268__$1);

(statearr_13346[(30)] = inst_12270);

(statearr_13346[(31)] = inst_12267);

(statearr_13346[(32)] = inst_12269);

return statearr_13346;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13312__$1,(2),inst_12268__$1);
} else {
if((state_val_13313 === (69))){
var inst_12981 = (state_13312[(33)]);
var inst_12986 = (inst_12981 - (1));
var inst_12981__$1 = inst_12986;
var state_13312__$1 = (function (){var statearr_13347 = state_13312;
(statearr_13347[(33)] = inst_12981__$1);

return statearr_13347;
})();
var statearr_13348_13768 = state_13312__$1;
(statearr_13348_13768[(2)] = null);

(statearr_13348_13768[(1)] = (67));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13313 === (101))){
var inst_13136 = (state_13312[(2)]);
var state_13312__$1 = state_13312;
var statearr_13349_13769 = state_13312__$1;
(statearr_13349_13769[(2)] = inst_13136);

(statearr_13349_13769[(1)] = (98));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13313 === (24))){
var inst_12475 = (state_13312[(8)]);
var inst_12281 = (state_13312[(34)]);
var inst_12286 = (state_13312[(35)]);
var inst_12795 = (state_13312[(36)]);
var inst_12278 = (state_13312[(37)]);
var inst_12268 = (state_13312[(29)]);
var inst_12306 = (state_13312[(38)]);
var inst_12768 = (state_13312[(39)]);
var inst_12319 = (state_13312[(40)]);
var inst_12474 = (state_13312[(41)]);
var inst_12274 = (state_13312[(42)]);
var inst_12796 = (state_13312[(43)]);
var inst_12765 = (state_13312[(44)]);
var inst_12305 = (state_13312[(45)]);
var inst_12390 = (state_13312[(46)]);
var inst_12467 = (state_13312[(47)]);
var inst_12781 = (state_13312[(20)]);
var inst_12763 = (state_13312[(48)]);
var inst_12333 = (state_13312[(49)]);
var inst_12307 = (state_13312[(50)]);
var inst_12793 = (state_13312[(51)]);
var inst_12783 = (state_13312[(52)]);
var inst_12300 = (state_13312[(53)]);
var inst_12764 = (state_13312[(54)]);
var inst_12363 = (state_13312[(55)]);
var inst_12797 = (state_13312[(56)]);
var inst_12792 = (state_13312[(57)]);
var inst_12285 = (state_13312[(58)]);
var inst_12326 = (state_13312[(59)]);
var inst_12791 = (state_13312[(21)]);
var inst_12395 = (state_13312[(60)]);
var inst_12766 = (state_13312[(61)]);
var inst_12282 = (state_13312[(68)]);
var inst_12769 = (state_13312[(7)]);
var inst_12316 = (state_13312[(69)]);
var inst_12392 = (state_13312[(22)]);
var inst_12808 = (state_13312[(70)]);
var inst_12269 = (state_13312[(32)]);
var inst_12782 = (state_13312[(23)]);
var inst_12310 = (state_13312[(71)]);
var inst_12837 = (state_13312[(62)]);
var inst_12283 = (state_13312[(72)]);
var inst_12794 = (state_13312[(73)]);
var inst_12479 = (state_13312[(74)]);
var inst_12809 = (state_13312[(75)]);
var inst_12297 = (state_13312[(76)]);
var inst_12287 = (state_13312[(77)]);
var inst_12284 = (state_13312[(78)]);
var inst_12784 = (state_13312[(79)]);
var inst_12391 = (state_13312[(80)]);
var inst_12767 = (state_13312[(81)]);
var inst_12829 = (state_13312[(67)]);
var inst_12275 = (state_13312[(82)]);
var inst_12788 = (state_13312[(24)]);
var inst_12478 = (state_13312[(83)]);
var inst_12785 = (state_13312[(84)]);
var inst_12313 = (state_13312[(85)]);
var inst_12336 = (state_13312[(86)]);
var inst_12480 = (state_13312[(87)]);
var inst_12829__$1 = (state_13312[(2)]);
var inst_12830 = (function (){var add_cell_BANG_ = inst_12479;
var depth_compare = inst_12391;
var vec__12779 = inst_12764;
var x = inst_12781;
var player_stars_text = inst_12310;
var player_standing_texs = inst_12297;
var cells = inst_12767;
var player_shadow = inst_12287;
var player_cell = inst_12795;
var vec__12780 = inst_12795;
var close_QMARK_ = inst_12395;
var sprite_count = inst_12768;
var player_pos = inst_12478;
var calc_theta = inst_12783;
var obstacle_types = inst_12319;
var polar_object_coords = inst_12392;
var trees = inst_12326;
var player_hit = inst_12769;
var old_sprite_count = inst_12794;
var y = inst_12782;
var player_standing_sway = inst_12300;
var player_cell_y = inst_12797;
var player_cell_x = inst_12796;
var game_sprites = inst_12474;
var loader = inst_12268;
var player_walking_texs = inst_12305;
var player_and_surrounds = inst_12808;
var rhx = inst_12788;
var rhy = inst_12791;
var frame_num = inst_12763;
var shadow_tex = inst_12286;
var process_add_cell = inst_12809;
var _ = inst_12282;
var tex = inst_12284;
var speed = inst_12765;
var hit_sfx = inst_12390;
var lobster_big = inst_12274;
var game_map = inst_12467;
var star_tex = inst_12306;
var pos = inst_12764;
var remove_cell_BANG_ = inst_12480;
var theta = inst_12766;
var tufts = inst_12333;
var game_space = inst_12475;
var pickup_textures = inst_12313;
var perlin_channel = inst_12269;
var title_text = inst_12283;
var vx = inst_12792;
var floor_objects = inst_12316;
var pickup_sfx = inst_12363;
var tilemap = inst_12281;
var vy = inst_12793;
var make_pickup = inst_12336;
var varela = inst_12275;
var new_cells = inst_12829__$1;
var hy = inst_12785;
var wait = inst_12278;
var hx = inst_12784;
var player = inst_12285;
var player_stars_icon = inst_12307;
return ((function (add_cell_BANG_,depth_compare,vec__12779,x,player_stars_text,player_standing_texs,cells,player_shadow,player_cell,vec__12780,close_QMARK_,sprite_count,player_pos,calc_theta,obstacle_types,polar_object_coords,trees,player_hit,old_sprite_count,y,player_standing_sway,player_cell_y,player_cell_x,game_sprites,loader,player_walking_texs,player_and_surrounds,rhx,rhy,frame_num,shadow_tex,process_add_cell,_,tex,speed,hit_sfx,lobster_big,game_map,star_tex,pos,remove_cell_BANG_,theta,tufts,game_space,pickup_textures,perlin_channel,title_text,vx,floor_objects,pickup_sfx,tilemap,vy,make_pickup,varela,new_cells,hy,wait,hx,player,player_stars_icon,inst_12475,inst_12281,inst_12286,inst_12795,inst_12278,inst_12268,inst_12306,inst_12768,inst_12319,inst_12474,inst_12274,inst_12796,inst_12765,inst_12305,inst_12390,inst_12467,inst_12781,inst_12763,inst_12333,inst_12307,inst_12793,inst_12783,inst_12300,inst_12764,inst_12363,inst_12797,inst_12792,inst_12285,inst_12326,inst_12791,inst_12395,inst_12766,inst_12282,inst_12769,inst_12316,inst_12392,inst_12808,inst_12269,inst_12782,inst_12310,inst_12837,inst_12283,inst_12794,inst_12479,inst_12809,inst_12297,inst_12287,inst_12284,inst_12784,inst_12391,inst_12767,inst_12829,inst_12275,inst_12788,inst_12478,inst_12785,inst_12313,inst_12336,inst_12480,inst_12829__$1,state_val_13313,c__6459__auto___13746){
return (function (p1__12238_SHARP_){
return !((p1__12238_SHARP_ == null));
});
;})(add_cell_BANG_,depth_compare,vec__12779,x,player_stars_text,player_standing_texs,cells,player_shadow,player_cell,vec__12780,close_QMARK_,sprite_count,player_pos,calc_theta,obstacle_types,polar_object_coords,trees,player_hit,old_sprite_count,y,player_standing_sway,player_cell_y,player_cell_x,game_sprites,loader,player_walking_texs,player_and_surrounds,rhx,rhy,frame_num,shadow_tex,process_add_cell,_,tex,speed,hit_sfx,lobster_big,game_map,star_tex,pos,remove_cell_BANG_,theta,tufts,game_space,pickup_textures,perlin_channel,title_text,vx,floor_objects,pickup_sfx,tilemap,vy,make_pickup,varela,new_cells,hy,wait,hx,player,player_stars_icon,inst_12475,inst_12281,inst_12286,inst_12795,inst_12278,inst_12268,inst_12306,inst_12768,inst_12319,inst_12474,inst_12274,inst_12796,inst_12765,inst_12305,inst_12390,inst_12467,inst_12781,inst_12763,inst_12333,inst_12307,inst_12793,inst_12783,inst_12300,inst_12764,inst_12363,inst_12797,inst_12792,inst_12285,inst_12326,inst_12791,inst_12395,inst_12766,inst_12282,inst_12769,inst_12316,inst_12392,inst_12808,inst_12269,inst_12782,inst_12310,inst_12837,inst_12283,inst_12794,inst_12479,inst_12809,inst_12297,inst_12287,inst_12284,inst_12784,inst_12391,inst_12767,inst_12829,inst_12275,inst_12788,inst_12478,inst_12785,inst_12313,inst_12336,inst_12480,inst_12829__$1,state_val_13313,c__6459__auto___13746))
})();
var inst_12835 = (function (){var add_cell_BANG_ = inst_12479;
var depth_compare = inst_12391;
var vec__12779 = inst_12764;
var x = inst_12781;
var player_stars_text = inst_12310;
var player_standing_texs = inst_12297;
var cells = inst_12767;
var player_shadow = inst_12287;
var player_cell = inst_12795;
var vec__12780 = inst_12795;
var close_QMARK_ = inst_12395;
var sprite_count = inst_12768;
var player_pos = inst_12478;
var calc_theta = inst_12783;
var obstacle_types = inst_12319;
var polar_object_coords = inst_12392;
var trees = inst_12326;
var player_hit = inst_12769;
var old_sprite_count = inst_12794;
var y = inst_12782;
var player_standing_sway = inst_12300;
var player_cell_y = inst_12797;
var player_cell_x = inst_12796;
var game_sprites = inst_12474;
var loader = inst_12268;
var player_walking_texs = inst_12305;
var player_and_surrounds = inst_12808;
var rhx = inst_12788;
var rhy = inst_12791;
var frame_num = inst_12763;
var shadow_tex = inst_12286;
var process_add_cell = inst_12809;
var _ = inst_12282;
var tex = inst_12284;
var speed = inst_12765;
var hit_sfx = inst_12390;
var lobster_big = inst_12274;
var game_map = inst_12467;
var star_tex = inst_12306;
var pos = inst_12764;
var remove_cell_BANG_ = inst_12480;
var theta = inst_12766;
var tufts = inst_12333;
var game_space = inst_12475;
var pickup_textures = inst_12313;
var perlin_channel = inst_12269;
var title_text = inst_12283;
var vx = inst_12792;
var floor_objects = inst_12316;
var pickup_sfx = inst_12363;
var tilemap = inst_12281;
var vy = inst_12793;
var make_pickup = inst_12336;
var varela = inst_12275;
var new_cells = inst_12829__$1;
var hy = inst_12785;
var wait = inst_12278;
var hx = inst_12784;
var player = inst_12285;
var player_stars_icon = inst_12307;
return ((function (add_cell_BANG_,depth_compare,vec__12779,x,player_stars_text,player_standing_texs,cells,player_shadow,player_cell,vec__12780,close_QMARK_,sprite_count,player_pos,calc_theta,obstacle_types,polar_object_coords,trees,player_hit,old_sprite_count,y,player_standing_sway,player_cell_y,player_cell_x,game_sprites,loader,player_walking_texs,player_and_surrounds,rhx,rhy,frame_num,shadow_tex,process_add_cell,_,tex,speed,hit_sfx,lobster_big,game_map,star_tex,pos,remove_cell_BANG_,theta,tufts,game_space,pickup_textures,perlin_channel,title_text,vx,floor_objects,pickup_sfx,tilemap,vy,make_pickup,varela,new_cells,hy,wait,hx,player,player_stars_icon,inst_12475,inst_12281,inst_12286,inst_12795,inst_12278,inst_12268,inst_12306,inst_12768,inst_12319,inst_12474,inst_12274,inst_12796,inst_12765,inst_12305,inst_12390,inst_12467,inst_12781,inst_12763,inst_12333,inst_12307,inst_12793,inst_12783,inst_12300,inst_12764,inst_12363,inst_12797,inst_12792,inst_12285,inst_12326,inst_12791,inst_12395,inst_12766,inst_12282,inst_12769,inst_12316,inst_12392,inst_12808,inst_12269,inst_12782,inst_12310,inst_12837,inst_12283,inst_12794,inst_12479,inst_12809,inst_12297,inst_12287,inst_12284,inst_12784,inst_12391,inst_12767,inst_12829,inst_12275,inst_12788,inst_12478,inst_12785,inst_12313,inst_12336,inst_12480,inst_12829__$1,inst_12830,state_val_13313,c__6459__auto___13746){
return (function iter__12831(s__12832){
return (new cljs.core.LazySeq(null,((function (add_cell_BANG_,depth_compare,vec__12779,x,player_stars_text,player_standing_texs,cells,player_shadow,player_cell,vec__12780,close_QMARK_,sprite_count,player_pos,calc_theta,obstacle_types,polar_object_coords,trees,player_hit,old_sprite_count,y,player_standing_sway,player_cell_y,player_cell_x,game_sprites,loader,player_walking_texs,player_and_surrounds,rhx,rhy,frame_num,shadow_tex,process_add_cell,_,tex,speed,hit_sfx,lobster_big,game_map,star_tex,pos,remove_cell_BANG_,theta,tufts,game_space,pickup_textures,perlin_channel,title_text,vx,floor_objects,pickup_sfx,tilemap,vy,make_pickup,varela,new_cells,hy,wait,hx,player,player_stars_icon,inst_12475,inst_12281,inst_12286,inst_12795,inst_12278,inst_12268,inst_12306,inst_12768,inst_12319,inst_12474,inst_12274,inst_12796,inst_12765,inst_12305,inst_12390,inst_12467,inst_12781,inst_12763,inst_12333,inst_12307,inst_12793,inst_12783,inst_12300,inst_12764,inst_12363,inst_12797,inst_12792,inst_12285,inst_12326,inst_12791,inst_12395,inst_12766,inst_12282,inst_12769,inst_12316,inst_12392,inst_12808,inst_12269,inst_12782,inst_12310,inst_12837,inst_12283,inst_12794,inst_12479,inst_12809,inst_12297,inst_12287,inst_12284,inst_12784,inst_12391,inst_12767,inst_12829,inst_12275,inst_12788,inst_12478,inst_12785,inst_12313,inst_12336,inst_12480,inst_12829__$1,inst_12830,state_val_13313,c__6459__auto___13746){
return (function (){
var s__12832__$1 = s__12832;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__12832__$1);
if(temp__4126__auto__){
var s__12832__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12832__$2)){
var c__4384__auto__ = cljs.core.chunk_first.call(null,s__12832__$2);
var size__4385__auto__ = cljs.core.count.call(null,c__4384__auto__);
var b__12834 = cljs.core.chunk_buffer.call(null,size__4385__auto__);
if((function (){var i__12833 = (0);
while(true){
if((i__12833 < size__4385__auto__)){
var c = cljs.core._nth.call(null,c__4384__auto__,i__12833);
cljs.core.chunk_append.call(null,b__12834,(function (){var vec__13352 = c;
var cx = cljs.core.nth.call(null,vec__13352,(0),null);
var cy = cljs.core.nth.call(null,vec__13352,(1),null);
var dx = Math.abs.call(null,(cx - player_cell_x));
var dy = Math.abs.call(null,(cy - player_cell_y));
var d_squared = ((dx * dx) + (dy * dy));
if((d_squared > (25))){
return c;
} else {
return null;
}
})());

var G__13770 = (i__12833 + (1));
i__12833 = G__13770;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12834),iter__12831.call(null,cljs.core.chunk_rest.call(null,s__12832__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12834),null);
}
} else {
var c = cljs.core.first.call(null,s__12832__$2);
return cljs.core.cons.call(null,(function (){var vec__13353 = c;
var cx = cljs.core.nth.call(null,vec__13353,(0),null);
var cy = cljs.core.nth.call(null,vec__13353,(1),null);
var dx = Math.abs.call(null,(cx - player_cell_x));
var dy = Math.abs.call(null,(cy - player_cell_y));
var d_squared = ((dx * dx) + (dy * dy));
if((d_squared > (25))){
return c;
} else {
return null;
}
})(),iter__12831.call(null,cljs.core.rest.call(null,s__12832__$2)));
}
} else {
return null;
}
break;
}
});})(add_cell_BANG_,depth_compare,vec__12779,x,player_stars_text,player_standing_texs,cells,player_shadow,player_cell,vec__12780,close_QMARK_,sprite_count,player_pos,calc_theta,obstacle_types,polar_object_coords,trees,player_hit,old_sprite_count,y,player_standing_sway,player_cell_y,player_cell_x,game_sprites,loader,player_walking_texs,player_and_surrounds,rhx,rhy,frame_num,shadow_tex,process_add_cell,_,tex,speed,hit_sfx,lobster_big,game_map,star_tex,pos,remove_cell_BANG_,theta,tufts,game_space,pickup_textures,perlin_channel,title_text,vx,floor_objects,pickup_sfx,tilemap,vy,make_pickup,varela,new_cells,hy,wait,hx,player,player_stars_icon,inst_12475,inst_12281,inst_12286,inst_12795,inst_12278,inst_12268,inst_12306,inst_12768,inst_12319,inst_12474,inst_12274,inst_12796,inst_12765,inst_12305,inst_12390,inst_12467,inst_12781,inst_12763,inst_12333,inst_12307,inst_12793,inst_12783,inst_12300,inst_12764,inst_12363,inst_12797,inst_12792,inst_12285,inst_12326,inst_12791,inst_12395,inst_12766,inst_12282,inst_12769,inst_12316,inst_12392,inst_12808,inst_12269,inst_12782,inst_12310,inst_12837,inst_12283,inst_12794,inst_12479,inst_12809,inst_12297,inst_12287,inst_12284,inst_12784,inst_12391,inst_12767,inst_12829,inst_12275,inst_12788,inst_12478,inst_12785,inst_12313,inst_12336,inst_12480,inst_12829__$1,inst_12830,state_val_13313,c__6459__auto___13746))
,null,null));
});
;})(add_cell_BANG_,depth_compare,vec__12779,x,player_stars_text,player_standing_texs,cells,player_shadow,player_cell,vec__12780,close_QMARK_,sprite_count,player_pos,calc_theta,obstacle_types,polar_object_coords,trees,player_hit,old_sprite_count,y,player_standing_sway,player_cell_y,player_cell_x,game_sprites,loader,player_walking_texs,player_and_surrounds,rhx,rhy,frame_num,shadow_tex,process_add_cell,_,tex,speed,hit_sfx,lobster_big,game_map,star_tex,pos,remove_cell_BANG_,theta,tufts,game_space,pickup_textures,perlin_channel,title_text,vx,floor_objects,pickup_sfx,tilemap,vy,make_pickup,varela,new_cells,hy,wait,hx,player,player_stars_icon,inst_12475,inst_12281,inst_12286,inst_12795,inst_12278,inst_12268,inst_12306,inst_12768,inst_12319,inst_12474,inst_12274,inst_12796,inst_12765,inst_12305,inst_12390,inst_12467,inst_12781,inst_12763,inst_12333,inst_12307,inst_12793,inst_12783,inst_12300,inst_12764,inst_12363,inst_12797,inst_12792,inst_12285,inst_12326,inst_12791,inst_12395,inst_12766,inst_12282,inst_12769,inst_12316,inst_12392,inst_12808,inst_12269,inst_12782,inst_12310,inst_12837,inst_12283,inst_12794,inst_12479,inst_12809,inst_12297,inst_12287,inst_12284,inst_12784,inst_12391,inst_12767,inst_12829,inst_12275,inst_12788,inst_12478,inst_12785,inst_12313,inst_12336,inst_12480,inst_12829__$1,inst_12830,state_val_13313,c__6459__auto___13746))
})();
var inst_12836 = inst_12835.call(null,inst_12767);
var inst_12837__$1 = cljs.core.filter.call(null,inst_12830,inst_12836);
var inst_12841 = cljs.core.nth.call(null,inst_12837__$1,(0),null);
var inst_12842 = cljs.core.nthnext.call(null,inst_12837__$1,(1));
var inst_12843 = inst_12837__$1;
var inst_12844 = inst_12829__$1;
var state_13312__$1 = (function (){var statearr_13354 = state_13312;
(statearr_13354[(62)] = inst_12837__$1);

(statearr_13354[(63)] = inst_12841);

(statearr_13354[(64)] = inst_12844);

(statearr_13354[(65)] = inst_12843);

(statearr_13354[(66)] = inst_12842);

(statearr_13354[(67)] = inst_12829__$1);

return statearr_13354;
})();
var statearr_13355_13771 = state_13312__$1;
(statearr_13355_13771[(2)] = null);

(statearr_13355_13771[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13313 === (102))){
var inst_13112 = (state_13312[(88)]);
var inst_13116 = cljs.core.chunk_first.call(null,inst_13112);
var inst_13117 = cljs.core.chunk_rest.call(null,inst_13112);
var inst_13118 = cljs.core.count.call(null,inst_13116);
var inst_13092 = inst_13117;
var inst_13093 = inst_13116;
var inst_13094 = inst_13118;
var inst_13095 = (0);
var state_13312__$1 = (function (){var statearr_13356 = state_13312;
(statearr_13356[(89)] = inst_13095);

(statearr_13356[(90)] = inst_13094);

(statearr_13356[(91)] = inst_13093);

(statearr_13356[(92)] = inst_13092);

return statearr_13356;
})();
var statearr_13357_13772 = state_13312__$1;
(statearr_13357_13772[(2)] = null);

(statearr_13357_13772[(1)] = (94));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13313 === (135))){
var inst_12765 = (state_13312[(44)]);
var inst_13282 = (inst_12765 + farn.core.player_acceleration);
var inst_13283 = ((inst_13282 < farn.core.player_max_speed) ? inst_13282 : farn.core.player_max_speed);
var state_13312__$1 = state_13312;
var statearr_13358_13773 = state_13312__$1;
(statearr_13358_13773[(2)] = inst_13283);

(statearr_13358_13773[(1)] = (137));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13313 === (55))){
var inst_12363 = (state_13312[(55)]);
var inst_12918 = (state_13312[(93)]);
var inst_12937 = cljs.core.rand_nth.call(null,inst_12363);
var inst_12938 = farn.sound.play_sound.call(null,inst_12937,0.4);
var inst_12939 = new cljs.core.Keyword(null,"sprite","sprite",172516848).cljs$core$IFn$_invoke$arity$1(inst_12918);
var inst_12940 = farn.core.main_stage.removeChild(inst_12939);
var inst_12941 = new cljs.core.Keyword(null,"shadow","shadow",873231803).cljs$core$IFn$_invoke$arity$1(inst_12918);
var inst_12942 = farn.core.main_stage.removeChild(inst_12941);
var inst_12943 = cljs.core.swap_BANG_.call(null,farn.core.player_stars,cljs.core.inc);
var inst_12944 = cljs.core.swap_BANG_.call(null,farn.core.pickup_store,cljs.core.disj,inst_12918);
var state_13312__$1 = (function (){var statearr_13359 = state_13312;
(statearr_13359[(94)] = inst_12938);

(statearr_13359[(95)] = inst_12944);

(statearr_13359[(96)] = inst_12940);

(statearr_13359[(97)] = inst_12942);

(statearr_13359[(98)] = inst_12943);

return statearr_13359;
})();
var statearr_13360_13774 = state_13312__$1;
(statearr_13360_13774[(2)] = null);

(statearr_13360_13774[(1)] = (56));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13313 === (85))){
var inst_13044 = (state_13312[(25)]);
var inst_13048 = cljs.core.chunk_first.call(null,inst_13044);
var inst_13049 = cljs.core.chunk_rest.call(null,inst_13044);
var inst_13050 = cljs.core.count.call(null,inst_13048);
var inst_13024 = inst_13049;
var inst_13025 = inst_13048;
var inst_13026 = inst_13050;
var inst_13027 = (0);
var state_13312__$1 = (function (){var statearr_13361 = state_13312;
(statearr_13361[(11)] = inst_13025);

(statearr_13361[(12)] = inst_13026);

(statearr_13361[(13)] = inst_13027);

(statearr_13361[(14)] = inst_13024);

return statearr_13361;
})();
var statearr_13362_13775 = state_13312__$1;
(statearr_13362_13775[(2)] = null);

(statearr_13362_13775[(1)] = (77));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13313 === (39))){
var state_13312__$1 = state_13312;
var statearr_13363_13776 = state_13312__$1;
(statearr_13363_13776[(2)] = null);

(statearr_13363_13776[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13313 === (88))){
var inst_13076 = (state_13312[(99)]);
var inst_13078 = cljs.core.chunked_seq_QMARK_.call(null,inst_13076);
var state_13312__$1 = state_13312;
if(inst_13078){
var statearr_13364_13777 = state_13312__$1;
(statearr_13364_13777[(1)] = (91));

} else {
var statearr_13365_13778 = state_13312__$1;
(statearr_13365_13778[(1)] = (92));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13313 === (46))){
var state_13312__$1 = state_13312;
var statearr_13366_13779 = state_13312__$1;
(statearr_13366_13779[(2)] = null);

(statearr_13366_13779[(1)] = (47));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13313 === (4))){
var inst_12281 = (state_13312[(34)]);
var inst_12286 = (state_13312[(35)]);
var inst_12278 = (state_13312[(37)]);
var inst_12268 = (state_13312[(29)]);
var inst_12306 = (state_13312[(38)]);
var inst_12319 = (state_13312[(40)]);
var inst_12274 = (state_13312[(42)]);
var inst_12305 = (state_13312[(45)]);
var inst_12333 = (state_13312[(49)]);
var inst_12307 = (state_13312[(50)]);
var inst_12300 = (state_13312[(53)]);
var inst_12285 = (state_13312[(58)]);
var inst_12326 = (state_13312[(59)]);
var inst_12282 = (state_13312[(68)]);
var inst_12316 = (state_13312[(69)]);
var inst_12269 = (state_13312[(32)]);
var inst_12310 = (state_13312[(71)]);
var inst_12283 = (state_13312[(72)]);
var inst_12297 = (state_13312[(76)]);
var inst_12287 = (state_13312[(77)]);
var inst_12284 = (state_13312[(78)]);
var inst_12275 = (state_13312[(82)]);
var inst_12313 = (state_13312[(85)]);
var inst_12281__$1 = (state_13312[(2)]);
var inst_12282__$1 = farn.utils.log.call(null,"perlin channel - done");
var inst_12283__$1 = farn.font.make_text.call(null,"400 48pt Lobster","Alien Forest Explorer",new cljs.core.Keyword(null,"weight","weight",-1262796205),(400),new cljs.core.Keyword(null,"fill","fill",883462889),"#7FCACD",new cljs.core.Keyword(null,"dropShadow","dropShadow",1001370187),true,new cljs.core.Keyword(null,"dropShadowColor","dropShadowColor",-318037852),"#333333");
var inst_12284__$1 = farn.gfx.get_texture.call(null,new cljs.core.Keyword(null,"pink-stand-4","pink-stand-4",695656413));
var inst_12285__$1 = farn.sprite.make_sprite.call(null,inst_12284__$1);
var inst_12286__$1 = farn.gfx.get_texture.call(null,new cljs.core.Keyword(null,"shadow-1","shadow-1",-1417857329));
var inst_12287__$1 = farn.sprite.make_sprite.call(null,inst_12286__$1,new cljs.core.Keyword(null,"anchor-x","anchor-x",-1597588837),0.5,new cljs.core.Keyword(null,"anchor-y","anchor-y",-1366716999),0.5);
var inst_12292 = (function (){var player_shadow = inst_12287__$1;
var loader = inst_12268;
var shadow_tex = inst_12286__$1;
var _ = inst_12282__$1;
var tex = inst_12284__$1;
var lobster_big = inst_12274;
var perlin_channel = inst_12269;
var title_text = inst_12283__$1;
var tilemap = inst_12281__$1;
var varela = inst_12275;
var wait = inst_12278;
var player = inst_12285__$1;
return ((function (player_shadow,loader,shadow_tex,_,tex,lobster_big,perlin_channel,title_text,tilemap,varela,wait,player,inst_12281,inst_12286,inst_12278,inst_12268,inst_12306,inst_12319,inst_12274,inst_12305,inst_12333,inst_12307,inst_12300,inst_12285,inst_12326,inst_12282,inst_12316,inst_12269,inst_12310,inst_12283,inst_12297,inst_12287,inst_12284,inst_12275,inst_12313,inst_12281__$1,inst_12282__$1,inst_12283__$1,inst_12284__$1,inst_12285__$1,inst_12286__$1,inst_12287__$1,state_val_13313,c__6459__auto___13746){
return (function iter__12288(s__12289){
return (new cljs.core.LazySeq(null,((function (player_shadow,loader,shadow_tex,_,tex,lobster_big,perlin_channel,title_text,tilemap,varela,wait,player,inst_12281,inst_12286,inst_12278,inst_12268,inst_12306,inst_12319,inst_12274,inst_12305,inst_12333,inst_12307,inst_12300,inst_12285,inst_12326,inst_12282,inst_12316,inst_12269,inst_12310,inst_12283,inst_12297,inst_12287,inst_12284,inst_12275,inst_12313,inst_12281__$1,inst_12282__$1,inst_12283__$1,inst_12284__$1,inst_12285__$1,inst_12286__$1,inst_12287__$1,state_val_13313,c__6459__auto___13746){
return (function (){
var s__12289__$1 = s__12289;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__12289__$1);
if(temp__4126__auto__){
var s__12289__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12289__$2)){
var c__4384__auto__ = cljs.core.chunk_first.call(null,s__12289__$2);
var size__4385__auto__ = cljs.core.count.call(null,c__4384__auto__);
var b__12291 = cljs.core.chunk_buffer.call(null,size__4385__auto__);
if((function (){var i__12290 = (0);
while(true){
if((i__12290 < size__4385__auto__)){
var type = cljs.core._nth.call(null,c__4384__auto__,i__12290);
cljs.core.chunk_append.call(null,b__12291,farn.gfx.get_texture.call(null,type));

var G__13780 = (i__12290 + (1));
i__12290 = G__13780;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12291),iter__12288.call(null,cljs.core.chunk_rest.call(null,s__12289__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12291),null);
}
} else {
var type = cljs.core.first.call(null,s__12289__$2);
return cljs.core.cons.call(null,farn.gfx.get_texture.call(null,type),iter__12288.call(null,cljs.core.rest.call(null,s__12289__$2)));
}
} else {
return null;
}
break;
}
});})(player_shadow,loader,shadow_tex,_,tex,lobster_big,perlin_channel,title_text,tilemap,varela,wait,player,inst_12281,inst_12286,inst_12278,inst_12268,inst_12306,inst_12319,inst_12274,inst_12305,inst_12333,inst_12307,inst_12300,inst_12285,inst_12326,inst_12282,inst_12316,inst_12269,inst_12310,inst_12283,inst_12297,inst_12287,inst_12284,inst_12275,inst_12313,inst_12281__$1,inst_12282__$1,inst_12283__$1,inst_12284__$1,inst_12285__$1,inst_12286__$1,inst_12287__$1,state_val_13313,c__6459__auto___13746))
,null,null));
});
;})(player_shadow,loader,shadow_tex,_,tex,lobster_big,perlin_channel,title_text,tilemap,varela,wait,player,inst_12281,inst_12286,inst_12278,inst_12268,inst_12306,inst_12319,inst_12274,inst_12305,inst_12333,inst_12307,inst_12300,inst_12285,inst_12326,inst_12282,inst_12316,inst_12269,inst_12310,inst_12283,inst_12297,inst_12287,inst_12284,inst_12275,inst_12313,inst_12281__$1,inst_12282__$1,inst_12283__$1,inst_12284__$1,inst_12285__$1,inst_12286__$1,inst_12287__$1,state_val_13313,c__6459__auto___13746))
})();
var inst_12293 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_12294 = [new cljs.core.Keyword(null,"pink-stand-1","pink-stand-1",1440110735),new cljs.core.Keyword(null,"pink-stand-2","pink-stand-2",376064840),new cljs.core.Keyword(null,"pink-stand-3","pink-stand-3",676644618),new cljs.core.Keyword(null,"pink-stand-4","pink-stand-4",695656413)];
var inst_12295 = (new cljs.core.PersistentVector(null,4,(5),inst_12293,inst_12294,null));
var inst_12296 = inst_12292.call(null,inst_12295);
var inst_12297__$1 = cljs.core.doall.call(null,inst_12296);
var inst_12298 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_12299 = [(0),(-4),(0),(4)];
var inst_12300__$1 = (new cljs.core.PersistentVector(null,4,(5),inst_12298,inst_12299,null));
var inst_12301 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_12302 = farn.gfx.get_texture.call(null,new cljs.core.Keyword(null,"pink-walk-1","pink-walk-1",-1200475595));
var inst_12303 = farn.gfx.get_texture.call(null,new cljs.core.Keyword(null,"pink-walk-2","pink-walk-2",2040805893));
var inst_12304 = [inst_12302,inst_12303];
var inst_12305__$1 = (new cljs.core.PersistentVector(null,2,(5),inst_12301,inst_12304,null));
var inst_12306__$1 = farn.gfx.get_texture.call(null,new cljs.core.Keyword(null,"pickup-star-1","pickup-star-1",-1674863964));
var inst_12307__$1 = farn.sprite.make_sprite.call(null,inst_12306__$1);
var inst_12308 = cljs.core.deref.call(null,farn.core.player_stars);
var inst_12309 = [cljs.core.str(inst_12308)].join('');
var inst_12310__$1 = farn.font.make_text.call(null,"400 20pt Varela Round",inst_12309,new cljs.core.Keyword(null,"weight","weight",-1262796205),(400),new cljs.core.Keyword(null,"fill","fill",883462889),"#ffffff",new cljs.core.Keyword(null,"dropShadow","dropShadow",1001370187),true,new cljs.core.Keyword(null,"dropShadowColor","dropShadowColor",-318037852),"#000000");
var inst_12311 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_12312 = [new cljs.core.Keyword(null,"pickup-star-1","pickup-star-1",-1674863964),new cljs.core.Keyword(null,"pickup-mushroom-1","pickup-mushroom-1",-338548111)];
var inst_12313__$1 = (new cljs.core.PersistentVector(null,2,(5),inst_12311,inst_12312,null));
var inst_12314 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_12315 = [new cljs.core.Keyword(null,"static-floor-path-big","static-floor-path-big",-1637038697),new cljs.core.Keyword(null,"static-floor-path-medium","static-floor-path-medium",-46847685),new cljs.core.Keyword(null,"static-floor-path-small","static-floor-path-small",477685180),new cljs.core.Keyword(null,"static-floor-sand-big","static-floor-sand-big",953875278),new cljs.core.Keyword(null,"static-floor-sand-medium","static-floor-sand-medium",104159128),new cljs.core.Keyword(null,"static-floor-sand-small","static-floor-sand-small",-214159250),new cljs.core.Keyword(null,"static-floor-water-big","static-floor-water-big",1588138738),new cljs.core.Keyword(null,"static-floor-water-medium","static-floor-water-medium",1136261079),new cljs.core.Keyword(null,"static-floor-water-small","static-floor-water-small",1080050532)];
var inst_12316__$1 = (new cljs.core.PersistentVector(null,9,(5),inst_12314,inst_12315,null));
var inst_12317 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_12318 = [new cljs.core.Keyword(null,"static-tree-1","static-tree-1",-1951953537),new cljs.core.Keyword(null,"static-tree-2","static-tree-2",-27985141),new cljs.core.Keyword(null,"static-tree-3","static-tree-3",378870117),new cljs.core.Keyword(null,"static-tree-4","static-tree-4",-1003799420),new cljs.core.Keyword(null,"static-tree-5","static-tree-5",154248249),new cljs.core.Keyword(null,"static-tree-6","static-tree-6",-500626901),new cljs.core.Keyword(null,"static-tree-7","static-tree-7",1865082789),new cljs.core.Keyword(null,"static-tree-8","static-tree-8",-708259882),new cljs.core.Keyword(null,"static-tree-9","static-tree-9",729041102),new cljs.core.Keyword(null,"static-tree-10","static-tree-10",225886540),new cljs.core.Keyword(null,"static-tree-11","static-tree-11",-461585621),new cljs.core.Keyword(null,"static-tree-12","static-tree-12",-1331568669),new cljs.core.Keyword(null,"static-tree-13","static-tree-13",1696371732),new cljs.core.Keyword(null,"static-tree-14","static-tree-14",-890945489),new cljs.core.Keyword(null,"static-tree-15","static-tree-15",-25295839),new cljs.core.Keyword(null,"static-tree-16","static-tree-16",847489456),new cljs.core.Keyword(null,"static-tree-17","static-tree-17",-1292342697),new cljs.core.Keyword(null,"static-tree-18","static-tree-18",-378591927),new cljs.core.Keyword(null,"static-tree-19","static-tree-19",425360659),new cljs.core.Keyword(null,"static-tree-20","static-tree-20",155885611),new cljs.core.Keyword(null,"static-castle-1","static-castle-1",1559541979),new cljs.core.Keyword(null,"static-giant-schroom-1","static-giant-schroom-1",371680418),new cljs.core.Keyword(null,"static-giant-schroom-2","static-giant-schroom-2",1230929171),new cljs.core.Keyword(null,"static-cactus-1","static-cactus-1",368350727),new cljs.core.Keyword(null,"static-cactus-2","static-cactus-2",2022050580),new cljs.core.Keyword(null,"static-cactus-3","static-cactus-3",1331250244)];
var inst_12319__$1 = (new cljs.core.PersistentVector(null,26,(5),inst_12317,inst_12318,null));
var inst_12324 = (function (){var player_stars_text = inst_12310__$1;
var player_standing_texs = inst_12297__$1;
var player_shadow = inst_12287__$1;
var obstacle_types = inst_12319__$1;
var player_standing_sway = inst_12300__$1;
var loader = inst_12268;
var player_walking_texs = inst_12305__$1;
var shadow_tex = inst_12286__$1;
var _ = inst_12282__$1;
var tex = inst_12284__$1;
var lobster_big = inst_12274;
var star_tex = inst_12306__$1;
var pickup_textures = inst_12313__$1;
var perlin_channel = inst_12269;
var title_text = inst_12283__$1;
var floor_objects = inst_12316__$1;
var tilemap = inst_12281__$1;
var varela = inst_12275;
var wait = inst_12278;
var player = inst_12285__$1;
var player_stars_icon = inst_12307__$1;
return ((function (player_stars_text,player_standing_texs,player_shadow,obstacle_types,player_standing_sway,loader,player_walking_texs,shadow_tex,_,tex,lobster_big,star_tex,pickup_textures,perlin_channel,title_text,floor_objects,tilemap,varela,wait,player,player_stars_icon,inst_12281,inst_12286,inst_12278,inst_12268,inst_12306,inst_12319,inst_12274,inst_12305,inst_12333,inst_12307,inst_12300,inst_12285,inst_12326,inst_12282,inst_12316,inst_12269,inst_12310,inst_12283,inst_12297,inst_12287,inst_12284,inst_12275,inst_12313,inst_12281__$1,inst_12282__$1,inst_12283__$1,inst_12284__$1,inst_12285__$1,inst_12286__$1,inst_12287__$1,inst_12292,inst_12293,inst_12294,inst_12295,inst_12296,inst_12297__$1,inst_12298,inst_12299,inst_12300__$1,inst_12301,inst_12302,inst_12303,inst_12304,inst_12305__$1,inst_12306__$1,inst_12307__$1,inst_12308,inst_12309,inst_12310__$1,inst_12311,inst_12312,inst_12313__$1,inst_12314,inst_12315,inst_12316__$1,inst_12317,inst_12318,inst_12319__$1,state_val_13313,c__6459__auto___13746){
return (function iter__12320(s__12321){
return (new cljs.core.LazySeq(null,((function (player_stars_text,player_standing_texs,player_shadow,obstacle_types,player_standing_sway,loader,player_walking_texs,shadow_tex,_,tex,lobster_big,star_tex,pickup_textures,perlin_channel,title_text,floor_objects,tilemap,varela,wait,player,player_stars_icon,inst_12281,inst_12286,inst_12278,inst_12268,inst_12306,inst_12319,inst_12274,inst_12305,inst_12333,inst_12307,inst_12300,inst_12285,inst_12326,inst_12282,inst_12316,inst_12269,inst_12310,inst_12283,inst_12297,inst_12287,inst_12284,inst_12275,inst_12313,inst_12281__$1,inst_12282__$1,inst_12283__$1,inst_12284__$1,inst_12285__$1,inst_12286__$1,inst_12287__$1,inst_12292,inst_12293,inst_12294,inst_12295,inst_12296,inst_12297__$1,inst_12298,inst_12299,inst_12300__$1,inst_12301,inst_12302,inst_12303,inst_12304,inst_12305__$1,inst_12306__$1,inst_12307__$1,inst_12308,inst_12309,inst_12310__$1,inst_12311,inst_12312,inst_12313__$1,inst_12314,inst_12315,inst_12316__$1,inst_12317,inst_12318,inst_12319__$1,state_val_13313,c__6459__auto___13746){
return (function (){
var s__12321__$1 = s__12321;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__12321__$1);
if(temp__4126__auto__){
var s__12321__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12321__$2)){
var c__4384__auto__ = cljs.core.chunk_first.call(null,s__12321__$2);
var size__4385__auto__ = cljs.core.count.call(null,c__4384__auto__);
var b__12323 = cljs.core.chunk_buffer.call(null,size__4385__auto__);
if((function (){var i__12322 = (0);
while(true){
if((i__12322 < size__4385__auto__)){
var i = cljs.core._nth.call(null,c__4384__auto__,i__12322);
cljs.core.chunk_append.call(null,b__12323,farn.gfx.get_texture.call(null,cljs.core.keyword.call(null,[cljs.core.str("static-tree-"),cljs.core.str((i + (1)))].join(''))));

var G__13781 = (i__12322 + (1));
i__12322 = G__13781;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12323),iter__12320.call(null,cljs.core.chunk_rest.call(null,s__12321__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12323),null);
}
} else {
var i = cljs.core.first.call(null,s__12321__$2);
return cljs.core.cons.call(null,farn.gfx.get_texture.call(null,cljs.core.keyword.call(null,[cljs.core.str("static-tree-"),cljs.core.str((i + (1)))].join(''))),iter__12320.call(null,cljs.core.rest.call(null,s__12321__$2)));
}
} else {
return null;
}
break;
}
});})(player_stars_text,player_standing_texs,player_shadow,obstacle_types,player_standing_sway,loader,player_walking_texs,shadow_tex,_,tex,lobster_big,star_tex,pickup_textures,perlin_channel,title_text,floor_objects,tilemap,varela,wait,player,player_stars_icon,inst_12281,inst_12286,inst_12278,inst_12268,inst_12306,inst_12319,inst_12274,inst_12305,inst_12333,inst_12307,inst_12300,inst_12285,inst_12326,inst_12282,inst_12316,inst_12269,inst_12310,inst_12283,inst_12297,inst_12287,inst_12284,inst_12275,inst_12313,inst_12281__$1,inst_12282__$1,inst_12283__$1,inst_12284__$1,inst_12285__$1,inst_12286__$1,inst_12287__$1,inst_12292,inst_12293,inst_12294,inst_12295,inst_12296,inst_12297__$1,inst_12298,inst_12299,inst_12300__$1,inst_12301,inst_12302,inst_12303,inst_12304,inst_12305__$1,inst_12306__$1,inst_12307__$1,inst_12308,inst_12309,inst_12310__$1,inst_12311,inst_12312,inst_12313__$1,inst_12314,inst_12315,inst_12316__$1,inst_12317,inst_12318,inst_12319__$1,state_val_13313,c__6459__auto___13746))
,null,null));
});
;})(player_stars_text,player_standing_texs,player_shadow,obstacle_types,player_standing_sway,loader,player_walking_texs,shadow_tex,_,tex,lobster_big,star_tex,pickup_textures,perlin_channel,title_text,floor_objects,tilemap,varela,wait,player,player_stars_icon,inst_12281,inst_12286,inst_12278,inst_12268,inst_12306,inst_12319,inst_12274,inst_12305,inst_12333,inst_12307,inst_12300,inst_12285,inst_12326,inst_12282,inst_12316,inst_12269,inst_12310,inst_12283,inst_12297,inst_12287,inst_12284,inst_12275,inst_12313,inst_12281__$1,inst_12282__$1,inst_12283__$1,inst_12284__$1,inst_12285__$1,inst_12286__$1,inst_12287__$1,inst_12292,inst_12293,inst_12294,inst_12295,inst_12296,inst_12297__$1,inst_12298,inst_12299,inst_12300__$1,inst_12301,inst_12302,inst_12303,inst_12304,inst_12305__$1,inst_12306__$1,inst_12307__$1,inst_12308,inst_12309,inst_12310__$1,inst_12311,inst_12312,inst_12313__$1,inst_12314,inst_12315,inst_12316__$1,inst_12317,inst_12318,inst_12319__$1,state_val_13313,c__6459__auto___13746))
})();
var inst_12325 = cljs.core.range.call(null,(10));
var inst_12326__$1 = inst_12324.call(null,inst_12325);
var inst_12331 = (function (){var player_stars_text = inst_12310__$1;
var player_standing_texs = inst_12297__$1;
var player_shadow = inst_12287__$1;
var obstacle_types = inst_12319__$1;
var trees = inst_12326__$1;
var player_standing_sway = inst_12300__$1;
var loader = inst_12268;
var player_walking_texs = inst_12305__$1;
var shadow_tex = inst_12286__$1;
var _ = inst_12282__$1;
var tex = inst_12284__$1;
var lobster_big = inst_12274;
var star_tex = inst_12306__$1;
var pickup_textures = inst_12313__$1;
var perlin_channel = inst_12269;
var title_text = inst_12283__$1;
var floor_objects = inst_12316__$1;
var tilemap = inst_12281__$1;
var varela = inst_12275;
var wait = inst_12278;
var player = inst_12285__$1;
var player_stars_icon = inst_12307__$1;
return ((function (player_stars_text,player_standing_texs,player_shadow,obstacle_types,trees,player_standing_sway,loader,player_walking_texs,shadow_tex,_,tex,lobster_big,star_tex,pickup_textures,perlin_channel,title_text,floor_objects,tilemap,varela,wait,player,player_stars_icon,inst_12281,inst_12286,inst_12278,inst_12268,inst_12306,inst_12319,inst_12274,inst_12305,inst_12333,inst_12307,inst_12300,inst_12285,inst_12326,inst_12282,inst_12316,inst_12269,inst_12310,inst_12283,inst_12297,inst_12287,inst_12284,inst_12275,inst_12313,inst_12281__$1,inst_12282__$1,inst_12283__$1,inst_12284__$1,inst_12285__$1,inst_12286__$1,inst_12287__$1,inst_12292,inst_12293,inst_12294,inst_12295,inst_12296,inst_12297__$1,inst_12298,inst_12299,inst_12300__$1,inst_12301,inst_12302,inst_12303,inst_12304,inst_12305__$1,inst_12306__$1,inst_12307__$1,inst_12308,inst_12309,inst_12310__$1,inst_12311,inst_12312,inst_12313__$1,inst_12314,inst_12315,inst_12316__$1,inst_12317,inst_12318,inst_12319__$1,inst_12324,inst_12325,inst_12326__$1,state_val_13313,c__6459__auto___13746){
return (function iter__12327(s__12328){
return (new cljs.core.LazySeq(null,((function (player_stars_text,player_standing_texs,player_shadow,obstacle_types,trees,player_standing_sway,loader,player_walking_texs,shadow_tex,_,tex,lobster_big,star_tex,pickup_textures,perlin_channel,title_text,floor_objects,tilemap,varela,wait,player,player_stars_icon,inst_12281,inst_12286,inst_12278,inst_12268,inst_12306,inst_12319,inst_12274,inst_12305,inst_12333,inst_12307,inst_12300,inst_12285,inst_12326,inst_12282,inst_12316,inst_12269,inst_12310,inst_12283,inst_12297,inst_12287,inst_12284,inst_12275,inst_12313,inst_12281__$1,inst_12282__$1,inst_12283__$1,inst_12284__$1,inst_12285__$1,inst_12286__$1,inst_12287__$1,inst_12292,inst_12293,inst_12294,inst_12295,inst_12296,inst_12297__$1,inst_12298,inst_12299,inst_12300__$1,inst_12301,inst_12302,inst_12303,inst_12304,inst_12305__$1,inst_12306__$1,inst_12307__$1,inst_12308,inst_12309,inst_12310__$1,inst_12311,inst_12312,inst_12313__$1,inst_12314,inst_12315,inst_12316__$1,inst_12317,inst_12318,inst_12319__$1,inst_12324,inst_12325,inst_12326__$1,state_val_13313,c__6459__auto___13746){
return (function (){
var s__12328__$1 = s__12328;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__12328__$1);
if(temp__4126__auto__){
var s__12328__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12328__$2)){
var c__4384__auto__ = cljs.core.chunk_first.call(null,s__12328__$2);
var size__4385__auto__ = cljs.core.count.call(null,c__4384__auto__);
var b__12330 = cljs.core.chunk_buffer.call(null,size__4385__auto__);
if((function (){var i__12329 = (0);
while(true){
if((i__12329 < size__4385__auto__)){
var i = cljs.core._nth.call(null,c__4384__auto__,i__12329);
cljs.core.chunk_append.call(null,b__12330,farn.gfx.get_texture.call(null,cljs.core.keyword.call(null,[cljs.core.str("static-tuft-"),cljs.core.str((i + (1)))].join(''))));

var G__13782 = (i__12329 + (1));
i__12329 = G__13782;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12330),iter__12327.call(null,cljs.core.chunk_rest.call(null,s__12328__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12330),null);
}
} else {
var i = cljs.core.first.call(null,s__12328__$2);
return cljs.core.cons.call(null,farn.gfx.get_texture.call(null,cljs.core.keyword.call(null,[cljs.core.str("static-tuft-"),cljs.core.str((i + (1)))].join(''))),iter__12327.call(null,cljs.core.rest.call(null,s__12328__$2)));
}
} else {
return null;
}
break;
}
});})(player_stars_text,player_standing_texs,player_shadow,obstacle_types,trees,player_standing_sway,loader,player_walking_texs,shadow_tex,_,tex,lobster_big,star_tex,pickup_textures,perlin_channel,title_text,floor_objects,tilemap,varela,wait,player,player_stars_icon,inst_12281,inst_12286,inst_12278,inst_12268,inst_12306,inst_12319,inst_12274,inst_12305,inst_12333,inst_12307,inst_12300,inst_12285,inst_12326,inst_12282,inst_12316,inst_12269,inst_12310,inst_12283,inst_12297,inst_12287,inst_12284,inst_12275,inst_12313,inst_12281__$1,inst_12282__$1,inst_12283__$1,inst_12284__$1,inst_12285__$1,inst_12286__$1,inst_12287__$1,inst_12292,inst_12293,inst_12294,inst_12295,inst_12296,inst_12297__$1,inst_12298,inst_12299,inst_12300__$1,inst_12301,inst_12302,inst_12303,inst_12304,inst_12305__$1,inst_12306__$1,inst_12307__$1,inst_12308,inst_12309,inst_12310__$1,inst_12311,inst_12312,inst_12313__$1,inst_12314,inst_12315,inst_12316__$1,inst_12317,inst_12318,inst_12319__$1,inst_12324,inst_12325,inst_12326__$1,state_val_13313,c__6459__auto___13746))
,null,null));
});
;})(player_stars_text,player_standing_texs,player_shadow,obstacle_types,trees,player_standing_sway,loader,player_walking_texs,shadow_tex,_,tex,lobster_big,star_tex,pickup_textures,perlin_channel,title_text,floor_objects,tilemap,varela,wait,player,player_stars_icon,inst_12281,inst_12286,inst_12278,inst_12268,inst_12306,inst_12319,inst_12274,inst_12305,inst_12333,inst_12307,inst_12300,inst_12285,inst_12326,inst_12282,inst_12316,inst_12269,inst_12310,inst_12283,inst_12297,inst_12287,inst_12284,inst_12275,inst_12313,inst_12281__$1,inst_12282__$1,inst_12283__$1,inst_12284__$1,inst_12285__$1,inst_12286__$1,inst_12287__$1,inst_12292,inst_12293,inst_12294,inst_12295,inst_12296,inst_12297__$1,inst_12298,inst_12299,inst_12300__$1,inst_12301,inst_12302,inst_12303,inst_12304,inst_12305__$1,inst_12306__$1,inst_12307__$1,inst_12308,inst_12309,inst_12310__$1,inst_12311,inst_12312,inst_12313__$1,inst_12314,inst_12315,inst_12316__$1,inst_12317,inst_12318,inst_12319__$1,inst_12324,inst_12325,inst_12326__$1,state_val_13313,c__6459__auto___13746))
})();
var inst_12332 = cljs.core.range.call(null,(3));
var inst_12333__$1 = inst_12331.call(null,inst_12332);
var inst_12336 = (function (){var player_stars_text = inst_12310__$1;
var player_standing_texs = inst_12297__$1;
var player_shadow = inst_12287__$1;
var obstacle_types = inst_12319__$1;
var trees = inst_12326__$1;
var player_standing_sway = inst_12300__$1;
var loader = inst_12268;
var player_walking_texs = inst_12305__$1;
var shadow_tex = inst_12286__$1;
var _ = inst_12282__$1;
var tex = inst_12284__$1;
var lobster_big = inst_12274;
var star_tex = inst_12306__$1;
var tufts = inst_12333__$1;
var pickup_textures = inst_12313__$1;
var perlin_channel = inst_12269;
var title_text = inst_12283__$1;
var floor_objects = inst_12316__$1;
var tilemap = inst_12281__$1;
var varela = inst_12275;
var wait = inst_12278;
var player = inst_12285__$1;
var player_stars_icon = inst_12307__$1;
return ((function (player_stars_text,player_standing_texs,player_shadow,obstacle_types,trees,player_standing_sway,loader,player_walking_texs,shadow_tex,_,tex,lobster_big,star_tex,tufts,pickup_textures,perlin_channel,title_text,floor_objects,tilemap,varela,wait,player,player_stars_icon,inst_12281,inst_12286,inst_12278,inst_12268,inst_12306,inst_12319,inst_12274,inst_12305,inst_12333,inst_12307,inst_12300,inst_12285,inst_12326,inst_12282,inst_12316,inst_12269,inst_12310,inst_12283,inst_12297,inst_12287,inst_12284,inst_12275,inst_12313,inst_12281__$1,inst_12282__$1,inst_12283__$1,inst_12284__$1,inst_12285__$1,inst_12286__$1,inst_12287__$1,inst_12292,inst_12293,inst_12294,inst_12295,inst_12296,inst_12297__$1,inst_12298,inst_12299,inst_12300__$1,inst_12301,inst_12302,inst_12303,inst_12304,inst_12305__$1,inst_12306__$1,inst_12307__$1,inst_12308,inst_12309,inst_12310__$1,inst_12311,inst_12312,inst_12313__$1,inst_12314,inst_12315,inst_12316__$1,inst_12317,inst_12318,inst_12319__$1,inst_12324,inst_12325,inst_12326__$1,inst_12331,inst_12332,inst_12333__$1,state_val_13313,c__6459__auto___13746){
return (function() { 
var G__13783__delegate = function (p__12334,spread,p__12335){
var vec__13367 = p__12334;
var x = cljs.core.nth.call(null,vec__13367,(0),null);
var y = cljs.core.nth.call(null,vec__13367,(1),null);
var vec__13368 = p__12335;
var force_type = cljs.core.nth.call(null,vec__13368,(0),null);
var force_exclusion_zone = cljs.core.nth.call(null,vec__13368,(1),null);
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
var G__13783 = function (p__12334,spread,var_args){
var p__12335 = null;
if (arguments.length > 2) {
  p__12335 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__13783__delegate.call(this,p__12334,spread,p__12335);};
G__13783.cljs$lang$maxFixedArity = 2;
G__13783.cljs$lang$applyTo = (function (arglist__13784){
var p__12334 = cljs.core.first(arglist__13784);
arglist__13784 = cljs.core.next(arglist__13784);
var spread = cljs.core.first(arglist__13784);
var p__12335 = cljs.core.rest(arglist__13784);
return G__13783__delegate(p__12334,spread,p__12335);
});
G__13783.cljs$core$IFn$_invoke$arity$variadic = G__13783__delegate;
return G__13783;
})()
;
;})(player_stars_text,player_standing_texs,player_shadow,obstacle_types,trees,player_standing_sway,loader,player_walking_texs,shadow_tex,_,tex,lobster_big,star_tex,tufts,pickup_textures,perlin_channel,title_text,floor_objects,tilemap,varela,wait,player,player_stars_icon,inst_12281,inst_12286,inst_12278,inst_12268,inst_12306,inst_12319,inst_12274,inst_12305,inst_12333,inst_12307,inst_12300,inst_12285,inst_12326,inst_12282,inst_12316,inst_12269,inst_12310,inst_12283,inst_12297,inst_12287,inst_12284,inst_12275,inst_12313,inst_12281__$1,inst_12282__$1,inst_12283__$1,inst_12284__$1,inst_12285__$1,inst_12286__$1,inst_12287__$1,inst_12292,inst_12293,inst_12294,inst_12295,inst_12296,inst_12297__$1,inst_12298,inst_12299,inst_12300__$1,inst_12301,inst_12302,inst_12303,inst_12304,inst_12305__$1,inst_12306__$1,inst_12307__$1,inst_12308,inst_12309,inst_12310__$1,inst_12311,inst_12312,inst_12313__$1,inst_12314,inst_12315,inst_12316__$1,inst_12317,inst_12318,inst_12319__$1,inst_12324,inst_12325,inst_12326__$1,inst_12331,inst_12332,inst_12333__$1,state_val_13313,c__6459__auto___13746))
})();
var inst_12340 = cljs.core.PersistentVector.EMPTY;
var inst_12341 = cljs.core.range.call(null,(1),(10));
var inst_12342 = cljs.core.nth.call(null,inst_12341,(0),null);
var inst_12343 = cljs.core.nthnext.call(null,inst_12341,(1));
var inst_12344 = inst_12340;
var inst_12345 = inst_12341;
var state_13312__$1 = (function (){var statearr_13369 = state_13312;
(statearr_13369[(34)] = inst_12281__$1);

(statearr_13369[(35)] = inst_12286__$1);

(statearr_13369[(38)] = inst_12306__$1);

(statearr_13369[(40)] = inst_12319__$1);

(statearr_13369[(100)] = inst_12343);

(statearr_13369[(45)] = inst_12305__$1);

(statearr_13369[(49)] = inst_12333__$1);

(statearr_13369[(50)] = inst_12307__$1);

(statearr_13369[(53)] = inst_12300__$1);

(statearr_13369[(58)] = inst_12285__$1);

(statearr_13369[(59)] = inst_12326__$1);

(statearr_13369[(68)] = inst_12282__$1);

(statearr_13369[(69)] = inst_12316__$1);

(statearr_13369[(101)] = inst_12342);

(statearr_13369[(71)] = inst_12310__$1);

(statearr_13369[(72)] = inst_12283__$1);

(statearr_13369[(76)] = inst_12297__$1);

(statearr_13369[(77)] = inst_12287__$1);

(statearr_13369[(78)] = inst_12284__$1);

(statearr_13369[(102)] = inst_12344);

(statearr_13369[(103)] = inst_12345);

(statearr_13369[(85)] = inst_12313__$1);

(statearr_13369[(86)] = inst_12336);

return statearr_13369;
})();
var statearr_13370_13785 = state_13312__$1;
(statearr_13370_13785[(2)] = null);

(statearr_13370_13785[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13313 === (77))){
var inst_13026 = (state_13312[(12)]);
var inst_13027 = (state_13312[(13)]);
var inst_13029 = (inst_13027 < inst_13026);
var inst_13030 = inst_13029;
var state_13312__$1 = state_13312;
if(cljs.core.truth_(inst_13030)){
var statearr_13371_13786 = state_13312__$1;
(statearr_13371_13786[(1)] = (79));

} else {
var statearr_13372_13787 = state_13312__$1;
(statearr_13372_13787[(1)] = (80));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13313 === (106))){
var inst_12781 = (state_13312[(20)]);
var inst_12792 = (state_13312[(57)]);
var inst_12791 = (state_13312[(21)]);
var inst_12782 = (state_13312[(23)]);
var inst_12788 = (state_13312[(24)]);
var inst_13235 = (state_13312[(104)]);
var inst_13224 = (state_13312[(2)]);
var inst_13225 = farn.sprite.set_pivot_BANG_.call(null,farn.core.main_stage,inst_12781,inst_12782);
var inst_13226 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_13227 = [inst_12781,inst_12782];
var inst_13228 = (new cljs.core.PersistentVector(null,2,(5),inst_13226,inst_13227,null));
var inst_13229 = cljs.core.reset_BANG_.call(null,farn.core.last_player_position,inst_13228);
var inst_13230 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_13231 = [inst_12788,inst_12791];
var inst_13232 = (new cljs.core.PersistentVector(null,2,(5),inst_13230,inst_13231,null));
var inst_13233 = cljs.core.reset_BANG_.call(null,farn.core.last_player_rh,inst_13232);
var inst_13234 = Math.abs.call(null,inst_12792);
var inst_13235__$1 = (inst_13234 > (2));
var state_13312__$1 = (function (){var statearr_13373 = state_13312;
(statearr_13373[(105)] = inst_13225);

(statearr_13373[(106)] = inst_13233);

(statearr_13373[(107)] = inst_13229);

(statearr_13373[(108)] = inst_13224);

(statearr_13373[(104)] = inst_13235__$1);

return statearr_13373;
})();
if(cljs.core.truth_(inst_13235__$1)){
var statearr_13374_13788 = state_13312__$1;
(statearr_13374_13788[(1)] = (116));

} else {
var statearr_13375_13789 = state_13312__$1;
(statearr_13375_13789[(1)] = (117));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13313 === (119))){
var inst_13239 = (state_13312[(109)]);
var state_13312__$1 = state_13312;
var statearr_13376_13790 = state_13312__$1;
(statearr_13376_13790[(2)] = inst_13239);

(statearr_13376_13790[(1)] = (121));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13313 === (95))){
var inst_13076 = (state_13312[(99)]);
var inst_13140 = (state_13312[(2)]);
var inst_13141 = cljs.core.next.call(null,inst_13076);
var inst_13009 = inst_13141;
var inst_13010 = null;
var inst_13011 = (0);
var inst_13012 = (0);
var state_13312__$1 = (function (){var statearr_13377 = state_13312;
(statearr_13377[(110)] = inst_13009);

(statearr_13377[(27)] = inst_13011);

(statearr_13377[(9)] = inst_13012);

(statearr_13377[(111)] = inst_13140);

(statearr_13377[(10)] = inst_13010);

return statearr_13377;
})();
var statearr_13378_13791 = state_13312__$1;
(statearr_13378_13791[(2)] = null);

(statearr_13378_13791[(1)] = (72));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13313 === (54))){
var inst_12475 = (state_13312[(8)]);
var inst_12286 = (state_13312[(35)]);
var inst_12306 = (state_13312[(38)]);
var inst_12764 = (state_13312[(54)]);
var inst_12859 = (state_13312[(112)]);
var inst_12392 = (state_13312[(22)]);
var inst_12391 = (state_13312[(80)]);
var inst_12918 = (state_13312[(93)]);
var inst_12925 = new cljs.core.Keyword(null,"sprite","sprite",172516848).cljs$core$IFn$_invoke$arity$1(inst_12918);
var inst_12926 = farn.core.main_stage.removeChild(inst_12925);
var inst_12927 = new cljs.core.Keyword(null,"shadow","shadow",873231803).cljs$core$IFn$_invoke$arity$1(inst_12918);
var inst_12928 = farn.core.main_stage.removeChild(inst_12927);
var inst_12929 = cljs.core.reset_BANG_.call(null,farn.core.player_animation,new cljs.core.Keyword(null,"standing","standing",-1248340762));
var inst_12931 = cljs.core.nth.call(null,inst_12764,(0),null);
var inst_12932 = cljs.core.nth.call(null,inst_12764,(1),null);
var inst_12933 = farn.core.game_completed.call(null,farn.core.main_stage,inst_12306,inst_12286,inst_12931,inst_12932,inst_12392,inst_12859,inst_12475,inst_12391);
var state_13312__$1 = (function (){var statearr_13379 = state_13312;
(statearr_13379[(113)] = inst_12929);

(statearr_13379[(114)] = inst_12928);

(statearr_13379[(115)] = inst_12926);

return statearr_13379;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13312__$1,(57),inst_12933);
} else {
if((state_val_13313 === (92))){
var inst_12475 = (state_13312[(8)]);
var inst_13076 = (state_13312[(99)]);
var inst_13085 = cljs.core.first.call(null,inst_13076);
var inst_13090 = inst_12475.call(null,inst_13085);
var inst_13091 = cljs.core.seq.call(null,inst_13090);
var inst_13092 = inst_13091;
var inst_13093 = null;
var inst_13094 = (0);
var inst_13095 = (0);
var state_13312__$1 = (function (){var statearr_13380 = state_13312;
(statearr_13380[(89)] = inst_13095);

(statearr_13380[(90)] = inst_13094);

(statearr_13380[(91)] = inst_13093);

(statearr_13380[(92)] = inst_13092);

return statearr_13380;
})();
var statearr_13381_13792 = state_13312__$1;
(statearr_13381_13792[(2)] = null);

(statearr_13381_13792[(1)] = (94));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13313 === (141))){
var inst_12766 = (state_13312[(61)]);
var inst_13300 = (inst_12766 - farn.core.player_turn_speed);
var state_13312__$1 = state_13312;
var statearr_13382_13793 = state_13312__$1;
(statearr_13382_13793[(2)] = inst_13300);

(statearr_13382_13793[(1)] = (143));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13313 === (137))){
var inst_13288 = (state_13312[(2)]);
var state_13312__$1 = state_13312;
var statearr_13383_13794 = state_13312__$1;
(statearr_13383_13794[(2)] = inst_13288);

(statearr_13383_13794[(1)] = (134));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13313 === (104))){
var inst_13133 = (state_13312[(2)]);
var state_13312__$1 = state_13312;
var statearr_13384_13795 = state_13312__$1;
(statearr_13384_13795[(2)] = inst_13133);

(statearr_13384_13795[(1)] = (101));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13313 === (15))){
var inst_12388 = (state_13312[(2)]);
var state_13312__$1 = state_13312;
var statearr_13385_13796 = state_13312__$1;
(statearr_13385_13796[(2)] = inst_12388);

(statearr_13385_13796[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13313 === (48))){
var inst_12909 = (state_13312[(116)]);
var inst_12913 = cljs.core.chunk_first.call(null,inst_12909);
var inst_12914 = cljs.core.chunk_rest.call(null,inst_12909);
var inst_12915 = cljs.core.count.call(null,inst_12913);
var inst_12866 = inst_12914;
var inst_12867 = inst_12913;
var inst_12868 = inst_12915;
var inst_12869 = (0);
var state_13312__$1 = (function (){var statearr_13386 = state_13312;
(statearr_13386[(117)] = inst_12868);

(statearr_13386[(118)] = inst_12867);

(statearr_13386[(119)] = inst_12869);

(statearr_13386[(120)] = inst_12866);

return statearr_13386;
})();
var statearr_13387_13797 = state_13312__$1;
(statearr_13387_13797[(2)] = null);

(statearr_13387_13797[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13313 === (50))){
var inst_12953 = (state_13312[(2)]);
var state_13312__$1 = state_13312;
var statearr_13388_13798 = state_13312__$1;
(statearr_13388_13798[(2)] = inst_12953);

(statearr_13388_13798[(1)] = (47));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13313 === (116))){
var inst_13235 = (state_13312[(104)]);
var state_13312__$1 = state_13312;
var statearr_13389_13799 = state_13312__$1;
(statearr_13389_13799[(2)] = inst_13235);

(statearr_13389_13799[(1)] = (118));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13313 === (75))){
var inst_13009 = (state_13312[(110)]);
var inst_13076 = (state_13312[(99)]);
var inst_13076__$1 = cljs.core.seq.call(null,inst_13009);
var state_13312__$1 = (function (){var statearr_13390 = state_13312;
(statearr_13390[(99)] = inst_13076__$1);

return statearr_13390;
})();
if(inst_13076__$1){
var statearr_13391_13800 = state_13312__$1;
(statearr_13391_13800[(1)] = (88));

} else {
var statearr_13392_13801 = state_13312__$1;
(statearr_13392_13801[(1)] = (89));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13313 === (99))){
var inst_13112 = (state_13312[(88)]);
var inst_13114 = cljs.core.chunked_seq_QMARK_.call(null,inst_13112);
var state_13312__$1 = state_13312;
if(inst_13114){
var statearr_13393_13802 = state_13312__$1;
(statearr_13393_13802[(1)] = (102));

} else {
var statearr_13394_13803 = state_13312__$1;
(statearr_13394_13803[(1)] = (103));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13313 === (21))){
var state_13312__$1 = state_13312;
var statearr_13395_13804 = state_13312__$1;
(statearr_13395_13804[(2)] = null);

(statearr_13395_13804[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13313 === (31))){
var inst_12844 = (state_13312[(64)]);
var state_13312__$1 = state_13312;
var statearr_13396_13805 = state_13312__$1;
(statearr_13396_13805[(2)] = inst_12844);

(statearr_13396_13805[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13313 === (113))){
var inst_13187 = (state_13312[(15)]);
var inst_13191 = cljs.core.chunk_first.call(null,inst_13187);
var inst_13192 = cljs.core.chunk_rest.call(null,inst_13187);
var inst_13193 = cljs.core.count.call(null,inst_13191);
var inst_13158 = inst_13192;
var inst_13159 = inst_13191;
var inst_13160 = inst_13193;
var inst_13161 = (0);
var state_13312__$1 = (function (){var statearr_13397 = state_13312;
(statearr_13397[(121)] = inst_13159);

(statearr_13397[(122)] = inst_13161);

(statearr_13397[(123)] = inst_13160);

(statearr_13397[(124)] = inst_13158);

return statearr_13397;
})();
var statearr_13398_13806 = state_13312__$1;
(statearr_13398_13806[(2)] = null);

(statearr_13398_13806[(1)] = (105));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13313 === (32))){
var inst_12857 = (state_13312[(2)]);
var state_13312__$1 = state_13312;
var statearr_13399_13807 = state_13312__$1;
(statearr_13399_13807[(2)] = inst_12857);

(statearr_13399_13807[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13313 === (136))){
var inst_12765 = (state_13312[(44)]);
var inst_13285 = (inst_12765 * farn.core.player_drag);
var inst_13286 = ((inst_13285 > (0)) ? inst_13285 : (0));
var state_13312__$1 = state_13312;
var statearr_13403_13808 = state_13312__$1;
(statearr_13403_13808[(2)] = inst_13286);

(statearr_13403_13808[(1)] = (137));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13313 === (139))){
var inst_13298 = farn.events.is_pressed_QMARK_.call(null,new cljs.core.Keyword(null,"right","right",-452581833));
var state_13312__$1 = state_13312;
if(cljs.core.truth_(inst_13298)){
var statearr_13404_13809 = state_13312__$1;
(statearr_13404_13809[(1)] = (141));

} else {
var statearr_13405_13810 = state_13312__$1;
(statearr_13405_13810[(1)] = (142));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13313 === (40))){
var inst_12868 = (state_13312[(117)]);
var inst_12867 = (state_13312[(118)]);
var inst_12869 = (state_13312[(119)]);
var inst_12866 = (state_13312[(120)]);
var inst_12905 = (state_13312[(2)]);
var inst_12906 = (inst_12869 + (1));
var tmp13400 = inst_12868;
var tmp13401 = inst_12867;
var tmp13402 = inst_12866;
var inst_12866__$1 = tmp13402;
var inst_12867__$1 = tmp13401;
var inst_12868__$1 = tmp13400;
var inst_12869__$1 = inst_12906;
var state_13312__$1 = (function (){var statearr_13406 = state_13312;
(statearr_13406[(117)] = inst_12868__$1);

(statearr_13406[(118)] = inst_12867__$1);

(statearr_13406[(119)] = inst_12869__$1);

(statearr_13406[(125)] = inst_12905);

(statearr_13406[(120)] = inst_12866__$1);

return statearr_13406;
})();
var statearr_13407_13811 = state_13312__$1;
(statearr_13407_13811[(2)] = null);

(statearr_13407_13811[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13313 === (129))){
var state_13312__$1 = state_13312;
var statearr_13408_13812 = state_13312__$1;
(statearr_13408_13812[(2)] = (0));

(statearr_13408_13812[(1)] = (131));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13313 === (91))){
var inst_13076 = (state_13312[(99)]);
var inst_13080 = cljs.core.chunk_first.call(null,inst_13076);
var inst_13081 = cljs.core.chunk_rest.call(null,inst_13076);
var inst_13082 = cljs.core.count.call(null,inst_13080);
var inst_13009 = inst_13081;
var inst_13010 = inst_13080;
var inst_13011 = inst_13082;
var inst_13012 = (0);
var state_13312__$1 = (function (){var statearr_13409 = state_13312;
(statearr_13409[(110)] = inst_13009);

(statearr_13409[(27)] = inst_13011);

(statearr_13409[(9)] = inst_13012);

(statearr_13409[(10)] = inst_13010);

return statearr_13409;
})();
var statearr_13410_13813 = state_13312__$1;
(statearr_13410_13813[(2)] = null);

(statearr_13410_13813[(1)] = (72));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13313 === (117))){
var inst_13239 = (state_13312[(109)]);
var inst_12793 = (state_13312[(51)]);
var inst_13238 = Math.abs.call(null,inst_12793);
var inst_13239__$1 = (inst_13238 > (2));
var state_13312__$1 = (function (){var statearr_13411 = state_13312;
(statearr_13411[(109)] = inst_13239__$1);

return statearr_13411;
})();
if(cljs.core.truth_(inst_13239__$1)){
var statearr_13412_13814 = state_13312__$1;
(statearr_13412_13814[(1)] = (119));

} else {
var statearr_13413_13815 = state_13312__$1;
(statearr_13413_13815[(1)] = (120));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13313 === (108))){
var inst_13187 = (state_13312[(15)]);
var inst_13158 = (state_13312[(124)]);
var inst_13187__$1 = cljs.core.seq.call(null,inst_13158);
var state_13312__$1 = (function (){var statearr_13414 = state_13312;
(statearr_13414[(15)] = inst_13187__$1);

return statearr_13414;
})();
if(inst_13187__$1){
var statearr_13415_13816 = state_13312__$1;
(statearr_13415_13816[(1)] = (110));

} else {
var statearr_13416_13817 = state_13312__$1;
(statearr_13416_13817[(1)] = (111));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13313 === (56))){
var inst_12946 = (state_13312[(2)]);
var state_13312__$1 = state_13312;
var statearr_13417_13818 = state_13312__$1;
(statearr_13417_13818[(2)] = inst_12946);

(statearr_13417_13818[(1)] = (53));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13313 === (33))){
var inst_12868 = (state_13312[(117)]);
var inst_12869 = (state_13312[(119)]);
var inst_12871 = (inst_12869 < inst_12868);
var inst_12872 = inst_12871;
var state_13312__$1 = state_13312;
if(cljs.core.truth_(inst_12872)){
var statearr_13418_13819 = state_13312__$1;
(statearr_13418_13819[(1)] = (35));

} else {
var statearr_13419_13820 = state_13312__$1;
(statearr_13419_13820[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13313 === (13))){
var inst_12375 = (state_13312[(126)]);
var inst_12380 = [cljs.core.str("sfx/boom-"),cljs.core.str(inst_12375),cljs.core.str(".ogg")].join('');
var inst_12381 = farn.sound.load_sound.call(null,inst_12380);
var state_13312__$1 = state_13312;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13312__$1,(16),inst_12381);
} else {
if((state_val_13313 === (22))){
var inst_12475 = (state_13312[(8)]);
var inst_12281 = (state_13312[(34)]);
var inst_12286 = (state_13312[(35)]);
var inst_12795 = (state_13312[(36)]);
var inst_12278 = (state_13312[(37)]);
var inst_12268 = (state_13312[(29)]);
var inst_12306 = (state_13312[(38)]);
var inst_12768 = (state_13312[(39)]);
var inst_12319 = (state_13312[(40)]);
var inst_12474 = (state_13312[(41)]);
var inst_12274 = (state_13312[(42)]);
var inst_12796 = (state_13312[(43)]);
var inst_12765 = (state_13312[(44)]);
var inst_12305 = (state_13312[(45)]);
var inst_12390 = (state_13312[(46)]);
var inst_12467 = (state_13312[(47)]);
var inst_12781 = (state_13312[(20)]);
var inst_12763 = (state_13312[(48)]);
var inst_12333 = (state_13312[(49)]);
var inst_12307 = (state_13312[(50)]);
var inst_12793 = (state_13312[(51)]);
var inst_12783 = (state_13312[(52)]);
var inst_12300 = (state_13312[(53)]);
var inst_12764 = (state_13312[(54)]);
var inst_12363 = (state_13312[(55)]);
var inst_12797 = (state_13312[(56)]);
var inst_12792 = (state_13312[(57)]);
var inst_12285 = (state_13312[(58)]);
var inst_12326 = (state_13312[(59)]);
var inst_12791 = (state_13312[(21)]);
var inst_12395 = (state_13312[(60)]);
var inst_12766 = (state_13312[(61)]);
var inst_12282 = (state_13312[(68)]);
var inst_12769 = (state_13312[(7)]);
var inst_12316 = (state_13312[(69)]);
var inst_12392 = (state_13312[(22)]);
var inst_12808 = (state_13312[(70)]);
var inst_12269 = (state_13312[(32)]);
var inst_12782 = (state_13312[(23)]);
var inst_12310 = (state_13312[(71)]);
var inst_12283 = (state_13312[(72)]);
var inst_12794 = (state_13312[(73)]);
var inst_12479 = (state_13312[(74)]);
var inst_12297 = (state_13312[(76)]);
var inst_12287 = (state_13312[(77)]);
var inst_12284 = (state_13312[(78)]);
var inst_12784 = (state_13312[(79)]);
var inst_12391 = (state_13312[(80)]);
var inst_12767 = (state_13312[(81)]);
var inst_12275 = (state_13312[(82)]);
var inst_12788 = (state_13312[(24)]);
var inst_12478 = (state_13312[(83)]);
var inst_12785 = (state_13312[(84)]);
var inst_12313 = (state_13312[(85)]);
var inst_12336 = (state_13312[(86)]);
var inst_12480 = (state_13312[(87)]);
var inst_12778 = (state_13312[(2)]);
var inst_12781__$1 = cljs.core.nth.call(null,inst_12764,(0),null);
var inst_12782__$1 = cljs.core.nth.call(null,inst_12764,(1),null);
var inst_12783__$1 = (inst_12766 + Math.PI);
var inst_12784__$1 = Math.cos.call(null,inst_12783__$1);
var inst_12785__$1 = Math.sin.call(null,inst_12783__$1);
var inst_12786 = ((2) * Math.PI);
var inst_12787 = (inst_12786 - inst_12783__$1);
var inst_12788__$1 = Math.cos.call(null,inst_12787);
var inst_12789 = ((2) * Math.PI);
var inst_12790 = (inst_12789 - inst_12783__$1);
var inst_12791__$1 = Math.sin.call(null,inst_12790);
var inst_12792__$1 = (inst_12765 * inst_12784__$1);
var inst_12793__$1 = (inst_12765 * inst_12785__$1);
var inst_12794__$1 = farn.core.main_stage.children.length;
var inst_12795__$1 = farn.spatial.which_cell.call(null,inst_12764,farn.core.cell_size);
var inst_12796__$1 = cljs.core.nth.call(null,inst_12795__$1,(0),null);
var inst_12797__$1 = cljs.core.nth.call(null,inst_12795__$1,(1),null);
var inst_12804 = (function (){var add_cell_BANG_ = inst_12479;
var depth_compare = inst_12391;
var vec__12779 = inst_12764;
var x = inst_12781__$1;
var player_stars_text = inst_12310;
var player_standing_texs = inst_12297;
var cells = inst_12767;
var player_shadow = inst_12287;
var player_cell = inst_12795__$1;
var vec__12780 = inst_12795__$1;
var close_QMARK_ = inst_12395;
var sprite_count = inst_12768;
var player_pos = inst_12478;
var calc_theta = inst_12783__$1;
var obstacle_types = inst_12319;
var polar_object_coords = inst_12392;
var trees = inst_12326;
var player_hit = inst_12769;
var old_sprite_count = inst_12794__$1;
var y = inst_12782__$1;
var player_standing_sway = inst_12300;
var player_cell_y = inst_12797__$1;
var player_cell_x = inst_12796__$1;
var game_sprites = inst_12474;
var loader = inst_12268;
var player_walking_texs = inst_12305;
var rhx = inst_12788__$1;
var rhy = inst_12791__$1;
var frame_num = inst_12763;
var shadow_tex = inst_12286;
var _ = inst_12282;
var tex = inst_12284;
var speed = inst_12765;
var hit_sfx = inst_12390;
var lobster_big = inst_12274;
var game_map = inst_12467;
var star_tex = inst_12306;
var pos = inst_12764;
var remove_cell_BANG_ = inst_12480;
var theta = inst_12766;
var tufts = inst_12333;
var game_space = inst_12475;
var pickup_textures = inst_12313;
var perlin_channel = inst_12269;
var title_text = inst_12283;
var vx = inst_12792__$1;
var floor_objects = inst_12316;
var pickup_sfx = inst_12363;
var tilemap = inst_12281;
var vy = inst_12793__$1;
var make_pickup = inst_12336;
var varela = inst_12275;
var hy = inst_12785__$1;
var wait = inst_12278;
var hx = inst_12784__$1;
var player = inst_12285;
var player_stars_icon = inst_12307;
return ((function (add_cell_BANG_,depth_compare,vec__12779,x,player_stars_text,player_standing_texs,cells,player_shadow,player_cell,vec__12780,close_QMARK_,sprite_count,player_pos,calc_theta,obstacle_types,polar_object_coords,trees,player_hit,old_sprite_count,y,player_standing_sway,player_cell_y,player_cell_x,game_sprites,loader,player_walking_texs,rhx,rhy,frame_num,shadow_tex,_,tex,speed,hit_sfx,lobster_big,game_map,star_tex,pos,remove_cell_BANG_,theta,tufts,game_space,pickup_textures,perlin_channel,title_text,vx,floor_objects,pickup_sfx,tilemap,vy,make_pickup,varela,hy,wait,hx,player,player_stars_icon,inst_12475,inst_12281,inst_12286,inst_12795,inst_12278,inst_12268,inst_12306,inst_12768,inst_12319,inst_12474,inst_12274,inst_12796,inst_12765,inst_12305,inst_12390,inst_12467,inst_12781,inst_12763,inst_12333,inst_12307,inst_12793,inst_12783,inst_12300,inst_12764,inst_12363,inst_12797,inst_12792,inst_12285,inst_12326,inst_12791,inst_12395,inst_12766,inst_12282,inst_12769,inst_12316,inst_12392,inst_12808,inst_12269,inst_12782,inst_12310,inst_12283,inst_12794,inst_12479,inst_12297,inst_12287,inst_12284,inst_12784,inst_12391,inst_12767,inst_12275,inst_12788,inst_12478,inst_12785,inst_12313,inst_12336,inst_12480,inst_12778,inst_12781__$1,inst_12782__$1,inst_12783__$1,inst_12784__$1,inst_12785__$1,inst_12786,inst_12787,inst_12788__$1,inst_12789,inst_12790,inst_12791__$1,inst_12792__$1,inst_12793__$1,inst_12794__$1,inst_12795__$1,inst_12796__$1,inst_12797__$1,state_val_13313,c__6459__auto___13746){
return (function iter__12798(s__12799){
return (new cljs.core.LazySeq(null,((function (add_cell_BANG_,depth_compare,vec__12779,x,player_stars_text,player_standing_texs,cells,player_shadow,player_cell,vec__12780,close_QMARK_,sprite_count,player_pos,calc_theta,obstacle_types,polar_object_coords,trees,player_hit,old_sprite_count,y,player_standing_sway,player_cell_y,player_cell_x,game_sprites,loader,player_walking_texs,rhx,rhy,frame_num,shadow_tex,_,tex,speed,hit_sfx,lobster_big,game_map,star_tex,pos,remove_cell_BANG_,theta,tufts,game_space,pickup_textures,perlin_channel,title_text,vx,floor_objects,pickup_sfx,tilemap,vy,make_pickup,varela,hy,wait,hx,player,player_stars_icon,inst_12475,inst_12281,inst_12286,inst_12795,inst_12278,inst_12268,inst_12306,inst_12768,inst_12319,inst_12474,inst_12274,inst_12796,inst_12765,inst_12305,inst_12390,inst_12467,inst_12781,inst_12763,inst_12333,inst_12307,inst_12793,inst_12783,inst_12300,inst_12764,inst_12363,inst_12797,inst_12792,inst_12285,inst_12326,inst_12791,inst_12395,inst_12766,inst_12282,inst_12769,inst_12316,inst_12392,inst_12808,inst_12269,inst_12782,inst_12310,inst_12283,inst_12794,inst_12479,inst_12297,inst_12287,inst_12284,inst_12784,inst_12391,inst_12767,inst_12275,inst_12788,inst_12478,inst_12785,inst_12313,inst_12336,inst_12480,inst_12778,inst_12781__$1,inst_12782__$1,inst_12783__$1,inst_12784__$1,inst_12785__$1,inst_12786,inst_12787,inst_12788__$1,inst_12789,inst_12790,inst_12791__$1,inst_12792__$1,inst_12793__$1,inst_12794__$1,inst_12795__$1,inst_12796__$1,inst_12797__$1,state_val_13313,c__6459__auto___13746){
return (function (){
var s__12799__$1 = s__12799;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__12799__$1);
if(temp__4126__auto__){
var xs__4624__auto__ = temp__4126__auto__;
var dx = cljs.core.first.call(null,xs__4624__auto__);
var iterys__4382__auto__ = ((function (s__12799__$1,dx,xs__4624__auto__,temp__4126__auto__,add_cell_BANG_,depth_compare,vec__12779,x,player_stars_text,player_standing_texs,cells,player_shadow,player_cell,vec__12780,close_QMARK_,sprite_count,player_pos,calc_theta,obstacle_types,polar_object_coords,trees,player_hit,old_sprite_count,y,player_standing_sway,player_cell_y,player_cell_x,game_sprites,loader,player_walking_texs,rhx,rhy,frame_num,shadow_tex,_,tex,speed,hit_sfx,lobster_big,game_map,star_tex,pos,remove_cell_BANG_,theta,tufts,game_space,pickup_textures,perlin_channel,title_text,vx,floor_objects,pickup_sfx,tilemap,vy,make_pickup,varela,hy,wait,hx,player,player_stars_icon,inst_12475,inst_12281,inst_12286,inst_12795,inst_12278,inst_12268,inst_12306,inst_12768,inst_12319,inst_12474,inst_12274,inst_12796,inst_12765,inst_12305,inst_12390,inst_12467,inst_12781,inst_12763,inst_12333,inst_12307,inst_12793,inst_12783,inst_12300,inst_12764,inst_12363,inst_12797,inst_12792,inst_12285,inst_12326,inst_12791,inst_12395,inst_12766,inst_12282,inst_12769,inst_12316,inst_12392,inst_12808,inst_12269,inst_12782,inst_12310,inst_12283,inst_12794,inst_12479,inst_12297,inst_12287,inst_12284,inst_12784,inst_12391,inst_12767,inst_12275,inst_12788,inst_12478,inst_12785,inst_12313,inst_12336,inst_12480,inst_12778,inst_12781__$1,inst_12782__$1,inst_12783__$1,inst_12784__$1,inst_12785__$1,inst_12786,inst_12787,inst_12788__$1,inst_12789,inst_12790,inst_12791__$1,inst_12792__$1,inst_12793__$1,inst_12794__$1,inst_12795__$1,inst_12796__$1,inst_12797__$1,state_val_13313,c__6459__auto___13746){
return (function iter__12800(s__12801){
return (new cljs.core.LazySeq(null,((function (s__12799__$1,dx,xs__4624__auto__,temp__4126__auto__,add_cell_BANG_,depth_compare,vec__12779,x,player_stars_text,player_standing_texs,cells,player_shadow,player_cell,vec__12780,close_QMARK_,sprite_count,player_pos,calc_theta,obstacle_types,polar_object_coords,trees,player_hit,old_sprite_count,y,player_standing_sway,player_cell_y,player_cell_x,game_sprites,loader,player_walking_texs,rhx,rhy,frame_num,shadow_tex,_,tex,speed,hit_sfx,lobster_big,game_map,star_tex,pos,remove_cell_BANG_,theta,tufts,game_space,pickup_textures,perlin_channel,title_text,vx,floor_objects,pickup_sfx,tilemap,vy,make_pickup,varela,hy,wait,hx,player,player_stars_icon,inst_12475,inst_12281,inst_12286,inst_12795,inst_12278,inst_12268,inst_12306,inst_12768,inst_12319,inst_12474,inst_12274,inst_12796,inst_12765,inst_12305,inst_12390,inst_12467,inst_12781,inst_12763,inst_12333,inst_12307,inst_12793,inst_12783,inst_12300,inst_12764,inst_12363,inst_12797,inst_12792,inst_12285,inst_12326,inst_12791,inst_12395,inst_12766,inst_12282,inst_12769,inst_12316,inst_12392,inst_12808,inst_12269,inst_12782,inst_12310,inst_12283,inst_12794,inst_12479,inst_12297,inst_12287,inst_12284,inst_12784,inst_12391,inst_12767,inst_12275,inst_12788,inst_12478,inst_12785,inst_12313,inst_12336,inst_12480,inst_12778,inst_12781__$1,inst_12782__$1,inst_12783__$1,inst_12784__$1,inst_12785__$1,inst_12786,inst_12787,inst_12788__$1,inst_12789,inst_12790,inst_12791__$1,inst_12792__$1,inst_12793__$1,inst_12794__$1,inst_12795__$1,inst_12796__$1,inst_12797__$1,state_val_13313,c__6459__auto___13746){
return (function (){
var s__12801__$1 = s__12801;
while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__12801__$1);
if(temp__4126__auto____$1){
var s__12801__$2 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12801__$2)){
var c__4384__auto__ = cljs.core.chunk_first.call(null,s__12801__$2);
var size__4385__auto__ = cljs.core.count.call(null,c__4384__auto__);
var b__12803 = cljs.core.chunk_buffer.call(null,size__4385__auto__);
if((function (){var i__12802 = (0);
while(true){
if((i__12802 < size__4385__auto__)){
var dy = cljs.core._nth.call(null,c__4384__auto__,i__12802);
cljs.core.chunk_append.call(null,b__12803,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(dx + player_cell_x),(dy + player_cell_y)], null));

var G__13821 = (i__12802 + (1));
i__12802 = G__13821;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12803),iter__12800.call(null,cljs.core.chunk_rest.call(null,s__12801__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12803),null);
}
} else {
var dy = cljs.core.first.call(null,s__12801__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(dx + player_cell_x),(dy + player_cell_y)], null),iter__12800.call(null,cljs.core.rest.call(null,s__12801__$2)));
}
} else {
return null;
}
break;
}
});})(s__12799__$1,dx,xs__4624__auto__,temp__4126__auto__,add_cell_BANG_,depth_compare,vec__12779,x,player_stars_text,player_standing_texs,cells,player_shadow,player_cell,vec__12780,close_QMARK_,sprite_count,player_pos,calc_theta,obstacle_types,polar_object_coords,trees,player_hit,old_sprite_count,y,player_standing_sway,player_cell_y,player_cell_x,game_sprites,loader,player_walking_texs,rhx,rhy,frame_num,shadow_tex,_,tex,speed,hit_sfx,lobster_big,game_map,star_tex,pos,remove_cell_BANG_,theta,tufts,game_space,pickup_textures,perlin_channel,title_text,vx,floor_objects,pickup_sfx,tilemap,vy,make_pickup,varela,hy,wait,hx,player,player_stars_icon,inst_12475,inst_12281,inst_12286,inst_12795,inst_12278,inst_12268,inst_12306,inst_12768,inst_12319,inst_12474,inst_12274,inst_12796,inst_12765,inst_12305,inst_12390,inst_12467,inst_12781,inst_12763,inst_12333,inst_12307,inst_12793,inst_12783,inst_12300,inst_12764,inst_12363,inst_12797,inst_12792,inst_12285,inst_12326,inst_12791,inst_12395,inst_12766,inst_12282,inst_12769,inst_12316,inst_12392,inst_12808,inst_12269,inst_12782,inst_12310,inst_12283,inst_12794,inst_12479,inst_12297,inst_12287,inst_12284,inst_12784,inst_12391,inst_12767,inst_12275,inst_12788,inst_12478,inst_12785,inst_12313,inst_12336,inst_12480,inst_12778,inst_12781__$1,inst_12782__$1,inst_12783__$1,inst_12784__$1,inst_12785__$1,inst_12786,inst_12787,inst_12788__$1,inst_12789,inst_12790,inst_12791__$1,inst_12792__$1,inst_12793__$1,inst_12794__$1,inst_12795__$1,inst_12796__$1,inst_12797__$1,state_val_13313,c__6459__auto___13746))
,null,null));
});})(s__12799__$1,dx,xs__4624__auto__,temp__4126__auto__,add_cell_BANG_,depth_compare,vec__12779,x,player_stars_text,player_standing_texs,cells,player_shadow,player_cell,vec__12780,close_QMARK_,sprite_count,player_pos,calc_theta,obstacle_types,polar_object_coords,trees,player_hit,old_sprite_count,y,player_standing_sway,player_cell_y,player_cell_x,game_sprites,loader,player_walking_texs,rhx,rhy,frame_num,shadow_tex,_,tex,speed,hit_sfx,lobster_big,game_map,star_tex,pos,remove_cell_BANG_,theta,tufts,game_space,pickup_textures,perlin_channel,title_text,vx,floor_objects,pickup_sfx,tilemap,vy,make_pickup,varela,hy,wait,hx,player,player_stars_icon,inst_12475,inst_12281,inst_12286,inst_12795,inst_12278,inst_12268,inst_12306,inst_12768,inst_12319,inst_12474,inst_12274,inst_12796,inst_12765,inst_12305,inst_12390,inst_12467,inst_12781,inst_12763,inst_12333,inst_12307,inst_12793,inst_12783,inst_12300,inst_12764,inst_12363,inst_12797,inst_12792,inst_12285,inst_12326,inst_12791,inst_12395,inst_12766,inst_12282,inst_12769,inst_12316,inst_12392,inst_12808,inst_12269,inst_12782,inst_12310,inst_12283,inst_12794,inst_12479,inst_12297,inst_12287,inst_12284,inst_12784,inst_12391,inst_12767,inst_12275,inst_12788,inst_12478,inst_12785,inst_12313,inst_12336,inst_12480,inst_12778,inst_12781__$1,inst_12782__$1,inst_12783__$1,inst_12784__$1,inst_12785__$1,inst_12786,inst_12787,inst_12788__$1,inst_12789,inst_12790,inst_12791__$1,inst_12792__$1,inst_12793__$1,inst_12794__$1,inst_12795__$1,inst_12796__$1,inst_12797__$1,state_val_13313,c__6459__auto___13746))
;
var fs__4383__auto__ = cljs.core.seq.call(null,iterys__4382__auto__.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-2),(-1),(0),(1),(2)], null)));
if(fs__4383__auto__){
return cljs.core.concat.call(null,fs__4383__auto__,iter__12798.call(null,cljs.core.rest.call(null,s__12799__$1)));
} else {
var G__13822 = cljs.core.rest.call(null,s__12799__$1);
s__12799__$1 = G__13822;
continue;
}
} else {
return null;
}
break;
}
});})(add_cell_BANG_,depth_compare,vec__12779,x,player_stars_text,player_standing_texs,cells,player_shadow,player_cell,vec__12780,close_QMARK_,sprite_count,player_pos,calc_theta,obstacle_types,polar_object_coords,trees,player_hit,old_sprite_count,y,player_standing_sway,player_cell_y,player_cell_x,game_sprites,loader,player_walking_texs,rhx,rhy,frame_num,shadow_tex,_,tex,speed,hit_sfx,lobster_big,game_map,star_tex,pos,remove_cell_BANG_,theta,tufts,game_space,pickup_textures,perlin_channel,title_text,vx,floor_objects,pickup_sfx,tilemap,vy,make_pickup,varela,hy,wait,hx,player,player_stars_icon,inst_12475,inst_12281,inst_12286,inst_12795,inst_12278,inst_12268,inst_12306,inst_12768,inst_12319,inst_12474,inst_12274,inst_12796,inst_12765,inst_12305,inst_12390,inst_12467,inst_12781,inst_12763,inst_12333,inst_12307,inst_12793,inst_12783,inst_12300,inst_12764,inst_12363,inst_12797,inst_12792,inst_12285,inst_12326,inst_12791,inst_12395,inst_12766,inst_12282,inst_12769,inst_12316,inst_12392,inst_12808,inst_12269,inst_12782,inst_12310,inst_12283,inst_12794,inst_12479,inst_12297,inst_12287,inst_12284,inst_12784,inst_12391,inst_12767,inst_12275,inst_12788,inst_12478,inst_12785,inst_12313,inst_12336,inst_12480,inst_12778,inst_12781__$1,inst_12782__$1,inst_12783__$1,inst_12784__$1,inst_12785__$1,inst_12786,inst_12787,inst_12788__$1,inst_12789,inst_12790,inst_12791__$1,inst_12792__$1,inst_12793__$1,inst_12794__$1,inst_12795__$1,inst_12796__$1,inst_12797__$1,state_val_13313,c__6459__auto___13746))
,null,null));
});
;})(add_cell_BANG_,depth_compare,vec__12779,x,player_stars_text,player_standing_texs,cells,player_shadow,player_cell,vec__12780,close_QMARK_,sprite_count,player_pos,calc_theta,obstacle_types,polar_object_coords,trees,player_hit,old_sprite_count,y,player_standing_sway,player_cell_y,player_cell_x,game_sprites,loader,player_walking_texs,rhx,rhy,frame_num,shadow_tex,_,tex,speed,hit_sfx,lobster_big,game_map,star_tex,pos,remove_cell_BANG_,theta,tufts,game_space,pickup_textures,perlin_channel,title_text,vx,floor_objects,pickup_sfx,tilemap,vy,make_pickup,varela,hy,wait,hx,player,player_stars_icon,inst_12475,inst_12281,inst_12286,inst_12795,inst_12278,inst_12268,inst_12306,inst_12768,inst_12319,inst_12474,inst_12274,inst_12796,inst_12765,inst_12305,inst_12390,inst_12467,inst_12781,inst_12763,inst_12333,inst_12307,inst_12793,inst_12783,inst_12300,inst_12764,inst_12363,inst_12797,inst_12792,inst_12285,inst_12326,inst_12791,inst_12395,inst_12766,inst_12282,inst_12769,inst_12316,inst_12392,inst_12808,inst_12269,inst_12782,inst_12310,inst_12283,inst_12794,inst_12479,inst_12297,inst_12287,inst_12284,inst_12784,inst_12391,inst_12767,inst_12275,inst_12788,inst_12478,inst_12785,inst_12313,inst_12336,inst_12480,inst_12778,inst_12781__$1,inst_12782__$1,inst_12783__$1,inst_12784__$1,inst_12785__$1,inst_12786,inst_12787,inst_12788__$1,inst_12789,inst_12790,inst_12791__$1,inst_12792__$1,inst_12793__$1,inst_12794__$1,inst_12795__$1,inst_12796__$1,inst_12797__$1,state_val_13313,c__6459__auto___13746))
})();
var inst_12805 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_12806 = [(-2),(-1),(0),(1),(2)];
var inst_12807 = (new cljs.core.PersistentVector(null,5,(5),inst_12805,inst_12806,null));
var inst_12808__$1 = inst_12804.call(null,inst_12807);
var inst_12809 = (function (){var add_cell_BANG_ = inst_12479;
var depth_compare = inst_12391;
var vec__12779 = inst_12764;
var x = inst_12781__$1;
var player_stars_text = inst_12310;
var player_standing_texs = inst_12297;
var cells = inst_12767;
var player_shadow = inst_12287;
var player_cell = inst_12795__$1;
var vec__12780 = inst_12795__$1;
var close_QMARK_ = inst_12395;
var sprite_count = inst_12768;
var player_pos = inst_12478;
var calc_theta = inst_12783__$1;
var obstacle_types = inst_12319;
var polar_object_coords = inst_12392;
var trees = inst_12326;
var player_hit = inst_12769;
var old_sprite_count = inst_12794__$1;
var y = inst_12782__$1;
var player_standing_sway = inst_12300;
var player_cell_y = inst_12797__$1;
var player_cell_x = inst_12796__$1;
var game_sprites = inst_12474;
var loader = inst_12268;
var player_walking_texs = inst_12305;
var player_and_surrounds = inst_12808__$1;
var rhx = inst_12788__$1;
var rhy = inst_12791__$1;
var frame_num = inst_12763;
var shadow_tex = inst_12286;
var _ = inst_12282;
var tex = inst_12284;
var speed = inst_12765;
var hit_sfx = inst_12390;
var lobster_big = inst_12274;
var game_map = inst_12467;
var star_tex = inst_12306;
var pos = inst_12764;
var remove_cell_BANG_ = inst_12480;
var theta = inst_12766;
var tufts = inst_12333;
var game_space = inst_12475;
var pickup_textures = inst_12313;
var perlin_channel = inst_12269;
var title_text = inst_12283;
var vx = inst_12792__$1;
var floor_objects = inst_12316;
var pickup_sfx = inst_12363;
var tilemap = inst_12281;
var vy = inst_12793__$1;
var make_pickup = inst_12336;
var varela = inst_12275;
var hy = inst_12785__$1;
var wait = inst_12278;
var hx = inst_12784__$1;
var player = inst_12285;
var player_stars_icon = inst_12307;
return ((function (add_cell_BANG_,depth_compare,vec__12779,x,player_stars_text,player_standing_texs,cells,player_shadow,player_cell,vec__12780,close_QMARK_,sprite_count,player_pos,calc_theta,obstacle_types,polar_object_coords,trees,player_hit,old_sprite_count,y,player_standing_sway,player_cell_y,player_cell_x,game_sprites,loader,player_walking_texs,player_and_surrounds,rhx,rhy,frame_num,shadow_tex,_,tex,speed,hit_sfx,lobster_big,game_map,star_tex,pos,remove_cell_BANG_,theta,tufts,game_space,pickup_textures,perlin_channel,title_text,vx,floor_objects,pickup_sfx,tilemap,vy,make_pickup,varela,hy,wait,hx,player,player_stars_icon,inst_12475,inst_12281,inst_12286,inst_12795,inst_12278,inst_12268,inst_12306,inst_12768,inst_12319,inst_12474,inst_12274,inst_12796,inst_12765,inst_12305,inst_12390,inst_12467,inst_12781,inst_12763,inst_12333,inst_12307,inst_12793,inst_12783,inst_12300,inst_12764,inst_12363,inst_12797,inst_12792,inst_12285,inst_12326,inst_12791,inst_12395,inst_12766,inst_12282,inst_12769,inst_12316,inst_12392,inst_12808,inst_12269,inst_12782,inst_12310,inst_12283,inst_12794,inst_12479,inst_12297,inst_12287,inst_12284,inst_12784,inst_12391,inst_12767,inst_12275,inst_12788,inst_12478,inst_12785,inst_12313,inst_12336,inst_12480,inst_12778,inst_12781__$1,inst_12782__$1,inst_12783__$1,inst_12784__$1,inst_12785__$1,inst_12786,inst_12787,inst_12788__$1,inst_12789,inst_12790,inst_12791__$1,inst_12792__$1,inst_12793__$1,inst_12794__$1,inst_12795__$1,inst_12796__$1,inst_12797__$1,inst_12804,inst_12805,inst_12806,inst_12807,inst_12808__$1,state_val_13313,c__6459__auto___13746){
return (function (test_cell,cells__$1){
if(cljs.core.not.call(null,cljs.core.some.call(null,((function (add_cell_BANG_,depth_compare,vec__12779,x,player_stars_text,player_standing_texs,cells,player_shadow,player_cell,vec__12780,close_QMARK_,sprite_count,player_pos,calc_theta,obstacle_types,polar_object_coords,trees,player_hit,old_sprite_count,y,player_standing_sway,player_cell_y,player_cell_x,game_sprites,loader,player_walking_texs,player_and_surrounds,rhx,rhy,frame_num,shadow_tex,_,tex,speed,hit_sfx,lobster_big,game_map,star_tex,pos,remove_cell_BANG_,theta,tufts,game_space,pickup_textures,perlin_channel,title_text,vx,floor_objects,pickup_sfx,tilemap,vy,make_pickup,varela,hy,wait,hx,player,player_stars_icon,inst_12475,inst_12281,inst_12286,inst_12795,inst_12278,inst_12268,inst_12306,inst_12768,inst_12319,inst_12474,inst_12274,inst_12796,inst_12765,inst_12305,inst_12390,inst_12467,inst_12781,inst_12763,inst_12333,inst_12307,inst_12793,inst_12783,inst_12300,inst_12764,inst_12363,inst_12797,inst_12792,inst_12285,inst_12326,inst_12791,inst_12395,inst_12766,inst_12282,inst_12769,inst_12316,inst_12392,inst_12808,inst_12269,inst_12782,inst_12310,inst_12283,inst_12794,inst_12479,inst_12297,inst_12287,inst_12284,inst_12784,inst_12391,inst_12767,inst_12275,inst_12788,inst_12478,inst_12785,inst_12313,inst_12336,inst_12480,inst_12778,inst_12781__$1,inst_12782__$1,inst_12783__$1,inst_12784__$1,inst_12785__$1,inst_12786,inst_12787,inst_12788__$1,inst_12789,inst_12790,inst_12791__$1,inst_12792__$1,inst_12793__$1,inst_12794__$1,inst_12795__$1,inst_12796__$1,inst_12797__$1,inst_12804,inst_12805,inst_12806,inst_12807,inst_12808__$1,state_val_13313,c__6459__auto___13746){
return (function (p1__12237_SHARP_){
return cljs.core._EQ_.call(null,p1__12237_SHARP_,test_cell);
});})(add_cell_BANG_,depth_compare,vec__12779,x,player_stars_text,player_standing_texs,cells,player_shadow,player_cell,vec__12780,close_QMARK_,sprite_count,player_pos,calc_theta,obstacle_types,polar_object_coords,trees,player_hit,old_sprite_count,y,player_standing_sway,player_cell_y,player_cell_x,game_sprites,loader,player_walking_texs,player_and_surrounds,rhx,rhy,frame_num,shadow_tex,_,tex,speed,hit_sfx,lobster_big,game_map,star_tex,pos,remove_cell_BANG_,theta,tufts,game_space,pickup_textures,perlin_channel,title_text,vx,floor_objects,pickup_sfx,tilemap,vy,make_pickup,varela,hy,wait,hx,player,player_stars_icon,inst_12475,inst_12281,inst_12286,inst_12795,inst_12278,inst_12268,inst_12306,inst_12768,inst_12319,inst_12474,inst_12274,inst_12796,inst_12765,inst_12305,inst_12390,inst_12467,inst_12781,inst_12763,inst_12333,inst_12307,inst_12793,inst_12783,inst_12300,inst_12764,inst_12363,inst_12797,inst_12792,inst_12285,inst_12326,inst_12791,inst_12395,inst_12766,inst_12282,inst_12769,inst_12316,inst_12392,inst_12808,inst_12269,inst_12782,inst_12310,inst_12283,inst_12794,inst_12479,inst_12297,inst_12287,inst_12284,inst_12784,inst_12391,inst_12767,inst_12275,inst_12788,inst_12478,inst_12785,inst_12313,inst_12336,inst_12480,inst_12778,inst_12781__$1,inst_12782__$1,inst_12783__$1,inst_12784__$1,inst_12785__$1,inst_12786,inst_12787,inst_12788__$1,inst_12789,inst_12790,inst_12791__$1,inst_12792__$1,inst_12793__$1,inst_12794__$1,inst_12795__$1,inst_12796__$1,inst_12797__$1,inst_12804,inst_12805,inst_12806,inst_12807,inst_12808__$1,state_val_13313,c__6459__auto___13746))
,cells__$1))){
add_cell_BANG_.call(null,test_cell);

return cljs.core.conj.call(null,cells__$1,test_cell);
} else {
return cells__$1;
}
});
;})(add_cell_BANG_,depth_compare,vec__12779,x,player_stars_text,player_standing_texs,cells,player_shadow,player_cell,vec__12780,close_QMARK_,sprite_count,player_pos,calc_theta,obstacle_types,polar_object_coords,trees,player_hit,old_sprite_count,y,player_standing_sway,player_cell_y,player_cell_x,game_sprites,loader,player_walking_texs,player_and_surrounds,rhx,rhy,frame_num,shadow_tex,_,tex,speed,hit_sfx,lobster_big,game_map,star_tex,pos,remove_cell_BANG_,theta,tufts,game_space,pickup_textures,perlin_channel,title_text,vx,floor_objects,pickup_sfx,tilemap,vy,make_pickup,varela,hy,wait,hx,player,player_stars_icon,inst_12475,inst_12281,inst_12286,inst_12795,inst_12278,inst_12268,inst_12306,inst_12768,inst_12319,inst_12474,inst_12274,inst_12796,inst_12765,inst_12305,inst_12390,inst_12467,inst_12781,inst_12763,inst_12333,inst_12307,inst_12793,inst_12783,inst_12300,inst_12764,inst_12363,inst_12797,inst_12792,inst_12285,inst_12326,inst_12791,inst_12395,inst_12766,inst_12282,inst_12769,inst_12316,inst_12392,inst_12808,inst_12269,inst_12782,inst_12310,inst_12283,inst_12794,inst_12479,inst_12297,inst_12287,inst_12284,inst_12784,inst_12391,inst_12767,inst_12275,inst_12788,inst_12478,inst_12785,inst_12313,inst_12336,inst_12480,inst_12778,inst_12781__$1,inst_12782__$1,inst_12783__$1,inst_12784__$1,inst_12785__$1,inst_12786,inst_12787,inst_12788__$1,inst_12789,inst_12790,inst_12791__$1,inst_12792__$1,inst_12793__$1,inst_12794__$1,inst_12795__$1,inst_12796__$1,inst_12797__$1,inst_12804,inst_12805,inst_12806,inst_12807,inst_12808__$1,state_val_13313,c__6459__auto___13746))
})();
var inst_12813 = cljs.core.nth.call(null,inst_12808__$1,(0),null);
var inst_12814 = cljs.core.nthnext.call(null,inst_12808__$1,(1));
var inst_12815 = inst_12767;
var inst_12816 = inst_12808__$1;
var state_13312__$1 = (function (){var statearr_13420 = state_13312;
(statearr_13420[(36)] = inst_12795__$1);

(statearr_13420[(43)] = inst_12796__$1);

(statearr_13420[(20)] = inst_12781__$1);

(statearr_13420[(51)] = inst_12793__$1);

(statearr_13420[(52)] = inst_12783__$1);

(statearr_13420[(127)] = inst_12813);

(statearr_13420[(56)] = inst_12797__$1);

(statearr_13420[(57)] = inst_12792__$1);

(statearr_13420[(128)] = inst_12778);

(statearr_13420[(21)] = inst_12791__$1);

(statearr_13420[(70)] = inst_12808__$1);

(statearr_13420[(23)] = inst_12782__$1);

(statearr_13420[(73)] = inst_12794__$1);

(statearr_13420[(75)] = inst_12809);

(statearr_13420[(79)] = inst_12784__$1);

(statearr_13420[(129)] = inst_12814);

(statearr_13420[(130)] = inst_12815);

(statearr_13420[(24)] = inst_12788__$1);

(statearr_13420[(84)] = inst_12785__$1);

(statearr_13420[(131)] = inst_12816);

return statearr_13420;
})();
var statearr_13421_13823 = state_13312__$1;
(statearr_13421_13823[(2)] = null);

(statearr_13421_13823[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13313 === (90))){
var inst_13147 = (state_13312[(2)]);
var state_13312__$1 = state_13312;
var statearr_13422_13824 = state_13312__$1;
(statearr_13422_13824[(2)] = inst_13147);

(statearr_13422_13824[(1)] = (76));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13313 === (109))){
var inst_13222 = (state_13312[(2)]);
var state_13312__$1 = state_13312;
var statearr_13423_13825 = state_13312__$1;
(statearr_13423_13825[(2)] = inst_13222);

(statearr_13423_13825[(1)] = (106));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13313 === (143))){
var inst_13303 = (state_13312[(2)]);
var state_13312__$1 = state_13312;
var statearr_13424_13826 = state_13312__$1;
(statearr_13424_13826[(2)] = inst_13303);

(statearr_13424_13826[(1)] = (140));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13313 === (36))){
var inst_12909 = (state_13312[(116)]);
var inst_12866 = (state_13312[(120)]);
var inst_12909__$1 = cljs.core.seq.call(null,inst_12866);
var state_13312__$1 = (function (){var statearr_13425 = state_13312;
(statearr_13425[(116)] = inst_12909__$1);

return statearr_13425;
})();
if(inst_12909__$1){
var statearr_13426_13827 = state_13312__$1;
(statearr_13426_13827[(1)] = (45));

} else {
var statearr_13427_13828 = state_13312__$1;
(statearr_13427_13828[(1)] = (46));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13313 === (41))){
var inst_12475 = (state_13312[(8)]);
var inst_12286 = (state_13312[(35)]);
var inst_12306 = (state_13312[(38)]);
var inst_12764 = (state_13312[(54)]);
var inst_12859 = (state_13312[(112)]);
var inst_12392 = (state_13312[(22)]);
var inst_12874 = (state_13312[(132)]);
var inst_12391 = (state_13312[(80)]);
var inst_12881 = new cljs.core.Keyword(null,"sprite","sprite",172516848).cljs$core$IFn$_invoke$arity$1(inst_12874);
var inst_12882 = farn.core.main_stage.removeChild(inst_12881);
var inst_12883 = new cljs.core.Keyword(null,"shadow","shadow",873231803).cljs$core$IFn$_invoke$arity$1(inst_12874);
var inst_12884 = farn.core.main_stage.removeChild(inst_12883);
var inst_12885 = cljs.core.reset_BANG_.call(null,farn.core.player_animation,new cljs.core.Keyword(null,"standing","standing",-1248340762));
var inst_12887 = cljs.core.nth.call(null,inst_12764,(0),null);
var inst_12888 = cljs.core.nth.call(null,inst_12764,(1),null);
var inst_12889 = farn.core.game_completed.call(null,farn.core.main_stage,inst_12306,inst_12286,inst_12887,inst_12888,inst_12392,inst_12859,inst_12475,inst_12391);
var state_13312__$1 = (function (){var statearr_13428 = state_13312;
(statearr_13428[(133)] = inst_12882);

(statearr_13428[(134)] = inst_12884);

(statearr_13428[(135)] = inst_12885);

return statearr_13428;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13312__$1,(44),inst_12889);
} else {
if((state_val_13313 === (118))){
var inst_13246 = (state_13312[(2)]);
var state_13312__$1 = state_13312;
if(cljs.core.truth_(inst_13246)){
var statearr_13429_13829 = state_13312__$1;
(statearr_13429_13829[(1)] = (122));

} else {
var statearr_13430_13830 = state_13312__$1;
(statearr_13430_13830[(1)] = (123));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13313 === (89))){
var state_13312__$1 = state_13312;
var statearr_13431_13831 = state_13312__$1;
(statearr_13431_13831[(2)] = null);

(statearr_13431_13831[(1)] = (90));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13313 === (100))){
var state_13312__$1 = state_13312;
var statearr_13432_13832 = state_13312__$1;
(statearr_13432_13832[(2)] = null);

(statearr_13432_13832[(1)] = (101));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13313 === (131))){
var inst_13293 = (state_13312[(2)]);
var inst_13294 = farn.events.is_pressed_QMARK_.call(null,new cljs.core.Keyword(null,"left","left",-399115937));
var state_13312__$1 = (function (){var statearr_13433 = state_13312;
(statearr_13433[(136)] = inst_13293);

return statearr_13433;
})();
if(cljs.core.truth_(inst_13294)){
var statearr_13434_13833 = state_13312__$1;
(statearr_13434_13833[(1)] = (138));

} else {
var statearr_13435_13834 = state_13312__$1;
(statearr_13435_13834[(1)] = (139));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13313 === (122))){
var inst_13248 = cljs.core.reset_BANG_.call(null,farn.core.player_animation,new cljs.core.Keyword(null,"running","running",1554969103));
var state_13312__$1 = state_13312;
var statearr_13436_13835 = state_13312__$1;
(statearr_13436_13835[(2)] = inst_13248);

(statearr_13436_13835[(1)] = (124));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13313 === (43))){
var inst_12902 = (state_13312[(2)]);
var state_13312__$1 = state_13312;
var statearr_13437_13836 = state_13312__$1;
(statearr_13437_13836[(2)] = inst_12902);

(statearr_13437_13836[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13313 === (61))){
var inst_12390 = (state_13312[(46)]);
var inst_12764 = (state_13312[(54)]);
var inst_12976 = (state_13312[(137)]);
var inst_12972 = cljs.core.rand_nth.call(null,inst_12390);
var inst_12973 = farn.sound.play_sound.call(null,inst_12972,0.5);
var inst_12975 = cljs.core.deref.call(null,farn.core.player_stars);
var inst_12976__$1 = (((30) < inst_12975) ? (30) : inst_12975);
var inst_12977 = cljs.core.nth.call(null,inst_12764,(0),null);
var inst_12978 = cljs.core.nth.call(null,inst_12764,(1),null);
var inst_12979 = (inst_12976__$1 > (0));
var state_13312__$1 = (function (){var statearr_13438 = state_13312;
(statearr_13438[(138)] = inst_12977);

(statearr_13438[(139)] = inst_12973);

(statearr_13438[(140)] = inst_12978);

(statearr_13438[(137)] = inst_12976__$1);

return statearr_13438;
})();
if(cljs.core.truth_(inst_12979)){
var statearr_13439_13837 = state_13312__$1;
(statearr_13439_13837[(1)] = (64));

} else {
var statearr_13440_13838 = state_13312__$1;
(statearr_13440_13838[(1)] = (65));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13313 === (29))){
var inst_12859 = (state_13312[(2)]);
var inst_12864 = cljs.core.deref.call(null,farn.core.pickup_store);
var inst_12865 = cljs.core.seq.call(null,inst_12864);
var inst_12866 = inst_12865;
var inst_12867 = null;
var inst_12868 = (0);
var inst_12869 = (0);
var state_13312__$1 = (function (){var statearr_13441 = state_13312;
(statearr_13441[(112)] = inst_12859);

(statearr_13441[(117)] = inst_12868);

(statearr_13441[(118)] = inst_12867);

(statearr_13441[(119)] = inst_12869);

(statearr_13441[(120)] = inst_12866);

return statearr_13441;
})();
var statearr_13442_13839 = state_13312__$1;
(statearr_13442_13839[(2)] = null);

(statearr_13442_13839[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13313 === (44))){
var inst_12891 = (state_13312[(2)]);
var state_13312__$1 = state_13312;
var statearr_13443_13840 = state_13312__$1;
(statearr_13443_13840[(2)] = inst_12891);

(statearr_13443_13840[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13313 === (93))){
var inst_13144 = (state_13312[(2)]);
var state_13312__$1 = state_13312;
var statearr_13444_13841 = state_13312__$1;
(statearr_13444_13841[(2)] = inst_13144);

(statearr_13444_13841[(1)] = (90));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13313 === (6))){
var inst_12363 = (state_13312[(2)]);
var inst_12367 = cljs.core.PersistentVector.EMPTY;
var inst_12368 = cljs.core.range.call(null,(1),(4));
var inst_12369 = cljs.core.nth.call(null,inst_12368,(0),null);
var inst_12370 = cljs.core.nthnext.call(null,inst_12368,(1));
var inst_12371 = inst_12367;
var inst_12372 = inst_12368;
var state_13312__$1 = (function (){var statearr_13445 = state_13312;
(statearr_13445[(141)] = inst_12372);

(statearr_13445[(142)] = inst_12370);

(statearr_13445[(55)] = inst_12363);

(statearr_13445[(143)] = inst_12369);

(statearr_13445[(144)] = inst_12371);

return statearr_13445;
})();
var statearr_13446_13842 = state_13312__$1;
(statearr_13446_13842[(2)] = null);

(statearr_13446_13842[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13313 === (111))){
var state_13312__$1 = state_13312;
var statearr_13447_13843 = state_13312__$1;
(statearr_13447_13843[(2)] = null);

(statearr_13447_13843[(1)] = (112));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13313 === (28))){
var inst_12847 = (state_13312[(145)]);
var inst_12843 = (state_13312[(65)]);
var inst_12847__$1 = cljs.core.nth.call(null,inst_12843,(0),null);
var inst_12848 = cljs.core.nthnext.call(null,inst_12843,(1));
var inst_12849 = (inst_12847__$1 == null);
var inst_12850 = cljs.core.not.call(null,inst_12849);
var state_13312__$1 = (function (){var statearr_13448 = state_13312;
(statearr_13448[(146)] = inst_12848);

(statearr_13448[(145)] = inst_12847__$1);

return statearr_13448;
})();
if(inst_12850){
var statearr_13449_13844 = state_13312__$1;
(statearr_13449_13844[(1)] = (30));

} else {
var statearr_13450_13845 = state_13312__$1;
(statearr_13450_13845[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13313 === (134))){
var inst_13291 = (state_13312[(2)]);
var state_13312__$1 = state_13312;
var statearr_13451_13846 = state_13312__$1;
(statearr_13451_13846[(2)] = inst_13291);

(statearr_13451_13846[(1)] = (131));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13313 === (64))){
var inst_12976 = (state_13312[(137)]);
var inst_12981 = inst_12976;
var state_13312__$1 = (function (){var statearr_13452 = state_13312;
(statearr_13452[(33)] = inst_12981);

return statearr_13452;
})();
var statearr_13453_13847 = state_13312__$1;
(statearr_13453_13847[(2)] = null);

(statearr_13453_13847[(1)] = (67));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13313 === (103))){
var inst_12781 = (state_13312[(20)]);
var inst_12791 = (state_13312[(21)]);
var inst_12392 = (state_13312[(22)]);
var inst_12782 = (state_13312[(23)]);
var inst_13112 = (state_13312[(88)]);
var inst_12788 = (state_13312[(24)]);
var inst_13121 = cljs.core.first.call(null,inst_13112);
var inst_13123 = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(inst_13121);
var inst_13124 = new cljs.core.Keyword(null,"sprite","sprite",172516848).cljs$core$IFn$_invoke$arity$1(inst_13121);
var inst_13125 = inst_12392.call(null,inst_13123,inst_13124,inst_12781,inst_12782,inst_12788,inst_12791);
var inst_13126 = cljs.core.nth.call(null,inst_13125,(0),null);
var inst_13127 = cljs.core.nth.call(null,inst_13125,(1),null);
var inst_13128 = new cljs.core.Keyword(null,"sprite","sprite",172516848).cljs$core$IFn$_invoke$arity$1(inst_13121);
var inst_13129 = farn.sprite.set_pos_BANG_.call(null,inst_13128,inst_13126,inst_13127);
var inst_13130 = cljs.core.next.call(null,inst_13112);
var inst_13092 = inst_13130;
var inst_13093 = null;
var inst_13094 = (0);
var inst_13095 = (0);
var state_13312__$1 = (function (){var statearr_13454 = state_13312;
(statearr_13454[(89)] = inst_13095);

(statearr_13454[(90)] = inst_13094);

(statearr_13454[(147)] = inst_13129);

(statearr_13454[(91)] = inst_13093);

(statearr_13454[(92)] = inst_13092);

return statearr_13454;
})();
var statearr_13455_13848 = state_13312__$1;
(statearr_13455_13848[(2)] = null);

(statearr_13455_13848[(1)] = (94));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13313 === (51))){
var inst_12918 = (state_13312[(93)]);
var inst_12922 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(inst_12918);
var inst_12923 = cljs.core._EQ_.call(null,inst_12922,new cljs.core.Keyword(null,"pickup-baby-1","pickup-baby-1",-1650486973));
var state_13312__$1 = state_13312;
if(inst_12923){
var statearr_13456_13849 = state_13312__$1;
(statearr_13456_13849[(1)] = (54));

} else {
var statearr_13457_13850 = state_13312__$1;
(statearr_13457_13850[(1)] = (55));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13313 === (25))){
var inst_12815 = (state_13312[(130)]);
var state_13312__$1 = state_13312;
var statearr_13458_13851 = state_13312__$1;
(statearr_13458_13851[(2)] = inst_12815);

(statearr_13458_13851[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13313 === (34))){
var inst_12475 = (state_13312[(8)]);
var inst_12281 = (state_13312[(34)]);
var inst_12286 = (state_13312[(35)]);
var inst_12795 = (state_13312[(36)]);
var inst_12966 = (state_13312[(19)]);
var inst_12278 = (state_13312[(37)]);
var inst_12268 = (state_13312[(29)]);
var inst_12306 = (state_13312[(38)]);
var inst_12768 = (state_13312[(39)]);
var inst_12319 = (state_13312[(40)]);
var inst_12474 = (state_13312[(41)]);
var inst_12274 = (state_13312[(42)]);
var inst_12796 = (state_13312[(43)]);
var inst_12765 = (state_13312[(44)]);
var inst_12305 = (state_13312[(45)]);
var inst_12390 = (state_13312[(46)]);
var inst_12467 = (state_13312[(47)]);
var inst_12781 = (state_13312[(20)]);
var inst_12763 = (state_13312[(48)]);
var inst_12333 = (state_13312[(49)]);
var inst_12307 = (state_13312[(50)]);
var inst_12793 = (state_13312[(51)]);
var inst_12783 = (state_13312[(52)]);
var inst_12300 = (state_13312[(53)]);
var inst_12764 = (state_13312[(54)]);
var inst_12363 = (state_13312[(55)]);
var inst_12797 = (state_13312[(56)]);
var inst_12792 = (state_13312[(57)]);
var inst_12285 = (state_13312[(58)]);
var inst_12326 = (state_13312[(59)]);
var inst_12791 = (state_13312[(21)]);
var inst_12859 = (state_13312[(112)]);
var inst_12395 = (state_13312[(60)]);
var inst_12766 = (state_13312[(61)]);
var inst_12769 = (state_13312[(7)]);
var inst_12316 = (state_13312[(69)]);
var inst_12392 = (state_13312[(22)]);
var inst_12808 = (state_13312[(70)]);
var inst_12269 = (state_13312[(32)]);
var inst_12782 = (state_13312[(23)]);
var inst_12310 = (state_13312[(71)]);
var inst_12837 = (state_13312[(62)]);
var inst_12283 = (state_13312[(72)]);
var inst_12794 = (state_13312[(73)]);
var inst_12479 = (state_13312[(74)]);
var inst_12809 = (state_13312[(75)]);
var inst_12297 = (state_13312[(76)]);
var inst_12287 = (state_13312[(77)]);
var inst_12284 = (state_13312[(78)]);
var inst_12784 = (state_13312[(79)]);
var inst_12391 = (state_13312[(80)]);
var inst_12767 = (state_13312[(81)]);
var inst_12829 = (state_13312[(67)]);
var inst_12275 = (state_13312[(82)]);
var inst_12788 = (state_13312[(24)]);
var inst_12478 = (state_13312[(83)]);
var inst_12785 = (state_13312[(84)]);
var inst_12313 = (state_13312[(85)]);
var inst_12336 = (state_13312[(86)]);
var inst_12480 = (state_13312[(87)]);
var inst_12960 = (state_13312[(2)]);
var inst_12961 = inst_12475.call(null,inst_12795);
var inst_12962 = (function (){var add_cell_BANG_ = inst_12479;
var depth_compare = inst_12391;
var vec__12779 = inst_12764;
var x = inst_12781;
var player_stars_text = inst_12310;
var player_standing_texs = inst_12297;
var cells = inst_12767;
var player_shadow = inst_12287;
var player_cell = inst_12795;
var vec__12780 = inst_12795;
var close_QMARK_ = inst_12395;
var sprite_count = inst_12768;
var player_pos = inst_12478;
var calc_theta = inst_12783;
var obstacle_types = inst_12319;
var post_remove_cells = inst_12859;
var polar_object_coords = inst_12392;
var trees = inst_12326;
var player_hit = inst_12769;
var old_sprite_count = inst_12794;
var y = inst_12782;
var player_standing_sway = inst_12300;
var player_cell_y = inst_12797;
var player_cell_x = inst_12796;
var game_sprites = inst_12474;
var loader = inst_12268;
var player_walking_texs = inst_12305;
var player_and_surrounds = inst_12808;
var check_cell = inst_12961;
var rhx = inst_12788;
var rhy = inst_12791;
var frame_num = inst_12763;
var shadow_tex = inst_12286;
var process_add_cell = inst_12809;
var _ = inst_12960;
var tex = inst_12284;
var speed = inst_12765;
var cull_cells = inst_12837;
var hit_sfx = inst_12390;
var lobster_big = inst_12274;
var game_map = inst_12467;
var star_tex = inst_12306;
var pos = inst_12764;
var remove_cell_BANG_ = inst_12480;
var theta = inst_12766;
var tufts = inst_12333;
var game_space = inst_12475;
var pickup_textures = inst_12313;
var perlin_channel = inst_12269;
var title_text = inst_12283;
var vx = inst_12792;
var floor_objects = inst_12316;
var pickup_sfx = inst_12363;
var tilemap = inst_12281;
var vy = inst_12793;
var make_pickup = inst_12336;
var varela = inst_12275;
var new_cells = inst_12829;
var hy = inst_12785;
var wait = inst_12278;
var hx = inst_12784;
var player = inst_12285;
var player_stars_icon = inst_12307;
return ((function (add_cell_BANG_,depth_compare,vec__12779,x,player_stars_text,player_standing_texs,cells,player_shadow,player_cell,vec__12780,close_QMARK_,sprite_count,player_pos,calc_theta,obstacle_types,post_remove_cells,polar_object_coords,trees,player_hit,old_sprite_count,y,player_standing_sway,player_cell_y,player_cell_x,game_sprites,loader,player_walking_texs,player_and_surrounds,check_cell,rhx,rhy,frame_num,shadow_tex,process_add_cell,_,tex,speed,cull_cells,hit_sfx,lobster_big,game_map,star_tex,pos,remove_cell_BANG_,theta,tufts,game_space,pickup_textures,perlin_channel,title_text,vx,floor_objects,pickup_sfx,tilemap,vy,make_pickup,varela,new_cells,hy,wait,hx,player,player_stars_icon,inst_12475,inst_12281,inst_12286,inst_12795,inst_12966,inst_12278,inst_12268,inst_12306,inst_12768,inst_12319,inst_12474,inst_12274,inst_12796,inst_12765,inst_12305,inst_12390,inst_12467,inst_12781,inst_12763,inst_12333,inst_12307,inst_12793,inst_12783,inst_12300,inst_12764,inst_12363,inst_12797,inst_12792,inst_12285,inst_12326,inst_12791,inst_12859,inst_12395,inst_12766,inst_12769,inst_12316,inst_12392,inst_12808,inst_12269,inst_12782,inst_12310,inst_12837,inst_12283,inst_12794,inst_12479,inst_12809,inst_12297,inst_12287,inst_12284,inst_12784,inst_12391,inst_12767,inst_12829,inst_12275,inst_12788,inst_12478,inst_12785,inst_12313,inst_12336,inst_12480,inst_12960,inst_12961,state_val_13313,c__6459__auto___13746){
return (function (obj){
return cljs.core.some.call(null,((function (add_cell_BANG_,depth_compare,vec__12779,x,player_stars_text,player_standing_texs,cells,player_shadow,player_cell,vec__12780,close_QMARK_,sprite_count,player_pos,calc_theta,obstacle_types,post_remove_cells,polar_object_coords,trees,player_hit,old_sprite_count,y,player_standing_sway,player_cell_y,player_cell_x,game_sprites,loader,player_walking_texs,player_and_surrounds,check_cell,rhx,rhy,frame_num,shadow_tex,process_add_cell,_,tex,speed,cull_cells,hit_sfx,lobster_big,game_map,star_tex,pos,remove_cell_BANG_,theta,tufts,game_space,pickup_textures,perlin_channel,title_text,vx,floor_objects,pickup_sfx,tilemap,vy,make_pickup,varela,new_cells,hy,wait,hx,player,player_stars_icon,inst_12475,inst_12281,inst_12286,inst_12795,inst_12966,inst_12278,inst_12268,inst_12306,inst_12768,inst_12319,inst_12474,inst_12274,inst_12796,inst_12765,inst_12305,inst_12390,inst_12467,inst_12781,inst_12763,inst_12333,inst_12307,inst_12793,inst_12783,inst_12300,inst_12764,inst_12363,inst_12797,inst_12792,inst_12285,inst_12326,inst_12791,inst_12859,inst_12395,inst_12766,inst_12769,inst_12316,inst_12392,inst_12808,inst_12269,inst_12782,inst_12310,inst_12837,inst_12283,inst_12794,inst_12479,inst_12809,inst_12297,inst_12287,inst_12284,inst_12784,inst_12391,inst_12767,inst_12829,inst_12275,inst_12788,inst_12478,inst_12785,inst_12313,inst_12336,inst_12480,inst_12960,inst_12961,state_val_13313,c__6459__auto___13746){
return (function (p1__12239_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(obj),p1__12239_SHARP_);
});})(add_cell_BANG_,depth_compare,vec__12779,x,player_stars_text,player_standing_texs,cells,player_shadow,player_cell,vec__12780,close_QMARK_,sprite_count,player_pos,calc_theta,obstacle_types,post_remove_cells,polar_object_coords,trees,player_hit,old_sprite_count,y,player_standing_sway,player_cell_y,player_cell_x,game_sprites,loader,player_walking_texs,player_and_surrounds,check_cell,rhx,rhy,frame_num,shadow_tex,process_add_cell,_,tex,speed,cull_cells,hit_sfx,lobster_big,game_map,star_tex,pos,remove_cell_BANG_,theta,tufts,game_space,pickup_textures,perlin_channel,title_text,vx,floor_objects,pickup_sfx,tilemap,vy,make_pickup,varela,new_cells,hy,wait,hx,player,player_stars_icon,inst_12475,inst_12281,inst_12286,inst_12795,inst_12966,inst_12278,inst_12268,inst_12306,inst_12768,inst_12319,inst_12474,inst_12274,inst_12796,inst_12765,inst_12305,inst_12390,inst_12467,inst_12781,inst_12763,inst_12333,inst_12307,inst_12793,inst_12783,inst_12300,inst_12764,inst_12363,inst_12797,inst_12792,inst_12285,inst_12326,inst_12791,inst_12859,inst_12395,inst_12766,inst_12769,inst_12316,inst_12392,inst_12808,inst_12269,inst_12782,inst_12310,inst_12837,inst_12283,inst_12794,inst_12479,inst_12809,inst_12297,inst_12287,inst_12284,inst_12784,inst_12391,inst_12767,inst_12829,inst_12275,inst_12788,inst_12478,inst_12785,inst_12313,inst_12336,inst_12480,inst_12960,inst_12961,state_val_13313,c__6459__auto___13746))
,obstacle_types);
});
;})(add_cell_BANG_,depth_compare,vec__12779,x,player_stars_text,player_standing_texs,cells,player_shadow,player_cell,vec__12780,close_QMARK_,sprite_count,player_pos,calc_theta,obstacle_types,post_remove_cells,polar_object_coords,trees,player_hit,old_sprite_count,y,player_standing_sway,player_cell_y,player_cell_x,game_sprites,loader,player_walking_texs,player_and_surrounds,check_cell,rhx,rhy,frame_num,shadow_tex,process_add_cell,_,tex,speed,cull_cells,hit_sfx,lobster_big,game_map,star_tex,pos,remove_cell_BANG_,theta,tufts,game_space,pickup_textures,perlin_channel,title_text,vx,floor_objects,pickup_sfx,tilemap,vy,make_pickup,varela,new_cells,hy,wait,hx,player,player_stars_icon,inst_12475,inst_12281,inst_12286,inst_12795,inst_12966,inst_12278,inst_12268,inst_12306,inst_12768,inst_12319,inst_12474,inst_12274,inst_12796,inst_12765,inst_12305,inst_12390,inst_12467,inst_12781,inst_12763,inst_12333,inst_12307,inst_12793,inst_12783,inst_12300,inst_12764,inst_12363,inst_12797,inst_12792,inst_12285,inst_12326,inst_12791,inst_12859,inst_12395,inst_12766,inst_12769,inst_12316,inst_12392,inst_12808,inst_12269,inst_12782,inst_12310,inst_12837,inst_12283,inst_12794,inst_12479,inst_12809,inst_12297,inst_12287,inst_12284,inst_12784,inst_12391,inst_12767,inst_12829,inst_12275,inst_12788,inst_12478,inst_12785,inst_12313,inst_12336,inst_12480,inst_12960,inst_12961,state_val_13313,c__6459__auto___13746))
})();
var inst_12963 = cljs.core.filter.call(null,inst_12962,inst_12961);
var inst_12964 = (function (){var add_cell_BANG_ = inst_12479;
var depth_compare = inst_12391;
var vec__12779 = inst_12764;
var x = inst_12781;
var player_stars_text = inst_12310;
var player_standing_texs = inst_12297;
var cells = inst_12767;
var player_shadow = inst_12287;
var player_cell = inst_12795;
var vec__12780 = inst_12795;
var close_QMARK_ = inst_12395;
var sprite_count = inst_12768;
var player_pos = inst_12478;
var calc_theta = inst_12783;
var obstacle_types = inst_12319;
var post_remove_cells = inst_12859;
var polar_object_coords = inst_12392;
var trees = inst_12326;
var player_hit = inst_12769;
var old_sprite_count = inst_12794;
var y = inst_12782;
var player_standing_sway = inst_12300;
var player_cell_y = inst_12797;
var player_cell_x = inst_12796;
var game_sprites = inst_12474;
var loader = inst_12268;
var player_walking_texs = inst_12305;
var player_and_surrounds = inst_12808;
var check_cell = inst_12961;
var rhx = inst_12788;
var rhy = inst_12791;
var frame_num = inst_12763;
var shadow_tex = inst_12286;
var process_add_cell = inst_12809;
var _ = inst_12960;
var tex = inst_12284;
var speed = inst_12765;
var cull_cells = inst_12837;
var obstacle_QMARK_ = inst_12962;
var hit_sfx = inst_12390;
var lobster_big = inst_12274;
var game_map = inst_12467;
var star_tex = inst_12306;
var pos = inst_12764;
var remove_cell_BANG_ = inst_12480;
var theta = inst_12766;
var tufts = inst_12333;
var game_space = inst_12475;
var pickup_textures = inst_12313;
var hit_things = inst_12963;
var perlin_channel = inst_12269;
var title_text = inst_12283;
var vx = inst_12792;
var floor_objects = inst_12316;
var pickup_sfx = inst_12363;
var tilemap = inst_12281;
var vy = inst_12793;
var make_pickup = inst_12336;
var varela = inst_12275;
var new_cells = inst_12829;
var hy = inst_12785;
var wait = inst_12278;
var hx = inst_12784;
var player = inst_12285;
var player_stars_icon = inst_12307;
return ((function (add_cell_BANG_,depth_compare,vec__12779,x,player_stars_text,player_standing_texs,cells,player_shadow,player_cell,vec__12780,close_QMARK_,sprite_count,player_pos,calc_theta,obstacle_types,post_remove_cells,polar_object_coords,trees,player_hit,old_sprite_count,y,player_standing_sway,player_cell_y,player_cell_x,game_sprites,loader,player_walking_texs,player_and_surrounds,check_cell,rhx,rhy,frame_num,shadow_tex,process_add_cell,_,tex,speed,cull_cells,obstacle_QMARK_,hit_sfx,lobster_big,game_map,star_tex,pos,remove_cell_BANG_,theta,tufts,game_space,pickup_textures,hit_things,perlin_channel,title_text,vx,floor_objects,pickup_sfx,tilemap,vy,make_pickup,varela,new_cells,hy,wait,hx,player,player_stars_icon,inst_12475,inst_12281,inst_12286,inst_12795,inst_12966,inst_12278,inst_12268,inst_12306,inst_12768,inst_12319,inst_12474,inst_12274,inst_12796,inst_12765,inst_12305,inst_12390,inst_12467,inst_12781,inst_12763,inst_12333,inst_12307,inst_12793,inst_12783,inst_12300,inst_12764,inst_12363,inst_12797,inst_12792,inst_12285,inst_12326,inst_12791,inst_12859,inst_12395,inst_12766,inst_12769,inst_12316,inst_12392,inst_12808,inst_12269,inst_12782,inst_12310,inst_12837,inst_12283,inst_12794,inst_12479,inst_12809,inst_12297,inst_12287,inst_12284,inst_12784,inst_12391,inst_12767,inst_12829,inst_12275,inst_12788,inst_12478,inst_12785,inst_12313,inst_12336,inst_12480,inst_12960,inst_12961,inst_12962,inst_12963,state_val_13313,c__6459__auto___13746){
return (function (p1__12240_SHARP_){
return close_QMARK_.call(null,pos,new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(p1__12240_SHARP_),(500));
});
;})(add_cell_BANG_,depth_compare,vec__12779,x,player_stars_text,player_standing_texs,cells,player_shadow,player_cell,vec__12780,close_QMARK_,sprite_count,player_pos,calc_theta,obstacle_types,post_remove_cells,polar_object_coords,trees,player_hit,old_sprite_count,y,player_standing_sway,player_cell_y,player_cell_x,game_sprites,loader,player_walking_texs,player_and_surrounds,check_cell,rhx,rhy,frame_num,shadow_tex,process_add_cell,_,tex,speed,cull_cells,obstacle_QMARK_,hit_sfx,lobster_big,game_map,star_tex,pos,remove_cell_BANG_,theta,tufts,game_space,pickup_textures,hit_things,perlin_channel,title_text,vx,floor_objects,pickup_sfx,tilemap,vy,make_pickup,varela,new_cells,hy,wait,hx,player,player_stars_icon,inst_12475,inst_12281,inst_12286,inst_12795,inst_12966,inst_12278,inst_12268,inst_12306,inst_12768,inst_12319,inst_12474,inst_12274,inst_12796,inst_12765,inst_12305,inst_12390,inst_12467,inst_12781,inst_12763,inst_12333,inst_12307,inst_12793,inst_12783,inst_12300,inst_12764,inst_12363,inst_12797,inst_12792,inst_12285,inst_12326,inst_12791,inst_12859,inst_12395,inst_12766,inst_12769,inst_12316,inst_12392,inst_12808,inst_12269,inst_12782,inst_12310,inst_12837,inst_12283,inst_12794,inst_12479,inst_12809,inst_12297,inst_12287,inst_12284,inst_12784,inst_12391,inst_12767,inst_12829,inst_12275,inst_12788,inst_12478,inst_12785,inst_12313,inst_12336,inst_12480,inst_12960,inst_12961,inst_12962,inst_12963,state_val_13313,c__6459__auto___13746))
})();
var inst_12965 = cljs.core.some.call(null,inst_12964,inst_12963);
var inst_12966__$1 = cljs.core._EQ_.call(null,(0),inst_12769);
var state_13312__$1 = (function (){var statearr_13459 = state_13312;
(statearr_13459[(19)] = inst_12966__$1);

(statearr_13459[(28)] = inst_12965);

return statearr_13459;
})();
if(inst_12966__$1){
var statearr_13460_13852 = state_13312__$1;
(statearr_13460_13852[(1)] = (58));

} else {
var statearr_13461_13853 = state_13312__$1;
(statearr_13461_13853[(1)] = (59));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13313 === (125))){
var inst_12763 = (state_13312[(48)]);
var inst_12769 = (state_13312[(7)]);
var inst_13257 = (state_13312[(2)]);
var inst_13258 = (inst_12763 + (1));
var inst_13259 = (inst_12769 > (0));
var state_13312__$1 = (function (){var statearr_13462 = state_13312;
(statearr_13462[(148)] = inst_13257);

(statearr_13462[(149)] = inst_13258);

return statearr_13462;
})();
if(cljs.core.truth_(inst_13259)){
var statearr_13463_13854 = state_13312__$1;
(statearr_13463_13854[(1)] = (126));

} else {
var statearr_13464_13855 = state_13312__$1;
(statearr_13464_13855[(1)] = (127));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13313 === (17))){
var inst_12475 = (state_13312[(8)]);
var inst_12281 = (state_13312[(34)]);
var inst_12286 = (state_13312[(35)]);
var inst_12278 = (state_13312[(37)]);
var inst_12268 = (state_13312[(29)]);
var inst_12306 = (state_13312[(38)]);
var inst_12319 = (state_13312[(40)]);
var inst_12474 = (state_13312[(41)]);
var inst_12274 = (state_13312[(42)]);
var inst_12305 = (state_13312[(45)]);
var inst_12390 = (state_13312[(46)]);
var inst_12467 = (state_13312[(47)]);
var inst_12333 = (state_13312[(49)]);
var inst_12307 = (state_13312[(50)]);
var inst_12300 = (state_13312[(53)]);
var inst_12363 = (state_13312[(55)]);
var inst_12285 = (state_13312[(58)]);
var inst_12326 = (state_13312[(59)]);
var inst_12395 = (state_13312[(60)]);
var inst_12282 = (state_13312[(68)]);
var inst_12316 = (state_13312[(69)]);
var inst_12392 = (state_13312[(22)]);
var inst_12269 = (state_13312[(32)]);
var inst_12310 = (state_13312[(71)]);
var inst_12283 = (state_13312[(72)]);
var inst_12479 = (state_13312[(74)]);
var inst_12297 = (state_13312[(76)]);
var inst_12287 = (state_13312[(77)]);
var inst_12284 = (state_13312[(78)]);
var inst_12391 = (state_13312[(80)]);
var inst_12275 = (state_13312[(82)]);
var inst_12478 = (state_13312[(83)]);
var inst_12313 = (state_13312[(85)]);
var inst_12336 = (state_13312[(86)]);
var inst_12480 = (state_13312[(87)]);
var inst_12637 = (state_13312[(2)]);
var inst_12638 = farn.utils.log.call(null,"adding player");
var inst_12640 = farn.sprite.set_scale_BANG_.call(null,inst_12285,0.5);
var inst_12641 = farn.core.main_stage.addChild(inst_12285);
var inst_12642 = farn.core.main_stage.addChild(inst_12287);
var inst_12748 = cljs.core.async.chan.call(null,(1));
var inst_12749 = (function (){var add_cell_BANG_ = inst_12479;
var depth_compare = inst_12391;
var player_stars_text = inst_12310;
var player_standing_texs = inst_12297;
var player_shadow = inst_12287;
var close_QMARK_ = inst_12395;
var player_pos = inst_12478;
var obstacle_types = inst_12319;
var polar_object_coords = inst_12392;
var trees = inst_12326;
var player_standing_sway = inst_12300;
var game_sprites = inst_12474;
var loader = inst_12268;
var player_walking_texs = inst_12305;
var shadow_tex = inst_12286;
var _ = inst_12282;
var tex = inst_12284;
var c__6459__auto____$1 = inst_12748;
var hit_sfx = inst_12390;
var lobster_big = inst_12274;
var game_map = inst_12467;
var star_tex = inst_12306;
var remove_cell_BANG_ = inst_12480;
var tufts = inst_12333;
var game_space = inst_12475;
var pickup_textures = inst_12313;
var perlin_channel = inst_12269;
var title_text = inst_12283;
var floor_objects = inst_12316;
var pickup_sfx = inst_12363;
var tilemap = inst_12281;
var make_pickup = inst_12336;
var varela = inst_12275;
var wait = inst_12278;
var player = inst_12285;
var player_stars_icon = inst_12307;
return ((function (add_cell_BANG_,depth_compare,player_stars_text,player_standing_texs,player_shadow,close_QMARK_,player_pos,obstacle_types,polar_object_coords,trees,player_standing_sway,game_sprites,loader,player_walking_texs,shadow_tex,_,tex,c__6459__auto____$1,hit_sfx,lobster_big,game_map,star_tex,remove_cell_BANG_,tufts,game_space,pickup_textures,perlin_channel,title_text,floor_objects,pickup_sfx,tilemap,make_pickup,varela,wait,player,player_stars_icon,inst_12475,inst_12281,inst_12286,inst_12278,inst_12268,inst_12306,inst_12319,inst_12474,inst_12274,inst_12305,inst_12390,inst_12467,inst_12333,inst_12307,inst_12300,inst_12363,inst_12285,inst_12326,inst_12395,inst_12282,inst_12316,inst_12392,inst_12269,inst_12310,inst_12283,inst_12479,inst_12297,inst_12287,inst_12284,inst_12391,inst_12275,inst_12478,inst_12313,inst_12336,inst_12480,inst_12637,inst_12638,inst_12640,inst_12641,inst_12642,inst_12748,state_val_13313,c__6459__auto___13746){
return (function (){
var f__6460__auto__ = (function (){var switch__6444__auto__ = ((function (add_cell_BANG_,depth_compare,player_stars_text,player_standing_texs,player_shadow,close_QMARK_,player_pos,obstacle_types,polar_object_coords,trees,player_standing_sway,game_sprites,loader,player_walking_texs,shadow_tex,_,tex,c__6459__auto____$1,hit_sfx,lobster_big,game_map,star_tex,remove_cell_BANG_,tufts,game_space,pickup_textures,perlin_channel,title_text,floor_objects,pickup_sfx,tilemap,make_pickup,varela,wait,player,player_stars_icon,inst_12475,inst_12281,inst_12286,inst_12278,inst_12268,inst_12306,inst_12319,inst_12474,inst_12274,inst_12305,inst_12390,inst_12467,inst_12333,inst_12307,inst_12300,inst_12363,inst_12285,inst_12326,inst_12395,inst_12282,inst_12316,inst_12392,inst_12269,inst_12310,inst_12283,inst_12479,inst_12297,inst_12287,inst_12284,inst_12391,inst_12275,inst_12478,inst_12313,inst_12336,inst_12480,inst_12637,inst_12638,inst_12640,inst_12641,inst_12642,inst_12748,state_val_13313,c__6459__auto___13746){
return (function (state_12746){
var state_val_12747 = (state_12746[(1)]);
if((state_val_12747 === (7))){
var inst_12738 = (state_12746[(2)]);
var state_12746__$1 = (function (){var statearr_13465 = state_12746;
(statearr_13465[(7)] = inst_12738);

return statearr_13465;
})();
var statearr_13466_13856 = state_12746__$1;
(statearr_13466_13856[(2)] = null);

(statearr_13466_13856[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12747 === (20))){
var state_12746__$1 = state_12746;
var statearr_13467_13857 = state_12746__$1;
(statearr_13467_13857[(2)] = null);

(statearr_13467_13857[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12747 === (27))){
var inst_12701 = (state_12746[(2)]);
var inst_12702 = cljs.core.deref.call(null,farn.core.player_animation);
var inst_12703 = cljs.core._EQ_.call(null,inst_12702,new cljs.core.Keyword(null,"running","running",1554969103));
var state_12746__$1 = (function (){var statearr_13468 = state_12746;
(statearr_13468[(8)] = inst_12701);

return statearr_13468;
})();
if(inst_12703){
var statearr_13469_13858 = state_12746__$1;
(statearr_13469_13858[(1)] = (32));

} else {
var statearr_13470_13859 = state_12746__$1;
(statearr_13470_13859[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12747 === (1))){
var state_12746__$1 = state_12746;
var statearr_13471_13860 = state_12746__$1;
(statearr_13471_13860[(2)] = null);

(statearr_13471_13860[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12747 === (24))){
var state_12746__$1 = state_12746;
var statearr_13472_13861 = state_12746__$1;
(statearr_13472_13861[(2)] = null);

(statearr_13472_13861[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12747 === (39))){
var state_12746__$1 = state_12746;
var statearr_13473_13862 = state_12746__$1;
(statearr_13473_13862[(2)] = null);

(statearr_13473_13862[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12747 === (4))){
var inst_12736 = cljs.core.deref.call(null,farn.core.player_animation);
var state_12746__$1 = state_12746;
var G__13474_13863 = (((inst_12736 instanceof cljs.core.Keyword))?inst_12736.fqn:null);
switch (G__13474_13863) {
case "running":
var statearr_13475_13865 = state_12746__$1;
(statearr_13475_13865[(1)] = (20));


break;
case "standing":
var statearr_13476_13866 = state_12746__$1;
(statearr_13476_13866[(1)] = (8));


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(inst_12736)].join('')));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12747 === (15))){
var inst_12669 = (state_12746[(2)]);
var state_12746__$1 = (function (){var statearr_13477 = state_12746;
(statearr_13477[(9)] = inst_12669);

return statearr_13477;
})();
var statearr_13478_13867 = state_12746__$1;
(statearr_13478_13867[(2)] = null);

(statearr_13478_13867[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12747 === (21))){
var inst_12678 = cljs.core.deref.call(null,farn.core.player_animation);
var inst_12679 = cljs.core._EQ_.call(null,inst_12678,new cljs.core.Keyword(null,"running","running",1554969103));
var state_12746__$1 = state_12746;
if(inst_12679){
var statearr_13479_13868 = state_12746__$1;
(statearr_13479_13868[(1)] = (23));

} else {
var statearr_13480_13869 = state_12746__$1;
(statearr_13480_13869[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12747 === (31))){
var inst_12699 = (state_12746[(2)]);
var state_12746__$1 = state_12746;
var statearr_13481_13870 = state_12746__$1;
(statearr_13481_13870[(2)] = inst_12699);

(statearr_13481_13870[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12747 === (32))){
var inst_12705 = player_walking_texs.call(null,(1));
var inst_12706 = player.setTexture(inst_12705);
var inst_12707 = (0);
var state_12746__$1 = (function (){var statearr_13482 = state_12746;
(statearr_13482[(10)] = inst_12707);

(statearr_13482[(11)] = inst_12706);

return statearr_13482;
})();
var statearr_13483_13871 = state_12746__$1;
(statearr_13483_13871[(2)] = null);

(statearr_13483_13871[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12747 === (40))){
var inst_12723 = (state_12746[(2)]);
var state_12746__$1 = state_12746;
var statearr_13484_13872 = state_12746__$1;
(statearr_13484_13872[(2)] = inst_12723);

(statearr_13484_13872[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12747 === (33))){
var state_12746__$1 = state_12746;
var statearr_13485_13873 = state_12746__$1;
(statearr_13485_13873[(2)] = null);

(statearr_13485_13873[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12747 === (13))){
var inst_12673 = (state_12746[(2)]);
var state_12746__$1 = state_12746;
var statearr_13486_13874 = state_12746__$1;
(statearr_13486_13874[(2)] = inst_12673);

(statearr_13486_13874[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12747 === (22))){
var inst_12734 = (state_12746[(2)]);
var state_12746__$1 = state_12746;
var statearr_13487_13875 = state_12746__$1;
(statearr_13487_13875[(2)] = inst_12734);

(statearr_13487_13875[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12747 === (36))){
var inst_12725 = (state_12746[(2)]);
var state_12746__$1 = state_12746;
var statearr_13488_13876 = state_12746__$1;
(statearr_13488_13876[(2)] = inst_12725);

(statearr_13488_13876[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12747 === (29))){
var inst_12683 = (state_12746[(12)]);
var inst_12695 = (inst_12683 + (1));
var inst_12683__$1 = inst_12695;
var state_12746__$1 = (function (){var statearr_13489 = state_12746;
(statearr_13489[(12)] = inst_12683__$1);

return statearr_13489;
})();
var statearr_13490_13877 = state_12746__$1;
(statearr_13490_13877[(2)] = null);

(statearr_13490_13877[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12747 === (6))){
var inst_12742 = (state_12746[(2)]);
var state_12746__$1 = state_12746;
var statearr_13491_13878 = state_12746__$1;
(statearr_13491_13878[(2)] = inst_12742);

(statearr_13491_13878[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12747 === (28))){
var inst_12683 = (state_12746[(12)]);
var inst_12687 = (state_12746[(2)]);
var inst_12688 = (inst_12683 / farn.core.player_bound_length);
var inst_12689 = (Math.PI * inst_12688);
var inst_12690 = Math.sin.call(null,inst_12689);
var inst_12691 = (farn.core.player_bound_height * inst_12690);
var inst_12692 = farn.sprite.set_pivot_BANG_.call(null,player,(-1),inst_12691);
var inst_12693 = (inst_12683 < farn.core.player_bound_length);
var state_12746__$1 = (function (){var statearr_13492 = state_12746;
(statearr_13492[(13)] = inst_12687);

(statearr_13492[(14)] = inst_12692);

return statearr_13492;
})();
if(cljs.core.truth_(inst_12693)){
var statearr_13493_13879 = state_12746__$1;
(statearr_13493_13879[(1)] = (29));

} else {
var statearr_13494_13880 = state_12746__$1;
(statearr_13494_13880[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12747 === (25))){
var inst_12732 = (state_12746[(2)]);
var state_12746__$1 = state_12746;
var statearr_13495_13881 = state_12746__$1;
(statearr_13495_13881[(2)] = inst_12732);

(statearr_13495_13881[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12747 === (34))){
var inst_12728 = (state_12746[(2)]);
var state_12746__$1 = (function (){var statearr_13496 = state_12746;
(statearr_13496[(15)] = inst_12728);

return statearr_13496;
})();
var statearr_13497_13882 = state_12746__$1;
(statearr_13497_13882[(2)] = null);

(statearr_13497_13882[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12747 === (17))){
var inst_12649 = (state_12746[(16)]);
var inst_12662 = (inst_12649 + (1));
var inst_12663 = cljs.core.mod.call(null,inst_12662,(4));
var inst_12649__$1 = inst_12663;
var state_12746__$1 = (function (){var statearr_13498 = state_12746;
(statearr_13498[(16)] = inst_12649__$1);

return statearr_13498;
})();
var statearr_13499_13883 = state_12746__$1;
(statearr_13499_13883[(2)] = null);

(statearr_13499_13883[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12747 === (3))){
var inst_12744 = (state_12746[(2)]);
var state_12746__$1 = state_12746;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12746__$1,inst_12744);
} else {
if((state_val_12747 === (12))){
var state_12746__$1 = state_12746;
var statearr_13500_13884 = state_12746__$1;
(statearr_13500_13884[(2)] = null);

(statearr_13500_13884[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12747 === (2))){
var state_12746__$1 = state_12746;
var statearr_13501_13885 = state_12746__$1;
(statearr_13501_13885[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12747 === (23))){
var inst_12681 = player_walking_texs.call(null,(0));
var inst_12682 = player.setTexture(inst_12681);
var inst_12683 = (0);
var state_12746__$1 = (function (){var statearr_13503 = state_12746;
(statearr_13503[(12)] = inst_12683);

(statearr_13503[(17)] = inst_12682);

return statearr_13503;
})();
var statearr_13504_13886 = state_12746__$1;
(statearr_13504_13886[(2)] = null);

(statearr_13504_13886[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12747 === (35))){
var inst_12709 = farn.events.next_frame.call(null);
var state_12746__$1 = state_12746;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12746__$1,(37),inst_12709);
} else {
if((state_val_12747 === (19))){
var inst_12667 = (state_12746[(2)]);
var state_12746__$1 = state_12746;
var statearr_13505_13887 = state_12746__$1;
(statearr_13505_13887[(2)] = inst_12667);

(statearr_13505_13887[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12747 === (11))){
var inst_12649 = (0);
var state_12746__$1 = (function (){var statearr_13506 = state_12746;
(statearr_13506[(16)] = inst_12649);

return statearr_13506;
})();
var statearr_13507_13888 = state_12746__$1;
(statearr_13507_13888[(2)] = null);

(statearr_13507_13888[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12747 === (9))){
var inst_12646 = cljs.core.deref.call(null,farn.core.player_animation);
var inst_12647 = cljs.core._EQ_.call(null,inst_12646,new cljs.core.Keyword(null,"standing","standing",-1248340762));
var state_12746__$1 = state_12746;
if(inst_12647){
var statearr_13508_13889 = state_12746__$1;
(statearr_13508_13889[(1)] = (11));

} else {
var statearr_13509_13890 = state_12746__$1;
(statearr_13509_13890[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12747 === (5))){
var state_12746__$1 = state_12746;
var statearr_13510_13891 = state_12746__$1;
(statearr_13510_13891[(2)] = null);

(statearr_13510_13891[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12747 === (14))){
var inst_12651 = farn.utils.rand_between.call(null,(300),(600));
var inst_12652 = cljs.core.async.timeout.call(null,inst_12651);
var state_12746__$1 = state_12746;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12746__$1,(16),inst_12652);
} else {
if((state_val_12747 === (26))){
var inst_12685 = farn.events.next_frame.call(null);
var state_12746__$1 = state_12746;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12746__$1,(28),inst_12685);
} else {
if((state_val_12747 === (16))){
var inst_12649 = (state_12746[(16)]);
var inst_12654 = (state_12746[(2)]);
var inst_12655 = cljs.core.nth.call(null,player_standing_texs,inst_12649);
var inst_12656 = player.setTexture(inst_12655);
var inst_12657 = player_standing_sway.call(null,inst_12649);
var inst_12658 = farn.sprite.set_pivot_BANG_.call(null,player,inst_12657,(0));
var inst_12659 = cljs.core.deref.call(null,farn.core.player_animation);
var inst_12660 = cljs.core._EQ_.call(null,inst_12659,new cljs.core.Keyword(null,"standing","standing",-1248340762));
var state_12746__$1 = (function (){var statearr_13511 = state_12746;
(statearr_13511[(18)] = inst_12654);

(statearr_13511[(19)] = inst_12656);

(statearr_13511[(20)] = inst_12658);

return statearr_13511;
})();
if(inst_12660){
var statearr_13512_13892 = state_12746__$1;
(statearr_13512_13892[(1)] = (17));

} else {
var statearr_13513_13893 = state_12746__$1;
(statearr_13513_13893[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12747 === (38))){
var inst_12707 = (state_12746[(10)]);
var inst_12719 = (inst_12707 + (1));
var inst_12707__$1 = inst_12719;
var state_12746__$1 = (function (){var statearr_13514 = state_12746;
(statearr_13514[(10)] = inst_12707__$1);

return statearr_13514;
})();
var statearr_13515_13894 = state_12746__$1;
(statearr_13515_13894[(2)] = null);

(statearr_13515_13894[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12747 === (30))){
var state_12746__$1 = state_12746;
var statearr_13516_13895 = state_12746__$1;
(statearr_13516_13895[(2)] = null);

(statearr_13516_13895[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12747 === (10))){
var inst_12675 = (state_12746[(2)]);
var state_12746__$1 = state_12746;
var statearr_13517_13896 = state_12746__$1;
(statearr_13517_13896[(2)] = inst_12675);

(statearr_13517_13896[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12747 === (18))){
var state_12746__$1 = state_12746;
var statearr_13518_13897 = state_12746__$1;
(statearr_13518_13897[(2)] = null);

(statearr_13518_13897[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12747 === (37))){
var inst_12707 = (state_12746[(10)]);
var inst_12711 = (state_12746[(2)]);
var inst_12712 = (inst_12707 / farn.core.player_bound_length);
var inst_12713 = (Math.PI * inst_12712);
var inst_12714 = Math.sin.call(null,inst_12713);
var inst_12715 = (farn.core.player_bound_height * inst_12714);
var inst_12716 = farn.sprite.set_pivot_BANG_.call(null,player,(1),inst_12715);
var inst_12717 = (inst_12707 < farn.core.player_bound_length);
var state_12746__$1 = (function (){var statearr_13519 = state_12746;
(statearr_13519[(21)] = inst_12711);

(statearr_13519[(22)] = inst_12716);

return statearr_13519;
})();
if(cljs.core.truth_(inst_12717)){
var statearr_13520_13898 = state_12746__$1;
(statearr_13520_13898[(1)] = (38));

} else {
var statearr_13521_13899 = state_12746__$1;
(statearr_13521_13899[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12747 === (8))){
var state_12746__$1 = state_12746;
var statearr_13522_13900 = state_12746__$1;
(statearr_13522_13900[(2)] = null);

(statearr_13522_13900[(1)] = (9));


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
});})(add_cell_BANG_,depth_compare,player_stars_text,player_standing_texs,player_shadow,close_QMARK_,player_pos,obstacle_types,polar_object_coords,trees,player_standing_sway,game_sprites,loader,player_walking_texs,shadow_tex,_,tex,c__6459__auto____$1,hit_sfx,lobster_big,game_map,star_tex,remove_cell_BANG_,tufts,game_space,pickup_textures,perlin_channel,title_text,floor_objects,pickup_sfx,tilemap,make_pickup,varela,wait,player,player_stars_icon,inst_12475,inst_12281,inst_12286,inst_12278,inst_12268,inst_12306,inst_12319,inst_12474,inst_12274,inst_12305,inst_12390,inst_12467,inst_12333,inst_12307,inst_12300,inst_12363,inst_12285,inst_12326,inst_12395,inst_12282,inst_12316,inst_12392,inst_12269,inst_12310,inst_12283,inst_12479,inst_12297,inst_12287,inst_12284,inst_12391,inst_12275,inst_12478,inst_12313,inst_12336,inst_12480,inst_12637,inst_12638,inst_12640,inst_12641,inst_12642,inst_12748,state_val_13313,c__6459__auto___13746))
;
return ((function (switch__6444__auto__,add_cell_BANG_,depth_compare,player_stars_text,player_standing_texs,player_shadow,close_QMARK_,player_pos,obstacle_types,polar_object_coords,trees,player_standing_sway,game_sprites,loader,player_walking_texs,shadow_tex,_,tex,c__6459__auto____$1,hit_sfx,lobster_big,game_map,star_tex,remove_cell_BANG_,tufts,game_space,pickup_textures,perlin_channel,title_text,floor_objects,pickup_sfx,tilemap,make_pickup,varela,wait,player,player_stars_icon,inst_12475,inst_12281,inst_12286,inst_12278,inst_12268,inst_12306,inst_12319,inst_12474,inst_12274,inst_12305,inst_12390,inst_12467,inst_12333,inst_12307,inst_12300,inst_12363,inst_12285,inst_12326,inst_12395,inst_12282,inst_12316,inst_12392,inst_12269,inst_12310,inst_12283,inst_12479,inst_12297,inst_12287,inst_12284,inst_12391,inst_12275,inst_12478,inst_12313,inst_12336,inst_12480,inst_12637,inst_12638,inst_12640,inst_12641,inst_12642,inst_12748,state_val_13313,c__6459__auto___13746){
return (function() {
var state_machine__6445__auto__ = null;
var state_machine__6445__auto____0 = (function (){
var statearr_13526 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13526[(0)] = state_machine__6445__auto__);

(statearr_13526[(1)] = (1));

return statearr_13526;
});
var state_machine__6445__auto____1 = (function (state_12746){
while(true){
var ret_value__6446__auto__ = (function (){try{while(true){
var result__6447__auto__ = switch__6444__auto__.call(null,state_12746);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6447__auto__;
}
break;
}
}catch (e13527){if((e13527 instanceof Object)){
var ex__6448__auto__ = e13527;
var statearr_13528_13901 = state_12746;
(statearr_13528_13901[(5)] = ex__6448__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12746);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13527;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13902 = state_12746;
state_12746 = G__13902;
continue;
} else {
return ret_value__6446__auto__;
}
break;
}
});
state_machine__6445__auto__ = function(state_12746){
switch(arguments.length){
case 0:
return state_machine__6445__auto____0.call(this);
case 1:
return state_machine__6445__auto____1.call(this,state_12746);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6445__auto____0;
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6445__auto____1;
return state_machine__6445__auto__;
})()
;})(switch__6444__auto__,add_cell_BANG_,depth_compare,player_stars_text,player_standing_texs,player_shadow,close_QMARK_,player_pos,obstacle_types,polar_object_coords,trees,player_standing_sway,game_sprites,loader,player_walking_texs,shadow_tex,_,tex,c__6459__auto____$1,hit_sfx,lobster_big,game_map,star_tex,remove_cell_BANG_,tufts,game_space,pickup_textures,perlin_channel,title_text,floor_objects,pickup_sfx,tilemap,make_pickup,varela,wait,player,player_stars_icon,inst_12475,inst_12281,inst_12286,inst_12278,inst_12268,inst_12306,inst_12319,inst_12474,inst_12274,inst_12305,inst_12390,inst_12467,inst_12333,inst_12307,inst_12300,inst_12363,inst_12285,inst_12326,inst_12395,inst_12282,inst_12316,inst_12392,inst_12269,inst_12310,inst_12283,inst_12479,inst_12297,inst_12287,inst_12284,inst_12391,inst_12275,inst_12478,inst_12313,inst_12336,inst_12480,inst_12637,inst_12638,inst_12640,inst_12641,inst_12642,inst_12748,state_val_13313,c__6459__auto___13746))
})();
var state__6461__auto__ = (function (){var statearr_13529 = f__6460__auto__.call(null);
(statearr_13529[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6459__auto____$1);

return statearr_13529;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6461__auto__);
});
;})(add_cell_BANG_,depth_compare,player_stars_text,player_standing_texs,player_shadow,close_QMARK_,player_pos,obstacle_types,polar_object_coords,trees,player_standing_sway,game_sprites,loader,player_walking_texs,shadow_tex,_,tex,c__6459__auto____$1,hit_sfx,lobster_big,game_map,star_tex,remove_cell_BANG_,tufts,game_space,pickup_textures,perlin_channel,title_text,floor_objects,pickup_sfx,tilemap,make_pickup,varela,wait,player,player_stars_icon,inst_12475,inst_12281,inst_12286,inst_12278,inst_12268,inst_12306,inst_12319,inst_12474,inst_12274,inst_12305,inst_12390,inst_12467,inst_12333,inst_12307,inst_12300,inst_12363,inst_12285,inst_12326,inst_12395,inst_12282,inst_12316,inst_12392,inst_12269,inst_12310,inst_12283,inst_12479,inst_12297,inst_12287,inst_12284,inst_12391,inst_12275,inst_12478,inst_12313,inst_12336,inst_12480,inst_12637,inst_12638,inst_12640,inst_12641,inst_12642,inst_12748,state_val_13313,c__6459__auto___13746))
})();
var inst_12750 = cljs.core.async.impl.dispatch.run.call(null,inst_12749);
var inst_12751 = farn.spatial.which_cell.call(null,inst_12478,farn.core.cell_size);
var inst_12752 = inst_12479.call(null,inst_12751);
var inst_12753 = farn.core.main_stage.children;
var inst_12754 = inst_12753.sort(inst_12391);
var inst_12755 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_12756 = [(0),(0)];
var inst_12757 = (new cljs.core.PersistentVector(null,2,(5),inst_12755,inst_12756,null));
var inst_12758 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_12759 = [(0),(0)];
var inst_12760 = (new cljs.core.PersistentVector(null,2,(5),inst_12758,inst_12759,null));
var inst_12761 = [inst_12760];
var inst_12762 = cljs.core.PersistentHashSet.fromArray(inst_12761,true);
var inst_12763 = (0);
var inst_12764 = inst_12757;
var inst_12765 = (0);
var inst_12766 = (0);
var inst_12767 = inst_12762;
var inst_12768 = (0);
var inst_12769 = (0);
var state_13312__$1 = (function (){var statearr_13530 = state_13312;
(statearr_13530[(150)] = inst_12642);

(statearr_13530[(39)] = inst_12768);

(statearr_13530[(44)] = inst_12765);

(statearr_13530[(151)] = inst_12750);

(statearr_13530[(48)] = inst_12763);

(statearr_13530[(152)] = inst_12754);

(statearr_13530[(54)] = inst_12764);

(statearr_13530[(153)] = inst_12752);

(statearr_13530[(61)] = inst_12766);

(statearr_13530[(7)] = inst_12769);

(statearr_13530[(154)] = inst_12637);

(statearr_13530[(81)] = inst_12767);

(statearr_13530[(155)] = inst_12641);

(statearr_13530[(156)] = inst_12638);

(statearr_13530[(157)] = inst_12640);

return statearr_13530;
})();
var statearr_13531_13903 = state_13312__$1;
(statearr_13531_13903[(2)] = null);

(statearr_13531_13903[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13313 === (3))){
var inst_12269 = (state_13312[(32)]);
var inst_12278 = (state_13312[(2)]);
var inst_12279 = farn.utils.log.call(null,"perlin channel - start");
var state_13312__$1 = (function (){var statearr_13532 = state_13312;
(statearr_13532[(158)] = inst_12279);

(statearr_13532[(37)] = inst_12278);

return statearr_13532;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13312__$1,(4),inst_12269);
} else {
if((state_val_13313 === (12))){
var inst_12475 = (state_13312[(8)]);
var inst_12281 = (state_13312[(34)]);
var inst_12286 = (state_13312[(35)]);
var inst_12278 = (state_13312[(37)]);
var inst_12268 = (state_13312[(29)]);
var inst_12306 = (state_13312[(38)]);
var inst_12319 = (state_13312[(40)]);
var inst_12474 = (state_13312[(41)]);
var inst_12274 = (state_13312[(42)]);
var inst_12305 = (state_13312[(45)]);
var inst_12390 = (state_13312[(46)]);
var inst_12467 = (state_13312[(47)]);
var inst_12333 = (state_13312[(49)]);
var inst_12307 = (state_13312[(50)]);
var inst_12300 = (state_13312[(53)]);
var inst_12363 = (state_13312[(55)]);
var inst_12285 = (state_13312[(58)]);
var inst_12326 = (state_13312[(59)]);
var inst_12395 = (state_13312[(60)]);
var inst_12282 = (state_13312[(68)]);
var inst_12316 = (state_13312[(69)]);
var inst_12392 = (state_13312[(22)]);
var inst_12269 = (state_13312[(32)]);
var inst_12310 = (state_13312[(71)]);
var inst_12283 = (state_13312[(72)]);
var inst_12479 = (state_13312[(74)]);
var inst_12297 = (state_13312[(76)]);
var inst_12287 = (state_13312[(77)]);
var inst_12284 = (state_13312[(78)]);
var inst_12391 = (state_13312[(80)]);
var inst_12275 = (state_13312[(82)]);
var inst_12478 = (state_13312[(83)]);
var inst_12313 = (state_13312[(85)]);
var inst_12336 = (state_13312[(86)]);
var inst_12480 = (state_13312[(87)]);
var inst_12390__$1 = (state_13312[(2)]);
var inst_12391__$1 = (function (){var player_stars_text = inst_12310;
var player_standing_texs = inst_12297;
var player_shadow = inst_12287;
var obstacle_types = inst_12319;
var trees = inst_12326;
var player_standing_sway = inst_12300;
var loader = inst_12268;
var player_walking_texs = inst_12305;
var shadow_tex = inst_12286;
var _ = inst_12282;
var tex = inst_12284;
var hit_sfx = inst_12390__$1;
var lobster_big = inst_12274;
var star_tex = inst_12306;
var tufts = inst_12333;
var pickup_textures = inst_12313;
var perlin_channel = inst_12269;
var title_text = inst_12283;
var floor_objects = inst_12316;
var pickup_sfx = inst_12363;
var tilemap = inst_12281;
var make_pickup = inst_12336;
var varela = inst_12275;
var wait = inst_12278;
var player = inst_12285;
var player_stars_icon = inst_12307;
return ((function (player_stars_text,player_standing_texs,player_shadow,obstacle_types,trees,player_standing_sway,loader,player_walking_texs,shadow_tex,_,tex,hit_sfx,lobster_big,star_tex,tufts,pickup_textures,perlin_channel,title_text,floor_objects,pickup_sfx,tilemap,make_pickup,varela,wait,player,player_stars_icon,inst_12475,inst_12281,inst_12286,inst_12278,inst_12268,inst_12306,inst_12319,inst_12474,inst_12274,inst_12305,inst_12390,inst_12467,inst_12333,inst_12307,inst_12300,inst_12363,inst_12285,inst_12326,inst_12395,inst_12282,inst_12316,inst_12392,inst_12269,inst_12310,inst_12283,inst_12479,inst_12297,inst_12287,inst_12284,inst_12391,inst_12275,inst_12478,inst_12313,inst_12336,inst_12480,inst_12390__$1,state_val_13313,c__6459__auto___13746){
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
;})(player_stars_text,player_standing_texs,player_shadow,obstacle_types,trees,player_standing_sway,loader,player_walking_texs,shadow_tex,_,tex,hit_sfx,lobster_big,star_tex,tufts,pickup_textures,perlin_channel,title_text,floor_objects,pickup_sfx,tilemap,make_pickup,varela,wait,player,player_stars_icon,inst_12475,inst_12281,inst_12286,inst_12278,inst_12268,inst_12306,inst_12319,inst_12474,inst_12274,inst_12305,inst_12390,inst_12467,inst_12333,inst_12307,inst_12300,inst_12363,inst_12285,inst_12326,inst_12395,inst_12282,inst_12316,inst_12392,inst_12269,inst_12310,inst_12283,inst_12479,inst_12297,inst_12287,inst_12284,inst_12391,inst_12275,inst_12478,inst_12313,inst_12336,inst_12480,inst_12390__$1,state_val_13313,c__6459__auto___13746))
})();
var inst_12392__$1 = (function (){var depth_compare = inst_12391__$1;
var player_stars_text = inst_12310;
var player_standing_texs = inst_12297;
var player_shadow = inst_12287;
var obstacle_types = inst_12319;
var trees = inst_12326;
var player_standing_sway = inst_12300;
var loader = inst_12268;
var player_walking_texs = inst_12305;
var shadow_tex = inst_12286;
var _ = inst_12282;
var tex = inst_12284;
var hit_sfx = inst_12390__$1;
var lobster_big = inst_12274;
var star_tex = inst_12306;
var tufts = inst_12333;
var pickup_textures = inst_12313;
var perlin_channel = inst_12269;
var title_text = inst_12283;
var floor_objects = inst_12316;
var pickup_sfx = inst_12363;
var tilemap = inst_12281;
var make_pickup = inst_12336;
var varela = inst_12275;
var wait = inst_12278;
var player = inst_12285;
var player_stars_icon = inst_12307;
return ((function (depth_compare,player_stars_text,player_standing_texs,player_shadow,obstacle_types,trees,player_standing_sway,loader,player_walking_texs,shadow_tex,_,tex,hit_sfx,lobster_big,star_tex,tufts,pickup_textures,perlin_channel,title_text,floor_objects,pickup_sfx,tilemap,make_pickup,varela,wait,player,player_stars_icon,inst_12475,inst_12281,inst_12286,inst_12278,inst_12268,inst_12306,inst_12319,inst_12474,inst_12274,inst_12305,inst_12390,inst_12467,inst_12333,inst_12307,inst_12300,inst_12363,inst_12285,inst_12326,inst_12395,inst_12282,inst_12316,inst_12392,inst_12269,inst_12310,inst_12283,inst_12479,inst_12297,inst_12287,inst_12284,inst_12391,inst_12275,inst_12478,inst_12313,inst_12336,inst_12480,inst_12390__$1,inst_12391__$1,state_val_13313,c__6459__auto___13746){
return (function (obj_pos,obj_sprite,player_x,player_y,rhx,rhy){
var vec__13533 = obj_pos;
var ox = cljs.core.nth.call(null,vec__13533,(0),null);
var oy = cljs.core.nth.call(null,vec__13533,(1),null);
var p__GT_t = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(ox - player_x),(oy - player_y)], null);
var vec__13534 = p__GT_t;
var p__GT_t_x = cljs.core.nth.call(null,vec__13534,(0),null);
var p__GT_t_y = cljs.core.nth.call(null,vec__13534,(1),null);
var vec__13535 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((rhx * p__GT_t_y) + (rhy * p__GT_t_x)),((rhx * p__GT_t_x) - (rhy * p__GT_t_y))], null);
var rx = cljs.core.nth.call(null,vec__13535,(0),null);
var ry = cljs.core.nth.call(null,vec__13535,(1),null);
var fx = (rx + player_x);
var fy = ((ry / farn.core.isometric_factor) + player_y);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fx,fy], null);
});
;})(depth_compare,player_stars_text,player_standing_texs,player_shadow,obstacle_types,trees,player_standing_sway,loader,player_walking_texs,shadow_tex,_,tex,hit_sfx,lobster_big,star_tex,tufts,pickup_textures,perlin_channel,title_text,floor_objects,pickup_sfx,tilemap,make_pickup,varela,wait,player,player_stars_icon,inst_12475,inst_12281,inst_12286,inst_12278,inst_12268,inst_12306,inst_12319,inst_12474,inst_12274,inst_12305,inst_12390,inst_12467,inst_12333,inst_12307,inst_12300,inst_12363,inst_12285,inst_12326,inst_12395,inst_12282,inst_12316,inst_12392,inst_12269,inst_12310,inst_12283,inst_12479,inst_12297,inst_12287,inst_12284,inst_12391,inst_12275,inst_12478,inst_12313,inst_12336,inst_12480,inst_12390__$1,inst_12391__$1,state_val_13313,c__6459__auto___13746))
})();
var inst_12395__$1 = (function (){var depth_compare = inst_12391__$1;
var player_stars_text = inst_12310;
var player_standing_texs = inst_12297;
var player_shadow = inst_12287;
var obstacle_types = inst_12319;
var polar_object_coords = inst_12392__$1;
var trees = inst_12326;
var player_standing_sway = inst_12300;
var loader = inst_12268;
var player_walking_texs = inst_12305;
var shadow_tex = inst_12286;
var _ = inst_12282;
var tex = inst_12284;
var hit_sfx = inst_12390__$1;
var lobster_big = inst_12274;
var star_tex = inst_12306;
var tufts = inst_12333;
var pickup_textures = inst_12313;
var perlin_channel = inst_12269;
var title_text = inst_12283;
var floor_objects = inst_12316;
var pickup_sfx = inst_12363;
var tilemap = inst_12281;
var make_pickup = inst_12336;
var varela = inst_12275;
var wait = inst_12278;
var player = inst_12285;
var player_stars_icon = inst_12307;
return ((function (depth_compare,player_stars_text,player_standing_texs,player_shadow,obstacle_types,polar_object_coords,trees,player_standing_sway,loader,player_walking_texs,shadow_tex,_,tex,hit_sfx,lobster_big,star_tex,tufts,pickup_textures,perlin_channel,title_text,floor_objects,pickup_sfx,tilemap,make_pickup,varela,wait,player,player_stars_icon,inst_12475,inst_12281,inst_12286,inst_12278,inst_12268,inst_12306,inst_12319,inst_12474,inst_12274,inst_12305,inst_12390,inst_12467,inst_12333,inst_12307,inst_12300,inst_12363,inst_12285,inst_12326,inst_12395,inst_12282,inst_12316,inst_12392,inst_12269,inst_12310,inst_12283,inst_12479,inst_12297,inst_12287,inst_12284,inst_12391,inst_12275,inst_12478,inst_12313,inst_12336,inst_12480,inst_12390__$1,inst_12391__$1,inst_12392__$1,state_val_13313,c__6459__auto___13746){
return (function (p__12393,p__12394,threshold){
var vec__13536 = p__12393;
var x1 = cljs.core.nth.call(null,vec__13536,(0),null);
var y1 = cljs.core.nth.call(null,vec__13536,(1),null);
var vec__13537 = p__12394;
var x2 = cljs.core.nth.call(null,vec__13537,(0),null);
var y2 = cljs.core.nth.call(null,vec__13537,(1),null);
var dx = (x1 - x2);
var dy = (y1 - y2);
var d_squared = ((dx * dx) + (dy * dy));
return (d_squared < threshold);
});
;})(depth_compare,player_stars_text,player_standing_texs,player_shadow,obstacle_types,polar_object_coords,trees,player_standing_sway,loader,player_walking_texs,shadow_tex,_,tex,hit_sfx,lobster_big,star_tex,tufts,pickup_textures,perlin_channel,title_text,floor_objects,pickup_sfx,tilemap,make_pickup,varela,wait,player,player_stars_icon,inst_12475,inst_12281,inst_12286,inst_12278,inst_12268,inst_12306,inst_12319,inst_12474,inst_12274,inst_12305,inst_12390,inst_12467,inst_12333,inst_12307,inst_12300,inst_12363,inst_12285,inst_12326,inst_12395,inst_12282,inst_12316,inst_12392,inst_12269,inst_12310,inst_12283,inst_12479,inst_12297,inst_12287,inst_12284,inst_12391,inst_12275,inst_12478,inst_12313,inst_12336,inst_12480,inst_12390__$1,inst_12391__$1,inst_12392__$1,state_val_13313,c__6459__auto___13746))
})();
var inst_12396 = [(0),(1),(2),(3),(4)];
var inst_12397 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_12398 = [new cljs.core.Keyword(null,"static-floor-water-big","static-floor-water-big",1588138738),new cljs.core.Keyword(null,"static-floor-water-medium","static-floor-water-medium",1136261079),new cljs.core.Keyword(null,"static-floor-water-small","static-floor-water-small",1080050532)];
var inst_12399 = (new cljs.core.PersistentVector(null,3,(5),inst_12397,inst_12398,null));
var inst_12400 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_12401 = [new cljs.core.Keyword(null,"static-floor-path-big","static-floor-path-big",-1637038697),new cljs.core.Keyword(null,"static-floor-path-medium","static-floor-path-medium",-46847685),new cljs.core.Keyword(null,"static-floor-path-small","static-floor-path-small",477685180)];
var inst_12402 = (new cljs.core.PersistentVector(null,3,(5),inst_12400,inst_12401,null));
var inst_12403 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_12404 = [new cljs.core.Keyword(null,"static-rock-1","static-rock-1",-2031486616)];
var inst_12405 = (new cljs.core.PersistentVector(null,1,(5),inst_12403,inst_12404,null));
var inst_12406 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_12407 = [new cljs.core.Keyword(null,"static-lump-2","static-lump-2",225760930)];
var inst_12408 = (new cljs.core.PersistentVector(null,1,(5),inst_12406,inst_12407,null));
var inst_12409 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_12410 = [new cljs.core.Keyword(null,"static-floor-sand-big","static-floor-sand-big",953875278),new cljs.core.Keyword(null,"static-floor-sand-medium","static-floor-sand-medium",104159128),new cljs.core.Keyword(null,"static-floor-sand-small","static-floor-sand-small",-214159250)];
var inst_12411 = (new cljs.core.PersistentVector(null,3,(5),inst_12409,inst_12410,null));
var inst_12412 = farn.assets.make_range.call(null,"static-cactus-",(3));
var inst_12413 = cljs.core.concat.call(null,inst_12405,inst_12408,inst_12411,inst_12412);
var inst_12414 = cljs.core.vec.call(null,inst_12413);
var inst_12415 = farn.assets.make_range.call(null,"static-tree-",(20));
var inst_12416 = farn.assets.make_range.call(null,"static-tree-",(20));
var inst_12417 = farn.assets.make_range.call(null,"static-tree-",(20));
var inst_12418 = farn.assets.make_range.call(null,"static-tree-",(20));
var inst_12419 = farn.assets.make_range.call(null,"static-tree-",(20));
var inst_12420 = farn.assets.make_range.call(null,"static-tree-",(20));
var inst_12421 = farn.assets.make_range.call(null,"static-tree-",(20));
var inst_12422 = farn.assets.make_range.call(null,"static-tree-",(20));
var inst_12423 = farn.assets.make_range.call(null,"static-tree-",(20));
var inst_12424 = farn.assets.make_range.call(null,"static-tree-",(20));
var inst_12425 = farn.assets.make_range.call(null,"static-tree-",(20));
var inst_12426 = farn.assets.make_range.call(null,"static-tree-",(20));
var inst_12427 = farn.assets.make_range.call(null,"static-tree-",(20));
var inst_12428 = farn.assets.make_range.call(null,"static-tree-",(20));
var inst_12429 = farn.assets.make_range.call(null,"static-tree-",(20));
var inst_12430 = farn.assets.make_range.call(null,"static-tree-",(20));
var inst_12431 = farn.assets.make_range.call(null,"static-tree-",(20));
var inst_12432 = farn.assets.make_range.call(null,"static-tree-",(20));
var inst_12433 = farn.assets.make_range.call(null,"static-tree-",(20));
var inst_12434 = farn.assets.make_range.call(null,"static-tree-",(20));
var inst_12435 = farn.assets.make_range.call(null,"static-tree-",(20));
var inst_12436 = farn.assets.make_range.call(null,"static-tree-",(20));
var inst_12437 = farn.assets.make_range.call(null,"static-tree-",(20));
var inst_12438 = farn.assets.make_range.call(null,"static-tree-",(20));
var inst_12439 = farn.assets.make_range.call(null,"static-tree-",(20));
var inst_12440 = farn.assets.make_range.call(null,"static-tree-",(20));
var inst_12441 = farn.assets.make_range.call(null,"static-tree-",(20));
var inst_12442 = farn.assets.make_range.call(null,"static-giant-schroom-",(2));
var inst_12443 = farn.assets.make_range.call(null,"static-giant-schroom-",(2));
var inst_12444 = farn.assets.make_range.call(null,"static-giant-schroom-",(2));
var inst_12445 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_12446 = [new cljs.core.Keyword(null,"static-castle-1","static-castle-1",1559541979)];
var inst_12447 = (new cljs.core.PersistentVector(null,1,(5),inst_12445,inst_12446,null));
var inst_12448 = cljs.core.concat.call(null,inst_12415,inst_12416,inst_12417,inst_12418,inst_12419,inst_12420,inst_12421,inst_12422,inst_12423,inst_12424,inst_12425,inst_12426,inst_12427,inst_12428,inst_12429,inst_12430,inst_12431,inst_12432,inst_12433,inst_12434,inst_12435,inst_12436,inst_12437,inst_12438,inst_12439,inst_12440,inst_12441,inst_12442,inst_12443,inst_12444,inst_12447);
var inst_12449 = cljs.core.vec.call(null,inst_12448);
var inst_12450 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_12451 = [new cljs.core.Keyword(null,"static-schrub-1","static-schrub-1",1655867923)];
var inst_12452 = (new cljs.core.PersistentVector(null,1,(5),inst_12450,inst_12451,null));
var inst_12453 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_12454 = [new cljs.core.Keyword(null,"static-lump-1","static-lump-1",-811605060),new cljs.core.Keyword(null,"static-lump-3","static-lump-3",-581035868)];
var inst_12455 = (new cljs.core.PersistentVector(null,2,(5),inst_12453,inst_12454,null));
var inst_12456 = farn.assets.make_range.call(null,"static-schroom-",(3));
var inst_12457 = farn.assets.make_range.call(null,"static-flower-",(3));
var inst_12458 = farn.assets.make_range.call(null,"static-flower-",(3));
var inst_12459 = farn.assets.make_range.call(null,"static-flower-",(3));
var inst_12460 = farn.assets.make_range.call(null,"static-flower-",(3));
var inst_12461 = farn.assets.make_range.call(null,"static-flower-",(3));
var inst_12462 = farn.assets.make_range.call(null,"static-flower-",(3));
var inst_12463 = cljs.core.concat.call(null,inst_12452,inst_12455,inst_12456,inst_12457,inst_12458,inst_12459,inst_12460,inst_12461,inst_12462);
var inst_12464 = cljs.core.vec.call(null,inst_12463);
var inst_12465 = [inst_12399,inst_12402,inst_12414,inst_12449,inst_12464];
var inst_12466 = cljs.core.PersistentHashMap.fromArrays(inst_12396,inst_12465);
var inst_12467__$1 = farn.spatial.make_map_from_tilemap.call(null,inst_12281,inst_12466,(30000),(-10000),(10000),(-10000),(10000));
var inst_12472 = (function (){var depth_compare = inst_12391__$1;
var player_stars_text = inst_12310;
var player_standing_texs = inst_12297;
var player_shadow = inst_12287;
var close_QMARK_ = inst_12395__$1;
var obstacle_types = inst_12319;
var polar_object_coords = inst_12392__$1;
var trees = inst_12326;
var player_standing_sway = inst_12300;
var loader = inst_12268;
var player_walking_texs = inst_12305;
var shadow_tex = inst_12286;
var _ = inst_12282;
var tex = inst_12284;
var hit_sfx = inst_12390__$1;
var lobster_big = inst_12274;
var game_map = inst_12467__$1;
var star_tex = inst_12306;
var tufts = inst_12333;
var pickup_textures = inst_12313;
var perlin_channel = inst_12269;
var title_text = inst_12283;
var floor_objects = inst_12316;
var pickup_sfx = inst_12363;
var tilemap = inst_12281;
var make_pickup = inst_12336;
var varela = inst_12275;
var wait = inst_12278;
var player = inst_12285;
var player_stars_icon = inst_12307;
return ((function (depth_compare,player_stars_text,player_standing_texs,player_shadow,close_QMARK_,obstacle_types,polar_object_coords,trees,player_standing_sway,loader,player_walking_texs,shadow_tex,_,tex,hit_sfx,lobster_big,game_map,star_tex,tufts,pickup_textures,perlin_channel,title_text,floor_objects,pickup_sfx,tilemap,make_pickup,varela,wait,player,player_stars_icon,inst_12475,inst_12281,inst_12286,inst_12278,inst_12268,inst_12306,inst_12319,inst_12474,inst_12274,inst_12305,inst_12390,inst_12467,inst_12333,inst_12307,inst_12300,inst_12363,inst_12285,inst_12326,inst_12395,inst_12282,inst_12316,inst_12392,inst_12269,inst_12310,inst_12283,inst_12479,inst_12297,inst_12287,inst_12284,inst_12391,inst_12275,inst_12478,inst_12313,inst_12336,inst_12480,inst_12390__$1,inst_12391__$1,inst_12392__$1,inst_12395__$1,inst_12396,inst_12397,inst_12398,inst_12399,inst_12400,inst_12401,inst_12402,inst_12403,inst_12404,inst_12405,inst_12406,inst_12407,inst_12408,inst_12409,inst_12410,inst_12411,inst_12412,inst_12413,inst_12414,inst_12415,inst_12416,inst_12417,inst_12418,inst_12419,inst_12420,inst_12421,inst_12422,inst_12423,inst_12424,inst_12425,inst_12426,inst_12427,inst_12428,inst_12429,inst_12430,inst_12431,inst_12432,inst_12433,inst_12434,inst_12435,inst_12436,inst_12437,inst_12438,inst_12439,inst_12440,inst_12441,inst_12442,inst_12443,inst_12444,inst_12445,inst_12446,inst_12447,inst_12448,inst_12449,inst_12450,inst_12451,inst_12452,inst_12453,inst_12454,inst_12455,inst_12456,inst_12457,inst_12458,inst_12459,inst_12460,inst_12461,inst_12462,inst_12463,inst_12464,inst_12465,inst_12466,inst_12467__$1,state_val_13313,c__6459__auto___13746){
return (function iter__12468(s__12469){
return (new cljs.core.LazySeq(null,((function (depth_compare,player_stars_text,player_standing_texs,player_shadow,close_QMARK_,obstacle_types,polar_object_coords,trees,player_standing_sway,loader,player_walking_texs,shadow_tex,_,tex,hit_sfx,lobster_big,game_map,star_tex,tufts,pickup_textures,perlin_channel,title_text,floor_objects,pickup_sfx,tilemap,make_pickup,varela,wait,player,player_stars_icon,inst_12475,inst_12281,inst_12286,inst_12278,inst_12268,inst_12306,inst_12319,inst_12474,inst_12274,inst_12305,inst_12390,inst_12467,inst_12333,inst_12307,inst_12300,inst_12363,inst_12285,inst_12326,inst_12395,inst_12282,inst_12316,inst_12392,inst_12269,inst_12310,inst_12283,inst_12479,inst_12297,inst_12287,inst_12284,inst_12391,inst_12275,inst_12478,inst_12313,inst_12336,inst_12480,inst_12390__$1,inst_12391__$1,inst_12392__$1,inst_12395__$1,inst_12396,inst_12397,inst_12398,inst_12399,inst_12400,inst_12401,inst_12402,inst_12403,inst_12404,inst_12405,inst_12406,inst_12407,inst_12408,inst_12409,inst_12410,inst_12411,inst_12412,inst_12413,inst_12414,inst_12415,inst_12416,inst_12417,inst_12418,inst_12419,inst_12420,inst_12421,inst_12422,inst_12423,inst_12424,inst_12425,inst_12426,inst_12427,inst_12428,inst_12429,inst_12430,inst_12431,inst_12432,inst_12433,inst_12434,inst_12435,inst_12436,inst_12437,inst_12438,inst_12439,inst_12440,inst_12441,inst_12442,inst_12443,inst_12444,inst_12445,inst_12446,inst_12447,inst_12448,inst_12449,inst_12450,inst_12451,inst_12452,inst_12453,inst_12454,inst_12455,inst_12456,inst_12457,inst_12458,inst_12459,inst_12460,inst_12461,inst_12462,inst_12463,inst_12464,inst_12465,inst_12466,inst_12467__$1,state_val_13313,c__6459__auto___13746){
return (function (){
var s__12469__$1 = s__12469;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__12469__$1);
if(temp__4126__auto__){
var s__12469__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12469__$2)){
var c__4384__auto__ = cljs.core.chunk_first.call(null,s__12469__$2);
var size__4385__auto__ = cljs.core.count.call(null,c__4384__auto__);
var b__12471 = cljs.core.chunk_buffer.call(null,size__4385__auto__);
if((function (){var i__12470 = (0);
while(true){
if((i__12470 < size__4385__auto__)){
var obj = cljs.core._nth.call(null,c__4384__auto__,i__12470);
cljs.core.chunk_append.call(null,b__12471,(function (){var type = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(obj);
var sprite = farn.core.make_sprite.call(null,farn.gfx.get_texture.call(null,type));
if(cljs.core.truth_(cljs.core.some.call(null,((function (i__12470,type,sprite,obj,c__4384__auto__,size__4385__auto__,b__12471,s__12469__$2,temp__4126__auto__,depth_compare,player_stars_text,player_standing_texs,player_shadow,close_QMARK_,obstacle_types,polar_object_coords,trees,player_standing_sway,loader,player_walking_texs,shadow_tex,_,tex,hit_sfx,lobster_big,game_map,star_tex,tufts,pickup_textures,perlin_channel,title_text,floor_objects,pickup_sfx,tilemap,make_pickup,varela,wait,player,player_stars_icon,inst_12475,inst_12281,inst_12286,inst_12278,inst_12268,inst_12306,inst_12319,inst_12474,inst_12274,inst_12305,inst_12390,inst_12467,inst_12333,inst_12307,inst_12300,inst_12363,inst_12285,inst_12326,inst_12395,inst_12282,inst_12316,inst_12392,inst_12269,inst_12310,inst_12283,inst_12479,inst_12297,inst_12287,inst_12284,inst_12391,inst_12275,inst_12478,inst_12313,inst_12336,inst_12480,inst_12390__$1,inst_12391__$1,inst_12392__$1,inst_12395__$1,inst_12396,inst_12397,inst_12398,inst_12399,inst_12400,inst_12401,inst_12402,inst_12403,inst_12404,inst_12405,inst_12406,inst_12407,inst_12408,inst_12409,inst_12410,inst_12411,inst_12412,inst_12413,inst_12414,inst_12415,inst_12416,inst_12417,inst_12418,inst_12419,inst_12420,inst_12421,inst_12422,inst_12423,inst_12424,inst_12425,inst_12426,inst_12427,inst_12428,inst_12429,inst_12430,inst_12431,inst_12432,inst_12433,inst_12434,inst_12435,inst_12436,inst_12437,inst_12438,inst_12439,inst_12440,inst_12441,inst_12442,inst_12443,inst_12444,inst_12445,inst_12446,inst_12447,inst_12448,inst_12449,inst_12450,inst_12451,inst_12452,inst_12453,inst_12454,inst_12455,inst_12456,inst_12457,inst_12458,inst_12459,inst_12460,inst_12461,inst_12462,inst_12463,inst_12464,inst_12465,inst_12466,inst_12467__$1,state_val_13313,c__6459__auto___13746){
return (function (p1__12236_SHARP_){
return cljs.core._EQ_.call(null,type,p1__12236_SHARP_);
});})(i__12470,type,sprite,obj,c__4384__auto__,size__4385__auto__,b__12471,s__12469__$2,temp__4126__auto__,depth_compare,player_stars_text,player_standing_texs,player_shadow,close_QMARK_,obstacle_types,polar_object_coords,trees,player_standing_sway,loader,player_walking_texs,shadow_tex,_,tex,hit_sfx,lobster_big,game_map,star_tex,tufts,pickup_textures,perlin_channel,title_text,floor_objects,pickup_sfx,tilemap,make_pickup,varela,wait,player,player_stars_icon,inst_12475,inst_12281,inst_12286,inst_12278,inst_12268,inst_12306,inst_12319,inst_12474,inst_12274,inst_12305,inst_12390,inst_12467,inst_12333,inst_12307,inst_12300,inst_12363,inst_12285,inst_12326,inst_12395,inst_12282,inst_12316,inst_12392,inst_12269,inst_12310,inst_12283,inst_12479,inst_12297,inst_12287,inst_12284,inst_12391,inst_12275,inst_12478,inst_12313,inst_12336,inst_12480,inst_12390__$1,inst_12391__$1,inst_12392__$1,inst_12395__$1,inst_12396,inst_12397,inst_12398,inst_12399,inst_12400,inst_12401,inst_12402,inst_12403,inst_12404,inst_12405,inst_12406,inst_12407,inst_12408,inst_12409,inst_12410,inst_12411,inst_12412,inst_12413,inst_12414,inst_12415,inst_12416,inst_12417,inst_12418,inst_12419,inst_12420,inst_12421,inst_12422,inst_12423,inst_12424,inst_12425,inst_12426,inst_12427,inst_12428,inst_12429,inst_12430,inst_12431,inst_12432,inst_12433,inst_12434,inst_12435,inst_12436,inst_12437,inst_12438,inst_12439,inst_12440,inst_12441,inst_12442,inst_12443,inst_12444,inst_12445,inst_12446,inst_12447,inst_12448,inst_12449,inst_12450,inst_12451,inst_12452,inst_12453,inst_12454,inst_12455,inst_12456,inst_12457,inst_12458,inst_12459,inst_12460,inst_12461,inst_12462,inst_12463,inst_12464,inst_12465,inst_12466,inst_12467__$1,state_val_13313,c__6459__auto___13746))
,floor_objects))){
sprite.floortile = true;

farn.sprite.set_anchor_BANG_.call(null,sprite,0.5,0.5);
} else {
}

return cljs.core.assoc.call(null,obj,new cljs.core.Keyword(null,"sprite","sprite",172516848),sprite,new cljs.core.Keyword(null,"scale","scale",-230427353),0.5);
})());

var G__13904 = (i__12470 + (1));
i__12470 = G__13904;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12471),iter__12468.call(null,cljs.core.chunk_rest.call(null,s__12469__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12471),null);
}
} else {
var obj = cljs.core.first.call(null,s__12469__$2);
return cljs.core.cons.call(null,(function (){var type = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(obj);
var sprite = farn.core.make_sprite.call(null,farn.gfx.get_texture.call(null,type));
if(cljs.core.truth_(cljs.core.some.call(null,((function (type,sprite,obj,s__12469__$2,temp__4126__auto__,depth_compare,player_stars_text,player_standing_texs,player_shadow,close_QMARK_,obstacle_types,polar_object_coords,trees,player_standing_sway,loader,player_walking_texs,shadow_tex,_,tex,hit_sfx,lobster_big,game_map,star_tex,tufts,pickup_textures,perlin_channel,title_text,floor_objects,pickup_sfx,tilemap,make_pickup,varela,wait,player,player_stars_icon,inst_12475,inst_12281,inst_12286,inst_12278,inst_12268,inst_12306,inst_12319,inst_12474,inst_12274,inst_12305,inst_12390,inst_12467,inst_12333,inst_12307,inst_12300,inst_12363,inst_12285,inst_12326,inst_12395,inst_12282,inst_12316,inst_12392,inst_12269,inst_12310,inst_12283,inst_12479,inst_12297,inst_12287,inst_12284,inst_12391,inst_12275,inst_12478,inst_12313,inst_12336,inst_12480,inst_12390__$1,inst_12391__$1,inst_12392__$1,inst_12395__$1,inst_12396,inst_12397,inst_12398,inst_12399,inst_12400,inst_12401,inst_12402,inst_12403,inst_12404,inst_12405,inst_12406,inst_12407,inst_12408,inst_12409,inst_12410,inst_12411,inst_12412,inst_12413,inst_12414,inst_12415,inst_12416,inst_12417,inst_12418,inst_12419,inst_12420,inst_12421,inst_12422,inst_12423,inst_12424,inst_12425,inst_12426,inst_12427,inst_12428,inst_12429,inst_12430,inst_12431,inst_12432,inst_12433,inst_12434,inst_12435,inst_12436,inst_12437,inst_12438,inst_12439,inst_12440,inst_12441,inst_12442,inst_12443,inst_12444,inst_12445,inst_12446,inst_12447,inst_12448,inst_12449,inst_12450,inst_12451,inst_12452,inst_12453,inst_12454,inst_12455,inst_12456,inst_12457,inst_12458,inst_12459,inst_12460,inst_12461,inst_12462,inst_12463,inst_12464,inst_12465,inst_12466,inst_12467__$1,state_val_13313,c__6459__auto___13746){
return (function (p1__12236_SHARP_){
return cljs.core._EQ_.call(null,type,p1__12236_SHARP_);
});})(type,sprite,obj,s__12469__$2,temp__4126__auto__,depth_compare,player_stars_text,player_standing_texs,player_shadow,close_QMARK_,obstacle_types,polar_object_coords,trees,player_standing_sway,loader,player_walking_texs,shadow_tex,_,tex,hit_sfx,lobster_big,game_map,star_tex,tufts,pickup_textures,perlin_channel,title_text,floor_objects,pickup_sfx,tilemap,make_pickup,varela,wait,player,player_stars_icon,inst_12475,inst_12281,inst_12286,inst_12278,inst_12268,inst_12306,inst_12319,inst_12474,inst_12274,inst_12305,inst_12390,inst_12467,inst_12333,inst_12307,inst_12300,inst_12363,inst_12285,inst_12326,inst_12395,inst_12282,inst_12316,inst_12392,inst_12269,inst_12310,inst_12283,inst_12479,inst_12297,inst_12287,inst_12284,inst_12391,inst_12275,inst_12478,inst_12313,inst_12336,inst_12480,inst_12390__$1,inst_12391__$1,inst_12392__$1,inst_12395__$1,inst_12396,inst_12397,inst_12398,inst_12399,inst_12400,inst_12401,inst_12402,inst_12403,inst_12404,inst_12405,inst_12406,inst_12407,inst_12408,inst_12409,inst_12410,inst_12411,inst_12412,inst_12413,inst_12414,inst_12415,inst_12416,inst_12417,inst_12418,inst_12419,inst_12420,inst_12421,inst_12422,inst_12423,inst_12424,inst_12425,inst_12426,inst_12427,inst_12428,inst_12429,inst_12430,inst_12431,inst_12432,inst_12433,inst_12434,inst_12435,inst_12436,inst_12437,inst_12438,inst_12439,inst_12440,inst_12441,inst_12442,inst_12443,inst_12444,inst_12445,inst_12446,inst_12447,inst_12448,inst_12449,inst_12450,inst_12451,inst_12452,inst_12453,inst_12454,inst_12455,inst_12456,inst_12457,inst_12458,inst_12459,inst_12460,inst_12461,inst_12462,inst_12463,inst_12464,inst_12465,inst_12466,inst_12467__$1,state_val_13313,c__6459__auto___13746))
,floor_objects))){
sprite.floortile = true;

farn.sprite.set_anchor_BANG_.call(null,sprite,0.5,0.5);
} else {
}

return cljs.core.assoc.call(null,obj,new cljs.core.Keyword(null,"sprite","sprite",172516848),sprite,new cljs.core.Keyword(null,"scale","scale",-230427353),0.5);
})(),iter__12468.call(null,cljs.core.rest.call(null,s__12469__$2)));
}
} else {
return null;
}
break;
}
});})(depth_compare,player_stars_text,player_standing_texs,player_shadow,close_QMARK_,obstacle_types,polar_object_coords,trees,player_standing_sway,loader,player_walking_texs,shadow_tex,_,tex,hit_sfx,lobster_big,game_map,star_tex,tufts,pickup_textures,perlin_channel,title_text,floor_objects,pickup_sfx,tilemap,make_pickup,varela,wait,player,player_stars_icon,inst_12475,inst_12281,inst_12286,inst_12278,inst_12268,inst_12306,inst_12319,inst_12474,inst_12274,inst_12305,inst_12390,inst_12467,inst_12333,inst_12307,inst_12300,inst_12363,inst_12285,inst_12326,inst_12395,inst_12282,inst_12316,inst_12392,inst_12269,inst_12310,inst_12283,inst_12479,inst_12297,inst_12287,inst_12284,inst_12391,inst_12275,inst_12478,inst_12313,inst_12336,inst_12480,inst_12390__$1,inst_12391__$1,inst_12392__$1,inst_12395__$1,inst_12396,inst_12397,inst_12398,inst_12399,inst_12400,inst_12401,inst_12402,inst_12403,inst_12404,inst_12405,inst_12406,inst_12407,inst_12408,inst_12409,inst_12410,inst_12411,inst_12412,inst_12413,inst_12414,inst_12415,inst_12416,inst_12417,inst_12418,inst_12419,inst_12420,inst_12421,inst_12422,inst_12423,inst_12424,inst_12425,inst_12426,inst_12427,inst_12428,inst_12429,inst_12430,inst_12431,inst_12432,inst_12433,inst_12434,inst_12435,inst_12436,inst_12437,inst_12438,inst_12439,inst_12440,inst_12441,inst_12442,inst_12443,inst_12444,inst_12445,inst_12446,inst_12447,inst_12448,inst_12449,inst_12450,inst_12451,inst_12452,inst_12453,inst_12454,inst_12455,inst_12456,inst_12457,inst_12458,inst_12459,inst_12460,inst_12461,inst_12462,inst_12463,inst_12464,inst_12465,inst_12466,inst_12467__$1,state_val_13313,c__6459__auto___13746))
,null,null));
});
;})(depth_compare,player_stars_text,player_standing_texs,player_shadow,close_QMARK_,obstacle_types,polar_object_coords,trees,player_standing_sway,loader,player_walking_texs,shadow_tex,_,tex,hit_sfx,lobster_big,game_map,star_tex,tufts,pickup_textures,perlin_channel,title_text,floor_objects,pickup_sfx,tilemap,make_pickup,varela,wait,player,player_stars_icon,inst_12475,inst_12281,inst_12286,inst_12278,inst_12268,inst_12306,inst_12319,inst_12474,inst_12274,inst_12305,inst_12390,inst_12467,inst_12333,inst_12307,inst_12300,inst_12363,inst_12285,inst_12326,inst_12395,inst_12282,inst_12316,inst_12392,inst_12269,inst_12310,inst_12283,inst_12479,inst_12297,inst_12287,inst_12284,inst_12391,inst_12275,inst_12478,inst_12313,inst_12336,inst_12480,inst_12390__$1,inst_12391__$1,inst_12392__$1,inst_12395__$1,inst_12396,inst_12397,inst_12398,inst_12399,inst_12400,inst_12401,inst_12402,inst_12403,inst_12404,inst_12405,inst_12406,inst_12407,inst_12408,inst_12409,inst_12410,inst_12411,inst_12412,inst_12413,inst_12414,inst_12415,inst_12416,inst_12417,inst_12418,inst_12419,inst_12420,inst_12421,inst_12422,inst_12423,inst_12424,inst_12425,inst_12426,inst_12427,inst_12428,inst_12429,inst_12430,inst_12431,inst_12432,inst_12433,inst_12434,inst_12435,inst_12436,inst_12437,inst_12438,inst_12439,inst_12440,inst_12441,inst_12442,inst_12443,inst_12444,inst_12445,inst_12446,inst_12447,inst_12448,inst_12449,inst_12450,inst_12451,inst_12452,inst_12453,inst_12454,inst_12455,inst_12456,inst_12457,inst_12458,inst_12459,inst_12460,inst_12461,inst_12462,inst_12463,inst_12464,inst_12465,inst_12466,inst_12467__$1,state_val_13313,c__6459__auto___13746))
})();
var inst_12473 = inst_12472.call(null,inst_12467__$1);
var inst_12474__$1 = cljs.core.doall.call(null,inst_12473);
var inst_12475__$1 = farn.spatial.hash_locations.call(null,inst_12474__$1,farn.core.cell_size);
var inst_12476 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_12477 = [(0),(0)];
var inst_12478__$1 = (new cljs.core.PersistentVector(null,2,(5),inst_12476,inst_12477,null));
var inst_12479__$1 = (function (){var depth_compare = inst_12391__$1;
var player_stars_text = inst_12310;
var player_standing_texs = inst_12297;
var player_shadow = inst_12287;
var close_QMARK_ = inst_12395__$1;
var player_pos = inst_12478__$1;
var obstacle_types = inst_12319;
var polar_object_coords = inst_12392__$1;
var trees = inst_12326;
var player_standing_sway = inst_12300;
var game_sprites = inst_12474__$1;
var loader = inst_12268;
var player_walking_texs = inst_12305;
var shadow_tex = inst_12286;
var _ = inst_12282;
var tex = inst_12284;
var hit_sfx = inst_12390__$1;
var lobster_big = inst_12274;
var game_map = inst_12467__$1;
var star_tex = inst_12306;
var tufts = inst_12333;
var game_space = inst_12475__$1;
var pickup_textures = inst_12313;
var perlin_channel = inst_12269;
var title_text = inst_12283;
var floor_objects = inst_12316;
var pickup_sfx = inst_12363;
var tilemap = inst_12281;
var make_pickup = inst_12336;
var varela = inst_12275;
var wait = inst_12278;
var player = inst_12285;
var player_stars_icon = inst_12307;
return ((function (depth_compare,player_stars_text,player_standing_texs,player_shadow,close_QMARK_,player_pos,obstacle_types,polar_object_coords,trees,player_standing_sway,game_sprites,loader,player_walking_texs,shadow_tex,_,tex,hit_sfx,lobster_big,game_map,star_tex,tufts,game_space,pickup_textures,perlin_channel,title_text,floor_objects,pickup_sfx,tilemap,make_pickup,varela,wait,player,player_stars_icon,inst_12475,inst_12281,inst_12286,inst_12278,inst_12268,inst_12306,inst_12319,inst_12474,inst_12274,inst_12305,inst_12390,inst_12467,inst_12333,inst_12307,inst_12300,inst_12363,inst_12285,inst_12326,inst_12395,inst_12282,inst_12316,inst_12392,inst_12269,inst_12310,inst_12283,inst_12479,inst_12297,inst_12287,inst_12284,inst_12391,inst_12275,inst_12478,inst_12313,inst_12336,inst_12480,inst_12390__$1,inst_12391__$1,inst_12392__$1,inst_12395__$1,inst_12396,inst_12397,inst_12398,inst_12399,inst_12400,inst_12401,inst_12402,inst_12403,inst_12404,inst_12405,inst_12406,inst_12407,inst_12408,inst_12409,inst_12410,inst_12411,inst_12412,inst_12413,inst_12414,inst_12415,inst_12416,inst_12417,inst_12418,inst_12419,inst_12420,inst_12421,inst_12422,inst_12423,inst_12424,inst_12425,inst_12426,inst_12427,inst_12428,inst_12429,inst_12430,inst_12431,inst_12432,inst_12433,inst_12434,inst_12435,inst_12436,inst_12437,inst_12438,inst_12439,inst_12440,inst_12441,inst_12442,inst_12443,inst_12444,inst_12445,inst_12446,inst_12447,inst_12448,inst_12449,inst_12450,inst_12451,inst_12452,inst_12453,inst_12454,inst_12455,inst_12456,inst_12457,inst_12458,inst_12459,inst_12460,inst_12461,inst_12462,inst_12463,inst_12464,inst_12465,inst_12466,inst_12467__$1,inst_12472,inst_12473,inst_12474__$1,inst_12475__$1,inst_12476,inst_12477,inst_12478__$1,state_val_13313,c__6459__auto___13746){
return (function (id){
var seq__13538 = cljs.core.seq.call(null,game_space.call(null,id));
var chunk__13539 = null;
var count__13540 = (0);
var i__13541 = (0);
while(true){
if((i__13541 < count__13540)){
var obj = cljs.core._nth.call(null,chunk__13539,i__13541);
farn.sprite.set_scale_BANG_.call(null,new cljs.core.Keyword(null,"sprite","sprite",172516848).cljs$core$IFn$_invoke$arity$1(obj),new cljs.core.Keyword(null,"scale","scale",-230427353).cljs$core$IFn$_invoke$arity$1(obj));

farn.sprite.set_pos_BANG_.call(null,new cljs.core.Keyword(null,"sprite","sprite",172516848).cljs$core$IFn$_invoke$arity$1(obj),(100000),(100000));

farn.core.main_stage.addChild(new cljs.core.Keyword(null,"sprite","sprite",172516848).cljs$core$IFn$_invoke$arity$1(obj));

var G__13905 = seq__13538;
var G__13906 = chunk__13539;
var G__13907 = count__13540;
var G__13908 = (i__13541 + (1));
seq__13538 = G__13905;
chunk__13539 = G__13906;
count__13540 = G__13907;
i__13541 = G__13908;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__13538);
if(temp__4126__auto__){
var seq__13538__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13538__$1)){
var c__4417__auto__ = cljs.core.chunk_first.call(null,seq__13538__$1);
var G__13909 = cljs.core.chunk_rest.call(null,seq__13538__$1);
var G__13910 = c__4417__auto__;
var G__13911 = cljs.core.count.call(null,c__4417__auto__);
var G__13912 = (0);
seq__13538 = G__13909;
chunk__13539 = G__13910;
count__13540 = G__13911;
i__13541 = G__13912;
continue;
} else {
var obj = cljs.core.first.call(null,seq__13538__$1);
farn.sprite.set_scale_BANG_.call(null,new cljs.core.Keyword(null,"sprite","sprite",172516848).cljs$core$IFn$_invoke$arity$1(obj),new cljs.core.Keyword(null,"scale","scale",-230427353).cljs$core$IFn$_invoke$arity$1(obj));

farn.sprite.set_pos_BANG_.call(null,new cljs.core.Keyword(null,"sprite","sprite",172516848).cljs$core$IFn$_invoke$arity$1(obj),(100000),(100000));

farn.core.main_stage.addChild(new cljs.core.Keyword(null,"sprite","sprite",172516848).cljs$core$IFn$_invoke$arity$1(obj));

var G__13913 = cljs.core.next.call(null,seq__13538__$1);
var G__13914 = null;
var G__13915 = (0);
var G__13916 = (0);
seq__13538 = G__13913;
chunk__13539 = G__13914;
count__13540 = G__13915;
i__13541 = G__13916;
continue;
}
} else {
return null;
}
}
break;
}
});
;})(depth_compare,player_stars_text,player_standing_texs,player_shadow,close_QMARK_,player_pos,obstacle_types,polar_object_coords,trees,player_standing_sway,game_sprites,loader,player_walking_texs,shadow_tex,_,tex,hit_sfx,lobster_big,game_map,star_tex,tufts,game_space,pickup_textures,perlin_channel,title_text,floor_objects,pickup_sfx,tilemap,make_pickup,varela,wait,player,player_stars_icon,inst_12475,inst_12281,inst_12286,inst_12278,inst_12268,inst_12306,inst_12319,inst_12474,inst_12274,inst_12305,inst_12390,inst_12467,inst_12333,inst_12307,inst_12300,inst_12363,inst_12285,inst_12326,inst_12395,inst_12282,inst_12316,inst_12392,inst_12269,inst_12310,inst_12283,inst_12479,inst_12297,inst_12287,inst_12284,inst_12391,inst_12275,inst_12478,inst_12313,inst_12336,inst_12480,inst_12390__$1,inst_12391__$1,inst_12392__$1,inst_12395__$1,inst_12396,inst_12397,inst_12398,inst_12399,inst_12400,inst_12401,inst_12402,inst_12403,inst_12404,inst_12405,inst_12406,inst_12407,inst_12408,inst_12409,inst_12410,inst_12411,inst_12412,inst_12413,inst_12414,inst_12415,inst_12416,inst_12417,inst_12418,inst_12419,inst_12420,inst_12421,inst_12422,inst_12423,inst_12424,inst_12425,inst_12426,inst_12427,inst_12428,inst_12429,inst_12430,inst_12431,inst_12432,inst_12433,inst_12434,inst_12435,inst_12436,inst_12437,inst_12438,inst_12439,inst_12440,inst_12441,inst_12442,inst_12443,inst_12444,inst_12445,inst_12446,inst_12447,inst_12448,inst_12449,inst_12450,inst_12451,inst_12452,inst_12453,inst_12454,inst_12455,inst_12456,inst_12457,inst_12458,inst_12459,inst_12460,inst_12461,inst_12462,inst_12463,inst_12464,inst_12465,inst_12466,inst_12467__$1,inst_12472,inst_12473,inst_12474__$1,inst_12475__$1,inst_12476,inst_12477,inst_12478__$1,state_val_13313,c__6459__auto___13746))
})();
var inst_12480__$1 = (function (){var add_cell_BANG_ = inst_12479__$1;
var depth_compare = inst_12391__$1;
var player_stars_text = inst_12310;
var player_standing_texs = inst_12297;
var player_shadow = inst_12287;
var close_QMARK_ = inst_12395__$1;
var player_pos = inst_12478__$1;
var obstacle_types = inst_12319;
var polar_object_coords = inst_12392__$1;
var trees = inst_12326;
var player_standing_sway = inst_12300;
var game_sprites = inst_12474__$1;
var loader = inst_12268;
var player_walking_texs = inst_12305;
var shadow_tex = inst_12286;
var _ = inst_12282;
var tex = inst_12284;
var hit_sfx = inst_12390__$1;
var lobster_big = inst_12274;
var game_map = inst_12467__$1;
var star_tex = inst_12306;
var tufts = inst_12333;
var game_space = inst_12475__$1;
var pickup_textures = inst_12313;
var perlin_channel = inst_12269;
var title_text = inst_12283;
var floor_objects = inst_12316;
var pickup_sfx = inst_12363;
var tilemap = inst_12281;
var make_pickup = inst_12336;
var varela = inst_12275;
var wait = inst_12278;
var player = inst_12285;
var player_stars_icon = inst_12307;
return ((function (add_cell_BANG_,depth_compare,player_stars_text,player_standing_texs,player_shadow,close_QMARK_,player_pos,obstacle_types,polar_object_coords,trees,player_standing_sway,game_sprites,loader,player_walking_texs,shadow_tex,_,tex,hit_sfx,lobster_big,game_map,star_tex,tufts,game_space,pickup_textures,perlin_channel,title_text,floor_objects,pickup_sfx,tilemap,make_pickup,varela,wait,player,player_stars_icon,inst_12475,inst_12281,inst_12286,inst_12278,inst_12268,inst_12306,inst_12319,inst_12474,inst_12274,inst_12305,inst_12390,inst_12467,inst_12333,inst_12307,inst_12300,inst_12363,inst_12285,inst_12326,inst_12395,inst_12282,inst_12316,inst_12392,inst_12269,inst_12310,inst_12283,inst_12479,inst_12297,inst_12287,inst_12284,inst_12391,inst_12275,inst_12478,inst_12313,inst_12336,inst_12480,inst_12390__$1,inst_12391__$1,inst_12392__$1,inst_12395__$1,inst_12396,inst_12397,inst_12398,inst_12399,inst_12400,inst_12401,inst_12402,inst_12403,inst_12404,inst_12405,inst_12406,inst_12407,inst_12408,inst_12409,inst_12410,inst_12411,inst_12412,inst_12413,inst_12414,inst_12415,inst_12416,inst_12417,inst_12418,inst_12419,inst_12420,inst_12421,inst_12422,inst_12423,inst_12424,inst_12425,inst_12426,inst_12427,inst_12428,inst_12429,inst_12430,inst_12431,inst_12432,inst_12433,inst_12434,inst_12435,inst_12436,inst_12437,inst_12438,inst_12439,inst_12440,inst_12441,inst_12442,inst_12443,inst_12444,inst_12445,inst_12446,inst_12447,inst_12448,inst_12449,inst_12450,inst_12451,inst_12452,inst_12453,inst_12454,inst_12455,inst_12456,inst_12457,inst_12458,inst_12459,inst_12460,inst_12461,inst_12462,inst_12463,inst_12464,inst_12465,inst_12466,inst_12467__$1,inst_12472,inst_12473,inst_12474__$1,inst_12475__$1,inst_12476,inst_12477,inst_12478__$1,inst_12479__$1,state_val_13313,c__6459__auto___13746){
return (function (id){
var seq__13542 = cljs.core.seq.call(null,game_space.call(null,id));
var chunk__13543 = null;
var count__13544 = (0);
var i__13545 = (0);
while(true){
if((i__13545 < count__13544)){
var obj = cljs.core._nth.call(null,chunk__13543,i__13545);
farn.core.main_stage.removeChild(new cljs.core.Keyword(null,"sprite","sprite",172516848).cljs$core$IFn$_invoke$arity$1(obj));

var G__13917 = seq__13542;
var G__13918 = chunk__13543;
var G__13919 = count__13544;
var G__13920 = (i__13545 + (1));
seq__13542 = G__13917;
chunk__13543 = G__13918;
count__13544 = G__13919;
i__13545 = G__13920;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__13542);
if(temp__4126__auto__){
var seq__13542__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13542__$1)){
var c__4417__auto__ = cljs.core.chunk_first.call(null,seq__13542__$1);
var G__13921 = cljs.core.chunk_rest.call(null,seq__13542__$1);
var G__13922 = c__4417__auto__;
var G__13923 = cljs.core.count.call(null,c__4417__auto__);
var G__13924 = (0);
seq__13542 = G__13921;
chunk__13543 = G__13922;
count__13544 = G__13923;
i__13545 = G__13924;
continue;
} else {
var obj = cljs.core.first.call(null,seq__13542__$1);
farn.core.main_stage.removeChild(new cljs.core.Keyword(null,"sprite","sprite",172516848).cljs$core$IFn$_invoke$arity$1(obj));

var G__13925 = cljs.core.next.call(null,seq__13542__$1);
var G__13926 = null;
var G__13927 = (0);
var G__13928 = (0);
seq__13542 = G__13925;
chunk__13543 = G__13926;
count__13544 = G__13927;
i__13545 = G__13928;
continue;
}
} else {
return null;
}
}
break;
}
});
;})(add_cell_BANG_,depth_compare,player_stars_text,player_standing_texs,player_shadow,close_QMARK_,player_pos,obstacle_types,polar_object_coords,trees,player_standing_sway,game_sprites,loader,player_walking_texs,shadow_tex,_,tex,hit_sfx,lobster_big,game_map,star_tex,tufts,game_space,pickup_textures,perlin_channel,title_text,floor_objects,pickup_sfx,tilemap,make_pickup,varela,wait,player,player_stars_icon,inst_12475,inst_12281,inst_12286,inst_12278,inst_12268,inst_12306,inst_12319,inst_12474,inst_12274,inst_12305,inst_12390,inst_12467,inst_12333,inst_12307,inst_12300,inst_12363,inst_12285,inst_12326,inst_12395,inst_12282,inst_12316,inst_12392,inst_12269,inst_12310,inst_12283,inst_12479,inst_12297,inst_12287,inst_12284,inst_12391,inst_12275,inst_12478,inst_12313,inst_12336,inst_12480,inst_12390__$1,inst_12391__$1,inst_12392__$1,inst_12395__$1,inst_12396,inst_12397,inst_12398,inst_12399,inst_12400,inst_12401,inst_12402,inst_12403,inst_12404,inst_12405,inst_12406,inst_12407,inst_12408,inst_12409,inst_12410,inst_12411,inst_12412,inst_12413,inst_12414,inst_12415,inst_12416,inst_12417,inst_12418,inst_12419,inst_12420,inst_12421,inst_12422,inst_12423,inst_12424,inst_12425,inst_12426,inst_12427,inst_12428,inst_12429,inst_12430,inst_12431,inst_12432,inst_12433,inst_12434,inst_12435,inst_12436,inst_12437,inst_12438,inst_12439,inst_12440,inst_12441,inst_12442,inst_12443,inst_12444,inst_12445,inst_12446,inst_12447,inst_12448,inst_12449,inst_12450,inst_12451,inst_12452,inst_12453,inst_12454,inst_12455,inst_12456,inst_12457,inst_12458,inst_12459,inst_12460,inst_12461,inst_12462,inst_12463,inst_12464,inst_12465,inst_12466,inst_12467__$1,inst_12472,inst_12473,inst_12474__$1,inst_12475__$1,inst_12476,inst_12477,inst_12478__$1,inst_12479__$1,state_val_13313,c__6459__auto___13746))
})();
var inst_12481 = farn.core.ui_stage.addChild(inst_12283);
var inst_12503 = cljs.core.async.chan.call(null,(1));
var inst_12504 = (function (){var add_cell_BANG_ = inst_12479__$1;
var depth_compare = inst_12391__$1;
var player_stars_text = inst_12310;
var player_standing_texs = inst_12297;
var player_shadow = inst_12287;
var close_QMARK_ = inst_12395__$1;
var player_pos = inst_12478__$1;
var obstacle_types = inst_12319;
var polar_object_coords = inst_12392__$1;
var trees = inst_12326;
var player_standing_sway = inst_12300;
var game_sprites = inst_12474__$1;
var loader = inst_12268;
var player_walking_texs = inst_12305;
var shadow_tex = inst_12286;
var _ = inst_12282;
var tex = inst_12284;
var c__6459__auto____$1 = inst_12503;
var hit_sfx = inst_12390__$1;
var lobster_big = inst_12274;
var game_map = inst_12467__$1;
var star_tex = inst_12306;
var remove_cell_BANG_ = inst_12480__$1;
var tufts = inst_12333;
var game_space = inst_12475__$1;
var pickup_textures = inst_12313;
var perlin_channel = inst_12269;
var title_text = inst_12283;
var floor_objects = inst_12316;
var pickup_sfx = inst_12363;
var tilemap = inst_12281;
var make_pickup = inst_12336;
var varela = inst_12275;
var wait = inst_12278;
var player = inst_12285;
var player_stars_icon = inst_12307;
return ((function (add_cell_BANG_,depth_compare,player_stars_text,player_standing_texs,player_shadow,close_QMARK_,player_pos,obstacle_types,polar_object_coords,trees,player_standing_sway,game_sprites,loader,player_walking_texs,shadow_tex,_,tex,c__6459__auto____$1,hit_sfx,lobster_big,game_map,star_tex,remove_cell_BANG_,tufts,game_space,pickup_textures,perlin_channel,title_text,floor_objects,pickup_sfx,tilemap,make_pickup,varela,wait,player,player_stars_icon,inst_12475,inst_12281,inst_12286,inst_12278,inst_12268,inst_12306,inst_12319,inst_12474,inst_12274,inst_12305,inst_12390,inst_12467,inst_12333,inst_12307,inst_12300,inst_12363,inst_12285,inst_12326,inst_12395,inst_12282,inst_12316,inst_12392,inst_12269,inst_12310,inst_12283,inst_12479,inst_12297,inst_12287,inst_12284,inst_12391,inst_12275,inst_12478,inst_12313,inst_12336,inst_12480,inst_12390__$1,inst_12391__$1,inst_12392__$1,inst_12395__$1,inst_12396,inst_12397,inst_12398,inst_12399,inst_12400,inst_12401,inst_12402,inst_12403,inst_12404,inst_12405,inst_12406,inst_12407,inst_12408,inst_12409,inst_12410,inst_12411,inst_12412,inst_12413,inst_12414,inst_12415,inst_12416,inst_12417,inst_12418,inst_12419,inst_12420,inst_12421,inst_12422,inst_12423,inst_12424,inst_12425,inst_12426,inst_12427,inst_12428,inst_12429,inst_12430,inst_12431,inst_12432,inst_12433,inst_12434,inst_12435,inst_12436,inst_12437,inst_12438,inst_12439,inst_12440,inst_12441,inst_12442,inst_12443,inst_12444,inst_12445,inst_12446,inst_12447,inst_12448,inst_12449,inst_12450,inst_12451,inst_12452,inst_12453,inst_12454,inst_12455,inst_12456,inst_12457,inst_12458,inst_12459,inst_12460,inst_12461,inst_12462,inst_12463,inst_12464,inst_12465,inst_12466,inst_12467__$1,inst_12472,inst_12473,inst_12474__$1,inst_12475__$1,inst_12476,inst_12477,inst_12478__$1,inst_12479__$1,inst_12480__$1,inst_12481,inst_12503,state_val_13313,c__6459__auto___13746){
return (function (){
var f__6460__auto__ = (function (){var switch__6444__auto__ = ((function (add_cell_BANG_,depth_compare,player_stars_text,player_standing_texs,player_shadow,close_QMARK_,player_pos,obstacle_types,polar_object_coords,trees,player_standing_sway,game_sprites,loader,player_walking_texs,shadow_tex,_,tex,c__6459__auto____$1,hit_sfx,lobster_big,game_map,star_tex,remove_cell_BANG_,tufts,game_space,pickup_textures,perlin_channel,title_text,floor_objects,pickup_sfx,tilemap,make_pickup,varela,wait,player,player_stars_icon,inst_12475,inst_12281,inst_12286,inst_12278,inst_12268,inst_12306,inst_12319,inst_12474,inst_12274,inst_12305,inst_12390,inst_12467,inst_12333,inst_12307,inst_12300,inst_12363,inst_12285,inst_12326,inst_12395,inst_12282,inst_12316,inst_12392,inst_12269,inst_12310,inst_12283,inst_12479,inst_12297,inst_12287,inst_12284,inst_12391,inst_12275,inst_12478,inst_12313,inst_12336,inst_12480,inst_12390__$1,inst_12391__$1,inst_12392__$1,inst_12395__$1,inst_12396,inst_12397,inst_12398,inst_12399,inst_12400,inst_12401,inst_12402,inst_12403,inst_12404,inst_12405,inst_12406,inst_12407,inst_12408,inst_12409,inst_12410,inst_12411,inst_12412,inst_12413,inst_12414,inst_12415,inst_12416,inst_12417,inst_12418,inst_12419,inst_12420,inst_12421,inst_12422,inst_12423,inst_12424,inst_12425,inst_12426,inst_12427,inst_12428,inst_12429,inst_12430,inst_12431,inst_12432,inst_12433,inst_12434,inst_12435,inst_12436,inst_12437,inst_12438,inst_12439,inst_12440,inst_12441,inst_12442,inst_12443,inst_12444,inst_12445,inst_12446,inst_12447,inst_12448,inst_12449,inst_12450,inst_12451,inst_12452,inst_12453,inst_12454,inst_12455,inst_12456,inst_12457,inst_12458,inst_12459,inst_12460,inst_12461,inst_12462,inst_12463,inst_12464,inst_12465,inst_12466,inst_12467__$1,inst_12472,inst_12473,inst_12474__$1,inst_12475__$1,inst_12476,inst_12477,inst_12478__$1,inst_12479__$1,inst_12480__$1,inst_12481,inst_12503,state_val_13313,c__6459__auto___13746){
return (function (state_12501){
var state_val_12502 = (state_12501[(1)]);
if((state_val_12502 === (7))){
var inst_12493 = (state_12501[(2)]);
var state_12501__$1 = (function (){var statearr_13546 = state_12501;
(statearr_13546[(7)] = inst_12493);

return statearr_13546;
})();
var statearr_13547_13929 = state_12501__$1;
(statearr_13547_13929[(2)] = null);

(statearr_13547_13929[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12502 === (6))){
var inst_12497 = (state_12501[(2)]);
var state_12501__$1 = state_12501;
var statearr_13548_13930 = state_12501__$1;
(statearr_13548_13930[(2)] = inst_12497);

(statearr_13548_13930[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12502 === (5))){
var state_12501__$1 = state_12501;
var statearr_13549_13931 = state_12501__$1;
(statearr_13549_13931[(2)] = null);

(statearr_13549_13931[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12502 === (4))){
var inst_12482 = (state_12501[(8)]);
var inst_12485 = window.innerWidth;
var inst_12486 = window.innerHeight;
var inst_12487 = (inst_12485 / (2));
var inst_12488 = (inst_12486 / (2));
var inst_12489 = (- inst_12488);
var inst_12490 = (inst_12489 + (100));
var inst_12491 = farn.sprite.set_pos_BANG_.call(null,title_text,(0),inst_12490);
var state_12501__$1 = (function (){var statearr_13550 = state_12501;
(statearr_13550[(9)] = inst_12491);

(statearr_13550[(10)] = inst_12487);

return statearr_13550;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12501__$1,(7),inst_12482);
} else {
if((state_val_12502 === (3))){
var inst_12499 = (state_12501[(2)]);
var state_12501__$1 = state_12501;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12501__$1,inst_12499);
} else {
if((state_val_12502 === (2))){
var state_12501__$1 = state_12501;
var statearr_13551_13932 = state_12501__$1;
(statearr_13551_13932[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12502 === (1))){
var inst_12482 = farn.events.new_resize_chan.call(null);
var state_12501__$1 = (function (){var statearr_13553 = state_12501;
(statearr_13553[(8)] = inst_12482);

return statearr_13553;
})();
var statearr_13554_13933 = state_12501__$1;
(statearr_13554_13933[(2)] = null);

(statearr_13554_13933[(1)] = (2));


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
});})(add_cell_BANG_,depth_compare,player_stars_text,player_standing_texs,player_shadow,close_QMARK_,player_pos,obstacle_types,polar_object_coords,trees,player_standing_sway,game_sprites,loader,player_walking_texs,shadow_tex,_,tex,c__6459__auto____$1,hit_sfx,lobster_big,game_map,star_tex,remove_cell_BANG_,tufts,game_space,pickup_textures,perlin_channel,title_text,floor_objects,pickup_sfx,tilemap,make_pickup,varela,wait,player,player_stars_icon,inst_12475,inst_12281,inst_12286,inst_12278,inst_12268,inst_12306,inst_12319,inst_12474,inst_12274,inst_12305,inst_12390,inst_12467,inst_12333,inst_12307,inst_12300,inst_12363,inst_12285,inst_12326,inst_12395,inst_12282,inst_12316,inst_12392,inst_12269,inst_12310,inst_12283,inst_12479,inst_12297,inst_12287,inst_12284,inst_12391,inst_12275,inst_12478,inst_12313,inst_12336,inst_12480,inst_12390__$1,inst_12391__$1,inst_12392__$1,inst_12395__$1,inst_12396,inst_12397,inst_12398,inst_12399,inst_12400,inst_12401,inst_12402,inst_12403,inst_12404,inst_12405,inst_12406,inst_12407,inst_12408,inst_12409,inst_12410,inst_12411,inst_12412,inst_12413,inst_12414,inst_12415,inst_12416,inst_12417,inst_12418,inst_12419,inst_12420,inst_12421,inst_12422,inst_12423,inst_12424,inst_12425,inst_12426,inst_12427,inst_12428,inst_12429,inst_12430,inst_12431,inst_12432,inst_12433,inst_12434,inst_12435,inst_12436,inst_12437,inst_12438,inst_12439,inst_12440,inst_12441,inst_12442,inst_12443,inst_12444,inst_12445,inst_12446,inst_12447,inst_12448,inst_12449,inst_12450,inst_12451,inst_12452,inst_12453,inst_12454,inst_12455,inst_12456,inst_12457,inst_12458,inst_12459,inst_12460,inst_12461,inst_12462,inst_12463,inst_12464,inst_12465,inst_12466,inst_12467__$1,inst_12472,inst_12473,inst_12474__$1,inst_12475__$1,inst_12476,inst_12477,inst_12478__$1,inst_12479__$1,inst_12480__$1,inst_12481,inst_12503,state_val_13313,c__6459__auto___13746))
;
return ((function (switch__6444__auto__,add_cell_BANG_,depth_compare,player_stars_text,player_standing_texs,player_shadow,close_QMARK_,player_pos,obstacle_types,polar_object_coords,trees,player_standing_sway,game_sprites,loader,player_walking_texs,shadow_tex,_,tex,c__6459__auto____$1,hit_sfx,lobster_big,game_map,star_tex,remove_cell_BANG_,tufts,game_space,pickup_textures,perlin_channel,title_text,floor_objects,pickup_sfx,tilemap,make_pickup,varela,wait,player,player_stars_icon,inst_12475,inst_12281,inst_12286,inst_12278,inst_12268,inst_12306,inst_12319,inst_12474,inst_12274,inst_12305,inst_12390,inst_12467,inst_12333,inst_12307,inst_12300,inst_12363,inst_12285,inst_12326,inst_12395,inst_12282,inst_12316,inst_12392,inst_12269,inst_12310,inst_12283,inst_12479,inst_12297,inst_12287,inst_12284,inst_12391,inst_12275,inst_12478,inst_12313,inst_12336,inst_12480,inst_12390__$1,inst_12391__$1,inst_12392__$1,inst_12395__$1,inst_12396,inst_12397,inst_12398,inst_12399,inst_12400,inst_12401,inst_12402,inst_12403,inst_12404,inst_12405,inst_12406,inst_12407,inst_12408,inst_12409,inst_12410,inst_12411,inst_12412,inst_12413,inst_12414,inst_12415,inst_12416,inst_12417,inst_12418,inst_12419,inst_12420,inst_12421,inst_12422,inst_12423,inst_12424,inst_12425,inst_12426,inst_12427,inst_12428,inst_12429,inst_12430,inst_12431,inst_12432,inst_12433,inst_12434,inst_12435,inst_12436,inst_12437,inst_12438,inst_12439,inst_12440,inst_12441,inst_12442,inst_12443,inst_12444,inst_12445,inst_12446,inst_12447,inst_12448,inst_12449,inst_12450,inst_12451,inst_12452,inst_12453,inst_12454,inst_12455,inst_12456,inst_12457,inst_12458,inst_12459,inst_12460,inst_12461,inst_12462,inst_12463,inst_12464,inst_12465,inst_12466,inst_12467__$1,inst_12472,inst_12473,inst_12474__$1,inst_12475__$1,inst_12476,inst_12477,inst_12478__$1,inst_12479__$1,inst_12480__$1,inst_12481,inst_12503,state_val_13313,c__6459__auto___13746){
return (function() {
var state_machine__6445__auto__ = null;
var state_machine__6445__auto____0 = (function (){
var statearr_13558 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_13558[(0)] = state_machine__6445__auto__);

(statearr_13558[(1)] = (1));

return statearr_13558;
});
var state_machine__6445__auto____1 = (function (state_12501){
while(true){
var ret_value__6446__auto__ = (function (){try{while(true){
var result__6447__auto__ = switch__6444__auto__.call(null,state_12501);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6447__auto__;
}
break;
}
}catch (e13559){if((e13559 instanceof Object)){
var ex__6448__auto__ = e13559;
var statearr_13560_13934 = state_12501;
(statearr_13560_13934[(5)] = ex__6448__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12501);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13559;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13935 = state_12501;
state_12501 = G__13935;
continue;
} else {
return ret_value__6446__auto__;
}
break;
}
});
state_machine__6445__auto__ = function(state_12501){
switch(arguments.length){
case 0:
return state_machine__6445__auto____0.call(this);
case 1:
return state_machine__6445__auto____1.call(this,state_12501);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6445__auto____0;
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6445__auto____1;
return state_machine__6445__auto__;
})()
;})(switch__6444__auto__,add_cell_BANG_,depth_compare,player_stars_text,player_standing_texs,player_shadow,close_QMARK_,player_pos,obstacle_types,polar_object_coords,trees,player_standing_sway,game_sprites,loader,player_walking_texs,shadow_tex,_,tex,c__6459__auto____$1,hit_sfx,lobster_big,game_map,star_tex,remove_cell_BANG_,tufts,game_space,pickup_textures,perlin_channel,title_text,floor_objects,pickup_sfx,tilemap,make_pickup,varela,wait,player,player_stars_icon,inst_12475,inst_12281,inst_12286,inst_12278,inst_12268,inst_12306,inst_12319,inst_12474,inst_12274,inst_12305,inst_12390,inst_12467,inst_12333,inst_12307,inst_12300,inst_12363,inst_12285,inst_12326,inst_12395,inst_12282,inst_12316,inst_12392,inst_12269,inst_12310,inst_12283,inst_12479,inst_12297,inst_12287,inst_12284,inst_12391,inst_12275,inst_12478,inst_12313,inst_12336,inst_12480,inst_12390__$1,inst_12391__$1,inst_12392__$1,inst_12395__$1,inst_12396,inst_12397,inst_12398,inst_12399,inst_12400,inst_12401,inst_12402,inst_12403,inst_12404,inst_12405,inst_12406,inst_12407,inst_12408,inst_12409,inst_12410,inst_12411,inst_12412,inst_12413,inst_12414,inst_12415,inst_12416,inst_12417,inst_12418,inst_12419,inst_12420,inst_12421,inst_12422,inst_12423,inst_12424,inst_12425,inst_12426,inst_12427,inst_12428,inst_12429,inst_12430,inst_12431,inst_12432,inst_12433,inst_12434,inst_12435,inst_12436,inst_12437,inst_12438,inst_12439,inst_12440,inst_12441,inst_12442,inst_12443,inst_12444,inst_12445,inst_12446,inst_12447,inst_12448,inst_12449,inst_12450,inst_12451,inst_12452,inst_12453,inst_12454,inst_12455,inst_12456,inst_12457,inst_12458,inst_12459,inst_12460,inst_12461,inst_12462,inst_12463,inst_12464,inst_12465,inst_12466,inst_12467__$1,inst_12472,inst_12473,inst_12474__$1,inst_12475__$1,inst_12476,inst_12477,inst_12478__$1,inst_12479__$1,inst_12480__$1,inst_12481,inst_12503,state_val_13313,c__6459__auto___13746))
})();
var state__6461__auto__ = (function (){var statearr_13561 = f__6460__auto__.call(null);
(statearr_13561[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6459__auto____$1);

return statearr_13561;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6461__auto__);
});
;})(add_cell_BANG_,depth_compare,player_stars_text,player_standing_texs,player_shadow,close_QMARK_,player_pos,obstacle_types,polar_object_coords,trees,player_standing_sway,game_sprites,loader,player_walking_texs,shadow_tex,_,tex,c__6459__auto____$1,hit_sfx,lobster_big,game_map,star_tex,remove_cell_BANG_,tufts,game_space,pickup_textures,perlin_channel,title_text,floor_objects,pickup_sfx,tilemap,make_pickup,varela,wait,player,player_stars_icon,inst_12475,inst_12281,inst_12286,inst_12278,inst_12268,inst_12306,inst_12319,inst_12474,inst_12274,inst_12305,inst_12390,inst_12467,inst_12333,inst_12307,inst_12300,inst_12363,inst_12285,inst_12326,inst_12395,inst_12282,inst_12316,inst_12392,inst_12269,inst_12310,inst_12283,inst_12479,inst_12297,inst_12287,inst_12284,inst_12391,inst_12275,inst_12478,inst_12313,inst_12336,inst_12480,inst_12390__$1,inst_12391__$1,inst_12392__$1,inst_12395__$1,inst_12396,inst_12397,inst_12398,inst_12399,inst_12400,inst_12401,inst_12402,inst_12403,inst_12404,inst_12405,inst_12406,inst_12407,inst_12408,inst_12409,inst_12410,inst_12411,inst_12412,inst_12413,inst_12414,inst_12415,inst_12416,inst_12417,inst_12418,inst_12419,inst_12420,inst_12421,inst_12422,inst_12423,inst_12424,inst_12425,inst_12426,inst_12427,inst_12428,inst_12429,inst_12430,inst_12431,inst_12432,inst_12433,inst_12434,inst_12435,inst_12436,inst_12437,inst_12438,inst_12439,inst_12440,inst_12441,inst_12442,inst_12443,inst_12444,inst_12445,inst_12446,inst_12447,inst_12448,inst_12449,inst_12450,inst_12451,inst_12452,inst_12453,inst_12454,inst_12455,inst_12456,inst_12457,inst_12458,inst_12459,inst_12460,inst_12461,inst_12462,inst_12463,inst_12464,inst_12465,inst_12466,inst_12467__$1,inst_12472,inst_12473,inst_12474__$1,inst_12475__$1,inst_12476,inst_12477,inst_12478__$1,inst_12479__$1,inst_12480__$1,inst_12481,inst_12503,state_val_13313,c__6459__auto___13746))
})();
var inst_12505 = cljs.core.async.impl.dispatch.run.call(null,inst_12504);
var inst_12516 = cljs.core.async.chan.call(null,(1));
var inst_12517 = (function (){var add_cell_BANG_ = inst_12479__$1;
var depth_compare = inst_12391__$1;
var player_stars_text = inst_12310;
var player_standing_texs = inst_12297;
var player_shadow = inst_12287;
var close_QMARK_ = inst_12395__$1;
var player_pos = inst_12478__$1;
var obstacle_types = inst_12319;
var polar_object_coords = inst_12392__$1;
var trees = inst_12326;
var player_standing_sway = inst_12300;
var game_sprites = inst_12474__$1;
var loader = inst_12268;
var player_walking_texs = inst_12305;
var shadow_tex = inst_12286;
var _ = inst_12282;
var tex = inst_12284;
var c__6459__auto____$1 = inst_12516;
var hit_sfx = inst_12390__$1;
var lobster_big = inst_12274;
var game_map = inst_12467__$1;
var star_tex = inst_12306;
var remove_cell_BANG_ = inst_12480__$1;
var tufts = inst_12333;
var game_space = inst_12475__$1;
var pickup_textures = inst_12313;
var perlin_channel = inst_12269;
var title_text = inst_12283;
var floor_objects = inst_12316;
var pickup_sfx = inst_12363;
var tilemap = inst_12281;
var make_pickup = inst_12336;
var varela = inst_12275;
var wait = inst_12278;
var player = inst_12285;
var player_stars_icon = inst_12307;
return ((function (add_cell_BANG_,depth_compare,player_stars_text,player_standing_texs,player_shadow,close_QMARK_,player_pos,obstacle_types,polar_object_coords,trees,player_standing_sway,game_sprites,loader,player_walking_texs,shadow_tex,_,tex,c__6459__auto____$1,hit_sfx,lobster_big,game_map,star_tex,remove_cell_BANG_,tufts,game_space,pickup_textures,perlin_channel,title_text,floor_objects,pickup_sfx,tilemap,make_pickup,varela,wait,player,player_stars_icon,inst_12475,inst_12281,inst_12286,inst_12278,inst_12268,inst_12306,inst_12319,inst_12474,inst_12274,inst_12305,inst_12390,inst_12467,inst_12333,inst_12307,inst_12300,inst_12363,inst_12285,inst_12326,inst_12395,inst_12282,inst_12316,inst_12392,inst_12269,inst_12310,inst_12283,inst_12479,inst_12297,inst_12287,inst_12284,inst_12391,inst_12275,inst_12478,inst_12313,inst_12336,inst_12480,inst_12390__$1,inst_12391__$1,inst_12392__$1,inst_12395__$1,inst_12396,inst_12397,inst_12398,inst_12399,inst_12400,inst_12401,inst_12402,inst_12403,inst_12404,inst_12405,inst_12406,inst_12407,inst_12408,inst_12409,inst_12410,inst_12411,inst_12412,inst_12413,inst_12414,inst_12415,inst_12416,inst_12417,inst_12418,inst_12419,inst_12420,inst_12421,inst_12422,inst_12423,inst_12424,inst_12425,inst_12426,inst_12427,inst_12428,inst_12429,inst_12430,inst_12431,inst_12432,inst_12433,inst_12434,inst_12435,inst_12436,inst_12437,inst_12438,inst_12439,inst_12440,inst_12441,inst_12442,inst_12443,inst_12444,inst_12445,inst_12446,inst_12447,inst_12448,inst_12449,inst_12450,inst_12451,inst_12452,inst_12453,inst_12454,inst_12455,inst_12456,inst_12457,inst_12458,inst_12459,inst_12460,inst_12461,inst_12462,inst_12463,inst_12464,inst_12465,inst_12466,inst_12467__$1,inst_12472,inst_12473,inst_12474__$1,inst_12475__$1,inst_12476,inst_12477,inst_12478__$1,inst_12479__$1,inst_12480__$1,inst_12481,inst_12503,inst_12504,inst_12505,inst_12516,state_val_13313,c__6459__auto___13746){
return (function (){
var f__6460__auto__ = (function (){var switch__6444__auto__ = ((function (add_cell_BANG_,depth_compare,player_stars_text,player_standing_texs,player_shadow,close_QMARK_,player_pos,obstacle_types,polar_object_coords,trees,player_standing_sway,game_sprites,loader,player_walking_texs,shadow_tex,_,tex,c__6459__auto____$1,hit_sfx,lobster_big,game_map,star_tex,remove_cell_BANG_,tufts,game_space,pickup_textures,perlin_channel,title_text,floor_objects,pickup_sfx,tilemap,make_pickup,varela,wait,player,player_stars_icon,inst_12475,inst_12281,inst_12286,inst_12278,inst_12268,inst_12306,inst_12319,inst_12474,inst_12274,inst_12305,inst_12390,inst_12467,inst_12333,inst_12307,inst_12300,inst_12363,inst_12285,inst_12326,inst_12395,inst_12282,inst_12316,inst_12392,inst_12269,inst_12310,inst_12283,inst_12479,inst_12297,inst_12287,inst_12284,inst_12391,inst_12275,inst_12478,inst_12313,inst_12336,inst_12480,inst_12390__$1,inst_12391__$1,inst_12392__$1,inst_12395__$1,inst_12396,inst_12397,inst_12398,inst_12399,inst_12400,inst_12401,inst_12402,inst_12403,inst_12404,inst_12405,inst_12406,inst_12407,inst_12408,inst_12409,inst_12410,inst_12411,inst_12412,inst_12413,inst_12414,inst_12415,inst_12416,inst_12417,inst_12418,inst_12419,inst_12420,inst_12421,inst_12422,inst_12423,inst_12424,inst_12425,inst_12426,inst_12427,inst_12428,inst_12429,inst_12430,inst_12431,inst_12432,inst_12433,inst_12434,inst_12435,inst_12436,inst_12437,inst_12438,inst_12439,inst_12440,inst_12441,inst_12442,inst_12443,inst_12444,inst_12445,inst_12446,inst_12447,inst_12448,inst_12449,inst_12450,inst_12451,inst_12452,inst_12453,inst_12454,inst_12455,inst_12456,inst_12457,inst_12458,inst_12459,inst_12460,inst_12461,inst_12462,inst_12463,inst_12464,inst_12465,inst_12466,inst_12467__$1,inst_12472,inst_12473,inst_12474__$1,inst_12475__$1,inst_12476,inst_12477,inst_12478__$1,inst_12479__$1,inst_12480__$1,inst_12481,inst_12503,inst_12504,inst_12505,inst_12516,state_val_13313,c__6459__auto___13746){
return (function (state_12514){
var state_val_12515 = (state_12514[(1)]);
if((state_val_12515 === (3))){
var inst_12511 = (state_12514[(2)]);
var inst_12512 = farn.core.ui_stage.removeChild(title_text);
var state_12514__$1 = (function (){var statearr_13562 = state_12514;
(statearr_13562[(7)] = inst_12511);

return statearr_13562;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12514__$1,inst_12512);
} else {
if((state_val_12515 === (2))){
var inst_12508 = (state_12514[(2)]);
var inst_12509 = farn.gfx.fadeout.call(null,title_text,new cljs.core.Keyword(null,"duration","duration",1444101068),(1));
var state_12514__$1 = (function (){var statearr_13563 = state_12514;
(statearr_13563[(8)] = inst_12508);

return statearr_13563;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12514__$1,(3),inst_12509);
} else {
if((state_val_12515 === (1))){
var inst_12506 = cljs.core.async.timeout.call(null,(1000));
var state_12514__$1 = state_12514;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12514__$1,(2),inst_12506);
} else {
return null;
}
}
}
});})(add_cell_BANG_,depth_compare,player_stars_text,player_standing_texs,player_shadow,close_QMARK_,player_pos,obstacle_types,polar_object_coords,trees,player_standing_sway,game_sprites,loader,player_walking_texs,shadow_tex,_,tex,c__6459__auto____$1,hit_sfx,lobster_big,game_map,star_tex,remove_cell_BANG_,tufts,game_space,pickup_textures,perlin_channel,title_text,floor_objects,pickup_sfx,tilemap,make_pickup,varela,wait,player,player_stars_icon,inst_12475,inst_12281,inst_12286,inst_12278,inst_12268,inst_12306,inst_12319,inst_12474,inst_12274,inst_12305,inst_12390,inst_12467,inst_12333,inst_12307,inst_12300,inst_12363,inst_12285,inst_12326,inst_12395,inst_12282,inst_12316,inst_12392,inst_12269,inst_12310,inst_12283,inst_12479,inst_12297,inst_12287,inst_12284,inst_12391,inst_12275,inst_12478,inst_12313,inst_12336,inst_12480,inst_12390__$1,inst_12391__$1,inst_12392__$1,inst_12395__$1,inst_12396,inst_12397,inst_12398,inst_12399,inst_12400,inst_12401,inst_12402,inst_12403,inst_12404,inst_12405,inst_12406,inst_12407,inst_12408,inst_12409,inst_12410,inst_12411,inst_12412,inst_12413,inst_12414,inst_12415,inst_12416,inst_12417,inst_12418,inst_12419,inst_12420,inst_12421,inst_12422,inst_12423,inst_12424,inst_12425,inst_12426,inst_12427,inst_12428,inst_12429,inst_12430,inst_12431,inst_12432,inst_12433,inst_12434,inst_12435,inst_12436,inst_12437,inst_12438,inst_12439,inst_12440,inst_12441,inst_12442,inst_12443,inst_12444,inst_12445,inst_12446,inst_12447,inst_12448,inst_12449,inst_12450,inst_12451,inst_12452,inst_12453,inst_12454,inst_12455,inst_12456,inst_12457,inst_12458,inst_12459,inst_12460,inst_12461,inst_12462,inst_12463,inst_12464,inst_12465,inst_12466,inst_12467__$1,inst_12472,inst_12473,inst_12474__$1,inst_12475__$1,inst_12476,inst_12477,inst_12478__$1,inst_12479__$1,inst_12480__$1,inst_12481,inst_12503,inst_12504,inst_12505,inst_12516,state_val_13313,c__6459__auto___13746))
;
return ((function (switch__6444__auto__,add_cell_BANG_,depth_compare,player_stars_text,player_standing_texs,player_shadow,close_QMARK_,player_pos,obstacle_types,polar_object_coords,trees,player_standing_sway,game_sprites,loader,player_walking_texs,shadow_tex,_,tex,c__6459__auto____$1,hit_sfx,lobster_big,game_map,star_tex,remove_cell_BANG_,tufts,game_space,pickup_textures,perlin_channel,title_text,floor_objects,pickup_sfx,tilemap,make_pickup,varela,wait,player,player_stars_icon,inst_12475,inst_12281,inst_12286,inst_12278,inst_12268,inst_12306,inst_12319,inst_12474,inst_12274,inst_12305,inst_12390,inst_12467,inst_12333,inst_12307,inst_12300,inst_12363,inst_12285,inst_12326,inst_12395,inst_12282,inst_12316,inst_12392,inst_12269,inst_12310,inst_12283,inst_12479,inst_12297,inst_12287,inst_12284,inst_12391,inst_12275,inst_12478,inst_12313,inst_12336,inst_12480,inst_12390__$1,inst_12391__$1,inst_12392__$1,inst_12395__$1,inst_12396,inst_12397,inst_12398,inst_12399,inst_12400,inst_12401,inst_12402,inst_12403,inst_12404,inst_12405,inst_12406,inst_12407,inst_12408,inst_12409,inst_12410,inst_12411,inst_12412,inst_12413,inst_12414,inst_12415,inst_12416,inst_12417,inst_12418,inst_12419,inst_12420,inst_12421,inst_12422,inst_12423,inst_12424,inst_12425,inst_12426,inst_12427,inst_12428,inst_12429,inst_12430,inst_12431,inst_12432,inst_12433,inst_12434,inst_12435,inst_12436,inst_12437,inst_12438,inst_12439,inst_12440,inst_12441,inst_12442,inst_12443,inst_12444,inst_12445,inst_12446,inst_12447,inst_12448,inst_12449,inst_12450,inst_12451,inst_12452,inst_12453,inst_12454,inst_12455,inst_12456,inst_12457,inst_12458,inst_12459,inst_12460,inst_12461,inst_12462,inst_12463,inst_12464,inst_12465,inst_12466,inst_12467__$1,inst_12472,inst_12473,inst_12474__$1,inst_12475__$1,inst_12476,inst_12477,inst_12478__$1,inst_12479__$1,inst_12480__$1,inst_12481,inst_12503,inst_12504,inst_12505,inst_12516,state_val_13313,c__6459__auto___13746){
return (function() {
var state_machine__6445__auto__ = null;
var state_machine__6445__auto____0 = (function (){
var statearr_13567 = [null,null,null,null,null,null,null,null,null];
(statearr_13567[(0)] = state_machine__6445__auto__);

(statearr_13567[(1)] = (1));

return statearr_13567;
});
var state_machine__6445__auto____1 = (function (state_12514){
while(true){
var ret_value__6446__auto__ = (function (){try{while(true){
var result__6447__auto__ = switch__6444__auto__.call(null,state_12514);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6447__auto__;
}
break;
}
}catch (e13568){if((e13568 instanceof Object)){
var ex__6448__auto__ = e13568;
var statearr_13569_13936 = state_12514;
(statearr_13569_13936[(5)] = ex__6448__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12514);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13568;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13937 = state_12514;
state_12514 = G__13937;
continue;
} else {
return ret_value__6446__auto__;
}
break;
}
});
state_machine__6445__auto__ = function(state_12514){
switch(arguments.length){
case 0:
return state_machine__6445__auto____0.call(this);
case 1:
return state_machine__6445__auto____1.call(this,state_12514);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6445__auto____0;
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6445__auto____1;
return state_machine__6445__auto__;
})()
;})(switch__6444__auto__,add_cell_BANG_,depth_compare,player_stars_text,player_standing_texs,player_shadow,close_QMARK_,player_pos,obstacle_types,polar_object_coords,trees,player_standing_sway,game_sprites,loader,player_walking_texs,shadow_tex,_,tex,c__6459__auto____$1,hit_sfx,lobster_big,game_map,star_tex,remove_cell_BANG_,tufts,game_space,pickup_textures,perlin_channel,title_text,floor_objects,pickup_sfx,tilemap,make_pickup,varela,wait,player,player_stars_icon,inst_12475,inst_12281,inst_12286,inst_12278,inst_12268,inst_12306,inst_12319,inst_12474,inst_12274,inst_12305,inst_12390,inst_12467,inst_12333,inst_12307,inst_12300,inst_12363,inst_12285,inst_12326,inst_12395,inst_12282,inst_12316,inst_12392,inst_12269,inst_12310,inst_12283,inst_12479,inst_12297,inst_12287,inst_12284,inst_12391,inst_12275,inst_12478,inst_12313,inst_12336,inst_12480,inst_12390__$1,inst_12391__$1,inst_12392__$1,inst_12395__$1,inst_12396,inst_12397,inst_12398,inst_12399,inst_12400,inst_12401,inst_12402,inst_12403,inst_12404,inst_12405,inst_12406,inst_12407,inst_12408,inst_12409,inst_12410,inst_12411,inst_12412,inst_12413,inst_12414,inst_12415,inst_12416,inst_12417,inst_12418,inst_12419,inst_12420,inst_12421,inst_12422,inst_12423,inst_12424,inst_12425,inst_12426,inst_12427,inst_12428,inst_12429,inst_12430,inst_12431,inst_12432,inst_12433,inst_12434,inst_12435,inst_12436,inst_12437,inst_12438,inst_12439,inst_12440,inst_12441,inst_12442,inst_12443,inst_12444,inst_12445,inst_12446,inst_12447,inst_12448,inst_12449,inst_12450,inst_12451,inst_12452,inst_12453,inst_12454,inst_12455,inst_12456,inst_12457,inst_12458,inst_12459,inst_12460,inst_12461,inst_12462,inst_12463,inst_12464,inst_12465,inst_12466,inst_12467__$1,inst_12472,inst_12473,inst_12474__$1,inst_12475__$1,inst_12476,inst_12477,inst_12478__$1,inst_12479__$1,inst_12480__$1,inst_12481,inst_12503,inst_12504,inst_12505,inst_12516,state_val_13313,c__6459__auto___13746))
})();
var state__6461__auto__ = (function (){var statearr_13570 = f__6460__auto__.call(null);
(statearr_13570[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6459__auto____$1);

return statearr_13570;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6461__auto__);
});
;})(add_cell_BANG_,depth_compare,player_stars_text,player_standing_texs,player_shadow,close_QMARK_,player_pos,obstacle_types,polar_object_coords,trees,player_standing_sway,game_sprites,loader,player_walking_texs,shadow_tex,_,tex,c__6459__auto____$1,hit_sfx,lobster_big,game_map,star_tex,remove_cell_BANG_,tufts,game_space,pickup_textures,perlin_channel,title_text,floor_objects,pickup_sfx,tilemap,make_pickup,varela,wait,player,player_stars_icon,inst_12475,inst_12281,inst_12286,inst_12278,inst_12268,inst_12306,inst_12319,inst_12474,inst_12274,inst_12305,inst_12390,inst_12467,inst_12333,inst_12307,inst_12300,inst_12363,inst_12285,inst_12326,inst_12395,inst_12282,inst_12316,inst_12392,inst_12269,inst_12310,inst_12283,inst_12479,inst_12297,inst_12287,inst_12284,inst_12391,inst_12275,inst_12478,inst_12313,inst_12336,inst_12480,inst_12390__$1,inst_12391__$1,inst_12392__$1,inst_12395__$1,inst_12396,inst_12397,inst_12398,inst_12399,inst_12400,inst_12401,inst_12402,inst_12403,inst_12404,inst_12405,inst_12406,inst_12407,inst_12408,inst_12409,inst_12410,inst_12411,inst_12412,inst_12413,inst_12414,inst_12415,inst_12416,inst_12417,inst_12418,inst_12419,inst_12420,inst_12421,inst_12422,inst_12423,inst_12424,inst_12425,inst_12426,inst_12427,inst_12428,inst_12429,inst_12430,inst_12431,inst_12432,inst_12433,inst_12434,inst_12435,inst_12436,inst_12437,inst_12438,inst_12439,inst_12440,inst_12441,inst_12442,inst_12443,inst_12444,inst_12445,inst_12446,inst_12447,inst_12448,inst_12449,inst_12450,inst_12451,inst_12452,inst_12453,inst_12454,inst_12455,inst_12456,inst_12457,inst_12458,inst_12459,inst_12460,inst_12461,inst_12462,inst_12463,inst_12464,inst_12465,inst_12466,inst_12467__$1,inst_12472,inst_12473,inst_12474__$1,inst_12475__$1,inst_12476,inst_12477,inst_12478__$1,inst_12479__$1,inst_12480__$1,inst_12481,inst_12503,inst_12504,inst_12505,inst_12516,state_val_13313,c__6459__auto___13746))
})();
var inst_12518 = cljs.core.async.impl.dispatch.run.call(null,inst_12517);
var inst_12519 = farn.sprite.set_anchor_BANG_.call(null,inst_12307,(0),(0));
var inst_12520 = farn.sprite.set_scale_BANG_.call(null,inst_12307,0.7);
var inst_12521 = farn.sprite.set_anchor_BANG_.call(null,inst_12310,(0),(0));
var inst_12522 = farn.core.ui_stage.addChild(inst_12307);
var inst_12523 = farn.core.ui_stage.addChild(inst_12310);
var inst_12552 = cljs.core.async.chan.call(null,(1));
var inst_12553 = (function (){var add_cell_BANG_ = inst_12479__$1;
var depth_compare = inst_12391__$1;
var player_stars_text = inst_12310;
var player_standing_texs = inst_12297;
var player_shadow = inst_12287;
var close_QMARK_ = inst_12395__$1;
var player_pos = inst_12478__$1;
var obstacle_types = inst_12319;
var polar_object_coords = inst_12392__$1;
var trees = inst_12326;
var player_standing_sway = inst_12300;
var game_sprites = inst_12474__$1;
var loader = inst_12268;
var player_walking_texs = inst_12305;
var shadow_tex = inst_12286;
var _ = inst_12282;
var tex = inst_12284;
var c__6459__auto____$1 = inst_12552;
var hit_sfx = inst_12390__$1;
var lobster_big = inst_12274;
var game_map = inst_12467__$1;
var star_tex = inst_12306;
var remove_cell_BANG_ = inst_12480__$1;
var tufts = inst_12333;
var game_space = inst_12475__$1;
var pickup_textures = inst_12313;
var perlin_channel = inst_12269;
var title_text = inst_12283;
var floor_objects = inst_12316;
var pickup_sfx = inst_12363;
var tilemap = inst_12281;
var make_pickup = inst_12336;
var varela = inst_12275;
var wait = inst_12278;
var player = inst_12285;
var player_stars_icon = inst_12307;
return ((function (add_cell_BANG_,depth_compare,player_stars_text,player_standing_texs,player_shadow,close_QMARK_,player_pos,obstacle_types,polar_object_coords,trees,player_standing_sway,game_sprites,loader,player_walking_texs,shadow_tex,_,tex,c__6459__auto____$1,hit_sfx,lobster_big,game_map,star_tex,remove_cell_BANG_,tufts,game_space,pickup_textures,perlin_channel,title_text,floor_objects,pickup_sfx,tilemap,make_pickup,varela,wait,player,player_stars_icon,inst_12475,inst_12281,inst_12286,inst_12278,inst_12268,inst_12306,inst_12319,inst_12474,inst_12274,inst_12305,inst_12390,inst_12467,inst_12333,inst_12307,inst_12300,inst_12363,inst_12285,inst_12326,inst_12395,inst_12282,inst_12316,inst_12392,inst_12269,inst_12310,inst_12283,inst_12479,inst_12297,inst_12287,inst_12284,inst_12391,inst_12275,inst_12478,inst_12313,inst_12336,inst_12480,inst_12390__$1,inst_12391__$1,inst_12392__$1,inst_12395__$1,inst_12396,inst_12397,inst_12398,inst_12399,inst_12400,inst_12401,inst_12402,inst_12403,inst_12404,inst_12405,inst_12406,inst_12407,inst_12408,inst_12409,inst_12410,inst_12411,inst_12412,inst_12413,inst_12414,inst_12415,inst_12416,inst_12417,inst_12418,inst_12419,inst_12420,inst_12421,inst_12422,inst_12423,inst_12424,inst_12425,inst_12426,inst_12427,inst_12428,inst_12429,inst_12430,inst_12431,inst_12432,inst_12433,inst_12434,inst_12435,inst_12436,inst_12437,inst_12438,inst_12439,inst_12440,inst_12441,inst_12442,inst_12443,inst_12444,inst_12445,inst_12446,inst_12447,inst_12448,inst_12449,inst_12450,inst_12451,inst_12452,inst_12453,inst_12454,inst_12455,inst_12456,inst_12457,inst_12458,inst_12459,inst_12460,inst_12461,inst_12462,inst_12463,inst_12464,inst_12465,inst_12466,inst_12467__$1,inst_12472,inst_12473,inst_12474__$1,inst_12475__$1,inst_12476,inst_12477,inst_12478__$1,inst_12479__$1,inst_12480__$1,inst_12481,inst_12503,inst_12504,inst_12505,inst_12516,inst_12517,inst_12518,inst_12519,inst_12520,inst_12521,inst_12522,inst_12523,inst_12552,state_val_13313,c__6459__auto___13746){
return (function (){
var f__6460__auto__ = (function (){var switch__6444__auto__ = ((function (add_cell_BANG_,depth_compare,player_stars_text,player_standing_texs,player_shadow,close_QMARK_,player_pos,obstacle_types,polar_object_coords,trees,player_standing_sway,game_sprites,loader,player_walking_texs,shadow_tex,_,tex,c__6459__auto____$1,hit_sfx,lobster_big,game_map,star_tex,remove_cell_BANG_,tufts,game_space,pickup_textures,perlin_channel,title_text,floor_objects,pickup_sfx,tilemap,make_pickup,varela,wait,player,player_stars_icon,inst_12475,inst_12281,inst_12286,inst_12278,inst_12268,inst_12306,inst_12319,inst_12474,inst_12274,inst_12305,inst_12390,inst_12467,inst_12333,inst_12307,inst_12300,inst_12363,inst_12285,inst_12326,inst_12395,inst_12282,inst_12316,inst_12392,inst_12269,inst_12310,inst_12283,inst_12479,inst_12297,inst_12287,inst_12284,inst_12391,inst_12275,inst_12478,inst_12313,inst_12336,inst_12480,inst_12390__$1,inst_12391__$1,inst_12392__$1,inst_12395__$1,inst_12396,inst_12397,inst_12398,inst_12399,inst_12400,inst_12401,inst_12402,inst_12403,inst_12404,inst_12405,inst_12406,inst_12407,inst_12408,inst_12409,inst_12410,inst_12411,inst_12412,inst_12413,inst_12414,inst_12415,inst_12416,inst_12417,inst_12418,inst_12419,inst_12420,inst_12421,inst_12422,inst_12423,inst_12424,inst_12425,inst_12426,inst_12427,inst_12428,inst_12429,inst_12430,inst_12431,inst_12432,inst_12433,inst_12434,inst_12435,inst_12436,inst_12437,inst_12438,inst_12439,inst_12440,inst_12441,inst_12442,inst_12443,inst_12444,inst_12445,inst_12446,inst_12447,inst_12448,inst_12449,inst_12450,inst_12451,inst_12452,inst_12453,inst_12454,inst_12455,inst_12456,inst_12457,inst_12458,inst_12459,inst_12460,inst_12461,inst_12462,inst_12463,inst_12464,inst_12465,inst_12466,inst_12467__$1,inst_12472,inst_12473,inst_12474__$1,inst_12475__$1,inst_12476,inst_12477,inst_12478__$1,inst_12479__$1,inst_12480__$1,inst_12481,inst_12503,inst_12504,inst_12505,inst_12516,inst_12517,inst_12518,inst_12519,inst_12520,inst_12521,inst_12522,inst_12523,inst_12552,state_val_13313,c__6459__auto___13746){
return (function (state_12550){
var state_val_12551 = (state_12550[(1)]);
if((state_val_12551 === (7))){
var inst_12542 = (state_12550[(2)]);
var state_12550__$1 = (function (){var statearr_13571 = state_12550;
(statearr_13571[(7)] = inst_12542);

return statearr_13571;
})();
var statearr_13572_13938 = state_12550__$1;
(statearr_13572_13938[(2)] = null);

(statearr_13572_13938[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12551 === (6))){
var inst_12546 = (state_12550[(2)]);
var state_12550__$1 = state_12550;
var statearr_13573_13939 = state_12550__$1;
(statearr_13573_13939[(2)] = inst_12546);

(statearr_13573_13939[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12551 === (5))){
var state_12550__$1 = state_12550;
var statearr_13574_13940 = state_12550__$1;
(statearr_13574_13940[(2)] = null);

(statearr_13574_13940[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12551 === (4))){
var inst_12524 = (state_12550[(8)]);
var inst_12527 = window.innerWidth;
var inst_12528 = window.innerHeight;
var inst_12529 = (inst_12527 / (2));
var inst_12530 = (inst_12528 / (2));
var inst_12531 = (- inst_12529);
var inst_12532 = (inst_12531 + (5));
var inst_12533 = (- inst_12530);
var inst_12534 = (inst_12533 + (5));
var inst_12535 = farn.sprite.set_pos_BANG_.call(null,player_stars_icon,inst_12532,inst_12534);
var inst_12536 = (- inst_12529);
var inst_12537 = (inst_12536 + (45));
var inst_12538 = (- inst_12530);
var inst_12539 = (inst_12538 + (5));
var inst_12540 = farn.sprite.set_pos_BANG_.call(null,player_stars_text,inst_12537,inst_12539);
var state_12550__$1 = (function (){var statearr_13575 = state_12550;
(statearr_13575[(9)] = inst_12535);

(statearr_13575[(10)] = inst_12540);

return statearr_13575;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12550__$1,(7),inst_12524);
} else {
if((state_val_12551 === (3))){
var inst_12548 = (state_12550[(2)]);
var state_12550__$1 = state_12550;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12550__$1,inst_12548);
} else {
if((state_val_12551 === (2))){
var state_12550__$1 = state_12550;
var statearr_13576_13941 = state_12550__$1;
(statearr_13576_13941[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12551 === (1))){
var inst_12524 = farn.events.new_resize_chan.call(null);
var state_12550__$1 = (function (){var statearr_13578 = state_12550;
(statearr_13578[(8)] = inst_12524);

return statearr_13578;
})();
var statearr_13579_13942 = state_12550__$1;
(statearr_13579_13942[(2)] = null);

(statearr_13579_13942[(1)] = (2));


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
});})(add_cell_BANG_,depth_compare,player_stars_text,player_standing_texs,player_shadow,close_QMARK_,player_pos,obstacle_types,polar_object_coords,trees,player_standing_sway,game_sprites,loader,player_walking_texs,shadow_tex,_,tex,c__6459__auto____$1,hit_sfx,lobster_big,game_map,star_tex,remove_cell_BANG_,tufts,game_space,pickup_textures,perlin_channel,title_text,floor_objects,pickup_sfx,tilemap,make_pickup,varela,wait,player,player_stars_icon,inst_12475,inst_12281,inst_12286,inst_12278,inst_12268,inst_12306,inst_12319,inst_12474,inst_12274,inst_12305,inst_12390,inst_12467,inst_12333,inst_12307,inst_12300,inst_12363,inst_12285,inst_12326,inst_12395,inst_12282,inst_12316,inst_12392,inst_12269,inst_12310,inst_12283,inst_12479,inst_12297,inst_12287,inst_12284,inst_12391,inst_12275,inst_12478,inst_12313,inst_12336,inst_12480,inst_12390__$1,inst_12391__$1,inst_12392__$1,inst_12395__$1,inst_12396,inst_12397,inst_12398,inst_12399,inst_12400,inst_12401,inst_12402,inst_12403,inst_12404,inst_12405,inst_12406,inst_12407,inst_12408,inst_12409,inst_12410,inst_12411,inst_12412,inst_12413,inst_12414,inst_12415,inst_12416,inst_12417,inst_12418,inst_12419,inst_12420,inst_12421,inst_12422,inst_12423,inst_12424,inst_12425,inst_12426,inst_12427,inst_12428,inst_12429,inst_12430,inst_12431,inst_12432,inst_12433,inst_12434,inst_12435,inst_12436,inst_12437,inst_12438,inst_12439,inst_12440,inst_12441,inst_12442,inst_12443,inst_12444,inst_12445,inst_12446,inst_12447,inst_12448,inst_12449,inst_12450,inst_12451,inst_12452,inst_12453,inst_12454,inst_12455,inst_12456,inst_12457,inst_12458,inst_12459,inst_12460,inst_12461,inst_12462,inst_12463,inst_12464,inst_12465,inst_12466,inst_12467__$1,inst_12472,inst_12473,inst_12474__$1,inst_12475__$1,inst_12476,inst_12477,inst_12478__$1,inst_12479__$1,inst_12480__$1,inst_12481,inst_12503,inst_12504,inst_12505,inst_12516,inst_12517,inst_12518,inst_12519,inst_12520,inst_12521,inst_12522,inst_12523,inst_12552,state_val_13313,c__6459__auto___13746))
;
return ((function (switch__6444__auto__,add_cell_BANG_,depth_compare,player_stars_text,player_standing_texs,player_shadow,close_QMARK_,player_pos,obstacle_types,polar_object_coords,trees,player_standing_sway,game_sprites,loader,player_walking_texs,shadow_tex,_,tex,c__6459__auto____$1,hit_sfx,lobster_big,game_map,star_tex,remove_cell_BANG_,tufts,game_space,pickup_textures,perlin_channel,title_text,floor_objects,pickup_sfx,tilemap,make_pickup,varela,wait,player,player_stars_icon,inst_12475,inst_12281,inst_12286,inst_12278,inst_12268,inst_12306,inst_12319,inst_12474,inst_12274,inst_12305,inst_12390,inst_12467,inst_12333,inst_12307,inst_12300,inst_12363,inst_12285,inst_12326,inst_12395,inst_12282,inst_12316,inst_12392,inst_12269,inst_12310,inst_12283,inst_12479,inst_12297,inst_12287,inst_12284,inst_12391,inst_12275,inst_12478,inst_12313,inst_12336,inst_12480,inst_12390__$1,inst_12391__$1,inst_12392__$1,inst_12395__$1,inst_12396,inst_12397,inst_12398,inst_12399,inst_12400,inst_12401,inst_12402,inst_12403,inst_12404,inst_12405,inst_12406,inst_12407,inst_12408,inst_12409,inst_12410,inst_12411,inst_12412,inst_12413,inst_12414,inst_12415,inst_12416,inst_12417,inst_12418,inst_12419,inst_12420,inst_12421,inst_12422,inst_12423,inst_12424,inst_12425,inst_12426,inst_12427,inst_12428,inst_12429,inst_12430,inst_12431,inst_12432,inst_12433,inst_12434,inst_12435,inst_12436,inst_12437,inst_12438,inst_12439,inst_12440,inst_12441,inst_12442,inst_12443,inst_12444,inst_12445,inst_12446,inst_12447,inst_12448,inst_12449,inst_12450,inst_12451,inst_12452,inst_12453,inst_12454,inst_12455,inst_12456,inst_12457,inst_12458,inst_12459,inst_12460,inst_12461,inst_12462,inst_12463,inst_12464,inst_12465,inst_12466,inst_12467__$1,inst_12472,inst_12473,inst_12474__$1,inst_12475__$1,inst_12476,inst_12477,inst_12478__$1,inst_12479__$1,inst_12480__$1,inst_12481,inst_12503,inst_12504,inst_12505,inst_12516,inst_12517,inst_12518,inst_12519,inst_12520,inst_12521,inst_12522,inst_12523,inst_12552,state_val_13313,c__6459__auto___13746){
return (function() {
var state_machine__6445__auto__ = null;
var state_machine__6445__auto____0 = (function (){
var statearr_13583 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_13583[(0)] = state_machine__6445__auto__);

(statearr_13583[(1)] = (1));

return statearr_13583;
});
var state_machine__6445__auto____1 = (function (state_12550){
while(true){
var ret_value__6446__auto__ = (function (){try{while(true){
var result__6447__auto__ = switch__6444__auto__.call(null,state_12550);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6447__auto__;
}
break;
}
}catch (e13584){if((e13584 instanceof Object)){
var ex__6448__auto__ = e13584;
var statearr_13585_13943 = state_12550;
(statearr_13585_13943[(5)] = ex__6448__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12550);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13584;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13944 = state_12550;
state_12550 = G__13944;
continue;
} else {
return ret_value__6446__auto__;
}
break;
}
});
state_machine__6445__auto__ = function(state_12550){
switch(arguments.length){
case 0:
return state_machine__6445__auto____0.call(this);
case 1:
return state_machine__6445__auto____1.call(this,state_12550);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6445__auto____0;
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6445__auto____1;
return state_machine__6445__auto__;
})()
;})(switch__6444__auto__,add_cell_BANG_,depth_compare,player_stars_text,player_standing_texs,player_shadow,close_QMARK_,player_pos,obstacle_types,polar_object_coords,trees,player_standing_sway,game_sprites,loader,player_walking_texs,shadow_tex,_,tex,c__6459__auto____$1,hit_sfx,lobster_big,game_map,star_tex,remove_cell_BANG_,tufts,game_space,pickup_textures,perlin_channel,title_text,floor_objects,pickup_sfx,tilemap,make_pickup,varela,wait,player,player_stars_icon,inst_12475,inst_12281,inst_12286,inst_12278,inst_12268,inst_12306,inst_12319,inst_12474,inst_12274,inst_12305,inst_12390,inst_12467,inst_12333,inst_12307,inst_12300,inst_12363,inst_12285,inst_12326,inst_12395,inst_12282,inst_12316,inst_12392,inst_12269,inst_12310,inst_12283,inst_12479,inst_12297,inst_12287,inst_12284,inst_12391,inst_12275,inst_12478,inst_12313,inst_12336,inst_12480,inst_12390__$1,inst_12391__$1,inst_12392__$1,inst_12395__$1,inst_12396,inst_12397,inst_12398,inst_12399,inst_12400,inst_12401,inst_12402,inst_12403,inst_12404,inst_12405,inst_12406,inst_12407,inst_12408,inst_12409,inst_12410,inst_12411,inst_12412,inst_12413,inst_12414,inst_12415,inst_12416,inst_12417,inst_12418,inst_12419,inst_12420,inst_12421,inst_12422,inst_12423,inst_12424,inst_12425,inst_12426,inst_12427,inst_12428,inst_12429,inst_12430,inst_12431,inst_12432,inst_12433,inst_12434,inst_12435,inst_12436,inst_12437,inst_12438,inst_12439,inst_12440,inst_12441,inst_12442,inst_12443,inst_12444,inst_12445,inst_12446,inst_12447,inst_12448,inst_12449,inst_12450,inst_12451,inst_12452,inst_12453,inst_12454,inst_12455,inst_12456,inst_12457,inst_12458,inst_12459,inst_12460,inst_12461,inst_12462,inst_12463,inst_12464,inst_12465,inst_12466,inst_12467__$1,inst_12472,inst_12473,inst_12474__$1,inst_12475__$1,inst_12476,inst_12477,inst_12478__$1,inst_12479__$1,inst_12480__$1,inst_12481,inst_12503,inst_12504,inst_12505,inst_12516,inst_12517,inst_12518,inst_12519,inst_12520,inst_12521,inst_12522,inst_12523,inst_12552,state_val_13313,c__6459__auto___13746))
})();
var state__6461__auto__ = (function (){var statearr_13586 = f__6460__auto__.call(null);
(statearr_13586[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6459__auto____$1);

return statearr_13586;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6461__auto__);
});
;})(add_cell_BANG_,depth_compare,player_stars_text,player_standing_texs,player_shadow,close_QMARK_,player_pos,obstacle_types,polar_object_coords,trees,player_standing_sway,game_sprites,loader,player_walking_texs,shadow_tex,_,tex,c__6459__auto____$1,hit_sfx,lobster_big,game_map,star_tex,remove_cell_BANG_,tufts,game_space,pickup_textures,perlin_channel,title_text,floor_objects,pickup_sfx,tilemap,make_pickup,varela,wait,player,player_stars_icon,inst_12475,inst_12281,inst_12286,inst_12278,inst_12268,inst_12306,inst_12319,inst_12474,inst_12274,inst_12305,inst_12390,inst_12467,inst_12333,inst_12307,inst_12300,inst_12363,inst_12285,inst_12326,inst_12395,inst_12282,inst_12316,inst_12392,inst_12269,inst_12310,inst_12283,inst_12479,inst_12297,inst_12287,inst_12284,inst_12391,inst_12275,inst_12478,inst_12313,inst_12336,inst_12480,inst_12390__$1,inst_12391__$1,inst_12392__$1,inst_12395__$1,inst_12396,inst_12397,inst_12398,inst_12399,inst_12400,inst_12401,inst_12402,inst_12403,inst_12404,inst_12405,inst_12406,inst_12407,inst_12408,inst_12409,inst_12410,inst_12411,inst_12412,inst_12413,inst_12414,inst_12415,inst_12416,inst_12417,inst_12418,inst_12419,inst_12420,inst_12421,inst_12422,inst_12423,inst_12424,inst_12425,inst_12426,inst_12427,inst_12428,inst_12429,inst_12430,inst_12431,inst_12432,inst_12433,inst_12434,inst_12435,inst_12436,inst_12437,inst_12438,inst_12439,inst_12440,inst_12441,inst_12442,inst_12443,inst_12444,inst_12445,inst_12446,inst_12447,inst_12448,inst_12449,inst_12450,inst_12451,inst_12452,inst_12453,inst_12454,inst_12455,inst_12456,inst_12457,inst_12458,inst_12459,inst_12460,inst_12461,inst_12462,inst_12463,inst_12464,inst_12465,inst_12466,inst_12467__$1,inst_12472,inst_12473,inst_12474__$1,inst_12475__$1,inst_12476,inst_12477,inst_12478__$1,inst_12479__$1,inst_12480__$1,inst_12481,inst_12503,inst_12504,inst_12505,inst_12516,inst_12517,inst_12518,inst_12519,inst_12520,inst_12521,inst_12522,inst_12523,inst_12552,state_val_13313,c__6459__auto___13746))
})();
var inst_12554 = cljs.core.async.impl.dispatch.run.call(null,inst_12553);
var inst_12555 = (function (){var add_cell_BANG_ = inst_12479__$1;
var depth_compare = inst_12391__$1;
var player_stars_text = inst_12310;
var player_standing_texs = inst_12297;
var player_shadow = inst_12287;
var close_QMARK_ = inst_12395__$1;
var player_pos = inst_12478__$1;
var obstacle_types = inst_12319;
var polar_object_coords = inst_12392__$1;
var trees = inst_12326;
var player_standing_sway = inst_12300;
var game_sprites = inst_12474__$1;
var loader = inst_12268;
var player_walking_texs = inst_12305;
var shadow_tex = inst_12286;
var _ = inst_12282;
var tex = inst_12284;
var hit_sfx = inst_12390__$1;
var lobster_big = inst_12274;
var game_map = inst_12467__$1;
var star_tex = inst_12306;
var remove_cell_BANG_ = inst_12480__$1;
var tufts = inst_12333;
var game_space = inst_12475__$1;
var pickup_textures = inst_12313;
var perlin_channel = inst_12269;
var title_text = inst_12283;
var floor_objects = inst_12316;
var pickup_sfx = inst_12363;
var tilemap = inst_12281;
var make_pickup = inst_12336;
var varela = inst_12275;
var wait = inst_12278;
var player = inst_12285;
var player_stars_icon = inst_12307;
return ((function (add_cell_BANG_,depth_compare,player_stars_text,player_standing_texs,player_shadow,close_QMARK_,player_pos,obstacle_types,polar_object_coords,trees,player_standing_sway,game_sprites,loader,player_walking_texs,shadow_tex,_,tex,hit_sfx,lobster_big,game_map,star_tex,remove_cell_BANG_,tufts,game_space,pickup_textures,perlin_channel,title_text,floor_objects,pickup_sfx,tilemap,make_pickup,varela,wait,player,player_stars_icon,inst_12475,inst_12281,inst_12286,inst_12278,inst_12268,inst_12306,inst_12319,inst_12474,inst_12274,inst_12305,inst_12390,inst_12467,inst_12333,inst_12307,inst_12300,inst_12363,inst_12285,inst_12326,inst_12395,inst_12282,inst_12316,inst_12392,inst_12269,inst_12310,inst_12283,inst_12479,inst_12297,inst_12287,inst_12284,inst_12391,inst_12275,inst_12478,inst_12313,inst_12336,inst_12480,inst_12390__$1,inst_12391__$1,inst_12392__$1,inst_12395__$1,inst_12396,inst_12397,inst_12398,inst_12399,inst_12400,inst_12401,inst_12402,inst_12403,inst_12404,inst_12405,inst_12406,inst_12407,inst_12408,inst_12409,inst_12410,inst_12411,inst_12412,inst_12413,inst_12414,inst_12415,inst_12416,inst_12417,inst_12418,inst_12419,inst_12420,inst_12421,inst_12422,inst_12423,inst_12424,inst_12425,inst_12426,inst_12427,inst_12428,inst_12429,inst_12430,inst_12431,inst_12432,inst_12433,inst_12434,inst_12435,inst_12436,inst_12437,inst_12438,inst_12439,inst_12440,inst_12441,inst_12442,inst_12443,inst_12444,inst_12445,inst_12446,inst_12447,inst_12448,inst_12449,inst_12450,inst_12451,inst_12452,inst_12453,inst_12454,inst_12455,inst_12456,inst_12457,inst_12458,inst_12459,inst_12460,inst_12461,inst_12462,inst_12463,inst_12464,inst_12465,inst_12466,inst_12467__$1,inst_12472,inst_12473,inst_12474__$1,inst_12475__$1,inst_12476,inst_12477,inst_12478__$1,inst_12479__$1,inst_12480__$1,inst_12481,inst_12503,inst_12504,inst_12505,inst_12516,inst_12517,inst_12518,inst_12519,inst_12520,inst_12521,inst_12522,inst_12523,inst_12552,inst_12553,inst_12554,state_val_13313,c__6459__auto___13746){
return (function (key,ref,old,new$){
return player_stars_text.setText([cljs.core.str(new$)].join(''));
});
;})(add_cell_BANG_,depth_compare,player_stars_text,player_standing_texs,player_shadow,close_QMARK_,player_pos,obstacle_types,polar_object_coords,trees,player_standing_sway,game_sprites,loader,player_walking_texs,shadow_tex,_,tex,hit_sfx,lobster_big,game_map,star_tex,remove_cell_BANG_,tufts,game_space,pickup_textures,perlin_channel,title_text,floor_objects,pickup_sfx,tilemap,make_pickup,varela,wait,player,player_stars_icon,inst_12475,inst_12281,inst_12286,inst_12278,inst_12268,inst_12306,inst_12319,inst_12474,inst_12274,inst_12305,inst_12390,inst_12467,inst_12333,inst_12307,inst_12300,inst_12363,inst_12285,inst_12326,inst_12395,inst_12282,inst_12316,inst_12392,inst_12269,inst_12310,inst_12283,inst_12479,inst_12297,inst_12287,inst_12284,inst_12391,inst_12275,inst_12478,inst_12313,inst_12336,inst_12480,inst_12390__$1,inst_12391__$1,inst_12392__$1,inst_12395__$1,inst_12396,inst_12397,inst_12398,inst_12399,inst_12400,inst_12401,inst_12402,inst_12403,inst_12404,inst_12405,inst_12406,inst_12407,inst_12408,inst_12409,inst_12410,inst_12411,inst_12412,inst_12413,inst_12414,inst_12415,inst_12416,inst_12417,inst_12418,inst_12419,inst_12420,inst_12421,inst_12422,inst_12423,inst_12424,inst_12425,inst_12426,inst_12427,inst_12428,inst_12429,inst_12430,inst_12431,inst_12432,inst_12433,inst_12434,inst_12435,inst_12436,inst_12437,inst_12438,inst_12439,inst_12440,inst_12441,inst_12442,inst_12443,inst_12444,inst_12445,inst_12446,inst_12447,inst_12448,inst_12449,inst_12450,inst_12451,inst_12452,inst_12453,inst_12454,inst_12455,inst_12456,inst_12457,inst_12458,inst_12459,inst_12460,inst_12461,inst_12462,inst_12463,inst_12464,inst_12465,inst_12466,inst_12467__$1,inst_12472,inst_12473,inst_12474__$1,inst_12475__$1,inst_12476,inst_12477,inst_12478__$1,inst_12479__$1,inst_12480__$1,inst_12481,inst_12503,inst_12504,inst_12505,inst_12516,inst_12517,inst_12518,inst_12519,inst_12520,inst_12521,inst_12522,inst_12523,inst_12552,inst_12553,inst_12554,state_val_13313,c__6459__auto___13746))
})();
var inst_12556 = cljs.core.add_watch.call(null,farn.core.player_stars,new cljs.core.Keyword(null,"add","add",235287739),inst_12555);
var inst_12557 = farn.rex.launch_rex.call(null,farn.core.ui_stage);
var inst_12601 = cljs.core.async.chan.call(null,(1));
var inst_12602 = (function (){var add_cell_BANG_ = inst_12479__$1;
var depth_compare = inst_12391__$1;
var player_stars_text = inst_12310;
var player_standing_texs = inst_12297;
var player_shadow = inst_12287;
var close_QMARK_ = inst_12395__$1;
var player_pos = inst_12478__$1;
var obstacle_types = inst_12319;
var polar_object_coords = inst_12392__$1;
var trees = inst_12326;
var player_standing_sway = inst_12300;
var game_sprites = inst_12474__$1;
var loader = inst_12268;
var player_walking_texs = inst_12305;
var shadow_tex = inst_12286;
var _ = inst_12282;
var tex = inst_12284;
var c__6459__auto____$1 = inst_12601;
var hit_sfx = inst_12390__$1;
var lobster_big = inst_12274;
var game_map = inst_12467__$1;
var star_tex = inst_12306;
var remove_cell_BANG_ = inst_12480__$1;
var tufts = inst_12333;
var game_space = inst_12475__$1;
var pickup_textures = inst_12313;
var perlin_channel = inst_12269;
var title_text = inst_12283;
var floor_objects = inst_12316;
var pickup_sfx = inst_12363;
var tilemap = inst_12281;
var make_pickup = inst_12336;
var varela = inst_12275;
var wait = inst_12278;
var player = inst_12285;
var player_stars_icon = inst_12307;
return ((function (add_cell_BANG_,depth_compare,player_stars_text,player_standing_texs,player_shadow,close_QMARK_,player_pos,obstacle_types,polar_object_coords,trees,player_standing_sway,game_sprites,loader,player_walking_texs,shadow_tex,_,tex,c__6459__auto____$1,hit_sfx,lobster_big,game_map,star_tex,remove_cell_BANG_,tufts,game_space,pickup_textures,perlin_channel,title_text,floor_objects,pickup_sfx,tilemap,make_pickup,varela,wait,player,player_stars_icon,inst_12475,inst_12281,inst_12286,inst_12278,inst_12268,inst_12306,inst_12319,inst_12474,inst_12274,inst_12305,inst_12390,inst_12467,inst_12333,inst_12307,inst_12300,inst_12363,inst_12285,inst_12326,inst_12395,inst_12282,inst_12316,inst_12392,inst_12269,inst_12310,inst_12283,inst_12479,inst_12297,inst_12287,inst_12284,inst_12391,inst_12275,inst_12478,inst_12313,inst_12336,inst_12480,inst_12390__$1,inst_12391__$1,inst_12392__$1,inst_12395__$1,inst_12396,inst_12397,inst_12398,inst_12399,inst_12400,inst_12401,inst_12402,inst_12403,inst_12404,inst_12405,inst_12406,inst_12407,inst_12408,inst_12409,inst_12410,inst_12411,inst_12412,inst_12413,inst_12414,inst_12415,inst_12416,inst_12417,inst_12418,inst_12419,inst_12420,inst_12421,inst_12422,inst_12423,inst_12424,inst_12425,inst_12426,inst_12427,inst_12428,inst_12429,inst_12430,inst_12431,inst_12432,inst_12433,inst_12434,inst_12435,inst_12436,inst_12437,inst_12438,inst_12439,inst_12440,inst_12441,inst_12442,inst_12443,inst_12444,inst_12445,inst_12446,inst_12447,inst_12448,inst_12449,inst_12450,inst_12451,inst_12452,inst_12453,inst_12454,inst_12455,inst_12456,inst_12457,inst_12458,inst_12459,inst_12460,inst_12461,inst_12462,inst_12463,inst_12464,inst_12465,inst_12466,inst_12467__$1,inst_12472,inst_12473,inst_12474__$1,inst_12475__$1,inst_12476,inst_12477,inst_12478__$1,inst_12479__$1,inst_12480__$1,inst_12481,inst_12503,inst_12504,inst_12505,inst_12516,inst_12517,inst_12518,inst_12519,inst_12520,inst_12521,inst_12522,inst_12523,inst_12552,inst_12553,inst_12554,inst_12555,inst_12556,inst_12557,inst_12601,state_val_13313,c__6459__auto___13746){
return (function (){
var f__6460__auto__ = (function (){var switch__6444__auto__ = ((function (add_cell_BANG_,depth_compare,player_stars_text,player_standing_texs,player_shadow,close_QMARK_,player_pos,obstacle_types,polar_object_coords,trees,player_standing_sway,game_sprites,loader,player_walking_texs,shadow_tex,_,tex,c__6459__auto____$1,hit_sfx,lobster_big,game_map,star_tex,remove_cell_BANG_,tufts,game_space,pickup_textures,perlin_channel,title_text,floor_objects,pickup_sfx,tilemap,make_pickup,varela,wait,player,player_stars_icon,inst_12475,inst_12281,inst_12286,inst_12278,inst_12268,inst_12306,inst_12319,inst_12474,inst_12274,inst_12305,inst_12390,inst_12467,inst_12333,inst_12307,inst_12300,inst_12363,inst_12285,inst_12326,inst_12395,inst_12282,inst_12316,inst_12392,inst_12269,inst_12310,inst_12283,inst_12479,inst_12297,inst_12287,inst_12284,inst_12391,inst_12275,inst_12478,inst_12313,inst_12336,inst_12480,inst_12390__$1,inst_12391__$1,inst_12392__$1,inst_12395__$1,inst_12396,inst_12397,inst_12398,inst_12399,inst_12400,inst_12401,inst_12402,inst_12403,inst_12404,inst_12405,inst_12406,inst_12407,inst_12408,inst_12409,inst_12410,inst_12411,inst_12412,inst_12413,inst_12414,inst_12415,inst_12416,inst_12417,inst_12418,inst_12419,inst_12420,inst_12421,inst_12422,inst_12423,inst_12424,inst_12425,inst_12426,inst_12427,inst_12428,inst_12429,inst_12430,inst_12431,inst_12432,inst_12433,inst_12434,inst_12435,inst_12436,inst_12437,inst_12438,inst_12439,inst_12440,inst_12441,inst_12442,inst_12443,inst_12444,inst_12445,inst_12446,inst_12447,inst_12448,inst_12449,inst_12450,inst_12451,inst_12452,inst_12453,inst_12454,inst_12455,inst_12456,inst_12457,inst_12458,inst_12459,inst_12460,inst_12461,inst_12462,inst_12463,inst_12464,inst_12465,inst_12466,inst_12467__$1,inst_12472,inst_12473,inst_12474__$1,inst_12475__$1,inst_12476,inst_12477,inst_12478__$1,inst_12479__$1,inst_12480__$1,inst_12481,inst_12503,inst_12504,inst_12505,inst_12516,inst_12517,inst_12518,inst_12519,inst_12520,inst_12521,inst_12522,inst_12523,inst_12552,inst_12553,inst_12554,inst_12555,inst_12556,inst_12557,inst_12601,state_val_13313,c__6459__auto___13746){
return (function (state_12599){
var state_val_12600 = (state_12599[(1)]);
if((state_val_12600 === (7))){
var inst_12574 = (state_12599[(2)]);
var inst_12575 = cljs.core.deref.call(null,farn.core.pickup_store);
var inst_12576 = cljs.core.count.call(null,inst_12575);
var inst_12577 = (inst_12576 < farn.core.max_pickups);
var state_12599__$1 = (function (){var statearr_13587 = state_12599;
(statearr_13587[(7)] = inst_12574);

return statearr_13587;
})();
if(cljs.core.truth_(inst_12577)){
var statearr_13588_13945 = state_12599__$1;
(statearr_13588_13945[(1)] = (8));

} else {
var statearr_13589_13946 = state_12599__$1;
(statearr_13589_13946[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12600 === (1))){
var inst_12558 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_12559 = [(0),(0)];
var inst_12560 = (new cljs.core.PersistentVector(null,2,(5),inst_12558,inst_12559,null));
var inst_12561 = make_pickup.call(null,inst_12560,(10000),new cljs.core.Keyword(null,"pickup-baby-1","pickup-baby-1",-1650486973),(2000));
var inst_12562 = cljs.core.swap_BANG_.call(null,farn.core.pickup_store,cljs.core.conj,inst_12561);
var inst_12563 = new cljs.core.Keyword(null,"sprite","sprite",172516848).cljs$core$IFn$_invoke$arity$1(inst_12561);
var inst_12564 = new cljs.core.Keyword(null,"scale","scale",-230427353).cljs$core$IFn$_invoke$arity$1(inst_12561);
var inst_12565 = farn.sprite.set_scale_BANG_.call(null,inst_12563,inst_12564);
var inst_12566 = new cljs.core.Keyword(null,"sprite","sprite",172516848).cljs$core$IFn$_invoke$arity$1(inst_12561);
var inst_12567 = farn.core.main_stage.addChild(inst_12566);
var inst_12568 = new cljs.core.Keyword(null,"shadow","shadow",873231803).cljs$core$IFn$_invoke$arity$1(inst_12561);
var inst_12569 = farn.core.main_stage.addChild(inst_12568);
var state_12599__$1 = (function (){var statearr_13590 = state_12599;
(statearr_13590[(8)] = inst_12565);

(statearr_13590[(9)] = inst_12569);

(statearr_13590[(10)] = inst_12562);

(statearr_13590[(11)] = inst_12567);

return statearr_13590;
})();
var statearr_13591_13947 = state_12599__$1;
(statearr_13591_13947[(2)] = null);

(statearr_13591_13947[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12600 === (4))){
var inst_12572 = cljs.core.async.timeout.call(null,(333));
var state_12599__$1 = state_12599;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12599__$1,(7),inst_12572);
} else {
if((state_val_12600 === (6))){
var inst_12595 = (state_12599[(2)]);
var state_12599__$1 = state_12599;
var statearr_13592_13948 = state_12599__$1;
(statearr_13592_13948[(2)] = inst_12595);

(statearr_13592_13948[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12600 === (3))){
var inst_12597 = (state_12599[(2)]);
var state_12599__$1 = state_12599;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12599__$1,inst_12597);
} else {
if((state_val_12600 === (2))){
var state_12599__$1 = state_12599;
var statearr_13593_13949 = state_12599__$1;
(statearr_13593_13949[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12600 === (9))){
var state_12599__$1 = state_12599;
var statearr_13595_13950 = state_12599__$1;
(statearr_13595_13950[(2)] = null);

(statearr_13595_13950[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12600 === (5))){
var state_12599__$1 = state_12599;
var statearr_13596_13951 = state_12599__$1;
(statearr_13596_13951[(2)] = null);

(statearr_13596_13951[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12600 === (10))){
var inst_12591 = (state_12599[(2)]);
var state_12599__$1 = (function (){var statearr_13597 = state_12599;
(statearr_13597[(12)] = inst_12591);

return statearr_13597;
})();
var statearr_13598_13952 = state_12599__$1;
(statearr_13598_13952[(2)] = null);

(statearr_13598_13952[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12600 === (8))){
var inst_12579 = cljs.core.deref.call(null,farn.core.last_player_position);
var inst_12580 = make_pickup.call(null,inst_12579,farn.core.pickup_spread);
var inst_12581 = cljs.core.swap_BANG_.call(null,farn.core.pickup_store,cljs.core.conj,inst_12580);
var inst_12582 = new cljs.core.Keyword(null,"sprite","sprite",172516848).cljs$core$IFn$_invoke$arity$1(inst_12580);
var inst_12583 = new cljs.core.Keyword(null,"scale","scale",-230427353).cljs$core$IFn$_invoke$arity$1(inst_12580);
var inst_12584 = farn.sprite.set_scale_BANG_.call(null,inst_12582,inst_12583);
var inst_12585 = new cljs.core.Keyword(null,"sprite","sprite",172516848).cljs$core$IFn$_invoke$arity$1(inst_12580);
var inst_12586 = farn.core.main_stage.addChild(inst_12585);
var inst_12587 = new cljs.core.Keyword(null,"shadow","shadow",873231803).cljs$core$IFn$_invoke$arity$1(inst_12580);
var inst_12588 = farn.core.main_stage.addChild(inst_12587);
var state_12599__$1 = (function (){var statearr_13599 = state_12599;
(statearr_13599[(13)] = inst_12581);

(statearr_13599[(14)] = inst_12584);

(statearr_13599[(15)] = inst_12586);

return statearr_13599;
})();
var statearr_13600_13953 = state_12599__$1;
(statearr_13600_13953[(2)] = inst_12588);

(statearr_13600_13953[(1)] = (10));


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
});})(add_cell_BANG_,depth_compare,player_stars_text,player_standing_texs,player_shadow,close_QMARK_,player_pos,obstacle_types,polar_object_coords,trees,player_standing_sway,game_sprites,loader,player_walking_texs,shadow_tex,_,tex,c__6459__auto____$1,hit_sfx,lobster_big,game_map,star_tex,remove_cell_BANG_,tufts,game_space,pickup_textures,perlin_channel,title_text,floor_objects,pickup_sfx,tilemap,make_pickup,varela,wait,player,player_stars_icon,inst_12475,inst_12281,inst_12286,inst_12278,inst_12268,inst_12306,inst_12319,inst_12474,inst_12274,inst_12305,inst_12390,inst_12467,inst_12333,inst_12307,inst_12300,inst_12363,inst_12285,inst_12326,inst_12395,inst_12282,inst_12316,inst_12392,inst_12269,inst_12310,inst_12283,inst_12479,inst_12297,inst_12287,inst_12284,inst_12391,inst_12275,inst_12478,inst_12313,inst_12336,inst_12480,inst_12390__$1,inst_12391__$1,inst_12392__$1,inst_12395__$1,inst_12396,inst_12397,inst_12398,inst_12399,inst_12400,inst_12401,inst_12402,inst_12403,inst_12404,inst_12405,inst_12406,inst_12407,inst_12408,inst_12409,inst_12410,inst_12411,inst_12412,inst_12413,inst_12414,inst_12415,inst_12416,inst_12417,inst_12418,inst_12419,inst_12420,inst_12421,inst_12422,inst_12423,inst_12424,inst_12425,inst_12426,inst_12427,inst_12428,inst_12429,inst_12430,inst_12431,inst_12432,inst_12433,inst_12434,inst_12435,inst_12436,inst_12437,inst_12438,inst_12439,inst_12440,inst_12441,inst_12442,inst_12443,inst_12444,inst_12445,inst_12446,inst_12447,inst_12448,inst_12449,inst_12450,inst_12451,inst_12452,inst_12453,inst_12454,inst_12455,inst_12456,inst_12457,inst_12458,inst_12459,inst_12460,inst_12461,inst_12462,inst_12463,inst_12464,inst_12465,inst_12466,inst_12467__$1,inst_12472,inst_12473,inst_12474__$1,inst_12475__$1,inst_12476,inst_12477,inst_12478__$1,inst_12479__$1,inst_12480__$1,inst_12481,inst_12503,inst_12504,inst_12505,inst_12516,inst_12517,inst_12518,inst_12519,inst_12520,inst_12521,inst_12522,inst_12523,inst_12552,inst_12553,inst_12554,inst_12555,inst_12556,inst_12557,inst_12601,state_val_13313,c__6459__auto___13746))
;
return ((function (switch__6444__auto__,add_cell_BANG_,depth_compare,player_stars_text,player_standing_texs,player_shadow,close_QMARK_,player_pos,obstacle_types,polar_object_coords,trees,player_standing_sway,game_sprites,loader,player_walking_texs,shadow_tex,_,tex,c__6459__auto____$1,hit_sfx,lobster_big,game_map,star_tex,remove_cell_BANG_,tufts,game_space,pickup_textures,perlin_channel,title_text,floor_objects,pickup_sfx,tilemap,make_pickup,varela,wait,player,player_stars_icon,inst_12475,inst_12281,inst_12286,inst_12278,inst_12268,inst_12306,inst_12319,inst_12474,inst_12274,inst_12305,inst_12390,inst_12467,inst_12333,inst_12307,inst_12300,inst_12363,inst_12285,inst_12326,inst_12395,inst_12282,inst_12316,inst_12392,inst_12269,inst_12310,inst_12283,inst_12479,inst_12297,inst_12287,inst_12284,inst_12391,inst_12275,inst_12478,inst_12313,inst_12336,inst_12480,inst_12390__$1,inst_12391__$1,inst_12392__$1,inst_12395__$1,inst_12396,inst_12397,inst_12398,inst_12399,inst_12400,inst_12401,inst_12402,inst_12403,inst_12404,inst_12405,inst_12406,inst_12407,inst_12408,inst_12409,inst_12410,inst_12411,inst_12412,inst_12413,inst_12414,inst_12415,inst_12416,inst_12417,inst_12418,inst_12419,inst_12420,inst_12421,inst_12422,inst_12423,inst_12424,inst_12425,inst_12426,inst_12427,inst_12428,inst_12429,inst_12430,inst_12431,inst_12432,inst_12433,inst_12434,inst_12435,inst_12436,inst_12437,inst_12438,inst_12439,inst_12440,inst_12441,inst_12442,inst_12443,inst_12444,inst_12445,inst_12446,inst_12447,inst_12448,inst_12449,inst_12450,inst_12451,inst_12452,inst_12453,inst_12454,inst_12455,inst_12456,inst_12457,inst_12458,inst_12459,inst_12460,inst_12461,inst_12462,inst_12463,inst_12464,inst_12465,inst_12466,inst_12467__$1,inst_12472,inst_12473,inst_12474__$1,inst_12475__$1,inst_12476,inst_12477,inst_12478__$1,inst_12479__$1,inst_12480__$1,inst_12481,inst_12503,inst_12504,inst_12505,inst_12516,inst_12517,inst_12518,inst_12519,inst_12520,inst_12521,inst_12522,inst_12523,inst_12552,inst_12553,inst_12554,inst_12555,inst_12556,inst_12557,inst_12601,state_val_13313,c__6459__auto___13746){
return (function() {
var state_machine__6445__auto__ = null;
var state_machine__6445__auto____0 = (function (){
var statearr_13604 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13604[(0)] = state_machine__6445__auto__);

(statearr_13604[(1)] = (1));

return statearr_13604;
});
var state_machine__6445__auto____1 = (function (state_12599){
while(true){
var ret_value__6446__auto__ = (function (){try{while(true){
var result__6447__auto__ = switch__6444__auto__.call(null,state_12599);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6447__auto__;
}
break;
}
}catch (e13605){if((e13605 instanceof Object)){
var ex__6448__auto__ = e13605;
var statearr_13606_13954 = state_12599;
(statearr_13606_13954[(5)] = ex__6448__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12599);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13605;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13955 = state_12599;
state_12599 = G__13955;
continue;
} else {
return ret_value__6446__auto__;
}
break;
}
});
state_machine__6445__auto__ = function(state_12599){
switch(arguments.length){
case 0:
return state_machine__6445__auto____0.call(this);
case 1:
return state_machine__6445__auto____1.call(this,state_12599);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6445__auto____0;
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6445__auto____1;
return state_machine__6445__auto__;
})()
;})(switch__6444__auto__,add_cell_BANG_,depth_compare,player_stars_text,player_standing_texs,player_shadow,close_QMARK_,player_pos,obstacle_types,polar_object_coords,trees,player_standing_sway,game_sprites,loader,player_walking_texs,shadow_tex,_,tex,c__6459__auto____$1,hit_sfx,lobster_big,game_map,star_tex,remove_cell_BANG_,tufts,game_space,pickup_textures,perlin_channel,title_text,floor_objects,pickup_sfx,tilemap,make_pickup,varela,wait,player,player_stars_icon,inst_12475,inst_12281,inst_12286,inst_12278,inst_12268,inst_12306,inst_12319,inst_12474,inst_12274,inst_12305,inst_12390,inst_12467,inst_12333,inst_12307,inst_12300,inst_12363,inst_12285,inst_12326,inst_12395,inst_12282,inst_12316,inst_12392,inst_12269,inst_12310,inst_12283,inst_12479,inst_12297,inst_12287,inst_12284,inst_12391,inst_12275,inst_12478,inst_12313,inst_12336,inst_12480,inst_12390__$1,inst_12391__$1,inst_12392__$1,inst_12395__$1,inst_12396,inst_12397,inst_12398,inst_12399,inst_12400,inst_12401,inst_12402,inst_12403,inst_12404,inst_12405,inst_12406,inst_12407,inst_12408,inst_12409,inst_12410,inst_12411,inst_12412,inst_12413,inst_12414,inst_12415,inst_12416,inst_12417,inst_12418,inst_12419,inst_12420,inst_12421,inst_12422,inst_12423,inst_12424,inst_12425,inst_12426,inst_12427,inst_12428,inst_12429,inst_12430,inst_12431,inst_12432,inst_12433,inst_12434,inst_12435,inst_12436,inst_12437,inst_12438,inst_12439,inst_12440,inst_12441,inst_12442,inst_12443,inst_12444,inst_12445,inst_12446,inst_12447,inst_12448,inst_12449,inst_12450,inst_12451,inst_12452,inst_12453,inst_12454,inst_12455,inst_12456,inst_12457,inst_12458,inst_12459,inst_12460,inst_12461,inst_12462,inst_12463,inst_12464,inst_12465,inst_12466,inst_12467__$1,inst_12472,inst_12473,inst_12474__$1,inst_12475__$1,inst_12476,inst_12477,inst_12478__$1,inst_12479__$1,inst_12480__$1,inst_12481,inst_12503,inst_12504,inst_12505,inst_12516,inst_12517,inst_12518,inst_12519,inst_12520,inst_12521,inst_12522,inst_12523,inst_12552,inst_12553,inst_12554,inst_12555,inst_12556,inst_12557,inst_12601,state_val_13313,c__6459__auto___13746))
})();
var state__6461__auto__ = (function (){var statearr_13607 = f__6460__auto__.call(null);
(statearr_13607[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6459__auto____$1);

return statearr_13607;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6461__auto__);
});
;})(add_cell_BANG_,depth_compare,player_stars_text,player_standing_texs,player_shadow,close_QMARK_,player_pos,obstacle_types,polar_object_coords,trees,player_standing_sway,game_sprites,loader,player_walking_texs,shadow_tex,_,tex,c__6459__auto____$1,hit_sfx,lobster_big,game_map,star_tex,remove_cell_BANG_,tufts,game_space,pickup_textures,perlin_channel,title_text,floor_objects,pickup_sfx,tilemap,make_pickup,varela,wait,player,player_stars_icon,inst_12475,inst_12281,inst_12286,inst_12278,inst_12268,inst_12306,inst_12319,inst_12474,inst_12274,inst_12305,inst_12390,inst_12467,inst_12333,inst_12307,inst_12300,inst_12363,inst_12285,inst_12326,inst_12395,inst_12282,inst_12316,inst_12392,inst_12269,inst_12310,inst_12283,inst_12479,inst_12297,inst_12287,inst_12284,inst_12391,inst_12275,inst_12478,inst_12313,inst_12336,inst_12480,inst_12390__$1,inst_12391__$1,inst_12392__$1,inst_12395__$1,inst_12396,inst_12397,inst_12398,inst_12399,inst_12400,inst_12401,inst_12402,inst_12403,inst_12404,inst_12405,inst_12406,inst_12407,inst_12408,inst_12409,inst_12410,inst_12411,inst_12412,inst_12413,inst_12414,inst_12415,inst_12416,inst_12417,inst_12418,inst_12419,inst_12420,inst_12421,inst_12422,inst_12423,inst_12424,inst_12425,inst_12426,inst_12427,inst_12428,inst_12429,inst_12430,inst_12431,inst_12432,inst_12433,inst_12434,inst_12435,inst_12436,inst_12437,inst_12438,inst_12439,inst_12440,inst_12441,inst_12442,inst_12443,inst_12444,inst_12445,inst_12446,inst_12447,inst_12448,inst_12449,inst_12450,inst_12451,inst_12452,inst_12453,inst_12454,inst_12455,inst_12456,inst_12457,inst_12458,inst_12459,inst_12460,inst_12461,inst_12462,inst_12463,inst_12464,inst_12465,inst_12466,inst_12467__$1,inst_12472,inst_12473,inst_12474__$1,inst_12475__$1,inst_12476,inst_12477,inst_12478__$1,inst_12479__$1,inst_12480__$1,inst_12481,inst_12503,inst_12504,inst_12505,inst_12516,inst_12517,inst_12518,inst_12519,inst_12520,inst_12521,inst_12522,inst_12523,inst_12552,inst_12553,inst_12554,inst_12555,inst_12556,inst_12557,inst_12601,state_val_13313,c__6459__auto___13746))
})();
var inst_12603 = cljs.core.async.impl.dispatch.run.call(null,inst_12602);
var inst_12604 = (function (){var add_cell_BANG_ = inst_12479__$1;
var depth_compare = inst_12391__$1;
var player_stars_text = inst_12310;
var player_standing_texs = inst_12297;
var player_shadow = inst_12287;
var close_QMARK_ = inst_12395__$1;
var player_pos = inst_12478__$1;
var obstacle_types = inst_12319;
var polar_object_coords = inst_12392__$1;
var trees = inst_12326;
var player_standing_sway = inst_12300;
var game_sprites = inst_12474__$1;
var loader = inst_12268;
var player_walking_texs = inst_12305;
var shadow_tex = inst_12286;
var _ = inst_12282;
var tex = inst_12284;
var hit_sfx = inst_12390__$1;
var lobster_big = inst_12274;
var game_map = inst_12467__$1;
var star_tex = inst_12306;
var remove_cell_BANG_ = inst_12480__$1;
var tufts = inst_12333;
var game_space = inst_12475__$1;
var pickup_textures = inst_12313;
var perlin_channel = inst_12269;
var title_text = inst_12283;
var floor_objects = inst_12316;
var pickup_sfx = inst_12363;
var tilemap = inst_12281;
var make_pickup = inst_12336;
var varela = inst_12275;
var wait = inst_12278;
var player = inst_12285;
var player_stars_icon = inst_12307;
return ((function (add_cell_BANG_,depth_compare,player_stars_text,player_standing_texs,player_shadow,close_QMARK_,player_pos,obstacle_types,polar_object_coords,trees,player_standing_sway,game_sprites,loader,player_walking_texs,shadow_tex,_,tex,hit_sfx,lobster_big,game_map,star_tex,remove_cell_BANG_,tufts,game_space,pickup_textures,perlin_channel,title_text,floor_objects,pickup_sfx,tilemap,make_pickup,varela,wait,player,player_stars_icon,inst_12475,inst_12281,inst_12286,inst_12278,inst_12268,inst_12306,inst_12319,inst_12474,inst_12274,inst_12305,inst_12390,inst_12467,inst_12333,inst_12307,inst_12300,inst_12363,inst_12285,inst_12326,inst_12395,inst_12282,inst_12316,inst_12392,inst_12269,inst_12310,inst_12283,inst_12479,inst_12297,inst_12287,inst_12284,inst_12391,inst_12275,inst_12478,inst_12313,inst_12336,inst_12480,inst_12390__$1,inst_12391__$1,inst_12392__$1,inst_12395__$1,inst_12396,inst_12397,inst_12398,inst_12399,inst_12400,inst_12401,inst_12402,inst_12403,inst_12404,inst_12405,inst_12406,inst_12407,inst_12408,inst_12409,inst_12410,inst_12411,inst_12412,inst_12413,inst_12414,inst_12415,inst_12416,inst_12417,inst_12418,inst_12419,inst_12420,inst_12421,inst_12422,inst_12423,inst_12424,inst_12425,inst_12426,inst_12427,inst_12428,inst_12429,inst_12430,inst_12431,inst_12432,inst_12433,inst_12434,inst_12435,inst_12436,inst_12437,inst_12438,inst_12439,inst_12440,inst_12441,inst_12442,inst_12443,inst_12444,inst_12445,inst_12446,inst_12447,inst_12448,inst_12449,inst_12450,inst_12451,inst_12452,inst_12453,inst_12454,inst_12455,inst_12456,inst_12457,inst_12458,inst_12459,inst_12460,inst_12461,inst_12462,inst_12463,inst_12464,inst_12465,inst_12466,inst_12467__$1,inst_12472,inst_12473,inst_12474__$1,inst_12475__$1,inst_12476,inst_12477,inst_12478__$1,inst_12479__$1,inst_12480__$1,inst_12481,inst_12503,inst_12504,inst_12505,inst_12516,inst_12517,inst_12518,inst_12519,inst_12520,inst_12521,inst_12522,inst_12523,inst_12552,inst_12553,inst_12554,inst_12555,inst_12556,inst_12557,inst_12601,inst_12602,inst_12603,state_val_13313,c__6459__auto___13746){
return (function (pickup){
if(cljs.core.not.call(null,close_QMARK_.call(null,cljs.core.deref.call(null,farn.core.last_player_position),new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(pickup),farn.core.pickup_cull_distance_squared))){
return pickup;
} else {
return null;
}
});
;})(add_cell_BANG_,depth_compare,player_stars_text,player_standing_texs,player_shadow,close_QMARK_,player_pos,obstacle_types,polar_object_coords,trees,player_standing_sway,game_sprites,loader,player_walking_texs,shadow_tex,_,tex,hit_sfx,lobster_big,game_map,star_tex,remove_cell_BANG_,tufts,game_space,pickup_textures,perlin_channel,title_text,floor_objects,pickup_sfx,tilemap,make_pickup,varela,wait,player,player_stars_icon,inst_12475,inst_12281,inst_12286,inst_12278,inst_12268,inst_12306,inst_12319,inst_12474,inst_12274,inst_12305,inst_12390,inst_12467,inst_12333,inst_12307,inst_12300,inst_12363,inst_12285,inst_12326,inst_12395,inst_12282,inst_12316,inst_12392,inst_12269,inst_12310,inst_12283,inst_12479,inst_12297,inst_12287,inst_12284,inst_12391,inst_12275,inst_12478,inst_12313,inst_12336,inst_12480,inst_12390__$1,inst_12391__$1,inst_12392__$1,inst_12395__$1,inst_12396,inst_12397,inst_12398,inst_12399,inst_12400,inst_12401,inst_12402,inst_12403,inst_12404,inst_12405,inst_12406,inst_12407,inst_12408,inst_12409,inst_12410,inst_12411,inst_12412,inst_12413,inst_12414,inst_12415,inst_12416,inst_12417,inst_12418,inst_12419,inst_12420,inst_12421,inst_12422,inst_12423,inst_12424,inst_12425,inst_12426,inst_12427,inst_12428,inst_12429,inst_12430,inst_12431,inst_12432,inst_12433,inst_12434,inst_12435,inst_12436,inst_12437,inst_12438,inst_12439,inst_12440,inst_12441,inst_12442,inst_12443,inst_12444,inst_12445,inst_12446,inst_12447,inst_12448,inst_12449,inst_12450,inst_12451,inst_12452,inst_12453,inst_12454,inst_12455,inst_12456,inst_12457,inst_12458,inst_12459,inst_12460,inst_12461,inst_12462,inst_12463,inst_12464,inst_12465,inst_12466,inst_12467__$1,inst_12472,inst_12473,inst_12474__$1,inst_12475__$1,inst_12476,inst_12477,inst_12478__$1,inst_12479__$1,inst_12480__$1,inst_12481,inst_12503,inst_12504,inst_12505,inst_12516,inst_12517,inst_12518,inst_12519,inst_12520,inst_12521,inst_12522,inst_12523,inst_12552,inst_12553,inst_12554,inst_12555,inst_12556,inst_12557,inst_12601,inst_12602,inst_12603,state_val_13313,c__6459__auto___13746))
})();
var inst_12632 = cljs.core.async.chan.call(null,(1));
var inst_12633 = (function (){var add_cell_BANG_ = inst_12479__$1;
var depth_compare = inst_12391__$1;
var player_stars_text = inst_12310;
var player_standing_texs = inst_12297;
var player_shadow = inst_12287;
var close_QMARK_ = inst_12395__$1;
var player_pos = inst_12478__$1;
var obstacle_types = inst_12319;
var polar_object_coords = inst_12392__$1;
var trees = inst_12326;
var player_standing_sway = inst_12300;
var game_sprites = inst_12474__$1;
var loader = inst_12268;
var player_walking_texs = inst_12305;
var shadow_tex = inst_12286;
var _ = inst_12282;
var tex = inst_12284;
var c__6459__auto____$1 = inst_12632;
var hit_sfx = inst_12390__$1;
var lobster_big = inst_12274;
var game_map = inst_12467__$1;
var star_tex = inst_12306;
var remove_cell_BANG_ = inst_12480__$1;
var tufts = inst_12333;
var game_space = inst_12475__$1;
var pickup_textures = inst_12313;
var perlin_channel = inst_12269;
var title_text = inst_12283;
var floor_objects = inst_12316;
var cull_distance_QMARK_ = inst_12604;
var pickup_sfx = inst_12363;
var tilemap = inst_12281;
var make_pickup = inst_12336;
var varela = inst_12275;
var wait = inst_12278;
var player = inst_12285;
var player_stars_icon = inst_12307;
return ((function (add_cell_BANG_,depth_compare,player_stars_text,player_standing_texs,player_shadow,close_QMARK_,player_pos,obstacle_types,polar_object_coords,trees,player_standing_sway,game_sprites,loader,player_walking_texs,shadow_tex,_,tex,c__6459__auto____$1,hit_sfx,lobster_big,game_map,star_tex,remove_cell_BANG_,tufts,game_space,pickup_textures,perlin_channel,title_text,floor_objects,cull_distance_QMARK_,pickup_sfx,tilemap,make_pickup,varela,wait,player,player_stars_icon,inst_12475,inst_12281,inst_12286,inst_12278,inst_12268,inst_12306,inst_12319,inst_12474,inst_12274,inst_12305,inst_12390,inst_12467,inst_12333,inst_12307,inst_12300,inst_12363,inst_12285,inst_12326,inst_12395,inst_12282,inst_12316,inst_12392,inst_12269,inst_12310,inst_12283,inst_12479,inst_12297,inst_12287,inst_12284,inst_12391,inst_12275,inst_12478,inst_12313,inst_12336,inst_12480,inst_12390__$1,inst_12391__$1,inst_12392__$1,inst_12395__$1,inst_12396,inst_12397,inst_12398,inst_12399,inst_12400,inst_12401,inst_12402,inst_12403,inst_12404,inst_12405,inst_12406,inst_12407,inst_12408,inst_12409,inst_12410,inst_12411,inst_12412,inst_12413,inst_12414,inst_12415,inst_12416,inst_12417,inst_12418,inst_12419,inst_12420,inst_12421,inst_12422,inst_12423,inst_12424,inst_12425,inst_12426,inst_12427,inst_12428,inst_12429,inst_12430,inst_12431,inst_12432,inst_12433,inst_12434,inst_12435,inst_12436,inst_12437,inst_12438,inst_12439,inst_12440,inst_12441,inst_12442,inst_12443,inst_12444,inst_12445,inst_12446,inst_12447,inst_12448,inst_12449,inst_12450,inst_12451,inst_12452,inst_12453,inst_12454,inst_12455,inst_12456,inst_12457,inst_12458,inst_12459,inst_12460,inst_12461,inst_12462,inst_12463,inst_12464,inst_12465,inst_12466,inst_12467__$1,inst_12472,inst_12473,inst_12474__$1,inst_12475__$1,inst_12476,inst_12477,inst_12478__$1,inst_12479__$1,inst_12480__$1,inst_12481,inst_12503,inst_12504,inst_12505,inst_12516,inst_12517,inst_12518,inst_12519,inst_12520,inst_12521,inst_12522,inst_12523,inst_12552,inst_12553,inst_12554,inst_12555,inst_12556,inst_12557,inst_12601,inst_12602,inst_12603,inst_12604,inst_12632,state_val_13313,c__6459__auto___13746){
return (function (){
var f__6460__auto__ = (function (){var switch__6444__auto__ = ((function (add_cell_BANG_,depth_compare,player_stars_text,player_standing_texs,player_shadow,close_QMARK_,player_pos,obstacle_types,polar_object_coords,trees,player_standing_sway,game_sprites,loader,player_walking_texs,shadow_tex,_,tex,c__6459__auto____$1,hit_sfx,lobster_big,game_map,star_tex,remove_cell_BANG_,tufts,game_space,pickup_textures,perlin_channel,title_text,floor_objects,cull_distance_QMARK_,pickup_sfx,tilemap,make_pickup,varela,wait,player,player_stars_icon,inst_12475,inst_12281,inst_12286,inst_12278,inst_12268,inst_12306,inst_12319,inst_12474,inst_12274,inst_12305,inst_12390,inst_12467,inst_12333,inst_12307,inst_12300,inst_12363,inst_12285,inst_12326,inst_12395,inst_12282,inst_12316,inst_12392,inst_12269,inst_12310,inst_12283,inst_12479,inst_12297,inst_12287,inst_12284,inst_12391,inst_12275,inst_12478,inst_12313,inst_12336,inst_12480,inst_12390__$1,inst_12391__$1,inst_12392__$1,inst_12395__$1,inst_12396,inst_12397,inst_12398,inst_12399,inst_12400,inst_12401,inst_12402,inst_12403,inst_12404,inst_12405,inst_12406,inst_12407,inst_12408,inst_12409,inst_12410,inst_12411,inst_12412,inst_12413,inst_12414,inst_12415,inst_12416,inst_12417,inst_12418,inst_12419,inst_12420,inst_12421,inst_12422,inst_12423,inst_12424,inst_12425,inst_12426,inst_12427,inst_12428,inst_12429,inst_12430,inst_12431,inst_12432,inst_12433,inst_12434,inst_12435,inst_12436,inst_12437,inst_12438,inst_12439,inst_12440,inst_12441,inst_12442,inst_12443,inst_12444,inst_12445,inst_12446,inst_12447,inst_12448,inst_12449,inst_12450,inst_12451,inst_12452,inst_12453,inst_12454,inst_12455,inst_12456,inst_12457,inst_12458,inst_12459,inst_12460,inst_12461,inst_12462,inst_12463,inst_12464,inst_12465,inst_12466,inst_12467__$1,inst_12472,inst_12473,inst_12474__$1,inst_12475__$1,inst_12476,inst_12477,inst_12478__$1,inst_12479__$1,inst_12480__$1,inst_12481,inst_12503,inst_12504,inst_12505,inst_12516,inst_12517,inst_12518,inst_12519,inst_12520,inst_12521,inst_12522,inst_12523,inst_12552,inst_12553,inst_12554,inst_12555,inst_12556,inst_12557,inst_12601,inst_12602,inst_12603,inst_12604,inst_12632,state_val_13313,c__6459__auto___13746){
return (function (state_12630){
var state_val_12631 = (state_12630[(1)]);
if((state_val_12631 === (7))){
var inst_12611 = (state_12630[(7)]);
var inst_12609 = (state_12630[(2)]);
var inst_12610 = cljs.core.deref.call(null,farn.core.pickup_store);
var inst_12611__$1 = cljs.core.some.call(null,cull_distance_QMARK_,inst_12610);
var state_12630__$1 = (function (){var statearr_13608 = state_12630;
(statearr_13608[(8)] = inst_12609);

(statearr_13608[(7)] = inst_12611__$1);

return statearr_13608;
})();
if(cljs.core.truth_(inst_12611__$1)){
var statearr_13609_13956 = state_12630__$1;
(statearr_13609_13956[(1)] = (8));

} else {
var statearr_13610_13957 = state_12630__$1;
(statearr_13610_13957[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12631 === (1))){
var state_12630__$1 = state_12630;
var statearr_13611_13958 = state_12630__$1;
(statearr_13611_13958[(2)] = null);

(statearr_13611_13958[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12631 === (4))){
var inst_12607 = cljs.core.async.timeout.call(null,(250));
var state_12630__$1 = state_12630;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12630__$1,(7),inst_12607);
} else {
if((state_val_12631 === (6))){
var inst_12626 = (state_12630[(2)]);
var state_12630__$1 = state_12630;
var statearr_13612_13959 = state_12630__$1;
(statearr_13612_13959[(2)] = inst_12626);

(statearr_13612_13959[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12631 === (3))){
var inst_12628 = (state_12630[(2)]);
var state_12630__$1 = state_12630;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12630__$1,inst_12628);
} else {
if((state_val_12631 === (2))){
var state_12630__$1 = state_12630;
var statearr_13613_13960 = state_12630__$1;
(statearr_13613_13960[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12631 === (9))){
var state_12630__$1 = state_12630;
var statearr_13615_13961 = state_12630__$1;
(statearr_13615_13961[(2)] = null);

(statearr_13615_13961[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12631 === (5))){
var state_12630__$1 = state_12630;
var statearr_13616_13962 = state_12630__$1;
(statearr_13616_13962[(2)] = null);

(statearr_13616_13962[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12631 === (10))){
var inst_12622 = (state_12630[(2)]);
var state_12630__$1 = (function (){var statearr_13617 = state_12630;
(statearr_13617[(9)] = inst_12622);

return statearr_13617;
})();
var statearr_13618_13963 = state_12630__$1;
(statearr_13618_13963[(2)] = null);

(statearr_13618_13963[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12631 === (8))){
var inst_12611 = (state_12630[(7)]);
var inst_12613 = new cljs.core.Keyword(null,"sprite","sprite",172516848).cljs$core$IFn$_invoke$arity$1(inst_12611);
var inst_12614 = farn.core.main_stage.removeChild(inst_12613);
var inst_12615 = new cljs.core.Keyword(null,"shadow","shadow",873231803).cljs$core$IFn$_invoke$arity$1(inst_12611);
var inst_12616 = farn.core.main_stage.removeChild(inst_12615);
var inst_12617 = [cljs.core.str(inst_12611)].join('');
var inst_12618 = farn.utils.log.call(null,"REMOVING",inst_12617);
var inst_12619 = cljs.core.swap_BANG_.call(null,farn.core.pickup_store,cljs.core.disj,inst_12611);
var state_12630__$1 = (function (){var statearr_13619 = state_12630;
(statearr_13619[(10)] = inst_12614);

(statearr_13619[(11)] = inst_12618);

(statearr_13619[(12)] = inst_12616);

return statearr_13619;
})();
var statearr_13620_13964 = state_12630__$1;
(statearr_13620_13964[(2)] = inst_12619);

(statearr_13620_13964[(1)] = (10));


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
});})(add_cell_BANG_,depth_compare,player_stars_text,player_standing_texs,player_shadow,close_QMARK_,player_pos,obstacle_types,polar_object_coords,trees,player_standing_sway,game_sprites,loader,player_walking_texs,shadow_tex,_,tex,c__6459__auto____$1,hit_sfx,lobster_big,game_map,star_tex,remove_cell_BANG_,tufts,game_space,pickup_textures,perlin_channel,title_text,floor_objects,cull_distance_QMARK_,pickup_sfx,tilemap,make_pickup,varela,wait,player,player_stars_icon,inst_12475,inst_12281,inst_12286,inst_12278,inst_12268,inst_12306,inst_12319,inst_12474,inst_12274,inst_12305,inst_12390,inst_12467,inst_12333,inst_12307,inst_12300,inst_12363,inst_12285,inst_12326,inst_12395,inst_12282,inst_12316,inst_12392,inst_12269,inst_12310,inst_12283,inst_12479,inst_12297,inst_12287,inst_12284,inst_12391,inst_12275,inst_12478,inst_12313,inst_12336,inst_12480,inst_12390__$1,inst_12391__$1,inst_12392__$1,inst_12395__$1,inst_12396,inst_12397,inst_12398,inst_12399,inst_12400,inst_12401,inst_12402,inst_12403,inst_12404,inst_12405,inst_12406,inst_12407,inst_12408,inst_12409,inst_12410,inst_12411,inst_12412,inst_12413,inst_12414,inst_12415,inst_12416,inst_12417,inst_12418,inst_12419,inst_12420,inst_12421,inst_12422,inst_12423,inst_12424,inst_12425,inst_12426,inst_12427,inst_12428,inst_12429,inst_12430,inst_12431,inst_12432,inst_12433,inst_12434,inst_12435,inst_12436,inst_12437,inst_12438,inst_12439,inst_12440,inst_12441,inst_12442,inst_12443,inst_12444,inst_12445,inst_12446,inst_12447,inst_12448,inst_12449,inst_12450,inst_12451,inst_12452,inst_12453,inst_12454,inst_12455,inst_12456,inst_12457,inst_12458,inst_12459,inst_12460,inst_12461,inst_12462,inst_12463,inst_12464,inst_12465,inst_12466,inst_12467__$1,inst_12472,inst_12473,inst_12474__$1,inst_12475__$1,inst_12476,inst_12477,inst_12478__$1,inst_12479__$1,inst_12480__$1,inst_12481,inst_12503,inst_12504,inst_12505,inst_12516,inst_12517,inst_12518,inst_12519,inst_12520,inst_12521,inst_12522,inst_12523,inst_12552,inst_12553,inst_12554,inst_12555,inst_12556,inst_12557,inst_12601,inst_12602,inst_12603,inst_12604,inst_12632,state_val_13313,c__6459__auto___13746))
;
return ((function (switch__6444__auto__,add_cell_BANG_,depth_compare,player_stars_text,player_standing_texs,player_shadow,close_QMARK_,player_pos,obstacle_types,polar_object_coords,trees,player_standing_sway,game_sprites,loader,player_walking_texs,shadow_tex,_,tex,c__6459__auto____$1,hit_sfx,lobster_big,game_map,star_tex,remove_cell_BANG_,tufts,game_space,pickup_textures,perlin_channel,title_text,floor_objects,cull_distance_QMARK_,pickup_sfx,tilemap,make_pickup,varela,wait,player,player_stars_icon,inst_12475,inst_12281,inst_12286,inst_12278,inst_12268,inst_12306,inst_12319,inst_12474,inst_12274,inst_12305,inst_12390,inst_12467,inst_12333,inst_12307,inst_12300,inst_12363,inst_12285,inst_12326,inst_12395,inst_12282,inst_12316,inst_12392,inst_12269,inst_12310,inst_12283,inst_12479,inst_12297,inst_12287,inst_12284,inst_12391,inst_12275,inst_12478,inst_12313,inst_12336,inst_12480,inst_12390__$1,inst_12391__$1,inst_12392__$1,inst_12395__$1,inst_12396,inst_12397,inst_12398,inst_12399,inst_12400,inst_12401,inst_12402,inst_12403,inst_12404,inst_12405,inst_12406,inst_12407,inst_12408,inst_12409,inst_12410,inst_12411,inst_12412,inst_12413,inst_12414,inst_12415,inst_12416,inst_12417,inst_12418,inst_12419,inst_12420,inst_12421,inst_12422,inst_12423,inst_12424,inst_12425,inst_12426,inst_12427,inst_12428,inst_12429,inst_12430,inst_12431,inst_12432,inst_12433,inst_12434,inst_12435,inst_12436,inst_12437,inst_12438,inst_12439,inst_12440,inst_12441,inst_12442,inst_12443,inst_12444,inst_12445,inst_12446,inst_12447,inst_12448,inst_12449,inst_12450,inst_12451,inst_12452,inst_12453,inst_12454,inst_12455,inst_12456,inst_12457,inst_12458,inst_12459,inst_12460,inst_12461,inst_12462,inst_12463,inst_12464,inst_12465,inst_12466,inst_12467__$1,inst_12472,inst_12473,inst_12474__$1,inst_12475__$1,inst_12476,inst_12477,inst_12478__$1,inst_12479__$1,inst_12480__$1,inst_12481,inst_12503,inst_12504,inst_12505,inst_12516,inst_12517,inst_12518,inst_12519,inst_12520,inst_12521,inst_12522,inst_12523,inst_12552,inst_12553,inst_12554,inst_12555,inst_12556,inst_12557,inst_12601,inst_12602,inst_12603,inst_12604,inst_12632,state_val_13313,c__6459__auto___13746){
return (function() {
var state_machine__6445__auto__ = null;
var state_machine__6445__auto____0 = (function (){
var statearr_13624 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13624[(0)] = state_machine__6445__auto__);

(statearr_13624[(1)] = (1));

return statearr_13624;
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
}catch (e13625){if((e13625 instanceof Object)){
var ex__6448__auto__ = e13625;
var statearr_13626_13965 = state_12630;
(statearr_13626_13965[(5)] = ex__6448__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12630);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13625;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13966 = state_12630;
state_12630 = G__13966;
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
;})(switch__6444__auto__,add_cell_BANG_,depth_compare,player_stars_text,player_standing_texs,player_shadow,close_QMARK_,player_pos,obstacle_types,polar_object_coords,trees,player_standing_sway,game_sprites,loader,player_walking_texs,shadow_tex,_,tex,c__6459__auto____$1,hit_sfx,lobster_big,game_map,star_tex,remove_cell_BANG_,tufts,game_space,pickup_textures,perlin_channel,title_text,floor_objects,cull_distance_QMARK_,pickup_sfx,tilemap,make_pickup,varela,wait,player,player_stars_icon,inst_12475,inst_12281,inst_12286,inst_12278,inst_12268,inst_12306,inst_12319,inst_12474,inst_12274,inst_12305,inst_12390,inst_12467,inst_12333,inst_12307,inst_12300,inst_12363,inst_12285,inst_12326,inst_12395,inst_12282,inst_12316,inst_12392,inst_12269,inst_12310,inst_12283,inst_12479,inst_12297,inst_12287,inst_12284,inst_12391,inst_12275,inst_12478,inst_12313,inst_12336,inst_12480,inst_12390__$1,inst_12391__$1,inst_12392__$1,inst_12395__$1,inst_12396,inst_12397,inst_12398,inst_12399,inst_12400,inst_12401,inst_12402,inst_12403,inst_12404,inst_12405,inst_12406,inst_12407,inst_12408,inst_12409,inst_12410,inst_12411,inst_12412,inst_12413,inst_12414,inst_12415,inst_12416,inst_12417,inst_12418,inst_12419,inst_12420,inst_12421,inst_12422,inst_12423,inst_12424,inst_12425,inst_12426,inst_12427,inst_12428,inst_12429,inst_12430,inst_12431,inst_12432,inst_12433,inst_12434,inst_12435,inst_12436,inst_12437,inst_12438,inst_12439,inst_12440,inst_12441,inst_12442,inst_12443,inst_12444,inst_12445,inst_12446,inst_12447,inst_12448,inst_12449,inst_12450,inst_12451,inst_12452,inst_12453,inst_12454,inst_12455,inst_12456,inst_12457,inst_12458,inst_12459,inst_12460,inst_12461,inst_12462,inst_12463,inst_12464,inst_12465,inst_12466,inst_12467__$1,inst_12472,inst_12473,inst_12474__$1,inst_12475__$1,inst_12476,inst_12477,inst_12478__$1,inst_12479__$1,inst_12480__$1,inst_12481,inst_12503,inst_12504,inst_12505,inst_12516,inst_12517,inst_12518,inst_12519,inst_12520,inst_12521,inst_12522,inst_12523,inst_12552,inst_12553,inst_12554,inst_12555,inst_12556,inst_12557,inst_12601,inst_12602,inst_12603,inst_12604,inst_12632,state_val_13313,c__6459__auto___13746))
})();
var state__6461__auto__ = (function (){var statearr_13627 = f__6460__auto__.call(null);
(statearr_13627[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6459__auto____$1);

return statearr_13627;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6461__auto__);
});
;})(add_cell_BANG_,depth_compare,player_stars_text,player_standing_texs,player_shadow,close_QMARK_,player_pos,obstacle_types,polar_object_coords,trees,player_standing_sway,game_sprites,loader,player_walking_texs,shadow_tex,_,tex,c__6459__auto____$1,hit_sfx,lobster_big,game_map,star_tex,remove_cell_BANG_,tufts,game_space,pickup_textures,perlin_channel,title_text,floor_objects,cull_distance_QMARK_,pickup_sfx,tilemap,make_pickup,varela,wait,player,player_stars_icon,inst_12475,inst_12281,inst_12286,inst_12278,inst_12268,inst_12306,inst_12319,inst_12474,inst_12274,inst_12305,inst_12390,inst_12467,inst_12333,inst_12307,inst_12300,inst_12363,inst_12285,inst_12326,inst_12395,inst_12282,inst_12316,inst_12392,inst_12269,inst_12310,inst_12283,inst_12479,inst_12297,inst_12287,inst_12284,inst_12391,inst_12275,inst_12478,inst_12313,inst_12336,inst_12480,inst_12390__$1,inst_12391__$1,inst_12392__$1,inst_12395__$1,inst_12396,inst_12397,inst_12398,inst_12399,inst_12400,inst_12401,inst_12402,inst_12403,inst_12404,inst_12405,inst_12406,inst_12407,inst_12408,inst_12409,inst_12410,inst_12411,inst_12412,inst_12413,inst_12414,inst_12415,inst_12416,inst_12417,inst_12418,inst_12419,inst_12420,inst_12421,inst_12422,inst_12423,inst_12424,inst_12425,inst_12426,inst_12427,inst_12428,inst_12429,inst_12430,inst_12431,inst_12432,inst_12433,inst_12434,inst_12435,inst_12436,inst_12437,inst_12438,inst_12439,inst_12440,inst_12441,inst_12442,inst_12443,inst_12444,inst_12445,inst_12446,inst_12447,inst_12448,inst_12449,inst_12450,inst_12451,inst_12452,inst_12453,inst_12454,inst_12455,inst_12456,inst_12457,inst_12458,inst_12459,inst_12460,inst_12461,inst_12462,inst_12463,inst_12464,inst_12465,inst_12466,inst_12467__$1,inst_12472,inst_12473,inst_12474__$1,inst_12475__$1,inst_12476,inst_12477,inst_12478__$1,inst_12479__$1,inst_12480__$1,inst_12481,inst_12503,inst_12504,inst_12505,inst_12516,inst_12517,inst_12518,inst_12519,inst_12520,inst_12521,inst_12522,inst_12523,inst_12552,inst_12553,inst_12554,inst_12555,inst_12556,inst_12557,inst_12601,inst_12602,inst_12603,inst_12604,inst_12632,state_val_13313,c__6459__auto___13746))
})();
var inst_12634 = cljs.core.async.impl.dispatch.run.call(null,inst_12633);
var inst_12635 = cljs.core.async.timeout.call(null,(1000));
var state_13312__$1 = (function (){var statearr_13628 = state_13312;
(statearr_13628[(8)] = inst_12475__$1);

(statearr_13628[(159)] = inst_12556);

(statearr_13628[(41)] = inst_12474__$1);

(statearr_13628[(46)] = inst_12390__$1);

(statearr_13628[(47)] = inst_12467__$1);

(statearr_13628[(60)] = inst_12395__$1);

(statearr_13628[(160)] = inst_12518);

(statearr_13628[(161)] = inst_12520);

(statearr_13628[(22)] = inst_12392__$1);

(statearr_13628[(162)] = inst_12554);

(statearr_13628[(74)] = inst_12479__$1);

(statearr_13628[(80)] = inst_12391__$1);

(statearr_13628[(163)] = inst_12603);

(statearr_13628[(164)] = inst_12557);

(statearr_13628[(165)] = inst_12634);

(statearr_13628[(166)] = inst_12505);

(statearr_13628[(167)] = inst_12519);

(statearr_13628[(168)] = inst_12522);

(statearr_13628[(83)] = inst_12478__$1);

(statearr_13628[(169)] = inst_12521);

(statearr_13628[(170)] = inst_12481);

(statearr_13628[(171)] = inst_12523);

(statearr_13628[(87)] = inst_12480__$1);

return statearr_13628;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13312__$1,(17),inst_12635);
} else {
if((state_val_13313 === (2))){
var inst_12272 = (state_13312[(2)]);
var inst_12273 = farn.utils.log.call(null,"pulled");
var inst_12274 = farn.font.make_tiled_font.call(null,"Lobster",(400),(48));
var inst_12275 = farn.font.make_tiled_font.call(null,"Varela Round",(400),(24));
var inst_12276 = cljs.core.async.timeout.call(null,(1000));
var state_13312__$1 = (function (){var statearr_13629 = state_13312;
(statearr_13629[(42)] = inst_12274);

(statearr_13629[(172)] = inst_12273);

(statearr_13629[(173)] = inst_12272);

(statearr_13629[(82)] = inst_12275);

return statearr_13629;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13312__$1,(3),inst_12276);
} else {
if((state_val_13313 === (66))){
var inst_12765 = (state_13312[(44)]);
var inst_12995 = (state_13312[(2)]);
var inst_12996 = cljs.core.reset_BANG_.call(null,farn.core.player_stars,(0));
var inst_12997 = (inst_12765 / farn.core.player_max_speed);
var inst_12998 = ((30) * inst_12997);
var state_13312__$1 = (function (){var statearr_13633 = state_13312;
(statearr_13633[(174)] = inst_12995);

(statearr_13633[(175)] = inst_12996);

return statearr_13633;
})();
var statearr_13634_13967 = state_13312__$1;
(statearr_13634_13967[(2)] = inst_12998);

(statearr_13634_13967[(1)] = (63));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13313 === (142))){
var inst_12766 = (state_13312[(61)]);
var state_13312__$1 = state_13312;
var statearr_13635_13968 = state_13312__$1;
(statearr_13635_13968[(2)] = inst_12766);

(statearr_13635_13968[(1)] = (143));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13313 === (107))){
var inst_13159 = (state_13312[(121)]);
var inst_13161 = (state_13312[(122)]);
var inst_12781 = (state_13312[(20)]);
var inst_12763 = (state_13312[(48)]);
var inst_13160 = (state_13312[(123)]);
var inst_12791 = (state_13312[(21)]);
var inst_12392 = (state_13312[(22)]);
var inst_12782 = (state_13312[(23)]);
var inst_13158 = (state_13312[(124)]);
var inst_12788 = (state_13312[(24)]);
var inst_13166 = cljs.core._nth.call(null,inst_13159,inst_13161);
var inst_13168 = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(inst_13166);
var inst_13169 = new cljs.core.Keyword(null,"sprite","sprite",172516848).cljs$core$IFn$_invoke$arity$1(inst_13166);
var inst_13170 = inst_12392.call(null,inst_13168,inst_13169,inst_12781,inst_12782,inst_12788,inst_12791);
var inst_13171 = cljs.core.nth.call(null,inst_13170,(0),null);
var inst_13172 = cljs.core.nth.call(null,inst_13170,(1),null);
var inst_13173 = new cljs.core.Keyword(null,"sprite","sprite",172516848).cljs$core$IFn$_invoke$arity$1(inst_13166);
var inst_13174 = farn.sprite.set_pos_BANG_.call(null,inst_13173,inst_13171,inst_13172);
var inst_13175 = new cljs.core.Keyword(null,"shadow","shadow",873231803).cljs$core$IFn$_invoke$arity$1(inst_13166);
var inst_13176 = farn.sprite.set_pos_BANG_.call(null,inst_13175,inst_13171,inst_13172);
var inst_13177 = new cljs.core.Keyword(null,"sprite","sprite",172516848).cljs$core$IFn$_invoke$arity$1(inst_13166);
var inst_13178 = (inst_12763 * farn.core.pickup_bounce_speed);
var inst_13179 = Math.sin.call(null,inst_13178);
var inst_13180 = ((1) + inst_13179);
var inst_13181 = (farn.core.pickup_bounce_height * inst_13180);
var inst_13182 = (farn.core.pickup_vertical_offset + inst_13181);
var inst_13183 = farn.sprite.set_pivot_BANG_.call(null,inst_13177,(0),inst_13182);
var inst_13184 = (inst_13161 + (1));
var tmp13630 = inst_13159;
var tmp13631 = inst_13160;
var tmp13632 = inst_13158;
var inst_13158__$1 = tmp13632;
var inst_13159__$1 = tmp13630;
var inst_13160__$1 = tmp13631;
var inst_13161__$1 = inst_13184;
var state_13312__$1 = (function (){var statearr_13636 = state_13312;
(statearr_13636[(121)] = inst_13159__$1);

(statearr_13636[(176)] = inst_13176);

(statearr_13636[(122)] = inst_13161__$1);

(statearr_13636[(123)] = inst_13160__$1);

(statearr_13636[(177)] = inst_13174);

(statearr_13636[(178)] = inst_13183);

(statearr_13636[(124)] = inst_13158__$1);

return statearr_13636;
})();
var statearr_13637_13969 = state_13312__$1;
(statearr_13637_13969[(2)] = null);

(statearr_13637_13969[(1)] = (105));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13313 === (23))){
var inst_12819 = (state_13312[(179)]);
var inst_12816 = (state_13312[(131)]);
var inst_12819__$1 = cljs.core.nth.call(null,inst_12816,(0),null);
var inst_12820 = cljs.core.nthnext.call(null,inst_12816,(1));
var inst_12821 = (inst_12819__$1 == null);
var state_13312__$1 = (function (){var statearr_13638 = state_13312;
(statearr_13638[(180)] = inst_12820);

(statearr_13638[(179)] = inst_12819__$1);

return statearr_13638;
})();
if(cljs.core.truth_(inst_12821)){
var statearr_13639_13970 = state_13312__$1;
(statearr_13639_13970[(1)] = (25));

} else {
var statearr_13640_13971 = state_13312__$1;
(statearr_13640_13971[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13313 === (47))){
var inst_12956 = (state_13312[(2)]);
var state_13312__$1 = state_13312;
var statearr_13641_13972 = state_13312__$1;
(statearr_13641_13972[(2)] = inst_12956);

(statearr_13641_13972[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13313 === (35))){
var inst_12285 = (state_13312[(58)]);
var inst_12874 = (state_13312[(132)]);
var inst_12867 = (state_13312[(118)]);
var inst_12869 = (state_13312[(119)]);
var inst_12874__$1 = cljs.core._nth.call(null,inst_12867,inst_12869);
var inst_12875 = new cljs.core.Keyword(null,"sprite","sprite",172516848).cljs$core$IFn$_invoke$arity$1(inst_12874__$1);
var inst_12876 = farn.sprite.overlap_QMARK_.call(null,inst_12285,inst_12875);
var state_13312__$1 = (function (){var statearr_13642 = state_13312;
(statearr_13642[(132)] = inst_12874__$1);

return statearr_13642;
})();
if(inst_12876){
var statearr_13643_13973 = state_13312__$1;
(statearr_13643_13973[(1)] = (38));

} else {
var statearr_13644_13974 = state_13312__$1;
(statearr_13644_13974[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13313 === (127))){
var inst_12781 = (state_13312[(20)]);
var inst_12793 = (state_13312[(51)]);
var inst_12792 = (state_13312[(57)]);
var inst_12782 = (state_13312[(23)]);
var inst_13267 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_13268 = (inst_12781 - inst_12792);
var inst_13269 = (inst_12782 - inst_12793);
var inst_13270 = [inst_13268,inst_13269];
var inst_13271 = (new cljs.core.PersistentVector(null,2,(5),inst_13267,inst_13270,null));
var state_13312__$1 = state_13312;
var statearr_13645_13975 = state_13312__$1;
(statearr_13645_13975[(2)] = inst_13271);

(statearr_13645_13975[(1)] = (128));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13313 === (82))){
var inst_13044 = (state_13312[(25)]);
var inst_13046 = cljs.core.chunked_seq_QMARK_.call(null,inst_13044);
var state_13312__$1 = state_13312;
if(inst_13046){
var statearr_13646_13976 = state_13312__$1;
(statearr_13646_13976[(1)] = (85));

} else {
var statearr_13647_13977 = state_13312__$1;
(statearr_13647_13977[(1)] = (86));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13313 === (76))){
var inst_13149 = (state_13312[(2)]);
var state_13312__$1 = state_13312;
var statearr_13648_13978 = state_13312__$1;
(statearr_13648_13978[(2)] = inst_13149);

(statearr_13648_13978[(1)] = (73));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13313 === (97))){
var inst_13112 = (state_13312[(88)]);
var inst_13092 = (state_13312[(92)]);
var inst_13112__$1 = cljs.core.seq.call(null,inst_13092);
var state_13312__$1 = (function (){var statearr_13649 = state_13312;
(statearr_13649[(88)] = inst_13112__$1);

return statearr_13649;
})();
if(inst_13112__$1){
var statearr_13650_13979 = state_13312__$1;
(statearr_13650_13979[(1)] = (99));

} else {
var statearr_13651_13980 = state_13312__$1;
(statearr_13651_13980[(1)] = (100));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13313 === (19))){
var inst_13310 = (state_13312[(2)]);
var state_13312__$1 = state_13312;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13312__$1,inst_13310);
} else {
if((state_val_13313 === (57))){
var inst_12935 = (state_13312[(2)]);
var state_13312__$1 = state_13312;
var statearr_13652_13981 = state_13312__$1;
(statearr_13652_13981[(2)] = inst_12935);

(statearr_13652_13981[(1)] = (56));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13313 === (68))){
var inst_12992 = (state_13312[(2)]);
var state_13312__$1 = state_13312;
var statearr_13653_13982 = state_13312__$1;
(statearr_13653_13982[(2)] = inst_12992);

(statearr_13653_13982[(1)] = (66));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13313 === (11))){
var inst_12372 = (state_13312[(141)]);
var inst_12375 = (state_13312[(126)]);
var inst_12375__$1 = cljs.core.nth.call(null,inst_12372,(0),null);
var inst_12376 = cljs.core.nthnext.call(null,inst_12372,(1));
var inst_12377 = (inst_12375__$1 == null);
var inst_12378 = cljs.core.not.call(null,inst_12377);
var state_13312__$1 = (function (){var statearr_13654 = state_13312;
(statearr_13654[(181)] = inst_12376);

(statearr_13654[(126)] = inst_12375__$1);

return statearr_13654;
})();
if(inst_12378){
var statearr_13655_13983 = state_13312__$1;
(statearr_13655_13983[(1)] = (13));

} else {
var statearr_13656_13984 = state_13312__$1;
(statearr_13656_13984[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13313 === (115))){
var inst_13217 = (state_13312[(2)]);
var state_13312__$1 = state_13312;
var statearr_13657_13985 = state_13312__$1;
(statearr_13657_13985[(2)] = inst_13217);

(statearr_13657_13985[(1)] = (112));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13313 === (9))){
var inst_12361 = (state_13312[(2)]);
var state_13312__$1 = state_13312;
var statearr_13658_13986 = state_13312__$1;
(statearr_13658_13986[(2)] = inst_12361);

(statearr_13658_13986[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13313 === (5))){
var inst_12348 = (state_13312[(18)]);
var inst_12345 = (state_13312[(103)]);
var inst_12348__$1 = cljs.core.nth.call(null,inst_12345,(0),null);
var inst_12349 = cljs.core.nthnext.call(null,inst_12345,(1));
var inst_12350 = (inst_12348__$1 == null);
var inst_12351 = cljs.core.not.call(null,inst_12350);
var state_13312__$1 = (function (){var statearr_13659 = state_13312;
(statearr_13659[(18)] = inst_12348__$1);

(statearr_13659[(182)] = inst_12349);

return statearr_13659;
})();
if(inst_12351){
var statearr_13660_13987 = state_13312__$1;
(statearr_13660_13987[(1)] = (7));

} else {
var statearr_13661_13988 = state_13312__$1;
(statearr_13661_13988[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13313 === (112))){
var inst_13220 = (state_13312[(2)]);
var state_13312__$1 = state_13312;
var statearr_13662_13989 = state_13312__$1;
(statearr_13662_13989[(2)] = inst_13220);

(statearr_13662_13989[(1)] = (109));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13313 === (83))){
var state_13312__$1 = state_13312;
var statearr_13663_13990 = state_13312__$1;
(statearr_13663_13990[(2)] = null);

(statearr_13663_13990[(1)] = (84));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13313 === (138))){
var inst_12766 = (state_13312[(61)]);
var inst_13296 = (inst_12766 + farn.core.player_turn_speed);
var state_13312__$1 = state_13312;
var statearr_13664_13991 = state_13312__$1;
(statearr_13664_13991[(2)] = inst_13296);

(statearr_13664_13991[(1)] = (140));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13313 === (14))){
var inst_12371 = (state_13312[(144)]);
var state_13312__$1 = state_13312;
var statearr_13665_13992 = state_13312__$1;
(statearr_13665_13992[(2)] = inst_12371);

(statearr_13665_13992[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13313 === (45))){
var inst_12909 = (state_13312[(116)]);
var inst_12911 = cljs.core.chunked_seq_QMARK_.call(null,inst_12909);
var state_13312__$1 = state_13312;
if(inst_12911){
var statearr_13669_13993 = state_13312__$1;
(statearr_13669_13993[(1)] = (48));

} else {
var statearr_13670_13994 = state_13312__$1;
(statearr_13670_13994[(1)] = (49));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13313 === (53))){
var inst_12909 = (state_13312[(116)]);
var inst_12949 = (state_13312[(2)]);
var inst_12950 = cljs.core.next.call(null,inst_12909);
var inst_12866 = inst_12950;
var inst_12867 = null;
var inst_12868 = (0);
var inst_12869 = (0);
var state_13312__$1 = (function (){var statearr_13671 = state_13312;
(statearr_13671[(117)] = inst_12868);

(statearr_13671[(118)] = inst_12867);

(statearr_13671[(183)] = inst_12949);

(statearr_13671[(119)] = inst_12869);

(statearr_13671[(120)] = inst_12866);

return statearr_13671;
})();
var statearr_13672_13995 = state_13312__$1;
(statearr_13672_13995[(2)] = null);

(statearr_13672_13995[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13313 === (78))){
var inst_13009 = (state_13312[(110)]);
var inst_13011 = (state_13312[(27)]);
var inst_13012 = (state_13312[(9)]);
var inst_13010 = (state_13312[(10)]);
var inst_13072 = (state_13312[(2)]);
var inst_13073 = (inst_13012 + (1));
var tmp13666 = inst_13009;
var tmp13667 = inst_13011;
var tmp13668 = inst_13010;
var inst_13009__$1 = tmp13666;
var inst_13010__$1 = tmp13668;
var inst_13011__$1 = tmp13667;
var inst_13012__$1 = inst_13073;
var state_13312__$1 = (function (){var statearr_13673 = state_13312;
(statearr_13673[(110)] = inst_13009__$1);

(statearr_13673[(27)] = inst_13011__$1);

(statearr_13673[(9)] = inst_13012__$1);

(statearr_13673[(10)] = inst_13010__$1);

(statearr_13673[(184)] = inst_13072);

return statearr_13673;
})();
var statearr_13674_13996 = state_13312__$1;
(statearr_13674_13996[(2)] = null);

(statearr_13674_13996[(1)] = (72));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13313 === (132))){
var inst_13280 = farn.events.is_pressed_QMARK_.call(null,new cljs.core.Keyword(null,"up","up",-269712113));
var state_13312__$1 = state_13312;
if(cljs.core.truth_(inst_13280)){
var statearr_13675_13997 = state_13312__$1;
(statearr_13675_13997[(1)] = (135));

} else {
var statearr_13676_13998 = state_13312__$1;
(statearr_13676_13998[(1)] = (136));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13313 === (26))){
var inst_12820 = (state_13312[(180)]);
var inst_12809 = (state_13312[(75)]);
var inst_12819 = (state_13312[(179)]);
var inst_12815 = (state_13312[(130)]);
var inst_12824 = inst_12809.call(null,inst_12819,inst_12815);
var inst_12815__$1 = inst_12824;
var inst_12816 = inst_12820;
var state_13312__$1 = (function (){var statearr_13677 = state_13312;
(statearr_13677[(130)] = inst_12815__$1);

(statearr_13677[(131)] = inst_12816);

return statearr_13677;
})();
var statearr_13678_13999 = state_13312__$1;
(statearr_13678_13999[(2)] = null);

(statearr_13678_13999[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13313 === (123))){
var inst_13250 = cljs.core.reset_BANG_.call(null,farn.core.player_animation,new cljs.core.Keyword(null,"standing","standing",-1248340762));
var state_13312__$1 = state_13312;
var statearr_13679_14000 = state_13312__$1;
(statearr_13679_14000[(2)] = inst_13250);

(statearr_13679_14000[(1)] = (124));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13313 === (140))){
var inst_13293 = (state_13312[(136)]);
var inst_13001 = (state_13312[(16)]);
var inst_12859 = (state_13312[(112)]);
var inst_12794 = (state_13312[(73)]);
var inst_13273 = (state_13312[(17)]);
var inst_13258 = (state_13312[(149)]);
var inst_13305 = (state_13312[(2)]);
var inst_13306 = (inst_13001 - (1));
var inst_13307 = (((0) > inst_13306) ? (0) : inst_13306);
var inst_12763 = inst_13258;
var inst_12764 = inst_13273;
var inst_12765 = inst_13293;
var inst_12766 = inst_13305;
var inst_12767 = inst_12859;
var inst_12768 = inst_12794;
var inst_12769 = inst_13307;
var state_13312__$1 = (function (){var statearr_13680 = state_13312;
(statearr_13680[(39)] = inst_12768);

(statearr_13680[(44)] = inst_12765);

(statearr_13680[(48)] = inst_12763);

(statearr_13680[(54)] = inst_12764);

(statearr_13680[(61)] = inst_12766);

(statearr_13680[(7)] = inst_12769);

(statearr_13680[(81)] = inst_12767);

return statearr_13680;
})();
var statearr_13681_14001 = state_13312__$1;
(statearr_13681_14001[(2)] = null);

(statearr_13681_14001[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13313 === (16))){
var inst_12376 = (state_13312[(181)]);
var inst_12371 = (state_13312[(144)]);
var inst_12383 = (state_13312[(2)]);
var inst_12384 = cljs.core.conj.call(null,inst_12371,inst_12383);
var inst_12371__$1 = inst_12384;
var inst_12372 = inst_12376;
var state_13312__$1 = (function (){var statearr_13682 = state_13312;
(statearr_13682[(141)] = inst_12372);

(statearr_13682[(144)] = inst_12371__$1);

return statearr_13682;
})();
var statearr_13683_14002 = state_13312__$1;
(statearr_13683_14002[(2)] = null);

(statearr_13683_14002[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13313 === (133))){
var state_13312__$1 = state_13312;
var statearr_13684_14003 = state_13312__$1;
(statearr_13684_14003[(2)] = null);

(statearr_13684_14003[(1)] = (134));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13313 === (81))){
var inst_13070 = (state_13312[(2)]);
var state_13312__$1 = state_13312;
var statearr_13688_14004 = state_13312__$1;
(statearr_13688_14004[(2)] = inst_13070);

(statearr_13688_14004[(1)] = (78));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13313 === (120))){
var inst_13242 = farn.events.is_pressed_QMARK_.call(null,new cljs.core.Keyword(null,"up","up",-269712113));
var state_13312__$1 = state_13312;
var statearr_13689_14005 = state_13312__$1;
(statearr_13689_14005[(2)] = inst_13242);

(statearr_13689_14005[(1)] = (121));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13313 === (79))){
var inst_13025 = (state_13312[(11)]);
var inst_13026 = (state_13312[(12)]);
var inst_12781 = (state_13312[(20)]);
var inst_13027 = (state_13312[(13)]);
var inst_12791 = (state_13312[(21)]);
var inst_12392 = (state_13312[(22)]);
var inst_12782 = (state_13312[(23)]);
var inst_13024 = (state_13312[(14)]);
var inst_12788 = (state_13312[(24)]);
var inst_13032 = cljs.core._nth.call(null,inst_13025,inst_13027);
var inst_13034 = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(inst_13032);
var inst_13035 = new cljs.core.Keyword(null,"sprite","sprite",172516848).cljs$core$IFn$_invoke$arity$1(inst_13032);
var inst_13036 = inst_12392.call(null,inst_13034,inst_13035,inst_12781,inst_12782,inst_12788,inst_12791);
var inst_13037 = cljs.core.nth.call(null,inst_13036,(0),null);
var inst_13038 = cljs.core.nth.call(null,inst_13036,(1),null);
var inst_13039 = new cljs.core.Keyword(null,"sprite","sprite",172516848).cljs$core$IFn$_invoke$arity$1(inst_13032);
var inst_13040 = farn.sprite.set_pos_BANG_.call(null,inst_13039,inst_13037,inst_13038);
var inst_13041 = (inst_13027 + (1));
var tmp13685 = inst_13025;
var tmp13686 = inst_13026;
var tmp13687 = inst_13024;
var inst_13024__$1 = tmp13687;
var inst_13025__$1 = tmp13685;
var inst_13026__$1 = tmp13686;
var inst_13027__$1 = inst_13041;
var state_13312__$1 = (function (){var statearr_13690 = state_13312;
(statearr_13690[(11)] = inst_13025__$1);

(statearr_13690[(12)] = inst_13026__$1);

(statearr_13690[(13)] = inst_13027__$1);

(statearr_13690[(185)] = inst_13040);

(statearr_13690[(14)] = inst_13024__$1);

return statearr_13690;
})();
var statearr_13691_14006 = state_13312__$1;
(statearr_13691_14006[(2)] = null);

(statearr_13691_14006[(1)] = (77));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13313 === (38))){
var inst_12874 = (state_13312[(132)]);
var inst_12878 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(inst_12874);
var inst_12879 = cljs.core._EQ_.call(null,inst_12878,new cljs.core.Keyword(null,"pickup-baby-1","pickup-baby-1",-1650486973));
var state_13312__$1 = state_13312;
if(inst_12879){
var statearr_13692_14007 = state_13312__$1;
(statearr_13692_14007[(1)] = (41));

} else {
var statearr_13693_14008 = state_13312__$1;
(statearr_13693_14008[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13313 === (126))){
var inst_12781 = (state_13312[(20)]);
var inst_12793 = (state_13312[(51)]);
var inst_12792 = (state_13312[(57)]);
var inst_12782 = (state_13312[(23)]);
var inst_13261 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_13262 = (inst_12781 + inst_12792);
var inst_13263 = (inst_12782 + inst_12793);
var inst_13264 = [inst_13262,inst_13263];
var inst_13265 = (new cljs.core.PersistentVector(null,2,(5),inst_13261,inst_13264,null));
var state_13312__$1 = state_13312;
var statearr_13694_14009 = state_13312__$1;
(statearr_13694_14009[(2)] = inst_13265);

(statearr_13694_14009[(1)] = (128));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13313 === (98))){
var inst_13138 = (state_13312[(2)]);
var state_13312__$1 = state_13312;
var statearr_13695_14010 = state_13312__$1;
(statearr_13695_14010[(2)] = inst_13138);

(statearr_13695_14010[(1)] = (95));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13313 === (124))){
var inst_12391 = (state_13312[(80)]);
var inst_13252 = (state_13312[(2)]);
var inst_13253 = farn.core.main_stage.children;
var inst_13254 = inst_13253.sort(inst_12391);
var inst_13255 = farn.events.next_frame.call(null);
var state_13312__$1 = (function (){var statearr_13696 = state_13312;
(statearr_13696[(186)] = inst_13252);

(statearr_13696[(187)] = inst_13254);

return statearr_13696;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13312__$1,(125),inst_13255);
} else {
if((state_val_13313 === (87))){
var inst_13065 = (state_13312[(2)]);
var state_13312__$1 = state_13312;
var statearr_13697_14011 = state_13312__$1;
(statearr_13697_14011[(2)] = inst_13065);

(statearr_13697_14011[(1)] = (84));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13313 === (30))){
var inst_12848 = (state_13312[(146)]);
var inst_12847 = (state_13312[(145)]);
var inst_12844 = (state_13312[(64)]);
var inst_12480 = (state_13312[(87)]);
var inst_12852 = inst_12480.call(null,inst_12847);
var inst_12853 = cljs.core.disj.call(null,inst_12844,inst_12847);
var inst_12843 = inst_12848;
var inst_12844__$1 = inst_12853;
var state_13312__$1 = (function (){var statearr_13701 = state_13312;
(statearr_13701[(64)] = inst_12844__$1);

(statearr_13701[(188)] = inst_12852);

(statearr_13701[(65)] = inst_12843);

return statearr_13701;
})();
var statearr_13702_14012 = state_13312__$1;
(statearr_13702_14012[(2)] = null);

(statearr_13702_14012[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13313 === (73))){
var inst_13151 = (state_13312[(2)]);
var inst_13156 = cljs.core.deref.call(null,farn.core.pickup_store);
var inst_13157 = cljs.core.seq.call(null,inst_13156);
var inst_13158 = inst_13157;
var inst_13159 = null;
var inst_13160 = (0);
var inst_13161 = (0);
var state_13312__$1 = (function (){var statearr_13703 = state_13312;
(statearr_13703[(121)] = inst_13159);

(statearr_13703[(189)] = inst_13151);

(statearr_13703[(122)] = inst_13161);

(statearr_13703[(123)] = inst_13160);

(statearr_13703[(124)] = inst_13158);

return statearr_13703;
})();
var statearr_13704_14013 = state_13312__$1;
(statearr_13704_14013[(2)] = null);

(statearr_13704_14013[(1)] = (105));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13313 === (96))){
var inst_13095 = (state_13312[(89)]);
var inst_12781 = (state_13312[(20)]);
var inst_12791 = (state_13312[(21)]);
var inst_12392 = (state_13312[(22)]);
var inst_12782 = (state_13312[(23)]);
var inst_13094 = (state_13312[(90)]);
var inst_13093 = (state_13312[(91)]);
var inst_13092 = (state_13312[(92)]);
var inst_12788 = (state_13312[(24)]);
var inst_13100 = cljs.core._nth.call(null,inst_13093,inst_13095);
var inst_13102 = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(inst_13100);
var inst_13103 = new cljs.core.Keyword(null,"sprite","sprite",172516848).cljs$core$IFn$_invoke$arity$1(inst_13100);
var inst_13104 = inst_12392.call(null,inst_13102,inst_13103,inst_12781,inst_12782,inst_12788,inst_12791);
var inst_13105 = cljs.core.nth.call(null,inst_13104,(0),null);
var inst_13106 = cljs.core.nth.call(null,inst_13104,(1),null);
var inst_13107 = new cljs.core.Keyword(null,"sprite","sprite",172516848).cljs$core$IFn$_invoke$arity$1(inst_13100);
var inst_13108 = farn.sprite.set_pos_BANG_.call(null,inst_13107,inst_13105,inst_13106);
var inst_13109 = (inst_13095 + (1));
var tmp13698 = inst_13094;
var tmp13699 = inst_13093;
var tmp13700 = inst_13092;
var inst_13092__$1 = tmp13700;
var inst_13093__$1 = tmp13699;
var inst_13094__$1 = tmp13698;
var inst_13095__$1 = inst_13109;
var state_13312__$1 = (function (){var statearr_13705 = state_13312;
(statearr_13705[(89)] = inst_13095__$1);

(statearr_13705[(190)] = inst_13108);

(statearr_13705[(90)] = inst_13094__$1);

(statearr_13705[(91)] = inst_13093__$1);

(statearr_13705[(92)] = inst_13092__$1);

return statearr_13705;
})();
var statearr_13706_14014 = state_13312__$1;
(statearr_13706_14014[(2)] = null);

(statearr_13706_14014[(1)] = (94));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13313 === (10))){
var inst_12349 = (state_13312[(182)]);
var inst_12344 = (state_13312[(102)]);
var inst_12356 = (state_13312[(2)]);
var inst_12357 = cljs.core.conj.call(null,inst_12344,inst_12356);
var inst_12344__$1 = inst_12357;
var inst_12345 = inst_12349;
var state_13312__$1 = (function (){var statearr_13707 = state_13312;
(statearr_13707[(102)] = inst_12344__$1);

(statearr_13707[(103)] = inst_12345);

return statearr_13707;
})();
var statearr_13708_14015 = state_13312__$1;
(statearr_13708_14015[(2)] = null);

(statearr_13708_14015[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13313 === (18))){
var inst_12768 = (state_13312[(39)]);
var inst_12771 = farn.core.main_stage.children.length;
var inst_12772 = cljs.core.not_EQ_.call(null,inst_12768,inst_12771);
var state_13312__$1 = state_13312;
if(inst_12772){
var statearr_13709_14016 = state_13312__$1;
(statearr_13709_14016[(1)] = (20));

} else {
var statearr_13710_14017 = state_13312__$1;
(statearr_13710_14017[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13313 === (105))){
var inst_13161 = (state_13312[(122)]);
var inst_13160 = (state_13312[(123)]);
var inst_13163 = (inst_13161 < inst_13160);
var inst_13164 = inst_13163;
var state_13312__$1 = state_13312;
if(cljs.core.truth_(inst_13164)){
var statearr_13711_14018 = state_13312__$1;
(statearr_13711_14018[(1)] = (107));

} else {
var statearr_13712_14019 = state_13312__$1;
(statearr_13712_14019[(1)] = (108));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13313 === (52))){
var state_13312__$1 = state_13312;
var statearr_13713_14020 = state_13312__$1;
(statearr_13713_14020[(2)] = null);

(statearr_13713_14020[(1)] = (53));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13313 === (114))){
var inst_12781 = (state_13312[(20)]);
var inst_12763 = (state_13312[(48)]);
var inst_13187 = (state_13312[(15)]);
var inst_12791 = (state_13312[(21)]);
var inst_12392 = (state_13312[(22)]);
var inst_12782 = (state_13312[(23)]);
var inst_12788 = (state_13312[(24)]);
var inst_13196 = cljs.core.first.call(null,inst_13187);
var inst_13198 = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(inst_13196);
var inst_13199 = new cljs.core.Keyword(null,"sprite","sprite",172516848).cljs$core$IFn$_invoke$arity$1(inst_13196);
var inst_13200 = inst_12392.call(null,inst_13198,inst_13199,inst_12781,inst_12782,inst_12788,inst_12791);
var inst_13201 = cljs.core.nth.call(null,inst_13200,(0),null);
var inst_13202 = cljs.core.nth.call(null,inst_13200,(1),null);
var inst_13203 = new cljs.core.Keyword(null,"sprite","sprite",172516848).cljs$core$IFn$_invoke$arity$1(inst_13196);
var inst_13204 = farn.sprite.set_pos_BANG_.call(null,inst_13203,inst_13201,inst_13202);
var inst_13205 = new cljs.core.Keyword(null,"shadow","shadow",873231803).cljs$core$IFn$_invoke$arity$1(inst_13196);
var inst_13206 = farn.sprite.set_pos_BANG_.call(null,inst_13205,inst_13201,inst_13202);
var inst_13207 = new cljs.core.Keyword(null,"sprite","sprite",172516848).cljs$core$IFn$_invoke$arity$1(inst_13196);
var inst_13208 = (inst_12763 * farn.core.pickup_bounce_speed);
var inst_13209 = Math.sin.call(null,inst_13208);
var inst_13210 = ((1) + inst_13209);
var inst_13211 = (farn.core.pickup_bounce_height * inst_13210);
var inst_13212 = (farn.core.pickup_vertical_offset + inst_13211);
var inst_13213 = farn.sprite.set_pivot_BANG_.call(null,inst_13207,(0),inst_13212);
var inst_13214 = cljs.core.next.call(null,inst_13187);
var inst_13158 = inst_13214;
var inst_13159 = null;
var inst_13160 = (0);
var inst_13161 = (0);
var state_13312__$1 = (function (){var statearr_13714 = state_13312;
(statearr_13714[(121)] = inst_13159);

(statearr_13714[(191)] = inst_13204);

(statearr_13714[(122)] = inst_13161);

(statearr_13714[(123)] = inst_13160);

(statearr_13714[(192)] = inst_13206);

(statearr_13714[(193)] = inst_13213);

(statearr_13714[(124)] = inst_13158);

return statearr_13714;
})();
var statearr_13715_14021 = state_13312__$1;
(statearr_13715_14021[(2)] = null);

(statearr_13715_14021[(1)] = (105));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13313 === (67))){
var inst_12286 = (state_13312[(35)]);
var inst_12306 = (state_13312[(38)]);
var inst_12981 = (state_13312[(33)]);
var inst_12977 = (state_13312[(138)]);
var inst_12978 = (state_13312[(140)]);
var inst_12983 = farn.stars.make.call(null,farn.core.main_stage,inst_12306,inst_12286,inst_12977,inst_12978);
var inst_12984 = (inst_12981 > (1));
var state_13312__$1 = (function (){var statearr_13716 = state_13312;
(statearr_13716[(194)] = inst_12983);

return statearr_13716;
})();
if(cljs.core.truth_(inst_12984)){
var statearr_13717_14022 = state_13312__$1;
(statearr_13717_14022[(1)] = (69));

} else {
var statearr_13718_14023 = state_13312__$1;
(statearr_13718_14023[(1)] = (70));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13313 === (71))){
var inst_12990 = (state_13312[(2)]);
var state_13312__$1 = state_13312;
var statearr_13719_14024 = state_13312__$1;
(statearr_13719_14024[(2)] = inst_12990);

(statearr_13719_14024[(1)] = (68));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13313 === (42))){
var inst_12363 = (state_13312[(55)]);
var inst_12874 = (state_13312[(132)]);
var inst_12893 = cljs.core.rand_nth.call(null,inst_12363);
var inst_12894 = farn.sound.play_sound.call(null,inst_12893,0.4);
var inst_12895 = new cljs.core.Keyword(null,"sprite","sprite",172516848).cljs$core$IFn$_invoke$arity$1(inst_12874);
var inst_12896 = farn.core.main_stage.removeChild(inst_12895);
var inst_12897 = new cljs.core.Keyword(null,"shadow","shadow",873231803).cljs$core$IFn$_invoke$arity$1(inst_12874);
var inst_12898 = farn.core.main_stage.removeChild(inst_12897);
var inst_12899 = cljs.core.swap_BANG_.call(null,farn.core.player_stars,cljs.core.inc);
var inst_12900 = cljs.core.swap_BANG_.call(null,farn.core.pickup_store,cljs.core.disj,inst_12874);
var state_13312__$1 = (function (){var statearr_13720 = state_13312;
(statearr_13720[(195)] = inst_12900);

(statearr_13720[(196)] = inst_12898);

(statearr_13720[(197)] = inst_12899);

(statearr_13720[(198)] = inst_12896);

(statearr_13720[(199)] = inst_12894);

return statearr_13720;
})();
var statearr_13721_14025 = state_13312__$1;
(statearr_13721_14025[(2)] = null);

(statearr_13721_14025[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13313 === (80))){
var inst_13024 = (state_13312[(14)]);
var inst_13044 = (state_13312[(25)]);
var inst_13044__$1 = cljs.core.seq.call(null,inst_13024);
var state_13312__$1 = (function (){var statearr_13722 = state_13312;
(statearr_13722[(25)] = inst_13044__$1);

return statearr_13722;
})();
if(inst_13044__$1){
var statearr_13723_14026 = state_13312__$1;
(statearr_13723_14026[(1)] = (82));

} else {
var statearr_13724_14027 = state_13312__$1;
(statearr_13724_14027[(1)] = (83));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13313 === (37))){
var inst_12958 = (state_13312[(2)]);
var state_13312__$1 = state_13312;
var statearr_13725_14028 = state_13312__$1;
(statearr_13725_14028[(2)] = inst_12958);

(statearr_13725_14028[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13313 === (63))){
var inst_12764 = (state_13312[(54)]);
var inst_12285 = (state_13312[(58)]);
var inst_12287 = (state_13312[(77)]);
var inst_12767 = (state_13312[(81)]);
var inst_13001 = (state_13312[(2)]);
var inst_13002 = farn.sprite.set_pos_BANG_.call(null,inst_12285,inst_12764);
var inst_13003 = farn.sprite.set_pos_BANG_.call(null,inst_12287,inst_12764);
var inst_13008 = cljs.core.seq.call(null,inst_12767);
var inst_13009 = inst_13008;
var inst_13010 = null;
var inst_13011 = (0);
var inst_13012 = (0);
var state_13312__$1 = (function (){var statearr_13726 = state_13312;
(statearr_13726[(110)] = inst_13009);

(statearr_13726[(27)] = inst_13011);

(statearr_13726[(200)] = inst_13003);

(statearr_13726[(201)] = inst_13002);

(statearr_13726[(16)] = inst_13001);

(statearr_13726[(9)] = inst_13012);

(statearr_13726[(10)] = inst_13010);

return statearr_13726;
})();
var statearr_13727_14029 = state_13312__$1;
(statearr_13727_14029[(2)] = null);

(statearr_13727_14029[(1)] = (72));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13313 === (94))){
var inst_13095 = (state_13312[(89)]);
var inst_13094 = (state_13312[(90)]);
var inst_13097 = (inst_13095 < inst_13094);
var inst_13098 = inst_13097;
var state_13312__$1 = state_13312;
if(cljs.core.truth_(inst_13098)){
var statearr_13728_14030 = state_13312__$1;
(statearr_13728_14030[(1)] = (96));

} else {
var statearr_13729_14031 = state_13312__$1;
(statearr_13729_14031[(1)] = (97));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13313 === (8))){
var inst_12344 = (state_13312[(102)]);
var state_13312__$1 = state_13312;
var statearr_13730_14032 = state_13312__$1;
(statearr_13730_14032[(2)] = inst_12344);

(statearr_13730_14032[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13313 === (49))){
var inst_12285 = (state_13312[(58)]);
var inst_12909 = (state_13312[(116)]);
var inst_12918 = (state_13312[(93)]);
var inst_12918__$1 = cljs.core.first.call(null,inst_12909);
var inst_12919 = new cljs.core.Keyword(null,"sprite","sprite",172516848).cljs$core$IFn$_invoke$arity$1(inst_12918__$1);
var inst_12920 = farn.sprite.overlap_QMARK_.call(null,inst_12285,inst_12919);
var state_13312__$1 = (function (){var statearr_13731 = state_13312;
(statearr_13731[(93)] = inst_12918__$1);

return statearr_13731;
})();
if(inst_12920){
var statearr_13732_14033 = state_13312__$1;
(statearr_13732_14033[(1)] = (51));

} else {
var statearr_13733_14034 = state_13312__$1;
(statearr_13733_14034[(1)] = (52));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13313 === (84))){
var inst_13068 = (state_13312[(2)]);
var state_13312__$1 = state_13312;
var statearr_13734_14035 = state_13312__$1;
(statearr_13734_14035[(2)] = inst_13068);

(statearr_13734_14035[(1)] = (81));


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
}
}
});})(c__6459__auto___13746))
;
return ((function (switch__6444__auto__,c__6459__auto___13746){
return (function() {
var state_machine__6445__auto__ = null;
var state_machine__6445__auto____0 = (function (){
var statearr_13738 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13738[(0)] = state_machine__6445__auto__);

(statearr_13738[(1)] = (1));

return statearr_13738;
});
var state_machine__6445__auto____1 = (function (state_13312){
while(true){
var ret_value__6446__auto__ = (function (){try{while(true){
var result__6447__auto__ = switch__6444__auto__.call(null,state_13312);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6447__auto__;
}
break;
}
}catch (e13739){if((e13739 instanceof Object)){
var ex__6448__auto__ = e13739;
var statearr_13740_14036 = state_13312;
(statearr_13740_14036[(5)] = ex__6448__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13312);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13739;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14037 = state_13312;
state_13312 = G__14037;
continue;
} else {
return ret_value__6446__auto__;
}
break;
}
});
state_machine__6445__auto__ = function(state_13312){
switch(arguments.length){
case 0:
return state_machine__6445__auto____0.call(this);
case 1:
return state_machine__6445__auto____1.call(this,state_13312);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6445__auto____0;
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6445__auto____1;
return state_machine__6445__auto__;
})()
;})(switch__6444__auto__,c__6459__auto___13746))
})();
var state__6461__auto__ = (function (){var statearr_13741 = f__6460__auto__.call(null);
(statearr_13741[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6459__auto___13746);

return statearr_13741;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6461__auto__);
});})(c__6459__auto___13746))
);

}
farn.core.main = (function main(){
return null;
});

//# sourceMappingURL=core.js.map