// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.1/esri/copyright.txt for details.
//>>built
define(["../../support/projectionUtils","../../lib/glMatrix","../../webgl-engine/lib/Util"],function(n,v,w){var e=v.vec3d,m=v.mat4d,x=w.assert,q={PER_VERTEX:"perVertex",BOUNDINGBOX:"boundingBox",NO_REPROJECTION:"noReprojection"},h=new Float64Array(3E3);return{ReprojectionTypes:q,reprojectPoints:function(d,b,g,r,e,c,f){d===q.PER_VERTEX?g=this.reprojectPointsPerVertex(b,g,e,c,f,r):d===q.BOUNDINGBOX?g=this.reprojectBoundingBox(b,g,e,c,f):(d=m.create(),m.identity(d),b=m.create(),n.computeLinearTransformation(e,
g,b,f),g={localTrafo:d,globalTrafo:b});return g},reprojectPointsPerVertex:function(d,b,g,r,e,c){var f=m.create();n.computeLinearTransformation(g,b,f,e);var a=m.create(),a=m.inverse(f,a),l=m.create();m.identity(l);if(!c){c=[0,0,0];var k=d.length/3;n.vectorToVector(b,g,c,r);for(g=b=0;g<k;g+=1E3){var p=Math.min(1E3,k-g);for(b=0;b<p;b++)h[3*b]=d[3*(g+b)]+c[0],h[3*b+1]=d[3*(g+b)+1]+c[1],h[3*b+2]=d[3*(g+b)+2]+c[2];n.bufferToBuffer(h,r,0,h,e,0,p);var s,t,u;for(b=0;b<p;b++)s=h[3*b],t=h[3*b+1],u=h[3*b+2],
d[3*(g+b)]=a[0]*s+a[4]*t+a[8]*u+a[12],d[3*(g+b)+1]=a[1]*s+a[5]*t+a[9]*u+a[13],d[3*(g+b)+2]=a[2]*s+a[6]*t+a[10]*u+a[14]}}return{localTrafo:l,globalTrafo:f}},reprojectNormalsPerVertex:function(d,b,g,e,h){x(e.equals(n.SphericalRenderSpatialReference));e=m.create();n.computeLinearTransformation(g,b,e,h);b=m.create();b=m.inverse(e,b);g=d.length/3;for(var c,f=0;f<g;f++)h=d[3*f],e=d[3*f+1],c=d[3*f+2],d[3*f]=b[0]*h+b[4]*e+b[8]*c,d[3*f+1]=b[1]*h+b[5]*e+b[9]*c,d[3*f+2]=b[2]*h+b[6]*e+b[10]*c},reprojectBoundingBox:function(d,
b,g,h,q){for(var c=[Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE],f=[-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE],a=0;a<d.length/3;a++)for(var l=[d[3*a],d[3*a+1],d[3*a+2]],k=0;3>k;k++)c[k]=Math.min(c[k],l[k]),f[k]=Math.max(f[k],l[k]);a=this.geographicToProjected(b,g,h);e.add(a,c,c);e.add(a,f,f);for(a=0;3>a;a++)f[a]==c[a]&&(f[a]+=1);a=[[c[0],c[1],c[2]],[f[0],c[1],c[2]],[c[0],f[1],c[2]],[c[0],c[1],f[2]]];for(l=0;4>l;l++)k=a[l],n.vectorToVector(k,h,k,q);h=e.subtract(a[1],a[0],e.create());
l=e.subtract(a[2],a[0],e.create());k=e.subtract(a[3],a[0],e.create());e.scale(h,1/(f[0]-c[0]));e.scale(l,1/(f[1]-c[1]));e.scale(k,1/(f[2]-c[2]));var c=e.length(h),f=e.length(l),p=e.length(k);if(3<Math.abs(c-f)||3<Math.abs(c-p)||3<Math.abs(f-p)){for(a=0;a<d.length/3;a++)d[3*a]*=c,d[3*a+1]*=f,d[3*a+2]*=p;e.normalize(h);e.normalize(l);e.normalize(k)}d=m.createFromMatrixRowMajor([h[0],l[0],k[0],0,h[1],l[1],k[1],0,h[2],l[2],k[2],0,0,0,0,1]);c=[0,0,0,0];n.vectorToVector(b,g,c,q);return{globalTrafo:m.createFromMatrixRowMajor([1,
0,0,c[0],0,1,0,c[1],0,0,1,c[2],0,0,0,1]),localTrafo:d}},geographicToProjected:function(d,b,e){return 4326===e.wkid?[d[0],d[1],d[2]]:d}}});