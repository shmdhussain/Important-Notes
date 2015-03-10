


var myapp =angular.module('testapp',['ngRoute']);

myapp.controller('testappCtrl', ['$scope',function ($scope) {
   
}]);

myapp.directive('bxslider', function () {
    return {
      restrict: 'A',
      scope: {},
      link: function (scope, elem, attrs) {
		$('.bxslider').bxSlider({
		  auto: true,
		  autoControls: true
		});
      }
    }
});
