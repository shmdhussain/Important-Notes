function PhoneListCtrl($scope, $http) {
  $http.get('phones/phones.json').success(function(data) {
    $scope.phones = data;
	//$scope.phones = data.splice(0, 5);
  });
 
  $scope.orderProp = 'age';
}
function PhoneDetailCtrl($scope, $routeParams, $http) {
  $http.get('phones/' + $routeParams.phoneId + '.json').success(function(data) {
    $scope.phone = data;
	$scope.mainImageUrl = data.images[0];
  });
  $scope.setImage = function(imageUrl) {
    $scope.mainImageUrl = imageUrl;
  }
  $scope.hello = function(name) {
      alert('Hello ' + (name || 'world') + '!');
  }
}
 
PhoneDetailCtrl.$inject = ['$scope', '$routeParams', '$http'];
PhoneListCtrl.$inject = ['$scope', '$http'];