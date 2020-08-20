//mymiddleware.js
const Koa = require('koa')
const app = new Koa()
const mymiddleware = function async(ctx, next) {
  ctx.body = 'helloworld'
  next()  //调用完成会执行next后面的内容
  console.log('ending')//next之后不会执行
}
const mymiddleware2 = function async(ctx, next) {
  ctx.body +='helloworld'
  next()
  console.log('ending2')//next之后不会执行
}
app.use(mymiddleware).use(mymiddleware2);
app.listen(3000)