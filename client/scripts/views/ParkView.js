var ParkView = Backbone.View.extend({
  el: $('.park-view'),

  initialize: function() {
    this.render();
  },

  render: function() {
    this.$el.append('test');
  }
});