var ParkDetailsView = Backbone.View.extend({

  el: $('.park-details-view'),

  template: _.template('<h3><%- name %></h3> \
      <div>Location: <%- vicinity %></div> \
      <div>Rating: <%- rating %></div>'),

  initialize: function() {
    this.render();
  },

  events: {
    'click': function() {
      
    }
  },

  render: function() {
    return this.$el.html(this.template(this.model.attributes));
  }
});