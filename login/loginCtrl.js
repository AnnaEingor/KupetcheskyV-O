 orderApp.controller("LoginCtrl", function ($scope, $uibModalInstance, $http, $location, registredUser, User) {

    $http.get("app/data/users.json").then(function (response) {
        $scope.users = [];
        for (var i = 0; i < response.data.length; i++) {
            $scope.users.push(new User(response.data[i]));
        }

        //console.log(JSON.stringify($scope.users));
    });

    $scope.failedAttempt = false;

    $scope.login = function() {
        var user = getLoggedInUser();
        if (user != null) {
            activeUser.login(user);
            $uibModalInstance.close("Logged-in");
            $location.path("/payment");
        } else {
            $scope.failedAttempt = true;
        }
    };
 });        