var db = require('../../config/db');
var bcrypt = require('bcrypt-nodejs');

var User = db.Model.extend({
  tableName: 'users',

  initialize: function() {
  }
});

module.exports = User;