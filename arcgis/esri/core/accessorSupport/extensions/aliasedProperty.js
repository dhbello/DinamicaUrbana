// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.1/esri/copyright.txt for details.
//>>built
define("require exports dojo/has ../wire ../utils ../get ../set".split(" "),function(n,b,p,g,h,k,l){function m(c,a,e){var f=h.getProperties(c);return g.wire(c,e.aliasOf,function(){f.propertyInvalidated(a)})}b.AliasedPropertyExtension={processClassPropertyMetadata:function(c,a,e,f){var d=a.aliasOf;d&&(c=d.split(".")[0],null!=e[c]&&(!a.set&&!a.get)&&(a.get=function(){return k.default(this,d)},a.readOnly||(a.set=function(a){return l.default(this,d,a)})))},instanceCreated:function(c,a,e){for(var f=0;f<
e.length;f++){var d=e[f],b=a[d];b.aliasOf&&m(c,d,b)}}};Object.defineProperty(b,"__esModule",{value:!0});b.default=b.AliasedPropertyExtension});