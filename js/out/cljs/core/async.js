// Compiled by ClojureScript 0.0-2511
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function fn_handler(f){
if(typeof cljs.core.async.t12903 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t12903 = (function (f,fn_handler,meta12904){
this.f = f;
this.fn_handler = fn_handler;
this.meta12904 = meta12904;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12903.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t12903.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t12903.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t12903.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12905){
var self__ = this;
var _12905__$1 = this;
return self__.meta12904;
});

cljs.core.async.t12903.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12905,meta12904__$1){
var self__ = this;
var _12905__$1 = this;
return (new cljs.core.async.t12903(self__.f,self__.fn_handler,meta12904__$1));
});

cljs.core.async.t12903.cljs$lang$type = true;

cljs.core.async.t12903.cljs$lang$ctorStr = "cljs.core.async/t12903";

cljs.core.async.t12903.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t12903");
});

cljs.core.async.__GT_t12903 = (function __GT_t12903(f__$1,fn_handler__$1,meta12904){
return (new cljs.core.async.t12903(f__$1,fn_handler__$1,meta12904));
});

}

return (new cljs.core.async.t12903(f,fn_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),20,new cljs.core.Keyword(null,"end-line","end-line",1837326455),16,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),13,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/chrism/dev/farn/resources/public/js/out/cljs/core/async.cljs"], null)));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){
var G__12907 = buff;
if(G__12907){
var bit__4311__auto__ = null;
if(cljs.core.truth_((function (){var or__3630__auto__ = bit__4311__auto__;
if(cljs.core.truth_(or__3630__auto__)){
return or__3630__auto__;
} else {
return G__12907.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__12907.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__12907);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__12907);
}
});
/**
* Creates a channel with an optional buffer, an optional transducer (like (map f),
* (filter p) etc or a composition thereof), and an optional exception handler.
* If buf-or-n is a number, will create and use a fixed buffer of that size. If a
* transducer is supplied a buffer must be specified. ex-handler must be a
* fn of one argument - if an exception occurs during transformation it will be called
* with the thrown value as an argument, and any non-nil return value will be placed
* in the channel.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){
return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){
return chan.call(null,buf_or_n,null,null);
});
var chan__2 = (function (buf_or_n,xform){
return chan.call(null,buf_or_n,xform,null);
});
var chan__3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});
chan = function(buf_or_n,xform,ex_handler){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
case 2:
return chan__2.call(this,buf_or_n,xform);
case 3:
return chan__3.call(this,buf_or_n,xform,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
chan.cljs$core$IFn$_invoke$arity$2 = chan__2;
chan.cljs$core$IFn$_invoke$arity$3 = chan__3;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
* Returns true unless port is already closed
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){
return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_12908 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_12908);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_12908,ret){
return (function (){
return fn1.call(null,val_12908);
});})(val_12908,ret))
);
}
} else {
}

return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
* Returns true unless port is already closed.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){
var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4124__auto__)){
var ret = temp__4124__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});
var put_BANG___3 = (function (port,val,fn1){
return put_BANG_.call(null,port,val,fn1,true);
});
var put_BANG___4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4124__auto__)){
var retb = temp__4124__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4124__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4124__auto__))
);
}

return ret;
} else {
return true;
}
});
put_BANG_ = function(port,val,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn1);
case 4:
return put_BANG___4.call(this,port,val,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){
var a = (new Array(n));
var n__4517__auto___12909 = n;
var x_12910 = (0);
while(true){
if((x_12910 < n__4517__auto___12909)){
(a[x_12910] = (0));

var G__12911 = (x_12910 + (1));
x_12910 = G__12911;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__12912 = (i + (1));
i = G__12912;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t12916 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t12916 = (function (flag,alt_flag,meta12917){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta12917 = meta12917;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12916.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t12916.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t12916.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t12916.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_12918){
var self__ = this;
var _12918__$1 = this;
return self__.meta12917;
});})(flag))
;

cljs.core.async.t12916.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_12918,meta12917__$1){
var self__ = this;
var _12918__$1 = this;
return (new cljs.core.async.t12916(self__.flag,self__.alt_flag,meta12917__$1));
});})(flag))
;

cljs.core.async.t12916.cljs$lang$type = true;

cljs.core.async.t12916.cljs$lang$ctorStr = "cljs.core.async/t12916";

cljs.core.async.t12916.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t12916");
});})(flag))
;

cljs.core.async.__GT_t12916 = ((function (flag){
return (function __GT_t12916(flag__$1,alt_flag__$1,meta12917){
return (new cljs.core.async.t12916(flag__$1,alt_flag__$1,meta12917));
});})(flag))
;

}

return (new cljs.core.async.t12916(flag,alt_flag,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),15,new cljs.core.Keyword(null,"end-line","end-line",1837326455),146,new cljs.core.Keyword(null,"column","column",2078222095),5,new cljs.core.Keyword(null,"line","line",212345235),141,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/chrism/dev/farn/resources/public/js/out/cljs/core/async.cljs"], null)));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){
if(typeof cljs.core.async.t12922 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t12922 = (function (cb,flag,alt_handler,meta12923){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta12923 = meta12923;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12922.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t12922.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t12922.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t12922.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12924){
var self__ = this;
var _12924__$1 = this;
return self__.meta12923;
});

cljs.core.async.t12922.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12924,meta12923__$1){
var self__ = this;
var _12924__$1 = this;
return (new cljs.core.async.t12922(self__.cb,self__.flag,self__.alt_handler,meta12923__$1));
});

cljs.core.async.t12922.cljs$lang$type = true;

cljs.core.async.t12922.cljs$lang$ctorStr = "cljs.core.async/t12922";

cljs.core.async.t12922.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t12922");
});

cljs.core.async.__GT_t12922 = (function __GT_t12922(cb__$1,flag__$1,alt_handler__$1,meta12923){
return (new cljs.core.async.t12922(cb__$1,flag__$1,alt_handler__$1,meta12923));
});

}

return (new cljs.core.async.t12922(cb,flag,alt_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),11,new cljs.core.Keyword(null,"end-line","end-line",1837326455),154,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),149,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/chrism/dev/farn/resources/public/js/out/cljs/core/async.cljs"], null)));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__12925_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__12925_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__12926_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__12926_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3630__auto__ = wport;
if(cljs.core.truth_(or__3630__auto__)){
return or__3630__auto__;
} else {
return port;
}
})()], null));
} else {
var G__12927 = (i + (1));
i = G__12927;
continue;
}
} else {
return null;
}
break;
}
})();
var or__3630__auto__ = ret;
if(cljs.core.truth_(or__3630__auto__)){
return or__3630__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4126__auto__ = (function (){var and__3618__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__3618__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__3618__auto__;
}
})();
if(cljs.core.truth_(temp__4126__auto__)){
var got = temp__4126__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints,
* which can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and a
* boolean (true unless already closed, as per put!) for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__12928){
var map__12930 = p__12928;
var map__12930__$1 = ((cljs.core.seq_QMARK_.call(null,map__12930))?cljs.core.apply.call(null,cljs.core.hash_map,map__12930):map__12930);
var opts = map__12930__$1;
throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__12928 = null;
if (arguments.length > 1) {
  p__12928 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return alts_BANG___delegate.call(this,ports,p__12928);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__12931){
var ports = cljs.core.first(arglist__12931);
var p__12928 = cljs.core.rest(arglist__12931);
return alts_BANG___delegate(ports,p__12928);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){
return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){
var c__6459__auto___13026 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6459__auto___13026){
return (function (){
var f__6460__auto__ = (function (){var switch__6444__auto__ = ((function (c__6459__auto___13026){
return (function (state_13002){
var state_val_13003 = (state_13002[(1)]);
if((state_val_13003 === (7))){
var inst_12998 = (state_13002[(2)]);
var state_13002__$1 = state_13002;
var statearr_13004_13027 = state_13002__$1;
(statearr_13004_13027[(2)] = inst_12998);

(statearr_13004_13027[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13003 === (1))){
var state_13002__$1 = state_13002;
var statearr_13005_13028 = state_13002__$1;
(statearr_13005_13028[(2)] = null);

(statearr_13005_13028[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13003 === (4))){
var inst_12981 = (state_13002[(7)]);
var inst_12981__$1 = (state_13002[(2)]);
var inst_12982 = (inst_12981__$1 == null);
var state_13002__$1 = (function (){var statearr_13006 = state_13002;
(statearr_13006[(7)] = inst_12981__$1);

return statearr_13006;
})();
if(cljs.core.truth_(inst_12982)){
var statearr_13007_13029 = state_13002__$1;
(statearr_13007_13029[(1)] = (5));

} else {
var statearr_13008_13030 = state_13002__$1;
(statearr_13008_13030[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13003 === (13))){
var state_13002__$1 = state_13002;
var statearr_13009_13031 = state_13002__$1;
(statearr_13009_13031[(2)] = null);

(statearr_13009_13031[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13003 === (6))){
var inst_12981 = (state_13002[(7)]);
var state_13002__$1 = state_13002;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13002__$1,(11),to,inst_12981);
} else {
if((state_val_13003 === (3))){
var inst_13000 = (state_13002[(2)]);
var state_13002__$1 = state_13002;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13002__$1,inst_13000);
} else {
if((state_val_13003 === (12))){
var state_13002__$1 = state_13002;
var statearr_13010_13032 = state_13002__$1;
(statearr_13010_13032[(2)] = null);

(statearr_13010_13032[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13003 === (2))){
var state_13002__$1 = state_13002;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13002__$1,(4),from);
} else {
if((state_val_13003 === (11))){
var inst_12991 = (state_13002[(2)]);
var state_13002__$1 = state_13002;
if(cljs.core.truth_(inst_12991)){
var statearr_13011_13033 = state_13002__$1;
(statearr_13011_13033[(1)] = (12));

} else {
var statearr_13012_13034 = state_13002__$1;
(statearr_13012_13034[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13003 === (9))){
var state_13002__$1 = state_13002;
var statearr_13013_13035 = state_13002__$1;
(statearr_13013_13035[(2)] = null);

(statearr_13013_13035[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13003 === (5))){
var state_13002__$1 = state_13002;
if(cljs.core.truth_(close_QMARK_)){
var statearr_13014_13036 = state_13002__$1;
(statearr_13014_13036[(1)] = (8));

} else {
var statearr_13015_13037 = state_13002__$1;
(statearr_13015_13037[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13003 === (14))){
var inst_12996 = (state_13002[(2)]);
var state_13002__$1 = state_13002;
var statearr_13016_13038 = state_13002__$1;
(statearr_13016_13038[(2)] = inst_12996);

(statearr_13016_13038[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13003 === (10))){
var inst_12988 = (state_13002[(2)]);
var state_13002__$1 = state_13002;
var statearr_13017_13039 = state_13002__$1;
(statearr_13017_13039[(2)] = inst_12988);

(statearr_13017_13039[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13003 === (8))){
var inst_12985 = cljs.core.async.close_BANG_.call(null,to);
var state_13002__$1 = state_13002;
var statearr_13018_13040 = state_13002__$1;
(statearr_13018_13040[(2)] = inst_12985);

(statearr_13018_13040[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6459__auto___13026))
;
return ((function (switch__6444__auto__,c__6459__auto___13026){
return (function() {
var state_machine__6445__auto__ = null;
var state_machine__6445__auto____0 = (function (){
var statearr_13022 = [null,null,null,null,null,null,null,null];
(statearr_13022[(0)] = state_machine__6445__auto__);

(statearr_13022[(1)] = (1));

return statearr_13022;
});
var state_machine__6445__auto____1 = (function (state_13002){
while(true){
var ret_value__6446__auto__ = (function (){try{while(true){
var result__6447__auto__ = switch__6444__auto__.call(null,state_13002);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6447__auto__;
}
break;
}
}catch (e13023){if((e13023 instanceof Object)){
var ex__6448__auto__ = e13023;
var statearr_13024_13041 = state_13002;
(statearr_13024_13041[(5)] = ex__6448__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13002);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13023;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13042 = state_13002;
state_13002 = G__13042;
continue;
} else {
return ret_value__6446__auto__;
}
break;
}
});
state_machine__6445__auto__ = function(state_13002){
switch(arguments.length){
case 0:
return state_machine__6445__auto____0.call(this);
case 1:
return state_machine__6445__auto____1.call(this,state_13002);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6445__auto____0;
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6445__auto____1;
return state_machine__6445__auto__;
})()
;})(switch__6444__auto__,c__6459__auto___13026))
})();
var state__6461__auto__ = (function (){var statearr_13025 = f__6460__auto__.call(null);
(statearr_13025[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6459__auto___13026);

return statearr_13025;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6461__auto__);
});})(c__6459__auto___13026))
);


return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
cljs.core.async.pipeline_STAR_ = (function pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__13226){
var vec__13227 = p__13226;
var v = cljs.core.nth.call(null,vec__13227,(0),null);
var p = cljs.core.nth.call(null,vec__13227,(1),null);
var job = vec__13227;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__6459__auto___13409 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6459__auto___13409,res,vec__13227,v,p,job,jobs,results){
return (function (){
var f__6460__auto__ = (function (){var switch__6444__auto__ = ((function (c__6459__auto___13409,res,vec__13227,v,p,job,jobs,results){
return (function (state_13232){
var state_val_13233 = (state_13232[(1)]);
if((state_val_13233 === (2))){
var inst_13229 = (state_13232[(2)]);
var inst_13230 = cljs.core.async.close_BANG_.call(null,res);
var state_13232__$1 = (function (){var statearr_13234 = state_13232;
(statearr_13234[(7)] = inst_13229);

return statearr_13234;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13232__$1,inst_13230);
} else {
if((state_val_13233 === (1))){
var state_13232__$1 = state_13232;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13232__$1,(2),res,v);
} else {
return null;
}
}
});})(c__6459__auto___13409,res,vec__13227,v,p,job,jobs,results))
;
return ((function (switch__6444__auto__,c__6459__auto___13409,res,vec__13227,v,p,job,jobs,results){
return (function() {
var state_machine__6445__auto__ = null;
var state_machine__6445__auto____0 = (function (){
var statearr_13238 = [null,null,null,null,null,null,null,null];
(statearr_13238[(0)] = state_machine__6445__auto__);

(statearr_13238[(1)] = (1));

return statearr_13238;
});
var state_machine__6445__auto____1 = (function (state_13232){
while(true){
var ret_value__6446__auto__ = (function (){try{while(true){
var result__6447__auto__ = switch__6444__auto__.call(null,state_13232);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6447__auto__;
}
break;
}
}catch (e13239){if((e13239 instanceof Object)){
var ex__6448__auto__ = e13239;
var statearr_13240_13410 = state_13232;
(statearr_13240_13410[(5)] = ex__6448__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13232);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13239;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13411 = state_13232;
state_13232 = G__13411;
continue;
} else {
return ret_value__6446__auto__;
}
break;
}
});
state_machine__6445__auto__ = function(state_13232){
switch(arguments.length){
case 0:
return state_machine__6445__auto____0.call(this);
case 1:
return state_machine__6445__auto____1.call(this,state_13232);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6445__auto____0;
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6445__auto____1;
return state_machine__6445__auto__;
})()
;})(switch__6444__auto__,c__6459__auto___13409,res,vec__13227,v,p,job,jobs,results))
})();
var state__6461__auto__ = (function (){var statearr_13241 = f__6460__auto__.call(null);
(statearr_13241[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6459__auto___13409);

return statearr_13241;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6461__auto__);
});})(c__6459__auto___13409,res,vec__13227,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__13242){
var vec__13243 = p__13242;
var v = cljs.core.nth.call(null,vec__13243,(0),null);
var p = cljs.core.nth.call(null,vec__13243,(1),null);
var job = vec__13243;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__4517__auto___13412 = n;
var __13413 = (0);
while(true){
if((__13413 < n__4517__auto___13412)){
var G__13244_13414 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__13244_13414) {
case "async":
var c__6459__auto___13416 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__13413,c__6459__auto___13416,G__13244_13414,n__4517__auto___13412,jobs,results,process,async){
return (function (){
var f__6460__auto__ = (function (){var switch__6444__auto__ = ((function (__13413,c__6459__auto___13416,G__13244_13414,n__4517__auto___13412,jobs,results,process,async){
return (function (state_13257){
var state_val_13258 = (state_13257[(1)]);
if((state_val_13258 === (7))){
var inst_13253 = (state_13257[(2)]);
var state_13257__$1 = state_13257;
var statearr_13259_13417 = state_13257__$1;
(statearr_13259_13417[(2)] = inst_13253);

(statearr_13259_13417[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13258 === (6))){
var state_13257__$1 = state_13257;
var statearr_13260_13418 = state_13257__$1;
(statearr_13260_13418[(2)] = null);

(statearr_13260_13418[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13258 === (5))){
var state_13257__$1 = state_13257;
var statearr_13261_13419 = state_13257__$1;
(statearr_13261_13419[(2)] = null);

(statearr_13261_13419[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13258 === (4))){
var inst_13247 = (state_13257[(2)]);
var inst_13248 = async.call(null,inst_13247);
var state_13257__$1 = state_13257;
if(cljs.core.truth_(inst_13248)){
var statearr_13262_13420 = state_13257__$1;
(statearr_13262_13420[(1)] = (5));

} else {
var statearr_13263_13421 = state_13257__$1;
(statearr_13263_13421[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13258 === (3))){
var inst_13255 = (state_13257[(2)]);
var state_13257__$1 = state_13257;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13257__$1,inst_13255);
} else {
if((state_val_13258 === (2))){
var state_13257__$1 = state_13257;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13257__$1,(4),jobs);
} else {
if((state_val_13258 === (1))){
var state_13257__$1 = state_13257;
var statearr_13264_13422 = state_13257__$1;
(statearr_13264_13422[(2)] = null);

(statearr_13264_13422[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__13413,c__6459__auto___13416,G__13244_13414,n__4517__auto___13412,jobs,results,process,async))
;
return ((function (__13413,switch__6444__auto__,c__6459__auto___13416,G__13244_13414,n__4517__auto___13412,jobs,results,process,async){
return (function() {
var state_machine__6445__auto__ = null;
var state_machine__6445__auto____0 = (function (){
var statearr_13268 = [null,null,null,null,null,null,null];
(statearr_13268[(0)] = state_machine__6445__auto__);

(statearr_13268[(1)] = (1));

return statearr_13268;
});
var state_machine__6445__auto____1 = (function (state_13257){
while(true){
var ret_value__6446__auto__ = (function (){try{while(true){
var result__6447__auto__ = switch__6444__auto__.call(null,state_13257);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6447__auto__;
}
break;
}
}catch (e13269){if((e13269 instanceof Object)){
var ex__6448__auto__ = e13269;
var statearr_13270_13423 = state_13257;
(statearr_13270_13423[(5)] = ex__6448__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13257);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13269;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13424 = state_13257;
state_13257 = G__13424;
continue;
} else {
return ret_value__6446__auto__;
}
break;
}
});
state_machine__6445__auto__ = function(state_13257){
switch(arguments.length){
case 0:
return state_machine__6445__auto____0.call(this);
case 1:
return state_machine__6445__auto____1.call(this,state_13257);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6445__auto____0;
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6445__auto____1;
return state_machine__6445__auto__;
})()
;})(__13413,switch__6444__auto__,c__6459__auto___13416,G__13244_13414,n__4517__auto___13412,jobs,results,process,async))
})();
var state__6461__auto__ = (function (){var statearr_13271 = f__6460__auto__.call(null);
(statearr_13271[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6459__auto___13416);

return statearr_13271;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6461__auto__);
});})(__13413,c__6459__auto___13416,G__13244_13414,n__4517__auto___13412,jobs,results,process,async))
);


break;
case "compute":
var c__6459__auto___13425 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__13413,c__6459__auto___13425,G__13244_13414,n__4517__auto___13412,jobs,results,process,async){
return (function (){
var f__6460__auto__ = (function (){var switch__6444__auto__ = ((function (__13413,c__6459__auto___13425,G__13244_13414,n__4517__auto___13412,jobs,results,process,async){
return (function (state_13284){
var state_val_13285 = (state_13284[(1)]);
if((state_val_13285 === (7))){
var inst_13280 = (state_13284[(2)]);
var state_13284__$1 = state_13284;
var statearr_13286_13426 = state_13284__$1;
(statearr_13286_13426[(2)] = inst_13280);

(statearr_13286_13426[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13285 === (6))){
var state_13284__$1 = state_13284;
var statearr_13287_13427 = state_13284__$1;
(statearr_13287_13427[(2)] = null);

(statearr_13287_13427[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13285 === (5))){
var state_13284__$1 = state_13284;
var statearr_13288_13428 = state_13284__$1;
(statearr_13288_13428[(2)] = null);

(statearr_13288_13428[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13285 === (4))){
var inst_13274 = (state_13284[(2)]);
var inst_13275 = process.call(null,inst_13274);
var state_13284__$1 = state_13284;
if(cljs.core.truth_(inst_13275)){
var statearr_13289_13429 = state_13284__$1;
(statearr_13289_13429[(1)] = (5));

} else {
var statearr_13290_13430 = state_13284__$1;
(statearr_13290_13430[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13285 === (3))){
var inst_13282 = (state_13284[(2)]);
var state_13284__$1 = state_13284;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13284__$1,inst_13282);
} else {
if((state_val_13285 === (2))){
var state_13284__$1 = state_13284;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13284__$1,(4),jobs);
} else {
if((state_val_13285 === (1))){
var state_13284__$1 = state_13284;
var statearr_13291_13431 = state_13284__$1;
(statearr_13291_13431[(2)] = null);

(statearr_13291_13431[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__13413,c__6459__auto___13425,G__13244_13414,n__4517__auto___13412,jobs,results,process,async))
;
return ((function (__13413,switch__6444__auto__,c__6459__auto___13425,G__13244_13414,n__4517__auto___13412,jobs,results,process,async){
return (function() {
var state_machine__6445__auto__ = null;
var state_machine__6445__auto____0 = (function (){
var statearr_13295 = [null,null,null,null,null,null,null];
(statearr_13295[(0)] = state_machine__6445__auto__);

(statearr_13295[(1)] = (1));

return statearr_13295;
});
var state_machine__6445__auto____1 = (function (state_13284){
while(true){
var ret_value__6446__auto__ = (function (){try{while(true){
var result__6447__auto__ = switch__6444__auto__.call(null,state_13284);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6447__auto__;
}
break;
}
}catch (e13296){if((e13296 instanceof Object)){
var ex__6448__auto__ = e13296;
var statearr_13297_13432 = state_13284;
(statearr_13297_13432[(5)] = ex__6448__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13284);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13296;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13433 = state_13284;
state_13284 = G__13433;
continue;
} else {
return ret_value__6446__auto__;
}
break;
}
});
state_machine__6445__auto__ = function(state_13284){
switch(arguments.length){
case 0:
return state_machine__6445__auto____0.call(this);
case 1:
return state_machine__6445__auto____1.call(this,state_13284);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6445__auto____0;
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6445__auto____1;
return state_machine__6445__auto__;
})()
;})(__13413,switch__6444__auto__,c__6459__auto___13425,G__13244_13414,n__4517__auto___13412,jobs,results,process,async))
})();
var state__6461__auto__ = (function (){var statearr_13298 = f__6460__auto__.call(null);
(statearr_13298[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6459__auto___13425);

return statearr_13298;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6461__auto__);
});})(__13413,c__6459__auto___13425,G__13244_13414,n__4517__auto___13412,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__13434 = (__13413 + (1));
__13413 = G__13434;
continue;
} else {
}
break;
}

var c__6459__auto___13435 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6459__auto___13435,jobs,results,process,async){
return (function (){
var f__6460__auto__ = (function (){var switch__6444__auto__ = ((function (c__6459__auto___13435,jobs,results,process,async){
return (function (state_13320){
var state_val_13321 = (state_13320[(1)]);
if((state_val_13321 === (9))){
var inst_13313 = (state_13320[(2)]);
var state_13320__$1 = (function (){var statearr_13322 = state_13320;
(statearr_13322[(7)] = inst_13313);

return statearr_13322;
})();
var statearr_13323_13436 = state_13320__$1;
(statearr_13323_13436[(2)] = null);

(statearr_13323_13436[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13321 === (8))){
var inst_13306 = (state_13320[(8)]);
var inst_13311 = (state_13320[(2)]);
var state_13320__$1 = (function (){var statearr_13324 = state_13320;
(statearr_13324[(9)] = inst_13311);

return statearr_13324;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13320__$1,(9),results,inst_13306);
} else {
if((state_val_13321 === (7))){
var inst_13316 = (state_13320[(2)]);
var state_13320__$1 = state_13320;
var statearr_13325_13437 = state_13320__$1;
(statearr_13325_13437[(2)] = inst_13316);

(statearr_13325_13437[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13321 === (6))){
var inst_13301 = (state_13320[(10)]);
var inst_13306 = (state_13320[(8)]);
var inst_13306__$1 = cljs.core.async.chan.call(null,(1));
var inst_13307 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_13308 = [inst_13301,inst_13306__$1];
var inst_13309 = (new cljs.core.PersistentVector(null,2,(5),inst_13307,inst_13308,null));
var state_13320__$1 = (function (){var statearr_13326 = state_13320;
(statearr_13326[(8)] = inst_13306__$1);

return statearr_13326;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13320__$1,(8),jobs,inst_13309);
} else {
if((state_val_13321 === (5))){
var inst_13304 = cljs.core.async.close_BANG_.call(null,jobs);
var state_13320__$1 = state_13320;
var statearr_13327_13438 = state_13320__$1;
(statearr_13327_13438[(2)] = inst_13304);

(statearr_13327_13438[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13321 === (4))){
var inst_13301 = (state_13320[(10)]);
var inst_13301__$1 = (state_13320[(2)]);
var inst_13302 = (inst_13301__$1 == null);
var state_13320__$1 = (function (){var statearr_13328 = state_13320;
(statearr_13328[(10)] = inst_13301__$1);

return statearr_13328;
})();
if(cljs.core.truth_(inst_13302)){
var statearr_13329_13439 = state_13320__$1;
(statearr_13329_13439[(1)] = (5));

} else {
var statearr_13330_13440 = state_13320__$1;
(statearr_13330_13440[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13321 === (3))){
var inst_13318 = (state_13320[(2)]);
var state_13320__$1 = state_13320;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13320__$1,inst_13318);
} else {
if((state_val_13321 === (2))){
var state_13320__$1 = state_13320;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13320__$1,(4),from);
} else {
if((state_val_13321 === (1))){
var state_13320__$1 = state_13320;
var statearr_13331_13441 = state_13320__$1;
(statearr_13331_13441[(2)] = null);

(statearr_13331_13441[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__6459__auto___13435,jobs,results,process,async))
;
return ((function (switch__6444__auto__,c__6459__auto___13435,jobs,results,process,async){
return (function() {
var state_machine__6445__auto__ = null;
var state_machine__6445__auto____0 = (function (){
var statearr_13335 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_13335[(0)] = state_machine__6445__auto__);

(statearr_13335[(1)] = (1));

return statearr_13335;
});
var state_machine__6445__auto____1 = (function (state_13320){
while(true){
var ret_value__6446__auto__ = (function (){try{while(true){
var result__6447__auto__ = switch__6444__auto__.call(null,state_13320);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6447__auto__;
}
break;
}
}catch (e13336){if((e13336 instanceof Object)){
var ex__6448__auto__ = e13336;
var statearr_13337_13442 = state_13320;
(statearr_13337_13442[(5)] = ex__6448__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13320);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13336;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13443 = state_13320;
state_13320 = G__13443;
continue;
} else {
return ret_value__6446__auto__;
}
break;
}
});
state_machine__6445__auto__ = function(state_13320){
switch(arguments.length){
case 0:
return state_machine__6445__auto____0.call(this);
case 1:
return state_machine__6445__auto____1.call(this,state_13320);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6445__auto____0;
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6445__auto____1;
return state_machine__6445__auto__;
})()
;})(switch__6444__auto__,c__6459__auto___13435,jobs,results,process,async))
})();
var state__6461__auto__ = (function (){var statearr_13338 = f__6460__auto__.call(null);
(statearr_13338[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6459__auto___13435);

return statearr_13338;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6461__auto__);
});})(c__6459__auto___13435,jobs,results,process,async))
);


var c__6459__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6459__auto__,jobs,results,process,async){
return (function (){
var f__6460__auto__ = (function (){var switch__6444__auto__ = ((function (c__6459__auto__,jobs,results,process,async){
return (function (state_13376){
var state_val_13377 = (state_13376[(1)]);
if((state_val_13377 === (7))){
var inst_13372 = (state_13376[(2)]);
var state_13376__$1 = state_13376;
var statearr_13378_13444 = state_13376__$1;
(statearr_13378_13444[(2)] = inst_13372);

(statearr_13378_13444[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13377 === (20))){
var state_13376__$1 = state_13376;
var statearr_13379_13445 = state_13376__$1;
(statearr_13379_13445[(2)] = null);

(statearr_13379_13445[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13377 === (1))){
var state_13376__$1 = state_13376;
var statearr_13380_13446 = state_13376__$1;
(statearr_13380_13446[(2)] = null);

(statearr_13380_13446[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13377 === (4))){
var inst_13341 = (state_13376[(7)]);
var inst_13341__$1 = (state_13376[(2)]);
var inst_13342 = (inst_13341__$1 == null);
var state_13376__$1 = (function (){var statearr_13381 = state_13376;
(statearr_13381[(7)] = inst_13341__$1);

return statearr_13381;
})();
if(cljs.core.truth_(inst_13342)){
var statearr_13382_13447 = state_13376__$1;
(statearr_13382_13447[(1)] = (5));

} else {
var statearr_13383_13448 = state_13376__$1;
(statearr_13383_13448[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13377 === (15))){
var inst_13354 = (state_13376[(8)]);
var state_13376__$1 = state_13376;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13376__$1,(18),to,inst_13354);
} else {
if((state_val_13377 === (21))){
var inst_13367 = (state_13376[(2)]);
var state_13376__$1 = state_13376;
var statearr_13384_13449 = state_13376__$1;
(statearr_13384_13449[(2)] = inst_13367);

(statearr_13384_13449[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13377 === (13))){
var inst_13369 = (state_13376[(2)]);
var state_13376__$1 = (function (){var statearr_13385 = state_13376;
(statearr_13385[(9)] = inst_13369);

return statearr_13385;
})();
var statearr_13386_13450 = state_13376__$1;
(statearr_13386_13450[(2)] = null);

(statearr_13386_13450[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13377 === (6))){
var inst_13341 = (state_13376[(7)]);
var state_13376__$1 = state_13376;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13376__$1,(11),inst_13341);
} else {
if((state_val_13377 === (17))){
var inst_13362 = (state_13376[(2)]);
var state_13376__$1 = state_13376;
if(cljs.core.truth_(inst_13362)){
var statearr_13387_13451 = state_13376__$1;
(statearr_13387_13451[(1)] = (19));

} else {
var statearr_13388_13452 = state_13376__$1;
(statearr_13388_13452[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13377 === (3))){
var inst_13374 = (state_13376[(2)]);
var state_13376__$1 = state_13376;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13376__$1,inst_13374);
} else {
if((state_val_13377 === (12))){
var inst_13351 = (state_13376[(10)]);
var state_13376__$1 = state_13376;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13376__$1,(14),inst_13351);
} else {
if((state_val_13377 === (2))){
var state_13376__$1 = state_13376;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13376__$1,(4),results);
} else {
if((state_val_13377 === (19))){
var state_13376__$1 = state_13376;
var statearr_13389_13453 = state_13376__$1;
(statearr_13389_13453[(2)] = null);

(statearr_13389_13453[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13377 === (11))){
var inst_13351 = (state_13376[(2)]);
var state_13376__$1 = (function (){var statearr_13390 = state_13376;
(statearr_13390[(10)] = inst_13351);

return statearr_13390;
})();
var statearr_13391_13454 = state_13376__$1;
(statearr_13391_13454[(2)] = null);

(statearr_13391_13454[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13377 === (9))){
var state_13376__$1 = state_13376;
var statearr_13392_13455 = state_13376__$1;
(statearr_13392_13455[(2)] = null);

(statearr_13392_13455[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13377 === (5))){
var state_13376__$1 = state_13376;
if(cljs.core.truth_(close_QMARK_)){
var statearr_13393_13456 = state_13376__$1;
(statearr_13393_13456[(1)] = (8));

} else {
var statearr_13394_13457 = state_13376__$1;
(statearr_13394_13457[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13377 === (14))){
var inst_13356 = (state_13376[(11)]);
var inst_13354 = (state_13376[(8)]);
var inst_13354__$1 = (state_13376[(2)]);
var inst_13355 = (inst_13354__$1 == null);
var inst_13356__$1 = cljs.core.not.call(null,inst_13355);
var state_13376__$1 = (function (){var statearr_13395 = state_13376;
(statearr_13395[(11)] = inst_13356__$1);

(statearr_13395[(8)] = inst_13354__$1);

return statearr_13395;
})();
if(inst_13356__$1){
var statearr_13396_13458 = state_13376__$1;
(statearr_13396_13458[(1)] = (15));

} else {
var statearr_13397_13459 = state_13376__$1;
(statearr_13397_13459[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13377 === (16))){
var inst_13356 = (state_13376[(11)]);
var state_13376__$1 = state_13376;
var statearr_13398_13460 = state_13376__$1;
(statearr_13398_13460[(2)] = inst_13356);

(statearr_13398_13460[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13377 === (10))){
var inst_13348 = (state_13376[(2)]);
var state_13376__$1 = state_13376;
var statearr_13399_13461 = state_13376__$1;
(statearr_13399_13461[(2)] = inst_13348);

(statearr_13399_13461[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13377 === (18))){
var inst_13359 = (state_13376[(2)]);
var state_13376__$1 = state_13376;
var statearr_13400_13462 = state_13376__$1;
(statearr_13400_13462[(2)] = inst_13359);

(statearr_13400_13462[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13377 === (8))){
var inst_13345 = cljs.core.async.close_BANG_.call(null,to);
var state_13376__$1 = state_13376;
var statearr_13401_13463 = state_13376__$1;
(statearr_13401_13463[(2)] = inst_13345);

(statearr_13401_13463[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6459__auto__,jobs,results,process,async))
;
return ((function (switch__6444__auto__,c__6459__auto__,jobs,results,process,async){
return (function() {
var state_machine__6445__auto__ = null;
var state_machine__6445__auto____0 = (function (){
var statearr_13405 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13405[(0)] = state_machine__6445__auto__);

(statearr_13405[(1)] = (1));

return statearr_13405;
});
var state_machine__6445__auto____1 = (function (state_13376){
while(true){
var ret_value__6446__auto__ = (function (){try{while(true){
var result__6447__auto__ = switch__6444__auto__.call(null,state_13376);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6447__auto__;
}
break;
}
}catch (e13406){if((e13406 instanceof Object)){
var ex__6448__auto__ = e13406;
var statearr_13407_13464 = state_13376;
(statearr_13407_13464[(5)] = ex__6448__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13376);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13406;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13465 = state_13376;
state_13376 = G__13465;
continue;
} else {
return ret_value__6446__auto__;
}
break;
}
});
state_machine__6445__auto__ = function(state_13376){
switch(arguments.length){
case 0:
return state_machine__6445__auto____0.call(this);
case 1:
return state_machine__6445__auto____1.call(this,state_13376);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6445__auto____0;
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6445__auto____1;
return state_machine__6445__auto__;
})()
;})(switch__6444__auto__,c__6459__auto__,jobs,results,process,async))
})();
var state__6461__auto__ = (function (){var statearr_13408 = f__6460__auto__.call(null);
(statearr_13408[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6459__auto__);

return statearr_13408;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6461__auto__);
});})(c__6459__auto__,jobs,results,process,async))
);

return c__6459__auto__;
});
/**
* Takes elements from the from channel and supplies them to the to
* channel, subject to the async function af, with parallelism n. af
* must be a function of two arguments, the first an input value and
* the second a channel on which to place the result(s). af must close!
* the channel before returning.  The presumption is that af will
* return immediately, having launched some asynchronous operation
* whose completion/callback will manipulate the result channel. Outputs
* will be returned in order relative to  the inputs. By default, the to
* channel will be closed when the from channel closes, but can be
* determined by the close?  parameter. Will stop consuming the from
* channel if the to channel closes.
*/
cljs.core.async.pipeline_async = (function() {
var pipeline_async = null;
var pipeline_async__4 = (function (n,to,af,from){
return pipeline_async.call(null,n,to,af,from,true);
});
var pipeline_async__5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});
pipeline_async = function(n,to,af,from,close_QMARK_){
switch(arguments.length){
case 4:
return pipeline_async__4.call(this,n,to,af,from);
case 5:
return pipeline_async__5.call(this,n,to,af,from,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipeline_async.cljs$core$IFn$_invoke$arity$4 = pipeline_async__4;
pipeline_async.cljs$core$IFn$_invoke$arity$5 = pipeline_async__5;
return pipeline_async;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel, subject to the transducer xf, with parallelism n. Because
* it is parallel, the transducer will be applied independently to each
* element, not across elements, and may produce zero or more outputs
* per input.  Outputs will be returned in order relative to the
* inputs. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes.
* 
* Note this is supplied for API compatibility with the Clojure version.
* Values of N > 1 will not result in actual concurrency in a
* single-threaded runtime.
*/
cljs.core.async.pipeline = (function() {
var pipeline = null;
var pipeline__4 = (function (n,to,xf,from){
return pipeline.call(null,n,to,xf,from,true);
});
var pipeline__5 = (function (n,to,xf,from,close_QMARK_){
return pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});
var pipeline__6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});
pipeline = function(n,to,xf,from,close_QMARK_,ex_handler){
switch(arguments.length){
case 4:
return pipeline__4.call(this,n,to,xf,from);
case 5:
return pipeline__5.call(this,n,to,xf,from,close_QMARK_);
case 6:
return pipeline__6.call(this,n,to,xf,from,close_QMARK_,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipeline.cljs$core$IFn$_invoke$arity$4 = pipeline__4;
pipeline.cljs$core$IFn$_invoke$arity$5 = pipeline__5;
pipeline.cljs$core$IFn$_invoke$arity$6 = pipeline__6;
return pipeline;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){
return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__6459__auto___13566 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6459__auto___13566,tc,fc){
return (function (){
var f__6460__auto__ = (function (){var switch__6444__auto__ = ((function (c__6459__auto___13566,tc,fc){
return (function (state_13541){
var state_val_13542 = (state_13541[(1)]);
if((state_val_13542 === (7))){
var inst_13537 = (state_13541[(2)]);
var state_13541__$1 = state_13541;
var statearr_13543_13567 = state_13541__$1;
(statearr_13543_13567[(2)] = inst_13537);

(statearr_13543_13567[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13542 === (1))){
var state_13541__$1 = state_13541;
var statearr_13544_13568 = state_13541__$1;
(statearr_13544_13568[(2)] = null);

(statearr_13544_13568[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13542 === (4))){
var inst_13518 = (state_13541[(7)]);
var inst_13518__$1 = (state_13541[(2)]);
var inst_13519 = (inst_13518__$1 == null);
var state_13541__$1 = (function (){var statearr_13545 = state_13541;
(statearr_13545[(7)] = inst_13518__$1);

return statearr_13545;
})();
if(cljs.core.truth_(inst_13519)){
var statearr_13546_13569 = state_13541__$1;
(statearr_13546_13569[(1)] = (5));

} else {
var statearr_13547_13570 = state_13541__$1;
(statearr_13547_13570[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13542 === (13))){
var state_13541__$1 = state_13541;
var statearr_13548_13571 = state_13541__$1;
(statearr_13548_13571[(2)] = null);

(statearr_13548_13571[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13542 === (6))){
var inst_13518 = (state_13541[(7)]);
var inst_13524 = p.call(null,inst_13518);
var state_13541__$1 = state_13541;
if(cljs.core.truth_(inst_13524)){
var statearr_13549_13572 = state_13541__$1;
(statearr_13549_13572[(1)] = (9));

} else {
var statearr_13550_13573 = state_13541__$1;
(statearr_13550_13573[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13542 === (3))){
var inst_13539 = (state_13541[(2)]);
var state_13541__$1 = state_13541;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13541__$1,inst_13539);
} else {
if((state_val_13542 === (12))){
var state_13541__$1 = state_13541;
var statearr_13551_13574 = state_13541__$1;
(statearr_13551_13574[(2)] = null);

(statearr_13551_13574[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13542 === (2))){
var state_13541__$1 = state_13541;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13541__$1,(4),ch);
} else {
if((state_val_13542 === (11))){
var inst_13518 = (state_13541[(7)]);
var inst_13528 = (state_13541[(2)]);
var state_13541__$1 = state_13541;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13541__$1,(8),inst_13528,inst_13518);
} else {
if((state_val_13542 === (9))){
var state_13541__$1 = state_13541;
var statearr_13552_13575 = state_13541__$1;
(statearr_13552_13575[(2)] = tc);

(statearr_13552_13575[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13542 === (5))){
var inst_13521 = cljs.core.async.close_BANG_.call(null,tc);
var inst_13522 = cljs.core.async.close_BANG_.call(null,fc);
var state_13541__$1 = (function (){var statearr_13553 = state_13541;
(statearr_13553[(8)] = inst_13521);

return statearr_13553;
})();
var statearr_13554_13576 = state_13541__$1;
(statearr_13554_13576[(2)] = inst_13522);

(statearr_13554_13576[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13542 === (14))){
var inst_13535 = (state_13541[(2)]);
var state_13541__$1 = state_13541;
var statearr_13555_13577 = state_13541__$1;
(statearr_13555_13577[(2)] = inst_13535);

(statearr_13555_13577[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13542 === (10))){
var state_13541__$1 = state_13541;
var statearr_13556_13578 = state_13541__$1;
(statearr_13556_13578[(2)] = fc);

(statearr_13556_13578[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13542 === (8))){
var inst_13530 = (state_13541[(2)]);
var state_13541__$1 = state_13541;
if(cljs.core.truth_(inst_13530)){
var statearr_13557_13579 = state_13541__$1;
(statearr_13557_13579[(1)] = (12));

} else {
var statearr_13558_13580 = state_13541__$1;
(statearr_13558_13580[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6459__auto___13566,tc,fc))
;
return ((function (switch__6444__auto__,c__6459__auto___13566,tc,fc){
return (function() {
var state_machine__6445__auto__ = null;
var state_machine__6445__auto____0 = (function (){
var statearr_13562 = [null,null,null,null,null,null,null,null,null];
(statearr_13562[(0)] = state_machine__6445__auto__);

(statearr_13562[(1)] = (1));

return statearr_13562;
});
var state_machine__6445__auto____1 = (function (state_13541){
while(true){
var ret_value__6446__auto__ = (function (){try{while(true){
var result__6447__auto__ = switch__6444__auto__.call(null,state_13541);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6447__auto__;
}
break;
}
}catch (e13563){if((e13563 instanceof Object)){
var ex__6448__auto__ = e13563;
var statearr_13564_13581 = state_13541;
(statearr_13564_13581[(5)] = ex__6448__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13541);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13563;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13582 = state_13541;
state_13541 = G__13582;
continue;
} else {
return ret_value__6446__auto__;
}
break;
}
});
state_machine__6445__auto__ = function(state_13541){
switch(arguments.length){
case 0:
return state_machine__6445__auto____0.call(this);
case 1:
return state_machine__6445__auto____1.call(this,state_13541);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6445__auto____0;
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6445__auto____1;
return state_machine__6445__auto__;
})()
;})(switch__6444__auto__,c__6459__auto___13566,tc,fc))
})();
var state__6461__auto__ = (function (){var statearr_13565 = f__6460__auto__.call(null);
(statearr_13565[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6459__auto___13566);

return statearr_13565;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6461__auto__);
});})(c__6459__auto___13566,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){
var c__6459__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6459__auto__){
return (function (){
var f__6460__auto__ = (function (){var switch__6444__auto__ = ((function (c__6459__auto__){
return (function (state_13629){
var state_val_13630 = (state_13629[(1)]);
if((state_val_13630 === (7))){
var inst_13625 = (state_13629[(2)]);
var state_13629__$1 = state_13629;
var statearr_13631_13647 = state_13629__$1;
(statearr_13631_13647[(2)] = inst_13625);

(statearr_13631_13647[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13630 === (6))){
var inst_13615 = (state_13629[(7)]);
var inst_13618 = (state_13629[(8)]);
var inst_13622 = f.call(null,inst_13615,inst_13618);
var inst_13615__$1 = inst_13622;
var state_13629__$1 = (function (){var statearr_13632 = state_13629;
(statearr_13632[(7)] = inst_13615__$1);

return statearr_13632;
})();
var statearr_13633_13648 = state_13629__$1;
(statearr_13633_13648[(2)] = null);

(statearr_13633_13648[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13630 === (5))){
var inst_13615 = (state_13629[(7)]);
var state_13629__$1 = state_13629;
var statearr_13634_13649 = state_13629__$1;
(statearr_13634_13649[(2)] = inst_13615);

(statearr_13634_13649[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13630 === (4))){
var inst_13618 = (state_13629[(8)]);
var inst_13618__$1 = (state_13629[(2)]);
var inst_13619 = (inst_13618__$1 == null);
var state_13629__$1 = (function (){var statearr_13635 = state_13629;
(statearr_13635[(8)] = inst_13618__$1);

return statearr_13635;
})();
if(cljs.core.truth_(inst_13619)){
var statearr_13636_13650 = state_13629__$1;
(statearr_13636_13650[(1)] = (5));

} else {
var statearr_13637_13651 = state_13629__$1;
(statearr_13637_13651[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13630 === (3))){
var inst_13627 = (state_13629[(2)]);
var state_13629__$1 = state_13629;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13629__$1,inst_13627);
} else {
if((state_val_13630 === (2))){
var state_13629__$1 = state_13629;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13629__$1,(4),ch);
} else {
if((state_val_13630 === (1))){
var inst_13615 = init;
var state_13629__$1 = (function (){var statearr_13638 = state_13629;
(statearr_13638[(7)] = inst_13615);

return statearr_13638;
})();
var statearr_13639_13652 = state_13629__$1;
(statearr_13639_13652[(2)] = null);

(statearr_13639_13652[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__6459__auto__))
;
return ((function (switch__6444__auto__,c__6459__auto__){
return (function() {
var state_machine__6445__auto__ = null;
var state_machine__6445__auto____0 = (function (){
var statearr_13643 = [null,null,null,null,null,null,null,null,null];
(statearr_13643[(0)] = state_machine__6445__auto__);

(statearr_13643[(1)] = (1));

return statearr_13643;
});
var state_machine__6445__auto____1 = (function (state_13629){
while(true){
var ret_value__6446__auto__ = (function (){try{while(true){
var result__6447__auto__ = switch__6444__auto__.call(null,state_13629);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6447__auto__;
}
break;
}
}catch (e13644){if((e13644 instanceof Object)){
var ex__6448__auto__ = e13644;
var statearr_13645_13653 = state_13629;
(statearr_13645_13653[(5)] = ex__6448__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13629);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13644;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13654 = state_13629;
state_13629 = G__13654;
continue;
} else {
return ret_value__6446__auto__;
}
break;
}
});
state_machine__6445__auto__ = function(state_13629){
switch(arguments.length){
case 0:
return state_machine__6445__auto____0.call(this);
case 1:
return state_machine__6445__auto____1.call(this,state_13629);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6445__auto____0;
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6445__auto____1;
return state_machine__6445__auto__;
})()
;})(switch__6444__auto__,c__6459__auto__))
})();
var state__6461__auto__ = (function (){var statearr_13646 = f__6460__auto__.call(null);
(statearr_13646[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6459__auto__);

return statearr_13646;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6461__auto__);
});})(c__6459__auto__))
);

return c__6459__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){
return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){
var c__6459__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6459__auto__){
return (function (){
var f__6460__auto__ = (function (){var switch__6444__auto__ = ((function (c__6459__auto__){
return (function (state_13728){
var state_val_13729 = (state_13728[(1)]);
if((state_val_13729 === (7))){
var inst_13710 = (state_13728[(2)]);
var state_13728__$1 = state_13728;
var statearr_13730_13753 = state_13728__$1;
(statearr_13730_13753[(2)] = inst_13710);

(statearr_13730_13753[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13729 === (1))){
var inst_13704 = cljs.core.seq.call(null,coll);
var inst_13705 = inst_13704;
var state_13728__$1 = (function (){var statearr_13731 = state_13728;
(statearr_13731[(7)] = inst_13705);

return statearr_13731;
})();
var statearr_13732_13754 = state_13728__$1;
(statearr_13732_13754[(2)] = null);

(statearr_13732_13754[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13729 === (4))){
var inst_13705 = (state_13728[(7)]);
var inst_13708 = cljs.core.first.call(null,inst_13705);
var state_13728__$1 = state_13728;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13728__$1,(7),ch,inst_13708);
} else {
if((state_val_13729 === (13))){
var inst_13722 = (state_13728[(2)]);
var state_13728__$1 = state_13728;
var statearr_13733_13755 = state_13728__$1;
(statearr_13733_13755[(2)] = inst_13722);

(statearr_13733_13755[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13729 === (6))){
var inst_13713 = (state_13728[(2)]);
var state_13728__$1 = state_13728;
if(cljs.core.truth_(inst_13713)){
var statearr_13734_13756 = state_13728__$1;
(statearr_13734_13756[(1)] = (8));

} else {
var statearr_13735_13757 = state_13728__$1;
(statearr_13735_13757[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13729 === (3))){
var inst_13726 = (state_13728[(2)]);
var state_13728__$1 = state_13728;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13728__$1,inst_13726);
} else {
if((state_val_13729 === (12))){
var state_13728__$1 = state_13728;
var statearr_13736_13758 = state_13728__$1;
(statearr_13736_13758[(2)] = null);

(statearr_13736_13758[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13729 === (2))){
var inst_13705 = (state_13728[(7)]);
var state_13728__$1 = state_13728;
if(cljs.core.truth_(inst_13705)){
var statearr_13737_13759 = state_13728__$1;
(statearr_13737_13759[(1)] = (4));

} else {
var statearr_13738_13760 = state_13728__$1;
(statearr_13738_13760[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13729 === (11))){
var inst_13719 = cljs.core.async.close_BANG_.call(null,ch);
var state_13728__$1 = state_13728;
var statearr_13739_13761 = state_13728__$1;
(statearr_13739_13761[(2)] = inst_13719);

(statearr_13739_13761[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13729 === (9))){
var state_13728__$1 = state_13728;
if(cljs.core.truth_(close_QMARK_)){
var statearr_13740_13762 = state_13728__$1;
(statearr_13740_13762[(1)] = (11));

} else {
var statearr_13741_13763 = state_13728__$1;
(statearr_13741_13763[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13729 === (5))){
var inst_13705 = (state_13728[(7)]);
var state_13728__$1 = state_13728;
var statearr_13742_13764 = state_13728__$1;
(statearr_13742_13764[(2)] = inst_13705);

(statearr_13742_13764[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13729 === (10))){
var inst_13724 = (state_13728[(2)]);
var state_13728__$1 = state_13728;
var statearr_13743_13765 = state_13728__$1;
(statearr_13743_13765[(2)] = inst_13724);

(statearr_13743_13765[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13729 === (8))){
var inst_13705 = (state_13728[(7)]);
var inst_13715 = cljs.core.next.call(null,inst_13705);
var inst_13705__$1 = inst_13715;
var state_13728__$1 = (function (){var statearr_13744 = state_13728;
(statearr_13744[(7)] = inst_13705__$1);

return statearr_13744;
})();
var statearr_13745_13766 = state_13728__$1;
(statearr_13745_13766[(2)] = null);

(statearr_13745_13766[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6459__auto__))
;
return ((function (switch__6444__auto__,c__6459__auto__){
return (function() {
var state_machine__6445__auto__ = null;
var state_machine__6445__auto____0 = (function (){
var statearr_13749 = [null,null,null,null,null,null,null,null];
(statearr_13749[(0)] = state_machine__6445__auto__);

(statearr_13749[(1)] = (1));

return statearr_13749;
});
var state_machine__6445__auto____1 = (function (state_13728){
while(true){
var ret_value__6446__auto__ = (function (){try{while(true){
var result__6447__auto__ = switch__6444__auto__.call(null,state_13728);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6447__auto__;
}
break;
}
}catch (e13750){if((e13750 instanceof Object)){
var ex__6448__auto__ = e13750;
var statearr_13751_13767 = state_13728;
(statearr_13751_13767[(5)] = ex__6448__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13728);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13750;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13768 = state_13728;
state_13728 = G__13768;
continue;
} else {
return ret_value__6446__auto__;
}
break;
}
});
state_machine__6445__auto__ = function(state_13728){
switch(arguments.length){
case 0:
return state_machine__6445__auto____0.call(this);
case 1:
return state_machine__6445__auto____1.call(this,state_13728);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6445__auto____0;
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6445__auto____1;
return state_machine__6445__auto__;
})()
;})(switch__6444__auto__,c__6459__auto__))
})();
var state__6461__auto__ = (function (){var statearr_13752 = f__6460__auto__.call(null);
(statearr_13752[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6459__auto__);

return statearr_13752;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6461__auto__);
});})(c__6459__auto__))
);

return c__6459__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

cljs.core.async.Mux = (function (){var obj13770 = {};
return obj13770;
})();

cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){
if((function (){var and__3618__auto__ = _;
if(and__3618__auto__){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else {
return and__3618__auto__;
}
})()){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4274__auto__ = (((_ == null))?null:_);
return (function (){var or__3630__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4274__auto__)]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});


cljs.core.async.Mult = (function (){var obj13772 = {};
return obj13772;
})();

cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){
if((function (){var and__3618__auto__ = m;
if(and__3618__auto__){
return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else {
return and__3618__auto__;
}
})()){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4274__auto__ = (((m == null))?null:m);
return (function (){var or__3630__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4274__auto__)]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});

cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){
if((function (){var and__3618__auto__ = m;
if(and__3618__auto__){
return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else {
return and__3618__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4274__auto__ = (((m == null))?null:m);
return (function (){var or__3630__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4274__auto__)]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){
if((function (){var and__3618__auto__ = m;
if(and__3618__auto__){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else {
return and__3618__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4274__auto__ = (((m == null))?null:m);
return (function (){var or__3630__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4274__auto__)]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});

/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* Items received when there are no taps get dropped.
* 
* If a tap puts to a closed channel, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t13994 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t13994 = (function (cs,ch,mult,meta13995){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta13995 = meta13995;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13994.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t13994.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t13994.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t13994.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t13994.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t13994.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t13994.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_13996){
var self__ = this;
var _13996__$1 = this;
return self__.meta13995;
});})(cs))
;

cljs.core.async.t13994.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_13996,meta13995__$1){
var self__ = this;
var _13996__$1 = this;
return (new cljs.core.async.t13994(self__.cs,self__.ch,self__.mult,meta13995__$1));
});})(cs))
;

cljs.core.async.t13994.cljs$lang$type = true;

cljs.core.async.t13994.cljs$lang$ctorStr = "cljs.core.async/t13994";

cljs.core.async.t13994.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t13994");
});})(cs))
;

cljs.core.async.__GT_t13994 = ((function (cs){
return (function __GT_t13994(cs__$1,ch__$1,mult__$1,meta13995){
return (new cljs.core.async.t13994(cs__$1,ch__$1,mult__$1,meta13995));
});})(cs))
;

}

return (new cljs.core.async.t13994(cs,ch,mult,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),48,new cljs.core.Keyword(null,"end-line","end-line",1837326455),397,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"line","line",212345235),390,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/chrism/dev/farn/resources/public/js/out/cljs/core/async.cljs"], null)));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__6459__auto___14215 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6459__auto___14215,cs,m,dchan,dctr,done){
return (function (){
var f__6460__auto__ = (function (){var switch__6444__auto__ = ((function (c__6459__auto___14215,cs,m,dchan,dctr,done){
return (function (state_14127){
var state_val_14128 = (state_14127[(1)]);
if((state_val_14128 === (7))){
var inst_14123 = (state_14127[(2)]);
var state_14127__$1 = state_14127;
var statearr_14129_14216 = state_14127__$1;
(statearr_14129_14216[(2)] = inst_14123);

(statearr_14129_14216[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14128 === (20))){
var inst_14028 = (state_14127[(7)]);
var inst_14038 = cljs.core.first.call(null,inst_14028);
var inst_14039 = cljs.core.nth.call(null,inst_14038,(0),null);
var inst_14040 = cljs.core.nth.call(null,inst_14038,(1),null);
var state_14127__$1 = (function (){var statearr_14130 = state_14127;
(statearr_14130[(8)] = inst_14039);

return statearr_14130;
})();
if(cljs.core.truth_(inst_14040)){
var statearr_14131_14217 = state_14127__$1;
(statearr_14131_14217[(1)] = (22));

} else {
var statearr_14132_14218 = state_14127__$1;
(statearr_14132_14218[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14128 === (27))){
var inst_14075 = (state_14127[(9)]);
var inst_14068 = (state_14127[(10)]);
var inst_13999 = (state_14127[(11)]);
var inst_14070 = (state_14127[(12)]);
var inst_14075__$1 = cljs.core._nth.call(null,inst_14068,inst_14070);
var inst_14076 = cljs.core.async.put_BANG_.call(null,inst_14075__$1,inst_13999,done);
var state_14127__$1 = (function (){var statearr_14133 = state_14127;
(statearr_14133[(9)] = inst_14075__$1);

return statearr_14133;
})();
if(cljs.core.truth_(inst_14076)){
var statearr_14134_14219 = state_14127__$1;
(statearr_14134_14219[(1)] = (30));

} else {
var statearr_14135_14220 = state_14127__$1;
(statearr_14135_14220[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14128 === (1))){
var state_14127__$1 = state_14127;
var statearr_14136_14221 = state_14127__$1;
(statearr_14136_14221[(2)] = null);

(statearr_14136_14221[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14128 === (24))){
var inst_14028 = (state_14127[(7)]);
var inst_14045 = (state_14127[(2)]);
var inst_14046 = cljs.core.next.call(null,inst_14028);
var inst_14008 = inst_14046;
var inst_14009 = null;
var inst_14010 = (0);
var inst_14011 = (0);
var state_14127__$1 = (function (){var statearr_14137 = state_14127;
(statearr_14137[(13)] = inst_14045);

(statearr_14137[(14)] = inst_14008);

(statearr_14137[(15)] = inst_14009);

(statearr_14137[(16)] = inst_14010);

(statearr_14137[(17)] = inst_14011);

return statearr_14137;
})();
var statearr_14138_14222 = state_14127__$1;
(statearr_14138_14222[(2)] = null);

(statearr_14138_14222[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14128 === (39))){
var state_14127__$1 = state_14127;
var statearr_14142_14223 = state_14127__$1;
(statearr_14142_14223[(2)] = null);

(statearr_14142_14223[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14128 === (4))){
var inst_13999 = (state_14127[(11)]);
var inst_13999__$1 = (state_14127[(2)]);
var inst_14000 = (inst_13999__$1 == null);
var state_14127__$1 = (function (){var statearr_14143 = state_14127;
(statearr_14143[(11)] = inst_13999__$1);

return statearr_14143;
})();
if(cljs.core.truth_(inst_14000)){
var statearr_14144_14224 = state_14127__$1;
(statearr_14144_14224[(1)] = (5));

} else {
var statearr_14145_14225 = state_14127__$1;
(statearr_14145_14225[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14128 === (15))){
var inst_14008 = (state_14127[(14)]);
var inst_14009 = (state_14127[(15)]);
var inst_14010 = (state_14127[(16)]);
var inst_14011 = (state_14127[(17)]);
var inst_14024 = (state_14127[(2)]);
var inst_14025 = (inst_14011 + (1));
var tmp14139 = inst_14008;
var tmp14140 = inst_14009;
var tmp14141 = inst_14010;
var inst_14008__$1 = tmp14139;
var inst_14009__$1 = tmp14140;
var inst_14010__$1 = tmp14141;
var inst_14011__$1 = inst_14025;
var state_14127__$1 = (function (){var statearr_14146 = state_14127;
(statearr_14146[(14)] = inst_14008__$1);

(statearr_14146[(15)] = inst_14009__$1);

(statearr_14146[(16)] = inst_14010__$1);

(statearr_14146[(18)] = inst_14024);

(statearr_14146[(17)] = inst_14011__$1);

return statearr_14146;
})();
var statearr_14147_14226 = state_14127__$1;
(statearr_14147_14226[(2)] = null);

(statearr_14147_14226[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14128 === (21))){
var inst_14049 = (state_14127[(2)]);
var state_14127__$1 = state_14127;
var statearr_14151_14227 = state_14127__$1;
(statearr_14151_14227[(2)] = inst_14049);

(statearr_14151_14227[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14128 === (31))){
var inst_14075 = (state_14127[(9)]);
var inst_14079 = done.call(null,null);
var inst_14080 = cljs.core.async.untap_STAR_.call(null,m,inst_14075);
var state_14127__$1 = (function (){var statearr_14152 = state_14127;
(statearr_14152[(19)] = inst_14079);

return statearr_14152;
})();
var statearr_14153_14228 = state_14127__$1;
(statearr_14153_14228[(2)] = inst_14080);

(statearr_14153_14228[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14128 === (32))){
var inst_14067 = (state_14127[(20)]);
var inst_14068 = (state_14127[(10)]);
var inst_14069 = (state_14127[(21)]);
var inst_14070 = (state_14127[(12)]);
var inst_14082 = (state_14127[(2)]);
var inst_14083 = (inst_14070 + (1));
var tmp14148 = inst_14067;
var tmp14149 = inst_14068;
var tmp14150 = inst_14069;
var inst_14067__$1 = tmp14148;
var inst_14068__$1 = tmp14149;
var inst_14069__$1 = tmp14150;
var inst_14070__$1 = inst_14083;
var state_14127__$1 = (function (){var statearr_14154 = state_14127;
(statearr_14154[(20)] = inst_14067__$1);

(statearr_14154[(22)] = inst_14082);

(statearr_14154[(10)] = inst_14068__$1);

(statearr_14154[(21)] = inst_14069__$1);

(statearr_14154[(12)] = inst_14070__$1);

return statearr_14154;
})();
var statearr_14155_14229 = state_14127__$1;
(statearr_14155_14229[(2)] = null);

(statearr_14155_14229[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14128 === (40))){
var inst_14095 = (state_14127[(23)]);
var inst_14099 = done.call(null,null);
var inst_14100 = cljs.core.async.untap_STAR_.call(null,m,inst_14095);
var state_14127__$1 = (function (){var statearr_14156 = state_14127;
(statearr_14156[(24)] = inst_14099);

return statearr_14156;
})();
var statearr_14157_14230 = state_14127__$1;
(statearr_14157_14230[(2)] = inst_14100);

(statearr_14157_14230[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14128 === (33))){
var inst_14086 = (state_14127[(25)]);
var inst_14088 = cljs.core.chunked_seq_QMARK_.call(null,inst_14086);
var state_14127__$1 = state_14127;
if(inst_14088){
var statearr_14158_14231 = state_14127__$1;
(statearr_14158_14231[(1)] = (36));

} else {
var statearr_14159_14232 = state_14127__$1;
(statearr_14159_14232[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14128 === (13))){
var inst_14018 = (state_14127[(26)]);
var inst_14021 = cljs.core.async.close_BANG_.call(null,inst_14018);
var state_14127__$1 = state_14127;
var statearr_14160_14233 = state_14127__$1;
(statearr_14160_14233[(2)] = inst_14021);

(statearr_14160_14233[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14128 === (22))){
var inst_14039 = (state_14127[(8)]);
var inst_14042 = cljs.core.async.close_BANG_.call(null,inst_14039);
var state_14127__$1 = state_14127;
var statearr_14161_14234 = state_14127__$1;
(statearr_14161_14234[(2)] = inst_14042);

(statearr_14161_14234[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14128 === (36))){
var inst_14086 = (state_14127[(25)]);
var inst_14090 = cljs.core.chunk_first.call(null,inst_14086);
var inst_14091 = cljs.core.chunk_rest.call(null,inst_14086);
var inst_14092 = cljs.core.count.call(null,inst_14090);
var inst_14067 = inst_14091;
var inst_14068 = inst_14090;
var inst_14069 = inst_14092;
var inst_14070 = (0);
var state_14127__$1 = (function (){var statearr_14162 = state_14127;
(statearr_14162[(20)] = inst_14067);

(statearr_14162[(10)] = inst_14068);

(statearr_14162[(21)] = inst_14069);

(statearr_14162[(12)] = inst_14070);

return statearr_14162;
})();
var statearr_14163_14235 = state_14127__$1;
(statearr_14163_14235[(2)] = null);

(statearr_14163_14235[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14128 === (41))){
var inst_14086 = (state_14127[(25)]);
var inst_14102 = (state_14127[(2)]);
var inst_14103 = cljs.core.next.call(null,inst_14086);
var inst_14067 = inst_14103;
var inst_14068 = null;
var inst_14069 = (0);
var inst_14070 = (0);
var state_14127__$1 = (function (){var statearr_14164 = state_14127;
(statearr_14164[(27)] = inst_14102);

(statearr_14164[(20)] = inst_14067);

(statearr_14164[(10)] = inst_14068);

(statearr_14164[(21)] = inst_14069);

(statearr_14164[(12)] = inst_14070);

return statearr_14164;
})();
var statearr_14165_14236 = state_14127__$1;
(statearr_14165_14236[(2)] = null);

(statearr_14165_14236[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14128 === (43))){
var state_14127__$1 = state_14127;
var statearr_14166_14237 = state_14127__$1;
(statearr_14166_14237[(2)] = null);

(statearr_14166_14237[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14128 === (29))){
var inst_14111 = (state_14127[(2)]);
var state_14127__$1 = state_14127;
var statearr_14167_14238 = state_14127__$1;
(statearr_14167_14238[(2)] = inst_14111);

(statearr_14167_14238[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14128 === (44))){
var inst_14120 = (state_14127[(2)]);
var state_14127__$1 = (function (){var statearr_14168 = state_14127;
(statearr_14168[(28)] = inst_14120);

return statearr_14168;
})();
var statearr_14169_14239 = state_14127__$1;
(statearr_14169_14239[(2)] = null);

(statearr_14169_14239[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14128 === (6))){
var inst_14059 = (state_14127[(29)]);
var inst_14058 = cljs.core.deref.call(null,cs);
var inst_14059__$1 = cljs.core.keys.call(null,inst_14058);
var inst_14060 = cljs.core.count.call(null,inst_14059__$1);
var inst_14061 = cljs.core.reset_BANG_.call(null,dctr,inst_14060);
var inst_14066 = cljs.core.seq.call(null,inst_14059__$1);
var inst_14067 = inst_14066;
var inst_14068 = null;
var inst_14069 = (0);
var inst_14070 = (0);
var state_14127__$1 = (function (){var statearr_14170 = state_14127;
(statearr_14170[(20)] = inst_14067);

(statearr_14170[(10)] = inst_14068);

(statearr_14170[(29)] = inst_14059__$1);

(statearr_14170[(21)] = inst_14069);

(statearr_14170[(30)] = inst_14061);

(statearr_14170[(12)] = inst_14070);

return statearr_14170;
})();
var statearr_14171_14240 = state_14127__$1;
(statearr_14171_14240[(2)] = null);

(statearr_14171_14240[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14128 === (28))){
var inst_14067 = (state_14127[(20)]);
var inst_14086 = (state_14127[(25)]);
var inst_14086__$1 = cljs.core.seq.call(null,inst_14067);
var state_14127__$1 = (function (){var statearr_14172 = state_14127;
(statearr_14172[(25)] = inst_14086__$1);

return statearr_14172;
})();
if(inst_14086__$1){
var statearr_14173_14241 = state_14127__$1;
(statearr_14173_14241[(1)] = (33));

} else {
var statearr_14174_14242 = state_14127__$1;
(statearr_14174_14242[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14128 === (25))){
var inst_14069 = (state_14127[(21)]);
var inst_14070 = (state_14127[(12)]);
var inst_14072 = (inst_14070 < inst_14069);
var inst_14073 = inst_14072;
var state_14127__$1 = state_14127;
if(cljs.core.truth_(inst_14073)){
var statearr_14175_14243 = state_14127__$1;
(statearr_14175_14243[(1)] = (27));

} else {
var statearr_14176_14244 = state_14127__$1;
(statearr_14176_14244[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14128 === (34))){
var state_14127__$1 = state_14127;
var statearr_14177_14245 = state_14127__$1;
(statearr_14177_14245[(2)] = null);

(statearr_14177_14245[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14128 === (17))){
var state_14127__$1 = state_14127;
var statearr_14178_14246 = state_14127__$1;
(statearr_14178_14246[(2)] = null);

(statearr_14178_14246[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14128 === (3))){
var inst_14125 = (state_14127[(2)]);
var state_14127__$1 = state_14127;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14127__$1,inst_14125);
} else {
if((state_val_14128 === (12))){
var inst_14054 = (state_14127[(2)]);
var state_14127__$1 = state_14127;
var statearr_14179_14247 = state_14127__$1;
(statearr_14179_14247[(2)] = inst_14054);

(statearr_14179_14247[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14128 === (2))){
var state_14127__$1 = state_14127;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14127__$1,(4),ch);
} else {
if((state_val_14128 === (23))){
var state_14127__$1 = state_14127;
var statearr_14180_14248 = state_14127__$1;
(statearr_14180_14248[(2)] = null);

(statearr_14180_14248[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14128 === (35))){
var inst_14109 = (state_14127[(2)]);
var state_14127__$1 = state_14127;
var statearr_14181_14249 = state_14127__$1;
(statearr_14181_14249[(2)] = inst_14109);

(statearr_14181_14249[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14128 === (19))){
var inst_14028 = (state_14127[(7)]);
var inst_14032 = cljs.core.chunk_first.call(null,inst_14028);
var inst_14033 = cljs.core.chunk_rest.call(null,inst_14028);
var inst_14034 = cljs.core.count.call(null,inst_14032);
var inst_14008 = inst_14033;
var inst_14009 = inst_14032;
var inst_14010 = inst_14034;
var inst_14011 = (0);
var state_14127__$1 = (function (){var statearr_14182 = state_14127;
(statearr_14182[(14)] = inst_14008);

(statearr_14182[(15)] = inst_14009);

(statearr_14182[(16)] = inst_14010);

(statearr_14182[(17)] = inst_14011);

return statearr_14182;
})();
var statearr_14183_14250 = state_14127__$1;
(statearr_14183_14250[(2)] = null);

(statearr_14183_14250[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14128 === (11))){
var inst_14008 = (state_14127[(14)]);
var inst_14028 = (state_14127[(7)]);
var inst_14028__$1 = cljs.core.seq.call(null,inst_14008);
var state_14127__$1 = (function (){var statearr_14184 = state_14127;
(statearr_14184[(7)] = inst_14028__$1);

return statearr_14184;
})();
if(inst_14028__$1){
var statearr_14185_14251 = state_14127__$1;
(statearr_14185_14251[(1)] = (16));

} else {
var statearr_14186_14252 = state_14127__$1;
(statearr_14186_14252[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14128 === (9))){
var inst_14056 = (state_14127[(2)]);
var state_14127__$1 = state_14127;
var statearr_14187_14253 = state_14127__$1;
(statearr_14187_14253[(2)] = inst_14056);

(statearr_14187_14253[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14128 === (5))){
var inst_14006 = cljs.core.deref.call(null,cs);
var inst_14007 = cljs.core.seq.call(null,inst_14006);
var inst_14008 = inst_14007;
var inst_14009 = null;
var inst_14010 = (0);
var inst_14011 = (0);
var state_14127__$1 = (function (){var statearr_14188 = state_14127;
(statearr_14188[(14)] = inst_14008);

(statearr_14188[(15)] = inst_14009);

(statearr_14188[(16)] = inst_14010);

(statearr_14188[(17)] = inst_14011);

return statearr_14188;
})();
var statearr_14189_14254 = state_14127__$1;
(statearr_14189_14254[(2)] = null);

(statearr_14189_14254[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14128 === (14))){
var state_14127__$1 = state_14127;
var statearr_14190_14255 = state_14127__$1;
(statearr_14190_14255[(2)] = null);

(statearr_14190_14255[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14128 === (45))){
var inst_14117 = (state_14127[(2)]);
var state_14127__$1 = state_14127;
var statearr_14191_14256 = state_14127__$1;
(statearr_14191_14256[(2)] = inst_14117);

(statearr_14191_14256[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14128 === (26))){
var inst_14059 = (state_14127[(29)]);
var inst_14113 = (state_14127[(2)]);
var inst_14114 = cljs.core.seq.call(null,inst_14059);
var state_14127__$1 = (function (){var statearr_14192 = state_14127;
(statearr_14192[(31)] = inst_14113);

return statearr_14192;
})();
if(inst_14114){
var statearr_14193_14257 = state_14127__$1;
(statearr_14193_14257[(1)] = (42));

} else {
var statearr_14194_14258 = state_14127__$1;
(statearr_14194_14258[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14128 === (16))){
var inst_14028 = (state_14127[(7)]);
var inst_14030 = cljs.core.chunked_seq_QMARK_.call(null,inst_14028);
var state_14127__$1 = state_14127;
if(inst_14030){
var statearr_14195_14259 = state_14127__$1;
(statearr_14195_14259[(1)] = (19));

} else {
var statearr_14196_14260 = state_14127__$1;
(statearr_14196_14260[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14128 === (38))){
var inst_14106 = (state_14127[(2)]);
var state_14127__$1 = state_14127;
var statearr_14197_14261 = state_14127__$1;
(statearr_14197_14261[(2)] = inst_14106);

(statearr_14197_14261[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14128 === (30))){
var state_14127__$1 = state_14127;
var statearr_14198_14262 = state_14127__$1;
(statearr_14198_14262[(2)] = null);

(statearr_14198_14262[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14128 === (10))){
var inst_14009 = (state_14127[(15)]);
var inst_14011 = (state_14127[(17)]);
var inst_14017 = cljs.core._nth.call(null,inst_14009,inst_14011);
var inst_14018 = cljs.core.nth.call(null,inst_14017,(0),null);
var inst_14019 = cljs.core.nth.call(null,inst_14017,(1),null);
var state_14127__$1 = (function (){var statearr_14199 = state_14127;
(statearr_14199[(26)] = inst_14018);

return statearr_14199;
})();
if(cljs.core.truth_(inst_14019)){
var statearr_14200_14263 = state_14127__$1;
(statearr_14200_14263[(1)] = (13));

} else {
var statearr_14201_14264 = state_14127__$1;
(statearr_14201_14264[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14128 === (18))){
var inst_14052 = (state_14127[(2)]);
var state_14127__$1 = state_14127;
var statearr_14202_14265 = state_14127__$1;
(statearr_14202_14265[(2)] = inst_14052);

(statearr_14202_14265[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14128 === (42))){
var state_14127__$1 = state_14127;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14127__$1,(45),dchan);
} else {
if((state_val_14128 === (37))){
var inst_14086 = (state_14127[(25)]);
var inst_14095 = (state_14127[(23)]);
var inst_13999 = (state_14127[(11)]);
var inst_14095__$1 = cljs.core.first.call(null,inst_14086);
var inst_14096 = cljs.core.async.put_BANG_.call(null,inst_14095__$1,inst_13999,done);
var state_14127__$1 = (function (){var statearr_14203 = state_14127;
(statearr_14203[(23)] = inst_14095__$1);

return statearr_14203;
})();
if(cljs.core.truth_(inst_14096)){
var statearr_14204_14266 = state_14127__$1;
(statearr_14204_14266[(1)] = (39));

} else {
var statearr_14205_14267 = state_14127__$1;
(statearr_14205_14267[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14128 === (8))){
var inst_14010 = (state_14127[(16)]);
var inst_14011 = (state_14127[(17)]);
var inst_14013 = (inst_14011 < inst_14010);
var inst_14014 = inst_14013;
var state_14127__$1 = state_14127;
if(cljs.core.truth_(inst_14014)){
var statearr_14206_14268 = state_14127__$1;
(statearr_14206_14268[(1)] = (10));

} else {
var statearr_14207_14269 = state_14127__$1;
(statearr_14207_14269[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6459__auto___14215,cs,m,dchan,dctr,done))
;
return ((function (switch__6444__auto__,c__6459__auto___14215,cs,m,dchan,dctr,done){
return (function() {
var state_machine__6445__auto__ = null;
var state_machine__6445__auto____0 = (function (){
var statearr_14211 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14211[(0)] = state_machine__6445__auto__);

(statearr_14211[(1)] = (1));

return statearr_14211;
});
var state_machine__6445__auto____1 = (function (state_14127){
while(true){
var ret_value__6446__auto__ = (function (){try{while(true){
var result__6447__auto__ = switch__6444__auto__.call(null,state_14127);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6447__auto__;
}
break;
}
}catch (e14212){if((e14212 instanceof Object)){
var ex__6448__auto__ = e14212;
var statearr_14213_14270 = state_14127;
(statearr_14213_14270[(5)] = ex__6448__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14127);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14212;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14271 = state_14127;
state_14127 = G__14271;
continue;
} else {
return ret_value__6446__auto__;
}
break;
}
});
state_machine__6445__auto__ = function(state_14127){
switch(arguments.length){
case 0:
return state_machine__6445__auto____0.call(this);
case 1:
return state_machine__6445__auto____1.call(this,state_14127);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6445__auto____0;
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6445__auto____1;
return state_machine__6445__auto__;
})()
;})(switch__6444__auto__,c__6459__auto___14215,cs,m,dchan,dctr,done))
})();
var state__6461__auto__ = (function (){var statearr_14214 = f__6460__auto__.call(null);
(statearr_14214[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6459__auto___14215);

return statearr_14214;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6461__auto__);
});})(c__6459__auto___14215,cs,m,dchan,dctr,done))
);


return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){
return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

cljs.core.async.Mix = (function (){var obj14273 = {};
return obj14273;
})();

cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){
if((function (){var and__3618__auto__ = m;
if(and__3618__auto__){
return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else {
return and__3618__auto__;
}
})()){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4274__auto__ = (((m == null))?null:m);
return (function (){var or__3630__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4274__auto__)]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){
if((function (){var and__3618__auto__ = m;
if(and__3618__auto__){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else {
return and__3618__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4274__auto__ = (((m == null))?null:m);
return (function (){var or__3630__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4274__auto__)]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){
if((function (){var and__3618__auto__ = m;
if(and__3618__auto__){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else {
return and__3618__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4274__auto__ = (((m == null))?null:m);
return (function (){var or__3630__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4274__auto__)]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});

cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){
if((function (){var and__3618__auto__ = m;
if(and__3618__auto__){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else {
return and__3618__auto__;
}
})()){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4274__auto__ = (((m == null))?null:m);
return (function (){var or__3630__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4274__auto__)]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});

cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){
if((function (){var and__3618__auto__ = m;
if(and__3618__auto__){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else {
return and__3618__auto__;
}
})()){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4274__auto__ = (((m == null))?null:m);
return (function (){var or__3630__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4274__auto__)]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});

/**
* @param {...*} var_args
*/
cljs.core.async.ioc_alts_BANG_ = (function() { 
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__14274){
var map__14279 = p__14274;
var map__14279__$1 = ((cljs.core.seq_QMARK_.call(null,map__14279))?cljs.core.apply.call(null,cljs.core.hash_map,map__14279):map__14279);
var opts = map__14279__$1;
var statearr_14280_14283 = state;
(statearr_14280_14283[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__14279,map__14279__$1,opts){
return (function (val){
var statearr_14281_14284 = state;
(statearr_14281_14284[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__14279,map__14279__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_14282_14285 = state;
(statearr_14282_14285[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__14274 = null;
if (arguments.length > 3) {
  p__14274 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__14274);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__14286){
var state = cljs.core.first(arglist__14286);
arglist__14286 = cljs.core.next(arglist__14286);
var cont_block = cljs.core.first(arglist__14286);
arglist__14286 = cljs.core.next(arglist__14286);
var ports = cljs.core.first(arglist__14286);
var p__14274 = cljs.core.rest(arglist__14286);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__14274);
});
ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = ioc_alts_BANG___delegate;
return ioc_alts_BANG_;
})()
;
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t14406 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t14406 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta14407){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta14407 = meta14407;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14406.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t14406.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t14406.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t14406.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t14406.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t14406.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t14406.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t14406.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t14406.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_14408){
var self__ = this;
var _14408__$1 = this;
return self__.meta14407;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t14406.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_14408,meta14407__$1){
var self__ = this;
var _14408__$1 = this;
return (new cljs.core.async.t14406(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta14407__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t14406.cljs$lang$type = true;

cljs.core.async.t14406.cljs$lang$ctorStr = "cljs.core.async/t14406";

cljs.core.async.t14406.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t14406");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t14406 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t14406(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta14407){
return (new cljs.core.async.t14406(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta14407));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t14406(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),25,new cljs.core.Keyword(null,"end-line","end-line",1837326455),510,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"line","line",212345235),499,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/chrism/dev/farn/resources/public/js/out/cljs/core/async.cljs"], null)));
})()
;
var c__6459__auto___14525 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6459__auto___14525,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__6460__auto__ = (function (){var switch__6444__auto__ = ((function (c__6459__auto___14525,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_14478){
var state_val_14479 = (state_14478[(1)]);
if((state_val_14479 === (7))){
var inst_14422 = (state_14478[(7)]);
var inst_14427 = cljs.core.apply.call(null,cljs.core.hash_map,inst_14422);
var state_14478__$1 = state_14478;
var statearr_14480_14526 = state_14478__$1;
(statearr_14480_14526[(2)] = inst_14427);

(statearr_14480_14526[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14479 === (20))){
var inst_14437 = (state_14478[(8)]);
var state_14478__$1 = state_14478;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14478__$1,(23),out,inst_14437);
} else {
if((state_val_14479 === (1))){
var inst_14412 = (state_14478[(9)]);
var inst_14412__$1 = calc_state.call(null);
var inst_14413 = cljs.core.seq_QMARK_.call(null,inst_14412__$1);
var state_14478__$1 = (function (){var statearr_14481 = state_14478;
(statearr_14481[(9)] = inst_14412__$1);

return statearr_14481;
})();
if(inst_14413){
var statearr_14482_14527 = state_14478__$1;
(statearr_14482_14527[(1)] = (2));

} else {
var statearr_14483_14528 = state_14478__$1;
(statearr_14483_14528[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14479 === (24))){
var inst_14430 = (state_14478[(10)]);
var inst_14422 = inst_14430;
var state_14478__$1 = (function (){var statearr_14484 = state_14478;
(statearr_14484[(7)] = inst_14422);

return statearr_14484;
})();
var statearr_14485_14529 = state_14478__$1;
(statearr_14485_14529[(2)] = null);

(statearr_14485_14529[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14479 === (4))){
var inst_14412 = (state_14478[(9)]);
var inst_14418 = (state_14478[(2)]);
var inst_14419 = cljs.core.get.call(null,inst_14418,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_14420 = cljs.core.get.call(null,inst_14418,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_14421 = cljs.core.get.call(null,inst_14418,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_14422 = inst_14412;
var state_14478__$1 = (function (){var statearr_14486 = state_14478;
(statearr_14486[(11)] = inst_14420);

(statearr_14486[(7)] = inst_14422);

(statearr_14486[(12)] = inst_14421);

(statearr_14486[(13)] = inst_14419);

return statearr_14486;
})();
var statearr_14487_14530 = state_14478__$1;
(statearr_14487_14530[(2)] = null);

(statearr_14487_14530[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14479 === (15))){
var state_14478__$1 = state_14478;
var statearr_14488_14531 = state_14478__$1;
(statearr_14488_14531[(2)] = null);

(statearr_14488_14531[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14479 === (21))){
var inst_14430 = (state_14478[(10)]);
var inst_14422 = inst_14430;
var state_14478__$1 = (function (){var statearr_14489 = state_14478;
(statearr_14489[(7)] = inst_14422);

return statearr_14489;
})();
var statearr_14490_14532 = state_14478__$1;
(statearr_14490_14532[(2)] = null);

(statearr_14490_14532[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14479 === (13))){
var inst_14474 = (state_14478[(2)]);
var state_14478__$1 = state_14478;
var statearr_14491_14533 = state_14478__$1;
(statearr_14491_14533[(2)] = inst_14474);

(statearr_14491_14533[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14479 === (22))){
var inst_14472 = (state_14478[(2)]);
var state_14478__$1 = state_14478;
var statearr_14492_14534 = state_14478__$1;
(statearr_14492_14534[(2)] = inst_14472);

(statearr_14492_14534[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14479 === (6))){
var inst_14476 = (state_14478[(2)]);
var state_14478__$1 = state_14478;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14478__$1,inst_14476);
} else {
if((state_val_14479 === (25))){
var state_14478__$1 = state_14478;
var statearr_14493_14535 = state_14478__$1;
(statearr_14493_14535[(2)] = null);

(statearr_14493_14535[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14479 === (17))){
var inst_14452 = (state_14478[(14)]);
var state_14478__$1 = state_14478;
var statearr_14494_14536 = state_14478__$1;
(statearr_14494_14536[(2)] = inst_14452);

(statearr_14494_14536[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14479 === (3))){
var inst_14412 = (state_14478[(9)]);
var state_14478__$1 = state_14478;
var statearr_14495_14537 = state_14478__$1;
(statearr_14495_14537[(2)] = inst_14412);

(statearr_14495_14537[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14479 === (12))){
var inst_14452 = (state_14478[(14)]);
var inst_14433 = (state_14478[(15)]);
var inst_14438 = (state_14478[(16)]);
var inst_14452__$1 = inst_14433.call(null,inst_14438);
var state_14478__$1 = (function (){var statearr_14496 = state_14478;
(statearr_14496[(14)] = inst_14452__$1);

return statearr_14496;
})();
if(cljs.core.truth_(inst_14452__$1)){
var statearr_14497_14538 = state_14478__$1;
(statearr_14497_14538[(1)] = (17));

} else {
var statearr_14498_14539 = state_14478__$1;
(statearr_14498_14539[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14479 === (2))){
var inst_14412 = (state_14478[(9)]);
var inst_14415 = cljs.core.apply.call(null,cljs.core.hash_map,inst_14412);
var state_14478__$1 = state_14478;
var statearr_14499_14540 = state_14478__$1;
(statearr_14499_14540[(2)] = inst_14415);

(statearr_14499_14540[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14479 === (23))){
var inst_14463 = (state_14478[(2)]);
var state_14478__$1 = state_14478;
if(cljs.core.truth_(inst_14463)){
var statearr_14500_14541 = state_14478__$1;
(statearr_14500_14541[(1)] = (24));

} else {
var statearr_14501_14542 = state_14478__$1;
(statearr_14501_14542[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14479 === (19))){
var inst_14460 = (state_14478[(2)]);
var state_14478__$1 = state_14478;
if(cljs.core.truth_(inst_14460)){
var statearr_14502_14543 = state_14478__$1;
(statearr_14502_14543[(1)] = (20));

} else {
var statearr_14503_14544 = state_14478__$1;
(statearr_14503_14544[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14479 === (11))){
var inst_14437 = (state_14478[(8)]);
var inst_14443 = (inst_14437 == null);
var state_14478__$1 = state_14478;
if(cljs.core.truth_(inst_14443)){
var statearr_14504_14545 = state_14478__$1;
(statearr_14504_14545[(1)] = (14));

} else {
var statearr_14505_14546 = state_14478__$1;
(statearr_14505_14546[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14479 === (9))){
var inst_14430 = (state_14478[(10)]);
var inst_14430__$1 = (state_14478[(2)]);
var inst_14431 = cljs.core.get.call(null,inst_14430__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_14432 = cljs.core.get.call(null,inst_14430__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_14433 = cljs.core.get.call(null,inst_14430__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var state_14478__$1 = (function (){var statearr_14506 = state_14478;
(statearr_14506[(10)] = inst_14430__$1);

(statearr_14506[(17)] = inst_14432);

(statearr_14506[(15)] = inst_14433);

return statearr_14506;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_14478__$1,(10),inst_14431);
} else {
if((state_val_14479 === (5))){
var inst_14422 = (state_14478[(7)]);
var inst_14425 = cljs.core.seq_QMARK_.call(null,inst_14422);
var state_14478__$1 = state_14478;
if(inst_14425){
var statearr_14507_14547 = state_14478__$1;
(statearr_14507_14547[(1)] = (7));

} else {
var statearr_14508_14548 = state_14478__$1;
(statearr_14508_14548[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14479 === (14))){
var inst_14438 = (state_14478[(16)]);
var inst_14445 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_14438);
var state_14478__$1 = state_14478;
var statearr_14509_14549 = state_14478__$1;
(statearr_14509_14549[(2)] = inst_14445);

(statearr_14509_14549[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14479 === (26))){
var inst_14468 = (state_14478[(2)]);
var state_14478__$1 = state_14478;
var statearr_14510_14550 = state_14478__$1;
(statearr_14510_14550[(2)] = inst_14468);

(statearr_14510_14550[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14479 === (16))){
var inst_14448 = (state_14478[(2)]);
var inst_14449 = calc_state.call(null);
var inst_14422 = inst_14449;
var state_14478__$1 = (function (){var statearr_14511 = state_14478;
(statearr_14511[(7)] = inst_14422);

(statearr_14511[(18)] = inst_14448);

return statearr_14511;
})();
var statearr_14512_14551 = state_14478__$1;
(statearr_14512_14551[(2)] = null);

(statearr_14512_14551[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14479 === (10))){
var inst_14437 = (state_14478[(8)]);
var inst_14438 = (state_14478[(16)]);
var inst_14436 = (state_14478[(2)]);
var inst_14437__$1 = cljs.core.nth.call(null,inst_14436,(0),null);
var inst_14438__$1 = cljs.core.nth.call(null,inst_14436,(1),null);
var inst_14439 = (inst_14437__$1 == null);
var inst_14440 = cljs.core._EQ_.call(null,inst_14438__$1,change);
var inst_14441 = (inst_14439) || (inst_14440);
var state_14478__$1 = (function (){var statearr_14513 = state_14478;
(statearr_14513[(8)] = inst_14437__$1);

(statearr_14513[(16)] = inst_14438__$1);

return statearr_14513;
})();
if(cljs.core.truth_(inst_14441)){
var statearr_14514_14552 = state_14478__$1;
(statearr_14514_14552[(1)] = (11));

} else {
var statearr_14515_14553 = state_14478__$1;
(statearr_14515_14553[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14479 === (18))){
var inst_14432 = (state_14478[(17)]);
var inst_14433 = (state_14478[(15)]);
var inst_14438 = (state_14478[(16)]);
var inst_14455 = cljs.core.empty_QMARK_.call(null,inst_14433);
var inst_14456 = inst_14432.call(null,inst_14438);
var inst_14457 = cljs.core.not.call(null,inst_14456);
var inst_14458 = (inst_14455) && (inst_14457);
var state_14478__$1 = state_14478;
var statearr_14516_14554 = state_14478__$1;
(statearr_14516_14554[(2)] = inst_14458);

(statearr_14516_14554[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14479 === (8))){
var inst_14422 = (state_14478[(7)]);
var state_14478__$1 = state_14478;
var statearr_14517_14555 = state_14478__$1;
(statearr_14517_14555[(2)] = inst_14422);

(statearr_14517_14555[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6459__auto___14525,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__6444__auto__,c__6459__auto___14525,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__6445__auto__ = null;
var state_machine__6445__auto____0 = (function (){
var statearr_14521 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14521[(0)] = state_machine__6445__auto__);

(statearr_14521[(1)] = (1));

return statearr_14521;
});
var state_machine__6445__auto____1 = (function (state_14478){
while(true){
var ret_value__6446__auto__ = (function (){try{while(true){
var result__6447__auto__ = switch__6444__auto__.call(null,state_14478);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6447__auto__;
}
break;
}
}catch (e14522){if((e14522 instanceof Object)){
var ex__6448__auto__ = e14522;
var statearr_14523_14556 = state_14478;
(statearr_14523_14556[(5)] = ex__6448__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14478);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14522;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14557 = state_14478;
state_14478 = G__14557;
continue;
} else {
return ret_value__6446__auto__;
}
break;
}
});
state_machine__6445__auto__ = function(state_14478){
switch(arguments.length){
case 0:
return state_machine__6445__auto____0.call(this);
case 1:
return state_machine__6445__auto____1.call(this,state_14478);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6445__auto____0;
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6445__auto____1;
return state_machine__6445__auto__;
})()
;})(switch__6444__auto__,c__6459__auto___14525,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__6461__auto__ = (function (){var statearr_14524 = f__6460__auto__.call(null);
(statearr_14524[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6459__auto___14525);

return statearr_14524;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6461__auto__);
});})(c__6459__auto___14525,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

cljs.core.async.Pub = (function (){var obj14559 = {};
return obj14559;
})();

cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){
if((function (){var and__3618__auto__ = p;
if(and__3618__auto__){
return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else {
return and__3618__auto__;
}
})()){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4274__auto__ = (((p == null))?null:p);
return (function (){var or__3630__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4274__auto__)]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});

cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){
if((function (){var and__3618__auto__ = p;
if(and__3618__auto__){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else {
return and__3618__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4274__auto__ = (((p == null))?null:p);
return (function (){var or__3630__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4274__auto__)]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});

cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){
if((function (){var and__3618__auto__ = p;
if(and__3618__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else {
return and__3618__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4274__auto__ = (((p == null))?null:p);
return (function (){var or__3630__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4274__auto__)]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){
if((function (){var and__3618__auto__ = p;
if(and__3618__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else {
return and__3618__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4274__auto__ = (((p == null))?null:p);
return (function (){var or__3630__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4274__auto__)]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;

/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Items received when there are no matching subs get dropped.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){
return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__3630__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__3630__auto__)){
return or__3630__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3630__auto__,mults){
return (function (p1__14560_SHARP_){
if(cljs.core.truth_(p1__14560_SHARP_.call(null,topic))){
return p1__14560_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__14560_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3630__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t14683 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t14683 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta14684){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta14684 = meta14684;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14683.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t14683.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t14683.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4126__auto__)){
var m = temp__4126__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t14683.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t14683.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t14683.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t14683.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t14683.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_14685){
var self__ = this;
var _14685__$1 = this;
return self__.meta14684;
});})(mults,ensure_mult))
;

cljs.core.async.t14683.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_14685,meta14684__$1){
var self__ = this;
var _14685__$1 = this;
return (new cljs.core.async.t14683(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta14684__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t14683.cljs$lang$type = true;

cljs.core.async.t14683.cljs$lang$ctorStr = "cljs.core.async/t14683";

cljs.core.async.t14683.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t14683");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t14683 = ((function (mults,ensure_mult){
return (function __GT_t14683(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta14684){
return (new cljs.core.async.t14683(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta14684));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t14683(ensure_mult,mults,buf_fn,topic_fn,ch,pub,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),65,new cljs.core.Keyword(null,"end-line","end-line",1837326455),603,new cljs.core.Keyword(null,"column","column",2078222095),14,new cljs.core.Keyword(null,"line","line",212345235),591,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/chrism/dev/farn/resources/public/js/out/cljs/core/async.cljs"], null)));
})()
;
var c__6459__auto___14805 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6459__auto___14805,mults,ensure_mult,p){
return (function (){
var f__6460__auto__ = (function (){var switch__6444__auto__ = ((function (c__6459__auto___14805,mults,ensure_mult,p){
return (function (state_14757){
var state_val_14758 = (state_14757[(1)]);
if((state_val_14758 === (7))){
var inst_14753 = (state_14757[(2)]);
var state_14757__$1 = state_14757;
var statearr_14759_14806 = state_14757__$1;
(statearr_14759_14806[(2)] = inst_14753);

(statearr_14759_14806[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14758 === (20))){
var state_14757__$1 = state_14757;
var statearr_14760_14807 = state_14757__$1;
(statearr_14760_14807[(2)] = null);

(statearr_14760_14807[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14758 === (1))){
var state_14757__$1 = state_14757;
var statearr_14761_14808 = state_14757__$1;
(statearr_14761_14808[(2)] = null);

(statearr_14761_14808[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14758 === (24))){
var inst_14736 = (state_14757[(7)]);
var inst_14745 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_14736);
var state_14757__$1 = state_14757;
var statearr_14762_14809 = state_14757__$1;
(statearr_14762_14809[(2)] = inst_14745);

(statearr_14762_14809[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14758 === (4))){
var inst_14688 = (state_14757[(8)]);
var inst_14688__$1 = (state_14757[(2)]);
var inst_14689 = (inst_14688__$1 == null);
var state_14757__$1 = (function (){var statearr_14763 = state_14757;
(statearr_14763[(8)] = inst_14688__$1);

return statearr_14763;
})();
if(cljs.core.truth_(inst_14689)){
var statearr_14764_14810 = state_14757__$1;
(statearr_14764_14810[(1)] = (5));

} else {
var statearr_14765_14811 = state_14757__$1;
(statearr_14765_14811[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14758 === (15))){
var inst_14730 = (state_14757[(2)]);
var state_14757__$1 = state_14757;
var statearr_14766_14812 = state_14757__$1;
(statearr_14766_14812[(2)] = inst_14730);

(statearr_14766_14812[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14758 === (21))){
var inst_14750 = (state_14757[(2)]);
var state_14757__$1 = (function (){var statearr_14767 = state_14757;
(statearr_14767[(9)] = inst_14750);

return statearr_14767;
})();
var statearr_14768_14813 = state_14757__$1;
(statearr_14768_14813[(2)] = null);

(statearr_14768_14813[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14758 === (13))){
var inst_14712 = (state_14757[(10)]);
var inst_14714 = cljs.core.chunked_seq_QMARK_.call(null,inst_14712);
var state_14757__$1 = state_14757;
if(inst_14714){
var statearr_14769_14814 = state_14757__$1;
(statearr_14769_14814[(1)] = (16));

} else {
var statearr_14770_14815 = state_14757__$1;
(statearr_14770_14815[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14758 === (22))){
var inst_14742 = (state_14757[(2)]);
var state_14757__$1 = state_14757;
if(cljs.core.truth_(inst_14742)){
var statearr_14771_14816 = state_14757__$1;
(statearr_14771_14816[(1)] = (23));

} else {
var statearr_14772_14817 = state_14757__$1;
(statearr_14772_14817[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14758 === (6))){
var inst_14688 = (state_14757[(8)]);
var inst_14736 = (state_14757[(7)]);
var inst_14738 = (state_14757[(11)]);
var inst_14736__$1 = topic_fn.call(null,inst_14688);
var inst_14737 = cljs.core.deref.call(null,mults);
var inst_14738__$1 = cljs.core.get.call(null,inst_14737,inst_14736__$1);
var state_14757__$1 = (function (){var statearr_14773 = state_14757;
(statearr_14773[(7)] = inst_14736__$1);

(statearr_14773[(11)] = inst_14738__$1);

return statearr_14773;
})();
if(cljs.core.truth_(inst_14738__$1)){
var statearr_14774_14818 = state_14757__$1;
(statearr_14774_14818[(1)] = (19));

} else {
var statearr_14775_14819 = state_14757__$1;
(statearr_14775_14819[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14758 === (25))){
var inst_14747 = (state_14757[(2)]);
var state_14757__$1 = state_14757;
var statearr_14776_14820 = state_14757__$1;
(statearr_14776_14820[(2)] = inst_14747);

(statearr_14776_14820[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14758 === (17))){
var inst_14712 = (state_14757[(10)]);
var inst_14721 = cljs.core.first.call(null,inst_14712);
var inst_14722 = cljs.core.async.muxch_STAR_.call(null,inst_14721);
var inst_14723 = cljs.core.async.close_BANG_.call(null,inst_14722);
var inst_14724 = cljs.core.next.call(null,inst_14712);
var inst_14698 = inst_14724;
var inst_14699 = null;
var inst_14700 = (0);
var inst_14701 = (0);
var state_14757__$1 = (function (){var statearr_14777 = state_14757;
(statearr_14777[(12)] = inst_14699);

(statearr_14777[(13)] = inst_14701);

(statearr_14777[(14)] = inst_14700);

(statearr_14777[(15)] = inst_14723);

(statearr_14777[(16)] = inst_14698);

return statearr_14777;
})();
var statearr_14778_14821 = state_14757__$1;
(statearr_14778_14821[(2)] = null);

(statearr_14778_14821[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14758 === (3))){
var inst_14755 = (state_14757[(2)]);
var state_14757__$1 = state_14757;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14757__$1,inst_14755);
} else {
if((state_val_14758 === (12))){
var inst_14732 = (state_14757[(2)]);
var state_14757__$1 = state_14757;
var statearr_14779_14822 = state_14757__$1;
(statearr_14779_14822[(2)] = inst_14732);

(statearr_14779_14822[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14758 === (2))){
var state_14757__$1 = state_14757;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14757__$1,(4),ch);
} else {
if((state_val_14758 === (23))){
var state_14757__$1 = state_14757;
var statearr_14780_14823 = state_14757__$1;
(statearr_14780_14823[(2)] = null);

(statearr_14780_14823[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14758 === (19))){
var inst_14688 = (state_14757[(8)]);
var inst_14738 = (state_14757[(11)]);
var inst_14740 = cljs.core.async.muxch_STAR_.call(null,inst_14738);
var state_14757__$1 = state_14757;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14757__$1,(22),inst_14740,inst_14688);
} else {
if((state_val_14758 === (11))){
var inst_14698 = (state_14757[(16)]);
var inst_14712 = (state_14757[(10)]);
var inst_14712__$1 = cljs.core.seq.call(null,inst_14698);
var state_14757__$1 = (function (){var statearr_14781 = state_14757;
(statearr_14781[(10)] = inst_14712__$1);

return statearr_14781;
})();
if(inst_14712__$1){
var statearr_14782_14824 = state_14757__$1;
(statearr_14782_14824[(1)] = (13));

} else {
var statearr_14783_14825 = state_14757__$1;
(statearr_14783_14825[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14758 === (9))){
var inst_14734 = (state_14757[(2)]);
var state_14757__$1 = state_14757;
var statearr_14784_14826 = state_14757__$1;
(statearr_14784_14826[(2)] = inst_14734);

(statearr_14784_14826[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14758 === (5))){
var inst_14695 = cljs.core.deref.call(null,mults);
var inst_14696 = cljs.core.vals.call(null,inst_14695);
var inst_14697 = cljs.core.seq.call(null,inst_14696);
var inst_14698 = inst_14697;
var inst_14699 = null;
var inst_14700 = (0);
var inst_14701 = (0);
var state_14757__$1 = (function (){var statearr_14785 = state_14757;
(statearr_14785[(12)] = inst_14699);

(statearr_14785[(13)] = inst_14701);

(statearr_14785[(14)] = inst_14700);

(statearr_14785[(16)] = inst_14698);

return statearr_14785;
})();
var statearr_14786_14827 = state_14757__$1;
(statearr_14786_14827[(2)] = null);

(statearr_14786_14827[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14758 === (14))){
var state_14757__$1 = state_14757;
var statearr_14790_14828 = state_14757__$1;
(statearr_14790_14828[(2)] = null);

(statearr_14790_14828[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14758 === (16))){
var inst_14712 = (state_14757[(10)]);
var inst_14716 = cljs.core.chunk_first.call(null,inst_14712);
var inst_14717 = cljs.core.chunk_rest.call(null,inst_14712);
var inst_14718 = cljs.core.count.call(null,inst_14716);
var inst_14698 = inst_14717;
var inst_14699 = inst_14716;
var inst_14700 = inst_14718;
var inst_14701 = (0);
var state_14757__$1 = (function (){var statearr_14791 = state_14757;
(statearr_14791[(12)] = inst_14699);

(statearr_14791[(13)] = inst_14701);

(statearr_14791[(14)] = inst_14700);

(statearr_14791[(16)] = inst_14698);

return statearr_14791;
})();
var statearr_14792_14829 = state_14757__$1;
(statearr_14792_14829[(2)] = null);

(statearr_14792_14829[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14758 === (10))){
var inst_14699 = (state_14757[(12)]);
var inst_14701 = (state_14757[(13)]);
var inst_14700 = (state_14757[(14)]);
var inst_14698 = (state_14757[(16)]);
var inst_14706 = cljs.core._nth.call(null,inst_14699,inst_14701);
var inst_14707 = cljs.core.async.muxch_STAR_.call(null,inst_14706);
var inst_14708 = cljs.core.async.close_BANG_.call(null,inst_14707);
var inst_14709 = (inst_14701 + (1));
var tmp14787 = inst_14699;
var tmp14788 = inst_14700;
var tmp14789 = inst_14698;
var inst_14698__$1 = tmp14789;
var inst_14699__$1 = tmp14787;
var inst_14700__$1 = tmp14788;
var inst_14701__$1 = inst_14709;
var state_14757__$1 = (function (){var statearr_14793 = state_14757;
(statearr_14793[(12)] = inst_14699__$1);

(statearr_14793[(13)] = inst_14701__$1);

(statearr_14793[(14)] = inst_14700__$1);

(statearr_14793[(16)] = inst_14698__$1);

(statearr_14793[(17)] = inst_14708);

return statearr_14793;
})();
var statearr_14794_14830 = state_14757__$1;
(statearr_14794_14830[(2)] = null);

(statearr_14794_14830[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14758 === (18))){
var inst_14727 = (state_14757[(2)]);
var state_14757__$1 = state_14757;
var statearr_14795_14831 = state_14757__$1;
(statearr_14795_14831[(2)] = inst_14727);

(statearr_14795_14831[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14758 === (8))){
var inst_14701 = (state_14757[(13)]);
var inst_14700 = (state_14757[(14)]);
var inst_14703 = (inst_14701 < inst_14700);
var inst_14704 = inst_14703;
var state_14757__$1 = state_14757;
if(cljs.core.truth_(inst_14704)){
var statearr_14796_14832 = state_14757__$1;
(statearr_14796_14832[(1)] = (10));

} else {
var statearr_14797_14833 = state_14757__$1;
(statearr_14797_14833[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6459__auto___14805,mults,ensure_mult,p))
;
return ((function (switch__6444__auto__,c__6459__auto___14805,mults,ensure_mult,p){
return (function() {
var state_machine__6445__auto__ = null;
var state_machine__6445__auto____0 = (function (){
var statearr_14801 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14801[(0)] = state_machine__6445__auto__);

(statearr_14801[(1)] = (1));

return statearr_14801;
});
var state_machine__6445__auto____1 = (function (state_14757){
while(true){
var ret_value__6446__auto__ = (function (){try{while(true){
var result__6447__auto__ = switch__6444__auto__.call(null,state_14757);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6447__auto__;
}
break;
}
}catch (e14802){if((e14802 instanceof Object)){
var ex__6448__auto__ = e14802;
var statearr_14803_14834 = state_14757;
(statearr_14803_14834[(5)] = ex__6448__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14757);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14802;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14835 = state_14757;
state_14757 = G__14835;
continue;
} else {
return ret_value__6446__auto__;
}
break;
}
});
state_machine__6445__auto__ = function(state_14757){
switch(arguments.length){
case 0:
return state_machine__6445__auto____0.call(this);
case 1:
return state_machine__6445__auto____1.call(this,state_14757);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6445__auto____0;
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6445__auto____1;
return state_machine__6445__auto__;
})()
;})(switch__6444__auto__,c__6459__auto___14805,mults,ensure_mult,p))
})();
var state__6461__auto__ = (function (){var statearr_14804 = f__6460__auto__.call(null);
(statearr_14804[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6459__auto___14805);

return statearr_14804;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6461__auto__);
});})(c__6459__auto___14805,mults,ensure_mult,p))
);


return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){
return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){
return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__6459__auto___14972 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6459__auto___14972,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__6460__auto__ = (function (){var switch__6444__auto__ = ((function (c__6459__auto___14972,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_14942){
var state_val_14943 = (state_14942[(1)]);
if((state_val_14943 === (7))){
var state_14942__$1 = state_14942;
var statearr_14944_14973 = state_14942__$1;
(statearr_14944_14973[(2)] = null);

(statearr_14944_14973[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14943 === (1))){
var state_14942__$1 = state_14942;
var statearr_14945_14974 = state_14942__$1;
(statearr_14945_14974[(2)] = null);

(statearr_14945_14974[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14943 === (4))){
var inst_14906 = (state_14942[(7)]);
var inst_14908 = (inst_14906 < cnt);
var state_14942__$1 = state_14942;
if(cljs.core.truth_(inst_14908)){
var statearr_14946_14975 = state_14942__$1;
(statearr_14946_14975[(1)] = (6));

} else {
var statearr_14947_14976 = state_14942__$1;
(statearr_14947_14976[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14943 === (15))){
var inst_14938 = (state_14942[(2)]);
var state_14942__$1 = state_14942;
var statearr_14948_14977 = state_14942__$1;
(statearr_14948_14977[(2)] = inst_14938);

(statearr_14948_14977[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14943 === (13))){
var inst_14931 = cljs.core.async.close_BANG_.call(null,out);
var state_14942__$1 = state_14942;
var statearr_14949_14978 = state_14942__$1;
(statearr_14949_14978[(2)] = inst_14931);

(statearr_14949_14978[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14943 === (6))){
var state_14942__$1 = state_14942;
var statearr_14950_14979 = state_14942__$1;
(statearr_14950_14979[(2)] = null);

(statearr_14950_14979[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14943 === (3))){
var inst_14940 = (state_14942[(2)]);
var state_14942__$1 = state_14942;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14942__$1,inst_14940);
} else {
if((state_val_14943 === (12))){
var inst_14928 = (state_14942[(8)]);
var inst_14928__$1 = (state_14942[(2)]);
var inst_14929 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_14928__$1);
var state_14942__$1 = (function (){var statearr_14951 = state_14942;
(statearr_14951[(8)] = inst_14928__$1);

return statearr_14951;
})();
if(cljs.core.truth_(inst_14929)){
var statearr_14952_14980 = state_14942__$1;
(statearr_14952_14980[(1)] = (13));

} else {
var statearr_14953_14981 = state_14942__$1;
(statearr_14953_14981[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14943 === (2))){
var inst_14905 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_14906 = (0);
var state_14942__$1 = (function (){var statearr_14954 = state_14942;
(statearr_14954[(7)] = inst_14906);

(statearr_14954[(9)] = inst_14905);

return statearr_14954;
})();
var statearr_14955_14982 = state_14942__$1;
(statearr_14955_14982[(2)] = null);

(statearr_14955_14982[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14943 === (11))){
var inst_14906 = (state_14942[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_14942,(10),Object,null,(9));
var inst_14915 = chs__$1.call(null,inst_14906);
var inst_14916 = done.call(null,inst_14906);
var inst_14917 = cljs.core.async.take_BANG_.call(null,inst_14915,inst_14916);
var state_14942__$1 = state_14942;
var statearr_14956_14983 = state_14942__$1;
(statearr_14956_14983[(2)] = inst_14917);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14942__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14943 === (9))){
var inst_14906 = (state_14942[(7)]);
var inst_14919 = (state_14942[(2)]);
var inst_14920 = (inst_14906 + (1));
var inst_14906__$1 = inst_14920;
var state_14942__$1 = (function (){var statearr_14957 = state_14942;
(statearr_14957[(7)] = inst_14906__$1);

(statearr_14957[(10)] = inst_14919);

return statearr_14957;
})();
var statearr_14958_14984 = state_14942__$1;
(statearr_14958_14984[(2)] = null);

(statearr_14958_14984[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14943 === (5))){
var inst_14926 = (state_14942[(2)]);
var state_14942__$1 = (function (){var statearr_14959 = state_14942;
(statearr_14959[(11)] = inst_14926);

return statearr_14959;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14942__$1,(12),dchan);
} else {
if((state_val_14943 === (14))){
var inst_14928 = (state_14942[(8)]);
var inst_14933 = cljs.core.apply.call(null,f,inst_14928);
var state_14942__$1 = state_14942;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14942__$1,(16),out,inst_14933);
} else {
if((state_val_14943 === (16))){
var inst_14935 = (state_14942[(2)]);
var state_14942__$1 = (function (){var statearr_14960 = state_14942;
(statearr_14960[(12)] = inst_14935);

return statearr_14960;
})();
var statearr_14961_14985 = state_14942__$1;
(statearr_14961_14985[(2)] = null);

(statearr_14961_14985[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14943 === (10))){
var inst_14910 = (state_14942[(2)]);
var inst_14911 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_14942__$1 = (function (){var statearr_14962 = state_14942;
(statearr_14962[(13)] = inst_14910);

return statearr_14962;
})();
var statearr_14963_14986 = state_14942__$1;
(statearr_14963_14986[(2)] = inst_14911);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14942__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14943 === (8))){
var inst_14924 = (state_14942[(2)]);
var state_14942__$1 = state_14942;
var statearr_14964_14987 = state_14942__$1;
(statearr_14964_14987[(2)] = inst_14924);

(statearr_14964_14987[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6459__auto___14972,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__6444__auto__,c__6459__auto___14972,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__6445__auto__ = null;
var state_machine__6445__auto____0 = (function (){
var statearr_14968 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14968[(0)] = state_machine__6445__auto__);

(statearr_14968[(1)] = (1));

return statearr_14968;
});
var state_machine__6445__auto____1 = (function (state_14942){
while(true){
var ret_value__6446__auto__ = (function (){try{while(true){
var result__6447__auto__ = switch__6444__auto__.call(null,state_14942);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6447__auto__;
}
break;
}
}catch (e14969){if((e14969 instanceof Object)){
var ex__6448__auto__ = e14969;
var statearr_14970_14988 = state_14942;
(statearr_14970_14988[(5)] = ex__6448__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14942);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14969;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14989 = state_14942;
state_14942 = G__14989;
continue;
} else {
return ret_value__6446__auto__;
}
break;
}
});
state_machine__6445__auto__ = function(state_14942){
switch(arguments.length){
case 0:
return state_machine__6445__auto____0.call(this);
case 1:
return state_machine__6445__auto____1.call(this,state_14942);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6445__auto____0;
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6445__auto____1;
return state_machine__6445__auto__;
})()
;})(switch__6444__auto__,c__6459__auto___14972,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__6461__auto__ = (function (){var statearr_14971 = f__6460__auto__.call(null);
(statearr_14971[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6459__auto___14972);

return statearr_14971;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6461__auto__);
});})(c__6459__auto___14972,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){
return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__6459__auto___15097 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6459__auto___15097,out){
return (function (){
var f__6460__auto__ = (function (){var switch__6444__auto__ = ((function (c__6459__auto___15097,out){
return (function (state_15073){
var state_val_15074 = (state_15073[(1)]);
if((state_val_15074 === (7))){
var inst_15053 = (state_15073[(7)]);
var inst_15052 = (state_15073[(8)]);
var inst_15052__$1 = (state_15073[(2)]);
var inst_15053__$1 = cljs.core.nth.call(null,inst_15052__$1,(0),null);
var inst_15054 = cljs.core.nth.call(null,inst_15052__$1,(1),null);
var inst_15055 = (inst_15053__$1 == null);
var state_15073__$1 = (function (){var statearr_15075 = state_15073;
(statearr_15075[(7)] = inst_15053__$1);

(statearr_15075[(9)] = inst_15054);

(statearr_15075[(8)] = inst_15052__$1);

return statearr_15075;
})();
if(cljs.core.truth_(inst_15055)){
var statearr_15076_15098 = state_15073__$1;
(statearr_15076_15098[(1)] = (8));

} else {
var statearr_15077_15099 = state_15073__$1;
(statearr_15077_15099[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15074 === (1))){
var inst_15044 = cljs.core.vec.call(null,chs);
var inst_15045 = inst_15044;
var state_15073__$1 = (function (){var statearr_15078 = state_15073;
(statearr_15078[(10)] = inst_15045);

return statearr_15078;
})();
var statearr_15079_15100 = state_15073__$1;
(statearr_15079_15100[(2)] = null);

(statearr_15079_15100[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15074 === (4))){
var inst_15045 = (state_15073[(10)]);
var state_15073__$1 = state_15073;
return cljs.core.async.ioc_alts_BANG_.call(null,state_15073__$1,(7),inst_15045);
} else {
if((state_val_15074 === (6))){
var inst_15069 = (state_15073[(2)]);
var state_15073__$1 = state_15073;
var statearr_15080_15101 = state_15073__$1;
(statearr_15080_15101[(2)] = inst_15069);

(statearr_15080_15101[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15074 === (3))){
var inst_15071 = (state_15073[(2)]);
var state_15073__$1 = state_15073;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15073__$1,inst_15071);
} else {
if((state_val_15074 === (2))){
var inst_15045 = (state_15073[(10)]);
var inst_15047 = cljs.core.count.call(null,inst_15045);
var inst_15048 = (inst_15047 > (0));
var state_15073__$1 = state_15073;
if(cljs.core.truth_(inst_15048)){
var statearr_15082_15102 = state_15073__$1;
(statearr_15082_15102[(1)] = (4));

} else {
var statearr_15083_15103 = state_15073__$1;
(statearr_15083_15103[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15074 === (11))){
var inst_15045 = (state_15073[(10)]);
var inst_15062 = (state_15073[(2)]);
var tmp15081 = inst_15045;
var inst_15045__$1 = tmp15081;
var state_15073__$1 = (function (){var statearr_15084 = state_15073;
(statearr_15084[(10)] = inst_15045__$1);

(statearr_15084[(11)] = inst_15062);

return statearr_15084;
})();
var statearr_15085_15104 = state_15073__$1;
(statearr_15085_15104[(2)] = null);

(statearr_15085_15104[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15074 === (9))){
var inst_15053 = (state_15073[(7)]);
var state_15073__$1 = state_15073;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15073__$1,(11),out,inst_15053);
} else {
if((state_val_15074 === (5))){
var inst_15067 = cljs.core.async.close_BANG_.call(null,out);
var state_15073__$1 = state_15073;
var statearr_15086_15105 = state_15073__$1;
(statearr_15086_15105[(2)] = inst_15067);

(statearr_15086_15105[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15074 === (10))){
var inst_15065 = (state_15073[(2)]);
var state_15073__$1 = state_15073;
var statearr_15087_15106 = state_15073__$1;
(statearr_15087_15106[(2)] = inst_15065);

(statearr_15087_15106[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15074 === (8))){
var inst_15045 = (state_15073[(10)]);
var inst_15053 = (state_15073[(7)]);
var inst_15054 = (state_15073[(9)]);
var inst_15052 = (state_15073[(8)]);
var inst_15057 = (function (){var c = inst_15054;
var v = inst_15053;
var vec__15050 = inst_15052;
var cs = inst_15045;
return ((function (c,v,vec__15050,cs,inst_15045,inst_15053,inst_15054,inst_15052,state_val_15074,c__6459__auto___15097,out){
return (function (p1__14990_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__14990_SHARP_);
});
;})(c,v,vec__15050,cs,inst_15045,inst_15053,inst_15054,inst_15052,state_val_15074,c__6459__auto___15097,out))
})();
var inst_15058 = cljs.core.filterv.call(null,inst_15057,inst_15045);
var inst_15045__$1 = inst_15058;
var state_15073__$1 = (function (){var statearr_15088 = state_15073;
(statearr_15088[(10)] = inst_15045__$1);

return statearr_15088;
})();
var statearr_15089_15107 = state_15073__$1;
(statearr_15089_15107[(2)] = null);

(statearr_15089_15107[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__6459__auto___15097,out))
;
return ((function (switch__6444__auto__,c__6459__auto___15097,out){
return (function() {
var state_machine__6445__auto__ = null;
var state_machine__6445__auto____0 = (function (){
var statearr_15093 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15093[(0)] = state_machine__6445__auto__);

(statearr_15093[(1)] = (1));

return statearr_15093;
});
var state_machine__6445__auto____1 = (function (state_15073){
while(true){
var ret_value__6446__auto__ = (function (){try{while(true){
var result__6447__auto__ = switch__6444__auto__.call(null,state_15073);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6447__auto__;
}
break;
}
}catch (e15094){if((e15094 instanceof Object)){
var ex__6448__auto__ = e15094;
var statearr_15095_15108 = state_15073;
(statearr_15095_15108[(5)] = ex__6448__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15073);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15094;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15109 = state_15073;
state_15073 = G__15109;
continue;
} else {
return ret_value__6446__auto__;
}
break;
}
});
state_machine__6445__auto__ = function(state_15073){
switch(arguments.length){
case 0:
return state_machine__6445__auto____0.call(this);
case 1:
return state_machine__6445__auto____1.call(this,state_15073);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6445__auto____0;
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6445__auto____1;
return state_machine__6445__auto__;
})()
;})(switch__6444__auto__,c__6459__auto___15097,out))
})();
var state__6461__auto__ = (function (){var statearr_15096 = f__6460__auto__.call(null);
(statearr_15096[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6459__auto___15097);

return statearr_15096;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6461__auto__);
});})(c__6459__auto___15097,out))
);


return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){
return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__6459__auto___15202 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6459__auto___15202,out){
return (function (){
var f__6460__auto__ = (function (){var switch__6444__auto__ = ((function (c__6459__auto___15202,out){
return (function (state_15179){
var state_val_15180 = (state_15179[(1)]);
if((state_val_15180 === (7))){
var inst_15161 = (state_15179[(7)]);
var inst_15161__$1 = (state_15179[(2)]);
var inst_15162 = (inst_15161__$1 == null);
var inst_15163 = cljs.core.not.call(null,inst_15162);
var state_15179__$1 = (function (){var statearr_15181 = state_15179;
(statearr_15181[(7)] = inst_15161__$1);

return statearr_15181;
})();
if(inst_15163){
var statearr_15182_15203 = state_15179__$1;
(statearr_15182_15203[(1)] = (8));

} else {
var statearr_15183_15204 = state_15179__$1;
(statearr_15183_15204[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15180 === (1))){
var inst_15156 = (0);
var state_15179__$1 = (function (){var statearr_15184 = state_15179;
(statearr_15184[(8)] = inst_15156);

return statearr_15184;
})();
var statearr_15185_15205 = state_15179__$1;
(statearr_15185_15205[(2)] = null);

(statearr_15185_15205[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15180 === (4))){
var state_15179__$1 = state_15179;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15179__$1,(7),ch);
} else {
if((state_val_15180 === (6))){
var inst_15174 = (state_15179[(2)]);
var state_15179__$1 = state_15179;
var statearr_15186_15206 = state_15179__$1;
(statearr_15186_15206[(2)] = inst_15174);

(statearr_15186_15206[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15180 === (3))){
var inst_15176 = (state_15179[(2)]);
var inst_15177 = cljs.core.async.close_BANG_.call(null,out);
var state_15179__$1 = (function (){var statearr_15187 = state_15179;
(statearr_15187[(9)] = inst_15176);

return statearr_15187;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15179__$1,inst_15177);
} else {
if((state_val_15180 === (2))){
var inst_15156 = (state_15179[(8)]);
var inst_15158 = (inst_15156 < n);
var state_15179__$1 = state_15179;
if(cljs.core.truth_(inst_15158)){
var statearr_15188_15207 = state_15179__$1;
(statearr_15188_15207[(1)] = (4));

} else {
var statearr_15189_15208 = state_15179__$1;
(statearr_15189_15208[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15180 === (11))){
var inst_15156 = (state_15179[(8)]);
var inst_15166 = (state_15179[(2)]);
var inst_15167 = (inst_15156 + (1));
var inst_15156__$1 = inst_15167;
var state_15179__$1 = (function (){var statearr_15190 = state_15179;
(statearr_15190[(8)] = inst_15156__$1);

(statearr_15190[(10)] = inst_15166);

return statearr_15190;
})();
var statearr_15191_15209 = state_15179__$1;
(statearr_15191_15209[(2)] = null);

(statearr_15191_15209[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15180 === (9))){
var state_15179__$1 = state_15179;
var statearr_15192_15210 = state_15179__$1;
(statearr_15192_15210[(2)] = null);

(statearr_15192_15210[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15180 === (5))){
var state_15179__$1 = state_15179;
var statearr_15193_15211 = state_15179__$1;
(statearr_15193_15211[(2)] = null);

(statearr_15193_15211[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15180 === (10))){
var inst_15171 = (state_15179[(2)]);
var state_15179__$1 = state_15179;
var statearr_15194_15212 = state_15179__$1;
(statearr_15194_15212[(2)] = inst_15171);

(statearr_15194_15212[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15180 === (8))){
var inst_15161 = (state_15179[(7)]);
var state_15179__$1 = state_15179;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15179__$1,(11),out,inst_15161);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__6459__auto___15202,out))
;
return ((function (switch__6444__auto__,c__6459__auto___15202,out){
return (function() {
var state_machine__6445__auto__ = null;
var state_machine__6445__auto____0 = (function (){
var statearr_15198 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_15198[(0)] = state_machine__6445__auto__);

(statearr_15198[(1)] = (1));

return statearr_15198;
});
var state_machine__6445__auto____1 = (function (state_15179){
while(true){
var ret_value__6446__auto__ = (function (){try{while(true){
var result__6447__auto__ = switch__6444__auto__.call(null,state_15179);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6447__auto__;
}
break;
}
}catch (e15199){if((e15199 instanceof Object)){
var ex__6448__auto__ = e15199;
var statearr_15200_15213 = state_15179;
(statearr_15200_15213[(5)] = ex__6448__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15179);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15199;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15214 = state_15179;
state_15179 = G__15214;
continue;
} else {
return ret_value__6446__auto__;
}
break;
}
});
state_machine__6445__auto__ = function(state_15179){
switch(arguments.length){
case 0:
return state_machine__6445__auto____0.call(this);
case 1:
return state_machine__6445__auto____1.call(this,state_15179);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6445__auto____0;
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6445__auto____1;
return state_machine__6445__auto__;
})()
;})(switch__6444__auto__,c__6459__auto___15202,out))
})();
var state__6461__auto__ = (function (){var statearr_15201 = f__6460__auto__.call(null);
(statearr_15201[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6459__auto___15202);

return statearr_15201;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6461__auto__);
});})(c__6459__auto___15202,out))
);


return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){
if(typeof cljs.core.async.t15222 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t15222 = (function (ch,f,map_LT_,meta15223){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta15223 = meta15223;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15222.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t15222.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t15222.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t15222.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t15225 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t15225 = (function (fn1,_,meta15223,map_LT_,f,ch,meta15226){
this.fn1 = fn1;
this._ = _;
this.meta15223 = meta15223;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta15226 = meta15226;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15225.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t15225.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t15225.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__15215_SHARP_){
return f1.call(null,(((p1__15215_SHARP_ == null))?null:self__.f.call(null,p1__15215_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t15225.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_15227){
var self__ = this;
var _15227__$1 = this;
return self__.meta15226;
});})(___$1))
;

cljs.core.async.t15225.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_15227,meta15226__$1){
var self__ = this;
var _15227__$1 = this;
return (new cljs.core.async.t15225(self__.fn1,self__._,self__.meta15223,self__.map_LT_,self__.f,self__.ch,meta15226__$1));
});})(___$1))
;

cljs.core.async.t15225.cljs$lang$type = true;

cljs.core.async.t15225.cljs$lang$ctorStr = "cljs.core.async/t15225";

cljs.core.async.t15225.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t15225");
});})(___$1))
;

cljs.core.async.__GT_t15225 = ((function (___$1){
return (function __GT_t15225(fn1__$1,___$2,meta15223__$1,map_LT___$1,f__$1,ch__$1,meta15226){
return (new cljs.core.async.t15225(fn1__$1,___$2,meta15223__$1,map_LT___$1,f__$1,ch__$1,meta15226));
});})(___$1))
;

}

return (new cljs.core.async.t15225(fn1,___$1,self__.meta15223,self__.map_LT_,self__.f,self__.ch,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),737,new cljs.core.Keyword(null,"column","column",2078222095),10,new cljs.core.Keyword(null,"line","line",212345235),731,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/chrism/dev/farn/resources/public/js/out/cljs/core/async.cljs"], null)));
})()
);
if(cljs.core.truth_((function (){var and__3618__auto__ = ret;
if(cljs.core.truth_(and__3618__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__3618__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t15222.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t15222.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t15222.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t15222.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15224){
var self__ = this;
var _15224__$1 = this;
return self__.meta15223;
});

cljs.core.async.t15222.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15224,meta15223__$1){
var self__ = this;
var _15224__$1 = this;
return (new cljs.core.async.t15222(self__.ch,self__.f,self__.map_LT_,meta15223__$1));
});

cljs.core.async.t15222.cljs$lang$type = true;

cljs.core.async.t15222.cljs$lang$ctorStr = "cljs.core.async/t15222";

cljs.core.async.t15222.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t15222");
});

cljs.core.async.__GT_t15222 = (function __GT_t15222(ch__$1,f__$1,map_LT___$1,meta15223){
return (new cljs.core.async.t15222(ch__$1,f__$1,map_LT___$1,meta15223));
});

}

return (new cljs.core.async.t15222(ch,f,map_LT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),743,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),722,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/chrism/dev/farn/resources/public/js/out/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){
if(typeof cljs.core.async.t15231 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t15231 = (function (ch,f,map_GT_,meta15232){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta15232 = meta15232;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15231.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t15231.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t15231.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t15231.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t15231.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t15231.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t15231.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15233){
var self__ = this;
var _15233__$1 = this;
return self__.meta15232;
});

cljs.core.async.t15231.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15233,meta15232__$1){
var self__ = this;
var _15233__$1 = this;
return (new cljs.core.async.t15231(self__.ch,self__.f,self__.map_GT_,meta15232__$1));
});

cljs.core.async.t15231.cljs$lang$type = true;

cljs.core.async.t15231.cljs$lang$ctorStr = "cljs.core.async/t15231";

cljs.core.async.t15231.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t15231");
});

cljs.core.async.__GT_t15231 = (function __GT_t15231(ch__$1,f__$1,map_GT___$1,meta15232){
return (new cljs.core.async.t15231(ch__$1,f__$1,map_GT___$1,meta15232));
});

}

return (new cljs.core.async.t15231(ch,f,map_GT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),34,new cljs.core.Keyword(null,"end-line","end-line",1837326455),757,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),748,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/chrism/dev/farn/resources/public/js/out/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){
if(typeof cljs.core.async.t15237 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t15237 = (function (ch,p,filter_GT_,meta15238){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta15238 = meta15238;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15237.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t15237.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t15237.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t15237.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t15237.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t15237.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t15237.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t15237.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15239){
var self__ = this;
var _15239__$1 = this;
return self__.meta15238;
});

cljs.core.async.t15237.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15239,meta15238__$1){
var self__ = this;
var _15239__$1 = this;
return (new cljs.core.async.t15237(self__.ch,self__.p,self__.filter_GT_,meta15238__$1));
});

cljs.core.async.t15237.cljs$lang$type = true;

cljs.core.async.t15237.cljs$lang$ctorStr = "cljs.core.async/t15237";

cljs.core.async.t15237.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t15237");
});

cljs.core.async.__GT_t15237 = (function __GT_t15237(ch__$1,p__$1,filter_GT___$1,meta15238){
return (new cljs.core.async.t15237(ch__$1,p__$1,filter_GT___$1,meta15238));
});

}

return (new cljs.core.async.t15237(ch,p,filter_GT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),48,new cljs.core.Keyword(null,"end-line","end-line",1837326455),774,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),762,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/chrism/dev/farn/resources/public/js/out/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){
return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__6459__auto___15322 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6459__auto___15322,out){
return (function (){
var f__6460__auto__ = (function (){var switch__6444__auto__ = ((function (c__6459__auto___15322,out){
return (function (state_15301){
var state_val_15302 = (state_15301[(1)]);
if((state_val_15302 === (7))){
var inst_15297 = (state_15301[(2)]);
var state_15301__$1 = state_15301;
var statearr_15303_15323 = state_15301__$1;
(statearr_15303_15323[(2)] = inst_15297);

(statearr_15303_15323[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15302 === (1))){
var state_15301__$1 = state_15301;
var statearr_15304_15324 = state_15301__$1;
(statearr_15304_15324[(2)] = null);

(statearr_15304_15324[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15302 === (4))){
var inst_15283 = (state_15301[(7)]);
var inst_15283__$1 = (state_15301[(2)]);
var inst_15284 = (inst_15283__$1 == null);
var state_15301__$1 = (function (){var statearr_15305 = state_15301;
(statearr_15305[(7)] = inst_15283__$1);

return statearr_15305;
})();
if(cljs.core.truth_(inst_15284)){
var statearr_15306_15325 = state_15301__$1;
(statearr_15306_15325[(1)] = (5));

} else {
var statearr_15307_15326 = state_15301__$1;
(statearr_15307_15326[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15302 === (6))){
var inst_15283 = (state_15301[(7)]);
var inst_15288 = p.call(null,inst_15283);
var state_15301__$1 = state_15301;
if(cljs.core.truth_(inst_15288)){
var statearr_15308_15327 = state_15301__$1;
(statearr_15308_15327[(1)] = (8));

} else {
var statearr_15309_15328 = state_15301__$1;
(statearr_15309_15328[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15302 === (3))){
var inst_15299 = (state_15301[(2)]);
var state_15301__$1 = state_15301;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15301__$1,inst_15299);
} else {
if((state_val_15302 === (2))){
var state_15301__$1 = state_15301;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15301__$1,(4),ch);
} else {
if((state_val_15302 === (11))){
var inst_15291 = (state_15301[(2)]);
var state_15301__$1 = state_15301;
var statearr_15310_15329 = state_15301__$1;
(statearr_15310_15329[(2)] = inst_15291);

(statearr_15310_15329[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15302 === (9))){
var state_15301__$1 = state_15301;
var statearr_15311_15330 = state_15301__$1;
(statearr_15311_15330[(2)] = null);

(statearr_15311_15330[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15302 === (5))){
var inst_15286 = cljs.core.async.close_BANG_.call(null,out);
var state_15301__$1 = state_15301;
var statearr_15312_15331 = state_15301__$1;
(statearr_15312_15331[(2)] = inst_15286);

(statearr_15312_15331[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15302 === (10))){
var inst_15294 = (state_15301[(2)]);
var state_15301__$1 = (function (){var statearr_15313 = state_15301;
(statearr_15313[(8)] = inst_15294);

return statearr_15313;
})();
var statearr_15314_15332 = state_15301__$1;
(statearr_15314_15332[(2)] = null);

(statearr_15314_15332[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15302 === (8))){
var inst_15283 = (state_15301[(7)]);
var state_15301__$1 = state_15301;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15301__$1,(11),out,inst_15283);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__6459__auto___15322,out))
;
return ((function (switch__6444__auto__,c__6459__auto___15322,out){
return (function() {
var state_machine__6445__auto__ = null;
var state_machine__6445__auto____0 = (function (){
var statearr_15318 = [null,null,null,null,null,null,null,null,null];
(statearr_15318[(0)] = state_machine__6445__auto__);

(statearr_15318[(1)] = (1));

return statearr_15318;
});
var state_machine__6445__auto____1 = (function (state_15301){
while(true){
var ret_value__6446__auto__ = (function (){try{while(true){
var result__6447__auto__ = switch__6444__auto__.call(null,state_15301);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6447__auto__;
}
break;
}
}catch (e15319){if((e15319 instanceof Object)){
var ex__6448__auto__ = e15319;
var statearr_15320_15333 = state_15301;
(statearr_15320_15333[(5)] = ex__6448__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15301);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15319;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15334 = state_15301;
state_15301 = G__15334;
continue;
} else {
return ret_value__6446__auto__;
}
break;
}
});
state_machine__6445__auto__ = function(state_15301){
switch(arguments.length){
case 0:
return state_machine__6445__auto____0.call(this);
case 1:
return state_machine__6445__auto____1.call(this,state_15301);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6445__auto____0;
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6445__auto____1;
return state_machine__6445__auto__;
})()
;})(switch__6444__auto__,c__6459__auto___15322,out))
})();
var state__6461__auto__ = (function (){var statearr_15321 = f__6460__auto__.call(null);
(statearr_15321[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6459__auto___15322);

return statearr_15321;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6461__auto__);
});})(c__6459__auto___15322,out))
);


return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){
return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){
var c__6459__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6459__auto__){
return (function (){
var f__6460__auto__ = (function (){var switch__6444__auto__ = ((function (c__6459__auto__){
return (function (state_15500){
var state_val_15501 = (state_15500[(1)]);
if((state_val_15501 === (7))){
var inst_15496 = (state_15500[(2)]);
var state_15500__$1 = state_15500;
var statearr_15502_15543 = state_15500__$1;
(statearr_15502_15543[(2)] = inst_15496);

(statearr_15502_15543[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15501 === (20))){
var inst_15466 = (state_15500[(7)]);
var inst_15477 = (state_15500[(2)]);
var inst_15478 = cljs.core.next.call(null,inst_15466);
var inst_15452 = inst_15478;
var inst_15453 = null;
var inst_15454 = (0);
var inst_15455 = (0);
var state_15500__$1 = (function (){var statearr_15503 = state_15500;
(statearr_15503[(8)] = inst_15453);

(statearr_15503[(9)] = inst_15454);

(statearr_15503[(10)] = inst_15477);

(statearr_15503[(11)] = inst_15455);

(statearr_15503[(12)] = inst_15452);

return statearr_15503;
})();
var statearr_15504_15544 = state_15500__$1;
(statearr_15504_15544[(2)] = null);

(statearr_15504_15544[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15501 === (1))){
var state_15500__$1 = state_15500;
var statearr_15505_15545 = state_15500__$1;
(statearr_15505_15545[(2)] = null);

(statearr_15505_15545[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15501 === (4))){
var inst_15441 = (state_15500[(13)]);
var inst_15441__$1 = (state_15500[(2)]);
var inst_15442 = (inst_15441__$1 == null);
var state_15500__$1 = (function (){var statearr_15506 = state_15500;
(statearr_15506[(13)] = inst_15441__$1);

return statearr_15506;
})();
if(cljs.core.truth_(inst_15442)){
var statearr_15507_15546 = state_15500__$1;
(statearr_15507_15546[(1)] = (5));

} else {
var statearr_15508_15547 = state_15500__$1;
(statearr_15508_15547[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15501 === (15))){
var state_15500__$1 = state_15500;
var statearr_15512_15548 = state_15500__$1;
(statearr_15512_15548[(2)] = null);

(statearr_15512_15548[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15501 === (21))){
var state_15500__$1 = state_15500;
var statearr_15513_15549 = state_15500__$1;
(statearr_15513_15549[(2)] = null);

(statearr_15513_15549[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15501 === (13))){
var inst_15453 = (state_15500[(8)]);
var inst_15454 = (state_15500[(9)]);
var inst_15455 = (state_15500[(11)]);
var inst_15452 = (state_15500[(12)]);
var inst_15462 = (state_15500[(2)]);
var inst_15463 = (inst_15455 + (1));
var tmp15509 = inst_15453;
var tmp15510 = inst_15454;
var tmp15511 = inst_15452;
var inst_15452__$1 = tmp15511;
var inst_15453__$1 = tmp15509;
var inst_15454__$1 = tmp15510;
var inst_15455__$1 = inst_15463;
var state_15500__$1 = (function (){var statearr_15514 = state_15500;
(statearr_15514[(8)] = inst_15453__$1);

(statearr_15514[(9)] = inst_15454__$1);

(statearr_15514[(14)] = inst_15462);

(statearr_15514[(11)] = inst_15455__$1);

(statearr_15514[(12)] = inst_15452__$1);

return statearr_15514;
})();
var statearr_15515_15550 = state_15500__$1;
(statearr_15515_15550[(2)] = null);

(statearr_15515_15550[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15501 === (22))){
var state_15500__$1 = state_15500;
var statearr_15516_15551 = state_15500__$1;
(statearr_15516_15551[(2)] = null);

(statearr_15516_15551[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15501 === (6))){
var inst_15441 = (state_15500[(13)]);
var inst_15450 = f.call(null,inst_15441);
var inst_15451 = cljs.core.seq.call(null,inst_15450);
var inst_15452 = inst_15451;
var inst_15453 = null;
var inst_15454 = (0);
var inst_15455 = (0);
var state_15500__$1 = (function (){var statearr_15517 = state_15500;
(statearr_15517[(8)] = inst_15453);

(statearr_15517[(9)] = inst_15454);

(statearr_15517[(11)] = inst_15455);

(statearr_15517[(12)] = inst_15452);

return statearr_15517;
})();
var statearr_15518_15552 = state_15500__$1;
(statearr_15518_15552[(2)] = null);

(statearr_15518_15552[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15501 === (17))){
var inst_15466 = (state_15500[(7)]);
var inst_15470 = cljs.core.chunk_first.call(null,inst_15466);
var inst_15471 = cljs.core.chunk_rest.call(null,inst_15466);
var inst_15472 = cljs.core.count.call(null,inst_15470);
var inst_15452 = inst_15471;
var inst_15453 = inst_15470;
var inst_15454 = inst_15472;
var inst_15455 = (0);
var state_15500__$1 = (function (){var statearr_15519 = state_15500;
(statearr_15519[(8)] = inst_15453);

(statearr_15519[(9)] = inst_15454);

(statearr_15519[(11)] = inst_15455);

(statearr_15519[(12)] = inst_15452);

return statearr_15519;
})();
var statearr_15520_15553 = state_15500__$1;
(statearr_15520_15553[(2)] = null);

(statearr_15520_15553[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15501 === (3))){
var inst_15498 = (state_15500[(2)]);
var state_15500__$1 = state_15500;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15500__$1,inst_15498);
} else {
if((state_val_15501 === (12))){
var inst_15486 = (state_15500[(2)]);
var state_15500__$1 = state_15500;
var statearr_15521_15554 = state_15500__$1;
(statearr_15521_15554[(2)] = inst_15486);

(statearr_15521_15554[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15501 === (2))){
var state_15500__$1 = state_15500;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15500__$1,(4),in$);
} else {
if((state_val_15501 === (23))){
var inst_15494 = (state_15500[(2)]);
var state_15500__$1 = state_15500;
var statearr_15522_15555 = state_15500__$1;
(statearr_15522_15555[(2)] = inst_15494);

(statearr_15522_15555[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15501 === (19))){
var inst_15481 = (state_15500[(2)]);
var state_15500__$1 = state_15500;
var statearr_15523_15556 = state_15500__$1;
(statearr_15523_15556[(2)] = inst_15481);

(statearr_15523_15556[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15501 === (11))){
var inst_15466 = (state_15500[(7)]);
var inst_15452 = (state_15500[(12)]);
var inst_15466__$1 = cljs.core.seq.call(null,inst_15452);
var state_15500__$1 = (function (){var statearr_15524 = state_15500;
(statearr_15524[(7)] = inst_15466__$1);

return statearr_15524;
})();
if(inst_15466__$1){
var statearr_15525_15557 = state_15500__$1;
(statearr_15525_15557[(1)] = (14));

} else {
var statearr_15526_15558 = state_15500__$1;
(statearr_15526_15558[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15501 === (9))){
var inst_15488 = (state_15500[(2)]);
var inst_15489 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_15500__$1 = (function (){var statearr_15527 = state_15500;
(statearr_15527[(15)] = inst_15488);

return statearr_15527;
})();
if(cljs.core.truth_(inst_15489)){
var statearr_15528_15559 = state_15500__$1;
(statearr_15528_15559[(1)] = (21));

} else {
var statearr_15529_15560 = state_15500__$1;
(statearr_15529_15560[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15501 === (5))){
var inst_15444 = cljs.core.async.close_BANG_.call(null,out);
var state_15500__$1 = state_15500;
var statearr_15530_15561 = state_15500__$1;
(statearr_15530_15561[(2)] = inst_15444);

(statearr_15530_15561[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15501 === (14))){
var inst_15466 = (state_15500[(7)]);
var inst_15468 = cljs.core.chunked_seq_QMARK_.call(null,inst_15466);
var state_15500__$1 = state_15500;
if(inst_15468){
var statearr_15531_15562 = state_15500__$1;
(statearr_15531_15562[(1)] = (17));

} else {
var statearr_15532_15563 = state_15500__$1;
(statearr_15532_15563[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15501 === (16))){
var inst_15484 = (state_15500[(2)]);
var state_15500__$1 = state_15500;
var statearr_15533_15564 = state_15500__$1;
(statearr_15533_15564[(2)] = inst_15484);

(statearr_15533_15564[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15501 === (10))){
var inst_15453 = (state_15500[(8)]);
var inst_15455 = (state_15500[(11)]);
var inst_15460 = cljs.core._nth.call(null,inst_15453,inst_15455);
var state_15500__$1 = state_15500;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15500__$1,(13),out,inst_15460);
} else {
if((state_val_15501 === (18))){
var inst_15466 = (state_15500[(7)]);
var inst_15475 = cljs.core.first.call(null,inst_15466);
var state_15500__$1 = state_15500;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15500__$1,(20),out,inst_15475);
} else {
if((state_val_15501 === (8))){
var inst_15454 = (state_15500[(9)]);
var inst_15455 = (state_15500[(11)]);
var inst_15457 = (inst_15455 < inst_15454);
var inst_15458 = inst_15457;
var state_15500__$1 = state_15500;
if(cljs.core.truth_(inst_15458)){
var statearr_15534_15565 = state_15500__$1;
(statearr_15534_15565[(1)] = (10));

} else {
var statearr_15535_15566 = state_15500__$1;
(statearr_15535_15566[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6459__auto__))
;
return ((function (switch__6444__auto__,c__6459__auto__){
return (function() {
var state_machine__6445__auto__ = null;
var state_machine__6445__auto____0 = (function (){
var statearr_15539 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15539[(0)] = state_machine__6445__auto__);

(statearr_15539[(1)] = (1));

return statearr_15539;
});
var state_machine__6445__auto____1 = (function (state_15500){
while(true){
var ret_value__6446__auto__ = (function (){try{while(true){
var result__6447__auto__ = switch__6444__auto__.call(null,state_15500);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6447__auto__;
}
break;
}
}catch (e15540){if((e15540 instanceof Object)){
var ex__6448__auto__ = e15540;
var statearr_15541_15567 = state_15500;
(statearr_15541_15567[(5)] = ex__6448__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15500);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15540;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15568 = state_15500;
state_15500 = G__15568;
continue;
} else {
return ret_value__6446__auto__;
}
break;
}
});
state_machine__6445__auto__ = function(state_15500){
switch(arguments.length){
case 0:
return state_machine__6445__auto____0.call(this);
case 1:
return state_machine__6445__auto____1.call(this,state_15500);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6445__auto____0;
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6445__auto____1;
return state_machine__6445__auto__;
})()
;})(switch__6444__auto__,c__6459__auto__))
})();
var state__6461__auto__ = (function (){var statearr_15542 = f__6460__auto__.call(null);
(statearr_15542[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6459__auto__);

return statearr_15542;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6461__auto__);
});})(c__6459__auto__))
);

return c__6459__auto__;
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){
return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){
return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){
return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__6459__auto___15665 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6459__auto___15665,out){
return (function (){
var f__6460__auto__ = (function (){var switch__6444__auto__ = ((function (c__6459__auto___15665,out){
return (function (state_15640){
var state_val_15641 = (state_15640[(1)]);
if((state_val_15641 === (7))){
var inst_15635 = (state_15640[(2)]);
var state_15640__$1 = state_15640;
var statearr_15642_15666 = state_15640__$1;
(statearr_15642_15666[(2)] = inst_15635);

(statearr_15642_15666[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15641 === (1))){
var inst_15617 = null;
var state_15640__$1 = (function (){var statearr_15643 = state_15640;
(statearr_15643[(7)] = inst_15617);

return statearr_15643;
})();
var statearr_15644_15667 = state_15640__$1;
(statearr_15644_15667[(2)] = null);

(statearr_15644_15667[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15641 === (4))){
var inst_15620 = (state_15640[(8)]);
var inst_15620__$1 = (state_15640[(2)]);
var inst_15621 = (inst_15620__$1 == null);
var inst_15622 = cljs.core.not.call(null,inst_15621);
var state_15640__$1 = (function (){var statearr_15645 = state_15640;
(statearr_15645[(8)] = inst_15620__$1);

return statearr_15645;
})();
if(inst_15622){
var statearr_15646_15668 = state_15640__$1;
(statearr_15646_15668[(1)] = (5));

} else {
var statearr_15647_15669 = state_15640__$1;
(statearr_15647_15669[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15641 === (6))){
var state_15640__$1 = state_15640;
var statearr_15648_15670 = state_15640__$1;
(statearr_15648_15670[(2)] = null);

(statearr_15648_15670[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15641 === (3))){
var inst_15637 = (state_15640[(2)]);
var inst_15638 = cljs.core.async.close_BANG_.call(null,out);
var state_15640__$1 = (function (){var statearr_15649 = state_15640;
(statearr_15649[(9)] = inst_15637);

return statearr_15649;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15640__$1,inst_15638);
} else {
if((state_val_15641 === (2))){
var state_15640__$1 = state_15640;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15640__$1,(4),ch);
} else {
if((state_val_15641 === (11))){
var inst_15620 = (state_15640[(8)]);
var inst_15629 = (state_15640[(2)]);
var inst_15617 = inst_15620;
var state_15640__$1 = (function (){var statearr_15650 = state_15640;
(statearr_15650[(10)] = inst_15629);

(statearr_15650[(7)] = inst_15617);

return statearr_15650;
})();
var statearr_15651_15671 = state_15640__$1;
(statearr_15651_15671[(2)] = null);

(statearr_15651_15671[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15641 === (9))){
var inst_15620 = (state_15640[(8)]);
var state_15640__$1 = state_15640;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15640__$1,(11),out,inst_15620);
} else {
if((state_val_15641 === (5))){
var inst_15617 = (state_15640[(7)]);
var inst_15620 = (state_15640[(8)]);
var inst_15624 = cljs.core._EQ_.call(null,inst_15620,inst_15617);
var state_15640__$1 = state_15640;
if(inst_15624){
var statearr_15653_15672 = state_15640__$1;
(statearr_15653_15672[(1)] = (8));

} else {
var statearr_15654_15673 = state_15640__$1;
(statearr_15654_15673[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15641 === (10))){
var inst_15632 = (state_15640[(2)]);
var state_15640__$1 = state_15640;
var statearr_15655_15674 = state_15640__$1;
(statearr_15655_15674[(2)] = inst_15632);

(statearr_15655_15674[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15641 === (8))){
var inst_15617 = (state_15640[(7)]);
var tmp15652 = inst_15617;
var inst_15617__$1 = tmp15652;
var state_15640__$1 = (function (){var statearr_15656 = state_15640;
(statearr_15656[(7)] = inst_15617__$1);

return statearr_15656;
})();
var statearr_15657_15675 = state_15640__$1;
(statearr_15657_15675[(2)] = null);

(statearr_15657_15675[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__6459__auto___15665,out))
;
return ((function (switch__6444__auto__,c__6459__auto___15665,out){
return (function() {
var state_machine__6445__auto__ = null;
var state_machine__6445__auto____0 = (function (){
var statearr_15661 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_15661[(0)] = state_machine__6445__auto__);

(statearr_15661[(1)] = (1));

return statearr_15661;
});
var state_machine__6445__auto____1 = (function (state_15640){
while(true){
var ret_value__6446__auto__ = (function (){try{while(true){
var result__6447__auto__ = switch__6444__auto__.call(null,state_15640);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6447__auto__;
}
break;
}
}catch (e15662){if((e15662 instanceof Object)){
var ex__6448__auto__ = e15662;
var statearr_15663_15676 = state_15640;
(statearr_15663_15676[(5)] = ex__6448__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15640);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15662;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15677 = state_15640;
state_15640 = G__15677;
continue;
} else {
return ret_value__6446__auto__;
}
break;
}
});
state_machine__6445__auto__ = function(state_15640){
switch(arguments.length){
case 0:
return state_machine__6445__auto____0.call(this);
case 1:
return state_machine__6445__auto____1.call(this,state_15640);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6445__auto____0;
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6445__auto____1;
return state_machine__6445__auto__;
})()
;})(switch__6444__auto__,c__6459__auto___15665,out))
})();
var state__6461__auto__ = (function (){var statearr_15664 = f__6460__auto__.call(null);
(statearr_15664[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6459__auto___15665);

return statearr_15664;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6461__auto__);
});})(c__6459__auto___15665,out))
);


return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){
return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__6459__auto___15812 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6459__auto___15812,out){
return (function (){
var f__6460__auto__ = (function (){var switch__6444__auto__ = ((function (c__6459__auto___15812,out){
return (function (state_15782){
var state_val_15783 = (state_15782[(1)]);
if((state_val_15783 === (7))){
var inst_15778 = (state_15782[(2)]);
var state_15782__$1 = state_15782;
var statearr_15784_15813 = state_15782__$1;
(statearr_15784_15813[(2)] = inst_15778);

(statearr_15784_15813[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15783 === (1))){
var inst_15745 = (new Array(n));
var inst_15746 = inst_15745;
var inst_15747 = (0);
var state_15782__$1 = (function (){var statearr_15785 = state_15782;
(statearr_15785[(7)] = inst_15747);

(statearr_15785[(8)] = inst_15746);

return statearr_15785;
})();
var statearr_15786_15814 = state_15782__$1;
(statearr_15786_15814[(2)] = null);

(statearr_15786_15814[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15783 === (4))){
var inst_15750 = (state_15782[(9)]);
var inst_15750__$1 = (state_15782[(2)]);
var inst_15751 = (inst_15750__$1 == null);
var inst_15752 = cljs.core.not.call(null,inst_15751);
var state_15782__$1 = (function (){var statearr_15787 = state_15782;
(statearr_15787[(9)] = inst_15750__$1);

return statearr_15787;
})();
if(inst_15752){
var statearr_15788_15815 = state_15782__$1;
(statearr_15788_15815[(1)] = (5));

} else {
var statearr_15789_15816 = state_15782__$1;
(statearr_15789_15816[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15783 === (15))){
var inst_15772 = (state_15782[(2)]);
var state_15782__$1 = state_15782;
var statearr_15790_15817 = state_15782__$1;
(statearr_15790_15817[(2)] = inst_15772);

(statearr_15790_15817[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15783 === (13))){
var state_15782__$1 = state_15782;
var statearr_15791_15818 = state_15782__$1;
(statearr_15791_15818[(2)] = null);

(statearr_15791_15818[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15783 === (6))){
var inst_15747 = (state_15782[(7)]);
var inst_15768 = (inst_15747 > (0));
var state_15782__$1 = state_15782;
if(cljs.core.truth_(inst_15768)){
var statearr_15792_15819 = state_15782__$1;
(statearr_15792_15819[(1)] = (12));

} else {
var statearr_15793_15820 = state_15782__$1;
(statearr_15793_15820[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15783 === (3))){
var inst_15780 = (state_15782[(2)]);
var state_15782__$1 = state_15782;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15782__$1,inst_15780);
} else {
if((state_val_15783 === (12))){
var inst_15746 = (state_15782[(8)]);
var inst_15770 = cljs.core.vec.call(null,inst_15746);
var state_15782__$1 = state_15782;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15782__$1,(15),out,inst_15770);
} else {
if((state_val_15783 === (2))){
var state_15782__$1 = state_15782;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15782__$1,(4),ch);
} else {
if((state_val_15783 === (11))){
var inst_15762 = (state_15782[(2)]);
var inst_15763 = (new Array(n));
var inst_15746 = inst_15763;
var inst_15747 = (0);
var state_15782__$1 = (function (){var statearr_15794 = state_15782;
(statearr_15794[(7)] = inst_15747);

(statearr_15794[(10)] = inst_15762);

(statearr_15794[(8)] = inst_15746);

return statearr_15794;
})();
var statearr_15795_15821 = state_15782__$1;
(statearr_15795_15821[(2)] = null);

(statearr_15795_15821[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15783 === (9))){
var inst_15746 = (state_15782[(8)]);
var inst_15760 = cljs.core.vec.call(null,inst_15746);
var state_15782__$1 = state_15782;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15782__$1,(11),out,inst_15760);
} else {
if((state_val_15783 === (5))){
var inst_15750 = (state_15782[(9)]);
var inst_15747 = (state_15782[(7)]);
var inst_15746 = (state_15782[(8)]);
var inst_15755 = (state_15782[(11)]);
var inst_15754 = (inst_15746[inst_15747] = inst_15750);
var inst_15755__$1 = (inst_15747 + (1));
var inst_15756 = (inst_15755__$1 < n);
var state_15782__$1 = (function (){var statearr_15796 = state_15782;
(statearr_15796[(12)] = inst_15754);

(statearr_15796[(11)] = inst_15755__$1);

return statearr_15796;
})();
if(cljs.core.truth_(inst_15756)){
var statearr_15797_15822 = state_15782__$1;
(statearr_15797_15822[(1)] = (8));

} else {
var statearr_15798_15823 = state_15782__$1;
(statearr_15798_15823[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15783 === (14))){
var inst_15775 = (state_15782[(2)]);
var inst_15776 = cljs.core.async.close_BANG_.call(null,out);
var state_15782__$1 = (function (){var statearr_15800 = state_15782;
(statearr_15800[(13)] = inst_15775);

return statearr_15800;
})();
var statearr_15801_15824 = state_15782__$1;
(statearr_15801_15824[(2)] = inst_15776);

(statearr_15801_15824[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15783 === (10))){
var inst_15766 = (state_15782[(2)]);
var state_15782__$1 = state_15782;
var statearr_15802_15825 = state_15782__$1;
(statearr_15802_15825[(2)] = inst_15766);

(statearr_15802_15825[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15783 === (8))){
var inst_15746 = (state_15782[(8)]);
var inst_15755 = (state_15782[(11)]);
var tmp15799 = inst_15746;
var inst_15746__$1 = tmp15799;
var inst_15747 = inst_15755;
var state_15782__$1 = (function (){var statearr_15803 = state_15782;
(statearr_15803[(7)] = inst_15747);

(statearr_15803[(8)] = inst_15746__$1);

return statearr_15803;
})();
var statearr_15804_15826 = state_15782__$1;
(statearr_15804_15826[(2)] = null);

(statearr_15804_15826[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6459__auto___15812,out))
;
return ((function (switch__6444__auto__,c__6459__auto___15812,out){
return (function() {
var state_machine__6445__auto__ = null;
var state_machine__6445__auto____0 = (function (){
var statearr_15808 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15808[(0)] = state_machine__6445__auto__);

(statearr_15808[(1)] = (1));

return statearr_15808;
});
var state_machine__6445__auto____1 = (function (state_15782){
while(true){
var ret_value__6446__auto__ = (function (){try{while(true){
var result__6447__auto__ = switch__6444__auto__.call(null,state_15782);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6447__auto__;
}
break;
}
}catch (e15809){if((e15809 instanceof Object)){
var ex__6448__auto__ = e15809;
var statearr_15810_15827 = state_15782;
(statearr_15810_15827[(5)] = ex__6448__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15782);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15809;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15828 = state_15782;
state_15782 = G__15828;
continue;
} else {
return ret_value__6446__auto__;
}
break;
}
});
state_machine__6445__auto__ = function(state_15782){
switch(arguments.length){
case 0:
return state_machine__6445__auto____0.call(this);
case 1:
return state_machine__6445__auto____1.call(this,state_15782);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6445__auto____0;
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6445__auto____1;
return state_machine__6445__auto__;
})()
;})(switch__6444__auto__,c__6459__auto___15812,out))
})();
var state__6461__auto__ = (function (){var statearr_15811 = f__6460__auto__.call(null);
(statearr_15811[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6459__auto___15812);

return statearr_15811;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6461__auto__);
});})(c__6459__auto___15812,out))
);


return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){
return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__6459__auto___15971 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6459__auto___15971,out){
return (function (){
var f__6460__auto__ = (function (){var switch__6444__auto__ = ((function (c__6459__auto___15971,out){
return (function (state_15941){
var state_val_15942 = (state_15941[(1)]);
if((state_val_15942 === (7))){
var inst_15937 = (state_15941[(2)]);
var state_15941__$1 = state_15941;
var statearr_15943_15972 = state_15941__$1;
(statearr_15943_15972[(2)] = inst_15937);

(statearr_15943_15972[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15942 === (1))){
var inst_15900 = [];
var inst_15901 = inst_15900;
var inst_15902 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_15941__$1 = (function (){var statearr_15944 = state_15941;
(statearr_15944[(7)] = inst_15901);

(statearr_15944[(8)] = inst_15902);

return statearr_15944;
})();
var statearr_15945_15973 = state_15941__$1;
(statearr_15945_15973[(2)] = null);

(statearr_15945_15973[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15942 === (4))){
var inst_15905 = (state_15941[(9)]);
var inst_15905__$1 = (state_15941[(2)]);
var inst_15906 = (inst_15905__$1 == null);
var inst_15907 = cljs.core.not.call(null,inst_15906);
var state_15941__$1 = (function (){var statearr_15946 = state_15941;
(statearr_15946[(9)] = inst_15905__$1);

return statearr_15946;
})();
if(inst_15907){
var statearr_15947_15974 = state_15941__$1;
(statearr_15947_15974[(1)] = (5));

} else {
var statearr_15948_15975 = state_15941__$1;
(statearr_15948_15975[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15942 === (15))){
var inst_15931 = (state_15941[(2)]);
var state_15941__$1 = state_15941;
var statearr_15949_15976 = state_15941__$1;
(statearr_15949_15976[(2)] = inst_15931);

(statearr_15949_15976[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15942 === (13))){
var state_15941__$1 = state_15941;
var statearr_15950_15977 = state_15941__$1;
(statearr_15950_15977[(2)] = null);

(statearr_15950_15977[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15942 === (6))){
var inst_15901 = (state_15941[(7)]);
var inst_15926 = inst_15901.length;
var inst_15927 = (inst_15926 > (0));
var state_15941__$1 = state_15941;
if(cljs.core.truth_(inst_15927)){
var statearr_15951_15978 = state_15941__$1;
(statearr_15951_15978[(1)] = (12));

} else {
var statearr_15952_15979 = state_15941__$1;
(statearr_15952_15979[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15942 === (3))){
var inst_15939 = (state_15941[(2)]);
var state_15941__$1 = state_15941;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15941__$1,inst_15939);
} else {
if((state_val_15942 === (12))){
var inst_15901 = (state_15941[(7)]);
var inst_15929 = cljs.core.vec.call(null,inst_15901);
var state_15941__$1 = state_15941;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15941__$1,(15),out,inst_15929);
} else {
if((state_val_15942 === (2))){
var state_15941__$1 = state_15941;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15941__$1,(4),ch);
} else {
if((state_val_15942 === (11))){
var inst_15905 = (state_15941[(9)]);
var inst_15909 = (state_15941[(10)]);
var inst_15919 = (state_15941[(2)]);
var inst_15920 = [];
var inst_15921 = inst_15920.push(inst_15905);
var inst_15901 = inst_15920;
var inst_15902 = inst_15909;
var state_15941__$1 = (function (){var statearr_15953 = state_15941;
(statearr_15953[(11)] = inst_15919);

(statearr_15953[(7)] = inst_15901);

(statearr_15953[(12)] = inst_15921);

(statearr_15953[(8)] = inst_15902);

return statearr_15953;
})();
var statearr_15954_15980 = state_15941__$1;
(statearr_15954_15980[(2)] = null);

(statearr_15954_15980[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15942 === (9))){
var inst_15901 = (state_15941[(7)]);
var inst_15917 = cljs.core.vec.call(null,inst_15901);
var state_15941__$1 = state_15941;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15941__$1,(11),out,inst_15917);
} else {
if((state_val_15942 === (5))){
var inst_15905 = (state_15941[(9)]);
var inst_15909 = (state_15941[(10)]);
var inst_15902 = (state_15941[(8)]);
var inst_15909__$1 = f.call(null,inst_15905);
var inst_15910 = cljs.core._EQ_.call(null,inst_15909__$1,inst_15902);
var inst_15911 = cljs.core.keyword_identical_QMARK_.call(null,inst_15902,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_15912 = (inst_15910) || (inst_15911);
var state_15941__$1 = (function (){var statearr_15955 = state_15941;
(statearr_15955[(10)] = inst_15909__$1);

return statearr_15955;
})();
if(cljs.core.truth_(inst_15912)){
var statearr_15956_15981 = state_15941__$1;
(statearr_15956_15981[(1)] = (8));

} else {
var statearr_15957_15982 = state_15941__$1;
(statearr_15957_15982[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15942 === (14))){
var inst_15934 = (state_15941[(2)]);
var inst_15935 = cljs.core.async.close_BANG_.call(null,out);
var state_15941__$1 = (function (){var statearr_15959 = state_15941;
(statearr_15959[(13)] = inst_15934);

return statearr_15959;
})();
var statearr_15960_15983 = state_15941__$1;
(statearr_15960_15983[(2)] = inst_15935);

(statearr_15960_15983[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15942 === (10))){
var inst_15924 = (state_15941[(2)]);
var state_15941__$1 = state_15941;
var statearr_15961_15984 = state_15941__$1;
(statearr_15961_15984[(2)] = inst_15924);

(statearr_15961_15984[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15942 === (8))){
var inst_15905 = (state_15941[(9)]);
var inst_15909 = (state_15941[(10)]);
var inst_15901 = (state_15941[(7)]);
var inst_15914 = inst_15901.push(inst_15905);
var tmp15958 = inst_15901;
var inst_15901__$1 = tmp15958;
var inst_15902 = inst_15909;
var state_15941__$1 = (function (){var statearr_15962 = state_15941;
(statearr_15962[(14)] = inst_15914);

(statearr_15962[(7)] = inst_15901__$1);

(statearr_15962[(8)] = inst_15902);

return statearr_15962;
})();
var statearr_15963_15985 = state_15941__$1;
(statearr_15963_15985[(2)] = null);

(statearr_15963_15985[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6459__auto___15971,out))
;
return ((function (switch__6444__auto__,c__6459__auto___15971,out){
return (function() {
var state_machine__6445__auto__ = null;
var state_machine__6445__auto____0 = (function (){
var statearr_15967 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15967[(0)] = state_machine__6445__auto__);

(statearr_15967[(1)] = (1));

return statearr_15967;
});
var state_machine__6445__auto____1 = (function (state_15941){
while(true){
var ret_value__6446__auto__ = (function (){try{while(true){
var result__6447__auto__ = switch__6444__auto__.call(null,state_15941);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6447__auto__;
}
break;
}
}catch (e15968){if((e15968 instanceof Object)){
var ex__6448__auto__ = e15968;
var statearr_15969_15986 = state_15941;
(statearr_15969_15986[(5)] = ex__6448__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15941);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15968;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15987 = state_15941;
state_15941 = G__15987;
continue;
} else {
return ret_value__6446__auto__;
}
break;
}
});
state_machine__6445__auto__ = function(state_15941){
switch(arguments.length){
case 0:
return state_machine__6445__auto____0.call(this);
case 1:
return state_machine__6445__auto____1.call(this,state_15941);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6445__auto____0;
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6445__auto____1;
return state_machine__6445__auto__;
})()
;})(switch__6444__auto__,c__6459__auto___15971,out))
})();
var state__6461__auto__ = (function (){var statearr_15970 = f__6460__auto__.call(null);
(statearr_15970[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6459__auto___15971);

return statearr_15970;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6461__auto__);
});})(c__6459__auto___15971,out))
);


return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;

//# sourceMappingURL=async.js.map