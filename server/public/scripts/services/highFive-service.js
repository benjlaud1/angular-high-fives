myApp.service( 'HighFives', function ( RandomNumber ) {
  var garyRank;
  var larryRank;
  var barryRank;
  var counter = 0;

  this.HighFiveRank = function ( person ) {
    var rank;
    switch ( person ) {
      case 'gary':
        rank = RandomNumber.getRandomNumber(0,6);
        garyRank = rank;
        break;
      case 'larry':
        rank = RandomNumber.getRandomNumber(4,10);
        larryRank = rank;
        break;
      case 'barry':
        rank = RandomNumber.getRandomNumber(6,10);
        barryRank = rank;
        break;
      default:
        console.log(' unknown ');
        break;
    }
    return rank;
  };

  this.highFiveCount = function (){
    return counter;
  };

  this.giveHighFive = function ( person ) {
    var yourHighFiveRank = RandomNumber.getRandomNumber( 0, 10 );
    console.log( 'your high five rank:', yourHighFiveRank );
    // highFiveCounter( yourHighFiveRank );
    switch ( person ) {
      case 'gary':
        highFiveCounter( yourHighFiveRank, garyRank );
        break;
      case 'larry':
        highFiveCounter( yourHighFiveRank, larryRank );
        break;
      case 'barry':
        highFiveCounter( yourHighFiveRank, barryRank );
        break;
      default:
    } // end person switch

    function highFiveCounter ( yourRank, personRank ) {
      if ( yourRank >= personRank ) {
        console.log('success!');
        counter++;
        console.log(counter);
        return counter;
      } else {
        console.log('Failed!');
        console.log(counter);
        return counter;
      } // end if else
    } // end highFiveCounter
  }; // end giveHighFive
}); // end HighFives
