var db = require('../../config/db');

var Park = db.Model.extend({
  tableName: 'parks',

  initialize: function() {
  }
});

module.exports = Park;