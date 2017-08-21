
orderApp.controller('deliveryConfirmCtrl', function ($scope, $location, mapService, orderService) {

  $scope.orders = orderService.getAllOrders();
  $scope.total = orderService.total();

  $scope.goToPayment = function () {
          $location.path("/login");
  };

  google.maps.event.addDomListener(window, "load", mapService.initMap);

  $scope.address = " ";
  $scope.delivery = mapService.delivery();
});
  




