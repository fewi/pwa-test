if(!self.define){let e,s={};const t=(t,n)=>(t=new URL(t+".js",n).href,s[t]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=t,e.onload=s,document.head.appendChild(e)}else e=t,importScripts(t),s()})).then((()=>{let e=s[t];if(!e)throw new Error(`Module ${t} didn’t register its module`);return e})));self.define=(n,i)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let l={};const o=e=>t(e,r),a={module:{uri:r},exports:l,require:o};s[r]=Promise.all(n.map((e=>a[e]||o(e)))).then((e=>(i(...e),l)))}}define(["./workbox-2d118ab0"],(function(e){"use strict";e.setCacheNameDetails({prefix:"shoppinglistmanager"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/pwa-test/css/app.347f27c2.css",revision:null},{url:"/pwa-test/css/chunk-vendors.4e081cba.css",revision:null},{url:"/pwa-test/fonts/materialdesignicons-webfont.2e22fd77.eot",revision:null},{url:"/pwa-test/fonts/materialdesignicons-webfont.42483c73.woff",revision:null},{url:"/pwa-test/fonts/materialdesignicons-webfont.935d8e7a.woff2",revision:null},{url:"/pwa-test/fonts/materialdesignicons-webfont.9fcb655c.ttf",revision:null},{url:"/pwa-test/index.html",revision:"a79ea464e4367cd8ff272df39cd25ab5"},{url:"/pwa-test/js/473.f9de0d7e.js",revision:null},{url:"/pwa-test/js/643.8f131dbc.js",revision:null},{url:"/pwa-test/js/814.a4c40c07.js",revision:null},{url:"/pwa-test/js/877.b7f9b834.js",revision:null},{url:"/pwa-test/js/app.471a8266.js",revision:null},{url:"/pwa-test/js/chunk-vendors.d58d666f.js",revision:null},{url:"/pwa-test/manifest.json",revision:"0f85a3b0d87318a9e680f4e07bab8bef"},{url:"/pwa-test/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
