const router = require('@koa/router')();
const { userLogin } = require('../controllers/index.js')

router.prefix('/user')

router.post('/login', async (ctx) => {
    // 请求体中解析到前端传递的参数，去数据库查询账号密码是否合法
    const { username, password } = ctx.request.body;
    try {
        const result = await userLogin(username, password)
        console.log(result);
        if (result.length) { // 找到了
            const data = {
                id: result[0].id,
                username: result[0].username,
                nickname: result[0].nickname,
            }
            ctx.body = {
                code: '800',
                data,
                msg: '登录成功'
            }
        } else { // 没找到
            ctx.body = {
                code: '8004',
                msg: '用户名或密码错误',
                data: 'error'
            }
        }
    } catch(error) {
        ctx.body = {
            code:'8005',
            msg:'服务器错误',
            data:'error'
        }
    }
})

module.exports = router;