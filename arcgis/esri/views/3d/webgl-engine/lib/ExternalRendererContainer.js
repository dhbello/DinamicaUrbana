// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.1/esri/copyright.txt for details.
//>>built
define(["require","exports","./RenderSlot"],function(h,k,g){return function(){function c(){this.renderersChanged=!1;this.renderers=[];this.slots=[];for(var a=0;a<g.MAX_SLOTS;++a)this.slots[a]=[]}c.prototype.addRenderer=function(a,b){this.renderers.push(b);for(var d=0;d<a.length;++d)this.slots[a[d]].push(b);this.renderersChanged=!0};c.prototype.removeRenderer=function(a){this.renderers=this.renderers.filter(function(b){return b!==a});for(var b=0;b<this.slots.length;++b)this.slots[b]=this.slots[b].filter(function(b){return b!==
a});this.renderersChanged=!0};c.prototype.render=function(a,b){b.slot=a;for(var c=this.slots[a],e=0;e<c.length;++e){var f=c[e];f.render(b)&&(f.didRender=!0)}};c.prototype.needsRender=function(){if(this.renderersChanged)return!0;for(var a=0;a<this.renderers.length;++a)if(this.renderers[a].needsRender)return!0;return!1};c.prototype.needsDepthMap=function(){for(var a=0;a<this.renderers.length;++a)if(this.renderers[a].needsDepthMap)return!0;return!1};c.prototype.resetNeedsRender=function(){this.renderersChanged=
!1;for(var a=0;a<this.renderers.length;++a){var b=this.renderers[a];b.resetNeedsRender?b.resetNeedsRender():b.didRender&&(b.needsRender=!1,b.didRender=!1)}};return c}()});