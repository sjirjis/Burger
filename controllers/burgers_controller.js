var express = require('express'),
	burger = require('../models/burger.js');

var router = express.Router();

router.get('/index', function(req, res){
	burger.selectAll(function(data){
		var hbsObject = {burgers: data};

		console.log(hbsObject);

		//res.render('index', hbsObject);
		res.send('test');
	});
});

module.exports = router;