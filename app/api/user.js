const Router = require('koa-router')
const router = new Router()
const { UserRegisterValidators } = require("../validators/validators")
const user = require('../model/user')

router.post('/v1/user/register', async (ctx, next)=> {
  const v = await new UserRegisterValidators().validate(ctx)
  let body = v.get('body')
  let values = {
    nicename: body.nickName,
    password: body.password,
    email: body.email
  }
  await user.create(values).then(res=> {
    
  })
  ctx.body = '添加成功'
  
  // console.log(body)
  
})
module.exports = router