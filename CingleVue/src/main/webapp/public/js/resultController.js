app.controller("ResultController", function($scope, $http){
	$scope.subject = "";	
	$scope.init = function(){
		$http({method : "POST", url : "challenge/subjects"}).
		success(function(data, status){
			$scope.subjects = data.subjects;			
		}).
		error(function(data, status){
			alert(data)
		});				
	};
	$scope.loadData = function (){
		if ($scope.subject){
			$http({method : "POST", url : "challenge/subjects/" + $scope.subject.subject}).
			success(function(data, status){
				//alert(JSON.stringify(data.schools));
				$scope.schools = data.schools;
			}).
			error(function(data, status){
				alert(data)
			});			
		}else {
			$scope.schools = '';
		}
	};	
	$scope.predicate  = 'school.name';
	$scope.y3_tog     = 2;
	$scope.school_tog = 2;
	$scope.y5_tog     = 2;
	$scope.y7_tog     = 2;
	$scope.y9_tog     = 2;
	$scope.y3y5_tog   = 2;
	$scope.fy3y5_tog  = 2;
	$scope.gy3y5_tog  = 2;
	$scope.ly3y5_tog  = 2;
});