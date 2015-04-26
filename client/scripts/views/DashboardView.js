var DashboardView = Backbone.View.extend({

  el: $('.dashboard-view'),
  
  initialize: function() {
    this.render();

    this.model.on('change', this.render, this);
  },

  render: function() {
    if (!localStorage.getItem('com.parklocatr')) {
      $.ajax({
        url: 'scripts/templates/PreDashboardViewTemplate.js',
        dataType: 'html',
        success: function(data) {
          var template = _.template(data, {});
          this.$el.html(template());
        }.bind(this)
      });
    } else {
      $.ajax({
        url: 'scripts/templates/DashboardViewTemplate.js',
        dataType: 'html',
        success: function(data) {

          var template = _.template(data, {});
          this.$el.html(template());
        }.bind(this)
      });
    }
  }
});