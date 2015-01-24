// Compiled by ClojureScript 0.0-2511
goog.provide('farn.sprite');
goog.require('cljs.core');
goog.require('farn.utils');
goog.require('farn.gfx');
goog.require('farn.events');
goog.require('cljs.core.async');
goog.require('dommy.core');
farn.sprite.set_pos_BANG_ = (function set_pos_BANG_(sprite,x,y){
sprite.position.x = x;

return sprite.position.y = y;
});
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
return sprite.position;
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
var vec__9947 = farn.sprite.edges_from_rect.call(null,r1);
var l1 = cljs.core.nth.call(null,vec__9947,(0),null);
var r1__$1 = cljs.core.nth.call(null,vec__9947,(1),null);
var t1 = cljs.core.nth.call(null,vec__9947,(2),null);
var b1 = cljs.core.nth.call(null,vec__9947,(3),null);
var vec__9948 = farn.sprite.edges_from_rect.call(null,r2);
var l2 = cljs.core.nth.call(null,vec__9948,(0),null);
var r2__$1 = cljs.core.nth.call(null,vec__9948,(1),null);
var t2 = cljs.core.nth.call(null,vec__9948,(2),null);
var b2 = cljs.core.nth.call(null,vec__9948,(3),null);
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