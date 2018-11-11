const express = require('express');
const router = express.Router();
const query = require('../database/mysql');


router.post('/', function (req, res, next) {
  let username = req.body.username;
  let password = req.body.password;
  let user = req.session.user = {
    username: username,
    password: password,
    id: req.sessionID
  }
  // console.log("session", req.session)
  // console.log("cookie", req.cookies)

  let sql = "select * from userlist where userName = '" + username + "' and passWord = '" + password + "'";
  query(sql, null, function (err, result) {
    if (result.length == 0) {
      res.session.user = null;
      res.json({
        status: '1',
        msg: err
      })
    } else if (result != null) {

      // res.cookie('sid', user.id, {
      //   maxAge: 1000 * 60 * 60,
      //   httpOnly: true,
      //   path: '/'
      // })
      result = JSON.stringify(result);
      result = JSON.parse(result)

      let data = {
        username: result[0].userName,
        name: result[0].name,
        email: result[0].email,
        phone: result[0].phone,
        reg_time: result[0].reg_time
      }

      res.json({
        status: '0',
        msg: '登录成功',
        userInfo: data
      })

    }
  })


});

router.get('/cancel', function (req, res, next) {
  console.log(req.cookies)

  req.session.destroy(function (err) {
    if (err) {
      res.json({
        status: '1',
        msg: '网络繁忙,请您稍后再试'
      })
      return;
    }
    res.clearCookie('key_id')
    res.json({
      status: '0',
      msg: '退出成功'
    })
  })

})

module.exports = router;
