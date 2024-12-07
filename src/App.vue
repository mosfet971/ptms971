<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { computed, ref, provide, watchEffect, onMounted } from "vue";
import { useRoute, useRouter } from 'vue-router';
import CreateNoteModal from './components/modalWindows/CreateNoteModal.vue';
import ImportJsonModal from './components/modalWindows/ImportJsonModal.vue';
import CreateProjectModal from './components/modalWindows/CreateProjectModal.vue';
import EditStrategyModal from './components/modalWindows/EditStrategyModal.vue';
import EditScheduleModal from './components/modalWindows/EditScheduleModal.vue';

const route = useRoute();
const router = useRouter();

const currentRoutePath = computed(() => route.path);
const routes = router.getRoutes();

const notHiddenRoutes = computed(() => routes.filter((v) => v.name !== ""));

onMounted(() => {
  if (localStorage.getItem("lastPath")) {
    router.push(localStorage.getItem("lastPath"));
  } else {
    router.push("/strategy");
  }
});

let onPageChange = (path) => {
  localStorage.setItem("lastPath", path);
};

let dataObject;

if (localStorage.getItem("dataObject")) {
  dataObject = ref(JSON.parse(localStorage.getItem("dataObject")));
  for (const i of ["tasks", "notes", "scripts", "strategyText", "projects", "scheduleText"]) {
    if (!dataObject.value[i]) {
      if(i=="strategyText" || i=="scheduleText") {
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
    scheduleText: ""
  });
}

watchEffect(() => {
  localStorage.setItem("dataObject", JSON.stringify(dataObject.value));
});


let dataMethods = {
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

  newProject: (text) => {
    dataObject.value.projects.unshift({ id: crypto.randomUUID(), text: text });
  },
  delProject: (id) => {
    let newProjects = [];
    for (let i of dataObject.value.projects) {
      if (i.id == id) continue;
      newProjects.push(i);
    }
    dataObject.value.projects = newProjects;
  },
  bumpProject: (id) => {
    let newProject;
    for (let i of dataObject.value.projects) {
      if (i.id == id) newProject = JSON.parse(JSON.stringify(i));
    }
    let newProjects = [];
    for (let i of dataObject.value.projects) {
      if (i.id == id) continue;
      newProjects.push(i);
    }
    dataObject.value.projects = newProjects;
    dataObject.value.projects.unshift(newProject);
  },

  setStrategyText: (text) => {
    dataObject.value.strategyText = text;
  },

  setScheduleText: (text) => {
    dataObject.value.scheduleText = text;
  },

  setDataObject: (obj) => {
    dataObject.value = JSON.parse(JSON.stringify(obj));
  },
  clearDataObject: () => {
    dataObject.value = {
      tasks: [],
      notes: [],
      scripts: [],
      strategyText: "",
      projects: [],
      scheduleText: ""
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

  <CreateNoteModal />
  <ImportJsonModal />
  <CreateProjectModal/>
  <EditStrategyModal/>
  <EditScheduleModal/>
</template>

<style scoped></style>
