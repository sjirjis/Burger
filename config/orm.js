var connection = require('./connection.js');

function printQuestionMarks(num) {
    var arr = [];

    for (var i = 0; i < num; i++) {
        arr.push("?");
    }

    return arr.toString();
};
var orm = {
    all: function(tableName, callBack) {
        var queryString = 'select * from ' + tableName + ';';

        console.log(queryString);

        connection.query(queryString, function(err, result) {
            if (err) {throw err;}

            callBack(result);
            console.log(result);
        });
    },
    create: function(tableName, cols, vals, callBack) {
        var query = 'insert into ' + tableName 
        + ' (' + cols.toString() + ') ' 
        + ' values (' + printQuestionMarks(vals.length) + ')' + ';';

        console.log(query);

        connection.query(query, vals, function(err, result) {
            if (err) throw err;

            callBack(result);
        });
    },
    update: function(tableName, objColVals, condition, callBack) {
        var query = 'update ' + tableName 
        + ' set ' + objToSql(objColVals) 
        + ' where ' + condition + ';';

        console.log(query);

        connection.query(query, function(err, result) {
            if (err) throw err;

            callBack(result);
        });
    }
};


module.exports = orm;