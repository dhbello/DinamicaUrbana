// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.1/esri/copyright.txt for details.
//>>built
define([],function(){var b=function(a){this._slots=[];this._copyFn=a};b.prototype={current:null,_slots:null,_copyFn:null,_size:0,_used:0,add:function(a){if(!a)return a;var b=this._slots;this._used===this._size?(b[this._used++]=a,this._size++,this.current=void 0):(this.current=b.splice(this._used++,1,a)[0],this._copyFn(this.current,a));return this.current},reset:function(){this._used=0},destroy:function(){this._used=this._size=0;this.current=this._slots=null}};return b});