var Park = Backbone.Model.extend({
  defaults: {
    // Defaults for Google Maps nearby search info
    name: '',
    rating: 'n/a',
    vicinity: '',

    // Display for links to add parks to dashboard
    toVisitText: 'Add to <em>Parks to Visit</em>!',
    visitedText: 'Add to <em>Parks I\'ve Visited</em>!'
  }
});