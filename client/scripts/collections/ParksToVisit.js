var ParksToVisit = Backbone.Collection.extend({
  model: ParkToVisit,
  url: '/parks-to-visit'
});