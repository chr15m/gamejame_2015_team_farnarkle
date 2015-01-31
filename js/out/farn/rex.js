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
farn.rex.rex_opener = "What do we do now?";
farn.rex.rex_chatter = new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Theres an alien baby lost in these woods...","I can hear that baby crying!","Why don't you go find the source of that sobbing?","These human brains are puny... but tasty!","Scenario brothers galaxy woohoo!","Nee mee nee mee nee.","If a tree falls in a forest, and no alien is there to hear it...","What was I when I wasn't what I am? What will I be when I'm not?","What is the sound of one baby crying? hint, hint...","These plants are very perculiar. Our leader will be pleased!","Try and make first contact with the mushrooms","The hive mind is calling me home.","Once the baby is recovered, this planet can be purged"], null);
farn.rex.rex_getting_close = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(8000),(20000),0.5,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Cold...","You're so far off the mark","Maybe go for a bound and see what you can find","The baby is out there somewhere"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(5000),(8000),0.4,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Now you are warming up!","Warmer...","I think you are on the right track"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2000),(5000),0.3,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["I can sense an alien presence near where you are!","I think the baby is closer","OK you're getting hot now","Hotter..."], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1000),(2000),0.2,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Hot!","I sense you are very close!","...almost there...","I think you're really close now!"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(100),(1000),0.1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["There it is!","Quick! Save the baby!","You've found it!"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(100),(0),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Well done! You found our missing infant!","I think someone's getting a medal!","Just wait until The Great Blurg hears of your success!","It's times like these I'm proud to call you my friend!","Is there anything else to do on this planet... while were here?","The great council has sent their warmest thanks!"], null)], null)], null);
farn.rex.square = (function square(n){
return (n * n);
});
farn.rex.get_rex_phrase = (function get_rex_phrase(){
var vec__14796 = cljs.core.deref.call(null,farn.core.baby_position);
var bx = cljs.core.nth.call(null,vec__14796,(0),null);
var by = cljs.core.nth.call(null,vec__14796,(1),null);
var vec__14797 = cljs.core.deref.call(null,farn.core.last_player_position);
var x = cljs.core.nth.call(null,vec__14797,(0),null);
var y = cljs.core.nth.call(null,vec__14797,(1),null);
var distance = Math.sqrt.call(null,(farn.rex.square.call(null,(bx - x)) + farn.rex.square.call(null,(by - y))));
var G__14800 = farn.rex.rex_getting_close;
var vec__14801 = G__14800;
var vec__14802 = cljs.core.nth.call(null,vec__14801,(0),null);
var bot = cljs.core.nth.call(null,vec__14802,(0),null);
var top = cljs.core.nth.call(null,vec__14802,(1),null);
var chat_prob = cljs.core.nth.call(null,vec__14802,(2),null);
var choices = cljs.core.nth.call(null,vec__14802,(3),null);
var t = cljs.core.nthnext.call(null,vec__14801,(1));
var G__14800__$1 = G__14800;
while(true){
var vec__14803 = G__14800__$1;
var vec__14804 = cljs.core.nth.call(null,vec__14803,(0),null);
var bot__$1 = cljs.core.nth.call(null,vec__14804,(0),null);
var top__$1 = cljs.core.nth.call(null,vec__14804,(1),null);
var chat_prob__$1 = cljs.core.nth.call(null,vec__14804,(2),null);
var choices__$1 = cljs.core.nth.call(null,vec__14804,(3),null);
var t__$1 = cljs.core.nthnext.call(null,vec__14803,(1));
if(((bot__$1 < distance)) && ((distance < top__$1))){
if((cljs.core.rand.call(null) < chat_prob__$1)){
return cljs.core.rand_nth.call(null,farn.rex.rex_chatter);
} else {
return cljs.core.rand_nth.call(null,choices__$1);
}
} else {
if(!(cljs.core.empty_QMARK_.call(null,t__$1))){
var G__14805 = t__$1;
G__14800__$1 = G__14805;
continue;
} else {
return "How on earth did you get out there?";
}
}
break;
}
});
farn.rex.say = (function say(rex,rex_talks,ui_stage,phrase){
var c__6459__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6459__auto__){
return (function (){
var f__6460__auto__ = (function (){var switch__6444__auto__ = ((function (c__6459__auto__){
return (function (state_14991){
var state_val_14992 = (state_14991[(1)]);
if((state_val_14992 === (7))){
var inst_14987 = (state_14991[(2)]);
var state_14991__$1 = state_14991;
var statearr_14993_15036 = state_14991__$1;
(statearr_14993_15036[(2)] = inst_14987);

(statearr_14993_15036[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14992 === (6))){
var state_14991__$1 = state_14991;
var statearr_14994_15037 = state_14991__$1;
(statearr_14994_15037[(2)] = null);

(statearr_14994_15037[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14992 === (5))){
var inst_14974 = (state_14991[(7)]);
var inst_14983 = (inst_14974 - (1));
var inst_14974__$1 = inst_14983;
var state_14991__$1 = (function (){var statearr_14995 = state_14991;
(statearr_14995[(7)] = inst_14974__$1);

return statearr_14995;
})();
var statearr_14996_15038 = state_14991__$1;
(statearr_14996_15038[(2)] = null);

(statearr_14996_15038[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14992 === (4))){
var inst_14974 = (state_14991[(7)]);
var inst_14978 = (state_14991[(2)]);
var inst_14979 = cljs.core.rand_nth.call(null,rex_talks);
var inst_14980 = rex.setTexture(inst_14979);
var inst_14981 = (inst_14974 > (0));
var state_14991__$1 = (function (){var statearr_14997 = state_14991;
(statearr_14997[(8)] = inst_14980);

(statearr_14997[(9)] = inst_14978);

return statearr_14997;
})();
if(cljs.core.truth_(inst_14981)){
var statearr_14998_15039 = state_14991__$1;
(statearr_14998_15039[(1)] = (5));

} else {
var statearr_14999_15040 = state_14991__$1;
(statearr_14999_15040[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14992 === (3))){
var inst_14989 = (state_14991[(2)]);
var state_14991__$1 = state_14991;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14991__$1,inst_14989);
} else {
if((state_val_14992 === (2))){
var inst_14976 = cljs.core.async.timeout.call(null,(60));
var state_14991__$1 = state_14991;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14991__$1,(4),inst_14976);
} else {
if((state_val_14992 === (1))){
var inst_14971 = cljs.core.async.chan.call(null,(1));
var inst_14972 = (function (){var c__6459__auto____$1 = inst_14971;
return ((function (c__6459__auto____$1,inst_14971,state_val_14992,c__6459__auto__){
return (function (){
var f__6460__auto__ = (function (){var switch__6444__auto__ = ((function (c__6459__auto____$1,inst_14971,state_val_14992,c__6459__auto__){
return (function (state_14969){
var state_val_14970 = (state_14969[(1)]);
if((state_val_14970 === (7))){
var inst_14943 = (state_14969[(2)]);
var state_14969__$1 = state_14969;
var statearr_15000_15041 = state_14969__$1;
(statearr_15000_15041[(2)] = inst_14943);

(statearr_15000_15041[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14970 === (1))){
var inst_14921 = (state_14969[(7)]);
var inst_14921__$1 = farn.font.make_text.call(null,"400 24pt Varela Round",phrase,new cljs.core.Keyword(null,"weight","weight",-1262796205),(400),new cljs.core.Keyword(null,"fill","fill",883462889),"#ffffff",new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#000000",new cljs.core.Keyword(null,"strokeThickness","strokeThickness",-1303725323),(1));
var inst_14922 = window.innerWidth;
var inst_14923 = window.innerHeight;
var inst_14924 = (inst_14922 / (2));
var inst_14925 = (inst_14923 / (2));
var inst_14926 = farn.sprite.set_pos_BANG_.call(null,inst_14921__$1,(0),(10000));
var inst_14927 = ui_stage.addChild(inst_14921__$1);
var inst_14928 = (0);
var state_14969__$1 = (function (){var statearr_15001 = state_14969;
(statearr_15001[(8)] = inst_14925);

(statearr_15001[(9)] = inst_14926);

(statearr_15001[(10)] = inst_14928);

(statearr_15001[(11)] = inst_14924);

(statearr_15001[(7)] = inst_14921__$1);

(statearr_15001[(12)] = inst_14927);

return statearr_15001;
})();
var statearr_15002_15042 = state_14969__$1;
(statearr_15002_15042[(2)] = null);

(statearr_15002_15042[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14970 === (4))){
var inst_14925 = (state_14969[(8)]);
var inst_14928 = (state_14969[(10)]);
var inst_14921 = (state_14969[(7)]);
var inst_14932 = (state_14969[(2)]);
var inst_14933 = ((50) - inst_14928);
var inst_14934 = Math.pow(inst_14933,farn.rex.word_entry_speed);
var inst_14935 = (inst_14925 - (30));
var inst_14936 = farn.sprite.set_pos_BANG_.call(null,inst_14921,inst_14934,inst_14935);
var inst_14937 = (inst_14928 < (50));
var state_14969__$1 = (function (){var statearr_15003 = state_14969;
(statearr_15003[(13)] = inst_14932);

(statearr_15003[(14)] = inst_14936);

return statearr_15003;
})();
if(cljs.core.truth_(inst_14937)){
var statearr_15004_15043 = state_14969__$1;
(statearr_15004_15043[(1)] = (5));

} else {
var statearr_15005_15044 = state_14969__$1;
(statearr_15005_15044[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14970 === (13))){
var state_14969__$1 = state_14969;
var statearr_15006_15045 = state_14969__$1;
(statearr_15006_15045[(2)] = null);

(statearr_15006_15045[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14970 === (6))){
var state_14969__$1 = state_14969;
var statearr_15007_15046 = state_14969__$1;
(statearr_15007_15046[(2)] = null);

(statearr_15007_15046[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14970 === (3))){
var inst_14945 = (state_14969[(2)]);
var inst_14946 = cljs.core.async.timeout.call(null,(3000));
var state_14969__$1 = (function (){var statearr_15008 = state_14969;
(statearr_15008[(15)] = inst_14945);

return statearr_15008;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14969__$1,(8),inst_14946);
} else {
if((state_val_14970 === (12))){
var inst_14949 = (state_14969[(16)]);
var inst_14960 = (inst_14949 + (1));
var inst_14949__$1 = inst_14960;
var state_14969__$1 = (function (){var statearr_15009 = state_14969;
(statearr_15009[(16)] = inst_14949__$1);

return statearr_15009;
})();
var statearr_15010_15047 = state_14969__$1;
(statearr_15010_15047[(2)] = null);

(statearr_15010_15047[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14970 === (2))){
var inst_14930 = farn.events.next_frame.call(null);
var state_14969__$1 = state_14969;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14969__$1,(4),inst_14930);
} else {
if((state_val_14970 === (11))){
var inst_14949 = (state_14969[(16)]);
var inst_14925 = (state_14969[(8)]);
var inst_14921 = (state_14969[(7)]);
var inst_14953 = (state_14969[(2)]);
var inst_14954 = Math.pow(inst_14949,farn.rex.word_exit_speed);
var inst_14955 = (- inst_14954);
var inst_14956 = (inst_14925 - (30));
var inst_14957 = farn.sprite.set_pos_BANG_.call(null,inst_14921,inst_14955,inst_14956);
var inst_14958 = (inst_14949 < (50));
var state_14969__$1 = (function (){var statearr_15011 = state_14969;
(statearr_15011[(17)] = inst_14957);

(statearr_15011[(18)] = inst_14953);

return statearr_15011;
})();
if(cljs.core.truth_(inst_14958)){
var statearr_15012_15048 = state_14969__$1;
(statearr_15012_15048[(1)] = (12));

} else {
var statearr_15013_15049 = state_14969__$1;
(statearr_15013_15049[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14970 === (9))){
var inst_14951 = farn.events.next_frame.call(null);
var state_14969__$1 = state_14969;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14969__$1,(11),inst_14951);
} else {
if((state_val_14970 === (5))){
var inst_14928 = (state_14969[(10)]);
var inst_14939 = (inst_14928 + (1));
var inst_14928__$1 = inst_14939;
var state_14969__$1 = (function (){var statearr_15014 = state_14969;
(statearr_15014[(10)] = inst_14928__$1);

return statearr_15014;
})();
var statearr_15015_15050 = state_14969__$1;
(statearr_15015_15050[(2)] = null);

(statearr_15015_15050[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14970 === (14))){
var inst_14964 = (state_14969[(2)]);
var state_14969__$1 = state_14969;
var statearr_15016_15051 = state_14969__$1;
(statearr_15016_15051[(2)] = inst_14964);

(statearr_15016_15051[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14970 === (10))){
var inst_14921 = (state_14969[(7)]);
var inst_14966 = (state_14969[(2)]);
var inst_14967 = ui_stage.removeChild(inst_14921);
var state_14969__$1 = (function (){var statearr_15017 = state_14969;
(statearr_15017[(19)] = inst_14966);

return statearr_15017;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14969__$1,inst_14967);
} else {
if((state_val_14970 === (8))){
var inst_14948 = (state_14969[(2)]);
var inst_14949 = (0);
var state_14969__$1 = (function (){var statearr_15018 = state_14969;
(statearr_15018[(16)] = inst_14949);

(statearr_15018[(20)] = inst_14948);

return statearr_15018;
})();
var statearr_15019_15052 = state_14969__$1;
(statearr_15019_15052[(2)] = null);

(statearr_15019_15052[(1)] = (9));


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
});})(c__6459__auto____$1,inst_14971,state_val_14992,c__6459__auto__))
;
return ((function (switch__6444__auto__,c__6459__auto____$1,inst_14971,state_val_14992,c__6459__auto__){
return (function() {
var state_machine__6445__auto__ = null;
var state_machine__6445__auto____0 = (function (){
var statearr_15023 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15023[(0)] = state_machine__6445__auto__);

(statearr_15023[(1)] = (1));

return statearr_15023;
});
var state_machine__6445__auto____1 = (function (state_14969){
while(true){
var ret_value__6446__auto__ = (function (){try{while(true){
var result__6447__auto__ = switch__6444__auto__.call(null,state_14969);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6447__auto__;
}
break;
}
}catch (e15024){if((e15024 instanceof Object)){
var ex__6448__auto__ = e15024;
var statearr_15025_15053 = state_14969;
(statearr_15025_15053[(5)] = ex__6448__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14969);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15024;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15054 = state_14969;
state_14969 = G__15054;
continue;
} else {
return ret_value__6446__auto__;
}
break;
}
});
state_machine__6445__auto__ = function(state_14969){
switch(arguments.length){
case 0:
return state_machine__6445__auto____0.call(this);
case 1:
return state_machine__6445__auto____1.call(this,state_14969);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6445__auto____0;
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6445__auto____1;
return state_machine__6445__auto__;
})()
;})(switch__6444__auto__,c__6459__auto____$1,inst_14971,state_val_14992,c__6459__auto__))
})();
var state__6461__auto__ = (function (){var statearr_15026 = f__6460__auto__.call(null);
(statearr_15026[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6459__auto____$1);

return statearr_15026;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6461__auto__);
});
;})(c__6459__auto____$1,inst_14971,state_val_14992,c__6459__auto__))
})();
var inst_14973 = cljs.core.async.impl.dispatch.run.call(null,inst_14972);
var inst_14974 = (50);
var state_14991__$1 = (function (){var statearr_15027 = state_14991;
(statearr_15027[(10)] = inst_14973);

(statearr_15027[(7)] = inst_14974);

return statearr_15027;
})();
var statearr_15028_15055 = state_14991__$1;
(statearr_15028_15055[(2)] = null);

(statearr_15028_15055[(1)] = (2));


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
});})(c__6459__auto__))
;
return ((function (switch__6444__auto__,c__6459__auto__){
return (function() {
var state_machine__6445__auto__ = null;
var state_machine__6445__auto____0 = (function (){
var statearr_15032 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_15032[(0)] = state_machine__6445__auto__);

(statearr_15032[(1)] = (1));

return statearr_15032;
});
var state_machine__6445__auto____1 = (function (state_14991){
while(true){
var ret_value__6446__auto__ = (function (){try{while(true){
var result__6447__auto__ = switch__6444__auto__.call(null,state_14991);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6447__auto__;
}
break;
}
}catch (e15033){if((e15033 instanceof Object)){
var ex__6448__auto__ = e15033;
var statearr_15034_15056 = state_14991;
(statearr_15034_15056[(5)] = ex__6448__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14991);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15033;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15057 = state_14991;
state_14991 = G__15057;
continue;
} else {
return ret_value__6446__auto__;
}
break;
}
});
state_machine__6445__auto__ = function(state_14991){
switch(arguments.length){
case 0:
return state_machine__6445__auto____0.call(this);
case 1:
return state_machine__6445__auto____1.call(this,state_14991);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6445__auto____0;
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6445__auto____1;
return state_machine__6445__auto__;
})()
;})(switch__6444__auto__,c__6459__auto__))
})();
var state__6461__auto__ = (function (){var statearr_15035 = f__6460__auto__.call(null);
(statearr_15035[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6459__auto__);

return statearr_15035;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6461__auto__);
});})(c__6459__auto__))
);

return c__6459__auto__;
});
farn.rex.launch_rex = (function launch_rex(ui_stage){
var rex_talks = cljs.core.doall.call(null,(function (){var iter__4386__auto__ = (function iter__15150(s__15151){
return (new cljs.core.LazySeq(null,(function (){
var s__15151__$1 = s__15151;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__15151__$1);
if(temp__4126__auto__){
var s__15151__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__15151__$2)){
var c__4384__auto__ = cljs.core.chunk_first.call(null,s__15151__$2);
var size__4385__auto__ = cljs.core.count.call(null,c__4384__auto__);
var b__15153 = cljs.core.chunk_buffer.call(null,size__4385__auto__);
if((function (){var i__15152 = (0);
while(true){
if((i__15152 < size__4385__auto__)){
var tex_name = cljs.core._nth.call(null,c__4384__auto__,i__15152);
cljs.core.chunk_append.call(null,b__15153,farn.gfx.get_texture.call(null,tex_name));

var G__15242 = (i__15152 + (1));
i__15152 = G__15242;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15153),iter__15150.call(null,cljs.core.chunk_rest.call(null,s__15151__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15153),null);
}
} else {
var tex_name = cljs.core.first.call(null,s__15151__$2);
return cljs.core.cons.call(null,farn.gfx.get_texture.call(null,tex_name),iter__15150.call(null,cljs.core.rest.call(null,s__15151__$2)));
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
return (function iter__15154(s__15155){
return (new cljs.core.LazySeq(null,((function (rex_talks){
return (function (){
var s__15155__$1 = s__15155;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__15155__$1);
if(temp__4126__auto__){
var s__15155__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__15155__$2)){
var c__4384__auto__ = cljs.core.chunk_first.call(null,s__15155__$2);
var size__4385__auto__ = cljs.core.count.call(null,c__4384__auto__);
var b__15157 = cljs.core.chunk_buffer.call(null,size__4385__auto__);
if((function (){var i__15156 = (0);
while(true){
if((i__15156 < size__4385__auto__)){
var tex_name = cljs.core._nth.call(null,c__4384__auto__,i__15156);
cljs.core.chunk_append.call(null,b__15157,farn.gfx.get_texture.call(null,tex_name));

var G__15243 = (i__15156 + (1));
i__15156 = G__15243;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15157),iter__15154.call(null,cljs.core.chunk_rest.call(null,s__15155__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15157),null);
}
} else {
var tex_name = cljs.core.first.call(null,s__15155__$2);
return cljs.core.cons.call(null,farn.gfx.get_texture.call(null,tex_name),iter__15154.call(null,cljs.core.rest.call(null,s__15155__$2)));
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

var c__6459__auto___15244 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6459__auto___15244,rex_talks,rex_does_nothing,rex){
return (function (){
var f__6460__auto__ = (function (){var switch__6444__auto__ = ((function (c__6459__auto___15244,rex_talks,rex_does_nothing,rex){
return (function (state_15177){
var state_val_15178 = (state_15177[(1)]);
if((state_val_15178 === (7))){
var inst_15169 = (state_15177[(2)]);
var state_15177__$1 = (function (){var statearr_15179 = state_15177;
(statearr_15179[(7)] = inst_15169);

return statearr_15179;
})();
var statearr_15180_15245 = state_15177__$1;
(statearr_15180_15245[(2)] = null);

(statearr_15180_15245[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15178 === (6))){
var inst_15173 = (state_15177[(2)]);
var state_15177__$1 = state_15177;
var statearr_15181_15246 = state_15177__$1;
(statearr_15181_15246[(2)] = inst_15173);

(statearr_15181_15246[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15178 === (5))){
var state_15177__$1 = state_15177;
var statearr_15182_15247 = state_15177__$1;
(statearr_15182_15247[(2)] = null);

(statearr_15182_15247[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15178 === (4))){
var inst_15158 = (state_15177[(8)]);
var inst_15161 = window.innerWidth;
var inst_15162 = window.innerHeight;
var inst_15163 = (inst_15161 / (2));
var inst_15164 = (inst_15162 / (2));
var inst_15165 = (inst_15163 - (100));
var inst_15166 = (inst_15164 - (80));
var inst_15167 = farn.sprite.set_pos_BANG_.call(null,rex,inst_15165,inst_15166);
var state_15177__$1 = (function (){var statearr_15183 = state_15177;
(statearr_15183[(9)] = inst_15167);

return statearr_15183;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15177__$1,(7),inst_15158);
} else {
if((state_val_15178 === (3))){
var inst_15175 = (state_15177[(2)]);
var state_15177__$1 = state_15177;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15177__$1,inst_15175);
} else {
if((state_val_15178 === (2))){
var state_15177__$1 = state_15177;
var statearr_15184_15248 = state_15177__$1;
(statearr_15184_15248[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15178 === (1))){
var inst_15158 = farn.events.new_resize_chan.call(null);
var state_15177__$1 = (function (){var statearr_15186 = state_15177;
(statearr_15186[(8)] = inst_15158);

return statearr_15186;
})();
var statearr_15187_15249 = state_15177__$1;
(statearr_15187_15249[(2)] = null);

(statearr_15187_15249[(1)] = (2));


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
});})(c__6459__auto___15244,rex_talks,rex_does_nothing,rex))
;
return ((function (switch__6444__auto__,c__6459__auto___15244,rex_talks,rex_does_nothing,rex){
return (function() {
var state_machine__6445__auto__ = null;
var state_machine__6445__auto____0 = (function (){
var statearr_15191 = [null,null,null,null,null,null,null,null,null,null];
(statearr_15191[(0)] = state_machine__6445__auto__);

(statearr_15191[(1)] = (1));

return statearr_15191;
});
var state_machine__6445__auto____1 = (function (state_15177){
while(true){
var ret_value__6446__auto__ = (function (){try{while(true){
var result__6447__auto__ = switch__6444__auto__.call(null,state_15177);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6447__auto__;
}
break;
}
}catch (e15192){if((e15192 instanceof Object)){
var ex__6448__auto__ = e15192;
var statearr_15193_15250 = state_15177;
(statearr_15193_15250[(5)] = ex__6448__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15177);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15192;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15251 = state_15177;
state_15177 = G__15251;
continue;
} else {
return ret_value__6446__auto__;
}
break;
}
});
state_machine__6445__auto__ = function(state_15177){
switch(arguments.length){
case 0:
return state_machine__6445__auto____0.call(this);
case 1:
return state_machine__6445__auto____1.call(this,state_15177);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6445__auto____0;
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6445__auto____1;
return state_machine__6445__auto__;
})()
;})(switch__6444__auto__,c__6459__auto___15244,rex_talks,rex_does_nothing,rex))
})();
var state__6461__auto__ = (function (){var statearr_15194 = f__6460__auto__.call(null);
(statearr_15194[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6459__auto___15244);

return statearr_15194;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6461__auto__);
});})(c__6459__auto___15244,rex_talks,rex_does_nothing,rex))
);


var c__6459__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6459__auto__,rex_talks,rex_does_nothing,rex){
return (function (){
var f__6460__auto__ = (function (){var switch__6444__auto__ = ((function (c__6459__auto__,rex_talks,rex_does_nothing,rex){
return (function (state_15221){
var state_val_15222 = (state_15221[(1)]);
if((state_val_15222 === (7))){
var state_15221__$1 = state_15221;
var statearr_15223_15252 = state_15221__$1;
(statearr_15223_15252[(2)] = null);

(statearr_15223_15252[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15222 === (1))){
var inst_15195 = cljs.core.rand_nth.call(null,rex_does_nothing);
var inst_15196 = rex.setTexture(inst_15195);
var inst_15197 = cljs.core.async.timeout.call(null,(5000));
var state_15221__$1 = (function (){var statearr_15224 = state_15221;
(statearr_15224[(7)] = inst_15196);

return statearr_15224;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15221__$1,(2),inst_15197);
} else {
if((state_val_15222 === (4))){
var state_15221__$1 = state_15221;
var statearr_15225_15253 = state_15221__$1;
(statearr_15225_15253[(1)] = (6));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15222 === (6))){
var inst_15205 = cljs.core.rand_nth.call(null,rex_does_nothing);
var inst_15206 = rex.setTexture(inst_15205);
var inst_15207 = cljs.core.async.timeout.call(null,(5000));
var state_15221__$1 = (function (){var statearr_15227 = state_15221;
(statearr_15227[(8)] = inst_15206);

return statearr_15227;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15221__$1,(9),inst_15207);
} else {
if((state_val_15222 === (3))){
var inst_15202 = (state_15221[(2)]);
var state_15221__$1 = (function (){var statearr_15228 = state_15221;
(statearr_15228[(9)] = inst_15202);

return statearr_15228;
})();
var statearr_15229_15254 = state_15221__$1;
(statearr_15229_15254[(2)] = null);

(statearr_15229_15254[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15222 === (2))){
var inst_15199 = (state_15221[(2)]);
var inst_15200 = farn.rex.say.call(null,rex,rex_talks,ui_stage,farn.rex.rex_opener);
var state_15221__$1 = (function (){var statearr_15230 = state_15221;
(statearr_15230[(10)] = inst_15199);

return statearr_15230;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15221__$1,(3),inst_15200);
} else {
if((state_val_15222 === (9))){
var inst_15209 = (state_15221[(2)]);
var inst_15210 = farn.rex.get_rex_phrase.call(null);
var inst_15211 = farn.rex.say.call(null,rex,rex_talks,ui_stage,inst_15210);
var state_15221__$1 = (function (){var statearr_15231 = state_15221;
(statearr_15231[(11)] = inst_15209);

return statearr_15231;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15221__$1,(10),inst_15211);
} else {
if((state_val_15222 === (5))){
var inst_15219 = (state_15221[(2)]);
var state_15221__$1 = state_15221;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15221__$1,inst_15219);
} else {
if((state_val_15222 === (10))){
var inst_15213 = (state_15221[(2)]);
var state_15221__$1 = (function (){var statearr_15232 = state_15221;
(statearr_15232[(12)] = inst_15213);

return statearr_15232;
})();
var statearr_15233_15255 = state_15221__$1;
(statearr_15233_15255[(2)] = null);

(statearr_15233_15255[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15222 === (8))){
var inst_15217 = (state_15221[(2)]);
var state_15221__$1 = state_15221;
var statearr_15234_15256 = state_15221__$1;
(statearr_15234_15256[(2)] = inst_15217);

(statearr_15234_15256[(1)] = (5));


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
});})(c__6459__auto__,rex_talks,rex_does_nothing,rex))
;
return ((function (switch__6444__auto__,c__6459__auto__,rex_talks,rex_does_nothing,rex){
return (function() {
var state_machine__6445__auto__ = null;
var state_machine__6445__auto____0 = (function (){
var statearr_15238 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15238[(0)] = state_machine__6445__auto__);

(statearr_15238[(1)] = (1));

return statearr_15238;
});
var state_machine__6445__auto____1 = (function (state_15221){
while(true){
var ret_value__6446__auto__ = (function (){try{while(true){
var result__6447__auto__ = switch__6444__auto__.call(null,state_15221);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6447__auto__;
}
break;
}
}catch (e15239){if((e15239 instanceof Object)){
var ex__6448__auto__ = e15239;
var statearr_15240_15257 = state_15221;
(statearr_15240_15257[(5)] = ex__6448__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15221);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15239;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15258 = state_15221;
state_15221 = G__15258;
continue;
} else {
return ret_value__6446__auto__;
}
break;
}
});
state_machine__6445__auto__ = function(state_15221){
switch(arguments.length){
case 0:
return state_machine__6445__auto____0.call(this);
case 1:
return state_machine__6445__auto____1.call(this,state_15221);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6445__auto____0;
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6445__auto____1;
return state_machine__6445__auto__;
})()
;})(switch__6444__auto__,c__6459__auto__,rex_talks,rex_does_nothing,rex))
})();
var state__6461__auto__ = (function (){var statearr_15241 = f__6460__auto__.call(null);
(statearr_15241[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6459__auto__);

return statearr_15241;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6461__auto__);
});})(c__6459__auto__,rex_talks,rex_does_nothing,rex))
);

return c__6459__auto__;
});

//# sourceMappingURL=rex.js.map