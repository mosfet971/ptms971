<script setup>
import { inject } from 'vue';

let dataObject = inject("dataObject");

let json = JSON.stringify(dataObject.value);
</script>

<template>
    <h1>Данные в формате json</h1>
    <hr />
    <p>{{ json }}</p>
</template>

<style scoped>
p {
    word-break: break-all;
}
</style>
