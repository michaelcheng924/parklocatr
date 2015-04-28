var DashboardView = Backbone.View.extend({

  el: $('.dashboard-view'),
  
  initialize: function() {

    this.render();

    // Re-renders dashboard when user logs in
    // Triggered from loginView, signupView, and navbarSettings model
    this.model.on('loggedIn', this.render, this);

    // Re-renders dashboard when user adds a park to the dashboard
    // Triggered from App.js and Parks.js
    this.model.on('change', this.render, this);
  },

  render: function() {
    if (!localStorage.getItem('com.parklocatr')) {
      $.ajax({
        url: 'scripts/templates/PreDashboardViewTemplate.js',
        dataType: 'html',
        success: function(data) {
          var template = _.template(data, {});
          this.$el.html(template());
        }.bind(this)
      });
    } else {
      $.ajax({
        url: 'scripts/templates/DashboardViewTemplate.js',
        dataType: 'html',
        success: function(data) {
          var template = _.template(data, {});
          this.$el.html(template(this.model.attributes));
        }.bind(this)
      }).then(function() {
        $.ajax({
          url: '/parks-to-visit',
          headers: {
            'x-access-token': localStorage.getItem('com.parklocatr')
          },
          success: function(parksToVisit) {

            var display = $('.parks-to-visit-display');
            display.html('');
            _.each(parksToVisit, function(park) {
              display.append('<h3>' + park.name + '</h3><div>' + park.address + '</div>');
            });
          }.bind(this)
        }).then(function() {
          $.ajax({
            url: '/visited-parks',
            headers: {
              'x-access-token': localStorage.getItem('com.parklocatr')
            },
            success: function(visitedParks) {
              var display = $('.visited-parks-display');
              display.html('');
              _.each(visitedParks, function(park) {
                display.append('<h3>' + park.name + '</h3><div>' + park.address + '</div>');
              });
            }.bind(this)
          });
        });
      });
    }
  },

  getDashboardParks: function(url) {

  },

  displayDashboardParks: function(data, display) {

  }
});