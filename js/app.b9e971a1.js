(function(e){function t(t){for(var a,s,o=t[0],i=t[1],u=t[2],l=0,f=[];l<o.length;l++)s=o[l],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&f.push(r[s][0]),r[s]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a]);d&&d(t);while(f.length)f.shift()();return c.push.apply(c,u||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],a=!0,s=1;s<n.length;s++){var o=n[s];0!==r[o]&&(a=!1)}a&&(c.splice(t--,1),e=i(i.s=n[0]))}return e}var a={},s={app:0},r={app:0},c=[];function o(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-249f4dfa":"e6012216","chunk-496513fa":"ea117753","chunk-28e1654d":"ccccf612","chunk-a0a3d008":"950b2e0d","chunk-5f457beb":"722cf5a1","chunk-9d0f77be":"2554af87"}[e]+".js"}function i(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-249f4dfa":1,"chunk-28e1654d":1,"chunk-a0a3d008":1,"chunk-5f457beb":1};s[e]?t.push(s[e]):0!==s[e]&&n[e]&&t.push(s[e]=new Promise((function(t,n){for(var a="css/"+({}[e]||e)+"."+{"chunk-249f4dfa":"df0c0e9e","chunk-496513fa":"31d6cfe0","chunk-28e1654d":"807b22d1","chunk-a0a3d008":"807b22d1","chunk-5f457beb":"85e6c076","chunk-9d0f77be":"31d6cfe0"}[e]+".css",r=i.p+a,c=document.getElementsByTagName("link"),o=0;o<c.length;o++){var u=c[o],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===a||l===r))return t()}var f=document.getElementsByTagName("style");for(o=0;o<f.length;o++){u=f[o],l=u.getAttribute("data-href");if(l===a||l===r)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var a=t&&t.target&&t.target.src||r,c=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=a,delete s[e],d.parentNode.removeChild(d),n(c)},d.href=r;var b=document.getElementsByTagName("head")[0];b.appendChild(d)})).then((function(){s[e]=0})));var a=r[e];if(0!==a)if(a)t.push(a[2]);else{var c=new Promise((function(t,n){a=r[e]=[t,n]}));t.push(a[2]=c);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=o(e);var f=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(d);var n=r[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),s=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+a+": "+s+")",f.name="ChunkLoadError",f.type=a,f.request=s,n[1](f)}r[e]=void 0}};var d=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},i.m=e,i.c=a,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(n,a,function(t){return e[t]}.bind(null,a));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var f=0;f<u.length;f++)t(u[f]);var d=l;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"06aa":function(e,t,n){"use strict";n("c77c")},1274:function(e,t,n){"use strict";n("7491")},"3c24":function(e,t,n){"use strict";n("e4dd")},4678:function(e,t,n){var a={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function s(e){var t=r(e);return n(t)}function r(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}s.keys=function(){return Object.keys(a)},s.resolve=r,e.exports=s,s.id="4678"},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("AdaptiveBlock"),n("Loading"),n("Header"),n("LoginInfo"),n("transition",{attrs:{name:"router-fade",mode:"out-in"}},[n("router-view")],1)],1)},r=[],c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",[n("div",{staticClass:"header"},[n("h1",{staticClass:"header__title"},[e._v("Todo List App")]),n("ul",{staticClass:"nav"},[n("li",{staticClass:"nav__item"},[n("router-link",{staticClass:"nav__link",attrs:{to:"/"}},[e._v("Главная страница")])],1),e.userData?n("li",{staticClass:"nav__item"},[n("router-link",{staticClass:"nav__link nav__link_tasks",attrs:{to:"/tasks"}},[e._v("Список задач / личный кабинет")])],1):e._e(),e.userData?n("li",{staticClass:"nav__item"},[n("a",{staticClass:"nav__link nav__link_button",on:{click:e.signOut}},[e._v("Выйти из аккаунта ")])]):n("li",{staticClass:"nav__item"},[n("router-link",{staticClass:"nav__link nav__link_button",attrs:{to:"/login"}},[e._v("Войти в аккаунт")])],1)])])])},o=[],i={methods:{signOut:function(){this.$store.dispatch("signOut"),this.$router.push("/"),this.$toast("Вы вышли из аккаунта")}},computed:{userData:function(){return this.$store.state.auth.user}}},u=i,l=(n("94ab"),n("2877")),f=Object(l["a"])(u,c,o,!1,null,null,null),d=f.exports,b=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("transition",{attrs:{name:"fade"}},[e.loadingStatus?a("div",{staticClass:"loading"},[a("img",{staticClass:"loading__img",attrs:{src:n("ff89")}})]):e._e()])},m=[],h={computed:{loadingStatus:function(){return this.$store.state.common.loading}}},j=h,p=(n("1274"),Object(l["a"])(j,b,m,!1,null,null,null)),v=p.exports,g=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.userData?n("div",{staticClass:"login-info"},[n("i",{staticClass:"fas fa-info-circle"}),n("p",[e._v("Вы вошли с аккаунта "+e._s(e.userData.email))])]):e._e()},k=[],_={computed:{userData:function(){return this.$store.state.auth.user}}},w=_,y=(n("06aa"),Object(l["a"])(w,g,k,!1,null,null,null)),O=y.exports,x=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},T=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"adaptive-block"},[n("h1",{staticClass:"adaptive-block__title"},[e._v("Сайт недоступен на данном разрешении экрана")])])}],C={},z=C,E=(n("3c24"),Object(l["a"])(z,x,T,!1,null,null,null)),D=E.exports,L={components:{Header:d,Loading:v,LoginInfo:O,AdaptiveBlock:D}},R=L,S=(n("cf25"),Object(l["a"])(R,s,r,!1,null,null,null)),A=S.exports,P=(n("d3b7"),n("3ca3"),n("ddb0"),n("b0c0"),n("8c4f")),U=n("260b"),$=n("2f62"),I=n("1da1"),B=(n("96cf"),{state:{user:null},mutations:{setUserData:function(e,t){e.user=t},clearUserData:function(e){e.user=null}},actions:{userLogin:function(e,t){return Object(I["a"])(regeneratorRuntime.mark((function n(){var a,s,r,c;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=e.commit,s=t.email,r=t.password,n.prev=2,n.next=5,U["a"].auth().signInWithEmailAndPassword(s,r);case 5:c=n.sent,a("setUserData",c.user),n.next=12;break;case 9:throw n.prev=9,n.t0=n["catch"](2),new Error(n.t0);case 12:case"end":return n.stop()}}),n,null,[[2,9]])})))()},userRegister:function(e,t){return Object(I["a"])(regeneratorRuntime.mark((function n(){var a,s,r,c;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=e.commit,s=t.email,r=t.password,n.prev=2,n.next=5,U["a"].auth().createUserWithEmailAndPassword(s,r);case 5:c=n.sent,a("setUserData",c.user),n.next=12;break;case 9:throw n.prev=9,n.t0=n["catch"](2),new Error(n.t0);case 12:case"end":return n.stop()}}),n,null,[[2,9]])})))()},signOut:function(e){return Object(I["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,t.next=3,U["a"].auth().signOut();case 3:n("clearUserData");case 4:case"end":return t.stop()}}),t)})))()}},getters:{getUserData:function(e){return e.user}}}),M={state:{loading:!0},mutations:{setLoadingStatus:function(e,t){e.loading=t}}},N=n("5530"),H=(n("7db0"),n("c740"),n("a434"),n("d81d"),n("b64b"),n("4de4"),n("07ac"),{state:{list:[]},mutations:{pushTask:function(e,t){e.list.push(t)},setTasks:function(e,t){e.list=t},completeTask:function(e,t){var n=e.list.find((function(e){var n=e.key;return n==t}));n&&a["a"].set(n,"completed",!0)},deleteTask:function(e,t){var n=e.list.findIndex((function(e){var n=e.key;return n==t}));e.list.splice(n,1)}},actions:{completeTask:function(e,t){return Object(I["a"])(regeneratorRuntime.mark((function n(){var a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=e.commit,n.prev=1,n.next=4,U["a"].database().ref("tasks").child(t).update({completed:!0});case 4:a("completeTask",t),n.next=10;break;case 7:throw n.prev=7,n.t0=n["catch"](1),new Error(n.t0);case 10:case"end":return n.stop()}}),n,null,[[1,7]])})))()},deleteTask:function(e,t){return Object(I["a"])(regeneratorRuntime.mark((function n(){var a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=e.commit,n.prev=1,n.next=4,U["a"].database().ref("tasks").child(t).remove();case 4:a("deleteTask",t),n.next=10;break;case 7:throw n.prev=7,n.t0=n["catch"](1),new Error(n.t0);case 10:case"end":return n.stop()}}),n,null,[[1,7]])})))()},createTask:function(e,t){return Object(I["a"])(regeneratorRuntime.mark((function n(){var a,s,r,c;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=e.getters,s=e.commit,r=Object(N["a"])(Object(N["a"])({},t),{},{time:(new Date).getTime(),descVisible:!1,user:a.getUserData.uid}),n.prev=2,n.next=5,U["a"].database().ref("tasks").push(r);case 5:c=n.sent,s("pushTask",Object(N["a"])(Object(N["a"])({},r),{},{key:c.key})),n.next=12;break;case 9:throw n.prev=9,n.t0=n["catch"](2),new Error(n.t0);case 12:case"end":return n.stop()}}),n,null,[[2,9]])})))()},loadTasks:function(e){return Object(I["a"])(regeneratorRuntime.mark((function t(){var n,a,s,r,c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.getters,a=e.commit,t.prev=1,t.next=4,U["a"].database().ref("tasks").once("value");case 4:s=t.sent,r=Object(N["a"])({},s.val()),Object.keys(s.val()).map((function(e){return r[e].key=e})),c=Object.values(r).filter((function(e){var t=e.user;return t==n.getUserData.uid})),a("setTasks",c),t.next=14;break;case 11:throw t.prev=11,t.t0=t["catch"](1),new Error(t.t0);case 14:case"end":return t.stop()}}),t,null,[[1,11]])})))()}}});a["a"].use($["a"]);var q=new $["a"].Store({modules:{auth:B,common:M,tasks:H}});a["a"].use(P["a"]);var F=[{path:"*",component:function(){return n.e("chunk-249f4dfa").then(n.bind(null,"9703"))}},{name:"Home",path:"/",component:function(){return n.e("chunk-9d0f77be").then(n.bind(null,"bb51"))}},{name:"Login",path:"/login",component:function(){return Promise.all([n.e("chunk-496513fa"),n.e("chunk-28e1654d")]).then(n.bind(null,"a55b"))}},{name:"Register",path:"/register",component:function(){return Promise.all([n.e("chunk-496513fa"),n.e("chunk-a0a3d008")]).then(n.bind(null,"73cf"))}},{name:"Tasks",path:"/tasks",meta:{needLogin:!0},component:function(){return n.e("chunk-5f457beb").then(n.bind(null,"eb1f"))}}],J=new P["a"]({mode:"hash",base:"",routes:F});J.beforeEach((function(e,t,n){var a=U["a"].auth().currentUser;["Login","Register"].some((function(t){return e.name==t}))&&a?n("/"):e.meta.needLogin&&!a?n("/login"):n()}));var V=J,G=(n("becf"),n("957c"),n("6c42")),K=(n("da96"),n("1dce")),W=n.n(K);n("ea7b"),n("66ce");a["a"].config.productionTip=!1;var Y={transition:"Vue-Toastification__fade",position:"bottom-right",timeout:4e3,closeOnClick:!0,pauseOnFocusLoss:!0,pauseOnHover:!0,draggable:!0,draggablePercent:.6,showCloseButtonOnHover:!1,hideProgressBar:!1,closeButton:"button",icon:!0,rtl:!1};a["a"].use(G["a"],Y),a["a"].use(W.a);var X={apiKey:"AIzaSyAGYpebLvMaau8Vl1MU9j9hAGMt_FRYJXw",authDomain:"todo-list-proect.firebaseapp.com",projectId:"todo-list-proect",storageBucket:"todo-list-proect.appspot.com",messagingSenderId:"673073364567",appId:"1:673073364567:web:fd8948119be4f343636d12",measurementId:"G-WTLKJ6VT4Y"};U["a"].initializeApp(X),U["a"].auth().onAuthStateChanged((function(e){e&&(q.commit("setUserData",e),q.dispatch("loadTasks")),new a["a"]({router:V,store:q,render:function(e){return e(A)},mounted:function(){setTimeout((function(){return q.commit("setLoadingStatus",!1)}),500)}}).$mount("#app")}))},7491:function(e,t,n){},"94ab":function(e,t,n){"use strict";n("c4d8")},c4d8:function(e,t,n){},c77c:function(e,t,n){},cf25:function(e,t,n){"use strict";n("fea6")},e4dd:function(e,t,n){},fea6:function(e,t,n){},ff89:function(e,t,n){e.exports=n.p+"img/loading_blue.0b411a1f.svg"}});
//# sourceMappingURL=app.b9e971a1.js.map