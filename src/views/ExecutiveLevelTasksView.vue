<script setup>
import { inject, computed } from 'vue';
import markdownit from 'markdown-it'
import EditExecutiveLevelTasksTextModalButton from '../components/modalWindows/EditExecutiveLevelTasksTextModalButton.vue';
import ExecutiveLevelTasksCard from '../components/cards/ExecutiveLevelTasksCard.vue';
const md = markdownit()

const dataObject = inject("dataObject");

const renderedStrategicLevelTasksText = computed(()=>{
    return md.render(dataObject.value.executiveLevelTasksText);
});

</script>

<template>
  <EditExecutiveLevelTasksTextModalButton class="mb-3">Редактировать</EditExecutiveLevelTasksTextModalButton>
  <hr/>

  <div class="container-fluid mt-3 row">
    <ExecutiveLevelTasksCard class="col-md-8 mt-3" v-bind:text="renderedStrategicLevelTasksText" />
  </div>

  <span class="m-3"></span>
</template>
