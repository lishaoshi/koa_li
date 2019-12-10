
const { ParameterException } = require ("../core/http-exception")
const { httpException } = require('./HttpException')
const handleHttp = async (ctx, next) => {
  try {
    await next()
  } catch (error) {
    const errorFlag = error instanceof ParameterException
    const devFlag = process.env.NODE_ENV=="dev"
    // throw error
    // if(true) {
    //   throw error
    // }
   if(errorFlag) {
      ctx.body = {
          msg: error.msg,
          code: error.errorCode,
          request: `${ctx.method} ${ctx.path}` 
      }
      ctx.status = error.code
   } else {
    ctx.body = {
      msg: '服务器错误',
      code: 500
    }
   }
  }
}

module.exports = {
  handleHttp
}