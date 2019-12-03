const Router = require('koa-router')
const router = new Router()
const { httpException } = require('../util/HttpException')

router.get('/test',(ctx, next)=>{
  if(true) {
    const error = new httpException('参数错误123123')
    throw error
  }
})

module.exports = router