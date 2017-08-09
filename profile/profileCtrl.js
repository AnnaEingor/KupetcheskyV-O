orderApp.controller("profileCtrl", function($scope, $http, $location, $uibModalInstance){
$scope.pass = "";
$scope.confpass = "";

    $scope.dismiss = function () {
        $uibModalInstance.close("User dismissed");
    }
});

