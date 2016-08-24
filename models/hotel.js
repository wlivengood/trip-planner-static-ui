var db = require('./_db');
var Place = require('./place');
var Sequelize = require('Sequelize');

var Hotel = db.define('hotel', {
	name: {
		type: Sequelize.STRING
	},
	num_stars: {
		type: Sequelize.INTEGER
	},
	amenities: {
		type: Sequelize.STRING
	}
});



module.exports = Hotel;