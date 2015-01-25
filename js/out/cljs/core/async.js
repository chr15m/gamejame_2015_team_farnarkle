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
if(typeof cljs.core.async.t16722 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t16722 = (function (f,fn_handler,meta16723){
this.f = f;
this.fn_handler = fn_handler;
this.meta16723 = meta16723;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16722.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t16722.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t16722.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t16722.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16724){
var self__ = this;
var _16724__$1 = this;
return self__.meta16723;
});

cljs.core.async.t16722.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16724,meta16723__$1){
var self__ = this;
var _16724__$1 = this;
return (new cljs.core.async.t16722(self__.f,self__.fn_handler,meta16723__$1));
});

cljs.core.async.t16722.cljs$lang$type = true;

cljs.core.async.t16722.cljs$lang$ctorStr = "cljs.core.async/t16722";

cljs.core.async.t16722.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t16722");
});

cljs.core.async.__GT_t16722 = (function __GT_t16722(f__$1,fn_handler__$1,meta16723){
return (new cljs.core.async.t16722(f__$1,fn_handler__$1,meta16723));
});

}

return (new cljs.core.async.t16722(f,fn_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),20,new cljs.core.Keyword(null,"end-line","end-line",1837326455),16,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),13,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/chrism/dev/farn/resources/public/js/out/cljs/core/async.cljs"], null)));
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
var G__16726 = buff;
if(G__16726){
var bit__4311__auto__ = null;
if(cljs.core.truth_((function (){var or__3630__auto__ = bit__4311__auto__;
if(cljs.core.truth_(or__3630__auto__)){
return or__3630__auto__;
} else {
return G__16726.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__16726.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__16726);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__16726);
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
var val_16727 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_16727);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_16727,ret){
return (function (){
return fn1.call(null,val_16727);
});})(val_16727,ret))
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
var n__4517__auto___16728 = n;
var x_16729 = (0);
while(true){
if((x_16729 < n__4517__auto___16728)){
(a[x_16729] = (0));

var G__16730 = (x_16729 + (1));
x_16729 = G__16730;
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

var G__16731 = (i + (1));
i = G__16731;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t16735 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t16735 = (function (flag,alt_flag,meta16736){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta16736 = meta16736;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16735.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t16735.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t16735.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t16735.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_16737){
var self__ = this;
var _16737__$1 = this;
return self__.meta16736;
});})(flag))
;

cljs.core.async.t16735.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_16737,meta16736__$1){
var self__ = this;
var _16737__$1 = this;
return (new cljs.core.async.t16735(self__.flag,self__.alt_flag,meta16736__$1));
});})(flag))
;

cljs.core.async.t16735.cljs$lang$type = true;

cljs.core.async.t16735.cljs$lang$ctorStr = "cljs.core.async/t16735";

cljs.core.async.t16735.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t16735");
});})(flag))
;

cljs.core.async.__GT_t16735 = ((function (flag){
return (function __GT_t16735(flag__$1,alt_flag__$1,meta16736){
return (new cljs.core.async.t16735(flag__$1,alt_flag__$1,meta16736));
});})(flag))
;

}

return (new cljs.core.async.t16735(flag,alt_flag,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),15,new cljs.core.Keyword(null,"end-line","end-line",1837326455),146,new cljs.core.Keyword(null,"column","column",2078222095),5,new cljs.core.Keyword(null,"line","line",212345235),141,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/chrism/dev/farn/resources/public/js/out/cljs/core/async.cljs"], null)));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){
if(typeof cljs.core.async.t16741 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t16741 = (function (cb,flag,alt_handler,meta16742){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta16742 = meta16742;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16741.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t16741.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t16741.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t16741.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16743){
var self__ = this;
var _16743__$1 = this;
return self__.meta16742;
});

cljs.core.async.t16741.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16743,meta16742__$1){
var self__ = this;
var _16743__$1 = this;
return (new cljs.core.async.t16741(self__.cb,self__.flag,self__.alt_handler,meta16742__$1));
});

cljs.core.async.t16741.cljs$lang$type = true;

cljs.core.async.t16741.cljs$lang$ctorStr = "cljs.core.async/t16741";

cljs.core.async.t16741.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t16741");
});

cljs.core.async.__GT_t16741 = (function __GT_t16741(cb__$1,flag__$1,alt_handler__$1,meta16742){
return (new cljs.core.async.t16741(cb__$1,flag__$1,alt_handler__$1,meta16742));
});

}

