(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-set-set"],{"0125":function(t,e,n){"use strict";var i=n("7d55"),a=n.n(i);a.a},"0cea":function(t,e,n){"use strict";var i=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i(n("2edd")),s={login:function(t,e,n){a.default.setPostMessage("login",t,"登录中",(function(t){e(t)}),(function(t){uni.showToast({title:t.message,icon:"none",duration:2e3})}))},register:function(t,e,n){a.default.setPostMessage("register",t,"处理中",(function(t){e(t)}),(function(t){uni.showToast({title:t.message,icon:"none",duration:2e3})}))},verifyEmail:function(t,e,n){a.default.setPostMessage("verifyEmail",t,"处理中",(function(t){e(t)}),(function(t){uni.showToast({title:t.message,icon:"none",duration:2e3})}))},findPassword:function(t,e,n){a.default.setPostMessage("findPassword",t,"处理中",(function(t){e(t)}),(function(t){uni.showToast({title:t.message,icon:"none",duration:2e3})}))},authorization:function(t,e,n){a.default.setPost("authorization",t,(function(t){e(t)}),(function(t){uni.showToast({title:t.message,icon:"none",duration:2e3})}))},cellphoneCode:function(t,e,n){a.default.setPost("cellphoneCode",t,(function(t){e(t)}),(function(t){uni.showToast({title:t.message,icon:"none",duration:2e3})}))},emailCode:function(t,e,n){a.default.setPostMessage("emailCode",t,"处理中",(function(t){e(t)}),(function(t){uni.showToast({title:t.message,icon:"none",duration:2e3})}))},logout:function(t,e,n){a.default.setPostMessage("logout",{},"退出中",(function(t){e(t)}),(function(t){uni.showToast({title:t.message,icon:"none",duration:2e3})}))}};e.default=s},"171c":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 边框颜色 */\n/* 图片加载中颜色 */\n/* 行为相关颜色 */\n/* 文章场景相关 */uni-page-body[data-v-7fa5b7ce]{background:#f8f8f8}.list-cell[data-v-7fa5b7ce]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:baseline;-webkit-align-items:baseline;align-items:baseline;padding:%?20?% %?30?%;line-height:%?60?%;position:relative;background:#fff;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.list-cell.log-out-btn[data-v-7fa5b7ce]{margin-top:%?40?%}.list-cell.log-out-btn .cell-tit[data-v-7fa5b7ce]{color:#fa436a;text-align:center;margin-right:0}.list-cell.cell-hover[data-v-7fa5b7ce]{background:#fafafa}.list-cell.b-b[data-v-7fa5b7ce]:after{left:%?30?%}.list-cell.m-t[data-v-7fa5b7ce]{margin-top:%?16?%}.list-cell .cell-more[data-v-7fa5b7ce]{-webkit-align-self:baseline;align-self:baseline;font-size:%?32?%;color:#909399;margin-left:%?10?%}.list-cell .cell-tit[data-v-7fa5b7ce]{-webkit-box-flex:1;-webkit-flex:1;flex:1;font-size:%?30?%;color:#303133;margin-right:%?10?%}.list-cell .cell-tip[data-v-7fa5b7ce]{font-size:%?28?%;color:#909399}.list-cell uni-switch[data-v-7fa5b7ce]{-webkit-transform:translateX(%?16?%) scale(.84);transform:translateX(%?16?%) scale(.84)}body.?%PAGE?%[data-v-7fa5b7ce]{background:#f8f8f8}',""]),t.exports=e},"2edd":function(t,e,n){"use strict";var i=n("4ea4");n("4d63"),n("ac1f"),n("25f0"),n("5319");n("ffe2");var a=i(n("ee1d"));function s(t,e,n,i,a,s){this.requestLoading(t,e,n,i,"",a,s)}function o(t,e,n,i){this.requestLoading(t,"get",e,"","",n,i)}function c(t,e,n,i,a){this.requestLoading(t,"get",e,"",n,i,a)}function l(t,e,n,i){this.requestLoading(t,"post",e,"","",n,i)}function u(t,e,n,i,a){this.requestLoading(t,"post",e,"",n,i,a)}function r(t,e,n,i){this.requestLoading(t,"put",e,"","",n,i)}function f(t,e,n,i,a){this.requestLoading(t,"put",e,"",n,i,a)}function d(t,e,n,i){this.requestLoading(t,"delete",e,"","",n,i)}function v(t,e,n,i,a){this.requestLoading(t,"delete",e,"",n,i,a)}function g(t,e,n,i,s,o,c){uni.showNavigationBarLoading(),""!=s&&uni.showLoading({title:s});var l=uni.getStorageSync("dsshopApplytoken");uni.request({url:a.default.BaseURL+t,data:n,header:i||{"content-type":"application/json","apply-secret":a.default.secret,openid:uni.getStorageSync("applyDsshopOpenid"),Authorization:"Bearer "+l},method:e||"get",success:function(t){uni.hideNavigationBarLoading(),""!=s&&uni.hideLoading(),200==t.statusCode?"ok"===t.data.result?o(t.data.message):c({message:t.data}):500==t.statusCode?c({message:"服务器异常，请重新尝试"}):302==t.statusCode?c({message:"登录超时，请重新登录"}):401==t.statusCode?c({message:t.data.message}):c({message:"服务器异常，请重新尝试"})},fail:function(t){uni.hideNavigationBarLoading(),""!=s&&uni.hideLoading(),t.data?c({message:t.data.message}):c({message:"服务器异常"})},complete:function(t){}})}t.exports={request:s,setGet:o,setGetMessage:c,setPost:l,setPostMessage:u,setPut:r,setPutMessage:f,setDelete:d,setDeleteMessage:v,requestLoading:g}},"7d55":function(t,e,n){var i=n("171c");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("b359d56e",i,!0,{sourceMap:!1,shadowMode:!1})},"882b":function(t,e,n){"use strict";n.r(e);var i=n("c958"),a=n("9aca");for(var s in a)"default"!==s&&function(t){n.d(e,t,(function(){return a[t]}))}(s);n("0125");var o,c=n("f0c5"),l=Object(c["a"])(a["default"],i["b"],i["c"],!1,null,"7fa5b7ce",null,!1,i["a"],o);e["default"]=l.exports},"9aca":function(t,e,n){"use strict";n.r(e);var i=n("bc7d"),a=n.n(i);for(var s in i)"default"!==s&&function(t){n.d(e,t,(function(){return i[t]}))}(s);e["default"]=a.a},bc7d:function(t,e,n){"use strict";var i=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i(n("5530")),s=i(n("0cea")),o=n("2f62"),c={data:function(){return{notification:!1}},onShow:function(){this.loginCheck()},methods:(0,a.default)((0,a.default)({},(0,o.mapMutations)(["logout","loginCheck"])),{},{testVersion:function(){this.$api.msg("已经最新了")},clearCache:function(){uni.removeStorageSync("dsshopOrderList"),uni.removeStorageSync("dsshopCartList"),this.$api.msg("缓存清除成功")},navTo:function(t){uni.navigateTo({url:t})},switchNotification:function(t){this.notification=t.detail.value},toLogout:function(){var t=this;uni.showModal({content:"确定要退出登录么",success:function(e){e.confirm&&s.default.logout({},(function(e){t.logout(),setTimeout((function(){uni.navigateBack()}),200)}))}})},switchChange:function(t){var e=t.detail.value?"打开":"关闭";this.$api.msg("".concat(e,"消息推送"))}})};e.default=c},c958:function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return s})),n.d(e,"a",(function(){return i}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"container"},[n("v-uni-view",{staticClass:"list-cell b-b m-t",attrs:{"hover-class":"cell-hover","hover-stay-time":50},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.navTo("/pages/userinfo/userinfo")}}},[n("v-uni-text",{staticClass:"cell-tit"},[t._v("个人资料")]),n("v-uni-text",{staticClass:"cell-more yticon icon-you"})],1),n("v-uni-view",{staticClass:"list-cell b-b",attrs:{"hover-class":"cell-hover","hover-stay-time":50},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.navTo("/pages/set/message")}}},[n("v-uni-text",{staticClass:"cell-tit"},[t._v("通知与提醒")]),n("v-uni-text",{staticClass:"cell-more yticon icon-you"})],1),n("v-uni-view",{staticClass:"list-cell b-b",attrs:{"hover-class":"cell-hover","hover-stay-time":50},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.clearCache()}}},[n("v-uni-text",{staticClass:"cell-tit"},[t._v("清除缓存")]),n("v-uni-text",{staticClass:"cell-more yticon icon-you"})],1),n("v-uni-view",{staticClass:"list-cell b-b",attrs:{"hover-class":"cell-hover","hover-stay-time":50},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.navTo("/pages/set/about")}}},[n("v-uni-text",{staticClass:"cell-tit"},[t._v("关于我们")]),n("v-uni-text",{staticClass:"cell-more yticon icon-you"})],1),n("v-uni-view",{staticClass:"list-cell",attrs:{"hover-class":"cell-hover","hover-stay-time":50},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.navTo("/pages/set/cancel")}}},[n("v-uni-text",{staticClass:"cell-tit"},[t._v("注销服务")]),n("v-uni-text",{staticClass:"cell-more yticon icon-you"})],1),n("v-uni-view",{staticClass:"list-cell log-out-btn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toLogout.apply(void 0,arguments)}}},[n("v-uni-text",{staticClass:"cell-tit"},[t._v("退出登录")])],1)],1)},s=[]}}]);