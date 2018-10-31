const express = require('express');
const router = express.Router();
const query = require('../database/mysql')


router.post('/', function (req, res, next) {
  console.log(req.body)
  console.log(req.body.username)
  let sql = 'INSERT INTO userlist (userName,passWord,name,email,phone) VALUES(?,?,?,?,?)';
  let sqlParams = [
    req.body.username,
    req.body.password,
    req.body.name,
    req.body.email,
    req.body.tel
  ]
  query(sql,sqlParams,function(err,result){
    if(err){
      res.json({
        status:'1',
        message:'注册失败！'
      })
    }else{
      res.json({
        status:'0',
        message:'注册成功！'
      })
    }
  })

});

module.exports = router;
