var ParkDetailsView = Backbone.View.extend({

  el: $('.park-details-view'),
  
  initialize: function() {
    this.template = _.template($('.park-details-view-template').html()),

    this.render();
  },

  events: {
    'click': function() {
      
    }
  },

  render: function() {
    return this.$el.html(this.template(this.model.attributes));
  }
});