var Bookshelf = require('bookshelf');

var db = Bookshelf.initialize({
  client: 'sqlite3',
  connection: {
    // host: '127.0.0.1',
    // user: 'root',
    // password: null,
    // charset: 'utf8',
    filename: 'parklocatr_database.sqlite'
  }
});