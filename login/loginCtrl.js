orderApp.controller("loginCtrl", function ($scope, $location, $uibModal, ActiveUser, Users) {
 
  $scope.failedAttempt = false;
  
      $scope.login = function() {
          var user = getLoggedInUser();
          if (user != null) {
              ActiveUser.login(user);
              $location.path("/payment");
          } else {
              console.log(JSON.stringify(user));
              $scope.failedAttempt = true;
          }
      };
  
      var getLoggedInUser = function() {
          var usersArr = Users.getAllUsers();
          for (var i = 0; i < usersArr.length; i++) {
              if (usersArr[i].email === $scope.email && usersArr[i].password === $scope.password) {
                  return usersArr[i];
              }
          }
          return null;
      };
  
      
   //Should be option "no such user " 
  //should be option "forgot password"

  

  $scope.createProfile = function () {
    $uibModal.open({
      templateUrl: "profile/profile.html",
      controller: "profileCtrl"
    });
  };

});