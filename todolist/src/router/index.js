import { createRouter, createWebHashHistory } from "vue-router";
import About from '../views/About.vue'
import List from '../components/List.vue'

const routes = [
  {
    path: "/",
    name: "List",
    component: List,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },

];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
