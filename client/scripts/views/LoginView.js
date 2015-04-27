var LoginView = Backbone.View.extend({

  el: $('.login-view'),
  
  initialize: function() {
    this.router = new Router();

    this.render();
  },

  events: {
    'click .login-submit': function(e) {
      e.preventDefault();

      var username = $('.username-login').val();
      var password = $('.password-login').val();
      var self = this;
      
      $.ajax({
        type: 'POST',
        url: '/login',
        data: {
          username: username,
          password: password
        }
      }).success(function(res) {
        if (res.token) {
          self.model.set({
            menu: 'Logout',
            url: '/logout',
            className: 'logout',
            token: res.token
          });
          console.log('Successfully logged in!');
        }
      }).then(function() {
        setTimeout(function() {
          self.router.navigate('/dashboard', {trigger: true});
        },20);
      });

    }
  },

  render: function(templateObject) {
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