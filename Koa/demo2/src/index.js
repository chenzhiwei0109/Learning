import koa from 'koa'
const app = new koa
const router = require('./routes')

app.use(router())

app.listen(3000)