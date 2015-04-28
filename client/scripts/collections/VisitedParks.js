// Dashboard feature - list of parks the user has visited
var VisitedParks = Backbone.Collection.extend({
  model: VisitedPark,
  url: '/visited-parks'
});