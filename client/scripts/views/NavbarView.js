var NavbarView = Backbone.View.extend({

  el: $('.navbar-view'),
  
  initialize: function() {
    this.router = new Router();

    this.render();
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
        console.log(this.model.attributes);
        var template = _.template(data);
        this.$el.html(template(this.model.attributes));
      }.bind(this)
    });
  }
});