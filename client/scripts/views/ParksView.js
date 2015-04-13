var ParksView = Backbone.View.extend({

  el: $('.park-details-view'),

  initialize: function() {
    this.render();
  },

  render: function() {
    this.$el.append(
      this.collection.map(function(park) {
        return new ParkView({model: park}).render();
      })
    );
  }
});