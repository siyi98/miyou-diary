const mysql = require('mysql')
const pool = mysql.createPool({
  host: 'localhost', //主机
  user: 'root', // 数据库用户名
  password: 'zhusijia', //数据库密码
  database: 'miyou', //数据库名称
  multipleStatements: true, //允许执行多条查询语句
})

module.exports = pool;
