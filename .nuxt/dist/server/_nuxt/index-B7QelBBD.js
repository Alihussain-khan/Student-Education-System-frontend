import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr } from "vue/server-renderer";
import { _ as _imports_0 } from "./Sample_User_Icon-Dju2jfXZ.js";
import { _ as _export_sfc } from "../server.mjs";
import "#internal/nitro";
import "ofetch";
import "hookable";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "ufo";
import "defu";
import "klona";
import "devalue";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "container" }, _attrs))}><h1 class="text-2xl text-customblue font-semibold mt-5">Students</h1><table class="w-5/6 mt-5 text-white rounded border"><thead class="bg-customblue custompadding"><tr><th class="p-2 text-start">Student Name</th><th class="p-2 text-start">Face</th><th class="p-2 text-start">Lecture</th><th class="p-2 text-start">Exam</th></tr></thead><tbody class="text-customblue"><tr class=""><td class="p-2">Student 1</td><td class="p-2"><img class="w-8"${ssrRenderAttr("src", _imports_0)}></td><td class="p-2">2</td><td class="p-2">2</td></tr><tr><td class="p-2">Student 2</td><td class="p-2"><img class="w-8"${ssrRenderAttr("src", _imports_0)}></td><td class="p-2">3</td><td class="p-2">3</td></tr><tr><td class="p-2">Student 3</td><td class="p-2"><img class="w-8"${ssrRenderAttr("src", _imports_0)}></td><td class="p-2">4</td><td class="p-2">4</td></tr><tr><td class="p-2">Student 4</td><td class="p-2"><img class="w-8"${ssrRenderAttr("src", _imports_0)}></td><td class="p-2">7</td><td class="p-2">7</td></tr><tr><td class="p-2">Student 5</td><td class="p-2"><img class="w-8"${ssrRenderAttr("src", _imports_0)}></td><td class="p-2">0</td><td class="p-2">0</td></tr></tbody></table></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dashboard/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  index as default
};
//# sourceMappingURL=index-B7QelBBD.js.map
