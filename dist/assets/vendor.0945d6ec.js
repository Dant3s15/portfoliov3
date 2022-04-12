var L={exports:{}},z={};/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var qf=Object.getOwnPropertySymbols,F0=Object.prototype.hasOwnProperty,U0=Object.prototype.propertyIsEnumerable;function B0(e){if(e==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}function z0(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de",Object.getOwnPropertyNames(e)[0]==="5")return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;var r=Object.getOwnPropertyNames(t).map(function(o){return t[o]});if(r.join("")!=="0123456789")return!1;var i={};return"abcdefghijklmnopqrst".split("").forEach(function(o){i[o]=o}),Object.keys(Object.assign({},i)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}var jp=z0()?Object.assign:function(e,t){for(var n,r=B0(e),i,o=1;o<arguments.length;o++){n=Object(arguments[o]);for(var s in n)F0.call(n,s)&&(r[s]=n[s]);if(qf){i=qf(n);for(var a=0;a<i.length;a++)U0.call(n,i[a])&&(r[i[a]]=n[i[a]])}}return r};/** @license React v17.0.2
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gu=jp,br=60103,Fp=60106;z.Fragment=60107;z.StrictMode=60108;z.Profiler=60114;var Up=60109,Bp=60110,zp=60112;z.Suspense=60113;var Vp=60115,Hp=60116;if(typeof Symbol=="function"&&Symbol.for){var tt=Symbol.for;br=tt("react.element"),Fp=tt("react.portal"),z.Fragment=tt("react.fragment"),z.StrictMode=tt("react.strict_mode"),z.Profiler=tt("react.profiler"),Up=tt("react.provider"),Bp=tt("react.context"),zp=tt("react.forward_ref"),z.Suspense=tt("react.suspense"),Vp=tt("react.memo"),Hp=tt("react.lazy")}var Yf=typeof Symbol=="function"&&Symbol.iterator;function V0(e){return e===null||typeof e!="object"?null:(e=Yf&&e[Yf]||e["@@iterator"],typeof e=="function"?e:null)}function ao(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Wp={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Gp={};function Mr(e,t,n){this.props=e,this.context=t,this.refs=Gp,this.updater=n||Wp}Mr.prototype.isReactComponent={};Mr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error(ao(85));this.updater.enqueueSetState(this,e,t,"setState")};Mr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Kp(){}Kp.prototype=Mr.prototype;function Ku(e,t,n){this.props=e,this.context=t,this.refs=Gp,this.updater=n||Wp}var qu=Ku.prototype=new Kp;qu.constructor=Ku;Gu(qu,Mr.prototype);qu.isPureReactComponent=!0;var Yu={current:null},qp=Object.prototype.hasOwnProperty,Yp={key:!0,ref:!0,__self:!0,__source:!0};function Xp(e,t,n){var r,i={},o=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(o=""+t.key),t)qp.call(t,r)&&!Yp.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:br,type:e,key:o,ref:s,props:i,_owner:Yu.current}}function H0(e,t){return{$$typeof:br,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Xu(e){return typeof e=="object"&&e!==null&&e.$$typeof===br}function W0(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Xf=/\/+/g;function Wa(e,t){return typeof e=="object"&&e!==null&&e.key!=null?W0(""+e.key):t.toString(36)}function Wo(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case br:case Fp:s=!0}}if(s)return s=e,i=i(s),e=r===""?"."+Wa(s,0):r,Array.isArray(i)?(n="",e!=null&&(n=e.replace(Xf,"$&/")+"/"),Wo(i,t,n,"",function(u){return u})):i!=null&&(Xu(i)&&(i=H0(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(Xf,"$&/")+"/")+e)),t.push(i)),1;if(s=0,r=r===""?".":r+":",Array.isArray(e))for(var a=0;a<e.length;a++){o=e[a];var l=r+Wa(o,a);s+=Wo(o,t,n,l,i)}else if(l=V0(e),typeof l=="function")for(e=l.call(e),a=0;!(o=e.next()).done;)o=o.value,l=r+Wa(o,a++),s+=Wo(o,t,n,l,i);else if(o==="object")throw t=""+e,Error(ao(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t));return s}function Ro(e,t,n){if(e==null)return e;var r=[],i=0;return Wo(e,r,"","",function(o){return t.call(n,o,i++)}),r}function G0(e){if(e._status===-1){var t=e._result;t=t(),e._status=0,e._result=t,t.then(function(n){e._status===0&&(n=n.default,e._status=1,e._result=n)},function(n){e._status===0&&(e._status=2,e._result=n)})}if(e._status===1)return e._result;throw e._result}var Jp={current:null};function xt(){var e=Jp.current;if(e===null)throw Error(ao(321));return e}var K0={ReactCurrentDispatcher:Jp,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:Yu,IsSomeRendererActing:{current:!1},assign:Gu};z.Children={map:Ro,forEach:function(e,t,n){Ro(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Ro(e,function(){t++}),t},toArray:function(e){return Ro(e,function(t){return t})||[]},only:function(e){if(!Xu(e))throw Error(ao(143));return e}};z.Component=Mr;z.PureComponent=Ku;z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=K0;z.cloneElement=function(e,t,n){if(e==null)throw Error(ao(267,e));var r=Gu({},e.props),i=e.key,o=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,s=Yu.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in t)qp.call(t,l)&&!Yp.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&a!==void 0?a[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:br,type:e.type,key:i,ref:o,props:r,_owner:s}};z.createContext=function(e,t){return t===void 0&&(t=null),e={$$typeof:Bp,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider={$$typeof:Up,_context:e},e.Consumer=e};z.createElement=Xp;z.createFactory=function(e){var t=Xp.bind(null,e);return t.type=e,t};z.createRef=function(){return{current:null}};z.forwardRef=function(e){return{$$typeof:zp,render:e}};z.isValidElement=Xu;z.lazy=function(e){return{$$typeof:Hp,_payload:{_status:-1,_result:e},_init:G0}};z.memo=function(e,t){return{$$typeof:Vp,type:e,compare:t===void 0?null:t}};z.useCallback=function(e,t){return xt().useCallback(e,t)};z.useContext=function(e,t){return xt().useContext(e,t)};z.useDebugValue=function(){};z.useEffect=function(e,t){return xt().useEffect(e,t)};z.useImperativeHandle=function(e,t,n){return xt().useImperativeHandle(e,t,n)};z.useLayoutEffect=function(e,t){return xt().useLayoutEffect(e,t)};z.useMemo=function(e,t){return xt().useMemo(e,t)};z.useReducer=function(e,t,n){return xt().useReducer(e,t,n)};z.useRef=function(e){return xt().useRef(e)};z.useState=function(e){return xt().useState(e)};z.version="17.0.2";L.exports=z;var MP=L.exports,Qp={exports:{}},et={},Zp={exports:{}},eg={};/** @license React v0.20.2
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){var t,n,r,i;if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();e.unstable_now=function(){return s.now()-a}}if(typeof window=="undefined"||typeof MessageChannel!="function"){var l=null,u=null,p=function(){if(l!==null)try{var T=e.unstable_now();l(!0,T),l=null}catch(D){throw setTimeout(p,0),D}};t=function(T){l!==null?setTimeout(t,0,T):(l=T,setTimeout(p,0))},n=function(T,D){u=setTimeout(T,D)},r=function(){clearTimeout(u)},e.unstable_shouldYield=function(){return!1},i=e.unstable_forceFrameRate=function(){}}else{var y=window.setTimeout,d=window.clearTimeout;if(typeof console!="undefined"){var w=window.cancelAnimationFrame;typeof window.requestAnimationFrame!="function"&&console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"),typeof w!="function"&&console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills")}var I=!1,C=null,f=-1,c=5,h=0;e.unstable_shouldYield=function(){return e.unstable_now()>=h},i=function(){},e.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):c=0<T?Math.floor(1e3/T):5};var v=new MessageChannel,g=v.port2;v.port1.onmessage=function(){if(C!==null){var T=e.unstable_now();h=T+c;try{C(!0,T)?g.postMessage(null):(I=!1,C=null)}catch(D){throw g.postMessage(null),D}}else I=!1},t=function(T){C=T,I||(I=!0,g.postMessage(null))},n=function(T,D){f=y(function(){T(e.unstable_now())},D)},r=function(){d(f),f=-1}}function S(T,D){var j=T.length;T.push(D);e:for(;;){var J=j-1>>>1,re=T[J];if(re!==void 0&&0<x(re,D))T[J]=D,T[j]=re,j=J;else break e}}function E(T){return T=T[0],T===void 0?null:T}function P(T){var D=T[0];if(D!==void 0){var j=T.pop();if(j!==D){T[0]=j;e:for(var J=0,re=T.length;J<re;){var st=2*(J+1)-1,at=T[st],Bt=st+1,lt=T[Bt];if(at!==void 0&&0>x(at,j))lt!==void 0&&0>x(lt,at)?(T[J]=lt,T[Bt]=j,J=Bt):(T[J]=at,T[st]=j,J=st);else if(lt!==void 0&&0>x(lt,j))T[J]=lt,T[Bt]=j,J=Bt;else break e}}return D}return null}function x(T,D){var j=T.sortIndex-D.sortIndex;return j!==0?j:T.id-D.id}var R=[],ne=[],Ae=1,le=null,oe=3,rr=!1,St=!1,jt=!1;function ir(T){for(var D=E(ne);D!==null;){if(D.callback===null)P(ne);else if(D.startTime<=T)P(ne),D.sortIndex=D.expirationTime,S(R,D);else break;D=E(ne)}}function or(T){if(jt=!1,ir(T),!St)if(E(R)!==null)St=!0,t(Ft);else{var D=E(ne);D!==null&&n(or,D.startTime-T)}}function Ft(T,D){St=!1,jt&&(jt=!1,r()),rr=!0;var j=oe;try{for(ir(D),le=E(R);le!==null&&(!(le.expirationTime>D)||T&&!e.unstable_shouldYield());){var J=le.callback;if(typeof J=="function"){le.callback=null,oe=le.priorityLevel;var re=J(le.expirationTime<=D);D=e.unstable_now(),typeof re=="function"?le.callback=re:le===E(R)&&P(R),ir(D)}else P(R);le=E(R)}if(le!==null)var st=!0;else{var at=E(ne);at!==null&&n(or,at.startTime-D),st=!1}return st}finally{le=null,oe=j,rr=!1}}var Ut=i;e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(T){T.callback=null},e.unstable_continueExecution=function(){St||rr||(St=!0,t(Ft))},e.unstable_getCurrentPriorityLevel=function(){return oe},e.unstable_getFirstCallbackNode=function(){return E(R)},e.unstable_next=function(T){switch(oe){case 1:case 2:case 3:var D=3;break;default:D=oe}var j=oe;oe=D;try{return T()}finally{oe=j}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=Ut,e.unstable_runWithPriority=function(T,D){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var j=oe;oe=T;try{return D()}finally{oe=j}},e.unstable_scheduleCallback=function(T,D,j){var J=e.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?J+j:J):j=J,T){case 1:var re=-1;break;case 2:re=250;break;case 5:re=1073741823;break;case 4:re=1e4;break;default:re=5e3}return re=j+re,T={id:Ae++,callback:D,priorityLevel:T,startTime:j,expirationTime:re,sortIndex:-1},j>J?(T.sortIndex=j,S(ne,T),E(R)===null&&T===E(ne)&&(jt?r():jt=!0,n(or,j-J))):(T.sortIndex=re,S(R,T),St||rr||(St=!0,t(Ft))),T},e.unstable_wrapCallback=function(T){var D=oe;return function(){var j=oe;oe=D;try{return T.apply(this,arguments)}finally{oe=j}}}})(eg);Zp.exports=eg;/** @license React v17.0.2
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ks=L.exports,Z=jp,fe=Zp.exports;function _(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}if(!Ks)throw Error(_(227));var tg=new Set,Di={};function Kn(e,t){Pr(e,t),Pr(e+"Capture",t)}function Pr(e,t){for(Di[e]=t,e=0;e<t.length;e++)tg.add(t[e])}var $t=!(typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined"),q0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Jf=Object.prototype.hasOwnProperty,Qf={},Zf={};function Y0(e){return Jf.call(Zf,e)?!0:Jf.call(Qf,e)?!1:q0.test(e)?Zf[e]=!0:(Qf[e]=!0,!1)}function X0(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function J0(e,t,n,r){if(t===null||typeof t=="undefined"||X0(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function De(e,t,n,r,i,o,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=s}var we={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){we[e]=new De(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];we[t]=new De(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){we[e]=new De(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){we[e]=new De(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){we[e]=new De(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){we[e]=new De(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){we[e]=new De(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){we[e]=new De(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){we[e]=new De(e,5,!1,e.toLowerCase(),null,!1,!1)});var Ju=/[\-:]([a-z])/g;function Qu(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Ju,Qu);we[t]=new De(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Ju,Qu);we[t]=new De(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Ju,Qu);we[t]=new De(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){we[e]=new De(e,1,!1,e.toLowerCase(),null,!1,!1)});we.xlinkHref=new De("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){we[e]=new De(e,1,!1,e.toLowerCase(),null,!0,!0)});function Zu(e,t,n,r){var i=we.hasOwnProperty(t)?we[t]:null,o=i!==null?i.type===0:r?!1:!(!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N");o||(J0(t,n,i,r)&&(n=null),r||i===null?Y0(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var qn=Ks.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ui=60103,Cn=60106,Ht=60107,ec=60108,mi=60114,tc=60109,nc=60110,qs=60112,vi=60113,ss=60120,Ys=60115,rc=60116,ic=60121,oc=60128,ng=60129,sc=60130,Ml=60131;if(typeof Symbol=="function"&&Symbol.for){var ce=Symbol.for;ui=ce("react.element"),Cn=ce("react.portal"),Ht=ce("react.fragment"),ec=ce("react.strict_mode"),mi=ce("react.profiler"),tc=ce("react.provider"),nc=ce("react.context"),qs=ce("react.forward_ref"),vi=ce("react.suspense"),ss=ce("react.suspense_list"),Ys=ce("react.memo"),rc=ce("react.lazy"),ic=ce("react.block"),ce("react.scope"),oc=ce("react.opaque.id"),ng=ce("react.debug_trace_mode"),sc=ce("react.offscreen"),Ml=ce("react.legacy_hidden")}var ed=typeof Symbol=="function"&&Symbol.iterator;function Yr(e){return e===null||typeof e!="object"?null:(e=ed&&e[ed]||e["@@iterator"],typeof e=="function"?e:null)}var Ga;function ci(e){if(Ga===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Ga=t&&t[1]||""}return`
`+Ga+e}var Ka=!1;function Po(e,t){if(!e||Ka)return"";Ka=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(l){var r=l}Reflect.construct(e,[],t)}else{try{t.call()}catch(l){r=l}e.call(t.prototype)}else{try{throw Error()}catch(l){r=l}e()}}catch(l){if(l&&r&&typeof l.stack=="string"){for(var i=l.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,a=o.length-1;1<=s&&0<=a&&i[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(i[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||i[s]!==o[a])return`
`+i[s].replace(" at new "," at ");while(1<=s&&0<=a);break}}}finally{Ka=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?ci(e):""}function Q0(e){switch(e.tag){case 5:return ci(e.type);case 16:return ci("Lazy");case 13:return ci("Suspense");case 19:return ci("SuspenseList");case 0:case 2:case 15:return e=Po(e.type,!1),e;case 11:return e=Po(e.type.render,!1),e;case 22:return e=Po(e.type._render,!1),e;case 1:return e=Po(e.type,!0),e;default:return""}}function vr(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Ht:return"Fragment";case Cn:return"Portal";case mi:return"Profiler";case ec:return"StrictMode";case vi:return"Suspense";case ss:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case nc:return(e.displayName||"Context")+".Consumer";case tc:return(e._context.displayName||"Context")+".Provider";case qs:var t=e.render;return t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case Ys:return vr(e.type);case ic:return vr(e._render);case rc:t=e._payload,e=e._init;try{return vr(e(t))}catch{}}return null}function an(e){switch(typeof e){case"boolean":case"number":case"object":case"string":case"undefined":return e;default:return""}}function rg(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Z0(e){var t=rg(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n!="undefined"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function No(e){e._valueTracker||(e._valueTracker=Z0(e))}function ig(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=rg(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function as(e){if(e=e||(typeof document!="undefined"?document:void 0),typeof e=="undefined")return null;try{return e.activeElement||e.body}catch{return e.body}}function jl(e,t){var n=t.checked;return Z({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:e._wrapperState.initialChecked})}function td(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=an(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function og(e,t){t=t.checked,t!=null&&Zu(e,"checked",t,!1)}function Fl(e,t){og(e,t);var n=an(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Ul(e,t.type,n):t.hasOwnProperty("defaultValue")&&Ul(e,t.type,an(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function nd(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Ul(e,t,n){(t!=="number"||as(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}function e1(e){var t="";return Ks.Children.forEach(e,function(n){n!=null&&(t+=n)}),t}function Bl(e,t){return e=Z({children:void 0},t),(t=e1(t.children))&&(e.children=t),e}function yr(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+an(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function zl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(_(91));return Z({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function rd(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(_(92));if(Array.isArray(n)){if(!(1>=n.length))throw Error(_(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:an(n)}}function sg(e,t){var n=an(t.value),r=an(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function id(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}var Vl={html:"http://www.w3.org/1999/xhtml",mathml:"http://www.w3.org/1998/Math/MathML",svg:"http://www.w3.org/2000/svg"};function ag(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Hl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?ag(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var $o,lg=function(e){return typeof MSApp!="undefined"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!==Vl.svg||"innerHTML"in e)e.innerHTML=t;else{for($o=$o||document.createElement("div"),$o.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=$o.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Li(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var yi={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},t1=["Webkit","ms","Moz","O"];Object.keys(yi).forEach(function(e){t1.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),yi[t]=yi[e]})});function ug(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||yi.hasOwnProperty(e)&&yi[e]?(""+t).trim():t+"px"}function cg(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=ug(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var n1=Z({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Wl(e,t){if(t){if(n1[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(_(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(_(60));if(!(typeof t.dangerouslySetInnerHTML=="object"&&"__html"in t.dangerouslySetInnerHTML))throw Error(_(61))}if(t.style!=null&&typeof t.style!="object")throw Error(_(62))}}function Gl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}function ac(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Kl=null,wr=null,_r=null;function od(e){if(e=uo(e)){if(typeof Kl!="function")throw Error(_(280));var t=e.stateNode;t&&(t=ta(t),Kl(e.stateNode,e.type,t))}}function fg(e){wr?_r?_r.push(e):_r=[e]:wr=e}function dg(){if(wr){var e=wr,t=_r;if(_r=wr=null,od(e),t)for(e=0;e<t.length;e++)od(t[e])}}function lc(e,t){return e(t)}function hg(e,t,n,r,i){return e(t,n,r,i)}function uc(){}var pg=lc,kn=!1,qa=!1;function cc(){(wr!==null||_r!==null)&&(uc(),dg())}function r1(e,t,n){if(qa)return e(t,n);qa=!0;try{return pg(e,t,n)}finally{qa=!1,cc()}}function xi(e,t){var n=e.stateNode;if(n===null)return null;var r=ta(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(_(231,t,typeof n));return n}var ql=!1;if($t)try{var Xr={};Object.defineProperty(Xr,"passive",{get:function(){ql=!0}}),window.addEventListener("test",Xr,Xr),window.removeEventListener("test",Xr,Xr)}catch{ql=!1}function i1(e,t,n,r,i,o,s,a,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(p){this.onError(p)}}var wi=!1,ls=null,us=!1,Yl=null,o1={onError:function(e){wi=!0,ls=e}};function s1(e,t,n,r,i,o,s,a,l){wi=!1,ls=null,i1.apply(o1,arguments)}function a1(e,t,n,r,i,o,s,a,l){if(s1.apply(this,arguments),wi){if(wi){var u=ls;wi=!1,ls=null}else throw Error(_(198));us||(us=!0,Yl=u)}}function Yn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&1026)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function gg(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function sd(e){if(Yn(e)!==e)throw Error(_(188))}function l1(e){var t=e.alternate;if(!t){if(t=Yn(e),t===null)throw Error(_(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return sd(i),e;if(o===r)return sd(i),t;o=o.sibling}throw Error(_(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,a=i.child;a;){if(a===n){s=!0,n=i,r=o;break}if(a===r){s=!0,r=i,n=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===n){s=!0,n=o,r=i;break}if(a===r){s=!0,r=o,n=i;break}a=a.sibling}if(!s)throw Error(_(189))}}if(n.alternate!==r)throw Error(_(190))}if(n.tag!==3)throw Error(_(188));return n.stateNode.current===n?e:t}function mg(e){if(e=l1(e),!e)return null;for(var t=e;;){if(t.tag===5||t.tag===6)return t;if(t.child)t.child.return=t,t=t.child;else{if(t===e)break;for(;!t.sibling;){if(!t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}}return null}function ad(e,t){for(var n=e.alternate;t!==null;){if(t===e||t===n)return!0;t=t.return}return!1}var vg,fc,yg,wg,Xl=!1,ut=[],Qt=null,Zt=null,en=null,bi=new Map,Mi=new Map,Jr=[],ld="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Jl(e,t,n,r,i){return{blockedOn:e,domEventName:t,eventSystemFlags:n|16,nativeEvent:i,targetContainers:[r]}}function ud(e,t){switch(e){case"focusin":case"focusout":Qt=null;break;case"dragenter":case"dragleave":Zt=null;break;case"mouseover":case"mouseout":en=null;break;case"pointerover":case"pointerout":bi.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Mi.delete(t.pointerId)}}function Qr(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e=Jl(t,n,r,i,o),t!==null&&(t=uo(t),t!==null&&fc(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function u1(e,t,n,r,i){switch(t){case"focusin":return Qt=Qr(Qt,e,t,n,r,i),!0;case"dragenter":return Zt=Qr(Zt,e,t,n,r,i),!0;case"mouseover":return en=Qr(en,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return bi.set(o,Qr(bi.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Mi.set(o,Qr(Mi.get(o)||null,e,t,n,r,i)),!0}return!1}function c1(e){var t=An(e.target);if(t!==null){var n=Yn(t);if(n!==null){if(t=n.tag,t===13){if(t=gg(n),t!==null){e.blockedOn=t,wg(e.lanePriority,function(){fe.unstable_runWithPriority(e.priority,function(){yg(n)})});return}}else if(t===3&&n.stateNode.hydrate){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Go(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=gc(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n!==null)return t=uo(n),t!==null&&fc(t),e.blockedOn=n,!1;t.shift()}return!0}function cd(e,t,n){Go(e)&&n.delete(t)}function f1(){for(Xl=!1;0<ut.length;){var e=ut[0];if(e.blockedOn!==null){e=uo(e.blockedOn),e!==null&&vg(e);break}for(var t=e.targetContainers;0<t.length;){var n=gc(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n!==null){e.blockedOn=n;break}t.shift()}e.blockedOn===null&&ut.shift()}Qt!==null&&Go(Qt)&&(Qt=null),Zt!==null&&Go(Zt)&&(Zt=null),en!==null&&Go(en)&&(en=null),bi.forEach(cd),Mi.forEach(cd)}function Zr(e,t){e.blockedOn===t&&(e.blockedOn=null,Xl||(Xl=!0,fe.unstable_scheduleCallback(fe.unstable_NormalPriority,f1)))}function _g(e){function t(i){return Zr(i,e)}if(0<ut.length){Zr(ut[0],e);for(var n=1;n<ut.length;n++){var r=ut[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Qt!==null&&Zr(Qt,e),Zt!==null&&Zr(Zt,e),en!==null&&Zr(en,e),bi.forEach(t),Mi.forEach(t),n=0;n<Jr.length;n++)r=Jr[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Jr.length&&(n=Jr[0],n.blockedOn===null);)c1(n),n.blockedOn===null&&Jr.shift()}function Do(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var ur={animationend:Do("Animation","AnimationEnd"),animationiteration:Do("Animation","AnimationIteration"),animationstart:Do("Animation","AnimationStart"),transitionend:Do("Transition","TransitionEnd")},Ya={},Eg={};$t&&(Eg=document.createElement("div").style,"AnimationEvent"in window||(delete ur.animationend.animation,delete ur.animationiteration.animation,delete ur.animationstart.animation),"TransitionEvent"in window||delete ur.transitionend.transition);function Xs(e){if(Ya[e])return Ya[e];if(!ur[e])return e;var t=ur[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Eg)return Ya[e]=t[n];return e}var Sg=Xs("animationend"),Tg=Xs("animationiteration"),Ig=Xs("animationstart"),Cg=Xs("transitionend"),kg=new Map,dc=new Map,d1=["abort","abort",Sg,"animationEnd",Tg,"animationIteration",Ig,"animationStart","canplay","canPlay","canplaythrough","canPlayThrough","durationchange","durationChange","emptied","emptied","encrypted","encrypted","ended","ended","error","error","gotpointercapture","gotPointerCapture","load","load","loadeddata","loadedData","loadedmetadata","loadedMetadata","loadstart","loadStart","lostpointercapture","lostPointerCapture","playing","playing","progress","progress","seeking","seeking","stalled","stalled","suspend","suspend","timeupdate","timeUpdate",Cg,"transitionEnd","waiting","waiting"];function hc(e,t){for(var n=0;n<e.length;n+=2){var r=e[n],i=e[n+1];i="on"+(i[0].toUpperCase()+i.slice(1)),dc.set(r,t),kg.set(r,i),Kn(i,[r])}}var h1=fe.unstable_now;h1();var K=8;function ar(e){if((1&e)!==0)return K=15,1;if((2&e)!==0)return K=14,2;if((4&e)!==0)return K=13,4;var t=24&e;return t!==0?(K=12,t):(e&32)!==0?(K=11,32):(t=192&e,t!==0?(K=10,t):(e&256)!==0?(K=9,256):(t=3584&e,t!==0?(K=8,t):(e&4096)!==0?(K=7,4096):(t=4186112&e,t!==0?(K=6,t):(t=62914560&e,t!==0?(K=5,t):e&67108864?(K=4,67108864):(e&134217728)!==0?(K=3,134217728):(t=805306368&e,t!==0?(K=2,t):(1073741824&e)!==0?(K=1,1073741824):(K=8,e))))))}function p1(e){switch(e){case 99:return 15;case 98:return 10;case 97:case 96:return 8;case 95:return 2;default:return 0}}function g1(e){switch(e){case 15:case 14:return 99;case 13:case 12:case 11:case 10:return 98;case 9:case 8:case 7:case 6:case 4:case 5:return 97;case 3:case 2:case 1:return 95;case 0:return 90;default:throw Error(_(358,e))}}function ji(e,t){var n=e.pendingLanes;if(n===0)return K=0;var r=0,i=0,o=e.expiredLanes,s=e.suspendedLanes,a=e.pingedLanes;if(o!==0)r=o,i=K=15;else if(o=n&134217727,o!==0){var l=o&~s;l!==0?(r=ar(l),i=K):(a&=o,a!==0&&(r=ar(a),i=K))}else o=n&~s,o!==0?(r=ar(o),i=K):a!==0&&(r=ar(a),i=K);if(r===0)return 0;if(r=31-ln(r),r=n&((0>r?0:1<<r)<<1)-1,t!==0&&t!==r&&(t&s)===0){if(ar(t),i<=K)return t;K=i}if(t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-ln(t),i=1<<n,r|=e[n],t&=~i;return r}function Ag(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function cs(e,t){switch(e){case 15:return 1;case 14:return 2;case 12:return e=lr(24&~t),e===0?cs(10,t):e;case 10:return e=lr(192&~t),e===0?cs(8,t):e;case 8:return e=lr(3584&~t),e===0&&(e=lr(4186112&~t),e===0&&(e=512)),e;case 2:return t=lr(805306368&~t),t===0&&(t=268435456),t}throw Error(_(358,e))}function lr(e){return e&-e}function Xa(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Js(e,t,n){e.pendingLanes|=t;var r=t-1;e.suspendedLanes&=r,e.pingedLanes&=r,e=e.eventTimes,t=31-ln(t),e[t]=n}var ln=Math.clz32?Math.clz32:y1,m1=Math.log,v1=Math.LN2;function y1(e){return e===0?32:31-(m1(e)/v1|0)|0}var w1=fe.unstable_UserBlockingPriority,_1=fe.unstable_runWithPriority,Ko=!0;function E1(e,t,n,r){kn||uc();var i=pc,o=kn;kn=!0;try{hg(i,e,t,n,r)}finally{(kn=o)||cc()}}function S1(e,t,n,r){_1(w1,pc.bind(null,e,t,n,r))}function pc(e,t,n,r){if(Ko){var i;if((i=(t&4)===0)&&0<ut.length&&-1<ld.indexOf(e))e=Jl(null,e,t,n,r),ut.push(e);else{var o=gc(e,t,n,r);if(o===null)i&&ud(e,r);else{if(i){if(-1<ld.indexOf(e)){e=Jl(o,e,t,n,r),ut.push(e);return}if(u1(o,e,t,n,r))return;ud(e,r)}Ug(e,t,r,null,n)}}}}function gc(e,t,n,r){var i=ac(r);if(i=An(i),i!==null){var o=Yn(i);if(o===null)i=null;else{var s=o.tag;if(s===13){if(i=gg(o),i!==null)return i;i=null}else if(s===3){if(o.stateNode.hydrate)return o.tag===3?o.stateNode.containerInfo:null;i=null}else o!==i&&(i=null)}}return Ug(e,t,r,i,n),null}var Yt=null,mc=null,qo=null;function Og(){if(qo)return qo;var e,t=mc,n=t.length,r,i="value"in Yt?Yt.value:Yt.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===i[o-r];r++);return qo=i.slice(e,1<r?1-r:void 0)}function Yo(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Lo(){return!0}function fd(){return!1}function ze(e){function t(n,r,i,o,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Lo:fd,this.isPropagationStopped=fd,this}return Z(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Lo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Lo)},persist:function(){},isPersistent:Lo}),t}var jr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},vc=ze(jr),lo=Z({},jr,{view:0,detail:0}),T1=ze(lo),Ja,Qa,ei,Qs=Z({},lo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:yc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ei&&(ei&&e.type==="mousemove"?(Ja=e.screenX-ei.screenX,Qa=e.screenY-ei.screenY):Qa=Ja=0,ei=e),Ja)},movementY:function(e){return"movementY"in e?e.movementY:Qa}}),dd=ze(Qs),I1=Z({},Qs,{dataTransfer:0}),C1=ze(I1),k1=Z({},lo,{relatedTarget:0}),Za=ze(k1),A1=Z({},jr,{animationName:0,elapsedTime:0,pseudoElement:0}),O1=ze(A1),R1=Z({},jr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),P1=ze(R1),N1=Z({},jr,{data:0}),hd=ze(N1),$1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},D1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},L1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function x1(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=L1[e])?!!t[e]:!1}function yc(){return x1}var b1=Z({},lo,{key:function(e){if(e.key){var t=$1[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Yo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?D1[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:yc,charCode:function(e){return e.type==="keypress"?Yo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Yo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),M1=ze(b1),j1=Z({},Qs,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),pd=ze(j1),F1=Z({},lo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:yc}),U1=ze(F1),B1=Z({},jr,{propertyName:0,elapsedTime:0,pseudoElement:0}),z1=ze(B1),V1=Z({},Qs,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),H1=ze(V1),W1=[9,13,27,32],wc=$t&&"CompositionEvent"in window,_i=null;$t&&"documentMode"in document&&(_i=document.documentMode);var G1=$t&&"TextEvent"in window&&!_i,Rg=$t&&(!wc||_i&&8<_i&&11>=_i),gd=String.fromCharCode(32),md=!1;function Pg(e,t){switch(e){case"keyup":return W1.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ng(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var cr=!1;function K1(e,t){switch(e){case"compositionend":return Ng(t);case"keypress":return t.which!==32?null:(md=!0,gd);case"textInput":return e=t.data,e===gd&&md?null:e;default:return null}}function q1(e,t){if(cr)return e==="compositionend"||!wc&&Pg(e,t)?(e=Og(),qo=mc=Yt=null,cr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Rg&&t.locale!=="ko"?null:t.data;default:return null}}var Y1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function vd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Y1[e.type]:t==="textarea"}function $g(e,t,n,r){fg(r),t=fs(t,"onChange"),0<t.length&&(n=new vc("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Ei=null,Fi=null;function X1(e){Mg(e,0)}function Zs(e){var t=dr(e);if(ig(t))return e}function J1(e,t){if(e==="change")return t}var Dg=!1;if($t){var el;if($t){var tl="oninput"in document;if(!tl){var yd=document.createElement("div");yd.setAttribute("oninput","return;"),tl=typeof yd.oninput=="function"}el=tl}else el=!1;Dg=el&&(!document.documentMode||9<document.documentMode)}function wd(){Ei&&(Ei.detachEvent("onpropertychange",Lg),Fi=Ei=null)}function Lg(e){if(e.propertyName==="value"&&Zs(Fi)){var t=[];if($g(t,Fi,e,ac(e)),e=X1,kn)e(t);else{kn=!0;try{lc(e,t)}finally{kn=!1,cc()}}}}function Q1(e,t,n){e==="focusin"?(wd(),Ei=t,Fi=n,Ei.attachEvent("onpropertychange",Lg)):e==="focusout"&&wd()}function Z1(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Zs(Fi)}function ew(e,t){if(e==="click")return Zs(t)}function tw(e,t){if(e==="input"||e==="change")return Zs(t)}function nw(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ge=typeof Object.is=="function"?Object.is:nw,rw=Object.prototype.hasOwnProperty;function Ui(e,t){if(Ge(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++)if(!rw.call(t,n[r])||!Ge(e[n[r]],t[n[r]]))return!1;return!0}function _d(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ed(e,t){var n=_d(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=_d(n)}}function xg(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?xg(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Sd(){for(var e=window,t=as();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=as(e.document)}return t}function Ql(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var iw=$t&&"documentMode"in document&&11>=document.documentMode,fr=null,Zl=null,Si=null,eu=!1;function Td(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;eu||fr==null||fr!==as(r)||(r=fr,"selectionStart"in r&&Ql(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Si&&Ui(Si,r)||(Si=r,r=fs(Zl,"onSelect"),0<r.length&&(t=new vc("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=fr)))}hc("cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "),0);hc("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "),1);hc(d1,2);for(var Id="change selectionchange textInput compositionstart compositionend compositionupdate".split(" "),nl=0;nl<Id.length;nl++)dc.set(Id[nl],0);Pr("onMouseEnter",["mouseout","mouseover"]);Pr("onMouseLeave",["mouseout","mouseover"]);Pr("onPointerEnter",["pointerout","pointerover"]);Pr("onPointerLeave",["pointerout","pointerover"]);Kn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Kn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Kn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Kn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Kn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Kn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var fi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),bg=new Set("cancel close invalid load scroll toggle".split(" ").concat(fi));function Cd(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,a1(r,t,void 0,e),e.currentTarget=null}function Mg(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var s=r.length-1;0<=s;s--){var a=r[s],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==o&&i.isPropagationStopped())break e;Cd(i,a,u),o=l}else for(s=0;s<r.length;s++){if(a=r[s],l=a.instance,u=a.currentTarget,a=a.listener,l!==o&&i.isPropagationStopped())break e;Cd(i,a,u),o=l}}}if(us)throw e=Yl,us=!1,Yl=null,e}function q(e,t){var n=zg(t),r=e+"__bubble";n.has(r)||(Fg(t,e,2,!1),n.add(r))}var kd="_reactListening"+Math.random().toString(36).slice(2);function jg(e){e[kd]||(e[kd]=!0,tg.forEach(function(t){bg.has(t)||Ad(t,!1,e,null),Ad(t,!0,e,null)}))}function Ad(e,t,n,r){var i=4<arguments.length&&arguments[4]!==void 0?arguments[4]:0,o=n;if(e==="selectionchange"&&n.nodeType!==9&&(o=n.ownerDocument),r!==null&&!t&&bg.has(e)){if(e!=="scroll")return;i|=2,o=r}var s=zg(o),a=e+"__"+(t?"capture":"bubble");s.has(a)||(t&&(i|=4),Fg(o,e,i,t),s.add(a))}function Fg(e,t,n,r){var i=dc.get(t);switch(i===void 0?2:i){case 0:i=E1;break;case 1:i=S1;break;default:i=pc}n=i.bind(null,t,n,e),i=void 0,!ql||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Ug(e,t,n,r,i){var o=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;s=s.return}for(;a!==null;){if(s=An(a),s===null)return;if(l=s.tag,l===5||l===6){r=o=s;continue e}a=a.parentNode}}r=r.return}r1(function(){var u=o,p=ac(n),y=[];e:{var d=kg.get(e);if(d!==void 0){var w=vc,I=e;switch(e){case"keypress":if(Yo(n)===0)break e;case"keydown":case"keyup":w=M1;break;case"focusin":I="focus",w=Za;break;case"focusout":I="blur",w=Za;break;case"beforeblur":case"afterblur":w=Za;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=dd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=C1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=U1;break;case Sg:case Tg:case Ig:w=O1;break;case Cg:w=z1;break;case"scroll":w=T1;break;case"wheel":w=H1;break;case"copy":case"cut":case"paste":w=P1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=pd}var C=(t&4)!==0,f=!C&&e==="scroll",c=C?d!==null?d+"Capture":null:d;C=[];for(var h=u,v;h!==null;){v=h;var g=v.stateNode;if(v.tag===5&&g!==null&&(v=g,c!==null&&(g=xi(h,c),g!=null&&C.push(Bi(h,g,v)))),f)break;h=h.return}0<C.length&&(d=new w(d,I,null,n,p),y.push({event:d,listeners:C}))}}if((t&7)===0){e:{if(d=e==="mouseover"||e==="pointerover",w=e==="mouseout"||e==="pointerout",d&&(t&16)===0&&(I=n.relatedTarget||n.fromElement)&&(An(I)||I[Fr]))break e;if((w||d)&&(d=p.window===p?p:(d=p.ownerDocument)?d.defaultView||d.parentWindow:window,w?(I=n.relatedTarget||n.toElement,w=u,I=I?An(I):null,I!==null&&(f=Yn(I),I!==f||I.tag!==5&&I.tag!==6)&&(I=null)):(w=null,I=u),w!==I)){if(C=dd,g="onMouseLeave",c="onMouseEnter",h="mouse",(e==="pointerout"||e==="pointerover")&&(C=pd,g="onPointerLeave",c="onPointerEnter",h="pointer"),f=w==null?d:dr(w),v=I==null?d:dr(I),d=new C(g,h+"leave",w,n,p),d.target=f,d.relatedTarget=v,g=null,An(p)===u&&(C=new C(c,h+"enter",I,n,p),C.target=v,C.relatedTarget=f,g=C),f=g,w&&I)t:{for(C=w,c=I,h=0,v=C;v;v=sr(v))h++;for(v=0,g=c;g;g=sr(g))v++;for(;0<h-v;)C=sr(C),h--;for(;0<v-h;)c=sr(c),v--;for(;h--;){if(C===c||c!==null&&C===c.alternate)break t;C=sr(C),c=sr(c)}C=null}else C=null;w!==null&&Od(y,d,w,C,!1),I!==null&&f!==null&&Od(y,f,I,C,!0)}}e:{if(d=u?dr(u):window,w=d.nodeName&&d.nodeName.toLowerCase(),w==="select"||w==="input"&&d.type==="file")var S=J1;else if(vd(d))if(Dg)S=tw;else{S=Z1;var E=Q1}else(w=d.nodeName)&&w.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(S=ew);if(S&&(S=S(e,u))){$g(y,S,n,p);break e}E&&E(e,d,u),e==="focusout"&&(E=d._wrapperState)&&E.controlled&&d.type==="number"&&Ul(d,"number",d.value)}switch(E=u?dr(u):window,e){case"focusin":(vd(E)||E.contentEditable==="true")&&(fr=E,Zl=u,Si=null);break;case"focusout":Si=Zl=fr=null;break;case"mousedown":eu=!0;break;case"contextmenu":case"mouseup":case"dragend":eu=!1,Td(y,n,p);break;case"selectionchange":if(iw)break;case"keydown":case"keyup":Td(y,n,p)}var P;if(wc)e:{switch(e){case"compositionstart":var x="onCompositionStart";break e;case"compositionend":x="onCompositionEnd";break e;case"compositionupdate":x="onCompositionUpdate";break e}x=void 0}else cr?Pg(e,n)&&(x="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(x="onCompositionStart");x&&(Rg&&n.locale!=="ko"&&(cr||x!=="onCompositionStart"?x==="onCompositionEnd"&&cr&&(P=Og()):(Yt=p,mc="value"in Yt?Yt.value:Yt.textContent,cr=!0)),E=fs(u,x),0<E.length&&(x=new hd(x,e,null,n,p),y.push({event:x,listeners:E}),P?x.data=P:(P=Ng(n),P!==null&&(x.data=P)))),(P=G1?K1(e,n):q1(e,n))&&(u=fs(u,"onBeforeInput"),0<u.length&&(p=new hd("onBeforeInput","beforeinput",null,n,p),y.push({event:p,listeners:u}),p.data=P))}Mg(y,t)})}function Bi(e,t,n){return{instance:e,listener:t,currentTarget:n}}function fs(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=xi(e,n),o!=null&&r.unshift(Bi(e,o,i)),o=xi(e,t),o!=null&&r.push(Bi(e,o,i))),e=e.return}return r}function sr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Od(e,t,n,r,i){for(var o=t._reactName,s=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=xi(n,o),l!=null&&s.unshift(Bi(n,l,a))):i||(l=xi(n,o),l!=null&&s.push(Bi(n,l,a)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}function ds(){}var rl=null,il=null;function Bg(e,t){switch(e){case"button":case"input":case"select":case"textarea":return!!t.autoFocus}return!1}function tu(e,t){return e==="textarea"||e==="option"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Rd=typeof setTimeout=="function"?setTimeout:void 0,ow=typeof clearTimeout=="function"?clearTimeout:void 0;function _c(e){e.nodeType===1?e.textContent="":e.nodeType===9&&(e=e.body,e!=null&&(e.textContent=""))}function Er(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break}return e}function Pd(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var ol=0;function sw(e){return{$$typeof:oc,toString:e,valueOf:e}}var ea=Math.random().toString(36).slice(2),Xt="__reactFiber$"+ea,hs="__reactProps$"+ea,Fr="__reactContainer$"+ea,Nd="__reactEvents$"+ea;function An(e){var t=e[Xt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Fr]||n[Xt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Pd(e);e!==null;){if(n=e[Xt])return n;e=Pd(e)}return t}e=n,n=e.parentNode}return null}function uo(e){return e=e[Xt]||e[Fr],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function dr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(_(33))}function ta(e){return e[hs]||null}function zg(e){var t=e[Nd];return t===void 0&&(t=e[Nd]=new Set),t}var nu=[],hr=-1;function gn(e){return{current:e}}function X(e){0>hr||(e.current=nu[hr],nu[hr]=null,hr--)}function te(e,t){hr++,nu[hr]=e.current,e.current=t}var un={},Ce=gn(un),Me=gn(!1),Mn=un;function Nr(e,t){var n=e.type.contextTypes;if(!n)return un;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function je(e){return e=e.childContextTypes,e!=null}function ps(){X(Me),X(Ce)}function $d(e,t,n){if(Ce.current!==un)throw Error(_(168));te(Ce,t),te(Me,n)}function Vg(e,t,n){var r=e.stateNode;if(e=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(_(108,vr(t)||"Unknown",i));return Z({},n,r)}function Xo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||un,Mn=Ce.current,te(Ce,e),te(Me,Me.current),!0}function Dd(e,t,n){var r=e.stateNode;if(!r)throw Error(_(169));n?(e=Vg(e,t,Mn),r.__reactInternalMemoizedMergedChildContext=e,X(Me),X(Ce),te(Ce,e)):X(Me),te(Me,n)}var Ec=null,Ln=null,aw=fe.unstable_runWithPriority,Sc=fe.unstable_scheduleCallback,ru=fe.unstable_cancelCallback,lw=fe.unstable_shouldYield,Ld=fe.unstable_requestPaint,iu=fe.unstable_now,uw=fe.unstable_getCurrentPriorityLevel,na=fe.unstable_ImmediatePriority,Hg=fe.unstable_UserBlockingPriority,Wg=fe.unstable_NormalPriority,Gg=fe.unstable_LowPriority,Kg=fe.unstable_IdlePriority,sl={},cw=Ld!==void 0?Ld:function(){},It=null,Jo=null,al=!1,xd=iu(),Se=1e4>xd?iu:function(){return iu()-xd};function $r(){switch(uw()){case na:return 99;case Hg:return 98;case Wg:return 97;case Gg:return 96;case Kg:return 95;default:throw Error(_(332))}}function qg(e){switch(e){case 99:return na;case 98:return Hg;case 97:return Wg;case 96:return Gg;case 95:return Kg;default:throw Error(_(332))}}function jn(e,t){return e=qg(e),aw(e,t)}function zi(e,t,n){return e=qg(e),Sc(e,t,n)}function wt(){if(Jo!==null){var e=Jo;Jo=null,ru(e)}Yg()}function Yg(){if(!al&&It!==null){al=!0;var e=0;try{var t=It;jn(99,function(){for(;e<t.length;e++){var n=t[e];do n=n(!0);while(n!==null)}}),It=null}catch(n){throw It!==null&&(It=It.slice(e+1)),Sc(na,wt),n}finally{al=!1}}}var fw=qn.ReactCurrentBatchConfig;function rt(e,t){if(e&&e.defaultProps){t=Z({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var gs=gn(null),ms=null,pr=null,vs=null;function Tc(){vs=pr=ms=null}function Ic(e){var t=gs.current;X(gs),e.type._context._currentValue=t}function Xg(e,t){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)===t){if(n===null||(n.childLanes&t)===t)break;n.childLanes|=t}else e.childLanes|=t,n!==null&&(n.childLanes|=t);e=e.return}}function Sr(e,t){ms=e,vs=pr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(it=!0),e.firstContext=null)}function Ye(e,t){if(vs!==e&&t!==!1&&t!==0)if((typeof t!="number"||t===1073741823)&&(vs=e,t=1073741823),t={context:e,observedBits:t,next:null},pr===null){if(ms===null)throw Error(_(308));pr=t,ms.dependencies={lanes:0,firstContext:t,responders:null}}else pr=pr.next=t;return e._currentValue}var Vt=!1;function Cc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null},effects:null}}function Jg(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function tn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function nn(e,t){if(e=e.updateQueue,e!==null){e=e.shared;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}}function bd(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Vi(e,t,n,r){var i=e.updateQueue;Vt=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,s===null?o=u:s.next=u,s=l;var p=e.alternate;if(p!==null){p=p.updateQueue;var y=p.lastBaseUpdate;y!==s&&(y===null?p.firstBaseUpdate=u:y.next=u,p.lastBaseUpdate=l)}}if(o!==null){y=i.baseState,s=0,p=u=l=null;do{a=o.lane;var d=o.eventTime;if((r&a)===a){p!==null&&(p=p.next={eventTime:d,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var w=e,I=o;switch(a=t,d=n,I.tag){case 1:if(w=I.payload,typeof w=="function"){y=w.call(d,y,a);break e}y=w;break e;case 3:w.flags=w.flags&-4097|64;case 0:if(w=I.payload,a=typeof w=="function"?w.call(d,y,a):w,a==null)break e;y=Z({},y,a);break e;case 2:Vt=!0}}o.callback!==null&&(e.flags|=32,a=i.effects,a===null?i.effects=[o]:a.push(o))}else d={eventTime:d,lane:a,tag:o.tag,payload:o.payload,callback:o.callback,next:null},p===null?(u=p=d,l=y):p=p.next=d,s|=a;if(o=o.next,o===null){if(a=i.shared.pending,a===null)break;o=a.next,a.next=null,i.lastBaseUpdate=a,i.shared.pending=null}}while(1);p===null&&(l=y),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=p,fo|=s,e.lanes=s,e.memoizedState=y}}function Md(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(_(191,i));i.call(r)}}}var Qg=new Ks.Component().refs;function ys(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Z({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ra={isMounted:function(e){return(e=e._reactInternals)?Yn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ue(),i=rn(e),o=tn(r,i);o.payload=t,n!=null&&(o.callback=n),nn(e,o),on(e,i,r)},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ue(),i=rn(e),o=tn(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),nn(e,o),on(e,i,r)},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ue(),r=rn(e),i=tn(n,r);i.tag=2,t!=null&&(i.callback=t),nn(e,i),on(e,r,n)}};function jd(e,t,n,r,i,o,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,s):t.prototype&&t.prototype.isPureReactComponent?!Ui(n,r)||!Ui(i,o):!0}function Zg(e,t,n){var r=!1,i=un,o=t.contextType;return typeof o=="object"&&o!==null?o=Ye(o):(i=je(t)?Mn:Ce.current,r=t.contextTypes,o=(r=r!=null)?Nr(e,i):un),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ra,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function Fd(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ra.enqueueReplaceState(t,t.state,null)}function ou(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=Qg,Cc(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=Ye(o):(o=je(t)?Mn:Ce.current,i.context=Nr(e,o)),Vi(e,n,i,r),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(ys(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&ra.enqueueReplaceState(i,i.state,null),Vi(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4)}var xo=Array.isArray;function ti(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(_(309));var r=n.stateNode}if(!r)throw Error(_(147,e));var i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(o){var s=r.refs;s===Qg&&(s=r.refs={}),o===null?delete s[i]:s[i]=o},t._stringRef=i,t)}if(typeof e!="string")throw Error(_(284));if(!n._owner)throw Error(_(290,e))}return e}function bo(e,t){if(e.type!=="textarea")throw Error(_(31,Object.prototype.toString.call(t)==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":t))}function em(e){function t(f,c){if(e){var h=f.lastEffect;h!==null?(h.nextEffect=c,f.lastEffect=c):f.firstEffect=f.lastEffect=c,c.nextEffect=null,c.flags=8}}function n(f,c){if(!e)return null;for(;c!==null;)t(f,c),c=c.sibling;return null}function r(f,c){for(f=new Map;c!==null;)c.key!==null?f.set(c.key,c):f.set(c.index,c),c=c.sibling;return f}function i(f,c){return f=fn(f,c),f.index=0,f.sibling=null,f}function o(f,c,h){return f.index=h,e?(h=f.alternate,h!==null?(h=h.index,h<c?(f.flags=2,c):h):(f.flags=2,c)):c}function s(f){return e&&f.alternate===null&&(f.flags=2),f}function a(f,c,h,v){return c===null||c.tag!==6?(c=dl(h,f.mode,v),c.return=f,c):(c=i(c,h),c.return=f,c)}function l(f,c,h,v){return c!==null&&c.elementType===h.type?(v=i(c,h.props),v.ref=ti(f,c,h),v.return=f,v):(v=ts(h.type,h.key,h.props,null,f.mode,v),v.ref=ti(f,c,h),v.return=f,v)}function u(f,c,h,v){return c===null||c.tag!==4||c.stateNode.containerInfo!==h.containerInfo||c.stateNode.implementation!==h.implementation?(c=hl(h,f.mode,v),c.return=f,c):(c=i(c,h.children||[]),c.return=f,c)}function p(f,c,h,v,g){return c===null||c.tag!==7?(c=kr(h,f.mode,v,g),c.return=f,c):(c=i(c,h),c.return=f,c)}function y(f,c,h){if(typeof c=="string"||typeof c=="number")return c=dl(""+c,f.mode,h),c.return=f,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case ui:return h=ts(c.type,c.key,c.props,null,f.mode,h),h.ref=ti(f,null,c),h.return=f,h;case Cn:return c=hl(c,f.mode,h),c.return=f,c}if(xo(c)||Yr(c))return c=kr(c,f.mode,h,null),c.return=f,c;bo(f,c)}return null}function d(f,c,h,v){var g=c!==null?c.key:null;if(typeof h=="string"||typeof h=="number")return g!==null?null:a(f,c,""+h,v);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case ui:return h.key===g?h.type===Ht?p(f,c,h.props.children,v,g):l(f,c,h,v):null;case Cn:return h.key===g?u(f,c,h,v):null}if(xo(h)||Yr(h))return g!==null?null:p(f,c,h,v,null);bo(f,h)}return null}function w(f,c,h,v,g){if(typeof v=="string"||typeof v=="number")return f=f.get(h)||null,a(c,f,""+v,g);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case ui:return f=f.get(v.key===null?h:v.key)||null,v.type===Ht?p(c,f,v.props.children,g,v.key):l(c,f,v,g);case Cn:return f=f.get(v.key===null?h:v.key)||null,u(c,f,v,g)}if(xo(v)||Yr(v))return f=f.get(h)||null,p(c,f,v,g,null);bo(c,v)}return null}function I(f,c,h,v){for(var g=null,S=null,E=c,P=c=0,x=null;E!==null&&P<h.length;P++){E.index>P?(x=E,E=null):x=E.sibling;var R=d(f,E,h[P],v);if(R===null){E===null&&(E=x);break}e&&E&&R.alternate===null&&t(f,E),c=o(R,c,P),S===null?g=R:S.sibling=R,S=R,E=x}if(P===h.length)return n(f,E),g;if(E===null){for(;P<h.length;P++)E=y(f,h[P],v),E!==null&&(c=o(E,c,P),S===null?g=E:S.sibling=E,S=E);return g}for(E=r(f,E);P<h.length;P++)x=w(E,f,P,h[P],v),x!==null&&(e&&x.alternate!==null&&E.delete(x.key===null?P:x.key),c=o(x,c,P),S===null?g=x:S.sibling=x,S=x);return e&&E.forEach(function(ne){return t(f,ne)}),g}function C(f,c,h,v){var g=Yr(h);if(typeof g!="function")throw Error(_(150));if(h=g.call(h),h==null)throw Error(_(151));for(var S=g=null,E=c,P=c=0,x=null,R=h.next();E!==null&&!R.done;P++,R=h.next()){E.index>P?(x=E,E=null):x=E.sibling;var ne=d(f,E,R.value,v);if(ne===null){E===null&&(E=x);break}e&&E&&ne.alternate===null&&t(f,E),c=o(ne,c,P),S===null?g=ne:S.sibling=ne,S=ne,E=x}if(R.done)return n(f,E),g;if(E===null){for(;!R.done;P++,R=h.next())R=y(f,R.value,v),R!==null&&(c=o(R,c,P),S===null?g=R:S.sibling=R,S=R);return g}for(E=r(f,E);!R.done;P++,R=h.next())R=w(E,f,P,R.value,v),R!==null&&(e&&R.alternate!==null&&E.delete(R.key===null?P:R.key),c=o(R,c,P),S===null?g=R:S.sibling=R,S=R);return e&&E.forEach(function(Ae){return t(f,Ae)}),g}return function(f,c,h,v){var g=typeof h=="object"&&h!==null&&h.type===Ht&&h.key===null;g&&(h=h.props.children);var S=typeof h=="object"&&h!==null;if(S)switch(h.$$typeof){case ui:e:{for(S=h.key,g=c;g!==null;){if(g.key===S){switch(g.tag){case 7:if(h.type===Ht){n(f,g.sibling),c=i(g,h.props.children),c.return=f,f=c;break e}break;default:if(g.elementType===h.type){n(f,g.sibling),c=i(g,h.props),c.ref=ti(f,g,h),c.return=f,f=c;break e}}n(f,g);break}else t(f,g);g=g.sibling}h.type===Ht?(c=kr(h.props.children,f.mode,v,h.key),c.return=f,f=c):(v=ts(h.type,h.key,h.props,null,f.mode,v),v.ref=ti(f,c,h),v.return=f,f=v)}return s(f);case Cn:e:{for(g=h.key;c!==null;){if(c.key===g)if(c.tag===4&&c.stateNode.containerInfo===h.containerInfo&&c.stateNode.implementation===h.implementation){n(f,c.sibling),c=i(c,h.children||[]),c.return=f,f=c;break e}else{n(f,c);break}else t(f,c);c=c.sibling}c=hl(h,f.mode,v),c.return=f,f=c}return s(f)}if(typeof h=="string"||typeof h=="number")return h=""+h,c!==null&&c.tag===6?(n(f,c.sibling),c=i(c,h),c.return=f,f=c):(n(f,c),c=dl(h,f.mode,v),c.return=f,f=c),s(f);if(xo(h))return I(f,c,h,v);if(Yr(h))return C(f,c,h,v);if(S&&bo(f,h),typeof h=="undefined"&&!g)switch(f.tag){case 1:case 22:case 0:case 11:case 15:throw Error(_(152,vr(f.type)||"Component"))}return n(f,c)}}var ws=em(!0),tm=em(!1),co={},pt=gn(co),Hi=gn(co),Wi=gn(co);function On(e){if(e===co)throw Error(_(174));return e}function su(e,t){switch(te(Wi,t),te(Hi,e),te(pt,co),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Hl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Hl(t,e)}X(pt),te(pt,t)}function Dr(){X(pt),X(Hi),X(Wi)}function Ud(e){On(Wi.current);var t=On(pt.current),n=Hl(t,e.type);t!==n&&(te(Hi,e),te(pt,n))}function kc(e){Hi.current===e&&(X(pt),X(Hi))}var ee=gn(0);function _s(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&64)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var kt=null,Jt=null,gt=!1;function nm(e,t){var n=Ke(5,null,null,0);n.elementType="DELETED",n.type="DELETED",n.stateNode=t,n.return=e,n.flags=8,e.lastEffect!==null?(e.lastEffect.nextEffect=n,e.lastEffect=n):e.firstEffect=e.lastEffect=n}function Bd(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,!0):!1;case 13:return!1;default:return!1}}function au(e){if(gt){var t=Jt;if(t){var n=t;if(!Bd(e,t)){if(t=Er(n.nextSibling),!t||!Bd(e,t)){e.flags=e.flags&-1025|2,gt=!1,kt=e;return}nm(kt,n)}kt=e,Jt=Er(t.firstChild)}else e.flags=e.flags&-1025|2,gt=!1,kt=e}}function zd(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;kt=e}function Mo(e){if(e!==kt)return!1;if(!gt)return zd(e),gt=!0,!1;var t=e.type;if(e.tag!==5||t!=="head"&&t!=="body"&&!tu(t,e.memoizedProps))for(t=Jt;t;)nm(e,t),t=Er(t.nextSibling);if(zd(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(_(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Jt=Er(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Jt=null}}else Jt=kt?Er(e.stateNode.nextSibling):null;return!0}function ll(){Jt=kt=null,gt=!1}var Tr=[];function Ac(){for(var e=0;e<Tr.length;e++)Tr[e]._workInProgressVersionPrimary=null;Tr.length=0}var Ti=qn.ReactCurrentDispatcher,qe=qn.ReactCurrentBatchConfig,Gi=0,ie=null,Ee=null,ge=null,Es=!1,Ii=!1;function Le(){throw Error(_(321))}function Oc(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ge(e[n],t[n]))return!1;return!0}function Rc(e,t,n,r,i,o){if(Gi=o,ie=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ti.current=e===null||e.memoizedState===null?hw:pw,e=n(r,i),Ii){o=0;do{if(Ii=!1,!(25>o))throw Error(_(301));o+=1,ge=Ee=null,t.updateQueue=null,Ti.current=gw,e=n(r,i)}while(Ii)}if(Ti.current=Cs,t=Ee!==null&&Ee.next!==null,Gi=0,ge=Ee=ie=null,Es=!1,t)throw Error(_(300));return e}function Rn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ge===null?ie.memoizedState=ge=e:ge=ge.next=e,ge}function Xn(){if(Ee===null){var e=ie.alternate;e=e!==null?e.memoizedState:null}else e=Ee.next;var t=ge===null?ie.memoizedState:ge.next;if(t!==null)ge=t,Ee=e;else{if(e===null)throw Error(_(310));Ee=e,e={memoizedState:Ee.memoizedState,baseState:Ee.baseState,baseQueue:Ee.baseQueue,queue:Ee.queue,next:null},ge===null?ie.memoizedState=ge=e:ge=ge.next=e}return ge}function ct(e,t){return typeof t=="function"?t(e):t}function ni(e){var t=Xn(),n=t.queue;if(n===null)throw Error(_(311));n.lastRenderedReducer=e;var r=Ee,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(i!==null){i=i.next,r=r.baseState;var a=s=o=null,l=i;do{var u=l.lane;if((Gi&u)===u)a!==null&&(a=a.next={lane:0,action:l.action,eagerReducer:l.eagerReducer,eagerState:l.eagerState,next:null}),r=l.eagerReducer===e?l.eagerState:e(r,l.action);else{var p={lane:u,action:l.action,eagerReducer:l.eagerReducer,eagerState:l.eagerState,next:null};a===null?(s=a=p,o=r):a=a.next=p,ie.lanes|=u,fo|=u}l=l.next}while(l!==null&&l!==i);a===null?o=r:a.next=s,Ge(r,t.memoizedState)||(it=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=a,n.lastRenderedState=r}return[t.memoizedState,n.dispatch]}function ri(e){var t=Xn(),n=t.queue;if(n===null)throw Error(_(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=e(o,s.action),s=s.next;while(s!==i);Ge(o,t.memoizedState)||(it=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Vd(e,t,n){var r=t._getVersion;r=r(t._source);var i=t._workInProgressVersionPrimary;if(i!==null?e=i===r:(e=e.mutableReadLanes,(e=(Gi&e)===e)&&(t._workInProgressVersionPrimary=r,Tr.push(t))),e)return n(t._source);throw Tr.push(t),Error(_(350))}function rm(e,t,n,r){var i=Ne;if(i===null)throw Error(_(349));var o=t._getVersion,s=o(t._source),a=Ti.current,l=a.useState(function(){return Vd(i,t,n)}),u=l[1],p=l[0];l=ge;var y=e.memoizedState,d=y.refs,w=d.getSnapshot,I=y.source;y=y.subscribe;var C=ie;return e.memoizedState={refs:d,source:t,subscribe:r},a.useEffect(function(){d.getSnapshot=n,d.setSnapshot=u;var f=o(t._source);if(!Ge(s,f)){f=n(t._source),Ge(p,f)||(u(f),f=rn(C),i.mutableReadLanes|=f&i.pendingLanes),f=i.mutableReadLanes,i.entangledLanes|=f;for(var c=i.entanglements,h=f;0<h;){var v=31-ln(h),g=1<<v;c[v]|=f,h&=~g}}},[n,t,r]),a.useEffect(function(){return r(t._source,function(){var f=d.getSnapshot,c=d.setSnapshot;try{c(f(t._source));var h=rn(C);i.mutableReadLanes|=h&i.pendingLanes}catch(v){c(function(){throw v})}})},[t,r]),Ge(w,n)&&Ge(I,t)&&Ge(y,r)||(e={pending:null,dispatch:null,lastRenderedReducer:ct,lastRenderedState:p},e.dispatch=u=$c.bind(null,ie,e),l.queue=e,l.baseQueue=null,p=Vd(i,t,n),l.memoizedState=l.baseState=p),p}function im(e,t,n){var r=Xn();return rm(r,e,t,n)}function ii(e){var t=Rn();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e=t.queue={pending:null,dispatch:null,lastRenderedReducer:ct,lastRenderedState:e},e=e.dispatch=$c.bind(null,ie,e),[t.memoizedState,e]}function Ss(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ie.updateQueue,t===null?(t={lastEffect:null},ie.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Hd(e){var t=Rn();return e={current:e},t.memoizedState=e}function Ts(){return Xn().memoizedState}function lu(e,t,n,r){var i=Rn();ie.flags|=e,i.memoizedState=Ss(1|t,n,void 0,r===void 0?null:r)}function Pc(e,t,n,r){var i=Xn();r=r===void 0?null:r;var o=void 0;if(Ee!==null){var s=Ee.memoizedState;if(o=s.destroy,r!==null&&Oc(r,s.deps)){Ss(t,n,o,r);return}}ie.flags|=e,i.memoizedState=Ss(1|t,n,o,r)}function Wd(e,t){return lu(516,4,e,t)}function Is(e,t){return Pc(516,4,e,t)}function om(e,t){return Pc(4,2,e,t)}function sm(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function am(e,t,n){return n=n!=null?n.concat([e]):null,Pc(4,2,sm.bind(null,t,e),n)}function Nc(){}function lm(e,t){var n=Xn();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Oc(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function um(e,t){var n=Xn();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Oc(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function dw(e,t){var n=$r();jn(98>n?98:n,function(){e(!0)}),jn(97<n?97:n,function(){var r=qe.transition;qe.transition=1;try{e(!1),t()}finally{qe.transition=r}})}function $c(e,t,n){var r=Ue(),i=rn(e),o={lane:i,action:n,eagerReducer:null,eagerState:null,next:null},s=t.pending;if(s===null?o.next=o:(o.next=s.next,s.next=o),t.pending=o,s=e.alternate,e===ie||s!==null&&s===ie)Ii=Es=!0;else{if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var a=t.lastRenderedState,l=s(a,n);if(o.eagerReducer=s,o.eagerState=l,Ge(l,a))return}catch{}finally{}on(e,i,r)}}var Cs={readContext:Ye,useCallback:Le,useContext:Le,useEffect:Le,useImperativeHandle:Le,useLayoutEffect:Le,useMemo:Le,useReducer:Le,useRef:Le,useState:Le,useDebugValue:Le,useDeferredValue:Le,useTransition:Le,useMutableSource:Le,useOpaqueIdentifier:Le,unstable_isNewReconciler:!1},hw={readContext:Ye,useCallback:function(e,t){return Rn().memoizedState=[e,t===void 0?null:t],e},useContext:Ye,useEffect:Wd,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,lu(4,2,sm.bind(null,t,e),n)},useLayoutEffect:function(e,t){return lu(4,2,e,t)},useMemo:function(e,t){var n=Rn();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Rn();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e=r.queue={pending:null,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},e=e.dispatch=$c.bind(null,ie,e),[r.memoizedState,e]},useRef:Hd,useState:ii,useDebugValue:Nc,useDeferredValue:function(e){var t=ii(e),n=t[0],r=t[1];return Wd(function(){var i=qe.transition;qe.transition=1;try{r(e)}finally{qe.transition=i}},[e]),n},useTransition:function(){var e=ii(!1),t=e[0];return e=dw.bind(null,e[1]),Hd(e),[e,t]},useMutableSource:function(e,t,n){var r=Rn();return r.memoizedState={refs:{getSnapshot:t,setSnapshot:null},source:e,subscribe:n},rm(r,e,t,n)},useOpaqueIdentifier:function(){if(gt){var e=!1,t=sw(function(){throw e||(e=!0,n("r:"+(ol++).toString(36))),Error(_(355))}),n=ii(t)[1];return(ie.mode&2)===0&&(ie.flags|=516,Ss(5,function(){n("r:"+(ol++).toString(36))},void 0,null)),t}return t="r:"+(ol++).toString(36),ii(t),t},unstable_isNewReconciler:!1},pw={readContext:Ye,useCallback:lm,useContext:Ye,useEffect:Is,useImperativeHandle:am,useLayoutEffect:om,useMemo:um,useReducer:ni,useRef:Ts,useState:function(){return ni(ct)},useDebugValue:Nc,useDeferredValue:function(e){var t=ni(ct),n=t[0],r=t[1];return Is(function(){var i=qe.transition;qe.transition=1;try{r(e)}finally{qe.transition=i}},[e]),n},useTransition:function(){var e=ni(ct)[0];return[Ts().current,e]},useMutableSource:im,useOpaqueIdentifier:function(){return ni(ct)[0]},unstable_isNewReconciler:!1},gw={readContext:Ye,useCallback:lm,useContext:Ye,useEffect:Is,useImperativeHandle:am,useLayoutEffect:om,useMemo:um,useReducer:ri,useRef:Ts,useState:function(){return ri(ct)},useDebugValue:Nc,useDeferredValue:function(e){var t=ri(ct),n=t[0],r=t[1];return Is(function(){var i=qe.transition;qe.transition=1;try{r(e)}finally{qe.transition=i}},[e]),n},useTransition:function(){var e=ri(ct)[0];return[Ts().current,e]},useMutableSource:im,useOpaqueIdentifier:function(){return ri(ct)[0]},unstable_isNewReconciler:!1},mw=qn.ReactCurrentOwner,it=!1;function xe(e,t,n,r){t.child=e===null?tm(t,null,n,r):ws(t,e.child,n,r)}function Gd(e,t,n,r,i){n=n.render;var o=t.ref;return Sr(t,i),r=Rc(e,t,n,r,o,i),e!==null&&!it?(t.updateQueue=e.updateQueue,t.flags&=-517,e.lanes&=~i,At(e,t,i)):(t.flags|=1,xe(e,t,r,i),t.child)}function Kd(e,t,n,r,i,o){if(e===null){var s=n.type;return typeof s=="function"&&!jc(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=s,cm(e,t,s,r,i,o)):(e=ts(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}return s=e.child,(i&o)===0&&(i=s.memoizedProps,n=n.compare,n=n!==null?n:Ui,n(i,r)&&e.ref===t.ref)?At(e,t,o):(t.flags|=1,e=fn(s,r),e.ref=t.ref,e.return=t,t.child=e)}function cm(e,t,n,r,i,o){if(e!==null&&Ui(e.memoizedProps,r)&&e.ref===t.ref)if(it=!1,(o&i)!==0)(e.flags&16384)!==0&&(it=!0);else return t.lanes=e.lanes,At(e,t,o);return uu(e,t,n,r,o)}function ul(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden"||r.mode==="unstable-defer-without-hiding")if((t.mode&4)===0)t.memoizedState={baseLanes:0},Fo(t,n);else if((n&1073741824)!==0)t.memoizedState={baseLanes:0},Fo(t,o!==null?o.baseLanes:n);else return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e},Fo(t,e),null;else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,Fo(t,r);return xe(e,t,i,n),t.child}function fm(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=128)}function uu(e,t,n,r,i){var o=je(n)?Mn:Ce.current;return o=Nr(t,o),Sr(t,i),n=Rc(e,t,n,r,o,i),e!==null&&!it?(t.updateQueue=e.updateQueue,t.flags&=-517,e.lanes&=~i,At(e,t,i)):(t.flags|=1,xe(e,t,n,i),t.child)}function qd(e,t,n,r,i){if(je(n)){var o=!0;Xo(t)}else o=!1;if(Sr(t,i),t.stateNode===null)e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2),Zg(t,n,r),ou(t,n,r,i),r=!0;else if(e===null){var s=t.stateNode,a=t.memoizedProps;s.props=a;var l=s.context,u=n.contextType;typeof u=="object"&&u!==null?u=Ye(u):(u=je(n)?Mn:Ce.current,u=Nr(t,u));var p=n.getDerivedStateFromProps,y=typeof p=="function"||typeof s.getSnapshotBeforeUpdate=="function";y||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==r||l!==u)&&Fd(t,s,r,u),Vt=!1;var d=t.memoizedState;s.state=d,Vi(t,r,s,i),l=t.memoizedState,a!==r||d!==l||Me.current||Vt?(typeof p=="function"&&(ys(t,n,p,r),l=t.memoizedState),(a=Vt||jd(t,n,a,r,d,l,u))?(y||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4)):(typeof s.componentDidMount=="function"&&(t.flags|=4),t.memoizedProps=r,t.memoizedState=l),s.props=r,s.state=l,s.context=u,r=a):(typeof s.componentDidMount=="function"&&(t.flags|=4),r=!1)}else{s=t.stateNode,Jg(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:rt(t.type,a),s.props=u,y=t.pendingProps,d=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=Ye(l):(l=je(n)?Mn:Ce.current,l=Nr(t,l));var w=n.getDerivedStateFromProps;(p=typeof w=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==y||d!==l)&&Fd(t,s,r,l),Vt=!1,d=t.memoizedState,s.state=d,Vi(t,r,s,i);var I=t.memoizedState;a!==y||d!==I||Me.current||Vt?(typeof w=="function"&&(ys(t,n,w,r),I=t.memoizedState),(u=Vt||jd(t,n,u,r,d,I,l))?(p||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,I,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,I,l)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=256)):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&d===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&d===e.memoizedState||(t.flags|=256),t.memoizedProps=r,t.memoizedState=I),s.props=r,s.state=I,s.context=l,r=u):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&d===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&d===e.memoizedState||(t.flags|=256),r=!1)}return cu(e,t,n,r,o,i)}function cu(e,t,n,r,i,o){fm(e,t);var s=(t.flags&64)!==0;if(!r&&!s)return i&&Dd(t,n,!1),At(e,t,o);r=t.stateNode,mw.current=t;var a=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=ws(t,e.child,null,o),t.child=ws(t,null,a,o)):xe(e,t,a,o),t.memoizedState=r.state,i&&Dd(t,n,!0),t.child}function Yd(e){var t=e.stateNode;t.pendingContext?$d(e,t.pendingContext,t.pendingContext!==t.context):t.context&&$d(e,t.context,!1),su(e,t.containerInfo)}var jo={dehydrated:null,retryLane:0};function Xd(e,t,n){var r=t.pendingProps,i=ee.current,o=!1,s;return(s=(t.flags&64)!==0)||(s=e!==null&&e.memoizedState===null?!1:(i&2)!==0),s?(o=!0,t.flags&=-65):e!==null&&e.memoizedState===null||r.fallback===void 0||r.unstable_avoidThisFallback===!0||(i|=1),te(ee,i&1),e===null?(r.fallback!==void 0&&au(t),e=r.children,i=r.fallback,o?(e=Jd(t,e,i,n),t.child.memoizedState={baseLanes:n},t.memoizedState=jo,e):typeof r.unstable_expectedLoadTime=="number"?(e=Jd(t,e,i,n),t.child.memoizedState={baseLanes:n},t.memoizedState=jo,t.lanes=33554432,e):(n=Fc({mode:"visible",children:e},t.mode,n,null),n.return=t,t.child=n)):e.memoizedState!==null?o?(r=Zd(e,t,r.children,r.fallback,n),o=t.child,i=e.child.memoizedState,o.memoizedState=i===null?{baseLanes:n}:{baseLanes:i.baseLanes|n},o.childLanes=e.childLanes&~n,t.memoizedState=jo,r):(n=Qd(e,t,r.children,n),t.memoizedState=null,n):o?(r=Zd(e,t,r.children,r.fallback,n),o=t.child,i=e.child.memoizedState,o.memoizedState=i===null?{baseLanes:n}:{baseLanes:i.baseLanes|n},o.childLanes=e.childLanes&~n,t.memoizedState=jo,r):(n=Qd(e,t,r.children,n),t.memoizedState=null,n)}function Jd(e,t,n,r){var i=e.mode,o=e.child;return t={mode:"hidden",children:t},(i&2)===0&&o!==null?(o.childLanes=0,o.pendingProps=t):o=Fc(t,i,0,null),n=kr(n,i,r,null),o.return=e,n.return=e,o.sibling=n,e.child=o,n}function Qd(e,t,n,r){var i=e.child;return e=i.sibling,n=fn(i,{mode:"visible",children:n}),(t.mode&2)===0&&(n.lanes=r),n.return=t,n.sibling=null,e!==null&&(e.nextEffect=null,e.flags=8,t.firstEffect=t.lastEffect=e),t.child=n}function Zd(e,t,n,r,i){var o=t.mode,s=e.child;e=s.sibling;var a={mode:"hidden",children:n};return(o&2)===0&&t.child!==s?(n=t.child,n.childLanes=0,n.pendingProps=a,s=n.lastEffect,s!==null?(t.firstEffect=n.firstEffect,t.lastEffect=s,s.nextEffect=null):t.firstEffect=t.lastEffect=null):n=fn(s,a),e!==null?r=fn(e,r):(r=kr(r,o,i,null),r.flags|=2),r.return=t,n.return=t,n.sibling=r,t.child=n,r}function eh(e,t){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),Xg(e.return,t)}function cl(e,t,n,r,i,o){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,lastEffect:o}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i,s.lastEffect=o)}function th(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(xe(e,t,r.children,n),r=ee.current,(r&2)!==0)r=r&1|2,t.flags|=64;else{if(e!==null&&(e.flags&64)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&eh(e,n);else if(e.tag===19)eh(e,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(te(ee,r),(t.mode&2)===0)t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&_s(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),cl(t,!1,i,n,o,t.lastEffect);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&_s(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}cl(t,!0,n,null,o,t.lastEffect);break;case"together":cl(t,!1,null,null,void 0,t.lastEffect);break;default:t.memoizedState=null}return t.child}function At(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),fo|=t.lanes,(n&t.childLanes)!==0){if(e!==null&&t.child!==e.child)throw Error(_(153));if(t.child!==null){for(e=t.child,n=fn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=fn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}return null}var dm,fu,hm,pm;dm=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};fu=function(){};hm=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,On(pt.current);var o=null;switch(n){case"input":i=jl(e,i),r=jl(e,r),o=[];break;case"option":i=Bl(e,i),r=Bl(e,r),o=[];break;case"select":i=Z({},i,{value:void 0}),r=Z({},r,{value:void 0}),o=[];break;case"textarea":i=zl(e,i),r=zl(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=ds)}Wl(n,r);var s;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Di.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(o||(o=[]),o.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(o=o||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Di.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&q("scroll",e),o||a===l||(o=[])):typeof l=="object"&&l!==null&&l.$$typeof===oc?l.toString():(o=o||[]).push(u,l))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};pm=function(e,t,n,r){n!==r&&(t.flags|=4)};function oi(e,t){if(!gt)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function vw(e,t,n){var r=t.pendingProps;switch(t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return null;case 1:return je(t.type)&&ps(),null;case 3:return Dr(),X(Me),X(Ce),Ac(),r=t.stateNode,r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Mo(t)?t.flags|=4:r.hydrate||(t.flags|=256)),fu(t),null;case 5:kc(t);var i=On(Wi.current);if(n=t.type,e!==null&&t.stateNode!=null)hm(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=128);else{if(!r){if(t.stateNode===null)throw Error(_(166));return null}if(e=On(pt.current),Mo(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[Xt]=t,r[hs]=o,n){case"dialog":q("cancel",r),q("close",r);break;case"iframe":case"object":case"embed":q("load",r);break;case"video":case"audio":for(e=0;e<fi.length;e++)q(fi[e],r);break;case"source":q("error",r);break;case"img":case"image":case"link":q("error",r),q("load",r);break;case"details":q("toggle",r);break;case"input":td(r,o),q("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},q("invalid",r);break;case"textarea":rd(r,o),q("invalid",r)}Wl(n,o),e=null;for(var s in o)o.hasOwnProperty(s)&&(i=o[s],s==="children"?typeof i=="string"?r.textContent!==i&&(e=["children",i]):typeof i=="number"&&r.textContent!==""+i&&(e=["children",""+i]):Di.hasOwnProperty(s)&&i!=null&&s==="onScroll"&&q("scroll",r));switch(n){case"input":No(r),nd(r,o,!0);break;case"textarea":No(r),id(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=ds)}r=e,t.updateQueue=r,r!==null&&(t.flags|=4)}else{switch(s=i.nodeType===9?i:i.ownerDocument,e===Vl.html&&(e=ag(n)),e===Vl.html?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[Xt]=t,e[hs]=r,dm(e,t,!1,!1),t.stateNode=e,s=Gl(n,r),n){case"dialog":q("cancel",e),q("close",e),i=r;break;case"iframe":case"object":case"embed":q("load",e),i=r;break;case"video":case"audio":for(i=0;i<fi.length;i++)q(fi[i],e);i=r;break;case"source":q("error",e),i=r;break;case"img":case"image":case"link":q("error",e),q("load",e),i=r;break;case"details":q("toggle",e),i=r;break;case"input":td(e,r),i=jl(e,r),q("invalid",e);break;case"option":i=Bl(e,r);break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=Z({},r,{value:void 0}),q("invalid",e);break;case"textarea":rd(e,r),i=zl(e,r),q("invalid",e);break;default:i=r}Wl(n,i);var a=i;for(o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="style"?cg(e,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&lg(e,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Li(e,l):typeof l=="number"&&Li(e,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Di.hasOwnProperty(o)?l!=null&&o==="onScroll"&&q("scroll",e):l!=null&&Zu(e,o,l,s))}switch(n){case"input":No(e),nd(e,r,!1);break;case"textarea":No(e),id(e);break;case"option":r.value!=null&&e.setAttribute("value",""+an(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?yr(e,!!r.multiple,o,!1):r.defaultValue!=null&&yr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=ds)}Bg(n,r)&&(t.flags|=4)}t.ref!==null&&(t.flags|=128)}return null;case 6:if(e&&t.stateNode!=null)pm(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(_(166));n=On(Wi.current),On(pt.current),Mo(t)?(r=t.stateNode,n=t.memoizedProps,r[Xt]=t,r.nodeValue!==n&&(t.flags|=4)):(r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Xt]=t,t.stateNode=r)}return null;case 13:return X(ee),r=t.memoizedState,(t.flags&64)!==0?(t.lanes=n,t):(r=r!==null,n=!1,e===null?t.memoizedProps.fallback!==void 0&&Mo(t):n=e.memoizedState!==null,r&&!n&&(t.mode&2)!==0&&(e===null&&t.memoizedProps.unstable_avoidThisFallback!==!0||(ee.current&1)!==0?me===0&&(me=3):((me===0||me===3)&&(me=4),Ne===null||(fo&134217727)===0&&(Br&134217727)===0||Ir(Ne,Te))),(r||n)&&(t.flags|=4),null);case 4:return Dr(),fu(t),e===null&&jg(t.stateNode.containerInfo),null;case 10:return Ic(t),null;case 17:return je(t.type)&&ps(),null;case 19:if(X(ee),r=t.memoizedState,r===null)return null;if(o=(t.flags&64)!==0,s=r.rendering,s===null)if(o)oi(r,!1);else{if(me!==0||e!==null&&(e.flags&64)!==0)for(e=t.child;e!==null;){if(s=_s(e),s!==null){for(t.flags|=64,oi(r,!1),o=s.updateQueue,o!==null&&(t.updateQueue=o,t.flags|=4),r.lastEffect===null&&(t.firstEffect=null),t.lastEffect=r.lastEffect,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=2,o.nextEffect=null,o.firstEffect=null,o.lastEffect=null,s=o.alternate,s===null?(o.childLanes=0,o.lanes=e,o.child=null,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,e=s.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return te(ee,ee.current&1|2),t.child}e=e.sibling}r.tail!==null&&Se()>vu&&(t.flags|=64,o=!0,oi(r,!1),t.lanes=33554432)}else{if(!o)if(e=_s(s),e!==null){if(t.flags|=64,o=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),oi(r,!0),r.tail===null&&r.tailMode==="hidden"&&!s.alternate&&!gt)return t=t.lastEffect=r.lastEffect,t!==null&&(t.nextEffect=null),null}else 2*Se()-r.renderingStartTime>vu&&n!==1073741824&&(t.flags|=64,o=!0,oi(r,!1),t.lanes=33554432);r.isBackwards?(s.sibling=t.child,t.child=s):(n=r.last,n!==null?n.sibling=s:t.child=s,r.last=s)}return r.tail!==null?(n=r.tail,r.rendering=n,r.tail=n.sibling,r.lastEffect=t.lastEffect,r.renderingStartTime=Se(),n.sibling=null,t=ee.current,te(ee,o?t&1|2:t&1),n):null;case 23:case 24:return Mc(),e!==null&&e.memoizedState!==null!=(t.memoizedState!==null)&&r.mode!=="unstable-defer-without-hiding"&&(t.flags|=4),null}throw Error(_(156,t.tag))}function yw(e){switch(e.tag){case 1:je(e.type)&&ps();var t=e.flags;return t&4096?(e.flags=t&-4097|64,e):null;case 3:if(Dr(),X(Me),X(Ce),Ac(),t=e.flags,(t&64)!==0)throw Error(_(285));return e.flags=t&-4097|64,e;case 5:return kc(e),null;case 13:return X(ee),t=e.flags,t&4096?(e.flags=t&-4097|64,e):null;case 19:return X(ee),null;case 4:return Dr(),null;case 10:return Ic(e),null;case 23:case 24:return Mc(),null;default:return null}}function Dc(e,t){try{var n="",r=t;do n+=Q0(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i}}function du(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var ww=typeof WeakMap=="function"?WeakMap:Map;function gm(e,t,n){n=tn(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){As||(As=!0,yu=r),du(e,t)},n}function mm(e,t,n){n=tn(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return du(e,t),r(i)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){typeof r!="function"&&(ft===null?ft=new Set([this]):ft.add(this),du(e,t));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}var _w=typeof WeakSet=="function"?WeakSet:Set;function nh(e){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(n){sn(e,n)}else t.current=null}function Ew(e,t){switch(t.tag){case 0:case 11:case 15:case 22:return;case 1:if(t.flags&256&&e!==null){var n=e.memoizedProps,r=e.memoizedState;e=t.stateNode,t=e.getSnapshotBeforeUpdate(t.elementType===t.type?n:rt(t.type,n),r),e.__reactInternalSnapshotBeforeUpdate=t}return;case 3:t.flags&256&&_c(t.stateNode.containerInfo);return;case 5:case 6:case 4:case 17:return}throw Error(_(163))}function Sw(e,t,n){switch(n.tag){case 0:case 11:case 15:case 22:if(t=n.updateQueue,t=t!==null?t.lastEffect:null,t!==null){e=t=t.next;do{if((e.tag&3)===3){var r=e.create;e.destroy=r()}e=e.next}while(e!==t)}if(t=n.updateQueue,t=t!==null?t.lastEffect:null,t!==null){e=t=t.next;do{var i=e;r=i.next,i=i.tag,(i&4)!==0&&(i&1)!==0&&(Cm(n,e),Pw(n,e)),e=r}while(e!==t)}return;case 1:e=n.stateNode,n.flags&4&&(t===null?e.componentDidMount():(r=n.elementType===n.type?t.memoizedProps:rt(n.type,t.memoizedProps),e.componentDidUpdate(r,t.memoizedState,e.__reactInternalSnapshotBeforeUpdate))),t=n.updateQueue,t!==null&&Md(n,t,e);return;case 3:if(t=n.updateQueue,t!==null){if(e=null,n.child!==null)switch(n.child.tag){case 5:e=n.child.stateNode;break;case 1:e=n.child.stateNode}Md(n,t,e)}return;case 5:e=n.stateNode,t===null&&n.flags&4&&Bg(n.type,n.memoizedProps)&&e.focus();return;case 6:return;case 4:return;case 12:return;case 13:n.memoizedState===null&&(n=n.alternate,n!==null&&(n=n.memoizedState,n!==null&&(n=n.dehydrated,n!==null&&_g(n))));return;case 19:case 17:case 20:case 21:case 23:case 24:return}throw Error(_(163))}function rh(e,t){for(var n=e;;){if(n.tag===5){var r=n.stateNode;if(t)r=r.style,typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none";else{r=n.stateNode;var i=n.memoizedProps.style;i=i!=null&&i.hasOwnProperty("display")?i.display:null,r.style.display=ug("display",i)}}else if(n.tag===6)n.stateNode.nodeValue=t?"":n.memoizedProps;else if((n.tag!==23&&n.tag!==24||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}}function ih(e,t){if(Ln&&typeof Ln.onCommitFiberUnmount=="function")try{Ln.onCommitFiberUnmount(Ec,t)}catch{}switch(t.tag){case 0:case 11:case 14:case 15:case 22:if(e=t.updateQueue,e!==null&&(e=e.lastEffect,e!==null)){var n=e=e.next;do{var r=n,i=r.destroy;if(r=r.tag,i!==void 0)if((r&4)!==0)Cm(t,n);else{r=t;try{i()}catch(o){sn(r,o)}}n=n.next}while(n!==e)}break;case 1:if(nh(t),e=t.stateNode,typeof e.componentWillUnmount=="function")try{e.props=t.memoizedProps,e.state=t.memoizedState,e.componentWillUnmount()}catch(o){sn(t,o)}break;case 5:nh(t);break;case 4:vm(e,t)}}function oh(e){e.alternate=null,e.child=null,e.dependencies=null,e.firstEffect=null,e.lastEffect=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.return=null,e.updateQueue=null}function sh(e){return e.tag===5||e.tag===3||e.tag===4}function ah(e){e:{for(var t=e.return;t!==null;){if(sh(t))break e;t=t.return}throw Error(_(160))}var n=t;switch(t=n.stateNode,n.tag){case 5:var r=!1;break;case 3:t=t.containerInfo,r=!0;break;case 4:t=t.containerInfo,r=!0;break;default:throw Error(_(161))}n.flags&16&&(Li(t,""),n.flags&=-17);e:t:for(n=e;;){for(;n.sibling===null;){if(n.return===null||sh(n.return)){n=null;break e}n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue t;n.child.return=n,n=n.child}if(!(n.flags&2)){n=n.stateNode;break e}}r?hu(e,n,t):pu(e,n,t)}function hu(e,t,n){var r=e.tag,i=r===5||r===6;if(i)e=i?e.stateNode:e.stateNode.instance,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ds));else if(r!==4&&(e=e.child,e!==null))for(hu(e,t,n),e=e.sibling;e!==null;)hu(e,t,n),e=e.sibling}function pu(e,t,n){var r=e.tag,i=r===5||r===6;if(i)e=i?e.stateNode:e.stateNode.instance,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(pu(e,t,n),e=e.sibling;e!==null;)pu(e,t,n),e=e.sibling}function vm(e,t){for(var n=t,r=!1,i,o;;){if(!r){r=n.return;e:for(;;){if(r===null)throw Error(_(160));switch(i=r.stateNode,r.tag){case 5:o=!1;break e;case 3:i=i.containerInfo,o=!0;break e;case 4:i=i.containerInfo,o=!0;break e}r=r.return}r=!0}if(n.tag===5||n.tag===6){e:for(var s=e,a=n,l=a;;)if(ih(s,l),l.child!==null&&l.tag!==4)l.child.return=l,l=l.child;else{if(l===a)break e;for(;l.sibling===null;){if(l.return===null||l.return===a)break e;l=l.return}l.sibling.return=l.return,l=l.sibling}o?(s=i,a=n.stateNode,s.nodeType===8?s.parentNode.removeChild(a):s.removeChild(a)):i.removeChild(n.stateNode)}else if(n.tag===4){if(n.child!==null){i=n.stateNode.containerInfo,o=!0,n.child.return=n,n=n.child;continue}}else if(ih(e,n),n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return,n.tag===4&&(r=!1)}n.sibling.return=n.return,n=n.sibling}}function fl(e,t){switch(t.tag){case 0:case 11:case 14:case 15:case 22:var n=t.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var r=n=n.next;do(r.tag&3)===3&&(e=r.destroy,r.destroy=void 0,e!==void 0&&e()),r=r.next;while(r!==n)}return;case 1:return;case 5:if(n=t.stateNode,n!=null){r=t.memoizedProps;var i=e!==null?e.memoizedProps:r;e=t.type;var o=t.updateQueue;if(t.updateQueue=null,o!==null){for(n[hs]=r,e==="input"&&r.type==="radio"&&r.name!=null&&og(n,r),Gl(e,i),t=Gl(e,r),i=0;i<o.length;i+=2){var s=o[i],a=o[i+1];s==="style"?cg(n,a):s==="dangerouslySetInnerHTML"?lg(n,a):s==="children"?Li(n,a):Zu(n,s,a,t)}switch(e){case"input":Fl(n,r);break;case"textarea":sg(n,r);break;case"select":e=n._wrapperState.wasMultiple,n._wrapperState.wasMultiple=!!r.multiple,o=r.value,o!=null?yr(n,!!r.multiple,o,!1):e!==!!r.multiple&&(r.defaultValue!=null?yr(n,!!r.multiple,r.defaultValue,!0):yr(n,!!r.multiple,r.multiple?[]:"",!1))}}}return;case 6:if(t.stateNode===null)throw Error(_(162));t.stateNode.nodeValue=t.memoizedProps;return;case 3:n=t.stateNode,n.hydrate&&(n.hydrate=!1,_g(n.containerInfo));return;case 12:return;case 13:t.memoizedState!==null&&(bc=Se(),rh(t.child,!0)),lh(t);return;case 19:lh(t);return;case 17:return;case 23:case 24:rh(t,t.memoizedState!==null);return}throw Error(_(163))}function lh(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new _w),t.forEach(function(r){var i=Dw.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Tw(e,t){return e!==null&&(e=e.memoizedState,e===null||e.dehydrated!==null)?(t=t.memoizedState,t!==null&&t.dehydrated===null):!1}var Iw=Math.ceil,ks=qn.ReactCurrentDispatcher,Lc=qn.ReactCurrentOwner,b=0,Ne=null,se=null,Te=0,Fn=0,gu=gn(0),me=0,ia=null,Ur=0,fo=0,Br=0,xc=0,mu=null,bc=0,vu=1/0;function zr(){vu=Se()+500}var A=null,As=!1,yu=null,ft=null,cn=!1,Ci=null,di=90,wu=[],_u=[],Nt=null,ki=0,Eu=null,Qo=-1,Ct=0,Zo=0,Ai=null,es=!1;function Ue(){return(b&48)!==0?Se():Qo!==-1?Qo:Qo=Se()}function rn(e){if(e=e.mode,(e&2)===0)return 1;if((e&4)===0)return $r()===99?1:2;if(Ct===0&&(Ct=Ur),fw.transition!==0){Zo!==0&&(Zo=mu!==null?mu.pendingLanes:0),e=Ct;var t=4186112&~Zo;return t&=-t,t===0&&(e=4186112&~e,t=e&-e,t===0&&(t=8192)),t}return e=$r(),(b&4)!==0&&e===98?e=cs(12,Ct):(e=p1(e),e=cs(e,Ct)),e}function on(e,t,n){if(50<ki)throw ki=0,Eu=null,Error(_(185));if(e=oa(e,t),e===null)return null;Js(e,t,n),e===Ne&&(Br|=t,me===4&&Ir(e,Te));var r=$r();t===1?(b&8)!==0&&(b&48)===0?Su(e):(Xe(e,n),b===0&&(zr(),wt())):((b&4)===0||r!==98&&r!==99||(Nt===null?Nt=new Set([e]):Nt.add(e)),Xe(e,n)),mu=e}function oa(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}function Xe(e,t){for(var n=e.callbackNode,r=e.suspendedLanes,i=e.pingedLanes,o=e.expirationTimes,s=e.pendingLanes;0<s;){var a=31-ln(s),l=1<<a,u=o[a];if(u===-1){if((l&r)===0||(l&i)!==0){u=t,ar(l);var p=K;o[a]=10<=p?u+250:6<=p?u+5e3:-1}}else u<=t&&(e.expiredLanes|=l);s&=~l}if(r=ji(e,e===Ne?Te:0),t=K,r===0)n!==null&&(n!==sl&&ru(n),e.callbackNode=null,e.callbackPriority=0);else{if(n!==null){if(e.callbackPriority===t)return;n!==sl&&ru(n)}t===15?(n=Su.bind(null,e),It===null?(It=[n],Jo=Sc(na,Yg)):It.push(n),n=sl):t===14?n=zi(99,Su.bind(null,e)):(n=g1(t),n=zi(n,ym.bind(null,e))),e.callbackPriority=t,e.callbackNode=n}}function ym(e){if(Qo=-1,Zo=Ct=0,(b&48)!==0)throw Error(_(327));var t=e.callbackNode;if(mn()&&e.callbackNode!==t)return null;var n=ji(e,e===Ne?Te:0);if(n===0)return null;var r=n,i=b;b|=16;var o=Sm();(Ne!==e||Te!==r)&&(zr(),Cr(e,r));do try{Aw();break}catch(a){Em(e,a)}while(1);if(Tc(),ks.current=o,b=i,se!==null?r=0:(Ne=null,Te=0,r=me),(Ur&Br)!==0)Cr(e,0);else if(r!==0){if(r===2&&(b|=64,e.hydrate&&(e.hydrate=!1,_c(e.containerInfo)),n=Ag(e),n!==0&&(r=hi(e,n))),r===1)throw t=ia,Cr(e,0),Ir(e,n),Xe(e,Se()),t;switch(e.finishedWork=e.current.alternate,e.finishedLanes=n,r){case 0:case 1:throw Error(_(345));case 2:En(e);break;case 3:if(Ir(e,n),(n&62914560)===n&&(r=bc+500-Se(),10<r)){if(ji(e,0)!==0)break;if(i=e.suspendedLanes,(i&n)!==n){Ue(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Rd(En.bind(null,e),r);break}En(e);break;case 4:if(Ir(e,n),(n&4186112)===n)break;for(r=e.eventTimes,i=-1;0<n;){var s=31-ln(n);o=1<<s,s=r[s],s>i&&(i=s),n&=~o}if(n=i,n=Se()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*Iw(n/1960))-n,10<n){e.timeoutHandle=Rd(En.bind(null,e),n);break}En(e);break;case 5:En(e);break;default:throw Error(_(329))}}return Xe(e,Se()),e.callbackNode===t?ym.bind(null,e):null}function Ir(e,t){for(t&=~xc,t&=~Br,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-ln(t),r=1<<n;e[n]=-1,t&=~r}}function Su(e){if((b&48)!==0)throw Error(_(327));if(mn(),e===Ne&&(e.expiredLanes&Te)!==0){var t=Te,n=hi(e,t);(Ur&Br)!==0&&(t=ji(e,t),n=hi(e,t))}else t=ji(e,0),n=hi(e,t);if(e.tag!==0&&n===2&&(b|=64,e.hydrate&&(e.hydrate=!1,_c(e.containerInfo)),t=Ag(e),t!==0&&(n=hi(e,t))),n===1)throw n=ia,Cr(e,0),Ir(e,t),Xe(e,Se()),n;return e.finishedWork=e.current.alternate,e.finishedLanes=t,En(e),Xe(e,Se()),null}function Cw(){if(Nt!==null){var e=Nt;Nt=null,e.forEach(function(t){t.expiredLanes|=24&t.pendingLanes,Xe(t,Se())})}wt()}function wm(e,t){var n=b;b|=1;try{return e(t)}finally{b=n,b===0&&(zr(),wt())}}function _m(e,t){var n=b;b&=-2,b|=8;try{return e(t)}finally{b=n,b===0&&(zr(),wt())}}function Fo(e,t){te(gu,Fn),Fn|=t,Ur|=t}function Mc(){Fn=gu.current,X(gu)}function Cr(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,ow(n)),se!==null)for(n=se.return;n!==null;){var r=n;switch(r.tag){case 1:r=r.type.childContextTypes,r!=null&&ps();break;case 3:Dr(),X(Me),X(Ce),Ac();break;case 5:kc(r);break;case 4:Dr();break;case 13:X(ee);break;case 19:X(ee);break;case 10:Ic(r);break;case 23:case 24:Mc()}n=n.return}Ne=e,se=fn(e.current,null),Te=Fn=Ur=t,me=0,ia=null,xc=Br=fo=0}function Em(e,t){do{var n=se;try{if(Tc(),Ti.current=Cs,Es){for(var r=ie.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Es=!1}if(Gi=0,ge=Ee=ie=null,Ii=!1,Lc.current=null,n===null||n.return===null){me=1,ia=t,se=null;break}e:{var o=e,s=n.return,a=n,l=t;if(t=Te,a.flags|=2048,a.firstEffect=a.lastEffect=null,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l;if((a.mode&2)===0){var p=a.alternate;p?(a.updateQueue=p.updateQueue,a.memoizedState=p.memoizedState,a.lanes=p.lanes):(a.updateQueue=null,a.memoizedState=null)}var y=(ee.current&1)!==0,d=s;do{var w;if(w=d.tag===13){var I=d.memoizedState;if(I!==null)w=I.dehydrated!==null;else{var C=d.memoizedProps;w=C.fallback===void 0?!1:C.unstable_avoidThisFallback!==!0?!0:!y}}if(w){var f=d.updateQueue;if(f===null){var c=new Set;c.add(u),d.updateQueue=c}else f.add(u);if((d.mode&2)===0){if(d.flags|=64,a.flags|=16384,a.flags&=-2981,a.tag===1)if(a.alternate===null)a.tag=17;else{var h=tn(-1,1);h.tag=2,nn(a,h)}a.lanes|=1;break e}l=void 0,a=t;var v=o.pingCache;if(v===null?(v=o.pingCache=new ww,l=new Set,v.set(u,l)):(l=v.get(u),l===void 0&&(l=new Set,v.set(u,l))),!l.has(a)){l.add(a);var g=$w.bind(null,o,u,a);u.then(g,g)}d.flags|=4096,d.lanes=t;break e}d=d.return}while(d!==null);l=Error((vr(a.type)||"A React component")+` suspended while rendering, but no fallback UI was specified.

Add a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.`)}me!==5&&(me=2),l=Dc(l,a),d=s;do{switch(d.tag){case 3:o=l,d.flags|=4096,t&=-t,d.lanes|=t;var S=gm(d,o,t);bd(d,S);break e;case 1:o=l;var E=d.type,P=d.stateNode;if((d.flags&64)===0&&(typeof E.getDerivedStateFromError=="function"||P!==null&&typeof P.componentDidCatch=="function"&&(ft===null||!ft.has(P)))){d.flags|=4096,t&=-t,d.lanes|=t;var x=mm(d,o,t);bd(d,x);break e}}d=d.return}while(d!==null)}Im(n)}catch(R){t=R,se===n&&n!==null&&(se=n=n.return);continue}break}while(1)}function Sm(){var e=ks.current;return ks.current=Cs,e===null?Cs:e}function hi(e,t){var n=b;b|=16;var r=Sm();Ne===e&&Te===t||Cr(e,t);do try{kw();break}catch(i){Em(e,i)}while(1);if(Tc(),b=n,ks.current=r,se!==null)throw Error(_(261));return Ne=null,Te=0,me}function kw(){for(;se!==null;)Tm(se)}function Aw(){for(;se!==null&&!lw();)Tm(se)}function Tm(e){var t=km(e.alternate,e,Fn);e.memoizedProps=e.pendingProps,t===null?Im(e):se=t,Lc.current=null}function Im(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&2048)===0){if(n=vw(n,t,Fn),n!==null){se=n;return}if(n=t,n.tag!==24&&n.tag!==23||n.memoizedState===null||(Fn&1073741824)!==0||(n.mode&4)===0){for(var r=0,i=n.child;i!==null;)r|=i.lanes|i.childLanes,i=i.sibling;n.childLanes=r}e!==null&&(e.flags&2048)===0&&(e.firstEffect===null&&(e.firstEffect=t.firstEffect),t.lastEffect!==null&&(e.lastEffect!==null&&(e.lastEffect.nextEffect=t.firstEffect),e.lastEffect=t.lastEffect),1<t.flags&&(e.lastEffect!==null?e.lastEffect.nextEffect=t:e.firstEffect=t,e.lastEffect=t))}else{if(n=yw(t),n!==null){n.flags&=2047,se=n;return}e!==null&&(e.firstEffect=e.lastEffect=null,e.flags|=2048)}if(t=t.sibling,t!==null){se=t;return}se=t=e}while(t!==null);me===0&&(me=5)}function En(e){var t=$r();return jn(99,Ow.bind(null,e,t)),null}function Ow(e,t){do mn();while(Ci!==null);if((b&48)!==0)throw Error(_(327));var n=e.finishedWork;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(_(177));e.callbackNode=null;var r=n.lanes|n.childLanes,i=r,o=e.pendingLanes&~i;e.pendingLanes=i,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=i,e.mutableReadLanes&=i,e.entangledLanes&=i,i=e.entanglements;for(var s=e.eventTimes,a=e.expirationTimes;0<o;){var l=31-ln(o),u=1<<l;i[l]=0,s[l]=-1,a[l]=-1,o&=~u}if(Nt!==null&&(r&24)===0&&Nt.has(e)&&Nt.delete(e),e===Ne&&(se=Ne=null,Te=0),1<n.flags?n.lastEffect!==null?(n.lastEffect.nextEffect=n,r=n.firstEffect):r=n:r=n.firstEffect,r!==null){if(i=b,b|=32,Lc.current=null,rl=Ko,s=Sd(),Ql(s)){if("selectionStart"in s)a={start:s.selectionStart,end:s.selectionEnd};else e:if(a=(a=s.ownerDocument)&&a.defaultView||window,(u=a.getSelection&&a.getSelection())&&u.rangeCount!==0){a=u.anchorNode,o=u.anchorOffset,l=u.focusNode,u=u.focusOffset;try{a.nodeType,l.nodeType}catch{a=null;break e}var p=0,y=-1,d=-1,w=0,I=0,C=s,f=null;t:for(;;){for(var c;C!==a||o!==0&&C.nodeType!==3||(y=p+o),C!==l||u!==0&&C.nodeType!==3||(d=p+u),C.nodeType===3&&(p+=C.nodeValue.length),(c=C.firstChild)!==null;)f=C,C=c;for(;;){if(C===s)break t;if(f===a&&++w===o&&(y=p),f===l&&++I===u&&(d=p),(c=C.nextSibling)!==null)break;C=f,f=C.parentNode}C=c}a=y===-1||d===-1?null:{start:y,end:d}}else a=null;a=a||{start:0,end:0}}else a=null;il={focusedElem:s,selectionRange:a},Ko=!1,Ai=null,es=!1,A=r;do try{Rw()}catch(R){if(A===null)throw Error(_(330));sn(A,R),A=A.nextEffect}while(A!==null);Ai=null,A=r;do try{for(s=e;A!==null;){var h=A.flags;if(h&16&&Li(A.stateNode,""),h&128){var v=A.alternate;if(v!==null){var g=v.ref;g!==null&&(typeof g=="function"?g(null):g.current=null)}}switch(h&1038){case 2:ah(A),A.flags&=-3;break;case 6:ah(A),A.flags&=-3,fl(A.alternate,A);break;case 1024:A.flags&=-1025;break;case 1028:A.flags&=-1025,fl(A.alternate,A);break;case 4:fl(A.alternate,A);break;case 8:a=A,vm(s,a);var S=a.alternate;oh(a),S!==null&&oh(S)}A=A.nextEffect}}catch(R){if(A===null)throw Error(_(330));sn(A,R),A=A.nextEffect}while(A!==null);if(g=il,v=Sd(),h=g.focusedElem,s=g.selectionRange,v!==h&&h&&h.ownerDocument&&xg(h.ownerDocument.documentElement,h)){for(s!==null&&Ql(h)&&(v=s.start,g=s.end,g===void 0&&(g=v),"selectionStart"in h?(h.selectionStart=v,h.selectionEnd=Math.min(g,h.value.length)):(g=(v=h.ownerDocument||document)&&v.defaultView||window,g.getSelection&&(g=g.getSelection(),a=h.textContent.length,S=Math.min(s.start,a),s=s.end===void 0?S:Math.min(s.end,a),!g.extend&&S>s&&(a=s,s=S,S=a),a=Ed(h,S),o=Ed(h,s),a&&o&&(g.rangeCount!==1||g.anchorNode!==a.node||g.anchorOffset!==a.offset||g.focusNode!==o.node||g.focusOffset!==o.offset)&&(v=v.createRange(),v.setStart(a.node,a.offset),g.removeAllRanges(),S>s?(g.addRange(v),g.extend(o.node,o.offset)):(v.setEnd(o.node,o.offset),g.addRange(v)))))),v=[],g=h;g=g.parentNode;)g.nodeType===1&&v.push({element:g,left:g.scrollLeft,top:g.scrollTop});for(typeof h.focus=="function"&&h.focus(),h=0;h<v.length;h++)g=v[h],g.element.scrollLeft=g.left,g.element.scrollTop=g.top}Ko=!!rl,il=rl=null,e.current=n,A=r;do try{for(h=e;A!==null;){var E=A.flags;if(E&36&&Sw(h,A.alternate,A),E&128){v=void 0;var P=A.ref;if(P!==null){var x=A.stateNode;switch(A.tag){case 5:v=x;break;default:v=x}typeof P=="function"?P(v):P.current=v}}A=A.nextEffect}}catch(R){if(A===null)throw Error(_(330));sn(A,R),A=A.nextEffect}while(A!==null);A=null,cw(),b=i}else e.current=n;if(cn)cn=!1,Ci=e,di=t;else for(A=r;A!==null;)t=A.nextEffect,A.nextEffect=null,A.flags&8&&(E=A,E.sibling=null,E.stateNode=null),A=t;if(r=e.pendingLanes,r===0&&(ft=null),r===1?e===Eu?ki++:(ki=0,Eu=e):ki=0,n=n.stateNode,Ln&&typeof Ln.onCommitFiberRoot=="function")try{Ln.onCommitFiberRoot(Ec,n,void 0,(n.current.flags&64)===64)}catch{}if(Xe(e,Se()),As)throw As=!1,e=yu,yu=null,e;return(b&8)!==0||wt(),null}function Rw(){for(;A!==null;){var e=A.alternate;es||Ai===null||((A.flags&8)!==0?ad(A,Ai)&&(es=!0):A.tag===13&&Tw(e,A)&&ad(A,Ai)&&(es=!0));var t=A.flags;(t&256)!==0&&Ew(e,A),(t&512)===0||cn||(cn=!0,zi(97,function(){return mn(),null})),A=A.nextEffect}}function mn(){if(di!==90){var e=97<di?97:di;return di=90,jn(e,Nw)}return!1}function Pw(e,t){wu.push(t,e),cn||(cn=!0,zi(97,function(){return mn(),null}))}function Cm(e,t){_u.push(t,e),cn||(cn=!0,zi(97,function(){return mn(),null}))}function Nw(){if(Ci===null)return!1;var e=Ci;if(Ci=null,(b&48)!==0)throw Error(_(331));var t=b;b|=32;var n=_u;_u=[];for(var r=0;r<n.length;r+=2){var i=n[r],o=n[r+1],s=i.destroy;if(i.destroy=void 0,typeof s=="function")try{s()}catch(l){if(o===null)throw Error(_(330));sn(o,l)}}for(n=wu,wu=[],r=0;r<n.length;r+=2){i=n[r],o=n[r+1];try{var a=i.create;i.destroy=a()}catch(l){if(o===null)throw Error(_(330));sn(o,l)}}for(a=e.current.firstEffect;a!==null;)e=a.nextEffect,a.nextEffect=null,a.flags&8&&(a.sibling=null,a.stateNode=null),a=e;return b=t,wt(),!0}function uh(e,t,n){t=Dc(n,t),t=gm(e,t,1),nn(e,t),t=Ue(),e=oa(e,1),e!==null&&(Js(e,1,t),Xe(e,t))}function sn(e,t){if(e.tag===3)uh(e,e,t);else for(var n=e.return;n!==null;){if(n.tag===3){uh(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ft===null||!ft.has(r))){e=Dc(t,e);var i=mm(n,e,1);if(nn(n,i),i=Ue(),n=oa(n,1),n!==null)Js(n,1,i),Xe(n,i);else if(typeof r.componentDidCatch=="function"&&(ft===null||!ft.has(r)))try{r.componentDidCatch(t,e)}catch{}break}}n=n.return}}function $w(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ue(),e.pingedLanes|=e.suspendedLanes&n,Ne===e&&(Te&n)===n&&(me===4||me===3&&(Te&62914560)===Te&&500>Se()-bc?Cr(e,0):xc|=n),Xe(e,t)}function Dw(e,t){var n=e.stateNode;n!==null&&n.delete(t),t=0,t===0&&(t=e.mode,(t&2)===0?t=1:(t&4)===0?t=$r()===99?1:2:(Ct===0&&(Ct=Ur),t=lr(62914560&~Ct),t===0&&(t=4194304))),n=Ue(),e=oa(e,t),e!==null&&(Js(e,t,n),Xe(e,n))}var km;km=function(e,t,n){var r=t.lanes;if(e!==null)if(e.memoizedProps!==t.pendingProps||Me.current)it=!0;else if((n&r)!==0)it=(e.flags&16384)!==0;else{switch(it=!1,t.tag){case 3:Yd(t),ll();break;case 5:Ud(t);break;case 1:je(t.type)&&Xo(t);break;case 4:su(t,t.stateNode.containerInfo);break;case 10:r=t.memoizedProps.value;var i=t.type._context;te(gs,i._currentValue),i._currentValue=r;break;case 13:if(t.memoizedState!==null)return(n&t.child.childLanes)!==0?Xd(e,t,n):(te(ee,ee.current&1),t=At(e,t,n),t!==null?t.sibling:null);te(ee,ee.current&1);break;case 19:if(r=(n&t.childLanes)!==0,(e.flags&64)!==0){if(r)return th(e,t,n);t.flags|=64}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),te(ee,ee.current),r)break;return null;case 23:case 24:return t.lanes=0,ul(e,t,n)}return At(e,t,n)}else it=!1;switch(t.lanes=0,t.tag){case 2:if(r=t.type,e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2),e=t.pendingProps,i=Nr(t,Ce.current),Sr(t,n),i=Rc(null,t,r,e,i,n),t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0){if(t.tag=1,t.memoizedState=null,t.updateQueue=null,je(r)){var o=!0;Xo(t)}else o=!1;t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Cc(t);var s=r.getDerivedStateFromProps;typeof s=="function"&&ys(t,r,s,e),i.updater=ra,t.stateNode=i,i._reactInternals=t,ou(t,r,e,n),t=cu(null,t,r,!0,o,n)}else t.tag=0,xe(null,t,i,n),t=t.child;return t;case 16:i=t.elementType;e:{switch(e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2),e=t.pendingProps,o=i._init,i=o(i._payload),t.type=i,o=t.tag=xw(i),e=rt(i,e),o){case 0:t=uu(null,t,i,e,n);break e;case 1:t=qd(null,t,i,e,n);break e;case 11:t=Gd(null,t,i,e,n);break e;case 14:t=Kd(null,t,i,rt(i.type,e),r,n);break e}throw Error(_(306,i,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:rt(r,i),uu(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:rt(r,i),qd(e,t,r,i,n);case 3:if(Yd(t),r=t.updateQueue,e===null||r===null)throw Error(_(282));if(r=t.pendingProps,i=t.memoizedState,i=i!==null?i.element:null,Jg(e,t),Vi(t,r,null,n),r=t.memoizedState.element,r===i)ll(),t=At(e,t,n);else{if(i=t.stateNode,(o=i.hydrate)&&(Jt=Er(t.stateNode.containerInfo.firstChild),kt=t,o=gt=!0),o){if(e=i.mutableSourceEagerHydrationData,e!=null)for(i=0;i<e.length;i+=2)o=e[i],o._workInProgressVersionPrimary=e[i+1],Tr.push(o);for(n=tm(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|1024,n=n.sibling}else xe(e,t,r,n),ll();t=t.child}return t;case 5:return Ud(t),e===null&&au(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,s=i.children,tu(r,i)?s=null:o!==null&&tu(r,o)&&(t.flags|=16),fm(e,t),xe(e,t,s,n),t.child;case 6:return e===null&&au(t),null;case 13:return Xd(e,t,n);case 4:return su(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=ws(t,null,r,n):xe(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:rt(r,i),Gd(e,t,r,i,n);case 7:return xe(e,t,t.pendingProps,n),t.child;case 8:return xe(e,t,t.pendingProps.children,n),t.child;case 12:return xe(e,t,t.pendingProps.children,n),t.child;case 10:e:{r=t.type._context,i=t.pendingProps,s=t.memoizedProps,o=i.value;var a=t.type._context;if(te(gs,a._currentValue),a._currentValue=o,s!==null)if(a=s.value,o=Ge(a,o)?0:(typeof r._calculateChangedBits=="function"?r._calculateChangedBits(a,o):1073741823)|0,o===0){if(s.children===i.children&&!Me.current){t=At(e,t,n);break e}}else for(a=t.child,a!==null&&(a.return=t);a!==null;){var l=a.dependencies;if(l!==null){s=a.child;for(var u=l.firstContext;u!==null;){if(u.context===r&&(u.observedBits&o)!==0){a.tag===1&&(u=tn(-1,n&-n),u.tag=2,nn(a,u)),a.lanes|=n,u=a.alternate,u!==null&&(u.lanes|=n),Xg(a.return,n),l.lanes|=n;break}u=u.next}}else s=a.tag===10&&a.type===t.type?null:a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===t){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}xe(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,o=t.pendingProps,r=o.children,Sr(t,n),i=Ye(i,o.unstable_observedBits),r=r(i),t.flags|=1,xe(e,t,r,n),t.child;case 14:return i=t.type,o=rt(i,t.pendingProps),o=rt(i.type,o),Kd(e,t,i,o,r,n);case 15:return cm(e,t,t.type,t.pendingProps,r,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:rt(r,i),e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2),t.tag=1,je(r)?(e=!0,Xo(t)):e=!1,Sr(t,n),Zg(t,r,i),ou(t,r,i,n),cu(null,t,r,!0,e,n);case 19:return th(e,t,n);case 23:return ul(e,t,n);case 24:return ul(e,t,n)}throw Error(_(156,t.tag))};function Lw(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.flags=0,this.lastEffect=this.firstEffect=this.nextEffect=null,this.childLanes=this.lanes=0,this.alternate=null}function Ke(e,t,n,r){return new Lw(e,t,n,r)}function jc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function xw(e){if(typeof e=="function")return jc(e)?1:0;if(e!=null){if(e=e.$$typeof,e===qs)return 11;if(e===Ys)return 14}return 2}function fn(e,t){var n=e.alternate;return n===null?(n=Ke(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.nextEffect=null,n.firstEffect=null,n.lastEffect=null),n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function ts(e,t,n,r,i,o){var s=2;if(r=e,typeof e=="function")jc(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case Ht:return kr(n.children,i,o,t);case ng:s=8,i|=16;break;case ec:s=8,i|=1;break;case mi:return e=Ke(12,n,t,i|8),e.elementType=mi,e.type=mi,e.lanes=o,e;case vi:return e=Ke(13,n,t,i),e.type=vi,e.elementType=vi,e.lanes=o,e;case ss:return e=Ke(19,n,t,i),e.elementType=ss,e.lanes=o,e;case sc:return Fc(n,i,o,t);case Ml:return e=Ke(24,n,t,i),e.elementType=Ml,e.lanes=o,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case tc:s=10;break e;case nc:s=9;break e;case qs:s=11;break e;case Ys:s=14;break e;case rc:s=16,r=null;break e;case ic:s=22;break e}throw Error(_(130,e==null?e:typeof e,""))}return t=Ke(s,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function kr(e,t,n,r){return e=Ke(7,e,r,t),e.lanes=n,e}function Fc(e,t,n,r){return e=Ke(23,e,r,t),e.elementType=sc,e.lanes=n,e}function dl(e,t,n){return e=Ke(6,e,null,t),e.lanes=n,e}function hl(e,t,n){return t=Ke(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function bw(e,t,n){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.pendingContext=this.context=null,this.hydrate=n,this.callbackNode=null,this.callbackPriority=0,this.eventTimes=Xa(0),this.expirationTimes=Xa(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Xa(0),this.mutableSourceEagerHydrationData=null}function Mw(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Cn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Os(e,t,n,r){var i=t.current,o=Ue(),s=rn(i);e:if(n){n=n._reactInternals;t:{if(Yn(n)!==n||n.tag!==1)throw Error(_(170));var a=n;do{switch(a.tag){case 3:a=a.stateNode.context;break t;case 1:if(je(a.type)){a=a.stateNode.__reactInternalMemoizedMergedChildContext;break t}}a=a.return}while(a!==null);throw Error(_(171))}if(n.tag===1){var l=n.type;if(je(l)){n=Vg(n,l,a);break e}}n=a}else n=un;return t.context===null?t.context=n:t.pendingContext=n,t=tn(o,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),nn(i,t),on(i,s,o),s}function pl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function ch(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Uc(e,t){ch(e,t),(e=e.alternate)&&ch(e,t)}function jw(){return null}function Bc(e,t,n){var r=n!=null&&n.hydrationOptions!=null&&n.hydrationOptions.mutableSources||null;if(n=new bw(e,t,n!=null&&n.hydrate===!0),t=Ke(3,null,null,t===2?7:t===1?3:0),n.current=t,t.stateNode=n,Cc(t),e[Fr]=n.current,jg(e.nodeType===8?e.parentNode:e),r)for(e=0;e<r.length;e++){t=r[e];var i=t._getVersion;i=i(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,i]:n.mutableSourceEagerHydrationData.push(t,i)}this._internalRoot=n}Bc.prototype.render=function(e){Os(e,this._internalRoot,null,null)};Bc.prototype.unmount=function(){var e=this._internalRoot,t=e.containerInfo;Os(null,e,null,function(){t[Fr]=null})};function ho(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Fw(e,t){if(t||(t=e?e.nodeType===9?e.documentElement:e.firstChild:null,t=!(!t||t.nodeType!==1||!t.hasAttribute("data-reactroot"))),!t)for(var n;n=e.lastChild;)e.removeChild(n);return new Bc(e,0,t?{hydrate:!0}:void 0)}function sa(e,t,n,r,i){var o=n._reactRootContainer;if(o){var s=o._internalRoot;if(typeof i=="function"){var a=i;i=function(){var u=pl(s);a.call(u)}}Os(t,s,e,i)}else{if(o=n._reactRootContainer=Fw(n,r),s=o._internalRoot,typeof i=="function"){var l=i;i=function(){var u=pl(s);l.call(u)}}_m(function(){Os(t,s,e,i)})}return pl(s)}vg=function(e){if(e.tag===13){var t=Ue();on(e,4,t),Uc(e,4)}};fc=function(e){if(e.tag===13){var t=Ue();on(e,67108864,t),Uc(e,67108864)}};yg=function(e){if(e.tag===13){var t=Ue(),n=rn(e);on(e,n,t),Uc(e,n)}};wg=function(e,t){return t()};Kl=function(e,t,n){switch(t){case"input":if(Fl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=ta(r);if(!i)throw Error(_(90));ig(r),Fl(r,i)}}}break;case"textarea":sg(e,n);break;case"select":t=n.value,t!=null&&yr(e,!!n.multiple,t,!1)}};lc=wm;hg=function(e,t,n,r,i){var o=b;b|=4;try{return jn(98,e.bind(null,t,n,r,i))}finally{b=o,b===0&&(zr(),wt())}};uc=function(){(b&49)===0&&(Cw(),mn())};pg=function(e,t){var n=b;b|=2;try{return e(t)}finally{b=n,b===0&&(zr(),wt())}};function Am(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ho(t))throw Error(_(200));return Mw(e,t,null,n)}var Uw={Events:[uo,dr,ta,fg,dg,mn,{current:!1}]},si={findFiberByHostInstance:An,bundleType:0,version:"17.0.2",rendererPackageName:"react-dom"},Bw={bundleType:si.bundleType,version:si.version,rendererPackageName:si.rendererPackageName,rendererConfig:si.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:qn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=mg(e),e===null?null:e.stateNode},findFiberByHostInstance:si.findFiberByHostInstance||jw,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__!="undefined"){var Uo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Uo.isDisabled&&Uo.supportsFiber)try{Ec=Uo.inject(Bw),Ln=Uo}catch{}}et.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Uw;et.createPortal=Am;et.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(_(188)):Error(_(268,Object.keys(e)));return e=mg(t),e=e===null?null:e.stateNode,e};et.flushSync=function(e,t){var n=b;if((n&48)!==0)return e(t);b|=1;try{if(e)return jn(99,e.bind(null,t))}finally{b=n,wt()}};et.hydrate=function(e,t,n){if(!ho(t))throw Error(_(200));return sa(null,e,t,!0,n)};et.render=function(e,t,n){if(!ho(t))throw Error(_(200));return sa(null,e,t,!1,n)};et.unmountComponentAtNode=function(e){if(!ho(e))throw Error(_(40));return e._reactRootContainer?(_m(function(){sa(null,null,e,!1,function(){e._reactRootContainer=null,e[Fr]=null})}),!0):!1};et.unstable_batchedUpdates=wm;et.unstable_createPortal=function(e,t){return Am(e,t,2<arguments.length&&arguments[2]!==void 0?arguments[2]:null)};et.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!ho(n))throw Error(_(200));if(e==null||e._reactInternals===void 0)throw Error(_(38));return sa(e,t,n,!1,r)};et.version="17.0.2";function Om(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__=="undefined"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Om)}catch(e){console.error(e)}}Om(),Qp.exports=et;var jP=Qp.exports,zw={exports:{}},po={};/** @license React v17.0.2
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vw=L.exports,Rm=60103;po.Fragment=60107;if(typeof Symbol=="function"&&Symbol.for){var fh=Symbol.for;Rm=fh("react.element"),po.Fragment=fh("react.fragment")}var Hw=Vw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Ww=Object.prototype.hasOwnProperty,Gw={key:!0,ref:!0,__self:!0,__source:!0};function Pm(e,t,n){var r,i={},o=null,s=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)Ww.call(t,r)&&!Gw.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:Rm,type:e,key:o,ref:s,props:i,_owner:Hw.current}}po.jsx=Pm;po.jsxs=Pm;zw.exports=po;var dh=Array.isArray,hh=Object.keys,Kw=Object.prototype.hasOwnProperty,qw=typeof Element!="undefined";function Tu(e,t){if(e===t)return!0;if(e&&t&&typeof e=="object"&&typeof t=="object"){var n=dh(e),r=dh(t),i,o,s;if(n&&r){if(o=e.length,o!=t.length)return!1;for(i=o;i--!==0;)if(!Tu(e[i],t[i]))return!1;return!0}if(n!=r)return!1;var a=e instanceof Date,l=t instanceof Date;if(a!=l)return!1;if(a&&l)return e.getTime()==t.getTime();var u=e instanceof RegExp,p=t instanceof RegExp;if(u!=p)return!1;if(u&&p)return e.toString()==t.toString();var y=hh(e);if(o=y.length,o!==hh(t).length)return!1;for(i=o;i--!==0;)if(!Kw.call(t,y[i]))return!1;if(qw&&e instanceof Element&&t instanceof Element)return e===t;for(i=o;i--!==0;)if(s=y[i],!(s==="_owner"&&e.$$typeof)&&!Tu(e[s],t[s]))return!1;return!0}return e!==e&&t!==t}var Sn=function(t,n){try{return Tu(t,n)}catch(r){if(r.message&&r.message.match(/stack|recursion/i)||r.number===-2146828260)return console.warn("Warning: react-fast-compare does not handle circular references.",r.name,r.message),!1;throw r}},Yw=function(t){return Xw(t)&&!Jw(t)};function Xw(e){return!!e&&typeof e=="object"}function Jw(e){var t=Object.prototype.toString.call(e);return t==="[object RegExp]"||t==="[object Date]"||e_(e)}var Qw=typeof Symbol=="function"&&Symbol.for,Zw=Qw?Symbol.for("react.element"):60103;function e_(e){return e.$$typeof===Zw}function t_(e){return Array.isArray(e)?[]:{}}function Rs(e,t){return t.clone!==!1&&t.isMergeableObject(e)?Ki(t_(e),e,t):e}function n_(e,t,n){return e.concat(t).map(function(r){return Rs(r,n)})}function r_(e,t,n){var r={};return n.isMergeableObject(e)&&Object.keys(e).forEach(function(i){r[i]=Rs(e[i],n)}),Object.keys(t).forEach(function(i){!n.isMergeableObject(t[i])||!e[i]?r[i]=Rs(t[i],n):r[i]=Ki(e[i],t[i],n)}),r}function Ki(e,t,n){n=n||{},n.arrayMerge=n.arrayMerge||n_,n.isMergeableObject=n.isMergeableObject||Yw;var r=Array.isArray(t),i=Array.isArray(e),o=r===i;return o?r?n.arrayMerge(e,t,n):r_(e,t,n):Rs(t,n)}Ki.all=function(t,n){if(!Array.isArray(t))throw new Error("first argument should be an array");return t.reduce(function(r,i){return Ki(r,i,n)},{})};var Iu=Ki,i_=typeof global=="object"&&global&&global.Object===Object&&global,Nm=i_,o_=typeof self=="object"&&self&&self.Object===Object&&self,s_=Nm||o_||Function("return this")(),_t=s_,a_=_t.Symbol,dn=a_,$m=Object.prototype,l_=$m.hasOwnProperty,u_=$m.toString,ai=dn?dn.toStringTag:void 0;function c_(e){var t=l_.call(e,ai),n=e[ai];try{e[ai]=void 0;var r=!0}catch{}var i=u_.call(e);return r&&(t?e[ai]=n:delete e[ai]),i}var f_=Object.prototype,d_=f_.toString;function h_(e){return d_.call(e)}var p_="[object Null]",g_="[object Undefined]",ph=dn?dn.toStringTag:void 0;function Jn(e){return e==null?e===void 0?g_:p_:ph&&ph in Object(e)?c_(e):h_(e)}function Dm(e,t){return function(n){return e(t(n))}}var m_=Dm(Object.getPrototypeOf,Object),zc=m_;function Qn(e){return e!=null&&typeof e=="object"}var v_="[object Object]",y_=Function.prototype,w_=Object.prototype,Lm=y_.toString,__=w_.hasOwnProperty,E_=Lm.call(Object);function gh(e){if(!Qn(e)||Jn(e)!=v_)return!1;var t=zc(e);if(t===null)return!0;var n=__.call(t,"constructor")&&t.constructor;return typeof n=="function"&&n instanceof n&&Lm.call(n)==E_}function S_(){this.__data__=[],this.size=0}function xm(e,t){return e===t||e!==e&&t!==t}function aa(e,t){for(var n=e.length;n--;)if(xm(e[n][0],t))return n;return-1}var T_=Array.prototype,I_=T_.splice;function C_(e){var t=this.__data__,n=aa(t,e);if(n<0)return!1;var r=t.length-1;return n==r?t.pop():I_.call(t,n,1),--this.size,!0}function k_(e){var t=this.__data__,n=aa(t,e);return n<0?void 0:t[n][1]}function A_(e){return aa(this.__data__,e)>-1}function O_(e,t){var n=this.__data__,r=aa(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this}function bt(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}bt.prototype.clear=S_;bt.prototype.delete=C_;bt.prototype.get=k_;bt.prototype.has=A_;bt.prototype.set=O_;function R_(){this.__data__=new bt,this.size=0}function P_(e){var t=this.__data__,n=t.delete(e);return this.size=t.size,n}function N_(e){return this.__data__.get(e)}function $_(e){return this.__data__.has(e)}function go(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}var D_="[object AsyncFunction]",L_="[object Function]",x_="[object GeneratorFunction]",b_="[object Proxy]";function bm(e){if(!go(e))return!1;var t=Jn(e);return t==L_||t==x_||t==D_||t==b_}var M_=_t["__core-js_shared__"],gl=M_,mh=function(){var e=/[^.]+$/.exec(gl&&gl.keys&&gl.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function j_(e){return!!mh&&mh in e}var F_=Function.prototype,U_=F_.toString;function Zn(e){if(e!=null){try{return U_.call(e)}catch{}try{return e+""}catch{}}return""}var B_=/[\\^$.*+?()[\]{}|]/g,z_=/^\[object .+?Constructor\]$/,V_=Function.prototype,H_=Object.prototype,W_=V_.toString,G_=H_.hasOwnProperty,K_=RegExp("^"+W_.call(G_).replace(B_,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function q_(e){if(!go(e)||j_(e))return!1;var t=bm(e)?K_:z_;return t.test(Zn(e))}function Y_(e,t){return e==null?void 0:e[t]}function er(e,t){var n=Y_(e,t);return q_(n)?n:void 0}var X_=er(_t,"Map"),qi=X_,J_=er(Object,"create"),Yi=J_;function Q_(){this.__data__=Yi?Yi(null):{},this.size=0}function Z_(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}var eE="__lodash_hash_undefined__",tE=Object.prototype,nE=tE.hasOwnProperty;function rE(e){var t=this.__data__;if(Yi){var n=t[e];return n===eE?void 0:n}return nE.call(t,e)?t[e]:void 0}var iE=Object.prototype,oE=iE.hasOwnProperty;function sE(e){var t=this.__data__;return Yi?t[e]!==void 0:oE.call(t,e)}var aE="__lodash_hash_undefined__";function lE(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=Yi&&t===void 0?aE:t,this}function Un(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Un.prototype.clear=Q_;Un.prototype.delete=Z_;Un.prototype.get=rE;Un.prototype.has=sE;Un.prototype.set=lE;function uE(){this.size=0,this.__data__={hash:new Un,map:new(qi||bt),string:new Un}}function cE(e){var t=typeof e;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?e!=="__proto__":e===null}function la(e,t){var n=e.__data__;return cE(t)?n[typeof t=="string"?"string":"hash"]:n.map}function fE(e){var t=la(this,e).delete(e);return this.size-=t?1:0,t}function dE(e){return la(this,e).get(e)}function hE(e){return la(this,e).has(e)}function pE(e,t){var n=la(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this}function vn(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}vn.prototype.clear=uE;vn.prototype.delete=fE;vn.prototype.get=dE;vn.prototype.has=hE;vn.prototype.set=pE;var gE=200;function mE(e,t){var n=this.__data__;if(n instanceof bt){var r=n.__data__;if(!qi||r.length<gE-1)return r.push([e,t]),this.size=++n.size,this;n=this.__data__=new vn(r)}return n.set(e,t),this.size=n.size,this}function Vr(e){var t=this.__data__=new bt(e);this.size=t.size}Vr.prototype.clear=R_;Vr.prototype.delete=P_;Vr.prototype.get=N_;Vr.prototype.has=$_;Vr.prototype.set=mE;function vE(e,t){for(var n=-1,r=e==null?0:e.length;++n<r&&t(e[n],n,e)!==!1;);return e}var yE=function(){try{var e=er(Object,"defineProperty");return e({},"",{}),e}catch{}}(),vh=yE;function Mm(e,t,n){t=="__proto__"&&vh?vh(e,t,{configurable:!0,enumerable:!0,value:n,writable:!0}):e[t]=n}var wE=Object.prototype,_E=wE.hasOwnProperty;function jm(e,t,n){var r=e[t];(!(_E.call(e,t)&&xm(r,n))||n===void 0&&!(t in e))&&Mm(e,t,n)}function ua(e,t,n,r){var i=!n;n||(n={});for(var o=-1,s=t.length;++o<s;){var a=t[o],l=r?r(n[a],e[a],a,n,e):void 0;l===void 0&&(l=e[a]),i?Mm(n,a,l):jm(n,a,l)}return n}function EE(e,t){for(var n=-1,r=Array(e);++n<e;)r[n]=t(n);return r}var SE="[object Arguments]";function yh(e){return Qn(e)&&Jn(e)==SE}var Fm=Object.prototype,TE=Fm.hasOwnProperty,IE=Fm.propertyIsEnumerable,CE=yh(function(){return arguments}())?yh:function(e){return Qn(e)&&TE.call(e,"callee")&&!IE.call(e,"callee")},kE=CE,AE=Array.isArray,mo=AE;function OE(){return!1}var Um=typeof exports=="object"&&exports&&!exports.nodeType&&exports,wh=Um&&typeof module=="object"&&module&&!module.nodeType&&module,RE=wh&&wh.exports===Um,_h=RE?_t.Buffer:void 0,PE=_h?_h.isBuffer:void 0,NE=PE||OE,Bm=NE,$E=9007199254740991,DE=/^(?:0|[1-9]\d*)$/;function LE(e,t){var n=typeof e;return t=t==null?$E:t,!!t&&(n=="number"||n!="symbol"&&DE.test(e))&&e>-1&&e%1==0&&e<t}var xE=9007199254740991;function zm(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=xE}var bE="[object Arguments]",ME="[object Array]",jE="[object Boolean]",FE="[object Date]",UE="[object Error]",BE="[object Function]",zE="[object Map]",VE="[object Number]",HE="[object Object]",WE="[object RegExp]",GE="[object Set]",KE="[object String]",qE="[object WeakMap]",YE="[object ArrayBuffer]",XE="[object DataView]",JE="[object Float32Array]",QE="[object Float64Array]",ZE="[object Int8Array]",eS="[object Int16Array]",tS="[object Int32Array]",nS="[object Uint8Array]",rS="[object Uint8ClampedArray]",iS="[object Uint16Array]",oS="[object Uint32Array]",Y={};Y[JE]=Y[QE]=Y[ZE]=Y[eS]=Y[tS]=Y[nS]=Y[rS]=Y[iS]=Y[oS]=!0;Y[bE]=Y[ME]=Y[YE]=Y[jE]=Y[XE]=Y[FE]=Y[UE]=Y[BE]=Y[zE]=Y[VE]=Y[HE]=Y[WE]=Y[GE]=Y[KE]=Y[qE]=!1;function sS(e){return Qn(e)&&zm(e.length)&&!!Y[Jn(e)]}function Vc(e){return function(t){return e(t)}}var Vm=typeof exports=="object"&&exports&&!exports.nodeType&&exports,Oi=Vm&&typeof module=="object"&&module&&!module.nodeType&&module,aS=Oi&&Oi.exports===Vm,ml=aS&&Nm.process,lS=function(){try{var e=Oi&&Oi.require&&Oi.require("util").types;return e||ml&&ml.binding&&ml.binding("util")}catch{}}(),Lr=lS,Eh=Lr&&Lr.isTypedArray,uS=Eh?Vc(Eh):sS,cS=uS,fS=Object.prototype,dS=fS.hasOwnProperty;function Hm(e,t){var n=mo(e),r=!n&&kE(e),i=!n&&!r&&Bm(e),o=!n&&!r&&!i&&cS(e),s=n||r||i||o,a=s?EE(e.length,String):[],l=a.length;for(var u in e)(t||dS.call(e,u))&&!(s&&(u=="length"||i&&(u=="offset"||u=="parent")||o&&(u=="buffer"||u=="byteLength"||u=="byteOffset")||LE(u,l)))&&a.push(u);return a}var hS=Object.prototype;function Hc(e){var t=e&&e.constructor,n=typeof t=="function"&&t.prototype||hS;return e===n}var pS=Dm(Object.keys,Object),gS=pS,mS=Object.prototype,vS=mS.hasOwnProperty;function yS(e){if(!Hc(e))return gS(e);var t=[];for(var n in Object(e))vS.call(e,n)&&n!="constructor"&&t.push(n);return t}function Wm(e){return e!=null&&zm(e.length)&&!bm(e)}function Wc(e){return Wm(e)?Hm(e):yS(e)}function wS(e,t){return e&&ua(t,Wc(t),e)}function _S(e){var t=[];if(e!=null)for(var n in Object(e))t.push(n);return t}var ES=Object.prototype,SS=ES.hasOwnProperty;function TS(e){if(!go(e))return _S(e);var t=Hc(e),n=[];for(var r in e)r=="constructor"&&(t||!SS.call(e,r))||n.push(r);return n}function Gc(e){return Wm(e)?Hm(e,!0):TS(e)}function IS(e,t){return e&&ua(t,Gc(t),e)}var Gm=typeof exports=="object"&&exports&&!exports.nodeType&&exports,Sh=Gm&&typeof module=="object"&&module&&!module.nodeType&&module,CS=Sh&&Sh.exports===Gm,Th=CS?_t.Buffer:void 0,Ih=Th?Th.allocUnsafe:void 0;function kS(e,t){if(t)return e.slice();var n=e.length,r=Ih?Ih(n):new e.constructor(n);return e.copy(r),r}function Km(e,t){var n=-1,r=e.length;for(t||(t=Array(r));++n<r;)t[n]=e[n];return t}function AS(e,t){for(var n=-1,r=e==null?0:e.length,i=0,o=[];++n<r;){var s=e[n];t(s,n,e)&&(o[i++]=s)}return o}function qm(){return[]}var OS=Object.prototype,RS=OS.propertyIsEnumerable,Ch=Object.getOwnPropertySymbols,PS=Ch?function(e){return e==null?[]:(e=Object(e),AS(Ch(e),function(t){return RS.call(e,t)}))}:qm,Kc=PS;function NS(e,t){return ua(e,Kc(e),t)}function Ym(e,t){for(var n=-1,r=t.length,i=e.length;++n<r;)e[i+n]=t[n];return e}var $S=Object.getOwnPropertySymbols,DS=$S?function(e){for(var t=[];e;)Ym(t,Kc(e)),e=zc(e);return t}:qm,Xm=DS;function LS(e,t){return ua(e,Xm(e),t)}function Jm(e,t,n){var r=t(e);return mo(e)?r:Ym(r,n(e))}function xS(e){return Jm(e,Wc,Kc)}function bS(e){return Jm(e,Gc,Xm)}var MS=er(_t,"DataView"),Cu=MS,jS=er(_t,"Promise"),ku=jS,FS=er(_t,"Set"),Au=FS,US=er(_t,"WeakMap"),Ou=US,kh="[object Map]",BS="[object Object]",Ah="[object Promise]",Oh="[object Set]",Rh="[object WeakMap]",Ph="[object DataView]",zS=Zn(Cu),VS=Zn(qi),HS=Zn(ku),WS=Zn(Au),GS=Zn(Ou),Tn=Jn;(Cu&&Tn(new Cu(new ArrayBuffer(1)))!=Ph||qi&&Tn(new qi)!=kh||ku&&Tn(ku.resolve())!=Ah||Au&&Tn(new Au)!=Oh||Ou&&Tn(new Ou)!=Rh)&&(Tn=function(e){var t=Jn(e),n=t==BS?e.constructor:void 0,r=n?Zn(n):"";if(r)switch(r){case zS:return Ph;case VS:return kh;case HS:return Ah;case WS:return Oh;case GS:return Rh}return t});var qc=Tn,KS=Object.prototype,qS=KS.hasOwnProperty;function YS(e){var t=e.length,n=new e.constructor(t);return t&&typeof e[0]=="string"&&qS.call(e,"index")&&(n.index=e.index,n.input=e.input),n}var XS=_t.Uint8Array,Nh=XS;function Yc(e){var t=new e.constructor(e.byteLength);return new Nh(t).set(new Nh(e)),t}function JS(e,t){var n=t?Yc(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.byteLength)}var QS=/\w*$/;function ZS(e){var t=new e.constructor(e.source,QS.exec(e));return t.lastIndex=e.lastIndex,t}var $h=dn?dn.prototype:void 0,Dh=$h?$h.valueOf:void 0;function eT(e){return Dh?Object(Dh.call(e)):{}}function tT(e,t){var n=t?Yc(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.length)}var nT="[object Boolean]",rT="[object Date]",iT="[object Map]",oT="[object Number]",sT="[object RegExp]",aT="[object Set]",lT="[object String]",uT="[object Symbol]",cT="[object ArrayBuffer]",fT="[object DataView]",dT="[object Float32Array]",hT="[object Float64Array]",pT="[object Int8Array]",gT="[object Int16Array]",mT="[object Int32Array]",vT="[object Uint8Array]",yT="[object Uint8ClampedArray]",wT="[object Uint16Array]",_T="[object Uint32Array]";function ET(e,t,n){var r=e.constructor;switch(t){case cT:return Yc(e);case nT:case rT:return new r(+e);case fT:return JS(e,n);case dT:case hT:case pT:case gT:case mT:case vT:case yT:case wT:case _T:return tT(e,n);case iT:return new r;case oT:case lT:return new r(e);case sT:return ZS(e);case aT:return new r;case uT:return eT(e)}}var Lh=Object.create,ST=function(){function e(){}return function(t){if(!go(t))return{};if(Lh)return Lh(t);e.prototype=t;var n=new e;return e.prototype=void 0,n}}(),TT=ST;function IT(e){return typeof e.constructor=="function"&&!Hc(e)?TT(zc(e)):{}}var CT="[object Map]";function kT(e){return Qn(e)&&qc(e)==CT}var xh=Lr&&Lr.isMap,AT=xh?Vc(xh):kT,OT=AT,RT="[object Set]";function PT(e){return Qn(e)&&qc(e)==RT}var bh=Lr&&Lr.isSet,NT=bh?Vc(bh):PT,$T=NT,DT=1,LT=2,xT=4,Qm="[object Arguments]",bT="[object Array]",MT="[object Boolean]",jT="[object Date]",FT="[object Error]",Zm="[object Function]",UT="[object GeneratorFunction]",BT="[object Map]",zT="[object Number]",ev="[object Object]",VT="[object RegExp]",HT="[object Set]",WT="[object String]",GT="[object Symbol]",KT="[object WeakMap]",qT="[object ArrayBuffer]",YT="[object DataView]",XT="[object Float32Array]",JT="[object Float64Array]",QT="[object Int8Array]",ZT="[object Int16Array]",eI="[object Int32Array]",tI="[object Uint8Array]",nI="[object Uint8ClampedArray]",rI="[object Uint16Array]",iI="[object Uint32Array]",G={};G[Qm]=G[bT]=G[qT]=G[YT]=G[MT]=G[jT]=G[XT]=G[JT]=G[QT]=G[ZT]=G[eI]=G[BT]=G[zT]=G[ev]=G[VT]=G[HT]=G[WT]=G[GT]=G[tI]=G[nI]=G[rI]=G[iI]=!0;G[FT]=G[Zm]=G[KT]=!1;function ns(e,t,n,r,i,o){var s,a=t&DT,l=t&LT,u=t&xT;if(n&&(s=i?n(e,r,i,o):n(e)),s!==void 0)return s;if(!go(e))return e;var p=mo(e);if(p){if(s=YS(e),!a)return Km(e,s)}else{var y=qc(e),d=y==Zm||y==UT;if(Bm(e))return kS(e,a);if(y==ev||y==Qm||d&&!i){if(s=l||d?{}:IT(e),!a)return l?LS(e,IS(s,e)):NS(e,wS(s,e))}else{if(!G[y])return i?e:{};s=ET(e,y,a)}}o||(o=new Vr);var w=o.get(e);if(w)return w;o.set(e,s),$T(e)?e.forEach(function(f){s.add(ns(f,t,n,f,e,o))}):OT(e)&&e.forEach(function(f,c){s.set(c,ns(f,t,n,c,e,o))});var I=u?l?bS:xS:l?Gc:Wc,C=p?void 0:I(e);return vE(C||e,function(f,c){C&&(c=f,f=e[c]),jm(s,c,ns(f,t,n,c,e,o))}),s}var oI=4;function Mh(e){return ns(e,oI)}function tv(e,t){for(var n=-1,r=e==null?0:e.length,i=Array(r);++n<r;)i[n]=t(e[n],n,e);return i}var sI="[object Symbol]";function Xc(e){return typeof e=="symbol"||Qn(e)&&Jn(e)==sI}var aI="Expected a function";function Jc(e,t){if(typeof e!="function"||t!=null&&typeof t!="function")throw new TypeError(aI);var n=function(){var r=arguments,i=t?t.apply(this,r):r[0],o=n.cache;if(o.has(i))return o.get(i);var s=e.apply(this,r);return n.cache=o.set(i,s)||o,s};return n.cache=new(Jc.Cache||vn),n}Jc.Cache=vn;var lI=500;function uI(e){var t=Jc(e,function(r){return n.size===lI&&n.clear(),r}),n=t.cache;return t}var cI=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,fI=/\\(\\)?/g,dI=uI(function(e){var t=[];return e.charCodeAt(0)===46&&t.push(""),e.replace(cI,function(n,r,i,o){t.push(i?o.replace(fI,"$1"):r||n)}),t}),hI=dI,pI=1/0;function gI(e){if(typeof e=="string"||Xc(e))return e;var t=e+"";return t=="0"&&1/e==-pI?"-0":t}var mI=1/0,jh=dn?dn.prototype:void 0,Fh=jh?jh.toString:void 0;function nv(e){if(typeof e=="string")return e;if(mo(e))return tv(e,nv)+"";if(Xc(e))return Fh?Fh.call(e):"";var t=e+"";return t=="0"&&1/e==-mI?"-0":t}function vI(e){return e==null?"":nv(e)}function rv(e){return mo(e)?tv(e,gI):Xc(e)?[e]:Km(hI(vI(e)))}var yI=!0;function wI(e,t){if(!yI){if(e)return;var n="Warning: "+t;typeof console!="undefined"&&console.warn(n);try{throw Error(n)}catch{}}}var iv={exports:{}},W={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var he=typeof Symbol=="function"&&Symbol.for,Qc=he?Symbol.for("react.element"):60103,Zc=he?Symbol.for("react.portal"):60106,ca=he?Symbol.for("react.fragment"):60107,fa=he?Symbol.for("react.strict_mode"):60108,da=he?Symbol.for("react.profiler"):60114,ha=he?Symbol.for("react.provider"):60109,pa=he?Symbol.for("react.context"):60110,ef=he?Symbol.for("react.async_mode"):60111,ga=he?Symbol.for("react.concurrent_mode"):60111,ma=he?Symbol.for("react.forward_ref"):60112,va=he?Symbol.for("react.suspense"):60113,_I=he?Symbol.for("react.suspense_list"):60120,ya=he?Symbol.for("react.memo"):60115,wa=he?Symbol.for("react.lazy"):60116,EI=he?Symbol.for("react.block"):60121,SI=he?Symbol.for("react.fundamental"):60117,TI=he?Symbol.for("react.responder"):60118,II=he?Symbol.for("react.scope"):60119;function Ve(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Qc:switch(e=e.type,e){case ef:case ga:case ca:case da:case fa:case va:return e;default:switch(e=e&&e.$$typeof,e){case pa:case ma:case wa:case ya:case ha:return e;default:return t}}case Zc:return t}}}function ov(e){return Ve(e)===ga}W.AsyncMode=ef;W.ConcurrentMode=ga;W.ContextConsumer=pa;W.ContextProvider=ha;W.Element=Qc;W.ForwardRef=ma;W.Fragment=ca;W.Lazy=wa;W.Memo=ya;W.Portal=Zc;W.Profiler=da;W.StrictMode=fa;W.Suspense=va;W.isAsyncMode=function(e){return ov(e)||Ve(e)===ef};W.isConcurrentMode=ov;W.isContextConsumer=function(e){return Ve(e)===pa};W.isContextProvider=function(e){return Ve(e)===ha};W.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Qc};W.isForwardRef=function(e){return Ve(e)===ma};W.isFragment=function(e){return Ve(e)===ca};W.isLazy=function(e){return Ve(e)===wa};W.isMemo=function(e){return Ve(e)===ya};W.isPortal=function(e){return Ve(e)===Zc};W.isProfiler=function(e){return Ve(e)===da};W.isStrictMode=function(e){return Ve(e)===fa};W.isSuspense=function(e){return Ve(e)===va};W.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===ca||e===ga||e===da||e===fa||e===va||e===_I||typeof e=="object"&&e!==null&&(e.$$typeof===wa||e.$$typeof===ya||e.$$typeof===ha||e.$$typeof===pa||e.$$typeof===ma||e.$$typeof===SI||e.$$typeof===TI||e.$$typeof===II||e.$$typeof===EI)};W.typeOf=Ve;iv.exports=W;var sv=iv.exports,CI={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},kI={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},av={};av[sv.ForwardRef]=CI;av[sv.Memo]=kI;function pe(){return pe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},pe.apply(this,arguments)}function lv(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}var nt=function(t){return typeof t=="function"},_a=function(t){return t!==null&&typeof t=="object"},AI=function(t){return String(Math.floor(Number(t)))===t},vl=function(t){return Object.prototype.toString.call(t)==="[object String]"},yl=function(t){return _a(t)&&nt(t.then)};function We(e,t,n,r){r===void 0&&(r=0);for(var i=rv(t);e&&r<i.length;)e=e[i[r++]];return e===void 0?n:e}function xn(e,t,n){for(var r=Mh(e),i=r,o=0,s=rv(t);o<s.length-1;o++){var a=s[o],l=We(e,s.slice(0,o+1));if(l&&(_a(l)||Array.isArray(l)))i=i[a]=Mh(l);else{var u=s[o+1];i=i[a]=AI(u)&&Number(u)>=0?[]:{}}}return(o===0?e:i)[s[o]]===n?e:(n===void 0?delete i[s[o]]:i[s[o]]=n,o===0&&n===void 0&&delete r[s[o]],r)}function uv(e,t,n,r){n===void 0&&(n=new WeakMap),r===void 0&&(r={});for(var i=0,o=Object.keys(e);i<o.length;i++){var s=o[i],a=e[s];_a(a)?n.get(a)||(n.set(a,!0),r[s]=Array.isArray(a)?[]:{},uv(a,t,n,r[s])):r[s]=t}return r}var Ea=L.exports.createContext(void 0);Ea.displayName="FormikContext";Ea.Provider;Ea.Consumer;function OI(){var e=L.exports.useContext(Ea);return e||wI(!1),e}function RI(e,t){switch(t.type){case"SET_VALUES":return pe({},e,{values:t.payload});case"SET_TOUCHED":return pe({},e,{touched:t.payload});case"SET_ERRORS":return Sn(e.errors,t.payload)?e:pe({},e,{errors:t.payload});case"SET_STATUS":return pe({},e,{status:t.payload});case"SET_ISSUBMITTING":return pe({},e,{isSubmitting:t.payload});case"SET_ISVALIDATING":return pe({},e,{isValidating:t.payload});case"SET_FIELD_VALUE":return pe({},e,{values:xn(e.values,t.payload.field,t.payload.value)});case"SET_FIELD_TOUCHED":return pe({},e,{touched:xn(e.touched,t.payload.field,t.payload.value)});case"SET_FIELD_ERROR":return pe({},e,{errors:xn(e.errors,t.payload.field,t.payload.value)});case"RESET_FORM":return pe({},e,t.payload);case"SET_FORMIK_STATE":return t.payload(e);case"SUBMIT_ATTEMPT":return pe({},e,{touched:uv(e.values,!0),isSubmitting:!0,submitCount:e.submitCount+1});case"SUBMIT_FAILURE":return pe({},e,{isSubmitting:!1});case"SUBMIT_SUCCESS":return pe({},e,{isSubmitting:!1});default:return e}}var _n={},Bo={};function FP(e){var t=e.validateOnChange,n=t===void 0?!0:t,r=e.validateOnBlur,i=r===void 0?!0:r,o=e.validateOnMount,s=o===void 0?!1:o,a=e.isInitialValid,l=e.enableReinitialize,u=l===void 0?!1:l,p=e.onSubmit,y=lv(e,["validateOnChange","validateOnBlur","validateOnMount","isInitialValid","enableReinitialize","onSubmit"]),d=pe({validateOnChange:n,validateOnBlur:i,validateOnMount:s,onSubmit:p},y),w=L.exports.useRef(d.initialValues),I=L.exports.useRef(d.initialErrors||_n),C=L.exports.useRef(d.initialTouched||Bo),f=L.exports.useRef(d.initialStatus),c=L.exports.useRef(!1),h=L.exports.useRef({});L.exports.useEffect(function(){return c.current=!0,function(){c.current=!1}},[]);var v=L.exports.useReducer(RI,{values:d.initialValues,errors:d.initialErrors||_n,touched:d.initialTouched||Bo,status:d.initialStatus,isSubmitting:!1,isValidating:!1,submitCount:0}),g=v[0],S=v[1],E=L.exports.useCallback(function(m,O){return new Promise(function(N,$){var U=d.validate(m,O);U==null?N(_n):yl(U)?U.then(function(V){N(V||_n)},function(V){$(V)}):N(U)})},[d.validate]),P=L.exports.useCallback(function(m,O){var N=d.validationSchema,$=nt(N)?N(O):N,U=O&&$.validateAt?$.validateAt(O,m):NI(m,$);return new Promise(function(V,ue){U.then(function(){V(_n)},function(Tt){Tt.name==="ValidationError"?V(PI(Tt)):ue(Tt)})})},[d.validationSchema]),x=L.exports.useCallback(function(m,O){return new Promise(function(N){return N(h.current[m].validate(O))})},[]),R=L.exports.useCallback(function(m){var O=Object.keys(h.current).filter(function($){return nt(h.current[$].validate)}),N=O.length>0?O.map(function($){return x($,We(m,$))}):[Promise.resolve("DO_NOT_DELETE_YOU_WILL_BE_FIRED")];return Promise.all(N).then(function($){return $.reduce(function(U,V,ue){return V==="DO_NOT_DELETE_YOU_WILL_BE_FIRED"||V&&(U=xn(U,O[ue],V)),U},{})})},[x]),ne=L.exports.useCallback(function(m){return Promise.all([R(m),d.validationSchema?P(m):{},d.validate?E(m):{}]).then(function(O){var N=O[0],$=O[1],U=O[2],V=Iu.all([N,$,U],{arrayMerge:$I});return V})},[d.validate,d.validationSchema,R,E,P]),Ae=He(function(m){return m===void 0&&(m=g.values),S({type:"SET_ISVALIDATING",payload:!0}),ne(m).then(function(O){return c.current&&(S({type:"SET_ISVALIDATING",payload:!1}),S({type:"SET_ERRORS",payload:O})),O})});L.exports.useEffect(function(){s&&c.current===!0&&Sn(w.current,d.initialValues)&&Ae(w.current)},[s,Ae]);var le=L.exports.useCallback(function(m){var O=m&&m.values?m.values:w.current,N=m&&m.errors?m.errors:I.current?I.current:d.initialErrors||{},$=m&&m.touched?m.touched:C.current?C.current:d.initialTouched||{},U=m&&m.status?m.status:f.current?f.current:d.initialStatus;w.current=O,I.current=N,C.current=$,f.current=U;var V=function(){S({type:"RESET_FORM",payload:{isSubmitting:!!m&&!!m.isSubmitting,errors:N,touched:$,status:U,values:O,isValidating:!!m&&!!m.isValidating,submitCount:!!m&&!!m.submitCount&&typeof m.submitCount=="number"?m.submitCount:0}})};if(d.onReset){var ue=d.onReset(g.values,Gf);yl(ue)?ue.then(V):V()}else V()},[d.initialErrors,d.initialStatus,d.initialTouched]);L.exports.useEffect(function(){c.current===!0&&!Sn(w.current,d.initialValues)&&(u&&(w.current=d.initialValues,le()),s&&Ae(w.current))},[u,d.initialValues,le,s,Ae]),L.exports.useEffect(function(){u&&c.current===!0&&!Sn(I.current,d.initialErrors)&&(I.current=d.initialErrors||_n,S({type:"SET_ERRORS",payload:d.initialErrors||_n}))},[u,d.initialErrors]),L.exports.useEffect(function(){u&&c.current===!0&&!Sn(C.current,d.initialTouched)&&(C.current=d.initialTouched||Bo,S({type:"SET_TOUCHED",payload:d.initialTouched||Bo}))},[u,d.initialTouched]),L.exports.useEffect(function(){u&&c.current===!0&&!Sn(f.current,d.initialStatus)&&(f.current=d.initialStatus,S({type:"SET_STATUS",payload:d.initialStatus}))},[u,d.initialStatus,d.initialTouched]);var oe=He(function(m){if(h.current[m]&&nt(h.current[m].validate)){var O=We(g.values,m),N=h.current[m].validate(O);return yl(N)?(S({type:"SET_ISVALIDATING",payload:!0}),N.then(function($){return $}).then(function($){S({type:"SET_FIELD_ERROR",payload:{field:m,value:$}}),S({type:"SET_ISVALIDATING",payload:!1})})):(S({type:"SET_FIELD_ERROR",payload:{field:m,value:N}}),Promise.resolve(N))}else if(d.validationSchema)return S({type:"SET_ISVALIDATING",payload:!0}),P(g.values,m).then(function($){return $}).then(function($){S({type:"SET_FIELD_ERROR",payload:{field:m,value:$[m]}}),S({type:"SET_ISVALIDATING",payload:!1})});return Promise.resolve()}),rr=L.exports.useCallback(function(m,O){var N=O.validate;h.current[m]={validate:N}},[]),St=L.exports.useCallback(function(m){delete h.current[m]},[]),jt=He(function(m,O){S({type:"SET_TOUCHED",payload:m});var N=O===void 0?i:O;return N?Ae(g.values):Promise.resolve()}),ir=L.exports.useCallback(function(m){S({type:"SET_ERRORS",payload:m})},[]),or=He(function(m,O){var N=nt(m)?m(g.values):m;S({type:"SET_VALUES",payload:N});var $=O===void 0?n:O;return $?Ae(N):Promise.resolve()}),Ft=L.exports.useCallback(function(m,O){S({type:"SET_FIELD_ERROR",payload:{field:m,value:O}})},[]),Ut=He(function(m,O,N){S({type:"SET_FIELD_VALUE",payload:{field:m,value:O}});var $=N===void 0?n:N;return $?Ae(xn(g.values,m,O)):Promise.resolve()}),T=L.exports.useCallback(function(m,O){var N=O,$=m,U;if(!vl(m)){m.persist&&m.persist();var V=m.target?m.target:m.currentTarget,ue=V.type,Tt=V.name,Va=V.id,Ha=V.value,M0=V.checked,bP=V.outerHTML,Kf=V.options,j0=V.multiple;N=O||Tt||Va,$=/number|range/.test(ue)?(U=parseFloat(Ha),isNaN(U)?"":U):/checkbox/.test(ue)?LI(We(g.values,N),M0,Ha):Kf&&j0?DI(Kf):Ha}N&&Ut(N,$)},[Ut,g.values]),D=He(function(m){if(vl(m))return function(O){return T(O,m)};T(m)}),j=He(function(m,O,N){O===void 0&&(O=!0),S({type:"SET_FIELD_TOUCHED",payload:{field:m,value:O}});var $=N===void 0?i:N;return $?Ae(g.values):Promise.resolve()}),J=L.exports.useCallback(function(m,O){m.persist&&m.persist();var N=m.target,$=N.name,U=N.id,V=N.outerHTML,ue=O||$||U;j(ue,!0)},[j]),re=He(function(m){if(vl(m))return function(O){return J(O,m)};J(m)}),st=L.exports.useCallback(function(m){nt(m)?S({type:"SET_FORMIK_STATE",payload:m}):S({type:"SET_FORMIK_STATE",payload:function(){return m}})},[]),at=L.exports.useCallback(function(m){S({type:"SET_STATUS",payload:m})},[]),Bt=L.exports.useCallback(function(m){S({type:"SET_ISSUBMITTING",payload:m})},[]),lt=He(function(){return S({type:"SUBMIT_ATTEMPT"}),Ae().then(function(m){var O=m instanceof Error,N=!O&&Object.keys(m).length===0;if(N){var $;try{if($=P0(),$===void 0)return}catch(U){throw U}return Promise.resolve($).then(function(U){return c.current&&S({type:"SUBMIT_SUCCESS"}),U}).catch(function(U){if(c.current)throw S({type:"SUBMIT_FAILURE"}),U})}else if(c.current&&(S({type:"SUBMIT_FAILURE"}),O))throw m})}),R0=He(function(m){m&&m.preventDefault&&nt(m.preventDefault)&&m.preventDefault(),m&&m.stopPropagation&&nt(m.stopPropagation)&&m.stopPropagation(),lt().catch(function(O){console.warn("Warning: An unhandled error was caught from submitForm()",O)})}),Gf={resetForm:le,validateForm:Ae,validateField:oe,setErrors:ir,setFieldError:Ft,setFieldTouched:j,setFieldValue:Ut,setStatus:at,setSubmitting:Bt,setTouched:jt,setValues:or,setFormikState:st,submitForm:lt},P0=He(function(){return p(g.values,Gf)}),N0=He(function(m){m&&m.preventDefault&&nt(m.preventDefault)&&m.preventDefault(),m&&m.stopPropagation&&nt(m.stopPropagation)&&m.stopPropagation(),le()}),$0=L.exports.useCallback(function(m){return{value:We(g.values,m),error:We(g.errors,m),touched:!!We(g.touched,m),initialValue:We(w.current,m),initialTouched:!!We(C.current,m),initialError:We(I.current,m)}},[g.errors,g.touched,g.values]),D0=L.exports.useCallback(function(m){return{setValue:function(N,$){return Ut(m,N,$)},setTouched:function(N,$){return j(m,N,$)},setError:function(N){return Ft(m,N)}}},[Ut,j,Ft]),L0=L.exports.useCallback(function(m){var O=_a(m),N=O?m.name:m,$=We(g.values,N),U={name:N,value:$,onChange:D,onBlur:re};if(O){var V=m.type,ue=m.value,Tt=m.as,Va=m.multiple;V==="checkbox"?ue===void 0?U.checked=!!$:(U.checked=!!(Array.isArray($)&&~$.indexOf(ue)),U.value=ue):V==="radio"?(U.checked=$===ue,U.value=ue):Tt==="select"&&Va&&(U.value=U.value||[],U.multiple=!0)}return U},[re,D,g.values]),za=L.exports.useMemo(function(){return!Sn(w.current,g.values)},[w.current,g.values]),x0=L.exports.useMemo(function(){return typeof a!="undefined"?za?g.errors&&Object.keys(g.errors).length===0:a!==!1&&nt(a)?a(d):a:g.errors&&Object.keys(g.errors).length===0},[a,za,g.errors,d]),b0=pe({},g,{initialValues:w.current,initialErrors:I.current,initialTouched:C.current,initialStatus:f.current,handleBlur:re,handleChange:D,handleReset:N0,handleSubmit:R0,resetForm:le,setErrors:ir,setFormikState:st,setFieldTouched:j,setFieldValue:Ut,setFieldError:Ft,setStatus:at,setSubmitting:Bt,setTouched:jt,setValues:or,submitForm:lt,validateForm:Ae,validateField:oe,isValid:x0,dirty:za,unregisterField:St,registerField:rr,getFieldProps:L0,getFieldMeta:$0,getFieldHelpers:D0,validateOnBlur:i,validateOnChange:n,validateOnMount:s});return b0}function PI(e){var t={};if(e.inner){if(e.inner.length===0)return xn(t,e.path,e.message);for(var i=e.inner,n=Array.isArray(i),r=0,i=n?i:i[Symbol.iterator]();;){var o;if(n){if(r>=i.length)break;o=i[r++]}else{if(r=i.next(),r.done)break;o=r.value}var s=o;We(t,s.path)||(t=xn(t,s.path,s.message))}}return t}function NI(e,t,n,r){n===void 0&&(n=!1),r===void 0&&(r={});var i=Ru(e);return t[n?"validateSync":"validate"](i,{abortEarly:!1,context:r})}function Ru(e){var t=Array.isArray(e)?[]:{};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=String(n);Array.isArray(e[r])===!0?t[r]=e[r].map(function(i){return Array.isArray(i)===!0||gh(i)?Ru(i):i!==""?i:void 0}):gh(e[r])?t[r]=Ru(e[r]):t[r]=e[r]!==""?e[r]:void 0}return t}function $I(e,t,n){var r=e.slice();return t.forEach(function(o,s){if(typeof r[s]=="undefined"){var a=n.clone!==!1,l=a&&n.isMergeableObject(o);r[s]=l?Iu(Array.isArray(o)?[]:{},o,n):o}else n.isMergeableObject(o)?r[s]=Iu(e[s],o,n):e.indexOf(o)===-1&&r.push(o)}),r}function DI(e){return Array.from(e).filter(function(t){return t.selected}).map(function(t){return t.value})}function LI(e,t,n){if(typeof e=="boolean")return Boolean(t);var r=[],i=!1,o=-1;if(Array.isArray(e))r=e,o=e.indexOf(n),i=o>=0;else if(!n||n=="true"||n=="false")return Boolean(t);return t&&n&&!i?r.concat(n):i?r.slice(0,o).concat(r.slice(o+1)):r}var xI=typeof window!="undefined"&&typeof window.document!="undefined"&&typeof window.document.createElement!="undefined"?L.exports.useLayoutEffect:L.exports.useEffect;function He(e){var t=L.exports.useRef(e);return xI(function(){t.current=e}),L.exports.useCallback(function(){for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return t.current.apply(void 0,r)},[])}var bI=L.exports.forwardRef(function(e,t){var n=e.action,r=lv(e,["action"]),i=n!=null?n:"#",o=OI(),s=o.handleReset,a=o.handleSubmit;return L.exports.createElement("form",Object.assign({onSubmit:a,ref:t,onReset:s,action:i},r))});bI.displayName="Form";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cv=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},MI=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=e[n++];t[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=e[n++],s=e[n++],a=e[n++],l=((i&7)<<18|(o&63)<<12|(s&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(l>>10)),t[r++]=String.fromCharCode(56320+(l&1023))}else{const o=e[n++],s=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|s&63)}}return t.join("")},fv={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const o=e[i],s=i+1<e.length,a=s?e[i+1]:0,l=i+2<e.length,u=l?e[i+2]:0,p=o>>2,y=(o&3)<<4|a>>4;let d=(a&15)<<2|u>>6,w=u&63;l||(w=64,s||(d=64)),r.push(n[p],n[y],n[d],n[w])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(cv(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):MI(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const o=n[e.charAt(i++)],a=i<e.length?n[e.charAt(i)]:0;++i;const u=i<e.length?n[e.charAt(i)]:64;++i;const y=i<e.length?n[e.charAt(i)]:64;if(++i,o==null||a==null||u==null||y==null)throw Error();const d=o<<2|a>>4;if(r.push(d),u!==64){const w=a<<4&240|u>>2;if(r.push(w),y!==64){const I=u<<6&192|y;r.push(I)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},jI=function(e){const t=cv(e);return fv.encodeByteArray(t,!0)},dv=function(e){return jI(e).replace(/\./g,"")},FI=function(e){try{return fv.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};function Ps(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:const n=t;return new Date(n.getTime());case Object:e===void 0&&(e={});break;case Array:e=[];break;default:return t}for(const n in t)!t.hasOwnProperty(n)||!UI(n)||(e[n]=Ps(e[n],t[n]));return e}function UI(e){return e!=="__proto__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BI{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ke(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function zI(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ke())}function VI(){return typeof self=="object"&&self.self===self}function hv(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function HI(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function WI(){const e=ke();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function pv(){return typeof indexedDB=="object"}function gv(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var o;t(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(n){t(n)}})}function GI(){return!(typeof navigator=="undefined"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KI="FirebaseError";class Et extends Error{constructor(t,n,r){super(n);this.code=t,this.customData=r,this.name=KI,Object.setPrototypeOf(this,Et.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Mt.prototype.create)}}class Mt{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},i=`${this.service}/${t}`,o=this.errors[t],s=o?qI(o,r):"Error",a=`${this.serviceName}: ${s} (${i}).`;return new Et(i,a,r)}}function qI(e,t){return e.replace(YI,(n,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const YI=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uh(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function XI(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function Ns(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const o=e[i],s=t[i];if(Bh(o)&&Bh(s)){if(!Ns(o,s))return!1}else if(o!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Bh(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vo(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(i=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function mv(e,t){const n=new JI(e,t);return n.subscribe.bind(n)}class JI{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,r){let i;if(t===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");QI(t,["next","error","complete"])?i=t:i={next:t,error:n,complete:r},i.next===void 0&&(i.next=wl),i.error===void 0&&(i.error=wl),i.complete===void 0&&(i.complete=wl);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),o}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(r){typeof console!="undefined"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function QI(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function wl(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZI=1e3,eC=2,tC=4*60*60*1e3,nC=.5;function zh(e,t=ZI,n=eC){const r=t*Math.pow(n,e),i=Math.round(nC*r*(Math.random()-.5)*2);return Math.min(tC,r+i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hr(e){return e&&e._delegate?e._delegate:e}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pi(e,t){return new Promise((n,r)=>{e.onsuccess=i=>{n(i.target.result)},e.onerror=i=>{var o;r(`${t}: ${(o=i.target.error)===null||o===void 0?void 0:o.message}`)}})}class Vh{constructor(t){this._db=t,this.objectStoreNames=this._db.objectStoreNames}transaction(t,n){return new vv(this._db.transaction.call(this._db,t,n))}createObjectStore(t,n){return new yv(this._db.createObjectStore(t,n))}close(){this._db.close()}}class vv{constructor(t){this._transaction=t,this.complete=new Promise((n,r)=>{this._transaction.oncomplete=function(){n()},this._transaction.onerror=()=>{r(this._transaction.error)},this._transaction.onabort=()=>{r(this._transaction.error)}})}objectStore(t){return new yv(this._transaction.objectStore(t))}}class yv{constructor(t){this._store=t}index(t){return new Hh(this._store.index(t))}createIndex(t,n,r){return new Hh(this._store.createIndex(t,n,r))}get(t){const n=this._store.get(t);return pi(n,"Error reading from IndexedDB")}put(t,n){const r=this._store.put(t,n);return pi(r,"Error writing to IndexedDB")}delete(t){const n=this._store.delete(t);return pi(n,"Error deleting from IndexedDB")}clear(){const t=this._store.clear();return pi(t,"Error clearing IndexedDB object store")}}class Hh{constructor(t){this._index=t}get(t){const n=this._index.get(t);return pi(n,"Error reading from IndexedDB")}}function wv(e,t,n){return new Promise((r,i)=>{try{const o=indexedDB.open(e,t);o.onsuccess=s=>{r(new Vh(s.target.result))},o.onerror=s=>{var a;i(`Error opening indexedDB: ${(a=s.target.error)===null||a===void 0?void 0:a.message}`)},o.onupgradeneeded=s=>{n(new Vh(o.result),s.oldVersion,s.newVersion,new vv(o.transaction))}}catch(o){i(`Error opening indexedDB: ${o.message}`)}})}class Je{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const In="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rC{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new BI;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(oC(t))try{this.getOrInitializeService({instanceIdentifier:In})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(t=In){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=In){return this.instances.has(t)}getOptions(t=In){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[o,s]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(o);r===a&&s.resolve(i)}return i}onInit(t,n){var r;const i=this.normalizeInstanceIdentifier(n),o=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;o.add(t),this.onInitCallbacks.set(i,o);const s=this.instances.get(i);return s&&t(s,i),()=>{o.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const i of r)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:iC(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=In){return this.component?this.component.multipleInstances?t:In:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function iC(e){return e===In?void 0:e}function oC(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sC{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new rC(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tf=[];var H;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(H||(H={}));const _v={debug:H.DEBUG,verbose:H.VERBOSE,info:H.INFO,warn:H.WARN,error:H.ERROR,silent:H.SILENT},aC=H.INFO,lC={[H.DEBUG]:"log",[H.VERBOSE]:"log",[H.INFO]:"info",[H.WARN]:"warn",[H.ERROR]:"error"},uC=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),i=lC[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class yo{constructor(t){this.name=t,this._logLevel=aC,this._logHandler=uC,this._userLogHandler=null,tf.push(this)}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in H))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?_v[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,H.DEBUG,...t),this._logHandler(this,H.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,H.VERBOSE,...t),this._logHandler(this,H.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,H.INFO,...t),this._logHandler(this,H.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,H.WARN,...t),this._logHandler(this,H.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,H.ERROR,...t),this._logHandler(this,H.ERROR,...t)}}function cC(e){tf.forEach(t=>{t.setLogLevel(e)})}function fC(e,t){for(const n of tf){let r=null;t&&t.level&&(r=_v[t.level]),e===null?n.userLogHandler=null:n.userLogHandler=(i,o,...s)=>{const a=s.map(l=>{if(l==null)return null;if(typeof l=="string")return l;if(typeof l=="number"||typeof l=="boolean")return l.toString();if(l instanceof Error)return l.message;try{return JSON.stringify(l)}catch{return null}}).filter(l=>l).join(" ");o>=(r!=null?r:i.logLevel)&&e({level:H[o].toLowerCase(),message:a,args:s,type:i.name})}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dC{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(hC(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function hC(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Pu="@firebase/app",Wh="0.7.20";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nf=new yo("@firebase/app"),pC="@firebase/app-compat",gC="@firebase/analytics-compat",mC="@firebase/analytics",vC="@firebase/app-check-compat",yC="@firebase/app-check",wC="@firebase/auth",_C="@firebase/auth-compat",EC="@firebase/database",SC="@firebase/database-compat",TC="@firebase/functions",IC="@firebase/functions-compat",CC="@firebase/installations",kC="@firebase/installations-compat",AC="@firebase/messaging",OC="@firebase/messaging-compat",RC="@firebase/performance",PC="@firebase/performance-compat",NC="@firebase/remote-config",$C="@firebase/remote-config-compat",DC="@firebase/storage",LC="@firebase/storage-compat",xC="@firebase/firestore",bC="@firebase/firestore-compat",MC="firebase",jC="9.6.10";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bn="[DEFAULT]",FC={[Pu]:"fire-core",[pC]:"fire-core-compat",[mC]:"fire-analytics",[gC]:"fire-analytics-compat",[yC]:"fire-app-check",[vC]:"fire-app-check-compat",[wC]:"fire-auth",[_C]:"fire-auth-compat",[EC]:"fire-rtdb",[SC]:"fire-rtdb-compat",[TC]:"fire-fn",[IC]:"fire-fn-compat",[CC]:"fire-iid",[kC]:"fire-iid-compat",[AC]:"fire-fcm",[OC]:"fire-fcm-compat",[RC]:"fire-perf",[PC]:"fire-perf-compat",[NC]:"fire-rc",[$C]:"fire-rc-compat",[DC]:"fire-gcs",[LC]:"fire-gcs-compat",[xC]:"fire-fst",[bC]:"fire-fst-compat","fire-js":"fire-js",[MC]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hn=new Map,Xi=new Map;function $s(e,t){try{e.container.addComponent(t)}catch(n){nf.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Ev(e,t){e.container.addOrOverwriteComponent(t)}function Qe(e){const t=e.name;if(Xi.has(t))return nf.debug(`There were multiple attempts to register component ${t}.`),!1;Xi.set(t,e);for(const n of hn.values())$s(n,e);return!0}function tr(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function UC(e,t,n=Bn){tr(e,t).clearInstance(n)}function BC(){Xi.clear()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zC={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},pn=new Mt("app","Firebase",zC);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VC{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Je("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw pn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nr=jC;function Sv(e,t={}){typeof t!="object"&&(t={name:t});const n=Object.assign({name:Bn,automaticDataCollectionEnabled:!1},t),r=n.name;if(typeof r!="string"||!r)throw pn.create("bad-app-name",{appName:String(r)});const i=hn.get(r);if(i){if(Ns(e,i.options)&&Ns(n,i.config))return i;throw pn.create("duplicate-app",{appName:r})}const o=new sC(r);for(const a of Xi.values())o.addComponent(a);const s=new VC(e,n,o);return hn.set(r,s),s}function rf(e=Bn){const t=hn.get(e);if(!t)throw pn.create("no-app",{appName:e});return t}function HC(){return Array.from(hn.values())}async function Tv(e){const t=e.name;hn.has(t)&&(hn.delete(t),await Promise.all(e.container.getProviders().map(n=>n.delete())),e.isDeleted=!0)}function $e(e,t,n){var r;let i=(r=FC[e])!==null&&r!==void 0?r:e;n&&(i+=`-${n}`);const o=i.match(/\s|\//),s=t.match(/\s|\//);if(o||s){const a=[`Unable to register library "${i}" with version "${t}":`];o&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&s&&a.push("and"),s&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),nf.warn(a.join(" "));return}Qe(new Je(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}function Iv(e,t){if(e!==null&&typeof e!="function")throw pn.create("invalid-log-argument");fC(e,t)}function Cv(e){cC(e)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WC="firebase-heartbeat-database",GC=1,Ji="firebase-heartbeat-store";let _l=null;function kv(){return _l||(_l=wv(WC,GC,(e,t)=>{switch(t){case 0:e.createObjectStore(Ji)}}).catch(e=>{throw pn.create("storage-open",{originalErrorMessage:e.message})})),_l}async function KC(e){try{return(await kv()).transaction(Ji).objectStore(Ji).get(Av(e))}catch(t){throw pn.create("storage-get",{originalErrorMessage:t.message})}}async function Gh(e,t){try{const r=(await kv()).transaction(Ji,"readwrite");return await r.objectStore(Ji).put(t,Av(e)),r.complete}catch(n){throw pn.create("storage-set",{originalErrorMessage:n.message})}}function Av(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qC=1024,YC=30*24*60*60*1e3;class XC{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new QC(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Kh();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const o=new Date(i.date).valueOf();return Date.now()-o<=YC}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Kh(),{heartbeatsToSend:n,unsentEntries:r}=JC(this._heartbeatsCache.heartbeats),i=dv(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Kh(){return new Date().toISOString().substring(0,10)}function JC(e,t=qC){const n=[];let r=e.slice();for(const i of e){const o=n.find(s=>s.agent===i.agent);if(o){if(o.dates.push(i.date),qh(n)>t){o.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),qh(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class QC{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return pv()?gv().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await KC(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Gh(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Gh(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function qh(e){return dv(JSON.stringify({version:2,heartbeats:e})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZC(e){Qe(new Je("platform-logger",t=>new dC(t),"PRIVATE")),Qe(new Je("heartbeat",t=>new XC(t),"PRIVATE")),$e(Pu,Wh,e),$e(Pu,Wh,"esm2017"),$e("fire-js","")}ZC("");var ek=Object.freeze(Object.defineProperty({__proto__:null,SDK_VERSION:nr,_DEFAULT_ENTRY_NAME:Bn,_addComponent:$s,_addOrOverwriteComponent:Ev,_apps:hn,_clearComponents:BC,_components:Xi,_getProvider:tr,_registerComponent:Qe,_removeServiceInstance:UC,deleteApp:Tv,getApp:rf,getApps:HC,initializeApp:Sv,onLog:Iv,registerVersion:$e,setLogLevel:Cv,FirebaseError:Et},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tk{constructor(t,n){this._delegate=t,this.firebase=n,$s(t,new Je("app-compat",()=>this,"PUBLIC")),this.container=t.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this._delegate.automaticDataCollectionEnabled=t}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(t=>{this._delegate.checkDestroyed(),t()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),Tv(this._delegate)))}_getService(t,n=Bn){var r;this._delegate.checkDestroyed();const i=this._delegate.container.getProvider(t);return!i.isInitialized()&&((r=i.getComponent())===null||r===void 0?void 0:r.instantiationMode)==="EXPLICIT"&&i.initialize(),i.getImmediate({identifier:n})}_removeServiceInstance(t,n=Bn){this._delegate.container.getProvider(t).clearInstance(n)}_addComponent(t){$s(this._delegate,t)}_addOrOverwriteComponent(t){Ev(this._delegate,t)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nk={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance."},Yh=new Mt("app-compat","Firebase",nk);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rk(e){const t={},n={__esModule:!0,initializeApp:o,app:i,registerVersion:$e,setLogLevel:Cv,onLog:Iv,apps:null,SDK_VERSION:nr,INTERNAL:{registerComponent:a,removeApp:r,useAsService:l,modularAPIs:ek}};n.default=n,Object.defineProperty(n,"apps",{get:s});function r(u){delete t[u]}function i(u){if(u=u||Bn,!Uh(t,u))throw Yh.create("no-app",{appName:u});return t[u]}i.App=e;function o(u,p={}){const y=Sv(u,p);if(Uh(t,y.name))return t[y.name];const d=new e(y,n);return t[y.name]=d,d}function s(){return Object.keys(t).map(u=>t[u])}function a(u){const p=u.name,y=p.replace("-compat","");if(Qe(u)&&u.type==="PUBLIC"){const d=(w=i())=>{if(typeof w[y]!="function")throw Yh.create("invalid-app-argument",{appName:p});return w[y]()};u.serviceProps!==void 0&&Ps(d,u.serviceProps),n[y]=d,e.prototype[y]=function(...w){return this._getService.bind(this,p).apply(this,u.multipleInstances?w:[])}}return u.type==="PUBLIC"?n[y]:null}function l(u,p){return p==="serverAuth"?null:p}return n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ov(){const e=rk(tk);e.INTERNAL=Object.assign(Object.assign({},e.INTERNAL),{createFirebaseNamespace:Ov,extendNamespace:t,createSubscribe:mv,ErrorFactory:Mt,deepExtend:Ps});function t(n){Ps(e,n)}return e}const ik=Ov();/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xh=new yo("@firebase/app-compat"),ok="@firebase/app-compat",sk="0.1.21";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ak(e){$e(ok,sk,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */if(VI()&&self.firebase!==void 0){Xh.warn(`
    Warning: Firebase is already defined in the global scope. Please make sure
    Firebase library is only loaded once.
  `);const e=self.firebase.SDK_VERSION;e&&e.indexOf("LITE")>=0&&Xh.warn(`
    Warning: You are trying to load Firebase while using Firebase Performance standalone script.
    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
    `)}const lk=ik;ak();var uk="firebase",ck="9.6.10";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */lk.registerVersion(uk,ck,"app-compat");var fk="firebase",dk="9.6.10";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */$e(fk,dk,"app");const Rv="@firebase/installations",of="0.5.7";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pv=1e4,Nv=`w:${of}`,$v="FIS_v2",hk="https://firebaseinstallations.googleapis.com/v1",pk=60*60*1e3,gk="installations",mk="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vk={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},zn=new Mt(gk,mk,vk);function Dv(e){return e instanceof Et&&e.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lv({projectId:e}){return`${hk}/projects/${e}/installations`}function xv(e){return{token:e.token,requestStatus:2,expiresIn:wk(e.expiresIn),creationTime:Date.now()}}async function bv(e,t){const r=(await t.json()).error;return zn.create("request-failed",{requestName:e,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function Mv({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function yk(e,{refreshToken:t}){const n=Mv(e);return n.append("Authorization",_k(t)),n}async function jv(e){const t=await e();return t.status>=500&&t.status<600?e():t}function wk(e){return Number(e.replace("s","000"))}function _k(e){return`${$v} ${e}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ek({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const r=Lv(e),i=Mv(e),o=t.getImmediate({optional:!0});if(o){const u=await o.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const s={fid:n,authVersion:$v,appId:e.appId,sdkVersion:Nv},a={method:"POST",headers:i,body:JSON.stringify(s)},l=await jv(()=>fetch(r,a));if(l.ok){const u=await l.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:xv(u.authToken)}}else throw await bv("Create Installation",l)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fv(e){return new Promise(t=>{setTimeout(t,e)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sk(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tk=/^[cdef][\w-]{21}$/,Nu="";function Ik(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const n=Ck(e);return Tk.test(n)?n:Nu}catch{return Nu}}function Ck(e){return Sk(e).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sa(e){return`${e.appName}!${e.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uv=new Map;function Bv(e,t){const n=Sa(e);zv(n,t),kk(n,t)}function zv(e,t){const n=Uv.get(e);if(!!n)for(const r of n)r(t)}function kk(e,t){const n=Ak();n&&n.postMessage({key:e,fid:t}),Ok()}let Pn=null;function Ak(){return!Pn&&"BroadcastChannel"in self&&(Pn=new BroadcastChannel("[Firebase] FID Change"),Pn.onmessage=e=>{zv(e.data.key,e.data.fid)}),Pn}function Ok(){Uv.size===0&&Pn&&(Pn.close(),Pn=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rk="firebase-installations-database",Pk=1,Vn="firebase-installations-store";let El=null;function sf(){return El||(El=wv(Rk,Pk,(e,t)=>{switch(t){case 0:e.createObjectStore(Vn)}})),El}async function Ds(e,t){const n=Sa(e),i=(await sf()).transaction(Vn,"readwrite"),o=i.objectStore(Vn),s=await o.get(n);return await o.put(t,n),await i.complete,(!s||s.fid!==t.fid)&&Bv(e,t.fid),t}async function Vv(e){const t=Sa(e),r=(await sf()).transaction(Vn,"readwrite");await r.objectStore(Vn).delete(t),await r.complete}async function Ta(e,t){const n=Sa(e),i=(await sf()).transaction(Vn,"readwrite"),o=i.objectStore(Vn),s=await o.get(n),a=t(s);return a===void 0?await o.delete(n):await o.put(a,n),await i.complete,a&&(!s||s.fid!==a.fid)&&Bv(e,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function af(e){let t;const n=await Ta(e.appConfig,r=>{const i=Nk(r),o=$k(e,i);return t=o.registrationPromise,o.installationEntry});return n.fid===Nu?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function Nk(e){const t=e||{fid:Ik(),registrationStatus:0};return Hv(t)}function $k(e,t){if(t.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(zn.create("app-offline"));return{installationEntry:t,registrationPromise:i}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=Dk(e,n);return{installationEntry:n,registrationPromise:r}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:Lk(e)}:{installationEntry:t}}async function Dk(e,t){try{const n=await Ek(e,t);return Ds(e.appConfig,n)}catch(n){throw Dv(n)&&n.customData.serverCode===409?await Vv(e.appConfig):await Ds(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function Lk(e){let t=await Jh(e.appConfig);for(;t.registrationStatus===1;)await Fv(100),t=await Jh(e.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await af(e);return r||n}return t}function Jh(e){return Ta(e,t=>{if(!t)throw zn.create("installation-not-found");return Hv(t)})}function Hv(e){return xk(e)?{fid:e.fid,registrationStatus:0}:e}function xk(e){return e.registrationStatus===1&&e.registrationTime+Pv<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bk({appConfig:e,heartbeatServiceProvider:t},n){const r=Mk(e,n),i=yk(e,n),o=t.getImmediate({optional:!0});if(o){const u=await o.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const s={installation:{sdkVersion:Nv,appId:e.appId}},a={method:"POST",headers:i,body:JSON.stringify(s)},l=await jv(()=>fetch(r,a));if(l.ok){const u=await l.json();return xv(u)}else throw await bv("Generate Auth Token",l)}function Mk(e,{fid:t}){return`${Lv(e)}/${t}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lf(e,t=!1){let n;const r=await Ta(e.appConfig,o=>{if(!Wv(o))throw zn.create("not-registered");const s=o.authToken;if(!t&&Uk(s))return o;if(s.requestStatus===1)return n=jk(e,t),o;{if(!navigator.onLine)throw zn.create("app-offline");const a=zk(o);return n=Fk(e,a),a}});return n?await n:r.authToken}async function jk(e,t){let n=await Qh(e.appConfig);for(;n.authToken.requestStatus===1;)await Fv(100),n=await Qh(e.appConfig);const r=n.authToken;return r.requestStatus===0?lf(e,t):r}function Qh(e){return Ta(e,t=>{if(!Wv(t))throw zn.create("not-registered");const n=t.authToken;return Vk(n)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function Fk(e,t){try{const n=await bk(e,t),r=Object.assign(Object.assign({},t),{authToken:n});return await Ds(e.appConfig,r),n}catch(n){if(Dv(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Vv(e.appConfig);else{const r=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await Ds(e.appConfig,r)}throw n}}function Wv(e){return e!==void 0&&e.registrationStatus===2}function Uk(e){return e.requestStatus===2&&!Bk(e)}function Bk(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+pk}function zk(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function Vk(e){return e.requestStatus===1&&e.requestTime+Pv<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hk(e){const t=e,{installationEntry:n,registrationPromise:r}=await af(t);return r?r.catch(console.error):lf(t).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wk(e,t=!1){const n=e;return await Gk(n),(await lf(n,t)).token}async function Gk(e){const{registrationPromise:t}=await af(e);t&&await t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kk(e){if(!e||!e.options)throw Sl("App Configuration");if(!e.name)throw Sl("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw Sl(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function Sl(e){return zn.create("missing-app-config-values",{valueName:e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gv="installations",qk="installations-internal",Yk=e=>{const t=e.getProvider("app").getImmediate(),n=Kk(t),r=tr(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},Xk=e=>{const t=e.getProvider("app").getImmediate(),n=tr(t,Gv).getImmediate();return{getId:()=>Hk(n),getToken:i=>Wk(n,i)}};function Jk(){Qe(new Je(Gv,Yk,"PUBLIC")),Qe(new Je(qk,Xk,"PRIVATE"))}Jk();$e(Rv,of);$e(Rv,of,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zh="analytics",Qk="firebase_id",Zk="origin",eA=60*1e3,tA="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Kv="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Be=new yo("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qv(e){return Promise.all(e.map(t=>t.catch(n=>n)))}function nA(e,t){const n=document.createElement("script");n.src=`${Kv}?l=${e}&id=${t}`,n.async=!0,document.head.appendChild(n)}function rA(e){let t=[];return Array.isArray(window[e])?t=window[e]:window[e]=t,t}async function iA(e,t,n,r,i,o){const s=r[i];try{if(s)await t[s];else{const l=(await qv(n)).find(u=>u.measurementId===i);l&&await t[l.appId]}}catch(a){Be.error(a)}e("config",i,o)}async function oA(e,t,n,r,i){try{let o=[];if(i&&i.send_to){let s=i.send_to;Array.isArray(s)||(s=[s]);const a=await qv(n);for(const l of s){const u=a.find(y=>y.measurementId===l),p=u&&t[u.appId];if(p)o.push(p);else{o=[];break}}}o.length===0&&(o=Object.values(t)),await Promise.all(o),e("event",r,i||{})}catch(o){Be.error(o)}}function sA(e,t,n,r){async function i(o,s,a){try{o==="event"?await oA(e,t,n,s,a):o==="config"?await iA(e,t,n,r,s,a):e("set",s)}catch(l){Be.error(l)}}return i}function aA(e,t,n,r,i){let o=function(...s){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(o=window[i]),window[i]=sA(o,e,t,n),{gtagCore:o,wrappedGtag:window[i]}}function lA(){const e=window.document.getElementsByTagName("script");for(const t of Object.values(e))if(t.src&&t.src.includes(Kv))return t;return null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uA={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'},ot=new Mt("analytics","Analytics",uA);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cA=30,fA=1e3;class dA{constructor(t={},n=fA){this.throttleMetadata=t,this.intervalMillis=n}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,n){this.throttleMetadata[t]=n}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const Yv=new dA;function hA(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function pA(e){var t;const{appId:n,apiKey:r}=e,i={method:"GET",headers:hA(r)},o=tA.replace("{app-id}",n),s=await fetch(o,i);if(s.status!==200&&s.status!==304){let a="";try{const l=await s.json();!((t=l.error)===null||t===void 0)&&t.message&&(a=l.error.message)}catch{}throw ot.create("config-fetch-failed",{httpStatus:s.status,responseMessage:a})}return s.json()}async function gA(e,t=Yv,n){const{appId:r,apiKey:i,measurementId:o}=e.options;if(!r)throw ot.create("no-app-id");if(!i){if(o)return{measurementId:o,appId:r};throw ot.create("no-api-key")}const s=t.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new yA;return setTimeout(async()=>{a.abort()},n!==void 0?n:eA),Xv({appId:r,apiKey:i,measurementId:o},s,a,t)}async function Xv(e,{throttleEndTimeMillis:t,backoffCount:n},r,i=Yv){const{appId:o,measurementId:s}=e;try{await mA(r,t)}catch(a){if(s)return Be.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${s} provided in the "measurementId" field in the local Firebase config. [${a.message}]`),{appId:o,measurementId:s};throw a}try{const a=await pA(e);return i.deleteThrottleMetadata(o),a}catch(a){if(!vA(a)){if(i.deleteThrottleMetadata(o),s)return Be.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${s} provided in the "measurementId" field in the local Firebase config. [${a.message}]`),{appId:o,measurementId:s};throw a}const l=Number(a.customData.httpStatus)===503?zh(n,i.intervalMillis,cA):zh(n,i.intervalMillis),u={throttleEndTimeMillis:Date.now()+l,backoffCount:n+1};return i.setThrottleMetadata(o,u),Be.debug(`Calling attemptFetch again in ${l} millis`),Xv(e,u,r,i)}}function mA(e,t){return new Promise((n,r)=>{const i=Math.max(t-Date.now(),0),o=setTimeout(n,i);e.addEventListener(()=>{clearTimeout(o),r(ot.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function vA(e){if(!(e instanceof Et)||!e.customData)return!1;const t=Number(e.customData.httpStatus);return t===429||t===500||t===503||t===504}class yA{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wA(){if(pv())try{await gv()}catch(e){return Be.warn(ot.create("indexeddb-unavailable",{errorInfo:e}).message),!1}else return Be.warn(ot.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function _A(e,t,n,r,i,o,s){var a;const l=gA(e);l.then(w=>{n[w.measurementId]=w.appId,e.options.measurementId&&w.measurementId!==e.options.measurementId&&Be.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${w.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(w=>Be.error(w)),t.push(l);const u=wA().then(w=>{if(w)return r.getId()}),[p,y]=await Promise.all([l,u]);lA()||nA(o,p.measurementId),i("js",new Date);const d=(a=s==null?void 0:s.config)!==null&&a!==void 0?a:{};return d[Zk]="firebase",d.update=!0,y!=null&&(d[Qk]=y),i("config",p.measurementId,d),p.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EA{constructor(t){this.app=t}_delete(){return delete Ri[this.app.options.appId],Promise.resolve()}}let Ri={},ep=[];const tp={};let Tl="dataLayer",SA="gtag",np,Jv,rp=!1;function TA(){const e=[];if(hv()&&e.push("This is a browser extension environment."),GI()||e.push("Cookies are not available."),e.length>0){const t=e.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=ot.create("invalid-analytics-context",{errorInfo:t});Be.warn(n.message)}}function IA(e,t,n){TA();const r=e.options.appId;if(!r)throw ot.create("no-app-id");if(!e.options.apiKey)if(e.options.measurementId)Be.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw ot.create("no-api-key");if(Ri[r]!=null)throw ot.create("already-exists",{id:r});if(!rp){rA(Tl);const{wrappedGtag:o,gtagCore:s}=aA(Ri,ep,tp,Tl,SA);Jv=o,np=s,rp=!0}return Ri[r]=_A(e,ep,tp,t,np,Tl,n),new EA(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function CA(e,t,n,r,i){if(i&&i.global){e("event",n,r);return}else{const o=await t,s=Object.assign(Object.assign({},r),{send_to:o});e("event",n,s)}}function kA(e,t,n,r){e=Hr(e),CA(Jv,Ri[e.app.options.appId],t,n,r).catch(i=>Be.error(i))}const ip="@firebase/analytics",op="0.7.7";function AA(){Qe(new Je(Zh,(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("installations-internal").getImmediate();return IA(r,i,n)},"PUBLIC")),Qe(new Je("analytics-internal",e,"PRIVATE")),$e(ip,op),$e(ip,op,"esm2017");function e(t){try{const n=t.getProvider(Zh).getImmediate();return{logEvent:(r,i,o)=>kA(n,r,i,o)}}catch(n){throw ot.create("interop-component-reg-failed",{reason:n})}}}AA();var OA=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},k,uf=uf||{},M=OA||self;function Ls(){}function $u(e){var t=typeof e;return t=t!="object"?t:e?Array.isArray(e)?"array":t:"null",t=="array"||t=="object"&&typeof e.length=="number"}function wo(e){var t=typeof e;return t=="object"&&e!=null||t=="function"}function RA(e){return Object.prototype.hasOwnProperty.call(e,Il)&&e[Il]||(e[Il]=++PA)}var Il="closure_uid_"+(1e9*Math.random()>>>0),PA=0;function NA(e,t,n){return e.call.apply(e.bind,arguments)}function $A(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),e.apply(t,i)}}return function(){return e.apply(t,arguments)}}function ve(e,t,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?ve=NA:ve=$A,ve.apply(null,arguments)}function zo(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),e.apply(this,r)}}function _e(e,t){function n(){}n.prototype=t.prototype,e.Z=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Vb=function(r,i,o){for(var s=Array(arguments.length-2),a=2;a<arguments.length;a++)s[a-2]=arguments[a];return t.prototype[i].apply(r,s)}}function yn(){this.s=this.s,this.o=this.o}var DA=0,LA={};yn.prototype.s=!1;yn.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),DA!=0)){var e=RA(this);delete LA[e]}};yn.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Qv=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if(typeof e=="string")return typeof t!="string"||t.length!=1?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1},Zv=Array.prototype.forEach?function(e,t,n){Array.prototype.forEach.call(e,t,n)}:function(e,t,n){const r=e.length,i=typeof e=="string"?e.split(""):e;for(let o=0;o<r;o++)o in i&&t.call(n,i[o],o,e)};function xA(e){e:{var t=kO;const n=e.length,r=typeof e=="string"?e.split(""):e;for(let i=0;i<n;i++)if(i in r&&t.call(void 0,r[i],i,e)){t=i;break e}t=-1}return 0>t?null:typeof e=="string"?e.charAt(t):e[t]}function sp(e){return Array.prototype.concat.apply([],arguments)}function cf(e){const t=e.length;if(0<t){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function xs(e){return/^[\s\xa0]*$/.test(e)}var ap=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function Oe(e,t){return e.indexOf(t)!=-1}function Cl(e,t){return e<t?-1:e>t?1:0}var Re;e:{var lp=M.navigator;if(lp){var up=lp.userAgent;if(up){Re=up;break e}}Re=""}function ff(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function ey(e){const t={};for(const n in e)t[n]=e[n];return t}var cp="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ty(e,t){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)e[n]=r[n];for(let o=0;o<cp.length;o++)n=cp[o],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function df(e){return df[" "](e),e}df[" "]=Ls;function bA(e){var t=FA;return Object.prototype.hasOwnProperty.call(t,9)?t[9]:t[9]=e(9)}var MA=Oe(Re,"Opera"),Qi=Oe(Re,"Trident")||Oe(Re,"MSIE"),ny=Oe(Re,"Edge"),Du=ny||Qi,ry=Oe(Re,"Gecko")&&!(Oe(Re.toLowerCase(),"webkit")&&!Oe(Re,"Edge"))&&!(Oe(Re,"Trident")||Oe(Re,"MSIE"))&&!Oe(Re,"Edge"),jA=Oe(Re.toLowerCase(),"webkit")&&!Oe(Re,"Edge");function iy(){var e=M.document;return e?e.documentMode:void 0}var Lu;e:{var kl="",Al=function(){var e=Re;if(ry)return/rv:([^\);]+)(\)|;)/.exec(e);if(ny)return/Edge\/([\d\.]+)/.exec(e);if(Qi)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e);if(jA)return/WebKit\/(\S+)/.exec(e);if(MA)return/(?:Version)[ \/]?(\S+)/.exec(e)}();if(Al&&(kl=Al?Al[1]:""),Qi){var Ol=iy();if(Ol!=null&&Ol>parseFloat(kl)){Lu=String(Ol);break e}}Lu=kl}var FA={};function UA(){return bA(function(){let e=0;const t=ap(String(Lu)).split("."),n=ap("9").split("."),r=Math.max(t.length,n.length);for(let s=0;e==0&&s<r;s++){var i=t[s]||"",o=n[s]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],o=/(\d*)(\D*)(.*)/.exec(o)||["","","",""],i[0].length==0&&o[0].length==0)break;e=Cl(i[1].length==0?0:parseInt(i[1],10),o[1].length==0?0:parseInt(o[1],10))||Cl(i[2].length==0,o[2].length==0)||Cl(i[2],o[2]),i=i[3],o=o[3]}while(e==0)}return 0<=e})}M.document&&Qi&&iy();var BA=function(){if(!M.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{M.addEventListener("test",Ls,t),M.removeEventListener("test",Ls,t)}catch{}return e}();function Ie(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}Ie.prototype.h=function(){this.defaultPrevented=!0};function Zi(e,t){if(Ie.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(ry){e:{try{df(t.nodeName);var i=!0;break e}catch{}i=!1}i||(t=null)}}else n=="mouseover"?t=e.fromElement:n=="mouseout"&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=e.clientX!==void 0?e.clientX:e.pageX,this.clientY=e.clientY!==void 0?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=typeof e.pointerType=="string"?e.pointerType:zA[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&Zi.Z.h.call(this)}}_e(Zi,Ie);var zA={2:"touch",3:"pen",4:"mouse"};Zi.prototype.h=function(){Zi.Z.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var _o="closure_listenable_"+(1e6*Math.random()|0),VA=0;function HA(e,t,n,r,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.ia=i,this.key=++VA,this.ca=this.fa=!1}function Ia(e){e.ca=!0,e.listener=null,e.proxy=null,e.src=null,e.ia=null}function Ca(e){this.src=e,this.g={},this.h=0}Ca.prototype.add=function(e,t,n,r,i){var o=e.toString();e=this.g[o],e||(e=this.g[o]=[],this.h++);var s=bu(e,t,r,i);return-1<s?(t=e[s],n||(t.fa=!1)):(t=new HA(t,this.src,o,!!r,i),t.fa=n,e.push(t)),t};function xu(e,t){var n=t.type;if(n in e.g){var r=e.g[n],i=Qv(r,t),o;(o=0<=i)&&Array.prototype.splice.call(r,i,1),o&&(Ia(t),e.g[n].length==0&&(delete e.g[n],e.h--))}}function bu(e,t,n,r){for(var i=0;i<e.length;++i){var o=e[i];if(!o.ca&&o.listener==t&&o.capture==!!n&&o.ia==r)return i}return-1}var hf="closure_lm_"+(1e6*Math.random()|0),Rl={};function oy(e,t,n,r,i){if(r&&r.once)return ay(e,t,n,r,i);if(Array.isArray(t)){for(var o=0;o<t.length;o++)oy(e,t[o],n,r,i);return null}return n=mf(n),e&&e[_o]?e.N(t,n,wo(r)?!!r.capture:!!r,i):sy(e,t,n,!1,r,i)}function sy(e,t,n,r,i,o){if(!t)throw Error("Invalid event type");var s=wo(i)?!!i.capture:!!i,a=gf(e);if(a||(e[hf]=a=new Ca(e)),n=a.add(t,n,r,s,o),n.proxy)return n;if(r=WA(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)BA||(i=s),i===void 0&&(i=!1),e.addEventListener(t.toString(),r,i);else if(e.attachEvent)e.attachEvent(uy(t.toString()),r);else if(e.addListener&&e.removeListener)e.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function WA(){function e(n){return t.call(e.src,e.listener,n)}var t=GA;return e}function ay(e,t,n,r,i){if(Array.isArray(t)){for(var o=0;o<t.length;o++)ay(e,t[o],n,r,i);return null}return n=mf(n),e&&e[_o]?e.O(t,n,wo(r)?!!r.capture:!!r,i):sy(e,t,n,!0,r,i)}function ly(e,t,n,r,i){if(Array.isArray(t))for(var o=0;o<t.length;o++)ly(e,t[o],n,r,i);else r=wo(r)?!!r.capture:!!r,n=mf(n),e&&e[_o]?(e=e.i,t=String(t).toString(),t in e.g&&(o=e.g[t],n=bu(o,n,r,i),-1<n&&(Ia(o[n]),Array.prototype.splice.call(o,n,1),o.length==0&&(delete e.g[t],e.h--)))):e&&(e=gf(e))&&(t=e.g[t.toString()],e=-1,t&&(e=bu(t,n,r,i)),(n=-1<e?t[e]:null)&&pf(n))}function pf(e){if(typeof e!="number"&&e&&!e.ca){var t=e.src;if(t&&t[_o])xu(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(uy(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=gf(t))?(xu(n,e),n.h==0&&(n.src=null,t[hf]=null)):Ia(e)}}}function uy(e){return e in Rl?Rl[e]:Rl[e]="on"+e}function GA(e,t){if(e.ca)e=!0;else{t=new Zi(t,this);var n=e.listener,r=e.ia||e.src;e.fa&&pf(e),e=n.call(r,t)}return e}function gf(e){return e=e[hf],e instanceof Ca?e:null}var Pl="__closure_events_fn_"+(1e9*Math.random()>>>0);function mf(e){return typeof e=="function"?e:(e[Pl]||(e[Pl]=function(t){return e.handleEvent(t)}),e[Pl])}function de(){yn.call(this),this.i=new Ca(this),this.P=this,this.I=null}_e(de,yn);de.prototype[_o]=!0;de.prototype.removeEventListener=function(e,t,n,r){ly(this,e,t,n,r)};function ye(e,t){var n,r=e.I;if(r)for(n=[];r;r=r.I)n.push(r);if(e=e.P,r=t.type||t,typeof t=="string")t=new Ie(t,e);else if(t instanceof Ie)t.target=t.target||e;else{var i=t;t=new Ie(r,e),ty(t,i)}if(i=!0,n)for(var o=n.length-1;0<=o;o--){var s=t.g=n[o];i=Vo(s,r,!0,t)&&i}if(s=t.g=e,i=Vo(s,r,!0,t)&&i,i=Vo(s,r,!1,t)&&i,n)for(o=0;o<n.length;o++)s=t.g=n[o],i=Vo(s,r,!1,t)&&i}de.prototype.M=function(){if(de.Z.M.call(this),this.i){var e=this.i,t;for(t in e.g){for(var n=e.g[t],r=0;r<n.length;r++)Ia(n[r]);delete e.g[t],e.h--}}this.I=null};de.prototype.N=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)};de.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};function Vo(e,t,n,r){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var i=!0,o=0;o<t.length;++o){var s=t[o];if(s&&!s.ca&&s.capture==n){var a=s.listener,l=s.ia||s.src;s.fa&&xu(e.i,s),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var vf=M.JSON.stringify;function KA(){var e=fy;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class qA{constructor(){this.h=this.g=null}add(t,n){const r=cy.get();r.set(t,n),this.h?this.h.next=r:this.g=r,this.h=r}}var cy=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}(()=>new YA,e=>e.reset());class YA{constructor(){this.next=this.g=this.h=null}set(t,n){this.h=t,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function XA(e){M.setTimeout(()=>{throw e},0)}function yf(e,t){Mu||JA(),ju||(Mu(),ju=!0),fy.add(e,t)}var Mu;function JA(){var e=M.Promise.resolve(void 0);Mu=function(){e.then(QA)}}var ju=!1,fy=new qA;function QA(){for(var e;e=KA();){try{e.h.call(e.g)}catch(n){XA(n)}var t=cy;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}ju=!1}function ka(e,t){de.call(this),this.h=e||1,this.g=t||M,this.j=ve(this.kb,this),this.l=Date.now()}_e(ka,de);k=ka.prototype;k.da=!1;k.S=null;k.kb=function(){if(this.da){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-e):(this.S&&(this.g.clearTimeout(this.S),this.S=null),ye(this,"tick"),this.da&&(wf(this),this.start()))}};k.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function wf(e){e.da=!1,e.S&&(e.g.clearTimeout(e.S),e.S=null)}k.M=function(){ka.Z.M.call(this),wf(this),delete this.g};function _f(e,t,n){if(typeof e=="function")n&&(e=ve(e,n));else if(e&&typeof e.handleEvent=="function")e=ve(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:M.setTimeout(e,t||0)}function dy(e){e.g=_f(()=>{e.g=null,e.i&&(e.i=!1,dy(e))},e.j);const t=e.h;e.h=null,e.m.apply(null,t)}class ZA extends yn{constructor(t,n){super();this.m=t,this.j=n,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:dy(this)}M(){super.M(),this.g&&(M.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function eo(e){yn.call(this),this.h=e,this.g={}}_e(eo,yn);var fp=[];function hy(e,t,n,r){Array.isArray(n)||(n&&(fp[0]=n.toString()),n=fp);for(var i=0;i<n.length;i++){var o=oy(t,n[i],r||e.handleEvent,!1,e.h||e);if(!o)break;e.g[o.key]=o}}function py(e){ff(e.g,function(t,n){this.g.hasOwnProperty(n)&&pf(t)},e),e.g={}}eo.prototype.M=function(){eo.Z.M.call(this),py(this)};eo.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Aa(){this.g=!0}Aa.prototype.Aa=function(){this.g=!1};function eO(e,t,n,r,i,o){e.info(function(){if(e.g)if(o)for(var s="",a=o.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var p=u[0];u=u[1];var y=p.split("_");s=2<=y.length&&y[1]=="type"?s+(p+"="+u+"&"):s+(p+"=redacted&")}}else s=null;else s=o;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+`
`+n+`
`+s})}function tO(e,t,n,r,i,o,s){e.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+`
`+n+`
`+o+" "+s})}function gr(e,t,n,r){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+rO(e,n)+(r?" "+r:"")})}function nO(e,t){e.info(function(){return"TIMEOUT: "+t})}Aa.prototype.info=function(){};function rO(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n){for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var o=i[0];if(o!="noop"&&o!="stop"&&o!="close")for(var s=1;s<i.length;s++)i[s]=""}}}}return vf(n)}catch{return t}}var Wr={},dp=null;function Ef(){return dp=dp||new de}Wr.Ma="serverreachability";function gy(e){Ie.call(this,Wr.Ma,e)}_e(gy,Ie);function to(e){const t=Ef();ye(t,new gy(t,e))}Wr.STAT_EVENT="statevent";function my(e,t){Ie.call(this,Wr.STAT_EVENT,e),this.stat=t}_e(my,Ie);function Pe(e){const t=Ef();ye(t,new my(t,e))}Wr.Na="timingevent";function vy(e,t){Ie.call(this,Wr.Na,e),this.size=t}_e(vy,Ie);function Eo(e,t){if(typeof e!="function")throw Error("Fn must not be null and must be a function");return M.setTimeout(function(){e()},t)}var Sf={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},iO={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function Tf(){}Tf.prototype.h=null;function hp(e){return e.h||(e.h=e.i())}var Oa={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function If(){Ie.call(this,"d")}_e(If,Ie);function Cf(){Ie.call(this,"c")}_e(Cf,Ie);var Fu;function Ra(){}_e(Ra,Tf);Ra.prototype.g=function(){return new XMLHttpRequest};Ra.prototype.i=function(){return{}};Fu=new Ra;function So(e,t,n,r){this.l=e,this.j=t,this.m=n,this.X=r||1,this.V=new eo(this),this.P=oO,e=Du?125:void 0,this.W=new ka(e),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new yy}function yy(){this.i=null,this.g="",this.h=!1}var oO=45e3,Uu={},bs={};k=So.prototype;k.setTimeout=function(e){this.P=e};function Bu(e,t,n){e.K=1,e.v=Na(Dt(t)),e.s=n,e.U=!0,wy(e,null)}function wy(e,t){e.F=Date.now(),To(e),e.A=Dt(e.v);var n=e.A,r=e.X;Array.isArray(r)||(r=[String(r)]),ky(n.h,"t",r),e.C=0,n=e.l.H,e.h=new yy,e.g=Gy(e.l,n?t:null,!e.s),0<e.O&&(e.L=new ZA(ve(e.Ia,e,e.g),e.O)),hy(e.V,e.g,"readystatechange",e.gb),t=e.H?ey(e.H):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ea(e.A,e.u,e.s,t)):(e.u="GET",e.g.ea(e.A,e.u,null,t)),to(1),eO(e.j,e.u,e.A,e.m,e.X,e.s)}k.gb=function(e){e=e.target;const t=this.L;t&&Ot(e)==3?t.l():this.Ia(e)};k.Ia=function(e){try{if(e==this.g)e:{const p=Ot(this.g);var t=this.g.Da();const y=this.g.ba();if(!(3>p)&&(p!=3||Du||this.g&&(this.h.h||this.g.ga()||vp(this.g)))){this.I||p!=4||t==7||(t==8||0>=y?to(3):to(2)),Pa(this);var n=this.g.ba();this.N=n;t:if(_y(this)){var r=vp(this.g);e="";var i=r.length,o=Ot(this.g)==4;if(!this.h.i){if(typeof TextDecoder=="undefined"){Nn(this),Pi(this);var s="";break t}this.h.i=new M.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:o&&t==i-1});r.splice(0,i),this.h.g+=e,this.C=0,s=this.h.g}else s=this.g.ga();if(this.i=n==200,tO(this.j,this.u,this.A,this.m,this.X,p,n),this.i){if(this.$&&!this.J){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!xs(a)){var u=a;break t}}u=null}if(n=u)gr(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,zu(this,n);else{this.i=!1,this.o=3,Pe(12),Nn(this),Pi(this);break e}}this.U?(Ey(this,p,s),Du&&this.i&&p==3&&(hy(this.V,this.W,"tick",this.fb),this.W.start())):(gr(this.j,this.m,s,null),zu(this,s)),p==4&&Nn(this),this.i&&!this.I&&(p==4?zy(this.l,this):(this.i=!1,To(this)))}else n==400&&0<s.indexOf("Unknown SID")?(this.o=3,Pe(12)):(this.o=0,Pe(13)),Nn(this),Pi(this)}}}catch{}finally{}};function _y(e){return e.g?e.u=="GET"&&e.K!=2&&e.l.Ba:!1}function Ey(e,t,n){let r=!0,i;for(;!e.I&&e.C<n.length;)if(i=sO(e,n),i==bs){t==4&&(e.o=4,Pe(14),r=!1),gr(e.j,e.m,null,"[Incomplete Response]");break}else if(i==Uu){e.o=4,Pe(15),gr(e.j,e.m,n,"[Invalid Chunk]"),r=!1;break}else gr(e.j,e.m,i,null),zu(e,i);_y(e)&&i!=bs&&i!=Uu&&(e.h.g="",e.C=0),t!=4||n.length!=0||e.h.h||(e.o=1,Pe(16),r=!1),e.i=e.i&&r,r?0<n.length&&!e.aa&&(e.aa=!0,t=e.l,t.g==e&&t.$&&!t.L&&(t.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),Lf(t),t.L=!0,Pe(11))):(gr(e.j,e.m,n,"[Invalid Chunked Response]"),Nn(e),Pi(e))}k.fb=function(){if(this.g){var e=Ot(this.g),t=this.g.ga();this.C<t.length&&(Pa(this),Ey(this,e,t),this.i&&e!=4&&To(this))}};function sO(e,t){var n=e.C,r=t.indexOf(`
`,n);return r==-1?bs:(n=Number(t.substring(n,r)),isNaN(n)?Uu:(r+=1,r+n>t.length?bs:(t=t.substr(r,n),e.C=r+n,t)))}k.cancel=function(){this.I=!0,Nn(this)};function To(e){e.Y=Date.now()+e.P,Sy(e,e.P)}function Sy(e,t){if(e.B!=null)throw Error("WatchDog timer not null");e.B=Eo(ve(e.eb,e),t)}function Pa(e){e.B&&(M.clearTimeout(e.B),e.B=null)}k.eb=function(){this.B=null;const e=Date.now();0<=e-this.Y?(nO(this.j,this.A),this.K!=2&&(to(3),Pe(17)),Nn(this),this.o=2,Pi(this)):Sy(this,this.Y-e)};function Pi(e){e.l.G==0||e.I||zy(e.l,e)}function Nn(e){Pa(e);var t=e.L;t&&typeof t.na=="function"&&t.na(),e.L=null,wf(e.W),py(e.V),e.g&&(t=e.g,e.g=null,t.abort(),t.na())}function zu(e,t){try{var n=e.l;if(n.G!=0&&(n.g==e||Vu(n.i,e))){if(n.I=e.N,!e.J&&Vu(n.i,e)&&n.G==3){try{var r=n.Ca.g.parse(t)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0)e:if(!n.u){if(n.g)if(n.g.F+3e3<e.F)Us(n),xa(n);else break e;Df(n),Pe(18)}else n.ta=i[1],0<n.ta-n.U&&37500>i[2]&&n.N&&n.A==0&&!n.v&&(n.v=Eo(ve(n.ab,n),6e3));if(1>=Ry(n.i)&&n.ka){try{n.ka()}catch{}n.ka=void 0}}else $n(n,11)}else if((e.J||n.g==e)&&Us(n),!xs(t))for(i=n.Ca.g.parse(t),t=0;t<i.length;t++){let u=i[t];if(n.U=u[0],u=u[1],n.G==2)if(u[0]=="c"){n.J=u[1],n.la=u[2];const p=u[3];p!=null&&(n.ma=p,n.h.info("VER="+n.ma));const y=u[4];y!=null&&(n.za=y,n.h.info("SVER="+n.za));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.K=r,n.h.info("backChannelRequestTimeoutMs_="+r)),r=n;const w=e.g;if(w){const I=w.g?w.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(I){var o=r.i;!o.g&&(Oe(I,"spdy")||Oe(I,"quic")||Oe(I,"h2"))&&(o.j=o.l,o.g=new Set,o.h&&(Of(o,o.h),o.h=null))}if(r.D){const C=w.g?w.g.getResponseHeader("X-HTTP-Session-Id"):null;C&&(r.sa=C,Q(r.F,r.D,C))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-e.F,n.h.info("Handshake RTT: "+n.O+"ms")),r=n;var s=e;if(r.oa=Wy(r,r.H?r.la:null,r.W),s.J){Py(r.i,s);var a=s,l=r.K;l&&a.setTimeout(l),a.B&&(Pa(a),To(a)),r.g=s}else Uy(r);0<n.l.length&&ba(n)}else u[0]!="stop"&&u[0]!="close"||$n(n,7);else n.G==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?$n(n,7):$f(n):u[0]!="noop"&&n.j&&n.j.wa(u),n.A=0)}}to(4)}catch{}}function aO(e){if(e.R&&typeof e.R=="function")return e.R();if(typeof e=="string")return e.split("");if($u(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}t=[],n=0;for(r in e)t[n++]=e[r];return t}function kf(e,t){if(e.forEach&&typeof e.forEach=="function")e.forEach(t,void 0);else if($u(e)||typeof e=="string")Zv(e,t,void 0);else{if(e.T&&typeof e.T=="function")var n=e.T();else if(e.R&&typeof e.R=="function")n=void 0;else if($u(e)||typeof e=="string"){n=[];for(var r=e.length,i=0;i<r;i++)n.push(i)}else for(i in n=[],r=0,e)n[r++]=i;r=aO(e),i=r.length;for(var o=0;o<i;o++)t.call(void 0,r[o],n&&n[o],e)}}function Gr(e,t){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var r=0;r<n;r+=2)this.set(arguments[r],arguments[r+1])}else if(e)if(e instanceof Gr)for(n=e.T(),r=0;r<n.length;r++)this.set(n[r],e.get(n[r]));else for(r in e)this.set(r,e[r])}k=Gr.prototype;k.R=function(){Af(this);for(var e=[],t=0;t<this.g.length;t++)e.push(this.h[this.g[t]]);return e};k.T=function(){return Af(this),this.g.concat()};function Af(e){if(e.i!=e.g.length){for(var t=0,n=0;t<e.g.length;){var r=e.g[t];Hn(e.h,r)&&(e.g[n++]=r),t++}e.g.length=n}if(e.i!=e.g.length){var i={};for(n=t=0;t<e.g.length;)r=e.g[t],Hn(i,r)||(e.g[n++]=r,i[r]=1),t++;e.g.length=n}}k.get=function(e,t){return Hn(this.h,e)?this.h[e]:t};k.set=function(e,t){Hn(this.h,e)||(this.i++,this.g.push(e)),this.h[e]=t};k.forEach=function(e,t){for(var n=this.T(),r=0;r<n.length;r++){var i=n[r],o=this.get(i);e.call(t,o,i,this)}};function Hn(e,t){return Object.prototype.hasOwnProperty.call(e,t)}var Ty=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function lO(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),i=null;if(0<=r){var o=e[n].substring(0,r);i=e[n].substring(r+1)}else o=e[n];t(o,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Wn(e,t){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,e instanceof Wn){this.g=t!==void 0?t:e.g,Ms(this,e.j),this.s=e.s,js(this,e.i),Fs(this,e.m),this.l=e.l,t=e.h;var n=new no;n.i=t.i,t.g&&(n.g=new Gr(t.g),n.h=t.h),pp(this,n),this.o=e.o}else e&&(n=String(e).match(Ty))?(this.g=!!t,Ms(this,n[1]||"",!0),this.s=Ni(n[2]||""),js(this,n[3]||"",!0),Fs(this,n[4]),this.l=Ni(n[5]||"",!0),pp(this,n[6]||"",!0),this.o=Ni(n[7]||"")):(this.g=!!t,this.h=new no(null,this.g))}Wn.prototype.toString=function(){var e=[],t=this.j;t&&e.push(gi(t,gp,!0),":");var n=this.i;return(n||t=="file")&&(e.push("//"),(t=this.s)&&e.push(gi(t,gp,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&e.push(":",String(n))),(n=this.l)&&(this.i&&n.charAt(0)!="/"&&e.push("/"),e.push(gi(n,n.charAt(0)=="/"?hO:dO,!0))),(n=this.h.toString())&&e.push("?",n),(n=this.o)&&e.push("#",gi(n,gO)),e.join("")};function Dt(e){return new Wn(e)}function Ms(e,t,n){e.j=n?Ni(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function js(e,t,n){e.i=n?Ni(t,!0):t}function Fs(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function pp(e,t,n){t instanceof no?(e.h=t,mO(e.h,e.g)):(n||(t=gi(t,pO)),e.h=new no(t,e.g))}function Q(e,t,n){e.h.set(t,n)}function Na(e){return Q(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function uO(e){return e instanceof Wn?Dt(e):new Wn(e,void 0)}function cO(e,t,n,r){var i=new Wn(null,void 0);return e&&Ms(i,e),t&&js(i,t),n&&Fs(i,n),r&&(i.l=r),i}function Ni(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function gi(e,t,n){return typeof e=="string"?(e=encodeURI(e).replace(t,fO),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function fO(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(e&15).toString(16)}var gp=/[#\/\?@]/g,dO=/[#\?:]/g,hO=/[#\?]/g,pO=/[#\?@]/g,gO=/#/g;function no(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function wn(e){e.g||(e.g=new Gr,e.h=0,e.i&&lO(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}k=no.prototype;k.add=function(e,t){wn(this),this.i=null,e=Kr(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this};function Iy(e,t){wn(e),t=Kr(e,t),Hn(e.g.h,t)&&(e.i=null,e.h-=e.g.get(t).length,e=e.g,Hn(e.h,t)&&(delete e.h[t],e.i--,e.g.length>2*e.i&&Af(e)))}function Cy(e,t){return wn(e),t=Kr(e,t),Hn(e.g.h,t)}k.forEach=function(e,t){wn(this),this.g.forEach(function(n,r){Zv(n,function(i){e.call(t,i,r,this)},this)},this)};k.T=function(){wn(this);for(var e=this.g.R(),t=this.g.T(),n=[],r=0;r<t.length;r++)for(var i=e[r],o=0;o<i.length;o++)n.push(t[r]);return n};k.R=function(e){wn(this);var t=[];if(typeof e=="string")Cy(this,e)&&(t=sp(t,this.g.get(Kr(this,e))));else{e=this.g.R();for(var n=0;n<e.length;n++)t=sp(t,e[n])}return t};k.set=function(e,t){return wn(this),this.i=null,e=Kr(this,e),Cy(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this};k.get=function(e,t){return e?(e=this.R(e),0<e.length?String(e[0]):t):t};function ky(e,t,n){Iy(e,t),0<n.length&&(e.i=null,e.g.set(Kr(e,t),cf(n)),e.h+=n.length)}k.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var e=[],t=this.g.T(),n=0;n<t.length;n++){var r=t[n],i=encodeURIComponent(String(r));r=this.R(r);for(var o=0;o<r.length;o++){var s=i;r[o]!==""&&(s+="="+encodeURIComponent(String(r[o]))),e.push(s)}}return this.i=e.join("&")};function Kr(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function mO(e,t){t&&!e.j&&(wn(e),e.i=null,e.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(Iy(this,r),ky(this,i,n))},e)),e.j=t}var vO=class{constructor(e,t){this.h=e,this.g=t}};function Ay(e){this.l=e||yO,M.PerformanceNavigationTiming?(e=M.performance.getEntriesByType("navigation"),e=0<e.length&&(e[0].nextHopProtocol=="hq"||e[0].nextHopProtocol=="h2")):e=!!(M.g&&M.g.Ea&&M.g.Ea()&&M.g.Ea().Zb),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var yO=10;function Oy(e){return e.h?!0:e.g?e.g.size>=e.j:!1}function Ry(e){return e.h?1:e.g?e.g.size:0}function Vu(e,t){return e.h?e.h==t:e.g?e.g.has(t):!1}function Of(e,t){e.g?e.g.add(t):e.h=t}function Py(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}Ay.prototype.cancel=function(){if(this.i=Ny(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const e of this.g.values())e.cancel();this.g.clear()}};function Ny(e){if(e.h!=null)return e.i.concat(e.h.D);if(e.g!=null&&e.g.size!==0){let t=e.i;for(const n of e.g.values())t=t.concat(n.D);return t}return cf(e.i)}function Rf(){}Rf.prototype.stringify=function(e){return M.JSON.stringify(e,void 0)};Rf.prototype.parse=function(e){return M.JSON.parse(e,void 0)};function wO(){this.g=new Rf}function _O(e,t,n){const r=n||"";try{kf(e,function(i,o){let s=i;wo(i)&&(s=vf(i)),t.push(r+o+"="+encodeURIComponent(s))})}catch(i){throw t.push(r+"type="+encodeURIComponent("_badmap")),i}}function EO(e,t){const n=new Aa;if(M.Image){const r=new Image;r.onload=zo(Ho,n,r,"TestLoadImage: loaded",!0,t),r.onerror=zo(Ho,n,r,"TestLoadImage: error",!1,t),r.onabort=zo(Ho,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=zo(Ho,n,r,"TestLoadImage: timeout",!1,t),M.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=e}else t(!1)}function Ho(e,t,n,r,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(r)}catch{}}function $a(e){this.l=e.$b||null,this.j=e.ib||!1}_e($a,Tf);$a.prototype.g=function(){return new Da(this.l,this.j)};$a.prototype.i=function(e){return function(){return e}}({});function Da(e,t){de.call(this),this.D=e,this.u=t,this.m=void 0,this.readyState=Pf,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}_e(Da,de);var Pf=0;k=Da.prototype;k.open=function(e,t){if(this.readyState!=Pf)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,ro(this)};k.send=function(e){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||M).fetch(new Request(this.B,t)).then(this.Va.bind(this),this.ha.bind(this))};k.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Io(this)),this.readyState=Pf};k.Va=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,ro(this)),this.g&&(this.readyState=3,ro(this),this.g)))if(this.responseType==="arraybuffer")e.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(typeof M.ReadableStream!="undefined"&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;$y(this)}else e.text().then(this.Ua.bind(this),this.ha.bind(this))};function $y(e){e.j.read().then(e.Sa.bind(e)).catch(e.ha.bind(e))}k.Sa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?Io(this):ro(this),this.readyState==3&&$y(this)}};k.Ua=function(e){this.g&&(this.response=this.responseText=e,Io(this))};k.Ta=function(e){this.g&&(this.response=e,Io(this))};k.ha=function(){this.g&&Io(this)};function Io(e){e.readyState=4,e.l=null,e.j=null,e.A=null,ro(e)}k.setRequestHeader=function(e,t){this.v.append(e,t)};k.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""};k.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join(`\r
`)};function ro(e){e.onreadystatechange&&e.onreadystatechange.call(e)}Object.defineProperty(Da.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(e){this.m=e?"include":"same-origin"}});var SO=M.JSON.parse;function ae(e){de.call(this),this.headers=new Gr,this.u=e||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Dy,this.K=this.L=!1}_e(ae,de);var Dy="",TO=/^https?$/i,IO=["POST","PUT"];k=ae.prototype;k.ea=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+e);t=t?t.toUpperCase():"GET",this.H=e,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Fu.g(),this.C=this.u?hp(this.u):hp(Fu),this.g.onreadystatechange=ve(this.Fa,this);try{this.F=!0,this.g.open(t,String(e),!0),this.F=!1}catch(o){mp(this,o);return}e=n||"";const i=new Gr(this.headers);r&&kf(r,function(o,s){i.set(s,o)}),r=xA(i.T()),n=M.FormData&&e instanceof M.FormData,!(0<=Qv(IO,t))||r||n||i.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),i.forEach(function(o,s){this.g.setRequestHeader(s,o)},this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{by(this),0<this.B&&((this.K=CO(this.g))?(this.g.timeout=this.B,this.g.ontimeout=ve(this.pa,this)):this.A=_f(this.pa,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(o){mp(this,o)}};function CO(e){return Qi&&UA()&&typeof e.timeout=="number"&&e.ontimeout!==void 0}function kO(e){return e.toLowerCase()=="content-type"}k.pa=function(){typeof uf!="undefined"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,ye(this,"timeout"),this.abort(8))};function mp(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,Ly(e),La(e)}function Ly(e){e.D||(e.D=!0,ye(e,"complete"),ye(e,"error"))}k.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,ye(this,"complete"),ye(this,"abort"),La(this))};k.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),La(this,!0)),ae.Z.M.call(this)};k.Fa=function(){this.s||(this.F||this.v||this.l?xy(this):this.cb())};k.cb=function(){xy(this)};function xy(e){if(e.h&&typeof uf!="undefined"&&(!e.C[1]||Ot(e)!=4||e.ba()!=2)){if(e.v&&Ot(e)==4)_f(e.Fa,0,e);else if(ye(e,"readystatechange"),Ot(e)==4){e.h=!1;try{const a=e.ba();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var n;if(!(n=t)){var r;if(r=a===0){var i=String(e.H).match(Ty)[1]||null;if(!i&&M.self&&M.self.location){var o=M.self.location.protocol;i=o.substr(0,o.length-1)}r=!TO.test(i?i.toLowerCase():"")}n=r}if(n)ye(e,"complete"),ye(e,"success");else{e.m=6;try{var s=2<Ot(e)?e.g.statusText:""}catch{s=""}e.j=s+" ["+e.ba()+"]",Ly(e)}}finally{La(e)}}}}function La(e,t){if(e.g){by(e);const n=e.g,r=e.C[0]?Ls:null;e.g=null,e.C=null,t||ye(e,"ready");try{n.onreadystatechange=r}catch{}}}function by(e){e.g&&e.K&&(e.g.ontimeout=null),e.A&&(M.clearTimeout(e.A),e.A=null)}function Ot(e){return e.g?e.g.readyState:0}k.ba=function(){try{return 2<Ot(this)?this.g.status:-1}catch{return-1}};k.ga=function(){try{return this.g?this.g.responseText:""}catch{return""}};k.Qa=function(e){if(this.g){var t=this.g.responseText;return e&&t.indexOf(e)==0&&(t=t.substring(e.length)),SO(t)}};function vp(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.J){case Dy:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch{return null}}k.Da=function(){return this.m};k.La=function(){return typeof this.j=="string"?this.j:String(this.j)};function AO(e){let t="";return ff(e,function(n,r){t+=r,t+=":",t+=n,t+=`\r
`}),t}function Nf(e,t,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=AO(n),typeof e=="string"?n!=null&&encodeURIComponent(String(n)):Q(e,t,n))}function li(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function My(e){this.za=0,this.l=[],this.h=new Aa,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=li("failFast",!1,e),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=li("baseRetryDelayMs",5e3,e),this.$a=li("retryDelaySeedMs",1e4,e),this.Ya=li("forwardChannelMaxRetries",2,e),this.ra=li("forwardChannelRequestTimeoutMs",2e4,e),this.qa=e&&e.xmlHttpFactory||void 0,this.Ba=e&&e.Yb||!1,this.K=void 0,this.H=e&&e.supportsCrossDomainXhr||!1,this.J="",this.i=new Ay(e&&e.concurrentRequestLimit),this.Ca=new wO,this.ja=e&&e.fastHandshake||!1,this.Ra=e&&e.Wb||!1,e&&e.Aa&&this.h.Aa(),e&&e.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&e&&e.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!e||e.Xb!==!1}k=My.prototype;k.ma=8;k.G=1;function $f(e){if(jy(e),e.G==3){var t=e.V++,n=Dt(e.F);Q(n,"SID",e.J),Q(n,"RID",t),Q(n,"TYPE","terminate"),Co(e,n),t=new So(e,e.h,t,void 0),t.K=2,t.v=Na(Dt(n)),n=!1,M.navigator&&M.navigator.sendBeacon&&(n=M.navigator.sendBeacon(t.v.toString(),"")),!n&&M.Image&&(new Image().src=t.v,n=!0),n||(t.g=Gy(t.l,null),t.g.ea(t.v)),t.F=Date.now(),To(t)}Hy(e)}k.hb=function(e){try{this.h.info("Origin Trials invoked: "+e)}catch{}};function xa(e){e.g&&(Lf(e),e.g.cancel(),e.g=null)}function jy(e){xa(e),e.u&&(M.clearTimeout(e.u),e.u=null),Us(e),e.i.cancel(),e.m&&(typeof e.m=="number"&&M.clearTimeout(e.m),e.m=null)}function Nl(e,t){e.l.push(new vO(e.Za++,t)),e.G==3&&ba(e)}function ba(e){Oy(e.i)||e.m||(e.m=!0,yf(e.Ha,e),e.C=0)}function OO(e,t){return Ry(e.i)>=e.i.j-(e.m?1:0)?!1:e.m?(e.l=t.D.concat(e.l),!0):e.G==1||e.G==2||e.C>=(e.Xa?0:e.Ya)?!1:(e.m=Eo(ve(e.Ha,e,t),Vy(e,e.C)),e.C++,!0)}k.Ha=function(e){if(this.m)if(this.m=null,this.G==1){if(!e){this.V=Math.floor(1e5*Math.random()),e=this.V++;const i=new So(this,this.h,e,void 0);let o=this.s;if(this.P&&(o?(o=ey(o),ty(o,this.P)):o=this.P),this.o===null&&(i.H=o),this.ja)e:{for(var t=0,n=0;n<this.l.length;n++){t:{var r=this.l[n];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(t+=r,4096<t){t=n;break e}if(t===4096||n===this.l.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=Fy(this,i,t),n=Dt(this.F),Q(n,"RID",e),Q(n,"CVER",22),this.D&&Q(n,"X-HTTP-Session-Id",this.D),Co(this,n),this.o&&o&&Nf(n,this.o,o),Of(this.i,i),this.Ra&&Q(n,"TYPE","init"),this.ja?(Q(n,"$req",t),Q(n,"SID","null"),i.$=!0,Bu(i,n,null)):Bu(i,n,t),this.G=2}}else this.G==3&&(e?yp(this,e):this.l.length==0||Oy(this.i)||yp(this))};function yp(e,t){var n;t?n=t.m:n=e.V++;const r=Dt(e.F);Q(r,"SID",e.J),Q(r,"RID",n),Q(r,"AID",e.U),Co(e,r),e.o&&e.s&&Nf(r,e.o,e.s),n=new So(e,e.h,n,e.C+1),e.o===null&&(n.H=e.s),t&&(e.l=t.D.concat(e.l)),t=Fy(e,n,1e3),n.setTimeout(Math.round(.5*e.ra)+Math.round(.5*e.ra*Math.random())),Of(e.i,n),Bu(n,r,t)}function Co(e,t){e.j&&kf({},function(n,r){Q(t,r,n)})}function Fy(e,t,n){n=Math.min(e.l.length,n);var r=e.j?ve(e.j.Oa,e.j,e):null;e:{var i=e.l;let o=-1;for(;;){const s=["count="+n];o==-1?0<n?(o=i[0].h,s.push("ofs="+o)):o=0:s.push("ofs="+o);let a=!0;for(let l=0;l<n;l++){let u=i[l].h;const p=i[l].g;if(u-=o,0>u)o=Math.max(0,i[l].h-100),a=!1;else try{_O(p,s,"req"+u+"_")}catch{r&&r(p)}}if(a){r=s.join("&");break e}}}return e=e.l.splice(0,n),t.D=e,r}function Uy(e){e.g||e.u||(e.Y=1,yf(e.Ga,e),e.A=0)}function Df(e){return e.g||e.u||3<=e.A?!1:(e.Y++,e.u=Eo(ve(e.Ga,e),Vy(e,e.A)),e.A++,!0)}k.Ga=function(){if(this.u=null,By(this),this.$&&!(this.L||this.g==null||0>=this.O)){var e=2*this.O;this.h.info("BP detection timer enabled: "+e),this.B=Eo(ve(this.bb,this),e)}};k.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,Pe(10),xa(this),By(this))};function Lf(e){e.B!=null&&(M.clearTimeout(e.B),e.B=null)}function By(e){e.g=new So(e,e.h,"rpc",e.Y),e.o===null&&(e.g.H=e.s),e.g.O=0;var t=Dt(e.oa);Q(t,"RID","rpc"),Q(t,"SID",e.J),Q(t,"CI",e.N?"0":"1"),Q(t,"AID",e.U),Co(e,t),Q(t,"TYPE","xmlhttp"),e.o&&e.s&&Nf(t,e.o,e.s),e.K&&e.g.setTimeout(e.K);var n=e.g;e=e.la,n.K=1,n.v=Na(Dt(t)),n.s=null,n.U=!0,wy(n,e)}k.ab=function(){this.v!=null&&(this.v=null,xa(this),Df(this),Pe(19))};function Us(e){e.v!=null&&(M.clearTimeout(e.v),e.v=null)}function zy(e,t){var n=null;if(e.g==t){Us(e),Lf(e),e.g=null;var r=2}else if(Vu(e.i,t))n=t.D,Py(e.i,t),r=1;else return;if(e.I=t.N,e.G!=0){if(t.i)if(r==1){n=t.s?t.s.length:0,t=Date.now()-t.F;var i=e.C;r=Ef(),ye(r,new vy(r,n,t,i)),ba(e)}else Uy(e);else if(i=t.o,i==3||i==0&&0<e.I||!(r==1&&OO(e,t)||r==2&&Df(e)))switch(n&&0<n.length&&(t=e.i,t.i=t.i.concat(n)),i){case 1:$n(e,5);break;case 4:$n(e,10);break;case 3:$n(e,6);break;default:$n(e,2)}}}function Vy(e,t){let n=e.Pa+Math.floor(Math.random()*e.$a);return e.j||(n*=2),n*t}function $n(e,t){if(e.h.info("Error code "+t),t==2){var n=null;e.j&&(n=null);var r=ve(e.jb,e);n||(n=new Wn("//www.google.com/images/cleardot.gif"),M.location&&M.location.protocol=="http"||Ms(n,"https"),Na(n)),EO(n.toString(),r)}else Pe(2);e.G=0,e.j&&e.j.va(t),Hy(e),jy(e)}k.jb=function(e){e?(this.h.info("Successfully pinged google.com"),Pe(2)):(this.h.info("Failed to ping google.com"),Pe(1))};function Hy(e){e.G=0,e.I=-1,e.j&&((Ny(e.i).length!=0||e.l.length!=0)&&(e.i.i.length=0,cf(e.l),e.l.length=0),e.j.ua())}function Wy(e,t,n){let r=uO(n);if(r.i!="")t&&js(r,t+"."+r.i),Fs(r,r.m);else{const i=M.location;r=cO(i.protocol,t?t+"."+i.hostname:i.hostname,+i.port,n)}return e.aa&&ff(e.aa,function(i,o){Q(r,o,i)}),t=e.D,n=e.sa,t&&n&&Q(r,t,n),Q(r,"VER",e.ma),Co(e,r),r}function Gy(e,t,n){if(t&&!e.H)throw Error("Can't create secondary domain capable XhrIo object.");return t=n&&e.Ba&&!e.qa?new ae(new $a({ib:!0})):new ae(e.qa),t.L=e.H,t}function Ky(){}k=Ky.prototype;k.xa=function(){};k.wa=function(){};k.va=function(){};k.ua=function(){};k.Oa=function(){};function Ze(e,t){de.call(this),this.g=new My(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.ya&&(e?e["X-WebChannel-Client-Profile"]=t.ya:e={"X-WebChannel-Client-Profile":t.ya}),this.g.P=e,(e=t&&t.httpHeadersOverwriteParam)&&!xs(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!xs(t)&&(this.g.D=t,e=this.h,e!==null&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new qr(this)}_e(Ze,de);Ze.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var e=this.g,t=this.l,n=this.h||void 0;e.Wa&&(e.h.info("Origin Trials enabled."),yf(ve(e.hb,e,t))),Pe(0),e.W=t,e.aa=n||{},e.N=e.X,e.F=Wy(e,null,e.W),ba(e)};Ze.prototype.close=function(){$f(this.g)};Ze.prototype.u=function(e){if(typeof e=="string"){var t={};t.__data__=e,Nl(this.g,t)}else this.v?(t={},t.__data__=vf(e),Nl(this.g,t)):Nl(this.g,e)};Ze.prototype.M=function(){this.g.j=null,delete this.j,$f(this.g),delete this.g,Ze.Z.M.call(this)};function qy(e){If.call(this);var t=e.__sm__;if(t){e:{for(const n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=t!==null&&e in t?t[e]:void 0),this.data=t}else this.data=e}_e(qy,If);function Yy(){Cf.call(this),this.status=1}_e(Yy,Cf);function qr(e){this.g=e}_e(qr,Ky);qr.prototype.xa=function(){ye(this.g,"a")};qr.prototype.wa=function(e){ye(this.g,new qy(e))};qr.prototype.va=function(e){ye(this.g,new Yy(e))};qr.prototype.ua=function(){ye(this.g,"b")};Ze.prototype.send=Ze.prototype.u;Ze.prototype.open=Ze.prototype.m;Ze.prototype.close=Ze.prototype.close;Sf.NO_ERROR=0;Sf.TIMEOUT=8;Sf.HTTP_ERROR=6;iO.COMPLETE="complete";Oa.OPEN="a";Oa.CLOSE="b";Oa.ERROR="c";Oa.MESSAGE="d";de.prototype.listen=de.prototype.N;ae.prototype.listenOnce=ae.prototype.O;ae.prototype.getLastError=ae.prototype.La;ae.prototype.getLastErrorCode=ae.prototype.Da;ae.prototype.getStatus=ae.prototype.ba;ae.prototype.getResponseJson=ae.prototype.Qa;ae.prototype.getResponseText=ae.prototype.ga;ae.prototype.send=ae.prototype.ea;const wp="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class be{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}be.UNAUTHENTICATED=new be(null),be.GOOGLE_CREDENTIALS=new be("google-credentials-uid"),be.FIRST_PARTY=new be("first-party-uid"),be.MOCK_USER=new be("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ma="9.6.10";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bs=new yo("@firebase/firestore");function Fe(e,...t){if(Bs.logLevel<=H.DEBUG){const n=t.map(Xy);Bs.debug(`Firestore (${Ma}): ${e}`,...n)}}function xf(e,...t){if(Bs.logLevel<=H.ERROR){const n=t.map(Xy);Bs.error(`Firestore (${Ma}): ${e}`,...n)}}function Xy(e){if(typeof e=="string")return e;try{return t=e,JSON.stringify(t)}catch{return e}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jy(e="Unexpected state"){const t=`FIRESTORE (${Ma}) INTERNAL ASSERTION FAILED: `+e;throw xf(t),new Error(t)}function zs(e,t){e||Jy()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dt={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ht extends Et{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ar{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RO{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class PO{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(be.UNAUTHENTICATED))}shutdown(){}}class NO{constructor(t){this.t=t,this.currentUser=be.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let o=new Ar;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new Ar,t.enqueueRetryable(()=>i(this.currentUser))};const s=()=>{const l=o;t.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{Fe("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(Fe("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new Ar)}},0),s()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==t?(Fe("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(zs(typeof r.accessToken=="string"),new RO(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return zs(t===null||typeof t=="string"),new be(t)}}class $O{constructor(t,n,r){this.type="FirstParty",this.user=be.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",n);const i=t.auth.getAuthHeaderValueForFirstParty([]);i&&this.headers.set("Authorization",i),r&&this.headers.set("X-Goog-Iam-Authorization-Token",r)}}class DO{constructor(t,n,r){this.h=t,this.l=n,this.m=r}getToken(){return Promise.resolve(new $O(this.h,this.l,this.m))}start(t,n){t.enqueueRetryable(()=>n(be.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class LO{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class xO{constructor(t){this.g=t,this.forceRefresh=!1,this.appCheck=null,this.p=null}start(t,n){const r=o=>{o.error!=null&&Fe("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const s=o.token!==this.p;return this.p=o.token,Fe("FirebaseAppCheckTokenProvider",`Received ${s?"new":"existing"} token.`),s?n(o.token):Promise.resolve()};this.o=o=>{t.enqueueRetryable(()=>r(o))};const i=o=>{Fe("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.appCheck.addTokenListener(this.o)};this.g.onInit(o=>i(o)),setTimeout(()=>{if(!this.appCheck){const o=this.g.getImmediate({optional:!0});o?i(o):Fe("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(zs(typeof n.token=="string"),this.p=n.token,new LO(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bO(e){const t=typeof self!="undefined"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}class MO{static R(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/t.length)*t.length;let r="";for(;r.length<20;){const i=bO(40);for(let o=0;o<i.length;++o)r.length<20&&i[o]<n&&(r+=t.charAt(i[o]%t.length))}return r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jO{constructor(t,n,r,i,o,s,a,l){this.databaseId=t,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=o,this.forceLongPolling=s,this.autoDetectLongPolling=a,this.useFetchStreams=l}}class io{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new io("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof io&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var _p,B;(B=_p||(_p={}))[B.OK=0]="OK",B[B.CANCELLED=1]="CANCELLED",B[B.UNKNOWN=2]="UNKNOWN",B[B.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",B[B.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",B[B.NOT_FOUND=5]="NOT_FOUND",B[B.ALREADY_EXISTS=6]="ALREADY_EXISTS",B[B.PERMISSION_DENIED=7]="PERMISSION_DENIED",B[B.UNAUTHENTICATED=16]="UNAUTHENTICATED",B[B.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",B[B.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",B[B.ABORTED=10]="ABORTED",B[B.OUT_OF_RANGE=11]="OUT_OF_RANGE",B[B.UNIMPLEMENTED=12]="UNIMPLEMENTED",B[B.INTERNAL=13]="INTERNAL",B[B.UNAVAILABLE=14]="UNAVAILABLE",B[B.DATA_LOSS=15]="DATA_LOSS";function Qy(e){return e.name==="IndexedDbTransactionError"}function $l(){return typeof document!="undefined"?document:null}class FO{constructor(t,n,r=1e3,i=1.5,o=6e4){this.Jn=t,this.timerId=n,this.lo=r,this.fo=i,this._o=o,this.wo=0,this.mo=null,this.yo=Date.now(),this.reset()}reset(){this.wo=0}po(){this.wo=this._o}Io(t){this.cancel();const n=Math.floor(this.wo+this.To()),r=Math.max(0,Date.now()-this.yo),i=Math.max(0,n-r);i>0&&Fe("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.wo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.mo=this.Jn.enqueueAfterDelay(this.timerId,i,()=>(this.yo=Date.now(),t())),this.wo*=this.fo,this.wo<this.lo&&(this.wo=this.lo),this.wo>this._o&&(this.wo=this._o)}Eo(){this.mo!==null&&(this.mo.skipDelay(),this.mo=null)}cancel(){this.mo!==null&&(this.mo.cancel(),this.mo=null)}To(){return(Math.random()-.5)*this.wo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bf{constructor(t,n,r,i,o){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=o,this.deferred=new Ar,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(s=>{})}static createAndSchedule(t,n,r,i,o){const s=Date.now()+r,a=new bf(t,n,s,i,o);return a.start(r),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ht(dt.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function UO(e,t){if(xf("AsyncQueue",`${t}: ${e}`),Qy(e))return new ht(dt.UNAVAILABLE,`${t}: ${e}`);throw e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BO{constructor(t,n,r,i){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=be.UNAUTHENTICATED,this.clientId=MO.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async o=>{Fe("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(Fe("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new ht(dt.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Ar;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const r=UO(n,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}const Ep=new Map;function zO(e,t,n,r){if(t===!0&&r===!0)throw new ht(dt.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sp{constructor(t){var n;if(t.host===void 0){if(t.ssl!==void 0)throw new ht(dt.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new ht(dt.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,zO("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VO{constructor(t,n,r){this._authCredentials=n,this._appCheckCredentials=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Sp({}),this._settingsFrozen=!1,t instanceof io?this._databaseId=t:(this._app=t,this._databaseId=function(i){if(!Object.prototype.hasOwnProperty.apply(i.options,["projectId"]))throw new ht(dt.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new io(i.options.projectId)}(t))}get app(){if(!this._app)throw new ht(dt.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new ht(dt.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Sp(t),t.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new PO;switch(n.type){case"gapi":const r=n.client;return zs(!(typeof r!="object"||r===null||!r.auth||!r.auth.getAuthHeaderValueForFirstParty)),new DO(r,n.sessionIndex||"0",n.iamToken||null);case"provider":return n.client;default:throw new ht(dt.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const n=Ep.get(t);n&&(Fe("ComponentProvider","Removing Datastore"),Ep.delete(t),n.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HO{constructor(){this.Na=Promise.resolve(),this.ka=[],this.Ma=!1,this.Oa=[],this.Fa=null,this.$a=!1,this.Ba=!1,this.La=[],this.So=new FO(this,"async_queue_retry"),this.Ua=()=>{const n=$l();n&&Fe("AsyncQueue","Visibility state changed to "+n.visibilityState),this.So.Eo()};const t=$l();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Ua)}get isShuttingDown(){return this.Ma}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.qa(),this.Ga(t)}enterRestrictedMode(t){if(!this.Ma){this.Ma=!0,this.Ba=t||!1;const n=$l();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Ua)}}enqueue(t){if(this.qa(),this.Ma)return new Promise(()=>{});const n=new Ar;return this.Ga(()=>this.Ma&&this.Ba?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.ka.push(t),this.Ka()))}async Ka(){if(this.ka.length!==0){try{await this.ka[0](),this.ka.shift(),this.So.reset()}catch(t){if(!Qy(t))throw t;Fe("AsyncQueue","Operation failed with retryable error: "+t)}this.ka.length>0&&this.So.Io(()=>this.Ka())}}Ga(t){const n=this.Na.then(()=>(this.$a=!0,t().catch(r=>{this.Fa=r,this.$a=!1;const i=function(o){let s=o.message||"";return o.stack&&(s=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),s}(r);throw xf("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.$a=!1,r))));return this.Na=n,n}enqueueAfterDelay(t,n,r){this.qa(),this.La.indexOf(t)>-1&&(n=0);const i=bf.createAndSchedule(this,t,n,r,o=>this.Qa(o));return this.Oa.push(i),i}qa(){this.Fa&&Jy()}verifyOperationInProgress(){}async ja(){let t;do t=this.Na,await t;while(t!==this.Na)}Wa(t){for(const n of this.Oa)if(n.timerId===t)return!0;return!1}za(t){return this.ja().then(()=>{this.Oa.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Oa)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.ja()})}Ha(t){this.La.push(t)}Qa(t){const n=this.Oa.indexOf(t);this.Oa.splice(n,1)}}class WO extends VO{constructor(t,n,r){super(t,n,r),this.type="firestore",this._queue=new HO,this._persistenceKey="name"in t?t.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||GO(this),this._firestoreClient.terminate()}}function UP(e=rf()){return tr(e,"firestore").getImmediate()}function GO(e){var t;const n=e._freezeSettings(),r=function(i,o,s,a){return new jO(i,o,s,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(e._databaseId,((t=e._app)===null||t===void 0?void 0:t.options.appId)||"",e._persistenceKey,n);e._firestoreClient=new BO(e._authCredentials,e._appCheckCredentials,e._queue,r)}(function(e,t=!0){(function(n){Ma=n})(nr),Qe(new Je("firestore",(n,{options:r})=>{const i=n.getProvider("app").getImmediate(),o=new WO(i,new NO(n.getProvider("auth-internal")),new xO(n.getProvider("app-check-internal")));return r=Object.assign({useFetchStreams:t},r),o._setSettings(r),o},"PUBLIC")),$e(wp,"3.4.7",e),$e(wp,"3.4.7","esm2017")})();/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function Mf(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}function Zy(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const KO=Zy,e0=new Mt("auth","Firebase",Zy());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tp=new yo("@firebase/auth");function rs(e,...t){Tp.logLevel<=H.ERROR&&Tp.error(`Auth (${nr}): ${e}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yt(e,...t){throw jf(e,...t)}function mt(e,...t){return jf(e,...t)}function t0(e,t,n){const r=Object.assign(Object.assign({},KO()),{[t]:n});return new Mt("auth","Firebase",r).create(t,{appName:e.name})}function qO(e,t,n){const r=n;if(!(t instanceof r))throw r.name!==t.constructor.name&&yt(e,"argument-error"),t0(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function jf(e,...t){if(typeof e!="string"){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return e0.create(e,...t)}function F(e,t,...n){if(!e)throw jf(t,...n)}function Rt(e){const t="INTERNAL ASSERTION FAILED: "+e;throw rs(t),new Error(t)}function Lt(e,t){e||Rt(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ip=new Map;function Pt(e){Lt(e instanceof Function,"Expected a class definition");let t=Ip.get(e);return t?(Lt(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,Ip.set(e,t),t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YO(e,t){const n=tr(e,"auth");if(n.isInitialized()){const i=n.getImmediate(),o=n.getOptions();if(Ns(o,t!=null?t:{}))return i;yt(i,"already-initialized")}return n.initialize({options:t})}function XO(e,t){const n=(t==null?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Pt);t!=null&&t.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hu(){var e;return typeof self!="undefined"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function JO(){return Cp()==="http:"||Cp()==="https:"}function Cp(){var e;return typeof self!="undefined"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QO(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(JO()||hv()||"connection"in navigator)?navigator.onLine:!0}function ZO(){if(typeof navigator=="undefined")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ko{constructor(t,n){this.shortDelay=t,this.longDelay=n,Lt(n>t,"Short delay should be less than long delay!"),this.isMobile=zI()||HI()}get(){return QO()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ff(e,t){Lt(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n0{static initialize(t,n,r){this.fetchImpl=t,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;Rt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;Rt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;Rt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eR={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tR=new ko(3e4,6e4);function nR(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function ja(e,t,n,r,i={}){return r0(e,i,async()=>{let o={},s={};r&&(t==="GET"?s=r:o={body:JSON.stringify(r)});const a=vo(Object.assign({key:e.config.apiKey},s)).slice(1),l=await e._getAdditionalHeaders();return l["Content-Type"]="application/json",e.languageCode&&(l["X-Firebase-Locale"]=e.languageCode),n0.fetch()(i0(e,e.config.apiHost,n,a),Object.assign({method:t,headers:l,referrerPolicy:"no-referrer"},o))})}async function r0(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},eR),t);try{const i=new iR(e),o=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const s=await o.json();if("needConfirmation"in s)throw Dl(e,"account-exists-with-different-credential",s);if(o.ok&&!("errorMessage"in s))return s;{const a=o.ok?s.errorMessage:s.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Dl(e,"credential-already-in-use",s);if(l==="EMAIL_EXISTS")throw Dl(e,"email-already-in-use",s);const p=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw t0(e,p,u);yt(e,p)}}catch(i){if(i instanceof Et)throw i;yt(e,"network-request-failed")}}async function rR(e,t,n,r,i={}){const o=await ja(e,t,n,r,i);return"mfaPendingCredential"in o&&yt(e,"multi-factor-auth-required",{_serverResponse:o}),o}function i0(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?Ff(e.config,i):`${e.config.apiScheme}://${i}`}class iR{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(mt(this.auth,"network-request-failed")),tR.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Dl(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=mt(e,t,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oR(e,t){return ja(e,"POST","/v1/accounts:delete",t)}async function sR(e,t){return ja(e,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $i(e){if(!!e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function aR(e,t=!1){const n=Hr(e),r=await n.getIdToken(t),i=Uf(r);F(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const o=typeof i.firebase=="object"?i.firebase:void 0,s=o==null?void 0:o.sign_in_provider;return{claims:i,token:r,authTime:$i(Ll(i.auth_time)),issuedAtTime:$i(Ll(i.iat)),expirationTime:$i(Ll(i.exp)),signInProvider:s||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function Ll(e){return Number(e)*1e3}function Uf(e){const[t,n,r]=e.split(".");if(t===void 0||n===void 0||r===void 0)return rs("JWT malformed, contained fewer than 3 sections"),null;try{const i=FI(n);return i?JSON.parse(i):(rs("Failed to decode base64 JWT payload"),null)}catch(i){return rs("Caught error parsing JWT payload as JSON",i),null}}function lR(e){const t=Uf(e);return F(t,"internal-error"),F(typeof t.exp!="undefined","internal-error"),F(typeof t.iat!="undefined","internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oo(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof Et&&uR(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function uR({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cR{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){t.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o0{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=$i(this.lastLoginAt),this.creationTime=$i(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vs(e){var t;const n=e.auth,r=await e.getIdToken(),i=await oo(e,sR(n,{idToken:r}));F(i==null?void 0:i.users.length,n,"internal-error");const o=i.users[0];e._notifyReloadListener(o);const s=!((t=o.providerUserInfo)===null||t===void 0)&&t.length?hR(o.providerUserInfo):[],a=dR(e.providerData,s),l=e.isAnonymous,u=!(e.email&&o.passwordHash)&&!(a!=null&&a.length),p=l?u:!1,y={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:a,metadata:new o0(o.createdAt,o.lastLoginAt),isAnonymous:p};Object.assign(e,y)}async function fR(e){const t=Hr(e);await Vs(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function dR(e,t){return[...e.filter(r=>!t.some(i=>i.providerId===r.providerId)),...t]}function hR(e){return e.map(t=>{var{providerId:n}=t,r=Mf(t,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pR(e,t){const n=await r0(e,{},async()=>{const r=vo({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:o}=e.config,s=i0(e,i,"/v1/token",`key=${o}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",n0.fetch()(s,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class so{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){F(t.idToken,"internal-error"),F(typeof t.idToken!="undefined","internal-error"),F(typeof t.refreshToken!="undefined","internal-error");const n="expiresIn"in t&&typeof t.expiresIn!="undefined"?Number(t.expiresIn):lR(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}async getToken(t,n=!1){return F(!this.accessToken||this.refreshToken,t,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:r,refreshToken:i,expiresIn:o}=await pR(t,n);this.updateTokensAndExpiration(r,i,Number(o))}updateTokensAndExpiration(t,n,r){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,n){const{refreshToken:r,accessToken:i,expirationTime:o}=n,s=new so;return r&&(F(typeof r=="string","internal-error",{appName:t}),s.refreshToken=r),i&&(F(typeof i=="string","internal-error",{appName:t}),s.accessToken=i),o&&(F(typeof o=="number","internal-error",{appName:t}),s.expirationTime=o),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new so,this.toJSON())}_performRefresh(){return Rt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zt(e,t){F(typeof e=="string"||typeof e=="undefined","internal-error",{appName:t})}class bn{constructor(t){var{uid:n,auth:r,stsTokenManager:i}=t,o=Mf(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new cR(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new o0(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(t){const n=await oo(this,this.stsTokenManager.getToken(this.auth,t));return F(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return aR(this,t)}reload(){return fR(this)}_assign(t){this!==t&&(F(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){return new bn(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(t){F(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),n&&await Vs(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await oo(this,oR(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var r,i,o,s,a,l,u,p;const y=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,w=(o=n.phoneNumber)!==null&&o!==void 0?o:void 0,I=(s=n.photoURL)!==null&&s!==void 0?s:void 0,C=(a=n.tenantId)!==null&&a!==void 0?a:void 0,f=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,c=(u=n.createdAt)!==null&&u!==void 0?u:void 0,h=(p=n.lastLoginAt)!==null&&p!==void 0?p:void 0,{uid:v,emailVerified:g,isAnonymous:S,providerData:E,stsTokenManager:P}=n;F(v&&P,t,"internal-error");const x=so.fromJSON(this.name,P);F(typeof v=="string",t,"internal-error"),zt(y,t.name),zt(d,t.name),F(typeof g=="boolean",t,"internal-error"),F(typeof S=="boolean",t,"internal-error"),zt(w,t.name),zt(I,t.name),zt(C,t.name),zt(f,t.name),zt(c,t.name),zt(h,t.name);const R=new bn({uid:v,auth:t,email:d,emailVerified:g,displayName:y,isAnonymous:S,photoURL:I,phoneNumber:w,tenantId:C,stsTokenManager:x,createdAt:c,lastLoginAt:h});return E&&Array.isArray(E)&&(R.providerData=E.map(ne=>Object.assign({},ne))),f&&(R._redirectEventId=f),R}static async _fromIdTokenResponse(t,n,r=!1){const i=new so;i.updateFromServerResponse(n);const o=new bn({uid:n.localId,auth:t,stsTokenManager:i,isAnonymous:r});return await Vs(o),o}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s0{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}s0.type="NONE";const kp=s0;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function is(e,t,n){return`firebase:${e}:${t}:${n}`}class Or{constructor(t,n,r){this.persistence=t,this.auth=n,this.userKey=r;const{config:i,name:o}=this.auth;this.fullUserKey=is(this.userKey,i.apiKey,o),this.fullPersistenceKey=is("persistence",i.apiKey,o),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?bn._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,r="authUser"){if(!n.length)return new Or(Pt(kp),t,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let o=i[0]||Pt(kp);const s=is(r,t.config.apiKey,t.name);let a=null;for(const u of n)try{const p=await u._get(s);if(p){const y=bn._fromJSON(t,p);u!==o&&(a=y),o=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!o._shouldAllowMigration||!l.length?new Or(o,t,r):(o=l[0],a&&await o._set(s,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==o)try{await u._remove(s)}catch{}})),new Or(o,t,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ap(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(u0(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(a0(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(f0(t))return"Blackberry";if(d0(t))return"Webos";if(Bf(t))return"Safari";if((t.includes("chrome/")||l0(t))&&!t.includes("edge/"))return"Chrome";if(c0(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=e.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function a0(e=ke()){return/firefox\//i.test(e)}function Bf(e=ke()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function l0(e=ke()){return/crios\//i.test(e)}function u0(e=ke()){return/iemobile/i.test(e)}function c0(e=ke()){return/android/i.test(e)}function f0(e=ke()){return/blackberry/i.test(e)}function d0(e=ke()){return/webos/i.test(e)}function Fa(e=ke()){return/iphone|ipad|ipod/i.test(e)}function gR(e=ke()){var t;return Fa(e)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function mR(){return WI()&&document.documentMode===10}function h0(e=ke()){return Fa(e)||c0(e)||d0(e)||f0(e)||/windows phone/i.test(e)||u0(e)}function vR(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p0(e,t=[]){let n;switch(e){case"Browser":n=Ap(ke());break;case"Worker":n=`${Ap(ke())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${nr}/${r}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yR{constructor(t,n,r){this.app=t,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Op(this),this.idTokenSubscription=new Op(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=e0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=Pt(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Or.create(this,t),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t)}}async initializeCurrentUser(t){var n;let r=await this.assertedPersistence.getCurrentUser();if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const i=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,o=r==null?void 0:r._redirectEventId,s=await this.tryRedirectSignIn(t);(!i||i===o)&&(s==null?void 0:s.user)&&(r=s.user)}return r?r._redirectEventId?(F(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)):this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await Vs(t)}catch(n){if(n.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=ZO()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const n=t?Hr(t):null;return n&&F(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t){if(!this._deleted)return t&&F(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(t){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Pt(t))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new Mt("auth","Firebase",t())}onAuthStateChanged(t,n,r){return this.registerStateListener(this.authStateSubscription,t,n,r)}onIdTokenChanged(t,n,r){return this.registerStateListener(this.idTokenSubscription,t,n,r)}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const r=await this.getOrInitRedirectPersistenceManager(n);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&Pt(t)||this._popupRedirectResolver;F(n,this,"argument-error"),this.redirectPersistenceManager=await Or.create(this,[Pt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,r,i){if(this._deleted)return()=>{};const o=typeof n=="function"?n:n.next.bind(n),s=this._isInitialized?Promise.resolve():this._initializationPromise;return F(s,this,"internal-error"),s.then(()=>o(this.currentUser)),typeof n=="function"?t.addObserver(n,r,i):t.addObserver(n)}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&(this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh()),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return F(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=p0(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function zf(e){return Hr(e)}class Op{constructor(t){this.auth=t,this.observer=null,this.addObserver=mv(n=>this.observer=n)}get next(){return F(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g0{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return Rt("not implemented")}_getIdTokenResponse(t){return Rt("not implemented")}_linkToIdToken(t,n){return Rt("not implemented")}_getReauthenticationResolver(t){return Rt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rr(e,t){return rR(e,"POST","/v1/accounts:signInWithIdp",nR(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wR="http://localhost";class Gn extends g0{constructor(){super(...arguments);this.pendingToken=null}static _fromParams(t){const n=new Gn(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):yt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:i}=n,o=Mf(n,["providerId","signInMethod"]);if(!r||!i)return null;const s=new Gn(r,i);return s.idToken=o.idToken||void 0,s.accessToken=o.accessToken||void 0,s.secret=o.secret,s.nonce=o.nonce,s.pendingToken=o.pendingToken||null,s}_getIdTokenResponse(t){const n=this.buildRequest();return Rr(t,n)}_linkToIdToken(t,n){const r=this.buildRequest();return r.idToken=n,Rr(t,r)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,Rr(t,n)}buildRequest(){const t={requestUri:wR,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=vo(n)}return t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vf{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ao extends Vf{constructor(){super(...arguments);this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt extends Ao{constructor(){super("facebook.com")}static credential(t){return Gn._fromParams({providerId:Wt.PROVIDER_ID,signInMethod:Wt.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Wt.credentialFromTaggedObject(t)}static credentialFromError(t){return Wt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Wt.credential(t.oauthAccessToken)}catch{return null}}}Wt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Wt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt extends Ao{constructor(){super("google.com");this.addScope("profile")}static credential(t,n){return Gn._fromParams({providerId:Gt.PROVIDER_ID,signInMethod:Gt.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return Gt.credentialFromTaggedObject(t)}static credentialFromError(t){return Gt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:r}=t;if(!n&&!r)return null;try{return Gt.credential(n,r)}catch{return null}}}Gt.GOOGLE_SIGN_IN_METHOD="google.com";Gt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kt extends Ao{constructor(){super("github.com")}static credential(t){return Gn._fromParams({providerId:Kt.PROVIDER_ID,signInMethod:Kt.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Kt.credentialFromTaggedObject(t)}static credentialFromError(t){return Kt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Kt.credential(t.oauthAccessToken)}catch{return null}}}Kt.GITHUB_SIGN_IN_METHOD="github.com";Kt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt extends Ao{constructor(){super("twitter.com")}static credential(t,n){return Gn._fromParams({providerId:qt.PROVIDER_ID,signInMethod:qt.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return qt.credentialFromTaggedObject(t)}static credentialFromError(t){return qt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=t;if(!n||!r)return null;try{return qt.credential(n,r)}catch{return null}}}qt.TWITTER_SIGN_IN_METHOD="twitter.com";qt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xr{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,r,i=!1){const o=await bn._fromIdTokenResponse(t,r,i),s=Rp(r);return new xr({user:o,providerId:s,_tokenResponse:r,operationType:n})}static async _forOperation(t,n,r){await t._updateTokensIfNecessary(r,!0);const i=Rp(r);return new xr({user:t,providerId:i,_tokenResponse:r,operationType:n})}}function Rp(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hs extends Et{constructor(t,n,r,i){var o;super(n.code,n.message);this.operationType=r,this.user=i,Object.setPrototypeOf(this,Hs.prototype),this.customData={appName:t.name,tenantId:(o=t.tenantId)!==null&&o!==void 0?o:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,n,r,i){return new Hs(t,n,r,i)}}function m0(e,t,n,r){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?Hs._fromErrorAndOperation(e,o,t,r):o})}async function _R(e,t,n=!1){const r=await oo(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return xr._forOperation(e,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ER(e,t,n=!1){const{auth:r}=e,i="reauthenticate";try{const o=await oo(e,m0(r,i,t,e),n);F(o.idToken,r,"internal-error");const s=Uf(o.idToken);F(s,r,"internal-error");const{sub:a}=s;return F(e.uid===a,r,"user-mismatch"),xr._forOperation(e,i,o)}catch(o){throw(o==null?void 0:o.code)==="auth/user-not-found"&&yt(r,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function SR(e,t,n=!1){const r="signIn",i=await m0(e,r,t),o=await xr._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(o.user),o}function TR(e,t,n,r){return Hr(e).onAuthStateChanged(t,n,r)}const Ws="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v0{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ws,"1"),this.storage.removeItem(Ws),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IR(){const e=ke();return Bf(e)||Fa(e)}const CR=1e3,kR=10;class y0 extends v0{constructor(){super(()=>window.localStorage,"LOCAL");this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=IR()&&vR(),this.fallbackToPolling=h0(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&t(n,i,r)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((s,a,l)=>{this.notifyListeners(s,l)});return}const r=t.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const s=this.storage.getItem(r);if(t.newValue!==s)t.newValue!==null?this.storage.setItem(r,t.newValue):this.storage.removeItem(r);else if(this.localCache[r]===t.newValue&&!n)return}const i=()=>{const s=this.storage.getItem(r);!n&&this.localCache[r]===s||this.notifyListeners(r,s)},o=this.storage.getItem(r);mR()&&o!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,kR):i()}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:r}),!0)})},CR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}y0.type="LOCAL";const AR=y0;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w0 extends v0{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}w0.type="SESSION";const _0=w0;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OR(e){return Promise.all(e.map(async t=>{try{const n=await t;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ua{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(i=>i.isListeningto(t));if(n)return n;const r=new Ua(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:r,eventType:i,data:o}=n.data,s=this.handlersMap[i];if(!(s!=null&&s.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(s).map(async u=>u(n.origin,o)),l=await OR(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ua.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hf(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(Math.random()*10);return e+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RR{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,r=50){const i=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let o,s;return new Promise((a,l)=>{const u=Hf("",20);i.port1.start();const p=setTimeout(()=>{l(new Error("unsupported_event"))},r);s={messageChannel:i,onMessage(y){const d=y;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(p),o=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),a(d.data.response);break;default:clearTimeout(p),clearTimeout(o),l(new Error("invalid_response"));break}}},this.handlers.add(s),i.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:t,eventId:u,data:n},[i.port2])}).finally(()=>{s&&this.removeMessageHandler(s)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vt(){return window}function PR(e){vt().location.href=e}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E0(){return typeof vt().WorkerGlobalScope!="undefined"&&typeof vt().importScripts=="function"}async function NR(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function $R(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function DR(){return E0()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S0="firebaseLocalStorageDb",LR=1,Gs="firebaseLocalStorage",T0="fbase_key";class Oo{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ba(e,t){return e.transaction([Gs],t?"readwrite":"readonly").objectStore(Gs)}function xR(){const e=indexedDB.deleteDatabase(S0);return new Oo(e).toPromise()}function Wu(){const e=indexedDB.open(S0,LR);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const r=e.result;try{r.createObjectStore(Gs,{keyPath:T0})}catch(i){n(i)}}),e.addEventListener("success",async()=>{const r=e.result;r.objectStoreNames.contains(Gs)?t(r):(r.close(),await xR(),t(await Wu()))})})}async function Pp(e,t,n){const r=Ba(e,!0).put({[T0]:t,value:n});return new Oo(r).toPromise()}async function bR(e,t){const n=Ba(e,!1).get(t),r=await new Oo(n).toPromise();return r===void 0?null:r.value}function Np(e,t){const n=Ba(e,!0).delete(t);return new Oo(n).toPromise()}const MR=800,jR=3;class I0{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Wu(),this.db)}async _withRetries(t){let n=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(n++>jR)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return E0()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ua._getInstance(DR()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await NR(),!this.activeServiceWorker)return;this.sender=new RR(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((t=r[0])===null||t===void 0?void 0:t.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||$R()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Wu();return await Pp(t,Ws,"1"),await Np(t,Ws),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Pp(r,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(r=>bR(r,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>Np(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(i=>{const o=Ba(i,!1).getAll();return new Oo(o).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:o}of t)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(o)&&(this.notifyListeners(i,o),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),MR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}I0.type="LOCAL";const FR=I0;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UR(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}function BR(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=i=>{const o=mt("internal-error");o.customData=i,n(o)},r.type="text/javascript",r.charset="UTF-8",UR().appendChild(r)})}function zR(e){return`__${e}${Math.floor(Math.random()*1e6)}`}new ko(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C0(e,t){return t?Pt(t):(F(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wf extends g0{constructor(t){super("custom","custom");this.params=t}_getIdTokenResponse(t){return Rr(t,this._buildIdpRequest())}_linkToIdToken(t,n){return Rr(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return Rr(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function VR(e){return SR(e.auth,new Wf(e),e.bypassAuthState)}function HR(e){const{auth:t,user:n}=e;return F(n,t,"internal-error"),ER(n,new Wf(e),e.bypassAuthState)}async function WR(e){const{auth:t,user:n}=e;return F(n,t,"internal-error"),_R(n,new Wf(e),e.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k0{constructor(t,n,r,i,o=!1){this.auth=t,this.resolver=r,this.user=i,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:r,postBody:i,tenantId:o,error:s,type:a}=t;if(s){this.reject(s);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:o||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return VR;case"linkViaPopup":case"linkViaRedirect":return WR;case"reauthViaPopup":case"reauthViaRedirect":return HR;default:yt(this.auth,"internal-error")}}resolve(t){Lt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){Lt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GR=new ko(2e3,1e4);async function BP(e,t,n){const r=zf(e);qO(e,t,Vf);const i=C0(r,n);return new Dn(r,"signInViaPopup",t,i).executeNotNull()}class Dn extends k0{constructor(t,n,r,i,o){super(t,n,i,o);this.provider=r,this.authWindow=null,this.pollId=null,Dn.currentPopupAction&&Dn.currentPopupAction.cancel(),Dn.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return F(t,this.auth,"internal-error"),t}async onExecution(){Lt(this.filter.length===1,"Popup operations only handle one event");const t=Hf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(mt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(mt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Dn.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(mt(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(t,GR.get())};t()}}Dn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KR="pendingRedirect",xl=new Map;class qR extends k0{constructor(t,n,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r);this.eventId=null}async execute(){let t=xl.get(this.auth._key());if(!t){try{const r=await YR(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(n){t=()=>Promise.reject(n)}xl.set(this.auth._key(),t)}return this.bypassAuthState||xl.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function YR(e,t){const n=JR(t),r=XR(e);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function XR(e){return Pt(e._redirectPersistence)}function JR(e){return is(KR,e.config.apiKey,e.name)}async function QR(e,t,n=!1){const r=zf(e),i=C0(r,t),s=await new qR(r,i,n).execute();return s&&!n&&(delete s.user._redirectEventId,await r._persistUserIfCurrent(s.user),await r._setRedirectUser(null,t)),s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZR=10*60*1e3;class eP{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(n=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!tP(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var r;if(t.error&&!A0(t)){const i=((r=t.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(mt(this.auth,i))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const r=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=ZR&&this.cachedEventUids.clear(),this.cachedEventUids.has($p(t))}saveEventToCache(t){this.cachedEventUids.add($p(t)),this.lastProcessedEventTime=Date.now()}}function $p(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function A0({type:e,error:t}){return e==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function tP(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return A0(e);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nP(e,t={}){return ja(e,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rP=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,iP=/^https?/;async function oP(e){if(e.config.emulator)return;const{authorizedDomains:t}=await nP(e);for(const n of t)try{if(sP(n))return}catch{}yt(e,"unauthorized-domain")}function sP(e){const t=Hu(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const s=new URL(e);return s.hostname===""&&r===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&s.hostname===r}if(!iP.test(n))return!1;if(rP.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aP=new ko(3e4,6e4);function Dp(){const e=vt().___jsl;if(e!=null&&e.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function lP(e){return new Promise((t,n)=>{var r,i,o;function s(){Dp(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Dp(),n(mt(e,"network-request-failed"))},timeout:aP.get()})}if(!((i=(r=vt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)t(gapi.iframes.getContext());else if(!((o=vt().gapi)===null||o===void 0)&&o.load)s();else{const a=zR("iframefcb");return vt()[a]=()=>{gapi.load?s():n(mt(e,"network-request-failed"))},BR(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(t=>{throw os=null,t})}let os=null;function uP(e){return os=os||lP(e),os}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cP=new ko(5e3,15e3),fP="__/auth/iframe",dP="emulator/auth/iframe",hP={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},pP=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function gP(e){const t=e.config;F(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?Ff(t,dP):`https://${e.config.authDomain}/${fP}`,r={apiKey:t.apiKey,appName:e.name,v:nr},i=pP.get(e.config.apiHost);i&&(r.eid=i);const o=e._getFrameworks();return o.length&&(r.fw=o.join(",")),`${n}?${vo(r).slice(1)}`}async function mP(e){const t=await uP(e),n=vt().gapi;return F(n,e,"internal-error"),t.open({where:document.body,url:gP(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:hP,dontclear:!0},r=>new Promise(async(i,o)=>{await r.restyle({setHideOnLeave:!1});const s=mt(e,"network-request-failed"),a=vt().setTimeout(()=>{o(s)},cP.get());function l(){vt().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{o(s)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vP={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},yP=500,wP=600,_P="_blank",EP="http://localhost";class Lp{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function SP(e,t,n,r=yP,i=wP){const o=Math.max((window.screen.availHeight-i)/2,0).toString(),s=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},vP),{width:r.toString(),height:i.toString(),top:o,left:s}),u=ke().toLowerCase();n&&(a=l0(u)?_P:n),a0(u)&&(t=t||EP,l.scrollbars="yes");const p=Object.entries(l).reduce((d,[w,I])=>`${d}${w}=${I},`,"");if(gR(u)&&a!=="_self")return TP(t||"",a),new Lp(null);const y=window.open(t||"",a,p);F(y,e,"popup-blocked");try{y.focus()}catch{}return new Lp(y)}function TP(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IP="__/auth/handler",CP="emulator/auth/handler";function xp(e,t,n,r,i,o){F(e.config.authDomain,e,"auth-domain-config-required"),F(e.config.apiKey,e,"invalid-api-key");const s={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:nr,eventId:i};if(t instanceof Vf){t.setDefaultLanguage(e.languageCode),s.providerId=t.providerId||"",XI(t.getCustomParameters())||(s.customParameters=JSON.stringify(t.getCustomParameters()));for(const[l,u]of Object.entries(o||{}))s[l]=u}if(t instanceof Ao){const l=t.getScopes().filter(u=>u!=="");l.length>0&&(s.scopes=l.join(","))}e.tenantId&&(s.tid=e.tenantId);const a=s;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];return`${kP(e)}?${vo(a).slice(1)}`}function kP({config:e}){return e.emulator?Ff(e,CP):`https://${e.authDomain}/${IP}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bl="webStorageSupport";class AP{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=_0,this._completeRedirectFn=QR}async _openPopup(t,n,r,i){var o;Lt((o=this.eventManagers[t._key()])===null||o===void 0?void 0:o.manager,"_initialize() not called before _openPopup()");const s=xp(t,n,r,Hu(),i);return SP(t,s,Hf())}async _openRedirect(t,n,r,i){return await this._originValidation(t),PR(xp(t,n,r,Hu(),i)),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:i,promise:o}=this.eventManagers[n];return i?Promise.resolve(i):(Lt(o,"If manager is not set, promise should be"),o)}const r=this.initAndGetManager(t);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(t){const n=await mP(t),r=new eP(t);return n.register("authEvent",i=>(F(i==null?void 0:i.authEvent,t,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=n,r}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(bl,{type:bl},i=>{var o;const s=(o=i==null?void 0:i[0])===null||o===void 0?void 0:o[bl];s!==void 0&&n(!!s),yt(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=oP(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return h0()||Bf()||Fa()}}const OP=AP;var bp="@firebase/auth",Mp="0.19.11";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RP{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(r=>{var i;t(((i=r)===null||i===void 0?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);!n||(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){F(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PP(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function NP(e){Qe(new Je("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),{apiKey:o,authDomain:s}=r.options;return((a,l)=>{F(o&&!o.includes(":"),"invalid-api-key",{appName:a.name}),F(!(s!=null&&s.includes(":")),"argument-error",{appName:a.name});const u={apiKey:o,authDomain:s,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:p0(e)},p=new yR(a,l,u);return XO(p,n),p})(r,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,r)=>{t.getProvider("auth-internal").initialize()})),Qe(new Je("auth-internal",t=>{const n=zf(t.getProvider("auth").getImmediate());return(r=>new RP(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),$e(bp,Mp,PP(e)),$e(bp,Mp,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zP(e=rf()){const t=tr(e,"auth");return t.isInitialized()?t.getImmediate():YO(e,{popupRedirectResolver:OP,persistence:[FR,AR,_0]})}NP("Browser");/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function $P(e,t,n,r){function i(o){return o instanceof n?o:new n(function(s){s(o)})}return new(n||(n=Promise))(function(o,s){function a(p){try{u(r.next(p))}catch(y){s(y)}}function l(p){try{u(r.throw(p))}catch(y){s(y)}}function u(p){p.done?o(p.value):i(p.value).then(a,l)}u((r=r.apply(e,t||[])).next())})}function DP(e,t){var n={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},r,i,o,s;return s={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(s[Symbol.iterator]=function(){return this}),s;function a(u){return function(p){return l([u,p])}}function l(u){if(r)throw new TypeError("Generator is already executing.");for(;n;)try{if(r=1,i&&(o=u[0]&2?i.return:u[0]?i.throw||((o=i.return)&&o.call(i),0):i.next)&&!(o=o.call(i,u[1])).done)return o;switch(i=0,o&&(u=[u[0]&2,o.value]),u[0]){case 0:case 1:o=u;break;case 4:return n.label++,{value:u[1],done:!1};case 5:n.label++,i=u[1],u=[0];continue;case 7:u=n.ops.pop(),n.trys.pop();continue;default:if(o=n.trys,!(o=o.length>0&&o[o.length-1])&&(u[0]===6||u[0]===2)){n=0;continue}if(u[0]===3&&(!o||u[1]>o[0]&&u[1]<o[3])){n.label=u[1];break}if(u[0]===6&&n.label<o[1]){n.label=o[1],o=u;break}if(o&&n.label<o[2]){n.label=o[2],n.ops.push(u);break}o[2]&&n.ops.pop(),n.trys.pop();continue}u=t.call(e,n)}catch(p){u=[6,p],i=0}finally{r=o=0}if(u[0]&5)throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}}/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var mr=function(){return mr=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},mr.apply(this,arguments)},O0=function(e){return{loading:e==null,value:e}},LP=function(){return function(e,t){switch(t.type){case"error":return mr(mr({},e),{error:t.error,loading:!1,value:void 0});case"reset":return O0(t.defaultValue);case"value":return mr(mr({},e),{error:void 0,loading:!1,value:t.value});default:return e}}},xP=function(e){var t=e?e():void 0,n=L.exports.useReducer(LP(),O0(t)),r=n[0],i=n[1],o=function(){var l=e?e():void 0;i({type:"reset",defaultValue:l})},s=function(l){i({type:"error",error:l})},a=function(l){i({type:"value",value:l})};return L.exports.useMemo(function(){return{error:r.error,loading:r.loading,reset:o,setError:s,setValue:a,value:r.value}},[r.error,r.loading,o,s,a,r.value])},VP=function(e,t){var n=xP(function(){return e.currentUser}),r=n.error,i=n.loading,o=n.setError,s=n.setValue,a=n.value;L.exports.useEffect(function(){var u=TR(e,function(p){return $P(void 0,void 0,void 0,function(){var y;return DP(this,function(d){switch(d.label){case 0:if(!(t!=null&&t.onUserChanged))return[3,4];d.label=1;case 1:return d.trys.push([1,3,,4]),[4,t.onUserChanged(p)];case 2:return d.sent(),[3,4];case 3:return y=d.sent(),o(y),[3,4];case 4:return s(p),[2]}})})},o);return function(){u()}},[e]);var l=[a,i,r];return L.exports.useMemo(function(){return l},l)};export{Gt as G,UP as P,MP as R,VP as a,jP as b,zP as g,Sv as i,zw as j,L as r,BP as s,FP as u};
