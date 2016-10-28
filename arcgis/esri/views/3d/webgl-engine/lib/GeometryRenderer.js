// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.1/esri/copyright.txt for details.
//>>built
define("require exports ../materials/internal/MaterialUtil ./DefaultVertexAttributeLocations ../../../webgl/VertexArrayObject ../../../webgl/BufferObject ../../../webgl/Util ../../../webgl/enums".split(" "),function(m,n,g,h,k,l,f,p){return function(){function c(b,a,c,e){this._drawMode=4;this._layout=a;var d=b.faces;this._count=d.indices[d.positionKey].length;d=new Float32Array(this._count*f.getStride(a)/4);c?c(b,void 0,void 0,null,a,d,0):g.fillInterleaved(b,void 0,void 0,null,a,d,0);this._rctx=e;
this._vao=new k(e,h.Default3D,{geometry:a},{geometry:l.createVertex(e,35044,d)})}c.prototype.enablePointRendering=function(b){this._drawMode=b?0:4};c.prototype.render=function(b){var a=this._rctx;a.bindVAO(this._vao);f.assertCompatibleVertexAttributeLocations(this._vao,b);a.drawArrays(this._drawMode,0,this._count)};return c}()});