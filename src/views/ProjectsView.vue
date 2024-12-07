<script setup>
import { inject, computed } from 'vue';
import markdownit from 'markdown-it'
import ProjectCard from '../components/cards/ProjectCard.vue';
import CreateProjectModalButton from '../components/modalWindows/CreateProjectModalButton.vue';
const md = markdownit()

const dataObject = inject("dataObject");

const renderedProjects = computed(()=>{
  let projects = [];
  let newProject = {};
  for (let i of dataObject.value.projects) {
    newProject = JSON.parse(JSON.stringify(i));
    newProject.text = md.render(i.text);
    projects.push(newProject);
  }
  return projects;
});

</script>

<template>
  <CreateProjectModalButton class="mb-3">Добавить</CreateProjectModalButton>
  <hr/>

  <div class="container-fluid mt-3 row">
    <p style="color: grey; padding: 0; margin: 0;" v-if="JSON.stringify(renderedProjects) == '[]'">Пусто</p>
    <ProjectCard v-for="i in renderedProjects" v-bind:key="i.id" class="col-md-8 mt-3" v-bind:id="i.id" v-bind:text="i.text" />
  </div>

  <span class="m-3"></span>
</template>
