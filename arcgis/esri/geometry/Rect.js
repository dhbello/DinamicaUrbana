// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.1/esri/copyright.txt for details.
//>>built
define(["./Geometry","./Extent","./Point"],function(c,d,e){var b=c.createSubclass({declaredClass:"esri.geometry.Rect",type:"rect",normalizeCtorArgs:function(a,f,b,c,d){return"object"===typeof a?a:{x:a,y:f,width:b,height:c,spatialReference:d}},properties:{cache:{dependsOn:["x","x","width","height"]},center:{readOnly:!0,dependsOn:["cache"],get:function(){return new e(this.x+this.width/2,this.y+this.height/2,this.spatialReference)}},extent:{readOnly:!0,dependsOn:["cache"],get:function(){return new d(parseFloat(this.x),
parseFloat(this.y)-parseFloat(this.height),parseFloat(this.x)+parseFloat(this.width),parseFloat(this.y),this.spatialReference)}},height:100,width:100,x:0,y:0},offset:function(a,b){this.x+=a;this.y+=b},intersects:function(a){return a.x+a.width<=this.x||a.y+a.height<=this.y||a.y>=this.y+this.height||a.x>=this.x+this.width?!1:!0},clone:function(){return new b({x:this.x,y:this.y,width:this.width,height:this.height,spatialReference:this.spatialReference})},toJSON:function(){var a=this.spatialReference;
return{x:this.x,y:this.y,width:this.width,height:this.height,spatialReference:a&&a.toJSON()}}});return b});