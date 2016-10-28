// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.1/esri/copyright.txt for details.
//>>built
define(["require","exports","./Util","../../../webgl/enums"],function(d,e,c,f){return function(){function b(a){this._enabled=!1;this._rctx=a}b.prototype.enable=function(){this._enabled=!0;this._rctx.setStencilTestEnabled(!0)};b.prototype.disable=function(){this._enabled=!1;this._rctx.setStencilTestEnabled(!1)};b.prototype.getIsSupported=function(){return!!this._rctx.contextAttributes.stencil};b.prototype.setEnableState=function(a){a?this.enable():this.disable()};b.prototype.getEnableState=function(){return this._enabled};
b.prototype.prepareStencilWritePass=function(){c.assert(this.getEnableState());var a=this._rctx;a.setClearStencil(0);a.setStencilFunction(519,1,255);a.setStencilOp(7680,7680,7681);a.setStencilWriteMask(255)};b.prototype.prepareStencilReadPass=function(){c.assert(this.getEnableState());var a=this._rctx;a.setStencilFunction(517,1,255);a.setStencilWriteMask(0)};b.prototype.prepareStencilDisabledPass=function(){c.assert(this.getEnableState());var a=this._rctx;a.setStencilFunction(519,0,0);a.setStencilWriteMask(0)};
return b}()});