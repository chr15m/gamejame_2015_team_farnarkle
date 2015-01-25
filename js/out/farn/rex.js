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
farn.rex.rex_phrases = new cljs.core.PersistentVector(null, 18, 5, cljs.core.PersistentVector.EMPTY_NODE, ["What do we do now?","I'm sick of asking!","Who knows!","Maybe theres an alien baby lost in these woods...","I can hear that baby crying!","Why don't you go find the source of that sobbing?","Is there anything else to do on this planet?","These human brains are puny... but tasty!","Scenario brothers galaxy woohoo!","Nee mee nee mee nee.","If a tree falls in a forest, and no alien is there to hear it...","What was I when I wasn't what I am? What will I be when I'm not?","What is the sound of one baby crying? hint, hint...","These plants are very perculiar. Our leader will be pleased!","Try and make contact with the flowers","Ramma Lamma Ding Dong!","The hive mind is calling me home.","Once the baby is recovered, this planet can be purged"], null);
farn.rex.launch_rex = (function launch_rex(ui_stage){
var rex_talks = cljs.core.doall.call(null,(function (){var iter__4386__auto__ = (function iter__14922(s__14923){
return (new cljs.core.LazySeq(null,(function (){
var s__14923__$1 = s__14923;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__14923__$1);
if(temp__4126__auto__){
var s__14923__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__14923__$2)){
var c__4384__auto__ = cljs.core.chunk_first.call(null,s__14923__$2);
var size__4385__auto__ = cljs.core.count.call(null,c__4384__auto__);
var b__14925 = cljs.core.chunk_buffer.call(null,size__4385__auto__);
if((function (){var i__14924 = (0);
while(true){
if((i__14924 < size__4385__auto__)){
var tex_name = cljs.core._nth.call(null,c__4384__auto__,i__14924);
cljs.core.chunk_append.call(null,b__14925,farn.gfx.get_texture.call(null,tex_name));

var G__15104 = (i__14924 + (1));
i__14924 = G__15104;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14925),iter__14922.call(null,cljs.core.chunk_rest.call(null,s__14923__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14925),null);
}
} else {
var tex_name = cljs.core.first.call(null,s__14923__$2);
return cljs.core.cons.call(null,farn.gfx.get_texture.call(null,tex_name),iter__14922.call(null,cljs.core.rest.call(null,s__14923__$2)));
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
return (function iter__14926(s__14927){
return (new cljs.core.LazySeq(null,((function (rex_talks){
return (function (){
var s__14927__$1 = s__14927;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__14927__$1);
if(temp__4126__auto__){
var s__14927__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__14927__$2)){
var c__4384__auto__ = cljs.core.chunk_first.call(null,s__14927__$2);
var size__4385__auto__ = cljs.core.count.call(null,c__4384__auto__);
var b__14929 = cljs.core.chunk_buffer.call(null,size__4385__auto__);
if((function (){var i__14928 = (0);
while(true){
if((i__14928 < size__4385__auto__)){
var tex_name = cljs.core._nth.call(null,c__4384__auto__,i__14928);
cljs.core.chunk_append.call(null,b__14929,farn.gfx.get_texture.call(null,tex_name));

var G__15105 = (i__14928 + (1));
i__14928 = G__15105;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14929),iter__14926.call(null,cljs.core.chunk_rest.call(null,s__14927__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14929),null);
}
} else {
var tex_name = cljs.core.first.call(null,s__14927__$2);
return cljs.core.cons.call(null,farn.gfx.get_texture.call(null,tex_name),iter__14926.call(null,cljs.core.rest.call(null,s__14927__$2)));
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

var c__6459__auto___15106 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6459__auto___15106,rex_talks,rex_does_nothing,rex){
return (function (){
var f__6460__auto__ = (function (){var switch__6444__auto__ = ((function (c__6459__auto___15106,rex_talks,rex_does_nothing,rex){
return (function (state_14949){
var state_val_14950 = (state_14949[(1)]);
if((state_val_14950 === (7))){
var inst_14941 = (state_14949[(2)]);
var state_14949__$1 = (function (){var statearr_14951 = state_14949;
(statearr_14951[(7)] = inst_14941);

return statearr_14951;
})();
var statearr_14952_15107 = state_14949__$1;
(statearr_14952_15107[(2)] = null);

(statearr_14952_15107[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14950 === (6))){
var inst_14945 = (state_14949[(2)]);
var state_14949__$1 = state_14949;
var statearr_14953_15108 = state_14949__$1;
(statearr_14953_15108[(2)] = inst_14945);

(statearr_14953_15108[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14950 === (5))){
var state_14949__$1 = state_14949;
var statearr_14954_15109 = state_14949__$1;
(statearr_14954_15109[(2)] = null);

(statearr_14954_15109[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14950 === (4))){
var inst_14930 = (state_14949[(8)]);
var inst_14933 = window.innerWidth;
var inst_14934 = window.innerHeight;
var inst_14935 = (inst_14933 / (2));
var inst_14936 = (inst_14934 / (2));
var inst_14937 = (inst_14935 - (100));
var inst_14938 = (inst_14936 - (80));
var inst_14939 = farn.sprite.set_pos_BANG_.call(null,rex,inst_14937,inst_14938);
var state_14949__$1 = (function (){var statearr_14955 = state_14949;
(statearr_14955[(9)] = inst_14939);

return statearr_14955;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14949__$1,(7),inst_14930);
} else {
if((state_val_14950 === (3))){
var inst_14947 = (state_14949[(2)]);
var state_14949__$1 = state_14949;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14949__$1,inst_14947);
} else {
if((state_val_14950 === (2))){
var state_14949__$1 = state_14949;
var statearr_14956_15110 = state_14949__$1;
(statearr_14956_15110[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14950 === (1))){
var inst_14930 = farn.events.new_resize_chan.call(null);
var state_14949__$1 = (function (){var statearr_14958 = state_14949;
(statearr_14958[(8)] = inst_14930);

return statearr_14958;
})();
var statearr_14959_15111 = state_14949__$1;
(statearr_14959_15111[(2)] = null);

(statearr_14959_15111[(1)] = (2));


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
});})(c__6459__auto___15106,rex_talks,rex_does_nothing,rex))
;
return ((function (switch__6444__auto__,c__6459__auto___15106,rex_talks,rex_does_nothing,rex){
return (function() {
var state_machine__6445__auto__ = null;
var state_machine__6445__auto____0 = (function (){
var statearr_14963 = [null,null,null,null,null,null,null,null,null,null];
(statearr_14963[(0)] = state_machine__6445__auto__);

(statearr_14963[(1)] = (1));

return statearr_14963;
});
var state_machine__6445__auto____1 = (function (state_14949){
while(true){
var ret_value__6446__auto__ = (function (){try{while(true){
var result__6447__auto__ = switch__6444__auto__.call(null,state_14949);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6447__auto__;
}
break;
}
}catch (e14964){if((e14964 instanceof Object)){
var ex__6448__auto__ = e14964;
var statearr_14965_15112 = state_14949;
(statearr_14965_15112[(5)] = ex__6448__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14949);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14964;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15113 = state_14949;
state_14949 = G__15113;
continue;
} else {
return ret_value__6446__auto__;
}
break;
}
});
state_machine__6445__auto__ = function(state_14949){
switch(arguments.length){
case 0:
return state_machine__6445__auto____0.call(this);
case 1:
return state_machine__6445__auto____1.call(this,state_14949);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6445__auto____0;
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6445__auto____1;
return state_machine__6445__auto__;
})()
;})(switch__6444__auto__,c__6459__auto___15106,rex_talks,rex_does_nothing,rex))
})();
var state__6461__auto__ = (function (){var statearr_14966 = f__6460__auto__.call(null);
(statearr_14966[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6459__auto___15106);

return statearr_14966;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6461__auto__);
});})(c__6459__auto___15106,rex_talks,rex_does_nothing,rex))
);


var c__6459__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6459__auto__,rex_talks,rex_does_nothing,rex){
return (function (){
var f__6460__auto__ = (function (){var switch__6444__auto__ = ((function (c__6459__auto__,rex_talks,rex_does_nothing,rex){
return (function (state_15051){
var state_val_15052 = (state_15051[(1)]);
if((state_val_15052 === (7))){
var inst_14973 = (state_15051[(2)]);
var inst_15025 = cljs.core.async.chan.call(null,(1));
var inst_15026 = (function (){var c__6459__auto____$1 = inst_15025;
return ((function (c__6459__auto____$1,inst_14973,inst_15025,state_val_15052,c__6459__auto__,rex_talks,rex_does_nothing,rex){
return (function (){
var f__6460__auto__ = (function (){var switch__6444__auto__ = ((function (c__6459__auto____$1,inst_14973,inst_15025,state_val_15052,c__6459__auto__,rex_talks,rex_does_nothing,rex){
return (function (state_15023){
var state_val_15024 = (state_15023[(1)]);
if((state_val_15024 === (7))){
var inst_14997 = (state_15023[(2)]);
var state_15023__$1 = state_15023;
var statearr_15053_15114 = state_15023__$1;
(statearr_15053_15114[(2)] = inst_14997);

(statearr_15053_15114[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15024 === (1))){
var inst_14975 = (state_15023[(7)]);
var inst_14974 = cljs.core.rand_nth.call(null,farn.rex.rex_phrases);
var inst_14975__$1 = farn.font.make_text.call(null,"400 24pt Varela Round",inst_14974,new cljs.core.Keyword(null,"weight","weight",-1262796205),(400),new cljs.core.Keyword(null,"fill","fill",883462889),"#ffffff",new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#000000",new cljs.core.Keyword(null,"strokeThickness","strokeThickness",-1303725323),(1));
var inst_14976 = window.innerWidth;
var inst_14977 = window.innerHeight;
var inst_14978 = (inst_14976 / (2));
var inst_14979 = (inst_14977 / (2));
var inst_14980 = farn.sprite.set_pos_BANG_.call(null,inst_14975__$1,(0),(10000));
var inst_14981 = ui_stage.addChild(inst_14975__$1);
var inst_14982 = (0);
var state_15023__$1 = (function (){var statearr_15054 = state_15023;
(statearr_15054[(8)] = inst_14982);

(statearr_15054[(9)] = inst_14980);

(statearr_15054[(7)] = inst_14975__$1);

(statearr_15054[(10)] = inst_14979);

(statearr_15054[(11)] = inst_14978);

(statearr_15054[(12)] = inst_14981);

return statearr_15054;
})();
var statearr_15055_15115 = state_15023__$1;
(statearr_15055_15115[(2)] = null);

(statearr_15055_15115[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15024 === (4))){
var inst_14982 = (state_15023[(8)]);
var inst_14975 = (state_15023[(7)]);
var inst_14979 = (state_15023[(10)]);
var inst_14986 = (state_15023[(2)]);
var inst_14987 = ((50) - inst_14982);
var inst_14988 = Math.pow(inst_14987,farn.rex.word_entry_speed);
var inst_14989 = (inst_14979 - (30));
var inst_14990 = farn.sprite.set_pos_BANG_.call(null,inst_14975,inst_14988,inst_14989);
var inst_14991 = (inst_14982 < (50));
var state_15023__$1 = (function (){var statearr_15056 = state_15023;
(statearr_15056[(13)] = inst_14990);

(statearr_15056[(14)] = inst_14986);

return statearr_15056;
})();
if(cljs.core.truth_(inst_14991)){
var statearr_15057_15116 = state_15023__$1;
(statearr_15057_15116[(1)] = (5));

} else {
var statearr_15058_15117 = state_15023__$1;
(statearr_15058_15117[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15024 === (13))){
var state_15023__$1 = state_15023;
var statearr_15059_15118 = state_15023__$1;
(statearr_15059_15118[(2)] = null);

(statearr_15059_15118[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15024 === (6))){
var state_15023__$1 = state_15023;
var statearr_15060_15119 = state_15023__$1;
(statearr_15060_15119[(2)] = null);

(statearr_15060_15119[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15024 === (3))){
var inst_14999 = (state_15023[(2)]);
var inst_15000 = cljs.core.async.timeout.call(null,(3000));
var state_15023__$1 = (function (){var statearr_15061 = state_15023;
(statearr_15061[(15)] = inst_14999);

return statearr_15061;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15023__$1,(8),inst_15000);
} else {
if((state_val_15024 === (12))){
var inst_15003 = (state_15023[(16)]);
var inst_15014 = (inst_15003 + (1));
var inst_15003__$1 = inst_15014;
var state_15023__$1 = (function (){var statearr_15062 = state_15023;
(statearr_15062[(16)] = inst_15003__$1);

return statearr_15062;
})();
var statearr_15063_15120 = state_15023__$1;
(statearr_15063_15120[(2)] = null);

(statearr_15063_15120[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15024 === (2))){
var inst_14984 = farn.events.next_frame.call(null);
var state_15023__$1 = state_15023;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15023__$1,(4),inst_14984);
} else {
if((state_val_15024 === (11))){
var inst_15003 = (state_15023[(16)]);
var inst_14975 = (state_15023[(7)]);
var inst_14979 = (state_15023[(10)]);
var inst_15007 = (state_15023[(2)]);
var inst_15008 = Math.pow(inst_15003,farn.rex.word_exit_speed);
var inst_15009 = (- inst_15008);
var inst_15010 = (inst_14979 - (30));
var inst_15011 = farn.sprite.set_pos_BANG_.call(null,inst_14975,inst_15009,inst_15010);
var inst_15012 = (inst_15003 < (50));
var state_15023__$1 = (function (){var statearr_15064 = state_15023;
(statearr_15064[(17)] = inst_15007);

(statearr_15064[(18)] = inst_15011);

return statearr_15064;
})();
if(cljs.core.truth_(inst_15012)){
var statearr_15065_15121 = state_15023__$1;
(statearr_15065_15121[(1)] = (12));

} else {
var statearr_15066_15122 = state_15023__$1;
(statearr_15066_15122[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15024 === (9))){
var inst_15005 = farn.events.next_frame.call(null);
var state_15023__$1 = state_15023;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15023__$1,(11),inst_15005);
} else {
if((state_val_15024 === (5))){
var inst_14982 = (state_15023[(8)]);
var inst_14993 = (inst_14982 + (1));
var inst_14982__$1 = inst_14993;
var state_15023__$1 = (function (){var statearr_15067 = state_15023;
(statearr_15067[(8)] = inst_14982__$1);

return statearr_15067;
})();
var statearr_15068_15123 = state_15023__$1;
(statearr_15068_15123[(2)] = null);

(statearr_15068_15123[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15024 === (14))){
var inst_15018 = (state_15023[(2)]);
var state_15023__$1 = state_15023;
var statearr_15069_15124 = state_15023__$1;
(statearr_15069_15124[(2)] = inst_15018);

(statearr_15069_15124[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15024 === (10))){
var inst_14975 = (state_15023[(7)]);
var inst_15020 = (state_15023[(2)]);
var inst_15021 = ui_stage.removeChild(inst_14975);
var state_15023__$1 = (function (){var statearr_15070 = state_15023;
(statearr_15070[(19)] = inst_15020);

return statearr_15070;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15023__$1,inst_15021);
} else {
if((state_val_15024 === (8))){
var inst_15002 = (state_15023[(2)]);
var inst_15003 = (0);
var state_15023__$1 = (function (){var statearr_15071 = state_15023;
(statearr_15071[(16)] = inst_15003);

(statearr_15071[(20)] = inst_15002);

return statearr_15071;
})();
var statearr_15072_15125 = state_15023__$1;
(statearr_15072_15125[(2)] = null);

(statearr_15072_15125[(1)] = (9));


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
});})(c__6459__auto____$1,inst_14973,inst_15025,state_val_15052,c__6459__auto__,rex_talks,rex_does_nothing,rex))
;
return ((function (switch__6444__auto__,c__6459__auto____$1,inst_14973,inst_15025,state_val_15052,c__6459__auto__,rex_talks,rex_does_nothing,rex){
return (function() {
var state_machine__6445__auto__ = null;
var state_machine__6445__auto____0 = (function (){
var statearr_15076 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15076[(0)] = state_machine__6445__auto__);

(statearr_15076[(1)] = (1));

return statearr_15076;
});
var state_machine__6445__auto____1 = (function (state_15023){
while(true){
var ret_value__6446__auto__ = (function (){try{while(true){
var result__6447__auto__ = switch__6444__auto__.call(null,state_15023);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6447__auto__;
}
break;
}
}catch (e15077){if((e15077 instanceof Object)){
var ex__6448__auto__ = e15077;
var statearr_15078_15126 = state_15023;
(statearr_15078_15126[(5)] = ex__6448__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15023);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15077;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15127 = state_15023;
state_15023 = G__15127;
continue;
} else {
return ret_value__6446__auto__;
}
break;
}
});
state_machine__6445__auto__ = function(state_15023){
switch(arguments.length){
case 0:
return state_machine__6445__auto____0.call(this);
case 1:
return state_machine__6445__auto____1.call(this,state_15023);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6445__auto____0;
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6445__auto____1;
return state_machine__6445__auto__;
})()
;})(switch__6444__auto__,c__6459__auto____$1,inst_14973,inst_15025,state_val_15052,c__6459__auto__,rex_talks,rex_does_nothing,rex))
})();
var state__6461__auto__ = (function (){var statearr_15079 = f__6460__auto__.call(null);
(statearr_15079[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6459__auto____$1);

return statearr_15079;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6461__auto__);
});
;})(c__6459__auto____$1,inst_14973,inst_15025,state_val_15052,c__6459__auto__,rex_talks,rex_does_nothing,rex))
})();
var inst_15027 = cljs.core.async.impl.dispatch.run.call(null,inst_15026);
var inst_15028 = (50);
var state_15051__$1 = (function (){var statearr_15080 = state_15051;
(statearr_15080[(7)] = inst_14973);

(statearr_15080[(8)] = inst_15028);

(statearr_15080[(9)] = inst_15027);

return statearr_15080;
})();
var statearr_15081_15128 = state_15051__$1;
(statearr_15081_15128[(2)] = null);

(statearr_15081_15128[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15052 === (1))){
var state_15051__$1 = state_15051;
var statearr_15082_15129 = state_15051__$1;
(statearr_15082_15129[(2)] = null);

(statearr_15082_15129[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15052 === (4))){
var inst_14969 = cljs.core.rand_nth.call(null,rex_does_nothing);
var inst_14970 = rex.setTexture(inst_14969);
var inst_14971 = cljs.core.async.timeout.call(null,(10000));
var state_15051__$1 = (function (){var statearr_15083 = state_15051;
(statearr_15083[(10)] = inst_14970);

return statearr_15083;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15051__$1,(7),inst_14971);
} else {
if((state_val_15052 === (13))){
var inst_15041 = (state_15051[(2)]);
var state_15051__$1 = state_15051;
var statearr_15084_15130 = state_15051__$1;
(statearr_15084_15130[(2)] = inst_15041);

(statearr_15084_15130[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15052 === (6))){
var inst_15047 = (state_15051[(2)]);
var state_15051__$1 = state_15051;
var statearr_15085_15131 = state_15051__$1;
(statearr_15085_15131[(2)] = inst_15047);

(statearr_15085_15131[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15052 === (3))){
var inst_15049 = (state_15051[(2)]);
var state_15051__$1 = state_15051;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15051__$1,inst_15049);
} else {
if((state_val_15052 === (12))){
var state_15051__$1 = state_15051;
var statearr_15086_15132 = state_15051__$1;
(statearr_15086_15132[(2)] = null);

(statearr_15086_15132[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15052 === (2))){
var state_15051__$1 = state_15051;
var statearr_15087_15133 = state_15051__$1;
(statearr_15087_15133[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15052 === (11))){
var inst_15028 = (state_15051[(8)]);
var inst_15037 = (inst_15028 - (1));
var inst_15028__$1 = inst_15037;
var state_15051__$1 = (function (){var statearr_15089 = state_15051;
(statearr_15089[(8)] = inst_15028__$1);

return statearr_15089;
})();
var statearr_15090_15134 = state_15051__$1;
(statearr_15090_15134[(2)] = null);

(statearr_15090_15134[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15052 === (9))){
var inst_15043 = (state_15051[(2)]);
var state_15051__$1 = (function (){var statearr_15091 = state_15051;
(statearr_15091[(11)] = inst_15043);

return statearr_15091;
})();
var statearr_15092_15135 = state_15051__$1;
(statearr_15092_15135[(2)] = null);

(statearr_15092_15135[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15052 === (5))){
var state_15051__$1 = state_15051;
var statearr_15093_15136 = state_15051__$1;
(statearr_15093_15136[(2)] = null);

(statearr_15093_15136[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15052 === (10))){
var inst_15028 = (state_15051[(8)]);
var inst_15032 = (state_15051[(2)]);
var inst_15033 = cljs.core.rand_nth.call(null,rex_talks);
var inst_15034 = rex.setTexture(inst_15033);
var inst_15035 = (inst_15028 > (0));
var state_15051__$1 = (function (){var statearr_15094 = state_15051;
(statearr_15094[(12)] = inst_15032);

(statearr_15094[(13)] = inst_15034);

return statearr_15094;
})();
if(cljs.core.truth_(inst_15035)){
var statearr_15095_15137 = state_15051__$1;
(statearr_15095_15137[(1)] = (11));

} else {
var statearr_15096_15138 = state_15051__$1;
(statearr_15096_15138[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15052 === (8))){
var inst_15030 = cljs.core.async.timeout.call(null,(60));
var state_15051__$1 = state_15051;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15051__$1,(10),inst_15030);
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
var statearr_15100 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15100[(0)] = state_machine__6445__auto__);

(statearr_15100[(1)] = (1));

return statearr_15100;
});
var state_machine__6445__auto____1 = (function (state_15051){
while(true){
var ret_value__6446__auto__ = (function (){try{while(true){
var result__6447__auto__ = switch__6444__auto__.call(null,state_15051);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6447__auto__;
}
break;
}
}catch (e15101){if((e15101 instanceof Object)){
var ex__6448__auto__ = e15101;
var statearr_15102_15139 = state_15051;
(statearr_15102_15139[(5)] = ex__6448__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15051);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15101;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15140 = state_15051;
state_15051 = G__15140;
continue;
} else {
return ret_value__6446__auto__;
}
break;
}
});
state_machine__6445__auto__ = function(state_15051){
switch(arguments.length){
case 0:
return state_machine__6445__auto____0.call(this);
case 1:
return state_machine__6445__auto____1.call(this,state_15051);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6445__auto____0;
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6445__auto____1;
return state_machine__6445__auto__;
})()
;})(switch__6444__auto__,c__6459__auto__,rex_talks,rex_does_nothing,rex))
})();
var state__6461__auto__ = (function (){var statearr_15103 = f__6460__auto__.call(null);
(statearr_15103[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6459__auto__);

return statearr_15103;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6461__auto__);
});})(c__6459__auto__,rex_talks,rex_does_nothing,rex))
);

return c__6459__auto__;
});

//# sourceMappingURL=rex.js.map