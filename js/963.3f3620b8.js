(self["webpackChunkshoppinglistmanager"]=self["webpackChunkshoppinglistmanager"]||[]).push([[963],{9669:function(e,t,r){e.exports=r(1609)},5448:function(e,t,r){"use strict";var n=r(4867),o=r(6026),i=r(4372),s=r(5327),a=r(4097),c=r(4109),u=r(7985),l=r(7874),f=r(2648),d=r(644),p=r(205);e.exports=function(e){return new Promise((function(t,r){var h,m=e.data,g=e.headers,v=e.responseType;function y(){e.cancelToken&&e.cancelToken.unsubscribe(h),e.signal&&e.signal.removeEventListener("abort",h)}n.isFormData(m)&&n.isStandardBrowserEnv()&&delete g["Content-Type"];var w=new XMLHttpRequest;if(e.auth){var b=e.auth.username||"",E=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";g.Authorization="Basic "+btoa(b+":"+E)}var O=a(e.baseURL,e.url);function C(){if(w){var n="getAllResponseHeaders"in w?c(w.getAllResponseHeaders()):null,i=v&&"text"!==v&&"json"!==v?w.response:w.responseText,s={data:i,status:w.status,statusText:w.statusText,headers:n,config:e,request:w};o((function(e){t(e),y()}),(function(e){r(e),y()}),s),w=null}}if(w.open(e.method.toUpperCase(),s(O,e.params,e.paramsSerializer),!0),w.timeout=e.timeout,"onloadend"in w?w.onloadend=C:w.onreadystatechange=function(){w&&4===w.readyState&&(0!==w.status||w.responseURL&&0===w.responseURL.indexOf("file:"))&&setTimeout(C)},w.onabort=function(){w&&(r(new f("Request aborted",f.ECONNABORTED,e,w)),w=null)},w.onerror=function(){r(new f("Network Error",f.ERR_NETWORK,e,w,w)),w=null},w.ontimeout=function(){var t=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded",n=e.transitional||l;e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),r(new f(t,n.clarifyTimeoutError?f.ETIMEDOUT:f.ECONNABORTED,e,w)),w=null},n.isStandardBrowserEnv()){var x=(e.withCredentials||u(O))&&e.xsrfCookieName?i.read(e.xsrfCookieName):void 0;x&&(g[e.xsrfHeaderName]=x)}"setRequestHeader"in w&&n.forEach(g,(function(e,t){"undefined"===typeof m&&"content-type"===t.toLowerCase()?delete g[t]:w.setRequestHeader(t,e)})),n.isUndefined(e.withCredentials)||(w.withCredentials=!!e.withCredentials),v&&"json"!==v&&(w.responseType=e.responseType),"function"===typeof e.onDownloadProgress&&w.addEventListener("progress",e.onDownloadProgress),"function"===typeof e.onUploadProgress&&w.upload&&w.upload.addEventListener("progress",e.onUploadProgress),(e.cancelToken||e.signal)&&(h=function(e){w&&(r(!e||e&&e.type?new d:e),w.abort(),w=null)},e.cancelToken&&e.cancelToken.subscribe(h),e.signal&&(e.signal.aborted?h():e.signal.addEventListener("abort",h))),m||(m=null);var R=p(O);R&&-1===["http","https","file"].indexOf(R)?r(new f("Unsupported protocol "+R+":",f.ERR_BAD_REQUEST,e)):w.send(m)}))}},1609:function(e,t,r){"use strict";var n=r(4867),o=r(1849),i=r(321),s=r(7185),a=r(5546);function c(e){var t=new i(e),r=o(i.prototype.request,t);return n.extend(r,i.prototype,t),n.extend(r,t),r.create=function(t){return c(s(e,t))},r}var u=c(a);u.Axios=i,u.CanceledError=r(644),u.CancelToken=r(4972),u.isCancel=r(6502),u.VERSION=r(7288).version,u.toFormData=r(7675),u.AxiosError=r(2648),u.Cancel=u.CanceledError,u.all=function(e){return Promise.all(e)},u.spread=r(8713),u.isAxiosError=r(6268),e.exports=u,e.exports["default"]=u},4972:function(e,t,r){"use strict";var n=r(644);function o(e){if("function"!==typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise((function(e){t=e}));var r=this;this.promise.then((function(e){if(r._listeners){var t,n=r._listeners.length;for(t=0;t<n;t++)r._listeners[t](e);r._listeners=null}})),this.promise.then=function(e){var t,n=new Promise((function(e){r.subscribe(e),t=e})).then(e);return n.cancel=function(){r.unsubscribe(t)},n},e((function(e){r.reason||(r.reason=new n(e),t(r.reason))}))}o.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},o.prototype.subscribe=function(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]},o.prototype.unsubscribe=function(e){if(this._listeners){var t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}},o.source=function(){var e,t=new o((function(t){e=t}));return{token:t,cancel:e}},e.exports=o},644:function(e,t,r){"use strict";var n=r(2648),o=r(4867);function i(e){n.call(this,null==e?"canceled":e,n.ERR_CANCELED),this.name="CanceledError"}o.inherits(i,n,{__CANCEL__:!0}),e.exports=i},6502:function(e){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},321:function(e,t,r){"use strict";var n=r(4867),o=r(5327),i=r(782),s=r(3572),a=r(7185),c=r(4097),u=r(4875),l=u.validators;function f(e){this.defaults=e,this.interceptors={request:new i,response:new i}}f.prototype.request=function(e,t){"string"===typeof e?(t=t||{},t.url=e):t=e||{},t=a(this.defaults,t),t.method?t.method=t.method.toLowerCase():this.defaults.method?t.method=this.defaults.method.toLowerCase():t.method="get";var r=t.transitional;void 0!==r&&u.assertOptions(r,{silentJSONParsing:l.transitional(l.boolean),forcedJSONParsing:l.transitional(l.boolean),clarifyTimeoutError:l.transitional(l.boolean)},!1);var n=[],o=!0;this.interceptors.request.forEach((function(e){"function"===typeof e.runWhen&&!1===e.runWhen(t)||(o=o&&e.synchronous,n.unshift(e.fulfilled,e.rejected))}));var i,c=[];if(this.interceptors.response.forEach((function(e){c.push(e.fulfilled,e.rejected)})),!o){var f=[s,void 0];Array.prototype.unshift.apply(f,n),f=f.concat(c),i=Promise.resolve(t);while(f.length)i=i.then(f.shift(),f.shift());return i}var d=t;while(n.length){var p=n.shift(),h=n.shift();try{d=p(d)}catch(m){h(m);break}}try{i=s(d)}catch(m){return Promise.reject(m)}while(c.length)i=i.then(c.shift(),c.shift());return i},f.prototype.getUri=function(e){e=a(this.defaults,e);var t=c(e.baseURL,e.url);return o(t,e.params,e.paramsSerializer)},n.forEach(["delete","get","head","options"],(function(e){f.prototype[e]=function(t,r){return this.request(a(r||{},{method:e,url:t,data:(r||{}).data}))}})),n.forEach(["post","put","patch"],(function(e){function t(t){return function(r,n,o){return this.request(a(o||{},{method:e,headers:t?{"Content-Type":"multipart/form-data"}:{},url:r,data:n}))}}f.prototype[e]=t(),f.prototype[e+"Form"]=t(!0)})),e.exports=f},2648:function(e,t,r){"use strict";var n=r(4867);function o(e,t,r,n,o){Error.call(this),this.message=e,this.name="AxiosError",t&&(this.code=t),r&&(this.config=r),n&&(this.request=n),o&&(this.response=o)}n.inherits(o,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}}});var i=o.prototype,s={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED"].forEach((function(e){s[e]={value:e}})),Object.defineProperties(o,s),Object.defineProperty(i,"isAxiosError",{value:!0}),o.from=function(e,t,r,s,a,c){var u=Object.create(i);return n.toFlatObject(e,u,(function(e){return e!==Error.prototype})),o.call(u,e.message,t,r,s,a),u.name=e.name,c&&Object.assign(u,c),u},e.exports=o},782:function(e,t,r){"use strict";var n=r(4867);function o(){this.handlers=[]}o.prototype.use=function(e,t,r){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!r&&r.synchronous,runWhen:r?r.runWhen:null}),this.handlers.length-1},o.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},o.prototype.forEach=function(e){n.forEach(this.handlers,(function(t){null!==t&&e(t)}))},e.exports=o},4097:function(e,t,r){"use strict";var n=r(1793),o=r(7303);e.exports=function(e,t){return e&&!n(t)?o(e,t):t}},3572:function(e,t,r){"use strict";var n=r(4867),o=r(8527),i=r(6502),s=r(5546),a=r(644);function c(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new a}e.exports=function(e){c(e),e.headers=e.headers||{},e.data=o.call(e,e.data,e.headers,e.transformRequest),e.headers=n.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),n.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete e.headers[t]}));var t=e.adapter||s.adapter;return t(e).then((function(t){return c(e),t.data=o.call(e,t.data,t.headers,e.transformResponse),t}),(function(t){return i(t)||(c(e),t&&t.response&&(t.response.data=o.call(e,t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)}))}},7185:function(e,t,r){"use strict";var n=r(4867);e.exports=function(e,t){t=t||{};var r={};function o(e,t){return n.isPlainObject(e)&&n.isPlainObject(t)?n.merge(e,t):n.isPlainObject(t)?n.merge({},t):n.isArray(t)?t.slice():t}function i(r){return n.isUndefined(t[r])?n.isUndefined(e[r])?void 0:o(void 0,e[r]):o(e[r],t[r])}function s(e){if(!n.isUndefined(t[e]))return o(void 0,t[e])}function a(r){return n.isUndefined(t[r])?n.isUndefined(e[r])?void 0:o(void 0,e[r]):o(void 0,t[r])}function c(r){return r in t?o(e[r],t[r]):r in e?o(void 0,e[r]):void 0}var u={url:s,method:s,data:s,baseURL:a,transformRequest:a,transformResponse:a,paramsSerializer:a,timeout:a,timeoutMessage:a,withCredentials:a,adapter:a,responseType:a,xsrfCookieName:a,xsrfHeaderName:a,onUploadProgress:a,onDownloadProgress:a,decompress:a,maxContentLength:a,maxBodyLength:a,beforeRedirect:a,transport:a,httpAgent:a,httpsAgent:a,cancelToken:a,socketPath:a,responseEncoding:a,validateStatus:c};return n.forEach(Object.keys(e).concat(Object.keys(t)),(function(e){var t=u[e]||i,o=t(e);n.isUndefined(o)&&t!==c||(r[e]=o)})),r}},6026:function(e,t,r){"use strict";var n=r(2648);e.exports=function(e,t,r){var o=r.config.validateStatus;r.status&&o&&!o(r.status)?t(new n("Request failed with status code "+r.status,[n.ERR_BAD_REQUEST,n.ERR_BAD_RESPONSE][Math.floor(r.status/100)-4],r.config,r.request,r)):e(r)}},8527:function(e,t,r){"use strict";var n=r(4867),o=r(5546);e.exports=function(e,t,r){var i=this||o;return n.forEach(r,(function(r){e=r.call(i,e,t)})),e}},5546:function(e,t,r){"use strict";var n=r(4867),o=r(6016),i=r(2648),s=r(7874),a=r(7675),c={"Content-Type":"application/x-www-form-urlencoded"};function u(e,t){!n.isUndefined(e)&&n.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}function l(){var e;return("undefined"!==typeof XMLHttpRequest||"undefined"!==typeof process&&"[object process]"===Object.prototype.toString.call(process))&&(e=r(5448)),e}function f(e,t,r){if(n.isString(e))try{return(t||JSON.parse)(e),n.trim(e)}catch(o){if("SyntaxError"!==o.name)throw o}return(r||JSON.stringify)(e)}var d={transitional:s,adapter:l(),transformRequest:[function(e,t){if(o(t,"Accept"),o(t,"Content-Type"),n.isFormData(e)||n.isArrayBuffer(e)||n.isBuffer(e)||n.isStream(e)||n.isFile(e)||n.isBlob(e))return e;if(n.isArrayBufferView(e))return e.buffer;if(n.isURLSearchParams(e))return u(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString();var r,i=n.isObject(e),s=t&&t["Content-Type"];if((r=n.isFileList(e))||i&&"multipart/form-data"===s){var c=this.env&&this.env.FormData;return a(r?{"files[]":e}:e,c&&new c)}return i||"application/json"===s?(u(t,"application/json"),f(e)):e}],transformResponse:[function(e){var t=this.transitional||d.transitional,r=t&&t.silentJSONParsing,o=t&&t.forcedJSONParsing,s=!r&&"json"===this.responseType;if(s||o&&n.isString(e)&&e.length)try{return JSON.parse(e)}catch(a){if(s){if("SyntaxError"===a.name)throw i.from(a,i.ERR_BAD_RESPONSE,this,null,this.response);throw a}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:r(1623)},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};n.forEach(["delete","get","head"],(function(e){d.headers[e]={}})),n.forEach(["post","put","patch"],(function(e){d.headers[e]=n.merge(c)})),e.exports=d},7874:function(e){"use strict";e.exports={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1}},7288:function(e){e.exports={version:"0.27.2"}},1849:function(e){"use strict";e.exports=function(e,t){return function(){for(var r=new Array(arguments.length),n=0;n<r.length;n++)r[n]=arguments[n];return e.apply(t,r)}}},5327:function(e,t,r){"use strict";var n=r(4867);function o(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function(e,t,r){if(!t)return e;var i;if(r)i=r(t);else if(n.isURLSearchParams(t))i=t.toString();else{var s=[];n.forEach(t,(function(e,t){null!==e&&"undefined"!==typeof e&&(n.isArray(e)?t+="[]":e=[e],n.forEach(e,(function(e){n.isDate(e)?e=e.toISOString():n.isObject(e)&&(e=JSON.stringify(e)),s.push(o(t)+"="+o(e))})))})),i=s.join("&")}if(i){var a=e.indexOf("#");-1!==a&&(e=e.slice(0,a)),e+=(-1===e.indexOf("?")?"?":"&")+i}return e}},7303:function(e){"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},4372:function(e,t,r){"use strict";var n=r(4867);e.exports=n.isStandardBrowserEnv()?function(){return{write:function(e,t,r,o,i,s){var a=[];a.push(e+"="+encodeURIComponent(t)),n.isNumber(r)&&a.push("expires="+new Date(r).toGMTString()),n.isString(o)&&a.push("path="+o),n.isString(i)&&a.push("domain="+i),!0===s&&a.push("secure"),document.cookie=a.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}()},1793:function(e){"use strict";e.exports=function(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}},6268:function(e,t,r){"use strict";var n=r(4867);e.exports=function(e){return n.isObject(e)&&!0===e.isAxiosError}},7985:function(e,t,r){"use strict";var n=r(4867);e.exports=n.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),r=document.createElement("a");function o(e){var n=e;return t&&(r.setAttribute("href",n),n=r.href),r.setAttribute("href",n),{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",host:r.host,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):"",hostname:r.hostname,port:r.port,pathname:"/"===r.pathname.charAt(0)?r.pathname:"/"+r.pathname}}return e=o(window.location.href),function(t){var r=n.isString(t)?o(t):t;return r.protocol===e.protocol&&r.host===e.host}}():function(){return function(){return!0}}()},6016:function(e,t,r){"use strict";var n=r(4867);e.exports=function(e,t){n.forEach(e,(function(r,n){n!==t&&n.toUpperCase()===t.toUpperCase()&&(e[t]=r,delete e[n])}))}},1623:function(e){e.exports=null},4109:function(e,t,r){"use strict";var n=r(4867),o=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,r,i,s={};return e?(n.forEach(e.split("\n"),(function(e){if(i=e.indexOf(":"),t=n.trim(e.substr(0,i)).toLowerCase(),r=n.trim(e.substr(i+1)),t){if(s[t]&&o.indexOf(t)>=0)return;s[t]="set-cookie"===t?(s[t]?s[t]:[]).concat([r]):s[t]?s[t]+", "+r:r}})),s):s}},205:function(e){"use strict";e.exports=function(e){var t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}},8713:function(e){"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},7675:function(e,t,r){"use strict";var n=r(4867);function o(e,t){t=t||new FormData;var r=[];function o(e){return null===e?"":n.isDate(e)?e.toISOString():n.isArrayBuffer(e)||n.isTypedArray(e)?"function"===typeof Blob?new Blob([e]):Buffer.from(e):e}function i(e,s){if(n.isPlainObject(e)||n.isArray(e)){if(-1!==r.indexOf(e))throw Error("Circular reference detected in "+s);r.push(e),n.forEach(e,(function(e,r){if(!n.isUndefined(e)){var a,c=s?s+"."+r:r;if(e&&!s&&"object"===typeof e)if(n.endsWith(r,"{}"))e=JSON.stringify(e);else if(n.endsWith(r,"[]")&&(a=n.toArray(e)))return void a.forEach((function(e){!n.isUndefined(e)&&t.append(c,o(e))}));i(e,c)}})),r.pop()}else t.append(s,o(e))}return i(e),t}e.exports=o},4875:function(e,t,r){"use strict";var n=r(7288).version,o=r(2648),i={};["object","boolean","number","function","string","symbol"].forEach((function(e,t){i[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}}));var s={};function a(e,t,r){if("object"!==typeof e)throw new o("options must be an object",o.ERR_BAD_OPTION_VALUE);var n=Object.keys(e),i=n.length;while(i-- >0){var s=n[i],a=t[s];if(a){var c=e[s],u=void 0===c||a(c,s,e);if(!0!==u)throw new o("option "+s+" must be "+u,o.ERR_BAD_OPTION_VALUE)}else if(!0!==r)throw new o("Unknown option "+s,o.ERR_BAD_OPTION)}}i.transitional=function(e,t,r){function i(e,t){return"[Axios v"+n+"] Transitional option '"+e+"'"+t+(r?". "+r:"")}return function(r,n,a){if(!1===e)throw new o(i(n," has been removed"+(t?" in "+t:"")),o.ERR_DEPRECATED);return t&&!s[n]&&(s[n]=!0,console.warn(i(n," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(r,n,a)}},e.exports={assertOptions:a,validators:i}},4867:function(e,t,r){"use strict";var n=r(1849),o=Object.prototype.toString,i=function(e){return function(t){var r=o.call(t);return e[r]||(e[r]=r.slice(8,-1).toLowerCase())}}(Object.create(null));function s(e){return e=e.toLowerCase(),function(t){return i(t)===e}}function a(e){return Array.isArray(e)}function c(e){return"undefined"===typeof e}function u(e){return null!==e&&!c(e)&&null!==e.constructor&&!c(e.constructor)&&"function"===typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}var l=s("ArrayBuffer");function f(e){var t;return t="undefined"!==typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&l(e.buffer),t}function d(e){return"string"===typeof e}function p(e){return"number"===typeof e}function h(e){return null!==e&&"object"===typeof e}function m(e){if("object"!==i(e))return!1;var t=Object.getPrototypeOf(e);return null===t||t===Object.prototype}var g=s("Date"),v=s("File"),y=s("Blob"),w=s("FileList");function b(e){return"[object Function]"===o.call(e)}function E(e){return h(e)&&b(e.pipe)}function O(e){var t="[object FormData]";return e&&("function"===typeof FormData&&e instanceof FormData||o.call(e)===t||b(e.toString)&&e.toString()===t)}var C=s("URLSearchParams");function x(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")}function R(){return("undefined"===typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!==typeof window&&"undefined"!==typeof document)}function A(e,t){if(null!==e&&"undefined"!==typeof e)if("object"!==typeof e&&(e=[e]),a(e))for(var r=0,n=e.length;r<n;r++)t.call(null,e[r],r,e);else for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.call(null,e[o],o,e)}function S(){var e={};function t(t,r){m(e[r])&&m(t)?e[r]=S(e[r],t):m(t)?e[r]=S({},t):a(t)?e[r]=t.slice():e[r]=t}for(var r=0,n=arguments.length;r<n;r++)A(arguments[r],t);return e}function N(e,t,r){return A(t,(function(t,o){e[o]=r&&"function"===typeof t?n(t,r):t})),e}function _(e){return 65279===e.charCodeAt(0)&&(e=e.slice(1)),e}function T(e,t,r,n){e.prototype=Object.create(t.prototype,n),e.prototype.constructor=e,r&&Object.assign(e.prototype,r)}function j(e,t,r){var n,o,i,s={};t=t||{};do{n=Object.getOwnPropertyNames(e),o=n.length;while(o-- >0)i=n[o],s[i]||(t[i]=e[i],s[i]=!0);e=Object.getPrototypeOf(e)}while(e&&(!r||r(e,t))&&e!==Object.prototype);return t}function U(e,t,r){e=String(e),(void 0===r||r>e.length)&&(r=e.length),r-=t.length;var n=e.indexOf(t,r);return-1!==n&&n===r}function L(e){if(!e)return null;var t=e.length;if(c(t))return null;var r=new Array(t);while(t-- >0)r[t]=e[t];return r}var D=function(e){return function(t){return e&&t instanceof e}}("undefined"!==typeof Uint8Array&&Object.getPrototypeOf(Uint8Array));e.exports={isArray:a,isArrayBuffer:l,isBuffer:u,isFormData:O,isArrayBufferView:f,isString:d,isNumber:p,isObject:h,isPlainObject:m,isUndefined:c,isDate:g,isFile:v,isBlob:y,isFunction:b,isStream:E,isURLSearchParams:C,isStandardBrowserEnv:R,forEach:A,merge:S,extend:N,trim:x,stripBOM:_,inherits:T,toFlatObject:j,kindOf:i,kindOfTest:s,endsWith:U,toArray:L,isTypedArray:D,isFileList:w}},6113:function(e,t,r){"use strict";r.d(t,{Z:function(){return a}});var n=r(2482),o=(r(6699),r(9520));class i extends o.ZP{constructor(){super("Article"),(0,n.Z)(this,"articles",void 0),this.version(1).stores({articles:"++id,*triples"})}}class s{constructor(){(0,n.Z)(this,"db",new i)}async getArticles(){return this.db.articles.toArray()}async getLocalArticleCount(){return this.db.articles.count()}async searchArticlesByName(e){return this.db.articles.filter((t=>t.name.toLowerCase().includes(e.toLowerCase()))).toArray()}async searchArticlesByDescription(e){return this.db.articles.filter((t=>t.description.toLowerCase().includes(e.toLowerCase()))).toArray()}async searchArticles(e){if(0===e.trim().length)return this.db.articles.toArray();const t=e.toLowerCase();return this.db.articles.filter((e=>this.matches(e,t))).toArray()}async searchArticlesWithQuery(e){if(e.trim().length<3)return this.db.articles.toArray();const t=e.substring(0,3).toLowerCase(),r=e.toLowerCase();return this.db.articles.where("triples").equals(t).filter((e=>this.matches(e,r))).toArray()}matches(e,t){return!t||e.name.toLowerCase().includes(t)||e.description.toLowerCase().includes(t)}async store(e){return console.log("ArticleDBService.store store "+e.length+" articles"),this.db.articles.bulkPut(e).then((()=>e.length))}async clear(){this.db.articles.clear()}}var a=new s},1963:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return C}});var n=r(6252),o=r(3577);const i=(0,n.Uk)("Load Catalog"),s=(0,n.Uk)("The catalog of articles can be loaded in the local database (indexedDB) of this device. "),a=(0,n.Uk)("Load Catalog"),c=(0,n.Uk)("Clear Catalog");function u(e,t,r,u,l,f){const d=(0,n.up)("v-card-title"),p=(0,n.up)("v-card-subtitle"),h=(0,n.up)("v-checkbox"),m=(0,n.up)("v-spacer"),g=(0,n.up)("v-btn"),v=(0,n.up)("v-container"),y=(0,n.up)("v-card-text"),w=(0,n.up)("v-card");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n.Wm)(w,null,{default:(0,n.w5)((()=>[(0,n.Wm)(d,null,{default:(0,n.w5)((()=>[i])),_:1}),(0,n.Wm)(p,null,{default:(0,n.w5)((()=>[s])),_:1}),(0,n.Wm)(y,null,{default:(0,n.w5)((()=>[(0,n.Wm)(v,{class:"d-flex justify-start flex-wrap"},{default:(0,n.w5)((()=>[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.state.catalogs,(r=>((0,n.wg)(),(0,n.j4)(h,{key:r.name,modelValue:e.state.selectedCatalogNames,"onUpdate:modelValue":t[0]||(t[0]=t=>e.state.selectedCatalogNames=t),label:`${r.name} (${r.size})`,value:`${r.name}`,disabled:!e.state.isOnline,class:"flex-grow-0 flex-shrink-0 pr-4"},null,8,["modelValue","label","value","disabled"])))),128)),(0,n.Wm)(m,{class:"flex-grow-1"}),(0,n._)("div",null,[(0,n.Wm)(g,{disabled:!e.state.isOnline,onClick:e.loadCatalogs},{default:(0,n.w5)((()=>[a])),_:1},8,["disabled","onClick"]),(0,n.Wm)(g,{onClick:e.clearCatalog},{default:(0,n.w5)((()=>[c])),_:1},8,["onClick"])])])),_:1}),(0,n.Wm)(v,null,{default:(0,n.w5)((()=>[(0,n.Uk)(" Current number of articles on device: "+(0,o.zw)(e.state.articlesCount),1)])),_:1})])),_:1})])),_:1}),((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.state.messages,((e,t)=>((0,n.wg)(),(0,n.iD)("p",{key:t},(0,o.zw)(e),1)))),128))],64)}var l=r(2262),f=r(6113),d=r(5293),p=r(9669),h=r.n(p),m=r(2482);class g{constructor(e,t,r,n,o,i){(0,m.Z)(this,"id",void 0),(0,m.Z)(this,"name",void 0),(0,m.Z)(this,"description",void 0),(0,m.Z)(this,"catalogName",void 0),(0,m.Z)(this,"triples",void 0),(0,m.Z)(this,"base64Image",void 0),this.id=e,this.name=t,this.description=r,this.catalogName=i,this.triples=o,this.base64Image=n}}var v=r(5024);class y{async getAvailableCatalogs(){const e=v.Z.getServerUrl()+"/catalogs",t=h().get(e);return t.then((e=>e.data.catalogs)).catch((e=>(console.error(e),[])))}async loadCatalog(e){const t=v.Z.getServerUrl()+"/articles",r=h().get(t,{params:{catalogName:e}});return r.then((e=>e.data.articles)).then((t=>t.map((t=>new g(e+"-"+t.id,t.name,t.description,t.base64Image,t.triples,e))))).catch((e=>(console.error(e),[])))}}var w=new y,b=(0,n.aZ)({name:"CatalogsView",setup(){const e=(0,l.qj)({articlesCount:0,isOnline:!1,catalogs:[],selectedCatalogNames:[],messages:[]});w.getAvailableCatalogs().then((t=>e.catalogs=t)),(0,n.bv)((()=>{t(),d.Z.registerOnlineStatusUpdateListener(t),f.Z.getLocalArticleCount().then((t=>{e.articlesCount=t})).catch((e=>{console.log(e)}))}));const t=()=>{e.isOnline=d.Z.isOnline},r=()=>{e.selectedCatalogNames.forEach((e=>{o(e)}))},o=t=>{const r=performance.now();w.loadCatalog(t).then((e=>f.Z.store(e))).then((e=>console.log("Fetched "+e+" articles from catalog "+t+" on server and put to local database."))).then((()=>f.Z.getLocalArticleCount())).then((t=>e.articlesCount=t)).then((()=>{const n=performance.now();e.messages.push(`Loading of ${t.padEnd(10," ")} took ${Math.ceil(n-r)/1e3} s`)})).catch((n=>{console.error(n);const o=performance.now();e.messages.push(`Exception after ${Math.ceil(o-r)/1e3} s while loading ${t} - ${n}`)}))},i=()=>{f.Z.clear().then((()=>e.articlesCount=0)).catch((e=>console.log(e)))};return{state:e,updateOnlineStatus:t,loadCatalogs:r,clearCatalog:i}}}),E=r(3744);const O=(0,E.Z)(b,[["render",u]]);var C=O}}]);
//# sourceMappingURL=963.3f3620b8.js.map