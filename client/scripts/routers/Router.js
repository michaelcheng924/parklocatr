var Router = Backbone.Router.extend({
  routes: {
    '': 'index',
    'login': 'login',
    'signup': 'signup',
    'dashboard': 'dashboard'
  },

  index: function() {
    $('.main-page').show();
    $('.login-view').hide();
    $('.signup-view').hide();

    $('nav li').removeClass('active');
    $('.home').addClass('active');
  },

  login: function() {
    $('.main-page').hide();
    $('.signup-view').hide();
    $('.login-view').show();

    $('nav li').removeClass('active');
    $('.login').addClass('active');
  },

  signup: function() {
    $('.main-page').hide();
    $('.login-view').hide();
    $('.signup-view').show();

    $('nav li').removeClass('active');
    $('.signup').addClass('active');
  },

  dashboard: function() {
    $('.dashboard-view').show();
  }
});