	var app = angular.module('myapp', []);

	app.controller('MyApp', ['$scope', function($scope,ConsumptionEngineRESTService) {
			$scope.getAllData=function(){
				console.log("hi");
				/*STUB Data: when it is used , code is working perfectly*/
				  /* $scope.data = [
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
				]; */
				/* Data From REST Service: Issue happens when i fetch data from REST service,
				*Delay in fetching data cause me the issue, such as $scope.data is not populated but
				*that is used in the below for loop to populate the $scope.myFilteredKey array*/
				/*ConsumptionEngineRESTService is a angular factory. uses REST service to fetch from Mongo*/
				$scope.data =ConsumptionEngineRESTService.getAll();
				$scope.myFilteredKey=[];
				for(i=0;i<$scope.data.length;i++){
					if($scope.myFilteredKey.indexOf($scope.data[i].key)==-1){
						$scope.myFilteredKey.push($scope.data[i].key);
						console.log($scope.data[i].key);
					}
				}
			}
	}]);