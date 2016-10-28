// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.1/esri/copyright.txt for details.
//>>built
require({cache:{"url:esri/views/3d/webgl-engine/materials/ColorMaterial.xml":'\x3c?xml version\x3d"1.0" encoding\x3d"UTF-8"?\x3e\r\n\r\n\x3csnippets\x3e\r\n\r\n\x3csnippet name\x3d"vertexShaderColorMaterial"\x3e\x3c![CDATA[\r\n\tuniform mat4 proj;\r\n\tuniform mat4 view;\r\n\tuniform mat4 model;\r\n\r\n\tattribute vec3 $position;\r\n\tattribute vec4 $color;\r\n\r\n\tvarying vec4 vColor; \r\n\r\n\tvoid main(void) {\r\n\t\tvColor \x3d $color * 0.003921568627451; // \x3d 1/255;\r\n\t\tgl_Position \x3d proj * view * vec4((model * vec4($position, 1.0)).xyz, 1.0);\r\n\t}\r\n]]\x3e\x3c/snippet\x3e\r\n\r\n\x3csnippet name\x3d"fragmentShaderColorMaterial"\x3e\x3c![CDATA[\r\n\tprecision mediump float;\r\n\r\n\tuniform vec4 eColor;\r\n\tvarying vec4 vColor;\r\n\r\n\tvoid main() {\r\n\t\tgl_FragColor \x3d vColor * eColor;\r\n\t}\r\n]]\x3e\x3c/snippet\x3e\r\n\x3c/snippets\x3e'}});
define("dojo/_base/lang dojo/text!./ColorMaterial.xml ./internal/MaterialUtil ../lib/RenderSlot ../lib/Util ../../../webgl/Program ../lib/DefaultVertexAttributeLocations ../lib/DefaultVertexBufferLayouts ../../../webgl/Util".split(" "),function(l,k,e,f,d,n,p,q,r){d=function(a,g){e.basicMaterialConstructor(this,g);a=a||{};a.color=a.color||[1,1,1,1];a.polygonOffset=a.polygonOffset||!1;a.vertexColors=a.vertexColors||!1;var h=q.Pos3Color;this.getParams=function(){return a};this.setColor=function(b){a.color=
b;this.notifyDirty("matChanged")};this.getColor=function(){return a.color};this.setTransparent=function(b){a.transparent=b;this.notifyDirty("matChanged")};this.getTransparent=function(b){return a.transparent};this.dispose=function(){};this.getOutputAmount=function(a){var c=r.getStride(h)/4;return a*c};this.getVertexBufferLayout=function(){return h};this.fillInterleaved=function(a,c,g,s,m,f,d){e.fillInterleaved(a,c,g,s,h,m,f,d)};this.intersect=e.intersectTriangleGeometry;this.getGLMaterials=function(){return{color:t,
depthShadowMap:void 0,normal:void 0,depth:void 0,highlight:u}};this.getAllTextureIds=function(){return[]}};var t=function(a,g,h){e.basicGLMaterialConstructor(this,a);var b=l.clone(a.getParams()),c=g.get("colorMaterial"),d=a.getColor();this.beginSlot=function(a){return a===(1>d[3]?f.TRANSPARENT_MATERIAL:f.OPAQUE_MATERIAL)};this.getProgram=function(){return c};this.updateParameters=function(){b.color=a.getColor();b.transparent=a.getTransparent()};this.bind=function(a,m){a.bindProgram(c);c.setUniform4fv("eColor",
b.color);a.setFaceCullingEnabled(!1);b.polygonOffset&&(a.setPolygonOffsetFillEnabled(!0),a.setPolygonOffset(1,1));b.transparent&&a.setBlendingEnabled(!0)};this.release=function(a){a.setPolygonOffsetFillEnabled(!1);b.transparent&&a.setBlendingEnabled(!1)};this.bindView=function(a,b){e.bindView(b.origin,b.view,c)};this.bindInstance=function(a,b){c.setUniformMatrix4fv("model",b.transformation)};this.getDrawMode=function(a){return a.gl.TRIANGLES}},u=function(a,d,h){e.basicGLMaterialConstructor(this,a);
var b=l.clone(a.getParams()),c=d.get("colorMaterial"),k=[1,1,1,1];this.beginSlot=function(a){return a===(1>k[3]?f.TRANSPARENT_MATERIAL:f.OPAQUE_MATERIAL)};this.getProgram=function(){return c};this.updateParameters=function(){b.color=a.getColor();b.transparent=a.getTransparent()};this.bind=function(a,d){a.bindProgram(c);c.setUniform4fv("eColor",b.color);a.setFaceCullingEnabled(!1);b.polygonOffset&&(a.setPolygonOffsetFillEnabled(!0),a.setPolygonOffset(1,1))};this.release=function(a){a.setPolygonOffsetFillEnabled(!1)};
this.bindView=function(a,b){e.bindView(b.origin,b.view,c)};this.bindInstance=function(a,b){c.setUniformMatrix4fv("model",b.transformation)};this.getDrawMode=function(a){return a.gl.TRIANGLES}};d.programs=null;d.loadShaders=function(a,d,e,b){a._parse(k);a=new n(b,a.vertexShaderColorMaterial,a.fragmentShaderColorMaterial,p.Default3D);e.add("colorMaterial",a)};return d});