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

    // If no user is signed in, display dashboard features
    if (!localStorage.getItem('com.parklocatr')) {
      // Get and display dashboard features template
      self.getTemplate('scripts/templates/PreDashboardViewTemplate.js', self);
    // If a user is signed in, display personalized dashboard
    } else {
      // Get and display personalized dashboard
      self.getTemplate('scripts/templates/DashboardViewTemplate.js', self)
      .then(function() {
        // Get and display Parks to Visit
        self.getDashboardParks('/parks-to-visit', self, '.parks-to-visit-display')
      .then(function() {
        // Get and display Visited Parks
        self.getDashboardParks('/visited-parks', self, '.visited-parks-display');
        });
      });
    }
  },

  // Makes get request for template
  getTemplate: function(url, self) {
    return $.ajax({
      url: url,
      dataType: 'html',
      success: function(data) {
        // Displays template in view
        self.displayTemplate(data, self);
      }
    });
  },

  // Displays template in view
  displayTemplate: function(data, self) {
    var template = _.template(data, {});
    self.$el.html(template(self.model.attributes));
  },

  // Makes get request for Dashboard parks lists
  getDashboardParks: function(url, self, className) {
    return $.ajax({
      url: url,
      headers: {
        'x-access-token': localStorage.getItem('com.parklocatr')
      },
      success: function(data) {
        // Displays template in view
        self.displayDashboardParks(data, className);
      }
    });
  },

  // Displays parks lists in view
  displayDashboardParks: function(data, className) {
    var display = $(className);
    display.html('');
    _.each(data, function(park) {
      display.append('<h3>' + park.name + '</h3><div>' + park.address + '</div>');
    });
  }
});