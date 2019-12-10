const Sequelize = require('sequelize')
const {
  dbName,
  userName,
  password,
  host,
  port
} =  require('../../config/config').database
const sequelize = new Sequelize(dbName, userName, password, {
  dialect: 'mysql',
  host: host,
  port,
  timezone: '+08:00'
})

sequelize.sync()
module.exports = {
  sequelize
}