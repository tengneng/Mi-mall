(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-91a81460"],{"064a":function(t,n,e){"use strict";e.r(n);var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"ali-pay"},[t.loading?e("loading"):t._e(),e("div",{staticClass:"form",domProps:{innerHTML:t._s(t.content)}})],1)},i=[],o=e("3a5e"),s={name:"alipay",components:{Loading:o["a"]},data:function(){return{orderId:this.$route.query.orderId,content:"",loading:!0}},mounted:function(){this.paySubmit()},methods:{paySubmit:function(){var t=this;this.axios.post("/pay",{orderId:this.orderId,orderName:"Vue高仿小米商城",amount:.01,payType:1}).then((function(n){t.content=n.content,setTimeout((function(){document.forms[0].submit()}),100)}))}}},r=s,c=e("2877"),u=Object(c["a"])(r,a,i,!1,null,null,null);n["default"]=u.exports},"3a5e":function(t,n,e){"use strict";var a=function(){var t=this,n=t.$createElement;t._self._c;return t._m(0)},i=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"loading"},[e("img",{attrs:{src:"/imgs/loading-svg/loading-bars.svg"}})])}],o={name:"loading"},s=o,r=(e("cb13"),e("2877")),c=Object(r["a"])(s,a,i,!1,null,null,null);n["a"]=c.exports},cb13:function(t,n,e){"use strict";var a=e("f314"),i=e.n(a);i.a},f314:function(t,n,e){}}]);
//# sourceMappingURL=chunk-91a81460.ef72a745.js.map