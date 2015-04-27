var App = Backbone.Model.extend({

  initialize: function() {
    // localStorage.removeItem('com.parklocatr');

    this.set('navbarSetting', new NavbarSetting());
    this.set('router', new Router());

    this.set('parks', new Parks());
    this.set('mapView', new MapView({model: this}));
    this.set('navbarView', new NavbarView({model: this.get('navbarSetting')}));
    this.set('loginView', new LoginView({model: this.get('navbarSetting')}));
    this.set('signupView', new SignupView({model: this.get('navbarSetting')}));
    this.set('dashboardView', new DashboardView({model: this.get('navbarSetting')}));

    this.get('loginView').$el.hide();
    this.get('signupView').$el.hide();
    this.get('dashboardView').$el.hide();

    this.get('parks').on('updateTrigger', function() {
      this.get('dashboardView').render();
    }.bind(this));
  }

});