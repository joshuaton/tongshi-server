var express = require('express');
var router = express.Router();
var db = require('../utils/db');

router.get('/login', function(req, res, next){
	var tel = req.param('tel');
	var verifyCode = req.param('verifycode');
	if(verifyCode == req.session.verifyCode){
		console.log('验证码验证正确');
		db.query('SELECT * FROM tbUser WHERE tel=?', [tel], function(rows, fields){
			if(rows.length > 0){
				console.log('有此用户，直接登录');
				req.session.user = rows[0];
				res.send({'r':0});
			}else{
				console.log('没有此用户，新注册');
				res.send('{r:1001, msg:"未注册"}');
			}
		});
	}else{
		console.log('验证码验证错误');
		res.send('{r:1002, "msg":"验证码错误"}');
	}
});

router.get('/:uid', function(req, res, next) {
	var uid = req.params.uid;
	db.query('SELECT * FROM tbUser WHERE uid=?', [uid], function(rows, fields){
		res.send(JSON.stringify(rows[0]));	
	});
});

router.post('/regist', function(req, res, next){
	var email = req.param('email');
	var name = req.param('name');
	var headicon = req.param('headicon');
	var company = req.param('company');
	var title = req.param('title');

	db.query('INSERT INTO tbUser (email, name, headicon, company, title) VALUES (?, ?, ?, ?, ?)', [email, name, headicon, company, title], function(rows, fields){
		res.send('{}');
	});
});

module.exports = router;
