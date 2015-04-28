var App = Backbone.Model.extend({

  initialize: function() {

    // NavbarSetting adjusts views based on whether a user is signed in
    this.set('navbarSetting', new NavbarSetting());

    // If a user signs in, session is persisted when page reloads
    if (localStorage.getItem('com.parklocatr')) {
      // Fetches username for dashboard greeting
      $.ajax({
        url: '/get-username',
        headers: {
          'x-access-token': localStorage.getItem('com.parklocatr')
        },
        success: function(username) {
          this.get('navbarSetting').set('message', 'Greetings, ' + username + '!');
        }.bind(this)
      });
    }

    // Initialize router
    this.set('router', new Router());

    // Initialize views
    this.set('parks', new Parks());
    this.set('mapView', new MapView({model: this}));
    this.set('navbarView', new NavbarView({model: this.get('navbarSetting')}));
    this.set('loginView', new LoginView({model: this.get('navbarSetting')}));
    this.set('signupView', new SignupView({model: this.get('navbarSetting')}));
    this.set('dashboardView', new DashboardView({model: this.get('navbarSetting')}));

    // Hide these views at the beginning
    this.get('loginView').$el.hide();
    this.get('signupView').$el.hide();
    this.get('dashboardView').$el.hide();

    // Re-renders dashboard when user signs in
    // Triggered from Parks.js
    this.get('parks').on('updateTrigger', function() {
      this.get('dashboardView').render();
    }.bind(this));
  }

});