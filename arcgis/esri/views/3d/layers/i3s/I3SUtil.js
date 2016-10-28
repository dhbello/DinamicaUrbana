// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.1/esri/copyright.txt for details.
//>>built
define("require exports ../../lib/glMatrix ../../support/earthUtils ../../support/projectionUtils ../../../../core/requireUtils ../../../../core/promiseUtils ../../../../core/Error ../../../../core/urlUtils ../../../../geometry/support/webMercatorUtils dojo/_base/lang dojo/promise/all ../../../../request ../../../../geometry/SpatialReference ../../../../geometry/support/scaleUtils ../../webgl-engine/Stage ../../webgl-engine/materials/Material ../../webgl-engine/lib/Geometry ../../webgl-engine/lib/GeometryUtil ../../webgl-engine/lib/Object3D ../../webgl-engine/lib/Layer ../../webgl-engine/lib/Util ./I3SBinaryReader".split(" "),
function(M,g,u,x,s,N,t,y,O,z,P,Q,R,A,B,k,q,C,D,E,S,T,U){function v(a){return a&&parseInt(a.substring(a.lastIndexOf("/")+1,a.length),10)}function F(a){var e=new A(v(a.store.indexCRS||a.store.geographicCRS));return e.equals(a.spatialReference)?a.spatialReference:e}function G(a){var e=new A(v(a.store.vertexCRS||a.store.projectedCRS));return e.equals(a.spatialReference)?a.spatialReference:e}function H(a,e,b){void 0===b&&(b=["*"]);return a?N.when(M,["../../../../tasks/support/Query","../../../../tasks/QueryTask"]).then(function(c){var h=
c[1];c=new c[0]({objectIds:[e],outFields:b});return(new h(a.parsedUrl.path)).execute(c)}).then(function(a){return a&&a.features&&0<a.features.length?a.features[0].attributes:t.reject(Error("Feature not found in companion feature layer."))}):t.reject(Error("Companion feature layer not present."))}function I(a,e,b,c,h){void 0===c&&(c=["*"]);var g=c.some(function(a){return"*"===a});return Q(e.attributeData.map(function(b,d){if(!g&&!c.some(function(b){return a[d].name===b}))return t.resolve(null);var l=
O.makeAbsolute(b.href,e.baseUrl);return R(l,{query:{token:h},responseType:"array-buffer"}).then(function(b){return U.readBinaryAttribute(a[d],b.data)}).otherwise(function(){return null})})).then(function(f){for(var c={},e=0;e<f.length;e++)null!=f[e]&&(c[a[e].name]=f[e][b]);return c})}var J=u.vec4d,p=u.vec3d,r=u.mat4d,w=T.assert,K=J.create();g.DDS_ENCODING_STRING="image/vnd-ms.dds";g.BROWSER_SUPPORTED_IMAGE_ENCODING_STRINGS=["image/jpeg","image/png"];g.addTrailingSlash=function(a){"/"!==a[a.length-
1]&&(a+="/");return a};g.extractWkid=v;g.getIndexCrs=F;g.getVertexCrs=G;g.checkSpatialReference=function(a,e,b){var c=F(a),h=G(a);if(!z.canProject(c,e)||!z.canProject(h,e))throw new y("layerview:spatial-reference-incompatible","The spatial reference of this scene layer is incompatible with the spatial reference of the view",{layer:a,viewSR:e,indexSR:c,vertexSR:h});if("local"===b&&(null==B.getUnitValue(c)||null==B.getUnitValue(h)))throw new y("layerview:local-gcs-not-supported","Geographic coordinate systems are not supported in local scenes",
{layer:a,indexSR:c,vertexSR:h});};g.processNormals=function(a,e,b){switch(e){case "none":e=a.normals;b=a.positions;var c=a.normalInd,h=a.positionInd;w(a.normalInd.length===a.positionInd.length);a=p.create();for(var g=p.create(),f=0;f<h.length;f+=3){var d=3*h[f],l=b[d],n=b[d+1],L=b[d+2],d=3*h[f+1];a[0]=b[d]-l;a[1]=b[d+1]-n;a[2]=b[d+2]-L;d=3*h[f+2];g[0]=b[d]-l;g[1]=b[d+1]-n;g[2]=b[d+2]-L;p.cross(a,g,a);p.normalize(a);for(d=0;3>d;d++)l=3*c[f+d],e[l]=a[0],e[l+1]=a[1],e[l+2]=a[2]}break;case "east-north-up":break;
case "earth-centered":b(a.normals,s.SphericalRenderSpatialReference);break;case "vertex-reference-frame":break;default:throw Error("Received unexpected normalReferenceFrame: "+e);}};g.getAppropriateTextureEncoding=function(a,e){if(Array.isArray(a)){if(e){var b=a.indexOf(g.DDS_ENCODING_STRING);if(-1<b)return b}for(b=0;b<a.length;b++)if(-1<g.BROWSER_SUPPORTED_IMAGE_ENCODING_STRINGS.indexOf(a[b]))return b;throw Error("Could not find appropriate texture encoding (among "+a.toString()+")");}return-1};
g.findIntersectingNodes=function(a,e,b,c,h,g){if(null!=b&&(s.mbsToMbs(b.mbs,c,K,e),0!==this.intersectBoundingBoxWithMbs(a,K))){g.push(b);for(var f=null!=b.children?b.children.length:0,d=0;d<f;d++)this.findIntersectingNodes(a,e,h[b.children[d].id],c,h,g)}};g.intersectBoundingBoxWithMbs=function(a,e){var b=e[0],c=e[1],h=e[2],g=e[3],f=0;if(b<a[0])var d=a[0]-b,f=f+d*d;c<a[1]&&(d=a[1]-c,f+=d*d);h<a[2]&&(d=a[2]-h,f+=d*d);b>a[3]&&(d=b-a[3],f+=d*d);c>a[4]&&(d=c-a[4],f+=d*d);h>a[5]&&(d=h-a[5],f+=d*d);if(f>
g*g)return 0;if(0<f)return 1;f=Infinity;b-a[0]<f&&(f=b-a[0]);c-a[1]<f&&(f=c-a[1]);h-a[2]<f&&(f=h-a[2]);a[3]-b<f&&(f=a[3]-b);a[4]-c<f&&(f=a[4]-c);a[5]-h<f&&(f=a[5]-h);return f>g?2:1};g.makeNodeDebugVisualizer=function(a,e,b){function c(a){return{ambient:a,diffuse:[0,0,0],transparent:!0,opacity:0.5,blendModeOneOne:!1}}var h=new C(D.createCylinderGeometry(1,1,64,[0,0,1],[0,0,0],!1),"debugCylinder"),g=new C(D.createSphereGeometry(1),"debugSphere"),f={red:new q(c([0.8,0,0]),"debugMaterialRed"),grey:new q(c([0.4,
0.4,0.4]),"debugMaterialGrey"),brown:new q(c([0.2,0.1,0]),"debugMaterialBrown"),green:new q(c([0,0.8,0]),"debugMaterialGreen"),blue:new q(c([0,0,0.8]),"debugMaterialBlue"),yellow:new q(c([0.8,0.8,0]),"debugMaterialYellow"),magenta:new q(c([0.8,0,0.8]),"debugMaterialMagenta")},d;for(d in f)a.add(k.ModelContentType.MATERIAL,f[d]);a.add(k.ModelContentType.GEOMETRY,h);b=new S(b+"_debug",{interaction:"IGNORED"},b+"_debug");a.add(k.ModelContentType.LAYER,b);a.addToViewContent([b.getId()]);var l=p.create(),
n=r.create();return{engineLayer:b,added:{},show:function(a,b,c){var d=a.computedMbs;d||(d=J.create(),s.mbsToMbs(a.mbs,b,d,e.spatialReference));var g="node"+a.id+"dbg";p.set(d,l);var m=d[3];if(m>x.earthRadius/10&&e.spatialReference===s.SphericalRenderSpatialReference){this.showWS(l,Math.max(0.01*m,1E4),c,g+"_center");var d=p.length(l),k=x.earthRadius;k+m>d&&(m=(d*d+k*k-m*m)/(2*d),p.scale(l,m/d),m=Math.sqrt(k*k-m*m))}r.identity(n);r.scale(n,[m,m,0.05*m]);c=f[c];w(c);c=new E({name:g,geometries:[h],materials:[[c]],
transformations:[n],castShadow:!1,idHint:g});s.computeLinearTransformation(b,a.mbs,n,e.spatialReference);null!=l&&(n[12]=l[0],n[13]=l[1],n[14]=l[2]);c.setObjectTransformation(n);this._addToStage(c,g)},showWS:function(a,b,c,d){var e=r.identity();r.scale(e,[b,b,b]);b=f[c];w(b);e=new E({name:d,geometries:[g],materials:[[b]],transformations:[e],castShadow:!1,idHint:d});b=r.identity();r.translate(b,a);e.setObjectTransformation(b);this._addToStage(e,d)},_addToStage:function(b,c){a.add(k.ModelContentType.OBJECT,
b);this.engineLayer.addObject(b);var d=this.added[c];void 0!==d&&(a.remove(k.ModelContentType.OBJECT,d.getId()),this.engineLayer.removeObject(d));this.added[c]=b},clear:function(){for(var b in this.added){var c=this.added[b];a.remove(k.ModelContentType.OBJECT,c.getId());this.engineLayer.removeObject(c)}this.added={}},dispose:function(){this.clear();for(var b in f)a.remove(k.ModelContentType.MATERIAL,f[b].getId());a.remove(k.ModelContentType.GEOMETRY,h.getId());a.remove(k.ModelContentType.LAYER,this.engineLayer.getId())}}};
g.postData=function(a,e,b){var c=new XMLHttpRequest;c.open("PUT","/put.php"+a,!0);c.setRequestHeader("Content-type",b);c.send(e)};g.whenGraphicAttributes=function(a,e,b,c,g){c=c.filter(function(a){return!e.attributes.hasOwnProperty(a)});if(0===c.length)return t.resolve(e);var k=function(a){P.mixin(e.attributes,a);return e},f=a.companionFeatureLayer,d=a.attributeStorageInfo;return f?H(f,b,c).then(k):d&&(b=g(),null!=b)?I(d,b.node,b.index,c,a.token).then(k):t.reject()};g.queryAttributesFromFeatureLayer=
H;g.queryAttributesFromCachedAttributes=I;g.binaryIndexOf=function(a,e){for(var b=0,c=a.length-1;b<c;){var g=b+(c-b>>1);e>a[g]?b=g+1:c=g}return e===a[b]?b:~b}});