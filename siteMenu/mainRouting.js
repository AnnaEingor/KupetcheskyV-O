
var orderApp = angular.module("orderApp", ["ngRoute", "ngAnimate", "ui.bootstrap"]); 
  
  orderApp.config(function($routeProvider){
     $routeProvider
  .when("/", {
    templateUrl: "first.html",
    })
    .when("/orderCake", {
            templateUrl: "orders/orderCake/orderCake.html",
            controller: "orderCakeCtrl"
        })
    .when("/orderMasterClass", {
            templateUrl: "orders/orderMasterClass/orderMClass.html",
            controller: "orderMClassCtrl"
        })    
    .when("/orderTable", {
            templateUrl: "orders/orderTable/table.html",
            controller: "tableCtrl"
        })  
    .when("/orderFood", {
            templateUrl: "orders/orderFood/menuGallery.html",
            controller: "menuGalleryCtrl"
        })  
        .when("/orderFood/:orderIndex", {
           templateUrl: "orders/orderFood/menuSet.html",
             controller: "menuSetCtrl"
          })
        // .when("/orderFood/myCard", {
        //     templateUrl: "orders/orderFood/menuMyCard.html",
        //     controller: "menuMyCardCtrl"            
        // })

        .when("/delivery",{
            templateUrl: "orders/orderFood/delivery/deliveryConfirm.html",
            controller: "deliveryConfirmCtrl"
        })
        .when("/pickUp",{
            templateUrl: "orders/orderFood/pickUp/pickUpConfirm.html",
            controller: "pickUpCtrl"
        })
        .when("/login",{
            templateUrl: "login/login.html",
            controller: "loginCtrl"
        })
        .when("/profile",{
            templateUrl: "profile/profile.html",
            controller: "profileCtrl"
        })
});


