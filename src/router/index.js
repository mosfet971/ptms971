import { createRouter, createMemoryHistory } from 'vue-router'
import OtherView from '../views/OtherView.vue';
import JsonView from "../views/JsonView.vue";
import NotesViewC4 from '../views/NotesViewC4.vue';
import NotesViewC3 from '../views/NotesViewC3.vue';
import NotesViewC2 from '../views/NotesViewC2.vue';
import NotesViewC1 from '../views/NotesViewC1.vue';
import NotesViewC0 from '../views/NotesViewC0.vue';

const router = createRouter({
  history: createMemoryHistory(),
  routes: [
    {
      path: '/0',
      name: "K4", 
      component: NotesViewC4
    },
    {
      path: '/1',
      name: "K3", 
      component: NotesViewC3
    },
    {
      path: '/2',
      name: "K2", 
      component: NotesViewC2
    },
    {
      path: '/3',
      name: "К1",
      component: NotesViewC1
    },
    {
      path: '/4',
      name: "К0",
      component: NotesViewC0
    },
    {
      path: '/',
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
