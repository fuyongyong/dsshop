(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user/share"],{"007e":function(t,e,n){},"0b6f":function(t,e,n){"use strict";n.r(e);var r=n("dcc0"),i=n("0d9b");for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);n("4f65");var u,o=n("f0c5"),c=Object(o["a"])(i["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],u);e["default"]=c.exports},"0d9b":function(t,e,n){"use strict";n.r(e);var r=n("2555"),i=n.n(r);for(var a in r)"default"!==a&&function(t){n.d(e,t,(function(){return r[t]}))}(a);e["default"]=i.a},2555:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=o(n("a34a")),i=o(n("0495")),a=o(n("0143")),u=n("8e63");function o(t){return t&&t.__esModule?t:{default:t}}function c(t,e,n,r,i,a,u){try{var o=t[a](u),c=o.value}catch(s){return void n(s)}o.done?e(c):Promise.resolve(c).then(r,i)}function s(t){return function(){var e=this,n=arguments;return new Promise((function(r,i){var a=t.apply(e,n);function u(t){c(a,r,i,u,o,"next",t)}function o(t){c(a,r,i,u,o,"throw",t)}u(void 0)}))}}var f={data:function(){return{poster:{},windowHeight:"600",screenHeight:"500",qrcode:"",canvasImage:{},qrShow:!1,canvasId:"default_PosterCanvasId",uuid:""}},onLoad:function(){var e=this;t.getSystemInfo({success:function(t){e.windowHeight=t.windowHeight,e.screenHeight=t.screenHeight}}),this.getUser()},methods:{shareFc:function(){var t=this;return s(r.default.mark((function e(){var n;return r.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,u.getSharePoster)({_this:t,type:"testShareType",backgroundImage:"/static/temp/ad-splash.jpg",posterCanvasId:t.canvasId,delayTimeScale:20,drawArray:function(e){var n=e.bgObj,r=(e.type,e.bgScale,n.width,n.width,n.height,t.configURL.DomainName+"/h5/#/pages/public/register?uuid="+t.uuid);return new Promise((function(t,e){t([{type:"roundFillRect",backgroundColor:"#ffffff",dx:.05*n.width-10,dy:n.height-.25*n.width-10,width:.2*n.width+20,height:.2*n.width+20},{type:"qrcode",text:r,size:.2*n.width,dx:.05*n.width,dy:n.height-.25*n.width,background:"#ffffff"}])}))},setCanvasWH:function(e){var n=e.bgObj;e.type,e.bgScale;t.poster=n}});case 3:n=e.sent,t.poster.finalPath=n.poster.tempFilePath,t.qrShow=!0,e.next=12;break;case 8:e.prev=8,e.t0=e["catch"](0),i.default.hideLoading(),i.default.showToast(JSON.stringify(e.t0));case 12:case"end":return e.stop()}}),e,null,[[0,8]])})))()},getUser:function(){var t=this;a.default.detail((function(e){t.uuid=e.uuid}))},hideQr:function(){this.qrShow=!1},previewImage:function(){t.previewImage({urls:[this.poster.finalPath],longPressActions:{itemList:["发送给朋友","保存图片"],success:function(t){console.log("1111")},fail:function(t){console.log("err",t)}}})},toJSON:function(){}}};e.default=f}).call(this,n("543d")["default"])},"4f65":function(t,e,n){"use strict";var r=n("007e"),i=n.n(r);i.a},ce5c:function(t,e,n){"use strict";(function(t){n("ebeb");r(n("66fd"));var e=r(n("0b6f"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},dcc0:function(t,e,n){"use strict";var r;n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return r}));var i=function(){var t=this,e=t.$createElement;t._self._c},a=[]}},[["ce5c","common/runtime","common/vendor"]]]);