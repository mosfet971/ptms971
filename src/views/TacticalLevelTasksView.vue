<script setup>
import { inject, computed } from 'vue';
import markdownit from 'markdown-it'
import EditTacticalLevelTasksTextModalButton from '../components/modalWindows/EditTacticalLevelTasksTextModalButton.vue';
import TacticalLevelTaksCard from '../components/cards/TacticalLevelTaksCard.vue';
const md = markdownit()

const dataObject = inject("dataObject");

const renderedTacticalLevelTasksText = computed(()=>{
    return md.render(dataObject.value.tacticalLevelTasksText);
});

</script>

<template>
  <EditTacticalLevelTasksTextModalButton class="mb-3">Редактировать</EditTacticalLevelTasksTextModalButton>
  <hr/>

  <div class="container-fluid mt-3 row">
    <TacticalLevelTaksCard class="col-md-8 mt-3" v-bind:text="renderedTacticalLevelTasksText" />
  </div>

  <span class="m-3"></span>
</template>
