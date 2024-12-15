<script setup>
import { inject } from 'vue';

let props = defineProps({
  id: String,
  text: String,
  rawText: String
});

const dataMethods = inject("dataMethods");

</script>

<template>
<div class="card px-3">
  <div class="card-header px-0 mt-2" v-html="props.text"></div>
  <div class="card-body gap-1 row">
    <button class="btnNoteCard btn btn-secondary position-relative col-4" v-on:click="dataMethods.bumpNote(props.id)">Поднять</button>
    <button class="btnNoteCard btn btn-secondary position-relative col-4" v-on:click="dataMethods.delNote(props.id)">Удалить</button>
    <button class="btnNoteCard btn btn-secondary position-relative col-4" v-bind:onclick="'navigator.clipboard.writeText(`' + props.rawText + '`)'"><span style="font-size: .875em; margin-right: .125em; position: relative; top: -.25em; left: -.125em">
  📄<span style="position: absolute; top: .25em; left: .25em">📄</span>
</span></button>
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
