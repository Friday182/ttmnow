(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[3],{0:function(e,t,n){e.exports=n("2f39")},"2f39":function(e,t,n){"use strict";n.r(t);var o=n("967e"),a=n.n(o),r=(n("a481"),n("96cf"),n("fa84")),s=n.n(r),u=(n("5c7d"),n("35fc"),n("7d6e"),n("e54f"),n("62f2"),n("7e6d"),n("2b0e")),c=n("b05d"),i=n("cb32"),l=n("58a8"),d=n("9c40"),f=n("6a67"),p=n("880c"),m=n("32a7"),g=n("62cd"),h=n("f09f"),b=n("a370"),Q=n("4b7e"),S=n("b047"),v=n("8f8e"),w=n("8169"),M=n("24e8"),x=n("9404"),D=n("d66b"),y=n("7ff0"),T=n("0378"),k=n("e359"),L=n("0016"),C=n("66e5"),A=n("4074"),P=n("0170"),q=n("27f9"),I=n("068f"),O=n("1c1c"),U=n("4d5a"),j=n("6b1d"),E=n("4e73"),z=n("9f0a"),V=n("09e3"),F=n("42a1"),H=n("9989"),N=n("de5e"),J=n("3b16"),B=n("3786"),K=n("7867"),R=n("4983"),G=n("eb85"),$=n("2c91"),_=n("8562"),W=n("9149"),X=n("ddd8"),Y=n("f531"),Z=n("87fe"),ee=n("b19c"),te=n("9564"),ne=n("7f41"),oe=n("65c6"),ae=n("6ac5"),re=n("429b"),se=n("7460"),ue=n("adad"),ce=n("823b"),ie=n("eaac"),le=n("357e"),de=n("bd08"),fe=n("db86"),pe=n("05c0"),me=n("714f"),ge=n("7f67"),he=n("b12a"),be=n("436b"),Qe=n("18d6"),Se=n("2a19"),ve=n("a639");u["default"].use(c["a"],{config:{},components:{QAvatar:i["a"],QBadge:l["a"],QBtn:d["a"],QBtnToggle:f["a"],QCarousel:p["a"],QCarouselControl:m["a"],QCarouselSlide:g["a"],QCard:h["a"],QCardSection:b["a"],QCardActions:Q["a"],QChip:S["a"],QCheckbox:v["a"],QChatMessage:w["a"],QDialog:M["a"],QDrawer:x["a"],QEditor:D["a"],QFooter:y["a"],QForm:T["a"],QHeader:k["a"],QIcon:L["a"],QItem:C["a"],QItemSection:A["a"],QItemLabel:P["a"],QInput:q["a"],QImg:I["a"],QList:O["a"],QLayout:U["a"],QLinearProgress:j["a"],QMenu:E["a"],QOptionGroup:z["a"],QPageContainer:V["a"],QPopupEdit:F["a"],QPage:H["a"],QPageSticky:N["a"],QPagination:J["a"],QRadio:B["a"],QRouteTab:K["a"],QScrollArea:R["a"],QSeparator:G["a"],QSpace:$["a"],QSplitter:_["a"],QSpinnerHourglass:W["a"],QSelect:X["a"],QStepper:Y["a"],QStep:Z["a"],QStepperNavigation:ee["a"],QToggle:te["a"],QTree:ne["a"],QToolbar:oe["a"],QToolbarTitle:ae["a"],QTabs:re["a"],QTab:se["a"],QTabPanels:ue["a"],QTabPanel:ce["a"],QTable:ie["a"],QTh:le["a"],QTr:de["a"],QTd:fe["a"],QTooltip:pe["a"]},directives:{Ripple:me["a"],ClosePopup:ge["a"]},plugins:{AppFullscreen:he["a"],Dialog:be["a"],LocalStorage:Qe["a"],Notify:Se["a"],SessionStorage:ve["a"]}});var we=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"q-app"}},[n("router-view")],1)},Me=[],xe={name:"App",created:function(){}},De=xe,ye=n("2877"),Te=Object(ye["a"])(De,we,Me,!1,null,null,null),ke=Te.exports,Le=n("2f62");function Ce(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{key:"store"};return function(t){var n=JSON.parse(sessionStorage.getItem(e.key));n&&t.replaceState(n),n=null,t.subscribe((function(t,n){sessionStorage.setItem(e.key,JSON.stringify(n))}))}}n("f751");var Ae={student:{gid:0,mentorId:0,name:"",age:0,city:"",country:"",school:"",stickers:0,stars:0,isMember:!1,membershipStart:"",membershipStop:"",lastLoginDate:"",subjects:[],quizzes:[],quizDone:!1,stickerLog:[],contacts:[]}},Pe={setStudent:function(e,t){Object.assign(e.student,t)},setAssignmentDone:function(e,t){if(t.English&&(e.student.subjects[1].Done=t.English),t.Math){console.log("assignmentDone Math - ",t);for(var n=0;n<e.student.subjects[0].Assignment.length;n++)if(t.Kp===e.student.subjects[0].Assignment[n].Kp){e.student.subjects[0].Assignment[n].Done=t.Math;break}}},setQuizDone:function(e,t){e.student.quizDone=t}},qe={updateStudent:function(e,t){var n=e.commit;n("setStudent",t)},updateAssignmentDone:function(e,t){var n=e.commit;n("setAssignmentDone",t)},updateQuizDone:function(e,t){var n=e.commit;n("setQuizDone",t)}},Ie={currentStudent:function(e){return e.student}},Oe={namespaced:!0,state:Ae,mutations:Pe,actions:qe,getters:Ie},Ue=(n("7f7f"),{mentor:{id:"",name:"",mentorEmail:"",refreshStudent:!1,contacts:[],students:[]}}),je={setMentor:function(e,t){Object.assign(e.mentor,t)},mentorAddStudent:function(e,t){console.log("add student in vuex: ",t),t.index=e.mentor.students.length,e.mentor.students.push(t);for(var n=0;n<e.mentor.students.length;n++)if(e.mentor.students[n].gid===t.gid){e.mentor.students[n]=t;break}},mentorDelStudent:function(e,t){for(var n=0;n<e.mentor.students.length;n++)e.mentor.students[n].name===t&&e.mentor.students.splice(n,1);for(var o=0;o<e.mentor.students.length;o++)e.mentor.students.index=o},setRefreshStudent:function(e,t){e.mentor.refreshStudent=t},setAssignment:function(e,t){console.log("find student - assignment: ",t.gid,t.newVal);for(var n=0;n<e.mentor.students.length;n++)e.mentor.students[n].gid===t.gid&&(e.mentor.students[n].assignment=t.newVal)},setStudentPw:function(e,t){for(var n=0;n<e.mentor.students.length;n++)e.mentor.students[n].gid===t.gid&&(e.mentor.students[n].password=t.newVal)}},Ee={},ze={currentMentor:function(e){return e.mentor}},Ve={namespaced:!0,state:Ue,mutations:je,actions:Ee,getters:ze},Fe={currentUser:{id:0,name:"",contacts:[],mentorEmail:"",sessionLogin:""}},He={updateUser:function(e,t){Object.assign(e.currentUser,t)}},Ne={updateUser:function(e,t){var n=e.commit;n("updateUser",t)}},Je={currentUser:function(e){return e.currentUser}},Be={namespaced:!0,state:Fe,mutations:He,actions:Ne,getters:Je},Ke={localMentors:[]},Re={updateMentors:function(e,t){e.localMentors=t},removeMentor:function(e,t){e.localMentors[t]&&e.localMentors.splice(t,1)},addMentor:function(e,t){e.localMentors.push(t)},updateMentorDate:function(e,t){e.localMentors[t]&&(e.localMentors[t].lastSigninDate=Date())}},Ge={updateLocalMentors:function(e,t){var n=e.commit;n("updateMentors",t)},removeLocalMentor:function(e,t){var n=e.commit;n("removeMentor",t)},addLocalMentor:function(e,t){var n=e.commit;n("addMentor",t)},updateLocalMentorDate:function(e,t){var n=e.commit;n("updateMentorDate",t)}},$e={localMentors:function(e){return e.localMentors},Mentor:function(e){return function(t){return e.localMentors[t]?e.localMentors[t]:""}}},_e={namespaced:!0,state:Ke,mutations:Re,actions:Ge,getters:$e},We={localStudents:[]},Xe={updateStudents:function(e,t){e.localStudents=t},removeStudent:function(e,t){e.localStudents[t]&&e.localStudents.splice(t,1)},addStudent:function(e,t){e.localStudents.push(t)},updateStudentDate:function(e,t,n){e.localStudents[t]&&(e.localStudents[t].lastSigninDate=Date())}},Ye={updateLocalStudents:function(e,t){var n=e.commit;n("updateStudents",t)},removeLocalStudent:function(e,t){var n=e.commit;n("removeStudent",t)},addLocalStudent:function(e,t){var n=e.commit;n("addStudent",t)},updateLocalStudentDate:function(e,t){var n=e.commit;n("updateStudentDate",t)}},Ze={localStudents:function(e){return e.localStudents}},et={namespaced:!0,state:We,mutations:Xe,actions:Ye,getters:Ze},tt=function(){return{questions:[{QueIdx:0,Kp:"",StdSec:0,AnswerType:"",QuestionType:"",UpTexts:[],DownTexts:[],Formula:[],Options:[],Answers:[],Tags:[],ChartType:"",Charts:[],Clocks:[],Tables:[],Shapes:[],AnswerText:"",Helper:!1,Imgs:[],Tips:[],Choice:""}]}},nt=tt(),ot={setAllQuestions:function(e,t){e.questions=Object.assign([],t)},resetState:function(e){e.questions=[]},setQueChoice:function(e,t){e.questions[t.index]&&(e.questions[t.index].Choice=t.choice)}},at={setQuestions:function(e,t){var n=e.commit;n("setAllQuestions",t)},clearQuestions:function(e){var t=e.commit;t("resetState")}},rt={getQuestions:function(e){return e.questions}},st={namespaced:!0,state:nt,mutations:ot,actions:at,getters:rt},ut=function(){return{logs:[]}},ct=ut(),it={copyLogs:function(e,t){e.logs=t},addLog:function(e,t){for(var n=0;n<t.length;n++)e.logs.push(t[n])},delLog:function(e,t){for(var n=0;n<e.logs.length;n++)e.logs[n].id===t&&e.logs.splice(n,1)},tidyLog:function(e,t){if(e.logs.length>180&&e.logs.splice(180,e.logs.length-180),e.logs[0].gid===t){var n=JSON.stringify(e.logs);localStorage.setItem(t+"-logs",n)}}},lt={getLogs:function(e){return e.logs},getLastLogId:function(e){return e.logs.length>0?e.logs[e.logs.length-1].id:0}},dt={namespaced:!0,state:ct,mutations:it,getters:lt},ft=function(){return{desc:{MA:[],MB:[],MC:[],MD:[],ME:[],MF:[],MG:[],MH:[],MI:[]}}},pt=ft(),mt={copyDesc:function(e,t){e.desc=t},saveDesc:function(e){var t=JSON.stringify(e.desc);localStorage.setItem("kpDescriptions",t)}},gt={getDesc:function(e){return e.desc}},ht={namespaced:!0,state:pt,mutations:mt,getters:gt};u["default"].use(Le["a"]);var bt=Ce(),Qt=function(){var e=new Le["a"].Store({modules:{student:Oe,mentor:Ve,currentUser:Be,localMentors:_e,localStudents:et,questions:st,logs:dt,desc:ht},plugins:[bt],strict:!1});return e},St=n("8c4f"),vt=[{path:"/",component:function(){return Promise.all([n.e(0),n.e(1),n.e(9)]).then(n.bind(null,"f241"))},children:[{path:"",component:function(){return n.e(13).then(n.bind(null,"8b24"))}},{path:"StudentHome",component:function(){return Promise.all([n.e(0),n.e(1),n.e(5)]).then(n.bind(null,"6076"))}},{path:"MentorHome",component:function(){return Promise.all([n.e(0),n.e(1),n.e(6)]).then(n.bind(null,"a9b0"))}},{path:"ShowTopics",component:function(){return Promise.all([n.e(0),n.e(1),n.e(10)]).then(n.bind(null,"2aa6"))}},{path:"Membership",component:function(){return n.e(7).then(n.bind(null,"168d"))}},{path:"Products",component:function(){return n.e(8).then(n.bind(null,"6eb0"))}},{path:"Curriculum",component:function(){return n.e(12).then(n.bind(null,"0946"))}},{path:"SchoolDic",component:function(){return Promise.all([n.e(0),n.e(16)]).then(n.bind(null,"7245"))}},{path:"KeyDate",component:function(){return n.e(14).then(n.bind(null,"27ad"))}},{path:"Contact",component:function(){return n.e(11).then(n.bind(null,"c3df"))}},{path:"UserManual",component:function(){return n.e(17).then(n.bind(null,"912d"))}},{path:"QandA",component:function(){return n.e(15).then(n.bind(null,"7b7d"))}},{path:"*",component:function(){return n.e(2).then(n.bind(null,"e51e"))}}]}];vt.push({path:"*",component:function(){return n.e(2).then(n.bind(null,"e51e"))}});var wt=vt;u["default"].use(St["a"]);var Mt=function(){var e=new St["a"]({scrollBehavior:function(){return{x:0,y:0}},routes:wt,mode:"hash",base:""});return e},xt=function(){return Dt.apply(this,arguments)};function Dt(){return Dt=s()(a.a.mark((function e(){var t,n,o;return a.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if("function"!==typeof Qt){e.next=6;break}return e.next=3,Qt({Vue:u["default"]});case 3:e.t0=e.sent,e.next=7;break;case 6:e.t0=Qt;case 7:if(t=e.t0,"function"!==typeof Mt){e.next=14;break}return e.next=11,Mt({Vue:u["default"],store:t});case 11:e.t1=e.sent,e.next=15;break;case 14:e.t1=Mt;case 15:return n=e.t1,t.$router=n,o={el:"#q-app",router:n,store:t,render:function(e){return e(ke)}},e.abrupt("return",{app:o,store:t,router:n});case 19:case"end":return e.stop()}}),e)}))),Dt.apply(this,arguments)}var yt=n("a925"),Tt={failed:"Action failed",success:"Action was successful"},kt={"en-us":Tt};u["default"].use(yt["a"]);var Lt=new yt["a"]({locale:"en-us",fallbackLocale:"en-us",messages:kt}),Ct=function(e){var t=e.app;t.i18n=Lt},At=n("bc3a"),Pt=n.n(At),qt=function(){var e=s()(a.a.mark((function e(t){var n;return a.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:n=t.Vue,n.prototype.$axios=Pt.a;case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),It=n("c149"),Ot=n("7591"),Ut=n.n(Ot);function jt(){return Et.apply(this,arguments)}function Et(){return Et=s()(a.a.mark((function e(){var t,n,o,r,s,c,i,l,d;return a.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,xt();case 2:t=e.sent,n=t.app,o=t.store,r=t.router,s=!0,c=function(e){s=!1,window.location.href=e},i=window.location.href.replace(window.location.origin,""),l=[Ct,qt,It["b"],void 0],d=0;case 11:if(!(!0===s&&d<l.length)){e.next=29;break}if("function"===typeof l[d]){e.next=14;break}return e.abrupt("continue",26);case 14:return e.prev=14,e.next=17,l[d]({app:n,router:r,store:o,Vue:u["default"],ssrContext:null,redirect:c,urlPath:i});case 17:e.next=26;break;case 19:if(e.prev=19,e.t0=e["catch"](14),!e.t0||!e.t0.url){e.next=24;break}return window.location.href=e.t0.url,e.abrupt("return");case 24:return console.error("[Quasar] boot error:",e.t0),e.abrupt("return");case 26:d++,e.next=11;break;case 29:if(!1!==s){e.next=31;break}return e.abrupt("return");case 31:new u["default"](n);case 32:case"end":return e.stop()}}),e,null,[[14,19]])}))),Et.apply(this,arguments)}u["default"].use(Ut.a),jt()},"7e6d":function(e,t,n){},c149:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var o=n("522d"),a=n("74ca"),r=n("478e"),s=n("2bf2"),u=Object(r["a"])({uri:"http://localhost:8083/query"}),c=new s["a"],i=new a["a"]({link:u,cache:c,connectToDevTools:!0,defaultOptions:{query:{fetchPolicy:"network-only"}},request:function(e){e.setContext({ContentType:"application/x-www-form-urlencoded;charset=UTF-8",headers:{authorization:"sessionStorage",ContentType:"application/x-www-form-urlencoded;charset=UTF-8"}})}}),l=new o["a"]({defaultClient:i,errorHandler:function(e){var t=e.graphQLErrors,n=e.networkError;t&&t.map((function(e){var t=e.message,n=e.locations,o=e.path;return console.log("[GraphQL error]: Message: ".concat(t,", Location: ").concat(n,", Path: ").concat(o))})),n&&console.log("[Network error]: ".concat(n))}});t["b"]=function(e){var t=e.app,n=e.Vue;n.use(o["a"]),t.apolloProvider=l}}},[[0,4,0]]]);