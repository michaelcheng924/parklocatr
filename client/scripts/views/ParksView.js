var ParksView = Backbone.View.extend({

  el: $('.parks-view'),

  initialize: function() {
    this.render();

    this.collection.on('change', function() {
      this.collection.update();
    }.bind(this));
  },

  render: function() {
    this.$el.html('');
    this.$el.append(
      this.collection.map(function(park) {
        return new ParkView({model: park}).render();
      })
    );
  }
});