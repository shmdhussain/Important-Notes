	var app=angular.module('app',[]);
	app.controller('SampleCtrl',function($scope,$q){
		$scope.sampleobj1=[{"value":"Radio1 val1"},
							{"value":"Radio1 val2"},
							{"value":"Radio1 val3"},
							{"value":"Radio1 val4"}
		];
		$scope.sampleobj2=[{"value":"Radio2 val1"},
							{"value":"Radio2 val2"},
							{"value":"Radio2 val3"},
							{"value":"Radio2 val4"}
		];
		$scope.modalss=[{"radiomodal1":'sss'},{"radiomodal2":'fff'}]
		$scope.checkObj=[{check1:[]},{check2:[]}];
		$scope.initcheck1=function($index){
			console.log("initcheck1");
			if($index==0){
				console.log("$index :"+$index);
				$scope.checkObj[0].check1.push(true);
				//console.log("$scope.checkObj[0].check1 :"+$scope.checkObj[0].check1);
				return ;
			}
			else {
				$scope.checkObj[0].check1.push(false);
				return ;
			}
		};
		$scope.initcheck2=function($index){
				console.log("initcheck2");
				$scope.checkObj[1].check2.push(false);
				return ;
		};
		
		$scope.clickradio1=function(e){
			console.log("e.target.id :"+e.target.id);
			console.log("$scope.checkObj[1].check2.length :"+$scope.checkObj[1].check2.length);
			var id=e.target.id;
			id = id.substring(id.length - 1);
			console.log("id: "+id);
			for(i=0;i<$scope.checkObj[0].check1.length;i++){
				if(i==id){
					$scope.checkObj[0].check1[i]=true;
				}
				else{
					$scope.checkObj[0].check1[i]=false;
				}
			}
			for(i=0;i<$scope.checkObj[1].check2.length;i++){
				$scope.checkObj[1].check2[i]=false;
			}
		};
		$scope.clickradio2=function(e){
			console.log("e.target.id :"+e.target.id);
			console.log("$scope.checkObj[0].check1.length :"+$scope.checkObj[0].check1.length);
			var id=e.target.id;
			id = id.substring(id.length - 1);
			console.log("id: "+id);
			for(i=0;i<$scope.checkObj[1].check2.length;i++){
				if(i==id){
					$scope.checkObj[1].check2[i]=true;
				}
				else{
					$scope.checkObj[1].check2[i]=false;
				}
				
			}
			for(i=0;i<$scope.checkObj[0].check1.length;i++){
				$scope.checkObj[0].check1[i]=false;
			}
		};
	})