(self["webpackChunkwtfw"]=self["webpackChunkwtfw"]||[]).push([[598],{598:(e,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>b});var t=a(3673),n=a(8880);const l=(0,t.Wm)("div",{class:"row q-mb-xl flex-center"},[(0,t.Wm)("span",{class:"text-blue text-h2"},"智慧法院 服务系统")],-1),r={class:"row q-my-xl flex-center"},o=(0,t.Wm)("span",{class:"text-blue-grey text-h6"},"用户登录",-1);function i(e,s,a,i,d,m){const u=(0,t.up)("q-card-section"),c=(0,t.up)("q-icon"),p=(0,t.up)("q-input"),w=(0,t.up)("q-btn"),x=(0,t.up)("q-card"),f=(0,t.up)("q-page");return(0,t.wg)(),(0,t.j4)(f,{class:"flex-center q-pa-xl",align:"center",style:{background:"radial-gradient(circle, #FFFFFF 10%, #14CEDB 100%)"}},{default:(0,t.w5)((()=>[l,(0,t.Wm)("div",r,[(0,t.Wm)(x,{class:"q-my-xl",style:{width:"500px",height:"400px"}},{default:(0,t.w5)((()=>[(0,t.Wm)(u,{class:"q-px-xl q-mx-xl q-mt-sm",align:"center"},{default:(0,t.w5)((()=>[o])),_:1}),(0,t.Wm)(u,{class:"q-px-xl q-mx-xl q-mt-sm"},{default:(0,t.w5)((()=>[(0,t.Wm)(p,{ref:"nameInput",modelValue:d.username,"onUpdate:modelValue":s[1]||(s[1]=e=>d.username=e),autofocus:"",color:"green",label:"Username",clearable:"",onKeyup:s[2]||(s[2]=(0,n.D2)((e=>m.addByEnter(0)),["enter"]))},{prepend:(0,t.w5)((()=>[(0,t.Wm)(c,{name:"account_circle"})])),_:1},8,["modelValue"])])),_:1}),(0,t.Wm)(u,{class:"q-px-xl q-mx-xl q-mt-sm"},{default:(0,t.w5)((()=>[(0,t.Wm)(p,{ref:"pwInput",modelValue:d.password,"onUpdate:modelValue":s[4]||(s[4]=e=>d.password=e),color:"green",label:"Password",clearable:"",type:d.isPwd?"password":"text",onKeyup:s[5]||(s[5]=(0,n.D2)((e=>m.addByEnter(1)),["enter"]))},{prepend:(0,t.w5)((()=>[(0,t.Wm)(c,{name:"vpn_key"})])),append:(0,t.w5)((()=>[(0,t.Wm)(c,{color:"blue",name:d.isPwd?"visibility_off":"visibility",class:"cursor-pointer",onClick:s[3]||(s[3]=e=>d.isPwd=!d.isPwd)},null,8,["name"])])),_:1},8,["modelValue","type"])])),_:1}),(0,t.Wm)(u,{align:"center",class:"text-teal"},{default:(0,t.w5)((()=>[(0,t.Wm)(w,{size:"lg",color:"primary",label:"登 录",onClick:m.toLogin},null,8,["onClick"])])),_:1})])),_:1})])])),_:1})}var d=a(515),m=a.n(d),u=(a(7280),a(5363),a(7874)),c=a(1163);const p={data(){return{username:"admin",password:"123",isPwd:!0}},methods:m()(m()({},(0,u.OI)("user",["updateUser"])),{},{toLogin(){"admin"===this.username&&"123"===this.password&&this.setCurrentUser({Gid:"Admin-Gid",Name:"江涛",Username:"Admin",Token:"asdf",LastLoginTime:"",Role:"admin"})},addByEnter(e){""!==this.username&&""!==this.password?this.toLogin():""!==this.username?this.$refs.pwInput.focus():this.$refs.nameInput.focus()},setCurrentUser(e){""!==e.Gid&&(console.log("Write current user to store - "+e.Role),this.updateUser({Gid:e.Gid,Name:e.Name,Username:e.Username,LastLoginTime:"",Role:e.Role}),(0,c.o4)(e.Token),"/Page0"!==this.$route.path&&this.$router.replace("/Page0"))}})};var w=a(4379),x=a(151),f=a(5589),h=a(7815),g=a(4554),q=a(8240),y=a(7518),W=a.n(y);p.render=i;const b=p;W()(p,"components",{QPage:w.Z,QCard:x.Z,QCardSection:f.Z,QInput:h.Z,QIcon:g.Z,QBtn:q.Z})}}]);