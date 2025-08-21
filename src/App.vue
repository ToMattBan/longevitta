<template>
  <main>
    <div class="view">
      <RouterView />
    </div>

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
  height: calc(100vh - var(--area-top));
  overflow: scroll;

  --bottom-icons-size: 55px;

  .view {
    margin-bottom: calc(var(--bottom-icons-size) + 8px);
    padding-bottom: 24px;
  }

  .bottom-buttons {
    display: flex;
    justify-content: space-between;
    position: fixed;
    bottom: 0px;
    padding-bottom: 8px;
    background-color: var(--background-color);
    width: calc(100% - (var(--area-sides) * 2));

    button {
      background-color: var(--background-color);
      padding: 0;
      border: none;
      width: var(--bottom-icons-size);
    }
  }
}
</style>