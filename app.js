const koa = require('koa')
const app = new koa()
// const classic = require('./app/api/classic')
const { handleHttp } = require('./app/util/handleHttp')
const InitClass = require('./app/util/init')

app.use(handleHttp)
InitClass.initPro(app)
app.listen(8001)