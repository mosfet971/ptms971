<script setup>
import { inject, ref } from 'vue';
import BsModal from './BsModal.vue';

const dataMethods = inject("dataMethods");
const dataObject = inject("dataObject");

const text = ref(JSON.parse(JSON.stringify([dataObject.value.executiveLevelTasksText]))[0]);

const handlerYes = ()=> {
    dataMethods.setExecutiveLevelTasksText(text.value);
};

const handlerNo = ()=> {
    text.value = JSON.parse(JSON.stringify([dataObject.value.executiveLevelTasksText]))[0];
};

</script>

<template>
<BsModal id="EditExecutiveLevelTasksTextModal" label="Изменение описания задач исполнительного уровня" type="Save" v-bind:yesHandler="handlerYes"  v-bind:noHandler="handlerNo">
  <div class="form-group">
    <textarea class="form-control mt-2" rows="5" placeholder="Текст описания задач исполнительного уровня" v-model="text"></textarea>
  </div>
</BsModal>
</template>

<style scoped></style>
