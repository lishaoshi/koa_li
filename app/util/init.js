const requireDirectory = require('require-directory')
const Router = require('koa-router')

class InitClass {
  static initPro(app) {
    this.app = app
    this.initManageRouter()
  }

  static initManageRouter() {
    const modules = requireDirectory(module, '../api', { visit: whenLoadModule })
    function whenLoadModule(obj) {
      if (obj instanceof Router) {
        InitClass.app.use(obj.routes())
      }
    }
  }
}

module.exports = InitClass