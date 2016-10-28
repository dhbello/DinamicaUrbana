// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.1/esri/copyright.txt for details.
//>>built
require({cache:{"url:esri/views/3d/webgl-engine/materials/Material.xml":'\x3c?xml version\x3d"1.0" encoding\x3d"UTF-8"?\x3e\r\n\r\n\x3csnippets\x3e\r\n\r\n\x3csnippet name\x3d"vsPhongSrc"\x3e\x3c![CDATA[\r\n\tuniform mat4 proj;\r\n\tuniform mat4 view;\r\n#ifdef INSTANCED\r\n    attribute mat4 model;\r\n    attribute mat4 modelNormal;\r\n#else\r\n\tuniform mat4 model;\r\n\tuniform mat4 modelNormal;\r\n#endif\r\n#ifdef INSTANCEDCOLOR\r\n    attribute vec4 instanceColor;\r\n#endif\r\n\tattribute vec3 $position;\r\n\tattribute vec3 $normal;\r\n\tvarying vec3 vpos;\r\n\tvarying vec3 vnormal;\r\n\r\n#ifdef VERTEXCOLORS\r\n    attribute vec4 $color;\r\n#endif\r\n\r\n#if defined(VERTEXCOLORS) || defined(INSTANCEDCOLOR)\r\n    varying vec4 vcolor;\r\n#endif\r\n\r\n\r\n\tvoid main(void) {\r\n\t\tvpos \x3d (model * vec4($position, 1.0)).xyz;\r\n\t\tvnormal \x3d normalize((modelNormal * vec4($normal, 1.0)).xyz);\r\n\t\tgl_Position \x3d proj * view * vec4(vpos, 1.0);\r\n\r\n#if defined(VERTEXCOLORS) || defined(INSTANCEDCOLOR)\r\n        vcolor \x3d vec4(1,1,1,1);\r\n#endif\r\n#ifdef VERTEXCOLORS\r\n        vcolor *\x3d $color * 0.003921568627451; // \x3d 1/255\r\n#endif\r\n#ifdef INSTANCEDCOLOR\r\n        vcolor *\x3d instanceColor;\r\n#endif\r\n]]\x3e\x3c/snippet\x3e\r\n\r\n\x3csnippet name\x3d"fsPhongSrc"\x3e\x3c![CDATA[\r\n\tuniform vec3 camPos;\r\n\tuniform vec4 lightAmbient;\r\n\tuniform vec4 lightDiffuse;\r\n\tuniform vec4 lightSpecular;\r\n\tuniform vec3 lightDirection;\r\n\tuniform vec3 ambient;\r\n\tuniform vec3 diffuse;\r\n\tuniform vec3 specular;\r\n\tuniform float shininess;\r\n\tuniform float opacity;\r\n\tuniform sampler2D depthTex;\r\n\tuniform int shadowMapNum;\r\n\tuniform vec4 shadowMapDistance;\r\n\tuniform mat4 shadowMapMatrix[4];\r\n\tuniform float depthHalfPixelSz;\r\n\tuniform sampler2D ssaoTex;\r\n\tuniform vec4 viewportPixelSz;\r\n\tvarying vec3 vpos;\r\n\tvarying vec3 vnormal;\r\n#if defined(VERTEXCOLORS) || defined(INSTANCEDCOLOR)\r\n    varying vec4 vcolor;\r\n#endif\r\n\r\n#ifdef RECEIVE_SHADOWS\r\n\t$evalShadow\r\n#endif\r\n\r\n\tvoid main() {\r\n\t\tvec3 a \x3d ambient * lightAmbient.rgb * lightAmbient.w;\r\n\r\n\t\tvec3 viewDir \x3d normalize(vpos - camPos);\r\n\r\n#ifndef DOUBLESIDED\r\n\t\tvec3 normal \x3d vnormal;\r\n#else\r\n\t\tvec3 normal \x3d dot(vnormal, viewDir)\x3e0.0?-vnormal:vnormal;\r\n#endif\r\n\r\n    \tnormal \x3d normalize(normal);\r\n\t\tfloat shadow \x3d 0.0;\r\n#ifdef RECEIVE_SHADOWS\r\n\t\tshadow \x3d evalShadow(vpos, 1.0 / gl_FragCoord.w, depthTex, shadowMapNum, shadowMapDistance, shadowMapMatrix, depthHalfPixelSz);\r\n#endif\r\n\t\tvec3 d \x3d (1.0 - shadow) * diffuse * lightDiffuse.rgb * lightDiffuse.w * clamp(dot(normal, lightDirection), .0, 1.0);\r\n\r\n\t\tfloat opacity_ \x3d opacity;\r\n#if defined(VERTEXCOLORS) || defined(INSTANCEDCOLOR)\r\n        a *\x3d vcolor.rgb;\r\n        d *\x3d vcolor.rgb;\r\n        opacity_ *\x3d vcolor.a;\r\n#endif\r\n\r\n\t\tvec3 reflDir \x3d normalize(reflect(viewDir, normal));\r\n\t\tfloat specDot \x3d max(dot(reflDir, lightDirection), .001);\r\n\t\tvec3 s \x3d (1.0 - shadow) * specular * lightSpecular.rgb * lightSpecular.w * pow(specDot, shininess);\r\n\r\n\t\tfloat ssao \x3d texture2D(ssaoTex, (gl_FragCoord.xy - viewportPixelSz.xy) * viewportPixelSz.zw).a;\r\n\t\tssao \x3d viewportPixelSz.z \x3c 0.0 ? 1.0 : ssao;\r\n\r\n]]\x3e\x3c/snippet\x3e\r\n\r\n\x3csnippet name\x3d"vsPhong"\x3e\x3c![CDATA[\r\n\t$vsPhongSrc\r\n\t}\r\n]]\x3e\x3c/snippet\x3e\r\n\r\n\x3csnippet name\x3d"fsPhong"\x3e\x3c![CDATA[\r\n\tprecision mediump float;\r\n\r\n\t$fsPhongSrc\r\n\t\tgl_FragColor \x3d vec4(ssao * (a + d) + s, opacity_);\r\n\t}\r\n]]\x3e\x3c/snippet\x3e\r\n\r\n\x3csnippet name\x3d"vsPhongTextured"\x3e\x3c![CDATA[\r\n\tattribute vec2 $uv0;\r\n\tvarying vec2 vtc;\r\n\t$vsPhongSrc\r\n#ifndef FLIPV\r\n\t\tvtc \x3d $uv0;\r\n#else\r\n        vtc \x3d vec2($uv0.x, 1.0-$uv0.y);\r\n#endif\r\n\r\n\t}\r\n]]\x3e\x3c/snippet\x3e\r\n\r\n\x3csnippet name\x3d"fsPhongTextured"\x3e\x3c![CDATA[\r\n\tprecision mediump float;\r\n\r\n\tuniform sampler2D tex;\r\n\tvarying vec2 vtc;\r\n\t$fsPhongSrc\r\n\t\tvec4 texColor \x3d texture2D(tex, vtc);\r\n\t\tif (texColor.a \x3c .33) discard;\r\n\t\tgl_FragColor \x3d vec4(ssao * texColor.rgb * (a + d) + s, texColor.a * opacity_);\r\n\t}\r\n]]\x3e\x3c/snippet\x3e\r\n\r\n\x3csnippet name\x3d"vsPhongAtlasTextured"\x3e\x3c![CDATA[\r\n\tattribute vec4 $uv0;\r\n\tattribute vec4 $region;\r\n\tvarying vec2 vtc;\r\n\tvarying vec4 regionV;\r\n\t$vsPhongSrc\r\n#ifndef FLIPV\r\n        vtc \x3d $uv0.xy;\r\n#else\r\n        vtc \x3d vec2($uv0.x, 1.0-$uv0.y);\r\n#endif\r\n\t    regionV \x3d $region/65535.0;\r\n\t}\r\n]]\x3e\x3c/snippet\x3e\r\n\r\n\x3csnippet name\x3d"fsPhongAtlasTextured"\x3e\x3c![CDATA[\r\n\tprecision mediump float;\r\n\r\n\tuniform sampler2D tex;\r\n\tuniform vec2 texSize;\r\n\tvarying vec2 vtc;\r\n\tvarying vec4 regionV;\r\n\r\n\t float calcMipMapLevel(const vec2 ddx, const vec2 ddy) {\r\n\t\t// from:\r\n\t\t//   - OpenGLES Common Profile Specification Version 2.0.25, Section 3.7.7 - Texture Minification\r\n\t\t//   - https://www.opengl.org/discussion_boards/showthread.php/171485-Texture-LOD-calculation-(useful-for-atlasing)\r\n\t\t//   - http://www.linedef.com/virtual-texture-demo.html\r\n\t\tfloat deltaMaxSqr \x3d max(dot(ddx, ddx), dot(ddy, ddy));\r\n\t\treturn max(0.5 * log2(deltaMaxSqr), 0.0);\r\n\t}\r\n\r\n\t$fsPhongSrc\r\n\t\tvec2 uv \x3d vtc;\r\n\t\tuv \x3d fract(uv);\r\n\t\t//[umin, vmin, umax, vmax]\r\n\r\n\t\tvec2 atlasScale \x3d regionV.zw - regionV.xy;\r\n\t\tuv \x3d uv.xy * atlasScale + regionV.xy;\r\n\r\n\t\tvec4 texColor;\r\n\t\t#ifdef GL_OES_standard_derivatives\r\n\t\t\t#extension GL_OES_standard_derivatives : enable\r\n\r\n\t\t\t// calculate derivative of continuous texture coordinate\r\n\t\t\t// to avoid mipmapping artifacts caused by manual wrapping in shader\r\n\t\t\tvec2 dUVdx \x3d dFdx(vtc) * atlasScale;\r\n\t\t\tvec2 dUVdy \x3d dFdy(vtc) * atlasScale;\r\n\r\n\t\t\t#ifdef GL_EXT_shader_texture_lod\r\n\t\t\t\t#extension GL_EXT_shader_texture_lod : enable\r\n\r\n\t\t\t\t// workaround for artifacts in Windows 10 using Intel HD Graphics 4000 series\r\n\t\t\t\t// see: https://devtopia.esri.com/Zurich-R-D-Center/arcgis-js-api-canvas3d-issues/issues/768\r\n\t\t\t\tconst float epsilon \x3d 1.0E-32;\r\n\t\t\t\tfloat zeroUVShift \x3d uv.x \x3d\x3d 0.0 \x26\x26 uv.y \x3d\x3d 0.0 ? epsilon : 0.0;\r\n\r\n\t\t\t\ttexColor \x3d texture2DGradEXT(tex, uv + zeroUVShift, dUVdx, dUVdy);\r\n\t\t\t#else\r\n\t\t\t\t// use bias to compensate for difference in automatic vs desired mipmap level\r\n\t\t\t\tvec2 dUVdxAuto \x3d dFdx(uv);\r\n\t\t\t\tvec2 dUVdyAuto \x3d dFdy(uv);\r\n\t\t\t\tfloat mipMapLevel \x3d calcMipMapLevel(dUVdx * texSize, dUVdy * texSize);\r\n\t\t\t\tfloat autoMipMapLevel \x3d calcMipMapLevel(dUVdxAuto * texSize, dUVdyAuto * texSize);\r\n\t\t\t\ttexColor \x3d texture2D(tex, uv, mipMapLevel - autoMipMapLevel);\r\n\t\t\t#endif\r\n\t\t#else\r\n\t\t\ttexColor \x3d texture2D(tex, uv);\r\n\t\t#endif\r\n\r\n\t\tif (texColor.a \x3c .33) discard;\r\n\t\tgl_FragColor \x3d vec4(ssao * texColor.rgb * (a + d) + s, texColor.a * opacity_);\r\n\t\t//gl_FragColor \x3d regionV;\r\n\t}\r\n]]\x3e\x3c/snippet\x3e\r\n\r\n\x3csnippet name\x3d"fsPhongTexturedRefl"\x3e\x3c![CDATA[\r\n\tprecision mediump float;\r\n\r\n\tuniform sampler2D tex;\r\n\tuniform sampler2D reflTex;\r\n\tuniform float reflectivity;\r\n\tvarying vec2 vtc;\r\n\r\n\t$normal2envTC\r\n\r\n\t$fsPhongSrc\r\n\t\tvec4 texColor \x3d texture2D(tex, vtc);\r\n\t\tif (texColor.a \x3c .33) discard;\r\n\t\tvec4 reflColor \x3d texture2D(reflTex, normal2envTC(reflDir));\r\n\t\tgl_FragColor \x3d vec4(ssao * mix(texColor.rgb * (a + d), reflColor.rgb * lightAmbient.rgb*lightSpecular.w, reflectivity) + s, texColor.a * opacity_);\r\n\t}\r\n]]\x3e\x3c/snippet\x3e\r\n\r\n\x3csnippet name\x3d"vsDepthSrc"\x3e\x3c![CDATA[\r\n\tuniform mat4 proj;\r\n\tuniform mat4 view;\r\n\tuniform mat4 model;\r\n\tuniform vec2 nearFar;\r\n\tattribute vec3 $position;\r\n\tvarying float depth;\r\n\r\n\tvoid main(void) {\r\n\t\tvec4 eye \x3d view * model * vec4($position, 1.0);\r\n\t\tgl_Position \x3d proj * eye;\r\n\t\tdepth \x3d (-eye.z - nearFar[0]) / (nearFar[1] - nearFar[0]) ;\r\n]]\x3e\x3c/snippet\x3e\r\n\r\n\x3csnippet name\x3d"vsDepth"\x3e\x3c![CDATA[\r\n\t$vsDepthSrc\r\n\t}\r\n]]\x3e\x3c/snippet\x3e\r\n\r\n\x3csnippet name\x3d"vsDepthTextured"\x3e\x3c![CDATA[\r\n\tattribute vec2 $uv0;\r\n\tvarying vec2 vtc;\r\n\t$vsDepthSrc\r\n#ifndef FLIPV\r\n        vtc \x3d $uv0;\r\n#else\r\n        vtc \x3d vec2($uv0.x, 1.0-$uv0.y);\r\n#endif\r\n\t}\r\n]]\x3e\x3c/snippet\x3e\r\n\r\n\x3csnippet name\x3d"vsNormalSrc"\x3e\x3c![CDATA[\r\n\tuniform mat4 proj;\r\n\tuniform mat4 view;\r\n\tuniform mat4 model;\r\n\tuniform mat4 viewNormal;\r\n\tuniform mat4 modelNormal;\r\n\tattribute vec3 $position;\r\n\tattribute vec3 $normal;\r\n\tvarying vec3 vnormal;\r\n\r\n\tvoid main(void) {\r\n\t\tgl_Position \x3d proj * view * model * vec4($position, 1.0);\r\n\t\tvnormal \x3d normalize((viewNormal * modelNormal * vec4($normal, 1.0)).xyz);\r\n]]\x3e\x3c/snippet\x3e\r\n\r\n\x3csnippet name\x3d"vsNormal"\x3e\x3c![CDATA[\r\n\t$vsNormalSrc\r\n\t}\r\n]]\x3e\x3c/snippet\x3e\r\n\r\n\x3csnippet name\x3d"vsNormalTextured"\x3e\x3c![CDATA[\r\n\tattribute vec2 $uv0;\r\n\tvarying vec2 vtc;\r\n\t$vsNormalSrc\r\n#ifndef FLIPV\r\n\t\tvtc \x3d $uv0;\r\n#else\r\n        vtc \x3d vec2($uv0.x, 1.0-$uv0.y);\r\n#endif\r\n\t}\r\n]]\x3e\x3c/snippet\x3e\r\n\r\n\x3csnippet name\x3d"vsHighlightSrc"\x3e\x3c![CDATA[\r\n\tuniform mat4 proj;\r\n\tuniform mat4 view;\r\n\tuniform mat4 model;\r\n\tattribute vec3 $position;\r\n\r\n\tvoid main(void) {\r\n\t\tgl_Position \x3d proj * view * model * vec4($position, 1.0);\r\n]]\x3e\x3c/snippet\x3e\r\n\r\n\x3csnippet name\x3d"vsHighlight"\x3e\x3c![CDATA[\r\n\t$vsHighlightSrc\r\n\t}\r\n]]\x3e\x3c/snippet\x3e\r\n\r\n\x3csnippet name\x3d"vsHighlightTextured"\x3e\x3c![CDATA[\r\n\tattribute vec2 $uv0;\r\n\tvarying vec2 vtc;\r\n\t$vsHighlightSrc\r\n#ifndef FLIPV\r\n\t\tvtc \x3d $uv0;\r\n#else\r\n    vtc \x3d vec2($uv0.x, 1.0-$uv0.y);\r\n#endif\r\n\t}\r\n]]\x3e\x3c/snippet\x3e\r\n\r\n\x3csnippet name\x3d"fsDepthSrc"\x3e\x3c![CDATA[\r\n\tvarying float depth;\r\n\r\n\tvoid main() {\r\n]]\x3e\x3c/snippet\x3e\r\n\r\n\x3csnippet name\x3d"fsDepth"\x3e\x3c![CDATA[\r\n\tprecision mediump float;\r\n\t$calcFragDepth\r\n\t$float2rgba\r\n\t$fsDepthSrc\r\n#ifndef BIAS_SHADOWMAP\r\n\t\tgl_FragColor \x3d float2rgba(depth);\r\n#else\r\n\t\tgl_FragColor \x3d float2rgba(calcFragDepth(depth));\r\n#endif\r\n\t}\r\n]]\x3e\x3c/snippet\x3e\r\n\r\n\x3csnippet name\x3d"fsDepthTextured"\x3e\x3c![CDATA[\r\n\tprecision mediump float;\r\n\r\n\tuniform sampler2D tex;\r\n\tvarying vec2 vtc;\r\n\t$calcFragDepth\r\n\t$float2rgba\r\n\r\n\t$fsDepthSrc\r\n\t\tif (texture2D(tex, vtc).a \x3c .33) discard;\r\n#ifndef BIAS_SHADOWMAP\r\n\t\tgl_FragColor \x3d float2rgba(depth);\r\n#else\r\n\t\tgl_FragColor \x3d float2rgba(calcFragDepth(depth));\r\n#endif\r\n\t}\r\n]]\x3e\x3c/snippet\x3e\r\n\r\n\x3csnippet name\x3d"fsNormal"\x3e\x3c![CDATA[\r\n\tprecision mediump float;\r\n\r\n\tvarying vec3 vnormal;\r\n\tvoid main() {\r\n\t\tvec3 normal \x3d normalize(vnormal);\r\n\t\tif (gl_FrontFacing \x3d\x3d false) normal \x3d -normal;\r\n\r\n#ifndef ALPHA_ZERO\r\n\t\tgl_FragColor \x3d vec4(vec3(.5) + .5 * normal, 1.0);\r\n#else\r\n\t\tgl_FragColor \x3d vec4(vec3(.5) + .5 * normal, 0.0);\r\n#endif\r\n\r\n\t}\r\n]]\x3e\x3c/snippet\x3e\r\n\r\n\x3csnippet name\x3d"fsNormalTextured"\x3e\x3c![CDATA[\r\n\tprecision mediump float;\r\n\r\n\tvarying vec3 vnormal;\r\n\tvarying vec2 vtc;\r\n\tuniform sampler2D tex;\r\n\tvoid main() {\r\n\t\tif (texture2D(tex, vtc).a \x3c .33) discard;\r\n\t\tvec3 normal \x3d normalize(vnormal);\r\n\t\tif (gl_FrontFacing \x3d\x3d false) normal \x3d -normal;\r\n#ifndef ALPHA_ZERO\r\n\t\tgl_FragColor \x3d vec4(vec3(.5) + .5 * normal, 1.0);\r\n#else\r\n\t\tgl_FragColor \x3d vec4(vec3(.5) + .5 * normal, 0.0);\r\n#endif\r\n\t}\r\n]]\x3e\x3c/snippet\x3e\r\n\r\n\x3csnippet name\x3d"fsHighlight"\x3e\x3c![CDATA[\r\n\tprecision mediump float;\r\n\r\n\tvoid main() {\r\n\t\tgl_FragColor \x3d vec4(1.0, 1.0, 1.0, 1.0);\r\n\t}\r\n]]\x3e\x3c/snippet\x3e\r\n\r\n\x3csnippet name\x3d"fsHighlightTextured"\x3e\x3c![CDATA[\r\n\tprecision mediump float;\r\n\tvarying vec2 vtc;\r\n\tuniform sampler2D tex;\r\n\tvoid main() {\r\n\t\tif (texture2D(tex, vtc).a \x3c .33) discard;\r\n    gl_FragColor \x3d vec4(1.0, 1.0, 1.0, 1.0);\r\n\t}\r\n]]\x3e\x3c/snippet\x3e\r\n\r\n\x3c/snippets\x3e\r\n'}});
define("dojo/_base/lang dojo/text!./Material.xml ./internal/MaterialUtil ../../../webgl/Program ../lib/ShaderVariations ../lib/Util ../lib/gl-matrix ../lib/RenderSlot ../lib/DefaultVertexAttributeLocations ../lib/DefaultVertexBufferLayouts ../../../webgl/Util".split(" "),function(s,D,k,l,E,n,F,t,m,u,r){var A=n.assert,z=F.vec3,B,v=z.create();n=function(a,d){k.basicMaterialConstructor(this,d);a=a||{};a.ambient=a.ambient||[0.2,0.2,0.2];a.diffuse=a.diffuse||[0.8,0.8,0.8];a.specular=a.specular||[0,0,0];
a.shininess=a.shininess||10;a.opacity=void 0!==a.opacity?a.opacity:1;a.blendModeOneOne=a.blendModeOneOne||!1;a.inverseWindingOrder=a.inverseWindingOrder||!1;a.vertexColors=a.vertexColors||!1;a.flipV=a.flipV||!1;a.doubleSided=a.doubleSided||!1;a.cullFace=a.cullFace||void 0;a.instanced=a.instanced||!1;this.instanced=!!a.instanced;a.writeStencil=a.writeStencil||!1;a.textureId||(a.reflTextureId=void 0);var f;f=a.textureId?a.atlasRegions?"Pos3NormTexRegion":"Pos3NormTex":"Pos3Norm";a.vertexColors&&(f+=
"Col");var b=u[f],c=a.instanced?u.ModelCol:null;a.instanced&&(c=-1<a.instanced.indexOf("color")?u.ModelCol:u.Model);var g=this.isVisible.bind(this);this.isVisible=function(){return g()&&0<a.opacity};this.dispose=function(){};this.getParams=function(){return a};this.getParameterValues=function(){var b={ambient:a.ambient,diffuse:a.diffuse,specular:a.specular,shininess:a.shininess,opacity:a.opacity,transparent:a.transparent,polygonOffset:a.polygonOffset,reflectivity:a.reflectivity,atlasRegions:a.atlasRegions,
flipV:a.flipV,doubleSided:a.doubleSided,cullFace:a.cullFace,writeStencil:a.writeStencil};a.textureId&&(b.textureId=a.textureId,b.initTexture=a.initTexture);return b};this.setParameterValues=function(b){for(var e in b)"textureId"===e&&A(a.textureId,"Can only change texture of material that already has a texture"),a[e]=b[e];this.notifyDirty("matChanged")};this.getOutputAmount=function(a){var e=r.getStride(b)/4;return a*e};this.getVertexBufferLayout=function(){return b};this.getInstanceBufferLayout=
function(){return c};this.fillInterleaved=function(a,e,c,d,f,g,l){k.fillInterleaved(a,e,c,d,b,f,g,l)};this.intersect=k.intersectTriangleGeometry;this.getGLMaterials=function(){return{color:G,depthShadowMap:H,normal:I,depth:C,highlight:J}};this.getAllTextureIds=function(){var b=[];a.textureId&&b.push(a.textureId);a.reflTextureId&&b.push(a.reflTextureId);return b}};n.paramsFromOldConstructor=function(a,d,f,b,c,g,q,e,p,k,h,l,m){return{textureId:a,transparent:d,ambient:f,diffuse:b,specular:c,shininess:g,
opacity:q,polygonOffset:e,initTexture:p,reflTextureId:k,reflectivity:h,flipV:l,doubleSided:m,cullFace:void 0}};var w=function(a,d){var f=a.gl;(d.cullFace?"none"!==d.cullFace:!d.transparent)?(a.setFaceCullingEnabled(!0),"front"===d.cullFace&&a.setCullFace(f.FRONT)):a.setFaceCullingEnabled(!1)},x=function(a,d){var f=a.gl;(d.cullFace?"none"!==d.cullFace:!d.transparent)?(a.setFaceCullingEnabled(!1),"front"===d.cullFace&&a.setCullFace(f.BACK)):a.setFaceCullingEnabled(!0)},y=function(a,d){return a?t.TRANSPARENT_MATERIAL:
d?t.STENCIL_MATERIAL:t.OPAQUE_MATERIAL},G=function(a,d,f){k.basicGLMaterialConstructor(this,a);var b=s.clone(a.getParams()),c=y(b.transparent,b.writeStencil);k.singleTextureGLMaterialConstructor(this,f,b);var g=k.aquireIfNotUndefined(b.reflTextureId,b.reflInitTexture,f);g&&(g=g.getGLTexture());A(!(b.atlasRegions&&b.reflTextureId),"Atlas texture with reflection is not yet supported");var q=!b.textureId?"none":b.atlasRegions?"AtlasTextured":"Textured";this.instanced=B&&b.instanced;var e=!!this.instanced&&
-1<this.instanced.indexOf("color");this._loadProgram=function(a){return d.shaderVariators.Material.getProgram([q,!!b.reflTextureId,b.vertexColors,b.flipV,b.doubleSided,!!this.instanced,e,a])};var p=this._loadProgram(!1),l=this._loadProgram(!0),h=null,m="AtlasTextured"===q,n=this.dispose;this.dispose=function(){n();k.releaseIfNotUndefined(b.reflTextureId,f)};this.beginSlot=function(a){return c===a};this.getProgram=function(){return h||p};this.getAllPrograms=function(){return[l,p]};this.updateParameters=
function(){var e=a.getParams();b.ambient=e.ambient;b.diffuse=e.diffuse;b.specular=e.specular;b.shininess=e.shininess;b.opacity=e.opacity;b.polygonOffset=e.polygonOffset;b.reflectivity=e.reflectivity;b.flipV=e.flipV;b.doubleSided=e.doubleSided;b.cullFace=e.cullFace;b.transparent!=e.transparent&&(c=y(e.transparent),b.transparent=e.transparent);b.initTexture=e.initTexture;this.updateTexture(e.textureId);e.atlasRegions&&(b.atlasRegions=e.atlasRegions);b.blendModeOneOne=e.blendModeOneOne;b.inverseWindingOrder=
e.inverseWindingOrder};this.bind=function(a,e){var c=a.gl;h=e.shadowMap&&e.shadowMap.getEnableState()?l:p;a.bindProgram(h);h.setUniform3fv("ambient",b.ambient);h.setUniform3fv("diffuse",b.diffuse);h.setUniform3fv("specular",b.specular);h.setUniform1f("shininess",b.shininess);h.setUniform1f("opacity",b.opacity);e.shadowMap||h.setUniform1f("depthHalfPixelSz",-1);this.bindTexture(a,h);m&&this.bindTextureSize(a,h);a.setBlendFunctionSeparate(c.SRC_ALPHA,c.ONE_MINUS_SRC_ALPHA,c.ONE,c.ONE_MINUS_SRC_ALPHA);
void 0!==g&&(h.setUniform1i("reflTex",1),a.bindTexture(g,1),h.setUniform1f("reflectivity",b.reflectivity));b.inverseWindingOrder&&a.setFrontFace(c.CW);b.transparent&&(a.setBlendingEnabled(!0),b.blendModeOneOne&&(a.setBlendFunction(c.ONE,c.ONE),a.setDepthWriteEnabled(!1)));b.polygonOffset&&(a.setPolygonOffsetFillEnabled(!0),a.setPolygonOffset(2,2));w(a,b)};this.release=function(a,e){var c=a.gl;a.setPolygonOffsetFillEnabled(!1);x(a,b);a.setBlendingEnabled(!1);a.setBlendFunctionSeparate(c.SRC_ALPHA,
c.ONE_MINUS_SRC_ALPHA,c.ONE,c.ONE_MINUS_SRC_ALPHA);a.setDepthWriteEnabled(!0);a.setFrontFace(c.CCW)};this.bindView=function(a,b){h=b.shadowMap&&b.shadowMap.getEnableState()?l:p;var e=b.origin;k.bindView(e,b.view,h);k.bindCamPos(e,b.viewInvTransp,h);b.shadowMap&&b.shadowMap.bindView(h,e)};this.bindInstance=function(a,c){h.setUniformMatrix4fv("model",c.transformation);h.setUniformMatrix4fv("modelNormal",c.transformationNormal);if(e&&c.instanceParameters){var d=c.instanceParameters.color;d&&(z.multiply(b.ambient,
d,v),h.setUniform3fv("ambient",v),z.multiply(b.diffuse,d,v),h.setUniform3fv("diffuse",v),h.setUniform1f("opacity",b.opacity*d[3]))}};this.getDrawMode=function(a){return a.gl.TRIANGLES}},C=function(a,d,f,b){k.basicGLMaterialConstructor(this,a);var c=s.clone(a.getParams()),g=null!=b?d.get(r.hasAttribute(a.getVertexBufferLayout(),"uv0")?"depthTexturedShadowMap":"depthShadowMap"):d.get(r.hasAttribute(a.getVertexBufferLayout(),"uv0")?"depthTextured":"depth"),q=y(c.transparent,c.writeStencil);k.singleTextureGLMaterialConstructor(this,
f,c);this.beginSlot=function(a){return q===a};this.getProgram=function(){return g};this.updateParameters=function(){var b=a.getParams();c.initTexture=b.initTexture;c.cullFace=b.cullFace;c.inverseWindingOrder=b.inverseWindingOrder;this.updateTexture(b.textureId)};this.bind=function(a,b){var d=a.gl;a.bindProgram(g);g.setUniform2fv("nearFar",b.nearFar);c.inverseWindingOrder&&a.setFrontFace(d.CW);this.bindTexture(a,g);w(a,c)};this.release=function(a){var b=a.gl;x(a,c);c.inverseWindingOrder&&a.setFrontFace(b.CCW)};
this.bindView=function(a,b){k.bindView(b.origin,b.view,g)};this.bindInstance=function(a,b){g.setUniformMatrix4fv("model",b.transformation)};this.getDrawMode=function(a){return a.gl.TRIANGLES}},H=function(a,d,f){C.call(this,a,d,f,!0)},I=function(a,d,f){k.basicGLMaterialConstructor(this,a);var b=s.clone(a.getParams()),c=d.get(r.hasAttribute(a.getVertexBufferLayout(),"uv0")?"normalTextured":"normal"),g=y(b.transparent,b.writeStencil);k.singleTextureGLMaterialConstructor(this,f,b);this.beginSlot=function(a){return g===
a};this.getProgram=function(){return c};this.updateParameters=function(){var c=a.getParams();b.initTexture=c.initTexture;b.cullFace=c.cullFace;b.inverseWindingOrder=c.inverseWindingOrder;this.updateTexture(c.textureId)};this.bind=function(a,e){var d=a.gl;a.bindProgram(c);this.bindTexture(a,c);c.setUniformMatrix4fv("viewNormal",e.viewInvTransp);w(a,b);b.inverseWindingOrder&&a.setFrontFace(d.CW)};this.release=function(a){var e=a.gl;x(a,b);b.inverseWindingOrder&&a.setFrontFace(e.CCW)};this.bindView=
function(a,b){k.bindView(b.origin,b.view,c)};this.bindInstance=function(a,b){c.setUniformMatrix4fv("model",b.transformation);c.setUniformMatrix4fv("modelNormal",b.transformationNormal)};this.getDrawMode=function(a){return a.gl.TRIANGLES}},J=function(a,d,f,b){k.basicGLMaterialConstructor(this,a);var c=s.clone(a.getParams()),g=d.get(r.hasAttribute(a.getVertexBufferLayout(),"uv0")?"highlightTextured":"highlight"),l=t.OPAQUE_MATERIAL;k.singleTextureGLMaterialConstructor(this,f,c);this.beginSlot=function(a){return l===
a};this.getProgram=function(){return g};this.updateParameters=function(){var b=a.getParams();c.initTexture=b.initTexture;c.cullFace=b.cullFace;c.inverseWindingOrder=b.inverseWindingOrder;this.updateTexture(b.textureId)};this.bind=function(a,b){var d=a.gl;a.bindProgram(g);this.bindTexture(a,g);w(a,c);c.inverseWindingOrder&&a.setFrontFace(d.CW)};this.release=function(a){var b=a.gl;x(a,c);c.inverseWindingOrder&&a.setFrontFace(b.CW)};this.bindView=function(a,b){k.bindView(b.origin,b.view,g)};this.bindInstance=
function(a,b){g.setUniformMatrix4fv("model",b.transformation);g.setUniformMatrix4fv("modelNormal",b.transformationNormal)};this.getDrawMode=function(a){return a.gl.TRIANGLES}};n.loadShaders=function(a,d,f,b){a._parse(D);B=b.extensions.angleInstancedArrays;b.extensions.shaderTextureLOD;b.extensions.standardDerivatives;var c=new E("phong",["vsPhong","fsPhong"],null,f,d,a,b);c.addNaryShaderSnippetSuffix([{value:"none",programNameSuffix:"",shaderSnippetSuffix:""},{value:"Textured"},{value:"AtlasTextured"}]);
c.addBinaryShaderSnippetSuffix("Refl","Refl",[!1,!0]);c.addDefine("Color","VERTEXCOLORS");c.addDefine("FlipV","FLIPV");c.addDefine("DoubleSided","DOUBLESIDED");c.addDefine("Instanced","INSTANCED");c.addDefine("InstColor","INSTANCEDCOLOR");c.addDefine("ReceiveShadows","RECEIVE_SHADOWS");f.shaderVariators.Material=c;var c=new l(b,a.vsDepth,a.fsDepth,m.Default3D,["BIAS_SHADOWMAP 1"]),g=new l(b,a.vsDepthTextured,a.fsDepthTextured,m.Default3D,["BIAS_SHADOWMAP 1"]),k=new l(b,a.vsDepth,a.fsDepth,m.Default3D),
e=new l(b,a.vsDepthTextured,a.fsDepthTextured,m.Default3D),p=new l(b,a.vsNormal,a.fsNormal,m.Default3D),n=new l(b,a.vsNormalTextured,a.fsNormalTextured,m.Default3D),h=new l(b,a.vsHighlight,a.fsHighlight,m.Default3D);b=new l(b,a.vsHighlightTextured,a.fsHighlightTextured,m.Default3D);f.add("depthShadowMap",c);f.add("depthTexturedShadowMap",g);f.add("depth",k);f.add("depthTextured",e);f.add("normal",p);f.add("normalTextured",n);f.add("highlight",h);f.add("highlightTextured",b);d.add("fsDepth",{source:a.fsDepth});
d.add("fsDepthTextured",{source:a.fsDepthTextured});d.add("fsDepthShadowMap",{source:a.fsDepthShadowMap,defines:["BIAS_SHADOWMAP 1"]});d.add("fsDepthTexturedShadowMap",{source:a.fsDepthTextured,defines:["BIAS_SHADOWMAP 1"]});d.add("vsDepth",{source:a.vsDepth});d.add("fsNormal",{source:a.fsNormal})};return n});