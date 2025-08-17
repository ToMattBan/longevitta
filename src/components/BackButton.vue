<template>
  <button @click="back">
    <ColoredPng :src="backImg" />
  </button>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import ColoredPng from './ColoredPng.vue';

import backImg from '@/assets/action-icons/back.png'

const router = useRouter();

function back() {
  router.go(-1)
}
</script>

<style lang="scss" scoped>
button {
  border: none;
  background: transparent;
  padding: 0;

  position: absolute;
  width: 50px;
  left: 0;
}
</style>