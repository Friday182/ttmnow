(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["121c2c6d"],{"41cb":function(t,s,e){},8119:function(t,s,e){"use strict";e.r(s);var i=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("q-page",{staticClass:"flex-center"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col"}),e("div",{staticClass:"col-9 q-mt-sm"},[e("q-linear-progress",{staticClass:"q-mt-sm",staticStyle:{height:"20px"},attrs:{stripe:"",rounded:"",value:t.progressPosition,color:"warning"}}),e("q-card",{staticClass:"my-card text-white shadow-12 q-pt-sm q-px-xl",staticStyle:{background:"radial-gradient(circle, #35a2ff 0%, #4e4e4e 100%)"},attrs:{hight:400}},[e("q-card-section",[e("div",{staticClass:"text-h6"},[t._v("\n            Question - "+t._s(t.queId)+"\n          ")])]),e("q-card-section",[e("div",{staticClass:"text-h7"},[t._v("\n            This is the question.\n          ")])]),e("q-separator",{attrs:{white:""}}),e("q-card-section",[t._v("\n          "+t._s(t.testMessage)+"\n          "+t._s(t.$route.params.id)+"\n        ")]),e("q-card-section",[t._v("\n          "+t._s(t.testM)+"\n        ")])],1)],1),e("div",{staticClass:"col-2 q-pa-md q-centre"},[e("q-btn",{on:{click:t.test}},[t._v("\n        Finish\n      ")])],1)])])},n=[],a={data:function(){return{testMessage:"this is a demo.",testM:"",queId:1,queList:[],progressPosition:.5}},methods:{displayDemo:function(){var t=this;this.$api.runDemo().then(function(s){s.error||(t.queList=s.data,t.showQuestion(0))})},showQuestion:function(t){this.testMessage=t,this.queId=t+1},test:function(){"0"===this.$route.params.id?this.testM="change it when click button":this.testM=this.$route.params.id}},computed:function(){this.test()},mounted:function(){"0"===this.$route.params.id&&(this.testM="get id 0 when mounted")}},c=a,o=(e("e691"),e("2877")),r=Object(o["a"])(c,i,n,!1,null,"653d0736",null);s["default"]=r.exports},e691:function(t,s,e){"use strict";var i=e("41cb"),n=e.n(i);n.a}}]);