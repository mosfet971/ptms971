<script setup>
import { inject, ref } from 'vue';
import BsModal from './BsModal.vue';

const dataMethods = inject("dataMethods");

const text = ref("");
const isEveryday = ref(false);

const handlerYes = ()=> {
    dataMethods.newTask(text.value, isEveryday.value);
    
    text.value = "";
    isEveryday.value = false;
};

const handlerNo = ()=> {
    text.value = "";
    isEveryday.value = false;
};


</script>

<template>
<BsModal id="createTaskModal" label="Добавление задачи" type="Save" v-bind:yesHandler="handlerYes"  v-bind:noHandler="handlerNo">
  <div class="form-group">
    <textarea class="form-control mt-2" rows="5" placeholder="Текст задачи" v-model="text"></textarea>
    <input class="p-1" type="checkbox" v-model="isEveryday" id="isEverydayCheckbox">
    <label class="p-1" for="isEverydayCheckbox">Ежедневная задача</label>
  </div>
</BsModal>
</template>

<style scoped></style>
