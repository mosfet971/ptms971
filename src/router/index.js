import { createRouter, createMemoryHistory } from 'vue-router'
import TasksView from "../views/TasksView.vue";
import NotesView from "../views/NotesView.vue";
import OtherView from '../views/OtherView.vue';
import JsonView from "../views/JsonView.vue";

const router = createRouter({
  history: createMemoryHistory(),
  routes: [
    {
      path: '/',
      name: "Задачи",
      component: TasksView
    },
    {
      path: '/notes',
      name: "Заметки",
      component: NotesView
    },
    {
      path: '/other',
      name: "Прочее",
      component: OtherView
    },
    {
      path: '/json',
      name: "",
      component: JsonView,
    }
  ]
})

export default router
