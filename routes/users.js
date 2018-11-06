var express = require('express');
var router = express.Router();
var db = require('../utils/db');

router.get('/', function(req, res, next) {

	var uid = req.param('uid');
	db.query('SELECT * FROM tbUser WHERE uid="'+uid+'"', function(rows, fields){
		if(rows.length > 0){
			res.send(JSON.stringify(rows[0]));
		}else{
			res.send('[]');
		}	
	});
});

router.post('/add', function(req, res, next){
	var email = req.param('email');
	var name = req.param('name');
	var headicon = req.param('headicon');
	var company = req.param('company');
	var title = req.param('title');

	
	db.query('INSERT INTO tbUser (email, name, headicon, company, title) VALUES ("'+email+'", "'+name+'", "'+headicon+'", "'+company+'", "'+title+'")', function(rows, fields){
		res.send(200);
	});
});

module.exports = router;
