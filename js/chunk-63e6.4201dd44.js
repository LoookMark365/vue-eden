(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-63e6"],{4750:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sidebar-wrap"},[t._l(t.routes,function(e){return!e.hidden&&e.children?[!t.onlyOneShowingChildren(e.children)||e.children[0].children||e.alwaysShow?n("el-submenu",{key:e.name,staticClass:"sidebar-wrap__menu",attrs:{index:e.name||e.path}},[n("template",{slot:"title"},[e.meta&&e.meta.icon?n("icon",{attrs:{name:e.meta.icon,scale:2}}):t._e(),e.meta&&e.meta.title?n("span",{attrs:{slot:"title"},slot:"title"},[t._v("\n          "+t._s("full"===t.sliderState?t.getTitle(e.meta.title):"")+"\n        ")]):t._e()],1),t._l(e.children,function(i){return i.hidden?t._e():[i.children&&i.children.length>0?n("sidebar-item",{key:i.path,attrs:{routes:[i]}}):n("router-link",{key:i.name,attrs:{to:e.path+"/"+i.path}},[n("el-menu-item",{attrs:{index:e.path+"/"+i.path}},[i.meta&&i.meta.icon?n("icon",{attrs:{name:i.meta.icon,scale:2}}):t._e(),i.meta&&i.meta.title?n("span",{attrs:{slot:"title"},slot:"title"},[t._v("\n              "+t._s(t.getTitle(i.meta.title))+"\n            ")]):t._e()],1)],1)]})],2):n("router-link",{key:e.children[0].name,attrs:{to:e.path+"/"+e.children[0].path}},[n("el-menu-item",{attrs:{index:e.path+"/"+e.children[0].path}},[e.children[0].meta&&e.children[0].meta.icon?n("icon",{attrs:{name:e.children[0].meta.icon,scale:2}}):t._e(),e.children[0].meta&&e.children[0].meta.title?n("span",{attrs:{slot:"title"},slot:"title"},[t._v("\n          "+t._s(t.getTitle(e.children[0].meta.title))+"\n        ")]):t._e()],1)],1)]:t._e()})],2)},a=[],r=(n("cadf"),n("551c"),n("097d"),{name:"SidebarItem",props:{routes:{type:Array}},computed:{sliderState:function(){return this.$store.getters.sidebar.sliderState}},methods:{onlyOneShowingChildren:function(t){return 1===t.filter(function(t){return!t.hidden}).length},getTitle:function(t){return this.$te("route.".concat(t))?this.$t("route.".concat(t)):t}}}),l=r,s=(n("5904"),n("2877")),c=Object(s["a"])(l,i,a,!1,null,"bad8cc70",null);c.options.__file="SidebarItem.vue";e["default"]=c.exports},5904:function(t,e,n){"use strict";var i=n("d48b"),a=n.n(i);a.a},d48b:function(t,e,n){}}]);
//# sourceMappingURL=chunk-63e6.4201dd44.js.map