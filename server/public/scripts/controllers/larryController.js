myApp.controller( 'larryController', [ 'HighFives', function( HighFives ) {
  console.log( 'in larryController' );
  var self = this;

  self.person = {
    name: 'Larry',
    description: 'Medium and scruffy and always steals your garbage.',
    HighFiveRank: HighFives.HighFiveRank( 'larry' ),
    imgSource: 'https://img.memesuper.com/02d144e3a34ef659b4f4729713725ab3_meme-high-five-memesuper-funny-high-five-meme_556-413.jpeg'
  }; // end self.person object

  self.highFiveCount = HighFives.highFiveCount();

  self.giveHighFive = function () {
    HighFives.giveHighFive( 'larry' );
    self.highFiveCount = HighFives.highFiveCount();
  }; // end self. giveHighFive
}]);
