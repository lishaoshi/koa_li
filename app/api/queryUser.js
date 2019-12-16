const Router = require('koa-router')
const router = new Router({
    prefix: "/api/user"
})
const { Auth } = require('../../middlewares/auth')
const { valifyUserId } = require('../validators/validators')



router.get('/:id', new Auth().m, async(ctx, next)=>{
    
    const data = await new valifyUserId().validate(ctx)
    const userId = data.get('path')
    console.log(data)
})

module.exports = router