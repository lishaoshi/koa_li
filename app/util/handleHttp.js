
const { ParameterException, HttpException } = require ("../core/http-exception")
const handleHttp = async (ctx, next) => {
  try {
    await next()
  } catch (error) {
    const errorFlag = error instanceof ParameterException || error instanceof HttpException
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
    throw error
   }
  }
}

module.exports = {
  handleHttp
}