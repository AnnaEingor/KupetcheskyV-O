orderApp.controller("profileCtrl", function($scope, $uibModalInstance){

    $scope.dismiss = function () {
        $uibModalInstance.close("User dismissed");
    }
});

