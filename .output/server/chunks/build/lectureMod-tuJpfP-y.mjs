import { _ as __nuxt_component_0 } from './nuxt-link-BO6uCwgx.mjs';
import { ref, mergeProps, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent } from 'vue/server-renderer';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import './server.mjs';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const _sfc_main = {
  __name: "lectureMod",
  __ssrInlineRender: true,
  setup(__props) {
    const videoUrl = ref("https://www.w3schools.com/html/mov_bbb.mp4");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-2xl mx-auto mt-8" }, _attrs))}><video controls class="w-full shadow-lg rounded-lg"><source${ssrRenderAttr("src", videoUrl.value)} type="video/mp4"></video><button class="btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-8">`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: "/LectureFinished",
        class: "no-underline"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Finish Lecture`);
          } else {
            return [
              createTextVNode("Finish Lecture")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</button></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/lectureMod.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=lectureMod-tuJpfP-y.mjs.map
