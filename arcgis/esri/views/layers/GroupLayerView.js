// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.1/esri/copyright.txt for details.
//>>built
define(["dojo/_base/lang","../../core/Collection","../../core/collectionUtils","../../core/HandleRegistry","./LayerView"],function(f,g,d,h,c){var e=g.ofType(c);return c.createSubclass({declaredClass:"esri.views.layers.GroupLayerView",constructor:function(){this._layerViewVisibleHandler=this._layerViewVisibleHandler.bind(this)},getDefaults:function(){return f.mixin(this.inherited(arguments),{layerViews:[]})},initialize:function(){this._watchHandles=new h;this.layerViews.on("change",this._layerViewsChangeHandler.bind(this));
this._watchHandles.add(this.layer.watch("visibilityMode",this._visibilityModeHandler.bind(this),!0));this._watchHandles.add(this.watch("visible",this._visibleHandler.bind(this),!0));this._enforceVisibility()},destroy:function(){this._watchHandles&&(this._watchHandles.destroy(),this._watchHandles=null)},properties:{layerViews:{type:e,cast:d.castForReferenceSetter,set:function(a){this._set("layerViews",d.referenceSetter(a,this._get("layerViews"),e))}}},_hasLayerViewVisibleOverrides:function(){return this.layerViews.some(function(a){return a&&
a._isOverridden&&a._isOverridden("visible")})},_findLayerViewForLayer:function(a){return a&&this.layerViews.find(function(b){return b.layer===a})},_firstVisibleOnLayerOrder:function(){var a=this.layer.layers.find(function(a){return(a=this._findLayerViewForLayer(a))&&a.visible}.bind(this));return a&&this._findLayerViewForLayer(a)},_enforceExclusiveVisibility:function(a){this._hasLayerViewVisibleOverrides()&&(a||(a=this._firstVisibleOnLayerOrder(),!a&&0<this.layerViews.length&&(a=this._findLayerViewForLayer(this.layer.layers.getItemAt(0)))),
this.layerViews.forEach(function(b){b.visible=b===a}))},_layerViewsChangeHandler:function(a){this._watchHandles.remove("visible");this._watchHandles.add(this.layerViews.map(function(a){return a.watch("visible",this._layerViewVisibleHandler,!0)}.bind(this)).toArray(),"visible");a=a.added[a.added.length-1];var b=null;a&&a.visible&&(b=a);this._enforceVisibility(b)},_enforceVisibility:function(a){if(this._hasLayerViewVisibleOverrides())switch(this.layer.visibilityMode){case "inherited":var b=this.visible;
this.layerViews.forEach(function(a){a.visible=b});break;case "exclusive":this._enforceExclusiveVisibility(a)}},_visibilityModeHandler:function(a){this._enforceVisibility()},_layerViewVisibleHandler:function(a,b,d,c){if(this._hasLayerViewVisibleOverrides())switch(this.layer.visibilityMode){case "inherited":a!==this.visible&&(c.visible=this.visible);break;case "exclusive":this._enforceExclusiveVisibility(a&&c)}},_visibleHandler:function(){this._hasLayerViewVisibleOverrides()&&"inherited"===this.layer.visibilityMode&&
this._enforceVisibility()}})});