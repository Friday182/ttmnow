(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["app"],{0:function(e,t,n){e.exports=n("2f39")},"2f39":function(e,t,n){"use strict";n.r(t);var a=n("967e"),o=n.n(a),r=(n("96cf"),n("fa84")),u=n.n(r),s=(n("5c7d"),n("35fc"),n("7d6e"),n("e54f"),n("62f2"),n("7e6d"),n("2b0e")),c=n("b05d"),i=n("cb32"),l=n("58a8"),d=n("9c40"),p=n("6f48"),f=n("880c"),m=n("32a7"),b=n("62cd"),h=n("f09f"),g=n("a370"),Q=n("4b7e"),S=n("b047"),v=n("8f8e"),w=n("8169"),M=n("24e8"),T=n("f2cc"),k=n("d66b"),y=n("07d0"),D=n("0378"),x=n("9898"),L=n("0016"),C=n("6ab5"),A=n("033f"),P=n("e208"),q=n("27f9"),I=n("068f"),O=n("497d"),U=n("4d5a"),E=n("6b1d"),j=n("4e73"),H=n("9f0a"),N=n("c7a0"),V=n("42a1"),B=n("2ea3"),J=n("d3ab"),_=n("3786"),F=n("7867"),R=n("4983"),$=n("eb85"),G=n("2c91"),z=n("8562"),K=n("9149"),W=n("f531"),X=n("87fe"),Y=n("b19c"),Z=n("9564"),ee=n("7f41"),te=n("65c6"),ne=n("6ac5"),ae=n("429b"),oe=n("7460"),re=n("adad"),ue=n("823b"),se=n("eaac"),ce=n("357e"),ie=n("bd08"),le=n("db86"),de=n("05c0"),pe=n("714f"),fe=n("7f67"),me=n("b12a"),be=n("436b"),he=n("18d6"),ge=n("2a19"),Qe=n("a639");s["default"].use(c["a"],{config:{},components:{QAvatar:i["a"],QBadge:l["a"],QBtn:d["a"],QBtnToggle:p["a"],QCarousel:f["a"],QCarouselControl:m["a"],QCarouselSlide:b["a"],QCard:h["a"],QCardSection:g["a"],QCardActions:Q["a"],QChip:S["a"],QCheckbox:v["a"],QChatMessage:w["a"],QDialog:M["a"],QDrawer:T["a"],QEditor:k["a"],QFooter:y["a"],QForm:D["a"],QHeader:x["a"],QIcon:L["a"],QItem:C["a"],QItemSection:A["a"],QItemLabel:P["a"],QInput:q["a"],QImg:I["a"],QList:O["a"],QLayout:U["a"],QLinearProgress:E["a"],QMenu:j["a"],QOptionGroup:H["a"],QPageContainer:N["a"],QPopupEdit:V["a"],QPage:B["a"],QPageSticky:J["a"],QRadio:_["a"],QRouteTab:F["a"],QScrollArea:R["a"],QSeparator:$["a"],QSpace:G["a"],QSplitter:z["a"],QSpinnerHourglass:K["a"],QStepper:W["a"],QStep:X["a"],QStepperNavigation:Y["a"],QToggle:Z["a"],QTree:ee["a"],QToolbar:te["a"],QToolbarTitle:ne["a"],QTabs:ae["a"],QTab:oe["a"],QTabPanels:re["a"],QTabPanel:ue["a"],QTable:se["a"],QTh:ce["a"],QTr:ie["a"],QTd:le["a"],QTooltip:de["a"]},directives:{Ripple:pe["a"],ClosePopup:fe["a"]},plugins:{AppFullscreen:me["a"],Dialog:be["a"],LocalStorage:he["a"],Notify:ge["a"],SessionStorage:Qe["a"]}});var Se=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"q-app"}},[n("router-view")],1)},ve=[],we={name:"App",created:function(){}},Me=we,Te=n("2877"),ke=Object(Te["a"])(Me,Se,ve,!1,null,null,null),ye=ke.exports,De=n("2f62");function xe(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{key:"store"};return function(t){var n=JSON.parse(sessionStorage.getItem(e.key));n&&t.replaceState(n),n=null,t.subscribe((function(t,n){sessionStorage.setItem(e.key,JSON.stringify(n))}))}}n("f751");var Le={student:{id:0,mentorId:0,name:"",age:0,city:"",country:"",school:"",stickers:0,stars:0,membershipActive:!1,membershipDate:"",expireDate:"",lastLoginDate:"",levels:"",assignment:[],stickerLog:[],contacts:[],aiEnabled:!1}},Ce={setStudent:function(e,t){Object.assign(e.student,t)},setAssignmentDone:function(e,t){for(var n=0;n<e.student.assignment.length;n++)e.student.assignment[n]["k_task"]===t&&(e.student.assignment[n]["k_done"]=!0)}},Ae={updateStudent:function(e,t){var n=e.commit;n("setStudent",t)},updateAssignmentDone:function(e,t){var n=e.commit;n("setAssignmentDone",t)}},Pe={currentStudent:function(e){return e.student}},qe={namespaced:!0,state:Le,mutations:Ce,actions:Ae,getters:Pe},Ie={mentor:{id:"",name:"",mentorEmail:"",contacts:[],students:[]}},Oe={setMentor:function(e,t){Object.assign(e.mentor,t)},mentorAddStudent:function(e,t){e.mentor.students.push(t)},mentorDelStudent:function(e,t){for(var n=0;n<e.mentor.students.length;n++)e.mentor.students[n].id===t&&e.mentor.students.splice(n,1)}},Ue={},Ee={currentMentor:function(e){return e.mentor}},je={namespaced:!0,state:Ie,mutations:Oe,actions:Ue,getters:Ee},He={currentUser:{id:0,name:"",contacts:[],mentorEmail:"",sessionLogin:""}},Ne={updateUser:function(e,t){Object.assign(e.currentUser,t)}},Ve={updateUser:function(e,t){var n=e.commit;n("updateUser",t)}},Be={currentUser:function(e){return e.currentUser}},Je={namespaced:!0,state:He,mutations:Ne,actions:Ve,getters:Be},_e={localMentors:[]},Fe={updateMentors:function(e,t){e.localMentors=t},removeMentor:function(e,t){e.localMentors[t]&&e.localMentors.splice(t,1)},addMentor:function(e,t){e.localMentors.push(t)},updateMentorDate:function(e,t){e.localMentors[t]&&(e.localMentors[t].lastSigninDate=Date())}},Re={updateLocalMentors:function(e,t){var n=e.commit;n("updateMentors",t)},removeLocalMentor:function(e,t){var n=e.commit;n("removeMentor",t)},addLocalMentor:function(e,t){var n=e.commit;n("addMentor",t)},updateLocalMentorDate:function(e,t){var n=e.commit;n("updateMentorDate",t)}},$e={localMentors:function(e){return e.localMentors},Mentor:function(e){return function(t){return e.localMentors[t]?e.localMentors[t]:""}}},Ge={namespaced:!0,state:_e,mutations:Fe,actions:Re,getters:$e},ze={localStudents:[]},Ke={updateStudents:function(e,t){e.localStudents=t},removeStudent:function(e,t){e.localStudents[t]&&e.localStudents.splice(t,1)},addStudent:function(e,t){e.localStudents.push(t)},updateStudentDate:function(e,t,n){e.localStudents[t]&&(e.localStudents[t].lastSigninDate=Date())}},We={updateLocalStudents:function(e,t){var n=e.commit;n("updateStudents",t)},removeLocalStudent:function(e,t){var n=e.commit;n("removeStudent",t)},addLocalStudent:function(e,t){var n=e.commit;n("addStudent",t)},updateLocalStudentDate:function(e,t){var n=e.commit;n("updateStudentDate",t)}},Xe={localStudents:function(e){return e.localStudents}},Ye={namespaced:!0,state:ze,mutations:Ke,actions:We,getters:Xe},Ze=function(){return{questions:[{task:"",standardSec:0,answerType:"",questionType:"",questionText:"",chartType:"",option1:"",option2:"",option3:"",option4:"",answer1:"",answer2:"",answer3:"",answer4:"",answerText:"",helper:"",img1:"",img2:"",tag1:"",tag2:"",tip:""}]}},et=Ze(),tt={setAllQuestions:function(e,t){e.questions=Object.assign([],t)},resetState:function(e){({questions:[{task:"",standardSec:0,answerType:"",questionType:"",questionText:"",chartType:"",option1:"",option2:"",option3:"",option4:"",answer1:"",answer2:"",answer3:"",answer4:"",answerText:"",helper:"",img1:"",img2:"",tag1:"",tag2:"",tip:""}]})}},nt={setQuestions:function(e,t){var n=e.commit;n("setAllQuestions",t)},clearQuestions:function(e){var t=e.commit;t("resetState")}},at={getQuestions:function(e){return e.questions}},ot={namespaced:!0,state:et,mutations:tt,actions:nt,getters:at};s["default"].use(De["a"]);var rt=xe(),ut=function(){var e=new De["a"].Store({modules:{student:qe,mentor:je,currentUser:Je,localMentors:Ge,localStudents:Ye,questions:ot},plugins:[rt],strict:!1});return e},st=n("8c4f"),ct=[{path:"/",component:function(){return Promise.all([n.e("21903cd3"),n.e("fc50117e")]).then(n.bind(null,"f241"))},children:[{path:"",component:function(){return n.e("2d0e8be2").then(n.bind(null,"8b24"))}},{path:"StudentHome",component:function(){return Promise.all([n.e("21903cd3"),n.e("3e1a9c0c"),n.e("01ee359e")]).then(n.bind(null,"6076"))}},{path:"MentorHome",component:function(){return Promise.all([n.e("21903cd3"),n.e("55ee003a")]).then(n.bind(null,"a9b0"))}},{path:"ShowTopics",component:function(){return Promise.all([n.e("21903cd3"),n.e("3e1a9c0c"),n.e("15d3b492")]).then(n.bind(null,"2aa6"))}},{path:"Membership",component:function(){return n.e("5f49645c").then(n.bind(null,"168d"))}},{path:"Curriculum",component:function(){return n.e("2d0a4f41").then(n.bind(null,"0946"))}},{path:"SchoolDic",component:function(){return n.e("2d0d6392").then(n.bind(null,"7245"))}},{path:"KeyDate",component:function(){return n.e("2d0b361e").then(n.bind(null,"27ad"))}},{path:"Contact",component:function(){return n.e("2d216da8").then(n.bind(null,"c3df"))}},{path:"UserManual",component:function(){return n.e("2d0e4880").then(n.bind(null,"912d"))}},{path:"QandA",component:function(){return n.e("2d0e184e").then(n.bind(null,"7b7d"))}},{path:"*",component:function(){return n.e("4b47640d").then(n.bind(null,"e51e"))}}]}];ct.push({path:"*",component:function(){return n.e("4b47640d").then(n.bind(null,"e51e"))}});var it=ct;s["default"].use(st["a"]);var lt=function(){var e=new st["a"]({scrollBehavior:function(){return{x:0,y:0}},routes:it,mode:"hash",base:""});return e},dt=function(){var e="function"===typeof ut?ut({Vue:s["default"]}):ut,t="function"===typeof lt?lt({Vue:s["default"],store:e}):lt;e.$router=t;var n={el:"#q-app",router:t,store:e,render:function(e){return e(ye)}};return{app:n,store:e,router:t}},pt=n("a925"),ft={failed:"Action failed",success:"Action was successful"},mt={"en-us":ft};s["default"].use(pt["a"]);var bt=new pt["a"]({locale:"en-us",fallbackLocale:"en-us",messages:mt}),ht=function(e){var t=e.app;t.i18n=bt},gt=n("bc3a"),Qt=n.n(gt),St=function(){var e=u()(o.a.mark((function e(t){var n;return o.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:n=t.Vue,n.prototype.$axios=Qt.a;case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),vt=n("522d"),wt=n("74ca"),Mt=n("478e"),Tt=n("2bf2"),kt=Object(Mt["a"])({uri:"https://ttm2020.pythonanywhere.com/graphql"}),yt=new Tt["a"],Dt=new wt["a"]({link:kt,cache:yt,connectToDevTools:!0,request:function(e){e.setContext({headers:{authorization:sessionStorage.getItem("token")||null}})}}),xt=new vt["a"]({defaultClient:Dt,errorHandler:function(e){var t=e.graphQLErrors,n=e.networkError;t&&t.map((function(e){var t=e.message,n=e.locations,a=e.path;return console.log("[GraphQL error]: Message: ".concat(t,", Location: ").concat(n,", Path: ").concat(a))})),n&&console.log("[Network error]: ".concat(n))}}),Lt=function(e){var t=e.app,n=e.Vue;n.use(vt["a"]),t.apolloProvider=xt},Ct=dt(),At=Ct.app,Pt=Ct.store,qt=Ct.router;function It(){return Ot.apply(this,arguments)}function Ot(){return Ot=u()(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t=[ht,St,Lt],n=0;case 2:if(!(n<t.length)){e.next=20;break}if("function"===typeof t[n]){e.next=5;break}return e.abrupt("continue",17);case 5:return e.prev=5,e.next=8,t[n]({app:At,router:qt,store:Pt,Vue:s["default"],ssrContext:null});case 8:e.next=17;break;case 10:if(e.prev=10,e.t0=e["catch"](5),!e.t0||!e.t0.url){e.next=15;break}return window.location.href=e.t0.url,e.abrupt("return");case 15:return console.error("[Quasar] boot error:",e.t0),e.abrupt("return");case 17:n++,e.next=2;break;case 20:new s["default"](At);case 21:case"end":return e.stop()}}),e,null,[[5,10]])}))),Ot.apply(this,arguments)}It()},"7e6d":function(e,t,n){}},[[0,"runtime","vendor"]]]);