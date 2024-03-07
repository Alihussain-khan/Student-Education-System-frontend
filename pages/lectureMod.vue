<template>
    <div class="max-w-2xl mx-auto mt-8">
      <video controls class="w-full shadow-lg rounded-lg">
        <source :src="videoUrl" type="video/mp4">
      </video>
      <button class="btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-8">
        <nuxt-link to="/LectureFinished" class="no-underline">Finish Lecture</nuxt-link>
      </button>
    </div>
    
  </template>
  
  <script setup>
  import { ref } from 'vue';
  const videoUrl = ref('https://www.w3schools.com/html/mov_bbb.mp4');
  </script>
  
  <style>
  
  </style>
  