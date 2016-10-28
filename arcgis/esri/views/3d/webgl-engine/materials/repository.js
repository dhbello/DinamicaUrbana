// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.1/esri/copyright.txt for details.
//>>built
require({cache:{"url:esri/views/3d/webgl-engine/materials/internal/util.xml":'\x3c?xml version\x3d"1.0" encoding\x3d"UTF-8"?\x3e\r\n\r\n\x3csnippets\x3e\r\n\r\n\x3csnippet name\x3d"matchPixelCenter"\x3e\x3c![CDATA[\r\n\tvec4 matchPixelCenter(vec4 clipCoord, vec2 widthHeight) {\r\n\t\tvec2 xy \x3d vec2(.500123) + .5 * clipCoord.xy / clipCoord.w;\r\n\t\tvec2 ij \x3d floor(xy * widthHeight);\r\n\t\tvec2 pixelSz \x3d vec2(1.0) / widthHeight;\r\n\t\tvec2 result \x3d (((vec2(.5) + ij) * pixelSz) * 2.0 - vec2(1.0)) * clipCoord.w;\r\n\t\treturn vec4(result.x, result.y, clipCoord.z, clipCoord.w);\r\n\t}\r\n]]\x3e\x3c/snippet\x3e\r\n\r\n\x3csnippet name\x3d"float2rgba"\x3e\x3c![CDATA[\r\n\tvec4 float2rgba(const in float v) {\r\n\t\tvec4 enc \x3d vec4(1.0, 255.0, 65025.0, 160581375.0) * v;\r\n\t\tenc \x3d fract(enc);\r\n\t\tenc -\x3d enc.yzww * vec4(1.0/255.0, 1.0/255.0, 1.0/255.0, 0.0);\r\n\t\treturn enc;\r\n\t}\r\n]]\x3e\x3c/snippet\x3e\r\n\r\n\x3csnippet name\x3d"rgba2float"\x3e\x3c![CDATA[\r\n\tfloat rgba2float(vec4 rgba) {\r\n\t\treturn dot(rgba, vec4(1.0, 1.0/255.0, 1.0/65025.0, 1.0/160581375.0));\r\n\t}\r\n]]\x3e\x3c/snippet\x3e\r\n\r\n\x3csnippet name\x3d"calcFragDepth"\x3e\x3c![CDATA[\r\n\t#extension GL_OES_standard_derivatives : enable\r\n\r\n\tfloat calcFragDepth(const in float depth) {\r\n\t\t//calc polygon offset\r\n\t\tconst float SLOPE_SCALE \x3d 2.0;\r\n\t\tconst float BIAS \x3d 2.0 * .000015259;\t\t// 1 / (2^16 - 1)\r\n\t\tfloat m \x3d max(abs(dFdx(depth)), abs(dFdy(depth)));\r\n\t\tfloat result \x3d depth + SLOPE_SCALE * m + BIAS;\r\n\t\treturn clamp(result, .0, .999999);\r\n\t}\r\n]]\x3e\x3c/snippet\x3e\r\n\r\n\x3csnippet name\x3d"evalShadow"\x3e\x3c![CDATA[\r\n\t$rgba2float\r\n\r\n\t// "matrix" parameter used to have const qualifier as well, but IE11 couldn\'t deal with it at time of writing.\r\n\t// once IE11 is fine with it, const should probably be re-introduced\r\n\tfloat evalShadow(const in vec3 vpos, const in float depth, const in sampler2D depthTex, const int num, const in vec4 distance, in mat4 matrix[4], const in float halfPxSz) {\r\n\t\t//choose correct cascade\r\n\t\tint i \x3d depth \x3c distance[1] ? 0 : depth \x3c distance[2] ? 1 : depth \x3c distance[3] ? 2 : 3;\r\n\r\n\t\tif (i \x3e\x3d num) return .0;\r\n\r\n\t\tmat4 mat \x3d i \x3d\x3d 0 ? matrix[0] : i \x3d\x3d 1 ? matrix[1] : i \x3d\x3d 2 ? matrix[2] : matrix[3];\r\n\r\n\t\tvec4 lv \x3d mat * vec4(vpos, 1.0);\r\n\t\tlv.xy /\x3d lv.w;\r\n\r\n\t\t//vertex completely outside? -\x3e no shadow\r\n\t\tvec3 lvpos \x3d .5 * lv.xyz + vec3(.5);\r\n\t\tif (lvpos.z \x3e\x3d 1.0) return .0;\r\n\t\tif (lvpos.x \x3c .0 || lvpos.x \x3e 1.0 || lvpos.y \x3c .0 || lvpos.y \x3e 1.0) return .0;\r\n\r\n\t\t//calc coord in cascade texture\r\n\t\tvec2 uv \x3d vec2(float(i - 2 * (i / 2)) *.5, float(i / 2) * .5) + .5 * lvpos.xy;\r\n\r\n\t\tfloat texSize \x3d .5 / halfPxSz;\r\n\r\n\t\t//filter, offset by half pixels\r\n\t\tvec2 st \x3d fract((vec2(halfPxSz) + uv) * texSize);\r\n\r\n\t\tfloat s00 \x3d rgba2float(texture2D(depthTex, uv + vec2(-halfPxSz, -halfPxSz))) \x3c lvpos.z ? 1.0 : .0;\r\n\t\tfloat s10 \x3d rgba2float(texture2D(depthTex, uv + vec2(halfPxSz, -halfPxSz))) \x3c lvpos.z ? 1.0 : .0;\r\n\t\tfloat s11 \x3d rgba2float(texture2D(depthTex, uv + vec2(halfPxSz, halfPxSz))) \x3c lvpos.z ? 1.0 : .0;\r\n\t\tfloat s01 \x3d rgba2float(texture2D(depthTex, uv + vec2(-halfPxSz, halfPxSz))) \x3c lvpos.z ? 1.0 : .0;\r\n\r\n\t\treturn mix(mix(s00, s10, st.x), mix(s01, s11, st.x), st.y);\r\n\t}\r\n]]\x3e\x3c/snippet\x3e\r\n\r\n\x3csnippet name\x3d"normal2envTC"\x3e\x3c![CDATA[\r\n\tvec2 normal2envTC(vec3 normal) {\r\n\t\tfloat v \x3d .5 + .5 * asin(normal.y) * 0.63661977;\r\n\t\tfloat u \x3d .5 - .5 * atan(normal.z, normal.x) * 0.31830988;\r\n\t\treturn vec2(u, v);\r\n\t}\r\n]]\x3e\x3c/snippet\x3e\r\n\r\n\x3csnippet name\x3d"vertexShaderShowDepth"\x3e\x3c![CDATA[\r\n\tuniform mat4 proj;\r\n\tattribute vec2 $position;\r\n\tattribute vec2 $uv0;\r\n\tvarying vec2 vtc;\r\n\r\n\tvoid main(void) {\r\n\t\tgl_Position \x3d proj * vec4($position.x, $position.y, .0, 1.0);\r\n\t\tvtc \x3d $uv0;\r\n\t}\r\n]]\x3e\x3c/snippet\x3e\r\n\r\n\t\x3csnippet name\x3d"fragmentShaderShowDepth"\x3e\x3c![CDATA[\r\n\tprecision mediump float;\r\n\r\n\tuniform sampler2D depthTex;\r\n\tvarying vec2 vtc;\r\n\t$rgba2float\r\n\tvoid main() {\r\n\t//\tgl_FragColor \x3d vec4(vec3(texture2D(depthTex, vtc).a), 1.0);\r\n\t\tgl_FragColor \x3d vec4(rgba2float(texture2D(depthTex, vtc)));\r\n\t//\tgl_FragColor \x3d texture2D(depthTex, vtc);\r\n\t}\r\n]]\x3e\x3c/snippet\x3e\r\n\r\n\x3csnippet name\x3d"vsUVQuad"\x3e\x3c![CDATA[\r\n\tattribute vec2 $position;\r\n\tvarying vec2 uv;\r\n\r\n\tvoid main(void) {\r\n\t\tgl_Position \x3d vec4($position.x, $position.y, .0, 1.0);\r\n\t\tuv \x3d $position * .5 + vec2(.5);\r\n\t}\r\n]]\x3e\x3c/snippet\x3e\r\n\r\n\x3csnippet name\x3d"toScreenCoords"\x3e\x3c![CDATA[\r\n\tvec4 toScreenCoords(vec3 vertex) {\r\n\t\tvec4 vClipSpace \x3d proj * view * vec4((model * vec4(vertex, 1.0)).xyz, 1.0);\r\n\t\tvClipSpace.xy *\x3d screenSize;\r\n\t\treturn vClipSpace/abs(vClipSpace.w);\r\n\t}\r\n]]\x3e\x3c/snippet\x3e\r\n\r\n\x3c/snippets\x3e\r\n'}});
define("dojo/text!./internal/util.xml ./BillboardMaterial ./ColorMaterial ./HUDMaterial ./LeafCardMaterial ./Material ./RibbonLineMaterial ./WaterMaterial ./internal/SimpleGLMaterial ./internal/TexOnlyGLMaterial ./internal/BlendLayers".split(" "),function(e,f,g,h,k,l,m,n,p,q,r){return{initializeShaders:function(a,b,c,d){a._parse(e);p.loadShaders(a,b,c,d);q.loadShaders(a,b,c,d);l.loadShaders(a,b,c,d);f.loadShaders(a,b,c,d);h.loadShaders(a,b,c,d);k.loadShaders(a,b,c,d);m.loadShaders(a,b,c,d);n.loadShaders(a,
b,c,d);r.loadShaders(a,b,c,d);g.loadShaders(a,b,c,d)}}});