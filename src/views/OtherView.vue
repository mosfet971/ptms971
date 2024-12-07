<script setup>
import { inject } from 'vue';
import ImportJsonModalButton from '../components/modalWindows/ImportJsonModalButton.vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const dataMethods = inject("dataMethods");

</script>

<template>
  <p>
    "ptms971" - приложение для упрощения планирования и создания заметок. Есть поддержка markdown.
    Приложение помогает реализовать концепцию планирования "стратегия-планы-расписание". <br/><br/>
    Вкладки интерфейса, обозначенные аббревиатурами: <br/><br/>
    СНР - стратегические направления работы. Один текст. Рекомендуется изменять раз в несколько месяцев. <br/><br/>
    ПП - планы проектов (например нумерованные списки их задач и подзадач с дополнительными пометками). Произвольное
    количество текстов. <br/><br/>
    РНБВ - расписание на ближайшее время. Один текст. Рекомендуется изменять каждый день утром, составляя новый
    почасовой список действий на предстоящий день.
  </p>

  <button class="btn btn-primary mt-3" v-on:click="router.push('/json')">Экспорт данных</button>
  <br />
  <ImportJsonModalButton class="mt-3">Импорт данных</ImportJsonModalButton>
  <br />
  <button class="btn btn-primary mt-3" v-on:click="dataMethods.clearDataObject()">Очистить хранилище</button>
</template>