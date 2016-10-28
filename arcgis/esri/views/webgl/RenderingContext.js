// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.1/esri/copyright.txt for details.
//>>built
define(["require","exports","./enums","./Extensions"],function(k,l,g,h){return function(){function b(a,c){this.gl=null;this._extensions=void 0;this._blendEnabled=!1;this._blendColorState={r:0,g:0,b:0,a:0};this._blendFunctionState={srcRGB:1,dstRGB:0,srcAlpha:1,dstAlpha:0};this._blendEquationState={mode:32774,modeAlpha:32774};this._colorMaskState={r:!0,g:!0,b:!0,a:!0};this._polygonCullingEnabled=!1;this._cullFace=1029;this._frontFace=2305;this._scissorTestEnabled=!1;this._scissorRect={x:0,y:0,width:0,
height:0};this._depthTestEnabled=!1;this._depthFunction=513;this._clearDepth=1;this._depthWriteEnabled=!0;this._depthRange={zNear:0,zFar:1};this._viewport=null;this._polygonOffsetFillEnabled=this._stencilTestEnabled=!1;this._polygonOffset=[0,0];this._stencilFunction={face:1032,func:519,ref:0,mask:1};this._clearStencil=0;this._stencilWriteMask=1;this._stencilOperation={face:1032,fail:7680,zFail:7680,zPass:7680};this._lineWidth=1;this._clearColor={r:0,g:0,b:0,a:0};this._activeFramebuffer=this._activeIndexBuffer=
this._activeVertexBuffer=this._activeShaderProgram=null;this._activeTextureUnit=0;this._textureUnitMap={};this.gl=a;this._extensions=new h(a,c);var d=a.getParameter(a.VIEWPORT);this._viewport={x:d[0],y:d[1],width:d[2],height:d[3]};d=this.extensions.textureFilterAnisotropic;this._parameters={versionString:a.getParameter(a.VERSION),maxVertexTextureImageUnits:a.getParameter(a.MAX_VERTEX_TEXTURE_IMAGE_UNITS),maxVertexAttributes:a.getParameter(a.MAX_VERTEX_ATTRIBS),maxMaxAnisotropy:d?a.getParameter(d.MAX_TEXTURE_MAX_ANISOTROPY_EXT):
void 0,maxTextureImageUnits:a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS)};this.enforceState()}Object.defineProperty(b.prototype,"extensions",{get:function(){return this._extensions},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"contextAttributes",{get:function(){return this.gl.getContextAttributes()},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"parameters",{get:function(){return this._parameters},enumerable:!0,configurable:!0});b.prototype.setBlendingEnabled=
function(a){this._blendEnabled!==a&&(!0===a?this.gl.enable(this.gl.BLEND):this.gl.disable(this.gl.BLEND),this._blendEnabled=a)};b.prototype.setBlendColor=function(a,c,d,b){if(a!==this._blendColorState.r||c!==this._blendColorState.g||d!==this._blendColorState.b||b!==this._blendColorState.a)this.gl.blendColor(a,c,d,b),this._blendColorState.r=a,this._blendColorState.g=c,this._blendColorState.b=d,this._blendColorState.a=b};b.prototype.setBlendFunction=function(a,c){if(a!==this._blendFunctionState.srcRGB||
c!==this._blendFunctionState.dstRGB)this.gl.blendFunc(a,c),this._blendFunctionState.srcRGB=a,this._blendFunctionState.srcAlpha=a,this._blendFunctionState.dstRGB=c,this._blendFunctionState.dstAlpha=c};b.prototype.setBlendFunctionSeparate=function(a,c,d,b){if(this._blendFunctionState.srcRGB!==a||this._blendFunctionState.srcAlpha!==d||this._blendFunctionState.dstRGB!==c||this._blendFunctionState.dstAlpha!==b)this.gl.blendFuncSeparate(a,c,d,b),this._blendFunctionState.srcRGB=a,this._blendFunctionState.srcAlpha=
d,this._blendFunctionState.dstRGB=c,this._blendFunctionState.dstAlpha=b};b.prototype.setBlendEquation=function(a){this._blendEquationState.mode!==a&&(this.gl.blendEquation(a),this._blendEquationState.mode=a,this._blendEquationState.modeAlpha=a)};b.prototype.setBlendEquationSeparate=function(a,c){if(this._blendEquationState.mode!==a||this._blendEquationState.modeAlpha!==c)this.gl.blendEquationSeparate(a,c),this._blendEquationState.mode=a,this._blendEquationState.modeAlpha=c};b.prototype.setColorMask=
function(a,c,d,b){if(this._colorMaskState.r!==a||this._colorMaskState.g!==c||this._colorMaskState.b!==d||this._colorMaskState.a!==b)this.gl.colorMask(a,c,d,b),this._colorMaskState.r=a,this._colorMaskState.g=c,this._colorMaskState.b=d,this._colorMaskState.a=b};b.prototype.setClearColor=function(a,c,d,b){if(this._clearColor.r!==a||this._clearColor.g!==c||this._clearColor.b!==d||this._clearColor.a!==b)this.gl.clearColor(a,c,d,b),this._clearColor.r=a,this._clearColor.g=c,this._clearColor.b=d,this._clearColor.a=
b};b.prototype.setFaceCullingEnabled=function(a){this._polygonCullingEnabled!==a&&(!0===a?this.gl.enable(this.gl.CULL_FACE):this.gl.disable(this.gl.CULL_FACE),this._polygonCullingEnabled=a)};b.prototype.setPolygonOffsetFillEnabled=function(a){this._polygonOffsetFillEnabled!==a&&(!0===a?this.gl.enable(this.gl.POLYGON_OFFSET_FILL):this.gl.disable(this.gl.POLYGON_OFFSET_FILL),this._polygonOffsetFillEnabled=a)};b.prototype.setPolygonOffset=function(a,c){if(this._polygonOffset[0]!==a||this._polygonOffset[1]!==
c)this._polygonOffset[0]=a,this._polygonOffset[1]=c,this.gl.polygonOffset(a,c)};b.prototype.setCullFace=function(a){this._cullFace!==a&&(this.gl.cullFace(a),this._cullFace=a)};b.prototype.setFrontFace=function(a){this._frontFace!==a&&(this.gl.frontFace(a),this._frontFace=a)};b.prototype.setScissorTestEnabled=function(a){this._scissorTestEnabled!==a&&(!0===a?this.gl.enable(this.gl.SCISSOR_TEST):this.gl.disable(this.gl.SCISSOR_TEST),this._scissorTestEnabled=a)};b.prototype.setScissorRect=function(a,
c,b,e){if(this._scissorRect.x!==a||this._scissorRect.y!==c||this._scissorRect.width!==b||this._scissorRect.height!==e)this.gl.scissor(a,c,b,e),this._scissorRect.x=a,this._scissorRect.y=c,this._scissorRect.width=b,this._scissorRect.height=e};b.prototype.setDepthTestEnabled=function(a){this._depthTestEnabled!==a&&(!0===a?this.gl.enable(this.gl.DEPTH_TEST):this.gl.disable(this.gl.DEPTH_TEST),this._depthTestEnabled=a)};b.prototype.setClearDepth=function(a){this._clearDepth!==a&&(this.gl.clearDepth(a),
this._clearDepth=a)};b.prototype.setDepthFunction=function(a){this._depthFunction!==a&&(this.gl.depthFunc(a),this._depthFunction=a)};b.prototype.setDepthWriteEnabled=function(a){this._depthWriteEnabled!==a&&(this.gl.depthMask(a),this._depthWriteEnabled=a)};b.prototype.setDepthRange=function(a,c){if(this._depthRange.zNear!==a||this._depthRange.zFar!==c)this.gl.depthRange(a,c),this._depthRange.zNear=a,this._depthRange.zFar=c};b.prototype.setStencilTestEnabled=function(a){this._stencilTestEnabled!==
a&&(!0===a?this.gl.enable(this.gl.STENCIL_TEST):this.gl.disable(this.gl.STENCIL_TEST),this._stencilTestEnabled=a)};b.prototype.setClearStencil=function(a){a!==this._clearStencil&&(this.gl.clearStencil(a),this._clearStencil=a)};b.prototype.setStencilFunction=function(a,c,b){if(this._stencilFunction.func!==a||this._stencilFunction.ref!==c||this._stencilFunction.mask!==b)this.gl.stencilFunc(a,c,b),this._stencilFunction.face=1032,this._stencilFunction.func=a,this._stencilFunction.ref=c,this._stencilFunction.mask=
b};b.prototype.setStencilFunctionSeparate=function(a,c,b,e){if(this._stencilFunction.face!==a||this._stencilFunction.func!==c||this._stencilFunction.ref!==b||this._stencilFunction.mask!==e)this.gl.stencilFuncSeparate(a,c,b,e),this._stencilFunction.face=a,this._stencilFunction.func=c,this._stencilFunction.ref=b,this._stencilFunction.mask=e};b.prototype.setStencilWriteMask=function(a){this._stencilWriteMask!==a&&(this.gl.stencilMask(a),this._stencilWriteMask=a)};b.prototype.setStencilOp=function(a,
c,b){if(this._stencilOperation.fail!==a||this._stencilOperation.zFail!==c||this._stencilOperation.zPass!==b)this.gl.stencilOp(a,c,b),this._stencilOperation.face=1032,this._stencilOperation.fail=a,this._stencilOperation.zFail=c,this._stencilOperation.zPass=b};b.prototype.setStencilOpSeparate=function(a,c,b,e){if(this._stencilOperation.face!==a||this._stencilOperation.fail!==c||this._stencilOperation.zFail!==b||this._stencilOperation.zPass!==e)this.gl.stencilOpSeparate(a,c,b,e),this._stencilOperation.face=
a,this._stencilOperation.face=a,this._stencilOperation.fail=c,this._stencilOperation.zFail=b,this._stencilOperation.zPass=e};b.prototype.setLineWidth=function(a){var b=this._lineWidth;this._lineWidth!==a&&(this.gl.lineWidth(a),this._lineWidth=a);return b};b.prototype.setActiveTexture=function(a){var b=this._activeTextureUnit;0<=a&&a!==this._activeTextureUnit&&(this.gl.activeTexture(g.BASE_TEXTURE_UNIT+a),this._activeTextureUnit=a);return b};b.prototype.clear=function(a){a&&this.gl.clear(a)};b.prototype.drawArrays=
function(a,b,d){this.gl.drawArrays(a,b,d)};b.prototype.drawElements=function(a,b,d,e){5123===d?this.gl.drawElements(a,b,d,e):5125===d&&this._extensions.elementIndexUint?this.gl.drawElements(a,b,d,e):console.warn("Data type is uint however extension OES_Element_index_unit is not supported therefore this draw call cannot be made")};b.prototype.drawArraysInstanced=function(a,b,d,e){this._extensions.angleInstancedArrays?this._extensions.angleInstancedArrays.drawArraysInstancedANGLE(a,b,d,e):console.error("Extension ANGLE_instanced_arrays isn't supported!")};
b.prototype.drawElementsInstanced=function(a,b,d,e,f){this._extensions.angleInstancedArrays?this._extensions.angleInstancedArrays.drawElementsInstancedANGLE(a,b,d,e,f):console.error("Extension ANGLE_instanced_arrays isn't supported!")};b.prototype.setViewport=function(a,b,d,e){var f=this._viewport;if(f.x!==a||f.y!==b||f.width!==d||f.height!==e)f.x=a,f.y=b,f.width=d,f.height=e,this.gl.viewport(a,b,d,e)};b.prototype.getViewport=function(){return this._viewport};b.prototype.bindProgram=function(a){a?
this._activeShaderProgram!==a&&(a.initialize(),this.gl.useProgram(a.glName),this._activeShaderProgram=a):(this.gl.useProgram(null),this._activeShaderProgram=null)};b.prototype.bindTexture=function(a,c){void 0===c&&(c=0);-1===b._MAX_TEXTURE_IMAGE_UNITS&&(b._MAX_TEXTURE_IMAGE_UNITS=this.gl.getParameter(this.gl.MAX_TEXTURE_IMAGE_UNITS));(c>=b._MAX_TEXTURE_IMAGE_UNITS||0>c)&&console.error("Input texture unit is out of range of available units!");var d=this._textureUnitMap[c];this.setActiveTexture(c);
null==a?(null!=d&&this.gl.bindTexture(d.descriptor.target,null),this._textureUnitMap[c]=null):d&&d.id===a.id?a.applyChanges():(this.gl.bindTexture(a.descriptor.target,a.glName),a.applyChanges(),this._textureUnitMap[c]=a)};b.prototype.bindFramebuffer=function(a){a?this._activeFramebuffer!==a&&(a.initialize()||this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,a.glName),this._activeFramebuffer=a):(this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,null),this._activeFramebuffer=null)};b.prototype.bindBuffer=function(a){a&&
(34962===a.bufferType?this._activeVertexBuffer=b._bindBuffer(this.gl,a,a.bufferType,this._activeVertexBuffer):this._activeIndexBuffer=b._bindBuffer(this.gl,a,a.bufferType,this._activeIndexBuffer))};b.prototype.unbindBuffer=function(a){34962===a?this._activeVertexBuffer=b._bindBuffer(this.gl,null,a,this._activeVertexBuffer):this._activeIndexBuffer=b._bindBuffer(this.gl,null,a,this._activeIndexBuffer)};b.prototype.bindVAO=function(a){a?this._activeVertexArrayObject&&this._activeVertexArrayObject.id===
a.id||(a.bind(),this._activeVertexArrayObject=a):this._activeVertexArrayObject&&(this._activeVertexArrayObject.unbind(),this._activeVertexArrayObject=null)};b.prototype.getBoundTexture=function(a){return this._textureUnitMap[a]};b.prototype.getBoundFramebufferObject=function(){return this._activeFramebuffer};b.prototype.getBoundVAO=function(){return this._activeVertexArrayObject};b.prototype.resetState=function(){this.bindProgram(null);this.bindVAO(null);this.bindFramebuffer(null);this.unbindBuffer(34962);
this.unbindBuffer(34963);for(var a=0;a<this.parameters.maxTextureImageUnits;a++)this.bindTexture(null,a);this.setBlendingEnabled(!1);this.setBlendFunction(1,0);this.setBlendEquation(32774);this.setBlendColor(0,0,0,0);this.setFaceCullingEnabled(!1);this.setCullFace(1029);this.setFrontFace(2305);this.setPolygonOffsetFillEnabled(!1);this.setPolygonOffset(0,0);this.setScissorTestEnabled(!1);this.setScissorRect(0,0,this.gl.canvas.width,this.gl.canvas.height);this.setDepthTestEnabled(!1);this.setDepthFunction(513);
this.setDepthRange(0,1);this.setStencilTestEnabled(!1);this.setStencilFunction(519,0,0);this.setStencilOp(7680,7680,7680);this.setClearColor(0,0,0,0);this.setClearDepth(1);this.setClearStencil(0);this.setColorMask(!0,!0,!0,!0);this.setStencilWriteMask(4294967295);this.setDepthWriteEnabled(!0);this.setViewport(0,0,this.gl.canvas.width,this.gl.canvas.height)};b.prototype.enforceState=function(){var a=this.gl,b=this._extensions.vao;b&&b.bindVertexArrayOES(null);for(var d=0;d<this.parameters.maxVertexAttributes;d++)a.disableVertexAttribArray(d);
this._activeVertexBuffer?a.bindBuffer(this._activeVertexBuffer.bufferType,this._activeVertexBuffer.glName):a.bindBuffer(34962,null);this._activeIndexBuffer?a.bindBuffer(this._activeIndexBuffer.bufferType,this._activeIndexBuffer.glName):a.bindBuffer(34963,null);if(b&&this._activeVertexArrayObject){if(b=this._activeVertexArrayObject)this._activeVertexArrayObject.unbind(),this._activeVertexArrayObject=null;this.bindVAO(b)}a.bindFramebuffer(a.FRAMEBUFFER,this._activeFramebuffer?this._activeFramebuffer.glName:
null);a.useProgram(this._activeShaderProgram?this._activeShaderProgram.glName:null);a.blendColor(this._blendColorState.r,this._blendColorState.g,this._blendColorState.b,this._blendColorState.a);!0===this._blendEnabled?a.enable(this.gl.BLEND):a.disable(this.gl.BLEND);a.blendEquationSeparate(this._blendEquationState.mode,this._blendEquationState.modeAlpha);a.blendFuncSeparate(this._blendFunctionState.srcRGB,this._blendFunctionState.dstRGB,this._blendFunctionState.srcAlpha,this._blendFunctionState.dstAlpha);
a.clearColor(this._clearColor.r,this._clearColor.g,this._clearColor.b,this._clearColor.a);a.clearDepth(this._clearDepth);a.clearStencil(this._clearStencil);a.colorMask(this._colorMaskState.r,this._colorMaskState.g,this._colorMaskState.b,this._colorMaskState.a);a.cullFace(this._cullFace);a.depthFunc(this._depthFunction);a.depthRange(this._depthRange.zNear,this._depthRange.zFar);!0===this._depthTestEnabled?a.enable(a.DEPTH_TEST):a.disable(a.DEPTH_TEST);a.depthMask(this._depthWriteEnabled);a.frontFace(this._frontFace);
a.lineWidth(this._lineWidth);!0===this._polygonCullingEnabled?a.enable(a.CULL_FACE):a.disable(a.CULL_FACE);a.polygonOffset(this._polygonOffset[0],this._polygonOffset[1]);!0===this._polygonOffsetFillEnabled?a.enable(a.POLYGON_OFFSET_FILL):a.disable(a.POLYGON_OFFSET_FILL);a.scissor(this._scissorRect.x,this._scissorRect.y,this._scissorRect.width,this._scissorRect.height);!0===this._scissorTestEnabled?a.enable(a.SCISSOR_TEST):a.disable(a.SCISSOR_TEST);a.stencilFunc(this._stencilFunction.func,this._stencilFunction.ref,
this._stencilFunction.mask);a.stencilOpSeparate(this._stencilOperation.face,this._stencilOperation.fail,this._stencilOperation.zFail,this._stencilOperation.zPass);!0===this._stencilTestEnabled?a.enable(a.STENCIL_TEST):a.disable(a.STENCIL_TEST);a.stencilMask(this._stencilWriteMask);for(b=0;b<this.parameters.maxTextureImageUnits;b++)a.activeTexture(g.BASE_TEXTURE_UNIT+b),a.bindTexture(3553,null),(d=this._textureUnitMap[b])&&a.bindTexture(d.descriptor.target,d.glName);a.activeTexture(g.BASE_TEXTURE_UNIT+
this._activeTextureUnit);a.viewport(this._viewport.x,this._viewport.y,this._viewport.width,this._viewport.height)};b._bindBuffer=function(a,b,d,e){if(!b)return a.bindBuffer(d,null),null;if(e===b)return e;a.bindBuffer(d,b.glName);return b};b._MAX_TEXTURE_IMAGE_UNITS=-1;return b}()});