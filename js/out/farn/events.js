// Compiled by ClojureScript 0.0-2511
goog.provide('farn.events');
goog.require('cljs.core');
goog.require('cljs.core.async');
if(typeof farn.events._STAR_debug_event_handlers_STAR_ !== 'undefined'){
} else {
farn.events._STAR_debug_event_handlers_STAR_ = false;
}
if(typeof farn.events._STAR_devtools_passthrough_STAR_ !== 'undefined'){
} else {
farn.events._STAR_devtools_passthrough_STAR_ = true;
}
if(typeof farn.events._STAR_target_fps_STAR_ !== 'undefined'){
} else {
farn.events._STAR_target_fps_STAR_ = (60);
}
if(typeof farn.events._STAR_pixi_renderer_STAR_ !== 'undefined'){
} else {
farn.events._STAR_pixi_renderer_STAR_ = cljs.core.atom.call(null,null);
}
farn.events.key_state = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
farn.events.ascii = (function ascii(c){
return c.charCodeAt((0));
});
farn.events.key_codes = cljs.core.into.call(null,cljs.core.into.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"shift","shift",997140064),new cljs.core.Keyword(null,"down","down",1565245570),new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"home","home",-74557309),new cljs.core.Keyword(null,"insert","insert",1286475395),new cljs.core.Keyword(null,"f8","f8",-2141475484),new cljs.core.Keyword(null,"f1","f1",1714532389),new cljs.core.Keyword(null,"f10","f10",627525541),new cljs.core.Keyword(null,"alt","alt",-3214426),new cljs.core.Keyword(null,"esc","esc",-1671924121),new cljs.core.Keyword(null,"comma","comma",1699024745),new cljs.core.Keyword(null,"numlock","numlock",-1383996470),new cljs.core.Keyword(null,"f5","f5",1587057387),new cljs.core.Keyword(null,"pageup","pageup",1714543403),new cljs.core.Keyword(null,"delete","delete",-1768633620),new cljs.core.Keyword(null,"/","/",1282502798),new cljs.core.Keyword(null,"up","up",-269712113),new cljs.core.Keyword(null,"enter","enter",1792452624),new cljs.core.Keyword(null,"backtick","backtick",44770640),new cljs.core.Keyword(null,"f11","f11",-1417398799),new cljs.core.Keyword(null,".",".",335144435),new cljs.core.Keyword(null,"f3","f3",1954829043),new cljs.core.Keyword(null,"quote","quote",-262615245),new cljs.core.Keyword(null,"f2","f2",396168596),new cljs.core.Keyword(null,"control","control",1892578036),new cljs.core.Keyword(null,"squareleft","squareleft",-1212370731),new cljs.core.Keyword(null,"scrolllock","scrolllock",-960203019),new cljs.core.Keyword(null,"f12","f12",853352790),new cljs.core.Keyword(null,"capslock","capslock",442493366),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"pagedown","pagedown",-2069718984),new cljs.core.Keyword(null,"pause","pause",-2095325672),new cljs.core.Keyword(null,"backspace","backspace",-696007848),new cljs.core.Keyword(null,"f7","f7",356150168),new cljs.core.Keyword(null,"f9","f9",704633338),new cljs.core.Keyword(null,"end","end",-268185958),new cljs.core.Keyword(null,"tab","tab",-559583621),new cljs.core.Keyword(null,"f6","f6",2103080604),new cljs.core.Keyword(null,"f4","f4",990968764),new cljs.core.Keyword(null,"backslash","backslash",1790786526),new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.Keyword(null,"squareright","squareright",1890515359)],[(16),(40),(32),(36),(45),(119),(112),(121),(18),(27),(188),(144),(116),(33),(46),(191),(38),(13),(192),(122),(190),(114),(222),(113),(17),(219),(145),(123),(20),(39),(34),(19),(8),(118),(120),(35),(9),(117),(115),(220),(37),(221)]),(function (){var iter__4386__auto__ = (function iter__13211(s__13212){
return (new cljs.core.LazySeq(null,(function (){
var s__13212__$1 = s__13212;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__13212__$1);
if(temp__4126__auto__){
var s__13212__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__13212__$2)){
var c__4384__auto__ = cljs.core.chunk_first.call(null,s__13212__$2);
var size__4385__auto__ = cljs.core.count.call(null,c__4384__auto__);
var b__13214 = cljs.core.chunk_buffer.call(null,size__4385__auto__);
if((function (){var i__13213 = (0);
while(true){
if((i__13213 < size__4385__auto__)){
var c = cljs.core._nth.call(null,c__4384__auto__,i__13213);
cljs.core.chunk_append.call(null,b__13214,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,[cljs.core.str(c)].join('')),(farn.events.ascii.call(null,c) - (32))], null));

var G__13219 = (i__13213 + (1));
i__13213 = G__13219;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13214),iter__13211.call(null,cljs.core.chunk_rest.call(null,s__13212__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13214),null);
}
} else {
var c = cljs.core.first.call(null,s__13212__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,[cljs.core.str(c)].join('')),(farn.events.ascii.call(null,c) - (32))], null),iter__13211.call(null,cljs.core.rest.call(null,s__13212__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4386__auto__.call(null,"0123456789abcdefghijklmnopqrstuvwxyz");
})()),(function (){var iter__4386__auto__ = (function iter__13215(s__13216){
return (new cljs.core.LazySeq(null,(function (){
var s__13216__$1 = s__13216;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__13216__$1);
if(temp__4126__auto__){
var s__13216__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__13216__$2)){
var c__4384__auto__ = cljs.core.chunk_first.call(null,s__13216__$2);
var size__4385__auto__ = cljs.core.count.call(null,c__4384__auto__);
var b__13218 = cljs.core.chunk_buffer.call(null,size__4385__auto__);
if((function (){var i__13217 = (0);
while(true){
if((i__13217 < size__4385__auto__)){
var c = cljs.core._nth.call(null,c__4384__auto__,i__13217);
cljs.core.chunk_append.call(null,b__13218,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,(farn.events.ascii.call(null,c) - (32))], null));

var G__13220 = (i__13217 + (1));
i__13217 = G__13220;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13218),iter__13215.call(null,cljs.core.chunk_rest.call(null,s__13216__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13218),null);
}
} else {
var c = cljs.core.first.call(null,s__13216__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,(farn.events.ascii.call(null,c) - (32))], null),iter__13215.call(null,cljs.core.rest.call(null,s__13216__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4386__auto__.call(null,"0123456789abcdefghijklmnopqrstuvwxyz");
})());
/**
* the base event handler for key down events. Takes the keycode
* and sets that key in the key-state dictionary to true
*/
farn.events.handle_keydown_event = (function handle_keydown_event(ev){
if(cljs.core.truth_(farn.events._STAR_debug_event_handlers_STAR_)){
console.log(ev);
} else {
}

cljs.core.swap_BANG_.call(null,farn.events.key_state,(function (old){
return cljs.core.assoc.call(null,old,ev.keyCode,true);
}));

if(cljs.core.truth_((function (){var and__3618__auto__ = farn.events._STAR_devtools_passthrough_STAR_;
if(cljs.core.truth_(and__3618__auto__)){
var and__3618__auto____$1 = ev.ctrlKey;
if(cljs.core.truth_(and__3618__auto____$1)){
return ev.shiftKey;
} else {
return and__3618__auto____$1;
}
} else {
return and__3618__auto__;
}
})())){
return false;
} else {
return ev.preventDefault();
}
});
/**
* the basic event handler for key up events. Takes the keycode
* and removes it as a key from the key-state dictionary
*/
farn.events.handle_keyup_event = (function handle_keyup_event(ev){
cljs.core.swap_BANG_.call(null,farn.events.key_state,(function (old){
return cljs.core.dissoc.call(null,old,ev.keyCode);
}));

ev.preventDefault();

return true;
});
/**
* install the keyup and keydown event handlers
*/
farn.events.install_key_handler = (function install_key_handler(){
window.addEventListener("keydown",farn.events.handle_keydown_event);

return window.addEventListener("keyup",farn.events.handle_keyup_event);
});
/**
* returns true if the key is pressently down
*/
farn.events.is_pressed_QMARK_ = (function is_pressed_QMARK_(code){
return cljs.core.deref.call(null,farn.events.key_state).call(null,farn.events.key_codes.call(null,code));
});
/**
* cross browser requestAnimationFrame callback installer
*/
farn.events.request_animation_frame = (function request_animation_frame(callback){
if(cljs.core.truth_(window.requestAnimationFrame)){
return window.requestAnimationFrame(callback);
} else {
if(cljs.core.truth_(window.webkitRequestAnimationFrame)){
return window.webkitRequestAnimationFrame(callback);
} else {
if(cljs.core.truth_(window.mozRequestAnimationFrame)){
return window.mozRequestAnimationFrame(callback);
} else {
if(cljs.core.truth_(window.oRequestAnimationFrame)){
return window.oRequestAnimationFrame(callback);
} else {
if(cljs.core.truth_(window.msRequestAnimationFrame)){
return window.msRequestAnimationFrame(callback);
} else {
return window.setTimeout(callback,((1000) / farn.events._STAR_target_fps_STAR_));

}
}
}
}
}
});
/**
* returns a single use channel which closes on next frame callback.
* pulling from it waits exactly one frame. eg (<! (next-frame))
*/
farn.events.next_frame = (function next_frame(){
var c = cljs.core.async.chan.call(null);
farn.events.request_animation_frame.call(null,((function (c){
return (function (){
return cljs.core.async.close_BANG_.call(null,c);
});})(c))
);

return c;
});
farn.events._STAR_resize_chans_STAR_ = cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY);
farn.events.new_resize_chan = (function new_resize_chan(){
var c = cljs.core.async.chan.call(null);
cljs.core.swap_BANG_.call(null,farn.events._STAR_resize_chans_STAR_,cljs.core.conj,c);

return c;
});
farn.events.del_resize_chan = (function del_resize_chan(c){
return cljs.core.swap_BANG_.call(null,farn.events._STAR_resize_chans_STAR_,cljs.core.disj,c);
});
farn.events.clear_resize_chans_BANG_ = (function clear_resize_chans_BANG_(){
return cljs.core.swap_BANG_.call(null,farn.events._STAR_resize_chans_STAR_,cljs.core.PersistentHashSet.EMPTY);
});
farn.events.resize_event_chan_handler = (function resize_event_chan_handler(ev){
var size = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [window.innerWidth,window.innerHeight], null);
var seq__13225 = cljs.core.seq.call(null,cljs.core.deref.call(null,farn.events._STAR_resize_chans_STAR_));
var chunk__13226 = null;
var count__13227 = (0);
var i__13228 = (0);
while(true){
if((i__13228 < count__13227)){
var c = cljs.core._nth.call(null,chunk__13226,i__13228);
cljs.core.async.put_BANG_.call(null,c,size);

var G__13229 = seq__13225;
var G__13230 = chunk__13226;
var G__13231 = count__13227;
var G__13232 = (i__13228 + (1));
seq__13225 = G__13229;
chunk__13226 = G__13230;
count__13227 = G__13231;
i__13228 = G__13232;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__13225);
if(temp__4126__auto__){
var seq__13225__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13225__$1)){
var c__4417__auto__ = cljs.core.chunk_first.call(null,seq__13225__$1);
var G__13233 = cljs.core.chunk_rest.call(null,seq__13225__$1);
var G__13234 = c__4417__auto__;
var G__13235 = cljs.core.count.call(null,c__4417__auto__);
var G__13236 = (0);
seq__13225 = G__13233;
chunk__13226 = G__13234;
count__13227 = G__13235;
i__13228 = G__13236;
continue;
} else {
var c = cljs.core.first.call(null,seq__13225__$1);
cljs.core.async.put_BANG_.call(null,c,size);

var G__13237 = cljs.core.next.call(null,seq__13225__$1);
var G__13238 = null;
var G__13239 = (0);
var G__13240 = (0);
seq__13225 = G__13237;
chunk__13226 = G__13238;
count__13227 = G__13239;
i__13228 = G__13240;
continue;
}
} else {
return null;
}
}
break;
}
});
/**
* install the resize callback to resize the main canvas renderer
*/
farn.events.install_resize_handler = (function install_resize_handler(){
return window.addEventListener("resize",farn.events.resize_event_chan_handler);
});
farn.events._STAR_frame_chans_STAR_ = cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY);
farn.events.new_frame_chan = (function new_frame_chan(){
var c = cljs.core.async.chan.call(null);
cljs.core.swap_BANG_.call(null,farn.events._STAR_frame_chans_STAR_,cljs.core.conj,c);

return c;
});
farn.events.del_frame_chan_BANG_ = (function del_frame_chan_BANG_(c){
return cljs.core.swap_BANG_.call(null,farn.events._STAR_frame_chans_STAR_,cljs.core.disj,c);
});
farn.events.clear_frame_chans_BANG_ = (function clear_frame_chans_BANG_(){
return cljs.core.swap_BANG_.call(null,farn.events._STAR_frame_chans_STAR_,cljs.core.PersistentHashSet.EMPTY);
});
farn.events.frame_event_chan_handler = (function frame_event_chan_handler(ev){
farn.events.request_animation_frame.call(null,frame_event_chan_handler);

var seq__13245 = cljs.core.seq.call(null,cljs.core.deref.call(null,farn.events._STAR_frame_chans_STAR_));
var chunk__13246 = null;
var count__13247 = (0);
var i__13248 = (0);
while(true){
if((i__13248 < count__13247)){
var c = cljs.core._nth.call(null,chunk__13246,i__13248);
cljs.core.async.put_BANG_.call(null,c,true);

var G__13249 = seq__13245;
var G__13250 = chunk__13246;
var G__13251 = count__13247;
var G__13252 = (i__13248 + (1));
seq__13245 = G__13249;
chunk__13246 = G__13250;
count__13247 = G__13251;
i__13248 = G__13252;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__13245);
if(temp__4126__auto__){
var seq__13245__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13245__$1)){
var c__4417__auto__ = cljs.core.chunk_first.call(null,seq__13245__$1);
var G__13253 = cljs.core.chunk_rest.call(null,seq__13245__$1);
var G__13254 = c__4417__auto__;
var G__13255 = cljs.core.count.call(null,c__4417__auto__);
var G__13256 = (0);
seq__13245 = G__13253;
chunk__13246 = G__13254;
count__13247 = G__13255;
i__13248 = G__13256;
continue;
} else {
var c = cljs.core.first.call(null,seq__13245__$1);
cljs.core.async.put_BANG_.call(null,c,true);

var G__13257 = cljs.core.next.call(null,seq__13245__$1);
var G__13258 = null;
var G__13259 = (0);
var G__13260 = (0);
seq__13245 = G__13257;
chunk__13246 = G__13258;
count__13247 = G__13259;
i__13248 = G__13260;
continue;
}
} else {
return null;
}
}
break;
}
});
/**
* install the frame callback to send frame chan messages
*/
farn.events.install_frame_handler = (function install_frame_handler(){
return farn.events.request_animation_frame.call(null,farn.events.frame_event_chan_handler);
});
farn.events.install_key_handler.call(null);
farn.events.install_frame_handler.call(null);
farn.events.install_resize_handler.call(null);

//# sourceMappingURL=events.js.map