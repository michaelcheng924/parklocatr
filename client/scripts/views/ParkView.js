var ParkView = Backbone.View.extend({

  initialize: function() {
    this.template = _.template('<div><%- Name %></div>');
  },

  render: function() {
    this.$el.html(this.template(this.model.attributes));
  }
});