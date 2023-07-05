
/* 管理子路由 */
const Router = require('koa-router');

let Routers = new Router();

const usersRouter = require('./router/userRouter');
const resourcesRouter = require('./router/resourcesRouter');
const productRouter = require('./router/productRouter');
const shoppingCartRouter = require('./router/shoppingCartRouter');
const orderRouter = require('./router/orderRouter');
const collectRouter = require('./router/collectRouter');

Routers.use(usersRouter.routes());
Routers.use(resourcesRouter.routes())
Routers.use(productRouter.routes())
Routers.use(shoppingCartRouter.routes());
Routers.use(orderRouter.routes())
Routers.use(collectRouter.routes());

module.exports = Routers;