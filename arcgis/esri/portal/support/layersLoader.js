// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.1/esri/copyright.txt for details.
//>>built
define("require exports ../../request ../Portal ../../core/Error ../../core/promiseUtils ../../core/requireUtils ../../core/urlUtils ../../layers/GroupLayer ./byReferenceRenderer".split(" "),function(n,p,q,h,k,g,r,s,t,u){function v(b){var c=b.instance,a=c.portalItem,d=a.url,f=a.title,e={origin:"portal-item",url:s.urlToObject(a.itemUrl),portal:a.portal||h.getDefault()};if(c.isInstanceOf(t))return c.read({title:f},e),w(c,b);d&&c.read({url:d},e);return l(b).then(function(a){return u.read(c,a,e).then(function(){return a})}).then(function(a){a&&
c.read(a,e);c.read({title:f},e)})}function w(b,c){var a;a=b.portalItem.type;switch(a){case "Feature Service":a="FeatureLayer";break;case "Stream Service":a="StreamLayer";break;case "Scene Service":a="SceneLayer";break;case "Feature Collection":a="FeatureLayer";break;default:throw new k("portal:unsupported-item-type-as-group","The item type '"+a+"' is not supported as a 'GroupLayer'");}var d;return r.when(n,"../../layers/"+a).then(function(a){d=a;return l(c)}).then(function(a){return!a||!Array.isArray(a.layers)?
x(b,d,c):m(b,d,a,c)})}function x(b,c,a){return!b.portalItem.url?g.resolve():q(b.portalItem.url,{responseType:"json",callbackParamName:"callback",query:{f:"json"}}).then(function(d){if((d=d.data)&&Array.isArray(d.layers))return d=d.layers.map(function(a){return{id:a.id,name:a.name}}),d.reverse(),m(b,c,{layers:d},a)})}function m(b,c,a,d){var f=a.showLegend;a.layers.forEach(function(a){var d=new c({portalItem:b.portalItem,layerId:a.id,sublayerTitleMode:"service-name"});if("Feature Collection"===b.portalItem.type){var g=
{origin:"portal-item",portal:b.portalItem.portal||h.getDefault()};d.read(a,g);null!=f&&d.read({showLegend:f},g)}b.add(d)})}function l(b){if(!1===b.supportsData)return g.resolve();var c=b.instance;return c.portalItem.fetchData().otherwise(function(){return null}).then(function(a){var b;if("layerId"in c){var f=!0;if(a&&Array.isArray(a.layers)){null==c.layerId&&(c.layerId=a.layers[0].id);for(var e=0;e<a.layers.length;e++)if(a.layers[e].id===c.layerId){b=a.layers[e];break}b&&(1===a.layers.length&&(f=
!1),null!=a.showLegend&&(b.showLegend=a.showLegend))}f&&"service-name"!==c.sublayerTitleMode&&(c.sublayerTitleMode="item-title-and-service-name");return b}return a})}p.load=function(b){var c=b.instance.portalItem;return!c||!c.id?g.resolve():c.load().then(function(){var a=b.instance.portalItem;if(-1===b.supportedTypes.indexOf(a.type))throw new k("portal:invalid-layer-item-type","Invalid layer item type '${type}', expected '${expectedType}'",{type:a.type,expectedType:b.supportedTypes.join(", ")});}).then(function(){return v(b)})}});