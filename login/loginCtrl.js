 orderApp.controller("LoginCtrl", function ($scope, $uibModalInstance, $http, $location, registredUser, User) {

    $http.get("data/users.json").then(function (response) {
        $scope.users = [];
        for (var i = 0; i < response.data.length; i++) {
            $scope.users.push(new User(response.data[i]));
        }

        //console.log(JSON.stringify($scope.users));
    });

    $scope.login = function() {
        // var user = getLoggedInUser();
        // if (user != null) {
        //     activeUser.login(user);
            
            $location.path("/payment");
        // } else {
        //     $scope.failedAttempt = true;
        // }
    };

//Should be option "no such user " 
//should be option "forgot password"
$scope.createProfile = function(){
         $uibModal.open({
            templateUrl: "profile.html",
            controller: "profileCtrl"
 
})
};
})