var mysql = require('mysql');

var connection = mysql.createConnection({
    port: 3306,
    host: 'https://cryptic-basin-74989.herokuapp.com/',
    user: 'root',
    password: 'root',
    database: 'F98D0D808D648E32DF07A277F1697154',
    connectionLimit: 5
});

connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
    	return;
});

module.exports = connection;
