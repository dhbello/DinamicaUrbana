// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.1/esri/copyright.txt for details.
//>>built
define(["../../core/declare","../../core/Accessoire"],function(e,f){return e(f,{declaredClass:"esri.tasks.support.RelationshipQuery",definitionExpression:"",geometryPrecision:null,maxAllowableOffset:null,objectIds:null,outFields:null,outSpatialReference:null,relationshipId:null,returnGeometry:!1,toJSON:function(){var a={definitionExpression:this.definitionExpression,relationshipId:this.relationshipId,returnGeometry:this.returnGeometry,maxAllowableOffset:this.maxAllowableOffset,geometryPrecision:this.geometryPrecision},
c=this.objectIds,d=this.outFields,b=this.outSpatialReference;c&&(a.objectIds=c.join(","));d&&(a.outFields=d.join(","));b&&(a.outSR=b.wkid||JSON.stringify(b.toJSON()));a._ts=this._ts;return a}})});