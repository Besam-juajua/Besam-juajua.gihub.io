(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{36:function(t,i,n){},87:function(t,i,n){"use strict";var e=n(36);n.n(e).a},96:function(t,i,n){"use strict";n.r(i);var e={name:"Category",props:["path"],data:function(){return{imagesList:[{img:"/img/1.png",text:"Git",link:"/git"},{img:"/img/2.jpg",text:"JS/ES6",link:"/js"},{img:"/img/3.jpg",text:"Vue",link:"/vue"},{img:"/img/4.jpg",text:"React",link:"/react"},{img:"/img/5.png",text:"Vuex",link:"/vuex"},{img:"/img/6.jpg",text:"Mobx",link:"/mobx"},{img:"/img/7.jpg",text:"SSR",link:"/ssr"},{img:"/img/8.jpg",text:"http",link:"/http"},{img:"/img/9.jpg",text:"Uniapp",link:"/uniapp"},{img:"/img/10.jpg",text:"Node.js",link:"/node"}]}},beforeMount:function(){},mounted:function(){console.log("sdjfksdjfklds >> ",this.path)},destroyed:function(){},methods:{skip:function(){this.$router.push("/article/git/git基本操作")}}},s=(n(87),n(0)),g=Object(s.a)(e,(function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",{staticClass:"category-container"},[n("transition",{attrs:{name:"bounceUp"}},[n("section",{staticClass:"tag-group",on:{click:t.skip}},t._l(t.imagesList,(function(i,e){return n("div",{key:e,staticClass:"img-wrapper",on:{click:function(i){return t.clickImage(e)}}},[n("div",{staticClass:"img",style:"backgroundImage: url("+i.img+");"},[n("img",{attrs:{src:i.img,alt:"",srcset:""}})]),t._v(" "),n("div",{staticClass:"info"},[n("span",{staticClass:"size"},[t._v(t._s(i.text))])])])})),0)])],1)}),[],!1,null,"54e38131",null);i.default=g.exports}}]);