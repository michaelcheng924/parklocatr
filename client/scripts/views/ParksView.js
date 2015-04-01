var ParksView = Backbone.View.extend({
  el: $('.parks-view'),

  initialize: function() {
    this.render();
  },

  render: function() {
    this.$el.html('<h2>Parks View</h2>').append(
      this.collection.map(function(park) {
        return new ParkView({model: park});
      })
    );
  }
});