var SignupView = Backbone.View.extend({

  el: $('.signup-view'),
  
  initialize: function() {
    this.router = new Router();

    this.render();
  },

  events: {
    'click .signup-submit': function(e) {
      e.preventDefault();

      var username = $('.username-signup').val();
      var password = $('.password-signup').val();
      var self = this;
      
      $.ajax({
        type: 'POST',
        url: '/signup',
        data: {
          username: username,
          password: password
        }
      }).success(function(res) {
        if (res === 'OK') {
          localStorage.setItem('com.parklocatr', true);
          self.model.set('menu', 'Logout');
          self.model.set('url', '/logout');
          self.router.navigate('/dashboard', {trigger: true});
          console.log('Successfully signed up!');
        }
      });

    }
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