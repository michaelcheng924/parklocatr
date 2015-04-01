var ParkView = Backbone.View.extend({

  tagName: 'li',

  initialize: function() {
    this.template = _.template('<strong>Name: </strong><%- Name %>, <strong>X-Coordinate: </strong><%- X_Coordinate %>, <strong>Y-Coordinate: </strong><%- Y_Coordinate %>');
  },

  render: function() {
    return this.$el.html(this.template(this.model.attributes.attributes));
  }
});