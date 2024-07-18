<script setup>
import BsButtonForModal from "./BsButtonForModal.vue";
import { inject } from 'vue';

const props = defineProps({
    idOfTask: String
});

let dataObject = inject("dataObject");

const clickHandler = () => {
    dataObject.value.IdOfTaskForPlan = props.idOfTask;
    console.log(dataObject.value.IdOfTaskForPlan);
};

</script>
<template>
    <BsButtonForModal v-on:click="clickHandler" target-modal-id="planTaskModal">
        <slot/>
    </BsButtonForModal>
</template>