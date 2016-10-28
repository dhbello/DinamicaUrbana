// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.1/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../core/accessorSupport/decorators ../../core/Accessor ../../core/MultiOriginJSONSupport ../../core/Error ../../core/accessorSupport/read".split(" "),function(p,q,g,d,c,h,k,e,l){var m={GroupLayer:!0,WebTiledLayer:!0,OpenStreetMap:!0,ArcGISFeatureLayer:!0},n={"web-scene/operational-layers":{ArcGISFeatureLayer:!0,ArcGISMapServiceLayer:!0,ArcGISSceneServiceLayer:!0,ArcGISTiledElevationServiceLayer:!0,
ArcGISTiledImageServiceLayer:!0,ArcGISTiledMapServiceLayer:!0,GroupLayer:!0,IntegratedMeshLayer:!0,WebTiledLayer:!0},"web-scene/basemap":{ArcGISTiledElevationServiceLayer:!0,ArcGISTiledImageServiceLayer:!0,ArcGISTiledMapServiceLayer:!0,WebTiledLayer:!0,OpenStreetMap:!0},"web-scene/ground":{ArcGISTiledElevationServiceLayer:!0},"web-map/operational-layers":{ArcGISImageServiceLayer:!0,ArcGISImageServiceVectorLayer:!0,ArcGISMapServiceLayer:!0,ArcGISStreamLayer:!0,ArcGISTiledImageServiceLayer:!0,ArcGISTiledMapServiceLayer:!0,
ArcGSFeatureLayer:!0,CSV:!0,GeoRSS:!0,KML:!0,VectorTileLayer:!0,WMS:!0,WebTiledLayer:!0},"web-map/basemap":{ArcGISImageServiceLayer:!0,ArcGISImageServiceVectorLayer:!0,ArcGISMapServiceLayer:!0,ArcGISTiledImageServiceLayer:!0,ArcGISTiledMapServiceLayer:!0,OpenStreetMap:!0,VectorTileLayer:!0,WMS:!0,WebTiledLayer:!0,bingLayer:!0}};return function(f){function a(){f.apply(this,arguments)}g(a,f);a.prototype.writeListMode=function(a,b){a&&(b.listMode=a)};a.prototype.writeOperationalLayerType=function(a,
b){a&&(b.layerType=a)};a.prototype.readOpacity=function(a,b){if(void 0!==b.opacity)return b.opacity;if(b.drawingInfo&&void 0!==b.drawingInfo.transparency)return 1-b.drawingInfo.transparency/100};a.prototype.readVisible=function(a,b){return!!b.visibility};a.prototype.read=function(a,b){var c=this,d=arguments;l.readLoadable(this,a,function(b){return c.inherited(d,[a,b])},b);return this};a.prototype.write=function(a,b){if(b&&b.origin){var c=b.origin+"/"+(b.layerContainerType||"operational-layers"),d=
n[c];if(d&&!d[this.operationalLayerType])return b.messages&&b.messages.push(new e("layer:unsupported","Layers ("+this.title+", "+this.id+") of type '"+this.declaredClass+"' are not supported in the context of '"+c+"'",{layer:this})),null;if(!this.url&&!m[this.operationalLayerType])return b.messages&&b.messages.push(new e("layer:unsupported","Layers ("+this.title+", "+this.id+") of type '"+this.declaredClass+"' require a url to a service to be written to a '"+b.origin+"'",{layer:this})),null}return this.inherited(arguments,
[a,b])};d([c.property({json:{writable:!0,writeAlways:!0}})],a.prototype,"id",void 0);d([c.property()],a.prototype,"listMode",void 0);d([c.write("listMode")],a.prototype,"writeListMode",null);d([c.property({json:{writable:!0,writeAlways:!0}})],a.prototype,"title",void 0);d([c.property({json:{writable:!0,writeAlways:!0}})],a.prototype,"url",void 0);d([c.property({json:{writeTo:"layerType",writeAlways:!0}})],a.prototype,"operationalLayerType",void 0);d([c.write("operationalLayerType")],a.prototype,"writeOperationalLayerType",
null);d([c.property({json:{writable:!0,writeAlways:!0}})],a.prototype,"opacity",void 0);d([c.read("opacity",["opacity","drawingInfo.transparency"])],a.prototype,"readOpacity",null);d([c.property({json:{writeTo:"visibility",writeAlways:!0}})],a.prototype,"visible",void 0);d([c.read("visible",["visibility"])],a.prototype,"readVisible",null);return a=d([c.subclass("esri.layers.mixins.OperationalLayer")],a)}(c.declared(h,k))});