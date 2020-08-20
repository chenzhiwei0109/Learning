const Koa = require('koa')
const Router = require('koa-router')
const cors = require('@koa/cors')
const koaBody = require('koa-body')

const app = new Koa()
const router = new Router();

router.get('/async', async (ctx) => {
  let result = await new Promise((res) => {
    setTimeout(res('hello'), 2000)
  })
  ctx.body = result;
})


router.post('/post', async (ctx) => {
  let { body } = ctx.request
  ctx.body = {
    ...body
  }
})

app.use(koaBody()).use(cors()).use(router.routes()).use(router.allowedMethods())


app.listen(3000, () => {
  console.log('127.0.0.1:3000')
})