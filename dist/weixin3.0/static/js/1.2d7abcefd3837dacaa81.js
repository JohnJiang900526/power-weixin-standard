webpackJsonp([1,22,24,26],{"2X+S":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s={props:{placeholder:{type:String,default:""},value:null,target:{type:String,default:""}},data:function(){return{query:""}},methods:{focusSearch:function(){this.$emit("focus")},blurSearch:function(){this.$emit("blur")},clearQuery:function(){this.query=""},setQuery:function(t){this.query=t},blur:function(){this.$refs.query.blur()}},watch:{query:function(t){var e=this;this.timer&&clearTimeout(this.timer),this.timer=setTimeout(function(){""!==e.target?e.$emit("change",t,e.target):e.$emit("change",t)},400)}}},o={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"search-box"},[i("div",{staticClass:"search-box-inner"},[t._m(0),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.query,expression:"query"}],ref:"query",staticClass:"search-input",attrs:{type:"text",placeholder:t.placeholder},domProps:{value:t.query},on:{focus:t.focusSearch,blur:t.blurSearch,input:function(e){e.target.composing||(t.query=e.target.value)}}}),t._v(" "),i("span",{staticClass:"clear-icon-wrap"},[i("span",{directives:[{name:"show",rawName:"v-show",value:t.query,expression:"query"}],staticClass:"clear-icon",on:{click:t.clearQuery}},[i("svg",{staticClass:"vux-x-icon vux-x-icon-ios-close-empty",attrs:{type:"ios-close-empty",size:"25",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",width:"25",height:"25",viewBox:"0 0 512 512"}},[i("path",{staticClass:"st0",attrs:{d:"M340.2 160l-84.4 84.3-84-83.9-11.8 11.8 84 83.8-84 83.9 11.8 11.7 84-83.8 84.4 84.2 11.8-11.7-84.4-84.3 84.4-84.2z"}})])])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"search-icon"},[e("span",{staticClass:"fa fa-search"})])}]};var a=i("VU/8")(s,o,!1,function(t){i("LsfK")},null,null);e.default=a.exports},"8P+t":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("mvHQ"),o=i.n(s),a=i("Gu7T"),n=i.n(a),r=i("woOf"),c=i.n(r),l=i("Dd8w"),h=i.n(l),f=i("NYxO"),u=i("2X+S"),d=i("haV1"),v=i("t4bk"),p=i("baZb"),m=i("Mlu6"),_={mixins:[i("F4+m").c],name:"window",data:function(){return{KeyWord:"",idfield:"Id",ExtJson:{},windowConfig:{},comboboxdata:{},minHeight:100,listsHeight:0,MenuId:"",pageSize:0,pageIndex:0,showCheckBox:!1,formList:[],selectItems:[],actionShow:!0,pullDownRefreshThreshold:60,searchQuery:"",searchField:"",placeholder:"",config:{},tableType:"",option:{}}},computed:{options:function(){return{pullDownRefresh:{threshold:parseInt(this.pullDownRefreshThreshold),txt:"刷新成功"},pullUpLoad:{threshold:parseInt(this.pullDownRefreshThreshold),txt:"加载成功"},scrollbar:!0}}},created:function(){this.MenuId=this.$router.history.current.params.menuId},mounted:function(){var t=this;this.computedHeight(),this.$nextTick(function(){t.timer&&clearTimeout(t.timer),t.timer=setTimeout(function(){t.windowLoad()},500)})},methods:h()({getWindowConfigForUI:function(t){console.log(t);var e={title:t.title,left:t.left,center:t.center,right:t.right};if(t.tag){t.tag.show=!0;var i=c()({},t.tag);e.tag=c()({},i)}this.placeholder=t.search.title,this.searchField=t.search.field,this.pageSize=t.size,this.idfield=t.idfield||"Id",this.option=c()(this.option,e),this.tableType=Object(m.q)(t.tableListType),document.title=t.winTitle||"窗体"},windowLoad:function(t){var e=this;this.$router.history.current.params.formstate||this._MenuWidget(function(){e._FormInit(function(){e._GridPageLoad(e.config,function(i){e.formList=[].concat(n()(i)),t&&t()})})})},_MenuWidget:function(t){var e=this;this.MenuWidgetData(this.MenuId).then(function(i){var s=i.data.value;e.ExtJson=JSON.parse(s[0].ExtJson),e.config=e.ExtJson.config,e.KeyWord=e.config.joindata.KeyWord,e.openformid=e.config.openformid,e.windowConfig=JSON.parse(s[0].WeixinExtJson),e.getWindowConfigForUI(e.windowConfig),t&&t()}).catch(function(t){e.errLogin(t)})},_FormInit:function(t){var e=this,i={FormId:this.config.openformid,KeyValue:"",FormState:"edit"};this.FormInitData(i).then(function(i){e.comboboxdata=c()({},JSON.parse(i.data.comboboxdata)),t&&t()}).catch(function(t){e.errLogin(t)})},_GridPageLoad:function(t,e,i){var s=this;i&&(this.pageIndex=0);var o=Object(p.a)().EpsProjId,a={KeyWord:t.joindata.KeyWord,KeyWordType:t.joindata.KeyWordType||"BO",index:this.pageIndex,size:this.pageSize,swhere:"1=1 and EpsProjId='"+o+"'",select:"",sort:t.joindata.sort||" RegDate DESC ",extparams:""};this.GridPageLoadData(a).then(function(t){var i=t.data.value,s=[];""!==i&&(s=JSON.parse(i)),e&&e(s)}).catch(function(t){s.errLogin(t)})},_removeFormList:function(t){var e=this,i={JsonData:"",FormId:""},s={},a=this.selectItems.concat();a.map(function(t){return t._state="removed",t}),s[this.KeyWord]={KeyWordType:"BO",data:a},i.JsonData=o()(s),i.FormId=this.config.openformid,this.FormSaveData(i).then(function(i){t&&t(),e._deleteSuccess(200)}).catch(function(t){e.errLogin(t),e._deleteSuccess(400)})},searchChange:function(t){this.searchQuery=t,this.doSearchEvent()},doSearchEvent:function(){var t=this;this._GridPageLoad(this.config,function(e){var i=Object(m.y)(t.searchField,t.searchQuery,e);t.formList=[].concat(n()(i))},this.searchQuery)},_selectItem:function(t){this.selectItems.push(t)},_unSelectItem:function(t){Object(m.w)(this.selectItems,t)},_add:function(){this.$router.push("/weixinform/"+this.openformid+"/add/0000")},_backPre:function(){this.$refs.formListUnit.forEach(function(t){t.backDefault()}),this.showCheckBox=!1,this.selectItems=[]},_deleteSuccess:function(t){this.$refs.footerBar.deleteSuccess(t)},_delete:function(){var t=this;this._removeFormList(function(){t.showCheckBox=!1,t.selectItems=[],t._GridPageLoad(t.config,function(e){t.formList=e})})},_preDelete:function(){this.showCheckBox=!0},onPullingDown:function(){var t=this;this.pageIndex=0,this.windowLoad(function(){t.$refs.formList.forceUpdate()})},onPullingUp:function(){var t=this;this.pageIndex+=1,this._GridPageLoad(this.config,function(e){var i=Object(m.y)(t.searchField,t.searchQuery,e);t.formList=[].concat(n()(t.formList),n()(i))},this.searchQuery),this.timer=setTimeout(function(){t.$refs.formList.forceUpdate()},1500)},openForm:function(t){if(this.showCheckBox)return!1;var e=t[this.windowConfig.idfield];this.$router.push("/weixinform/"+this.openformid+"/edit/"+e)},computedHeight:function(){var t=this;this.$nextTick(function(){t._computedHeight(),t._resize()})},_computedHeight:function(){this.listsHeight=this.$refs.formContent.offsetHeight-this.$refs.searchWrap.offsetHeight},_resize:function(){var t=this;window.addEventListener("resize",function(){t._computedHeight()})},_back:function(){this.$router.back()}},Object(f.b)(["MenuWidgetData","FormInitData","GridPageLoadData","FormSaveData","AlertShowEvent"])),destroyed:function(){this.timer&&clearTimeout(this.timer)},components:{SearchBox:u.default,FormList:d.default,FooterBar:v.default}},g={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("transition",{attrs:{name:"slide"}},[i("div",{staticClass:"win-form"},[i("div",{ref:"formContent",staticClass:"form-content"},[i("header",{staticClass:"form-header"},[i("div",{ref:"searchWrap",staticClass:"search-wrap"},[i("search-box",{attrs:{placeholder:t.placeholder},on:{change:t.searchChange},model:{value:t.searchQuery,callback:function(e){t.searchQuery=e},expression:"searchQuery"}})],1)]),t._v(" "),i("div",{ref:"formListsContent",staticClass:"form-lists-content",style:{height:t.listsHeight+"px",minHeight:t.minHeight+"px"}},[i("div",{staticClass:"form-lists-wrap"},[i("cube-scroll",{ref:"formList",attrs:{data:t.formList,options:t.options},on:{"pulling-down":t.onPullingDown,"pulling-up":t.onPullingUp}},[t.formList.length>0?i("ul",{staticClass:"form-lists"},["table"===t.tableType?i("li",{staticClass:"title-lists"},[t.option.title?i("div",{staticClass:"title-list title"},[t._v("\n                  "+t._s(t.option.title.title)+"\n                ")]):t._e(),t._v(" "),t.option.left?i("div",{staticClass:"title-list left"},[t._v("\n                  "+t._s(t.option.left.title)+"\n                ")]):t._e(),t._v(" "),t.option.center?i("div",{staticClass:"title-list center"},[t._v("\n                  "+t._s(t.option.center.title)+"\n                ")]):t._e(),t._v(" "),t.option.right?i("div",{staticClass:"title-list right"},[t._v("\n                  "+t._s(t.option.right.title)+"\n                ")]):t._e()]):t._e(),t._v(" "),t._l(t.formList,function(e){return i("li",{key:e[t.idfield],staticClass:"form-list-unit",on:{click:function(i){i.preventDefault(),t.openForm(e)}}},[i("form-list",{ref:"formListUnit",refInFor:!0,attrs:{item:e,KeyWord:t.KeyWord,showCheckBox:t.showCheckBox,option:t.option,tableType:t.tableType,comboboxdata:t.comboboxdata},on:{selectItem:t._selectItem,unSelectItem:t._unSelectItem}})],1)})],2):t._e()])],1)])]),t._v(" "),i("nav",{ref:"nav",staticClass:"nav-bar-wrap"},[i("footer-bar",{ref:"footerBar",on:{Add:t._add,preDelete:t._preDelete,Delete:t._delete,backPre:t._backPre}})],1)])])},staticRenderFns:[]};var w=i("VU/8")(_,g,!1,function(t){i("YsKA")},null,null);e.default=w.exports},D4iw:function(t,e){},LsfK:function(t,e){},YsKA:function(t,e){},haV1:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("woOf"),o=i.n(s),a=i("EmH9"),n=i("Mlu6"),r={props:{item:{type:Object,default:function(){return{}}},option:{type:Object,default:function(){return{}}},tableType:{type:String,default:"default"},showCheckBox:{type:Boolean,default:!1},comboboxdata:{type:Object,default:function(){return{}}},KeyWord:{type:String,default:""}},data:function(){return{formatOption:{title:{title:""},left:{title:""},center:{title:""},right:{title:""},tag:{title:"",show:!1}},checked:!1,title:"",left:"",center:"",right:"",tag:{value:"",color:"power-project-menu-bg7"}}},methods:{selectItem:function(t){if(!this.showCheckBox)return!1;this.checked=!this.checked,this.checked?this.$emit("selectItem",t):this.$emit("unSelectItem",t)},backDefault:function(){this.checked=!1},setData:function(t){if(this.formatOption=o()(this.formatOption,this.option),this.option.title&&this.option.title.field){var e=this.option.title.field,i=this.option.title.format;this.title=Object(n.e)(t[e],i,this.comboboxdata,this.KeyWord,e,"title")}if(this.option.left&&this.option.left.field){var s=this.option.left.field,a=this.option.left.format;this.left=Object(n.e)(t[s],a,this.comboboxdata,this.KeyWord,s,"left")}if(this.option.center&&this.option.center.field){var r=this.option.center.field,c=this.option.center.format;this.center=Object(n.e)(t[r],c,this.comboboxdata,this.KeyWord,r,"center")}if(this.option.right&&this.option.right.field){var l=this.option.right.field,h=this.option.right.format;this.right=Object(n.e)(t[l],h,this.comboboxdata,this.KeyWord,l,"right")}if(this.option.tag&&this.option.tag.field){var f=this.option.tag.field,u=this.option.tag.format;this.tag=o()(this.tag,Object(n.e)(t[f],u,this.comboboxdata,this.KeyWord,f,"tag"))}}},watch:{item:{handler:function(t,e){this.setData(t)},immediate:!0}},components:{CheckIcon:a.a}},c={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"form-list"},["default"===t.tableType?i("div",{staticClass:"list-unit-wrap default",attrs:{for:"1.默认风格"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.showCheckBox,expression:"showCheckBox"}],staticClass:"list-checkbox"},[i("div",{staticClass:"check-icon-wrap"},[i("check-icon",{attrs:{value:t.checked},on:{"update:value":function(e){t.checked=e}}})],1)]),t._v(" "),i("div",{staticClass:"list-unit-inner",on:{click:function(e){e.preventDefault(),t.selectItem(t.item)}}},[t.option.title?i("div",{staticClass:"list-title"},[t._v("\n        "+t._s(t.option.title?t.option.title.title+":":"")+" "+t._s(t.title)+"\n      ")]):t._e(),t._v(" "),i("div",{staticClass:"list-content"},[t.option.left?i("div",{staticClass:"list-item left"},[t._v("\n          "+t._s(t.option.left?t.option.left.title+":":"")+t._s(t.left)+"\n        ")]):t._e(),t._v(" "),t.option.center?i("div",{staticClass:"list-item center"},[t._v("\n          "+t._s(t.option.center?t.option.center.title+":":"")+" "+t._s(t.center)+"\n        ")]):t._e(),t._v(" "),t.option.right?i("div",{staticClass:"list-item right"},[t._v("\n          "+t._s(t.option.right?t.option.right.title+":":"")+" "+t._s(t.right)+"\n        ")]):t._e()]),t._v(" "),t.formatOption.tag.show?i("div",{class:"list-tag  "+this.tag.color},[t._v("\n        "+t._s(t.tag.value)+"\n      ")]):t._e()])]):t._e(),t._v(" "),"contractStyle"===t.tableType?i("div",{staticClass:"list-unit-wrap contract-style",attrs:{for:"2.简约风格"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.showCheckBox,expression:"showCheckBox"}],staticClass:"list-checkbox"},[i("div",{staticClass:"check-icon-wrap"},[i("check-icon",{attrs:{value:t.checked},on:{"update:value":function(e){t.checked=e}}})],1)]),t._v(" "),i("div",{staticClass:"list-unit-inner",on:{click:function(e){e.preventDefault(),t.selectItem(t.item)}}},[t.formatOption.title?i("div",{staticClass:"list-title"},[t._v("\n        "+t._s(t.title)+"\n      ")]):t._e(),t._v(" "),i("div",{staticClass:"list-content"},[t.formatOption.left?i("div",{staticClass:"list-item left"},[t._v(t._s(t.left))]):t._e(),t._v(" "),t.formatOption.center?i("div",{staticClass:"list-item center"},[t._v(t._s(t.center))]):t._e(),t._v(" "),t.formatOption.right?i("div",{staticClass:"list-item right"},[t._v(t._s(t.right))]):t._e()]),t._v(" "),t.formatOption.tag.show?i("div",{class:"list-tag  "+this.tag.color},[t._v("\n        "+t._s(t.tag.value)+"\n      ")]):t._e()])]):t._e(),t._v(" "),"table"===t.tableType?i("div",{staticClass:"list-unit-wrap table",attrs:{for:"3.table风格"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.showCheckBox,expression:"showCheckBox"}],staticClass:"list-checkbox"},[i("div",{staticClass:"check-icon-wrap"},[i("check-icon",{attrs:{value:t.checked},on:{"update:value":function(e){t.checked=e}}})],1)]),t._v(" "),i("div",{staticClass:"list-unit-inner",on:{click:function(e){e.preventDefault(),t.selectItem(t.item)}}},[i("div",{staticClass:"list-content table"},[t.formatOption.title?i("div",{staticClass:"list-item left"},[t._v(t._s(t.title))]):t._e(),t._v(" "),t.formatOption.left?i("div",{staticClass:"list-item left"},[t._v(t._s(t.left))]):t._e(),t._v(" "),t.formatOption.center?i("div",{staticClass:"list-item center"},[t._v(t._s(t.center))]):t._e(),t._v(" "),t.formatOption.right?i("div",{staticClass:"list-item right"},[t._v(t._s(t.right))]):t._e()]),t._v(" "),t.formatOption.tag.show?i("div",{class:"list-tag  "+this.tag.color},[t._v("\n        "+t._s(t.tag.value)+"\n      ")]):t._e()])]):t._e(),t._v(" "),"beauty"===t.tableType?i("div",{staticClass:"list-unit-wrap beauty",attrs:{for:"4.靓丽风格"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.showCheckBox,expression:"showCheckBox"}],staticClass:"list-checkbox"},[i("div",{staticClass:"check-icon-wrap"},[i("check-icon",{attrs:{value:t.checked},on:{"update:value":function(e){t.checked=e}}})],1)]),t._v(" "),i("div",{staticClass:"list-unit-inner",on:{click:function(e){e.preventDefault(),t.selectItem(t.item)}}},[t.formatOption.title?i("div",{staticClass:"list-title beauty"},[t._v("\n        "+t._s(t.formatOption.title?t.option.title.title+":":"")+" "),i("span",{staticClass:"text"},[t._v(t._s(t.title))])]):t._e(),t._v(" "),i("div",{staticClass:"list-content"},[t.formatOption.left?i("div",{staticClass:"list-item left beauty"},[t._v("\n          "+t._s(t.formatOption.left?t.formatOption.left.title+":":"")),i("span",[t._v(t._s(t.left))])]):t._e(),t._v(" "),t.formatOption.center?i("div",{staticClass:"list-item center beauty"},[t._v("\n          "+t._s(t.formatOption.center?t.formatOption.center.title+":":"")+" "),i("span",[t._v(t._s(t.center))])]):t._e(),t._v(" "),t.formatOption.right?i("div",{staticClass:"list-item right beauty"},[t._v("\n          "+t._s(t.formatOption.right?t.formatOption.right.title+":":"")+" "),i("span",[t._v(t._s(t.right))])]):t._e()]),t._v(" "),t.formatOption.tag.show?i("div",{class:"list-tag  "+this.tag.color},[t._v("\n        "+t._s(t.tag.value)+"\n      ")]):t._e()])]):t._e(),t._v(" "),"luxury"===t.tableType?i("div",{staticClass:"list-unit-wrap luxury",attrs:{for:"5.豪华风格"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.showCheckBox,expression:"showCheckBox"}],staticClass:"list-checkbox"},[i("div",{staticClass:"check-icon-wrap"},[i("check-icon",{attrs:{value:t.checked},on:{"update:value":function(e){t.checked=e}}})],1)]),t._v(" "),i("div",{staticClass:"list-unit-inner",on:{click:function(e){e.preventDefault(),t.selectItem(t.item)}}},[t.formatOption.title?i("div",{staticClass:"list-title luxury"},[t._v("\n        "+t._s(t.formatOption.title?t.formatOption.title.title+":":"")+" "+t._s(t.title)+"\n      ")]):t._e(),t._v(" "),i("div",{staticClass:"list-content"},[t.formatOption.left?i("div",{staticClass:"list-item left luxury"},[t._v("\n          "+t._s(t.formatOption.left?t.formatOption.left.title+":":"")+t._s(t.left)+"\n        ")]):t._e(),t._v(" "),t.formatOption.center?i("div",{staticClass:"list-item center luxury"},[t._v("\n          "+t._s(t.formatOption.center?t.formatOption.center.title+":":"")+" "+t._s(t.center)+"\n        ")]):t._e(),t._v(" "),t.formatOption.right?i("div",{staticClass:"list-item right luxury"},[t._v("\n          "+t._s(t.formatOption.right?t.formatOption.right.title+":":"")+" "+t._s(t.right)+"\n        ")]):t._e()]),t._v(" "),t.formatOption.tag.show?i("div",{class:"list-tag  "+this.tag.color},[t._v("\n        "+t._s(t.tag.value)+"\n      ")]):t._e()])]):t._e(),t._v(" "),"luxuryBeauty"===t.tableType?i("div",{staticClass:"list-unit-wrap luxuryBeauty",attrs:{for:"6.豪华简约"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.showCheckBox,expression:"showCheckBox"}],staticClass:"list-checkbox"},[i("div",{staticClass:"check-icon-wrap"},[i("check-icon",{attrs:{value:t.checked},on:{"update:value":function(e){t.checked=e}}})],1)]),t._v(" "),i("div",{staticClass:"list-unit-inner",on:{click:function(e){e.preventDefault(),t.selectItem(t.item)}}},[t.formatOption.title?i("div",{staticClass:"list-title luxuryBeauty"},[t._v("\n         "+t._s(t.title)+"\n      ")]):t._e(),t._v(" "),i("div",{staticClass:"list-content"},[t.formatOption.left?i("div",{staticClass:"list-item left luxuryBeauty"},[t._v(t._s(t.left))]):t._e(),t._v(" "),t.formatOption.center?i("div",{staticClass:"list-item center luxuryBeauty"},[t._v(t._s(t.center))]):t._e(),t._v(" "),t.formatOption.right?i("div",{staticClass:"list-item right luxuryBeauty"},[t._v(t._s(t.right))]):t._e()]),t._v(" "),t.formatOption.tag.show?i("div",{class:"list-tag  "+this.tag.color},[t._v("\n        "+t._s(t.tag.value)+"\n      ")]):t._e()])]):t._e()])},staticRenderFns:[]};var l=i("VU/8")(r,c,!1,function(t){i("D4iw")},"data-v-2f799f29",null);e.default=l.exports},mOAO:function(t,e){},t4bk:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"nav-bar nav-footer"},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.actionShow,expression:"actionShow"}],ref:"preAction",staticClass:"footer-action"},[i("div",{staticClass:"action-item",on:{click:t.Add}},[i("span",[t._v("新增")])]),t._v(" "),i("div",{staticClass:"action-item",on:{click:t.preDelete}},[i("span",[t._v("删除")])])]),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:!t.actionShow,expression:"!actionShow"}],ref:"doAction",staticClass:"footer-action"},[i("div",{staticClass:"action-item font-color-red",on:{click:t.Delete}},[i("span",[t._v("确定删除")])]),t._v(" "),i("div",{staticClass:"action-item font-color-sky",on:{click:t.backPre}},[i("span",[t._v("返回")])])])])},staticRenderFns:[]};var o=i("VU/8")({data:function(){return{actionShow:!0}},methods:{Add:function(){this.$emit("Add")},Delete:function(){this.$emit("Delete")},preDelete:function(){this.actionShow=!1,this.$emit("preDelete")},backPre:function(){this.actionShow=!0,this.$emit("backPre")},deleteSuccess:function(t){this.actionShow=200===t}}},s,!1,function(t){i("mOAO")},"data-v-43365c6a",null);e.default=o.exports}});
//# sourceMappingURL=1.2d7abcefd3837dacaa81.js.map