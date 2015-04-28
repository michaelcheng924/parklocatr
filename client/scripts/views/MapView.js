var MapView = Backbone.View.extend({

  el: $('#map-canvas'),

  initialize: function() {
    // Initialize Google Maps
    google.maps.event.addDomListener(window, 'load', this.render.bind(this));
  },

  render: function() {
    var self = this;

    var service;

    // Centers Google Map on the United States
    var mapOptions = {
      center: new google.maps.LatLng(37.6, -95.665),
      zoom: 4
    };

    // Selects the element to inject Google Maps into
    map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);

    // Initialize infoWindow (individual parks)
    // Global so other views can access
    infoWindow = new google.maps.InfoWindow();

    // Initialize Google Maps service
    service = new google.maps.places.PlacesService(map);

    // Selects the autocomplete input box
    var input = (document.getElementById('pac-input'));

    // Pushes autocomplete input box into controls
    map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

    // Initialize autocomplete
    var autocomplete = new google.maps.places.Autocomplete(input);
    autocomplete.bindTo('bounds', map);

    // Initialize infowindow (input location)
    infowindow = new google.maps.InfoWindow();

    // Creates new marker
    var marker = new google.maps.Marker({
      map: map,
      anchorPoint: new google.maps.Point(0, -29)
    });

    // Listens for an autocomplete input
    google.maps.event.addListener(autocomplete, 'place_changed', function() {

      // Close the infowindow and marker that are currently open
      infowindow.close();
      marker.setVisible(false);
      var place = autocomplete.getPlace();

      // Set the heading of parksView to reference input location
      $('.parks-view-heading').html('<h2>Parks around ' + place.formatted_address + '</h2>');
      if (!place.geometry) {
        return;
      }

      // If the place has a geometry, then present it on a map.
      map.setCenter(place.geometry.location);
      map.setZoom(13);

      // Settings for input location marker
      marker.setIcon({
        url: place.icon,
        size: new google.maps.Size(71, 71),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(17, 34),
        scaledSize: new google.maps.Size(35, 35)
      });
      marker.setPosition(place.geometry.location);
      marker.setVisible(true);

      // Create address from components
      var address = '';
      if (place.address_components) {
        address = [
          (place.address_components[0] && place.address_components[0].short_name || ''),
          (place.address_components[1] && place.address_components[1].short_name || ''),
          (place.address_components[2] && place.address_components[2].short_name || '')
        ].join(' ');
      }

      // Set input location content
      infowindow.setContent('<div><strong>' + place.name + '</strong><br>' + address);
      infowindow.open(map, marker);

      // Perform nearby search for the input location bounds
      google.maps.event.addListenerOnce(map, 'bounds_changed', performSearch);
    });

    // Perform nearby search for the input location bounds
    function performSearch() {
      var request = {
        bounds: map.getBounds(),
        types: ['park']
      };
      service.nearbySearch(request, callback);
    }

    // Response to nearby search
    function callback(results, status) {
      // If there is an error...
      if (status != google.maps.places.PlacesServiceStatus.OK) {
        alert(status);
        return;
      }

      // Create new collection and view for nearby search results
      var parks = new Parks();
      for (var i = 0, result; result = results[i]; i++) {

        // Call createMarker, which creates listeners for each park
        createMarker(result);
        var park = new Park(result);
        self.model.get('parks').add(park);
      }

      // Creates and renders parksView
      var parksView = new ParksView({collection: self.model.get('parks')});
    }

    // Creates markers for each park and adds listeners
    function createMarker(place) {

      // If place has photos, set photo variable for marker
      if (place.photos) {
        var photos = place.photos[0].getUrl({'maxWidth': 35, 'maxHeight': 35});
      } else {
        var photos = 'images/park-icon.png';
      }

      // Create marker for park (animation, icon, position)
      var marker = new google.maps.Marker({
        map: map,
        animation: google.maps.Animation.DROP,
        icon: photos,
        position: place.geometry.location,
      });

      // Listener for when icon/marker for a park is clicked
      google.maps.event.addListener(marker, 'click', function() {

        // When icon is clicked, it will bounce twice
        toggleBounce();
        setTimeout(function() {
          marker.setAnimation(null);
        }, 1400);

        // Get details for clicked park
        service.getDetails(place, function(result, status) {
          // If error
          if (status != google.maps.places.PlacesServiceStatus.OK) {
            alert(status);
            return;
          }

          // Create parkDetailsView
          var parkDetails = new ParkDetails(result);
          var parkDetailsView = new ParkDetailsView({model: parkDetails});
          
          // Set content for infoWindow for individual parks when clicked
          infoWindow.setContent('<div class="info-window">' + result.name + '</div>');
          infoWindow.open(map, marker);
        });

        // After icon is clicked, scroll to parkDetailsView
        setTimeout(function() {
          $('body').animate({scrollTop: $('.right-column').offset().top}, 500);
        }, 1500);
      });

      // Function to make icon bounce
      function toggleBounce() {
        if (marker.getAnimation() != null) {
          marker.setAnimation(null);
        } else {
          marker.setAnimation(google.maps.Animation.BOUNCE);
        }
      }
    }
  }
});