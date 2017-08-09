
orderApp.factory("User", function(){
    function User(plainObject) {
        this.firstName = plainObject.firstName;
        this.lastName = plainObject.lastName;
        this.birthday = plainObject.birthday;
        this.email = plainObject.email;
        this.phone = plainObject.phone;
        this.password = plainObject.password;
    
    };

    return User;
});

// Service that manages the active user

orderApp.factory("regisredUser", function(User){
    var userArr = [];

    var createProfile = function(){
      return new User(plainObject);
    }

    var loadTo = function(plainObjectArr) {
        for (var i = 0; i < plainObjectArr.length; i++) {
            userArr.push(new User(plainObjectArr[i]))
        }
    }


    var isLoggedIn = function() {
        return user ? true : false;
    };

    var login = function(loggedInUser) {
        user = loggedInUser;
    };

    var logout = function() {
        user = null;
    };

    var getUser = function() {
        return user;
    };

    // var update = function(user){

    // }

    var hasProfile = function() {
        return user ? true : false;
    };
    

    return {
        loadTo: loadTo,
        createProfile: createProfile,
        isLoggedIn: isLoggedIn,
        login: login,
        logout: logout,
        getUser: getUser,
        hasProfile: hasProfile
    };   
});

/*"firstName": "Anna",
  "lastName": "Eingor",
  "email": "an.lerm@yandex.ru",
  "password": "1234",
  "addressHome": "ytytyt",
  "addressWork": "yieieieieieie",
  "discount": 5*/

