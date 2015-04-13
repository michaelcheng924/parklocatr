var ParkView = Backbone.View.extend({

  template: _.template('<h3><%- name %></h3> \
      <div>Location: <%- vicinity %></div> \
      <div>Rating: <%- rating %></div>'),

  initialize: function() {
  },

  events: {
    'click': function() {
      
    }
  },

  render: function() {
    return this.$el.html(this.template(this.model.attributes));
  }
});