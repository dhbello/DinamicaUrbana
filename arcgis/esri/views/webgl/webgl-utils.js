// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.1/esri/copyright.txt for details.
//>>built
define([],function(){var e=function(b,d){for(var a=["webgl","experimental-webgl","webkit-3d","moz-webgl"],c=null,f=0;f<a.length;++f){try{c=b.getContext(a[f],d)}catch(e){}if(c)break}return c},g=(window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(b,d){return window.setTimeout(b,1E3/60)}).bind(window),h=(window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||
window.oCancelAnimationFrame||window.msCancelAnimationFrame||window.clearTimeout).bind(window);return{create3DContext:e,setupWebGL:function(b,d){function a(a){var c=b.parentNode;c&&(c.innerHTML='\x3ctable style\x3d"background-color: #8CE; width: 100%; height: 100%;"\x3e\x3ctr\x3e\x3ctd align\x3d"center"\x3e\x3cdiv style\x3d"display: table-cell; vertical-align: middle;"\x3e\x3cdiv style\x3d""\x3e'+a+"\x3c/div\x3e\x3c/div\x3e\x3c/td\x3e\x3c/tr\x3e\x3c/table\x3e")}if(!window.WebGLRenderingContext)return a('This page requires a browser that supports WebGL.\x3cbr/\x3e\x3ca href\x3d"http://get.webgl.org"\x3eClick here to upgrade your browser.\x3c/a\x3e'),
[null,'This page requires a browser that supports WebGL.\x3cbr/\x3e\x3ca href\x3d"http://get.webgl.org"\x3eClick here to upgrade your browser.\x3c/a\x3e'];var c=e(b,d);return!c?(a('It doesn\'t appear your computer can support WebGL.\x3cbr/\x3e\x3ca href\x3d"http://get.webgl.org/troubleshooting/"\x3eClick here for more information.\x3c/a\x3e'),[null,'It doesn\'t appear your computer can support WebGL.\x3cbr/\x3e\x3ca href\x3d"http://get.webgl.org/troubleshooting/"\x3eClick here for more information.\x3c/a\x3e']):
[c]},detectWebGL:function(){var b;try{b=window.WebGLRenderingContext}catch(d){b=[!1,0]}var a;try{a=e(document.createElement("canvas"))}catch(c){a=[!1,1]}return!b?[!1,0]:!a?[!1,1]:[!0,{VERSION:a.getParameter(a.VERSION),SHADING_LANGUAGE_VERSION:a.getParameter(a.SHADING_LANGUAGE_VERSION),VENDOR:a.getParameter(a.VENDOR),RENDERER:a.getParameter(a.RENDERER),EXTENSIONS:a.getSupportedExtensions(),MAX_TEXTURE_SIZE:a.getParameter(a.MAX_TEXTURE_SIZE),MAX_RENDERBUFFER_SIZE:a.getParameter(a.MAX_RENDERBUFFER_SIZE),
MAX_VERTEX_TEXTURE_IMAGE_UNITS:a.getParameter(a.MAX_VERTEX_TEXTURE_IMAGE_UNITS)}]},requestAnimFrame:g,cancelAnimFrame:h}});