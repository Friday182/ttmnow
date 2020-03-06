(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[5],{"1c5d":function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"q-mx-lg q-px-lg"},[n("q-table",{attrs:{title:"quiz",data:t.quizData,columns:t.columns,separator:"cell","row-key":"name","table-header-style":{backgroundColor:"lightblue"},"fixed-center":"",bordered:"",dense:"","no-data-label":"No Quiz Available for Now.","hide-bottom":t.noBottom,loading:t.loading},scopedSlots:t._u([{key:"top",fn:function(e){return[n("div",{staticClass:"col-4 text-blue q-table__title"},[t._v("\n        Available Quiz\n      ")]),n("q-space"),n("q-btn",{attrs:{flat:"",disable:""}},[t._v("\n        Count: "+t._s(t.mathLevel)+"\n      ")])]}},{key:"body-cell-play",fn:function(e){return n("q-td",{attrs:{props:e}},[n("q-btn",{attrs:{flat:"",icon:"play_circle_outline"},on:{click:function(n){return t.toRunTask(e.row.name)}}})],1)}},{key:"body-cell-done",fn:function(t){return n("q-td",{attrs:{props:t}},[t.row.done?n("q-btn",{attrs:{flat:"",color:"green",icon:"done_outline"}}):n("q-spinner-hourglass",{attrs:{color:"grey",size:"sm"}})],1)}}])}),n("quiz-log",{attrs:{gid:t.currentStudent.gid,"num-log":t.numLog,"new-log":t.newLog}}),n("runTask",{attrs:{active:t.active,taskid:t.currentTaskId},on:{completed:t.processTaskClosed}}),n("div",{staticClass:"row"},[n("q-input",{staticStyle:{width:"20px"},attrs:{label:"I"},model:{value:t.text1,callback:function(e){t.text1=e},expression:"text1"}}),n("q-input",{staticStyle:{width:"40px"},attrs:{label:"has"},model:{value:t.text2,callback:function(e){t.text2=e},expression:"text2"}}),n("q-input",{staticStyle:{width:"30px"},attrs:{label:"an"},model:{value:t.text4,callback:function(e){t.text4=e},expression:"text4"}}),n("q-input",{staticStyle:{width:"130px"},attrs:{label:"dogdogdogdog."},model:{value:t.text3,callback:function(e){t.text3=e},expression:"text3"}})],1)],1)},r=[],a=(n("8e6e"),n("8a81"),n("ac6a"),n("cadf"),n("06db"),n("456d"),n("c47a")),o=n.n(a),i=(n("7f7f"),n("2f62"));function c(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,s)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?c(Object(n),!0).forEach((function(e){o()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var u={name:"StudentAssignment",components:{runTask:n("ac5f").default,"quiz-log":n("c8d4").default},data:function(){return{devMode:!1,text1:"",text2:"",text3:"",text4:"",active:!1,currentTaskId:"NA",loading:!1,newLog:0,numLog:10,columns:[{name:"quiz",required:!0,label:"Quiz",align:"center",field:function(t){return t.name},format:function(t){return"".concat(t)},sortable:!0},{name:"description",align:"center",label:"Description",field:"description",sortable:!1},{name:"play",align:"center",label:"play",field:"play",sortable:!1},{name:"done",align:"center",label:"Done",field:"done",sortable:!1}]}},computed:l({},Object(i["c"])("student",["currentStudent"]),{noBottom:function(){return this.currentStudent.quizzes.length>0},quizData:{get:function(){for(var t=[],e=0;e<this.currentStudent.quizzes.length;e++)t.push({name:this.currentStudent.quizzes[e].Kp,description:this.currentStudent.quizzes[e].Desc,done:this.currentStudent.assignmentDone});return t},set:function(t){}},mathLevel:function(){return 3}}),mounted:function(){console.log("mounted quizzes component")},methods:l({},Object(i["b"])("student",["updateQuizDone"]),{toRunTask:function(t){this.$q.fullscreen.request(),this.currentTaskId=t,this.active=!0},processTaskClosed:function(t){t>=2&&this.updateQuizDone(!0),this.$q.fullscreen.exit(),this.currentTaskId="NA",this.active=!1}})},d=u,p=n("2877"),f=Object(p["a"])(d,s,r,!1,null,null,null);e["default"]=f.exports},"330f":function(t,e,n){"use strict";var s=n("9185"),r=n.n(s);r.a},"4971b":function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("q-dialog",{attrs:{maximized:!0},model:{value:t.active,callback:function(e){t.active=e},expression:"active"}},[n("div",{staticClass:"q-pa-md"},[n("q-tabs",{staticClass:"bg-grey-3 shadow-2",attrs:{"no-caps":""},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[n("q-tab",{attrs:{name:"pokemon",icon:"face",label:"pokemon"}}),n("q-tab",{attrs:{name:"fruit",icon:"mail",label:"fruit"}})],1),n("q-tab-panels",{attrs:{animated:""},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[n("q-tab-panel",{attrs:{name:"pokemon"}},[n("div",{staticClass:"row flex"},t._l(t.pokemonData,(function(e,s){return n("div",{key:s,staticClass:"q-gutter-xl"},[n("q-btn",{staticClass:"q-ma-xl",attrs:{size:"50px",icon:e.path},on:{click:function(e){return t.choose(s)}}})],1)})),0)]),n("q-tab-panel",{attrs:{name:"fruit"}},[n("div",{staticClass:"row flex"},t._l(t.fruitData,(function(t){return n("div",{key:t.id,staticClass:"q-gutter-xl"},[n("q-img",{staticStyle:{height:"80px",width:"80px"},attrs:{src:t.path}})],1)})),0)])],1),n("q-card",{staticClass:"q-mt-lg"},[n("q-separator"),n("q-card-section",[t._v("\n        Please Selecte\n        "),n("q-btn",{staticStyle:{"font-size":"12pt"},attrs:{outline:"",round:"","text-color":"green"}},[t._v("\n          "+t._s(t.selectNum)+"\n        ")]),t._v("\n        Stickers:\n      ")],1),n("q-card-section",t._l(10,(function(e){return n("q-btn",{key:e,staticClass:"q-mx-xs",attrs:{flat:"",size:"40px",icon:t.picked[e-1]},on:{click:function(n){return t.removePic(e-1)}}})})),1),n("q-card-section",[n("q-btn",{staticStyle:{"font-size":"12pt"},attrs:{push:"",label:"Ok","text-color":"white",color:"blue"},on:{click:t.selectDone}})],1)],1)],1)])},r=[],a=(n("7f7f"),n("c5f6"),{name:"Stickers",props:{active:{type:Boolean,default:!1},selectNum:{type:Number,default:0}},data:function(){return{tab:"pokemon",pokemonData:[],fruitData:[],picked:[],selection:[]}},watch:{selectNum:function(t,e){console.log("select num changed?"),this.selection=[],this.picked=[]}},created:function(){for(var t=1;t<26;t++)this.pokemonData.push({id:t,path:"img:statics/stickers/pokemon/pm ("+t+").jpg",name:"pokemon/pm ("+t+").jpg"});for(var e=1;e<12;e++)this.fruitData.push({id:e,path:"statics/stickers/fruit/fruit ("+e+").jpg",name:"fruit/fruit ("+e+").jpg"})},methods:{choose:function(t){console.log("picked - ",t),this.selection.length<10&&this.selection.length<this.selectNum&&(this.selection.push(this.pokemonData[t].name),this.picked.push(this.pokemonData[t].path)),console.log(this.picked)},selectDone:function(){console.log("updated "+this.selection.length,this.selectNum),this.selection.length<=this.selectNum&&this.$emit("selectSticker",this.selection)},removePic:function(t){console.log("remove pic idx - ",t),this.picked.splice(t,1),this.selection.splice(t,1)}}}),o=a,i=n("2877"),c=Object(i["a"])(o,s,r,!1,null,null,null);e["default"]=c.exports},6076:function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("q-page",{staticClass:"flex-center q-pa-md"},[n("div",{staticClass:"column"},[n("q-tabs",{attrs:{"no-caps":"",dense:""},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[n("q-btn",{staticClass:"text-weight-bolder",attrs:{flat:"","no-caps":"",size:"xl",color:"grey-1","text-color":"orange"}},[t._v("\n        Welcom "+t._s(t.currentStudent.name)+"!\n      ")]),n("q-space"),n("q-tab",{staticClass:"text-blue",attrs:{name:"math",icon:"assignment",label:"Math"}}),n("q-tab",{staticClass:"text-blue",attrs:{name:"english",icon:"assignment",label:"English"}}),n("q-tab",{staticClass:"text-blue",attrs:{name:"quiz",icon:"list",label:"Quiz"}}),n("q-tab",{staticClass:"text-blue",attrs:{name:"stickerTable",icon:"insert_photo",label:"Stickers"}},[n("q-badge",{attrs:{color:"red",floating:""}},[t._v("\n          "+t._s(t.currentStudent.stickers)+"\n        ")])],1),n("q-tab",{staticClass:"text-blue",attrs:{name:"overview",icon:"history",label:"Overview",disable:!t.student.membershipActive}},[t.student.membershipActive?n("q-badge",{attrs:{color:"red",floating:""}},[t._v("\n          New\n        ")]):n("q-badge",{attrs:{color:"red",floating:""}},[t._v("\n          Premium\n        ")])],1),n("q-space"),n("q-chip",{staticClass:"glossy",attrs:{color:"orange","text-color":"white","icon-right":"thumb_up"}},[t._v("\n        "+t._s(t.currentStudent.stickers)+"\n      ")]),n("q-chip",{staticClass:"glossy",attrs:{color:"orange","text-color":"white","icon-right":"star"}},[t._v("\n        "+t._s(t.currentStudent.stars)+"\n      ")]),n("q-chip",{staticClass:"glossy",attrs:{color:"orange","text-color":"white","icon-right":"face"}},[t._v("\n        "+t._s(t.numCoin)+"\n      ")])],1),n("q-separator"),n("q-tab-panels",{attrs:{animated:"","transition-prev":"jump-up","transition-next":"jump-up"},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[n("q-tab-panel",{attrs:{name:"math"}},[n("div",{staticClass:"col col-md-10 q-pa-xl"},[n("math-tab")],1)]),n("q-tab-panel",{attrs:{name:"english"}},[n("div",{staticClass:"col col-md-10 q-pa-xl"},[n("english-tab")],1)]),n("q-tab-panel",{attrs:{name:"quiz"}},[n("quiz")],1),n("q-tab-panel",{attrs:{name:"stickerTable"}},[n("sticker-table")],1),n("q-tab-panel",{attrs:{name:"overview"}},[n("overview")],1)],1)],1)])},r=[],a=(n("8e6e"),n("8a81"),n("ac6a"),n("cadf"),n("06db"),n("456d"),n("7f7f"),n("c47a")),o=n.n(a),i=n("2f62");function c(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,s)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?c(Object(n),!0).forEach((function(e){o()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var u={name:"StudentHome",components:{"math-tab":n("b845").default,"english-tab":n("8d82").default,quiz:n("1c5d").default,"sticker-table":n("c977").default,overview:n("ffa0").default},data:function(){return{tab:"math",numCoin:"0",numNewMsg:0}},computed:l({},Object(i["c"])("student",["currentStudent"]),{},Object(i["c"])("currentUser",["currentUser"]),{student:function(){return this.currentStudent},stickers:function(){return this.currentStudent.stickers}}),watch:{stickers:function(t,e){console.log("Stickers changed ",e,t),this.tab="stickerTable"}},created:function(){0===this.student.gid&&this.$router.push("/")},beforeMount:function(){console.log("student home before mount - ",this.currentUser.sessionLogin),"student"!==this.currentUser.sessionLogin&&this.$router.push("/")},mounted:function(){console.log("StudentHome mounted. read from vuex id : name - "+this.student.gid+": "+this.student.name),this.numCoin=10*this.student.stars+this.student.stickers},methods:{}},d=u,p=n("2877"),f=Object(p["a"])(d,s,r,!1,null,null,null);e["default"]=f.exports},"8d82":function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"q-mx-lg q-px-lg"},[n("q-table",{attrs:{title:"English",data:t.assignmentData,columns:t.columns,"visible-columns":t.visibleColumns,separator:"cell","hide-bottom":"","row-key":"name","table-header-style":{backgroundColor:"lightblue"},"fixed-center":"",bordered:"",dense:"","rows-per-page-label":"Page:",pagination:t.pagination,loading:t.loading},on:{"update:pagination":function(e){t.pagination=e}},scopedSlots:t._u([{key:"top",fn:function(e){return[n("div",{staticClass:"col-4 text-blue q-table__title"},[t._v("\n        English\n      ")]),n("q-space"),n("q-btn",{attrs:{flat:"",disable:""}},[t._v("\n        Level: "+t._s(t.englishLevel)+"\n      ")])]}},{key:"body",fn:function(e){return[n("q-tr",{attrs:{props:e},nativeOn:{mousedown:function(n){return n.preventDefault(),t.rowSelected(e.row.gid)}}},[n("q-td",{key:"task",attrs:{props:e}},[t._v("\n          "+t._s(e.row.task)+"\n        ")]),n("q-td",{key:"description",attrs:{props:e}},[t._v("\n          "+t._s(e.row.description)+"\n        ")]),n("q-td",{key:"play",attrs:{props:e}},[n("q-btn",{attrs:{flat:"",icon:"play_circle_outline"},on:{click:function(n){return t.toRunTask(e.row.task)}}})],1),n("q-td",{key:"done",attrs:{props:e}},[e.row.done?n("q-btn",{attrs:{flat:"",color:"green",icon:"done_outline"}}):n("q-spinner-hourglass",{attrs:{color:"grey",size:"sm"}})],1)],1)]}}])}),n("task-log",{attrs:{gid:t.currentStudent.gid,subject:1,"num-log":t.numLog,"new-log":t.newLog}}),n("runTask",{attrs:{active:t.active,taskid:t.currentTaskId,subject:1},on:{completed:t.processTaskClosed}})],1)},r=[],a=(n("8e6e"),n("8a81"),n("ac6a"),n("cadf"),n("06db"),n("456d"),n("c47a")),o=n.n(a),i=(n("7f7f"),n("2f62"));function c(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,s)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?c(Object(n),!0).forEach((function(e){o()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var u={name:"MathAssignment",components:{runTask:n("ac5f").default,"task-log":n("9c53").default},data:function(){return{pagination:{page:0,rowsPerPage:5},active:!1,currentTaskId:"NA",loading:!1,newLog:0,numLog:10,visibleColumns:["task","description","play","done"],columns:[{name:"task",required:!0,label:"Task",align:"center",field:function(t){return t.name},format:function(t){return"".concat(t)},sortable:!0},{name:"description",align:"center",label:"Description",field:"description",sortable:!1},{name:"play",align:"center",label:"play",field:"play",sortable:!1},{name:"done",align:"center",label:"Done",field:"done",sortable:!1}]}},computed:l({},Object(i["c"])("student",["currentStudent"]),{assignmentData:{get:function(){var t=[];if(!1===this.currentStudent.subjects[1].IsEnabled)return t;if(!0===this.currentStudent.subjects[1].AiEnabled)for(var e=0;e<this.currentStudent.subjects[1].Assignment.length;e++)0===e?t.push({task:this.currentStudent.subjects[1].Assignment[e].Kp,description:this.currentStudent.subjects[1].Assignment[e].Desc,done:this.currentStudent.subjects[1].Assignment[0].Done}):(t[0].task=t[0].task+","+this.currentStudent.subjects[1].Assignment[e].Kp,t[0].description=t[0].description+" / "+this.currentStudent.subjects[1].Assignment[e].Desc);else for(var n=0;n<this.currentStudent.subjects[1].Assignment.length;n++)t.push({task:this.currentStudent.subjects[1].Assignment[n].Kp,description:this.currentStudent.subjects[1].Assignment[n].Desc,done:this.currentStudent.subjects[1].Assignment[n].Done});return t},set:function(t){}},englishLevel:function(){return this.currentStudent.subjects[1].level}}),mounted:function(){console.log("mounted EnglishTab")},methods:l({},Object(i["b"])("student",["updateAssignmentDone"]),{toRunTask:function(t){this.$q.fullscreen.request(),this.currentTaskId=t,this.active=!0},processTaskClosed:function(t){t>=2&&this.updateAssignmentDone({Math:!0}),this.$q.fullscreen.exit(),this.currentTaskId="NA",this.active=!1},rowSelected:function(t){}})},d=u,p=n("2877"),f=Object(p["a"])(d,s,r,!1,null,null,null);e["default"]=f.exports},9185:function(t,e,n){},b845:function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"q-mx-lg q-px-lg"},[n("q-table",{attrs:{title:"Math",data:t.assignmentData,columns:t.columns,"visible-columns":t.visibleColumns,separator:"cell","hide-bottom":"","row-key":"name","table-header-style":{backgroundColor:"lightblue"},"fixed-center":"",bordered:"",dense:"","rows-per-page-label":"Page:",pagination:t.pagination,loading:t.loading},on:{"update:pagination":function(e){t.pagination=e}},scopedSlots:t._u([{key:"top",fn:function(e){return[n("div",{staticClass:"col-4 text-blue q-table__title"},[t._v("\n        Math\n      ")]),n("q-space"),n("q-btn",{attrs:{flat:"",disable:""}},[t._v("\n        Level: "+t._s(t.mathLevel)+"\n      ")])]}},{key:"body",fn:function(e){return[n("q-tr",{attrs:{props:e},nativeOn:{mousedown:function(n){return n.preventDefault(),t.rowSelected(e.row.gid)}}},[n("q-td",{key:"task",attrs:{props:e}},[t._v("\n          "+t._s(e.row.task)+"\n        ")]),n("q-td",{key:"description",attrs:{props:e}},[t._v("\n          "+t._s(e.row.description)+"\n        ")]),n("q-td",{key:"play",attrs:{props:e}},[n("q-btn",{attrs:{flat:"",icon:"play_circle_outline"},on:{click:function(n){return t.toRunTask(e.row.task)}}})],1),n("q-td",{key:"done",attrs:{props:e}},[e.row.done?n("q-btn",{attrs:{flat:"",color:"green",icon:"done_outline"}}):n("q-spinner-hourglass",{attrs:{color:"grey",size:"sm"}})],1)],1)]}}])}),n("task-log",{attrs:{gid:t.currentStudent.gid,subject:0,"num-log":t.numLog,"new-log":t.newLog}}),n("runTask",{attrs:{active:t.active,taskid:t.currentTaskId,subject:0},on:{completed:t.processTaskClosed}}),t.devMode?n("div",{staticClass:"row"},[n("q-input",{staticStyle:{width:"20px"},attrs:{label:"I"},model:{value:t.text1,callback:function(e){t.text1=e},expression:"text1"}}),n("q-input",{staticStyle:{width:"40px"},attrs:{label:"has"},model:{value:t.text2,callback:function(e){t.text2=e},expression:"text2"}}),n("q-input",{staticStyle:{width:"30px"},attrs:{label:"an"},model:{value:t.text4,callback:function(e){t.text4=e},expression:"text4"}}),n("q-input",{staticStyle:{width:"40px","font-size":"10pt"},attrs:{label:"dog."},model:{value:t.text3,callback:function(e){t.text3=e},expression:"text3"}})],1):t._e()],1)},r=[],a=(n("8e6e"),n("8a81"),n("ac6a"),n("cadf"),n("06db"),n("456d"),n("c47a")),o=n.n(a),i=(n("7f7f"),n("2f62"));function c(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,s)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?c(Object(n),!0).forEach((function(e){o()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var u={name:"MathAssignment",components:{runTask:n("ac5f").default,"task-log":n("9c53").default},data:function(){return{devMode:!1,pagination:{page:0,rowsPerPage:10},text1:"",text2:"",text3:"",text4:"",active:!1,currentTaskId:"NA",loading:!1,newLog:0,numLog:10,visibleColumns:["task","description","play","done"],columns:[{name:"task",required:!0,label:"Task",align:"center",field:function(t){return t.name},format:function(t){return"".concat(t)},sortable:!0},{name:"description",align:"center",label:"Description",field:"description",sortable:!1},{name:"play",align:"center",label:"play",field:"play",sortable:!1},{name:"done",align:"center",label:"Done",field:"done",sortable:!1}]}},computed:l({},Object(i["c"])("student",["currentStudent"]),{assignmentData:{get:function(){var t=[];if(!1===this.currentStudent.subjects[0].IsEnabled)return t;if(!0===this.currentStudent.subjects[0].AiEnabled)for(var e=0;e<this.currentStudent.subjects[0].Assignment.length;e++)0===e?t.push({task:this.currentStudent.subjects[0].Assignment[e].Kp,description:this.currentStudent.subjects[0].Assignment[e].Desc,done:this.currentStudent.subjects[0].Assignment[0].Done}):(t[0].task=t[0].task+","+this.currentStudent.subjects[0].Assignment[e].Kp,t[0].description=t[0].description+" / "+this.currentStudent.subjects[0].Assignment[e].Desc);else for(var n=0;n<this.currentStudent.subjects[0].Assignment.length;n++)t.push({task:this.currentStudent.subjects[0].Assignment[n].Kp,description:this.currentStudent.subjects[0].Assignment[n].Desc,done:this.currentStudent.subjects[0].Assignment[n].Done});return t},set:function(t){}},mathLevel:function(){return this.currentStudent.subjects[0].level}}),mounted:function(){console.log("mounted MathTab")},methods:l({},Object(i["b"])("student",["updateAssignmentDone"]),{toRunTask:function(t){this.$q.fullscreen.request(),this.currentTaskId=t,this.active=!0},processTaskClosed:function(t){t>=2&&(this.newLog++,this.updateAssignmentDone({Kp:this.currentTaskId,Math:!0})),this.$q.fullscreen.exit(),this.currentTaskId="NA",this.active=!1},rowSelected:function(t){}})},d=u,p=n("2877"),f=Object(p["a"])(d,s,r,!1,null,null,null);e["default"]=f.exports},c8d4:function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"q-px-sm q-mt-lg"},[n("q-table",{attrs:{title:"Logs",data:t.tableData,columns:t.columns,"visible-columns":t.visibleColumns,separator:"cell","wrap-cells":"","row-key":"date","table-header-style":{backgroundColor:"lightblue"},"fixed-center":"",bordered:"",dense:"",pagination:t.pagination,loading:t.loading},on:{"update:pagination":function(e){t.pagination=e}},scopedSlots:t._u([{key:"top",fn:function(e){return[n("div",{staticClass:"col-3 text-blue q-table__title"},[t._v("\n        Your Quiz Results:\n      ")]),n("q-space"),n("q-btn",{staticClass:"q-ml-md",attrs:{flat:"",round:"",dense:"",icon:e.inFullscreen?"fullscreen_exit":"fullscreen"},on:{click:e.toggleFullscreen}})]}},{key:"body-cell-comment",fn:function(e){return n("q-td",{attrs:{props:e}},[n("q-btn",{attrs:{flat:"",icon:"edit"},on:{click:function(n){return t.toDeleteLog(e.row.id)}}})],1)}}])}),n("alert-msg",{attrs:{active:t.alert,msg:t.alertMsg},on:{cancelAlert:t.alertClose}})],1)},r=[],a=(n("8e6e"),n("8a81"),n("ac6a"),n("cadf"),n("06db"),n("456d"),n("c47a")),o=n.n(a),i=(n("c5f6"),n("0306")),c=n("63fb"),l=n("2f62");function u(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,s)}return n}function d(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?u(Object(n),!0).forEach((function(e){o()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var p={name:"LogTable",components:{"alert-msg":n("a5aa").default},props:{gid:{type:String,default:""},newLog:{type:Number,default:0},numLog:{type:Number,default:10}},data:function(){return{alert:!1,alertMsg:"",pagination:{page:0,rowsPerPage:10},columns:[{name:"name",align:"center",label:"Name",field:"name",sortable:!0},{name:"date",align:"center",label:"Date",field:"date",sortable:!0},{name:"taskid",align:"center",label:"Task Id",field:"taskid",sortable:!0},{name:"totalque",align:"center",label:"Number Questions",field:"totalque",sortable:!0},{name:"numwrong ",align:"center",label:"Wrong  Number",field:"numwrong",sortable:!0},{name:"correctperc",align:"center",label:"Correct  Percentage",field:"correctperc",sortable:!0},{name:"totalsec",align:"center",label:"Total Sec",field:"totalsec",sortable:!0},{name:"avgsec",align:"center",label:"Sec/Question",field:"avgsec",sortable:!0},{name:"stdsec",align:"center",label:"Reference Sec/Que",field:"stdsec",sortable:!0},{name:"score",align:"center",label:"Score",field:"score",sortable:!0},{name:"comment",align:"center",label:"Comment",field:"comment",sortable:!1}],tableData:[],loading:!0,skipQueryTasklog:!1}},computed:d({},Object(l["c"])("currentUser",["currentUser"]),{isDeletable:function(){return"mentor"===this.currentUser.sessionLogin},visibleColumns:function(){return"mentor"===this.currentUser.sessionLogin?["name","date","taskid","totalque","numwrong","correctperc","totalsec","avgsec","score","comment"]:["name","date","taskid","totalque","numwrong","correctperc","totalsec","avgsec","score"]}}),mounted:function(){console.log("Get task log table for gid = ",this.gid),this.skipQueryTasklog=!0,this.$apollo.queries.GetTaskLogs.refetch({gid:this.gid,startDate:"",startId:0,numLog:this.numLog})},destroyed:function(){console.log("task log table destroied")},methods:{updateTasklog:function(t){this.loading=!1,t.length>0?(console.log("Read task log updated - "+t.length),this.tableData=[]):console.log("No task log available!")},toDeleteLog:function(t){var e=this;console.log("delete: "+t),this.$apollo.mutate({mutation:c["d"],variables:{logId:t}}).then((function(n){if(!1===n.data.DelTaskLog)e.alertMsg="Update stickers failed, please report error to Support@DecomTechnology.com.",e.alert=!0;else for(var s=0;s<e.tableData.length;s++)e.tableData[s].id===t&&e.tableData.splice(s,1)}))},alertClose:function(){this.alert=!1,this.alertMsg=""}},apollo:{GetTaskLogs:{query:i["f"],variables:function(){return{gid:this.gid,startDate:"",startId:0,numLog:this.numLog}},error:function(t){console.error("We've got an error!",t)},skip:function(){return this.skipQueryTasklog},result:function(t,e){this.updateTasklog(t.data.GetTaskLogs)}}}},f=p,b=(n("330f"),n("2877")),g=Object(b["a"])(f,s,r,!1,null,null,null);e["default"]=g.exports},c977:function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"q-mx-xl q-px-xl"},[n("q-separator"),n("div",{staticClass:"row"},t._l(t.stickerData,(function(t,e){return n("div",{key:e,staticClass:"col-2"},[n("q-card",{staticClass:"my-card q-ma-md"},[n("img",{staticStyle:{height:"120px",width:"120px"},attrs:{src:t.path}})])],1)})),0),n("stickers",{attrs:{active:t.showStickers,"select-num":t.selectNum},on:{selectSticker:t.getSticker}}),n("alert-msg",{attrs:{active:t.alert,msg:t.alertMsg},on:{cancelAlert:t.alertClose}})],1)},r=[],a=(n("8e6e"),n("8a81"),n("ac6a"),n("cadf"),n("06db"),n("456d"),n("c47a")),o=n.n(a),i=n("2f62"),c=n("63fb");function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,s)}return n}function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){o()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var d={name:"StickerTable",components:{"alert-msg":n("a5aa").default,stickers:n("4971b").default},data:function(){return{alert:!1,skipQuerySticker:!1,localStickerLog:[],alertMsg:""}},computed:u({},Object(i["c"])("student",["currentStudent"]),{stickerData:{get:function(){for(var t=[],e=0;e<this.currentStudent.stickerLog.length;e++)t.push({id:e,path:"statics/stickers/"+this.currentStudent.stickerLog[e]});return t},set:function(t){}},stickerNum:function(){return this.currentStudent.stickers},selectNum:function(){return this.currentStudent.stickers>this.currentStudent.stickerLog.length?(console.log("stickers, sticklog length - ",this.currentStudent.stickers,this.currentStudent.stickerLog.length),this.currentStudent.stickers-this.currentStudent.stickerLog.length):0},showStickers:function(){return this.selectNum>0}}),updated:function(){},methods:u({},Object(i["b"])("student",["updateStudent"]),{updateSticker:function(t){console.log("update sticker table now - ",t);for(var e=[],n=0;n<this.currentStudent.stickerLog.length;n++)e.push(this.currentStudent.stickerLog[n]);for(var s=0;s<t.length;s++)e.push(t[s]);console.log("new sticker log - ",e),this.updateStudent({stickerLog:e})},getSticker:function(t){var e=this;console.log("get selected: "+JSON.stringify(t),t.length,this.currentStudent.gid),this.$apollo.mutate({mutation:c["m"],variables:{gid:this.currentStudent.gid,stickerLog:JSON.stringify(t)}}).then((function(n){!1===n.data.SetStickerLog?(e.alertMsg="Update stickers failed, please report to your mentor.",e.alert=!0):e.updateSticker(t)}))},alertClose:function(){this.alert=!1,this.alertMsg=""}})},p=d,f=(n("e5cb"),n("2877")),b=Object(f["a"])(p,s,r,!1,null,"a311e922",null);e["default"]=b.exports},e5cb:function(t,e,n){"use strict";var s=n("f8f5"),r=n.n(s);r.a},f8f5:function(t,e,n){},ffa0:function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"q-pa-md"},[n("q-stepper",{ref:"stepper",attrs:{"alternative-labels":"",color:"primary",animated:""},scopedSlots:t._u([{key:"navigation",fn:function(){return[n("q-stepper-navigation",[n("q-btn",{attrs:{color:"primary",label:5===t.step?"Finish":"Continue"},on:{click:function(e){return t.$refs.stepper.next()}}}),t.step>1?n("q-btn",{staticClass:"q-ml-sm",attrs:{flat:"",color:"primary",label:"Back"},on:{click:function(e){return t.$refs.stepper.previous()}}}):t._e()],1)]},proxy:!0}]),model:{value:t.step,callback:function(e){t.step=e},expression:"step"}},[n("q-step",{attrs:{name:1,title:"Milestone 1",icon:"settings",done:t.step>1}},[t._v("\n      The description for step 1\n    ")]),n("q-step",{attrs:{name:2,title:"Milestone 2",caption:"Optional",icon:"create_new_folder",done:t.step>2}},[t._v("\n      The description for step 2\n    ")]),n("q-step",{attrs:{name:3,title:"Milestone 3",icon:"add_comment",done:t.step>3}},[t._v("\n      The description for step 3\n    ")]),n("q-step",{attrs:{name:4,title:"Milestone 4",icon:"add_comment",done:t.step>4}},[t._v("\n      The description for step 4\n    ")]),n("q-step",{attrs:{name:5,title:"Milestone 5",icon:"add_comment",done:t.step>5}},[t._v("\n      The description for step 5\n    ")])],1)],1)},r=[],a=(n("c5f6"),{name:"StudentOverview",props:{index:{type:Number,default:0}},data:function(){return{step:1}},computed:{},methods:{}}),o=a,i=n("2877"),c=Object(i["a"])(o,s,r,!1,null,null,null);e["default"]=c.exports}}]);