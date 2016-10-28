// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.1/esri/copyright.txt for details.
//>>built
define("../../../../core/declare ./Graphics3DSymbolLayer ./Graphics3DGraphicLayer ./Graphics3DSymbolCommonCode ../../../../geometry/Polygon ../../support/projectionUtils ../../lib/glMatrix ../../webgl-engine/Stage ../../webgl-engine/lib/Object3D ../../webgl-engine/lib/Geometry ../../webgl-engine/lib/GeometryData ../../webgl-engine/materials/Material ../../webgl-engine/lib/Util ./earcut/earcut".split(" "),function(K,Y,Z,G,$,aa,N,O,ba,ca,P,da,ea,fa){function ga(a,b,c,l,d,e,f,m,k,n,r,w,g,ha){var A=c.length/
3,u=0;r+=2*l.count;var h=l.index,D=l.count,p=k,v=r;s.set(g,q);var x=0<w?1:-1,h=3*h,t=p;g=3*t;for(var y=p+D,p=3*y,B=0;B<D;++B)ha&&(q[0]=a[h+0],q[1]=a[h+1],q[2]=a[h+2],s.normalize(q)),d[g+0]=a[h+0],d[g+1]=a[h+1],d[g+2]=a[h+2],e[g+0]=b[h+0],e[g+1]=b[h+1],e[g+2]=b[h+2],f[g+0]=-x*q[0],f[g+1]=-x*q[1],f[g+2]=-x*q[2],m[t]=0,d[p+0]=a[h+0]+w*q[0],d[p+1]=a[h+1]+w*q[1],d[p+2]=a[h+2]+w*q[2],e[p+0]=b[h+0],e[p+1]=b[h+1],e[p+2]=b[h+2],f[p+0]=x*q[0],f[p+1]=x*q[1],f[p+2]=x*q[2],m[y]=w,g+=3,p+=3,h+=3,t+=1,y+=1;h=0;
g=3*(v+A);p=3*v;a=Q;b=R;0>w&&(a=R,b=Q);for(B=0;B<A;++B)n[g+0]=c[h+a[0]],n[g+1]=c[h+a[1]],n[g+2]=c[h+a[2]],n[p+0]=c[h+b[0]]+D,n[p+1]=c[h+b[1]]+D,n[p+2]=c[h+b[2]]+D,g+=3,p+=3,h+=3;k+=2*l.count;r=r+2*A-(2*l.count+2*A);S(d,e,m,f,u,l.pathLengths[0],l.count,k,n,r,w);k+=4*l.pathLengths[0];r+=2*l.pathLengths[0];u+=l.pathLengths[0];for(c=1;c<l.pathLengths.length;++c)S(d,e,m,f,u,l.pathLengths[c],l.count,k,n,r,w),k+=4*l.pathLengths[c],r+=2*l.pathLengths[c],u+=l.pathLengths[c]}function J(a,b,c,l,d,e,f){l[e]=
l[f];f*=3;e*=3;a[e+0]=a[f+0];a[e+1]=a[f+1];a[e+2]=a[f+2];b[e+0]=b[f+0];b[e+1]=b[f+1];b[e+2]=b[f+2];c[e+0]=d[0];c[e+1]=d[1];c[e+2]=d[2]}function S(a,b,c,l,d,e,f,m,k,n,r){var w=d,g=d+1,q=d+f,A=d+f+1,u=m,h=m+1,D=m+2*e;m=m+2*e+1;0>r&&(w=d+f+1,A=d);n*=3;for(var p=0;p<e;++p){p===e-1&&(0<r?(g=d,A=d+f):(g=d,w=d+f));var v=a,x=w,t=g,y=q,B=H,x=3*x,t=3*t,y=3*y;s.set3(v[x++],v[x++],v[x++],L);s.set3(v[t++],v[t++],v[t++],T);s.set3(v[y++],v[y++],v[y++],U);s.subtract(T,L,V);s.subtract(U,L,W);s.cross(W,V,B);s.normalize(B,
B);J(a,b,l,c,H,u,w);J(a,b,l,c,H,h,g);J(a,b,l,c,H,D,q);J(a,b,l,c,H,m,A);k[n++]=u;k[n++]=D;k[n++]=m;k[n++]=u;k[n++]=m;k[n++]=h;w++;g++;q++;A++;u+=2;h+=2;D+=2;m+=2}}var z=ea.VertexAttrConstants,s=N.vec3d,X=N.mat4d,E=s.create(),q=s.create(),Q=[0,2,1],R=[0,1,2],I={};K=K([Y],{_prepareResources:function(){var a=this._getStageIdHint(),b=this._getMaterialOpacityAndColor(),c=s.create(b),b=b[3],c={diffuse:c,ambient:c,opacity:b,transparent:1>b||this._isPropertyDriven("opacity"),vertexColors:!0};this._material=
new da(c,a+"_3dlinemat");this._context.stage.add(O.ModelContentType.MATERIAL,this._material);this.resolve()},destroy:function(){this.isFulfilled()||this.reject();this._material&&this._context.stage.remove(O.ModelContentType.MATERIAL,this._material.getId())},createGraphics3DGraphic:function(a,b){var c=a.geometry;if("polygon"!==c.type&&"extent"!==c.type)return this._logWarning("unsupported geometry type for extrude symbol: "+c.type),null;var c="polygon"===c.type||"extent"===c.type?"rings":"paths",l=
"graphic"+a.uid,d=this._getVertexOpacityAndColor(b,Float32Array,255),e=this._getGraphicElevationInfo(a);return this._createAs3DShape(a,c,b,d,e,l,a.uid)},layerPropertyChanged:function(a,b,c){if("opacity"===a)return b=this._getMaterialOpacity(),c=1>b||this._isPropertyDriven("opacity"),this._material.setParameterValues({opacity:b,transparent:c}),!0;if("elevationInfo"===a){this._updateElevationInfo();a=this._context.elevationProvider;var l=this._context.renderCoordsHelper,d=G.ELEV_MODES.ABSOLUTE_HEIGHT,
e;for(e in b){var f=b[e],m=f._graphics[c];m&&(f=this._getGraphicElevationInfo(f.graphic),m.elevationAligner=f.mode!==d?M:null,m.elevationInfo.set(f),M(m,a,l))}return!0}return!1},_getExtrusionSize:function(a,b){var c=a.size&&this._isPropertyDriven("size")?G.getSingleSizeDriver(a.size):this.symbol.size||1;return c/=this._context.renderCoordsHelper.unitInMeters},_createAs3DShape:function(a,b,c,l,d,e,f){var m=a.geometry;"extent"===m.type&&(m=$.fromExtent(m));var k=m[b],n=m.hasZ;if(0<k.length){b=[];a=
[];var r=[],w=s.create(),g=Array(6),q=this._context.renderSpatialReference===aa.SphericalRenderSpatialReference;c=this._getExtrusionSize(c,this.symbol.size);var A=s.create();q||this._context.renderCoordsHelper.worldUpAtPosition(null,A);for(var n=G.getGeometryVertexData3D(k,n,m.spatialReference,this._context.renderSpatialReference,this._context.elevationProvider,d),m=n.geometryData.polygons,k=n.eleVertexData,n=n.vertexData,u=n.length/3,h=new Float64Array(18*u),D=new Float64Array(18*u),p=new Float64Array(18*
u),u=new Float64Array(6*u),v=0,x=0;x<m.length;++x){var t=m[x],y=t.count,B=t.index;if(this._context.clippingExtent&&(G.computeBoundingBox(k,B,y,g),G.boundingBoxClipped(g,this._context.clippingExtent)))continue;var z=new Float64Array(k.buffer,3*B*h.BYTES_PER_ELEMENT,3*y),C=t.holeIndices.map(function(a){return a-B}),z=fa(z,C,3);if(0<z.length){G.chooseOrigin(n,B,y,w);var C=new Uint32Array(6*y+2*z.length),E=6*y,F=new Float64Array(h.buffer,3*v*h.BYTES_PER_ELEMENT,3*E),H=new Float64Array(D.buffer,3*v*D.BYTES_PER_ELEMENT,
3*E),I=new Float64Array(p.buffer,3*v*p.BYTES_PER_ELEMENT,3*E),J=new Float64Array(u.buffer,1*v*u.BYTES_PER_ELEMENT,1*E);ga(n,k,z,t,F,I,H,J,0,C,0,c,A,q);G.subtractCoordinates(F,0,E,w);v+=6*y;t=this._createExtrudeGeometry(C,{positions:F,elevation:I,normals:H,heights:J},l,!1);t=new ca(t,e+"path"+x);t.singleUse=!0;b.push(t);a.push([this._material]);t=X.identity();X.translate(t,w,t);r.push(t)}}return 0<b.length?(l=new ba({geometries:b,materials:a,transformations:r,castShadow:!0,metadata:{layerId:this._context.layer.id,
graphicId:f},idHint:e}),e=null,d.mode!==G.ELEV_MODES.ABSOLUTE_HEIGHT&&(e=M),new Z(this,l,b,null,null,e,d)):null}this._logWarning("no paths found for extrusion symbol");return null},_createExtrudeGeometry:function(a,b,c,l){for(var d=a.length,e=new Uint32Array(d),f=0;f<d;f++)e[f]=0;f={};d={};f[z.POSITION]=a;f[z.NORMAL]=a;f[z.COLOR]=e;d[z.POSITION]={size:3,data:b.positions};d[z.NORMAL]={size:3,data:b.normals};d[z.COLOR]={size:4,data:c};d[z.SIZE]={size:1,data:b.heights};b.elevation&&(d.mapPos={size:3,
data:b.elevation},f.mapPos=a);a=[{type:"triangle",indices:f,positionKey:z.POSITION}];return l?{faces:a[0],vertexAttr:d,id:P.getNewId().toString()}:new P(a,d)}});var H=s.create(),L=s.create(),T=s.create(),U=s.create(),V=s.create(),W=s.create(),F=s.create(),C=s.create(),M=function(a,b,c){var l=a.stageObject;a=a.elevationInfo;var d=c.setAltitude;I.spatialReference=b.spatialReference;for(var e=l.getGeometryRecords(),f=e.length,m=0;m<f;m++){var k=e[m].geometry,n=e[m].transformation;C[0]=n[12];C[1]=n[13];
C[2]=n[14];k.invalidateBoundingInfo();for(var r=k.getData().getVertexAttr(),k=r[z.POSITION].data,n=r[z.SIZE].data,r=r.mapPos.data,s=k.length/3,g=0,q=0,A=!1,u=0;u<s;u++){I.x=r[q];I.y=r[q+1];I.z=r[q+2];F[0]=k[g];F[1]=k[g+1];F[2]=k[g+2];var h=G.computeElevation(b,I,a);E[0]=k[g]+C[0];E[1]=k[g+1]+C[1];E[2]=k[g+2]+C[2];d(h+n[g/3],E,0);k[g]=E[0]-C[0];k[g+1]=E[1]-C[1];k[g+2]=E[2]-C[2];h=0.01/c.unitInMeters;if(Math.abs(F[0]-k[g])>h||Math.abs(F[1]-k[g+1])>h||Math.abs(F[2]-k[g+2])>h)A=!0;q+=3;g+=3}A&&l.geometryVertexAttrsUpdated(m)}};
return K});