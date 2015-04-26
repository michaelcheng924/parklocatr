var NavbarView = Backbone.View.extend({

  el: $('.navbar-view'),
  
  initialize: function() {
    this.router = new Router();

    this.render();

    this.model.on('change', this.render, this);
  },

  events: {
    'click .home': function() {
      this.router.navigate('/', {trigger: true});
    },
    'click .login': function() {      
      this.router.navigate('/login', {trigger: true});
    },
    'click .signup': function() {
      this.router.navigate('/signup', {trigger: true});
    }
  },

  render: function() {
    $.ajax({
      url: 'scripts/templates/NavbarViewTemplate.js',
      dataType: 'html',
      success: function(data) {
        var template = _.template(data);
        this.$el.html(template(this.model.attributes));
      }.bind(this)
    });
  }
});