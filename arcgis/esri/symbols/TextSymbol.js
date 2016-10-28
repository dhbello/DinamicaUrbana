// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.1/esri/copyright.txt for details.
//>>built
define("../core/declare dojo/_base/lang ../core/lang ../core/screenUtils ../Color ./Symbol ./Font".split(" "),function(k,g,b,e,f,l,m){var h={x:0,y:0,text:"",rotated:!1,kerning:!0,color:[0,0,0,1],font:{},angle:0,xoffset:0,yoffset:0,horizontalAlignment:"center"},c=k(l,{declaredClass:"esri.symbols.TextSymbol",properties:{backgroundColor:{type:f,json:{writable:!0}},borderLineColor:{type:f,json:{writable:!0}},borderLineSize:{type:Number,json:{writable:!0}},color:{},font:{type:m,json:{writable:!0}},horizontalAlignment:{value:"center",
json:{writable:!0}},kerning:{value:!0,json:{writable:!0}},haloColor:{type:f,json:{writable:!0}},haloSize:{type:Number,cast:e.toPt,json:{writable:!0}},rightToLeft:{json:{writable:!0}},rotated:{value:!1,json:{writable:!0}},text:{type:String,json:{writable:!0}},type:"text-symbol",verticalAlignment:{type:String,json:{writable:!0}},xoffset:{value:0,type:Number,cast:e.toPt,json:{writable:!0}},yoffset:{value:0,type:Number,cast:e.toPt,json:{writable:!0}},angle:{type:Number,value:0,json:{read:function(a){return a&&
-1*a},write:function(a,b){b.angle=a&&-1*a}}},width:{json:{writable:!0}}},getDefaults:function(){return g.mixin(this.inherited(arguments),h)},normalizeCtorArgs:function(a,b,c){if(a&&"string"!==typeof a)return a;var d={};a&&(d.text=a);b&&(d.font=b);c&&(d.color=c);return d},clone:function(){return new c({angle:this.angle,backgroundColor:b.clone(this.backgroundColor),borderLineColor:b.clone(this.borderLineColor),borderLineSize:this.borderLineSize,color:b.clone(this.color),font:this.font&&this.font.clone(),
haloColor:b.clone(this.haloColor),haloSize:this.haloSize,horizontalAlignment:this.horizontalAlignment,kerning:this.kerning,rightToLeft:this.rightToLeft,rotated:this.rotated,text:this.text,verticalAlignment:this.verticalAlignment,width:this.width,xoffset:this.xoffset,yoffset:this.yoffset})}});g.mixin(c,{ALIGN_START:"start",ALIGN_MIDDLE:"middle",ALIGN_END:"end",DECORATION_NONE:"none",DECORATION_UNDERLINE:"underline",DECORATION_OVERLINE:"overline",DECORATION_LINETHROUGH:"line-through"});c.defaultProps=
h;return c});