var db = require('../../config/db');
var User = require('./user');

var Park = db.Model.extend({
  tableName: 'parks',
  park: function() {
    return this.belongsTo(User);
  },

  initialize: function() {
  }
});

module.exports = Park;