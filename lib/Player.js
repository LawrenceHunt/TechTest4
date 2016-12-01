var _ = require('underscore');

function Player(name){
  this.name = name;
  this.wins = 0;
  this.losses = 0;

  this.moves = [];
}

Player.prototype.save = function(row, column){
  this.moves.unshift((row, column));
};

Player.prototype.isWinner = function(){
// Insert logic for comparing this.moves with winConditions array
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
