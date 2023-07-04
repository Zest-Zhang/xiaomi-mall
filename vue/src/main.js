import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Login from './components/Login';
import Register from './components/Register';
import store from './store/store'
import Global from './Global';
import router from './router/router'
import List from "@/components/List";
import Menu from "@/components/Menu";
import Markdown from "@/components/Markdown";
// 引入进度条样式
import nprogress from 'nprogress'
import "nprogress/nprogress.css"

Vue.use(ElementUI);
Vue.use(Global);

Vue.component(Login.name, Login);
Vue.component(Register.name, Register)
Vue.component(List.name, List)
Vue.component(Menu.name, Menu)
Vue.component(Markdown.name, Markdown)

Vue.config.productionTip = false

// 封装 axios 请求
import Axios from 'axios';
Vue.prototype.$axios = Axios;
// 全局请求拦截器
Axios.interceptors.request.use(
    config => {
      nprogress.start()
      return config;
    },
    error => {
      // 跳转error页面
      router.push({ path: "/error" });
      return Promise.reject(error);
    }
);
// 全局响应拦截器
Axios.interceptors.response.use(
    res => {
      nprogress.done()
      if (res.data.code === "401") {
        // 401表示没有登录
        // 提示没有登录
        Vue.prototype.notifyError(res.data.msg);
        // 修改vuex的showLogin状态,显示登录组件
        store.dispatch("setShowLogin", true);
      }
      if (res.data.code === "500") {
        // 500表示服务器异常
        // 跳转error页面
        router.push({ path: "/error" });
      }
      return res;
    },
    error => {
      // 跳转error页面
      router.push({ path: "/error" });
      return Promise.reject(error);
    }
);

// 全局拦截器,在进入需要用户权限 requireAuth 的页面前校验是否已经登录
router.beforeResolve((to, from, next) => {
    const loginUser = store.state.user.user;
    // 判断路由是否设置相应校验用户权限
    if (to.meta.requireAuth) {
        if (!loginUser) {
            // 没有登录，显示登录组件
            store.dispatch("setShowLogin", true);
            // from.name 是导航前的来源路由的名称
            if (from.name == null) {
                // 如果页面没有加载，直接在地址栏输入链接，也需要进入登录验证的页面
                next("/");
                return;
            }
            // 终止导航
            next(false);
            return;
        }
    }
    next();
});

// 相对时间过滤器,把时间戳转换成时间
// 格式: 2020-02-25 21:43:23
Vue.filter('dateFormat', (dataStr) => {
    var time = new Date(dataStr);
    function timeAdd0 (str) {
        if (str < 10) {
            str = '0' + str;
        }
        return str;
    }
    var y = time.getFullYear();
    var m = time.getMonth() + 1;
    var d = time.getDate();
    var h = time.getHours();
    var mm = time.getMinutes();
    var s = time.getSeconds();
    return y + '-' + timeAdd0(m) + '-' + timeAdd0(d) + ' ' + timeAdd0(h) + ':' + timeAdd0(mm) + ':' + timeAdd0(s);
});

new Vue({
    render: h => h(App),
    store,
    router,
}).$mount('#app')
