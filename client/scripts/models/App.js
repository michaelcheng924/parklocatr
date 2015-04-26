var App = Backbone.Model.extend({

  initialize: function() {
    this.set('navbarSetting', new NavbarSetting());

    localStorage.removeItem('com.parklocatr');
  }

});