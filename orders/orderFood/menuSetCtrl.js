
orderApp.controller("menuSetCtrl", function($scope,$http,menus){
       $scope.rate = 7;
       $scope.max = 10;
     $scope.isReadonly = false;

  $scope.ratingStates = [
    {stateOn: 'glyphicon-ok-sign', stateOff: 'glyphicon-ok-circle'},
   ];
 });
