// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.1/esri/copyright.txt for details.
//>>built
require({cache:{"url:esri/widgets/Track/templates/Track.html":'\x3cdiv role\x3d"button" tabindex\x3d"0"\x3e\r\n  \x3cspan data-dojo-attach-point\x3d"_iconNode" aria-hidden\x3d"true" class\x3d"${_css.icon} ${_css.startTrackingIcon}" title\x3d"${_i18n.startTracking}"\x3e\x3c/span\x3e\r\n  \x3cspan data-dojo-attach-point\x3d"_textNode" class\x3d"${_css.text}"\x3e${_i18n.startTracking}\x3c/span\x3e\r\n\x3c/div\x3e\r\n'}});
define("./Track/TrackViewModel ./support/viewModelWiring ./Widget ../core/watchUtils dijit/a11yclick dijit/_TemplatedMixin dojo/on dojo/dom-class dojo/dom-attr dojo/i18n!./Track/nls/Track dojo/text!./Track/templates/Track.html".split(" "),function(f,b,g,h,k,l,m,d,e,n,p){var c={base:"esri-track esri-widget-button",text:"esri-icon-font-fallback-text",icon:"esri-icon",loading:"esri-rotating esri-icon-loading-indicator",startTrackingIcon:"esri-icon-locate",stopTrackingIcon:"esri-icon-pause",disabled:"esri-disabled"};
return g.createSubclass([l],{declaredClass:"esri.widgets.Track",baseClass:c.base,templateString:p,postCreate:function(){this.inherited(arguments);this.own(m(this.domNode,k,this._toggleTracking.bind(this)),h.init(this.viewModel,"state",function(a){"feature-unsupported"===a&&(this.visible=!1);var b="tracking"===a;d.toggle(this.domNode,c.disabled,"disabled"===a);d.toggle(this._iconNode,c.startTrackingIcon,!b);d.toggle(this._iconNode,c.stopTrackingIcon,b);d.toggle(this._iconNode,c.loading,"waiting"===
a);a=b?this._i18n.stopTracking:this._i18n.startTracking;e.set(this._iconNode,"title",a);e.set(this._textNode,"textContent",a)}.bind(this)));b.setUpEventDelegates(this,["track","track-error"])},_css:c,_i18n:n,properties:{geolocationOptions:{aliasOf:"viewModel.geolocationOptions"},goToLocationEnabled:{aliasOf:"viewModel.goToLocationEnabled"},graphic:{aliasOf:"viewModel.graphic"},tracking:{aliasOf:"viewModel.tracking"},view:{aliasOf:"viewModel.view"},viewModel:{type:f}},start:b.createMethodDelegate("start"),
stop:b.createMethodDelegate("stop"),_toggleTracking:function(){var a=this.viewModel;a&&(a.tracking?this.viewModel.stop():this.viewModel.start())}})});