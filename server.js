var express = require('express');
var exphbs = require('express3-handlebars');
var app = express();


// from https://github.com/ericf/express-handlebars  in the "app.js" section
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// app.get(...) is called "a route"
// req = "a request"
// res = "a response"
app.get('/', function(req, res){
	//res.send('hello, world');
	
	// now with the handlebars stuff from ericf, do res.render(...) instead of res.send(...)
	//res.render('index');

	// now pass a variable to the renderer
	var randNumber = Math.round(Math.random() * 10);
	res.render('index', {
		randNumber: randNumber
	});

});

// add another route
app.get('/about', function(req, res){
	res.render('about');
});

// this "serves files in the public directory"
app.use('/public', express.static('public'));


var port = Number(process.env.PORT || 5000);
app.listen(port);


// "express reference doc"
// expressjs.com/3x/api.html