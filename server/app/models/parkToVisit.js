var db = require('../../config/db');
var User = require('./user');

var ParkToVisit = db.Model.extend({
  tableName: 'parks_to_visit',
  park: function() {
    return this.belongsToMany(User);
  },

  initialize: function() {
  }
});

module.exports = ParkToVisit;