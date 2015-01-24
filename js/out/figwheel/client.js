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
var log__delegate = function (p__16818,args){
var map__16820 = p__16818;
var map__16820__$1 = ((cljs.core.seq_QMARK_.call(null,map__16820))?cljs.core.apply.call(null,cljs.core.hash_map,map__16820):map__16820);
var debug = cljs.core.get.call(null,map__16820__$1,new cljs.core.Keyword(null,"debug","debug",-1608172596));
if(cljs.core.truth_(debug)){
return console.log(cljs.core.to_array.call(null,args));
} else {
return null;
}
};
var log = function (p__16818,var_args){
var args = null;
if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return log__delegate.call(this,p__16818,args);};
log.cljs$lang$maxFixedArity = 1;
log.cljs$lang$applyTo = (function (arglist__16821){
var p__16818 = cljs.core.first(arglist__16821);
var args = cljs.core.rest(arglist__16821);
return log__delegate(p__16818,args);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
figwheel.client.reload_host = (function reload_host(p__16822){
var map__16824 = p__16822;
var map__16824__$1 = ((cljs.core.seq_QMARK_.call(null,map__16824))?cljs.core.apply.call(null,cljs.core.hash_map,map__16824):map__16824);
var websocket_url = cljs.core.get.call(null,map__16824__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));
return cljs.core.first.call(null,clojure.string.split.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,websocket_url,/^ws:/,""),/^\/\//,""),/\//));
});
figwheel.client.add_cache_buster = (function add_cache_buster(url){
return [cljs.core.str(url),cljs.core.str("?rel="),cljs.core.str((new Date()).getTime())].join('');
});
figwheel.client.js_reload = (function js_reload(p__16825,callback){
var map__16827 = p__16825;
var map__16827__$1 = ((cljs.core.seq_QMARK_.call(null,map__16827))?cljs.core.apply.call(null,cljs.core.hash_map,map__16827):map__16827);
var msg = map__16827__$1;
var dependency_file = cljs.core.get.call(null,map__16827__$1,new cljs.core.Keyword(null,"dependency-file","dependency-file",-1682436382));
var namespace = cljs.core.get.call(null,map__16827__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = cljs.core.get.call(null,map__16827__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
if(cljs.core.truth_((function (){var or__3630__auto__ = dependency_file;
if(cljs.core.truth_(or__3630__auto__)){
return or__3630__auto__;
} else {
return goog.isProvided_(namespace);
}
})())){
return goog.net.jsloader.load(figwheel.client.add_cache_buster.call(null,request_url)).addCallback(((function (map__16827,map__16827__$1,msg,dependency_file,namespace,request_url){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null));
});})(map__16827,map__16827__$1,msg,dependency_file,namespace,request_url))
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
figwheel.client.add_request_url = (function add_request_url(p__16828,p__16829){
var map__16832 = p__16828;
var map__16832__$1 = ((cljs.core.seq_QMARK_.call(null,map__16832))?cljs.core.apply.call(null,cljs.core.hash_map,map__16832):map__16832);
var opts = map__16832__$1;
var url_rewriter = cljs.core.get.call(null,map__16832__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));
var map__16833 = p__16829;
var map__16833__$1 = ((cljs.core.seq_QMARK_.call(null,map__16833))?cljs.core.apply.call(null,cljs.core.hash_map,map__16833):map__16833);
var d = map__16833__$1;
var file = cljs.core.get.call(null,map__16833__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"request-url","request-url",2100346596),url_rewriter.call(null,[cljs.core.str("//"),cljs.core.str(figwheel.client.reload_host.call(null,opts)),cljs.core.str(file)].join('')));
});
figwheel.client.add_request_urls = (function add_request_urls(opts,files){
return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.add_request_url,opts),files);
});
figwheel.client.reload_js_files = (function reload_js_files(p__16834,p__16835){
var map__16877 = p__16834;
var map__16877__$1 = ((cljs.core.seq_QMARK_.call(null,map__16877))?cljs.core.apply.call(null,cljs.core.hash_map,map__16877):map__16877);
var opts = map__16877__$1;
var on_jsload = cljs.core.get.call(null,map__16877__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var before_jsload = cljs.core.get.call(null,map__16877__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var map__16878 = p__16835;
var map__16878__$1 = ((cljs.core.seq_QMARK_.call(null,map__16878))?cljs.core.apply.call(null,cljs.core.hash_map,map__16878):map__16878);
var files = cljs.core.get.call(null,map__16878__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var c__6459__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6459__auto__,map__16877,map__16877__$1,opts,on_jsload,before_jsload,map__16878,map__16878__$1,files){
return (function (){
var f__6460__auto__ = (function (){var switch__6444__auto__ = ((function (c__6459__auto__,map__16877,map__16877__$1,opts,on_jsload,before_jsload,map__16878,map__16878__$1,files){
return (function (state_16901){
var state_val_16902 = (state_16901[(1)]);
if((state_val_16902 === (6))){
var inst_16883 = (state_16901[(7)]);
var inst_16892 = (state_16901[(2)]);
var inst_16893 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_16894 = [inst_16883];
var inst_16895 = (new cljs.core.PersistentVector(null,1,(5),inst_16893,inst_16894,null));
var inst_16896 = cljs.core.apply.call(null,on_jsload,inst_16895);
var state_16901__$1 = (function (){var statearr_16903 = state_16901;
(statearr_16903[(8)] = inst_16892);

return statearr_16903;
})();
var statearr_16904_16918 = state_16901__$1;
(statearr_16904_16918[(2)] = inst_16896);

(statearr_16904_16918[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16902 === (5))){
var inst_16899 = (state_16901[(2)]);
var state_16901__$1 = state_16901;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16901__$1,inst_16899);
} else {
if((state_val_16902 === (4))){
var state_16901__$1 = state_16901;
var statearr_16905_16919 = state_16901__$1;
(statearr_16905_16919[(2)] = null);

(statearr_16905_16919[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16902 === (3))){
var inst_16883 = (state_16901[(7)]);
var inst_16886 = console.debug("Figwheel: loaded these files");
var inst_16887 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_16883);
var inst_16888 = cljs.core.prn_str.call(null,inst_16887);
var inst_16889 = console.log(inst_16888);
var inst_16890 = cljs.core.async.timeout.call(null,(10));
var state_16901__$1 = (function (){var statearr_16906 = state_16901;
(statearr_16906[(9)] = inst_16889);

(statearr_16906[(10)] = inst_16886);

return statearr_16906;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16901__$1,(6),inst_16890);
} else {
if((state_val_16902 === (2))){
var inst_16883 = (state_16901[(7)]);
var inst_16883__$1 = (state_16901[(2)]);
var inst_16884 = cljs.core.not_empty.call(null,inst_16883__$1);
var state_16901__$1 = (function (){var statearr_16907 = state_16901;
(statearr_16907[(7)] = inst_16883__$1);

return statearr_16907;
})();
if(cljs.core.truth_(inst_16884)){
var statearr_16908_16920 = state_16901__$1;
(statearr_16908_16920[(1)] = (3));

} else {
var statearr_16909_16921 = state_16901__$1;
(statearr_16909_16921[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16902 === (1))){
var inst_16879 = before_jsload.call(null,files);
var inst_16880 = figwheel.client.add_request_urls.call(null,opts,files);
var inst_16881 = figwheel.client.load_all_js_files.call(null,inst_16880);
var state_16901__$1 = (function (){var statearr_16910 = state_16901;
(statearr_16910[(11)] = inst_16879);

return statearr_16910;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16901__$1,(2),inst_16881);
} else {
return null;
}
}
}
}
}
}
});})(c__6459__auto__,map__16877,map__16877__$1,opts,on_jsload,before_jsload,map__16878,map__16878__$1,files))
;
return ((function (switch__6444__auto__,c__6459__auto__,map__16877,map__16877__$1,opts,on_jsload,before_jsload,map__16878,map__16878__$1,files){
return (function() {
var state_machine__6445__auto__ = null;
var state_machine__6445__auto____0 = (function (){
var statearr_16914 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16914[(0)] = state_machine__6445__auto__);

(statearr_16914[(1)] = (1));

return statearr_16914;
});
var state_machine__6445__auto____1 = (function (state_16901){
while(true){
var ret_value__6446__auto__ = (function (){try{while(true){
var result__6447__auto__ = switch__6444__auto__.call(null,state_16901);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6447__auto__;
}
break;
}
}catch (e16915){if((e16915 instanceof Object)){
var ex__6448__auto__ = e16915;
var statearr_16916_16922 = state_16901;
(statearr_16916_16922[(5)] = ex__6448__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16901);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16915;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16923 = state_16901;
state_16901 = G__16923;
continue;
} else {
return ret_value__6446__auto__;
}
break;
}
});
state_machine__6445__auto__ = function(state_16901){
switch(arguments.length){
case 0:
return state_machine__6445__auto____0.call(this);
case 1:
return state_machine__6445__auto____1.call(this,state_16901);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6445__auto____0;
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6445__auto____1;
return state_machine__6445__auto__;
})()
;})(switch__6444__auto__,c__6459__auto__,map__16877,map__16877__$1,opts,on_jsload,before_jsload,map__16878,map__16878__$1,files))
})();
var state__6461__auto__ = (function (){var statearr_16917 = f__6460__auto__.call(null);
(statearr_16917[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6459__auto__);

return statearr_16917;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6461__auto__);
});})(c__6459__auto__,map__16877,map__16877__$1,opts,on_jsload,before_jsload,map__16878,map__16878__$1,files))
);

return c__6459__auto__;
});
figwheel.client.current_links = (function current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.truncate_url = (function truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),"http://",""),"https://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.matches_file_QMARK_ = (function matches_file_QMARK_(p__16924,link_href){
var map__16926 = p__16924;
var map__16926__$1 = ((cljs.core.seq_QMARK_.call(null,map__16926))?cljs.core.apply.call(null,cljs.core.hash_map,map__16926):map__16926);
var request_url = cljs.core.get.call(null,map__16926__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var file = cljs.core.get.call(null,map__16926__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
return (function (state_16947){
var state_val_16948 = (state_16947[(1)]);
if((state_val_16948 === (2))){
var inst_16944 = (state_16947[(2)]);
var inst_16945 = parent.removeChild(orig_link);
var state_16947__$1 = (function (){var statearr_16949 = state_16947;
(statearr_16949[(7)] = inst_16944);

return statearr_16949;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16947__$1,inst_16945);
} else {
if((state_val_16948 === (1))){
var inst_16942 = cljs.core.async.timeout.call(null,(200));
var state_16947__$1 = state_16947;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16947__$1,(2),inst_16942);
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
var statearr_16953 = [null,null,null,null,null,null,null,null];
(statearr_16953[(0)] = state_machine__6445__auto__);

(statearr_16953[(1)] = (1));

return statearr_16953;
});
var state_machine__6445__auto____1 = (function (state_16947){
while(true){
var ret_value__6446__auto__ = (function (){try{while(true){
var result__6447__auto__ = switch__6444__auto__.call(null,state_16947);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6447__auto__;
}
break;
}
}catch (e16954){if((e16954 instanceof Object)){
var ex__6448__auto__ = e16954;
var statearr_16955_16957 = state_16947;
(statearr_16955_16957[(5)] = ex__6448__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16947);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16954;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16958 = state_16947;
state_16947 = G__16958;
continue;
} else {
return ret_value__6446__auto__;
}
break;
}
});
state_machine__6445__auto__ = function(state_16947){
switch(arguments.length){
case 0:
return state_machine__6445__auto____0.call(this);
case 1:
return state_machine__6445__auto____1.call(this,state_16947);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6445__auto____0;
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6445__auto____1;
return state_machine__6445__auto__;
})()
;})(switch__6444__auto__,c__6459__auto__,parent))
})();
var state__6461__auto__ = (function (){var statearr_16956 = f__6460__auto__.call(null);
(statearr_16956[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6459__auto__);

return statearr_16956;
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
figwheel.client.reload_css_file = (function reload_css_file(p__16959){
var map__16961 = p__16959;
var map__16961__$1 = ((cljs.core.seq_QMARK_.call(null,map__16961))?cljs.core.apply.call(null,cljs.core.hash_map,map__16961):map__16961);
var f_data = map__16961__$1;
var request_url = cljs.core.get.call(null,map__16961__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var file = cljs.core.get.call(null,map__16961__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4124__auto__ = figwheel.client.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4124__auto__)){
var link = temp__4124__auto__;
return figwheel.client.add_link_to_doc.call(null,link,figwheel.client.clone_link.call(null,link,request_url));
} else {
return figwheel.client.add_link_to_doc.call(null,figwheel.client.create_link.call(null,request_url));
}
});
figwheel.client.reload_css_files = (function reload_css_files(p__16962,files_msg){
var map__16984 = p__16962;
var map__16984__$1 = ((cljs.core.seq_QMARK_.call(null,map__16984))?cljs.core.apply.call(null,cljs.core.hash_map,map__16984):map__16984);
var opts = map__16984__$1;
var on_cssload = cljs.core.get.call(null,map__16984__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var seq__16985_17005 = cljs.core.seq.call(null,figwheel.client.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__16986_17006 = null;
var count__16987_17007 = (0);
var i__16988_17008 = (0);
while(true){
if((i__16988_17008 < count__16987_17007)){
var f_17009 = cljs.core._nth.call(null,chunk__16986_17006,i__16988_17008);
figwheel.client.reload_css_file.call(null,f_17009);

var G__17010 = seq__16985_17005;
var G__17011 = chunk__16986_17006;
var G__17012 = count__16987_17007;
var G__17013 = (i__16988_17008 + (1));
seq__16985_17005 = G__17010;
chunk__16986_17006 = G__17011;
count__16987_17007 = G__17012;
i__16988_17008 = G__17013;
continue;
} else {
var temp__4126__auto___17014 = cljs.core.seq.call(null,seq__16985_17005);
if(temp__4126__auto___17014){
var seq__16985_17015__$1 = temp__4126__auto___17014;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16985_17015__$1)){
var c__4417__auto___17016 = cljs.core.chunk_first.call(null,seq__16985_17015__$1);
var G__17017 = cljs.core.chunk_rest.call(null,seq__16985_17015__$1);
var G__17018 = c__4417__auto___17016;
var G__17019 = cljs.core.count.call(null,c__4417__auto___17016);
var G__17020 = (0);
seq__16985_17005 = G__17017;
chunk__16986_17006 = G__17018;
count__16987_17007 = G__17019;
i__16988_17008 = G__17020;
continue;
} else {
var f_17021 = cljs.core.first.call(null,seq__16985_17015__$1);
figwheel.client.reload_css_file.call(null,f_17021);

var G__17022 = cljs.core.next.call(null,seq__16985_17015__$1);
var G__17023 = null;
var G__17024 = (0);
var G__17025 = (0);
seq__16985_17005 = G__17022;
chunk__16986_17006 = G__17023;
count__16987_17007 = G__17024;
i__16988_17008 = G__17025;
continue;
}
} else {
}
}
break;
}

var c__6459__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6459__auto__,map__16984,map__16984__$1,opts,on_cssload){
return (function (){
var f__6460__auto__ = (function (){var switch__6444__auto__ = ((function (c__6459__auto__,map__16984,map__16984__$1,opts,on_cssload){
return (function (state_16995){
var state_val_16996 = (state_16995[(1)]);
if((state_val_16996 === (2))){
var inst_16991 = (state_16995[(2)]);
var inst_16992 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);
var inst_16993 = on_cssload.call(null,inst_16992);
var state_16995__$1 = (function (){var statearr_16997 = state_16995;
(statearr_16997[(7)] = inst_16991);

return statearr_16997;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16995__$1,inst_16993);
} else {
if((state_val_16996 === (1))){
var inst_16989 = cljs.core.async.timeout.call(null,(100));
var state_16995__$1 = state_16995;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16995__$1,(2),inst_16989);
} else {
return null;
}
}
});})(c__6459__auto__,map__16984,map__16984__$1,opts,on_cssload))
;
return ((function (switch__6444__auto__,c__6459__auto__,map__16984,map__16984__$1,opts,on_cssload){
return (function() {
var state_machine__6445__auto__ = null;
var state_machine__6445__auto____0 = (function (){
var statearr_17001 = [null,null,null,null,null,null,null,null];
(statearr_17001[(0)] = state_machine__6445__auto__);

(statearr_17001[(1)] = (1));

return statearr_17001;
});
var state_machine__6445__auto____1 = (function (state_16995){
while(true){
var ret_value__6446__auto__ = (function (){try{while(true){
var result__6447__auto__ = switch__6444__auto__.call(null,state_16995);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6447__auto__;
}
break;
}
}catch (e17002){if((e17002 instanceof Object)){
var ex__6448__auto__ = e17002;
var statearr_17003_17026 = state_16995;
(statearr_17003_17026[(5)] = ex__6448__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16995);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17002;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17027 = state_16995;
state_16995 = G__17027;
continue;
} else {
return ret_value__6446__auto__;
}
break;
}
});
state_machine__6445__auto__ = function(state_16995){
switch(arguments.length){
case 0:
return state_machine__6445__auto____0.call(this);
case 1:
return state_machine__6445__auto____1.call(this,state_16995);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6445__auto____0;
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6445__auto____1;
return state_machine__6445__auto__;
})()
;})(switch__6444__auto__,c__6459__auto__,map__16984,map__16984__$1,opts,on_cssload))
})();
var state__6461__auto__ = (function (){var statearr_17004 = f__6460__auto__.call(null);
(statearr_17004[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6459__auto__);

return statearr_17004;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6461__auto__);
});})(c__6459__auto__,map__16984,map__16984__$1,opts,on_cssload))
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
figwheel.client.watch_and_reload_STAR_ = (function watch_and_reload_STAR_(p__17028){
var map__17033 = p__17028;
var map__17033__$1 = ((cljs.core.seq_QMARK_.call(null,map__17033))?cljs.core.apply.call(null,cljs.core.hash_map,map__17033):map__17033);
var opts = map__17033__$1;
var on_compile_fail = cljs.core.get.call(null,map__17033__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
var jsload_callback = cljs.core.get.call(null,map__17033__$1,new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
var websocket_url = cljs.core.get.call(null,map__17033__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));
var retry_count = cljs.core.get.call(null,map__17033__$1,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875));
console.debug("Figwheel: trying to open cljs reload socket");

var socket = (new WebSocket(websocket_url));
socket.onmessage = ((function (socket,map__17033,map__17033__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (msg_str){
var msg = cljs.reader.read_string.call(null,msg_str.data);
var pred__17034 = cljs.core._EQ_;
var expr__17035 = new cljs.core.Keyword(null,"msg-name","msg-name",-353709863).cljs$core$IFn$_invoke$arity$1(msg);
if(cljs.core.truth_(pred__17034.call(null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),expr__17035))){
return figwheel.client.reload_js_files.call(null,opts,msg);
} else {
if(cljs.core.truth_(pred__17034.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),expr__17035))){
return figwheel.client.reload_css_files.call(null,opts,msg);
} else {
if(cljs.core.truth_(pred__17034.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__17035))){
return figwheel.client.compile_failed.call(null,msg,on_compile_fail);
} else {
return null;
}
}
}
});})(socket,map__17033,map__17033__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;

socket.onopen = ((function (socket,map__17033,map__17033__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){
figwheel.client.patch_goog_base.call(null);

return console.debug("Figwheel: socket connection established");
});})(socket,map__17033,map__17033__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;

socket.onclose = ((function (socket,map__17033,map__17033__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){
figwheel.client.log.call(null,opts,"Figwheel: socket closed or failed to open");

if((retry_count > (0))){
return window.setTimeout(((function (socket,map__17033,map__17033__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (){
return watch_and_reload_STAR_.call(null,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),(retry_count - (1))));
});})(socket,map__17033,map__17033__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
,(2000));
} else {
return null;
}
});})(socket,map__17033,map__17033__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;

return socket.onerror = ((function (socket,map__17033,map__17033__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){
return figwheel.client.log.call(null,opts,"Figwheel: socket error ");
});})(socket,map__17033,map__17033__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
});
figwheel.client.default_on_jsload = (function default_on_jsload(url){
return document.querySelector("body").dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj17040 = {"detail":url};
return obj17040;
})())));
});
figwheel.client.get_essential_messages = (function get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function error_msg_format(p__17041){
var map__17043 = p__17041;
var map__17043__$1 = ((cljs.core.seq_QMARK_.call(null,map__17043))?cljs.core.apply.call(null,cljs.core.hash_map,map__17043):map__17043);
var class$ = cljs.core.get.call(null,map__17043__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var message = cljs.core.get.call(null,map__17043__$1,new cljs.core.Keyword(null,"message","message",-406056002));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.default_on_compile_fail = (function default_on_compile_fail(p__17044){
var map__17050 = p__17044;
var map__17050__$1 = ((cljs.core.seq_QMARK_.call(null,map__17050))?cljs.core.apply.call(null,cljs.core.hash_map,map__17050):map__17050);
var ed = map__17050__$1;
var exception_data = cljs.core.get.call(null,map__17050__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var formatted_exception = cljs.core.get.call(null,map__17050__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
console.debug("Figwheel: Compile Exception");

var seq__17051_17055 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__17052_17056 = null;
var count__17053_17057 = (0);
var i__17054_17058 = (0);
while(true){
if((i__17054_17058 < count__17053_17057)){
var msg_17059 = cljs.core._nth.call(null,chunk__17052_17056,i__17054_17058);
console.log(msg_17059);

var G__17060 = seq__17051_17055;
var G__17061 = chunk__17052_17056;
var G__17062 = count__17053_17057;
var G__17063 = (i__17054_17058 + (1));
seq__17051_17055 = G__17060;
chunk__17052_17056 = G__17061;
count__17053_17057 = G__17062;
i__17054_17058 = G__17063;
continue;
} else {
var temp__4126__auto___17064 = cljs.core.seq.call(null,seq__17051_17055);
if(temp__4126__auto___17064){
var seq__17051_17065__$1 = temp__4126__auto___17064;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17051_17065__$1)){
var c__4417__auto___17066 = cljs.core.chunk_first.call(null,seq__17051_17065__$1);
var G__17067 = cljs.core.chunk_rest.call(null,seq__17051_17065__$1);
var G__17068 = c__4417__auto___17066;
var G__17069 = cljs.core.count.call(null,c__4417__auto___17066);
var G__17070 = (0);
seq__17051_17055 = G__17067;
chunk__17052_17056 = G__17068;
count__17053_17057 = G__17069;
i__17054_17058 = G__17070;
continue;
} else {
var msg_17071 = cljs.core.first.call(null,seq__17051_17065__$1);
console.log(msg_17071);

var G__17072 = cljs.core.next.call(null,seq__17051_17065__$1);
var G__17073 = null;
var G__17074 = (0);
var G__17075 = (0);
seq__17051_17055 = G__17072;
chunk__17052_17056 = G__17073;
count__17053_17057 = G__17074;
i__17054_17058 = G__17075;
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
var watch_and_reload__delegate = function (p__17076){
var map__17078 = p__17076;
var map__17078__$1 = ((cljs.core.seq_QMARK_.call(null,map__17078))?cljs.core.apply.call(null,cljs.core.hash_map,map__17078):map__17078);
var opts = map__17078__$1;
return figwheel.client.watch_and_reload_with_opts.call(null,opts);
};
var watch_and_reload = function (var_args){
var p__17076 = null;
if (arguments.length > 0) {
  p__17076 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return watch_and_reload__delegate.call(this,p__17076);};
watch_and_reload.cljs$lang$maxFixedArity = 0;
watch_and_reload.cljs$lang$applyTo = (function (arglist__17079){
var p__17076 = cljs.core.seq(arglist__17079);
return watch_and_reload__delegate(p__17076);
});
watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = watch_and_reload__delegate;
return watch_and_reload;
})()
;

//# sourceMappingURL=client.js.map