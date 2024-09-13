"use strict";
const common_vendor = require("../../common/vendor.js");
common_vendor.onMounted(() => {
  common_vendor.index.request({
    url: "https://mock.mengxuegu.com/mock/65a91543c4cd67421b34c898/movie/movieList",
    data: {
      id: 1
    }
  }).then((res) => {
    console.log(res);
    common_vendor.index.setStorage({
      key: "movie",
      data: "受欢迎的电影"
    });
  });
});
const _sfc_main = {};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {};
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
