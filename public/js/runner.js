$(document).ready(function(){

  var myTower = new Tower(2);

  for(i = 0; i < myTower.height; i += 1) {
    var newBrick = $('div.brick.template').clone();
    newBrick.removeClass('template');
    $('#wrapper').append(newBrick);
  };

});
