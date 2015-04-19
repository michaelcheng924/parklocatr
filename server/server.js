var express = require('express');
var passport = require('passport');
var LocalStrategy = require('passport-local');

var app = express();

app.use(express.static(__dirname + '/../client'));

// Configure passport

passport.use(new LocalStrategy(
  function(username, password, done) {
    User.findOne({ username: username }, function(err, user) {
      if (err) {
        return done(err);
      }
      if (!user) {
        return done(null, false, { message: 'Incorrect username.' });
      }
      if (!user.validPassword(password)) {
        return done(null, false, { message: 'Incorrect password.' });
      }
      return done(null, user);
    });
  }
));

app.post('/login',
  passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login',
    failureFlash: true
  })
);

var port = process.env.PORT || 3000;

app.listen(port, function() {
  console.log('Server on port ' + port);
});