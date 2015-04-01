var ParkView = Backbone.View.extend({
  el: $('.park-view'),

  initialize: function() {
    this.template = _.template($('.park-view-template').html());
  },

  render: function() {
    this.$el.html(this.template(this.model.attributes));
  }
});