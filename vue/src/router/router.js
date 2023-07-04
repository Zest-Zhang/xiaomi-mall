
import Vue from 'vue'
import Router from 'vue-router'
import Error from '../components/Error'
import Home from '../pages/Home'
import Goods from "@/pages/Goods";
import Details from "@/pages/Details";
import ShoppingCart from "@/pages/ShoppingCart";
import Collect from "@/pages/Collect";


Vue.use(Router)

const routes = [
    {
        path: '/home',
        name: 'Home',
        component: Home
    },
    {
        path: '/',
        redirect:"/home"
    },
    {
        path: '/error',
        name: 'Error',
        component: Error
    },
    {
        path: '/goods',
        name: 'Goods',
        component: Goods
    },
    {
        path: '/goods/details',
        name: 'Details',
        component: Details
    },
    {
        path: '/shoppingCart',
        name: 'ShoppingCart',
        component: ShoppingCart,
        meta: {
            requireAuth: true // 需要验证登录状态
        }
    },
    {
        path: '/collect',
        name: 'Collect',
        component: Collect,
        meta: {
            requireAuth: true // 需要验证登录状态
        }
    },

]

const router = new Router({
    mode: 'history',
    routes
})


// 禁止全局路由错误处理打印
const originalPush = Router.prototype.push;
Router.prototype.push = function push (location, onResolve, onReject) {
    if (onResolve || onReject)
        return originalPush.call(this, location, onResolve, onReject)
    return originalPush.call(this, location).catch(err => err)
}

export default router
