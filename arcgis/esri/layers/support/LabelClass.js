// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.1/esri/copyright.txt for details.
//>>built
define("../../core/JSONSupport ../../core/lang ../../core/kebabDictionary dojo/_base/lang dojo/number ../../PopupTemplate ../../widgets/Popup/PopupRendererViewModel ../../symbols/support/jsonUtils".split(" "),function(n,p,q,k,r,s,t,l){var m=q({esriServerPointLabelPlacementAboveCenter:"above-center",esriServerPointLabelPlacementAboveLeft:"above-left",esriServerPointLabelPlacementAboveRight:"above-right",esriServerPointLabelPlacementBelowCenter:"below-center",esriServerPointLabelPlacementBelowLeft:"below-left",
esriServerPointLabelPlacementBelowRight:"below-right",esriServerPointLabelPlacementCenterCenter:"center-center",esriServerPointLabelPlacementCenterLeft:"center-left",esriServerPointLabelPlacementCenterRight:"center-right",esriServerLinePlacementAboveAfter:"above-after",esriServerLinePlacementAboveAlong:"above-along",esriServerLinePlacementAboveBefore:"above-before",esriServerLinePlacementAboveStart:"above-start",esriServerLinePlacementAboveEnd:"above-end",esriServerLinePlacementBelowAfter:"below-after",
esriServerLinePlacementBelowAlong:"below-along",esriServerLinePlacementBelowBefore:"below-before",esriServerLinePlacementBelowStart:"below-start",esriServerLinePlacementBelowEnd:"below-end",esriServerLinePlacementCenterAfter:"center-after",esriServerLinePlacementCenterAlong:"center-along",esriServerLinePlacementCenterBefore:"center-before",esriServerLinePlacementCenterStart:"center-start",esriServerLinePlacementCenterEnd:"center-end",esriServerPolygonPlacementAlwaysHorizontal:"always-horizontal"}),
h=n.createSubclass({declaredClass:"esri.layers.support.LabelClass",properties:{labelExpression:{value:null,json:{writable:!0}},labelExpressionInfo:{value:null,json:{write:function(a,b){b.labelExpressionInfo=k.clone(a)}}},labelPlacement:{value:null,json:{read:function(a,b){return m.fromJSON(a)},write:function(a,b){var d=m.toJSON(a);d&&(b.labelPlacement=d)}}},maxScale:{value:0,json:{write:function(a,b){if(a||this.minScale)b.maxScale=a}}},minScale:{value:0,json:{write:function(a,b){if(a||this.maxScale)b.minScale=
a}}},requiredFields:{readOnly:!0,dependsOn:["labelExpression","labelExpressionInfo","where"],get:function(){var a=Object.create(null);this._collectRequiredFields(a);return Object.keys(a)}},symbol:{value:null,json:{read:l.read,write:function(a,b,d){b.symbol=l.write(a,{},d)}}},useCodedValues:{value:null,json:{writable:!0}},where:{value:null,json:{writable:!0}}},getLabelExpression:function(){return this.labelExpressionInfo?this.labelExpressionInfo.value:this._validateLabelExpression(this.labelExpression)?
this._convertLabelExpression(this.labelExpression):""},_collectRequiredFields:function(a){this._collectLabelExpressionRequiredFields(this.getLabelExpression(),a);this._collectWhereRequiredFields(this.where,a)},_validateLabelExpression:function(a){return/^(\s*\[[^\]]+\]\s*)+$/i.test(a)},_convertLabelExpression:function(a){return a.replace(/\[/g,"{").replace(/\]/g,"}")},_collectWhereRequiredFields:function(a,b){if(null!=a){var d=a.split(" ");3===d.length&&(b[d[0]]=!0);7===d.length&&(b[d[0]]=!0,b[d[4]]=
!0)}},_collectLabelExpressionRequiredFields:function(a,b){var d=a.match(/{[^}]*}/g);d&&d.forEach(function(a){b[a.slice(1,-1)]=!0})}});h.evaluateWhere=function(a,b){var d=function(a,b,c){switch(b){case "\x3d":return a==c?!0:!1;case "\x3c\x3e":return a!=c?!0:!1;case "\x3e":return a>c?!0:!1;case "\x3e\x3d":return a>=c?!0:!1;case "\x3c":return a<c?!0:!1;case "\x3c\x3d":return a<=c?!0:!1}return!1};try{if(null==a)return!0;var e=a.split(" ");if(3===e.length)return d(b[e[0]],e[1],e[2]);if(7===e.length){var f=
d(b[e[0]],e[1],e[2]),g=e[3],c=d(b[e[4]],e[5],e[6]);switch(g){case "AND":return f&&c;case "OR":return f||c}}return!1}catch(h){console.log("Error.: can't parse \x3d "+a)}};h.buildLabelText=function(a,b,d,e){return a.replace(/{[^}]*}/g,function(a){return h.formatField(a.slice(1,-1),a,b,d,e)})};h.formatField=function(a,b,d,e,f){var g;for(g=0;g<e.length;g++)if(e[g].name==a){b=d[e[g].name];var c=e[g].domain;if(c&&k.isObject(c)){if("codedValue"==c.type)for(a=0;a<c.codedValues.length;a++)c.codedValues[a].code==
b&&(b=c.codedValues[a].name);else"range"==c.type&&(c.minValue<=b&&b<=c.maxValue)&&(b=c.name);break}c=e[g].type;if("date"==c)c=f&&f.dateFormat||"shortDate",c=s.prototype._dateFormatKebabDict.fromJSON(c),(c="DateFormat"+t.prototype._dateFormats[c])&&(b=p.substitute({myKey:b},"{myKey:"+c+"}"));else if("integer"==c||"small-integer"==c||"long"==c||"double"==c)f&&(f.numberFormat&&f.numberFormat.digitSeparator&&f.numberFormat.places)&&(b=r.format(b,{places:f.numberFormat.places}))}return null==b?"":b};return h});