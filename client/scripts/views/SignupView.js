var SignupView = Backbone.View.extend({

  el: $('.signup-view'),
  
  initialize: function() {
    this.render();
  },

  events: {
    'submit .signup-form': 'handleSubmit'
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
  },

  handleSubmit: function(e) {
    e.preventDefault();

    $.ajax({
      type: 'POST',
      url: '/signup',
      data: {
        username: $('.username-signup').val(),
        password: $('.password-signup').val()
      }
    }).success(function(res) {
      console.log('successfully posted!');
    });
  }
});