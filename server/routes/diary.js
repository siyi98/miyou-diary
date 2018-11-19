const express = require('express')
const router = express.Router()
const query = require('../database/mysql')

function createId() {
  return (
    (Math.random() * 10000).toString(16).substr(0, 2) +
    new Date().getTime() +
    Math.random()
    .toString()
    .substr(2, 5)
  )
}

router.get('/', function (req, res, next) {
  if (req.session.user['username']) {
    let username = req.session.user['username'];
    let sql = "select * from diarylist where userName = '" + username + "' order by createdate desc"
    query(sql, null, function (err, result) {
      if (err) {
        res.json({
          status: '1',
          msg: err
        })
        return;
      }
      res.json({
        status: '0',
        result: result,
        msg: '获取成功'
      })
    })
  }
})

router.get('/getAll', function (req, res, next) {
  let sql = "select * from diarylist where status = '1' order by createdate desc";
  query(sql, null, function (err, result) {
    if (err) {
      res.json({
        status: '1',
        msg: err
      })
      return;
    }
    res.json({
      status: '0',
      result: result,
      msg: '查询成功'
    })
  })
})

router.post('/add', function (req, res, next) {
  console.log(req.body)
  let id = createId()
  if (req.session.user == null) {
    res.json({
      status: '1',
      msg: '身份验证已过期'
    })
  } else if (req.session.user != null) {
    let id = createId();
    let username = req.session.user['username'];
    console.log(username)
    let sql = 'INSERT INTO diarylist (diaryId,userName,content,date,weekday) VALUES(?,?,?,?,?)'
    let sqlParams = [id, username, req.body.text, req.body.date, req.body.weekday]
    query(sql, sqlParams, function (err, result) {
      if (err) {
        res.json({
          status: '1',
          msg: err
        })
      } else {
        res.json({
          status: '0',
          msg: '提交成功'
        })
      }
    })
  }
})

router.post('/search', function (req, res, next) {
  console.log(req.body)
  let id = req.body.diaryId
  let sql = "select content,date,weekday from diarylist where diaryId = '" + id + "' ";
  query(sql, null, function (err, result) {
    if (err) {
      res.json({
        status: '1',
        msg: err
      })
    } else {
      console.log(result)
      res.json({
        status: '0',
        result: result
      })
    }
  })
})

router.post('/toshare', function (req, res, next) {
  console.log(req.body);
  let id = req.body.id;
  let sql = "UPDATE diarylist SET status = '1' WHERE diaryId = '" + id + "'";
  query(sql, null, function (err, result) {
    if (err) {
      res.json({
        status: '1',
        msg: err
      })
      return;
    }
    res.json({
      status: '0',
      msg: '分享成功'
    })
  })
})

module.exports = router