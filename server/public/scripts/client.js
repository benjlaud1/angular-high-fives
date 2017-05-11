var myApp = angular.module( 'myApp', ['ngRoute'] );
myApp.controller( 'highFiveController', function ( $http, HighFives ) {

  var vm = this;

  vm.highFiveCount = HighFives.highFiveCount();
  vm.garyHighFiveRank = HighFives.garyHighFiveRank;

  vm.giveHighFive = function () {
    vm.highFiveCount = HighFives.giveHighFive();
  }; // end giveHighFive

  // myApp.config(function($routeProvider) {
  //     $routeProvider
  //     .when("/", {
  //         templateUrl : "main.htm"
  //     })
  //     .when("/red", {
  //         templateUrl : "red.htm"
  //     })
  //     .when("/green", {
  //         templateUrl : "green.htm"
  //     })
  //     .when("/blue", {
  //         templateUrl : "blue.htm"
  //     });
  // });
}); // end highFiveController
