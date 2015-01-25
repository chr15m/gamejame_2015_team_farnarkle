// Compiled by ClojureScript 0.0-2511
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('cljs.core.async');
goog.require('cljs.reader');
goog.require('goog.net.jsloader');
/**
* @param {...*} var_args
*/
figwheel.client.log = (function() { 
var log__delegate = function (p__20637,args){
var map__20639 = p__20637;
var map__20639__$1 = ((cljs.core.seq_QMARK_.call(null,map__20639))?cljs.core.apply.call(null,cljs.core.hash_map,map__20639):map__20639);
var debug = cljs.core.get.call(null,map__20639__$1,new cljs.core.Keyword(null,"debug","debug",-1608172596));
if(cljs.core.truth_(debug)){
return console.log(cljs.core.to_array.call(null,args));
} else {
return null;
}
};
var log = function (p__20637,var_args){
var args = null;
if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return log__delegate.call(this,p__20637,args);};
log.cljs$lang$maxFixedArity = 1;
log.cljs$lang$applyTo = (function (arglist__20640){
var p__20637 = cljs.core.first(arglist__20640);
var args = cljs.core.rest(arglist__20640);
return log__delegate(p__20637,args);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
figwheel.client.reload_host = (function reload_host(p__20641){
var map__20643 = p__20641;
var map__20643__$1 = ((cljs.core.seq_QMARK_.call(null,map__20643))?cljs.core.apply.call(null,cljs.core.hash_map,map__20643):map__20643);
var websocket_url = cljs.core.get.call(null,map__20643__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));
return cljs.core.first.call(null,clojure.string.split.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,websocket_url,/^ws:/,""),/^\/\//,""),/\//));
});
figwheel.client.add_cache_buster = (function add_cache_buster(url){
return [cljs.core.str(url),cljs.core.str("?rel="),cljs.core.str((new Date()).getTime())].join('');
});
figwheel.client.js_reload = (function js_reload(p__20644,callback){
var map__20646 = p__20644;
var map__20646__$1 = ((cljs.core.seq_QMARK_.call(null,map__20646))?cljs.core.apply.call(null,cljs.core.hash_map,map__20646):map__20646);
var msg = map__20646__$1;
var dependency_file = cljs.core.get.call(null,map__20646__$1,new cljs.core.Keyword(null,"dependency-file","dependency-file",-1682436382));
var namespace = cljs.core.get.call(null,map__20646__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = cljs.core.get.call(null,map__20646__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
if(cljs.core.truth_((function (){var or__3630__auto__ = dependency_file;
if(cljs.core.truth_(or__3630__auto__)){
return or__3630__auto__;
} else {
return goog.isProvided_(namespace);
}
})())){
return goog.net.jsloader.load(figwheel.client.add_cache_buster.call(null,request_url)).addCallback(((function (map__20646,map__20646__$1,msg,dependency_file,namespace,request_url){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null));
});})(map__20646,map__20646__$1,msg,dependency_file,namespace,request_url))
);
} else {
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null));
}
});
figwheel.client.reload_js_file = (function reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
figwheel.client.load_all_js_files = (function load_all_js_files(files){

return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.async.filter_LT_.call(null,cljs.core.identity,cljs.core.async.merge.call(null,cljs.core.mapv.call(null,figwheel.client.reload_js_file,files))));
});
figwheel.client.add_request_url = (function add_request_url(p__20647,p__20648){
var map__20651 = p__20647;
var map__20651__$1 = ((cljs.core.seq_QMARK_.call(null,map__20651))?cljs.core.apply.call(null,cljs.core.hash_map,map__20651):map__20651);
var opts = map__20651__$1;
var url_rewriter = cljs.core.get.call(null,map__20651__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));
var map__20652 = p__20648;
var map__20652__$1 = ((cljs.core.seq_QMARK_.call(null,map__20652))?cljs.core.apply.call(null,cljs.core.hash_map,map__20652):map__20652);
var d = map__20652__$1;
var file = cljs.core.get.call(null,map__20652__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"request-url","request-url",2100346596),url_rewriter.call(null,[cljs.core.str("//"),cljs.core.str(figwheel.client.reload_host.call(null,opts)),cljs.core.str(file)].join('')));
});
figwheel.client.add_request_urls = (function add_request_urls(opts,files){
return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.add_request_url,opts),files);
});
figwheel.client.reload_js_files = (function reload_js_files(p__20653,p__20654){
var map__20696 = p__20653;
var map__20696__$1 = ((cljs.core.seq_QMARK_.call(null,map__20696))?cljs.core.apply.call(null,cljs.core.hash_map,map__20696):map__20696);
var opts = map__20696__$1;
var on_jsload = cljs.core.get.call(null,map__20696__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var before_jsload = cljs.core.get.call(null,map__20696__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var map__20697 = p__20654;
var map__20697__$1 = ((cljs.core.seq_QMARK_.call(null,map__20697))?cljs.core.apply.call(null,cljs.core.hash_map,map__20697):map__20697);
var files = cljs.core.get.call(null,map__20697__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var c__6459__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6459__auto__,map__20696,map__20696__$1,opts,on_jsload,before_jsload,map__20697,map__20697__$1,files){
return (function (){
var f__6460__auto__ = (function (){var switch__6444__auto__ = ((function (c__6459__auto__,map__20696,map__20696__$1,opts,on_jsload,before_jsload,map__20697,map__20697__$1,files){
return (function (state_20720){
var state_val_20721 = (state_20720[(1)]);
if((state_val_20721 === (6))){
var inst_20702 = (state_20720[(7)]);
var inst_20711 = (state_20720[(2)]);
var inst_20712 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_20713 = [inst_20702];
var inst_20714 = (new cljs.core.PersistentVector(null,1,(5),inst_20712,inst_20713,null));
var inst_20715 = cljs.core.apply.call(null,on_jsload,inst_20714);
var state_20720__$1 = (function (){var statearr_20722 = state_20720;
(statearr_20722[(8)] = inst_20711);

return statearr_20722;
})();
var statearr_20723_20737 = state_20720__$1;
(statearr_20723_20737[(2)] = inst_20715);

(statearr_20723_20737[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20721 === (5))){
var inst_20718 = (state_20720[(2)]);
var state_20720__$1 = state_20720;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20720__$1,inst_20718);
} else {
if((state_val_20721 === (4))){
var state_20720__$1 = state_20720;
var statearr_20724_20738 = state_20720__$1;
(statearr_20724_20738[(2)] = null);

(statearr_20724_20738[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20721 === (3))){
var inst_20702 = (state_20720[(7)]);
var inst_20705 = console.debug("Figwheel: loaded these files");
var inst_20706 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_20702);
var inst_20707 = cljs.core.prn_str.call(null,inst_20706);
var inst_20708 = console.log(inst_20707);
var inst_20709 = cljs.core.async.timeout.call(null,(10));
var state_20720__$1 = (function (){var statearr_20725 = state_20720;
(statearr_20725[(9)] = inst_20708);

(statearr_20725[(10)] = inst_20705);

return statearr_20725;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20720__$1,(6),inst_20709);
} else {
if((state_val_20721 === (2))){
var inst_20702 = (state_20720[(7)]);
var inst_20702__$1 = (state_20720[(2)]);
var inst_20703 = cljs.core.not_empty.call(null,inst_20702__$1);
var state_20720__$1 = (function (){var statearr_20726 = state_20720;
(statearr_20726[(7)] = inst_20702__$1);

return statearr_20726;
})();
if(cljs.core.truth_(inst_20703)){
var statearr_20727_20739 = state_20720__$1;
(statearr_20727_20739[(1)] = (3));

} else {
var statearr_20728_20740 = state_20720__$1;
(statearr_20728_20740[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20721 === (1))){
var inst_20698 = before_jsload.call(null,files);
var inst_20699 = figwheel.client.add_request_urls.call(null,opts,files);
var inst_20700 = figwheel.client.load_all_js_files.call(null,inst_20699);
var state_20720__$1 = (function (){var statearr_20729 = state_20720;
(statearr_20729[(11)] = inst_20698);

return statearr_20729;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20720__$1,(2),inst_20700);
} else {
return null;
}
}
}
}
}
}
});})(c__6459__auto__,map__20696,map__20696__$1,opts,on_jsload,before_jsload,map__20697,map__20697__$1,files))
;
return ((function (switch__6444__auto__,c__6459__auto__,map__20696,map__20696__$1,opts,on_jsload,before_jsload,map__20697,map__20697__$1,files){
return (function() {
var state_machine__6445__auto__ = null;
var state_machine__6445__auto____0 = (function (){
var statearr_20733 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20733[(0)] = state_machine__6445__auto__);

(statearr_20733[(1)] = (1));

return statearr_20733;
});
var state_machine__6445__auto____1 = (function (state_20720){
while(true){
var ret_value__6446__auto__ = (function (){try{while(true){
var result__6447__auto__ = switch__6444__auto__.call(null,state_20720);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6447__auto__;
}
break;
}
}catch (e20734){if((e20734 instanceof Object)){
var ex__6448__auto__ = e20734;
var statearr_20735_20741 = state_20720;
(statearr_20735_20741[(5)] = ex__6448__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20720);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20734;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20742 = state_20720;
state_20720 = G__20742;
continue;
} else {
return ret_value__6446__auto__;
}
break;
}
});
state_machine__6445__auto__ = function(state_20720){
switch(arguments.length){
case 0:
return state_machine__6445__auto____0.call(this);
case 1:
return state_machine__6445__auto____1.call(this,state_20720);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6445__auto____0;
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6445__auto____1;
return state_machine__6445__auto__;
})()
;})(switch__6444__auto__,c__6459__auto__,map__20696,map__20696__$1,opts,on_jsload,before_jsload,map__20697,map__20697__$1,files))
})();
var state__6461__auto__ = (function (){var statearr_20736 = f__6460__auto__.call(null);
(statearr_20736[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6459__auto__);

return statearr_20736;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6461__auto__);
});})(c__6459__auto__,map__20696,map__20696__$1,opts,on_jsload,before_jsload,map__20697,map__20697__$1,files))
);

return c__6459__auto__;
});
figwheel.client.current_links = (function current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.truncate_url = (function truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),"http://",""),"https://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.matches_file_QMARK_ = (function matches_file_QMARK_(p__20743,link_href){
var map__20745 = p__20743;
var map__20745__$1 = ((cljs.core.seq_QMARK_.call(null,map__20745))?cljs.core.apply.call(null,cljs.core.hash_map,map__20745):map__20745);
var request_url = cljs.core.get.call(null,map__20745__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var file = cljs.core.get.call(null,map__20745__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var trunc_href = figwheel.client.truncate_url.call(null,link_href);
return (cljs.core._EQ_.call(null,file,trunc_href)) || (cljs.core._EQ_.call(null,figwheel.client.truncate_url.call(null,request_url),trunc_href));
});
figwheel.client.get_correct_link = (function get_correct_link(f_data){
return cljs.core.some.call(null,(function (l){
if(figwheel.client.matches_file_QMARK_.call(null,f_data,l.href)){
return l;
} else {
return null;
}
}),figwheel.client.current_links.call(null));
});
figwheel.client.clone_link = (function clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.create_link = (function create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.add_cache_buster.call(null,url);

return link;
});
figwheel.client.add_link_to_doc = (function() {
var add_link_to_doc = null;
var add_link_to_doc__1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});
var add_link_to_doc__2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

var c__6459__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6459__auto__,parent){
return (function (){
var f__6460__auto__ = (function (){var switch__6444__auto__ = ((function (c__6459__auto__,parent){
return (function (state_20766){
var state_val_20767 = (state_20766[(1)]);
if((state_val_20767 === (2))){
var inst_20763 = (state_20766[(2)]);
var inst_20764 = parent.removeChild(orig_link);
var state_20766__$1 = (function (){var statearr_20768 = state_20766;
(statearr_20768[(7)] = inst_20763);

return statearr_20768;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20766__$1,inst_20764);
} else {
if((state_val_20767 === (1))){
var inst_20761 = cljs.core.async.timeout.call(null,(200));
var state_20766__$1 = state_20766;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20766__$1,(2),inst_20761);
} else {
return null;
}
}
});})(c__6459__auto__,parent))
;
return ((function (switch__6444__auto__,c__6459__auto__,parent){
return (function() {
var state_machine__6445__auto__ = null;
var state_machine__6445__auto____0 = (function (){
var statearr_20772 = [null,null,null,null,null,null,null,null];
(statearr_20772[(0)] = state_machine__6445__auto__);

(statearr_20772[(1)] = (1));

return statearr_20772;
});
var state_machine__6445__auto____1 = (function (state_20766){
while(true){
var ret_value__6446__auto__ = (function (){try{while(true){
var result__6447__auto__ = switch__6444__auto__.call(null,state_20766);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6447__auto__;
}
break;
}
}catch (e20773){if((e20773 instanceof Object)){
var ex__6448__auto__ = e20773;
var statearr_20774_20776 = state_20766;
(statearr_20774_20776[(5)] = ex__6448__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20766);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20773;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20777 = state_20766;
state_20766 = G__20777;
continue;
} else {
return ret_value__6446__auto__;
}
break;
}
});
state_machine__6445__auto__ = function(state_20766){
switch(arguments.length){
case 0:
return state_machine__6445__auto____0.call(this);
case 1:
return state_machine__6445__auto____1.call(this,state_20766);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6445__auto____0;
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6445__auto____1;
return state_machine__6445__auto__;
})()
;})(switch__6444__auto__,c__6459__auto__,parent))
})();
var state__6461__auto__ = (function (){var statearr_20775 = f__6460__auto__.call(null);
(statearr_20775[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6459__auto__);

return statearr_20775;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6461__auto__);
});})(c__6459__auto__,parent))
);

return c__6459__auto__;
});
add_link_to_doc = function(orig_link,klone){
switch(arguments.length){
case 1:
return add_link_to_doc__1.call(this,orig_link);
case 2:
return add_link_to_doc__2.call(this,orig_link,klone);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = add_link_to_doc__1;
add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = add_link_to_doc__2;
return add_link_to_doc;
})()
;
figwheel.client.reload_css_file = (function reload_css_file(p__20778){
var map__20780 = p__20778;
var map__20780__$1 = ((cljs.core.seq_QMARK_.call(null,map__20780))?cljs.core.apply.call(null,cljs.core.hash_map,map__20780):map__20780);
var f_data = map__20780__$1;
var request_url = cljs.core.get.call(null,map__20780__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var file = cljs.core.get.call(null,map__20780__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4124__auto__ = figwheel.client.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4124__auto__)){
var link = temp__4124__auto__;
return figwheel.client.add_link_to_doc.call(null,link,figwheel.client.clone_link.call(null,link,request_url));
} else {
return figwheel.client.add_link_to_doc.call(null,figwheel.client.create_link.call(null,request_url));
}
});
figwheel.client.reload_css_files = (function reload_css_files(p__20781,files_msg){
var map__20803 = p__20781;
var map__20803__$1 = ((cljs.core.seq_QMARK_.call(null,map__20803))?cljs.core.apply.call(null,cljs.core.hash_map,map__20803):map__20803);
var opts = map__20803__$1;
var on_cssload = cljs.core.get.call(null,map__20803__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var seq__20804_20824 = cljs.core.seq.call(null,figwheel.client.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__20805_20825 = null;
var count__20806_20826 = (0);
var i__20807_20827 = (0);
while(true){
if((i__20807_20827 < count__20806_20826)){
var f_20828 = cljs.core._nth.call(null,chunk__20805_20825,i__20807_20827);
figwheel.client.reload_css_file.call(null,f_20828);

var G__20829 = seq__20804_20824;
var G__20830 = chunk__20805_20825;
var G__20831 = count__20806_20826;
var G__20832 = (i__20807_20827 + (1));
seq__20804_20824 = G__20829;
chunk__20805_20825 = G__20830;
count__20806_20826 = G__20831;
i__20807_20827 = G__20832;
continue;
} else {
var temp__4126__auto___20833 = cljs.core.seq.call(null,seq__20804_20824);
if(temp__4126__auto___20833){
var seq__20804_20834__$1 = temp__4126__auto___20833;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20804_20834__$1)){
var c__4417__auto___20835 = cljs.core.chunk_first.call(null,seq__20804_20834__$1);
var G__20836 = cljs.core.chunk_rest.call(null,seq__20804_20834__$1);
var G__20837 = c__4417__auto___20835;
var G__20838 = cljs.core.count.call(null,c__4417__auto___20835);
var G__20839 = (0);
seq__20804_20824 = G__20836;
chunk__20805_20825 = G__20837;
count__20806_20826 = G__20838;
i__20807_20827 = G__20839;
continue;
} else {
var f_20840 = cljs.core.first.call(null,seq__20804_20834__$1);
figwheel.client.reload_css_file.call(null,f_20840);

var G__20841 = cljs.core.next.call(null,seq__20804_20834__$1);
var G__20842 = null;
var G__20843 = (0);
var G__20844 = (0);
seq__20804_20824 = G__20841;
chunk__20805_20825 = G__20842;
count__20806_20826 = G__20843;
i__20807_20827 = G__20844;
continue;
}
} else {
}
}
break;
}

var c__6459__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6459__auto__,map__20803,map__20803__$1,opts,on_cssload){
return (function (){
var f__6460__auto__ = (function (){var switch__6444__auto__ = ((function (c__6459__auto__,map__20803,map__20803__$1,opts,on_cssload){
return (function (state_20814){
var state_val_20815 = (state_20814[(1)]);
if((state_val_20815 === (2))){
var inst_20810 = (state_20814[(2)]);
var inst_20811 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);
var inst_20812 = on_cssload.call(null,inst_20811);
var state_20814__$1 = (function (){var statearr_20816 = state_20814;
(statearr_20816[(7)] = inst_20810);

return statearr_20816;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20814__$1,inst_20812);
} else {
if((state_val_20815 === (1))){
var inst_20808 = cljs.core.async.timeout.call(null,(100));
var state_20814__$1 = state_20814;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20814__$1,(2),inst_20808);
} else {
return null;
}
}
});})(c__6459__auto__,map__20803,map__20803__$1,opts,on_cssload))
;
return ((function (switch__6444__auto__,c__6459__auto__,map__20803,map__20803__$1,opts,on_cssload){
return (function() {
var state_machine__6445__auto__ = null;
var state_machine__6445__auto____0 = (function (){
var statearr_20820 = [null,null,null,null,null,null,null,null];
(statearr_20820[(0)] = state_machine__6445__auto__);

(statearr_20820[(1)] = (1));

return statearr_20820;
});
var state_machine__6445__auto____1 = (function (state_20814){
while(true){
var ret_value__6446__auto__ = (function (){try{while(true){
var result__6447__auto__ = switch__6444__auto__.call(null,state_20814);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6447__auto__;
}
break;
}
}catch (e20821){if((e20821 instanceof Object)){
var ex__6448__auto__ = e20821;
var statearr_20822_20845 = state_20814;
(statearr_20822_20845[(5)] = ex__6448__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20814);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20821;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20846 = state_20814;
state_20814 = G__20846;
continue;
} else {
return ret_value__6446__auto__;
}
break;
}
});
state_machine__6445__auto__ = function(state_20814){
switch(arguments.length){
case 0:
return state_machine__6445__auto____0.call(this);
case 1:
return state_machine__6445__auto____1.call(this,state_20814);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6445__auto____0;
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6445__auto____1;
return state_machine__6445__auto__;
})()
;})(switch__6444__auto__,c__6459__auto__,map__20803,map__20803__$1,opts,on_cssload))
})();
var state__6461__auto__ = (function (){var statearr_20823 = f__6460__auto__.call(null);
(statearr_20823[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6459__auto__);

return statearr_20823;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6461__auto__);
});})(c__6459__auto__,map__20803,map__20803__$1,opts,on_cssload))
);

return c__6459__auto__;
});
figwheel.client.compile_failed = (function compile_failed(fail_msg,compile_fail_callback){
return compile_fail_callback.call(null,cljs.core.dissoc.call(null,fail_msg,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)));
});
figwheel.client.figwheel_closure_import_script = (function figwheel_closure_import_script(src){
if(cljs.core.truth_(goog.inHtmlDocument_())){
goog.net.jsloader.load(figwheel.client.add_cache_buster.call(null,src));

return true;
} else {
return false;
}
});
figwheel.client.patch_goog_base = (function patch_goog_base(){
goog.provide = goog.exportPath_;

return goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.figwheel_closure_import_script;
});
figwheel.client.watch_and_reload_STAR_ = (function watch_and_reload_STAR_(p__20847){
var map__20852 = p__20847;
var map__20852__$1 = ((cljs.core.seq_QMARK_.call(null,map__20852))?cljs.core.apply.call(null,cljs.core.hash_map,map__20852):map__20852);
var opts = map__20852__$1;
var on_compile_fail = cljs.core.get.call(null,map__20852__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
var jsload_callback = cljs.core.get.call(null,map__20852__$1,new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
var websocket_url = cljs.core.get.call(null,map__20852__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));
var retry_count = cljs.core.get.call(null,map__20852__$1,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875));
console.debug("Figwheel: trying to open cljs reload socket");

var socket = (new WebSocket(websocket_url));
socket.onmessage = ((function (socket,map__20852,map__20852__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (msg_str){
var msg = cljs.reader.read_string.call(null,msg_str.data);
var pred__20853 = cljs.core._EQ_;
var expr__20854 = new cljs.core.Keyword(null,"msg-name","msg-name",-353709863).cljs$core$IFn$_invoke$arity$1(msg);
if(cljs.core.truth_(pred__20853.call(null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),expr__20854))){
return figwheel.client.reload_js_files.call(null,opts,msg);
} else {
if(cljs.core.truth_(pred__20853.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),expr__20854))){
return figwheel.client.reload_css_files.call(null,opts,msg);
} else {
if(cljs.core.truth_(pred__20853.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__20854))){
return figwheel.client.compile_failed.call(null,msg,on_compile_fail);
} else {
return null;
}
}
}
});})(socket,map__20852,map__20852__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;

socket.onopen = ((function (socket,map__20852,map__20852__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){
figwheel.client.patch_goog_base.call(null);

return console.debug("Figwheel: socket connection established");
});})(socket,map__20852,map__20852__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;

socket.onclose = ((function (socket,map__20852,map__20852__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){
figwheel.client.log.call(null,opts,"Figwheel: socket closed or failed to open");

if((retry_count > (0))){
return window.setTimeout(((function (socket,map__20852,map__20852__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (){
return watch_and_reload_STAR_.call(null,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),(retry_count - (1))));
});})(socket,map__20852,map__20852__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
,(2000));
} else {
return null;
}
});})(socket,map__20852,map__20852__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;

return socket.onerror = ((function (socket,map__20852,map__20852__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){
return figwheel.client.log.call(null,opts,"Figwheel: socket error ");
});})(socket,map__20852,map__20852__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
});
figwheel.client.default_on_jsload = (function default_on_jsload(url){
return document.querySelector("body").dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj20859 = {"detail":url};
return obj20859;
})())));
});
figwheel.client.get_essential_messages = (function get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function error_msg_format(p__20860){
var map__20862 = p__20860;
var map__20862__$1 = ((cljs.core.seq_QMARK_.call(null,map__20862))?cljs.core.apply.call(null,cljs.core.hash_map,map__20862):map__20862);
var class$ = cljs.core.get.call(null,map__20862__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var message = cljs.core.get.call(null,map__20862__$1,new cljs.core.Keyword(null,"message","message",-406056002));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.default_on_compile_fail = (function default_on_compile_fail(p__20863){
var map__20869 = p__20863;
var map__20869__$1 = ((cljs.core.seq_QMARK_.call(null,map__20869))?cljs.core.apply.call(null,cljs.core.hash_map,map__20869):map__20869);
var ed = map__20869__$1;
var exception_data = cljs.core.get.call(null,map__20869__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var formatted_exception = cljs.core.get.call(null,map__20869__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
console.debug("Figwheel: Compile Exception");

var seq__20870_20874 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__20871_20875 = null;
var count__20872_20876 = (0);
var i__20873_20877 = (0);
while(true){
if((i__20873_20877 < count__20872_20876)){
var msg_20878 = cljs.core._nth.call(null,chunk__20871_20875,i__20873_20877);
console.log(msg_20878);

var G__20879 = seq__20870_20874;
var G__20880 = chunk__20871_20875;
var G__20881 = count__20872_20876;
var G__20882 = (i__20873_20877 + (1));
seq__20870_20874 = G__20879;
chunk__20871_20875 = G__20880;
count__20872_20876 = G__20881;
i__20873_20877 = G__20882;
continue;
} else {
var temp__4126__auto___20883 = cljs.core.seq.call(null,seq__20870_20874);
if(temp__4126__auto___20883){
var seq__20870_20884__$1 = temp__4126__auto___20883;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20870_20884__$1)){
var c__4417__auto___20885 = cljs.core.chunk_first.call(null,seq__20870_20884__$1);
var G__20886 = cljs.core.chunk_rest.call(null,seq__20870_20884__$1);
var G__20887 = c__4417__auto___20885;
var G__20888 = cljs.core.count.call(null,c__4417__auto___20885);
var G__20889 = (0);
seq__20870_20874 = G__20886;
chunk__20871_20875 = G__20887;
count__20872_20876 = G__20888;
i__20873_20877 = G__20889;
continue;
} else {
var msg_20890 = cljs.core.first.call(null,seq__20870_20884__$1);
console.log(msg_20890);

var G__20891 = cljs.core.next.call(null,seq__20870_20884__$1);
var G__20892 = null;
var G__20893 = (0);
var G__20894 = (0);
seq__20870_20874 = G__20891;
chunk__20871_20875 = G__20892;
count__20872_20876 = G__20893;
i__20873_20877 = G__20894;
continue;
}
} else {
}
}
break;
}

return ed;
});
figwheel.client.default_before_load = (function default_before_load(files){
console.debug("Figwheel: loading files");

return files;
});
figwheel.client.default_on_cssload = (function default_on_cssload(files){
console.debug("Figwheel: loaded CSS files");

console.log(cljs.core.prn_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
figwheel.client.watch_and_reload_with_opts = (function watch_and_reload_with_opts(opts){
if(cljs.core.truth_(figwheel.client.hasOwnProperty("watch_and_reload_singleton"))){
return null;
} else {
figwheel.client.watch_and_reload_singleton = figwheel.client.watch_and_reload_STAR_.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),(100),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369),figwheel.client.default_on_jsload,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function (){var or__3630__auto__ = new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__3630__auto__)){
return or__3630__auto__;
} else {
return figwheel.client.default_on_jsload;
}
})(),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318),figwheel.client.default_on_cssload,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),figwheel.client.default_before_load,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),figwheel.client.default_on_compile_fail,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838),cljs.core.identity,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),[cljs.core.str("ws://"),cljs.core.str(location.host),cljs.core.str("/figwheel-ws")].join('')], null),opts));
}
});
/**
* @param {...*} var_args
*/
figwheel.client.watch_and_reload = (function() { 
var watch_and_reload__delegate = function (p__20895){
var map__20897 = p__20895;
var map__20897__$1 = ((cljs.core.seq_QMARK_.call(null,map__20897))?cljs.core.apply.call(null,cljs.core.hash_map,map__20897):map__20897);
var opts = map__20897__$1;
return figwheel.client.watch_and_reload_with_opts.call(null,opts);
};
var watch_and_reload = function (var_args){
var p__20895 = null;
if (arguments.length > 0) {
  p__20895 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return watch_and_reload__delegate.call(this,p__20895);};
watch_and_reload.cljs$lang$maxFixedArity = 0;
watch_and_reload.cljs$lang$applyTo = (function (arglist__20898){
var p__20895 = cljs.core.seq(arglist__20898);
return watch_and_reload__delegate(p__20895);
});
watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = watch_and_reload__delegate;
return watch_and_reload;
})()
;

//# sourceMappingURL=client.js.map