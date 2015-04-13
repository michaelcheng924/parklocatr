var ParkView = Backbone.View.extend({

  tagName: 'div',

  initialize: function() {
    this.template = _.template('<strong><%- name %></strong> \
      <div>Location: <%- vicinity %></div> \
      <div>Rating: <%- rating %>/5</div>');
  },

  events: {
    
  },

  render: function() {
    return this.$el.html(this.template(this.model.attributes));
  }
});