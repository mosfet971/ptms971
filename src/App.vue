<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { computed, ref, provide, watchEffect, onMounted } from "vue";
import { useRoute, useRouter } from 'vue-router';

import ImportJsonModal from './components/modalWindows/ImportJsonModal.vue';

import CreateNoteModal0 from './components/modalWindows/CreateNoteModal0.vue';
import CreateNoteModal1 from './components/modalWindows/CreateNoteModal1.vue';
import CreateNoteModal2 from './components/modalWindows/CreateNoteModal2.vue';
import CreateNoteModal3 from './components/modalWindows/CreateNoteModal3.vue';
import CreateNoteModal4 from './components/modalWindows/CreateNoteModal4.vue';

const route = useRoute();
const router = useRouter();

const currentRoutePath = computed(() => route.path);
const routes = router.getRoutes();

const notHiddenRoutes = computed(() => routes.filter((v) => v.name !== ""));

onMounted(() => {
  if (localStorage.getItem("lastPath")) {
    router.push(localStorage.getItem("lastPath"));
  } else {
    router.push("/");
  }
});

let onPageChange = (path) => {
  localStorage.setItem("lastPath", path);
};

let dataObject;

if (localStorage.getItem("dataObject")) {
  dataObject = ref(JSON.parse(localStorage.getItem("dataObject")));
  for (const i of ["tasks", "notes", "scripts", "strategyText", "projects", "scheduleText", "tacticalLevelTasksText", "executiveLevelTasksText", "strategicLevelTasksText", "notes1", "notes2", "notes3", "notes4"]) {
    if (!dataObject.value[i]) {
      if (i == "strategyText" || i == "scheduleText" || i == "tacticalLevelTasksText" || i == "executiveLevelTasksText" || i == "strategicLevelTasksText") {
        dataObject.value[i] = "";
      } else {
        dataObject.value[i] = [];
      }
    }
  }
} else {
  dataObject = ref({
    tasks: [],
    notes: [],
    scripts: [],
    strategyText: "",
    projects: [],
    scheduleText: "",
    tacticalLevelTasksText: "",
    executiveLevelTasksText: "",
    strategicLevelTasksText: "",
    notes1: [],
    notes2: [],
    notes3: [],
    notes4: []
  });
}

watchEffect(() => {
  localStorage.setItem("dataObject", JSON.stringify(dataObject.value));
});


let dataMethods = {
  newNote: (chanelId, text) => {
    let id_ = chanelId;
    if (id_ === "0") {
      id_ = "";
    }
    dataObject.value["notes" + id_].unshift({ id: crypto.randomUUID(), text: text });
  },
  delNote: (id) => {
    if (!confirm("Вы уверены, что хотите удалить заметку?")) {
      return false;
    }
    let newNotes = [];
    let lastFieldName = "";
    for (const fieldName of ["notes", "notes1", "notes2", "notes3", "notes4"]) {
      newNotes = [];
      for (let i of dataObject.value[fieldName]) {
        if (i.id == id) {
          lastFieldName = fieldName;
          continue;
        }
        newNotes.push(i);
      }
      if (lastFieldName !== "") {
        break;
      }
    }
    dataObject.value[lastFieldName] = newNotes;
  },
  bumpNote: (id) => {
    let newNote;
    let newNotes;
    let lastFieldName = "";
    for (const fieldName of ["notes", "notes1", "notes2", "notes3", "notes4"]) {
      newNote = {};
      for (let i of dataObject.value[fieldName]) {
        if (i.id == id) newNote = JSON.parse(JSON.stringify(i));
      }
      newNotes = [];
      for (let i of dataObject.value[fieldName]) {
        if (i.id == id) {
          lastFieldName = fieldName;
          continue;
        }
        newNotes.push(i);
      }
      if (lastFieldName !== "") {
        break;
      }
    }
    dataObject.value[lastFieldName] = newNotes;
    dataObject.value[lastFieldName].unshift(newNote);
  },

  setTacticalLevelTasksText: (text) => {
    dataObject.value.tacticalLevelTasksText = text;
  },

  setStrategicLevelTasksText: (text) => {
    dataObject.value.strategicLevelTasksText = text;
  },

  setExecutiveLevelTasksText: (text) => {
    dataObject.value.executiveLevelTasksText = text;
  },

  setDataObject: (obj) => {
    dataObject.value = JSON.parse(JSON.stringify(obj));
  },
  clearDataObject: () => {
    if (!confirm("Вы уверены, что хотите очистить хранилище?")) {
      return false;
    }
    dataObject.value = {
      tasks: [],
      notes: [],
      scripts: [],
      strategyText: "",
      projects: [],
      scheduleText: "",
      tacticalLevelTasksText: "",
      executiveLevelTasksText: "",
      strategicLevelTasksText: "",
      notes1: [],
      notes2: [],
      notes3: [],
      notes4: []
    };
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

  <ImportJsonModal />

  <CreateNoteModal0 />
  <CreateNoteModal1 />
  <CreateNoteModal2 />
  <CreateNoteModal3 />
  <CreateNoteModal4 />
</template>

<style scoped></style>
