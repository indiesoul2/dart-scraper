(function(e){function t(t){for(var a,s,i=t[0],l=t[1],c=t[2],u=0,p=[];u<i.length;u++)s=i[u],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&p.push(n[s][0]),n[s]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);d&&d(t);while(p.length)p.shift()();return o.push.apply(o,c||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],a=!0,i=1;i<r.length;i++){var l=r[i];0!==n[l]&&(a=!1)}a&&(o.splice(t--,1),e=s(s.s=r[0]))}return e}var a={},n={app:0},o=[];function s(t){if(a[t])return a[t].exports;var r=a[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=e,s.c=a,s.d=function(e,t,r){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(r,a,function(t){return e[t]}.bind(null,a));return r},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var d=l;o.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var a=r("2b0e"),n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-app",[r("v-app-bar",{attrs:{app:"",color:"primary",dark:""}},[r("div",{staticClass:"d-flex align-center"},[r("H2",[e._v("Dart-Scraper "+e._s(e.current_version))])],1),r("v-spacer"),r("v-btn",{attrs:{href:"https://github.com/josw123/dart-scraper/releases/latest",target:"_blank",text:""}},[r("span",{staticClass:"mr-2"},[e._v("Latest Release")]),r("v-icon",[e._v("mdi-open-in-new")])],1)],1),r("v-content",[e.newVersion?r("v-banner",{attrs:{"single-line":""},scopedSlots:e._u([{key:"actions",fn:function(){return[r("v-btn",{attrs:{color:"primary",text:"",href:"https://github.com/josw123/dart-scraper/releases/latest"}},[e._v(" Download ")])]},proxy:!0}],null,!1,2912867144)},[r("v-icon",{attrs:{slot:"icon",color:"warning",size:"36"},slot:"icon"},[e._v(" mdi-open-in-new ")]),e._v(" New Version Released! ")],1):e._e(),r("DartForm")],1)],1)},o=[],s=(r("e25e"),r("ac1f"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",{attrs:{fluid:""}},[a("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[a("v-row",{attrs:{justify:"center"}},[a("v-col",{attrs:{cols:"12",sm:"10",md:"10",lg:"10"}},[a("v-card",{ref:"form"},[a("v-flex",{attrs:{xs12:""}},[a("v-img",{staticClass:"my-3",attrs:{src:r("cf05"),contain:"",height:"300"}})],1),a("v-card-text",[a("v-text-field",{attrs:{"append-icon":e.apiKeyShow?"mdi-eye":"mdi-eye-off",rules:[e.apikeyRules.required,e.apikeyRules.min],type:e.apiKeyShow?"text":"password",name:"input",label:"DART API KEY",hint:"40 characters",counter:"",required:""},on:{"click:append":function(t){e.apiKeyShow=!e.apiKeyShow}},model:{value:e.apikey,callback:function(t){e.apikey=t},expression:"apikey"}}),a("v-autocomplete",{ref:"cpAutocomplete",attrs:{items:e.companyItems,rules:[e.cpRules.required],filter:e.customFilter,label:"Company Name or Code","item-text":"name",chips:"",multiple:"",required:""},model:{value:e.cpList,callback:function(t){e.cpList=t},expression:"cpList"}}),a("v-select",{attrs:{items:e.cpTpItems,rules:[e.cpTpRules.required],chips:"",label:"Report Types",multiple:"",required:""},model:{value:e.cpTpList,callback:function(t){e.cpTpList=t},expression:"cpTpList"}}),a("v-select",{attrs:{items:e.reportTpItems,attach:"",chips:"",label:"Reporting Period",required:""},model:{value:e.reportTpList,callback:function(t){e.reportTpList=t},expression:"reportTpList"}}),a("v-row",[a("v-col",{attrs:{cols:"6"}},[a("v-menu",{ref:"startdtMenu",attrs:{"close-on-content-click":!1,"return-value":e.startdt,transition:"scale-transition","offset-y":"","min-width":"290px"},on:{"update:returnValue":function(t){e.startdt=t},"update:return-value":function(t){e.startdt=t}},scopedSlots:e._u([{key:"activator",fn:function(t){var r=t.on;return[a("v-text-field",e._g({attrs:{label:"Start Date",readonly:""},model:{value:e.startdt,callback:function(t){e.startdt=t},expression:"startdt"}},r))]}}]),model:{value:e.startdtMenu,callback:function(t){e.startdtMenu=t},expression:"startdtMenu"}},[a("v-date-picker",{attrs:{"no-title":"",scrollable:""},model:{value:e.startdt,callback:function(t){e.startdt=t},expression:"startdt"}},[a("v-spacer"),a("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(t){e.startdtMenu=!1}}},[e._v("Cancel")]),a("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(t){return e.$refs.startdtMenu.save(e.startdt)}}},[e._v("OK")])],1)],1)],1),a("v-col",{attrs:{cols:"6"}},[a("v-menu",{ref:"endMenu",attrs:{"close-on-content-click":!1,"return-value":e.enddt,transition:"scale-transition","offset-y":"","min-width":"290px"},on:{"update:returnValue":function(t){e.enddt=t},"update:return-value":function(t){e.enddt=t}},scopedSlots:e._u([{key:"activator",fn:function(t){var r=t.on;return[a("v-text-field",e._g({attrs:{label:"End Date",readonly:""},model:{value:e.enddt,callback:function(t){e.enddt=t},expression:"enddt"}},r))]}}]),model:{value:e.endMenu,callback:function(t){e.endMenu=t},expression:"endMenu"}},[a("v-date-picker",{attrs:{"no-title":"",scrollable:""},model:{value:e.enddt,callback:function(t){e.enddt=t},expression:"enddt"}},[a("v-spacer"),a("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(t){e.endMenu=!1}}},[e._v("Cancel")]),a("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(t){return e.$refs.endMenu.save(e.enddt)}}},[e._v("OK")])],1)],1)],1)],1),a("v-text-field",{attrs:{rules:[e.folderRules.required],label:"Download Folder",required:""},model:{value:e.folder,callback:function(t){e.folder=t},expression:"folder"}})],1),e.showError?a("v-alert",{attrs:{dense:"",outlined:"",type:"error"}},[e._v(" "+e._s(e.showErrorMsg)+" ")]):e._e(),e.showProgressbar?a("v-progress-linear",{attrs:{value:e.progressbarValue,height:"25",striped:""}},[a("strong",[e._v(e._s(Math.ceil(e.progressbarValue))+"%")])]):e._e(),a("v-divider",{staticClass:"mt-12"}),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"primary",text:""},on:{click:e.submit}},[e._v("Download")])],1)],1)],1)],1)],1)],1)}),i=[],l=(r("4de4"),r("caad"),r("c975"),r("accc"),r("0d03"),r("b0c0"),r("2532"),r("5319"),r("bc3a")),c=r.n(l),d=window.location.href,u={name:"HelloWorld",data:function(){return{valid:!1,apiKeyShow:!1,apikey:"",apikeyRules:{required:function(e){return!!e||"Required."},min:function(e){return 40===e.length||"40 characters"}},companyItems:null,cpList:[],cpRules:{required:function(e){return 0!==e.length||"Required."}},cpTpItems:["Consolidated","Separate"],cpTpList:["Consolidated"],cpTpRules:{required:function(e){return 0!==e.length||"Required."}},reportTpItems:["Annual","Half","Quarter"],reportTpList:"Annual",startdtMenu:!1,startdt:new Date("2012-01-01").toISOString().substr(0,10),endMenu:!1,enddt:(new Date).toISOString().substr(0,10),folder:"",folderRules:{required:function(e){return!!e||"Required."}},showError:!1,showErrorMsg:"",showProgressbar:!1,progressbarValue:0,downloadIndex:-1,downloadTotal:0,downloadList:[]}},methods:{customFilter:function(e,t){var r=e.name.toLowerCase(),a=e.code.toLowerCase(),n=t.toLowerCase();return r.indexOf(n)>-1||a.indexOf(n)>-1},submit:function(){var e=this;if(this.$refs.form.validate()){var t={api_key:this.apikey};c.a.post(d+"apikey",t).then((function(t){var r=t.data;if("success"!==r["ret_code"])e.apikey="",e.showError=!0,e.showErrorMsg="The provided API key is invalid.",e.showProgressbar=!1;else{e.showError=!1,e.showErrorMsg="",e.showProgressbar=!0,e.downloadTotal=e.cpList.length*e.cpTpList.length,e.progressbarValue=e.downloadIndex/e.downloadTotal;var a=e.startdt.replace(/-/g,""),n=e.enddt.replace(/-/g,""),o=e.companyItems.filter((function(t){return!!e.cpList.includes(t["name"])}));for(var s in o)for(var i in e.cpTpList){var l=!1;"Separate"===e.cpTpList[i]&&(l=!0);var c={api_key:e.apikey,crp_cd:o[s]["code"],start_dt:a,end_dt:n,report_tp:e.reportTpList,separate:l,path:e.folder};e.downloadList.push(c)}e.downloadIndex=0}})).catch((function(){e.showError=!0,e.showErrorMsg="Server is not responding.",e.showProgressbar=!1}))}}},mounted:function(){var e=this,t=d+"company";c.a.get(t).then((function(t){e.companyItems=t.data["crp_list"]})),t=d+"apikey",c.a.get(t).then((function(t){e.apikey=t.data["api_key"]})),t=d+"path",c.a.get(t).then((function(t){e.folder=t.data["path"]}))},watch:{downloadIndex:function(e,t){var r=this;if(e!==t&&e<this.downloadTotal){var a=this.downloadList[e];c.a.post(d+"download",a).then((function(e){var t=e.data;"success"===t["ret_code"]&&(r.downloadIndex=r.downloadIndex+1)}))}this.progressbarValue=e/this.downloadTotal*100}}},p=u,f=r("2877"),v=r("6544"),m=r.n(v),h=r("0798"),b=r("c6a6"),w=r("8336"),y=r("b0af"),g=r("99d9"),x=r("62ad"),k=r("a523"),_=r("2e4b"),V=r("ce7e"),T=r("0e8f"),L=r("4bd4"),M=r("adda"),S=r("e449"),I=r("8e36"),C=r("0fd9"),O=r("b974"),R=r("2fa4"),q=r("8654"),P=Object(f["a"])(p,s,i,!1,null,"3d233e5f",null),j=P.exports;m()(P,{VAlert:h["a"],VAutocomplete:b["a"],VBtn:w["a"],VCard:y["a"],VCardActions:g["a"],VCardText:g["b"],VCol:x["a"],VContainer:k["a"],VDatePicker:_["a"],VDivider:V["a"],VFlex:T["a"],VForm:L["a"],VImg:M["a"],VMenu:S["a"],VProgressLinear:I["a"],VRow:C["a"],VSelect:O["a"],VSpacer:R["a"],VTextField:q["a"]});var E={name:"App",components:{DartForm:j},data:function(){return{company:null,newVersion:!1,current_version:null}},mounted:function(){var e=this,t=window.location.href;c.a.get(t+"company").then((function(t){e.company=t.data})),c.a.get("https://api.github.com/repos/josw123/dart-scraper/releases/latest").then((function(r){c.a.get(t+"version").then((function(t){var a=/(\d).(\d).(\d)/,n=t.data["version"],o=r.data["tag_name"];e.current_version=n;for(var s=a.exec(o),i=a.exec(n),l=1;l<4;l++){var c=parseInt(s[l]),d=parseInt(i[l]);if(c>d){e.newVersion=!0;break}if(c<d)break}}))}))}},D=E,A=r("7496"),F=r("40dc"),K=r("e4e5"),$=r("a75b"),B=r("132d"),H=Object(f["a"])(D,n,o,!1,null,null,null),z=H.exports;m()(H,{VApp:A["a"],VAppBar:F["a"],VBanner:K["a"],VBtn:w["a"],VContent:$["a"],VIcon:B["a"],VSpacer:R["a"]});var J=r("f309");a["a"].use(J["a"]);var N=new J["a"]({theme:{themes:{light:{primary:"#f44336",secondary:"#e91e63",accent:"#9c27b0",error:"#673ab7",warning:"#3f51b5",info:"#2196f3",success:"#00bcd4"}}}});a["a"].config.productionTip=!1,new a["a"]({vuetify:N,render:function(e){return e(z)}}).$mount("#app")},cf05:function(e,t,r){e.exports=r.p+"img/logo.1dc74071.png"}});
//# sourceMappingURL=app.d4bca563.js.map