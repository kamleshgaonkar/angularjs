/**
 * AngularJS Tutorial 1
 * @author Nick Kaye <nick.c.kaye@gmail.com>
 */

/**
 * Main AngularJS Web Application
 */
var animateApp = angular.module('tutorialWebApp', ['ngRoute', 'ngAnimate']);

/**
 * Configure the Routes
 */
animateApp.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    // Home
    .when("/", {templateUrl: "partials/home.html", controller: "mainController"})
    // Pages
    .when("/about", {templateUrl: "partials/about.html", controller: "aboutController"})
    .when("/faq", {templateUrl: "partials/faq.html", controller: "faqController"})
    .when("/pricing", {templateUrl: "partials/pricing.html", controller: "pricingController"})
    .when("/services", {templateUrl: "partials/services.html", controller: "servicesController"})
    .when("/contact", {templateUrl: "partials/contact.html", controller: "contactController"})
    // Blog
    .when("/blog", {templateUrl: "partials/blog.html", controller: "BlogCtrl"})
    .when("/blog/post", {templateUrl: "partials/blog_item.html", controller: "BlogCtrl"})
    // else 404
    .otherwise("/404", {templateUrl: "partials/404.html", controller: "PageCtrl"});
}]);

/**
 * Controls all other Pages

app.controller('PageCtrl', function ( ) {
  console.log("Page Controller reporting for duty.");
 */
animateApp.controller('mainController', function($scope) {
    $scope.pageClass = 'page-about';
});
animateApp.controller('aboutController', function($scope) {
    $scope.pageClass = 'page-about';
});
animateApp.controller('faqController', function($scope) {
    $scope.pageClass = 'page-about';
});
animateApp.controller('pricingController', function($scope) {
    $scope.pageClass = 'page-about';
});
animateApp.controller('servicesController', function($scope) {
    $scope.pageClass = 'page-about';
});
animateApp.controller('contactController', function($scope) {
    $scope.pageClass = 'page-about';
 


/**
 * Controls the Blog
 */
app.controller('BlogCtrl', function (/* $scope, $location, $http */) {
  console.log("Blog Controller reporting for duty.");
});



  // Activates the Carousel
  $('.carousel').carousel({
    interval: 5000
  });

  // Activates Tooltips for Social Links
  $('.tooltip-social').tooltip({
    selector: "a[data-toggle=tooltip]"
  })
});