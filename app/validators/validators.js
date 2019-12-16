const { Rule, LinValidator } = require('../core/lin-validator-v2')

const user = require('../model/user')

class PositiveIntegerValidators extends LinValidator {
    constructor() {
        super()
        this.id = [
            new Rule('isInt', '传入必须是正整数', {min: 1})
        ]
        this.test = [
            new Rule('isInt', '传入正确的test')
        ]
    }
}

/**
 * 用户注册
 */
class UserRegisterValidators extends LinValidator {
    constructor() {
        super()
        this.nickname = [
            new Rule('isLength', '名称最小长度为4，最大长度为16', {
                min:4,
                max: 16
            })
        ],
        this.password = [
            new Rule('isLength', '密码长度最小为6，最大长度为32', {
                min: 6,
                max: 32
            })
        ]
    }
    /**
     * 验证用户名是否已经存在
     */
    async validateUserName(vals) {
        const nickname = vals.body.nickname
        const data = await user.findOne({
            where: {
                nickname: nickname
            }
        })
        if(data) {
            throw new Error('用户名已存在')
        }
    }
    /**
     *验证邮箱是否已经存在
     *
     * @param {*} vals
     * @memberof UserRegisterValidators
     */
    async validateEmail(vals) {
        const email = vals.body.email
        const data = await user.findOne({
            where: {
                email: email
            }
        })
        if(data) {
            throw new Error('邮箱已经存在')
        }
    }
}

/**
 * 用户登录验证
 */
class userLogin extends LinValidator {
    constructor() {
        super()
        this.account = [
            new Rule('isLength', "账号类型不正确",{
                min: 4,
                max: 20
            })
        ],
        this.secret = [
            new Rule('isOptional'),
            new Rule('isLength', '至少6个字符', {
                min: 6,
                max: 128
            })
        ]
    }
}


/**
 * 验证用户id
 */
class valifyUserId extends LinValidator {
    constructor() {
        super()
        this.id = [
            new Rule('isInt', "必须为正整数", {
                min: 1
            })
        ]
    }
}


module.exports = {
    PositiveIntegerValidators,
    UserRegisterValidators,
    userLogin,
    valifyUserId,
    
}
