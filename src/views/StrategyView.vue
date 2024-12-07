<script setup>
import { inject, computed } from 'vue';
import markdownit from 'markdown-it'
import EditStrategyModalButton from '../components/modalWindows/EditStrategyModalButton.vue';
import StrategyCard from '../components/cards/StrategyCard.vue';
const md = markdownit()

const dataObject = inject("dataObject");

const renderedStrategy = computed(()=>{
    return md.render(dataObject.value.strategyText);
});

</script>

<template>
  <EditStrategyModalButton class="mb-3">Редактировать</EditStrategyModalButton>
  <hr/>

  <div class="container-fluid mt-3 row">
    <StrategyCard class="col-md-8 mt-3" v-bind:text="renderedStrategy" />
  </div>

  <span class="m-3"></span>
</template>
