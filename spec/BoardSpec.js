describe("Board", function(){
  var Board = require('../lib/Board.js');
  var Player = require('../lib/Player.js');
  var board;

  beforeEach(function() {
    board = new Board();
  });

  it('can play an X', function(){
    board.play('X', 1, 1);
    expect(board.squares).toEqual( [
      ['X', 'empty', 'empty'],
      ['empty', 'empty', 'empty'],
      ['empty', 'empty', 'empty']
    ]);
  });

  it('can play an O', function(){
    board.play('X', 1, 1);
    board.play('O', 1, 2);
    expect(board.squares).toEqual( [
      ['X', 'O', 'empty'],
      ['empty', 'empty', 'empty'],
      ['empty', 'empty', 'empty']
    ]);
  });

  it("Throws error if space already taken", function(){
    board.play('X', 1, 1);
    expect(function(){
      board.play('O', 1, 1);
    }).toThrowError('This square has already been played!');
  });

  it("starts on playerX turn", function(){
    expect(board.currentTurn).toEqual(board.playerX);
  });

  it("can switch turns", function(){
    board.play('X', 1, 1);
    expect(board.currentTurn).toEqual(board.playerO);
  });

  it("can't playX on O's turn", function(){
    board.play('X', 1, 1);
    expect(function(){
      board.play('X', 1, 2);
    }).toThrowError("It's O's turn!");
  });

  it("wins on a top row of three", function() {
    board.play('X', 1, 1);
    board.play('O', 2, 1);
    board.play('X', 1, 2);
    board.play('O', 2, 2);
    board.play('X', 1, 3);
    expect(board.isFinished).toEqual(true);
  });

});
