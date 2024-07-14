<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    targetModalId: String
});

</script>

<template>
<button type="button" class="btn btn-primary" data-bs-toggle="modal" v-bind:data-bs-target="'#' + props.targetModalId">
  <slot/>
</button>
</template>

<style scoped></style>
