orderApp.controller("menuGalleryCtrl", function($scope, $http, $routeParams, menus){

    $scope.orderArr = [];
    $http.get("data/menuTA.json").then(function(response){
       $scope.orderArr = response.data;
       menus.load(response.data);
    });

    $scope.addToCart  = function(order){
      $scope.orderArr.push($scope.quantityOfPosition);
    }
});

    orderApp.filter('myFilter', function(){
      return function(items, qty) {
         var filtered = [];
       for (var i = 0; i < items.length; i++) {
          var item = items[i];
         if(qty>=1 && addToCart){
           filtered.push(item);
           console.log(filtered.push(item));
         }
         }
      return filtered;
     };
 });
  //    

  //  //to do
        
  //    $scope.cartArr =[];
  //   $scope.addToCart  = function(){
  //     if($scope.quantityOfPosition >= 1){
  //           $scope.cartArr = menus.addToList($routeParams.orderIndex);
  //      }
        
  //         console.log(cartArr);
  //     }

  //   $scope.changeQty = function(){
  //     menus.changeOrder(posMenu, $routeParams.orderIndex);
  //     }
  //   $scope.remove =function(){
  //     menus.removeFromList($routeParams.orderIndex);
  //   }

  //  $scope.summa = order.price*quantityOfPosition;

  //   $scope.total = function(){
  //     var sum = 0;
  //     for(var i=0; i<$scope.cartArr.length; i++) {
  //            sum += summa;
  //     }
  // };
     

   
    

