"use strict";(self["webpackChunkshoppinglistmanager"]=self["webpackChunkshoppinglistmanager"]||[]).push([[65],{8065:function(e,t,n){n.r(t),n.d(t,{default:function(){return w}});n(8309),n(2526),n(1817);var a=n(6252),r=n(3577),i=n(9963),l=(0,a.Uk)("Search Articles");function u(e,t,n,u,c,s){var o=(0,a.up)("v-card-title"),m=(0,a.up)("v-text-field"),f=(0,a.up)("v-btn"),d=(0,a.up)("v-card-text"),p=(0,a.up)("v-card"),g=(0,a.up)("v-list-item-title"),h=(0,a.up)("v-list-item-subtitle"),v=(0,a.up)("v-img"),w=(0,a.up)("v-list-item-header"),I=(0,a.up)("v-list-item"),b=(0,a.up)("InfiniteScroll"),W=(0,a.up)("v-container");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(p,null,{default:(0,a.w5)((function(){return[(0,a.Wm)(o,null,{default:(0,a.w5)((function(){return[(0,a.Uk)("Article Search ("+(0,r.zw)(e.state.articlesCount)+")",1)]})),_:1}),(0,a.Wm)(d,{class:"d-flex align-center"},{default:(0,a.w5)((function(){return[(0,a.Wm)(m,{modelValue:e.state.searchTerm,"onUpdate:modelValue":t[0]||(t[0]=function(t){return e.state.searchTerm=t}),"hide-details":"auto",label:"Enter a search term",style:{color:"white"},onKeyup:(0,i.D2)(e.searchArticles,["enter"])},null,8,["modelValue","onKeyup"]),(0,a.Wm)(f,{class:"flex-grow-0 ml-4",onClick:e.searchArticles},{default:(0,a.w5)((function(){return[l]})),_:1},8,["onClick"])]})),_:1})]})),_:1}),(0,a.Wm)(W,null,{default:(0,a.w5)((function(){return[(0,a.Uk)(" Found Articles ("+(0,r.zw)(e.state.articles.length)+") ",1),(0,a.Wm)(b,(0,a.dG)(e.state.pagination,{onLoadMoreItems:e.loadItems}),{default:(0,a.w5)((function(e){var t=e.item;return[(0,a.Wm)(I,{lines:"three"},{default:(0,a.w5)((function(){return[(0,a.Wm)(w,null,{default:(0,a.w5)((function(){return[(0,a.Wm)(g,null,{default:(0,a.w5)((function(){return[(0,a.Uk)((0,r.zw)(t.id)+" - "+(0,r.zw)(t.name),1)]})),_:2},1024),(0,a.Wm)(h,null,{default:(0,a.w5)((function(){return[(0,a.Uk)((0,r.zw)(t.description),1)]})),_:2},1024),(0,a.Wm)(h,null,{default:(0,a.w5)((function(){return[(0,a.Wm)(v,{disabled:""===t.base64Image,src:"data:image/png;base64,".concat(t.base64Image),style:{width:"30%"}},null,8,["disabled","src"])]})),_:2},1024)]})),_:2},1024)]})),_:2},1024)]})),_:1},16,["onLoadMoreItems"])]})),_:1})],64)}n(7042);var c=n(2262),s=n(6113),o=n(5293);function m(e,t,n,r,i,l){var u=(0,a.Q2)("intersect");return(0,a.wg)(),(0,a.iD)(a.HY,null,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.items,(function(t,n){return(0,a.wg)(),(0,a.iD)("div",{key:n},[(0,a.WI)(e.$slots,"default",{item:t})])})),128)),(0,a.wy)((0,a._)("div",null,null,512),[[u,e.onIntersect]])],64)}n(9653);var f=(0,a.aZ)({name:"InfiniteScroll",props:{items:Array,lastPage:Number,page:Number},setup:function(e,t){var n=t.emit;(0,a.bv)((function(){n("loadMoreItems",1)}));var r=function(t,a){var r=void 0!==e.page?e.page:1,i=void 0!==e.lastPage?e.lastPage:0;a[0].isIntersecting&&r<i&&n("loadMoreItems",r+1)};return{onIntersect:r}}}),d=n(3744);const p=(0,d.Z)(f,[["render",m]]);var g=p,h=(0,a.aZ)({name:"SearchView",components:{InfiniteScroll:g},setup:function(){var e=(0,c.qj)({articles:new Array,articlesCount:0,searchTerm:"",isOnline:!1,pagination:{page:0,items:[],lastPage:0}});(0,a.bv)((function(){t(),o.Z.registerOnlineStatusUpdateListener(t),s.Z.getLocalArticleCount().then((function(t){e.articlesCount=t})).catch((function(e){console.log(e)}))}));var t=function(){e.isOnline=o.Z.isOnline},n=function(){s.Z.searchArticlesByName(e.searchTerm).then((function(t){t.length<1&&s.Z.searchArticlesByDescription(e.searchTerm).then((function(t){e.articles=t,r(1)})).catch((function(e){console.log(e)})),e.articles=t,r(1)})).catch((function(e){console.log(e)}))},r=function(t){var n=10;e.pagination.lastPage=Math.ceil(e.articles.length/n),e.pagination.page=t,e.pagination.items=e.articles.slice(0,t*n)};return{state:e,updateOnlineStatus:t,searchArticles:n,loadItems:r}}});const v=(0,d.Z)(h,[["render",u]]);var w=v}}]);
//# sourceMappingURL=65-legacy.2f338115.js.map