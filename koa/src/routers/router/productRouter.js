
/* 商品模块路由 */
const Router = require('koa-router');
const productController = require('../../controllers/productController')

let productRouter = new Router();

productRouter
    .post('/product/getPromoProduct', productController.GetPromoProduct)
    .post('/product/getHotProduct', productController.GetHotProduct)

module.exports = productRouter;

