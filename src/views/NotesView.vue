<script setup>
import { inject, computed } from 'vue';
import CreateNoteModalButton from "../components/modalWindows/CreateNoteModalButton.vue";
import NoteCard from "../components/cards/NoteCard.vue";
import markdownit from 'markdown-it'
const md = markdownit()

const dataObject = inject("dataObject");

const renderedNotes = computed(()=>{
  let notes = [];
  let newNote = {};
  for (let i of dataObject.value.notes) {
    newNote = JSON.parse(JSON.stringify(i));
    newNote.text = md.render(i.text);
    notes.push(newNote);
  }
  return notes;
});

</script>

<template>
  <CreateNoteModalButton class="mb-3">Добавить</CreateNoteModalButton>
  <hr/>

  <div class="container-fluid mt-3 row">
    <p style="color: grey; padding: 0; margin: 0;" v-if="JSON.stringify(renderedNotes) == '[]'">Сейчас заметок нет</p>
    <NoteCard v-for="i in renderedNotes" v-bind:key="i.id" class="col-md-8 mt-3" v-bind:id="i.id" v-bind:text="i.text" />
  </div>

  <span class="m-3"></span>
</template>
