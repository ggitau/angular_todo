function TodoCtrl($scope){
	$scope.currentTask={};
	$scope.tasks={};
    $scope.currentIndex=0;
	$scope.addTask = function(){
		$scope.tasks[$scope.currentIndex++]={description:$scope.currentTask.description,status:'not_done'};
		$scope.currentTask={};
	};
	$scope.markDone=function(i){
		$scope.tasks[i].style="text-decoration:line-through;";
	};

	$scope.deleteTask = function(i){
        delete $scope.tasks[i];
        $scope.currentIndex--;
	}
}
