// Dashboard feature - list of parks user wants to visit
var ParksToVisit = Backbone.Collection.extend({
  model: ParkToVisit,
  url: '/parks-to-visit'
});