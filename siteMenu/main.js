
var order = angular.module("orderApp", ["ngRoute", "ngAnimate", "ui.bootstrap"]); 
//order.controller("orderCtrl", function($scope) {
  
  order.config(function($routeProvider){
    $routeProvider
    .when("/order", {
            templateUrl: "app/recipe/recipeGallery.html",
            controller: "RecipeGalleryCtrl"
        })
});


/*

gallery.config(function($routeProvider){
  $routeProvider
  .when("/user",{
  templateUrl: "",
  controller: ""
    
  })
  
  .when("/orderOnline",{
    templateUrl: "",
    controller: ""
  })
  
  .when("/", {
   templateUrl: "",
    controller: ""
});
});

var recipeApp = angular.module("RecipeApp", ["ngRoute", "ngAnimate", "ui.bootstrap"]);

recipeApp.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "app/home/home.html",
            controller: "HomeCtrl"
        })
        .when("/recipes", {
            templateUrl: "app/recipe/recipeGallery.html",
            controller: "RecipeGalleryCtrl"
        })
        .when("/recipes/:recipeIndex", {
            templateUrl: "app/recipe/recipeDetails.html",
            controller: "RecipeDetailsCtrl"
        }).when("/new", {
            templateUrl: "app/recipe/newRecipe.html",
            controller: "NewRecipeCtrl"            
        })

});

*/