webpackJsonp([15],{c1ZO:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=o("mvHQ"),r=o.n(a),i=o("Gu7T"),n=o.n(i),s=o("woOf"),m=o.n(s),l=o("Dd8w"),d=o.n(l),u=o("xrTZ"),f=o("NYxO"),c=o("bGai"),h=o("F4+m"),w=o("Mlu6");var v={name:"h5Form",mixins:[h.c],data:function(){return{currentIndex:0,switches:[],actionMenu:[],tabUnitWidth:100,mainformData:{},KeyWord:"",openformid:"",lineHeight:1.5,direction:"horizontal",computedWidth:{width:"400px"},formAllConfig:{},keywordright:{},workflowdata:{}}},computed:d()({switcheWidth:function(){return this.tabUnitWidth*this.switches.length+"px"}},Object(f.c)(["formStatus","routerParams","formStatusValue"])),created:function(){var t=this.$router.history.current.params;this.probeType=1,this.setFormStatus(t.formstate),this.setRouterParams(t)},mounted:function(){var t=this;this.$nextTick(function(){t.timer&&clearTimeout(t.timer),t.timer=setTimeout(function(){t.mainLoad()},500)})},methods:d()({mainLoad:function(){var t=this;this._FormInit(function(){t._FormMainLoad(),"add"!==t.routerParams.formstate&&t._FormData()})},saveFromData:function(t,e){var o=this,a=this.routerParams.formstate,r=function(t){var e=m()({KeyWord:"",mainformData:{},routerParams:{},formAllConfig:{}},t),o=e.KeyWord,a=e.mainformData,r=e.routerParams,i=e.formAllConfig,n=r.FromId,s=r.formstate,l={KeyWord:o,formAllConfig:i,KeyWordType:"BO",data:[Object(w.h)(i.comboboxdata,a,o)],formDate:s,FormId:n};return Object(w.s)(l)}({KeyWord:this.KeyWord,mainformData:this.mainformData,routerParams:this.routerParams,formAllConfig:this.formAllConfig});this.FormSaveData(r).then(function(r){e?o.ToastShowEvent(e):o.ToastShowEvent("保存数据完成"),t&&t(),"add"===a&&o.$router.back()}).catch(function(t){o.AlertShowEvent(t.message)})},setFormDataFromConfig:function(t){var e=t.formTitle;document.title=e||"表单详情",this.switches=Object(w.t)(t),this.tabUnitWidth=140},_FormInit:function(t){var e=this,o=this.routerParams,a=o.FromId,r=o.formstate,i=o.Id,n=i;if("add"===r&&(n=""),a){var s={FormId:a,KeyValue:n||"",FormState:r};this.FormInitData(s).then(function(o){var n=m()({},o.data);e.formAllConfig=Object(w.g)(n),e.keywordright=e.formAllConfig.keywordright,e.workflowdata=e.formAllConfig.workflowdata;var s=e.formAllConfig.formconfig.appconfig;s?(e.KeyWord=s.KeyWord,e.setFormDataFromConfig(s),t&&t()):e.openPCForm(a,r,i)}).catch(function(t){e.AlertShowEvent(t.message)})}else this.$nextTick(function(){e.AlertShowEvent("openformid is "+a)})},openPCForm:function(t,e,o){var a="?FormId="+t+"&KeyValue="+o,r="/Form/ValidForm/650540a6-af98-4669-b1c3-925691912d79/"+e+"/"+o+"/"+u.Base64.encode(t)+a;window.open(r,"_self")},checkSwitchPermission:function(t,e,o,a){var r=this,i=t.switchsPermission,n=t.switchs,s=this.routerParams.formstate;this.tabUnitWidth=t.tabUnitWidth,n=Object(w.n)(n,i,e,s,o,a),this.switches=Object(w.t)(n,t),this.timer=setTimeout(function(){r.$refs.navBarScroll.refresh()},200)},_FormMainLoad:function(){var t=this,e=this.routerParams,o=e.formstate,a=e.Id;"add"===o&&(a="");var r={KeyWord:this.KeyWord,KeyValue:a,KeyWordType:"BO",swhere:"",select:"",formstate:o};this.FormLoadData(r).then(function(e){var a=t.formAllConfig.formconfig.config.joindata.statusfield,r=e.data.value,i=JSON.parse(r),n=i[a];if(t.setFormStatusValue(n),t.actionMenu=Object(w.A)(t.workflowdata,o,n),r||""!==r){var s=Object(w.i)(t.formAllConfig.comboboxdata,i,t.KeyWord);t.mainformData=m()({},s)}}).catch(function(e){t.AlertShowEvent(e.message)})},_FormData:function(){var t=this,e={FormId:this.routerParams.FromId,KeyValue:this.routerParams.Id,extparams:""};this.FormDataChilds(e).then(function(e){var o=e.data.value;[].concat(n()(o.children)).forEach(function(e,o){e.values||(e.values=[]),t.switches.forEach(function(t,o){t.KeyWord===e.KeyWord&&(t.data=m()({},e))})})}).catch(function(e){t.AlertShowEvent(e.message)})},upDateForm:function(t,e){var o=this,a=this.KeyWord,i=this.routerParams.formstate,n=Object(w.h)(this.formAllConfig.comboboxdata,this.mainformData,a),s={KeyWord:a,formAllConfig:this.formAllConfig,KeyWordType:"BO",data:[n],formDate:i,FormId:this.routerParams.FromId},m=Object(w.s)(s),l={};this.workflowdata&&"view"===i?l.IsWorkFlowHuman="1":"add"===i&&(l.IsRegHuman="1");var d={OpenTrans:"true",Update:{MessageCode:"Power.Controls.PMS.SaveWebForm",data:{formId:m.FormId,json:JSON.parse(m.JsonData),params:u.Base64.encode(r()(l)),FlowOperate:"Update"}}};this.UpDateFormData(r()(d)).then(function(){e?o.ToastShowEvent(e):o.ToastShowEvent("更新数据完毕"),t&&t()}).catch(function(t){o.AlertShowEvent(t.message)})},selectActionMenu:function(t){var e=this,o=this.routerParams,a=o.formstate,i=o.Id,n=o.FromId;if(!t)return!1;if(t.value&&"SaveForm"===t.value&&this.saveFromData(function(){e.mainLoad()}),t.value&&"Active"===t.value&&this.upDateForm(function(){var t={KeyWord:e.KeyWord,KeyValue:i,FormId:n,flowOperate:"Active",SequeID:e.workflowdata.CanFlowOperate.SequeID,FormState:a};e.$router.push({path:"/forkflow/active",query:t})},"更新数据完毕"),t.value&&"Send"===t.value&&this.upDateForm(function(){var t={KeyWord:e.KeyWord,KeyValue:i,FormId:n,flowOperate:"Send",SequeID:e.workflowdata.CanFlowOperate.SequeID,WorkInfoID:e.workflowdata.CanFlowOperate.CanFlowList.ShowMonitor.WorkInfoID,FormState:a};e.$router.push({path:"/forkflow/agree",query:t})},"更新数据完毕"),t.value&&"GetBack"===t.value&&this.upDateForm(function(){var t=m()({},{Current:{KeyWord:e.KeyWord,KeyValue:i,FormId:n,SequeID:e.workflowdata.CanFlowOperate.SequeID+"",FormState:a},FlowOperate:"GetBack"});e.FlowActionData(r()(t)).then(function(t){e.mainLoad()}).catch(function(t){e.AlertShowEvent(t.message)})},"更新数据完毕"),t.value&&"ShowMonitor"===t.value){var s={flowOperate:"ShowMonitor",WorkInfoID:this.workflowdata.CanFlowOperate.CanFlowList.ShowMonitor.WorkInfoID};this.$router.push({path:"/forkflow/monitor",query:s})}if(t.value&&"Return"===t.value&&this.upDateForm(function(){var t={KeyWord:e.KeyWord,KeyValue:i,FormId:n,SequeID:e.workflowdata.CanFlowOperate.SequeID,FormState:a};e.$router.push({path:"/forkflow/return",query:t})},"更新数据完毕"),t.value&&"Delegate"===t.value&&this.upDateForm(function(){var t={KeyWord:e.KeyWord,KeyValue:i,FormId:n,SequeID:e.workflowdata.CanFlowOperate.SequeID,FormState:a};e.$router.push({path:"/forkflow/delegate",query:t})},"更新数据完毕"),t.value&&"Delegateing"===t.value&&this.upDateForm(function(){var t={KeyWord:e.KeyWord,KeyValue:i,FormId:n,SequeID:e.workflowdata.CanFlowOperate.SequeID,FormState:a};e.$router.push({path:"/forkflow/delegateing",query:t})},"更新数据完毕"),t.value&&"Stop"===t.value&&this.upDateForm(function(){var t={KeyWord:e.KeyWord,KeyValue:e.routerParams.Id,FormId:e.routerParams.FromId,SequeID:e.workflowdata.CanFlowOperate.SequeID,FormState:a};e.$router.push({path:"/forkflow/stop",query:t})},"更新数据完毕"),t.value&&"ShowHistoryMonitor"===t.value){var l={KeyWord:this.KeyWord,KeyValue:this.routerParams.Id,FormId:this.routerParams.FromId,SequeID:this.workflowdata.CanFlowOperate.SequeID,FormState:a};this.$router.push({path:"/forkflow/history",query:l})}},formRowChange:function(t){this.mainformData[t.field]=t.value},switchItem:function(t){this.currentIndex=t},_isShow:function(t){return this.currentIndex===t}},Object(f.d)({setFormStatus:"SET_FORM_STATUS",setRouterParams:"SET_ROUTER_PARAMS",setFormStatusValue:"FORMSTATUSVALUE"}),Object(f.b)(["FormInitData","FormLoadData","FormSaveData","FormDataChilds","FlowActionData","UpDateFormData","AlertShowEvent","ToastShowEvent"])),destroyed:function(){this.timer&&clearTimeout(this.timer)},components:{FormRow:c.g,FormAction:c.e,commonChildTable:c.r,treeGridChildTable:c.t,treeGridChildTableCustomize:c.u}},F={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("transition",{attrs:{name:"slide"}},[o("div",{ref:"mainForm",staticClass:"main-form"},[o("header",{staticClass:"nav-bar nav-header"},[t.switches.length>0?o("nav-list",{ref:"navBarScroll",staticClass:"nav-bar-scroll",attrs:{"probe-type":t.probeType,data:t.switches,direction:t.direction,unitWidth:t.tabUnitWidth}},[o("div",{staticClass:"nav-scroll-inner"},[o("switches-box",{attrs:{switcheWidth:t.switcheWidth,lineHeight:t.lineHeight,switches:t.switches,currentIndex:t.currentIndex},on:{switch:t.switchItem}})],1)]):t._e()],1),t._v(" "),t.switches.length>0?o("div",{staticClass:"form-content"},t._l(t.switches,function(e,a){return o("div",{directives:[{name:"show",rawName:"v-show",value:t._isShow(a),expression:"_isShow(tableIndex)"}],key:a,class:"form-content-item "+e.type},["mainTable"===e.type?o("div",{staticClass:"main-table-item",attrs:{for:"主表"}},[o("form",{staticClass:"input-textarea-group"},t._l(e.tableShowField,function(a){return e.tableShowField.length>0&&""!==t.KeyWord?o("form-row",{key:a.field,attrs:{label:a.title,type:a.format,readonly:a.readonly,required:a.required,disabled:a.disabled,placeholder:a.placeholder,field:a.field,KeyWord:t.KeyWord,mainformData:t.mainformData,comboboxdata:t.formAllConfig.comboboxdata||{}},on:{enterChange:t.formRowChange}}):t._e()})),t._v(" "),t.actionMenu.length>0&&("40"!==t.formStatusValue||"50"!==t.formStatusValue)?o("div",{staticClass:"form-action-wrap"},[o("form-action",{attrs:{actions:t.actionMenu},on:{selectActionMenu:t.selectActionMenu}})],1):t._e()]):t._e(),t._v(" "),"childTable"===e.type?o("div",{directives:[{name:"show",rawName:"v-show",value:t._isShow(a),expression:"_isShow(tableIndex)"}],class:"form-content-item "+e.type,attrs:{for:"子表list"}},[!e.data||"common"!==e.style&&e.style?t._e():o("common-child-table",{attrs:{for:"common",KeyValue:t.routerParams.Id,formAllConfig:t.formAllConfig,comboboxdata:t.formAllConfig.comboboxdata,chileTableItem:e,tableData:e.data,mainformData:t.mainformData},on:{saveChildFrom:function(e){t._FormData()}}}),t._v(" "),e.data&&"treeGrid"===e.style?o("tree-grid-child-table",{attrs:{KeyValue:t.routerParams.Id,formAllConfig:t.formAllConfig,openformid:t.openformid,comboboxdata:t.formAllConfig.comboboxdata,chileTableItem:e,tableData:e.data,mainformData:t.mainformData},on:{saveChildFrom:function(e){t._FormData()}}}):t._e(),t._v(" "),e.data&&"treeGridCustomize"===e.style?o("tree-grid-child-table-customize",{attrs:{KeyValue:t.routerParams.Id,formAllConfig:t.formAllConfig,openformid:t.openformid,comboboxdata:t.formAllConfig.comboboxdata,chileTableItem:e,tableData:e.data,mainformData:t.mainformData},on:{saveChildFrom:function(e){t._FormData()}}}):t._e()],1):t._e(),t._v(" "),"fileAttach"===e.type?o("div",{directives:[{name:"show",rawName:"v-show",value:t._isShow(a),expression:"_isShow(tableIndex)"}],staticClass:"form-content-item file-attach",attrs:{for:"附件"}},[o("file-attach",{attrs:{loadStart:t.currentIndex===a,KeyWord:t.KeyWord,KeyValue:t.routerParams.Id}})],1):t._e(),t._v(" "),"report"===e.type?o("div",{directives:[{name:"show",rawName:"v-show",value:t._isShow(a),expression:"_isShow(tableIndex)"}],staticClass:"form-content-item",attrs:{for:"报表"}},[o("report",{ref:"Report",refInFor:!0,attrs:{loadStart:t.currentIndex===a,KeyWord:t.KeyWord}})],1):t._e(),t._v(" "),"comment"===e.type?o("div",{directives:[{name:"show",rawName:"v-show",value:t._isShow(a),expression:"_isShow(tableIndex)"}],staticClass:"form-content-item",attrs:{for:"评论"}},[o("comment",{attrs:{loadStart:t.currentIndex===a,KeyWord:t.KeyWord}})],1):t._e()])})):t._e()])])},staticRenderFns:[]};var p=o("VU/8")(v,F,!1,function(t){o("wp2O")},null,null);e.default=p.exports},wp2O:function(t,e){}});
//# sourceMappingURL=15.91065f1dd40f8a1bc9b7.js.map