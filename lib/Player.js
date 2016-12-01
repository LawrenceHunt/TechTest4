var _ = require('underscore');

require.config({
  paths: {
    "jquery": "https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min",
    "underscore": "lib/underscore",
  }
});

function Player(name){
  this.name = name;
  this.wins = 0;
  this.losses = 0;

  this.lastThree = [];
}

Player.prototype.save = function(row, column){
  this.lastThree.unshift((row, column));
  if (this.lastThree.length >= 3) {
    this.lastThree.length = 3;
  }
};

Player.prototype.isWinner = function(){
  var that = this;
  for (var i = 0; i <= winConditions.length; i++){
    if (_.difference(i, that.lastThree) === 0) {
      return true;
    }
  }
};

Player.prototype.addWin = function(){
  this.wins += 1;
};

Player.prototype.addLoss = function(){
  this.losses += 1;
};



var winConditions = [
  // Horizontals
  [(0, 1), (0, 2), (0, 3)],
  [(1, 1), (1, 2), (1, 3)],
  [(2, 1), (2, 2), (2, 3)],
  // Verticals
  [(0, 0), (1, 0), (2, 0)],
  [(0, 1), (1, 1), (2, 1)],
  [(0, 2), (1, 2), (2, 2)],
  // Diagonals
  [(0, 0), (1, 1), (2, 2)],
  [(0, 2), (1, 1), (2, 0)]
];

module.exports = Player;
