// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.1/esri/copyright.txt for details.
//>>built
define(["../../core/declare","../../core/Accessoire","./LODInfo"],function(x,y,z){var s=Math.max,t=Math.min,q=Math.floor,v=Math.ceil,u=function(b,c,d,a){this.lodInfo=b;this.row=c;this.colFrom=d;this.colTo=a},r=function(b,c,d,a,e,g,k,f){this.x=b;this.ymin=c;this.ymax=d;this.invM=a;this.leftAdjust=e;this.rightAdjust=g;this.leftBound=k;this.rightBound=f};r.prototype.incrRow=function(){this.x+=this.invM};r.prototype.getLeftCol=function(){return s(this.x+this.leftAdjust,this.leftBound)};r.prototype.getRightCol=
function(){return t(this.x+this.rightAdjust,this.rightBound)};r.create=function(b,c){var d;b[1]>c[1]&&(d=b,b=c,c=d);d=b[0];var a=b[1],e=c[0],g=c[1],k=e-d,f=g-a,f=0!==f?k/f:0,h=(v(a)-a)*f,n=(q(a)-a)*f;return new r(d,q(a),v(g),f,0>k?h:n,0>k?n:h,0>k?e:d,0>k?d:e)};var p=[[0,0],[0,0],[0,0],[0,0]],w=x([y],{normalizeCtorArgs:function(b){var c=b.tileInfo,d=c.lods,a=b.constraints||{};if(d&&d.length){var e=a.minZoom,g=a.maxZoom,k=a.minScale,a=a.maxScale,f=-1,h=-1,n=!1,l=!1,m;for(m=0;m<d.length;m++)!n&&(0<k&&
k>=d[m].scale)&&(f=d[m].level,n=!0),!l&&(0<a&&a>=d[m].scale)&&(h=0<m?d[m-1].level:-1,l=!0);null==e&&(e=null==k?d[0].level:f);null==g&&(g=null==a?d[d.length-1].level:h)}return{tileInfo:c,fullExtent:b.fullExtent,constraints:{minZoom:e,maxZoom:g}}},getDefaults:function(b){return{wrap:b.tileInfo.spatialReference.isWrappable}},initialize:function(){var b=this.tileInfo,c=this.fullExtent,d=this.dpi/b.dpi,a=this.constraints||{minZoom:-Infinity,maxZoom:Infinity},e=a.minZoom,g=a.maxZoom,a=b.lods;this._infoByZoom=
{};this._infoByScale={};this.zooms=[];this.scales=[];a=a.map(function(a){a=a.clone();a.scale*=d;return a}).filter(function(a){return a.level>=e&&a.level<=g}).sort(function(a,b){return b.scale-a.scale});this.lodInfos=a.map(function(a){return new z(b,a,c)});a.forEach(function(a,b){this._infoByZoom[a.level]=this.lodInfos[b];this._infoByScale[a.scale]=this.lodInfos[b];this.zooms[b]=a.level;this.scales[b]=a.scale},this);this.lods=a;e=this.zooms[0];g=this.zooms[this.zooms.length-1];this.constraints={minZoom:e,
maxZoom:g,minScale:this._infoByZoom[e].scale,maxScale:this._infoByZoom[g].scale};this.wrap=this.wrap&&b.spatialReference.isWrappable},_infoByZoom:null,_infoByScale:null,constraints:null,dpi:96,lods:null,scales:null,wrap:!1,zooms:null,getZoomForScale:function(b){var c=this.lods,d=null,a=null,e=0,g=c.length-1;for(e;e<g;e++){d=c[e];a=c[e+1];if(d.scale<=b)return d.level;if(a.scale===b)return a.level;if(d.scale>b&&a.scale<b)return a.level-(b-a.scale)/(d.scale-a.scale)}},getScaleForZoom:function(b){var c=
this.lods,d=null,a=null,e=0,g=c.length-1;for(e;e<g;e++){d=c[e];a=c[e+1];if(d.level<=b)return d.scale;if(a.level===b)return a.scale;if(d.level>b&&a.level<b)return a.scale-(b-a.level)/(d.level-a.level)}},getInfoForZoom:function(b){return this._infoByZoom[b]},getInfoForScale:function(b){return this._infoByScale[b]},getTileOrigin:function(b,c){var d=this._infoByZoom[c[2]];return!d?null:d.getTileOrigin(b,c)},getTileSpans:function(b){var c=this._getClosestInfoForScale(b.scale),d=this.wrap,a;a=Infinity;
var e=-Infinity,g,k,f,h,n=[],l,m=[];p[0][0]=p[0][1]=p[1][1]=p[3][0]=0;p[1][0]=p[2][0]=b.size[0];p[2][1]=p[3][1]=b.size[1];l=p.map(function(a){b.toMap(a,a);a[0]=c.toGridCol(a[0]);a[1]=c.toGridRow(a[1]);return a});h=3;for(f=0;4>f;f++)l[f][1]!==l[h][1]&&(h=r.create(l[f],l[h]),a=t(h.ymin,a),e=s(h.ymax,e),void 0===n[h.ymin]&&(n[h.ymin]=[]),n[h.ymin].push(h)),h=f;if(null==a||null==e||100<e-a)return[];for(l=[];a<e;){null!=n[a]&&(l=l.concat(n[a]));g=Infinity;k=-Infinity;for(f=l.length-1;0<=f;f--)h=l[f],g=
t(g,h.getLeftCol()),k=s(k,h.getRightCol());g=q(g);k=q(k);if(a>=c.start[1]&&a<=c.end[1])if(d)if(c.size[0]<c.worldSize[0]){f=q(g/c.worldSize[0]);for(h=q(k/c.worldSize[0]);f<=h;f++)m.push(new u(c,a,s(c.getWorldStartCol(f),g),t(c.getWorldEndCol(f),k)))}else m.push(new u(c,a,g,k));else g>c.end[0]||k<c.start[0]||(g=s(g,c.start[0]),k=t(k,c.end[0]),m.push(new u(c,a,g,k)));a+=1;for(f=l.length-1;0<=f;f--)h=l[f],h.ymax>=a?h.incrRow():l.splice(f,1)}return m},clone:function(){return new w(this.tileInfo?this.tileInfo.clone():
null)},_getClosestInfoForScale:function(b){var c=this.scales;this._infoByScale[b]||(b=c.reduce(function(c,a,e,g){return Math.abs(a-b)<Math.abs(c-b)?a:c},c[0],this));return this._infoByScale[b]}});return w});