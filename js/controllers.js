function TodoCtrl($scope){
	$scope.currentTask={};
	$scope.tasks=[];
	$scope.addTask = function(){
		$scope.tasks.push({description:$scope.currentTask.description,status:'not_done'});
		$scope.currentTask={};
	};
	$scope.markDone=function(i){
		$scope.tasks[i].style="text-decoration:line-through;";
	};
	$scope.deleteTask = function(i){
		$scope.tasks.splice(i-1,1);
	}
}