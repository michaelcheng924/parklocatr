var ParkView = Backbone.View.extend({

  initialize: function() {
    this.template = _.template($('.park-view-template').html());
  },

  render: function() {
    this.$el.html(this.template(this.model.attributes));
  }
});