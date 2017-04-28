var orm = require('../config/orm.js');

var burger = {
	selectAll: function(callBack){
		orm.all('burgers', function(result){
			callBack(result);
		});
	},
	insertOne: function(callBack){
		orm.create('burgers', cols, vals, function(result){
			callBack(result);
		});
	},
	updateOne: function(callBack){
		orm.update('burgers', objColVals, condition, function(result){
			callBack(result);
		});
	}
};

module.exports = burger;