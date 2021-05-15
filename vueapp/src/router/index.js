import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Date_Time from '../components/Date_Time.vue'
import Stopwatch from '../components/Stopwatch.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/date',
    name: 'Date',
    component: Date_Time
  },
  {
    path: '/stopwatch',
    name: 'Stopwatch',
    component: Stopwatch
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
