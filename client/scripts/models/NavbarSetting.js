var NavbarSetting = Backbone.Model.extend({
  defaults: {
    // Settings for navbar top right box
    menu: 'Login/Signup',
    url: '/#login',
    className: 'login',
    // Displays greeting in dashboardView
    // Message is defined when a user is signed in
    message: ''
  },

  // Re-renders the dashboard when user signs in
  login: function() {
    this.trigger('loggedIn');
  }
});