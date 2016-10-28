// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.1/esri/copyright.txt for details.
//>>built
define(["dojo/_base/lang","../core/JSONSupport","../core/lang","../core/screenUtils"],function(h,k,l,e){var c={style:"normal",variant:"normal",weight:"normal",size:9,family:"serif",decoration:"none"},a=k.createSubclass({declaredClass:"esri.symbols.Font",properties:{decoration:{},family:{},size:{cast:e.toPt},style:{},variant:{},weight:{}},getDefaults:function(){return c},normalizeCtorArgs:function(d,a,c,f,g){if(d&&"string"!==typeof d)return d;var b={};null!=d&&(b.size=e.toPt(d));null!=a&&(b.style=
a);null!=c&&(b.variant=c);null!=f&&(b.weight=f);g&&(b.family=g);return b},toJSON:function(){return l.fixJson({size:this.size,style:this.style,variant:this.variant,decoration:this.decoration,weight:this.weight,family:this.family})},clone:function(){return new a({decoration:this.decoration,family:this.family,size:this.size,style:this.style,variant:this.variant,weight:this.weight})}});a.defaultProps=c;h.mixin(a,{STYLE_NORMAL:"normal",STYLE_ITALIC:"italic",STYLE_OBLIQUE:"oblique",VARIANT_NORMAL:"normal",
VARIANT_SMALLCAPS:"small-caps",WEIGHT_NORMAL:"normal",WEIGHT_BOLD:"bold",WEIGHT_BOLDER:"bolder",WEIGHT_LIGHTER:"lighter"});return a});