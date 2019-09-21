(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["fc50117e"],{"768d":function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("q-form",[n("q-dialog",{attrs:{persistent:""},model:{value:t.currentShowSignin,callback:function(e){t.currentShowSignin=e},expression:"currentShowSignin"}},[n("q-card",{staticStyle:{width:"450px","max-width":"80vw"}},[n("q-card-actions",{attrs:{align:"right"}},[n("div",{staticClass:"row"},[n("q-space"),n("q-btn",{attrs:{flat:"",icon:"cancel",color:"primary"},on:{click:function(e){return t.signinClose(!1)}}})],1)]),n("q-card-section",{attrs:{align:"center"}},[n("q-btn-toggle",{attrs:{push:"",glossy:"","toggle-color":"primary",options:[{label:"Signin",value:"signin"},{label:"Signup",value:"signup"}]},model:{value:t.signOpt,callback:function(e){t.signOpt=e},expression:"signOpt"}})],1),n("q-card-section",{staticClass:"q-px-xl q-mx-xl q-mt-xl"},[n("q-input",{ref:"emailInput",attrs:{rounded:"",outlined:"",autofocus:"",type:"email",color:"green",label:"E-Mail:"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.addByEnter(0)}},scopedSlots:t._u([{key:"append",fn:function(){return[n("q-icon",{attrs:{name:"email",color:"orange"}})]},proxy:!0}]),model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1),n("q-card-section",{staticClass:"q-px-xl q-mx-xl q-mb-md"},[n("q-input",{ref:"pwInput",attrs:{"q-ma-lg":"",rounded:"",outlined:"",color:"green",label:"Password:",type:t.isPwd?"password":"text",hint:"* At least 6 mixed letters and numbers"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.addByEnter(1)}},scopedSlots:t._u([{key:"append",fn:function(){return[n("q-icon",{staticClass:"cursor-pointer",attrs:{color:"blue",name:t.isPwd?"visibility_off":"visibility"},on:{click:function(e){t.isPwd=!t.isPwd}}})]},proxy:!0}]),model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1),n("q-card-actions",{staticClass:"bg-white text-teal",attrs:{align:"center"}},[n("q-btn",{attrs:{label:"OK"},on:{click:function(e){return t.submitSigninup()}}})],1),n("q-card-actions",{staticClass:"bg-white text-teal",attrs:{align:"center"}},[n("q-checkbox",{attrs:{"keep-color":"","left-label":"",color:"blue",label:"Remember you login details on this computer?"},model:{value:t.rememberUser,callback:function(e){t.rememberUser=e},expression:"rememberUser"}})],1),n("q-card-actions",{staticClass:"text-blue",attrs:{align:"center"}},[n("signin-list",{attrs:{"user-type":t.listName},on:{listSelected:t.toMentorLogin}})],1)],1)],1),n("alert-msg",{attrs:{active:t.alert,msg:t.alertMsg},on:{cancelAlert:t.alertClose}})],1)},s=[],i=(n("8e6e"),n("8a81"),n("ac6a"),n("cadf"),n("06db"),n("456d"),n("c47a")),r=n.n(i),a=n("2f62"),l=n("63fb");function c(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?c(n,!0).forEach((function(e){r()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var d={name:"Signinup",components:{"alert-msg":n("a5aa").default,"signin-list":n("bd44").default},props:{showsignin:{type:Boolean}},data:function(){return{listName:"mentor",signOpt:"signin",rememberUser:!0,password:"",isPwd:!0,email:"",token:"",alert:!1,alertMsg:""}},computed:u({},Object(a["c"])("localMentors",["localMentors"]),{currentShowSignin:function(){return this.showsignin},localMentorList:function(){return this.localMentors.length>0?this.localMentors:[]}}),mounted:function(){console.log("signin up mounted")},methods:u({},Object(a["b"])("currentUser",["updateUser"]),{},Object(a["b"])("localMentors",["updateLocalMentors","removeLocalMentor","addLocalMentor","updateLocalMentorDate"]),{submitSigninup:function(){if(""!==this.email&&""!==this.password){for(var t=!0,e=0;e<this.localMentorList.length;e++)if(this.localMentorList[e].email===this.email&&"NA"!==this.localMentorList[e].token){t=!1,this.token=this.localMentorList[e].token,this.verifyToken();break}!0===t&&("signin"===this.signOpt?(console.log("do sign in for - "+this.email+" pw - "+this.password),this.submitSignin()):"signup"===this.signOpt&&(console.log("do sign up for - "+this.email+" pw - "+this.password),this.submitSignup()))}},submitSignin:function(){var t=this;this.$apollo.mutate({mutation:l["f"],variables:{username:this.email,password:this.password}}).then((function(e){e.data.tokenAuth?(console.log("Get Token for mentor - "+t.email),t.updateLocalMentor(e.data.tokenAuth.token)):(t.alertMsg=e.errors.message,t.alert=!0)})).catch((function(e){t.alertMsg="Invalid Name or Password.",t.alert=!0,console.log(e)}))},submitSignup:function(){var t=this;this.$apollo.mutate({mutation:l["g"],variables:{email:this.email,password:this.password}}).then((function(e){e.data.createUser.user?(console.log("Signup mentor email - "+e.data.createUser.user.email),t.submitSignin()):(t.alertMsg=e.errors.message,t.alert=!0)})).catch((function(e){t.alertMsg="This email has been registered.",t.alert=!0,console.log(e)}))},verifyToken:function(){var t=this;sessionStorage.removeItem("token"),this.$apollo.mutate({mutation:l["j"],variables:{token:this.token}}).then((function(e){e.data.verifyToken?(console.log("verified token for mentor email - "+e.data.verifyToken.payload.username),t.updateLocalMentor(t.token)):(t.alertMsg=e.errors.message,t.alert=!0)})).catch((function(e){t.alertMsg="Invalid Name or Password.",t.alert=!0,console.log(e)}))},toMentorLogin:function(t){this.email=this.localMentorList[t].email,this.token=this.localMentorList[t].token,this.verifyToken()},updateLocalMentor:function(t){for(var e=!0,n=0;n<this.localMentorList.length;n++)this.localMentorList[n].email===this.email&&(e=!1,!1===this.rememberUser?this.removeLocalMentor(n):this.updateLocalMentorDate(n));!0===e&&!0===this.rememberUser&&this.addLocalMentor({email:this.email,token:t,letter:this.email[0],lastSigninDate:Date()});var o=JSON.stringify(this.localMentorList);localStorage.setItem("mentors",o),sessionStorage.setItem("token",t),this.updateUser({mentorEmail:this.email,sessionLogin:"mentor"}),this.signinClose(!0)},addByEnter:function(t){""!==this.email&&""!==this.password?this.submitSigninup():""!==this.email?this.$refs.pwInput.focus():this.$refs.emailInput.focus()},alertClose:function(){this.alert=!1,this.alertMsg=""},signinClose:function(t){this.email="",this.password="",this.$emit("signinClose",t)}})},m=d,p=n("2877"),g=Object(p["a"])(m,o,s,!1,null,null,null);e["default"]=g.exports},a858:function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("q-form",[n("q-dialog",{attrs:{persistent:""},model:{value:t.showlogin,callback:function(e){t.showlogin=e},expression:"showlogin"}},[n("q-card",{staticStyle:{width:"450px","max-width":"80vw"}},[n("q-card-actions",{attrs:{align:"right"}},[n("div",{staticClass:"row"},[n("q-space"),n("q-btn",{attrs:{flat:"",icon:"cancel",color:"primary"},on:{click:function(e){return t.signinClose()}}})],1)]),n("q-card-section",{attrs:{align:"center"}},[n("q-btn",{staticStyle:{color:"green"},attrs:{flat:"","no-caps":"",size:"lg",label:"Student Login"}})],1),n("q-card-section",{staticClass:"q-px-xl q-mx-xl q-mt-sm"},[n("q-input",{ref:"nameInput",attrs:{rounded:"",outlined:"",autofocus:"",color:"green",label:"User Nmae:"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.addByEnter(0)}},scopedSlots:t._u([{key:"append",fn:function(){return[n("q-icon",{attrs:{name:"face",color:"orange"}})]},proxy:!0}]),model:{value:t.loginName,callback:function(e){t.loginName=e},expression:"loginName"}})],1),n("q-card-section",{staticClass:"q-px-xl q-mx-xl q-mb-lg"},[n("q-input",{ref:"pwInput",attrs:{"q-ma-lg":"",rounded:"",outlined:"",color:"green",label:"Password:",type:t.isPwd?"password":"text",hint:"* At least 6 mixed letters and numbers"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.addByEnter(1)}},scopedSlots:t._u([{key:"append",fn:function(){return[n("q-icon",{staticClass:"cursor-pointer",attrs:{color:"blue",name:t.isPwd?"visibility_off":"visibility"},on:{click:function(e){t.isPwd=!t.isPwd}}})]},proxy:!0}]),model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1),n("q-card-actions",{staticClass:"bg-white text-teal",attrs:{align:"center"}},[n("q-btn",{attrs:{label:"OK"},on:{click:function(e){return t.toStudentLogin(5e3)}}})],1),n("q-card-actions",{staticClass:"bg-white text-teal",attrs:{align:"center"}},[n("q-checkbox",{attrs:{"keep-color":"","left-label":"",color:"blue",label:"Remember you login details on this computer?"},model:{value:t.rememberUser,callback:function(e){t.rememberUser=e},expression:"rememberUser"}})],1),n("q-card-actions",{staticClass:"text-blue",attrs:{align:"center"}},[n("signin-list",{attrs:{"user-type":t.listName},on:{listSelected:t.toStudentLogin}})],1)],1),n("alert-msg",{attrs:{active:t.alert,msg:t.alertMsg},on:{cancelAlert:t.alertClose}})],1)],1)},s=[],i=(n("8e6e"),n("8a81"),n("ac6a"),n("cadf"),n("06db"),n("456d"),n("7f7f"),n("c47a")),r=n.n(i),a=n("2f62"),l=n("63fb");function c(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?c(n,!0).forEach((function(e){r()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var d={name:"StudentLogin",components:{"alert-msg":n("a5aa").default,"signin-list":n("bd44").default},props:{showlogin:Boolean},data:function(){return{listName:"student",alert:!1,alertMsg:"",rememberUser:!0,password:"",isPwd:!0,skipQueryStudent:!0,token:"",loginName:"",mockStudents:[{id:1,mentorEmail:"",name:"Lucas Yin",password:"",token:""},{id:2,mentorEmail:"",name:"Jamie Yin",password:"",token:""},{id:3,mentorEmail:"",name:"Juncheng Yin",password:"",token:""}],student:{mentorId:0,mentorEmail:"",name:"",age:0,city:"",country:"",school:"",stickers:0,stars:0,membershipDate:"",expireDate:"",lastLoginDate:"",levels:"",assignment:"",stickerLog:[]}}},computed:u({},Object(a["c"])("localStudents",["localStudents"]),{localStudentList:function(){return this.localStudents.length>0?this.localStudents:[]}}),mounted:function(){console.log("student login mounted, find local students: "+this.localStudentList.length)},methods:u({},Object(a["b"])("student",["updateStudent"]),{},Object(a["b"])("currentUser",["updateUser"]),{},Object(a["d"])("localStudents",["removeStudent","addStudent"]),{},Object(a["b"])("localStudents",["updateLocalStudents","updateLocalStudentDate"]),{addByEnter:function(t){""!==this.loginName&&""!==this.password?this.studentLogin():""!==this.loginName?this.$refs.pwInput.focus():this.$refs.nameInput.focus()},toStudentLogin:function(t){console.log("login/read student data for key - "+t),5e3!==t?(this.loginName=this.localStudentList[t].name,this.password=this.localStudentList[t].password,this.studentLogin()):this.loginName&&this.password?this.studentLogin():console.log("Invalid name or password")},studentLogin:function(){var t=this;this.$apollo.mutate({mutation:l["h"],variables:{name:this.loginName,password:this.password}}).then((function(e){e.errors?console.log("reponse error"):e.data.studentLogin.ok?(console.log("studentLogin for - "+e.data.studentLogin.student.name),t.setCurrentStudent(e.data.studentLogin.student)):(t.alertMsg=e.errors.message,t.alert=!0)})).catch((function(e){t.alertMsg="Invalid Name or Password, Check with your mentor please.",t.alert=!0,console.log(e)}))},setCurrentStudent:function(t){this.skipQueryStudent=!0,""!==t.mentorEmail?(console.log("Write current student to store - "+t.name),this.updateStudent({id:t.id,mentorId:t.mentorId,mentorEmail:t.mentorEmail,name:t.name,age:t.age,city:t.city,country:t.country,school:t.school,stickers:t.stickers,stars:t.stars,membershipActive:t.membershipActive,membershipDate:t.membershipDate,expireDate:t.expireDate,lastLoginDate:t.lastLoginDate,levels:t.levels,assignment:t.assignment,stickerLog:t.stickerLog}),this.updateUser({sessionLogin:"student"}),this.saveUserLocal(),"/StudentHome"!==this.$route.path&&this.$router.push("/StudentHome"),this.signinClose()):console.log("something wrong")},saveUserLocal:function(){for(var t=!0,e=0;e<this.localStudentList.length;e++)this.localStudentList[e].name===this.loginName&&(console.log("find student in localStudentList name - "+this.loginName),t=!1,!1===this.rememberUser?this.removeStudent(e):this.updateLocalStudentDate(e));!0===t&&!0===this.rememberUser&&this.addStudent({name:this.loginName,password:this.password,letter:this.loginName[0],lastSigninDate:Date()});var n=JSON.stringify(this.localStudentList);console.log("save in local students - "+n),localStorage.setItem("students",n)},signinClose:function(){this.loginName="",this.password="",this.$emit("studentLoginClose")},alertClose:function(){this.alert=!1,this.alertMsg=""}})},m=d,p=n("2877"),g=Object(p["a"])(m,o,s,!1,null,null,null);e["default"]=g.exports},bd44:function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"q-pa-md",staticStyle:{width:"100%"}},[t.useList?n("q-toolbar",{staticClass:"bg-white text-blue"},[n("q-toolbar-title",[t._v("Sign in as:")])],1):t._e(),n("q-separator"),n("q-list",t._l(t.localUserList,(function(e,o){return n("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],key:o,staticClass:"q-my-sm",attrs:{clickable:""},on:{click:function(e){return t.selected(o)}}},[n("q-item-section",{attrs:{avatar:""}},[n("q-avatar",{attrs:{color:"primary","text-color":"white"}},[t._v("\n          "+t._s(e.letter)+"\n        ")])],1),n("q-item-section",["mentor"==t.userType?n("q-item-label",[t._v("\n          "+t._s(e.email)+"\n        ")]):"student"==t.userType?n("q-item-label",[t._v("\n          "+t._s(e.name)+"\n        ")]):n("q-item-label",[t._v("\n          Not Available\n        ")]),n("q-item-label",{staticStyle:{size:"xs"},attrs:{caption:"",lines:"1"}},[t._v("\n          Last time signin at: "+t._s(e.lastSigninDate)+"\n        ")])],1),n("q-item-section",{attrs:{side:""}},[n("q-btn",{attrs:{round:"",flat:""},on:{click:function(e){return t.deleteFromList(o)}}},[n("q-icon",{attrs:{name:"cancel",color:"red"}})],1)],1)],1)})),1)],1)},s=[],i=(n("8e6e"),n("8a81"),n("ac6a"),n("cadf"),n("06db"),n("456d"),n("c47a")),r=n.n(i),a=n("2f62");function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(n,!0).forEach((function(e){r()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var u={name:"SigninList",props:{userType:{type:String,default:""}},data:function(){return{isDelete:!1}},computed:c({},Object(a["c"])("localMentors",["localMentors"]),{},Object(a["c"])("localStudents",["localStudents"]),{localUserList:function(){return"mentor"===this.userType&&this.localMentors.length>0?this.localMentors:"student"===this.userType&&this.localStudents.length>0?this.localStudents:[]},useList:function(){return this.localUserList.length>0}}),mounted:function(){console.log("signin List mounted user - "+this.userType),console.log("signin List mounted user - "+this.localUserList.length)},methods:c({},Object(a["d"])("localMentors",["removeMentor"]),{},Object(a["d"])("localStudents",["removeStudent"]),{selected:function(t){!1===this.isDelete?(console.log("selected - "+t),this.$emit("listSelected",t)):this.isDelete=!1},deleteFromList:function(t){this.isDelete=!0,console.log("delete - "+t),"mentor"===this.userType?this.removeMentor(t):"student"===this.userType&&this.removeStudent(t)}})},d=u,m=n("2877"),p=Object(m["a"])(d,o,s,!1,null,null,null);e["default"]=p.exports},f241:function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("q-layout",{attrs:{view:"hHh lpR fFf"}},[n("q-header",{attrs:{elevated:""}},[n("q-toolbar",{staticClass:"bg-white text-red"},[n("q-toolbar-title",[n("router-link",{attrs:{to:"/"}},[t.showStudentHome?n("q-img",{staticStyle:{height:"45px","max-width":"62px"},attrs:{"spinner-color":"white",src:"statics/logo.jpg"}}):n("q-img",{staticStyle:{height:"90px","max-width":"124px"},attrs:{"spinner-color":"white",src:"statics/logo.jpg"}})],1)],1),"mentor"==t.sessionLogin?n("div",{staticClass:"q-mx-sm"},[n("q-btn",{attrs:{flat:"","no-caps":""},on:{click:t.toMentorHome}},[n("q-icon",{attrs:{name:"home"}}),t._v("\n          Mentor Home\n        ")],1),n("q-btn",{attrs:{flat:"","no-caps":""},on:{click:function(e){return t.signout()}}},[n("q-icon",{attrs:{name:"exit_to_app"}})],1)],1):"student"==t.sessionLogin?n("div",[n("q-btn",{attrs:{flat:"","no-caps":""},on:{click:t.toStudentHome}},[n("q-icon",{attrs:{name:"home"}}),t._v("\n          Student Home\n        ")],1),n("q-btn",{attrs:{flat:"","no-caps":""},on:{click:function(e){return t.signout()}}},[n("q-icon",{attrs:{name:"exit_to_app"}})],1)],1):n("div",[n("q-btn",{attrs:{flat:""},on:{click:function(e){return t.toSigninup()}}},[t._v("\n          Signin / Signup\n        ")])],1)],1),n("q-separator"),t.mainToolbar?n("q-toolbar",{staticClass:"glossy"},[n("q-btn",{attrs:{flat:""},on:{click:t.manageDrawer}},[n("q-icon",{attrs:{name:"menu"}}),t._v("\n          \n        Info Center\n      ")],1),n("q-btn",{attrs:{glossy:"",dense:"",color:"amber"},on:{click:function(e){return t.toRunDemo()}}},[t._v("\n        Try Demo\n      ")]),n("q-toolbar-title"),n("q-btn",{staticClass:"glossy",attrs:{rounded:"",color:"deep-orange"},on:{click:function(e){return t.toStudentHome()}}},[n("q-icon",{attrs:{name:"face"}}),t._v("\n        Student Home\n      ")],1)],1):t._e()],1),n("q-drawer",{attrs:{width:250,breakpoint:768,mini:t.miniState,bordered:"","content-class":"bg-blue-1"},on:{mouseover:function(e){t.miniState=!1},mouseout:function(e){t.miniState=!0}},model:{value:t.leftDrawerOpen,callback:function(e){t.leftDrawerOpen=e},expression:"leftDrawerOpen"}},[n("q-list",[n("q-item-label",{attrs:{header:""}},[t._v("\n        Information Centre\n      ")]),t._l(t.navs,(function(e){return n("q-item",{key:e.label,attrs:{clickable:"",exact:"",to:e.to}},[n("q-item-section",{attrs:{avatar:""}},[n("q-icon",{attrs:{name:e.icon}})],1),n("q-item-section",[n("q-item-label",[t._v("\n            "+t._s(e.label)+"\n          ")]),n("q-item-label",{attrs:{caption:""}},[t._v("\n            "+t._s(e.description)+"\n          ")])],1)],1)}))],2)],1),n("q-page-container",[n("router-view")],1),n("q-footer",{staticClass:"bg-grey-8 text-white",attrs:{elevated:""}},[n("q-toolbar",[n("q-toolbar-title",[t._v("\n        Copyright @Transfer Test Master Team. 2019\n      ")])],1)],1),n("signinup",{attrs:{showsignin:t.signinDialog},on:{signinClose:t.closeSigninDialog}}),n("student-login",{attrs:{showlogin:t.showLogin},on:{studentLoginClose:function(e){t.showLogin=!1}}})],1)},s=[],i=(n("8e6e"),n("8a81"),n("ac6a"),n("cadf"),n("06db"),n("456d"),n("c47a")),r=n.n(i),a=n("2f62");function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(n,!0).forEach((function(e){r()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var u={name:"MyLayout",components:{signinup:n("768d").default,"student-login":n("a858").default},data:function(){return{leftDrawerOpen:!1,showStudentHome:!1,miniState:!0,signinDialog:!1,showLogin:!1,mentorView:!0,navs:[{label:"Topic",icon:"description",to:"/ShowTopics",description:"know our topics"},{label:"User Manual",icon:"book",to:"/UserManual",description:"Learn to Use"},{label:"Curriculum",icon:"receipt",to:"/",description:"Fully covered"},{label:"Transfer Test - 2019",icon:"alarm_on",to:"/KeyDate",description:"All Info"},{label:"School Dictionary",icon:"people",to:"/schoolDic",description:"Find shools"},{label:"Membership",icon:"card_membership",to:"/membership",description:"Go Premium"},{label:"Contact",icon:"card_membership",to:"/membership",description:"For more"}]}},computed:c({},Object(a["c"])("currentUser",["currentUser"]),{mainToolbar:function(){return this.leftDrawerOpen},sessionLogin:function(){return this.currentUser.sessionLogin}}),watch:{$route:function(t,e){console.log(this.$route.path),console.log(t.path),this.manageLayout()}},beforeCreate:function(){console.log("layout beforeCreate - "+this.$route.path)},created:function(){console.log("layout created - "+this.$route.path)},beforeMount:function(){console.log("layout before mounte - "+this.$route.path+"sessionLogin: "+this.sessionLogin),"/MentorHome"===this.$route.path&&"mentor"!==this.sessionLogin&&this.$router.push("/"),"/StudentHome"===this.$route.path&&"student"!==this.sessionLogin&&this.$router.push("/"),this.loadUserList()},mounted:function(){console.log("layout mounted - "+this.$route.path),this.manageLayout()},beforeUpdate:function(){console.log("layout before update - "+this.$route.path)},updated:function(){console.log("layout updated - "+this.$route.path)},methods:c({},Object(a["b"])("currentUser",["updateUser"]),{},Object(a["b"])("localMentors",["updateLocalMentors"]),{},Object(a["b"])("localStudents",["updateLocalStudents"]),{manageDrawer:function(){this.leftDrawerOpen=!0,this.mainToolbar=!1},manageLayout:function(){"/MentorHome"===this.$route.path?this.leftDrawerOpen=!1:"/StudentHome"===this.$route.path?(this.showStudentHome=!0,this.leftDrawerOpen=!1):this.leftDrawerOpen=!0},toSigninup:function(){console.log("set signin to true"),this.signinDialog=!0},closeSigninDialog:function(t){console.log("close signin at - "+t),!0===t&&this.toMentorHome(),this.signinDialog=!1},toStudentHome:function(){"student"===this.sessionLogin?this.$router.push("/StudentHome"):this.showLogin=!0},toMentorHome:function(){this.$router.push("/MentorHome")},toRunDemo:function(){},beforeRouteUpdate:function(t,e,n){console.log("layout before update")},signout:function(){this.updateUser({sessionLogin:""}),"/"!==this.$route.path?this.$router.push("/"):this.$router.go(this.$router.currentRoute)},loadUserList:function(){var t=localStorage.getItem("mentors");if(t){var e=JSON.parse(t);this.updateLocalMentors(e)}if(console.log("tmpUser - "+t),t=localStorage.getItem("students"),console.log("tmpUser - "+t),t){var n=JSON.parse(t);this.updateLocalStudents(n)}}})},d=u,m=n("2877"),p=Object(m["a"])(d,o,s,!1,null,null,null);e["default"]=p.exports}}]);