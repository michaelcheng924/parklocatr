<h2><%- name %></h2>
<div class="park-details-info">
  <h4><strong>Address:</strong></h4>
  <div><%- formatted_address %></div>

  <h4><strong>Phone:</strong></h4> 
  <%- formatted_phone_number %>
</div>
<hr>
<div class="park-details-overall-rating">
  <h4>Overall Rating:</h4> 
  <%- rating %>/5 (<%- user_ratings_total %> ratings)
</div>
<h4>Reviews:</h4>
<% _.each(reviews, function(review) { %>
  <div class="park-details-reviews">
    <div><strong>Author: </strong><%- review.author_name %></div>
    <div><strong>Author rating: </strong><%- review.rating %>/5</div>
    <div><strong>Review: </strong><%- review.text %></div>
  </div>
  <br>
<% }) %>
<div>Photos: <% _.each(photos, function(photo) { %> 
  <img src="<%- photo.getUrl({'maxWidth': 50, 'maxHeight': 50}) %>"> 
<% }) %></div>