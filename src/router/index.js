import { createRouter, createWebHistory } from 'vue-router'
import Homepage from '@/views/homepage.vue'
import Secpage from '@/views/secpage.vue'
import LogMasuk from '@/views/auth/login.vue'
import Register from '@/views/auth/register.vue'

const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', component: LogMasuk },
  { path: '/register', component: Register },
  { path: '/homepage', component: Homepage },
  { path: '/secpage', component: Secpage },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
