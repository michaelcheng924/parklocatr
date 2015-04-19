var ParkView = Backbone.View.extend({

  template: _.template('<h3><%- name %></h3> \
      <div>Location: <%- vicinity %></div> \
      <div>Rating: <%- rating %></div>'),

  initialize: function() {
  },

  events: {
    'click': function() {
      console.log(map);
      var service = new google.maps.places.PlacesService(map);
      // infoWindow.close();
      service.getDetails(this.model.attributes, function(result, status) {
        if (status != google.maps.places.PlacesServiceStatus.OK) {
          alert(status);
          return;
        }

        var parkDetails = new ParkDetails(result);
        var parkDetailsView = new ParkDetailsView({model: parkDetails});

        // createMarker(result);

        infoWindow.close();
        // infoWindow.setPosition(result.geometry.location);

        if (result.photos) {
          var photos = result.photos[0].getUrl({'maxWidth': 35, 'maxHeight': 35});
        } else {
          var photos = 'images/park-icon.png';
        }

        var marker = new google.maps.Marker({
          map: map,
          animation: google.maps.Animation.DROP,
          icon: photos,
          position: result.geometry.location,
        });
        
        infoWindow.setContent('<div class="info-window">' + result.name + '</div>');
        infoWindow.open(map, marker);
      });

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

          // infoWindow.close();
            
          infoWindow.setContent('<div class="info-window">' + result.name + '</div>');
          infoWindow.open(map, marker);
        
        });
      }
    }
  },

  render: function() {
    return this.$el.html(this.template(this.model.attributes));
  }
});