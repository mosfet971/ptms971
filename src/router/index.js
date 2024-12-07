import { createRouter, createMemoryHistory } from 'vue-router'
import NotesView from "../views/NotesView.vue";
import OtherView from '../views/OtherView.vue';
import JsonView from "../views/JsonView.vue";
import ProjectsView from '../views/ProjectsView.vue';
import StrategyView from '../views/StrategyView.vue';
import ScheduleView from '../views/ScheduleView.vue';

const router = createRouter({
  history: createMemoryHistory(),
  routes: [
    {
      path: '/strategy',
      name: "СНР", // Стратегические направления работы
      component: StrategyView
    },
    {
      path: '/projects',
      name: "ПП", // Планы проектов
      component: ProjectsView
    },
    {
      path: '/schedule',
      name: "РНБВ", // Расписание на ближайшее время
      component: ScheduleView
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
