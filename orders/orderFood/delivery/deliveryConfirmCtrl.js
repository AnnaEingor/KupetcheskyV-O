
  orderApp.controller("deliveryConfirmCtrl", function($scope, $location, orderService){
    
    $scope.orders = orderService.getAllOrders();
    $scope.total = orderService.total();
     
    
     $scope.goToPayment = function () {
        $location.path("/login");
}

 //to do delivery. Must be = formula(distance from restaurant to address from placeID(Google place autocomplete)

$scope.initMap = function(){
     var centerLatLng = new google.maps.LatLng(56.2928515, 43.7866641);
    var mapOptions = {
         center: centerLatLng, 
         zoom: 9               
     };
     var map = new google.maps.Map(document.getElementById("map"), mapOptions);
    }
    google.maps.event.addDomListener(window, "load", $scope.initMap);

 });



