(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["app"],{0:function(e,t,n){e.exports=n("2f39")},"2f39":function(e,t,n){"use strict";n.r(t);var a=n("967e"),r=n.n(a),o=(n("96cf"),n("fa84")),u=n.n(o),c=(n("5c7d"),n("35fc"),n("7d6e"),n("e54f"),n("62f2"),n("7e6d"),n("2b0e")),s=n("b05d"),i=n("cb32"),l=n("58a8"),d=n("9c40"),p=n("6f48"),f=n("880c"),m=n("32a7"),b=n("62cd"),h=n("f09f"),Q=n("a370"),v=n("4b7e"),g=n("b047"),S=n("8f8e"),w=n("24e8"),k=n("f2cc"),M=n("07d0"),y=n("0378"),T=n("9898"),L=n("0016"),x=n("6ab5"),C=n("033f"),P=n("e208"),I=n("27f9"),U=n("068f"),D=n("497d"),O=n("4d5a"),A=n("6b1d"),E=n("4e73"),V=n("9f0a"),j=n("c7a0"),q=n("42a1"),B=n("2ea3"),H=n("d3ab"),J=n("3786"),N=n("7867"),R=n("4983"),$=n("eb85"),F=n("2c91"),G=n("8562"),_=n("9564"),z=n("7f41"),K=n("65c6"),W=n("6ac5"),X=n("429b"),Y=n("7460"),Z=n("adad"),ee=n("823b"),te=n("eaac"),ne=n("357e"),ae=n("bd08"),re=n("db86"),oe=n("05c0"),ue=n("714f"),ce=n("7f67"),se=n("2a19"),ie=n("18d6"),le=n("a639");c["default"].use(s["a"],{config:{},components:{QAvatar:i["a"],QBadge:l["a"],QBtn:d["a"],QBtnToggle:p["a"],QCarousel:f["a"],QCarouselControl:m["a"],QCarouselSlide:b["a"],QCard:h["a"],QCardSection:Q["a"],QCardActions:v["a"],QChip:g["a"],QCheckbox:S["a"],QDialog:w["a"],QDrawer:k["a"],QFooter:M["a"],QForm:y["a"],QHeader:T["a"],QIcon:L["a"],QItem:x["a"],QItemSection:C["a"],QItemLabel:P["a"],QInput:I["a"],QImg:U["a"],QList:D["a"],QLayout:O["a"],QLinearProgress:A["a"],QMenu:E["a"],QOptionGroup:V["a"],QPageContainer:j["a"],QPopupEdit:q["a"],QPage:B["a"],QPageSticky:H["a"],QRadio:J["a"],QRouteTab:N["a"],QScrollArea:R["a"],QSeparator:$["a"],QSpace:F["a"],QSplitter:G["a"],QToggle:_["a"],QTree:z["a"],QToolbar:K["a"],QToolbarTitle:W["a"],QTabs:X["a"],QTab:Y["a"],QTabPanels:Z["a"],QTabPanel:ee["a"],QTable:te["a"],QTh:ne["a"],QTr:ae["a"],QTd:re["a"],QTooltip:oe["a"]},directives:{Ripple:ue["a"],ClosePopup:ce["a"]},plugins:{Notify:se["a"],LocalStorage:ie["a"],SessionStorage:le["a"]}});var de=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"q-app"}},[n("router-view")],1)},pe=[],fe={name:"App",created:function(){}},me=fe,be=n("2877"),he=Object(be["a"])(me,de,pe,!1,null,null,null),Qe=he.exports,ve=n("2f62");function ge(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{key:"store"};return function(t){var n=JSON.parse(sessionStorage.getItem(e.key));n&&t.replaceState(n),n=null,t.subscribe((function(t,n){sessionStorage.setItem(e.key,JSON.stringify(n))}))}}n("f751");var Se={student:{id:0,mentorId:0,name:"",age:0,city:"",country:"",school:"",stickers:0,stars:0,membershipDate:"",expireDate:"",lastLoginDate:"",levels:"",assignment:"",stickerLog:[]}},we={updateStudent:function(e,t){Object.assign(e.student,t)}},ke={updateStudent:function(e,t){var n=e.commit;n("updateStudent",t)}},Me={currentStudent:function(e){return e.student}},ye={namespaced:!0,state:Se,mutations:we,actions:ke,getters:Me},Te={currentUser:{mentorEmail:"",sessionLogin:""}},Le={updateUser:function(e,t){Object.assign(e.currentUser,t)}},xe={updateUser:function(e,t){var n=e.commit;n("updateUser",t)}},Ce={currentUser:function(e){return e.currentUser}},Pe={namespaced:!0,state:Te,mutations:Le,actions:xe,getters:Ce},Ie={localMentors:[{email:"",token:"",letter:"",lastSigninDate:""}]},Ue={updateMentors:function(e,t){e.localMentors=t},removeMentor:function(e,t){e.localMentors[t]&&e.localMentors.splice(t,1)},addMentor:function(e,t){e.localMentors.push(t)}},De={updateLocalMentors:function(e,t){var n=e.commit;n("updateMentors",t)},removeLocalMentor:function(e,t){var n=e.commit;n("removeMentor",t)},addLocalMentor:function(e,t){var n=e.commit;n("addMentor",t)}},Oe={localMentors:function(e){return e.localMentors}},Ae={namespaced:!0,state:Ie,mutations:Ue,actions:De,getters:Oe},Ee={localStudents:[]},Ve={updateStudents:function(e,t){e.localStudents=t},removeStudent:function(e,t){e.localStudents[t]&&e.localStudents.splice(t,1)},addStudent:function(e,t){e.localStudents.push(t)}},je={updateLocalStudents:function(e,t){var n=e.commit;n("updateStudents",t)},removeLocalStudent:function(e,t){var n=e.commit;n("removeStudent",t)},addLocalStudent:function(e,t){var n=e.commit;n("addStudent",t)}},qe={localStudents:function(e){return e.localStudents}},Be={namespaced:!0,state:Ee,mutations:Ve,actions:je,getters:qe};c["default"].use(ve["a"]);var He=ge(),Je=function(){var e=new ve["a"].Store({modules:{student:ye,currentUser:Pe,localMentors:Ae,localStudents:Be},plugins:[He],strict:!1});return e},Ne=n("8c4f"),Re=[{path:"/",component:function(){return Promise.all([n.e("37fe1a8f"),n.e("3ea0cc68")]).then(n.bind(null,"f241"))},children:[{path:"",component:function(){return n.e("2d0e8be2").then(n.bind(null,"8b24"))}},{path:"StudentHome",component:function(){return Promise.all([n.e("37fe1a8f"),n.e("554feae1")]).then(n.bind(null,"6076"))}},{path:"MentorHome",component:function(){return Promise.all([n.e("37fe1a8f"),n.e("9b987d3c")]).then(n.bind(null,"a9b0"))}},{path:"ShowTopics",component:function(){return Promise.all([n.e("37fe1a8f"),n.e("5ec45eec")]).then(n.bind(null,"2aa6"))}},{path:"Membership",component:function(){return n.e("571b8ec9").then(n.bind(null,"168d"))}},{path:"*",component:function(){return n.e("4b47640d").then(n.bind(null,"e51e"))}}]}];Re.push({path:"*",component:function(){return n.e("4b47640d").then(n.bind(null,"e51e"))}});var $e=Re;c["default"].use(Ne["a"]);var Fe=function(){var e=new Ne["a"]({scrollBehavior:function(){return{x:0,y:0}},routes:$e,mode:"hash",base:""});return e},Ge=function(){var e="function"===typeof Je?Je({Vue:c["default"]}):Je,t="function"===typeof Fe?Fe({Vue:c["default"],store:e}):Fe;e.$router=t;var n={el:"#q-app",router:t,store:e,render:function(e){return e(Qe)}};return{app:n,store:e,router:t}},_e=n("a925"),ze={failed:"Action failed",success:"Action was successful"},Ke={"en-us":ze};c["default"].use(_e["a"]);var We=new _e["a"]({locale:"en-us",fallbackLocale:"en-us",messages:Ke}),Xe=function(e){var t=e.app;t.i18n=We},Ye=n("bc3a"),Ze=n.n(Ye),et=function(){var e=u()(r.a.mark((function e(t){var n;return r.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:n=t.Vue,n.prototype.$axios=Ze.a;case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),tt=n("522d"),nt=n("74ca"),at=n("478e"),rt=n("2bf2"),ot=Object(at["a"])({uri:"https://ttm2020.pythonanywhere.com/graphql"}),ut=new rt["a"],ct=new nt["a"]({link:ot,cache:ut,connectToDevTools:!0,request:function(e){e.setContext({headers:{authorization:sessionStorage.getItem("token")||null}})}}),st=new tt["a"]({defaultClient:ct,errorHandler:function(e){var t=e.graphQLErrors,n=e.networkError;t&&t.map((function(e){var t=e.message,n=e.locations,a=e.path;return console.log("[GraphQL error]: Message: ".concat(t,", Location: ").concat(n,", Path: ").concat(a))})),n&&console.log("[Network error]: ".concat(n))}}),it=function(e){var t=e.app,n=e.Vue;n.use(tt["a"]),t.apolloProvider=st},lt=Ge(),dt=lt.app,pt=lt.store,ft=lt.router;function mt(){return bt.apply(this,arguments)}function bt(){return bt=u()(r.a.mark((function e(){var t,n;return r.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t=[Xe,et,it],n=0;case 2:if(!(n<t.length)){e.next=20;break}if("function"===typeof t[n]){e.next=5;break}return e.abrupt("continue",17);case 5:return e.prev=5,e.next=8,t[n]({app:dt,router:ft,store:pt,Vue:c["default"],ssrContext:null});case 8:e.next=17;break;case 10:if(e.prev=10,e.t0=e["catch"](5),!e.t0||!e.t0.url){e.next=15;break}return window.location.href=e.t0.url,e.abrupt("return");case 15:return console.error("[Quasar] boot error:",e.t0),e.abrupt("return");case 17:n++,e.next=2;break;case 20:new c["default"](dt);case 21:case"end":return e.stop()}}),e,null,[[5,10]])}))),bt.apply(this,arguments)}mt()},"7e6d":function(e,t,n){}},[[0,"runtime","vendor"]]]);