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
    $('.dashboard-view').hide();

    $('nav li').removeClass('active');
    $('.home').addClass('active');
  },

  login: function() {
    $('.login-view').show();
    $('.main-page').hide();
    $('.signup-view').hide();
    $('.dashboard-view').hide();

    $('nav li').removeClass('active');
    $('.login').addClass('active');
  },

  signup: function() {
    $('.signup-view').show();
    $('.main-page').hide();
    $('.login-view').hide();
    $('.dashboard-view').hide();

    $('nav li').removeClass('active');
    $('.signup').addClass('active');
  },

  dashboard: function() {
    $('.dashboard-view').show();
    $('.main-page').hide();
    $('.login-view').hide();
    $('.signup-view').hide();

    $('nav li').removeClass('active');
    $('.dashboard').addClass('active');
  }
});