// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.1/esri/copyright.txt for details.
//>>built
define("require exports ../core/tsSupport/declareExtendsHelper ../core/tsSupport/decorateHelper ../core/accessorSupport/decorators ./Layer ./FeatureLayer ./support/Field ./support/LabelClass ./mixins/SceneService ../PopupTemplate ../request ../core/lang ../core/kebabDictionary ../core/requireUtils ../core/promiseUtils ../core/Error ../core/Logger ../core/accessorSupport/PropertyOrigin ../core/accessorSupport/utils ../geometry/SpatialReference ../geometry/support/scaleUtils ../renderers/support/jsonUtils ../portal/PortalItem dojo/_base/lang dojo/promise/all".split(" "),
function(v,N,w,e,d,x,m,y,z,A,n,p,B,C,D,g,f,E,h,F,k,G,H,I,J,q){function r(d,a){for(var b=a.toLowerCase(),c=0;c<d.length;c++){var t=d[c];if(t.name.toLowerCase()===b)return t}return null}var u=C({onTheGround:"on-the-ground",relativeToGround:"relative-to-ground",absoluteHeight:"absolute-height"}),K=["3DObject","Point"],l=E.getLogger("esri.layers.SceneLayer"),L={"features-points":"point","features-lines":"polyline","features-polygons":"polygon"};return function(s){function a(b,c){s.call(this);this.operationalLayerType=
"ArcGISSceneServiceLayer";this.elevationInfo=this.fields=null;this.labelsVisible=!1;this.labelingInfo=null;this.legendEnabled=!0;this.renderer=null;this.cachedDrawingInfo={color:!1};this.spatialReference=null;this.popupEnabled=!0;this.objectIdFilter=this.objectIdField=this.popupTemplate=null}w(a,s);a.prototype.normalizeCtorArgs=function(b,c){return"string"===typeof b?J.mixin({},{url:b},c):b};a.prototype.getField=function(b){return r(this.fields,b)};a.prototype.readElevationInfo=function(b){b=B.clone(b);
b.mode=u.fromJSON(b.mode);return b};a.prototype.writeElevationInfo=function(b,c){if(b&&(b.mode||b.offset||b.featureExpression)){var a={};b.mode&&(a.mode=u.toJSON(b.mode));b.offset&&(a.offset=b.offset);b.featureExpression&&(a.featureExpression=b.featureExpression);c.layerDefinition={elevationInfo:a}}};Object.defineProperty(a.prototype,"geometryType",{get:function(){return L[this.profile]||"mesh"},enumerable:!0,configurable:!0});a.prototype.readLabelsVisible=function(b,c){return c.showLabels};a.prototype.writeLabelsVisible=
function(b,c){b&&(c.showLabels=!0)};a.prototype.readLabelingInfo=function(b,c,a){b=c.drawingInfo.labelingInfo;if(!b)return null;var d=/\[([^\[\]]+)\]/ig,e=null!=c.fields&&Array.isArray(c.fields)?c.fields:null,M=function(b,c){var a=r(e,c);return"["+(a&&a.name||c)+"]"};return b.map(function(b){var c=new z;c.read(b,a);if((b=c.labelExpression)&&e)c.labelExpression=b.replace(d,M);return c})};a.prototype.writeLabelingInfo=function(b,c,a){b&&(c.layerDefinition={drawingInfo:{labelingInfo:b.map(function(b){return b.write({},
a)})}})};a.prototype.readLegendEnabled=function(b,c){return null!=c.showLegend?c.showLegend:!0};a.prototype.writeLegendEnabled=function(b,c){b||(c.showLegend=!1)};a.prototype.readRenderer=function(b,c,a){if(b=c.drawingInfo.renderer||void 0)(b=H.read(b,c,a)||void 0)||l.error("Failed to create renderer",{rendererDefinition:c.drawingInfo.renderer,layer:this,context:a});return b};a.prototype.readCachedDrawingInfo=function(b,c){if(null==b||"object"!==typeof b)b={};null==b.color&&(b.color=!1);return b};
a.prototype.readSpatialReference=function(b,c){if(null!=c.spatialReference)return k.fromJSON(c.spatialReference);var a=c.store,a=(a=a.indexCRS||a.geographicCRS)&&parseInt(a.substring(a.lastIndexOf("/")+1,a.length),10);return null!=a?new k(a):null};a.prototype.readPopupEnabled=function(b,c){return null!=c.disablePopup?!c.disablePopup:void 0};a.prototype.writePopupEnabled=function(b,c){b||(c.disablePopup=!0)};a.prototype.readPopupTemplate=function(b,c){return c.popupInfo?n.fromJSON(c.popupInfo):void 0};
a.prototype.writePopupTemplate=function(b,c){b&&(c.popupInfo=b.toJSON())};a.prototype.readObjectIdField=function(b,c){!b&&c.fields&&c.fields.some(function(c){"esriFieldTypeOID"===c.type&&(b=c.name);return!!b});return b||void 0};a.prototype.readProfile=function(b,c){return c.store.profile};a.prototype.readNormalReferenceFrame=function(b,c){return c.store.normalReferenceFrame};a.prototype.load=function(){var b=this,c=this.loadFromPortal({supportedTypes:["Scene Service"]}).always(function(){return b._fetchService()}).then(function(){return q([b._verifyRootNodeAndUpdateExtent(),
b._setCompanionFeatureLayer()])}).then(function(){return b._applyCompanionOverrides()});this.addResolvingPromise(c);return this};a.prototype.createLayerView=function(b){var c=this,a=this.profile||"features-meshes";return D.when(v,"features-meshes"===a||"meshpyramids"===a?"../views/3d/layers/SceneLayerView3D":"../views/3d/layers/SceneLayerGraphicsView3D").then(function(a){return new a({view:b,layer:c})})};a.prototype.read=function(b,a){this.inherited(arguments,[b,a]);b.layerDefinition&&this.inherited(arguments,
[b.layerDefinition,a]);return this};a.prototype.queryExtent=function(b){return this._getCompanionLayerForQuery().then(function(a){return a.queryExtent(b)})};a.prototype.queryFeatureCount=function(b){return this._getCompanionLayerForQuery().then(function(a){return a.queryFeatureCount(b)})};a.prototype.queryFeatures=function(b){return this._getCompanionLayerForQuery().then(function(a){return a.queryFeatures(b)})};a.prototype.queryObjectIds=function(b){return this._getCompanionLayerForQuery().then(function(a){return a.queryObjectIds(b)})};
a.prototype._getCompanionLayerForQuery=function(){var b=this.companionFeatureLayer;return null!=b?g.resolve(b):g.reject(new f("scenelayer:query-not-available","SceneLayer queries are not available without companion feature layer"))};a.prototype._validateLayer=function(b){if(b.layerType&&-1===K.indexOf(b.layerType))throw new f("scenelayer:layer-type-not-supported","SceneLayer does not support this layer type",{layerType:b.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor))throw new f("layer:service-version-not-supported",
"Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"1.x"});if(1<this.version.major)throw new f("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"1.x"});b=this.normalReferenceFrame;var a=!1,d=!1;if(null==b)d=a=!0;else{var e=null==G.getUnitValue(this.spatialReference);switch(b){case "east-north-up":case "earth-centered":a=!0;d=e;break;case "vertex-reference-frame":a=!0;d=!e;break;
default:a=!1}}if(!a)throw new f("scenelayer:unsupported-normal-reference-frame","Normal reference frame is invalid.");if(!d)throw new f("scenelayer:incompatible-normal-reference-frame","Normal reference frame is incompatible with scene spatial reference.");};a.prototype._applyCompanionOverrides=function(){if(this.companionFeatureLayer)for(var b=["popupTemplate","popupEnabled","fields"],a=F.getProperties(this),d=0;d<b.length;d++){var e=b[d];this._buddyIsMoreImportant(e)&&(a.setDefaultOrigin(this.companionFeatureLayer.originOf(e)),
a.set(e,this.companionFeatureLayer[e]),a.setDefaultOrigin("user"))}};a.prototype._setCompanionFeatureLayer=function(){var b=this;return this._fetchCompanionFeatureLayer().then(function(a){b.companionFeatureLayer=a})};a.prototype._fetchCompanionFeatureLayer=function(){var b=this;return-1===["meshpyramids","features-points"].indexOf(this.profile)?g.resolve(null):(this.portalItem&&this.portalItem.isResolved()?this._fetchCompanionFeatureLayerFromRelatedItems(this.portalItem):this._fetchCompanionFeatureLayerFromUrl()).then(function(b){return b.load()}).otherwise(function(a){null==
b.attributeStorageInfo?l.warn("Companion FeatureLayer could not be loaded and no binary attributes found. Popups will not work for this SceneLayer: "+b.title):l.info("Companion FeatureLayer could not be loaded. Falling back to binary attributes for Popups on this SceneLayer: "+b.title);return null})};a.prototype._fetchCompanionFeatureLayerFromRelatedItems=function(b){var a=this;return b.fetchRelatedItems({relationshipType:"Service2Data",direction:"forward"}).then(function(b){return(b=b.filter(function(b){return"Feature Service"===
b.type})[0])?a._fetchCompanionFeatureLayerFromPortalItem(new I({id:b.id,portal:b.portal})):a._fetchCompanionFeatureLayerFromUrl()}).otherwise(function(){return a._fetchCompanionFeatureLayerFromUrl()})};a.prototype._fetchCompanionFeatureLayerFromPortalItem=function(b){var a=this;return b.load().then(function(b){return a._findMatchingCompanionSublayerUrl(b.url)}).then(function(a){return g.resolve(new m({url:a,portalItem:b}))})};a.prototype._fetchCompanionFeatureLayerFromUrl=function(){return this._findMatchingCompanionSublayerUrl().then(function(b){return g.resolve(new m({url:b}))})};
a.prototype._findMatchingCompanionSublayerUrl=function(b){var a=this.parsedUrl.path.match(/^(.*)\/SceneServer\/layers\/([\d]*)\/?$/i);if(!a)return g.reject();null==b&&(b=a[1]+"/FeatureServer");var d=b.replace(/^(.*FeatureServer)(\/[\d]*\/?)?$/i,"$1");b={query:{f:"json"},responseType:"json"};var e=a[1]+"/SceneServer",f=parseInt(a[2],10),a=p(this._addUrlToken(e),b).otherwise(function(a){return{layers:null}});b=p(this._addUrlToken(d),b);return q([b,a]).then(function(a){var b=a[0];a=a[1];a=a.data&&a.data.layers;
b=b.data&&b.data.layers;if(!Array.isArray(b))throw Error("expected layers array");if(Array.isArray(a))for(var c=0;c<Math.min(a.length,b.length);c++){if(a[c].id===f)return d+"/"+b[c].id}else if(f<b.length)return d+"/"+b[f].id;throw Error("could not find matching companion sublayer");})};a.prototype._buddyIsMoreImportant=function(a){if(!this.companionFeatureLayer)return!1;var c=h.nameToId(this.originOf(a));a=h.nameToId(this.companionFeatureLayer.originOf(a));return null!=a&&a<=h.OriginId.SERVICE?null==
c||c<h.OriginId.SERVICE:null!=a&&a<=h.OriginId.PORTAL_ITEM?null==c||c<h.OriginId.PORTAL_ITEM:!1};e([d.shared("esri.layers.SceneLayer")],a.prototype,"declaredClass",void 0);e([d.property()],a.prototype,"companionFeatureLayer",void 0);e([d.property()],a.prototype,"operationalLayerType",void 0);e([d.property({type:[y]})],a.prototype,"fields",void 0);e([d.property({readOnly:!0})],a.prototype,"attributeStorageInfo",void 0);e([d.property()],a.prototype,"elevationInfo",void 0);e([d.read("elevationInfo")],
a.prototype,"readElevationInfo",null);e([d.write("elevationInfo")],a.prototype,"writeElevationInfo",null);e([d.property({type:String,dependsOn:["profile"]})],a.prototype,"geometryType",null);e([d.property({type:Boolean})],a.prototype,"labelsVisible",void 0);e([d.read("labelsVisible",["showLabels"])],a.prototype,"readLabelsVisible",null);e([d.write("labelsVisible")],a.prototype,"writeLabelsVisible",null);e([d.property()],a.prototype,"labelingInfo",void 0);e([d.read("labelingInfo",["drawingInfo.labelingInfo"])],
a.prototype,"readLabelingInfo",null);e([d.write("labelingInfo")],a.prototype,"writeLabelingInfo",null);e([d.property({type:Boolean})],a.prototype,"legendEnabled",void 0);e([d.read("legendEnabled",["showLegend"])],a.prototype,"readLegendEnabled",null);e([d.write("legendEnabled")],a.prototype,"writeLegendEnabled",null);e([d.property({json:{writeTo:"layerDefinition.drawingInfo.renderer"}})],a.prototype,"renderer",void 0);e([d.read("renderer",["drawingInfo.renderer"])],a.prototype,"readRenderer",null);
e([d.property()],a.prototype,"cachedDrawingInfo",void 0);e([d.read("cachedDrawingInfo")],a.prototype,"readCachedDrawingInfo",null);e([d.property({type:k})],a.prototype,"spatialReference",void 0);e([d.read("spatialReference",["spatialReference","store.indexCRS","store.geographicCRS"])],a.prototype,"readSpatialReference",null);e([d.property({type:Boolean})],a.prototype,"popupEnabled",void 0);e([d.read("popupEnabled",["disablePopup"])],a.prototype,"readPopupEnabled",null);e([d.write("popupEnabled")],
a.prototype,"writePopupEnabled",null);e([d.property({type:n})],a.prototype,"popupTemplate",void 0);e([d.read("popupTemplate",["popupInfo"])],a.prototype,"readPopupTemplate",null);e([d.write("popupTemplate")],a.prototype,"writePopupTemplate",null);e([d.property({type:String})],a.prototype,"objectIdField",void 0);e([d.read("objectIdField",["fields"])],a.prototype,"readObjectIdField",null);e([d.property()],a.prototype,"objectIdFilter",void 0);e([d.property({type:String})],a.prototype,"profile",void 0);
e([d.read("profile",["store.profile"])],a.prototype,"readProfile",null);e([d.property({readOnly:!0,type:String})],a.prototype,"normalReferenceFrame",void 0);e([d.read("normalReferenceFrame",["store.normalReferenceFrame"])],a.prototype,"readNormalReferenceFrame",null);return a=e([d.subclass()],a)}(d.declared(x,A))});