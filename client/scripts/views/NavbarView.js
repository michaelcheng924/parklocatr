var NavbarView = Backbone.View.extend({

  el: $('header'),

  initialize: function() {
    this.template = _.template($('.navbar-view').html());

    this.render();
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