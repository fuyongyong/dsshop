(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/set/set"],{"0f8e":function(t,e,n){"use strict";(function(t){n("ebeb");o(n("66fd"));var e=o(n("882b"));function o(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},"882b":function(t,e,n){"use strict";n.r(e);var o=n("effd"),r=n("9aca");for(var c in r)"default"!==c&&function(t){n.d(e,t,(function(){return r[t]}))}(c);n("ba9a");var i,a=n("f0c5"),u=Object(a["a"])(r["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],i);e["default"]=u.exports},"9aca":function(t,e,n){"use strict";n.r(e);var o=n("e82a"),r=n.n(o);for(var c in o)"default"!==c&&function(t){n.d(e,t,(function(){return o[t]}))}(c);e["default"]=r.a},ba9a:function(t,e,n){"use strict";var o=n("c5cc"),r=n.n(o);r.a},c5cc:function(t,e,n){},e82a:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=c(n("0143")),r=n("2f62");function c(t){return t&&t.__esModule?t:{default:t}}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){u(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var f={data:function(){return{notification:!1}},onShow:function(){this.loginCheck()},methods:a(a({},(0,r.mapMutations)(["logout","loginCheck"])),{},{testVersion:function(){this.$api.msg("已经最新了")},clearCache:function(){t.removeStorageSync("dsshopOrderList"),t.removeStorageSync("dsshopCartList"),this.$api.msg("缓存清除成功")},navTo:function(e){t.navigateTo({url:e})},switchNotification:function(t){this.notification=t.detail.value},toLogout:function(){var e=this;t.showModal({content:"确定要退出登录么",success:function(n){n.confirm&&o.default.logout({},(function(n){e.logout(),setTimeout((function(){t.navigateBack()}),200)}))}})},switchChange:function(t){var e=t.detail.value?"打开":"关闭";this.$api.msg("".concat(e,"消息推送"))}})};e.default=f}).call(this,n("543d")["default"])},effd:function(t,e,n){"use strict";var o;n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return c})),n.d(e,"a",(function(){return o}));var r=function(){var t=this,e=t.$createElement;t._self._c},c=[]}},[["0f8e","common/runtime","common/vendor"]]]);