// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.1/esri/copyright.txt for details.
//>>built
define(["../../core/Accessor","../../core/arrayUtils","../FeatureLayer"],function(e,f,g){return e.createSubclass({declaredClass:"esri.layers.mixins.PopupUtils",_featureLayers:[],getPopupData:function(a){return this.getFeatureLayerFromSublayers(this.layer.allSublayers).map(function(b){return b.load().then(function(c){return c.queryFeatures(a).then(function(a){return a.features})})})},checkFeatureLayer:function(a){var b=f.find(this._featureLayers,function(c){return c.id===a.id});if(b){var c=JSON.stringify(b.popupTemplate),
d=JSON.stringify(a.popupTemplate);c!==d&&(b.outFields=this.getTemplateOutFields(a.popupTemplate),b.popupTemplate=a.popupTemplate)}else this._featureLayers.push(new g({url:a.url,id:a.id,outFields:this.getTemplateOutFields(a.popupTemplate),popupTemplate:a.popupTemplate}))},getFeatureLayerFromSublayers:function(a){var b=[];a.forEach(function(a){a.visible&&a.popupTemplate&&(b.push(a.id),this.checkFeatureLayer(a))},this);return this._featureLayers.filter(function(a){return-1<b.indexOf(a.id)})},getTemplateOutFields:function(a){var b=
[];a.fieldInfos.forEach(function(a){var d=a.fieldName&&a.fieldName.toLowerCase();d&&("shape"!==d&&0!==d.indexOf("relationships/"))&&b.push(a.fieldName)});return b}})});