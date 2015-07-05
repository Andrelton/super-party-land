$(document).ready(function() {

  partyButton.clickListen();

  var cray = $('div.new-bear form').on('submit', function(event) {
    event.preventDefault();

    var method = $(this).attr('method');
    var action = $(this).attr('action');
    var data = $(this).serialize();

    var request = $.ajax({
      type: method,
      url: action,
      data: data
    });

    request.done(function(response) {
      console.log("Response is "+response);
      $('#wrapper').append(response);
    });

  });

});
