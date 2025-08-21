import { createRouter, createWebHistory } from 'vue-router'

import login from '@/pages/login.vue'
import register from '@/pages/register.vue'
import home from '@/pages/home.vue'
import options from '@/pages/options.vue'
import profile from '@/pages/profile.vue'
import profissional from "@/pages/profissional/index.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", component: login, alias: '/login' },
    { path: '/register', component: register },
    { path: '/home', component: home },
    { path: '/options/:type', component: options },
    { path: '/profile', component: profile },
    { path: '/profissional', component: profissional }
  ],
})

export default router
