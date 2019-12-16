const basicAuth = require("basic-auth")
const { Forbbiden } = require("../app/core/http-exception.js")
// const jwt = require('jsonwebtoken')
const { verifyToken } = require("../app/util/generateToken")
class Auth {
    constructor() {}
    get m() {
        return async (ctx, next)=>{
            const token = basicAuth(ctx.req)
            let errorMsg = "token不合法"
            if(!token || !token.name) {
                throw new Forbbiden(errorMsg)
            }
            try {
                const decoded = await verifyToken(token.name)
                ctx.body = decoded;
            } catch(err) {
                errorMsg = "用户已失效，请重新登录"
                throw new Forbbiden(errorMsg)
            }
            
            // if(!decoded) {
               
            // }
            await next();
        }
    }
}

module.exports = {
    Auth
}