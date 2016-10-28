// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.1/esri/copyright.txt for details.
//>>built
define(["dojo/_base/lang","./mathUtils","../../../geometry/Point","../../../geometry/SpatialReference","../../../geometry/support/webMercatorUtils"],function(l,f,g,m,p){var e=6378137,k=Math.PI*e,h=new g(0,0,m.WGS84),n={earthRadius:e,halfEarthCircumference:k,earthCircumference:2*k,metersPerDegree:k/180,getGreatCircleDistance:function(a,b,c,d){void 0===c&&(void 0===d&&l.isObject(a)&&l.isObject(b))&&(c=b.get("longitude"),d=b.get("latitude"),b=a.get("latitude"),a=a.get("longitude"));b=f.deg2rad(b);d=
f.deg2rad(d);a=f.deg2rad(a);c=f.deg2rad(c);a-=c;c=Math.sin((b-d)/2);a=Math.sin(a/2);b=2*f.asin(Math.sqrt(c*c+Math.cos(b)*Math.cos(d)*a*a))*e;return b=Math.round(1E4*b)/1E4},getGreatCircleSpanAt:function(a,b,c){var d=b.spatialReference,e=new g(b.x,a.y,d),f=new g(c.x,a.y,d);b=new g(a.x,b.y,d);a=new g(a.x,c.y,d);return{lon:this.getGreatCircleDistance(e,f),lat:this.getGreatCircleDistance(b,a)}},getLonDeltaForDistance:function(a,b,c){a=c/e;b=f.deg2rad(b);a=Math.sin(a/2);b=Math.cos(b);b=2*f.asin(Math.sqrt(a*
a/(b*b)));return f.rad2deg(b)},getLatDeltaForDistance:function(a,b,c){return f.rad2deg(c/e)},getLatLonDeltaForDistance:function(a,b,c){return{lat:this.getLatDeltaForDistance(a,b,c),lon:this.getLonDeltaForDistance(a,b,c)}},getMaxCameraAltitude:function(a){a=f.deg2rad(a/2);return(1-Math.sin(a))*e/Math.sin(a)},getViewExtentDistance:function(a,b){var c=f.deg2rad(b/2),c=(a+e)*Math.cos(c)-Math.sqrt(Math.pow(Math.cos(c)*(a+e),2)-a*a-2*a*e);return 2*f.acos((Math.pow(a+e,2)+Math.pow(e,2)-Math.pow(c,2))/(2*
(a+e)*e))*e},computeCarthesianDistance:function(a,b){function c(a){var b=f.deg2rad(a.get("latitude")),c=f.deg2rad(a.get("longitude")),d=Math.cos(b);a=e+(a.z||0);return[Math.cos(c)*d*a,Math.sin(b)*a,-Math.sin(c)*d*a]}var d=c(a),g=c(b),d=[g[0]-d[0],g[1]-d[1],g[2]-d[2]];return Math.sqrt(d[0]*d[0]+d[1]*d[1]+d[2]*d[2])},longitudeToTimezone:function(a,b){var c=a/15;b||(c=Math.round(c));return c},positionToTimezone:function(a,b){a.spatialReference.wkid!==m.WGS84.wkid?p.webMercatorToGeographic(a,!1,h):(h.x=
a.x,h.y=a.y);h.z=a.z;b||(b={hours:0,minutes:0,seconds:0});b.hours=n.longitudeToTimezone(h.x,!0);var c=b.hours%1;b.hours-=c;b.minutes=60*c;c=b.minutes%1;b.minutes-=c;b.seconds=Math.round(60*c);return b}};return n});