var db = require('../../config/db');
var ParkToVisit = require('../models/parkToVisit');

var ParksToVisit = new db.Collection();

ParksToVisit.model = ParkToVisit;

module.exports = ParksToVisit;
