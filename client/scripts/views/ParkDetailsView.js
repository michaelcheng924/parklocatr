var ParkDetailsView = Backbone.View.extend({

  el: $('.park-details-view'),
  
  initialize: function() {
    this.render();
  },

  events: {
    'click': function() {
      
    }
  },

  render: function() {
    $.ajax({
      url: 'scripts/templates/ParkDetailsViewTemplate.js',
      dataType: 'html',
      success: function(data) {
        console.log('get request!')
        console.log(data);
        var template = _.template(data, {});
        this.$el.html(template(this.model.attributes));
      }.bind(this)
    });
  }
});