var db = require('../../config/db');
var ParkToVisit = require('./parkToVisit');

var User = db.Model.extend({
  tableName: 'users',
  user: function() {
    return this.hasMany(ParkToVisit);
  },

  initialize: function() {
  }
});

module.exports = User;