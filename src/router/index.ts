import { createRouter, createWebHistory } from 'vue-router'

import login from '@/pages/login.vue'
import register from '@/pages/register.vue'
import home from '@/pages/home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", component: login, alias: '/login' },
    { path: '/register', component: register },
    { path: '/home', component: home }
  ],
})

export default router
