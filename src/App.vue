<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { computed, ref, provide, watchEffect, onMounted } from "vue";
import { useRoute, useRouter } from 'vue-router';
import CreateTaskModal from './components/modalWindows/CreateTaskModal.vue';
import CreateNoteModal from './components/modalWindows/CreateNoteModal.vue';
import ImportJsonModal from './components/modalWindows/ImportJsonModal.vue';
import PlanTaskModal from './components/modalWindows/PlanTaskModal.vue';

const route = useRoute();
const router = useRouter();

const currentRoutePath = computed(() => route.path);
const routes = router.getRoutes();

const notHiddenRoutes = computed(() => routes.filter((v) => v.name !== ""));

onMounted(() => {
  if (localStorage.getItem("lastPath")) {
    router.push(localStorage.getItem("lastPath"));
  }
});

let onPageChange = (path) => {
  localStorage.setItem("lastPath", path);
};

let dataObject;

if (localStorage.getItem("dataObject")) {
  dataObject = ref(JSON.parse(localStorage.getItem("dataObject")));
} else {
  dataObject = ref({
    tasks: [],
    notes: [],
    scripts: [],
    IdOfTaskForPlan: ""
  });
}

watchEffect(() => {
  localStorage.setItem("dataObject", JSON.stringify(dataObject.value));
});


let dataMethods = {
  newTask: (text, isEveryday) => {
    dataObject.value.tasks.unshift({ id: crypto.randomUUID(), text: text, isEveryday: isEveryday, lastTime: 0, isPlaned: isEveryday, dateText: "" });
  },
  delTask: (id) => {
    let newTasks = [];
    for (let i of dataObject.value.tasks) {
      if (i.id == id) continue;
      newTasks.push(i);
    }
    dataObject.value.tasks = newTasks;
  },
  everydayTaskCompleted: (id) => {
    let newTasks = [];
    let newTask;
    for (let i of dataObject.value.tasks) {
      if (i.id == id) {
        newTask = JSON.parse(JSON.stringify(i));
        newTask.lastTime = Math.floor((((((Date.now()/1000)/60)-(new Date()).getTimezoneOffset()-300)/60)/24));
        newTasks.push(newTask);
        continue;
      }
      newTasks.push(i);
    }
    dataObject.value.tasks = newTasks;
  },
  toggleTask: (id) => {
    let newTasks = [];
    let newTask;
    for (let i of dataObject.value.tasks) {
      if (i.id == id) {
        newTask = JSON.parse(JSON.stringify(i));
        continue;
      }
      newTasks.push(i);
    }
    newTask.isFast = !newTask.isFast;
    newTasks.unshift(newTask);
    dataObject.value.tasks = newTasks;
  },
  newNote: (text) => {
    dataObject.value.notes.unshift({ id: crypto.randomUUID(), text: text });
  },
  delNote: (id) => {
    let newNotes = [];
    for (let i of dataObject.value.notes) {
      if (i.id == id) continue;
      newNotes.push(i);
    }
    dataObject.value.notes = newNotes;
  },
  bumpNote: (id) => {
    let newNote;
    for (let i of dataObject.value.notes) {
      if (i.id == id) newNote = JSON.parse(JSON.stringify(i));
    }
    let newNotes = [];
    for (let i of dataObject.value.notes) {
      if (i.id == id) continue;
      newNotes.push(i);
    }
    dataObject.value.notes = newNotes;
    dataObject.value.notes.unshift(newNote);
  },
  setDataObject: (obj) => {
    dataObject.value = JSON.parse(JSON.stringify(obj));
  },
  clearDataObject: () => {
    dataObject.value = {
      tasks: [],
      notes: [],
      scripts: []
    };
  },
  planTask: (taskId, dateText) => {
    let newTasks = [];
    let newTask;
    for (let i of dataObject.value.tasks) {
      if (i.id == taskId) {
        newTask = JSON.parse(JSON.stringify(i));
        newTask.isPlaned = true;
        newTask.dateText = dateText;
        newTasks.push(newTask);
        continue;
      }
      newTasks.push(i);
    }
    dataObject.value.tasks = newTasks;
  },
  unplanTask: (taskId) => {
    let newTasks = [];
    let newTask;
    for (let i of dataObject.value.tasks) {
      if (i.id == taskId) {
        newTask = JSON.parse(JSON.stringify(i));
        newTask.isPlaned = false;
        newTask.dateText = "";
        newTasks.push(newTask);
        continue;
      }
      newTasks.push(i);
    }
    dataObject.value.tasks = newTasks;
  }
};

provide("dataObject", dataObject);
provide("dataMethods", dataMethods);


</script>

<template>
  <div class="container-fluid">
    <div class="nav nav-underline">
      <RouterLink v-for="i in notHiddenRoutes" v-bind:key="i.path" class="nav-link"
        v-bind:class="{ active: (i.path == currentRoutePath) }" v-bind:to="i.path" v-on:click="onPageChange(i.path)">{{
          i.name }}</RouterLink>
    </div>
    <div class="container-fluid mt-3">
      <RouterView />
    </div>
  </div>

  <CreateTaskModal />
  <CreateNoteModal />
  <ImportJsonModal />
  <PlanTaskModal />
</template>

<style scoped></style>
