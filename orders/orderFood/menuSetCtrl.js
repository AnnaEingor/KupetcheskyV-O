
orderApp.controller("menuSetCtrl", function($scope, $routeParams, menus, MenuTA){
 

   if(menus.getAllList().length===0){
    $scope.orderArr = menus.getAllList();
}

   $scope.order = menus.getPosMenu($routeParams.orderIndex);
   $scope.quantityOfPosition = "0";
    
});
