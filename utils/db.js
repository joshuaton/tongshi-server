var mysql = require('mysql');
var databaseConfig = require('./database.config');

module.exports = {
	query : function(sql, callback){
		var connection = mysql.createConnection(databaseConfig);
		connection.connect();
		connection.query(sql, function(err, rows, fields){
			if(err){
				console.log('database query failed');
				throw err;
			}
			if(callback){
				callback(rows, fields);
			}
		});
		connection.end();
	}
}
