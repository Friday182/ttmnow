(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[10],{"2aa6":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-page",{staticClass:"flex-center"},[a("div",{staticClass:"q-pa-md"},[a("div",{staticClass:"q-gutter-y-md",staticStyle:{"max-width":"100%"},attrs:{"fixed-top":""}},[a("q-tabs",{staticClass:"bg-grey-1 shadow-2",attrs:{"no-caps":"",dense:""},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[a("q-tab",{staticClass:"text-blue",attrs:{name:"ma",label:"Basic Calculations"}}),a("q-tab",{staticClass:"text-blue",attrs:{name:"mb",label:"Decimal & Fraction"}}),a("q-tab",{staticClass:"text-blue",attrs:{name:"mc",label:"Algebra"}}),a("q-tab",{staticClass:"text-blue",attrs:{name:"md",label:"Measurement"}}),a("q-tab",{staticClass:"text-blue",attrs:{name:"me",label:"Shapes & Space"}}),a("q-tab",{staticClass:"text-blue",attrs:{name:"mf",label:"Handling Data"}}),a("q-tab",{staticClass:"text-blue",attrs:{name:"mg",label:"Problem Solving"}}),a("q-tab",{staticClass:"text-blue",attrs:{name:"mh",label:"Mock Test"}})],1),a("q-tab-panels",{attrs:{animated:""},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[a("q-tab-panel",{attrs:{name:"ma"}},[a("desctable",{attrs:{tabledata:t.tableMa,topicname:t.topicMa}})],1),a("q-tab-panel",{attrs:{name:"mb"}},[a("desctable",{attrs:{tabledata:t.tableMb,topicname:t.topicMb}})],1),a("q-tab-panel",{attrs:{name:"mc"}},[a("desctable",{attrs:{tabledata:t.tableMc,topicname:t.topicMc}})],1),a("q-tab-panel",{attrs:{name:"md"}},[a("desctable",{attrs:{tabledata:t.tableMd,topicname:t.topicMd}})],1),a("q-tab-panel",{attrs:{name:"me"}},[a("desctable",{attrs:{tabledata:t.tableMe,topicname:t.topicMe}})],1),a("q-tab-panel",{attrs:{name:"mf"}},[a("desctable",{attrs:{tabledata:t.tableMf,topicname:t.topicMf}})],1),a("q-tab-panel",{attrs:{name:"mg"}},[a("desctable",{attrs:{tabledata:t.tableMg,topicname:t.topicMg}})],1),a("q-tab-panel",{attrs:{name:"mh"}},[a("desctable",{attrs:{tabledata:t.tableMh,topicname:t.topicMh}})],1)],1)],1)])])},s=[],l=(a("8e6e"),a("8a81"),a("ac6a"),a("cadf"),a("06db"),a("456d"),a("4917"),a("c47a")),i=a.n(l),c=a("2f62"),r=a("0306");function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function b(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){i()(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var u={name:"ShowTopics",components:{desctable:a("df56").default},data:function(){return{tab:"ma",loadingMa:!0,skipQueryAllDescription:!1,topicMa:"MA: Basic Calculation",topicMb:"MB: Decimal & Fraction",topicMc:"MA: Basic Calculation",topicMd:"MA: Basic Calculation",topicMe:"MA: Basic Calculation",topicMf:"MA: Basic Calculation",topicMg:"MA: Basic Calculation",topicMh:"MA: Basic Calculation"}},computed:b({},Object(c["c"])("desc",["getDesc"]),{tableMa:function(){return console.log("getDesc - "+this.getDesc),this.getDesc.MA},tableMb:function(){return this.getDesc.MB},tableMc:function(){return this.getDesc.MC},tableMd:function(){return this.getDesc.MD},tableMe:function(){return this.getDesc.ME},tableMf:function(){return this.getDesc.MF},tableMg:function(){return this.getDesc.MG},tableMh:function(){return this.getDesc.MH},tableMi:function(){return this.getDesc.MI}}),created:function(){this.skipQueryAllDescription=!1},methods:b({},Object(c["d"])("desc",["copyDesc","saveDesc"]),{updateTable:function(t){this.loadingMa=!1,this.skipQueryAllDescription=!0;var e=["MA","MB","MC","MD","ME","MF","MG","MH","MI"],a=[[],[],[],[],[],[],[],[],[]];if(t.length>0){console.log("Get all description - "+t.length);for(var n=0;n<t.length;n++)for(var s=0;s<e.length;s++)if(t[n].Kp.match(e[s])){a[s].push({taskid:t[n].Kp,title:t[n].Title,description:t[n].Description,review:t[n].Review,note:t[n].Note});break}console.log("tmpDesc: ",a),this.copyDesc({MA:a[0],MB:a[1],MC:a[2],MD:a[3],ME:a[4],MF:a[5],MG:a[6],MH:a[7],MI:a[8]}),this.saveDesc()}else console.log("Fetch all description failed")}}),apollo:{GetDescripitions:{query:r["a"],error:function(t){console.error("We've got an error!",t)},skip:function(){return this.skipQueryAllDescription},result:function(t,e){t.data.GetDescripitions&&this.updateTable(t.data.GetDescripitions)}}}},p=u,d=a("2877"),m=Object(d["a"])(p,n,s,!1,null,null,null);e["default"]=m.exports},df56:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"q-px-sm"},[a("q-table",{attrs:{title:"Your Students",data:t.tabledata,columns:t.columns,"visible-columns":t.visibleColumns,separator:"cell","row-key":"name","table-header-style":{backgroundColor:"lightblue"},"fixed-center":"",bordered:"",dense:"",pagination:t.pagination},on:{"update:pagination":function(e){t.pagination=e}},scopedSlots:t._u([{key:"top",fn:function(e){return[a("div",{staticClass:"q-table__title"},[t._v("\n        Topic "+t._s(t.topicname)+"\n      ")]),a("q-space"),a("q-btn",{staticClass:"q-ml-md",attrs:{flat:"",round:"",dense:"",icon:e.inFullscreen?"fullscreen_exit":"fullscreen"},on:{click:e.toggleFullscreen}})]}},{key:"body-cell-taskid",fn:function(e){return t.devMode?a("q-td",{attrs:{props:e}},[t._v("\n      "+t._s(e.row.taskid)+"\n    ")]):t._e()}},{key:"body-cell-example",fn:function(e){return a("q-td",{attrs:{props:e}},[a("q-btn",{attrs:{flat:"",icon:"play_circle_outline"},on:{click:function(a){return t.toRuntask(e.row.taskid)}}})],1)}}],null,!0)}),a("runTask",{attrs:{active:t.active,taskid:t.currentTaskId,mode:t.runMode},on:{completed:t.processTaskClosed}})],1)},s=[],l={name:"TopicDescriptionTable",components:{runTask:a("ac5f").default},props:{tabledata:{type:Array,default:function(){return[]}},topicname:{type:String,default:""}},data:function(){return{devMode:!0,active:!1,runMode:1,currentTaskId:"",pagination:{page:0,rowsPerPage:0},visibleColumns:["taskid","title","description","example"],columns:[{name:"taskid",required:!0,label:"Task Id",align:"center",field:"taskid",sortable:!0},{name:"title",align:"center",label:"Title",field:"title",sortable:!1},{name:"description",align:"center",label:"Description",field:"description",sortable:!1},{name:"example",align:"center",label:"Example",field:"example",sortable:!0},{name:"note",align:"center",label:"Note",field:"note",sortable:!1}]}},methods:{toRuntask:function(t){this.active=!0,this.currentTaskId=t},processTaskClosed:function(){this.currentTaskId="NA",this.active=!1}}},i=l,c=a("2877"),r=Object(c["a"])(i,n,s,!1,null,null,null);e["default"]=r.exports}}]);