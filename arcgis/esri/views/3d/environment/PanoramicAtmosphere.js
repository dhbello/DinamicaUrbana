// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.1/esri/copyright.txt for details.
//>>built
require({cache:{"url:esri/views/3d/environment/materials/SimpleAtmosphereMaterial.xml":'\x3c?xml version\x3d"1.0" encoding\x3d"UTF-8"?\x3e\r\n\r\n\x3csnippets\x3e\r\n\r\n\x3csnippet name\x3d"vsSimpleAtmosphere"\x3e\x3c![CDATA[\r\n  uniform mat4 proj;\r\n  uniform mat4 view;\r\n\r\n#ifndef PANORAMIC\r\n\r\n  const float TWICEPI \x3d 2.0*3.14159265;\r\n  const float ATMOSPHERE_RIM_SEGMENTS \x3d 128.0;\r\n\r\n  uniform vec3 silCircleCenter;\r\n  uniform vec3 silCircleV1;\r\n  uniform vec3 silCircleV2;\r\n  uniform vec2 texV;\r\n\r\n#endif\r\n\r\n  uniform vec3 lightDirection;\r\n\r\n  attribute vec3 $position;\r\n  varying vec2 vtc;\r\n  varying float falloff;\r\n\r\n  void main(void) {\r\n\r\n#ifdef PANORAMIC\r\n\r\n    vec3 pos \x3d $position;\r\n    float ndotl \x3d lightDirection.z;\r\n    vtc \x3d vec2(0, $position.z+0.05);\r\n\r\n#else\r\n\r\n    float phi \x3d $position.x * (TWICEPI / ATMOSPHERE_RIM_SEGMENTS) + 1.0;\r\n    vec3 pos \x3d (sin(phi) * silCircleV1 + cos(phi) * silCircleV2 + silCircleCenter) * $position.y;\r\n    float ndotl \x3d dot(normalize(pos), lightDirection);\r\n\r\n    vtc.x \x3d $position.x / ATMOSPHERE_RIM_SEGMENTS;\r\n    vtc.y \x3d texV.x * (1.0 - $position.z) + texV.y * $position.z;\r\n\r\n#endif\r\n\r\n    falloff \x3d max(0.0, (smoothstep(-1.0, 0.8, ndotl + ndotl)));\r\n\r\n    gl_Position \x3d proj * view * vec4(pos, 1.0);\r\n    gl_Position.z \x3d gl_Position.w; // project atmosphere onto the far plane\r\n  }\r\n]]\x3e\x3c/snippet\x3e\r\n\r\n\x3csnippet name\x3d"fsSimpleAtmosphere"\x3e\x3c![CDATA[\r\n  precision mediump float;\r\n\r\n  uniform sampler2D tex;\r\n  uniform vec4 color;\r\n  varying vec2 vtc;\r\n  varying float falloff;\r\n\r\n  void main() {\r\n    vec4 texColor \x3d texture2D(tex, vtc);\r\n    gl_FragColor \x3d texColor * color * falloff;\r\n  }\r\n]]\x3e\x3c/snippet\x3e\r\n\r\n\x3c/snippets\x3e\r\n'}});
define("dojo/text!./materials/SimpleAtmosphereMaterial.xml dojo/Deferred ../support/ExternalRenderer ../lib/glMatrix ../webgl-engine/lib/GeometryRenderer ../webgl-engine/lib/GeometryUtil ../webgl-engine/lib/Texture ../webgl-engine/lib/Util ../webgl-engine/lib/GLTextureRep ../webgl-engine/lib/RenderPass ../webgl-engine/lib/RenderSlot ./resources/SimpleAtmosphereTexture ../../webgl/Program ../webgl-engine/lib/DefaultVertexBufferLayouts ../webgl-engine/lib/DefaultVertexAttributeLocations".split(" "),
function(m,n,p,e,q,r,s,t,u,v,g,w,x,y,z){var A=e.vec2d,f=e.vec3d,h=e.mat4d,k=t.VertexAttrConstants,l=h.create();return p.createSubclass({declaredClass:"esri.views.3d.environment.PanoramicAtmosphere",properties:{view:{},needsRender:{value:!1},needsDepthMap:{value:!1},slot:{value:g.BACKGROUND,set:function(a){this.needsRender=!0;this._set("slot",a)}}},constructor:function(){this._renderData={texV:A.create(),silCircleCenter:f.create(),silCircleV1:f.create(),silCircleV2:f.create()};this._textureRep=this._texture=
null;this.slot=g.BACKGROUND},initialize:function(){this._textureDfd=new n;this.addResolvingPromise(this._textureDfd.promise)},destroy:function(){this._textureRep&&(this._texture&&(this._textureRep.release("SimpleAtmosphere"),this._textureRep.getTexture("SimpleAtmosphere").unload()),this._textureRep=null);this._program&&(this._program.dispose(),this._program=null);this._textureDfd&&(this._textureDfd.cancel(),this._textureDfd=null)},initializeRenderContext:function(a){this._textureRep=new u({SimpleAtmosphere:new s(w,
"SimpleAtmosphere",{wrapClamp:!0})},a.programRep,function(){return this.view._stage.getCamera().viewport}.bind(this),a.rctx);this._texture=this._textureRep.aquire("SimpleAtmosphere",void 0,void 0,function(a){this._texture=a.getGLTexture();this._textureDfd.resolve();this._textureDfd=null}.bind(this))},setup:function(a){var c=this._createGeometryData(),d=this.renderContext.rctx;this._renderer=new q(c,y.Pos3,null,d);a.shaderSnippets.vsSimpleAtmosphere||a.shaderSnippets._parse(m);this._program=new x(d,
a.shaderSnippets.vsSimpleAtmosphere,a.shaderSnippets.fsSimpleAtmosphere,z.Default3D,["PANORAMIC"])},render:function(a){if(a.slot!==this.slot||a.pass!==v.MATERIAL||!this._textureRep.getIsLoaded("SimpleAtmosphere"))return!1;var c=this.renderContext.rctx,d=c.gl,b=this._program;c.bindProgram(b);c.bindTexture(this._texture);b.setUniform1i("tex",0);b.setUniformMatrix4fv("proj",a.camera.projectionMatrix);h.toRotationMat(a.camera.viewMatrix,l);b.setUniformMatrix4fv("view",l);b.setUniform4f("color",1,1,1,
1);b.setUniform3fv("lightDirection",a.lightingData.direction);c.setFaceCullingEnabled(!0);c.setDepthFunction(d.LEQUAL);c.setBlendingEnabled(!0);c.setDepthWriteEnabled(!1);this._renderer.render(this._program);c.setDepthWriteEnabled(!0);c.setBlendingEnabled(!1);c.setDepthFunction(d.LESS);c.setFaceCullingEnabled(!1);return!0},_createGeometryData:function(){for(var a=r.createPolySphereGeometry(1,2),c=a.getFaces(),d=c[0].indices[k.POSITION],b=0;b<d.length;b+=3){var e=d[b];d[b]=d[b+2];d[b+2]=e}a=a.getVertexAttr();
d=a[k.NORMAL].data;for(b=0;b<d.length;b++)d[b]=-d[b];return{faces:c[0],vertexAttr:a}}})});