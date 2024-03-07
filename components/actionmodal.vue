<template>
  <NuxtLink><button @click="open" class="text-xl">▶</button></NuxtLink>
  <div
    v-if="state.isVisible"
    class="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center"
  >
    <div class="w-[90%] h-[70%] bg-customblue rounded text-white">
      <button
        @click="open"
        class="float-right me-2 mt-2 px-2 border border-customgraytext rounded hover:bg-[]"
      >
        X
      </button>
      <div class="flex ps-8 pt-16 justify-around gap-5">
        <div>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/yh2sn4PdTKw?si=Z9Fo-NP4W9o6hoXw"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
        <div>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/yh2sn4PdTKw?si=Z9Fo-NP4W9o6hoXw"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const state = reactive({
  isVisible: false,
});

function open() {
  state.isVisible = !state.isVisible;
}
</script>
