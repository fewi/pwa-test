"use strict";(self["webpackChunkshoppinglistmanager"]=self["webpackChunkshoppinglistmanager"]||[]).push([[506],{6113:function(e,t,r){r.d(t,{Z:function(){return p}});var n=r(8534),a=r(3087),i=r(2833),u=r(2482),s=(r(5666),r(1539),r(7327),r(6699),r(2023),r(8309),r(2526),r(1817),r(3210),r(2417)),c=r(3806),o=r(5744),l=r(9520),f=function(e){(0,c.Z)(r,e);var t=(0,o.Z)(r);function r(){var e;return(0,a.Z)(this,r),e=t.call(this,"Article"),(0,u.Z)((0,s.Z)(e),"articles",void 0),e.version(1).stores({articles:"++id,*triples"}),e}return(0,i.Z)(r)}(l.ZP),h=function(){function e(){(0,a.Z)(this,e),(0,u.Z)(this,"db",new f)}return(0,i.Z)(e,[{key:"getArticles",value:function(){var e=(0,n.Z)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",this.db.articles.toArray());case 1:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"getLocalArticleCount",value:function(){var e=(0,n.Z)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",this.db.articles.count());case 1:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"searchArticlesByName",value:function(){var e=(0,n.Z)(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",this.db.articles.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())})).toArray());case 1:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"searchArticlesByDescription",value:function(){var e=(0,n.Z)(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",this.db.articles.filter((function(e){return e.description.toLowerCase().includes(t.toLowerCase())})).toArray());case 1:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"searchArticles",value:function(){var e=(0,n.Z)(regeneratorRuntime.mark((function e(t){var r,n=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(0!==t.trim().length){e.next=2;break}return e.abrupt("return",this.db.articles.toArray());case 2:return r=t.toLowerCase(),e.abrupt("return",this.db.articles.filter((function(e){return n.matches(e,r)})).toArray());case 4:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"searchArticlesWithQuery",value:function(){var e=(0,n.Z)(regeneratorRuntime.mark((function e(t){var r,n,a=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!(t.trim().length<3)){e.next=2;break}return e.abrupt("return",this.db.articles.toArray());case 2:return r=t.substring(0,3).toLowerCase(),n=t.toLowerCase(),e.abrupt("return",this.db.articles.where("triples").equals(r).filter((function(e){return a.matches(e,n)})).toArray());case 5:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"matches",value:function(e,t){return!t||e.name.toLowerCase().includes(t)||e.description.toLowerCase().includes(t)}},{key:"store",value:function(){var e=(0,n.Z)(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return console.log("ArticleDBService.store store "+t.length+" articles"),e.abrupt("return",this.db.articles.bulkPut(t).then((function(){return t.length})));case 2:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"clear",value:function(){var e=(0,n.Z)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:this.db.articles.clear();case 1:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()}]),e}(),p=new h},5506:function(e,t,r){r.r(t),r.d(t,{default:function(){return y}});r(8309),r(2526),r(1817);var n=r(6252),a=r(3577),i=r(9963),u=(0,n.Uk)("Search Articles"),s=["src"];function c(e,t,r,c,o,l){var f=(0,n.up)("v-card-title"),h=(0,n.up)("v-text-field"),p=(0,n.up)("v-btn"),m=(0,n.up)("v-card-text"),d=(0,n.up)("v-card"),w=(0,n.up)("v-list-item-title"),g=(0,n.up)("v-list-item-subtitle"),v=(0,n.up)("v-list-item-header"),y=(0,n.up)("v-list-item"),b=(0,n.up)("InfiniteScroll"),k=(0,n.up)("v-container");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n.Wm)(d,null,{default:(0,n.w5)((function(){return[(0,n.Wm)(f,null,{default:(0,n.w5)((function(){return[(0,n.Uk)("Article Search ("+(0,a.zw)(e.state.articlesCount)+")",1)]})),_:1}),(0,n.Wm)(m,{class:"d-flex align-center"},{default:(0,n.w5)((function(){return[(0,n.Wm)(h,{modelValue:e.state.searchTerm,"onUpdate:modelValue":t[0]||(t[0]=function(t){return e.state.searchTerm=t}),"hide-details":"auto",label:"Enter a search term",style:{color:"white"},onKeyup:(0,i.D2)(e.searchArticles,["enter"])},null,8,["modelValue","onKeyup"]),(0,n.Wm)(p,{class:"flex-grow-0 ml-4",onClick:e.searchArticles},{default:(0,n.w5)((function(){return[u]})),_:1},8,["onClick"])]})),_:1})]})),_:1}),((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.state.messages,(function(e,t){return(0,n.wg)(),(0,n.iD)("p",{key:t},(0,a.zw)(e),1)})),128)),(0,n.Wm)(k,null,{default:(0,n.w5)((function(){return[(0,n.Uk)(" Found Articles ("+(0,a.zw)(e.state.articles.length)+") ",1),(0,n.Wm)(b,(0,n.dG)(e.state.pagination,{onLoadMoreItems:e.loadItems}),{default:(0,n.w5)((function(e){var t=e.item;return[(0,n.Wm)(y,{lines:"three"},{default:(0,n.w5)((function(){return[(0,n.Wm)(v,null,{default:(0,n.w5)((function(){return[(0,n.Wm)(w,null,{default:(0,n.w5)((function(){return[(0,n.Uk)((0,a.zw)(t.id)+" - "+(0,a.zw)(t.name),1)]})),_:2},1024),(0,n.Wm)(g,null,{default:(0,n.w5)((function(){return[(0,n.Uk)((0,a.zw)(t.description),1)]})),_:2},1024),(0,n.Wm)(g,null,{default:(0,n.w5)((function(){return[""!==t.base64Image?((0,n.wg)(),(0,n.iD)("img",{key:0,src:"data:image/png;base64,".concat(t.base64Image),style:{width:"30%"}},null,8,s)):(0,n.kq)("",!0)]})),_:2},1024)]})),_:2},1024)]})),_:2},1024)]})),_:1},16,["onLoadMoreItems"])]})),_:1})],64)}r(2222),r(7042);var o=r(2262),l=r(6113),f=r(5293);function h(e,t,r,a,i,u){var s=(0,n.Q2)("intersect");return(0,n.wg)(),(0,n.iD)(n.HY,null,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.items,(function(t,r){return(0,n.wg)(),(0,n.iD)("div",{key:r},[(0,n.WI)(e.$slots,"default",{item:t})])})),128)),(0,n.wy)((0,n._)("div",null,null,512),[[s,e.onIntersect]])],64)}r(9653);var p=(0,n.aZ)({name:"InfiniteScroll",props:{items:Array,lastPage:Number,page:Number},setup:function(e,t){var r=t.emit;(0,n.bv)((function(){r("loadMoreItems",1)}));var a=function(t,n){var a=void 0!==e.page?e.page:1,i=void 0!==e.lastPage?e.lastPage:0;n[0].isIntersecting&&a<i&&r("loadMoreItems",a+1)};return{onIntersect:a}}}),m=r(3744);const d=(0,m.Z)(p,[["render",h]]);var w=d,g=(0,n.aZ)({name:"SearchView",components:{InfiniteScroll:w},setup:function(){var e=(0,o.qj)({articles:new Array,articlesCount:0,searchTerm:"",isOnline:!1,pagination:{page:0,items:[],lastPage:0},messages:[]});(0,n.bv)((function(){t(),f.Z.registerOnlineStatusUpdateListener(t),l.Z.getLocalArticleCount().then((function(t){e.articlesCount=t})).catch((function(e){console.log(e)}))}));var t=function(){e.isOnline=f.Z.isOnline},r=function(){var t=performance.now();l.Z.searchArticlesWithQuery(e.searchTerm).then((function(r){var n=performance.now();e.articles=r,e.messages.push('Searching for "'.concat(e.searchTerm,'" took ').concat(Math.ceil(n-t)/1e3," s and delivered ").concat(r.length," out of ").concat(e.articlesCount)),a(1)})).catch((function(r){console.log(r);var n=performance.now();e.messages.push("Exception after ".concat(Math.ceil(n-t)/1e3," s while searching ").concat(e.searchTerm," - ").concat(r))}))},a=function(t){var r=10;e.pagination.lastPage=Math.ceil(e.articles.length/r),e.pagination.page=t,e.pagination.items=e.articles.slice(0,t*r)};return{state:e,updateOnlineStatus:t,searchArticles:r,loadItems:a}}});const v=(0,m.Z)(g,[["render",c]]);var y=v}}]);
//# sourceMappingURL=506-legacy.eb49a3b3.js.map