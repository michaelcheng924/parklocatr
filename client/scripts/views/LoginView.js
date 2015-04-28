var LoginView = Backbone.View.extend({

  el: $('.login-view'),
  
  initialize: function() {
    this.router = new Router();

    this.render();
  },

  events: {
    'click .login-submit': function(e) {
      e.preventDefault();

      var self = this;

      // Get username and password from form
      var username = $('.username-login').val();
      var password = $('.password-login').val();
      
      // POST request to '/login'
      $.ajax({
        type: 'POST',
        url: '/login',
        data: {
          username: username,
          password: password
        }
      }).success(function(res) {
        // If successful, change navbarSettings and add greeting to dashboard
        if (res.token) {
          self.model.set({
            menu: 'Logout',
            url: '/#logout',
            className: 'logout',
            message: 'Greetings, ' + username + '!'
          });

          // Store token in localStorage for future authentication
          localStorage.setItem('com.parklocatr', res.token);

          // Calls login, which will trigger a re-render of the dashboard
          self.model.login();

          console.log('Successfully logged in!');
        }
      }).then(function() {
        // Navigate to dashboard page
        // setTimeout to make sure everything has been loaded beforehand
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