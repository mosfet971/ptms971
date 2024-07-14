<script setup>
import { inject } from 'vue';
import ImportJsonModalButton from '../components/modalWindows/ImportJsonModalButton.vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const dataMethods = inject("dataMethods");

</script>

<template>
  <p>ptms971 - приложение для упрощения управления личными задачами и заметками. Есть поддержка markdown.
    Чтобы ежедневная задача исчезла навсегда, нужно нажать кнопку "Удалить" на ней. Предлагаемый вариант использования: 
    сохранять в заметки новую информацию, а затем на ее основе создавать задачи.
  </p>

  <button class="btn btn-primary mt-3" v-on:click="router.push('/json')">Экспорт данных</button>
  <br/>
  <ImportJsonModalButton class="mt-3">Импорт данных</ImportJsonModalButton>
  <br/>
  <button class="btn btn-primary mt-3" v-on:click="dataMethods.clearDataObject()">Очистить хранилище</button>
</template>