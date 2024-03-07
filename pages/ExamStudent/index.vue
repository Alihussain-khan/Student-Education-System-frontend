<template>
  <div class="border-2 border-customgreen rounded-md mx-10 flex justify-between items-center px-5">
    <h1 class="text-customgreen ml-5 text-2xl font-bold">Exam</h1>
    <p class="text-customgreen text-xl" :style="`color : ${textColor}`" v-show="time">
      Time remaining: {{ displayTime }}
    </p>
    <p class="text-customgraytext text-xl font-semibold" :style="`color : ${textColor}`" v-show="timeUp">
      Times Up!!
    </p>
  </div>
  <p class="text-customgraytext mx-10 mt-4 text-xl">Answer all the questions</p>
  <div v-for="(questions, index) in myExam.questions" :key="questions.questionText" class="card">
    <mcqCard :questions="questions" :questionIndex="index" />
  </div>
  <div class="p-10 text-center">
    <button class="btn hover:btnHover">Submit Exam</button>
    <button @click="takeScreenshot">Start Capture</button>
    <button @click="stopCapture">Stop Capture</button>
  </div>
</template>

<script lang="ts" setup>
import screenshot from "~/mixins/screenshot";
import { myExam } from "~/types/exam";
const timeLeft = ref(300);
var textColor = "";
const timeUp = ref(false);
const time = ref(true);
let countdown: NodeJS.Timeout | null = null;
const displayTime = computed(() => {
  const minutes = Math.floor(timeLeft.value / 60);
  const seconds = timeLeft.value % 60;
  return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
});

const startCountdown = () => {
  countdown = setInterval(() => {
    if (timeLeft.value > 0) {
      timeLeft.value--;
    } else {
      clearInterval(countdown!);
      timeUp.value = true;
      time.value = false;
    }

    if (timeLeft.value <= 30 && timeLeft.value >= 0) {
      textColor = "red";
    }
  }, 1000);
};
const { takeScreenshot, stopCapture, frames } = screenshot();
console.log(frames);

onMounted(() => {
  console.log("hello", myExam);
  startCountdown();
});

onBeforeUnmount(() => {
  if (countdown) {
    clearInterval(countdown);
  }
});
</script>

<style scoped></style>
