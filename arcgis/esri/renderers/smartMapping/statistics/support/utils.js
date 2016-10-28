// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.1/esri/copyright.txt for details.
//>>built
define(["require","exports","dojo/string","../../../../core/Error","../../../../tasks/support/ClassBreaksDefinition"],function(w,d,n,p,q){function h(a){return n.pad(a,2,"0")}function l(a,c){var b;"date"===c||"number"===c?("number"===c&&(a=new Date(a)),b="TIMESTAMP'"+a.getUTCFullYear()+"-"+h(a.getUTCMonth()+1)+"-"+h(a.getUTCDate())+" "+h(a.getUTCHours())+":"+h(a.getUTCMinutes())+":"+h(a.getUTCSeconds())+"'"):b=a;return b}function m(a,c){var b;if(c instanceof Date)b="date";else if("number"===typeof c)b=
"number";else if("string"===typeof c){var e=a.getField(c);"\x3cnow\x3e"===c.toLowerCase()?b="":e&&e.type===r&&(b="field")}return b}function k(a,c){return new p(a,c)}var s=["integer","small-integer","single","double"],r="date",t={years:365,months:30,days:1,hours:1/24,minutes:1/1440,seconds:1/86400,milliseconds:1/864E5},u=/(https?:)?\/\/services.*\.arcgis\.com/i,v=Math.LOG10E;d.isFeatureCollection=function(a){return!a.url};d.canUseSQL92Expression=function(a){return u.test(a.url)};d.msSinceUnixEpochSQL=
function(a,c){var b=new Date(0),b="("+l(c,m(a,c))+" - "+l(b,m(a,b))+")",e=t.milliseconds,f="/";1>e&&(e=1/e,f="*");return 1===e?b:"("+b+" "+f+" "+e+")"};d.getFieldExpr=function(a,c){var b=a.field,e=a.normalizationType,f=a.normalizationField,d=b;"percent-of-total"===e?d="(("+b+" / "+c+") * 100)":"log"===e?d="(log("+b+") * "+v+")":"field"===e&&(d="("+b+" / "+f+")");return d};d.getGRWhereInfo=function(a){var c=a.field,b=a.normalizationType,e=a.normalizationField;a=a.layer.definitionExpression;var f;"log"===
b?f="(NOT "+c+" \x3d 0)":"field"===b&&(f="(NOT "+e+" \x3d 0)");return{where:f?f+(a?" AND "+a:""):a,excludeZerosExpr:f}};d.createCBDefn=function(a,c){var b=a.field,e=a.classificationMethod||"equal-interval",f=a.normalizationType,d=a.normalizationField,g=new q;g.classificationField=b;g.breakCount=c;g.classificationMethod=e;g.standardDeviationInterval="standard-deviation"===e?a.standardDeviationInterval||1:void 0;g.normalizationType=f;g.normalizationField="field"===f?d:void 0;return g};d.createError=
k;d.getRangeExpr=function(a,c,b){c=null!=c?a+" \x3e\x3d "+c:"";a=null!=b?a+" \x3c\x3d "+b:"";b="";return(b=c&&a?c+" AND "+a:c||a)?"("+b+")":""};d.verifyFieldType=function(a,c,b,e,f){var d;if(b){if(b.name===c.objectIdField||-1===f.indexOf(b.type))a.reject(k(e,"'field' should be one of these types: "+f.join(","))),d=!0}else a.reject(k(e,"unknown 'field'.")),d=!0;return d};d.verifyNumericField=function(a,c,b,e){var d;if(b){if(b.name===c.objectIdField||-1===s.indexOf(b.type))a.reject(k(e,"'field' should be numeric.")),
d=!0}else a.reject(k(e,"unknown 'field'.")),d=!0;return d}});