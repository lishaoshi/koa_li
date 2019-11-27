const Router = require('koa-router')
const router = new Router()

router.get('/test',(ctx, next)=>{
  ctx.body = "hello"
})

module.exports = router