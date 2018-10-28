const mysql = require('mysql')
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  port: 3306,
  password: 'zhusijia',
  database: 'miyou',
  multipleStatements: true //是否允许一个query中有多个MySQL语句（默认为false）
})
connection.connect();

module.exports = connection;
