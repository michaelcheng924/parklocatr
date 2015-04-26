var db = require('../../config/db');
var Park = require('./park');

var User = db.Model.extend({
  tableName: 'users',
  user: function() {
    return this.hasMany(Park);
  },

  initialize: function() {
  }
});

module.exports = User;