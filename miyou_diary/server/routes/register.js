const express = require('express');
const router = express.Router();
const connection = require('../database/mysql');


/* GET home page. */
router.post('/', function (req, res, next) {
  console.log(req.query)
  // console.log(JSON.parse(req.body));
  // console.log(req)
  // let params = req.body;
  // let dataArr = [
  //   params.username,
  //   params.password,
  //   params.name,
  //   params.email,
  //   params.tel
  // ]

  // let addData = 'insert into userList(userId,userName,passWord,name,email,phone) VALUE(0,?,?,?,?,?)'
  // connection.query(addData, dataArr, function (err, result) {
  //   if (err) {
  //     res.json({
  //       status: '1',
  //       err: err.message
  //     })
  //   } else {
  //     res.json({
  //       status: '0',
  //       result,
  //     })
  //   }
  // })
  //   connection.end();
});

module.exports = router;
