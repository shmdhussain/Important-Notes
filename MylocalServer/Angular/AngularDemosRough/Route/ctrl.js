var app= angular.module('myApp', []);
app.controller('parentCtrl',['$scope', '$window','$rootScope','$location',function($scope, $window, $rootScope,$location,) {
	$scope.goToGoogle = function (url) {
		$scope.$apply( $location.path(url) );
	}
}]);