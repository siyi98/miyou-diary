const express = require('express');
const router = express.Router();
const connection = require('../database/mysql');


/* GET home page. */
router.get('/', function (req, res, next) {
  connection.connect();
  
});

module.exports = router;
