myApp.service( 'HighFives', function ( RandomNumber ) {
  var garyCounter = 0;
  var larryCounter = 0;
  var barryCounter = 0;
  var counter = 0;
  
  this.HighFiveRank = RandomNumber.getRandomNumber();

  this.highFiveCount = function () {
    return counter;
  }; // end highFiveCount

  this.giveHighFive = function () {
    var thisHighFiveRank = RandomNumber.getRandomNumber();
    console.log( 'this high five:', thisHighFiveRank );
    if ( thisHighFiveRank >= this.HighFiveRank ) {
      counter++;
      return counter;
    } else {
      return counter;
    } // end if else
  }; // end giveHighFive
}); // end HighFives
