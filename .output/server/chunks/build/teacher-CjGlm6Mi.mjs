import { _ as __nuxt_component_0$1 } from './nuxt-link-BO6uCwgx.mjs';
import { mergeProps, useSSRContext, reactive, withCtx, createVNode, unref } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _imports_0 } from './Sample_User_Icon-Dju2jfXZ.mjs';
import { _ as _export_sfc } from './server.mjs';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const _sfc_main$1 = {
  __name: "actionmodal",
  __ssrInlineRender: true,
  setup(__props) {
    const state = reactive({
      isVisible: false
    });
    function open() {
      state.isVisible = !state.isVisible;
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_NuxtLink, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<button class="text-xl"${_scopeId}>\u25B6</button>`);
          } else {
            return [
              createVNode("button", {
                onClick: open,
                class: "text-xl"
              }, "\u25B6")
            ];
          }
        }),
        _: 1
      }, _parent));
      if (unref(state).isVisible) {
        _push(`<div class="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center"><div class="w-[90%] h-[70%] bg-customblue rounded text-white"><button class="float-right me-2 mt-2 px-2 border border-customgraytext rounded hover:bg-[]"> X </button><div class="flex ps-8 pt-16 justify-around gap-5"><div><iframe width="560" height="315" src="https://www.youtube.com/embed/yh2sn4PdTKw?si=Z9Fo-NP4W9o6hoXw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div><div><iframe width="560" height="315" src="https://www.youtube.com/embed/yh2sn4PdTKw?si=Z9Fo-NP4W9o6hoXw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/actionmodal.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = _sfc_main$1;
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_actionmodal = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "container" }, _attrs))}><h1 class="text-2xl text-customblue font-semibold mt-5">Teachers</h1><table class="w-5/6 mt-5 text-white rounded"><thead class="bg-customblue custompadding"><tr><th class="p-2 text-start">Student Name</th><th class="p-2 text-start">Face</th><th class="p-2 text-start">Lecture time</th><th class="p-2 text-start">Action</th></tr></thead><tbody class="text-customblue"><tr><td class="p-2">Student 1</td><td class="p-2"><img class="w-8"${ssrRenderAttr("src", _imports_0)}></td><td class="p-2">30 minutes ago</td><td class="p-2">`);
  _push(ssrRenderComponent(_component_actionmodal, null, null, _parent));
  _push(`</td></tr><tr><td class="p-2">Student 2</td><td class="p-2"><img class="w-8"${ssrRenderAttr("src", _imports_0)}></td><td class="p-2">1 hour ago</td><td class="p-2">`);
  _push(ssrRenderComponent(_component_actionmodal, null, null, _parent));
  _push(`</td></tr><tr><td class="p-2">Student 3</td><td class="p-2"><img class="w-8"${ssrRenderAttr("src", _imports_0)}></td><td class="p-2">24 hours ago</td><td class="p-2">`);
  _push(ssrRenderComponent(_component_actionmodal, null, null, _parent));
  _push(`</td></tr><tr><td class="p-2">Student 4</td><td class="p-2"><img class="w-8"${ssrRenderAttr("src", _imports_0)}></td><td class="p-2">jan-29-30 11:00</td><td class="p-2">`);
  _push(ssrRenderComponent(_component_actionmodal, null, null, _parent));
  _push(`</td></tr><tr><td class="p-2">Student 5</td><td class="p-2"><img class="w-8"${ssrRenderAttr("src", _imports_0)}></td><td class="p-2">jan-28-23 03:00</td><td class="p-2">`);
  _push(ssrRenderComponent(_component_actionmodal, null, null, _parent));
  _push(`</td></tr></tbody></table></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dashboard/teacher.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const teacher = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { teacher as default };
//# sourceMappingURL=teacher-CjGlm6Mi.mjs.map
