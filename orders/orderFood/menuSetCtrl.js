
orderApp.controller("menuSetCtrl", function($scope,$http,menus, order, $uibModalInstance){
       $scope.rate = 7;
       $scope.max = 10;
     $scope.isReadonly = false;

  $scope.ratingStates = [
    {stateOn: 'glyphicon-ok-sign', stateOff: 'glyphicon-ok-circle'},
   ];

 
  $scope.order = order;
  
  $scope.dismiss = function () {
        $uibModalInstance.close("User dismissed");
    }
 
}); 


 
