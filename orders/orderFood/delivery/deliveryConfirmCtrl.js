
orderApp.controller('deliveryConfirmCtrl', function ($scope, $location, mapService, orderService) {
  
  console.log("deliveryConfirm");
 
  $scope.orders = orderService.getAllOrders();
  $scope.total = orderService.total();

$scope.cost = function(){
 $scope.delivery = mapService.delivery;
 console.log("deliveryConfirm-delivery");
}


$scope.goToPayment = function () {
          $location.path("/login");
  };

  
           
         
        
 
  

 

 
});