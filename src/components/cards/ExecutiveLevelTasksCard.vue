<script setup>
import { inject } from 'vue';
import EditExecutiveLevelTasksTextModalButton from '../modalWindows/EditExecutiveLevelTasksTextModalButton.vue';

let props = defineProps({
  text: String
});

</script>

<template>
<div class="card px-3">
  <div class="card-header px-0 mt-2" v-html="props.text"></div>
  <div class="card-body gap-1 row">
    <EditExecutiveLevelTasksTextModalButton>Редактировать</EditExecutiveLevelTasksTextModalButton>
  </div>
</div>
</template>

<style>
.card-header {
  background-color: #ffffff00;
}

.btnNoteCard {
  white-space: nowrap;
  width: min-content;
  height: min-content;
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
	padding: 5px !important;
}
</style>
