// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.1/esri/copyright.txt for details.
//>>built
define("require exports ./core/tsSupport/declareExtendsHelper ./core/tsSupport/decorateHelper ./core/accessorSupport/decorators ./core/Accessor ./core/Collection ./core/collectionUtils ./core/Logger ./layers/Layer".split(" "),function(p,q,g,d,b,h,k,e,l,m){var c=k.ofType(m),n=l.getLogger("esri.Ground");return function(f){function a(a){f.call(this);this.layers=new c;this.layers.on("after-add",function(a){a=a.item;"esri.layers.ElevationLayer"!==a.declaredClass&&n.error("Layer '"+a.title+", id:"+a.id+
"' of type '"+a.declaredClass+"' cannot be added as a ground layer. Only layers of type esri.layers.ElevationLayer are supported.")})}g(a,f);Object.defineProperty(a.prototype,"layers",{set:function(a){this._set("layers",e.referenceSetter(a,this._get("layers"),c))},enumerable:!0,configurable:!0});a.prototype.clone=function(){return new a({layers:this.layers.slice()})};d([b.property({type:c}),b.cast(e.castForReferenceSetter)],a.prototype,"layers",null);return a=d([b.subclass("esri.Ground")],a)}(b.declared(h))});