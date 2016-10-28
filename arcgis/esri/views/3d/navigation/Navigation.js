// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.1/esri/copyright.txt for details.
//>>built
define(["../../../core/Accessor","../../../core/Evented","../../../core/watchUtils","./Picker","./mixins/CamerasMixin"],function(c,d,b,e,f){return c.createSubclass([f,d],{properties:{interacting:{get:function(){return this._interacting},readOnly:!0},renderCoordsHelper:{},renderUnitInMeters:{dependsOn:["renderCoordsHelper"],get:function(){return this.renderCoordsHelper?this.renderCoordsHelper.unitInMeters:1}},picker:{},constraints:{},pan:{},zoom:{},rotate:{}},initialize:function(){this._mapCoordsHelperHandle=
b.init(this.view,"mapCoordsHelper",function(a){this.mapCoordsHelper=a}.bind(this));this._renderCoordsHelperHandle=b.init(this.view,"renderCoordsHelper",this.updateRenderCoordsHelper.bind(this));this.picker=new e(this,this.view);this._interacting=!1},destroy:function(){this._mapCoordsHelperHandle.remove();this._renderCoordsHelperHandle.remove()},updateRenderCoordsHelper:function(a){this.renderCoordsHelper=a;this.inherited(arguments)},begin:function(a){this.pan&&this.pan.continuous&&this.pan.continuous.stop();
this._interacting=!0;this.notifyChange("interacting")},end:function(a){this._interacting=!1;this.notifyChange("interacting")}})});