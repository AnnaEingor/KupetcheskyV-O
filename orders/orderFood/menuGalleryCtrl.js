orderApp.controller("menuGalleryCtrl", function($scope, $http, $routeParams, $location, menus){

    $scope.orderArr = [];
    $http.get("data/menuTA.json").then(function(response){
       $scope.orderArr = response.data;
       menus.load(response.data);
    });
    
     $scope.cartArr =[];
     $scope.addToCart = function(order){
         $scope.cartArr.push(order);
      }; 

      $scope.total = function(){
         var sum = 0;
         for(var i=0; i<$scope.cartArr.length; i++){
           var price = $scope.cartArr[i].price;
           sum += $scope.cartArr[i].quantity*price;
         }
         return sum;
       };
    
    $scope.quantityOfPosition=0;

    $scope.removeItem =function(item){
       $scope.cartArr.splice(item, 1);
     };

    $scope.changePlus = function(item){
      var index = $scope.cartArr.indexOf(item);
      $scope.cartArr[index].quantity++;

       };
     $scope.changeMinus = function(item){
      var index = $scope.cartArr.indexOf(item);
      if($scope.cartArr[index].quantity>0){
      $scope.cartArr[index].quantity--;
      }
       };

        $scope.goToDelivery = function(){   
          $location.path('/Delivery');
          //console.log($location);
      }
      $scope.goToPickUp = function(){   
          $location.path("/pickUp");
     }
     
    //  $scope.openDetails = function(order){
    //    $location.path("/orderFood/:orderIndex");
    //  }
     
});    


   
    

