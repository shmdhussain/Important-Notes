var app = angular.module('myapp', []);

app.controller('MyApp', ['$scope', function($scope) {
  $scope.data = [
    {key:"home",value:"hk1"},
    {key:"home",value:"hk2"},
    {key:"home",value:"hk3"},
    {key:"home",value:"hk4"},
    {key:"product",value:"pk1"},
    {key:"product",value:"hk2"},
    {key:"product",value:"hk3"},
    {key:"product",value:"hk4"},
    {key:"service",value:"sk1"},
    {key:"service",value:"hk2"},
    {key:"service",value:"hk3"},
    {key:"service",value:"hk4"}
  ];
    
  $scope.datafiltered = _.groupBy($scope.data, 'key');
  
  $scope.keys = _.unique($scope.data, 'key');
  
  $scope.keyToDisplay = $scope.keys[0];
}]);