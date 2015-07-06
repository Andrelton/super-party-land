// PUT THIS SCRIPT AT THE BOTTOM OF THE BODY (IN LAYOUT):
// <script src="http://maps.googleapis.com/maps/api/js"></script>

// PUT THIS WHERE YOU WANT YOUR MAP:
// <div class="googleMap valencia-sp"></div>
// CSS => div.googleMap { width: 500px; height: 400px; }


// ORIGINAL TEMPLATE FOR THE CODE BELOW:
// http://www.w3schools.com/googleapi/google_maps_basic.asp

var _gm = google.maps;
     // WAS: document.getElementById("googleMap");
var mapDiv = document.querySelector('div.googleMap.valencia-sp');
var latitude = 40;
var longitude = 0;
var point = [40, 0];

function makeMap() {
  var location = new _gm.LatLng(latitude, longitude);
  // var thing = new Object();
  // thing.constructor = _gm.LatLng;
  // thing.__proto__ = _gm.LatLng.prototype;
  // var location = _gm.LatLng.apply(thing, point);

  var mapOptions = {
    center: location,
    zoom: 6,
    mapTypeId: _gm.MapTypeId.ROADMAP
  };

  var map = new _gm.Map(mapDiv, mapOptions);

  var marker = new google.maps.Marker({
    position: location,
    animation: _gm.Animation.DROP
  });

  marker.setMap(map);
}

// WAS: _gm.event.addDomListener(window, 'load', makeMap);
$(function() {
  makeMap();
});



