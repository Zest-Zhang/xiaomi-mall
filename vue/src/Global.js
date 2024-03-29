
/* 全局都能调用的方法 */
exports.install = function (Vue) {
  Vue.prototype.$target = "http://101.132.181.9:3000/"; // 线上后端地址
  // $target 的作用是给图片路径，比如 :src="$target + item.imgPath"
  // Vue.prototype.$target = "http://localhost:5000/"; // 本地后端地址
  // 封装提示成功的弹出框，notifySucceed 和 notifyError 是 element 的组件
  Vue.prototype.notifySucceed = function (msg) {
    this.$notify({
      title: "成功",
      message: msg,
      type: "success",
      offset: 100
    });
  };
  // 封装提示失败的弹出框
  Vue.prototype.notifyError = function (msg) {
    this.$notify.error({
      title: "错误",
      message: msg,
      offset: 100
    });
  };
}