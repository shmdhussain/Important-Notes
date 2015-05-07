
	myApp.controller('parentCtrl', ['$scope', '$window', '$location', function ($scope, $window, $location) {

		$scope.subject = {
			"subarray": [{
				'name': 'science',
				'code': 'sci'
			}, {
				'name': 'maths',
				'code': 'mat'
			}]
		};
		$scope.exam = {
			"sci": [{
				'name': 'science 1',
				'examcode': 's1'
			}, {
				'name': 'science 2',
				'examcode': 's2'
			}],
				"mat": [{
				'name': 'maths 1',
				'examcode': 'm1'
			}, {
				'name': 'maths 2',
				'examcode': 'm2'
			}]
		};
	}]);
	
	myApp.controller('Page1Ctrl', ['$scope', '$window', '$location', function ($scope, $window, $location) {

		$scope.subject = {
			"subarray": [{
				'name': 'science',
				'code': 'sci'
			}, {
				'name': 'maths',
				'code': 'mat'
			}]
		};
		$scope.exam = {
			"sci": [{
				'name': 'science 1',
				'examcode': 's1'
			}, {
				'name': 'science 2',
				'examcode': 's2'
			}],
				"mat": [{
				'name': 'maths 1',
				'examcode': 'm1'
			}, {
				'name': 'maths 2',
				'examcode': 'm2'
			}]
		};
		$scope.changesecond = function(){
			$scope.exam.myOptionSub = $scope.exam[$scope.myOptionSub];
			console.log($scope.examobj)
		}
	}]);
	
	myApp.controller('Page3Ctrl',['$scope','$window','$location',function ($scope,$window,$location) {
		

		$scope.subject={"subarray":[
										{'name':'science','code':'sci'},
										{'name':'maths','code':'mat'}
								   ]};
		$scope.exam={"sci":[{'name':'science 1','examcode':'s1'},
							{'name':'science 2','examcode':'s2'}
							],
					  "mat":[
							{'name':'maths 1','examcode':'m1'},
							{'name':'maths 2','examcode':'m2'}
					   ]
					};		
		}]);
		myApp.controller('Page4Ctrl',['$scope','$window','$location',function ($scope,$window,$location) {
		

		$scope.subject={"subarray":[
										{'name':'science','code':'sci'},
										{'name':'maths','code':'mat'}
								   ]};
		$scope.exam={"sci":[{'name':'science 1','examcode':{'code':'s1'}},
							{'name':'science 2','examcode':{'code':'s2'}}
							],
					  "mat":[
							{'name':'maths 1','examcode':{'code':'m1'}},
							{'name':'maths 2','examcode':{'code':'m2'}}
					   ]
					};		
		}]);
		
		
		myApp.controller('Page5Ctrl',['$scope','$window','$location',function ($scope,$window,$location) {
		

		$scope.subject={"subarray":[
										{'name':'science','code':'sci','module':'s1'},
										{'name':'science','code':'sci','module':'s2'},
										{'name':'maths','code':'mat','module':'m1'},
										{'name':'maths','code':'mat','module':'m2'},
										
								   ]};
		$scope.loadApp=function(){
			
			//console.log($scope.subject['subarray'].length);
			$scope.application_list = [];
			for(i=0;i< $scope.subject['subarray'].length;i++){
				
				if($scope.application_list.indexOf($scope.subject['subarray'][i].name) == -1){
					$scope.application_list.push($scope.subject['subarray'][i].name);
					//console.log($scope.subject['subarray'][i].name)
				}
			}
			$scope.myOptionSub = $scope.subject['subarray'][0].name;
			//console.log($scope.subject['subarray'][0].name);
		};
		$scope.loadApp();
		$scope.populateModule=function(){
			
			$scope.mod_list = [];
			for(i=0;i< $scope.subject['subarray'].length;i++){
				
				if($scope.subject['subarray'][i].name == $scope.myOptionSub){
					$scope.mod_list.push($scope.subject['subarray'][i].module);
					console.log($scope.subject['subarray'][i].module)
				}
			}
			$scope.myOptionMod = $scope.subject['subarray'][0].module;
			console.log($scope.myOptionSub);
			
		};
		
		
		
		}]);