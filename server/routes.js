module.exports = function(app) {

  app.get('/', function(req, res) {
    res.render('index');
  });

  app.use('/auth/local', require('./auth/local'));

};