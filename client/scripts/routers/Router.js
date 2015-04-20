var Router = Backbone.Router.extend({
  routes: {
    '': 'index',
    'login': 'login',
    'test': 'test'
  },

  index: function() {
    console.log('index!');
  },

  login: function() {

  }
});