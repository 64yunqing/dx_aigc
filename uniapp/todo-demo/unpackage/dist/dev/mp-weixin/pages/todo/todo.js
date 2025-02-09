"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      todos: []
    };
  },
  methods: {
    goToEdit() {
      common_vendor.index.navigateTo({
        url: "/pages/edit/edit"
      });
    },
    toggleTodo(index) {
      this.todos[index].completed = !this.todos[index].completed;
      this.saveTodos();
    },
    deleteTodo(index) {
      this.todos.splice(index, 1);
      this.saveTodos();
    },
    saveTodos() {
      common_vendor.index.setStorageSync("todos", JSON.stringify(this.todos));
    },
    loadTodos() {
      const todos = common_vendor.index.getStorageSync("todos");
      if (todos) {
        this.todos = JSON.parse(todos);
      }
    }
  },
  onShow() {
    this.loadTodos();
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.todos, (item, index, i0) => {
      return common_vendor.e({
        a: item.completed,
        b: common_vendor.o(($event) => $options.toggleTodo(index), index),
        c: common_vendor.t(item.text),
        d: item.completed ? 1 : "",
        e: item.image
      }, item.image ? {
        f: item.image
      } : {}, {
        g: common_vendor.t(item.time),
        h: common_vendor.o(($event) => $options.deleteTodo(index), index),
        i: index
      });
    }),
    b: common_vendor.o((...args) => $options.goToEdit && $options.goToEdit(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
