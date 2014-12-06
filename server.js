var express = require('express');
var app = express();

// app.get(...) is called "a route"
// req = "a request"
// res = "a response"
app.get('/', function(req, res){
	res.send('hello, world');
});

// this "serves files in the public directory"
app.use('/public', express.static('public'));


var port = Number(process.env.PORT || 5000);
app.listen(port);


// "express reference doc"
// expressjs.com/3x/api.html