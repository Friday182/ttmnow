(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["app"],{0:function(e,t,n){e.exports=n("2f39")},"2f39":function(e,t,n){"use strict";n.r(t);var a=n("967e"),o=n.n(a),r=(n("a481"),n("96cf"),n("fa84")),u=n.n(r),s=(n("5c7d"),n("35fc"),n("7d6e"),n("e54f"),n("62f2"),n("7e6d"),n("2b0e")),c=n("b05d"),i=n("cb32"),l=n("58a8"),d=n("9c40"),p=n("6f48"),f=n("880c"),m=n("32a7"),b=n("62cd"),h=n("f09f"),g=n("a370"),Q=n("4b7e"),S=n("b047"),v=n("8f8e"),w=n("24e8"),T=n("f2cc"),M=n("07d0"),y=n("0378"),k=n("9898"),x=n("0016"),L=n("6ab5"),D=n("033f"),C=n("e208"),q=n("27f9"),P=n("068f"),A=n("497d"),I=n("4d5a"),O=n("6b1d"),U=n("4e73"),j=n("9f0a"),E=n("c7a0"),H=n("42a1"),V=n("2ea3"),B=n("d3ab"),J=n("3786"),N=n("7867"),R=n("4983"),$=n("eb85"),F=n("2c91"),G=n("8562"),_=n("9149"),z=n("9564"),K=n("7f41"),W=n("65c6"),X=n("6ac5"),Y=n("429b"),Z=n("7460"),ee=n("adad"),te=n("823b"),ne=n("eaac"),ae=n("357e"),oe=n("bd08"),re=n("db86"),ue=n("05c0"),se=n("714f"),ce=n("7f67"),ie=n("2a19"),le=n("18d6"),de=n("a639");s["default"].use(c["a"],{config:{},components:{QAvatar:i["a"],QBadge:l["a"],QBtn:d["a"],QBtnToggle:p["a"],QCarousel:f["a"],QCarouselControl:m["a"],QCarouselSlide:b["a"],QCard:h["a"],QCardSection:g["a"],QCardActions:Q["a"],QChip:S["a"],QCheckbox:v["a"],QDialog:w["a"],QDrawer:T["a"],QFooter:M["a"],QForm:y["a"],QHeader:k["a"],QIcon:x["a"],QItem:L["a"],QItemSection:D["a"],QItemLabel:C["a"],QInput:q["a"],QImg:P["a"],QList:A["a"],QLayout:I["a"],QLinearProgress:O["a"],QMenu:U["a"],QOptionGroup:j["a"],QPageContainer:E["a"],QPopupEdit:H["a"],QPage:V["a"],QPageSticky:B["a"],QRadio:J["a"],QRouteTab:N["a"],QScrollArea:R["a"],QSeparator:$["a"],QSpace:F["a"],QSplitter:G["a"],QSpinnerHourglass:_["a"],QToggle:z["a"],QTree:K["a"],QToolbar:W["a"],QToolbarTitle:X["a"],QTabs:Y["a"],QTab:Z["a"],QTabPanels:ee["a"],QTabPanel:te["a"],QTable:ne["a"],QTh:ae["a"],QTr:oe["a"],QTd:re["a"],QTooltip:ue["a"]},directives:{Ripple:se["a"],ClosePopup:ce["a"]},plugins:{Notify:ie["a"],LocalStorage:le["a"],SessionStorage:de["a"]}});var pe=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"q-app"}},[n("router-view")],1)},fe=[],me={name:"App",created:function(){}},be=me,he=n("2877"),ge=Object(he["a"])(be,pe,fe,!1,null,null,null),Qe=ge.exports,Se=n("2f62");function ve(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{key:"store"};return function(t){var n=JSON.parse(sessionStorage.getItem(e.key));n&&t.replaceState(n),n=null,t.subscribe((function(t,n){sessionStorage.setItem(e.key,JSON.stringify(n))}))}}n("f751");var we={student:{id:0,mentorId:0,name:"",age:0,city:"",country:"",school:"",stickers:0,stars:0,membershipActive:!1,membershipDate:"",expireDate:"",lastLoginDate:"",levels:"",assignment:"",stickerLog:[]}},Te={updateStudent:function(e,t){Object.assign(e.student,t)}},Me={updateStudent:function(e,t){var n=e.commit;n("updateStudent",t)}},ye={currentStudent:function(e){return e.student}},ke={namespaced:!0,state:we,mutations:Te,actions:Me,getters:ye},xe={mentor:{mentorEmail:"",students:[]}},Le={setMentor:function(e,t){Object.assign(e.mentor,t)},mentorAddStudent:function(e,t){e.mentor.students.push(t)},mentorDelStudent:function(e,t){for(var n=0;n<e.mentor.students.length;n++)e.mentor.students[n].id===t&&e.mentor.students.splice(n,1)}},De={},Ce={currentMentor:function(e){return e.mentor}},qe={namespaced:!0,state:xe,mutations:Le,actions:De,getters:Ce},Pe={currentUser:{mentorEmail:"",sessionLogin:""}},Ae={updateUser:function(e,t){Object.assign(e.currentUser,t)}},Ie={updateUser:function(e,t){var n=e.commit;n("updateUser",t)}},Oe={currentUser:function(e){return e.currentUser}},Ue={namespaced:!0,state:Pe,mutations:Ae,actions:Ie,getters:Oe},je={localMentors:[{email:"",token:"",letter:"",lastSigninDate:""}]},Ee={updateMentors:function(e,t){e.localMentors=t},removeMentor:function(e,t){e.localMentors[t]&&e.localMentors.splice(t,1)},addMentor:function(e,t){e.localMentors.push(t)},updateMentorDate:function(e,t,n){e.localMentors[t]&&(e.localMentors[t].lastSigninDate=Date())}},He={updateLocalMentors:function(e,t){var n=e.commit;n("updateMentors",t)},removeLocalMentor:function(e,t){var n=e.commit;n("removeMentor",t)},addLocalMentor:function(e,t){var n=e.commit;n("addMentor",t)},updateLocalMentorDate:function(e,t){var n=e.commit;n("updateMentorDate",t)}},Ve={localMentors:function(e){return e.localMentors}},Be={namespaced:!0,state:je,mutations:Ee,actions:He,getters:Ve},Je={localStudents:[]},Ne={updateStudents:function(e,t){e.localStudents=t},removeStudent:function(e,t){e.localStudents[t]&&e.localStudents.splice(t,1)},addStudent:function(e,t){e.localStudents.push(t)},updateStudentDate:function(e,t,n){e.localStudents[t]&&(e.localStudents[t].lastSigninDate=Date())}},Re={updateLocalStudents:function(e,t){var n=e.commit;n("updateStudents",t)},removeLocalStudent:function(e,t){var n=e.commit;n("removeStudent",t)},addLocalStudent:function(e,t){var n=e.commit;n("addStudent",t)},updateLocalStudentDate:function(e,t){var n=e.commit;n("updateStudentDate",t)}},$e={localStudents:function(e){return e.localStudents}},Fe={namespaced:!0,state:Je,mutations:Ne,actions:Re,getters:$e},Ge=function(){return{questions:[{task:"",standardSec:0,answerType:"",questionType:"",questionText:"",chartType:"",option1:"",option2:"",option3:"",option4:"",answer1:"",answer2:"",answer3:"",answer4:"",answerText:"",helper:"",img1:"",img2:"",tag1:"",tag2:"",tip:""}]}},_e=Ge(),ze={setAllQuestions:function(e,t){e.questions=Object.assign([],t)},resetState:function(e){({questions:[{task:"",standardSec:0,answerType:"",questionType:"",questionText:"",chartType:"",option1:"",option2:"",option3:"",option4:"",answer1:"",answer2:"",answer3:"",answer4:"",answerText:"",helper:"",img1:"",img2:"",tag1:"",tag2:"",tip:""}]})}},Ke={setQuestions:function(e,t){var n=e.commit;n("setAllQuestions",t)},clearQuestions:function(e){var t=e.commit;t("resetState")}},We={getQuestions:function(e){return e.questions}},Xe={namespaced:!0,state:_e,mutations:ze,actions:Ke,getters:We};s["default"].use(Se["a"]);var Ye=ve(),Ze=function(){var e=new Se["a"].Store({modules:{student:ke,mentor:qe,currentUser:Ue,localMentors:Be,localStudents:Fe,questions:Xe},plugins:[Ye],strict:!1});return e},et=n("8c4f"),tt=[{path:"/",component:function(){return n.e("6dfd4c8a").then(n.bind(null,"f241"))},children:[{path:"",component:function(){return n.e("2d0e8be2").then(n.bind(null,"8b24"))}},{path:"StudentHome",component:function(){return Promise.all([n.e("57d0772d"),n.e("16fc0438")]).then(n.bind(null,"6076"))}},{path:"MentorHome",component:function(){return n.e("539c8e28").then(n.bind(null,"a9b0"))}},{path:"ShowTopics",component:function(){return Promise.all([n.e("57d0772d"),n.e("15d3b492")]).then(n.bind(null,"2aa6"))}},{path:"Membership",component:function(){return n.e("629b0a2b").then(n.bind(null,"168d"))}},{path:"KeyDate",component:function(){return n.e("2d0b361e").then(n.bind(null,"27ad"))}},{path:"*",component:function(){return n.e("4b47640d").then(n.bind(null,"e51e"))}}]}];tt.push({path:"*",component:function(){return n.e("4b47640d").then(n.bind(null,"e51e"))}});var nt=tt;s["default"].use(et["a"]);var at=function(){var e=new et["a"]({scrollBehavior:function(){return{x:0,y:0}},routes:nt,mode:"hash",base:""});return e},ot=function(){var e="function"===typeof Ze?Ze({Vue:s["default"]}):Ze,t="function"===typeof at?at({Vue:s["default"],store:e}):at;e.$router=t;var n={el:"#q-app",router:t,store:e,render:function(e){return e(Qe)}};return{app:n,store:e,router:t}},rt=n("a925"),ut={failed:"Action failed",success:"Action was successful"},st={"en-us":ut};s["default"].use(rt["a"]);var ct=new rt["a"]({locale:"en-us",fallbackLocale:"en-us",messages:st}),it=function(e){var t=e.app;t.i18n=ct},lt=n("bc3a"),dt=n.n(lt),pt=function(){var e=u()(o.a.mark((function e(t){var n;return o.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:n=t.Vue,n.prototype.$axios=dt.a;case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ft=n("522d"),mt=n("74ca"),bt=n("478e"),ht=n("2bf2"),gt=Object(bt["a"])({uri:"https://ttm2020.pythonanywhere.com/graphql"}),Qt=new ht["a"],St=new mt["a"]({link:gt,cache:Qt,connectToDevTools:!0,request:function(e){e.setContext({headers:{authorization:sessionStorage.getItem("token")||null}})}}),vt=new ft["a"]({defaultClient:St,errorHandler:function(e){var t=e.graphQLErrors,n=e.networkError;t&&t.map((function(e){var t=e.message,n=e.locations,a=e.path;return console.log("[GraphQL error]: Message: ".concat(t,", Location: ").concat(n,", Path: ").concat(a))})),n&&console.log("[Network error]: ".concat(n))}}),wt=function(e){var t=e.app,n=e.Vue;n.use(ft["a"]),t.apolloProvider=vt},Tt=ot(),Mt=Tt.app,yt=Tt.store,kt=Tt.router;function xt(){return Lt.apply(this,arguments)}function Lt(){return Lt=u()(o.a.mark((function e(){var t,n,a,r,u;return o.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t=!0,n=function(e){t=!1,window.location.href=e},a=window.location.href.replace(window.location.origin,""),r=[it,pt,wt],u=0;case 5:if(!(!0===t&&u<r.length)){e.next=23;break}if("function"===typeof r[u]){e.next=8;break}return e.abrupt("continue",20);case 8:return e.prev=8,e.next=11,r[u]({app:Mt,router:kt,store:yt,Vue:s["default"],ssrContext:null,redirect:n,urlPath:a});case 11:e.next=20;break;case 13:if(e.prev=13,e.t0=e["catch"](8),!e.t0||!e.t0.url){e.next=18;break}return window.location.href=e.t0.url,e.abrupt("return");case 18:return console.error("[Quasar] boot error:",e.t0),e.abrupt("return");case 20:u++,e.next=5;break;case 23:if(!1!==t){e.next=25;break}return e.abrupt("return");case 25:new s["default"](Mt);case 26:case"end":return e.stop()}}),e,null,[[8,13]])}))),Lt.apply(this,arguments)}xt()},"7e6d":function(e,t,n){}},[[0,"runtime","vendor"]]]);