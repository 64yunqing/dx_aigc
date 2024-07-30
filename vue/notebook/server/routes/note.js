const router = require('@koa/router')();
const jwt = require('../utils/jwt.js');
const { findNoteListByType } = require('../controllers/index.js');

router.get('/findNoteListByType',jwt.verify(), async (ctx,next) => {
    // 检验token合理 再去数据库中查找数据返回给前端
    const { note_type } = ctx.request.query;
    const res = await findNoteListByType(note_type,ctx.userId)
    
    if(res){
        console.log(res);
        return res;
    }
})
module.exports = router;