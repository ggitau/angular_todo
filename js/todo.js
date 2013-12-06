var todo=angular.module('todo',[]);
//todo.config();

todo.directive('ngEnter', function () {
    return function (scope, element, attrs) {
        element.bind("keydown keypress", function (event) {
            if(event.which === 13) {
                scope.$apply(function (){
                    scope.$eval(attrs.ngEnter);
                });

                event.preventDefault();
            }
        });
    };
});
todo.directive('taskRowContent',function(){
    return {
        restrict:'E',
        scope:{
            index:'@',
            style:'@',
            task:'@',
            deleteTask:'&',
            markDone:'&'

        },template:'<span><span class="span10" style="{{style}}">{{index}}.{{task}}</span>'
					+'<span class="span2"><span title="delete task" style="cursor:pointer;" ng-click="deleteTask({{index-1}});"><i class="icon-remove"></i></span>'
					+'<span title="mark task as done" style="cursor:pointer;" ng-click="markDone(\'{{index-1}}\');"><i class="icon-ok"></i></span>'
					+'</span></span>'
        ,replace:true            
        ,link:function(scope,element,attrs){
            scope.deleteTask=function(index){
                scope.$parent.deleteTask(index);
            };
            scope.markDone=function(index){
                scope.$parent.markDone(index);
            }
        }
    };
});
