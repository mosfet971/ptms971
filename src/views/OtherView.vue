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
    Приложение помогает реализовать концепцию организации планирования, основанную на постановке задач трех
    уровней. Достигается это при помощи текстовых списков: списка задач стратегического уровня, списка задач тактического уровня и списка задач исполнительного уровня. Для каждой задачи рекомендуется указывать каким-либо образом время, к которому она должна быть выполнена.
    Также рекомендуется ежедневно перечитывать все 3 списка задач. <br/><br/>
    Вкладки интерфейса, обозначенные аббревиатурами: <br/><br/>
    ЗСУ - задачи стратегического уровня. <br/><br/>
    ЗТУ - задачи тактического уровня. <br/><br/>
    ЗИУ - задачи исполнительного уровня.
  </p>

  <button class="btn btn-primary mt-3" v-on:click="router.push('/json')">Экспорт данных</button>
  <br />
  <ImportJsonModalButton class="mt-3">Импорт данных</ImportJsonModalButton>
  <br />
  <button class="btn btn-primary mt-3" v-on:click="dataMethods.clearDataObject()">Очистить хранилище</button>
</template>