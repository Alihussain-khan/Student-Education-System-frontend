<template>
    <div class="mcqcard">
      <div class="flex items-center text-customgreen font-semibold mb-2">Question no - {{ questionIndex+1 }}</div>  
      <p class="text-xl font-bold " style="color: #535966;">{{ questions.questionText }}</p>
      <ul>
        <li v-for="(option, optionIndex) in questions.options" :key="optionIndex" class="mt-2">
          <input  @click="handleOptionSelect(optionIndex)" type="radio" :id="`question_${questionIndex}_${optionIndex}`" :name="`question_${questionIndex}`"  v-model="selectedOptionIndex" :value="optionIndex" class="mr-2">
          <label :for="`option_${optionIndex}`" class="mt-2">{{ option }}</label>
        </li>
      </ul>
      <div>
        <div class="float-right flex text-xl font-semibold text-customgrayheading">
         <i class="material-icons text-customgreen">flag</i> - 1 Mark 
        </div>
      </div>
      
    </div>
</template>

<script  lang="ts" setup>
  import { defineProps, ref } from 'vue';
    const { questions } = defineProps(['questions','questionIndex'])
    const selectedOptionIndex = ref<number | null>(null);

    const handleOptionSelect = (optionIndex: number) => {
      console.log('-------->',selectedOptionIndex)
    };
</script>
<style scoped>
input[type="radio"] {
  appearance: none;
  width: 16px;
  height: 16px;
  border: 2px solid #333; 
  border-radius: 50%; 
  outline: none;
  margin-right: 8px;
}
    input[type="radio"]:checked {
  background-color: #00C16A;
    }
</style>
