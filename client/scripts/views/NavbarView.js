var NavbarView = Backbone.View.extend({

  el: $('.navbar-view'),
  
  initialize: function() {
    this.router = new Router();

    this.render();

    this.model.on('change', this.render, this);
  },

  events: {

    // Click handlers for navbar menu
    'click .home': function() {
      this.router.navigate('/', {trigger: true});
    },
    'click .login': function() {      
      this.router.navigate('/login', {trigger: true});
    },
    'click .logout': function() {
      // Remove token on logout
      localStorage.removeItem('com.parklocatr');

      // Change navbarSettings back to defaults on logout
      this.model.set({
        menu: 'Login/Signup',
        url: '/#login',
        className: 'login',
      });

      // Navigate back to home page on logout
      this.router.navigate('/', {trigger: true});
    }
  },

  render: function() {
    // Get and render navbar template
    $.ajax({
      url: 'scripts/templates/NavbarViewTemplate.js',
      dataType: 'html',
      success: function(data) {
        var template = _.template(data);

        // When page first loads, if user/token exists, set the navbar menu accordingly
        if (localStorage.getItem('com.parklocatr')) {
          this.model.set({
            menu: 'Logout',
            url: '/#logout',
            className: 'logout',
          });
        }

        this.$el.html(template(this.model.attributes));
      }.bind(this)
    });
  }
});