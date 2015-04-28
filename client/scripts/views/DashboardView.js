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
    var self = this;
    if (!localStorage.getItem('com.parklocatr')) {
      self.getTemplate('scripts/templates/PreDashboardViewTemplate.js', self);
    } else {
      self.getTemplate('scripts/templates/DashboardViewTemplate.js', self)
      .then(function() {
        $.ajax({
          url: '/parks-to-visit',
          headers: {
            'x-access-token': localStorage.getItem('com.parklocatr')
          },
          success: function(parksToVisit) {
            self.displayDashboardParks(parksToVisit, '.parks-to-visit-display');
            // var display = $('.parks-to-visit-display');
            // display.html('');
            // _.each(parksToVisit, function(park) {
            //   display.append('<h3>' + park.name + '</h3><div>' + park.address + '</div>');
            // });
          }
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
            }
          });
        });
      });
    }
  },

  getTemplate: function(url, self) {
    return $.ajax({
      url: url,
      dataType: 'html',
      success: function(data) {
        self.displayTemplate(data, self);
      }
    });
  },

  displayTemplate: function(data, self) {
    var template = _.template(data, {});
    self.$el.html(template(self.model.attributes));
  },

  getDashboardParks: function(url) {

  },

  displayDashboardParks: function(data, className) {
    var display = $(className);
    display.html('');
    _.each(data, function(park) {
      display.append('<h3>' + park.name + '</h3><div>' + park.address + '</div>');
    });
  }
});