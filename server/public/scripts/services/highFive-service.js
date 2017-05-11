myApp.service( 'HighFives', function ( RandomNumber ) {
  var counter = 0;
  this.garyHighFiveRank = RandomNumber.getRandomNumber();

  this.highFiveCount = function () {
    return counter;
  }; // end highFiveCount

  this.giveHighFive = function () {
    var thisHighFiveRank = RandomNumber.getRandomNumber();
    console.log( 'this high five:', thisHighFiveRank );
    if ( thisHighFiveRank >= this.garyHighFiveRank ) {
      counter++;
      return counter;
    } else {
      return counter;
    } // end if else
  }; // end giveHighFive
}); // end HighFives
