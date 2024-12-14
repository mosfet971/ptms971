<script setup>
import { inject, computed } from 'vue';
import markdownit from 'markdown-it'
import EditStrategicLevelTasksTextModalButton from '../components/modalWindows/EditStrategicLevelTasksTextModalButton.vue';
import StrategicLevelTasksCard from '../components/cards/StrategicLevelTasksCard.vue';
const md = markdownit()

const dataObject = inject("dataObject");

const renderedStrategy = computed(()=>{
    return md.render(dataObject.value.strategicLevelTasksText);
});

</script>

<template>
  <EditStrategicLevelTasksTextModalButton class="mb-3">Редактировать</EditStrategicLevelTasksTextModalButton>
  <hr/>

  <div class="container-fluid mt-3 row">
    <StrategicLevelTasksCard class="col-md-8 mt-3" v-bind:text="renderedStrategy" />
  </div>

  <span class="m-3"></span>
</template>
