var express = require('express');
var passport = require('passport');
var LocalStrategy = require('passport-loca');

var app = express();

app.use(express.static(__dirname + '/client'));

app.post('/login',
  passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login',
    failureFlash: true
  })
};

var port = process.env.PORT || 3000;

app.listen(port, function() {
  console.log('Server on port ' + port);
});