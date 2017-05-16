myApp.controller( 'barryController', [ 'HighFives', function( HighFives ) {
  console.log( 'in barryController' );
  var self = this;

  self.person = {
    name: 'Barry',
    description: 'Big and grumpy but will high five for food.',
    HighFiveRank: HighFives.HighFiveRank( 'barry' ),
    imgSource: 'https://s-media-cache-ak0.pinimg.com/originals/55/45/5c/55455c578c2edf184d4b615c167ec507.jpg'
  };
  self.highFiveCount = HighFives.highFiveCount();
  self.giveHighFive = function () {
    HighFives.giveHighFive( 'barry' );
    self.highFiveCount = HighFives.highFiveCount();
  };
}]);
