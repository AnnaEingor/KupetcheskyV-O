orderApp.controller("menuGalleryCtrl", function($scope, $http, $routeParams, menus){

    $scope.orderArr = [];
    $http.get("data/menuTA.json").then(function(response){
       $scope.orderArr = response.data;
       menus.load(response.data);
    });

      $scope.quantityOfPosition = 0;

   //to do
        
     
    $scope.addToCart  = function(){
      $scope.cartArr =[];
      if($scope.quantityOfPosition >= 1){
            $scope.cartArr = menus.addToList($routeParams.orderIndex);
       }
        
          console.log(cartArr);
      }

    $scope.changeQty = function(){
      menus.changeOrder(posMenu, $routeParams.orderIndex);
      }
    $scope.remove =function(){
      menus.removeFromList($routeParams.orderIndex);
    }

   });

    orderApp.filter('myFilter', function(){
      return function(items, qty) {
         var filtered = [];
       for (var i = 0; i < items.length; i++) {
          var item = items[i];
         if(qty>=1){
           filtered.push(item);
           console.log(filtered.push(item));
         }
         }
      return filtered;
     };
 });
    

