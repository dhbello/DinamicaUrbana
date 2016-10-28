// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.1/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/extendsHelper ../../core/tsSupport/decorateHelper ../../core/typescript dojo/Deferred ../../identity/IdentityManager ../../identity/Credential ../../request ./messageHandler ./MessageReceiver ./errorMessages ../MapWidgetProxy ../DataSourceProxy".split(" "),function(u,v,q,k,l,c,g,r,s,f,t,d,m,h){return function(n){function b(){n.apply(this,arguments);this.portalHelperServices=null;this.drawingType={POINT:"point",LINE:"line",POLYLINE:"polyline",FREEHAND_POLYLINE:"freehandpolyline",
EXTENT:"extent",CIRCLE:"circle",POLYGON:"polygon",FREEHAND_POLYGON:"freehandpolygon"};this.portalUrl=this.isNative=null}q(b,n);b.prototype.dojoConstructor=function(){var a=this;this._hostInitialized=!1;this._dataSourceProxies=[];this._mapWidgetProxies=[];this.portalHelperServices=null;f._sendMessageWithReply({functionName:"initialize"}).then(function(e){return a._initializeResponseReceived(e)}).then(function(){return a._hostReady()}).then(function(){f._sendMessage({functionName:"afterInitialize"})}).otherwise(function(e){a._hostInitializationError(e)})};
b.prototype.__messageReceived=function(a){switch(a.functionName.toLowerCase()){case "datasourceadded":return this._dataSourceAdded(a.args.dataSource);case "datasourceremoved":return this._dataSourceRemoved(a.args.dataSourceId);case "mapwidgetadded":return this._mapWidgetAdded(a.args.mapWidget);case "mapwidgetremoved":return this._mapWidgetRemoved(a.args.mapWidgetId);default:return this._messageReceived(a)}};b.prototype._initializeResponseReceived=function(a){this.isNative=f.isNative;this._hostInitialized=
!0;this.portalHelperServices=a.helperServices;this.portalUrl=a.portalUrl;this.setupIdentityManager(a.usePortalServices);this._setConfig(a.configuration);return(new c).resolve()};b.prototype._isHostInitialized=function(){return this._hostInitialized};b.prototype._hostReady=function(){this.hostReady();this.emit("host-ready")};b.prototype.hostReady=function(){};b.prototype._hostInitializationError=function(a){this._hostInitialized=!1;this.hostInitializationError(a);this.emit("initialization-error",{error:a})};
b.prototype.hostInitializationError=function(a){};b.prototype.getMapWidgetProxies=function(){var a=this;return!this._isHostInitialized()?(new c).reject(Error(d.hostNotReady)):this._mapWidgetProxies&&0<this._mapWidgetProxies.length?(new c).resolve(this._mapWidgetProxies):f._sendMessageWithReply({functionName:"getMapWidgets"}).then(function(e){a._mapWidgetProxies=e.mapWidgets.map(function(a){return new m(a)},a);return a._mapWidgetProxies})};b.prototype.getMapWidgetProxy=function(a){return!this._isHostInitialized()?
(new c).reject(Error(d.hostNotReady)):!a?(new c).reject(Error(d.invalidArguments)):this.getMapWidgetProxies().then(function(e){for(var b=0;b<e.length;b++)if(e[b].id===a)return e[b];return null})};b.prototype._mapWidgetRemoved=function(a){for(var b=0;b<this._mapWidgetProxies.length;b++)if(this._mapWidgetProxies[b].id===a){this._mapWidgetProxies.splice(b,1);break}this.mapWidgetRemoved(a);this.emit("map-widget-removed",{mapWidgetId:a})};b.prototype.mapWidgetRemoved=function(a){};b.prototype._mapWidgetAdded=
function(a){a=new m(a);this._mapWidgetProxies.push(a);this.mapWidgetAdded(a);this.emit("map-widget-added",{mapWidgetProxy:a})};b.prototype.mapWidgetAdded=function(a){};b.prototype.getDataSourceProxies=function(){var a=this;return!this._isHostInitialized()?(new c).reject(Error(d.hostNotReady)):f._sendMessageWithReply({functionName:"getDataSources"}).then(function(b){a._dataSourceProxies=[];return b.dataSources.map(function(a){var b=new h(a);return this._dataSourceProxies[a.id]=b},a)})};b.prototype.getDataSourceProxy=
function(a){var b=this;if(!this._isHostInitialized())return(new c).reject(Error(d.hostNotReady));if(!a)return(new c).reject(Error(d.invalidArguments));var p=this._dataSourceProxies[a];return p?(new c).resolve(p):f._sendMessageWithReply({functionName:"getDataSource",args:{dataSourceId:a}}).then(function(a){var c=new h(a.dataSource);return b._dataSourceProxies[a.dataSource.id]=c})};b.prototype._dataSourceRemoved=function(a){for(var b=0;b<this._dataSourceProxies.length;b++)if(this._dataSourceProxies[b].id===
a){this._dataSourceProxies.splice(b,1);break}this.dataSourceRemoved(a);this.emit("data-source-removed",{dataSourceId:a})};b.prototype.dataSourceRemoved=function(a){};b.prototype._dataSourceAdded=function(a){var b=new h(a);this._dataSourceProxies[a.dataSourceId]=b;this.dataSourceAdded(b);this.emit("data-source-added",{dataSourceProxy:b})};b.prototype.dataSourceAdded=function(a){};b.prototype.setupIdentityManager=function(a){function b(a){return f._sendMessageWithReply({functionName:"getCredential",
args:{url:a}})}a&&(g.useSignInPage=!1,s.setRequestPreCallback(function(a){a.failOk=!0;return a}),g.signIn=function(a,f){var d=new c;b(a).then(function(a){a=new r(a.credential);a.refreshToken=function(){var a=this;return b(this.server).then(function(b){a.token=b.credential.token;a.expires=b.credential.expires?Number(b.credential.expires):null;a.creationTime=b.credential.creationTime;a.validity=b.credential.validity;a.onTokenChange()})};d.resolve(a)});(function(a){d.reject(a)});return d},g.setProtocolErrorHandler(function(){return!0}))};
k([l.shared("esri.opsdashboard.ExtensionBase")],b.prototype,"declaredClass",void 0);return b=k([l.subclass()],b)}(t)});