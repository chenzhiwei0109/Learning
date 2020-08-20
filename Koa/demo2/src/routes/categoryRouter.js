const koaRouter = require('koa-router')
const category = require('../controller/category')
const router = new koaRouter()
router.get('/category',category)

module.exports = router