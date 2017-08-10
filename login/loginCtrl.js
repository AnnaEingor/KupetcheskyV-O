 orderApp.controller("loginCtrl", function ($scope, $location, $uibModal) {

    // $http.get("data/users.json").then(function (response) {
    //     $scope.users = [];
    //     for (var i = 0; i < response.data.length; i++) {
    //         $scope.users.push(new User(response.data[i]));
    //     }

    //     //console.log(JSON.stringify($scope.users));
    // });

    $scope.login = function() {
     $location.path("/payment");
      }; 
        // var user = getLoggedInUser();
        // if (user != null) {
        //     activeUser.login(user);
            
            
        // } else {
        //     $scope.failedAttempt = true;
        // }
    

//Should be option "no such user " 
//should be option "forgot password"

// $scope.login = function(){
//          $uibModal.open({
//             templateUrl: "payment.html",
//             controller: "paymentCtrl"
 
// })
// };

$scope.createProfile = function(){
         $uibModal.open({
            templateUrl: "profile/profile.html",
            controller: "profileCtrl"
 
})
};
})