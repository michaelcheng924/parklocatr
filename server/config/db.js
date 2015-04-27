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

// db.knex.schema.dropTable('parks').then(function() {
//   console.log('dropped!');
// });

db.knex.schema.hasTable('parks_to_visit').then(function(exists) {
  if (!exists) {
    db.knex.schema.createTable('parks_to_visit', function(park) {
      park.increments('id').primary();
      park.string('name', 150);
      park.string('address', 255);
      park.integer('user_id');
    }).then(function(table) {
      console.log('Created Table', table);
    });
  }
});

db.knex.schema.hasTable('visited_parks').then(function(exists) {
  if (!exists) {
    db.knex.schema.createTable('visited_parks', function(park) {
      park.increments('id').primary();
      park.string('name', 150);
      park.string('address', 255);
      park.integer('user_id');
    }).then(function(table) {
      console.log('Created Table', table);
    });
  }
});

module.exports = db;