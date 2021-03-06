var myApp = angular.module( 'myApp', ['ngRoute'] );

myApp.config( [ '$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider.when("/", {
        template : "<h1>Select someone to high five!</h1>",
        controller: 'defaultController',
        controllerAs: 'dc'
    })
    .when('/gary', {
      templateUrl : 'views/person.html',
      controller: 'garyController',
      controllerAs: 'vm'
    })
    .when('/larry', {
      templateUrl : 'views/person.html',
      controller: 'larryController',
      controllerAs: 'vm'
    })
    .when('/barry', {
      templateUrl : 'views/person.html',
      controller: 'barryController',
      controllerAs: 'vm'
    })
    .otherwise( '/' );

    $locationProvider.html5Mode(true);
}]); // end myApp.config

myApp.controller( 'defaultController', function ( $route ) {
  console.log( 'in default controller' );
}); // end defaultController



myApp.controller("larryCntrl", function( $route, HighFives ) {

  var vm = this;

  vm.person = {
    name: 'Larry',
    description: 'Medium and scruffy and always steals your garbage.',
    highFiveRank: HighFives.HighFiveRank,
    imgSource: 'https://img.memesuper.com/02d144e3a34ef659b4f4729713725ab3_meme-high-five-memesuper-funny-high-five-meme_556-413.jpeg'
  };

});

myApp.controller("barryCntrl", function( $route, HighFives ) {

  var vm = this;

  vm.person = {
    name: 'Barry',
    description: 'Big and grumpy but will high five for food.',
    highFiveRank: HighFives.HighFiveRank,
    imgSource: 'https://s-media-cache-ak0.pinimg.com/originals/55/45/5c/55455c578c2edf184d4b615c167ec507.jpg'
  };

});

myApp.controller( 'highFiveController', function ( $http, HighFives ) {

  var vm = this;

  // vm.highFiveCount = HighFives.highFiveCount();
  // vm.HighFiveRank = HighFives.HighFiveRank;
  //
  // vm.giveHighFive = function () {
  //   vm.highFiveCount = HighFives.giveHighFive();
  // }; // end giveHighFive


}); // end highFiveController
