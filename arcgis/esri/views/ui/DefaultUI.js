// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.1/esri/copyright.txt for details.
//>>built
define("../../core/watchUtils ../../widgets/Attribution ../../widgets/Compass ../../widgets/NavigationToggle ../../widgets/Zoom ./Component ./UI dojo/_base/lang dojo/dom-geometry".split(" "),function(c,d,e,f,g,h,k,l,m){return k.createSubclass({declaredClass:"esri.views.ui.DefaultUI",constructor:function(){this._addComponents=this._addComponents.bind(this);this._componentsWatcher=this._componentsWatcher.bind(this);this._updateViewAwareWidgets=this._updateViewAwareWidgets.bind(this)},getDefaults:function(){return l.mixin(this.inherited(arguments),
{components:[]})},initialize:function(){this._handles.add([c.init(this,"components",this._componentsWatcher),c.init(this,"view",this._updateViewAwareWidgets)])},_defaultPositionLookup:null,_componentsSetter:function(a){this._set("components",a||[])},_findComponentPosition:function(a){if(!this._defaultPositionLookup){var b=m.isBodyLtr();this._defaultPositionLookup={attribution:"manual",compass:b?"top-left":"top-right","navigation-toggle":b?"top-left":"top-right",zoom:b?"top-left":"top-right"}}return this._defaultPositionLookup[a]},
_removeComponents:function(a){a.forEach(function(a){if(a=this.find(a))this.remove(a),a.destroy()},this)},_updateViewAwareWidgets:function(a){this.components.forEach(function(b){if(b=(b=this.find(b))&&b.widget)b.viewModel&&b.viewModel.hasOwnProperty("view")?b.viewModel.view=a:b.hasOwnProperty("view")&&b.set("view",a)},this)},_componentsWatcher:function(a,b){this._removeComponents(b);this._addComponents(a)},_addComponents:function(a){this.initialized&&a.forEach(function(a){this.add(this._createComponent(a),
this._findComponentPosition(a))},this)},_createComponent:function(a){var b=this._createWidget(a);if(b)return new h({id:a,node:b})},_createWidget:function(a){if("attribution"===a)return this._createAttribution();if("compass"===a)return this._createCompass();if("navigation-toggle"===a)return this._createNavigationToggle();if("zoom"===a)return this._createZoom()},_createAttribution:function(){var a=new d({viewModel:{view:this.view}});a.startup();return a},_createCompass:function(){var a=new e({viewModel:{view:this.view}});
a.startup();return a},_createNavigationToggle:function(){var a=new f({viewModel:{view:this.view}});a.startup();return a},_createZoom:function(){var a=new g({viewModel:{view:this.view}});a.startup();return a}})});