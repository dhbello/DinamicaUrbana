// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.1/esri/copyright.txt for details.
//>>built
define(["../mixins/AnimationMixin","../../lib/glMatrix","../../support/mathUtils"],function(s,f,n){function t(b,a){var c=a[0]-b[0],g=a[1]-b[1],d=a[2]-b[2],h=a[3]-b[3];return c*c+g*g+d*d+h*h}function u(b,a){return Math.sqrt(t(b,a))}function v(b){this.interpolate=function(a,c,b){b=Math.min(5*b,0.3);d.lerp(a.eye,c.eye,b);d.lerp(a.center,c.center,b);d.lerp(a.up,c.up,b);a.fov=n.lerp(a.fov,c.fov,b);a.padding=m.lerp(a.padding,c.padding,b,p)}}function w(b,a,c){a=a||250;c=c||a;var g=0,f=0,h=0,q=0,r=0;this.interpolate=
function(e,k,l){g=b.easeInOutInterpLinear(c,a,e.eye,k.eye,l,g,d);f=b.easeInOutInterpLinear(c,a,e.center,k.center,l,f,d);h=b.easeInOutInterpLinear(c,a,e.up,k.up,l,h,d);r=b.easeInOutInterpLinear(c,a,e.padding,k.padding,l,r,{dist:u,lerp:function(a,b,c){return m.lerp(a,b,c,p)},set:function(a){e.padding=a}});q=b.easeInOutInterpLinear(c,a,e.fov,k.fov,l,q,{dist:function(a,b){return Math.abs(b-a)},lerp:n.lerp,set:function(a){e.fov=a}})}}var d=f.vec3d,m=f.vec4d,p=m.create();return s.createSubclass({declaredClass:"esri.views.3d.navigation.planar.AnimationPlanar",
constructor:function(){this.interpolationTypes={linear:v,easeInOut:w}}})});