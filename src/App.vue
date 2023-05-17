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



</style>
