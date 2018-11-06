var express = require('express');
var router = express.Router();

router.get('/send', function(req, rsp, next){
    var tel = req.param('tel');
    var verifyCode = Math.random().toString().slice(-6);

    //test
    verifyCode = 123456;

    //todo 调用腾讯云发短信的接口，给用户发送验证码

    req.session.verifyCode = verifyCode;

    var result = {};
    result['verifyCode'] = verifyCode;
    rsp.send(result);

});