(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-set-message"],{"0143":function(t,e,i){"use strict";var a=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a(i("2edd")),s={detail:function(t,e){n.default.setGetMessage("user",{},"加载中",(function(e){t(e)}),(function(t){uni.showToast({title:t.message,icon:"none",duration:2e3})}))},edit:function(t,e,i){n.default.setPost("user",t,(function(t){e(t)}),(function(t){uni.showToast({title:t.message,icon:"none",duration:2e3})}))},notification:function(t,e,i){n.default.setPost("user/notification",t,(function(t){e(t)}),(function(t){uni.showToast({title:t.message,icon:"none",duration:2e3})}))},cancel:function(t,e,i){n.default.setPost("cancel",t,(function(t){e(t)}),(function(t){uni.showToast({title:t.message,icon:"none",duration:2e3})}))}};e.default=s},"2edd":function(t,e,i){"use strict";var a=i("4ea4");i("4d63"),i("ac1f"),i("25f0"),i("5319");i("ffe2");var n=a(i("ee1d"));function s(t,e,i,a,n,s){this.requestLoading(t,e,i,a,"",n,s)}function o(t,e,i,a){this.requestLoading(t,"get",e,"","",i,a)}function c(t,e,i,a,n){this.requestLoading(t,"get",e,"",i,a,n)}function u(t,e,i,a){this.requestLoading(t,"post",e,"","",i,a)}function l(t,e,i,a,n){this.requestLoading(t,"post",e,"",i,a,n)}function r(t,e,i,a){this.requestLoading(t,"put",e,"","",i,a)}function f(t,e,i,a,n){this.requestLoading(t,"put",e,"",i,a,n)}function d(t,e,i,a){this.requestLoading(t,"delete",e,"","",i,a)}function g(t,e,i,a,n){this.requestLoading(t,"delete",e,"",i,a,n)}function v(t,e,i,a,s,o,c){uni.showNavigationBarLoading(),""!=s&&uni.showLoading({title:s});var u=uni.getStorageSync("dsshopApplytoken");uni.request({url:n.default.BaseURL+t,data:i,header:a||{"content-type":"application/json","apply-secret":n.default.secret,openid:uni.getStorageSync("applyDsshopOpenid"),Authorization:"Bearer "+u},method:e||"get",success:function(t){uni.hideNavigationBarLoading(),""!=s&&uni.hideLoading(),200==t.statusCode?"ok"===t.data.result?o(t.data.message):c({message:t.data}):500==t.statusCode?c({message:"服务器异常，请重新尝试"}):302==t.statusCode?c({message:"登录超时，请重新登录"}):401==t.statusCode?c({message:t.data.message}):c({message:"服务器异常，请重新尝试"})},fail:function(t){uni.hideNavigationBarLoading(),""!=s&&uni.hideLoading(),t.data?c({message:t.data.message}):c({message:"服务器异常"})},complete:function(t){}})}t.exports={request:s,setGet:o,setGetMessage:c,setPost:u,setPostMessage:l,setPut:r,setPutMessage:f,setDelete:d,setDeleteMessage:g,requestLoading:v}},3379:function(t,e,i){"use strict";i.r(e);var a=i("87bf"),n=i.n(a);for(var s in a)"default"!==s&&function(t){i.d(e,t,(function(){return a[t]}))}(s);e["default"]=n.a},"3cbd":function(t,e,i){"use strict";i.r(e);var a=i("4782"),n=i("3379");for(var s in n)"default"!==s&&function(t){i.d(e,t,(function(){return n[t]}))}(s);i("f37c");var o,c=i("f0c5"),u=Object(c["a"])(n["default"],a["b"],a["c"],!1,null,"7b07fc8e",null,!1,a["a"],o);e["default"]=u.exports},4782:function(t,e,i){"use strict";var a;i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return s})),i.d(e,"a",(function(){return a}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"container"},[t.user.notification?i("v-uni-view",{staticClass:"cu-list menu"},[i("v-uni-view",{staticClass:"cu-item"},[i("v-uni-view",{staticClass:"content padding-tb-sm"},[i("v-uni-view",[t._v("邮件通知")]),i("v-uni-view",{staticClass:"text-gray text-sm"},[t._v("在邮箱上接收通知等重要消息")])],1),i("v-uni-view",{staticClass:"action"},[t.user.email?i("v-uni-switch",{staticClass:"red",class:t.user.notification.email?"checked":"",attrs:{"data-type":"email",checked:!!t.user.notification.email,color:"#e54d42"},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.setNotification.apply(void 0,arguments)}}}):i("v-uni-switch",{staticClass:"red",attrs:{"data-type":"email",disabled:!0},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.setNotification.apply(void 0,arguments)}}})],1)],1),i("v-uni-view",{staticClass:"cu-item"},[i("v-uni-view",{staticClass:"content padding-tb-sm"},[i("v-uni-view",[t._v("微信通知")]),i("v-uni-view",{staticClass:"text-gray text-sm"},[t._v("在微信上接收通知等重要消息")])],1),i("v-uni-view",{staticClass:"action"},[t.user.wechat?i("v-uni-switch",{staticClass:"red",class:t.user.notification.wechat?"checked":"",attrs:{"data-type":"wechat",checked:!!t.user.notification.wechat,color:"#e54d42"},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.setNotification.apply(void 0,arguments)}}}):i("v-uni-switch",{staticClass:"red",attrs:{"data-type":"wechat",disabled:!0},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.setNotification.apply(void 0,arguments)}}})],1)],1)],1):t._e()],1)},s=[]},"87bf":function(t,e,i){"use strict";var a=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a(i("5530")),s=a(i("0143")),o=i("2f62"),c={data:function(){return{user:{}}},onShow:function(){this.loginCheck(),this.getUser()},methods:(0,n.default)((0,n.default)({},(0,o.mapMutations)(["loginCheck"])),{},{getUser:function(){var t=this;s.default.detail((function(e){t.user=e}))},setNotification:function(t){var e=t.currentTarget.dataset.type;if("email"===e){if(!this.user.email)return this.$api.msg("请先绑定邮箱"),setTimeout((function(){uni.navigateTo({url:"/pages/userinfo/email"})}),800),!1}else if("wechat"===e&&!this.user.wechat)return this.$api.msg("请先关注微信公众号"),setTimeout((function(){uni.navigateTo({url:"/pages/public/subscribe"})}),800),!1;this.user.notification[e]=t.detail.value,s.default.notification(this.user,(function(t){}))}})};e.default=c},"92b5":function(t,e,i){var a=i("f652");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("950e2dde",a,!0,{sourceMap:!1,shadowMode:!1})},f37c:function(t,e,i){"use strict";var a=i("92b5"),n=i.n(a);n.a},f652:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 边框颜色 */\n/* 图片加载中颜色 */\n/* 行为相关颜色 */\n/* 文章场景相关 */uni-page-body[data-v-7b07fc8e]{background:#f8f8f8}.list-cell[data-v-7b07fc8e]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:baseline;-webkit-align-items:baseline;align-items:baseline;padding:%?20?% %?30?%;line-height:%?60?%;position:relative;background:#fff;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.list-cell.log-out-btn[data-v-7b07fc8e]{margin-top:%?40?%}.list-cell.log-out-btn .cell-tit[data-v-7b07fc8e]{color:#fa436a;text-align:center;margin-right:0}.list-cell.cell-hover[data-v-7b07fc8e]{background:#fafafa}.list-cell.b-b[data-v-7b07fc8e]:after{left:%?30?%}.list-cell.m-t[data-v-7b07fc8e]{margin-top:%?16?%}.list-cell .cell-more[data-v-7b07fc8e]{-webkit-align-self:baseline;align-self:baseline;font-size:%?32?%;color:#909399;margin-left:%?10?%}.list-cell .cell-tit[data-v-7b07fc8e]{-webkit-box-flex:1;-webkit-flex:1;flex:1;font-size:%?30?%;color:#303133;margin-right:%?10?%}.list-cell .cell-tip[data-v-7b07fc8e]{font-size:%?28?%;color:#909399}.list-cell uni-switch[data-v-7b07fc8e]{-webkit-transform:translateX(%?16?%) scale(.84);transform:translateX(%?16?%) scale(.84)}body.?%PAGE?%[data-v-7b07fc8e]{background:#f8f8f8}',""]),t.exports=e}}]);