
orderApp.controller('deliveryConfirmCtrl', function ($scope, mapService, orderService) {

  $scope.orders = orderService.getAllOrders();
  $scope.total = orderService.total();
  $scope.goToPayment = function () {
          $location.path("/login");
  };

  google.maps.event.addDomListener(window, "load", mapService.initMap);

  $scope.address = " ";

  //recieve distance(number)
  //var d = mapService.distance();  
   //console.log(d);

// $scope.delivery = function(){
//   var delivery = mapService.delivery();
//   console.log(delivery);
 
// }
 
});
  




