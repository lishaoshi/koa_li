const jwt = require("jsonwebtoken")
const fs = require("fs")
var path = require("path");
const filePath = path.join(__dirname, ".", "privateKey.js");
const data = fs.readFileSync(filePath, 'utf-8')
const key = data.split('=')[1]
const privateKey = JSON.parse(key)

async function generateToken(userId) {
    let token
    token = jwt.sign({ uid:userId }, privateKey.privateKey, {
        expiresIn: 60
    })
    return token
}

/**
 * 验证token是否已经过期
 */

 async function verifyToken(token) {
    const decoded = await jwt.verify(token, privateKey.privateKey);
    return decoded
 }

module.exports = {
    generateToken,
    verifyToken
}