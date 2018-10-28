const express = require('express');
const router = express.Router();
const connection = require('../database/mysql');


/* GET home page. */
router.post('/', function (req, res, next) {
  console.log(req.body);
  let params = req.body;
  let paramsArr = []
  connection.query('select * from userList', function (err, result) {
    if (err) {
      res.json({
        status: '1',
        err: err.message
      })
    } else {
      res.json({
        status: '0',
        result,
      })
    }
  })
  //   connection.end();
});

module.exports = router;
