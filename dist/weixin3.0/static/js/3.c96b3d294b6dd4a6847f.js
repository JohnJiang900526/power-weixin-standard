webpackJsonp([3],{D2CY:function(e,t){},YC6q:function(e,t){},undV:function(e,t,s){"use strict";var c={props:{isChecked:{type:Boolean,default:function(){return!1}},index:{type:Number,default:0},selectType:{type:String,default:"single"},item:{type:Object,default:function(){return{}}}},data:function(){return{checked:!1}},methods:{setChecked:function(e){this.checked=!this.checked},setCheckedDefault:function(e){this.checked=!1}},watch:{checked:function(e){this.$emit("selectFlowItem",this.item,this.checked,this.index)}}},n={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"person-select-list"},[s("div",{staticClass:"person-select-item title"},[s("p",{staticClass:"text"},[e._v(e._s(e.item.WorkFlowName))])]),e._v(" "),s("div",{staticClass:"person-select-item select-box"},[s("div",{staticClass:"check-icon-wrap"},[s("div",{staticClass:"vux-check-icon"},[e.checked?s("i",{staticClass:"weui-icon weui_icon_success weui-icon-success"}):e._e(),e._v(" "),e.checked?e._e():s("i",{staticClass:"weui-icon weui_icon_circle weui-icon-circle"}),e._v(" "),s("span")])])])])},staticRenderFns:[]};var o=s("VU/8")(c,n,!1,function(e){s("YC6q")},null,null);t.a=o.exports},wdYJ:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var c=s("Gu7T"),n=s.n(c),o=s("mvHQ"),i=s.n(o),r=s("woOf"),a=s.n(r),l=s("Dd8w"),d=s.n(l),h=s("NYxO"),u=s("GUsc"),f=s("undV"),C=s("W/7t"),p=s("ALGc"),v=s("rHil"),k=s("N8Hv"),S={name:"workflow",data:function(){return{showPeopleContent:!0,MindInfo:"",IsMindMustInput:!0,NextNodeList:[],current:{},positionUserParams:{},SelectPeople:{}}},mounted:function(){this.workNodeLoad()},computed:{PeopleContentHeight:function(){return this.showPeopleContent?"calc(60% - 50px)":"0px"},query:function(){return this.$router.history.current.query},formState:function(){return this.query.FormState}},methods:d()({workNodeLoad:function(){this.query.flowOperate&&this.getSelectPeople()},getSelectPeople:function(){var e=this,t=a()({},{WorkInfoID:this.query.WorkInfoID,FormId:this.query.FormId,KeyWord:this.query.KeyWord,KeyValue:this.query.KeyValue,SequeID:this.query.SequeID});this.query.WorkInfoID&&(t=a()(t,{WorkInfoID:this.query.WorkInfoID})),this.query.GroupID&&(t=a()(t,{GroupID:this.query.GroupID}));var s={Current:t,FlowOperate:C.d.SupplyInstance,SubOperate:"ReadSendNodeList"};this.FlowActionData(i()(s)).then(function(t){var s=t.data.value,c=[];console.log(s),s&&(e.SelectPeople=a()({},s),c=s.NextNodeList.concat()),e.current=a()({},s.Current),e.NextNodeList=e.formatNextNodeList(c)}).catch(function(t){e.AlertShowEvent(t.message)})},submitFlow:function(){var e=this,t=this.getSelectedNode();if(""!==t.error)return this.AlertShowEvent(t.error),!1;if(this.IsMindMustInput&&""===this.MindInfo)return this.AlertShowEvent("审批意见不许为空"),!1;var s=a()(this.current,{KeyWord:this.query.KeyWord,KeyValue:this.query.KeyValue,FormId:this.query.FormId}),c=a()({Current:s,FlowOperate:"Send",MindInfo:this.MindInfo,SelectedNode:t.data,VoteText:"",VoteValue:""});this.FlowActionData(i()(c)).then(function(t){e.ToastShowEvent("完成提交"),e.GetInformCount().then(function(){e.timer&&clearTimeout(e.timer),e.timer=setTimeout(function(){"view"===e.formState?e.$router.push("/workinfos"):e.$router.back()},1e3)}).catch(function(t){e.AlertShowEvent(t)})}).catch(function(t){e.AlertShowEvent(t.message)})},selectCopyUsersEvent:function(e,t){var s=[].concat(n()(this.NextNodeList));s[e].checked?s[e].CanSelectCopyUsers[t].checked=!s[e].CanSelectCopyUsers[t].checked:this.AlertShowEvent("请先选择"+this.NextNodeList[e].NodeName+"节点"),this.NextNodeList=[].concat(n()(s))},selectUsersEvent:function(e,t){var s=[].concat(n()(this.NextNodeList)),c=s[e].checked,o=s[e].AllowMulitUser,i=s[e].SelectUserMode;if(c){if("SelectAllAndDisabled"===i)return this.AlertShowEvent("你没有修改权限"),!1;o?s[e].CanSelectUsers[t].checked=!s[e].CanSelectUsers[t].checked:s[e].CanSelectUsers.forEach(function(e,s){e.checked=s===t&&!e.checked})}else this.AlertShowEvent("请先选择"+s[e].NodeName+"节点");this.NextNodeList=[].concat(n()(s))},nodeListTitleSelect:function(e){var t=this.NextNodeList,s=t[e].checked,c=t[e].SelectNodeMode,n=t[e].SelectUserMode;if("SelectedAndDisabled"===c)return this.AlertShowEvent("禁止取消"),!1;t[e].checked=!s,t[e].checked?(t[e].LineType===C.c.ExcludeLine&&t.forEach(function(s,c){c!==e&&(t[c].checked=!1,t[c].CanSelectUsers.forEach(function(e){e.checked=!1}),t[c].CanSelectCopyUsers.forEach(function(e){e.checked=!1}))}),t[e].AllowMulitUser&&t[e].CanSelectUsers.forEach(function(e,t){e.checked="SelectAllAndDisabled"===n}),1===t[e].CanSelectUsers.length&&(t[e].CanSelectUsers[0].checked=!0),t[e].CanSelectCopyUsers.forEach(function(e,t){e.checked=!1})):(t[e].CanSelectUsers.forEach(function(e,t){e.checked=!1}),t[e].CanSelectCopyUsers.forEach(function(e,t){e.checked=!1})),this.NextNodeList=t.concat()},getSelectedNode:function(){var e=[],t="";return this.NextNodeList.forEach(function(s,c){var n={};n.NodeCode=s.NodeCode,n.SendUserList=[],n.CopyUserList=[],s.checked&&(s.CanSelectUsers.forEach(function(e,t){if(e.checked&&!0===e.checked){var s=a()({},e);delete s.checked,n.SendUserList.push(s)}}),s.CanSelectCopyUsers.forEach(function(e,t){if(e.checked&&!0===e.checked){var s=a()({},e);delete s.checked,n.CopyUserList.push(s)}}),0===n.SendUserList.length&&!1===s.IsMustNotUsers&&(t=s.NodeName+"节点没有选择送审人员"),s.checked&&e.push(n))}),0===e.length&&(t="节点数据为空,请选择一个节点"),{data:e,error:t}},formatNextNodeList:function(e){var t=this,s=[];return e.forEach(function(c,n){t.IsMindMustInput=c.IsMindMustInput,"SelectedNode"===c.SelectNodeMode||"SelectedAndDisabled"===c.SelectNodeMode?c.checked=!0:c.checked=!1,1===e.length&&(e[0].checked=!0),"DeselectAll"===c.SelectUserMode?c.CanSelectUsers.forEach(function(e,t){e.checked=!1}):"SelectAll"===c.SelectUserMode||"SelectAllAndDisabled"===c.SelectUserMode?c.CanSelectUsers.forEach(function(e,t){e.checked=!0}):c.CanSelectUsers.forEach(function(e,t){c.DefaultUserID===e.UserID?e.checked=!0:e.checked=!1}),1===c.CanSelectUsers.length&&(c.CanSelectUsers[0].checked=!0),c.CanSelectCopyUsers.length>1?c.CanSelectCopyUsers[0].checked=!0:c.CanSelectCopyUsers.forEach(function(e,t){e.checked=!1}),c.IsCancel||s.push(c)}),s},selectItem:function(e){var t=this;this.$refs.personSelectList.forEach(function(s,c){e===c?t.$refs.personSelectList[c].setChecked():t.$refs.personSelectList[c].setCheckedDefault()})},cancel:function(){this.$router.back()}},Object(h.b)(["GetInformCount","FlowActionData","AlertShowEvent","ToastShowEvent"])),destroyed:function(){this.timer&&clearTimeout(this.timer)},components:{PersonSelectList:f.a,XTextarea:p.a,Group:v.a,CheckIcon:k.default,PositionUserList:u.a}},m={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("transition",{attrs:{name:"slide"}},[s("div",{staticClass:"work-node-select"},[s("div",{staticClass:"after-select-content"},[s("div",{staticClass:"people-select"},[s("header",{staticClass:"header"},[s("div",{staticClass:"title"},[e._v("人员选择")]),e._v(" "),s("div",{staticClass:"toggle-bar"},[s("cube-switch",{staticClass:"toggle-switch",model:{value:e.showPeopleContent,callback:function(t){e.showPeopleContent=t},expression:"showPeopleContent"}})],1)]),e._v(" "),s("section",{staticClass:"people-content",style:{height:e.PeopleContentHeight}},e._l(e.NextNodeList,function(t,c){return s("div",{key:c,staticClass:"next-node-list"},[s("h1",{staticClass:"node-list-title",on:{click:function(t){e.nodeListTitleSelect(c)}}},[s("div",{staticClass:"name"},[e._v(e._s(t.NodeName))]),e._v(" "),s("div",{staticClass:"check-box"},[s("check-icon",{attrs:{checked:t.checked}})],1)]),e._v(" "),t.CanSelectUsers.length>0?s("div",{staticClass:"next-node-list-unit can-select-users"},[s("h1",{staticClass:"title"},[e._v("可送审人员")]),e._v(" "),s("ul",{staticClass:"people-lists"},e._l(t.CanSelectUsers,function(t,n){return s("li",{key:t.UserID,staticClass:"people-list",on:{click:function(t){e.selectUsersEvent(c,n)}}},[s("div",{staticClass:"user-name"},[e._v(e._s(t.UserName))]),e._v(" "),s("div",{staticClass:"check-box"},[s("check-icon",{attrs:{checked:t.checked}})],1)])}))]):e._e(),e._v(" "),t.CanSelectCopyUsers.length>0?s("div",{staticClass:"next-node-list-unit can-select-copy-users"},[s("h1",{staticClass:"title"},[e._v("可抄送人员")]),e._v(" "),s("ul",{staticClass:"people-lists"},e._l(t.CanSelectCopyUsers,function(t,n){return s("li",{key:t.UserID,staticClass:"people-list",on:{click:function(t){e.selectCopyUsersEvent(c,n)}}},[s("div",{staticClass:"user-name"},[e._v(e._s(t.UserName))]),e._v(" "),s("div",{staticClass:"check-box"},[s("check-icon",{attrs:{checked:t.checked}})],1)])}))]):e._e()])})),e._v(" "),s("section",{staticClass:"approve-text-content"},[s("h1",{staticClass:"text-title"},[e._v("审批意见")]),e._v(" "),s("group",{staticClass:"textarea-content"},[s("x-textarea",{attrs:{name:"description",max:300,placeholder:"输入审批意见"},model:{value:e.MindInfo,callback:function(t){e.MindInfo="string"==typeof t?t.trim():t},expression:"MindInfo"}})],1)],1)]),e._v(" "),s("div",{staticClass:"person-select-bar"},[s("div",{staticClass:"select-bar",on:{click:e.cancel}},[s("span",[e._v("返回")])]),e._v(" "),s("div",{staticClass:"select-bar",on:{click:e.submitFlow}},[s("span",[e._v("提交")])])])]),e._v(" "),s("position-user-list",{ref:"positionUserList",attrs:{subParams:e.positionUserParams}})],1)])},staticRenderFns:[]};var U=s("VU/8")(S,m,!1,function(e){s("D2CY")},null,null);t.default=U.exports}});
//# sourceMappingURL=3.c96b3d294b6dd4a6847f.js.map