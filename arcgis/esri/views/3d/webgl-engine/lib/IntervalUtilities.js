// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.1/esri/copyright.txt for details.
//>>built
define(["require","exports"],function(g,h){return function(){function f(){}f.copyIntervals=function(c){for(var a=[],b=0;b<c.length;b++){var d=c[b];a.push([d[0],d[1]])}return a};f.convertFaceToIndexRange=function(c,a){for(var b=0;b<c.length;b++){var d=c[b];d[0]*=a;d[1]=d[1]*a+(a-1)}};f.sortIntervals=function(c){return c.sort(function(a,b){return a[0]===b[0]?a[1]>b[1]?1:a[1]<b[1]?-1:0:a[0]>b[0]?1:a[0]<b[0]?-1:0})};f.intersectIntervals=function(c,a){if(0>=c.length)return[];for(var b=[],d=0;d<c.length;d++){var e=
c[d];e[1]<a[0]||e[0]>a[1]||(e=[e[0],e[1]],e[0]<a[0]&&(e[0]=a[0]),e[1]>a[1]&&(e[1]=a[1]),b.push(e))}return b};f.mergeIntervals=function(c){if(0>=c.length)return[];var a=[];c=this.sortIntervals(c);a.push(c[0]);for(var b=1;b<c.length;b++){var d=a[a.length-1];d[1]+1<c[b][0]?a.push(c[b]):d[1]<c[b][1]&&(d[1]=c[b][1],a.pop(),a.push(d))}return a};f.invertIntervals=function(c,a){for(var b=[],d=0,e=0;e<c.length;e++){var f=c[e];f[0]>d&&b.push([d,f[0]-1]);d=f[1]+1}d<=a&&b.push([d,a]);return b};f.offsetIntervals=
function(c,a){for(var b=[],d=0;d<c.length;d++){var e=c[d];b.push([e[0]+a,e[1]+a])}return b};return f}()});