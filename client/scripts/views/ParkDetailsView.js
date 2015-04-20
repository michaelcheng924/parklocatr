var ParkDetailsView = Backbone.View.extend({

  el: $('.park-details-view'),
  
  initialize: function() {
    this.render();
  },

  events: {
    'mouseover .park-photo': function() {
      $('park-photo').popover({
        html: true,
        content: 'hello!'
      });
    }
  },

  render: function() {
    $.ajax({
      url: 'scripts/templates/ParkDetailsViewTemplate.js',
      dataType: 'html',
      success: function(data) {
        var template = _.template(data, {});
        this.$el.html(template(this.model.attributes));
      }.bind(this)
    });
  }
});