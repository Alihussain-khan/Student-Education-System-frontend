import actionmodal from '~/components/actionmodal.vue';
<template>
  <div class="container">
    <h1 class="text-2xl text-customblue font-semibold mt-5">Teachers</h1>
    <table class="w-5/6 mt-5 text-white rounded">
      <thead class="bg-customblue custompadding">
        <tr>
          <th class="p-2 text-start">Student Name</th>
          <th class="p-2 text-start">Face</th>
          <th class="p-2 text-start">Lecture time</th>
          <th class="p-2 text-start">Action</th>
        </tr>
      </thead>
      <tbody class="text-customblue">
        <tr>
          <td class="p-2">Student 1</td>
          <td class="p-2">
            <img class="w-8" src="/public/Sample_User_Icon.png" />
          </td>
          <td class="p-2">30 minutes ago</td>
          <td class="p-2">
            <actionmodal />
          </td>
        </tr>
        <tr>
          <td class="p-2">Student 2</td>
          <td class="p-2">
            <img class="w-8" src="/public/Sample_User_Icon.png" />
          </td>
          <td class="p-2">1 hour ago</td>
          <td class="p-2"><actionmodal /></td>
        </tr>
        <tr>
          <td class="p-2">Student 3</td>
          <td class="p-2">
            <img class="w-8" src="/public/Sample_User_Icon.png" />
          </td>
          <td class="p-2">24 hours ago</td>
          <td class="p-2"><actionmodal /></td>
        </tr>
        <tr>
          <td class="p-2">Student 4</td>
          <td class="p-2">
            <img class="w-8" src="/public/Sample_User_Icon.png" />
          </td>
          <td class="p-2">jan-29-30 11:00</td>
          <td class="p-2"><actionmodal /></td>
        </tr>
        <tr>
          <td class="p-2">Student 5</td>
          <td class="p-2">
            <img class="w-8" src="/public/Sample_User_Icon.png" />
          </td>
          <td class="p-2">jan-28-23 03:00</td>
          <td class="p-2"><actionmodal /></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
