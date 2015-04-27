var db = require('../../config/db');
var User = require('./user');

var VisitedPark = db.Model.extend({
  tableName: 'visited_parks',
  park: function() {
    return this.belongsToMany(User, 'user_id');
  },

  initialize: function() {
  }
});

module.exports = VisitedPark;