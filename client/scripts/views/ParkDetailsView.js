var ParkDetailsView = Backbone.View.extend({

  el: $('.park-details-view'),

  template: _.template('\
    <h3><%- name %></h3> \
    <div><strong>Address:</strong></div> \
    <div><%- formatted_address %></div> \
    <div><strong>Phone:</strong> <%- formatted_phone_number %></div> \
    <div><strong>Rating:</strong> <%- rating %>/5 (<%- user_ratings_total %> ratings)</div> \
    <div><strong>Reviews:</strong></div> \
    <div><% _.each(reviews, function(review) { %> \
      <div><strong>Author:</strong><%- review.author_name %></div> \
      <div><strong>Overall rating:</strong><%- review.rating %>/5</div> \
      <div><strong>Review:</strong></div> \
      <div><%- review.text %></div> \
    <% }) %></div> \
    <div>Photos: <% _.each(photos, function(photo) { console.log(photo);%><% }) %></div> \
  '),

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