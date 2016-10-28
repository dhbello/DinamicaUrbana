// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.1/esri/copyright.txt for details.
//>>built
define(["../../../core/Collection"],function(e){return e.createSubclass({constructor:function(){this._index={}},add:function(a){if(!this.contains(a)){var b=this.hash(a);this._index[b]=a;this.inherited(arguments)}},addMany:function(a){var b,c,d;for(b=a.length-1;0<=b;b--)c=a[b],d=this.hash(c),this.contains(d)?a.splice(b,1):this._index[d]=c;return this.getInherited(arguments).call(this,a)},remove:function(a){var b=this.hash(a);this.contains(b)?(a=this.getItem(b),delete this._index[b],this.getInherited(arguments).call(this,
a)):a=null;return a},removeMany:function(a){if(!a||!a.length)return null;var b,c;a=a.slice(0);for(b=a.length-1;0<=b;b--)c=this.hash(a[b]),this.contains(c)?(a[b]=this.getItem(c),delete this._index[c]):a.splice(b,1);return this.getInherited(arguments).call(this,a)},getItem:function(a){return this._index[this.hash(a)]},contains:function(a){return!!this.getItem(a)},removeAll:function(){this._index={};this.inherited(arguments)},keys:function(){var a=this._index,b=[],c;for(c in a)a.hasOwnProperty(c)&&b.push(c);
return b},hash:function(a){return a&&a.id?a.id:a}})});