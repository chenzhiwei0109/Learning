const combineRoutes = require('koa-combine-routers')

const userRouter = require('./userRouter')
const categoryRouter = require('./categoryRouter')



// const userRouter = new router()
// const categoryRouter = new router()

module.exports = combineRoutes(
  userRouter,
  categoryRouter
)