orderApp.controller("menuSetCtrl", function($scope, $location, menus, MenuTA, $routeParams){
 
    $scope.order = new MenuTA(menus.getPosMenu($routeParams.orderIndex));

 console.log($routeParams.orderIndex);
//    $scope.orderArr = menus.getAllList();
   
//    $scope.order = menus.getPosMenu($routeParams.orderIndex);
 
 
//  $scope.cancel = function() {
//         $location.path("/orderFood");
//     }

//     $scope.remove = function() {
//         menus.removeFromList($routeParams.orderIndex);
//         $location.path("/orderFood");
//     }
    
});
