<h2><%- name %></h2>

<!-- Button trigger modal -->
<a data-toggle="modal" data-target="#myModal">
  Launch demo modal
</a>

<!-- Modal -->
<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-body">
        <img src="http://upload.wikimedia.org/wikipedia/commons/8/86/Jefferson_Park_in_Chicago.JPG" style="max-width: 80%">
      </div>
      <div class="modal-footer">
        <center><button type="button" class="btn btn-default" data-dismiss="modal">Close</button></center>
      </div>
    </div>
  </div>
</div>

<div><% _.each(photos, function(photo) { %> 
  <img src="<%- photo.getUrl({'maxWidth': 50, 'maxHeight': 50}) %>" class="park-photo"> 
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