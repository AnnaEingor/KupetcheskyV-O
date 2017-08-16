
orderApp.controller('deliveryConfirmCtrl', function ($scope, mapService, orderService) {

  $scope.orders = orderService.getAllOrders();
  $scope.total = orderService.total();
  $scope.goToPayment = function () {
          $location.path("/login");
  };

  google.maps.event.addDomListener(window, "load", mapService.initMap);

  $scope.address = " ";

  //recieve distance(number)
  $scope.distance = mapService.distance();  
 
  console.log($scope.distance);


  
//$scope.delivery = mapService.delivery();
  
});
  




