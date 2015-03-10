var app = angular.module('myapp', []);

app.controller('MyApp', ['$scope', function($scope) {


	//$scope.myFilter=function(){
		
	//};
	
	
	
    $scope.data = [
		{key:"home",value:"hk1"},
		{key:"home",value:"hk2"},
		{key:"home",value:"hk3"},
		{key:"home",value:"hk4"},
		{key:"product",value:"pk1"},
		{key:"product",value:"pk2"},
		{key:"product",value:"pk3"},
		{key:"product",value:"pk4"},
		{key:"service",value:"sk1"},
		{key:"service",value:"sk2"},
		{key:"service",value:"sk3"},
		{key:"service",value:"sk4"}
	];
		$scope.myFilteredKey=[];
		for(i=0;i<$scope.data.length;i++){
			if($scope.myFilteredKey.indexOf($scope.data[i].key)==-1){
				$scope.myFilteredKey.push($scope.data[i].key);
				console.log($scope.data[i].key);
			}
		}
		
		
  $scope.datafiltered = _.groupBy($scope.data, 'key');
  
  $scope.keys = _.unique($scope.data, 'key');
  
  $scope.keyToDisplay = $scope.keys[0];
}]);