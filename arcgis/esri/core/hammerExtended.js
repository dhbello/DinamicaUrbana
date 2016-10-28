// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.1/esri/copyright.txt for details.
//>>built
define(["./libs/hammer/hammer"],function(a){function f(){g.apply(this,arguments)}a.INPUT_TYPE_TOUCH="touch";a.INPUT_TYPE_PEN="pen";a.INPUT_TYPE_MOUSE="mouse";a.INPUT_TYPE_KINECT="kinect";var n={mousedown:a.INPUT_START,mousemove:a.INPUT_MOVE,mouseup:a.INPUT_END,wheel:a.INPUT_MOVE},p={pointerdown:a.INPUT_START,pointermove:a.INPUT_MOVE,pointerup:a.INPUT_END,pointercancel:a.INPUT_CANCEL,pointerout:a.INPUT_CANCEL,wheel:a.INPUT_MOVE},q={2:a.INPUT_TYPE_TOUCH,3:a.INPUT_TYPE_PEN,4:a.INPUT_TYPE_MOUSE,5:a.INPUT_TYPE_KINECT};
a.prototype._emit=a.prototype.emit;a.prototype.emit=function(a,c){c.cancelled=!1;c.cancel=function(){c.srcEvent.preventDefault();c.srcEvent.stopImmediatePropagation();c.cancelled=!0};this._emit(a,c)};a.extend(a.MouseInput.prototype,{_lastButton:null,handler:function(b){var c=n[b.type];c&a.INPUT_START&&(0===b.button||2===b.button)?(this.pressed=!0,this._lastButton=b.button):c&a.INPUT_MOVE&&"wheel"===b.type&&(this.pressed=!0,b.preventDefault());c&a.INPUT_MOVE&&(null!=this._lastButton&&b.which!==this._lastButton+
1)&&(c=a.INPUT_END);this.pressed&&this.allow&&(c&a.INPUT_END&&(this.pressed=!1,this._lastButton=null),this.callback(this.manager,c,{pointers:[b],changedPointers:[b],pointerType:a.INPUT_TYPE_MOUSE,srcEvent:b,button:b.button,scrollDelta:b.deltaY&&-1*b.deltaY}))}});a.extend(a.PointerEventInput.prototype,{handler:function(b){var c=this.store,k=!1,l=!1,h=null,d=b.type.toLowerCase().replace("ms",""),d=p[d],f=q[b.pointerType]||b.pointerType,g=f==a.INPUT_TYPE_TOUCH,e=a.inArray(c,b.pointerId,"pointerId");
d&a.INPUT_START&&(0===b.button||2===b.button||g)?(0>e&&(l=!0),this.pressed=!0,h=this._lastButton=b.button):d&a.INPUT_MOVE&&"wheel"===b.type?(0>e&&(l=!0),k=this.pressed=!0,b.preventDefault()):d&a.INPUT_MOVE&&this.pressed?h=this._lastButton:d&(a.INPUT_END|a.INPUT_CANCEL)&&(k=!0,this.pressed=!1,h=b.button);!0===l&&(c.push(b),e=c.length-1);0>e||(c[e]=b,this.callback(this.manager,d,{pointers:c,changedPointers:[b],pointerType:f,srcEvent:b,button:h,scrollDelta:b.deltaY&&-1*b.deltaY}),k&&(c.splice(e,1),this._lastButton=
this.pressed=!1))}});var r=a.Tap.prototype.process,m=function(b){var c;c=b.pointerType!=a.INPUT_TYPE_MOUSE||null==this.options.button?null:this.options.button;return null===c||b.button===c};a.extend(a.AttrRecognizer.prototype,{_attrTest:a.AttrRecognizer.prototype.attrTest,_btnTest:m,attrTest:function(a){return this._attrTest(a)&&this._btnTest(a)}});a.extend(a.Tap.prototype.defaults,{button:0});a.extend(a.Tap.prototype,{_btnTest:m,_tapProcess:r,process:function(b){return this._btnTest(b)?this._tapProcess(b):
a.STATE_FAILED}});a.extend(a.Pan.prototype,{process:function(b){b=this._super.process.call(this,b);b>=a.STATE_CANCELLED&&(b=a.STATE_FAILED);return b}});var g=a.AttrRecognizer;a.inherit(f,g,{defaults:{event:"scroll",threshold:0,pointers:0},getTouchAction:function(){return[a.TOUCH_ACTION_COMPUTE]},attrTest:function(a){return this._super.attrTest.call(this,a)&&Math.abs(a.scrollDelta)>this.options.threshold},process:function(b){b=this._super.process.call(this,b);b>=a.STATE_CANCELLED&&(b=a.STATE_FAILED);
return b}});a.Scroll=f;return a});