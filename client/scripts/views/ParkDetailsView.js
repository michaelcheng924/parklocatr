var ParkDetailsView = Backbone.View.extend({

  el: $('.park-details-view'),
  
  initialize: function() {
    this.render();
  },

  render: function() {
    if (this.model.get('rating') === 0) {
      this.model.set('rating', 'n/a');
    }

    // Get and render parkDetailsView template
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