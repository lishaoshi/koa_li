const Router = require('koa-router')
const router = new Router()
const { PositiveIntegerValidators } = require('../validators/validators.js')
const { httpException } = require('../util/HttpException')
const { ParameterException } = require('../core/http-exception')

router.get('/test/:id',async (ctx, next)=>{
  const v = new PositiveIntegerValidators()
  var msg = await v.validate(ctx)
  ctx.body = '123'
  
})

module.exports = router