var bodyParser = require('body-parser');
var bcrypt = require('bcrypt-nodejs');
var jwt = require('jwt-simple');
var db = require('./config/db');
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

  app.get('/parks-to-visit', function(req, res) {

    var token = req.headers['x-access-token'];
    if (!token) {
      res.send('No token!');
    } else {
      var user = jwt.decode(token, 'secret');

      db.knex('parks_to_visit').where({user_id: user.id}).then(function(collection) {
        res.send(collection);
      });
    }

  });

  app.post('/parks-to-visit', function(req, res) {
    var token = req.headers['x-access-token'];
    if (!token) {
      res.send('No token!');
    } else {
      var user = jwt.decode(token, 'secret');

      new User({ username: user.username })
        .fetch()
        .then(function(foundUser) {
          console.log(foundUser.attributes.id);

          new ParkToVisit({name: req.body.parkName})
            .fetch()
            .then(function(foundParkToVisit) {
              if (foundParkToVisit) {
                console.log('park already exists!');
                res.send('Park already in list!');
              } else {
                var parkToVisit = new ParkToVisit({
                  name: req.body.parkName,
                  address: req.body.address,
                  user_id: foundUser.attributes.id
                });

                parkToVisit.save().then(function(newParkToVisit) {
                  ParksToVisit.add(newParkToVisit);
                  console.log('Added parkToVisit!');
                  res.send(200, newParkToVisit);
                });
              }
            });
        });
    }
  });

  app.get('/visited-parks', function(req, res) {

    var token = req.headers['x-access-token'];
    if (!token) {
      res.send('No token!');
    } else {
      var user = jwt.decode(token, 'secret');
      console.log(user);

      db.knex('visited_parks').where({user_id: user.id}).then(function(collection) {
        res.send(collection);
      });
    }

  });

  app.post('/visited-parks', function(req, res) {
    var token = req.headers['x-access-token'];
    if (!token) {
      res.send('No token!');
    } else {
      var user = jwt.decode(token, 'secret');

      new User({ username: user.username })
        .fetch()
        .then(function(foundUser) {
          console.log(foundUser.attributes.id);

          new VisitedPark({name: req.body.parkName})
            .fetch()
            .then(function(foundVisitedPark) {
              if (foundVisitedPark) {
                console.log('park already exists!');
                res.send('Park already in list!');
              } else {
                var visitedPark = new VisitedPark({
                  name: req.body.parkName,
                  address: req.body.address,
                  user_id: foundUser.attributes.id
                });

                visitedPark.save().then(function(newVisitedPark) {
                  VisitedParks.add(newVisitedPark);
                  console.log('Added visitedPark!');
                  res.send(200, newVisitedPark);
                });
              }
            });
        });
    }
  });

app.get('/get-username', function(req, res) {

  var token = req.headers['x-access-token'];
  
  var user = jwt.decode(token, 'secret');

  res.send(user.username);

});

  app.use('/auth/local', require('./auth/local'));

};