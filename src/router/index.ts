import { createRouter, createWebHistory } from 'vue-router'

import login from '@/pages/login.vue'
import register from '@/pages/register.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", component: login, alias: '/login' },
    { path: '/register', component: register }
  ],
})

export default router
