webpackJsonp([29],{E9tC:function(t,e){},VjlF:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s("mvHQ"),a=s.n(n),i=s("woOf"),r=s.n(i),o=s("Dd8w"),l=s.n(o),c=s("NYxO"),u=s("tiSE"),d=s("W/7t"),v={name:"workflow",data:function(){return{query:{},ResultInfo:{},HistoryMind:[]}},mounted:function(){this.loadMonitor()},methods:l()({loadMonitor:function(){var t=this;this.getQuery();var e=this.query,s=r()({},{SubOperate:"ReadConfig",FlowOperate:e.flowOperate,Current:{WorkInfoID:e.WorkInfoID||""}});this.FlowActionData(a()(s)).then(function(e){var s=e.data.value;s.ResultInfo&&(t.ResultInfo=s.ResultInfo,t.HistoryMind=t.ResultInfo.HistoryMind)}).catch(function(e){t.AlertShowEvent(e.message)})},formatFlowOperate:function(t){switch(t.FlowOperate){case d.d.Active:return"送审";case d.d.Send:return"同意";case d.d.GetBack:return"回收";case d.d.Return:return"驳回";case d.d.Stop:return"终止";case d.d.CheckOut:return"等候签收";case d.d.Delegate:return t.IsReturnDelegateRoot?"委派返回":"委派";default:return""}},formatInboxStatus:function(t){switch(t.InboxStatus){case d.b.WaitingSign:return"(等候签收)";case d.b.Hidden:return"(隐藏等候中)";case d.b.Normal:return"(正在处理)";case d.b.WorkEnd:return"(已提交)";default:return""}},getQuery:function(){var t=this.$router.history.current.query;t&&(this.query=r()({},t))}},Object(c.b)(["FlowActionData","AlertShowEvent"])),components:{LineBreak:u.default}},f={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("transition",{attrs:{name:"slide"}},[s("div",{staticClass:"work-flow-monitor"},[s("div",{staticClass:"monitor-header-content"},[s("div",{staticClass:"header-item"},[s("span",{staticClass:"name"},[t._v("流程名称:")]),t._v(" "),s("span",{staticClass:"text"},[t._v(t._s(t.ResultInfo.WorkFlowName))])]),t._v(" "),s("div",{staticClass:"header-item"},[s("span",{staticClass:"name"},[t._v("流转状态:")]),t._v(" "),s("span",{staticClass:"text"},[t._v(t._s(t.ResultInfo.RecordStatusName))])])]),t._v(" "),s("line-break"),t._v(" "),s("div",{staticClass:"monitor-history-content"},[s("h1",{staticClass:"history-title"},[t._v("流转历史:")]),t._v(" "),t.HistoryMind.length>0?s("ul",{staticClass:"history-lists"},t._l(t.HistoryMind,function(e,n){return e.IsHidden?t._e():s("li",{key:n,staticClass:"history-list"},[s("div",{staticClass:"list-inner"},[s("div",{staticClass:"history-unit-title"},[s("div",{staticClass:"tag"}),t._v(" "),s("div",{staticClass:"date-time"},[t._v("\n                "+t._s(e.MindDate)+"\n              ")]),t._v(" "),s("div",{staticClass:"flow-operate"},[t._v("\n                "+t._s(t.formatFlowOperate(e))+"\n              ")])]),t._v(" "),s("div",{staticClass:"history-unit-content"},[s("div",{staticClass:"unit-item unit-role"},[s("div",{staticClass:"name"},[t._v(t._s(e.DeptPositionName)+":")]),t._v(" "),s("div",{staticClass:"text"},[t._v(t._s(e.UserName))])]),t._v(" "),s("div",{staticClass:"unit-item unit-content"},[s("div",{staticClass:"name"},[t._v("意 见:")]),t._v(" "),s("div",{staticClass:"text"},[t._v(t._s(t.formatInboxStatus(e))+" "+t._s(e.BeforeContent))])])])])])})):t._e()])],1)])},staticRenderFns:[]};var _=s("VU/8")(v,f,!1,function(t){s("E9tC")},null,null);e.default=_.exports}});
//# sourceMappingURL=29.34c9fdb9a2aeb71b1c07.js.map