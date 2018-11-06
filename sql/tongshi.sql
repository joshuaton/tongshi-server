/*用户信息表User*/
CREATE TABLE IF NOT EXISTS `tbUser`(
   `uid` INT UNSIGNED AUTO_INCREMENT,   /*uid*/
   `email` VARCHAR(50) NOT NULL,        /*邮箱*/
   `name` VARCHAR(50) NOT NULL,         /*用户名*/
   `headicon` VARCHAR(200) NOT NULL,    /*头像*/
   `company` VARCHAR(50) NOT NULL,      /*公司*/
   `title` VARCHAR(50) NOT NULL,        /*职业*/
   PRIMARY KEY ( `uid` )
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*
INSERT INTO tbUser (email, name, headicon, company, title)
VALUES ('111@111.com', '111', 'https://www.baidu.com/img/bd_logo1.png', '山寨公司', '打酱油的');
*/



