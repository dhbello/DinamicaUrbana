// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.1/esri/copyright.txt for details.
//>>built
define(["require","exports","dojo/Deferred","./Error"],function(l,f,g,k){f.eachAlways=function(a){var b=new g,d=[],c=a.length;0===c&&b.resolve(d);a.forEach(function(a){var h={promise:a};d.push(h);a.then(function(a){h.value=a}).otherwise(function(a){h.error=a}).then(function(){--c;0===c&&b.resolve(d)})});return b.promise};f.reject=function(a){var b=new g;b.reject(a);return b.promise};f.resolve=function(a){void 0===a&&(a=null);var b=new g;b.resolve(a);return b.promise};f.after=function(a,b){void 0===
b&&(b=null);var d=0,c=new g(function(){d&&(clearTimeout(d),d=0)}),d=setTimeout(function(){c.resolve(b)},a);return c.promise};f.timeout=function(a,b,d){var c=0,e=new g(a.cancel);a.then(function(a){e.isFulfilled()||(e.resolve(a),c&&(clearTimeout(c),c=0))});a.otherwise(function(a){e.isFulfilled()||(e.reject(a),c&&(clearTimeout(c),c=0))});c=setTimeout(function(){e.reject(d||k("promiseUtils:timeout","The wrapped promise did not resolve within "+b+" ms"))},b);return e.promise}});