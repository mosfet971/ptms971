<script setup>
import { inject, computed } from "vue";
import PlanedTaskCard from "../components/cards/PlanedTaskCard.vue";
import CreateTaskModalButton from "../components/modalWindows/CreateTaskModalButton.vue";
import markdownit from 'markdown-it'

const md = markdownit()

const dataObject = inject("dataObject");

const preparedTasksList = computed(()=>{
  let newList = JSON.parse(JSON.stringify(dataObject.value.tasks));
  newList = newList.filter((el)=>el.isPlaned);
  newList.sort((a, b)=>{ 
    let n1 = a.isEveryday === true ? 0 : 1;
    let n2 = b.isEveryday === true ? 0 : 1;

    return(n2 - n1);
  });
  return newList;
});

const renderedTasks = computed(()=>{
  let notes = [];
  let newNote = {};
  for (let i of preparedTasksList.value) {
    newNote = JSON.parse(JSON.stringify(i));

    if (newNote.lastTime == Math.floor((((((Date.now()/1000)/60)-(new Date()).getTimezoneOffset()-300)/60)/24))) {
      continue;
    }

    newNote = JSON.parse(JSON.stringify(i));
    newNote.text = md.render(i.text);
    notes.push(newNote);
  }
  return notes;
});

</script>

<template>
  <hr />
  <div class="container-fluid row mt-3">
    <p style="color: grey; padding: 0; margin: 0;" v-if="JSON.stringify(renderedTasks) == '[]'">Сейчас запланированных задач нет</p>
    <PlanedTaskCard v-for="i in renderedTasks" v-bind:key="i.id" class="col-md-8 mt-3" v-bind:is-everyday="i.isEveryday" v-bind:id="i.id" v-bind:text="i.text" v-bind:dateText="i.dateText"/>
  </div>

  <span class="m-3"></span>
</template>