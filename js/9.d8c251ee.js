(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[9],{"768d":function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("q-form",[n("q-dialog",{attrs:{persistent:""},model:{value:t.currentShowSignin,callback:function(e){t.currentShowSignin=e},expression:"currentShowSignin"}},[n("q-card",{staticStyle:{width:"450px","max-width":"80vw"}},[n("q-card-actions",{attrs:{align:"right"}},[n("div",{staticClass:"row"},[n("q-space"),n("q-btn",{attrs:{flat:"",dense:"",icon:"cancel",color:"primary"},on:{click:function(e){return t.signinClose(!1)}}})],1)]),n("q-card-section",{attrs:{align:"center"}},[n("q-btn-toggle",{attrs:{push:"",dense:"",glossy:"","toggle-color":"primary",options:[{label:"Signin",value:"signin"},{label:"Signup",value:"signup"}]},model:{value:t.signOpt,callback:function(e){t.signOpt=e},expression:"signOpt"}})],1),n("q-card-section",{staticClass:"q-px-xl q-mx-xl q-mt-lg"},[n("q-input",{ref:"emailInput",attrs:{rounded:"",outlined:"",dense:"",autofocus:"",type:"email",color:"green",label:"E-Mail:"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.addByEnter(0)}},scopedSlots:t._u([{key:"append",fn:function(){return[n("q-icon",{attrs:{name:"email",color:"orange"}})]},proxy:!0}]),model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1),n("q-card-section",{staticClass:"q-px-xl q-mx-xl q-mb-md"},[n("q-input",{ref:"pwInput",attrs:{"q-ma-lg":"",rounded:"",outlined:"",dense:"",color:"green",label:"Password:",type:t.isPwd?"password":"text",hint:"* At least 6 mixed letters and numbers"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.addByEnter(1)}},scopedSlots:t._u([{key:"append",fn:function(){return[n("q-icon",{staticClass:"cursor-pointer",attrs:{color:"blue",name:t.isPwd?"visibility_off":"visibility"},on:{click:function(e){t.isPwd=!t.isPwd}}})]},proxy:!0}]),model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1),n("q-card-actions",{staticClass:"bg-white text-teal",attrs:{align:"center"}},[n("q-btn",{attrs:{label:"OK",dense:""},on:{click:function(e){return t.submitSigninup()}}})],1),n("q-card-actions",{staticClass:"bg-white text-teal",attrs:{align:"center"}},[n("q-checkbox",{attrs:{"keep-color":"","left-label":"",dense:"",color:"blue",label:"Remember you login details on this computer?"},model:{value:t.rememberUser,callback:function(e){t.rememberUser=e},expression:"rememberUser"}})],1),n("q-card-actions",{staticClass:"text-blue",attrs:{align:"center"}},[n("signin-list",{attrs:{"user-type":t.listName},on:{listSelected:t.toMentorLogin}})],1)],1)],1),n("alert-msg",{attrs:{active:t.alert,msg:t.alertMsg},on:{cancelAlert:t.alertClose}})],1)},s=[],i=(n("8e6e"),n("8a81"),n("ac6a"),n("cadf"),n("06db"),n("456d"),n("c47a")),r=n.n(i),a=n("2f62"),l=n("63fb"),c=(n("551c"),n("bc3a")),u=n.n(c);u.a.defaults.baseURL="http://127.0.0.1:8083/",u.a.interceptors.request.use((function(t){return console.log(t),localStorage.getItem("access_token"),t.headers["Content-Type"]="application/x-www-form-urlencoded;charset=UTF-8",t}),(function(t){return console.log(t),Promise.reject(t)}));var d=function(t){return u.a.post("/login",t)};function p(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function m(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?p(Object(n),!0).forEach((function(e){r()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var g={name:"Signinup",components:{"alert-msg":n("a5aa").default,"signin-list":n("bd44").default},props:{showsignin:{type:Boolean}},data:function(){return{listName:"mentor",signOpt:"signin",rememberUser:!0,password:"",isPwd:!0,email:"",token:"",alert:!1,alertMsg:""}},computed:m({},Object(a["c"])("localMentors",["localMentors"]),{currentShowSignin:function(){return this.showsignin},localMentorList:function(){return this.localMentors?this.localMentors:[]}}),mounted:function(){console.log("signin up mounted")},methods:m({},Object(a["b"])("currentUser",["updateUser"]),{},Object(a["b"])("localMentors",["removeLocalMentor","addLocalMentor","updateLocalMentorDate"]),{submitSigninup:function(){if(""!==this.email&&""!==this.password){for(var t=!0,e=0;e<this.localMentorList.length;e++)if(this.localMentorList[e].email===this.email&&"NA"!==this.localMentorList[e].token){t=!1,this.token=this.localMentorList[e].token,this.verifyToken();break}!0===t&&("signin"===this.signOpt?(console.log("do sign in for - "+this.email+" pw - "+this.password),this.submitSignin()):"signup"===this.signOpt&&(console.log("do sign up for - "+this.email+" pw - "+this.password),this.submitSignup()))}},submitSigninAxio:function(){var t=this;d({username:this.email,password:this.password}).then((function(e){t.info=e,200===e.data.code?(t.updateLocalMentor(e.data.token),console.log("Axios get token ok - ",e.data.token)):console.log("Axios get token failed")})).catch((function(t){console.log(t)}))},submitSignin:function(){var t=this;this.$apollo.mutate({mutation:l["h"],variables:{email:this.email,password:this.password}}).then((function(e){e.data.GetToken?(console.log("Get Token for mentor - "+t.email),t.updateLocalMentor(e.data.GetToken)):(t.alertMsg=e.errors.message,t.alert=!0)})).catch((function(e){t.alertMsg="Invalid Name or Password.",t.alert=!0,console.log(e)}))},submitSignup:function(){var t=this;this.$apollo.mutate({mutation:l["l"],variables:{email:this.email,password:this.password}}).then((function(e){e.data.Signup.ID?(console.log("Signup mentor email - "+e.data.Signup.email),t.submitSignin()):(t.alertMsg=e.errors.message,t.alert=!0)})).catch((function(e){t.alertMsg="ERROR when registered.",t.alert=!0,console.log(e)}))},verifyToken:function(){var t=this;sessionStorage.removeItem("token"),this.$apollo.mutate({mutation:l["o"],variables:{token:this.token}}).then((function(e){e.data.VerifyToken?(console.log("verified token for mentor email - "+e.data.VerifyToken),t.updateLocalMentor(t.token)):(t.alertMsg=e.errors.message,t.alert=!0)})).catch((function(e){t.alertMsg="Invalid Name or Password.",t.alert=!0,console.log(e)}))},toMentorLogin:function(t){this.email=this.localMentorList[t].email,this.token=this.localMentorList[t].token,this.verifyToken()},updateLocalMentor:function(t){var e=!0;if(this.localMentorList)for(var n=0;n<this.localMentorList.length;n++)this.localMentorList[n].email===this.email&&(e=!1,!1===this.rememberUser?this.removeLocalMentor(n):(this.localMentorList[n].token!==t&&(this.localMentorList[n].token=t),this.updateLocalMentorDate(n)));if(!0===e&&!0===this.rememberUser&&this.addLocalMentor({gId:0,email:this.email,token:t,letter:this.email[0],lastSigninDate:Date()}),this.localMentorList){var o=JSON.stringify(this.localMentorList);localStorage.setItem("mentors",o)}sessionStorage.setItem("token",t),this.updateUser({mentorEmail:this.email,sessionLogin:"mentor"}),this.signinClose(!0)},addByEnter:function(t){""!==this.email&&""!==this.password?this.submitSigninup():""!==this.email?this.$refs.pwInput.focus():this.$refs.emailInput.focus()},alertClose:function(){this.alert=!1,this.alertMsg=""},signinClose:function(t){this.email="",this.password="",this.$emit("signinClose",t)}})},h=g,f=n("2877"),b=Object(f["a"])(h,o,s,!1,null,null,null);e["default"]=b.exports},a858:function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("q-form",[n("q-dialog",{attrs:{persistent:""},model:{value:t.showlogin,callback:function(e){t.showlogin=e},expression:"showlogin"}},[n("q-card",{staticStyle:{width:"450px","max-width":"80vw"}},[n("q-card-actions",{attrs:{align:"right"}},[n("div",{staticClass:"row"},[n("q-space"),n("q-btn",{attrs:{flat:"",dense:"",icon:"cancel",color:"primary"},on:{click:function(e){return t.signinClose()}}})],1)]),n("q-card-section",{attrs:{align:"center"}},[n("q-btn",{staticStyle:{color:"green"},attrs:{flat:"","no-caps":"",dense:"",size:"lg",label:"Student Login"}})],1),n("q-card-section",{staticClass:"q-px-xl q-mx-xl q-mt-sm"},[n("q-input",{ref:"nameInput",attrs:{rounded:"",outlined:"",autofocus:"",color:"green",label:"User Nmae:"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.addByEnter(0)}},scopedSlots:t._u([{key:"append",fn:function(){return[n("q-icon",{attrs:{name:"face",color:"orange"}})]},proxy:!0}]),model:{value:t.loginName,callback:function(e){t.loginName=e},expression:"loginName"}})],1),n("q-card-section",{staticClass:"q-px-xl q-mx-xl q-mb-md"},[n("q-input",{ref:"pwInput",attrs:{"q-ma-md":"",rounded:"",outlined:"",color:"green",label:"Password:",type:t.isPwd?"password":"text",hint:"* At least 6 mixed letters and numbers"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.addByEnter(1)}},scopedSlots:t._u([{key:"append",fn:function(){return[n("q-icon",{staticClass:"cursor-pointer",attrs:{color:"blue",name:t.isPwd?"visibility_off":"visibility"},on:{click:function(e){t.isPwd=!t.isPwd}}})]},proxy:!0}]),model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1),n("q-card-actions",{staticClass:"bg-white text-teal",attrs:{align:"center"}},[n("q-btn",{attrs:{label:"OK"},on:{click:function(e){return t.toStudentLogin(5e3)}}})],1),n("q-card-actions",{staticClass:"bg-white text-teal",attrs:{align:"center"}},[n("q-checkbox",{attrs:{"keep-color":"","left-label":"",color:"blue",label:"Remember you login details on this computer?"},model:{value:t.rememberUser,callback:function(e){t.rememberUser=e},expression:"rememberUser"}})],1),n("q-card-actions",{staticClass:"text-blue",attrs:{align:"center"}},[n("signin-list",{attrs:{"user-type":t.listName},on:{listSelected:t.toStudentLogin}})],1)],1),n("alert-msg",{attrs:{active:t.alert,msg:t.alertMsg},on:{cancelAlert:t.alertClose}})],1)],1)},s=[],i=(n("8e6e"),n("8a81"),n("ac6a"),n("cadf"),n("06db"),n("456d"),n("7f7f"),n("c47a")),r=n.n(i),a=n("2f62"),l=n("63fb");function c(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?c(Object(n),!0).forEach((function(e){r()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var d={name:"StudentLogin",components:{"alert-msg":n("a5aa").default,"signin-list":n("bd44").default},props:{showlogin:Boolean},data:function(){return{listName:"student",alert:!1,alertMsg:"",rememberUser:!0,password:"",isPwd:!0,skipQueryStudent:!0,token:"",loginName:"",mockStudents:[{id:1,mentorEmail:"",name:"Lucas Yin",password:"",token:""},{id:2,mentorEmail:"",name:"Jamie Yin",password:"",token:""},{id:3,mentorEmail:"",name:"Juncheng Yin",password:"",token:""}],student:{mentorId:0,mentorEmail:"",name:"",age:0,city:"",country:"",school:"",stickers:0,stars:0,membershipDate:"",expireDate:"",lastLoginDate:"",subjects:[],stickerLog:[],contacts:[]}}},computed:u({},Object(a["c"])("localStudents",["localStudents"]),{localStudentList:function(){return this.localStudents.length>0?this.localStudents:[]}}),mounted:function(){},methods:u({},Object(a["b"])("student",["updateStudent"]),{},Object(a["b"])("currentUser",["updateUser"]),{},Object(a["d"])("localStudents",["removeStudent","addStudent"]),{},Object(a["d"])("logs",["copyLogs"]),{},Object(a["b"])("localStudents",["updateLocalStudents","updateLocalStudentDate"]),{addByEnter:function(t){""!==this.loginName&&""!==this.password?this.studentLogin():""!==this.loginName?this.$refs.pwInput.focus():this.$refs.nameInput.focus()},toStudentLogin:function(t){console.log("login/read student data for key - "+t),5e3!==t?(this.loginName=this.localStudentList[t].name,this.password=this.localStudentList[t].password,this.studentLogin()):this.loginName&&this.password?this.studentLogin():console.log("Invalid name or password")},studentLogin:function(){var t=this;this.$apollo.mutate({mutation:l["m"],variables:{name:this.loginName,password:this.password,token:""}}).then((function(e){e.errors?console.log("reponse error",e.errors):e.data.StudentLogin.Gid?(console.log("studentLogin for - "+e.data.StudentLogin.Name),t.setCurrentStudent(e.data.StudentLogin)):(t.alertMsg=e.errors.message,t.alert=!0)})).catch((function(e){t.alertMsg="Invalid Name or Password, Check with your mentor please.",t.alert=!0,console.log(e)}))},setCurrentStudent:function(t){this.skipQueryStudent=!0,""!==t.MentorEmail?(console.log("Write current student to store - "+t.Name),this.updateStudent({gid:t.Gid,mentorEmail:t.MentorEmail,name:t.Name,age:t.Age,city:t.City,country:t.Country,school:t.School,stickers:t.Stickers,stars:t.Stars,membershipActive:t.IsMember,membershipDate:t.MembershipStart,expireDate:t.MembershipStop,lastLoginDate:t.LastLoginTime,subjects:JSON.parse(t.SubjectState),quizzes:t.Quiz,quizDone:!1,stickerLog:t.StickerLog,contacts:t.Contacts}),this.updateUser({id:t.Gid,name:t.Name,contacts:t.Contacts,sessionLogin:"student"}),this.saveUserLocal(),this.loadTaskLogs(t.Gid),"/StudentHome"!==this.$route.path&&this.$router.push("/StudentHome"),this.signinClose()):console.log("something wrong")},saveUserLocal:function(){for(var t=!0,e=0;e<this.localStudentList.length;e++)this.localStudentList[e].name===this.loginName&&(console.log("find student in localStudentList name - "+this.loginName),t=!1,!1===this.rememberUser?this.removeStudent(e):this.updateLocalStudentDate(e));!0===t&&!0===this.rememberUser&&this.addStudent({name:this.loginName,password:this.password,letter:this.loginName[0],lastSigninDate:Date()});var n=JSON.stringify(this.localStudentList);console.log("save in local students - "+n),localStorage.setItem("students",n)},loadTaskLogs:function(t){var e=t+"-logs",n=localStorage.getItem(e),o=[];if(this.copyLogs(o),console.log("localstorage logs - ",e,"logs: ",n),n){var s=JSON.parse(n);s.length>0&&this.copyLogs(s)}},signinClose:function(){this.loginName="",this.password="",this.$emit("studentLoginClose")},alertClose:function(){this.alert=!1,this.alertMsg=""}})},p=d,m=n("2877"),g=Object(m["a"])(p,o,s,!1,null,null,null);e["default"]=g.exports},bd44:function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"q-pa-md",staticStyle:{width:"100%"}},[t.useList?n("q-toolbar",{staticClass:"bg-white text-blue",attrs:{dense:""}},[n("q-toolbar-title",[t._v("Sign in as:")])],1):t._e(),n("q-separator",{attrs:{spaced:"",inset:""}}),n("q-list",t._l(t.localUserList,(function(e,o){return n("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],key:o,staticClass:"q-my-sm",attrs:{dense:"",clickable:""},on:{click:function(e){return t.selected(o)}}},[n("q-item-section",{attrs:{avatar:""}},[n("q-avatar",{attrs:{color:"primary","text-color":"white"}},[t._v("\n          "+t._s(e.letter)+"\n        ")])],1),n("q-item-section",["mentor"==t.userType?n("q-item-label",[t._v("\n          "+t._s(e.email)+"\n        ")]):"student"==t.userType?n("q-item-label",[t._v("\n          "+t._s(e.name)+"\n        ")]):n("q-item-label",[t._v("\n          Not Available\n        ")]),n("q-item-label",{staticStyle:{size:"xs"},attrs:{caption:"",lines:"1"}},[t._v("\n          Last time signin at: "+t._s(e.lastSigninDate)+"\n        ")])],1),n("q-item-section",{attrs:{side:""}},[n("q-btn",{attrs:{round:"",flat:""},on:{click:function(e){return t.deleteFromList(o)}}},[n("q-icon",{attrs:{name:"cancel",color:"red"}})],1)],1)],1)})),1)],1)},s=[],i=(n("8e6e"),n("8a81"),n("ac6a"),n("cadf"),n("06db"),n("456d"),n("c47a")),r=n.n(i),a=n("2f62");function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var u={name:"SigninList",props:{userType:{type:String,default:""}},data:function(){return{isDelete:!1}},computed:c({},Object(a["c"])("localMentors",["localMentors"]),{},Object(a["c"])("localStudents",["localStudents"]),{localUserList:function(){return"mentor"===this.userType&&this.localMentors?this.localMentors:"student"===this.userType&&this.localStudents?this.localStudents:[]},useList:function(){return this.localUserList.length>0}}),mounted:function(){this.localUserList?(console.log("signin List mounted user - "+this.userType),console.log("signin List mounted user - "+this.localUserList.length)):console.log("Not local storage user found.")},methods:c({},Object(a["d"])("localMentors",["removeMentor"]),{},Object(a["d"])("localStudents",["removeStudent"]),{selected:function(t){!1===this.isDelete?(console.log("selected - "+t),this.$emit("listSelected",t)):this.isDelete=!1},deleteFromList:function(t){this.isDelete=!0,console.log("delete - "+t),"mentor"===this.userType?this.removeMentor(t):"student"===this.userType&&this.removeStudent(t)}})},d=u,p=n("2877"),m=Object(p["a"])(d,o,s,!1,null,null,null);e["default"]=m.exports},f241:function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("q-layout",{attrs:{view:"hHh lpR fFf"}},[n("q-header",{attrs:{elevated:""}},[n("q-toolbar",{staticClass:"bg-white text-red"},[n("q-toolbar-title",[n("router-link",{attrs:{to:"/"}},[t.leftDrawerOpen?n("q-img",{staticStyle:{height:"100px","max-width":"135px"},attrs:{"spinner-color":"white",src:"statics/logo.jpg"}}):n("q-img",{staticStyle:{height:"45px","max-width":"62px"},attrs:{"spinner-color":"white",src:"statics/logo.jpg"}})],1)],1),t.leftDrawerOpen?n("q-chip",{staticStyle:{font:"italic bold 250% Cursive"},attrs:{color:"white","text-color":"red"}},[t._v("\n        Be Better Everyday!\n      ")]):t._e(),n("q-space"),"mentor"==t.sessionLogin?n("div",{staticClass:"q-mx-sm"},[n("q-btn",{attrs:{flat:"","no-caps":""},on:{click:t.toMentorHome}},[n("q-icon",{attrs:{name:"home"}}),t._v("\n          Mentor Home\n        ")],1),n("q-btn",{attrs:{flat:"","no-caps":""},on:{click:function(e){return t.signout()}}},[n("q-icon",{attrs:{name:"exit_to_app"}})],1)],1):"student"==t.sessionLogin?n("div",[n("q-btn",{attrs:{flat:"","no-caps":""},on:{click:t.toStudentHome}},[n("q-icon",{attrs:{name:"home"}}),t._v("\n          Student Home\n        ")],1),n("q-btn",{attrs:{flat:"","no-caps":""},on:{click:function(e){return t.signout()}}},[n("q-icon",{attrs:{name:"exit_to_app"}})],1)],1):n("div",[n("q-btn",{staticClass:"glossy",attrs:{rounded:"",dense:"",color:"deep-orange"},on:{click:function(e){return t.toStudentHome()}}},[n("q-icon",{attrs:{name:"face"}}),t._v("\n          Student Home\n        ")],1),n("q-btn",{attrs:{flat:""},on:{click:function(e){return t.toSigninup()}}},[t._v("\n          Signin / Signup\n        ")])],1)],1)],1),n("q-drawer",{attrs:{width:250,mini:t.miniState,bordered:"","content-class":"bg-blue-1"},on:{mouseover:function(e){t.miniState=!1},mouseout:function(e){t.miniState=!0}},model:{value:t.leftDrawerOpen,callback:function(e){t.leftDrawerOpen=e},expression:"leftDrawerOpen"}},[n("q-list",[n("q-item-label",{attrs:{header:""}},[t._v("\n        Information Centre\n      ")]),t._l(t.navs,(function(e){return n("q-item",{key:e.label,attrs:{clickable:"",exact:"",to:e.to}},[n("q-item-section",{attrs:{avatar:""}},[n("q-icon",{attrs:{name:e.icon}})],1),n("q-item-section",[n("q-item-label",[t._v("\n            "+t._s(e.label)+"\n          ")]),n("q-item-label",{attrs:{caption:""}},[t._v("\n            "+t._s(e.description)+"\n          ")])],1)],1)}))],2)],1),n("q-page-container",[n("router-view")],1),n("q-footer",{staticClass:"bg-blue text-white",attrs:{elevated:""}},[n("q-toolbar",[n("q-toolbar-title",{staticStyle:{font:"italic 120% Cursive"}},[t._v("\n        Copyright @DeCom Technology Ltd. 2020 - V20200421\n      ")]),n("q-btn",{staticClass:"q-mr-xl",attrs:{outline:"",color:"white","icon-right":"mail",label:"Contact Us"},on:{click:t.sendMessage}})],1)],1),n("signinup",{attrs:{showsignin:t.signinDialog},on:{signinClose:t.closeSigninDialog}}),n("student-login",{attrs:{showlogin:t.showLogin},on:{studentLoginClose:function(e){t.showLogin=!1}}})],1)},s=[],i=(n("8e6e"),n("8a81"),n("ac6a"),n("cadf"),n("06db"),n("456d"),n("7f7f"),n("c47a")),r=n.n(i),a=n("2f62");function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var u={name:"MyLayout",components:{signinup:n("768d").default,"student-login":n("a858").default},data:function(){return{leftDrawerOpen:!1,showStudentHome:!1,miniState:!0,signinDialog:!1,showLogin:!1,mentorView:!0,navs:[{label:"Topic",icon:"description",to:"/ShowTopics",description:"know our topics"},{label:"User Manual",icon:"book",to:"/UserManual",description:"Learn to Use"},{label:"Curriculum",icon:"receipt",to:"/Curriculum",description:"Fully covered"},{label:"Transfer Test - 2020",icon:"alarm_on",to:"/KeyDate",description:"All Info"},{label:"School Dictionary",icon:"apartment",to:"/SchoolDic",description:"Find shools"},{label:"Membership",icon:"card_membership",to:"/membership",description:"Go Premium"},{label:"Products",icon:"card_membership",to:"/Products",description:"See Products"},{label:"Q & A",icon:"chat",to:"/QandA",description:"All you need to know"}]}},computed:c({},Object(a["c"])("currentUser",["currentUser"]),{},Object(a["c"])("student",["currentStudent"]),{mainToolbar:function(){return"mentor"!==this.sessionLogin&&"student"!==this.sessionLogin||this.leftDrawerOpen},sessionLogin:function(){return this.currentUser.sessionLogin}}),watch:{$route:function(t,e){console.log(this.$route.path),console.log(t.path),this.manageLayout()}},beforeCreate:function(){console.log("layout beforeCreate - "+this.$route.path)},created:function(){console.log("layout created - "+this.$route.path)},beforeMount:function(){console.log("layout before mounte - "+this.$route.path+"sessionLogin: "+this.sessionLogin),"/MentorHome"===this.$route.path&&"mentor"!==this.sessionLogin&&this.$router.push("/"),"/StudentHome"===this.$route.path&&"student"!==this.sessionLogin&&this.$router.push("/"),this.loadUserList()},mounted:function(){console.log("layout mounted - "+this.$route.path),this.manageLayout(),this.loadDesc()},beforeUpdate:function(){console.log("layout before update - "+this.$route.path)},updated:function(){console.log("layout updated - "+this.$route.path)},methods:c({},Object(a["b"])("currentUser",["updateUser"]),{},Object(a["b"])("localMentors",["updateLocalMentors"]),{},Object(a["b"])("localStudents",["updateLocalStudents"]),{},Object(a["d"])("desc",["copyDesc"]),{manageLayout:function(){"/MentorHome"===this.$route.path?this.leftDrawerOpen=!1:"/StudentHome"===this.$route.path?(this.showStudentHome=!0,this.leftDrawerOpen=!1):this.leftDrawerOpen=!0},toSigninup:function(){console.log("set signin to true"),this.signinDialog=!0},closeSigninDialog:function(t){console.log("close signin at - "+t),!0===t&&this.toMentorHome(),this.signinDialog=!1},toStudentHome:function(){"student"===this.sessionLogin?this.$router.push("/StudentHome"):this.showLogin=!0},toMentorHome:function(){this.$router.push("/MentorHome")},toRunDemo:function(){},beforeRouteUpdate:function(t,e,n){console.log("layout before update")},signout:function(){this.updateUser({gId:0,name:"",contacts:[],mentorEmail:"",sessionLogin:""}),"/"!==this.$route.path?this.$router.push("/"):this.$router.go(this.$router.currentRoute)},loadUserList:function(){var t=localStorage.getItem("mentors");if(console.log("localstorage Mentors - "+t),t){for(var e=JSON.parse(t),n=0;n<e.length;n++)""!==e[n].email&&""!==e[n].token||e.splice(n,1);this.updateLocalMentors(e),console.log("All Mentors - "+e)}else this.updateLocalMentors([]);if(t=localStorage.getItem("students"),console.log("localstorage students - "+t),t){for(var o=JSON.parse(t),s=0;s<o.length;s++)""!==o[s].name&&""!==o[s].password||o.splice(s,1);this.updateLocalStudents(o),console.log("All students - "+o)}else this.updateLocalStudents([]);console.log("sessionStorage currentStudent - "+JSON.stringify(this.currentStudent));var i=unescape(encodeURIComponent(JSON.stringify(localStorage))).length;console.log("LocalStorage Used Bytes: ",i)},loadDesc:function(){var t=localStorage.getItem("kpDescriptions");t&&this.copyDesc(JSON.parse(t))},sendMessage:function(){console.log("send message to supportor")}})},d=u,p=n("2877"),m=Object(p["a"])(d,o,s,!1,null,"352693ce",null);e["default"]=m.exports}}]);