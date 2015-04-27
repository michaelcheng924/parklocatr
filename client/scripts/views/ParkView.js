var ParkView = Backbone.View.extend({

  template: _.template("\
    <div class='parks-view-park'> \
      <h3><%- name %></h3> \
      <div>Location: <%- vicinity %></div> \
      <div>Rating: <%- rating %></div><br> \
      <div><a class='park-to-visit'>Add to <em>Parks to Visit</em>!</a> | <a class='visited-park'>Add to <em>Parks I've Visited</em>!</a></div> \
    </div>"),

  initialize: function() {
  },

  events: {
    'click': 'getParkDetails',
    'click .park-to-visit': 'saveParkToVisit',
    'click .visited-park': 'saveVisitedPark'
  },

  render: function() {
    return this.$el.html(this.template(this.model.attributes));
  },

  getParkDetails: function() {
    var service = new google.maps.places.PlacesService(map);

    service.getDetails(this.model.attributes, function(result, status) {
      if (status != google.maps.places.PlacesServiceStatus.OK) {
        alert(status);
        return;
      }

      var parkDetails = new ParkDetails(result);
      var parkDetailsView = new ParkDetailsView({model: parkDetails});

      infoWindow.close();

      if (result.photos) {
        var photos = result.photos[0].getUrl({'maxWidth': 35, 'maxHeight': 35});
      } else {
        var photos = 'images/park-icon.png';
      }

      var marker = new google.maps.Marker({
        map: map,
        animation: google.maps.Animation.BOUNCE,
        icon: photos,
        position: result.geometry.location,
      });

      window.scrollTo(0,0);

      setTimeout(function() {
        marker.setAnimation(null);
      }, 1400);

      infoWindow.setContent('<div class="info-window">' + result.name + '</div>');
      infoWindow.open(map, marker);

      setTimeout(function() {
        $('body').animate({scrollTop: $('.right-column').offset().top}, 500);
      }, 1500);
    });
  },

  saveParkToVisit: function() {
    var router = new Router();

    if (!localStorage.getItem('com.parklocatr')) {
      router.navigate('/dashboard', {trigger: true});
    } else {

      $.ajax({
        type: 'POST',
        url: '/parks-to-visit',
        data: {
          parkName: this.model.get('name'),
          address: this.model.get('vicinity')
        },
        headers: {
          'x-access-token': localStorage.getItem('com.parklocatr')
        },
        success: function() {
          $('.park-to-visit').text('Added to <em>Parks to Visit</em>!');
        }
      });
    }
  },

  saveVisitedPark: function() {

  }
});