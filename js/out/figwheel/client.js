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
var log__delegate = function (p__20755,args){
var map__20757 = p__20755;
var map__20757__$1 = ((cljs.core.seq_QMARK_.call(null,map__20757))?cljs.core.apply.call(null,cljs.core.hash_map,map__20757):map__20757);
var debug = cljs.core.get.call(null,map__20757__$1,new cljs.core.Keyword(null,"debug","debug",-1608172596));
if(cljs.core.truth_(debug)){
return console.log(cljs.core.to_array.call(null,args));
} else {
return null;
}
};
var log = function (p__20755,var_args){
var args = null;
if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return log__delegate.call(this,p__20755,args);};
log.cljs$lang$maxFixedArity = 1;
log.cljs$lang$applyTo = (function (arglist__20758){
var p__20755 = cljs.core.first(arglist__20758);
var args = cljs.core.rest(arglist__20758);
return log__delegate(p__20755,args);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
figwheel.client.reload_host = (function reload_host(p__20759){
var map__20761 = p__20759;
var map__20761__$1 = ((cljs.core.seq_QMARK_.call(null,map__20761))?cljs.core.apply.call(null,cljs.core.hash_map,map__20761):map__20761);
var websocket_url = cljs.core.get.call(null,map__20761__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));
return cljs.core.first.call(null,clojure.string.split.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,websocket_url,/^ws:/,""),/^\/\//,""),/\//));
});
figwheel.client.add_cache_buster = (function add_cache_buster(url){
return [cljs.core.str(url),cljs.core.str("?rel="),cljs.core.str((new Date()).getTime())].join('');
});
figwheel.client.js_reload = (function js_reload(p__20762,callback){
var map__20764 = p__20762;
var map__20764__$1 = ((cljs.core.seq_QMARK_.call(null,map__20764))?cljs.core.apply.call(null,cljs.core.hash_map,map__20764):map__20764);
var msg = map__20764__$1;
var dependency_file = cljs.core.get.call(null,map__20764__$1,new cljs.core.Keyword(null,"dependency-file","dependency-file",-1682436382));
var namespace = cljs.core.get.call(null,map__20764__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = cljs.core.get.call(null,map__20764__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
if(cljs.core.truth_((function (){var or__3630__auto__ = dependency_file;
if(cljs.core.truth_(or__3630__auto__)){
return or__3630__auto__;
} else {
return goog.isProvided_(namespace);
}
})())){
return goog.net.jsloader.load(figwheel.client.add_cache_buster.call(null,request_url)).addCallback(((function (map__20764,map__20764__$1,msg,dependency_file,namespace,request_url){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null));
});})(map__20764,map__20764__$1,msg,dependency_file,namespace,request_url))
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
figwheel.client.add_request_url = (function add_request_url(p__20765,p__20766){
var map__20769 = p__20765;
var map__20769__$1 = ((cljs.core.seq_QMARK_.call(null,map__20769))?cljs.core.apply.call(null,cljs.core.hash_map,map__20769):map__20769);
var opts = map__20769__$1;
var url_rewriter = cljs.core.get.call(null,map__20769__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));
var map__20770 = p__20766;
var map__20770__$1 = ((cljs.core.seq_QMARK_.call(null,map__20770))?cljs.core.apply.call(null,cljs.core.hash_map,map__20770):map__20770);
var d = map__20770__$1;
var file = cljs.core.get.call(null,map__20770__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"request-url","request-url",2100346596),url_rewriter.call(null,[cljs.core.str("//"),cljs.core.str(figwheel.client.reload_host.call(null,opts)),cljs.core.str(file)].join('')));
});
figwheel.client.add_request_urls = (function add_request_urls(opts,files){
return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.add_request_url,opts),files);
});
figwheel.client.reload_js_files = (function reload_js_files(p__20771,p__20772){
var map__20814 = p__20771;
var map__20814__$1 = ((cljs.core.seq_QMARK_.call(null,map__20814))?cljs.core.apply.call(null,cljs.core.hash_map,map__20814):map__20814);
var opts = map__20814__$1;
var on_jsload = cljs.core.get.call(null,map__20814__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var before_jsload = cljs.core.get.call(null,map__20814__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var map__20815 = p__20772;
var map__20815__$1 = ((cljs.core.seq_QMARK_.call(null,map__20815))?cljs.core.apply.call(null,cljs.core.hash_map,map__20815):map__20815);
var files = cljs.core.get.call(null,map__20815__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var c__6459__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6459__auto__,map__20814,map__20814__$1,opts,on_jsload,before_jsload,map__20815,map__20815__$1,files){
return (function (){
var f__6460__auto__ = (function (){var switch__6444__auto__ = ((function (c__6459__auto__,map__20814,map__20814__$1,opts,on_jsload,before_jsload,map__20815,map__20815__$1,files){
return (function (state_20838){
var state_val_20839 = (state_20838[(1)]);
if((state_val_20839 === (6))){
var inst_20820 = (state_20838[(7)]);
var inst_20829 = (state_20838[(2)]);
var inst_20830 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_20831 = [inst_20820];
var inst_20832 = (new cljs.core.PersistentVector(null,1,(5),inst_20830,inst_20831,null));
var inst_20833 = cljs.core.apply.call(null,on_jsload,inst_20832);
var state_20838__$1 = (function (){var statearr_20840 = state_20838;
(statearr_20840[(8)] = inst_20829);

return statearr_20840;
})();
var statearr_20841_20855 = state_20838__$1;
(statearr_20841_20855[(2)] = inst_20833);

(statearr_20841_20855[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20839 === (5))){
var inst_20836 = (state_20838[(2)]);
var state_20838__$1 = state_20838;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20838__$1,inst_20836);
} else {
if((state_val_20839 === (4))){
var state_20838__$1 = state_20838;
var statearr_20842_20856 = state_20838__$1;
(statearr_20842_20856[(2)] = null);

(statearr_20842_20856[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20839 === (3))){
var inst_20820 = (state_20838[(7)]);
var inst_20823 = console.debug("Figwheel: loaded these files");
var inst_20824 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_20820);
var inst_20825 = cljs.core.prn_str.call(null,inst_20824);
var inst_20826 = console.log(inst_20825);
var inst_20827 = cljs.core.async.timeout.call(null,(10));
var state_20838__$1 = (function (){var statearr_20843 = state_20838;
(statearr_20843[(9)] = inst_20823);

(statearr_20843[(10)] = inst_20826);

return statearr_20843;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20838__$1,(6),inst_20827);
} else {
if((state_val_20839 === (2))){
var inst_20820 = (state_20838[(7)]);
var inst_20820__$1 = (state_20838[(2)]);
var inst_20821 = cljs.core.not_empty.call(null,inst_20820__$1);
var state_20838__$1 = (function (){var statearr_20844 = state_20838;
(statearr_20844[(7)] = inst_20820__$1);

return statearr_20844;
})();
if(cljs.core.truth_(inst_20821)){
var statearr_20845_20857 = state_20838__$1;
(statearr_20845_20857[(1)] = (3));

} else {
var statearr_20846_20858 = state_20838__$1;
(statearr_20846_20858[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20839 === (1))){
var inst_20816 = before_jsload.call(null,files);
var inst_20817 = figwheel.client.add_request_urls.call(null,opts,files);
var inst_20818 = figwheel.client.load_all_js_files.call(null,inst_20817);
var state_20838__$1 = (function (){var statearr_20847 = state_20838;
(statearr_20847[(11)] = inst_20816);

return statearr_20847;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20838__$1,(2),inst_20818);
} else {
return null;
}
}
}
}
}
}
});})(c__6459__auto__,map__20814,map__20814__$1,opts,on_jsload,before_jsload,map__20815,map__20815__$1,files))
;
return ((function (switch__6444__auto__,c__6459__auto__,map__20814,map__20814__$1,opts,on_jsload,before_jsload,map__20815,map__20815__$1,files){
return (function() {
var state_machine__6445__auto__ = null;
var state_machine__6445__auto____0 = (function (){
var statearr_20851 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20851[(0)] = state_machine__6445__auto__);

(statearr_20851[(1)] = (1));

return statearr_20851;
});
var state_machine__6445__auto____1 = (function (state_20838){
while(true){
var ret_value__6446__auto__ = (function (){try{while(true){
var result__6447__auto__ = switch__6444__auto__.call(null,state_20838);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6447__auto__;
}
break;
}
}catch (e20852){if((e20852 instanceof Object)){
var ex__6448__auto__ = e20852;
var statearr_20853_20859 = state_20838;
(statearr_20853_20859[(5)] = ex__6448__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20838);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20852;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20860 = state_20838;
state_20838 = G__20860;
continue;
} else {
return ret_value__6446__auto__;
}
break;
}
});
state_machine__6445__auto__ = function(state_20838){
switch(arguments.length){
case 0:
return state_machine__6445__auto____0.call(this);
case 1:
return state_machine__6445__auto____1.call(this,state_20838);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6445__auto____0;
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6445__auto____1;
return state_machine__6445__auto__;
})()
;})(switch__6444__auto__,c__6459__auto__,map__20814,map__20814__$1,opts,on_jsload,before_jsload,map__20815,map__20815__$1,files))
})();
var state__6461__auto__ = (function (){var statearr_20854 = f__6460__auto__.call(null);
(statearr_20854[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6459__auto__);

return statearr_20854;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6461__auto__);
});})(c__6459__auto__,map__20814,map__20814__$1,opts,on_jsload,before_jsload,map__20815,map__20815__$1,files))
);

return c__6459__auto__;
});
figwheel.client.current_links = (function current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.truncate_url = (function truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),"http://",""),"https://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.matches_file_QMARK_ = (function matches_file_QMARK_(p__20861,link_href){
var map__20863 = p__20861;
var map__20863__$1 = ((cljs.core.seq_QMARK_.call(null,map__20863))?cljs.core.apply.call(null,cljs.core.hash_map,map__20863):map__20863);
var request_url = cljs.core.get.call(null,map__20863__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var file = cljs.core.get.call(null,map__20863__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
return (function (state_20884){
var state_val_20885 = (state_20884[(1)]);
if((state_val_20885 === (2))){
var inst_20881 = (state_20884[(2)]);
var inst_20882 = parent.removeChild(orig_link);
var state_20884__$1 = (function (){var statearr_20886 = state_20884;
(statearr_20886[(7)] = inst_20881);

return statearr_20886;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20884__$1,inst_20882);
} else {
if((state_val_20885 === (1))){
var inst_20879 = cljs.core.async.timeout.call(null,(200));
var state_20884__$1 = state_20884;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20884__$1,(2),inst_20879);
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
var statearr_20890 = [null,null,null,null,null,null,null,null];
(statearr_20890[(0)] = state_machine__6445__auto__);

(statearr_20890[(1)] = (1));

return statearr_20890;
});
var state_machine__6445__auto____1 = (function (state_20884){
while(true){
var ret_value__6446__auto__ = (function (){try{while(true){
var result__6447__auto__ = switch__6444__auto__.call(null,state_20884);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6447__auto__;
}
break;
}
}catch (e20891){if((e20891 instanceof Object)){
var ex__6448__auto__ = e20891;
var statearr_20892_20894 = state_20884;
(statearr_20892_20894[(5)] = ex__6448__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20884);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20891;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20895 = state_20884;
state_20884 = G__20895;
continue;
} else {
return ret_value__6446__auto__;
}
break;
}
});
state_machine__6445__auto__ = function(state_20884){
switch(arguments.length){
case 0:
return state_machine__6445__auto____0.call(this);
case 1:
return state_machine__6445__auto____1.call(this,state_20884);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6445__auto____0;
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6445__auto____1;
return state_machine__6445__auto__;
})()
;})(switch__6444__auto__,c__6459__auto__,parent))
})();
var state__6461__auto__ = (function (){var statearr_20893 = f__6460__auto__.call(null);
(statearr_20893[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6459__auto__);

return statearr_20893;
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
figwheel.client.reload_css_file = (function reload_css_file(p__20896){
var map__20898 = p__20896;
var map__20898__$1 = ((cljs.core.seq_QMARK_.call(null,map__20898))?cljs.core.apply.call(null,cljs.core.hash_map,map__20898):map__20898);
var f_data = map__20898__$1;
var request_url = cljs.core.get.call(null,map__20898__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var file = cljs.core.get.call(null,map__20898__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4124__auto__ = figwheel.client.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4124__auto__)){
var link = temp__4124__auto__;
return figwheel.client.add_link_to_doc.call(null,link,figwheel.client.clone_link.call(null,link,request_url));
} else {
return figwheel.client.add_link_to_doc.call(null,figwheel.client.create_link.call(null,request_url));
}
});
figwheel.client.reload_css_files = (function reload_css_files(p__20899,files_msg){
var map__20921 = p__20899;
var map__20921__$1 = ((cljs.core.seq_QMARK_.call(null,map__20921))?cljs.core.apply.call(null,cljs.core.hash_map,map__20921):map__20921);
var opts = map__20921__$1;
var on_cssload = cljs.core.get.call(null,map__20921__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var seq__20922_20942 = cljs.core.seq.call(null,figwheel.client.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__20923_20943 = null;
var count__20924_20944 = (0);
var i__20925_20945 = (0);
while(true){
if((i__20925_20945 < count__20924_20944)){
var f_20946 = cljs.core._nth.call(null,chunk__20923_20943,i__20925_20945);
figwheel.client.reload_css_file.call(null,f_20946);

var G__20947 = seq__20922_20942;
var G__20948 = chunk__20923_20943;
var G__20949 = count__20924_20944;
var G__20950 = (i__20925_20945 + (1));
seq__20922_20942 = G__20947;
chunk__20923_20943 = G__20948;
count__20924_20944 = G__20949;
i__20925_20945 = G__20950;
continue;
} else {
var temp__4126__auto___20951 = cljs.core.seq.call(null,seq__20922_20942);
if(temp__4126__auto___20951){
var seq__20922_20952__$1 = temp__4126__auto___20951;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20922_20952__$1)){
var c__4417__auto___20953 = cljs.core.chunk_first.call(null,seq__20922_20952__$1);
var G__20954 = cljs.core.chunk_rest.call(null,seq__20922_20952__$1);
var G__20955 = c__4417__auto___20953;
var G__20956 = cljs.core.count.call(null,c__4417__auto___20953);
var G__20957 = (0);
seq__20922_20942 = G__20954;
chunk__20923_20943 = G__20955;
count__20924_20944 = G__20956;
i__20925_20945 = G__20957;
continue;
} else {
var f_20958 = cljs.core.first.call(null,seq__20922_20952__$1);
figwheel.client.reload_css_file.call(null,f_20958);

var G__20959 = cljs.core.next.call(null,seq__20922_20952__$1);
var G__20960 = null;
var G__20961 = (0);
var G__20962 = (0);
seq__20922_20942 = G__20959;
chunk__20923_20943 = G__20960;
count__20924_20944 = G__20961;
i__20925_20945 = G__20962;
continue;
}
} else {
}
}
break;
}

var c__6459__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6459__auto__,map__20921,map__20921__$1,opts,on_cssload){
return (function (){
var f__6460__auto__ = (function (){var switch__6444__auto__ = ((function (c__6459__auto__,map__20921,map__20921__$1,opts,on_cssload){
return (function (state_20932){
var state_val_20933 = (state_20932[(1)]);
if((state_val_20933 === (2))){
var inst_20928 = (state_20932[(2)]);
var inst_20929 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);
var inst_20930 = on_cssload.call(null,inst_20929);
var state_20932__$1 = (function (){var statearr_20934 = state_20932;
(statearr_20934[(7)] = inst_20928);

return statearr_20934;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20932__$1,inst_20930);
} else {
if((state_val_20933 === (1))){
var inst_20926 = cljs.core.async.timeout.call(null,(100));
var state_20932__$1 = state_20932;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20932__$1,(2),inst_20926);
} else {
return null;
}
}
});})(c__6459__auto__,map__20921,map__20921__$1,opts,on_cssload))
;
return ((function (switch__6444__auto__,c__6459__auto__,map__20921,map__20921__$1,opts,on_cssload){
return (function() {
var state_machine__6445__auto__ = null;
var state_machine__6445__auto____0 = (function (){
var statearr_20938 = [null,null,null,null,null,null,null,null];
(statearr_20938[(0)] = state_machine__6445__auto__);

(statearr_20938[(1)] = (1));

return statearr_20938;
});
var state_machine__6445__auto____1 = (function (state_20932){
while(true){
var ret_value__6446__auto__ = (function (){try{while(true){
var result__6447__auto__ = switch__6444__auto__.call(null,state_20932);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6447__auto__;
}
break;
}
}catch (e20939){if((e20939 instanceof Object)){
var ex__6448__auto__ = e20939;
var statearr_20940_20963 = state_20932;
(statearr_20940_20963[(5)] = ex__6448__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20932);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20939;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20964 = state_20932;
state_20932 = G__20964;
continue;
} else {
return ret_value__6446__auto__;
}
break;
}
});
state_machine__6445__auto__ = function(state_20932){
switch(arguments.length){
case 0:
return state_machine__6445__auto____0.call(this);
case 1:
return state_machine__6445__auto____1.call(this,state_20932);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6445__auto____0;
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6445__auto____1;
return state_machine__6445__auto__;
})()
;})(switch__6444__auto__,c__6459__auto__,map__20921,map__20921__$1,opts,on_cssload))
})();
var state__6461__auto__ = (function (){var statearr_20941 = f__6460__auto__.call(null);
(statearr_20941[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6459__auto__);

return statearr_20941;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6461__auto__);
});})(c__6459__auto__,map__20921,map__20921__$1,opts,on_cssload))
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
figwheel.client.watch_and_reload_STAR_ = (function watch_and_reload_STAR_(p__20965){
var map__20970 = p__20965;
var map__20970__$1 = ((cljs.core.seq_QMARK_.call(null,map__20970))?cljs.core.apply.call(null,cljs.core.hash_map,map__20970):map__20970);
var opts = map__20970__$1;
var on_compile_fail = cljs.core.get.call(null,map__20970__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
var jsload_callback = cljs.core.get.call(null,map__20970__$1,new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
var websocket_url = cljs.core.get.call(null,map__20970__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));
var retry_count = cljs.core.get.call(null,map__20970__$1,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875));
console.debug("Figwheel: trying to open cljs reload socket");

var socket = (new WebSocket(websocket_url));
socket.onmessage = ((function (socket,map__20970,map__20970__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (msg_str){
var msg = cljs.reader.read_string.call(null,msg_str.data);
var pred__20971 = cljs.core._EQ_;
var expr__20972 = new cljs.core.Keyword(null,"msg-name","msg-name",-353709863).cljs$core$IFn$_invoke$arity$1(msg);
if(cljs.core.truth_(pred__20971.call(null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),expr__20972))){
return figwheel.client.reload_js_files.call(null,opts,msg);
} else {
if(cljs.core.truth_(pred__20971.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),expr__20972))){
return figwheel.client.reload_css_files.call(null,opts,msg);
} else {
if(cljs.core.truth_(pred__20971.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__20972))){
return figwheel.client.compile_failed.call(null,msg,on_compile_fail);
} else {
return null;
}
}
}
});})(socket,map__20970,map__20970__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;

socket.onopen = ((function (socket,map__20970,map__20970__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){
figwheel.client.patch_goog_base.call(null);

return console.debug("Figwheel: socket connection established");
});})(socket,map__20970,map__20970__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;

socket.onclose = ((function (socket,map__20970,map__20970__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){
figwheel.client.log.call(null,opts,"Figwheel: socket closed or failed to open");

if((retry_count > (0))){
return window.setTimeout(((function (socket,map__20970,map__20970__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (){
return watch_and_reload_STAR_.call(null,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),(retry_count - (1))));
});})(socket,map__20970,map__20970__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
,(2000));
} else {
return null;
}
});})(socket,map__20970,map__20970__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;

return socket.onerror = ((function (socket,map__20970,map__20970__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){
return figwheel.client.log.call(null,opts,"Figwheel: socket error ");
});})(socket,map__20970,map__20970__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
});
figwheel.client.default_on_jsload = (function default_on_jsload(url){
return document.querySelector("body").dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj20977 = {"detail":url};
return obj20977;
})())));
});
figwheel.client.get_essential_messages = (function get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function error_msg_format(p__20978){
var map__20980 = p__20978;
var map__20980__$1 = ((cljs.core.seq_QMARK_.call(null,map__20980))?cljs.core.apply.call(null,cljs.core.hash_map,map__20980):map__20980);
var class$ = cljs.core.get.call(null,map__20980__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var message = cljs.core.get.call(null,map__20980__$1,new cljs.core.Keyword(null,"message","message",-406056002));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.default_on_compile_fail = (function default_on_compile_fail(p__20981){
var map__20987 = p__20981;
var map__20987__$1 = ((cljs.core.seq_QMARK_.call(null,map__20987))?cljs.core.apply.call(null,cljs.core.hash_map,map__20987):map__20987);
var ed = map__20987__$1;
var exception_data = cljs.core.get.call(null,map__20987__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var formatted_exception = cljs.core.get.call(null,map__20987__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
console.debug("Figwheel: Compile Exception");

var seq__20988_20992 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__20989_20993 = null;
var count__20990_20994 = (0);
var i__20991_20995 = (0);
while(true){
if((i__20991_20995 < count__20990_20994)){
var msg_20996 = cljs.core._nth.call(null,chunk__20989_20993,i__20991_20995);
console.log(msg_20996);

var G__20997 = seq__20988_20992;
var G__20998 = chunk__20989_20993;
var G__20999 = count__20990_20994;
var G__21000 = (i__20991_20995 + (1));
seq__20988_20992 = G__20997;
chunk__20989_20993 = G__20998;
count__20990_20994 = G__20999;
i__20991_20995 = G__21000;
continue;
} else {
var temp__4126__auto___21001 = cljs.core.seq.call(null,seq__20988_20992);
if(temp__4126__auto___21001){
var seq__20988_21002__$1 = temp__4126__auto___21001;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20988_21002__$1)){
var c__4417__auto___21003 = cljs.core.chunk_first.call(null,seq__20988_21002__$1);
var G__21004 = cljs.core.chunk_rest.call(null,seq__20988_21002__$1);
var G__21005 = c__4417__auto___21003;
var G__21006 = cljs.core.count.call(null,c__4417__auto___21003);
var G__21007 = (0);
seq__20988_20992 = G__21004;
chunk__20989_20993 = G__21005;
count__20990_20994 = G__21006;
i__20991_20995 = G__21007;
continue;
} else {
var msg_21008 = cljs.core.first.call(null,seq__20988_21002__$1);
console.log(msg_21008);

var G__21009 = cljs.core.next.call(null,seq__20988_21002__$1);
var G__21010 = null;
var G__21011 = (0);
var G__21012 = (0);
seq__20988_20992 = G__21009;
chunk__20989_20993 = G__21010;
count__20990_20994 = G__21011;
i__20991_20995 = G__21012;
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
var watch_and_reload__delegate = function (p__21013){
var map__21015 = p__21013;
var map__21015__$1 = ((cljs.core.seq_QMARK_.call(null,map__21015))?cljs.core.apply.call(null,cljs.core.hash_map,map__21015):map__21015);
var opts = map__21015__$1;
return figwheel.client.watch_and_reload_with_opts.call(null,opts);
};
var watch_and_reload = function (var_args){
var p__21013 = null;
if (arguments.length > 0) {
  p__21013 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return watch_and_reload__delegate.call(this,p__21013);};
watch_and_reload.cljs$lang$maxFixedArity = 0;
watch_and_reload.cljs$lang$applyTo = (function (arglist__21016){
var p__21013 = cljs.core.seq(arglist__21016);
return watch_and_reload__delegate(p__21013);
});
watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = watch_and_reload__delegate;
return watch_and_reload;
})()
;

//# sourceMappingURL=client.js.map