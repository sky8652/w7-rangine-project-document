(function(e){function n(n){for(var o,r,i=n[0],c=n[1],d=n[2],s=0,l=[];s<i.length;s++)r=i[s],a[r]&&l.push(a[r][0]),a[r]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);f&&f(n);while(l.length)l.shift()();return u.push.apply(u,d||[]),t()}function t(){for(var e,n=0;n<u.length;n++){for(var t=u[n],o=!0,r=1;r<t.length;r++){var i=t[r];0!==a[i]&&(o=!1)}o&&(u.splice(n--,1),e=c(c.s=t[0]))}return e}var o={},r={app:0},a={app:0},u=[];function i(e){return c.p+"js/"+({about:"about"}[e]||e)+"."+{about:"785b7027"}[e]+".js"}function c(n){if(o[n])return o[n].exports;var t=o[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,c),t.l=!0,t.exports}c.e=function(e){var n=[],t={about:1};r[e]?n.push(r[e]):0!==r[e]&&t[e]&&n.push(r[e]=new Promise(function(n,t){for(var o="css/"+({about:"about"}[e]||e)+"."+{about:"032ad112"}[e]+".css",a=c.p+o,u=document.getElementsByTagName("link"),i=0;i<u.length;i++){var d=u[i],s=d.getAttribute("data-href")||d.getAttribute("href");if("stylesheet"===d.rel&&(s===o||s===a))return n()}var l=document.getElementsByTagName("style");for(i=0;i<l.length;i++){d=l[i],s=d.getAttribute("data-href");if(s===o||s===a)return n()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=n,f.onerror=function(n){var o=n&&n.target&&n.target.src||a,u=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=o,delete r[e],f.parentNode.removeChild(f),t(u)},f.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(f)}).then(function(){r[e]=0}));var o=a[e];if(0!==o)if(o)n.push(o[2]);else{var u=new Promise(function(n,t){o=a[e]=[n,t]});n.push(o[2]=u);var d,s=document.createElement("script");s.charset="utf-8",s.timeout=120,c.nc&&s.setAttribute("nonce",c.nc),s.src=i(e),d=function(n){s.onerror=s.onload=null,clearTimeout(l);var t=a[e];if(0!==t){if(t){var o=n&&("load"===n.type?"missing":n.type),r=n&&n.target&&n.target.src,u=new Error("Loading chunk "+e+" failed.\n("+o+": "+r+")");u.type=o,u.request=r,t[1](u)}a[e]=void 0}};var l=setTimeout(function(){d({type:"timeout",target:s})},12e4);s.onerror=s.onload=d,document.head.appendChild(s)}return Promise.all(n)},c.m=e,c.c=o,c.d=function(e,n,t){c.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,n){if(1&n&&(e=c(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(c.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)c.d(t,o,function(n){return e[n]}.bind(null,o));return t},c.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(n,"a",n),n},c.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},c.p="/",c.oe=function(e){throw console.error(e),e};var d=window["webpackJsonp"]=window["webpackJsonp"]||[],s=d.push.bind(d);d.push=n,d=d.slice();for(var l=0;l<d.length;l++)n(d[l]);var f=s;u.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"41cb":function(e,n,t){"use strict";var o=t("2b0e"),r=t("8c4f");o["default"].use(r["a"]),n["a"]=new r["a"]({mode:"history",routes:[{path:"/login",name:"adminLogin",component:function(){return t.e("about").then(t.bind(null,"35b0"))}},{path:"/admin-login",name:"adminLoginPage",component:function(){return t.e("about").then(t.bind(null,"2b83"))}},{path:"/bind",name:"adminBind",component:function(){return t.e("about").then(t.bind(null,"b863"))}},{path:"/admin",name:"admin",redirect:"/admin/document",component:function(){return t.e("about").then(t.bind(null,"ed3a"))},children:[{path:"document",name:"documentLayout",component:function(){return t.e("about").then(t.bind(null,"794d"))},children:[{path:"",name:"documentIndex",component:function(){return t.e("about").then(t.bind(null,"b56e"))}},{path:"chapter/:id",name:"chapter",meta:{footerClass:"float"},component:function(){return t.e("about").then(t.bind(null,"1962"))}},{path:"recycle",name:"documentRecycle",component:function(){return t.e("about").then(t.bind(null,"9095"))}},{path:"star",name:"documentStar",component:function(){return t.e("about").then(t.bind(null,"cf5f"))}},{path:"history",name:"documentHistory",component:function(){return t.e("about").then(t.bind(null,"a3b9"))}},{path:"involved",name:"documentInvolved",component:function(){return t.e("about").then(t.bind(null,"9be8"))}}]},{path:"user",name:"userIndex",component:function(){return t.e("about").then(t.bind(null,"e378"))}},{path:"user/create",name:"baseInfo",component:function(){return t.e("about").then(t.bind(null,"99a4"))}},{path:"user/:id",name:"userInfo",component:function(){return t.e("about").then(t.bind(null,"99a4"))}},{path:"user/:id",name:"baseInfoId",component:function(){return t.e("about").then(t.bind(null,"99a4"))}},{path:"setting",component:function(){return t.e("about").then(t.bind(null,"2ccb"))},children:[{path:"",name:"settingIndex",component:function(){return t.e("about").then(t.bind(null,"0dd8"))}},{path:"third-party",name:"settingThirdParty",component:function(){return t.e("about").then(t.bind(null,"091d"))}},{path:"third-party-custom",name:"settingThirdPartyCustom",component:function(){return t.e("about").then(t.bind(null,"08d8"))}},{path:"login",name:"settingLogin",component:function(){return t.e("about").then(t.bind(null,"b49c"))}},{path:"nav",name:"settingNav",component:function(){return t.e("about").then(t.bind(null,"3c4d"))}}]},{path:"account-info",name:"accountInfo",component:function(){return t.e("about").then(t.bind(null,"3310"))}}]},{path:"/chapter/:id",name:"home",redirect:"home",component:function(){return t.e("about").then(t.bind(null,"ed3a"))},children:[{path:"",name:"homeChild",component:function(){return t.e("about").then(t.bind(null,"7abe"))}}]},{path:"*",redirect:"/admin/document"}],scrollBehavior:function(e){return e.hash?{selector:e.hash}:{x:0,y:0}}})},"56d7":function(e,n,t){"use strict";t.r(n);t("cadf"),t("551c"),t("f751"),t("097d");var o=t("2b0e"),r=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},a=[],u=(t("5c0b"),t("2877")),i={},c=Object(u["a"])(i,r,a,!1,null,null,null),d=c.exports,s=t("41cb"),l=t("2f62"),f=t("bc3a"),p=t.n(f);o["default"].use(l["a"]);var m=new l["a"].Store({state:{UserInfo:{},NavMenu:{}},getters:{UserInfo:function(e){return e.UserInfo},NavMenu:function(e){return e.NavMenu}},mutations:{setUserInfo:function(e,n){e.UserInfo=n},setNavMenu:function(e,n){e.NavMenu=n}},actions:{getUserInfo:function(e){p.a.post("/common/auth/user").then(function(n){"444"==n.data.code?e.commit("setUserInfo",{has_privilege:"",username:""}):e.commit("setUserInfo",n.data.data)})},getNavMenu:function(e){p.a.post("/menu/setting").then(function(n){"444"==n.data.code?e.commit("setNavMenu",{theme:"",list:[]}):e.commit("setNavMenu",n.data.data)})}}}),h=t("a27e"),b=t("5c96"),v=t.n(b),g=t("b2d8"),y=t.n(g),w=t("4eb5"),I=t.n(w);t("0fae"),t("64e1"),t("e9ff");o["default"].use(v.a),o["default"].use(y.a),o["default"].use(I.a),o["default"].prototype.$http=h["a"],o["default"].prototype.$post=h["a"].post,o["default"].config.productionTip=!1,new o["default"]({router:s["a"],store:m,render:function(e){return e(d)}}).$mount("#app")},"5c0b":function(e,n,t){"use strict";var o=t("5e27"),r=t.n(o);r.a},"5e27":function(e,n,t){},a27e:function(e,n,t){"use strict";var o=t("7618"),r=t("bc3a"),a=t.n(r),u=t("41cb"),i=t("5c96"),c=t("4328"),d=t.n(c),s=a.a.create({withCredentials:!0});s.interceptors.request.use(function(e){return e.transformRequest=[function(e){return"object"!==Object(o["a"])(e)||e instanceof FormData?e:d.a.stringify(e)}],e}),s.interceptors.response.use(function(e){return e.data.code>=200&&e.data.code<300?e.data:("444"==e.data.code&&u["a"].push({name:"adminLoginPage"}),i["Message"].error(e.data.message),Promise.reject(e.data))},function(e){return Promise.reject(e.response)}),n["a"]=s},e9ff:function(e,n,t){}});
//# sourceMappingURL=app.c16496b3.js.map