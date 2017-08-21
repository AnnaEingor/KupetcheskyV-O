orderApp.controller("loginCtrl", function ($scope, $location, $uibModal) {

  // $http.get("data/users.json").then(function (response) {
  //     $scope.users = [];
  //     for (var i = 0; i < response.data.length; i++) {
  //         $scope.users.push(new User(response.data[i]));
  //     }

  //     //console.log(JSON.stringify($scope.users));
  // });

  
  $scope.failedAttempt = false;
  
      $scope.login = function() {
          var user = getLoggedInUser();
          if (user != null) {
              activeUser.login(user);
              $location.path("/payment");
          } else {
              console.log(JSON.stringify(user));
              $scope.failedAttempt = true;
          }
      }
  
      var getLoggedInUser = function() {
          var usersArr = Users.getAllUsers();
          for (var i = 0; i < usersArr.length; i++) {
              if (usersArr[i].email === $scope.email && usersArr[i].password === $scope.password) {
                  return usersArr[i];
              }
          }
          return null;
      }
  
      
   });
  

  //Should be option "no such user " 
  //should be option "forgot password"

  // $scope.login = function(){
  //          $uibModal.open({
  //             templateUrl: "payment.html",
  //             controller: "paymentCtrl"

  // })
  // };

  $scope.createProfile = function () {
    $uibModal.open({
      templateUrl: "profile/profile.html",
      controller: "profileCtrl"

    })
  };
})