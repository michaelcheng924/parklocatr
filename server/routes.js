var bodyParser = require('body-parser');
var bcrypt = require('bcrypt-nodejs');
var jwt = require('jwt-simple');
var User = require('./app/models/user');
var Users = require('./app/collections/users');
var ParkToVisit = require('./app/models/parkToVisit');
var ParksToVisit = require('./app/collections/parksToVisit');
var VisitedPark = require('./app/models/visitedPark');
var VisitedParks = require('./app/collections/VisitedParks');

module.exports = function(app) {
  
  app.use(bodyParser());

  app.get('/login', function(req, res) {
    res.redirect('/#login');
  });

  app.post('/login', function(req, res) {
    new User({ username: req.body.username })
      .fetch()
      .then(function(user) {
        if (user) {
          bcrypt.compare(req.body.password, user.attributes.password, function(err, match) {
            if (match) {
              var token = jwt.encode(user, 'secret');
              res.json({token: token});
            } else {
              res.send('Incorrect password!');
            }
          });
        } else {
          res.send('Sorry, that username was not found in our database!');
        }
      });
  });

  app.get('/signup', function(req, res) {
    res.redirect('/#signup');
  });

  app.post('/signup', function(req, res) {
    new User({ username: req.body.username })
      .fetch()
      .then(function(found) {
        if (found) {
          res.send('Username already exists!');
        } else {
          bcrypt.hash(req.body.password, null, null, function(err, hash) {
            var user = new User({
              username: req.body.username,
              password: hash
            });

            user.save().then(function(newUser) {
              console.log(newUser);
              Users.add(newUser);
              var token = jwt.encode(user, 'secret');
              res.json({token: token});
            });
          });
          
        }
      });
  });

  app.post('/parks-to-visit', function(req, res) {
    var token = req.headers['x-access-token'];
    if (!token) {
      res.send('No token!');
    } else {
      var user = jwt.decode(token, 'secret');
      console.log(user);
      console.log(req.body.parkName);

      new User({ username: user.username })
        .fetch()
        .then(function(foundUser) {
          
        });
    }
  });

  app.get('/visited-parks', function(req, res) {

  });

  app.use('/auth/local', require('./auth/local'));

};