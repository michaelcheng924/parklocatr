$(function() {
  function initialize() {
    var myLatLng = new google.maps.LatLng(29.7632836, -95.3632715);

    var mapOptions = {
      center: myLatLng,
      zoom: 8
    };
    var map = new google.maps.Map(document.getElementById('map-canvas'),
        mapOptions);

    var houstonParksGP = houstonParksGooglePlaces.results;

    for (var key in houstonParksGP) {
      var parkLocation = houstonParksGP[key].geometry.location
      console.log(houstonParksGP[key].geometry.location)
      var marker = new google.maps.Marker({
        position: new google.maps.LatLng(parkLocation.lat, parkLocation.lng),
        map: map,
      });
    }


    // _.each(houstonParks.features, function(park) {
    //   new google.maps.Marker({
    //     position: new google.maps.LatLng(park.attributes.X_Coordinate, park.attributes.Y_Coordinate),
    //     map: map,
    //     title: 'test'
    //   });
    //   console.log(XtoLon(park.attributes.X_Coordinate) + ', ' + YtoLat(park.attributes.Y_Coordinate));
    // });
  }
  google.maps.event.addDomListener(window, 'load', initialize);

  // var map;
  // function initialize() {
  //   var mapOptions = {
  //       center: new google.maps.LatLng(10,0),
  //       zoom: 2,
  //       mapTypeId: google.maps.MapTypeId.ROADMAP
  //       };
  //   map = new google.maps.Map(document.getElementById("map_canvas"),mapOptions);

  //   var overlay = new google.maps.OverlayView();
  //   overlay.draw = function() {};
  //   overlay.setMap(map);

  //   google.maps.event.addListenerOnce(map,'idle', function() {
  //     var pixelLatLng = overlay.getProjection().fromDivPixelToLatLng(new google.maps.Point(200,200));

  //     var marker = new google.maps.Marker({
  //           position: pixelLatLng,
  //           map: map,
  //         });
  //   });
  // };//end initialize

  // google.maps.event.addDomListener(window, 'load', initialize);
});