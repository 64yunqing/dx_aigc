"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const _sfc_main = {
  data() {
    return {
      todoCount: 0,
      completedCount: 0
    };
  },
  methods: {
    loadTodoStats() {
      const todos = common_vendor.index.getStorageSync("todos");
      if (todos) {
        const todoList = JSON.parse(todos);
        this.todoCount = todoList.length;
        this.completedCount = todoList.filter((todo) => todo.completed).length;
      }
    },
    openSettings() {
      common_vendor.index.showToast({
        title: "设置功能开发中",
        icon: "none"
      });
    }
  },
  onShow() {
    this.loadTodoStats();
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_assets._imports_0,
    b: common_vendor.t($data.todoCount),
    c: common_vendor.t($data.completedCount),
    d: common_vendor.o((...args) => $options.openSettings && $options.openSettings(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
