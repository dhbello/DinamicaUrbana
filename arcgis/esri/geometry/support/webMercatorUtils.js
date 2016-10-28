// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.1/esri/copyright.txt for details.
//>>built
define(["require","exports","../SpatialReference"],function(w,e,g){function h(a,b,d,c,f){if("point"===a.type)b=b(a.x,a.y,c,q),f.x=b[0],f.y=b[1];else if("extent"===a.type)l=b(a.xmin,a.ymin,c,q),f.xmin=l[0],f.ymin=l[1],b=b(a.xmax,a.ymax,c,q),f.xmax=b[0],f.ymax=b[1];else if("polyline"===a.type||"polygon"===a.type){var e="polyline"===a.type,m=e?a.paths:a.rings,g=[],h=void 0;a=0;for(l=m.length;a<l;a++){var k=m[a],h=[];g.push(h);for(var p=0,n=k.length;p<n;p++)h.push(b(k[p][0],k[p][1],c))}e?f.paths=g:f.rings=
g}else if("multipoint"===a.type){e=a.points;m=[];a=0;for(l=e.length;a<l;a++)m[a]=b(e[a][0],e[a][1],c);f.points=m}f.spatialReference=d;return f;var l}function s(a,b){var d=a&&(null!=a.wkid?a:a.spatialReference),c=b&&(null!=b.wkid?b:b.spatialReference);return!d||!c?!1:c.equals(d)?!0:c.isWebMercator&&4326===d.wkid||d.isWebMercator&&4326===c.wkid}function n(a,b,d,c){void 0===c&&(c=[0,0]);89.99999<b?b=89.99999:-89.99999>b&&(b=-89.99999);b*=t;c[0]=a*t*k;c[1]=0.5*k*Math.log((1+Math.sin(b))/(1-Math.sin(b)));
return c}function r(a,b,d,c){void 0===d&&(d=!1);void 0===c&&(c=[0,0]);a=a/k*u;c[0]=d?a:a-360*Math.floor((a+180)/360);d=c;b=v/2-2*Math.atan(Math.exp(-1*b/k));d[1]=b*u;return c}var k=6378137,v=3.141592653589793,u=57.29577951308232,t=0.017453292519943,q=[0,0];e.canProject=s;e.project=function(a,b){var d=a&&a.spatialReference,c=b&&(null!=b.wkid?b:b.spatialReference);return!s(d,c)?null:d.equals(c)?a.clone():c.isWebMercator?h(a,n,g.WebMercator,!1,a.clone()):4326===c.wkid?h(a,r,g.WGS84,!1,a.clone()):null};
e.lngLatToXY=n;e.xyToLngLat=r;e.geographicToWebMercator=function(a,b,d){void 0===b&&(b=!1);void 0===d&&(d=a.clone());return h(a,n,g.WebMercator,b,d)};e.webMercatorToGeographic=function(a,b,d){void 0===b&&(b=!1);void 0===d&&(d=a.clone());return h(a,r,g.WGS84,b,d)}});