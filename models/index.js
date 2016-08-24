var Sequelize = require('sequelize');
var db = new Sequelize('postgres://localhost:5432/tripplanner');

var Activity = db.define('activity', {
	name: {
		type: Sequelize.STRING
	},
	age_range: {
		type: Sequelize.STRING
	}
});


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

var Place = db.define('place', {
	address: {
		type: Sequelize.TEXT
	},
	city: {
		type: Sequelize.STRING
	}, 
	state: {
		type: Sequelize.STRING
	},
	phone:{
		type: Sequelize.STRING
	},
	location: {
		type: Sequelize.ARRAY(Sequelize.FLOAT)
 	}
});

Activity.belongsTo(Place);
Restaurant.belongsTo(Place);
Hotel.belongsTo(Place);

module.exports = {
	Place: Place,
	Restaurant: Restaurant,
	Hotel: Hotel,
	Activity: Activity, 
	db: db

}

