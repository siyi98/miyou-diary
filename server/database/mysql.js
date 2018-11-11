const mysql = require('mysql')
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  port: 3306,
  password: 'zhusijia',
  database: 'miyou',
  multipleStatements: true //是否允许一个query中有多个MySQL语句（默认为false）
});

// 封装数据库操作方法
const query = (sql, sqlParams, callback) => {
  pool.getConnection(function (err, connection) {
    if (err) {
      callback(err, null, null);
    } else {
      connection.query(sql, sqlParams, function (queryErr, vals, fields) {
        connection.release(); //释放连接
        callback(queryErr, vals, fields)
      })
    }
  })
}

module.exports = query
