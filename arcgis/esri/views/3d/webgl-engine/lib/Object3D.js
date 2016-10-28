// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.1/esri/copyright.txt for details.
//>>built
define("require exports ./IdGen ./Util ./gl-matrix ./ModelContentType ./IntervalUtilities ./GeometryRecord".split(" "),function(s,y,w,t,u,x,q,p){var l=t.assert,m=u.mat4d,n=u.vec3d,r=t.VertexAttrConstants;s=function(){function b(a){void 0===a&&(a={});this.hiddenIndexRanges={};this.visibleIndexRanges={};this._bvObjectSpace=new v;this._bvWorldSpace=new v;this._bvDirty=!0;this.id=b._idGen.gen(a.idHint);this.name=a.name;this.castShadow=null!=a.castShadow?a.castShadow:!0;this.metadata=a.metadata;this.objectTransformation=
m.identity();this._initializeGeometryRecords(a.geometries,a.materials,a.transformations,a.instanceParameters)}b.prototype._initializeGeometryRecords=function(a,k,c,d){if(Array.isArray(a)){l(k.length===a.length,"Object3D: materials don't match geometries");l(c.length===a.length,"Object3D: transformations don't match geometries");this.geometryRecords=Array(a.length);this.geometries=a.slice();for(var b=0;b<a.length;b++)l(Array.isArray(k[b]),"Object3D: materials parameter must be array of array"),this.geometryRecords[b]=
new p(a[b],k[b].slice(),m.create(c[b]),d?d.slice():null)}else this.geometryRecords=[],this.geometries=[]};b.prototype.getId=function(){return this.id};Object.defineProperty(b.prototype,"parentLayer",{get:function(){return this._parentLayer},set:function(a){l(null==this._parentLayer||null==a,"Object3D can only be added to a single Layer");this._parentLayer=a},enumerable:!0,configurable:!0});b.prototype.getParentLayer=function(){return this.parentLayer};b.prototype.addParentLayer=function(a){this.parentLayer=
a};b.prototype.removeParentLayer=function(a){this.parentLayer=null};b.prototype.getNumGeometryRecords=function(){return this.geometryRecords.length};b.prototype.getFirstGeometryIndex=function(a){a=this.geometries.indexOf(a);l(-1<a,"Object3D.getFirstGeometryIndex: geometry not found");return a};b.prototype.findGeometryRecords=function(a){for(var k=[],c=0;c<this.geometries.length;c++)this.geometries[c]===a&&k.push(this.geometryRecords[c]);return k};b.prototype.getGeometryRecord=function(a){l(0<=a&&
a<this.geometryRecords.length,"Object3d.getGeometryDataByIndex: index out of range");return this.geometryRecords[a]};b.prototype.getGeometryRecords=function(){return this.geometryRecords};b.prototype.addGeometry=function(a,k,c,b,e){l(Array.isArray(k),"Object3D.addGeometry: materials must be array");this.geometries.push(a);a=new p(a,k.slice(),m.create(c),b,e);this.geometryRecords.push(a);this._notifyDirty("objGeometryAdded",a);this._invalidateBoundingVolume();return a};b.prototype.hasGeometry=function(a){return-1<
this.geometries.indexOf(a)};b.prototype.removeGeometry=function(a){var k=this.geometryRecords.splice(a,1)[0];this.geometries.splice(a,1);this._notifyDirty("objGeometryRemoved",k);this._invalidateBoundingVolume();return k};b.prototype.replaceGeometry=function(a,k){l(0<=a&&a<this.geometryRecords.length,"Object3d.replaceGeometry: index out of range");var c=this.geometryRecords[a],b=new p(k,c.materials,c.transformation);this.geometryRecords[a]=b;this.geometries[a]=k;this._notifyDirty("objGeometryReplaced",
[c,b]);this._invalidateBoundingVolume();return c.geometry};b.prototype.replaceGeometryMaterials=function(a,k){l(0<=a&&a<this.geometryRecords.length,"Object3d.replaceGeometryMaterials: index out of range");var c=this.geometryRecords[a],b=c.materials,e=new p(c.geometry,k.slice(),c.transformation);this.geometryRecords[a]=e;this._notifyDirty("objGeometryReplaced",[c,e]);return b};b.prototype.geometryVertexAttrsUpdated=function(a){this._notifyDirty("vertexAttrsUpdated",this.geometryRecords[a]);this._invalidateBoundingVolume()};
b.prototype.geometryColorAttrsUpdated=function(a){this._notifyDirty("colorAttrsUpdated",this.geometryRecords[a])};b.prototype.getHiddenIndexRanges=function(a){return this.hiddenIndexRanges[a.getId()]};b.prototype.getVisibleIndexRanges=function(a){return this.visibleIndexRanges[a.getId()]};b.prototype.isAllHidden=function(){for(var a=0;a<this.geometryRecords.length;a++){var k=this.geometryRecords[a],c=k.geometry.data.faces.length,k=this.getVisibleIndexRanges(k);if(!k)return!1;for(var b=0;b<c;b++){var e=
k[b];if(!e||0<e.length)return!1}}return!0};b.prototype.setFacerangeColors=function(a,k){var c=this.geometryRecords;if(1!==c.length)console.warn("face range colors currently support only one geometry record");else{var c=c[0].geometry,b=c.data.vertexAttributes;if(!(null==c.originalColors&&a.every(function(a){return null==a.color}))&&(null==c.originalColors&&(c.originalColors=b[r.COLOR].data,b[r.COLOR].data=new c.originalColors.constructor(c.originalColors)),b=b[r.COLOR].data,null!=b)){for(var e=0;e<
a.length;e++){var f=a[e],h=null==f.faceRanges?0:12*f.faceRanges[0],m=null==f.faceRanges?b.length:12*(f.faceRanges[1]+1);if(null!=f.color)if("blend"===k)for(var g=f.color[0],n=f.color[1],l=f.color[2],f=f.color[3];h<m;h+=4)b[h+0]=c.originalColors[h+0]*g,b[h+1]=c.originalColors[h+1]*n,b[h+2]=c.originalColors[h+2]*l,b[h+3]=c.originalColors[h+3]*f;else{g=255*f.color[0];n=255*f.color[1];l=255*f.color[2];for(f=255*f.color[3];h<m;h+=4)b[h+0]=g,b[h+1]=n,b[h+2]=l,b[h+3]=f}else for(;h<m;h++)b[h]=c.originalColors[h]}this.geometryColorAttrsUpdated(0)}}};
b.prototype.isPartiallyHidden=function(){for(var a=0;a<this.geometryRecords.length;a++){var b=this.geometryRecords[a],c=b.geometry.data.faces.length;if(b=this.getHiddenIndexRanges(b))for(var d=0;d<c;d++){var e=b[d];if(e&&0<e.length)return!0}}return!1};b.prototype.hideFaceRange=function(a,b){var c=a.id;null==this.hiddenIndexRanges[c]&&(this.hiddenIndexRanges[c]=[],this.visibleIndexRanges[c]=[]);for(var d=0;d<a.geometry.data.faces.length;d++){null==this.hiddenIndexRanges[c][d]&&(this.hiddenIndexRanges[c][d]=
[],this.visibleIndexRanges[c][d]=[]);var e=q.copyIntervals(b);q.convertFaceToIndexRange(e,3);var f=a.geometry.data.faces[d].componentRange,e=q.intersectIntervals(e,f),e=q.offsetIntervals(e,-f[0]);this.hiddenIndexRanges[c][d]=this.hiddenIndexRanges[c][d].concat(e);this.hiddenIndexRanges[c][d]=q.mergeIntervals(this.hiddenIndexRanges[c][d]);0===this.hiddenIndexRanges[c].length?(delete this.visibleIndexRanges[c],delete this.hiddenIndexRanges[c]):this.visibleIndexRanges[c][d]=q.invertIntervals(this.hiddenIndexRanges[c][d],
a.geometry.data.faces[d].indices.position.length-1)}this._notifyDirty("hideFaceRange",a)};b.prototype.hideAllFaceRanges=function(){this.hiddenIndexRanges={};this.visibleIndexRanges={};for(var a=0;a<this.geometryRecords.length;a++){var b=this.geometryRecords[a],c=b.getId();this.hiddenIndexRanges[c]=[];this.visibleIndexRanges[c]=[];for(var d=b.geometry.data.faces.length,e=0;e<d;e++)this.hiddenIndexRanges[c][e]=[[0,b.geometry.data.faces[e].indices.position.length-1]],this.visibleIndexRanges[c][e]=[];
this._notifyDirty("hideFaceRange",b)}return!0};b.prototype.unhideAllFaceRange=function(){this.hiddenIndexRanges={};this.visibleIndexRanges={};this._notifyDirty("unhideAllFaceRange")};b.prototype.getFaceRangeIndexFromTriangleNr=function(a){var b=this.metadata.faceRanges;if(null!=b)for(var c=0;c<b.length;c++)if(b[c][0]<=a&&b[c][1]>=a)return c};b.prototype.getFaceRangeFromTriangleNr=function(a){a=this.getFaceRangeIndexFromTriangleNr(a);var b=this.metadata.faceRanges;return a?[b[a]]:null};b.prototype.setGeometryTransformation=
function(a,b){l(0<=a&&a<this.geometryRecords.length,"Object3d.setGeometryTransformation: index out of range");var c=this.geometryRecords[a],d=new p(c.geometry,c.materials,m.create(b));this.geometryRecords[a]=d;this._notifyDirty("objGeometryReplaced",[c,d]);this._invalidateBoundingVolume()};b.prototype.getObjectTransformation=function(){return m.create(this.objectTransformation)};b.prototype.setObjectTransformation=function(a){m.set(a,this.objectTransformation);this._invalidateBoundingVolume();this._notifyDirty("objTransformation")};
b.prototype.getCombinedTransformation=function(a,b){b=b||m.create();m.multiply(this.objectTransformation,a.transformation,b);return b};b.prototype.getCastShadow=function(){return this.castShadow};b.prototype.setCastShadow=function(a){this.castShadow=a};b.prototype.getMetadata=function(){return this.metadata};b.prototype.getName=function(){return this.name};b.prototype.getBBMin=function(a){this._validateBoundingVolume();return a?this._bvObjectSpace.bbMin:this._bvWorldSpace.bbMin};b.prototype.getBBMax=
function(a){this._validateBoundingVolume();return a?this._bvObjectSpace.bbMax:this._bvWorldSpace.bbMax};b.prototype.getCenter=function(a){this._validateBoundingVolume();return a?this._bvObjectSpace.center:this._bvWorldSpace.center};b.prototype.getBSRadius=function(a){this._validateBoundingVolume();return a?this._bvObjectSpace.bsRadius:this._bvWorldSpace.bsRadius};b.prototype.calcFacerangeBoundingSphere=function(a){var b=null;null!=a&&(1===this.geometries.length&&1===this.geometries[0].numGroups)&&
(b=this.getFaceRangeFromTriangleNr(a));if(null==b||1!==b.length)return{center:this.getCenter(),radius:this.getBSRadius()};a=this.geometries[0].calculateBoundingInfo(0,b[0]);b=a.getCenter();m.multiplyVec3(this.geometryRecords[0].transformation,b);m.multiplyVec3(this.objectTransformation,b);return{center:b,radius:a.getBSRadius()*this._getScaleFactor(this.geometryRecords[0].transformation)*this._getScaleFactor(this.objectTransformation)}};b.prototype._validateBoundingVolume=function(){if(this._bvDirty){this._bvObjectSpace.init();
this._bvWorldSpace.init();for(var a=n.create(),b=n.create(),c=0;c<this.geometryRecords.length;++c)for(var d=this.geometries[c],e=this.geometryRecords[c].transformation,f=0,h=d.getNumGroups();f<h;++f){var l=d.getBoundingInfo(f);m.multiplyVec3(e,l.getBBMin(),a);m.multiplyVec3(e,l.getBBMax(),b);for(var g=0;3>g;++g)this._bvObjectSpace.bbMin[g]=Math.min(this._bvObjectSpace.bbMin[g],a[g],b[g]),this._bvObjectSpace.bbMax[g]=Math.max(this._bvObjectSpace.bbMax[g],a[g],b[g]);m.multiplyVec3(this.objectTransformation,
a);m.multiplyVec3(this.objectTransformation,b);for(g=0;3>g;++g)this._bvWorldSpace.bbMin[g]=Math.min(this._bvWorldSpace.bbMin[g],a[g],b[g]),this._bvWorldSpace.bbMax[g]=Math.max(this._bvWorldSpace.bbMax[g],a[g],b[g])}n.lerp(this._bvObjectSpace.bbMin,this._bvObjectSpace.bbMax,0.5,this._bvObjectSpace.center);n.lerp(this._bvWorldSpace.bbMin,this._bvWorldSpace.bbMax,0.5,this._bvWorldSpace.center);g=this._getScaleFactor(this.objectTransformation);for(c=0;c<this.geometryRecords.length;++c)for(var d=this.geometries[c],
e=this.geometryRecords[c].transformation,q=this._getScaleFactor(e),f=0,h=d.getNumGroups();f<h;++f){l=d.getBoundingInfo(f);m.multiplyVec3(e,l.getCenter(),a);var p=n.dist(a,this._bvObjectSpace.center),l=l.getBSRadius()*q;this._bvObjectSpace.bsRadius=Math.max(this._bvObjectSpace.bsRadius,p+l);m.multiplyVec3(this.objectTransformation,a,b);p=n.dist(b,this._bvWorldSpace.center);this._bvWorldSpace.bsRadius=Math.max(this._bvWorldSpace.bsRadius,p+l*g)}this._bvDirty=!1}};b.prototype._getScaleFactor=function(a){var b=
Math.sqrt(a[0]*a[0]+a[4]*a[4]+a[8]*a[8]),c=Math.sqrt(a[1]*a[1]+a[5]*a[5]+a[9]*a[9]);a=Math.sqrt(a[2]*a[2]+a[6]*a[6]+a[10]*a[10]);return Math.max(Math.max(b,c),a)};b.prototype._invalidateBoundingVolume=function(){this._bvDirty=!0;this._parentLayer&&this._parentLayer.notifyObjectBBChanged(this,this._bvWorldSpace)};b.prototype._notifyDirty=function(a,b,c,d){this._parentLayer&&(c=c||x.OBJECT,this._parentLayer.notifyDirty(a,b,c,d||this))};b._idGen=new w;return b}();var v=function(){function b(){this.bbMin=
n.create();this.bbMax=n.create();this.center=n.create();this.bsRadius=0}b.prototype.init=function(){n.set3(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE,this.bbMin);n.set3(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE,this.bbMax);n.set3(0,0,0,this.center);this.bsRadius=0};b.prototype.getCenter=function(){return this.center};b.prototype.getBSRadius=function(){return this.bsRadius};return b}();return s});