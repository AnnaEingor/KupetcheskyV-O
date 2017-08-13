
  orderApp.controller("deliveryConfirmCtrl", function($scope, $location, orderService, mapService){
    
    $scope.orders = orderService.getAllOrders();
    $scope.total = orderService.total();
     
    
     $scope.goToPayment = function () {
        $location.path("/login");
}
  google.maps.event.addDomListener(window, "load", mapService.initMap);

   
  $scope.address = mapService.getAddress();
 
  $scope.delivery = mapService.delivery();
      
  });
  



