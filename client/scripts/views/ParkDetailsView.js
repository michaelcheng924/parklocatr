var ParkDetailsView = Backbone.View.extend({

  el: $('.park-details-view'),

  template: _.template('\
    <h3><%- name %></h3> \
    <div>Address: <%- formatted_address %></div> \
    <div>Phone: <%- formatted_phone_number %></div> \
    <div>Rating: <%- rating %> (<%- user_ratings_total %> ratings)</div> \
    <div>Reviews: <% _.each(reviews, function(review) { %> \
      <div>Author: <%- review.author_name %></div> \
      <div>Overall rating: <%- review.rating %></div> \
      <div>Review: <%- review.text %></div> \
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