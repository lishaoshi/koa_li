
const { ParameterException } = require ("../core/http-exception")
const { httpException } = require('./HttpException')
const handleHttp = async (ctx, next) => {
  try {
    await next()
  } catch (error) {
   if(error instanceof httpException) {
      ctx.body = {
          msg: error.msg,
          code: error.errorCode,
          request: `${ctx.method} ${ctx.path}` 
      }
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