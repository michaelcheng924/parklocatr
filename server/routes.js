var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser());

module.exports = function(app) {

  app.get('/login', function(req, res) {
    res.redirect('/#login');
  });

  app.get('/signup', function(req, res) {
    res.redirect('/#signup');
  });

  app.post('/signup', function(req, res) {
    console.log(req.body);
  });

  app.use('/auth/local', require('./auth/local'));

};