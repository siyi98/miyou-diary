const router = require('koa-router')()

// router.prefix('/register')

router.get('/', async (ctx, next) => {
  ctx.body = 'koa2 stringfasdfaf'
})
module.exports = router
