orderApp.controller("menuGalleryCtrl", function($scope, $http, $location, menus){

    $scope.orderArr = [];
    $http.get("data/menuTA.json").then(function(response){
       $scope.orderArr = response.data;
       menus.load(response.data);
    });

        $scope.openDetails = function(index) {
        $location.path("/orderFood/" + index)
    }
});

//orderApp.controller("menuSetCtrl", function($scope, $routeParams, menus, MenuTA){
 

//    if(menus.getAllList().length===0){
//     $scope.orderArr = menus.getAllList();
// }

//    $scope.order = menus.getPosMenu($routeParams.orderIndex);
//    $scope.quantityOfPosition = "0";

//    $scope.addToOrder  = function(){

//    }
    