/**
 * 处理错误请求，返回信息
 */

 class httpException extends Error {
   constructor() {
     super()
     this.message = '参数错误';
     this.code = 100
   }
 }

 module.exports = {
  httpException
 } 