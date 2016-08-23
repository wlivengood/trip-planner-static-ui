var express = require('express');
var app = express();
var volleyball = require('volleyball');
var bodyParser = require('body-parser');
var swig = require('swig');

swig.setDefaults({cache: false});
app.set('views', __dirname + '/views');
app.set('view engine', 'html');
app.engine('html', swig.renderFile);

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(volleyball);

app.use(express.static(__dirname + '/public'));

app.use(function(err, req, res, next) {
	console.log("Oh noes!!!!!");
	console.log(err, err.stack);
});

app.listen(3000, function() {
	console.log("Server is listening intently at port 3000...")
});
