/*
 COPYRIGHT 2009 ESRI

 TRADE SECRETS: ESRI PROPRIETARY AND CONFIDENTIAL
 Unpublished material - all rights reserved under the
 Copyright Laws of the United States and applicable international
 laws, treaties, and conventions.

 For additional information, contact:
 Environmental Systems Research Institute, Inc.
 Attn: Contracts and Legal Services Department
 380 New York Street
 Redlands, California, 92373
 USA

 email: contracts@esri.com
 */
//>>built
define("esri/IdentityManagerBase",["dojo/_base/declare","dojo/_base/config","dojo/_base/lang","dojo/_base/array","dojo/_base/Deferred","dojo/_base/json","dojo/_base/url","dojo/has","dojo/cookie","esri/kernel","esri/config","esri/lang","esri/ServerInfo","esri/urlUtils","esri/deferredUtils","esri/request","esri/Evented"],function(_1,_2,_3,_4,_5,_6,_7,_8,_9,_a,_b,_c,_d,_e,_f,_10,_11){var _12={};var _13=function(_14){var _15=new _7(_14.owningSystemUrl).host,_16=new _7(_14.server).host,_17=/.+\.arcgis\.com$/i;return (_17.test(_15)&&_17.test(_16));},_18=function(_19,_1a){return !!(_13(_19)&&_1a&&_4.some(_1a,function(_1b){return _1b.test(_19.server);}));};var _1c;var _1d=_1(_11,{declaredClass:"esri.IdentityManagerBase",constructor:function(){this._portalConfig=_3.getObject("esriGeowConfig");this.serverInfos=[];this.credentials=[];this._soReqs=[];this._xoReqs=[];this._portals=[];},defaultTokenValidity:60,tokenValidity:null,signInPage:null,useSignInPage:true,_busy:null,_gwTokenUrl:"/sharing/generateToken",_agsRest:"/rest/services",_agsPortal:/\/sharing(\/|$)/i,_agsAdmin:/https?:\/\/[^\/]+\/[^\/]+\/admin\/?(\/.*)?$/i,_agolSuffix:".arcgis.com",_gwDomains:[{regex:/https?:\/\/www\.arcgis\.com/i,tokenServiceUrl:"https://www.arcgis.com/sharing/generateToken"},{regex:/https?:\/\/dev\.arcgis\.com/i,tokenServiceUrl:"https://dev.arcgis.com/sharing/generateToken"},{regex:/https?:\/\/.*dev[^.]*\.arcgis\.com/i,tokenServiceUrl:"https://devext.arcgis.com/sharing/generateToken"},{regex:/https?:\/\/.*qa[^.]*\.arcgis\.com/i,tokenServiceUrl:"https://qaext.arcgis.com/sharing/generateToken"},{regex:/https?:\/\/.*.arcgis\.com/i,tokenServiceUrl:"https://www.arcgis.com/sharing/generateToken"}],_legacyFed:[],_regexSDirUrl:/http.+\/rest\/services\/?/ig,_regexServerType:/(\/(MapServer|GeocodeServer|GPServer|GeometryServer|ImageServer|NAServer|FeatureServer|GeoDataServer|GlobeServer|MobileServer)).*/ig,_gwUser:/http.+\/users\/([^\/]+)\/?.*/i,_gwItem:/http.+\/items\/([^\/]+)\/?.*/i,_gwGroup:/http.+\/groups\/([^\/]+)\/?.*/i,_errorCodes:[499,498,403,401],_publicUrls:[/\/arcgis\/tokens/i,/\/sharing\/generatetoken/i,/\/rest\/info/i],registerServers:function(_1e){var _1f=this.serverInfos;if(_1f){_1e=_4.filter(_1e,function(_20){return !this.findServerInfo(_20.server);},this);this.serverInfos=_1f.concat(_1e);}else{this.serverInfos=_1e;}_4.forEach(_1e,function(_21){if(_21.owningSystemUrl){this._portals.push(_21.owningSystemUrl);}if(_21.hasPortal){var _22=_b.defaults.io.corsEnabledServers,_23=this._getOrigin(_21.tokenServiceUrl);if(!_e.canUseXhr(_21.server)){_22.push(_21.server.replace(/^https?:\/\//i,""));}if(!_e.canUseXhr(_23)){_22.push(_23.replace(/^https?:\/\//i,""));}}},this);},registerToken:function(_24){var _25=this._sanitizeUrl(_24.server),_26=this.findServerInfo(_25),_27;if(!_26){_26=new _d();_26.server=this._getOrigin(_25);_26.tokenServiceUrl=this._getTokenSvcUrl(_25);_26.hasPortal=true;this.registerServers([_26]);}_27=this.findCredential(_25,_24.userId);if(_27){_3.mixin(_27,_24);}else{_27=new _1c({userId:_24.userId,server:_26.server,token:_24.token,expires:_24.expires,ssl:_24.ssl,scope:this._isServerRsrc(_25)?"server":"portal"});_27.resources=[_25];this.credentials.push(_27);}_27.onTokenChange(false);},toJson:function(){return _c.fixJson({"serverInfos":_4.map(this.serverInfos,function(_28){return _28.toJson();}),"credentials":_4.map(this.credentials,function(crd){return crd.toJson();})});},initialize:function(_29){if(!_29){return;}if(_3.isString(_29)){_29=_6.fromJson(_29);}var _2a=_29.serverInfos,_2b=_29.credentials;if(_2a){var _2c=[];_4.forEach(_2a,function(_2d){if(_2d.server&&_2d.tokenServiceUrl){_2c.push(_2d.declaredClass?_2d:new _d(_2d));}});if(_2c.length){this.registerServers(_2c);}}if(_2b){_4.forEach(_2b,function(crd){if(crd.userId&&crd.server&&crd.token&&crd.expires&&(crd.expires>(new Date()).getTime())){crd=crd.declaredClass?crd:new _1c(crd);crd.onTokenChange();this.credentials.push(crd);}},this);}},findServerInfo:function(_2e){var _2f;_2e=this._sanitizeUrl(_2e);_4.some(this.serverInfos,function(_30){if(_e.hasSameOrigin(_30.server,_2e,true)){_2f=_30;}return !!_2f;});return _2f;},findCredential:function(_31,_32){var _33,_34;_31=this._sanitizeUrl(_31);_34=this._isServerRsrc(_31)?"server":"portal";if(_32){_4.some(this.credentials,function(crd){if(_e.hasSameOrigin(_31,crd.server,true)&&_32===crd.userId&&crd.scope===_34){_33=crd;}return !!_33;},this);}else{_4.some(this.credentials,function(crd){if(_e.hasSameOrigin(_31,crd.server,true)&&this._getIdenticalSvcIdx(_31,crd)!==-1&&crd.scope===_34){_33=crd;}return !!_33;},this);}return _33;},getCredential:function(_35,_36){var _37,_38;if(_c.isDefined(_36)){if(_3.isObject(_36)){_37=!!_36.token;_38=_36.error;}else{_37=_36;}}_35=this._sanitizeUrl(_35);var dfd=new _5(_f._dfdCanceller),err,_39=this._isAdminResource(_35),_3a=(_37&&this._doPortalSignIn(_35))?_9("esri_auth"):null,_3b=(_37&&this._signedIn(_35))?this.findCredential(_35):null;if(_3a||_3b){_3a=_3a&&_6.fromJson(_3a);var _3c=(_3a&&_3a.email)||(_3b&&_3b.userId);err=new Error("You are currently signed in as: '"+_3c+"'. You do not have access to this resource: "+_35);err.code="IdentityManagerBase."+1;err.httpCode=_38&&_38.httpCode;err.messageCode=_38?_38.messageCode:null;err.subcode=_38?_38.subcode:null;err.log=_2.isDebug;dfd.errback(err);return dfd;}var _3d=this._findCredential(_35,_36);if(_3d){dfd.callback(_3d);return dfd;}var _3e=this.findServerInfo(_35);if(!_3e){var _3f=this._getTokenSvcUrl(_35);if(!_3f){err=new Error("Unknown resource - could not find token service endpoint.");err.code="IdentityManagerBase."+2;err.log=_2.isDebug;dfd.errback(err);return dfd;}_3e=new _d();_3e.server=this._getOrigin(_35);if(_3.isString(_3f)){_3e.tokenServiceUrl=_3f;_3e._selfDfd=this._getPortalSelf(_3e,_35);_3e.hasPortal=true;}else{_3e._restInfoDfd=_3f;_3e.hasServer=true;}this.registerServers([_3e]);}else{if(!_3e.hasServer&&this._isServerRsrc(_35)){_3e._restInfoDfd=this._getTokenSvcUrl(_35,true);_3e.hasServer=true;}}return this._enqueue(_35,_3e,_36,dfd,_39);},getResourceName:function(_40){if(this._isRESTService(_40)){return _40.replace(this._regexSDirUrl,"").replace(this._regexServerType,"")||"";}else{return (this._gwUser.test(_40)&&_40.replace(this._gwUser,"$1"))||(this._gwItem.test(_40)&&_40.replace(this._gwItem,"$1"))||(this._gwGroup.test(_40)&&_40.replace(this._gwGroup,"$1"))||"";}},generateToken:function(_41,_42,_43){var _44,_45,_46,_47,_48,ssl,_49=new _7(window.location.href.toLowerCase()),_4a=_9("esri_auth"),_4b,_4c=_41.shortLivedTokenValidity,_4d=_a.id.tokenValidity||_4c||_a.id.defaultTokenValidity;if(_4d>_4c){_4d=_4c;}if(_43){_44=_43.isAdmin;_45=_43.serverUrl;_46=_43.token;ssl=_43.ssl;_41.customParameters=_43.customParameters;}if(_44){_47=_41.adminTokenServiceUrl;}else{_47=_41.tokenServiceUrl;_48=new _7(_47.toLowerCase());if(_4a){_4a=_6.fromJson(_4a);_4b=_4a.auth_tier;_4b=_4b&&_4b.toLowerCase();}if(_4b==="web"&&!_42&&!ssl&&_49.scheme==="http"&&(_e.hasSameOrigin(_49.uri,_47,true)||(_48.scheme==="https"&&_49.host===_48.host&&_49.port==="7080"&&_48.port==="7443"))){_47=_47.replace(/^https:/i,"http:").replace(/:7443/i,":7080");}}var _4e=_10(_3.mixin({url:_47,content:_3.mixin({request:"getToken",username:_42&&_42.username,password:_42&&_42.password,serverUrl:_45,token:_46,expiration:_4d,referer:(_44||_41.tokenServiceUrl.toLowerCase().indexOf("/sharing/generatetoken")!==-1)?window.location.host:null,client:_44?"referer":null,f:"json"},_41.customParameters),handleAs:"json"},_43&&_43.ioArgs),{usePost:true,disableIdentityLookup:true,useProxy:this._useProxy(_41,_43)});_4e.addCallback(function(_4f){if(!_4f||!_4f.token){var err=new Error("Unable to generate token");err.code="IdentityManagerBase."+3;err.log=_2.isDebug;return err;}var _50=_41.server;if(!_12[_50]){_12[_50]={};}if(_42){_12[_50][_42.username]=_42.password;}_4f.validity=_4d;return _4f;});_4e.addErrback(function(_51){});return _4e;},isBusy:function(){return !!this._busy;},setRedirectionHandler:function(_52){this._redirectFunc=_52;},setProtocolErrorHandler:function(_53){this._protocolFunc=_53;},signIn:function(){},_findCredential:function(_54,_55){var idx=-1,_56,_57,_58,_59,_5a=_55&&_55.token,_5b=_55&&_55.resource,_5c=this._isServerRsrc(_54)?"server":"portal",_5d=_4.filter(this.credentials,function(crd){return (_e.hasSameOrigin(crd.server,_54,true)&&crd.scope===_5c);});_54=_5b||_54;if(_5d.length){if(_5d.length===1){_56=_5d[0];_59=this.findServerInfo(_56.server);_57=_59&&_59.owningSystemUrl;_58=_57&&this.findCredential(_57,_56.userId);idx=this._getIdenticalSvcIdx(_54,_56);if(_5a){if(idx!==-1){_56.resources.splice(idx,1);this._removeResource(_54,_58);}}else{if(idx===-1){_56.resources.push(_54);}this._addResource(_54,_58);return _56;}}else{var _5e,i;_4.some(_5d,function(crd){i=this._getIdenticalSvcIdx(_54,crd);if(i!==-1){_5e=crd;_59=this.findServerInfo(_5e.server);_57=_59&&_59.owningSystemUrl;_58=_57&&this.findCredential(_57,_5e.userId);idx=i;return true;}return false;},this);if(_5a){if(_5e){_5e.resources.splice(idx,1);this._removeResource(_54,_58);}}else{if(_5e){this._addResource(_54,_58);return _5e;}}}}},_addResource:function(_5f,_60){if(_60){if(this._getIdenticalSvcIdx(_5f,_60)===-1){_60.resources.push(_5f);}}},_removeResource:function(_61,_62){var idx=-1;if(_62){idx=this._getIdenticalSvcIdx(_61,_62);if(idx>-1){_62.resources.splice(idx,1);}}},_useProxy:function(_63,_64){return (_64&&_64.isAdmin&&!_e.hasSameOrigin(_63.adminTokenServiceUrl,window.location.href))||(!this._isPortalDomain(_63.tokenServiceUrl)&&_63.currentVersion==10.1&&!_e.hasSameOrigin(_63.tokenServiceUrl,window.location.href));},_getOrigin:function(_65){var uri=new _7(_65);return uri.scheme+"://"+uri.host+(_c.isDefined(uri.port)?(":"+uri.port):"");},_sanitizeUrl:function(url){url=_3.trim(url);var _66=(_b.defaults.io.proxyUrl||"").toLowerCase(),_67=_66?url.toLowerCase().indexOf(_66+"?"):-1;if(_67!==-1){url=url.substring(_67+_66.length+1);}return _e.urlToObject(url).path;},_isRESTService:function(_68){return (_68.indexOf(this._agsRest)>-1);},_isAdminResource:function(_69){return this._agsAdmin.test(_69);},_isServerRsrc:function(_6a){return (this._isRESTService(_6a)||this._isAdminResource(_6a));},_isIdenticalService:function(_6b,_6c){var _6d;if(this._isRESTService(_6b)&&this._isRESTService(_6c)){var _6e=this._getSuffix(_6b).toLowerCase(),_6f=this._getSuffix(_6c).toLowerCase();_6d=(_6e===_6f);if(!_6d){var _70=/(.*)\/(MapServer|FeatureServer).*/ig;_6d=(_6e.replace(_70,"$1")===_6f.replace(_70,"$1"));}}else{if(this._isAdminResource(_6b)&&this._isAdminResource(_6c)){_6d=true;}else{if(!this._isServerRsrc(_6b)&&!this._isServerRsrc(_6c)&&this._isPortalDomain(_6b)){_6d=true;}}}return _6d;},_isPortalDomain:function(_71){_71=_71.toLowerCase();var _72=(new _7(_71)).authority,_73=this._portalConfig,_74=(_72.indexOf(this._agolSuffix)!==-1);if(!_74&&_73){_74=_e.hasSameOrigin(_73.restBaseUrl,_71,true);}if(!_74){if(!this._arcgisUrl){var _75=_3.getObject("esri.arcgis.utils.arcgisUrl");if(_75){this._arcgisUrl=(new _7(_75)).authority;}}if(this._arcgisUrl){_74=(this._arcgisUrl.toLowerCase()===_72);}}if(!_74){_74=_4.some(this._portals,function(_76){return _e.hasSameOrigin(_76,_71,true);});}_74=_74||this._agsPortal.test(_71);return _74;},_isIdProvider:function(_77,_78){var i=-1,j=-1;_4.forEach(this._gwDomains,function(_79,idx){if(i===-1&&_79.regex.test(_77)){i=idx;}if(j===-1&&_79.regex.test(_78)){j=idx;}});var _7a=false;if(i>-1&&j>-1){if(i===0||i===4){if(j===0||j===4){_7a=true;}}else{if(i===1){if(j===1||j===2){_7a=true;}}else{if(i===2){if(j===2){_7a=true;}}else{if(i===3){if(j===3){_7a=true;}}}}}}if(!_7a){var _7b=this.findServerInfo(_78),_7c=_7b&&_7b.owningSystemUrl;if(_7c&&_13(_7b)&&this._isPortalDomain(_7c)&&this._isIdProvider(_77,_7c)){_7a=true;}}return _7a;},_isPublic:function(_7d){_7d=this._sanitizeUrl(_7d);return _4.some(this._publicUrls,function(_7e){return _7e.test(_7d);});},_getIdenticalSvcIdx:function(_7f,_80){var idx=-1;_4.some(_80.resources,function(_81,i){if(this._isIdenticalService(_7f,_81)){idx=i;return true;}return false;},this);return idx;},_getSuffix:function(_82){return _82.replace(this._regexSDirUrl,"").replace(this._regexServerType,"$1");},_getTokenSvcUrl:function(_83,_84){var _85,dfd,idx;if(this._isRESTService(_83)){idx=_83.toLowerCase().indexOf(this._agsRest);_85=_83.substring(0,idx)+"/admin/generateToken";_83=_83.substring(0,idx+"/rest/".length)+"info";dfd=_10({url:_83,content:{f:"json"},handleAs:"json",callbackParamName:"callback"});dfd.adminUrl_=_85;return dfd;}else{if(this._isPortalDomain(_83)){var url="";_4.some(this._gwDomains,function(_86){if(_86.regex.test(_83)){url=_86.tokenServiceUrl;}return !!url;});if(!url){_4.some(this._portals,function(_87){if(_e.hasSameOrigin(_87,_83,true)){url=_87+this._gwTokenUrl;}return !!url;},this);}if(!url){idx=_83.toLowerCase().indexOf("/sharing");if(idx!==-1){url=_83.substring(0,idx)+this._gwTokenUrl;}}if(!url){url=this._getOrigin(_83)+this._gwTokenUrl;}if(url){var _88=new _7(_83).port;if(/^http:\/\//i.test(_83)&&_88==="7080"){url=url.replace(/:7080/i,":7443");}url=url.replace(/http:/i,"https:");}return url;}else{if(_83.toLowerCase().indexOf("premium.arcgisonline.com")!==-1){return "https://premium.arcgisonline.com/server/tokens";}else{if(this._isAdminResource(_83)){idx=_83.toLowerCase().indexOf("/admin/");_85=_83.substring(0,idx+"/admin/".length)+"generateToken";_83=_83.substring(0,idx)+"/rest/info";dfd=_10({url:_83,content:{f:"json"},handleAs:"json",callbackParamName:"callback"});dfd.adminUrl_=_85;return dfd;}}}}},_getPortalSelf:function(_89,_8a){var _8b=_89.tokenServiceUrl.replace(/\/sharing\/generatetoken/i,"/sharing/rest/portals/self");return _10({url:/^http:/i.test(_8a)?_8b.replace(/^https:/i,"http:").replace(/:7443/i,":7080"):_8b,content:{f:"json"},handleAs:"json",callbackParamName:"callback"},{crossOrigin:false,disableIdentityLookup:true});},_signedIn:function(_8c){var _8d=this.findServerInfo(_8c),_8e=_8d&&_8d.owningSystemUrl,_8f=_8e&&this.findServerInfo(_8e);return !!((_8d&&_8d.webTierAuth)||(_8f&&_8f.webTierAuth));},_hasPortalSession:function(){return _9.isSupported()?!!_9("esri_auth"):false;},_doPortalSignIn:function(_90){if(_9.isSupported()){var _91=_9("esri_auth"),_92=this._portalConfig,_93=window.location.href,_94=this.findServerInfo(_90);if((_92||this._isPortalDomain(_93)||_91)&&(this._isPortalDomain(_90)||(_94&&_94.owningSystemUrl&&this._isPortalDomain(_94.owningSystemUrl)))&&(this._isIdProvider(_93,_90)||(_92&&(_e.hasSameOrigin(_92.restBaseUrl,_90,true)||this._isIdProvider(_92.restBaseUrl,_90)))||_e.hasSameOrigin(_93,_90,true))&&this.useSignInPage){return true;}}return false;},_checkProtocol:function(_95,_96,_97,_98){var _99=true,_9a=_98?_96.adminTokenServiceUrl:_96.tokenServiceUrl;if(_3.trim(_9a).toLowerCase().indexOf("https:")===0&&window.location.href.toLowerCase().indexOf("https:")!==0&&!_e.canUseXhr(_9a)&&!_e.canUseXhr(_e.getProxyUrl(true).path)){_99=this._protocolFunc?!!this._protocolFunc({resourceUrl:_95,serverInfo:_96}):false;if(!_99){var err=new Error("Aborted the Sign-In process to avoid sending password over insecure connection.");err.code="IdentityManagerBase."+4;err.log=_2.isDebug;console.log(err.message);_97(err);}}return _99;},_enqueue:function(_9b,_9c,_9d,dfd,_9e,_9f){if(!dfd){dfd=new _5(_f._dfdCanceller);}dfd.resUrl_=_9b;dfd.sinfo_=_9c;dfd.options_=_9d;dfd.admin_=_9e;dfd.refresh_=_9f;if(this._busy){if(_e.hasSameOrigin(_9b,this._busy.resUrl_,true)){this._soReqs.push(dfd);}else{this._xoReqs.push(dfd);}}else{this._doSignIn(dfd);}return dfd;},_doSignIn:function(dfd){this._busy=dfd;var _a0=this;var _a1=function(_a2){var _a3=dfd.options_&&dfd.options_.resource,_a4=dfd.resUrl_,_a5=dfd.refresh_;if(_4.indexOf(_a0.credentials,_a2)===-1){if(_a5&&_4.indexOf(_a0.credentials,_a5)!==-1){_a5.userId=_a2.userId;_a5.token=_a2.token;_a5.expires=_a2.expires;_a5.validity=_a2.validity;_a5.ssl=_a2.ssl;_a5.creationTime=_a2.creationTime;_a2=_a5;}else{_a0.credentials.push(_a2);}}if(!_a2.resources){_a2.resources=[];}_a2.resources.push(_a3||_a4);_a2.scope=_a0._isServerRsrc(_a4)?"server":"portal";_a2.onTokenChange();var _a6=_a0._soReqs,_a7={};_a0._soReqs=[];_4.forEach(_a6,function(_a8){if(!this._isIdenticalService(_a4,_a8.resUrl_)){var _a9=this._getSuffix(_a8.resUrl_);if(!_a7[_a9]){_a7[_a9]=true;_a2.resources.push(_a8.resUrl_);}}},_a0);dfd.callback(_a2);_4.forEach(_a6,function(_aa){_aa.callback(_a2);});_a0._busy=dfd.resUrl_=dfd.sinfo_=dfd.refresh_=null;if(_a0._soReqs.length){_a0._doSignIn(_a0._soReqs.shift());}if(_a0._xoReqs.length){_a0._doSignIn(_a0._xoReqs.shift());}},_ab=function(_ac){dfd.errback(_ac);_a0._busy=dfd.resUrl_=dfd.sinfo_=dfd.refresh_=null;if(_a0._soReqs.length){_a0._doSignIn(_a0._soReqs.shift());}if(_a0._xoReqs.length){_a0._doSignIn(_a0._xoReqs.shift());}},_ad=function(_ae,_af){var _b0=dfd.sinfo_;if(_a0._doPortalSignIn(dfd.resUrl_)){var _b1=_9("esri_auth"),_b2=_a0._portalConfig;if(_b1){_b1=_6.fromJson(_b1);_a1(new _1c({userId:_b1.email,server:_b0.server,token:_b1.token,expires:null}));return;}else{var _b3="",_b4=window.location.href;if(_a0.signInPage){_b3=_a0.signInPage;}else{if(_b2){_b3=_b2.baseUrl+_b2.signin;}else{if(_a0._isIdProvider(_b4,dfd.resUrl_)){_b3=_a0._getOrigin(_b4)+"/home/signin.html";}else{_b3=_b0.tokenServiceUrl.replace(/\/sharing\/generatetoken/i,"")+"/home/signin.html";}}}_b3=_b3.replace(/http:/i,"https:");if(_b2&&_b2.useSSL===false){_b3=_b3.replace(/https:/i,"http:");}if(_b4.toLowerCase().replace("https","http").indexOf(_b3.toLowerCase().replace("https","http"))===0){var err=new Error("Cannot redirect to Sign-In page from within Sign-In page. URL of the resource that triggered this workflow: "+dfd.resUrl_);err.code="IdentityManagerBase."+5;err.log=_2.isDebug;_ab(err);}else{if(_a0._redirectFunc){_a0._redirectFunc({signInPage:_b3,returnUrlParamName:"returnUrl",returnUrl:_b4,resourceUrl:dfd.resUrl_,serverInfo:_b0});}else{window.location=_b3+"?returnUrl="+window.escape(_b4);}}return;}}else{if(_ae){_a1(new _1c({userId:_ae,server:_b0.server,token:null,expires:null,ssl:!!_af}));}else{if(_a0._checkProtocol(dfd.resUrl_,_b0,_ab,dfd.admin_)){var _b5=dfd.options_;if(dfd.admin_){_b5=_b5||{};_b5.isAdmin=true;}dfd._pendingDfd=_a0.signIn(dfd.resUrl_,_b0,_b5).addCallbacks(_a1,_ab);}}}},_b6=function(){var _b7=dfd.sinfo_,_b8=_b7.owningSystemUrl,_b9=dfd.options_,_ba,_bb,_bc;if(_b9){_ba=_b9.token;_bb=_b9.error;}_bc=_a0._findCredential(_b8,{token:_ba,resource:dfd.resUrl_});if(!_bc&&_13(_b7)){_4.some(_a0.credentials,function(_bd){if(this._isIdProvider(_b8,_bd.server)){_bc=_bd;}return !!_bc;},_a0);}if(_bc){var _be=_a0.findCredential(dfd.resUrl_,_bc.userId);if(_be){_a1(_be);}else{if(_18(_b7,_a0._legacyFed)){var _bf=_bc.toJson();_bf.server=_b7.server;_bf.resources=null;_a1(new _1c(_bf));}else{var _c0=(dfd._pendingDfd=_a0.generateToken(_a0.findServerInfo(_bc.server),null,{serverUrl:dfd.resUrl_,token:_bc.token,ssl:_bc.ssl}));_c0.addCallbacks(function(_c1){_a1(new _1c({userId:_bc.userId,server:_b7.server,token:_c1.token,expires:_c.isDefined(_c1.expires)?Number(_c1.expires):null,ssl:!!_c1.ssl,isAdmin:dfd.admin_,validity:_c1.validity}));},_ab);}}}else{_a0._busy=null;if(_ba){dfd.options_.token=null;}var _c2=(dfd._pendingDfd=_a0.getCredential(_b8.replace(/\/?$/,"/sharing"),{resource:dfd.resUrl_,token:_ba,error:_bb}));_c2.addCallbacks(function(_c3){_a0._enqueue(dfd.resUrl_,dfd.sinfo_,dfd.options_,dfd,dfd.admin_);},function(_c4){_ab(_c4);});}};var _c5=dfd.sinfo_.tokenServiceUrl,_c6=dfd.sinfo_.owningSystemUrl,_c7=this._isServerRsrc(dfd.resUrl_),_c8=dfd.sinfo_._restInfoDfd;if(!_c8){if(_c7&&_c6){_b6();}else{if(dfd.sinfo_._selfDfd){var _c9=function(_ca){dfd.sinfo_._selfDfd=null;var _cb=_ca&&_ca.user&&_ca.user.username;dfd.sinfo_.webTierAuth=!!_cb;_ad(_cb,_ca&&_ca.allSSL);};dfd.sinfo_._selfDfd.then(_c9,_c9);}else{_ad();}}}else{_c8.addCallbacks(function(_cc){var _cd=dfd.sinfo_;_cd.adminTokenServiceUrl=_cd._restInfoDfd.adminUrl_;_cd._restInfoDfd=null;_cd.tokenServiceUrl=_3.getObject("authInfo.tokenServicesUrl",false,_cc)||_3.getObject("authInfo.tokenServiceUrl",false,_cc)||_3.getObject("tokenServiceUrl",false,_cc);_cd.shortLivedTokenValidity=_3.getObject("authInfo.shortLivedTokenValidity",false,_cc);_cd.currentVersion=_cc.currentVersion;_cd.owningTenant=_cc.owningTenant;var _ce=(_cd.owningSystemUrl=_cc.owningSystemUrl);if(_ce){_a0._portals.push(_ce);if(!_cd.hasPortal&&_e.hasSameOrigin(_ce,dfd.resUrl_,true)){_cd.hasPortal=true;}}if(_c7&&_ce){_b6();}else{_ad();}},function(){dfd.sinfo_._restInfoDfd=null;var err=new Error("Unknown resource - could not find token service endpoint.");err.code="IdentityManagerBase."+2;err.log=_2.isDebug;_ab(err);});}}});_1c=_1(null,{declaredClass:"esri.Credential",tokenRefreshBuffer:2,constructor:function(_cf){_3.mixin(this,_cf);this.resources=this.resources||[];if(!_c.isDefined(this.creationTime)){this.creationTime=(new Date()).getTime();}},refreshToken:function(){var _d0=this,_d1=this.resources&&this.resources[0],_d2=_a.id.findServerInfo(this.server),_d3=_d2&&_d2.owningSystemUrl,_d4=!!_d3&&this.scope==="server",_d5=_d4&&_18(_d2,_a.id._legacyFed),_d6=_d4&&_a.id.findServerInfo(_d3),_d7,_d8=_12[this.server],_d9=_d8&&_d8[this.userId],_da;if(_d2.webTierAuth){return;}if(_d4&&!_d6){_4.some(_a.id.serverInfos,function(_db){if(_a.id._isIdProvider(_d3,_db.server)){_d6=_db;}return !!_d6;});}_d7=_d6&&_a.id.findCredential(_d6.server,this.userId);if(_d4&&!_d7){return;}if(_d5){_d7.refreshToken();return;}else{if(_d4){_da={serverUrl:_d1,token:_d7&&_d7.token,ssl:_d7&&_d7.ssl};}else{if(!_d9){var dfd;if(_d1){_d1=_a.id._sanitizeUrl(_d1);this._enqueued=1;dfd=_a.id._enqueue(_d1,_d2,null,null,this.isAdmin,this);dfd.addBoth(function(){_d0._enqueued=0;});}return dfd;}else{if(this.isAdmin){_da={isAdmin:true};}}}}return _a.id.generateToken(_d4?_d6:_d2,_d4?null:{username:this.userId,password:_d9},_da).addCallback(function(_dc){_d0.token=_dc.token;_d0.expires=_c.isDefined(_dc.expires)?Number(_dc.expires):null;_d0.creationTime=(new Date()).getTime();_d0.validity=_dc.validity;_d0.onTokenChange();if(_d0.scope==="portal"){_4.forEach(_a.id.credentials,function(_dd){var _de=_a.id.findServerInfo(_dd.server),_d3=_de&&_de.owningSystemUrl;if(_dd!==_d0&&_dd.userId===_d0.userId&&_d3&&_dd.scope==="server"&&(_e.hasSameOrigin(_d0.server,_d3,true)||_a.id._isIdProvider(_d3,_d0.server))){if(_18(_de,_a.id._legacyFed)){_dd.token=_d0.token;_dd.expires=_d0.expires;_dd.creationTime=_d0.creationTime;_dd.validity=_d0.validity;_dd.onTokenChange();}else{_dd.refreshToken();}}});}}).addErrback(function(){});},onTokenChange:function(_df){clearTimeout(this._refreshTimer);var _e0=this.server&&_a.id.findServerInfo(this.server),_e1=_e0&&_e0.owningSystemUrl,_e2=_e1&&_a.id.findServerInfo(_e1);if((_df!==false)&&(!_e1||this.scope==="portal"||(_e2&&_e2.webTierAuth))&&(_c.isDefined(this.expires)||_c.isDefined(this.validity))){this._startRefreshTimer();}},onDestroy:function(){},destroy:function(){this.userId=this.server=this.token=this.expires=this.validity=this.resources=this.creationTime=null;var _e3=_4.indexOf(_a.id.credentials,this);if(_e3>-1){_a.id.credentials.splice(_e3,1);}this.onTokenChange();this.onDestroy();},toJson:function(){return this._toJson();},_toJson:function(){var _e4=_c.fixJson({userId:this.userId,server:this.server,token:this.token,expires:this.expires,validity:this.validity,ssl:this.ssl,isAdmin:this.isAdmin,creationTime:this.creationTime,scope:this.scope});var _e5=this.resources;if(_e5&&_e5.length>0){_e4.resources=_e5;}return _e4;},_startRefreshTimer:function(){clearTimeout(this._refreshTimer);var _e6=this.tokenRefreshBuffer*60000,_e7=this.validity?(this.creationTime+(this.validity*60000)):this.expires,_e8=(_e7-(new Date()).getTime());if(_e8<0){_e8=0;}this._refreshTimer=setTimeout(_3.hitch(this,this.refreshToken),(_e8>_e6)?(_e8-_e6):_e8);}});_1d.Credential=_1c;if(_8("extend-esri")){_a.IdentityManagerBase=_1d;_a.Credential=_1c;}return _1d;});