var AppView = Backbone.View.extend({

  initialize: function() {
    this.mapView = new MapView();
    this.navbarViewi = new NavbarView();
  }

});