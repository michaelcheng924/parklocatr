var NavbarSetting = Backbone.Model.extend({
  defaults: {
    menu: 'Login/Signup',
    url: '/#login',
    className: 'login',
  },

  login: function() {
    this.trigger('loggedIn');
  }
});