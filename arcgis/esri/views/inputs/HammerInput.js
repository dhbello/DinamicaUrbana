// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.1/esri/copyright.txt for details.
//>>built
define(["../../core/hammerExtended","../../core/declare","dojo/aspect"],function(e,k,g){var l={drag:{event:"drag",action:"pan",button:0},click:{event:"click",action:"tap",threshold:5,posThreshold:20,interval:185,exclusiveTo:["double-click"]},"right-click":{event:"right-click",action:"tap",button:2},altdrag:{event:"altdrag",action:"pan",button:2,exclusiveTo:["drag"]},pinch:{threshold:0.01,firesWith:["drag","rotation"]},rotation:{threshold:5,firesWith:["drag","pinch"]},hold:{time:350},swipe:{firesWith:["drag"]},
scroll:!0,"double-click":{event:"double-click",action:"tap",taps:2,threshold:30,posThreshold:30,firesWith:["click"]}},h=/\s*,\s*/g;return k(null,{gestures:null,manager:null,constructor:function(a){var b=function(a){a.preventDefault()};a.addEventListener("selectstart",b,!1);a.addEventListener("dragstart",b,!1);a.addEventListener("contextmenu",b,!1);this.manager=new e.Manager(a);this.gestures={};g.after(this.manager,"add",this._emitAdd.bind(this.manager),!0)},on:function(a,b){var f=this.manager,c=l[a];
if(h.test(a)){var d=this;a.split(h).forEach(function(a){d.on(a,b)});return{remove:function(){f.off(a.replace(h," "),b)}}}"input"!=a&&(!f.get(a)&&c)&&this.addGesture({action:c.action||a,event:c.event||a,rules:!0===c?void 0:c});return this.gestures&&this.gestures[a]||"input"==a?("input"==a&&(a="hammer.input"),f.on(a,b),{remove:function(){f.off(a,b)}}):!1},addGesture:function(a){if(!a)return!1;var b=a.action,f=a.event,c=a.rules;a=c&&c.firesWith;var d=c&&c.exclusiveTo,b="hold"==b?"Press":b&&b.slice(0,
1).toUpperCase()+b.slice(1);if(e[b]&&"function"==typeof e[b])return c=new e[b](c),this.gestures[f||b]=c,this.manager&&this.manager.add(c),g.around(c,"recognizeWith",this._checkGestureLinks.bind(c)),g.around(c,"requireFailure",this._checkGestureLinks.bind(c)),a&&(Array.isArray(a)||(a=[a]),c.recognizeWith(a)),d&&c.requireFailure(d),!0;console.warn("no such action to base the new gesture on");return!1},removeGesture:function(a){return this.manager&&this.manager.remove(a)},configureGesture:function(a,
b){return this.manager&&this.manager.set(a,b)},_checkGestureLinks:function(a){var b=this.manager;a=a.bind(this);return function(b){return function(c){if(b&&b.get(c)||Array.isArray(c))a(c);else{var d=function(e){c==e.gesture.options.event&&(a(c),b.off("add",d))};b.on("add",d)}}}(b)},_emitAdd:function(a){this.emit("add",{gesture:a})}})});