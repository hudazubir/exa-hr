import { createRouter, createWebHistory } from 'vue-router'
import Homepage from '@/views/homepage.vue'
import Secpage from '@/views/secpage.vue'
import LogMasuk from '@/views/Login/logMasuk.vue'
import Register from '@/views/Login/register.vue'

const routes = [
  { path: '/', component: Homepage },
  { path: '/secpage', component: Secpage },
  { path: '/login', component: LogMasuk},
  { path: '/register', component: Register}
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
