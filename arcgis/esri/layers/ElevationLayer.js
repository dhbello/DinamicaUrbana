// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.1/esri/copyright.txt for details.
//>>built
define("dojo/_base/lang ./TiledLayer ./mixins/ArcGISMapService ./mixins/ArcGISCachedService ./mixins/OperationalLayer ./mixins/PortalLayer ../core/Error ../request ../core/promiseUtils".split(" "),function(c,d,e,f,g,h,k,l,m){return d.createSubclass([e,f,g,h],{declaredClass:"esri.layers.ElevationLayer",viewModulePaths:{"3d":"../views/3d/layers/ElevationLayerView3D"},normalizeCtorArgs:function(a,b){return"string"===typeof a?c.mixin({},{url:a},b):a},load:function(){this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Image Service"],
supportsData:!1,validateItem:function(a){for(var b=0;b<a.typeKeywords.length;b++)if("elevation 3d layer"===a.typeKeywords[b].toLowerCase())return!0;throw new k("portal:invalid-layer-item-type","Invalid layer item type '${type}', expected '${expectedType}' ",{type:"Image Service",expectedType:"Image Service Elevation 3D Layer"});}}).always(this._fetchImageService.bind(this)))},properties:{operationalLayerType:"ArcGISTiledElevationServiceLayer"},_fetchImageService:function(){return m.resolve().then(function(){return this.resourceInfo||
l(this.parsedUrl.path,{query:c.mixin({f:"json"},this.parsedUrl.query),responseType:"json",callbackParamName:"callback"})}.bind(this)).then(function(a){a.ssl&&(this.url=this.url.replace(/^http:/i,"https:"));this.read(a.data,{origin:"service",url:this.parsedUrl})}.bind(this))}})});