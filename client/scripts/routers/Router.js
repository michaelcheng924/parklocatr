var Router = Backbone.Router.extend({
  routes: {
    '': 'index',
    'login': 'login',
    'test': 'test'
  },

  index: function() {
  },

  login: function() {
    $('.main-page').hide();
  }
});