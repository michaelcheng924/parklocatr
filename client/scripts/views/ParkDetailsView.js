var ParkDetailsView = Backbone.View.extend({

  el: $('.park-details-view'),
  
  initialize: function() {
    this.render();
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