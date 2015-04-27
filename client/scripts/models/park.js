var Park = Backbone.Model.extend({
  defaults: {
    photos: '',
    rating: 'n/a',
    vicinity: '',
    toVisitText: 'Add to <em>Parks to Visit</em>!',
    visitedText: 'Add to <em>Parks I\'ve Visited</em>!'
  }
});