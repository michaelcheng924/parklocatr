var Router = Backbone.Router.extend({

  routes: {
    '/': 'index'
  },

  index: function() {
    console.log('got index!');
  }

});