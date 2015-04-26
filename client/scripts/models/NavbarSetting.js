var NavbarSetting = Backbone.Model.extend({
  defaults: {
    menu: 'Login/Signup',
    url: '/#login',
    class: 'login',
    loggedIn: false
  }
});