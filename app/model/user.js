const bcryptjs = require('bcryptjs')

const { sequelize } = require('../core/db')
const { Sequelize, Model } = require('sequelize')
const { ParameterException } = require ("../core/http-exception")

var attributes = {
  nickname: Sequelize.STRING,
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
    let data = await user.findOne({
      where: {
        nickname: account
      }
    })
    if(!data) {
      // throw new 
      throw new ParameterException("账号不存在")
    } else {
      let validateUser = bcryptjs.compareSync(secret, data.password);
      if(validateUser) {
        return data
      } else {
        throw new ParameterException("密码不正确")
      }
    }
   
  }
}
user.init(attributes, {
  sequelize,
  modelName: 'users'
})
  

module.exports = user

