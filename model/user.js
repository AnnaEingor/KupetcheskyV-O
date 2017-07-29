// Shared User Constructor
orderApp.factory("User", function(){
    function User(plainObject) {
        this.firstName = plainObject.firstName;
        this.lastName = plainObject.lastName;
        this.email = plainObject.email;
        this.password = plainObject.password;
        this.addressHome = plainObject.addressHome;
        this.addressWork = plainObject.addressWork;
        this.discount - plainObject.discount;
        
    };

    return User;
});

// Service that manages the active user

orderApp.factory("activeUser", function(User){
    var user = null;

    var isLoggedIn = function() {
        return user ? true : false;
    };

    var login = function(loggedInUser) {
        user = loggedInUser;
    };

    var logout = function() {
        user = null;
    };

    var get = function() {
        return user;
    };

    var getDiscount = function(loggedInUser){
        if(user.discount !=0){
        user = loggedInUser;  

        //todo
        
        }
    }

    return {
        isLoggedIn: isLoggedIn,
        login: login,
        logout: logout,
        get: get,
        getDiscount: getDiscount
    };   
});

/*"firstName": "Anna",
  "lastName": "Eingor",
  "email": "an.lerm@yandex.ru",
  "password": "1234",
  "addressHome": "ytytyt",
  "addressWork": "yieieieieieie",
  "discount": 5*/