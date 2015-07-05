var Game = function() {
  this.player1position = 0;
  this.player2position = 0;
};

Game.MAX_POSITION = 15;
Game.PLAYERS = 3;

Game.prototype.init = function() {
  var game = this;
  View.prepareBoard();

  $(window).on('keyup', function(event) {
    // console.log(event.keyCode);
    var block = $('div.position').eq(game.player1position);
    console.log(game.player1position);
    // console.log(block);
    console.log('count is ' + $('div.position').length);
    game.player1position += 1;
    block.addClass('active');
  });
};

var View = {
  prepareBoard: function() {
    for (var i = 0; i < Game.PLAYERS; i += 1) {
      var newLane = $('div.lane.template').clone().removeClass('template');
      $('div.game-board').append(newLane);
    };
    $('div.game-board .lane').each(function(_, lane) {
      for (var j = 0; j < Game.MAX_POSITION; j += 1) {
        console.log(j);
        var spot = $('div.position.template').clone().removeClass('template');
        $(lane).append(spot);
      };
    });
  }
}
