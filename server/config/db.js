var knex = require('knex')({
  client: 'sqlite3',
  connection: {
    filename: 'server/config/parklocatr_database.sqlite'
  }
});

var db = require('bookshelf')(knex);

db.knex.schema.hasTable('users').then(function(exists) {
  if (!exists) {
    db.knex.schema.createTable('users', function(user) {
      user.increments('id').primary();
      user.string('username', 100);
      user.string('password', 100);
    }).then(function(table) {
      console.log('Created Table', table);
    });
  }
});

module.exports = db;