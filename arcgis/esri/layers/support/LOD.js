// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.1/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../core/accessorSupport/decorators ../../core/JSONSupport ../../core/lang".split(" "),function(h,k,e,c,b,f,g){return function(d){function a(a){d.call(this,a);this.level=0;this.levelValue=null;this.scale=this.resolution=0}e(a,d);a.prototype.clone=function(){return new a({level:this.level,levelValue:this.levelValue,resolution:this.resolution,scale:this.scale})};a.prototype.toJSON=function(){return g.fixJson({level:this.level,
levelValue:this.levelValue,resolution:this.resolution,scale:this.scale})};c([b.property()],a.prototype,"level",void 0);c([b.property()],a.prototype,"levelValue",void 0);c([b.property()],a.prototype,"resolution",void 0);c([b.property()],a.prototype,"scale",void 0);return a=c([b.subclass("esri.layers.support.LOD")],a)}(b.declared(f))});