var express = require('express');
var router = express.Router();
var mysql = require('mysql');

router.get('/', function(req, res, next){
	var postid = req.param('postid');

	var connection = mysql.createConnection
});
