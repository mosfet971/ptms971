<script setup>
import { inject, ref } from 'vue';
import BsModal from './BsModal.vue';

const dataMethods = inject("dataMethods");

const text = ref("");

const handlerYes = ()=> {
    dataMethods.newNote(text.value);
    text.value = "";
};

const handlerNo = ()=> {
    text.value = "";
};

</script>

<template>
<BsModal id="createNoteModal" label="Добавление заметки" type="Save" v-bind:yesHandler="handlerYes"  v-bind:noHandler="handlerNo">
  <div class="form-group">
    <textarea class="form-control mt-2" rows="5" placeholder="Текст заметки" v-model="text"></textarea>
  </div>
</BsModal>
</template>

<style scoped></style>
