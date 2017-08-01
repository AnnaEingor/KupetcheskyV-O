orderApp.controller("menuGalleryCtrl", function($scope, $http, $location){
    $scope.orderArr = [];
    $http.get("data/menuTA.json").then(function(response){
       $scope.orderArr = response.data;
    });

        $scope.openDetails = function(index) {
        $location.path("/orderFood/" + index)
    }
});
