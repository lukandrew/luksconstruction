function init() {
  var mapOptions = {                                 // Set up the map options
    center: new google.maps.LatLng(47.608013,-122.335167),
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    zoomControl : false,
    streetViewControll : false,
    mapTypeControl : false,
    panControl : false,
    zoom: 13
  };
  var venueMap;                                      // Map() draws a map
  venueMap = new google.maps.Map(document.getElementById('map'), mapOptions);
}

function loadScript() {
  var script = document.createElement('script');     // Create <script> element
  script.src = 'http://maps.googleapis.com/maps/api/js?key=AIzaSyDPoE5qoregZgdkbbTcwex3ARWbNST7ufw&callback=init';
  document.body.appendChild(script);                 // Add element to page
}

window.onload = loadScript;                          // on load call loadScript()
