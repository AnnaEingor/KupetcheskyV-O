
var orderApp = angular.module("orderApp", ["ngRoute", "ngAnimate", "ui.bootstrap"]); 
//order.controller("orderCtrl", function($scope) {
  
  orderApp.config(function($routeProvider){
    $routeProvider
    .when("/orderCake", {
            templateUrl: "orders/orderCake.html",
            controller: "orderCakeCtrl"
        })
    .when("/orderMasterClass", {
            templateUrl: "orders/orderMClass.html",
            controller: "orderMClassCtrl"
        })    
    .when("/orderTable", {
            templateUrl: "orders/table.html",
            controller: "tableCtrl"
        })  
    .when("/orderFood", {
            templateUrl: "orders/orderFood/menuGallery.html",
            controller: "menuGalleryCtrl"
        })  
        .when("/orderFood/:menuIndex", {
            templateUrl: "orders/orderFood/menuSet.html",
            controller: "menuSetCtrl"
        })
        .when("/orderFood/myCard", {
            templateUrl: "orders/orderFood/menuMyCard.html",
            controller: "menuMyCardCtrl"            
        })
        .when("/orderFood/delivery",{
            templateUrl: "orders/orderFood/delivery/deliveryConfirm.html",
            controller: "deliveryConfirmCtrl"
        })
        .when("/orderFood/pickUp",{
            templateUrl: "orders/orderFood/pickUp/pickUpConfirm.html",
            controller: "pickUpConfirmCtrl"
        })
});


