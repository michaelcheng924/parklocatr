var ParkView = Backbone.View.extend({

  tagName: 'li',

  initialize: function() {
    this.template = _.template('<strong>lat: </strong><%- geometry.location.lat %>, <strong>lng: </strong> <%- geometry.location.lng %>, <strong>place_id: </strong><%- place_id %>');
  },

  events: {
    
  },

  render: function() {
    return this.$el.html(this.template(this.model.attributes));
  }
});