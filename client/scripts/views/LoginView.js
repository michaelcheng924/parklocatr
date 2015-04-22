var LoginView = Backbone.View.extend({

  el: $('.login-view'),
  
  initialize: function() {
    this.render();
  },

  render: function() {
    $.ajax({
      url: 'scripts/templates/LoginViewTemplate.js',
      dataType: 'html',
      success: function(data) {
        var template = _.template(data, {});
        this.$el.html(template());
      }.bind(this)
    });
  }
});