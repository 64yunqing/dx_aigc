const router = require('@koa/router')();
const jwt = require('../utils/jwt.js');
const { findNoteListByType,findNoteDetailById, notePublish } = require('../controllers/index.js');
const { formateTime } = require('../utils/formateTime.js');
router.get('/findNoteListByType',jwt.verify(), async (ctx,next) => {
    // 检验token合理 再去数据库中查找数据返回给前端
    const { note_type } = ctx.request.query;
    const res = await findNoteListByType(note_type,ctx.userId)
    
    try{if(res.length){
        ctx.body = {
            code:800,
            data:res,
            msg:'查询成功'
        }
    }else {
        ctx.body = {
            code:'801',
            data:res,
            msg:'当前分类下没有数据'
        }
    }}catch(error){
        ctx.body = {
            code:'802',
            data:res,
            msg:'查询失败'
        }
    }
})


router.get('/findNoteDetailById',jwt.verify(), async (ctx) => {
    // 检验token合理 再去数据库中查找数据返回给前端
    const { id } = ctx.request.query;
    try{  
        const res = await findNoteDetailById(id)
        if(res.length){
        ctx.body = {
            code:800,
            data:res,
            msg:'查询成功'
        }
    }else {
        ctx.body = {
            code:'801',
            data:res,
            msg:'当前分类下没有数据'
        }
    }}catch(error){
        ctx.body = {
            code:'802',
            data:res,
            msg:'查询失败'
        }
    }
})

router.post('/note-publish', jwt.verify(), async (ctx) => {
    const { title,note_type,note_content,head_img } = ctx.request.body;
    const c_time =formateTime(new Date())
    const m_time =formateTime(new Date())

    try{  
        const res = await notePublish({
            title,
            note_type,
            note_content,
            head_img,
            c_time,
            m_time,
            userId:ctx.userId,
            nickname:ctx.nickname         
        })
        if(res.affectedRows){
            ctx.body = {
                code:800,
                data:'success',
                msg:'发布成功'
            }
        }else{
            ctx.body = {
                code:'804',
                data:'fail',
                msg:'发布失败'
            }
        }
        console.log(res);
        }catch(error){
        ctx.body = {
            code:'805',
            data:'error',
            msg:'服务端异常'
        }
    }
}
)
module.exports = router;