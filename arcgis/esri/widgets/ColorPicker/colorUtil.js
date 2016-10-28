// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.1/esri/copyright.txt for details.
//>>built
define(["dojo/_base/lang","../../Color"],function(k,d){var b={equal:function(a,c){return a&&c&&a.r===c.r&&a.g===c.g&&a.b===c.b&&a.a===c.a},normalizeHex:function(a){return"#"+k.trim(a).replace(/#/g,"").substr(0,6)},normalizeColor:function(a){return new d(a)},isValidHex:function(a){return b.isShorthandHex(a)||b.isLonghandHex(a)},_shortHandHex:/^#[0-9A-F]{3}$/i,isShorthandHex:function(a){return a&&4===a.length&&b._shortHandHex.test(a)},_longhandHex:/^#[0-9A-F]{6}$/i,isLonghandHex:function(a){return a&&
7===a.length&&b._longhandHex.test(a)},toHex:function(a){return b.normalizeColor(a).toHex()},getContrastingColor:function(a){return b.isBright(a)?this.darker(a):this.brighter(a,3)},isBright:function(a){return 127<=0.299*a.r+0.587*a.g+0.114*a.b},darker:function(a,c){var b=Math.pow(0.7,c?c:1);return new d([Math.round(a.r*b),Math.round(a.g*b),Math.round(a.b*b),a.a])},brighter:function(a,b){var e=Math.pow(0.7,b?b:1),f=a.r,g=a.g,h=a.b;30>f&&(f=30);30>g&&(g=30);30>h&&(h=30);return new d([Math.min(255,Math.round(f/
e)),Math.min(255,Math.round(g/e)),Math.min(255,Math.round(h/e)),a.a])}};return b});