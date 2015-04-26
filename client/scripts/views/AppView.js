var AppView = Backbone.View.extend({

  initialize: function() {
    this.mapView = new MapView();
    this.navbarView = new NavbarView({model: this.model.get('navbarSetting')});
    this.loginView = new LoginView({model: this.model.get('navbarSetting')});
    this.signupView = new SignupView({model: this.model.get('navbarSetting')});
    this.dashboardView = new DashboardView();

    this.loginView.$el.hide();
    this.signupView.$el.hide();
    this.dashboardView.$el.hide();
  }

});