// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.1/esri/copyright.txt for details.
//>>built
define(["../../../core/Evented","../../inputs/Handler"],function(h,k){return k.createSubclass([h],{declaredClass:"esri.views.2d.handlers.ZoomBox",constructor:function(){this._event={x:0,y:0,width:0,height:0}},_panStarted:!1,_startCoords:{},view:null,enabled:!1,drag:function(b){var a=this._event,e=b.eventType,c=b.screenPoint.x,d=b.screenPoint.y,f=this._startCoords.x||null,g=this._startCoords.y||null;!0===b.srcEvent.shiftKey&&(!1===this._panStarted&&4!==e)&&(this._panStarted=!0,e=this._phaseDict.START);
if(e===this._phaseDict.START&&!0===b.srcEvent.shiftKey)return b.preventDefault(),this.enabled=!0,this._startCoords={x:c,y:d},a.x=c,a.y=d,a.width=0,a.height=0,this.emit("start",a),!1;c>f?(a.x=f,a.width=c-f):(a.x=c,a.width=f-c);d>g?(a.y=g,a.height=d-g):(a.y=d,a.height=g-d);if(this.enabled)return b.preventDefault(),e>=this._phaseDict.END?(this.enabled=!1,this._startCoords={},this._panStarted=!1,a.direction=b.srcEvent.ctrlKey?-1:1,this.emit("end",a)):this.emit("update",a),!1}})});