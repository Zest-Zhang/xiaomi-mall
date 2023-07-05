
/* 管理子路由 */
const Router = require('koa-router');

let Routers = new Router();

const usersRouter = require('./router/userRouter');
const resourcesRouter = require('./router/resourcesRouter');
const productRouter = require('./router/productRouter');
const shoppingCartRouter = require('./router/shoppingCartRouter');

Routers.use(usersRouter.routes());
Routers.use(resourcesRouter.routes())
Routers.use(productRouter.routes())
Routers.use(shoppingCartRouter.routes());

module.exports = Routers;