const express = require('express');
const router = express.Router();
const query = require('../database/mysql');


router.post('/', function (req, res, next) {
  console.log(req.body);
  res.json({
    status:'0',
    message:'访问成功'
  })
});

module.exports = router;
