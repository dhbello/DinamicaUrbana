// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.1/esri/copyright.txt for details.
//>>built
define(["../../core/declare","dojo/_base/lang","./ClassificationDefinition"],function(c,b,d){return c(d,{declaredClass:"esri.tasks.support.UniqueValueDefinition",attributeField:null,attributeField2:null,attributeField3:null,fieldDelimiter:null,type:"uniqueValueDef",toJSON:function(){var a=this.inherited(arguments);this.uniqueValueFields=[];this.attributeField&&this.uniqueValueFields.push(this.attributeField);this.attributeField2&&this.uniqueValueFields.push(this.attributeField2);this.attributeField3&&
this.uniqueValueFields.push(this.attributeField3);b.mixin(a,{type:this.type,uniqueValueFields:this.uniqueValueFields});this.fieldDelimiter&&b.mixin(a,{fieldDelimiter:this.fieldDelimiter});return a}})});