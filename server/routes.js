module.exports = function(app) {

  app.get('/login', function(req, res) {
    res.redirect('/#login');
  });

  app.get('/signup', function(req, res) {
    res.redirect('/#signup');
  });

  app.get('/api/test', function(req, res) {
    console.log('testtt')
  });

  app.use('/auth/local', require('./auth/local'));

};