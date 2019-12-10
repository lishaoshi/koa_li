const Router = require('koa-router')
const { UserRegisterValidators } = require("../validators/validators")
const { list }  = require("../util/enum")
const router = new Router({
  prefix: '/v1/token'
})


router.post('/login', async(ctx)=>{
  const v = await new UserRegisterValidators().validate(ctx)
  switch (v.get('body.type')) {
    case list.USER_EMAIL:
      
      break;
  
    default:
      break;
  }
})

async function emailLogin(account, secret) {
    
}


module.export = router