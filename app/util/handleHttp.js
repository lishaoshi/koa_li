
// const { httpException } = require ("./HttpException")
const handleHttp = async (cnx, next) => {
  try {
    await next()
  } catch (error) {
    cnx.body = error
  }
}

module.exports = {
  handleHttp
}