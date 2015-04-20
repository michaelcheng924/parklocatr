module.exports = function(app) {

  app.get('/api/test', function(req, res) {
    console.log('testtt')
  });

  app.use('/auth/local', require('./auth/local'));

};