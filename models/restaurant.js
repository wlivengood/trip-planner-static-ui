var db = require('./_db');
var Place = require('./place');
var Sequelize = require('Sequelize');

var Restaurant = db.define('restaurant', {
	name: {
		type: Sequelize.STRING
	},
	cuisine: {
		type: Sequelize.STRING
	},
	price: {
		type: Sequelize.INTEGER
	}
});



module.exports = Restaurant;