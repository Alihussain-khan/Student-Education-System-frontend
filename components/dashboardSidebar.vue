<template>
  <div class="h-screen w-72 bg-customgreen text-center">
    <NuxtLink to="/dashboard"
      ><button class="customwidth rounded mt-5 m-2 py-3 bg-white">
        Students
      </button></NuxtLink
    ><br />
    <NuxtLink to="/dashboard/teacher"
      ><button class="customwidth rounded mt-2 m-2 py-3 bg-white">
        Teachers
      </button></NuxtLink
    ><br />
    <NuxtLink to="/dashboard/exam"
      ><button class="customwidth rounded mt-2 m-2 py-3 bg-white">
        Exams
      </button></NuxtLink
    >
  </div>
</template>

<script></script>

<style>
.customwidth {
  width: 90%;
}
.customwidth:hover {
  background: rgb(240, 239, 239);
}
</style>
