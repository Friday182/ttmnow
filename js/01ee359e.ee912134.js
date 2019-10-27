(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["01ee359e"],{1674:function(t,e,n){"use strict";var s=n("c6a5"),a=n.n(s);a.a},1968:function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"q-mx-lg q-px-lg"},[n("q-table",{attrs:{title:"Today's Homework",data:t.assignmentData,columns:t.columns,separator:"cell","row-key":"name","table-header-style":{backgroundColor:"lightblue"},"fixed-center":"",bordered:"",dense:"",loading:t.loading},scopedSlots:t._u([{key:"top",fn:function(e){return[n("div",{staticClass:"col-4 q-table__title"},[t._v("\n        Today's Homework\n      ")]),n("q-space"),n("q-btn",{attrs:{flat:"",disable:""}},[t._v("\n        Level: "+t._s(t.mathLevel)+"\n      ")])]}},{key:"body-cell-play",fn:function(e){return n("q-td",{attrs:{props:e}},[n("q-btn",{attrs:{flat:"",icon:"play_circle_outline"},on:{click:function(n){return t.toRunTask(e.row.name)}}})],1)}},{key:"body-cell-done",fn:function(t){return n("q-td",{attrs:{props:t}},[t.row.done?n("q-btn",{attrs:{flat:"",color:"green",icon:"done_outline"}}):n("q-spinner-hourglass",{attrs:{color:"grey",size:"sm"}})],1)}}])}),n("runTask",{attrs:{active:t.active,taskid:t.currentTaskId},on:{completed:t.processTaskClosed}}),t.devMode?n("div",{staticClass:"row"},[n("q-input",{staticStyle:{width:"20px"},attrs:{label:"I"},model:{value:t.text1,callback:function(e){t.text1=e},expression:"text1"}}),n("q-input",{staticStyle:{width:"40px"},attrs:{label:"has"},model:{value:t.text2,callback:function(e){t.text2=e},expression:"text2"}}),n("q-input",{staticStyle:{width:"30px"},attrs:{label:"an"},model:{value:t.text4,callback:function(e){t.text4=e},expression:"text4"}}),n("q-input",{staticStyle:{width:"40px","font-size":"10pt"},attrs:{label:"dog."},model:{value:t.text3,callback:function(e){t.text3=e},expression:"text3"}})],1):t._e()],1)},a=[],r=(n("8e6e"),n("8a81"),n("ac6a"),n("cadf"),n("06db"),n("456d"),n("c47a")),o=n.n(r),i=(n("7f7f"),n("2f62"));function c(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,s)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?c(n,!0).forEach((function(e){o()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var u={name:"StudentAssignment",components:{runTask:n("ac5f").default},data:function(){return{devMode:!0,text1:"",text2:"",text3:"",text4:"",active:!1,currentTaskId:"NA",loading:!1,columns:[{name:"Task",required:!0,label:"Task",align:"center",field:function(t){return t.name},format:function(t){return"".concat(t)},sortable:!0},{name:"Description",align:"center",label:"Description",field:"Description",sortable:!1},{name:"play",align:"center",label:"play",field:"play",sortable:!1},{name:"done",align:"center",label:"Done",field:"done",sortable:!1}]}},computed:l({},Object(i["c"])("student",["currentStudent"]),{assignmentData:{get:function(){for(var t=[],e=0;e<this.currentStudent.assignment.length;e++)t.push({name:this.currentStudent.assignment[e]["k_task"],Description:this.currentStudent.assignment[e]["k_desc"],done:this.currentStudent.assignment[e]["k_done"]});return t},set:function(t){}},mathLevel:function(){return this.currentStudent.levels["k_math"]}}),mounted:function(){console.log("mounted assignment component")},updated:function(){},methods:l({},Object(i["b"])("student",["updateAssignmentDone"]),{toRunTask:function(t){for(var e=0;e<this.assignmentData.length;e++)this.assignmentData[e].name===t&&this.assignmentData[e].done;this.$q.fullscreen.request(),this.currentTaskId=t,this.active=!0},processTaskClosed:function(t){t>=2&&this.updateAssignmentDone(this.currentTaskId),this.$q.fullscreen.exit(),this.currentTaskId="NA",this.active=!1}})},d=u,p=n("2877"),f=Object(p["a"])(d,s,a,!1,null,null,null);e["default"]=f.exports},"2e1a":function(t,e,n){},4971:function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("q-dialog",{attrs:{maximized:!0},model:{value:t.active,callback:function(e){t.active=e},expression:"active"}},[n("div",{staticClass:"q-pa-md"},[n("q-tabs",{staticClass:"bg-grey-3 shadow-2",attrs:{"no-caps":""},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[n("q-tab",{attrs:{name:"pokemon",icon:"face",label:"pokemon"}}),n("q-tab",{attrs:{name:"fruit",icon:"mail",label:"fruit"}})],1),n("q-tab-panels",{attrs:{animated:""},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[n("q-tab-panel",{attrs:{name:"pokemon"}},[n("div",{staticClass:"row flex"},t._l(t.pokemonData,(function(e,s){return n("div",{key:s,staticClass:"q-gutter-xl"},[n("q-btn",{staticClass:"q-ma-xl",attrs:{size:"50px",icon:e.path},on:{click:function(e){return t.choose(s)}}})],1)})),0)]),n("q-tab-panel",{attrs:{name:"fruit"}},[n("div",{staticClass:"row flex"},t._l(t.fruitData,(function(t){return n("div",{key:t.id,staticClass:"q-gutter-xl"},[n("q-img",{staticStyle:{height:"80px",width:"80px"},attrs:{src:t.path}})],1)})),0)])],1),n("q-card",{staticClass:"q-mt-lg"},[n("q-separator"),n("q-card-section",[t._v("\n        Please Selecte\n        "),n("q-btn",{staticStyle:{"font-size":"12pt"},attrs:{outline:"",round:"","text-color":"green"}},[t._v("\n          "+t._s(t.selectNum)+"\n        ")]),t._v("\n        Stickers:\n      ")],1),n("q-card-section",t._l(10,(function(e){return n("q-btn",{key:e,staticClass:"q-mx-xs",attrs:{flat:"",size:"40px",icon:t.picked[e-1]},on:{click:function(n){return t.removePic(e-1)}}})})),1),n("q-card-section",[n("q-btn",{staticStyle:{"font-size":"12pt"},attrs:{push:"",label:"Ok","text-color":"white",color:"blue"},on:{click:t.selectDone}})],1)],1)],1)])},a=[],r=(n("7f7f"),n("c5f6"),{name:"Stickers",props:{active:{type:Boolean,default:!1},selectNum:{type:Number,default:0}},data:function(){return{tab:"pokemon",pokemonData:[],fruitData:[],picked:[],selection:[]}},watch:{selectNum:function(t,e){console.log("select num changed?"),this.selection=[],this.picked=[]}},created:function(){for(var t=1;t<26;t++)this.pokemonData.push({id:t,path:"img:statics/stickers/pokemon/pm ("+t+").jpg",name:"pokemon/pm ("+t+").jpg"});for(var e=1;e<12;e++)this.fruitData.push({id:e,path:"statics/stickers/fruit/fruit ("+e+").jpg",name:"fruit/fruit ("+e+").jpg"})},methods:{choose:function(t){console.log("picked - ",t),this.selection.length<10&&this.selection.length<this.selectNum&&(this.selection.push(this.pokemonData[t].name),this.picked.push(this.pokemonData[t].path)),console.log(this.picked)},selectDone:function(){console.log("updated "+this.selection.length,this.selectNum),this.selection.length<=this.selectNum&&this.$emit("selectSticker",this.selection)},removePic:function(t){console.log("remove pic idx - ",t),this.picked.splice(t),this.selection.splice(t)}}}),o=r,i=n("2877"),c=Object(i["a"])(o,s,a,!1,null,null,null);e["default"]=c.exports},6076:function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("q-page",{staticClass:"flex-center q-pa-md"},[n("div",{staticClass:"column"},[n("q-tabs",{attrs:{"no-caps":"",dense:""},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[n("q-btn",{staticClass:"text-weight-bolder",attrs:{flat:"","no-caps":"",size:"xl",color:"grey-1","text-color":"orange"}},[t._v("\n        Welcom "+t._s(t.currentStudent.name)+"!\n      ")]),n("q-space"),n("q-tab",{staticClass:"text-blue",attrs:{name:"assignment",icon:"assignment",label:"assignment"}}),n("q-tab",{staticClass:"text-blue",attrs:{name:"logs",icon:"list",label:"Task Logs"}}),n("q-tab",{staticClass:"text-blue",attrs:{name:"stickerTable",icon:"insert_photo",label:"Stickers"}},[n("q-badge",{attrs:{color:"red",floating:""}},[t._v("\n          "+t._s(t.currentStudent.stickers)+"\n        ")])],1),n("q-tab",{staticClass:"text-blue",attrs:{name:"message",icon:"chat",label:"Messages"}},[t.numNewMsg>0?n("q-badge",{attrs:{color:"red",floating:""}},[t._v("\n          "+t._s(t.numNewMsg)+"\n        ")]):t._e()],1),n("q-tab",{staticClass:"text-blue",attrs:{name:"overview",icon:"history",label:"Overview",disable:!t.student.membershipActive}},[t.student.membershipActive?n("q-badge",{attrs:{color:"red",floating:""}},[t._v("\n          New\n        ")]):n("q-badge",{attrs:{color:"red",floating:""}},[t._v("\n          Premium\n        ")])],1),n("q-space"),n("q-chip",{staticClass:"glossy",attrs:{color:"orange","text-color":"white","icon-right":"thumb_up"}},[t._v("\n        "+t._s(t.currentStudent.stickers)+"\n      ")]),n("q-chip",{staticClass:"glossy",attrs:{color:"orange","text-color":"white","icon-right":"star"}},[t._v("\n        "+t._s(t.currentStudent.stars)+"\n      ")]),n("q-chip",{staticClass:"glossy",attrs:{color:"orange","text-color":"white","icon-right":"face"}},[t._v("\n        "+t._s(t.numCoin)+"\n      ")])],1),n("q-separator"),n("q-tab-panels",{attrs:{animated:"","transition-prev":"jump-up","transition-next":"jump-up"},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[n("q-tab-panel",{attrs:{name:"assignment"}},[n("div",{staticClass:"col col-md-10 q-pa-xl"},[n("assignment")],1)]),n("q-tab-panel",{attrs:{name:"logs"}},[n("task-log",{attrs:{"student-id":Number(t.currentStudent.id),"num-log":t.numLog,"new-log":t.newLog}})],1),n("q-tab-panel",{attrs:{name:"stickerTable"}},[n("sticker-table")],1),n("q-tab-panel",{attrs:{name:"message"}},[n("messages")],1),n("q-tab-panel",{attrs:{name:"overview"}},[n("overview")],1)],1)],1)])},a=[],r=(n("8e6e"),n("8a81"),n("ac6a"),n("cadf"),n("06db"),n("456d"),n("7f7f"),n("c47a")),o=n.n(r),i=n("2f62");function c(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,s)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?c(n,!0).forEach((function(e){o()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var u={name:"StudentHome",components:{messages:n("d99d").default,assignment:n("1968").default,"sticker-table":n("c977").default,overview:n("ffa0").default,"task-log":n("9c53").default},data:function(){return{tab:"assignment",numCoin:"0",numNewMsg:0,numLog:10,newLog:!0}},computed:l({},Object(i["c"])("student",["currentStudent"]),{},Object(i["c"])("currentUser",["currentUser"]),{student:function(){return this.currentStudent},stickers:function(){return this.currentStudent.stickers}}),watch:{stickers:function(t,e){console.log("Stickers changed ",e,t),this.tab="stickerTable"}},created:function(){0===this.student.id&&this.$router.push("/")},beforeMount:function(){console.log("student home before mount - ",this.currentUser.sessionLogin),"student"!==this.currentUser.sessionLogin&&this.$router.push("/")},mounted:function(){console.log("StudentHome mounted. read from vuex id : name - "+this.student.id+": "+this.student.name),this.numCoin=10*this.student.stars+this.student.stickers},methods:{}},d=u,p=n("2877"),f=Object(p["a"])(d,s,a,!1,null,null,null);e["default"]=f.exports},6391:function(t,e,n){"use strict";var s=n("6a62"),a=n.n(s);a.a},"6a62":function(t,e,n){},"9c53":function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"q-px-sm q-mt-lg"},[n("q-table",{attrs:{title:"Logs Table",data:t.tableData,columns:t.columns,"visible-columns":t.visibleColumns,separator:"cell","wrap-cells":"","row-key":"date","table-header-style":{backgroundColor:"lightblue"},"fixed-center":"",bordered:"",dense:"",pagination:t.pagination,loading:t.loading},on:{"update:pagination":function(e){t.pagination=e}},scopedSlots:t._u([{key:"top",fn:function(e){return[n("div",{staticClass:"col-2 q-table__title"},[t._v("\n        Your Students\n      ")]),n("q-space"),n("q-btn",{staticClass:"q-ml-md",attrs:{flat:"",round:"",dense:"",icon:e.inFullscreen?"fullscreen_exit":"fullscreen"},on:{click:e.toggleFullscreen}})]}},{key:"body-cell-action",fn:function(e){return n("q-td",{attrs:{props:e}},[t.isDeletable?n("q-btn",{attrs:{flat:"",icon:"delete"},on:{click:function(n){return t.toDeleteLog(e.row.id)}}}):t._e()],1)}}])}),n("alert-msg",{attrs:{active:t.alert,msg:t.alertMsg},on:{cancelAlert:t.alertClose}})],1)},a=[],r=(n("8e6e"),n("8a81"),n("ac6a"),n("cadf"),n("06db"),n("456d"),n("c47a")),o=n.n(r),i=(n("c5f6"),n("0306")),c=n("63fb"),l=n("2f62");function u(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,s)}return n}function d(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?u(n,!0).forEach((function(e){o()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):u(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var p={name:"LogTable",components:{"alert-msg":n("a5aa").default},props:{studentId:{type:Number,default:0},newLog:{type:Boolean,default:!1},numLog:{type:Number,default:10}},data:function(){return{alert:!1,alertMsg:"",pagination:{page:0,rowsPerPage:10},visibleColumns:["name","date","taskid","totalque","numwrong","correctperc","totalsec","avgsec","stdsec","score","action"],columns:[{name:"name",align:"center",label:"Name",field:"name",sortable:!0},{name:"date",align:"center",label:"Date",field:"date",sortable:!0},{name:"taskid",align:"center",label:"Task Id",field:"taskid",sortable:!0},{name:"totalque",align:"center",label:"Number Questions",field:"totalque",sortable:!0},{name:"numwrong ",align:"center",label:"Wrong  Number",field:"numwrong",sortable:!0},{name:"correctperc",align:"center",label:"Correct  Percentage",field:"correctperc",sortable:!0},{name:"totalsec",align:"center",label:"Total Sec",field:"totalsec",sortable:!0},{name:"avgsec",align:"center",label:"Sec/Question",field:"avgsec",sortable:!0},{name:"stdsec",align:"center",label:"Reference Sec/Que",field:"stdsec",sortable:!0},{name:"score",align:"center",label:"Score",field:"score",sortable:!0},{name:"action",align:"center",label:"action",field:"action",sortable:!1}],taskLogs:[],tableData:[],loading:!0,skipQueryTasklog:!1}},computed:d({},Object(l["c"])("currentUser",["currentUser"]),{isDeletable:function(){return"mentor"===this.currentUser.sessionLogin}}),mounted:function(){console.log("task log table mounted - ",this.studentId),!0===this.newLog&&(this.skipQueryTasklog=!1,this.$apollo.queries.taskLogs.refetch({userId:this.studentId,numLog:this.numLog}))},destroyed:function(){console.log("task log table destroied")},methods:{updateTasklog:function(t){if(this.loading=!1,t.length>0){console.log("Read task log updated - "+t.length),this.tableData=[];for(var e=0;e<t.length;e++)this.tableData.push({id:t[e].id,name:t[e].userName,date:String(t[e].createDate).slice(0,19),taskid:t[e].taskId,totalque:t[e].totalQue,numwrong:t[e].firstWrong,correctperc:t[e].correctPerc,totalsec:t[e].totalSec,avgsec:t[e].avgSec,stdsec:t[e].avgStdSec,score:t[e].totalScore})}else console.log("Read task log failed!")},toDeleteLog:function(t){var e=this;console.log("delete: "+t),this.$apollo.mutate({mutation:c["f"],variables:{logId:t}}).then((function(n){if(!1===n.data.delLog.ok)e.alertMsg="Update stickers failed, please report error to Support@DecomTechnology.com.",e.alert=!0;else for(var s=0;s<e.tableData.length;s++)e.tableData[s].id===t&&e.tableData.splice(s,1)}))},alertClose:function(){this.alert=!1,this.alertMsg=""}},apollo:{taskLogs:{query:i["e"],variables:function(){return{userId:this.studentId,numLog:this.numLog}},error:function(t){console.error("We've got an error!",t)},skip:function(){return this.skipQueryTasklog},result:function(t,e){this.updateTasklog(t.data.taskLogs)}}}},f=p,g=(n("6391"),n("2877")),m=Object(g["a"])(f,s,a,!1,null,null,null);e["default"]=m.exports},bebe:function(t,e,n){"use strict";var s=n("2e1a"),a=n.n(s);a.a},c6a5:function(t,e,n){},c977:function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"q-mx-xl q-px-xl"},[n("q-separator"),n("div",{staticClass:"row"},t._l(t.stickerData,(function(t,e){return n("div",{key:e,staticClass:"col-2"},[n("q-card",{staticClass:"my-card q-ma-md"},[n("img",{staticStyle:{height:"120px",width:"120px"},attrs:{src:t.path}})])],1)})),0),n("stickers",{attrs:{active:t.showStickers,"select-num":t.selectNum},on:{selectSticker:t.getSticker}}),n("alert-msg",{attrs:{active:t.alert,msg:t.alertMsg},on:{cancelAlert:t.alertClose}})],1)},a=[],r=(n("8e6e"),n("8a81"),n("ac6a"),n("cadf"),n("06db"),n("456d"),n("c47a")),o=n.n(r),i=n("2f62"),c=n("63fb");function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,s)}return n}function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(n,!0).forEach((function(e){o()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var d={name:"StickerTable",components:{"alert-msg":n("a5aa").default,stickers:n("4971").default},data:function(){return{alert:!1,skipQuerySticker:!1,localStickerLog:[],alertMsg:""}},computed:u({},Object(i["c"])("student",["currentStudent"]),{stickerData:{get:function(){for(var t=[],e=0;e<this.currentStudent.stickerLog.length;e++)t.push({id:e,path:"statics/stickers/"+this.currentStudent.stickerLog[e]});return t},set:function(t){}},stickerNum:function(){return this.currentStudent.stickers},selectNum:function(){return this.currentStudent.stickers>this.currentStudent.stickerLog.length?(console.log("stickers, sticklog length - ",this.currentStudent.stickers,this.currentStudent.stickerLog.length),this.currentStudent.stickers-this.currentStudent.stickerLog.length):0},showStickers:function(){return this.selectNum>0}}),updated:function(){},methods:u({},Object(i["b"])("student",["updateStudent"]),{updateSticker:function(t){console.log("update sticker table now - ",t);for(var e=[],n=0;n<this.currentStudent.stickerLog.length;n++)e.push(this.currentStudent.stickerLog[n]);for(var s=0;s<t.length;s++)e.push(t[s]);console.log("new sticker log - ",e),this.updateStudent({stickerLog:e})},getSticker:function(t){var e=this;console.log("get selected: "+JSON.stringify(t),t.length,this.currentStudent.id),this.$apollo.mutate({mutation:c["k"],variables:{studentId:this.currentStudent.id,stickerNum:t.length,stickerLog:JSON.stringify(t)}}).then((function(n){!1===n.data.updateStudent.ok?(e.alertMsg="Update stickers failed, please report to your mentor.",e.alert=!0):e.updateSticker(t)}))},alertClose:function(){this.alert=!1,this.alertMsg=""}})},p=d,f=(n("1674"),n("2877")),g=Object(f["a"])(p,s,a,!1,null,"175afa36",null);e["default"]=g.exports},d99d:function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("q-page",{staticClass:"flex-center"},[n("div",[n("q-splitter",{staticStyle:{height:"100%"},scopedSlots:t._u([{key:"before",fn:function(){return[n("div",{staticClass:"q-pa-md",staticStyle:{height:"100%","max-width":"350px"}},[n("q-toolbar",{staticClass:"bg-primary text-white shadow-2"},[n("q-toolbar-title",[t._v("\n              Contacts\n            ")])],1),n("q-list",{attrs:{bordered:""}},[t._l(t.contacts,(function(e,s){return n("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],key:s,staticClass:"q-my-sm",attrs:{clickable:"",active:s==t.activeId,"active-class":"my-menu-link"},on:{click:function(e){return t.selectChat(s)}}},[n("q-item-section",{attrs:{avatar:""}},[n("q-avatar",{attrs:{color:"primary","text-color":"white"}},[t._v("\n                  "+t._s(e.k_letter)+"\n                ")])],1),n("q-item-section",[n("q-item-label",[t._v("\n                  "+t._s(e.k_name)+"\n                  "),n("q-item-label",{attrs:{caption:"",lines:"1"}},[t._v("\n                    "+t._s(e.k_role)+"\n                  ")])],1)],1),n("q-item-section",{attrs:{side:""}},[n("q-icon",{attrs:{name:"chat_bubble",color:"green"}})],1)],1)})),n("q-separator")],2)],1)]},proxy:!0},{key:"after",fn:function(){return[n("q-separator"),n("div",{staticClass:"q-pa-md row justify-center"},[n("q-card",{staticStyle:{width:"80%",height:"50%","max-width":"1000px"}},[t._l(t.showMsg,(function(t,e){return n("q-chat-message",{key:e,attrs:{name:t.sender,avatar:"statics/icons/128.png",text:t.text,sent:t.send,stamp:t.timeStamp}})})),0===t.showMsg.length?n("q-btn",{staticClass:"q-ma-xl q-pa-xl",attrs:{flat:"","no-caps":"",size:"lg","text-color":"grey",label:"You don't have any message ..."}}):t._e()],2)],1),n("div",{staticClass:"q-pa-md q-gutter-sm"},[n("q-editor",{attrs:{"min-height":"6rem"},model:{value:t.editor,callback:function(e){t.editor=e},expression:"editor"}}),n("q-btn",{attrs:{"no-caps":"",color:"primary",label:"Send",icon:"mail",disable:t.btnActive},on:{click:t.sendMsg}}),n("q-chip",{attrs:{icon:"error_outline",color:"white","text-color":"grey"}},[t._v("\n            (Note: Message length between 20 to 2000 letters)\n          ")])],1)]},proxy:!0}]),model:{value:t.splitterModel,callback:function(e){t.splitterModel=e},expression:"splitterModel"}}),n("alert-msg",{attrs:{active:t.alert,msg:t.alertMsg},on:{cancelAlert:t.alertClose}})],1)])},a=[],r=(n("8e6e"),n("8a81"),n("ac6a"),n("cadf"),n("06db"),n("456d"),n("7f7f"),n("c47a")),o=n.n(r),i=n("2f62"),c=n("63fb"),l=n("0306");function u(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,s)}return n}function d(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?u(n,!0).forEach((function(e){o()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):u(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var p={name:"Messages",components:{"alert-msg":n("a5aa").default},data:function(){return{alert:!1,alertMsg:"",splitterModel:30,editor:"",activeId:0,skipQuerySticker:!1,skipQueryReadMsg:!1,interHandler:0,messages:[],allMessages:[]}},computed:d({},Object(i["c"])("currentUser",["currentUser"]),{contacts:function(){return this.currentUser.contacts},btnActive:function(){return!(this.editor.length>20&&this.editor.length<2e3)},curId:function(){return this.currentUser.id},curName:function(){return this.currentUser.name},showMsg:function(){for(var t=[],e=0;e<this.messages.length;e++)this.contacts[this.activeId]&&(this.contacts[this.activeId].k_id!==this.messages[e].txId&&this.contacts[this.activeId].k_id!==this.messages[e].rxId||t.push(this.messages[e]));return t}}),mounted:function(){this.interHandler=setInterval(this.refreshMsg,1e4),console.log("mentor contacts - ",JSON.stringify(this.currentUser.contacts))},beforeDestroy:function(){clearInterval(this.interHandler)},methods:d({},Object(i["b"])("student",["updateStudent"]),{selectChat:function(t){console.log("Chat with - ",t),this.activeId=t},sendMsg:function(){var t=this;console.log("sending msg - ",this.editor.length),this.$apollo.mutate({mutation:c["a"],variables:{txId:this.curId,rxId:this.contacts[this.activeId].k_id,sender:this.curName,receiver:this.contacts[this.activeId].k_name,text:this.editor}}).then((function(e){if(e.data.addMessage.ok){var n=[];n.push(t.editor),t.messages.push({sender:"Me",send:!0,text:n,txId:t.curId,rxId:t.contacts[t.activeId].k_id,timeStamp:"a moment ago"}),t.editor=""}else t.alertMsg="Add message failed",t.alert=!0})).catch((function(e){t.alertMsg="Please contact your admistrator.",t.alert=!0,console.log(e)}))},updateMsg:function(t){var e="",n=!0,s=[];this.messages=[];for(var a=0;a<t.length;a++)s=[],t[a].txId===this.curId?(e="Me",n=!0):(e=t[a].sender,n=!1),s.push(t[a].text),this.messages.push({sender:e,send:n,text:s,txId:t[a].txId,rxId:t[a].rxId,timeStamp:String(t[a].createDate).slice(0,19)})},refreshMsg:function(){this.skipQueryReadMsg=!1,this.$apollo.queries.allMessages.refetch({id:this.curId,msgIdx:0})},alertClose:function(){this.alert=!1,this.alertMsg=""}}),apollo:{allMessages:{query:l["d"],variables:function(){return{id:this.curId,msgIdx:0}},error:function(t){console.error("We've got an error!",t)},skip:function(){return this.skipQueryReadMsg},result:function(t,e){this.updateMsg(t.data.allMessages)}}}},f=p,g=(n("bebe"),n("2877")),m=Object(g["a"])(f,s,a,!1,null,"b8e6ee42",null);e["default"]=m.exports},ffa0:function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"q-pa-md"},[n("q-stepper",{ref:"stepper",attrs:{"alternative-labels":"",color:"primary",animated:""},scopedSlots:t._u([{key:"navigation",fn:function(){return[n("q-stepper-navigation",[n("q-btn",{attrs:{color:"primary",label:5===t.step?"Finish":"Continue"},on:{click:function(e){return t.$refs.stepper.next()}}}),t.step>1?n("q-btn",{staticClass:"q-ml-sm",attrs:{flat:"",color:"primary",label:"Back"},on:{click:function(e){return t.$refs.stepper.previous()}}}):t._e()],1)]},proxy:!0}]),model:{value:t.step,callback:function(e){t.step=e},expression:"step"}},[n("q-step",{attrs:{name:1,title:"Milestone 1",icon:"settings",done:t.step>1}},[t._v("\n      The description for step 1\n    ")]),n("q-step",{attrs:{name:2,title:"Milestone 2",caption:"Optional",icon:"create_new_folder",done:t.step>2}},[t._v("\n      The description for step 2\n    ")]),n("q-step",{attrs:{name:3,title:"Milestone 3",icon:"add_comment",done:t.step>3}},[t._v("\n      The description for step 3\n    ")]),n("q-step",{attrs:{name:4,title:"Milestone 4",icon:"add_comment",done:t.step>4}},[t._v("\n      The description for step 4\n    ")]),n("q-step",{attrs:{name:5,title:"Milestone 5",icon:"add_comment",done:t.step>5}},[t._v("\n      The description for step 5\n    ")])],1)],1)},a=[],r=(n("c5f6"),{name:"StudentOverview",props:{index:{type:Number,default:0}},data:function(){return{step:1}},computed:{},methods:{}}),o=r,i=n("2877"),c=Object(i["a"])(o,s,a,!1,null,null,null);e["default"]=c.exports}}]);