/* 用户信息表 */
CREATE TABLE IF NOT EXISTS `tbUser`(
    `uid` INT UNSIGNED AUTO_INCREMENT,      /* uid */
    `email` VARCHAR(50) NOT NULL,           /* 邮箱 */
    `tel` VARCHAR(20) NOT NULL,             /* 手机号 */
    `name` VARCHAR(50) NOT NULL,            /* 用户名 */
    `headicon` VARCHAR(200) NOT NULL,       /* 头像 */
    `company` VARCHAR(50) NOT NULL,         /* 公司 */
    `title` VARCHAR(50) NOT NULL,           /* 职业 */
    PRIMARY KEY ( `uid` )
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*
INSERT INTO tbUser (email, name, headicon, company, title)
VALUES ('111@111.com', '111', 'https://www.baidu.com/img/bd_logo1.png', '山寨公司', '打酱油的');
*/

/* 帖子表 */
CREATE TABLE IF NOT EXISTS `tbPost`(
    `pid` INT UNSIGNED AUTO_INCREMENT,      /* 帖子id */
    `uid` INT UNSIGNED,                     /* 发表人uid */
    `name` VARCHAR(50) NOT NULL,            /* 发表人用户名 */
    `headicon` VARCHAR(200) NOT NULL,       /* 发表人头像 */
    `anonymous` INT UNSIGNED,               /* 是否匿名 */
    `post_time` INT UNSIGNED,               /* 发表时间 */
    `reply_time` INT UNSIGNED,              /* 回复时间 */
    `content` VARCHAR(2048) NOT NULL,       /* 发表文字内容 */
    `image` VARCHAR(200) NOT NULL,          /* 发表图片内容 */
    `view_number` INT UNSIGNED,             /* 浏览量 */
    `comment_number` INT UNSIGNED,          /* 评论量 */
    `up_number` INT UNSIGNED,               /* 赞数量 */
    PRIMARY KEY ( `pid` )
)ENGINE=InnoDB DEFAULT CHARSET=utf8;




