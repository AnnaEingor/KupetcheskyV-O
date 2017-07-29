order.controller("orderCtrl", function($scope, $http, $location, menus){
  
    
        $scope.orderArr = [];
        $http.get("data/menuTA.json").then(function(response){
           for (var i=0; i < response.data.length; i++){
         $scope.orderArr.push(new MenuTA(response.data[i]));
        }
        });
    
      
    $scope.openDetails = function(index) {
        $location.path("/menus/" + index)
    }
});
