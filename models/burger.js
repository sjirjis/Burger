var orm = require('../config/orm.js');

var burger = {
	selectAll: function(callBack){
		orm.all('burgers', function(result){
			callBack(result);
		});
	},
	selectOne: function(condition, callBack){
		orm.one('burgers', condition, function(result){
			callBack(result);
		});
	},	
	insertOne: function(cols, vals, callBack){
		orm.create('burgers', cols, vals, function(result){
			callBack(result);
		});
	},
	updateOne: function(cols, vals, condition, callBack){
		orm.update('burgers', cols, vals, condition, function(result){
			callBack(result);
		});
	}
};

module.exports = burger;