# tongshi-server


##验证码
###发送验证码
####url
http://134.175.30.106:3000/sms/send
####req
tel=18666661188
####rsp

```
{
    verifyCode: 123456 //验证码
}
```
***
##用户
###登陆
####url
http://134.175.30.106:3000/users/login
####req
tel=18666661188&code=123456
####rsp
```
{
	r: 0 //登陆成功
}
```
```
{
	r: 1001，
	msg: '未注册'
}
```
```
{
	r: 1002，
	msg: '验证码错误'
}
```

###注册
####url
http://134.175.30.106:3000/users/regist
####req
```
{
	email: 'haha@pinduoduo.com',
	name: '用户名称',
	title: '扫地的CEO'
}
```


###查询用户信息
####url
http://134.175.30.106:3000/users/1
####req
uid在url中，1表示uid
####rsp
```
{
	uid: 1,
	tel: 18666661188,
	name: '用户名称',
	headicon: 'https://www.baidu.com/img/bd_logo1.png',
	company: '拼多多',
	title: '扫地的CEO' 
}
```

***
##帖子
###发表帖子
####url
http://134.175.30.106:3000/posts/add
####req
```
{
	anonymous: 1, //1表示匿名，0表示不匿名
	content: '帖子内容，最多支持1024个汉字',
	image: 'https://www.baidu.com/img/bd_logo1.png' //帖子的配图，图片的url，只支持1张图
}
```

###按照帖子id查询帖子
####url
http://134.175.30.106:3000/posts/post-id/123
####req
123是帖子id
####rsp
```
{
	pid: 123, //帖子id
	uid: 1,	//发表人id
	name: '发表人名称',
	headicon: 'https://www.baidu.com/img/bd_logo1.png', //发表人头像
	anonymous: 1, //是否匿名
	post_time: 1541496337, //发表时间戳，单位秒
	reply_time: 1541496337, //最近回复时间戳，单位秒
	content: '帖子内容',
	image: 'https://www.baidu.com/img/bd_logo1.png' //帖子的配图url
	view_number: 10, //浏览量
	comment_number: 2, //评论量
	up_number: 3 //赞数量
}
```

###按照最后回复时间倒序查询帖子列表
####url
http://134.175.30.106:3000/posts/reply-time/1541496337
####req
1541496337是最后回复时间，查询小于这个时间之前的帖子，返回10个
####rsp
```
[
{帖子详情}
{帖子详情}
]
```
