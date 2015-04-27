var VisitedParks = Backbone.Collection.extend({
  model: VisitedPark,
  url: '/visited-parks'
});