// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.1/esri/copyright.txt for details.
//>>built
define(["dojo/has"],function(c){var h=c("ff"),f=c("ie"),k=c("webkit");c=c("opera");var g=k&&"-webkit-transform"||h&&"-moz-transform"||c&&"-o-transform"||f&&"-ms-transform"||"transform",e=!f||9<f,d={supports3DTransforms:e,transformStyleName:g,clip:function(a,b){a.clip=b?"rect("+b.top+"px, "+b.right+"px, "+b.bottom+"px,"+b.left+"px)":""},setTransform:function(a,b){var c=null;2===b.length&&(c=d.translate(b));6===b.length&&(c=d.matrix3d(b));d.setTransformStyle(a,c)},setTransformStyle:function(a,b){a.transform=
a[g]=b},setOrigin:function(){return e?function(a,b){a["transform-origin"]=b[0]+"px "+b[1]+"px"}:function(a,b){a["transform-origin"]=b[0]+"px "+b[1]+"px 0"}}(),matrix:function(a){return"matrix("+a[0].toFixed(10)+","+a[1].toFixed(10)+","+a[2].toFixed(10)+","+a[3].toFixed(10)+","+a[4]+","+a[5]+")"},matrix3d:function(){return e?function(a){if(6===a.length)return"matrix3d("+a[0].toFixed(10)+","+a[1].toFixed(10)+",0,0,"+a[2].toFixed(10)+","+a[3].toFixed(10)+",0,0,0,0,1,0,"+Math.round(a[4]).toFixed(10)+
","+Math.round(a[5]).toFixed(10)+",0,1)"}:function(a){return"matrix("+a[0].toFixed(10)+","+a[1].toFixed(10)+","+a[2].toFixed(10)+","+a[3].toFixed(10)+","+Math.round(a[4])+","+Math.round(a[5])+")"}}(),translate:function(a){return"translate("+Math.round(a[0])+"px, "+Math.round(a[1])+"px)"},rotate:function(a){return d.rotateZ(a.toFixed(3))},rotateZ:function(){return e?function(a){return"rotateZ("+a+"deg)"}:function(a){return"rotate("+a+"deg)"}}()};return d});