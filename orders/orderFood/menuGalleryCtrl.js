orderApp.controller("menuGalleryCtrl", function ($scope, $http, $routeParams, $location, orderService, mapService, menus, $uibModal) {

  $scope.orderArr = [];
  $http.get("data/menuTA.json").then(function (response) {
    $scope.orderArr = response.data;
    menus.load(response.data);
  });

  
  $scope.cartArr = [];
  $scope.addToCart = function (order) {
    $scope.cartArr.push(order);
    orderService.addOrder(order);
  };

  $scope.total = orderService.total;

  $scope.quantityOfPosition = 0;

  $scope.removeItem = function (item) {
    $scope.cartArr.splice(item, 1);
  };

  $scope.changePlus = function (item) {
    var index = $scope.cartArr.indexOf(item);
    $scope.cartArr[index].quantity++;

  };
  $scope.changeMinus = function (item) {
    var index = $scope.cartArr.indexOf(item);
    if ($scope.cartArr[index].quantity > 0) {
      $scope.cartArr[index].quantity--;
    }
  };

  $scope.goToDelivery = function () {
     mapService.initMap;
     $location.path("/delivery");
     
    };
    
 $scope.goToPickUp = function () {
     $location.path("/pickUp");
   };

  $scope.openDetails = function (order) {
     $uibModal.open({
      templateUrl: "orders/orderFood/menuSet.html",
      controller: "menuSetCtrl",
      resolve: {
        order: function () {
          return order;
        }
      }

    });
  };
});






