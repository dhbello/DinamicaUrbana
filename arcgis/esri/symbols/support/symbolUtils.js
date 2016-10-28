// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.1/esri/copyright.txt for details.
//>>built
define("require exports dojo/has dojo/_base/lang ../../symbols/support/jsonUtils ../../core/urlUtils ../../core/promiseUtils ../../core/Error ../../request ../../portal/Portal ../../portal/PortalQueryParams".split(" "),function(G,e,r,x,y,m,k,g,z,A,s){function l(a,b){a=m.normalize(m.makeAbsolute(a,b));var d=a.lastIndexOf("/");return-1===d?{url:a,base:a,filename:null}:{url:a,base:a.slice(0,d),filename:a.slice(d+1)}}function B(a,b){t(a,function(a){return l(a,b).url})}function C(a,b){a.symbolLayers&&
a.symbolLayers.forEach(b)}function t(a,b){C(a,function(a){if((a=a.resource)&&a.href)a.href=b(a.href)})}function D(a){t(a,function(a){return/\.svg$/.test(a)?(a.slice(0,a.length-4)+".png").replace("/resource/","/resource/png/"):a})}function n(a,b){a=x.clone(a);B(a,b);(r("ie")||r("trident"))&&D(a);return y.fromJSON(a)}function u(a,b){var d=l(a,b&&b.url&&b.url.path);return p(d.url).then(function(a){return{data:a.data,base:d.base,filename:d.filename}})}function E(a,b){var d=this,f=b.portal||new A,c=f.url+
" - "+a;return q[c]?k.resolve(q[c]):F(a,f).then(function(a){return a.fetchData()}).then(function(a){a={data:a,base:d.itemUrl,filename:"data"};return q[c]=a})}function F(a,b){return b.load().then(function(){if(!b.stylesGroupQuery)throw g("layer-templates:styles-group-query-missing","The styles group query needs to be configured in the portal to query styles");var a=new s({disableExtraQuery:!0,query:b.stylesGroupQuery});return b.queryGroups(a)}).then(function(b){b=b.results;if(!b||!Array.isArray(b)||
0===b.length)throw g("layer-templates:styles-missing","The styles group does not contain any styles");b=b[0];var f=new s({disableExtraQuery:!0,query:'typekeywords:"'+a+'"'});return b.queryItems(f)}).then(function(b){b=b.results;if(!b||!Array.isArray(b)||0===b.length)throw g("layer-templates:style-missing","The style '${styleName}' is not part of the styles group",{styleName:a});return b[0].load()})}function v(a,b){return a.styleUrl?u(a.styleUrl,b):a.styleName?E(a.styleName,b):k.reject(g("layer-templates:style-url-and-name-missing",
"Either styleUrl or styleName is required in layerDefinition"))}function w(a,b){for(var d=a.data,f=function(f){if(d.items[f].name===b){var c=l(d.items[f].webRef,a.base);return{value:p(c.url).then(function(a){return n(a.data,c.base)})}}},c=0;c<d.items.length;c++){var h=f(c);if("object"===typeof h)return h.value}return k.reject(g("layer-templates:symbol-name-not-found","The symbol name '${symbolName}' could not be found",{symbolName:b}))}function p(a){var b={responseType:"json"};/\.json$/.test(a)||
(b.query={f:"json"});return z(m.normalize(a),b)}e.fetchStyleFromUrl=u;var q={};e.fetchStyle=v;e.fetchStyleSymbol=function(a,b){return!a.name?k.reject(g("layer-templates:style-symbol-reference-name-missing","Missing name in style symbol reference")):v(a,b).then(function(b){return w(b,a.name)})};e.fetchSymbolFromStyle=w;e.fetchSymbolSet=function(a){var b=a.data;if(!b.symbolSetUrl)return k.reject(g("layer-templates:symbol-set-url-missing","Style does not provide symbol set url",{style:b}));var d=l(b.symbolSetUrl,
a.base);return p(d.url).then(function(a){a=a.data;if(0===a.length||!a[0].name)throw g("layer-templates:symbol-set-missing-data","Invalid syntax or missing data in symbol set",{style:b});for(var c={},h=0;h<a.length;h++){var e=n(a[h],d.base);c[a[h].name]=e;a[h].name===b.defaultItem&&(c.defaultSymbol=e)}c.defaultSymbol||(c.defaultSymbol=c[a[0].name]);return c})};e.createSymbol=function(a,b){return!a?null:n(a,b&&b.url&&b.url.path)}});