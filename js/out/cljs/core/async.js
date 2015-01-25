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
if(typeof cljs.core.async.t15243 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t15243 = (function (f,fn_handler,meta15244){
this.f = f;
this.fn_handler = fn_handler;
this.meta15244 = meta15244;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15243.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t15243.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t15243.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t15243.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15245){
var self__ = this;
var _15245__$1 = this;
return self__.meta15244;
});

cljs.core.async.t15243.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15245,meta15244__$1){
var self__ = this;
var _15245__$1 = this;
return (new cljs.core.async.t15243(self__.f,self__.fn_handler,meta15244__$1));
});

cljs.core.async.t15243.cljs$lang$type = true;

cljs.core.async.t15243.cljs$lang$ctorStr = "cljs.core.async/t15243";

cljs.core.async.t15243.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t15243");
});

cljs.core.async.__GT_t15243 = (function __GT_t15243(f__$1,fn_handler__$1,meta15244){
return (new cljs.core.async.t15243(f__$1,fn_handler__$1,meta15244));
});

}

return (new cljs.core.async.t15243(f,fn_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),20,new cljs.core.Keyword(null,"end-line","end-line",1837326455),16,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),13,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/chrism/dev/farn/resources/public/js/out/cljs/core/async.cljs"], null)));
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
var G__15247 = buff;
if(G__15247){
var bit__4311__auto__ = null;
if(cljs.core.truth_((function (){var or__3630__auto__ = bit__4311__auto__;
if(cljs.core.truth_(or__3630__auto__)){
return or__3630__auto__;
} else {
return G__15247.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__15247.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__15247);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__15247);
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
var val_15248 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_15248);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_15248,ret){
return (function (){
return fn1.call(null,val_15248);
});})(val_15248,ret))
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
var n__4517__auto___15249 = n;
var x_15250 = (0);
while(true){
if((x_15250 < n__4517__auto___15249)){
(a[x_15250] = (0));

var G__15251 = (x_15250 + (1));
x_15250 = G__15251;
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

var G__15252 = (i + (1));
i = G__15252;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t15256 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t15256 = (function (flag,alt_flag,meta15257){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta15257 = meta15257;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15256.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t15256.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t15256.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t15256.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_15258){
var self__ = this;
var _15258__$1 = this;
return self__.meta15257;
});})(flag))
;

cljs.core.async.t15256.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_15258,meta15257__$1){
var self__ = this;
var _15258__$1 = this;
return (new cljs.core.async.t15256(self__.flag,self__.alt_flag,meta15257__$1));
});})(flag))
;

cljs.core.async.t15256.cljs$lang$type = true;

cljs.core.async.t15256.cljs$lang$ctorStr = "cljs.core.async/t15256";

cljs.core.async.t15256.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t15256");
});})(flag))
;

cljs.core.async.__GT_t15256 = ((function (flag){
return (function __GT_t15256(flag__$1,alt_flag__$1,meta15257){
return (new cljs.core.async.t15256(flag__$1,alt_flag__$1,meta15257));
});})(flag))
;

}

return (new cljs.core.async.t15256(flag,alt_flag,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),15,new cljs.core.Keyword(null,"end-line","end-line",1837326455),146,new cljs.core.Keyword(null,"column","column",2078222095),5,new cljs.core.Keyword(null,"line","line",212345235),141,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/chrism/dev/farn/resources/public/js/out/cljs/core/async.cljs"], null)));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){
if(typeof cljs.core.async.t15262 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t15262 = (function (cb,flag,alt_handler,meta15263){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta15263 = meta15263;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15262.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t15262.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t15262.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t15262.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15264){
var self__ = this;
var _15264__$1 = this;
return self__.meta15263;
});

cljs.core.async.t15262.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15264,meta15263__$1){
var self__ = this;
var _15264__$1 = this;
return (new cljs.core.async.t15262(self__.cb,self__.flag,self__.alt_handler,meta15263__$1));
});

cljs.core.async.t15262.cljs$lang$type = true;

cljs.core.async.t15262.cljs$lang$ctorStr = "cljs.core.async/t15262";

cljs.core.async.t15262.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t15262");
});

cljs.core.async.__GT_t15262 = (function __GT_t15262(cb__$1,flag__$1,alt_handler__$1,meta15263){
return (new cljs.core.async.t15262(cb__$1,flag__$1,alt_handler__$1,meta15263));
});

}

