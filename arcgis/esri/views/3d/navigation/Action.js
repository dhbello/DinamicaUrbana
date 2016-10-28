// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.1/esri/copyright.txt for details.
//>>built
define(["../../../core/Accessor","../../../core/Evented","../webgl-engine/lib/Camera","../lib/glMatrix","dojo/on"],function(k,l,m,e,g){var n=e.vec3d,h=e.vec2d;return k.createSubclass([l],{properties:{type:{},navigation:{},picker:{readOnly:!0,aliasOf:"navigation.picker"},currentCamera:{aliasOf:"navigation.currentCamera"},targetCamera:{aliasOf:"navigation.targetCamera"},constraints:{readOnly:!0,aliasOf:"navigation.constraints"},renderCoordsHelper:{readOnly:!0,aliasOf:"navigation.renderCoordsHelper"},
minPoiDist:{readOnly:!0,aliasOf:"navigation.minPoiDist"}},constructor:function(){this._tmpEvent={type:null,phase:null,x:void 0,y:void 0};this._mouseDownCamera=new m;this._navPickPoint=n.create();this._dragLastPoint=h.create();this._dragBeginPoint=h.create();this.active=!1},initialize:function(){var a=this;["minPoiDist","renderCoordsHelper","constraints","picker"].forEach(function(b){this.navigation.watch(b,function(){a.notifyChange(b)})}.bind(this))},emit:function(a,b,c){this._tmpEvent.type=this.type;
this._tmpEvent.phase=a;this._tmpEvent.x=b;this._tmpEvent.y=c;g.emit(this,a,this._tmpEvent);g.emit(this.navigation,this.type,this._tmpEvent)},intersectManifold:function(a,b,c,d){return this.navigation.intersectManifold(a,b,c,d)},fixTargetUpVector:function(){return this.navigation.fixTargetUpVector()},setPoiAuto:function(a,b){return this.navigation.setPoiAuto(a,b)},normalizeCoordinate:function(a,b){b[0]=a[0]/this.currentCamera.width;b[1]=a[1]/this.currentCamera.height},worldUpAtPosition:function(a,
b){return this.renderCoordsHelper.worldUpAtPosition(a,b)},applyConstraints:function(a,b){return this.navigation.applyConstraints(a,b)},constrainTargetEyeByElevation:function(a){return this.navigation.constrainTargetEyeByElevation(a)},constrainTargetEyeByElevationAndMoveLookAt:function(){return this.navigation.constrainTargetEyeByElevationAndMoveLookAt()},targetAndCurrentChanged:function(a){return this.navigation.targetAndCurrentChanged(a)},targetAnimatedChanged:function(a){return this.navigation.targetAnimatedChanged(a)},
currentReachedTarget:function(a){return this.navigation.currentReachedTarget(a)},setCurrentToTarget:function(){return this.navigation.setCurrentToTarget()},animationStarted:function(){return this.navigation.animationStarted()},limitAltitude:function(a,b,c,d){return this.navigation.limitAltitude(a,b,c,d)},limitTiltByConstraints:function(a,b,c,d){return this.navigation.limitTiltByConstraints(a,b,c,d)},createPickRay:function(a,b,c,d,f){return this.picker.createPickRay(a,b,c,d,f)},pickAlongRay:function(a,
b,c,d,f,e){return this.picker.pickAlongRay(a,b,c,d,f,e)},pickPointInScreen:function(a,b){return this.picker.pickPointInScreen(a,b)},pickFreePointInScreen:function(a,b){return this.picker.pickFreePointInScreen(a,b)},pickInScreen:function(a){return this.picker.pickInScreen(a)}})});