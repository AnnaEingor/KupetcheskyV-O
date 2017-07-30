orderApp.controller("menuGalleryCtrl", function($scope, $http, $location, menus){
  
    if(menus.getAllList().length===0){
            $scope.orderArr = [];
            $http.get("data/menuTA.json").then(function(response){
            menus.load(response.data);
            $scope.orderArr = menus.getAllList;
            })
         }
         else{
            $scope.orderArr = menus.getAllList;
         }
        
      
        $scope.openDetails = function(index) {
        $location.path("/menus/" + index)
    }
});
