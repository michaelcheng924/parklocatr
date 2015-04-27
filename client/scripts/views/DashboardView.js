var DashboardView = Backbone.View.extend({

  el: $('.dashboard-view'),
  
  initialize: function() {

    this.render();

    this.model.on('loggedIn', this.render, this);
  },

  render: function() {
    if (!localStorage.getItem('com.parklocatr')) {
      $.ajax({
        url: 'scripts/templates/PreDashboardViewTemplate.js',
        dataType: 'html',
        success: function(data) {
          var template = _.template(data, {});
          this.$el.html(template());
        }.bind(this)
      });
    } else {
      $.ajax({
        url: 'scripts/templates/DashboardViewTemplate.js',
        dataType: 'html',
        success: function(data) {
          $.ajax({
            url: '/parks-to-visit',
            headers: {
              'x-access-token': localStorage.getItem('com.parklocatr')
            },
            success: function(visitedParks) {
              console.log('got visited parks!', visitedParks);
              var template = _.template(data, {});
              this.$el.html(template());

              _.each(visitedParks, function(park) {
                $('.parks-to-visit-display').append('<h3>' + park.name + '</h3><div>' + park.address + '</div>');
              });
            }.bind(this)
          });
        }.bind(this)
      });
    }
  }
});