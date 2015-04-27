var Parks = Backbone.Collection.extend({
  model: Park,

  update: function() {
    this.trigger('updateTrigger');
  }
});