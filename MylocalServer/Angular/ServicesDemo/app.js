// Create a new module
var myApp = angular.module('myApp', ['ngRoute']);
 
// register a new service
//myApp.value('appName', 'MyCoolApp');
 
// configure existing services inside initialization blocks.
myApp.config(function($locationProvider,$routeProvider) {
	$routeProvider
    .when('/s', {
      templateUrl:'partials/home.html'
    })
    .when('/p1', {
      templateUrl:'partials/page1.html',
      //controller:'cipProductController'
    })
    .when('/p2', {
       templateUrl:'partials/page2.html',
     // controller:'cipProductController'
    	  
    })
	.when('/p3', {
      templateUrl:'partials/page3.html',
     // controller:'cipProductController'
    	  
    })
	.when('/p4', {
      templateUrl:'partials/page4.html',
     // controller:'cipProductController'
    })
	.when('/default', {
      templateUrl:'partials/default.html',
     // controller:'cipProductController'
    })
    .otherwise({
      redirectTo:'/default'
    });

	
  // Configure existing providers
  //$locationProvider.hashPrefix('!');
});


myApp.controller('parentCtrl',['$scope','$window','$location',function ($scope,$window,$location) {


}]);