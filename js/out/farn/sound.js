// Compiled by ClojureScript 0.0-2511
goog.provide('farn.sound');
goog.require('cljs.core');
goog.require('cljs.core.async');
farn.sound.audio_context = (cljs.core.truth_(window.AudioContext)?(new window.AudioContext()):(new window.webkitAudioContext()));
farn.sound.default_gain = 0.7;
/**
* Initiates a download of the url as a sound. Returns a channel.
* When loaded and decoded, sends a decoded buffer object down the
* channel. This buffer can be used directly as a sound source
*/
farn.sound.load_sound = (function load_sound(url){
var req = (new XMLHttpRequest());
var c = cljs.core.async.chan.call(null);
req.open("GET",url,true);

req.responseType = "arraybuffer";

req.onload = ((function (req,c){
return (function (){
return farn.sound.audio_context.decodeAudioData(req.response,((function (req,c){
return (function (p1__13666_SHARP_){
return cljs.core.async.put_BANG_.call(null,c,p1__13666_SHARP_);
});})(req,c))
);
});})(req,c))
;

req.send();

return c;
});
/**
* pass this a buffer, and an optional gain parameter, and the
* sound will be played to the speakers
* @param {...*} var_args
*/
farn.sound.play_sound = (function() {
var play_sound = null;
var play_sound__1 = (function (buff){
return play_sound.call(null,buff,farn.sound.default_gain);
});
var play_sound__3 = (function() { 
var G__13667__delegate = function (buff,g,loop_flag){
var source = farn.sound.audio_context.createBufferSource();
var gain = farn.sound.audio_context.createGain();
if(cljs.core.truth_(loop_flag)){
source.loop = true;
} else {
}

source.buffer = buff;

source.connect(gain);

gain.connect(farn.sound.audio_context.destination);

gain.gain.value = g;

return source.start((0));
};
var G__13667 = function (buff,g,var_args){
var loop_flag = null;
if (arguments.length > 2) {
  loop_flag = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__13667__delegate.call(this,buff,g,loop_flag);};
G__13667.cljs$lang$maxFixedArity = 2;
G__13667.cljs$lang$applyTo = (function (arglist__13668){
var buff = cljs.core.first(arglist__13668);
arglist__13668 = cljs.core.next(arglist__13668);
var g = cljs.core.first(arglist__13668);
var loop_flag = cljs.core.rest(arglist__13668);
return G__13667__delegate(buff,g,loop_flag);
});
G__13667.cljs$core$IFn$_invoke$arity$variadic = G__13667__delegate;
return G__13667;
})()
;
play_sound = function(buff,g,var_args){
var loop_flag = var_args;
switch(arguments.length){
case 1:
return play_sound__1.call(this,buff);
default:
return play_sound__3.cljs$core$IFn$_invoke$arity$variadic(buff,g, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
play_sound.cljs$lang$maxFixedArity = 2;
play_sound.cljs$lang$applyTo = play_sound__3.cljs$lang$applyTo;
play_sound.cljs$core$IFn$_invoke$arity$1 = play_sound__1;
play_sound.cljs$core$IFn$_invoke$arity$variadic = play_sound__3.cljs$core$IFn$_invoke$arity$variadic;
return play_sound;
})()
;

//# sourceMappingURL=sound.js.map