var express = require('express');
var router = express.Router();
var db = require('../utils/db');

router.get('/', function(req, res, next){
	var postid = req.param('postid');
	var replytime = req.param('replytime');

	//按照帖子id返回
	if(postid){
		db.query('SELECT * FROM tbPost where postid=?', [postid], function(rows, fields){
			res.send(JSON.stringify(rows));
		});
	}

	//按照回复时间返回
	if(replytime > 0){
		db.query('SELECT * FROM tbPost where reply_time < ? order by reply_time desc limit 10', [replytime], function(rows, fields){
			res.send(JSON.stringify(rows));
		});
	}else{
		db.query('SELECT * FROM tbPost order by reply_time desc limit 10', [replytime], function(rows, fields){
			res.send(JSON.stringify(rows));
		});
	}
});

router.post('/add', function(req, res, next){
	var uid = req.param('uid');				//从登录态中取
	var name = req.name('name');			//从登录态中取
	var headicon = req.name('headicon');	//从登录态中取
	var anonymous = req.name('anonymous');
	var postTime = new Date().getTime();
	var content = req.param('content');
	var image = req.param('image');
	
	db.query('INSERT INTO tbPost (uid, name, headicon, anonymous, postTime, content, image) VALUES (?, ?, ?, ?, ?, ?, ?)', [uid, name, headicon, anonymous, postTime, content, image], function(rows, feilds){
		res.send('[]');
	});
	
});

