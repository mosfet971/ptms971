<script setup>
import BsButtonForModal from "./BsButtonForModal.vue";
</script>
<template>
    <BsButtonForModal class="mt-3" target-modal-id="createProjectModal">
        <slot/>
    </BsButtonForModal>
</template>