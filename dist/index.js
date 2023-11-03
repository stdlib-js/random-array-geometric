"use strict";var y=function(r,t){return function(){return t||r((t={exports:{}}).exports,t),t.exports}};var b=y(function(ue,C){C.exports={dtype:"float64"}});var G=y(function(se,N){
var H=require('@stdlib/array-typed-real-float-dtypes/dist'),J=require('@stdlib/assert-is-plain-object/dist'),K=require('@stdlib/assert-has-own-property/dist'),L=require('@stdlib/error-tools-fmtprodmsg/dist'),h=H();h.push("generic");function M(r,t){return J(t)?K(t,"dtype")&&(r.dtype=t.dtype,h.indexOf(r.dtype)<0)?new TypeError(L('1e94S',"dtype",h.join('", "'),r.dtype)):null:new TypeError(L('1e92V',t));}N.exports=M
});var w=y(function(oe,j){
var O=require('@stdlib/assert-is-nonnegative-integer/dist').isPrimitive,Q=require('@stdlib/assert-is-number/dist').isPrimitive,f=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),l=require('@stdlib/utils-define-nonenumerable-read-only-accessor/dist'),S=require('@stdlib/utils-define-nonenumerable-read-write-accessor/dist'),U=require('@stdlib/utils-constant-function/dist'),X=require('@stdlib/utils-noop/dist'),q=require('@stdlib/random-base-geometric/dist'),x=require('@stdlib/array-typed-real-float-ctors/dist'),E=require('@stdlib/array-base-filled-by/dist'),Z=require('@stdlib/strided-base-nullary/dist'),_=require('@stdlib/strided-base-unary/dist'),T=require('@stdlib/error-tools-fmtprodmsg/dist'),$=b(),p=G();function ee(){var r,t,g,e,a,o;if(g={dtype:$.dtype},t=arguments.length,t===0)a=q,e=R;else if(t===1)if(r=arguments[0],a=q.factory(r),Q(r))e=P;else{if(o=p(g,r),o)throw o;e=R}else if(t===2){if(r=arguments[1],a=q.factory(arguments[0],r),o=p(g,r),o)throw o;e=P}return r&&r.prng?(f(e,"seed",null),f(e,"seedLength",null),S(e,"state",U(null),X),f(e,"stateLength",null),f(e,"byteLength",null)):(l(e,"seed",z),l(e,"seedLength",B),S(e,"state",W,Y),l(e,"stateLength",D),l(e,"byteLength",I)),f(e,"PRNG",a.PRNG),e;function P(n,c){var d,v,i,u,s;if(!O(n))throw new TypeError(T('1e92d',n));if(s={},arguments.length>1&&(i=p(s,c),i))throw i;return u=s.dtype||g.dtype,u==="generic"?E(n,a):(d=x(u),v=new d(n),Z([v],[n],[1],a),v)}function R(n,c,d){var v,i,u,s,m;if(!O(n))throw new TypeError(T('1e92d',n));if(m={},arguments.length>2&&(u=p(m,d),u))throw u;if(s=m.dtype||g.dtype,s==="generic")return E(n,k);return v=x(s),i=new v(n),_([[c],i],[n],[0,1],a),i;function k(){return a(c)}}function z(){return e.PRNG.seed}function B(){return e.PRNG.seedLength}function D(){return e.PRNG.stateLength}function I(){return e.PRNG.byteLength}function W(){return e.PRNG.state}function Y(n){e.PRNG.state=n}}j.exports=ee
});var V=y(function(ve,F){
var re=w(),te=re();F.exports=te
});var ne=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),A=V(),ae=w();ne(A,"factory",ae);module.exports=A;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
