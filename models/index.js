var db = require('./_db');

var Place = require('./place');
var Restaurant = require('./restaurant');
var Activity = require('./activity');
var Hotel = require('./hotel');

Activity.belongsTo(Place);
Restaurant.belongsTo(Place);
Hotel.belongsTo(Place);

module.exports = db;