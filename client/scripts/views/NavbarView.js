var NavbarView = Backbone.View.extend({

  el: $('.navbar-view'),
  
  initialize: function() {
    this.render();
  },

  render: function() {
    $.ajax({
      url: 'scripts/templates/NavbarViewTemplate.js',
      dataType: 'html',
      success: function(data) {
        var template = _.template(data, {});
        this.$el.html(template());
      }.bind(this)
    });
  }
});