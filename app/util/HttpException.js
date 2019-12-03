/**
 * 处理错误请求，返回信息
 */

 class httpException extends Error {
   constructor(msg) {
     super()
     this.message = msg || '参数错误';
     this.code = 1001
   }
 }

 module.exports = {
  httpException
 } 