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
      //controller:"page1ctrl"
    })
    .when('/p2', {
       templateUrl:'partials/page2.html',
     
    	  
    })
	.when('/p3', {
      templateUrl:'partials/page3.html',
     
    	  
    })
	.when('/p4', {
      templateUrl:'partials/page4.html',
     
    })
	.when('/default', {
      templateUrl:'partials/default.html',
     
    })
    .otherwise({
      redirectTo:'/	'
    });

	
  // Configure existing providers
  //$locationProvider.hashPrefix('!');
});

myApp.controller('page1ctrl', ['$scope', function($scope) {
  console.log("hi");
  $scope.myboolean="Block";
  $scope.mytoggle=function(){
	 $scope.myboolean = $scope.myboolean == 'Block' ? 'None' : 'Block';
  };
  
  
}]);
