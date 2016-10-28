// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.1/esri/copyright.txt for details.
//>>built
require({cache:{"url:esri/widgets/HeatmapSlider/templates/HeatmapSlider.html":'\x3cdiv class\x3d"${baseClass}"\x3e\r\n  \x3cdiv data-dojo-attach-point\x3d"_containerNode"\x3e\r\n  \x3cdiv data-dojo-attach-point\x3d"_titleNode"\x3e\x3c/div\x3e\r\n  \x3cdiv data-dojo-attach-point\x3d"_sliderNode"\x3e\x3c/div\x3e\r\n  \x3cdiv data-dojo-attach-point\x3d"_scaleNode"\x3e\x3c/div\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e'}});
define("./Widget ../widgets/RendererSlider dijit/_TemplatedMixin dojo/_base/array dojo/_base/lang dojo/debounce dojo/dom-style dojox/gfx dojo/i18n!./HeatmapSlider/nls/HeatmapSlider dojo/text!./HeatmapSlider/templates/HeatmapSlider.html".split(" "),function(f,g,h,d,b,k,l,m,e,n){return f.createSubclass([h],{declaredClass:"esri.widgets.HeatmapSlider",baseClass:"esriHeatmapSlider",templateString:n,rampWidth:26,handles:[3,15],minSliderValue:0,maxSliderValue:1,showLabels:!0,showTicks:!0,showHandles:!0,
_rampNode:null,_sliderHeight:null,_colorRampSurface:null,_surfaceRect:null,_updateTimer:null,constructor:function(a,b){this.inherited(arguments);b&&(this._updateTimeout=k(this._updateTimeout,0))},postCreate:function(){this.inherited(arguments);this._setupDataDefaults()},startup:function(){this.inherited(arguments);this._slider=new g({type:"HeatmapSlider",values:this.values,minimum:this.minSliderValue,maximum:this.maxSliderValue,precision:2,showLabels:this.showLabels,showTicks:this.showTicks,showHandles:this.showHandles,
minLabel:e.widgets.rendererSlider.low,maxLabel:e.widgets.rendererSlider.high},this._sliderNode);this._slider.startup();this._rampNode=this._slider._sliderAreaRight;this._sliderHeight=l.get(this._rampNode,"height")||155;this._createSVGSurfaces();this._slider.on("slide",b.hitch(this,function(a){this._updateColorStops(a.values[0],a.values[1]);this._fillRamp()}));this._slider.on("data-change",b.hitch(this,function(a){this.set("values",[a.values[0],a.values[1]]);this.emit("change",b.clone(this.colorStops))}));
this._slider.on("handle-value-change",b.hitch(this,function(a){this._updateRendererSlider()}));this._slider.on("data-value-change",b.hitch(this,function(a){this._updateRendererSlider()}));this._slider.on("stop",b.hitch(this,function(a){this.emit("handle-value-change",b.clone(this.colorStops))}));this.watch("colorStops",this._updateTimeout)},destroy:function(){this.inherited(arguments);this._slider&&this._slider.destroy()},_updateTimeout:function(){this._updateRendererSlider()},_updateRendererSlider:function(){this.set("values",
[this.colorStops[3].ratio,this.colorStops[15].ratio]);this._slider.set("values",this.values);this._slider._reset();this._slider._updateRoundedLabels();this._slider._generateMoveables();this._clearRect();this._createSVGSurfaces()},_setupDataDefaults:function(){this.set("values",[this.colorStops[3].ratio,this.colorStops[15].ratio])},_createSVGSurfaces:function(){this._colorRampSurface=m.createSurface(this._rampNode,this.rampWidth-2,this._sliderHeight-2);this._colorRampSurface.rawNode.setAttribute("class",
"esri-slider-ramp-surface");this._surfaceRect=this._colorRampSurface.createRect({width:this.rampWidth,height:this._sliderHeight});this._fillRamp()},_clearRect:function(){this._colorRampSurface.destroy()},_updateColorStops:function(a,p){d.forEach(this.colorStops,b.hitch(this,function(b,c){2<c&&(b.ratio=a+(p-a)*((c-3)/12),3===c&&b.ratio<this.colorStops[2].ratio&&(b.ratio=this.colorStops[2].ratio))}))},_fillRamp:function(){var a=this.colorStops.slice(0);d.forEach(a,function(a){a.offset=1-a.ratio});a.reverse();
this._surfaceRect.setFill({type:"linear",x1:0,y1:0,x2:0,y2:this._sliderHeight/0.99,colors:a})}})});