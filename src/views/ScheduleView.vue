<script setup>
import { inject, computed } from 'vue';
import markdownit from 'markdown-it'
import EditScheduleModalButton from '../components/modalWindows/EditScheduleModalButton.vue';
import ScheduleCard from '../components/cards/ScheduleCard.vue';
const md = markdownit()

const dataObject = inject("dataObject");

const renderedScheduleText = computed(()=>{
    return md.render(dataObject.value.scheduleText);
});

</script>

<template>
  <EditScheduleModalButton class="mb-3">Редактировать</EditScheduleModalButton>
  <hr/>

  <div class="container-fluid mt-3 row">
    <ScheduleCard class="col-md-8 mt-3" v-bind:text="renderedScheduleText" />
  </div>

  <span class="m-3"></span>
</template>
