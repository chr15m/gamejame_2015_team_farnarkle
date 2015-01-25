// Compiled by ClojureScript 0.0-2511
goog.provide('farn.rex');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('farn.events');
goog.require('farn.sprite');
goog.require('farn.font');
goog.require('farn.gfx');
farn.rex.word_exit_speed = (2);
farn.rex.word_entry_speed = 1.6;
farn.rex.rex_phrases = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["What do we do now?","I'm sick of asking!","Who the fuck knows!","Maybe theres an alien baby lost in these woods...","I can hear that baby crying!","Why don't you go find the source of that sobbing?","Is there anything else to do on this planet?","These human brains are puny... but tasty!","This game should be called 'Scenario Brothers'"], null);
farn.rex.launch_rex = (function launch_rex(ui_stage){
var rex_talks = cljs.core.doall.call(null,(function (){var iter__4386__auto__ = (function iter__13443(s__13444){
return (new cljs.core.LazySeq(null,(function (){
var s__13444__$1 = s__13444;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__13444__$1);
if(temp__4126__auto__){
var s__13444__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__13444__$2)){
var c__4384__auto__ = cljs.core.chunk_first.call(null,s__13444__$2);
var size__4385__auto__ = cljs.core.count.call(null,c__4384__auto__);
var b__13446 = cljs.core.chunk_buffer.call(null,size__4385__auto__);
if((function (){var i__13445 = (0);
while(true){
if((i__13445 < size__4385__auto__)){
var tex_name = cljs.core._nth.call(null,c__4384__auto__,i__13445);
cljs.core.chunk_append.call(null,b__13446,farn.gfx.get_texture.call(null,tex_name));

var G__13625 = (i__13445 + (1));
i__13445 = G__13625;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13446),iter__13443.call(null,cljs.core.chunk_rest.call(null,s__13444__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13446),null);
}
} else {
var tex_name = cljs.core.first.call(null,s__13444__$2);
return cljs.core.cons.call(null,farn.gfx.get_texture.call(null,tex_name),iter__13443.call(null,cljs.core.rest.call(null,s__13444__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4386__auto__.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"brown-talk-noblink-1","brown-talk-noblink-1",-1482497653),new cljs.core.Keyword(null,"brown-talk-noblink-2","brown-talk-noblink-2",952351578),new cljs.core.Keyword(null,"brown-talk-noblink-3","brown-talk-noblink-3",-2015336585)], null));
})());
var rex_does_nothing = cljs.core.doall.call(null,(function (){var iter__4386__auto__ = ((function (rex_talks){
return (function iter__13447(s__13448){
return (new cljs.core.LazySeq(null,((function (rex_talks){
return (function (){
var s__13448__$1 = s__13448;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__13448__$1);
if(temp__4126__auto__){
var s__13448__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__13448__$2)){
var c__4384__auto__ = cljs.core.chunk_first.call(null,s__13448__$2);
var size__4385__auto__ = cljs.core.count.call(null,c__4384__auto__);
var b__13450 = cljs.core.chunk_buffer.call(null,size__4385__auto__);
if((function (){var i__13449 = (0);
while(true){
if((i__13449 < size__4385__auto__)){
var tex_name = cljs.core._nth.call(null,c__4384__auto__,i__13449);
cljs.core.chunk_append.call(null,b__13450,farn.gfx.get_texture.call(null,tex_name));

var G__13626 = (i__13449 + (1));
i__13449 = G__13626;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13450),iter__13447.call(null,cljs.core.chunk_rest.call(null,s__13448__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13450),null);
}
} else {
var tex_name = cljs.core.first.call(null,s__13448__$2);
return cljs.core.cons.call(null,farn.gfx.get_texture.call(null,tex_name),iter__13447.call(null,cljs.core.rest.call(null,s__13448__$2)));
}
} else {
return null;
}
break;
}
});})(rex_talks))
,null,null));
});})(rex_talks))
;
return iter__4386__auto__.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"brown-stand-1","brown-stand-1",-1076058420)], null));
})());
var rex = farn.sprite.make_sprite.call(null,cljs.core.rand_nth.call(null,rex_does_nothing));
farn.sprite.set_anchor_BANG_.call(null,rex,0.5,(0));

ui_stage.addChild(rex);

var c__6459__auto___13627 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6459__auto___13627,rex_talks,rex_does_nothing,rex){
return (function (){
var f__6460__auto__ = (function (){var switch__6444__auto__ = ((function (c__6459__auto___13627,rex_talks,rex_does_nothing,rex){
return (function (state_13470){
var state_val_13471 = (state_13470[(1)]);
if((state_val_13471 === (7))){
var inst_13462 = (state_13470[(2)]);
var state_13470__$1 = (function (){var statearr_13472 = state_13470;
(statearr_13472[(7)] = inst_13462);

return statearr_13472;
})();
var statearr_13473_13628 = state_13470__$1;
(statearr_13473_13628[(2)] = null);

(statearr_13473_13628[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13471 === (6))){
var inst_13466 = (state_13470[(2)]);
var state_13470__$1 = state_13470;
var statearr_13474_13629 = state_13470__$1;
(statearr_13474_13629[(2)] = inst_13466);

(statearr_13474_13629[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13471 === (5))){
var state_13470__$1 = state_13470;
var statearr_13475_13630 = state_13470__$1;
(statearr_13475_13630[(2)] = null);

(statearr_13475_13630[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13471 === (4))){
var inst_13451 = (state_13470[(8)]);
var inst_13454 = window.innerWidth;
var inst_13455 = window.innerHeight;
var inst_13456 = (inst_13454 / (2));
var inst_13457 = (inst_13455 / (2));
var inst_13458 = (inst_13456 - (100));
var inst_13459 = (inst_13457 - (80));
var inst_13460 = farn.sprite.set_pos_BANG_.call(null,rex,inst_13458,inst_13459);
var state_13470__$1 = (function (){var statearr_13476 = state_13470;
(statearr_13476[(9)] = inst_13460);

return statearr_13476;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13470__$1,(7),inst_13451);
} else {
if((state_val_13471 === (3))){
var inst_13468 = (state_13470[(2)]);
var state_13470__$1 = state_13470;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13470__$1,inst_13468);
} else {
if((state_val_13471 === (2))){
var state_13470__$1 = state_13470;
var statearr_13477_13631 = state_13470__$1;
(statearr_13477_13631[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13471 === (1))){
var inst_13451 = farn.events.new_resize_chan.call(null);
var state_13470__$1 = (function (){var statearr_13479 = state_13470;
(statearr_13479[(8)] = inst_13451);

return statearr_13479;
})();
var statearr_13480_13632 = state_13470__$1;
(statearr_13480_13632[(2)] = null);

(statearr_13480_13632[(1)] = (2));


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
});})(c__6459__auto___13627,rex_talks,rex_does_nothing,rex))
;
return ((function (switch__6444__auto__,c__6459__auto___13627,rex_talks,rex_does_nothing,rex){
return (function() {
var state_machine__6445__auto__ = null;
var state_machine__6445__auto____0 = (function (){
var statearr_13484 = [null,null,null,null,null,null,null,null,null,null];
(statearr_13484[(0)] = state_machine__6445__auto__);

(statearr_13484[(1)] = (1));

return statearr_13484;
});
var state_machine__6445__auto____1 = (function (state_13470){
while(true){
var ret_value__6446__auto__ = (function (){try{while(true){
var result__6447__auto__ = switch__6444__auto__.call(null,state_13470);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6447__auto__;
}
break;
}
}catch (e13485){if((e13485 instanceof Object)){
var ex__6448__auto__ = e13485;
var statearr_13486_13633 = state_13470;
(statearr_13486_13633[(5)] = ex__6448__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13470);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13485;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13634 = state_13470;
state_13470 = G__13634;
continue;
} else {
return ret_value__6446__auto__;
}
break;
}
});
state_machine__6445__auto__ = function(state_13470){
switch(arguments.length){
case 0:
return state_machine__6445__auto____0.call(this);
case 1:
return state_machine__6445__auto____1.call(this,state_13470);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6445__auto____0;
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6445__auto____1;
return state_machine__6445__auto__;
})()
;})(switch__6444__auto__,c__6459__auto___13627,rex_talks,rex_does_nothing,rex))
})();
var state__6461__auto__ = (function (){var statearr_13487 = f__6460__auto__.call(null);
(statearr_13487[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6459__auto___13627);

return statearr_13487;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6461__auto__);
});})(c__6459__auto___13627,rex_talks,rex_does_nothing,rex))
);


var c__6459__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6459__auto__,rex_talks,rex_does_nothing,rex){
return (function (){
var f__6460__auto__ = (function (){var switch__6444__auto__ = ((function (c__6459__auto__,rex_talks,rex_does_nothing,rex){
return (function (state_13572){
var state_val_13573 = (state_13572[(1)]);
if((state_val_13573 === (7))){
var inst_13494 = (state_13572[(2)]);
var inst_13546 = cljs.core.async.chan.call(null,(1));
var inst_13547 = (function (){var c__6459__auto____$1 = inst_13546;
return ((function (c__6459__auto____$1,inst_13494,inst_13546,state_val_13573,c__6459__auto__,rex_talks,rex_does_nothing,rex){
return (function (){
var f__6460__auto__ = (function (){var switch__6444__auto__ = ((function (c__6459__auto____$1,inst_13494,inst_13546,state_val_13573,c__6459__auto__,rex_talks,rex_does_nothing,rex){
return (function (state_13544){
var state_val_13545 = (state_13544[(1)]);
if((state_val_13545 === (7))){
var inst_13518 = (state_13544[(2)]);
var state_13544__$1 = state_13544;
var statearr_13574_13635 = state_13544__$1;
(statearr_13574_13635[(2)] = inst_13518);

(statearr_13574_13635[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13545 === (1))){
var inst_13496 = (state_13544[(7)]);
var inst_13495 = cljs.core.rand_nth.call(null,farn.rex.rex_phrases);
var inst_13496__$1 = farn.font.make_text.call(null,"400 24pt Varela Round",inst_13495,new cljs.core.Keyword(null,"weight","weight",-1262796205),(400),new cljs.core.Keyword(null,"fill","fill",883462889),"#ffffff",new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#000000",new cljs.core.Keyword(null,"strokeThickness","strokeThickness",-1303725323),(1));
var inst_13497 = window.innerWidth;
var inst_13498 = window.innerHeight;
var inst_13499 = (inst_13497 / (2));
var inst_13500 = (inst_13498 / (2));
var inst_13501 = farn.sprite.set_pos_BANG_.call(null,inst_13496__$1,(0),(10000));
var inst_13502 = ui_stage.addChild(inst_13496__$1);
var inst_13503 = (0);
var state_13544__$1 = (function (){var statearr_13575 = state_13544;
(statearr_13575[(8)] = inst_13503);

(statearr_13575[(9)] = inst_13500);

(statearr_13575[(10)] = inst_13502);

(statearr_13575[(11)] = inst_13499);

(statearr_13575[(12)] = inst_13501);

(statearr_13575[(7)] = inst_13496__$1);

return statearr_13575;
})();
var statearr_13576_13636 = state_13544__$1;
(statearr_13576_13636[(2)] = null);

(statearr_13576_13636[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13545 === (4))){
var inst_13503 = (state_13544[(8)]);
var inst_13500 = (state_13544[(9)]);
var inst_13496 = (state_13544[(7)]);
var inst_13507 = (state_13544[(2)]);
var inst_13508 = ((50) - inst_13503);
var inst_13509 = Math.pow(inst_13508,farn.rex.word_entry_speed);
var inst_13510 = (inst_13500 - (30));
var inst_13511 = farn.sprite.set_pos_BANG_.call(null,inst_13496,inst_13509,inst_13510);
var inst_13512 = (inst_13503 < (50));
var state_13544__$1 = (function (){var statearr_13577 = state_13544;
(statearr_13577[(13)] = inst_13507);

(statearr_13577[(14)] = inst_13511);

return statearr_13577;
})();
if(cljs.core.truth_(inst_13512)){
var statearr_13578_13637 = state_13544__$1;
(statearr_13578_13637[(1)] = (5));

} else {
var statearr_13579_13638 = state_13544__$1;
(statearr_13579_13638[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13545 === (13))){
var state_13544__$1 = state_13544;
var statearr_13580_13639 = state_13544__$1;
(statearr_13580_13639[(2)] = null);

(statearr_13580_13639[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13545 === (6))){
var state_13544__$1 = state_13544;
var statearr_13581_13640 = state_13544__$1;
(statearr_13581_13640[(2)] = null);

(statearr_13581_13640[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13545 === (3))){
var inst_13520 = (state_13544[(2)]);
var inst_13521 = cljs.core.async.timeout.call(null,(3000));
var state_13544__$1 = (function (){var statearr_13582 = state_13544;
(statearr_13582[(15)] = inst_13520);

return statearr_13582;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13544__$1,(8),inst_13521);
} else {
if((state_val_13545 === (12))){
var inst_13524 = (state_13544[(16)]);
var inst_13535 = (inst_13524 + (1));
var inst_13524__$1 = inst_13535;
var state_13544__$1 = (function (){var statearr_13583 = state_13544;
(statearr_13583[(16)] = inst_13524__$1);

return statearr_13583;
})();
var statearr_13584_13641 = state_13544__$1;
(statearr_13584_13641[(2)] = null);

(statearr_13584_13641[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13545 === (2))){
var inst_13505 = farn.events.next_frame.call(null);
var state_13544__$1 = state_13544;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13544__$1,(4),inst_13505);
} else {
if((state_val_13545 === (11))){
var inst_13524 = (state_13544[(16)]);
var inst_13500 = (state_13544[(9)]);
var inst_13496 = (state_13544[(7)]);
var inst_13528 = (state_13544[(2)]);
var inst_13529 = Math.pow(inst_13524,farn.rex.word_exit_speed);
var inst_13530 = (- inst_13529);
var inst_13531 = (inst_13500 - (30));
var inst_13532 = farn.sprite.set_pos_BANG_.call(null,inst_13496,inst_13530,inst_13531);
var inst_13533 = (inst_13524 < (50));
var state_13544__$1 = (function (){var statearr_13585 = state_13544;
(statearr_13585[(17)] = inst_13532);

(statearr_13585[(18)] = inst_13528);

return statearr_13585;
})();
if(cljs.core.truth_(inst_13533)){
var statearr_13586_13642 = state_13544__$1;
(statearr_13586_13642[(1)] = (12));

} else {
var statearr_13587_13643 = state_13544__$1;
(statearr_13587_13643[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13545 === (9))){
var inst_13526 = farn.events.next_frame.call(null);
var state_13544__$1 = state_13544;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13544__$1,(11),inst_13526);
} else {
if((state_val_13545 === (5))){
var inst_13503 = (state_13544[(8)]);
var inst_13514 = (inst_13503 + (1));
var inst_13503__$1 = inst_13514;
var state_13544__$1 = (function (){var statearr_13588 = state_13544;
(statearr_13588[(8)] = inst_13503__$1);

return statearr_13588;
})();
var statearr_13589_13644 = state_13544__$1;
(statearr_13589_13644[(2)] = null);

(statearr_13589_13644[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13545 === (14))){
var inst_13539 = (state_13544[(2)]);
var state_13544__$1 = state_13544;
var statearr_13590_13645 = state_13544__$1;
(statearr_13590_13645[(2)] = inst_13539);

(statearr_13590_13645[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13545 === (10))){
var inst_13496 = (state_13544[(7)]);
var inst_13541 = (state_13544[(2)]);
var inst_13542 = ui_stage.removeChild(inst_13496);
var state_13544__$1 = (function (){var statearr_13591 = state_13544;
(statearr_13591[(19)] = inst_13541);

return statearr_13591;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13544__$1,inst_13542);
} else {
if((state_val_13545 === (8))){
var inst_13523 = (state_13544[(2)]);
var inst_13524 = (0);
var state_13544__$1 = (function (){var statearr_13592 = state_13544;
(statearr_13592[(20)] = inst_13523);

(statearr_13592[(16)] = inst_13524);

return statearr_13592;
})();
var statearr_13593_13646 = state_13544__$1;
(statearr_13593_13646[(2)] = null);

(statearr_13593_13646[(1)] = (9));


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
});})(c__6459__auto____$1,inst_13494,inst_13546,state_val_13573,c__6459__auto__,rex_talks,rex_does_nothing,rex))
;
return ((function (switch__6444__auto__,c__6459__auto____$1,inst_13494,inst_13546,state_val_13573,c__6459__auto__,rex_talks,rex_does_nothing,rex){
return (function() {
var state_machine__6445__auto__ = null;
var state_machine__6445__auto____0 = (function (){
var statearr_13597 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13597[(0)] = state_machine__6445__auto__);

(statearr_13597[(1)] = (1));

return statearr_13597;
});
var state_machine__6445__auto____1 = (function (state_13544){
while(true){
var ret_value__6446__auto__ = (function (){try{while(true){
var result__6447__auto__ = switch__6444__auto__.call(null,state_13544);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6447__auto__;
}
break;
}
}catch (e13598){if((e13598 instanceof Object)){
var ex__6448__auto__ = e13598;
var statearr_13599_13647 = state_13544;
(statearr_13599_13647[(5)] = ex__6448__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13544);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13598;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13648 = state_13544;
state_13544 = G__13648;
continue;
} else {
return ret_value__6446__auto__;
}
break;
}
});
state_machine__6445__auto__ = function(state_13544){
switch(arguments.length){
case 0:
return state_machine__6445__auto____0.call(this);
case 1:
return state_machine__6445__auto____1.call(this,state_13544);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6445__auto____0;
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6445__auto____1;
return state_machine__6445__auto__;
})()
;})(switch__6444__auto__,c__6459__auto____$1,inst_13494,inst_13546,state_val_13573,c__6459__auto__,rex_talks,rex_does_nothing,rex))
})();
var state__6461__auto__ = (function (){var statearr_13600 = f__6460__auto__.call(null);
(statearr_13600[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6459__auto____$1);

return statearr_13600;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6461__auto__);
});
;})(c__6459__auto____$1,inst_13494,inst_13546,state_val_13573,c__6459__auto__,rex_talks,rex_does_nothing,rex))
})();
var inst_13548 = cljs.core.async.impl.dispatch.run.call(null,inst_13547);
var inst_13549 = (50);
var state_13572__$1 = (function (){var statearr_13601 = state_13572;
(statearr_13601[(7)] = inst_13494);

(statearr_13601[(8)] = inst_13549);

(statearr_13601[(9)] = inst_13548);

return statearr_13601;
})();
var statearr_13602_13649 = state_13572__$1;
(statearr_13602_13649[(2)] = null);

(statearr_13602_13649[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13573 === (1))){
var state_13572__$1 = state_13572;
var statearr_13603_13650 = state_13572__$1;
(statearr_13603_13650[(2)] = null);

(statearr_13603_13650[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13573 === (4))){
var inst_13490 = cljs.core.rand_nth.call(null,rex_does_nothing);
var inst_13491 = rex.setTexture(inst_13490);
var inst_13492 = cljs.core.async.timeout.call(null,(10000));
var state_13572__$1 = (function (){var statearr_13604 = state_13572;
(statearr_13604[(10)] = inst_13491);

return statearr_13604;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13572__$1,(7),inst_13492);
} else {
if((state_val_13573 === (13))){
var inst_13562 = (state_13572[(2)]);
var state_13572__$1 = state_13572;
var statearr_13605_13651 = state_13572__$1;
(statearr_13605_13651[(2)] = inst_13562);

(statearr_13605_13651[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13573 === (6))){
var inst_13568 = (state_13572[(2)]);
var state_13572__$1 = state_13572;
var statearr_13606_13652 = state_13572__$1;
(statearr_13606_13652[(2)] = inst_13568);

(statearr_13606_13652[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13573 === (3))){
var inst_13570 = (state_13572[(2)]);
var state_13572__$1 = state_13572;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13572__$1,inst_13570);
} else {
if((state_val_13573 === (12))){
var state_13572__$1 = state_13572;
var statearr_13607_13653 = state_13572__$1;
(statearr_13607_13653[(2)] = null);

(statearr_13607_13653[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13573 === (2))){
var state_13572__$1 = state_13572;
var statearr_13608_13654 = state_13572__$1;
(statearr_13608_13654[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13573 === (11))){
var inst_13549 = (state_13572[(8)]);
var inst_13558 = (inst_13549 - (1));
var inst_13549__$1 = inst_13558;
var state_13572__$1 = (function (){var statearr_13610 = state_13572;
(statearr_13610[(8)] = inst_13549__$1);

return statearr_13610;
})();
var statearr_13611_13655 = state_13572__$1;
(statearr_13611_13655[(2)] = null);

(statearr_13611_13655[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13573 === (9))){
var inst_13564 = (state_13572[(2)]);
var state_13572__$1 = (function (){var statearr_13612 = state_13572;
(statearr_13612[(11)] = inst_13564);

return statearr_13612;
})();
var statearr_13613_13656 = state_13572__$1;
(statearr_13613_13656[(2)] = null);

(statearr_13613_13656[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13573 === (5))){
var state_13572__$1 = state_13572;
var statearr_13614_13657 = state_13572__$1;
(statearr_13614_13657[(2)] = null);

(statearr_13614_13657[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13573 === (10))){
var inst_13549 = (state_13572[(8)]);
var inst_13553 = (state_13572[(2)]);
var inst_13554 = cljs.core.rand_nth.call(null,rex_talks);
var inst_13555 = rex.setTexture(inst_13554);
var inst_13556 = (inst_13549 > (0));
var state_13572__$1 = (function (){var statearr_13615 = state_13572;
(statearr_13615[(12)] = inst_13553);

(statearr_13615[(13)] = inst_13555);

return statearr_13615;
})();
if(cljs.core.truth_(inst_13556)){
var statearr_13616_13658 = state_13572__$1;
(statearr_13616_13658[(1)] = (11));

} else {
var statearr_13617_13659 = state_13572__$1;
(statearr_13617_13659[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13573 === (8))){
var inst_13551 = cljs.core.async.timeout.call(null,(60));
var state_13572__$1 = state_13572;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13572__$1,(10),inst_13551);
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
});})(c__6459__auto__,rex_talks,rex_does_nothing,rex))
;
return ((function (switch__6444__auto__,c__6459__auto__,rex_talks,rex_does_nothing,rex){
return (function() {
var state_machine__6445__auto__ = null;
var state_machine__6445__auto____0 = (function (){
var statearr_13621 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13621[(0)] = state_machine__6445__auto__);

(statearr_13621[(1)] = (1));

return statearr_13621;
});
var state_machine__6445__auto____1 = (function (state_13572){
while(true){
var ret_value__6446__auto__ = (function (){try{while(true){
var result__6447__auto__ = switch__6444__auto__.call(null,state_13572);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6447__auto__;
}
break;
}
}catch (e13622){if((e13622 instanceof Object)){
var ex__6448__auto__ = e13622;
var statearr_13623_13660 = state_13572;
(statearr_13623_13660[(5)] = ex__6448__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13572);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13622;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13661 = state_13572;
state_13572 = G__13661;
continue;
} else {
return ret_value__6446__auto__;
}
break;
}
});
state_machine__6445__auto__ = function(state_13572){
switch(arguments.length){
case 0:
return state_machine__6445__auto____0.call(this);
case 1:
return state_machine__6445__auto____1.call(this,state_13572);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6445__auto____0;
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6445__auto____1;
return state_machine__6445__auto__;
})()
;})(switch__6444__auto__,c__6459__auto__,rex_talks,rex_does_nothing,rex))
})();
var state__6461__auto__ = (function (){var statearr_13624 = f__6460__auto__.call(null);
(statearr_13624[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6459__auto__);

return statearr_13624;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6461__auto__);
});})(c__6459__auto__,rex_talks,rex_does_nothing,rex))
);

return c__6459__auto__;
});

//# sourceMappingURL=rex.js.map