// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.1/esri/copyright.txt for details.
//>>built
define("require module dojo/_base/array dojo/_base/lang dojo/Deferred ../Color ../core/numberUtils ../styles/type ../styles/size ../styles/choropleth ../styles/heatmap ../symbols/SimpleMarkerSymbol ../symbols/SimpleLineSymbol ../symbols/SimpleFillSymbol ./UniqueValueRenderer ./ClassBreaksRenderer ./HeatmapRenderer ./support/utils dojo/i18n!./nls/smartMapping".split(" "),function(R,fa,u,B,r,w,E,S,T,U,V,ga,L,ha,ia,F,ja,x,ka){function g(a,b){a.reject(Error(b))}function t(a,b,c,d){var e;switch(c){case "point":e=
new ga;e.setColor(b);e.setSize(null!=d?d:a.size);b=new L;b.setColor(a.outline.color);b.setWidth(a.outline.width);e.setOutline(b);break;case "polyline":e=new L;e.setColor(b);e.setWidth(null!=d?d:a.width);break;case "polygon":e=new ha,e.setColor(b),b=new L,b.setColor(a.outline.color),b.setWidth(a.outline.width),e.setOutline(b)}return e}function W(a,b){var c=a.scheme;c=c?S.cloneScheme(c):(c=S.getSchemes({theme:a.theme||la,basemap:a.basemap,geometryType:b}))&&c.primaryScheme;return c}function X(a,b){return a.label<
b.label?-1:a.label>b.label?1:0}function Y(a,b){return a.value<b.value?-1:a.value>b.value?1:0}function ma(a,b){var c=b.count-a.count;0===c&&(c=X(a,b));return c}function na(a,b){var c=b.count-a.count;0===c&&(c=Y(a,b));return c}function oa(a,b,c){var d;"count"===b?(d=na,c&&c.codedValues&&(d=ma)):"value"===b&&(d=Y,c&&c.codedValues&&(d=X));d&&a.sort(d)}function pa(a,b,c){var d=a.uniqueValueInfos,e=b.layer,f=b.field,h=e.getField(f),g=e.getDomain(h.name),m,n=-1,k,p=null==b.numTypes?10:-1===b.numTypes?d.length:
b.numTypes,l=null==b.showOthers?!0:b.showOthers,M=null==b.sortBy?"count":b.sortBy,q=b&&b.labelCallback,s=e.geometryType,v=W(b,s),e=new ia({attributeField:f}),r={domain:g,fieldInfo:h};u.forEach(d,function(a,b){r.value=a.value;a.label=x.createUniqueValueLabel(r);q&&(a.label=q(a));null===a.value&&(n=b)});-1<n&&(k=d.splice(n,1)[0]);oa(d,M,g);r.dateFormatInterval=x.calculateDateFormatInterval(u.map(u.filter(d,function(a,b){return b<p}),function(a){return a.value}));m=z.createColors(v.colors,d.length);
u.forEach(d,function(a,b){r.value=a.value;a.label=x.createUniqueValueLabel(r);q&&(a.label=q(a));a.symbol=t(v,m[b],s)});m=z.createColors(v.colors,p);for(h=0;h<p;h++)(g=d[h])&&e.addValue({value:g.value,label:g.label,symbol:t(v,m[h],s)});l&&(e.defaultSymbol=t(v,v.noDataColor,s),e.defaultLabel=C.other);k&&(k.symbol=t(v,v.noDataColor,s),d.push(k));c.resolve({renderer:e,uniqueValueInfos:d,source:a.source,othersStartIndex:e.infos.length===d.length?-1:e.infos.length,scheme:W(b,s)})}function G(a,b,c){var d=
a.scheme;d=d?U.cloneScheme(d):(d=U.getSchemes({theme:c||a.theme||qa,basemap:a.basemap,geometryType:b}))&&d.primaryScheme;return d}function N(a){var b=a.avg,c=b-a.stddev,d=b+a.stddev;c<a.min&&(c=a.min);d>a.max&&(d=a.max);a=E.round([c,d]);c=a[0];d=a[1];a=[c,c+(b-c)/2,b,b+(d-b)/2,d];return E.round(a)}function ra(a,b,c){var d=(b-a)/(c-1),e,f=[a];for(e=1;e<=c-2;e++)f.push(a+e*d);f.push(b);return E.round(f)}function D(a,b){var c,d;if(null==a.min)c=0,d=100;else if(a.min===a.max)0>a.min?(c=2*a.min,d=0):0<
a.min?(c=0,d=2*a.min):(c=0,d=100);else if(b&&(null==a.avg||null==a.stddev))c=a.min,d=a.max;return null!=c?[c,d]:null}function O(a,b,c,d,e,f){var h=null==e.useDefaultStatistics?!0:e.useDefaultStatistics;if(a&&!a.count&&!h)g(f,"smartMapping.createColorRenderer: cannot create renderer when statistics.count is 0.");else{var y=e.field,m=e.layer.geometryType,n=null==e.showOthers?!0:e.showOthers,k=G(e,m),p=z.createColors(k.colors,k.colors.length),l=new F({attributeField:y});n&&(l.defaultSymbol=t(k,k.noDataColor,
m),l.defaultLabel=C.other);l.addBreak({minValue:-H,maxValue:H,symbol:t(k,k.noDataColor,m)});b?(n=u.map(b.classBreakInfos,function(a){return(a.minValue+a.maxValue)/2}),n=E.round(n),h=[0,1,2,3,4,5]):(n=(h=h?D(a,!0):null)?ra(h[0],h[1],5):N(a),h=[0,2,4]);l.normalizationType=c;l.normalizationField=d;l.visualVariables=[{type:"colorInfo",field:y,normalizationField:d,stops:x.createColorStops({values:n,dateFormatOptions:x.timelineDateFormatOptions,colors:p,labelIndexes:h})}];f.resolve({renderer:l,statistics:a,
classBreaks:b,scheme:G(e,m)})}}function Z(a,b,c,d){var e=null==c.useDefaultStatistics?!0:c.useDefaultStatistics;if(a&&!a.count&&!e)g(d,"smartMapping.createOpacityInfo: cannot create opacityInfo when statistics.count is 0.");else{var f=c.useStdDev,h=f?N(a):null,f=(e=e?D(a,f):null)||(f?[h[0],h[4]]:[a.min,a.max]);d.resolve({opacityInfo:{type:"opacityInfo",field:c.field,normalizationField:b,stops:[{value:f[0],opacity:0.3},{value:f[1],opacity:0.7}]},statistics:a,defaultStatistics:!!e})}}function I(a,b){var c=
a.scheme;c=c?T.cloneScheme(c):(c=T.getSchemes({theme:a.theme||sa,basemap:a.basemap,geometryType:b}))&&c.primaryScheme;return c}function $(a,b){var c;switch(b){case "point":c=[a.minSize,a.maxSize];break;case "polyline":c=[a.minWidth,a.maxWidth];break;case "polygon":c=[a.marker.minSize,a.marker.maxSize]}return c}function J(a,b,c,d,e,f){var h=null==e.useDefaultStatistics?!0:e.useDefaultStatistics;if(a&&!a.count&&!h)g(f,"smartMapping.createSizeRenderer: cannot create renderer when statistics.count is 0.");
else{var y=e.field,m=e.layer.geometryType,n=null==e.showOthers?!0:e.showOthers,k=I(e,m);b=b||$(k,m);var p="polygon"===m,l=p?k.marker:k,k=p?k.background:null,M="polyline"===m?l.noDataWidth:l.noDataSize,q=e.useStdDev,s=q?N(a):null,q=(h=h?D(a,q):null)||(q?[s[0],s[4]]:[a.min,a.max]),s=new F({attributeField:y});n&&(s.defaultSymbol=t(l,l.noDataColor,p?"point":m,M),s.defaultLabel=C.other);s.addBreak({minValue:-H,maxValue:H,symbol:t(l,l.color,p?"point":m)});k&&(s.backgroundFillSymbol=t(k,k.color,m));s.normalizationType=
c;s.normalizationField=d;s.visualVariables=[{type:"sizeInfo",field:y,valueUnit:"unknown",normalizationField:d,minSize:b[0],maxSize:b[1],minDataValue:q[0],maxDataValue:q[1]}];f.resolve({renderer:s,statistics:a,defaultStatistics:!!h,scheme:I(e,m)})}}function K(a,b,c){var d,e=[],f=1/(c+1);for(d=1;d<=c;d++)e.push(w.blendColors(a,b,f*d));return e}function aa(a,b){var c=[];if(1===b)c=[a[0]];else if(2===b)c=[a[0],a[2]];else if(3===b)c=a;else{var d=b-a.length,c=d/2;0===d%2?(d=K(a[0],a[1],c),c=K(a[1],a[2],
c)):(d=K(a[0],a[1],Math.floor(c)),c=K(a[1],a[2],Math.ceil(c)));c=[a[0]].concat(d).concat([a[1]]).concat(c).concat([a[2]])}return c}function ta(a,b,c){var d,e=b.length,f=-1;c&&u.some(b,function(a,b){a.hasAvg&&(f=b);return-1<f});if(-1<f){var h=a.colors;a=f+1;b=e-f;c=h.slice(0,3);h=h.slice(2);c.reverse();c=aa(c,a);h=aa(h,b);c.reverse();d=[].concat(c).concat(h.slice(1))}else if((a=a.colorsForClassBreaks)&&0<a.length)if(u.some(a,function(a){a.numClasses===e&&(d=a.colors);return!!d}),!d&&(c=a[a.length-
1],a=e-c.numClasses,0<a)){b=c.colors[c.numClasses-1];d=c.colors.splice(0);for(c=1;c<=a;c++)d.push(b)}d&&(d=z.createColors(d,d.length));return d}function ua(a,b,c){var d=b.field,e=b.layer.geometryType,f=null==b.showOthers?!0:b.showOthers,h=b.classificationMethod||"equal-interval",y="standard-deviation"===h,m=b.normalizationType,n,k,p,l=a.classBreakInfos;(n=G(b,e,"high-to-low"))?(k=ta(n,l),!k||k.length!=l.length?g(c,"smartMapping.createClassedColorRenderer: unable to find suitable colors for number of classes."):
(p=new F({attributeField:d}),p.classificationMethod=h,p.normalizationType=m,p.normalizationField="field"===m?b.normalizationField:void 0,p.normalizationTotal="percent-of-total"===m?a.normalizationTotal:void 0,f&&(p.defaultSymbol=t(n,n.noDataColor,e),p.defaultLabel=C.other),u.forEach(l,function(a,b){p.addBreak({minValue:a.minValue,maxValue:a.maxValue,symbol:t(n,k[b],e),label:a.label})}),y||x.setLabelsForClassBreaks({classBreaks:p.infos,classificationMethod:h,normalizationType:m,round:!0}),a.renderer=
p,a.scheme=G(b,e,"high-to-low"),c.resolve(a))):g(c,"smartMapping.createClassedColorRenderer: unable to find suitable style scheme.")}function ba(a,b,c){b.layer.statisticsPlugin.getClassBreaks(B.mixin(b,{classificationMethod:"equal-interval",numClasses:1,analyzeData:!1,minValue:a[0],maxValue:a[1],normalizationTotal:a[0]+a[1]})).then(function(a){a.defaultStatistics=!0;c.resolve(a)}).otherwise(function(a){g(c,"smartMapping: error when calculating default class breaks.")})}function ca(a){var b=new r,
c=a.layer,d=null==a.useDefaultBreaks?!0:a.useDefaultBreaks;c.statisticsPlugin.getClassBreaks(a).then(function(c){var f=d?D({min:c.minValue,max:c.maxValue}):null;f?ba(f,a,b):(c.defaultStatistics=!1,b.resolve(c))}).otherwise(function(e){c.graphics.length||!d?g(b,"smartMapping: error when calculating class breaks."):ba(D({}),a,b)});return b.promise}function va(a,b,c,d){b=d||$(a,b);a=b[0];b=(b[1]-a)/(4<=c?c-1:c);var e=[];for(d=0;d<c;d++)e.push(a+b*d);return e}function P(a,b,c,d){var e=c.field,f=c.layer.geometryType,
h=null==c.showOthers?!0:c.showOthers,g=c.classificationMethod||"equal-interval",m=c.normalizationType,n=a.classBreakInfos,k=I(c,f),p=va(k,f,n.length,b),l="polygon"===f,r=l?k.marker:k;b=l?k.background:null;var q;q=new F({attributeField:e});q.classificationMethod=g;q.normalizationType=m;q.normalizationField="field"===m?c.normalizationField:void 0;q.normalizationTotal="percent-of-total"===m?a.normalizationTotal:void 0;h&&(q.defaultSymbol=t(r,r.noDataColor,l?"point":f),q.defaultLabel=C.other);b&&(q.backgroundFillSymbol=
t(b,b.color,f));u.forEach(n,function(a,b){q.addBreak({minValue:a.minValue,maxValue:a.maxValue,symbol:t(r,r.color,l?"point":f,p[b]),label:a.label})});"standard-deviation"!==g&&x.setLabelsForClassBreaks({classBreaks:q.infos,classificationMethod:g,normalizationType:m,round:!0});a.renderer=q;a.scheme=I(c,f);d.resolve(a)}function Q(a){var b=a.scheme;b=b?V.cloneScheme(b):(b=V.getSchemes({theme:a.theme||wa,basemap:a.basemap}))&&b.primaryScheme;return b}function da(a,b,c){var d=null==b.useDefaultStatistics?
!0:b.useDefaultStatistics;if(!a.count&&!d)g(c,"smartMapping.createHeatmapRenderer: cannot create renderer when statistics.count is 0.");else{var e=a.fieldOffset,f=null==b.blurRadius?10:b.blurRadius,h=null==b.minRatio?0.01:b.minRatio,r=null==b.maxRatio?1:b.maxRatio,m=null==b.fadeToTransparent?!0:b.fadeToTransparent,n=Q(b).colors,k=n.length,p=(d=!a.count&&d)?[0,100]:[a.min,a.max],l=new ja;l.setBlurRadius(f);l.setField(b.field);null!=e&&l.setFieldOffset(e);l.setMinPixelIntensity(p[0]);l.setMaxPixelIntensity(p[1]);
var e=n[0],t=[{ratio:0,color:new w([e.r,e.g,e.b,0])},{ratio:ea,color:new w([e.r,e.g,e.b,0])},{ratio:m?h:ea,color:e}],q=(r-h)/(k-1),n=z.createColors(n,k);u.forEach(n,function(a,b){t.push({ratio:h+q*b,color:a})});l.setColorStops(t);c.resolve({renderer:l,statistics:a,defaultStatistics:d,scheme:Q(b)})}}var z={},H=Math.pow(2,53)-1,C=ka,la="default",qa="high-to-low",sa="default",wa="default",ea=0.01,A=R.toAbsMid?R.toAbsMid("../plugins/FeatureLayerStatistics"):fa.id.replace(/\/[^\/]*$/ig,"/")+"../plugins/FeatureLayerStatistics";
B.mixin(z,{createColors:function(a,b){var c=[],d=a.length,e;for(e=0;e<b;e++)c.push(new w(a[e%d]));return c},createTypeRenderer:function(a){var b=new r;if(!a||!a.layer||!a.field||!a.scheme&&!a.basemap)return g(b,"smartMapping.createTypeRenderer: missing parameters."),b.promise;var c=a.layer;c.addPlugin(A).then(function(){c.statisticsPlugin.getUniqueValues({field:a.field,includeAllCodedValues:a.includeAllCodedValues}).then(function(c){pa(c,a,b)}).otherwise(function(a){g(b,"smartMapping.createTypeRenderer: error when calculating unique values.")})}).otherwise(function(a){g(b,
"smartMapping.createTypeRenderer: error when adding feature layer statistics plugin.")});return b.promise},createColorRenderer:function(a){var b=new r;if(!a||!a.layer||!a.field)return g(b,"smartMapping.createColorRenderer: missing parameters."),b.promise;var c=a.layer,d=a.normalizationField,e=d?"field":void 0;a.statistics?O(a.statistics,null,e,d,a,b):c.addPlugin(A).then(function(){"group-similar"===a.theme||a.scheme&&0===a.scheme.id.indexOf("group-similar/")?c.statisticsPlugin.getClassBreaks({field:a.field,
classificationMethod:"natural-breaks",numClasses:6,normalizationType:e,normalizationField:d,minValue:a.minValue,maxValue:a.maxValue}).then(function(c){O(null,c,e,d,a,b)}).otherwise(function(a){g(b,"smartMapping.createColorRenderer: error when calculating class breaks.")}):c.statisticsPlugin.getFieldStatistics({field:a.field,normalizationType:e,normalizationField:d,minValue:a.minValue,maxValue:a.maxValue}).then(function(c){O(c,null,e,d,a,b)}).otherwise(function(a){g(b,"smartMapping.createColorRenderer: error when calculating field statistics.")})}).otherwise(function(a){g(b,
"smartMapping.createColorRenderer: error when adding feature layer statistics plugin.")});return b.promise},createOpacityInfo:function(a){var b=new r;if(!a||!a.layer||!a.field)return g(b,"smartMapping.createOpacityInfo: missing parameters."),b.promise;var c=a.layer,d=a.normalizationField,e=d?"field":void 0;a.statistics?Z(a.statistics,d,a,b):c.addPlugin(A).then(function(){c.statisticsPlugin.getFieldStatistics({field:a.field,normalizationType:e,normalizationField:d,minValue:a.minValue,maxValue:a.maxValue}).then(function(c){Z(c,
d,a,b)}).otherwise(function(a){g(b,"smartMapping.createOpacityInfo: error when calculating field statistics.")})}).otherwise(function(a){g(b,"smartMapping.createOpacityInfo: error when adding feature layer statistics plugin.")});return b.promise},createSizeRenderer:function(a){var b=new r;if(!a||!a.layer||!a.field)return g(b,"smartMapping.createSizeRenderer: missing parameters."),b.promise;var c=a.layer,d=a.normalizationField,e=d?"field":void 0;a.statistics?J(a.statistics,null,e,d,a,b):c.addPlugin(A).then(function(){c.statisticsPlugin.getFieldStatistics({field:a.field,
normalizationType:e,normalizationField:d,minValue:a.minValue,maxValue:a.maxValue}).then(function(f){a.optimizeForScale?c.statisticsPlugin.getSuggestedSizeRange().then(function(c){J(f,[c.minSize,c.maxSize],e,d,a,b)}).otherwise(function(c){J(f,null,e,d,a,b)}):J(f,null,e,d,a,b)}).otherwise(function(a){g(b,"smartMapping.createSizeRenderer: error when calculating field statistics.")})}).otherwise(function(a){g(b,"smartMapping.createSizeRenderer: error when adding feature layer statistics plugin.")});return b.promise},
createClassedColorRenderer:function(a){var b=new r,c=a.minValue,d=a.maxValue,e;if(!a||!a.layer||!a.field)return g(b,"smartMapping.createClassedColorRenderer: missing parameters."),b.promise;e=null!=c&&null!=d;if(!e&&(null!=c||null!=d))return g(b,"smartMapping.createClassedColorRenderer: both minValue and maxValue are required when specifying custom data range."),b.promise;a=B.mixin({analyzeData:!e},a);a.layer.addPlugin(A).then(function(){ca(a).then(function(c){ua(c,a,b)}).otherwise(function(a){g(b,
"smartMapping.createClassedColorRenderer: error when calculating class breaks.")})}).otherwise(function(a){g(b,"smartMapping.createClassedColorRenderer: error when adding feature layer statistics plugin.")});return b.promise},createClassedSizeRenderer:function(a){var b=new r,c=a.minValue,d=a.maxValue,e;if(!a||!a.layer||!a.field)return g(b,"smartMapping.createClassedSizeRenderer: missing parameters."),b.promise;e=null!=c&&null!=d;if(!e&&(null!=c||null!=d))return g(b,"smartMapping.createClassedColorRenderer: both minValue and maxValue are required when specifying custom data range."),
b.promise;a=B.mixin({analyzeData:!e},a);var f=a.layer;f.addPlugin(A).then(function(){ca(a).then(function(c){a.optimizeForScale?f.statisticsPlugin.getSuggestedSizeRange().then(function(d){P(c,[d.minSize,d.maxSize],a,b)}).otherwise(function(d){P(c,null,a,b)}):P(c,null,a,b)}).otherwise(function(a){g(b,"smartMapping.createClassedSizeRenderer: error when calculating class breaks.")})}).otherwise(function(a){g(b,"smartMapping.createClassedSizeRenderer: error when adding feature layer statistics plugin.")});
return b.promise},createHeatmapRenderer:function(a){var b=new r;if(!a||!a.layer)return g(b,"smartMapping.createHeatmapRenderer: missing parameters."),b.promise;var c=a.layer;a.statistics?da(a.statistics,a,b):c.addPlugin(A).then(function(){c.statisticsPlugin.getHeatmapStatistics(a).then(function(c){da(c,a,b)}).otherwise(function(a){g(b,"smartMapping.createHeatmapRenderer: error when calculating heatmap statistics.")})}).otherwise(function(a){g(b,"smartMapping.createHeatmapRenderer: error when adding feature layer statistics plugin.")});
return b.promise},applyHeatmapScheme:function(a){if(!a||!a.renderer||!a.scheme)console.log("smartMapping.applyHeatmapScheme: missing parameters.");else{var b=Q({scheme:a.scheme});a=a.renderer;var c=a.colorStops,b=b.colors;if(c.length!==b.length+3)console.log("smartMapping.applyHeatmapScheme: incompatible number of colors in 'colors' and 'renderer.colorStops'.");else{var d;d=new w(b[0]);c=u.map(c,function(a){return B.mixin({},a)});c[0].color=new w([d.r,d.g,d.b,0]);c[1].color=new w([d.r,d.g,d.b,0]);
c[2].color=d;for(d=3;d<c.length;d++)c[d].color=b[d-3];a.setColorStops(c)}}}});return z});