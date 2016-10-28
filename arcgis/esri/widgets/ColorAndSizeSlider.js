// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.1/esri/copyright.txt for details.
//>>built
require({cache:{"url:esri/widgets/ColorAndSizeSlider/templates/ColorAndSizeSlider.html":'\x3cdiv class\x3d"${_css.container}"\x3e\r\n  \x3cdiv data-dojo-attach-point\x3d"_containerNode"\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"_titleNode"\x3e\x3c/div\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"_sliderNode"\x3e\x3c/div\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"_scaleNode"\x3e\x3c/div\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e'}});
define("./Widget ../core/numberUtils ../renderers/support/utils ../widgets/RendererSlider ../widgets/RendererSlider/sliderUtils ../Color dijit/_TemplatedMixin dojo/_base/array dojo/_base/lang dojo/debounce dojo/dom-style dojo/dom-construct dojo/dom-class dojox/gfx dojo/text!./ColorAndSizeSlider/templates/ColorAndSizeSlider.html".split(" "),function(p,q,x,r,k,m,s,n,g,t,h,u,v,l,w){return p.createSubclass([s],{_rampNode:null,_sliderHeight:null,_barsGroup:null,_updateTimer:null,_forceMinValue:null,_forceMaxValue:null,
_css:null,declaredClass:"esri.widgets.ColorAndSizeSlider",templateString:w,properties:{sizeInfo:null,colorInfo:null,values:null,minValue:null,maxValue:null,minSize:null,maxSize:null,histogram:null,statistics:null,zoomOptions:null,handles:[],showHistogram:!0,showStatistics:!0,showLabels:!0,showTicks:!0,showHandles:!0,histogramWidth:100,rampWidth:26,symbolWidth:50},constructor:function(a,b){b&&(void 0!==a.minValue&&this.set("_forceMinValue",a.minValue),void 0!==a.maxValue&&this.set("_forceMaxValue",
a.maxValue),this._css={container:"esri-color-and-size-slider",handlerTickSize:"esri-handler-tick-size"},this._attachSymbols=t(this._attachSymbols,0))},postCreate:function(){this.inherited(arguments);this._setupDataDefaults()},startup:function(){this.inherited(arguments);this._slider=new r({type:"ColorAndSizeSlider",values:this.values,isDate:this.isDate,minimum:this.zoomOptions?this.zoomOptions.minSliderValue:this.minValue,maximum:this.zoomOptions?this.zoomOptions.maxSliderValue:this.maxValue,_minZoomLabel:this.zoomOptions?
this.minValue:null,_maxZoomLabel:this.zoomOptions?this.maxValue:null,_isZoomed:this.zoomOptions?!0:!1,showLabels:this.showLabels,showTicks:this.showTicks,showHandles:this.showHandles,handles:this.handles},this._sliderNode);this._slider.startup();this._rampNode=this._slider._sliderAreaRight;this._sliderHeight=h.get(this._rampNode,"height")||155;this._createSVGSurfaces();this._slider.on("slide",g.hitch(this,function(a){this._colorInfoAutoAdjust();this._fillRamp(a.values)}));this._slider.on("data-change",
g.hitch(this,function(a){a=a.values;this.sizeInfo.minDataValue=a[0];this.sizeInfo.maxDataValue=a[1];this.set("values",a);this._colorInfoAutoAdjust();this._fillRamp();this.emit("data-change",{minValue:this.minValue,maxValue:this.maxValue,sizeInfo:g.clone(this.sizeInfo),colorInfo:g.clone(this.colorInfo)})}));this._slider.on("handle-value-change",g.hitch(this,function(a){a=a.values;this.sizeInfo.minDataValue=a[0];this.sizeInfo.maxDataValue=a[1];this.set("values",a);this._updateRendererSlider();this.emit("handle-value-change",
{minValue:this.minValue,maxValue:this.maxValue,sizeInfo:g.clone(this.sizeInfo),colorInfo:g.clone(this.colorInfo)})}));this._slider.on("data-value-change",g.hitch(this,function(a){var b=a.min;a=a.max;this.set({minValue:b,maxValue:a});this._updateRendererSlider();this.emit("data-value-change",{minValue:b,maxValue:a,sizeInfo:g.clone(this.sizeInfo),colorInfo:g.clone(this.colorInfo)})}));this._slider.on("stop",g.hitch(this,function(){this.emit("handle-value-change",{minValue:this.minValue,maxValue:this.maxValue,
sizeInfo:g.clone(this.sizeInfo),colorInfo:g.clone(this.colorInfo)})}));this._slider.on("zoom-out",g.hitch(this,function(){this.set("zoomOptions",null)}));this.statistics&&this.showStatistics&&this._generateStatistics();this.showHistogram&&(this.histogram||this.zoomOptions&&this.zoomOptions.histogram)&&this._generateHistogram();this.watch("minValue, maxValue, symbol, sizeInfo, minSize, maxSize, statistics, histogram, zoomOptions",this._updateTimeout);this.watch("showHistogram",this._toggleHistogram);
this.watch("zoomOptions",this._zoomEventHandler)},destroy:function(){this.inherited(arguments);this._slider&&this._slider.destroy();this._avgHandleObjs&&this._avgHandleObjs.avgHandleTooltip&&this._avgHandleObjs.avgHandleTooltip.destroy();this.countTooltips&&n.forEach(this.countTooltips,function(a){a.destroy()})},refresh:function(){this._updateTimeout()},_updateTimeout:function(){this._updateRendererSlider()},_updateRendererSlider:function(){this.set({minSize:this.sizeInfo.minSize,maxSize:this.sizeInfo.maxSize,
values:[this.sizeInfo.minDataValue,this.sizeInfo.maxDataValue]});null!==this.zoomOptions&&!1!==this.zoomOptions?(this.toggleSliderBottom=this.zoomOptions.minSliderValue>this.minValue,this.toggleSliderTop=this.zoomOptions.maxSliderValue<this.maxValue,this._slider.set({minimum:this.zoomOptions.minSliderValue,maximum:this.zoomOptions.maxSliderValue,_minZoomLabel:this.minValue,_maxZoomLabel:this.maxValue,_isZoomed:!0})):this._slider.set({minimum:this.minValue,maximum:this.maxValue,_minZoomLabel:null,
_maxZoomLabel:null,_isZoomed:!1});this._slider.set("values",this.values);this._slider._reset();this._slider._updateRoundedLabels();this._slider._generateMoveables();this._clearRect();this._createSVGSurfaces();this.statistics&&this.showStatistics&&this._generateStatistics();this.showHistogram&&(this.histogram||this.zoomOptions&&this.zoomOptions.histogram)&&this._generateHistogram()},_zoomEventHandler:function(){this.emit("zoomed",!!this.zoomOptions)},_setupDataDefaults:function(){this.set({minSize:this.sizeInfo.minSize,
maxSize:this.sizeInfo.maxSize});this.statistics?this.set({minValue:this.statistics.min,maxValue:this.statistics.max}):this.set({minValue:0,maxValue:100});null!==this._forceMinValue&&this.set("minValue",this._forceMinValue);null!==this._forceMaxValue&&this.set("maxValue",this._forceMaxValue);null!==this.zoomOptions&&!1!==this.zoomOptions&&(this.toggleSliderBottom=this.zoomOptions.minSliderValue>this.minValue,this.toggleSliderTop=this.zoomOptions.maxSliderValue<this.maxValue);null===this.sizeInfo.minDataValue&&
null===this.sizeInfo.maxDataValue||0===this.sizeInfo.minDataValue&&0===this.sizeInfo.maxDataValue?null===this.minValue&&null===this.maxValue&&this.set({minValue:0,maxValue:100,values:[20,80]}):this.minValue===this.maxValue?0===this.minValue?this.set({maxValue:100,values:[20,80]}):null===this.minValue?this.set({minValue:0,maxValue:100,values:[20,80]}):this.set({minValue:0,maxValue:2*this.minValue,values:[this.maxValue/5,4*(this.maxValue/5)]}):this.set("values",[this.sizeInfo.minDataValue,this.sizeInfo.maxDataValue]);
null===this.minValue&&this.set("minValue",0);null===this.maxValue&&this.set("maxValue",100)},_colorInfoAutoAdjust:function(){var a=this.colorInfo.stops,b=a.length-1,d=a[0].value=this._slider.values[0],c=a[b].value=this._slider.values[1],e;for(e=0;e<=b;e++)a[e].value=d*(b-e)/b+c*e/b},_createSVGSurfaces:function(){this._proportionalSymbolSurface=l.createSurface(this._rampNode,this.rampWidth,this._sliderHeight);this._surfaceRect=this._proportionalSymbolSurface.createRect({width:this.rampWidth,height:this._sliderHeight});
this._histogramSurface=k.generateHistogramSurface(this._rampNode,this.histogramWidth,this._sliderHeight,this.rampWidth);this._fillRamp();this._attachSymbols()},_attachSymbols:function(){this._attachSymbol(this._slider.moveables[0],this.minSize,"min");this._attachSymbol(this._slider.moveables[1],this.maxSize,"max")},_attachSymbol:function(a,b){var d=h.get(a.handleContainer,"height"),c=this.symbol||{type:"custom"};a.symbol||(a.symbol=u.create("div",{style:"position: absolute; left: 10px;"},a));switch(c.type){case "simple-line-symbol":c=
b===this.minSize?5:13;this._generateLineSymbol(a,c,d);break;case "simple-marker-symbol":c=b===this.minSize?12:48;this._generateCircleSymbol(a.symbol,c,d);break;default:c=b===this.minSize?12:48,this._generateCircleSymbol(a.symbol,c,d)}return a.symbol},_generateLineSymbol:function(a,b,d){var c=a.symbol;v.add(a.tick,this._css.handlerTickSize);h.set(c,"top",d/2-b+"px");h.set(c,"height",2*b+"px");h.set(c,"width",b-4+"px");c.innerHTML="";a=l.createSurface(c);a.rawNode.style.position="absolute";a.rawNode.style.top=
1===b?"1px":b/2+"px";this.isLeftToRight()||(a.rawNode.style.left="-45px");a.setDimensions(this.rampWidth,b);a.createRect({width:this.rampWidth,height:b}).setFill(new m([0,0,0,0.4]));return a},_generateCircleSymbol:function(a,b,d){var c=b/2;b=12===b?!0:!1;h.set(a,"top",d/2-(c+1)+"px");h.set(a,"height",2*(c+1)+"px");h.set(a,"width",b?2*(c+1):c+"px");h.set(a,"left",b?"8px":"10px");a.innerHTML="";a=l.createSurface(a);a.rawNode.style.position="absolute";this.isLeftToRight()||(a.rawNode.style.left="-45px");
b?(a.setDimensions(2*(c+1),2*(c+1)),a.createCircle({cx:7,cy:c+1,r:c}).setFill(new m([0,0,0,0.4])).setStroke("#fff")):(a.setDimensions(c+1,2*(c+1)),a.createCircle({cx:0,cy:c+1,r:c}).setFill(new m([0,0,0,0.2])).setStroke("#fff"));return a},_fillRamp:function(a){var b=g.clone(this.colorInfo.stops),d=this._slider,c=d.minimum,e=d.maximum,f=this._sliderHeight,k=a?a[1]:d.values[1];a=Math.round(f-((a?a[0]:d.values[0])-d.minimum)/(d.maximum-d.minimum)*f);d=Math.round(f-(k-d.minimum)/(d.maximum-d.minimum)*
f);k=this.rampWidth;n.forEach(b,function(a){a.offset=(e-a.value)/(e-c)});b.reverse();this._proportionalSymbolSurface.clear();this._proportionalSymbolSurface.createPath().moveTo(k,0).lineTo(k,d).lineTo(10,a).lineTo(10,f).lineTo(0,f).lineTo(0,0).closePath().setStroke("#fff").setFill({type:"linear",x1:0,y1:0,x2:0,y2:f,colors:b});h.set(this._proportionalSymbolSurface.rawNode,"overflow","visible");h.set(this._proportionalSymbolSurface.rawNode,"background-color","#d9d9d9");null!==this.zoomOptions&&!1!==
this.zoomOptions&&(this.toggleSliderBottom&&this.toggleSliderTop?(this._proportionalSymbolSurface.createPath("M0,1 L6.25,-1 L12.5,1 L18.75,-1 L25,1").setStroke({color:"#fff",width:3}).setTransform(l.matrix.translate(0,5)),this._proportionalSymbolSurface.createPath("M0,1 L6.25,-1 L12.5,1 L18.75,-1 L25,1").setStroke({color:"#fff",width:3}).setTransform(l.matrix.translate(0,195))):this.toggleSliderBottom?this._proportionalSymbolSurface.createPath("M0,1 L6.25,-1 L12.5,1 L18.75,-1 L25,1").setStroke({color:"#fff",
width:3}).setTransform(l.matrix.translate(0,195)):this.toggleSliderTop&&this._proportionalSymbolSurface.createPath("M0,1 L6.25,-1 L12.5,1 L18.75,-1 L25,1").setStroke({color:"#fff",width:3}).setTransform(l.matrix.translate(0,5)))},_clearRect:function(){this._proportionalSymbolSurface.destroy();this._histogramSurface.destroy()},_showHistogram:function(){this.histogram||this.zoomOptions&&this.zoomOptions.histogram?this._generateHistogram():this._barsGroup&&(this._barsGroup.destroy(),this._barsGroup=
null)},_toggleHistogram:function(){this.showHistogram?(h.set(this._barsGroup.rawNode,"display","inline-block"),this._showHistogram()):h.set(this._barsGroup.rawNode,"display","none")},_generateHistogram:function(){var a=this.zoomOptions&&this.zoomOptions.histogram?this.zoomOptions.histogram:this.histogram;this._barsGroup=k.generateHistogram(this._histogramSurface,a,this.histogramWidth,this.rampWidth,this.isLeftToRight());this.countTooltips=k.generateCountTooltips(a,this._barsGroup)},_generateStatistics:function(){if(!(2>
this.statistics.count||isNaN(this.statistics.avg))){var a,b=this.statistics;a=this._slider;var d=this.zoomOptions||null,c=k.getPrecision(this.maxValue),e,f;b.min===b.max&&b.min===b.avg?(e=0,f=2*b.avg):(e=b.min,f=b.max);if(e!==a.minimum||f!==a.maximum)e=a.minimum,f=a.maximum;d&&(e=d.minSliderValue,f=d.maxSliderValue);a=this._sliderHeight*(f-b.avg)/(f-e);b=q.round([b.avg,f,e])[0];this._avgHandleObjs=k.generateAvgLine(this._histogramSurface,b,a,c,this.isDate,this.isLeftToRight())}}})});