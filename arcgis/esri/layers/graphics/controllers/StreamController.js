// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.1/esri/copyright.txt for details.
//>>built
define("../../../core/declare dojo/_base/lang dojo/promise/all dojo/Deferred ../../../core/Accessoire ../../../core/HandleRegistry ../../../core/AccessoirePromise ../../../core/Evented ../../../core/promiseUtils ../../support/StreamPurger ../../../Graphic ../../../geometry/support/jsonUtils ../../../tasks/support/Query".split(" "),function(l,h,m,k,n,p,q,r,g,s,t,u,v){return l([n,q,r],{declaredClass:"esri.layers.graphics.controllers.StreamController",classMetadata:{properties:{layer:{}}},constructor:function(){this._addFeatures=
h.hitch(this,this._addFeatures);this._handleMessage=h.hitch(this,this._handleMessage);this._handleRegistry=new p;this._nextId=0;this._socketConnector=null;this._filter={geometry:null,where:null}},initialize:function(){var a=new k;m([this.layer,this.layerView]).then(function(){this.source=this.layer.source;this.graphics=this.graphics||this.layer.graphics;this._filter.geometry=this.layer.geometryDefinition||null;this._filter.where=this.layer.definitionExpression||null;var b=new s(this);b.then(function(){this.purger=
b;this._handleRegistry.add(this.watch("layer.requestedDefinitionExpression",function(a){a={where:a};this._filterValid(a)&&this._filterChanged(a)&&this._setFilter(a)}));this._handleRegistry.add(this.watch("layer.requestedGeometryDefinition",function(a){a={geometry:a};this._filterValid(a)&&this._filterChanged(a)&&this._setFilter(a)}));this._makeConnection()}.bind(this),function(b){this.addResolvingPromise(a.promise);a.reject(b)})}.bind(this));return a.promise},destroy:function(){this._socketConnector&&
(this._disconnect(),this._socketConnector=null);this._gfxColHdl&&(this._gfxColHdl.remove(),this._gfxColHdl=null);this.purger&&(this.purger.destroy(),this.purger=null);this.graphics=null;this._handleRegistry&&(this._handleRegistry.destroy(),this._handleRegistry=null)},graphics:null,_gfxColHdl:null,_graphicsSetter:function(a){var b=this.graphics;if(b===a)return b;this._gfxColHdl&&(this._gfxColHdl.remove(),this._gfxColHdl=null,b.forEach(function(a){a.layer=null}));a&&(a.forEach(function(a){a.layer=this.layer},
this),this._gfxColHdl=a.on("change",h.hitch(this,function(a){var b,f,d;d=a.added;for(b=0;f=d[b];b++)f.layer=this.layer;d=a.removed;for(b=0;f=d[b];b++)f.layer=null})));return a},_definitionExpressionSetter:function(a){var b=this._filter.where;a={definitionExpression:a};if(!this._filterValid(a)||!this._filterChanged(a))return b;this._setFilter(a)},_definitionExpressionGetter:function(){return this._filter.where},_geometryDefinitionSetter:function(a){var b=this._filter.geometry;a={geometryDefinition:a};
if(!this._filterValid(a)||!this._filterChanged(a))return b;this._setFilter(a)},currentSocketUrl:null,_geometryDefinitionGetter:function(){return this._filter.geometry},connect:function(){this._connect()},disconnect:function(){this._disconnect()},_makeConnection:function(){this._handleRegistry.remove("websocket");return this._addBuddiedServiceFeatures(!0).then(function(){return this._addBuddiedServiceFeatures(!1)}.bind(this),function(a){return g.reject(Error("Error fetching related features. Layer cannot be created"))}.bind(this)).then(function(a){return this.source.createWebSocketConnector(this.layerView.view.spatialReference)}.bind(this)).then(function(a){this._socketConnector=
a;this._handleRegistry.add(a.on("connect",function(){this.emit("connect")}.bind(this)),"websocket");this._handleRegistry.add(a.on("disconnect",function(a){this.emit("disconnect",a)}.bind(this)),"websocket");this._handleRegistry.add(a.on("attempt-reconnect",function(a){this.emit("attempt-reconnect",a)}.bind(this)),"websocket");this._handleRegistry.add(a.on("message",function(a){this._handleMessage(a)}.bind(this)),"websocket");this._handleRegistry.add(a.watch("currentSocketUrl",function(a){this.currentSocketUrl=
a}.bind(this)),"websocket");a.connect()}.bind(this)).otherwise(function(a){this.emit("error",a)}.bind(this))},_connect:function(){this._socketConnector&&this._socketConnector.connect()},_disconnect:function(){this._socketConnector&&this._socketConnector.disconnect()},_handleMessage:function(a){a=JSON.parse(a);this.emit("message",a);a.hasOwnProperty("filter")?this._handleFilterMessage(a):(a=a instanceof Array?a:[a],this._addFeatures(a))},_addFeatures:function(a){if(a){for(var b=this.layer.objectIdField,
c=[],e=0,f=a.length;e<f;e++){var d=a[e];if(!d.attributes||!(d.attributes[b]||0===d.attributes[b])){if(!d.geometry)continue;d.attributes=d.attributes||{};d.attributes[b]=this._nextId++}d=d.declaredClass?d:t.fromJSON(d);c.push(d)}this.purger.addMany(c)}},_filterChanged:function(a){var b=!1,c=!1;a=a?this.source.makeFilter(a):{geometry:null,where:null};a.hasOwnProperty("geometry")&&(b=a.geometry?!a.geometry.equals(this._filter.geometry):a.geometry!==this._filter.geometry);a.hasOwnProperty("where")&&(c=
a.where!==this._filter.where);return b||c},_filterValid:function(a){var b=!0;if(a){if(a.hasOwnProperty("geometryDefinition")&&a.geometryDefinition&&(!a.geometryDefinition.type||"extent"!==a.geometryDefinition.type))b=!1;b&&a.hasOwnProperty("definitionExpression")&&a.definitionExpression&&"string"!==typeof a.definitionExpression&&(b=!1)}return b},_setFilter:function(a){a=this.source.makeFilter(a);a.geometry&&"string"!==typeof a&&(a.geometry=JSON.stringify(a.geometry.toJSON()));this._socketConnector.send({filter:a||
null})},_handleFilterMessage:function(a){var b;if(a.error)b=Error(a.error.join(",")),this.emit("filter-change",{filter:a.filter,error:b});else{b=a.filter.where?a.filter.where:null;if(a=a.filter.geometry?a.filter.geometry:null)"string"===typeof a&&(a=JSON.parse(a)),a=u.fromJSON(a);this._filter.geometry=a;this._filter.where=b;this.notifyChange("definitionExpression");this.notifyChange("geometryDefinition");this.emit("filter-change",{filter:this._filter})}},_addBuddiedServiceFeatures:function(a){var b,
c;if(a){if(!this.source.relatedFeaturesInfo)return g.resolve();a=this.source.relatedFeaturesQueryTask;b=this.source.relatedLayerDefinition;c=this._createQuery(b,!0)}else{if(!this.source.latestUrl)return g.resolve();a=this.source.latestQueryTask;b=this.source.archivedLayerDefinition;c=this._createQuery(b,!1)}if((b.advancedQueryCapabilities||{}).supportsPagination)c.num=b.maxRecordCount;return this._query({query:c,queryTask:a}).then(function(a){a&&this._addFeatures(a.features);return g.resolve()}.bind(this),
function(a){return g.reject(a)},function(a){a&&this._addFeatures(a.features)}.bind(this))},_query:function(a){var b=a.query,c=a.queryTask,e=new k;b.num&&(b.start=0);var f=function(a){if(a||0===a)b.start=a;c.execute(b).then(d,function(a){console.log("error performing query: ",a);e.reject(a)})},d=function(a){a.exceededTransferLimit&&b.num?(f(b.start+b.num),e.progress(a)):e.resolve(a)};f(b.start);return e.promise},_createQuery:function(a,b){var c=this.layer,e=this.layerView,f=c.outFields.slice(0),d=
c.definitionExpression||"1\x3d1";if(b){var g=this._getFieldsNotShared(a,this.layer.fields),f=this._removeInvalidOutfields(g,f);"1\x3d1"!==d&&this._checkForInvalidFieldInWhere(g,d)&&(d="1\x3d1")}f=this._addObjectIdFieldToOutfields(a,f);return new v({where:d,geometry:c.geometryDefinition,outFields:f,outSpatialReference:e.view.spatialReference,returnGeometry:!0})},_addObjectIdFieldToOutfields:function(a,b){b=b||["*"];if("*"!==b[0]){var c=this._getObjectIdFieldName(a);c&&(b.some(function(a){return a.toLowerCase()===
c.toLowerCase()})||b.push(c))}return b},_removeInvalidOutfields:function(a,b){b=b||["*"];if("*"!==b[0])var c=a.join(",").toLowerCase(),e=b.filter(function(a){if(!RegExp("\\s*"+a+"\\b","i").test(c))return a});return!e||0===e.length?["*"]:e},_checkForInvalidFieldInWhere:function(a,b){return!b||"1\x3d1"===b?!1:a.some(function(a){return RegExp("\\s*"+a+"\\b","i").test(b)})},_getObjectIdFieldName:function(a){var b=null;a.fields.some(function(a){return"esriFieldTypeOID"===a.type?(b=a.name,!0):!1});return b},
_getFieldsNotShared:function(a,b){var c=a.fields.map(function(a){return a.name}).join(",").toLowerCase(),e=[];b.forEach(function(a){a=a.name.toLowerCase();-1===c.indexOf(a+",")&&e.push(a)});return e}})});