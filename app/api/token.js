const Router = require('koa-router')
const { userLogin } = require("../validators/validators")
const { list }  = require("../util/enum")
const user = require("../model/user")
const { generateToken, verifyToken } = require("../util/generateToken")
const router = new Router({
  prefix: '/v1/token'
})


router.post('/login', async (ctx)=>{
  const v = await new userLogin().validate(ctx)
  switch (v.get('body.type')) {
    case list.USER_ACCOUNT:
      const token = await emailLogin(v.get('body.account'), v.get('body.password'))
      ctx.body = {
        msg: "登录成功",
        token
      }
      break;
  
    default:
      break;
  }
})

async function emailLogin(account, secret) {
    const userData = await user.verifyUserLogin(account, secret)
    const token = await generateToken(userData.id)
    return generateToken(userData.id)
}


module.exports = router