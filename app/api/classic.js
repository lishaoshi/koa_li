const Router = require('koa-router')
const router = new Router()
const { PositiveIntegerValidators } = require('../validators/validators.js')
const { ParameterException } = require('../core/http-exception')

router.get('/test/:id',async (ctx, next)=>{
  const v = new PositiveIntegerValidators()
  var msg = await v.validate(ctx)
  ctx.body = '123'
  
})

module.exports = router