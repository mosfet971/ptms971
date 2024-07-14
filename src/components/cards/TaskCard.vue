<script setup>
import { inject } from 'vue';

let props = defineProps({
  id: String,
  text: String,
  isEveryday: Boolean
});

const dataMethods = inject("dataMethods");

</script>

<template>
<div class="card px-3">
  <div class="card-header px-0 mt-2 taskText" v-html="props.text"></div>
  <div class="card-body gap-1 row">
    <button v-if="!props.isEveryday" class="taskBtn btn btn-success position-relative col-4" v-on:click="dataMethods.delTask(props.id)">Готово</button>
    <button v-if="props.isEveryday" class="taskBtn btn btn-success position-relative col-4" v-on:click="dataMethods.everydayTaskCompleted(props.id)">Готово</button>
    <button class="taskBtn btn btn-secondary position-relative col-4" v-on:click="dataMethods.delTask(props.id)">Удалить</button>
  </div>
  <p v-if="!props.isEveryday" class="p-1 status-text status-text-red">Временная</p>
  <p v-if="props.isEveryday" class="p-1 status-text status-text-green">Ежедневная</p>
</div>
</template>

<style>

.status-text-green {
  color: green; 
}

.status-text-red {
  color: red;
}

h5 {
  background-color: #ffffff00;
}

.taskBtn {
  white-space: nowrap;
  width: min-content !important;
  height: min-content !important;
}

table {
	width: 100% !important;
	margin-bottom: 20px !important;
	border: 1px solid #dddddd !important;
	border-collapse: collapse !important; 
}
table th {
	font-weight: bold !important;
	padding: 5px !important;
	background: #efefef !important;
	border: 1px solid #dddddd !important;
}
table td {
	border: 1px solid #dddddd !important;
	padding: 5px
}
</style>
