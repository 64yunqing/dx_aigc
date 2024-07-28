const jwt = require('jsonwebtoken')

function sign(option) {
    return jwt.sign(option,'666',{
        expiresIn: 86400
    }) // 加盐
}

module.exports = {
    sign
}