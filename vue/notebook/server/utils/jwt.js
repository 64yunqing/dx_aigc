const jwt = require('jsonwebtoken')

function sign(option) {
    return jwt.sign(option, '666', { // 加盐
        expiresIn: 86400
    })
}

function verify() {
    return async (ctx, next) => {
        const jwtToken = ctx.req.headers.authorization
        if (jwtToken) {
            try {
                const decoded = jwt.verify(jwtToken, '666')
                if (decoded.id) { // 合法
                    ctx.userId = decoded.id
                    ctx.nickname = decoded.nickname
                    await next()
                }
            } catch (error) {
                ctx.body = {
                    code: '809',
                    data: error,
                    msg: 'token失效',
                }
            }
        } else {
            ctx.body = {
                code: '808',
                msg: 'token不存在',
            }
        }
    }
}

module.exports = {
    sign,
    verify
}