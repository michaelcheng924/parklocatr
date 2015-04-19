module.exports = function(app) {

  app.use('/auth/local', require('./auth/local'));

};