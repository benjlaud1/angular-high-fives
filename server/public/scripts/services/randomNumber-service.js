myApp.service( 'RandomNumber', function() {
  this.getRandomNumber = function ( min, max ) {
    console.log( 'min:',min,'max:', max );
    return Math.floor( Math.random() * (1 + max - min ) + min );
  }; // end getRandomNumber
}); // end RandomNumber
