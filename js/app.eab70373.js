(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["app"],{0:function(e,t,n){e.exports=n("2f39")},"2f39":function(e,t,n){"use strict";n.r(t);var a=n("967e"),o=n.n(a),r=(n("96cf"),n("fa84")),u=n.n(r),c=(n("5c7d"),n("35fc"),n("7d6e"),n("e54f"),n("62f2"),n("7e6d"),n("2b0e")),s=n("b05d"),i=n("cb32"),l=n("58a8"),d=n("9c40"),p=n("6f48"),f=n("880c"),m=n("32a7"),b=n("62cd"),h=n("f09f"),Q=n("a370"),v=n("4b7e"),S=n("b047"),g=n("8f8e"),w=n("24e8"),M=n("f2cc"),k=n("07d0"),y=n("0378"),L=n("9898"),D=n("0016"),T=n("6ab5"),x=n("033f"),C=n("e208"),P=n("27f9"),I=n("068f"),A=n("497d"),O=n("4d5a"),U=n("6b1d"),E=n("4e73"),j=n("9f0a"),V=n("c7a0"),q=n("42a1"),B=n("2ea3"),H=n("d3ab"),J=n("3786"),N=n("7867"),R=n("4983"),$=n("eb85"),F=n("2c91"),G=n("8562"),_=n("9564"),z=n("7f41"),K=n("65c6"),W=n("6ac5"),X=n("429b"),Y=n("7460"),Z=n("adad"),ee=n("823b"),te=n("eaac"),ne=n("357e"),ae=n("bd08"),oe=n("db86"),re=n("05c0"),ue=n("714f"),ce=n("7f67"),se=n("2a19"),ie=n("18d6"),le=n("a639");c["default"].use(s["a"],{config:{},components:{QAvatar:i["a"],QBadge:l["a"],QBtn:d["a"],QBtnToggle:p["a"],QCarousel:f["a"],QCarouselControl:m["a"],QCarouselSlide:b["a"],QCard:h["a"],QCardSection:Q["a"],QCardActions:v["a"],QChip:S["a"],QCheckbox:g["a"],QDialog:w["a"],QDrawer:M["a"],QFooter:k["a"],QForm:y["a"],QHeader:L["a"],QIcon:D["a"],QItem:T["a"],QItemSection:x["a"],QItemLabel:C["a"],QInput:P["a"],QImg:I["a"],QList:A["a"],QLayout:O["a"],QLinearProgress:U["a"],QMenu:E["a"],QOptionGroup:j["a"],QPageContainer:V["a"],QPopupEdit:q["a"],QPage:B["a"],QPageSticky:H["a"],QRadio:J["a"],QRouteTab:N["a"],QScrollArea:R["a"],QSeparator:$["a"],QSpace:F["a"],QSplitter:G["a"],QToggle:_["a"],QTree:z["a"],QToolbar:K["a"],QToolbarTitle:W["a"],QTabs:X["a"],QTab:Y["a"],QTabPanels:Z["a"],QTabPanel:ee["a"],QTable:te["a"],QTh:ne["a"],QTr:ae["a"],QTd:oe["a"],QTooltip:re["a"]},directives:{Ripple:ue["a"],ClosePopup:ce["a"]},plugins:{Notify:se["a"],LocalStorage:ie["a"],SessionStorage:le["a"]}});var de=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"q-app"}},[n("router-view")],1)},pe=[],fe={name:"App",created:function(){}},me=fe,be=n("2877"),he=Object(be["a"])(me,de,pe,!1,null,null,null),Qe=he.exports,ve=n("2f62");function Se(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{key:"store"};return function(t){var n=JSON.parse(sessionStorage.getItem(e.key));n&&t.replaceState(n),n=null,t.subscribe((function(t,n){sessionStorage.setItem(e.key,JSON.stringify(n))}))}}n("f751");var ge={student:{id:0,mentorId:0,name:"",age:0,city:"",country:"",school:"",stickers:0,stars:0,membershipActive:!1,membershipDate:"",expireDate:"",lastLoginDate:"",levels:"",assignment:"",stickerLog:[]}},we={updateStudent:function(e,t){Object.assign(e.student,t)}},Me={updateStudent:function(e,t){var n=e.commit;n("updateStudent",t)}},ke={currentStudent:function(e){return e.student}},ye={namespaced:!0,state:ge,mutations:we,actions:Me,getters:ke},Le={mentor:{mentorEmail:"",students:[]}},De={setMentor:function(e,t){Object.assign(e.mentor,t)},mentorAddStudent:function(e,t){e.mentor.students.push(t)},mentorDelStudent:function(e,t){for(var n=0;n<e.mentor.students.length;n++)e.mentor.students[n].id===t&&e.mentor.students.splice(n,1)}},Te={},xe={currentMentor:function(e){return e.mentor}},Ce={namespaced:!0,state:Le,mutations:De,actions:Te,getters:xe},Pe={currentUser:{mentorEmail:"",sessionLogin:""}},Ie={updateUser:function(e,t){Object.assign(e.currentUser,t)}},Ae={updateUser:function(e,t){var n=e.commit;n("updateUser",t)}},Oe={currentUser:function(e){return e.currentUser}},Ue={namespaced:!0,state:Pe,mutations:Ie,actions:Ae,getters:Oe},Ee={localMentors:[{email:"",token:"",letter:"",lastSigninDate:""}]},je={updateMentors:function(e,t){e.localMentors=t},removeMentor:function(e,t){e.localMentors[t]&&e.localMentors.splice(t,1)},addMentor:function(e,t){e.localMentors.push(t)},updateMentorDate:function(e,t,n){e.localMentors[t]&&(e.localMentors[t].lastSigninDate=Date())}},Ve={updateLocalMentors:function(e,t){var n=e.commit;n("updateMentors",t)},removeLocalMentor:function(e,t){var n=e.commit;n("removeMentor",t)},addLocalMentor:function(e,t){var n=e.commit;n("addMentor",t)},updateLocalMentorDate:function(e,t){var n=e.commit;n("updateMentorDate",t)}},qe={localMentors:function(e){return e.localMentors}},Be={namespaced:!0,state:Ee,mutations:je,actions:Ve,getters:qe},He={localStudents:[]},Je={updateStudents:function(e,t){e.localStudents=t},removeStudent:function(e,t){e.localStudents[t]&&e.localStudents.splice(t,1)},addStudent:function(e,t){e.localStudents.push(t)},updateStudentDate:function(e,t,n){e.localStudents[t]&&(e.localStudents[t].lastSigninDate=Date())}},Ne={updateLocalStudents:function(e,t){var n=e.commit;n("updateStudents",t)},removeLocalStudent:function(e,t){var n=e.commit;n("removeStudent",t)},addLocalStudent:function(e,t){var n=e.commit;n("addStudent",t)},updateLocalStudentDate:function(e,t){var n=e.commit;n("updateStudentDate",t)}},Re={localStudents:function(e){return e.localStudents}},$e={namespaced:!0,state:He,mutations:Je,actions:Ne,getters:Re};c["default"].use(ve["a"]);var Fe=Se(),Ge=function(){var e=new ve["a"].Store({modules:{student:ye,mentor:Ce,currentUser:Ue,localMentors:Be,localStudents:$e},plugins:[Fe],strict:!1});return e},_e=n("8c4f"),ze=[{path:"/",component:function(){return Promise.all([n.e("3363e974"),n.e("fc50117e")]).then(n.bind(null,"f241"))},children:[{path:"",component:function(){return n.e("2d0e8be2").then(n.bind(null,"8b24"))}},{path:"StudentHome",component:function(){return Promise.all([n.e("3363e974"),n.e("04d04bc8"),n.e("b555dd3a")]).then(n.bind(null,"6076"))}},{path:"MentorHome",component:function(){return Promise.all([n.e("3363e974"),n.e("2f38d95d")]).then(n.bind(null,"a9b0"))}},{path:"ShowTopics",component:function(){return Promise.all([n.e("3363e974"),n.e("04d04bc8"),n.e("15d3b492")]).then(n.bind(null,"2aa6"))}},{path:"Membership",component:function(){return n.e("571b8ec9").then(n.bind(null,"168d"))}},{path:"KeyDate",component:function(){return n.e("2d0b361e").then(n.bind(null,"27ad"))}},{path:"*",component:function(){return n.e("4b47640d").then(n.bind(null,"e51e"))}}]}];ze.push({path:"*",component:function(){return n.e("4b47640d").then(n.bind(null,"e51e"))}});var Ke=ze;c["default"].use(_e["a"]);var We=function(){var e=new _e["a"]({scrollBehavior:function(){return{x:0,y:0}},routes:Ke,mode:"hash",base:""});return e},Xe=function(){var e="function"===typeof Ge?Ge({Vue:c["default"]}):Ge,t="function"===typeof We?We({Vue:c["default"],store:e}):We;e.$router=t;var n={el:"#q-app",router:t,store:e,render:function(e){return e(Qe)}};return{app:n,store:e,router:t}},Ye=n("a925"),Ze={failed:"Action failed",success:"Action was successful"},et={"en-us":Ze};c["default"].use(Ye["a"]);var tt=new Ye["a"]({locale:"en-us",fallbackLocale:"en-us",messages:et}),nt=function(e){var t=e.app;t.i18n=tt},at=n("bc3a"),ot=n.n(at),rt=function(){var e=u()(o.a.mark((function e(t){var n;return o.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:n=t.Vue,n.prototype.$axios=ot.a;case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ut=n("522d"),ct=n("74ca"),st=n("478e"),it=n("2bf2"),lt=Object(st["a"])({uri:"https://ttm2020.pythonanywhere.com/graphql"}),dt=new it["a"],pt=new ct["a"]({link:lt,cache:dt,connectToDevTools:!0,request:function(e){e.setContext({headers:{authorization:sessionStorage.getItem("token")||null}})}}),ft=new ut["a"]({defaultClient:pt,errorHandler:function(e){var t=e.graphQLErrors,n=e.networkError;t&&t.map((function(e){var t=e.message,n=e.locations,a=e.path;return console.log("[GraphQL error]: Message: ".concat(t,", Location: ").concat(n,", Path: ").concat(a))})),n&&console.log("[Network error]: ".concat(n))}}),mt=function(e){var t=e.app,n=e.Vue;n.use(ut["a"]),t.apolloProvider=ft},bt=Xe(),ht=bt.app,Qt=bt.store,vt=bt.router;function St(){return gt.apply(this,arguments)}function gt(){return gt=u()(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t=[nt,rt,mt],n=0;case 2:if(!(n<t.length)){e.next=20;break}if("function"===typeof t[n]){e.next=5;break}return e.abrupt("continue",17);case 5:return e.prev=5,e.next=8,t[n]({app:ht,router:vt,store:Qt,Vue:c["default"],ssrContext:null});case 8:e.next=17;break;case 10:if(e.prev=10,e.t0=e["catch"](5),!e.t0||!e.t0.url){e.next=15;break}return window.location.href=e.t0.url,e.abrupt("return");case 15:return console.error("[Quasar] boot error:",e.t0),e.abrupt("return");case 17:n++,e.next=2;break;case 20:new c["default"](ht);case 21:case"end":return e.stop()}}),e,null,[[5,10]])}))),gt.apply(this,arguments)}St()},"7e6d":function(e,t,n){}},[[0,"runtime","vendor"]]]);