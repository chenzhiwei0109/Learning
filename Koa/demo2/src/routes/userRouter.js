const koaRouter = require('koa-router')
const user = require('../controller/user')
const router = new koaRouter()
router.get('/user',user)

module.exports = router