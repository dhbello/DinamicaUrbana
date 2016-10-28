// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.1/esri/copyright.txt for details.
//>>built
define("require exports ../core/tsSupport/declareExtendsHelper ../core/tsSupport/decorateHelper ../core/tsSupport/paramHelper ../core/accessorSupport/decorators ../core/Error ../config ../identity/IdentityManager ../request ../geometry/Extent ../core/JSONSupport ../core/Loadable ./PortalQueryParams ./PortalQueryResult ./PortalUser ../core/promiseUtils ../core/requireUtils dojo/promise/all dojo/_base/kernel dojo/_base/lang".split(" "),function(k,E,t,c,u,b,v,w,h,x,y,z,A,l,B,C,q,m,r,D,n){var p;return function(s){function a(f){s.call(this);
this.access=null;this.allSSL=!1;this.authMode=a.AUTH_MODE_AUTO;this.bingKey=this.authorizedCrossOriginDomains=null;this.canSignInIDP=this.canSignInArcGIS=this.canSharePublic=this.canShareBingPublic=this.canSearchPublic=this.canProvisionDirectPurchase=this.canListPreProvisionedItems=this.canListData=this.canListApps=!1;this.colorSetsGroupQuery=null;this.commentsEnabled=!1;this.ipCntryCode=this.id=this.httpsPort=this.httpPort=this.homePageFeaturedContentCount=this.homePageFeaturedContent=this.livingAtlasGroupQuery=
this.galleryTemplatesGroupQuery=this.featuredItemsGroupQuery=this.featuredGroups=this.description=this.defaultExtent=this.defaultBasemap=this.customBaseUrl=this.culture=this.created=null;this.isPortal=!1;this.rotatorPanels=this.region=this.portalProperties=this.portalMode=this.portalHostname=this.name=this.modified=this.maxTokenExpirationMinutes=this.layerTemplatesGroupQuery=null;this.supportsHostedServices=this.showHomePageDescription=!1;this.units=this.templatesGroupQuery=this.symbolSetsGroupQuery=
null;this.url=w.portalUrl;this.user=this.urlKey=null;this.useStandardizedQuery=!1}t(a,s);a.prototype.normalizeCtorArgs=function(a){return"string"===typeof a?{url:a}:a};a.prototype.initialize=function(){var f=this;this._esriId_credentialCreateHandle=h.on("credential-create",function(){f.loaded&&(!f.credential&&f.authMode===a.AUTH_MODE_AUTO)&&(f.credential=h.findCredential(f.restUrl),f.credential&&f._fetchSelf().then(function(a){f.read(a)}))})};a.prototype.destroy=function(){this._esriId_credentialCreateHandle&&
(this._esriId_credentialCreateHandle.remove(),this._esriId_credentialCreateHandle=null)};a.prototype.readDefaultBasemap=function(a){return a?p.fromJSON(a):null};Object.defineProperty(a.prototype,"extraQuery",{get:function(){return this.id&&!this.canSearchPublic?" AND orgid:"+this.id:null},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"isOrganization",{get:function(){return!!this.access},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"restUrl",{get:function(){var a=
this.url;if(a)var b=a.indexOf("/sharing"),a=0<b?a.substring(0,b):this.url.replace(/\/+$/,""),a=a+"/sharing/rest";return a},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"thumbnailUrl",{get:function(){var a=this.restUrl,b=this.thumbnail;return a&&b?this._normalizeSSL(a+"/portals/self/resources/"+b):null},enumerable:!0,configurable:!0});a.prototype.readUser=function(a){var b=null;a&&(b=C.fromJSON(a),b.portal=this);return b};a.prototype.load=function(){var b=this,c=q.resolve().then(function(){return b.authMode===
a.AUTH_MODE_IMMEDIATE?h.getCredential(b.restUrl):b.authMode===a.AUTH_MODE_AUTO?h.checkSignInStatus(b.restUrl).otherwise(function(){return null}):null}).then(function(a){b.credential=a;return m.when(k,"../Basemap")}).then(function(a){p=a}).then(function(){return b._fetchSelf()}).then(function(a){b.read(a)});this.addResolvingPromise(c);return this};a.prototype.fetchBasemaps=function(){var a=new l;a.query=this.basemapGalleryGroupQuery;a.disableExtraQuery=!0;return this.queryGroups(a).then(function(b){a.num=
100;a.query='type:"Web Map" -type:"Web Application"';return b.total?(b=b.results[0],a.sortField=b.sortField||"name",a.sortOrder=b.sortOrder||"desc",b.queryItems(a)):null}).then(function(a){return a&&a.total?a.results.filter(function(a){return"Web Map"===a.type}).map(function(a){return new p({portalItem:a})}):[]})};a.prototype.fetchFeaturedGroups=function(){var a=this.featuredGroups,b=new l;b.num=100;b.sortField="title";if(a&&a.length){for(var c=[],e=0;e<a.length;e++){var g=a[e];c.push('(title:"'+
g.title+'" AND owner:'+g.owner+")")}b.query=c.join(" OR ");return this.queryGroups(b).then(function(a){return a.results})}return q.resolve([])};a.getDefault=function(){a._default||(a._default=new a);return a._default};a.prototype.queryGroups=function(a){return this._queryPortal("/community/groups",a,"PortalGroup")};a.prototype.queryItems=function(a){return this._queryPortal("/search",a,"PortalItem")};a.prototype.queryUsers=function(a){a.sortField||(a.sortField="username");return this._queryPortal("/community/users",
a,"PortalUser")};a.prototype.toJSON=function(){throw new v("internal:not-yet-implemented","Portal.toJSON is not yet implemented");};a.prototype._fetchSelf=function(){return this._request(this.restUrl+"/portals/self",{query:{culture:D.locale}})};a.prototype._queryPortal=function(b,c,d){var e=this,g=function(d){return e._request(e.restUrl+b,c.toRequestOptions(e)).then(function(b){var f=c.clone();f.start=b.nextStart;return new B({nextQueryParams:f,queryParams:c,total:b.total,results:a._resultsToTypedArray(d,
{portal:e},b)})}).then(function(a){return r(a.results).always(function(){return a})})};return d?m.when(k,"./"+d).then(function(a){return g(a)}):g()};a.prototype._normalizeSSL=function(b){var c=this.allSSL||window&&"https:"===window.location.protocol;if(this.isPortal){var d=a._getLocation(b);if(-1<this.portalHostname.toLowerCase().indexOf(d.hostname.toLowerCase())&&d.port&&"80"!==d.port&&"443"!==d.port)return b=d.pathname,0!==b.indexOf("/")&&(b="/"+b),c?"https://"+d.hostname+(this.httpsPort&&443!==
this.httpsPort?":"+this.httpsPort:"")+b+d.search:"http://"+d.hostname+(this.httpPort&&80!==this.httpPort?":"+this.httpPort:"")+b+d.search}return c?b.replace("http:","https:"):b};a.prototype._normalizeUrl=function(a){var b=this.credential&&this.credential.token;return this._normalizeSSL(b?a+(-1<a.indexOf("?")?"\x26":"?")+"token\x3d"+b:a)};a.prototype._requestToTypedArray=function(b,c,d){var e=this,g=function(d){return e._request(b,c).then(function(b){var c=a._resultsToTypedArray(d,{portal:e},b);return r(c).always(function(){return c})})};
return d?m.when(k,"./"+d).then(function(a){return g(a)}):g()};a.prototype._request=function(b,c){var d={f:"json"},e={disableIdentityLookup:this.authMode===a.AUTH_MODE_ANONYMOUS},g;c&&(n.mixin(d,c.query),g=c.responseType,e.method=c.method);return x(this._normalizeSSL(b),n.mixin({callbackParamName:"callback",query:d,responseType:g,timeout:0},e)).then(function(a){return a.data})};a._getLocation=function(a){var b=document.createElement("a");b.href=a;return{protocol:b.protocol,hostname:b.hostname,port:b.port,
pathname:b.pathname,search:b.search,hash:b.hash,host:b.host}};a._resultsToTypedArray=function(a,b,c){if(c){if(c=c.listings||c.notifications||c.userInvitations||c.tags||c.items||c.groups||c.comments||c.provisions||c.results||c.relatedItems||c,a||b)c=c.map(function(c){c=n.mixin(a?a.fromJSON(c):c,b);"function"===typeof c.load&&c.load();return c})}else c=[];return c};a.AUTH_MODE_ANONYMOUS="anonymous";a.AUTH_MODE_AUTO="auto";a.AUTH_MODE_IMMEDIATE="immediate";c([b.property()],a.prototype,"access",void 0);
c([b.property()],a.prototype,"allSSL",void 0);c([b.property()],a.prototype,"authMode",void 0);c([b.property()],a.prototype,"authorizedCrossOriginDomains",void 0);c([b.property()],a.prototype,"basemapGalleryGroupQuery",void 0);c([b.property()],a.prototype,"bingKey",void 0);c([b.property()],a.prototype,"canListApps",void 0);c([b.property()],a.prototype,"canListData",void 0);c([b.property()],a.prototype,"canListPreProvisionedItems",void 0);c([b.property()],a.prototype,"canProvisionDirectPurchase",void 0);
c([b.property()],a.prototype,"canSearchPublic",void 0);c([b.property()],a.prototype,"canShareBingPublic",void 0);c([b.property()],a.prototype,"canSharePublic",void 0);c([b.property()],a.prototype,"canSignInArcGIS",void 0);c([b.property()],a.prototype,"canSignInIDP",void 0);c([b.property()],a.prototype,"colorSetsGroupQuery",void 0);c([b.property()],a.prototype,"commentsEnabled",void 0);c([b.property({type:Date})],a.prototype,"created",void 0);c([b.property()],a.prototype,"credential",void 0);c([b.property()],
a.prototype,"culture",void 0);c([b.property()],a.prototype,"customBaseUrl",void 0);c([b.property()],a.prototype,"defaultBasemap",void 0);c([b.read("defaultBasemap")],a.prototype,"readDefaultBasemap",null);c([b.property({type:y})],a.prototype,"defaultExtent",void 0);c([b.property()],a.prototype,"description",void 0);c([b.property({dependsOn:["id","canSearchPublic"],readOnly:!0})],a.prototype,"extraQuery",null);c([b.property()],a.prototype,"featuredGroups",void 0);c([b.property()],a.prototype,"featuredItemsGroupQuery",
void 0);c([b.property()],a.prototype,"galleryTemplatesGroupQuery",void 0);c([b.property()],a.prototype,"livingAtlasGroupQuery",void 0);c([b.property()],a.prototype,"helpBase",void 0);c([b.property()],a.prototype,"helperServices",void 0);c([b.property()],a.prototype,"helpMap",void 0);c([b.property()],a.prototype,"homePageFeaturedContent",void 0);c([b.property()],a.prototype,"homePageFeaturedContentCount",void 0);c([b.property()],a.prototype,"httpPort",void 0);c([b.property()],a.prototype,"httpsPort",
void 0);c([b.property()],a.prototype,"id",void 0);c([b.property()],a.prototype,"ipCntryCode",void 0);c([b.property({dependsOn:["access"],readOnly:!0})],a.prototype,"isOrganization",null);c([b.property()],a.prototype,"isPortal",void 0);c([b.property()],a.prototype,"layerTemplatesGroupQuery",void 0);c([b.property()],a.prototype,"maxTokenExpirationMinutes",void 0);c([b.property({type:Date})],a.prototype,"modified",void 0);c([b.property()],a.prototype,"name",void 0);c([b.property()],a.prototype,"portalHostname",
void 0);c([b.property()],a.prototype,"portalMode",void 0);c([b.property()],a.prototype,"portalProperties",void 0);c([b.property()],a.prototype,"region",void 0);c([b.property({dependsOn:["url"],readOnly:!0})],a.prototype,"restUrl",null);c([b.property()],a.prototype,"rotatorPanels",void 0);c([b.property()],a.prototype,"showHomePageDescription",void 0);c([b.property()],a.prototype,"staticImagesUrl",void 0);c([b.property()],a.prototype,"stylesGroupQuery",void 0);c([b.property()],a.prototype,"supportsHostedServices",
void 0);c([b.property()],a.prototype,"symbolSetsGroupQuery",void 0);c([b.property()],a.prototype,"templatesGroupQuery",void 0);c([b.property()],a.prototype,"thumbnail",void 0);c([b.property({dependsOn:["restUrl","thumbnail"],readOnly:!0})],a.prototype,"thumbnailUrl",null);c([b.property()],a.prototype,"units",void 0);c([b.property()],a.prototype,"url",void 0);c([b.property()],a.prototype,"urlKey",void 0);c([b.property()],a.prototype,"user",void 0);c([b.read("user")],a.prototype,"readUser",null);c([b.property()],
a.prototype,"useStandardizedQuery",void 0);c([u(1,b.cast(l))],a.prototype,"_queryPortal",null);return a=c([b.subclass("esri.portal.Portal")],a)}(b.declared(z,A))});