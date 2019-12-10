const bcryptjs = require('bcryptjs')

const { sequelize } = require('../core/db')
const { Sequelize, Model } = require('sequelize')

var attributes = {
  nicename: Sequelize.STRING,
  password:  {
    type: Sequelize.STRING,
    set: function(val){
      const salt = bcryptjs.genSaltSync(10)
      const pwt = bcryptjs.hashSync(val, salt)
      this.setDataValue('password', pwt)
    }
  },
  email: {
    type: Sequelize.STRING(64),
    unique: true
  },
  openid: {
    type: Sequelize.STRING(64),
    unique: true
  }
}
class user extends Model {
  static async verifyUserLogin(account, secret) {
    let data = Sequelize.findOne({
      where: {
        email: account
      }
    })
    if(!data) {
      // throw new 
    }
  }
}
user.init(attributes, {
  sequelize,
  modelName: 'user'
})
  

module.exports = user

