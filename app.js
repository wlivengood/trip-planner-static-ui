var express = require('express');
var app = express();
// var volleyball = require('volleyball');
var bodyParser = require('body-parser');
var swig = require('swig');
var models = require('./models');

swig.setDefaults({cache: false});
app.set('views', __dirname + '/views');
app.set('view engine', 'html');
app.engine('html', swig.renderFile);

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// app.use(volleyball);

app.use(express.static(__dirname + '/node_modules'));


app.get('/', function(req, res, next) {
	var hotels, restaurants, activities, places;
	return models.Hotel.findAll()
	.then(function(results) {
		hotels = results;
		return models.Restaurant.findAll();
	})
	.then(function(results) {
		restaurants = results;
		return models.Activity.findAll();
	})
	.then(function(results) {
		activities = results;
		return models.Place.findAll();
	})
	.then(function(results) {
		places = results;
		res.render('index', {hotels: hotels, restaurants: restaurants, activities: activities, places: places});
	})
	.catch(next);
})

app.use(function(err, req, res, next) {
	console.log("Oh noes!!!!!");
	console.log(err, err.stack);
	res.render('error', {stack: err.stack});
});



models.Hotel.sync({})
.then(function(){
	models.Restaurant.sync({})
})
.then(function(){
	models.Activity.sync({})
})
.then(function(){
	models.Place.sync({})
})
.then(function(){
	app.listen(3000, function() {
		console.log("Server is listening intently at port 3000...")
	});
})
.catch(console.error);


