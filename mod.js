// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=Object.defineProperty;function t(r){return"number"==typeof r}function n(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function i(r,e,t){var i=!1,o=e-r.length;return o<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=t?r+n(o):n(o)+r,i&&(r="-"+r)),r}var o=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function u(r){var e,n,u;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,u=parseInt(n,10),!isFinite(u)){if(!t(n))throw new Error("invalid integer. Value: "+n);u=0}return u<0&&("u"===r.specifier||10!==e)&&(u=4294967295+u+1),u<0?(n=(-u).toString(e),r.precision&&(n=i(n,r.precision,r.padRight)),n="-"+n):(n=u.toString(e),u||r.precision?r.precision&&(n=i(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===a.call(r.specifier)?a.call(n):o.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function f(r){return"string"==typeof r}var l=Math.abs,c=String.prototype.toLowerCase,s=String.prototype.toUpperCase,y=String.prototype.replace,p=/e\+(\d)$/,h=/e-(\d)$/,g=/^(\d+)$/,m=/^(\d+)e/,w=/\.0$/,b=/\.0*e/,v=/(\..*[^0])0*e/;function d(r){var e,n,i=parseFloat(r.arg);if(!isFinite(i)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+n);i=r.arg}switch(r.specifier){case"e":case"E":n=i.toExponential(r.precision);break;case"f":case"F":n=i.toFixed(r.precision);break;case"g":case"G":l(i)<1e-4?((e=r.precision)>0&&(e-=1),n=i.toExponential(e)):n=i.toPrecision(r.precision),r.alternate||(n=y.call(n,v,"$1e"),n=y.call(n,b,"e"),n=y.call(n,w,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=y.call(n,p,"e+0$1"),n=y.call(n,h,"e-0$1"),r.alternate&&(n=y.call(n,g,"$1."),n=y.call(n,m,"$1.e")),i>=0&&r.sign&&(n=r.sign+n),n=r.specifier===s.call(r.specifier)?s.call(n):c.call(n)}function E(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function A(r,e,t){var n=e-r.length;return n<0?r:r=t?r+E(n):E(n)+r}var _=String.fromCharCode,T=isNaN,x=Array.isArray;function j(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function L(r){var e,t,n,o,a,l,c,s,y;if(!x(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(l="",c=1,s=0;s<r.length;s++)if(f(n=r[s]))l+=n;else{if(e=void 0!==n.precision,!(n=j(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+n+"`.");for(n.mapping&&(c=n.mapping),t=n.flags,y=0;y<t.length;y++)switch(o=t.charAt(y)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[c],10),c+=1,T(n.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[c],10),c+=1,T(n.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[c],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=u(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!T(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=T(a)?String(n.arg):_(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=d(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=A(n.arg,n.width,n.padRight)),l+=n.arg||"",c+=1}return l}var V=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function k(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function R(r){var e,t,n,i;for(t=[],i=0,n=V.exec(r);n;)(e=r.slice(i,V.lastIndex-n[0].length)).length&&t.push(e),t.push(k(n)),i=V.lastIndex,n=V.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function S(r){return"string"==typeof r}function B(r){var e,t,n;if(!S(r))throw new TypeError(B("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=R(r),(t=new Array(arguments.length))[0]=e,n=1;n<t.length;n++)t[n]=arguments[n];return L.apply(null,t)}var I,O=Object.prototype,F=O.toString,P=O.__defineGetter__,C=O.__defineSetter__,N=O.__lookupGetter__,M=O.__lookupSetter__;I=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,t){var n,i,o,a;if("object"!=typeof r||null===r||"[object Array]"===F.call(r))throw new TypeError(B("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===F.call(t))throw new TypeError(B("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(N.call(r,e)||M.call(r,e)?(n=r.__proto__,r.__proto__=O,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&P&&P.call(r,e,t.get),a&&C&&C.call(r,e,t.set),r};var U=I;function Y(r,e,t,n){U(r,e,{configurable:!1,enumerable:!1,get:t,set:n})}function G(r,e,t){U(r,e,{configurable:!1,enumerable:!1,get:t})}function W(r,e,t){U(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}var $=/./;function Z(r){return"boolean"==typeof r}var X="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function J(){return X&&"symbol"==typeof Symbol.toStringTag}var z=Object.prototype.toString;var q=Object.prototype.hasOwnProperty;function D(r,e){return null!=r&&q.call(r,e)}var H="function"==typeof Symbol?Symbol:void 0,K="function"==typeof H?H.toStringTag:"";var Q=J()?function(r){var e,t,n;if(null==r)return z.call(r);t=r[K],e=D(r,K);try{r[K]=void 0}catch(e){return z.call(r)}return n=z.call(r),e?r[K]=t:delete r[K],n}:function(r){return z.call(r)},rr=Boolean,er=Boolean.prototype.toString;var tr=J();function nr(r){return"object"==typeof r&&(r instanceof rr||(tr?function(r){try{return er.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===Q(r)))}function ir(r){return Z(r)||nr(r)}function or(){return new Function("return this;")()}W(ir,"isPrimitive",Z),W(ir,"isObject",nr);var ar="object"==typeof self?self:null,ur="object"==typeof window?window:null,fr="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},lr="object"==typeof fr?fr:null,cr="object"==typeof globalThis?globalThis:null;var sr=function(r){if(arguments.length){if(!Z(r))throw new TypeError(B("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return or()}if(cr)return cr;if(ar)return ar;if(ur)return ur;if(lr)return lr;throw new Error("unexpected error. Unable to resolve global object.")}(),yr=sr.document&&sr.document.childNodes,pr=Int8Array;function hr(){return/^\s*function\s*([^(]*)/i}var gr=/^\s*function\s*([^(]*)/i;W(hr,"REGEXP",gr);var mr=Array.isArray?Array.isArray:function(r){return"[object Array]"===Q(r)};function wr(r){return null!==r&&"object"==typeof r}function br(r){return wr(r)&&(r._isBuffer||r.constructor&&"function"==typeof r.constructor.isBuffer&&r.constructor.isBuffer(r))}function vr(r){var e,t,n;if(("Object"===(t=Q(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=gr.exec(n.toString()))return e[1]}return br(r)?"Buffer":t}W(wr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(B("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!mr(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(wr));var dr="function"==typeof $||"object"==typeof pr||"function"==typeof yr?function(r){return vr(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?vr(r).toLowerCase():e};function Er(r){return"function"===dr(r)}var Ar=Object;function _r(r){return"object"==typeof r&&null!==r&&!mr(r)}var Tr,xr=Object.getPrototypeOf;Tr=Er(Object.getPrototypeOf)?xr:function(r){var e=function(r){return r.__proto__}(r);return e||null===e?e:"[object Function]"===Q(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var jr=Tr;var Lr=Object.prototype;function Vr(r){var e;return!!_r(r)&&(e=function(r){return null==r?null:(r=Ar(r),jr(r))}(r),!e||!D(r,"constructor")&&D(e,"constructor")&&Er(e.constructor)&&"[object Function]"===Q(e.constructor)&&D(e,"isPrototypeOf")&&Er(e.isPrototypeOf)&&(e===Lr||function(r){var e;for(e in r)if(!D(r,e))return!1;return!0}(r)))}function kr(r){return function(){return r}}function Rr(){}function Sr(r){return"function"==typeof r.get&&"function"==typeof r.set}var Br={complex128:function(r,e){return r.get(e)},complex64:function(r,e){return r.get(e)},default:function(r,e){return r.get(e)}};function Ir(r){var e=Br[r];return"function"==typeof e?e:Br.default}var Or={complex128:function(r,e,t){r.set(t,e)},complex64:function(r,e,t){r.set(t,e)},default:function(r,e,t){r.set(t,e)}};function Fr(r){var e=Or[r];return"function"==typeof e?e:Or.default}var Pr={float64:function(r,e){return r[e]},float32:function(r,e){return r[e]},int32:function(r,e){return r[e]},int16:function(r,e){return r[e]},int8:function(r,e){return r[e]},uint32:function(r,e){return r[e]},uint16:function(r,e){return r[e]},uint8:function(r,e){return r[e]},uint8c:function(r,e){return r[e]},generic:function(r,e){return r[e]},default:function(r,e){return r[e]}};function Cr(r){var e=Pr[r];return"function"==typeof e?e:Pr.default}var Nr={float64:function(r,e,t){r[e]=t},float32:function(r,e,t){r[e]=t},int32:function(r,e,t){r[e]=t},int16:function(r,e,t){r[e]=t},int8:function(r,e,t){r[e]=t},uint32:function(r,e,t){r[e]=t},uint16:function(r,e,t){r[e]=t},uint8:function(r,e,t){r[e]=t},uint8c:function(r,e,t){r[e]=t},generic:function(r,e,t){r[e]=t},default:function(r,e,t){r[e]=t}};function Mr(r){var e=Nr[r];return"function"==typeof e?e:Nr.default}var Ur={Float32Array:"float32",Float64Array:"float64",Array:"generic",Int16Array:"int16",Int32Array:"int32",Int8Array:"int8",Uint16Array:"uint16",Uint32Array:"uint32",Uint8Array:"uint8",Uint8ClampedArray:"uint8c",Complex64Array:"complex64",Complex128Array:"complex128"},Yr="function"==typeof Float64Array;var Gr="function"==typeof Float64Array?Float64Array:null;var Wr="function"==typeof Float64Array?Float64Array:void 0;var $r=function(){var r,e,t;if("function"!=typeof Gr)return!1;try{e=new Gr([1,3.14,-3.14,NaN]),t=e,r=(Yr&&t instanceof Float64Array||"[object Float64Array]"===Q(t))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?Wr:function(){throw new Error("not implemented")},Zr="function"==typeof Float32Array;var Xr=Number.POSITIVE_INFINITY,Jr="function"==typeof Float32Array?Float32Array:null;var zr="function"==typeof Float32Array?Float32Array:void 0;var qr=function(){var r,e,t;if("function"!=typeof Jr)return!1;try{e=new Jr([1,3.14,-3.14,5e40]),t=e,r=(Zr&&t instanceof Float32Array||"[object Float32Array]"===Q(t))&&1===e[0]&&3.140000104904175===e[1]&&-3.140000104904175===e[2]&&e[3]===Xr}catch(e){r=!1}return r}()?zr:function(){throw new Error("not implemented")},Dr="function"==typeof Uint32Array;var Hr="function"==typeof Uint32Array?Uint32Array:null;var Kr="function"==typeof Uint32Array?Uint32Array:void 0;var Qr=function(){var r,e,t;if("function"!=typeof Hr)return!1;try{e=new Hr(e=[1,3.14,-3.14,4294967296,4294967297]),t=e,r=(Dr&&t instanceof Uint32Array||"[object Uint32Array]"===Q(t))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?Kr:function(){throw new Error("not implemented")},re="function"==typeof Int32Array;var ee="function"==typeof Int32Array?Int32Array:null;var te="function"==typeof Int32Array?Int32Array:void 0;var ne=function(){var r,e,t;if("function"!=typeof ee)return!1;try{e=new ee([1,3.14,-3.14,2147483648]),t=e,r=(re&&t instanceof Int32Array||"[object Int32Array]"===Q(t))&&1===e[0]&&3===e[1]&&-3===e[2]&&-2147483648===e[3]}catch(e){r=!1}return r}()?te:function(){throw new Error("not implemented")},ie="function"==typeof Uint16Array;var oe="function"==typeof Uint16Array?Uint16Array:null;var ae="function"==typeof Uint16Array?Uint16Array:void 0;var ue=function(){var r,e,t;if("function"!=typeof oe)return!1;try{e=new oe(e=[1,3.14,-3.14,65536,65537]),t=e,r=(ie&&t instanceof Uint16Array||"[object Uint16Array]"===Q(t))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?ae:function(){throw new Error("not implemented")},fe="function"==typeof Int16Array;var le="function"==typeof Int16Array?Int16Array:null;var ce="function"==typeof Int16Array?Int16Array:void 0;var se=function(){var r,e,t;if("function"!=typeof le)return!1;try{e=new le([1,3.14,-3.14,32768]),t=e,r=(fe&&t instanceof Int16Array||"[object Int16Array]"===Q(t))&&1===e[0]&&3===e[1]&&-3===e[2]&&-32768===e[3]}catch(e){r=!1}return r}()?ce:function(){throw new Error("not implemented")},ye="function"==typeof Uint8Array;var pe="function"==typeof Uint8Array?Uint8Array:null;var he="function"==typeof Uint8Array?Uint8Array:void 0;var ge=function(){var r,e,t;if("function"!=typeof pe)return!1;try{e=new pe(e=[1,3.14,-3.14,256,257]),t=e,r=(ye&&t instanceof Uint8Array||"[object Uint8Array]"===Q(t))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?he:function(){throw new Error("not implemented")},me="function"==typeof Uint8ClampedArray;var we="function"==typeof Uint8ClampedArray?Uint8ClampedArray:null;var be="function"==typeof Uint8ClampedArray?Uint8ClampedArray:void 0;var ve=function(){var r,e,t;if("function"!=typeof we)return!1;try{e=new we([-1,0,1,3.14,4.99,255,256]),t=e,r=(me&&t instanceof Uint8ClampedArray||"[object Uint8ClampedArray]"===Q(t))&&0===e[0]&&0===e[1]&&1===e[2]&&3===e[3]&&5===e[4]&&255===e[5]&&255===e[6]}catch(e){r=!1}return r}()?be:function(){throw new Error("not implemented")},de="function"==typeof Int8Array;var Ee="function"==typeof Int8Array?Int8Array:null;var Ae="function"==typeof Int8Array?Int8Array:void 0;var _e=function(){var r,e,t;if("function"!=typeof Ee)return!1;try{e=new Ee([1,3.14,-3.14,128]),t=e,r=(de&&t instanceof Int8Array||"[object Int8Array]"===Q(t))&&1===e[0]&&3===e[1]&&-3===e[2]&&-128===e[3]}catch(e){r=!1}return r}()?Ae:function(){throw new Error("not implemented")};function Te(r){return"number"==typeof r}var xe=Number,je=xe.prototype.toString;var Le=J();function Ve(r){return"object"==typeof r&&(r instanceof xe||(Le?function(r){try{return je.call(r),!0}catch(r){return!1}}(r):"[object Number]"===Q(r)))}function ke(r){return Te(r)||Ve(r)}W(ke,"isPrimitive",Te),W(ke,"isObject",Ve);var Re=xe.NEGATIVE_INFINITY,Se=Math.floor;function Be(r){return Se(r)===r}function Ie(r){return r<Xr&&r>Re&&Be(r)}function Oe(r){return Te(r)&&Ie(r)}function Fe(r){return Ve(r)&&Ie(r.valueOf())}function Pe(r){return Oe(r)||Fe(r)}function Ce(r){return Oe(r)&&r>=0}function Ne(r){return Fe(r)&&r.valueOf()>=0}function Me(r){return Ce(r)||Ne(r)}W(Pe,"isPrimitive",Oe),W(Pe,"isObject",Fe),W(Me,"isPrimitive",Ce),W(Me,"isObject",Ne);function Ue(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&Be(r.length)&&r.length>=0&&r.length<=4294967295}function Ye(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&Be(r.length)&&r.length>=0&&r.length<=9007199254740991}var Ge="function"==typeof ArrayBuffer;function We(r){return Ge&&r instanceof ArrayBuffer||"[object ArrayBuffer]"===Q(r)}function $e(r,e){if(!(this instanceof $e))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!Te(r))throw new TypeError(B("invalid argument. Real component must be a number. Value: `%s`.",r));if(!Te(e))throw new TypeError(B("invalid argument. Imaginary component must be a number. Value: `%s`.",e));return U(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:r}),U(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:e}),this}W($e,"BYTES_PER_ELEMENT",8),W($e.prototype,"BYTES_PER_ELEMENT",8),W($e.prototype,"byteLength",16),W($e.prototype,"toString",(function(){var r=""+this.re;return this.im<0?r+=" - "+-this.im:r+=" + "+this.im,r+="i"})),W($e.prototype,"toJSON",(function(){var r={type:"Complex128"};return r.re=this.re,r.im=this.im,r}));var Ze="function"==typeof Math.fround?Math.fround:null,Xe=new qr(1);var Je="function"==typeof Ze?Ze:function(r){return Xe[0]=r,Xe[0]};function ze(r,e){if(!(this instanceof ze))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!Te(r))throw new TypeError(B("invalid argument. Real component must be a number. Value: `%s`.",r));if(!Te(e))throw new TypeError(B("invalid argument. Imaginary component must be a number. Value: `%s`.",e));return U(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:Je(r)}),U(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:Je(e)}),this}function qe(r){return r instanceof $e||r instanceof ze||"object"==typeof r&&null!==r&&"number"==typeof r.re&&"number"==typeof r.im}function De(r){return Be(r/2)}function He(){return"function"==typeof H&&"symbol"==typeof H("foo")&&D(H,"iterator")&&"symbol"==typeof H.iterator}W(ze,"BYTES_PER_ELEMENT",4),W(ze.prototype,"BYTES_PER_ELEMENT",4),W(ze.prototype,"byteLength",8),W(ze.prototype,"toString",(function(){var r=""+this.re;return this.im<0?r+=" - "+-this.im:r+=" + "+this.im,r+="i"})),W(ze.prototype,"toJSON",(function(){var r={type:"Complex64"};return r.re=this.re,r.im=this.im,r}));var Ke=He()?Symbol.iterator:null;function Qe(r){return r.re}function rt(r){return r.im}function et(r,e){return new qr(r.buffer,r.byteOffset+r.BYTES_PER_ELEMENT*e,2*(r.length-e))}function tt(r,e){return new $r(r.buffer,r.byteOffset+r.BYTES_PER_ELEMENT*e,2*(r.length-e))}function nt(r){var e,t,n;for(e=[];!(t=r.next()).done;)if(Ue(n=t.value)&&n.length>=2)e.push(n[0],n[1]);else{if(!qe(n))return new TypeError(B("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",n));e.push(Qe(n),rt(n))}return e}function it(r,e,t){var n,i,o,a;for(n=[],a=-1;!(i=r.next()).done;)if(a+=1,Ue(o=e.call(t,i.value,a))&&o.length>=2)n.push(o[0],o[1]);else{if(!qe(o))return new TypeError(B("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",o));n.push(Qe(o),rt(o))}return n}function ot(r,e){var t,n,i,o;for(t=e.length,o=0,i=0;i<t;i++){if(!qe(n=e[i]))return null;r[o]=Qe(n),r[o+1]=rt(n),o+=2}return r}var at=2*qr.BYTES_PER_ELEMENT,ut=He();function ft(r){return r instanceof yt||"object"==typeof r&&null!==r&&("Complex64Array"===r.constructor.name||"Complex128Array"===r.constructor.name)&&"number"==typeof r._length&&"object"==typeof r._buffer}function lt(r){return r===yt||"Complex128Array"===r.name}function ct(r){return"object"==typeof r&&null!==r&&"Complex64Array"===r.constructor.name&&r.BYTES_PER_ELEMENT===at}function st(r){return"object"==typeof r&&null!==r&&"Complex128Array"===r.constructor.name&&r.BYTES_PER_ELEMENT===2*at}function yt(){var r,e,t,n;if(e=arguments.length,!(this instanceof yt))return 0===e?new yt:1===e?new yt(arguments[0]):2===e?new yt(arguments[0],arguments[1]):new yt(arguments[0],arguments[1],arguments[2]);if(0===e)t=new qr(0);else if(1===e)if(Ce(arguments[0]))t=new qr(2*arguments[0]);else if(Ye(arguments[0]))if((n=(t=arguments[0]).length)&&mr(t)&&qe(t[0])){if(null===(t=ot(new qr(2*n),t))){if(!De(n))throw new RangeError(B("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",n));t=new qr(arguments[0])}}else{if(ct(t))t=et(t,0);else if(st(t))t=tt(t,0);else if(!De(n))throw new RangeError(B("invalid argument. Array-like object and typed array arguments must have a length which is a multiple of two. Length: `%u`.",n));t=new qr(t)}else if(We(arguments[0])){if(!Be((t=arguments[0]).byteLength/at))throw new RangeError(B("invalid argument. ArrayBuffer byte length must be a multiple of %u. Byte length: `%u`.",at,t.byteLength));t=new qr(t)}else{if(!_r(arguments[0]))throw new TypeError(B("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",arguments[0]));if(t=arguments[0],!1===ut)throw new TypeError(B("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `%s`.",t));if(!Er(t[Ke]))throw new TypeError(B("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if(!Er((t=t[Ke]()).next))throw new TypeError(B("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if((t=nt(t))instanceof Error)throw t;t=new qr(t)}else{if(!We(t=arguments[0]))throw new TypeError(B("invalid argument. First argument must be an ArrayBuffer. Value: `%s`.",t));if(!Ce(r=arguments[1]))throw new TypeError(B("invalid argument. Byte offset must be a nonnegative integer. Value: `%s`.",r));if(!Be(r/at))throw new RangeError(B("invalid argument. Byte offset must be a multiple of %u. Value: `%u`.",at,r));if(2===e){if(!Be((n=t.byteLength-r)/at))throw new RangeError(B("invalid arguments. ArrayBuffer view byte length must be a multiple of %u. View byte length: `%u`.",at,n));t=new qr(t,r)}else{if(!Ce(n=arguments[2]))throw new TypeError(B("invalid argument. Length must be a nonnegative integer. Value: `%s`.",n));if(n*at>t.byteLength-r)throw new RangeError(B("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `%u`.",n*at));t=new qr(t,r,2*n)}}return W(this,"_buffer",t),W(this,"_length",t.length/2),this}function pt(r){return r.re}function ht(r){return r.im}function gt(r){var e,t,n;for(e=[];!(t=r.next()).done;)if(Ue(n=t.value)&&n.length>=2)e.push(n[0],n[1]);else{if(!qe(n))return new TypeError(B("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",n));e.push(pt(n),ht(n))}return e}function mt(r,e,t){var n,i,o,a;for(n=[],a=-1;!(i=r.next()).done;)if(a+=1,Ue(o=e.call(t,i.value,a))&&o.length>=2)n.push(o[0],o[1]);else{if(!qe(o))return new TypeError(B("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",o));n.push(pt(o),ht(o))}return n}function wt(r,e){var t,n,i,o;for(t=e.length,o=0,i=0;i<t;i++){if(!qe(n=e[i]))return null;r[o]=pt(n),r[o+1]=ht(n),o+=2}return r}W(yt,"BYTES_PER_ELEMENT",at),W(yt,"name","Complex64Array"),W(yt,"from",(function(r){var e,t,n,i,o,a,u,f,l,c,s,y;if(!Er(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!lt(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if((t=arguments.length)>1){if(!Er(n=arguments[1]))throw new TypeError(B("invalid argument. Second argument must be a function. Value: `%s`.",n));t>2&&(e=arguments[2])}if(ft(r)){if(f=r.length,n){for(o=(i=new this(f))._buffer,y=0,s=0;s<f;s++){if(qe(c=n.call(e,r.get(s),s)))o[y]=Qe(c),o[y+1]=rt(c);else{if(!(Ue(c)&&c.length>=2))throw new TypeError(B("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",c));o[y]=c[0],o[y+1]=c[1]}y+=2}return i}return new this(r)}if(Ye(r)){if(n){for(f=r.length,u=r.get&&r.set?Ir("default"):Cr("default"),s=0;s<f;s++)if(!qe(u(r,s))){l=!0;break}if(l){if(!De(f))throw new RangeError(B("invalid argument. First argument must have a length which is a multiple of %u. Length: `%u`.",2,f));for(o=(i=new this(f/2))._buffer,s=0;s<f;s++)o[s]=n.call(e,u(r,s),s);return i}for(o=(i=new this(f))._buffer,y=0,s=0;s<f;s++){if(qe(c=n.call(e,u(r,s),s)))o[y]=Qe(c),o[y+1]=rt(c);else{if(!(Ue(c)&&c.length>=2))throw new TypeError(B("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",c));o[y]=c[0],o[y+1]=c[1]}y+=2}return i}return new this(r)}if(_r(r)&&ut&&Er(r[Ke])){if(!Er((o=r[Ke]()).next))throw new TypeError(B("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",r));if((a=n?it(o,n,e):nt(o))instanceof Error)throw a;for(o=(i=new this(f=a.length/2))._buffer,s=0;s<f;s++)o[s]=a[s];return i}throw new TypeError(B("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",r))})),W(yt,"of",(function(){var r,e;if(!Er(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!lt(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(r=[],e=0;e<arguments.length;e++)r.push(arguments[e]);return new this(r)})),G(yt.prototype,"buffer",(function(){return this._buffer.buffer})),G(yt.prototype,"byteLength",(function(){return this._buffer.byteLength})),G(yt.prototype,"byteOffset",(function(){return this._buffer.byteOffset})),W(yt.prototype,"BYTES_PER_ELEMENT",yt.BYTES_PER_ELEMENT),W(yt.prototype,"copyWithin",(function(r,e){if(!ft(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return 2===arguments.length?this._buffer.copyWithin(2*r,2*e):this._buffer.copyWithin(2*r,2*e,2*arguments[2]),this})),W(yt.prototype,"entries",(function(){var r,e,t,n,i,o,a;if(!ft(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return e=this,r=this._buffer,n=this._length,o=-1,a=-2,W(t={},"next",(function(){var e;if(o+=1,i||o>=n)return{done:!0};return e=new ze(r[a+=2],r[a+1]),{value:[o,e],done:!1}})),W(t,"return",(function(r){if(i=!0,arguments.length)return{value:r,done:!0};return{done:!0}})),Ke&&W(t,Ke,(function(){return e.entries()})),t})),W(yt.prototype,"get",(function(r){var e;if(!ft(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!Ce(r))throw new TypeError(B("invalid argument. Must provide a nonnegative integer. Value: `%s`.",r));if(!(r>=this._length))return new ze((e=this._buffer)[r*=2],e[r+1])})),G(yt.prototype,"length",(function(){return this._length})),W(yt.prototype,"set",(function(r){var e,t,n,i,o,a,u,f,l;if(!ft(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(n=this._buffer,arguments.length>1){if(!Ce(t=arguments[1]))throw new TypeError(B("invalid argument. Index argument must be a nonnegative integer. Value: `%s`.",t))}else t=0;if(qe(r)){if(t>=this._length)throw new RangeError(B("invalid argument. Index argument is out-of-bounds. Value: `%u`.",t));return n[t*=2]=Qe(r),void(n[t+1]=rt(r))}if(ft(r)){if(t+(a=r._length)>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(e=r._buffer,l=n.byteOffset+t*at,e.buffer===n.buffer&&e.byteOffset<l&&e.byteOffset+e.byteLength>l){for(i=new qr(e.length),f=0;f<e.length;f++)i[f]=e[f];e=i}for(t*=2,l=0,f=0;f<a;f++)n[t]=e[l],n[t+1]=e[l+1],t+=2,l+=2}else{if(!Ye(r))throw new TypeError(B("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `%s`.",r));for(a=r.length,f=0;f<a;f++)if(!qe(r[f])){o=!0;break}if(o){if(!De(a))throw new RangeError(B("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",a));if(t+a/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(e=r,l=n.byteOffset+t*at,e.buffer===n.buffer&&e.byteOffset<l&&e.byteOffset+e.byteLength>l){for(i=new qr(a),f=0;f<a;f++)i[f]=e[f];e=i}for(t*=2,a/=2,l=0,f=0;f<a;f++)n[t]=e[l],n[t+1]=e[l+1],t+=2,l+=2;return}if(t+a>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(t*=2,f=0;f<a;f++)u=r[f],n[t]=Qe(u),n[t+1]=rt(u),t+=2}}));var bt=2*$r.BYTES_PER_ELEMENT,vt=He();function dt(r){return r instanceof Tt||"object"==typeof r&&null!==r&&("Complex64Array"===r.constructor.name||"Complex128Array"===r.constructor.name)&&"number"==typeof r._length&&"object"==typeof r._buffer}function Et(r){return r===Tt||"Complex64Array"===r.name}function At(r){return"object"==typeof r&&null!==r&&"Complex64Array"===r.constructor.name&&r.BYTES_PER_ELEMENT===bt/2}function _t(r){return"object"==typeof r&&null!==r&&"Complex128Array"===r.constructor.name&&r.BYTES_PER_ELEMENT===bt}function Tt(){var r,e,t,n;if(e=arguments.length,!(this instanceof Tt))return 0===e?new Tt:1===e?new Tt(arguments[0]):2===e?new Tt(arguments[0],arguments[1]):new Tt(arguments[0],arguments[1],arguments[2]);if(0===e)t=new $r(0);else if(1===e)if(Ce(arguments[0]))t=new $r(2*arguments[0]);else if(Ye(arguments[0]))if((n=(t=arguments[0]).length)&&mr(t)&&qe(t[0])){if(null===(t=wt(new $r(2*n),t))){if(!De(n))throw new RangeError(B("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",n));t=new $r(arguments[0])}}else{if(At(t))t=et(t,0);else if(_t(t))t=tt(t,0);else if(!De(n))throw new RangeError(B("invalid argument. Array-like object and typed array arguments must have a length which is a multiple of two. Length: `%u`.",n));t=new $r(t)}else if(We(arguments[0])){if(!Be((t=arguments[0]).byteLength/bt))throw new RangeError(B("invalid argument. ArrayBuffer byte length must be a multiple of %u. Byte length: `%u`.",bt,t.byteLength));t=new $r(t)}else{if(!_r(arguments[0]))throw new TypeError(B("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",arguments[0]));if(t=arguments[0],!1===vt)throw new TypeError(B("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `%s`.",t));if(!Er(t[Ke]))throw new TypeError(B("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if(!Er((t=t[Ke]()).next))throw new TypeError(B("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if((t=gt(t))instanceof Error)throw t;t=new $r(t)}else{if(!We(t=arguments[0]))throw new TypeError(B("invalid argument. First argument must be an ArrayBuffer. Value: `%s`.",t));if(!Ce(r=arguments[1]))throw new TypeError(B("invalid argument. Byte offset must be a nonnegative integer. Value: `%s`.",r));if(!Be(r/bt))throw new RangeError(B("invalid argument. Byte offset must be a multiple of %u. Value: `%u`.",bt,r));if(2===e){if(!Be((n=t.byteLength-r)/bt))throw new RangeError(B("invalid arguments. ArrayBuffer view byte length must be a multiple of %u. View byte length: `%u`.",bt,n));t=new $r(t,r)}else{if(!Ce(n=arguments[2]))throw new TypeError(B("invalid argument. Length must be a nonnegative integer. Value: `%s`.",n));if(n*bt>t.byteLength-r)throw new RangeError(B("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `%u`.",n*bt));t=new $r(t,r,2*n)}}return W(this,"_buffer",t),W(this,"_length",t.length/2),this}W(Tt,"BYTES_PER_ELEMENT",bt),W(Tt,"name","Complex128Array"),W(Tt,"from",(function(r){var e,t,n,i,o,a,u,f,l,c,s,y;if(!Er(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!Et(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if((t=arguments.length)>1){if(!Er(n=arguments[1]))throw new TypeError(B("invalid argument. Second argument must be a function. Value: `%s`.",n));t>2&&(e=arguments[2])}if(dt(r)){if(f=r.length,n){for(o=(i=new this(f))._buffer,y=0,s=0;s<f;s++){if(qe(c=n.call(e,r.get(s),s)))o[y]=pt(c),o[y+1]=ht(c);else{if(!(Ue(c)&&c.length>=2))throw new TypeError(B("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",c));o[y]=c[0],o[y+1]=c[1]}y+=2}return i}return new this(r)}if(Ye(r)){if(n){for(f=r.length,u=r.get&&r.set?Ir("default"):Cr("default"),s=0;s<f;s++)if(!qe(u(r,s))){l=!0;break}if(l){if(!De(f))throw new RangeError(B("invalid argument. First argument must have a length which is a multiple of two. Length: `%u`.",f));for(o=(i=new this(f/2))._buffer,s=0;s<f;s++)o[s]=n.call(e,u(r,s),s);return i}for(o=(i=new this(f))._buffer,y=0,s=0;s<f;s++){if(qe(c=n.call(e,u(r,s),s)))o[y]=pt(c),o[y+1]=ht(c);else{if(!(Ue(c)&&c.length>=2))throw new TypeError(B("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",c));o[y]=c[0],o[y+1]=c[1]}y+=2}return i}return new this(r)}if(_r(r)&&vt&&Er(r[Ke])){if(!Er((o=r[Ke]()).next))throw new TypeError(B("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",r));if((a=n?mt(o,n,e):gt(o))instanceof Error)throw a;for(o=(i=new this(f=a.length/2))._buffer,s=0;s<f;s++)o[s]=a[s];return i}throw new TypeError(B("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",r))})),W(Tt,"of",(function(){var r,e;if(!Er(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!Et(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(r=[],e=0;e<arguments.length;e++)r.push(arguments[e]);return new this(r)})),G(Tt.prototype,"buffer",(function(){return this._buffer.buffer})),G(Tt.prototype,"byteLength",(function(){return this._buffer.byteLength})),G(Tt.prototype,"byteOffset",(function(){return this._buffer.byteOffset})),W(Tt.prototype,"BYTES_PER_ELEMENT",Tt.BYTES_PER_ELEMENT),W(Tt.prototype,"copyWithin",(function(r,e){if(!dt(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return 2===arguments.length?this._buffer.copyWithin(2*r,2*e):this._buffer.copyWithin(2*r,2*e,2*arguments[2]),this})),W(Tt.prototype,"entries",(function(){var r,e,t,n,i,o,a;if(!dt(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return e=this,r=this._buffer,n=this._length,o=-1,a=-2,W(t={},"next",(function(){var e;if(o+=1,i||o>=n)return{done:!0};return e=new $e(r[a+=2],r[a+1]),{value:[o,e],done:!1}})),W(t,"return",(function(r){if(i=!0,arguments.length)return{value:r,done:!0};return{done:!0}})),Ke&&W(t,Ke,(function(){return e.entries()})),t})),W(Tt.prototype,"get",(function(r){var e;if(!dt(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!Ce(r))throw new TypeError(B("invalid argument. Must provide a nonnegative integer. Value: `%s`.",r));if(!(r>=this._length))return new $e((e=this._buffer)[r*=2],e[r+1])})),G(Tt.prototype,"length",(function(){return this._length})),W(Tt.prototype,"set",(function(r){var e,t,n,i,o,a,u,f,l;if(!dt(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(n=this._buffer,arguments.length>1){if(!Ce(t=arguments[1]))throw new TypeError(B("invalid argument. Index argument must be a nonnegative integer. Value: `%s`.",t))}else t=0;if(qe(r)){if(t>=this._length)throw new RangeError(B("invalid argument. Index argument is out-of-bounds. Value: `%u`.",t));return n[t*=2]=pt(r),void(n[t+1]=ht(r))}if(dt(r)){if(t+(a=r._length)>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(e=r._buffer,l=n.byteOffset+t*bt,e.buffer===n.buffer&&e.byteOffset<l&&e.byteOffset+e.byteLength>l){for(i=new $r(e.length),f=0;f<e.length;f++)i[f]=e[f];e=i}for(t*=2,l=0,f=0;f<a;f++)n[t]=e[l],n[t+1]=e[l+1],t+=2,l+=2}else{if(!Ye(r))throw new TypeError(B("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `%s`.",r));for(a=r.length,f=0;f<a;f++)if(!qe(r[f])){o=!0;break}if(o){if(!De(a))throw new RangeError(B("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",a));if(t+a/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(e=r,l=n.byteOffset+t*bt,e.buffer===n.buffer&&e.byteOffset<l&&e.byteOffset+e.byteLength>l){for(i=new $r(a),f=0;f<a;f++)i[f]=e[f];e=i}for(t*=2,a/=2,l=0,f=0;f<a;f++)n[t]=e[l],n[t+1]=e[l+1],t+=2,l+=2;return}if(t+a>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(t*=2,f=0;f<a;f++)u=r[f],n[t]=pt(u),n[t+1]=ht(u),t+=2}}));var xt=[$r,qr,ne,Qr,se,ue,_e,ge,ve,yt,Tt],jt=["float64","float32","int32","uint32","int16","uint16","int8","uint8","uint8c","complex64","complex128"],Lt=jt.length;function Vt(r){var e;if(mr(r))return"generic";if(br(r))return null;for(e=0;e<Lt;e++)if(r instanceof xt[e])return jt[e];return Ur[vr(r)]||null}function kt(r,e,t,n){var i,o,a,u;return Sr(a=r[0])&&(i=Ir(Vt(a))),Sr(u=r[1])&&(o=Fr(Vt(u))),i||o?function(r,e,t,n,i){var o,a,u,f,l,c,s,y,p,h;if(!((p=e[0])<=0))for(l=(u=t[0])<0?(1-p)*u:0,c=(f=t[1])<0?(1-p)*f:0,s=r[0],y=r[1],o=n[0],a=n[1],h=0;h<p;h++)a(y,c,i(o(s,l))),l+=u,c+=f}(r,e,t,[i=i||Cr(Vt(a)),o=o||Mr(Vt(u))],n):function(r,e,t,n){var i,o,a,u,f,l,c,s;if(!((c=e[0])<=0))for(a=(i=t[0])<0?(1-c)*i:0,u=(o=t[1])<0?(1-c)*o:0,f=r[0],l=r[1],s=0;s<c;s++)l[u]=n(f[a]),a+=i,u+=o}(r,e,t,n)}function Rt(r){if(!Er(r))throw new TypeError(B("invalid argument. First argument must be a function. Value: `%s`.",r));if(t="factory",null==(e=r)||(e=Ar(e),"symbol"!=typeof t&&(t=String(t)),!(t in e)||!Er(e[t])))throw new TypeError(B("invalid argument. First argument must have a `%s` method.","factory"));var e,t;return function(){var e,t;if(arguments.length>0){if(!Vr(t=arguments[0]))throw new TypeError(B("invalid argument. Options argument must be an object. Value: `%s`.",t));e=r.factory(t)}else t={},e=r;t&&t.prng?(W(n,"seed",null),W(n,"seedLength",null),Y(n,"state",kr(null),Rr),W(n,"stateLength",null),W(n,"byteLength",null)):(G(n,"seed",o),G(n,"seedLength",a),Y(n,"state",l,c),G(n,"stateLength",u),G(n,"byteLength",f));return W(n,"PRNG",e.PRNG),W(n,"ndarray",i),n;function n(r,t,n,i,o){return kt([t,i],[r],[n,o],e),i}function i(r,t,n,i,o,a,u){return kt.ndarray([t,o],[r],[n,a],[i,u],e),o}function o(){return n.PRNG.seed}function a(){return n.PRNG.seedLength}function u(){return n.PRNG.stateLength}function f(){return n.PRNG.byteLength}function l(){return n.PRNG.state}function c(r){n.PRNG.state=r}}}W(kt,"ndarray",(function(r,e,t,n,i){var o,a,u,f;return Sr(u=r[0])&&(o=Ir(Vt(u))),Sr(f=r[1])&&(a=Fr(Vt(f))),o||a?function(r,e,t,n,i,o){var a,u,f,l,c,s,y,p,h,g;if(!((h=e[0])<=0))for(c=n[0],s=n[1],f=t[0],l=t[1],y=r[0],p=r[1],a=i[0],u=i[1],g=0;g<h;g++)u(p,s,o(a(y,c))),c+=f,s+=l}(r,e,t,n,[o=o||Cr(Vt(u)),a=a||Mr(Vt(f))],i):function(r,e,t,n,i){var o,a,u,f,l,c,s,y;if(!((s=e[0])<=0))for(u=n[0],f=n[1],o=t[0],a=t[1],l=r[0],c=r[1],y=0;y<s;y++)c[f]=i(l[u]),u+=o,f+=a}(r,e,t,n,i)}));export{Rt as default};
//# sourceMappingURL=mod.js.map
