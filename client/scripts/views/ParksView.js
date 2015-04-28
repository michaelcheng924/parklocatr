var ParksView = Backbone.View.extend({

  el: $('.parks-view'),

  initialize: function() {
    this.render();

    // Trigger for re-rendering dashboardView when a park is added to the dashboard
    this.collection.on('change', function() {
      this.collection.update();
    }.bind(this));
  },

  render: function() {
    // Creates a parkView for each park in the collection
    this.$el.html('');
    this.$el.append(
      this.collection.map(function(park) {
        return new ParkView({model: park}).render();
      })
    );
  }
});