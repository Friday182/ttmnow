(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["15d3b492"],{"2aa6":function(t,e,a){"use strict";a.r(e);var l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-page",{staticClass:"flex-center"},[a("div",{staticClass:"q-pa-md"},[a("div",{staticClass:"q-gutter-y-md",staticStyle:{"max-width":"100%"},attrs:{"fixed-top":""}},[a("q-tabs",{staticClass:"bg-grey-1 shadow-2",attrs:{"no-caps":"",dense:""},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[a("q-tab",{staticClass:"text-blue",attrs:{name:"ma",label:"Basic Calculations"}}),a("q-tab",{staticClass:"text-blue",attrs:{name:"mb",label:"Decimal & Fraction"}}),a("q-tab",{staticClass:"text-blue",attrs:{name:"mc",label:"Algebra"}}),a("q-tab",{staticClass:"text-blue",attrs:{name:"md",label:"Measurement"}}),a("q-tab",{staticClass:"text-blue",attrs:{name:"me",label:"Shapes & Space"}}),a("q-tab",{staticClass:"text-blue",attrs:{name:"mf",label:"Handling Data"}}),a("q-tab",{staticClass:"text-blue",attrs:{name:"mg",label:"Problem Solving"}}),a("q-tab",{staticClass:"text-blue",attrs:{name:"mh",label:"Mock Test"}})],1),a("q-tab-panels",{attrs:{animated:""},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[a("q-tab-panel",{attrs:{name:"ma"}},[a("desctable",{attrs:{tabledata:t.tableMa,loading:t.loadingMa,topicname:t.topicMa}})],1),a("q-tab-panel",{attrs:{name:"mb"}},[a("desctable",{attrs:{tabledata:t.tableMb,topicname:t.topicMb}})],1),a("q-tab-panel",{attrs:{name:"mc"}},[a("desctable",{attrs:{tabledata:t.tableMc,topicname:t.topicMc}})],1),a("q-tab-panel",{attrs:{name:"md"}},[a("desctable",{attrs:{tabledata:t.tableMd,topicname:t.topicMd}})],1),a("q-tab-panel",{attrs:{name:"me"}},[a("desctable",{attrs:{tabledata:t.tableMe,topicname:t.topicMe}})],1),a("q-tab-panel",{attrs:{name:"mf"}},[a("desctable",{attrs:{tabledata:t.tableMf,topicname:t.topicMf}})],1),a("q-tab-panel",{attrs:{name:"mg"}},[a("desctable",{attrs:{tabledata:t.tableMg,topicname:t.topicMg}})],1),a("q-tab-panel",{attrs:{name:"mh"}},[a("desctable",{attrs:{tabledata:t.tableMh,topicname:t.topicMh}})],1)],1)],1)])])},i=[],s=(a("4917"),a("0306")),n={name:"ShowTopics",components:{desctable:a("df56").default},data:function(){return{tab:"ma",loadingMa:!0,skipQueryAllDescription:!0,allDescripitions:[],tableMa:[],topicMa:"MA: Basic Calculation",tableMb:[],topicMb:"MB: Decimal & Fraction",tableMc:[],topicMc:"MA: Basic Calculation",tableMd:[],topicMd:"MA: Basic Calculation",tableMe:[],topicMe:"MA: Basic Calculation",tableMf:[],topicMf:"MA: Basic Calculation",tableMg:[],topicMg:"MA: Basic Calculation",tableMh:[],topicMh:"MA: Basic Calculation"}},created:function(){this.skipQueryAllDescription=!1},methods:{updateTable:function(t){if(this.loadingMa=!1,this.skipQueryAllDescription=!0,t.length>0){console.log("Get all description - "+t.length),this.tableMa=[],this.tableMb=[],this.tableMc=[],this.tableMd=[],this.tableMe=[],this.tableMf=[],this.tableMg=[],this.tableMh=[];for(var e=0;e<t.length;e++)t[e].taskId.match("MA")?this.tableMa.push({taskid:t[e].taskId,title:t[e].title,description:t[e].description,example:t[e].example,note:t[e].note}):t[e].taskId.match("MB")?this.tableMb.push({taskid:t[e].taskId,title:t[e].title,description:t[e].description,example:t[e].example,note:t[e].note}):t[e].taskId.match("MC")?this.tableMc.push({taskid:t[e].taskId,title:t[e].title,description:t[e].description,example:t[e].example,note:t[e].note}):t[e].taskId.match("MD")?this.tableMd.push({taskid:t[e].taskId,title:t[e].title,description:t[e].description,example:t[e].example,note:t[e].note}):t[e].taskId.match("ME")?this.tableMe.push({taskid:t[e].taskId,title:t[e].title,description:t[e].description,example:t[e].example,note:t[e].note}):t[e].taskId.match("MF")?this.tableMf.push({taskid:t[e].taskId,title:t[e].title,description:t[e].description,example:t[e].example,note:t[e].note}):t[e].taskId.match("MG")?this.tableMg.push({taskid:t[e].taskId,title:t[e].title,description:t[e].description,example:t[e].example,note:t[e].note}):t[e].taskId.match("MH")&&this.tableMh.push({taskid:t[e].taskId,title:t[e].title,description:t[e].description,example:t[e].example,note:t[e].note})}else this.tableMa=[],console.log("Fetch all description failed")}},apollo:{allDescripitions:{query:s["a"],error:function(t){console.error("We've got an error!",t)},skip:function(){return this.skipQueryAllDescription},result:function(t,e){this.updateTable(t.data.allDescripitions)}}}},o=n,c=a("2877"),r=Object(c["a"])(o,l,i,!1,null,null,null);e["default"]=r.exports},4917:function(t,e,a){"use strict";var l=a("cb7c"),i=a("9def"),s=a("0390"),n=a("5f1b");a("214f")("match",1,(function(t,e,a,o){return[function(a){var l=t(this),i=void 0==a?void 0:a[e];return void 0!==i?i.call(a,l):new RegExp(a)[e](String(l))},function(t){var e=o(a,t,this);if(e.done)return e.value;var c=l(t),r=String(this);if(!c.global)return n(c,r);var d=c.unicode;c.lastIndex=0;var p,b=[],u=0;while(null!==(p=n(c,r))){var m=String(p[0]);b[u]=m,""===m&&(c.lastIndex=s(r,i(c.lastIndex),d)),u++}return 0===u?null:b}]}))},df56:function(t,e,a){"use strict";a.r(e);var l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"q-px-sm"},[a("q-table",{attrs:{title:"Your Students",data:t.tabledata,columns:t.columns,"visible-columns":t.visibleColumns,separator:"cell","row-key":"name","table-header-style":{backgroundColor:"lightblue"},"fixed-center":"",bordered:"",dense:"",pagination:t.pagination,loading:t.loading},on:{"update:pagination":function(e){t.pagination=e}},scopedSlots:t._u([{key:"top",fn:function(e){return[a("div",{staticClass:"q-table__title"},[t._v("\n        Topic "+t._s(t.topicname)+"\n      ")]),a("q-space"),a("q-btn",{staticClass:"q-ml-md",attrs:{flat:"",round:"",dense:"",icon:e.inFullscreen?"fullscreen_exit":"fullscreen"},on:{click:e.toggleFullscreen}})]}},{key:"body-cell-taskid",fn:function(e){return t.devMode?a("q-td",{attrs:{props:e}},[t._v("\n      "+t._s(e.row.taskid)+"\n      "),a("q-btn",{attrs:{flat:"",icon:"play_circle_outline"},on:{click:function(a){return t.toRuntask(e.row.taskid)}}})],1):t._e()}},{key:"body-cell-example",fn:function(e){return a("q-td",{attrs:{props:e}},[a("q-btn",{attrs:{flat:"",icon:"play_circle_outline"},on:{click:function(a){return t.toRuntask(e.row.taskid)}}})],1)}}],null,!0)}),a("runTask",{attrs:{active:t.active,taskid:t.currentTaskId,mode:t.runMode},on:{completed:t.processTaskClosed}})],1)},i=[],s={name:"TopicDescriptionTable",components:{runTask:a("ac5f").default},props:{tabledata:{type:Array,default:function(){return[]}},topicname:{type:String,default:""},loading:{type:Boolean,default:!1}},data:function(){return{devMode:!0,active:!1,runMode:1,currentTaskId:"",pagination:{page:0,rowsPerPage:0},visibleColumns:["taskid","title","description","example"],columns:[{name:"taskid",required:!0,label:"Task Id",align:"center",field:"taskid",sortable:!0},{name:"title",align:"center",label:"Title",field:"title",sortable:!1},{name:"description",align:"center",label:"Description",field:"description",sortable:!1},{name:"example",align:"center",label:"Example",field:"example",sortable:!0},{name:"note",align:"center",label:"Note",field:"note",sortable:!1}]}},methods:{toRuntask:function(t){this.active=!0,this.currentTaskId=t},processTaskClosed:function(){this.currentTaskId="NA",this.active=!1}}},n=s,o=a("2877"),c=Object(o["a"])(n,l,i,!1,null,null,null);e["default"]=c.exports}}]);