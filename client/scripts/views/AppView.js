var AppView = Backbone.View.extend({

  initialize: function() {
    this.mapView = new MapView();
    this.navbarView = new NavbarView();
    this.loginView = new LoginView();
  }

});