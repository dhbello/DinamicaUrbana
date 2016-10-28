// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.1/esri/copyright.txt for details.
//>>built
define(["./mathUtils","../lib/glMatrix","../lib/SunCalc"],function(C,r,u){var n=r.vec3d,m=r.mat4d,G=C.lerp,K=m.identity(),k={azimuth:0,altitude:0};r={local:{altitude:2E3,ambientAtNight:0.2,ambientAtNoon:0.75,ambientAtTwilight:0.5,diffuseAtNoon:0.25,diffuseAtTwilight:0.5},global:{altitude:2E4,ambient:0.5,diffuse:0.5},planarDirection:{localAltitude:1E5,globalAltitude:1E6,globalAngles:{azimuth:Math.PI/2,altitude:Math.PI/2}}};var g={ambient:{color:n.create(),intensity:0},diffuse:{color:n.create(),intensity:0,
direction:n.create()}},v={settings:r,computeDirection:function(e,g,h,a){a||(a=n.create());var d=m.identity(K);if("global"===h)u.getPosition(e,0,0,k),n.set3(0,0,-1,a),m.rotateX(d,-k.azimuth),m.rotateY(d,-k.altitude);else{var c=v.settings.planarDirection;h=c.globalAngles;c=(g.z-c.localAltitude)/(c.globalAltitude-c.localAltitude);c=C.clamp(c,0,1);1>c?(u.getPosition(e,g.y,g.x,k),k.azimuth=(1-c)*k.azimuth+c*h.azimuth,k.altitude=(1-c)*k.altitude+c*h.altitude):(k.azimuth=h.azimuth,k.altitude=h.altitude);
n.set3(0,-1,0,a);m.rotateZ(d,-k.azimuth);m.rotateX(d,-k.altitude)}m.multiplyVec3(d,a);return a},computeShadowsEnabled:function(e,g){return"global"===g?!0:e.z<v.settings.planarDirection.localAltitude},computeColorAndIntensity:function(k,m){var h,a,d,c=m.z;a=v.settings;n.set3(1,1,1,g.ambient.color);g.ambient.intensity=a.global.ambient;n.set3(1,1,1,g.diffuse.color);g.diffuse.intensity=a.global.diffuse;c=(c-a.local.altitude)/(a.global.altitude-a.local.altitude);c=C.clamp(c,0,1);if(1>c){d=u.getTimes(k,
m.y,m.x);a=k.valueOf();var l,f;d.polarException===u.POLAR_EXCEPTION.MIDNIGHT_SUN?(l=a-36E5*(k.getHours()+48)-6E4*k.getMinutes(),f=l+432E6):d.polarException===u.POLAR_EXCEPTION.POLAR_NIGHT?(l=a-2,f=a-1):(l=d.sunrise.valueOf(),f=d.sunset.valueOf());var p=f-l;d=l+p/2;var q=p/4;h=d-q;var q=d+q,b=0.06*p,p=l-b/2;l+=b/2;var t=f-b/2,r=f+b/2;f=v.settings.local;var D=[0.01,f.ambientAtNight],E=[0.8,0.8,1],F=[0.01,0.01,0.01],w=[f.diffuseAtTwilight,f.ambientAtTwilight],x=[1,0.75,0.75],y=[0.8,0.8,1],z=[0.9*f.diffuseAtNoon,
f.ambientAtNoon],A=[1,0.98,0.98],B=[0.98,0.98,1],H=[f.diffuseAtNoon,f.ambientAtNoon],I=[1,1,1],J=[1,1,1];f=[0,0];var s=[0,0],b=[0,0];a<p||a>r?(f=D,s=F,b=E):a<l?(b=l-p,f=e(a-p,b,D,w),s=e(a-p,b,F,x),b=e(a-p,b,E,y)):a<h?(b=h-l,f=e(a-l,b,w,z),s=e(a-l,b,x,A),b=e(a-l,b,y,B)):a<d?(b=d-h,f=e(a-h,b,z,H),s=e(a-h,b,A,I),b=e(a-h,b,B,J)):a<q?(b=q-d,f=e(a-d,b,H,z),s=e(a-d,b,I,A),b=e(a-d,b,J,B)):a<t?(b=t-q,f=e(a-q,b,z,w),s=e(a-q,b,A,x),b=e(a-q,b,B,y)):a<r&&(b=r-t,f=e(a-t,b,w,D),s=e(a-t,b,x,F),b=e(a-t,b,y,E));a=
f[0];d=s;h=f[1];n.lerp(b,g.ambient.color,c,g.ambient.color);g.ambient.intensity=G(h,g.ambient.intensity,c);n.lerp(d,g.diffuse.color,c,g.diffuse.color);g.diffuse.intensity=G(a,g.diffuse.intensity,c)}return g}},e=function(e,g,h,a){for(var d=[],c=0;c<h.length;c++)d[c]=(a[c]-h[c])*e/g+h[c];return d};return v});