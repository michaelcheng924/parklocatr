<h2><%- name %></h2>
<div class="photos-instructions">Click photos to enlarge!</div>
<div><% _.each(photos, function(photo, index) { %> 

  <!-- Button trigger modal -->
  <a data-toggle="modal" data-target="#myModal<%- index %>">
    <img src="<%- photo.getUrl({'maxWidth': 70, 'maxHeight': 70}) %>" class="park-photo"> 
  </a>

  <!-- Modal -->
  <div class="modal fade" id="myModal<%- index %>" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-body">
          <img src="<%- photo.getUrl({'maxWidth': 1000, 'maxHeight': 1000}) %>" style="max-width: 90%">
        </div>
        <div class="modal-footer">
          <center><button type="button" class="btn btn-default" data-dismiss="modal">Close</button></center>
        </div>
      </div>
    </div>
  </div>
<% }) %></div>

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