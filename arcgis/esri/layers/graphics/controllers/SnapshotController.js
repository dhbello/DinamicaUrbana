// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.1/esri/copyright.txt for details.
//>>built
define("dojo/_base/lang dojo/promise/all dojo/Deferred ../../support/GraphicsManager ../../../Graphic ../../../core/Accessoire ../../../core/AccessoirePromise ../../../core/Evented ../../../core/Collection ../../../core/HandleRegistry ../../../geometry/support/scaleUtils".split(" "),function(k,l,m,n,p,q,r,s,t,u,f){return q.createSubclass([r,s],{declaredClass:"esri.layers.graphics.controllers.SnapshotController",classMetadata:{properties:{isQueryInProgress:{dependsOn:["_queryDfd"]},graphics:{type:t.ofType(p)},
extent:{},hasFeatures:{},hasAllFeatures:{}}},constructor:function(){this._queryError=this._queryError.bind(this);this._queryCanceller=this._queryCanceller.bind(this);this._collectionChanged=this._collectionChanged.bind(this);this.refresh=this.refresh.bind(this);this._handles=new u},initialize:function(){this.addResolvingPromise(l([this.layer,this.layerView]));this.then(this._startup.bind(this))},destroy:function(){this.cancelQuery();this._gManager&&(this._gManager.destroy(),this._gManager=null);this._handles.destroy();
this._handles=null},graphics:null,_graphicsSetter:function(a,b){if(b===a)return b;this._handles.remove("graphics");a&&(this._collectionChanged({added:a.toArray()}),this._handles.add(a.on("change",this._collectionChanged),"graphics"));return a},hasAllFeatures:!1,hasFeatures:!1,isQueryInProgress:!1,_isQueryInProgressGetter:function(){return!(!this._queryDfd||this._queryDfd.isFulfilled())},layer:null,layerView:null,maxPageSize:null,pageSize:null,paginationEnabled:!1,_cancelErrorMsg:"SnapshotController: query cancelled",
_currentPageDfd:null,_featureResolution:{value:1,scale:3780},_gManager:null,_handles:null,_maxFeatures:{point:16E3,multipoint:8E3,polyline:4E3,polygon:4E3,multipatch:4E3},_queryDfd:null,_source:null,refresh:function(){this.isResolved()&&this._queryFeatures()},cancelQuery:function(){this.isQueryInProgress&&(this._queryDfd.cancel(Error(this._cancelErrorMsg)),this._queryDfd=null)},_startup:function(){var a=this.layer,b=a.advancedQueryCapabilities;this.paginationEnabled=!(!b||!b.supportsPagination);this._source=
a.source;this.pageSize=null==this.maxPageSize?a.maxRecordCount:Math.min(a.maxRecordCount,this.maxPageSize);this._resolutionParams=this._getResolutionParams();this._gManager=new n({graphics:this.graphics,objectIdField:a.objectIdField});this._setupStateWatchers();this._queryFeatures()},_getResolutionParams:function(){var a=this.layer,b=a.supportsCoordinatesQuantization,c;if(!a.editable&&("polyline"===a.geometryType||"polygon"===a.geometryType)){var d=f.getUnitValue(this.layerView.view.spatialReference);
null!=d&&(c=this._featureResolution.scale,d=this._featureResolution.value/d,c=a.maxScale?a.maxScale:a.minScale?Math.min(c,a.minScale):Math.min(c,f.getScale(this.layerView.view,a.fullExtent)),c*=d/this._featureResolution.scale)}return!c?null:{maxAllowableOffset:b?null:c,quantizationParameters:b?{mode:"view",originPosition:"upperLeft",tolerance:c,extent:a.fullExtent}:null}},_setupStateWatchers:function(){this._handles.add([this.watch("extent",this.refresh),this.layer.watch("definitionExpression",this.refresh)])},
_createQueryParams:function(){var a=this.layerView,b=this.layer.createQuery();b.outSpatialReference=a.view.spatialReference;b.geometry=this.extent;k.mixin(b,this._resolutionParams);this.paginationEnabled&&(b.start=0,b.num=this.pageSize);return b},_queryFeatures:function(){this.cancelQuery();this.hasAllFeatures=this.hasFeatures=!1;this._queryDfd=new m(this._queryCanceller);this._gManager.beginUpdate();this.emit("query-start");this._executeQuery(this._createQueryParams())},_executeQuery:function(a){this._currentPageDfd=
this._source.queryFeatures(a).then(this._processFeatureSet.bind(this,a),this._queryError)},_processFeatureSet:function(a,b){var c=b.exceededTransferLimit,d=b.features,e=this.layer.geometryType.toLowerCase().replace(/^esriGeometry/i,""),g=this._maxFeatures[e]||0,e=d?d.length:0,f=this._gManager.graphics.length+e,h=f>=g;h&&(g=f-g)&&d.splice(e-g,g);e=c&&this.paginationEnabled&&!h?this._queryNextPage(a):!1;d&&this._gManager.add(d);this.hasFeatures=!0;e||(this._gManager.endUpdate(),this.hasAllFeatures=
!c,this._queryDfd.resolve(),this._queryDfd=null,this.emit("query-end",{success:!0}));return b},_queryNextPage:function(a){a.start+=this.pageSize;this._executeQuery(a);return!0},_queryError:function(a){a&&"cancel"===a.dojoType&&!this.hasFeatures?this._gManager.revertUpdate():this._gManager.endUpdate();this._queryDfd.reject(a);this._queryDfd=null;this.emit("query-end",{success:!1})},_queryCanceller:function(a){var b=this._currentPageDfd;b&&!b.isFulfilled()&&b.cancel(a)},_collectionChanged:function(a){var b,
c,d;if(d=a.added)for(b=0;c=d[b];b++)c.layer=this.layer;if(d=a.removed)for(b=0;c=d[b];b++)c.layer=null}})});