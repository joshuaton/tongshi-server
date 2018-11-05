var express = require('express');
var router = express.Router();
var mysql = require('mysql');

/* GET users listing. */
router.get('/', function(req, res, next) {

	var uid = req.param('uid');

	var connection = mysql.createConnection({
		host: 'localhost',
		user: 'root',
		password: '123456',
		database: 'tongshi'
	});
	connection.connect();

	connection.query('SELECT * FROM tbUser WHERE uid="'+uid+'"', function(err, rows, fields){
		if(err) throw err;
		if(rows.length > 0){
			res.send(JSON.stringify(rows[0]));
		}else{
			res.send('[]');
		}
	});

	connection.end();

});

router.post('/add', function(req, res, next){
	var email = req.param('email');
	var name = req.param('name');
	var headicon = req.param('headicon');
	var company = req.param('company');
	var title = req.param('title');
	
	var connection = mysql.createConnection({
		host: 'localhost',
		user: 'root',
		password: '123456',
		database: 'tongshi'
	});
	connection.connect();

	connect.query('INSERT INTO tbUser (email, name, headicon, company, title) VALUES ("'+email+'", "'+name+'", "'+headicon+'", "'+company+'", "'+title+'")', function(err, rows, fields){
		if(err) throw err;
		res.send(200);
	});
});

module.exports = router;
