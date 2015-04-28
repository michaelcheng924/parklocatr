var Parks = Backbone.Collection.extend({
  model: Park,

  // Re-renders dashboard when user logs in
  // Trigger is "heard" in App.js
  update: function() {
    this.trigger('updateTrigger');
  }
});