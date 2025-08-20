<template>
  <LogoHeader :showBoth="false" />

  <h1 class="hello">Olá, Alfredo!</h1>

  <div class="search-container">
    <img @click="focusInput()" class="search-icon" src="../assets/action-icons/search.png" />
    <input ref="inputRef" placeholder="Pesquisar" />
    <!-- <img class="mic-icon" src="../assets/action-icons/mic.png" /> -->
  </div>

  <div class="actions-container">
    <LongeButton v-for="action, index in actions" :variant="index % 2 == 0 ? 'primary' : 'secondary'">
      <RouterLink :to="action.to">
        <img :src="action.icon" />
        <span>{{ action.text }}</span>
      </RouterLink>
    </LongeButton>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { setStatusBarLight } from '@/utils/statusBar';
import LogoHeader from '@/components/LogoHeader.vue';

import healthIcon from '../assets/action-icons/health.png'
import wellBeingIcon from '../assets/action-icons/well-being.png'
import activitiesIcon from '../assets/action-icons/activities.png'
import foodIcon from '../assets/action-icons/food.png'
import calendarIcon from '../assets/action-icons/calendar.png'
import statusIcon from '../assets/action-icons/status.png'
import LongeButton from '@/components/LongeButton.vue';

onMounted(async () => {
  await setStatusBarLight();
})

const inputRef = ref();

const actions = [
  { icon: healthIcon, text: "Saúde", to: "/options/health" },
  { icon: wellBeingIcon, text: "Bem-estar", to: "/options/wellBeing" },
  { icon: activitiesIcon, text: "Atividades", to: "/options/activities" },
  { icon: foodIcon, text: "Alimentação", to: "/options/food" },
  { icon: calendarIcon, text: "Agenda", to: "/options/calendar" },
  { icon: statusIcon, text: "Status", to: "/options/status/" }
]

function focusInput() {
  inputRef.value.focus();
}
</script>

<style lang="scss" scoped>
.hello {
  color: var(--color-secondary);
  text-align: center;
  font-size: 2em;
  margin-top: 16px;
  margin-bottom: 48px;
}

.search-container {
  position: relative;

  img {
    position: absolute;
    height: 25px;
    top: 50%;
    transform: translateY(-50%);

    &.search-icon {
      left: 8px;
    }

    &.mic-icon {
      right: 8px;
    }
  }

  input {
    width: 100%;
    background-color: var(--color-primary);
    color: white;
    border: solid 1px #b2b2b2;
    border-radius: 10px;
    font-size: 1em;
    padding: 12px 8px 12px calc(25px + 8px + 8px);

    &::placeholder {
      color: white;
    }
  }
}

.actions-container {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  margin-top: 48px;
  column-gap: 12px;
  row-gap: 24px;

  button {
    font-size: 1rem;
    padding: 0;
    border-radius: 10px;
    padding: 12px 0;

    a {
      color: #fff;
      text-decoration: none;
    }

    img {
      display: block;
      height: 50px;
      margin: auto;
      margin-bottom: 8px;
    }
  }
}
</style>