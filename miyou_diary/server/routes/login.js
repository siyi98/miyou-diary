const express = require('express');
const router = express.Router();
const query = require('../database/mysql');


router.post('/', function (req, res, next) {
  // console.log(req.body);
  console.log(req.cookies)
  let username = req.body.username;
  let password = req.body.password;
  let sql = "select * from userlist where userName = '" + username + "' and passWord = '" + password + "'";
  query(sql, null, function (err, result) {
    if (result.length == 0) {
      res.json({
        status: '1',
        msg: err
      })
    } else if (result != null) {
      res.cookie("username", username, {
        path: '/',
        expires: new Date(Date.now() + 100),
        // httpOnly: true,   //禁止客户端读取cookie
        maxAge: 1000 * 60 * 60, //有效时长，即90000毫秒后过期，String
      })
      res.json({
        status: '0',
        msg: '登录成功'
      })

    }
  })


});

module.exports = router;
