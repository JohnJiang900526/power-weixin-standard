webpackJsonp([26],{"A/bG":function(t,e){},lLnW:function(t,e,l){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=l("GQaK"),r={props:{probeType:{type:Number,default:1},click:{type:Boolean,default:!0},listenScroll:{type:Boolean,default:!1},data:{type:Array,default:null},beforeScroll:{type:Boolean,default:!1},refreshDelay:{type:Number,default:20},direction:{type:String,default:"vertical"},unitWidth:{type:Number,default:80}},data:function(){return{childrenNum:2}},mounted:function(){var t=this;this.timer=setTimeout(function(){t._setSliderWidth(),t._initScroll()},200)},methods:{_setSliderWidth:function(){this.childrenNum=this.data.length;var t=this.unitWidth*this.childrenNum;this.$refs.slideGroup.style.width=t+"px"},_initScroll:function(){var t=this;this.$refs.wrapper&&(this.scroll=new i.a(this.$refs.wrapper,{probeType:this.probeType,click:this.click,scrollX:"horizontal"===this.direction,scrollY:"vertical"===this.direction,momentum:!0}),this.beforeScroll&&this.scroll.on("beforeScrollStart",function(){t.$emit("beforeScroll")}),this.listenScroll&&this.scroll.on("scroll",function(e){t.$emit("scroll",e)}))},disable:function(){this.scroll&&this.scroll.disable()},enable:function(){this.scroll&&this.scroll.enable()},refresh:function(){this.scroll&&this.scroll.refresh()},scrollTo:function(){this.scroll&&this.scroll.scrollTo.apply(this.scroll,arguments)},scrollToElement:function(){this.scroll&&this.scroll.scrollToElement.apply(this.scroll,arguments)}},beforeDestroy:function(){this.timer&&clearTimeout(this.timer)},watch:{data:function(){var t=this;setTimeout(function(){t.refresh()},this.refreshDelay)}}},s={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{ref:"wrapper",staticClass:"slide"},[e("div",{ref:"slideGroup",staticClass:"slide-group"},[this._t("default")],2)])},staticRenderFns:[]};var o=l("VU/8")(r,s,!1,function(t){l("A/bG")},"data-v-2566502a",null);e.default=o.exports}});
//# sourceMappingURL=26.9e062f881f91f40c65c7.js.map