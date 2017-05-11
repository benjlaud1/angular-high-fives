myApp.service( 'RandomNumber', function() {
  this.getRandomNumber = function () {
    return Math.floor( Math.random() * 10 );
  }; // end getRandomNumber
}); // end RandomNumber
