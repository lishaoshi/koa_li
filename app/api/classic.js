const Router = require('koa-router')
const router = new Router()
const { testValidators } = require('../validators/validators.js')
const { httpException } = require('../util/HttpException')
const { ParameterException } = require('../core/http-exception')
// const {} = require('../') 

router.get('/test/:id',(ctx, next)=>{
  // console.log(123)
    // const error = new ParameterException('参数错误')
    // throw error
  // if(true) {
  //   const error = new ParameterException('参数错误')
  //   throw error
  // }
  const v = new testValidators()
  v.validate(ctx)
  // var msg = v.validate(ctx)
  // ctx.body = msg
  
})

module.exports = router