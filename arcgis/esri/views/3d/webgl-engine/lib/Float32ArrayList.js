// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.1/esri/copyright.txt for details.
//>>built
define(["require","exports","./Util"],function(g,h,f){return function(){function e(b){null==b?b=16:65536>b&&(b=f.nextHighestPowerOfTwo(b));this.array=new Float32Array(b);this.size=0}e.prototype.resize=function(b,c){void 0===c&&(c=!1);this.size=b;var a,d;if(this.size>this.array.length){for(a=this.array.length||1;a<this.size;)a*=2;d=new Float32Array(a);c&&d.set(this.array);this.array=d;return!0}if(this.size<=this.array.length/2){a=this.array.length;for(d=2*this.size;a>=d;)a/=2;d=new Float32Array(a);
c&&d.set(this.array.subarray(0,a));this.array=d;return!0}return!1};e.prototype.append=function(b){var c=this.size;this.resize(this.size+b.length,!0);this.array.set(b,c)};e.prototype.erase=function(b,c){for(var a=b;a<c;++a)this.array[a]=0};e.prototype.getArray=function(){return this.array};e.prototype.getSize=function(){return this.size};return e}()});