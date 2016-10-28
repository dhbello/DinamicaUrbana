// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.1/esri/copyright.txt for details.
//>>built
define(["../../core/Accessor","../../core/Evented","../../layers/support/LOD","./constraints/ZoomConstraint","./constraints/RotationConstraint"],function(d,e,f,b,c){b=b.default;c=c.default;return d.createSubclass([e],{declaredClass:"esri.views.2d.MapViewConstraints",destroy:function(){this.view=null},initialize:function(){this.watch("_zoom, _rotation",this.emit.bind(this,"update"),!0)},properties:{effectiveLODs:{readOnly:!0,aliasOf:"_zoom.effectiveLODs"},effectiveMinScale:{readOnly:!0,aliasOf:"_zoom.effectiveMinScale"},
effectiveMaxScale:{readOnly:!0,aliasOf:"_zoom.effectiveMaxScale"},effectiveMinZoom:{readOnly:!0,aliasOf:"_zoom.effectiveMinZoom"},effectiveMaxZoom:{readOnly:!0,aliasOf:"_zoom.effectiveMaxZoom"},enabled:!0,lods:{value:null,type:[f]},minScale:0,maxScale:0,minZoom:-1,maxZoom:-1,rotationEnabled:!0,snapToZoom:!0,view:{value:null},_zoom:{type:b,dependsOn:"lods minZoom maxZoom minScale maxScale snapToZoom view.tileInfo".split(" "),get:function(){return new b({lods:this.lods||this.view&&this.view.tileInfo&&
this.view.tileInfo.lods,minZoom:this.minZoom,maxZoom:this.maxZoom,minScale:this.minScale,maxScale:this.maxScale,snapToZoom:this.snapToZoom})}},_rotation:{type:c,dependsOn:["rotationEnabled"],get:function(){return new c({rotationEnabled:this.rotationEnabled})}}},constrain:function(a,b,c){if(!this.enabled)return a;this._zoom.constrain(a,b,c);this._rotation.constrain(a,b,c);return a},zoomToScale:function(a){return this._zoom.zoomToScale(a)},scaleToZoom:function(a){return this._zoom.scaleToZoom(a)},snapScale:function(a,
b){return this._zoom.snapScale(a,b)}})});