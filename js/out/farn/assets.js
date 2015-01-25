// Compiled by ClojureScript 0.0-2511
goog.provide('farn.assets');
goog.require('cljs.core');
farn.assets.to_keys = (function to_keys(which){
return cljs.core.vec.call(null,cljs.core.map.call(null,(function (s){
return cljs.core.keyword.call(null,cljs.core.nth.call(null,s.replace(".png","").split("/"),(2)));
}),which));
});
farn.assets.make_range = (function make_range(prefix,r){
return cljs.core.vec.call(null,cljs.core.map.call(null,(function (i){
return cljs.core.keyword.call(null,[cljs.core.str(prefix),cljs.core.str(i)].join(''));
}),cljs.core.range.call(null,(1),(r + (1)))));
});
farn.assets.floor_sprites = (function floor_sprites(){
return farn.assets.to_keys.call(null,cljs.core.filter.call(null,(function (a){
return !(cljs.core._EQ_.call(null,(-1),a.indexOf("-floor-")));
}),farn.assets._EQ_assets_EQ_));
});
farn.assets._EQ_sprites_static_EQ_ = cljs.core.PersistentVector.fromArray(["img/sprites/static-bush-1.png","img/sprites/static-cactus-1.png","img/sprites/static-cactus-2.png","img/sprites/static-cactus-3.png","img/sprites/static-floor-path-big.png","img/sprites/static-floor-path-medium.png","img/sprites/static-floor-path-small.png","img/sprites/static-floor-sand-big.png","img/sprites/static-floor-sand-medium.png","img/sprites/static-floor-sand-small.png","img/sprites/static-floor-water-big.png","img/sprites/static-floor-water-medium.png","img/sprites/static-floor-water-small.png","img/sprites/static-flower-1.png","img/sprites/static-flower-2.png","img/sprites/static-flower-3.png","img/sprites/static-flower-4.png","img/sprites/static-flower-5.png","img/sprites/static-lump-1.png","img/sprites/static-lump-2.png","img/sprites/static-lump-3.png","img/sprites/static-rock-1.png","img/sprites/static-schroom-1.png","img/sprites/static-schroom-2.png","img/sprites/static-schroom-3.png","img/sprites/static-giant-schroom-1.png","img/sprites/static-giant-schroom-2.png","img/sprites/static-giant-shrub-1.png","img/sprites/static-tree-10.png","img/sprites/static-tree-11.png","img/sprites/static-tree-12.png","img/sprites/static-tree-13.png","img/sprites/static-tree-14.png","img/sprites/static-tree-15.png","img/sprites/static-tree-16.png","img/sprites/static-tree-17.png","img/sprites/static-tree-18.png","img/sprites/static-tree-19.png","img/sprites/static-tree-1.png","img/sprites/static-tree-20.png","img/sprites/static-tree-2.png","img/sprites/static-tree-3.png","img/sprites/static-tree-4.png","img/sprites/static-tree-5.png","img/sprites/static-tree-6.png","img/sprites/static-tree-7.png","img/sprites/static-tree-8.png","img/sprites/static-tree-9.png","img/sprites/static-castle-1.png","img/sprites/static-tuft-1.png","img/sprites/static-tuft-2.png","img/sprites/static-tuft-3.png"], true);
farn.assets._EQ_sprites_bits_EQ_ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["img/sprites/shadow-1.png"], null);
farn.assets._EQ_sprites_components_EQ_ = new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, ["img/sprites/component-tree-shrub-brown-1.png","img/sprites/component-tree-shrub-brown-2.png","img/sprites/component-tree-shrub-brown-3.png","img/sprites/component-tree-shrub-brown-4.png","img/sprites/component-tree-shrub-dark-1.png","img/sprites/component-tree-shrub-dark-2.png","img/sprites/component-tree-shrub-dark-3.png","img/sprites/component-tree-shrub-dark-4.png","img/sprites/component-tree-shrub-light-1.png","img/sprites/component-tree-shrub-light-2.png","img/sprites/component-tree-shrub-light-3.png","img/sprites/component-tree-shrub-light-4.png","img/sprites/component-tree-trunk-1.png","img/sprites/component-tree-trunk-2.png"], null);
farn.assets._EQ_sprites_pink_EQ_ = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, ["img/sprites/pink-crouch-4.png","img/sprites/pink-stand-1.png","img/sprites/pink-stand-2.png","img/sprites/pink-stand-3.png","img/sprites/pink-stand-4.png","img/sprites/pink-walk-1.png","img/sprites/pink-walk-2.png"], null);
farn.assets._EQ_sprites_brown_EQ_ = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, ["img/sprites/brown-stand-1.png","img/sprites/brown-stand-2.png","img/sprites/brown-talk-blink-1.png","img/sprites/brown-talk-blink-2.png","img/sprites/brown-talk-blink-3.png","img/sprites/brown-talk-noblink-1.png","img/sprites/brown-talk-noblink-2.png","img/sprites/brown-talk-noblink-3.png"], null);
farn.assets._EQ_pickups_EQ_ = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["img/sprites/pickup-star-1.png","img/sprites/pickup-mushroom-1.png","img/sprites/pickup-baby-1.png","img/sprites/pickup-baby-2.png"], null);
farn.assets._EQ_sfx_EQ_ = cljs.core.vec.call(null,cljs.core.concat.call(null,cljs.core.map.call(null,(function (x){
return [cljs.core.str("sfx/boom-"),cljs.core.str(x),cljs.core.str(".ogg")].join('');
}),cljs.core.range.call(null,(1),(4))),cljs.core.map.call(null,(function (x){
return [cljs.core.str("sfx/pickup-"),cljs.core.str(x),cljs.core.str(".ogg")].join('');
}),cljs.core.range.call(null,(1),(9)))));
farn.assets._EQ_music_EQ_ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["music/bu-ogre-of-a-simplex.ogg"], null);
farn.assets._EQ_fonts_EQ_ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["http://fonts.gstatic.com/s/lobster/v12/cycBf3mfbGkh66G5NhszPQ.woff2","http://fonts.gstatic.com/s/varelaround/v6/APH4jr0uSos5wiut5cpjrugdm0LZdjqr5-oayXSOefg.woff2","http://fonts.gstatic.com/s/shadowsintolighttwo/v4/gDxHeefcXIo-lOuZFCn2xbIfIbZrEcH2WW587lG91II.woff2"], null);
farn.assets._EQ_assets_EQ_ = cljs.core.vec.call(null,cljs.core.concat.call(null,farn.assets._EQ_fonts_EQ_,farn.assets._EQ_music_EQ_,farn.assets._EQ_sfx_EQ_,farn.assets._EQ_sprites_static_EQ_,farn.assets._EQ_sprites_pink_EQ_,farn.assets._EQ_sprites_brown_EQ_,farn.assets._EQ_sprites_bits_EQ_,farn.assets._EQ_pickups_EQ_));

//# sourceMappingURL=assets.js.map