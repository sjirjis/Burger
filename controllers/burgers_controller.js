var express = require('express'),
    burger = require('../models/burger.js');

var router = express.Router();

router.get('/index', function(req, res) {
    burger.selectAll(function(data) {

        res.render('index', { burger: data });
        // console.log(data);
    });
});
router.post('/index', function(req, res) {

    burger.insertOne(
        ['burger_name', 'devoured'], [req.body.newBurger, false],
        function(insertData) {

            res.end();
        }
    );
});

router.put('/index', function(req, res) {
    console.log(req.body);
    burger.updateOne(
        'devoured', 1, 'id = ' + req.body.eatenBurgerId,
        function(data) {

            res.end();
        }
    );
});

module.exports = router;
