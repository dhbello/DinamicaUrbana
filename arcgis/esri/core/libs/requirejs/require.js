// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.1/esri/copyright.txt for details.
//>>built
/*
 RequireJS 2.1.22 Copyright (c) 2010-2015, The Dojo Foundation All Rights Reserved.
 Available via the MIT or new BSD license.
 see: http://github.com/jrburke/requirejs for details
*/
var requirejs,require,define;
(function(fa){function J(b){return"[object Function]"===P.call(b)}function K(b){return"[object Array]"===P.call(b)}function w(b,c){if(b){var d;for(d=0;d<b.length&&(!b[d]||!c(b[d],d,b));d+=1);}}function X(b,c){if(b){var d;for(d=b.length-1;-1<d&&(!b[d]||!c(b[d],d,b));d-=1);}}function v(b,c){return ja.call(b,c)}function k(b,c){return v(b,c)&&b[c]}function C(b,c){for(var d in b)if(v(b,d)&&c(b[d],d))break}function Y(b,c,d,e){c&&C(c,function(c,k){if(d||!v(b,k))e&&"object"===typeof c&&c&&!K(c)&&!J(c)&&!(c instanceof
RegExp)?(b[k]||(b[k]={}),Y(b[k],c,d,e)):b[k]=c});return b}function x(b,c){return function(){return c.apply(b,arguments)}}function ga(b){throw b;}function ha(b){if(!b)return b;var c=fa;w(b.split("."),function(b){c=c[b]});return c}function E(b,c,d,k){c=Error(c+"\nhttp://requirejs.org/docs/errors.html#"+b);c.requireType=b;c.requireModules=k;d&&(c.originalError=d);return c}function ka(b){function c(a,n,b){var g,l,c,d,h,e,f,y;n=n&&n.split("/");var q=m.map,p=q&&q["*"];if(a){a=a.split("/");l=a.length-1;
m.nodeIdCompat&&U.test(a[l])&&(a[l]=a[l].replace(U,""));"."===a[0].charAt(0)&&n&&(l=n.slice(0,n.length-1),a=l.concat(a));l=a;for(c=0;c<l.length;c++)if(d=l[c],"."===d)l.splice(c,1),c-=1;else if(".."===d&&!(0===c||1===c&&".."===l[2]||".."===l[c-1])&&0<c)l.splice(c-1,2),c-=2;a=a.join("/")}if(b&&q&&(n||p)){l=a.split("/");c=l.length;a:for(;0<c;c-=1){h=l.slice(0,c).join("/");if(n)for(d=n.length;0<d;d-=1)if(b=k(q,n.slice(0,d).join("/")))if(b=k(b,h)){g=b;e=c;break a}!f&&(p&&k(p,h))&&(f=k(p,h),y=c)}!g&&f&&
(g=f,e=y);g&&(l.splice(0,e,g),a=l.join("/"))}return(g=k(m.pkgs,a))?g:a}function d(a){D&&w(document.getElementsByTagName("script"),function(n){if(n.getAttribute("data-requiremodule")===a&&n.getAttribute("data-requirecontext")===h.contextName)return n.parentNode.removeChild(n),!0})}function p(a){var n=k(m.paths,a);if(n&&K(n)&&1<n.length)return n.shift(),h.require.undef(a),h.makeRequire(null,{skipMap:!0})([a]),!0}function f(a){var n,b=a?a.indexOf("!"):-1;-1<b&&(n=a.substring(0,b),a=a.substring(b+1,a.length));
return[n,a]}function q(a,n,b,g){var l,d,e=null,T=n?n.name:null,m=a,q=!0,y="";a||(q=!1,a="_@r"+(P+=1));a=f(a);e=a[0];a=a[1];e&&(e=c(e,T,g),d=k(r,e));a&&(e?y=d&&d.normalize?d.normalize(a,function(a){return c(a,T,g)}):-1===a.indexOf("!")?c(a,T,g):a:(y=c(a,T,g),a=f(y),e=a[0],y=a[1],b=!0,l=h.nameToUrl(y)));b=e&&!d&&!b?"_unnormalized"+(S+=1):"";return{prefix:e,name:y,parentMap:n,unnormalized:!!b,url:l,originalName:m,isDefine:q,id:(e?e+"!"+y:y)+b}}function t(a){var b=a.id,c=k(s,b);c||(c=s[b]=new h.Module(a));
return c}function u(a,b,c){var g=a.id,l=k(s,g);if(v(r,g)&&(!l||l.defineEmitComplete))"defined"===b&&c(r[g]);else if(l=t(a),l.error&&"error"===b)c(l.error);else l.on(b,c)}function z(a,b){var c=a.requireModules,g=!1;if(b)b(a);else if(w(c,function(b){if(b=k(s,b))b.error=a,b.events.error&&(g=!0,b.emit("error",a))}),!g)e.onError(a)}function A(){V.length&&(w(V,function(a){var b=a[0];"string"===typeof b&&(h.defQueueMap[b]=!0);F.push(a)}),V=[])}function B(a){delete s[a];delete Z[a]}function I(a,b,c){var g=
a.map.id;a.error?a.emit("error",a.error):(b[g]=!0,w(a.depMaps,function(g,d){var e=g.id,h=k(s,e);h&&(!a.depMatched[d]&&!c[e])&&(k(b,e)?(a.defineDep(d,r[e]),a.check()):I(h,b,c))}),c[g]=!0)}function G(){var a,b,c=(a=1E3*m.waitSeconds)&&h.startTime+a<(new Date).getTime(),g=[],l=[],e=!1,k=!0;if(!$){$=!0;C(Z,function(a){var h=a.map,f=h.id;if(a.enabled&&(h.isDefine||l.push(a),!a.error))if(!a.inited&&c)p(f)?e=b=!0:(g.push(f),d(f));else if(!a.inited&&(a.fetched&&h.isDefine)&&(e=!0,!h.prefix))return k=!1});
if(c&&g.length)return a=E("timeout","Load timeout for modules: "+g,null,g),a.contextName=h.contextName,z(a);k&&w(l,function(a){I(a,{},{})});if((!c||b)&&e)if((D||ia)&&!aa)aa=setTimeout(function(){aa=0;G()},50);$=!1}}function H(a){v(r,a[0])||t(q(a[0],null,!0)).init(a[1],a[2])}function N(a){a=a.currentTarget||a.srcElement;var b=h.onScriptLoad;a.detachEvent&&!ba?a.detachEvent("onreadystatechange",b):a.removeEventListener("load",b,!1);b=h.onScriptError;(!a.detachEvent||ba)&&a.removeEventListener("error",
b,!1);return{node:a,id:a&&a.getAttribute("data-requiremodule")}}function O(){var a;for(A();F.length;){a=F.shift();if(null===a[0])return z(E("mismatch","Mismatched anonymous define() module: "+a[a.length-1]));H(a)}h.defQueueMap={}}var $,ca,h,Q,aa,m={waitSeconds:7,baseUrl:"./",paths:{},bundles:{},pkgs:{},shim:{},config:{}},s={},Z={},da={},F=[],r={},W={},ea={},P=1,S=1;Q={require:function(a){return a.require?a.require:a.require=h.makeRequire(a.map)},exports:function(a){a.usingExports=!0;if(a.map.isDefine)return a.exports?
r[a.map.id]=a.exports:a.exports=r[a.map.id]={}},module:function(a){return a.module?a.module:a.module={id:a.map.id,uri:a.map.url,config:function(){return k(m.config,a.map.id)||{}},exports:a.exports||(a.exports={})}}};ca=function(a){this.events=k(da,a.id)||{};this.map=a;this.shim=k(m.shim,a.id);this.depExports=[];this.depMaps=[];this.depMatched=[];this.pluginMaps={};this.depCount=0};ca.prototype={init:function(a,b,c,g){g=g||{};if(!this.inited){this.factory=b;if(c)this.on("error",c);else this.events.error&&
(c=x(this,function(a){this.emit("error",a)}));this.depMaps=a&&a.slice(0);this.errback=c;this.inited=!0;this.ignore=g.ignore;g.enabled||this.enabled?this.enable():this.check()}},defineDep:function(a,b){this.depMatched[a]||(this.depMatched[a]=!0,this.depCount-=1,this.depExports[a]=b)},fetch:function(){if(!this.fetched){this.fetched=!0;h.startTime=(new Date).getTime();var a=this.map;if(this.shim)h.makeRequire(this.map,{enableBuildCallback:!0})(this.shim.deps||[],x(this,function(){return a.prefix?this.callPlugin():
this.load()}));else return a.prefix?this.callPlugin():this.load()}},load:function(){var a=this.map.url;W[a]||(W[a]=!0,h.load(this.map.id,a))},check:function(){if(this.enabled&&!this.enabling){var a,b,c=this.map.id;b=this.depExports;var g=this.exports,l=this.factory;if(this.inited)if(this.error)this.emit("error",this.error);else{if(!this.defining){this.defining=!0;if(1>this.depCount&&!this.defined){if(J(l)){try{g=h.execCb(c,l,b,g)}catch(d){a=d}this.map.isDefine&&void 0===g&&((b=this.module)?g=b.exports:
this.usingExports&&(g=this.exports));if(a){if(this.events.error&&this.map.isDefine||e.onError!==ga)return a.requireMap=this.map,a.requireModules=this.map.isDefine?[this.map.id]:null,a.requireType=this.map.isDefine?"define":"require",z(this.error=a);if("undefined"!==typeof console&&console.error)console.error(a);else e.onError(a)}}else g=l;this.exports=g;if(this.map.isDefine&&!this.ignore&&(r[c]=g,e.onResourceLoad)){var f=[];w(this.depMaps,function(a){f.push(a.normalizedMap||a)});e.onResourceLoad(h,
this.map,f)}B(c);this.defined=!0}this.defining=!1;this.defined&&!this.defineEmitted&&(this.defineEmitted=!0,this.emit("defined",this.exports),this.defineEmitComplete=!0)}}else v(h.defQueueMap,c)||this.fetch()}},callPlugin:function(){var a=this.map,b=a.id,d=q(a.prefix);this.depMaps.push(d);u(d,"defined",x(this,function(g){var l,d,f=k(ea,this.map.id),L=this.map.name,p=this.map.parentMap?this.map.parentMap.name:null,r=h.makeRequire(a.parentMap,{enableBuildCallback:!0});if(this.map.unnormalized){if(g.normalize&&
(L=g.normalize(L,function(a){return c(a,p,!0)})||""),d=q(a.prefix+"!"+L,this.map.parentMap),u(d,"defined",x(this,function(a){this.map.normalizedMap=d;this.init([],function(){return a},null,{enabled:!0,ignore:!0})})),g=k(s,d.id)){this.depMaps.push(d);if(this.events.error)g.on("error",x(this,function(a){this.emit("error",a)}));g.enable()}}else f?(this.map.url=h.nameToUrl(f),this.load()):(l=x(this,function(a){this.init([],function(){return a},null,{enabled:!0})}),l.error=x(this,function(a){this.inited=
!0;this.error=a;a.requireModules=[b];C(s,function(a){0===a.map.id.indexOf(b+"_unnormalized")&&B(a.map.id)});z(a)}),l.fromText=x(this,function(g,c){var d=a.name,f=q(d),L=R;c&&(g=c);L&&(R=!1);t(f);v(m.config,b)&&(m.config[d]=m.config[b]);try{e.exec(g)}catch(k){return z(E("fromtexteval","fromText eval for "+b+" failed: "+k,k,[b]))}L&&(R=!0);this.depMaps.push(f);h.completeLoad(d);r([d],l)}),g.load(a.name,r,l,m))}));h.enable(d,this);this.pluginMaps[d.id]=d},enable:function(){Z[this.map.id]=this;this.enabling=
this.enabled=!0;w(this.depMaps,x(this,function(a,b){var c,g;if("string"===typeof a){a=q(a,this.map.isDefine?this.map:this.map.parentMap,!1,!this.skipMap);this.depMaps[b]=a;if(c=k(Q,a.id)){this.depExports[b]=c(this);return}this.depCount+=1;u(a,"defined",x(this,function(a){this.undefed||(this.defineDep(b,a),this.check())}));this.errback?u(a,"error",x(this,this.errback)):this.events.error&&u(a,"error",x(this,function(a){this.emit("error",a)}))}c=a.id;g=s[c];!v(Q,c)&&(g&&!g.enabled)&&h.enable(a,this)}));
C(this.pluginMaps,x(this,function(a){var b=k(s,a.id);b&&!b.enabled&&h.enable(a,this)}));this.enabling=!1;this.check()},on:function(a,b){var c=this.events[a];c||(c=this.events[a]=[]);c.push(b)},emit:function(a,b){w(this.events[a],function(a){a(b)});"error"===a&&delete this.events[a]}};h={config:m,contextName:b,registry:s,defined:r,urlFetched:W,defQueue:F,defQueueMap:{},Module:ca,makeModuleMap:q,nextTick:e.nextTick,onError:z,configure:function(a){a.baseUrl&&"/"!==a.baseUrl.charAt(a.baseUrl.length-1)&&
(a.baseUrl+="/");var b=m.shim,c={paths:!0,bundles:!0,config:!0,map:!0};C(a,function(a,b){c[b]?(m[b]||(m[b]={}),Y(m[b],a,!0,!0)):m[b]=a});a.bundles&&C(a.bundles,function(a,b){w(a,function(a){a!==b&&(ea[a]=b)})});a.shim&&(C(a.shim,function(a,c){K(a)&&(a={deps:a});if((a.exports||a.init)&&!a.exportsFn)a.exportsFn=h.makeShimExports(a);b[c]=a}),m.shim=b);a.packages&&w(a.packages,function(a){var b;a="string"===typeof a?{name:a}:a;b=a.name;a.location&&(m.paths[b]=a.location);m.pkgs[b]=a.name+"/"+(a.main||
"main").replace(la,"").replace(U,"")});C(s,function(a,b){!a.inited&&!a.map.unnormalized&&(a.map=q(b,null,!0))});if(a.deps||a.callback)h.require(a.deps||[],a.callback)},makeShimExports:function(a){return function(){var b;a.init&&(b=a.init.apply(fa,arguments));return b||a.exports&&ha(a.exports)}},makeRequire:function(a,n){function f(c,d,k){var m,p;n.enableBuildCallback&&(d&&J(d))&&(d.__requireJsBuild=!0);if("string"===typeof c){if(J(d))return z(E("requireargs","Invalid require call"),k);if(a&&v(Q,c))return Q[c](s[a.id]);
if(e.get)return e.get(h,c,a,f);m=q(c,a,!1,!0);m=m.id;return!v(r,m)?z(E("notloaded",'Module name "'+m+'" has not been loaded yet for context: '+b+(a?"":". Use require([])"))):r[m]}O();h.nextTick(function(){O();p=t(q(null,a));p.skipMap=n.skipMap;p.init(c,d,k,{enabled:!0});G()});return f}n=n||{};Y(f,{isBrowser:D,toUrl:function(b){var d,e=b.lastIndexOf("."),f=b.split("/")[0];if(-1!==e&&(!("."===f||".."===f)||1<e))d=b.substring(e,b.length),b=b.substring(0,e);return h.nameToUrl(c(b,a&&a.id,!0),d,!0)},defined:function(b){return v(r,
q(b,a,!1,!0).id)},specified:function(b){b=q(b,a,!1,!0).id;return v(r,b)||v(s,b)}});a||(f.undef=function(b){A();var c=q(b,a,!0),e=k(s,b);e.undefed=!0;d(b);delete r[b];delete W[c.url];delete da[b];X(F,function(a,c){a[0]===b&&F.splice(c,1)});delete h.defQueueMap[b];e&&(e.events.defined&&(da[b]=e.events),B(b))});return f},enable:function(a){k(s,a.id)&&t(a).enable()},completeLoad:function(a){var b,c,d=k(m.shim,a)||{},e=d.exports;for(A();F.length;){c=F.shift();if(null===c[0]){c[0]=a;if(b)break;b=!0}else c[0]===
a&&(b=!0);H(c)}h.defQueueMap={};c=k(s,a);if(!b&&!v(r,a)&&c&&!c.inited){if(m.enforceDefine&&(!e||!ha(e)))return p(a)?void 0:z(E("nodefine","No define call for "+a,null,[a]));H([a,d.deps||[],d.exportsFn])}G()},nameToUrl:function(a,b,c){var d,f,p;(d=k(m.pkgs,a))&&(a=d);if(d=k(ea,a))return h.nameToUrl(d,b,c);if(e.jsExtRegExp.test(a))d=a+(b||"");else{d=m.paths;a=a.split("/");for(f=a.length;0<f;f-=1)if(p=a.slice(0,f).join("/"),p=k(d,p)){K(p)&&(p=p[0]);a.splice(0,f,p);break}d=a.join("/");d+=b||(/^data\:|\?/.test(d)||
c?"":".js");d=("/"===d.charAt(0)||d.match(/^[\w\+\.\-]+:/)?"":m.baseUrl)+d}return m.urlArgs?d+((-1===d.indexOf("?")?"?":"\x26")+m.urlArgs):d},load:function(a,b){e.load(h,a,b)},execCb:function(a,b,c,d){return b.apply(d,c)},onScriptLoad:function(a){if("load"===a.type||ma.test((a.currentTarget||a.srcElement).readyState))M=null,a=N(a),h.completeLoad(a.id)},onScriptError:function(a){var b=N(a);if(!p(b.id)){var c=[];C(s,function(a,d){0!==d.indexOf("_@r")&&w(a.depMaps,function(a){a.id===b.id&&c.push(d);
return!0})});return z(E("scripterror",'Script error for "'+b.id+(c.length?'", needed by: '+c.join(", "):'"'),a,[b.id]))}}};h.require=h.makeRequire();return h}function na(){if(M&&"interactive"===M.readyState)return M;X(document.getElementsByTagName("script"),function(b){if("interactive"===b.readyState)return M=b});return M}var e,A,B,G,N,H,M,O,t,S,oa=/(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/mg,pa=/[^.]\s*require\s*\(\s*["']([^'"\s]+)["']\s*\)/g,U=/\.js$/,la=/^\.\//;A=Object.prototype;var P=A.toString,
ja=A.hasOwnProperty,D=!!("undefined"!==typeof window&&"undefined"!==typeof navigator&&window.document),ia=!D&&"undefined"!==typeof importScripts,ma=D&&"PLAYSTATION 3"===navigator.platform?/^complete$/:/^(complete|loaded)$/,ba="undefined"!==typeof opera&&"[object Opera]"===opera.toString(),I={},u={},V=[],R=!1;if("undefined"===typeof define){if("undefined"!==typeof requirejs){if(J(requirejs))return;u=requirejs;requirejs=void 0}"undefined"!==typeof require&&!J(require)&&(u=require,require=void 0);e=
requirejs=function(b,c,d,p){var f,q="_";!K(b)&&"string"!==typeof b&&(f=b,K(c)?(b=c,c=d,d=p):b=[]);f&&f.context&&(q=f.context);(p=k(I,q))||(p=I[q]=e.s.newContext(q));f&&p.configure(f);return p.require(b,c,d)};e.config=function(b){return e(b)};e.nextTick="undefined"!==typeof setTimeout?function(b){setTimeout(b,4)}:function(b){b()};require||(require=e);e.version="2.1.22";e.jsExtRegExp=/^\/|:|\?|\.js$/;e.isBrowser=D;A=e.s={contexts:I,newContext:ka};e({});w(["toUrl","undef","defined","specified"],function(b){e[b]=
function(){var c=I._;return c.require[b].apply(c,arguments)}});if(D&&(B=A.head=document.getElementsByTagName("head")[0],G=document.getElementsByTagName("base")[0]))B=A.head=G.parentNode;e.onError=ga;e.createNode=function(b,c,d){c=b.xhtml?document.createElementNS("http://www.w3.org/1999/xhtml","html:script"):document.createElement("script");c.type=b.scriptType||"text/javascript";c.charset="utf-8";c.async=!0;return c};e.load=function(b,c,d){var k=b&&b.config||{},f;if(D){f=e.createNode(k,c,d);if(k.onNodeCreated)k.onNodeCreated(f,
k,c,d);f.setAttribute("data-requirecontext",b.contextName);f.setAttribute("data-requiremodule",c);f.attachEvent&&!(f.attachEvent.toString&&0>f.attachEvent.toString().indexOf("[native code"))&&!ba?(R=!0,f.attachEvent("onreadystatechange",b.onScriptLoad)):(f.addEventListener("load",b.onScriptLoad,!1),f.addEventListener("error",b.onScriptError,!1));f.src=d;O=f;G?B.insertBefore(f,G):B.appendChild(f);O=null;return f}if(ia)try{setTimeout(function(){},0),importScripts(d),b.completeLoad(c)}catch(q){b.onError(E("importscripts",
"importScripts failed for "+c+" at "+d,q,[c]))}};D&&!u.skipDataMain&&X(document.getElementsByTagName("script"),function(b){B||(B=b.parentNode);if(N=b.getAttribute("data-main"))return t=N,u.baseUrl||(H=t.split("/"),t=H.pop(),S=H.length?H.join("/")+"/":"./",u.baseUrl=S),t=t.replace(U,""),e.jsExtRegExp.test(t)&&(t=N),u.deps=u.deps?u.deps.concat(t):[t],!0});define=function(b,c,d){var e,f;"string"!==typeof b&&(d=c,c=b,b=null);K(c)||(d=c,c=null);!c&&J(d)&&(c=[],d.length&&(d.toString().replace(oa,"").replace(pa,
function(b,d){c.push(d)}),c=(1===d.length?["require"]:["require","exports","module"]).concat(c)));if(R&&(e=O||na()))b||(b=e.getAttribute("data-requiremodule")),f=I[e.getAttribute("data-requirecontext")];f?(f.defQueue.push([b,c,d]),f.defQueueMap[b]=!0):V.push([b,c,d])};define.amd={jQuery:!0};e.exec=function(b){return eval(b)};e(u)}})(this);