(function(){"use strict";var t={8576:function(t,e,n){n(6992),n(8674),n(9601),n(7727);var r=n(9963),a=(n(6375),n(9811)),o=n(746),u=n(8600),i=(0,a.Rd)({components:o,directives:u}),c=n(6252),l=n(3577),s=(0,c.Uk)("PWA Demo");function d(t,e,n,r,a,o){var u=(0,c.up)("navigation-drawer"),i=(0,c.up)("v-navigation-drawer"),d=(0,c.up)("v-app-bar-nav-icon"),f=(0,c.up)("v-app-bar-title"),m=(0,c.up)("v-spacer"),p=(0,c.up)("v-icon"),v=(0,c.up)("v-btn"),w=(0,c.up)("v-app-bar"),g=(0,c.up)("account-dialog"),h=(0,c.up)("router-view"),k=(0,c.up)("v-container"),b=(0,c.up)("v-main"),y=(0,c.up)("v-app"),Z=(0,c.up)("v-theme-provider");return(0,c.wg)(),(0,c.j4)(Z,{theme:"dark","with-background":""},{default:(0,c.w5)((function(){return[(0,c.Wm)(y,null,{default:(0,c.w5)((function(){return[(0,c.Wm)(i,{modelValue:t.state.drawer,"onUpdate:modelValue":e[0]||(e[0]=function(e){return t.state.drawer=e}),app:""},{default:(0,c.w5)((function(){return[(0,c.Wm)(u,{account:t.loadAccount(),onHideDrawer:t.hideDrawer},null,8,["account","onHideDrawer"])]})),_:1},8,["modelValue"]),(0,c.Wm)(w,{app:""},{default:(0,c.w5)((function(){return[(0,c.Wm)(d,{onClick:e[1]||(e[1]=function(e){return t.state.drawer=!t.state.drawer})}),(0,c.Wm)(f,null,{default:(0,c.w5)((function(){return[s]})),_:1}),(0,c.Wm)(m),(0,c.Wm)(v,{class:(0,l.C_)(t.state.onlineStatusStyle),onClick:e[2]||(e[2]=function(e){return t.sync()})},{default:(0,c.w5)((function(){return[(0,c.Wm)(p,null,{default:(0,c.w5)((function(){return[(0,c.Uk)((0,l.zw)(t.state.onlineStatusIcon),1)]})),_:1})]})),_:1},8,["class"])]})),_:1}),(0,c.Wm)(b,null,{default:(0,c.w5)((function(){return[(0,c.Wm)(k,{fluid:""},{default:(0,c.w5)((function(){return[(0,c.Wm)(g),(0,c.Wm)(h)]})),_:1})]})),_:1})]})),_:1})]})),_:1})}var f=n(2262);n(8309);function m(t,e,n,r,a,o){var u=(0,c.up)("v-list-item-title"),i=(0,c.up)("v-list-item-subtitle"),s=(0,c.up)("v-list-item"),d=(0,c.up)("v-list"),f=(0,c.up)("v-divider"),m=(0,c.up)("v-list-item-icon"),p=(0,c.up)("v-container");return(0,c.wg)(),(0,c.j4)(p,{onClick:t.itemSelected},{default:(0,c.w5)((function(){return[(0,c.Wm)(d,{density:"comfortable"},{default:(0,c.w5)((function(){return[(0,c.Wm)(s,null,{default:(0,c.w5)((function(){return[(0,c.Wm)(u,{class:"text-h6"},{default:(0,c.w5)((function(){return[(0,c.Uk)((0,l.zw)(t.account.name),1)]})),_:1}),(0,c.Wm)(i,null,{default:(0,c.w5)((function(){return[(0,c.Uk)((0,l.zw)(t.account.organization),1)]})),_:1})]})),_:1})]})),_:1}),(0,c.Wm)(f),(0,c.Wm)(d,{density:"comfortable"},{default:(0,c.w5)((function(){return[((0,c.wg)(!0),(0,c.iD)(c.HY,null,(0,c.Ko)(t.state.items,(function(e){return(0,c.wg)(),(0,c.j4)(s,{key:e.title,to:e.route,link:"",onClick:t.itemSelected},{default:(0,c.w5)((function(){return[(0,c.Wm)(m,{style:{"margin-right":"1em"},icon:"{{ item.icon }}"}),(0,c.Wm)(u,null,{default:(0,c.w5)((function(){return[(0,c.Uk)((0,l.zw)(e.title),1)]})),_:2},1024)]})),_:2},1032,["to","onClick"])})),128))]})),_:1})]})),_:1},8,["onClick"])}var p=n(5621),v=(0,c.aZ)({name:"NavigationDrawer",props:{account:p.m},setup:function(t,e){var n=e.emit,r=(0,f.qj)({drawer:!1,items:[{title:"Baskets",icon:"mdi-shopping-outline",route:"/home"},{title:"Settings",icon:"mdi-application-settings",route:"/settings"},{title:"Catalogs",icon:"mdi-book-open-variant",route:"/catalogs"},{title:"Account",icon:"mdi-account-edit-outline",route:"/account"},{title:"About",icon:"mdi-chat-question-outline",route:"/about"}]});(0,c.bv)((function(){window.addEventListener("keydown",(function(t){"Escape"===t.code&&(r.drawer=!1)}))})),(0,c.Ah)((function(){window.removeEventListener("keydown",(function(t){"Escape"===t.code&&(r.drawer=!1)}))}));var a=function(){n("hide-drawer")};return{state:r,itemSelected:a}}}),w=n(3744);const g=(0,w.Z)(v,[["render",m]]);var h=g;function k(t,e,n,r,a,o){var u=(0,c.up)("account-view"),i=(0,c.up)("v-dialog");return(0,c.wg)(),(0,c.j4)(i,{modelValue:t.state.showDialog,"onUpdate:modelValue":e[0]||(e[0]=function(e){return t.state.showDialog=e}),persistent:"true"},{default:(0,c.w5)((function(){return[(0,c.Wm)(u,{onOnAccountSaved:t.closeDialog},null,8,["onOnAccountSaved"])]})),_:1},8,["modelValue"])}var b=n(739),y=n(5024),Z=(0,c.aZ)({name:"AccountDialog",components:{AccountView:b["default"]},setup:function(){var t=(0,f.qj)({showDialog:!1});(0,c.bv)((function(){t.showDialog=!y.Z.localStorageInitialized}));var e=function(){t.showDialog=!1};return{state:t,closeDialog:e}}});const _=(0,w.Z)(Z,[["render",k]]);var W=_,U=n(3907),A=n(9905),C=n(5293),D=(0,c.aZ)({name:"App",components:{AccountDialog:W,NavigationDrawer:h},setup:function(){var t=(0,U.oR)(),e=(0,f.qj)({drawer:!1,onlineStatusIcon:"mdi-sync-off",onlineStatusStyle:"offline"});t.dispatch(A.U.InitBaskets),(0,c.bv)((function(){r(),window.addEventListener("online",r),window.addEventListener("offline",r),window.addEventListener("keydown",(function(t){"Escape"===t.code&&n()}))})),(0,c.Ah)((function(){window.removeEventListener("keydown",(function(t){"Escape"===t.code&&n()}))}));var n=function(){e.drawer=!1},r=function(){e.onlineStatusStyle=C.Z.isOnline?"online":"offline",e.onlineStatusIcon=C.Z.isOnline?"mdi-sync":"mdi-sync-off",console.log("App.updateOnlineStatus: status is "+e.onlineStatusStyle)},a=function(){return y.Z.getAccount()},o=function(){console.log("sync not implemented yet")};return{store:t,state:e,hideDrawer:n,updateOnlineStatus:r,loadAccount:a,sync:o}}});const S=(0,w.Z)(D,[["render",d],["__scopeId","data-v-27174e04"]]);var R=S,B=(n(1539),n(8783),n(3948),n(2119)),E=(n(2526),n(1817),(0,c.Uk)("mdi-plus")),O=(0,c.Uk)("mdi-magnify"),x=(0,c.Uk)("12 items"),V=(0,c.Uk)("Details"),L=(0,c.Uk)("Delete");function N(t,e,n,r,a,o){var u=(0,c.up)("v-icon"),i=(0,c.up)("v-btn"),s=(0,c.up)("v-spacer"),d=(0,c.up)("v-card-subtitle"),f=(0,c.up)("v-card-actions"),m=(0,c.up)("v-card"),p=(0,c.up)("v-avatar"),v=(0,c.up)("v-badge"),w=(0,c.up)("v-card-avatar"),g=(0,c.up)("v-card-title"),h=(0,c.up)("v-card-header-text"),k=(0,c.up)("v-card-header"),b=(0,c.up)("v-card-text"),y=(0,c.up)("v-col"),Z=(0,c.up)("v-row"),_=(0,c.up)("v-container"),W=(0,c.up)("basket-dialog");return(0,c.wg)(),(0,c.iD)(c.HY,null,[(0,c.Wm)(_,{fluid:""},{default:(0,c.w5)((function(){return[(0,c.Wm)(Z,null,{default:(0,c.w5)((function(){return[(0,c.Wm)(y,null,{default:(0,c.w5)((function(){return[(0,c.Wm)(m,{flat:"",style:{"background-color":"transparent"}},{default:(0,c.w5)((function(){return[(0,c.Wm)(f,null,{default:(0,c.w5)((function(){return[(0,c.Wm)(i,{icon:"",size:"x-small",style:{"margin-top":"-20px"},onClick:t.openBasketDialog},{default:(0,c.w5)((function(){return[(0,c.Wm)(u,null,{default:(0,c.w5)((function(){return[E]})),_:1})]})),_:1},8,["onClick"]),(0,c.Wm)(i,{icon:"",size:"x-small",style:{"margin-top":"-20px"}},{default:(0,c.w5)((function(){return[(0,c.Wm)(u,null,{default:(0,c.w5)((function(){return[O]})),_:1})]})),_:1}),(0,c.Wm)(s),(0,c.Wm)(d,{link:""},{default:(0,c.w5)((function(){return[(0,c.Uk)((0,l.zw)(t.state.baskets.length)+" Baskets",1)]})),_:1})]})),_:1})]})),_:1}),(0,c.Wm)(m,{style:{"background-color":"transparent"}},{default:(0,c.w5)((function(){return[(0,c.Wm)(Z,null,{default:(0,c.w5)((function(){return[((0,c.wg)(!0),(0,c.iD)(c.HY,null,(0,c.Ko)(t.state.baskets,(function(e){return(0,c.wg)(),(0,c.j4)(y,{key:e.id,cols:"12",sm:"6",md:"4",xl:"3"},{default:(0,c.w5)((function(){return[(0,c.Wm)(m,null,{default:(0,c.w5)((function(){return[(0,c.Wm)(k,null,{default:(0,c.w5)((function(){return[(0,c.Wm)(w,null,{default:(0,c.w5)((function(){return[(0,c.Wm)(v,{bordered:"",color:"error",icon:"mdi-lock"},{default:(0,c.w5)((function(){return[(0,c.Wm)(p,{color:"orange",size:"48"},{default:(0,c.w5)((function(){return[(0,c.Uk)((0,l.zw)(t.computeAcronym(e)),1)]})),_:2},1024)]})),_:2},1024)]})),_:2},1024),(0,c.Wm)(h,null,{default:(0,c.w5)((function(){return[(0,c.Wm)(g,null,{default:(0,c.w5)((function(){return[(0,c.Uk)((0,l.zw)(e.id)+" - "+(0,l.zw)(e.name),1)]})),_:2},1024),(0,c.Wm)(d,null,{default:(0,c.w5)((function(){return[(0,c.Uk)((0,l.zw)(e.description),1)]})),_:2},1024)]})),_:2},1024)]})),_:2},1024),(0,c.Wm)(b,null,{default:(0,c.w5)((function(){return[x]})),_:1}),(0,c.Wm)(f,null,{default:(0,c.w5)((function(){return[(0,c.Wm)(i,{to:t.basketRoute(e)},{default:(0,c.w5)((function(){return[V]})),_:2},1032,["to"]),(0,c.Wm)(i,null,{default:(0,c.w5)((function(){return[L]})),_:1})]})),_:2},1024)]})),_:2},1024)]})),_:2},1024)})),128))]})),_:1})]})),_:1})]})),_:1})]})),_:1})]})),_:1}),(0,c.Wm)(W,{basket:t.createBasket(),showDialog:t.state.showBasketDialog,onOnCloseDialog:t.closeDialog},null,8,["basket","showDialog","onOnCloseDialog"])],64)}var I=n(632);function T(t,e,n,r,a,o){var u=(0,c.up)("v-btn"),i=(0,c.up)("v-card-actions"),l=(0,c.up)("basket-panel"),s=(0,c.up)("v-card-text"),d=(0,c.up)("v-divider"),f=(0,c.up)("v-card"),m=(0,c.up)("v-dialog");return(0,c.wg)(),(0,c.j4)(m,{modelValue:t.state.showBasketDialog,"onUpdate:modelValue":e[0]||(e[0]=function(e){return t.state.showBasketDialog=e})},{default:(0,c.w5)((function(){return[(0,c.Wm)(f,null,{default:(0,c.w5)((function(){return[(0,c.Wm)(i,null,{default:(0,c.w5)((function(){return[(0,c.Wm)(u,{icon:"mdi-close",size:"x-small",onClick:t.closeDialog},null,8,["onClick"])]})),_:1}),(0,c.Wm)(s,null,{default:(0,c.w5)((function(){return[(0,c.Wm)(l,{basket:t.state.basket,onOnBasketSaved:t.closeDialog},null,8,["basket","onOnBasketSaved"])]})),_:1}),(0,c.Wm)(d),(0,c.Wm)(i)]})),_:1})]})),_:1},8,["modelValue"])}var z=(0,c.Uk)("Create new Basket"),j=(0,c.Uk)("Clear"),P=(0,c.Uk)("Save"),M=(0,c.Uk)("Close");function q(t,e,n,r,a,o){var u=(0,c.up)("v-avatar"),i=(0,c.up)("v-card-avatar"),s=(0,c.up)("v-card-title"),d=(0,c.up)("v-card-header-text"),f=(0,c.up)("v-card-header"),m=(0,c.up)("v-text-field"),p=(0,c.up)("v-col"),v=(0,c.up)("v-row"),w=(0,c.up)("v-container"),g=(0,c.up)("v-card-text"),h=(0,c.up)("v-divider"),k=(0,c.up)("v-btn"),b=(0,c.up)("v-card-actions"),y=(0,c.up)("v-card"),Z=(0,c.up)("v-snackbar");return(0,c.wg)(),(0,c.iD)(c.HY,null,[(0,c.Wm)(y,null,{default:(0,c.w5)((function(){return[(0,c.Wm)(f,null,{default:(0,c.w5)((function(){return[(0,c.Wm)(i,null,{default:(0,c.w5)((function(){return[(0,c.Wm)(u,{icon:"mdi-account-edit-outline"})]})),_:1}),(0,c.Wm)(d,null,{default:(0,c.w5)((function(){return[(0,c.Wm)(s,null,{default:(0,c.w5)((function(){return[z]})),_:1})]})),_:1})]})),_:1}),(0,c.Wm)(g,null,{default:(0,c.w5)((function(){return[(0,c.Wm)(w,{fluid:""},{default:(0,c.w5)((function(){return[(0,c.Wm)(v,null,{default:(0,c.w5)((function(){return[(0,c.Wm)(p,{cols:"12"},{default:(0,c.w5)((function(){return[(0,c.Wm)(m,{modelValue:t.state.name,"onUpdate:modelValue":e[0]||(e[0]=function(e){return t.state.name=e}),label:"Name",rules:t.rules,"hide-details":"auto",style:{color:"white"}},null,8,["modelValue","rules"])]})),_:1}),(0,c.Wm)(p,{cols:"12"},{default:(0,c.w5)((function(){return[(0,c.Wm)(m,{modelValue:t.state.description,"onUpdate:modelValue":e[1]||(e[1]=function(e){return t.state.description=e}),label:"Description",rules:t.rules,"hide-details":"auto",style:{color:"white"}},null,8,["modelValue","rules"])]})),_:1})]})),_:1})]})),_:1})]})),_:1}),(0,c.Wm)(h),(0,c.Wm)(b,null,{default:(0,c.w5)((function(){return[(0,c.Wm)(k,{onClick:t.clear},{default:(0,c.w5)((function(){return[j]})),_:1},8,["onClick"]),(0,c.Wm)(k,{color:"primary",onClick:e[2]||(e[2]=function(e){return t.save(t.state.name,t.state.description)})},{default:(0,c.w5)((function(){return[P]})),_:1})]})),_:1})]})),_:1}),(0,c.Wm)(Z,{modelValue:t.state.snackbar,"onUpdate:modelValue":e[4]||(e[4]=function(e){return t.state.snackbar=e}),timeout:2e3},{action:(0,c.w5)((function(n){var r=n.attrs;return[(0,c.Wm)(k,(0,c.dG)({color:"blue",text:""},r,{onClick:e[3]||(e[3]=function(e){return t.state.snackbar=!1})}),{default:(0,c.w5)((function(){return[M]})),_:2},1040)]})),default:(0,c.w5)((function(){return[(0,c.Uk)((0,l.zw)(t.state.message)+" ",1)]})),_:1},8,["modelValue"])],64)}var F=(0,c.aZ)({name:"BasketPanel",props:{basket:I.L},setup:function(t,e){var n=e.emit,r=(0,U.oR)(),a=(0,f.qj)({snackbar:!1,message:"",name:"",description:""}),o=[function(t){return!!t||"Required."},function(t){return t&&t.length>=3||"Min 3 characters"}];(0,c.bv)((function(){a.name=t.basket?t.basket.name:"",a.description=t.basket?t.basket.description:""})),(0,c.ic)((function(){a.name=t.basket?t.basket.name:"",a.description=t.basket?t.basket.description:""}));var u=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a.name,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:a.description;r.dispatch(A.U.CreateBasket,new I.L(t,e)),n("on-basket-saved")},i=function(){a.name="",a.description="",a.message=""};return{state:a,rules:o,save:u,clear:i}}});const H=(0,w.Z)(F,[["render",q]]);var J=H,G=(0,c.aZ)({name:"BasketDialog",components:{BasketPanel:J},props:{basket:I.L,showDialog:Boolean},setup:function(t,e){var n=e.emit,r=(0,f.qj)({showBasketDialog:t.showDialog,basket:t.basket});(0,c.bv)((function(){r.basket=t.basket,r.showBasketDialog=t.showDialog})),(0,c.ic)((function(){r.basket=t.basket,r.showBasketDialog=t.showDialog}));var a=function(){r.showBasketDialog=!1,n("on-close-dialog")};return{state:r,closeDialog:a}}});const Y=(0,w.Z)(G,[["render",T]]);var K=Y,X=n(619),Q=(0,c.aZ)({name:"BasketsOverview",components:{BasketDialog:K},setup:function(){var t=(0,f.qj)({baskets:new Array,showBasketDialog:!1});(0,c.bv)((function(){u()})),(0,c.ic)((function(){u()}));var e=function(t){return t.name.substr(0,2).toUpperCase()},n=function(t){return"/baskets/"+t.id},r=function(){t.showBasketDialog=!0},a=function(){return new I.L},o=function(){t.showBasketDialog=!1},u=function(){X.Z.getBaskets().then((function(e){t.baskets=e}))};return{state:t,computeAcronym:e,basketRoute:n,createBasket:a,openBasketDialog:r,closeDialog:o,loadBaskets:u}}});const $=(0,w.Z)(Q,[["render",N]]);var tt=$,et=[{path:"/settings",component:function(){return n.e(814).then(n.bind(n,4814))}},{path:"/catalogs",component:function(){return n.e(41).then(n.bind(n,9041))}},{path:"/account",component:function(){return Promise.resolve().then(n.bind(n,739))}},{path:"/about",component:function(){return n.e(877).then(n.bind(n,6877))}},{path:"/baskets/:basketId",props:!0,component:function(){return n.e(572).then(n.bind(n,572))}},{path:"/:catchAll(.*)",props:!0,component:tt}],nt=(0,B.p7)({history:(0,B.PO)("/pwa-test/"),routes:et}),rt=nt,at=n(5156),ot={baskets:Array()},ut=(0,U.MT)({state:ot,mutations:at.P,actions:A.N,modules:{}});(0,r.ri)(R).use(rt).use(ut).use(i).mount("#app")},5621:function(t,e,n){n.d(e,{m:function(){return u}});var r=n(2833),a=n(3087),o=n(2482),u=(n(8309),(0,r.Z)((function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";(0,a.Z)(this,t),(0,o.Z)(this,"name",void 0),(0,o.Z)(this,"organization",void 0),(0,o.Z)(this,"serverUrl",void 0),this.name=e,this.organization=n,this.serverUrl=r})))},632:function(t,e,n){n.d(e,{L:function(){return f}});var r,a=n(2833),o=n(3087),u=n(2417),i=n(3806),c=n(5744),l=n(2482);n(8309),n(2526),n(1817);(function(t){t[t["CREATED"]=0]="CREATED",t[t["CHANGED"]=1]="CHANGED",t[t["DELETED"]=2]="DELETED"})(r||(r={}));var s,d=function(){function t(e,n,r){(0,o.Z)(this,t),(0,l.Z)(this,"_revisor",void 0),(0,l.Z)(this,"_revisionDate",void 0),(0,l.Z)(this,"_revisionType",void 0),this._revisor=e,this._revisionDate=n,this._revisionType=r}return(0,a.Z)(t,[{key:"revisor",get:function(){return this._revisor}},{key:"revisionDate",get:function(){return this._revisionDate}},{key:"revisionType",get:function(){return this._revisionType}}]),t}();(function(t){t[t["PRIVATE"]=0]="PRIVATE",t[t["PUBLIC"]=1]="PUBLIC"})(s||(s={}));var f=function(t){(0,i.Z)(n,t);var e=(0,c.Z)(n);function n(){var t,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return(0,o.Z)(this,n),t=e.call(this,"todo",new Date,r.CREATED),(0,l.Z)((0,u.Z)(t),"id",void 0),(0,l.Z)((0,u.Z)(t),"name",void 0),(0,l.Z)((0,u.Z)(t),"description",void 0),(0,l.Z)((0,u.Z)(t),"image",void 0),(0,l.Z)((0,u.Z)(t),"positions",void 0),(0,l.Z)((0,u.Z)(t),"owner",void 0),(0,l.Z)((0,u.Z)(t),"ownership",s.PRIVATE),t.name=a,t.description=i,t.positions=[],t}return(0,a.Z)(n)}(d)},6113:function(t,e,n){n.d(e,{Z:function(){return m}});var r=n(8534),a=n(3087),o=n(2833),u=n(2482),i=(n(5666),n(1539),n(7327),n(6699),n(2023),n(8309),n(2526),n(1817),n(2417)),c=n(3806),l=n(5744),s=n(9520),d=function(t){(0,c.Z)(n,t);var e=(0,l.Z)(n);function n(){var t;return(0,a.Z)(this,n),t=e.call(this,"Article"),(0,u.Z)((0,i.Z)(t),"articles",void 0),t.version(1).stores({articles:"++id,name,description"}),t}return(0,o.Z)(n)}(s.ZP),f=function(){function t(){(0,a.Z)(this,t),(0,u.Z)(this,"db",new d)}return(0,o.Z)(t,[{key:"getArticles",value:function(){var t=(0,r.Z)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",this.db.articles.toArray());case 1:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},{key:"getLocalArticleCount",value:function(){var t=(0,r.Z)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",this.db.articles.count());case 1:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},{key:"searchArticlesByName",value:function(){var t=(0,r.Z)(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",this.db.articles.filter((function(t){return t.name.toLowerCase().includes(e.toLowerCase())})).toArray());case 1:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}()},{key:"searchArticlesByDescription",value:function(){var t=(0,r.Z)(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",this.db.articles.filter((function(t){return t.description.toLowerCase().includes(e.toLowerCase())})).toArray());case 1:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}()},{key:"store",value:function(){var t=(0,r.Z)(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return console.log("ArticleDBService.store store "+e.length+" articles"),t.abrupt("return",this.db.articles.bulkPut(e).then((function(){return e.length})));case 2:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}()},{key:"clear",value:function(){var t=(0,r.Z)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:this.db.articles.clear();case 1:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()}]),t}(),m=new f},619:function(t,e,n){n.d(e,{Z:function(){return m}});var r=n(8534),a=n(3087),o=n(2833),u=n(2482),i=(n(1539),n(5666),n(2417)),c=n(3806),l=n(5744),s=n(9520),d=function(t){(0,c.Z)(n,t);var e=(0,l.Z)(n);function n(){var t;return(0,a.Z)(this,n),t=e.call(this,"Basket"),(0,u.Z)((0,i.Z)(t),"baskets",void 0),t.version(1).stores({baskets:"++id,name,description"}),t}return(0,o.Z)(n)}(s.ZP),f=function(){function t(){(0,a.Z)(this,t),(0,u.Z)(this,"db",new d)}return(0,o.Z)(t,[{key:"create",value:function(){var t=(0,r.Z)(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",this.db.baskets.add(e));case 1:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}()},{key:"getBaskets",value:function(){var t=(0,r.Z)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",this.db.baskets.toArray());case 1:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},{key:"getBasket",value:function(){var t=(0,r.Z)(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",this.db.baskets.get(e));case 1:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}()},{key:"update",value:function(){var t=(0,r.Z)(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.id&&this.db.baskets.update(e.id,e);case 1:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}()},{key:"delete",value:function(){var t=(0,r.Z)(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:this.db.baskets.delete(e);case 1:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}()},{key:"clear",value:function(){var t=(0,r.Z)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:this.db.baskets.clear();case 1:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},{key:"storeData",value:function(){var t=(0,r.Z)(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",this.db.baskets.bulkPut(e));case 1:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}()}]),t}(),m=new f},3471:function(t,e,n){n.d(e,{Z:function(){return f}});var r=n(8534),a=n(3087),o=n(2833),u=(n(1249),n(8309),n(2526),n(1817),n(5666),n(9669)),i=n.n(u),c=n(2482),l=(0,o.Z)((function t(e,n,r,o,u){(0,a.Z)(this,t),(0,c.Z)(this,"id",void 0),(0,c.Z)(this,"name",void 0),(0,c.Z)(this,"description",void 0),(0,c.Z)(this,"catalogName",void 0),(0,c.Z)(this,"base64Image",void 0),this.id=e,this.name=n,this.description=r,this.catalogName=u,this.base64Image=o})),s=n(5024),d=function(){function t(){(0,a.Z)(this,t)}return(0,o.Z)(t,[{key:"getAvailableCatalogs",value:function(){var t=(0,r.Z)(regeneratorRuntime.mark((function t(){var e,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e=s.Z.getServerUrl()+"/catalogs",n=i().get(e),t.abrupt("return",n.then((function(t){return t.data.catalogs})).catch((function(t){return console.error(t),[]})));case 3:case"end":return t.stop()}}),t)})));function e(){return t.apply(this,arguments)}return e}()},{key:"loadCatalog",value:function(){var t=(0,r.Z)(regeneratorRuntime.mark((function t(e){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=s.Z.getServerUrl()+"/articles",r=i().get(n,{params:{catalogName:e}}),t.abrupt("return",r.then((function(t){return t.data.articles})).then((function(t){return t.map((function(t){return new l(e+"-"+t.id,t.name,t.description,t.base64Image,e)}))})).catch((function(t){return console.error(t),[]})));case 3:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}()}]),t}(),f=new d},5024:function(t,e,n){var r,a=n(3087),o=n(2833),u=n(2482),i=(n(8309),n(5621));(function(t){t["ACCOUNT_NAME"]="account.name",t["ACCOUNT_ORGANIZATION"]="account.organization",t["ACCOUNT_SERVER_URL"]="account.serverUrl"})(r||(r={}));var c=function(){function t(){(0,a.Z)(this,t)}return(0,o.Z)(t,[{key:"localStorageSupported",get:function(){return"localStorage"in window}},{key:"localStorageInitialized",get:function(){return!!this.localStorageSupported&&null!==localStorage.getItem(r.ACCOUNT_NAME)}},{key:"saveAccount",value:function(t){this.localStorageSupported&&(localStorage.setItem(r.ACCOUNT_NAME,t.name),localStorage.setItem(r.ACCOUNT_ORGANIZATION,t.organization),localStorage.setItem(r.ACCOUNT_SERVER_URL,t.serverUrl))}},{key:"getServerUrl",value:function(){var e=localStorage.getItem(r.ACCOUNT_SERVER_URL);return null!=e?e:t.DEFAULT_SERVER_URL}},{key:"getAccount",value:function(){if(this.localStorageSupported){for(var e="",n="",a=t.DEFAULT_SERVER_URL,o=0;o<localStorage.length;o++){var u=localStorage.key(o),c=localStorage.getItem(null==u?"":u);u===r.ACCOUNT_NAME&&(e=null==c?e:c),u===r.ACCOUNT_ORGANIZATION&&(n=null==c?n:c),u===r.ACCOUNT_SERVER_URL&&(a=null==c?a:c)}return new i.m(e,n,a)}return new i.m}},{key:"clear",value:function(){this.localStorageSupported&&localStorage.clear()}}]),t}();(0,u.Z)(c,"DEFAULT_SERVER_URL","http://localhost:8081"),e["Z"]=new c},5293:function(t,e,n){var r=n(3087),a=n(2833),o=function(){function t(){(0,r.Z)(this,t)}return(0,a.Z)(t,[{key:"isOnline",get:function(){return navigator.onLine}},{key:"registerOnlineStatusUpdateListener",value:function(t){window.addEventListener("online",t),window.addEventListener("offline",t)}}]),t}();e["Z"]=new o},9905:function(t,e,n){n.d(e,{N:function(){return l},U:function(){return r}});n(8862);var r,a=n(632),o=n(619),u=n(5156),i=n(6113),c=n(3471);(function(t){t["LoadCatalog"]="loadCatalog",t["CreateBasket"]="createBasket",t["StoreBasketImage"]="storeBasketImage",t["InitBaskets"]="initBaskets"})(r||(r={}));var l={loadCatalog:function(t,e){t.commit;c.Z.loadCatalog(e.catalogName).then((function(t){i.Z.store(t).then((function(t){console.log("Fetched "+t+" articles from catalog "+e.catalogName+" on server and put to local database.")}))}))},createBasket:function(t,e){var n=t.commit;o.Z.create(e).then((function(t){e.id=t,n(u.x.AddBasket,e),console.log("Basket created: "+t)}))},storeBasketImage:function(t,e){var n=t.commit;console.log("Action.storeBasketImage: "+JSON.stringify(e)),o.Z.getBasket(e.basketId).then((function(t){t&&(t.image=e.imageDataUrl,o.Z.update(t).then((function(){n(u.x.UpdateBasket,t)})))}))},initBaskets:function(t){var e=t.commit,n=[new a.L("Supermarket XXL","Mon, 12. July 2021"),new a.L("My Favourite Shop","Tue, 22. July 2021"),new a.L("Local Fresh Discounter","Mon, 12. July 2021"),new a.L("Weekly Market","Fri, 29. July 2021"),new a.L("DIY Store","Mon, 12. July 2021")];o.Z.storeData(n).then((function(t){o.Z.getBaskets().then((function(t){e(u.x.InitBaskets,t)}))}))}}},5156:function(t,e,n){n.d(e,{P:function(){return a},x:function(){return r}});var r;n(4553),n(561);(function(t){t["AddBasket"]="addBasket",t["UpdateBasket"]="updateBasket",t["InitBaskets"]="initBaskets"})(r||(r={}));var a={addBasket:function(t,e){t.baskets.push(e)},updateBasket:function(t,e){var n=t.baskets.findIndex((function(t){return t.id===e.id}));console.log("Mutation.updateBasket: Index to update is "+e.id),-1!=n&&t.baskets.splice(n,1,e)},initBaskets:function(t,e){t.baskets=e}}},739:function(t,e,n){n.r(e),n.d(e,{default:function(){return w}});n(8309);var r=n(6252),a=n(3577),o=(0,r.Uk)("Account Details"),u=(0,r.Uk)("Clear"),i=(0,r.Uk)("Save"),c=(0,r.Uk)("Close");function l(t,e,n,l,s,d){var f=(0,r.up)("v-avatar"),m=(0,r.up)("v-card-avatar"),p=(0,r.up)("v-card-title"),v=(0,r.up)("v-card-header-text"),w=(0,r.up)("v-card-header"),g=(0,r.up)("v-text-field"),h=(0,r.up)("v-col"),k=(0,r.up)("v-row"),b=(0,r.up)("v-container"),y=(0,r.up)("v-card-text"),Z=(0,r.up)("v-divider"),_=(0,r.up)("v-btn"),W=(0,r.up)("v-card-actions"),U=(0,r.up)("v-card"),A=(0,r.up)("v-snackbar");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r.Wm)(U,null,{default:(0,r.w5)((function(){return[(0,r.Wm)(w,null,{default:(0,r.w5)((function(){return[(0,r.Wm)(m,null,{default:(0,r.w5)((function(){return[(0,r.Wm)(f,{icon:"mdi-account-edit-outline"})]})),_:1}),(0,r.Wm)(v,null,{default:(0,r.w5)((function(){return[(0,r.Wm)(p,null,{default:(0,r.w5)((function(){return[o]})),_:1})]})),_:1})]})),_:1}),(0,r.Wm)(y,null,{default:(0,r.w5)((function(){return[(0,r.Wm)(b,{fluid:""},{default:(0,r.w5)((function(){return[(0,r.Wm)(k,null,{default:(0,r.w5)((function(){return[(0,r.Wm)(h,{cols:"12",sm:"12",md:"12",xl:"6"},{default:(0,r.w5)((function(){return[(0,r.Wm)(g,{modelValue:t.state.name,"onUpdate:modelValue":e[0]||(e[0]=function(e){return t.state.name=e}),label:"Username","hide-details":"auto",rules:t.rules,style:{color:"white"}},null,8,["modelValue","rules"])]})),_:1}),(0,r.Wm)(h,{cols:"12",sm:"12",md:"12",xl:"6"},{default:(0,r.w5)((function(){return[(0,r.Wm)(g,{modelValue:t.state.organization,"onUpdate:modelValue":e[1]||(e[1]=function(e){return t.state.organization=e}),label:"Organization","hide-details":"auto",style:{color:"white"}},null,8,["modelValue"])]})),_:1}),(0,r.Wm)(h,{cols:"12"},{default:(0,r.w5)((function(){return[(0,r.Wm)(g,{modelValue:t.state.serverUrl,"onUpdate:modelValue":e[2]||(e[2]=function(e){return t.state.serverUrl=e}),label:"Server-Url","hide-details":"auto",style:{color:"white"}},null,8,["modelValue"])]})),_:1})]})),_:1})]})),_:1})]})),_:1}),(0,r.Wm)(Z),(0,r.Wm)(W,null,{default:(0,r.w5)((function(){return[(0,r.Wm)(_,{onClick:t.clear},{default:(0,r.w5)((function(){return[u]})),_:1},8,["onClick"]),(0,r.Wm)(_,{color:"primary",onClick:e[3]||(e[3]=function(e){return t.save(t.state.name,t.state.organization,t.state.serverUrl)})},{default:(0,r.w5)((function(){return[i]})),_:1})]})),_:1})]})),_:1}),(0,r.Wm)(A,{modelValue:t.state.snackbar,"onUpdate:modelValue":e[5]||(e[5]=function(e){return t.state.snackbar=e}),timeout:2e3},{action:(0,r.w5)((function(n){var a=n.attrs;return[(0,r.Wm)(_,(0,r.dG)({color:"blue",text:""},a,{onClick:e[4]||(e[4]=function(e){return t.state.snackbar=!1})}),{default:(0,r.w5)((function(){return[c]})),_:2},1040)]})),default:(0,r.w5)((function(){return[(0,r.Uk)((0,a.zw)(t.state.message)+" ",1)]})),_:1},8,["modelValue"])],64)}n(8862);var s=n(2262),d=n(5621),f=n(5024),m=(0,r.aZ)({name:"AccountView",setup:function(t,e){var n=e.emit,a=(0,s.qj)({snackbar:!1,message:"",name:"",organization:"",serverUrl:""});(0,r.bv)((function(){var t=f.Z.getAccount();console.log("AccountView.onMounted: "+JSON.stringify(t)),a.name=t.name,a.organization=t.organization,a.serverUrl=t.serverUrl}));var o=[function(t){return!!t||"Required."},function(t){return t&&t.length>=3||"Min 3 characters"}],u=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a.name,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:a.organization,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:a.serverUrl,o=new d.m(t,e,r);console.log("AccountView.save: "+JSON.stringify(o)),a.snackbar=!0,a.message="Account details saved for "+t,f.Z.saveAccount(o),console.log("AccountView.save emits 'account-saved'"),n("on-account-saved")},i=function(){a.name="",a.organization="",a.serverUrl="",a.message=""};return{state:a,rules:o,save:u,clear:i}}}),p=n(3744);const v=(0,p.Z)(m,[["render",l]]);var w=v}},e={};function n(r){var a=e[r];if(void 0!==a)return a.exports;var o=e[r]={exports:{}};return t[r](o,o.exports,n),o.exports}n.m=t,function(){var t=[];n.O=function(e,r,a,o){if(!r){var u=1/0;for(s=0;s<t.length;s++){r=t[s][0],a=t[s][1],o=t[s][2];for(var i=!0,c=0;c<r.length;c++)(!1&o||u>=o)&&Object.keys(n.O).every((function(t){return n.O[t](r[c])}))?r.splice(c--,1):(i=!1,o<u&&(u=o));if(i){t.splice(s--,1);var l=a();void 0!==l&&(e=l)}}return e}o=o||0;for(var s=t.length;s>0&&t[s-1][2]>o;s--)t[s]=t[s-1];t[s]=[r,a,o]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){n.f={},n.e=function(t){return Promise.all(Object.keys(n.f).reduce((function(e,r){return n.f[r](t,e),e}),[]))}}(),function(){n.u=function(t){return"js/"+t+"-legacy."+{41:"a76da45a",572:"dad1ea8d",814:"a1c7a36f",877:"b7f9b834"}[t]+".js"}}(),function(){n.miniCssF=function(t){}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="shoppinglistmanager:";n.l=function(r,a,o,u){if(t[r])t[r].push(a);else{var i,c;if(void 0!==o)for(var l=document.getElementsByTagName("script"),s=0;s<l.length;s++){var d=l[s];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==e+o){i=d;break}}i||(c=!0,i=document.createElement("script"),i.charset="utf-8",i.timeout=120,n.nc&&i.setAttribute("nonce",n.nc),i.setAttribute("data-webpack",e+o),i.src=r),t[r]=[a];var f=function(e,n){i.onerror=i.onload=null,clearTimeout(m);var a=t[r];if(delete t[r],i.parentNode&&i.parentNode.removeChild(i),a&&a.forEach((function(t){return t(n)})),e)return e(n)},m=setTimeout(f.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=f.bind(null,i.onerror),i.onload=f.bind(null,i.onload),c&&document.head.appendChild(i)}}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.p="/pwa-test/"}(),function(){var t={143:0};n.f.j=function(e,r){var a=n.o(t,e)?t[e]:void 0;if(0!==a)if(a)r.push(a[2]);else{var o=new Promise((function(n,r){a=t[e]=[n,r]}));r.push(a[2]=o);var u=n.p+n.u(e),i=new Error,c=function(r){if(n.o(t,e)&&(a=t[e],0!==a&&(t[e]=void 0),a)){var o=r&&("load"===r.type?"missing":r.type),u=r&&r.target&&r.target.src;i.message="Loading chunk "+e+" failed.\n("+o+": "+u+")",i.name="ChunkLoadError",i.type=o,i.request=u,a[1](i)}};n.l(u,c,"chunk-"+e,e)}},n.O.j=function(e){return 0===t[e]};var e=function(e,r){var a,o,u=r[0],i=r[1],c=r[2],l=0;if(u.some((function(e){return 0!==t[e]}))){for(a in i)n.o(i,a)&&(n.m[a]=i[a]);if(c)var s=c(n)}for(e&&e(r);l<u.length;l++)o=u[l],n.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return n.O(s)},r=self["webpackChunkshoppinglistmanager"]=self["webpackChunkshoppinglistmanager"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(8576)}));r=n.O(r)})();
//# sourceMappingURL=app-legacy.f7213eb3.js.map