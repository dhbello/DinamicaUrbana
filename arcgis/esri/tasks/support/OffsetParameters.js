// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.1/esri/copyright.txt for details.
//>>built
define(["../../core/Accessoire","../../core/declare","../../core/kebabDictionary","../../geometry/support/jsonUtils","dojo/_base/lang"],function(c,d,b,e,h){var f=b({esriGeometryOffsetBevelled:"bevelled",esriGeometryOffsetMitered:"mitered",esriGeometryOffsetRounded:"rounded"}),g=b({9001:"meters",9002:"feet",9036:"kilometers",9093:"miles",109012:"nautical-miles",109001:"yards"});return d(c,{declaredClass:"esri.tasks.support.OffsetParameters",bevelRatio:null,geometries:null,offsetDistance:null,offsetHow:null,
offsetUnit:null,toJSON:function(){var a={};if(this.geometries&&0<this.geometries.length){var b=this.geometries.map(function(a){return a.toJSON()});a.geometries=JSON.stringify({geometryType:e.getJsonType(this.geometries[0]),geometries:b});a.sr=JSON.stringify(this.geometries[0].spatialReference.toJSON())}this.bevelRatio&&(a.bevelRatio=this.bevelRatio);this.offsetDistance&&(a.offsetDistance=this.offsetDistance);this.offsetHow&&(a.offsetHow=f.toJSON(this.offsetHow));this.offsetUnit&&(a.offsetUnit=g.toJSON(this.offsetUnit));
return a}})});