import { createRouter, createMemoryHistory } from 'vue-router'
import NotesView from "../views/NotesView.vue";
import OtherView from '../views/OtherView.vue';
import JsonView from "../views/JsonView.vue";
import TacticalLevelTasksView from '../views/TacticalLevelTasksView.vue';
import ExecutiveLevelTasksView from '../views/ExecutiveLevelTasksView.vue';
import StrategicLevelTasksView from '../views/StrategicLevelTasksView.vue';

const router = createRouter({
  history: createMemoryHistory(),
  routes: [
    {
      path: '/1',
      name: "ЗСУ", // Задачи стратегического уровня
      component: StrategicLevelTasksView
    },
    {
      path: '/2',
      name: "ЗТУ", // Задачи тактического уровня
      component: TacticalLevelTasksView
    },
    {
      path: '/3',
      name: "ЗИУ", // Задачи исполнительного уровня
      component: ExecutiveLevelTasksView
    },
    {
      path: '/4',
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
