var SignupView = Backbone.View.extend({

  el: $('.signup-view'),
  
  initialize: function() {
    this.render();
  },

  render: function() {
    $.ajax({
      url: 'scripts/templates/SignupViewTemplate.js',
      dataType: 'html',
      success: function(data) {
        var template = _.template(data, {});
        this.$el.html(template());
      }.bind(this)
    });
  }
});