orderApp.controller("profileCtrl", function($scope, $uibModalInstance, User, ActiveUser, Users){
     $scope.fname=" ";
     $scope.lname=" ";
     $scope.phone=" ";
     $scope.email=" ";
     $scope.bday =" ";
     $scope.password =" ";
    

    $scope.dismiss = function () {
        $uibModalInstance.close("User dismissed");
    }

    $scope.cancel = function() {
        $location.path("/first");
    };

    $scope.newUser = new User({});

    $scope.saveUser = function(){
        var userArr = Users.getAllUsers();
          for(i=0; i<userArr.length; i++) {
            if (userArr[i].email === $scope.email) {
                alert("email already registrated");
            }
                    if($scope.newUser.firstName === undefined) {
                        $scope.newUser.firstName = $scope.fName;
                    }
                    if($scope.newUser.lastName === undefined) {
                        $scope.newUser.lastName = $scope.lName;
                    }
                    if($scope.newUser.phone === undefined) {
                        $scope.newUser.phone = $scope.usrPhone;
                    }
                    if($scope.newUser.birthday === undefined) {
                        $scope.newUser.birthday = $scope.bday;
                    }
                    if($scope.newUser.email === undefined) {
                        $scope.newUser.email = $scope.email;
                    }
                    if($scope.newUser.password === undefined) {
                        $scope.newUser.password = $scope.password;
                    }
                }
                    
                    Users.updateUser(i,$scope.newUser);
                }
            }
        }

        $location.path("/data/database");
    };

    $scope.userName = function() {
        return ActiveUser.get().email + ActiveUser.get().password;
    }
});

