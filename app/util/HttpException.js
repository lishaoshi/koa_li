/**
 * 处理错误请求，返回信息
 */

 class httpException extends Error {
   constructor(msg) {
     super()
     this.msg = msg ||　'错误';
     this.code = 100
   }
 }

 module.exports = {
  httpException
 } 