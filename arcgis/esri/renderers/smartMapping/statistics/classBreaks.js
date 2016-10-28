// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.1/esri/copyright.txt for details.
//>>built
define("require exports dojo/_base/lang dojo/Deferred ../../../tasks/support/GenerateRendererParameters ../../../tasks/GenerateRendererTask ./support/utils".split(" "),function(y,z,n,l,q,r,c){function s(b,a,e){(new r({url:a.parsedUrl.path,gdbVersion:a.gdbVersion})).execute(e).then(function(a){b.resolve(a)}).otherwise(function(a){b.reject(c.createError("classBreaks","Generate renderer operation failed."))})}function t(b,a){var e=b.layer,d=new l;if(e.url&&10.1<=e.version){var h=c.createCBDefn(b,a),
k=c.getGRWhereInfo(b).where,f=c.getFieldExpr(b,b.normalizationTotal),f=c.getRangeExpr(f,b.minValue,b.maxValue),g=new q;g.classificationDefinition=h;g.where=k?k+(f?" AND "+f:""):f;e.then(function(){s(d,e,g)})}else d.reject(c.createError("classBreaks","Generate renderer operation requires server version 10.1 or later."));return d.promise}function p(b,a,c){var d=c.classBreakInfos,h=d[0].minValue,k=d[d.length-1].maxValue,f="standard-deviation"===a.classificationMethod,g=u,d=d.map(function(a){var b=a.label;
a={minValue:a.minValue,maxValue:a.maxValue,label:b};if(f&&b){var c=b.match(g).map(function(a){return+n.trim(a)});2===c.length?(a.minStdDev=c[0],a.maxStdDev=c[1],0>c[0]&&0<c[1]&&(a.hasAvg=!0)):1===c.length&&(-1<b.indexOf("\x3c")?(a.minStdDev=null,a.maxStdDev=c[0]):-1<b.indexOf("\x3e")&&(a.minStdDev=c[0],a.maxStdDev=null))}return a});b.resolve({minValue:h,maxValue:k,classBreakInfos:d,normalizationTotal:c.normalizationTotal})}function v(b,a){var e=new l,d=b.minValue,h=b.maxValue;if(d>=h||!a||1>a)e.reject(c.createError("classBreaks",
"invalid input parameters: minValue, maxValue or numClasses."));else{for(var k=[],f=(h-d)/a,g=0;g<a;g++){var m=d+g*f;k.push({minValue:m,maxValue:m+f})}k[a-1].maxValue=h;e.resolve({classBreakInfos:k,normalizationTotal:b.normalizationTotal})}return e.promise}function w(b,a){var e=a.layer,d=a.minValue,h=a.maxValue,k=null!=d||null!=h,f=a.classificationMethod,g="percent-of-total"===a.normalizationType,m=a.numClasses||x,l=!1!==a.analyzeData,n=e.getField(a.field);if(!c.verifyNumericField(b,e,n,"classBreaks")){if(k)if(l){if(g&&
null==a.normalizationTotal){b.reject(c.createError("classBreaks","normalizationTotal is required when minValue/maxValue are specified."));return}}else{if(null==d||null==h){b.reject(c.createError("classBreaks","both minValue AND maxValue are required when data analysis is disabled."));return}if(f&&"equal-interval"!==f){b.reject(c.createError("classBreaks","data analysis can be disabled only for equal-interval classification."));return}if(g&&null==a.normalizationTotal){b.reject(c.createError("classBreaks",
"normalizationTotal is required when data analysis is disabled."));return}}else if(!l){b.reject(c.createError("classBreaks","both minValue AND maxValue are required when data analysis is disabled."));return}l?t(a,m).then(function(c){p(b,a,c)}).otherwise(function(a){b.reject(c.createError("classBreaks","unable to calculate class breaks."))}):v(a,m).then(function(c){p(b,a,c)}).otherwise(function(a){b.reject(c.createError("classBreaks","unable to calculate class breaks."))})}}var x=5,u=/\s*(\+|-)?((\d+(\.\d+)?)|(\.\d+))\s*/gi;
return function(b){var a=new l;!b||!b.layer||!b.field?a.reject(c.createError("classBreaks","'layer' and 'field' parameters are required.")):b.layer.then(function(){w(a,b)});return a.promise}});