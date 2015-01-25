// Compiled by ClojureScript 0.0-2511
goog.provide('farn.sprite');
goog.require('cljs.core');
goog.require('farn.utils');
goog.require('farn.gfx');
goog.require('farn.events');
goog.require('cljs.core.async');
goog.require('dommy.core');
/**
* @param {...*} var_args
*/
farn.sprite.make_sprite = (function() { 
var make_sprite__delegate = function (tex,p__9980){
var map__9982 = p__9980;
var map__9982__$1 = ((cljs.core.seq_QMARK_.call(null,map__9982))?cljs.core.apply.call(null,cljs.core.hash_map,map__9982):map__9982);
var anchor_y = cljs.core.get.call(null,map__9982__$1,new cljs.core.Keyword(null,"anchor-y","anchor-y",-1366716999),(1));
var anchor_x = cljs.core.get.call(null,map__9982__$1,new cljs.core.Keyword(null,"anchor-x","anchor-x",-1597588837),0.5);
var s = farn.gfx.make_sprite.call(null,tex);
farn.sprite.set_anchor_BANG_.call(null,s,anchor_x,anchor_y);

return s;
};
var make_sprite = function (tex,var_args){
var p__9980 = null;
if (arguments.length > 1) {
  p__9980 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return make_sprite__delegate.call(this,tex,p__9980);};
make_sprite.cljs$lang$maxFixedArity = 1;
make_sprite.cljs$lang$applyTo = (function (arglist__9983){
var tex = cljs.core.first(arglist__9983);
var p__9980 = cljs.core.rest(arglist__9983);
return make_sprite__delegate(tex,p__9980);
});
make_sprite.cljs$core$IFn$_invoke$arity$variadic = make_sprite__delegate;
return make_sprite;
})()
;
farn.sprite.set_pos_BANG_ = (function() {
var set_pos_BANG_ = null;
var set_pos_BANG___2 = (function (sprite,p__9984){
var vec__9986 = p__9984;
var x = cljs.core.nth.call(null,vec__9986,(0),null);
var y = cljs.core.nth.call(null,vec__9986,(1),null);
return set_pos_BANG_.call(null,sprite,x,y);
});
var set_pos_BANG___3 = (function (sprite,x,y){
sprite.position.x = x;

return sprite.position.y = y;
});
set_pos_BANG_ = function(sprite,x,y){
switch(arguments.length){
case 2:
return set_pos_BANG___2.call(this,sprite,x);
case 3:
return set_pos_BANG___3.call(this,sprite,x,y);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
set_pos_BANG_.cljs$core$IFn$_invoke$arity$2 = set_pos_BANG___2;
set_pos_BANG_.cljs$core$IFn$_invoke$arity$3 = set_pos_BANG___3;
return set_pos_BANG_;
})()
;
farn.sprite.set_anchor_BANG_ = (function set_anchor_BANG_(sprite,x,y){
return sprite.anchor = farn.gfx.make_point.call(null,x,y);
});
farn.sprite.set_pivot_BANG_ = (function set_pivot_BANG_(sprite,x,y){
sprite.pivot.x = x;

return sprite.pivot.y = y;
});
farn.sprite.set_scale_BANG_ = (function set_scale_BANG_(sprite,s){
return sprite.scale = farn.gfx.make_point.call(null,s,s);
});
farn.sprite.set_rotation_BANG_ = (function set_rotation_BANG_(sprite,r){
return sprite.rotation = r;
});
farn.sprite.set_alpha_BANG_ = (function set_alpha_BANG_(sprite,a){
return sprite.alpha = a;
});
farn.sprite.set_x_BANG_ = (function set_x_BANG_(sprite,x){
return sprite.position.x = x;
});
farn.sprite.set_y_BANG_ = (function set_y_BANG_(sprite,y){
return sprite.position.y = y;
});
farn.sprite.get_x = (function get_x(sprite){
return sprite.position.x;
});
farn.sprite.get_y = (function get_y(sprite){
return sprite.position.y;
});
farn.sprite.get_pos = (function get_pos(sprite){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sprite.position.x,sprite.position.y], null);
});
/**
* pass in a PIXI Rectangle, and this returns the vector
* [left right top bottom] each one being a coordinate
* value
*/
farn.sprite.edges_from_rect = (function edges_from_rect(r){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [r.x,(r.x + r.width),r.y,(r.y + r.height)], null);
});
/**
* given two rectangles. Do they overlap?
*/
farn.sprite.rectangles_overlap_QMARK_ = (function rectangles_overlap_QMARK_(r1,r2){
var vec__9989 = farn.sprite.edges_from_rect.call(null,r1);
var l1 = cljs.core.nth.call(null,vec__9989,(0),null);
var r1__$1 = cljs.core.nth.call(null,vec__9989,(1),null);
var t1 = cljs.core.nth.call(null,vec__9989,(2),null);
var b1 = cljs.core.nth.call(null,vec__9989,(3),null);
var vec__9990 = farn.sprite.edges_from_rect.call(null,r2);
var l2 = cljs.core.nth.call(null,vec__9990,(0),null);
var r2__$1 = cljs.core.nth.call(null,vec__9990,(1),null);
var t2 = cljs.core.nth.call(null,vec__9990,(2),null);
var b2 = cljs.core.nth.call(null,vec__9990,(3),null);
if((r1__$1 < l2)){
return false;
} else {
if((l1 > r2__$1)){
return false;
} else {
if((b1 < t2)){
return false;
} else {
if((t1 > b2)){
return false;
} else {
return true;

}
}
}
}
});
/**
* do the bounding boxes of the two sprites overlap?
*/
farn.sprite.overlap_QMARK_ = (function overlap_QMARK_(s1,s2){
return farn.sprite.rectangles_overlap_QMARK_.call(null,s1.getBounds(),s2.getBounds());
});

//# sourceMappingURL=sprite.js.map