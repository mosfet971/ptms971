<script setup>
import { inject, computed, ref } from 'vue';
import CreateNoteModalButton from "../components/modalWindows/CreateNoteModalButton.vue";
import NoteCard from "../components/cards/NoteCard.vue";
import markdownit from 'markdown-it'
import MiniSearch from 'minisearch';
const md = markdownit();

const dataObject = inject("dataObject");

const searchInputValue = ref("");

const minisearchRef = computed(() => {
  let inpNotes = JSON.parse(JSON.stringify(dataObject.value.notes1));
  let miniSearch = new MiniSearch({
    fields: ["text"],
    storeFields: ["id", "text"],
    searchOptions: {
      prefix: true
    }
  })

  miniSearch.addAll(inpNotes);
  return miniSearch;
});

const renderedNotes = computed(() => {
  let inpNotes = JSON.parse(JSON.stringify(dataObject.value.notes1));
  let notes = [];

  if (searchInputValue.value !== "") {
    let searchResults = minisearchRef.value.search(searchInputValue.value);
    //console.log(searchResults, searchInputValue.value);
    notes = searchResults;

  } else {
    notes = inpNotes;
  }

  let newNote = {};
  let outNotes = [];

  for (let i of notes) {
    newNote = JSON.parse(JSON.stringify(i));
    newNote.text = md.render(i.text);
    newNote.rawText = i.text;
    outNotes.push(newNote);
  }

  return outNotes;
});

</script>

<template>
  <div class="input-group mb-3">
    <span class="input-group-text" style="user-select: none;" id="addon">🔍︎</span>
    <input v-model="searchInputValue" type="text" class="form-control" placeholder="Запрос для поиска"
      aria-describedby="addon">
  </div>

  <hr />
  <CreateNoteModalButton chanel-id="1" class="mb-3">Добавить</CreateNoteModalButton>
  <hr />

  <div class="container-fluid mt-3 row">
    <p style="color: grey; padding: 0; margin: 0;" v-if="JSON.stringify(renderedNotes) == '[]'">Пусто</p>
    <NoteCard v-for="i in renderedNotes" v-bind:key="i.id" class="col-md-8 mt-3" v-bind:id="i.id"
      v-bind:text="i.text" v-bind:rawText="i.rawText"/>
  </div>

  <span class="m-3"></span>
</template>
