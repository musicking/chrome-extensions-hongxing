(function(){var e,n;e=["angular","core/module"],n=function(e){var n;return n=function(){return function(e){var n,t;return n=function(e){return e>9?e:"0"+e},t=new Date(1e3*e),""+t.getFullYear()+"/"+n(t.getMonth()+1)+"/"+n(t.getDate())+" "+(""+n(t.getHours())+":"+n(t.getMinutes())+":"+n(t.getSeconds()))}},e.module("core").filter("renderDatetime",n)},define(e,n)}).call(this);