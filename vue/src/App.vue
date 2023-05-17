<template>
  <div id="app">
    <el-container>
      <!-- 顶部导航 -->
      <div class="topbar">
        <div class="nav">
          <ul>
            <li v-if="!this.$store.getters.getUser">
              <el-button type="text" @click="login">登录</el-button>
              <span class="sep">|</span>
              <el-button type="text" @click="register = true">注册</el-button>
            </li>
            <li v-else>
              欢迎
              <!-- 弹出框 -->
              <el-popover placement="top" width="180" v-model="visible">
                <p>确定退出登录吗？</p>
                <div style="text-align: right; margin: 10px 0 0">
                  <el-button size="mini" type="text" @click="visible = false">取消</el-button>
                  <el-button type="primary" size="mini" @click="logout">确定</el-button>
                </div>
                <el-button type="text" slot="reference">{{this.$store.getters.getUser.userName}}</el-button>
              </el-popover>
            </li>
            <li>
              <router-link to="/order">我的订单</router-link>
            </li>
            <li>
              <router-link to="/collect">我的收藏</router-link>
            </li>
            <li :class="getNum > 0 ? 'shopCart-full' : 'shopCart'">
              <router-link to="/shoppingCart">
                <i class="el-icon-shopping-cart-full"></i> 购物车
                <span class="num">({{getNum}})</span>
              </router-link>
            </li>
          </ul>
        </div>
      </div>

      <!-- 导航菜单 -->
      <el-header>
        <el-menu
            :default-active="activeIndex"
            class="el-menu-demo"
            mode="horizontal"
            active-text-color="skyblue">
          <div class="logo">
            <a>
              <img src="./assets/images/logo.png" alt height="58px"/>
            </a>
          </div>
          <el-menu-item index="/">首页</el-menu-item>
          <el-menu-item index="/goods">全部商品</el-menu-item>
          <el-menu-item index="/about">关于我们</el-menu-item>
          <div class="search">
            <el-input placeholder="请输入搜索内容" v-model="search">
              <!-- slot 是 Vue 组件中的一种特殊元素或属性，用于将组件的内容插入到指定的位置。在这个例子中，slot="append" 意味着将 el-button 组件插入到 el-input 组件的尾部 -->
              <el-button
                  slot="append"
                  icon="el-icon-search"
              ></el-button>
            </el-input>
          </div>
        </el-menu>
      </el-header>

      <!-- 登录 -->
      <Login />

      <!-- 注册 -->
      <Register :register="register" @fromChild="isRegister"/>

      <!-- 主要区域容器 -->
      <el-main>
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </el-main>

    </el-container>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { mapGetters } from "vuex";
export default {
  name: 'App',
  components: {
  },
  data() {
    return {
      register: false, // 是否显示注册组件
      activeIndex: "", // 导航菜单选中的标签
      search: "", // 搜索内容
      visible: false // 是否退出登录
    };
  },
  created() {
    // 获取浏览器localStorage，判断用户是否已经登录
    if (localStorage.getItem("user")) {
      // 如果已经登录，设置vuex登录状态
      this.setUser(JSON.parse(localStorage.getItem("user")));
    }
    /* window.setTimeout(() => {
      this.$message({
        duration: 0,
        showClose: true,
        message: `
        <p>如果觉得这个项目还不错，</p>
        <p style="padding:10px 0">您可以给项目源代码仓库点Star支持一下，谢谢！</p>
        <p><a href="https://github.com/hai-27/vue-store" target="_blank">Github传送门</a></p>`,
        dangerouslyUseHTMLString: true,
        type: "success"
      });
    }, 1000 * 60); */
  },
  computed: {
    ...mapGetters(["getUser", "getNum"])
  },
  // 获取vuex的登录状态
  getUser: function(val) {
    if (val === "") {
      // 用户没有登录
      this.setShoppingCart([]);
    } else {
      // 用户已经登录,获取该用户的购物车信息
      this.$axios
          .post("/api/user/shoppingCart/getShoppingCart", {
            user_id: val.user_id
          })
          .then(res => {
            if (res.data.code === "001") {
              // 001 为成功, 更新vuex购物车状态
              this.setShoppingCart(res.data.shoppingCartData);
            } else {
              // 提示失败信息
              this.notifyError(res.data.msg);
            }
          })
          .catch(err => {
            return Promise.reject(err);
          });
    }
  },
  methods:{
    ...mapActions(["setUser", "setShowLogin", "setShoppingCart"]),
    // 登录
    login() {
      // 点击登录按钮, 通过更改vuex的showLogin值显示登录组件
      this.setShowLogin(true);
    },
    // 退出登录
    logout() {
      this.visible = false;
      // 清空本地登录信息
      localStorage.setItem("user", "");
      // 清空vuex登录信息
      this.setUser("");
      this.notifySucceed("成功退出登录");
    },
  }
}
</script>

<style>
* {
  padding: 0;
  margin: 0;
  border: 0;
  list-style: none;
}
a,
a:hover {
  text-decoration: none;
}

/* 顶部导航栏 */
.topbar {
  height: 40px;
  background-color: #3d3d3d;
  margin-bottom: 20px;
}
.topbar .nav {
  width: 1225px;
  margin: 0 auto;
}
.topbar .nav ul {
  float: right;
}
.topbar .nav li {
  float: left;
  height: 40px;
  color: #b0b0b0;
  font-size: 14px;
  text-align: center;
  line-height: 40px;
  margin-left: 20px;
}
.topbar .nav .sep {
  color: #b0b0b0;
  font-size: 12px;
  margin: 0 5px;
}
.topbar .nav li .el-button {
  color: #b0b0b0;
}
.topbar .nav .el-button:hover {
  color: #fff;
}
.topbar .nav li a {
  color: #b0b0b0;
}
.topbar .nav a:hover {
  color: #fff;
}
.topbar .nav .shopCart {
  width: 120px;
  background: #424242;
}
.topbar .nav .shopCart:hover {
  background: #fff;
}
.topbar .nav .shopCart:hover a {
  color: #ff6700;
}
.topbar .nav .shopCart-full {
  width: 120px;
  background: #ff6700;
}
.topbar .nav .shopCart-full a {
  color: white;
}

/* 导航菜单 */
#app .el-header {
  padding: 0;
}
.el-header .el-menu {
  max-width: 1225px;
  margin: 0 auto;
}
.el-header .logo {
  height: 60px;
  width: 189px;
  float: left;
  margin-right: 100px;
}
.el-header .search {
  margin-top: 10px;
  width: 300px;
  float: right;
}

</style>
