(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{35:function(t,a,e){},86:function(t,a,e){"use strict";var n=e(35);e.n(n).a},95:function(t,a,e){"use strict";e.r(a);e(56),e(72),e(78),e(85);var n={name:"Layout",data:function(){return{toMove:!0,fullPath:"",pathname:"",navPath:[{text:"首页",link:"/home"}],navMapping:{home:"首页",category:"分类",perfect:"精选",search:"搜索",interaction:"答疑互动"}}},mounted:function(){var t=this;this.toMove=!1,setTimeout((function(){t.toMove=!0}),0),this.pathname=location.pathname.replace("/blog",""),this.fullPath=location.pathname.replace("/blog","")},methods:{},watch:{$route:function(t,a){var e=t.path;this.fullPath=e,this.pathname=/^\/home\/.*/.test(e)?"/home/":/^\/category\/.*/.test(e)?"/category/":/^\/perfect\/.*/.test(e)?"/perfect/":/^\/search\/.*/.test(e)?"/search/":/^\/interaction\/.*/.test(e)?"/interaction/":/^\/besam\/.*/.test(e)?"/besam/":""},fullPath:function(t){var a=this;console.log("111111");var e=this.navMapping,n=t.split("/");n.shift(),n.pop();var s="",o=[];n.forEach((function(t,i){if(s+=s+"/",0===i){if(console.log("fff >> ",t),!e[t])return console.log("999999"),void(o[0]=a.navPath[0]);console.log("list ",n),o[0]={text:e[t],link:s+t}}else o[i]={text:t,link:s+t}})),this.navPath=o,console.log("22222")}}},s=(e(86),e(0)),o=Object(s.a)(n,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"layout"},[e("transition",{attrs:{name:"fade"}},[t.toMove?e("div",{staticClass:"top-border"}):t._e()]),t._v(" "),e("div",{staticClass:"theme-container"},[e("transition",{attrs:{name:"fade"}},[e("header",{staticClass:"theme-slider main-box"},[e("slider",{attrs:{path:t.pathname}})],1)]),t._v(" "),e("section",{staticClass:"content shadow-box"},[e("transition",{attrs:{name:"bounceUp"}},["/home/"!==t.pathname?e("bread-crumb",{staticStyle:{margin:"10px 20px 20px"},attrs:{list:t.navPath}}):t._e()],1),t._v(" "),e("transition",{attrs:{name:"bounceUp"}},[t.toMove?e("Content",{staticClass:"absolute",staticStyle:{padding:"0 36px","box-sizing":"border-box",background:"#fff"}}):t._e()],1),t._v(" "),e("transition",{attrs:{name:"bounceUp"}},["/home/"===t.pathname?e("home",{staticClass:"absolute",attrs:{path:t.fullPath}}):t._e()],1),t._v(" "),e("transition",{attrs:{name:"bounceUp"}},["/category/"===t.pathname?e("category",{staticClass:"absolute",attrs:{path:t.fullPath}}):t._e()],1),t._v(" "),e("transition",{attrs:{name:"bounceUp"}},["/perfect/"===t.pathname?e("perfect",{staticClass:"absolute",attrs:{path:t.fullPath}}):t._e()],1),t._v(" "),e("transition",{attrs:{name:"bounceUp"}},["/search/"===t.pathname?e("search",{staticClass:"absolute",attrs:{path:t.fullPath}}):t._e()],1),t._v(" "),e("transition",{attrs:{name:"bounceUp"}},["/interaction/"===t.pathname?e("interaction",{staticClass:"absolute",attrs:{path:t.fullPath}}):t._e()],1),t._v(" "),e("transition",{attrs:{name:"lightSpeed"}},["/besam/"===t.pathname?e("besam"):t._e()],1)],1)],1),t._v(" "),e("footer",{staticClass:"theme-footer"})],1)}),[],!1,null,"1fc20c51",null);a.default=o.exports}}]);