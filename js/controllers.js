function TodoCtrl($scope){
	$scope.currentTask={};
	$scope.tasks=[];
	$scope.addTask = function(){
		$scope.tasks.push({index:$scope.tasks.length+1,description:$scope.currentTask.description,status:'not_done'});
		$scope.currentTask={};
	};
	$scope.markDone=function(i){
		var index=Number(i);
		index--;
		$scope.tasks[index].style="text-decoration:line-through;";
	};
}