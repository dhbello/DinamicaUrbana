// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.1/esri/copyright.txt for details.
//>>built
define("require exports ../core/tsSupport/declareExtendsHelper ../core/tsSupport/decorateHelper ../core/accessorSupport/decorators ../Viewpoint ../Basemap ../support/basemapUtils ../core/JSONSupport ../core/lang ../core/Logger ../core/Collection ../core/collectionUtils ../core/promiseUtils ./Environment ./Lighting ./support/Description ./support/Title ./support/Thumbnail dojo/_base/lang dojo/promise/all ../views/3d/lib/glMatrix".split(" "),function(I,J,m,d,c,y,z,r,g,A,B,n,C,f,p,D,u,v,q,k,E,F){var G=
0,w=function(f){function b(){f.apply(this,arguments);this.id=""}m(b,f);b.prototype.clone=function(){return new b({id:this.id})};d([c.property({type:String,json:{writable:!0}})],b.prototype,"id",void 0);return b=d([c.subclass()],b)}(c.declared(g)),l=n.ofType(w),H=B.getLogger("esri.webscene.Slide");return function(g){function b(a){g.call(this,a);this._currentAnimation=null;this.id=Date.now().toString(16)+"-slide-"+G++;this.title=new v.default;this.description=new u.default;this.thumbnail=new q.default;
this.basemap=this.viewpoint=null;this.environment=new p;this.visibleLayers=new l}m(b,g);b.prototype.readBasemap=function(a,e){return!e.baseMap?null:z.fromJSON(e.baseMap)};b.prototype.castBasemap=function(a){return r.ensureType(a)};Object.defineProperty(b.prototype,"visibleLayers",{set:function(a){this._set("visibleLayers",C.referenceSetter(a,this._get("visibleLayers"),l))},enumerable:!0,configurable:!0});b.prototype.castVisibleLayers=function(a){return!a||"function"!==typeof a.map?a:a.map(function(a){if("string"===
typeof a)return{id:a};if(a.id)return{id:a.id};H.warn('Invalid visible layer, expected { id }, Layer or "id"');return a})};b.prototype.clone=function(){return new this.constructor({id:this.id,title:this.title.clone(),thumbnail:this.thumbnail.clone(),description:this.description&&this.description.clone()||null,viewpoint:this.viewpoint&&this.viewpoint.clone()||null,basemap:this.basemap&&this.basemap.clone()||null,visibleLayers:this.visibleLayers.clone(),environment:this.environment&&this.environment.clone()||
null})};b.prototype._updateVisibleLayersFrom=function(a){var e=this,b=[];return f.eachAlways(this._allLayers(a.map).map(function(e){return a.whenLayerView(e).then(function(a){a.visible&&b.push(new w({id:a.layer.id}))})}).toArray()).then(function(){e.visibleLayers.removeAll();e.visibleLayers.addMany(b)})};b.prototype.updateFrom=function(a,e){var b=this;e=k.mixin({screenshot:k.mixin({format:"jpeg",quality:80,width:120,height:75},e&&e.screenshot)},e);return this._updateVisibleLayersFrom(a).then(function(){b.viewpoint=
a.viewpoint.clone();b.environment.lighting=D.prototype.clone.apply(a.environment.lighting);b.basemap=a.map.basemap&&a.map.basemap.clone()||null;return a.takeScreenshot(e.screenshot)}).then(function(a){b.thumbnail=new q.default({url:a.dataURL});return b})};b.prototype.applyTo=function(a,b){var h=this,x=k.mixin({animate:!0},b);return this._applyBasemap(a).then(function(){return E([h._applyViewpoint(a,x),h._applyLayerVisibility(a,x)])}).then(function(){return h})};b.prototype._applyBasemap=function(a){var b=
this;return this.basemap?this.basemap.load().always(function(){a.map.basemap=r.clonePreservingTiledLayers(b.basemap,a.map.basemap)}):f.resolve()};b.prototype._allLayers=function(a){var b=new n;this._collectLayers(a,b);this._collectLayers(a.ground,b);return b};b.prototype._collectLayers=function(a,b){var h=this;a.layers.forEach(function(a){b.add(a);a.layers&&h._collectLayers(a,b)})};b.prototype._applyLayerVisibility=function(a,b){var h=this;if(this.visibleLayers){var c=this._allLayers(a.map);if(b.applyToLayerViews)return f.eachAlways(c.map(function(b){return a.whenLayerView(b).then(function(a){a.visible=
h.visibleLayers.some(function(b){return b.id===a.layer.id})})}).toArray());c.forEach(function(a){return a.visible=h.visibleLayers.some(function(b){return b.id===a.id})});return f.resolve()}};b.prototype._applyViewpoint=function(a,b){if(this.viewpoint){this.viewpoint.camera.fov=a.camera.fov;if(b.animate){if(this.get("environment.lighting.date"))return this._animateToLighting(a).then(function(){});a.environment.lighting=this.environment.lighting.clone();return a.goTo(this.viewpoint).then(function(){})}a.viewpoint=
this.viewpoint;a.environment.lighting=this.environment.lighting.clone()}return f.resolve()};b.prototype._animateToLighting=function(a){var b=this,c;"global"===a.viewingMode&&(c=this._animateLightingWithCamera(a));this._currentAnimation&&(this._currentAnimation.stop(),this._currentAnimation=null);a.environment.lighting.cameraTrackingEnabled=!1;a.environment.lighting.directShadowsEnabled=this.environment.lighting.directShadowsEnabled;null!=this.environment.lighting.displayUTCOffset&&(a.environment.lighting.displayUTCOffset=
this.environment.lighting.displayUTCOffset);this._currentAnimation=a.goTo(this.viewpoint);this._currentAnimation.then(function(d){c&&c.remove();b._currentAnimation===d&&(a.environment.lighting.cameraTrackingEnabled=!0);"finished"===d.state&&(a.environment.lighting=b.environment.lighting.clone())});return this._currentAnimation};b.prototype._getTime=function(a){var b=a.getTime();a=3600*a.getUTCHours()+60*a.getUTCMinutes()+a.getUTCSeconds();return[b,a]};b.prototype._setTime=function(a,b,c){a.setTime(b);
a.setUTCHours(c/3600);a.setUTCMinutes(c%3600/60);a.setUTCSeconds(c%3600%60);return a};b.prototype._animateLightingWithCamera=function(a){var b=this,c=F.vec3d,d=this._getTime(new Date(a.environment.lighting.date.toString())),f=d[0],g=d[1],d=this._getTime(this.environment.lighting.date),p=d[0],q=d[1],k=a.renderCoordsHelper,l=[0,0,0];k.toRenderCoords(a.camera.position,l);var m=[0,0,0];k.toRenderCoords(this.viewpoint.camera.position,m);var s=[0,0,0],r=new Date;return a.watch("camera",function(d){k.toRenderCoords(d.position,
s);d=c.dist2(l,s);var n=c.dist2(m,s),t=0;0!==d+n&&(t=d/(d+n));a.environment.lighting.date=b._setTime(r,f+(p-f)*t,g+(q-g)*t)})};b.createFrom=function(a,b){return(new this).updateFrom(a,b)};b.sanitizeJSON=function(a){var b;b=void 0!==a.visibleLayers&&Array.isArray(a.visibleLayers)?A.clone(a.visibleLayers):[];b={id:a.id||"",title:a.title||{text:""},thumbnail:a.thumbnail||{url:""},viewpoint:a.viewpoint,baseMap:a.baseMap,visibleLayers:b};void 0!==a.description&&(b.description=a.description);void 0!==a.environment&&
(b.environment=p.sanitizeJSON(a.environment));return b};d([c.property({json:{writable:!0}})],b.prototype,"id",void 0);d([c.property({type:v.default,json:{writable:!0}})],b.prototype,"title",void 0);d([c.property({type:u.default,json:{writable:!0}})],b.prototype,"description",void 0);d([c.property({type:q.default,json:{writable:!0}})],b.prototype,"thumbnail",void 0);d([c.property({type:y,json:{writable:!0}})],b.prototype,"viewpoint",void 0);d([c.property({json:{writeTo:"baseMap"}})],b.prototype,"basemap",
void 0);d([c.read("basemap",["baseMap"])],b.prototype,"readBasemap",null);d([c.cast("basemap")],b.prototype,"castBasemap",null);d([c.property({type:l,json:{writable:!0}})],b.prototype,"visibleLayers",null);d([c.cast("visibleLayers")],b.prototype,"castVisibleLayers",null);d([c.property({type:p,json:{writable:!0}})],b.prototype,"environment",void 0);return b=d([c.subclass("esri.webscene.Slide")],b)}(c.declared(g))});