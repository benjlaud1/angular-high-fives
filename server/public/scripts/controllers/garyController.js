myApp.controller( 'garyController', [ 'HighFives', function( HighFives ) {
  console.log( 'in garyController' );
  var self = this;

  self.person = {
    name: 'Gary',
    description: 'Small and fluffy but always ready for a high five!',
    HighFiveRank: HighFives.HighFiveRank( 'gary' ),
    imgSource: 'https://img.memesuper.com/44488487178b0db4d03aeb985e1a244d_meme-high-five-memesuper-internet-high-five-meme_443-450.jpeg'
  };
  self.highFiveCount = HighFives.highFiveCount();
  self.giveHighFive = function () {
    HighFives.giveHighFive( 'gary' );
    self.highFiveCount = HighFives.highFiveCount();
  };

}]);
