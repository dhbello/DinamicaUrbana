// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.1/esri/copyright.txt for details.
//>>built
define("dojo/_base/lang ../../../core/Accessor ../math/common ../math/mat2d ../math/vec2 ./bitFlagUtil".split(" "),function(l,m,k,e,f,g){var n=0,c=0,b={TRANSFORM:1<<c++,VISIBLE:1<<c++,SIZE:1<<c++,BLENDMODE:1<<c++,CLIP:1<<c++,OPACITY:1<<c++},p="multiply screen overlay darken lighten color-dodge color-burn hard-light soft-light difference exclusion hue saturation color luminosity".split(" "),d=m.createSubclass({declaredClass:"esri.views.2d.engine.DisplayObject",tag:null,className:"esri-display-object",
constructor:function(){this.id="esri-display-object-"+n++},_flags:0,_renderFlag:!1,_flipY:!0,properties:{blendMode:{value:"normal",cast:function(a){return-1<p.indexOf(a)?a:"normal"},set:function(a){this._invalidateFlag(b.BLENDMODE);this._set("blendMode",a)}},coords:{set:function(a){this._invalidateFlag(b.TRANSFORM);this._set("coords",a)}},opacity:{value:1,cast:function(a){return Math.min(1,Math.max(a,0))},set:function(a){this._get("opacity")!==a&&(this._invalidateFlag(b.OPACITY),this._set("opacity",
a))}},parent:{value:null,set:function(a){this._get("parent")!==a&&(a&&this._renderFlag&&a.requestChildRender(this),this._set("parent",a))}},resolution:{value:NaN,set:function(a){this._get("resolution")!==a&&(this._invalidateFlag(b.TRANSFORM),this._set("resolution",a))}},rotation:{value:0,set:function(a){this._get("rotation")!==a&&(this._invalidateFlag(b.TRANSFORM),this._set("rotation",a||0))}},size:{value:null,set:function(a){this._get("size")!==a&&(this._invalidateFlag(b.SIZE),this._set("size",a))}},
stage:{},surface:{},transform:{readOnly:!0,dependsOn:["rotation","coords","resolution","size"],get:function(){var a=this._get("transform"),h=this.coords,b=this.size,c=this.resolution,d=this.rotation;if(h)if(c){if(!a||6!==a.length)a=e.create();b&&e.translate(a,a,b);e.scale(a,a,f.fromValues(1/c,(this._flipY?-1:1)*(1/c)));e.rotate(a,a,k.toRadian(d));e.translate(a,a,f.negate(f.create(),h))}else{if(!a||2!==a.length)return f.clone(h);f.copy(a,h)}else if(d){if(!a||6!==a.length)a=e.create();e.rotate(a,a,
k.toRadian(d))}return a}},visible:{value:!0,set:function(a){this._get("visible")!==a&&(this._invalidateFlag(b.VISIBLE),this._set("visible",a))}}},requestRender:function(){var a=this.parent;this._renderFlag||(this._renderFlag=!0,a&&a.requestChildRender(this))},createSurface:function(){if(!this.surface){var a=document.createElement("div");a.className=this.className;this.surface=a}return this.surface},reflow:function(a){},render:function(a){var b=this._flags;this._renderFlag=!1;this._flags=0;b&&(g.isSet(b,
d.SIZE)&&a.setSize(this.width,this.height),g.isSet(b,d.VISIBLE)&&a.setVisibility(this.visible),g.isSet(b,d.BLENDMODE)&&a.setBlendMode(this.blendMode),g.isSet(b,d.OPACITY)&&a.setOpacity(this.opacity))},_invalidateFlag:function(a){this._flags=g.set(this._flags,a,!0);this.requestRender()}});l.mixin(d,b);return d});