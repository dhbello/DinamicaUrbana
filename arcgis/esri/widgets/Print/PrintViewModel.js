// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.1/esri/copyright.txt for details.
//>>built
define(["dojo/_base/lang","../../core/Accessor","../../tasks/PrintTask","../../tasks/support/PrintTemplate","../../tasks/support/PrintParameters"],function(f,b,c,d,e){return b.createSubclass({declaredClass:"esri.widgets.Print.PrintViewModel",constructor:function(){this.print=this.print.bind(this);this._printComplete=this._printComplete.bind(this)},properties:{templates:{type:[d]},view:{},printServiceUrl:{value:null,type:String},printoutUrl:{value:null,type:String},_printTask:{dependsOn:["printServiceUrl"],
get:function(){return new c(this.printServiceUrl,{updateDelay:this.updateDelay})}},state:{value:"disabled",get:function(){return!this.get("view.ready")?"disabled":this._printTaskComplete?"printoutReady":"ready"},dependsOn:["view.ready"],readOnly:!0},updateDelay:{value:1E3,type:Number}},_printTaskComplete:!1,print:function(a){a=new e({view:this.view,template:a});return this._printTask.execute(a).then(this._printComplete)},openPrintout:function(){"printoutReady"===this.state&&window.open(this.printoutUrl);
this._printTaskComplete=!1;this.notifyChange("state")},_printComplete:function(a){this._printTaskComplete=!0;this.notifyChange("state");return this.printoutUrl=a.url}})});