var DashboardView = Backbone.View.extend({

  el: $('.dashboard-view'),
  
  initialize: function() {
    this.render();
  },

  render: function() {
    $.ajax({
      url: 'scripts/templates/DashboardViewTemplate.js',
      dataType: 'html',
      success: function(data) {
        var template = _.template(data, {});
        this.$el.html(template());
      }.bind(this)
    });
  }
});