return (new cljs.core.async.t15262(cb,flag,alt_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),11,new cljs.core.Keyword(null,"end-line","end-line",1837326455),154,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),149,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/chrism/dev/farn/resources/public/js/out/cljs/core/async.cljs"], null)));
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
return (function (p1__15265_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__15265_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__15266_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__15266_SHARP_,port], null));
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
var G__15267 = (i + (1));
i = G__15267;
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
var alts_BANG___delegate = function (ports,p__15268){
var map__15270 = p__15268;
var map__15270__$1 = ((cljs.core.seq_QMARK_.call(null,map__15270))?cljs.core.apply.call(null,cljs.core.hash_map,map__15270):map__15270);
var opts = map__15270__$1;
throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__15268 = null;
if (arguments.length > 1) {
  p__15268 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return alts_BANG___delegate.call(this,ports,p__15268);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__15271){
var ports = cljs.core.first(arglist__15271);
var p__15268 = cljs.core.rest(arglist__15271);
return alts_BANG___delegate(ports,p__15268);
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
var c__6459__auto___15366 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6459__auto___15366){
return (function (){
var f__6460__auto__ = (function (){var switch__6444__auto__ = ((function (c__6459__auto___15366){
return (function (state_15342){
var state_val_15343 = (state_15342[(1)]);
if((state_val_15343 === (7))){
var inst_15338 = (state_15342[(2)]);
var state_15342__$1 = state_15342;
var statearr_15344_15367 = state_15342__$1;
(statearr_15344_15367[(2)] = inst_15338);

(statearr_15344_15367[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15343 === (1))){
var state_15342__$1 = state_15342;
var statearr_15345_15368 = state_15342__$1;
(statearr_15345_15368[(2)] = null);

(statearr_15345_15368[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15343 === (4))){
var inst_15321 = (state_15342[(7)]);
var inst_15321__$1 = (state_15342[(2)]);
var inst_15322 = (inst_15321__$1 == null);
var state_15342__$1 = (function (){var statearr_15346 = state_15342;
(statearr_15346[(7)] = inst_15321__$1);

return statearr_15346;
})();
if(cljs.core.truth_(inst_15322)){
var statearr_15347_15369 = state_15342__$1;
(statearr_15347_15369[(1)] = (5));

} else {
var statearr_15348_15370 = state_15342__$1;
(statearr_15348_15370[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15343 === (13))){
var state_15342__$1 = state_15342;
var statearr_15349_15371 = state_15342__$1;
(statearr_15349_15371[(2)] = null);

(statearr_15349_15371[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15343 === (6))){
var inst_15321 = (state_15342[(7)]);
var state_15342__$1 = state_15342;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15342__$1,(11),to,inst_15321);
} else {
if((state_val_15343 === (3))){
var inst_15340 = (state_15342[(2)]);
var state_15342__$1 = state_15342;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15342__$1,inst_15340);
} else {
if((state_val_15343 === (12))){
var state_15342__$1 = state_15342;
var statearr_15350_15372 = state_15342__$1;
(statearr_15350_15372[(2)] = null);

(statearr_15350_15372[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15343 === (2))){
var state_15342__$1 = state_15342;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15342__$1,(4),from);
} else {
if((state_val_15343 === (11))){
var inst_15331 = (state_15342[(2)]);
var state_15342__$1 = state_15342;
if(cljs.core.truth_(inst_15331)){
var statearr_15351_15373 = state_15342__$1;
(statearr_15351_15373[(1)] = (12));

} else {
var statearr_15352_15374 = state_15342__$1;
(statearr_15352_15374[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15343 === (9))){
var state_15342__$1 = state_15342;
var statearr_15353_15375 = state_15342__$1;
(statearr_15353_15375[(2)] = null);

(statearr_15353_15375[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15343 === (5))){
var state_15342__$1 = state_15342;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15354_15376 = state_15342__$1;
(statearr_15354_15376[(1)] = (8));

} else {
var statearr_15355_15377 = state_15342__$1;
(statearr_15355_15377[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15343 === (14))){
var inst_15336 = (state_15342[(2)]);
var state_15342__$1 = state_15342;
var statearr_15356_15378 = state_15342__$1;
(statearr_15356_15378[(2)] = inst_15336);

(statearr_15356_15378[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15343 === (10))){
var inst_15328 = (state_15342[(2)]);
var state_15342__$1 = state_15342;
var statearr_15357_15379 = state_15342__$1;
(statearr_15357_15379[(2)] = inst_15328);

(statearr_15357_15379[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15343 === (8))){
var inst_15325 = cljs.core.async.close_BANG_.call(null,to);
var state_15342__$1 = state_15342;
var statearr_15358_15380 = state_15342__$1;
(statearr_15358_15380[(2)] = inst_15325);

(statearr_15358_15380[(1)] = (10));


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
});})(c__6459__auto___15366))
;
return ((function (switch__6444__auto__,c__6459__auto___15366){
return (function() {
var state_machine__6445__auto__ = null;
var state_machine__6445__auto____0 = (function (){
var statearr_15362 = [null,null,null,null,null,null,null,null];
(statearr_15362[(0)] = state_machine__6445__auto__);

(statearr_15362[(1)] = (1));

return statearr_15362;
});
var state_machine__6445__auto____1 = (function (state_15342){
while(true){
var ret_value__6446__auto__ = (function (){try{while(true){
var result__6447__auto__ = switch__6444__auto__.call(null,state_15342);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6447__auto__;
}
break;
}
}catch (e15363){if((e15363 instanceof Object)){
var ex__6448__auto__ = e15363;
var statearr_15364_15381 = state_15342;
(statearr_15364_15381[(5)] = ex__6448__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15342);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15363;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15382 = state_15342;
state_15342 = G__15382;
continue;
} else {
return ret_value__6446__auto__;
}
break;
}
});
state_machine__6445__auto__ = function(state_15342){
switch(arguments.length){
case 0:
return state_machine__6445__auto____0.call(this);
case 1:
return state_machine__6445__auto____1.call(this,state_15342);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6445__auto____0;
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6445__auto____1;
return state_machine__6445__auto__;
})()
;})(switch__6444__auto__,c__6459__auto___15366))
})();
var state__6461__auto__ = (function (){var statearr_15365 = f__6460__auto__.call(null);
(statearr_15365[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6459__auto___15366);

return statearr_15365;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6461__auto__);
});})(c__6459__auto___15366))
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
return (function (p__15566){
var vec__15567 = p__15566;
var v = cljs.core.nth.call(null,vec__15567,(0),null);
var p = cljs.core.nth.call(null,vec__15567,(1),null);
var job = vec__15567;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__6459__auto___15749 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6459__auto___15749,res,vec__15567,v,p,job,jobs,results){
return (function (){
var f__6460__auto__ = (function (){var switch__6444__auto__ = ((function (c__6459__auto___15749,res,vec__15567,v,p,job,jobs,results){
return (function (state_15572){
var state_val_15573 = (state_15572[(1)]);
if((state_val_15573 === (2))){
var inst_15569 = (state_15572[(2)]);
var inst_15570 = cljs.core.async.close_BANG_.call(null,res);
var state_15572__$1 = (function (){var statearr_15574 = state_15572;
(statearr_15574[(7)] = inst_15569);

return statearr_15574;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15572__$1,inst_15570);
} else {
if((state_val_15573 === (1))){
var state_15572__$1 = state_15572;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15572__$1,(2),res,v);
} else {
return null;
}
}
});})(c__6459__auto___15749,res,vec__15567,v,p,job,jobs,results))
;
return ((function (switch__6444__auto__,c__6459__auto___15749,res,vec__15567,v,p,job,jobs,results){
return (function() {
var state_machine__6445__auto__ = null;
var state_machine__6445__auto____0 = (function (){
var statearr_15578 = [null,null,null,null,null,null,null,null];
(statearr_15578[(0)] = state_machine__6445__auto__);

(statearr_15578[(1)] = (1));

return statearr_15578;
});
var state_machine__6445__auto____1 = (function (state_15572){
while(true){
var ret_value__6446__auto__ = (function (){try{while(true){
var result__6447__auto__ = switch__6444__auto__.call(null,state_15572);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6447__auto__;
}
break;
}
}catch (e15579){if((e15579 instanceof Object)){
var ex__6448__auto__ = e15579;
var statearr_15580_15750 = state_15572;
(statearr_15580_15750[(5)] = ex__6448__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15572);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15579;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15751 = state_15572;
state_15572 = G__15751;
continue;
} else {
return ret_value__6446__auto__;
}
break;
}
});
state_machine__6445__auto__ = function(state_15572){
switch(arguments.length){
case 0:
return state_machine__6445__auto____0.call(this);
case 1:
return state_machine__6445__auto____1.call(this,state_15572);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6445__auto____0;
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6445__auto____1;
return state_machine__6445__auto__;
})()
;})(switch__6444__auto__,c__6459__auto___15749,res,vec__15567,v,p,job,jobs,results))
})();
var state__6461__auto__ = (function (){var statearr_15581 = f__6460__auto__.call(null);
(statearr_15581[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6459__auto___15749);

return statearr_15581;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6461__auto__);
});})(c__6459__auto___15749,res,vec__15567,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__15582){
var vec__15583 = p__15582;
var v = cljs.core.nth.call(null,vec__15583,(0),null);
var p = cljs.core.nth.call(null,vec__15583,(1),null);
var job = vec__15583;
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
var n__4517__auto___15752 = n;
var __15753 = (0);
while(true){
if((__15753 < n__4517__auto___15752)){
var G__15584_15754 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__15584_15754) {
case "async":
var c__6459__auto___15756 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__15753,c__6459__auto___15756,G__15584_15754,n__4517__auto___15752,jobs,results,process,async){
return (function (){
var f__6460__auto__ = (function (){var switch__6444__auto__ = ((function (__15753,c__6459__auto___15756,G__15584_15754,n__4517__auto___15752,jobs,results,process,async){
return (function (state_15597){
var state_val_15598 = (state_15597[(1)]);
if((state_val_15598 === (7))){
var inst_15593 = (state_15597[(2)]);
var state_15597__$1 = state_15597;
var statearr_15599_15757 = state_15597__$1;
(statearr_15599_15757[(2)] = inst_15593);

(statearr_15599_15757[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15598 === (6))){
var state_15597__$1 = state_15597;
var statearr_15600_15758 = state_15597__$1;
(statearr_15600_15758[(2)] = null);

(statearr_15600_15758[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15598 === (5))){
var state_15597__$1 = state_15597;
var statearr_15601_15759 = state_15597__$1;
(statearr_15601_15759[(2)] = null);

(statearr_15601_15759[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15598 === (4))){
var inst_15587 = (state_15597[(2)]);
var inst_15588 = async.call(null,inst_15587);
var state_15597__$1 = state_15597;
if(cljs.core.truth_(inst_15588)){
var statearr_15602_15760 = state_15597__$1;
(statearr_15602_15760[(1)] = (5));

} else {
var statearr_15603_15761 = state_15597__$1;
(statearr_15603_15761[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15598 === (3))){
var inst_15595 = (state_15597[(2)]);
var state_15597__$1 = state_15597;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15597__$1,inst_15595);
} else {
if((state_val_15598 === (2))){
var state_15597__$1 = state_15597;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15597__$1,(4),jobs);
} else {
if((state_val_15598 === (1))){
var state_15597__$1 = state_15597;
var statearr_15604_15762 = state_15597__$1;
(statearr_15604_15762[(2)] = null);

(statearr_15604_15762[(1)] = (2));


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
});})(__15753,c__6459__auto___15756,G__15584_15754,n__4517__auto___15752,jobs,results,process,async))
;
return ((function (__15753,switch__6444__auto__,c__6459__auto___15756,G__15584_15754,n__4517__auto___15752,jobs,results,process,async){
return (function() {
var state_machine__6445__auto__ = null;
var state_machine__6445__auto____0 = (function (){
var statearr_15608 = [null,null,null,null,null,null,null];
(statearr_15608[(0)] = state_machine__6445__auto__);

(statearr_15608[(1)] = (1));

return statearr_15608;
});
var state_machine__6445__auto____1 = (function (state_15597){
while(true){
var ret_value__6446__auto__ = (function (){try{while(true){
var result__6447__auto__ = switch__6444__auto__.call(null,state_15597);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6447__auto__;
}
break;
}
}catch (e15609){if((e15609 instanceof Object)){
var ex__6448__auto__ = e15609;
var statearr_15610_15763 = state_15597;
(statearr_15610_15763[(5)] = ex__6448__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15597);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15609;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15764 = state_15597;
state_15597 = G__15764;
continue;
} else {
return ret_value__6446__auto__;
}
break;
}
});
state_machine__6445__auto__ = function(state_15597){
switch(arguments.length){
case 0:
return state_machine__6445__auto____0.call(this);
case 1:
return state_machine__6445__auto____1.call(this,state_15597);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6445__auto____0;
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6445__auto____1;
return state_machine__6445__auto__;
})()
;})(__15753,switch__6444__auto__,c__6459__auto___15756,G__15584_15754,n__4517__auto___15752,jobs,results,process,async))
})();
var state__6461__auto__ = (function (){var statearr_15611 = f__6460__auto__.call(null);
(statearr_15611[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6459__auto___15756);

return statearr_15611;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6461__auto__);
});})(__15753,c__6459__auto___15756,G__15584_15754,n__4517__auto___15752,jobs,results,process,async))
);


break;
case "compute":
var c__6459__auto___15765 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__15753,c__6459__auto___15765,G__15584_15754,n__4517__auto___15752,jobs,results,process,async){
return (function (){
var f__6460__auto__ = (function (){var switch__6444__auto__ = ((function (__15753,c__6459__auto___15765,G__15584_15754,n__4517__auto___15752,jobs,results,process,async){
return (function (state_15624){
var state_val_15625 = (state_15624[(1)]);
if((state_val_15625 === (7))){
var inst_15620 = (state_15624[(2)]);
var state_15624__$1 = state_15624;
var statearr_15626_15766 = state_15624__$1;
(statearr_15626_15766[(2)] = inst_15620);

(statearr_15626_15766[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15625 === (6))){
var state_15624__$1 = state_15624;
var statearr_15627_15767 = state_15624__$1;
(statearr_15627_15767[(2)] = null);

(statearr_15627_15767[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15625 === (5))){
var state_15624__$1 = state_15624;
var statearr_15628_15768 = state_15624__$1;
(statearr_15628_15768[(2)] = null);

(statearr_15628_15768[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15625 === (4))){
var inst_15614 = (state_15624[(2)]);
var inst_15615 = process.call(null,inst_15614);
var state_15624__$1 = state_15624;
if(cljs.core.truth_(inst_15615)){
var statearr_15629_15769 = state_15624__$1;
(statearr_15629_15769[(1)] = (5));

} else {
var statearr_15630_15770 = state_15624__$1;
(statearr_15630_15770[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15625 === (3))){
var inst_15622 = (state_15624[(2)]);
var state_15624__$1 = state_15624;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15624__$1,inst_15622);
} else {
if((state_val_15625 === (2))){
var state_15624__$1 = state_15624;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15624__$1,(4),jobs);
} else {
if((state_val_15625 === (1))){
var state_15624__$1 = state_15624;
var statearr_15631_15771 = state_15624__$1;
(statearr_15631_15771[(2)] = null);

(statearr_15631_15771[(1)] = (2));


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
});})(__15753,c__6459__auto___15765,G__15584_15754,n__4517__auto___15752,jobs,results,process,async))
;
return ((function (__15753,switch__6444__auto__,c__6459__auto___15765,G__15584_15754,n__4517__auto___15752,jobs,results,process,async){
return (function() {
var state_machine__6445__auto__ = null;
var state_machine__6445__auto____0 = (function (){
var statearr_15635 = [null,null,null,null,null,null,null];
(statearr_15635[(0)] = state_machine__6445__auto__);

(statearr_15635[(1)] = (1));

return statearr_15635;
});
var state_machine__6445__auto____1 = (function (state_15624){
while(true){
var ret_value__6446__auto__ = (function (){try{while(true){
var result__6447__auto__ = switch__6444__auto__.call(null,state_15624);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6447__auto__;
}
break;
}
}catch (e15636){if((e15636 instanceof Object)){
var ex__6448__auto__ = e15636;
var statearr_15637_15772 = state_15624;
(statearr_15637_15772[(5)] = ex__6448__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15624);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15636;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15773 = state_15624;
state_15624 = G__15773;
continue;
} else {
return ret_value__6446__auto__;
}
break;
}
});
state_machine__6445__auto__ = function(state_15624){
switch(arguments.length){
case 0:
return state_machine__6445__auto____0.call(this);
case 1:
return state_machine__6445__auto____1.call(this,state_15624);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6445__auto____0;
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6445__auto____1;
return state_machine__6445__auto__;
})()
;})(__15753,switch__6444__auto__,c__6459__auto___15765,G__15584_15754,n__4517__auto___15752,jobs,results,process,async))
})();
var state__6461__auto__ = (function (){var statearr_15638 = f__6460__auto__.call(null);
(statearr_15638[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6459__auto___15765);

return statearr_15638;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6461__auto__);
});})(__15753,c__6459__auto___15765,G__15584_15754,n__4517__auto___15752,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__15774 = (__15753 + (1));
__15753 = G__15774;
continue;
} else {
}
break;
}

var c__6459__auto___15775 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6459__auto___15775,jobs,results,process,async){
return (function (){
var f__6460__auto__ = (function (){var switch__6444__auto__ = ((function (c__6459__auto___15775,jobs,results,process,async){
return (function (state_15660){
var state_val_15661 = (state_15660[(1)]);
if((state_val_15661 === (9))){
var inst_15653 = (state_15660[(2)]);
var state_15660__$1 = (function (){var statearr_15662 = state_15660;
(statearr_15662[(7)] = inst_15653);

return statearr_15662;
})();
var statearr_15663_15776 = state_15660__$1;
(statearr_15663_15776[(2)] = null);

(statearr_15663_15776[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15661 === (8))){
var inst_15646 = (state_15660[(8)]);
var inst_15651 = (state_15660[(2)]);
var state_15660__$1 = (function (){var statearr_15664 = state_15660;
(statearr_15664[(9)] = inst_15651);

return statearr_15664;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15660__$1,(9),results,inst_15646);
} else {
if((state_val_15661 === (7))){
var inst_15656 = (state_15660[(2)]);
var state_15660__$1 = state_15660;
var statearr_15665_15777 = state_15660__$1;
(statearr_15665_15777[(2)] = inst_15656);

(statearr_15665_15777[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15661 === (6))){
var inst_15646 = (state_15660[(8)]);
var inst_15641 = (state_15660[(10)]);
var inst_15646__$1 = cljs.core.async.chan.call(null,(1));
var inst_15647 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_15648 = [inst_15641,inst_15646__$1];
var inst_15649 = (new cljs.core.PersistentVector(null,2,(5),inst_15647,inst_15648,null));
var state_15660__$1 = (function (){var statearr_15666 = state_15660;
(statearr_15666[(8)] = inst_15646__$1);

return statearr_15666;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15660__$1,(8),jobs,inst_15649);
} else {
if((state_val_15661 === (5))){
var inst_15644 = cljs.core.async.close_BANG_.call(null,jobs);
var state_15660__$1 = state_15660;
var statearr_15667_15778 = state_15660__$1;
(statearr_15667_15778[(2)] = inst_15644);

(statearr_15667_15778[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15661 === (4))){
var inst_15641 = (state_15660[(10)]);
var inst_15641__$1 = (state_15660[(2)]);
var inst_15642 = (inst_15641__$1 == null);
var state_15660__$1 = (function (){var statearr_15668 = state_15660;
(statearr_15668[(10)] = inst_15641__$1);

return statearr_15668;
})();
if(cljs.core.truth_(inst_15642)){
var statearr_15669_15779 = state_15660__$1;
(statearr_15669_15779[(1)] = (5));

} else {
var statearr_15670_15780 = state_15660__$1;
(statearr_15670_15780[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15661 === (3))){
var inst_15658 = (state_15660[(2)]);
var state_15660__$1 = state_15660;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15660__$1,inst_15658);
} else {
if((state_val_15661 === (2))){
var state_15660__$1 = state_15660;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15660__$1,(4),from);
} else {
if((state_val_15661 === (1))){
var state_15660__$1 = state_15660;
var statearr_15671_15781 = state_15660__$1;
(statearr_15671_15781[(2)] = null);

(statearr_15671_15781[(1)] = (2));


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
});})(c__6459__auto___15775,jobs,results,process,async))
;
return ((function (switch__6444__auto__,c__6459__auto___15775,jobs,results,process,async){
return (function() {
var state_machine__6445__auto__ = null;
var state_machine__6445__auto____0 = (function (){
var statearr_15675 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_15675[(0)] = state_machine__6445__auto__);

(statearr_15675[(1)] = (1));

return statearr_15675;
});
var state_machine__6445__auto____1 = (function (state_15660){
while(true){
var ret_value__6446__auto__ = (function (){try{while(true){
var result__6447__auto__ = switch__6444__auto__.call(null,state_15660);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6447__auto__;
}
break;
}
}catch (e15676){if((e15676 instanceof Object)){
var ex__6448__auto__ = e15676;
var statearr_15677_15782 = state_15660;
(statearr_15677_15782[(5)] = ex__6448__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15660);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15676;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15783 = state_15660;
state_15660 = G__15783;
continue;
} else {
return ret_value__6446__auto__;
}
break;
}
});
state_machine__6445__auto__ = function(state_15660){
switch(arguments.length){
case 0:
return state_machine__6445__auto____0.call(this);
case 1:
return state_machine__6445__auto____1.call(this,state_15660);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6445__auto____0;
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6445__auto____1;
return state_machine__6445__auto__;
})()
;})(switch__6444__auto__,c__6459__auto___15775,jobs,results,process,async))
})();
var state__6461__auto__ = (function (){var statearr_15678 = f__6460__auto__.call(null);
(statearr_15678[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6459__auto___15775);

return statearr_15678;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6461__auto__);
});})(c__6459__auto___15775,jobs,results,process,async))
);


var c__6459__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6459__auto__,jobs,results,process,async){
return (function (){
var f__6460__auto__ = (function (){var switch__6444__auto__ = ((function (c__6459__auto__,jobs,results,process,async){
return (function (state_15716){
var state_val_15717 = (state_15716[(1)]);
if((state_val_15717 === (7))){
var inst_15712 = (state_15716[(2)]);
var state_15716__$1 = state_15716;
var statearr_15718_15784 = state_15716__$1;
(statearr_15718_15784[(2)] = inst_15712);

(statearr_15718_15784[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15717 === (20))){
var state_15716__$1 = state_15716;
var statearr_15719_15785 = state_15716__$1;
(statearr_15719_15785[(2)] = null);

(statearr_15719_15785[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15717 === (1))){
var state_15716__$1 = state_15716;
var statearr_15720_15786 = state_15716__$1;
(statearr_15720_15786[(2)] = null);

(statearr_15720_15786[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15717 === (4))){
var inst_15681 = (state_15716[(7)]);
var inst_15681__$1 = (state_15716[(2)]);
var inst_15682 = (inst_15681__$1 == null);
var state_15716__$1 = (function (){var statearr_15721 = state_15716;
(statearr_15721[(7)] = inst_15681__$1);

return statearr_15721;
})();
if(cljs.core.truth_(inst_15682)){
var statearr_15722_15787 = state_15716__$1;
(statearr_15722_15787[(1)] = (5));

} else {
var statearr_15723_15788 = state_15716__$1;
(statearr_15723_15788[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15717 === (15))){
var inst_15694 = (state_15716[(8)]);
var state_15716__$1 = state_15716;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15716__$1,(18),to,inst_15694);
} else {
if((state_val_15717 === (21))){
var inst_15707 = (state_15716[(2)]);
var state_15716__$1 = state_15716;
var statearr_15724_15789 = state_15716__$1;
(statearr_15724_15789[(2)] = inst_15707);

(statearr_15724_15789[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15717 === (13))){
var inst_15709 = (state_15716[(2)]);
var state_15716__$1 = (function (){var statearr_15725 = state_15716;
(statearr_15725[(9)] = inst_15709);

return statearr_15725;
})();
var statearr_15726_15790 = state_15716__$1;
(statearr_15726_15790[(2)] = null);

(statearr_15726_15790[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15717 === (6))){
var inst_15681 = (state_15716[(7)]);
var state_15716__$1 = state_15716;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15716__$1,(11),inst_15681);
} else {
if((state_val_15717 === (17))){
var inst_15702 = (state_15716[(2)]);
var state_15716__$1 = state_15716;
if(cljs.core.truth_(inst_15702)){
var statearr_15727_15791 = state_15716__$1;
(statearr_15727_15791[(1)] = (19));

} else {
var statearr_15728_15792 = state_15716__$1;
(statearr_15728_15792[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15717 === (3))){
var inst_15714 = (state_15716[(2)]);
var state_15716__$1 = state_15716;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15716__$1,inst_15714);
} else {
if((state_val_15717 === (12))){
var inst_15691 = (state_15716[(10)]);
var state_15716__$1 = state_15716;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15716__$1,(14),inst_15691);
} else {
if((state_val_15717 === (2))){
var state_15716__$1 = state_15716;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15716__$1,(4),results);
} else {
if((state_val_15717 === (19))){
var state_15716__$1 = state_15716;
var statearr_15729_15793 = state_15716__$1;
(statearr_15729_15793[(2)] = null);

(statearr_15729_15793[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15717 === (11))){
var inst_15691 = (state_15716[(2)]);
var state_15716__$1 = (function (){var statearr_15730 = state_15716;
(statearr_15730[(10)] = inst_15691);

return statearr_15730;
})();
var statearr_15731_15794 = state_15716__$1;
(statearr_15731_15794[(2)] = null);

(statearr_15731_15794[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15717 === (9))){
var state_15716__$1 = state_15716;
var statearr_15732_15795 = state_15716__$1;
(statearr_15732_15795[(2)] = null);

(statearr_15732_15795[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15717 === (5))){
var state_15716__$1 = state_15716;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15733_15796 = state_15716__$1;
(statearr_15733_15796[(1)] = (8));

} else {
var statearr_15734_15797 = state_15716__$1;
(statearr_15734_15797[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15717 === (14))){
var inst_15694 = (state_15716[(8)]);
var inst_15696 = (state_15716[(11)]);
var inst_15694__$1 = (state_15716[(2)]);
var inst_15695 = (inst_15694__$1 == null);
var inst_15696__$1 = cljs.core.not.call(null,inst_15695);
var state_15716__$1 = (function (){var statearr_15735 = state_15716;
(statearr_15735[(8)] = inst_15694__$1);

(statearr_15735[(11)] = inst_15696__$1);

return statearr_15735;
})();
if(inst_15696__$1){
var statearr_15736_15798 = state_15716__$1;
(statearr_15736_15798[(1)] = (15));

} else {
var statearr_15737_15799 = state_15716__$1;
(statearr_15737_15799[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15717 === (16))){
var inst_15696 = (state_15716[(11)]);
var state_15716__$1 = state_15716;
var statearr_15738_15800 = state_15716__$1;
(statearr_15738_15800[(2)] = inst_15696);

(statearr_15738_15800[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15717 === (10))){
var inst_15688 = (state_15716[(2)]);
var state_15716__$1 = state_15716;
var statearr_15739_15801 = state_15716__$1;
(statearr_15739_15801[(2)] = inst_15688);

(statearr_15739_15801[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15717 === (18))){
var inst_15699 = (state_15716[(2)]);
var state_15716__$1 = state_15716;
var statearr_15740_15802 = state_15716__$1;
(statearr_15740_15802[(2)] = inst_15699);

(statearr_15740_15802[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15717 === (8))){
var inst_15685 = cljs.core.async.close_BANG_.call(null,to);
var state_15716__$1 = state_15716;
var statearr_15741_15803 = state_15716__$1;
(statearr_15741_15803[(2)] = inst_15685);

(statearr_15741_15803[(1)] = (10));


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
var statearr_15745 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15745[(0)] = state_machine__6445__auto__);

(statearr_15745[(1)] = (1));

return statearr_15745;
});
var state_machine__6445__auto____1 = (function (state_15716){
while(true){
var ret_value__6446__auto__ = (function (){try{while(true){
var result__6447__auto__ = switch__6444__auto__.call(null,state_15716);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6447__auto__;
}
break;
}
}catch (e15746){if((e15746 instanceof Object)){
var ex__6448__auto__ = e15746;
var statearr_15747_15804 = state_15716;
(statearr_15747_15804[(5)] = ex__6448__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15716);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15746;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15805 = state_15716;
state_15716 = G__15805;
continue;
} else {
return ret_value__6446__auto__;
}
break;
}
});
state_machine__6445__auto__ = function(state_15716){
switch(arguments.length){
case 0:
return state_machine__6445__auto____0.call(this);
case 1:
return state_machine__6445__auto____1.call(this,state_15716);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6445__auto____0;
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6445__auto____1;
return state_machine__6445__auto__;
})()
;})(switch__6444__auto__,c__6459__auto__,jobs,results,process,async))
})();
var state__6461__auto__ = (function (){var statearr_15748 = f__6460__auto__.call(null);
(statearr_15748[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6459__auto__);

return statearr_15748;
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
var c__6459__auto___15906 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6459__auto___15906,tc,fc){
return (function (){
var f__6460__auto__ = (function (){var switch__6444__auto__ = ((function (c__6459__auto___15906,tc,fc){
return (function (state_15881){
var state_val_15882 = (state_15881[(1)]);
if((state_val_15882 === (7))){
var inst_15877 = (state_15881[(2)]);
var state_15881__$1 = state_15881;
var statearr_15883_15907 = state_15881__$1;
(statearr_15883_15907[(2)] = inst_15877);

(statearr_15883_15907[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15882 === (1))){
var state_15881__$1 = state_15881;
var statearr_15884_15908 = state_15881__$1;
(statearr_15884_15908[(2)] = null);

(statearr_15884_15908[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15882 === (4))){
var inst_15858 = (state_15881[(7)]);
var inst_15858__$1 = (state_15881[(2)]);
var inst_15859 = (inst_15858__$1 == null);
var state_15881__$1 = (function (){var statearr_15885 = state_15881;
(statearr_15885[(7)] = inst_15858__$1);

return statearr_15885;
})();
if(cljs.core.truth_(inst_15859)){
var statearr_15886_15909 = state_15881__$1;
(statearr_15886_15909[(1)] = (5));

} else {
var statearr_15887_15910 = state_15881__$1;
(statearr_15887_15910[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15882 === (13))){
var state_15881__$1 = state_15881;
var statearr_15888_15911 = state_15881__$1;
(statearr_15888_15911[(2)] = null);

(statearr_15888_15911[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15882 === (6))){
var inst_15858 = (state_15881[(7)]);
var inst_15864 = p.call(null,inst_15858);
var state_15881__$1 = state_15881;
if(cljs.core.truth_(inst_15864)){
var statearr_15889_15912 = state_15881__$1;
(statearr_15889_15912[(1)] = (9));

} else {
var statearr_15890_15913 = state_15881__$1;
(statearr_15890_15913[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15882 === (3))){
var inst_15879 = (state_15881[(2)]);
var state_15881__$1 = state_15881;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15881__$1,inst_15879);
} else {
if((state_val_15882 === (12))){
var state_15881__$1 = state_15881;
var statearr_15891_15914 = state_15881__$1;
(statearr_15891_15914[(2)] = null);

(statearr_15891_15914[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15882 === (2))){
var state_15881__$1 = state_15881;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15881__$1,(4),ch);
} else {
if((state_val_15882 === (11))){
var inst_15858 = (state_15881[(7)]);
var inst_15868 = (state_15881[(2)]);
var state_15881__$1 = state_15881;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15881__$1,(8),inst_15868,inst_15858);
} else {
if((state_val_15882 === (9))){
var state_15881__$1 = state_15881;
var statearr_15892_15915 = state_15881__$1;
(statearr_15892_15915[(2)] = tc);

(statearr_15892_15915[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15882 === (5))){
var inst_15861 = cljs.core.async.close_BANG_.call(null,tc);
var inst_15862 = cljs.core.async.close_BANG_.call(null,fc);
var state_15881__$1 = (function (){var statearr_15893 = state_15881;
(statearr_15893[(8)] = inst_15861);

return statearr_15893;
})();
var statearr_15894_15916 = state_15881__$1;
(statearr_15894_15916[(2)] = inst_15862);

(statearr_15894_15916[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15882 === (14))){
var inst_15875 = (state_15881[(2)]);
var state_15881__$1 = state_15881;
var statearr_15895_15917 = state_15881__$1;
(statearr_15895_15917[(2)] = inst_15875);

(statearr_15895_15917[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15882 === (10))){
var state_15881__$1 = state_15881;
var statearr_15896_15918 = state_15881__$1;
(statearr_15896_15918[(2)] = fc);

(statearr_15896_15918[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15882 === (8))){
var inst_15870 = (state_15881[(2)]);
var state_15881__$1 = state_15881;
if(cljs.core.truth_(inst_15870)){
var statearr_15897_15919 = state_15881__$1;
(statearr_15897_15919[(1)] = (12));

} else {
var statearr_15898_15920 = state_15881__$1;
(statearr_15898_15920[(1)] = (13));

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
});})(c__6459__auto___15906,tc,fc))
;
return ((function (switch__6444__auto__,c__6459__auto___15906,tc,fc){
return (function() {
var state_machine__6445__auto__ = null;
var state_machine__6445__auto____0 = (function (){
var statearr_15902 = [null,null,null,null,null,null,null,null,null];
(statearr_15902[(0)] = state_machine__6445__auto__);

(statearr_15902[(1)] = (1));

return statearr_15902;
});
var state_machine__6445__auto____1 = (function (state_15881){
while(true){
var ret_value__6446__auto__ = (function (){try{while(true){
var result__6447__auto__ = switch__6444__auto__.call(null,state_15881);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6447__auto__;
}
break;
}
}catch (e15903){if((e15903 instanceof Object)){
var ex__6448__auto__ = e15903;
var statearr_15904_15921 = state_15881;
(statearr_15904_15921[(5)] = ex__6448__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15881);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15903;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15922 = state_15881;
state_15881 = G__15922;
continue;
} else {
return ret_value__6446__auto__;
}
break;
}
});
state_machine__6445__auto__ = function(state_15881){
switch(arguments.length){
case 0:
return state_machine__6445__auto____0.call(this);
case 1:
return state_machine__6445__auto____1.call(this,state_15881);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6445__auto____0;
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6445__auto____1;
return state_machine__6445__auto__;
})()
;})(switch__6444__auto__,c__6459__auto___15906,tc,fc))
})();
var state__6461__auto__ = (function (){var statearr_15905 = f__6460__auto__.call(null);
(statearr_15905[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6459__auto___15906);

return statearr_15905;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6461__auto__);
});})(c__6459__auto___15906,tc,fc))
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
return (function (state_15969){
var state_val_15970 = (state_15969[(1)]);
if((state_val_15970 === (7))){
var inst_15965 = (state_15969[(2)]);
var state_15969__$1 = state_15969;
var statearr_15971_15987 = state_15969__$1;
(statearr_15971_15987[(2)] = inst_15965);

(statearr_15971_15987[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15970 === (6))){
var inst_15955 = (state_15969[(7)]);
var inst_15958 = (state_15969[(8)]);
var inst_15962 = f.call(null,inst_15955,inst_15958);
var inst_15955__$1 = inst_15962;
var state_15969__$1 = (function (){var statearr_15972 = state_15969;
(statearr_15972[(7)] = inst_15955__$1);

return statearr_15972;
})();
var statearr_15973_15988 = state_15969__$1;
(statearr_15973_15988[(2)] = null);

(statearr_15973_15988[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15970 === (5))){
var inst_15955 = (state_15969[(7)]);
var state_15969__$1 = state_15969;
var statearr_15974_15989 = state_15969__$1;
(statearr_15974_15989[(2)] = inst_15955);

(statearr_15974_15989[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15970 === (4))){
var inst_15958 = (state_15969[(8)]);
var inst_15958__$1 = (state_15969[(2)]);
var inst_15959 = (inst_15958__$1 == null);
var state_15969__$1 = (function (){var statearr_15975 = state_15969;
(statearr_15975[(8)] = inst_15958__$1);

return statearr_15975;
})();
if(cljs.core.truth_(inst_15959)){
var statearr_15976_15990 = state_15969__$1;
(statearr_15976_15990[(1)] = (5));

} else {
var statearr_15977_15991 = state_15969__$1;
(statearr_15977_15991[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15970 === (3))){
var inst_15967 = (state_15969[(2)]);
var state_15969__$1 = state_15969;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15969__$1,inst_15967);
} else {
if((state_val_15970 === (2))){
var state_15969__$1 = state_15969;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15969__$1,(4),ch);
} else {
if((state_val_15970 === (1))){
var inst_15955 = init;
var state_15969__$1 = (function (){var statearr_15978 = state_15969;
(statearr_15978[(7)] = inst_15955);

return statearr_15978;
})();
var statearr_15979_15992 = state_15969__$1;
(statearr_15979_15992[(2)] = null);

(statearr_15979_15992[(1)] = (2));


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
var statearr_15983 = [null,null,null,null,null,null,null,null,null];
(statearr_15983[(0)] = state_machine__6445__auto__);

(statearr_15983[(1)] = (1));

return statearr_15983;
});
var state_machine__6445__auto____1 = (function (state_15969){
while(true){
var ret_value__6446__auto__ = (function (){try{while(true){
var result__6447__auto__ = switch__6444__auto__.call(null,state_15969);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6447__auto__;
}
break;
}
}catch (e15984){if((e15984 instanceof Object)){
var ex__6448__auto__ = e15984;
var statearr_15985_15993 = state_15969;
(statearr_15985_15993[(5)] = ex__6448__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15969);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15984;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15994 = state_15969;
state_15969 = G__15994;
continue;
} else {
return ret_value__6446__auto__;
}
break;
}
});
state_machine__6445__auto__ = function(state_15969){
switch(arguments.length){
case 0:
return state_machine__6445__auto____0.call(this);
case 1:
return state_machine__6445__auto____1.call(this,state_15969);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6445__auto____0;
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6445__auto____1;
return state_machine__6445__auto__;
})()
;})(switch__6444__auto__,c__6459__auto__))
})();
var state__6461__auto__ = (function (){var statearr_15986 = f__6460__auto__.call(null);
(statearr_15986[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6459__auto__);

return statearr_15986;
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
return (function (state_16068){
var state_val_16069 = (state_16068[(1)]);
if((state_val_16069 === (7))){
var inst_16050 = (state_16068[(2)]);
var state_16068__$1 = state_16068;
var statearr_16070_16093 = state_16068__$1;
(statearr_16070_16093[(2)] = inst_16050);

(statearr_16070_16093[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16069 === (1))){
var inst_16044 = cljs.core.seq.call(null,coll);
var inst_16045 = inst_16044;
var state_16068__$1 = (function (){var statearr_16071 = state_16068;
(statearr_16071[(7)] = inst_16045);

return statearr_16071;
})();
var statearr_16072_16094 = state_16068__$1;
(statearr_16072_16094[(2)] = null);

(statearr_16072_16094[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16069 === (4))){
var inst_16045 = (state_16068[(7)]);
var inst_16048 = cljs.core.first.call(null,inst_16045);
var state_16068__$1 = state_16068;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16068__$1,(7),ch,inst_16048);
} else {
if((state_val_16069 === (13))){
var inst_16062 = (state_16068[(2)]);
var state_16068__$1 = state_16068;
var statearr_16073_16095 = state_16068__$1;
(statearr_16073_16095[(2)] = inst_16062);

(statearr_16073_16095[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16069 === (6))){
var inst_16053 = (state_16068[(2)]);
var state_16068__$1 = state_16068;
if(cljs.core.truth_(inst_16053)){
var statearr_16074_16096 = state_16068__$1;
(statearr_16074_16096[(1)] = (8));

} else {
var statearr_16075_16097 = state_16068__$1;
(statearr_16075_16097[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16069 === (3))){
var inst_16066 = (state_16068[(2)]);
var state_16068__$1 = state_16068;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16068__$1,inst_16066);
} else {
if((state_val_16069 === (12))){
var state_16068__$1 = state_16068;
var statearr_16076_16098 = state_16068__$1;
(statearr_16076_16098[(2)] = null);

(statearr_16076_16098[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16069 === (2))){
var inst_16045 = (state_16068[(7)]);
var state_16068__$1 = state_16068;
if(cljs.core.truth_(inst_16045)){
var statearr_16077_16099 = state_16068__$1;
(statearr_16077_16099[(1)] = (4));

} else {
var statearr_16078_16100 = state_16068__$1;
(statearr_16078_16100[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16069 === (11))){
var inst_16059 = cljs.core.async.close_BANG_.call(null,ch);
var state_16068__$1 = state_16068;
var statearr_16079_16101 = state_16068__$1;
(statearr_16079_16101[(2)] = inst_16059);

(statearr_16079_16101[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16069 === (9))){
var state_16068__$1 = state_16068;
if(cljs.core.truth_(close_QMARK_)){
var statearr_16080_16102 = state_16068__$1;
(statearr_16080_16102[(1)] = (11));

} else {
var statearr_16081_16103 = state_16068__$1;
(statearr_16081_16103[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16069 === (5))){
var inst_16045 = (state_16068[(7)]);
var state_16068__$1 = state_16068;
var statearr_16082_16104 = state_16068__$1;
(statearr_16082_16104[(2)] = inst_16045);

(statearr_16082_16104[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16069 === (10))){
var inst_16064 = (state_16068[(2)]);
var state_16068__$1 = state_16068;
var statearr_16083_16105 = state_16068__$1;
(statearr_16083_16105[(2)] = inst_16064);

(statearr_16083_16105[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16069 === (8))){
var inst_16045 = (state_16068[(7)]);
var inst_16055 = cljs.core.next.call(null,inst_16045);
var inst_16045__$1 = inst_16055;
var state_16068__$1 = (function (){var statearr_16084 = state_16068;
(statearr_16084[(7)] = inst_16045__$1);

return statearr_16084;
})();
var statearr_16085_16106 = state_16068__$1;
(statearr_16085_16106[(2)] = null);

(statearr_16085_16106[(1)] = (2));


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
var statearr_16089 = [null,null,null,null,null,null,null,null];
(statearr_16089[(0)] = state_machine__6445__auto__);

(statearr_16089[(1)] = (1));

return statearr_16089;
});
var state_machine__6445__auto____1 = (function (state_16068){
while(true){
var ret_value__6446__auto__ = (function (){try{while(true){
var result__6447__auto__ = switch__6444__auto__.call(null,state_16068);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6447__auto__;
}
break;
}
}catch (e16090){if((e16090 instanceof Object)){
var ex__6448__auto__ = e16090;
var statearr_16091_16107 = state_16068;
(statearr_16091_16107[(5)] = ex__6448__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16068);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16090;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16108 = state_16068;
state_16068 = G__16108;
continue;
} else {
return ret_value__6446__auto__;
}
break;
}
});
state_machine__6445__auto__ = function(state_16068){
switch(arguments.length){
case 0:
return state_machine__6445__auto____0.call(this);
case 1:
return state_machine__6445__auto____1.call(this,state_16068);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6445__auto____0;
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6445__auto____1;
return state_machine__6445__auto__;
})()
;})(switch__6444__auto__,c__6459__auto__))
})();
var state__6461__auto__ = (function (){var statearr_16092 = f__6460__auto__.call(null);
(statearr_16092[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6459__auto__);

return statearr_16092;
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

cljs.core.async.Mux = (function (){var obj16110 = {};
return obj16110;
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


cljs.core.async.Mult = (function (){var obj16112 = {};
return obj16112;
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
if(typeof cljs.core.async.t16334 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t16334 = (function (cs,ch,mult,meta16335){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta16335 = meta16335;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16334.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t16334.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t16334.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t16334.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t16334.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t16334.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t16334.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_16336){
var self__ = this;
var _16336__$1 = this;
return self__.meta16335;
});})(cs))
;

cljs.core.async.t16334.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_16336,meta16335__$1){
var self__ = this;
var _16336__$1 = this;
return (new cljs.core.async.t16334(self__.cs,self__.ch,self__.mult,meta16335__$1));
});})(cs))
;

cljs.core.async.t16334.cljs$lang$type = true;

cljs.core.async.t16334.cljs$lang$ctorStr = "cljs.core.async/t16334";

cljs.core.async.t16334.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t16334");
});})(cs))
;

cljs.core.async.__GT_t16334 = ((function (cs){
return (function __GT_t16334(cs__$1,ch__$1,mult__$1,meta16335){
return (new cljs.core.async.t16334(cs__$1,ch__$1,mult__$1,meta16335));
});})(cs))
;

}

return (new cljs.core.async.t16334(cs,ch,mult,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),48,new cljs.core.Keyword(null,"end-line","end-line",1837326455),397,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"line","line",212345235),390,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/chrism/dev/farn/resources/public/js/out/cljs/core/async.cljs"], null)));
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
var c__6459__auto___16555 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6459__auto___16555,cs,m,dchan,dctr,done){
return (function (){
var f__6460__auto__ = (function (){var switch__6444__auto__ = ((function (c__6459__auto___16555,cs,m,dchan,dctr,done){
return (function (state_16467){
var state_val_16468 = (state_16467[(1)]);
if((state_val_16468 === (7))){
var inst_16463 = (state_16467[(2)]);
var state_16467__$1 = state_16467;
var statearr_16469_16556 = state_16467__$1;
(statearr_16469_16556[(2)] = inst_16463);

(statearr_16469_16556[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16468 === (20))){
var inst_16368 = (state_16467[(7)]);
var inst_16378 = cljs.core.first.call(null,inst_16368);
var inst_16379 = cljs.core.nth.call(null,inst_16378,(0),null);
var inst_16380 = cljs.core.nth.call(null,inst_16378,(1),null);
var state_16467__$1 = (function (){var statearr_16470 = state_16467;
(statearr_16470[(8)] = inst_16379);

return statearr_16470;
})();
if(cljs.core.truth_(inst_16380)){
var statearr_16471_16557 = state_16467__$1;
(statearr_16471_16557[(1)] = (22));

} else {
var statearr_16472_16558 = state_16467__$1;
(statearr_16472_16558[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16468 === (27))){
var inst_16408 = (state_16467[(9)]);
var inst_16415 = (state_16467[(10)]);
var inst_16339 = (state_16467[(11)]);
var inst_16410 = (state_16467[(12)]);
var inst_16415__$1 = cljs.core._nth.call(null,inst_16408,inst_16410);
var inst_16416 = cljs.core.async.put_BANG_.call(null,inst_16415__$1,inst_16339,done);
var state_16467__$1 = (function (){var statearr_16473 = state_16467;
(statearr_16473[(10)] = inst_16415__$1);

return statearr_16473;
})();
if(cljs.core.truth_(inst_16416)){
var statearr_16474_16559 = state_16467__$1;
(statearr_16474_16559[(1)] = (30));

} else {
var statearr_16475_16560 = state_16467__$1;
(statearr_16475_16560[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16468 === (1))){
var state_16467__$1 = state_16467;
var statearr_16476_16561 = state_16467__$1;
(statearr_16476_16561[(2)] = null);

(statearr_16476_16561[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16468 === (24))){
var inst_16368 = (state_16467[(7)]);
var inst_16385 = (state_16467[(2)]);
var inst_16386 = cljs.core.next.call(null,inst_16368);
var inst_16348 = inst_16386;
var inst_16349 = null;
var inst_16350 = (0);
var inst_16351 = (0);
var state_16467__$1 = (function (){var statearr_16477 = state_16467;
(statearr_16477[(13)] = inst_16349);

(statearr_16477[(14)] = inst_16348);

(statearr_16477[(15)] = inst_16350);

(statearr_16477[(16)] = inst_16385);

(statearr_16477[(17)] = inst_16351);

return statearr_16477;
})();
var statearr_16478_16562 = state_16467__$1;
(statearr_16478_16562[(2)] = null);

(statearr_16478_16562[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16468 === (39))){
var state_16467__$1 = state_16467;
var statearr_16482_16563 = state_16467__$1;
(statearr_16482_16563[(2)] = null);

(statearr_16482_16563[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16468 === (4))){
var inst_16339 = (state_16467[(11)]);
var inst_16339__$1 = (state_16467[(2)]);
var inst_16340 = (inst_16339__$1 == null);
var state_16467__$1 = (function (){var statearr_16483 = state_16467;
(statearr_16483[(11)] = inst_16339__$1);

return statearr_16483;
})();
if(cljs.core.truth_(inst_16340)){
var statearr_16484_16564 = state_16467__$1;
(statearr_16484_16564[(1)] = (5));

} else {
var statearr_16485_16565 = state_16467__$1;
(statearr_16485_16565[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16468 === (15))){
var inst_16349 = (state_16467[(13)]);
var inst_16348 = (state_16467[(14)]);
var inst_16350 = (state_16467[(15)]);
var inst_16351 = (state_16467[(17)]);
var inst_16364 = (state_16467[(2)]);
var inst_16365 = (inst_16351 + (1));
var tmp16479 = inst_16349;
var tmp16480 = inst_16348;
var tmp16481 = inst_16350;
var inst_16348__$1 = tmp16480;
var inst_16349__$1 = tmp16479;
var inst_16350__$1 = tmp16481;
var inst_16351__$1 = inst_16365;
var state_16467__$1 = (function (){var statearr_16486 = state_16467;
(statearr_16486[(13)] = inst_16349__$1);

(statearr_16486[(18)] = inst_16364);

(statearr_16486[(14)] = inst_16348__$1);

(statearr_16486[(15)] = inst_16350__$1);

(statearr_16486[(17)] = inst_16351__$1);

return statearr_16486;
})();
var statearr_16487_16566 = state_16467__$1;
(statearr_16487_16566[(2)] = null);

(statearr_16487_16566[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16468 === (21))){
var inst_16389 = (state_16467[(2)]);
var state_16467__$1 = state_16467;
var statearr_16491_16567 = state_16467__$1;
(statearr_16491_16567[(2)] = inst_16389);

(statearr_16491_16567[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16468 === (31))){
var inst_16415 = (state_16467[(10)]);
var inst_16419 = done.call(null,null);
var inst_16420 = cljs.core.async.untap_STAR_.call(null,m,inst_16415);
var state_16467__$1 = (function (){var statearr_16492 = state_16467;
(statearr_16492[(19)] = inst_16419);

return statearr_16492;
})();
var statearr_16493_16568 = state_16467__$1;
(statearr_16493_16568[(2)] = inst_16420);

(statearr_16493_16568[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16468 === (32))){
var inst_16409 = (state_16467[(20)]);
var inst_16408 = (state_16467[(9)]);
var inst_16407 = (state_16467[(21)]);
var inst_16410 = (state_16467[(12)]);
var inst_16422 = (state_16467[(2)]);
var inst_16423 = (inst_16410 + (1));
var tmp16488 = inst_16409;
var tmp16489 = inst_16408;
var tmp16490 = inst_16407;
var inst_16407__$1 = tmp16490;
var inst_16408__$1 = tmp16489;
var inst_16409__$1 = tmp16488;
var inst_16410__$1 = inst_16423;
var state_16467__$1 = (function (){var statearr_16494 = state_16467;
(statearr_16494[(20)] = inst_16409__$1);

(statearr_16494[(9)] = inst_16408__$1);

(statearr_16494[(22)] = inst_16422);

(statearr_16494[(21)] = inst_16407__$1);

(statearr_16494[(12)] = inst_16410__$1);

return statearr_16494;
})();
var statearr_16495_16569 = state_16467__$1;
(statearr_16495_16569[(2)] = null);

(statearr_16495_16569[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16468 === (40))){
var inst_16435 = (state_16467[(23)]);
var inst_16439 = done.call(null,null);
var inst_16440 = cljs.core.async.untap_STAR_.call(null,m,inst_16435);
var state_16467__$1 = (function (){var statearr_16496 = state_16467;
(statearr_16496[(24)] = inst_16439);

return statearr_16496;
})();
var statearr_16497_16570 = state_16467__$1;
(statearr_16497_16570[(2)] = inst_16440);

(statearr_16497_16570[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16468 === (33))){
var inst_16426 = (state_16467[(25)]);
var inst_16428 = cljs.core.chunked_seq_QMARK_.call(null,inst_16426);
var state_16467__$1 = state_16467;
if(inst_16428){
var statearr_16498_16571 = state_16467__$1;
(statearr_16498_16571[(1)] = (36));

} else {
var statearr_16499_16572 = state_16467__$1;
(statearr_16499_16572[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16468 === (13))){
var inst_16358 = (state_16467[(26)]);
var inst_16361 = cljs.core.async.close_BANG_.call(null,inst_16358);
var state_16467__$1 = state_16467;
var statearr_16500_16573 = state_16467__$1;
(statearr_16500_16573[(2)] = inst_16361);

(statearr_16500_16573[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16468 === (22))){
var inst_16379 = (state_16467[(8)]);
var inst_16382 = cljs.core.async.close_BANG_.call(null,inst_16379);
var state_16467__$1 = state_16467;
var statearr_16501_16574 = state_16467__$1;
(statearr_16501_16574[(2)] = inst_16382);

(statearr_16501_16574[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16468 === (36))){
var inst_16426 = (state_16467[(25)]);
var inst_16430 = cljs.core.chunk_first.call(null,inst_16426);
var inst_16431 = cljs.core.chunk_rest.call(null,inst_16426);
var inst_16432 = cljs.core.count.call(null,inst_16430);
var inst_16407 = inst_16431;
var inst_16408 = inst_16430;
var inst_16409 = inst_16432;
var inst_16410 = (0);
var state_16467__$1 = (function (){var statearr_16502 = state_16467;
(statearr_16502[(20)] = inst_16409);

(statearr_16502[(9)] = inst_16408);

(statearr_16502[(21)] = inst_16407);

(statearr_16502[(12)] = inst_16410);

return statearr_16502;
})();
var statearr_16503_16575 = state_16467__$1;
(statearr_16503_16575[(2)] = null);

(statearr_16503_16575[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16468 === (41))){
var inst_16426 = (state_16467[(25)]);
var inst_16442 = (state_16467[(2)]);
var inst_16443 = cljs.core.next.call(null,inst_16426);
var inst_16407 = inst_16443;
var inst_16408 = null;
var inst_16409 = (0);
var inst_16410 = (0);
var state_16467__$1 = (function (){var statearr_16504 = state_16467;
(statearr_16504[(20)] = inst_16409);

(statearr_16504[(9)] = inst_16408);

(statearr_16504[(27)] = inst_16442);

(statearr_16504[(21)] = inst_16407);

(statearr_16504[(12)] = inst_16410);

return statearr_16504;
})();
var statearr_16505_16576 = state_16467__$1;
(statearr_16505_16576[(2)] = null);

(statearr_16505_16576[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16468 === (43))){
var state_16467__$1 = state_16467;
var statearr_16506_16577 = state_16467__$1;
(statearr_16506_16577[(2)] = null);

(statearr_16506_16577[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16468 === (29))){
var inst_16451 = (state_16467[(2)]);
var state_16467__$1 = state_16467;
var statearr_16507_16578 = state_16467__$1;
(statearr_16507_16578[(2)] = inst_16451);

(statearr_16507_16578[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16468 === (44))){
var inst_16460 = (state_16467[(2)]);
var state_16467__$1 = (function (){var statearr_16508 = state_16467;
(statearr_16508[(28)] = inst_16460);

return statearr_16508;
})();
var statearr_16509_16579 = state_16467__$1;
(statearr_16509_16579[(2)] = null);

(statearr_16509_16579[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16468 === (6))){
var inst_16399 = (state_16467[(29)]);
var inst_16398 = cljs.core.deref.call(null,cs);
var inst_16399__$1 = cljs.core.keys.call(null,inst_16398);
var inst_16400 = cljs.core.count.call(null,inst_16399__$1);
var inst_16401 = cljs.core.reset_BANG_.call(null,dctr,inst_16400);
var inst_16406 = cljs.core.seq.call(null,inst_16399__$1);
var inst_16407 = inst_16406;
var inst_16408 = null;
var inst_16409 = (0);
var inst_16410 = (0);
var state_16467__$1 = (function (){var statearr_16510 = state_16467;
(statearr_16510[(20)] = inst_16409);

(statearr_16510[(29)] = inst_16399__$1);

(statearr_16510[(9)] = inst_16408);

(statearr_16510[(30)] = inst_16401);

(statearr_16510[(21)] = inst_16407);

(statearr_16510[(12)] = inst_16410);

return statearr_16510;
})();
var statearr_16511_16580 = state_16467__$1;
(statearr_16511_16580[(2)] = null);

(statearr_16511_16580[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16468 === (28))){
var inst_16407 = (state_16467[(21)]);
var inst_16426 = (state_16467[(25)]);
var inst_16426__$1 = cljs.core.seq.call(null,inst_16407);
var state_16467__$1 = (function (){var statearr_16512 = state_16467;
(statearr_16512[(25)] = inst_16426__$1);

return statearr_16512;
})();
if(inst_16426__$1){
var statearr_16513_16581 = state_16467__$1;
(statearr_16513_16581[(1)] = (33));

} else {
var statearr_16514_16582 = state_16467__$1;
(statearr_16514_16582[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16468 === (25))){
var inst_16409 = (state_16467[(20)]);
var inst_16410 = (state_16467[(12)]);
var inst_16412 = (inst_16410 < inst_16409);
var inst_16413 = inst_16412;
var state_16467__$1 = state_16467;
if(cljs.core.truth_(inst_16413)){
var statearr_16515_16583 = state_16467__$1;
(statearr_16515_16583[(1)] = (27));

} else {
var statearr_16516_16584 = state_16467__$1;
(statearr_16516_16584[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16468 === (34))){
var state_16467__$1 = state_16467;
var statearr_16517_16585 = state_16467__$1;
(statearr_16517_16585[(2)] = null);

(statearr_16517_16585[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16468 === (17))){
var state_16467__$1 = state_16467;
var statearr_16518_16586 = state_16467__$1;
(statearr_16518_16586[(2)] = null);

(statearr_16518_16586[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16468 === (3))){
var inst_16465 = (state_16467[(2)]);
var state_16467__$1 = state_16467;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16467__$1,inst_16465);
} else {
if((state_val_16468 === (12))){
var inst_16394 = (state_16467[(2)]);
var state_16467__$1 = state_16467;
var statearr_16519_16587 = state_16467__$1;
(statearr_16519_16587[(2)] = inst_16394);

(statearr_16519_16587[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16468 === (2))){
var state_16467__$1 = state_16467;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16467__$1,(4),ch);
} else {
if((state_val_16468 === (23))){
var state_16467__$1 = state_16467;
var statearr_16520_16588 = state_16467__$1;
(statearr_16520_16588[(2)] = null);

(statearr_16520_16588[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16468 === (35))){
var inst_16449 = (state_16467[(2)]);
var state_16467__$1 = state_16467;
var statearr_16521_16589 = state_16467__$1;
(statearr_16521_16589[(2)] = inst_16449);

(statearr_16521_16589[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16468 === (19))){
var inst_16368 = (state_16467[(7)]);
var inst_16372 = cljs.core.chunk_first.call(null,inst_16368);
var inst_16373 = cljs.core.chunk_rest.call(null,inst_16368);
var inst_16374 = cljs.core.count.call(null,inst_16372);
var inst_16348 = inst_16373;
var inst_16349 = inst_16372;
var inst_16350 = inst_16374;
var inst_16351 = (0);
var state_16467__$1 = (function (){var statearr_16522 = state_16467;
(statearr_16522[(13)] = inst_16349);

(statearr_16522[(14)] = inst_16348);

(statearr_16522[(15)] = inst_16350);

(statearr_16522[(17)] = inst_16351);

return statearr_16522;
})();
var statearr_16523_16590 = state_16467__$1;
(statearr_16523_16590[(2)] = null);

(statearr_16523_16590[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16468 === (11))){
var inst_16368 = (state_16467[(7)]);
var inst_16348 = (state_16467[(14)]);
var inst_16368__$1 = cljs.core.seq.call(null,inst_16348);
var state_16467__$1 = (function (){var statearr_16524 = state_16467;
(statearr_16524[(7)] = inst_16368__$1);

return statearr_16524;
})();
if(inst_16368__$1){
var statearr_16525_16591 = state_16467__$1;
(statearr_16525_16591[(1)] = (16));

} else {
var statearr_16526_16592 = state_16467__$1;
(statearr_16526_16592[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16468 === (9))){
var inst_16396 = (state_16467[(2)]);
var state_16467__$1 = state_16467;
var statearr_16527_16593 = state_16467__$1;
(statearr_16527_16593[(2)] = inst_16396);

(statearr_16527_16593[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16468 === (5))){
var inst_16346 = cljs.core.deref.call(null,cs);
var inst_16347 = cljs.core.seq.call(null,inst_16346);
var inst_16348 = inst_16347;
var inst_16349 = null;
var inst_16350 = (0);
var inst_16351 = (0);
var state_16467__$1 = (function (){var statearr_16528 = state_16467;
(statearr_16528[(13)] = inst_16349);

(statearr_16528[(14)] = inst_16348);

(statearr_16528[(15)] = inst_16350);

(statearr_16528[(17)] = inst_16351);

return statearr_16528;
})();
var statearr_16529_16594 = state_16467__$1;
(statearr_16529_16594[(2)] = null);

(statearr_16529_16594[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16468 === (14))){
var state_16467__$1 = state_16467;
var statearr_16530_16595 = state_16467__$1;
(statearr_16530_16595[(2)] = null);

(statearr_16530_16595[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16468 === (45))){
var inst_16457 = (state_16467[(2)]);
var state_16467__$1 = state_16467;
var statearr_16531_16596 = state_16467__$1;
(statearr_16531_16596[(2)] = inst_16457);

(statearr_16531_16596[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16468 === (26))){
var inst_16399 = (state_16467[(29)]);
var inst_16453 = (state_16467[(2)]);
var inst_16454 = cljs.core.seq.call(null,inst_16399);
var state_16467__$1 = (function (){var statearr_16532 = state_16467;
(statearr_16532[(31)] = inst_16453);

return statearr_16532;
})();
if(inst_16454){
var statearr_16533_16597 = state_16467__$1;
(statearr_16533_16597[(1)] = (42));

} else {
var statearr_16534_16598 = state_16467__$1;
(statearr_16534_16598[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16468 === (16))){
var inst_16368 = (state_16467[(7)]);
var inst_16370 = cljs.core.chunked_seq_QMARK_.call(null,inst_16368);
var state_16467__$1 = state_16467;
if(inst_16370){
var statearr_16535_16599 = state_16467__$1;
(statearr_16535_16599[(1)] = (19));

} else {
var statearr_16536_16600 = state_16467__$1;
(statearr_16536_16600[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16468 === (38))){
var inst_16446 = (state_16467[(2)]);
var state_16467__$1 = state_16467;
var statearr_16537_16601 = state_16467__$1;
(statearr_16537_16601[(2)] = inst_16446);

(statearr_16537_16601[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16468 === (30))){
var state_16467__$1 = state_16467;
var statearr_16538_16602 = state_16467__$1;
(statearr_16538_16602[(2)] = null);

(statearr_16538_16602[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16468 === (10))){
var inst_16349 = (state_16467[(13)]);
var inst_16351 = (state_16467[(17)]);
var inst_16357 = cljs.core._nth.call(null,inst_16349,inst_16351);
var inst_16358 = cljs.core.nth.call(null,inst_16357,(0),null);
var inst_16359 = cljs.core.nth.call(null,inst_16357,(1),null);
var state_16467__$1 = (function (){var statearr_16539 = state_16467;
(statearr_16539[(26)] = inst_16358);

return statearr_16539;
})();
if(cljs.core.truth_(inst_16359)){
var statearr_16540_16603 = state_16467__$1;
(statearr_16540_16603[(1)] = (13));

} else {
var statearr_16541_16604 = state_16467__$1;
(statearr_16541_16604[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16468 === (18))){
var inst_16392 = (state_16467[(2)]);
var state_16467__$1 = state_16467;
var statearr_16542_16605 = state_16467__$1;
(statearr_16542_16605[(2)] = inst_16392);

(statearr_16542_16605[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16468 === (42))){
var state_16467__$1 = state_16467;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16467__$1,(45),dchan);
} else {
if((state_val_16468 === (37))){
var inst_16435 = (state_16467[(23)]);
var inst_16339 = (state_16467[(11)]);
var inst_16426 = (state_16467[(25)]);
var inst_16435__$1 = cljs.core.first.call(null,inst_16426);
var inst_16436 = cljs.core.async.put_BANG_.call(null,inst_16435__$1,inst_16339,done);
var state_16467__$1 = (function (){var statearr_16543 = state_16467;
(statearr_16543[(23)] = inst_16435__$1);

return statearr_16543;
})();
if(cljs.core.truth_(inst_16436)){
var statearr_16544_16606 = state_16467__$1;
(statearr_16544_16606[(1)] = (39));

} else {
var statearr_16545_16607 = state_16467__$1;
(statearr_16545_16607[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16468 === (8))){
var inst_16350 = (state_16467[(15)]);
var inst_16351 = (state_16467[(17)]);
var inst_16353 = (inst_16351 < inst_16350);
var inst_16354 = inst_16353;
var state_16467__$1 = state_16467;
if(cljs.core.truth_(inst_16354)){
var statearr_16546_16608 = state_16467__$1;
(statearr_16546_16608[(1)] = (10));

} else {
var statearr_16547_16609 = state_16467__$1;
(statearr_16547_16609[(1)] = (11));

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
});})(c__6459__auto___16555,cs,m,dchan,dctr,done))
;
return ((function (switch__6444__auto__,c__6459__auto___16555,cs,m,dchan,dctr,done){
return (function() {
var state_machine__6445__auto__ = null;
var state_machine__6445__auto____0 = (function (){
var statearr_16551 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16551[(0)] = state_machine__6445__auto__);

(statearr_16551[(1)] = (1));

return statearr_16551;
});
var state_machine__6445__auto____1 = (function (state_16467){
while(true){
var ret_value__6446__auto__ = (function (){try{while(true){
var result__6447__auto__ = switch__6444__auto__.call(null,state_16467);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6447__auto__;
}
break;
}
}catch (e16552){if((e16552 instanceof Object)){
var ex__6448__auto__ = e16552;
var statearr_16553_16610 = state_16467;
(statearr_16553_16610[(5)] = ex__6448__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16467);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16552;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16611 = state_16467;
state_16467 = G__16611;
continue;
} else {
return ret_value__6446__auto__;
}
break;
}
});
state_machine__6445__auto__ = function(state_16467){
switch(arguments.length){
case 0:
return state_machine__6445__auto____0.call(this);
case 1:
return state_machine__6445__auto____1.call(this,state_16467);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6445__auto____0;
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6445__auto____1;
return state_machine__6445__auto__;
})()
;})(switch__6444__auto__,c__6459__auto___16555,cs,m,dchan,dctr,done))
})();
var state__6461__auto__ = (function (){var statearr_16554 = f__6460__auto__.call(null);
(statearr_16554[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6459__auto___16555);

return statearr_16554;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6461__auto__);
});})(c__6459__auto___16555,cs,m,dchan,dctr,done))
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

cljs.core.async.Mix = (function (){var obj16613 = {};
return obj16613;
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
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__16614){
var map__16619 = p__16614;
var map__16619__$1 = ((cljs.core.seq_QMARK_.call(null,map__16619))?cljs.core.apply.call(null,cljs.core.hash_map,map__16619):map__16619);
var opts = map__16619__$1;
var statearr_16620_16623 = state;
(statearr_16620_16623[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__16619,map__16619__$1,opts){
return (function (val){
var statearr_16621_16624 = state;
(statearr_16621_16624[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__16619,map__16619__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_16622_16625 = state;
(statearr_16622_16625[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__16614 = null;
if (arguments.length > 3) {
  p__16614 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__16614);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__16626){
var state = cljs.core.first(arglist__16626);
arglist__16626 = cljs.core.next(arglist__16626);
var cont_block = cljs.core.first(arglist__16626);
arglist__16626 = cljs.core.next(arglist__16626);
var ports = cljs.core.first(arglist__16626);
var p__16614 = cljs.core.rest(arglist__16626);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__16614);
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
if(typeof cljs.core.async.t16746 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t16746 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta16747){
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
this.meta16747 = meta16747;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16746.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t16746.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t16746.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t16746.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t16746.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t16746.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t16746.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t16746.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t16746.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_16748){
var self__ = this;
var _16748__$1 = this;
return self__.meta16747;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t16746.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_16748,meta16747__$1){
var self__ = this;
var _16748__$1 = this;
return (new cljs.core.async.t16746(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta16747__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t16746.cljs$lang$type = true;

cljs.core.async.t16746.cljs$lang$ctorStr = "cljs.core.async/t16746";

cljs.core.async.t16746.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t16746");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t16746 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t16746(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta16747){
return (new cljs.core.async.t16746(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta16747));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t16746(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),25,new cljs.core.Keyword(null,"end-line","end-line",1837326455),510,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"line","line",212345235),499,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/chrism/dev/farn/resources/public/js/out/cljs/core/async.cljs"], null)));
})()
;
var c__6459__auto___16865 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6459__auto___16865,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__6460__auto__ = (function (){var switch__6444__auto__ = ((function (c__6459__auto___16865,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_16818){
var state_val_16819 = (state_16818[(1)]);
if((state_val_16819 === (7))){
var inst_16762 = (state_16818[(7)]);
var inst_16767 = cljs.core.apply.call(null,cljs.core.hash_map,inst_16762);
var state_16818__$1 = state_16818;
var statearr_16820_16866 = state_16818__$1;
(statearr_16820_16866[(2)] = inst_16767);

(statearr_16820_16866[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16819 === (20))){
var inst_16777 = (state_16818[(8)]);
var state_16818__$1 = state_16818;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16818__$1,(23),out,inst_16777);
} else {
if((state_val_16819 === (1))){
var inst_16752 = (state_16818[(9)]);
var inst_16752__$1 = calc_state.call(null);
var inst_16753 = cljs.core.seq_QMARK_.call(null,inst_16752__$1);
var state_16818__$1 = (function (){var statearr_16821 = state_16818;
(statearr_16821[(9)] = inst_16752__$1);

return statearr_16821;
})();
if(inst_16753){
var statearr_16822_16867 = state_16818__$1;
(statearr_16822_16867[(1)] = (2));

} else {
var statearr_16823_16868 = state_16818__$1;
(statearr_16823_16868[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16819 === (24))){
var inst_16770 = (state_16818[(10)]);
var inst_16762 = inst_16770;
var state_16818__$1 = (function (){var statearr_16824 = state_16818;
(statearr_16824[(7)] = inst_16762);

return statearr_16824;
})();
var statearr_16825_16869 = state_16818__$1;
(statearr_16825_16869[(2)] = null);

(statearr_16825_16869[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16819 === (4))){
var inst_16752 = (state_16818[(9)]);
var inst_16758 = (state_16818[(2)]);
var inst_16759 = cljs.core.get.call(null,inst_16758,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_16760 = cljs.core.get.call(null,inst_16758,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_16761 = cljs.core.get.call(null,inst_16758,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_16762 = inst_16752;
var state_16818__$1 = (function (){var statearr_16826 = state_16818;
(statearr_16826[(11)] = inst_16759);

(statearr_16826[(12)] = inst_16760);

(statearr_16826[(7)] = inst_16762);

(statearr_16826[(13)] = inst_16761);

return statearr_16826;
})();
var statearr_16827_16870 = state_16818__$1;
(statearr_16827_16870[(2)] = null);

(statearr_16827_16870[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16819 === (15))){
var state_16818__$1 = state_16818;
var statearr_16828_16871 = state_16818__$1;
(statearr_16828_16871[(2)] = null);

(statearr_16828_16871[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16819 === (21))){
var inst_16770 = (state_16818[(10)]);
var inst_16762 = inst_16770;
var state_16818__$1 = (function (){var statearr_16829 = state_16818;
(statearr_16829[(7)] = inst_16762);

return statearr_16829;
})();
var statearr_16830_16872 = state_16818__$1;
(statearr_16830_16872[(2)] = null);

(statearr_16830_16872[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16819 === (13))){
var inst_16814 = (state_16818[(2)]);
var state_16818__$1 = state_16818;
var statearr_16831_16873 = state_16818__$1;
(statearr_16831_16873[(2)] = inst_16814);

(statearr_16831_16873[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16819 === (22))){
var inst_16812 = (state_16818[(2)]);
var state_16818__$1 = state_16818;
var statearr_16832_16874 = state_16818__$1;
(statearr_16832_16874[(2)] = inst_16812);

(statearr_16832_16874[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16819 === (6))){
var inst_16816 = (state_16818[(2)]);
var state_16818__$1 = state_16818;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16818__$1,inst_16816);
} else {
if((state_val_16819 === (25))){
var state_16818__$1 = state_16818;
var statearr_16833_16875 = state_16818__$1;
(statearr_16833_16875[(2)] = null);

(statearr_16833_16875[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16819 === (17))){
var inst_16792 = (state_16818[(14)]);
var state_16818__$1 = state_16818;
var statearr_16834_16876 = state_16818__$1;
(statearr_16834_16876[(2)] = inst_16792);

(statearr_16834_16876[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16819 === (3))){
var inst_16752 = (state_16818[(9)]);
var state_16818__$1 = state_16818;
var statearr_16835_16877 = state_16818__$1;
(statearr_16835_16877[(2)] = inst_16752);

(statearr_16835_16877[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16819 === (12))){
var inst_16773 = (state_16818[(15)]);
var inst_16792 = (state_16818[(14)]);
var inst_16778 = (state_16818[(16)]);
var inst_16792__$1 = inst_16773.call(null,inst_16778);
var state_16818__$1 = (function (){var statearr_16836 = state_16818;
(statearr_16836[(14)] = inst_16792__$1);

return statearr_16836;
})();
if(cljs.core.truth_(inst_16792__$1)){
var statearr_16837_16878 = state_16818__$1;
(statearr_16837_16878[(1)] = (17));

} else {
var statearr_16838_16879 = state_16818__$1;
(statearr_16838_16879[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16819 === (2))){
var inst_16752 = (state_16818[(9)]);
var inst_16755 = cljs.core.apply.call(null,cljs.core.hash_map,inst_16752);
var state_16818__$1 = state_16818;
var statearr_16839_16880 = state_16818__$1;
(statearr_16839_16880[(2)] = inst_16755);

(statearr_16839_16880[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16819 === (23))){
var inst_16803 = (state_16818[(2)]);
var state_16818__$1 = state_16818;
if(cljs.core.truth_(inst_16803)){
var statearr_16840_16881 = state_16818__$1;
(statearr_16840_16881[(1)] = (24));

} else {
var statearr_16841_16882 = state_16818__$1;
(statearr_16841_16882[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16819 === (19))){
var inst_16800 = (state_16818[(2)]);
var state_16818__$1 = state_16818;
if(cljs.core.truth_(inst_16800)){
var statearr_16842_16883 = state_16818__$1;
(statearr_16842_16883[(1)] = (20));

} else {
var statearr_16843_16884 = state_16818__$1;
(statearr_16843_16884[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16819 === (11))){
var inst_16777 = (state_16818[(8)]);
var inst_16783 = (inst_16777 == null);
var state_16818__$1 = state_16818;
if(cljs.core.truth_(inst_16783)){
var statearr_16844_16885 = state_16818__$1;
(statearr_16844_16885[(1)] = (14));

} else {
var statearr_16845_16886 = state_16818__$1;
(statearr_16845_16886[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16819 === (9))){
var inst_16770 = (state_16818[(10)]);
var inst_16770__$1 = (state_16818[(2)]);
var inst_16771 = cljs.core.get.call(null,inst_16770__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_16772 = cljs.core.get.call(null,inst_16770__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_16773 = cljs.core.get.call(null,inst_16770__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var state_16818__$1 = (function (){var statearr_16846 = state_16818;
(statearr_16846[(15)] = inst_16773);

(statearr_16846[(17)] = inst_16772);

(statearr_16846[(10)] = inst_16770__$1);

return statearr_16846;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_16818__$1,(10),inst_16771);
} else {
if((state_val_16819 === (5))){
var inst_16762 = (state_16818[(7)]);
var inst_16765 = cljs.core.seq_QMARK_.call(null,inst_16762);
var state_16818__$1 = state_16818;
if(inst_16765){
var statearr_16847_16887 = state_16818__$1;
(statearr_16847_16887[(1)] = (7));

} else {
var statearr_16848_16888 = state_16818__$1;
(statearr_16848_16888[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16819 === (14))){
var inst_16778 = (state_16818[(16)]);
var inst_16785 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_16778);
var state_16818__$1 = state_16818;
var statearr_16849_16889 = state_16818__$1;
(statearr_16849_16889[(2)] = inst_16785);

(statearr_16849_16889[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16819 === (26))){
var inst_16808 = (state_16818[(2)]);
var state_16818__$1 = state_16818;
var statearr_16850_16890 = state_16818__$1;
(statearr_16850_16890[(2)] = inst_16808);

(statearr_16850_16890[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16819 === (16))){
var inst_16788 = (state_16818[(2)]);
var inst_16789 = calc_state.call(null);
var inst_16762 = inst_16789;
var state_16818__$1 = (function (){var statearr_16851 = state_16818;
(statearr_16851[(18)] = inst_16788);

(statearr_16851[(7)] = inst_16762);

return statearr_16851;
})();
var statearr_16852_16891 = state_16818__$1;
(statearr_16852_16891[(2)] = null);

(statearr_16852_16891[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16819 === (10))){
var inst_16777 = (state_16818[(8)]);
var inst_16778 = (state_16818[(16)]);
var inst_16776 = (state_16818[(2)]);
var inst_16777__$1 = cljs.core.nth.call(null,inst_16776,(0),null);
var inst_16778__$1 = cljs.core.nth.call(null,inst_16776,(1),null);
var inst_16779 = (inst_16777__$1 == null);
var inst_16780 = cljs.core._EQ_.call(null,inst_16778__$1,change);
var inst_16781 = (inst_16779) || (inst_16780);
var state_16818__$1 = (function (){var statearr_16853 = state_16818;
(statearr_16853[(8)] = inst_16777__$1);

(statearr_16853[(16)] = inst_16778__$1);

return statearr_16853;
})();
if(cljs.core.truth_(inst_16781)){
var statearr_16854_16892 = state_16818__$1;
(statearr_16854_16892[(1)] = (11));

} else {
var statearr_16855_16893 = state_16818__$1;
(statearr_16855_16893[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16819 === (18))){
var inst_16773 = (state_16818[(15)]);
var inst_16772 = (state_16818[(17)]);
var inst_16778 = (state_16818[(16)]);
var inst_16795 = cljs.core.empty_QMARK_.call(null,inst_16773);
var inst_16796 = inst_16772.call(null,inst_16778);
var inst_16797 = cljs.core.not.call(null,inst_16796);
var inst_16798 = (inst_16795) && (inst_16797);
var state_16818__$1 = state_16818;
var statearr_16856_16894 = state_16818__$1;
(statearr_16856_16894[(2)] = inst_16798);

(statearr_16856_16894[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16819 === (8))){
var inst_16762 = (state_16818[(7)]);
var state_16818__$1 = state_16818;
var statearr_16857_16895 = state_16818__$1;
(statearr_16857_16895[(2)] = inst_16762);

(statearr_16857_16895[(1)] = (9));


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
});})(c__6459__auto___16865,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__6444__auto__,c__6459__auto___16865,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__6445__auto__ = null;
var state_machine__6445__auto____0 = (function (){
var statearr_16861 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16861[(0)] = state_machine__6445__auto__);

(statearr_16861[(1)] = (1));

return statearr_16861;
});
var state_machine__6445__auto____1 = (function (state_16818){
while(true){
var ret_value__6446__auto__ = (function (){try{while(true){
var result__6447__auto__ = switch__6444__auto__.call(null,state_16818);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6447__auto__;
}
break;
}
}catch (e16862){if((e16862 instanceof Object)){
var ex__6448__auto__ = e16862;
var statearr_16863_16896 = state_16818;
(statearr_16863_16896[(5)] = ex__6448__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16818);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16862;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16897 = state_16818;
state_16818 = G__16897;
continue;
} else {
return ret_value__6446__auto__;
}
break;
}
});
state_machine__6445__auto__ = function(state_16818){
switch(arguments.length){
case 0:
return state_machine__6445__auto____0.call(this);
case 1:
return state_machine__6445__auto____1.call(this,state_16818);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6445__auto____0;
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6445__auto____1;
return state_machine__6445__auto__;
})()
;})(switch__6444__auto__,c__6459__auto___16865,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__6461__auto__ = (function (){var statearr_16864 = f__6460__auto__.call(null);
(statearr_16864[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6459__auto___16865);

return statearr_16864;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6461__auto__);
});})(c__6459__auto___16865,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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

cljs.core.async.Pub = (function (){var obj16899 = {};
return obj16899;
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
return (function (p1__16900_SHARP_){
if(cljs.core.truth_(p1__16900_SHARP_.call(null,topic))){
return p1__16900_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__16900_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3630__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t17023 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t17023 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta17024){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta17024 = meta17024;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17023.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t17023.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t17023.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t17023.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t17023.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t17023.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t17023.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t17023.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_17025){
var self__ = this;
var _17025__$1 = this;
return self__.meta17024;
});})(mults,ensure_mult))
;

cljs.core.async.t17023.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_17025,meta17024__$1){
var self__ = this;
var _17025__$1 = this;
return (new cljs.core.async.t17023(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta17024__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t17023.cljs$lang$type = true;

cljs.core.async.t17023.cljs$lang$ctorStr = "cljs.core.async/t17023";

cljs.core.async.t17023.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t17023");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t17023 = ((function (mults,ensure_mult){
return (function __GT_t17023(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta17024){
return (new cljs.core.async.t17023(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta17024));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t17023(ensure_mult,mults,buf_fn,topic_fn,ch,pub,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),65,new cljs.core.Keyword(null,"end-line","end-line",1837326455),603,new cljs.core.Keyword(null,"column","column",2078222095),14,new cljs.core.Keyword(null,"line","line",212345235),591,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/chrism/dev/farn/resources/public/js/out/cljs/core/async.cljs"], null)));
})()
;
var c__6459__auto___17145 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6459__auto___17145,mults,ensure_mult,p){
return (function (){
var f__6460__auto__ = (function (){var switch__6444__auto__ = ((function (c__6459__auto___17145,mults,ensure_mult,p){
return (function (state_17097){
var state_val_17098 = (state_17097[(1)]);
if((state_val_17098 === (7))){
var inst_17093 = (state_17097[(2)]);
var state_17097__$1 = state_17097;
var statearr_17099_17146 = state_17097__$1;
(statearr_17099_17146[(2)] = inst_17093);

(statearr_17099_17146[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17098 === (20))){
var state_17097__$1 = state_17097;
var statearr_17100_17147 = state_17097__$1;
(statearr_17100_17147[(2)] = null);

(statearr_17100_17147[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17098 === (1))){
var state_17097__$1 = state_17097;
var statearr_17101_17148 = state_17097__$1;
(statearr_17101_17148[(2)] = null);

(statearr_17101_17148[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17098 === (24))){
var inst_17076 = (state_17097[(7)]);
var inst_17085 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_17076);
var state_17097__$1 = state_17097;
var statearr_17102_17149 = state_17097__$1;
(statearr_17102_17149[(2)] = inst_17085);

(statearr_17102_17149[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17098 === (4))){
var inst_17028 = (state_17097[(8)]);
var inst_17028__$1 = (state_17097[(2)]);
var inst_17029 = (inst_17028__$1 == null);
var state_17097__$1 = (function (){var statearr_17103 = state_17097;
(statearr_17103[(8)] = inst_17028__$1);

return statearr_17103;
})();
if(cljs.core.truth_(inst_17029)){
var statearr_17104_17150 = state_17097__$1;
(statearr_17104_17150[(1)] = (5));

} else {
var statearr_17105_17151 = state_17097__$1;
(statearr_17105_17151[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17098 === (15))){
var inst_17070 = (state_17097[(2)]);
var state_17097__$1 = state_17097;
var statearr_17106_17152 = state_17097__$1;
(statearr_17106_17152[(2)] = inst_17070);

(statearr_17106_17152[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17098 === (21))){
var inst_17090 = (state_17097[(2)]);
var state_17097__$1 = (function (){var statearr_17107 = state_17097;
(statearr_17107[(9)] = inst_17090);

return statearr_17107;
})();
var statearr_17108_17153 = state_17097__$1;
(statearr_17108_17153[(2)] = null);

(statearr_17108_17153[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17098 === (13))){
var inst_17052 = (state_17097[(10)]);
var inst_17054 = cljs.core.chunked_seq_QMARK_.call(null,inst_17052);
var state_17097__$1 = state_17097;
if(inst_17054){
var statearr_17109_17154 = state_17097__$1;
(statearr_17109_17154[(1)] = (16));

} else {
var statearr_17110_17155 = state_17097__$1;
(statearr_17110_17155[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17098 === (22))){
var inst_17082 = (state_17097[(2)]);
var state_17097__$1 = state_17097;
if(cljs.core.truth_(inst_17082)){
var statearr_17111_17156 = state_17097__$1;
(statearr_17111_17156[(1)] = (23));

} else {
var statearr_17112_17157 = state_17097__$1;
(statearr_17112_17157[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17098 === (6))){
var inst_17028 = (state_17097[(8)]);
var inst_17078 = (state_17097[(11)]);
var inst_17076 = (state_17097[(7)]);
var inst_17076__$1 = topic_fn.call(null,inst_17028);
var inst_17077 = cljs.core.deref.call(null,mults);
var inst_17078__$1 = cljs.core.get.call(null,inst_17077,inst_17076__$1);
var state_17097__$1 = (function (){var statearr_17113 = state_17097;
(statearr_17113[(11)] = inst_17078__$1);

(statearr_17113[(7)] = inst_17076__$1);

return statearr_17113;
})();
if(cljs.core.truth_(inst_17078__$1)){
var statearr_17114_17158 = state_17097__$1;
(statearr_17114_17158[(1)] = (19));

} else {
var statearr_17115_17159 = state_17097__$1;
(statearr_17115_17159[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17098 === (25))){
var inst_17087 = (state_17097[(2)]);
var state_17097__$1 = state_17097;
var statearr_17116_17160 = state_17097__$1;
(statearr_17116_17160[(2)] = inst_17087);

(statearr_17116_17160[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17098 === (17))){
var inst_17052 = (state_17097[(10)]);
var inst_17061 = cljs.core.first.call(null,inst_17052);
var inst_17062 = cljs.core.async.muxch_STAR_.call(null,inst_17061);
var inst_17063 = cljs.core.async.close_BANG_.call(null,inst_17062);
var inst_17064 = cljs.core.next.call(null,inst_17052);
var inst_17038 = inst_17064;
var inst_17039 = null;
var inst_17040 = (0);
var inst_17041 = (0);
var state_17097__$1 = (function (){var statearr_17117 = state_17097;
(statearr_17117[(12)] = inst_17063);

(statearr_17117[(13)] = inst_17041);

(statearr_17117[(14)] = inst_17038);

(statearr_17117[(15)] = inst_17040);

(statearr_17117[(16)] = inst_17039);

return statearr_17117;
})();
var statearr_17118_17161 = state_17097__$1;
(statearr_17118_17161[(2)] = null);

(statearr_17118_17161[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17098 === (3))){
var inst_17095 = (state_17097[(2)]);
var state_17097__$1 = state_17097;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17097__$1,inst_17095);
} else {
if((state_val_17098 === (12))){
var inst_17072 = (state_17097[(2)]);
var state_17097__$1 = state_17097;
var statearr_17119_17162 = state_17097__$1;
(statearr_17119_17162[(2)] = inst_17072);

(statearr_17119_17162[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17098 === (2))){
var state_17097__$1 = state_17097;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17097__$1,(4),ch);
} else {
if((state_val_17098 === (23))){
var state_17097__$1 = state_17097;
var statearr_17120_17163 = state_17097__$1;
(statearr_17120_17163[(2)] = null);

(statearr_17120_17163[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17098 === (19))){
var inst_17028 = (state_17097[(8)]);
var inst_17078 = (state_17097[(11)]);
var inst_17080 = cljs.core.async.muxch_STAR_.call(null,inst_17078);
var state_17097__$1 = state_17097;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17097__$1,(22),inst_17080,inst_17028);
} else {
if((state_val_17098 === (11))){
var inst_17038 = (state_17097[(14)]);
var inst_17052 = (state_17097[(10)]);
var inst_17052__$1 = cljs.core.seq.call(null,inst_17038);
var state_17097__$1 = (function (){var statearr_17121 = state_17097;
(statearr_17121[(10)] = inst_17052__$1);

return statearr_17121;
})();
if(inst_17052__$1){
var statearr_17122_17164 = state_17097__$1;
(statearr_17122_17164[(1)] = (13));

} else {
var statearr_17123_17165 = state_17097__$1;
(statearr_17123_17165[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17098 === (9))){
var inst_17074 = (state_17097[(2)]);
var state_17097__$1 = state_17097;
var statearr_17124_17166 = state_17097__$1;
(statearr_17124_17166[(2)] = inst_17074);

(statearr_17124_17166[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17098 === (5))){
var inst_17035 = cljs.core.deref.call(null,mults);
var inst_17036 = cljs.core.vals.call(null,inst_17035);
var inst_17037 = cljs.core.seq.call(null,inst_17036);
var inst_17038 = inst_17037;
var inst_17039 = null;
var inst_17040 = (0);
var inst_17041 = (0);
var state_17097__$1 = (function (){var statearr_17125 = state_17097;
(statearr_17125[(13)] = inst_17041);

(statearr_17125[(14)] = inst_17038);

(statearr_17125[(15)] = inst_17040);

(statearr_17125[(16)] = inst_17039);

return statearr_17125;
})();
var statearr_17126_17167 = state_17097__$1;
(statearr_17126_17167[(2)] = null);

(statearr_17126_17167[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17098 === (14))){
var state_17097__$1 = state_17097;
var statearr_17130_17168 = state_17097__$1;
(statearr_17130_17168[(2)] = null);

(statearr_17130_17168[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17098 === (16))){
var inst_17052 = (state_17097[(10)]);
var inst_17056 = cljs.core.chunk_first.call(null,inst_17052);
var inst_17057 = cljs.core.chunk_rest.call(null,inst_17052);
var inst_17058 = cljs.core.count.call(null,inst_17056);
var inst_17038 = inst_17057;
var inst_17039 = inst_17056;
var inst_17040 = inst_17058;
var inst_17041 = (0);
var state_17097__$1 = (function (){var statearr_17131 = state_17097;
(statearr_17131[(13)] = inst_17041);

(statearr_17131[(14)] = inst_17038);

(statearr_17131[(15)] = inst_17040);

(statearr_17131[(16)] = inst_17039);

return statearr_17131;
})();
var statearr_17132_17169 = state_17097__$1;
(statearr_17132_17169[(2)] = null);

(statearr_17132_17169[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17098 === (10))){
var inst_17041 = (state_17097[(13)]);
var inst_17038 = (state_17097[(14)]);
var inst_17040 = (state_17097[(15)]);
var inst_17039 = (state_17097[(16)]);
var inst_17046 = cljs.core._nth.call(null,inst_17039,inst_17041);
var inst_17047 = cljs.core.async.muxch_STAR_.call(null,inst_17046);
var inst_17048 = cljs.core.async.close_BANG_.call(null,inst_17047);
var inst_17049 = (inst_17041 + (1));
var tmp17127 = inst_17038;
var tmp17128 = inst_17040;
var tmp17129 = inst_17039;
var inst_17038__$1 = tmp17127;
var inst_17039__$1 = tmp17129;
var inst_17040__$1 = tmp17128;
var inst_17041__$1 = inst_17049;
var state_17097__$1 = (function (){var statearr_17133 = state_17097;
(statearr_17133[(13)] = inst_17041__$1);

(statearr_17133[(14)] = inst_17038__$1);

(statearr_17133[(15)] = inst_17040__$1);

(statearr_17133[(16)] = inst_17039__$1);

(statearr_17133[(17)] = inst_17048);

return statearr_17133;
})();
var statearr_17134_17170 = state_17097__$1;
(statearr_17134_17170[(2)] = null);

(statearr_17134_17170[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17098 === (18))){
var inst_17067 = (state_17097[(2)]);
var state_17097__$1 = state_17097;
var statearr_17135_17171 = state_17097__$1;
(statearr_17135_17171[(2)] = inst_17067);

(statearr_17135_17171[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17098 === (8))){
var inst_17041 = (state_17097[(13)]);
var inst_17040 = (state_17097[(15)]);
var inst_17043 = (inst_17041 < inst_17040);
var inst_17044 = inst_17043;
var state_17097__$1 = state_17097;
if(cljs.core.truth_(inst_17044)){
var statearr_17136_17172 = state_17097__$1;
(statearr_17136_17172[(1)] = (10));

} else {
var statearr_17137_17173 = state_17097__$1;
(statearr_17137_17173[(1)] = (11));

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
});})(c__6459__auto___17145,mults,ensure_mult,p))
;
return ((function (switch__6444__auto__,c__6459__auto___17145,mults,ensure_mult,p){
return (function() {
var state_machine__6445__auto__ = null;
var state_machine__6445__auto____0 = (function (){
var statearr_17141 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17141[(0)] = state_machine__6445__auto__);

(statearr_17141[(1)] = (1));

return statearr_17141;
});
var state_machine__6445__auto____1 = (function (state_17097){
while(true){
var ret_value__6446__auto__ = (function (){try{while(true){
var result__6447__auto__ = switch__6444__auto__.call(null,state_17097);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6447__auto__;
}
break;
}
}catch (e17142){if((e17142 instanceof Object)){
var ex__6448__auto__ = e17142;
var statearr_17143_17174 = state_17097;
(statearr_17143_17174[(5)] = ex__6448__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17097);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17142;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17175 = state_17097;
state_17097 = G__17175;
continue;
} else {
return ret_value__6446__auto__;
}
break;
}
});
state_machine__6445__auto__ = function(state_17097){
switch(arguments.length){
case 0:
return state_machine__6445__auto____0.call(this);
case 1:
return state_machine__6445__auto____1.call(this,state_17097);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6445__auto____0;
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6445__auto____1;
return state_machine__6445__auto__;
})()
;})(switch__6444__auto__,c__6459__auto___17145,mults,ensure_mult,p))
})();
var state__6461__auto__ = (function (){var statearr_17144 = f__6460__auto__.call(null);
(statearr_17144[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6459__auto___17145);

return statearr_17144;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6461__auto__);
});})(c__6459__auto___17145,mults,ensure_mult,p))
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
var c__6459__auto___17312 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6459__auto___17312,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__6460__auto__ = (function (){var switch__6444__auto__ = ((function (c__6459__auto___17312,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_17282){
var state_val_17283 = (state_17282[(1)]);
if((state_val_17283 === (7))){
var state_17282__$1 = state_17282;
var statearr_17284_17313 = state_17282__$1;
(statearr_17284_17313[(2)] = null);

(statearr_17284_17313[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17283 === (1))){
var state_17282__$1 = state_17282;
var statearr_17285_17314 = state_17282__$1;
(statearr_17285_17314[(2)] = null);

(statearr_17285_17314[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17283 === (4))){
var inst_17246 = (state_17282[(7)]);
var inst_17248 = (inst_17246 < cnt);
var state_17282__$1 = state_17282;
if(cljs.core.truth_(inst_17248)){
var statearr_17286_17315 = state_17282__$1;
(statearr_17286_17315[(1)] = (6));

} else {
var statearr_17287_17316 = state_17282__$1;
(statearr_17287_17316[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17283 === (15))){
var inst_17278 = (state_17282[(2)]);
var state_17282__$1 = state_17282;
var statearr_17288_17317 = state_17282__$1;
(statearr_17288_17317[(2)] = inst_17278);

(statearr_17288_17317[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17283 === (13))){
var inst_17271 = cljs.core.async.close_BANG_.call(null,out);
var state_17282__$1 = state_17282;
var statearr_17289_17318 = state_17282__$1;
(statearr_17289_17318[(2)] = inst_17271);

(statearr_17289_17318[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17283 === (6))){
var state_17282__$1 = state_17282;
var statearr_17290_17319 = state_17282__$1;
(statearr_17290_17319[(2)] = null);

(statearr_17290_17319[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17283 === (3))){
var inst_17280 = (state_17282[(2)]);
var state_17282__$1 = state_17282;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17282__$1,inst_17280);
} else {
if((state_val_17283 === (12))){
var inst_17268 = (state_17282[(8)]);
var inst_17268__$1 = (state_17282[(2)]);
var inst_17269 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_17268__$1);
var state_17282__$1 = (function (){var statearr_17291 = state_17282;
(statearr_17291[(8)] = inst_17268__$1);

return statearr_17291;
})();
if(cljs.core.truth_(inst_17269)){
var statearr_17292_17320 = state_17282__$1;
(statearr_17292_17320[(1)] = (13));

} else {
var statearr_17293_17321 = state_17282__$1;
(statearr_17293_17321[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17283 === (2))){
var inst_17245 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_17246 = (0);
var state_17282__$1 = (function (){var statearr_17294 = state_17282;
(statearr_17294[(9)] = inst_17245);

(statearr_17294[(7)] = inst_17246);

return statearr_17294;
})();
var statearr_17295_17322 = state_17282__$1;
(statearr_17295_17322[(2)] = null);

(statearr_17295_17322[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17283 === (11))){
var inst_17246 = (state_17282[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_17282,(10),Object,null,(9));
var inst_17255 = chs__$1.call(null,inst_17246);
var inst_17256 = done.call(null,inst_17246);
var inst_17257 = cljs.core.async.take_BANG_.call(null,inst_17255,inst_17256);
var state_17282__$1 = state_17282;
var statearr_17296_17323 = state_17282__$1;
(statearr_17296_17323[(2)] = inst_17257);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17282__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17283 === (9))){
var inst_17246 = (state_17282[(7)]);
var inst_17259 = (state_17282[(2)]);
var inst_17260 = (inst_17246 + (1));
var inst_17246__$1 = inst_17260;
var state_17282__$1 = (function (){var statearr_17297 = state_17282;
(statearr_17297[(10)] = inst_17259);

(statearr_17297[(7)] = inst_17246__$1);

return statearr_17297;
})();
var statearr_17298_17324 = state_17282__$1;
(statearr_17298_17324[(2)] = null);

(statearr_17298_17324[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17283 === (5))){
var inst_17266 = (state_17282[(2)]);
var state_17282__$1 = (function (){var statearr_17299 = state_17282;
(statearr_17299[(11)] = inst_17266);

return statearr_17299;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17282__$1,(12),dchan);
} else {
if((state_val_17283 === (14))){
var inst_17268 = (state_17282[(8)]);
var inst_17273 = cljs.core.apply.call(null,f,inst_17268);
var state_17282__$1 = state_17282;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17282__$1,(16),out,inst_17273);
} else {
if((state_val_17283 === (16))){
var inst_17275 = (state_17282[(2)]);
var state_17282__$1 = (function (){var statearr_17300 = state_17282;
(statearr_17300[(12)] = inst_17275);

return statearr_17300;
})();
var statearr_17301_17325 = state_17282__$1;
(statearr_17301_17325[(2)] = null);

(statearr_17301_17325[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17283 === (10))){
var inst_17250 = (state_17282[(2)]);
var inst_17251 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_17282__$1 = (function (){var statearr_17302 = state_17282;
(statearr_17302[(13)] = inst_17250);

return statearr_17302;
})();
var statearr_17303_17326 = state_17282__$1;
(statearr_17303_17326[(2)] = inst_17251);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17282__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17283 === (8))){
var inst_17264 = (state_17282[(2)]);
var state_17282__$1 = state_17282;
var statearr_17304_17327 = state_17282__$1;
(statearr_17304_17327[(2)] = inst_17264);

(statearr_17304_17327[(1)] = (5));


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
});})(c__6459__auto___17312,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__6444__auto__,c__6459__auto___17312,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__6445__auto__ = null;
var state_machine__6445__auto____0 = (function (){
var statearr_17308 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17308[(0)] = state_machine__6445__auto__);

(statearr_17308[(1)] = (1));

return statearr_17308;
});
var state_machine__6445__auto____1 = (function (state_17282){
while(true){
var ret_value__6446__auto__ = (function (){try{while(true){
var result__6447__auto__ = switch__6444__auto__.call(null,state_17282);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6447__auto__;
}
break;
}
}catch (e17309){if((e17309 instanceof Object)){
var ex__6448__auto__ = e17309;
var statearr_17310_17328 = state_17282;
(statearr_17310_17328[(5)] = ex__6448__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17282);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17309;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17329 = state_17282;
state_17282 = G__17329;
continue;
} else {
return ret_value__6446__auto__;
}
break;
}
});
state_machine__6445__auto__ = function(state_17282){
switch(arguments.length){
case 0:
return state_machine__6445__auto____0.call(this);
case 1:
return state_machine__6445__auto____1.call(this,state_17282);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6445__auto____0;
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6445__auto____1;
return state_machine__6445__auto__;
})()
;})(switch__6444__auto__,c__6459__auto___17312,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__6461__auto__ = (function (){var statearr_17311 = f__6460__auto__.call(null);
(statearr_17311[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6459__auto___17312);

return statearr_17311;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6461__auto__);
});})(c__6459__auto___17312,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var c__6459__auto___17437 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6459__auto___17437,out){
return (function (){
var f__6460__auto__ = (function (){var switch__6444__auto__ = ((function (c__6459__auto___17437,out){
return (function (state_17413){
var state_val_17414 = (state_17413[(1)]);
if((state_val_17414 === (7))){
var inst_17392 = (state_17413[(7)]);
var inst_17393 = (state_17413[(8)]);
var inst_17392__$1 = (state_17413[(2)]);
var inst_17393__$1 = cljs.core.nth.call(null,inst_17392__$1,(0),null);
var inst_17394 = cljs.core.nth.call(null,inst_17392__$1,(1),null);
var inst_17395 = (inst_17393__$1 == null);
var state_17413__$1 = (function (){var statearr_17415 = state_17413;
(statearr_17415[(7)] = inst_17392__$1);

(statearr_17415[(9)] = inst_17394);

(statearr_17415[(8)] = inst_17393__$1);

return statearr_17415;
})();
if(cljs.core.truth_(inst_17395)){
var statearr_17416_17438 = state_17413__$1;
(statearr_17416_17438[(1)] = (8));

} else {
var statearr_17417_17439 = state_17413__$1;
(statearr_17417_17439[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17414 === (1))){
var inst_17384 = cljs.core.vec.call(null,chs);
var inst_17385 = inst_17384;
var state_17413__$1 = (function (){var statearr_17418 = state_17413;
(statearr_17418[(10)] = inst_17385);

return statearr_17418;
})();
var statearr_17419_17440 = state_17413__$1;
(statearr_17419_17440[(2)] = null);

(statearr_17419_17440[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17414 === (4))){
var inst_17385 = (state_17413[(10)]);
var state_17413__$1 = state_17413;
return cljs.core.async.ioc_alts_BANG_.call(null,state_17413__$1,(7),inst_17385);
} else {
if((state_val_17414 === (6))){
var inst_17409 = (state_17413[(2)]);
var state_17413__$1 = state_17413;
var statearr_17420_17441 = state_17413__$1;
(statearr_17420_17441[(2)] = inst_17409);

(statearr_17420_17441[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17414 === (3))){
var inst_17411 = (state_17413[(2)]);
var state_17413__$1 = state_17413;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17413__$1,inst_17411);
} else {
if((state_val_17414 === (2))){
var inst_17385 = (state_17413[(10)]);
var inst_17387 = cljs.core.count.call(null,inst_17385);
var inst_17388 = (inst_17387 > (0));
var state_17413__$1 = state_17413;
if(cljs.core.truth_(inst_17388)){
var statearr_17422_17442 = state_17413__$1;
(statearr_17422_17442[(1)] = (4));

} else {
var statearr_17423_17443 = state_17413__$1;
(statearr_17423_17443[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17414 === (11))){
var inst_17385 = (state_17413[(10)]);
var inst_17402 = (state_17413[(2)]);
var tmp17421 = inst_17385;
var inst_17385__$1 = tmp17421;
var state_17413__$1 = (function (){var statearr_17424 = state_17413;
(statearr_17424[(10)] = inst_17385__$1);

(statearr_17424[(11)] = inst_17402);

return statearr_17424;
})();
var statearr_17425_17444 = state_17413__$1;
(statearr_17425_17444[(2)] = null);

(statearr_17425_17444[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17414 === (9))){
var inst_17393 = (state_17413[(8)]);
var state_17413__$1 = state_17413;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17413__$1,(11),out,inst_17393);
} else {
if((state_val_17414 === (5))){
var inst_17407 = cljs.core.async.close_BANG_.call(null,out);
var state_17413__$1 = state_17413;
var statearr_17426_17445 = state_17413__$1;
(statearr_17426_17445[(2)] = inst_17407);

(statearr_17426_17445[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17414 === (10))){
var inst_17405 = (state_17413[(2)]);
var state_17413__$1 = state_17413;
var statearr_17427_17446 = state_17413__$1;
(statearr_17427_17446[(2)] = inst_17405);

(statearr_17427_17446[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17414 === (8))){
var inst_17385 = (state_17413[(10)]);
var inst_17392 = (state_17413[(7)]);
var inst_17394 = (state_17413[(9)]);
var inst_17393 = (state_17413[(8)]);
var inst_17397 = (function (){var c = inst_17394;
var v = inst_17393;
var vec__17390 = inst_17392;
var cs = inst_17385;
return ((function (c,v,vec__17390,cs,inst_17385,inst_17392,inst_17394,inst_17393,state_val_17414,c__6459__auto___17437,out){
return (function (p1__17330_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__17330_SHARP_);
});
;})(c,v,vec__17390,cs,inst_17385,inst_17392,inst_17394,inst_17393,state_val_17414,c__6459__auto___17437,out))
})();
var inst_17398 = cljs.core.filterv.call(null,inst_17397,inst_17385);
var inst_17385__$1 = inst_17398;
var state_17413__$1 = (function (){var statearr_17428 = state_17413;
(statearr_17428[(10)] = inst_17385__$1);

return statearr_17428;
})();
var statearr_17429_17447 = state_17413__$1;
(statearr_17429_17447[(2)] = null);

(statearr_17429_17447[(1)] = (2));


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
});})(c__6459__auto___17437,out))
;
return ((function (switch__6444__auto__,c__6459__auto___17437,out){
return (function() {
var state_machine__6445__auto__ = null;
var state_machine__6445__auto____0 = (function (){
var statearr_17433 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17433[(0)] = state_machine__6445__auto__);

(statearr_17433[(1)] = (1));

return statearr_17433;
});
var state_machine__6445__auto____1 = (function (state_17413){
while(true){
var ret_value__6446__auto__ = (function (){try{while(true){
var result__6447__auto__ = switch__6444__auto__.call(null,state_17413);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6447__auto__;
}
break;
}
}catch (e17434){if((e17434 instanceof Object)){
var ex__6448__auto__ = e17434;
var statearr_17435_17448 = state_17413;
(statearr_17435_17448[(5)] = ex__6448__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17413);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17434;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17449 = state_17413;
state_17413 = G__17449;
continue;
} else {
return ret_value__6446__auto__;
}
break;
}
});
state_machine__6445__auto__ = function(state_17413){
switch(arguments.length){
case 0:
return state_machine__6445__auto____0.call(this);
case 1:
return state_machine__6445__auto____1.call(this,state_17413);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6445__auto____0;
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6445__auto____1;
return state_machine__6445__auto__;
})()
;})(switch__6444__auto__,c__6459__auto___17437,out))
})();
var state__6461__auto__ = (function (){var statearr_17436 = f__6460__auto__.call(null);
(statearr_17436[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6459__auto___17437);

return statearr_17436;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6461__auto__);
});})(c__6459__auto___17437,out))
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
var c__6459__auto___17542 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6459__auto___17542,out){
return (function (){
var f__6460__auto__ = (function (){var switch__6444__auto__ = ((function (c__6459__auto___17542,out){
return (function (state_17519){
var state_val_17520 = (state_17519[(1)]);
if((state_val_17520 === (7))){
var inst_17501 = (state_17519[(7)]);
var inst_17501__$1 = (state_17519[(2)]);
var inst_17502 = (inst_17501__$1 == null);
var inst_17503 = cljs.core.not.call(null,inst_17502);
var state_17519__$1 = (function (){var statearr_17521 = state_17519;
(statearr_17521[(7)] = inst_17501__$1);

return statearr_17521;
})();
if(inst_17503){
var statearr_17522_17543 = state_17519__$1;
(statearr_17522_17543[(1)] = (8));

} else {
var statearr_17523_17544 = state_17519__$1;
(statearr_17523_17544[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17520 === (1))){
var inst_17496 = (0);
var state_17519__$1 = (function (){var statearr_17524 = state_17519;
(statearr_17524[(8)] = inst_17496);

return statearr_17524;
})();
var statearr_17525_17545 = state_17519__$1;
(statearr_17525_17545[(2)] = null);

(statearr_17525_17545[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17520 === (4))){
var state_17519__$1 = state_17519;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17519__$1,(7),ch);
} else {
if((state_val_17520 === (6))){
var inst_17514 = (state_17519[(2)]);
var state_17519__$1 = state_17519;
var statearr_17526_17546 = state_17519__$1;
(statearr_17526_17546[(2)] = inst_17514);

(statearr_17526_17546[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17520 === (3))){
var inst_17516 = (state_17519[(2)]);
var inst_17517 = cljs.core.async.close_BANG_.call(null,out);
var state_17519__$1 = (function (){var statearr_17527 = state_17519;
(statearr_17527[(9)] = inst_17516);

return statearr_17527;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17519__$1,inst_17517);
} else {
if((state_val_17520 === (2))){
var inst_17496 = (state_17519[(8)]);
var inst_17498 = (inst_17496 < n);
var state_17519__$1 = state_17519;
if(cljs.core.truth_(inst_17498)){
var statearr_17528_17547 = state_17519__$1;
(statearr_17528_17547[(1)] = (4));

} else {
var statearr_17529_17548 = state_17519__$1;
(statearr_17529_17548[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17520 === (11))){
var inst_17496 = (state_17519[(8)]);
var inst_17506 = (state_17519[(2)]);
var inst_17507 = (inst_17496 + (1));
var inst_17496__$1 = inst_17507;
var state_17519__$1 = (function (){var statearr_17530 = state_17519;
(statearr_17530[(10)] = inst_17506);

(statearr_17530[(8)] = inst_17496__$1);

return statearr_17530;
})();
var statearr_17531_17549 = state_17519__$1;
(statearr_17531_17549[(2)] = null);

(statearr_17531_17549[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17520 === (9))){
var state_17519__$1 = state_17519;
var statearr_17532_17550 = state_17519__$1;
(statearr_17532_17550[(2)] = null);

(statearr_17532_17550[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17520 === (5))){
var state_17519__$1 = state_17519;
var statearr_17533_17551 = state_17519__$1;
(statearr_17533_17551[(2)] = null);

(statearr_17533_17551[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17520 === (10))){
var inst_17511 = (state_17519[(2)]);
var state_17519__$1 = state_17519;
var statearr_17534_17552 = state_17519__$1;
(statearr_17534_17552[(2)] = inst_17511);

(statearr_17534_17552[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17520 === (8))){
var inst_17501 = (state_17519[(7)]);
var state_17519__$1 = state_17519;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17519__$1,(11),out,inst_17501);
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
});})(c__6459__auto___17542,out))
;
return ((function (switch__6444__auto__,c__6459__auto___17542,out){
return (function() {
var state_machine__6445__auto__ = null;
var state_machine__6445__auto____0 = (function (){
var statearr_17538 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17538[(0)] = state_machine__6445__auto__);

(statearr_17538[(1)] = (1));

return statearr_17538;
});
var state_machine__6445__auto____1 = (function (state_17519){
while(true){
var ret_value__6446__auto__ = (function (){try{while(true){
var result__6447__auto__ = switch__6444__auto__.call(null,state_17519);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6447__auto__;
}
break;
}
}catch (e17539){if((e17539 instanceof Object)){
var ex__6448__auto__ = e17539;
var statearr_17540_17553 = state_17519;
(statearr_17540_17553[(5)] = ex__6448__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17519);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17539;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17554 = state_17519;
state_17519 = G__17554;
continue;
} else {
return ret_value__6446__auto__;
}
break;
}
});
state_machine__6445__auto__ = function(state_17519){
switch(arguments.length){
case 0:
return state_machine__6445__auto____0.call(this);
case 1:
return state_machine__6445__auto____1.call(this,state_17519);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6445__auto____0;
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6445__auto____1;
return state_machine__6445__auto__;
})()
;})(switch__6444__auto__,c__6459__auto___17542,out))
})();
var state__6461__auto__ = (function (){var statearr_17541 = f__6460__auto__.call(null);
(statearr_17541[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6459__auto___17542);

return statearr_17541;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6461__auto__);
});})(c__6459__auto___17542,out))
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
if(typeof cljs.core.async.t17562 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t17562 = (function (ch,f,map_LT_,meta17563){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta17563 = meta17563;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17562.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t17562.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t17562.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t17562.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t17565 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t17565 = (function (fn1,_,meta17563,map_LT_,f,ch,meta17566){
this.fn1 = fn1;
this._ = _;
this.meta17563 = meta17563;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta17566 = meta17566;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17565.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t17565.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t17565.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__17555_SHARP_){
return f1.call(null,(((p1__17555_SHARP_ == null))?null:self__.f.call(null,p1__17555_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t17565.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_17567){
var self__ = this;
var _17567__$1 = this;
return self__.meta17566;
});})(___$1))
;

cljs.core.async.t17565.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_17567,meta17566__$1){
var self__ = this;
var _17567__$1 = this;
return (new cljs.core.async.t17565(self__.fn1,self__._,self__.meta17563,self__.map_LT_,self__.f,self__.ch,meta17566__$1));
});})(___$1))
;

cljs.core.async.t17565.cljs$lang$type = true;

cljs.core.async.t17565.cljs$lang$ctorStr = "cljs.core.async/t17565";

cljs.core.async.t17565.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t17565");
});})(___$1))
;

cljs.core.async.__GT_t17565 = ((function (___$1){
return (function __GT_t17565(fn1__$1,___$2,meta17563__$1,map_LT___$1,f__$1,ch__$1,meta17566){
return (new cljs.core.async.t17565(fn1__$1,___$2,meta17563__$1,map_LT___$1,f__$1,ch__$1,meta17566));
});})(___$1))
;

}

return (new cljs.core.async.t17565(fn1,___$1,self__.meta17563,self__.map_LT_,self__.f,self__.ch,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),737,new cljs.core.Keyword(null,"column","column",2078222095),10,new cljs.core.Keyword(null,"line","line",212345235),731,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/chrism/dev/farn/resources/public/js/out/cljs/core/async.cljs"], null)));
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

cljs.core.async.t17562.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t17562.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t17562.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t17562.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17564){
var self__ = this;
var _17564__$1 = this;
return self__.meta17563;
});

cljs.core.async.t17562.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17564,meta17563__$1){
var self__ = this;
var _17564__$1 = this;
return (new cljs.core.async.t17562(self__.ch,self__.f,self__.map_LT_,meta17563__$1));
});

cljs.core.async.t17562.cljs$lang$type = true;

cljs.core.async.t17562.cljs$lang$ctorStr = "cljs.core.async/t17562";

cljs.core.async.t17562.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t17562");
});

cljs.core.async.__GT_t17562 = (function __GT_t17562(ch__$1,f__$1,map_LT___$1,meta17563){
return (new cljs.core.async.t17562(ch__$1,f__$1,map_LT___$1,meta17563));
});

}

return (new cljs.core.async.t17562(ch,f,map_LT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),743,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),722,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/chrism/dev/farn/resources/public/js/out/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){
if(typeof cljs.core.async.t17571 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t17571 = (function (ch,f,map_GT_,meta17572){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta17572 = meta17572;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17571.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t17571.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t17571.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t17571.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t17571.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t17571.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t17571.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17573){
var self__ = this;
var _17573__$1 = this;
return self__.meta17572;
});

cljs.core.async.t17571.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17573,meta17572__$1){
var self__ = this;
var _17573__$1 = this;
return (new cljs.core.async.t17571(self__.ch,self__.f,self__.map_GT_,meta17572__$1));
});

cljs.core.async.t17571.cljs$lang$type = true;

cljs.core.async.t17571.cljs$lang$ctorStr = "cljs.core.async/t17571";

cljs.core.async.t17571.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t17571");
});

cljs.core.async.__GT_t17571 = (function __GT_t17571(ch__$1,f__$1,map_GT___$1,meta17572){
return (new cljs.core.async.t17571(ch__$1,f__$1,map_GT___$1,meta17572));
});

}

return (new cljs.core.async.t17571(ch,f,map_GT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),34,new cljs.core.Keyword(null,"end-line","end-line",1837326455),757,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),748,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/chrism/dev/farn/resources/public/js/out/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){
if(typeof cljs.core.async.t17577 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t17577 = (function (ch,p,filter_GT_,meta17578){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta17578 = meta17578;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17577.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t17577.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t17577.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t17577.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t17577.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t17577.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t17577.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t17577.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17579){
var self__ = this;
var _17579__$1 = this;
return self__.meta17578;
});

cljs.core.async.t17577.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17579,meta17578__$1){
var self__ = this;
var _17579__$1 = this;
return (new cljs.core.async.t17577(self__.ch,self__.p,self__.filter_GT_,meta17578__$1));
});

cljs.core.async.t17577.cljs$lang$type = true;

cljs.core.async.t17577.cljs$lang$ctorStr = "cljs.core.async/t17577";

cljs.core.async.t17577.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t17577");
});

cljs.core.async.__GT_t17577 = (function __GT_t17577(ch__$1,p__$1,filter_GT___$1,meta17578){
return (new cljs.core.async.t17577(ch__$1,p__$1,filter_GT___$1,meta17578));
});

}

return (new cljs.core.async.t17577(ch,p,filter_GT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),48,new cljs.core.Keyword(null,"end-line","end-line",1837326455),774,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),762,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/chrism/dev/farn/resources/public/js/out/cljs/core/async.cljs"], null)));
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
var c__6459__auto___17662 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6459__auto___17662,out){
return (function (){
var f__6460__auto__ = (function (){var switch__6444__auto__ = ((function (c__6459__auto___17662,out){
return (function (state_17641){
var state_val_17642 = (state_17641[(1)]);
if((state_val_17642 === (7))){
var inst_17637 = (state_17641[(2)]);
var state_17641__$1 = state_17641;
var statearr_17643_17663 = state_17641__$1;
(statearr_17643_17663[(2)] = inst_17637);

(statearr_17643_17663[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17642 === (1))){
var state_17641__$1 = state_17641;
var statearr_17644_17664 = state_17641__$1;
(statearr_17644_17664[(2)] = null);

(statearr_17644_17664[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17642 === (4))){
var inst_17623 = (state_17641[(7)]);
var inst_17623__$1 = (state_17641[(2)]);
var inst_17624 = (inst_17623__$1 == null);
var state_17641__$1 = (function (){var statearr_17645 = state_17641;
(statearr_17645[(7)] = inst_17623__$1);

return statearr_17645;
})();
if(cljs.core.truth_(inst_17624)){
var statearr_17646_17665 = state_17641__$1;
(statearr_17646_17665[(1)] = (5));

} else {
var statearr_17647_17666 = state_17641__$1;
(statearr_17647_17666[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17642 === (6))){
var inst_17623 = (state_17641[(7)]);
var inst_17628 = p.call(null,inst_17623);
var state_17641__$1 = state_17641;
if(cljs.core.truth_(inst_17628)){
var statearr_17648_17667 = state_17641__$1;
(statearr_17648_17667[(1)] = (8));

} else {
var statearr_17649_17668 = state_17641__$1;
(statearr_17649_17668[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17642 === (3))){
var inst_17639 = (state_17641[(2)]);
var state_17641__$1 = state_17641;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17641__$1,inst_17639);
} else {
if((state_val_17642 === (2))){
var state_17641__$1 = state_17641;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17641__$1,(4),ch);
} else {
if((state_val_17642 === (11))){
var inst_17631 = (state_17641[(2)]);
var state_17641__$1 = state_17641;
var statearr_17650_17669 = state_17641__$1;
(statearr_17650_17669[(2)] = inst_17631);

(statearr_17650_17669[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17642 === (9))){
var state_17641__$1 = state_17641;
var statearr_17651_17670 = state_17641__$1;
(statearr_17651_17670[(2)] = null);

(statearr_17651_17670[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17642 === (5))){
var inst_17626 = cljs.core.async.close_BANG_.call(null,out);
var state_17641__$1 = state_17641;
var statearr_17652_17671 = state_17641__$1;
(statearr_17652_17671[(2)] = inst_17626);

(statearr_17652_17671[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17642 === (10))){
var inst_17634 = (state_17641[(2)]);
var state_17641__$1 = (function (){var statearr_17653 = state_17641;
(statearr_17653[(8)] = inst_17634);

return statearr_17653;
})();
var statearr_17654_17672 = state_17641__$1;
(statearr_17654_17672[(2)] = null);

(statearr_17654_17672[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17642 === (8))){
var inst_17623 = (state_17641[(7)]);
var state_17641__$1 = state_17641;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17641__$1,(11),out,inst_17623);
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
});})(c__6459__auto___17662,out))
;
return ((function (switch__6444__auto__,c__6459__auto___17662,out){
return (function() {
var state_machine__6445__auto__ = null;
var state_machine__6445__auto____0 = (function (){
var statearr_17658 = [null,null,null,null,null,null,null,null,null];
(statearr_17658[(0)] = state_machine__6445__auto__);

(statearr_17658[(1)] = (1));

return statearr_17658;
});
var state_machine__6445__auto____1 = (function (state_17641){
while(true){
var ret_value__6446__auto__ = (function (){try{while(true){
var result__6447__auto__ = switch__6444__auto__.call(null,state_17641);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6447__auto__;
}
break;
}
}catch (e17659){if((e17659 instanceof Object)){
var ex__6448__auto__ = e17659;
var statearr_17660_17673 = state_17641;
(statearr_17660_17673[(5)] = ex__6448__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17641);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17659;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17674 = state_17641;
state_17641 = G__17674;
continue;
} else {
return ret_value__6446__auto__;
}
break;
}
});
state_machine__6445__auto__ = function(state_17641){
switch(arguments.length){
case 0:
return state_machine__6445__auto____0.call(this);
case 1:
return state_machine__6445__auto____1.call(this,state_17641);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6445__auto____0;
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6445__auto____1;
return state_machine__6445__auto__;
})()
;})(switch__6444__auto__,c__6459__auto___17662,out))
})();
var state__6461__auto__ = (function (){var statearr_17661 = f__6460__auto__.call(null);
(statearr_17661[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6459__auto___17662);

return statearr_17661;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6461__auto__);
});})(c__6459__auto___17662,out))
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
return (function (state_17840){
var state_val_17841 = (state_17840[(1)]);
if((state_val_17841 === (7))){
var inst_17836 = (state_17840[(2)]);
var state_17840__$1 = state_17840;
var statearr_17842_17883 = state_17840__$1;
(statearr_17842_17883[(2)] = inst_17836);

(statearr_17842_17883[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17841 === (20))){
var inst_17806 = (state_17840[(7)]);
var inst_17817 = (state_17840[(2)]);
var inst_17818 = cljs.core.next.call(null,inst_17806);
var inst_17792 = inst_17818;
var inst_17793 = null;
var inst_17794 = (0);
var inst_17795 = (0);
var state_17840__$1 = (function (){var statearr_17843 = state_17840;
(statearr_17843[(8)] = inst_17794);

(statearr_17843[(9)] = inst_17792);

(statearr_17843[(10)] = inst_17793);

(statearr_17843[(11)] = inst_17817);

(statearr_17843[(12)] = inst_17795);

return statearr_17843;
})();
var statearr_17844_17884 = state_17840__$1;
(statearr_17844_17884[(2)] = null);

(statearr_17844_17884[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17841 === (1))){
var state_17840__$1 = state_17840;
var statearr_17845_17885 = state_17840__$1;
(statearr_17845_17885[(2)] = null);

(statearr_17845_17885[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17841 === (4))){
var inst_17781 = (state_17840[(13)]);
var inst_17781__$1 = (state_17840[(2)]);
var inst_17782 = (inst_17781__$1 == null);
var state_17840__$1 = (function (){var statearr_17846 = state_17840;
(statearr_17846[(13)] = inst_17781__$1);

return statearr_17846;
})();
if(cljs.core.truth_(inst_17782)){
var statearr_17847_17886 = state_17840__$1;
(statearr_17847_17886[(1)] = (5));

} else {
var statearr_17848_17887 = state_17840__$1;
(statearr_17848_17887[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17841 === (15))){
var state_17840__$1 = state_17840;
var statearr_17852_17888 = state_17840__$1;
(statearr_17852_17888[(2)] = null);

(statearr_17852_17888[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17841 === (21))){
var state_17840__$1 = state_17840;
var statearr_17853_17889 = state_17840__$1;
(statearr_17853_17889[(2)] = null);

(statearr_17853_17889[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17841 === (13))){
var inst_17794 = (state_17840[(8)]);
var inst_17792 = (state_17840[(9)]);
var inst_17793 = (state_17840[(10)]);
var inst_17795 = (state_17840[(12)]);
var inst_17802 = (state_17840[(2)]);
var inst_17803 = (inst_17795 + (1));
var tmp17849 = inst_17794;
var tmp17850 = inst_17792;
var tmp17851 = inst_17793;
var inst_17792__$1 = tmp17850;
var inst_17793__$1 = tmp17851;
var inst_17794__$1 = tmp17849;
var inst_17795__$1 = inst_17803;
var state_17840__$1 = (function (){var statearr_17854 = state_17840;
(statearr_17854[(8)] = inst_17794__$1);

(statearr_17854[(9)] = inst_17792__$1);

(statearr_17854[(14)] = inst_17802);

(statearr_17854[(10)] = inst_17793__$1);

(statearr_17854[(12)] = inst_17795__$1);

return statearr_17854;
})();
var statearr_17855_17890 = state_17840__$1;
(statearr_17855_17890[(2)] = null);

(statearr_17855_17890[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17841 === (22))){
var state_17840__$1 = state_17840;
var statearr_17856_17891 = state_17840__$1;
(statearr_17856_17891[(2)] = null);

(statearr_17856_17891[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17841 === (6))){
var inst_17781 = (state_17840[(13)]);
var inst_17790 = f.call(null,inst_17781);
var inst_17791 = cljs.core.seq.call(null,inst_17790);
var inst_17792 = inst_17791;
var inst_17793 = null;
var inst_17794 = (0);
var inst_17795 = (0);
var state_17840__$1 = (function (){var statearr_17857 = state_17840;
(statearr_17857[(8)] = inst_17794);

(statearr_17857[(9)] = inst_17792);

(statearr_17857[(10)] = inst_17793);

(statearr_17857[(12)] = inst_17795);

return statearr_17857;
})();
var statearr_17858_17892 = state_17840__$1;
(statearr_17858_17892[(2)] = null);

(statearr_17858_17892[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17841 === (17))){
var inst_17806 = (state_17840[(7)]);
var inst_17810 = cljs.core.chunk_first.call(null,inst_17806);
var inst_17811 = cljs.core.chunk_rest.call(null,inst_17806);
var inst_17812 = cljs.core.count.call(null,inst_17810);
var inst_17792 = inst_17811;
var inst_17793 = inst_17810;
var inst_17794 = inst_17812;
var inst_17795 = (0);
var state_17840__$1 = (function (){var statearr_17859 = state_17840;
(statearr_17859[(8)] = inst_17794);

(statearr_17859[(9)] = inst_17792);

(statearr_17859[(10)] = inst_17793);

(statearr_17859[(12)] = inst_17795);

return statearr_17859;
})();
var statearr_17860_17893 = state_17840__$1;
(statearr_17860_17893[(2)] = null);

(statearr_17860_17893[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17841 === (3))){
var inst_17838 = (state_17840[(2)]);
var state_17840__$1 = state_17840;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17840__$1,inst_17838);
} else {
if((state_val_17841 === (12))){
var inst_17826 = (state_17840[(2)]);
var state_17840__$1 = state_17840;
var statearr_17861_17894 = state_17840__$1;
(statearr_17861_17894[(2)] = inst_17826);

(statearr_17861_17894[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17841 === (2))){
var state_17840__$1 = state_17840;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17840__$1,(4),in$);
} else {
if((state_val_17841 === (23))){
var inst_17834 = (state_17840[(2)]);
var state_17840__$1 = state_17840;
var statearr_17862_17895 = state_17840__$1;
(statearr_17862_17895[(2)] = inst_17834);

(statearr_17862_17895[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17841 === (19))){
var inst_17821 = (state_17840[(2)]);
var state_17840__$1 = state_17840;
var statearr_17863_17896 = state_17840__$1;
(statearr_17863_17896[(2)] = inst_17821);

(statearr_17863_17896[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17841 === (11))){
var inst_17806 = (state_17840[(7)]);
var inst_17792 = (state_17840[(9)]);
var inst_17806__$1 = cljs.core.seq.call(null,inst_17792);
var state_17840__$1 = (function (){var statearr_17864 = state_17840;
(statearr_17864[(7)] = inst_17806__$1);

return statearr_17864;
})();
if(inst_17806__$1){
var statearr_17865_17897 = state_17840__$1;
(statearr_17865_17897[(1)] = (14));

} else {
var statearr_17866_17898 = state_17840__$1;
(statearr_17866_17898[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17841 === (9))){
var inst_17828 = (state_17840[(2)]);
var inst_17829 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_17840__$1 = (function (){var statearr_17867 = state_17840;
(statearr_17867[(15)] = inst_17828);

return statearr_17867;
})();
if(cljs.core.truth_(inst_17829)){
var statearr_17868_17899 = state_17840__$1;
(statearr_17868_17899[(1)] = (21));

} else {
var statearr_17869_17900 = state_17840__$1;
(statearr_17869_17900[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17841 === (5))){
var inst_17784 = cljs.core.async.close_BANG_.call(null,out);
var state_17840__$1 = state_17840;
var statearr_17870_17901 = state_17840__$1;
(statearr_17870_17901[(2)] = inst_17784);

(statearr_17870_17901[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17841 === (14))){
var inst_17806 = (state_17840[(7)]);
var inst_17808 = cljs.core.chunked_seq_QMARK_.call(null,inst_17806);
var state_17840__$1 = state_17840;
if(inst_17808){
var statearr_17871_17902 = state_17840__$1;
(statearr_17871_17902[(1)] = (17));

} else {
var statearr_17872_17903 = state_17840__$1;
(statearr_17872_17903[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17841 === (16))){
var inst_17824 = (state_17840[(2)]);
var state_17840__$1 = state_17840;
var statearr_17873_17904 = state_17840__$1;
(statearr_17873_17904[(2)] = inst_17824);

(statearr_17873_17904[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17841 === (10))){
var inst_17793 = (state_17840[(10)]);
var inst_17795 = (state_17840[(12)]);
var inst_17800 = cljs.core._nth.call(null,inst_17793,inst_17795);
var state_17840__$1 = state_17840;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17840__$1,(13),out,inst_17800);
} else {
if((state_val_17841 === (18))){
var inst_17806 = (state_17840[(7)]);
var inst_17815 = cljs.core.first.call(null,inst_17806);
var state_17840__$1 = state_17840;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17840__$1,(20),out,inst_17815);
} else {
if((state_val_17841 === (8))){
var inst_17794 = (state_17840[(8)]);
var inst_17795 = (state_17840[(12)]);
var inst_17797 = (inst_17795 < inst_17794);
var inst_17798 = inst_17797;
var state_17840__$1 = state_17840;
if(cljs.core.truth_(inst_17798)){
var statearr_17874_17905 = state_17840__$1;
(statearr_17874_17905[(1)] = (10));

} else {
var statearr_17875_17906 = state_17840__$1;
(statearr_17875_17906[(1)] = (11));

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
var statearr_17879 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17879[(0)] = state_machine__6445__auto__);

(statearr_17879[(1)] = (1));

return statearr_17879;
});
var state_machine__6445__auto____1 = (function (state_17840){
while(true){
var ret_value__6446__auto__ = (function (){try{while(true){
var result__6447__auto__ = switch__6444__auto__.call(null,state_17840);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6447__auto__;
}
break;
}
}catch (e17880){if((e17880 instanceof Object)){
var ex__6448__auto__ = e17880;
var statearr_17881_17907 = state_17840;
(statearr_17881_17907[(5)] = ex__6448__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17840);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17880;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17908 = state_17840;
state_17840 = G__17908;
continue;
} else {
return ret_value__6446__auto__;
}
break;
}
});
state_machine__6445__auto__ = function(state_17840){
switch(arguments.length){
case 0:
return state_machine__6445__auto____0.call(this);
case 1:
return state_machine__6445__auto____1.call(this,state_17840);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6445__auto____0;
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6445__auto____1;
return state_machine__6445__auto__;
})()
;})(switch__6444__auto__,c__6459__auto__))
})();
var state__6461__auto__ = (function (){var statearr_17882 = f__6460__auto__.call(null);
(statearr_17882[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6459__auto__);

return statearr_17882;
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
var c__6459__auto___18005 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6459__auto___18005,out){
return (function (){
var f__6460__auto__ = (function (){var switch__6444__auto__ = ((function (c__6459__auto___18005,out){
return (function (state_17980){
var state_val_17981 = (state_17980[(1)]);
if((state_val_17981 === (7))){
var inst_17975 = (state_17980[(2)]);
var state_17980__$1 = state_17980;
var statearr_17982_18006 = state_17980__$1;
(statearr_17982_18006[(2)] = inst_17975);

(statearr_17982_18006[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17981 === (1))){
var inst_17957 = null;
var state_17980__$1 = (function (){var statearr_17983 = state_17980;
(statearr_17983[(7)] = inst_17957);

return statearr_17983;
})();
var statearr_17984_18007 = state_17980__$1;
(statearr_17984_18007[(2)] = null);

(statearr_17984_18007[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17981 === (4))){
var inst_17960 = (state_17980[(8)]);
var inst_17960__$1 = (state_17980[(2)]);
var inst_17961 = (inst_17960__$1 == null);
var inst_17962 = cljs.core.not.call(null,inst_17961);
var state_17980__$1 = (function (){var statearr_17985 = state_17980;
(statearr_17985[(8)] = inst_17960__$1);

return statearr_17985;
})();
if(inst_17962){
var statearr_17986_18008 = state_17980__$1;
(statearr_17986_18008[(1)] = (5));

} else {
var statearr_17987_18009 = state_17980__$1;
(statearr_17987_18009[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17981 === (6))){
var state_17980__$1 = state_17980;
var statearr_17988_18010 = state_17980__$1;
(statearr_17988_18010[(2)] = null);

(statearr_17988_18010[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17981 === (3))){
var inst_17977 = (state_17980[(2)]);
var inst_17978 = cljs.core.async.close_BANG_.call(null,out);
var state_17980__$1 = (function (){var statearr_17989 = state_17980;
(statearr_17989[(9)] = inst_17977);

return statearr_17989;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17980__$1,inst_17978);
} else {
if((state_val_17981 === (2))){
var state_17980__$1 = state_17980;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17980__$1,(4),ch);
} else {
if((state_val_17981 === (11))){
var inst_17960 = (state_17980[(8)]);
var inst_17969 = (state_17980[(2)]);
var inst_17957 = inst_17960;
var state_17980__$1 = (function (){var statearr_17990 = state_17980;
(statearr_17990[(10)] = inst_17969);

(statearr_17990[(7)] = inst_17957);

return statearr_17990;
})();
var statearr_17991_18011 = state_17980__$1;
(statearr_17991_18011[(2)] = null);

(statearr_17991_18011[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17981 === (9))){
var inst_17960 = (state_17980[(8)]);
var state_17980__$1 = state_17980;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17980__$1,(11),out,inst_17960);
} else {
if((state_val_17981 === (5))){
var inst_17957 = (state_17980[(7)]);
var inst_17960 = (state_17980[(8)]);
var inst_17964 = cljs.core._EQ_.call(null,inst_17960,inst_17957);
var state_17980__$1 = state_17980;
if(inst_17964){
var statearr_17993_18012 = state_17980__$1;
(statearr_17993_18012[(1)] = (8));

} else {
var statearr_17994_18013 = state_17980__$1;
(statearr_17994_18013[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17981 === (10))){
var inst_17972 = (state_17980[(2)]);
var state_17980__$1 = state_17980;
var statearr_17995_18014 = state_17980__$1;
(statearr_17995_18014[(2)] = inst_17972);

(statearr_17995_18014[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17981 === (8))){
var inst_17957 = (state_17980[(7)]);
var tmp17992 = inst_17957;
var inst_17957__$1 = tmp17992;
var state_17980__$1 = (function (){var statearr_17996 = state_17980;
(statearr_17996[(7)] = inst_17957__$1);

return statearr_17996;
})();
var statearr_17997_18015 = state_17980__$1;
(statearr_17997_18015[(2)] = null);

(statearr_17997_18015[(1)] = (2));


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
});})(c__6459__auto___18005,out))
;
return ((function (switch__6444__auto__,c__6459__auto___18005,out){
return (function() {
var state_machine__6445__auto__ = null;
var state_machine__6445__auto____0 = (function (){
var statearr_18001 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_18001[(0)] = state_machine__6445__auto__);

(statearr_18001[(1)] = (1));

return statearr_18001;
});
var state_machine__6445__auto____1 = (function (state_17980){
while(true){
var ret_value__6446__auto__ = (function (){try{while(true){
var result__6447__auto__ = switch__6444__auto__.call(null,state_17980);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6447__auto__;
}
break;
}
}catch (e18002){if((e18002 instanceof Object)){
var ex__6448__auto__ = e18002;
var statearr_18003_18016 = state_17980;
(statearr_18003_18016[(5)] = ex__6448__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17980);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18002;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18017 = state_17980;
state_17980 = G__18017;
continue;
} else {
return ret_value__6446__auto__;
}
break;
}
});
state_machine__6445__auto__ = function(state_17980){
switch(arguments.length){
case 0:
return state_machine__6445__auto____0.call(this);
case 1:
return state_machine__6445__auto____1.call(this,state_17980);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6445__auto____0;
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6445__auto____1;
return state_machine__6445__auto__;
})()
;})(switch__6444__auto__,c__6459__auto___18005,out))
})();
var state__6461__auto__ = (function (){var statearr_18004 = f__6460__auto__.call(null);
(statearr_18004[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6459__auto___18005);

return statearr_18004;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6461__auto__);
});})(c__6459__auto___18005,out))
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
var c__6459__auto___18152 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6459__auto___18152,out){
return (function (){
var f__6460__auto__ = (function (){var switch__6444__auto__ = ((function (c__6459__auto___18152,out){
return (function (state_18122){
var state_val_18123 = (state_18122[(1)]);
if((state_val_18123 === (7))){
var inst_18118 = (state_18122[(2)]);
var state_18122__$1 = state_18122;
var statearr_18124_18153 = state_18122__$1;
(statearr_18124_18153[(2)] = inst_18118);

(statearr_18124_18153[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18123 === (1))){
var inst_18085 = (new Array(n));
var inst_18086 = inst_18085;
var inst_18087 = (0);
var state_18122__$1 = (function (){var statearr_18125 = state_18122;
(statearr_18125[(7)] = inst_18087);

(statearr_18125[(8)] = inst_18086);

return statearr_18125;
})();
var statearr_18126_18154 = state_18122__$1;
(statearr_18126_18154[(2)] = null);

(statearr_18126_18154[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18123 === (4))){
var inst_18090 = (state_18122[(9)]);
var inst_18090__$1 = (state_18122[(2)]);
var inst_18091 = (inst_18090__$1 == null);
var inst_18092 = cljs.core.not.call(null,inst_18091);
var state_18122__$1 = (function (){var statearr_18127 = state_18122;
(statearr_18127[(9)] = inst_18090__$1);

return statearr_18127;
})();
if(inst_18092){
var statearr_18128_18155 = state_18122__$1;
(statearr_18128_18155[(1)] = (5));

} else {
var statearr_18129_18156 = state_18122__$1;
(statearr_18129_18156[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18123 === (15))){
var inst_18112 = (state_18122[(2)]);
var state_18122__$1 = state_18122;
var statearr_18130_18157 = state_18122__$1;
(statearr_18130_18157[(2)] = inst_18112);

(statearr_18130_18157[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18123 === (13))){
var state_18122__$1 = state_18122;
var statearr_18131_18158 = state_18122__$1;
(statearr_18131_18158[(2)] = null);

(statearr_18131_18158[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18123 === (6))){
var inst_18087 = (state_18122[(7)]);
var inst_18108 = (inst_18087 > (0));
var state_18122__$1 = state_18122;
if(cljs.core.truth_(inst_18108)){
var statearr_18132_18159 = state_18122__$1;
(statearr_18132_18159[(1)] = (12));

} else {
var statearr_18133_18160 = state_18122__$1;
(statearr_18133_18160[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18123 === (3))){
var inst_18120 = (state_18122[(2)]);
var state_18122__$1 = state_18122;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18122__$1,inst_18120);
} else {
if((state_val_18123 === (12))){
var inst_18086 = (state_18122[(8)]);
var inst_18110 = cljs.core.vec.call(null,inst_18086);
var state_18122__$1 = state_18122;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18122__$1,(15),out,inst_18110);
} else {
if((state_val_18123 === (2))){
var state_18122__$1 = state_18122;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18122__$1,(4),ch);
} else {
if((state_val_18123 === (11))){
var inst_18102 = (state_18122[(2)]);
var inst_18103 = (new Array(n));
var inst_18086 = inst_18103;
var inst_18087 = (0);
var state_18122__$1 = (function (){var statearr_18134 = state_18122;
(statearr_18134[(7)] = inst_18087);

(statearr_18134[(8)] = inst_18086);

(statearr_18134[(10)] = inst_18102);

return statearr_18134;
})();
var statearr_18135_18161 = state_18122__$1;
(statearr_18135_18161[(2)] = null);

(statearr_18135_18161[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18123 === (9))){
var inst_18086 = (state_18122[(8)]);
var inst_18100 = cljs.core.vec.call(null,inst_18086);
var state_18122__$1 = state_18122;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18122__$1,(11),out,inst_18100);
} else {
if((state_val_18123 === (5))){
var inst_18087 = (state_18122[(7)]);
var inst_18090 = (state_18122[(9)]);
var inst_18086 = (state_18122[(8)]);
var inst_18095 = (state_18122[(11)]);
var inst_18094 = (inst_18086[inst_18087] = inst_18090);
var inst_18095__$1 = (inst_18087 + (1));
var inst_18096 = (inst_18095__$1 < n);
var state_18122__$1 = (function (){var statearr_18136 = state_18122;
(statearr_18136[(12)] = inst_18094);

(statearr_18136[(11)] = inst_18095__$1);

return statearr_18136;
})();
if(cljs.core.truth_(inst_18096)){
var statearr_18137_18162 = state_18122__$1;
(statearr_18137_18162[(1)] = (8));

} else {
var statearr_18138_18163 = state_18122__$1;
(statearr_18138_18163[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18123 === (14))){
var inst_18115 = (state_18122[(2)]);
var inst_18116 = cljs.core.async.close_BANG_.call(null,out);
var state_18122__$1 = (function (){var statearr_18140 = state_18122;
(statearr_18140[(13)] = inst_18115);

return statearr_18140;
})();
var statearr_18141_18164 = state_18122__$1;
(statearr_18141_18164[(2)] = inst_18116);

(statearr_18141_18164[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18123 === (10))){
var inst_18106 = (state_18122[(2)]);
var state_18122__$1 = state_18122;
var statearr_18142_18165 = state_18122__$1;
(statearr_18142_18165[(2)] = inst_18106);

(statearr_18142_18165[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18123 === (8))){
var inst_18086 = (state_18122[(8)]);
var inst_18095 = (state_18122[(11)]);
var tmp18139 = inst_18086;
var inst_18086__$1 = tmp18139;
var inst_18087 = inst_18095;
var state_18122__$1 = (function (){var statearr_18143 = state_18122;
(statearr_18143[(7)] = inst_18087);

(statearr_18143[(8)] = inst_18086__$1);

return statearr_18143;
})();
var statearr_18144_18166 = state_18122__$1;
(statearr_18144_18166[(2)] = null);

(statearr_18144_18166[(1)] = (2));


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
});})(c__6459__auto___18152,out))
;
return ((function (switch__6444__auto__,c__6459__auto___18152,out){
return (function() {
var state_machine__6445__auto__ = null;
var state_machine__6445__auto____0 = (function (){
var statearr_18148 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18148[(0)] = state_machine__6445__auto__);

(statearr_18148[(1)] = (1));

return statearr_18148;
});
var state_machine__6445__auto____1 = (function (state_18122){
while(true){
var ret_value__6446__auto__ = (function (){try{while(true){
var result__6447__auto__ = switch__6444__auto__.call(null,state_18122);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6447__auto__;
}
break;
}
}catch (e18149){if((e18149 instanceof Object)){
var ex__6448__auto__ = e18149;
var statearr_18150_18167 = state_18122;
(statearr_18150_18167[(5)] = ex__6448__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18122);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18149;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18168 = state_18122;
state_18122 = G__18168;
continue;
} else {
return ret_value__6446__auto__;
}
break;
}
});
state_machine__6445__auto__ = function(state_18122){
switch(arguments.length){
case 0:
return state_machine__6445__auto____0.call(this);
case 1:
return state_machine__6445__auto____1.call(this,state_18122);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6445__auto____0;
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6445__auto____1;
return state_machine__6445__auto__;
})()
;})(switch__6444__auto__,c__6459__auto___18152,out))
})();
var state__6461__auto__ = (function (){var statearr_18151 = f__6460__auto__.call(null);
(statearr_18151[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6459__auto___18152);

return statearr_18151;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6461__auto__);
});})(c__6459__auto___18152,out))
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
var c__6459__auto___18311 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6459__auto___18311,out){
return (function (){
var f__6460__auto__ = (function (){var switch__6444__auto__ = ((function (c__6459__auto___18311,out){
return (function (state_18281){
var state_val_18282 = (state_18281[(1)]);
if((state_val_18282 === (7))){
var inst_18277 = (state_18281[(2)]);
var state_18281__$1 = state_18281;
var statearr_18283_18312 = state_18281__$1;
(statearr_18283_18312[(2)] = inst_18277);

(statearr_18283_18312[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18282 === (1))){
var inst_18240 = [];
var inst_18241 = inst_18240;
var inst_18242 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_18281__$1 = (function (){var statearr_18284 = state_18281;
(statearr_18284[(7)] = inst_18242);

(statearr_18284[(8)] = inst_18241);

return statearr_18284;
})();
var statearr_18285_18313 = state_18281__$1;
(statearr_18285_18313[(2)] = null);

(statearr_18285_18313[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18282 === (4))){
var inst_18245 = (state_18281[(9)]);
var inst_18245__$1 = (state_18281[(2)]);
var inst_18246 = (inst_18245__$1 == null);
var inst_18247 = cljs.core.not.call(null,inst_18246);
var state_18281__$1 = (function (){var statearr_18286 = state_18281;
(statearr_18286[(9)] = inst_18245__$1);

return statearr_18286;
})();
if(inst_18247){
var statearr_18287_18314 = state_18281__$1;
(statearr_18287_18314[(1)] = (5));

} else {
var statearr_18288_18315 = state_18281__$1;
(statearr_18288_18315[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18282 === (15))){
var inst_18271 = (state_18281[(2)]);
var state_18281__$1 = state_18281;
var statearr_18289_18316 = state_18281__$1;
(statearr_18289_18316[(2)] = inst_18271);

(statearr_18289_18316[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18282 === (13))){
var state_18281__$1 = state_18281;
var statearr_18290_18317 = state_18281__$1;
(statearr_18290_18317[(2)] = null);

(statearr_18290_18317[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18282 === (6))){
var inst_18241 = (state_18281[(8)]);
var inst_18266 = inst_18241.length;
var inst_18267 = (inst_18266 > (0));
var state_18281__$1 = state_18281;
if(cljs.core.truth_(inst_18267)){
var statearr_18291_18318 = state_18281__$1;
(statearr_18291_18318[(1)] = (12));

} else {
var statearr_18292_18319 = state_18281__$1;
(statearr_18292_18319[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18282 === (3))){
var inst_18279 = (state_18281[(2)]);
var state_18281__$1 = state_18281;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18281__$1,inst_18279);
} else {
if((state_val_18282 === (12))){
var inst_18241 = (state_18281[(8)]);
var inst_18269 = cljs.core.vec.call(null,inst_18241);
var state_18281__$1 = state_18281;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18281__$1,(15),out,inst_18269);
} else {
if((state_val_18282 === (2))){
var state_18281__$1 = state_18281;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18281__$1,(4),ch);
} else {
if((state_val_18282 === (11))){
var inst_18249 = (state_18281[(10)]);
var inst_18245 = (state_18281[(9)]);
var inst_18259 = (state_18281[(2)]);
var inst_18260 = [];
var inst_18261 = inst_18260.push(inst_18245);
var inst_18241 = inst_18260;
var inst_18242 = inst_18249;
var state_18281__$1 = (function (){var statearr_18293 = state_18281;
(statearr_18293[(7)] = inst_18242);

(statearr_18293[(11)] = inst_18259);

(statearr_18293[(8)] = inst_18241);

(statearr_18293[(12)] = inst_18261);

return statearr_18293;
})();
var statearr_18294_18320 = state_18281__$1;
(statearr_18294_18320[(2)] = null);

(statearr_18294_18320[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18282 === (9))){
var inst_18241 = (state_18281[(8)]);
var inst_18257 = cljs.core.vec.call(null,inst_18241);
var state_18281__$1 = state_18281;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18281__$1,(11),out,inst_18257);
} else {
if((state_val_18282 === (5))){
var inst_18249 = (state_18281[(10)]);
var inst_18242 = (state_18281[(7)]);
var inst_18245 = (state_18281[(9)]);
var inst_18249__$1 = f.call(null,inst_18245);
var inst_18250 = cljs.core._EQ_.call(null,inst_18249__$1,inst_18242);
var inst_18251 = cljs.core.keyword_identical_QMARK_.call(null,inst_18242,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_18252 = (inst_18250) || (inst_18251);
var state_18281__$1 = (function (){var statearr_18295 = state_18281;
(statearr_18295[(10)] = inst_18249__$1);

return statearr_18295;
})();
if(cljs.core.truth_(inst_18252)){
var statearr_18296_18321 = state_18281__$1;
(statearr_18296_18321[(1)] = (8));

} else {
var statearr_18297_18322 = state_18281__$1;
(statearr_18297_18322[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18282 === (14))){
var inst_18274 = (state_18281[(2)]);
var inst_18275 = cljs.core.async.close_BANG_.call(null,out);
var state_18281__$1 = (function (){var statearr_18299 = state_18281;
(statearr_18299[(13)] = inst_18274);

return statearr_18299;
})();
var statearr_18300_18323 = state_18281__$1;
(statearr_18300_18323[(2)] = inst_18275);

(statearr_18300_18323[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18282 === (10))){
var inst_18264 = (state_18281[(2)]);
var state_18281__$1 = state_18281;
var statearr_18301_18324 = state_18281__$1;
(statearr_18301_18324[(2)] = inst_18264);

(statearr_18301_18324[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18282 === (8))){
var inst_18249 = (state_18281[(10)]);
var inst_18245 = (state_18281[(9)]);
var inst_18241 = (state_18281[(8)]);
var inst_18254 = inst_18241.push(inst_18245);
var tmp18298 = inst_18241;
var inst_18241__$1 = tmp18298;
var inst_18242 = inst_18249;
var state_18281__$1 = (function (){var statearr_18302 = state_18281;
(statearr_18302[(7)] = inst_18242);

(statearr_18302[(14)] = inst_18254);

(statearr_18302[(8)] = inst_18241__$1);

return statearr_18302;
})();
var statearr_18303_18325 = state_18281__$1;
(statearr_18303_18325[(2)] = null);

(statearr_18303_18325[(1)] = (2));


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
});})(c__6459__auto___18311,out))
;
return ((function (switch__6444__auto__,c__6459__auto___18311,out){
return (function() {
var state_machine__6445__auto__ = null;
var state_machine__6445__auto____0 = (function (){
var statearr_18307 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18307[(0)] = state_machine__6445__auto__);

(statearr_18307[(1)] = (1));

return statearr_18307;
});
var state_machine__6445__auto____1 = (function (state_18281){
while(true){
var ret_value__6446__auto__ = (function (){try{while(true){
var result__6447__auto__ = switch__6444__auto__.call(null,state_18281);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6447__auto__;
}
break;
}
}catch (e18308){if((e18308 instanceof Object)){
var ex__6448__auto__ = e18308;
var statearr_18309_18326 = state_18281;
(statearr_18309_18326[(5)] = ex__6448__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18281);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18308;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18327 = state_18281;
state_18281 = G__18327;
continue;
} else {
return ret_value__6446__auto__;
}
break;
}
});
state_machine__6445__auto__ = function(state_18281){
switch(arguments.length){
case 0:
return state_machine__6445__auto____0.call(this);
case 1:
return state_machine__6445__auto____1.call(this,state_18281);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6445__auto____0;
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6445__auto____1;
return state_machine__6445__auto__;
})()
;})(switch__6444__auto__,c__6459__auto___18311,out))
})();
var state__6461__auto__ = (function (){var statearr_18310 = f__6460__auto__.call(null);
(statearr_18310[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6459__auto___18311);

return statearr_18310;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6461__auto__);
});})(c__6459__auto___18311,out))
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