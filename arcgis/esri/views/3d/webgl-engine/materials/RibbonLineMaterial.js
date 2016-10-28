// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.1/esri/copyright.txt for details.
//>>built
require({cache:{"url:esri/views/3d/webgl-engine/materials/RibbonLineMaterial.xml":'\x3c?xml version\x3d"1.0" encoding\x3d"UTF-8"?\x3e\r\n\r\n\x3csnippets\x3e\r\n\r\n\x3csnippet name\x3d"vsRibbonLine"\x3e\x3c![CDATA[\r\n\tuniform mat4 proj;\r\n\tuniform mat4 view;\r\n\tuniform mat4 model;\r\n\r\n\tuniform float extLineWidth;\r\n\tuniform float nearPlane;\r\n\r\n\tattribute vec3 $position;\t\r\n\tattribute vec2 $uv0;\r\n\tvarying vec2 vtc;\r\n\r\n\tattribute vec4 $color;\r\n\tvarying vec4 vColor;\r\n\r\n\tattribute float size;\r\n\r\n#ifndef WALL\r\n\tuniform float miterLimit;\r\n\tattribute vec3 $auxpos1;\r\n\tattribute vec3 $auxpos2;\r\n#endif\r\n\r\n#ifdef SCREENSCALE\r\n\tuniform vec2 screenSize;\r\n\t$toScreenCoords\r\n#define VECTYPE vec2\r\n#define ZEROVEC vec2(0.0, 0.0)\r\n#define PERPENDICULAR(v) vec2(v.y, -v.x);\r\n#define ISOUTSIDE (left.x * right.y - left.y * right.x)*$uv0.y \x3e 0.0\r\n\r\n#else //ifdef SCREENSCALE\r\n\r\n#define VECTYPE vec3\r\n#define ZEROVEC vec3(0.0, 0.0, 0.0)\r\n// these macros are only valid for "strip" type lines:\r\n#define PERPENDICULAR(v) cross(up/*vec3(0.0, 1.0, 0.0)*/, v)\r\n#define ISOUTSIDE dot(cross(left, right), up/*vec3(0.0, 1.0, 0.0)*/)*$uv0.y \x3c 0.0\r\n\r\n#endif //ifdef SCREENSCALE\r\n\r\n\tfloat interp(float ncp, vec4 a, vec4 b) {\r\n\t\treturn (-ncp - a.z) / (b.z - a.z);\r\n\t}\r\n\r\n#ifdef SCREENSCALE\r\n\r\n  void clipAndTransform(inout vec4 pos, inout vec4 prev, inout vec4 next) {\r\n\t\tfloat vnp \x3d nearPlane*0.99;\r\n\r\n\t\t//We have four vertices per point on the line. Start and end vertices \r\n\t\t//are treated differently --\x3e d \x3e 0, d \x3c 0\r\n\t\tfloat d \x3d abs($uv0.y) - 1.1;\r\n\r\n\t\t//current pos behind ncp --\x3e we need to clip\r\n\t\tif(pos.z \x3e -nearPlane) {\t\t\t\r\n\t\t\tif (d \x3c 0.0) {\r\n\t\t\t\t//previous in front of ncp\r\n\t\t\t\tif(prev.z \x3c -nearPlane) {\r\n\t\t\t\t\tpos \x3d mix(prev, pos, interp(vnp, prev, pos));\r\n\t\t\t\t\tnext \x3d pos;\t\t\t\r\n\t\t\t\t} else {\r\n\t\t\t\t  pos \x3d vec4(0, 0, 0, 1);\r\n\t\t\t  }\r\n\t\t\t}\r\n\t\t\t//next in front of ncp\r\n\t\t\tif(d \x3e 0.0) {\r\n\t\t\t\tif(next.z \x3c -nearPlane) {\r\n\t\t\t\t\tpos \x3d mix(pos, next, interp(vnp, pos, next));\r\n\t\t\t\t\tprev \x3d pos;\t\t\t\r\n\t\t\t\t} else {\r\n\t\t\t\t\tpos \x3d vec4(0, 0, 0, 1);\r\n\t\t\t\t}\r\n\t\t\t}\t\t\t\r\n\t\t}\telse { \r\n\t\t\t//current position visible \r\n\t\t\t//previous behind ncp\r\n\t\t\tif (prev.z \x3e -nearPlane) {\t\t\t\t\r\n\t\t\t\tprev \x3d mix(pos, prev, interp(vnp, pos, prev));\t\t\t\t\r\n\t\t\t}\t\t\t\t\t\r\n\t\t\t//next behind ncp\r\n\t\t\tif (next.z \x3e -nearPlane) {\r\n\t\t\t\tnext \x3d mix(next, pos, interp(vnp, next, pos));\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\tpos\x3d proj * pos;\r\n\t\tpos.xy *\x3d screenSize;\r\n\t\tpos /\x3d pos.w;\r\n\r\n\t\tnext \x3d proj * next;\r\n\t\tnext.xy *\x3d screenSize;\r\n\t\tnext /\x3d next.w;\r\n\r\n\t\tprev \x3d proj * prev;\r\n\t\tprev.xy *\x3d screenSize;\r\n\t\tprev /\x3d prev.w;\t\t\r\n  }\r\n\r\n#endif // SCREENSCALE\r\n\r\n\tvoid main(void) {\r\n\r\n\tfloat lineWidth \x3d extLineWidth + $size; \r\n\r\n#ifdef SCREENSCALE\r\n\r\n#if 0\r\n\t\tvec4 pos \x3d toScreenCoords($position.xyz);\r\n\t\tvec2 left \x3d (pos - toScreenCoords($auxpos1)).xy;\r\n\t\tvec2 right \x3d (toScreenCoords($auxpos2) - pos).xy;\r\n#else\r\n\t\tvec4 pos  \x3d view * vec4((model * vec4($position.xyz, 1.0)).xyz, 1.0); \r\n\t\tvec4 prev \x3d view * vec4((model * vec4($auxpos1.xyz, 1.0)).xyz, 1.0); \r\n\t\tvec4 next \x3d view * vec4((model * vec4($auxpos2.xyz, 1.0)).xyz, 1.0); \r\n\r\n\t\tclipAndTransform(pos, prev, next);\r\n\r\n\t\tvec2 left \x3d (pos - prev).xy;\r\n\t\tvec2 right \x3d (next - pos).xy;\r\n#endif\r\n\r\n#else // ifdef SCREENSCALE\r\n\t\tvec4 pos \x3d vec4($position, 1.0);\r\n#ifndef WALL\r\n\t\tvec3 left \x3d $position.xyz - $auxpos1;\r\n\t\tvec3 right \x3d $auxpos2 - $position.xyz;\r\n\t\tvec3 up \x3d normalize($position.xyz);\r\n#endif // ifndef WALL\r\n#endif // ifdef SCREENSCALE\r\n\r\n#ifdef WALL\r\n\t\tfloat displacementLen \x3d lineWidth;\r\n\t\tvec3 displacementDir \x3d normalize($position.xyz);//vec3(0.0, 1.0, 0.0);\r\n#else // ifdef WALL\r\n\r\n\t\tfloat leftLen \x3d length(left);\r\n\t\tleft \x3d (leftLen \x3e 0.001) ? left/leftLen : ZEROVEC;\r\n\r\n\t\tfloat rightLen \x3d length(right);\r\n\t\tright \x3d (rightLen \x3e 0.001) ? right/rightLen : ZEROVEC;\r\n\r\n\t\t// determine if vertex is on the "outside or "inside" of the join\r\n\t\tbool isOutside \x3d ISOUTSIDE;\r\n\r\n\t\t// compute miter join position first\r\n\t\tfloat displacementLen \x3d lineWidth;\r\n\t\tVECTYPE displacementDir \x3d normalize(left + right);\r\n\t\tdisplacementDir \x3d PERPENDICULAR(displacementDir);\r\n\t\tif (leftLen \x3e 0.001 \x26\x26 rightLen \x3e 0.001) {\r\n\t\t\tfloat nDotSeg \x3d dot(displacementDir, left);\r\n\t\t\tdisplacementLen /\x3d length(nDotSeg*left - displacementDir);\r\n\r\n\t\t\t// limit displacement of inner vertices\r\n\t\t\tif (!isOutside)\r\n\t\t\t\tdisplacementLen \x3d min(displacementLen, min(leftLen, rightLen)/abs(nDotSeg));\r\n\t\t}\r\n\r\n\t\tif (isOutside \x26\x26 (displacementLen \x3e miterLimit*lineWidth)) {\r\n\t\t\t// convert to bevel join if miterLimit is exceeded\r\n\t\t\tif (leftLen \x3c 0.001)\r\n\t\t\t    displacementDir \x3d right;\r\n\t\t\telse if (rightLen \x3c 0.001)\r\n\t\t\t\tdisplacementDir \x3d left;\r\n\t\t\telse\r\n\t\t\t\tdisplacementDir \x3d (abs($uv0.y) - 1.1 \x3c 0.0) ? left : right;\r\n\t\t\tdisplacementDir \x3d normalize(displacementDir);\r\n\t\t\tdisplacementDir \x3d PERPENDICULAR(displacementDir);\r\n\t\t\tdisplacementLen \x3d lineWidth;\r\n\t\t}\r\n\r\n#endif // ifdef WALL\r\n\r\n#ifdef SCREENSCALE\r\n\t\tpos.xy +\x3d displacementDir * floor($uv0.y + 0.5) * displacementLen;\r\n\t\tpos.xy /\x3d screenSize;\r\n#else\r\n\t\tpos.xyz +\x3d displacementDir * floor($uv0.y + 0.5) * displacementLen;\r\n\t\tpos \x3d proj * view * model * pos;\r\n#endif\r\n\r\n\t\tvtc \x3d $uv0;\r\n\t\tvColor \x3d $color * 0.003921568627451; // \x3d 1/255\r\n\t\tgl_Position \x3d pos;\r\n\t}\r\n]]\x3e\x3c/snippet\x3e\r\n\r\n\x3csnippet name\x3d"fsRibbonLine"\x3e\x3c![CDATA[\r\n\tprecision mediump float;\r\n\r\n\tuniform vec4 eColor;\r\n\tvarying vec4 vColor;\r\n\tvarying vec2 vtc;\r\n\r\n\tvoid main() {\r\n\t\tgl_FragColor \x3d eColor * vColor;\r\n\t\t//gl_FragColor.a \x3d 1;\r\n\t}\r\n]]\x3e\x3c/snippet\x3e\r\n\r\n\x3c/snippets\x3e'}});
define("dojo/_base/lang dojo/text!./RibbonLineMaterial.xml ./internal/MaterialUtil ../lib/Util ../lib/gl-matrix ../lib/RenderSlot ../../../webgl/Program ../lib/DefaultVertexAttributeLocations ../lib/DefaultVertexBufferLayouts ../../../webgl/Util".split(" "),function(J,K,B,A,u,L,C,D,M,N){var O=[255,255,255,255],P=[0,0,0,0],h=u.vec3d,F=u.vec2d,G=u.mat4d,q=h.create(),r=h.create(),s=h.create(),E=h.create(),y=F.create(),z=F.create(),H=h.create(),I=h.create();u=function(f,u){B.basicMaterialConstructor(this,
u);var p=A.VertexAttrConstants;f=f||{};f.color=f.color||[1,1,1,1];f.width=f.width||0;f.type=f.type||"screen";f.join=f.join||"miter";f.miterLimit="miter"===f.join?f.miterLimit||5:f.miterLimit;var l="wall"===f.type?2:4,d=M.Pos3Tex;"wall"!==f.type&&(d=[{name:"position",count:3,type:5126,offset:0,stride:64,normalized:!1},{name:"uv0",count:2,type:5126,offset:12,stride:64,normalized:!1},{name:"auxpos1",count:3,type:5126,offset:20,stride:64,normalized:!1},{name:"auxpos2",count:3,type:5126,offset:32,stride:64,
normalized:!1},{name:"color",count:4,type:5126,offset:44,stride:64,normalized:!1},{name:"size",count:1,type:5126,offset:60,stride:64,normalized:!1}]);this.canBeMerged=!1;this.getParams=function(){return f};this.getParameterValues=function(){var e={color:f.color,width:f.width,type:f.type,join:f.join,polygonOffset:f.polygonOffset};"miter"===f.join&&(e.miterLimit=f.miterLimit);return e};this.setParameterValues=function(e){for(var c in e)e.hasOwnProperty(c)&&(A.assert("type"!==c,"RibbonLineMaterial: type cannot be changed after creation"),
f[c]=e[c]);this.notifyDirty("matChanged")};this.dispose=function(){};this.getOutputAmount=function(e){return((e/2+1-2)*l+4)*N.getStride(d)/4};this.getVertexBufferLayout=function(){return d};this.fillInterleaved=function(e,c,d,k,a,b){d=e.vertexAttr[p.POSITION].data;k=e.vertexAttr[p.COLOR]?e.vertexAttr[p.COLOR].data:O;var h=e.vertexAttr[p.SIZE]?e.vertexAttr[p.SIZE].data:P;(e=e.faces&&e.faces.indices&&e.faces.indices.position)&&e.length!=2*(d.length/3-1)&&console.warn("RibbonLineMaterial does not support indices");
if("wall"===f.type){k=b;h=d.length/3;b=0;e=d[0];for(var g=d[1],n=d[2],m,l,t,q=0;q<h;q++){var r=3*q;m=e;l=g;t=n;e=d[r];g=d[r+1];n=d[r+2];c&&(e=c[0]*e+c[4]*g+c[8]*n+c[12],g=c[1]*e+c[5]*g+c[9]*n+c[13],n=c[2]*e+c[6]*g+c[10]*n+c[14]);b+=Math.sqrt((e-m)*(e-m)+(g-l)*(g-l)+(n-t)*(n-t));a[k++]=e;a[k++]=g;a[k++]=n;a[k++]=b;a[k++]=-1;a[k++]=e;a[k++]=g;a[k++]=n;a[k++]=b;a[k++]=1}}else{e=d.length/3;g=d[0];n=d[1];m=d[2];l=0;c&&(g=c[0]*g+c[4]*n+c[8]*m+c[12],n=c[1]*g+c[5]*n+c[9]*m+c[13],m=c[2]*g+c[6]*n+c[10]*m+c[14]);
t=g;var q=n,r=m,v=d[3],w=d[4],x=d[5];c&&(v=c[0]*v+c[4]*w+c[8]*x+c[12],w=c[1]*v+c[5]*w+c[9]*x+c[13],x=c[2]*v+c[6]*w+c[10]*x+c[14]);for(var s=0;s<e;s++){var u=3*s;s<e-1&&(v=d[u+3],w=d[u+4],x=d[u+5],c&&(v=c[0]*v+c[4]*w+c[8]*x+c[12],w=c[1]*v+c[5]*w+c[9]*x+c[13],x=c[2]*v+c[6]*w+c[10]*x+c[14]));l+=Math.sqrt((t-g)*(t-g)+(q-n)*(q-n)+(r-m)*(r-m));a[b++]=t;a[b++]=q;a[b++]=r;a[b++]=l;a[b++]=0===s?-1.2:-1;a[b++]=g;a[b++]=n;a[b++]=m;a[b++]=v;a[b++]=w;a[b++]=x;a[b++]=k[0];a[b++]=k[1];a[b++]=k[2];a[b++]=k[3];a[b++]=
h[0];a[b++]=t;a[b++]=q;a[b++]=r;a[b++]=l;a[b++]=0===s?1.2:1;a[b++]=g;a[b++]=n;a[b++]=m;a[b++]=v;a[b++]=w;a[b++]=x;a[b++]=k[0];a[b++]=k[1];a[b++]=k[2];a[b++]=k[3];a[b++]=h[0];0<s&&s<e-1&&(a[b++]=t,a[b++]=q,a[b++]=r,a[b++]=l,a[b++]=-1.2,a[b++]=g,a[b++]=n,a[b++]=m,a[b++]=v,a[b++]=w,a[b++]=x,a[b++]=k[0],a[b++]=k[1],a[b++]=k[2],a[b++]=k[3],a[b++]=h[0],a[b++]=t,a[b++]=q,a[b++]=r,a[b++]=l,a[b++]=1.2,a[b++]=g,a[b++]=n,a[b++]=m,a[b++]=v,a[b++]=w,a[b++]=x,a[b++]=k[0],a[b++]=k[1],a[b++]=k[2],a[b++]=k[3],a[b++]=
h[0]);g=t;n=q;m=r;t=v;q=w;r=x}}};this.intersect=function(e,c,d,k,a,b,l,g,n,m,u,t){if(t){c=e.getData().getVertexAttr(p.position).position.data;e=e.getData().getVertexAttr(p.SIZE).size;e=(e&&e.data[0])+f.width;l=Number.MAX_VALUE;for(g=0;g<c.length-5;g+=3){q[0]=c[g];q[1]=c[g+1];q[2]=c[g+2];G.multiplyVec3(d,q);r[0]=c[g+3];r[1]=c[g+4];r[2]=c[g+5];G.multiplyVec3(d,r);n.projectPoint(q,y);n.projectPoint(r,z);if(0>y[2]&&0<z[2])h.subtract(q,r,s),m=n.frustumPlanes,t=-(h.dot(m[4],q)+m[4][3]),m=t/h.dot(s,m[4]),
h.scale(s,m,s),h.add(q,s,q),n.projectPoint(q,y);else if(0<y[2]&&0>z[2])h.subtract(r,q,s),m=n.frustumPlanes,t=-(h.dot(m[4],r)+m[4][3]),m=t/h.dot(s,m[4]),h.scale(s,m,s),h.add(r,s,r),n.projectPoint(r,z);else if(0>y[2]&&0>z[2])continue;m=A.projectVectorVector2D(y,z,k);m<l&&(l=m,h.set(q,H),h.set(r,I))}l<e/2+4&&(d=A.linelineDistance3D(H,I,a,b),k=Number.MAX_VALUE,d[0]&&(h.subtract(d[2],a,E),k=0.98*h.length(E)/h.dist(a,b)),u(k,E))}};this.getGLMaterials=function(){return{color:Q,depthShadowMap:void 0,normal:void 0,
depth:void 0,highlight:void 0}};this.getAllTextureIds=function(){return[]}};var Q=function(f,h){B.basicGLMaterialConstructor(this,f);var p=J.clone(f.getParams());p.miterLimit="miter"===p.join?p.miterLimit:0;delete p.join;var l=h.get("ribbonLine_"+p.type);this.updateParameters=function(){var d=f.getParams();p.polygonOffset=d.polygonOffset;p.color=d.color;p.width=d.width;p.miterLimit="miter"===d.join?d.miterLimit:0};this.beginSlot=function(d){return d===L.TRANSPARENT_MATERIAL};this.getProgram=function(){return l};
this.bind=function(d,e){d.bindProgram(l);l.setUniform4fv("eColor",p.color);l.setUniform1f("miterLimit",p.miterLimit);l.setUniform1f("nearPlane",e.nearFar[0]);"screen"===p.type?(l.setUniform2fv("screenSize",[e.viewport[2],e.viewport[3]]),l.setUniform1f("extLineWidth",p.width*e.pixelRatio)):l.setUniform1f("extLineWidth",p.width);p.polygonOffset&&(d.setPolygonOffsetFillEnabled(!0),d.setPolygonOffset(0,-4));d.setBlendingEnabled(!0);d.setFaceCullingEnabled(!1);1>p.color[3]&&d.setDepthWriteEnabled(!1)};
this.release=function(d){p.polygonOffset&&d.setPolygonOffsetFillEnabled(!1);d.setBlendingEnabled(!1);d.setDepthWriteEnabled(!0)};this.bindView=function(d,e){B.bindView(e.origin,e.view,l)};this.bindInstance=function(d,e){l.setUniformMatrix4fv("model",e.transformation)};this.getDrawMode=function(d){return d.gl.TRIANGLE_STRIP}};u.loadShaders=function(f,h,p,l){f._parse(K);h=new C(l,f.vsRibbonLine,f.fsRibbonLine,D.Default3D,["SCREENSCALE"]);var d=new C(l,f.vsRibbonLine,f.fsRibbonLine,D.Default3D);f=new C(l,
f.vsRibbonLine,f.fsRibbonLine,D.Default3D,["WALL"]);p.add("ribbonLine_screen",h);p.add("ribbonLine_strip",d);p.add("ribbonLine_wall",f)};return u});