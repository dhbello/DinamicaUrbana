// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.1/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../core/lang ../../core/JSONSupport ../../Color ../../core/accessorSupport/decorators".split(" "),function(b,f,g,e,h,k,l,c){b=function(b){function a(){b.apply(this,arguments)}g(a,b);a.prototype.readColor=function(d,a){var b=null!=a.transparency?1-0.01*a.transparency:1;if(d&&h.isDefined(d[0]))return[d[0],d[1],d[2],b]};a.prototype.writeColor=function(a,b){b.color=[a.r,a.g,a.b];1!==a.a&&(b.transparency=
100*(1-a.a))};a.prototype.clone=function(){return new a({color:this.color.clone()})};e([c.property({type:l})],a.prototype,"color",void 0);e([c.read("color",["color","transparency"])],a.prototype,"readColor",null);e([c.write("color")],a.prototype,"writeColor",null);return a=e([c.subclass("esri.symbols.support.Symbol3DMaterial")],a)}(c.declared(k));f.Symbol3DMaterial=b;Object.defineProperty(f,"__esModule",{value:!0});f.default=b});