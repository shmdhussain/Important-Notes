		angular.module('myApp', []).
		config(['$routeProvider', function($routeProvider) {
		  $routeProvider.
						when('/', 
							{
							templateUrl: 'partials/partial-For-routes-1.html', 
							controller: appCtrl
							}).
						when('/page-2', 
							{
							templateUrl: 'partials/partial-For-routes-2.html', 
							controller: appCtrl
							}).
						when('/page-3', 
							{
							templateUrl: 'partials/partial-For-routes-3.html', 
							controller: appCtrl
							}).
						otherwise({redirectTo:("/")})
		 }]);