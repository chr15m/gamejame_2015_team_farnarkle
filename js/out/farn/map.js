// Compiled by ClojureScript 0.0-2511
goog.provide('farn.map');
goog.require('cljs.core');
goog.require('cljs.core.async');
farn.map.perlin_map_generator = (function perlin_map_generator(){
var c = cljs.core.async.chan.call(null);
map((23),(1000),(1000),((function (c){
return (function (t){
return cljs.core.async.put_BANG_.call(null,c,t);
});})(c))
);

return c;
});

//# sourceMappingURL=map.js.map