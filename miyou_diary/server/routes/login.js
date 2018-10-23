const router = require('koa-router')()
const pool = require('../database/mysql')

router.prefix('/login')

router.get('/', (ctx, next) => {

  pool.getConnection((err, connection ) => {
    connection.query("select * from register", function (err, rows) {
      if (err) {
        throw err;
      } else {
        return Promise.resolve(rows)
      }
    }).then((rows) => {
      // console.log(rows);
      let results = JSON.stringify(rows);
      results = JSON.parse(results)
      console.log(Array.isArray(results));
      return ctx.body = {
        code: 0,
        msg: '成功',
        data: rows
      }
    })
    //释放连接
    connection.release();
  })
})

module.exports = router;
