!function(t,r){"object"==typeof exports&&"object"==typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):"object"==typeof exports?exports.classyxin=r():t.classyxin=r()}(this,function(){return function(t){function r(e){if(n[e])return n[e].exports;var o=n[e]={exports:{},id:e,loaded:!1};return t[e].call(o.exports,o,o.exports,r),o.loaded=!0,o.exports}var n={};return r.m=t,r.c=n,r.p="",r(0)}([function(t,r,n){function e(t,r,n){for(var e in t)!t.hasOwnProperty(e)||n&&!n(e)||(r[e]=t[e]);return r}function o(t){switch(t){case"init":case"destructor":case"__Constructor":case"construct":return!1}return!0}function s(t,r){for(var n=0,e=t.length;e>n;n+=1)r.push(t[n]);return r}function i(t){return 0!==t.length}function u(){function t(){var t=this,r=t.__Constructor.__inits;if(r)for(var n=0,e=r.length;e>n;n+=1)r[n].apply(t,arguments);return t.construct&&t.construct.apply(t,arguments),t}return t.__cmId=v,t.prototype.__Constructor=t,v+=1,t}function c(){var t=this,r=t.__Constructor.__destructors;if(r)for(var n=r.length;n--;)r[n].apply(t,arguments)}function a(t,r,n){var e=this;e.parent=t,e.settings=r,e.notAutoDestruct=n||!1}function _(t){var r=this;r.base=t,r.__mixinId=v,v+=1}function f(t){return"function"==typeof t}function p(t){return t instanceof a}function l(t){return t instanceof _}function d(t){return!f(t)&&!p(t)&&!l(t)}function y(){function t(t,r){t.__classesIds&&s(t.__classesIds,m),t.__cmId&&m.push(t.__cmId),t.__inits&&s(t.__inits,g),t.prototype.init&&r&&!r.needInit&&g.pop(),t.__mixinsIds&&s(t.__mixinsIds,I),t.__destructors&&s(t.__destructors,C),h=t.prototype}var r,n,a=arguments;a.length>0&&(n=a[a.length-1],d(n)&&(r=n));var _,y,x,v,h=null,m=[],I=[],g=[],C=[];for(y=0,x=a.length;x>y;y+=1)v=a[y],f(v)?t(v):p(v)?(t(v.parent,v.settings),v.notAutoDestruct||v.destructor()):l(v)&&(I.push(v.__mixinId),h=v.base),h&&(_||(_={}),e(h,_,o),h=null);_&&(r&&e(r,_),r=_);var b=u();r&&(b.prototype=r);var A=b.prototype;return A.__Constructor=b,m.push(b.__cmId),A.destructor&&C.push(A.destructor),A.init&&g.push(A.init),b.__classesIds=m,i(I)&&(b.__mixinsIds=I),i(g)&&(b.__inits=g),i(C)&&(b.__destructors=C),A.destructor=c,b}var x,v=1;if(Array.isArray)x=Array.isArray;else{var h=Object.prototype.toString;x=function(t){return"[object Array]"===h.call(t)}}a.prototype.destructor=function(){var t=this;t.parent=null,t.settings=null},_.prototype.destructor=function(){var t=this;t.base=null,t.__mixinId=null};var m={createClassConstructor:u,ParentConfigurator:a,configureParent:function(t,r,n){return new a(t,r,n)},Mixin:_,createMixin:function(t){return new _(t)},createClass:y,instanceOf:function(t,r){var n=t.__Constructor;if(n){var e=n.__classesIds;if(e)return-1!==e.indexOf(r.__cmId)}return!1},hasMixin:function(t,r){var n=t.__Constructor;if(n){var e=n.__mixinsIds;if(e)return-1!==e.indexOf(r.__mixinId)}return!1},callConstruct:function(t,r,n){var e=r.prototype.construct;return e&&(x(n)?e.apply(t,n):e.call(t,n)),t}};t.exports=m}])});