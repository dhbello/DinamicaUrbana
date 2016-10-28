// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.1/esri/copyright.txt for details.
//>>built
define("dojo/_base/lang dojo/_base/url dojo/string ../core/urlUtils ../core/MultiOriginJSONSupport ../geometry/SpatialReference ../geometry/Extent ../geometry/Point ./TiledLayer ./mixins/OperationalLayer ./mixins/ScaleRangeLayer ./support/TileInfo ./support/LOD".split(" "),function(g,h,l,m,n,d,p,q,r,s,t,k,c){return r.createSubclass([s,n,t],{declaredClass:"esri.layers.WebTileLayer",normalizeCtorArgs:function(b,a){return"string"===typeof b?g.mixin({urlTemplate:b},a||{}):b},getDefaults:function(b){var a=
new p(-2.0037508342787E7,-2.003750834278E7,2.003750834278E7,2.0037508342787E7,d.WebMercator);return g.mixin(this.inherited(arguments),{fullExtent:a,tileInfo:new k({size:256,dpi:96,format:"PNG8",compressionQuality:0,origin:new q({x:-2.0037508342787E7,y:2.0037508342787E7,spatialReference:d.WebMercator}),spatialReference:d.WebMercator,lods:[new c({level:0,scale:5.91657527591555E8,resolution:156543.033928}),new c({level:1,scale:2.95828763795777E8,resolution:78271.5169639999}),new c({level:2,scale:1.47914381897889E8,
resolution:39135.7584820001}),new c({level:3,scale:7.3957190948944E7,resolution:19567.8792409999}),new c({level:4,scale:3.6978595474472E7,resolution:9783.93962049996}),new c({level:5,scale:1.8489297737236E7,resolution:4891.96981024998}),new c({level:6,scale:9244648.868618,resolution:2445.98490512499}),new c({level:7,scale:4622324.434309,resolution:1222.99245256249}),new c({level:8,scale:2311162.217155,resolution:611.49622628138}),new c({level:9,scale:1155581.108577,resolution:305.748113140558}),new c({level:10,
scale:577790.554289,resolution:152.874056570411}),new c({level:11,scale:288895.277144,resolution:76.4370282850732}),new c({level:12,scale:144447.638572,resolution:38.2185141425366}),new c({level:13,scale:72223.819286,resolution:19.1092570712683}),new c({level:14,scale:36111.909643,resolution:9.55462853563415}),new c({level:15,scale:18055.954822,resolution:4.77731426794937}),new c({level:16,scale:9027.977411,resolution:2.38865713397468}),new c({level:17,scale:4513.988705,resolution:1.19432856685505}),
new c({level:18,scale:2256.994353,resolution:0.597164283559817}),new c({level:19,scale:1128.497176,resolution:0.298582141647617})]})})},properties:{copyright:{value:"",json:{writable:!0}},fullExtent:{json:{writable:!0}},legendEnabled:{json:{readFrom:["showLegend"],read:function(b,a){return null!=a.showLegend?a.showLegend:!0}}},levelValues:{dependsOn:["tileInfo"],get:function(){var b=[];if(!this.tileInfo)return null;this.tileInfo.lods.forEach(function(a){b[a.level]=a.levelValue||a.level},this);return b}},
operationalLayerType:"WebTiledLayer",popupEnabled:{json:{readFrom:["disablePopup"],read:function(b,a){return null!=a.disablePopup?!a.disablePopup:!0}}},refreshInterval:{json:{writable:!0}},spatialReference:{type:d,value:d.WebMercator,json:{readFrom:["spatialReference","fullExtent.spatialReference"],read:function(b,a){return b||a.fullExtent&&a.fullExtent.spatialReference&&d.fromJSON(a.fullExtent.spatialReference)}}},subDomains:{value:null,json:{writable:!0}},tileInfo:{type:k,json:{writable:!0}},tileServers:{value:null,
dependsOn:["urlTemplate","subDomains","urlPath"],get:function(){var b=new h(this.urlTemplate),a=b.scheme?b.scheme+"://":"//",c=a+b.authority+"/",e=this.subDomains,d,f=[];-1===b.authority.indexOf("{subDomain}")&&f.push(c);e&&(0<e.length&&1<b.authority.split(".").length)&&e.forEach(function(c,e){-1<b.authority.indexOf("{subDomain}")&&(d=a+b.authority.replace(/\{subDomain\}/gi,c)+"/");f.push(d)},this);return f=f.map(function(a){"/"!==a.charAt(a.length-1)&&(a+="/");return a})}},urlPath:{dependsOn:["urlTemplate"],
get:function(){if(!this.urlTemplate)return null;var b=this.urlTemplate,a=new h(b);return b.substring(((a.scheme?a.scheme+"://":"//")+a.authority+"/").length)}},urlTemplate:{json:{readFrom:["urlTemplate","templateUrl"],read:function(b,a){return b||a.templateUrl},writeTo:"templateUrl"}},url:{json:{writable:!1}}},getTileUrl:function(b,a,c){b=this.levelValues[b];var d=this.tileServers[a%this.tileServers.length]+l.substitute(this.urlPath,{level:b,col:c,row:a}),d=d.replace(/\{level\}/gi,b).replace(/\{row\}/gi,
a).replace(/\{col\}/gi,c);return m.addProxy(d)}})});