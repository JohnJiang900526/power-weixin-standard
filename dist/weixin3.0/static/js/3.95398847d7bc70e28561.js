webpackJsonp([3],{XMtk:function(e,t){},YC6q:function(e,t){},hp79:function(e,t,s){"use strict";var n={name:"x-switch",methods:{toBoolean:function(e){return this.valueMap?1===this.valueMap.indexOf(e):e},toRaw:function(e){return this.valueMap?this.valueMap[e?1:0]:e}},props:{disabled:Boolean,value:{type:[Boolean,String,Number],default:!1},valueMap:{type:Array,default:function(){return[!1,!0]}}},data:function(){return{currentValue:this.toBoolean(this.value)}},watch:{currentValue:function(e){var t=this.toRaw(e);this.$emit("input",t),this.$emit("on-change",t)},value:function(e){this.currentValue=this.toBoolean(e)}}},i={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("input",{directives:[{name:"model",rawName:"v-model",value:e.currentValue,expression:"currentValue"}],staticClass:"inline-x-switch weui-switch",attrs:{type:"checkbox",disabled:e.disabled},domProps:{checked:Array.isArray(e.currentValue)?e._i(e.currentValue,null)>-1:e.currentValue},on:{change:function(t){var s=e.currentValue,n=t.target,i=!!n.checked;if(Array.isArray(s)){var c=e._i(s,null);n.checked?c<0&&(e.currentValue=s.concat([null])):c>-1&&(e.currentValue=s.slice(0,c).concat(s.slice(c+1)))}else e.currentValue=i}}})},staticRenderFns:[]};var c=s("VU/8")(n,i,!1,function(e){s("XMtk")},null,null);t.a=c.exports},undV:function(e,t,s){"use strict";var n={props:{isChecked:{type:Boolean,default:function(){return!1}},index:{type:Number,default:0},selectType:{type:String,default:"single"},item:{type:Object,default:function(){return{}}}},data:function(){return{checked:!1}},methods:{setChecked:function(e){this.checked=!this.checked},setCheckedDefault:function(e){this.checked=!1}},watch:{checked:function(e){this.$emit("selectFlowItem",this.item,this.checked,this.index)}}},i={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"person-select-list"},[s("div",{staticClass:"person-select-item title"},[s("p",{staticClass:"text"},[e._v(e._s(e.item.WorkFlowName))])]),e._v(" "),s("div",{staticClass:"person-select-item select-box"},[s("div",{staticClass:"check-icon-wrap"},[s("div",{staticClass:"vux-check-icon"},[e.checked?s("i",{staticClass:"weui-icon weui_icon_success weui-icon-success"}):e._e(),e._v(" "),e.checked?e._e():s("i",{staticClass:"weui-icon weui_icon_circle weui-icon-circle"}),e._v(" "),s("span")])])])])},staticRenderFns:[]};var c=s("VU/8")(n,i,!1,function(e){s("YC6q")},null,null);t.a=c.exports},wdYJ:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=s("Gu7T"),i=s.n(n),c=s("mvHQ"),o=s.n(c),r=s("woOf"),a=s.n(r),l=s("Dd8w"),u=s.n(l),d=s("NYxO"),h=s("tiSE"),f=s("GUsc"),v=s("undV"),p=s("W/7t"),C=s("ALGc"),k=s("rHil"),S=s("hp79"),m=s("N8Hv"),w=s("Mlu6"),N={name:"workflow",data:function(){return{selectType:"single",formState:"",query:{},WorkFlowList:[],WorkFlow:{},currentWorkFlow:null,currentNodeList:null,showPeopleContent:!0,filterNormalNode:!0,currentStop:"",MindInfo:"",IsMindMustInput:!0,NodeList:[],NextNodeList:[],current:{},positionUserParams:{},byDraft:{users:[],NodeCode:""},SelectPeople:{}}},mounted:function(){this.workNodeLoad()},computed:{PeopleContentHeight:function(){return this.showPeopleContent?"calc(60% - 50px)":"0px"}},methods:u()({workNodeLoad:function(){this.getQuery(),this.query.flowOperate&&this.getWorkFlowData()},getSelectedNode:function(){var e=[],t="";return this.NextNodeList.forEach(function(s,n){var i={};i.NodeCode=s.NodeCode,i.SendUserList=[],i.CopyUserList=[],s.checked&&(s.CanSelectUsers.forEach(function(e,t){if(e.checked&&!0===e.checked){var s=a()({},e);delete s.checked,i.SendUserList.push(s)}}),s.CanSelectCopyUsers.forEach(function(e,t){if(e.checked&&!0===e.checked){var s=a()({},e);delete s.checked,i.CopyUserList.push(s)}}),0===i.SendUserList.length&&!1===s.IsMustNotUsers&&(t=s.NodeName+"节点没有选择送审人员"),s.checked&&e.push(i))}),0===e.length&&(t="节点数据为空,请选择一个节点"),{data:e,error:t}},submitFlow:function(){var e=this,t=this.getSelectedNode();if(""!==t.error)return this.AlertShowEvent(t.error),!1;if(this.IsMindMustInput&&""===this.MindInfo)return this.AlertShowEvent("审批意见不许为空"),!1;var s=a()(this.current,{KeyWord:this.query.KeyWord,KeyValue:this.query.KeyValue,FormId:this.query.FormId}),n=a()({Current:s,FlowOperate:"Send",MindInfo:this.MindInfo,SelectedNode:t.data,VoteText:"",VoteValue:""});this.FlowActionData(o()(n)).then(function(t){e.ToastShowEvent("完成提交"),e.GetInformCount().then(function(){e.timer&&clearTimeout(e.timer),e.timer=setTimeout(function(){"view"===e.formState?e.$router.push("/workinfos"):e.$router.back()},1e3)}).catch(function(t){e.AlertShowEvent(t)})}).catch(function(t){e.AlertShowEvent(t.message)})},selectCopyUsersEvent:function(e,t){var s=[].concat(i()(this.NextNodeList));s[e].checked?s[e].CanSelectCopyUsers[t].checked=!s[e].CanSelectCopyUsers[t].checked:this.AlertShowEvent("请先选择"+this.NextNodeList[e].NodeName+"节点"),this.NextNodeList=[].concat(i()(s))},selectUsersEvent:function(e,t){var s=[].concat(i()(this.NextNodeList)),n=s[e].checked,c=s[e].AllowMulitUser,o=s[e].SelectUserMode;if(n){if("SelectAllAndDisabled"===o)return this.AlertShowEvent("你没有修改权限"),!1;c?s[e].CanSelectUsers[t].checked=!s[e].CanSelectUsers[t].checked:s[e].CanSelectUsers.forEach(function(e,s){e.checked=s===t&&!e.checked})}else this.AlertShowEvent("请先选择"+s[e].NodeName+"节点");this.NextNodeList=[].concat(i()(s))},nodeListTitleSelect:function(e){var t=this.NextNodeList,s=t[e].checked,n=t[e].SelectNodeMode,i=t[e].SelectUserMode;if("SelectedAndDisabled"===n)return this.AlertShowEvent("禁止取消"),!1;t[e].checked=!s,t[e].checked?(t[e].LineType===p.c.ExcludeLine&&t.forEach(function(s,n){n!==e&&(t[n].checked=!1,t[n].CanSelectUsers.forEach(function(e){e.checked=!1}),t[n].CanSelectCopyUsers.forEach(function(e){e.checked=!1}))}),t[e].AllowMulitUser&&t[e].CanSelectUsers.forEach(function(e,t){e.checked="SelectAllAndDisabled"===i}),1===t[e].CanSelectUsers.length&&(t[e].CanSelectUsers[0].checked=!0),t[e].CanSelectCopyUsers.forEach(function(e,t){e.checked=!1})):(t[e].CanSelectUsers.forEach(function(e,t){e.checked=!1}),t[e].CanSelectCopyUsers.forEach(function(e,t){e.checked=!1})),this.NextNodeList=t.concat()},getSelectPeople:function(e){var t=this,s=a()({},{WorkInfoID:this.query.WorkInfoID,FormId:this.query.FormId,KeyWord:this.query.KeyWord,KeyValue:this.query.KeyValue,SequeID:this.query.SequeID});this.query.WorkInfoID&&(s=a()(s,{WorkInfoID:this.query.WorkInfoID})),this.query.GroupID&&(s=a()(s,{GroupID:this.query.GroupID}));var n={Current:s,FlowOperate:p.d.SupplyInstance,SubOperate:"ReadSendNodeList"};this.FlowActionData(o()(n)).then(function(e){var s=e.data.value,n=[],i=[];s&&(t.SelectPeople=a()({},s),n=s.NextNodeList.concat(),i=s.NodeList?s.NodeList.concat():[]),t.current=a()({},s.Current),t.NextNodeList=t.formatNextNodeList(n),t.NodeList=i}).catch(function(e){t.AlertShowEvent(e.message)})},formatNextNodeList:function(e){var t=this,s=[];return e.forEach(function(n,i){t.IsMindMustInput=n.IsMindMustInput,"SelectedNode"===n.SelectNodeMode||"SelectedAndDisabled"===n.SelectNodeMode?n.checked=!0:n.checked=!1,1===e.length&&(e[0].checked=!0),"DeselectAll"===n.SelectUserMode?n.CanSelectUsers.forEach(function(e,t){e.checked=!1}):"SelectAll"===n.SelectUserMode||"SelectAllAndDisabled"===n.SelectUserMode?n.CanSelectUsers.forEach(function(e,t){e.checked=!0}):n.CanSelectUsers.forEach(function(e,t){n.DefaultUserID===e.UserID?e.checked=!0:e.checked=!1}),1===n.CanSelectUsers.length&&(n.CanSelectUsers[0].checked=!0),n.CanSelectCopyUsers.length>1?n.CanSelectCopyUsers[0].checked=!0:n.CanSelectCopyUsers.forEach(function(e,t){e.checked=!1}),n.IsCancel||s.push(n)}),s},toNextStep:function(e){var t=this.getCurrentFlowItem();this.currentStop=e,"peopleSelect"===e&&this.getSelectPeople(t)},toUpStep:function(e){this.SelectPeople.IsByDraft?this.currentStop=e:(this.currentStop="peopleSelect",this.AlertShowEvent("不需要返回上一步"))},getCurrentFlowItem:function(){for(var e=null,t=0;t<this.WorkFlowList.length;t++)if(this.WorkFlowList[t].checked){e=a()({},this.WorkFlowList[t]);break}return e},getWorkFlowData:function(){var e=this,t={KeyWord:this.query.KeyWord,KeyValue:this.query.KeyValue,FormId:this.query.FormId,FlowOperate:p.d.SelectFlow,SequeID:this.query.SequeID};this.FlowActionData(o()(t)).then(function(t){var s=t.data.value,n=[];e.WorkFlow=s,(n=s&&s.WorkFlowList?s.WorkFlowList.concat():[]).map(function(e,t){s.WorkFlowID===e.WorkFlowID?e.checked=!0:e.checked=!1}),e.WorkFlowList=n,1===n.length&&n[0].IsAutoSelect&&e.$nextTick(function(){e.$refs.personSelectList[0].setChecked()}),e.timer&&clearTimeout(e.timer),e.timer=setTimeout(function(){e.toNextStep("peopleSelect")},300)}).catch(function(t){e.AlertShowEvent(t.message)})},selectItem:function(e){var t=this;this.$refs.personSelectList.forEach(function(s,n){e===n?t.$refs.personSelectList[n].setChecked():t.$refs.personSelectList[n].setCheckedDefault()})},selectFlowItem:function(e,t,s){this.WorkFlowList[s].checked=!!t},getPositionAndUserList:function(e){var t=this.getCurrentFlowItem(),s=a()({},{WorkFlowID:t.WorkFlowID,Version:t.Version,FormId:this.query.FormId,KeyWord:this.query.KeyWord,KeyValue:this.query.KeyValue,WorkInfoID:t.WorkInfoID?t.WorkInfoID:Object(w.c)()});this.positionUserParams=a()({},{SubOperate:"SaveUserToInstanNode",FlowOperate:"SupplyFlow",Current:s,ConfigUserList:[],NodeCode:e.NodeCode}),this.$refs.positionUserList.load()},selectNodeList:function(e){this.currentNodeList=e},draftUser:function(e){this.currentNodeList=e;var t=this.NodeList[e],s=t.UserList;"ByDraft"===t.SendUserMode&&(s?0===s.length&&this.getPositionAndUserList(t):this.getPositionAndUserList(t))},completeByDraft:function(e){this.byDraft=a()({},e)},normalNodeIsShow:function(e){return"Normal"!==e.SendUserMode||!this.filterNormalNode},transformNodeListAction:function(e){var t=e.UserList,s=e.SendUserMode;if(t){var n=JSON.parse(t);if("ByDraft"===s){if(0===n.length)return"选择人员";if(n.length>0)return"二次筛选"}else if("ByMainNode"===s){if(0===n.length)return"选择人员";if(n.length>0)return"二次筛选"}else if("BySendUser"===s)return"发送时定义"}else if(!t){if("ByDraft"===s)return"选择人员";if("ByMainNode"===s)return"选择人员";if("BySendUser"===s)return"发送时定义"}},tranformStatus:function(e){return!0===e?"正常":"异常"},getQuery:function(){var e=this.$router.history.current.query;e&&(this.query=a()({},e),this.formState=this.query.FormState)},isShow:function(e){return this.currentStop===e},cancel:function(){var e=this;this.$refs.personSelectList.forEach(function(t,s){e.$refs.personSelectList[s].setCheckedDefault(),e.WorkFlowList[s].checked=!1}),this.$router.back()}},Object(d.b)(["GetInformCount","FlowActionData","AlertShowEvent","ToastShowEvent"])),destroyed:function(){this.timer&&clearTimeout(this.timer)},components:{PersonSelectList:v.a,XTextarea:C.a,Group:k.a,InlineXSwitch:S.a,CheckIcon:m.default,LineBreak:h.default,PositionUserList:f.a}},y={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("transition",{attrs:{name:"slide"}},[s("div",{staticClass:"work-node-select"},[s("div",{directives:[{name:"show",rawName:"v-show",value:e.isShow("selectFlow"),expression:"isShow('selectFlow')"}],staticClass:"before-select-content"},[s("div",{staticClass:"workflow-select"},[s("header",{staticClass:"header"},[s("div",{staticClass:"title"},[e._v("\n            流程选择\n          ")])]),e._v(" "),s("line-break"),e._v(" "),s("ul",{staticClass:"select-lists"},e._l(e.WorkFlowList,function(t,n){return e.WorkFlowList.length>0?s("li",{key:n,staticClass:"select-list",on:{click:function(t){e.selectItem(n)}}},[s("person-select-list",{ref:"personSelectList",refInFor:!0,attrs:{index:n,selectType:e.selectType,item:t,isChecked:t.checked},on:{selectFlowItem:e.selectFlowItem}})],1):e._e()}))],1),e._v(" "),s("div",{staticClass:"person-select-bar"},[s("div",{staticClass:"select-bar",on:{click:function(t){e.toNextStep("nodeSelect")}}},[s("span",[e._v("下一步")])]),e._v(" "),s("div",{staticClass:"select-bar",on:{click:e.cancel}},[s("span",[e._v("返回")])])])]),e._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:e.isShow("nodeSelect"),expression:"isShow('nodeSelect')"}],staticClass:"node-select-content"},[s("div",{staticClass:"node-select"},[s("header",{staticClass:"header"},[s("div",{staticClass:"title"},[e._v("\n            节点选择\n          ")]),e._v(" "),s("div",{staticClass:"toggle-bar"},[s("cube-switch",{staticClass:"toggle-switch",model:{value:e.filterNormalNode,callback:function(t){e.filterNormalNode=t},expression:"filterNormalNode"}})],1)]),e._v(" "),s("line-break"),e._v(" "),s("ul",{staticClass:"node-select-lists"},e._l(e.NodeList,function(t,n){return s("li",{directives:[{name:"show",rawName:"v-show",value:e.normalNodeIsShow(t),expression:"normalNodeIsShow(item)"}],key:n,staticClass:"node-select-list",class:{selected:n===e.currentNodeList},on:{click:function(t){t.preventDefault(),t.stopPropagation(),e.selectNodeList(n)}}},[s("div",{staticClass:"list-inner"},[s("div",{staticClass:"list-inner-header"},[s("div",{staticClass:"node-name"},[s("span",{staticClass:"name"},[e._v("节点名称:")]),e._v(" "),s("span",{staticClass:"text"},[e._v(e._s(t.NodeName))])]),e._v(" "),s("div",{staticClass:"node-status"},[s("span",{staticClass:"name"},[e._v("节点状态:")]),e._v(" "),s("span",{staticClass:"text"},[e._v(e._s(e.tranformStatus(t.Status)))])])]),e._v(" "),s("div",{staticClass:"list-inner-body"},[s("div",{staticClass:"node-info"},[s("span",{staticClass:"name"},[e._v("节点描述:")]),e._v(" "),s("span",{staticClass:"text"},[e._v(e._s(t.ShowUserInfo))])]),e._v(" "),s("div",{staticClass:"node-action"},[s("span",{staticClass:"name"},[e._v("操作:")]),e._v(" "),s("span",{staticClass:"text action",on:{click:function(t){t.preventDefault(),t.stopPropagation(),e.draftUser(n)}}},[e._v(e._s(e.transformNodeListAction(t)))])])])])])}))],1),e._v(" "),s("div",{staticClass:"person-select-bar"},[s("div",{staticClass:"select-bar",on:{click:function(t){e.toNextStep("peopleSelect")}}},[s("span",[e._v("下一步")])]),e._v(" "),"view"!==e.formState?s("div",{staticClass:"select-bar",on:{click:function(t){e.toUpStep("selectFlow")}}},[s("span",[e._v("上一步")])]):e._e()])]),e._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:e.isShow("peopleSelect"),expression:"isShow('peopleSelect')"}],staticClass:"after-select-content"},[s("div",{staticClass:"people-select"},[s("header",{staticClass:"header"},[s("div",{staticClass:"title"},[e._v("\n            人员选择\n          ")]),e._v(" "),s("div",{staticClass:"toggle-bar"},[s("cube-switch",{staticClass:"toggle-switch",model:{value:e.showPeopleContent,callback:function(t){e.showPeopleContent=t},expression:"showPeopleContent"}})],1)]),e._v(" "),s("section",{staticClass:"people-content",style:{height:e.PeopleContentHeight}},e._l(e.NextNodeList,function(t,n){return s("div",{key:n,staticClass:"next-node-list"},[s("h1",{staticClass:"node-list-title",on:{click:function(t){e.nodeListTitleSelect(n)}}},[s("div",{staticClass:"name"},[e._v(e._s(t.NodeName))]),e._v(" "),s("div",{staticClass:"check-box"},[s("check-icon",{attrs:{checked:t.checked}})],1)]),e._v(" "),t.CanSelectUsers.length>0?s("div",{staticClass:"next-node-list-unit can-select-users"},[s("h1",{staticClass:"title"},[e._v("可送审人员")]),e._v(" "),s("ul",{staticClass:"people-lists"},e._l(t.CanSelectUsers,function(t,i){return s("li",{key:i,staticClass:"people-list",on:{click:function(t){e.selectUsersEvent(n,i)}}},[s("div",{staticClass:"user-name"},[e._v(e._s(t.UserName))]),e._v(" "),s("div",{staticClass:"check-box"},[s("check-icon",{attrs:{checked:t.checked}})],1)])}))]):e._e(),e._v(" "),t.CanSelectCopyUsers.length>0?s("div",{staticClass:"next-node-list-unit can-select-copy-users"},[s("h1",{staticClass:"title"},[e._v("可抄送人员")]),e._v(" "),s("ul",{staticClass:"people-lists"},e._l(t.CanSelectCopyUsers,function(t,i){return s("li",{key:i,staticClass:"people-list",on:{click:function(t){e.selectCopyUsersEvent(n,i)}}},[s("div",{staticClass:"user-name"},[e._v(e._s(t.UserName))]),e._v(" "),s("div",{staticClass:"check-box"},[s("check-icon",{attrs:{checked:t.checked}})],1)])}))]):e._e()])})),e._v(" "),s("section",{staticClass:"approve-text-content"},[s("h1",{staticClass:"text-title"},[e._v("审批意见")]),e._v(" "),s("group",{staticClass:"textarea-content"},[s("x-textarea",{attrs:{name:"description",max:300,placeholder:"输入审批意见"},model:{value:e.MindInfo,callback:function(t){e.MindInfo="string"==typeof t?t.trim():t},expression:"MindInfo"}})],1)],1)]),e._v(" "),s("div",{staticClass:"person-select-bar"},[s("div",{staticClass:"select-bar",on:{click:e.submitFlow}},[s("span",[e._v("提交")])]),e._v(" "),"view"!==e.formState?s("div",{staticClass:"select-bar",on:{click:function(t){e.toUpStep("nodeSelect")}}},[s("span",[e._v("上一步")])]):e._e()])]),e._v(" "),s("position-user-list",{ref:"positionUserList",attrs:{subParams:e.positionUserParams},on:{complete:e.completeByDraft}})],1)])},staticRenderFns:[]};var _=s("VU/8")(N,y,!1,function(e){s("wspZ")},null,null);t.default=_.exports},wspZ:function(e,t){}});
//# sourceMappingURL=3.95398847d7bc70e28561.js.map