var ParksView = Backbone.View.extend({
  el: $('.parks-view'),

  initialize: function() {
    this.render();
  },

  render: function() {
    this.$el.append('parks view');
  }
});