"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const _sfc_main = {
  __name: "index",
  setup(__props) {
    common_vendor.onMounted(() => {
      console.log("");
    });
    onLoad(() => {
    });
    const toCar = () => {
      common_vendor.index.switchTab({
        url: "/pages/car/car?id=123"
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_assets._imports_0,
        b: common_vendor.o(toCar)
      };
    };
  }
};
wx.createPage(_sfc_main);
