// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.1/esri/copyright.txt for details.
//>>built
define(["../../core/declare","dojo/_base/lang","./ClassificationDefinition"],function(d,c,e){return d(e,{declaredClass:"esri.tasks.support.ClassBreaksDefinition",breakCount:null,classificationField:null,classificationMethod:null,normalizationField:null,normalizationType:null,standardDeviationInterval:null,type:"classBreaksDef",toJSON:function(){var b=this.inherited(arguments),a;switch(this.classificationMethod.toLowerCase()){case "natural-breaks":a="esriClassifyNaturalBreaks";break;case "equal-interval":a=
"esriClassifyEqualInterval";break;case "quantile":a="esriClassifyQuantile";break;case "standard-deviation":a="esriClassifyStandardDeviation";break;case "geometrical-interval":a="esriClassifyGeometricalInterval";break;default:a=this.classificationMethod}c.mixin(b,{type:this.type,classificationField:this.classificationField,classificationMethod:a,breakCount:this.breakCount});if(this.normalizationType){switch(this.normalizationType.toLowerCase()){case "field":a="esriNormalizeByField";break;case "log":a=
"esriNormalizeByLog";break;case "percent-of-total":a="esriNormalizeByPercentOfTotal";break;default:a=this.normalizationType}c.mixin(b,{normalizationType:a})}this.normalizationField&&c.mixin(b,{normalizationField:this.normalizationField});this.standardDeviationInterval&&c.mixin(b,{standardDeviationInterval:this.standardDeviationInterval});return b}})});