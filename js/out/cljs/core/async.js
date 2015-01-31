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
if(typeof cljs.core.async.t16840 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t16840 = (function (f,fn_handler,meta16841){
this.f = f;
this.fn_handler = fn_handler;
this.meta16841 = meta16841;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16840.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t16840.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t16840.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t16840.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16842){
var self__ = this;
var _16842__$1 = this;
return self__.meta16841;
});

cljs.core.async.t16840.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16842,meta16841__$1){
var self__ = this;
var _16842__$1 = this;
return (new cljs.core.async.t16840(self__.f,self__.fn_handler,meta16841__$1));
});

cljs.core.async.t16840.cljs$lang$type = true;

cljs.core.async.t16840.cljs$lang$ctorStr = "cljs.core.async/t16840";

cljs.core.async.t16840.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t16840");
});

cljs.core.async.__GT_t16840 = (function __GT_t16840(f__$1,fn_handler__$1,meta16841){
return (new cljs.core.async.t16840(f__$1,fn_handler__$1,meta16841));
});

}

return (new cljs.core.async.t16840(f,fn_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),20,new cljs.core.Keyword(null,"end-line","end-line",1837326455),16,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),13,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/chrism/dev/farn/resources/public/js/out/cljs/core/async.cljs"], null)));
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
var G__16844 = buff;
if(G__16844){
var bit__4311__auto__ = null;
if(cljs.core.truth_((function (){var or__3630__auto__ = bit__4311__auto__;
if(cljs.core.truth_(or__3630__auto__)){
return or__3630__auto__;
} else {
return G__16844.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__16844.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__16844);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__16844);
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
var val_16845 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_16845);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_16845,ret){
return (function (){
return fn1.call(null,val_16845);
});})(val_16845,ret))
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
var n__4517__auto___16846 = n;
var x_16847 = (0);
while(true){
if((x_16847 < n__4517__auto___16846)){
(a[x_16847] = (0));

var G__16848 = (x_16847 + (1));
x_16847 = G__16848;
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

var G__16849 = (i + (1));
i = G__16849;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t16853 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t16853 = (function (flag,alt_flag,meta16854){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta16854 = meta16854;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16853.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t16853.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t16853.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t16853.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_16855){
var self__ = this;
var _16855__$1 = this;
return self__.meta16854;
});})(flag))
;

cljs.core.async.t16853.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_16855,meta16854__$1){
var self__ = this;
var _16855__$1 = this;
return (new cljs.core.async.t16853(self__.flag,self__.alt_flag,meta16854__$1));
});})(flag))
;

cljs.core.async.t16853.cljs$lang$type = true;

cljs.core.async.t16853.cljs$lang$ctorStr = "cljs.core.async/t16853";

cljs.core.async.t16853.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t16853");
});})(flag))
;

cljs.core.async.__GT_t16853 = ((function (flag){
return (function __GT_t16853(flag__$1,alt_flag__$1,meta16854){
return (new cljs.core.async.t16853(flag__$1,alt_flag__$1,meta16854));
});})(flag))
;

}

return (new cljs.core.async.t16853(flag,alt_flag,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),15,new cljs.core.Keyword(null,"end-line","end-line",1837326455),146,new cljs.core.Keyword(null,"column","column",2078222095),5,new cljs.core.Keyword(null,"line","line",212345235),141,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/chrism/dev/farn/resources/public/js/out/cljs/core/async.cljs"], null)));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){
if(typeof cljs.core.async.t16859 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t16859 = (function (cb,flag,alt_handler,meta16860){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta16860 = meta16860;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16859.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t16859.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t16859.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t16859.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16861){
var self__ = this;
var _16861__$1 = this;
return self__.meta16860;
});

cljs.core.async.t16859.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16861,meta16860__$1){
var self__ = this;
var _16861__$1 = this;
return (new cljs.core.async.t16859(self__.cb,self__.flag,self__.alt_handler,meta16860__$1));
});

cljs.core.async.t16859.cljs$lang$type = true;

cljs.core.async.t16859.cljs$lang$ctorStr = "cljs.core.async/t16859";

cljs.core.async.t16859.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t16859");
});

cljs.core.async.__GT_t16859 = (function __GT_t16859(cb__$1,flag__$1,alt_handler__$1,meta16860){
return (new cljs.core.async.t16859(cb__$1,flag__$1,alt_handler__$1,meta16860));
});

}

