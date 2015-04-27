var db = require('../../config/db');
var VisitedPark = require('../models/visitedPark');

var VisitedParks = new db.Collection();

VisitedParks.model = VisitedPark;

module.exports = VisitedParks;
