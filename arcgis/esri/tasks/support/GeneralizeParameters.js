// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.1/esri/copyright.txt for details.
//>>built
define(["../../core/Accessoire","../../core/declare","../../core/kebabDictionary","../../geometry/support/jsonUtils","dojo/_base/array"],function(b,c,d,e,f){var g=d({109006:"centimeters",9102:"decimal-degrees",109005:"decimeters",9002:"feet",109009:"inches",9036:"kilometers",9001:"meters",9035:"miles",109007:"millimeters",109012:"nautical-miles",9096:"yards"});return c(b,{declaredClass:"esri.tasks.support.GeneralizeParameters",geometries:null,deviationUnit:null,maxDeviation:null,toJSON:function(){var b=
f.map(this.geometries,function(a){return a.toJSON()}),a={};this.geometries&&0<this.geometries.length&&(a.geometries=JSON.stringify({geometryType:e.getJsonType(this.geometries[0]),geometries:b}),a.sr=JSON.stringify(this.geometries[0].spatialReference.toJSON()));this.deviationUnit&&(a.deviationUnit=g.toJSON(this.deviationUnit));this.maxDeviation&&(a.maxDeviation=this.maxDeviation);return a}})});