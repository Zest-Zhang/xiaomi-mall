
/* 商品模块控制器 */
const productDao = require('../models/dao/productDao');
module.exports = {
    /**
     * 根据商品分类名称获取首页展示的商品信息
     * @param {Object} ctx
     */
    GetPromoProduct: async ctx => {
        let { categoryName } = ctx.request.body;
        // 根据商品分类名称获取分类id
        const categoryID = await productDao.GetCategoryId(categoryName);
        // 根据商品分类id获取首页展示的商品信息
        const Product = await productDao.GetPromoProduct(categoryID);

        ctx.body = {
            code: '001',
            Product
        }
    },
    /**
     * 根据商品分类名称获取热门商品信息
     * @param {Object} ctx
     */
    GetHotProduct: async ctx => {
        let { categoryName } = ctx.request.body;
        const categoryID = [];

        for (let i = 0; i < categoryName.length; i++) {
            // 根据商品分类名称获取分类id
            const category_id = await productDao.GetCategoryId(categoryName[i]);
            categoryID.push(category_id);
        }
        // 根据商品分类id获取商品信息
        const Product = await productDao.GetProductByCategory(categoryID, 0, 7);

        ctx.body = {
            code: '001',
            Product
        }
    },
}