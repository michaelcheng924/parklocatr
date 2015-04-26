var LoginView = Backbone.View.extend({

  el: $('.login-view'),
  
  initialize: function() {
    this.router = new Router();

    this.render();
  },

  events: {
    'click .login-submit': function(e) {
      e.preventDefault();

      var username = $('.username-submit').val();
      var password = $('.password-submit').val();
      var self = this;
      
      $.ajax({
        type: 'POST',
        url: '/login',
        data: {
          username: username,
          password: password
        }
      }).success(function(res) {
        self.router.navigate('/dashboard', {trigger: true});
        console.log('Successfully logged in!', res);
      });

    }
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