return (new cljs.core.async.t16859(cb,flag,alt_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),11,new cljs.core.Keyword(null,"end-line","end-line",1837326455),154,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),149,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/chrism/dev/farn/resources/public/js/out/cljs/core/async.cljs"], null)));
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
return (function (p1__16862_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__16862_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__16863_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__16863_SHARP_,port], null));
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
var G__16864 = (i + (1));
i = G__16864;
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
var alts_BANG___delegate = function (ports,p__16865){
var map__16867 = p__16865;
var map__16867__$1 = ((cljs.core.seq_QMARK_.call(null,map__16867))?cljs.core.apply.call(null,cljs.core.hash_map,map__16867):map__16867);
var opts = map__16867__$1;
throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__16865 = null;
if (arguments.length > 1) {
  p__16865 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return alts_BANG___delegate.call(this,ports,p__16865);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__16868){
var ports = cljs.core.first(arglist__16868);
var p__16865 = cljs.core.rest(arglist__16868);
return alts_BANG___delegate(ports,p__16865);
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
var c__6459__auto___16963 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6459__auto___16963){
return (function (){
var f__6460__auto__ = (function (){var switch__6444__auto__ = ((function (c__6459__auto___16963){
return (function (state_16939){
var state_val_16940 = (state_16939[(1)]);
if((state_val_16940 === (7))){
var inst_16935 = (state_16939[(2)]);
var state_16939__$1 = state_16939;
var statearr_16941_16964 = state_16939__$1;
(statearr_16941_16964[(2)] = inst_16935);

(statearr_16941_16964[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16940 === (1))){
var state_16939__$1 = state_16939;
var statearr_16942_16965 = state_16939__$1;
(statearr_16942_16965[(2)] = null);

(statearr_16942_16965[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16940 === (4))){
var inst_16918 = (state_16939[(7)]);
var inst_16918__$1 = (state_16939[(2)]);
var inst_16919 = (inst_16918__$1 == null);
var state_16939__$1 = (function (){var statearr_16943 = state_16939;
(statearr_16943[(7)] = inst_16918__$1);

return statearr_16943;
})();
if(cljs.core.truth_(inst_16919)){
var statearr_16944_16966 = state_16939__$1;
(statearr_16944_16966[(1)] = (5));

} else {
var statearr_16945_16967 = state_16939__$1;
(statearr_16945_16967[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16940 === (13))){
var state_16939__$1 = state_16939;
var statearr_16946_16968 = state_16939__$1;
(statearr_16946_16968[(2)] = null);

(statearr_16946_16968[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16940 === (6))){
var inst_16918 = (state_16939[(7)]);
var state_16939__$1 = state_16939;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16939__$1,(11),to,inst_16918);
} else {
if((state_val_16940 === (3))){
var inst_16937 = (state_16939[(2)]);
var state_16939__$1 = state_16939;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16939__$1,inst_16937);
} else {
if((state_val_16940 === (12))){
var state_16939__$1 = state_16939;
var statearr_16947_16969 = state_16939__$1;
(statearr_16947_16969[(2)] = null);

(statearr_16947_16969[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16940 === (2))){
var state_16939__$1 = state_16939;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16939__$1,(4),from);
} else {
if((state_val_16940 === (11))){
var inst_16928 = (state_16939[(2)]);
var state_16939__$1 = state_16939;
if(cljs.core.truth_(inst_16928)){
var statearr_16948_16970 = state_16939__$1;
(statearr_16948_16970[(1)] = (12));

} else {
var statearr_16949_16971 = state_16939__$1;
(statearr_16949_16971[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16940 === (9))){
var state_16939__$1 = state_16939;
var statearr_16950_16972 = state_16939__$1;
(statearr_16950_16972[(2)] = null);

(statearr_16950_16972[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16940 === (5))){
var state_16939__$1 = state_16939;
if(cljs.core.truth_(close_QMARK_)){
var statearr_16951_16973 = state_16939__$1;
(statearr_16951_16973[(1)] = (8));

} else {
var statearr_16952_16974 = state_16939__$1;
(statearr_16952_16974[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16940 === (14))){
var inst_16933 = (state_16939[(2)]);
var state_16939__$1 = state_16939;
var statearr_16953_16975 = state_16939__$1;
(statearr_16953_16975[(2)] = inst_16933);

(statearr_16953_16975[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16940 === (10))){
var inst_16925 = (state_16939[(2)]);
var state_16939__$1 = state_16939;
var statearr_16954_16976 = state_16939__$1;
(statearr_16954_16976[(2)] = inst_16925);

(statearr_16954_16976[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16940 === (8))){
var inst_16922 = cljs.core.async.close_BANG_.call(null,to);
var state_16939__$1 = state_16939;
var statearr_16955_16977 = state_16939__$1;
(statearr_16955_16977[(2)] = inst_16922);

(statearr_16955_16977[(1)] = (10));


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
});})(c__6459__auto___16963))
;
return ((function (switch__6444__auto__,c__6459__auto___16963){
return (function() {
var state_machine__6445__auto__ = null;
var state_machine__6445__auto____0 = (function (){
var statearr_16959 = [null,null,null,null,null,null,null,null];
(statearr_16959[(0)] = state_machine__6445__auto__);

(statearr_16959[(1)] = (1));

return statearr_16959;
});
var state_machine__6445__auto____1 = (function (state_16939){
while(true){
var ret_value__6446__auto__ = (function (){try{while(true){
var result__6447__auto__ = switch__6444__auto__.call(null,state_16939);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6447__auto__;
}
break;
}
}catch (e16960){if((e16960 instanceof Object)){
var ex__6448__auto__ = e16960;
var statearr_16961_16978 = state_16939;
(statearr_16961_16978[(5)] = ex__6448__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16939);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16960;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16979 = state_16939;
state_16939 = G__16979;
continue;
} else {
return ret_value__6446__auto__;
}
break;
}
});
state_machine__6445__auto__ = function(state_16939){
switch(arguments.length){
case 0:
return state_machine__6445__auto____0.call(this);
case 1:
return state_machine__6445__auto____1.call(this,state_16939);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6445__auto____0;
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6445__auto____1;
return state_machine__6445__auto__;
})()
;})(switch__6444__auto__,c__6459__auto___16963))
})();
var state__6461__auto__ = (function (){var statearr_16962 = f__6460__auto__.call(null);
(statearr_16962[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6459__auto___16963);

return statearr_16962;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6461__auto__);
});})(c__6459__auto___16963))
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
return (function (p__17163){
var vec__17164 = p__17163;
var v = cljs.core.nth.call(null,vec__17164,(0),null);
var p = cljs.core.nth.call(null,vec__17164,(1),null);
var job = vec__17164;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__6459__auto___17346 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6459__auto___17346,res,vec__17164,v,p,job,jobs,results){
return (function (){
var f__6460__auto__ = (function (){var switch__6444__auto__ = ((function (c__6459__auto___17346,res,vec__17164,v,p,job,jobs,results){
return (function (state_17169){
var state_val_17170 = (state_17169[(1)]);
if((state_val_17170 === (2))){
var inst_17166 = (state_17169[(2)]);
var inst_17167 = cljs.core.async.close_BANG_.call(null,res);
var state_17169__$1 = (function (){var statearr_17171 = state_17169;
(statearr_17171[(7)] = inst_17166);

return statearr_17171;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17169__$1,inst_17167);
} else {
if((state_val_17170 === (1))){
var state_17169__$1 = state_17169;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17169__$1,(2),res,v);
} else {
return null;
}
}
});})(c__6459__auto___17346,res,vec__17164,v,p,job,jobs,results))
;
return ((function (switch__6444__auto__,c__6459__auto___17346,res,vec__17164,v,p,job,jobs,results){
return (function() {
var state_machine__6445__auto__ = null;
var state_machine__6445__auto____0 = (function (){
var statearr_17175 = [null,null,null,null,null,null,null,null];
(statearr_17175[(0)] = state_machine__6445__auto__);

(statearr_17175[(1)] = (1));

return statearr_17175;
});
var state_machine__6445__auto____1 = (function (state_17169){
while(true){
var ret_value__6446__auto__ = (function (){try{while(true){
var result__6447__auto__ = switch__6444__auto__.call(null,state_17169);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6447__auto__;
}
break;
}
}catch (e17176){if((e17176 instanceof Object)){
var ex__6448__auto__ = e17176;
var statearr_17177_17347 = state_17169;
(statearr_17177_17347[(5)] = ex__6448__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17169);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17176;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17348 = state_17169;
state_17169 = G__17348;
continue;
} else {
return ret_value__6446__auto__;
}
break;
}
});
state_machine__6445__auto__ = function(state_17169){
switch(arguments.length){
case 0:
return state_machine__6445__auto____0.call(this);
case 1:
return state_machine__6445__auto____1.call(this,state_17169);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6445__auto____0;
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6445__auto____1;
return state_machine__6445__auto__;
})()
;})(switch__6444__auto__,c__6459__auto___17346,res,vec__17164,v,p,job,jobs,results))
})();
var state__6461__auto__ = (function (){var statearr_17178 = f__6460__auto__.call(null);
(statearr_17178[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6459__auto___17346);

return statearr_17178;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6461__auto__);
});})(c__6459__auto___17346,res,vec__17164,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__17179){
var vec__17180 = p__17179;
var v = cljs.core.nth.call(null,vec__17180,(0),null);
var p = cljs.core.nth.call(null,vec__17180,(1),null);
var job = vec__17180;
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
var n__4517__auto___17349 = n;
var __17350 = (0);
while(true){
if((__17350 < n__4517__auto___17349)){
var G__17181_17351 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__17181_17351) {
case "async":
var c__6459__auto___17353 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__17350,c__6459__auto___17353,G__17181_17351,n__4517__auto___17349,jobs,results,process,async){
return (function (){
var f__6460__auto__ = (function (){var switch__6444__auto__ = ((function (__17350,c__6459__auto___17353,G__17181_17351,n__4517__auto___17349,jobs,results,process,async){
return (function (state_17194){
var state_val_17195 = (state_17194[(1)]);
if((state_val_17195 === (7))){
var inst_17190 = (state_17194[(2)]);
var state_17194__$1 = state_17194;
var statearr_17196_17354 = state_17194__$1;
(statearr_17196_17354[(2)] = inst_17190);

(statearr_17196_17354[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17195 === (6))){
var state_17194__$1 = state_17194;
var statearr_17197_17355 = state_17194__$1;
(statearr_17197_17355[(2)] = null);

(statearr_17197_17355[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17195 === (5))){
var state_17194__$1 = state_17194;
var statearr_17198_17356 = state_17194__$1;
(statearr_17198_17356[(2)] = null);

(statearr_17198_17356[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17195 === (4))){
var inst_17184 = (state_17194[(2)]);
var inst_17185 = async.call(null,inst_17184);
var state_17194__$1 = state_17194;
if(cljs.core.truth_(inst_17185)){
var statearr_17199_17357 = state_17194__$1;
(statearr_17199_17357[(1)] = (5));

} else {
var statearr_17200_17358 = state_17194__$1;
(statearr_17200_17358[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17195 === (3))){
var inst_17192 = (state_17194[(2)]);
var state_17194__$1 = state_17194;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17194__$1,inst_17192);
} else {
if((state_val_17195 === (2))){
var state_17194__$1 = state_17194;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17194__$1,(4),jobs);
} else {
if((state_val_17195 === (1))){
var state_17194__$1 = state_17194;
var statearr_17201_17359 = state_17194__$1;
(statearr_17201_17359[(2)] = null);

(statearr_17201_17359[(1)] = (2));


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
});})(__17350,c__6459__auto___17353,G__17181_17351,n__4517__auto___17349,jobs,results,process,async))
;
return ((function (__17350,switch__6444__auto__,c__6459__auto___17353,G__17181_17351,n__4517__auto___17349,jobs,results,process,async){
return (function() {
var state_machine__6445__auto__ = null;
var state_machine__6445__auto____0 = (function (){
var statearr_17205 = [null,null,null,null,null,null,null];
(statearr_17205[(0)] = state_machine__6445__auto__);

(statearr_17205[(1)] = (1));

return statearr_17205;
});
var state_machine__6445__auto____1 = (function (state_17194){
while(true){
var ret_value__6446__auto__ = (function (){try{while(true){
var result__6447__auto__ = switch__6444__auto__.call(null,state_17194);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6447__auto__;
}
break;
}
}catch (e17206){if((e17206 instanceof Object)){
var ex__6448__auto__ = e17206;
var statearr_17207_17360 = state_17194;
(statearr_17207_17360[(5)] = ex__6448__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17194);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17206;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17361 = state_17194;
state_17194 = G__17361;
continue;
} else {
return ret_value__6446__auto__;
}
break;
}
});
state_machine__6445__auto__ = function(state_17194){
switch(arguments.length){
case 0:
return state_machine__6445__auto____0.call(this);
case 1:
return state_machine__6445__auto____1.call(this,state_17194);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6445__auto____0;
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6445__auto____1;
return state_machine__6445__auto__;
})()
;})(__17350,switch__6444__auto__,c__6459__auto___17353,G__17181_17351,n__4517__auto___17349,jobs,results,process,async))
})();
var state__6461__auto__ = (function (){var statearr_17208 = f__6460__auto__.call(null);
(statearr_17208[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6459__auto___17353);

return statearr_17208;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6461__auto__);
});})(__17350,c__6459__auto___17353,G__17181_17351,n__4517__auto___17349,jobs,results,process,async))
);


break;
case "compute":
var c__6459__auto___17362 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__17350,c__6459__auto___17362,G__17181_17351,n__4517__auto___17349,jobs,results,process,async){
return (function (){
var f__6460__auto__ = (function (){var switch__6444__auto__ = ((function (__17350,c__6459__auto___17362,G__17181_17351,n__4517__auto___17349,jobs,results,process,async){
return (function (state_17221){
var state_val_17222 = (state_17221[(1)]);
if((state_val_17222 === (7))){
var inst_17217 = (state_17221[(2)]);
var state_17221__$1 = state_17221;
var statearr_17223_17363 = state_17221__$1;
(statearr_17223_17363[(2)] = inst_17217);

(statearr_17223_17363[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17222 === (6))){
var state_17221__$1 = state_17221;
var statearr_17224_17364 = state_17221__$1;
(statearr_17224_17364[(2)] = null);

(statearr_17224_17364[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17222 === (5))){
var state_17221__$1 = state_17221;
var statearr_17225_17365 = state_17221__$1;
(statearr_17225_17365[(2)] = null);

(statearr_17225_17365[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17222 === (4))){
var inst_17211 = (state_17221[(2)]);
var inst_17212 = process.call(null,inst_17211);
var state_17221__$1 = state_17221;
if(cljs.core.truth_(inst_17212)){
var statearr_17226_17366 = state_17221__$1;
(statearr_17226_17366[(1)] = (5));

} else {
var statearr_17227_17367 = state_17221__$1;
(statearr_17227_17367[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17222 === (3))){
var inst_17219 = (state_17221[(2)]);
var state_17221__$1 = state_17221;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17221__$1,inst_17219);
} else {
if((state_val_17222 === (2))){
var state_17221__$1 = state_17221;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17221__$1,(4),jobs);
} else {
if((state_val_17222 === (1))){
var state_17221__$1 = state_17221;
var statearr_17228_17368 = state_17221__$1;
(statearr_17228_17368[(2)] = null);

(statearr_17228_17368[(1)] = (2));


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
});})(__17350,c__6459__auto___17362,G__17181_17351,n__4517__auto___17349,jobs,results,process,async))
;
return ((function (__17350,switch__6444__auto__,c__6459__auto___17362,G__17181_17351,n__4517__auto___17349,jobs,results,process,async){
return (function() {
var state_machine__6445__auto__ = null;
var state_machine__6445__auto____0 = (function (){
var statearr_17232 = [null,null,null,null,null,null,null];
(statearr_17232[(0)] = state_machine__6445__auto__);

(statearr_17232[(1)] = (1));

return statearr_17232;
});
var state_machine__6445__auto____1 = (function (state_17221){
while(true){
var ret_value__6446__auto__ = (function (){try{while(true){
var result__6447__auto__ = switch__6444__auto__.call(null,state_17221);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6447__auto__;
}
break;
}
}catch (e17233){if((e17233 instanceof Object)){
var ex__6448__auto__ = e17233;
var statearr_17234_17369 = state_17221;
(statearr_17234_17369[(5)] = ex__6448__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17221);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17233;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17370 = state_17221;
state_17221 = G__17370;
continue;
} else {
return ret_value__6446__auto__;
}
break;
}
});
state_machine__6445__auto__ = function(state_17221){
switch(arguments.length){
case 0:
return state_machine__6445__auto____0.call(this);
case 1:
return state_machine__6445__auto____1.call(this,state_17221);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6445__auto____0;
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6445__auto____1;
return state_machine__6445__auto__;
})()
;})(__17350,switch__6444__auto__,c__6459__auto___17362,G__17181_17351,n__4517__auto___17349,jobs,results,process,async))
})();
var state__6461__auto__ = (function (){var statearr_17235 = f__6460__auto__.call(null);
(statearr_17235[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6459__auto___17362);

return statearr_17235;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6461__auto__);
});})(__17350,c__6459__auto___17362,G__17181_17351,n__4517__auto___17349,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__17371 = (__17350 + (1));
__17350 = G__17371;
continue;
} else {
}
break;
}

var c__6459__auto___17372 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6459__auto___17372,jobs,results,process,async){
return (function (){
var f__6460__auto__ = (function (){var switch__6444__auto__ = ((function (c__6459__auto___17372,jobs,results,process,async){
return (function (state_17257){
var state_val_17258 = (state_17257[(1)]);
if((state_val_17258 === (9))){
var inst_17250 = (state_17257[(2)]);
var state_17257__$1 = (function (){var statearr_17259 = state_17257;
(statearr_17259[(7)] = inst_17250);

return statearr_17259;
})();
var statearr_17260_17373 = state_17257__$1;
(statearr_17260_17373[(2)] = null);

(statearr_17260_17373[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17258 === (8))){
var inst_17243 = (state_17257[(8)]);
var inst_17248 = (state_17257[(2)]);
var state_17257__$1 = (function (){var statearr_17261 = state_17257;
(statearr_17261[(9)] = inst_17248);

return statearr_17261;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17257__$1,(9),results,inst_17243);
} else {
if((state_val_17258 === (7))){
var inst_17253 = (state_17257[(2)]);
var state_17257__$1 = state_17257;
var statearr_17262_17374 = state_17257__$1;
(statearr_17262_17374[(2)] = inst_17253);

(statearr_17262_17374[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17258 === (6))){
var inst_17243 = (state_17257[(8)]);
var inst_17238 = (state_17257[(10)]);
var inst_17243__$1 = cljs.core.async.chan.call(null,(1));
var inst_17244 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_17245 = [inst_17238,inst_17243__$1];
var inst_17246 = (new cljs.core.PersistentVector(null,2,(5),inst_17244,inst_17245,null));
var state_17257__$1 = (function (){var statearr_17263 = state_17257;
(statearr_17263[(8)] = inst_17243__$1);

return statearr_17263;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17257__$1,(8),jobs,inst_17246);
} else {
if((state_val_17258 === (5))){
var inst_17241 = cljs.core.async.close_BANG_.call(null,jobs);
var state_17257__$1 = state_17257;
var statearr_17264_17375 = state_17257__$1;
(statearr_17264_17375[(2)] = inst_17241);

(statearr_17264_17375[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17258 === (4))){
var inst_17238 = (state_17257[(10)]);
var inst_17238__$1 = (state_17257[(2)]);
var inst_17239 = (inst_17238__$1 == null);
var state_17257__$1 = (function (){var statearr_17265 = state_17257;
(statearr_17265[(10)] = inst_17238__$1);

return statearr_17265;
})();
if(cljs.core.truth_(inst_17239)){
var statearr_17266_17376 = state_17257__$1;
(statearr_17266_17376[(1)] = (5));

} else {
var statearr_17267_17377 = state_17257__$1;
(statearr_17267_17377[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17258 === (3))){
var inst_17255 = (state_17257[(2)]);
var state_17257__$1 = state_17257;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17257__$1,inst_17255);
} else {
if((state_val_17258 === (2))){
var state_17257__$1 = state_17257;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17257__$1,(4),from);
} else {
if((state_val_17258 === (1))){
var state_17257__$1 = state_17257;
var statearr_17268_17378 = state_17257__$1;
(statearr_17268_17378[(2)] = null);

(statearr_17268_17378[(1)] = (2));


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
});})(c__6459__auto___17372,jobs,results,process,async))
;
return ((function (switch__6444__auto__,c__6459__auto___17372,jobs,results,process,async){
return (function() {
var state_machine__6445__auto__ = null;
var state_machine__6445__auto____0 = (function (){
var statearr_17272 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17272[(0)] = state_machine__6445__auto__);

(statearr_17272[(1)] = (1));

return statearr_17272;
});
var state_machine__6445__auto____1 = (function (state_17257){
while(true){
var ret_value__6446__auto__ = (function (){try{while(true){
var result__6447__auto__ = switch__6444__auto__.call(null,state_17257);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6447__auto__;
}
break;
}
}catch (e17273){if((e17273 instanceof Object)){
var ex__6448__auto__ = e17273;
var statearr_17274_17379 = state_17257;
(statearr_17274_17379[(5)] = ex__6448__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17257);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17273;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17380 = state_17257;
state_17257 = G__17380;
continue;
} else {
return ret_value__6446__auto__;
}
break;
}
});
state_machine__6445__auto__ = function(state_17257){
switch(arguments.length){
case 0:
return state_machine__6445__auto____0.call(this);
case 1:
return state_machine__6445__auto____1.call(this,state_17257);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6445__auto____0;
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6445__auto____1;
return state_machine__6445__auto__;
})()
;})(switch__6444__auto__,c__6459__auto___17372,jobs,results,process,async))
})();
var state__6461__auto__ = (function (){var statearr_17275 = f__6460__auto__.call(null);
(statearr_17275[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6459__auto___17372);

return statearr_17275;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6461__auto__);
});})(c__6459__auto___17372,jobs,results,process,async))
);


var c__6459__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6459__auto__,jobs,results,process,async){
return (function (){
var f__6460__auto__ = (function (){var switch__6444__auto__ = ((function (c__6459__auto__,jobs,results,process,async){
return (function (state_17313){
var state_val_17314 = (state_17313[(1)]);
if((state_val_17314 === (7))){
var inst_17309 = (state_17313[(2)]);
var state_17313__$1 = state_17313;
var statearr_17315_17381 = state_17313__$1;
(statearr_17315_17381[(2)] = inst_17309);

(statearr_17315_17381[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17314 === (20))){
var state_17313__$1 = state_17313;
var statearr_17316_17382 = state_17313__$1;
(statearr_17316_17382[(2)] = null);

(statearr_17316_17382[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17314 === (1))){
var state_17313__$1 = state_17313;
var statearr_17317_17383 = state_17313__$1;
(statearr_17317_17383[(2)] = null);

(statearr_17317_17383[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17314 === (4))){
var inst_17278 = (state_17313[(7)]);
var inst_17278__$1 = (state_17313[(2)]);
var inst_17279 = (inst_17278__$1 == null);
var state_17313__$1 = (function (){var statearr_17318 = state_17313;
(statearr_17318[(7)] = inst_17278__$1);

return statearr_17318;
})();
if(cljs.core.truth_(inst_17279)){
var statearr_17319_17384 = state_17313__$1;
(statearr_17319_17384[(1)] = (5));

} else {
var statearr_17320_17385 = state_17313__$1;
(statearr_17320_17385[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17314 === (15))){
var inst_17291 = (state_17313[(8)]);
var state_17313__$1 = state_17313;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17313__$1,(18),to,inst_17291);
} else {
if((state_val_17314 === (21))){
var inst_17304 = (state_17313[(2)]);
var state_17313__$1 = state_17313;
var statearr_17321_17386 = state_17313__$1;
(statearr_17321_17386[(2)] = inst_17304);

(statearr_17321_17386[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17314 === (13))){
var inst_17306 = (state_17313[(2)]);
var state_17313__$1 = (function (){var statearr_17322 = state_17313;
(statearr_17322[(9)] = inst_17306);

return statearr_17322;
})();
var statearr_17323_17387 = state_17313__$1;
(statearr_17323_17387[(2)] = null);

(statearr_17323_17387[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17314 === (6))){
var inst_17278 = (state_17313[(7)]);
var state_17313__$1 = state_17313;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17313__$1,(11),inst_17278);
} else {
if((state_val_17314 === (17))){
var inst_17299 = (state_17313[(2)]);
var state_17313__$1 = state_17313;
if(cljs.core.truth_(inst_17299)){
var statearr_17324_17388 = state_17313__$1;
(statearr_17324_17388[(1)] = (19));

} else {
var statearr_17325_17389 = state_17313__$1;
(statearr_17325_17389[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17314 === (3))){
var inst_17311 = (state_17313[(2)]);
var state_17313__$1 = state_17313;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17313__$1,inst_17311);
} else {
if((state_val_17314 === (12))){
var inst_17288 = (state_17313[(10)]);
var state_17313__$1 = state_17313;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17313__$1,(14),inst_17288);
} else {
if((state_val_17314 === (2))){
var state_17313__$1 = state_17313;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17313__$1,(4),results);
} else {
if((state_val_17314 === (19))){
var state_17313__$1 = state_17313;
var statearr_17326_17390 = state_17313__$1;
(statearr_17326_17390[(2)] = null);

(statearr_17326_17390[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17314 === (11))){
var inst_17288 = (state_17313[(2)]);
var state_17313__$1 = (function (){var statearr_17327 = state_17313;
(statearr_17327[(10)] = inst_17288);

return statearr_17327;
})();
var statearr_17328_17391 = state_17313__$1;
(statearr_17328_17391[(2)] = null);

(statearr_17328_17391[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17314 === (9))){
var state_17313__$1 = state_17313;
var statearr_17329_17392 = state_17313__$1;
(statearr_17329_17392[(2)] = null);

(statearr_17329_17392[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17314 === (5))){
var state_17313__$1 = state_17313;
if(cljs.core.truth_(close_QMARK_)){
var statearr_17330_17393 = state_17313__$1;
(statearr_17330_17393[(1)] = (8));

} else {
var statearr_17331_17394 = state_17313__$1;
(statearr_17331_17394[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17314 === (14))){
var inst_17293 = (state_17313[(11)]);
var inst_17291 = (state_17313[(8)]);
var inst_17291__$1 = (state_17313[(2)]);
var inst_17292 = (inst_17291__$1 == null);
var inst_17293__$1 = cljs.core.not.call(null,inst_17292);
var state_17313__$1 = (function (){var statearr_17332 = state_17313;
(statearr_17332[(11)] = inst_17293__$1);

(statearr_17332[(8)] = inst_17291__$1);

return statearr_17332;
})();
if(inst_17293__$1){
var statearr_17333_17395 = state_17313__$1;
(statearr_17333_17395[(1)] = (15));

} else {
var statearr_17334_17396 = state_17313__$1;
(statearr_17334_17396[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17314 === (16))){
var inst_17293 = (state_17313[(11)]);
var state_17313__$1 = state_17313;
var statearr_17335_17397 = state_17313__$1;
(statearr_17335_17397[(2)] = inst_17293);

(statearr_17335_17397[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17314 === (10))){
var inst_17285 = (state_17313[(2)]);
var state_17313__$1 = state_17313;
var statearr_17336_17398 = state_17313__$1;
(statearr_17336_17398[(2)] = inst_17285);

(statearr_17336_17398[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17314 === (18))){
var inst_17296 = (state_17313[(2)]);
var state_17313__$1 = state_17313;
var statearr_17337_17399 = state_17313__$1;
(statearr_17337_17399[(2)] = inst_17296);

(statearr_17337_17399[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17314 === (8))){
var inst_17282 = cljs.core.async.close_BANG_.call(null,to);
var state_17313__$1 = state_17313;
var statearr_17338_17400 = state_17313__$1;
(statearr_17338_17400[(2)] = inst_17282);

(statearr_17338_17400[(1)] = (10));


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
var statearr_17342 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17342[(0)] = state_machine__6445__auto__);

(statearr_17342[(1)] = (1));

return statearr_17342;
});
var state_machine__6445__auto____1 = (function (state_17313){
while(true){
var ret_value__6446__auto__ = (function (){try{while(true){
var result__6447__auto__ = switch__6444__auto__.call(null,state_17313);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6447__auto__;
}
break;
}
}catch (e17343){if((e17343 instanceof Object)){
var ex__6448__auto__ = e17343;
var statearr_17344_17401 = state_17313;
(statearr_17344_17401[(5)] = ex__6448__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17313);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17343;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17402 = state_17313;
state_17313 = G__17402;
continue;
} else {
return ret_value__6446__auto__;
}
break;
}
});
state_machine__6445__auto__ = function(state_17313){
switch(arguments.length){
case 0:
return state_machine__6445__auto____0.call(this);
case 1:
return state_machine__6445__auto____1.call(this,state_17313);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6445__auto____0;
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6445__auto____1;
return state_machine__6445__auto__;
})()
;})(switch__6444__auto__,c__6459__auto__,jobs,results,process,async))
})();
var state__6461__auto__ = (function (){var statearr_17345 = f__6460__auto__.call(null);
(statearr_17345[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6459__auto__);

return statearr_17345;
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
var c__6459__auto___17503 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6459__auto___17503,tc,fc){
return (function (){
var f__6460__auto__ = (function (){var switch__6444__auto__ = ((function (c__6459__auto___17503,tc,fc){
return (function (state_17478){
var state_val_17479 = (state_17478[(1)]);
if((state_val_17479 === (7))){
var inst_17474 = (state_17478[(2)]);
var state_17478__$1 = state_17478;
var statearr_17480_17504 = state_17478__$1;
(statearr_17480_17504[(2)] = inst_17474);

(statearr_17480_17504[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17479 === (1))){
var state_17478__$1 = state_17478;
var statearr_17481_17505 = state_17478__$1;
(statearr_17481_17505[(2)] = null);

(statearr_17481_17505[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17479 === (4))){
var inst_17455 = (state_17478[(7)]);
var inst_17455__$1 = (state_17478[(2)]);
var inst_17456 = (inst_17455__$1 == null);
var state_17478__$1 = (function (){var statearr_17482 = state_17478;
(statearr_17482[(7)] = inst_17455__$1);

return statearr_17482;
})();
if(cljs.core.truth_(inst_17456)){
var statearr_17483_17506 = state_17478__$1;
(statearr_17483_17506[(1)] = (5));

} else {
var statearr_17484_17507 = state_17478__$1;
(statearr_17484_17507[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17479 === (13))){
var state_17478__$1 = state_17478;
var statearr_17485_17508 = state_17478__$1;
(statearr_17485_17508[(2)] = null);

(statearr_17485_17508[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17479 === (6))){
var inst_17455 = (state_17478[(7)]);
var inst_17461 = p.call(null,inst_17455);
var state_17478__$1 = state_17478;
if(cljs.core.truth_(inst_17461)){
var statearr_17486_17509 = state_17478__$1;
(statearr_17486_17509[(1)] = (9));

} else {
var statearr_17487_17510 = state_17478__$1;
(statearr_17487_17510[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17479 === (3))){
var inst_17476 = (state_17478[(2)]);
var state_17478__$1 = state_17478;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17478__$1,inst_17476);
} else {
if((state_val_17479 === (12))){
var state_17478__$1 = state_17478;
var statearr_17488_17511 = state_17478__$1;
(statearr_17488_17511[(2)] = null);

(statearr_17488_17511[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17479 === (2))){
var state_17478__$1 = state_17478;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17478__$1,(4),ch);
} else {
if((state_val_17479 === (11))){
var inst_17455 = (state_17478[(7)]);
var inst_17465 = (state_17478[(2)]);
var state_17478__$1 = state_17478;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17478__$1,(8),inst_17465,inst_17455);
} else {
if((state_val_17479 === (9))){
var state_17478__$1 = state_17478;
var statearr_17489_17512 = state_17478__$1;
(statearr_17489_17512[(2)] = tc);

(statearr_17489_17512[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17479 === (5))){
var inst_17458 = cljs.core.async.close_BANG_.call(null,tc);
var inst_17459 = cljs.core.async.close_BANG_.call(null,fc);
var state_17478__$1 = (function (){var statearr_17490 = state_17478;
(statearr_17490[(8)] = inst_17458);

return statearr_17490;
})();
var statearr_17491_17513 = state_17478__$1;
(statearr_17491_17513[(2)] = inst_17459);

(statearr_17491_17513[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17479 === (14))){
var inst_17472 = (state_17478[(2)]);
var state_17478__$1 = state_17478;
var statearr_17492_17514 = state_17478__$1;
(statearr_17492_17514[(2)] = inst_17472);

(statearr_17492_17514[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17479 === (10))){
var state_17478__$1 = state_17478;
var statearr_17493_17515 = state_17478__$1;
(statearr_17493_17515[(2)] = fc);

(statearr_17493_17515[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17479 === (8))){
var inst_17467 = (state_17478[(2)]);
var state_17478__$1 = state_17478;
if(cljs.core.truth_(inst_17467)){
var statearr_17494_17516 = state_17478__$1;
(statearr_17494_17516[(1)] = (12));

} else {
var statearr_17495_17517 = state_17478__$1;
(statearr_17495_17517[(1)] = (13));

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
});})(c__6459__auto___17503,tc,fc))
;
return ((function (switch__6444__auto__,c__6459__auto___17503,tc,fc){
return (function() {
var state_machine__6445__auto__ = null;
var state_machine__6445__auto____0 = (function (){
var statearr_17499 = [null,null,null,null,null,null,null,null,null];
(statearr_17499[(0)] = state_machine__6445__auto__);

(statearr_17499[(1)] = (1));

return statearr_17499;
});
var state_machine__6445__auto____1 = (function (state_17478){
while(true){
var ret_value__6446__auto__ = (function (){try{while(true){
var result__6447__auto__ = switch__6444__auto__.call(null,state_17478);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6447__auto__;
}
break;
}
}catch (e17500){if((e17500 instanceof Object)){
var ex__6448__auto__ = e17500;
var statearr_17501_17518 = state_17478;
(statearr_17501_17518[(5)] = ex__6448__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17478);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17500;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17519 = state_17478;
state_17478 = G__17519;
continue;
} else {
return ret_value__6446__auto__;
}
break;
}
});
state_machine__6445__auto__ = function(state_17478){
switch(arguments.length){
case 0:
return state_machine__6445__auto____0.call(this);
case 1:
return state_machine__6445__auto____1.call(this,state_17478);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6445__auto____0;
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6445__auto____1;
return state_machine__6445__auto__;
})()
;})(switch__6444__auto__,c__6459__auto___17503,tc,fc))
})();
var state__6461__auto__ = (function (){var statearr_17502 = f__6460__auto__.call(null);
(statearr_17502[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6459__auto___17503);

return statearr_17502;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6461__auto__);
});})(c__6459__auto___17503,tc,fc))
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
return (function (state_17566){
var state_val_17567 = (state_17566[(1)]);
if((state_val_17567 === (7))){
var inst_17562 = (state_17566[(2)]);
var state_17566__$1 = state_17566;
var statearr_17568_17584 = state_17566__$1;
(statearr_17568_17584[(2)] = inst_17562);

(statearr_17568_17584[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17567 === (6))){
var inst_17552 = (state_17566[(7)]);
var inst_17555 = (state_17566[(8)]);
var inst_17559 = f.call(null,inst_17552,inst_17555);
var inst_17552__$1 = inst_17559;
var state_17566__$1 = (function (){var statearr_17569 = state_17566;
(statearr_17569[(7)] = inst_17552__$1);

return statearr_17569;
})();
var statearr_17570_17585 = state_17566__$1;
(statearr_17570_17585[(2)] = null);

(statearr_17570_17585[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17567 === (5))){
var inst_17552 = (state_17566[(7)]);
var state_17566__$1 = state_17566;
var statearr_17571_17586 = state_17566__$1;
(statearr_17571_17586[(2)] = inst_17552);

(statearr_17571_17586[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17567 === (4))){
var inst_17555 = (state_17566[(8)]);
var inst_17555__$1 = (state_17566[(2)]);
var inst_17556 = (inst_17555__$1 == null);
var state_17566__$1 = (function (){var statearr_17572 = state_17566;
(statearr_17572[(8)] = inst_17555__$1);

return statearr_17572;
})();
if(cljs.core.truth_(inst_17556)){
var statearr_17573_17587 = state_17566__$1;
(statearr_17573_17587[(1)] = (5));

} else {
var statearr_17574_17588 = state_17566__$1;
(statearr_17574_17588[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17567 === (3))){
var inst_17564 = (state_17566[(2)]);
var state_17566__$1 = state_17566;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17566__$1,inst_17564);
} else {
if((state_val_17567 === (2))){
var state_17566__$1 = state_17566;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17566__$1,(4),ch);
} else {
if((state_val_17567 === (1))){
var inst_17552 = init;
var state_17566__$1 = (function (){var statearr_17575 = state_17566;
(statearr_17575[(7)] = inst_17552);

return statearr_17575;
})();
var statearr_17576_17589 = state_17566__$1;
(statearr_17576_17589[(2)] = null);

(statearr_17576_17589[(1)] = (2));


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
var statearr_17580 = [null,null,null,null,null,null,null,null,null];
(statearr_17580[(0)] = state_machine__6445__auto__);

(statearr_17580[(1)] = (1));

return statearr_17580;
});
var state_machine__6445__auto____1 = (function (state_17566){
while(true){
var ret_value__6446__auto__ = (function (){try{while(true){
var result__6447__auto__ = switch__6444__auto__.call(null,state_17566);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6447__auto__;
}
break;
}
}catch (e17581){if((e17581 instanceof Object)){
var ex__6448__auto__ = e17581;
var statearr_17582_17590 = state_17566;
(statearr_17582_17590[(5)] = ex__6448__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17566);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17581;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17591 = state_17566;
state_17566 = G__17591;
continue;
} else {
return ret_value__6446__auto__;
}
break;
}
});
state_machine__6445__auto__ = function(state_17566){
switch(arguments.length){
case 0:
return state_machine__6445__auto____0.call(this);
case 1:
return state_machine__6445__auto____1.call(this,state_17566);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6445__auto____0;
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6445__auto____1;
return state_machine__6445__auto__;
})()
;})(switch__6444__auto__,c__6459__auto__))
})();
var state__6461__auto__ = (function (){var statearr_17583 = f__6460__auto__.call(null);
(statearr_17583[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6459__auto__);

return statearr_17583;
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
return (function (state_17665){
var state_val_17666 = (state_17665[(1)]);
if((state_val_17666 === (7))){
var inst_17647 = (state_17665[(2)]);
var state_17665__$1 = state_17665;
var statearr_17667_17690 = state_17665__$1;
(statearr_17667_17690[(2)] = inst_17647);

(statearr_17667_17690[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17666 === (1))){
var inst_17641 = cljs.core.seq.call(null,coll);
var inst_17642 = inst_17641;
var state_17665__$1 = (function (){var statearr_17668 = state_17665;
(statearr_17668[(7)] = inst_17642);

return statearr_17668;
})();
var statearr_17669_17691 = state_17665__$1;
(statearr_17669_17691[(2)] = null);

(statearr_17669_17691[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17666 === (4))){
var inst_17642 = (state_17665[(7)]);
var inst_17645 = cljs.core.first.call(null,inst_17642);
var state_17665__$1 = state_17665;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17665__$1,(7),ch,inst_17645);
} else {
if((state_val_17666 === (13))){
var inst_17659 = (state_17665[(2)]);
var state_17665__$1 = state_17665;
var statearr_17670_17692 = state_17665__$1;
(statearr_17670_17692[(2)] = inst_17659);

(statearr_17670_17692[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17666 === (6))){
var inst_17650 = (state_17665[(2)]);
var state_17665__$1 = state_17665;
if(cljs.core.truth_(inst_17650)){
var statearr_17671_17693 = state_17665__$1;
(statearr_17671_17693[(1)] = (8));

} else {
var statearr_17672_17694 = state_17665__$1;
(statearr_17672_17694[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17666 === (3))){
var inst_17663 = (state_17665[(2)]);
var state_17665__$1 = state_17665;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17665__$1,inst_17663);
} else {
if((state_val_17666 === (12))){
var state_17665__$1 = state_17665;
var statearr_17673_17695 = state_17665__$1;
(statearr_17673_17695[(2)] = null);

(statearr_17673_17695[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17666 === (2))){
var inst_17642 = (state_17665[(7)]);
var state_17665__$1 = state_17665;
if(cljs.core.truth_(inst_17642)){
var statearr_17674_17696 = state_17665__$1;
(statearr_17674_17696[(1)] = (4));

} else {
var statearr_17675_17697 = state_17665__$1;
(statearr_17675_17697[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17666 === (11))){
var inst_17656 = cljs.core.async.close_BANG_.call(null,ch);
var state_17665__$1 = state_17665;
var statearr_17676_17698 = state_17665__$1;
(statearr_17676_17698[(2)] = inst_17656);

(statearr_17676_17698[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17666 === (9))){
var state_17665__$1 = state_17665;
if(cljs.core.truth_(close_QMARK_)){
var statearr_17677_17699 = state_17665__$1;
(statearr_17677_17699[(1)] = (11));

} else {
var statearr_17678_17700 = state_17665__$1;
(statearr_17678_17700[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17666 === (5))){
var inst_17642 = (state_17665[(7)]);
var state_17665__$1 = state_17665;
var statearr_17679_17701 = state_17665__$1;
(statearr_17679_17701[(2)] = inst_17642);

(statearr_17679_17701[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17666 === (10))){
var inst_17661 = (state_17665[(2)]);
var state_17665__$1 = state_17665;
var statearr_17680_17702 = state_17665__$1;
(statearr_17680_17702[(2)] = inst_17661);

(statearr_17680_17702[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17666 === (8))){
var inst_17642 = (state_17665[(7)]);
var inst_17652 = cljs.core.next.call(null,inst_17642);
var inst_17642__$1 = inst_17652;
var state_17665__$1 = (function (){var statearr_17681 = state_17665;
(statearr_17681[(7)] = inst_17642__$1);

return statearr_17681;
})();
var statearr_17682_17703 = state_17665__$1;
(statearr_17682_17703[(2)] = null);

(statearr_17682_17703[(1)] = (2));


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
var statearr_17686 = [null,null,null,null,null,null,null,null];
(statearr_17686[(0)] = state_machine__6445__auto__);

(statearr_17686[(1)] = (1));

return statearr_17686;
});
var state_machine__6445__auto____1 = (function (state_17665){
while(true){
var ret_value__6446__auto__ = (function (){try{while(true){
var result__6447__auto__ = switch__6444__auto__.call(null,state_17665);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6447__auto__;
}
break;
}
}catch (e17687){if((e17687 instanceof Object)){
var ex__6448__auto__ = e17687;
var statearr_17688_17704 = state_17665;
(statearr_17688_17704[(5)] = ex__6448__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17665);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17687;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17705 = state_17665;
state_17665 = G__17705;
continue;
} else {
return ret_value__6446__auto__;
}
break;
}
});
state_machine__6445__auto__ = function(state_17665){
switch(arguments.length){
case 0:
return state_machine__6445__auto____0.call(this);
case 1:
return state_machine__6445__auto____1.call(this,state_17665);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6445__auto____0;
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6445__auto____1;
return state_machine__6445__auto__;
})()
;})(switch__6444__auto__,c__6459__auto__))
})();
var state__6461__auto__ = (function (){var statearr_17689 = f__6460__auto__.call(null);
(statearr_17689[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6459__auto__);

return statearr_17689;
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

cljs.core.async.Mux = (function (){var obj17707 = {};
return obj17707;
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


cljs.core.async.Mult = (function (){var obj17709 = {};
return obj17709;
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
if(typeof cljs.core.async.t17931 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t17931 = (function (cs,ch,mult,meta17932){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta17932 = meta17932;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17931.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t17931.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t17931.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t17931.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t17931.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t17931.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t17931.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_17933){
var self__ = this;
var _17933__$1 = this;
return self__.meta17932;
});})(cs))
;

cljs.core.async.t17931.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_17933,meta17932__$1){
var self__ = this;
var _17933__$1 = this;
return (new cljs.core.async.t17931(self__.cs,self__.ch,self__.mult,meta17932__$1));
});})(cs))
;

cljs.core.async.t17931.cljs$lang$type = true;

cljs.core.async.t17931.cljs$lang$ctorStr = "cljs.core.async/t17931";

cljs.core.async.t17931.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t17931");
});})(cs))
;

cljs.core.async.__GT_t17931 = ((function (cs){
return (function __GT_t17931(cs__$1,ch__$1,mult__$1,meta17932){
return (new cljs.core.async.t17931(cs__$1,ch__$1,mult__$1,meta17932));
});})(cs))
;

}

return (new cljs.core.async.t17931(cs,ch,mult,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),48,new cljs.core.Keyword(null,"end-line","end-line",1837326455),397,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"line","line",212345235),390,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/chrism/dev/farn/resources/public/js/out/cljs/core/async.cljs"], null)));
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
var c__6459__auto___18152 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6459__auto___18152,cs,m,dchan,dctr,done){
return (function (){
var f__6460__auto__ = (function (){var switch__6444__auto__ = ((function (c__6459__auto___18152,cs,m,dchan,dctr,done){
return (function (state_18064){
var state_val_18065 = (state_18064[(1)]);
if((state_val_18065 === (7))){
var inst_18060 = (state_18064[(2)]);
var state_18064__$1 = state_18064;
var statearr_18066_18153 = state_18064__$1;
(statearr_18066_18153[(2)] = inst_18060);

(statearr_18066_18153[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18065 === (20))){
var inst_17965 = (state_18064[(7)]);
var inst_17975 = cljs.core.first.call(null,inst_17965);
var inst_17976 = cljs.core.nth.call(null,inst_17975,(0),null);
var inst_17977 = cljs.core.nth.call(null,inst_17975,(1),null);
var state_18064__$1 = (function (){var statearr_18067 = state_18064;
(statearr_18067[(8)] = inst_17976);

return statearr_18067;
})();
if(cljs.core.truth_(inst_17977)){
var statearr_18068_18154 = state_18064__$1;
(statearr_18068_18154[(1)] = (22));

} else {
var statearr_18069_18155 = state_18064__$1;
(statearr_18069_18155[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18065 === (27))){
var inst_17936 = (state_18064[(9)]);
var inst_18005 = (state_18064[(10)]);
var inst_18012 = (state_18064[(11)]);
var inst_18007 = (state_18064[(12)]);
var inst_18012__$1 = cljs.core._nth.call(null,inst_18005,inst_18007);
var inst_18013 = cljs.core.async.put_BANG_.call(null,inst_18012__$1,inst_17936,done);
var state_18064__$1 = (function (){var statearr_18070 = state_18064;
(statearr_18070[(11)] = inst_18012__$1);

return statearr_18070;
})();
if(cljs.core.truth_(inst_18013)){
var statearr_18071_18156 = state_18064__$1;
(statearr_18071_18156[(1)] = (30));

} else {
var statearr_18072_18157 = state_18064__$1;
(statearr_18072_18157[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18065 === (1))){
var state_18064__$1 = state_18064;
var statearr_18073_18158 = state_18064__$1;
(statearr_18073_18158[(2)] = null);

(statearr_18073_18158[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18065 === (24))){
var inst_17965 = (state_18064[(7)]);
var inst_17982 = (state_18064[(2)]);
var inst_17983 = cljs.core.next.call(null,inst_17965);
var inst_17945 = inst_17983;
var inst_17946 = null;
var inst_17947 = (0);
var inst_17948 = (0);
var state_18064__$1 = (function (){var statearr_18074 = state_18064;
(statearr_18074[(13)] = inst_17945);

(statearr_18074[(14)] = inst_17946);

(statearr_18074[(15)] = inst_17947);

(statearr_18074[(16)] = inst_17982);

(statearr_18074[(17)] = inst_17948);

return statearr_18074;
})();
var statearr_18075_18159 = state_18064__$1;
(statearr_18075_18159[(2)] = null);

(statearr_18075_18159[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18065 === (39))){
var state_18064__$1 = state_18064;
var statearr_18079_18160 = state_18064__$1;
(statearr_18079_18160[(2)] = null);

(statearr_18079_18160[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18065 === (4))){
var inst_17936 = (state_18064[(9)]);
var inst_17936__$1 = (state_18064[(2)]);
var inst_17937 = (inst_17936__$1 == null);
var state_18064__$1 = (function (){var statearr_18080 = state_18064;
(statearr_18080[(9)] = inst_17936__$1);

return statearr_18080;
})();
if(cljs.core.truth_(inst_17937)){
var statearr_18081_18161 = state_18064__$1;
(statearr_18081_18161[(1)] = (5));

} else {
var statearr_18082_18162 = state_18064__$1;
(statearr_18082_18162[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18065 === (15))){
var inst_17945 = (state_18064[(13)]);
var inst_17946 = (state_18064[(14)]);
var inst_17947 = (state_18064[(15)]);
var inst_17948 = (state_18064[(17)]);
var inst_17961 = (state_18064[(2)]);
var inst_17962 = (inst_17948 + (1));
var tmp18076 = inst_17945;
var tmp18077 = inst_17946;
var tmp18078 = inst_17947;
var inst_17945__$1 = tmp18076;
var inst_17946__$1 = tmp18077;
var inst_17947__$1 = tmp18078;
var inst_17948__$1 = inst_17962;
var state_18064__$1 = (function (){var statearr_18083 = state_18064;
(statearr_18083[(13)] = inst_17945__$1);

(statearr_18083[(18)] = inst_17961);

(statearr_18083[(14)] = inst_17946__$1);

(statearr_18083[(15)] = inst_17947__$1);

(statearr_18083[(17)] = inst_17948__$1);

return statearr_18083;
})();
var statearr_18084_18163 = state_18064__$1;
(statearr_18084_18163[(2)] = null);

(statearr_18084_18163[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18065 === (21))){
var inst_17986 = (state_18064[(2)]);
var state_18064__$1 = state_18064;
var statearr_18088_18164 = state_18064__$1;
(statearr_18088_18164[(2)] = inst_17986);

(statearr_18088_18164[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18065 === (31))){
var inst_18012 = (state_18064[(11)]);
var inst_18016 = done.call(null,null);
var inst_18017 = cljs.core.async.untap_STAR_.call(null,m,inst_18012);
var state_18064__$1 = (function (){var statearr_18089 = state_18064;
(statearr_18089[(19)] = inst_18016);

return statearr_18089;
})();
var statearr_18090_18165 = state_18064__$1;
(statearr_18090_18165[(2)] = inst_18017);

(statearr_18090_18165[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18065 === (32))){
var inst_18005 = (state_18064[(10)]);
var inst_18004 = (state_18064[(20)]);
var inst_18007 = (state_18064[(12)]);
var inst_18006 = (state_18064[(21)]);
var inst_18019 = (state_18064[(2)]);
var inst_18020 = (inst_18007 + (1));
var tmp18085 = inst_18005;
var tmp18086 = inst_18004;
var tmp18087 = inst_18006;
var inst_18004__$1 = tmp18086;
var inst_18005__$1 = tmp18085;
var inst_18006__$1 = tmp18087;
var inst_18007__$1 = inst_18020;
var state_18064__$1 = (function (){var statearr_18091 = state_18064;
(statearr_18091[(10)] = inst_18005__$1);

(statearr_18091[(22)] = inst_18019);

(statearr_18091[(20)] = inst_18004__$1);

(statearr_18091[(12)] = inst_18007__$1);

(statearr_18091[(21)] = inst_18006__$1);

return statearr_18091;
})();
var statearr_18092_18166 = state_18064__$1;
(statearr_18092_18166[(2)] = null);

(statearr_18092_18166[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18065 === (40))){
var inst_18032 = (state_18064[(23)]);
var inst_18036 = done.call(null,null);
var inst_18037 = cljs.core.async.untap_STAR_.call(null,m,inst_18032);
var state_18064__$1 = (function (){var statearr_18093 = state_18064;
(statearr_18093[(24)] = inst_18036);

return statearr_18093;
})();
var statearr_18094_18167 = state_18064__$1;
(statearr_18094_18167[(2)] = inst_18037);

(statearr_18094_18167[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18065 === (33))){
var inst_18023 = (state_18064[(25)]);
var inst_18025 = cljs.core.chunked_seq_QMARK_.call(null,inst_18023);
var state_18064__$1 = state_18064;
if(inst_18025){
var statearr_18095_18168 = state_18064__$1;
(statearr_18095_18168[(1)] = (36));

} else {
var statearr_18096_18169 = state_18064__$1;
(statearr_18096_18169[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18065 === (13))){
var inst_17955 = (state_18064[(26)]);
var inst_17958 = cljs.core.async.close_BANG_.call(null,inst_17955);
var state_18064__$1 = state_18064;
var statearr_18097_18170 = state_18064__$1;
(statearr_18097_18170[(2)] = inst_17958);

(statearr_18097_18170[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18065 === (22))){
var inst_17976 = (state_18064[(8)]);
var inst_17979 = cljs.core.async.close_BANG_.call(null,inst_17976);
var state_18064__$1 = state_18064;
var statearr_18098_18171 = state_18064__$1;
(statearr_18098_18171[(2)] = inst_17979);

(statearr_18098_18171[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18065 === (36))){
var inst_18023 = (state_18064[(25)]);
var inst_18027 = cljs.core.chunk_first.call(null,inst_18023);
var inst_18028 = cljs.core.chunk_rest.call(null,inst_18023);
var inst_18029 = cljs.core.count.call(null,inst_18027);
var inst_18004 = inst_18028;
var inst_18005 = inst_18027;
var inst_18006 = inst_18029;
var inst_18007 = (0);
var state_18064__$1 = (function (){var statearr_18099 = state_18064;
(statearr_18099[(10)] = inst_18005);

(statearr_18099[(20)] = inst_18004);

(statearr_18099[(12)] = inst_18007);

(statearr_18099[(21)] = inst_18006);

return statearr_18099;
})();
var statearr_18100_18172 = state_18064__$1;
(statearr_18100_18172[(2)] = null);

(statearr_18100_18172[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18065 === (41))){
var inst_18023 = (state_18064[(25)]);
var inst_18039 = (state_18064[(2)]);
var inst_18040 = cljs.core.next.call(null,inst_18023);
var inst_18004 = inst_18040;
var inst_18005 = null;
var inst_18006 = (0);
var inst_18007 = (0);
var state_18064__$1 = (function (){var statearr_18101 = state_18064;
(statearr_18101[(10)] = inst_18005);

(statearr_18101[(20)] = inst_18004);

(statearr_18101[(12)] = inst_18007);

(statearr_18101[(27)] = inst_18039);

(statearr_18101[(21)] = inst_18006);

return statearr_18101;
})();
var statearr_18102_18173 = state_18064__$1;
(statearr_18102_18173[(2)] = null);

(statearr_18102_18173[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18065 === (43))){
var state_18064__$1 = state_18064;
var statearr_18103_18174 = state_18064__$1;
(statearr_18103_18174[(2)] = null);

(statearr_18103_18174[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18065 === (29))){
var inst_18048 = (state_18064[(2)]);
var state_18064__$1 = state_18064;
var statearr_18104_18175 = state_18064__$1;
(statearr_18104_18175[(2)] = inst_18048);

(statearr_18104_18175[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18065 === (44))){
var inst_18057 = (state_18064[(2)]);
var state_18064__$1 = (function (){var statearr_18105 = state_18064;
(statearr_18105[(28)] = inst_18057);

return statearr_18105;
})();
var statearr_18106_18176 = state_18064__$1;
(statearr_18106_18176[(2)] = null);

(statearr_18106_18176[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18065 === (6))){
var inst_17996 = (state_18064[(29)]);
var inst_17995 = cljs.core.deref.call(null,cs);
var inst_17996__$1 = cljs.core.keys.call(null,inst_17995);
var inst_17997 = cljs.core.count.call(null,inst_17996__$1);
var inst_17998 = cljs.core.reset_BANG_.call(null,dctr,inst_17997);
var inst_18003 = cljs.core.seq.call(null,inst_17996__$1);
var inst_18004 = inst_18003;
var inst_18005 = null;
var inst_18006 = (0);
var inst_18007 = (0);
var state_18064__$1 = (function (){var statearr_18107 = state_18064;
(statearr_18107[(10)] = inst_18005);

(statearr_18107[(29)] = inst_17996__$1);

(statearr_18107[(30)] = inst_17998);

(statearr_18107[(20)] = inst_18004);

(statearr_18107[(12)] = inst_18007);

(statearr_18107[(21)] = inst_18006);

return statearr_18107;
})();
var statearr_18108_18177 = state_18064__$1;
(statearr_18108_18177[(2)] = null);

(statearr_18108_18177[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18065 === (28))){
var inst_18004 = (state_18064[(20)]);
var inst_18023 = (state_18064[(25)]);
var inst_18023__$1 = cljs.core.seq.call(null,inst_18004);
var state_18064__$1 = (function (){var statearr_18109 = state_18064;
(statearr_18109[(25)] = inst_18023__$1);

return statearr_18109;
})();
if(inst_18023__$1){
var statearr_18110_18178 = state_18064__$1;
(statearr_18110_18178[(1)] = (33));

} else {
var statearr_18111_18179 = state_18064__$1;
(statearr_18111_18179[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18065 === (25))){
var inst_18007 = (state_18064[(12)]);
var inst_18006 = (state_18064[(21)]);
var inst_18009 = (inst_18007 < inst_18006);
var inst_18010 = inst_18009;
var state_18064__$1 = state_18064;
if(cljs.core.truth_(inst_18010)){
var statearr_18112_18180 = state_18064__$1;
(statearr_18112_18180[(1)] = (27));

} else {
var statearr_18113_18181 = state_18064__$1;
(statearr_18113_18181[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18065 === (34))){
var state_18064__$1 = state_18064;
var statearr_18114_18182 = state_18064__$1;
(statearr_18114_18182[(2)] = null);

(statearr_18114_18182[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18065 === (17))){
var state_18064__$1 = state_18064;
var statearr_18115_18183 = state_18064__$1;
(statearr_18115_18183[(2)] = null);

(statearr_18115_18183[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18065 === (3))){
var inst_18062 = (state_18064[(2)]);
var state_18064__$1 = state_18064;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18064__$1,inst_18062);
} else {
if((state_val_18065 === (12))){
var inst_17991 = (state_18064[(2)]);
var state_18064__$1 = state_18064;
var statearr_18116_18184 = state_18064__$1;
(statearr_18116_18184[(2)] = inst_17991);

(statearr_18116_18184[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18065 === (2))){
var state_18064__$1 = state_18064;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18064__$1,(4),ch);
} else {
if((state_val_18065 === (23))){
var state_18064__$1 = state_18064;
var statearr_18117_18185 = state_18064__$1;
(statearr_18117_18185[(2)] = null);

(statearr_18117_18185[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18065 === (35))){
var inst_18046 = (state_18064[(2)]);
var state_18064__$1 = state_18064;
var statearr_18118_18186 = state_18064__$1;
(statearr_18118_18186[(2)] = inst_18046);

(statearr_18118_18186[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18065 === (19))){
var inst_17965 = (state_18064[(7)]);
var inst_17969 = cljs.core.chunk_first.call(null,inst_17965);
var inst_17970 = cljs.core.chunk_rest.call(null,inst_17965);
var inst_17971 = cljs.core.count.call(null,inst_17969);
var inst_17945 = inst_17970;
var inst_17946 = inst_17969;
var inst_17947 = inst_17971;
var inst_17948 = (0);
var state_18064__$1 = (function (){var statearr_18119 = state_18064;
(statearr_18119[(13)] = inst_17945);

(statearr_18119[(14)] = inst_17946);

(statearr_18119[(15)] = inst_17947);

(statearr_18119[(17)] = inst_17948);

return statearr_18119;
})();
var statearr_18120_18187 = state_18064__$1;
(statearr_18120_18187[(2)] = null);

(statearr_18120_18187[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18065 === (11))){
var inst_17945 = (state_18064[(13)]);
var inst_17965 = (state_18064[(7)]);
var inst_17965__$1 = cljs.core.seq.call(null,inst_17945);
var state_18064__$1 = (function (){var statearr_18121 = state_18064;
(statearr_18121[(7)] = inst_17965__$1);

return statearr_18121;
})();
if(inst_17965__$1){
var statearr_18122_18188 = state_18064__$1;
(statearr_18122_18188[(1)] = (16));

} else {
var statearr_18123_18189 = state_18064__$1;
(statearr_18123_18189[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18065 === (9))){
var inst_17993 = (state_18064[(2)]);
var state_18064__$1 = state_18064;
var statearr_18124_18190 = state_18064__$1;
(statearr_18124_18190[(2)] = inst_17993);

(statearr_18124_18190[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18065 === (5))){
var inst_17943 = cljs.core.deref.call(null,cs);
var inst_17944 = cljs.core.seq.call(null,inst_17943);
var inst_17945 = inst_17944;
var inst_17946 = null;
var inst_17947 = (0);
var inst_17948 = (0);
var state_18064__$1 = (function (){var statearr_18125 = state_18064;
(statearr_18125[(13)] = inst_17945);

(statearr_18125[(14)] = inst_17946);

(statearr_18125[(15)] = inst_17947);

(statearr_18125[(17)] = inst_17948);

return statearr_18125;
})();
var statearr_18126_18191 = state_18064__$1;
(statearr_18126_18191[(2)] = null);

(statearr_18126_18191[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18065 === (14))){
var state_18064__$1 = state_18064;
var statearr_18127_18192 = state_18064__$1;
(statearr_18127_18192[(2)] = null);

(statearr_18127_18192[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18065 === (45))){
var inst_18054 = (state_18064[(2)]);
var state_18064__$1 = state_18064;
var statearr_18128_18193 = state_18064__$1;
(statearr_18128_18193[(2)] = inst_18054);

(statearr_18128_18193[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18065 === (26))){
var inst_17996 = (state_18064[(29)]);
var inst_18050 = (state_18064[(2)]);
var inst_18051 = cljs.core.seq.call(null,inst_17996);
var state_18064__$1 = (function (){var statearr_18129 = state_18064;
(statearr_18129[(31)] = inst_18050);

return statearr_18129;
})();
if(inst_18051){
var statearr_18130_18194 = state_18064__$1;
(statearr_18130_18194[(1)] = (42));

} else {
var statearr_18131_18195 = state_18064__$1;
(statearr_18131_18195[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18065 === (16))){
var inst_17965 = (state_18064[(7)]);
var inst_17967 = cljs.core.chunked_seq_QMARK_.call(null,inst_17965);
var state_18064__$1 = state_18064;
if(inst_17967){
var statearr_18132_18196 = state_18064__$1;
(statearr_18132_18196[(1)] = (19));

} else {
var statearr_18133_18197 = state_18064__$1;
(statearr_18133_18197[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18065 === (38))){
var inst_18043 = (state_18064[(2)]);
var state_18064__$1 = state_18064;
var statearr_18134_18198 = state_18064__$1;
(statearr_18134_18198[(2)] = inst_18043);

(statearr_18134_18198[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18065 === (30))){
var state_18064__$1 = state_18064;
var statearr_18135_18199 = state_18064__$1;
(statearr_18135_18199[(2)] = null);

(statearr_18135_18199[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18065 === (10))){
var inst_17946 = (state_18064[(14)]);
var inst_17948 = (state_18064[(17)]);
var inst_17954 = cljs.core._nth.call(null,inst_17946,inst_17948);
var inst_17955 = cljs.core.nth.call(null,inst_17954,(0),null);
var inst_17956 = cljs.core.nth.call(null,inst_17954,(1),null);
var state_18064__$1 = (function (){var statearr_18136 = state_18064;
(statearr_18136[(26)] = inst_17955);

return statearr_18136;
})();
if(cljs.core.truth_(inst_17956)){
var statearr_18137_18200 = state_18064__$1;
(statearr_18137_18200[(1)] = (13));

} else {
var statearr_18138_18201 = state_18064__$1;
(statearr_18138_18201[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18065 === (18))){
var inst_17989 = (state_18064[(2)]);
var state_18064__$1 = state_18064;
var statearr_18139_18202 = state_18064__$1;
(statearr_18139_18202[(2)] = inst_17989);

(statearr_18139_18202[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18065 === (42))){
var state_18064__$1 = state_18064;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18064__$1,(45),dchan);
} else {
if((state_val_18065 === (37))){
var inst_17936 = (state_18064[(9)]);
var inst_18023 = (state_18064[(25)]);
var inst_18032 = (state_18064[(23)]);
var inst_18032__$1 = cljs.core.first.call(null,inst_18023);
var inst_18033 = cljs.core.async.put_BANG_.call(null,inst_18032__$1,inst_17936,done);
var state_18064__$1 = (function (){var statearr_18140 = state_18064;
(statearr_18140[(23)] = inst_18032__$1);

return statearr_18140;
})();
if(cljs.core.truth_(inst_18033)){
var statearr_18141_18203 = state_18064__$1;
(statearr_18141_18203[(1)] = (39));

} else {
var statearr_18142_18204 = state_18064__$1;
(statearr_18142_18204[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18065 === (8))){
var inst_17947 = (state_18064[(15)]);
var inst_17948 = (state_18064[(17)]);
var inst_17950 = (inst_17948 < inst_17947);
var inst_17951 = inst_17950;
var state_18064__$1 = state_18064;
if(cljs.core.truth_(inst_17951)){
var statearr_18143_18205 = state_18064__$1;
(statearr_18143_18205[(1)] = (10));

} else {
var statearr_18144_18206 = state_18064__$1;
(statearr_18144_18206[(1)] = (11));

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
});})(c__6459__auto___18152,cs,m,dchan,dctr,done))
;
return ((function (switch__6444__auto__,c__6459__auto___18152,cs,m,dchan,dctr,done){
return (function() {
var state_machine__6445__auto__ = null;
var state_machine__6445__auto____0 = (function (){
var statearr_18148 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18148[(0)] = state_machine__6445__auto__);

(statearr_18148[(1)] = (1));

return statearr_18148;
});
var state_machine__6445__auto____1 = (function (state_18064){
while(true){
var ret_value__6446__auto__ = (function (){try{while(true){
var result__6447__auto__ = switch__6444__auto__.call(null,state_18064);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6447__auto__;
}
break;
}
}catch (e18149){if((e18149 instanceof Object)){
var ex__6448__auto__ = e18149;
var statearr_18150_18207 = state_18064;
(statearr_18150_18207[(5)] = ex__6448__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18064);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18149;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18208 = state_18064;
state_18064 = G__18208;
continue;
} else {
return ret_value__6446__auto__;
}
break;
}
});
state_machine__6445__auto__ = function(state_18064){
switch(arguments.length){
case 0:
return state_machine__6445__auto____0.call(this);
case 1:
return state_machine__6445__auto____1.call(this,state_18064);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6445__auto____0;
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6445__auto____1;
return state_machine__6445__auto__;
})()
;})(switch__6444__auto__,c__6459__auto___18152,cs,m,dchan,dctr,done))
})();
var state__6461__auto__ = (function (){var statearr_18151 = f__6460__auto__.call(null);
(statearr_18151[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6459__auto___18152);

return statearr_18151;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6461__auto__);
});})(c__6459__auto___18152,cs,m,dchan,dctr,done))
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

cljs.core.async.Mix = (function (){var obj18210 = {};
return obj18210;
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
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__18211){
var map__18216 = p__18211;
var map__18216__$1 = ((cljs.core.seq_QMARK_.call(null,map__18216))?cljs.core.apply.call(null,cljs.core.hash_map,map__18216):map__18216);
var opts = map__18216__$1;
var statearr_18217_18220 = state;
(statearr_18217_18220[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__18216,map__18216__$1,opts){
return (function (val){
var statearr_18218_18221 = state;
(statearr_18218_18221[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__18216,map__18216__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_18219_18222 = state;
(statearr_18219_18222[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__18211 = null;
if (arguments.length > 3) {
  p__18211 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__18211);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__18223){
var state = cljs.core.first(arglist__18223);
arglist__18223 = cljs.core.next(arglist__18223);
var cont_block = cljs.core.first(arglist__18223);
arglist__18223 = cljs.core.next(arglist__18223);
var ports = cljs.core.first(arglist__18223);
var p__18211 = cljs.core.rest(arglist__18223);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__18211);
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
if(typeof cljs.core.async.t18343 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t18343 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta18344){
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
this.meta18344 = meta18344;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t18343.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t18343.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t18343.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t18343.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t18343.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t18343.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t18343.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t18343.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t18343.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_18345){
var self__ = this;
var _18345__$1 = this;
return self__.meta18344;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t18343.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_18345,meta18344__$1){
var self__ = this;
var _18345__$1 = this;
return (new cljs.core.async.t18343(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta18344__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t18343.cljs$lang$type = true;

cljs.core.async.t18343.cljs$lang$ctorStr = "cljs.core.async/t18343";

cljs.core.async.t18343.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t18343");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t18343 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t18343(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta18344){
return (new cljs.core.async.t18343(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta18344));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t18343(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),25,new cljs.core.Keyword(null,"end-line","end-line",1837326455),510,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"line","line",212345235),499,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/chrism/dev/farn/resources/public/js/out/cljs/core/async.cljs"], null)));
})()
;
var c__6459__auto___18462 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6459__auto___18462,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__6460__auto__ = (function (){var switch__6444__auto__ = ((function (c__6459__auto___18462,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_18415){
var state_val_18416 = (state_18415[(1)]);
if((state_val_18416 === (7))){
var inst_18359 = (state_18415[(7)]);
var inst_18364 = cljs.core.apply.call(null,cljs.core.hash_map,inst_18359);
var state_18415__$1 = state_18415;
var statearr_18417_18463 = state_18415__$1;
(statearr_18417_18463[(2)] = inst_18364);

(statearr_18417_18463[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18416 === (20))){
var inst_18374 = (state_18415[(8)]);
var state_18415__$1 = state_18415;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18415__$1,(23),out,inst_18374);
} else {
if((state_val_18416 === (1))){
var inst_18349 = (state_18415[(9)]);
var inst_18349__$1 = calc_state.call(null);
var inst_18350 = cljs.core.seq_QMARK_.call(null,inst_18349__$1);
var state_18415__$1 = (function (){var statearr_18418 = state_18415;
(statearr_18418[(9)] = inst_18349__$1);

return statearr_18418;
})();
if(inst_18350){
var statearr_18419_18464 = state_18415__$1;
(statearr_18419_18464[(1)] = (2));

} else {
var statearr_18420_18465 = state_18415__$1;
(statearr_18420_18465[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18416 === (24))){
var inst_18367 = (state_18415[(10)]);
var inst_18359 = inst_18367;
var state_18415__$1 = (function (){var statearr_18421 = state_18415;
(statearr_18421[(7)] = inst_18359);

return statearr_18421;
})();
var statearr_18422_18466 = state_18415__$1;
(statearr_18422_18466[(2)] = null);

(statearr_18422_18466[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18416 === (4))){
var inst_18349 = (state_18415[(9)]);
var inst_18355 = (state_18415[(2)]);
var inst_18356 = cljs.core.get.call(null,inst_18355,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_18357 = cljs.core.get.call(null,inst_18355,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_18358 = cljs.core.get.call(null,inst_18355,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_18359 = inst_18349;
var state_18415__$1 = (function (){var statearr_18423 = state_18415;
(statearr_18423[(11)] = inst_18356);

(statearr_18423[(12)] = inst_18358);

(statearr_18423[(7)] = inst_18359);

(statearr_18423[(13)] = inst_18357);

return statearr_18423;
})();
var statearr_18424_18467 = state_18415__$1;
(statearr_18424_18467[(2)] = null);

(statearr_18424_18467[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18416 === (15))){
var state_18415__$1 = state_18415;
var statearr_18425_18468 = state_18415__$1;
(statearr_18425_18468[(2)] = null);

(statearr_18425_18468[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18416 === (21))){
var inst_18367 = (state_18415[(10)]);
var inst_18359 = inst_18367;
var state_18415__$1 = (function (){var statearr_18426 = state_18415;
(statearr_18426[(7)] = inst_18359);

return statearr_18426;
})();
var statearr_18427_18469 = state_18415__$1;
(statearr_18427_18469[(2)] = null);

(statearr_18427_18469[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18416 === (13))){
var inst_18411 = (state_18415[(2)]);
var state_18415__$1 = state_18415;
var statearr_18428_18470 = state_18415__$1;
(statearr_18428_18470[(2)] = inst_18411);

(statearr_18428_18470[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18416 === (22))){
var inst_18409 = (state_18415[(2)]);
var state_18415__$1 = state_18415;
var statearr_18429_18471 = state_18415__$1;
(statearr_18429_18471[(2)] = inst_18409);

(statearr_18429_18471[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18416 === (6))){
var inst_18413 = (state_18415[(2)]);
var state_18415__$1 = state_18415;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18415__$1,inst_18413);
} else {
if((state_val_18416 === (25))){
var state_18415__$1 = state_18415;
var statearr_18430_18472 = state_18415__$1;
(statearr_18430_18472[(2)] = null);

(statearr_18430_18472[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18416 === (17))){
var inst_18389 = (state_18415[(14)]);
var state_18415__$1 = state_18415;
var statearr_18431_18473 = state_18415__$1;
(statearr_18431_18473[(2)] = inst_18389);

(statearr_18431_18473[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18416 === (3))){
var inst_18349 = (state_18415[(9)]);
var state_18415__$1 = state_18415;
var statearr_18432_18474 = state_18415__$1;
(statearr_18432_18474[(2)] = inst_18349);

(statearr_18432_18474[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18416 === (12))){
var inst_18370 = (state_18415[(15)]);
var inst_18389 = (state_18415[(14)]);
var inst_18375 = (state_18415[(16)]);
var inst_18389__$1 = inst_18370.call(null,inst_18375);
var state_18415__$1 = (function (){var statearr_18433 = state_18415;
(statearr_18433[(14)] = inst_18389__$1);

return statearr_18433;
})();
if(cljs.core.truth_(inst_18389__$1)){
var statearr_18434_18475 = state_18415__$1;
(statearr_18434_18475[(1)] = (17));

} else {
var statearr_18435_18476 = state_18415__$1;
(statearr_18435_18476[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18416 === (2))){
var inst_18349 = (state_18415[(9)]);
var inst_18352 = cljs.core.apply.call(null,cljs.core.hash_map,inst_18349);
var state_18415__$1 = state_18415;
var statearr_18436_18477 = state_18415__$1;
(statearr_18436_18477[(2)] = inst_18352);

(statearr_18436_18477[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18416 === (23))){
var inst_18400 = (state_18415[(2)]);
var state_18415__$1 = state_18415;
if(cljs.core.truth_(inst_18400)){
var statearr_18437_18478 = state_18415__$1;
(statearr_18437_18478[(1)] = (24));

} else {
var statearr_18438_18479 = state_18415__$1;
(statearr_18438_18479[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18416 === (19))){
var inst_18397 = (state_18415[(2)]);
var state_18415__$1 = state_18415;
if(cljs.core.truth_(inst_18397)){
var statearr_18439_18480 = state_18415__$1;
(statearr_18439_18480[(1)] = (20));

} else {
var statearr_18440_18481 = state_18415__$1;
(statearr_18440_18481[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18416 === (11))){
var inst_18374 = (state_18415[(8)]);
var inst_18380 = (inst_18374 == null);
var state_18415__$1 = state_18415;
if(cljs.core.truth_(inst_18380)){
var statearr_18441_18482 = state_18415__$1;
(statearr_18441_18482[(1)] = (14));

} else {
var statearr_18442_18483 = state_18415__$1;
(statearr_18442_18483[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18416 === (9))){
var inst_18367 = (state_18415[(10)]);
var inst_18367__$1 = (state_18415[(2)]);
var inst_18368 = cljs.core.get.call(null,inst_18367__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_18369 = cljs.core.get.call(null,inst_18367__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_18370 = cljs.core.get.call(null,inst_18367__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var state_18415__$1 = (function (){var statearr_18443 = state_18415;
(statearr_18443[(15)] = inst_18370);

(statearr_18443[(10)] = inst_18367__$1);

(statearr_18443[(17)] = inst_18369);

return statearr_18443;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_18415__$1,(10),inst_18368);
} else {
if((state_val_18416 === (5))){
var inst_18359 = (state_18415[(7)]);
var inst_18362 = cljs.core.seq_QMARK_.call(null,inst_18359);
var state_18415__$1 = state_18415;
if(inst_18362){
var statearr_18444_18484 = state_18415__$1;
(statearr_18444_18484[(1)] = (7));

} else {
var statearr_18445_18485 = state_18415__$1;
(statearr_18445_18485[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18416 === (14))){
var inst_18375 = (state_18415[(16)]);
var inst_18382 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_18375);
var state_18415__$1 = state_18415;
var statearr_18446_18486 = state_18415__$1;
(statearr_18446_18486[(2)] = inst_18382);

(statearr_18446_18486[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18416 === (26))){
var inst_18405 = (state_18415[(2)]);
var state_18415__$1 = state_18415;
var statearr_18447_18487 = state_18415__$1;
(statearr_18447_18487[(2)] = inst_18405);

(statearr_18447_18487[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18416 === (16))){
var inst_18385 = (state_18415[(2)]);
var inst_18386 = calc_state.call(null);
var inst_18359 = inst_18386;
var state_18415__$1 = (function (){var statearr_18448 = state_18415;
(statearr_18448[(7)] = inst_18359);

(statearr_18448[(18)] = inst_18385);

return statearr_18448;
})();
var statearr_18449_18488 = state_18415__$1;
(statearr_18449_18488[(2)] = null);

(statearr_18449_18488[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18416 === (10))){
var inst_18375 = (state_18415[(16)]);
var inst_18374 = (state_18415[(8)]);
var inst_18373 = (state_18415[(2)]);
var inst_18374__$1 = cljs.core.nth.call(null,inst_18373,(0),null);
var inst_18375__$1 = cljs.core.nth.call(null,inst_18373,(1),null);
var inst_18376 = (inst_18374__$1 == null);
var inst_18377 = cljs.core._EQ_.call(null,inst_18375__$1,change);
var inst_18378 = (inst_18376) || (inst_18377);
var state_18415__$1 = (function (){var statearr_18450 = state_18415;
(statearr_18450[(16)] = inst_18375__$1);

(statearr_18450[(8)] = inst_18374__$1);

return statearr_18450;
})();
if(cljs.core.truth_(inst_18378)){
var statearr_18451_18489 = state_18415__$1;
(statearr_18451_18489[(1)] = (11));

} else {
var statearr_18452_18490 = state_18415__$1;
(statearr_18452_18490[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18416 === (18))){
var inst_18370 = (state_18415[(15)]);
var inst_18369 = (state_18415[(17)]);
var inst_18375 = (state_18415[(16)]);
var inst_18392 = cljs.core.empty_QMARK_.call(null,inst_18370);
var inst_18393 = inst_18369.call(null,inst_18375);
var inst_18394 = cljs.core.not.call(null,inst_18393);
var inst_18395 = (inst_18392) && (inst_18394);
var state_18415__$1 = state_18415;
var statearr_18453_18491 = state_18415__$1;
(statearr_18453_18491[(2)] = inst_18395);

(statearr_18453_18491[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18416 === (8))){
var inst_18359 = (state_18415[(7)]);
var state_18415__$1 = state_18415;
var statearr_18454_18492 = state_18415__$1;
(statearr_18454_18492[(2)] = inst_18359);

(statearr_18454_18492[(1)] = (9));


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
});})(c__6459__auto___18462,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__6444__auto__,c__6459__auto___18462,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__6445__auto__ = null;
var state_machine__6445__auto____0 = (function (){
var statearr_18458 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18458[(0)] = state_machine__6445__auto__);

(statearr_18458[(1)] = (1));

return statearr_18458;
});
var state_machine__6445__auto____1 = (function (state_18415){
while(true){
var ret_value__6446__auto__ = (function (){try{while(true){
var result__6447__auto__ = switch__6444__auto__.call(null,state_18415);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6447__auto__;
}
break;
}
}catch (e18459){if((e18459 instanceof Object)){
var ex__6448__auto__ = e18459;
var statearr_18460_18493 = state_18415;
(statearr_18460_18493[(5)] = ex__6448__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18415);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18459;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18494 = state_18415;
state_18415 = G__18494;
continue;
} else {
return ret_value__6446__auto__;
}
break;
}
});
state_machine__6445__auto__ = function(state_18415){
switch(arguments.length){
case 0:
return state_machine__6445__auto____0.call(this);
case 1:
return state_machine__6445__auto____1.call(this,state_18415);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6445__auto____0;
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6445__auto____1;
return state_machine__6445__auto__;
})()
;})(switch__6444__auto__,c__6459__auto___18462,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__6461__auto__ = (function (){var statearr_18461 = f__6460__auto__.call(null);
(statearr_18461[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6459__auto___18462);

return statearr_18461;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6461__auto__);
});})(c__6459__auto___18462,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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

cljs.core.async.Pub = (function (){var obj18496 = {};
return obj18496;
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
return (function (p1__18497_SHARP_){
if(cljs.core.truth_(p1__18497_SHARP_.call(null,topic))){
return p1__18497_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__18497_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3630__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t18620 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t18620 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta18621){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta18621 = meta18621;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t18620.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t18620.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t18620.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t18620.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t18620.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t18620.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t18620.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t18620.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_18622){
var self__ = this;
var _18622__$1 = this;
return self__.meta18621;
});})(mults,ensure_mult))
;

cljs.core.async.t18620.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_18622,meta18621__$1){
var self__ = this;
var _18622__$1 = this;
return (new cljs.core.async.t18620(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta18621__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t18620.cljs$lang$type = true;

cljs.core.async.t18620.cljs$lang$ctorStr = "cljs.core.async/t18620";

cljs.core.async.t18620.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t18620");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t18620 = ((function (mults,ensure_mult){
return (function __GT_t18620(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta18621){
return (new cljs.core.async.t18620(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta18621));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t18620(ensure_mult,mults,buf_fn,topic_fn,ch,pub,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),65,new cljs.core.Keyword(null,"end-line","end-line",1837326455),603,new cljs.core.Keyword(null,"column","column",2078222095),14,new cljs.core.Keyword(null,"line","line",212345235),591,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/chrism/dev/farn/resources/public/js/out/cljs/core/async.cljs"], null)));
})()
;
var c__6459__auto___18742 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6459__auto___18742,mults,ensure_mult,p){
return (function (){
var f__6460__auto__ = (function (){var switch__6444__auto__ = ((function (c__6459__auto___18742,mults,ensure_mult,p){
return (function (state_18694){
var state_val_18695 = (state_18694[(1)]);
if((state_val_18695 === (7))){
var inst_18690 = (state_18694[(2)]);
var state_18694__$1 = state_18694;
var statearr_18696_18743 = state_18694__$1;
(statearr_18696_18743[(2)] = inst_18690);

(statearr_18696_18743[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18695 === (20))){
var state_18694__$1 = state_18694;
var statearr_18697_18744 = state_18694__$1;
(statearr_18697_18744[(2)] = null);

(statearr_18697_18744[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18695 === (1))){
var state_18694__$1 = state_18694;
var statearr_18698_18745 = state_18694__$1;
(statearr_18698_18745[(2)] = null);

(statearr_18698_18745[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18695 === (24))){
var inst_18673 = (state_18694[(7)]);
var inst_18682 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_18673);
var state_18694__$1 = state_18694;
var statearr_18699_18746 = state_18694__$1;
(statearr_18699_18746[(2)] = inst_18682);

(statearr_18699_18746[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18695 === (4))){
var inst_18625 = (state_18694[(8)]);
var inst_18625__$1 = (state_18694[(2)]);
var inst_18626 = (inst_18625__$1 == null);
var state_18694__$1 = (function (){var statearr_18700 = state_18694;
(statearr_18700[(8)] = inst_18625__$1);

return statearr_18700;
})();
if(cljs.core.truth_(inst_18626)){
var statearr_18701_18747 = state_18694__$1;
(statearr_18701_18747[(1)] = (5));

} else {
var statearr_18702_18748 = state_18694__$1;
(statearr_18702_18748[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18695 === (15))){
var inst_18667 = (state_18694[(2)]);
var state_18694__$1 = state_18694;
var statearr_18703_18749 = state_18694__$1;
(statearr_18703_18749[(2)] = inst_18667);

(statearr_18703_18749[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18695 === (21))){
var inst_18687 = (state_18694[(2)]);
var state_18694__$1 = (function (){var statearr_18704 = state_18694;
(statearr_18704[(9)] = inst_18687);

return statearr_18704;
})();
var statearr_18705_18750 = state_18694__$1;
(statearr_18705_18750[(2)] = null);

(statearr_18705_18750[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18695 === (13))){
var inst_18649 = (state_18694[(10)]);
var inst_18651 = cljs.core.chunked_seq_QMARK_.call(null,inst_18649);
var state_18694__$1 = state_18694;
if(inst_18651){
var statearr_18706_18751 = state_18694__$1;
(statearr_18706_18751[(1)] = (16));

} else {
var statearr_18707_18752 = state_18694__$1;
(statearr_18707_18752[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18695 === (22))){
var inst_18679 = (state_18694[(2)]);
var state_18694__$1 = state_18694;
if(cljs.core.truth_(inst_18679)){
var statearr_18708_18753 = state_18694__$1;
(statearr_18708_18753[(1)] = (23));

} else {
var statearr_18709_18754 = state_18694__$1;
(statearr_18709_18754[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18695 === (6))){
var inst_18625 = (state_18694[(8)]);
var inst_18673 = (state_18694[(7)]);
var inst_18675 = (state_18694[(11)]);
var inst_18673__$1 = topic_fn.call(null,inst_18625);
var inst_18674 = cljs.core.deref.call(null,mults);
var inst_18675__$1 = cljs.core.get.call(null,inst_18674,inst_18673__$1);
var state_18694__$1 = (function (){var statearr_18710 = state_18694;
(statearr_18710[(7)] = inst_18673__$1);

(statearr_18710[(11)] = inst_18675__$1);

return statearr_18710;
})();
if(cljs.core.truth_(inst_18675__$1)){
var statearr_18711_18755 = state_18694__$1;
(statearr_18711_18755[(1)] = (19));

} else {
var statearr_18712_18756 = state_18694__$1;
(statearr_18712_18756[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18695 === (25))){
var inst_18684 = (state_18694[(2)]);
var state_18694__$1 = state_18694;
var statearr_18713_18757 = state_18694__$1;
(statearr_18713_18757[(2)] = inst_18684);

(statearr_18713_18757[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18695 === (17))){
var inst_18649 = (state_18694[(10)]);
var inst_18658 = cljs.core.first.call(null,inst_18649);
var inst_18659 = cljs.core.async.muxch_STAR_.call(null,inst_18658);
var inst_18660 = cljs.core.async.close_BANG_.call(null,inst_18659);
var inst_18661 = cljs.core.next.call(null,inst_18649);
var inst_18635 = inst_18661;
var inst_18636 = null;
var inst_18637 = (0);
var inst_18638 = (0);
var state_18694__$1 = (function (){var statearr_18714 = state_18694;
(statearr_18714[(12)] = inst_18637);

(statearr_18714[(13)] = inst_18660);

(statearr_18714[(14)] = inst_18638);

(statearr_18714[(15)] = inst_18635);

(statearr_18714[(16)] = inst_18636);

return statearr_18714;
})();
var statearr_18715_18758 = state_18694__$1;
(statearr_18715_18758[(2)] = null);

(statearr_18715_18758[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18695 === (3))){
var inst_18692 = (state_18694[(2)]);
var state_18694__$1 = state_18694;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18694__$1,inst_18692);
} else {
if((state_val_18695 === (12))){
var inst_18669 = (state_18694[(2)]);
var state_18694__$1 = state_18694;
var statearr_18716_18759 = state_18694__$1;
(statearr_18716_18759[(2)] = inst_18669);

(statearr_18716_18759[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18695 === (2))){
var state_18694__$1 = state_18694;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18694__$1,(4),ch);
} else {
if((state_val_18695 === (23))){
var state_18694__$1 = state_18694;
var statearr_18717_18760 = state_18694__$1;
(statearr_18717_18760[(2)] = null);

(statearr_18717_18760[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18695 === (19))){
var inst_18625 = (state_18694[(8)]);
var inst_18675 = (state_18694[(11)]);
var inst_18677 = cljs.core.async.muxch_STAR_.call(null,inst_18675);
var state_18694__$1 = state_18694;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18694__$1,(22),inst_18677,inst_18625);
} else {
if((state_val_18695 === (11))){
var inst_18649 = (state_18694[(10)]);
var inst_18635 = (state_18694[(15)]);
var inst_18649__$1 = cljs.core.seq.call(null,inst_18635);
var state_18694__$1 = (function (){var statearr_18718 = state_18694;
(statearr_18718[(10)] = inst_18649__$1);

return statearr_18718;
})();
if(inst_18649__$1){
var statearr_18719_18761 = state_18694__$1;
(statearr_18719_18761[(1)] = (13));

} else {
var statearr_18720_18762 = state_18694__$1;
(statearr_18720_18762[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18695 === (9))){
var inst_18671 = (state_18694[(2)]);
var state_18694__$1 = state_18694;
var statearr_18721_18763 = state_18694__$1;
(statearr_18721_18763[(2)] = inst_18671);

(statearr_18721_18763[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18695 === (5))){
var inst_18632 = cljs.core.deref.call(null,mults);
var inst_18633 = cljs.core.vals.call(null,inst_18632);
var inst_18634 = cljs.core.seq.call(null,inst_18633);
var inst_18635 = inst_18634;
var inst_18636 = null;
var inst_18637 = (0);
var inst_18638 = (0);
var state_18694__$1 = (function (){var statearr_18722 = state_18694;
(statearr_18722[(12)] = inst_18637);

(statearr_18722[(14)] = inst_18638);

(statearr_18722[(15)] = inst_18635);

(statearr_18722[(16)] = inst_18636);

return statearr_18722;
})();
var statearr_18723_18764 = state_18694__$1;
(statearr_18723_18764[(2)] = null);

(statearr_18723_18764[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18695 === (14))){
var state_18694__$1 = state_18694;
var statearr_18727_18765 = state_18694__$1;
(statearr_18727_18765[(2)] = null);

(statearr_18727_18765[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18695 === (16))){
var inst_18649 = (state_18694[(10)]);
var inst_18653 = cljs.core.chunk_first.call(null,inst_18649);
var inst_18654 = cljs.core.chunk_rest.call(null,inst_18649);
var inst_18655 = cljs.core.count.call(null,inst_18653);
var inst_18635 = inst_18654;
var inst_18636 = inst_18653;
var inst_18637 = inst_18655;
var inst_18638 = (0);
var state_18694__$1 = (function (){var statearr_18728 = state_18694;
(statearr_18728[(12)] = inst_18637);

(statearr_18728[(14)] = inst_18638);

(statearr_18728[(15)] = inst_18635);

(statearr_18728[(16)] = inst_18636);

return statearr_18728;
})();
var statearr_18729_18766 = state_18694__$1;
(statearr_18729_18766[(2)] = null);

(statearr_18729_18766[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18695 === (10))){
var inst_18637 = (state_18694[(12)]);
var inst_18638 = (state_18694[(14)]);
var inst_18635 = (state_18694[(15)]);
var inst_18636 = (state_18694[(16)]);
var inst_18643 = cljs.core._nth.call(null,inst_18636,inst_18638);
var inst_18644 = cljs.core.async.muxch_STAR_.call(null,inst_18643);
var inst_18645 = cljs.core.async.close_BANG_.call(null,inst_18644);
var inst_18646 = (inst_18638 + (1));
var tmp18724 = inst_18637;
var tmp18725 = inst_18635;
var tmp18726 = inst_18636;
var inst_18635__$1 = tmp18725;
var inst_18636__$1 = tmp18726;
var inst_18637__$1 = tmp18724;
var inst_18638__$1 = inst_18646;
var state_18694__$1 = (function (){var statearr_18730 = state_18694;
(statearr_18730[(12)] = inst_18637__$1);

(statearr_18730[(14)] = inst_18638__$1);

(statearr_18730[(15)] = inst_18635__$1);

(statearr_18730[(16)] = inst_18636__$1);

(statearr_18730[(17)] = inst_18645);

return statearr_18730;
})();
var statearr_18731_18767 = state_18694__$1;
(statearr_18731_18767[(2)] = null);

(statearr_18731_18767[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18695 === (18))){
var inst_18664 = (state_18694[(2)]);
var state_18694__$1 = state_18694;
var statearr_18732_18768 = state_18694__$1;
(statearr_18732_18768[(2)] = inst_18664);

(statearr_18732_18768[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18695 === (8))){
var inst_18637 = (state_18694[(12)]);
var inst_18638 = (state_18694[(14)]);
var inst_18640 = (inst_18638 < inst_18637);
var inst_18641 = inst_18640;
var state_18694__$1 = state_18694;
if(cljs.core.truth_(inst_18641)){
var statearr_18733_18769 = state_18694__$1;
(statearr_18733_18769[(1)] = (10));

} else {
var statearr_18734_18770 = state_18694__$1;
(statearr_18734_18770[(1)] = (11));

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
});})(c__6459__auto___18742,mults,ensure_mult,p))
;
return ((function (switch__6444__auto__,c__6459__auto___18742,mults,ensure_mult,p){
return (function() {
var state_machine__6445__auto__ = null;
var state_machine__6445__auto____0 = (function (){
var statearr_18738 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18738[(0)] = state_machine__6445__auto__);

(statearr_18738[(1)] = (1));

return statearr_18738;
});
var state_machine__6445__auto____1 = (function (state_18694){
while(true){
var ret_value__6446__auto__ = (function (){try{while(true){
var result__6447__auto__ = switch__6444__auto__.call(null,state_18694);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6447__auto__;
}
break;
}
}catch (e18739){if((e18739 instanceof Object)){
var ex__6448__auto__ = e18739;
var statearr_18740_18771 = state_18694;
(statearr_18740_18771[(5)] = ex__6448__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18694);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18739;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18772 = state_18694;
state_18694 = G__18772;
continue;
} else {
return ret_value__6446__auto__;
}
break;
}
});
state_machine__6445__auto__ = function(state_18694){
switch(arguments.length){
case 0:
return state_machine__6445__auto____0.call(this);
case 1:
return state_machine__6445__auto____1.call(this,state_18694);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6445__auto____0;
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6445__auto____1;
return state_machine__6445__auto__;
})()
;})(switch__6444__auto__,c__6459__auto___18742,mults,ensure_mult,p))
})();
var state__6461__auto__ = (function (){var statearr_18741 = f__6460__auto__.call(null);
(statearr_18741[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6459__auto___18742);

return statearr_18741;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6461__auto__);
});})(c__6459__auto___18742,mults,ensure_mult,p))
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
var c__6459__auto___18909 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6459__auto___18909,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__6460__auto__ = (function (){var switch__6444__auto__ = ((function (c__6459__auto___18909,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_18879){
var state_val_18880 = (state_18879[(1)]);
if((state_val_18880 === (7))){
var state_18879__$1 = state_18879;
var statearr_18881_18910 = state_18879__$1;
(statearr_18881_18910[(2)] = null);

(statearr_18881_18910[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18880 === (1))){
var state_18879__$1 = state_18879;
var statearr_18882_18911 = state_18879__$1;
(statearr_18882_18911[(2)] = null);

(statearr_18882_18911[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18880 === (4))){
var inst_18843 = (state_18879[(7)]);
var inst_18845 = (inst_18843 < cnt);
var state_18879__$1 = state_18879;
if(cljs.core.truth_(inst_18845)){
var statearr_18883_18912 = state_18879__$1;
(statearr_18883_18912[(1)] = (6));

} else {
var statearr_18884_18913 = state_18879__$1;
(statearr_18884_18913[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18880 === (15))){
var inst_18875 = (state_18879[(2)]);
var state_18879__$1 = state_18879;
var statearr_18885_18914 = state_18879__$1;
(statearr_18885_18914[(2)] = inst_18875);

(statearr_18885_18914[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18880 === (13))){
var inst_18868 = cljs.core.async.close_BANG_.call(null,out);
var state_18879__$1 = state_18879;
var statearr_18886_18915 = state_18879__$1;
(statearr_18886_18915[(2)] = inst_18868);

(statearr_18886_18915[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18880 === (6))){
var state_18879__$1 = state_18879;
var statearr_18887_18916 = state_18879__$1;
(statearr_18887_18916[(2)] = null);

(statearr_18887_18916[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18880 === (3))){
var inst_18877 = (state_18879[(2)]);
var state_18879__$1 = state_18879;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18879__$1,inst_18877);
} else {
if((state_val_18880 === (12))){
var inst_18865 = (state_18879[(8)]);
var inst_18865__$1 = (state_18879[(2)]);
var inst_18866 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_18865__$1);
var state_18879__$1 = (function (){var statearr_18888 = state_18879;
(statearr_18888[(8)] = inst_18865__$1);

return statearr_18888;
})();
if(cljs.core.truth_(inst_18866)){
var statearr_18889_18917 = state_18879__$1;
(statearr_18889_18917[(1)] = (13));

} else {
var statearr_18890_18918 = state_18879__$1;
(statearr_18890_18918[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18880 === (2))){
var inst_18842 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_18843 = (0);
var state_18879__$1 = (function (){var statearr_18891 = state_18879;
(statearr_18891[(9)] = inst_18842);

(statearr_18891[(7)] = inst_18843);

return statearr_18891;
})();
var statearr_18892_18919 = state_18879__$1;
(statearr_18892_18919[(2)] = null);

(statearr_18892_18919[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18880 === (11))){
var inst_18843 = (state_18879[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_18879,(10),Object,null,(9));
var inst_18852 = chs__$1.call(null,inst_18843);
var inst_18853 = done.call(null,inst_18843);
var inst_18854 = cljs.core.async.take_BANG_.call(null,inst_18852,inst_18853);
var state_18879__$1 = state_18879;
var statearr_18893_18920 = state_18879__$1;
(statearr_18893_18920[(2)] = inst_18854);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18879__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18880 === (9))){
var inst_18843 = (state_18879[(7)]);
var inst_18856 = (state_18879[(2)]);
var inst_18857 = (inst_18843 + (1));
var inst_18843__$1 = inst_18857;
var state_18879__$1 = (function (){var statearr_18894 = state_18879;
(statearr_18894[(10)] = inst_18856);

(statearr_18894[(7)] = inst_18843__$1);

return statearr_18894;
})();
var statearr_18895_18921 = state_18879__$1;
(statearr_18895_18921[(2)] = null);

(statearr_18895_18921[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18880 === (5))){
var inst_18863 = (state_18879[(2)]);
var state_18879__$1 = (function (){var statearr_18896 = state_18879;
(statearr_18896[(11)] = inst_18863);

return statearr_18896;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18879__$1,(12),dchan);
} else {
if((state_val_18880 === (14))){
var inst_18865 = (state_18879[(8)]);
var inst_18870 = cljs.core.apply.call(null,f,inst_18865);
var state_18879__$1 = state_18879;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18879__$1,(16),out,inst_18870);
} else {
if((state_val_18880 === (16))){
var inst_18872 = (state_18879[(2)]);
var state_18879__$1 = (function (){var statearr_18897 = state_18879;
(statearr_18897[(12)] = inst_18872);

return statearr_18897;
})();
var statearr_18898_18922 = state_18879__$1;
(statearr_18898_18922[(2)] = null);

(statearr_18898_18922[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18880 === (10))){
var inst_18847 = (state_18879[(2)]);
var inst_18848 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_18879__$1 = (function (){var statearr_18899 = state_18879;
(statearr_18899[(13)] = inst_18847);

return statearr_18899;
})();
var statearr_18900_18923 = state_18879__$1;
(statearr_18900_18923[(2)] = inst_18848);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18879__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18880 === (8))){
var inst_18861 = (state_18879[(2)]);
var state_18879__$1 = state_18879;
var statearr_18901_18924 = state_18879__$1;
(statearr_18901_18924[(2)] = inst_18861);

(statearr_18901_18924[(1)] = (5));


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
});})(c__6459__auto___18909,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__6444__auto__,c__6459__auto___18909,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__6445__auto__ = null;
var state_machine__6445__auto____0 = (function (){
var statearr_18905 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18905[(0)] = state_machine__6445__auto__);

(statearr_18905[(1)] = (1));

return statearr_18905;
});
var state_machine__6445__auto____1 = (function (state_18879){
while(true){
var ret_value__6446__auto__ = (function (){try{while(true){
var result__6447__auto__ = switch__6444__auto__.call(null,state_18879);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6447__auto__;
}
break;
}
}catch (e18906){if((e18906 instanceof Object)){
var ex__6448__auto__ = e18906;
var statearr_18907_18925 = state_18879;
(statearr_18907_18925[(5)] = ex__6448__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18879);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18906;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18926 = state_18879;
state_18879 = G__18926;
continue;
} else {
return ret_value__6446__auto__;
}
break;
}
});
state_machine__6445__auto__ = function(state_18879){
switch(arguments.length){
case 0:
return state_machine__6445__auto____0.call(this);
case 1:
return state_machine__6445__auto____1.call(this,state_18879);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6445__auto____0;
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6445__auto____1;
return state_machine__6445__auto__;
})()
;})(switch__6444__auto__,c__6459__auto___18909,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__6461__auto__ = (function (){var statearr_18908 = f__6460__auto__.call(null);
(statearr_18908[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6459__auto___18909);

return statearr_18908;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6461__auto__);
});})(c__6459__auto___18909,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var c__6459__auto___19034 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6459__auto___19034,out){
return (function (){
var f__6460__auto__ = (function (){var switch__6444__auto__ = ((function (c__6459__auto___19034,out){
return (function (state_19010){
var state_val_19011 = (state_19010[(1)]);
if((state_val_19011 === (7))){
var inst_18989 = (state_19010[(7)]);
var inst_18990 = (state_19010[(8)]);
var inst_18989__$1 = (state_19010[(2)]);
var inst_18990__$1 = cljs.core.nth.call(null,inst_18989__$1,(0),null);
var inst_18991 = cljs.core.nth.call(null,inst_18989__$1,(1),null);
var inst_18992 = (inst_18990__$1 == null);
var state_19010__$1 = (function (){var statearr_19012 = state_19010;
(statearr_19012[(7)] = inst_18989__$1);

(statearr_19012[(8)] = inst_18990__$1);

(statearr_19012[(9)] = inst_18991);

return statearr_19012;
})();
if(cljs.core.truth_(inst_18992)){
var statearr_19013_19035 = state_19010__$1;
(statearr_19013_19035[(1)] = (8));

} else {
var statearr_19014_19036 = state_19010__$1;
(statearr_19014_19036[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19011 === (1))){
var inst_18981 = cljs.core.vec.call(null,chs);
var inst_18982 = inst_18981;
var state_19010__$1 = (function (){var statearr_19015 = state_19010;
(statearr_19015[(10)] = inst_18982);

return statearr_19015;
})();
var statearr_19016_19037 = state_19010__$1;
(statearr_19016_19037[(2)] = null);

(statearr_19016_19037[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19011 === (4))){
var inst_18982 = (state_19010[(10)]);
var state_19010__$1 = state_19010;
return cljs.core.async.ioc_alts_BANG_.call(null,state_19010__$1,(7),inst_18982);
} else {
if((state_val_19011 === (6))){
var inst_19006 = (state_19010[(2)]);
var state_19010__$1 = state_19010;
var statearr_19017_19038 = state_19010__$1;
(statearr_19017_19038[(2)] = inst_19006);

(statearr_19017_19038[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19011 === (3))){
var inst_19008 = (state_19010[(2)]);
var state_19010__$1 = state_19010;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19010__$1,inst_19008);
} else {
if((state_val_19011 === (2))){
var inst_18982 = (state_19010[(10)]);
var inst_18984 = cljs.core.count.call(null,inst_18982);
var inst_18985 = (inst_18984 > (0));
var state_19010__$1 = state_19010;
if(cljs.core.truth_(inst_18985)){
var statearr_19019_19039 = state_19010__$1;
(statearr_19019_19039[(1)] = (4));

} else {
var statearr_19020_19040 = state_19010__$1;
(statearr_19020_19040[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19011 === (11))){
var inst_18982 = (state_19010[(10)]);
var inst_18999 = (state_19010[(2)]);
var tmp19018 = inst_18982;
var inst_18982__$1 = tmp19018;
var state_19010__$1 = (function (){var statearr_19021 = state_19010;
(statearr_19021[(11)] = inst_18999);

(statearr_19021[(10)] = inst_18982__$1);

return statearr_19021;
})();
var statearr_19022_19041 = state_19010__$1;
(statearr_19022_19041[(2)] = null);

(statearr_19022_19041[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19011 === (9))){
var inst_18990 = (state_19010[(8)]);
var state_19010__$1 = state_19010;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19010__$1,(11),out,inst_18990);
} else {
if((state_val_19011 === (5))){
var inst_19004 = cljs.core.async.close_BANG_.call(null,out);
var state_19010__$1 = state_19010;
var statearr_19023_19042 = state_19010__$1;
(statearr_19023_19042[(2)] = inst_19004);

(statearr_19023_19042[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19011 === (10))){
var inst_19002 = (state_19010[(2)]);
var state_19010__$1 = state_19010;
var statearr_19024_19043 = state_19010__$1;
(statearr_19024_19043[(2)] = inst_19002);

(statearr_19024_19043[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19011 === (8))){
var inst_18989 = (state_19010[(7)]);
var inst_18982 = (state_19010[(10)]);
var inst_18990 = (state_19010[(8)]);
var inst_18991 = (state_19010[(9)]);
var inst_18994 = (function (){var c = inst_18991;
var v = inst_18990;
var vec__18987 = inst_18989;
var cs = inst_18982;
return ((function (c,v,vec__18987,cs,inst_18989,inst_18982,inst_18990,inst_18991,state_val_19011,c__6459__auto___19034,out){
return (function (p1__18927_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__18927_SHARP_);
});
;})(c,v,vec__18987,cs,inst_18989,inst_18982,inst_18990,inst_18991,state_val_19011,c__6459__auto___19034,out))
})();
var inst_18995 = cljs.core.filterv.call(null,inst_18994,inst_18982);
var inst_18982__$1 = inst_18995;
var state_19010__$1 = (function (){var statearr_19025 = state_19010;
(statearr_19025[(10)] = inst_18982__$1);

return statearr_19025;
})();
var statearr_19026_19044 = state_19010__$1;
(statearr_19026_19044[(2)] = null);

(statearr_19026_19044[(1)] = (2));


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
});})(c__6459__auto___19034,out))
;
return ((function (switch__6444__auto__,c__6459__auto___19034,out){
return (function() {
var state_machine__6445__auto__ = null;
var state_machine__6445__auto____0 = (function (){
var statearr_19030 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19030[(0)] = state_machine__6445__auto__);

(statearr_19030[(1)] = (1));

return statearr_19030;
});
var state_machine__6445__auto____1 = (function (state_19010){
while(true){
var ret_value__6446__auto__ = (function (){try{while(true){
var result__6447__auto__ = switch__6444__auto__.call(null,state_19010);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6447__auto__;
}
break;
}
}catch (e19031){if((e19031 instanceof Object)){
var ex__6448__auto__ = e19031;
var statearr_19032_19045 = state_19010;
(statearr_19032_19045[(5)] = ex__6448__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19010);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19031;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19046 = state_19010;
state_19010 = G__19046;
continue;
} else {
return ret_value__6446__auto__;
}
break;
}
});
state_machine__6445__auto__ = function(state_19010){
switch(arguments.length){
case 0:
return state_machine__6445__auto____0.call(this);
case 1:
return state_machine__6445__auto____1.call(this,state_19010);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6445__auto____0;
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6445__auto____1;
return state_machine__6445__auto__;
})()
;})(switch__6444__auto__,c__6459__auto___19034,out))
})();
var state__6461__auto__ = (function (){var statearr_19033 = f__6460__auto__.call(null);
(statearr_19033[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6459__auto___19034);

return statearr_19033;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6461__auto__);
});})(c__6459__auto___19034,out))
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
var c__6459__auto___19139 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6459__auto___19139,out){
return (function (){
var f__6460__auto__ = (function (){var switch__6444__auto__ = ((function (c__6459__auto___19139,out){
return (function (state_19116){
var state_val_19117 = (state_19116[(1)]);
if((state_val_19117 === (7))){
var inst_19098 = (state_19116[(7)]);
var inst_19098__$1 = (state_19116[(2)]);
var inst_19099 = (inst_19098__$1 == null);
var inst_19100 = cljs.core.not.call(null,inst_19099);
var state_19116__$1 = (function (){var statearr_19118 = state_19116;
(statearr_19118[(7)] = inst_19098__$1);

return statearr_19118;
})();
if(inst_19100){
var statearr_19119_19140 = state_19116__$1;
(statearr_19119_19140[(1)] = (8));

} else {
var statearr_19120_19141 = state_19116__$1;
(statearr_19120_19141[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19117 === (1))){
var inst_19093 = (0);
var state_19116__$1 = (function (){var statearr_19121 = state_19116;
(statearr_19121[(8)] = inst_19093);

return statearr_19121;
})();
var statearr_19122_19142 = state_19116__$1;
(statearr_19122_19142[(2)] = null);

(statearr_19122_19142[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19117 === (4))){
var state_19116__$1 = state_19116;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19116__$1,(7),ch);
} else {
if((state_val_19117 === (6))){
var inst_19111 = (state_19116[(2)]);
var state_19116__$1 = state_19116;
var statearr_19123_19143 = state_19116__$1;
(statearr_19123_19143[(2)] = inst_19111);

(statearr_19123_19143[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19117 === (3))){
var inst_19113 = (state_19116[(2)]);
var inst_19114 = cljs.core.async.close_BANG_.call(null,out);
var state_19116__$1 = (function (){var statearr_19124 = state_19116;
(statearr_19124[(9)] = inst_19113);

return statearr_19124;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19116__$1,inst_19114);
} else {
if((state_val_19117 === (2))){
var inst_19093 = (state_19116[(8)]);
var inst_19095 = (inst_19093 < n);
var state_19116__$1 = state_19116;
if(cljs.core.truth_(inst_19095)){
var statearr_19125_19144 = state_19116__$1;
(statearr_19125_19144[(1)] = (4));

} else {
var statearr_19126_19145 = state_19116__$1;
(statearr_19126_19145[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19117 === (11))){
var inst_19093 = (state_19116[(8)]);
var inst_19103 = (state_19116[(2)]);
var inst_19104 = (inst_19093 + (1));
var inst_19093__$1 = inst_19104;
var state_19116__$1 = (function (){var statearr_19127 = state_19116;
(statearr_19127[(10)] = inst_19103);

(statearr_19127[(8)] = inst_19093__$1);

return statearr_19127;
})();
var statearr_19128_19146 = state_19116__$1;
(statearr_19128_19146[(2)] = null);

(statearr_19128_19146[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19117 === (9))){
var state_19116__$1 = state_19116;
var statearr_19129_19147 = state_19116__$1;
(statearr_19129_19147[(2)] = null);

(statearr_19129_19147[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19117 === (5))){
var state_19116__$1 = state_19116;
var statearr_19130_19148 = state_19116__$1;
(statearr_19130_19148[(2)] = null);

(statearr_19130_19148[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19117 === (10))){
var inst_19108 = (state_19116[(2)]);
var state_19116__$1 = state_19116;
var statearr_19131_19149 = state_19116__$1;
(statearr_19131_19149[(2)] = inst_19108);

(statearr_19131_19149[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19117 === (8))){
var inst_19098 = (state_19116[(7)]);
var state_19116__$1 = state_19116;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19116__$1,(11),out,inst_19098);
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
});})(c__6459__auto___19139,out))
;
return ((function (switch__6444__auto__,c__6459__auto___19139,out){
return (function() {
var state_machine__6445__auto__ = null;
var state_machine__6445__auto____0 = (function (){
var statearr_19135 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19135[(0)] = state_machine__6445__auto__);

(statearr_19135[(1)] = (1));

return statearr_19135;
});
var state_machine__6445__auto____1 = (function (state_19116){
while(true){
var ret_value__6446__auto__ = (function (){try{while(true){
var result__6447__auto__ = switch__6444__auto__.call(null,state_19116);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6447__auto__;
}
break;
}
}catch (e19136){if((e19136 instanceof Object)){
var ex__6448__auto__ = e19136;
var statearr_19137_19150 = state_19116;
(statearr_19137_19150[(5)] = ex__6448__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19116);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19136;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19151 = state_19116;
state_19116 = G__19151;
continue;
} else {
return ret_value__6446__auto__;
}
break;
}
});
state_machine__6445__auto__ = function(state_19116){
switch(arguments.length){
case 0:
return state_machine__6445__auto____0.call(this);
case 1:
return state_machine__6445__auto____1.call(this,state_19116);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6445__auto____0;
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6445__auto____1;
return state_machine__6445__auto__;
})()
;})(switch__6444__auto__,c__6459__auto___19139,out))
})();
var state__6461__auto__ = (function (){var statearr_19138 = f__6460__auto__.call(null);
(statearr_19138[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6459__auto___19139);

return statearr_19138;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6461__auto__);
});})(c__6459__auto___19139,out))
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
if(typeof cljs.core.async.t19159 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t19159 = (function (ch,f,map_LT_,meta19160){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta19160 = meta19160;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19159.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t19159.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t19159.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t19159.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t19162 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t19162 = (function (fn1,_,meta19160,map_LT_,f,ch,meta19163){
this.fn1 = fn1;
this._ = _;
this.meta19160 = meta19160;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta19163 = meta19163;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19162.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t19162.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t19162.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__19152_SHARP_){
return f1.call(null,(((p1__19152_SHARP_ == null))?null:self__.f.call(null,p1__19152_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t19162.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_19164){
var self__ = this;
var _19164__$1 = this;
return self__.meta19163;
});})(___$1))
;

cljs.core.async.t19162.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_19164,meta19163__$1){
var self__ = this;
var _19164__$1 = this;
return (new cljs.core.async.t19162(self__.fn1,self__._,self__.meta19160,self__.map_LT_,self__.f,self__.ch,meta19163__$1));
});})(___$1))
;

cljs.core.async.t19162.cljs$lang$type = true;

cljs.core.async.t19162.cljs$lang$ctorStr = "cljs.core.async/t19162";

cljs.core.async.t19162.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t19162");
});})(___$1))
;

cljs.core.async.__GT_t19162 = ((function (___$1){
return (function __GT_t19162(fn1__$1,___$2,meta19160__$1,map_LT___$1,f__$1,ch__$1,meta19163){
return (new cljs.core.async.t19162(fn1__$1,___$2,meta19160__$1,map_LT___$1,f__$1,ch__$1,meta19163));
});})(___$1))
;

}

return (new cljs.core.async.t19162(fn1,___$1,self__.meta19160,self__.map_LT_,self__.f,self__.ch,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),737,new cljs.core.Keyword(null,"column","column",2078222095),10,new cljs.core.Keyword(null,"line","line",212345235),731,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/chrism/dev/farn/resources/public/js/out/cljs/core/async.cljs"], null)));
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

cljs.core.async.t19159.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t19159.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t19159.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t19159.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19161){
var self__ = this;
var _19161__$1 = this;
return self__.meta19160;
});

cljs.core.async.t19159.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19161,meta19160__$1){
var self__ = this;
var _19161__$1 = this;
return (new cljs.core.async.t19159(self__.ch,self__.f,self__.map_LT_,meta19160__$1));
});

cljs.core.async.t19159.cljs$lang$type = true;

cljs.core.async.t19159.cljs$lang$ctorStr = "cljs.core.async/t19159";

cljs.core.async.t19159.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t19159");
});

cljs.core.async.__GT_t19159 = (function __GT_t19159(ch__$1,f__$1,map_LT___$1,meta19160){
return (new cljs.core.async.t19159(ch__$1,f__$1,map_LT___$1,meta19160));
});

}

return (new cljs.core.async.t19159(ch,f,map_LT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),743,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),722,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/chrism/dev/farn/resources/public/js/out/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){
if(typeof cljs.core.async.t19168 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t19168 = (function (ch,f,map_GT_,meta19169){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta19169 = meta19169;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19168.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t19168.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t19168.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t19168.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t19168.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t19168.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t19168.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19170){
var self__ = this;
var _19170__$1 = this;
return self__.meta19169;
});

cljs.core.async.t19168.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19170,meta19169__$1){
var self__ = this;
var _19170__$1 = this;
return (new cljs.core.async.t19168(self__.ch,self__.f,self__.map_GT_,meta19169__$1));
});

cljs.core.async.t19168.cljs$lang$type = true;

cljs.core.async.t19168.cljs$lang$ctorStr = "cljs.core.async/t19168";

cljs.core.async.t19168.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t19168");
});

cljs.core.async.__GT_t19168 = (function __GT_t19168(ch__$1,f__$1,map_GT___$1,meta19169){
return (new cljs.core.async.t19168(ch__$1,f__$1,map_GT___$1,meta19169));
});

}

return (new cljs.core.async.t19168(ch,f,map_GT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),34,new cljs.core.Keyword(null,"end-line","end-line",1837326455),757,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),748,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/chrism/dev/farn/resources/public/js/out/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){
if(typeof cljs.core.async.t19174 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t19174 = (function (ch,p,filter_GT_,meta19175){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta19175 = meta19175;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19174.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t19174.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t19174.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t19174.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t19174.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t19174.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t19174.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t19174.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19176){
var self__ = this;
var _19176__$1 = this;
return self__.meta19175;
});

cljs.core.async.t19174.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19176,meta19175__$1){
var self__ = this;
var _19176__$1 = this;
return (new cljs.core.async.t19174(self__.ch,self__.p,self__.filter_GT_,meta19175__$1));
});

cljs.core.async.t19174.cljs$lang$type = true;

cljs.core.async.t19174.cljs$lang$ctorStr = "cljs.core.async/t19174";

cljs.core.async.t19174.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t19174");
});

cljs.core.async.__GT_t19174 = (function __GT_t19174(ch__$1,p__$1,filter_GT___$1,meta19175){
return (new cljs.core.async.t19174(ch__$1,p__$1,filter_GT___$1,meta19175));
});

}

return (new cljs.core.async.t19174(ch,p,filter_GT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),48,new cljs.core.Keyword(null,"end-line","end-line",1837326455),774,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),762,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/chrism/dev/farn/resources/public/js/out/cljs/core/async.cljs"], null)));
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
var c__6459__auto___19259 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6459__auto___19259,out){
return (function (){
var f__6460__auto__ = (function (){var switch__6444__auto__ = ((function (c__6459__auto___19259,out){
return (function (state_19238){
var state_val_19239 = (state_19238[(1)]);
if((state_val_19239 === (7))){
var inst_19234 = (state_19238[(2)]);
var state_19238__$1 = state_19238;
var statearr_19240_19260 = state_19238__$1;
(statearr_19240_19260[(2)] = inst_19234);

(statearr_19240_19260[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19239 === (1))){
var state_19238__$1 = state_19238;
var statearr_19241_19261 = state_19238__$1;
(statearr_19241_19261[(2)] = null);

(statearr_19241_19261[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19239 === (4))){
var inst_19220 = (state_19238[(7)]);
var inst_19220__$1 = (state_19238[(2)]);
var inst_19221 = (inst_19220__$1 == null);
var state_19238__$1 = (function (){var statearr_19242 = state_19238;
(statearr_19242[(7)] = inst_19220__$1);

return statearr_19242;
})();
if(cljs.core.truth_(inst_19221)){
var statearr_19243_19262 = state_19238__$1;
(statearr_19243_19262[(1)] = (5));

} else {
var statearr_19244_19263 = state_19238__$1;
(statearr_19244_19263[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19239 === (6))){
var inst_19220 = (state_19238[(7)]);
var inst_19225 = p.call(null,inst_19220);
var state_19238__$1 = state_19238;
if(cljs.core.truth_(inst_19225)){
var statearr_19245_19264 = state_19238__$1;
(statearr_19245_19264[(1)] = (8));

} else {
var statearr_19246_19265 = state_19238__$1;
(statearr_19246_19265[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19239 === (3))){
var inst_19236 = (state_19238[(2)]);
var state_19238__$1 = state_19238;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19238__$1,inst_19236);
} else {
if((state_val_19239 === (2))){
var state_19238__$1 = state_19238;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19238__$1,(4),ch);
} else {
if((state_val_19239 === (11))){
var inst_19228 = (state_19238[(2)]);
var state_19238__$1 = state_19238;
var statearr_19247_19266 = state_19238__$1;
(statearr_19247_19266[(2)] = inst_19228);

(statearr_19247_19266[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19239 === (9))){
var state_19238__$1 = state_19238;
var statearr_19248_19267 = state_19238__$1;
(statearr_19248_19267[(2)] = null);

(statearr_19248_19267[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19239 === (5))){
var inst_19223 = cljs.core.async.close_BANG_.call(null,out);
var state_19238__$1 = state_19238;
var statearr_19249_19268 = state_19238__$1;
(statearr_19249_19268[(2)] = inst_19223);

(statearr_19249_19268[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19239 === (10))){
var inst_19231 = (state_19238[(2)]);
var state_19238__$1 = (function (){var statearr_19250 = state_19238;
(statearr_19250[(8)] = inst_19231);

return statearr_19250;
})();
var statearr_19251_19269 = state_19238__$1;
(statearr_19251_19269[(2)] = null);

(statearr_19251_19269[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19239 === (8))){
var inst_19220 = (state_19238[(7)]);
var state_19238__$1 = state_19238;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19238__$1,(11),out,inst_19220);
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
});})(c__6459__auto___19259,out))
;
return ((function (switch__6444__auto__,c__6459__auto___19259,out){
return (function() {
var state_machine__6445__auto__ = null;
var state_machine__6445__auto____0 = (function (){
var statearr_19255 = [null,null,null,null,null,null,null,null,null];
(statearr_19255[(0)] = state_machine__6445__auto__);

(statearr_19255[(1)] = (1));

return statearr_19255;
});
var state_machine__6445__auto____1 = (function (state_19238){
while(true){
var ret_value__6446__auto__ = (function (){try{while(true){
var result__6447__auto__ = switch__6444__auto__.call(null,state_19238);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6447__auto__;
}
break;
}
}catch (e19256){if((e19256 instanceof Object)){
var ex__6448__auto__ = e19256;
var statearr_19257_19270 = state_19238;
(statearr_19257_19270[(5)] = ex__6448__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19238);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19256;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19271 = state_19238;
state_19238 = G__19271;
continue;
} else {
return ret_value__6446__auto__;
}
break;
}
});
state_machine__6445__auto__ = function(state_19238){
switch(arguments.length){
case 0:
return state_machine__6445__auto____0.call(this);
case 1:
return state_machine__6445__auto____1.call(this,state_19238);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6445__auto____0;
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6445__auto____1;
return state_machine__6445__auto__;
})()
;})(switch__6444__auto__,c__6459__auto___19259,out))
})();
var state__6461__auto__ = (function (){var statearr_19258 = f__6460__auto__.call(null);
(statearr_19258[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6459__auto___19259);

return statearr_19258;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6461__auto__);
});})(c__6459__auto___19259,out))
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
return (function (state_19437){
var state_val_19438 = (state_19437[(1)]);
if((state_val_19438 === (7))){
var inst_19433 = (state_19437[(2)]);
var state_19437__$1 = state_19437;
var statearr_19439_19480 = state_19437__$1;
(statearr_19439_19480[(2)] = inst_19433);

(statearr_19439_19480[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19438 === (20))){
var inst_19403 = (state_19437[(7)]);
var inst_19414 = (state_19437[(2)]);
var inst_19415 = cljs.core.next.call(null,inst_19403);
var inst_19389 = inst_19415;
var inst_19390 = null;
var inst_19391 = (0);
var inst_19392 = (0);
var state_19437__$1 = (function (){var statearr_19440 = state_19437;
(statearr_19440[(8)] = inst_19392);

(statearr_19440[(9)] = inst_19391);

(statearr_19440[(10)] = inst_19389);

(statearr_19440[(11)] = inst_19390);

(statearr_19440[(12)] = inst_19414);

return statearr_19440;
})();
var statearr_19441_19481 = state_19437__$1;
(statearr_19441_19481[(2)] = null);

(statearr_19441_19481[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19438 === (1))){
var state_19437__$1 = state_19437;
var statearr_19442_19482 = state_19437__$1;
(statearr_19442_19482[(2)] = null);

(statearr_19442_19482[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19438 === (4))){
var inst_19378 = (state_19437[(13)]);
var inst_19378__$1 = (state_19437[(2)]);
var inst_19379 = (inst_19378__$1 == null);
var state_19437__$1 = (function (){var statearr_19443 = state_19437;
(statearr_19443[(13)] = inst_19378__$1);

return statearr_19443;
})();
if(cljs.core.truth_(inst_19379)){
var statearr_19444_19483 = state_19437__$1;
(statearr_19444_19483[(1)] = (5));

} else {
var statearr_19445_19484 = state_19437__$1;
(statearr_19445_19484[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19438 === (15))){
var state_19437__$1 = state_19437;
var statearr_19449_19485 = state_19437__$1;
(statearr_19449_19485[(2)] = null);

(statearr_19449_19485[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19438 === (21))){
var state_19437__$1 = state_19437;
var statearr_19450_19486 = state_19437__$1;
(statearr_19450_19486[(2)] = null);

(statearr_19450_19486[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19438 === (13))){
var inst_19392 = (state_19437[(8)]);
var inst_19391 = (state_19437[(9)]);
var inst_19389 = (state_19437[(10)]);
var inst_19390 = (state_19437[(11)]);
var inst_19399 = (state_19437[(2)]);
var inst_19400 = (inst_19392 + (1));
var tmp19446 = inst_19391;
var tmp19447 = inst_19389;
var tmp19448 = inst_19390;
var inst_19389__$1 = tmp19447;
var inst_19390__$1 = tmp19448;
var inst_19391__$1 = tmp19446;
var inst_19392__$1 = inst_19400;
var state_19437__$1 = (function (){var statearr_19451 = state_19437;
(statearr_19451[(8)] = inst_19392__$1);

(statearr_19451[(9)] = inst_19391__$1);

(statearr_19451[(10)] = inst_19389__$1);

(statearr_19451[(14)] = inst_19399);

(statearr_19451[(11)] = inst_19390__$1);

return statearr_19451;
})();
var statearr_19452_19487 = state_19437__$1;
(statearr_19452_19487[(2)] = null);

(statearr_19452_19487[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19438 === (22))){
var state_19437__$1 = state_19437;
var statearr_19453_19488 = state_19437__$1;
(statearr_19453_19488[(2)] = null);

(statearr_19453_19488[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19438 === (6))){
var inst_19378 = (state_19437[(13)]);
var inst_19387 = f.call(null,inst_19378);
var inst_19388 = cljs.core.seq.call(null,inst_19387);
var inst_19389 = inst_19388;
var inst_19390 = null;
var inst_19391 = (0);
var inst_19392 = (0);
var state_19437__$1 = (function (){var statearr_19454 = state_19437;
(statearr_19454[(8)] = inst_19392);

(statearr_19454[(9)] = inst_19391);

(statearr_19454[(10)] = inst_19389);

(statearr_19454[(11)] = inst_19390);

return statearr_19454;
})();
var statearr_19455_19489 = state_19437__$1;
(statearr_19455_19489[(2)] = null);

(statearr_19455_19489[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19438 === (17))){
var inst_19403 = (state_19437[(7)]);
var inst_19407 = cljs.core.chunk_first.call(null,inst_19403);
var inst_19408 = cljs.core.chunk_rest.call(null,inst_19403);
var inst_19409 = cljs.core.count.call(null,inst_19407);
var inst_19389 = inst_19408;
var inst_19390 = inst_19407;
var inst_19391 = inst_19409;
var inst_19392 = (0);
var state_19437__$1 = (function (){var statearr_19456 = state_19437;
(statearr_19456[(8)] = inst_19392);

(statearr_19456[(9)] = inst_19391);

(statearr_19456[(10)] = inst_19389);

(statearr_19456[(11)] = inst_19390);

return statearr_19456;
})();
var statearr_19457_19490 = state_19437__$1;
(statearr_19457_19490[(2)] = null);

(statearr_19457_19490[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19438 === (3))){
var inst_19435 = (state_19437[(2)]);
var state_19437__$1 = state_19437;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19437__$1,inst_19435);
} else {
if((state_val_19438 === (12))){
var inst_19423 = (state_19437[(2)]);
var state_19437__$1 = state_19437;
var statearr_19458_19491 = state_19437__$1;
(statearr_19458_19491[(2)] = inst_19423);

(statearr_19458_19491[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19438 === (2))){
var state_19437__$1 = state_19437;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19437__$1,(4),in$);
} else {
if((state_val_19438 === (23))){
var inst_19431 = (state_19437[(2)]);
var state_19437__$1 = state_19437;
var statearr_19459_19492 = state_19437__$1;
(statearr_19459_19492[(2)] = inst_19431);

(statearr_19459_19492[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19438 === (19))){
var inst_19418 = (state_19437[(2)]);
var state_19437__$1 = state_19437;
var statearr_19460_19493 = state_19437__$1;
(statearr_19460_19493[(2)] = inst_19418);

(statearr_19460_19493[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19438 === (11))){
var inst_19403 = (state_19437[(7)]);
var inst_19389 = (state_19437[(10)]);
var inst_19403__$1 = cljs.core.seq.call(null,inst_19389);
var state_19437__$1 = (function (){var statearr_19461 = state_19437;
(statearr_19461[(7)] = inst_19403__$1);

return statearr_19461;
})();
if(inst_19403__$1){
var statearr_19462_19494 = state_19437__$1;
(statearr_19462_19494[(1)] = (14));

} else {
var statearr_19463_19495 = state_19437__$1;
(statearr_19463_19495[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19438 === (9))){
var inst_19425 = (state_19437[(2)]);
var inst_19426 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_19437__$1 = (function (){var statearr_19464 = state_19437;
(statearr_19464[(15)] = inst_19425);

return statearr_19464;
})();
if(cljs.core.truth_(inst_19426)){
var statearr_19465_19496 = state_19437__$1;
(statearr_19465_19496[(1)] = (21));

} else {
var statearr_19466_19497 = state_19437__$1;
(statearr_19466_19497[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19438 === (5))){
var inst_19381 = cljs.core.async.close_BANG_.call(null,out);
var state_19437__$1 = state_19437;
var statearr_19467_19498 = state_19437__$1;
(statearr_19467_19498[(2)] = inst_19381);

(statearr_19467_19498[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19438 === (14))){
var inst_19403 = (state_19437[(7)]);
var inst_19405 = cljs.core.chunked_seq_QMARK_.call(null,inst_19403);
var state_19437__$1 = state_19437;
if(inst_19405){
var statearr_19468_19499 = state_19437__$1;
(statearr_19468_19499[(1)] = (17));

} else {
var statearr_19469_19500 = state_19437__$1;
(statearr_19469_19500[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19438 === (16))){
var inst_19421 = (state_19437[(2)]);
var state_19437__$1 = state_19437;
var statearr_19470_19501 = state_19437__$1;
(statearr_19470_19501[(2)] = inst_19421);

(statearr_19470_19501[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19438 === (10))){
var inst_19392 = (state_19437[(8)]);
var inst_19390 = (state_19437[(11)]);
var inst_19397 = cljs.core._nth.call(null,inst_19390,inst_19392);
var state_19437__$1 = state_19437;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19437__$1,(13),out,inst_19397);
} else {
if((state_val_19438 === (18))){
var inst_19403 = (state_19437[(7)]);
var inst_19412 = cljs.core.first.call(null,inst_19403);
var state_19437__$1 = state_19437;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19437__$1,(20),out,inst_19412);
} else {
if((state_val_19438 === (8))){
var inst_19392 = (state_19437[(8)]);
var inst_19391 = (state_19437[(9)]);
var inst_19394 = (inst_19392 < inst_19391);
var inst_19395 = inst_19394;
var state_19437__$1 = state_19437;
if(cljs.core.truth_(inst_19395)){
var statearr_19471_19502 = state_19437__$1;
(statearr_19471_19502[(1)] = (10));

} else {
var statearr_19472_19503 = state_19437__$1;
(statearr_19472_19503[(1)] = (11));

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
var statearr_19476 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19476[(0)] = state_machine__6445__auto__);

(statearr_19476[(1)] = (1));

return statearr_19476;
});
var state_machine__6445__auto____1 = (function (state_19437){
while(true){
var ret_value__6446__auto__ = (function (){try{while(true){
var result__6447__auto__ = switch__6444__auto__.call(null,state_19437);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6447__auto__;
}
break;
}
}catch (e19477){if((e19477 instanceof Object)){
var ex__6448__auto__ = e19477;
var statearr_19478_19504 = state_19437;
(statearr_19478_19504[(5)] = ex__6448__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19437);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19477;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19505 = state_19437;
state_19437 = G__19505;
continue;
} else {
return ret_value__6446__auto__;
}
break;
}
});
state_machine__6445__auto__ = function(state_19437){
switch(arguments.length){
case 0:
return state_machine__6445__auto____0.call(this);
case 1:
return state_machine__6445__auto____1.call(this,state_19437);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6445__auto____0;
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6445__auto____1;
return state_machine__6445__auto__;
})()
;})(switch__6444__auto__,c__6459__auto__))
})();
var state__6461__auto__ = (function (){var statearr_19479 = f__6460__auto__.call(null);
(statearr_19479[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6459__auto__);

return statearr_19479;
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
var c__6459__auto___19602 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6459__auto___19602,out){
return (function (){
var f__6460__auto__ = (function (){var switch__6444__auto__ = ((function (c__6459__auto___19602,out){
return (function (state_19577){
var state_val_19578 = (state_19577[(1)]);
if((state_val_19578 === (7))){
var inst_19572 = (state_19577[(2)]);
var state_19577__$1 = state_19577;
var statearr_19579_19603 = state_19577__$1;
(statearr_19579_19603[(2)] = inst_19572);

(statearr_19579_19603[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19578 === (1))){
var inst_19554 = null;
var state_19577__$1 = (function (){var statearr_19580 = state_19577;
(statearr_19580[(7)] = inst_19554);

return statearr_19580;
})();
var statearr_19581_19604 = state_19577__$1;
(statearr_19581_19604[(2)] = null);

(statearr_19581_19604[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19578 === (4))){
var inst_19557 = (state_19577[(8)]);
var inst_19557__$1 = (state_19577[(2)]);
var inst_19558 = (inst_19557__$1 == null);
var inst_19559 = cljs.core.not.call(null,inst_19558);
var state_19577__$1 = (function (){var statearr_19582 = state_19577;
(statearr_19582[(8)] = inst_19557__$1);

return statearr_19582;
})();
if(inst_19559){
var statearr_19583_19605 = state_19577__$1;
(statearr_19583_19605[(1)] = (5));

} else {
var statearr_19584_19606 = state_19577__$1;
(statearr_19584_19606[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19578 === (6))){
var state_19577__$1 = state_19577;
var statearr_19585_19607 = state_19577__$1;
(statearr_19585_19607[(2)] = null);

(statearr_19585_19607[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19578 === (3))){
var inst_19574 = (state_19577[(2)]);
var inst_19575 = cljs.core.async.close_BANG_.call(null,out);
var state_19577__$1 = (function (){var statearr_19586 = state_19577;
(statearr_19586[(9)] = inst_19574);

return statearr_19586;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19577__$1,inst_19575);
} else {
if((state_val_19578 === (2))){
var state_19577__$1 = state_19577;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19577__$1,(4),ch);
} else {
if((state_val_19578 === (11))){
var inst_19557 = (state_19577[(8)]);
var inst_19566 = (state_19577[(2)]);
var inst_19554 = inst_19557;
var state_19577__$1 = (function (){var statearr_19587 = state_19577;
(statearr_19587[(10)] = inst_19566);

(statearr_19587[(7)] = inst_19554);

return statearr_19587;
})();
var statearr_19588_19608 = state_19577__$1;
(statearr_19588_19608[(2)] = null);

(statearr_19588_19608[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19578 === (9))){
var inst_19557 = (state_19577[(8)]);
var state_19577__$1 = state_19577;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19577__$1,(11),out,inst_19557);
} else {
if((state_val_19578 === (5))){
var inst_19554 = (state_19577[(7)]);
var inst_19557 = (state_19577[(8)]);
var inst_19561 = cljs.core._EQ_.call(null,inst_19557,inst_19554);
var state_19577__$1 = state_19577;
if(inst_19561){
var statearr_19590_19609 = state_19577__$1;
(statearr_19590_19609[(1)] = (8));

} else {
var statearr_19591_19610 = state_19577__$1;
(statearr_19591_19610[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19578 === (10))){
var inst_19569 = (state_19577[(2)]);
var state_19577__$1 = state_19577;
var statearr_19592_19611 = state_19577__$1;
(statearr_19592_19611[(2)] = inst_19569);

(statearr_19592_19611[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19578 === (8))){
var inst_19554 = (state_19577[(7)]);
var tmp19589 = inst_19554;
var inst_19554__$1 = tmp19589;
var state_19577__$1 = (function (){var statearr_19593 = state_19577;
(statearr_19593[(7)] = inst_19554__$1);

return statearr_19593;
})();
var statearr_19594_19612 = state_19577__$1;
(statearr_19594_19612[(2)] = null);

(statearr_19594_19612[(1)] = (2));


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
});})(c__6459__auto___19602,out))
;
return ((function (switch__6444__auto__,c__6459__auto___19602,out){
return (function() {
var state_machine__6445__auto__ = null;
var state_machine__6445__auto____0 = (function (){
var statearr_19598 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19598[(0)] = state_machine__6445__auto__);

(statearr_19598[(1)] = (1));

return statearr_19598;
});
var state_machine__6445__auto____1 = (function (state_19577){
while(true){
var ret_value__6446__auto__ = (function (){try{while(true){
var result__6447__auto__ = switch__6444__auto__.call(null,state_19577);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6447__auto__;
}
break;
}
}catch (e19599){if((e19599 instanceof Object)){
var ex__6448__auto__ = e19599;
var statearr_19600_19613 = state_19577;
(statearr_19600_19613[(5)] = ex__6448__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19577);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19599;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19614 = state_19577;
state_19577 = G__19614;
continue;
} else {
return ret_value__6446__auto__;
}
break;
}
});
state_machine__6445__auto__ = function(state_19577){
switch(arguments.length){
case 0:
return state_machine__6445__auto____0.call(this);
case 1:
return state_machine__6445__auto____1.call(this,state_19577);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6445__auto____0;
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6445__auto____1;
return state_machine__6445__auto__;
})()
;})(switch__6444__auto__,c__6459__auto___19602,out))
})();
var state__6461__auto__ = (function (){var statearr_19601 = f__6460__auto__.call(null);
(statearr_19601[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6459__auto___19602);

return statearr_19601;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6461__auto__);
});})(c__6459__auto___19602,out))
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
var c__6459__auto___19749 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6459__auto___19749,out){
return (function (){
var f__6460__auto__ = (function (){var switch__6444__auto__ = ((function (c__6459__auto___19749,out){
return (function (state_19719){
var state_val_19720 = (state_19719[(1)]);
if((state_val_19720 === (7))){
var inst_19715 = (state_19719[(2)]);
var state_19719__$1 = state_19719;
var statearr_19721_19750 = state_19719__$1;
(statearr_19721_19750[(2)] = inst_19715);

(statearr_19721_19750[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19720 === (1))){
var inst_19682 = (new Array(n));
var inst_19683 = inst_19682;
var inst_19684 = (0);
var state_19719__$1 = (function (){var statearr_19722 = state_19719;
(statearr_19722[(7)] = inst_19684);

(statearr_19722[(8)] = inst_19683);

return statearr_19722;
})();
var statearr_19723_19751 = state_19719__$1;
(statearr_19723_19751[(2)] = null);

(statearr_19723_19751[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19720 === (4))){
var inst_19687 = (state_19719[(9)]);
var inst_19687__$1 = (state_19719[(2)]);
var inst_19688 = (inst_19687__$1 == null);
var inst_19689 = cljs.core.not.call(null,inst_19688);
var state_19719__$1 = (function (){var statearr_19724 = state_19719;
(statearr_19724[(9)] = inst_19687__$1);

return statearr_19724;
})();
if(inst_19689){
var statearr_19725_19752 = state_19719__$1;
(statearr_19725_19752[(1)] = (5));

} else {
var statearr_19726_19753 = state_19719__$1;
(statearr_19726_19753[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19720 === (15))){
var inst_19709 = (state_19719[(2)]);
var state_19719__$1 = state_19719;
var statearr_19727_19754 = state_19719__$1;
(statearr_19727_19754[(2)] = inst_19709);

(statearr_19727_19754[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19720 === (13))){
var state_19719__$1 = state_19719;
var statearr_19728_19755 = state_19719__$1;
(statearr_19728_19755[(2)] = null);

(statearr_19728_19755[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19720 === (6))){
var inst_19684 = (state_19719[(7)]);
var inst_19705 = (inst_19684 > (0));
var state_19719__$1 = state_19719;
if(cljs.core.truth_(inst_19705)){
var statearr_19729_19756 = state_19719__$1;
(statearr_19729_19756[(1)] = (12));

} else {
var statearr_19730_19757 = state_19719__$1;
(statearr_19730_19757[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19720 === (3))){
var inst_19717 = (state_19719[(2)]);
var state_19719__$1 = state_19719;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19719__$1,inst_19717);
} else {
if((state_val_19720 === (12))){
var inst_19683 = (state_19719[(8)]);
var inst_19707 = cljs.core.vec.call(null,inst_19683);
var state_19719__$1 = state_19719;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19719__$1,(15),out,inst_19707);
} else {
if((state_val_19720 === (2))){
var state_19719__$1 = state_19719;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19719__$1,(4),ch);
} else {
if((state_val_19720 === (11))){
var inst_19699 = (state_19719[(2)]);
var inst_19700 = (new Array(n));
var inst_19683 = inst_19700;
var inst_19684 = (0);
var state_19719__$1 = (function (){var statearr_19731 = state_19719;
(statearr_19731[(7)] = inst_19684);

(statearr_19731[(10)] = inst_19699);

(statearr_19731[(8)] = inst_19683);

return statearr_19731;
})();
var statearr_19732_19758 = state_19719__$1;
(statearr_19732_19758[(2)] = null);

(statearr_19732_19758[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19720 === (9))){
var inst_19683 = (state_19719[(8)]);
var inst_19697 = cljs.core.vec.call(null,inst_19683);
var state_19719__$1 = state_19719;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19719__$1,(11),out,inst_19697);
} else {
if((state_val_19720 === (5))){
var inst_19692 = (state_19719[(11)]);
var inst_19684 = (state_19719[(7)]);
var inst_19687 = (state_19719[(9)]);
var inst_19683 = (state_19719[(8)]);
var inst_19691 = (inst_19683[inst_19684] = inst_19687);
var inst_19692__$1 = (inst_19684 + (1));
var inst_19693 = (inst_19692__$1 < n);
var state_19719__$1 = (function (){var statearr_19733 = state_19719;
(statearr_19733[(11)] = inst_19692__$1);

(statearr_19733[(12)] = inst_19691);

return statearr_19733;
})();
if(cljs.core.truth_(inst_19693)){
var statearr_19734_19759 = state_19719__$1;
(statearr_19734_19759[(1)] = (8));

} else {
var statearr_19735_19760 = state_19719__$1;
(statearr_19735_19760[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19720 === (14))){
var inst_19712 = (state_19719[(2)]);
var inst_19713 = cljs.core.async.close_BANG_.call(null,out);
var state_19719__$1 = (function (){var statearr_19737 = state_19719;
(statearr_19737[(13)] = inst_19712);

return statearr_19737;
})();
var statearr_19738_19761 = state_19719__$1;
(statearr_19738_19761[(2)] = inst_19713);

(statearr_19738_19761[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19720 === (10))){
var inst_19703 = (state_19719[(2)]);
var state_19719__$1 = state_19719;
var statearr_19739_19762 = state_19719__$1;
(statearr_19739_19762[(2)] = inst_19703);

(statearr_19739_19762[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19720 === (8))){
var inst_19692 = (state_19719[(11)]);
var inst_19683 = (state_19719[(8)]);
var tmp19736 = inst_19683;
var inst_19683__$1 = tmp19736;
var inst_19684 = inst_19692;
var state_19719__$1 = (function (){var statearr_19740 = state_19719;
(statearr_19740[(7)] = inst_19684);

(statearr_19740[(8)] = inst_19683__$1);

return statearr_19740;
})();
var statearr_19741_19763 = state_19719__$1;
(statearr_19741_19763[(2)] = null);

(statearr_19741_19763[(1)] = (2));


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
});})(c__6459__auto___19749,out))
;
return ((function (switch__6444__auto__,c__6459__auto___19749,out){
return (function() {
var state_machine__6445__auto__ = null;
var state_machine__6445__auto____0 = (function (){
var statearr_19745 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19745[(0)] = state_machine__6445__auto__);

(statearr_19745[(1)] = (1));

return statearr_19745;
});
var state_machine__6445__auto____1 = (function (state_19719){
while(true){
var ret_value__6446__auto__ = (function (){try{while(true){
var result__6447__auto__ = switch__6444__auto__.call(null,state_19719);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6447__auto__;
}
break;
}
}catch (e19746){if((e19746 instanceof Object)){
var ex__6448__auto__ = e19746;
var statearr_19747_19764 = state_19719;
(statearr_19747_19764[(5)] = ex__6448__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19719);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19746;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19765 = state_19719;
state_19719 = G__19765;
continue;
} else {
return ret_value__6446__auto__;
}
break;
}
});
state_machine__6445__auto__ = function(state_19719){
switch(arguments.length){
case 0:
return state_machine__6445__auto____0.call(this);
case 1:
return state_machine__6445__auto____1.call(this,state_19719);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6445__auto____0;
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6445__auto____1;
return state_machine__6445__auto__;
})()
;})(switch__6444__auto__,c__6459__auto___19749,out))
})();
var state__6461__auto__ = (function (){var statearr_19748 = f__6460__auto__.call(null);
(statearr_19748[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6459__auto___19749);

return statearr_19748;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6461__auto__);
});})(c__6459__auto___19749,out))
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
var c__6459__auto___19908 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6459__auto___19908,out){
return (function (){
var f__6460__auto__ = (function (){var switch__6444__auto__ = ((function (c__6459__auto___19908,out){
return (function (state_19878){
var state_val_19879 = (state_19878[(1)]);
if((state_val_19879 === (7))){
var inst_19874 = (state_19878[(2)]);
var state_19878__$1 = state_19878;
var statearr_19880_19909 = state_19878__$1;
(statearr_19880_19909[(2)] = inst_19874);

(statearr_19880_19909[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19879 === (1))){
var inst_19837 = [];
var inst_19838 = inst_19837;
var inst_19839 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_19878__$1 = (function (){var statearr_19881 = state_19878;
(statearr_19881[(7)] = inst_19838);

(statearr_19881[(8)] = inst_19839);

return statearr_19881;
})();
var statearr_19882_19910 = state_19878__$1;
(statearr_19882_19910[(2)] = null);

(statearr_19882_19910[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19879 === (4))){
var inst_19842 = (state_19878[(9)]);
var inst_19842__$1 = (state_19878[(2)]);
var inst_19843 = (inst_19842__$1 == null);
var inst_19844 = cljs.core.not.call(null,inst_19843);
var state_19878__$1 = (function (){var statearr_19883 = state_19878;
(statearr_19883[(9)] = inst_19842__$1);

return statearr_19883;
})();
if(inst_19844){
var statearr_19884_19911 = state_19878__$1;
(statearr_19884_19911[(1)] = (5));

} else {
var statearr_19885_19912 = state_19878__$1;
(statearr_19885_19912[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19879 === (15))){
var inst_19868 = (state_19878[(2)]);
var state_19878__$1 = state_19878;
var statearr_19886_19913 = state_19878__$1;
(statearr_19886_19913[(2)] = inst_19868);

(statearr_19886_19913[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19879 === (13))){
var state_19878__$1 = state_19878;
var statearr_19887_19914 = state_19878__$1;
(statearr_19887_19914[(2)] = null);

(statearr_19887_19914[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19879 === (6))){
var inst_19838 = (state_19878[(7)]);
var inst_19863 = inst_19838.length;
var inst_19864 = (inst_19863 > (0));
var state_19878__$1 = state_19878;
if(cljs.core.truth_(inst_19864)){
var statearr_19888_19915 = state_19878__$1;
(statearr_19888_19915[(1)] = (12));

} else {
var statearr_19889_19916 = state_19878__$1;
(statearr_19889_19916[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19879 === (3))){
var inst_19876 = (state_19878[(2)]);
var state_19878__$1 = state_19878;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19878__$1,inst_19876);
} else {
if((state_val_19879 === (12))){
var inst_19838 = (state_19878[(7)]);
var inst_19866 = cljs.core.vec.call(null,inst_19838);
var state_19878__$1 = state_19878;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19878__$1,(15),out,inst_19866);
} else {
if((state_val_19879 === (2))){
var state_19878__$1 = state_19878;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19878__$1,(4),ch);
} else {
if((state_val_19879 === (11))){
var inst_19842 = (state_19878[(9)]);
var inst_19846 = (state_19878[(10)]);
var inst_19856 = (state_19878[(2)]);
var inst_19857 = [];
var inst_19858 = inst_19857.push(inst_19842);
var inst_19838 = inst_19857;
var inst_19839 = inst_19846;
var state_19878__$1 = (function (){var statearr_19890 = state_19878;
(statearr_19890[(7)] = inst_19838);

(statearr_19890[(11)] = inst_19856);

(statearr_19890[(12)] = inst_19858);

(statearr_19890[(8)] = inst_19839);

return statearr_19890;
})();
var statearr_19891_19917 = state_19878__$1;
(statearr_19891_19917[(2)] = null);

(statearr_19891_19917[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19879 === (9))){
var inst_19838 = (state_19878[(7)]);
var inst_19854 = cljs.core.vec.call(null,inst_19838);
var state_19878__$1 = state_19878;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19878__$1,(11),out,inst_19854);
} else {
if((state_val_19879 === (5))){
var inst_19842 = (state_19878[(9)]);
var inst_19846 = (state_19878[(10)]);
var inst_19839 = (state_19878[(8)]);
var inst_19846__$1 = f.call(null,inst_19842);
var inst_19847 = cljs.core._EQ_.call(null,inst_19846__$1,inst_19839);
var inst_19848 = cljs.core.keyword_identical_QMARK_.call(null,inst_19839,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_19849 = (inst_19847) || (inst_19848);
var state_19878__$1 = (function (){var statearr_19892 = state_19878;
(statearr_19892[(10)] = inst_19846__$1);

return statearr_19892;
})();
if(cljs.core.truth_(inst_19849)){
var statearr_19893_19918 = state_19878__$1;
(statearr_19893_19918[(1)] = (8));

} else {
var statearr_19894_19919 = state_19878__$1;
(statearr_19894_19919[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19879 === (14))){
var inst_19871 = (state_19878[(2)]);
var inst_19872 = cljs.core.async.close_BANG_.call(null,out);
var state_19878__$1 = (function (){var statearr_19896 = state_19878;
(statearr_19896[(13)] = inst_19871);

return statearr_19896;
})();
var statearr_19897_19920 = state_19878__$1;
(statearr_19897_19920[(2)] = inst_19872);

(statearr_19897_19920[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19879 === (10))){
var inst_19861 = (state_19878[(2)]);
var state_19878__$1 = state_19878;
var statearr_19898_19921 = state_19878__$1;
(statearr_19898_19921[(2)] = inst_19861);

(statearr_19898_19921[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19879 === (8))){
var inst_19842 = (state_19878[(9)]);
var inst_19846 = (state_19878[(10)]);
var inst_19838 = (state_19878[(7)]);
var inst_19851 = inst_19838.push(inst_19842);
var tmp19895 = inst_19838;
var inst_19838__$1 = tmp19895;
var inst_19839 = inst_19846;
var state_19878__$1 = (function (){var statearr_19899 = state_19878;
(statearr_19899[(7)] = inst_19838__$1);

(statearr_19899[(8)] = inst_19839);

(statearr_19899[(14)] = inst_19851);

return statearr_19899;
})();
var statearr_19900_19922 = state_19878__$1;
(statearr_19900_19922[(2)] = null);

(statearr_19900_19922[(1)] = (2));


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
});})(c__6459__auto___19908,out))
;
return ((function (switch__6444__auto__,c__6459__auto___19908,out){
return (function() {
var state_machine__6445__auto__ = null;
var state_machine__6445__auto____0 = (function (){
var statearr_19904 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19904[(0)] = state_machine__6445__auto__);

(statearr_19904[(1)] = (1));

return statearr_19904;
});
var state_machine__6445__auto____1 = (function (state_19878){
while(true){
var ret_value__6446__auto__ = (function (){try{while(true){
var result__6447__auto__ = switch__6444__auto__.call(null,state_19878);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6447__auto__;
}
break;
}
}catch (e19905){if((e19905 instanceof Object)){
var ex__6448__auto__ = e19905;
var statearr_19906_19923 = state_19878;
(statearr_19906_19923[(5)] = ex__6448__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19878);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19905;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19924 = state_19878;
state_19878 = G__19924;
continue;
} else {
return ret_value__6446__auto__;
}
break;
}
});
state_machine__6445__auto__ = function(state_19878){
switch(arguments.length){
case 0:
return state_machine__6445__auto____0.call(this);
case 1:
return state_machine__6445__auto____1.call(this,state_19878);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6445__auto____0;
state_machine__6445__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6445__auto____1;
return state_machine__6445__auto__;
})()
;})(switch__6444__auto__,c__6459__auto___19908,out))
})();
var state__6461__auto__ = (function (){var statearr_19907 = f__6460__auto__.call(null);
(statearr_19907[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6459__auto___19908);

return statearr_19907;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6461__auto__);
});})(c__6459__auto___19908,out))
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