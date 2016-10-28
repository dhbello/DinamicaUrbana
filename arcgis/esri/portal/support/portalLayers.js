// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.1/esri/copyright.txt for details.
//>>built
define("require exports dojo/_base/lang ../PortalItem ../../core/promiseUtils ../../core/requireUtils ../../request ../../core/Collection ../../core/Error".split(" "),function(m,n,e,f,d,p,q,r,s){function t(a){switch(a.type){case "Map Service":return u(a);case "Feature Service":return v(a);case "Feature Collection":return w(a);case "Scene Service":return x(a);case "Image Service":return y(a);case "Stream Service":return{className:"StreamLayer"};case "Vector Tile Service":return{className:"VectorTileLayer"};
default:return d.reject(new s("portal:unknown-item-type","Unknown item type '${type}'",{type:a.type}))}}function z(a){return p.when(m,"../../layers/"+a.className).then(function(b){return{constructor:b,properties:a.properties}})}function u(a){return k(a).then(function(a){return a?{className:"TileLayer"}:{className:"MapImageLayer"}})}function v(a){return l(a).then(function(a){if(a){var c={returnZ:!0,outFields:["*"]};null!=a.id&&(c.layerId=a.id);return{className:"FeatureLayer",properties:c}}return{className:"GroupLayer"}})}
function x(a){return l(a).then(function(b){if(b){var c={},g=void 0;null!=b.id?(c.layerId=b.id,g=a.url+"/layers/"+b.id):g=a.url;if(Array.isArray(a.typeKeywords)&&0<a.typeKeywords.length){b={IntegratedMesh:"IntegratedMeshLayer","3DObject":"SceneLayer",Point:"SceneLayer"};for(var d=0,e=Object.keys(b);d<e.length;d++){var f=e[d];if(-1!==a.typeKeywords.indexOf(f))return{className:b[f]}}}return h(g).then(function(a){var b="SceneLayer";null!=a&&"IntegratedMesh"===a.layerType&&(b="IntegratedMeshLayer");return{className:b,
properties:c}})}return{className:"GroupLayer"}})}function w(a){return a.load().then(function(){return a.fetchData()}).then(function(a){return a&&Array.isArray(a.layers)&&1===a.layers.length?{className:"FeatureLayer"}:{className:"GroupLayer"}})}function y(a){return k(a).then(function(b){var c=new r(a.typeKeywords);return b?c.find(function(a){return"elevation 3d layer"===a.toLowerCase()})?{className:"ElevationLayer"}:{className:"TileLayer"}:{className:"ImageryLayer"}})}function k(a){return h(a.url).then(function(a){return a.tileInfo})}
function l(a){return!a.url||a.url.match(/\/\d+$/)?d.resolve({}):a.load().then(function(){return a.fetchData()}).then(function(b){return b&&Array.isArray(b.layers)?1===b.layers.length?{id:b.layers[0].id}:!1:h(a.url).then(function(a){return!a||!Array.isArray(a.layers)?{}:1===a.layers.length?{id:a.layers[0].id}:!1})})}function h(a){return q(a,{responseType:"json",callbackParamName:"callback",query:{f:"json"}}).then(function(a){return a.data})}n.fromItem=function(a){if(a.portalItem&&!(a.portalItem instanceof
f)&&(!a.portalItem.constructor||!a.portalItem.constructor._meta))a=e.mixin({},a,{portalItem:new f(a.portalItem)});return a.portalItem.load().then(t).then(z).then(function(b){var c=e.mixin({portalItem:a.portalItem},b.properties);b=b.constructor;"esri.layers.FeatureLayer"===b.declaredClass&&(c.returnZ=!0,c.outFields=["*"]);return d.resolve(new b(c))})}});