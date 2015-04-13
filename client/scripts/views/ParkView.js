var ParkView = Backbone.View.extend({

  tagName: 'li',

  initialize: function() {
    this.template = _.template('<strong><%- name %></strong>');
  },

  events: {
    
  },

  render: function() {
    return this.$el.html(this.template(this.model.attributes));
  }
});