var Router = Backbone.Router.extend({
  routes: {
    '': 'index',
    'parks/:id': 'showParkDetails',
    'test': 'test'
  },

  index: function() {

  },

  showParkDetails: function() {

  },

  test: function() {
    console.log('test!!'); 
  }
});