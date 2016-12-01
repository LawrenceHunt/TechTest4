describe("Player", function(){
  var Player = require('../lib/Player.js');
  var player;

  beforeEach(function(){
    player = new Player("test");
  });

  it('is initialised with a name', function(){
    expect(player.name).toEqual("test");
  });

  it("can save a row and column to its array", function(){
    player.save(1, 1);
    expect(player.lastThree).toEqual([[1, 1]]);
  });

  it("can add a win", function(){
    player.addWin();
    expect(player.wins).toEqual(1);
  });

  it("can add a loss", function(){
    player.addLoss();
    expect(player.losses).toEqual(1);
  });

  describe("#save", function(){
    it("can save a play to an array", function(){
      player.save(0, 1);
      expect(player.lastThree).toEqual([(0, 1)]);
    });
    it("can't have more than 3 plays in an array", function(){
      player.lastThree = [(0, 0), (0, 1), (1, 0)];
      player.save(1, 1);
      expect(player.lastThree).toEqual([(1, 1), (0, 1), (1, 0)]);
    });
  });

  describe ("#checkIfWinner", function(){

    it("can check for a win", function() {
      player.save(0, 1);
      player.save(0, 2);
      player.save(0, 3);
      expect(player.isWinner).toEqual(true);
    });
  });

});
