<script setup>
import BsButtonForModal from "./BsButtonForModal.vue";

const props = defineProps({
    chanelId: String
});

</script>
<template>
    <BsButtonForModal class="mt-3" v-bind:target-modal-id="'createNoteModal' + props.chanelId">
        <slot/>
    </BsButtonForModal>
</template>