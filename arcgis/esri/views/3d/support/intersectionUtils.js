// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.1/esri/copyright.txt for details.
//>>built
define(["../lib/glMatrix"],function(l){function m(c,b,a,d){d.clip[0]=0;d.clip[1]=a?d.len:Number.MAX_VALUE;for(a=0;a<c.length;a++){var e;var f=c[a],h=b;e=d;var k=g.dot(f,e.dir),f=-g.dot(h,f)-f[3];0>f&&0<=k?e=!1:-1E-6<k&&1E-6>k?e=!0:(0>f||0>k)&&!(0>f&&0>k)?e=!0:(f/=k,0<k?f<e.clip[1]&&(e.clip[1]=f):f>e.clip[0]&&(e.clip[0]=f),e=e.clip[0]<=e.clip[1]);if(!e)return!1}return!0}function n(c,b,a,d){c?(a&&d&&(h.len=g.dist(b,a)),g.set(c,h.dir)):d?(h.len=g.dist(b,a),g.scale(g.subtract(a,b,h.dir),1/h.len)):g.normalize(g.subtract(a,
b,h.dir));return h}var g=l.vec3d;l=l.vec2d;var h={dir:g.create(),len:0,clip:l.create()},p={planeSphere:function(c,b,a){return c[0]*b[0]+c[1]*b[1]+c[2]*b[2]+c[3]<a},frustumSphere:function(c,b,a){for(var d=0;6>d;d++)if(!p.planeSphere(c[d],b,a))return!1;return!0},frustumRay:function(c,b,a,d){a=n(d,b,a,!1);return m(c,b,null,a)},frustumPoint:function(c,b){for(var a=0;6>a;a++)if(0>-g.dot(b,c[a])-c[a][3])return!1;return!0},frustumLineSegment:function(c,b,a,d){d=n(d,b,a,!0);return m(c,b,a,d)}};return p});