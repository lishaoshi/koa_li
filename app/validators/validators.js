const { Rule, LinValidator } = require('../core/lin-validator-v2')

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


module.exports = {
    PositiveIntegerValidators
}
