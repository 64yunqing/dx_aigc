"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      todoText: "",
      imageUrl: "",
      date: this.formatDate(/* @__PURE__ */ new Date()),
      time: this.formatTime(/* @__PURE__ */ new Date())
    };
  },
  methods: {
    formatDate(date) {
      const year = date.getFullYear();
      const month = (date.getMonth() + 1).toString().padStart(2, "0");
      const day = date.getDate().toString().padStart(2, "0");
      return `${year}-${month}-${day}`;
    },
    formatTime(date) {
      const hours = date.getHours().toString().padStart(2, "0");
      const minutes = date.getMinutes().toString().padStart(2, "0");
      return `${hours}:${minutes}`;
    },
    bindDateChange(e) {
      this.date = e.detail.value;
    },
    bindTimeChange(e) {
      this.time = e.detail.value;
    },
    chooseImage() {
      common_vendor.index.chooseImage({
        count: 1,
        success: (res) => {
          this.imageUrl = res.tempFilePaths[0];
        }
      });
    },
    deleteImage() {
      this.imageUrl = "";
    },
    cancel() {
      common_vendor.index.navigateBack();
    },
    confirm() {
      if (!this.todoText.trim()) {
        common_vendor.index.showToast({
          title: "请输入待办事项内容",
          icon: "none"
        });
        return;
      }
      const todos = common_vendor.index.getStorageSync("todos") || "[]";
      const todoList = JSON.parse(todos);
      todoList.push({
        text: this.todoText,
        image: this.imageUrl,
        time: `${this.date} ${this.time}`,
        completed: false
      });
      common_vendor.index.setStorageSync("todos", JSON.stringify(todoList));
      common_vendor.index.navigateBack();
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $data.todoText,
    b: common_vendor.o(($event) => $data.todoText = $event.detail.value),
    c: !$data.imageUrl
  }, !$data.imageUrl ? {
    d: common_vendor.o((...args) => $options.chooseImage && $options.chooseImage(...args))
  } : {
    e: $data.imageUrl,
    f: common_vendor.o((...args) => $options.deleteImage && $options.deleteImage(...args))
  }, {
    g: common_vendor.t($data.date),
    h: $data.date,
    i: common_vendor.o((...args) => $options.bindDateChange && $options.bindDateChange(...args)),
    j: common_vendor.t($data.time),
    k: $data.time,
    l: common_vendor.o((...args) => $options.bindTimeChange && $options.bindTimeChange(...args)),
    m: common_vendor.o((...args) => $options.cancel && $options.cancel(...args)),
    n: common_vendor.o((...args) => $options.confirm && $options.confirm(...args))
  });
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
