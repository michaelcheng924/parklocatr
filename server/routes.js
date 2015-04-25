var bodyParser = require('body-parser');

module.exports = function(app) {
  app.use(bodyParser());

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