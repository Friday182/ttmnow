(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[3],{0:function(e,t,n){e.exports=n("2f39")},"2f39":function(e,t,n){"use strict";n.r(t);var a=n("967e"),o=n.n(a),r=(n("a481"),n("96cf"),n("fa84")),s=n.n(r),u=(n("5c7d"),n("35fc"),n("7d6e"),n("e54f"),n("62f2"),n("7e6d"),n("2b0e")),c=n("b05d"),i=n("cb32"),l=n("58a8"),d=n("9c40"),p=n("6a67"),f=n("880c"),m=n("32a7"),h=n("62cd"),b=n("f09f"),Q=n("a370"),g=n("4b7e"),S=n("b047"),v=n("8f8e"),w=n("8169"),M=n("24e8"),T=n("9404"),x=n("d66b"),k=n("7ff0"),y=n("0378"),D=n("e359"),C=n("0016"),L=n("66e5"),A=n("4074"),P=n("0170"),I=n("27f9"),U=n("068f"),O=n("1c1c"),q=n("4d5a"),E=n("6b1d"),j=n("4e73"),H=n("9f0a"),F=n("09e3"),N=n("42a1"),V=n("9989"),B=n("de5e"),J=n("3786"),R=n("7867"),$=n("4983"),G=n("eb85"),K=n("2c91"),_=n("8562"),z=n("9149"),W=n("ddd8"),X=n("f531"),Y=n("87fe"),Z=n("b19c"),ee=n("9564"),te=n("7f41"),ne=n("65c6"),ae=n("6ac5"),oe=n("429b"),re=n("7460"),se=n("adad"),ue=n("823b"),ce=n("eaac"),ie=n("357e"),le=n("bd08"),de=n("db86"),pe=n("05c0"),fe=n("714f"),me=n("7f67"),he=n("b12a"),be=n("436b"),Qe=n("18d6"),ge=n("2a19"),Se=n("a639");u["default"].use(c["a"],{config:{},components:{QAvatar:i["a"],QBadge:l["a"],QBtn:d["a"],QBtnToggle:p["a"],QCarousel:f["a"],QCarouselControl:m["a"],QCarouselSlide:h["a"],QCard:b["a"],QCardSection:Q["a"],QCardActions:g["a"],QChip:S["a"],QCheckbox:v["a"],QChatMessage:w["a"],QDialog:M["a"],QDrawer:T["a"],QEditor:x["a"],QFooter:k["a"],QForm:y["a"],QHeader:D["a"],QIcon:C["a"],QItem:L["a"],QItemSection:A["a"],QItemLabel:P["a"],QInput:I["a"],QImg:U["a"],QList:O["a"],QLayout:q["a"],QLinearProgress:E["a"],QMenu:j["a"],QOptionGroup:H["a"],QPageContainer:F["a"],QPopupEdit:N["a"],QPage:V["a"],QPageSticky:B["a"],QRadio:J["a"],QRouteTab:R["a"],QScrollArea:$["a"],QSeparator:G["a"],QSpace:K["a"],QSplitter:_["a"],QSpinnerHourglass:z["a"],QSelect:W["a"],QStepper:X["a"],QStep:Y["a"],QStepperNavigation:Z["a"],QToggle:ee["a"],QTree:te["a"],QToolbar:ne["a"],QToolbarTitle:ae["a"],QTabs:oe["a"],QTab:re["a"],QTabPanels:se["a"],QTabPanel:ue["a"],QTable:ce["a"],QTh:ie["a"],QTr:le["a"],QTd:de["a"],QTooltip:pe["a"]},directives:{Ripple:fe["a"],ClosePopup:me["a"]},plugins:{AppFullscreen:he["a"],Dialog:be["a"],LocalStorage:Qe["a"],Notify:ge["a"],SessionStorage:Se["a"]}});var ve=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"q-app"}},[n("router-view")],1)},we=[],Me={name:"App",created:function(){}},Te=Me,xe=n("2877"),ke=Object(xe["a"])(Te,ve,we,!1,null,null,null),ye=ke.exports,De=n("2f62");function Ce(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{key:"store"};return function(t){var n=JSON.parse(sessionStorage.getItem(e.key));n&&t.replaceState(n),n=null,t.subscribe((function(t,n){sessionStorage.setItem(e.key,JSON.stringify(n))}))}}n("f751");var Le={student:{gid:0,mentorId:0,name:"",age:0,city:"",country:"",school:"",stickers:0,stars:0,isMember:!1,membershipStart:"",membershipStop:"",lastLoginDate:"",levels:"",assignments:[],assignmentDone:!1,stickerLog:[],contacts:[],aiEnabled:!1}},Ae={setStudent:function(e,t){Object.assign(e.student,t)},setAssignmentDone:function(e,t){e.student.assignmentDone=t}},Pe={updateStudent:function(e,t){var n=e.commit;n("setStudent",t)},updateAssignmentDone:function(e,t){var n=e.commit;n("setAssignmentDone",t)}},Ie={currentStudent:function(e){return e.student}},Ue={namespaced:!0,state:Le,mutations:Ae,actions:Pe,getters:Ie},Oe=(n("7f7f"),{mentor:{id:"",name:"",mentorEmail:"",refreshStudent:!1,contacts:[],students:[]}}),qe={setMentor:function(e,t){Object.assign(e.mentor,t)},mentorAddStudent:function(e,t){t.index=e.mentor.students.length,e.mentor.students.push(t)},mentorDelStudent:function(e,t){for(var n=0;n<e.mentor.students.length;n++)e.mentor.students[n].name===t&&e.mentor.students.splice(n,1);for(var a=0;a<e.mentor.students.length;a++)e.mentor.students.index=a},setRefreshStudent:function(e,t){e.mentor.refreshStudent=t},setAssignment:function(e,t,n){for(var a=0;a<e.mentor.students.length;a++)e.mentor.students[a].name===t&&(e.mentor.students.assignment=n)}},Ee={},je={currentMentor:function(e){return e.mentor}},He={namespaced:!0,state:Oe,mutations:qe,actions:Ee,getters:je},Fe={currentUser:{id:0,name:"",contacts:[],mentorEmail:"",sessionLogin:""}},Ne={updateUser:function(e,t){Object.assign(e.currentUser,t)}},Ve={updateUser:function(e,t){var n=e.commit;n("updateUser",t)}},Be={currentUser:function(e){return e.currentUser}},Je={namespaced:!0,state:Fe,mutations:Ne,actions:Ve,getters:Be},Re={localMentors:[]},$e={updateMentors:function(e,t){e.localMentors=t},removeMentor:function(e,t){e.localMentors[t]&&e.localMentors.splice(t,1)},addMentor:function(e,t){e.localMentors.push(t)},updateMentorDate:function(e,t){e.localMentors[t]&&(e.localMentors[t].lastSigninDate=Date())}},Ge={updateLocalMentors:function(e,t){var n=e.commit;n("updateMentors",t)},removeLocalMentor:function(e,t){var n=e.commit;n("removeMentor",t)},addLocalMentor:function(e,t){var n=e.commit;n("addMentor",t)},updateLocalMentorDate:function(e,t){var n=e.commit;n("updateMentorDate",t)}},Ke={localMentors:function(e){return e.localMentors},Mentor:function(e){return function(t){return e.localMentors[t]?e.localMentors[t]:""}}},_e={namespaced:!0,state:Re,mutations:$e,actions:Ge,getters:Ke},ze={localStudents:[]},We={updateStudents:function(e,t){e.localStudents=t},removeStudent:function(e,t){e.localStudents[t]&&e.localStudents.splice(t,1)},addStudent:function(e,t){e.localStudents.push(t)},updateStudentDate:function(e,t,n){e.localStudents[t]&&(e.localStudents[t].lastSigninDate=Date())}},Xe={updateLocalStudents:function(e,t){var n=e.commit;n("updateStudents",t)},removeLocalStudent:function(e,t){var n=e.commit;n("removeStudent",t)},addLocalStudent:function(e,t){var n=e.commit;n("addStudent",t)},updateLocalStudentDate:function(e,t){var n=e.commit;n("updateStudentDate",t)}},Ye={localStudents:function(e){return e.localStudents}},Ze={namespaced:!0,state:ze,mutations:We,actions:Xe,getters:Ye},et=function(){return{questions:[{QuestionId:0,Kp:"",StdSec:0,AnswerType:"",QuestionType:"",QuestionText:"",Options:[],Answers:[],Tags:[],ChartType:"",Charts:[],Clocks:[],Tables:[],AnswerText:"",Helper:!1,Imgs:[],Tips:[]}]}},tt=et(),nt={setAllQuestions:function(e,t){e.questions=Object.assign([],t)},resetState:function(e){e.questions=[]}},at={setQuestions:function(e,t){var n=e.commit;n("setAllQuestions",t)},clearQuestions:function(e){var t=e.commit;t("resetState")}},ot={getQuestions:function(e){return e.questions}},rt={namespaced:!0,state:tt,mutations:nt,actions:at,getters:ot};u["default"].use(De["a"]);var st=Ce(),ut=function(){var e=new De["a"].Store({modules:{student:Ue,mentor:He,currentUser:Je,localMentors:_e,localStudents:Ze,questions:rt},plugins:[st],strict:!1});return e},ct=n("8c4f"),it=[{path:"/",component:function(){return Promise.all([n.e(0),n.e(1),n.e(9)]).then(n.bind(null,"f241"))},children:[{path:"",component:function(){return n.e(13).then(n.bind(null,"8b24"))}},{path:"StudentHome",component:function(){return Promise.all([n.e(0),n.e(1),n.e(5)]).then(n.bind(null,"6076"))}},{path:"MentorHome",component:function(){return Promise.all([n.e(0),n.e(1),n.e(6)]).then(n.bind(null,"a9b0"))}},{path:"ShowTopics",component:function(){return Promise.all([n.e(0),n.e(1),n.e(10)]).then(n.bind(null,"2aa6"))}},{path:"Membership",component:function(){return n.e(7).then(n.bind(null,"168d"))}},{path:"Products",component:function(){return n.e(8).then(n.bind(null,"6eb0"))}},{path:"Curriculum",component:function(){return n.e(12).then(n.bind(null,"0946"))}},{path:"SchoolDic",component:function(){return Promise.all([n.e(0),n.e(16)]).then(n.bind(null,"7245"))}},{path:"KeyDate",component:function(){return n.e(14).then(n.bind(null,"27ad"))}},{path:"Contact",component:function(){return n.e(11).then(n.bind(null,"c3df"))}},{path:"UserManual",component:function(){return n.e(17).then(n.bind(null,"912d"))}},{path:"QandA",component:function(){return n.e(15).then(n.bind(null,"7b7d"))}},{path:"*",component:function(){return n.e(2).then(n.bind(null,"e51e"))}}]}];it.push({path:"*",component:function(){return n.e(2).then(n.bind(null,"e51e"))}});var lt=it;u["default"].use(ct["a"]);var dt=function(){var e=new ct["a"]({scrollBehavior:function(){return{x:0,y:0}},routes:lt,mode:"hash",base:""});return e},pt=function(){return ft.apply(this,arguments)};function ft(){return ft=s()(o.a.mark((function e(){var t,n,a;return o.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if("function"!==typeof ut){e.next=6;break}return e.next=3,ut({Vue:u["default"]});case 3:e.t0=e.sent,e.next=7;break;case 6:e.t0=ut;case 7:if(t=e.t0,"function"!==typeof dt){e.next=14;break}return e.next=11,dt({Vue:u["default"],store:t});case 11:e.t1=e.sent,e.next=15;break;case 14:e.t1=dt;case 15:return n=e.t1,t.$router=n,a={el:"#q-app",router:n,store:t,render:function(e){return e(ye)}},e.abrupt("return",{app:a,store:t,router:n});case 19:case"end":return e.stop()}}),e)}))),ft.apply(this,arguments)}var mt=n("a925"),ht={failed:"Action failed",success:"Action was successful"},bt={"en-us":ht};u["default"].use(mt["a"]);var Qt=new mt["a"]({locale:"en-us",fallbackLocale:"en-us",messages:bt}),gt=function(e){var t=e.app;t.i18n=Qt},St=n("bc3a"),vt=n.n(St),wt=function(){var e=s()(o.a.mark((function e(t){var n;return o.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:n=t.Vue,n.prototype.$axios=vt.a;case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Mt=n("c149");function Tt(){return xt.apply(this,arguments)}function xt(){return xt=s()(o.a.mark((function e(){var t,n,a,r,s,c,i,l,d;return o.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,pt();case 2:t=e.sent,n=t.app,a=t.store,r=t.router,s=!0,c=function(e){s=!1,window.location.href=e},i=window.location.href.replace(window.location.origin,""),l=[gt,wt,Mt["b"]],d=0;case 11:if(!(!0===s&&d<l.length)){e.next=29;break}if("function"===typeof l[d]){e.next=14;break}return e.abrupt("continue",26);case 14:return e.prev=14,e.next=17,l[d]({app:n,router:r,store:a,Vue:u["default"],ssrContext:null,redirect:c,urlPath:i});case 17:e.next=26;break;case 19:if(e.prev=19,e.t0=e["catch"](14),!e.t0||!e.t0.url){e.next=24;break}return window.location.href=e.t0.url,e.abrupt("return");case 24:return console.error("[Quasar] boot error:",e.t0),e.abrupt("return");case 26:d++,e.next=11;break;case 29:if(!1!==s){e.next=31;break}return e.abrupt("return");case 31:new u["default"](n);case 32:case"end":return e.stop()}}),e,null,[[14,19]])}))),xt.apply(this,arguments)}Tt()},"7e6d":function(e,t,n){},c149:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var a=n("522d"),o=n("74ca"),r=n("478e"),s=n("2bf2"),u=Object(r["a"])({uri:"http://localhost:8082/query"}),c=new s["a"],i=new o["a"]({link:u,cache:c,connectToDevTools:!0,request:function(e){e.setContext({ContentType:"application/x-www-form-urlencoded;charset=UTF-8",headers:{authorization:sessionStorage.getItem("token")||null,ContentType:"application/x-www-form-urlencoded;charset=UTF-8"}})}}),l=new a["a"]({defaultClient:i,errorHandler:function(e){var t=e.graphQLErrors,n=e.networkError;t&&t.map((function(e){var t=e.message,n=e.locations,a=e.path;return console.log("[GraphQL error]: Message: ".concat(t,", Location: ").concat(n,", Path: ").concat(a))})),n&&console.log("[Network error]: ".concat(n))}});t["b"]=function(e){var t=e.app,n=e.Vue;n.use(a["a"]),t.apolloProvider=l}}},[[0,4,0]]]);