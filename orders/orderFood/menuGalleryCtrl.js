orderApp.controller("menuGalleryCtrl", function($scope, $http, $routeParams, menus){

    $scope.orderArr = [];
    $http.get("data/menuTA.json").then(function(response){
       $scope.orderArr = response.data;
       menus.load(response.data);
    });

      $scope.quantityOfPosition = 0;

   //to do
        
     $scope.cartArr =[];
     $scope.addToCart  = function(){
        if($scope.quantityOfPosition >= 1){
            $scope.cartArr = menus.addToList($routeParams.orderIndex);
        }
        
         console.log(cartArr);
       }

   });

    orderApp.filter('myFilter', function() {
      return function(items, quantityOfPosition) {
         var filtered = [];
       for (var i = 0; i < items.length; i++) {
          var item = items[i];
         if(quantityOfPosition>=1){
           filtered.push(item);
         }
         }
      return filtered;
     };
 });




 