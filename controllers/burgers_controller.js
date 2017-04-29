var express = require('express'),
    burger = require('../models/burger.js');

var router = express.Router();

router.get('/index', function(req, res) {
    burger.selectAll(function(data) {

        res.render('index', { burgers: data });
    });
});
router.post('/index', function(req, res) {
    console.log(req.body.textArea);

    burger.insertOne(
        ['burger_name', 'devoured'], [req.body.textArea, false],
        function(insertData) {
            console.log(insertData);

            var condition = 'id = ' + insertData.insertId
            
            burger.selectOne(condition,
                function(data) {
                    console.log(data[0]);

                    res.render('index', {
                        burgerId: data[0].id,
                        burgerName: data[0].burger_name
                    });
                }
            );
        }
    );
});

router.put('/index', function(req, res) {
    burger.updateOne(
        ['devoured'], 1),
        function(data) {
            console.log(data);

            if (data.affectedRows = 1) { res.end() };
        }
})

router.get('/', function(req, res) {
    res.send('test response from burgers_controller at /');
});

module.exports = router;
