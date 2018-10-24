const router = require('koa-router')()
// const pool = require('../database/mysql')
const {
  query
} = require('../database/mysql')

// router.prefix('/login')

router.get('/', (ctx, next) => {

  async function selectAllData() {
    let sql = 'SELECT * FROM register'
    let dataList = await query(sql)
    return dataList
  }

  async function getData() {
    let dataList = await selectAllData()
    
    dataList = JSON.stringify(dataList)
    dataList = JSON.parse(dataList)
    console.log(dataList)
  }
  getData()

})


module.exports = router
