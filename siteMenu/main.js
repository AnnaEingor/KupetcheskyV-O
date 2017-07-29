
var order = angular.module("orderApp", ["ngRoute", "ngAnimate", "ui.bootstrap"]); 
//order.controller("orderCtrl", function($scope) {
  
  order.config(function($routeProvider){
    $routeProvider
    .when("/orderCake", {
            templateUrl: "order/orderCake.html",
            controller: "orderCakeCtrl"
        })
    .when("/orderMasterClass", {
            templateUrl: "order/orderMClass.html",
            controller: "orderMClassCtrl"
        })    
    .when("/orderTable", {
            templateUrl: "order/table.html",
            controller: "tableCtrl"
        })  
    .when("/orderFood", {
            templateUrl: "order/orderFood/menuGallery.html",
            controller: "menuGalleryCtrl"
        })  
        .when("/orderFood/:menuIndex", {
            templateUrl: "order/orderFood/menuSet.html",
            controller: "menuSetCtrl"
        })
        .when("/orderFood/myCard", {
            templateUrl: "order/orderFood/menuMyCard.html",
            controller: "menuMyCardCtrl"            
        })
        .when("/orderFood/delivery",{
            templateUrl: "order/orderFood/delivery/deliveryConfirm.html",
            controller: "deliveryConfirmCtrl"
        })
        .when("/orderFood/pickUp",{
            templateUrl: "order/orderFood/pickUp/pickUpConfirm.html",
            controller: "pickUpConfirmCtrl"
        })
});


