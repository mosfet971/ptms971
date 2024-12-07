<script setup>
import { inject, ref } from 'vue';
import BsModal from './BsModal.vue';

const dataMethods = inject("dataMethods");

const text = ref("");

const handlerYes = ()=> {
    dataMethods.newProject(text.value);
    text.value = "";
};

const handlerNo = ()=> {
    text.value = "";
};

</script>

<template>
<BsModal id="createProjectModal" label="Добавление плана проекта" type="Save" v-bind:yesHandler="handlerYes"  v-bind:noHandler="handlerNo">
  <div class="form-group">
    <textarea class="form-control mt-2" rows="5" placeholder="Текст плана проекта" v-model="text"></textarea>
  </div>
</BsModal>
</template>

<style scoped></style>
