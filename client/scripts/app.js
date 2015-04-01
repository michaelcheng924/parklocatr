$(function() {
  function initialize() {
    var mapOptions = {
      center: { lat: 29.7632836, lng: -95.3632715},
      zoom: 8
    };
    var map = new google.maps.Map(document.getElementById('map-canvas'),
        mapOptions);

    _.each(houstonParks.features, function(park) {
      
    });
  }
  google.maps.event.addDomListener(window, 'load', initialize);
});