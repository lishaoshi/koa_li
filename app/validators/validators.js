const { Rule, LinValidator } = require('../core/lin-validator-v2')

class testValidators extends LinValidator {
    constructor() {
        super()
        this.id = [
            new Rule('isInt', '传入必须是正整数', {min: 1})
        ]
    }
}


module.exports = {
    testValidators
}
