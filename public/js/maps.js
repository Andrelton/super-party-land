var _gm = google.maps;
var mapDiv = document.querySelector('div.googleMap.london-uk');
var latitude = 40;
var longitude = 0;

function makeMap() {
  var location = new _gm.LatLng(latitude, longitude);

  var mapOptions = {
    center: location,
    zoom: 6,
    mapTypeId: _gm.MapTypeId.ROADMAP
  };

  var map = new _gm.Map(mapDiv, mapOptions);
  // var marker = new _gm.Marker()
  var marker = new google.maps.Marker({
    position: location,
    animation: _gm.Animation.DROP
  });

  marker.setMap(map);
}

// _gm.event.addDomListener(window, 'load', makeMap);
$(function() {
  makeMap();
});
