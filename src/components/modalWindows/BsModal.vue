<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    id: String,
    type: "Save" || "Confirm",
    label: String,
    yesHandler: Function,
    noHandler: Function
});

</script>

<template>
<div class="modal fade" v-bind:id="props.id" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="false">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" v-bind:id="props.id + 'Label'">{{props.label}}</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" v-on:click="props.noHandler"></button>
      </div>
      <div class="modal-body">
        <slot/>
      </div>
      <div class="modal-footer">
        <button v-on:click="props.noHandler" type="button" class="btn btn-secondary" data-bs-dismiss="modal">Отмена</button>
        <button v-on:click="props.yesHandler" v-if="props.type == 'Save'" type="button" class="btn btn-primary" data-bs-dismiss="modal">Сохранить</button>
        <button v-on:click="props.yesHandler" v-if="props.type == 'Confirm'" type="button" class="btn btn-primary" data-bs-dismiss="modal">Подтвердить</button>
      </div>
    </div>
  </div>
</div>
</template>

<style scoped></style>
