<script setup>
import { inject, ref } from 'vue';
import BsModal from './BsModal.vue';

const dataMethods = inject("dataMethods");
let dataObject = inject("dataObject");

const dateText = ref("");

const handlerYes = ()=> {
    dataMethods.planTask(dataObject.value.IdOfTaskForPlan, dateText.value);
    dataObject.value.IdOfTaskForPlan = "";
    dateText.value = "";
};

const handlerNo = ()=> {
    dataObject.value.IdOfTaskForPlan = "";
    dateText.value = "";
};

</script>

<template>
<BsModal id="planTaskModal" label="Планирование" type="Save" v-bind:yesHandler="handlerYes"  v-bind:noHandler="handlerNo">
  <div class="form-group">
    <textarea class="form-control mt-2" rows="5" placeholder="Время, на которое будет запланирована задача" v-model="dateText"></textarea>
  </div>
</BsModal>
</template>

<style scoped></style>
