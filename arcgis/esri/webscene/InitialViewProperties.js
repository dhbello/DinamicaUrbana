// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.1/esri/copyright.txt for details.
//>>built
define("require exports ../core/tsSupport/declareExtendsHelper ../core/tsSupport/decorateHelper ../Viewpoint ../core/Accessor ../geometry/SpatialReference ./Environment ../core/accessorSupport/decorators".split(" "),function(l,m,f,c,g,h,k,d,b){return function(e){function a(a){e.call(this,a);this.environment=new d;this.viewpoint=this.spatialReference=null}f(a,e);Object.defineProperty(a.prototype,"viewingMode",{set:function(a){"local"!==a&&"global"!==a||this._set("viewingMode",a)},enumerable:!0,configurable:!0});
a.prototype.clone=function(){return new a({environment:this.environment.clone(),spatialReference:this.spatialReference?this.spatialReference.clone():null,viewingMode:this.viewingMode,viewpoint:this.viewpoint?this.viewpoint.clone():null})};c([b.property({type:d})],a.prototype,"environment",void 0);c([b.property({type:k})],a.prototype,"spatialReference",void 0);c([b.property()],a.prototype,"viewingMode",null);c([b.property({type:g})],a.prototype,"viewpoint",void 0);return a=c([b.subclass("esri.webscene.InitialViewProperties")],
a)}(b.declared(h))});