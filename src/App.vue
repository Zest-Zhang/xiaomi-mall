<template>
  <div id="app">
    <el-container>
      <!-- 顶部导航 -->
      <div class="topbar">
        <div class="nav">
          <ul>
            <li>
              <!-- 晚点可以考虑增加 @click="emitLogin" -->
              <el-button type="text">登录</el-button>
              <span class="sep">|</span>
              <el-button type="text" @click="register = true">注册</el-button>
            </li>
            <li>
              <a>我的订单</a>
            </li>
            <li>
              <a>我的收藏</a>
            </li>
            <li class="shopCart">
              <a>
                <i class="el-icon-shopping-cart-full"></i> 购物车
                <span class="num">0</span>
              </a>
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
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
  },
  data() {
    return {
      register: false, // 是否显示注册组件
      activeIndex: "", // 导航菜单选中的标签
      search: "", // 搜索内容
    };
  },
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