return (new cljs.core.async.t16741(cb,flag,alt_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),11,new cljs.core.Keyword(null,"end-line","end-line",1837326455),154,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),149,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/chrism/dev/farn/resources/public/js/out/cljs/core/async.cljs"], null)));
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
return (function (p1__16744_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__16744_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__16745_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__16745_SHARP_,port], null));
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
var G__16746 = (i + (1));
i = G__16746;
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
var alts_BANG___delegate = function (ports,p__16747){
var map__16749 = p__16747;
var map__16749__$1 = ((cljs.core.seq_QMARK_.call(null,map__16749))?cljs.core.apply.call(null,cljs.core.hash_map,map__16749):map__16749);
var opts = map__16749__$1;
throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__16747 = null;
if (arguments.length > 1) {
  p__16747 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return alts_BANG___delegate.call(this,ports,p__16747);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__16750){
var ports = cljs.core.first(arglist__16750);
var p__16747 = cljs.core.rest(arglist__16750);
return alts_BANG___delegate(ports,p__16747);
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
var c__6459__auto___16845 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6459__auto___16845){
return (function (){
var f__6460__auto__ = (function (){var switch__6444__auto__ = ((function (c__6459__auto___16845){
return (function (state_16821){
var state_val_16822 = (state_16821[(1)]);
if((state_val_16822 === (7))){
var inst_16817 = (state_16821[(2)]);
var state_16821__$1 = state_16821;
var statearr_16823_16846 = state_16821__$1;
(statearr_16823_16846[(2)] = inst_16817);

(statearr_16823_16846[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16822 === (1))){
var state_16821__$1 = state_16821;
var statearr_16824_16847 = state_16821__$1;
(statearr_16824_16847[(2)] = null);

(statearr_16824_16847[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16822 === (4))){
var inst_16800 = (state_16821[(7)]);
var inst_16800__$1 = (state_16821[(2)]);
var inst_16801 = (inst_16800__$1 == null);
var state_16821__$1 = (function (){var statearr_16825 = state_16821;
(statearr_16825[(7)] = inst_16800__$1);

return statearr_16825;
})();
if(cljs.core.truth_(inst_16801)){
var statearr_16826_16848 = state_16821__$1;
(statearr_16826_16848[(1)] = (5));

} else {
var statearr_16827_16849 = state_16821__$1;
(statearr_16827_16849[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16822 === (13))){
var state_16821__$1 = state_16821;
var statearr_16828_16850 = state_16821__$1;
(statearr_16828_16850[(2)] = null);

(statearr_16828_16850[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16822 === (6))){
var inst_16800 = (state_16821[(7)]);
var state_16821__$1 = state_16821;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16821__$1,(11),to,inst_16800);
} else {
if((state_val_16822 === (3))){
var inst_16819 = (state_16821[(2)]);
var state_16821__$1 = state_16821;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16821__$1,inst_16819);
} else {
if((state_val_16822 === (12))){
var state_16821__$1 = state_16821;
var statearr_16829_16851 = state_16821__$1;
(statearr_16829_16851[(2)] = null);

(statearr_16829_16851[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16822 === (2))){
var state_16821__$1 = state_16821;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16821__$1,(4),from);
} else {
if((state_val_16822 === (11))){
var inst_16810 = (state_16821[(2)]);
var state_16821__$1 = state_16821;
if(cljs.core.truth_(inst_16810)){
var statearr_16830_16852 = state_16821__$1;
(statearr_16830_16852[(1)] = (12));

} else {
var statearr_16831_16853 = state_16821__$1;
(statearr_16831_16853[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16822 === (9))){
var state_16821__$1 = state_16821;
var statearr_16832_16854 = state_16821__$1;
(statearr_16832_16854[(2)] = null);

(statearr_16832_16854[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16822 === (5))){
var state_16821__$1 = state_16821;
if(cljs.core.truth_(close_QMARK_)){
var statearr_16833_16855 = state_16821__$1;
(statearr_16833_16855[(1)] = (8));

} else {
var statearr_16834_16856 = state_16821__$1;
(statearr_16834_16856[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16822 === (14))){
var inst_16815 = (state_16821[(2)]);
var state_16821__$1 = state_16821;
var statearr_16835_16857 = state_16821__$1;
(statearr_16835_16857[(2)] = inst_16815);

(statearr_16835_16857[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16822 === (10))){
var inst_16807 = (state_16821[(2)]);
var state_16821__$1 = state_16821;
var statearr_16836_16858 = state_16821__$1;
(statearr_16836_16858[(2)] = inst_16807);

(statearr_16836_16858[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16822 === (8))){
var inst_16804 = cljs.core.async.close_BANG_.call(null,to);
var state_16821__$1 = state_16821;
var statearr_16837_16859 = state_16821__$1;
(statearr_16837_16859[(2)] = inst_16804);

(statearr_16837_16859[(1)] = (10));


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
});})(c__6459__auto___16845))
;
return ((function (switch__6444__auto__,c__6459__auto___16845){
return (function() {
var state_machine__6445__auto__ = null;
var state_machine__6445__auto____0 = (function (){
var statearr_16841 = [null,null,null,null,null,null,null,null];
(statearr_16841[(0)] = state_machine__6445__auto__);

(statearr_16841[(1)] = (1));

return statearr_16841;
});
var state_machine__6445__auto____1 = (function (state_16821){
while(true){
var ret_value__6446__auto__ = (function (){try{while(true){
var result__6447__auto__ = switch__6444__auto__.call(null,state_16821);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6447__auto__;
}
break;
}
}catch (e16842){if((e16842 instanceof Object)){
var ex__6448__auto__ = e16842;
var statearr_16843_16860 = state_16821;
(statearr_16843_16860[(5)] = ex__6448__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16821);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16842;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16861 = state_16821;
state_16821 = G__16861;
continue;
} else {
return ret_value__6446__auto__;
}
break;
}
});
state_machine__6445__auto__ = function(state_16821){
switch(arguments.length){
case 0:
return state_machine__6445__auto____0.call(this);
case 1:
return state_machine__6445__auto____1.call(this,state_16821);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6445__auto____0;
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6445__auto____1;
return state_machine__6445__auto__;
})()
;})(switch__6444__auto__,c__6459__auto___16845))
})();
var state__6461__auto__ = (function (){var statearr_16844 = f__6460__auto__.call(null);
(statearr_16844[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6459__auto___16845);

return statearr_16844;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6461__auto__);
});})(c__6459__auto___16845))
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
return (function (p__17045){
var vec__17046 = p__17045;
var v = cljs.core.nth.call(null,vec__17046,(0),null);
var p = cljs.core.nth.call(null,vec__17046,(1),null);
var job = vec__17046;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__6459__auto___17228 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6459__auto___17228,res,vec__17046,v,p,job,jobs,results){
return (function (){
var f__6460__auto__ = (function (){var switch__6444__auto__ = ((function (c__6459__auto___17228,res,vec__17046,v,p,job,jobs,results){
return (function (state_17051){
var state_val_17052 = (state_17051[(1)]);
if((state_val_17052 === (2))){
var inst_17048 = (state_17051[(2)]);
var inst_17049 = cljs.core.async.close_BANG_.call(null,res);
var state_17051__$1 = (function (){var statearr_17053 = state_17051;
(statearr_17053[(7)] = inst_17048);

return statearr_17053;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17051__$1,inst_17049);
} else {
if((state_val_17052 === (1))){
var state_17051__$1 = state_17051;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17051__$1,(2),res,v);
} else {
return null;
}
}
});})(c__6459__auto___17228,res,vec__17046,v,p,job,jobs,results))
;
return ((function (switch__6444__auto__,c__6459__auto___17228,res,vec__17046,v,p,job,jobs,results){
return (function() {
var state_machine__6445__auto__ = null;
var state_machine__6445__auto____0 = (function (){
var statearr_17057 = [null,null,null,null,null,null,null,null];
(statearr_17057[(0)] = state_machine__6445__auto__);

(statearr_17057[(1)] = (1));

return statearr_17057;
});
var state_machine__6445__auto____1 = (function (state_17051){
while(true){
var ret_value__6446__auto__ = (function (){try{while(true){
var result__6447__auto__ = switch__6444__auto__.call(null,state_17051);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6447__auto__;
}
break;
}
}catch (e17058){if((e17058 instanceof Object)){
var ex__6448__auto__ = e17058;
var statearr_17059_17229 = state_17051;
(statearr_17059_17229[(5)] = ex__6448__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17051);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17058;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17230 = state_17051;
state_17051 = G__17230;
continue;
} else {
return ret_value__6446__auto__;
}
break;
}
});
state_machine__6445__auto__ = function(state_17051){
switch(arguments.length){
case 0:
return state_machine__6445__auto____0.call(this);
case 1:
return state_machine__6445__auto____1.call(this,state_17051);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6445__auto____0;
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6445__auto____1;
return state_machine__6445__auto__;
})()
;})(switch__6444__auto__,c__6459__auto___17228,res,vec__17046,v,p,job,jobs,results))
})();
var state__6461__auto__ = (function (){var statearr_17060 = f__6460__auto__.call(null);
(statearr_17060[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6459__auto___17228);

return statearr_17060;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6461__auto__);
});})(c__6459__auto___17228,res,vec__17046,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__17061){
var vec__17062 = p__17061;
var v = cljs.core.nth.call(null,vec__17062,(0),null);
var p = cljs.core.nth.call(null,vec__17062,(1),null);
var job = vec__17062;
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
var n__4517__auto___17231 = n;
var __17232 = (0);
while(true){
if((__17232 < n__4517__auto___17231)){
var G__17063_17233 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__17063_17233) {
case "async":
var c__6459__auto___17235 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__17232,c__6459__auto___17235,G__17063_17233,n__4517__auto___17231,jobs,results,process,async){
return (function (){
var f__6460__auto__ = (function (){var switch__6444__auto__ = ((function (__17232,c__6459__auto___17235,G__17063_17233,n__4517__auto___17231,jobs,results,process,async){
return (function (state_17076){
var state_val_17077 = (state_17076[(1)]);
if((state_val_17077 === (7))){
var inst_17072 = (state_17076[(2)]);
var state_17076__$1 = state_17076;
var statearr_17078_17236 = state_17076__$1;
(statearr_17078_17236[(2)] = inst_17072);

(statearr_17078_17236[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17077 === (6))){
var state_17076__$1 = state_17076;
var statearr_17079_17237 = state_17076__$1;
(statearr_17079_17237[(2)] = null);

(statearr_17079_17237[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17077 === (5))){
var state_17076__$1 = state_17076;
var statearr_17080_17238 = state_17076__$1;
(statearr_17080_17238[(2)] = null);

(statearr_17080_17238[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17077 === (4))){
var inst_17066 = (state_17076[(2)]);
var inst_17067 = async.call(null,inst_17066);
var state_17076__$1 = state_17076;
if(cljs.core.truth_(inst_17067)){
var statearr_17081_17239 = state_17076__$1;
(statearr_17081_17239[(1)] = (5));

} else {
var statearr_17082_17240 = state_17076__$1;
(statearr_17082_17240[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17077 === (3))){
var inst_17074 = (state_17076[(2)]);
var state_17076__$1 = state_17076;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17076__$1,inst_17074);
} else {
if((state_val_17077 === (2))){
var state_17076__$1 = state_17076;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17076__$1,(4),jobs);
} else {
if((state_val_17077 === (1))){
var state_17076__$1 = state_17076;
var statearr_17083_17241 = state_17076__$1;
(statearr_17083_17241[(2)] = null);

(statearr_17083_17241[(1)] = (2));


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
});})(__17232,c__6459__auto___17235,G__17063_17233,n__4517__auto___17231,jobs,results,process,async))
;
return ((function (__17232,switch__6444__auto__,c__6459__auto___17235,G__17063_17233,n__4517__auto___17231,jobs,results,process,async){
return (function() {
var state_machine__6445__auto__ = null;
var state_machine__6445__auto____0 = (function (){
var statearr_17087 = [null,null,null,null,null,null,null];
(statearr_17087[(0)] = state_machine__6445__auto__);

(statearr_17087[(1)] = (1));

return statearr_17087;
});
var state_machine__6445__auto____1 = (function (state_17076){
while(true){
var ret_value__6446__auto__ = (function (){try{while(true){
var result__6447__auto__ = switch__6444__auto__.call(null,state_17076);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6447__auto__;
}
break;
}
}catch (e17088){if((e17088 instanceof Object)){
var ex__6448__auto__ = e17088;
var statearr_17089_17242 = state_17076;
(statearr_17089_17242[(5)] = ex__6448__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17076);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17088;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17243 = state_17076;
state_17076 = G__17243;
continue;
} else {
return ret_value__6446__auto__;
}
break;
}
});
state_machine__6445__auto__ = function(state_17076){
switch(arguments.length){
case 0:
return state_machine__6445__auto____0.call(this);
case 1:
return state_machine__6445__auto____1.call(this,state_17076);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6445__auto____0;
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6445__auto____1;
return state_machine__6445__auto__;
})()
;})(__17232,switch__6444__auto__,c__6459__auto___17235,G__17063_17233,n__4517__auto___17231,jobs,results,process,async))
})();
var state__6461__auto__ = (function (){var statearr_17090 = f__6460__auto__.call(null);
(statearr_17090[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6459__auto___17235);

return statearr_17090;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6461__auto__);
});})(__17232,c__6459__auto___17235,G__17063_17233,n__4517__auto___17231,jobs,results,process,async))
);


break;
case "compute":
var c__6459__auto___17244 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__17232,c__6459__auto___17244,G__17063_17233,n__4517__auto___17231,jobs,results,process,async){
return (function (){
var f__6460__auto__ = (function (){var switch__6444__auto__ = ((function (__17232,c__6459__auto___17244,G__17063_17233,n__4517__auto___17231,jobs,results,process,async){
return (function (state_17103){
var state_val_17104 = (state_17103[(1)]);
if((state_val_17104 === (7))){
var inst_17099 = (state_17103[(2)]);
var state_17103__$1 = state_17103;
var statearr_17105_17245 = state_17103__$1;
(statearr_17105_17245[(2)] = inst_17099);

(statearr_17105_17245[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17104 === (6))){
var state_17103__$1 = state_17103;
var statearr_17106_17246 = state_17103__$1;
(statearr_17106_17246[(2)] = null);

(statearr_17106_17246[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17104 === (5))){
var state_17103__$1 = state_17103;
var statearr_17107_17247 = state_17103__$1;
(statearr_17107_17247[(2)] = null);

(statearr_17107_17247[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17104 === (4))){
var inst_17093 = (state_17103[(2)]);
var inst_17094 = process.call(null,inst_17093);
var state_17103__$1 = state_17103;
if(cljs.core.truth_(inst_17094)){
var statearr_17108_17248 = state_17103__$1;
(statearr_17108_17248[(1)] = (5));

} else {
var statearr_17109_17249 = state_17103__$1;
(statearr_17109_17249[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17104 === (3))){
var inst_17101 = (state_17103[(2)]);
var state_17103__$1 = state_17103;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17103__$1,inst_17101);
} else {
if((state_val_17104 === (2))){
var state_17103__$1 = state_17103;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17103__$1,(4),jobs);
} else {
if((state_val_17104 === (1))){
var state_17103__$1 = state_17103;
var statearr_17110_17250 = state_17103__$1;
(statearr_17110_17250[(2)] = null);

(statearr_17110_17250[(1)] = (2));


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
});})(__17232,c__6459__auto___17244,G__17063_17233,n__4517__auto___17231,jobs,results,process,async))
;
return ((function (__17232,switch__6444__auto__,c__6459__auto___17244,G__17063_17233,n__4517__auto___17231,jobs,results,process,async){
return (function() {
var state_machine__6445__auto__ = null;
var state_machine__6445__auto____0 = (function (){
var statearr_17114 = [null,null,null,null,null,null,null];
(statearr_17114[(0)] = state_machine__6445__auto__);

(statearr_17114[(1)] = (1));

return statearr_17114;
});
var state_machine__6445__auto____1 = (function (state_17103){
while(true){
var ret_value__6446__auto__ = (function (){try{while(true){
var result__6447__auto__ = switch__6444__auto__.call(null,state_17103);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6447__auto__;
}
break;
}
}catch (e17115){if((e17115 instanceof Object)){
var ex__6448__auto__ = e17115;
var statearr_17116_17251 = state_17103;
(statearr_17116_17251[(5)] = ex__6448__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17103);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17115;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17252 = state_17103;
state_17103 = G__17252;
continue;
} else {
return ret_value__6446__auto__;
}
break;
}
});
state_machine__6445__auto__ = function(state_17103){
switch(arguments.length){
case 0:
return state_machine__6445__auto____0.call(this);
case 1:
return state_machine__6445__auto____1.call(this,state_17103);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6445__auto____0;
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6445__auto____1;
return state_machine__6445__auto__;
})()
;})(__17232,switch__6444__auto__,c__6459__auto___17244,G__17063_17233,n__4517__auto___17231,jobs,results,process,async))
})();
var state__6461__auto__ = (function (){var statearr_17117 = f__6460__auto__.call(null);
(statearr_17117[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6459__auto___17244);

return statearr_17117;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6461__auto__);
});})(__17232,c__6459__auto___17244,G__17063_17233,n__4517__auto___17231,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__17253 = (__17232 + (1));
__17232 = G__17253;
continue;
} else {
}
break;
}

var c__6459__auto___17254 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6459__auto___17254,jobs,results,process,async){
return (function (){
var f__6460__auto__ = (function (){var switch__6444__auto__ = ((function (c__6459__auto___17254,jobs,results,process,async){
return (function (state_17139){
var state_val_17140 = (state_17139[(1)]);
if((state_val_17140 === (9))){
var inst_17132 = (state_17139[(2)]);
var state_17139__$1 = (function (){var statearr_17141 = state_17139;
(statearr_17141[(7)] = inst_17132);

return statearr_17141;
})();
var statearr_17142_17255 = state_17139__$1;
(statearr_17142_17255[(2)] = null);

(statearr_17142_17255[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17140 === (8))){
var inst_17125 = (state_17139[(8)]);
var inst_17130 = (state_17139[(2)]);
var state_17139__$1 = (function (){var statearr_17143 = state_17139;
(statearr_17143[(9)] = inst_17130);

return statearr_17143;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17139__$1,(9),results,inst_17125);
} else {
if((state_val_17140 === (7))){
var inst_17135 = (state_17139[(2)]);
var state_17139__$1 = state_17139;
var statearr_17144_17256 = state_17139__$1;
(statearr_17144_17256[(2)] = inst_17135);

(statearr_17144_17256[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17140 === (6))){
var inst_17125 = (state_17139[(8)]);
var inst_17120 = (state_17139[(10)]);
var inst_17125__$1 = cljs.core.async.chan.call(null,(1));
var inst_17126 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_17127 = [inst_17120,inst_17125__$1];
var inst_17128 = (new cljs.core.PersistentVector(null,2,(5),inst_17126,inst_17127,null));
var state_17139__$1 = (function (){var statearr_17145 = state_17139;
(statearr_17145[(8)] = inst_17125__$1);

return statearr_17145;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17139__$1,(8),jobs,inst_17128);
} else {
if((state_val_17140 === (5))){
var inst_17123 = cljs.core.async.close_BANG_.call(null,jobs);
var state_17139__$1 = state_17139;
var statearr_17146_17257 = state_17139__$1;
(statearr_17146_17257[(2)] = inst_17123);

(statearr_17146_17257[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17140 === (4))){
var inst_17120 = (state_17139[(10)]);
var inst_17120__$1 = (state_17139[(2)]);
var inst_17121 = (inst_17120__$1 == null);
var state_17139__$1 = (function (){var statearr_17147 = state_17139;
(statearr_17147[(10)] = inst_17120__$1);

return statearr_17147;
})();
if(cljs.core.truth_(inst_17121)){
var statearr_17148_17258 = state_17139__$1;
(statearr_17148_17258[(1)] = (5));

} else {
var statearr_17149_17259 = state_17139__$1;
(statearr_17149_17259[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17140 === (3))){
var inst_17137 = (state_17139[(2)]);
var state_17139__$1 = state_17139;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17139__$1,inst_17137);
} else {
if((state_val_17140 === (2))){
var state_17139__$1 = state_17139;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17139__$1,(4),from);
} else {
if((state_val_17140 === (1))){
var state_17139__$1 = state_17139;
var statearr_17150_17260 = state_17139__$1;
(statearr_17150_17260[(2)] = null);

(statearr_17150_17260[(1)] = (2));


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
});})(c__6459__auto___17254,jobs,results,process,async))
;
return ((function (switch__6444__auto__,c__6459__auto___17254,jobs,results,process,async){
return (function() {
var state_machine__6445__auto__ = null;
var state_machine__6445__auto____0 = (function (){
var statearr_17154 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17154[(0)] = state_machine__6445__auto__);

(statearr_17154[(1)] = (1));

return statearr_17154;
});
var state_machine__6445__auto____1 = (function (state_17139){
while(true){
var ret_value__6446__auto__ = (function (){try{while(true){
var result__6447__auto__ = switch__6444__auto__.call(null,state_17139);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6447__auto__;
}
break;
}
}catch (e17155){if((e17155 instanceof Object)){
var ex__6448__auto__ = e17155;
var statearr_17156_17261 = state_17139;
(statearr_17156_17261[(5)] = ex__6448__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17139);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17155;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17262 = state_17139;
state_17139 = G__17262;
continue;
} else {
return ret_value__6446__auto__;
}
break;
}
});
state_machine__6445__auto__ = function(state_17139){
switch(arguments.length){
case 0:
return state_machine__6445__auto____0.call(this);
case 1:
return state_machine__6445__auto____1.call(this,state_17139);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6445__auto____0;
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6445__auto____1;
return state_machine__6445__auto__;
})()
;})(switch__6444__auto__,c__6459__auto___17254,jobs,results,process,async))
})();
var state__6461__auto__ = (function (){var statearr_17157 = f__6460__auto__.call(null);
(statearr_17157[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6459__auto___17254);

return statearr_17157;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6461__auto__);
});})(c__6459__auto___17254,jobs,results,process,async))
);


var c__6459__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6459__auto__,jobs,results,process,async){
return (function (){
var f__6460__auto__ = (function (){var switch__6444__auto__ = ((function (c__6459__auto__,jobs,results,process,async){
return (function (state_17195){
var state_val_17196 = (state_17195[(1)]);
if((state_val_17196 === (7))){
var inst_17191 = (state_17195[(2)]);
var state_17195__$1 = state_17195;
var statearr_17197_17263 = state_17195__$1;
(statearr_17197_17263[(2)] = inst_17191);

(statearr_17197_17263[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17196 === (20))){
var state_17195__$1 = state_17195;
var statearr_17198_17264 = state_17195__$1;
(statearr_17198_17264[(2)] = null);

(statearr_17198_17264[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17196 === (1))){
var state_17195__$1 = state_17195;
var statearr_17199_17265 = state_17195__$1;
(statearr_17199_17265[(2)] = null);

(statearr_17199_17265[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17196 === (4))){
var inst_17160 = (state_17195[(7)]);
var inst_17160__$1 = (state_17195[(2)]);
var inst_17161 = (inst_17160__$1 == null);
var state_17195__$1 = (function (){var statearr_17200 = state_17195;
(statearr_17200[(7)] = inst_17160__$1);

return statearr_17200;
})();
if(cljs.core.truth_(inst_17161)){
var statearr_17201_17266 = state_17195__$1;
(statearr_17201_17266[(1)] = (5));

} else {
var statearr_17202_17267 = state_17195__$1;
(statearr_17202_17267[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17196 === (15))){
var inst_17173 = (state_17195[(8)]);
var state_17195__$1 = state_17195;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17195__$1,(18),to,inst_17173);
} else {
if((state_val_17196 === (21))){
var inst_17186 = (state_17195[(2)]);
var state_17195__$1 = state_17195;
var statearr_17203_17268 = state_17195__$1;
(statearr_17203_17268[(2)] = inst_17186);

(statearr_17203_17268[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17196 === (13))){
var inst_17188 = (state_17195[(2)]);
var state_17195__$1 = (function (){var statearr_17204 = state_17195;
(statearr_17204[(9)] = inst_17188);

return statearr_17204;
})();
var statearr_17205_17269 = state_17195__$1;
(statearr_17205_17269[(2)] = null);

(statearr_17205_17269[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17196 === (6))){
var inst_17160 = (state_17195[(7)]);
var state_17195__$1 = state_17195;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17195__$1,(11),inst_17160);
} else {
if((state_val_17196 === (17))){
var inst_17181 = (state_17195[(2)]);
var state_17195__$1 = state_17195;
if(cljs.core.truth_(inst_17181)){
var statearr_17206_17270 = state_17195__$1;
(statearr_17206_17270[(1)] = (19));

} else {
var statearr_17207_17271 = state_17195__$1;
(statearr_17207_17271[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17196 === (3))){
var inst_17193 = (state_17195[(2)]);
var state_17195__$1 = state_17195;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17195__$1,inst_17193);
} else {
if((state_val_17196 === (12))){
var inst_17170 = (state_17195[(10)]);
var state_17195__$1 = state_17195;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17195__$1,(14),inst_17170);
} else {
if((state_val_17196 === (2))){
var state_17195__$1 = state_17195;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17195__$1,(4),results);
} else {
if((state_val_17196 === (19))){
var state_17195__$1 = state_17195;
var statearr_17208_17272 = state_17195__$1;
(statearr_17208_17272[(2)] = null);

(statearr_17208_17272[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17196 === (11))){
var inst_17170 = (state_17195[(2)]);
var state_17195__$1 = (function (){var statearr_17209 = state_17195;
(statearr_17209[(10)] = inst_17170);

return statearr_17209;
})();
var statearr_17210_17273 = state_17195__$1;
(statearr_17210_17273[(2)] = null);

(statearr_17210_17273[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17196 === (9))){
var state_17195__$1 = state_17195;
var statearr_17211_17274 = state_17195__$1;
(statearr_17211_17274[(2)] = null);

(statearr_17211_17274[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17196 === (5))){
var state_17195__$1 = state_17195;
if(cljs.core.truth_(close_QMARK_)){
var statearr_17212_17275 = state_17195__$1;
(statearr_17212_17275[(1)] = (8));

} else {
var statearr_17213_17276 = state_17195__$1;
(statearr_17213_17276[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17196 === (14))){
var inst_17175 = (state_17195[(11)]);
var inst_17173 = (state_17195[(8)]);
var inst_17173__$1 = (state_17195[(2)]);
var inst_17174 = (inst_17173__$1 == null);
var inst_17175__$1 = cljs.core.not.call(null,inst_17174);
var state_17195__$1 = (function (){var statearr_17214 = state_17195;
(statearr_17214[(11)] = inst_17175__$1);

(statearr_17214[(8)] = inst_17173__$1);

return statearr_17214;
})();
if(inst_17175__$1){
var statearr_17215_17277 = state_17195__$1;
(statearr_17215_17277[(1)] = (15));

} else {
var statearr_17216_17278 = state_17195__$1;
(statearr_17216_17278[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17196 === (16))){
var inst_17175 = (state_17195[(11)]);
var state_17195__$1 = state_17195;
var statearr_17217_17279 = state_17195__$1;
(statearr_17217_17279[(2)] = inst_17175);

(statearr_17217_17279[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17196 === (10))){
var inst_17167 = (state_17195[(2)]);
var state_17195__$1 = state_17195;
var statearr_17218_17280 = state_17195__$1;
(statearr_17218_17280[(2)] = inst_17167);

(statearr_17218_17280[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17196 === (18))){
var inst_17178 = (state_17195[(2)]);
var state_17195__$1 = state_17195;
var statearr_17219_17281 = state_17195__$1;
(statearr_17219_17281[(2)] = inst_17178);

(statearr_17219_17281[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17196 === (8))){
var inst_17164 = cljs.core.async.close_BANG_.call(null,to);
var state_17195__$1 = state_17195;
var statearr_17220_17282 = state_17195__$1;
(statearr_17220_17282[(2)] = inst_17164);

(statearr_17220_17282[(1)] = (10));


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
var statearr_17224 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17224[(0)] = state_machine__6445__auto__);

(statearr_17224[(1)] = (1));

return statearr_17224;
});
var state_machine__6445__auto____1 = (function (state_17195){
while(true){
var ret_value__6446__auto__ = (function (){try{while(true){
var result__6447__auto__ = switch__6444__auto__.call(null,state_17195);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6447__auto__;
}
break;
}
}catch (e17225){if((e17225 instanceof Object)){
var ex__6448__auto__ = e17225;
var statearr_17226_17283 = state_17195;
(statearr_17226_17283[(5)] = ex__6448__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17195);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17225;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17284 = state_17195;
state_17195 = G__17284;
continue;
} else {
return ret_value__6446__auto__;
}
break;
}
});
state_machine__6445__auto__ = function(state_17195){
switch(arguments.length){
case 0:
return state_machine__6445__auto____0.call(this);
case 1:
return state_machine__6445__auto____1.call(this,state_17195);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6445__auto____0;
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6445__auto____1;
return state_machine__6445__auto__;
})()
;})(switch__6444__auto__,c__6459__auto__,jobs,results,process,async))
})();
var state__6461__auto__ = (function (){var statearr_17227 = f__6460__auto__.call(null);
(statearr_17227[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6459__auto__);

return statearr_17227;
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
var c__6459__auto___17385 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6459__auto___17385,tc,fc){
return (function (){
var f__6460__auto__ = (function (){var switch__6444__auto__ = ((function (c__6459__auto___17385,tc,fc){
return (function (state_17360){
var state_val_17361 = (state_17360[(1)]);
if((state_val_17361 === (7))){
var inst_17356 = (state_17360[(2)]);
var state_17360__$1 = state_17360;
var statearr_17362_17386 = state_17360__$1;
(statearr_17362_17386[(2)] = inst_17356);

(statearr_17362_17386[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17361 === (1))){
var state_17360__$1 = state_17360;
var statearr_17363_17387 = state_17360__$1;
(statearr_17363_17387[(2)] = null);

(statearr_17363_17387[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17361 === (4))){
var inst_17337 = (state_17360[(7)]);
var inst_17337__$1 = (state_17360[(2)]);
var inst_17338 = (inst_17337__$1 == null);
var state_17360__$1 = (function (){var statearr_17364 = state_17360;
(statearr_17364[(7)] = inst_17337__$1);

return statearr_17364;
})();
if(cljs.core.truth_(inst_17338)){
var statearr_17365_17388 = state_17360__$1;
(statearr_17365_17388[(1)] = (5));

} else {
var statearr_17366_17389 = state_17360__$1;
(statearr_17366_17389[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17361 === (13))){
var state_17360__$1 = state_17360;
var statearr_17367_17390 = state_17360__$1;
(statearr_17367_17390[(2)] = null);

(statearr_17367_17390[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17361 === (6))){
var inst_17337 = (state_17360[(7)]);
var inst_17343 = p.call(null,inst_17337);
var state_17360__$1 = state_17360;
if(cljs.core.truth_(inst_17343)){
var statearr_17368_17391 = state_17360__$1;
(statearr_17368_17391[(1)] = (9));

} else {
var statearr_17369_17392 = state_17360__$1;
(statearr_17369_17392[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17361 === (3))){
var inst_17358 = (state_17360[(2)]);
var state_17360__$1 = state_17360;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17360__$1,inst_17358);
} else {
if((state_val_17361 === (12))){
var state_17360__$1 = state_17360;
var statearr_17370_17393 = state_17360__$1;
(statearr_17370_17393[(2)] = null);

(statearr_17370_17393[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17361 === (2))){
var state_17360__$1 = state_17360;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17360__$1,(4),ch);
} else {
if((state_val_17361 === (11))){
var inst_17337 = (state_17360[(7)]);
var inst_17347 = (state_17360[(2)]);
var state_17360__$1 = state_17360;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17360__$1,(8),inst_17347,inst_17337);
} else {
if((state_val_17361 === (9))){
var state_17360__$1 = state_17360;
var statearr_17371_17394 = state_17360__$1;
(statearr_17371_17394[(2)] = tc);

(statearr_17371_17394[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17361 === (5))){
var inst_17340 = cljs.core.async.close_BANG_.call(null,tc);
var inst_17341 = cljs.core.async.close_BANG_.call(null,fc);
var state_17360__$1 = (function (){var statearr_17372 = state_17360;
(statearr_17372[(8)] = inst_17340);

return statearr_17372;
})();
var statearr_17373_17395 = state_17360__$1;
(statearr_17373_17395[(2)] = inst_17341);

(statearr_17373_17395[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17361 === (14))){
var inst_17354 = (state_17360[(2)]);
var state_17360__$1 = state_17360;
var statearr_17374_17396 = state_17360__$1;
(statearr_17374_17396[(2)] = inst_17354);

(statearr_17374_17396[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17361 === (10))){
var state_17360__$1 = state_17360;
var statearr_17375_17397 = state_17360__$1;
(statearr_17375_17397[(2)] = fc);

(statearr_17375_17397[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17361 === (8))){
var inst_17349 = (state_17360[(2)]);
var state_17360__$1 = state_17360;
if(cljs.core.truth_(inst_17349)){
var statearr_17376_17398 = state_17360__$1;
(statearr_17376_17398[(1)] = (12));

} else {
var statearr_17377_17399 = state_17360__$1;
(statearr_17377_17399[(1)] = (13));

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
});})(c__6459__auto___17385,tc,fc))
;
return ((function (switch__6444__auto__,c__6459__auto___17385,tc,fc){
return (function() {
var state_machine__6445__auto__ = null;
var state_machine__6445__auto____0 = (function (){
var statearr_17381 = [null,null,null,null,null,null,null,null,null];
(statearr_17381[(0)] = state_machine__6445__auto__);

(statearr_17381[(1)] = (1));

return statearr_17381;
});
var state_machine__6445__auto____1 = (function (state_17360){
while(true){
var ret_value__6446__auto__ = (function (){try{while(true){
var result__6447__auto__ = switch__6444__auto__.call(null,state_17360);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6447__auto__;
}
break;
}
}catch (e17382){if((e17382 instanceof Object)){
var ex__6448__auto__ = e17382;
var statearr_17383_17400 = state_17360;
(statearr_17383_17400[(5)] = ex__6448__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17360);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17382;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17401 = state_17360;
state_17360 = G__17401;
continue;
} else {
return ret_value__6446__auto__;
}
break;
}
});
state_machine__6445__auto__ = function(state_17360){
switch(arguments.length){
case 0:
return state_machine__6445__auto____0.call(this);
case 1:
return state_machine__6445__auto____1.call(this,state_17360);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6445__auto____0;
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6445__auto____1;
return state_machine__6445__auto__;
})()
;})(switch__6444__auto__,c__6459__auto___17385,tc,fc))
})();
var state__6461__auto__ = (function (){var statearr_17384 = f__6460__auto__.call(null);
(statearr_17384[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6459__auto___17385);

return statearr_17384;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6461__auto__);
});})(c__6459__auto___17385,tc,fc))
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
return (function (state_17448){
var state_val_17449 = (state_17448[(1)]);
if((state_val_17449 === (7))){
var inst_17444 = (state_17448[(2)]);
var state_17448__$1 = state_17448;
var statearr_17450_17466 = state_17448__$1;
(statearr_17450_17466[(2)] = inst_17444);

(statearr_17450_17466[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17449 === (6))){
var inst_17434 = (state_17448[(7)]);
var inst_17437 = (state_17448[(8)]);
var inst_17441 = f.call(null,inst_17434,inst_17437);
var inst_17434__$1 = inst_17441;
var state_17448__$1 = (function (){var statearr_17451 = state_17448;
(statearr_17451[(7)] = inst_17434__$1);

return statearr_17451;
})();
var statearr_17452_17467 = state_17448__$1;
(statearr_17452_17467[(2)] = null);

(statearr_17452_17467[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17449 === (5))){
var inst_17434 = (state_17448[(7)]);
var state_17448__$1 = state_17448;
var statearr_17453_17468 = state_17448__$1;
(statearr_17453_17468[(2)] = inst_17434);

(statearr_17453_17468[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17449 === (4))){
var inst_17437 = (state_17448[(8)]);
var inst_17437__$1 = (state_17448[(2)]);
var inst_17438 = (inst_17437__$1 == null);
var state_17448__$1 = (function (){var statearr_17454 = state_17448;
(statearr_17454[(8)] = inst_17437__$1);

return statearr_17454;
})();
if(cljs.core.truth_(inst_17438)){
var statearr_17455_17469 = state_17448__$1;
(statearr_17455_17469[(1)] = (5));

} else {
var statearr_17456_17470 = state_17448__$1;
(statearr_17456_17470[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17449 === (3))){
var inst_17446 = (state_17448[(2)]);
var state_17448__$1 = state_17448;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17448__$1,inst_17446);
} else {
if((state_val_17449 === (2))){
var state_17448__$1 = state_17448;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17448__$1,(4),ch);
} else {
if((state_val_17449 === (1))){
var inst_17434 = init;
var state_17448__$1 = (function (){var statearr_17457 = state_17448;
(statearr_17457[(7)] = inst_17434);

return statearr_17457;
})();
var statearr_17458_17471 = state_17448__$1;
(statearr_17458_17471[(2)] = null);

(statearr_17458_17471[(1)] = (2));


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
var statearr_17462 = [null,null,null,null,null,null,null,null,null];
(statearr_17462[(0)] = state_machine__6445__auto__);

(statearr_17462[(1)] = (1));

return statearr_17462;
});
var state_machine__6445__auto____1 = (function (state_17448){
while(true){
var ret_value__6446__auto__ = (function (){try{while(true){
var result__6447__auto__ = switch__6444__auto__.call(null,state_17448);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6447__auto__;
}
break;
}
}catch (e17463){if((e17463 instanceof Object)){
var ex__6448__auto__ = e17463;
var statearr_17464_17472 = state_17448;
(statearr_17464_17472[(5)] = ex__6448__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17448);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17463;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17473 = state_17448;
state_17448 = G__17473;
continue;
} else {
return ret_value__6446__auto__;
}
break;
}
});
state_machine__6445__auto__ = function(state_17448){
switch(arguments.length){
case 0:
return state_machine__6445__auto____0.call(this);
case 1:
return state_machine__6445__auto____1.call(this,state_17448);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6445__auto____0;
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6445__auto____1;
return state_machine__6445__auto__;
})()
;})(switch__6444__auto__,c__6459__auto__))
})();
var state__6461__auto__ = (function (){var statearr_17465 = f__6460__auto__.call(null);
(statearr_17465[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6459__auto__);

return statearr_17465;
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
return (function (state_17547){
var state_val_17548 = (state_17547[(1)]);
if((state_val_17548 === (7))){
var inst_17529 = (state_17547[(2)]);
var state_17547__$1 = state_17547;
var statearr_17549_17572 = state_17547__$1;
(statearr_17549_17572[(2)] = inst_17529);

(statearr_17549_17572[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17548 === (1))){
var inst_17523 = cljs.core.seq.call(null,coll);
var inst_17524 = inst_17523;
var state_17547__$1 = (function (){var statearr_17550 = state_17547;
(statearr_17550[(7)] = inst_17524);

return statearr_17550;
})();
var statearr_17551_17573 = state_17547__$1;
(statearr_17551_17573[(2)] = null);

(statearr_17551_17573[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17548 === (4))){
var inst_17524 = (state_17547[(7)]);
var inst_17527 = cljs.core.first.call(null,inst_17524);
var state_17547__$1 = state_17547;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17547__$1,(7),ch,inst_17527);
} else {
if((state_val_17548 === (13))){
var inst_17541 = (state_17547[(2)]);
var state_17547__$1 = state_17547;
var statearr_17552_17574 = state_17547__$1;
(statearr_17552_17574[(2)] = inst_17541);

(statearr_17552_17574[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17548 === (6))){
var inst_17532 = (state_17547[(2)]);
var state_17547__$1 = state_17547;
if(cljs.core.truth_(inst_17532)){
var statearr_17553_17575 = state_17547__$1;
(statearr_17553_17575[(1)] = (8));

} else {
var statearr_17554_17576 = state_17547__$1;
(statearr_17554_17576[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17548 === (3))){
var inst_17545 = (state_17547[(2)]);
var state_17547__$1 = state_17547;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17547__$1,inst_17545);
} else {
if((state_val_17548 === (12))){
var state_17547__$1 = state_17547;
var statearr_17555_17577 = state_17547__$1;
(statearr_17555_17577[(2)] = null);

(statearr_17555_17577[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17548 === (2))){
var inst_17524 = (state_17547[(7)]);
var state_17547__$1 = state_17547;
if(cljs.core.truth_(inst_17524)){
var statearr_17556_17578 = state_17547__$1;
(statearr_17556_17578[(1)] = (4));

} else {
var statearr_17557_17579 = state_17547__$1;
(statearr_17557_17579[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17548 === (11))){
var inst_17538 = cljs.core.async.close_BANG_.call(null,ch);
var state_17547__$1 = state_17547;
var statearr_17558_17580 = state_17547__$1;
(statearr_17558_17580[(2)] = inst_17538);

(statearr_17558_17580[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17548 === (9))){
var state_17547__$1 = state_17547;
if(cljs.core.truth_(close_QMARK_)){
var statearr_17559_17581 = state_17547__$1;
(statearr_17559_17581[(1)] = (11));

} else {
var statearr_17560_17582 = state_17547__$1;
(statearr_17560_17582[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17548 === (5))){
var inst_17524 = (state_17547[(7)]);
var state_17547__$1 = state_17547;
var statearr_17561_17583 = state_17547__$1;
(statearr_17561_17583[(2)] = inst_17524);

(statearr_17561_17583[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17548 === (10))){
var inst_17543 = (state_17547[(2)]);
var state_17547__$1 = state_17547;
var statearr_17562_17584 = state_17547__$1;
(statearr_17562_17584[(2)] = inst_17543);

(statearr_17562_17584[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17548 === (8))){
var inst_17524 = (state_17547[(7)]);
var inst_17534 = cljs.core.next.call(null,inst_17524);
var inst_17524__$1 = inst_17534;
var state_17547__$1 = (function (){var statearr_17563 = state_17547;
(statearr_17563[(7)] = inst_17524__$1);

return statearr_17563;
})();
var statearr_17564_17585 = state_17547__$1;
(statearr_17564_17585[(2)] = null);

(statearr_17564_17585[(1)] = (2));


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
var statearr_17568 = [null,null,null,null,null,null,null,null];
(statearr_17568[(0)] = state_machine__6445__auto__);

(statearr_17568[(1)] = (1));

return statearr_17568;
});
var state_machine__6445__auto____1 = (function (state_17547){
while(true){
var ret_value__6446__auto__ = (function (){try{while(true){
var result__6447__auto__ = switch__6444__auto__.call(null,state_17547);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6447__auto__;
}
break;
}
}catch (e17569){if((e17569 instanceof Object)){
var ex__6448__auto__ = e17569;
var statearr_17570_17586 = state_17547;
(statearr_17570_17586[(5)] = ex__6448__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17547);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17569;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17587 = state_17547;
state_17547 = G__17587;
continue;
} else {
return ret_value__6446__auto__;
}
break;
}
});
state_machine__6445__auto__ = function(state_17547){
switch(arguments.length){
case 0:
return state_machine__6445__auto____0.call(this);
case 1:
return state_machine__6445__auto____1.call(this,state_17547);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6445__auto____0;
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6445__auto____1;
return state_machine__6445__auto__;
})()
;})(switch__6444__auto__,c__6459__auto__))
})();
var state__6461__auto__ = (function (){var statearr_17571 = f__6460__auto__.call(null);
(statearr_17571[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6459__auto__);

return statearr_17571;
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

cljs.core.async.Mux = (function (){var obj17589 = {};
return obj17589;
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


cljs.core.async.Mult = (function (){var obj17591 = {};
return obj17591;
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
if(typeof cljs.core.async.t17813 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t17813 = (function (cs,ch,mult,meta17814){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta17814 = meta17814;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17813.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t17813.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t17813.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t17813.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t17813.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t17813.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t17813.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_17815){
var self__ = this;
var _17815__$1 = this;
return self__.meta17814;
});})(cs))
;

cljs.core.async.t17813.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_17815,meta17814__$1){
var self__ = this;
var _17815__$1 = this;
return (new cljs.core.async.t17813(self__.cs,self__.ch,self__.mult,meta17814__$1));
});})(cs))
;

cljs.core.async.t17813.cljs$lang$type = true;

cljs.core.async.t17813.cljs$lang$ctorStr = "cljs.core.async/t17813";

cljs.core.async.t17813.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t17813");
});})(cs))
;

cljs.core.async.__GT_t17813 = ((function (cs){
return (function __GT_t17813(cs__$1,ch__$1,mult__$1,meta17814){
return (new cljs.core.async.t17813(cs__$1,ch__$1,mult__$1,meta17814));
});})(cs))
;

}

return (new cljs.core.async.t17813(cs,ch,mult,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),48,new cljs.core.Keyword(null,"end-line","end-line",1837326455),397,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"line","line",212345235),390,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/chrism/dev/farn/resources/public/js/out/cljs/core/async.cljs"], null)));
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
var c__6459__auto___18034 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6459__auto___18034,cs,m,dchan,dctr,done){
return (function (){
var f__6460__auto__ = (function (){var switch__6444__auto__ = ((function (c__6459__auto___18034,cs,m,dchan,dctr,done){
return (function (state_17946){
var state_val_17947 = (state_17946[(1)]);
if((state_val_17947 === (7))){
var inst_17942 = (state_17946[(2)]);
var state_17946__$1 = state_17946;
var statearr_17948_18035 = state_17946__$1;
(statearr_17948_18035[(2)] = inst_17942);

(statearr_17948_18035[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17947 === (20))){
var inst_17847 = (state_17946[(7)]);
var inst_17857 = cljs.core.first.call(null,inst_17847);
var inst_17858 = cljs.core.nth.call(null,inst_17857,(0),null);
var inst_17859 = cljs.core.nth.call(null,inst_17857,(1),null);
var state_17946__$1 = (function (){var statearr_17949 = state_17946;
(statearr_17949[(8)] = inst_17858);

return statearr_17949;
})();
if(cljs.core.truth_(inst_17859)){
var statearr_17950_18036 = state_17946__$1;
(statearr_17950_18036[(1)] = (22));

} else {
var statearr_17951_18037 = state_17946__$1;
(statearr_17951_18037[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17947 === (27))){
var inst_17894 = (state_17946[(9)]);
var inst_17889 = (state_17946[(10)]);
var inst_17887 = (state_17946[(11)]);
var inst_17818 = (state_17946[(12)]);
var inst_17894__$1 = cljs.core._nth.call(null,inst_17887,inst_17889);
var inst_17895 = cljs.core.async.put_BANG_.call(null,inst_17894__$1,inst_17818,done);
var state_17946__$1 = (function (){var statearr_17952 = state_17946;
(statearr_17952[(9)] = inst_17894__$1);

return statearr_17952;
})();
if(cljs.core.truth_(inst_17895)){
var statearr_17953_18038 = state_17946__$1;
(statearr_17953_18038[(1)] = (30));

} else {
var statearr_17954_18039 = state_17946__$1;
(statearr_17954_18039[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17947 === (1))){
var state_17946__$1 = state_17946;
var statearr_17955_18040 = state_17946__$1;
(statearr_17955_18040[(2)] = null);

(statearr_17955_18040[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17947 === (24))){
var inst_17847 = (state_17946[(7)]);
var inst_17864 = (state_17946[(2)]);
var inst_17865 = cljs.core.next.call(null,inst_17847);
var inst_17827 = inst_17865;
var inst_17828 = null;
var inst_17829 = (0);
var inst_17830 = (0);
var state_17946__$1 = (function (){var statearr_17956 = state_17946;
(statearr_17956[(13)] = inst_17829);

(statearr_17956[(14)] = inst_17864);

(statearr_17956[(15)] = inst_17828);

(statearr_17956[(16)] = inst_17830);

(statearr_17956[(17)] = inst_17827);

return statearr_17956;
})();
var statearr_17957_18041 = state_17946__$1;
(statearr_17957_18041[(2)] = null);

(statearr_17957_18041[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17947 === (39))){
var state_17946__$1 = state_17946;
var statearr_17961_18042 = state_17946__$1;
(statearr_17961_18042[(2)] = null);

(statearr_17961_18042[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17947 === (4))){
var inst_17818 = (state_17946[(12)]);
var inst_17818__$1 = (state_17946[(2)]);
var inst_17819 = (inst_17818__$1 == null);
var state_17946__$1 = (function (){var statearr_17962 = state_17946;
(statearr_17962[(12)] = inst_17818__$1);

return statearr_17962;
})();
if(cljs.core.truth_(inst_17819)){
var statearr_17963_18043 = state_17946__$1;
(statearr_17963_18043[(1)] = (5));

} else {
var statearr_17964_18044 = state_17946__$1;
(statearr_17964_18044[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17947 === (15))){
var inst_17829 = (state_17946[(13)]);
var inst_17828 = (state_17946[(15)]);
var inst_17830 = (state_17946[(16)]);
var inst_17827 = (state_17946[(17)]);
var inst_17843 = (state_17946[(2)]);
var inst_17844 = (inst_17830 + (1));
var tmp17958 = inst_17829;
var tmp17959 = inst_17828;
var tmp17960 = inst_17827;
var inst_17827__$1 = tmp17960;
var inst_17828__$1 = tmp17959;
var inst_17829__$1 = tmp17958;
var inst_17830__$1 = inst_17844;
var state_17946__$1 = (function (){var statearr_17965 = state_17946;
(statearr_17965[(13)] = inst_17829__$1);

(statearr_17965[(15)] = inst_17828__$1);

(statearr_17965[(18)] = inst_17843);

(statearr_17965[(16)] = inst_17830__$1);

(statearr_17965[(17)] = inst_17827__$1);

return statearr_17965;
})();
var statearr_17966_18045 = state_17946__$1;
(statearr_17966_18045[(2)] = null);

(statearr_17966_18045[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17947 === (21))){
var inst_17868 = (state_17946[(2)]);
var state_17946__$1 = state_17946;
var statearr_17970_18046 = state_17946__$1;
(statearr_17970_18046[(2)] = inst_17868);

(statearr_17970_18046[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17947 === (31))){
var inst_17894 = (state_17946[(9)]);
var inst_17898 = done.call(null,null);
var inst_17899 = cljs.core.async.untap_STAR_.call(null,m,inst_17894);
var state_17946__$1 = (function (){var statearr_17971 = state_17946;
(statearr_17971[(19)] = inst_17898);

return statearr_17971;
})();
var statearr_17972_18047 = state_17946__$1;
(statearr_17972_18047[(2)] = inst_17899);

(statearr_17972_18047[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17947 === (32))){
var inst_17889 = (state_17946[(10)]);
var inst_17886 = (state_17946[(20)]);
var inst_17888 = (state_17946[(21)]);
var inst_17887 = (state_17946[(11)]);
var inst_17901 = (state_17946[(2)]);
var inst_17902 = (inst_17889 + (1));
var tmp17967 = inst_17886;
var tmp17968 = inst_17888;
var tmp17969 = inst_17887;
var inst_17886__$1 = tmp17967;
var inst_17887__$1 = tmp17969;
var inst_17888__$1 = tmp17968;
var inst_17889__$1 = inst_17902;
var state_17946__$1 = (function (){var statearr_17973 = state_17946;
(statearr_17973[(22)] = inst_17901);

(statearr_17973[(10)] = inst_17889__$1);

(statearr_17973[(20)] = inst_17886__$1);

(statearr_17973[(21)] = inst_17888__$1);

(statearr_17973[(11)] = inst_17887__$1);

return statearr_17973;
})();
var statearr_17974_18048 = state_17946__$1;
(statearr_17974_18048[(2)] = null);

(statearr_17974_18048[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17947 === (40))){
var inst_17914 = (state_17946[(23)]);
var inst_17918 = done.call(null,null);
var inst_17919 = cljs.core.async.untap_STAR_.call(null,m,inst_17914);
var state_17946__$1 = (function (){var statearr_17975 = state_17946;
(statearr_17975[(24)] = inst_17918);

return statearr_17975;
})();
var statearr_17976_18049 = state_17946__$1;
(statearr_17976_18049[(2)] = inst_17919);

(statearr_17976_18049[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17947 === (33))){
var inst_17905 = (state_17946[(25)]);
var inst_17907 = cljs.core.chunked_seq_QMARK_.call(null,inst_17905);
var state_17946__$1 = state_17946;
if(inst_17907){
var statearr_17977_18050 = state_17946__$1;
(statearr_17977_18050[(1)] = (36));

} else {
var statearr_17978_18051 = state_17946__$1;
(statearr_17978_18051[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17947 === (13))){
var inst_17837 = (state_17946[(26)]);
var inst_17840 = cljs.core.async.close_BANG_.call(null,inst_17837);
var state_17946__$1 = state_17946;
var statearr_17979_18052 = state_17946__$1;
(statearr_17979_18052[(2)] = inst_17840);

(statearr_17979_18052[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17947 === (22))){
var inst_17858 = (state_17946[(8)]);
var inst_17861 = cljs.core.async.close_BANG_.call(null,inst_17858);
var state_17946__$1 = state_17946;
var statearr_17980_18053 = state_17946__$1;
(statearr_17980_18053[(2)] = inst_17861);

(statearr_17980_18053[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17947 === (36))){
var inst_17905 = (state_17946[(25)]);
var inst_17909 = cljs.core.chunk_first.call(null,inst_17905);
var inst_17910 = cljs.core.chunk_rest.call(null,inst_17905);
var inst_17911 = cljs.core.count.call(null,inst_17909);
var inst_17886 = inst_17910;
var inst_17887 = inst_17909;
var inst_17888 = inst_17911;
var inst_17889 = (0);
var state_17946__$1 = (function (){var statearr_17981 = state_17946;
(statearr_17981[(10)] = inst_17889);

(statearr_17981[(20)] = inst_17886);

(statearr_17981[(21)] = inst_17888);

(statearr_17981[(11)] = inst_17887);

return statearr_17981;
})();
var statearr_17982_18054 = state_17946__$1;
(statearr_17982_18054[(2)] = null);

(statearr_17982_18054[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17947 === (41))){
var inst_17905 = (state_17946[(25)]);
var inst_17921 = (state_17946[(2)]);
var inst_17922 = cljs.core.next.call(null,inst_17905);
var inst_17886 = inst_17922;
var inst_17887 = null;
var inst_17888 = (0);
var inst_17889 = (0);
var state_17946__$1 = (function (){var statearr_17983 = state_17946;
(statearr_17983[(27)] = inst_17921);

(statearr_17983[(10)] = inst_17889);

(statearr_17983[(20)] = inst_17886);

(statearr_17983[(21)] = inst_17888);

(statearr_17983[(11)] = inst_17887);

return statearr_17983;
})();
var statearr_17984_18055 = state_17946__$1;
(statearr_17984_18055[(2)] = null);

(statearr_17984_18055[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17947 === (43))){
var state_17946__$1 = state_17946;
var statearr_17985_18056 = state_17946__$1;
(statearr_17985_18056[(2)] = null);

(statearr_17985_18056[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17947 === (29))){
var inst_17930 = (state_17946[(2)]);
var state_17946__$1 = state_17946;
var statearr_17986_18057 = state_17946__$1;
(statearr_17986_18057[(2)] = inst_17930);

(statearr_17986_18057[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17947 === (44))){
var inst_17939 = (state_17946[(2)]);
var state_17946__$1 = (function (){var statearr_17987 = state_17946;
(statearr_17987[(28)] = inst_17939);

return statearr_17987;
})();
var statearr_17988_18058 = state_17946__$1;
(statearr_17988_18058[(2)] = null);

(statearr_17988_18058[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17947 === (6))){
var inst_17878 = (state_17946[(29)]);
var inst_17877 = cljs.core.deref.call(null,cs);
var inst_17878__$1 = cljs.core.keys.call(null,inst_17877);
var inst_17879 = cljs.core.count.call(null,inst_17878__$1);
var inst_17880 = cljs.core.reset_BANG_.call(null,dctr,inst_17879);
var inst_17885 = cljs.core.seq.call(null,inst_17878__$1);
var inst_17886 = inst_17885;
var inst_17887 = null;
var inst_17888 = (0);
var inst_17889 = (0);
var state_17946__$1 = (function (){var statearr_17989 = state_17946;
(statearr_17989[(30)] = inst_17880);

(statearr_17989[(10)] = inst_17889);

(statearr_17989[(20)] = inst_17886);

(statearr_17989[(21)] = inst_17888);

(statearr_17989[(29)] = inst_17878__$1);

(statearr_17989[(11)] = inst_17887);

return statearr_17989;
})();
var statearr_17990_18059 = state_17946__$1;
(statearr_17990_18059[(2)] = null);

(statearr_17990_18059[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17947 === (28))){
var inst_17905 = (state_17946[(25)]);
var inst_17886 = (state_17946[(20)]);
var inst_17905__$1 = cljs.core.seq.call(null,inst_17886);
var state_17946__$1 = (function (){var statearr_17991 = state_17946;
(statearr_17991[(25)] = inst_17905__$1);

return statearr_17991;
})();
if(inst_17905__$1){
var statearr_17992_18060 = state_17946__$1;
(statearr_17992_18060[(1)] = (33));

} else {
var statearr_17993_18061 = state_17946__$1;
(statearr_17993_18061[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17947 === (25))){
var inst_17889 = (state_17946[(10)]);
var inst_17888 = (state_17946[(21)]);
var inst_17891 = (inst_17889 < inst_17888);
var inst_17892 = inst_17891;
var state_17946__$1 = state_17946;
if(cljs.core.truth_(inst_17892)){
var statearr_17994_18062 = state_17946__$1;
(statearr_17994_18062[(1)] = (27));

} else {
var statearr_17995_18063 = state_17946__$1;
(statearr_17995_18063[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17947 === (34))){
var state_17946__$1 = state_17946;
var statearr_17996_18064 = state_17946__$1;
(statearr_17996_18064[(2)] = null);

(statearr_17996_18064[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17947 === (17))){
var state_17946__$1 = state_17946;
var statearr_17997_18065 = state_17946__$1;
(statearr_17997_18065[(2)] = null);

(statearr_17997_18065[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17947 === (3))){
var inst_17944 = (state_17946[(2)]);
var state_17946__$1 = state_17946;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17946__$1,inst_17944);
} else {
if((state_val_17947 === (12))){
var inst_17873 = (state_17946[(2)]);
var state_17946__$1 = state_17946;
var statearr_17998_18066 = state_17946__$1;
(statearr_17998_18066[(2)] = inst_17873);

(statearr_17998_18066[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17947 === (2))){
var state_17946__$1 = state_17946;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17946__$1,(4),ch);
} else {
if((state_val_17947 === (23))){
var state_17946__$1 = state_17946;
var statearr_17999_18067 = state_17946__$1;
(statearr_17999_18067[(2)] = null);

(statearr_17999_18067[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17947 === (35))){
var inst_17928 = (state_17946[(2)]);
var state_17946__$1 = state_17946;
var statearr_18000_18068 = state_17946__$1;
(statearr_18000_18068[(2)] = inst_17928);

(statearr_18000_18068[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17947 === (19))){
var inst_17847 = (state_17946[(7)]);
var inst_17851 = cljs.core.chunk_first.call(null,inst_17847);
var inst_17852 = cljs.core.chunk_rest.call(null,inst_17847);
var inst_17853 = cljs.core.count.call(null,inst_17851);
var inst_17827 = inst_17852;
var inst_17828 = inst_17851;
var inst_17829 = inst_17853;
var inst_17830 = (0);
var state_17946__$1 = (function (){var statearr_18001 = state_17946;
(statearr_18001[(13)] = inst_17829);

(statearr_18001[(15)] = inst_17828);

(statearr_18001[(16)] = inst_17830);

(statearr_18001[(17)] = inst_17827);

return statearr_18001;
})();
var statearr_18002_18069 = state_17946__$1;
(statearr_18002_18069[(2)] = null);

(statearr_18002_18069[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17947 === (11))){
var inst_17847 = (state_17946[(7)]);
var inst_17827 = (state_17946[(17)]);
var inst_17847__$1 = cljs.core.seq.call(null,inst_17827);
var state_17946__$1 = (function (){var statearr_18003 = state_17946;
(statearr_18003[(7)] = inst_17847__$1);

return statearr_18003;
})();
if(inst_17847__$1){
var statearr_18004_18070 = state_17946__$1;
(statearr_18004_18070[(1)] = (16));

} else {
var statearr_18005_18071 = state_17946__$1;
(statearr_18005_18071[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17947 === (9))){
var inst_17875 = (state_17946[(2)]);
var state_17946__$1 = state_17946;
var statearr_18006_18072 = state_17946__$1;
(statearr_18006_18072[(2)] = inst_17875);

(statearr_18006_18072[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17947 === (5))){
var inst_17825 = cljs.core.deref.call(null,cs);
var inst_17826 = cljs.core.seq.call(null,inst_17825);
var inst_17827 = inst_17826;
var inst_17828 = null;
var inst_17829 = (0);
var inst_17830 = (0);
var state_17946__$1 = (function (){var statearr_18007 = state_17946;
(statearr_18007[(13)] = inst_17829);

(statearr_18007[(15)] = inst_17828);

(statearr_18007[(16)] = inst_17830);

(statearr_18007[(17)] = inst_17827);

return statearr_18007;
})();
var statearr_18008_18073 = state_17946__$1;
(statearr_18008_18073[(2)] = null);

(statearr_18008_18073[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17947 === (14))){
var state_17946__$1 = state_17946;
var statearr_18009_18074 = state_17946__$1;
(statearr_18009_18074[(2)] = null);

(statearr_18009_18074[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17947 === (45))){
var inst_17936 = (state_17946[(2)]);
var state_17946__$1 = state_17946;
var statearr_18010_18075 = state_17946__$1;
(statearr_18010_18075[(2)] = inst_17936);

(statearr_18010_18075[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17947 === (26))){
var inst_17878 = (state_17946[(29)]);
var inst_17932 = (state_17946[(2)]);
var inst_17933 = cljs.core.seq.call(null,inst_17878);
var state_17946__$1 = (function (){var statearr_18011 = state_17946;
(statearr_18011[(31)] = inst_17932);

return statearr_18011;
})();
if(inst_17933){
var statearr_18012_18076 = state_17946__$1;
(statearr_18012_18076[(1)] = (42));

} else {
var statearr_18013_18077 = state_17946__$1;
(statearr_18013_18077[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17947 === (16))){
var inst_17847 = (state_17946[(7)]);
var inst_17849 = cljs.core.chunked_seq_QMARK_.call(null,inst_17847);
var state_17946__$1 = state_17946;
if(inst_17849){
var statearr_18014_18078 = state_17946__$1;
(statearr_18014_18078[(1)] = (19));

} else {
var statearr_18015_18079 = state_17946__$1;
(statearr_18015_18079[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17947 === (38))){
var inst_17925 = (state_17946[(2)]);
var state_17946__$1 = state_17946;
var statearr_18016_18080 = state_17946__$1;
(statearr_18016_18080[(2)] = inst_17925);

(statearr_18016_18080[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17947 === (30))){
var state_17946__$1 = state_17946;
var statearr_18017_18081 = state_17946__$1;
(statearr_18017_18081[(2)] = null);

(statearr_18017_18081[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17947 === (10))){
var inst_17828 = (state_17946[(15)]);
var inst_17830 = (state_17946[(16)]);
var inst_17836 = cljs.core._nth.call(null,inst_17828,inst_17830);
var inst_17837 = cljs.core.nth.call(null,inst_17836,(0),null);
var inst_17838 = cljs.core.nth.call(null,inst_17836,(1),null);
var state_17946__$1 = (function (){var statearr_18018 = state_17946;
(statearr_18018[(26)] = inst_17837);

return statearr_18018;
})();
if(cljs.core.truth_(inst_17838)){
var statearr_18019_18082 = state_17946__$1;
(statearr_18019_18082[(1)] = (13));

} else {
var statearr_18020_18083 = state_17946__$1;
(statearr_18020_18083[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17947 === (18))){
var inst_17871 = (state_17946[(2)]);
var state_17946__$1 = state_17946;
var statearr_18021_18084 = state_17946__$1;
(statearr_18021_18084[(2)] = inst_17871);

(statearr_18021_18084[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17947 === (42))){
var state_17946__$1 = state_17946;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17946__$1,(45),dchan);
} else {
if((state_val_17947 === (37))){
var inst_17905 = (state_17946[(25)]);
var inst_17914 = (state_17946[(23)]);
var inst_17818 = (state_17946[(12)]);
var inst_17914__$1 = cljs.core.first.call(null,inst_17905);
var inst_17915 = cljs.core.async.put_BANG_.call(null,inst_17914__$1,inst_17818,done);
var state_17946__$1 = (function (){var statearr_18022 = state_17946;
(statearr_18022[(23)] = inst_17914__$1);

return statearr_18022;
})();
if(cljs.core.truth_(inst_17915)){
var statearr_18023_18085 = state_17946__$1;
(statearr_18023_18085[(1)] = (39));

} else {
var statearr_18024_18086 = state_17946__$1;
(statearr_18024_18086[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17947 === (8))){
var inst_17829 = (state_17946[(13)]);
var inst_17830 = (state_17946[(16)]);
var inst_17832 = (inst_17830 < inst_17829);
var inst_17833 = inst_17832;
var state_17946__$1 = state_17946;
if(cljs.core.truth_(inst_17833)){
var statearr_18025_18087 = state_17946__$1;
(statearr_18025_18087[(1)] = (10));

} else {
var statearr_18026_18088 = state_17946__$1;
(statearr_18026_18088[(1)] = (11));

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
});})(c__6459__auto___18034,cs,m,dchan,dctr,done))
;
return ((function (switch__6444__auto__,c__6459__auto___18034,cs,m,dchan,dctr,done){
return (function() {
var state_machine__6445__auto__ = null;
var state_machine__6445__auto____0 = (function (){
var statearr_18030 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18030[(0)] = state_machine__6445__auto__);

(statearr_18030[(1)] = (1));

return statearr_18030;
});
var state_machine__6445__auto____1 = (function (state_17946){
while(true){
var ret_value__6446__auto__ = (function (){try{while(true){
var result__6447__auto__ = switch__6444__auto__.call(null,state_17946);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6447__auto__;
}
break;
}
}catch (e18031){if((e18031 instanceof Object)){
var ex__6448__auto__ = e18031;
var statearr_18032_18089 = state_17946;
(statearr_18032_18089[(5)] = ex__6448__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17946);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18031;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18090 = state_17946;
state_17946 = G__18090;
continue;
} else {
return ret_value__6446__auto__;
}
break;
}
});
state_machine__6445__auto__ = function(state_17946){
switch(arguments.length){
case 0:
return state_machine__6445__auto____0.call(this);
case 1:
return state_machine__6445__auto____1.call(this,state_17946);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6445__auto____0;
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6445__auto____1;
return state_machine__6445__auto__;
})()
;})(switch__6444__auto__,c__6459__auto___18034,cs,m,dchan,dctr,done))
})();
var state__6461__auto__ = (function (){var statearr_18033 = f__6460__auto__.call(null);
(statearr_18033[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6459__auto___18034);

return statearr_18033;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6461__auto__);
});})(c__6459__auto___18034,cs,m,dchan,dctr,done))
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

cljs.core.async.Mix = (function (){var obj18092 = {};
return obj18092;
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
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__18093){
var map__18098 = p__18093;
var map__18098__$1 = ((cljs.core.seq_QMARK_.call(null,map__18098))?cljs.core.apply.call(null,cljs.core.hash_map,map__18098):map__18098);
var opts = map__18098__$1;
var statearr_18099_18102 = state;
(statearr_18099_18102[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__18098,map__18098__$1,opts){
return (function (val){
var statearr_18100_18103 = state;
(statearr_18100_18103[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__18098,map__18098__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_18101_18104 = state;
(statearr_18101_18104[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__18093 = null;
if (arguments.length > 3) {
  p__18093 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__18093);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__18105){
var state = cljs.core.first(arglist__18105);
arglist__18105 = cljs.core.next(arglist__18105);
var cont_block = cljs.core.first(arglist__18105);
arglist__18105 = cljs.core.next(arglist__18105);
var ports = cljs.core.first(arglist__18105);
var p__18093 = cljs.core.rest(arglist__18105);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__18093);
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
if(typeof cljs.core.async.t18225 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t18225 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta18226){
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
this.meta18226 = meta18226;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t18225.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t18225.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t18225.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t18225.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t18225.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t18225.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t18225.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t18225.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t18225.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_18227){
var self__ = this;
var _18227__$1 = this;
return self__.meta18226;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t18225.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_18227,meta18226__$1){
var self__ = this;
var _18227__$1 = this;
return (new cljs.core.async.t18225(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta18226__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t18225.cljs$lang$type = true;

cljs.core.async.t18225.cljs$lang$ctorStr = "cljs.core.async/t18225";

cljs.core.async.t18225.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t18225");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t18225 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t18225(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta18226){
return (new cljs.core.async.t18225(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta18226));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t18225(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),25,new cljs.core.Keyword(null,"end-line","end-line",1837326455),510,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"line","line",212345235),499,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/chrism/dev/farn/resources/public/js/out/cljs/core/async.cljs"], null)));
})()
;
var c__6459__auto___18344 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6459__auto___18344,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__6460__auto__ = (function (){var switch__6444__auto__ = ((function (c__6459__auto___18344,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_18297){
var state_val_18298 = (state_18297[(1)]);
if((state_val_18298 === (7))){
var inst_18241 = (state_18297[(7)]);
var inst_18246 = cljs.core.apply.call(null,cljs.core.hash_map,inst_18241);
var state_18297__$1 = state_18297;
var statearr_18299_18345 = state_18297__$1;
(statearr_18299_18345[(2)] = inst_18246);

(statearr_18299_18345[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18298 === (20))){
var inst_18256 = (state_18297[(8)]);
var state_18297__$1 = state_18297;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18297__$1,(23),out,inst_18256);
} else {
if((state_val_18298 === (1))){
var inst_18231 = (state_18297[(9)]);
var inst_18231__$1 = calc_state.call(null);
var inst_18232 = cljs.core.seq_QMARK_.call(null,inst_18231__$1);
var state_18297__$1 = (function (){var statearr_18300 = state_18297;
(statearr_18300[(9)] = inst_18231__$1);

return statearr_18300;
})();
if(inst_18232){
var statearr_18301_18346 = state_18297__$1;
(statearr_18301_18346[(1)] = (2));

} else {
var statearr_18302_18347 = state_18297__$1;
(statearr_18302_18347[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18298 === (24))){
var inst_18249 = (state_18297[(10)]);
var inst_18241 = inst_18249;
var state_18297__$1 = (function (){var statearr_18303 = state_18297;
(statearr_18303[(7)] = inst_18241);

return statearr_18303;
})();
var statearr_18304_18348 = state_18297__$1;
(statearr_18304_18348[(2)] = null);

(statearr_18304_18348[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18298 === (4))){
var inst_18231 = (state_18297[(9)]);
var inst_18237 = (state_18297[(2)]);
var inst_18238 = cljs.core.get.call(null,inst_18237,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_18239 = cljs.core.get.call(null,inst_18237,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_18240 = cljs.core.get.call(null,inst_18237,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_18241 = inst_18231;
var state_18297__$1 = (function (){var statearr_18305 = state_18297;
(statearr_18305[(11)] = inst_18240);

(statearr_18305[(12)] = inst_18238);

(statearr_18305[(7)] = inst_18241);

(statearr_18305[(13)] = inst_18239);

return statearr_18305;
})();
var statearr_18306_18349 = state_18297__$1;
(statearr_18306_18349[(2)] = null);

(statearr_18306_18349[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18298 === (15))){
var state_18297__$1 = state_18297;
var statearr_18307_18350 = state_18297__$1;
(statearr_18307_18350[(2)] = null);

(statearr_18307_18350[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18298 === (21))){
var inst_18249 = (state_18297[(10)]);
var inst_18241 = inst_18249;
var state_18297__$1 = (function (){var statearr_18308 = state_18297;
(statearr_18308[(7)] = inst_18241);

return statearr_18308;
})();
var statearr_18309_18351 = state_18297__$1;
(statearr_18309_18351[(2)] = null);

(statearr_18309_18351[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18298 === (13))){
var inst_18293 = (state_18297[(2)]);
var state_18297__$1 = state_18297;
var statearr_18310_18352 = state_18297__$1;
(statearr_18310_18352[(2)] = inst_18293);

(statearr_18310_18352[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18298 === (22))){
var inst_18291 = (state_18297[(2)]);
var state_18297__$1 = state_18297;
var statearr_18311_18353 = state_18297__$1;
(statearr_18311_18353[(2)] = inst_18291);

(statearr_18311_18353[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18298 === (6))){
var inst_18295 = (state_18297[(2)]);
var state_18297__$1 = state_18297;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18297__$1,inst_18295);
} else {
if((state_val_18298 === (25))){
var state_18297__$1 = state_18297;
var statearr_18312_18354 = state_18297__$1;
(statearr_18312_18354[(2)] = null);

(statearr_18312_18354[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18298 === (17))){
var inst_18271 = (state_18297[(14)]);
var state_18297__$1 = state_18297;
var statearr_18313_18355 = state_18297__$1;
(statearr_18313_18355[(2)] = inst_18271);

(statearr_18313_18355[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18298 === (3))){
var inst_18231 = (state_18297[(9)]);
var state_18297__$1 = state_18297;
var statearr_18314_18356 = state_18297__$1;
(statearr_18314_18356[(2)] = inst_18231);

(statearr_18314_18356[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18298 === (12))){
var inst_18252 = (state_18297[(15)]);
var inst_18257 = (state_18297[(16)]);
var inst_18271 = (state_18297[(14)]);
var inst_18271__$1 = inst_18252.call(null,inst_18257);
var state_18297__$1 = (function (){var statearr_18315 = state_18297;
(statearr_18315[(14)] = inst_18271__$1);

return statearr_18315;
})();
if(cljs.core.truth_(inst_18271__$1)){
var statearr_18316_18357 = state_18297__$1;
(statearr_18316_18357[(1)] = (17));

} else {
var statearr_18317_18358 = state_18297__$1;
(statearr_18317_18358[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18298 === (2))){
var inst_18231 = (state_18297[(9)]);
var inst_18234 = cljs.core.apply.call(null,cljs.core.hash_map,inst_18231);
var state_18297__$1 = state_18297;
var statearr_18318_18359 = state_18297__$1;
(statearr_18318_18359[(2)] = inst_18234);

(statearr_18318_18359[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18298 === (23))){
var inst_18282 = (state_18297[(2)]);
var state_18297__$1 = state_18297;
if(cljs.core.truth_(inst_18282)){
var statearr_18319_18360 = state_18297__$1;
(statearr_18319_18360[(1)] = (24));

} else {
var statearr_18320_18361 = state_18297__$1;
(statearr_18320_18361[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18298 === (19))){
var inst_18279 = (state_18297[(2)]);
var state_18297__$1 = state_18297;
if(cljs.core.truth_(inst_18279)){
var statearr_18321_18362 = state_18297__$1;
(statearr_18321_18362[(1)] = (20));

} else {
var statearr_18322_18363 = state_18297__$1;
(statearr_18322_18363[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18298 === (11))){
var inst_18256 = (state_18297[(8)]);
var inst_18262 = (inst_18256 == null);
var state_18297__$1 = state_18297;
if(cljs.core.truth_(inst_18262)){
var statearr_18323_18364 = state_18297__$1;
(statearr_18323_18364[(1)] = (14));

} else {
var statearr_18324_18365 = state_18297__$1;
(statearr_18324_18365[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18298 === (9))){
var inst_18249 = (state_18297[(10)]);
var inst_18249__$1 = (state_18297[(2)]);
var inst_18250 = cljs.core.get.call(null,inst_18249__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_18251 = cljs.core.get.call(null,inst_18249__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_18252 = cljs.core.get.call(null,inst_18249__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var state_18297__$1 = (function (){var statearr_18325 = state_18297;
(statearr_18325[(10)] = inst_18249__$1);

(statearr_18325[(15)] = inst_18252);

(statearr_18325[(17)] = inst_18251);

return statearr_18325;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_18297__$1,(10),inst_18250);
} else {
if((state_val_18298 === (5))){
var inst_18241 = (state_18297[(7)]);
var inst_18244 = cljs.core.seq_QMARK_.call(null,inst_18241);
var state_18297__$1 = state_18297;
if(inst_18244){
var statearr_18326_18366 = state_18297__$1;
(statearr_18326_18366[(1)] = (7));

} else {
var statearr_18327_18367 = state_18297__$1;
(statearr_18327_18367[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18298 === (14))){
var inst_18257 = (state_18297[(16)]);
var inst_18264 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_18257);
var state_18297__$1 = state_18297;
var statearr_18328_18368 = state_18297__$1;
(statearr_18328_18368[(2)] = inst_18264);

(statearr_18328_18368[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18298 === (26))){
var inst_18287 = (state_18297[(2)]);
var state_18297__$1 = state_18297;
var statearr_18329_18369 = state_18297__$1;
(statearr_18329_18369[(2)] = inst_18287);

(statearr_18329_18369[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18298 === (16))){
var inst_18267 = (state_18297[(2)]);
var inst_18268 = calc_state.call(null);
var inst_18241 = inst_18268;
var state_18297__$1 = (function (){var statearr_18330 = state_18297;
(statearr_18330[(7)] = inst_18241);

(statearr_18330[(18)] = inst_18267);

return statearr_18330;
})();
var statearr_18331_18370 = state_18297__$1;
(statearr_18331_18370[(2)] = null);

(statearr_18331_18370[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18298 === (10))){
var inst_18256 = (state_18297[(8)]);
var inst_18257 = (state_18297[(16)]);
var inst_18255 = (state_18297[(2)]);
var inst_18256__$1 = cljs.core.nth.call(null,inst_18255,(0),null);
var inst_18257__$1 = cljs.core.nth.call(null,inst_18255,(1),null);
var inst_18258 = (inst_18256__$1 == null);
var inst_18259 = cljs.core._EQ_.call(null,inst_18257__$1,change);
var inst_18260 = (inst_18258) || (inst_18259);
var state_18297__$1 = (function (){var statearr_18332 = state_18297;
(statearr_18332[(8)] = inst_18256__$1);

(statearr_18332[(16)] = inst_18257__$1);

return statearr_18332;
})();
if(cljs.core.truth_(inst_18260)){
var statearr_18333_18371 = state_18297__$1;
(statearr_18333_18371[(1)] = (11));

} else {
var statearr_18334_18372 = state_18297__$1;
(statearr_18334_18372[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18298 === (18))){
var inst_18252 = (state_18297[(15)]);
var inst_18251 = (state_18297[(17)]);
var inst_18257 = (state_18297[(16)]);
var inst_18274 = cljs.core.empty_QMARK_.call(null,inst_18252);
var inst_18275 = inst_18251.call(null,inst_18257);
var inst_18276 = cljs.core.not.call(null,inst_18275);
var inst_18277 = (inst_18274) && (inst_18276);
var state_18297__$1 = state_18297;
var statearr_18335_18373 = state_18297__$1;
(statearr_18335_18373[(2)] = inst_18277);

(statearr_18335_18373[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18298 === (8))){
var inst_18241 = (state_18297[(7)]);
var state_18297__$1 = state_18297;
var statearr_18336_18374 = state_18297__$1;
(statearr_18336_18374[(2)] = inst_18241);

(statearr_18336_18374[(1)] = (9));


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
});})(c__6459__auto___18344,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__6444__auto__,c__6459__auto___18344,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__6445__auto__ = null;
var state_machine__6445__auto____0 = (function (){
var statearr_18340 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18340[(0)] = state_machine__6445__auto__);

(statearr_18340[(1)] = (1));

return statearr_18340;
});
var state_machine__6445__auto____1 = (function (state_18297){
while(true){
var ret_value__6446__auto__ = (function (){try{while(true){
var result__6447__auto__ = switch__6444__auto__.call(null,state_18297);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6447__auto__;
}
break;
}
}catch (e18341){if((e18341 instanceof Object)){
var ex__6448__auto__ = e18341;
var statearr_18342_18375 = state_18297;
(statearr_18342_18375[(5)] = ex__6448__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18297);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18341;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18376 = state_18297;
state_18297 = G__18376;
continue;
} else {
return ret_value__6446__auto__;
}
break;
}
});
state_machine__6445__auto__ = function(state_18297){
switch(arguments.length){
case 0:
return state_machine__6445__auto____0.call(this);
case 1:
return state_machine__6445__auto____1.call(this,state_18297);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6445__auto____0;
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6445__auto____1;
return state_machine__6445__auto__;
})()
;})(switch__6444__auto__,c__6459__auto___18344,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__6461__auto__ = (function (){var statearr_18343 = f__6460__auto__.call(null);
(statearr_18343[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6459__auto___18344);

return statearr_18343;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6461__auto__);
});})(c__6459__auto___18344,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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

cljs.core.async.Pub = (function (){var obj18378 = {};
return obj18378;
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
return (function (p1__18379_SHARP_){
if(cljs.core.truth_(p1__18379_SHARP_.call(null,topic))){
return p1__18379_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__18379_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3630__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t18502 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t18502 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta18503){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta18503 = meta18503;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t18502.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t18502.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t18502.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t18502.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t18502.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t18502.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t18502.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t18502.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_18504){
var self__ = this;
var _18504__$1 = this;
return self__.meta18503;
});})(mults,ensure_mult))
;

cljs.core.async.t18502.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_18504,meta18503__$1){
var self__ = this;
var _18504__$1 = this;
return (new cljs.core.async.t18502(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta18503__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t18502.cljs$lang$type = true;

cljs.core.async.t18502.cljs$lang$ctorStr = "cljs.core.async/t18502";

cljs.core.async.t18502.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t18502");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t18502 = ((function (mults,ensure_mult){
return (function __GT_t18502(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta18503){
return (new cljs.core.async.t18502(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta18503));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t18502(ensure_mult,mults,buf_fn,topic_fn,ch,pub,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),65,new cljs.core.Keyword(null,"end-line","end-line",1837326455),603,new cljs.core.Keyword(null,"column","column",2078222095),14,new cljs.core.Keyword(null,"line","line",212345235),591,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/chrism/dev/farn/resources/public/js/out/cljs/core/async.cljs"], null)));
})()
;
var c__6459__auto___18624 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6459__auto___18624,mults,ensure_mult,p){
return (function (){
var f__6460__auto__ = (function (){var switch__6444__auto__ = ((function (c__6459__auto___18624,mults,ensure_mult,p){
return (function (state_18576){
var state_val_18577 = (state_18576[(1)]);
if((state_val_18577 === (7))){
var inst_18572 = (state_18576[(2)]);
var state_18576__$1 = state_18576;
var statearr_18578_18625 = state_18576__$1;
(statearr_18578_18625[(2)] = inst_18572);

(statearr_18578_18625[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18577 === (20))){
var state_18576__$1 = state_18576;
var statearr_18579_18626 = state_18576__$1;
(statearr_18579_18626[(2)] = null);

(statearr_18579_18626[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18577 === (1))){
var state_18576__$1 = state_18576;
var statearr_18580_18627 = state_18576__$1;
(statearr_18580_18627[(2)] = null);

(statearr_18580_18627[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18577 === (24))){
var inst_18555 = (state_18576[(7)]);
var inst_18564 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_18555);
var state_18576__$1 = state_18576;
var statearr_18581_18628 = state_18576__$1;
(statearr_18581_18628[(2)] = inst_18564);

(statearr_18581_18628[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18577 === (4))){
var inst_18507 = (state_18576[(8)]);
var inst_18507__$1 = (state_18576[(2)]);
var inst_18508 = (inst_18507__$1 == null);
var state_18576__$1 = (function (){var statearr_18582 = state_18576;
(statearr_18582[(8)] = inst_18507__$1);

return statearr_18582;
})();
if(cljs.core.truth_(inst_18508)){
var statearr_18583_18629 = state_18576__$1;
(statearr_18583_18629[(1)] = (5));

} else {
var statearr_18584_18630 = state_18576__$1;
(statearr_18584_18630[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18577 === (15))){
var inst_18549 = (state_18576[(2)]);
var state_18576__$1 = state_18576;
var statearr_18585_18631 = state_18576__$1;
(statearr_18585_18631[(2)] = inst_18549);

(statearr_18585_18631[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18577 === (21))){
var inst_18569 = (state_18576[(2)]);
var state_18576__$1 = (function (){var statearr_18586 = state_18576;
(statearr_18586[(9)] = inst_18569);

return statearr_18586;
})();
var statearr_18587_18632 = state_18576__$1;
(statearr_18587_18632[(2)] = null);

(statearr_18587_18632[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18577 === (13))){
var inst_18531 = (state_18576[(10)]);
var inst_18533 = cljs.core.chunked_seq_QMARK_.call(null,inst_18531);
var state_18576__$1 = state_18576;
if(inst_18533){
var statearr_18588_18633 = state_18576__$1;
(statearr_18588_18633[(1)] = (16));

} else {
var statearr_18589_18634 = state_18576__$1;
(statearr_18589_18634[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18577 === (22))){
var inst_18561 = (state_18576[(2)]);
var state_18576__$1 = state_18576;
if(cljs.core.truth_(inst_18561)){
var statearr_18590_18635 = state_18576__$1;
(statearr_18590_18635[(1)] = (23));

} else {
var statearr_18591_18636 = state_18576__$1;
(statearr_18591_18636[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18577 === (6))){
var inst_18557 = (state_18576[(11)]);
var inst_18507 = (state_18576[(8)]);
var inst_18555 = (state_18576[(7)]);
var inst_18555__$1 = topic_fn.call(null,inst_18507);
var inst_18556 = cljs.core.deref.call(null,mults);
var inst_18557__$1 = cljs.core.get.call(null,inst_18556,inst_18555__$1);
var state_18576__$1 = (function (){var statearr_18592 = state_18576;
(statearr_18592[(11)] = inst_18557__$1);

(statearr_18592[(7)] = inst_18555__$1);

return statearr_18592;
})();
if(cljs.core.truth_(inst_18557__$1)){
var statearr_18593_18637 = state_18576__$1;
(statearr_18593_18637[(1)] = (19));

} else {
var statearr_18594_18638 = state_18576__$1;
(statearr_18594_18638[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18577 === (25))){
var inst_18566 = (state_18576[(2)]);
var state_18576__$1 = state_18576;
var statearr_18595_18639 = state_18576__$1;
(statearr_18595_18639[(2)] = inst_18566);

(statearr_18595_18639[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18577 === (17))){
var inst_18531 = (state_18576[(10)]);
var inst_18540 = cljs.core.first.call(null,inst_18531);
var inst_18541 = cljs.core.async.muxch_STAR_.call(null,inst_18540);
var inst_18542 = cljs.core.async.close_BANG_.call(null,inst_18541);
var inst_18543 = cljs.core.next.call(null,inst_18531);
var inst_18517 = inst_18543;
var inst_18518 = null;
var inst_18519 = (0);
var inst_18520 = (0);
var state_18576__$1 = (function (){var statearr_18596 = state_18576;
(statearr_18596[(12)] = inst_18520);

(statearr_18596[(13)] = inst_18519);

(statearr_18596[(14)] = inst_18517);

(statearr_18596[(15)] = inst_18518);

(statearr_18596[(16)] = inst_18542);

return statearr_18596;
})();
var statearr_18597_18640 = state_18576__$1;
(statearr_18597_18640[(2)] = null);

(statearr_18597_18640[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18577 === (3))){
var inst_18574 = (state_18576[(2)]);
var state_18576__$1 = state_18576;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18576__$1,inst_18574);
} else {
if((state_val_18577 === (12))){
var inst_18551 = (state_18576[(2)]);
var state_18576__$1 = state_18576;
var statearr_18598_18641 = state_18576__$1;
(statearr_18598_18641[(2)] = inst_18551);

(statearr_18598_18641[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18577 === (2))){
var state_18576__$1 = state_18576;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18576__$1,(4),ch);
} else {
if((state_val_18577 === (23))){
var state_18576__$1 = state_18576;
var statearr_18599_18642 = state_18576__$1;
(statearr_18599_18642[(2)] = null);

(statearr_18599_18642[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18577 === (19))){
var inst_18557 = (state_18576[(11)]);
var inst_18507 = (state_18576[(8)]);
var inst_18559 = cljs.core.async.muxch_STAR_.call(null,inst_18557);
var state_18576__$1 = state_18576;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18576__$1,(22),inst_18559,inst_18507);
} else {
if((state_val_18577 === (11))){
var inst_18531 = (state_18576[(10)]);
var inst_18517 = (state_18576[(14)]);
var inst_18531__$1 = cljs.core.seq.call(null,inst_18517);
var state_18576__$1 = (function (){var statearr_18600 = state_18576;
(statearr_18600[(10)] = inst_18531__$1);

return statearr_18600;
})();
if(inst_18531__$1){
var statearr_18601_18643 = state_18576__$1;
(statearr_18601_18643[(1)] = (13));

} else {
var statearr_18602_18644 = state_18576__$1;
(statearr_18602_18644[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18577 === (9))){
var inst_18553 = (state_18576[(2)]);
var state_18576__$1 = state_18576;
var statearr_18603_18645 = state_18576__$1;
(statearr_18603_18645[(2)] = inst_18553);

(statearr_18603_18645[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18577 === (5))){
var inst_18514 = cljs.core.deref.call(null,mults);
var inst_18515 = cljs.core.vals.call(null,inst_18514);
var inst_18516 = cljs.core.seq.call(null,inst_18515);
var inst_18517 = inst_18516;
var inst_18518 = null;
var inst_18519 = (0);
var inst_18520 = (0);
var state_18576__$1 = (function (){var statearr_18604 = state_18576;
(statearr_18604[(12)] = inst_18520);

(statearr_18604[(13)] = inst_18519);

(statearr_18604[(14)] = inst_18517);

(statearr_18604[(15)] = inst_18518);

return statearr_18604;
})();
var statearr_18605_18646 = state_18576__$1;
(statearr_18605_18646[(2)] = null);

(statearr_18605_18646[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18577 === (14))){
var state_18576__$1 = state_18576;
var statearr_18609_18647 = state_18576__$1;
(statearr_18609_18647[(2)] = null);

(statearr_18609_18647[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18577 === (16))){
var inst_18531 = (state_18576[(10)]);
var inst_18535 = cljs.core.chunk_first.call(null,inst_18531);
var inst_18536 = cljs.core.chunk_rest.call(null,inst_18531);
var inst_18537 = cljs.core.count.call(null,inst_18535);
var inst_18517 = inst_18536;
var inst_18518 = inst_18535;
var inst_18519 = inst_18537;
var inst_18520 = (0);
var state_18576__$1 = (function (){var statearr_18610 = state_18576;
(statearr_18610[(12)] = inst_18520);

(statearr_18610[(13)] = inst_18519);

(statearr_18610[(14)] = inst_18517);

(statearr_18610[(15)] = inst_18518);

return statearr_18610;
})();
var statearr_18611_18648 = state_18576__$1;
(statearr_18611_18648[(2)] = null);

(statearr_18611_18648[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18577 === (10))){
var inst_18520 = (state_18576[(12)]);
var inst_18519 = (state_18576[(13)]);
var inst_18517 = (state_18576[(14)]);
var inst_18518 = (state_18576[(15)]);
var inst_18525 = cljs.core._nth.call(null,inst_18518,inst_18520);
var inst_18526 = cljs.core.async.muxch_STAR_.call(null,inst_18525);
var inst_18527 = cljs.core.async.close_BANG_.call(null,inst_18526);
var inst_18528 = (inst_18520 + (1));
var tmp18606 = inst_18519;
var tmp18607 = inst_18517;
var tmp18608 = inst_18518;
var inst_18517__$1 = tmp18607;
var inst_18518__$1 = tmp18608;
var inst_18519__$1 = tmp18606;
var inst_18520__$1 = inst_18528;
var state_18576__$1 = (function (){var statearr_18612 = state_18576;
(statearr_18612[(12)] = inst_18520__$1);

(statearr_18612[(13)] = inst_18519__$1);

(statearr_18612[(17)] = inst_18527);

(statearr_18612[(14)] = inst_18517__$1);

(statearr_18612[(15)] = inst_18518__$1);

return statearr_18612;
})();
var statearr_18613_18649 = state_18576__$1;
(statearr_18613_18649[(2)] = null);

(statearr_18613_18649[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18577 === (18))){
var inst_18546 = (state_18576[(2)]);
var state_18576__$1 = state_18576;
var statearr_18614_18650 = state_18576__$1;
(statearr_18614_18650[(2)] = inst_18546);

(statearr_18614_18650[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18577 === (8))){
var inst_18520 = (state_18576[(12)]);
var inst_18519 = (state_18576[(13)]);
var inst_18522 = (inst_18520 < inst_18519);
var inst_18523 = inst_18522;
var state_18576__$1 = state_18576;
if(cljs.core.truth_(inst_18523)){
var statearr_18615_18651 = state_18576__$1;
(statearr_18615_18651[(1)] = (10));

} else {
var statearr_18616_18652 = state_18576__$1;
(statearr_18616_18652[(1)] = (11));

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
});})(c__6459__auto___18624,mults,ensure_mult,p))
;
return ((function (switch__6444__auto__,c__6459__auto___18624,mults,ensure_mult,p){
return (function() {
var state_machine__6445__auto__ = null;
var state_machine__6445__auto____0 = (function (){
var statearr_18620 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18620[(0)] = state_machine__6445__auto__);

(statearr_18620[(1)] = (1));

return statearr_18620;
});
var state_machine__6445__auto____1 = (function (state_18576){
while(true){
var ret_value__6446__auto__ = (function (){try{while(true){
var result__6447__auto__ = switch__6444__auto__.call(null,state_18576);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6447__auto__;
}
break;
}
}catch (e18621){if((e18621 instanceof Object)){
var ex__6448__auto__ = e18621;
var statearr_18622_18653 = state_18576;
(statearr_18622_18653[(5)] = ex__6448__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18576);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18621;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18654 = state_18576;
state_18576 = G__18654;
continue;
} else {
return ret_value__6446__auto__;
}
break;
}
});
state_machine__6445__auto__ = function(state_18576){
switch(arguments.length){
case 0:
return state_machine__6445__auto____0.call(this);
case 1:
return state_machine__6445__auto____1.call(this,state_18576);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6445__auto____0;
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6445__auto____1;
return state_machine__6445__auto__;
})()
;})(switch__6444__auto__,c__6459__auto___18624,mults,ensure_mult,p))
})();
var state__6461__auto__ = (function (){var statearr_18623 = f__6460__auto__.call(null);
(statearr_18623[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6459__auto___18624);

return statearr_18623;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6461__auto__);
});})(c__6459__auto___18624,mults,ensure_mult,p))
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
var c__6459__auto___18791 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6459__auto___18791,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__6460__auto__ = (function (){var switch__6444__auto__ = ((function (c__6459__auto___18791,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_18761){
var state_val_18762 = (state_18761[(1)]);
if((state_val_18762 === (7))){
var state_18761__$1 = state_18761;
var statearr_18763_18792 = state_18761__$1;
(statearr_18763_18792[(2)] = null);

(statearr_18763_18792[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18762 === (1))){
var state_18761__$1 = state_18761;
var statearr_18764_18793 = state_18761__$1;
(statearr_18764_18793[(2)] = null);

(statearr_18764_18793[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18762 === (4))){
var inst_18725 = (state_18761[(7)]);
var inst_18727 = (inst_18725 < cnt);
var state_18761__$1 = state_18761;
if(cljs.core.truth_(inst_18727)){
var statearr_18765_18794 = state_18761__$1;
(statearr_18765_18794[(1)] = (6));

} else {
var statearr_18766_18795 = state_18761__$1;
(statearr_18766_18795[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18762 === (15))){
var inst_18757 = (state_18761[(2)]);
var state_18761__$1 = state_18761;
var statearr_18767_18796 = state_18761__$1;
(statearr_18767_18796[(2)] = inst_18757);

(statearr_18767_18796[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18762 === (13))){
var inst_18750 = cljs.core.async.close_BANG_.call(null,out);
var state_18761__$1 = state_18761;
var statearr_18768_18797 = state_18761__$1;
(statearr_18768_18797[(2)] = inst_18750);

(statearr_18768_18797[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18762 === (6))){
var state_18761__$1 = state_18761;
var statearr_18769_18798 = state_18761__$1;
(statearr_18769_18798[(2)] = null);

(statearr_18769_18798[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18762 === (3))){
var inst_18759 = (state_18761[(2)]);
var state_18761__$1 = state_18761;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18761__$1,inst_18759);
} else {
if((state_val_18762 === (12))){
var inst_18747 = (state_18761[(8)]);
var inst_18747__$1 = (state_18761[(2)]);
var inst_18748 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_18747__$1);
var state_18761__$1 = (function (){var statearr_18770 = state_18761;
(statearr_18770[(8)] = inst_18747__$1);

return statearr_18770;
})();
if(cljs.core.truth_(inst_18748)){
var statearr_18771_18799 = state_18761__$1;
(statearr_18771_18799[(1)] = (13));

} else {
var statearr_18772_18800 = state_18761__$1;
(statearr_18772_18800[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18762 === (2))){
var inst_18724 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_18725 = (0);
var state_18761__$1 = (function (){var statearr_18773 = state_18761;
(statearr_18773[(9)] = inst_18724);

(statearr_18773[(7)] = inst_18725);

return statearr_18773;
})();
var statearr_18774_18801 = state_18761__$1;
(statearr_18774_18801[(2)] = null);

(statearr_18774_18801[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18762 === (11))){
var inst_18725 = (state_18761[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_18761,(10),Object,null,(9));
var inst_18734 = chs__$1.call(null,inst_18725);
var inst_18735 = done.call(null,inst_18725);
var inst_18736 = cljs.core.async.take_BANG_.call(null,inst_18734,inst_18735);
var state_18761__$1 = state_18761;
var statearr_18775_18802 = state_18761__$1;
(statearr_18775_18802[(2)] = inst_18736);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18761__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18762 === (9))){
var inst_18725 = (state_18761[(7)]);
var inst_18738 = (state_18761[(2)]);
var inst_18739 = (inst_18725 + (1));
var inst_18725__$1 = inst_18739;
var state_18761__$1 = (function (){var statearr_18776 = state_18761;
(statearr_18776[(10)] = inst_18738);

(statearr_18776[(7)] = inst_18725__$1);

return statearr_18776;
})();
var statearr_18777_18803 = state_18761__$1;
(statearr_18777_18803[(2)] = null);

(statearr_18777_18803[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18762 === (5))){
var inst_18745 = (state_18761[(2)]);
var state_18761__$1 = (function (){var statearr_18778 = state_18761;
(statearr_18778[(11)] = inst_18745);

return statearr_18778;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18761__$1,(12),dchan);
} else {
if((state_val_18762 === (14))){
var inst_18747 = (state_18761[(8)]);
var inst_18752 = cljs.core.apply.call(null,f,inst_18747);
var state_18761__$1 = state_18761;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18761__$1,(16),out,inst_18752);
} else {
if((state_val_18762 === (16))){
var inst_18754 = (state_18761[(2)]);
var state_18761__$1 = (function (){var statearr_18779 = state_18761;
(statearr_18779[(12)] = inst_18754);

return statearr_18779;
})();
var statearr_18780_18804 = state_18761__$1;
(statearr_18780_18804[(2)] = null);

(statearr_18780_18804[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18762 === (10))){
var inst_18729 = (state_18761[(2)]);
var inst_18730 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_18761__$1 = (function (){var statearr_18781 = state_18761;
(statearr_18781[(13)] = inst_18729);

return statearr_18781;
})();
var statearr_18782_18805 = state_18761__$1;
(statearr_18782_18805[(2)] = inst_18730);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18761__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18762 === (8))){
var inst_18743 = (state_18761[(2)]);
var state_18761__$1 = state_18761;
var statearr_18783_18806 = state_18761__$1;
(statearr_18783_18806[(2)] = inst_18743);

(statearr_18783_18806[(1)] = (5));


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
});})(c__6459__auto___18791,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__6444__auto__,c__6459__auto___18791,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__6445__auto__ = null;
var state_machine__6445__auto____0 = (function (){
var statearr_18787 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18787[(0)] = state_machine__6445__auto__);

(statearr_18787[(1)] = (1));

return statearr_18787;
});
var state_machine__6445__auto____1 = (function (state_18761){
while(true){
var ret_value__6446__auto__ = (function (){try{while(true){
var result__6447__auto__ = switch__6444__auto__.call(null,state_18761);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6447__auto__;
}
break;
}
}catch (e18788){if((e18788 instanceof Object)){
var ex__6448__auto__ = e18788;
var statearr_18789_18807 = state_18761;
(statearr_18789_18807[(5)] = ex__6448__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18761);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18788;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18808 = state_18761;
state_18761 = G__18808;
continue;
} else {
return ret_value__6446__auto__;
}
break;
}
});
state_machine__6445__auto__ = function(state_18761){
switch(arguments.length){
case 0:
return state_machine__6445__auto____0.call(this);
case 1:
return state_machine__6445__auto____1.call(this,state_18761);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6445__auto____0;
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6445__auto____1;
return state_machine__6445__auto__;
})()
;})(switch__6444__auto__,c__6459__auto___18791,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__6461__auto__ = (function (){var statearr_18790 = f__6460__auto__.call(null);
(statearr_18790[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6459__auto___18791);

return statearr_18790;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6461__auto__);
});})(c__6459__auto___18791,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var c__6459__auto___18916 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6459__auto___18916,out){
return (function (){
var f__6460__auto__ = (function (){var switch__6444__auto__ = ((function (c__6459__auto___18916,out){
return (function (state_18892){
var state_val_18893 = (state_18892[(1)]);
if((state_val_18893 === (7))){
var inst_18872 = (state_18892[(7)]);
var inst_18871 = (state_18892[(8)]);
var inst_18871__$1 = (state_18892[(2)]);
var inst_18872__$1 = cljs.core.nth.call(null,inst_18871__$1,(0),null);
var inst_18873 = cljs.core.nth.call(null,inst_18871__$1,(1),null);
var inst_18874 = (inst_18872__$1 == null);
var state_18892__$1 = (function (){var statearr_18894 = state_18892;
(statearr_18894[(7)] = inst_18872__$1);

(statearr_18894[(8)] = inst_18871__$1);

(statearr_18894[(9)] = inst_18873);

return statearr_18894;
})();
if(cljs.core.truth_(inst_18874)){
var statearr_18895_18917 = state_18892__$1;
(statearr_18895_18917[(1)] = (8));

} else {
var statearr_18896_18918 = state_18892__$1;
(statearr_18896_18918[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18893 === (1))){
var inst_18863 = cljs.core.vec.call(null,chs);
var inst_18864 = inst_18863;
var state_18892__$1 = (function (){var statearr_18897 = state_18892;
(statearr_18897[(10)] = inst_18864);

return statearr_18897;
})();
var statearr_18898_18919 = state_18892__$1;
(statearr_18898_18919[(2)] = null);

(statearr_18898_18919[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18893 === (4))){
var inst_18864 = (state_18892[(10)]);
var state_18892__$1 = state_18892;
return cljs.core.async.ioc_alts_BANG_.call(null,state_18892__$1,(7),inst_18864);
} else {
if((state_val_18893 === (6))){
var inst_18888 = (state_18892[(2)]);
var state_18892__$1 = state_18892;
var statearr_18899_18920 = state_18892__$1;
(statearr_18899_18920[(2)] = inst_18888);

(statearr_18899_18920[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18893 === (3))){
var inst_18890 = (state_18892[(2)]);
var state_18892__$1 = state_18892;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18892__$1,inst_18890);
} else {
if((state_val_18893 === (2))){
var inst_18864 = (state_18892[(10)]);
var inst_18866 = cljs.core.count.call(null,inst_18864);
var inst_18867 = (inst_18866 > (0));
var state_18892__$1 = state_18892;
if(cljs.core.truth_(inst_18867)){
var statearr_18901_18921 = state_18892__$1;
(statearr_18901_18921[(1)] = (4));

} else {
var statearr_18902_18922 = state_18892__$1;
(statearr_18902_18922[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18893 === (11))){
var inst_18864 = (state_18892[(10)]);
var inst_18881 = (state_18892[(2)]);
var tmp18900 = inst_18864;
var inst_18864__$1 = tmp18900;
var state_18892__$1 = (function (){var statearr_18903 = state_18892;
(statearr_18903[(10)] = inst_18864__$1);

(statearr_18903[(11)] = inst_18881);

return statearr_18903;
})();
var statearr_18904_18923 = state_18892__$1;
(statearr_18904_18923[(2)] = null);

(statearr_18904_18923[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18893 === (9))){
var inst_18872 = (state_18892[(7)]);
var state_18892__$1 = state_18892;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18892__$1,(11),out,inst_18872);
} else {
if((state_val_18893 === (5))){
var inst_18886 = cljs.core.async.close_BANG_.call(null,out);
var state_18892__$1 = state_18892;
var statearr_18905_18924 = state_18892__$1;
(statearr_18905_18924[(2)] = inst_18886);

(statearr_18905_18924[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18893 === (10))){
var inst_18884 = (state_18892[(2)]);
var state_18892__$1 = state_18892;
var statearr_18906_18925 = state_18892__$1;
(statearr_18906_18925[(2)] = inst_18884);

(statearr_18906_18925[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18893 === (8))){
var inst_18864 = (state_18892[(10)]);
var inst_18872 = (state_18892[(7)]);
var inst_18871 = (state_18892[(8)]);
var inst_18873 = (state_18892[(9)]);
var inst_18876 = (function (){var c = inst_18873;
var v = inst_18872;
var vec__18869 = inst_18871;
var cs = inst_18864;
return ((function (c,v,vec__18869,cs,inst_18864,inst_18872,inst_18871,inst_18873,state_val_18893,c__6459__auto___18916,out){
return (function (p1__18809_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__18809_SHARP_);
});
;})(c,v,vec__18869,cs,inst_18864,inst_18872,inst_18871,inst_18873,state_val_18893,c__6459__auto___18916,out))
})();
var inst_18877 = cljs.core.filterv.call(null,inst_18876,inst_18864);
var inst_18864__$1 = inst_18877;
var state_18892__$1 = (function (){var statearr_18907 = state_18892;
(statearr_18907[(10)] = inst_18864__$1);

return statearr_18907;
})();
var statearr_18908_18926 = state_18892__$1;
(statearr_18908_18926[(2)] = null);

(statearr_18908_18926[(1)] = (2));


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
});})(c__6459__auto___18916,out))
;
return ((function (switch__6444__auto__,c__6459__auto___18916,out){
return (function() {
var state_machine__6445__auto__ = null;
var state_machine__6445__auto____0 = (function (){
var statearr_18912 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18912[(0)] = state_machine__6445__auto__);

(statearr_18912[(1)] = (1));

return statearr_18912;
});
var state_machine__6445__auto____1 = (function (state_18892){
while(true){
var ret_value__6446__auto__ = (function (){try{while(true){
var result__6447__auto__ = switch__6444__auto__.call(null,state_18892);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6447__auto__;
}
break;
}
}catch (e18913){if((e18913 instanceof Object)){
var ex__6448__auto__ = e18913;
var statearr_18914_18927 = state_18892;
(statearr_18914_18927[(5)] = ex__6448__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18892);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18913;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18928 = state_18892;
state_18892 = G__18928;
continue;
} else {
return ret_value__6446__auto__;
}
break;
}
});
state_machine__6445__auto__ = function(state_18892){
switch(arguments.length){
case 0:
return state_machine__6445__auto____0.call(this);
case 1:
return state_machine__6445__auto____1.call(this,state_18892);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6445__auto____0;
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6445__auto____1;
return state_machine__6445__auto__;
})()
;})(switch__6444__auto__,c__6459__auto___18916,out))
})();
var state__6461__auto__ = (function (){var statearr_18915 = f__6460__auto__.call(null);
(statearr_18915[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6459__auto___18916);

return statearr_18915;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6461__auto__);
});})(c__6459__auto___18916,out))
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
var c__6459__auto___19021 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6459__auto___19021,out){
return (function (){
var f__6460__auto__ = (function (){var switch__6444__auto__ = ((function (c__6459__auto___19021,out){
return (function (state_18998){
var state_val_18999 = (state_18998[(1)]);
if((state_val_18999 === (7))){
var inst_18980 = (state_18998[(7)]);
var inst_18980__$1 = (state_18998[(2)]);
var inst_18981 = (inst_18980__$1 == null);
var inst_18982 = cljs.core.not.call(null,inst_18981);
var state_18998__$1 = (function (){var statearr_19000 = state_18998;
(statearr_19000[(7)] = inst_18980__$1);

return statearr_19000;
})();
if(inst_18982){
var statearr_19001_19022 = state_18998__$1;
(statearr_19001_19022[(1)] = (8));

} else {
var statearr_19002_19023 = state_18998__$1;
(statearr_19002_19023[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18999 === (1))){
var inst_18975 = (0);
var state_18998__$1 = (function (){var statearr_19003 = state_18998;
(statearr_19003[(8)] = inst_18975);

return statearr_19003;
})();
var statearr_19004_19024 = state_18998__$1;
(statearr_19004_19024[(2)] = null);

(statearr_19004_19024[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18999 === (4))){
var state_18998__$1 = state_18998;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18998__$1,(7),ch);
} else {
if((state_val_18999 === (6))){
var inst_18993 = (state_18998[(2)]);
var state_18998__$1 = state_18998;
var statearr_19005_19025 = state_18998__$1;
(statearr_19005_19025[(2)] = inst_18993);

(statearr_19005_19025[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18999 === (3))){
var inst_18995 = (state_18998[(2)]);
var inst_18996 = cljs.core.async.close_BANG_.call(null,out);
var state_18998__$1 = (function (){var statearr_19006 = state_18998;
(statearr_19006[(9)] = inst_18995);

return statearr_19006;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18998__$1,inst_18996);
} else {
if((state_val_18999 === (2))){
var inst_18975 = (state_18998[(8)]);
var inst_18977 = (inst_18975 < n);
var state_18998__$1 = state_18998;
if(cljs.core.truth_(inst_18977)){
var statearr_19007_19026 = state_18998__$1;
(statearr_19007_19026[(1)] = (4));

} else {
var statearr_19008_19027 = state_18998__$1;
(statearr_19008_19027[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18999 === (11))){
var inst_18975 = (state_18998[(8)]);
var inst_18985 = (state_18998[(2)]);
var inst_18986 = (inst_18975 + (1));
var inst_18975__$1 = inst_18986;
var state_18998__$1 = (function (){var statearr_19009 = state_18998;
(statearr_19009[(10)] = inst_18985);

(statearr_19009[(8)] = inst_18975__$1);

return statearr_19009;
})();
var statearr_19010_19028 = state_18998__$1;
(statearr_19010_19028[(2)] = null);

(statearr_19010_19028[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18999 === (9))){
var state_18998__$1 = state_18998;
var statearr_19011_19029 = state_18998__$1;
(statearr_19011_19029[(2)] = null);

(statearr_19011_19029[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18999 === (5))){
var state_18998__$1 = state_18998;
var statearr_19012_19030 = state_18998__$1;
(statearr_19012_19030[(2)] = null);

(statearr_19012_19030[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18999 === (10))){
var inst_18990 = (state_18998[(2)]);
var state_18998__$1 = state_18998;
var statearr_19013_19031 = state_18998__$1;
(statearr_19013_19031[(2)] = inst_18990);

(statearr_19013_19031[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18999 === (8))){
var inst_18980 = (state_18998[(7)]);
var state_18998__$1 = state_18998;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18998__$1,(11),out,inst_18980);
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
});})(c__6459__auto___19021,out))
;
return ((function (switch__6444__auto__,c__6459__auto___19021,out){
return (function() {
var state_machine__6445__auto__ = null;
var state_machine__6445__auto____0 = (function (){
var statearr_19017 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19017[(0)] = state_machine__6445__auto__);

(statearr_19017[(1)] = (1));

return statearr_19017;
});
var state_machine__6445__auto____1 = (function (state_18998){
while(true){
var ret_value__6446__auto__ = (function (){try{while(true){
var result__6447__auto__ = switch__6444__auto__.call(null,state_18998);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6447__auto__;
}
break;
}
}catch (e19018){if((e19018 instanceof Object)){
var ex__6448__auto__ = e19018;
var statearr_19019_19032 = state_18998;
(statearr_19019_19032[(5)] = ex__6448__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18998);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19018;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19033 = state_18998;
state_18998 = G__19033;
continue;
} else {
return ret_value__6446__auto__;
}
break;
}
});
state_machine__6445__auto__ = function(state_18998){
switch(arguments.length){
case 0:
return state_machine__6445__auto____0.call(this);
case 1:
return state_machine__6445__auto____1.call(this,state_18998);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6445__auto____0;
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6445__auto____1;
return state_machine__6445__auto__;
})()
;})(switch__6444__auto__,c__6459__auto___19021,out))
})();
var state__6461__auto__ = (function (){var statearr_19020 = f__6460__auto__.call(null);
(statearr_19020[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6459__auto___19021);

return statearr_19020;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6461__auto__);
});})(c__6459__auto___19021,out))
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
if(typeof cljs.core.async.t19041 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t19041 = (function (ch,f,map_LT_,meta19042){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta19042 = meta19042;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19041.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t19041.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t19041.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t19041.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t19044 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t19044 = (function (fn1,_,meta19042,map_LT_,f,ch,meta19045){
this.fn1 = fn1;
this._ = _;
this.meta19042 = meta19042;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta19045 = meta19045;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19044.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t19044.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t19044.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__19034_SHARP_){
return f1.call(null,(((p1__19034_SHARP_ == null))?null:self__.f.call(null,p1__19034_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t19044.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_19046){
var self__ = this;
var _19046__$1 = this;
return self__.meta19045;
});})(___$1))
;

cljs.core.async.t19044.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_19046,meta19045__$1){
var self__ = this;
var _19046__$1 = this;
return (new cljs.core.async.t19044(self__.fn1,self__._,self__.meta19042,self__.map_LT_,self__.f,self__.ch,meta19045__$1));
});})(___$1))
;

cljs.core.async.t19044.cljs$lang$type = true;

cljs.core.async.t19044.cljs$lang$ctorStr = "cljs.core.async/t19044";

cljs.core.async.t19044.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t19044");
});})(___$1))
;

cljs.core.async.__GT_t19044 = ((function (___$1){
return (function __GT_t19044(fn1__$1,___$2,meta19042__$1,map_LT___$1,f__$1,ch__$1,meta19045){
return (new cljs.core.async.t19044(fn1__$1,___$2,meta19042__$1,map_LT___$1,f__$1,ch__$1,meta19045));
});})(___$1))
;

}

return (new cljs.core.async.t19044(fn1,___$1,self__.meta19042,self__.map_LT_,self__.f,self__.ch,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),737,new cljs.core.Keyword(null,"column","column",2078222095),10,new cljs.core.Keyword(null,"line","line",212345235),731,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/chrism/dev/farn/resources/public/js/out/cljs/core/async.cljs"], null)));
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

cljs.core.async.t19041.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t19041.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t19041.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t19041.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19043){
var self__ = this;
var _19043__$1 = this;
return self__.meta19042;
});

cljs.core.async.t19041.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19043,meta19042__$1){
var self__ = this;
var _19043__$1 = this;
return (new cljs.core.async.t19041(self__.ch,self__.f,self__.map_LT_,meta19042__$1));
});

cljs.core.async.t19041.cljs$lang$type = true;

cljs.core.async.t19041.cljs$lang$ctorStr = "cljs.core.async/t19041";

cljs.core.async.t19041.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t19041");
});

cljs.core.async.__GT_t19041 = (function __GT_t19041(ch__$1,f__$1,map_LT___$1,meta19042){
return (new cljs.core.async.t19041(ch__$1,f__$1,map_LT___$1,meta19042));
});

}

return (new cljs.core.async.t19041(ch,f,map_LT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),743,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),722,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/chrism/dev/farn/resources/public/js/out/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){
if(typeof cljs.core.async.t19050 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t19050 = (function (ch,f,map_GT_,meta19051){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta19051 = meta19051;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19050.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t19050.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t19050.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t19050.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t19050.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t19050.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t19050.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19052){
var self__ = this;
var _19052__$1 = this;
return self__.meta19051;
});

cljs.core.async.t19050.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19052,meta19051__$1){
var self__ = this;
var _19052__$1 = this;
return (new cljs.core.async.t19050(self__.ch,self__.f,self__.map_GT_,meta19051__$1));
});

cljs.core.async.t19050.cljs$lang$type = true;

cljs.core.async.t19050.cljs$lang$ctorStr = "cljs.core.async/t19050";

cljs.core.async.t19050.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t19050");
});

cljs.core.async.__GT_t19050 = (function __GT_t19050(ch__$1,f__$1,map_GT___$1,meta19051){
return (new cljs.core.async.t19050(ch__$1,f__$1,map_GT___$1,meta19051));
});

}

return (new cljs.core.async.t19050(ch,f,map_GT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),34,new cljs.core.Keyword(null,"end-line","end-line",1837326455),757,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),748,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/chrism/dev/farn/resources/public/js/out/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){
if(typeof cljs.core.async.t19056 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t19056 = (function (ch,p,filter_GT_,meta19057){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta19057 = meta19057;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19056.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t19056.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t19056.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t19056.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t19056.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t19056.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t19056.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t19056.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19058){
var self__ = this;
var _19058__$1 = this;
return self__.meta19057;
});

cljs.core.async.t19056.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19058,meta19057__$1){
var self__ = this;
var _19058__$1 = this;
return (new cljs.core.async.t19056(self__.ch,self__.p,self__.filter_GT_,meta19057__$1));
});

cljs.core.async.t19056.cljs$lang$type = true;

cljs.core.async.t19056.cljs$lang$ctorStr = "cljs.core.async/t19056";

cljs.core.async.t19056.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t19056");
});

cljs.core.async.__GT_t19056 = (function __GT_t19056(ch__$1,p__$1,filter_GT___$1,meta19057){
return (new cljs.core.async.t19056(ch__$1,p__$1,filter_GT___$1,meta19057));
});

}

return (new cljs.core.async.t19056(ch,p,filter_GT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),48,new cljs.core.Keyword(null,"end-line","end-line",1837326455),774,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),762,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/chrism/dev/farn/resources/public/js/out/cljs/core/async.cljs"], null)));
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
var c__6459__auto___19141 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6459__auto___19141,out){
return (function (){
var f__6460__auto__ = (function (){var switch__6444__auto__ = ((function (c__6459__auto___19141,out){
return (function (state_19120){
var state_val_19121 = (state_19120[(1)]);
if((state_val_19121 === (7))){
var inst_19116 = (state_19120[(2)]);
var state_19120__$1 = state_19120;
var statearr_19122_19142 = state_19120__$1;
(statearr_19122_19142[(2)] = inst_19116);

(statearr_19122_19142[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19121 === (1))){
var state_19120__$1 = state_19120;
var statearr_19123_19143 = state_19120__$1;
(statearr_19123_19143[(2)] = null);

(statearr_19123_19143[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19121 === (4))){
var inst_19102 = (state_19120[(7)]);
var inst_19102__$1 = (state_19120[(2)]);
var inst_19103 = (inst_19102__$1 == null);
var state_19120__$1 = (function (){var statearr_19124 = state_19120;
(statearr_19124[(7)] = inst_19102__$1);

return statearr_19124;
})();
if(cljs.core.truth_(inst_19103)){
var statearr_19125_19144 = state_19120__$1;
(statearr_19125_19144[(1)] = (5));

} else {
var statearr_19126_19145 = state_19120__$1;
(statearr_19126_19145[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19121 === (6))){
var inst_19102 = (state_19120[(7)]);
var inst_19107 = p.call(null,inst_19102);
var state_19120__$1 = state_19120;
if(cljs.core.truth_(inst_19107)){
var statearr_19127_19146 = state_19120__$1;
(statearr_19127_19146[(1)] = (8));

} else {
var statearr_19128_19147 = state_19120__$1;
(statearr_19128_19147[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19121 === (3))){
var inst_19118 = (state_19120[(2)]);
var state_19120__$1 = state_19120;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19120__$1,inst_19118);
} else {
if((state_val_19121 === (2))){
var state_19120__$1 = state_19120;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19120__$1,(4),ch);
} else {
if((state_val_19121 === (11))){
var inst_19110 = (state_19120[(2)]);
var state_19120__$1 = state_19120;
var statearr_19129_19148 = state_19120__$1;
(statearr_19129_19148[(2)] = inst_19110);

(statearr_19129_19148[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19121 === (9))){
var state_19120__$1 = state_19120;
var statearr_19130_19149 = state_19120__$1;
(statearr_19130_19149[(2)] = null);

(statearr_19130_19149[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19121 === (5))){
var inst_19105 = cljs.core.async.close_BANG_.call(null,out);
var state_19120__$1 = state_19120;
var statearr_19131_19150 = state_19120__$1;
(statearr_19131_19150[(2)] = inst_19105);

(statearr_19131_19150[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19121 === (10))){
var inst_19113 = (state_19120[(2)]);
var state_19120__$1 = (function (){var statearr_19132 = state_19120;
(statearr_19132[(8)] = inst_19113);

return statearr_19132;
})();
var statearr_19133_19151 = state_19120__$1;
(statearr_19133_19151[(2)] = null);

(statearr_19133_19151[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19121 === (8))){
var inst_19102 = (state_19120[(7)]);
var state_19120__$1 = state_19120;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19120__$1,(11),out,inst_19102);
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
});})(c__6459__auto___19141,out))
;
return ((function (switch__6444__auto__,c__6459__auto___19141,out){
return (function() {
var state_machine__6445__auto__ = null;
var state_machine__6445__auto____0 = (function (){
var statearr_19137 = [null,null,null,null,null,null,null,null,null];
(statearr_19137[(0)] = state_machine__6445__auto__);

(statearr_19137[(1)] = (1));

return statearr_19137;
});
var state_machine__6445__auto____1 = (function (state_19120){
while(true){
var ret_value__6446__auto__ = (function (){try{while(true){
var result__6447__auto__ = switch__6444__auto__.call(null,state_19120);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6447__auto__;
}
break;
}
}catch (e19138){if((e19138 instanceof Object)){
var ex__6448__auto__ = e19138;
var statearr_19139_19152 = state_19120;
(statearr_19139_19152[(5)] = ex__6448__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19120);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19138;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19153 = state_19120;
state_19120 = G__19153;
continue;
} else {
return ret_value__6446__auto__;
}
break;
}
});
state_machine__6445__auto__ = function(state_19120){
switch(arguments.length){
case 0:
return state_machine__6445__auto____0.call(this);
case 1:
return state_machine__6445__auto____1.call(this,state_19120);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6445__auto____0;
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6445__auto____1;
return state_machine__6445__auto__;
})()
;})(switch__6444__auto__,c__6459__auto___19141,out))
})();
var state__6461__auto__ = (function (){var statearr_19140 = f__6460__auto__.call(null);
(statearr_19140[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6459__auto___19141);

return statearr_19140;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6461__auto__);
});})(c__6459__auto___19141,out))
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
return (function (state_19319){
var state_val_19320 = (state_19319[(1)]);
if((state_val_19320 === (7))){
var inst_19315 = (state_19319[(2)]);
var state_19319__$1 = state_19319;
var statearr_19321_19362 = state_19319__$1;
(statearr_19321_19362[(2)] = inst_19315);

(statearr_19321_19362[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19320 === (20))){
var inst_19285 = (state_19319[(7)]);
var inst_19296 = (state_19319[(2)]);
var inst_19297 = cljs.core.next.call(null,inst_19285);
var inst_19271 = inst_19297;
var inst_19272 = null;
var inst_19273 = (0);
var inst_19274 = (0);
var state_19319__$1 = (function (){var statearr_19322 = state_19319;
(statearr_19322[(8)] = inst_19296);

(statearr_19322[(9)] = inst_19273);

(statearr_19322[(10)] = inst_19274);

(statearr_19322[(11)] = inst_19271);

(statearr_19322[(12)] = inst_19272);

return statearr_19322;
})();
var statearr_19323_19363 = state_19319__$1;
(statearr_19323_19363[(2)] = null);

(statearr_19323_19363[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19320 === (1))){
var state_19319__$1 = state_19319;
var statearr_19324_19364 = state_19319__$1;
(statearr_19324_19364[(2)] = null);

(statearr_19324_19364[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19320 === (4))){
var inst_19260 = (state_19319[(13)]);
var inst_19260__$1 = (state_19319[(2)]);
var inst_19261 = (inst_19260__$1 == null);
var state_19319__$1 = (function (){var statearr_19325 = state_19319;
(statearr_19325[(13)] = inst_19260__$1);

return statearr_19325;
})();
if(cljs.core.truth_(inst_19261)){
var statearr_19326_19365 = state_19319__$1;
(statearr_19326_19365[(1)] = (5));

} else {
var statearr_19327_19366 = state_19319__$1;
(statearr_19327_19366[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19320 === (15))){
var state_19319__$1 = state_19319;
var statearr_19331_19367 = state_19319__$1;
(statearr_19331_19367[(2)] = null);

(statearr_19331_19367[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19320 === (21))){
var state_19319__$1 = state_19319;
var statearr_19332_19368 = state_19319__$1;
(statearr_19332_19368[(2)] = null);

(statearr_19332_19368[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19320 === (13))){
var inst_19273 = (state_19319[(9)]);
var inst_19274 = (state_19319[(10)]);
var inst_19271 = (state_19319[(11)]);
var inst_19272 = (state_19319[(12)]);
var inst_19281 = (state_19319[(2)]);
var inst_19282 = (inst_19274 + (1));
var tmp19328 = inst_19273;
var tmp19329 = inst_19271;
var tmp19330 = inst_19272;
var inst_19271__$1 = tmp19329;
var inst_19272__$1 = tmp19330;
var inst_19273__$1 = tmp19328;
var inst_19274__$1 = inst_19282;
var state_19319__$1 = (function (){var statearr_19333 = state_19319;
(statearr_19333[(9)] = inst_19273__$1);

(statearr_19333[(10)] = inst_19274__$1);

(statearr_19333[(11)] = inst_19271__$1);

(statearr_19333[(14)] = inst_19281);

(statearr_19333[(12)] = inst_19272__$1);

return statearr_19333;
})();
var statearr_19334_19369 = state_19319__$1;
(statearr_19334_19369[(2)] = null);

(statearr_19334_19369[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19320 === (22))){
var state_19319__$1 = state_19319;
var statearr_19335_19370 = state_19319__$1;
(statearr_19335_19370[(2)] = null);

(statearr_19335_19370[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19320 === (6))){
var inst_19260 = (state_19319[(13)]);
var inst_19269 = f.call(null,inst_19260);
var inst_19270 = cljs.core.seq.call(null,inst_19269);
var inst_19271 = inst_19270;
var inst_19272 = null;
var inst_19273 = (0);
var inst_19274 = (0);
var state_19319__$1 = (function (){var statearr_19336 = state_19319;
(statearr_19336[(9)] = inst_19273);

(statearr_19336[(10)] = inst_19274);

(statearr_19336[(11)] = inst_19271);

(statearr_19336[(12)] = inst_19272);

return statearr_19336;
})();
var statearr_19337_19371 = state_19319__$1;
(statearr_19337_19371[(2)] = null);

(statearr_19337_19371[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19320 === (17))){
var inst_19285 = (state_19319[(7)]);
var inst_19289 = cljs.core.chunk_first.call(null,inst_19285);
var inst_19290 = cljs.core.chunk_rest.call(null,inst_19285);
var inst_19291 = cljs.core.count.call(null,inst_19289);
var inst_19271 = inst_19290;
var inst_19272 = inst_19289;
var inst_19273 = inst_19291;
var inst_19274 = (0);
var state_19319__$1 = (function (){var statearr_19338 = state_19319;
(statearr_19338[(9)] = inst_19273);

(statearr_19338[(10)] = inst_19274);

(statearr_19338[(11)] = inst_19271);

(statearr_19338[(12)] = inst_19272);

return statearr_19338;
})();
var statearr_19339_19372 = state_19319__$1;
(statearr_19339_19372[(2)] = null);

(statearr_19339_19372[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19320 === (3))){
var inst_19317 = (state_19319[(2)]);
var state_19319__$1 = state_19319;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19319__$1,inst_19317);
} else {
if((state_val_19320 === (12))){
var inst_19305 = (state_19319[(2)]);
var state_19319__$1 = state_19319;
var statearr_19340_19373 = state_19319__$1;
(statearr_19340_19373[(2)] = inst_19305);

(statearr_19340_19373[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19320 === (2))){
var state_19319__$1 = state_19319;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19319__$1,(4),in$);
} else {
if((state_val_19320 === (23))){
var inst_19313 = (state_19319[(2)]);
var state_19319__$1 = state_19319;
var statearr_19341_19374 = state_19319__$1;
(statearr_19341_19374[(2)] = inst_19313);

(statearr_19341_19374[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19320 === (19))){
var inst_19300 = (state_19319[(2)]);
var state_19319__$1 = state_19319;
var statearr_19342_19375 = state_19319__$1;
(statearr_19342_19375[(2)] = inst_19300);

(statearr_19342_19375[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19320 === (11))){
var inst_19285 = (state_19319[(7)]);
var inst_19271 = (state_19319[(11)]);
var inst_19285__$1 = cljs.core.seq.call(null,inst_19271);
var state_19319__$1 = (function (){var statearr_19343 = state_19319;
(statearr_19343[(7)] = inst_19285__$1);

return statearr_19343;
})();
if(inst_19285__$1){
var statearr_19344_19376 = state_19319__$1;
(statearr_19344_19376[(1)] = (14));

} else {
var statearr_19345_19377 = state_19319__$1;
(statearr_19345_19377[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19320 === (9))){
var inst_19307 = (state_19319[(2)]);
var inst_19308 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_19319__$1 = (function (){var statearr_19346 = state_19319;
(statearr_19346[(15)] = inst_19307);

return statearr_19346;
})();
if(cljs.core.truth_(inst_19308)){
var statearr_19347_19378 = state_19319__$1;
(statearr_19347_19378[(1)] = (21));

} else {
var statearr_19348_19379 = state_19319__$1;
(statearr_19348_19379[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19320 === (5))){
var inst_19263 = cljs.core.async.close_BANG_.call(null,out);
var state_19319__$1 = state_19319;
var statearr_19349_19380 = state_19319__$1;
(statearr_19349_19380[(2)] = inst_19263);

(statearr_19349_19380[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19320 === (14))){
var inst_19285 = (state_19319[(7)]);
var inst_19287 = cljs.core.chunked_seq_QMARK_.call(null,inst_19285);
var state_19319__$1 = state_19319;
if(inst_19287){
var statearr_19350_19381 = state_19319__$1;
(statearr_19350_19381[(1)] = (17));

} else {
var statearr_19351_19382 = state_19319__$1;
(statearr_19351_19382[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19320 === (16))){
var inst_19303 = (state_19319[(2)]);
var state_19319__$1 = state_19319;
var statearr_19352_19383 = state_19319__$1;
(statearr_19352_19383[(2)] = inst_19303);

(statearr_19352_19383[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19320 === (10))){
var inst_19274 = (state_19319[(10)]);
var inst_19272 = (state_19319[(12)]);
var inst_19279 = cljs.core._nth.call(null,inst_19272,inst_19274);
var state_19319__$1 = state_19319;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19319__$1,(13),out,inst_19279);
} else {
if((state_val_19320 === (18))){
var inst_19285 = (state_19319[(7)]);
var inst_19294 = cljs.core.first.call(null,inst_19285);
var state_19319__$1 = state_19319;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19319__$1,(20),out,inst_19294);
} else {
if((state_val_19320 === (8))){
var inst_19273 = (state_19319[(9)]);
var inst_19274 = (state_19319[(10)]);
var inst_19276 = (inst_19274 < inst_19273);
var inst_19277 = inst_19276;
var state_19319__$1 = state_19319;
if(cljs.core.truth_(inst_19277)){
var statearr_19353_19384 = state_19319__$1;
(statearr_19353_19384[(1)] = (10));

} else {
var statearr_19354_19385 = state_19319__$1;
(statearr_19354_19385[(1)] = (11));

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
var statearr_19358 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19358[(0)] = state_machine__6445__auto__);

(statearr_19358[(1)] = (1));

return statearr_19358;
});
var state_machine__6445__auto____1 = (function (state_19319){
while(true){
var ret_value__6446__auto__ = (function (){try{while(true){
var result__6447__auto__ = switch__6444__auto__.call(null,state_19319);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6447__auto__;
}
break;
}
}catch (e19359){if((e19359 instanceof Object)){
var ex__6448__auto__ = e19359;
var statearr_19360_19386 = state_19319;
(statearr_19360_19386[(5)] = ex__6448__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19319);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19359;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19387 = state_19319;
state_19319 = G__19387;
continue;
} else {
return ret_value__6446__auto__;
}
break;
}
});
state_machine__6445__auto__ = function(state_19319){
switch(arguments.length){
case 0:
return state_machine__6445__auto____0.call(this);
case 1:
return state_machine__6445__auto____1.call(this,state_19319);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6445__auto____0;
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6445__auto____1;
return state_machine__6445__auto__;
})()
;})(switch__6444__auto__,c__6459__auto__))
})();
var state__6461__auto__ = (function (){var statearr_19361 = f__6460__auto__.call(null);
(statearr_19361[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6459__auto__);

return statearr_19361;
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
var c__6459__auto___19484 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6459__auto___19484,out){
return (function (){
var f__6460__auto__ = (function (){var switch__6444__auto__ = ((function (c__6459__auto___19484,out){
return (function (state_19459){
var state_val_19460 = (state_19459[(1)]);
if((state_val_19460 === (7))){
var inst_19454 = (state_19459[(2)]);
var state_19459__$1 = state_19459;
var statearr_19461_19485 = state_19459__$1;
(statearr_19461_19485[(2)] = inst_19454);

(statearr_19461_19485[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19460 === (1))){
var inst_19436 = null;
var state_19459__$1 = (function (){var statearr_19462 = state_19459;
(statearr_19462[(7)] = inst_19436);

return statearr_19462;
})();
var statearr_19463_19486 = state_19459__$1;
(statearr_19463_19486[(2)] = null);

(statearr_19463_19486[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19460 === (4))){
var inst_19439 = (state_19459[(8)]);
var inst_19439__$1 = (state_19459[(2)]);
var inst_19440 = (inst_19439__$1 == null);
var inst_19441 = cljs.core.not.call(null,inst_19440);
var state_19459__$1 = (function (){var statearr_19464 = state_19459;
(statearr_19464[(8)] = inst_19439__$1);

return statearr_19464;
})();
if(inst_19441){
var statearr_19465_19487 = state_19459__$1;
(statearr_19465_19487[(1)] = (5));

} else {
var statearr_19466_19488 = state_19459__$1;
(statearr_19466_19488[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19460 === (6))){
var state_19459__$1 = state_19459;
var statearr_19467_19489 = state_19459__$1;
(statearr_19467_19489[(2)] = null);

(statearr_19467_19489[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19460 === (3))){
var inst_19456 = (state_19459[(2)]);
var inst_19457 = cljs.core.async.close_BANG_.call(null,out);
var state_19459__$1 = (function (){var statearr_19468 = state_19459;
(statearr_19468[(9)] = inst_19456);

return statearr_19468;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19459__$1,inst_19457);
} else {
if((state_val_19460 === (2))){
var state_19459__$1 = state_19459;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19459__$1,(4),ch);
} else {
if((state_val_19460 === (11))){
var inst_19439 = (state_19459[(8)]);
var inst_19448 = (state_19459[(2)]);
var inst_19436 = inst_19439;
var state_19459__$1 = (function (){var statearr_19469 = state_19459;
(statearr_19469[(7)] = inst_19436);

(statearr_19469[(10)] = inst_19448);

return statearr_19469;
})();
var statearr_19470_19490 = state_19459__$1;
(statearr_19470_19490[(2)] = null);

(statearr_19470_19490[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19460 === (9))){
var inst_19439 = (state_19459[(8)]);
var state_19459__$1 = state_19459;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19459__$1,(11),out,inst_19439);
} else {
if((state_val_19460 === (5))){
var inst_19436 = (state_19459[(7)]);
var inst_19439 = (state_19459[(8)]);
var inst_19443 = cljs.core._EQ_.call(null,inst_19439,inst_19436);
var state_19459__$1 = state_19459;
if(inst_19443){
var statearr_19472_19491 = state_19459__$1;
(statearr_19472_19491[(1)] = (8));

} else {
var statearr_19473_19492 = state_19459__$1;
(statearr_19473_19492[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19460 === (10))){
var inst_19451 = (state_19459[(2)]);
var state_19459__$1 = state_19459;
var statearr_19474_19493 = state_19459__$1;
(statearr_19474_19493[(2)] = inst_19451);

(statearr_19474_19493[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19460 === (8))){
var inst_19436 = (state_19459[(7)]);
var tmp19471 = inst_19436;
var inst_19436__$1 = tmp19471;
var state_19459__$1 = (function (){var statearr_19475 = state_19459;
(statearr_19475[(7)] = inst_19436__$1);

return statearr_19475;
})();
var statearr_19476_19494 = state_19459__$1;
(statearr_19476_19494[(2)] = null);

(statearr_19476_19494[(1)] = (2));


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
});})(c__6459__auto___19484,out))
;
return ((function (switch__6444__auto__,c__6459__auto___19484,out){
return (function() {
var state_machine__6445__auto__ = null;
var state_machine__6445__auto____0 = (function (){
var statearr_19480 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19480[(0)] = state_machine__6445__auto__);

(statearr_19480[(1)] = (1));

return statearr_19480;
});
var state_machine__6445__auto____1 = (function (state_19459){
while(true){
var ret_value__6446__auto__ = (function (){try{while(true){
var result__6447__auto__ = switch__6444__auto__.call(null,state_19459);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6447__auto__;
}
break;
}
}catch (e19481){if((e19481 instanceof Object)){
var ex__6448__auto__ = e19481;
var statearr_19482_19495 = state_19459;
(statearr_19482_19495[(5)] = ex__6448__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19459);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19481;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19496 = state_19459;
state_19459 = G__19496;
continue;
} else {
return ret_value__6446__auto__;
}
break;
}
});
state_machine__6445__auto__ = function(state_19459){
switch(arguments.length){
case 0:
return state_machine__6445__auto____0.call(this);
case 1:
return state_machine__6445__auto____1.call(this,state_19459);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6445__auto____0;
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6445__auto____1;
return state_machine__6445__auto__;
})()
;})(switch__6444__auto__,c__6459__auto___19484,out))
})();
var state__6461__auto__ = (function (){var statearr_19483 = f__6460__auto__.call(null);
(statearr_19483[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6459__auto___19484);

return statearr_19483;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6461__auto__);
});})(c__6459__auto___19484,out))
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
var c__6459__auto___19631 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6459__auto___19631,out){
return (function (){
var f__6460__auto__ = (function (){var switch__6444__auto__ = ((function (c__6459__auto___19631,out){
return (function (state_19601){
var state_val_19602 = (state_19601[(1)]);
if((state_val_19602 === (7))){
var inst_19597 = (state_19601[(2)]);
var state_19601__$1 = state_19601;
var statearr_19603_19632 = state_19601__$1;
(statearr_19603_19632[(2)] = inst_19597);

(statearr_19603_19632[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19602 === (1))){
var inst_19564 = (new Array(n));
var inst_19565 = inst_19564;
var inst_19566 = (0);
var state_19601__$1 = (function (){var statearr_19604 = state_19601;
(statearr_19604[(7)] = inst_19565);

(statearr_19604[(8)] = inst_19566);

return statearr_19604;
})();
var statearr_19605_19633 = state_19601__$1;
(statearr_19605_19633[(2)] = null);

(statearr_19605_19633[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19602 === (4))){
var inst_19569 = (state_19601[(9)]);
var inst_19569__$1 = (state_19601[(2)]);
var inst_19570 = (inst_19569__$1 == null);
var inst_19571 = cljs.core.not.call(null,inst_19570);
var state_19601__$1 = (function (){var statearr_19606 = state_19601;
(statearr_19606[(9)] = inst_19569__$1);

return statearr_19606;
})();
if(inst_19571){
var statearr_19607_19634 = state_19601__$1;
(statearr_19607_19634[(1)] = (5));

} else {
var statearr_19608_19635 = state_19601__$1;
(statearr_19608_19635[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19602 === (15))){
var inst_19591 = (state_19601[(2)]);
var state_19601__$1 = state_19601;
var statearr_19609_19636 = state_19601__$1;
(statearr_19609_19636[(2)] = inst_19591);

(statearr_19609_19636[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19602 === (13))){
var state_19601__$1 = state_19601;
var statearr_19610_19637 = state_19601__$1;
(statearr_19610_19637[(2)] = null);

(statearr_19610_19637[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19602 === (6))){
var inst_19566 = (state_19601[(8)]);
var inst_19587 = (inst_19566 > (0));
var state_19601__$1 = state_19601;
if(cljs.core.truth_(inst_19587)){
var statearr_19611_19638 = state_19601__$1;
(statearr_19611_19638[(1)] = (12));

} else {
var statearr_19612_19639 = state_19601__$1;
(statearr_19612_19639[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19602 === (3))){
var inst_19599 = (state_19601[(2)]);
var state_19601__$1 = state_19601;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19601__$1,inst_19599);
} else {
if((state_val_19602 === (12))){
var inst_19565 = (state_19601[(7)]);
var inst_19589 = cljs.core.vec.call(null,inst_19565);
var state_19601__$1 = state_19601;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19601__$1,(15),out,inst_19589);
} else {
if((state_val_19602 === (2))){
var state_19601__$1 = state_19601;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19601__$1,(4),ch);
} else {
if((state_val_19602 === (11))){
var inst_19581 = (state_19601[(2)]);
var inst_19582 = (new Array(n));
var inst_19565 = inst_19582;
var inst_19566 = (0);
var state_19601__$1 = (function (){var statearr_19613 = state_19601;
(statearr_19613[(7)] = inst_19565);

(statearr_19613[(8)] = inst_19566);

(statearr_19613[(10)] = inst_19581);

return statearr_19613;
})();
var statearr_19614_19640 = state_19601__$1;
(statearr_19614_19640[(2)] = null);

(statearr_19614_19640[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19602 === (9))){
var inst_19565 = (state_19601[(7)]);
var inst_19579 = cljs.core.vec.call(null,inst_19565);
var state_19601__$1 = state_19601;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19601__$1,(11),out,inst_19579);
} else {
if((state_val_19602 === (5))){
var inst_19574 = (state_19601[(11)]);
var inst_19565 = (state_19601[(7)]);
var inst_19566 = (state_19601[(8)]);
var inst_19569 = (state_19601[(9)]);
var inst_19573 = (inst_19565[inst_19566] = inst_19569);
var inst_19574__$1 = (inst_19566 + (1));
var inst_19575 = (inst_19574__$1 < n);
var state_19601__$1 = (function (){var statearr_19615 = state_19601;
(statearr_19615[(11)] = inst_19574__$1);

(statearr_19615[(12)] = inst_19573);

return statearr_19615;
})();
if(cljs.core.truth_(inst_19575)){
var statearr_19616_19641 = state_19601__$1;
(statearr_19616_19641[(1)] = (8));

} else {
var statearr_19617_19642 = state_19601__$1;
(statearr_19617_19642[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19602 === (14))){
var inst_19594 = (state_19601[(2)]);
var inst_19595 = cljs.core.async.close_BANG_.call(null,out);
var state_19601__$1 = (function (){var statearr_19619 = state_19601;
(statearr_19619[(13)] = inst_19594);

return statearr_19619;
})();
var statearr_19620_19643 = state_19601__$1;
(statearr_19620_19643[(2)] = inst_19595);

(statearr_19620_19643[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19602 === (10))){
var inst_19585 = (state_19601[(2)]);
var state_19601__$1 = state_19601;
var statearr_19621_19644 = state_19601__$1;
(statearr_19621_19644[(2)] = inst_19585);

(statearr_19621_19644[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19602 === (8))){
var inst_19574 = (state_19601[(11)]);
var inst_19565 = (state_19601[(7)]);
var tmp19618 = inst_19565;
var inst_19565__$1 = tmp19618;
var inst_19566 = inst_19574;
var state_19601__$1 = (function (){var statearr_19622 = state_19601;
(statearr_19622[(7)] = inst_19565__$1);

(statearr_19622[(8)] = inst_19566);

return statearr_19622;
})();
var statearr_19623_19645 = state_19601__$1;
(statearr_19623_19645[(2)] = null);

(statearr_19623_19645[(1)] = (2));


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
});})(c__6459__auto___19631,out))
;
return ((function (switch__6444__auto__,c__6459__auto___19631,out){
return (function() {
var state_machine__6445__auto__ = null;
var state_machine__6445__auto____0 = (function (){
var statearr_19627 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19627[(0)] = state_machine__6445__auto__);

(statearr_19627[(1)] = (1));

return statearr_19627;
});
var state_machine__6445__auto____1 = (function (state_19601){
while(true){
var ret_value__6446__auto__ = (function (){try{while(true){
var result__6447__auto__ = switch__6444__auto__.call(null,state_19601);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6447__auto__;
}
break;
}
}catch (e19628){if((e19628 instanceof Object)){
var ex__6448__auto__ = e19628;
var statearr_19629_19646 = state_19601;
(statearr_19629_19646[(5)] = ex__6448__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19601);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19628;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19647 = state_19601;
state_19601 = G__19647;
continue;
} else {
return ret_value__6446__auto__;
}
break;
}
});
state_machine__6445__auto__ = function(state_19601){
switch(arguments.length){
case 0:
return state_machine__6445__auto____0.call(this);
case 1:
return state_machine__6445__auto____1.call(this,state_19601);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6445__auto____0;
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6445__auto____1;
return state_machine__6445__auto__;
})()
;})(switch__6444__auto__,c__6459__auto___19631,out))
})();
var state__6461__auto__ = (function (){var statearr_19630 = f__6460__auto__.call(null);
(statearr_19630[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6459__auto___19631);

return statearr_19630;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6461__auto__);
});})(c__6459__auto___19631,out))
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
var c__6459__auto___19790 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6459__auto___19790,out){
return (function (){
var f__6460__auto__ = (function (){var switch__6444__auto__ = ((function (c__6459__auto___19790,out){
return (function (state_19760){
var state_val_19761 = (state_19760[(1)]);
if((state_val_19761 === (7))){
var inst_19756 = (state_19760[(2)]);
var state_19760__$1 = state_19760;
var statearr_19762_19791 = state_19760__$1;
(statearr_19762_19791[(2)] = inst_19756);

(statearr_19762_19791[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19761 === (1))){
var inst_19719 = [];
var inst_19720 = inst_19719;
var inst_19721 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_19760__$1 = (function (){var statearr_19763 = state_19760;
(statearr_19763[(7)] = inst_19720);

(statearr_19763[(8)] = inst_19721);

return statearr_19763;
})();
var statearr_19764_19792 = state_19760__$1;
(statearr_19764_19792[(2)] = null);

(statearr_19764_19792[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19761 === (4))){
var inst_19724 = (state_19760[(9)]);
var inst_19724__$1 = (state_19760[(2)]);
var inst_19725 = (inst_19724__$1 == null);
var inst_19726 = cljs.core.not.call(null,inst_19725);
var state_19760__$1 = (function (){var statearr_19765 = state_19760;
(statearr_19765[(9)] = inst_19724__$1);

return statearr_19765;
})();
if(inst_19726){
var statearr_19766_19793 = state_19760__$1;
(statearr_19766_19793[(1)] = (5));

} else {
var statearr_19767_19794 = state_19760__$1;
(statearr_19767_19794[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19761 === (15))){
var inst_19750 = (state_19760[(2)]);
var state_19760__$1 = state_19760;
var statearr_19768_19795 = state_19760__$1;
(statearr_19768_19795[(2)] = inst_19750);

(statearr_19768_19795[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19761 === (13))){
var state_19760__$1 = state_19760;
var statearr_19769_19796 = state_19760__$1;
(statearr_19769_19796[(2)] = null);

(statearr_19769_19796[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19761 === (6))){
var inst_19720 = (state_19760[(7)]);
var inst_19745 = inst_19720.length;
var inst_19746 = (inst_19745 > (0));
var state_19760__$1 = state_19760;
if(cljs.core.truth_(inst_19746)){
var statearr_19770_19797 = state_19760__$1;
(statearr_19770_19797[(1)] = (12));

} else {
var statearr_19771_19798 = state_19760__$1;
(statearr_19771_19798[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19761 === (3))){
var inst_19758 = (state_19760[(2)]);
var state_19760__$1 = state_19760;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19760__$1,inst_19758);
} else {
if((state_val_19761 === (12))){
var inst_19720 = (state_19760[(7)]);
var inst_19748 = cljs.core.vec.call(null,inst_19720);
var state_19760__$1 = state_19760;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19760__$1,(15),out,inst_19748);
} else {
if((state_val_19761 === (2))){
var state_19760__$1 = state_19760;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19760__$1,(4),ch);
} else {
if((state_val_19761 === (11))){
var inst_19728 = (state_19760[(10)]);
var inst_19724 = (state_19760[(9)]);
var inst_19738 = (state_19760[(2)]);
var inst_19739 = [];
var inst_19740 = inst_19739.push(inst_19724);
var inst_19720 = inst_19739;
var inst_19721 = inst_19728;
var state_19760__$1 = (function (){var statearr_19772 = state_19760;
(statearr_19772[(11)] = inst_19740);

(statearr_19772[(7)] = inst_19720);

(statearr_19772[(8)] = inst_19721);

(statearr_19772[(12)] = inst_19738);

return statearr_19772;
})();
var statearr_19773_19799 = state_19760__$1;
(statearr_19773_19799[(2)] = null);

(statearr_19773_19799[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19761 === (9))){
var inst_19720 = (state_19760[(7)]);
var inst_19736 = cljs.core.vec.call(null,inst_19720);
var state_19760__$1 = state_19760;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19760__$1,(11),out,inst_19736);
} else {
if((state_val_19761 === (5))){
var inst_19728 = (state_19760[(10)]);
var inst_19721 = (state_19760[(8)]);
var inst_19724 = (state_19760[(9)]);
var inst_19728__$1 = f.call(null,inst_19724);
var inst_19729 = cljs.core._EQ_.call(null,inst_19728__$1,inst_19721);
var inst_19730 = cljs.core.keyword_identical_QMARK_.call(null,inst_19721,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_19731 = (inst_19729) || (inst_19730);
var state_19760__$1 = (function (){var statearr_19774 = state_19760;
(statearr_19774[(10)] = inst_19728__$1);

return statearr_19774;
})();
if(cljs.core.truth_(inst_19731)){
var statearr_19775_19800 = state_19760__$1;
(statearr_19775_19800[(1)] = (8));

} else {
var statearr_19776_19801 = state_19760__$1;
(statearr_19776_19801[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19761 === (14))){
var inst_19753 = (state_19760[(2)]);
var inst_19754 = cljs.core.async.close_BANG_.call(null,out);
var state_19760__$1 = (function (){var statearr_19778 = state_19760;
(statearr_19778[(13)] = inst_19753);

return statearr_19778;
})();
var statearr_19779_19802 = state_19760__$1;
(statearr_19779_19802[(2)] = inst_19754);

(statearr_19779_19802[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19761 === (10))){
var inst_19743 = (state_19760[(2)]);
var state_19760__$1 = state_19760;
var statearr_19780_19803 = state_19760__$1;
(statearr_19780_19803[(2)] = inst_19743);

(statearr_19780_19803[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19761 === (8))){
var inst_19728 = (state_19760[(10)]);
var inst_19720 = (state_19760[(7)]);
var inst_19724 = (state_19760[(9)]);
var inst_19733 = inst_19720.push(inst_19724);
var tmp19777 = inst_19720;
var inst_19720__$1 = tmp19777;
var inst_19721 = inst_19728;
var state_19760__$1 = (function (){var statearr_19781 = state_19760;
(statearr_19781[(14)] = inst_19733);

(statearr_19781[(7)] = inst_19720__$1);

(statearr_19781[(8)] = inst_19721);

return statearr_19781;
})();
var statearr_19782_19804 = state_19760__$1;
(statearr_19782_19804[(2)] = null);

(statearr_19782_19804[(1)] = (2));


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
});})(c__6459__auto___19790,out))
;
return ((function (switch__6444__auto__,c__6459__auto___19790,out){
return (function() {
var state_machine__6445__auto__ = null;
var state_machine__6445__auto____0 = (function (){
var statearr_19786 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19786[(0)] = state_machine__6445__auto__);

(statearr_19786[(1)] = (1));

return statearr_19786;
});
var state_machine__6445__auto____1 = (function (state_19760){
while(true){
var ret_value__6446__auto__ = (function (){try{while(true){
var result__6447__auto__ = switch__6444__auto__.call(null,state_19760);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6447__auto__;
}
break;
}
}catch (e19787){if((e19787 instanceof Object)){
var ex__6448__auto__ = e19787;
var statearr_19788_19805 = state_19760;
(statearr_19788_19805[(5)] = ex__6448__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19760);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19787;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19806 = state_19760;
state_19760 = G__19806;
continue;
} else {
return ret_value__6446__auto__;
}
break;
}
});
state_machine__6445__auto__ = function(state_19760){
switch(arguments.length){
case 0:
return state_machine__6445__auto____0.call(this);
case 1:
return state_machine__6445__auto____1.call(this,state_19760);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6445__auto____0;
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6445__auto____1;
return state_machine__6445__auto__;
})()
;})(switch__6444__auto__,c__6459__auto___19790,out))
})();
var state__6461__auto__ = (function (){var statearr_19789 = f__6460__auto__.call(null);
(statearr_19789[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6459__auto___19790);

return statearr_19789;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6461__auto__);
});})(c__6459__auto___19790,out))
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