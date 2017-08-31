
orderApp.controller('deliveryConfirmCtrl', function ($scope, $location, mapService, orderService) {

  $scope.orders = orderService.getAllOrders();
  $scope.total = orderService.total();

  $scope.goToPayment = function () {
          $location.path("/login");
  };

  $scope.mapService = mapService;
  google.maps.event.addDomListener(window, "load", mapService.initMap);

  $scope.address = " ";
  $scope.toDist = function(){
    alert(mapService.delivery());
  };
  $scope.delivery = mapService.delivery();
});
  




