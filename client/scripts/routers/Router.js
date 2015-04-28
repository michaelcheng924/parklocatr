var Router = Backbone.Router.extend({
  routes: {
    '': 'index',
    'login': 'login',
    'signup': 'signup',
    'dashboard': 'dashboard'
  },

  index: function() {
    // Fade in main page after other elements fade out
    setTimeout(function() {
      $('.main-page').fadeIn();
    }, 500);

    // Fade out elements that are not main page
    $('.login-view').fadeOut();
    $('.signup-view').fadeOut();
    $('.dashboard-view').fadeOut();

    // Sets the correct li in navbar to be active
    $('nav li').removeClass('active');
    $('.home').addClass('active');
  },

  login: function() {
    setTimeout(function() {
      $('.login-view').fadeIn();
    }, 500);
    $('.main-page').fadeOut();
    $('.signup-view').fadeOut();
    $('.dashboard-view').fadeOut();

    $('nav li').removeClass('active');
    $('.login').addClass('active');
  },

  signup: function() {
    setTimeout(function() {
      $('.signup-view').fadeIn();
    }, 500);
    $('.main-page').fadeOut();
    $('.login-view').fadeOut();
    $('.dashboard-view').fadeOut();

    $('nav li').removeClass('active');
    $('.login').addClass('active');
  },

  dashboard: function() {
    setTimeout(function() {
      $('.dashboard-view').fadeIn();
    }, 500);
    $('.main-page').fadeOut();
    $('.login-view').fadeOut();
    $('.signup-view').fadeOut();

    $('nav li').removeClass('active');
    $('.dashboard').addClass('active');
  }
});