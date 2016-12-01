var Player = require('./Player');

  function Board(){

    this.playerX = new Player();
    this.playerO = new Player();
    this.currentTurn = this.playerX;

    this.isFinished = false;

    this.squares = [
      ['empty', 'empty', 'empty'],
      ['empty', 'empty', 'empty'],
      ['empty', 'empty', 'empty']
    ];
  }

  Board.prototype.play = function(move, row, column) {
    this.passChecks(move, row, column);
    this.squares[row - 1][column - 1] = move;
    this.saveToPlayer();
    this.checkWin();
    this.switchTurns();
  };

  Board.prototype.passChecks = function(move, row, column){
    this.checkMove(move);
    this.checkTurn(move);
    this.checkEmpty(row, column);
  };

  Board.prototype.checkMove = function(move){
    if (move != 'X' && move != 'O') {
      throw new Error('Must be X or O');
    }
  };

  Board.prototype.checkTurn = function(move){
    if (move === 'X' && !this.isX()) {
      throw new Error("It's O's turn!");
    } else if (move === 'O' && this.isX()) {
      throw new Error ("It's X's turn!");
    }
  };

  Board.prototype.checkEmpty = function(row, column){
    if (this.squares[row - 1][column - 1] != 'empty') {
      throw new Error('This square has already been played!');
    }
  };

  Board.prototype.saveToPlayer = function(row, column){
    if (this.isX()){
      this.playerX.save(row - 1 , column - 1);
    } else {
      this.playerO.save(row - 1, column - 1);
    }
  };

  Board.prototype.switchTurns = function(){
    this.currentTurn = this.isX() ? this.playerO : this.playerX;
  };

  Board.prototype.isX = function(){
    return this.currentTurn === this.playerX;
  };

  Board.prototype.checkWin = function(){
    if (this.isX()) {
      this.checkWinner(this.playerX);
    } else {
      this.checkWinner(this.playerO);
    }
  };

  Board.prototype.checkWinner = function(player){
    var that = this;
    if (player.isWinner()) {
      that.announceWin(this.player);
    }
  };

  Board.prototype.announceWin = function(winner){
    return winner + ' wins!';
  };


module.exports = Board;
