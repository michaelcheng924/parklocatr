var ParkView = Backbone.View.extend({

  template: _.template("\
    <div class='parks-view-park'> \
      <h3><%- name %></h3> \
      <div>Location: <%- vicinity %></div> \
      <div>Rating: <%- rating %></div> \
    </div> \
    <div class='dashboard-links-container'><a class='park-to-visit'><%= toVisitText %></a> | <a class='visited-park'><%= visitedText %></a></div>"),

  initialize: function() {
    this.router = new Router();

    // Re-renders view when a park is added to dashboard
    this.model.on('change', this.render, this);
  },

  events: {
    'click .parks-view-park': 'getParkDetails',
    'click .park-to-visit': 'saveParkToVisit',
    'click .visited-park': 'saveVisitedPark'
  },

  render: function() {
    return this.$el.html(this.template(this.model.attributes));
  },

  // Calls getDetails search when a park is clicked on
  getParkDetails: function() {
    var service = new google.maps.places.PlacesService(map);

    service.getDetails(this.model.attributes, function(result, status) {
      // If there is an error...
      if (status != google.maps.places.PlacesServiceStatus.OK) {
        alert(status);
        return;
      }

      // Create new parkDetailsView
      var parkDetails = new ParkDetails(result);
      var parkDetailsView = new ParkDetailsView({model: parkDetails});

      // Close infoWindow that is currently open
      infoWindow.close();

      // If park has photos, set photo variable for icon
      if (result.photos) {
        var photos = result.photos[0].getUrl({'maxWidth': 35, 'maxHeight': 35});
      } else {
        var photos = 'images/park-icon.png';
      }

      // Set marker (animation, icon)
      var marker = new google.maps.Marker({
        map: map,
        animation: google.maps.Animation.BOUNCE,
        icon: photos,
        position: result.geometry.location,
      });

      // On click, scroll to top to see bouncing icon
      window.scrollTo(0,200);

      // Icon bounces twice
      setTimeout(function() {
        marker.setAnimation(null);
      }, 1400);

      // Set content for infoWindow
      infoWindow.setContent('<div class="info-window"><strong>' + result.name + '</strong></div>');
      infoWindow.open(map, marker);

      // Scroll to parkDetailsView after icon finishes bouncing
      setTimeout(function() {
        $('body').animate({scrollTop: $('.right-column').offset().top}, 500);
      }, 1500);
    });
  },

  // Click handler for when park is added to dashboard
  saveParkToVisit: function() {

    // If no user is signed in, redirect to dashboard, which contains features
    if (!localStorage.getItem('com.parklocatr')) {
      this.router.navigate('/dashboard', {trigger: true});
    } else {

      // Save the click on park to the server/database
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

          // Change link text to "Added!"
          this.model.set('toVisitText', 'Added!');
        }.bind(this)
      });
    }
  },

  // Does the same thing as saveParkToVisit
  saveVisitedPark: function() {

    if (!localStorage.getItem('com.parklocatr')) {
      this.router.navigate('/dashboard', {trigger: true});
    } else {

      $.ajax({
        type: 'POST',
        url: '/visited-parks',
        data: {
          parkName: this.model.get('name'),
          address: this.model.get('vicinity')
        },
        headers: {
          'x-access-token': localStorage.getItem('com.parklocatr')
        },
        success: function() {
          this.model.set('visitedText', 'Added!');
        }.bind(this)
      });
    }

  }
});