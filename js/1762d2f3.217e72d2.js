(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["1762d2f3"],{5783:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"q-pa-md"},[n("div",{staticClass:"q-gutter-y-md",staticStyle:{"max-width":"100%"}},[n("q-tabs",{staticClass:"bg-grey-3 shadow-2",attrs:{"no-caps":"",dense:""},model:{value:e.tab,callback:function(t){e.tab=t},expression:"tab"}},[n("q-tab",{attrs:{name:"profile",icon:"face",label:"Profile"}}),n("q-tab",{attrs:{name:"logs",icon:"mail",label:"Task Logs"}},[n("q-badge",{attrs:{color:"red",floating:""}},[e._v("\n          2\n        ")])],1),n("q-tab",{attrs:{name:"report",icon:"alarm",label:"IA Report"}},[n("q-badge",{attrs:{color:"red",floating:""}},[e._v("\n          10+\n        ")])],1),n("q-tab",{attrs:{name:"message",icon:"alarm",label:"Messages"}},[n("q-badge",{attrs:{color:"red",floating:""}},[e._v("\n          10+\n        ")])],1),n("q-tab",{attrs:{name:"management",icon:"alarm",label:"Management"}},[n("q-badge",{attrs:{color:"red",floating:""}},[e._v("\n          10+\n        ")])],1)],1),n("q-separator"),n("q-tab-panels",{attrs:{animated:""},model:{value:e.tab,callback:function(t){e.tab=t},expression:"tab"}},[n("q-tab-panel",{attrs:{name:"profile"}},[n("div",{staticClass:"text-h6"},[e._v("\n          Student Profile\n        ")]),n("profile")],1),n("q-tab-panel",{attrs:{name:"logs"}},[n("div",{staticClass:"text-h6"},[e._v("\n          Task Logs\n        ")]),n("tasklogs")],1),n("q-tab-panel",{attrs:{name:"alarms"}},[n("div",{staticClass:"text-h6"},[e._v("\n          Alarms\n        ")]),e._v("\n        Lorem ipsum dolor sit amet consectetur adipisicing elit.\n      ")]),n("q-tab-panel",{attrs:{name:"movies"}},[n("div",{staticClass:"text-h6"},[e._v("\n          Movies\n        ")]),e._v("\n        Lorem ipsum dolor sit amet consectetur adipisicing elit.\n      ")])],1)],1)])},l=[],s=(n("c5f6"),{name:"StudentPanel",components:{tasklogs:n("98a3").default,profile:n("8ba9").default},props:{studentid:{type:Number,default:0},studentname:{type:String,default:""},loading:{type:Boolean,default:!0}},data:function(){return{tab:"logs",alert:!1,errorId:0,active:!1,addStudent:!1,delStudent:!1,delId:0,delName:"",actStudent:0,studentId:0,membershipActive:!1,visibleColumns:["id","name","password","level","assignment","report","membership","expire","action"],columns:[{name:"id",required:!0,label:"Id",align:"center",field:"id",sortable:!0},{name:"name",align:"center",label:"Name",field:"name",sortable:!0},{name:"password",align:"center",label:"Password",field:"password",sortable:!1},{name:"level",align:"center",label:"Level",field:"level",sortable:!0},{name:"assignment",align:"center",label:"Assignment",field:"assignment",sortable:!1},{name:"report ",align:"center",label:"Report",field:"report",sortable:!1},{name:"membership",align:"center",label:"Membership",field:"membership",sortable:!1},{name:"expire",align:"center",label:"expire",field:"expire",sortable:!0},{name:"action",align:"center",label:"action",field:"action",sortable:!1}]}},methods:{toEditStudent:function(e){this.active=!0},toMembershipUpdate:function(e){this.actStudent=Number(e),this.membershipActive=!0},membershipDeactive:function(){this.actStudent=0,this.membershipActive=!1},addStudentDone:function(e){this.addStudent=!1,e>0&&this.$emit("tableUpdate")},toDeleteStudent:function(e,t){this.delId=Number(e),this.delName=t,this.delStudent=!0},delStudentDone:function(e){this.delStudent=!1,e>0&&this.$emit("tableUpdate")}}}),i=s,r=n("2877"),d=Object(r["a"])(i,a,l,!1,null,null,null);t["default"]=d.exports},"7d8e":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"q-px-sm"},[n("q-table",{attrs:{title:"Your Students",data:e.tabledata,columns:e.columns,"visible-columns":e.visibleColumns,separator:"cell","row-key":"name","table-header-style":{backgroundColor:"lightblue"},"fixed-center":"",bordered:"",dense:"",loading:e.loading},scopedSlots:e._u([{key:"top",fn:function(t){return[n("div",{staticClass:"col-2 q-table__title"},[e._v("\n        Your Students\n      ")]),n("q-space"),n("q-btn",{attrs:{flat:"",round:"",icon:"playlist_add"},on:{click:function(t){e.addStudent=!0}}}),n("q-btn",{staticClass:"q-ml-md",attrs:{flat:"",round:"",dense:"",icon:t.inFullscreen?"fullscreen_exit":"fullscreen"},on:{click:t.toggleFullscreen}})]}},{key:"body-cell-membership",fn:function(t){return n("q-td",{attrs:{props:t}},[n("q-btn",{attrs:{flat:"","no-caps":"","text-color":"green"},on:{click:function(n){return e.toMembershipUpdate(t.row.id)}}},[e._v("\n        "+e._s(e.membershipstatus)+"\n      ")])],1)}},{key:"body-cell-action",fn:function(t){return n("q-td",{attrs:{props:t}},[n("q-btn",{attrs:{flat:"",icon:"edit"},on:{click:function(n){return e.toEditStudent(t.row.id)}}}),n("q-btn",{attrs:{flat:"",icon:"delete"},on:{click:function(n){return e.toDeleteStudent(t.row.id,t.row.name)}}})],1)}}])}),n("membership-update",{attrs:{actstudent:e.actStudent,membershipactive:e.membershipActive},on:{memebershipClose:e.membershipDeactive}}),n("add-student",{attrs:{active:e.addStudent},on:{studentAddCompleted:e.addStudentDone}}),n("del-student",{attrs:{delid:e.delId,active:e.delStudent,name:e.delName},on:{studentDelCompleted:e.delStudentDone}})],1)},l=[],s=(n("c5f6"),{name:"StudentTable",components:{"membership-update":n("e7d4").default,"add-student":n("c952").default,"del-student":n("90d8").default},props:{tabledata:{type:Array,default:function(){return[]}},membershipstatus:{type:String,default:""},loading:{type:Boolean,default:!0}},data:function(){return{alert:!1,errorId:0,active:!1,addStudent:!1,delStudent:!1,delId:0,delName:"",actStudent:0,studentId:0,membershipActive:!1,visibleColumns:["id","name","password","level","assignment","report","membership","expire","action"],columns:[{name:"id",required:!0,label:"Id",align:"center",field:"id",sortable:!0},{name:"name",align:"center",label:"Name",field:"name",sortable:!0},{name:"password",align:"center",label:"Password",field:"password",sortable:!1},{name:"level",align:"center",label:"Level",field:"level",sortable:!0},{name:"assignment",align:"center",label:"Assignment",field:"assignment",sortable:!1},{name:"report ",align:"center",label:"Report",field:"report",sortable:!1},{name:"membership",align:"center",label:"Membership",field:"membership",sortable:!1},{name:"expire",align:"center",label:"expire",field:"expire",sortable:!0},{name:"action",align:"center",label:"action",field:"action",sortable:!1}]}},methods:{toEditStudent:function(e){this.active=!0},toMembershipUpdate:function(e){this.actStudent=Number(e),this.membershipActive=!0},membershipDeactive:function(){this.actStudent=0,this.membershipActive=!1},addStudentDone:function(e){this.addStudent=!1,e>0&&this.$emit("tableUpdate")},toDeleteStudent:function(e,t){this.delId=Number(e),this.delName=t,this.delStudent=!0},delStudentDone:function(e){this.delStudent=!1,e>0&&this.$emit("tableUpdate")}}}),i=s,r=n("2877"),d=Object(r["a"])(i,a,l,!1,null,null,null);t["default"]=d.exports},"8ba9":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"q-px-sm"},[n("q-table",{attrs:{title:"Your Students",data:e.tabledata,columns:e.columns,"visible-columns":e.visibleColumns,separator:"cell","row-key":"name","table-header-style":{backgroundColor:"lightblue"},"fixed-center":"",bordered:"",dense:"",loading:e.loading},scopedSlots:e._u([{key:"top",fn:function(t){return[n("div",{staticClass:"col-2 q-table__title"},[e._v("\n        Your Students\n      ")]),n("q-space"),n("q-btn",{attrs:{flat:"",round:"",icon:"playlist_add"},on:{click:function(t){e.addStudent=!0}}}),n("q-btn",{staticClass:"q-ml-md",attrs:{flat:"",round:"",dense:"",icon:t.inFullscreen?"fullscreen_exit":"fullscreen"},on:{click:t.toggleFullscreen}})]}},{key:"body-cell-membership",fn:function(t){return n("q-td",{attrs:{props:t}},[n("q-btn",{attrs:{flat:"","no-caps":"","text-color":"green"},on:{click:function(n){return e.toMembershipUpdate(t.row.id)}}},[e._v("\n        "+e._s(e.membershipstatus)+"\n      ")])],1)}},{key:"body-cell-action",fn:function(t){return n("q-td",{attrs:{props:t}},[n("q-btn",{attrs:{flat:"",icon:"edit"},on:{click:function(n){return e.toEditStudent(t.row.id)}}}),n("q-btn",{attrs:{flat:"",icon:"delete"},on:{click:function(n){return e.toDeleteStudent(t.row.id,t.row.name)}}})],1)}}])}),n("membership-update",{attrs:{actstudent:e.actStudent,membershipactive:e.membershipActive},on:{memebershipClose:e.membershipDeactive}}),n("add-student",{attrs:{active:e.addStudent},on:{studentAddCompleted:e.addStudentDone}}),n("del-student",{attrs:{delid:e.delId,active:e.delStudent,name:e.delName},on:{studentDelCompleted:e.delStudentDone}})],1)},l=[],s=(n("c5f6"),{name:"StudentTable",components:{"membership-update":n("e7d4").default,"add-student":n("c952").default,"del-student":n("90d8").default},props:{tabledata:{type:Array,default:function(){return[]}},membershipstatus:{type:String,default:""},loading:{type:Boolean,default:!0}},data:function(){return{alert:!1,errorId:0,active:!1,addStudent:!1,delStudent:!1,delId:0,delName:"",actStudent:0,studentId:0,membershipActive:!1,visibleColumns:["id","name","password","level","assignment","report","membership","expire","action"],columns:[{name:"id",required:!0,label:"Id",align:"center",field:"id",sortable:!0},{name:"name",align:"center",label:"Name",field:"name",sortable:!0},{name:"password",align:"center",label:"Password",field:"password",sortable:!1},{name:"level",align:"center",label:"Level",field:"level",sortable:!0},{name:"assignment",align:"center",label:"Assignment",field:"assignment",sortable:!1},{name:"report ",align:"center",label:"Report",field:"report",sortable:!1},{name:"membership",align:"center",label:"Membership",field:"membership",sortable:!1},{name:"expire",align:"center",label:"expire",field:"expire",sortable:!0},{name:"action",align:"center",label:"action",field:"action",sortable:!1}]}},methods:{toEditStudent:function(e){this.active=!0},toMembershipUpdate:function(e){this.actStudent=Number(e),this.membershipActive=!0},membershipDeactive:function(){this.actStudent=0,this.membershipActive=!1},addStudentDone:function(e){this.addStudent=!1,e>0&&this.$emit("tableUpdate")},toDeleteStudent:function(e,t){this.delId=Number(e),this.delName=t,this.delStudent=!0},delStudentDone:function(e){this.delStudent=!1,e>0&&this.$emit("tableUpdate")}}}),i=s,r=n("2877"),d=Object(r["a"])(i,a,l,!1,null,null,null);t["default"]=d.exports},"90d8":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("q-dialog",{attrs:{persistent:""},model:{value:e.active,callback:function(t){e.active=t},expression:"active"}},[n("q-card",{staticStyle:{width:"450px","max-width":"80vw"}},[n("q-card-actions",{attrs:{align:"right"}},[n("div",{staticClass:"row"},[n("q-space"),n("q-btn",{attrs:{flat:"",icon:"cancel",color:"primary"},on:{click:function(t){return e.delStudent(0)}}})],1)]),n("q-card-section",{staticClass:"q-mb-lg",attrs:{align:"center"}},[n("q-btn",{staticStyle:{color:"red"},attrs:{flat:"",label:"Delete Student"}})],1),n("q-card-section",{attrs:{align:"center"}},[n("q-btn",{staticStyle:{color:"blue"},attrs:{outline:""}},[e._v("\n          Id: "+e._s(e.delid)+", Name: "+e._s(e.name)+" ?\n        ")])],1),n("q-card-actions",{attrs:{align:"right"}},[n("q-btn",{attrs:{label:"Confirm",color:"warning"},on:{click:function(t){return e.delStudent(1)}}})],1)],1)],1),n("q-dialog",{model:{value:e.alert,callback:function(t){e.alert=t},expression:"alert"}},[n("q-card",[n("q-card-section",[n("div",{staticClass:"text-h6"},[e._v("\n          Error: Student Id: "+e._s(e.delid)+", Name: "+e._s(e.name)+" was NOT deleted!\n        ")])]),n("q-card-actions",{attrs:{align:"right"}},[n("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"OK",color:"primary"}})],1)],1)],1)],1)},l=[],s=(n("c5f6"),n("63fb")),i={name:"StudentDel",props:{active:{type:Boolean,default:!1},delid:{type:Number,default:0},name:{type:String,default:""}},data:function(){return{alert:!1,mentorId:0}},methods:{delStudent:function(e){var t=this;1===e?this.$apollo.mutate({mutation:s["c"],variables:{studentId:this.delid,mentorId:this.$q.localStorage.getItem("mentorId")}}).then(function(e){!0===e.data.delStudent.ok?t.$emit("studentDelCompleted",1):t.alert=!0,console.log("delete student done"+e.data.delStudent.ok)}):this.$emit("studentDelCompleted",0)}}},r=i,d=n("2877"),o=Object(d["a"])(r,a,l,!1,null,null,null);t["default"]=o.exports},"98a3":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"q-px-sm"},[n("q-table",{attrs:{title:"Your Students",data:e.tabledata,columns:e.columns,"visible-columns":e.visibleColumns,separator:"cell","row-key":"name","table-header-style":{backgroundColor:"lightblue"},"fixed-center":"",bordered:"",dense:"",loading:e.loading},scopedSlots:e._u([{key:"top",fn:function(t){return[n("div",{staticClass:"col-2 q-table__title"},[e._v("\n        Your Students\n      ")]),n("q-space"),n("q-btn",{attrs:{flat:"",round:"",icon:"playlist_add"},on:{click:function(t){e.addStudent=!0}}}),n("q-btn",{staticClass:"q-ml-md",attrs:{flat:"",round:"",dense:"",icon:t.inFullscreen?"fullscreen_exit":"fullscreen"},on:{click:t.toggleFullscreen}})]}},{key:"body-cell-membership",fn:function(t){return n("q-td",{attrs:{props:t}},[n("q-btn",{attrs:{flat:"","no-caps":"","text-color":"green"},on:{click:function(n){return e.toMembershipUpdate(t.row.id)}}},[e._v("\n        "+e._s(e.membershipstatus)+"\n      ")])],1)}},{key:"body-cell-action",fn:function(t){return n("q-td",{attrs:{props:t}},[n("q-btn",{attrs:{flat:"",icon:"edit"},on:{click:function(n){return e.toEditStudent(t.row.id)}}}),n("q-btn",{attrs:{flat:"",icon:"delete"},on:{click:function(n){return e.toDeleteStudent(t.row.id,t.row.name)}}})],1)}}])}),n("membership-update",{attrs:{actstudent:e.actStudent,membershipactive:e.membershipActive},on:{memebershipClose:e.membershipDeactive}}),n("add-student",{attrs:{active:e.addStudent},on:{studentAddCompleted:e.addStudentDone}}),n("del-student",{attrs:{delid:e.delId,active:e.delStudent,name:e.delName},on:{studentDelCompleted:e.delStudentDone}})],1)},l=[],s=(n("c5f6"),{name:"StudentTable",components:{"membership-update":n("e7d4").default,"add-student":n("c952").default,"del-student":n("90d8").default},props:{tabledata:{type:Array,default:function(){return[]}},membershipstatus:{type:String,default:""},loading:{type:Boolean,default:!0}},data:function(){return{alert:!1,errorId:0,active:!1,addStudent:!1,delStudent:!1,delId:0,delName:"",actStudent:0,studentId:0,membershipActive:!1,visibleColumns:["id","name","password","level","assignment","report","membership","expire","action"],columns:[{name:"id",required:!0,label:"Id",align:"center",field:"id",sortable:!0},{name:"name",align:"center",label:"Name",field:"name",sortable:!0},{name:"password",align:"center",label:"Password",field:"password",sortable:!1},{name:"level",align:"center",label:"Level",field:"level",sortable:!0},{name:"assignment",align:"center",label:"Assignment",field:"assignment",sortable:!1},{name:"report ",align:"center",label:"Report",field:"report",sortable:!1},{name:"membership",align:"center",label:"Membership",field:"membership",sortable:!1},{name:"expire",align:"center",label:"expire",field:"expire",sortable:!0},{name:"action",align:"center",label:"action",field:"action",sortable:!1}]}},methods:{toEditStudent:function(e){this.active=!0},toMembershipUpdate:function(e){this.actStudent=Number(e),this.membershipActive=!0},membershipDeactive:function(){this.actStudent=0,this.membershipActive=!1},addStudentDone:function(e){this.addStudent=!1,e>0&&this.$emit("tableUpdate")},toDeleteStudent:function(e,t){this.delId=Number(e),this.delName=t,this.delStudent=!0},delStudentDone:function(e){this.delStudent=!1,e>0&&this.$emit("tableUpdate")}}}),i=s,r=n("2877"),d=Object(r["a"])(i,a,l,!1,null,null,null);t["default"]=d.exports},a9b0:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("q-page",{staticClass:"flex-center"},[n("div",[n("q-splitter",{staticStyle:{height:"400px"},scopedSlots:e._u([{key:"before",fn:function(){return[n("div",{staticClass:"q-pa-md"},[n("q-tree",{attrs:{nodes:e.studentTree,"node-key":"label","selected-color":"primary",selected:e.selected,"default-expand-all":""},on:{"update:selected":function(t){e.selected=t}}})],1)]},proxy:!0},{key:"after",fn:function(){return[n("q-tab-panels",{attrs:{animated:"","transition-prev":"jump-up","transition-next":"jump-up"},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}},[n("q-tab-panel",{attrs:{name:"All Students"}},[n("div",{staticClass:"row q-mb-md"},[n("q-space"),n("q-btn",{attrs:{"no-caps":""}},[e._v("\n                Management Tools\n              ")])],1),n("students-table",{attrs:{tabledata:e.tableData,membershipstatus:e.membershipStatus,loading:e.loadingTable},on:{tableUpdate:e.refreshStudents}})],1),e._l(e.studentTree[0].children,function(e){return n("q-tab-panel",{key:e.label,attrs:{name:e.label}},[n("students-panel")],1)})],2)]},proxy:!0}]),model:{value:e.splitterModel,callback:function(t){e.splitterModel=t},expression:"splitterModel"}})],1)])},l=[],s=(n("7f7f"),n("0306")),i={name:"MentorHome",components:{"students-table":n("7d8e").default,"students-panel":n("5783").default},data:function(){return{skipQueryAllStudents:!1,skipQueryStudent:!0,loadingTable:!0,studentId:0,mentorId:1,studentName:"",age:0,membershipStatus:"Get Membership",tableData:[],splitterModel:15,selected:"All Students",studentTree:[{id:"root",lazy:!1,label:"All Students",children:[{lazy:!1,label:"No Student",icon:"face"}]}],allStudents:{id:0,name:"",password:"",levels:"",assignment:"",expireDate:""}}},computed:{updateTree:function(){return this.studentTree}},created:function(){this.$q.localStorage.set("mentorId",this.mentorId)},methods:{updateAllStudents:function(){if(this.loadingTable=!1,this.allStudents.length>0){console.log("Get all allStudents - "+this.allStudents.length),this.tableData=[],this.studentTree[0].children=[];for(var e=0;e<this.allStudents.length;e++){var t="None";null===this.allStudents[e].expireDate?this.membershipStatus="Get Membership":(this.membershipStatus="Upgrade Membership",t=this.allStudents[e].expireDate);var n=this.allStudents[e].assignment[0]["k_task"];console.log(n),this.tableData.push({id:this.allStudents[e].id,name:this.allStudents[e].name,password:this.allStudents[e].password,level:this.allStudents[e].levels.k_math,assignment:n,expire:t}),this.studentTree[0].children.push({lazy:!1,label:this.allStudents[e].name,icon:"face"})}}else console.log("student not updated yet")},updateStudent:function(){if(this.student.length>0){this.tableData=[];for(var e=0;e<this.student.assignment.length;e++)this.tableData.push({name:this.student.assignment[e]["k_task"],Description:this.student.assignment[e]["k_desc"]})}else this.student.assignment="",this.student.stickers=0,this.student.stars=0,this.student.levels="",console.log("student not updated yet")},refreshStudents:function(){this.skipQueryAllStudents=!1,this.$apollo.queries.allStudents.refetch({mentorId:this.mentorId})}},apollo:{allStudents:{query:s["a"],variables:function(){return{mentorId:this.mentorId}},error:function(e){console.error("We've got an error!",e)},skip:function(){return this.skipQueryAllStudents},result:function(e,t){this.updateAllStudents()}},student:{query:s["b"],variables:function(){return{studentId:this.studentId}},error:function(e){console.error("We've got an error!",e)},skip:function(){return this.skipQueryStudent},result:function(e,t){this.updateStudent()}}}},r=i,d=n("2877"),o=Object(d["a"])(r,a,l,!1,null,null,null);t["default"]=o.exports},c952:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("q-form",[n("q-dialog",{attrs:{persistent:""},model:{value:e.active,callback:function(t){e.active=t},expression:"active"}},[n("q-card",{staticStyle:{width:"450px","max-width":"80vw"}},[n("q-card-section",{attrs:{align:"center"}},[n("div",{staticClass:"row"},[n("q-space"),n("q-btn",{attrs:{flat:"",round:"",icon:"cancel"},on:{click:function(t){return e.addStudentDone(0)}}})],1)]),n("q-card-section",{attrs:{align:"center"}},[n("q-btn",{staticStyle:{color:"green"},attrs:{outline:"",label:"Add New Student"}})],1),n("q-card-section",{staticClass:"q-px-xl q-mx-xl q-mt-xl"},[n("q-input",{attrs:{rounded:"",outlined:"",color:"green",label:"Name:"},scopedSlots:e._u([{key:"append",fn:function(){return[n("q-icon",{attrs:{name:"face",color:"orange"}})]},proxy:!0}]),model:{value:e.name,callback:function(t){e.name=t},expression:"name"}})],1),n("q-card-section",{staticClass:"q-px-xl q-mx-xl q-mb-xl"},[n("q-input",{attrs:{"q-ma-lg":"",rounded:"",outlined:"",color:"green",label:"Age:",type:"text"},model:{value:e.age,callback:function(t){e.age=t},expression:"age"}})],1),n("q-card-actions",{staticClass:"bg-white text-teal",attrs:{align:"center"}},[n("q-btn",{attrs:{label:"OK"},on:{click:function(t){return e.doAddStudent()}}})],1)],1)],1),n("q-dialog",{model:{value:e.alert,callback:function(t){e.alert=t},expression:"alert"}},[n("q-card",[n("q-card-section",[n("div",{staticClass:"text-h6"},[e._v("\n          Error: Student "+e._s(e.errorName)+" already exist!\n        ")])]),n("q-card-actions",{attrs:{align:"right"}},[n("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"OK",color:"primary"}})],1)],1)],1)],1)},l=[],s=(n("c5f6"),n("7f7f"),n("63fb")),i={name:"StudentAdd",props:{active:{type:Boolean,default:!1}},data:function(){return{alert:!1,age:"",name:"",mentorId:0,errorName:""}},updated:function(){this.mentorId=this.$q.localStorage.getItem("mentorId"),console.log("read mentor id - "+this.mentorId)},methods:{doAddStudent:function(){var e=this;console.log("add: "+this.name+" age:"+this.age+"mentorid:"+this.mentorId),this.$apollo.mutate({mutation:s["a"],variables:{name:this.name,age:Number(this.age),mentorId:this.$q.localStorage.getItem("mentorId")}}).then(function(t){!1===t.data.addStudent.ok?(e.errorName=t.data.addStudent.student.name,e.alert=!0):(console.log("add student done"+t.data.addStudent.ok),e.addStudentDone(1))})},addStudentDone:function(e){this.$emit("studentAddCompleted",e)}}},r=i,d=n("2877"),o=Object(d["a"])(r,a,l,!1,null,null,null);t["default"]=o.exports},e7d4:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("q-form",[n("q-dialog",{staticStyle:{width:"100%"},attrs:{persistent:""},model:{value:e.membershipactive,callback:function(t){e.membershipactive=t},expression:"membershipactive"}},[n("q-card",{staticStyle:{width:"80%"}},[n("q-card-section",{attrs:{align:"center"}},[n("div",{staticClass:"row"},[n("q-space"),n("q-btn",{attrs:{align:"right",dense:"",flat:"",round:"",icon:"close",color:"red"},on:{click:e.membershipClose}},[n("q-tooltip",{attrs:{"content-class":"bg-white text-primary"}},[e._v("\n              Close\n            ")])],1)],1)]),n("q-card-section",{attrs:{align:"center"}},[n("q-btn",{staticStyle:{color:"green"},attrs:{"no-caps":""}},[e._v("\n          Membership for "+e._s(e.actstudent)+"\n        ")])],1),n("q-card-section",[n("div",{staticClass:"q-pa-md"},[n("q-list",{attrs:{link:""}},[n("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{tag:"label"}},[n("q-item-section",{attrs:{avatar:""}},[n("q-radio",{attrs:{val:"plan-1",color:"orange-10"},model:{value:e.plan,callback:function(t){e.plan=t},expression:"plan"}})],1),n("q-item-section",[n("q-item-label",{staticStyle:{color:"orange"}},[e._v("\n                  Plan 1: Subscription Monthly by 00\n                ")]),n("q-item-label",{attrs:{caption:""}},[e._v("\n                  Cancel at anytime you want\n                ")])],1)],1),n("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{tag:"label"}},[n("q-item-section",{attrs:{avatar:""}},[n("q-radio",{attrs:{val:"plan-2",color:"orange-10"},model:{value:e.plan,callback:function(t){e.plan=t},expression:"plan"}})],1),n("q-item-section",[n("q-item-label",{staticStyle:{color:"orange"}},[e._v("\n                  Plan 2: One year membership for 00\n                ")]),n("q-item-label",{attrs:{caption:""}},[e._v("\n                  Most popular choice\n                ")])],1)],1),n("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{tag:"label"}},[n("q-item-section",{attrs:{avatar:""}},[n("q-radio",{attrs:{val:"plan-3",color:"orange-10"},model:{value:e.plan,callback:function(t){e.plan=t},expression:"plan"}})],1),n("q-item-section",[n("q-item-label",{staticStyle:{color:"orange"}},[e._v("\n                  Plan 3: Five year membership for 00\n                ")]),n("q-item-label",{attrs:{caption:""}},[e._v("\n                  This covers all the KS1 and KS2 years.\n                ")])],1)],1)],1),n("q-separator",{staticClass:"q-ma-sm"})],1)]),n("q-card-section",{staticClass:"q-px-xl q-mx-xl"},[e.usePromotion?n("div",{staticClass:"row q-gutter-sm"},[n("q-input",{attrs:{rounded:"",outlined:"",type:"text",color:"green",label:"Promotion Code:"},scopedSlots:e._u([{key:"append",fn:function(){return[n("q-icon",{attrs:{name:"receipt",color:"orange"}})]},proxy:!0}],null,!1,77708541),model:{value:e.promotion,callback:function(t){e.promotion=t},expression:"promotion"}}),n("q-btn",{attrs:{"no-caps":"",rounded:"",label:"Apply Code"},on:{click:e.applyCode}})],1):e._e(),n("div",{staticClass:"q-px-sm q-mt-sm"},[e._v("\n          Your selection is: "),n("strong",[e._v("\n            "+e._s(e.plan)+"\n          ")])])])],1)],1)],1)},l=[],s=(n("c5f6"),{name:"MembershipUpdate",props:{actstudent:{type:Number,default:0},membershipactive:{type:Boolean,default:!1}},data:function(){return{plan:"",usePromotion:!0,promotion:""}},methods:{membershipClose:function(){this.$emit("memebershipClose")},applyCode:function(){console.log(this.promotion)}}}),i=s,r=n("2877"),d=Object(r["a"])(i,a,l,!1,null,null,null);t["default"]=d.exports}}]);