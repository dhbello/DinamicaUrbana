// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.1/esri/copyright.txt for details.
//>>built
define("require exports ../core/tsSupport/declareExtendsHelper ../core/tsSupport/decorateHelper ../core/accessorSupport/decorators dojo/_base/lang ../core/requireUtils ./FeatureLayer".split(" "),function(g,p,h,d,c,k,l,m){var n=this;return function(f){function a(e,a){f.call(this);this.fields=[];this.longitudeField=this.latitudeField=this.delimiter=null;this.labelsVisible=!1;this.outFields=["*"];this.type="csv"}h(a,f);a.prototype.normalizeCtorArgs=function(e,a){return"string"===typeof e?k.mixin({},
{url:e},a):e};a.prototype.createGraphicsSource=function(){var a=this;return l.when(g,"./graphics/sources/CSVSource").then(function(b){return new b({url:a.url,delimiter:a.delimiter,latitudeField:a.latitudeField,longitudeField:a.longitudeField,fields:a.fields,outFields:a.outFields})}).then(function(b){a.fields=b.fields.map(function(a){return a});a.delimiter=b.delimiter;a.latitudeField=b.latitudeField;a.longitudeField=b.longitudeField;return b})};a.prototype._verifyFields=function(){};d([c.property({json:{readFrom:"layerDefinition.fields"}})],
a.prototype,"fields",void 0);d([c.property({json:{readFrom:"columnDelimiter"}})],a.prototype,"delimiter",void 0);d([c.property({json:{readFrom:"locationInfo.latitudeFieldName"}})],a.prototype,"latitudeField",void 0);d([c.property({json:{readFrom:"locationInfo.longitudeFieldName"}})],a.prototype,"longitudeField",void 0);d([c.property({dependsOn:["labelingInfo"],json:{readFrom:"drawingInfo.labelingInfo",read:function(a,b){return!(!b.drawingInfo||!b.drawingInfo.labelingInfo)}},get:function(){return!!n.labelingInfo}})],
a.prototype,"labelsVisible",void 0);d([c.property()],a.prototype,"outFields",void 0);d([c.property({json:{readable:!1}})],a.prototype,"type",void 0);return a=d([c.subclass("esri.layers.CSVLayer")],a)}(c.declared(m))});