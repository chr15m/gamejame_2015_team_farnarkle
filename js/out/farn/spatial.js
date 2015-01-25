// Compiled by ClojureScript 0.0-2511
goog.provide('farn.spatial');
goog.require('cljs.core');
goog.require('farn.utils');
goog.require('cljs.core.async');
goog.require('dommy.core');
farn.spatial.tile_drop = new cljs.core.PersistentArrayMap(null, 5, [(0),(3),(1),(10),(2),(3),(3),(10),(4),(3)], null);
farn.spatial.make_map_from_tilemap = (function make_map_from_tilemap(tilemap,tile_lookup,number,minx,maxx,miny,maxy){
return cljs.core.filter.call(null,(function (x){
return !((x == null));
}),cljs.core.doall.call(null,(function (){var iter__4386__auto__ = (function iter__9550(s__9551){
return (new cljs.core.LazySeq(null,(function (){
var s__9551__$1 = s__9551;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__9551__$1);
if(temp__4126__auto__){
var s__9551__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__9551__$2)){
var c__4384__auto__ = cljs.core.chunk_first.call(null,s__9551__$2);
var size__4385__auto__ = cljs.core.count.call(null,c__4384__auto__);
var b__9553 = cljs.core.chunk_buffer.call(null,size__4385__auto__);
if((function (){var i__9552 = (0);
while(true){
if((i__9552 < size__4385__auto__)){
var i = cljs.core._nth.call(null,c__4384__auto__,i__9552);
cljs.core.chunk_append.call(null,b__9553,(function (){var lookup_x = farn.utils.rand_between.call(null,minx,maxx);
var lookup_y = farn.utils.rand_between.call(null,miny,maxy);
var tilesize_y = tilemap.length;
var tilesize_x = cljs.core.nth.call(null,tilemap,(0)).length;
var tile_type_id = cljs.core.nth.call(null,cljs.core.nth.call(null,tilemap,cljs.core.mod.call(null,((lookup_x / (100)) | (0)),tilesize_x)),cljs.core.mod.call(null,((lookup_y / (100)) | (0)),tilesize_y));
var tile_found = tile_lookup.call(null,tile_type_id);
var no_tile = farn.utils.rand_between.call(null,(0),(10));
var map_entry = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lookup_x,lookup_y], null),new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.rand_nth.call(null,tile_found)], null);
if(!((no_tile > farn.spatial.tile_drop.call(null,tile_type_id)))){
return map_entry;
} else {
return null;
}
})());

var G__9554 = (i__9552 + (1));
i__9552 = G__9554;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9553),iter__9550.call(null,cljs.core.chunk_rest.call(null,s__9551__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9553),null);
}
} else {
var i = cljs.core.first.call(null,s__9551__$2);
return cljs.core.cons.call(null,(function (){var lookup_x = farn.utils.rand_between.call(null,minx,maxx);
var lookup_y = farn.utils.rand_between.call(null,miny,maxy);
var tilesize_y = tilemap.length;
var tilesize_x = cljs.core.nth.call(null,tilemap,(0)).length;
var tile_type_id = cljs.core.nth.call(null,cljs.core.nth.call(null,tilemap,cljs.core.mod.call(null,((lookup_x / (100)) | (0)),tilesize_x)),cljs.core.mod.call(null,((lookup_y / (100)) | (0)),tilesize_y));
var tile_found = tile_lookup.call(null,tile_type_id);
var no_tile = farn.utils.rand_between.call(null,(0),(10));
var map_entry = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lookup_x,lookup_y], null),new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.rand_nth.call(null,tile_found)], null);
if(!((no_tile > farn.spatial.tile_drop.call(null,tile_type_id)))){
return map_entry;
} else {
return null;
}
})(),iter__9550.call(null,cljs.core.rest.call(null,s__9551__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4386__auto__.call(null,cljs.core.range.call(null,number));
})()));
});
/**
* make a massive crappy map. obj-keys is a list of texture keywords.
* number is how many will be spread out across the map
* max/mins are extents
* 
*/
farn.spatial.make_random_map = (function make_random_map(obj_keys,number,minx,maxx,miny,maxy){
return cljs.core.doall.call(null,(function (){var iter__4386__auto__ = (function iter__9559(s__9560){
return (new cljs.core.LazySeq(null,(function (){
var s__9560__$1 = s__9560;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__9560__$1);
if(temp__4126__auto__){
var s__9560__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__9560__$2)){
var c__4384__auto__ = cljs.core.chunk_first.call(null,s__9560__$2);
var size__4385__auto__ = cljs.core.count.call(null,c__4384__auto__);
var b__9562 = cljs.core.chunk_buffer.call(null,size__4385__auto__);
if((function (){var i__9561 = (0);
while(true){
if((i__9561 < size__4385__auto__)){
var i = cljs.core._nth.call(null,c__4384__auto__,i__9561);
cljs.core.chunk_append.call(null,b__9562,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [farn.utils.rand_between.call(null,minx,maxx),farn.utils.rand_between.call(null,miny,maxy)], null),new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.rand_nth.call(null,obj_keys)], null));

var G__9563 = (i__9561 + (1));
i__9561 = G__9563;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9562),iter__9559.call(null,cljs.core.chunk_rest.call(null,s__9560__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9562),null);
}
} else {
var i = cljs.core.first.call(null,s__9560__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [farn.utils.rand_between.call(null,minx,maxx),farn.utils.rand_between.call(null,miny,maxy)], null),new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.rand_nth.call(null,obj_keys)], null),iter__9559.call(null,cljs.core.rest.call(null,s__9560__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4386__auto__.call(null,cljs.core.range.call(null,number));
})());
});
/**
* return a spatially hashed tree of all the sprites in collection, based apon :pos key
*/
farn.spatial.hash_locations = (function hash_locations(collection,cell_size){
var output = cljs.core.PersistentArrayMap.EMPTY;
var G__9570 = collection;
var vec__9571 = G__9570;
var h = cljs.core.nth.call(null,vec__9571,(0),null);
var t = cljs.core.nthnext.call(null,vec__9571,(1));
var output__$1 = output;
var G__9570__$1 = G__9570;
while(true){
var output__$2 = output__$1;
var vec__9572 = G__9570__$1;
var h__$1 = cljs.core.nth.call(null,vec__9572,(0),null);
var t__$1 = cljs.core.nthnext.call(null,vec__9572,(1));
var vec__9573 = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(h__$1);
var x = cljs.core.nth.call(null,vec__9573,(0),null);
var y = cljs.core.nth.call(null,vec__9573,(1),null);
var xh = ((x / cell_size) | (0));
var yh = ((y / cell_size) | (0));
var key = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [xh,yh], null);
if(cljs.core.empty_QMARK_.call(null,t__$1)){
return output__$2;
} else {
if(cljs.core.contains_QMARK_.call(null,output__$2,key)){
var G__9574 = cljs.core.assoc.call(null,output__$2,key,cljs.core.conj.call(null,output__$2.call(null,key),h__$1));
var G__9575 = t__$1;
output__$1 = G__9574;
G__9570__$1 = G__9575;
continue;
} else {
var G__9576 = cljs.core.assoc.call(null,output__$2,key,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [h__$1], null));
var G__9577 = t__$1;
output__$1 = G__9576;
G__9570__$1 = G__9577;
continue;
}
}
break;
}
});
farn.spatial.which_cell = (function which_cell(p__9578,cell_size){
var vec__9580 = p__9578;
var x = cljs.core.nth.call(null,vec__9580,(0),null);
var y = cljs.core.nth.call(null,vec__9580,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((x / cell_size) | (0)),((y / cell_size) | (0))], null);
});

//# sourceMappingURL=spatial.js.map