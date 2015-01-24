// Compiled by ClojureScript 0.0-2511
goog.provide('cljs_jam.sound');
goog.require('cljs.core');
goog.require('cljs.core.async');
cljs_jam.sound.audio_context = (cljs.core.truth_(window.AudioContext)?(new window.AudioContext()):(new window.webkitAudioContext()));
cljs_jam.sound.default_gain = 0.7;
/**
* Initiates a download of the url as a sound. Returns a channel.
* When loaded and decoded, sends a decoded buffer object down the
* channel. This buffer can be used directly as a sound source
*/
cljs_jam.sound.load_sound = (function load_sound(url){
var req = (new XMLHttpRequest());
var c = cljs.core.async.chan.call(null);
req.open("GET",url,true);

req.responseType = "arraybuffer";

req.onload = ((function (req,c){
return (function (){
return cljs_jam.sound.audio_context.decodeAudioData(req.response,((function (req,c){
return (function (p1__11328_SHARP_){
return cljs.core.async.put_BANG_.call(null,c,p1__11328_SHARP_);
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
*/
cljs_jam.sound.play_sound = (function() {
var play_sound = null;
var play_sound__1 = (function (buff){
return play_sound.call(null,buff,cljs_jam.sound.default_gain);
});
var play_sound__2 = (function (buff,g){
var source = cljs_jam.sound.audio_context.createBufferSource();
var gain = cljs_jam.sound.audio_context.createGain();
source.buffer = buff;

source.connect(gain);

gain.connect(cljs_jam.sound.audio_context.destination);

gain.gain.value = g;

return source.start((0));
});
play_sound = function(buff,g){
switch(arguments.length){
case 1:
return play_sound__1.call(this,buff);
case 2:
return play_sound__2.call(this,buff,g);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
play_sound.cljs$core$IFn$_invoke$arity$1 = play_sound__1;
play_sound.cljs$core$IFn$_invoke$arity$2 = play_sound__2;
return play_sound;
})()
;

//# sourceMappingURL=sound.js.map