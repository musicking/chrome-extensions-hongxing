(function(){var e,r;e=["angular","core/services/validate","core/services/generate","core/services/tele","options/module"],r=function(e){var r;return r=function($scope,$rootScope,$http,$timeout,$interval,validate,generate,tele){var e;return $rootScope.deltaTime=0,tele.scope("deltaTime"),$scope.VIPLeft=0,$scope.stabilityLevel=function(){return Math.round(5*$rootScope.averageStability)},$scope.avatarUrl=function(){var e,r;return e="http://honx.in/static/img/logo.png",r=$rootScope.user.profile.name,validate.email(r)?"http://www.gravatar.com/avatar"+("/"+generate.md5(r)+"?s=50&d=")+(""+encodeURIComponent(e)):e},(e=function(){return $scope.VIPLeft=$rootScope.isVIP()?$rootScope.user.profile.until:0,$rootScope.$watch("user.profile.until",function(r,n){var i,o,a;return r!==n?(e(),o=new Date,o=parseInt((o.getTime()-$rootScope.deltaTime)/1e3),(!n||o>n)&&(n=o),$scope.VIPLeft=n,a=30,i=0,$interval(function(){return i+=1,$scope.VIPLeft=(n+(r-n)*i/a).toFixed(0)},50,a)):void 0})})()},e.module("options").controller("ProfileController",r)},define(e,r)}).call(this);