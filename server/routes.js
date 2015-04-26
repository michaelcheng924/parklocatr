var bodyParser = require('body-parser');
var session = require('express-session');
var bcrypt = require('bcrypt-nodejs');
var User = require('./app/models/user');
var Users = require('./app/collections/users');

module.exports = function(app) {
  
  app.use(bodyParser());
  app.use(session({
    secret: 'shhhsupersecretsecret',
    resave: false,
    saveUninitialized: true
  }));

  app.get('/dashboard', function(req, res) {
    console.log('get dashboard!')
    if (!req.session.isAuthenticated) {
      res.redirect('/#login');
    } else {
      res.redirect('/#dashboard');
    }
  });

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
              req.session.isAuthenticated = true;
              console.log('test!!')
              res.redirect('/dashboard');
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
              req.session.isAuthenticated = true;
              res.redirect('/dashboard');
            });
          });
          
        }
      });
  });

  app.use('/auth/local', require('./auth/local'));

};