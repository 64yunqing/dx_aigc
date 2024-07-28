const router = require('@koa/router')();
const { userLogin } = require('../controllers/index.js')
const jwt = require('../utils/jwt.js')
const { userFind } = require('../controllers/index.js')
router.prefix('/user')
const { userRegister } = require('../controllers/index.js')

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
            // 生成token
            const token = jwt.sign(data)
            ctx.body = {
                code: 800,
                data,
                msg: '登录成功',
                token
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

// 注册
router.post('/register', async (ctx) => {
    const { username, password, nickname } = ctx.request.body
    if (!username || !password || !nickname) {
      ctx.body = {
        code: '801',
        msg: '账号密码或昵称不能为空'
      }
      return
    }
    try {
      // 判断账号是否存在
      const findRes = await userFind(username)
      if (findRes.length) {  // 账号已存在
        ctx.body = {
          code: '803',
          data: 'error',
          msg: '账号已存在'
        }
        return
      }
      // 网数据库写入
      const res = await userRegister({ username, password, nickname })
      console.log(res);
      if (res.affectedRows) {
        ctx.body = {
          code: 800,
          data: 'success',
          msg: '注册成功'
        }
      } else {
        ctx.body = {
          code: '804',
          data: 'fail',
          msg: '注册失败'
        }
      }
    } catch (error) {
      ctx.body = {
        code: '805',
        data: error,
        msg: '服务器异常'
      }
    }
  })
module.exports = router;