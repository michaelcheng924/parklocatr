var map;
var infoWindow;
var service;
// ================= AUTO-COMPLETE ================= //
function initialize() {
  var mapOptions = {
    center: new google.maps.LatLng(37.6, -95.665),
    zoom: 4
  };
  map = new google.maps.Map(document.getElementById('map-canvas'),
    mapOptions);

  infoWindow = new google.maps.InfoWindow();
  service = new google.maps.places.PlacesService(map);

  var input = /** @type {HTMLInputElement} */(
      document.getElementById('pac-input'));

  map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

  var autocomplete = new google.maps.places.Autocomplete(input);
  autocomplete.bindTo('bounds', map);

  var infowindow = new google.maps.InfoWindow();
  var marker = new google.maps.Marker({
    map: map,
    anchorPoint: new google.maps.Point(0, -29)
  });

  google.maps.event.addListener(autocomplete, 'place_changed', function() {
    infowindow.close();
    marker.setVisible(false);
    var place = autocomplete.getPlace();
    if (!place.geometry) {
      return;
    }

    // If the place has a geometry, then present it on a map.
    map.setCenter(place.geometry.location);
    map.setZoom(13);

    marker.setIcon(/** @type {google.maps.Icon} */({
      url: place.icon,
      size: new google.maps.Size(71, 71),
      origin: new google.maps.Point(0, 0),
      anchor: new google.maps.Point(17, 34),
      scaledSize: new google.maps.Size(35, 35)
    }));
    marker.setPosition(place.geometry.location);
    marker.setVisible(true);

    var address = '';
    if (place.address_components) {
      address = [
        (place.address_components[0] && place.address_components[0].short_name || ''),
        (place.address_components[1] && place.address_components[1].short_name || ''),
        (place.address_components[2] && place.address_components[2].short_name || '')
      ].join(' ');
    }

    infowindow.setContent('<div><strong>' + place.name + '</strong><br>' + address);
    infowindow.open(map, marker);

    console.log(place.geometry.location);

    google.maps.event.addListenerOnce(map, 'bounds_changed', performSearch);
  });
}



function performSearch() {
  var request = {
    bounds: map.getBounds(),
    types: ['park']
  };
  service.nearbySearch(request, callback);
}

function callback(results, status) {
  if (status != google.maps.places.PlacesServiceStatus.OK) {
    alert(status);
    return;
  }
  var parks = new Parks();
  for (var i = 0, result; result = results[i]; i++) {
    createMarker(result);
    var park = new Park(result);
    parks.add(park);
    console.log(result);
  }
  var parksView = new ParksView({collection: parks});
}

function createMarker(place) {

  if (place.photos) {
    var photos = place.photos[0].getUrl({'maxWidth': 35, 'maxHeight': 35});
  } else {
    var photos = 'images/park-icon.png';
  }

  var marker = new google.maps.Marker({
    map: map,
    animation: google.maps.Animation.DROP,
    icon: photos,
    position: place.geometry.location,
  });

  google.maps.event.addListener(marker, 'click', function() {
    toggleBounce();
    setTimeout(function() {
      marker.setAnimation(null);
    }, 1400);

    service.getDetails(place, function(result, status) {
      if (status != google.maps.places.PlacesServiceStatus.OK) {
        alert(status);
        return;
      }
      
      infoWindow.setContent('<div class="info-window">' + result.name + '</div>');
      infoWindow.open(map, marker);
      $('.park-details-view').html('');
      for (var key in result) {
        $('.park-details-view').append('<div>' + key + ': ' + result[key] + '</div>');
      }
    });
  });

  function toggleBounce() {

    if (marker.getAnimation() != null) {
      marker.setAnimation(null);
    } else {
      marker.setAnimation(google.maps.Animation.BOUNCE);
    }
  }
}

google.maps.event.addDomListener(window, 'load', initialize);