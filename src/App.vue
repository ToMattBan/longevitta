<template>
  <main>
    <RouterView />

    <div class="bottom-buttons">
      <button>
        <a href="tel:190">
          <ColoredPng :src="sosIcon" />
        </a>
      </button>

      <button>
        <a href="https://wa.me/47996728554">
          <ColoredPng :src="wppIcon" />
        </a>
      </button>
    </div>
  </main>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { StatusBar } from '@capacitor/status-bar';

import ColoredPng from './components/ColoredPng.vue';
import sosIcon from './assets/action-icons/sos.png';
import wppIcon from './assets/action-icons/whatsapp.png'

onMounted(async () => {
  await StatusBar.show();
})
</script>

<style lang="scss" scoped>
main {
  position: relative;
  min-height: calc(100vh - var(--area-top));

  .bottom-buttons {
    display: flex;
    justify-content: space-between;
    position: absolute;
    bottom: 8px;
    width: 100%;
    background-color: white;

    button {
      padding: 0;
      background-color: transparent;
      border: none;
      width: 55px;
    }
  }
}
</style>