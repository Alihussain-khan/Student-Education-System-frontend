import { useSSRContext, defineComponent, ref, computed, unref, mergeProps } from 'vue';
import { ssrRenderStyle, ssrInterpolate, ssrRenderList, ssrRenderComponent, ssrRenderAttrs, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseEqual } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "McqCard",
  __ssrInlineRender: true,
  props: ["questions", "questionIndex"],
  setup(__props) {
    const selectedOptionIndex = ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "mcqcard" }, _attrs))} data-v-77b75a36><div class="flex items-center text-customgreen font-semibold mb-2" data-v-77b75a36>Question no - ${ssrInterpolate(__props.questionIndex + 1)}</div><p class="text-xl font-bold" style="${ssrRenderStyle({ "color": "#535966" })}" data-v-77b75a36>${ssrInterpolate(__props.questions.questionText)}</p><ul data-v-77b75a36><!--[-->`);
      ssrRenderList(__props.questions.options, (option, optionIndex) => {
        _push(`<li class="mt-2" data-v-77b75a36><input type="radio"${ssrRenderAttr("id", `question_${__props.questionIndex}_${optionIndex}`)}${ssrRenderAttr("name", `question_${__props.questionIndex}`)}${ssrIncludeBooleanAttr(ssrLooseEqual(selectedOptionIndex.value, optionIndex)) ? " checked" : ""}${ssrRenderAttr("value", optionIndex)} class="mr-2" data-v-77b75a36><label${ssrRenderAttr("for", `option_${optionIndex}`)} class="mt-2" data-v-77b75a36>${ssrInterpolate(option)}</label></li>`);
      });
      _push(`<!--]--></ul><div data-v-77b75a36><div class="float-right flex text-xl font-semibold text-customgrayheading" data-v-77b75a36><i class="material-icons text-customgreen" data-v-77b75a36>flag</i> - 1 Mark </div></div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/McqCard.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-77b75a36"]]);
const intervalError = "[nuxt] `setInterval` should not be used on the server. Consider wrapping it with an `onNuxtReady`, `onBeforeMount` or `onMounted` lifecycle hook, or ensure you only call it in the browser by checking `false`.";
const setInterval = () => {
  console.error(intervalError);
};
function screenshot() {
  let frames = [];
  let intervalId;
  async function takeScreenshot() {
    intervalId = setInterval();
  }
  function stopCapture() {
    clearInterval(intervalId);
  }
  return {
    takeScreenshot,
    stopCapture,
    frames
  };
}
const myExam = {
  examName: "Sample Exam",
  questions: [
    {
      questionText: "What is the capital of France?",
      options: ["London", "Paris", "Berlin", "Rome"],
      correctOptionIndex: 1
    },
    {
      questionText: "What is the powerhouse of the cell?",
      options: ["Nucleus", "Ribosome", "Mitochondria", "Cell membrane"],
      correctOptionIndex: 2
    },
    {
      questionText: "Which planet is known as the Red Planet?",
      options: ["Mars", "Venus", "Jupiter", "Mercury"],
      correctOptionIndex: 0
    },
    {
      questionText: "Who wrote 'Romeo and Juliet'?",
      options: ["William Shakespeare", "Charles Dickens", "Jane Austen", "Mark Twain"],
      correctOptionIndex: 0
    },
    {
      questionText: "What is the chemical symbol for water?",
      options: ["H2O", "CO2", "NaCl", "O2"],
      correctOptionIndex: 0
    },
    {
      questionText: "What is the largest mammal?",
      options: ["Elephant", "Blue whale", "Giraffe", "Polar bear"],
      correctOptionIndex: 1
    },
    {
      "questionText": "The term 'data' came from the Latin root term-",
      "options": ["Detem", "Datam", "Datum", "Data"],
      "correctOptionIndex": 3
    },
    {
      "questionText": "Two types of research data include-",
      "options": ["Recognised and unrecognised data", "Structured and unstructured data", "Qualitative and quantitative data", "Organised and processed data"],
      "correctOptionIndex": 2
    },
    {
      "questionText": "Which one is the true example of primary data from the following options?",
      "options": ["Journal", "Book", "Census Report", "Newspaper"],
      "correctOptionIndex": 2
    },
    {
      "questionText": "What is it called when the data is sourced from the place of origin?",
      "options": ["Secondary", "Primary", "Secondary and primary", "All of the above"],
      "correctOptionIndex": 1
    },
    {
      "questionText": "What is it called when the data source is gathered and compiled with others?",
      "options": ["Primary Data", "Quantitative data", "Secondary data", "None of the above"],
      "correctOptionIndex": 2
    },
    {
      "questionText": "Information of research is called \u2013",
      "options": ["Qualitative", "Quantitative", "Qualitative and Quantitative both", "None of the above"],
      "correctOptionIndex": 2
    },
    {
      "questionText": "The method of collecting primary data is called \u2013",
      "options": ["Questionnaire and schedule method", "Observation and Interview method", "None of the above", "All of the above"],
      "correctOptionIndex": 3
    },
    {
      "questionText": "Structured observation is a part of \u2013",
      "options": ["Descriptive study", "Experimental study", "Fundamental study", "All of the above"],
      "correctOptionIndex": 0
    },
    {
      "questionText": "Data that are collected or sourced from the internet is called \u2013",
      "options": ["Documentary sources of data", "Internal secondary sources of data", "External secondary sources of data", "All of the above"],
      "correctOptionIndex": 2
    },
    {
      "questionText": "Which statement is not true or incorrect from the following",
      "options": ["The identity is known of the respondent in the case of the questionnaire.", "The scheduling method is expensive and complicated in comparison to the questionnaire method.", "The informants or respondents generally fill up the schedule.", "All of the above."],
      "correctOptionIndex": 0
    },
    {
      "questionText": "Which one is incorrect among the following statements?",
      "options": ["The investigator meets the informants directly and collects information, in the case of a direct personal interview.", "The investigator meets and collects information from the informants directly, in the case of an indirect interview.", "The researcher primarily collects data by observing, in the case of the observation method.", "All of the above"],
      "correctOptionIndex": 1
    }
  ]
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const timeLeft = ref(300);
    var textColor = "";
    const timeUp = ref(false);
    const time = ref(true);
    const displayTime = computed(() => {
      const minutes = Math.floor(timeLeft.value / 60);
      const seconds = timeLeft.value % 60;
      return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
    });
    const { takeScreenshot, stopCapture, frames } = screenshot();
    console.log(frames);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_mcqCard = __nuxt_component_0;
      _push(`<!--[--><div class="border-2 border-customgreen rounded-md mx-10 flex justify-between items-center px-5"><h1 class="text-customgreen ml-5 text-2xl font-bold">Exam</h1><p class="text-customgreen text-xl" style="${ssrRenderStyle([
        `color : ${unref(textColor)}`,
        unref(time) ? null : { display: "none" }
      ])}"> Time remaining: ${ssrInterpolate(unref(displayTime))}</p><p class="text-customgraytext text-xl font-semibold" style="${ssrRenderStyle([
        `color : ${unref(textColor)}`,
        unref(timeUp) ? null : { display: "none" }
      ])}"> Times Up!! </p></div><p class="text-customgraytext mx-10 mt-4 text-xl">Answer all the questions</p><!--[-->`);
      ssrRenderList(unref(myExam).questions, (questions, index) => {
        _push(`<div class="card">`);
        _push(ssrRenderComponent(_component_mcqCard, {
          questions,
          questionIndex: index
        }, null, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--><div class="p-10 text-center"><button class="btn hover:btnHover">Submit Exam</button><button>Start Capture</button><button>Stop Capture</button></div><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/ExamStudent/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-JJqRY2jJ.mjs.map
