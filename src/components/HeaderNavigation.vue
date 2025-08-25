<template>
  <div>
    <div :class="['navigation-menu', { 'd-none': $route.path == '/' }]">
      <button @click="back" :class="['back', { 'op-0': $route.path == '/home' }]">
        <ColoredPng :src="backImg" />
      </button>

      <button class="menu" @click="toggleSidebar">
        <ColoredPng :src="menuImg" />
      </button>
    </div>

    <div :class="['sidebar', { 'sidebar-open': sidebarOpen }]">
      <div class="background" @click="toggleSidebar"></div>
      <ul>
        <li v-for="option in sidebarOptions" @click="toggleSidebar">
          <RouterLink :to="option.to">{{ option.text }}</RouterLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import ColoredPng from './ColoredPng.vue';

import backImg from '@/assets/action-icons/back.png'
import menuImg from '@/assets/action-icons/menu.png'

const router = useRouter();
const sidebarOpen = ref<boolean>(false);

const sidebarOptions = [
  { text: "Início", to: "/home" },
  { text: "Saúde", to: "/options/health" },
  { text: "Bem-estar", to: "/options/wellBeing" },
  { text: "Atividades", to: "/options/activities" },
  { text: "Alimentação", to: "/options/food" },
  { text: "Agenda", to: "/options/calendar" },
  { text: "Status", to: "/options/status/" },
  { text: "Sair", to: "/" },
]

function back() {
  router.go(-1);
}

function toggleSidebar() {
  sidebarOpen.value = !sidebarOpen.value;
}
</script>

<style lang="scss" scoped>
.navigation-menu {
  display: flex;
  justify-content: space-between;
  width: calc(100% - (var(--area-sides) * 2));
  position: fixed;
  top: var(--area-top);
  left: var(--area-sides);

  button {
    border: none;
    background: transparent;
    padding: 0;
    width: 50px;

    &.menu {
      width: 40px;
    }
  }
}

.sidebar {
  position: fixed;
  top: var(--area-top);
  right: -100%;
  z-index: 1;
  height: calc(100vh - var(--area-top));
  width: 100vw;

  transition: all 0.4s ease-out;

  &-open {
    right: 0;
  }

  .background {
    background-color: rgba(0, 0, 0, 0.5);
    width: 100vw;
    height: 100%;
    position: absolute;
    z-index: -1;
  }

  ul {
    margin-top: 0;
    padding-top: 1px;
    background-color: white;
    border-left: solid 3px var(--color-primary);
    width: 70vw;
    height: 100%;
    margin-left: auto;
    list-style: none;

    li {
      font-size: 1.6rem;
      margin-top: 24px;
      text-transform: uppercase;

      a {
        color: black;
      }
    }
  }
}
</style>