var SoundBar = function() {
  this.height = Math.floor(5 + (Math.random() * 5));
};

var Track = function(trackLength) {
  this.soundBars = [];
  for (i = 0; i < trackLength; i += 1) {
    this.soundBars.push(new SoundBar());
  };
};

var vision = new Track(152);

$(document).ready(function() {
  for (i = 0; i < vision.soundBars.length; i += 1) {
    var bar = $('<div class="bar" id="' + i + '"></div>');
    bar.css('height', (vision.soundBars[i].height * 9));
    $('div.track').append(bar);
  };

  $('div.track').on('mouseenter', 'div.bar', function() {
    $('div.bar')each(function(idx, bar) {
      if (idx <= ($(this).attr('id')) ) {
        bar.css('background-color', 'red');
      };
    };3
  });
  $('div.track').on('mouseleave', 'div.bar', function() {
    $(this).css('background-color', 'orange');
  });
});






