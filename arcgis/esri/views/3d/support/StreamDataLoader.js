// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.1/esri/copyright.txt for details.
//>>built
define("../../../core/declare ../../../request ../../../config ../../../core/urlUtils ./PromiseLightweight ./AsyncQuotaRoundRobinQueue ../webgl-engine/lib/Util".split(" "),function(h,q,m,f,n,r,k){var l=k.assert,e={QUEUED:1,DOWNLOADING:2,CANCELLED:4};h=h(null,{constructor:function(a){this.alreadyLoading={};this.loadQueue=new r(p,this._doneLoadingCallback,this,a);this._urlInfo={hasSameOrigin:{},canUseXhr:{}}},destroy:function(){for(var a in this.alreadyLoading){for(var c=this.alreadyLoading[a],b=0;b<
c.clientPromises.length;b++){var d=c.clientPromises[b];d.isRejected()||d.reject(c.url.url,null,c.docType,c.clientMetadata[b])}this._cancelTask(c)}this.loadQueue.clear();this.alreadyLoading=this.loadQueue=null},request:function(a,c,b,d,s){d=d||{};var f=new n.Promise;f.requestURL=a;var g=this.alreadyLoading[a];g?(g.clientPromises.push(f),g.clientMetadata.push(d.metadata)):(g={url:{url:null,normalized:null,normalizedWithToken:null,hasSameOrigin:!1,canUseXhr:!1},docType:c,clientType:b,status:e.QUEUED,
clientMetadata:[d.metadata],clientPromises:[f],downloadObj:null,_cancelledInQueue:!1},this._prepareUrl(g,a,s),this.alreadyLoading[a]=g,d.notQueueable?p(g,this._doneLoadingCallback.bind(this)):this.loadQueue.push(g));return f},isRequested:function(a){return void 0!==this.alreadyLoading[a]},cancel:function(a){var c=this.alreadyLoading[a.requestURL];c&&this._removeRequestPromiseFromTask(c,a)},getRequestedURLs:function(a){var c={},b;for(b in this.alreadyLoading)this.alreadyLoading[b].clientType===a&&
(c[b]=!0);return c},cancelBulk:function(a,c){var b;if(k.getFirstObjectValue(a)instanceof n.Promise)for(b in a)this.cancel(a[b]);else{var d=[];for(b in a){var e=this.alreadyLoading[b];e&&(this._cancelTask(e),d.push(e))}0<d.length&&this.loadQueue.removeTasks(d,c)}},hasPendingDownloads:function(){return!k.objectEmpty(this.alreadyLoading)},_prepareUrl:function(a,c,b){a.url.url=c;a.url.isData=f.isDataProtocol(c);if(a.url.isData||"image"!==a.docType)a.url.normalized=c,!a.url.isData&&b&&(a.url.normalizedWithToken=
b(c));else{c=f.normalize(c);a.url.normalized=c;var d=f.getOrigin(c);b&&(a.url.normalizedWithToken=b(c));c=this._urlInfo.hasSameOrigin[d];void 0!==c?a.url.hasSameOrigin=c:(a.url.hasSameOrigin=f.hasSameOrigin(d,window.location.href),this._urlInfo.hasSameOrigin[d]=a.url.hasSameOrigin);a.url.hasSameOrigin||(c=this._urlInfo.canUseXhr[d],void 0!==c?a.url.canUseXhr=c:(a.url.canUseXhr=f.canUseXhr(d),this._urlInfo.canUseXhr[d]=a.url.canUseXhr))}},_removeRequestPromiseFromTask:function(a,c){var b=a.clientPromises.length;
if(1<b){var d=a.clientPromises.indexOf(c);l(-1<d,"request to be cancelled is already cancelled or invalid");a.clientPromises[d]=a.clientPromises[b-1];a.clientPromises.pop();a.clientMetadata[d]=a.clientMetadata[b-1];a.clientMetadata.pop()}else l(a.clientPromises[0]===c,"request to be cancelled is already cancelled or invalid"),this._cancelTask(a)},_cancelTask:function(a){if(a.status===e.DOWNLOADING){this.loadQueue.workerCancelled(a);if("image"===a.docType){var c=a.downloadObj;c.removeAttribute("onload");
c.removeAttribute("onerror");c.removeAttribute("src")}else a.status=e.CANCELLED,a.downloadObj.cancel();a.downloadObj=null}a.status=e.CANCELLED;a.clientPromise=void 0;a.metadata=void 0;delete this.alreadyLoading[a.url.url]},_doneLoadingCallback:function(a,c){var b;l(a.status===e.DOWNLOADING);delete this.alreadyLoading[a.url.url];if(c)for(b=0;b<a.clientPromises.length;b++)a.clientPromises[b].isRejected()||a.clientPromises[b].reject(a.url.url,c,a.docType,a.clientMetadata[b]);else for(b=0;b<a.clientPromises.length;b++)a.clientPromises[b].done(a.url.url,
a.result,a.docType,a.clientMetadata[b])}});var p=function(a,c){if(a.status===e.CANCELLED)return!1;if("image"===a.docType){var b=new Image;b.onload=function(){a.status!==e.CANCELLED&&(a.result=b,b.removeAttribute("onload"),b.removeAttribute("onerror"),c(a))};b.onerror=function(){a.status!==e.CANCELLED&&(b.removeAttribute("onload"),b.removeAttribute("onerror"),c(a,{status:404}))};a.url.isData?b.src=a.url.normalized:a.url.hasSameOrigin||a.url.canUseXhr?(a.url.hasSameOrigin||(b.crossOrigin="anonymous"),
b.src=a.url.normalizedWithToken||a.url.normalized):b.src=a.url.normalizedWithToken||!m.request.proxyUrl?a.url.normalizedWithToken:m.request.proxyUrl+"?"+a.url.normalized;a.downloadObj=b}else{var d=q(a.url.normalizedWithToken||a.url.normalized,{responseType:"binary"===a.docType?"array-buffer":"json",failOk:!0});d.then(function(b){a.duration=k.performance.now()-a.startTime;a.size=0;a.result=b.data;c(a)},function(b){a.status!==e.CANCELLED&&c(a,b)});a.downloadObj=d}a.status=e.DOWNLOADING;return!0};h.TaskStatus=
e;return h});