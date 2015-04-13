var ParkView = Backbone.View.extend({

  tagName: 'div',

  initialize: function() {
    this.template = _.template('<h3><%- name %></h3> \
      <div>Location: <%- vicinity %></div> \
      <div>Rating: <%- rating %></div>');
  },

  events: {
    
  },

  render: function() {
    return this.$el.html(this.template(this.model.attributes));
  }
});